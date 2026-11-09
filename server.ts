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
        comprehensiveOverview: `${chapterTitle} is a foundational pillar of the ${grade} ${subjectName} curriculum at ${institutionName}. It builds critical conceptual models tested in board examinations, university semester exams, and competitive assessments. Every section provides rigorous academic definitions, stepwise mechanisms, and real-world engineering or physical applications.`,
        topicAtAGlance: (keyTopics.length > 0 ? keyTopics : ['Fundamental Concepts', 'Scientific Laws and Mechanisms', 'Applications and Numericals']).map((topic: string, i: number) => ({
          topic: topic,
          definition: `${topic} is formally defined as the fundamental governing principle within ${chapterTitle} that specifies the relationship between underlying state variables, inputs, and observed physical or computational outcomes.`,
          quickTake: `High-yield core concept tested frequently in ${grade} semester and board exams.`,
          detailedExplanation: `In-depth breakdown of ${topic}: This concept establishes how systems transition between states, process energy or information, and obey mathematical boundary conditions. Students must master the initial assumptions, intermediate physical/algebraic steps, and practical applications observed in technology and daily industry.`,
          keyPoints: [
            `Formal Definition: Rigorous standard terminology and governing physical or algorithmic law for ${topic}.`,
            `Mechanism & Derivation: Underlying physical mechanism, state diagram, or computational pipeline.`,
            `Boundary Conditions: Standard experimental observations, SI units (MKS), and parameter constraints.`,
            `Exam Scoring Key: Mandatory terms and intermediate steps required by evaluators to award full marks.`
          ],
          formulaOrEquation: i === 0 ? 'Fundamental Law Invariant: S = f(x, y, t)' : 'Standard Governing Equation with SI Units'
        })),
        mindmap: {
          center: chapterTitle,
          branches: [
            {
              title: '1. Theoretical Core & Definitions',
              subtopics: keyTopics.slice(0, 2).length > 0 ? keyTopics.slice(0, 2) : ['Definitions', 'Scientific Axioms'],
              examTip: 'State the exact textbook definition before solving problems or deriving equations.',
              color: 'blue'
            },
            {
              title: '2. Mechanisms & Processes',
              subtopics: keyTopics.slice(2, 4).length > 0 ? keyTopics.slice(2, 4) : ['Step-by-step mechanism', 'Key reactions / derivations'],
              examTip: 'Always include direction arrows, labeled component diagrams, and state symbols.',
              color: 'purple'
            },
            {
              title: '3. Quantitative & Numericals',
              subtopics: ['Formula substitutions', 'Cartesian sign convention', 'SI Unit conversions (MKS)'],
              examTip: 'Write the raw formula with symbol definitions before substituting given numerical values.',
              color: 'emerald'
            },
            {
              title: '4. High-Yield Exam Hotspots',
              subtopics: ['Long Essay Answers', 'Reasoning & Assertion', 'Real-world Vizag case studies'],
              examTip: 'Underline final calculated values with units and box key conclusion statements.',
              color: 'amber'
            }
          ]
        },
        coreTopics: (keyTopics.length > 0 ? keyTopics : ['Fundamental Concepts', 'Scientific Laws and Mechanisms', 'Applications and Numericals']).map((topic: string) => ({
          topicTitle: topic,
          definition: `${topic} is formally defined as the systematic operational framework governing energy, matter, or data transformation in ${chapterTitle}.`,
          detailedExplanation: `Comprehensive conceptual breakdown of ${topic}: The curriculum emphasizes experimental verification, stepwise analytical reasoning, and practical engineering applications. In laboratory and industrial settings, this principle is utilized to design resilient systems, optimize performance metrics, and avoid failure modes. Ensure you thoroughly memorize the governing definitions, algebraic proofs, and diagnostic procedures.`,
          examWatchout: `Evaluators penalize missing SI units, omitted boundary conditions, and improper sign conventions in numerical calculations.`,
          realWorldApplication: `Widely implemented in automated sensors, industrial instrumentation, and modern smart systems across Visakhapatnam.`
        })),
        formulasAndLaws: [
          {
            name: `${chapterTitle} Governing Law / Principle`,
            expression: 'Standard algebraic & dimensional equation with boundary limits',
            variables: 'Physical/mathematical variables defined with standard SI units (MKS)',
            examApplication: 'State the base equation before substituting given values to secure full method marks.'
          },
          {
            name: `${chapterTitle} Invariants & Equilibrium Conditions`,
            expression: 'State constant across boundary conditions',
            variables: 'Dimensional ratio verified by experimental data',
            examApplication: 'Frequently tested in 2-mark assertion-reason, conceptual proofs, and mid-term evaluations.'
          }
        ],
        solvedCBSEQuestions: [
          {
            question: `State the precise formal definition of ${chapterTitle} and explain its fundamental mechanism with two practical examples.`,
            marks: '3 Marks / 5 Marks',
            stepByStepSolution: `Step 1: State the exact formal scientific/engineering definition.\nStep 2: Detail the stepwise operational mechanism or algebraic derivation.\nStep 3: Provide two concrete real-world examples (e.g. industrial control in coastal Vizag or natural physical systems).\nStep 4: Conclude with key boundary conditions and SI units.`,
            examinerTip: `Underline scientific and technical keywords to enable examiners to spot your core points immediately.`
          },
          {
            question: `Derive the mathematical relationship and state the boundary conditions associated with ${chapterTitle}.`,
            marks: '5 Marks',
            stepByStepSolution: `Step 1: State the initial hypothesis and draw a clean, fully labeled diagram.\nStep 2: Formulate the equations from first principles.\nStep 3: Simplify and state the final expression with appropriate SI units in a highlighted box.`,
            examinerTip: `Draw a box around your final answer and clearly define every symbol in a variable key.`
          }
        ],
        teluguSummary: `${chapterTitle} అధ్యాయంలో ముఖ్యమైన నిర్వచనాలు (Definitions), వివరణలు (Explanations), సూత్రాలు మరియు పరీక్షా వ్యూహాలు సమగ్రంగా అందించబడ్డాయి. విశాఖ విద్యార్థుల కోసం సులభమైన ద్విభాషా వివరణ.`,
        highYieldPracticeMCQs: [
          {
            question: `Which fundamental principle governs ${chapterTitle}?`,
            options: [
              'A) Established conservation and equilibrium laws of science and engineering',
              'B) Arbitrary unverified assumptions',
              'C) Random statistical fluctuations',
              'D) Non-reproducible empirical trials'
            ],
            correctOptionIndex: 0,
            explanation: `All concepts in ${subjectName} follow rigorous physical, mathematical, and algorithmic conservation laws.`
          }
        ],
        isAIGenerated: false
      });
      return;
    }

    const prompt = `You are the master academic faculty and curriculum author for SummaryKey (premier student academic platform for schools like Visakha Valley School, DPS, Timpany, and engineering colleges like GVPCOE, GITAM, ANITS, Raghu, AUCOE in Vizag).
Target Chapter: Unit/Chapter ${unitNumber}: ${chapterTitle}
Subject: ${subjectName} (${grade} Syllabus)
Institution Context: ${institutionName}
Key Topics in Chapter: ${Array.isArray(keyTopics) ? keyTopics.join(', ') : 'All chapter concepts'}
Language preference: ${language === 'te' ? 'Telugu explanations along with English terms' : 'Clear English with Telugu high-yield takeaways'}

The student requested:
"Give a formal definition for every topic, explain it in detail, and make the notes long, thorough, and detailed for every concept with the help of the mighty Gemini AI."

Please format your response strictly as valid JSON with the following exact keys:
{
  "comprehensiveOverview": "A thorough, intuitive 2-paragraph overview explaining what this chapter is about, why it matters, core principles, and real-life examples in Visakhapatnam and daily life.",
  "topicAtAGlance": [
    {
      "topic": "Name of each individual concept separately (e.g. Distance, Displacement, Speed, Velocity, Acceleration)",
      "inBrief": "Crystal-clear 1-sentence explanation of what it is in brief (e.g. for Distance: 'Distance is the actual length of the path or distance covered by a body during its motion from its initial position to its final position.')",
      "definition": "Precise, rigorous formal textbook definition of the concept (25-45 words)",
      "quickTake": "One-line rapid intuitive summary that sticks in memory",
      "detailedExplanation": "Exhaustive, in-depth explanation breaking down mechanisms, properties, real-life examples, and why it behaves this way (80-120 words per topic)",
      "keyPoints": ["Crucial exam point 1", "Crucial exam point 2", "Important distinction or condition", "Common trap/trick to avoid"],
      "formulaOrEquation": "Key equation, formula, mathematical condition, or reaction if applicable"
    }
  ],
  "mindmap": {
    "center": "${chapterTitle}",
    "branches": [
      {
        "title": "Branch Name (e.g. 1. Foundations & Definitions, 2. Core Laws & Mechanisms, 3. Equations & Derivations, 4. Exam Hotspots)",
        "subtopics": ["Subtopic A", "Subtopic B", "Subtopic C"],
        "examTip": "1-sentence golden rule for scoring marks here",
        "color": "blue | purple | emerald | amber"
      }
    ]
  },
  "coreTopics": [
    {
      "topicTitle": "Topic name",
      "definition": "Formal scientific/engineering definition",
      "detailedExplanation": "Complete, long, rigorous explanation covering every definition, principle, diagram description, experimental proof, and step-by-step mechanism (100-150 words)",
      "examWatchout": "Key trap or common student error in exams",
      "realWorldApplication": "Where this is applied in technology, industry, or nature"
    }
  ],
  "formulasAndLaws": [
    {
      "name": "Formula or Law Name",
      "expression": "e.g. F = G*(m1*m2)/r^2 or Big-O complexity or Ohm's Law",
      "variables": "Explanation of each symbol and SI units",
      "examApplication": "How to use this to score full marks in numericals and derivations"
    }
  ],
  "solvedCBSEQuestions": [
    {
      "question": "Realistic Examination question for this grade/college",
      "marks": "3 Marks / 5 Marks",
      "stepByStepSolution": "Clean, stepwise model answer with equations and explanations as required by evaluators",
      "examinerTip": "Pro-tip from top evaluators"
    }
  ],
  "keywordsGlossary": [
    {
      "keyword": "Key term (e.g. Inertia, Displacement, Latent Heat, Centripetal, Osmosis, Big-O, Linked List)",
      "definition": "Formal scientific, mathematical, or academic textbook definition of this keyword (20-35 words)",
      "sentenceExplanation": "Crystal-clear full descriptive sentence explaining exactly what this keyword means in plain, intuitive English",
      "examContext": "How this keyword is tested in exams, essential buzzwords, and evaluator scoring requirements"
    }
  ],
  "teluguSummary": "Detailed Telugu translation of the core concepts for bilingual understanding by Andhra/Vizag students.",
  "highYieldPracticeMCQs": [
    {
      "question": "Conceptual MCQ question testing deep understanding",
      "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "correctOptionIndex": 0,
      "explanation": "Why this option is correct based on textbook and syllabus."
    }
  ]
}
CRITICAL REQUIREMENTS:
1. Exhaustive & Large: NOT EVEN A SINGLE TOPIC MAY BE MISSED from this chapter. Cover all subtopics with large, thorough explanations (at least 150-200 words per topic).
2. Keywords in Sentences: In keywordsGlossary and in each topic, extract and explain every single key word in clear sentences and give them a formal academic definition.
3. Every individual concept (e.g., in Motion: Distance, Displacement, Speed, Velocity, Acceleration, Uniform Motion, Circular Motion, etc.) must be broken out separately with its own inBrief ('it is the distance covered by a body...'), formal definition, and detailed explanation.
Return ONLY raw JSON without markdown code fences or backticks.`;

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
