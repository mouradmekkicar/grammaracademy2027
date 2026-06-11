/* ===== Grammar Academy DATA MODULE (authored from official CCG + marked extensions, validated) ===== */
/* Term 2 · AY 2025-26 · Grade 11 General (ENG.07) · Mourad Mekki Teacher Toolkit */
/* Chapter 3 'Let's Hang Out!' + Chapter 4 'Get Up, Go Out, Get Moving!'. 8 lessons / 240 questions. */
/* CCG codes: G.2.2 (Sequencing Adverbs), G.4.3 (Imperatives), G.1.3 (Superlatives). 5 teacher-extension lessons marked 'Extension'. Weeks/vocab from the official CCG. */
GA.register(
{
  "term": "T2-2526",
  "termLabel": "Term 2 · AY 2025–26",
  "grade": "11",
  "stream": "general",
  "streamLabel": "Grade 11 General Pathway",
  "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
  "source": "CCG Grade 11 General — Term 2 · Chapters 3 (Let's Hang Out!) & 4 (Get Up, Go Out, Get Moving!). CCG grammar: G.2.2, G.4.3, G.1.3; the remaining five lessons are teacher extensions (marked 'Extension').",
  "chapters": [
    {
      "id": "ch3",
      "title": "Chapter 3 — Let's Hang Out!",
      "lessons": [
        "t2s7_L1_sequencingAdv",
        "t2s7_L2_preference",
        "t2s7_L3_gerundsInf",
        "t2s7_L4_futurePlans"
      ]
    },
    {
      "id": "ch4",
      "title": "Chapter 4 — Get Up, Go Out, Get Moving!",
      "lessons": [
        "t2s7_L5_imperatives",
        "t2s7_L6_superlatives",
        "t2s7_L7_comparatives",
        "t2s7_L8_adverbsManner"
      ]
    }
  ],
  "lessons": {
    "t2s7_L1_sequencingAdv": {
      "id": "t2s7_L1_sequencingAdv",
      "code": "G.2.2",
      "title": "Sequencing Adverbs",
      "chapter": "Chapter 3 — Let's Hang Out!",
      "week": "Week 2 · Show Me Your Friends!",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.WR.P.3.1",
      "source_ccg": "CCG Grade 10 Advanced / Grade 11 General — Term 2 · Chapter 3",
      "vocabulary": [
        "qualities",
        "characteristics",
        "prove",
        "real friend",
        "strangers",
        "meaningful",
        "connection",
        "trust"
      ],
      "explanation": [
        "<p><b>Sequencing adverbs</b> put events in order so a story or process is easy to follow: <i>first, then, next, after that, later, finally, eventually</i>. They are most useful when you recount how you met a friend or explain a series of steps.</p>",
        "<p>When a sequencing adverb opens a sentence, follow it with a <b>comma</b>: <i>First, we were strangers. Later, we became close.</i> Use <i>first</i> (not <i>firstly</i> in stories) for the opening event and <i>finally</i> or <i>eventually</i> for the last.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "First, we met at a football match. Then, we started talking."
        },
        {
          "type": "correct",
          "text": "After that, we discovered shared characteristics."
        },
        {
          "type": "correct",
          "text": "Eventually, two strangers became real friends."
        },
        {
          "type": "correct",
          "text": "Next, she proved how meaningful the connection was."
        },
        {
          "type": "incorrect",
          "text": "Finally we met, then we talked first. (events out of order, no comma)"
        }
      ],
      "mistakes": [
        "Forgetting the comma after an opening sequencer: <em>First we met</em> instead of <em>First, we met</em>.",
        "Using <em>at last</em> or <em>finally</em> for an early event instead of the final one.",
        "Repeating <em>then</em> for every step instead of varying with <em>after that</em>, <em>next</em>, <em>later</em>."
      ],
      "traps": [
        "<em>finally</em>/<em>eventually</em> mark the <em>last</em> event, not an early one.",
        "Put a comma after a sequencing adverb that opens a sentence: <em>Then, we talked.</em>",
        "<em>at first</em> contrasts a past state with a change (<em>At first I was shy, but later…</em>), unlike plain <em>first</em>."
      ],
      "arabicInsight": "<p>ظروف الترتيب ترتّب الأحداث ليسهل تتبّع القصة أو الخطوات: <i>first, then, next, after that, finally, eventually</i>. عند بدء الجملة بها نضع <b>فاصلة</b> بعدها (<i>First, we met</i>)، ونستخدم <i>finally/eventually</i> للحدث <b>الأخير</b>.</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the best sequencing adverb to start a story.",
          "options": [
            "Finally, we were strangers.",
            "First, we were strangers.",
            "Eventually, we were strangers.",
            "After that, we were strangers."
          ],
          "answer": 1,
          "explain": "The opening event takes <em>first</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence is punctuated correctly?",
          "options": [
            "Then we talked for hours.",
            "Then, we talked for hours.",
            "Then we, talked for hours.",
            "Then we talked, for hours."
          ],
          "answer": 1,
          "explain": "Comma after the opening sequencer."
        },
        {
          "type": "mcq",
          "prompt": "Pick the adverb for the final event.",
          "options": [
            "First",
            "Next",
            "Eventually",
            "Then"
          ],
          "answer": 2,
          "explain": "<em>eventually</em> marks the last event."
        },
        {
          "type": "mcq",
          "prompt": "Complete: '____, we became real friends.'",
          "options": [
            "First",
            "Next",
            "After that",
            "Finally"
          ],
          "answer": 3,
          "explain": "The closing event → <em>finally</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a sequencing adverb for the first step.",
          "sentence": "____, we met as complete strangers.",
          "answers": [
            "First",
            "At first"
          ],
          "explain": "Opening event → <em>first</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "We chatted; ____ that, we exchanged numbers.",
          "answers": [
            "after"
          ],
          "explain": "<em>after that</em> links the next step."
        },
        {
          "type": "fill",
          "prompt": "Complete the punctuation.",
          "sentence": "Then____ we discovered our shared characteristics.",
          "answers": [
            ","
          ],
          "explain": "Comma after the opening sequencer."
        },
        {
          "type": "transform",
          "prompt": "Add a sequencing adverb to open this final event: <em>We became close friends.</em> Use <em>Eventually</em>.",
          "answer": [
            "eventually we became close friends"
          ],
          "explain": "<em>Eventually</em> + comma for the last event."
        },
        {
          "type": "transform",
          "prompt": "Reorder into a logical sequence using <em>First</em> and <em>Then</em>: <em>We talked. We met.</em>",
          "answer": [
            "first we met then we talked",
            "first we met. then, we talked"
          ],
          "explain": "Met before talked."
        },
        {
          "type": "transform",
          "prompt": "Rewrite varying the sequencer: <em>Then we ate. Then we left.</em> Replace the second <em>Then</em> with <em>After that</em>.",
          "answer": [
            "then we ate after that we left",
            "then we ate. after that, we left"
          ],
          "explain": "Vary repeated <em>then</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the missing comma.",
          "given": "First we were strangers, but we became friends.",
          "answer": [
            "first, we were strangers, but we became friends"
          ],
          "explain": "Comma after opening <em>First</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the sequencing logic.",
          "given": "Finally we met, and then we started talking.",
          "answer": [
            "first we met, and then we started talking"
          ],
          "explain": "The first event should not use <em>finally</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "First",
            "we",
            "met",
            "at",
            "the",
            "club"
          ],
          "answer": "First we met at the club",
          "explain": "Opening sequencer + clause."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Eventually",
            "two",
            "strangers",
            "became",
            "close",
            "friends"
          ],
          "answer": "Eventually two strangers became close friends",
          "explain": "Final-event sequencer."
        },
        {
          "type": "match",
          "prompt": "Match each sequencer to its role.",
          "pairs": [
            {
              "l": "First",
              "r": "the opening event"
            },
            {
              "l": "After that",
              "r": "the next event"
            },
            {
              "l": "Finally",
              "r": "the last event"
            }
          ],
          "explain": "Sequencers order events from first to last."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the best sequencing adverb to start a story.",
          "options": [
            "Eventually, I joined the club.",
            "Finally, I joined the club.",
            "First, I joined the club.",
            "After that, I joined the club."
          ],
          "answer": 2,
          "explain": "Opening event → <em>first</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence is punctuated correctly?",
          "options": [
            "Next we planned a trip.",
            "Next, we planned a trip.",
            "Next we, planned a trip.",
            "Next we planned, a trip."
          ],
          "answer": 1,
          "explain": "Comma after the opening sequencer."
        },
        {
          "type": "mcq",
          "prompt": "Pick the adverb for the final event.",
          "options": [
            "First",
            "After that",
            "Then",
            "Finally"
          ],
          "answer": 3,
          "explain": "<em>finally</em> marks the last event."
        },
        {
          "type": "mcq",
          "prompt": "Complete: '____, we exchanged numbers and stayed in touch.'",
          "options": [
            "Eventually",
            "First",
            "Next",
            "At first"
          ],
          "answer": 0,
          "explain": "Closing event → <em>eventually</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a sequencing adverb for the first step.",
          "sentence": "____, nobody knew anybody at the camp.",
          "answers": [
            "First",
            "At first"
          ],
          "explain": "Opening event."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "We shared a meal; ____ that, we played a game.",
          "answers": [
            "after"
          ],
          "explain": "<em>after that</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the punctuation.",
          "sentence": "Next____ we discovered we liked the same music.",
          "answers": [
            ","
          ],
          "explain": "Comma after the opening sequencer."
        },
        {
          "type": "transform",
          "prompt": "Add a sequencing adverb to open this final event: <em>We promised to keep in touch.</em> Use <em>Finally</em>.",
          "answer": [
            "finally we promised to keep in touch"
          ],
          "explain": "<em>Finally</em> + comma."
        },
        {
          "type": "transform",
          "prompt": "Reorder into a logical sequence using <em>First</em> and <em>Then</em>: <em>We argued. We made up.</em>",
          "answer": [
            "first we argued then we made up",
            "first we argued. then, we made up"
          ],
          "explain": "Argued before made up."
        },
        {
          "type": "transform",
          "prompt": "Rewrite varying the sequencer: <em>Then I called her. Then we met.</em> Replace the second <em>Then</em> with <em>Later</em>.",
          "answer": [
            "then i called her later we met",
            "then i called her. later, we met"
          ],
          "explain": "Vary repeated <em>then</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the missing comma.",
          "given": "Then we discovered our shared interests.",
          "answer": [
            "then, we discovered our shared interests"
          ],
          "explain": "Comma after opening <em>Then</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the sequencing logic.",
          "given": "Eventually we met, and after that we said hello for the first time.",
          "answer": [
            "first we met, and after that we said hello for the first time"
          ],
          "explain": "First meeting should not be <em>eventually</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Then",
            "we",
            "exchanged",
            "our",
            "phone",
            "numbers"
          ],
          "answer": "Then we exchanged our phone numbers",
          "explain": "Sequencer + clause."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Finally",
            "we",
            "promised",
            "to",
            "stay",
            "in",
            "touch"
          ],
          "answer": "Finally we promised to stay in touch",
          "explain": "Final-event sequencer."
        },
        {
          "type": "match",
          "prompt": "Match each sequencer to its role.",
          "pairs": [
            {
              "l": "At first",
              "r": "the starting situation"
            },
            {
              "l": "Next",
              "r": "the following event"
            },
            {
              "l": "Eventually",
              "r": "the final result"
            }
          ],
          "explain": "Sequencers order events in time."
        }
      ]
    },
    "t2s7_L2_preference": {
      "id": "t2s7_L2_preference",
      "code": "Extension",
      "title": "Expressing Preference: would rather / prefer",
      "chapter": "Chapter 3 — Let's Hang Out!",
      "week": "Week 3 · Chill out! (teacher extension)",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.S.F.2.1",
      "source_ccg": "Teacher extension — themed to Chapter 3 (Let's Hang Out!); not a separate CCG grammar code.",
      "vocabulary": [
        "would rather",
        "prefer",
        "keen on",
        "interested in",
        "hang out",
        "I'm all for",
        "awful",
        "terrific"
      ],
      "explanation": [
        "<p>To say what you like more, use <b>would rather</b> + <u>bare infinitive</u> (no <i>to</i>): <i>I'd rather <b>stay</b> in than go out.</i> The comparison uses <b>than</b>.</p>",
        "<p><b>prefer</b> works two ways: <i>prefer + noun/-ing</i> for general taste (<i>I prefer reading</i>; <i>I prefer films to concerts</i>), and <i>prefer to + infinitive</i> for a specific choice (<i>I prefer to stay home tonight</i>). Use <b>to</b> (not <i>than</i>) after <i>prefer</i> when comparing two things.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "I'd rather hang out at home than go to a noisy club."
        },
        {
          "type": "correct",
          "text": "She prefers watching films to going out."
        },
        {
          "type": "correct",
          "text": "I prefer to stay in tonight."
        },
        {
          "type": "correct",
          "text": "We'd rather meet on Friday than on Sunday."
        },
        {
          "type": "incorrect",
          "text": "I would rather to go out tonight. (to after would rather)"
        }
      ],
      "mistakes": [
        "Adding <em>to</em> after <em>would rather</em>: <em>would rather to go</em> instead of <em>would rather <u>go</u></em>.",
        "Using <em>than</em> after <em>prefer</em>: <em>prefer films than concerts</em> instead of <em>prefer films <u>to</u> concerts</em>.",
        "Mixing the patterns: <em>prefer go</em> instead of <em>prefer to go</em> or <em>prefer going</em>."
      ],
      "traps": [
        "<em>would rather</em> takes a bare infinitive and compares with <em>than</em>.",
        "<em>prefer</em> compares with <em>to</em>, not <em>than</em>: <em>prefer X to Y</em>.",
        "<em>I'd rather</em> = <em>I would rather</em>; the negative is <em>I'd rather not</em> (+ bare infinitive)."
      ],
      "arabicInsight": "<p>للتعبير عن التفضيل: <b>would rather + فعل مجرّد</b> والمقارنة بـ <i>than</i> (<i>I'd rather stay than go</i>)، و<b>prefer + اسم/‑ing</b> أو <b>prefer to + مصدر</b>، والمقارنة بعد <i>prefer</i> تكون بـ <b>to</b> لا <i>than</i>. (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct form after 'would rather'.",
          "options": [
            "I'd rather to stay in.",
            "I'd rather staying in.",
            "I'd rather stay in.",
            "I'd rather stays in."
          ],
          "answer": 2,
          "explain": "<em>would rather</em> + bare infinitive."
        },
        {
          "type": "mcq",
          "prompt": "Which comparison word follows 'prefer'?",
          "options": [
            "I prefer films than concerts.",
            "I prefer films to concerts.",
            "I prefer films from concerts.",
            "I prefer films over than concerts."
          ],
          "answer": 1,
          "explain": "<em>prefer X to Y</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct 'prefer' pattern.",
          "options": [
            "I prefer go out.",
            "I prefer to go out.",
            "I prefer to going out.",
            "I prefer goes out."
          ],
          "answer": 1,
          "explain": "<em>prefer to + infinitive</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'We'd rather meet early ____ late.'",
          "options": [
            "to",
            "than",
            "that",
            "as"
          ],
          "answer": 1,
          "explain": "<em>would rather … than</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete after 'would rather'.",
          "sentence": "I'd rather ____ (hang) out with close friends.",
          "answers": [
            "hang"
          ],
          "explain": "Bare infinitive after <em>would rather</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the comparison word.",
          "sentence": "She prefers live music ____ recorded tracks.",
          "answers": [
            "to"
          ],
          "explain": "<em>prefer X to Y</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the 'prefer' pattern.",
          "sentence": "I prefer ____ (read) to watching TV.",
          "answers": [
            "reading"
          ],
          "explain": "<em>prefer + -ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>would rather</em>: <em>I prefer to stay in tonight rather than go out.</em>",
          "answer": [
            "i'd rather stay in tonight than go out",
            "i would rather stay in tonight than go out"
          ],
          "explain": "<em>would rather + bare inf + than</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>prefer … to</em>: <em>She likes hanging out more than studying.</em>",
          "answer": [
            "she prefers hanging out to studying"
          ],
          "explain": "<em>prefer X to Y</em>."
        },
        {
          "type": "transform",
          "prompt": "Make it negative: <em>I'd rather go to the concert.</em> Use <em>not</em>.",
          "answer": [
            "i'd rather not go to the concert",
            "i would rather not go to the concert"
          ],
          "explain": "<em>would rather not + bare inf</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the form.",
          "given": "I would rather to watch a film tonight.",
          "answer": [
            "i would rather watch a film tonight"
          ],
          "explain": "No <em>to</em> after <em>would rather</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison word.",
          "given": "I prefer board games than video games.",
          "answer": [
            "i prefer board games to video games"
          ],
          "explain": "<em>prefer X to Y</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "I",
            "would",
            "rather",
            "stay",
            "in",
            "than",
            "go",
            "out"
          ],
          "answer": "I would rather stay in than go out",
          "explain": "<em>would rather … than</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "prefers",
            "reading",
            "to",
            "watching",
            "television"
          ],
          "answer": "She prefers reading to watching television",
          "explain": "<em>prefer X to Y</em>."
        },
        {
          "type": "match",
          "prompt": "Match each opener to its correct continuation.",
          "pairs": [
            {
              "l": "I'd rather",
              "r": "walk than drive."
            },
            {
              "l": "I prefer tea",
              "r": "to coffee."
            },
            {
              "l": "I prefer",
              "r": "to leave early."
            }
          ],
          "explain": "<em>would rather</em> + bare inf + <em>than</em>; <em>prefer</em> + <em>to</em>."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct form after 'would rather'.",
          "options": [
            "He'd rather to play football.",
            "He'd rather playing football.",
            "He'd rather play football.",
            "He'd rather plays football."
          ],
          "answer": 2,
          "explain": "Bare infinitive after <em>would rather</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which comparison word follows 'prefer'?",
          "options": [
            "I prefer tea than juice.",
            "I prefer tea to juice.",
            "I prefer tea from juice.",
            "I prefer tea over than juice."
          ],
          "answer": 1,
          "explain": "<em>prefer X to Y</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct 'prefer' pattern.",
          "options": [
            "She prefers stay home.",
            "She prefers to stay home.",
            "She prefers to staying home.",
            "She prefers stays home."
          ],
          "answer": 1,
          "explain": "<em>prefer to + infinitive</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'I'd rather text ____ call.'",
          "options": [
            "to",
            "than",
            "that",
            "as"
          ],
          "answer": 1,
          "explain": "<em>would rather … than</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete after 'would rather'.",
          "sentence": "They'd rather ____ (meet) at the café.",
          "answers": [
            "meet"
          ],
          "explain": "Bare infinitive."
        },
        {
          "type": "fill",
          "prompt": "Complete the comparison word.",
          "sentence": "He prefers team sports ____ solo workouts.",
          "answers": [
            "to"
          ],
          "explain": "<em>prefer X to Y</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the 'prefer' pattern.",
          "sentence": "We prefer ____ (hang) out at weekends.",
          "answers": [
            "hanging"
          ],
          "explain": "<em>prefer + -ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>would rather</em>: <em>I prefer to read rather than watch TV.</em>",
          "answer": [
            "i'd rather read than watch tv",
            "i would rather read than watch tv"
          ],
          "explain": "<em>would rather + bare inf + than</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>prefer … to</em>: <em>He likes cycling more than running.</em>",
          "answer": [
            "he prefers cycling to running"
          ],
          "explain": "<em>prefer X to Y</em>."
        },
        {
          "type": "transform",
          "prompt": "Make it negative: <em>I'd rather join the gym.</em> Use <em>not</em>.",
          "answer": [
            "i'd rather not join the gym",
            "i would rather not join the gym"
          ],
          "explain": "<em>would rather not + bare inf</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the form.",
          "given": "She would rather to stay home this evening.",
          "answer": [
            "she would rather stay home this evening"
          ],
          "explain": "No <em>to</em> after <em>would rather</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison word.",
          "given": "I prefer swimming than running.",
          "answer": [
            "i prefer swimming to running"
          ],
          "explain": "<em>prefer X to Y</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "He",
            "would",
            "rather",
            "walk",
            "than",
            "take",
            "the",
            "bus"
          ],
          "answer": "He would rather walk than take the bus",
          "explain": "<em>would rather … than</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "We",
            "prefer",
            "films",
            "to",
            "live",
            "concerts"
          ],
          "answer": "We prefer films to live concerts",
          "explain": "<em>prefer X to Y</em>."
        },
        {
          "type": "match",
          "prompt": "Match each opener to its correct continuation.",
          "pairs": [
            {
              "l": "I'd rather",
              "r": "stay than leave."
            },
            {
              "l": "I prefer coffee",
              "r": "to tea."
            },
            {
              "l": "She prefers",
              "r": "to study alone."
            }
          ],
          "explain": "Patterns: <em>would rather</em> + bare inf; <em>prefer</em> + <em>to</em>."
        }
      ]
    },
    "t2s7_L3_gerundsInf": {
      "id": "t2s7_L3_gerundsInf",
      "code": "Extension",
      "title": "Gerunds & Infinitives after Verbs",
      "chapter": "Chapter 3 — Let's Hang Out!",
      "week": "Week 3 · Chill out! (teacher extension)",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.S.F.2.1",
      "source_ccg": "Teacher extension — themed to Chapter 3 (Let's Hang Out!); not a separate CCG grammar code.",
      "vocabulary": [
        "enjoy",
        "keen on",
        "interested in",
        "hang out",
        "prefer",
        "mind",
        "decide",
        "hope"
      ],
      "explanation": [
        "<p>Some verbs are followed by an <b>-ing form (gerund)</b>: <i>enjoy, avoid, finish, mind, suggest, keep</i>. <i>I <b>enjoy hanging</b> out with friends.</i> Others are followed by a <b>to-infinitive</b>: <i>want, decide, hope, plan, agree, learn</i>. <i>We <b>decided to meet</b> on Friday.</i></p>",
        "<p>The verbs <i>like, love, hate, prefer, start</i> can take <b>either</b> form with little change in meaning: <i>I like swimming = I like to swim.</i> After prepositions (<i>keen <u>on</u></i>, <i>interested <u>in</u></i>), always use the <b>-ing</b> form: <i>keen on playing</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "I enjoy hanging out at the weekend."
        },
        {
          "type": "correct",
          "text": "We decided to watch a film instead."
        },
        {
          "type": "correct",
          "text": "She is keen on meeting new people."
        },
        {
          "type": "correct",
          "text": "They love going to live music events."
        },
        {
          "type": "incorrect",
          "text": "I enjoy to play video games. (to-infinitive after enjoy)"
        }
      ],
      "mistakes": [
        "Using a to-infinitive after <em>enjoy</em>: <em>enjoy to play</em> instead of <em>enjoy <u>playing</u></em>.",
        "Using <em>-ing</em> after <em>want/decide</em>: <em>want going</em> instead of <em>want <u>to go</u></em>.",
        "Using a bare verb after a preposition: <em>keen on play</em> instead of <em>keen on <u>playing</u></em>."
      ],
      "traps": [
        "<em>enjoy, avoid, finish, mind, suggest</em> take <em>-ing</em>; <em>want, decide, hope, plan, agree</em> take <em>to</em>.",
        "A verb after a preposition is always <em>-ing</em>: <em>interested in <u>learning</u></em>.",
        "<em>like/love/hate/prefer</em> accept both forms; <em>would like/love</em> takes <em>to</em> (<em>I'd like to go</em>)."
      ],
      "arabicInsight": "<p>بعض الأفعال يتبعها <b>صيغة ‑ing</b> (enjoy, avoid, finish, mind)، وبعضها يتبعه <b>to + مصدر</b> (want, decide, hope, plan). وبعد حروف الجر (<i>keen on, interested in</i>) نستخدم دائمًا <b>‑ing</b>. والأفعال like/love/hate/prefer تقبل الصيغتين. (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct form after 'enjoy'.",
          "options": [
            "I enjoy to hang out.",
            "I enjoy hang out.",
            "I enjoy hanging out.",
            "I enjoy hangs out."
          ],
          "answer": 2,
          "explain": "<em>enjoy + -ing</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which form follows 'decide'?",
          "options": [
            "We decided meeting later.",
            "We decided to meet later.",
            "We decided meet later.",
            "We decided met later."
          ],
          "answer": 1,
          "explain": "<em>decide + to-infinitive</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct form after a preposition.",
          "options": [
            "She is keen on join the club.",
            "She is keen on to join the club.",
            "She is keen on joining the club.",
            "She is keen on joins the club."
          ],
          "answer": 2,
          "explain": "After a preposition → <em>-ing</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which is correct with 'would like'?",
          "options": [
            "I'd like meeting them.",
            "I'd like to meet them.",
            "I'd like met them.",
            "I'd like meets them."
          ],
          "answer": 1,
          "explain": "<em>would like + to-infinitive</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "I avoid ____ (stay) up too late.",
          "answers": [
            "staying"
          ],
          "explain": "<em>avoid + -ing</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "We hope ____ (see) you soon.",
          "answers": [
            "to see"
          ],
          "explain": "<em>hope + to-infinitive</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "He is interested in ____ (learn) the guitar.",
          "answers": [
            "learning"
          ],
          "explain": "After a preposition → <em>-ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form: <em>enjoy + meet</em> new people.",
          "answer": [
            "i enjoy meeting new people"
          ],
          "explain": "<em>enjoy + -ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form: <em>plan + visit</em> the museum.",
          "answer": [
            "we plan to visit the museum",
            "i plan to visit the museum"
          ],
          "explain": "<em>plan + to-infinitive</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form after a preposition: <em>keen on + play</em> chess.",
          "answer": [
            "i am keen on playing chess",
            "keen on playing chess"
          ],
          "explain": "Preposition → <em>-ing</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "I really enjoy to meet my old friends.",
          "answer": [
            "i really enjoy meeting my old friends"
          ],
          "explain": "<em>enjoy + -ing</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "They want hanging out this weekend.",
          "answer": [
            "they want to hang out this weekend"
          ],
          "explain": "<em>want + to-infinitive</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "We",
            "decided",
            "to",
            "watch",
            "a",
            "film",
            "together"
          ],
          "answer": "We decided to watch a film together",
          "explain": "<em>decide + to-infinitive</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "is",
            "keen",
            "on",
            "meeting",
            "new",
            "people"
          ],
          "answer": "She is keen on meeting new people",
          "explain": "Preposition + <em>-ing</em>."
        },
        {
          "type": "match",
          "prompt": "Match each verb to the form it takes.",
          "pairs": [
            {
              "l": "enjoy",
              "r": "+ -ing"
            },
            {
              "l": "decide",
              "r": "+ to-infinitive"
            },
            {
              "l": "interested in",
              "r": "+ -ing"
            }
          ],
          "explain": "<em>-ing</em> after enjoy/prepositions; <em>to</em> after decide."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct form after 'avoid'.",
          "options": [
            "He avoids to go out late.",
            "He avoids go out late.",
            "He avoids going out late.",
            "He avoids goes out late."
          ],
          "answer": 2,
          "explain": "<em>avoid + -ing</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which form follows 'hope'?",
          "options": [
            "They hope seeing us.",
            "They hope to see us.",
            "They hope see us.",
            "They hope saw us."
          ],
          "answer": 1,
          "explain": "<em>hope + to-infinitive</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct form after a preposition.",
          "options": [
            "I'm interested in join the team.",
            "I'm interested in to join the team.",
            "I'm interested in joining the team.",
            "I'm interested in joins the team."
          ],
          "answer": 2,
          "explain": "Preposition → <em>-ing</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which is correct with 'agree'?",
          "options": [
            "We agreed meeting at six.",
            "We agreed to meet at six.",
            "We agreed meet at six.",
            "We agreed met at six."
          ],
          "answer": 1,
          "explain": "<em>agree + to-infinitive</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "Do you mind ____ (wait) a moment?",
          "answers": [
            "waiting"
          ],
          "explain": "<em>mind + -ing</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "She learned ____ (swim) last summer.",
          "answers": [
            "to swim"
          ],
          "explain": "<em>learn + to-infinitive</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "They are keen on ____ (travel) abroad.",
          "answers": [
            "travelling",
            "traveling"
          ],
          "explain": "After a preposition → <em>-ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form: <em>finish + do</em> the homework.",
          "answer": [
            "i finished doing the homework",
            "we finished doing the homework"
          ],
          "explain": "<em>finish + -ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form: <em>want + join</em> the club.",
          "answer": [
            "i want to join the club",
            "we want to join the club"
          ],
          "explain": "<em>want + to-infinitive</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form after a preposition: <em>interested in + meet</em> people.",
          "answer": [
            "i am interested in meeting people",
            "interested in meeting people"
          ],
          "explain": "Preposition → <em>-ing</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "I avoid to argue with friends.",
          "answer": [
            "i avoid arguing with friends"
          ],
          "explain": "<em>avoid + -ing</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "She decided meeting them downtown.",
          "answer": [
            "she decided to meet them downtown"
          ],
          "explain": "<em>decide + to-infinitive</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "They",
            "agreed",
            "to",
            "meet",
            "after",
            "school"
          ],
          "answer": "They agreed to meet after school",
          "explain": "<em>agree + to-infinitive</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "I",
            "enjoy",
            "spending",
            "time",
            "with",
            "friends"
          ],
          "answer": "I enjoy spending time with friends",
          "explain": "<em>enjoy + -ing</em>."
        },
        {
          "type": "match",
          "prompt": "Match each verb to the form it takes.",
          "pairs": [
            {
              "l": "avoid",
              "r": "+ -ing"
            },
            {
              "l": "hope",
              "r": "+ to-infinitive"
            },
            {
              "l": "keen on",
              "r": "+ -ing"
            }
          ],
          "explain": "<em>-ing</em> after avoid/prepositions; <em>to</em> after hope."
        }
      ]
    },
    "t2s7_L4_futurePlans": {
      "id": "t2s7_L4_futurePlans",
      "code": "Extension",
      "title": "Future for Plans: Present Continuous & 'going to'",
      "chapter": "Chapter 3 — Let's Hang Out!",
      "week": "Week 2 · Making Social Plans (teacher extension)",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.S.IP.2.1",
      "source_ccg": "Teacher extension — themed to Chapter 3 (Let's Hang Out!); not a separate CCG grammar code.",
      "vocabulary": [
        "reservation",
        "box office",
        "show times",
        "cover charge",
        "live music",
        "sci-fi",
        "arrangement",
        "plan"
      ],
      "explanation": [
        "<p>For <b>fixed arrangements</b> (a time and place already agreed), English uses the <b>present continuous</b>: <i>We're <b>meeting</b> at the cinema at seven.</i> It feels personal and already settled.</p>",
        "<p>For <b>intentions and plans</b> (decided, but not fully arranged), use <b>going to + base verb</b>: <i>We're <b>going to watch</b> a sci-fi film.</i> Time words like <i>tonight, this weekend, on Friday</i> signal the future, so you do <u>not</u> add <i>will</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "We're meeting outside the box office at six."
        },
        {
          "type": "correct",
          "text": "I'm going to book a reservation tonight."
        },
        {
          "type": "correct",
          "text": "They're seeing the live music show on Friday."
        },
        {
          "type": "correct",
          "text": "She's going to check the show times later."
        },
        {
          "type": "incorrect",
          "text": "We will meeting at the cinema tonight. (will + -ing)"
        }
      ],
      "mistakes": [
        "Mixing <em>will</em> with <em>-ing</em>: <em>will meeting</em> instead of <em>are meeting</em> or <em>will meet</em>.",
        "Dropping <em>going</em>: <em>I'm to watch a film</em> instead of <em>I'm <u>going to</u> watch</em>.",
        "Using present simple for an arrangement: <em>We meet at seven</em> (timetable feel) instead of <em>We're meeting at seven</em>."
      ],
      "traps": [
        "Present continuous = a fixed arrangement (time/place set); <em>going to</em> = a plan or intention.",
        "Future time words (<em>tonight, on Friday</em>) make the meaning future, so no extra <em>will</em>.",
        "<em>going to</em> needs the base verb after it: <em>going to <u>book</u></em>, never <em>going to booking</em>."
      ],
      "arabicInsight": "<p>للترتيبات <b>المتّفق عليها</b> (زمان ومكان محدّدان) نستخدم <b>المضارع المستمر</b> (<i>We're meeting at seven</i>)، وللنيّات والخطط نستخدم <b>going to + فعل أساسي</b> (<i>We're going to watch a film</i>). وكلمات الزمن المستقبلية تكفي، فلا نضيف <i>will</i>. (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct form for a fixed arrangement.",
          "options": [
            "We will meeting at seven.",
            "We meet at seven (already arranged).",
            "We're meeting at seven.",
            "We meeting at seven."
          ],
          "answer": 2,
          "explain": "Arrangement → present continuous."
        },
        {
          "type": "mcq",
          "prompt": "Which expresses an intention?",
          "options": [
            "I'm going to book tickets.",
            "I will booking tickets.",
            "I going to book tickets.",
            "I'm going book tickets."
          ],
          "answer": 0,
          "explain": "<em>going to + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct sentence.",
          "options": [
            "She's going to checking the show times.",
            "She's going to check the show times.",
            "She going to check the show times.",
            "She's go to check the show times."
          ],
          "answer": 1,
          "explain": "<em>going to + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'We ____ a sci-fi film this weekend (plan).'",
          "options": [
            "are watch",
            "will watching",
            "are going to watch",
            "going to watch"
          ],
          "answer": 2,
          "explain": "Plan → <em>are going to watch</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the present continuous.",
          "sentence": "They ____ (meet) at the box office at six.",
          "answers": [
            "are meeting",
            "'re meeting"
          ],
          "explain": "Arrangement → present continuous."
        },
        {
          "type": "fill",
          "prompt": "Complete with 'going to'.",
          "sentence": "I ____ ____ ____ (book) a table tonight.",
          "answers": [
            "am going to book",
            "'m going to book"
          ],
          "explain": "Intention → <em>going to + base</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the base verb.",
          "sentence": "We're going to ____ (see) the live music show.",
          "answers": [
            "see"
          ],
          "explain": "Base verb after <em>going to</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a fixed arrangement: <em>plan: meet at the cinema at 7.</em> Use present continuous.",
          "answer": [
            "we are meeting at the cinema at 7",
            "we're meeting at the cinema at seven"
          ],
          "explain": "Arrangement → present continuous."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as an intention: <em>decision: watch a sci-fi film.</em> Use <em>going to</em>.",
          "answer": [
            "we are going to watch a sci-fi film",
            "we're going to watch a sci-fi film"
          ],
          "explain": "Intention → <em>going to</em>."
        },
        {
          "type": "transform",
          "prompt": "Correct the future form: <em>I will booking the tickets.</em>",
          "answer": [
            "i am going to book the tickets",
            "i will book the tickets",
            "i'm booking the tickets"
          ],
          "explain": "Use <em>going to + base</em> or <em>will + base</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the future form.",
          "given": "We will meeting at the box office tonight.",
          "answer": [
            "we are meeting at the box office tonight",
            "we're meeting at the box office tonight"
          ],
          "explain": "Arrangement → present continuous."
        },
        {
          "type": "error",
          "prompt": "Correct the form.",
          "given": "She's going to checking the reservation.",
          "answer": [
            "she's going to check the reservation"
          ],
          "explain": "Base verb after <em>going to</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "We",
            "are",
            "meeting",
            "outside",
            "the",
            "cinema",
            "at",
            "seven"
          ],
          "answer": "We are meeting outside the cinema at seven",
          "explain": "Present continuous for an arrangement."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "I",
            "am",
            "going",
            "to",
            "book",
            "a",
            "table",
            "tonight"
          ],
          "answer": "I am going to book a table tonight",
          "explain": "<em>going to + base verb</em>."
        },
        {
          "type": "match",
          "prompt": "Match each use to its form.",
          "pairs": [
            {
              "l": "fixed arrangement",
              "r": "present continuous"
            },
            {
              "l": "intention / plan",
              "r": "going to + base"
            },
            {
              "l": "after 'going to'",
              "r": "base verb"
            }
          ],
          "explain": "Arrangements use present continuous; plans use <em>going to</em>."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct form for a fixed arrangement.",
          "options": [
            "I will seeing them Friday.",
            "I see them Friday (already arranged).",
            "I'm seeing them on Friday.",
            "I seeing them Friday."
          ],
          "answer": 2,
          "explain": "Arrangement → present continuous."
        },
        {
          "type": "mcq",
          "prompt": "Which expresses an intention?",
          "options": [
            "We're going to try a new café.",
            "We will trying a new café.",
            "We going to try a new café.",
            "We're going try a new café."
          ],
          "answer": 0,
          "explain": "<em>going to + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct sentence.",
          "options": [
            "He's going to booking the tickets.",
            "He's going to book the tickets.",
            "He going to book the tickets.",
            "He's go to book the tickets."
          ],
          "answer": 1,
          "explain": "<em>going to + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'They ____ the live show tonight (arranged).'",
          "options": [
            "will seeing",
            "are seeing",
            "going to see",
            "is seeing"
          ],
          "answer": 1,
          "explain": "Arrangement → <em>are seeing</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the present continuous.",
          "sentence": "We ____ (have) dinner before the film.",
          "answers": [
            "are having",
            "'re having"
          ],
          "explain": "Arrangement → present continuous."
        },
        {
          "type": "fill",
          "prompt": "Complete with 'going to'.",
          "sentence": "She ____ ____ ____ (check) the show times.",
          "answers": [
            "is going to check",
            "'s going to check"
          ],
          "explain": "Intention → <em>going to + base</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the base verb.",
          "sentence": "They're going to ____ (try) the new restaurant.",
          "answers": [
            "try"
          ],
          "explain": "Base verb after <em>going to</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a fixed arrangement: <em>plan: see the band on Friday.</em> Use present continuous.",
          "answer": [
            "we are seeing the band on friday",
            "we're seeing the band on friday"
          ],
          "explain": "Arrangement → present continuous."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as an intention: <em>decision: book a table.</em> Use <em>going to</em>.",
          "answer": [
            "i am going to book a table",
            "i'm going to book a table",
            "we are going to book a table"
          ],
          "explain": "Intention → <em>going to</em>."
        },
        {
          "type": "transform",
          "prompt": "Correct the future form: <em>We will meeting later.</em>",
          "answer": [
            "we are meeting later",
            "we're meeting later",
            "we will meet later"
          ],
          "explain": "Arrangement → present continuous (or <em>will + base</em>)."
        },
        {
          "type": "error",
          "prompt": "Correct the future form.",
          "given": "I will seeing the film tonight.",
          "answer": [
            "i am seeing the film tonight",
            "i'm seeing the film tonight"
          ],
          "explain": "Arrangement → present continuous."
        },
        {
          "type": "error",
          "prompt": "Correct the form.",
          "given": "We're going to booking a reservation.",
          "answer": [
            "we're going to book a reservation"
          ],
          "explain": "Base verb after <em>going to</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "They",
            "are",
            "seeing",
            "a",
            "sci-fi",
            "film",
            "tonight"
          ],
          "answer": "They are seeing a sci-fi film tonight",
          "explain": "Present continuous for an arrangement."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "is",
            "going",
            "to",
            "check",
            "the",
            "show",
            "times"
          ],
          "answer": "She is going to check the show times",
          "explain": "<em>going to + base verb</em>."
        },
        {
          "type": "match",
          "prompt": "Match each use to its form.",
          "pairs": [
            {
              "l": "arranged time and place",
              "r": "present continuous"
            },
            {
              "l": "decided intention",
              "r": "going to + base"
            },
            {
              "l": "future time word",
              "r": "no extra 'will'"
            }
          ],
          "explain": "Arrangements vs intentions take different future forms."
        }
      ]
    },
    "t2s7_L5_imperatives": {
      "id": "t2s7_L5_imperatives",
      "code": "G.4.3",
      "title": "Imperatives",
      "chapter": "Chapter 4 — Get Up, Go Out, Get Moving!",
      "week": "Week 4 · Let Me Show You How!",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.S.F.2.1",
      "source_ccg": "CCG Grade 10 Advanced / Grade 11 General — Term 2 · Chapter 4",
      "vocabulary": [
        "warm up",
        "balance",
        "flexibility",
        "focus",
        "stretch",
        "get in shape",
        "confidence",
        "steady"
      ],
      "explanation": [
        "<p>The <b>imperative</b> gives instructions, commands and advice. It uses the <b>base verb</b> with no subject: <i>Warm up first. Stretch slowly. Keep your balance.</i> It is the natural form for how-to talks and step-by-step guides.</p>",
        "<p>The negative is <b>Don't + base verb</b>: <i>Don't rush. Don't forget to focus.</i> For a friendly suggestion that includes yourself, use <b>Let's + base verb</b>: <i>Let's warm up together.</i> Adding <i>please</i> or <i>always/never</i> softens or strengthens the instruction.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "Warm up before you exercise."
        },
        {
          "type": "correct",
          "text": "Don't hold your breath while you stretch."
        },
        {
          "type": "correct",
          "text": "Keep your balance and stay focused."
        },
        {
          "type": "correct",
          "text": "Let's get in shape together this term."
        },
        {
          "type": "incorrect",
          "text": "You to warm up before training. (subject + to before the verb)"
        }
      ],
      "mistakes": [
        "Adding a subject: <em>You warm up first</em> when an instruction needs just <em>Warm up first</em>.",
        "Using <em>to</em>: <em>To stretch slowly</em> instead of <em>Stretch slowly</em>.",
        "Forming the negative wrongly: <em>Not rush</em> instead of <em>Don't rush</em>."
      ],
      "traps": [
        "An imperative has <em>no subject</em> and uses the base verb: <em>Stretch</em>, not <em>You stretch</em>.",
        "The negative is always <em>Don't + base verb</em>: <em>Don't forget</em>.",
        "<em>Let's + base verb</em> makes a suggestion that includes the speaker."
      ],
      "arabicInsight": "<p>صيغة الأمر تُستخدَم للتعليمات والنصائح، وتتكوّن من <b>الفعل المجرّد دون فاعل</b>: <i>Warm up. Stretch slowly.</i> والنفي بـ <b>Don't + فعل أساسي</b>، والاقتراح المتضمّن للمتكلّم بـ <b>Let's + فعل أساسي</b>. (G.4.3 من المنهج).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct imperative.",
          "options": [
            "You warm up before training.",
            "To warm up before training.",
            "Warm up before training.",
            "Warming up before training."
          ],
          "answer": 2,
          "explain": "Base verb, no subject: <em>Warm up</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which negative imperative is correct?",
          "options": [
            "Not rush the stretch.",
            "Don't rush the stretch.",
            "Doesn't rush the stretch.",
            "No rush the stretch."
          ],
          "answer": 1,
          "explain": "Negative → <em>Don't + base</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the suggestion that includes the speaker.",
          "options": [
            "Let's get in shape together.",
            "Let get in shape together.",
            "Lets to get in shape together.",
            "Let's getting in shape together."
          ],
          "answer": 0,
          "explain": "<em>Let's + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: '____ your balance on one foot.'",
          "options": [
            "Keeping",
            "To keep",
            "Keep",
            "Keeps"
          ],
          "answer": 2,
          "explain": "Base verb imperative."
        },
        {
          "type": "fill",
          "prompt": "Complete with an imperative.",
          "sentence": "____ (stretch) slowly to improve flexibility.",
          "answers": [
            "Stretch"
          ],
          "explain": "Base verb, no subject."
        },
        {
          "type": "fill",
          "prompt": "Complete the negative imperative.",
          "sentence": "____ (not / forget) to warm up first.",
          "answers": [
            "Don't forget",
            "Do not forget"
          ],
          "explain": "<em>Don't + base</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with 'Let's'.",
          "sentence": "____ (warm) up together before the game.",
          "answers": [
            "Let's warm",
            "Lets warm"
          ],
          "explain": "<em>Let's + base verb</em>."
        },
        {
          "type": "transform",
          "prompt": "Make an imperative: <em>You should focus on your breathing.</em>",
          "answer": [
            "focus on your breathing"
          ],
          "explain": "Drop the subject and modal; use the base verb."
        },
        {
          "type": "transform",
          "prompt": "Make a negative imperative: <em>You shouldn't hold your breath.</em>",
          "answer": [
            "don't hold your breath",
            "do not hold your breath"
          ],
          "explain": "<em>Don't + base</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a 'Let's' suggestion: <em>We should warm up first.</em>",
          "answer": [
            "let's warm up first",
            "lets warm up first"
          ],
          "explain": "<em>Let's + base verb</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the imperative.",
          "given": "You to stretch before the workout.",
          "answer": [
            "stretch before the workout"
          ],
          "explain": "No subject, no <em>to</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the negative.",
          "given": "Not forget to keep your balance.",
          "answer": [
            "don't forget to keep your balance"
          ],
          "explain": "<em>Don't + base</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct imperative.",
          "bank": [
            "Keep",
            "your",
            "balance",
            "and",
            "stay",
            "focused"
          ],
          "answer": "Keep your balance and stay focused",
          "explain": "Base-verb instructions joined by <em>and</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct imperative.",
          "bank": [
            "Don't",
            "rush",
            "the",
            "warm-up",
            "exercises"
          ],
          "answer": "Don't rush the warm-up exercises",
          "explain": "Negative imperative."
        },
        {
          "type": "match",
          "prompt": "Match each instruction type to its form.",
          "pairs": [
            {
              "l": "command",
              "r": "Stretch slowly."
            },
            {
              "l": "negative command",
              "r": "Don't rush."
            },
            {
              "l": "suggestion",
              "r": "Let's warm up."
            }
          ],
          "explain": "Base verb; <em>Don't</em> for negatives; <em>Let's</em> for suggestions."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct imperative.",
          "options": [
            "You bend your knees slightly.",
            "To bend your knees slightly.",
            "Bend your knees slightly.",
            "Bending your knees slightly."
          ],
          "answer": 2,
          "explain": "Base verb, no subject."
        },
        {
          "type": "mcq",
          "prompt": "Which negative imperative is correct?",
          "options": [
            "Not lift heavy weights alone.",
            "Don't lift heavy weights alone.",
            "Doesn't lift heavy weights alone.",
            "No lift heavy weights alone."
          ],
          "answer": 1,
          "explain": "Negative → <em>Don't + base</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the suggestion that includes the speaker.",
          "options": [
            "Let's stretch before the match.",
            "Let stretch before the match.",
            "Lets to stretch before the match.",
            "Let's stretching before the match."
          ],
          "answer": 0,
          "explain": "<em>Let's + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: '____ on your posture while running.'",
          "options": [
            "Focusing",
            "To focus",
            "Focus",
            "Focuses"
          ],
          "answer": 2,
          "explain": "Base-verb imperative."
        },
        {
          "type": "fill",
          "prompt": "Complete with an imperative.",
          "sentence": "____ (breathe) steadily during the exercise.",
          "answers": [
            "Breathe"
          ],
          "explain": "Base verb."
        },
        {
          "type": "fill",
          "prompt": "Complete the negative imperative.",
          "sentence": "____ (not / skip) the warm-up.",
          "answers": [
            "Don't skip",
            "Do not skip"
          ],
          "explain": "<em>Don't + base</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with 'Let's'.",
          "sentence": "____ (try) the new routine today.",
          "answers": [
            "Let's try",
            "Lets try"
          ],
          "explain": "<em>Let's + base verb</em>."
        },
        {
          "type": "transform",
          "prompt": "Make an imperative: <em>You should keep your back straight.</em>",
          "answer": [
            "keep your back straight"
          ],
          "explain": "Drop subject and modal."
        },
        {
          "type": "transform",
          "prompt": "Make a negative imperative: <em>You shouldn't lock your knees.</em>",
          "answer": [
            "don't lock your knees",
            "do not lock your knees"
          ],
          "explain": "<em>Don't + base</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a 'Let's' suggestion: <em>We should stretch together.</em>",
          "answer": [
            "let's stretch together",
            "lets stretch together"
          ],
          "explain": "<em>Let's + base verb</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the imperative.",
          "given": "You to focus on your breathing.",
          "answer": [
            "focus on your breathing"
          ],
          "explain": "No subject, no <em>to</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the negative.",
          "given": "No hold your breath while stretching.",
          "answer": [
            "don't hold your breath while stretching"
          ],
          "explain": "<em>Don't + base</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct imperative.",
          "bank": [
            "Warm",
            "up",
            "before",
            "you",
            "start",
            "exercising"
          ],
          "answer": "Warm up before you start exercising",
          "explain": "Base-verb instruction."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct imperative.",
          "bank": [
            "Let's",
            "get",
            "in",
            "shape",
            "this",
            "term"
          ],
          "answer": "Let's get in shape this term",
          "explain": "<em>Let's + base verb</em>."
        },
        {
          "type": "match",
          "prompt": "Match each instruction type to its form.",
          "pairs": [
            {
              "l": "instruction",
              "r": "Bend your knees."
            },
            {
              "l": "negative",
              "r": "Don't skip it."
            },
            {
              "l": "shared suggestion",
              "r": "Let's try."
            }
          ],
          "explain": "Base verb; <em>Don't</em>; <em>Let's</em>."
        }
      ]
    },
    "t2s7_L6_superlatives": {
      "id": "t2s7_L6_superlatives",
      "code": "G.1.3",
      "title": "Superlative Adjectives",
      "chapter": "Chapter 4 — Get Up, Go Out, Get Moving!",
      "week": "Week 6 · Sports Athletes",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.WR.P.4.1",
      "source_ccg": "CCG Grade 10 Advanced / Grade 11 General — Term 2 · Chapter 4",
      "vocabulary": [
        "extreme sport",
        "adrenaline rush",
        "thrill-seeker",
        "exhilarating",
        "unforgettable",
        "precautions",
        "record",
        "podium"
      ],
      "explanation": [
        "<p>A <b>superlative adjective</b> picks out the top or bottom of three or more. Short adjectives add <b>-est</b> with <b>the</b>: <i>the fast<u>est</u> runner</i>, <i>the highest jump</i>. Longer adjectives use <b>the most</b>: <i>the most exhilarating sport</i>.</p>",
        "<p>Spelling shifts apply: <i>big → the biggest</i>, <i>easy → the easiest</i>. Irregulars: <i>good → the best</i>, <i>bad → the worst</i>. Use <b>in</b> with a place and <b>of</b> with a group: <i>the best athlete <u>in</u> the team</i>, <i>the bravest <u>of</u> all</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "Skydiving is the most exhilarating sport she has tried."
        },
        {
          "type": "correct",
          "text": "He is the fastest sprinter on the team."
        },
        {
          "type": "correct",
          "text": "That was the best performance of the whole Olympics."
        },
        {
          "type": "correct",
          "text": "It gave her the biggest adrenaline rush of her life."
        },
        {
          "type": "incorrect",
          "text": "It is the most fastest sport of all. (double superlative)"
        }
      ],
      "mistakes": [
        "Double superlative: <em>the most fastest</em> instead of <em>the fastest</em>.",
        "Dropping <em>the</em>: <em>He is best player</em> instead of <em>the best player</em>.",
        "Using <em>-est</em> on a long adjective: <em>the exhilaratingest</em> instead of <em>the most exhilarating</em>."
      ],
      "traps": [
        "Use <em>in</em> for a place (the best <em>in</em> the league) and <em>of</em> for a set (the best <em>of</em> the three).",
        "Irregulars take no <em>-est</em> or <em>most</em>: <em>the best</em>, <em>the worst</em>.",
        "Two-syllable adjectives in <em>-y</em> take <em>-est</em>: <em>the easiest</em>, <em>the riskiest</em>."
      ],
      "arabicInsight": "<p>صفة التفضيل العليا تدل على الأعلى أو الأدنى في مجموعة من ثلاثة فأكثر: القصيرة <b>the + -est</b> (the fastest)، والطويلة <b>the most</b> (the most exhilarating). ونحذر من التفضيل المزدوج (<i>the most fastest</i>) ومن الأشكال الشاذة (<i>the best/the worst</i>). (G.1.3 من المنهج).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct superlative.",
          "options": [
            "It is the most fastest sport.",
            "It is the fastest sport.",
            "It is the fastest-est sport.",
            "It is fastest sport."
          ],
          "answer": 1,
          "explain": "<em>the fastest</em>; no double superlative."
        },
        {
          "type": "mcq",
          "prompt": "Which long adjective is correct?",
          "options": [
            "the exhilaratingest ride",
            "the most exhilarating ride",
            "the more exhilarating ride",
            "the exhilarating most ride"
          ],
          "answer": 1,
          "explain": "Long adjective → <em>the most</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct irregular superlative.",
          "options": [
            "the goodest athlete",
            "the bestest athlete",
            "the best athlete",
            "the most good athlete"
          ],
          "answer": 2,
          "explain": "<em>good → the best</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'He is the bravest ____ all the climbers.'",
          "options": [
            "in",
            "of",
            "at",
            "on"
          ],
          "answer": 1,
          "explain": "Group → <em>of</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the superlative.",
          "sentence": "Bungee jumping gave the ____ (big) adrenaline rush.",
          "answers": [
            "biggest"
          ],
          "explain": "<em>big → the biggest</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the superlative.",
          "sentence": "She is the ____ (fast) runner in the club.",
          "answers": [
            "fastest"
          ],
          "explain": "<em>fast → the fastest</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct word.",
          "sentence": "It was the best moment ____ the Olympics.",
          "answers": [
            "of",
            "in"
          ],
          "explain": "Place → <em>in</em>; event/group → <em>of</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative: <em>This sport is exhilarating.</em> Use <em>the most</em> (she has tried).",
          "answer": [
            "this is the most exhilarating sport she has tried"
          ],
          "explain": "Long adjective → <em>the most</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative: <em>This jump is high.</em> Use <em>the</em> (in the event).",
          "answer": [
            "this is the highest jump in the event"
          ],
          "explain": "<em>high → the highest</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative with an irregular form: <em>This is a good performance.</em> Use <em>the</em>.",
          "answer": [
            "this is the best performance"
          ],
          "explain": "<em>good → the best</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the superlative.",
          "given": "It is the most riskiest activity of all.",
          "answer": [
            "it is the riskiest activity of all"
          ],
          "explain": "No double superlative."
        },
        {
          "type": "error",
          "prompt": "Correct the missing article.",
          "given": "He is fastest swimmer in the squad.",
          "answer": [
            "he is the fastest swimmer in the squad"
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
            "bravest",
            "athlete",
            "on",
            "the",
            "team"
          ],
          "answer": "She is the bravest athlete on the team",
          "explain": "<em>the bravest</em> + <em>on/in</em> a place."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "It",
            "is",
            "the",
            "most",
            "exhilarating",
            "sport",
            "of",
            "all"
          ],
          "answer": "It is the most exhilarating sport of all",
          "explain": "<em>the most exhilarating</em> + <em>of</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its superlative.",
          "pairs": [
            {
              "l": "fast",
              "r": "the fastest"
            },
            {
              "l": "exhilarating",
              "r": "the most exhilarating"
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
            "It is the most hardest sport.",
            "It is the hardest sport.",
            "It is the hardest-est sport.",
            "It is hardest sport."
          ],
          "answer": 1,
          "explain": "<em>the hardest</em>; no double superlative."
        },
        {
          "type": "mcq",
          "prompt": "Which long adjective is correct?",
          "options": [
            "the dangerousest route",
            "the most dangerous route",
            "the more dangerous route",
            "the dangerous most route"
          ],
          "answer": 1,
          "explain": "Long adjective → <em>the most</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct irregular superlative.",
          "options": [
            "the baddest fall",
            "the worst fall",
            "the most bad fall",
            "the worstest fall"
          ],
          "answer": 1,
          "explain": "<em>bad → the worst</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'She is the strongest ____ the league.'",
          "options": [
            "of",
            "in",
            "at",
            "on"
          ],
          "answer": 1,
          "explain": "Place → <em>in</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the superlative.",
          "sentence": "It was the ____ (exciting) race of the season.",
          "answers": [
            "most exciting"
          ],
          "explain": "Long adjective → <em>the most exciting</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the superlative.",
          "sentence": "He set the ____ (high) record this year.",
          "answers": [
            "highest"
          ],
          "explain": "<em>high → the highest</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct word.",
          "sentence": "She is the best climber ____ the group.",
          "answers": [
            "in",
            "of"
          ],
          "explain": "Place → <em>in</em>; group → <em>of</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative: <em>This activity is risky.</em> Use <em>the</em> (of all).",
          "answer": [
            "this is the riskiest activity of all"
          ],
          "explain": "<em>risky → the riskiest</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative: <em>This race is challenging.</em> Use <em>the most</em> (of the season).",
          "answer": [
            "this is the most challenging race of the season"
          ],
          "explain": "Long adjective → <em>the most challenging</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative with an irregular form: <em>This is a bad injury.</em> Use <em>the</em>.",
          "answer": [
            "this is the worst injury"
          ],
          "explain": "<em>bad → the worst</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the superlative.",
          "given": "It is the most fastest descent of the day.",
          "answer": [
            "it is the fastest descent of the day"
          ],
          "explain": "No double superlative."
        },
        {
          "type": "error",
          "prompt": "Correct the missing article.",
          "given": "She is strongest athlete of all.",
          "answer": [
            "she is the strongest athlete of all"
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
            "fastest",
            "sprinter",
            "in",
            "the",
            "team"
          ],
          "answer": "He is the fastest sprinter in the team",
          "explain": "<em>the fastest</em> + <em>in</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "It",
            "was",
            "the",
            "best",
            "performance",
            "of",
            "the",
            "games"
          ],
          "answer": "It was the best performance of the games",
          "explain": "<em>the best</em> + <em>of</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its superlative.",
          "pairs": [
            {
              "l": "high",
              "r": "the highest"
            },
            {
              "l": "dangerous",
              "r": "the most dangerous"
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
    "t2s7_L7_comparatives": {
      "id": "t2s7_L7_comparatives",
      "code": "Extension",
      "title": "Comparative Adjectives",
      "chapter": "Chapter 4 — Get Up, Go Out, Get Moving!",
      "week": "Week 5 · Sports News (teacher extension)",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.S.IP.7.1",
      "source_ccg": "Teacher extension — themed to Chapter 4 (Get Up, Go Out, Get Moving!); not a separate CCG grammar code.",
      "vocabulary": [
        "rival",
        "opponent",
        "close game",
        "beat",
        "score",
        "tie",
        "competitive",
        "challenging"
      ],
      "explanation": [
        "<p>A <b>comparative adjective</b> compares two things. Short adjectives add <b>-er than</b>: <i>faster than</i>, <i>stronger than</i>. Longer adjectives use <b>more … than</b>: <i>more competitive than</i>, <i>more challenging than</i>.</p>",
        "<p>Spelling shifts apply: <i>big → bigger</i>, <i>easy → easier</i>. Irregulars: <i>good → better</i>, <i>bad → worse</i>, <i>far → further</i>. The comparison word is always <b>than</b> (never <i>then</i> or <i>that</i>).</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "Today's match was closer than yesterday's."
        },
        {
          "type": "correct",
          "text": "Our rivals are stronger than last season."
        },
        {
          "type": "correct",
          "text": "Tennis is more competitive than people think."
        },
        {
          "type": "correct",
          "text": "She trained harder than her opponent."
        },
        {
          "type": "incorrect",
          "text": "This game was more harder than the last. (double comparative)"
        }
      ],
      "mistakes": [
        "Double comparative: <em>more faster</em> or <em>more harder</em> instead of <em>faster</em> / <em>harder</em>.",
        "Using <em>then</em> instead of <em>than</em>: <em>stronger then us</em> instead of <em>stronger <u>than</u> us</em>.",
        "Using <em>-er</em> on a long adjective: <em>competitiver</em> instead of <em>more competitive</em>."
      ],
      "traps": [
        "Short adjectives take <em>-er</em>; long ones take <em>more</em> — never both.",
        "The comparison word is <em>than</em>, not <em>then</em> or <em>as</em>.",
        "<em>good → better</em>, <em>bad → worse</em> have no <em>-er</em> or <em>more</em>."
      ],
      "arabicInsight": "<p>صفة المقارنة تقارن بين شيئين: القصيرة <b>-er than</b> (faster than)، والطويلة <b>more … than</b> (more competitive than). ونحذر من المقارنة المزدوجة (<i>more faster</i>) ومن الخلط بين <i>than</i> و<i>then</i>، ومن الأشكال الشاذة (<i>better/worse</i>). (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct comparative.",
          "options": [
            "Our team is more stronger this year.",
            "Our team is stronger this year.",
            "Our team is strongerer this year.",
            "Our team is most strong this year."
          ],
          "answer": 1,
          "explain": "Short adjective → <em>stronger</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which long adjective is correct?",
          "options": [
            "Tennis is competitiver than chess.",
            "Tennis is more competitive than chess.",
            "Tennis is more competitiver than chess.",
            "Tennis is competitive than chess."
          ],
          "answer": 1,
          "explain": "Long adjective → <em>more competitive than</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct irregular comparative.",
          "options": [
            "This game was gooder than the last.",
            "This game was more good than the last.",
            "This game was better than the last.",
            "This game was weller than the last."
          ],
          "answer": 2,
          "explain": "<em>good → better</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'The away match was harder ____ the home one.'",
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
          "sentence": "Today's match was ____ (close) than yesterday's.",
          "answers": [
            "closer"
          ],
          "explain": "<em>close → closer</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the comparative.",
          "sentence": "Our rivals are ____ (competitive) than before.",
          "answers": [
            "more competitive"
          ],
          "explain": "Long adjective → <em>more competitive</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the comparison word.",
          "sentence": "She is faster ____ her opponent.",
          "answers": [
            "than"
          ],
          "explain": "Comparison → <em>than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparison: <em>This game is exciting. The last one was less so.</em> Use <em>more … than</em>.",
          "answer": [
            "this game is more exciting than the last one",
            "this game is more exciting than the last"
          ],
          "explain": "Long adjective → <em>more exciting than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparison: <em>Our team is strong. Theirs is less strong.</em>",
          "answer": [
            "our team is stronger than theirs"
          ],
          "explain": "<em>strong → stronger than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparison with an irregular form: <em>This score is good; that one is less good.</em>",
          "answer": [
            "this score is better than that one"
          ],
          "explain": "<em>good → better than</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the comparative.",
          "given": "This race was more harder than the final.",
          "answer": [
            "this race was harder than the final"
          ],
          "explain": "No double comparative."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison word.",
          "given": "Our rivals are stronger then us.",
          "answer": [
            "our rivals are stronger than us"
          ],
          "explain": "<em>than</em>, not <em>then</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct comparison.",
          "bank": [
            "Today's",
            "match",
            "was",
            "closer",
            "than",
            "yesterday's"
          ],
          "answer": "Today's match was closer than yesterday's",
          "explain": "<em>closer than</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct comparison.",
          "bank": [
            "Tennis",
            "is",
            "more",
            "competitive",
            "than",
            "chess"
          ],
          "answer": "Tennis is more competitive than chess",
          "explain": "<em>more competitive than</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its comparative.",
          "pairs": [
            {
              "l": "close",
              "r": "closer"
            },
            {
              "l": "competitive",
              "r": "more competitive"
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
            "The pitch is more wider now.",
            "The pitch is wider now.",
            "The pitch is widerer now.",
            "The pitch is most wide now."
          ],
          "answer": 1,
          "explain": "Short adjective → <em>wider</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which long adjective is correct?",
          "options": [
            "Boxing is dangerouser than swimming.",
            "Boxing is more dangerous than swimming.",
            "Boxing is more dangerouser than swimming.",
            "Boxing is dangerous than swimming."
          ],
          "answer": 1,
          "explain": "Long adjective → <em>more dangerous than</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct irregular comparative.",
          "options": [
            "The pitch was badder than expected.",
            "The pitch was more bad than expected.",
            "The pitch was worse than expected.",
            "The pitch was worser than expected."
          ],
          "answer": 2,
          "explain": "<em>bad → worse</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Our opponents trained harder ____ we did.'",
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
          "sentence": "The second half was ____ (fast) than the first.",
          "answers": [
            "faster"
          ],
          "explain": "<em>fast → faster</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the comparative.",
          "sentence": "This league is ____ (challenging) than the last.",
          "answers": [
            "more challenging"
          ],
          "explain": "Long adjective → <em>more challenging</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the comparison word.",
          "sentence": "Our rivals are stronger ____ ever.",
          "answers": [
            "than"
          ],
          "explain": "Comparison → <em>than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparison: <em>This match is tough. The earlier one was less tough.</em>",
          "answer": [
            "this match is tougher than the earlier one",
            "this match is tougher than the earlier"
          ],
          "explain": "<em>tough → tougher than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparison: <em>This race is challenging. That one was less so.</em> Use <em>more … than</em>.",
          "answer": [
            "this race is more challenging than that one",
            "this race is more challenging than that"
          ],
          "explain": "Long adjective → <em>more challenging than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparison with an irregular form: <em>This pitch is bad; that one is less bad.</em>",
          "answer": [
            "this pitch is worse than that one"
          ],
          "explain": "<em>bad → worse than</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the comparative.",
          "given": "The final was more closer than the semi.",
          "answer": [
            "the final was closer than the semi"
          ],
          "explain": "No double comparative."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison word.",
          "given": "He runs faster then his teammate.",
          "answer": [
            "he runs faster than his teammate"
          ],
          "explain": "<em>than</em>, not <em>then</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct comparison.",
          "bank": [
            "Our",
            "rivals",
            "are",
            "stronger",
            "than",
            "last",
            "season"
          ],
          "answer": "Our rivals are stronger than last season",
          "explain": "<em>stronger than</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct comparison.",
          "bank": [
            "Boxing",
            "is",
            "more",
            "dangerous",
            "than",
            "swimming"
          ],
          "answer": "Boxing is more dangerous than swimming",
          "explain": "<em>more dangerous than</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its comparative.",
          "pairs": [
            {
              "l": "fast",
              "r": "faster"
            },
            {
              "l": "dangerous",
              "r": "more dangerous"
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
    "t2s7_L8_adverbsManner": {
      "id": "t2s7_L8_adverbsManner",
      "code": "Extension",
      "title": "Adverbs of Manner",
      "chapter": "Chapter 4 — Get Up, Go Out, Get Moving!",
      "week": "Week 6 · Giving Instructions (teacher extension)",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.S.F.3.1",
      "source_ccg": "Teacher extension — themed to Chapter 4 (Get Up, Go Out, Get Moving!); not a separate CCG grammar code.",
      "vocabulary": [
        "swing",
        "stroke",
        "steady",
        "carefully",
        "smoothly",
        "stretch",
        "balance",
        "focus"
      ],
      "explanation": [
        "<p>An <b>adverb of manner</b> tells us <i>how</i> an action is done. Most are formed by adding <b>-ly</b> to an adjective: <i>slow → slowly</i>, <i>careful → carefully</i>, <i>smooth → smoothly</i>. <i>Swing the club <b>smoothly</b>.</i></p>",
        "<p>Spelling changes: <i>easy → easily</i> (y → i), <i>gentle → gently</i> (drop -e, add -y). A few are irregular: <i>good → well</i>, and <i>fast, hard</i> keep the same form. The adverb usually comes <b>after the verb or object</b>: <i>Stretch slowly</i>, <i>Hold the bar firmly</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "Stretch slowly to avoid injury."
        },
        {
          "type": "correct",
          "text": "Swing the racket smoothly, not sharply."
        },
        {
          "type": "correct",
          "text": "She plays well under pressure."
        },
        {
          "type": "correct",
          "text": "Hold the bar firmly and breathe steadily."
        },
        {
          "type": "incorrect",
          "text": "He runs very good in long races. (adjective instead of adverb)"
        }
      ],
      "mistakes": [
        "Using an adjective for a verb: <em>run quick</em> instead of <em>run <u>quickly</u></em>.",
        "Saying <em>good</em> for the adverb: <em>plays good</em> instead of <em>plays <u>well</u></em>.",
        "Misspelling: <em>easyly</em> instead of <em>easily</em>; <em>gentlely</em> instead of <em>gently</em>."
      ],
      "traps": [
        "The adverb of <em>good</em> is <em>well</em>; <em>fast</em> and <em>hard</em> do not add <em>-ly</em>.",
        "<em>hardly</em> is not the adverb of <em>hard</em> — it means 'almost not'.",
        "Place the adverb after the verb or object, not between verb and object: <em>Hold the bar firmly</em>."
      ],
      "arabicInsight": "<p>ظرف الكيفية يبيّن <b>كيف</b> يُؤدّى الفعل، ويُصاغ غالبًا بإضافة <b>-ly</b> إلى الصفة (<i>slow → slowly</i>). وهناك تغييرات إملائية (<i>easy → easily</i>) وأشكال شاذة (<i>good → well</i>؛ <i>fast/hard</i> دون -ly). ويأتي عادة بعد الفعل أو المفعول. (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct adverb of manner.",
          "options": [
            "Stretch slow before exercise.",
            "Stretch slowly before exercise.",
            "Stretch slowness before exercise.",
            "Stretch slowily before exercise."
          ],
          "answer": 1,
          "explain": "<em>slow → slowly</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which is the adverb of 'good'?",
          "options": [
            "He plays good under pressure.",
            "He plays goodly under pressure.",
            "He plays well under pressure.",
            "He plays best under pressure."
          ],
          "answer": 2,
          "explain": "<em>good → well</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correctly spelled adverb.",
          "options": [
            "She balances easyly.",
            "She balances easily.",
            "She balances easely.",
            "She balances easly."
          ],
          "answer": 1,
          "explain": "<em>easy → easily</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Swing the club ____.'",
          "options": [
            "smooth",
            "smoothy",
            "smoothly",
            "smoothness"
          ],
          "answer": 2,
          "explain": "<em>smooth → smoothly</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the adverb.",
          "sentence": "Hold the bar ____ (firm) and breathe steadily.",
          "answers": [
            "firmly"
          ],
          "explain": "<em>firm → firmly</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the adverb of 'good'.",
          "sentence": "She performs ____ in big games.",
          "answers": [
            "well"
          ],
          "explain": "<em>good → well</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the irregular adverb.",
          "sentence": "He trains ____ (hard) every day.",
          "answers": [
            "hard"
          ],
          "explain": "<em>hard</em> keeps its form."
        },
        {
          "type": "transform",
          "prompt": "Turn the adjective into an adverb: <em>careful → run …</em>",
          "answer": [
            "run carefully"
          ],
          "explain": "<em>careful → carefully</em>."
        },
        {
          "type": "transform",
          "prompt": "Correct the form: <em>She swims very good.</em>",
          "answer": [
            "she swims very well"
          ],
          "explain": "<em>good → well</em>."
        },
        {
          "type": "transform",
          "prompt": "Correct the form: <em>Stretch gentle to warm up.</em>",
          "answer": [
            "stretch gently to warm up"
          ],
          "explain": "<em>gentle → gently</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the adverb.",
          "given": "He runs quick in short races.",
          "answer": [
            "he runs quickly in short races"
          ],
          "explain": "<em>quick → quickly</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the adverb.",
          "given": "She plays good when she focuses.",
          "answer": [
            "she plays well when she focuses"
          ],
          "explain": "<em>good → well</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Stretch",
            "slowly",
            "to",
            "avoid",
            "any",
            "injury"
          ],
          "answer": "Stretch slowly to avoid any injury",
          "explain": "Adverb after the verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "plays",
            "well",
            "under",
            "real",
            "pressure"
          ],
          "answer": "She plays well under real pressure",
          "explain": "Irregular adverb <em>well</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its adverb.",
          "pairs": [
            {
              "l": "careful",
              "r": "carefully"
            },
            {
              "l": "easy",
              "r": "easily"
            },
            {
              "l": "good",
              "r": "well"
            }
          ],
          "explain": "Most add <em>-ly</em>; <em>good</em> → <em>well</em>."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct adverb of manner.",
          "options": [
            "Breathe steady during the lift.",
            "Breathe steadily during the lift.",
            "Breathe steadiness during the lift.",
            "Breathe steadyly during the lift."
          ],
          "answer": 1,
          "explain": "<em>steady → steadily</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which is the adverb of 'good'?",
          "options": [
            "She serves good in tennis.",
            "She serves goodly in tennis.",
            "She serves well in tennis.",
            "She serves better in tennis."
          ],
          "answer": 2,
          "explain": "<em>good → well</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correctly spelled adverb.",
          "options": [
            "He moves gentlely.",
            "He moves gently.",
            "He moves gentley.",
            "He moves gentlly."
          ],
          "answer": 1,
          "explain": "<em>gentle → gently</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Grip the bar ____.'",
          "options": [
            "firm",
            "firmy",
            "firmly",
            "firmness"
          ],
          "answer": 2,
          "explain": "<em>firm → firmly</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the adverb.",
          "sentence": "Swing the racket ____ (smooth), not sharply.",
          "answers": [
            "smoothly"
          ],
          "explain": "<em>smooth → smoothly</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the adverb of 'good'.",
          "sentence": "He defends ____ in close games.",
          "answers": [
            "well"
          ],
          "explain": "<em>good → well</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the irregular adverb.",
          "sentence": "She runs ____ (fast) in sprints.",
          "answers": [
            "fast"
          ],
          "explain": "<em>fast</em> keeps its form."
        },
        {
          "type": "transform",
          "prompt": "Turn the adjective into an adverb: <em>quiet → speak …</em>",
          "answer": [
            "speak quietly"
          ],
          "explain": "<em>quiet → quietly</em>."
        },
        {
          "type": "transform",
          "prompt": "Correct the form: <em>He throws very good.</em>",
          "answer": [
            "he throws very well"
          ],
          "explain": "<em>good → well</em>."
        },
        {
          "type": "transform",
          "prompt": "Correct the form: <em>Move careful on the ice.</em>",
          "answer": [
            "move carefully on the ice"
          ],
          "explain": "<em>careful → carefully</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the adverb.",
          "given": "She stretches slow before games.",
          "answer": [
            "she stretches slowly before games"
          ],
          "explain": "<em>slow → slowly</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the adverb.",
          "given": "He plays good when relaxed.",
          "answer": [
            "he plays well when relaxed"
          ],
          "explain": "<em>good → well</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Swing",
            "the",
            "racket",
            "smoothly",
            "and",
            "steadily"
          ],
          "answer": "Swing the racket smoothly and steadily",
          "explain": "Adverbs after the object."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "He",
            "trains",
            "hard",
            "every",
            "single",
            "day"
          ],
          "answer": "He trains hard every single day",
          "explain": "Irregular adverb <em>hard</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its adverb.",
          "pairs": [
            {
              "l": "smooth",
              "r": "smoothly"
            },
            {
              "l": "gentle",
              "r": "gently"
            },
            {
              "l": "fast",
              "r": "fast"
            }
          ],
          "explain": "Most add <em>-ly</em>; <em>fast</em> is unchanged."
        }
      ]
    }
  }
}
);
