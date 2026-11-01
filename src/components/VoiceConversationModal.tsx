import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Mic, MicOff, Volume2, VolumeX, Sparkles, Send, 
  RotateCcw, BookOpen, ChevronRight, School, Globe 
} from 'lucide-react';
import { COLLEGES, SAMPLE_SUBJECTS } from '../data/colleges';

interface Message {
  id: string;
  sender: 'user' | 'gemini';
  text: string;
  timestamp: string;
  language?: 'en' | 'te';
}

interface VoiceConversationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCollege?: string;
  initialSubject?: string;
  initialUnit?: number;
  onOpenNoteForUnit?: (subjectId: string, unitNumber: number) => void;
}

export const VoiceConversationModal: React.FC<VoiceConversationModalProps> = ({
  isOpen,
  onClose,
  initialCollege = 'gvp',
  initialSubject,
  initialUnit,
  onOpenNoteForUnit
}) => {
  const [selectedCollege, setSelectedCollege] = useState(initialCollege);
  const [selectedSubjectId, setSelectedSubjectId] = useState(initialSubject || SAMPLE_SUBJECTS[0].id);
  const [voiceLanguage, setVoiceLanguage] = useState<'en' | 'te'>('en');
  
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceMuted, setVoiceMuted] = useState(false);

  const [inputPrompt, setInputPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'gemini',
      text: 'Hello! I am your Syllabu Voice AI tutor powered by Gemini. Ask me any question from your college syllabus, exam derivations, or mess schedule. Tap the mic and speak, or type below!',
      timestamp: 'Just now'
    }
  ]);

  const recognitionRef = useRef<any>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const activeSubject = SAMPLE_SUBJECTS.find(s => s.id === selectedSubjectId) || SAMPLE_SUBJECTS[0];

  // Auto-scroll chat
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isThinking]);

  // Setup Web Speech Recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = voiceLanguage === 'te' ? 'te-IN' : 'en-IN';

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onresult = (event: any) => {
          const current = event.resultIndex;
          const transcript = event.results[current][0].transcript;
          setInputPrompt(transcript);
        };

        recognition.onerror = (event: any) => {
          console.warn('Speech recognition error:', event.error);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [voiceLanguage]);

  // Text to Speech playback
  const speakText = (text: string, lang: 'en' | 'te') => {
    if (voiceMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*#_`]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang === 'te' ? 'te-IN' : 'en-IN';
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    currentUtteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handleStopSpeaking = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const toggleMic = () => {
    if (isSpeaking) {
      handleStopSpeaking();
    }

    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      if (inputPrompt.trim()) {
        handleSendMessage(inputPrompt);
      }
    } else {
      if (recognitionRef.current) {
        try {
          setInputPrompt('');
          recognitionRef.current.start();
        } catch (e) {
          console.error(e);
        }
      } else {
        alert('Speech recognition is not supported in this browser. You can type your question in the text box below!');
      }
    }
  };

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputPrompt;
    if (!textToSend.trim() || isThinking) return;

    // Stop ongoing speech
    handleStopSpeaking();
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
    }

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputPrompt('');
    setIsThinking(true);

    try {
      const selectedCollegeObj = COLLEGES.find(c => c.id === selectedCollege);
      const res = await fetch('/api/gemini/voice-conversation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend.trim(),
          conversationHistory: messages,
          language: voiceLanguage,
          context: {
            college: selectedCollegeObj ? `${selectedCollegeObj.fullName} (${selectedCollegeObj.name})` : selectedCollege,
            subject: activeSubject ? `${activeSubject.name} (${activeSubject.code})` : 'Engineering Syllabus',
            unit: initialUnit || 1
          }
        })
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const replyText = data.reply || 'Here is your syllabus guide.';

      const geminiMessage: Message = {
        id: `gemini-${Date.now()}`,
        sender: 'gemini',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        language: voiceLanguage
      };

      setMessages(prev => [...prev, geminiMessage]);
      speakText(replyText, voiceLanguage);
    } catch (err: any) {
      console.error(err);
      const errorMessage: Message = {
        id: `gemini-${Date.now()}`,
        sender: 'gemini',
        text: 'I could not connect to Gemini AI right now. Please verify your GEMINI_API_KEY or network connection.',
        timestamp: 'Just now'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsThinking(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 flex flex-col h-[90vh] max-h-[760px] overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white px-5 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-lg text-white">
                  Passkey Gemini Voice Tutor
                </h3>
                <span className="bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Live AI
                </span>
              </div>
              <p className="text-xs text-blue-100/80 font-normal">
                High-yield conversational exam tutor for Visakha Valley School & Vizag Colleges
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Voice Mute Toggle */}
            <button
              onClick={() => {
                if (isSpeaking) handleStopSpeaking();
                setVoiceMuted(!voiceMuted);
              }}
              className={`p-2 rounded-lg transition-colors ${
                voiceMuted ? 'bg-red-500/20 text-red-200' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              title={voiceMuted ? 'Unmute AI Voice' : 'Mute AI Voice'}
            >
              {voiceMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Language Switch */}
            <button
              onClick={() => {
                const next = voiceLanguage === 'en' ? 'te' : 'en';
                setVoiceLanguage(next);
              }}
              className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors border border-white/15"
              title="Toggle Voice Language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-200" />
              <span>{voiceLanguage === 'te' ? 'తెలుగు' : 'English'}</span>
            </button>

            {/* Close */}
            <button
              onClick={() => {
                handleStopSpeaking();
                onClose();
              }}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Academic Context Selectors Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center gap-2">
            <School className="w-4 h-4 text-blue-600" />
            <span className="font-semibold text-slate-700">Target School / College:</span>
            <select
              value={selectedCollege}
              onChange={(e) => setSelectedCollege(e.target.value)}
              className="bg-white border border-slate-300 rounded-md px-2 py-1 text-slate-800 font-medium focus:ring-1 focus:ring-blue-500"
            >
              <optgroup label="Premier Schools (CBSE / ICSE)">
                {COLLEGES.filter(c => (c as any).category === 'school').map(c => (
                  <option key={c.id} value={c.id}>{c.name} ({c.type})</option>
                ))}
              </optgroup>
              <optgroup label="Engineering & Colleges">
                {COLLEGES.filter(c => (c as any).category !== 'school').map(c => (
                  <option key={c.id} value={c.id}>{c.name} ({c.location})</option>
                ))}
              </optgroup>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Subject:</span>
            <select
              value={selectedSubjectId}
              onChange={(e) => setSelectedSubjectId(e.target.value)}
              className="bg-white border border-slate-300 rounded-md px-2 py-1 text-slate-800 font-medium focus:ring-1 focus:ring-blue-500 max-w-[220px] truncate"
            >
              {SAMPLE_SUBJECTS.map(s => (
                <option key={s.id} value={s.id}>{s.name} ({s.code})</option>
              ))}
            </select>
          </div>
        </div>

        {/* Chat History & Voice Animation Area */}
        <div 
          ref={chatScrollRef}
          className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/60"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 shadow-sm text-sm sm:text-base leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                }`}
              >
                {/* Text */}
                <p className="whitespace-pre-line">{m.text}</p>

                {/* Footer of message */}
                <div
                  className={`mt-2 flex items-center justify-between text-[11px] pt-1 border-t ${
                    m.sender === 'user'
                      ? 'border-blue-500 text-blue-100'
                      : 'border-slate-100 text-slate-400'
                  }`}
                >
                  <span>{m.timestamp}</span>

                  {m.sender === 'gemini' && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => speakText(m.text, m.language || voiceLanguage)}
                        className="hover:text-blue-600 transition-colors flex items-center gap-1 font-medium"
                        title="Read aloud"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Listen</span>
                      </button>

                      {onOpenNoteForUnit && (
                        <button
                          onClick={() => {
                            onClose();
                            onOpenNoteForUnit(activeSubject.id, 1);
                          }}
                          className="hover:text-blue-600 transition-colors flex items-center gap-1 font-medium text-blue-600"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>View Note</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Thinking State */}
          {isThinking && (
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-2xl p-4 max-w-sm shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]"></span>
              </div>
              <span className="text-xs font-semibold text-slate-600">
                Gemini is analyzing your college syllabus...
              </span>
            </div>
          )}

          {/* Speaking Audio Visualizer Banner */}
          {isSpeaking && (
            <div className="sticky bottom-0 bg-blue-900/90 backdrop-blur-md text-white rounded-xl p-3 flex items-center justify-between shadow-lg border border-blue-400/30">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="w-1 h-4 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="w-1 h-6 bg-emerald-300 rounded-full animate-pulse [animation-delay:0.1s]"></span>
                  <span className="w-1 h-5 bg-cyan-300 rounded-full animate-pulse [animation-delay:0.2s]"></span>
                  <span className="w-1 h-3 bg-emerald-400 rounded-full animate-pulse [animation-delay:0.3s]"></span>
                </div>
                <span className="text-xs font-semibold">Gemini is speaking...</span>
              </div>
              <button
                onClick={handleStopSpeaking}
                className="text-xs bg-white/20 hover:bg-white/30 px-2.5 py-1 rounded-md transition-colors font-medium"
              >
                Stop audio
              </button>
            </div>
          )}
        </div>

        {/* Quick Question Chips */}
        <div className="bg-white border-t border-slate-100 px-4 py-2.5 overflow-x-auto flex items-center gap-2 text-xs shrink-0">
          <span className="font-semibold text-slate-500 whitespace-nowrap">Suggested:</span>
          
          <button
            onClick={() => handleSendMessage('Explain the 6 concave mirror ray diagrams for CBSE Class 10 Science in 60s')}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 transition-colors border border-slate-200"
          >
            🏫 VVS: Concave Mirror Ray Diagrams
          </button>

          <button
            onClick={() => handleSendMessage('How to prove that square root of 5 is irrational for CBSE Class 10 Maths?')}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 transition-colors border border-slate-200"
          >
            📐 VVS: Prove √5 is Irrational
          </button>
          
          <button
            onClick={() => handleSendMessage('Explain Newton\'s rings experiment derivation in 60 seconds')}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 transition-colors border border-slate-200"
          >
            ⚡ GVP: Newton's Rings derivation
          </button>
          
          <button
            onClick={() => handleSendMessage('What is the difference between singly and doubly linked list?')}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 transition-colors border border-slate-200"
          >
            📚 Singly vs Doubly Linked List
          </button>

          <button
            onClick={() => handleSendMessage('ఈ సబ్జెక్ట్ నుండి బోర్డ్ / మిడ్ ఎగ్జామ్ లో ఎక్కువగా అడిగే 3 ప్రశ్నలు ఏమిటి? (Top 3 exam questions in Telugu)')}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 transition-colors border border-slate-200"
          >
            🗣️ టాప్ 3 ఎగ్జామ్ ప్రశ్నలు (Telugu)
          </button>
        </div>

        {/* Voice Input & Controls Bar */}
        <div className="bg-white border-t border-slate-200 p-3 sm:p-4 shrink-0">
          <div className="flex items-center gap-2.5">
            
            {/* Big Mic Button with Pulse */}
            <button
              onClick={toggleMic}
              className={`p-3.5 rounded-2xl flex items-center justify-center transition-all ${
                isListening
                  ? 'bg-red-600 text-white animate-pulse shadow-lg shadow-red-500/40 ring-4 ring-red-200'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 active:scale-95'
              }`}
              title={isListening ? 'Stop Listening & Send' : 'Speak to Gemini'}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            {/* Input Field */}
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
                placeholder={
                  isListening
                    ? 'Listening to your voice... Speak now!'
                    : `Ask Gemini Voice AI (${voiceLanguage === 'te' ? 'తెలుగు లేదా ఇంగ్లీష్' : 'English or Telugu'})...`
                }
                className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>

            {/* Send Button */}
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputPrompt.trim() || isThinking}
              className="p-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white rounded-xl transition-all cursor-pointer shadow-sm disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 px-1">
            <span>Powered by Gemini 3.8 Flash • Real-time Speech & Text</span>
            <span>Tip: Tap the mic button to speak hands-free</span>
          </div>
        </div>

      </div>
    </div>
  );
};
