/* ===== Grammar Academy DATA MODULE (authored from official CCG + marked extensions, validated) ===== */
/* Term 2 · AY 2025-26 · Grade 9 General (ENG.05) · Mourad Mekki Teacher Toolkit */
/* Chapter 3 'Nearest and Dearest' + Chapter 4 'Get Well Soon!'. 11 lessons / 330 questions. */
/* CCG codes: G.2.2, G.8.1 (Advice + Suggestions/Obligation), G.6.2, G.14.1, G.2.3. 5 teacher-extension lessons marked 'Extension'. Weeks/vocab from the official CCG. */
GA.register(
{
  "term": "T2-2526",
  "termLabel": "Term 2 · AY 2025–26",
  "grade": "9",
  "stream": "general",
  "streamLabel": "Grade 9 General Pathway",
  "cefr": "B1.1 (Stage 5 · ENG.05)",
  "source": "CCG Grade 9 General — Term 2 · Chapters 3 (Nearest and Dearest) & 4 (Get Well Soon!). CCG grammar: G.2.2, G.8.1 (two lessons), G.6.2, G.14.1, G.2.3; the other five lessons are teacher extensions (marked 'Extension'), added mainly to fill out the grammar-light Chapter 3.",
  "chapters": [
    {
      "id": "ch3",
      "title": "Chapter 3 — Nearest and Dearest",
      "lessons": [
        "t2s5_L1_sequencingAdv",
        "t2s5_L2_comparatives",
        "t2s5_L3_superlatives",
        "t2s5_L4_presentCont",
        "t2s5_L5_adjOrder"
      ]
    },
    {
      "id": "ch4",
      "title": "Chapter 4 — Get Well Soon!",
      "lessons": [
        "t2s5_L6_modalsAdvice",
        "t2s5_L7_modalsSuggest",
        "t2s5_L8_subordConj",
        "t2s5_L9_pastSimple",
        "t2s5_L10_frequencyAdv",
        "t2s5_L11_imperatives"
      ]
    }
  ],
  "lessons": {
    "t2s5_L1_sequencingAdv": {
      "id": "t2s5_L1_sequencingAdv",
      "code": "G.2.2",
      "title": "Sequencing Adverbs",
      "chapter": "Chapter 3 — Nearest and Dearest",
      "week": "Week 1 · Pros and Cons Essay",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.WR.P.4.1",
      "source_ccg": "CCG Grade 9 General — Term 2 · Chapter 3",
      "vocabulary": [
        "pros",
        "cons",
        "social networking",
        "connect",
        "socialize",
        "face-to-face",
        "texting",
        "update"
      ],
      "explanation": [
        "<p><b>Sequencing adverbs</b> order the points of an essay or the steps of an idea so the writing is easy to follow: <i>first, second, then, next, after that, finally</i>. They help you list the pros and cons clearly.</p>",
        "<p>When a sequencing adverb opens a sentence, follow it with a <b>comma</b>: <i>First, social networking helps us stay in touch. Finally, it can waste time.</i> Use <i>first</i> for the opening point and <i>finally</i> for the last.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "First, social networking helps us connect with friends."
        },
        {
          "type": "correct",
          "text": "Then, it lets us share updates quickly."
        },
        {
          "type": "correct",
          "text": "After that, we should think about the cons."
        },
        {
          "type": "correct",
          "text": "Finally, too much texting can replace face-to-face time."
        },
        {
          "type": "incorrect",
          "text": "Finally social media connects people, then it can waste time. (last point first, no comma)"
        }
      ],
      "mistakes": [
        "Forgetting the comma after an opening sequencer: <em>First social media helps</em> instead of <em>First, social media helps</em>.",
        "Using <em>finally</em> for an early point instead of the last one.",
        "Repeating <em>then</em> for every point instead of <em>next</em>, <em>after that</em>."
      ],
      "traps": [
        "<em>finally</em> marks the <em>last</em> point, not an early one.",
        "Put a comma after a sequencing adverb that opens a sentence.",
        "<em>first</em> opens a list; <em>second/next/after that</em> continue it; <em>finally</em> closes it."
      ],
      "arabicInsight": "<p>ظروف الترتيب ترتّب نقاط المقال أو الأفكار ليسهل اتّباعها: <i>first, then, next, after that, finally</i>. عند بدء الجملة بها نضع <b>فاصلة</b> بعدها (<i>First, ...</i>)، ونستخدم <i>finally</i> للنقطة الأخيرة. (G.2.2 من المنهج).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the best sequencer to open an essay.",
          "options": [
            "Finally, social media is useful.",
            "First, social media is useful.",
            "After that, social media is useful.",
            "Then, social media is useful."
          ],
          "answer": 1,
          "explain": "Opening point → <em>first</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence is punctuated correctly?",
          "options": [
            "Then it helps us connect.",
            "Then, it helps us connect.",
            "Then it, helps us connect.",
            "Then it helps, us connect."
          ],
          "answer": 1,
          "explain": "Comma after the opening sequencer."
        },
        {
          "type": "mcq",
          "prompt": "Pick the adverb for the last point.",
          "options": [
            "First",
            "Next",
            "Finally",
            "After that"
          ],
          "answer": 2,
          "explain": "<em>finally</em> = last point."
        },
        {
          "type": "mcq",
          "prompt": "Complete: '____, texting saves time.'",
          "options": [
            "Finally",
            "After that",
            "First",
            "Then"
          ],
          "answer": 2,
          "explain": "Opening point → <em>first</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a sequencer for the first point.",
          "sentence": "____, social networking keeps us in touch.",
          "answers": [
            "First"
          ],
          "explain": "Opening point."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "It helps us connect; ____ that, it shares news fast.",
          "answers": [
            "after"
          ],
          "explain": "<em>after that</em> links the next point."
        },
        {
          "type": "fill",
          "prompt": "Complete the punctuation.",
          "sentence": "Then____ we should look at the cons.",
          "answers": [
            ","
          ],
          "explain": "Comma after the opening sequencer."
        },
        {
          "type": "transform",
          "prompt": "Add a sequencer for the last point: <em>Too much screen time is harmful.</em> Use <em>Finally</em>.",
          "answer": [
            "finally too much screen time is harmful"
          ],
          "explain": "<em>Finally</em> + comma."
        },
        {
          "type": "transform",
          "prompt": "Order the points with <em>First</em> and <em>Then</em>: <em>It shares updates. It connects people.</em>",
          "answer": [
            "first it connects people then it shares updates",
            "first it connects people. then, it shares updates"
          ],
          "explain": "Connect before share."
        },
        {
          "type": "transform",
          "prompt": "Vary the repeated sequencer: <em>Then it saves time. Then it is fun.</em> Replace the second <em>Then</em> with <em>After that</em>.",
          "answer": [
            "then it saves time after that it is fun",
            "then it saves time. after that, it is fun"
          ],
          "explain": "Vary the sequencers."
        },
        {
          "type": "error",
          "prompt": "Correct the missing comma.",
          "given": "First social networking helps us connect.",
          "answer": [
            "first, social networking helps us connect"
          ],
          "explain": "Comma after opening <em>First</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the sequencing logic.",
          "given": "Finally social media connects people, then it wastes time.",
          "answer": [
            "first social media connects people, then it wastes time"
          ],
          "explain": "First point should not use <em>finally</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "First",
            "social",
            "networking",
            "helps",
            "us",
            "connect"
          ],
          "answer": "First social networking helps us connect",
          "explain": "Opening sequencer + clause."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Finally",
            "too",
            "much",
            "texting",
            "wastes",
            "our",
            "time"
          ],
          "answer": "Finally too much texting wastes our time",
          "explain": "Last-point sequencer."
        },
        {
          "type": "match",
          "prompt": "Match each sequencer to its role.",
          "pairs": [
            {
              "l": "First",
              "r": "the opening point"
            },
            {
              "l": "After that",
              "r": "the next point"
            },
            {
              "l": "Finally",
              "r": "the last point"
            }
          ],
          "explain": "Sequencers order points from first to last."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the best sequencer to open an essay.",
          "options": [
            "Finally, smartphones are helpful.",
            "After that, smartphones are helpful.",
            "First, smartphones are helpful.",
            "Then, smartphones are helpful."
          ],
          "answer": 2,
          "explain": "Opening point → <em>first</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence is punctuated correctly?",
          "options": [
            "Next it saves money.",
            "Next, it saves money.",
            "Next it, saves money.",
            "Next it saves, money."
          ],
          "answer": 1,
          "explain": "Comma after the opening sequencer."
        },
        {
          "type": "mcq",
          "prompt": "Choose the sequencer for the step right after the first.",
          "options": [
            "First",
            "Then",
            "Finally",
            "At first"
          ],
          "answer": 1,
          "explain": "The point after the first → <em>then</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: '____, online chats keep us close.'",
          "options": [
            "Finally",
            "After that",
            "First",
            "Then"
          ],
          "answer": 2,
          "explain": "Opening point → <em>first</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a sequencer for the first point.",
          "sentence": "____, smartphones help us learn.",
          "answers": [
            "First"
          ],
          "explain": "Opening point."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "It keeps us in touch; ____ that, it shares photos.",
          "answers": [
            "after"
          ],
          "explain": "<em>after that</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the punctuation.",
          "sentence": "Next____ we should weigh the cons.",
          "answers": [
            ","
          ],
          "explain": "Comma after the opening sequencer."
        },
        {
          "type": "transform",
          "prompt": "Add a sequencer for the last point: <em>It can cause distraction.</em> Use <em>Finally</em>.",
          "answer": [
            "finally it can cause distraction"
          ],
          "explain": "<em>Finally</em> + comma."
        },
        {
          "type": "transform",
          "prompt": "Order the points with <em>First</em> and <em>Then</em>: <em>It saves time. It is convenient.</em>",
          "answer": [
            "first it is convenient then it saves time",
            "first it is convenient. then, it saves time"
          ],
          "explain": "Convenient before saving time."
        },
        {
          "type": "transform",
          "prompt": "Vary the repeated sequencer: <em>Then it is cheap. Then it is fast.</em> Replace the second <em>Then</em> with <em>After that</em>.",
          "answer": [
            "then it is cheap after that it is fast",
            "then it is cheap. after that, it is fast"
          ],
          "explain": "Vary the sequencers."
        },
        {
          "type": "error",
          "prompt": "Correct the missing comma.",
          "given": "Next smartphones can distract students.",
          "answer": [
            "next, smartphones can distract students"
          ],
          "explain": "Comma after opening <em>Next</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the sequencing logic.",
          "given": "Finally phones help us learn, then they connect us.",
          "answer": [
            "first phones help us learn, then they connect us"
          ],
          "explain": "First point should not use <em>finally</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "First",
            "smartphones",
            "help",
            "us",
            "stay",
            "connected"
          ],
          "answer": "First smartphones help us stay connected",
          "explain": "Opening sequencer + clause."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Finally",
            "they",
            "can",
            "become",
            "a",
            "real",
            "distraction"
          ],
          "answer": "Finally they can become a real distraction",
          "explain": "Last-point sequencer."
        },
        {
          "type": "match",
          "prompt": "Match each sequencer to its role.",
          "pairs": [
            {
              "l": "First",
              "r": "point one"
            },
            {
              "l": "Next",
              "r": "the following point"
            },
            {
              "l": "Finally",
              "r": "the final point"
            }
          ],
          "explain": "Sequencers order points in a list."
        }
      ]
    },
    "t2s5_L2_comparatives": {
      "id": "t2s5_L2_comparatives",
      "code": "Extension",
      "title": "Comparative Adjectives",
      "chapter": "Chapter 3 — Nearest and Dearest",
      "week": "Week 2 · Describing People (teacher extension)",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.F.3.1",
      "source_ccg": "Teacher extension — themed to Chapter 3 (Nearest and Dearest); not a separate CCG grammar code.",
      "vocabulary": [
        "friendly",
        "confident",
        "active",
        "polite",
        "kind",
        "helpful",
        "cheerful",
        "creative"
      ],
      "explanation": [
        "<p>A <b>comparative adjective</b> compares two people or things. Short adjectives add <b>-er than</b>: <i>kinder than</i>, <i>taller than</i>. Longer adjectives use <b>more … than</b>: <i>more confident than</i>, <i>more helpful than</i>.</p>",
        "<p>Spelling shifts: <i>big → bigger</i>, <i>friendly → friendlier</i>. Irregulars: <i>good → better</i>, <i>bad → worse</i>. Join the comparison with <b>than</b> (not <i>then</i>).</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "My sister is friendlier than my cousin."
        },
        {
          "type": "correct",
          "text": "He is more confident than his brother."
        },
        {
          "type": "correct",
          "text": "She is a better friend than I expected."
        },
        {
          "type": "correct",
          "text": "Online chats are quicker than letters."
        },
        {
          "type": "incorrect",
          "text": "She is more kinder than her sister. (double comparative)"
        }
      ],
      "mistakes": [
        "Double comparative: <em>more kinder</em> instead of <em>kinder</em>.",
        "Using <em>then</em>: <em>taller then</em> instead of <em>taller <u>than</u></em>.",
        "Using <em>-er</em> on a long adjective: <em>confidenter</em> instead of <em>more confident</em>."
      ],
      "traps": [
        "Short adjectives take <em>-er</em>; long ones take <em>more</em> — never both.",
        "The comparison word is <em>than</em>, not <em>then</em>.",
        "<em>good → better</em>, <em>bad → worse</em> have no <em>-er</em> or <em>more</em>."
      ],
      "arabicInsight": "<p>صفة المقارنة تقارن بين شخصين أو شيئين: القصيرة <b>-er than</b> (kinder than)، والطويلة <b>more … than</b> (more confident than). ونحذر من المقارنة المزدوجة (<i>more kinder</i>)، ومن الخلط بين <i>than/then</i>، ومن الأشكال الشاذة (<i>better/worse</i>). (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct comparative.",
          "options": [
            "She is more kind than him.",
            "She is kinder than him.",
            "She is more kinder than him.",
            "She is kindest than him."
          ],
          "answer": 1,
          "explain": "Short adjective → <em>kinder</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which long adjective is correct?",
          "options": [
            "He is confidenter than me.",
            "He is more confident than me.",
            "He is more confidenter than me.",
            "He is confident than me."
          ],
          "answer": 1,
          "explain": "Long adjective → <em>more confident than</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct irregular comparative.",
          "options": [
            "She is a gooder friend.",
            "She is a more good friend.",
            "She is a better friend.",
            "She is a weller friend."
          ],
          "answer": 2,
          "explain": "<em>good → better</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'He is taller ____ his brother.'",
          "options": [
            "then",
            "than",
            "that",
            "as"
          ],
          "answer": 1,
          "explain": "Comparison → <em>than</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the comparative.",
          "sentence": "My cousin is ____ (friendly) than my neighbour.",
          "answers": [
            "friendlier"
          ],
          "explain": "<em>friendly → friendlier</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the comparative.",
          "sentence": "She is ____ (helpful) than her classmate.",
          "answers": [
            "more helpful"
          ],
          "explain": "Long adjective → <em>more helpful</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the comparison word.",
          "sentence": "He is more active ____ his friends.",
          "answers": [
            "than"
          ],
          "explain": "Comparison → <em>than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparison: <em>She is confident. Her brother is less so.</em> Use <em>more … than</em>.",
          "answer": [
            "she is more confident than her brother"
          ],
          "explain": "Long adjective → <em>more confident than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparison: <em>My friend is kind. I am less kind.</em>",
          "answer": [
            "my friend is kinder than me",
            "my friend is kinder than i am"
          ],
          "explain": "<em>kind → kinder than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparison with an irregular form: <em>This photo is good; that one is less good.</em>",
          "answer": [
            "this photo is better than that one"
          ],
          "explain": "<em>good → better than</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the comparative.",
          "given": "She is more friendlier than her sister.",
          "answer": [
            "she is friendlier than her sister"
          ],
          "explain": "No double comparative."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison word.",
          "given": "He is taller then his cousin.",
          "answer": [
            "he is taller than his cousin"
          ],
          "explain": "<em>than</em>, not <em>then</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct comparison.",
          "bank": [
            "My",
            "sister",
            "is",
            "friendlier",
            "than",
            "my",
            "cousin"
          ],
          "answer": "My sister is friendlier than my cousin",
          "explain": "<em>friendlier than</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct comparison.",
          "bank": [
            "He",
            "is",
            "more",
            "confident",
            "than",
            "his",
            "brother"
          ],
          "answer": "He is more confident than his brother",
          "explain": "<em>more confident than</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its comparative.",
          "pairs": [
            {
              "l": "friendly",
              "r": "friendlier"
            },
            {
              "l": "confident",
              "r": "more confident"
            },
            {
              "l": "good",
              "r": "better"
            }
          ],
          "explain": "Short → <em>-er</em>; long → <em>more</em>; irregular differs."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct comparative.",
          "options": [
            "He is more polite than tall.",
            "He is politer than his friend.",
            "He is more politer than his friend.",
            "He is politest than his friend."
          ],
          "answer": 1,
          "explain": "Short adjective → <em>politer</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which long adjective is correct?",
          "options": [
            "She is creativer than him.",
            "She is more creative than him.",
            "She is more creativer than him.",
            "She is creative than him."
          ],
          "answer": 1,
          "explain": "Long adjective → <em>more creative than</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct irregular comparative.",
          "options": [
            "My day was badder than yours.",
            "My day was more bad than yours.",
            "My day was worse than yours.",
            "My day was worser than yours."
          ],
          "answer": 2,
          "explain": "<em>bad → worse</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'She is kinder ____ most people.'",
          "options": [
            "then",
            "than",
            "that",
            "as"
          ],
          "answer": 1,
          "explain": "Comparison → <em>than</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the comparative.",
          "sentence": "My brother is ____ (active) than me.",
          "answers": [
            "more active"
          ],
          "explain": "Long adjective → <em>more active</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the comparative.",
          "sentence": "She is ____ (cheerful) than her cousin.",
          "answers": [
            "more cheerful"
          ],
          "explain": "Long adjective → <em>more cheerful</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the comparison word.",
          "sentence": "He is friendlier ____ his classmates.",
          "answers": [
            "than"
          ],
          "explain": "Comparison → <em>than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparison: <em>She is helpful. Her friend is less so.</em> Use <em>more … than</em>.",
          "answer": [
            "she is more helpful than her friend"
          ],
          "explain": "Long adjective → <em>more helpful than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparison: <em>My neighbour is polite. I am less polite.</em>",
          "answer": [
            "my neighbour is politer than me",
            "my neighbour is more polite than me"
          ],
          "explain": "<em>polite → politer/more polite than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparison with an irregular form: <em>This day is bad; that one is less bad.</em>",
          "answer": [
            "this day is worse than that one"
          ],
          "explain": "<em>bad → worse than</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the comparative.",
          "given": "My brother is more nicer than yours.",
          "answer": [
            "my brother is nicer than yours"
          ],
          "explain": "No double comparative."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison word.",
          "given": "She is kinder then her sister.",
          "answer": [
            "she is kinder than her sister"
          ],
          "explain": "<em>than</em>, not <em>then</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct comparison.",
          "bank": [
            "She",
            "is",
            "more",
            "creative",
            "than",
            "her",
            "brother"
          ],
          "answer": "She is more creative than her brother",
          "explain": "<em>more creative than</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct comparison.",
          "bank": [
            "My",
            "friend",
            "is",
            "kinder",
            "than",
            "most",
            "people"
          ],
          "answer": "My friend is kinder than most people",
          "explain": "<em>kinder than</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its comparative.",
          "pairs": [
            {
              "l": "polite",
              "r": "politer"
            },
            {
              "l": "creative",
              "r": "more creative"
            },
            {
              "l": "bad",
              "r": "worse"
            }
          ],
          "explain": "Short → <em>-er</em>; long → <em>more</em>; irregular differs."
        }
      ]
    },
    "t2s5_L3_superlatives": {
      "id": "t2s5_L3_superlatives",
      "code": "Extension",
      "title": "Superlative Adjectives",
      "chapter": "Chapter 3 — Nearest and Dearest",
      "week": "Week 2 · Describing People (teacher extension)",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.F.3.1",
      "source_ccg": "Teacher extension — themed to Chapter 3 (Nearest and Dearest); not a separate CCG grammar code.",
      "vocabulary": [
        "friendly",
        "confident",
        "helpful",
        "creative",
        "stylish",
        "cheerful",
        "kind",
        "polite"
      ],
      "explanation": [
        "<p>A <b>superlative adjective</b> marks the top of a group of three or more. Short adjectives add <b>-est</b> with <b>the</b>: <i>the kindest, the tallest</i>. Longer adjectives use <b>the most</b>: <i>the most helpful, the most creative</i>.</p>",
        "<p>Irregulars: <i>good → the best</i>, <i>bad → the worst</i>. Use <b>in</b> with a place/group name and <b>of</b> with a set: <i>the kindest person <u>in</u> my family</i>, <i>the best <u>of</u> all my friends</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "She is the kindest person in my family."
        },
        {
          "type": "correct",
          "text": "He is the most helpful student in the class."
        },
        {
          "type": "correct",
          "text": "That was the best advice of all."
        },
        {
          "type": "correct",
          "text": "My cousin is the friendliest of the three."
        },
        {
          "type": "incorrect",
          "text": "He is the most friendliest boy in school. (double superlative)"
        }
      ],
      "mistakes": [
        "Double superlative: <em>the most friendliest</em> instead of <em>the friendliest</em>.",
        "Dropping <em>the</em>: <em>She is kindest girl</em> instead of <em>the kindest girl</em>.",
        "Using <em>-est</em> on a long adjective: <em>the helpfulest</em> instead of <em>the most helpful</em>."
      ],
      "traps": [
        "Use <em>in</em> for a place/group and <em>of</em> for a set.",
        "Irregulars take no <em>-est</em> or <em>most</em>: <em>the best</em>, <em>the worst</em>.",
        "Two-syllable adjectives in <em>-y</em> take <em>-est</em>: <em>the friendliest</em>, <em>the happiest</em>."
      ],
      "arabicInsight": "<p>صفة التفضيل العليا تدل على الأعلى في مجموعة من ثلاثة فأكثر: القصيرة <b>the + -est</b> (the kindest)، والطويلة <b>the most</b> (the most helpful). ونحذر من التفضيل المزدوج (<i>the most friendliest</i>) ومن الأشكال الشاذة (<i>the best/the worst</i>). (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct superlative.",
          "options": [
            "She is the most kindest girl.",
            "She is the kindest girl.",
            "She is the kindest-est girl.",
            "She is kindest girl."
          ],
          "answer": 1,
          "explain": "<em>the kindest</em>; no double superlative."
        },
        {
          "type": "mcq",
          "prompt": "Which long adjective is correct?",
          "options": [
            "He is the helpfulest boy.",
            "He is the most helpful boy.",
            "He is the more helpful boy.",
            "He is the helpful most boy."
          ],
          "answer": 1,
          "explain": "Long adjective → <em>the most helpful</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct irregular superlative.",
          "options": [
            "She is the goodest friend.",
            "She is the bestest friend.",
            "She is the best friend.",
            "She is the most good friend."
          ],
          "answer": 2,
          "explain": "<em>good → the best</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'He is the kindest person ____ my family.'",
          "options": [
            "of",
            "in",
            "at",
            "on"
          ],
          "answer": 1,
          "explain": "Place/group → <em>in</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the superlative.",
          "sentence": "She is the ____ (friendly) girl in our class.",
          "answers": [
            "friendliest"
          ],
          "explain": "<em>friendly → the friendliest</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the superlative.",
          "sentence": "He is the ____ (creative) student in the group.",
          "answers": [
            "most creative"
          ],
          "explain": "Long adjective → <em>the most creative</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct word.",
          "sentence": "She is the best ____ all my friends.",
          "answers": [
            "of"
          ],
          "explain": "Set → <em>of</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative: <em>He is helpful.</em> Use <em>the most</em> (in the class).",
          "answer": [
            "he is the most helpful in the class",
            "he is the most helpful student in the class"
          ],
          "explain": "Long adjective → <em>the most helpful</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative: <em>She is kind.</em> Use <em>the</em> (in my family).",
          "answer": [
            "she is the kindest in my family",
            "she is the kindest person in my family"
          ],
          "explain": "<em>kind → the kindest</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative with an irregular form: <em>This is good advice.</em> Use <em>the</em>.",
          "answer": [
            "this is the best advice"
          ],
          "explain": "<em>good → the best</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the superlative.",
          "given": "He is the most friendliest boy in school.",
          "answer": [
            "he is the friendliest boy in school"
          ],
          "explain": "No double superlative."
        },
        {
          "type": "error",
          "prompt": "Correct the missing article.",
          "given": "She is kindest person I know.",
          "answer": [
            "she is the kindest person i know"
          ],
          "explain": "Superlatives take <em>the</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "is",
            "the",
            "kindest",
            "person",
            "in",
            "my",
            "family"
          ],
          "answer": "She is the kindest person in my family",
          "explain": "<em>the kindest</em> + <em>in</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "He",
            "is",
            "the",
            "most",
            "helpful",
            "of",
            "all"
          ],
          "answer": "He is the most helpful of all",
          "explain": "<em>the most helpful</em> + <em>of</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its superlative.",
          "pairs": [
            {
              "l": "friendly",
              "r": "the friendliest"
            },
            {
              "l": "helpful",
              "r": "the most helpful"
            },
            {
              "l": "good",
              "r": "the best"
            }
          ],
          "explain": "Short → <em>-est</em>; long → <em>the most</em>; irregular differs."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct superlative.",
          "options": [
            "He is the most politest student.",
            "He is the politest student.",
            "He is the politest-est student.",
            "He is politest student."
          ],
          "answer": 1,
          "explain": "<em>the politest</em>; no double superlative."
        },
        {
          "type": "mcq",
          "prompt": "Which long adjective is correct?",
          "options": [
            "She is the creativest girl.",
            "She is the most creative girl.",
            "She is the more creative girl.",
            "She is the creative most girl."
          ],
          "answer": 1,
          "explain": "Long adjective → <em>the most creative</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct irregular superlative.",
          "options": [
            "It was the baddest day.",
            "It was the worst day.",
            "It was the most bad day.",
            "It was the worstest day."
          ],
          "answer": 1,
          "explain": "<em>bad → the worst</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'She is the friendliest girl ____ the group.'",
          "options": [
            "of",
            "in",
            "at",
            "on"
          ],
          "answer": 1,
          "explain": "Group → <em>in</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the superlative.",
          "sentence": "He is the ____ (kind) person I know.",
          "answers": [
            "kindest"
          ],
          "explain": "<em>kind → the kindest</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the superlative.",
          "sentence": "She is the ____ (helpful) member of the team.",
          "answers": [
            "most helpful"
          ],
          "explain": "Long adjective → <em>the most helpful</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct word.",
          "sentence": "He is the funniest ____ the three brothers.",
          "answers": [
            "of"
          ],
          "explain": "Set → <em>of</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative: <em>She is creative.</em> Use <em>the most</em> (in the class).",
          "answer": [
            "she is the most creative in the class",
            "she is the most creative student in the class"
          ],
          "explain": "Long adjective → <em>the most creative</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative: <em>He is polite.</em> Use <em>the</em> (of all).",
          "answer": [
            "he is the politest of all"
          ],
          "explain": "<em>polite → the politest</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative with an irregular form: <em>This is a bad excuse.</em> Use <em>the</em>.",
          "answer": [
            "this is the worst excuse"
          ],
          "explain": "<em>bad → the worst</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the superlative.",
          "given": "She is the most kindest girl in class.",
          "answer": [
            "she is the kindest girl in class"
          ],
          "explain": "No double superlative."
        },
        {
          "type": "error",
          "prompt": "Correct the missing article.",
          "given": "He is most helpful student here.",
          "answer": [
            "he is the most helpful student here"
          ],
          "explain": "Superlatives take <em>the</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "He",
            "is",
            "the",
            "most",
            "creative",
            "student",
            "in",
            "class"
          ],
          "answer": "He is the most creative student in class",
          "explain": "<em>the most creative</em> + <em>in</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "is",
            "the",
            "friendliest",
            "of",
            "the",
            "three"
          ],
          "answer": "She is the friendliest of the three",
          "explain": "<em>the friendliest</em> + <em>of</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its superlative.",
          "pairs": [
            {
              "l": "kind",
              "r": "the kindest"
            },
            {
              "l": "creative",
              "r": "the most creative"
            },
            {
              "l": "bad",
              "r": "the worst"
            }
          ],
          "explain": "Short → <em>-est</em>; long → <em>the most</em>; irregular differs."
        }
      ]
    },
    "t2s5_L4_presentCont": {
      "id": "t2s5_L4_presentCont",
      "code": "Extension",
      "title": "Present Continuous",
      "chapter": "Chapter 3 — Nearest and Dearest",
      "week": "Week 1 · Staying Connected (teacher extension)",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.F.2.1",
      "source_ccg": "Teacher extension — themed to Chapter 3 (Nearest and Dearest); not a separate CCG grammar code.",
      "vocabulary": [
        "post online",
        "update",
        "keep in touch",
        "socialize",
        "connect",
        "text",
        "grow up",
        "chat"
      ],
      "explanation": [
        "<p>The <b>present continuous</b> describes actions happening <b>now</b> or around now. Form: <b>am/is/are + verb-ing</b>. <i>She <b>is posting</b> photos online. They <b>are texting</b> their friends.</i></p>",
        "<p>Spelling: <i>make → making</i>, <i>chat → chatting</i>, <i>study → studying</i>. Time words like <i>now, at the moment, today, this week</i> signal the present continuous, unlike the present simple (<i>every day, usually</i>).</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "She is posting an update right now."
        },
        {
          "type": "correct",
          "text": "They are chatting online at the moment."
        },
        {
          "type": "correct",
          "text": "We are staying in touch this week."
        },
        {
          "type": "correct",
          "text": "He is socializing with old friends today."
        },
        {
          "type": "incorrect",
          "text": "She is post photos now. (missing -ing)"
        }
      ],
      "mistakes": [
        "Forgetting <em>-ing</em>: <em>She is post</em> instead of <em>She is post<u>ing</u></em>.",
        "Dropping the auxiliary: <em>They texting</em> instead of <em>They <u>are</u> texting</em>.",
        "Using the present simple for a now action: <em>She posts right now</em> instead of <em>She is posting right now</em>."
      ],
      "traps": [
        "Form is <em>am/is/are + verb-ing</em>; never leave out the <em>am/is/are</em>.",
        "Spelling shifts: <em>chat → chatting</em>, <em>make → making</em>.",
        "Time words <em>now, today, at the moment</em> point to the present continuous."
      ],
      "arabicInsight": "<p>المضارع المستمر يصف فعلًا يحدث <b>الآن</b>، وصيغته <b>am/is/are + فعل‑ing</b> (<i>She is posting now</i>). لا نحذف <i>am/is/are</i> ولا حرف <i>-ing</i>. وكلمات مثل <i>now, today, at the moment</i> تدل عليه. (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct present continuous.",
          "options": [
            "She is post photos now.",
            "She is posting photos now.",
            "She posting photos now.",
            "She post photos now."
          ],
          "answer": 1,
          "explain": "<em>is + verb-ing</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence has the auxiliary?",
          "options": [
            "They texting their friends.",
            "They are texting their friends.",
            "They texts their friends now.",
            "They to text their friends."
          ],
          "answer": 1,
          "explain": "<em>are + verb-ing</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct spelling.",
          "options": [
            "He is chating online.",
            "He is chatting online.",
            "He is chatt online.",
            "He is chat online."
          ],
          "answer": 1,
          "explain": "<em>chat → chatting</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'We ____ in touch this week.'",
          "options": [
            "stay",
            "are staying",
            "stays",
            "staying"
          ],
          "answer": 1,
          "explain": "This week (now) → present continuous."
        },
        {
          "type": "fill",
          "prompt": "Complete with the present continuous.",
          "sentence": "She ____ (post) an update right now.",
          "answers": [
            "is posting"
          ],
          "explain": "<em>is + verb-ing</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the present continuous.",
          "sentence": "They ____ (chat) online at the moment.",
          "answers": [
            "are chatting"
          ],
          "explain": "<em>are + verb-ing</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct spelling.",
          "sentence": "He ____ (make) a new profile today.",
          "answers": [
            "is making"
          ],
          "explain": "<em>make → making</em>."
        },
        {
          "type": "transform",
          "prompt": "Make present continuous: <em>She / post / photos / now.</em>",
          "answer": [
            "she is posting photos now"
          ],
          "explain": "<em>is + verb-ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Make present continuous: <em>They / text / their friends / today.</em>",
          "answer": [
            "they are texting their friends today"
          ],
          "explain": "<em>are + verb-ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Correct the form: <em>He is socialize with friends now.</em>",
          "answer": [
            "he is socializing with friends now"
          ],
          "explain": "Add <em>-ing</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the present continuous.",
          "given": "We staying in touch this week.",
          "answer": [
            "we are staying in touch this week"
          ],
          "explain": "Add the auxiliary <em>are</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the spelling.",
          "given": "She is chating to her cousin.",
          "answer": [
            "she is chatting to her cousin"
          ],
          "explain": "<em>chat → chatting</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "is",
            "posting",
            "an",
            "update",
            "right",
            "now"
          ],
          "answer": "She is posting an update right now",
          "explain": "<em>is + verb-ing</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "They",
            "are",
            "chatting",
            "online",
            "at",
            "the",
            "moment"
          ],
          "answer": "They are chatting online at the moment",
          "explain": "<em>are + verb-ing</em>."
        },
        {
          "type": "match",
          "prompt": "Match each subject to its auxiliary.",
          "pairs": [
            {
              "l": "I",
              "r": "am posting"
            },
            {
              "l": "She",
              "r": "is posting"
            },
            {
              "l": "They",
              "r": "are posting"
            }
          ],
          "explain": "<em>am/is/are + verb-ing</em>."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct present continuous.",
          "options": [
            "He is text his friend now.",
            "He is texting his friend now.",
            "He texting his friend now.",
            "He text his friend now."
          ],
          "answer": 1,
          "explain": "<em>is + verb-ing</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence has the auxiliary?",
          "options": [
            "We posting our updates.",
            "We are posting our updates.",
            "We posts updates now.",
            "We to post updates."
          ],
          "answer": 1,
          "explain": "<em>are + verb-ing</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct spelling.",
          "options": [
            "They are makeing new friends.",
            "They are making new friends.",
            "They are makking new friends.",
            "They are make new friends."
          ],
          "answer": 1,
          "explain": "<em>make → making</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'She ____ photos at the moment.'",
          "options": [
            "shares",
            "is sharing",
            "share",
            "sharing"
          ],
          "answer": 1,
          "explain": "At the moment → present continuous."
        },
        {
          "type": "fill",
          "prompt": "Complete with the present continuous.",
          "sentence": "They ____ (socialize) online right now.",
          "answers": [
            "are socializing"
          ],
          "explain": "<em>are + verb-ing</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the present continuous.",
          "sentence": "He ____ (post) a comment at the moment.",
          "answers": [
            "is posting"
          ],
          "explain": "<em>is + verb-ing</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct spelling.",
          "sentence": "She ____ (chat) with a friend today.",
          "answers": [
            "is chatting"
          ],
          "explain": "<em>chat → chatting</em>."
        },
        {
          "type": "transform",
          "prompt": "Make present continuous: <em>He / text / a friend / now.</em>",
          "answer": [
            "he is texting a friend now"
          ],
          "explain": "<em>is + verb-ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Make present continuous: <em>We / share / photos / today.</em>",
          "answer": [
            "we are sharing photos today"
          ],
          "explain": "<em>are + verb-ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Correct the form: <em>They is updating their profiles.</em>",
          "answer": [
            "they are updating their profiles"
          ],
          "explain": "Use <em>are</em> with <em>they</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the present continuous.",
          "given": "She posting an update now.",
          "answer": [
            "she is posting an update now"
          ],
          "explain": "Add the auxiliary <em>is</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the spelling.",
          "given": "He is makeing a new account.",
          "answer": [
            "he is making a new account"
          ],
          "explain": "<em>make → making</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "He",
            "is",
            "texting",
            "his",
            "friend",
            "right",
            "now"
          ],
          "answer": "He is texting his friend right now",
          "explain": "<em>is + verb-ing</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "We",
            "are",
            "sharing",
            "photos",
            "online",
            "today"
          ],
          "answer": "We are sharing photos online today",
          "explain": "<em>are + verb-ing</em>."
        },
        {
          "type": "match",
          "prompt": "Match each subject to its auxiliary.",
          "pairs": [
            {
              "l": "I",
              "r": "am chatting"
            },
            {
              "l": "He",
              "r": "is chatting"
            },
            {
              "l": "We",
              "r": "are chatting"
            }
          ],
          "explain": "<em>am/is/are + verb-ing</em>."
        }
      ]
    },
    "t2s5_L5_adjOrder": {
      "id": "t2s5_L5_adjOrder",
      "code": "Extension",
      "title": "Adjective Order (Describing People)",
      "chapter": "Chapter 3 — Nearest and Dearest",
      "week": "Week 2 · Describing People (teacher extension)",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.F.3.1",
      "source_ccg": "Teacher extension — themed to Chapter 3 (Nearest and Dearest); not a separate CCG grammar code.",
      "vocabulary": [
        "tall",
        "short",
        "curly",
        "medium-sized",
        "slender",
        "oval",
        "friendly",
        "stylish"
      ],
      "explanation": [
        "<p>When two or more adjectives describe a person, English follows a usual <b>order</b>: <b>opinion → size → age → shape → colour</b>. So we say <i>a friendly young man</i> (opinion before age), <i>a tall, slim woman</i> (size before shape).</p>",
        "<p>An <b>opinion</b> adjective (friendly, kind, stylish) comes before <b>fact</b> adjectives (tall, young, curly). When two adjectives are the same type, separate them with a <b>comma</b>: <i>a kind, cheerful teacher.</i> Do not add <i>and</i> before a noun.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "She is a friendly young woman."
        },
        {
          "type": "correct",
          "text": "He is a tall, slim man with curly hair."
        },
        {
          "type": "correct",
          "text": "They are kind, helpful neighbours."
        },
        {
          "type": "correct",
          "text": "She has short, curly black hair."
        },
        {
          "type": "incorrect",
          "text": "He is a young friendly man. (fact before opinion)"
        }
      ],
      "mistakes": [
        "Putting a fact before an opinion: <em>a young friendly man</em> instead of <em>a friendly young man</em>.",
        "Adding <em>and</em> before the noun: <em>a tall and slim man</em> instead of <em>a tall, slim man</em>.",
        "Reversing size and shape/colour: <em>a curly tall girl</em> instead of <em>a tall, curly-haired girl</em>."
      ],
      "traps": [
        "Opinion adjectives (<em>friendly, kind, stylish</em>) come first; facts (<em>tall, young, curly</em>) follow.",
        "Separate two same-type adjectives with a comma: <em>a kind, cheerful person</em>.",
        "No <em>and</em> between adjectives before a noun, but use <em>and</em> after <em>be</em>: <em>She is kind and cheerful.</em>"
      ],
      "arabicInsight": "<p>عند اجتماع عدة صفات لوصف الشخص تتبع ترتيبًا: <b>رأي ← حجم ← عمر ← شكل ← لون</b> (<i>a friendly young man</i>). صفة <b>الرأي</b> قبل صفات <b>الحقيقة</b>، ونفصل الصفتين من النوع نفسه بفاصلة، ولا نضع <i>and</i> قبل الاسم. (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct order.",
          "options": [
            "a young friendly man",
            "a friendly young man",
            "a man friendly young",
            "a young man friendly"
          ],
          "answer": 1,
          "explain": "Opinion before age: <em>friendly young</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which order is correct?",
          "options": [
            "a slim tall woman",
            "a tall slim woman",
            "a woman tall slim",
            "a slim woman tall"
          ],
          "answer": 1,
          "explain": "Size before shape: <em>tall slim</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correctly punctuated phrase.",
          "options": [
            "a kind and cheerful teacher",
            "a kind, cheerful teacher",
            "a kind cheerful, teacher",
            "a, kind cheerful teacher"
          ],
          "answer": 1,
          "explain": "Comma between same-type adjectives."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'She has ____ hair.'",
          "options": [
            "curly short black",
            "short, curly black",
            "black curly short",
            "curly black short"
          ],
          "answer": 1,
          "explain": "Size/length before shape before colour."
        },
        {
          "type": "fill",
          "prompt": "Reorder the two adjectives (opinion first).",
          "sentence": "He is a ____ ____ boy. (young / polite)",
          "answers": [
            "polite young"
          ],
          "explain": "Opinion before age."
        },
        {
          "type": "fill",
          "prompt": "Reorder correctly.",
          "sentence": "She is a ____ ____ girl. (tall / slender)",
          "answers": [
            "tall slender"
          ],
          "explain": "Size before shape."
        },
        {
          "type": "fill",
          "prompt": "Add the missing comma between same-type adjectives.",
          "sentence": "She is a kind____ cheerful friend.",
          "answers": [
            ","
          ],
          "explain": "Comma between two opinion adjectives."
        },
        {
          "type": "transform",
          "prompt": "Put in the usual order: <em>friendly / a / man / young</em>",
          "answer": [
            "a friendly young man"
          ],
          "explain": "Opinion before age."
        },
        {
          "type": "transform",
          "prompt": "Put in the usual order: <em>slim / a / tall / woman</em>",
          "answer": [
            "a tall slim woman"
          ],
          "explain": "Size before shape."
        },
        {
          "type": "transform",
          "prompt": "Correct the order: <em>a young kind teacher</em>",
          "answer": [
            "a kind young teacher"
          ],
          "explain": "Opinion before age."
        },
        {
          "type": "error",
          "prompt": "Correct the adjective order.",
          "given": "She is a young friendly woman.",
          "answer": [
            "she is a friendly young woman"
          ],
          "explain": "Opinion before age."
        },
        {
          "type": "error",
          "prompt": "Correct the extra 'and'.",
          "given": "He is a tall and slim man.",
          "answer": [
            "he is a tall slim man",
            "he is a tall, slim man"
          ],
          "explain": "No <em>and</em> between adjectives before a noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "is",
            "a",
            "friendly",
            "young",
            "woman"
          ],
          "answer": "She is a friendly young woman",
          "explain": "Opinion before age."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "He",
            "is",
            "a",
            "tall",
            "slim",
            "man"
          ],
          "answer": "He is a tall slim man",
          "explain": "Size before shape."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its category.",
          "pairs": [
            {
              "l": "friendly",
              "r": "opinion"
            },
            {
              "l": "tall",
              "r": "size"
            },
            {
              "l": "young",
              "r": "age"
            }
          ],
          "explain": "Opinion comes before fact categories."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct order.",
          "options": [
            "a serious old man",
            "an old serious man",
            "a man serious old",
            "an old man serious"
          ],
          "answer": 0,
          "explain": "Opinion before age: <em>serious old</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which order is correct?",
          "options": [
            "a curly short style",
            "a short curly hairstyle",
            "a hairstyle short curly",
            "a curly hairstyle short"
          ],
          "answer": 1,
          "explain": "Size/length before shape: <em>short curly</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correctly punctuated phrase.",
          "options": [
            "a polite and helpful student",
            "a polite, helpful student",
            "a polite helpful, student",
            "a, polite helpful student"
          ],
          "answer": 1,
          "explain": "Comma between same-type adjectives."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'He is a ____ man.'",
          "options": [
            "young confident",
            "confident young",
            "man confident young",
            "young man confident"
          ],
          "answer": 1,
          "explain": "Opinion before age: <em>confident young</em>."
        },
        {
          "type": "fill",
          "prompt": "Reorder the two adjectives (opinion first).",
          "sentence": "She is a ____ ____ woman. (old / kind)",
          "answers": [
            "kind old"
          ],
          "explain": "Opinion before age."
        },
        {
          "type": "fill",
          "prompt": "Reorder correctly.",
          "sentence": "He is a ____ ____ boy. (slim / short)",
          "answers": [
            "short slim"
          ],
          "explain": "Size before shape."
        },
        {
          "type": "fill",
          "prompt": "Add the missing comma between same-type adjectives.",
          "sentence": "He is a polite____ friendly classmate.",
          "answers": [
            ","
          ],
          "explain": "Comma between two opinion adjectives."
        },
        {
          "type": "transform",
          "prompt": "Put in the usual order: <em>confident / a / woman / young</em>",
          "answer": [
            "a confident young woman"
          ],
          "explain": "Opinion before age."
        },
        {
          "type": "transform",
          "prompt": "Put in the usual order: <em>slim / a / short / boy</em>",
          "answer": [
            "a short slim boy"
          ],
          "explain": "Size before shape."
        },
        {
          "type": "transform",
          "prompt": "Correct the order: <em>a tall stylish woman</em> → put opinion first.",
          "answer": [
            "a stylish tall woman"
          ],
          "explain": "Opinion (stylish) before size (tall)."
        },
        {
          "type": "error",
          "prompt": "Correct the adjective order.",
          "given": "He is an old serious teacher.",
          "answer": [
            "he is a serious old teacher"
          ],
          "explain": "Opinion before age."
        },
        {
          "type": "error",
          "prompt": "Correct the extra 'and'.",
          "given": "She is a kind and cheerful girl.",
          "answer": [
            "she is a kind cheerful girl",
            "she is a kind, cheerful girl"
          ],
          "explain": "No <em>and</em> between adjectives before a noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "He",
            "is",
            "a",
            "confident",
            "young",
            "man"
          ],
          "answer": "He is a confident young man",
          "explain": "Opinion before age."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "has",
            "short",
            "curly",
            "hair"
          ],
          "answer": "She has short curly hair",
          "explain": "Length before shape."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its category.",
          "pairs": [
            {
              "l": "stylish",
              "r": "opinion"
            },
            {
              "l": "medium-sized",
              "r": "size"
            },
            {
              "l": "oval",
              "r": "shape"
            }
          ],
          "explain": "Opinion comes before fact categories."
        }
      ]
    },
    "t2s5_L6_modalsAdvice": {
      "id": "t2s5_L6_modalsAdvice",
      "code": "G.8.1",
      "title": "Modals for Advice",
      "chapter": "Chapter 4 — Get Well Soon!",
      "week": "Week 3 · Health Habits",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.IP.4.1",
      "source_ccg": "CCG Grade 9 General — Term 2 · Chapter 4",
      "vocabulary": [
        "sore",
        "cough",
        "catch a cold",
        "backache",
        "balanced diet",
        "junk food",
        "stress",
        "rest"
      ],
      "explanation": [
        "<p>To give health advice, use <b>should</b> and <b>shouldn't</b> + the <b>base verb</b>: <i>You <b>should</b> rest. You <b>shouldn't</b> eat junk food.</i> <i>ought to</i> means the same as <i>should</i> but keeps <i>to</i>: <i>You ought to see a doctor.</i></p>",
        "<p>Modals never take <i>to</i> (except <i>ought to</i>) and never add <i>-s</i>: <i>She should rest</i>, not <i>should to rest</i> or <i>should rests</i>. Questions invert: <i>Should I take some medicine?</i></p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "You should drink plenty of water."
        },
        {
          "type": "correct",
          "text": "You shouldn't ignore a bad cough."
        },
        {
          "type": "correct",
          "text": "She ought to rest for a few days."
        },
        {
          "type": "correct",
          "text": "Should I see a doctor about this backache?"
        },
        {
          "type": "incorrect",
          "text": "You should to rest more. (to after should)"
        }
      ],
      "mistakes": [
        "Adding <em>to</em> after <em>should</em>: <em>should to rest</em> instead of <em>should <u>rest</u></em>.",
        "Adding <em>-s</em>: <em>She should rests</em> instead of <em>She should <u>rest</u></em>.",
        "Forgetting that <em>ought</em> needs <em>to</em>: <em>ought rest</em> instead of <em>ought <u>to</u> rest</em>."
      ],
      "traps": [
        "<em>should/shouldn't</em> take the base verb (no <em>to</em>); <em>ought</em> takes <em>to</em>.",
        "No <em>-s</em> on the verb after a modal, even with <em>he/she</em>.",
        "Questions invert the modal: <em>Should I…?</em>"
      ],
      "arabicInsight": "<p>لإسداء النصيحة الصحّية نستخدم <b>should/shouldn't + فعل مجرّد</b> (<i>You should rest</i>)، و<b>ought to</b> بالمعنى نفسه لكنه يأخذ <i>to</i>. ولا نضيف <i>to</i> بعد <i>should</i> ولا <i>-s</i> على الفعل. والسؤال بالقلب: <i>Should I…?</i>. (G.8.1 من المنهج).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct advice.",
          "options": [
            "You should to rest more.",
            "You should rest more.",
            "You should rests more.",
            "You should resting more."
          ],
          "answer": 1,
          "explain": "<em>should + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which gives negative advice?",
          "options": [
            "You shouldn't to eat junk food.",
            "You shouldn't eat junk food.",
            "You shouldn't eats junk food.",
            "You shouldn't eating junk food."
          ],
          "answer": 1,
          "explain": "<em>shouldn't + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct 'ought to' form.",
          "options": [
            "You ought see a doctor.",
            "You ought to see a doctor.",
            "You ought to seeing a doctor.",
            "You ought to sees a doctor."
          ],
          "answer": 1,
          "explain": "<em>ought to + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete the question: '____ I take some medicine?'",
          "options": [
            "Do",
            "Should",
            "Am",
            "Have"
          ],
          "answer": 1,
          "explain": "Advice question → <em>Should I…?</em>"
        },
        {
          "type": "fill",
          "prompt": "Complete with a modal of advice.",
          "sentence": "You ____ drink more water when you have a cold.",
          "answers": [
            "should"
          ],
          "explain": "Advice → <em>should</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the base verb.",
          "sentence": "You should ____ (rest) until the fever goes.",
          "answers": [
            "rest"
          ],
          "explain": "Base verb after <em>should</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "You ought ____ see a doctor about that cough.",
          "answers": [
            "to"
          ],
          "explain": "<em>ought to</em>."
        },
        {
          "type": "transform",
          "prompt": "Give advice with <em>should</em>: <em>It is a good idea to rest.</em>",
          "answer": [
            "you should rest"
          ],
          "explain": "Advice → <em>should + base</em>."
        },
        {
          "type": "transform",
          "prompt": "Give negative advice with <em>shouldn't</em>: <em>It is unwise to skip meals.</em>",
          "answer": [
            "you shouldn't skip meals",
            "you should not skip meals"
          ],
          "explain": "Negative advice → <em>shouldn't + base</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a question with <em>should</em>: <em>take some medicine.</em>",
          "answer": [
            "should i take some medicine"
          ],
          "explain": "Advice question → <em>Should I…?</em>"
        },
        {
          "type": "error",
          "prompt": "Correct the modal form.",
          "given": "You should to drink more water.",
          "answer": [
            "you should drink more water"
          ],
          "explain": "No <em>to</em> after <em>should</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal form.",
          "given": "She should rests for a few days.",
          "answer": [
            "she should rest for a few days"
          ],
          "explain": "Base verb after <em>should</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "should",
            "drink",
            "plenty",
            "of",
            "water"
          ],
          "answer": "You should drink plenty of water",
          "explain": "<em>should + base verb</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "shouldn't",
            "ignore",
            "a",
            "bad",
            "cough"
          ],
          "answer": "You shouldn't ignore a bad cough",
          "explain": "<em>shouldn't + base verb</em>."
        },
        {
          "type": "match",
          "prompt": "Match each modal to its use.",
          "pairs": [
            {
              "l": "should",
              "r": "give advice"
            },
            {
              "l": "shouldn't",
              "r": "advise against"
            },
            {
              "l": "ought to",
              "r": "advise (with 'to')"
            }
          ],
          "explain": "Advice modals take the base verb."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct advice.",
          "options": [
            "You should to sleep more.",
            "You should sleep more.",
            "You should sleeps more.",
            "You should sleeping more."
          ],
          "answer": 1,
          "explain": "<em>should + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which gives negative advice?",
          "options": [
            "You shouldn't to stay up late.",
            "You shouldn't stay up late.",
            "You shouldn't stays up late.",
            "You shouldn't staying up late."
          ],
          "answer": 1,
          "explain": "<em>shouldn't + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct 'ought to' form.",
          "options": [
            "She ought rest today.",
            "She ought to rest today.",
            "She ought to resting today.",
            "She ought to rests today."
          ],
          "answer": 1,
          "explain": "<em>ought to + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete the question: '____ I call the clinic?'",
          "options": [
            "Do",
            "Should",
            "Am",
            "Have"
          ],
          "answer": 1,
          "explain": "Advice question → <em>Should I…?</em>"
        },
        {
          "type": "fill",
          "prompt": "Complete with a modal of advice.",
          "sentence": "You ____ eat a balanced diet.",
          "answers": [
            "should"
          ],
          "explain": "Advice → <em>should</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the base verb.",
          "sentence": "You shouldn't ____ (eat) so much junk food.",
          "answers": [
            "eat"
          ],
          "explain": "Base verb after <em>shouldn't</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "He ought ____ rest his sore back.",
          "answers": [
            "to"
          ],
          "explain": "<em>ought to</em>."
        },
        {
          "type": "transform",
          "prompt": "Give advice with <em>should</em>: <em>It is a good idea to drink fluids.</em>",
          "answer": [
            "you should drink fluids"
          ],
          "explain": "Advice → <em>should + base</em>."
        },
        {
          "type": "transform",
          "prompt": "Give negative advice with <em>shouldn't</em>: <em>It is unwise to ignore the pain.</em>",
          "answer": [
            "you shouldn't ignore the pain",
            "you should not ignore the pain"
          ],
          "explain": "Negative advice → <em>shouldn't + base</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a question with <em>should</em>: <em>see a doctor.</em>",
          "answer": [
            "should i see a doctor"
          ],
          "explain": "Advice question → <em>Should I…?</em>"
        },
        {
          "type": "error",
          "prompt": "Correct the modal form.",
          "given": "You should to rest your sore throat.",
          "answer": [
            "you should rest your sore throat"
          ],
          "explain": "No <em>to</em> after <em>should</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal form.",
          "given": "He should drinks more water.",
          "answer": [
            "he should drink more water"
          ],
          "explain": "Base verb after <em>should</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "should",
            "eat",
            "a",
            "balanced",
            "diet"
          ],
          "answer": "You should eat a balanced diet",
          "explain": "<em>should + base verb</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "shouldn't",
            "skip",
            "your",
            "breakfast"
          ],
          "answer": "You shouldn't skip your breakfast",
          "explain": "<em>shouldn't + base verb</em>."
        },
        {
          "type": "match",
          "prompt": "Match each form to the advice it gives.",
          "pairs": [
            {
              "l": "should rest",
              "r": "a clear recommendation"
            },
            {
              "l": "shouldn't skip",
              "r": "something to avoid"
            },
            {
              "l": "ought to see a doctor",
              "r": "a strong recommendation"
            }
          ],
          "explain": "Advice modals take the base verb."
        }
      ]
    },
    "t2s5_L7_modalsSuggest": {
      "id": "t2s5_L7_modalsSuggest",
      "code": "G.8.1",
      "title": "Modals for Suggestions & Obligation",
      "chapter": "Chapter 4 — Get Well Soon!",
      "week": "Week 4 · Doctor's Orders",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.F.2.1",
      "source_ccg": "CCG Grade 9 General — Term 2 · Chapter 4",
      "vocabulary": [
        "rinse",
        "chew",
        "garlic",
        "peppermint",
        "lie down",
        "steam",
        "home remedy",
        "prescription"
      ],
      "explanation": [
        "<p>To make a <b>suggestion</b>, use <b>could</b> + base verb: <i>You <b>could</b> try a home remedy.</i> To show <b>obligation or necessity</b>, use <b>must</b> (strong, the speaker's authority) or <b>have to</b> (an outside rule): <i>You <b>must</b> finish the medicine. You <b>have to</b> rest.</i></p>",
        "<p>All take the <b>base verb</b> (except <i>have to</i>, which keeps <i>to</i>): <i>could try</i>, <i>must rest</i>, <i>have to drink</i>. <b>mustn't</b> = it is forbidden; <b>don't have to</b> = it isn't necessary — very different meanings.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "You could chew some peppermint for the pain."
        },
        {
          "type": "correct",
          "text": "You must finish the whole prescription."
        },
        {
          "type": "correct",
          "text": "You have to rest for a week."
        },
        {
          "type": "correct",
          "text": "You mustn't skip your medicine."
        },
        {
          "type": "incorrect",
          "text": "You must to rest more. (to after must)"
        }
      ],
      "mistakes": [
        "Adding <em>to</em> after <em>must/could</em>: <em>must to rest</em> instead of <em>must <u>rest</u></em>.",
        "Confusing <em>mustn't</em> (forbidden) with <em>don't have to</em> (not necessary).",
        "Dropping <em>to</em> from <em>have to</em>: <em>have rest</em> instead of <em>have <u>to</u> rest</em>."
      ],
      "traps": [
        "<em>could/must</em> take the base verb (no <em>to</em>); <em>have to</em> keeps <em>to</em>.",
        "<em>could</em> = a gentle suggestion; <em>must/have to</em> = necessity.",
        "<em>mustn't</em> = prohibition; <em>don't have to</em> = no obligation."
      ],
      "arabicInsight": "<p>للاقتراح نستخدم <b>could + فعل مجرّد</b> (<i>You could try</i>)، وللالتزام/الضرورة <b>must</b> (سلطة المتكلّم) أو <b>have to</b> (قاعدة خارجية). ويأخذ <i>have to</i> حرف <i>to</i>. و<b>mustn't</b> تعني المنع، أمّا <b>don't have to</b> فتعني عدم الضرورة. (G.8.1 من المنهج).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct suggestion.",
          "options": [
            "You could to try peppermint.",
            "You could try peppermint.",
            "You could tries peppermint.",
            "You could trying peppermint."
          ],
          "answer": 1,
          "explain": "<em>could + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which shows necessity (an outside rule)?",
          "options": [
            "You could rest.",
            "You have to rest.",
            "You might rest.",
            "You can rest."
          ],
          "answer": 1,
          "explain": "Necessity → <em>have to</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct prohibition.",
          "options": [
            "You mustn't skip your medicine.",
            "You don't have to skip your medicine.",
            "You could skip your medicine.",
            "You shouldn't to skip your medicine."
          ],
          "answer": 0,
          "explain": "Prohibition → <em>mustn't</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'You ____ finish the whole prescription.'",
          "options": [
            "could",
            "might",
            "must",
            "may"
          ],
          "answer": 2,
          "explain": "Strong necessity → <em>must</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a modal of suggestion.",
          "sentence": "You ____ chew some garlic for a sore throat.",
          "answers": [
            "could"
          ],
          "explain": "Suggestion → <em>could</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "You have ____ rest for a few days.",
          "answers": [
            "to"
          ],
          "explain": "<em>have to</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the base verb.",
          "sentence": "You must ____ (drink) plenty of fluids.",
          "answers": [
            "drink"
          ],
          "explain": "Base verb after <em>must</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a suggestion with <em>could</em>: <em>One option is to try steam.</em>",
          "answer": [
            "you could try steam"
          ],
          "explain": "Suggestion → <em>could + base</em>."
        },
        {
          "type": "transform",
          "prompt": "Show necessity with <em>have to</em>: <em>It is necessary to rest.</em>",
          "answer": [
            "you have to rest"
          ],
          "explain": "Necessity → <em>have to</em>."
        },
        {
          "type": "transform",
          "prompt": "Show prohibition with <em>mustn't</em>: <em>It is forbidden to skip the medicine.</em>",
          "answer": [
            "you mustn't skip the medicine",
            "you must not skip the medicine"
          ],
          "explain": "Prohibition → <em>mustn't</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal form.",
          "given": "You must to finish the medicine.",
          "answer": [
            "you must finish the medicine"
          ],
          "explain": "No <em>to</em> after <em>must</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal form.",
          "given": "You could to lie down for a while.",
          "answer": [
            "you could lie down for a while"
          ],
          "explain": "No <em>to</em> after <em>could</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "could",
            "try",
            "a",
            "home",
            "remedy"
          ],
          "answer": "You could try a home remedy",
          "explain": "<em>could + base verb</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "have",
            "to",
            "finish",
            "the",
            "whole",
            "prescription"
          ],
          "answer": "You have to finish the whole prescription",
          "explain": "<em>have to + base verb</em>."
        },
        {
          "type": "match",
          "prompt": "Match each modal to its use.",
          "pairs": [
            {
              "l": "could",
              "r": "a gentle suggestion"
            },
            {
              "l": "must",
              "r": "strong necessity"
            },
            {
              "l": "mustn't",
              "r": "prohibition"
            }
          ],
          "explain": "Suggestion vs obligation modals."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct suggestion.",
          "options": [
            "You could to rinse with salt water.",
            "You could rinse with salt water.",
            "You could rinses with salt water.",
            "You could rinsing with salt water."
          ],
          "answer": 1,
          "explain": "<em>could + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which shows necessity (an outside rule)?",
          "options": [
            "You could lie down.",
            "You have to lie down.",
            "You might lie down.",
            "You can lie down."
          ],
          "answer": 1,
          "explain": "Necessity → <em>have to</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence shows it is NOT necessary?",
          "options": [
            "You mustn't bring your own medicine.",
            "You don't have to bring your own medicine.",
            "You must bring your own medicine.",
            "You could not bring your own medicine."
          ],
          "answer": 1,
          "explain": "Not necessary → <em>don't have to</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'You ____ take the medicine on time.'",
          "options": [
            "could",
            "might",
            "must",
            "may"
          ],
          "answer": 2,
          "explain": "Strong necessity → <em>must</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a modal of suggestion.",
          "sentence": "You ____ drink peppermint tea for the pain.",
          "answers": [
            "could"
          ],
          "explain": "Suggestion → <em>could</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "You have ____ see a doctor first.",
          "answers": [
            "to"
          ],
          "explain": "<em>have to</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the base verb.",
          "sentence": "You must ____ (rest) until you feel better.",
          "answers": [
            "rest"
          ],
          "explain": "Base verb after <em>must</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a suggestion with <em>could</em>: <em>One option is to chew garlic.</em>",
          "answer": [
            "you could chew garlic"
          ],
          "explain": "Suggestion → <em>could + base</em>."
        },
        {
          "type": "transform",
          "prompt": "Show necessity with <em>have to</em>: <em>It is necessary to take the medicine.</em>",
          "answer": [
            "you have to take the medicine"
          ],
          "explain": "Necessity → <em>have to</em>."
        },
        {
          "type": "transform",
          "prompt": "Show prohibition with <em>mustn't</em>: <em>It is forbidden to stop the treatment early.</em>",
          "answer": [
            "you mustn't stop the treatment early",
            "you must not stop the treatment early"
          ],
          "explain": "Prohibition → <em>mustn't</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal form.",
          "given": "You must to take the medicine now.",
          "answer": [
            "you must take the medicine now"
          ],
          "explain": "No <em>to</em> after <em>must</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal form.",
          "given": "You could to lie down and rest.",
          "answer": [
            "you could lie down and rest"
          ],
          "explain": "No <em>to</em> after <em>could</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "could",
            "chew",
            "some",
            "peppermint",
            "leaves"
          ],
          "answer": "You could chew some peppermint leaves",
          "explain": "<em>could + base verb</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "mustn't",
            "share",
            "your",
            "medicine",
            "with",
            "others"
          ],
          "answer": "You mustn't share your medicine with others",
          "explain": "<em>mustn't + base verb</em>."
        },
        {
          "type": "match",
          "prompt": "Match each modal to its use.",
          "pairs": [
            {
              "l": "could",
              "r": "a soft suggestion"
            },
            {
              "l": "have to",
              "r": "an outside rule"
            },
            {
              "l": "mustn't",
              "r": "it is forbidden"
            }
          ],
          "explain": "Suggestion vs obligation modals."
        }
      ]
    },
    "t2s5_L8_subordConj": {
      "id": "t2s5_L8_subordConj",
      "code": "G.6.2",
      "title": "Subordinating Conjunctions",
      "chapter": "Chapter 4 — Get Well Soon!",
      "week": "Week 4 · Are Home Remedies Safe?",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.WR.P.1.1",
      "source_ccg": "CCG Grade 9 General — Term 2 · Chapter 4",
      "vocabulary": [
        "home remedy",
        "cure",
        "treatment",
        "soothe",
        "sunburn",
        "harsh",
        "stuffy nose",
        "humidity"
      ],
      "explanation": [
        "<p>A <b>subordinating conjunction</b> joins a <b>dependent clause</b> to a main clause and shows the link: reason (<i>because, since</i>), contrast (<i>although, even though</i>), time (<i>when, before, after</i>) and condition (<i>if, unless</i>). The dependent clause cannot stand alone.</p>",
        "<p>When the dependent clause comes <b>first</b>, put a <b>comma</b> after it: <i>Although home remedies are popular, some are unsafe.</i> When it comes second, no comma is usually needed: <i>Some remedies are unsafe although they are popular.</i></p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "Because the burn was minor, she used a home remedy."
        },
        {
          "type": "correct",
          "text": "Although honey can soothe a cough, it is not a cure."
        },
        {
          "type": "correct",
          "text": "Use a cool cloth when you have a sunburn."
        },
        {
          "type": "correct",
          "text": "Unless the symptoms improve, you should see a doctor."
        },
        {
          "type": "incorrect",
          "text": "Although the remedy is popular, but it can be harsh. (although + but)"
        }
      ],
      "mistakes": [
        "Pairing <em>although</em> with <em>but</em>: <em>Although it works, but…</em> instead of <em>Although it works, …</em>.",
        "Leaving a dependent clause alone: <em>Because it was minor.</em> (a fragment).",
        "Forgetting the comma after a front dependent clause."
      ],
      "traps": [
        "<em>although/even though</em> show contrast and never combine with <em>but</em>.",
        "Put a comma after a front dependent clause; omit it when the clause comes last.",
        "<em>because</em> answers <em>why</em>; <em>although</em> shows a surprising contrast; <em>unless</em> = if … not."
      ],
      "arabicInsight": "<p>أداة الربط التابعة تصل <b>جملة تابعة</b> بالجملة الرئيسة وتبيّن العلاقة: السبب (<i>because</i>)، التضاد (<i>although</i>)، الزمن (<i>when</i>)، الشرط (<i>unless</i>). فاصلة بعد الجملة التابعة إذا تصدّرت، ولا نجمع <i>although</i> مع <i>but</i>. (G.6.2 من المنهج).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the contrast conjunction.",
          "options": [
            "Because honey is sweet, it is a cure.",
            "Although honey is soothing, it is not a cure.",
            "So honey is soothing, it is a cure.",
            "Or honey is soothing, it is a cure."
          ],
          "answer": 1,
          "explain": "Contrast → <em>although</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which avoids the double connector?",
          "options": [
            "Although it helps, but it is risky.",
            "Although it helps, it is risky.",
            "Although it helps so it is risky.",
            "Because it helps, but it is risky."
          ],
          "answer": 1,
          "explain": "No <em>but</em> after <em>although</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete (reason): '____ the burn was minor, she treated it at home.'",
          "options": [
            "Although",
            "Because",
            "Unless",
            "Or"
          ],
          "answer": 1,
          "explain": "Reason → <em>because</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct comma use.",
          "options": [
            "When you have a fever rest in bed.",
            "When you have a fever, rest in bed.",
            "When you have a fever, rest, in bed.",
            "When, you have a fever rest in bed."
          ],
          "answer": 1,
          "explain": "Front clause + comma."
        },
        {
          "type": "fill",
          "prompt": "Complete with a contrast conjunction.",
          "sentence": "____ the remedy is popular, it can be harsh.",
          "answers": [
            "Although",
            "Even though"
          ],
          "explain": "Contrast at the front."
        },
        {
          "type": "fill",
          "prompt": "Complete with a reason conjunction.",
          "sentence": "She rested ____ she felt dizzy.",
          "answers": [
            "because",
            "since"
          ],
          "explain": "Reason → <em>because</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a condition conjunction.",
          "sentence": "____ the symptoms improve, see a doctor.",
          "answers": [
            "Unless"
          ],
          "explain": "Negative condition → <em>unless</em>."
        },
        {
          "type": "transform",
          "prompt": "Join with a contrast conjunction: <em>The remedy is popular. It can be harsh.</em> Start with <em>Although…</em>",
          "answer": [
            "although the remedy is popular it can be harsh"
          ],
          "explain": "Front contrast + comma."
        },
        {
          "type": "transform",
          "prompt": "Join with a reason conjunction: <em>She stayed home. She had a fever.</em> Use <em>because</em>.",
          "answer": [
            "she stayed home because she had a fever",
            "because she had a fever she stayed home"
          ],
          "explain": "Reason → <em>because</em>."
        },
        {
          "type": "transform",
          "prompt": "Join with a time conjunction: <em>You have a sunburn. Use a cool cloth.</em> Use <em>when</em>.",
          "answer": [
            "when you have a sunburn use a cool cloth",
            "use a cool cloth when you have a sunburn"
          ],
          "explain": "Time → <em>when</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the double connector.",
          "given": "Although honey soothes a cough, but it is not a cure.",
          "answer": [
            "although honey soothes a cough it is not a cure"
          ],
          "explain": "Drop <em>but</em> after <em>although</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the fragment by joining it.",
          "given": "Because the burn was minor. She used a home remedy.",
          "answer": [
            "because the burn was minor she used a home remedy"
          ],
          "explain": "A dependent clause cannot stand alone."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Although",
            "the",
            "remedy",
            "is",
            "popular",
            "it",
            "can",
            "be",
            "harsh"
          ],
          "answer": "Although the remedy is popular it can be harsh",
          "explain": "Front contrast clause."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "rested",
            "because",
            "she",
            "felt",
            "dizzy"
          ],
          "answer": "She rested because she felt dizzy",
          "explain": "Reason clause second, no comma."
        },
        {
          "type": "match",
          "prompt": "Match each conjunction to its relationship.",
          "pairs": [
            {
              "l": "because",
              "r": "reason"
            },
            {
              "l": "although",
              "r": "contrast"
            },
            {
              "l": "unless",
              "r": "condition"
            }
          ],
          "explain": "Each subordinator signals one relationship."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the contrast conjunction.",
          "options": [
            "Because the cream is natural, it is safe.",
            "Even though the cream is natural, it can sting.",
            "So the cream is natural, it is safe.",
            "Or the cream is natural, it is safe."
          ],
          "answer": 1,
          "explain": "Contrast → <em>even though</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which avoids the double connector?",
          "options": [
            "Even though it soothes, but it stings.",
            "Even though it soothes, it stings.",
            "Even though it soothes so it stings.",
            "Because it soothes, but it stings."
          ],
          "answer": 1,
          "explain": "No <em>but</em> after <em>even though</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete (reason): '____ she felt dizzy, she lay down.'",
          "options": [
            "Although",
            "Because",
            "Unless",
            "Or"
          ],
          "answer": 1,
          "explain": "Reason → <em>because</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct comma use.",
          "options": [
            "Before you take it read the label.",
            "Before you take it, read the label.",
            "Before you take it, read, the label.",
            "Before, you take it read the label."
          ],
          "answer": 1,
          "explain": "Front time clause + comma."
        },
        {
          "type": "fill",
          "prompt": "Complete with a contrast conjunction.",
          "sentence": "____ the cure seems simple, it can be unsafe.",
          "answers": [
            "Although",
            "Even though"
          ],
          "explain": "Front contrast."
        },
        {
          "type": "fill",
          "prompt": "Complete with a reason conjunction.",
          "sentence": "He saw a doctor ____ the pain got worse.",
          "answers": [
            "because",
            "since"
          ],
          "explain": "Reason → <em>because</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a condition conjunction.",
          "sentence": "____ you feel better soon, call the clinic.",
          "answers": [
            "Unless"
          ],
          "explain": "Negative condition → <em>unless</em>."
        },
        {
          "type": "transform",
          "prompt": "Join with a contrast conjunction: <em>The treatment is natural. It can sting.</em> Start with <em>Although…</em>",
          "answer": [
            "although the treatment is natural it can sting"
          ],
          "explain": "Front contrast + comma."
        },
        {
          "type": "transform",
          "prompt": "Join with a reason conjunction: <em>He rested. He felt weak.</em> Use <em>because</em>.",
          "answer": [
            "he rested because he felt weak",
            "because he felt weak he rested"
          ],
          "explain": "Reason → <em>because</em>."
        },
        {
          "type": "transform",
          "prompt": "Join with a time conjunction: <em>You feel feverish. Drink fluids.</em> Use <em>when</em>.",
          "answer": [
            "when you feel feverish drink fluids",
            "drink fluids when you feel feverish"
          ],
          "explain": "Time → <em>when</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the double connector.",
          "given": "Although the remedy is common, but it can be harsh.",
          "answer": [
            "although the remedy is common it can be harsh"
          ],
          "explain": "Drop <em>but</em> after <em>although</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the fragment by joining it.",
          "given": "Because she felt dizzy. She sat down.",
          "answer": [
            "because she felt dizzy she sat down"
          ],
          "explain": "Join the dependent clause."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Because",
            "the",
            "burn",
            "was",
            "minor",
            "she",
            "treated",
            "it",
            "at",
            "home"
          ],
          "answer": "Because the burn was minor she treated it at home",
          "explain": "Reason clause first."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Use",
            "a",
            "cool",
            "cloth",
            "when",
            "you",
            "have",
            "sunburn"
          ],
          "answer": "Use a cool cloth when you have sunburn",
          "explain": "Time clause second."
        },
        {
          "type": "match",
          "prompt": "Match each conjunction to its relationship.",
          "pairs": [
            {
              "l": "since",
              "r": "reason"
            },
            {
              "l": "although",
              "r": "contrast"
            },
            {
              "l": "when",
              "r": "time"
            }
          ],
          "explain": "Each subordinator marks one relationship."
        }
      ]
    },
    "t2s5_L9_pastSimple": {
      "id": "t2s5_L9_pastSimple",
      "code": "G.14.1",
      "title": "Past Simple (incl. verb 'to be')",
      "chapter": "Chapter 4 — Get Well Soon!",
      "week": "Week 5 · Complaints, Emergencies & First Aid",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.IP.3.1",
      "source_ccg": "CCG Grade 9 General — Term 2 · Chapter 4",
      "vocabulary": [
        "ache",
        "sore",
        "sprain",
        "dizzy",
        "sunburn",
        "blister",
        "mosquito bite",
        "fever"
      ],
      "explanation": [
        "<p>The <b>past simple</b> describes finished actions in the past. Regular verbs add <b>-ed</b> (<i>walked, sprained</i>); many are irregular (<i>have → had, feel → felt, go → went</i>). The verb <b>to be</b> has its own forms: <b>was</b> (I/he/she/it) and <b>were</b> (you/we/they).</p>",
        "<p>Negatives and questions use <b>did/didn't + base verb</b> (not the -ed form): <i>I <b>didn't sleep</b>. <b>Did</b> you <b>feel</b> dizzy?</i> But <em>to be</em> uses <b>was/were (not)</b> directly: <i>I <b>was</b> sick. <b>Were</b> you tired? She <b>wasn't</b> well.</i></p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "Yesterday I felt dizzy and had a fever."
        },
        {
          "type": "correct",
          "text": "She was sick last week."
        },
        {
          "type": "correct",
          "text": "We weren't at school because we were ill."
        },
        {
          "type": "correct",
          "text": "Did you sprain your ankle?"
        },
        {
          "type": "incorrect",
          "text": "I didn't felt well yesterday. (didn't + past form)"
        }
      ],
      "mistakes": [
        "Using the <em>-ed</em> form after <em>didn't</em>: <em>didn't felt</em> instead of <em>didn't <u>feel</u></em>.",
        "Mixing <em>was/were</em>: <em>We was sick</em> instead of <em>We <u>were</u> sick</em>.",
        "Using <em>did</em> with <em>to be</em>: <em>Did you were tired?</em> instead of <em>Were you tired?</em>"
      ],
      "traps": [
        "After <em>did/didn't</em>, use the <em>base verb</em>: <em>didn't sleep</em>, not <em>didn't slept</em>.",
        "<em>was</em> = I/he/she/it; <em>were</em> = you/we/they.",
        "<em>to be</em> does not use <em>did</em>: <em>Were you…?</em>, <em>She wasn't…</em>."
      ],
      "arabicInsight": "<p>الماضي البسيط يصف أفعالًا منتهية: المنتظمة بـ <b>-ed</b> (<i>walked</i>)، والشاذة لها صيغ خاصة (<i>felt, had, went</i>). والفعل <b>to be</b> له <b>was/were</b>. النفي والسؤال بـ <b>did/didn't + فعل مجرّد</b>، أمّا <i>to be</i> فيستخدم <b>was/were</b> مباشرة. (G.14.1 من المنهج).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct past simple.",
          "options": [
            "Yesterday I feeled dizzy.",
            "Yesterday I felt dizzy.",
            "Yesterday I did felt dizzy.",
            "Yesterday I feel dizzy."
          ],
          "answer": 1,
          "explain": "Irregular: <em>feel → felt</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which uses 'to be' correctly?",
          "options": [
            "We was sick last week.",
            "We were sick last week.",
            "We did be sick last week.",
            "We been sick last week."
          ],
          "answer": 1,
          "explain": "<em>we → were</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct negative.",
          "options": [
            "I didn't slept well.",
            "I didn't sleep well.",
            "I wasn't sleep well.",
            "I don't slept well."
          ],
          "answer": 1,
          "explain": "<em>didn't + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete the question: '____ you feel dizzy?'",
          "options": [
            "Was",
            "Did",
            "Were",
            "Do"
          ],
          "answer": 1,
          "explain": "Action verb question → <em>Did you…?</em>"
        },
        {
          "type": "fill",
          "prompt": "Complete with the past simple.",
          "sentence": "Last week she ____ (have) a bad cough.",
          "answers": [
            "had"
          ],
          "explain": "Irregular: <em>have → had</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with was or were.",
          "sentence": "I ____ very tired after the long day.",
          "answers": [
            "was"
          ],
          "explain": "<em>I → was</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the negative with the base verb.",
          "sentence": "He didn't ____ (sleep) because of the pain.",
          "answers": [
            "sleep"
          ],
          "explain": "<em>didn't + base verb</em>."
        },
        {
          "type": "transform",
          "prompt": "Make past simple: <em>I feel dizzy yesterday.</em>",
          "answer": [
            "i felt dizzy yesterday"
          ],
          "explain": "<em>feel → felt</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a 'to be' sentence in the past: <em>She is sick.</em> (last week)",
          "answer": [
            "she was sick last week"
          ],
          "explain": "<em>is → was</em>."
        },
        {
          "type": "transform",
          "prompt": "Make the negative: <em>I slept well.</em> Use <em>didn't</em>.",
          "answer": [
            "i didn't sleep well",
            "i did not sleep well"
          ],
          "explain": "<em>didn't + base verb</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the past simple.",
          "given": "I didn't felt well yesterday.",
          "answer": [
            "i didn't feel well yesterday"
          ],
          "explain": "<em>didn't + base verb</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the 'to be' form.",
          "given": "We was at the clinic this morning.",
          "answer": [
            "we were at the clinic this morning"
          ],
          "explain": "<em>we → were</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Yesterday",
            "I",
            "felt",
            "dizzy",
            "and",
            "weak"
          ],
          "answer": "Yesterday I felt dizzy and weak",
          "explain": "Past simple of <em>feel</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "was",
            "sick",
            "last",
            "week"
          ],
          "answer": "She was sick last week",
          "explain": "Past <em>to be</em>."
        },
        {
          "type": "match",
          "prompt": "Match each subject to its 'to be' past form.",
          "pairs": [
            {
              "l": "I",
              "r": "was"
            },
            {
              "l": "They",
              "r": "were"
            },
            {
              "l": "She",
              "r": "was"
            }
          ],
          "explain": "<em>was</em> for I/he/she/it; <em>were</em> for you/we/they."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct past simple.",
          "options": [
            "She haved a fever.",
            "She had a fever.",
            "She did had a fever.",
            "She have a fever."
          ],
          "answer": 1,
          "explain": "Irregular: <em>have → had</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which uses 'to be' correctly?",
          "options": [
            "They was at home.",
            "They were at home.",
            "They did be at home.",
            "They been at home."
          ],
          "answer": 1,
          "explain": "<em>they → were</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct negative.",
          "options": [
            "She didn't ate breakfast.",
            "She didn't eat breakfast.",
            "She wasn't eat breakfast.",
            "She doesn't ate breakfast."
          ],
          "answer": 1,
          "explain": "<em>didn't + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete the question: '____ you tired yesterday?'",
          "options": [
            "Did",
            "Was",
            "Were",
            "Do"
          ],
          "answer": 2,
          "explain": "<em>to be</em> question → <em>Were you…?</em>"
        },
        {
          "type": "fill",
          "prompt": "Complete with the past simple.",
          "sentence": "He ____ (go) to the pharmacy yesterday.",
          "answers": [
            "went"
          ],
          "explain": "Irregular: <em>go → went</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with was or were.",
          "sentence": "They ____ at the clinic this morning.",
          "answers": [
            "were"
          ],
          "explain": "<em>they → were</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the negative with the base verb.",
          "sentence": "I didn't ____ (feel) well last night.",
          "answers": [
            "feel"
          ],
          "explain": "<em>didn't + base verb</em>."
        },
        {
          "type": "transform",
          "prompt": "Make past simple: <em>She has a sprained ankle.</em> (yesterday)",
          "answer": [
            "she had a sprained ankle yesterday"
          ],
          "explain": "<em>has → had</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a 'to be' sentence in the past: <em>We are ill.</em> (last week)",
          "answer": [
            "we were ill last week"
          ],
          "explain": "<em>are → were</em>."
        },
        {
          "type": "transform",
          "prompt": "Make the negative: <em>He ate the medicine.</em> Use <em>didn't</em>.",
          "answer": [
            "he didn't eat the medicine",
            "he did not eat the medicine"
          ],
          "explain": "<em>didn't + base verb</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the past simple.",
          "given": "She didn't went to school.",
          "answer": [
            "she didn't go to school"
          ],
          "explain": "<em>didn't + base verb</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the 'to be' form.",
          "given": "I were dizzy this morning.",
          "answer": [
            "i was dizzy this morning"
          ],
          "explain": "<em>I → was</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "He",
            "went",
            "to",
            "the",
            "pharmacy",
            "yesterday"
          ],
          "answer": "He went to the pharmacy yesterday",
          "explain": "Past simple of <em>go</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "They",
            "were",
            "ill",
            "all",
            "weekend"
          ],
          "answer": "They were ill all weekend",
          "explain": "Past <em>to be</em>."
        },
        {
          "type": "match",
          "prompt": "Match each subject to its 'to be' past form.",
          "pairs": [
            {
              "l": "He",
              "r": "was"
            },
            {
              "l": "We",
              "r": "were"
            },
            {
              "l": "You",
              "r": "were"
            }
          ],
          "explain": "<em>was</em> for I/he/she/it; <em>were</em> for you/we/they."
        }
      ]
    },
    "t2s5_L10_frequencyAdv": {
      "id": "t2s5_L10_frequencyAdv",
      "code": "G.2.3",
      "title": "Adverbs of Frequency",
      "chapter": "Chapter 4 — Get Well Soon!",
      "week": "Week 6 · Are You Healthy?",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.RV.CS.3.1",
      "source_ccg": "CCG Grade 9 General — Term 2 · Chapter 4",
      "vocabulary": [
        "always",
        "usually",
        "often",
        "sometimes",
        "seldom",
        "never",
        "breakfast",
        "exercise"
      ],
      "explanation": [
        "<p><b>Adverbs of frequency</b> say how often something happens: <i>always (100%), usually, often, sometimes, seldom/rarely, never (0%)</i>. They are useful for talking about healthy habits.</p>",
        "<p>Position: a frequency adverb goes <b>before the main verb</b> but <b>after the verb <i>be</i></b>: <i>I <b>always</b> eat breakfast.</i> <i>She <b>is never</b> late.</i> Longer phrases like <i>every day</i> or <i>twice a week</i> usually go at the <b>end</b>: <i>I exercise <b>twice a week</b>.</i></p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "I always eat a healthy breakfast."
        },
        {
          "type": "correct",
          "text": "She is never late for training."
        },
        {
          "type": "correct",
          "text": "We sometimes eat junk food."
        },
        {
          "type": "correct",
          "text": "He exercises three times a week."
        },
        {
          "type": "incorrect",
          "text": "I eat always breakfast. (adverb after the main verb)"
        }
      ],
      "mistakes": [
        "Putting the adverb after the main verb: <em>I eat always</em> instead of <em>I <u>always</u> eat</em>.",
        "Putting it before <em>be</em>: <em>She never is late</em> instead of <em>She is <u>never</u> late</em>.",
        "Using a double negative with <em>never</em>: <em>I don't never eat</em> instead of <em>I <u>never</u> eat</em>."
      ],
      "traps": [
        "Frequency adverb goes <em>before</em> the main verb but <em>after</em> <em>be</em>.",
        "<em>never</em> is already negative — do not add <em>don't</em>.",
        "Frequency phrases (<em>every day, twice a week</em>) usually go at the end."
      ],
      "arabicInsight": "<p>ظروف التكرار تبيّن مدى تكرار الفعل: <i>always, usually, often, sometimes, seldom, never</i>. تأتي <b>قبل الفعل الرئيس</b> لكن <b>بعد فعل be</b> (<i>I always eat</i> / <i>She is never late</i>). وعبارات مثل <i>every day</i> تأتي في النهاية. (G.2.3 من المنهج).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct position.",
          "options": [
            "I eat always breakfast.",
            "I always eat breakfast.",
            "Always I eat breakfast late.",
            "I eat breakfast always early."
          ],
          "answer": 1,
          "explain": "Adverb before the main verb."
        },
        {
          "type": "mcq",
          "prompt": "Which is correct with 'be'?",
          "options": [
            "She never is late.",
            "She is never late.",
            "Never she is late.",
            "She is late never."
          ],
          "answer": 1,
          "explain": "Adverb after <em>be</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the sentence without a double negative.",
          "options": [
            "I don't never eat junk food.",
            "I never eat junk food.",
            "I don't eat never junk food.",
            "I never don't eat junk food."
          ],
          "answer": 1,
          "explain": "<em>never</em> is already negative."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'He ____ exercises in the morning.'",
          "options": [
            "is usually",
            "usually",
            "usually is",
            "exercises usually"
          ],
          "answer": 1,
          "explain": "Adverb before the main verb → <em>usually exercises</em>."
        },
        {
          "type": "fill",
          "prompt": "Put the adverb in the right place.",
          "sentence": "She ____ eats vegetables. (always)",
          "answers": [
            "always"
          ],
          "explain": "Before the main verb."
        },
        {
          "type": "fill",
          "prompt": "Put the adverb in the right place with 'be'.",
          "sentence": "He is ____ tired after training. (often)",
          "answers": [
            "often"
          ],
          "explain": "After <em>be</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a frequency phrase at the end.",
          "sentence": "I exercise twice a ____.",
          "answers": [
            "week"
          ],
          "explain": "Frequency phrase at the end."
        },
        {
          "type": "transform",
          "prompt": "Place the adverb correctly: <em>I eat breakfast. (always)</em>",
          "answer": [
            "i always eat breakfast"
          ],
          "explain": "Before the main verb."
        },
        {
          "type": "transform",
          "prompt": "Place the adverb correctly with 'be': <em>She is late. (never)</em>",
          "answer": [
            "she is never late"
          ],
          "explain": "After <em>be</em>."
        },
        {
          "type": "transform",
          "prompt": "Fix the double negative: <em>I don't never skip breakfast.</em>",
          "answer": [
            "i never skip breakfast"
          ],
          "explain": "<em>never</em> is already negative."
        },
        {
          "type": "error",
          "prompt": "Correct the adverb position.",
          "given": "We eat sometimes junk food.",
          "answer": [
            "we sometimes eat junk food"
          ],
          "explain": "Adverb before the main verb."
        },
        {
          "type": "error",
          "prompt": "Correct the adverb position.",
          "given": "She never is late for class.",
          "answer": [
            "she is never late for class"
          ],
          "explain": "Adverb after <em>be</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "I",
            "always",
            "eat",
            "a",
            "healthy",
            "breakfast"
          ],
          "answer": "I always eat a healthy breakfast",
          "explain": "Adverb before the main verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "is",
            "never",
            "late",
            "for",
            "training"
          ],
          "answer": "She is never late for training",
          "explain": "Adverb after <em>be</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adverb to its frequency.",
          "pairs": [
            {
              "l": "always",
              "r": "100%"
            },
            {
              "l": "sometimes",
              "r": "about 50%"
            },
            {
              "l": "never",
              "r": "0%"
            }
          ],
          "explain": "Adverbs of frequency show how often."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct position.",
          "options": [
            "She drinks usually water.",
            "She usually drinks water.",
            "Usually she drinks water often.",
            "She drinks water usually fast."
          ],
          "answer": 1,
          "explain": "Adverb before the main verb."
        },
        {
          "type": "mcq",
          "prompt": "Which is correct with 'be'?",
          "options": [
            "He often is tired.",
            "He is often tired.",
            "Often he is tired.",
            "He is tired often."
          ],
          "answer": 1,
          "explain": "Adverb after <em>be</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the sentence without a double negative.",
          "options": [
            "She doesn't never exercise.",
            "She never exercises.",
            "She doesn't exercise never.",
            "She never doesn't exercise."
          ],
          "answer": 1,
          "explain": "<em>never</em> is already negative."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'They ____ skip breakfast.'",
          "options": [
            "are seldom",
            "seldom",
            "seldom are",
            "skip seldom"
          ],
          "answer": 1,
          "explain": "Adverb before the main verb → <em>seldom skip</em>."
        },
        {
          "type": "fill",
          "prompt": "Put the adverb in the right place.",
          "sentence": "He ____ drinks enough water. (rarely)",
          "answers": [
            "rarely"
          ],
          "explain": "Before the main verb."
        },
        {
          "type": "fill",
          "prompt": "Put the adverb in the right place with 'be'.",
          "sentence": "She is ____ active at the weekend. (usually)",
          "answers": [
            "usually"
          ],
          "explain": "After <em>be</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a frequency phrase at the end.",
          "sentence": "We go for a walk every ____.",
          "answers": [
            "day",
            "morning",
            "evening"
          ],
          "explain": "Frequency phrase at the end."
        },
        {
          "type": "transform",
          "prompt": "Place the adverb correctly: <em>She drinks water. (usually)</em>",
          "answer": [
            "she usually drinks water"
          ],
          "explain": "Before the main verb."
        },
        {
          "type": "transform",
          "prompt": "Place the adverb correctly with 'be': <em>He is tired. (often)</em>",
          "answer": [
            "he is often tired"
          ],
          "explain": "After <em>be</em>."
        },
        {
          "type": "transform",
          "prompt": "Fix the double negative: <em>She doesn't never exercise.</em>",
          "answer": [
            "she never exercises"
          ],
          "explain": "<em>never</em> is already negative."
        },
        {
          "type": "error",
          "prompt": "Correct the adverb position.",
          "given": "They eat often fruit.",
          "answer": [
            "they often eat fruit"
          ],
          "explain": "Adverb before the main verb."
        },
        {
          "type": "error",
          "prompt": "Correct the adverb position.",
          "given": "He always is hungry after sport.",
          "answer": [
            "he is always hungry after sport"
          ],
          "explain": "Adverb after <em>be</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "We",
            "sometimes",
            "eat",
            "too",
            "much",
            "junk",
            "food"
          ],
          "answer": "We sometimes eat too much junk food",
          "explain": "Adverb before the main verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "He",
            "is",
            "usually",
            "tired",
            "after",
            "training"
          ],
          "answer": "He is usually tired after training",
          "explain": "Adverb after <em>be</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adverb to its frequency.",
          "pairs": [
            {
              "l": "usually",
              "r": "most of the time"
            },
            {
              "l": "seldom",
              "r": "not very often"
            },
            {
              "l": "never",
              "r": "0%"
            }
          ],
          "explain": "Adverbs of frequency show how often."
        }
      ]
    },
    "t2s5_L11_imperatives": {
      "id": "t2s5_L11_imperatives",
      "code": "Extension",
      "title": "Imperatives for Instructions",
      "chapter": "Chapter 4 — Get Well Soon!",
      "week": "Week 4 · Doctor's Orders (teacher extension)",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.F.2.1",
      "source_ccg": "Teacher extension — themed to Chapter 4 (Get Well Soon!); not a separate CCG grammar code.",
      "vocabulary": [
        "rinse",
        "chew",
        "lie down",
        "drink",
        "rest",
        "apply",
        "take",
        "soothe"
      ],
      "explanation": [
        "<p>The <b>imperative</b> gives instructions and advice using the <b>base verb</b> with no subject: <i>Rest in bed. Drink plenty of fluids. Take the medicine twice a day.</i> It is the natural form for doctor's orders and remedy steps.</p>",
        "<p>The negative is <b>Don't + base verb</b>: <i>Don't scratch the bite.</i> For a shared suggestion use <b>Let's + base verb</b>: <i>Let's check your temperature.</i> Adding <i>please</i> softens it: <i>Please lie down.</i></p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "Drink plenty of warm fluids."
        },
        {
          "type": "correct",
          "text": "Don't scratch the mosquito bite."
        },
        {
          "type": "correct",
          "text": "Rinse your mouth with warm salt water."
        },
        {
          "type": "correct",
          "text": "Take this medicine after meals."
        },
        {
          "type": "incorrect",
          "text": "You to rest in bed. (subject + to before the verb)"
        }
      ],
      "mistakes": [
        "Adding a subject: <em>You rest in bed</em> when the instruction needs just <em>Rest in bed</em>.",
        "Using <em>to</em>: <em>To drink fluids</em> instead of <em>Drink fluids</em>.",
        "Forming the negative wrongly: <em>Not scratch it</em> instead of <em>Don't scratch it</em>."
      ],
      "traps": [
        "An imperative has <em>no subject</em> and uses the base verb: <em>Rest</em>, not <em>You rest</em>.",
        "The negative is <em>Don't + base verb</em>.",
        "<em>Let's + base verb</em> makes a suggestion that includes the speaker."
      ],
      "arabicInsight": "<p>صيغة الأمر للتعليمات والنصائح تستخدم <b>الفعل المجرّد دون فاعل</b>: <i>Rest in bed. Drink fluids.</i> والنفي بـ <b>Don't + فعل</b>، والاقتراح المشترك بـ <b>Let's + فعل</b>. (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct imperative.",
          "options": [
            "You rest in bed today.",
            "To rest in bed today.",
            "Rest in bed today.",
            "Resting in bed today."
          ],
          "answer": 2,
          "explain": "Base verb, no subject."
        },
        {
          "type": "mcq",
          "prompt": "Which negative imperative is correct?",
          "options": [
            "Not scratch the bite.",
            "Don't scratch the bite.",
            "Doesn't scratch the bite.",
            "No scratch the bite."
          ],
          "answer": 1,
          "explain": "Negative → <em>Don't + base</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the shared suggestion.",
          "options": [
            "Let's check your temperature.",
            "Let check your temperature.",
            "Lets to check your temperature.",
            "Let's checking your temperature."
          ],
          "answer": 0,
          "explain": "<em>Let's + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: '____ plenty of warm fluids.'",
          "options": [
            "Drinking",
            "To drink",
            "Drink",
            "Drinks"
          ],
          "answer": 2,
          "explain": "Base-verb imperative."
        },
        {
          "type": "fill",
          "prompt": "Complete with an imperative.",
          "sentence": "____ (rinse) your mouth with salt water.",
          "answers": [
            "Rinse"
          ],
          "explain": "Base verb, no subject."
        },
        {
          "type": "fill",
          "prompt": "Complete the negative imperative.",
          "sentence": "____ (not / scratch) the sunburn.",
          "answers": [
            "Don't scratch",
            "Do not scratch"
          ],
          "explain": "<em>Don't + base</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with 'Let's'.",
          "sentence": "____ (take) your temperature now.",
          "answers": [
            "Let's take",
            "Lets take"
          ],
          "explain": "<em>Let's + base verb</em>."
        },
        {
          "type": "transform",
          "prompt": "Make an imperative: <em>You should rest in bed.</em>",
          "answer": [
            "rest in bed"
          ],
          "explain": "Drop the subject and modal."
        },
        {
          "type": "transform",
          "prompt": "Make a negative imperative: <em>You shouldn't scratch the bite.</em>",
          "answer": [
            "don't scratch the bite",
            "do not scratch the bite"
          ],
          "explain": "<em>Don't + base</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a 'Let's' suggestion: <em>We should check the symptoms.</em>",
          "answer": [
            "let's check the symptoms",
            "lets check the symptoms"
          ],
          "explain": "<em>Let's + base verb</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the imperative.",
          "given": "You to drink plenty of water.",
          "answer": [
            "drink plenty of water"
          ],
          "explain": "No subject, no <em>to</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the negative.",
          "given": "Not take the medicine on an empty stomach.",
          "answer": [
            "don't take the medicine on an empty stomach"
          ],
          "explain": "<em>Don't + base</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct imperative.",
          "bank": [
            "Drink",
            "plenty",
            "of",
            "warm",
            "fluids"
          ],
          "answer": "Drink plenty of warm fluids",
          "explain": "Base-verb instruction."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct imperative.",
          "bank": [
            "Don't",
            "scratch",
            "the",
            "mosquito",
            "bite"
          ],
          "answer": "Don't scratch the mosquito bite",
          "explain": "Negative imperative."
        },
        {
          "type": "match",
          "prompt": "Match each type to its form.",
          "pairs": [
            {
              "l": "instruction",
              "r": "Rest in bed."
            },
            {
              "l": "negative",
              "r": "Don't scratch it."
            },
            {
              "l": "suggestion",
              "r": "Let's check."
            }
          ],
          "explain": "Base verb; <em>Don't</em>; <em>Let's</em>."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct imperative.",
          "options": [
            "You take the medicine now.",
            "To take the medicine now.",
            "Take the medicine now.",
            "Taking the medicine now."
          ],
          "answer": 2,
          "explain": "Base verb, no subject."
        },
        {
          "type": "mcq",
          "prompt": "Which negative imperative is correct?",
          "options": [
            "Not skip your medicine.",
            "Don't skip your medicine.",
            "Doesn't skip your medicine.",
            "No skip your medicine."
          ],
          "answer": 1,
          "explain": "Negative → <em>Don't + base</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the shared suggestion.",
          "options": [
            "Let's call the clinic.",
            "Let call the clinic.",
            "Lets to call the clinic.",
            "Let's calling the clinic."
          ],
          "answer": 0,
          "explain": "<em>Let's + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: '____ in bed and rest.'",
          "options": [
            "Lying",
            "To lie",
            "Lie",
            "Lies"
          ],
          "answer": 2,
          "explain": "Base-verb imperative."
        },
        {
          "type": "fill",
          "prompt": "Complete with an imperative.",
          "sentence": "____ (chew) the tablet slowly.",
          "answers": [
            "Chew"
          ],
          "explain": "Base verb."
        },
        {
          "type": "fill",
          "prompt": "Complete the negative imperative.",
          "sentence": "____ (not / touch) the burn.",
          "answers": [
            "Don't touch",
            "Do not touch"
          ],
          "explain": "<em>Don't + base</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with 'Let's'.",
          "sentence": "____ (check) your symptoms together.",
          "answers": [
            "Let's check",
            "Lets check"
          ],
          "explain": "<em>Let's + base verb</em>."
        },
        {
          "type": "transform",
          "prompt": "Make an imperative: <em>You should drink warm water.</em>",
          "answer": [
            "drink warm water"
          ],
          "explain": "Drop subject and modal."
        },
        {
          "type": "transform",
          "prompt": "Make a negative imperative: <em>You shouldn't touch the burn.</em>",
          "answer": [
            "don't touch the burn",
            "do not touch the burn"
          ],
          "explain": "<em>Don't + base</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a 'Let's' suggestion: <em>We should rest for a while.</em>",
          "answer": [
            "let's rest for a while",
            "lets rest for a while"
          ],
          "explain": "<em>Let's + base verb</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the imperative.",
          "given": "You to lie down for a while.",
          "answer": [
            "lie down for a while"
          ],
          "explain": "No subject, no <em>to</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the negative.",
          "given": "No scratch the sunburn.",
          "answer": [
            "don't scratch the sunburn"
          ],
          "explain": "<em>Don't + base</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct imperative.",
          "bank": [
            "Rinse",
            "your",
            "mouth",
            "with",
            "warm",
            "water"
          ],
          "answer": "Rinse your mouth with warm water",
          "explain": "Base-verb instruction."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct imperative.",
          "bank": [
            "Don't",
            "take",
            "it",
            "on",
            "an",
            "empty",
            "stomach"
          ],
          "answer": "Don't take it on an empty stomach",
          "explain": "Negative imperative."
        },
        {
          "type": "match",
          "prompt": "Match each type to its form.",
          "pairs": [
            {
              "l": "instruction",
              "r": "Take the medicine."
            },
            {
              "l": "negative",
              "r": "Don't skip it."
            },
            {
              "l": "suggestion",
              "r": "Let's call."
            }
          ],
          "explain": "Base verb; <em>Don't</em>; <em>Let's</em>."
        }
      ]
    }
  }
}
);
