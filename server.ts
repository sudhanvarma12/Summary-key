import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini SDK with process.env.GEMINI_API_KEY
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

// API: Voice Conversation endpoint with Gemini AI
app.post('/api/gemini/voice-conversation', async (req: Request, res: Response) => {
  try {
    const { message, conversationHistory = [], context = {}, language = 'en' } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required.' });
      return;
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Graceful fallback if API key is not yet configured in Secrets
      const fallbackReply = language === 'te'
        ? `నమస్కారం! నేను సమ్మరీకీ వాయిస్ AI ని. మీ ప్రశ్న "${message}" కు సమాధానం: మీ సిలబస్ ప్రకారం యూనిట్ నోట్స్ మరియు PYQ లు సిద్ధంగా ఉన్నాయి. దయచేసి API కీని సెట్టింగ్స్‌లో జోడించండి.`
        : `Hello! I'm SummaryKey Voice AI. Regarding "${message}": For your exam preparation, focus on the step-by-step derivations and labeled diagrams in this unit. Please configure your GEMINI_API_KEY in the Secrets panel for real-time live AI responses!`;

      res.json({
        reply: fallbackReply,
        suggestedQuestions: [
          'What are the key derivations for the upcoming exam?',
          'Explain Newton\'s rings experiment or Ray Diagrams',
          'Give me a 2-minute summary of this unit'
        ]
      });
      return;
    }

    const institutionInfo = context.institution || context.college || 'Visakhapatnam Schools & Colleges (Visakha Valley School, GVP, GITAM, ANITS, AU)';
    const subjectInfo = context.subject || 'Syllabus';
    const unitInfo = context.unit ? `Unit/Chapter ${context.unit}` : 'General Syllabus';

    const systemInstruction = `You are "SummaryKey Voice AI", the brilliant, energetic conversational voice tutor for school and college students in Visakhapatnam (including premier schools like Visakha Valley School, Timpany, DPS, as well as colleges like GVPCOE, GITAM, ANITS, Raghu, AUCOE).
Current context:
- Target Institution: ${institutionInfo}
- Current Subject / Chapter: ${subjectInfo}
- Current Chapter/Unit: ${unitInfo}
- Target Language: ${language === 'te' ? 'Telugu (or conversational Telugu-English mixed as commonly spoken in Vizag)' : 'English with crisp clarity'}

Guidelines:
1. Speak directly as if talking out loud in a voice conversation.
2. Keep explanations concise, clear, and high-yield (under 120-140 words) so it sounds natural when spoken aloud.
3. For school students (e.g. Visakha Valley School CBSE Class 10/12): Focus on NCERT concepts, key board exam questions, ray diagrams, chemical balancing, and scoring tips.
4. For engineering college students: Focus on derivations, algorithms, and university mid-term question patterns.
5. If asked in Telugu or if language is 'te', respond warmly in Telugu or Telugu-English that Vizag students love.
6. End with an encouraging 1-sentence prompt for their upcoming exam.`;

    const formattedContents = [
      ...conversationHistory.slice(-4).map((h: { sender: string; text: string }) => ({
        role: h.sender === 'user' ? 'user' : 'model',
        parts: [{ text: h.text }]
      })),
      {
        role: 'user',
        parts: [{ text: message }]
      }
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: formattedContents,
      config: {
        systemInstruction
      }
    });

    const reply = response.text?.trim() || 'Here is the syllabus breakdown for your query.';

    // Generate 3 quick suggested follow-up prompts
    res.json({
      reply,
      suggestedQuestions: [
        'How many marks will this question carry in the exam?',
        'Give me the key formula to remember',
        'Can you summarize this in Telugu?'
      ]
    });
  } catch (error: any) {
    console.error('Error in Gemini voice conversation:', error);
    res.status(500).json({
      error: 'Failed to process voice conversation with Gemini.',
      details: error.message
    });
  }
});

