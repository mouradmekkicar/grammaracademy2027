/* ===== Grammar Academy DATA MODULE (generated, validated) ===== */
/* Term 3 · AY 2025-26 · Grade 12 Advanced Pathway (Stage 9, B2.2) · Mourad Mekki Teacher Toolkit */
/* STAGE 9 COMPLETE - 16 lessons / 480 questions across two chapters. */
/*   Ch1 L1-8: inversion, clefts, mixed/advanced conditionals, future perfect, future-in-the-past. */
/*   Ch2 L9-16: complex noun phrases, nominalization, participle clauses, reduced relatives, */
/*              reporting passives/causatives, fronting & emphatic do, cohesion, hedging & stance. */
/* RECONCILE-WITH-CCG: per-lesson code, moeSlo, chapter, week and vocabulary are reconstructions. */
/* Find every lesson needing reconciliation by searching:  "_ccg": "reconstruct"  (engine ignores this key). */
GA.register(
{
  "term": "T3-2526",
  "termLabel": "Term 3 · AY 2025–26",
  "grade": "12",
  "stream": "advanced",
  "streamLabel": "Grade 12 Advanced Pathway",
  "cefr": "B2.2 (Stage 9)",
  "source": "CCG Grade 12 Advanced — Term 3 · Chapters 1–2 (Lessons 1–16) /* curriculum metadata reconstructed; reconcile against official CCG */",
  "chapters": [
    {
      "id": "ch1",
      "title": "Chapter 1 — Emphasis, Inversion & Advanced Time and Condition",
      "lessons": [
        "s9_L1_inversionNeg",
        "s9_L2_inversionCond",
        "s9_L3_cleftIt",
        "s9_L4_cleftWh",
        "s9_L5_mixedCond",
        "s9_L6_condAlt",
        "s9_L7_futurePerfect",
        "s9_L8_futureInPast"
      ]
    },
    {
      "id": "ch2",
      "title": "Chapter 2 — Complex Noun Phrases, Voice and Academic Style",
      "lessons": [
        "s9_L9_nounPhrases",
        "s9_L10_nominalization",
        "s9_L11_participleClauses",
        "s9_L12_reducedRelatives",
        "s9_L13_reportingPassive",
        "s9_L14_frontingEmphasis",
        "s9_L15_cohesion",
        "s9_L16_hedgingStance"
      ]
    }
  ],
  "lessons": {
    "s9_L1_inversionNeg": {
      "id": "s9_L1_inversionNeg",
      "code": "G.S9.1",
      "title": "Inversion after Negative Adverbials",
      "chapter": "Chapter 1 — Emphasis, Inversion & Advanced Time and Condition",
      "week": "Week 1 · The Power of Rhetoric",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.SS.1.1",
      "_ccg": "reconstruct",
      "vocabulary": [
        "fronting",
        "restrictive",
        "adverbial",
        "emphasis",
        "auxiliary",
        "seldom",
        "scarcely",
        "persuasive",
        "literary",
        "register"
      ],
      "explanation": [
        "When a negative or restrictive adverbial is moved to the <b>front</b> of a clause for emphasis, English requires <b>subject–auxiliary inversion</b> — the auxiliary (or a form of <i>do/be</i>) comes before the subject, exactly as in a question. This is a feature of formal, persuasive and literary register.",
        "<strong>Pattern:</strong> Negative/restrictive adverbial + auxiliary + subject + main verb. If the original has no auxiliary, insert <i>do/does/did</i>: <i>I rarely saw him</i> → <i>Rarely did I see him</i>. Common triggers: <i>never, rarely, seldom, hardly … when, scarcely … when, no sooner … than, not until, not only … but also, little, under no circumstances, at no time, only then/later</i>."
      ],
      "examples": [
        {
          "type": "right",
          "text": "<em>Never</em> have I encountered such a persuasive argument."
        },
        {
          "type": "right",
          "text": "<em>No sooner</em> had we arrived <em>than</em> the storm broke."
        },
        {
          "type": "right",
          "text": "<em>Not only</em> did she design the study, <em>but</em> she <em>also</em> funded it."
        },
        {
          "type": "wrong",
          "text": "Rarely I have seen such dedication."
        },
        {
          "type": "right",
          "text": "<em>Under no circumstances</em> should the door be left unlocked."
        }
      ],
      "mistakes": [
        "<em>Seldom we go there.</em> → <em>Seldom do we go there.</em> — insert <b>do</b> when there is no auxiliary.",
        "<em>No sooner I had left when it rang.</em> → <em>No sooner had I left than it rang.</em> — use <b>than</b>, not <i>when</i>, and invert.",
        "<em>Not until he apologised she forgave him.</em> → <em>Not until he apologised did she forgive him.</em> — the inversion falls on the <b>main</b> clause."
      ],
      "traps": [
        "<b>Only then / Only after</b> trigger inversion on the clause that follows: <em>Only then did I understand</em>.",
        "After front <b>Not only</b>, invert the first clause; the second clause usually carries <em>but … also</em>.",
        "Keep the pair words right: <b>Hardly/Scarcely … when</b> and <b>No sooner … than</b>."
      ],
      "arabicInsight": "عند تقديم ظرف يحمل معنى النفي أو التقييد إلى بداية الجملة بغرض التوكيد، يجب <b>قلب ترتيب الفاعل والفعل المساعد</b> (الفعل المساعد قبل الفاعل) تمامًا كما في السؤال. إن لم يوجد فعل مساعد، نُدخل <i>do/does/did</i>. هذا أسلوب رسمي وبلاغي. مثال: <i>Rarely did I see him</i>.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct inversion.",
          "options": [
            "Never I have seen such skill.",
            "Never have I seen such skill.",
            "Never seen I have such skill.",
            "Never did I have seen such skill."
          ],
          "answer": 1,
          "explain": "Front <em>Never</em> → auxiliary before subject: <em>have I seen</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: <em>Seldom ____ to such lengths to win.</em>",
          "options": [
            "he goes",
            "does he go",
            "he does go",
            "goes he"
          ],
          "answer": 1,
          "explain": "No auxiliary in the base clause → insert <em>does</em> + subject + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence is correctly inverted?",
          "options": [
            "Not only he wrote the report but presented it.",
            "Not only did he write the report but he also presented it.",
            "Not only wrote he the report but presented it.",
            "Only not did he write the report."
          ],
          "answer": 1,
          "explain": "<em>Not only</em> fronted → <em>did he write</em>; second clause takes <em>but he also</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct linking word: <em>No sooner had the bell rung ____ the pupils left.</em>",
          "options": [
            "when",
            "than",
            "then",
            "that"
          ],
          "answer": 1,
          "explain": "<em>No sooner … than</em> is the fixed pair."
        },
        {
          "type": "fill",
          "prompt": "Insert the auxiliary.",
          "sentence": "Rarely ____ we witness such generosity.",
          "answers": [
            "do"
          ],
          "explain": "No auxiliary present → <em>do</em> + subject + base verb."
        },
        {
          "type": "fill",
          "prompt": "Complete the pair word.",
          "sentence": "Hardly had she spoken ____ the room fell silent.",
          "answers": [
            "when"
          ],
          "explain": "<em>Hardly … when</em> is the fixed pair."
        },
        {
          "type": "fill",
          "prompt": "Add the missing auxiliary.",
          "sentence": "Little ____ they know how serious the situation was.",
          "answers": [
            "did"
          ],
          "explain": "<em>Little</em> (= not at all) triggers inversion: <em>did they know</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with front inversion: <em>I have never read a clearer explanation.</em>",
          "answer": [
            "never have i read a clearer explanation"
          ],
          "explain": "Front <em>Never</em> → <em>have I read</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite beginning with <em>Not until</em>: <em>She felt safe only when the door was locked.</em>",
          "answer": [
            "not until the door was locked did she feel safe"
          ],
          "explain": "Inversion lands on the main clause: <em>did she feel safe</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite beginning with <em>Under no circumstances</em>: <em>You must not share the password.</em>",
          "answer": [
            "under no circumstances must you share the password",
            "under no circumstances should you share the password"
          ],
          "explain": "Negative phrase fronted → modal before subject."
        },
        {
          "type": "error",
          "prompt": "Correct the inversion.",
          "given": "Never she had imagined winning.",
          "answer": [
            "never had she imagined winning"
          ],
          "explain": "Auxiliary <em>had</em> comes before the subject <em>she</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the linking word and order.",
          "given": "No sooner the lights went out when we panicked.",
          "answer": [
            "no sooner had the lights gone out than we panicked"
          ],
          "explain": "Use <em>had … than</em> with <em>No sooner</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Rarely",
            "does",
            "he",
            "admit",
            "a",
            "mistake"
          ],
          "answer": "Rarely does he admit a mistake",
          "explain": "<em>Rarely</em> + <em>does</em> + subject + base verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Only",
            "then",
            "did",
            "they",
            "realise",
            "the",
            "danger"
          ],
          "answer": "Only then did they realise the danger",
          "explain": "<em>Only then</em> → inversion with <em>did</em>."
        },
        {
          "type": "match",
          "prompt": "Match each fronted adverbial to its required continuation.",
          "pairs": [
            {
              "l": "Never have",
              "r": "I felt so proud."
            },
            {
              "l": "No sooner had we sat down",
              "r": "than the show began."
            },
            {
              "l": "Not only did they apologise",
              "r": "but they also paid."
            }
          ],
          "explain": "Each negative/restrictive opener forces inversion and its correct partner."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct inversion.",
          "options": [
            "Seldom we have faced such a test.",
            "Seldom have we faced such a test.",
            "Seldom we faced have such a test.",
            "Have seldom we faced such a test."
          ],
          "answer": 1,
          "explain": "Front <em>Seldom</em> → <em>have we faced</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: <em>Not until the results came out ____ relief.</em>",
          "options": [
            "we felt",
            "did we feel",
            "we did feel",
            "felt we"
          ],
          "answer": 1,
          "explain": "Inversion on the main clause: <em>did we feel</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which is correctly inverted?",
          "options": [
            "Hardly had I sat down when the phone rang.",
            "Hardly I had sat down when the phone rang.",
            "Hardly sat I down when the phone rang.",
            "Hardly when I had sat down the phone rang."
          ],
          "answer": 0,
          "explain": "<em>Hardly had I … when …</em> with inversion."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct word: <em>On no account ____ the alarm be ignored.</em>",
          "options": [
            "must",
            "must to",
            "musting",
            "be must"
          ],
          "answer": 0,
          "explain": "<em>On no account</em> fronted → modal <em>must</em> before subject."
        },
        {
          "type": "fill",
          "prompt": "Insert the auxiliary.",
          "sentence": "Scarcely ____ the meeting begun when the power failed.",
          "answers": [
            "had"
          ],
          "explain": "<em>Scarcely … when</em> with <em>had</em> + subject + past participle."
        },
        {
          "type": "fill",
          "prompt": "Add the auxiliary.",
          "sentence": "At no time ____ the staff informed of the change.",
          "answers": [
            "were"
          ],
          "explain": "<em>At no time</em> fronted → <em>were</em> + subject (passive)."
        },
        {
          "type": "fill",
          "prompt": "Complete the auxiliary.",
          "sentence": "Not only ____ the project finish late, it also went over budget.",
          "answers": [
            "did"
          ],
          "explain": "<em>Not only</em> fronted → <em>did</em> + subject + base verb."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with front inversion: <em>I had rarely seen him so calm.</em>",
          "answer": [
            "rarely had i seen him so calm"
          ],
          "explain": "Front <em>Rarely</em> → <em>had I seen</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite beginning with <em>Only after</em>: <em>I understood the poem only after reading it twice.</em>",
          "answer": [
            "only after reading it twice did i understand the poem"
          ],
          "explain": "<em>Only after …</em> → <em>did I understand</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite beginning with <em>Little</em>: <em>They did not know what awaited them.</em>",
          "answer": [
            "little did they know what awaited them"
          ],
          "explain": "<em>Little</em> = not at all → inversion with <em>did</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the inversion.",
          "given": "Rarely they have complained about the work.",
          "answer": [
            "rarely have they complained about the work"
          ],
          "explain": "<em>have</em> precedes <em>they</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the order and pair word.",
          "given": "No sooner we had finished than next task arrived.",
          "answer": [
            "no sooner had we finished than the next task arrived"
          ],
          "explain": "Invert (<em>had we finished</em>) and add the article."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Never",
            "before",
            "had",
            "the",
            "city",
            "seen",
            "such",
            "crowds"
          ],
          "answer": "Never before had the city seen such crowds",
          "explain": "Front <em>Never before</em> → <em>had the city seen</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Under",
            "no",
            "circumstances",
            "should",
            "you",
            "reply"
          ],
          "answer": "Under no circumstances should you reply",
          "explain": "<em>Under no circumstances</em> → modal before subject."
        },
        {
          "type": "match",
          "prompt": "Match each opener to its grammatical continuation.",
          "pairs": [
            {
              "l": "Seldom does",
              "r": "she ask for help."
            },
            {
              "l": "Not until midnight did",
              "r": "the rescue arrive."
            },
            {
              "l": "So fierce was the wind",
              "r": "that trees fell."
            }
          ],
          "explain": "Each fronted element forces the matching inverted or correlative structure."
        }
      ]
    },
    "s9_L2_inversionCond": {
      "id": "s9_L2_inversionCond",
      "code": "G.S9.2",
      "title": "Inversion in Conditionals and Emphasis",
      "chapter": "Chapter 1 — Emphasis, Inversion & Advanced Time and Condition",
      "week": "Week 2 · Persuasion and Style",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.SS.1.2",
      "_ccg": "reconstruct",
      "vocabulary": [
        "conditional",
        "formal",
        "omit",
        "were",
        "should",
        "intensity",
        "consequence",
        "clause",
        "tentative",
        "hypothetical"
      ],
      "explanation": [
        "In formal English we can drop <i>if</i> and signal a conditional by <b>inversion</b>. Three patterns are common: <i>Were I you …</i> (= If I were you), <i>Had I known …</i> (= If I had known), and <i>Should you need help …</i> (= If you should need help). The inverted form is more formal and slightly more tentative than the <i>if</i>-clause.",
        "Inversion also follows <b>So + adjective</b> and <b>Such + noun</b> for intensity (<i>So great was the demand that …</i> / <i>Such was the noise that …</i>), and after fronted <b>here/there</b> with a full noun subject (<i>Here comes the bus</i>; <i>There stood a stranger</i>)."
      ],
      "examples": [
        {
          "type": "right",
          "text": "<em>Had I known</em> the truth, I would have spoken."
        },
        {
          "type": "right",
          "text": "<em>Were she</em> in charge, things would be different."
        },
        {
          "type": "right",
          "text": "<em>Should you require</em> assistance, please ask."
        },
        {
          "type": "wrong",
          "text": "If had I known, I would have come."
        },
        {
          "type": "right",
          "text": "<em>So convincing was</em> her case <em>that</em> no one objected."
        }
      ],
      "mistakes": [
        "<em>If had I known …</em> → <em>Had I known …</em> — do not keep <b>if</b> when you invert.",
        "<em>Were I to knew …</em> → <em>Were I to know …</em> — after <b>Were … to</b> use the <b>base</b> verb.",
        "<em>So was great the demand …</em> → <em>So great was the demand …</em> — keep <b>So + adjective</b> together before the verb."
      ],
      "traps": [
        "Inverted conditionals are formal; in speech the <em>if</em>-clause is more natural.",
        "<b>Should</b> at the front signals a less likely future condition: <em>Should it rain, …</em>",
        "<b>Such + be + subject + that</b> emphasises a noun: <em>Such was his fear that he froze</em>."
      ],
      "arabicInsight": "في الإنجليزية الرسمية يمكن حذف <i>if</i> والدلالة على الشرط عبر <b>القلب</b>: <i>Had I known</i> (= If I had known)، <i>Were I you</i> (= If I were you)، <i>Should you need</i> (= If you should need). كما يأتي القلب بعد <b>So + صفة</b> و<b>Such + اسم</b> للتوكيد. الصيغة المقلوبة أكثر رسمية وتلطفًا.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Rewrite as inversion: <em>If I had known, I would have helped.</em>",
          "options": [
            "If had I known, I would have helped.",
            "Had I known, I would have helped.",
            "Have I known, I would have helped.",
            "Did I know, I would have helped."
          ],
          "answer": 1,
          "explain": "Drop <em>if</em>; invert <em>had I</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct form.",
          "options": [
            "Were I to knowing, I would tell you.",
            "Were I to know, I would tell you.",
            "Was I to know, I would tell you.",
            "If were I to know, I would tell you."
          ],
          "answer": 1,
          "explain": "<em>Were … to</em> + base verb; no <em>if</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: <em>____ you change your mind, call us.</em>",
          "options": [
            "Should",
            "Would",
            "Did",
            "Had"
          ],
          "answer": 0,
          "explain": "<em>Should</em> fronted = a less likely future condition."
        },
        {
          "type": "mcq",
          "prompt": "Which emphasises intensity correctly?",
          "options": [
            "So was loud the music that we left.",
            "So loud was the music that we left.",
            "Such loud was the music that we left.",
            "So loud the music was that we left."
          ],
          "answer": 1,
          "explain": "<em>So + adjective + be + subject + that</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the missing word (no <em>if</em>).",
          "sentence": "____ I to fail, I would simply try again.",
          "answers": [
            "Were"
          ],
          "explain": "<em>Were I to …</em> = a hypothetical future condition."
        },
        {
          "type": "fill",
          "prompt": "Complete the inverted conditional.",
          "sentence": "____ they offered more pay, she would stay.",
          "answers": [
            "Were"
          ],
          "explain": "<em>Were they to / Were they …</em> replaces <em>If they …</em> in formal style."
        },
        {
          "type": "fill",
          "prompt": "Complete with <em>Such</em>.",
          "sentence": "____ was the demand that tickets sold out instantly.",
          "answers": [
            "Such"
          ],
          "explain": "<em>Such + be + subject + that</em> emphasises the noun <em>demand</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite without <em>if</em>: <em>If you should have any questions, email me.</em>",
          "answer": [
            "should you have any questions email me"
          ],
          "explain": "Front <em>Should</em>; drop <em>if</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite without <em>if</em>: <em>If it were not for your help, I would have failed.</em>",
          "answer": [
            "were it not for your help i would have failed"
          ],
          "explain": "<em>Were it not for …</em> = formal inversion of <em>If it were not for …</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite for emphasis with <em>So</em>: <em>The argument was so strong that nobody replied.</em>",
          "answer": [
            "so strong was the argument that nobody replied"
          ],
          "explain": "<em>So + adjective + be + subject + that</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the conditional.",
          "given": "If had we left earlier, we would be there now.",
          "answer": [
            "had we left earlier we would be there now"
          ],
          "explain": "Remove <em>if</em> when you invert."
        },
        {
          "type": "error",
          "prompt": "Fix the emphasis structure.",
          "given": "So was beautiful the view that we stayed for hours.",
          "answer": [
            "so beautiful was the view that we stayed for hours"
          ],
          "explain": "Keep <em>So + adjective</em> before the verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Had",
            "she",
            "studied",
            "harder",
            "she",
            "would",
            "have",
            "passed"
          ],
          "answer": "Had she studied harder she would have passed",
          "explain": "Inverted third conditional: <em>Had she studied …</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Should",
            "you",
            "need",
            "anything",
            "let",
            "me",
            "know"
          ],
          "answer": "Should you need anything let me know",
          "explain": "<em>Should you need …</em> = a polite future condition."
        },
        {
          "type": "match",
          "prompt": "Match each inverted opener to its meaning.",
          "pairs": [
            {
              "l": "Had I known",
              "r": "If I had known"
            },
            {
              "l": "Were I you",
              "r": "If I were you"
            },
            {
              "l": "Should you call",
              "r": "If you should call"
            }
          ],
          "explain": "Each inversion replaces a specific <em>if</em>-clause."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Rewrite as inversion: <em>If she were taller, she could reach it.</em>",
          "options": [
            "Were she taller, she could reach it.",
            "Was she taller, she could reach it.",
            "If were she taller, she could reach it.",
            "Had she taller, she could reach it."
          ],
          "answer": 0,
          "explain": "<em>Were she …</em> replaces <em>If she were …</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct opener.",
          "options": [
            "Did you arrive late, the gate may be shut.",
            "Should you arrive late, the gate may be shut.",
            "Were you arrive late, the gate may be shut.",
            "Had you arrive late, the gate may be shut."
          ],
          "answer": 1,
          "explain": "<em>Should you arrive …</em> = future condition."
        },
        {
          "type": "mcq",
          "prompt": "Complete the emphasis: <em>____ was his anger that he could not speak.</em>",
          "options": [
            "So",
            "Such",
            "Very",
            "Too"
          ],
          "answer": 1,
          "explain": "<em>Such + be + subject</em> emphasises the noun <em>anger</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which is correct?",
          "options": [
            "Here come the results we waited for.",
            "Here comes the results we waited for.",
            "Here the results come.",
            "Comes here the results."
          ],
          "answer": 0,
          "explain": "<em>Here + verb + full subject</em>; plural subject → <em>come</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the missing word (no <em>if</em>).",
          "sentence": "____ it not for the rain, the match would continue.",
          "answers": [
            "Were"
          ],
          "explain": "<em>Were it not for …</em> = formal conditional inversion."
        },
        {
          "type": "fill",
          "prompt": "Complete the inverted conditional.",
          "sentence": "____ I known the cost, I would have refused.",
          "answers": [
            "Had"
          ],
          "explain": "<em>Had I known …</em> replaces <em>If I had known …</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with <em>So</em>.",
          "sentence": "____ fierce was the debate that the chair intervened.",
          "answers": [
            "So"
          ],
          "explain": "<em>So + adjective + be + subject + that</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite without <em>if</em>: <em>If I had seen the sign, I would have stopped.</em>",
          "answer": [
            "had i seen the sign i would have stopped"
          ],
          "explain": "Front <em>Had I seen</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite without <em>if</em>: <em>If they were to refuse, we would look elsewhere.</em>",
          "answer": [
            "were they to refuse we would look elsewhere"
          ],
          "explain": "<em>Were they to …</em> = hypothetical future."
        },
        {
          "type": "transform",
          "prompt": "Rewrite for emphasis with <em>Such</em>: <em>The storm was so violent that flights were cancelled.</em>",
          "answer": [
            "such was the violence of the storm that flights were cancelled",
            "such was the storm that flights were cancelled"
          ],
          "explain": "<em>Such + be + subject + that</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the conditional.",
          "given": "If should you see her, say hello.",
          "answer": [
            "should you see her say hello"
          ],
          "explain": "Drop <em>if</em> when you front <em>Should</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the inversion.",
          "given": "Were I to knew, I would tell you at once.",
          "answer": [
            "were i to know i would tell you at once"
          ],
          "explain": "After <em>Were … to</em> use the base verb <em>know</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Were",
            "I",
            "in",
            "your",
            "position",
            "I",
            "would",
            "accept"
          ],
          "answer": "Were I in your position I would accept",
          "explain": "<em>Were I …</em> = If I were …"
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Such",
            "was",
            "the",
            "silence",
            "that",
            "we",
            "whispered"
          ],
          "answer": "Such was the silence that we whispered",
          "explain": "<em>Such + be + subject + that</em>."
        },
        {
          "type": "match",
          "prompt": "Match each structure to its function.",
          "pairs": [
            {
              "l": "Were it not for",
              "r": "introduces an essential condition"
            },
            {
              "l": "Should you require",
              "r": "a polite future condition"
            },
            {
              "l": "So great was the loss",
              "r": "emphasises intensity"
            }
          ],
          "explain": "Each inverted form serves a distinct formal function."
        }
      ]
    },
    "s9_L3_cleftIt": {
      "id": "s9_L3_cleftIt",
      "code": "G.S9.3",
      "title": "Cleft Sentences with <em>It</em>",
      "chapter": "Chapter 1 — Emphasis, Inversion & Advanced Time and Condition",
      "week": "Week 3 · Focus and Emphasis",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.SS.1.3",
      "_ccg": "reconstruct",
      "vocabulary": [
        "cleft",
        "focus",
        "emphasise",
        "element",
        "contrast",
        "highlight",
        "relative",
        "correction",
        "structure",
        "prominence"
      ],
      "explanation": [
        "A <b>cleft sentence</b> splits one idea into two clauses to throw emphasis onto a single element. The <b>it-cleft</b> follows the frame <i>It + be + [focus] + that/who …</i>. We move the part we want to stress into the focus slot: <i>Maya solved the problem</i> → <i>It was Maya who solved the problem</i>.",
        "We can focus a subject, object, or adverbial: <i>It was the climate that changed</i> (subject), <i>It was the climate that they studied</i> (object), <i>It was in 2009 that the law changed</i> (time). Use <i>who</i> for people, <i>that</i> for everything else. It-clefts are common in correction and contrast: <i>It wasn't the heat that troubled us; it was the humidity</i>."
      ],
      "examples": [
        {
          "type": "right",
          "text": "<em>It was Maya</em> who solved the problem, not James."
        },
        {
          "type": "right",
          "text": "<em>It is fluency</em> that examiners reward most."
        },
        {
          "type": "right",
          "text": "<em>It was in Abu Dhabi</em> that the conference took place."
        },
        {
          "type": "wrong",
          "text": "It was Maya which solved the problem."
        },
        {
          "type": "right",
          "text": "<em>It wasn't the cost</em> that worried them; it was the delay."
        }
      ],
      "mistakes": [
        "<em>It was Maya which solved it.</em> → <em>It was Maya who solved it.</em> — use <b>who</b> for a person.",
        "<em>It was the result what surprised us.</em> → <em>It was the result that surprised us.</em> — use <b>that</b>, never <i>what</i>, in an it-cleft.",
        "<em>It were the students who complained.</em> → <em>It was the students who complained.</em> — the verb is always <b>singular</b> <i>it was/is</i>."
      ],
      "traps": [
        "The focus can be a person, thing, place or time — but <b>it + be</b> stays singular.",
        "For a negative contrast, cleft both halves: <em>It wasn't X … it was Y</em>.",
        "Don't confuse the it-cleft (<em>It was X that …</em>) with the wh-cleft (<em>What … is X</em>) — they focus differently."
      ],
      "arabicInsight": "الجملة المشطورة (cleft) تقسم الفكرة إلى جزأين لإبراز عنصر واحد. صيغة <b>It-cleft</b>: <i>It + be + العنصر المُركَّز عليه + that/who …</i>. نستخدم <i>who</i> للأشخاص و<i>that</i> لغير ذلك، ويبقى الفعل مفردًا دائمًا (<i>It was/is</i>). تُستخدم كثيرًا للتصحيح والتباين.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Emphasise the subject: <em>Sara designed the logo.</em>",
          "options": [
            "It was Sara who designed the logo.",
            "It was Sara which designed the logo.",
            "It was Sara what designed the logo.",
            "Was it Sara designed the logo."
          ],
          "answer": 0,
          "explain": "<em>It was + person + who …</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct relative word.",
          "options": [
            "It was the noise what woke me.",
            "It was the noise that woke me.",
            "It was the noise who woke me.",
            "It was the noise whom woke me."
          ],
          "answer": 1,
          "explain": "Non-person focus → <em>that</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which it-cleft focuses the time?",
          "options": [
            "It was the festival that we enjoyed.",
            "It was last spring that we visited.",
            "It was we who visited last spring.",
            "It was visiting that we enjoyed."
          ],
          "answer": 1,
          "explain": "Time phrase in focus → <em>It was last spring that …</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete the contrast: <em>____ the price that mattered; it was the quality.</em>",
          "options": [
            "It wasn't",
            "It weren't",
            "There wasn't",
            "That wasn't"
          ],
          "answer": 0,
          "explain": "Singular <em>It wasn't … it was …</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the relative word.",
          "sentence": "It was the teacher ____ first noticed the error.",
          "answers": [
            "who"
          ],
          "explain": "Person in focus → <em>who</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the it-cleft frame.",
          "sentence": "It ____ the rain that ruined the trip.",
          "answers": [
            "was"
          ],
          "explain": "<em>It + be</em> is singular: <em>was</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the relative word.",
          "sentence": "It is patience ____ this task demands.",
          "answers": [
            "that"
          ],
          "explain": "Non-person focus → <em>that</em>."
        },
        {
          "type": "transform",
          "prompt": "Make an it-cleft focusing the object: <em>They admired her courage.</em>",
          "answer": [
            "it was her courage that they admired"
          ],
          "explain": "Object in focus: <em>It was her courage that they admired</em>."
        },
        {
          "type": "transform",
          "prompt": "Make an it-cleft focusing the place: <em>The treaty was signed in Geneva.</em>",
          "answer": [
            "it was in geneva that the treaty was signed"
          ],
          "explain": "Place in focus with <em>in</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a contrastive it-cleft: <em>The wind, not the rain, caused the damage.</em>",
          "answer": [
            "it was the wind that caused the damage not the rain",
            "it was the wind not the rain that caused the damage"
          ],
          "explain": "Focus the cause and contrast it."
        },
        {
          "type": "error",
          "prompt": "Correct the cleft.",
          "given": "It were the workers who protested.",
          "answer": [
            "it was the workers who protested"
          ],
          "explain": "<em>It</em> takes a singular verb: <em>was</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the relative word.",
          "given": "It was the message what alarmed everyone.",
          "answer": [
            "it was the message that alarmed everyone"
          ],
          "explain": "Use <em>that</em>, not <em>what</em>, in an it-cleft."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct it-cleft.",
          "bank": [
            "It",
            "was",
            "the",
            "coach",
            "who",
            "made",
            "the",
            "difference"
          ],
          "answer": "It was the coach who made the difference",
          "explain": "<em>It was + person + who …</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct it-cleft.",
          "bank": [
            "It",
            "is",
            "honesty",
            "that",
            "they",
            "value",
            "most"
          ],
          "answer": "It is honesty that they value most",
          "explain": "<em>It is + focus + that …</em>."
        },
        {
          "type": "match",
          "prompt": "Match each focused element to its relative word.",
          "pairs": [
            {
              "l": "It was the engineer ___ designed it",
              "r": "who"
            },
            {
              "l": "It was the bridge ___ collapsed",
              "r": "that"
            },
            {
              "l": "It was in 1990 ___ it opened",
              "r": "that"
            }
          ],
          "explain": "People take <em>who</em>; things, places and times take <em>that</em>."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Emphasise the subject: <em>The committee rejected the plan.</em>",
          "options": [
            "It was the committee who rejected the plan.",
            "It was the committee that rejected the plan.",
            "It was the committee which rejected the plan.",
            "It were the committee that rejected the plan."
          ],
          "answer": 1,
          "explain": "A group/organisation as focus usually takes <em>that</em> (or <em>who</em> for people)."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct frame.",
          "options": [
            "It was their support what saved us.",
            "It was their support that saved us.",
            "They was their support that saved us.",
            "It were their support that saved us."
          ],
          "answer": 1,
          "explain": "Singular <em>It was</em> + <em>that</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which it-cleft focuses the reason most clearly?",
          "options": [
            "It was the cost that worried investors.",
            "It was investors that worried.",
            "It worried investors the cost.",
            "Was the cost that worried investors."
          ],
          "answer": 0,
          "explain": "Focus the noun <em>cost</em> with <em>that</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete the negative contrast: <em>____ his words that hurt; it was his tone.</em>",
          "options": [
            "It wasn't",
            "It weren't",
            "There wasn't",
            "Wasn't it"
          ],
          "answer": 0,
          "explain": "Singular negative <em>It wasn't …</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the relative word.",
          "sentence": "It was the nurse ____ stayed all night.",
          "answers": [
            "who"
          ],
          "explain": "Person in focus → <em>who</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the frame.",
          "sentence": "It ____ the deadline that caused the stress.",
          "answers": [
            "was"
          ],
          "explain": "<em>It</em> + singular <em>was</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the relative word.",
          "sentence": "It is teamwork ____ the project needs.",
          "answers": [
            "that"
          ],
          "explain": "Non-person focus → <em>that</em>."
        },
        {
          "type": "transform",
          "prompt": "Make an it-cleft focusing the object: <em>Readers praised the ending.</em>",
          "answer": [
            "it was the ending that readers praised"
          ],
          "explain": "<em>It was the ending that readers praised</em>."
        },
        {
          "type": "transform",
          "prompt": "Make an it-cleft focusing the time: <em>The library reopened last month.</em>",
          "answer": [
            "it was last month that the library reopened"
          ],
          "explain": "Time phrase in focus."
        },
        {
          "type": "transform",
          "prompt": "Make a contrastive it-cleft: <em>The plan failed because of timing, not funding.</em>",
          "answer": [
            "it was the timing that made the plan fail not the funding",
            "it was the timing not the funding that made the plan fail"
          ],
          "explain": "Focus the cause and contrast it."
        },
        {
          "type": "error",
          "prompt": "Correct the cleft.",
          "given": "It was the volunteers which cleaned the beach.",
          "answer": [
            "it was the volunteers who cleaned the beach"
          ],
          "explain": "People → <em>who</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the verb.",
          "given": "It were her parents who encouraged her.",
          "answer": [
            "it was her parents who encouraged her"
          ],
          "explain": "<em>It</em> always takes <em>was</em>, even before a plural focus."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct it-cleft.",
          "bank": [
            "It",
            "was",
            "the",
            "editor",
            "who",
            "cut",
            "the",
            "scene"
          ],
          "answer": "It was the editor who cut the scene",
          "explain": "<em>It was + person + who …</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct it-cleft.",
          "bank": [
            "It",
            "is",
            "accuracy",
            "that",
            "matters",
            "here"
          ],
          "answer": "It is accuracy that matters here",
          "explain": "<em>It is + focus + that …</em>."
        },
        {
          "type": "match",
          "prompt": "Match the focus type to its example opener.",
          "pairs": [
            {
              "l": "Person",
              "r": "It was the doctor who …"
            },
            {
              "l": "Thing",
              "r": "It was the report that …"
            },
            {
              "l": "Time",
              "r": "It was in March that …"
            }
          ],
          "explain": "Choose <em>who</em> for people and <em>that</em> for things and times."
        }
      ]
    },
    "s9_L4_cleftWh": {
      "id": "s9_L4_cleftWh",
      "code": "G.S9.4",
      "title": "Wh-Clefts and <em>All/The thing</em> Clefts",
      "chapter": "Chapter 1 — Emphasis, Inversion & Advanced Time and Condition",
      "week": "Week 4 · Shaping the Message",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.SS.1.4",
      "_ccg": "reconstruct",
      "vocabulary": [
        "pseudo-cleft",
        "nominal",
        "relative",
        "summarise",
        "reformulate",
        "emphasis",
        "fronted",
        "topic",
        "comment",
        "clarify"
      ],
      "explanation": [
        "A <b>wh-cleft</b> (pseudo-cleft) uses a <i>what</i>-clause as the subject and puts the focus after <i>be</i>: <i>What I need is a break</i>. The <i>what</i>-clause sets up the topic and the part after <i>be</i> delivers the emphasised information. It is very common in speaking and academic writing to organise and signpost ideas.",
        "Variants replace <i>what</i> with <b>All</b> (= the only thing), <b>The thing/reason/place</b>, etc.: <i>All you have to do is wait</i>; <i>The reason it failed is funding</i>. When the focus is an action, the verb after <i>do</i> is the bare infinitive: <i>What he did was (to) cancel the trip</i>."
      ],
      "examples": [
        {
          "type": "right",
          "text": "<em>What surprised me</em> was the silence."
        },
        {
          "type": "right",
          "text": "<em>All I want</em> is a fair chance."
        },
        {
          "type": "right",
          "text": "<em>The reason</em> we left early <em>was</em> the noise."
        },
        {
          "type": "wrong",
          "text": "What I need is to relaxing."
        },
        {
          "type": "right",
          "text": "<em>What they did</em> was redesign the whole system."
        }
      ],
      "mistakes": [
        "<em>What I want is to relaxing.</em> → <em>What I want is to relax.</em> — use the base/infinitive, not <i>-ing</i>, after <i>is</i> here.",
        "<em>The reason is because …</em> → <em>The reason is that …</em> — avoid <i>reason … because</i>.",
        "<em>What surprised me were the silence.</em> → <em>What surprised me was the silence.</em> — the verb agrees with the singular <i>what</i>-clause."
      ],
      "traps": [
        "A <b>what</b>-clause as subject is treated as <b>singular</b>: <em>What matters is …</em>",
        "<b>All</b> (= the only thing) narrows the focus: <em>All you need is time</em>.",
        "After <b>What … did was</b>, the action is a <b>bare infinitive</b>: <em>… was cancel the order</em>."
      ],
      "arabicInsight": "الجملة المشطورة بـ<i>what</i> (pseudo-cleft) تجعل جملة <i>what</i> فاعلًا وتضع العنصر المُركَّز عليه بعد <i>be</i>: <i>What I need is a break</i>. وتُستبدل <i>what</i> بـ<b>All</b> أو <b>The reason/thing</b>. تُعامل جملة <i>what</i> معاملة المفرد، وبعد <i>What … did was</i> يأتي المصدر المجرد.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Make a wh-cleft: <em>I admire her honesty.</em>",
          "options": [
            "What I admire is her honesty.",
            "What I admire are her honesty.",
            "That I admire is her honesty.",
            "Which I admire is her honesty."
          ],
          "answer": 0,
          "explain": "<em>What I admire is …</em> (singular)."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct verb form after <em>do</em>.",
          "options": [
            "What he did was apologising.",
            "What he did was apologise.",
            "What he did was to apologising.",
            "What he did was apologized."
          ],
          "answer": 1,
          "explain": "<em>What … did was</em> + bare infinitive."
        },
        {
          "type": "mcq",
          "prompt": "Complete: <em>____ you have to do is sign here.</em>",
          "options": [
            "All",
            "What all",
            "That",
            "Which"
          ],
          "answer": 0,
          "explain": "<em>All</em> (= the only thing) you have to do …"
        },
        {
          "type": "mcq",
          "prompt": "Which is correct?",
          "options": [
            "The reason it broke is because heat.",
            "The reason it broke is that it overheated.",
            "The reason it broke because overheated.",
            "The reason why it broke is because heat."
          ],
          "answer": 1,
          "explain": "<em>The reason … is that …</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the wh-cleft verb.",
          "sentence": "What worries me ____ the lack of time.",
          "answers": [
            "is"
          ],
          "explain": "A <em>what</em>-clause is singular → <em>is</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the focus link.",
          "sentence": "All she wanted ____ a quiet evening.",
          "answers": [
            "was"
          ],
          "explain": "<em>All she wanted was …</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with one word.",
          "sentence": "The ____ we changed plans was the storm.",
          "answers": [
            "reason"
          ],
          "explain": "<em>The reason … was …</em> introduces a cause."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a wh-cleft: <em>I need more practice.</em>",
          "answer": [
            "what i need is more practice"
          ],
          "explain": "<em>What I need is …</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite focusing the action: <em>They simply ignored the warning.</em>",
          "answer": [
            "what they did was ignore the warning",
            "what they did was simply ignore the warning"
          ],
          "explain": "<em>What they did was</em> + bare infinitive."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with <em>All</em>: <em>You only need to be patient.</em>",
          "answer": [
            "all you need is to be patient",
            "all you have to do is be patient"
          ],
          "explain": "<em>All you need is …</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the cleft.",
          "given": "What I want are some answers.",
          "answer": [
            "what i want is some answers"
          ],
          "explain": "The <em>what</em>-clause is singular → <em>is</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the verb after <em>do</em>.",
          "given": "What she did was to leaving the meeting.",
          "answer": [
            "what she did was leave the meeting"
          ],
          "explain": "Use the bare infinitive: <em>leave</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a wh-cleft.",
          "bank": [
            "What",
            "matters",
            "most",
            "is",
            "clear",
            "writing"
          ],
          "answer": "What matters most is clear writing",
          "explain": "<em>What matters most is …</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a cleft with <em>All</em>.",
          "bank": [
            "All",
            "they",
            "asked",
            "for",
            "was",
            "respect"
          ],
          "answer": "All they asked for was respect",
          "explain": "<em>All … was …</em>."
        },
        {
          "type": "match",
          "prompt": "Match each opener to its correct continuation.",
          "pairs": [
            {
              "l": "What I enjoy most",
              "r": "is reading."
            },
            {
              "l": "All you have to do",
              "r": "is ask."
            },
            {
              "l": "The reason we won",
              "r": "was teamwork."
            }
          ],
          "explain": "Each cleft opener sets a topic answered after <em>be</em>."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Make a wh-cleft: <em>We need a clear plan.</em>",
          "options": [
            "What we need is a clear plan.",
            "What we need are a clear plan.",
            "That we need is a clear plan.",
            "What we needs is a clear plan."
          ],
          "answer": 0,
          "explain": "<em>What we need is …</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct form after <em>do</em>.",
          "options": [
            "What they did was rebuilding it.",
            "What they did was rebuild it.",
            "What they did was to rebuilding it.",
            "What they did was rebuilt it."
          ],
          "answer": 1,
          "explain": "<em>What … did was</em> + bare infinitive."
        },
        {
          "type": "mcq",
          "prompt": "Complete: <em>____ I remember is the kindness of strangers.</em>",
          "options": [
            "What",
            "All that",
            "Both A and B",
            "Which"
          ],
          "answer": 2,
          "explain": "Both <em>What</em> and <em>All that</em> work as cleft subjects here."
        },
        {
          "type": "mcq",
          "prompt": "Which is correct?",
          "options": [
            "The reason she left is because tired.",
            "The reason she left is that she was tired.",
            "The reason why she left because tired.",
            "The reason she left is because she tired."
          ],
          "answer": 1,
          "explain": "<em>The reason … is that …</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the verb.",
          "sentence": "What concerns us ____ the rising cost.",
          "answers": [
            "is"
          ],
          "explain": "A <em>what</em>-clause is singular → <em>is</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the focus link.",
          "sentence": "All he needed ____ a second chance.",
          "answers": [
            "was"
          ],
          "explain": "<em>All he needed was …</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with one word.",
          "sentence": "The ____ the lights failed was a power cut.",
          "answers": [
            "reason"
          ],
          "explain": "<em>The reason … was …</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a wh-cleft: <em>I dislike the noise.</em>",
          "answer": [
            "what i dislike is the noise"
          ],
          "explain": "<em>What I dislike is …</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite focusing the action: <em>She quietly resigned.</em>",
          "answer": [
            "what she did was resign",
            "what she did was quietly resign"
          ],
          "explain": "<em>What she did was</em> + bare infinitive."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with <em>The only thing</em>: <em>She simply forgot to reply.</em>",
          "answer": [
            "the only thing she did was forget to reply"
          ],
          "explain": "<em>The only thing … did was</em> + bare infinitive."
        },
        {
          "type": "error",
          "prompt": "Correct the cleft.",
          "given": "What we want are change.",
          "answer": [
            "what we want is change"
          ],
          "explain": "Singular <em>what</em>-clause → <em>is</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the action verb.",
          "given": "What he did was apologized to everyone.",
          "answer": [
            "what he did was apologise to everyone",
            "what he did was apologize to everyone"
          ],
          "explain": "Use the bare infinitive after <em>was</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a wh-cleft.",
          "bank": [
            "What",
            "impressed",
            "the",
            "judges",
            "was",
            "her",
            "confidence"
          ],
          "answer": "What impressed the judges was her confidence",
          "explain": "<em>What impressed the judges was …</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a cleft with <em>The thing</em>.",
          "bank": [
            "The",
            "thing",
            "I",
            "fear",
            "most",
            "is",
            "failure"
          ],
          "answer": "The thing I fear most is failure",
          "explain": "<em>The thing I fear most is …</em>."
        },
        {
          "type": "match",
          "prompt": "Match each cleft type to its example.",
          "pairs": [
            {
              "l": "Wh-cleft",
              "r": "What I want is …"
            },
            {
              "l": "All-cleft",
              "r": "All you need is …"
            },
            {
              "l": "Reason-cleft",
              "r": "The reason is that …"
            }
          ],
          "explain": "Each variant foregrounds the focus after <em>be</em>."
        }
      ]
    },
    "s9_L5_mixedCond": {
      "id": "s9_L5_mixedCond",
      "code": "G.S9.5",
      "title": "Mixed Conditionals",
      "chapter": "Chapter 1 — Emphasis, Inversion & Advanced Time and Condition",
      "week": "Week 5 · Cause, Effect and Regret",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.SS.1.5",
      "_ccg": "reconstruct",
      "vocabulary": [
        "hypothetical",
        "unreal",
        "consequence",
        "regret",
        "timeframe",
        "counterfactual",
        "outcome",
        "condition",
        "result",
        "reflect"
      ],
      "explanation": [
        "A <b>mixed conditional</b> combines two different time frames in one sentence. The most common type links a <b>past</b> unreal condition to a <b>present</b> result: <i>If I had studied medicine (past), I would be a doctor now (present)</i> — structure: <i>If + past perfect, … would + base verb</i>.",
        "The reverse type links a <b>present/general</b> unreal condition to a <b>past</b> result: <i>If I were more organised (always true), I would not have missed the deadline (past)</i> — structure: <i>If + past simple, … would have + past participle</i>. Mixed conditionals are ideal for talking about regret and the lasting effects of past actions."
      ],
      "examples": [
        {
          "type": "right",
          "text": "<em>If I had saved more</em>, I <em>would be</em> debt-free today."
        },
        {
          "type": "right",
          "text": "<em>If she were taller</em>, she <em>would have made</em> the team last year."
        },
        {
          "type": "right",
          "text": "<em>If we hadn't missed the train</em>, we <em>would be</em> home by now."
        },
        {
          "type": "wrong",
          "text": "If I had studied, I will be a doctor now."
        },
        {
          "type": "right",
          "text": "<em>If he weren't so careless</em>, he <em>wouldn't have lost</em> the keys."
        }
      ],
      "mistakes": [
        "<em>If I had studied, I will be a doctor.</em> → <em>… I would be a doctor.</em> — the present result uses <b>would + base verb</b>, not <i>will</i>.",
        "<em>If she was taller, she would have made the team.</em> → <em>If she were taller …</em> — use <b>were</b> for the unreal present condition.",
        "<em>If we hadn't left, we would have been home now.</em> → <em>… we would be home now.</em> — a present result needs <b>would be</b>, not <i>would have been</i>."
      ],
      "traps": [
        "Decide the time of the <b>condition</b> and the time of the <b>result</b> separately, then pick each verb form.",
        "Past condition + present result → <em>If + past perfect, would + base</em>.",
        "Present condition + past result → <em>If + past simple, would have + past participle</em>."
      ],
      "arabicInsight": "الشرط المختلط (mixed conditional) يجمع زمنين مختلفين في جملة واحدة. الأكثر شيوعًا: شرط غير واقعي في <b>الماضي</b> ونتيجة في <b>الحاضر</b>: <i>If + past perfect … would + مصدر</i>. والعكس: شرط حاضر/عام ونتيجة ماضية: <i>If + past simple … would have + التصريف الثالث</i>. مفيد للتعبير عن الندم وآثار الماضي.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the present result.",
          "options": [
            "If I had taken the job, I will be richer now.",
            "If I had taken the job, I would be richer now.",
            "If I had taken the job, I would have been richer now.",
            "If I took the job, I will be richer now."
          ],
          "answer": 1,
          "explain": "Past condition + present result → <em>would be</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: <em>If she were more confident, she ____ that prize last month.</em>",
          "options": [
            "would win",
            "would have won",
            "will win",
            "won"
          ],
          "answer": 1,
          "explain": "Present condition + past result → <em>would have won</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which is a correct mixed conditional?",
          "options": [
            "If we hadn't argued, we would still be friends.",
            "If we hadn't argued, we will still be friends.",
            "If we didn't argue, we would still be friends yesterday.",
            "If we wouldn't argue, we would still be friends."
          ],
          "answer": 0,
          "explain": "Past condition + present result."
        },
        {
          "type": "mcq",
          "prompt": "Pick the best meaning of: <em>If he weren't so shy, he would have spoken up.</em>",
          "options": [
            "He is shy in general, so he stayed silent then.",
            "He was shy only once.",
            "He will be shy.",
            "He spoke up because he is shy."
          ],
          "answer": 0,
          "explain": "General present trait → past consequence."
        },
        {
          "type": "fill",
          "prompt": "Complete with the right form of <em>be</em>.",
          "sentence": "If I ____ a better planner, I wouldn't have forgotten the meeting.",
          "answers": [
            "were",
            "was"
          ],
          "explain": "Unreal present condition → <em>were</em> (also accepted: <em>was</em>)."
        },
        {
          "type": "fill",
          "prompt": "Complete the present result.",
          "sentence": "If they had invested earlier, they ____ wealthy now.",
          "answers": [
            "would be"
          ],
          "explain": "Past condition + present result → <em>would be</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the auxiliary.",
          "sentence": "If she spoke French, she ____ have got the post last year.",
          "answers": [
            "would"
          ],
          "explain": "Present condition + past result → <em>would have got</em>."
        },
        {
          "type": "transform",
          "prompt": "Join into a mixed conditional (past → present): <em>I didn't learn to drive. I depend on buses now.</em>",
          "answer": [
            "if i had learned to drive i wouldnt depend on buses now",
            "if i had learnt to drive i wouldnt depend on buses now"
          ],
          "explain": "Past perfect condition + present result."
        },
        {
          "type": "transform",
          "prompt": "Join into a mixed conditional (present → past): <em>He is not careful. He damaged the car yesterday.</em>",
          "answer": [
            "if he were careful he wouldnt have damaged the car",
            "if he were more careful he wouldnt have damaged the car"
          ],
          "explain": "Present trait + past result."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a mixed conditional: <em>We moved here, so we are far from family now.</em>",
          "answer": [
            "if we hadnt moved here we wouldnt be far from family now"
          ],
          "explain": "Past action + present result."
        },
        {
          "type": "error",
          "prompt": "Correct the result clause.",
          "given": "If I had slept earlier, I will not be tired now.",
          "answer": [
            "if i had slept earlier i would not be tired now",
            "if i had slept earlier i wouldnt be tired now"
          ],
          "explain": "Present result → <em>would not be</em>, not <em>will not be</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the condition verb.",
          "given": "If she was taller, she would have joined the squad.",
          "answer": [
            "if she were taller she would have joined the squad"
          ],
          "explain": "Unreal present condition → <em>were</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a mixed conditional.",
          "bank": [
            "If",
            "I",
            "had",
            "listened",
            "I",
            "would",
            "know",
            "the",
            "answer",
            "now"
          ],
          "answer": "If I had listened I would know the answer now",
          "explain": "Past condition + present result."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a mixed conditional.",
          "bank": [
            "If",
            "he",
            "were",
            "honest",
            "he",
            "would",
            "have",
            "admitted",
            "it"
          ],
          "answer": "If he were honest he would have admitted it",
          "explain": "Present condition + past result."
        },
        {
          "type": "match",
          "prompt": "Match each condition to the result time it implies.",
          "pairs": [
            {
              "l": "If I had saved more, …",
              "r": "I would be comfortable now."
            },
            {
              "l": "If she were braver, …",
              "r": "she would have spoken then."
            },
            {
              "l": "If we hadn't left, …",
              "r": "we would still live there."
            }
          ],
          "explain": "Identify whether the result is present or past."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the present result.",
          "options": [
            "If they had warned us, we will be ready now.",
            "If they had warned us, we would be ready now.",
            "If they had warned us, we would have been ready now.",
            "If they warned us, we would be ready now."
          ],
          "answer": 1,
          "explain": "Past condition + present result → <em>would be</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: <em>If he were less stubborn, he ____ the contract last week.</em>",
          "options": [
            "would sign",
            "would have signed",
            "will sign",
            "signed"
          ],
          "answer": 1,
          "explain": "Present trait + past result → <em>would have signed</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which is correct?",
          "options": [
            "If I hadn't quit, I would be a manager today.",
            "If I hadn't quit, I will be a manager today.",
            "If I didn't quit, I would be a manager yesterday.",
            "If I wouldn't quit, I would be a manager."
          ],
          "answer": 0,
          "explain": "Past condition + present result."
        },
        {
          "type": "mcq",
          "prompt": "Best meaning of: <em>If she weren't allergic, she would have eaten the cake.</em>",
          "options": [
            "She is allergic in general, so she didn't eat it.",
            "She ate the cake.",
            "She will be allergic.",
            "She is never allergic."
          ],
          "answer": 0,
          "explain": "General present condition → past consequence."
        },
        {
          "type": "fill",
          "prompt": "Complete the unreal condition.",
          "sentence": "If she ____ more cautious, she wouldn't have crashed the car.",
          "answers": [
            "were",
            "was"
          ],
          "explain": "General present trait → <em>were</em> (also <em>was</em>) with a past result."
        },
        {
          "type": "fill",
          "prompt": "Complete the present result.",
          "sentence": "If we had booked sooner, we ____ on the beach right now.",
          "answers": [
            "would be"
          ],
          "explain": "Past condition + present result → <em>would be</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the auxiliary.",
          "sentence": "If he trained regularly, he ____ have won that race.",
          "answers": [
            "would"
          ],
          "explain": "Present condition + past result → <em>would have won</em>."
        },
        {
          "type": "transform",
          "prompt": "Join (past → present): <em>I didn't take the medicine. I feel ill now.</em>",
          "answer": [
            "if i had taken the medicine i wouldnt feel ill now"
          ],
          "explain": "Past perfect condition + present result."
        },
        {
          "type": "transform",
          "prompt": "Join (present → past): <em>She isn't patient. She gave up too early yesterday.</em>",
          "answer": [
            "if she were patient she wouldnt have given up too early",
            "if she were more patient she wouldnt have given up so early"
          ],
          "explain": "Present trait + past result."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a mixed conditional: <em>They sold the house, so they have nowhere to stay now.</em>",
          "answer": [
            "if they hadnt sold the house they would have somewhere to stay now"
          ],
          "explain": "Past action + present result."
        },
        {
          "type": "error",
          "prompt": "Correct the result clause.",
          "given": "If we had set off earlier, we will be there by now.",
          "answer": [
            "if we had set off earlier we would be there by now"
          ],
          "explain": "Present result → <em>would be</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the condition verb.",
          "given": "If I was taller, I would have reached the shelf yesterday.",
          "answer": [
            "if i were taller i would have reached the shelf yesterday"
          ],
          "explain": "Unreal present condition → <em>were</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a mixed conditional.",
          "bank": [
            "If",
            "you",
            "had",
            "told",
            "me",
            "I",
            "would",
            "be",
            "prepared",
            "now"
          ],
          "answer": "If you had told me I would be prepared now",
          "explain": "Past condition + present result."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a mixed conditional.",
          "bank": [
            "If",
            "she",
            "were",
            "taller",
            "she",
            "would",
            "have",
            "qualified"
          ],
          "answer": "If she were taller she would have qualified",
          "explain": "Present condition + past result."
        },
        {
          "type": "match",
          "prompt": "Match each opener to a result of the right time.",
          "pairs": [
            {
              "l": "If I had revised, …",
              "r": "I would feel calmer now."
            },
            {
              "l": "If he were kinder, …",
              "r": "he would have helped then."
            },
            {
              "l": "If they hadn't sold it, …",
              "r": "they would still own it."
            }
          ],
          "explain": "Match each unreal condition to a present or past result."
        }
      ]
    },
    "s9_L6_condAlt": {
      "id": "s9_L6_condAlt",
      "code": "G.S9.6",
      "title": "Alternatives to <em>If</em> and Advanced Conditions",
      "chapter": "Chapter 1 — Emphasis, Inversion & Advanced Time and Condition",
      "week": "Week 6 · Negotiation and Stance",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.SS.1.6",
      "_ccg": "reconstruct",
      "vocabulary": [
        "provided",
        "unless",
        "otherwise",
        "supposing",
        "stipulate",
        "precondition",
        "exception",
        "concession",
        "negotiate",
        "clause"
      ],
      "explanation": [
        "Several connectors replace or refine <i>if</i>. <b>Unless</b> = <i>if … not</i> (<i>You'll fail unless you revise</i>). <b>Provided/providing that</b> and <b>as long as / on condition that</b> set a strong requirement (<i>You may go provided that you finish first</i>). <b>But for</b> + noun = <i>if it weren't/hadn't been for</i> (<i>But for your help, I would have failed</i>).",
        "Other useful items: <b>Otherwise</b> states the consequence of not meeting a condition (<i>Hurry, otherwise we'll miss it</i>); <b>Supposing/Suppose</b> opens a hypothesis (<i>Supposing it rained, what then?</i>); <b>Even if</b> concedes (<i>Even if it costs more, I'll buy it</i>). Match the verb forms to real, unreal-present, or unreal-past meaning, just as with <i>if</i>."
      ],
      "examples": [
        {
          "type": "right",
          "text": "You won't improve <em>unless</em> you practise."
        },
        {
          "type": "right",
          "text": "I'll lend it to you <em>provided that</em> you return it."
        },
        {
          "type": "right",
          "text": "<em>But for</em> the rain, the match would have finished."
        },
        {
          "type": "wrong",
          "text": "Unless you don't hurry, we'll be late."
        },
        {
          "type": "right",
          "text": "<em>Even if</em> she apologised, I wouldn't trust her again."
        }
      ],
      "mistakes": [
        "<em>Unless you don't hurry …</em> → <em>Unless you hurry …</em> — <b>unless</b> already means <i>if not</i>; don't add a second negative.",
        "<em>Provided that you will finish …</em> → <em>Provided that you finish …</em> — use the <b>present</b>, not <i>will</i>, in the condition.",
        "<em>But for you helped me …</em> → <em>But for your help …</em> — <b>but for</b> is followed by a <b>noun</b>."
      ],
      "traps": [
        "<b>Unless</b> ≈ <i>if … not</i>, so never make it doubly negative.",
        "<b>Otherwise</b> means <i>if not</i> and usually starts a new clause: <em>Pay now; otherwise the offer ends</em>.",
        "<b>Even if</b> concedes a point; <b>even though</b> states a fact — don't confuse them."
      ],
      "arabicInsight": "توجد روابط تحل محل <i>if</i> أو تدقّق معناه: <b>unless</b> = if not؛ <b>provided/as long as/on condition that</b> = شرط قوي؛ <b>but for + اسم</b> = لولا؛ <b>otherwise</b> = وإلا؛ <b>supposing</b> = افترض؛ <b>even if</b> = حتى لو. نطابق صيغ الأفعال مع المعنى الواقعي أو غير الواقعي.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct use of <em>unless</em>.",
          "options": [
            "Unless you don't book, you'll miss it.",
            "Unless you book, you'll miss it.",
            "Unless you will book, you'll miss it.",
            "Unless you booked, you'll miss it."
          ],
          "answer": 1,
          "explain": "<em>Unless</em> = if not; no extra negative, present tense."
        },
        {
          "type": "mcq",
          "prompt": "Complete: <em>You can borrow the car ____ you fill the tank.</em>",
          "options": [
            "unless",
            "as long as",
            "but for",
            "otherwise"
          ],
          "answer": 1,
          "explain": "<em>As long as</em> sets a requirement."
        },
        {
          "type": "mcq",
          "prompt": "Which means the same as <em>If you hadn't warned me …</em>?",
          "options": [
            "Unless you warned me …",
            "But for your warning …",
            "Provided you warned me …",
            "Even if you warned me …"
          ],
          "answer": 1,
          "explain": "<em>But for + noun</em> = if it hadn't been for."
        },
        {
          "type": "mcq",
          "prompt": "Pick the concessive form.",
          "options": [
            "Even though it rains tomorrow, we'll go.",
            "Even if it rains tomorrow, we'll go.",
            "Unless it rains tomorrow, we'll go.",
            "Provided it rains tomorrow, we'll go."
          ],
          "answer": 1,
          "explain": "<em>Even if</em> concedes a hypothetical."
        },
        {
          "type": "fill",
          "prompt": "Complete with one connector.",
          "sentence": "Take an umbrella; ____ you'll get soaked.",
          "answers": [
            "otherwise"
          ],
          "explain": "<em>Otherwise</em> = if you don't."
        },
        {
          "type": "fill",
          "prompt": "Complete the condition.",
          "sentence": "I'll sign ____ that the terms are fair.",
          "answers": [
            "provided",
            "providing"
          ],
          "explain": "<em>Provided/providing that</em> sets a requirement."
        },
        {
          "type": "fill",
          "prompt": "Complete with two words.",
          "sentence": "____ ____ your advice, I would have invested badly.",
          "answers": [
            "But for"
          ],
          "explain": "<em>But for + noun</em> = if it weren't for."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with <em>unless</em>: <em>If you don't slow down, you'll crash.</em>",
          "answer": [
            "unless you slow down youll crash",
            "unless you slow down you will crash"
          ],
          "explain": "<em>Unless</em> replaces <em>if … not</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with <em>but for</em>: <em>If it hadn't been for the alarm, we would have overslept.</em>",
          "answer": [
            "but for the alarm we would have overslept"
          ],
          "explain": "<em>But for + noun</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with <em>provided that</em>: <em>You can stay if you keep quiet.</em>",
          "answer": [
            "you can stay provided that you keep quiet",
            "you can stay providing that you keep quiet"
          ],
          "explain": "Strong requirement with <em>provided that</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the double negative.",
          "given": "Unless you don't study, you will pass.",
          "answer": [
            "unless you study you will pass"
          ],
          "explain": "<em>Unless</em> already = if not."
        },
        {
          "type": "error",
          "prompt": "Fix the form after <em>provided that</em>.",
          "given": "Provided that you will pay, the goods are yours.",
          "answer": [
            "provided that you pay the goods are yours"
          ],
          "explain": "Use the present, not <em>will</em>, in the condition."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "may",
            "leave",
            "as",
            "long",
            "as",
            "you",
            "sign",
            "out"
          ],
          "answer": "You may leave as long as you sign out",
          "explain": "<em>As long as</em> sets a condition."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "But",
            "for",
            "the",
            "traffic",
            "we",
            "would",
            "have",
            "arrived",
            "early"
          ],
          "answer": "But for the traffic we would have arrived early",
          "explain": "<em>But for + noun</em> = if it weren't for."
        },
        {
          "type": "match",
          "prompt": "Match each connector to its meaning.",
          "pairs": [
            {
              "l": "unless",
              "r": "if … not"
            },
            {
              "l": "but for",
              "r": "if it weren't for"
            },
            {
              "l": "even if",
              "r": "whether or not it happens"
            }
          ],
          "explain": "Each links a condition to a result with a distinct nuance."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct use of <em>unless</em>.",
          "options": [
            "Unless you don't apply, you can't win.",
            "Unless you apply, you can't win.",
            "Unless you will apply, you can't win.",
            "Unless you applied, you can't win."
          ],
          "answer": 1,
          "explain": "<em>Unless</em> = if not; present tense, single negative."
        },
        {
          "type": "mcq",
          "prompt": "Complete: <em>I'll wait ____ you promise to be quick.</em>",
          "options": [
            "otherwise",
            "on condition that",
            "but for",
            "even though"
          ],
          "answer": 1,
          "explain": "<em>On condition that</em> sets a requirement."
        },
        {
          "type": "mcq",
          "prompt": "Which means <em>If it weren't for the subsidy …</em>?",
          "options": [
            "Unless the subsidy …",
            "But for the subsidy …",
            "Provided the subsidy …",
            "Otherwise the subsidy …"
          ],
          "answer": 1,
          "explain": "<em>But for + noun</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the hypothesis opener.",
          "options": [
            "Supposing the deal fell through, what would you do?",
            "Unless the deal fell through, what would you do?",
            "Otherwise the deal fell through, what would you do?",
            "Provided the deal fell through, what would you do?"
          ],
          "answer": 0,
          "explain": "<em>Supposing</em> opens a hypothesis."
        },
        {
          "type": "fill",
          "prompt": "Complete with one connector.",
          "sentence": "Save the file now; ____ you'll lose your work.",
          "answers": [
            "otherwise"
          ],
          "explain": "<em>Otherwise</em> = if you don't."
        },
        {
          "type": "fill",
          "prompt": "Complete the condition.",
          "sentence": "They'll refund you ____ long as you keep the receipt.",
          "answers": [
            "as"
          ],
          "explain": "<em>As long as</em> = on condition that."
        },
        {
          "type": "fill",
          "prompt": "Complete with two words.",
          "sentence": "____ ____ the storm, the ship would have reached port.",
          "answers": [
            "But for"
          ],
          "explain": "<em>But for + noun</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with <em>unless</em>: <em>If you don't book early, prices rise.</em>",
          "answer": [
            "unless you book early prices rise"
          ],
          "explain": "<em>Unless</em> = if … not."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with <em>but for</em>: <em>If it weren't for her patience, the class would be chaos.</em>",
          "answer": [
            "but for her patience the class would be chaos"
          ],
          "explain": "<em>But for + noun</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with <em>as long as</em>: <em>You can use the lab if you follow the rules.</em>",
          "answer": [
            "you can use the lab as long as you follow the rules"
          ],
          "explain": "Condition with <em>as long as</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the double negative.",
          "given": "Unless you don't hurry, we will catch the bus.",
          "answer": [
            "unless you hurry we will catch the bus"
          ],
          "explain": "Remove the extra negative after <em>unless</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the tense.",
          "given": "Provided that he will agree, we start tomorrow.",
          "answer": [
            "provided that he agrees we start tomorrow"
          ],
          "explain": "Present tense in the condition."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Even",
            "if",
            "the",
            "cost",
            "rises",
            "we",
            "will",
            "continue"
          ],
          "answer": "Even if the cost rises we will continue",
          "explain": "<em>Even if</em> concedes a hypothetical."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "may",
            "enter",
            "on",
            "condition",
            "that",
            "you",
            "stay",
            "quiet"
          ],
          "answer": "You may enter on condition that you stay quiet",
          "explain": "<em>On condition that</em> = strict requirement."
        },
        {
          "type": "match",
          "prompt": "Match each connector to a sample clause.",
          "pairs": [
            {
              "l": "provided that",
              "r": "you return it by Friday"
            },
            {
              "l": "otherwise",
              "r": "we will cancel the order"
            },
            {
              "l": "supposing",
              "r": "the plan failed, what then"
            }
          ],
          "explain": "Each connector frames a condition or its consequence."
        }
      ]
    },
    "s9_L7_futurePerfect": {
      "id": "s9_L7_futurePerfect",
      "code": "G.S9.7",
      "title": "Future Perfect and Future Perfect Continuous",
      "chapter": "Chapter 1 — Emphasis, Inversion & Advanced Time and Condition",
      "week": "Week 7 · Projecting Forward",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.SS.1.7",
      "_ccg": "reconstruct",
      "vocabulary": [
        "forecast",
        "deadline",
        "duration",
        "milestone",
        "completion",
        "projection",
        "by then",
        "ongoing",
        "achievement",
        "estimate"
      ],
      "explanation": [
        "The <b>future perfect</b> (<i>will have + past participle</i>) views an action as <b>completed before a point in the future</b>: <i>By 2030, scientists will have mapped most of the genome</i>. It often appears with <i>by</i>, <i>by the time</i>, <i>before</i> and <i>in (two years)</i>.",
        "The <b>future perfect continuous</b> (<i>will have been + -ing</i>) stresses the <b>duration</b> of an activity up to a future point: <i>By June, she will have been teaching for thirty years</i>. Use it with <i>for</i> + a length of time. Choose the continuous when the emphasis is on how long; choose the simple future perfect when the emphasis is on completion or result."
      ],
      "examples": [
        {
          "type": "right",
          "text": "<em>By the time you arrive</em>, we <em>will have finished</em> dinner."
        },
        {
          "type": "right",
          "text": "<em>In two years</em> she <em>will have qualified</em> as an engineer."
        },
        {
          "type": "right",
          "text": "By 2027, the firm <em>will have been operating</em> for a decade."
        },
        {
          "type": "wrong",
          "text": "By next week I will have been finish the report."
        },
        {
          "type": "right",
          "text": "They <em>will have been driving</em> for six hours by noon."
        }
      ],
      "mistakes": [
        "<em>By the time he comes, I will finish.</em> → <em>… I will have finished.</em> — completion before a future point needs <b>will have + past participle</b>.",
        "<em>She will have been finish soon.</em> → <em>She will have finished soon.</em> — don't mix <i>been</i> with a bare verb.",
        "<em>By next year I will have been working here for…</em> ✓ but <em>By next year I will have been worked …</em> ✗ — continuous needs <b>been + -ing</b>."
      ],
      "traps": [
        "Use <b>by / by the time / before</b> to mark the future deadline.",
        "Simple future perfect = <b>completion</b>; future perfect continuous = <b>duration</b> (with <i>for</i>).",
        "In the <i>by the time</i> clause, use the <b>present</b> tense, not <i>will</i>."
      ],
      "arabicInsight": "زمن <b>future perfect</b> (<i>will have + التصريف الثالث</i>) يصف فعلًا مكتملًا قبل نقطة في المستقبل، ويرافقه <i>by / by the time / before</i>. أما <b>future perfect continuous</b> (<i>will have been + -ing</i>) فيركّز على مدة النشاط حتى نقطة مستقبلية مع <i>for</i>. نختار البسيط للاكتمال والمستمر للمدة. لاحظ استخدام المضارع في جملة <i>by the time</i>.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the future perfect.",
          "options": [
            "By 8 p.m. they will finish the rehearsal.",
            "By 8 p.m. they will have finished the rehearsal.",
            "By 8 p.m. they finish the rehearsal.",
            "By 8 p.m. they will have been finish the rehearsal."
          ],
          "answer": 1,
          "explain": "Completion before a future point → <em>will have finished</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which stresses duration?",
          "options": [
            "By May she will have written three books.",
            "By May she will have been writing for a year.",
            "By May she writes for a year.",
            "By May she will write for a year."
          ],
          "answer": 1,
          "explain": "<em>will have been writing for …</em> emphasises duration."
        },
        {
          "type": "mcq",
          "prompt": "Complete: <em>By the time the guests ____, we will have tidied up.</em>",
          "options": [
            "will arrive",
            "arrive",
            "arrived",
            "are arriving"
          ],
          "answer": 1,
          "explain": "Use the present in the <em>by the time</em> clause."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct sentence.",
          "options": [
            "In ten years this tree will have grown enormous.",
            "In ten years this tree will have been grown enormous.",
            "In ten years this tree will grow have enormous.",
            "In ten years this tree grows enormous."
          ],
          "answer": 0,
          "explain": "<em>will have grown</em> = completed before a future point."
        },
        {
          "type": "fill",
          "prompt": "Complete the future perfect.",
          "sentence": "By Friday I ____ have submitted the application.",
          "answers": [
            "will"
          ],
          "explain": "<em>will have + past participle</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the participle.",
          "sentence": "By midnight they will have ____ the whole report. (read)",
          "answers": [
            "read"
          ],
          "explain": "Future perfect: <em>will have read</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the continuous form.",
          "sentence": "By June, he will have been ____ here for five years. (work)",
          "answers": [
            "working"
          ],
          "explain": "<em>will have been + -ing</em> for duration."
        },
        {
          "type": "transform",
          "prompt": "Rewrite in the future perfect: <em>I finish the course; then it is December.</em>",
          "answer": [
            "by december i will have finished the course"
          ],
          "explain": "Completion before a future point."
        },
        {
          "type": "transform",
          "prompt": "Rewrite stressing duration: <em>She starts teaching in 1996; in 2026 count the years.</em>",
          "answer": [
            "by 2026 she will have been teaching for thirty years"
          ],
          "explain": "<em>will have been teaching for …</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>by the time</em>: <em>We arrive; the film has already started.</em>",
          "answer": [
            "by the time we arrive the film will have started"
          ],
          "explain": "Present in the time clause; future perfect in the main clause."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "By next week I will finish all the marking.",
          "answer": [
            "by next week i will have finished all the marking"
          ],
          "explain": "Completion before a future point → <em>will have finished</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the continuous form.",
          "given": "By noon they will have been worked for hours.",
          "answer": [
            "by noon they will have been working for hours"
          ],
          "explain": "Continuous needs <em>been + -ing</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a future perfect sentence.",
          "bank": [
            "By",
            "2030",
            "the",
            "city",
            "will",
            "have",
            "doubled",
            "in",
            "size"
          ],
          "answer": "By 2030 the city will have doubled in size",
          "explain": "<em>will have doubled</em> = completed before 2030."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a future perfect continuous sentence.",
          "bank": [
            "By",
            "July",
            "we",
            "will",
            "have",
            "been",
            "living",
            "here",
            "for",
            "a",
            "year"
          ],
          "answer": "By July we will have been living here for a year",
          "explain": "<em>will have been living for …</em>."
        },
        {
          "type": "match",
          "prompt": "Match each form to its focus.",
          "pairs": [
            {
              "l": "will have arrived",
              "r": "completion before a future point"
            },
            {
              "l": "will have been waiting",
              "r": "duration up to a future point"
            },
            {
              "l": "by the time you call",
              "r": "present tense in the time clause"
            }
          ],
          "explain": "Simple = completion; continuous = duration; time clause = present."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the future perfect.",
          "options": [
            "By Sunday we will repaint the fence.",
            "By Sunday we will have repainted the fence.",
            "By Sunday we repaint the fence.",
            "By Sunday we will have been repaint the fence."
          ],
          "answer": 1,
          "explain": "Completion before a future point → <em>will have repainted</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which stresses duration?",
          "options": [
            "By dawn the team will have solved it.",
            "By dawn the team will have been working all night.",
            "By dawn the team works all night.",
            "By dawn the team will work all night."
          ],
          "answer": 1,
          "explain": "<em>will have been working</em> emphasises duration."
        },
        {
          "type": "mcq",
          "prompt": "Complete: <em>By the time the train ____, we'll have boarded.</em>",
          "options": [
            "will leave",
            "leaves",
            "left",
            "is leaving"
          ],
          "answer": 1,
          "explain": "Present in the time clause."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct sentence.",
          "options": [
            "In a month the project will have launched.",
            "In a month the project will have been launched continuously.",
            "In a month the project launch will have.",
            "In a month the project will launching."
          ],
          "answer": 0,
          "explain": "<em>will have launched</em> = completed before a future point."
        },
        {
          "type": "fill",
          "prompt": "Complete the future perfect.",
          "sentence": "By the holidays she ____ have saved enough.",
          "answers": [
            "will"
          ],
          "explain": "<em>will have + past participle</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the participle.",
          "sentence": "By tonight we will have ____ all the boxes. (pack)",
          "answers": [
            "packed"
          ],
          "explain": "Future perfect: <em>will have packed</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the continuous form.",
          "sentence": "By 2027 they will have been ____ the bridge for three years. (build)",
          "answers": [
            "building"
          ],
          "explain": "<em>will have been + -ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite in the future perfect: <em>They repay the loan; then it is next year.</em>",
          "answer": [
            "by next year they will have repaid the loan"
          ],
          "explain": "Completion before a future point."
        },
        {
          "type": "transform",
          "prompt": "Rewrite stressing duration: <em>He begins running in January; by autumn count the months.</em>",
          "answer": [
            "by autumn he will have been running for several months",
            "by autumn he will have been running for months"
          ],
          "explain": "<em>will have been running for …</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>by the time</em>: <em>You wake up; the sun has already risen.</em>",
          "answer": [
            "by the time you wake up the sun will have risen"
          ],
          "explain": "Present in the time clause; future perfect main clause."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "By the end of term I will read all twelve novels.",
          "answer": [
            "by the end of term i will have read all twelve novels"
          ],
          "explain": "Completion before a future point → <em>will have read</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the continuous form.",
          "given": "By evening she will have been study for ten hours.",
          "answer": [
            "by evening she will have been studying for ten hours"
          ],
          "explain": "Continuous needs <em>been + -ing</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a future perfect sentence.",
          "bank": [
            "By",
            "spring",
            "they",
            "will",
            "have",
            "completed",
            "the",
            "tunnel"
          ],
          "answer": "By spring they will have completed the tunnel",
          "explain": "<em>will have completed</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a future perfect continuous sentence.",
          "bank": [
            "By",
            "then",
            "I",
            "will",
            "have",
            "been",
            "teaching",
            "for",
            "a",
            "decade"
          ],
          "answer": "By then I will have been teaching for a decade",
          "explain": "<em>will have been teaching for …</em>."
        },
        {
          "type": "match",
          "prompt": "Match each cue to the form it favours.",
          "pairs": [
            {
              "l": "by the time",
              "r": "completed action before a future point"
            },
            {
              "l": "for ten years",
              "r": "duration with the continuous form"
            },
            {
              "l": "by 2040",
              "r": "a future deadline for completion"
            }
          ],
          "explain": "Choose simple for completion and continuous for duration."
        }
      ]
    },
    "s9_L8_futureInPast": {
      "id": "s9_L8_futureInPast",
      "code": "G.S9.8",
      "title": "Future in the Past and Advanced Future Forms",
      "chapter": "Chapter 1 — Emphasis, Inversion & Advanced Time and Condition",
      "week": "Week 8 · Reporting Plans and Predictions",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.SS.1.8",
      "_ccg": "reconstruct",
      "vocabulary": [
        "intention",
        "plan",
        "prediction",
        "arrangement",
        "scheduled",
        "anticipate",
        "retrospect",
        "backshift",
        "imminent",
        "forecast"
      ],
      "explanation": [
        "When we look back from a past moment at something that was still ahead, we use <b>future-in-the-past</b> forms. The main ones are <i>was/were going to</i> (intention/prediction), <i>would</i> (a future seen from the past), <i>was/were to</i> (an arranged or fated future), and <i>was/were about to</i> (the immediate future).",
        "Compare: <i>She was going to call</i> (intention), <i>He said he would help</i> (reported future), <i>The talks were to begin at noon</i> (formal arrangement), <i>We were about to leave when the phone rang</i> (on the point of). These forms are essential in narrative and reported speech, where present/future verbs backshift one step into the past."
      ],
      "examples": [
        {
          "type": "right",
          "text": "We <em>were going to</em> travel, but the flight was cancelled."
        },
        {
          "type": "right",
          "text": "He promised he <em>would</em> return the book."
        },
        {
          "type": "right",
          "text": "The ceremony <em>was to</em> take place at dawn."
        },
        {
          "type": "wrong",
          "text": "She said she will call me later."
        },
        {
          "type": "right",
          "text": "I <em>was about to</em> speak when the bell rang."
        }
      ],
      "mistakes": [
        "<em>She said she will call.</em> → <em>She said she would call.</em> — <i>will</i> backshifts to <b>would</b> after a past reporting verb.",
        "<em>We were going to bought it.</em> → <em>We were going to buy it.</em> — use the <b>base</b> verb after <i>going to</i>.",
        "<em>The match was to began at six.</em> → <em>The match was to begin at six.</em> — use the <b>base</b> verb after <i>was/were to</i>."
      ],
      "traps": [
        "<b>was going to</b> = a past intention or prediction (often unfulfilled).",
        "<b>was/were to</b> = a formal arrangement or destiny: <em>They were to meet at noon</em>.",
        "<b>was about to</b> = on the very point of doing something."
      ],
      "arabicInsight": "للنظر من نقطة في الماضي إلى حدث كان لا يزال مستقبلًا نستخدم صيغ <b>future-in-the-past</b>: <i>was/were going to</i> (نية/توقّع)، <i>would</i> (مستقبل من منظور الماضي)، <i>was/were to</i> (ترتيب رسمي أو قدر)، <i>was/were about to</i> (مستقبل وشيك). في الكلام المنقول يتراجع <i>will</i> إلى <b>would</b>.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the reported future.",
          "options": [
            "He said he will join us.",
            "He said he would join us.",
            "He said he joins us.",
            "He said he is joining will."
          ],
          "answer": 1,
          "explain": "After a past reporting verb, <em>will</em> → <em>would</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which shows an unfulfilled past intention?",
          "options": [
            "We are going to repaint it.",
            "We were going to repaint it, but ran out of time.",
            "We will repaint it.",
            "We have repainted it."
          ],
          "answer": 1,
          "explain": "<em>was/were going to</em> = past intention (here unfulfilled)."
        },
        {
          "type": "mcq",
          "prompt": "Complete: <em>The delegates ____ to sign the treaty the next morning.</em>",
          "options": [
            "were",
            "will",
            "are",
            "have"
          ],
          "answer": 0,
          "explain": "<em>were to</em> = a formal arrangement seen from the past."
        },
        {
          "type": "mcq",
          "prompt": "Pick the 'immediate future in the past'.",
          "options": [
            "I was about to leave when it rang.",
            "I will leave when it rings.",
            "I am about to leave.",
            "I had left when it rang."
          ],
          "answer": 0,
          "explain": "<em>was about to</em> = on the point of."
        },
        {
          "type": "fill",
          "prompt": "Complete the future-in-the-past.",
          "sentence": "She knew she ____ regret the decision one day.",
          "answers": [
            "would"
          ],
          "explain": "<em>would</em> = a future seen from a past viewpoint."
        },
        {
          "type": "fill",
          "prompt": "Complete the form.",
          "sentence": "They were ____ to announce the results that evening.",
          "answers": [
            "going"
          ],
          "explain": "<em>were going to</em> = past intention/prediction."
        },
        {
          "type": "fill",
          "prompt": "Complete with one word.",
          "sentence": "We were ____ to board when the gate changed.",
          "answers": [
            "about"
          ],
          "explain": "<em>were about to</em> = imminent past future."
        },
        {
          "type": "transform",
          "prompt": "Report this: <em>\"I will phone you tomorrow,\" she said.</em>",
          "answer": [
            "she said she would phone me the next day",
            "she said that she would phone me the next day",
            "she said she would phone me the following day"
          ],
          "explain": "<em>will</em> → <em>would</em>; <em>tomorrow</em> → <em>the next/following day</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a past intention: <em>They plan to expand, but the deal collapses.</em>",
          "answer": [
            "they were going to expand but the deal collapsed"
          ],
          "explain": "<em>were going to</em> + base verb."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a formal arrangement: <em>The minister will open the bridge.</em> (seen from the past)",
          "answer": [
            "the minister was to open the bridge"
          ],
          "explain": "<em>was to</em> + base verb."
        },
        {
          "type": "error",
          "prompt": "Correct the reported future.",
          "given": "He told me he will help with the move.",
          "answer": [
            "he told me he would help with the move"
          ],
          "explain": "Backshift <em>will</em> → <em>would</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the verb after <em>going to</em>.",
          "given": "We were going to sold the car last week.",
          "answer": [
            "we were going to sell the car last week"
          ],
          "explain": "Use the base verb <em>sell</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a future-in-the-past sentence.",
          "bank": [
            "They",
            "were",
            "going",
            "to",
            "launch",
            "the",
            "app",
            "in",
            "spring"
          ],
          "answer": "They were going to launch the app in spring",
          "explain": "<em>were going to</em> + base verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a future-in-the-past sentence.",
          "bank": [
            "She",
            "was",
            "about",
            "to",
            "reply",
            "when",
            "he",
            "interrupted"
          ],
          "answer": "She was about to reply when he interrupted",
          "explain": "<em>was about to</em> = imminent past future."
        },
        {
          "type": "match",
          "prompt": "Match each form to its meaning.",
          "pairs": [
            {
              "l": "was going to",
              "r": "a past intention or prediction"
            },
            {
              "l": "was to",
              "r": "a formal arrangement or destiny"
            },
            {
              "l": "was about to",
              "r": "on the point of acting"
            }
          ],
          "explain": "Each future-in-the-past form carries a distinct nuance."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the reported future.",
          "options": [
            "They said they will arrive by noon.",
            "They said they would arrive by noon.",
            "They said they arrive by noon.",
            "They said they are will arrive by noon."
          ],
          "answer": 1,
          "explain": "<em>will</em> → <em>would</em> after a past reporting verb."
        },
        {
          "type": "mcq",
          "prompt": "Which shows an unfulfilled past plan?",
          "options": [
            "I am going to apologise.",
            "I was going to apologise, but lost my nerve.",
            "I will apologise.",
            "I have apologised."
          ],
          "answer": 1,
          "explain": "<em>was going to</em> = past intention, here unfulfilled."
        },
        {
          "type": "mcq",
          "prompt": "Complete: <em>The exhibition ____ to open the following week.</em>",
          "options": [
            "was",
            "will",
            "is",
            "has"
          ],
          "answer": 0,
          "explain": "<em>was to</em> = arrangement seen from the past."
        },
        {
          "type": "mcq",
          "prompt": "Pick the imminent past future.",
          "options": [
            "The kettle was about to boil when the power cut out.",
            "The kettle will boil soon.",
            "The kettle is about to boil.",
            "The kettle had boiled when the power cut out."
          ],
          "answer": 0,
          "explain": "<em>was about to</em> = on the point of."
        },
        {
          "type": "fill",
          "prompt": "Complete the future-in-the-past.",
          "sentence": "He sensed the plan ____ fail sooner or later.",
          "answers": [
            "would"
          ],
          "explain": "<em>would</em> = future from a past viewpoint."
        },
        {
          "type": "fill",
          "prompt": "Complete the form.",
          "sentence": "She was ____ to present her findings that afternoon.",
          "answers": [
            "going"
          ],
          "explain": "<em>was going to</em> = intention/prediction."
        },
        {
          "type": "fill",
          "prompt": "Complete with one word.",
          "sentence": "I was ____ to knock when the door opened.",
          "answers": [
            "about"
          ],
          "explain": "<em>was about to</em> = imminent."
        },
        {
          "type": "transform",
          "prompt": "Report this: <em>\"We will finish next week,\" they said.</em>",
          "answer": [
            "they said they would finish the following week",
            "they said that they would finish the next week",
            "they said they would finish the next week"
          ],
          "explain": "Backshift <em>will</em> → <em>would</em>; shift the time word."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a past intention: <em>She intends to study abroad, but funding falls through.</em>",
          "answer": [
            "she was going to study abroad but the funding fell through",
            "she was going to study abroad but funding fell through"
          ],
          "explain": "<em>was going to</em> + base verb."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a formal arrangement: <em>The committee will review the case.</em> (seen from the past)",
          "answer": [
            "the committee was to review the case"
          ],
          "explain": "<em>was to</em> + base verb."
        },
        {
          "type": "error",
          "prompt": "Correct the reported future.",
          "given": "She said she will email the schedule.",
          "answer": [
            "she said she would email the schedule"
          ],
          "explain": "Backshift <em>will</em> → <em>would</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the verb after <em>was to</em>.",
          "given": "The train was to departed at six sharp.",
          "answer": [
            "the train was to depart at six sharp"
          ],
          "explain": "Base verb after <em>was to</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a future-in-the-past sentence.",
          "bank": [
            "He",
            "knew",
            "he",
            "would",
            "need",
            "more",
            "time"
          ],
          "answer": "He knew he would need more time",
          "explain": "<em>would</em> = future seen from the past."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a future-in-the-past sentence.",
          "bank": [
            "The",
            "summit",
            "was",
            "to",
            "begin",
            "the",
            "next",
            "day"
          ],
          "answer": "The summit was to begin the next day",
          "explain": "<em>was to</em> = arrangement."
        },
        {
          "type": "match",
          "prompt": "Match each cue to the form it suggests.",
          "pairs": [
            {
              "l": "a reported plan after 'said'",
              "r": "would"
            },
            {
              "l": "an unfulfilled intention",
              "r": "was going to"
            },
            {
              "l": "an official timetable in the past",
              "r": "was to"
            }
          ],
          "explain": "Pick the future-in-the-past form that fits each context."
        }
      ]
    },
    "s9_L9_nounPhrases": {
      "id": "s9_L9_nounPhrases",
      "code": "G.S9.9",
      "title": "Complex Noun Phrases",
      "chapter": "Chapter 2 — Complex Noun Phrases, Voice and Academic Style",
      "week": "Week 9 · Packing Information",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.NP.2.1",
      "_ccg": "reconstruct",
      "vocabulary": [
        "head noun",
        "pre-modifier",
        "post-modifier",
        "compound",
        "participle",
        "prepositional",
        "dense",
        "stack",
        "determiner",
        "economy"
      ],
      "explanation": [
        "A noun phrase is built around a <b>head noun</b> with optional <b>pre-modifiers</b> (determiners, adjectives, noun-modifiers, participles) and <b>post-modifiers</b> (prepositional phrases, relative or participle clauses, to-infinitives). Advanced writers pack information economically into one phrase rather than several clauses: <i>a rapidly growing coastal city</i>.",
        "Pre-modifiers follow a typical order (opinion → size/age → colour → origin → material → purpose) and a <b>compound modifier</b> made of number + noun is <b>singular and hyphenated</b>: <i>a two-hour film</i>, <i>a ten-year-old pupil</i>. Post-modification adds detail after the head: <i>the report <u>on climate policy</u> published last week</i>."
      ],
      "examples": [
        {
          "type": "right",
          "text": "a <em>rapidly growing</em> coastal city"
        },
        {
          "type": "right",
          "text": "the <em>recently published</em> report <em>on migration</em>"
        },
        {
          "type": "right",
          "text": "a <em>two-hour</em> documentary about the desert"
        },
        {
          "type": "wrong",
          "text": "a documentary two hours about the desert"
        },
        {
          "type": "right",
          "text": "students <em>interested in research</em>"
        }
      ],
      "mistakes": [
        "<em>a two-hours film</em> → <em>a two-hour film</em> — a compound modifier uses the <b>singular</b>.",
        "<em>an interesting very book</em> → <em>a very interesting book</em> — the intensifier comes before the adjective.",
        "<em>the man tall in the corner</em> → <em>the tall man in the corner</em> — adjective before the noun, the phrase after."
      ],
      "traps": [
        "Number + noun compound modifiers are singular and hyphenated: <em>a five-star hotel</em>.",
        "Use participles as pre-modifiers: <em>a broken promise</em>, <em>a growing concern</em>.",
        "Post-modify with a prepositional phrase, relative clause or to-infinitive: <em>the best way to learn</em>."
      ],
      "arabicInsight": "العبارة الاسمية تُبنى حول <b>اسم رئيسي</b> مع مُحدِّدات سابقة (صفات، أسماء، اسم فاعل/مفعول) ولاحقة (شبه جملة، جملة وصل، مصدر). الكتابة المتقدمة تضغط المعلومات في عبارة واحدة. المُركَّب العددي يكون مفردًا وموصولًا بشرطة: <i>a two-hour film</i>.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Which compound modifier is correct?",
          "options": [
            "a three-days trip",
            "a three-day trip",
            "a three day's trip",
            "a trip three days"
          ],
          "answer": 1,
          "explain": "Number + noun modifier is singular and hyphenated."
        },
        {
          "type": "mcq",
          "prompt": "Choose the best-ordered phrase.",
          "options": [
            "a wooden small old box",
            "a small old wooden box",
            "an old wooden small box",
            "a box small old wooden"
          ],
          "answer": 1,
          "explain": "Size → age → material before the head noun."
        },
        {
          "type": "mcq",
          "prompt": "Identify the head noun: <em>the steadily rising cost of living</em>.",
          "options": [
            "steadily",
            "rising",
            "cost",
            "living"
          ],
          "answer": 2,
          "explain": "<em>cost</em> is the head; the rest modifies it."
        },
        {
          "type": "mcq",
          "prompt": "Which post-modifier is correct?",
          "options": [
            "the decision resigning to",
            "the decision to resign",
            "the decision resigned",
            "to resign the decision"
          ],
          "answer": 1,
          "explain": "A to-infinitive can post-modify a noun: <em>the decision to resign</em>."
        },
        {
          "type": "fill",
          "prompt": "Make the compound singular.",
          "sentence": "They watched a ____-minute presentation. (ninety)",
          "answers": [
            "ninety"
          ],
          "explain": "A number + noun modifier stays singular: <em>ninety-minute</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the participle pre-modifier. (grow)",
          "sentence": "Pollution is a ____ concern in the region.",
          "answers": [
            "growing"
          ],
          "explain": "Present participle as a pre-modifier: <em>a growing concern</em>."
        },
        {
          "type": "fill",
          "prompt": "Add a preposition to post-modify.",
          "sentence": "She gave a clear explanation ____ the results.",
          "answers": [
            "of"
          ],
          "explain": "Post-modifying prepositional phrase: <em>explanation of …</em>."
        },
        {
          "type": "transform",
          "prompt": "Combine into one noun phrase: <em>a city. It is on the coast. It is growing fast.</em>",
          "answer": [
            "a fast growing coastal city",
            "a fast-growing coastal city"
          ],
          "explain": "Pack the modifiers before the head noun."
        },
        {
          "type": "transform",
          "prompt": "Combine into one noun phrase: <em>a report. It was published recently. It is about energy.</em>",
          "answer": [
            "a recently published report on energy"
          ],
          "explain": "Participle pre-modifier + prepositional post-modifier."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a compound modifier: <em>a course that lasts six weeks</em>.",
          "answer": [
            "a six week course",
            "a six-week course"
          ],
          "explain": "Number + noun → singular hyphenated modifier."
        },
        {
          "type": "error",
          "prompt": "Correct the compound modifier.",
          "given": "We booked a four-stars hotel near the beach.",
          "answer": [
            "we booked a four star hotel near the beach",
            "we booked a four-star hotel near the beach"
          ],
          "explain": "Compound modifier is singular: <em>four-star</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the modifier order.",
          "given": "It is a problem serious that needs attention.",
          "answer": [
            "it is a serious problem that needs attention"
          ],
          "explain": "Adjective before the head noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct noun phrase plus verb.",
          "bank": [
            "A",
            "newly",
            "built",
            "library",
            "opened",
            "downtown"
          ],
          "answer": "A newly built library opened downtown",
          "explain": "Participle pre-modifier before the head noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "increasing",
            "demand",
            "for",
            "water",
            "worries",
            "planners"
          ],
          "answer": "The increasing demand for water worries planners",
          "explain": "Pre-modifier + prepositional post-modifier."
        },
        {
          "type": "match",
          "prompt": "Match each modifier to its type.",
          "pairs": [
            {
              "l": "a broken window",
              "r": "participle pre-modifier"
            },
            {
              "l": "the report on policy",
              "r": "prepositional post-modifier"
            },
            {
              "l": "a way to succeed",
              "r": "to-infinitive post-modifier"
            }
          ],
          "explain": "Identify how each element modifies the head noun."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Which compound modifier is correct?",
          "options": [
            "a five-stars rating",
            "a five-star rating",
            "a five star's rating",
            "a rating five stars"
          ],
          "answer": 1,
          "explain": "Singular hyphenated compound."
        },
        {
          "type": "mcq",
          "prompt": "Choose the best-ordered phrase.",
          "options": [
            "a French old beautiful clock",
            "a beautiful old French clock",
            "an old French beautiful clock",
            "a clock beautiful old French"
          ],
          "answer": 1,
          "explain": "Opinion → age → origin before the head."
        },
        {
          "type": "mcq",
          "prompt": "Identify the head noun: <em>a widely respected professor of physics</em>.",
          "options": [
            "widely",
            "respected",
            "professor",
            "physics"
          ],
          "answer": 2,
          "explain": "<em>professor</em> is the head."
        },
        {
          "type": "mcq",
          "prompt": "Which post-modifier is correct?",
          "options": [
            "the attempt escaping to",
            "the attempt to escape",
            "the attempt escaped",
            "to escape the attempt"
          ],
          "answer": 1,
          "explain": "To-infinitive post-modifier: <em>the attempt to escape</em>."
        },
        {
          "type": "fill",
          "prompt": "Make the compound singular.",
          "sentence": "It was a ____-page essay. (twelve)",
          "answers": [
            "twelve"
          ],
          "explain": "Number + noun modifier is singular: <em>twelve-page</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the participle pre-modifier. (lead)",
          "sentence": "She is a ____ expert in marine biology.",
          "answers": [
            "leading"
          ],
          "explain": "Present participle pre-modifier: <em>a leading expert</em>."
        },
        {
          "type": "fill",
          "prompt": "Add a preposition to post-modify.",
          "sentence": "We need a solution ____ the housing shortage.",
          "answers": [
            "to"
          ],
          "explain": "Post-modifier: <em>a solution to …</em>."
        },
        {
          "type": "transform",
          "prompt": "Combine into one noun phrase: <em>a scientist. She is respected widely. She studies climate.</em>",
          "answer": [
            "a widely respected climate scientist"
          ],
          "explain": "Pack the modifiers before the head noun."
        },
        {
          "type": "transform",
          "prompt": "Combine into one noun phrase: <em>a building. It was designed beautifully. It is in the old town.</em>",
          "answer": [
            "a beautifully designed building in the old town"
          ],
          "explain": "Participle pre-modifier + prepositional post-modifier."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a compound modifier: <em>a delay that lasted three hours</em>.",
          "answer": [
            "a three hour delay",
            "a three-hour delay"
          ],
          "explain": "Number + noun → singular hyphenated."
        },
        {
          "type": "error",
          "prompt": "Correct the compound modifier.",
          "given": "It was a ten-years-old tradition.",
          "answer": [
            "it was a ten year old tradition",
            "it was a ten-year-old tradition"
          ],
          "explain": "Compound modifier is singular: <em>ten-year-old</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the modifier order.",
          "given": "She wrote a letter long to the council.",
          "answer": [
            "she wrote a long letter to the council"
          ],
          "explain": "Adjective before the head noun; phrase after."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "A",
            "carefully",
            "worded",
            "statement",
            "calmed",
            "the",
            "public"
          ],
          "answer": "A carefully worded statement calmed the public",
          "explain": "Adverb + participle pre-modifier."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "sudden",
            "rise",
            "in",
            "prices",
            "alarmed",
            "shoppers"
          ],
          "answer": "The sudden rise in prices alarmed shoppers",
          "explain": "Pre-modifier + prepositional post-modifier."
        },
        {
          "type": "match",
          "prompt": "Match each phrase to its modifier type.",
          "pairs": [
            {
              "l": "a five-star hotel",
              "r": "compound pre-modifier"
            },
            {
              "l": "the books on the shelf",
              "r": "prepositional post-modifier"
            },
            {
              "l": "the urge to leave",
              "r": "to-infinitive post-modifier"
            }
          ],
          "explain": "Classify how each modifies the noun."
        }
      ]
    },
    "s9_L10_nominalization": {
      "id": "s9_L10_nominalization",
      "code": "G.S9.10",
      "title": "Nominalization for Formal Style",
      "chapter": "Chapter 2 — Complex Noun Phrases, Voice and Academic Style",
      "week": "Week 10 · Academic Register",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.NP.2.2",
      "_ccg": "reconstruct",
      "vocabulary": [
        "abstract noun",
        "suffix",
        "formal",
        "derive",
        "compress",
        "agentless",
        "analysis",
        "decision",
        "increase",
        "register"
      ],
      "explanation": [
        "<b>Nominalization</b> turns a verb or adjective into a noun, letting writers compress a whole clause into a noun phrase and sound more formal and academic: <i>They decided quickly</i> → <i>their quick decision</i>; <i>The economy grew</i> → <i>the growth of the economy</i>.",
        "Common noun suffixes include <i>-tion/-sion</i> (decision, expansion), <i>-ment</i> (development), <i>-ance/-ence</i> (resistance, difference), <i>-al</i> (refusal), <i>-ure</i> (failure), <i>-ity</i> (ability), <i>-th</i> (growth). The noun is often followed by <b>of</b>: <i>the analysis of the data</i>, <i>the failure of the plan</i>. Use nominalization for register, but not so heavily that the agent disappears."
      ],
      "examples": [
        {
          "type": "right",
          "text": "The <em>discovery of</em> antibiotics transformed medicine."
        },
        {
          "type": "right",
          "text": "Her <em>refusal to comply</em> surprised the committee."
        },
        {
          "type": "right",
          "text": "There has been a steady <em>increase in</em> demand."
        },
        {
          "type": "wrong",
          "text": "The develop of the area was rapid."
        },
        {
          "type": "right",
          "text": "The <em>analysis of</em> the data revealed a trend."
        }
      ],
      "mistakes": [
        "<em>the develop of the area</em> → <em>the development of the area</em> — use the noun form.",
        "<em>his arrive was late</em> → <em>his arrival was late</em> — derive the abstract noun.",
        "<em>the decide to leave</em> → <em>the decision to leave</em> — nominalize the verb."
      ],
      "traps": [
        "Learn the suffix families: -tion, -ment, -ance/-ence, -al, -ure, -ity, -th.",
        "Many abstract nouns take <b>of</b>: <em>the rise of nationalism</em>, <em>the loss of trust</em>.",
        "Nominalization can hide who did the action — keep the agent when clarity matters."
      ],
      "arabicInsight": "<b>Nominalization</b> تحويل الفعل أو الصفة إلى اسم ليضغط الكاتب جملة كاملة في عبارة اسمية بأسلوب رسمي وأكاديمي: <i>decide → decision</i>، <i>grow → growth</i>. لواحق شائعة: -tion، -ment، -ance، -al، -ure، -ity، -th. وكثيرًا ما يتبعها <i>of</i>.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the noun form of <em>analyse</em>.",
          "options": [
            "analyse",
            "analysing",
            "analysis",
            "analysed"
          ],
          "answer": 2,
          "explain": "<em>analysis</em> is the noun."
        },
        {
          "type": "mcq",
          "prompt": "Nominalize: <em>The prices rose sharply.</em>",
          "options": [
            "the sharp rise in prices",
            "the prices rise sharp",
            "the rose of prices",
            "prices rising sharp"
          ],
          "answer": 0,
          "explain": "Verb → noun + <em>in</em>: <em>the sharp rise in prices</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence uses nominalization correctly?",
          "options": [
            "The govern of the city improved.",
            "The governance of the city improved.",
            "The governing improved the city of.",
            "Govern the city improved."
          ],
          "answer": 1,
          "explain": "<em>governance</em> is the noun form."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct preposition: <em>the failure ____ the experiment</em>.",
          "options": [
            "of",
            "to",
            "in",
            "for"
          ],
          "answer": 0,
          "explain": "Many abstract nouns take <em>of</em>."
        },
        {
          "type": "fill",
          "prompt": "Write the noun form. (refuse)",
          "sentence": "His ____ to apologise caused tension.",
          "answers": [
            "refusal"
          ],
          "explain": "<em>refuse</em> → <em>refusal</em>."
        },
        {
          "type": "fill",
          "prompt": "Write the noun form. (expand)",
          "sentence": "The ____ of the city changed the coastline.",
          "answers": [
            "expansion"
          ],
          "explain": "<em>expand</em> → <em>expansion</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the preposition.",
          "sentence": "There was a sharp decline ____ attendance.",
          "answers": [
            "in"
          ],
          "explain": "<em>decline in</em> + noun."
        },
        {
          "type": "transform",
          "prompt": "Nominalize: <em>They developed the software rapidly.</em>",
          "answer": [
            "the rapid development of the software",
            "their rapid development of the software"
          ],
          "explain": "Verb → noun (development) + <em>of</em>."
        },
        {
          "type": "transform",
          "prompt": "Nominalize: <em>The plan failed completely.</em>",
          "answer": [
            "the complete failure of the plan",
            "the total failure of the plan"
          ],
          "explain": "<em>fail</em> → <em>failure of</em>."
        },
        {
          "type": "transform",
          "prompt": "Nominalize: <em>She decided to resign.</em>",
          "answer": [
            "her decision to resign",
            "the decision to resign"
          ],
          "explain": "<em>decide</em> → <em>decision to</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the nominalization.",
          "given": "The arrive of the guests was delayed.",
          "answer": [
            "the arrival of the guests was delayed"
          ],
          "explain": "<em>arrive</em> → <em>arrival</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the noun form.",
          "given": "The differ between the two reports is small.",
          "answer": [
            "the difference between the two reports is small"
          ],
          "explain": "<em>differ</em> → <em>difference</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "destruction",
            "of",
            "the",
            "forest",
            "alarmed",
            "scientists"
          ],
          "answer": "The destruction of the forest alarmed scientists",
          "explain": "<em>destroy</em> → <em>destruction of</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Their",
            "resistance",
            "to",
            "change",
            "slowed",
            "reform"
          ],
          "answer": "Their resistance to change slowed reform",
          "explain": "<em>resist</em> → <em>resistance to</em>."
        },
        {
          "type": "match",
          "prompt": "Match each verb/adjective to its noun form.",
          "pairs": [
            {
              "l": "decide",
              "r": "decision"
            },
            {
              "l": "strong",
              "r": "strength"
            },
            {
              "l": "able",
              "r": "ability"
            }
          ],
          "explain": "Each derives a different abstract noun."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the noun form of <em>conclude</em>.",
          "options": [
            "conclude",
            "concluding",
            "conclusion",
            "concluded"
          ],
          "answer": 2,
          "explain": "<em>conclusion</em> is the noun."
        },
        {
          "type": "mcq",
          "prompt": "Nominalize: <em>The team performed brilliantly.</em>",
          "options": [
            "the brilliant performance of the team",
            "the team perform brilliant",
            "the brilliance perform of team",
            "performing brilliant of team"
          ],
          "answer": 0,
          "explain": "Verb → noun + <em>of</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which uses nominalization correctly?",
          "options": [
            "The maintain of the road costs money.",
            "The maintenance of the road costs money.",
            "Maintaining the road of costs.",
            "Maintain of the road costs."
          ],
          "answer": 1,
          "explain": "<em>maintenance</em> is the noun form."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct preposition: <em>a lack ____ resources</em>.",
          "options": [
            "of",
            "to",
            "in",
            "at"
          ],
          "answer": 0,
          "explain": "<em>lack of</em> + noun."
        },
        {
          "type": "fill",
          "prompt": "Write the noun form. (resist)",
          "sentence": "Public ____ to the tax grew.",
          "answers": [
            "resistance"
          ],
          "explain": "<em>resist</em> → <em>resistance</em>."
        },
        {
          "type": "fill",
          "prompt": "Write the noun form. (proud)",
          "sentence": "She spoke with great ____ of her students.",
          "answers": [
            "pride"
          ],
          "explain": "<em>proud</em> → <em>pride</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the preposition.",
          "sentence": "There was a rise ____ unemployment.",
          "answers": [
            "in"
          ],
          "explain": "<em>rise in</em> + noun."
        },
        {
          "type": "transform",
          "prompt": "Nominalize: <em>The volcano erupted violently.</em>",
          "answer": [
            "the violent eruption of the volcano"
          ],
          "explain": "<em>erupt</em> → <em>eruption of</em>."
        },
        {
          "type": "transform",
          "prompt": "Nominalize: <em>They expanded the network quickly.</em>",
          "answer": [
            "the quick expansion of the network",
            "the rapid expansion of the network"
          ],
          "explain": "<em>expand</em> → <em>expansion of</em>."
        },
        {
          "type": "transform",
          "prompt": "Nominalize: <em>He arrived late.</em>",
          "answer": [
            "his late arrival",
            "the late arrival"
          ],
          "explain": "<em>arrive</em> → <em>arrival</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the nominalization.",
          "given": "The grow of the company surprised investors.",
          "answer": [
            "the growth of the company surprised investors"
          ],
          "explain": "<em>grow</em> → <em>growth</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the noun form.",
          "given": "The decide to close the plant was unpopular.",
          "answer": [
            "the decision to close the plant was unpopular"
          ],
          "explain": "<em>decide</em> → <em>decision</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "introduction",
            "of",
            "new",
            "rules",
            "caused",
            "confusion"
          ],
          "answer": "The introduction of new rules caused confusion",
          "explain": "<em>introduce</em> → <em>introduction of</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Her",
            "insistence",
            "on",
            "accuracy",
            "improved",
            "the",
            "work"
          ],
          "answer": "Her insistence on accuracy improved the work",
          "explain": "<em>insist</em> → <em>insistence on</em>."
        },
        {
          "type": "match",
          "prompt": "Match each base word to its noun form.",
          "pairs": [
            {
              "l": "analyse",
              "r": "analysis"
            },
            {
              "l": "fail",
              "r": "failure"
            },
            {
              "l": "warm",
              "r": "warmth"
            }
          ],
          "explain": "Each derives a distinct abstract noun."
        }
      ]
    },
    "s9_L11_participleClauses": {
      "id": "s9_L11_participleClauses",
      "code": "G.S9.11",
      "title": "Participle Clauses",
      "chapter": "Chapter 2 — Complex Noun Phrases, Voice and Academic Style",
      "week": "Week 11 · Economy and Style",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.CL.2.3",
      "_ccg": "reconstruct",
      "vocabulary": [
        "participle",
        "reduce",
        "simultaneous",
        "prior",
        "dangling",
        "passive",
        "subject",
        "economy",
        "clause",
        "modify"
      ],
      "explanation": [
        "A <b>participle clause</b> replaces a fuller clause to write more economically. The <b>present participle</b> (-ing) shows an active, simultaneous action or a reason: <i>Feeling tired, she left</i> (= because she felt tired). The <b>past participle</b> (-ed/-en) carries a passive meaning: <i>Written in haste, the essay had errors</i> (= which was written). The <b>perfect participle</b> (having + past participle) marks an earlier action: <i>Having finished, we left</i>.",
        "The hidden subject of the participle must be the <b>same</b> as the subject of the main clause; otherwise the participle <b>dangles</b>: ✗ <i>Walking home, the rain started</i>. Make a negative with <i>not</i> before the participle: <i>Not knowing the way, we asked</i>."
      ],
      "examples": [
        {
          "type": "right",
          "text": "<em>Walking</em> home, I met an old friend."
        },
        {
          "type": "right",
          "text": "<em>Having submitted</em> the form, she relaxed."
        },
        {
          "type": "right",
          "text": "<em>Written</em> in haste, the essay had errors."
        },
        {
          "type": "wrong",
          "text": "Walking home, the rain started to fall."
        },
        {
          "type": "right",
          "text": "<em>Not knowing</em> the answer, we asked the teacher."
        }
      ],
      "mistakes": [
        "<em>Driving fast, the deer appeared.</em> → <em>Driving fast, I saw a deer appear.</em> — avoid a dangling participle; the subject must match.",
        "<em>Having finished the test, the papers were collected.</em> → <em>Having finished the test, the students handed in their papers.</em> — match the subject.",
        "<em>Knowing not the way</em> → <em>Not knowing the way</em> — put <b>not</b> before the participle."
      ],
      "traps": [
        "Present participle = active/simultaneous/reason; past participle = passive; <b>having + past participle</b> = earlier action.",
        "The understood subject of the participle must be the main-clause subject (no dangling).",
        "Negate with <em>not</em> before the participle."
      ],
      "arabicInsight": "جملة اسم الفاعل/المفعول (participle clause) تختصر جملة أطول: <i>-ing</i> للفعل النشط المتزامن أو السبب، والتصريف الثالث للمعنى المبني للمجهول، و<i>having + pp</i> لفعل أسبق. يجب أن يكون فاعل الـparticiple هو نفسه فاعل الجملة الرئيسية وإلا أصبح معلّقًا (dangling). النفي بـ<i>not</i> قبل الـparticiple.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Reduce: <em>Because she felt nervous, she paused.</em>",
          "options": [
            "Feeling nervous, she paused.",
            "Felt nervous, she paused.",
            "Having felt nervous, the pause came.",
            "Feeling nervous, the pause was taken."
          ],
          "answer": 0,
          "explain": "Present participle for reason; subject matches."
        },
        {
          "type": "mcq",
          "prompt": "Which is a correct perfect participle clause?",
          "options": [
            "Finishing the report, she sent it.",
            "Having finished the report, she sent it.",
            "Having finish the report, she sent it.",
            "Finished having the report, she sent it."
          ],
          "answer": 1,
          "explain": "<em>Having + past participle</em> = earlier action."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence has a dangling participle?",
          "options": [
            "Looking out, I saw the sea.",
            "Looking out, the sea was calm.",
            "Looking out, we admired the view.",
            "Looking out, she smiled."
          ],
          "answer": 1,
          "explain": "The sea wasn't looking out — the subject doesn't match."
        },
        {
          "type": "mcq",
          "prompt": "Choose the passive participle clause.",
          "options": [
            "Building in 1920, the bridge still stands.",
            "Built in 1920, the bridge still stands.",
            "Build in 1920, the bridge still stands.",
            "Having build in 1920, the bridge stands."
          ],
          "answer": 1,
          "explain": "Past participle = passive: <em>Built in 1920 …</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the present participle. (live)",
          "sentence": "____ abroad, he learned three languages.",
          "answers": [
            "Living"
          ],
          "explain": "Present participle for a simultaneous situation."
        },
        {
          "type": "fill",
          "prompt": "Add the perfect participle word. (have)",
          "sentence": "____ finished early, they went home.",
          "answers": [
            "Having"
          ],
          "explain": "<em>Having finished</em> = earlier action."
        },
        {
          "type": "fill",
          "prompt": "Add the past participle. (damage)",
          "sentence": "____ by the storm, the roof needed repair. (damage)",
          "answers": [
            "Damaged"
          ],
          "explain": "Past participle = passive: <em>Damaged by …</em>."
        },
        {
          "type": "transform",
          "prompt": "Reduce using a participle: <em>As I walked through the market, I noticed the stalls.</em>",
          "answer": [
            "walking through the market i noticed the stalls"
          ],
          "explain": "Present participle for a simultaneous action."
        },
        {
          "type": "transform",
          "prompt": "Reduce using a perfect participle: <em>After she had locked the door, she left.</em>",
          "answer": [
            "having locked the door she left"
          ],
          "explain": "<em>Having + past participle</em> for the earlier action."
        },
        {
          "type": "transform",
          "prompt": "Reduce using a past participle: <em>The letter, which was written in French, puzzled them.</em>",
          "answer": [
            "written in french the letter puzzled them"
          ],
          "explain": "Past participle = passive reduced clause."
        },
        {
          "type": "error",
          "prompt": "Correct the dangling participle.",
          "given": "Running for the bus, my bag fell open.",
          "answer": [
            "running for the bus i dropped my bag",
            "while i was running for the bus my bag fell open"
          ],
          "explain": "The subject of the participle must match the main clause."
        },
        {
          "type": "error",
          "prompt": "Fix the negative form.",
          "given": "Knowing not the rules, she made mistakes.",
          "answer": [
            "not knowing the rules she made mistakes"
          ],
          "explain": "Put <em>not</em> before the participle."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a participle clause sentence.",
          "bank": [
            "Having",
            "read",
            "the",
            "memo",
            "he",
            "replied",
            "at",
            "once"
          ],
          "answer": "Having read the memo he replied at once",
          "explain": "<em>Having read</em> = earlier action."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a participle clause sentence.",
          "bank": [
            "Surrounded",
            "by",
            "noise",
            "she",
            "could",
            "not",
            "focus"
          ],
          "answer": "Surrounded by noise she could not focus",
          "explain": "Past participle = passive opener."
        },
        {
          "type": "match",
          "prompt": "Match each participle type to its meaning.",
          "pairs": [
            {
              "l": "Feeling ill",
              "r": "active reason (present participle)"
            },
            {
              "l": "Having eaten",
              "r": "earlier action (perfect participle)"
            },
            {
              "l": "Built last year",
              "r": "passive (past participle)"
            }
          ],
          "explain": "Each form carries a distinct time/voice relationship."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Reduce: <em>Because he was injured, he left the field.</em>",
          "options": [
            "Injured, he left the field.",
            "Injuring, he left the field.",
            "Having injure, he left the field.",
            "Injured, the field was left."
          ],
          "answer": 0,
          "explain": "Past participle = passive reason."
        },
        {
          "type": "mcq",
          "prompt": "Which is a correct perfect participle clause?",
          "options": [
            "Solving the puzzle, she smiled later.",
            "Having solved the puzzle, she smiled.",
            "Having solve the puzzle, she smiled.",
            "Solved having the puzzle, she smiled."
          ],
          "answer": 1,
          "explain": "<em>Having + past participle</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence has a dangling participle?",
          "options": [
            "Arriving late, we apologised.",
            "Arriving late, the meeting had begun.",
            "Arriving late, I missed the start.",
            "Arriving late, she slipped in quietly."
          ],
          "answer": 1,
          "explain": "The meeting wasn't arriving — subject mismatch."
        },
        {
          "type": "mcq",
          "prompt": "Choose the active simultaneous clause.",
          "options": [
            "Carried the bags, he climbed the stairs.",
            "Carrying the bags, he climbed the stairs.",
            "Carry the bags, he climbed the stairs.",
            "Having carry the bags, he climbed."
          ],
          "answer": 1,
          "explain": "Present participle for a simultaneous action."
        },
        {
          "type": "fill",
          "prompt": "Add the present participle. (use)",
          "sentence": "____ a torch, they explored the cave.",
          "answers": [
            "Using"
          ],
          "explain": "Present participle for a simultaneous action."
        },
        {
          "type": "fill",
          "prompt": "Add the perfect participle word.",
          "sentence": "____ saved the file, she shut the laptop.",
          "answers": [
            "Having"
          ],
          "explain": "<em>Having saved</em> = earlier action."
        },
        {
          "type": "fill",
          "prompt": "Add the past participle. (write)",
          "sentence": "____ in plain English, the guide was easy to follow.",
          "answers": [
            "Written"
          ],
          "explain": "Past participle = passive."
        },
        {
          "type": "transform",
          "prompt": "Reduce using a participle: <em>While she was waiting, she read a book.</em>",
          "answer": [
            "waiting she read a book",
            "while waiting she read a book"
          ],
          "explain": "Present participle for a simultaneous action."
        },
        {
          "type": "transform",
          "prompt": "Reduce using a perfect participle: <em>After they had signed the deal, they celebrated.</em>",
          "answer": [
            "having signed the deal they celebrated"
          ],
          "explain": "<em>Having + past participle</em>."
        },
        {
          "type": "transform",
          "prompt": "Reduce using a past participle: <em>The car, which was repaired yesterday, runs well.</em>",
          "answer": [
            "repaired yesterday the car runs well"
          ],
          "explain": "Past participle = passive reduced clause."
        },
        {
          "type": "error",
          "prompt": "Correct the dangling participle.",
          "given": "Reading the email, the printer jammed.",
          "answer": [
            "while i was reading the email the printer jammed",
            "reading the email i noticed the printer had jammed"
          ],
          "explain": "Match the participle's subject to the main clause."
        },
        {
          "type": "error",
          "prompt": "Fix the negative form.",
          "given": "Having not slept, he felt exhausted.",
          "answer": [
            "not having slept he felt exhausted"
          ],
          "explain": "Place <em>not</em> before the participle phrase."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a participle clause sentence.",
          "bank": [
            "Encouraged",
            "by",
            "the",
            "results",
            "they",
            "continued",
            "the",
            "trial"
          ],
          "answer": "Encouraged by the results they continued the trial",
          "explain": "Past participle = passive opener."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a participle clause sentence.",
          "bank": [
            "Having",
            "missed",
            "the",
            "train",
            "we",
            "took",
            "a",
            "taxi"
          ],
          "answer": "Having missed the train we took a taxi",
          "explain": "<em>Having missed</em> = earlier action."
        },
        {
          "type": "match",
          "prompt": "Match each opener to its function.",
          "pairs": [
            {
              "l": "Hearing the news",
              "r": "simultaneous reason"
            },
            {
              "l": "Having arrived",
              "r": "earlier action"
            },
            {
              "l": "Painted blue",
              "r": "passive description"
            }
          ],
          "explain": "Identify the time and voice each participle signals."
        }
      ]
    },
    "s9_L12_reducedRelatives": {
      "id": "s9_L12_reducedRelatives",
      "code": "G.S9.12",
      "title": "Reduced and Precise Relative Clauses",
      "chapter": "Chapter 2 — Complex Noun Phrases, Voice and Academic Style",
      "week": "Week 12 · Defining with Precision",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.CL.2.4",
      "_ccg": "reconstruct",
      "vocabulary": [
        "defining",
        "non-defining",
        "reduce",
        "whose",
        "of which",
        "preposition",
        "quantifier",
        "relative",
        "comma",
        "precise"
      ],
      "explanation": [
        "A <b>defining relative clause</b> identifies the noun and takes no commas; it can often be <b>reduced</b> to a participle phrase: <i>the people who are waiting</i> → <i>the people waiting</i>; <i>the books that were donated</i> → <i>the books donated</i>. A <b>non-defining clause</b> adds extra information, is set off by commas, and <b>cannot use that</b>: <i>The novel, which won the prize, sold out</i>.",
        "For precision and formality, use <b>whose</b> (possession), <b>preposition + which/whom</b> (<i>the method by which …</i>, <i>colleagues with whom I work</i>), and <b>quantifier + of which/whom</b> (<i>three brothers, all of whom are teachers</i>)."
      ],
      "examples": [
        {
          "type": "right",
          "text": "The passengers <em>waiting</em> at gate 5 boarded first."
        },
        {
          "type": "right",
          "text": "The novel, <em>which</em> won the prize, sold out."
        },
        {
          "type": "right",
          "text": "She has three brothers, <em>all of whom</em> are teachers."
        },
        {
          "type": "wrong",
          "text": "The man which lives next door is a doctor."
        },
        {
          "type": "right",
          "text": "the method <em>by which</em> the results were obtained"
        }
      ],
      "mistakes": [
        "<em>the report who was published</em> → <em>the report which/that was published</em> — use <b>which/that</b> for things.",
        "<em>students which study hard</em> → <em>students who study hard</em> — use <b>who</b> for people.",
        "<em>the house, that I grew up in,</em> → <em>the house, which I grew up in,</em> — non-defining clauses cannot use <b>that</b>."
      ],
      "traps": [
        "Defining: no commas; that/who/which; often reducible to a participle.",
        "Non-defining: commas; never <em>that</em>; adds extra detail.",
        "Formal precision: <em>preposition + which/whom</em>, and <em>quantifier + of whom/which</em>."
      ],
      "arabicInsight": "جملة الوصل المُعرِّفة (defining) تُعرّف الاسم ولا تأخذ فواصل ويمكن اختصارها إلى participle. أما غير المُعرِّفة (non-defining) فتضيف معلومة إضافية وتُحاط بفواصل ولا تستخدم <i>that</i>. للدقة والرسمية: <i>whose</i>، <i>preposition + which/whom</i>، و<i>quantifier + of which/whom</i>.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Reduce: <em>the documents that were signed yesterday</em>",
          "options": [
            "the documents signing yesterday",
            "the documents signed yesterday",
            "the documents which signed yesterday",
            "the documents to sign yesterday"
          ],
          "answer": 1,
          "explain": "Passive reduction → past participle."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct relative word.",
          "options": [
            "The scientist which led the team retired.",
            "The scientist who led the team retired.",
            "The scientist whom led the team retired.",
            "The scientist what led the team retired."
          ],
          "answer": 1,
          "explain": "Person as subject → <em>who</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which non-defining clause is correct?",
          "options": [
            "My phone that is new keeps freezing.",
            "My phone, that is new, keeps freezing.",
            "My phone, which is new, keeps freezing.",
            "My phone which is new, keeps freezing."
          ],
          "answer": 2,
          "explain": "Non-defining → commas + <em>which</em>, not <em>that</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the formal structure.",
          "options": [
            "the colleague who I work with",
            "the colleague with whom I work",
            "the colleague with who I work",
            "the colleague whom I work for"
          ],
          "answer": 1,
          "explain": "<em>preposition + whom</em> in formal style."
        },
        {
          "type": "fill",
          "prompt": "Add the relative word (possession).",
          "sentence": "The author ____ book won the prize spoke last.",
          "answers": [
            "whose"
          ],
          "explain": "<em>whose</em> shows possession."
        },
        {
          "type": "fill",
          "prompt": "Reduce to a participle. (wait)",
          "sentence": "The candidates ____ outside were called in. (wait)",
          "answers": [
            "waiting"
          ],
          "explain": "Active reduction → present participle."
        },
        {
          "type": "fill",
          "prompt": "Complete: <em>students, many ____ whom passed</em>.",
          "sentence": "Many of them passed: students, many ____ whom passed with distinction.",
          "answers": [
            "of"
          ],
          "explain": "<em>quantifier + of whom</em>."
        },
        {
          "type": "transform",
          "prompt": "Reduce the relative clause: <em>The parcels that were delivered today are heavy.</em>",
          "answer": [
            "the parcels delivered today are heavy"
          ],
          "explain": "Past participle reduction."
        },
        {
          "type": "transform",
          "prompt": "Combine with a non-defining clause: <em>Cairo is huge. It is the capital of Egypt.</em>",
          "answer": [
            "cairo which is the capital of egypt is huge"
          ],
          "explain": "Add extra info with commas + <em>which</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite formally with <em>preposition + which</em>: <em>the tool that we measured it with</em>",
          "answer": [
            "the tool with which we measured it"
          ],
          "explain": "Move the preposition before <em>which</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the relative word.",
          "given": "The building who collapsed was very old.",
          "answer": [
            "the building which collapsed was very old",
            "the building that collapsed was very old"
          ],
          "explain": "Things take <em>which/that</em>, not <em>who</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the non-defining clause.",
          "given": "My teacher, that lives nearby, is retiring.",
          "answer": [
            "my teacher who lives nearby is retiring",
            "my teacher, who lives nearby, is retiring"
          ],
          "explain": "Non-defining clauses use <em>who</em>, not <em>that</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "report",
            "submitted",
            "last",
            "week",
            "was",
            "approved"
          ],
          "answer": "The report submitted last week was approved",
          "explain": "Reduced relative (past participle)."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "has",
            "two",
            "sons",
            "both",
            "of",
            "whom",
            "study",
            "abroad"
          ],
          "answer": "She has two sons both of whom study abroad",
          "explain": "<em>quantifier + of whom</em>."
        },
        {
          "type": "match",
          "prompt": "Match each clause type to a feature.",
          "pairs": [
            {
              "l": "defining relative",
              "r": "no commas; can use that"
            },
            {
              "l": "non-defining relative",
              "r": "commas; never that"
            },
            {
              "l": "reduced relative",
              "r": "participle, no relative pronoun"
            }
          ],
          "explain": "Each relative structure has a defining feature."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Reduce: <em>the people who are standing in line</em>",
          "options": [
            "the people stood in line",
            "the people standing in line",
            "the people which standing in line",
            "the people to stand in line"
          ],
          "answer": 1,
          "explain": "Active reduction → present participle."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct relative word.",
          "options": [
            "The bridge who connects the towns is closed.",
            "The bridge which connects the towns is closed.",
            "The bridge whom connects the towns is closed.",
            "The bridge what connects the towns is closed."
          ],
          "answer": 1,
          "explain": "Things → <em>which/that</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which non-defining clause is correct?",
          "options": [
            "Our manager that started in May resigned.",
            "Our manager, that started in May, resigned.",
            "Our manager, who started in May, resigned.",
            "Our manager who started in May, resigned."
          ],
          "answer": 2,
          "explain": "Non-defining → commas + <em>who</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the formal structure.",
          "options": [
            "the issue which I referred to",
            "the issue to which I referred",
            "the issue to that I referred",
            "the issue I referred to which"
          ],
          "answer": 1,
          "explain": "<em>preposition + which</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the relative word (possession).",
          "sentence": "The company ____ profits fell announced cuts.",
          "answers": [
            "whose"
          ],
          "explain": "<em>whose</em> shows possession."
        },
        {
          "type": "fill",
          "prompt": "Reduce to a participle. (donate)",
          "sentence": "The funds ____ last year built the clinic. (donate)",
          "answers": [
            "donated"
          ],
          "explain": "Passive reduction → past participle."
        },
        {
          "type": "fill",
          "prompt": "Complete: <em>guests, none ____ whom complained</em>.",
          "sentence": "None complained: guests, none ____ whom complained.",
          "answers": [
            "of"
          ],
          "explain": "<em>quantifier + of whom</em>."
        },
        {
          "type": "transform",
          "prompt": "Reduce the relative clause: <em>The students who are taking the exam must be silent.</em>",
          "answer": [
            "the students taking the exam must be silent"
          ],
          "explain": "Present participle reduction."
        },
        {
          "type": "transform",
          "prompt": "Combine with a non-defining clause: <em>The Nile is very long. It flows north.</em>",
          "answer": [
            "the nile which flows north is very long"
          ],
          "explain": "Extra info with commas + <em>which</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite formally with <em>preposition + whom</em>: <em>the expert that we spoke to</em>",
          "answer": [
            "the expert to whom we spoke"
          ],
          "explain": "Move the preposition before <em>whom</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the relative word.",
          "given": "The volunteers which cleaned the park were thanked.",
          "answer": [
            "the volunteers who cleaned the park were thanked"
          ],
          "explain": "People → <em>who</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the non-defining clause.",
          "given": "Paris, that I visited last year, is beautiful.",
          "answer": [
            "paris which i visited last year is beautiful",
            "paris, which i visited last year, is beautiful"
          ],
          "explain": "Non-defining clauses use <em>which</em>, not <em>that</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "houses",
            "built",
            "near",
            "the",
            "river",
            "flooded"
          ],
          "answer": "The houses built near the river flooded",
          "explain": "Reduced relative (past participle)."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "He",
            "met",
            "three",
            "experts",
            "all",
            "of",
            "whom",
            "agreed"
          ],
          "answer": "He met three experts all of whom agreed",
          "explain": "<em>quantifier + of whom</em>."
        },
        {
          "type": "match",
          "prompt": "Match each example to its category.",
          "pairs": [
            {
              "l": "the car parked outside",
              "r": "reduced relative"
            },
            {
              "l": "Tokyo, which is busy,",
              "r": "non-defining"
            },
            {
              "l": "the film that won",
              "r": "defining"
            }
          ],
          "explain": "Classify each relative structure."
        }
      ]
    },
    "s9_L13_reportingPassive": {
      "id": "s9_L13_reportingPassive",
      "code": "G.S9.13",
      "title": "Reporting Passives and Causatives",
      "chapter": "Chapter 2 — Complex Noun Phrases, Voice and Academic Style",
      "week": "Week 13 · Objectivity and Attribution",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.VF.2.5",
      "_ccg": "reconstruct",
      "vocabulary": [
        "impersonal",
        "attribute",
        "objective",
        "causative",
        "claim",
        "report",
        "believe",
        "passive infinitive",
        "agent",
        "distance"
      ],
      "explanation": [
        "The <b>reporting passive</b> attributes a claim impersonally, common in news and academic writing. Two patterns: <i>It + be + reported verb + that …</i> (<i>It is believed that the painting is genuine</i>) and <i>Subject + be + reported verb + to-infinitive</i> (<i>The painting is believed to be genuine</i>). For an earlier action, use <i>to have + past participle</i>: <i>He is thought to have left</i>.",
        "The <b>causative</b> <i>have/get + object + past participle</i> shows that someone arranged for a service: <i>We had the roof repaired</i>; <i>She got her hair cut</i>. Note also passive infinitives and gerunds: <i>wants to be told</i>, <i>hates being interrupted</i>."
      ],
      "examples": [
        {
          "type": "right",
          "text": "<em>It is believed that</em> the manuscript is ancient."
        },
        {
          "type": "right",
          "text": "The minister <em>is thought to have resigned</em>."
        },
        {
          "type": "right",
          "text": "We <em>had the roof repaired</em> last week."
        },
        {
          "type": "wrong",
          "text": "He is said that he is wealthy."
        },
        {
          "type": "right",
          "text": "She dislikes <em>being kept</em> waiting."
        }
      ],
      "mistakes": [
        "<em>He is said that he is honest.</em> → <em>He is said to be honest.</em> (or <em>It is said that he is honest.</em>) — don't mix the two patterns.",
        "<em>I cut my hair at the salon.</em> → <em>I had my hair cut at the salon.</em> — use the causative when someone does it for you.",
        "<em>It was reported the storm caused damage.</em> → <em>It was reported that the storm caused damage.</em> — keep <b>that</b> in the impersonal pattern."
      ],
      "traps": [
        "Pattern A: <em>It + be + Vpp + that …</em>; Pattern B: <em>Subject + be + Vpp + to-infinitive</em>.",
        "Earlier action → <em>to have + past participle</em>: <em>is believed to have increased</em>.",
        "Causative: <em>have/get + object + past participle</em> (someone else performs the action)."
      ],
      "arabicInsight": "المبني للمجهول التقريري ينسب الادعاء بصيغة غير شخصية: <i>It + be + فعل تقرير + that</i> أو <i>Subject + be + فعل تقرير + to-infinitive</i>. للحدث الأسبق: <i>to have + pp</i>. والسببي (causative) <i>have/get + مفعول + pp</i> يدل على أن شخصًا آخر قام بالفعل: <i>We had the roof repaired</i>.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct reporting passive.",
          "options": [
            "It is said that the bridge is unsafe.",
            "It is said the bridge to be unsafe.",
            "The bridge is said that unsafe.",
            "Is said it the bridge unsafe."
          ],
          "answer": 0,
          "explain": "Pattern A: <em>It is said that …</em>."
        },
        {
          "type": "mcq",
          "prompt": "Rewrite with pattern B: <em>People believe she is talented.</em>",
          "options": [
            "She is believed that talented.",
            "She is believed to be talented.",
            "It is believed she to be talented.",
            "She believes to be talented."
          ],
          "answer": 1,
          "explain": "<em>Subject + be + Vpp + to be</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which shows an earlier action?",
          "options": [
            "He is thought to leave.",
            "He is thought to have left.",
            "He is thought leaving.",
            "He is thought that left."
          ],
          "answer": 1,
          "explain": "<em>to have + past participle</em> = earlier action."
        },
        {
          "type": "mcq",
          "prompt": "Choose the causative.",
          "options": [
            "We repaired the car ourselves yesterday.",
            "We had the car repaired yesterday.",
            "We had repaired the car by us.",
            "We had the car repair yesterday."
          ],
          "answer": 1,
          "explain": "<em>have + object + past participle</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete pattern A.",
          "sentence": "It ____ believed that prices will fall.",
          "answers": [
            "is"
          ],
          "explain": "<em>It is believed that …</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the causative.",
          "sentence": "She ____ her photo taken for the badge. (get, past)",
          "answers": [
            "got"
          ],
          "explain": "<em>get + object + past participle</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the passive gerund.",
          "sentence": "He hates ____ interrupted during class. (be)",
          "answers": [
            "being"
          ],
          "explain": "Passive gerund: <em>being interrupted</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with pattern A: <em>People say the company is struggling.</em>",
          "answer": [
            "it is said that the company is struggling"
          ],
          "explain": "<em>It is said that …</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with pattern B: <em>Experts expect prices to rise.</em>",
          "answer": [
            "prices are expected to rise"
          ],
          "explain": "<em>Subject + be + expected + to-infinitive</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a causative: <em>A mechanic serviced our car.</em>",
          "answer": [
            "we had our car serviced",
            "we had the car serviced"
          ],
          "explain": "<em>have + object + past participle</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the reporting passive.",
          "given": "She is said that she works abroad.",
          "answer": [
            "she is said to work abroad",
            "it is said that she works abroad"
          ],
          "explain": "Use one pattern, not a mix."
        },
        {
          "type": "error",
          "prompt": "Fix the causative.",
          "given": "I had cut my hair at the new salon.",
          "answer": [
            "i had my hair cut at the new salon"
          ],
          "explain": "<em>have + object + past participle</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a reporting passive.",
          "bank": [
            "The",
            "painting",
            "is",
            "believed",
            "to",
            "be",
            "genuine"
          ],
          "answer": "The painting is believed to be genuine",
          "explain": "Pattern B with <em>to be</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a causative sentence.",
          "bank": [
            "They",
            "had",
            "the",
            "documents",
            "translated",
            "quickly"
          ],
          "answer": "They had the documents translated quickly",
          "explain": "<em>have + object + past participle</em>."
        },
        {
          "type": "match",
          "prompt": "Match each structure to its use.",
          "pairs": [
            {
              "l": "It is believed that …",
              "r": "impersonal report (pattern A)"
            },
            {
              "l": "is thought to have left",
              "r": "earlier reported action"
            },
            {
              "l": "had the roof repaired",
              "r": "causative service"
            }
          ],
          "explain": "Each conveys attribution or arranged action differently."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct reporting passive.",
          "options": [
            "It is reported that talks have failed.",
            "It is reported the talks to fail.",
            "The talks are reported that failed.",
            "Is reported it the talks failed."
          ],
          "answer": 0,
          "explain": "Pattern A: <em>It is reported that …</em>."
        },
        {
          "type": "mcq",
          "prompt": "Rewrite with pattern B: <em>They consider him the best candidate.</em>",
          "options": [
            "He is considered that the best.",
            "He is considered to be the best candidate.",
            "It is considered him the best.",
            "He considers to be the best."
          ],
          "answer": 1,
          "explain": "<em>Subject + be + considered + to be</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which shows an earlier action?",
          "options": [
            "The company is said to make a loss.",
            "The company is said to have made a loss.",
            "The company is said making a loss.",
            "The company is said that made a loss."
          ],
          "answer": 1,
          "explain": "<em>to have + past participle</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the causative.",
          "options": [
            "He fixed the laptop himself last night.",
            "He had the laptop fixed last night.",
            "He had fixed the laptop by them.",
            "He had the laptop fix last night."
          ],
          "answer": 1,
          "explain": "<em>have + object + past participle</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete pattern A.",
          "sentence": "It ____ thought that the species is extinct.",
          "answers": [
            "is"
          ],
          "explain": "<em>It is thought that …</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the causative.",
          "sentence": "We ____ the house painted last summer. (have, past)",
          "answers": [
            "had"
          ],
          "explain": "<em>have + object + past participle</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the passive infinitive.",
          "sentence": "Everyone wants ____ be heard. (to)",
          "answers": [
            "to"
          ],
          "explain": "Passive infinitive: <em>to be heard</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with pattern A: <em>People believe the tomb is untouched.</em>",
          "answer": [
            "it is believed that the tomb is untouched"
          ],
          "explain": "<em>It is believed that …</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with pattern B: <em>Historians claim the city was wealthy.</em>",
          "answer": [
            "the city is claimed to have been wealthy"
          ],
          "explain": "Earlier action → <em>to have been</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a causative: <em>A tailor altered her dress.</em>",
          "answer": [
            "she had her dress altered",
            "she got her dress altered"
          ],
          "explain": "<em>have/get + object + past participle</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the reporting passive.",
          "given": "He is reported that he donated millions.",
          "answer": [
            "he is reported to have donated millions",
            "it is reported that he donated millions"
          ],
          "explain": "Don't mix the two patterns."
        },
        {
          "type": "error",
          "prompt": "Fix the causative.",
          "given": "They had repaired the road by the council.",
          "answer": [
            "they had the road repaired by the council"
          ],
          "explain": "<em>have + object + past participle</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a reporting passive.",
          "bank": [
            "The",
            "ruins",
            "are",
            "thought",
            "to",
            "date",
            "from",
            "1200"
          ],
          "answer": "The ruins are thought to date from 1200",
          "explain": "Pattern B with a to-infinitive."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a causative sentence.",
          "bank": [
            "She",
            "got",
            "her",
            "watch",
            "repaired",
            "downtown"
          ],
          "answer": "She got her watch repaired downtown",
          "explain": "<em>get + object + past participle</em>."
        },
        {
          "type": "match",
          "prompt": "Match each form to its meaning.",
          "pairs": [
            {
              "l": "is expected to rise",
              "r": "predicted future (pattern B)"
            },
            {
              "l": "It is alleged that …",
              "r": "unproven impersonal claim"
            },
            {
              "l": "got the car washed",
              "r": "causative service"
            }
          ],
          "explain": "Each attributes or arranges an action."
        }
      ]
    },
    "s9_L14_frontingEmphasis": {
      "id": "s9_L14_frontingEmphasis",
      "code": "G.S9.14",
      "title": "Fronting and Emphatic <em>Do</em>",
      "chapter": "Chapter 2 — Complex Noun Phrases, Voice and Academic Style",
      "week": "Week 14 · Emphasis and Rhetoric",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.SS.2.6",
      "_ccg": "reconstruct",
      "vocabulary": [
        "fronting",
        "emphasis",
        "emphatic",
        "locative",
        "inversion",
        "contrast",
        "cohesion",
        "rhetoric",
        "stress",
        "prominence"
      ],
      "explanation": [
        "<b>Fronting</b> moves a complement or adverbial to the start of a clause for emphasis, contrast or cohesion: <i>That mistake I will never repeat</i>; <i>Most of all, I value honesty</i>. With place or direction adverbials and a full noun subject, fronting can trigger <b>inversion</b> of the verb: <i>Into the room rushed the children</i>; <i>On the hill stood a castle</i>.",
        "<b>Emphatic do/does/did</b> adds stress to an affirmative verb when there is no other auxiliary: <i>I do believe you</i>; <i>She did finish on time</i>. The verb after <i>do</i> stays in the <b>base form</b>, and you never add <i>do</i> when a modal or other auxiliary is already present."
      ],
      "examples": [
        {
          "type": "right",
          "text": "<em>That promise</em> she always keeps."
        },
        {
          "type": "right",
          "text": "<em>Into the hall</em> marched the band."
        },
        {
          "type": "right",
          "text": "I <em>do</em> appreciate your patience."
        },
        {
          "type": "wrong",
          "text": "She did finished the project early."
        },
        {
          "type": "right",
          "text": "<em>On the table</em> lay an unopened letter."
        }
      ],
      "mistakes": [
        "<em>She did finished it.</em> → <em>She did finish it.</em> — the verb after <b>did</b> is the base form.",
        "<em>I do can swim.</em> → <em>I can swim.</em> — don't add <b>do</b> when a modal is already there.",
        "<em>On the table a letter was lying.</em> → <em>On the table lay a letter.</em> — locative fronting inverts with a verb of position."
      ],
      "traps": [
        "Front an object/complement for contrast or cohesion: <em>His advice I followed; hers I ignored</em>.",
        "Locative/directional fronting can invert the verb with a full noun subject (not a pronoun).",
        "Emphatic <em>do/does/did</em> + base verb, only when no other auxiliary is present."
      ],
      "arabicInsight": "<b>Fronting</b> تقديم مكمّل أو ظرف إلى بداية الجملة للتوكيد أو التباين أو الترابط: <i>That mistake I will never repeat</i>. ومع ظروف المكان/الاتجاه وفاعل اسمي كامل قد يحدث قلب: <i>Into the room rushed the children</i>. و<b>emphatic do/does/did</b> + الفعل المجرد للتوكيد حين لا يوجد فعل مساعد آخر.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct emphatic form.",
          "options": [
            "I do believe in second chances.",
            "I do believing in second chances.",
            "I do believed in second chances.",
            "I am do believe in second chances."
          ],
          "answer": 0,
          "explain": "<em>do</em> + base verb for emphasis."
        },
        {
          "type": "mcq",
          "prompt": "Which fronted sentence inverts correctly?",
          "options": [
            "Down the street a parade came.",
            "Down the street came a parade.",
            "Down the street came it.",
            "Came a parade down the street."
          ],
          "answer": 1,
          "explain": "Locative fronting + inversion with a full noun subject."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct emphatic past.",
          "options": [
            "She did passed the test.",
            "She did pass the test.",
            "She did passing the test.",
            "She does passed the test."
          ],
          "answer": 1,
          "explain": "<em>did</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Which uses fronting for contrast?",
          "options": [
            "I like the first plan.",
            "The first plan I like; the second I reject.",
            "I reject the second plan only.",
            "Both plans I am liking."
          ],
          "answer": 1,
          "explain": "Front the objects to contrast them."
        },
        {
          "type": "fill",
          "prompt": "Add the emphatic auxiliary (present).",
          "sentence": "They ____ enjoy the lessons, despite the workload.",
          "answers": [
            "do"
          ],
          "explain": "Emphatic <em>do</em> + base verb."
        },
        {
          "type": "fill",
          "prompt": "Add the emphatic auxiliary (past).",
          "sentence": "He ____ apologise, though rather late.",
          "answers": [
            "did"
          ],
          "explain": "Emphatic <em>did</em> + base verb."
        },
        {
          "type": "fill",
          "prompt": "Add the emphatic auxiliary (3rd person).",
          "sentence": "She ____ care about the result.",
          "answers": [
            "does"
          ],
          "explain": "Emphatic <em>does</em> + base verb."
        },
        {
          "type": "transform",
          "prompt": "Add emphasis with <em>do/does/did</em>: <em>I remember that day.</em>",
          "answer": [
            "i do remember that day"
          ],
          "explain": "Emphatic <em>do</em> + base verb."
        },
        {
          "type": "transform",
          "prompt": "Front the object for contrast: <em>I forgot his name but I remember his face.</em>",
          "answer": [
            "his name i forgot but his face i remember",
            "his face i remember his name i forgot"
          ],
          "explain": "Front the objects to contrast them."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with locative inversion: <em>A small chapel stood beside the lake.</em>",
          "answer": [
            "beside the lake stood a small chapel"
          ],
          "explain": "Front the place phrase and invert."
        },
        {
          "type": "error",
          "prompt": "Correct the emphatic verb.",
          "given": "We did enjoyed the trip very much.",
          "answer": [
            "we did enjoy the trip very much"
          ],
          "explain": "Base verb after <em>did</em>."
        },
        {
          "type": "error",
          "prompt": "Remove the redundant auxiliary.",
          "given": "She does can solve it quickly.",
          "answer": [
            "she can solve it quickly"
          ],
          "explain": "Don't add <em>does</em> to a modal."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into an emphatic sentence.",
          "bank": [
            "I",
            "do",
            "admire",
            "her",
            "courage"
          ],
          "answer": "I do admire her courage",
          "explain": "Emphatic <em>do</em> + base verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a fronted-inversion sentence.",
          "bank": [
            "Up",
            "the",
            "stairs",
            "ran",
            "the",
            "children"
          ],
          "answer": "Up the stairs ran the children",
          "explain": "Directional fronting + inversion."
        },
        {
          "type": "match",
          "prompt": "Match each device to its example.",
          "pairs": [
            {
              "l": "emphatic do",
              "r": "I do agree."
            },
            {
              "l": "object fronting",
              "r": "That I cannot accept."
            },
            {
              "l": "locative inversion",
              "r": "Here comes the train."
            }
          ],
          "explain": "Each adds emphasis in a different way."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct emphatic form.",
          "options": [
            "She does deserve the prize.",
            "She does deserving the prize.",
            "She does deserved the prize.",
            "She is does deserve the prize."
          ],
          "answer": 0,
          "explain": "<em>does</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Which fronted sentence inverts correctly?",
          "options": [
            "Beyond the gate a garden lay.",
            "Beyond the gate lay a garden.",
            "Beyond the gate lay it.",
            "Lay a garden beyond the gate."
          ],
          "answer": 1,
          "explain": "Locative fronting + inversion with a full noun subject."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct emphatic present.",
          "options": [
            "They do works hard.",
            "They do work hard.",
            "They do working hard.",
            "They does work hard."
          ],
          "answer": 1,
          "explain": "<em>do</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Which uses fronting for emphasis?",
          "options": [
            "I will never forget that kindness.",
            "That kindness I will never forget.",
            "Never that kindness forget I will.",
            "I that kindness will forget never."
          ],
          "answer": 1,
          "explain": "Front the object for emphasis."
        },
        {
          "type": "fill",
          "prompt": "Add the emphatic auxiliary (present).",
          "sentence": "I ____ understand your concern.",
          "answers": [
            "do"
          ],
          "explain": "Emphatic <em>do</em> + base verb."
        },
        {
          "type": "fill",
          "prompt": "Add the emphatic auxiliary (past).",
          "sentence": "She ____ warn us, but we ignored her.",
          "answers": [
            "did"
          ],
          "explain": "Emphatic <em>did</em> + base verb."
        },
        {
          "type": "fill",
          "prompt": "Add the emphatic auxiliary (3rd person).",
          "sentence": "He ____ try his best every time.",
          "answers": [
            "does"
          ],
          "explain": "Emphatic <em>does</em> + base verb."
        },
        {
          "type": "transform",
          "prompt": "Add emphasis with <em>do/does/did</em>: <em>She finished the marathon.</em>",
          "answer": [
            "she did finish the marathon"
          ],
          "explain": "Emphatic <em>did</em> + base verb."
        },
        {
          "type": "transform",
          "prompt": "Front the complement: <em>The result was disappointing, but the effort was admirable.</em>",
          "answer": [
            "disappointing the result was but admirable the effort was",
            "admirable the effort was disappointing the result was"
          ],
          "explain": "Front the complements to contrast them."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with locative inversion: <em>A long queue formed outside the shop.</em>",
          "answer": [
            "outside the shop formed a long queue"
          ],
          "explain": "Front the place phrase and invert."
        },
        {
          "type": "error",
          "prompt": "Correct the emphatic verb.",
          "given": "He does works very carefully.",
          "answer": [
            "he does work very carefully"
          ],
          "explain": "Base verb after <em>does</em>."
        },
        {
          "type": "error",
          "prompt": "Remove the redundant auxiliary.",
          "given": "They do should leave now.",
          "answer": [
            "they should leave now"
          ],
          "explain": "Don't add <em>do</em> to a modal."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into an emphatic sentence.",
          "bank": [
            "She",
            "does",
            "value",
            "your",
            "opinion"
          ],
          "answer": "She does value your opinion",
          "explain": "Emphatic <em>does</em> + base verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a fronted-inversion sentence.",
          "bank": [
            "Across",
            "the",
            "field",
            "galloped",
            "a",
            "horse"
          ],
          "answer": "Across the field galloped a horse",
          "explain": "Directional fronting + inversion."
        },
        {
          "type": "match",
          "prompt": "Match each device to its example.",
          "pairs": [
            {
              "l": "emphatic did",
              "r": "He did call back."
            },
            {
              "l": "complement fronting",
              "r": "Brilliant it was."
            },
            {
              "l": "directional inversion",
              "r": "Off went the rocket."
            }
          ],
          "explain": "Each creates emphasis differently."
        }
      ]
    },
    "s9_L15_cohesion": {
      "id": "s9_L15_cohesion",
      "code": "G.S9.15",
      "title": "Cohesion: Substitution, Ellipsis and Reference",
      "chapter": "Chapter 2 — Complex Noun Phrases, Voice and Academic Style",
      "week": "Week 15 · Writing that Flows",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.DC.2.7",
      "_ccg": "reconstruct",
      "vocabulary": [
        "cohesion",
        "substitution",
        "ellipsis",
        "reference",
        "one",
        "so",
        "conjunct",
        "omit",
        "repetition",
        "linker"
      ],
      "explanation": [
        "Skilled writers avoid repetition through three devices. <b>Substitution</b> replaces a word or phrase: <i>one/ones</i> for nouns (<i>the blue shirt or the red one</i>), <i>do so / do too</i> for verb phrases, and <i>so/not</i> for whole clauses (<i>I think so</i>; <i>I'm afraid not</i>). <b>Ellipsis</b> omits recoverable words: <i>She can sing and (she can) dance</i>; <i>I haven't finished, but she has (finished)</i>.",
        "<b>Reference</b> ties ideas together with pronouns and pointers (<i>this, that, such, the former, the latter</i>). Advanced <b>conjuncts</b> signal logical links: <i>consequently, nevertheless, hence, thereby, whereby</i>, punctuated with a semicolon-or-full-stop plus comma."
      ],
      "examples": [
        {
          "type": "right",
          "text": "I prefer the blue shirt to the red <em>one</em>."
        },
        {
          "type": "right",
          "text": "She promised to help, and she <em>did</em>."
        },
        {
          "type": "right",
          "text": "Is it going to rain? — I hope <em>so</em>."
        },
        {
          "type": "wrong",
          "text": "Do you think it will work? — I think yes."
        },
        {
          "type": "right",
          "text": "He missed the deadline; <em>consequently</em>, he lost the contract."
        }
      ],
      "mistakes": [
        "<em>I think yes.</em> → <em>I think so.</em> — use <b>so</b> to substitute a positive clause.",
        "<em>I like the small ones better than the big.</em> → <em>… than the big ones.</em> — keep <b>ones</b> after the adjective.",
        "<em>She enjoys tennis and her sister too enjoys.</em> → <em>… and so does her sister.</em> — use <b>so + auxiliary + subject</b>."
      ],
      "traps": [
        "<b>one/ones</b> substitute countable nouns; <b>do so / do too / so do I</b> substitute verb phrases.",
        "<b>so</b> = a positive clause substitute (<em>I think so</em>); <b>not</b> = a negative one (<em>I'm afraid not</em>).",
        "Use conjuncts (however, therefore, nevertheless) with correct punctuation and not too often."
      ],
      "arabicInsight": "للترابط يتجنّب الكتّاب التكرار بثلاث أدوات: <b>الاستبدال</b> (<i>one/ones</i> للأسماء، <i>do so</i> للأفعال، <i>so/not</i> للجمل)، و<b>الحذف</b> (إسقاط ما يمكن استرجاعه)، و<b>الإحالة</b> (<i>this/that/such/the former/the latter</i>) مع روابط منطقية مثل <i>consequently، nevertheless، hence</i>.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct substitution.",
          "options": [
            "This pen is dry; pass me the another.",
            "This pen is dry; pass me another one.",
            "This pen is dry; pass me the one another.",
            "This pen is dry; pass me one the."
          ],
          "answer": 1,
          "explain": "<em>one</em> substitutes the countable noun <em>pen</em>."
        },
        {
          "type": "mcq",
          "prompt": "Substitute the verb phrase.",
          "options": [
            "He said he'd call, and he called did.",
            "He said he'd call, and he did so.",
            "He said he'd call, and he so did call.",
            "He said he'd call, and so he."
          ],
          "answer": 1,
          "explain": "<em>do so</em> substitutes the verb phrase."
        },
        {
          "type": "mcq",
          "prompt": "Which clause substitution is correct?",
          "options": [
            "Will they agree? — I expect yes.",
            "Will they agree? — I expect so.",
            "Will they agree? — I expect it so.",
            "Will they agree? — I expect that so."
          ],
          "answer": 1,
          "explain": "<em>so</em> substitutes the positive clause."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct conjunct use.",
          "options": [
            "The road was icy, therefore we drove slowly.",
            "The road was icy; therefore, we drove slowly.",
            "The road was icy therefore, we drove slowly.",
            "The road was icy: therefore we drove slowly."
          ],
          "answer": 1,
          "explain": "Conjunct after a semicolon, with a comma."
        },
        {
          "type": "fill",
          "prompt": "Substitute with one word.",
          "sentence": "I don't have a charger, but I can borrow ____.",
          "answers": [
            "one"
          ],
          "explain": "<em>one</em> substitutes the countable noun."
        },
        {
          "type": "fill",
          "prompt": "Complete the negative substitution.",
          "sentence": "Will it be cancelled? — I hope ____.",
          "answers": [
            "not"
          ],
          "explain": "<em>not</em> = a negative clause substitute."
        },
        {
          "type": "fill",
          "prompt": "Complete the agreement with ellipsis/substitution.",
          "sentence": "She loves jazz, and so ____ I.",
          "answers": [
            "do"
          ],
          "explain": "<em>so do I</em> avoids repeating the verb."
        },
        {
          "type": "transform",
          "prompt": "Avoid repetition with <em>so</em>: <em>Are we late? — I think we are late.</em>",
          "answer": [
            "are we late i think so"
          ],
          "explain": "Substitute the clause with <em>so</em>."
        },
        {
          "type": "transform",
          "prompt": "Use ellipsis: <em>He can drive a car and he can ride a motorbike.</em>",
          "answer": [
            "he can drive a car and ride a motorbike"
          ],
          "explain": "Omit the repeated subject and auxiliary."
        },
        {
          "type": "transform",
          "prompt": "Add a conjunct: <em>The plan was risky. They approved it anyway.</em> (use <em>nevertheless</em>)",
          "answer": [
            "the plan was risky nevertheless they approved it",
            "the plan was risky nevertheless they approved it anyway"
          ],
          "explain": "Concession with <em>nevertheless</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the substitution.",
          "given": "Do you think she'll win? — I think yes.",
          "answer": [
            "do you think shell win i think so"
          ],
          "explain": "Use <em>so</em>, not <em>yes</em>, to substitute the clause."
        },
        {
          "type": "error",
          "prompt": "Fix the noun substitution.",
          "given": "I have a new laptop and an old.",
          "answer": [
            "i have a new laptop and an old one"
          ],
          "explain": "Keep <em>one</em> after the adjective."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "first",
            "option",
            "is",
            "cheaper",
            "than",
            "the",
            "second",
            "one"
          ],
          "answer": "The first option is cheaper than the second one",
          "explain": "<em>one</em> substitutes the repeated noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "He",
            "apologised",
            "and",
            "so",
            "did",
            "his",
            "brother"
          ],
          "answer": "He apologised and so did his brother",
          "explain": "<em>so + auxiliary + subject</em>."
        },
        {
          "type": "match",
          "prompt": "Match each device to its example.",
          "pairs": [
            {
              "l": "substitution (one)",
              "r": "the red one"
            },
            {
              "l": "substitution (so)",
              "r": "I think so"
            },
            {
              "l": "conjunct",
              "r": "consequently, they left"
            }
          ],
          "explain": "Each device supports cohesion differently."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct substitution.",
          "options": [
            "These shoes are worn; I need new shoes ones.",
            "These shoes are worn; I need new ones.",
            "These shoes are worn; I need the new one ones.",
            "These shoes are worn; I need ones new."
          ],
          "answer": 1,
          "explain": "<em>ones</em> substitutes the plural noun."
        },
        {
          "type": "mcq",
          "prompt": "Substitute the verb phrase.",
          "options": [
            "They promised to recycle, and they did so.",
            "They promised to recycle, and they recycled did.",
            "They promised to recycle, and so they.",
            "They promised to recycle, and did they so."
          ],
          "answer": 0,
          "explain": "<em>do so</em> substitutes the verb phrase."
        },
        {
          "type": "mcq",
          "prompt": "Which clause substitution is correct?",
          "options": [
            "Is the shop open? — I'm afraid no.",
            "Is the shop open? — I'm afraid not.",
            "Is the shop open? — I'm afraid it not.",
            "Is the shop open? — I'm afraid that not."
          ],
          "answer": 1,
          "explain": "<em>not</em> substitutes the negative clause."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct conjunct use.",
          "options": [
            "It rained all day, however the match continued.",
            "It rained all day; however, the match continued.",
            "It rained all day however, the match continued.",
            "It rained all day: however the match continued."
          ],
          "answer": 1,
          "explain": "Conjunct after a semicolon, with a comma."
        },
        {
          "type": "fill",
          "prompt": "Substitute with one word.",
          "sentence": "My old phone broke, so I bought a new ____.",
          "answers": [
            "one"
          ],
          "explain": "<em>one</em> substitutes the countable noun."
        },
        {
          "type": "fill",
          "prompt": "Complete the positive substitution.",
          "sentence": "Will the talk be useful? — I believe ____.",
          "answers": [
            "so"
          ],
          "explain": "<em>so</em> = a positive clause substitute."
        },
        {
          "type": "fill",
          "prompt": "Complete the agreement.",
          "sentence": "He hasn't replied, and neither ____ she.",
          "answers": [
            "has"
          ],
          "explain": "<em>neither has she</em> avoids repetition."
        },
        {
          "type": "transform",
          "prompt": "Avoid repetition with <em>not</em>: <em>Is it broken? — I hope it is not broken.</em>",
          "answer": [
            "is it broken i hope not"
          ],
          "explain": "Substitute the negative clause with <em>not</em>."
        },
        {
          "type": "transform",
          "prompt": "Use ellipsis: <em>She wanted to come but she could not come.</em>",
          "answer": [
            "she wanted to come but could not",
            "she wanted to come but couldnt"
          ],
          "explain": "Omit the recoverable words after <em>could not</em>."
        },
        {
          "type": "transform",
          "prompt": "Add a conjunct: <em>Sales fell sharply. The firm cut costs.</em> (use <em>consequently</em>)",
          "answer": [
            "sales fell sharply consequently the firm cut costs"
          ],
          "explain": "Result with <em>consequently</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the substitution.",
          "given": "Are they coming? — I think yes.",
          "answer": [
            "are they coming i think so"
          ],
          "explain": "Use <em>so</em>, not <em>yes</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the noun substitution.",
          "given": "I prefer fresh juice to bottled.",
          "answer": [
            "i prefer fresh juice to bottled one",
            "i prefer fresh juice to a bottled one"
          ],
          "explain": "Add <em>one</em> after the adjective."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "This",
            "route",
            "is",
            "faster",
            "than",
            "the",
            "other",
            "one"
          ],
          "answer": "This route is faster than the other one",
          "explain": "<em>one</em> substitutes the repeated noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "was",
            "tired",
            "and",
            "so",
            "were",
            "the",
            "others"
          ],
          "answer": "She was tired and so were the others",
          "explain": "<em>so + auxiliary + subject</em>."
        },
        {
          "type": "match",
          "prompt": "Match each device to its example.",
          "pairs": [
            {
              "l": "ellipsis",
              "r": "She can, but he can't."
            },
            {
              "l": "reference",
              "r": "the latter option"
            },
            {
              "l": "conjunct",
              "r": "hence, the delay"
            }
          ],
          "explain": "Each device links ideas and avoids repetition."
        }
      ]
    },
    "s9_L16_hedgingStance": {
      "id": "s9_L16_hedgingStance",
      "code": "G.S9.16",
      "title": "Hedging, Modality and Stance",
      "chapter": "Chapter 2 — Complex Noun Phrases, Voice and Academic Style",
      "week": "Week 16 · The Academic Voice",
      "cefr": "B2.2 (Stage 9)",
      "moeSlo": "ENG.S9.GR.DC.2.8",
      "_ccg": "reconstruct",
      "vocabulary": [
        "hedge",
        "stance",
        "caution",
        "modality",
        "tentative",
        "claim",
        "suggest",
        "appear",
        "arguably",
        "overclaim"
      ],
      "explanation": [
        "Academic and persuasive writing controls how strongly a claim is made. <b>Hedging</b> softens a statement so it is not overstated, using modal verbs (<i>may, might, could, would</i>), reporting verbs (<i>suggest, indicate, appear, seem, tend to</i>), adverbs (<i>possibly, perhaps, arguably, largely, apparently</i>) and distancing frames (<i>It could be argued that …</i>, <i>The evidence suggests that …</i>).",
        "Choosing the right strength is a matter of <b>stance</b>: replace overclaiming verbs like <i>prove</i> with cautious ones like <i>suggest</i> or <i>indicate</i>, and use <i>seem/appear + to-infinitive</i> (<i>appears to be</i>, <i>seems to have increased</i>) to report carefully. Avoid stacking contradictory signals (<i>maybe … definitely</i>)."
      ],
      "examples": [
        {
          "type": "right",
          "text": "These results <em>suggest</em> that diet <em>may</em> affect sleep."
        },
        {
          "type": "right",
          "text": "<em>It could be argued that</em> the policy was premature."
        },
        {
          "type": "right",
          "text": "The findings <em>appear to</em> support the theory."
        },
        {
          "type": "wrong",
          "text": "This proves that diet causes everything."
        },
        {
          "type": "right",
          "text": "The reform is <em>arguably</em> the most important in decades."
        }
      ],
      "mistakes": [
        "<em>The data proves that …</em> → <em>The data suggests/indicates that …</em> — avoid overclaiming.",
        "<em>It can be argue that …</em> → <em>It can be argued that …</em> — use the past participle in the passive frame.",
        "<em>Maybe it is definitely true.</em> → <em>It may well be true.</em> — don't mix a hedge with a booster."
      ],
      "traps": [
        "Hedges soften claims: <em>may, might, tend to, suggest, appear, arguably</em>.",
        "Use <b>seem/appear + to-infinitive</b> to report cautiously: <em>seems to have risen</em>.",
        "Match strength to evidence — <em>suggest/indicate</em> for tentative claims, not <em>prove</em>."
      ],
      "arabicInsight": "تتحكّم الكتابة الأكاديمية والإقناعية في قوة الادعاء. <b>التحوّط (hedging)</b> يلطّف العبارة عبر أفعال modal (<i>may, might, could</i>) وأفعال تقرير (<i>suggest, appear, tend to</i>) وظروف (<i>possibly, arguably</i>) وصيغ تبعيد (<i>It could be argued that</i>). استبدل <i>prove</i> بـ<i>suggest/indicate</i>، ولا تجمع تحوّطًا مع توكيد متناقض.",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the most appropriately hedged claim.",
          "options": [
            "This proves that exercise cures stress.",
            "This suggests that exercise may reduce stress.",
            "This definitely shows exercise removes all stress.",
            "This proves exercise always works."
          ],
          "answer": 1,
          "explain": "<em>suggests … may</em> is suitably cautious."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct distancing frame.",
          "options": [
            "It could be argue that fees are unfair.",
            "It could be argued that fees are unfair.",
            "It could argued that fees are unfair.",
            "It could be arguing that fees are unfair."
          ],
          "answer": 1,
          "explain": "Passive frame: <em>It could be argued that …</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which uses <em>appear</em> correctly?",
          "options": [
            "Prices appear rising.",
            "Prices appear to be rising.",
            "Prices appear that rising.",
            "Prices appear risen."
          ],
          "answer": 1,
          "explain": "<em>appear + to-infinitive</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the better academic verb.",
          "options": [
            "The study proves a link.",
            "The study indicates a link.",
            "The study totally confirms a link forever.",
            "The study guarantees a link."
          ],
          "answer": 1,
          "explain": "<em>indicates</em> is suitably tentative."
        },
        {
          "type": "fill",
          "prompt": "Add a hedging modal.",
          "sentence": "The change ____ have unintended effects. (possibility)",
          "answers": [
            "may",
            "might",
            "could"
          ],
          "explain": "A modal of possibility hedges the claim."
        },
        {
          "type": "fill",
          "prompt": "Add a hedging adverb.",
          "sentence": "The plan is ____ the most ambitious yet. (debatably)",
          "answers": [
            "arguably"
          ],
          "explain": "<em>arguably</em> signals a defensible but cautious claim."
        },
        {
          "type": "fill",
          "prompt": "Complete the cautious verb.",
          "sentence": "Sales ____ to have fallen last quarter. (seem)",
          "answers": [
            "seem"
          ],
          "explain": "<em>seem + to have + past participle</em>."
        },
        {
          "type": "transform",
          "prompt": "Hedge this claim: <em>Social media damages attention spans.</em>",
          "answer": [
            "social media may damage attention spans",
            "social media appears to damage attention spans"
          ],
          "explain": "Soften with a modal or <em>appears to</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with a distancing frame: <em>The policy failed.</em>",
          "answer": [
            "it could be argued that the policy failed",
            "it appears that the policy failed"
          ],
          "explain": "Use a cautious frame."
        },
        {
          "type": "transform",
          "prompt": "Replace the overclaim: <em>This proves that the method works.</em>",
          "answer": [
            "this suggests that the method works",
            "this indicates that the method works"
          ],
          "explain": "Swap <em>proves</em> for a tentative verb."
        },
        {
          "type": "error",
          "prompt": "Fix the overclaim.",
          "given": "The results prove diet controls mood completely.",
          "answer": [
            "the results suggest diet may affect mood",
            "the results indicate that diet may influence mood"
          ],
          "explain": "Hedge the claim with <em>suggest/may</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the passive frame.",
          "given": "It can be argue that the test is unfair.",
          "answer": [
            "it can be argued that the test is unfair"
          ],
          "explain": "Use the past participle <em>argued</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a hedged sentence.",
          "bank": [
            "The",
            "evidence",
            "suggests",
            "that",
            "levels",
            "may",
            "be",
            "rising"
          ],
          "answer": "The evidence suggests that levels may be rising",
          "explain": "<em>suggests that … may</em> double-hedges."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a hedged sentence.",
          "bank": [
            "The",
            "theory",
            "appears",
            "to",
            "be",
            "largely",
            "correct"
          ],
          "answer": "The theory appears to be largely correct",
          "explain": "<em>appears to be + adverb</em>."
        },
        {
          "type": "match",
          "prompt": "Match each device to its function.",
          "pairs": [
            {
              "l": "may / might",
              "r": "hedging modal of possibility"
            },
            {
              "l": "it could be argued that",
              "r": "distancing frame"
            },
            {
              "l": "appears to be",
              "r": "cautious reporting"
            }
          ],
          "explain": "Each tool softens or attributes a claim."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the most appropriately hedged claim.",
          "options": [
            "This proves screens ruin sleep.",
            "This suggests screens might disrupt sleep.",
            "This absolutely proves screens destroy sleep.",
            "This shows screens always ruin sleep."
          ],
          "answer": 1,
          "explain": "<em>suggests … might</em> is cautious."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct distancing frame.",
          "options": [
            "It is wide believed that reform is needed.",
            "It is widely believed that reform is needed.",
            "It is widely believe that reform is needed.",
            "It widely believed that reform is needed."
          ],
          "answer": 1,
          "explain": "<em>It is widely believed that …</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which uses <em>tend to</em> correctly?",
          "options": [
            "Students tend ignore footnotes.",
            "Students tend to ignore footnotes.",
            "Students tend ignoring footnotes.",
            "Students tends to ignore footnotes."
          ],
          "answer": 1,
          "explain": "<em>tend + to-infinitive</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the better academic verb.",
          "options": [
            "The data proves causation beyond doubt.",
            "The data points to a possible cause.",
            "The data 100% confirms causation.",
            "The data guarantees the cause."
          ],
          "answer": 1,
          "explain": "<em>points to a possible cause</em> is tentative."
        },
        {
          "type": "fill",
          "prompt": "Add a hedging modal.",
          "sentence": "Higher fees ____ discourage some applicants. (possibility)",
          "answers": [
            "may",
            "might",
            "could"
          ],
          "explain": "A modal of possibility hedges."
        },
        {
          "type": "fill",
          "prompt": "Add a hedging adverb.",
          "sentence": "The findings are ____ overstated by the media. (perhaps)",
          "answers": [
            "perhaps",
            "possibly"
          ],
          "explain": "<em>perhaps/possibly</em> softens the claim."
        },
        {
          "type": "fill",
          "prompt": "Complete the cautious verb.",
          "sentence": "The level ____ to have stabilised. (appear)",
          "answers": [
            "appears"
          ],
          "explain": "<em>appear + to have + past participle</em>."
        },
        {
          "type": "transform",
          "prompt": "Hedge this claim: <em>Tourism harms local cultures.</em>",
          "answer": [
            "tourism may harm local cultures",
            "tourism appears to harm local cultures"
          ],
          "explain": "Soften with a modal or <em>appears to</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with a distancing frame: <em>The experiment was flawed.</em>",
          "answer": [
            "it could be argued that the experiment was flawed",
            "it appears that the experiment was flawed"
          ],
          "explain": "Use a cautious frame."
        },
        {
          "type": "transform",
          "prompt": "Replace the overclaim: <em>This shows beyond doubt that the drug is safe.</em>",
          "answer": [
            "this suggests that the drug is safe",
            "this indicates that the drug may be safe"
          ],
          "explain": "Swap the booster for a hedge."
        },
        {
          "type": "error",
          "prompt": "Fix the overclaim.",
          "given": "The survey proves everyone supports the plan.",
          "answer": [
            "the survey suggests that most people support the plan",
            "the survey indicates that many support the plan"
          ],
          "explain": "Hedge the universal claim."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "It is wide accepted that sleep aids memory.",
          "answer": [
            "it is widely accepted that sleep aids memory"
          ],
          "explain": "Use the adverb <em>widely</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a hedged sentence.",
          "bank": [
            "The",
            "results",
            "seem",
            "to",
            "support",
            "the",
            "hypothesis"
          ],
          "answer": "The results seem to support the hypothesis",
          "explain": "<em>seem + to-infinitive</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a hedged sentence.",
          "bank": [
            "It",
            "is",
            "possible",
            "that",
            "the",
            "trend",
            "will",
            "continue"
          ],
          "answer": "It is possible that the trend will continue",
          "explain": "<em>It is possible that …</em> frames a tentative claim."
        },
        {
          "type": "match",
          "prompt": "Match each device to its function.",
          "pairs": [
            {
              "l": "tend to",
              "r": "cautious generalisation"
            },
            {
              "l": "it is widely believed that",
              "r": "impersonal distancing"
            },
            {
              "l": "perhaps",
              "r": "softening adverb"
            }
          ],
          "explain": "Each manages the strength of a claim."
        }
      ]
    }
  }
}
);