// API: Complete all chapter information using Gemini AI (gemini-3.8-flash)
app.post('/api/gemini/complete-chapter', async (req: Request, res: Response) => {
  try {
    const { 
      subjectName = 'CBSE Science', 
      chapterTitle = 'Chapter', 
      unitNumber = 1, 
      institutionName = 'Visakha Valley School', 
      grade = 'Class 9', 
      keyTopics = [],
      language = 'en'
    } = req.body;

    const ai = getGeminiClient();

    if (!ai) {
      // Fallback response with complete rich chapter information when key is not provided
      res.json({
        comprehensiveOverview: `${chapterTitle} is a core foundational pillar of the ${grade} ${subjectName} curriculum at ${institutionName}. It builds critical conceptual models tested in CBSE examinations and competitive Olympiads. Every section is mapped to the latest NCERT rationalized syllabus.`,
        topicAtAGlance: (keyTopics.length > 0 ? keyTopics : ['Fundamental Concepts', 'Scientific Laws and Mechanisms', 'Applications and Numericals']).map((topic: string, i: number) => ({
          topic: topic,
          quickTake: `High-yield ${grade} concept tested frequently in CBSE exams.`,
          keyPoints: [
            `Core definition and governing scientific principle of ${topic}.`,
            `Key laboratory observation, experiment, or mathematical condition.`,
            `Standard CBSE examination marking requirement and common pitfalls to avoid.`
          ],
          formulaOrEquation: i === 0 ? 'Fundamental Law Invariant' : 'Standard NCERT Equation'
        })),
        mindmap: {
          center: chapterTitle,
          branches: [
            {
              title: '1. Theoretical Core',
              subtopics: keyTopics.slice(0, 2).length > 0 ? keyTopics.slice(0, 2) : ['Definitions', 'Scientific Axioms'],
              examTip: 'Focus on exact NCERT definitions and state conditions',
              color: 'blue'
            },
            {
              title: '2. Mechanisms & Processes',
              subtopics: keyTopics.slice(2, 4).length > 0 ? keyTopics.slice(2, 4) : ['Step-by-step mechanism', 'Key reactions / derivations'],
              examTip: 'Always include direction arrows and labeled diagrams',
              color: 'purple'
            },
            {
              title: '3. Quantitative & Numericals',
              subtopics: ['Formula substitutions', 'Cartesian sign convention', 'SI Unit conversions'],
              examTip: 'Write the raw formula before substituting numbers',
              color: 'emerald'
            },
            {
              title: '4. High-Yield PYQs',
              subtopics: ['5-Mark Long Answers', 'Reasoning & Assertion', 'Real-world Vizag case studies'],
              examTip: 'Underline final calculated values with units',
              color: 'amber'
            }
          ]
        },
        coreTopics: (keyTopics.length > 0 ? keyTopics : ['Fundamental Concepts', 'Scientific Laws and Mechanisms', 'Applications and Numericals']).map((topic: string) => ({
          topicTitle: topic,
          detailedExplanation: `In this section, students examine ${topic}. The NCERT syllabus highlights key experimental observations, stepwise analytical reasoning, and practical daily life applications. Ensure you memorize all definitions, underlying mechanisms, and labeled diagrams.`,
          examWatchout: `CBSE evaluators consistently check for proper SI units, arrowheads in diagrams, and chemical state symbols in this topic.`
        })),
        formulasAndLaws: [
          {
            name: `${chapterTitle} Governing Law / Principle`,
            expression: 'Standard NCERT algebraic & dimensional formula',
            variables: 'Physical variables with standard SI units (MKS)',
            examApplication: 'State the base equation before substituting given values to secure full method marks.'
          },
          {
            name: `${chapterTitle} Key Proportionality & Invariants`,
            expression: 'State constant across boundary conditions',
            variables: 'Dimensional ratio verified by experimental data',
            examApplication: 'Frequently tested in CBSE 2-mark assertion-reason and reasoning questions.'
          }
        ],
        solvedCBSEQuestions: [
          {
            question: `Explain the fundamental concept of ${chapterTitle} and give two real-life examples observed in Visakhapatnam.`,
            marks: '3 Marks',
            stepByStepSolution: `Step 1: State the precise NCERT definition.\nStep 2: List the two real-world occurrences (e.g. coastal humidity/evaporation effects or mechanical advantage).\nStep 3: Conclude with experimental verification.`,
            examinerTip: `Underline scientific keywords to help the examiner spot your answers instantly.`
          },
          {
            question: `State the mathematical derivation and boundary condition associated with ${chapterTitle}.`,
            marks: '5 Marks',
            stepByStepSolution: `Step 1: State the initial hypothesis and draw a neat diagram.\nStep 2: Formulate the equations from basic principles.\nStep 3: Simplify and state the final expression with appropriate SI units.`,
            examinerTip: `Draw a box around your final answer and state the unit clearly.`
          }
        ],
        teluguSummary: `${chapterTitle} అధ్యాయంలో ముఖ్యమైన అంశాలు, సూత్రాలు మరియు పరీక్షా వ్యూహాలు ఇక్కడ సమగ్రంగా వివరించబడ్డాయి. విశాఖ వ్యాలీ స్కూల్ టాపర్స్ నోట్స్ ప్రకారం ప్రిపేర్ అవ్వండి.`,
        highYieldPracticeMCQs: [
          {
            question: `Which fundamental principle governs ${chapterTitle}?`,
            options: [
              'A) Conservation and equilibrium laws of physics/chemistry',
              'B) Arbitrary unverified assumptions',
              'C) Random statistical fluctuations',
              'D) Non-reproducible empirical trials'
            ],
            correctOptionIndex: 0,
            explanation: `All chapters in ${subjectName} follow rigorous physical and chemical conservation laws.`
          }
        ],
        isAIGenerated: false
      });
      return;
    }

    const prompt = `You are the master CBSE academic faculty and curriculum author for SummaryKey (premier student academic platform for schools like Visakha Valley School, DPS, Timpany, and colleges in Vizag).
Target Chapter: Unit/Chapter ${unitNumber}: ${chapterTitle}
Subject: ${subjectName} (${grade} - New CBSE NCERT Rationalized Syllabus)
Institution Context: ${institutionName}
Key Topics in Chapter: ${Array.isArray(keyTopics) ? keyTopics.join(', ') : 'All chapter concepts'}
Language preference: ${language === 'te' ? 'Telugu explanations along with English terms' : 'Clear English with Telugu high-yield takeaways'}

The student requested: Complete EVERY topic in a glance with high-yield points, complete all missing information with maximum depth, and provide a comprehensive structured MINDMAP at the end.

Please format your response strictly as valid JSON with the following exact keys:
{
  "comprehensiveOverview": "A thorough, intuitive 2-paragraph overview explaining what this chapter is about, why it matters, and real-life examples in Visakhapatnam and daily life.",
  "topicAtAGlance": [
    {
      "topic": "Name of each key topic in the chapter",
      "quickTake": "One-line rapid summary that sticks in memory",
      "keyPoints": ["Crucial exam point 1", "Crucial exam point 2", "Common trap/trick"],
      "formulaOrEquation": "Key equation, formula, or reaction if applicable"
    }
  ],
  "mindmap": {
    "center": "${chapterTitle}",
    "branches": [
      {
        "title": "Branch Name (e.g. 1. Foundations, 2. Core Laws, 3. Equations & Derivations, 4. Exam Hotspots)",
        "subtopics": ["Subtopic A", "Subtopic B", "Subtopic C"],
        "examTip": "1-sentence golden rule for scoring marks here",
        "color": "blue | purple | emerald | amber"
      }
    ]
  },
  "coreTopics": [
    {
      "topicTitle": "Topic name",
      "detailedExplanation": "Complete, rigorous explanation covering every definition, principle, diagram description, and experiment",
      "examWatchout": "Key trap or common student error in exams"
    }
  ],
  "formulasAndLaws": [
    {
      "name": "Formula or Law Name",
      "expression": "e.g. F = G*(m1*m2)/r^2 or v = u + at",
      "variables": "Explanation of each symbol and SI units",
      "examApplication": "How to use this to score full marks in numericals"
    }
  ],
  "solvedCBSEQuestions": [
    {
      "question": "Realistic CBSE Board / School Examination question",
      "marks": "3 Marks / 5 Marks",
      "stepByStepSolution": "Clean, stepwise model answer with equations and explanations as required by CBSE evaluators",
      "examinerTip": "Pro-tip from VVS / CBSE top evaluators"
    }
  ],
  "teluguSummary": "Detailed Telugu translation of the core concepts for bilingual understanding by Andhra/Vizag students.",
  "highYieldPracticeMCQs": [
    {
      "question": "Conceptual MCQ question testing deep understanding",
      "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "correctOptionIndex": 0,
      "explanation": "Why this option is correct based on CBSE NCERT textbook."
    }
  ]
}
Ensure topicAtAGlance covers all main topics in the chapter, mindmap has at least 4 branches with subtopics, and coreTopics gives exhaustive notes. Return ONLY raw JSON without markdown code fences or backticks.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const responseText = response.text?.trim() || '{}';
    let parsedData;
    try {
      parsedData = JSON.parse(responseText);
    } catch {
      const cleanJson = responseText.replace(/^```json\s*/, '').replace(/\s*```$/, '').trim();
      parsedData = JSON.parse(cleanJson);
    }

    res.json({
      ...parsedData,
      isAIGenerated: true
    });
  } catch (error: any) {
    console.error('Error generating complete chapter info with Gemini:', error);
    res.status(500).json({
      error: 'Failed to complete chapter information with Gemini AI.',
      details: error.message
    });
  }
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SummaryKey full-stack server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
