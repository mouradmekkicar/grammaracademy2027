/* ===== Grammar Academy DATA MODULE (CCG + marked extensions, validated) ===== */
/* Term 1 · AY 2026-27 · Grade 11 General (ENG.07 · Stage 7) · Mourad Mekki Teacher Toolkit */
/* Byte-identical twin of the Grade 10 Advanced (ENG.07) module: same Stage 7 lesson bank (t1s7_ IDs), META swapped only. */
/* 8 lessons / 240 questions. CCG names 2 grammar items (Question Tags, Historic Present → 'CCG' pills); the other 6 are unit-themed Extensions. No invented G-codes. */
GA.register(
{
  "term": "T1-2627",
  "termLabel": "Term 1 · AY 2026–27",
  "grade": "11",
  "stream": "general",
  "streamLabel": "Grade 11 General Pathway",
  "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
  "source": "MoE Comprehensive Curriculum Guide — English Language, Stage 7 (ENG.07), Term 1 (AY 2026–27). Grade 11 General is the same-stage sibling of Grade 10 Advanced, so this module reuses the Stage 7 lesson bank verbatim (t1s7_ IDs). Units 1 (A Picture of Health) & 2 (Infotainment). The CCG names two grammar items (Question Tags, Historic Present), each without a number → 'CCG' pills; the other six lessons are teacher Extensions themed to genuine CCG content in each unit. 8 lessons / 240 questions.",
  "chapters": [
    {
      "id": "ch1",
      "title": "Chapter 1 — A Picture of Health",
      "lessons": [
        "t1s7_L1_questionTags",
        "t1s7_L2_comparatives",
        "t1s7_L3_modalsAdvice",
        "t1s7_L4_presentPerfect"
      ]
    },
    {
      "id": "ch2",
      "title": "Chapter 2 — Infotainment",
      "lessons": [
        "t1s7_L5_historicPresent",
        "t1s7_L6_pastSimpleVsCont",
        "t1s7_L7_reportedSpeech",
        "t1s7_L8_relativeClauses"
      ]
    }
  ],
  "lessons": {
    "t1s7_L1_questionTags": {
      "id": "t1s7_L1_questionTags",
      "code": "CCG",
      "title": "Question Tags",
      "chapter": "Chapter 1 — A Picture of Health",
      "week": "Unit 1 · A Picture of Health · Wk 1 (CCG grammar)",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.S.P.2.1",
      "source_ccg": "CCG Unit 1 (A Picture of Health), Week 1, Lesson 3 — grammar 'Question Tags' listed without a number (Other Language Focus: Intonation). Rendered as a 'CCG' pill, not a numbered G-code.",
      "vocabulary": [
        "jog",
        "cardio",
        "yoga",
        "health club",
        "locker room",
        "lifting weights",
        "work out",
        "gym membership"
      ],
      "explanation": [
        "<p>A <b>question tag</b> is a short question added to the end of a statement to check information or invite agreement. The key rule is <b>opposites</b>: a <b>positive</b> statement takes a <b>negative</b> tag, and a <b>negative</b> statement takes a <b>positive</b> tag, repeating the same auxiliary verb and a pronoun. <i>You go to the gym, <b>don't you?</b></i> · <i>She isn't a member, <b>is she?</b></i></p>",
        "<p>If the statement has no auxiliary, use <b>do/does/did</b> in the tag: <i>You jog every morning, <b>don't you?</b></i>. Watch the special forms: <i>I am</i> → <b>aren't I?</b>, <i>Let's</i> → <b>shall we?</b>, and imperatives → <b>will you?</b>. <b>Intonation</b> carries the meaning: a <i>falling</i> tag expects agreement, while a <i>rising</i> tag is a genuine question.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "You work out every day, don't you?"
        },
        {
          "type": "correct",
          "text": "She isn't joining the boxing class, is she?"
        },
        {
          "type": "correct",
          "text": "They go to the health club after school, don't they?"
        },
        {
          "type": "correct",
          "text": "Let's try the new cardio machine, shall we?"
        },
        {
          "type": "incorrect",
          "text": "You lift weights, do you? (a positive statement needs a negative tag → don't you?)"
        }
      ],
      "mistakes": [
        "Repeating the main verb instead of using an auxiliary: <em>You jog, jog you?</em> instead of <em>…don't you?</em>",
        "Matching the polarity instead of reversing it: <em>You're a member, are you?</em> instead of <em>…<u>aren't</u> you?</em>",
        "Forgetting the special form for <em>I am</em>: <em>I'm late, amn't I?</em> instead of <em>…<u>aren't I</u>?</em>"
      ],
      "traps": [
        "Positive statement → <em>negative</em> tag; negative statement → <em>positive</em> tag.",
        "No auxiliary in the statement? Use <em>do/does/did</em> in the tag.",
        "Falling intonation = expecting agreement; rising intonation = a genuine question."
      ],
      "arabicInsight": "<p>الـ <b>question tag</b> سؤالٌ قصير يُضاف في نهاية الجملة للتأكّد من المعلومة أو طلب الموافقة. القاعدة هي <b>العكس</b>: الجملة المثبتة تأخذ ذيلاً منفياً، والجملة المنفية تأخذ ذيلاً مثبتاً، مع تكرار <b>الفعل المساعد</b> والضمير (<i>You jog, <b>don't you?</b></i>). فإن لم يوجد فعل مساعد نستخدم <b>do/does/did</b>، ولاحظ الحالة الخاصة: <i>I'm…, <b>aren't I?</b></i>. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct tag.",
          "options": [
            "You go to the gym, do you?",
            "You go to the gym, don't you?",
            "You go to the gym, aren't you?",
            "You go to the gym, won't you?"
          ],
          "answer": 1,
          "explain": "Positive statement → negative tag with <em>do</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the right tag: 'She can't swim, ____'",
          "options": [
            "can she?",
            "can't she?",
            "does she?",
            "is she?"
          ],
          "answer": 0,
          "explain": "Negative statement → positive tag with the same auxiliary <em>can</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Let's join the yoga class, ____'",
          "options": [
            "will we?",
            "do we?",
            "shall we?",
            "don't we?"
          ],
          "answer": 2,
          "explain": "<em>Let's</em> → <em>shall we?</em>"
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'I'm next in the queue, ____'",
          "options": [
            "amn't I?",
            "aren't I?",
            "am not I?",
            "isn't I?"
          ],
          "answer": 1,
          "explain": "<em>I am</em> → <em>aren't I?</em>"
        },
        {
          "type": "fill",
          "prompt": "Add the question tag.",
          "sentence": "You lift weights on Mondays, ____?",
          "answers": [
            "don't you"
          ],
          "explain": "Positive → negative tag, <em>do</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the question tag.",
          "sentence": "They aren't members here, ____?",
          "answers": [
            "are they"
          ],
          "explain": "Negative → positive tag."
        },
        {
          "type": "fill",
          "prompt": "Add the question tag.",
          "sentence": "He has finished his cardio, ____?",
          "answers": [
            "hasn't he"
          ],
          "explain": "Auxiliary <em>has</em> → <em>hasn't he</em>."
        },
        {
          "type": "transform",
          "prompt": "Add a tag: <em>You enjoy boxing.</em>",
          "answer": [
            "you enjoy boxing, don't you"
          ],
          "explain": "Positive → negative <em>do</em> tag."
        },
        {
          "type": "transform",
          "prompt": "Add a tag: <em>She won't come to the gym today.</em>",
          "answer": [
            "she won't come to the gym today, will she"
          ],
          "explain": "Negative → positive tag <em>will</em>."
        },
        {
          "type": "transform",
          "prompt": "Add a tag: <em>We should warm up first.</em>",
          "answer": [
            "we should warm up first, shouldn't we"
          ],
          "explain": "<em>should</em> → <em>shouldn't we</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the tag.",
          "given": "You jog every morning, do you?",
          "answer": [
            "you jog every morning, don't you"
          ],
          "explain": "A positive statement needs a negative tag."
        },
        {
          "type": "error",
          "prompt": "Correct the tag.",
          "given": "I'm right, amn't I?",
          "answer": [
            "i'm right, aren't i"
          ],
          "explain": "<em>I am</em> → <em>aren't I?</em>"
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a tag question.",
          "bank": [
            "You",
            "like",
            "yoga",
            "don't",
            "you"
          ],
          "answer": "You like yoga don't you",
          "explain": "Statement + negative tag."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a tag question.",
          "bank": [
            "She",
            "isn't",
            "tired",
            "is",
            "she"
          ],
          "answer": "She isn't tired is she",
          "explain": "Negative statement + positive tag."
        },
        {
          "type": "match",
          "prompt": "Match each statement to its correct tag.",
          "pairs": [
            {
              "l": "You train daily,",
              "r": "don't you?"
            },
            {
              "l": "He can't run far,",
              "r": "can he?"
            },
            {
              "l": "Let's stretch,",
              "r": "shall we?"
            }
          ],
          "explain": "Reverse the polarity; use the matching auxiliary."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct tag: 'He plays football, ____'",
          "options": [
            "doesn't he?",
            "does he?",
            "isn't he?",
            "won't he?"
          ],
          "answer": 0,
          "explain": "Positive → negative tag with <em>does</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the right tag: 'They weren't at training, ____'",
          "options": [
            "weren't they?",
            "were they?",
            "did they?",
            "are they?"
          ],
          "answer": 1,
          "explain": "Negative → positive tag <em>were</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Open the window, ____'",
          "options": [
            "do you?",
            "shall we?",
            "will you?",
            "aren't you?"
          ],
          "answer": 2,
          "explain": "Imperative → <em>will you?</em>"
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'I'm in your team, ____'",
          "options": [
            "aren't I?",
            "amn't I?",
            "isn't I?",
            "do I?"
          ],
          "answer": 0,
          "explain": "<em>I am</em> → <em>aren't I?</em>"
        },
        {
          "type": "fill",
          "prompt": "Add the question tag.",
          "sentence": "Sara teaches the spin class, ____?",
          "answers": [
            "doesn't she"
          ],
          "explain": "Positive → negative <em>does</em> tag."
        },
        {
          "type": "fill",
          "prompt": "Add the question tag.",
          "sentence": "You haven't tried pilates, ____?",
          "answers": [
            "have you"
          ],
          "explain": "Negative → positive <em>have</em> tag."
        },
        {
          "type": "fill",
          "prompt": "Add the question tag.",
          "sentence": "We'll meet after the match, ____?",
          "answers": [
            "won't we"
          ],
          "explain": "<em>will</em> → <em>won't we</em>."
        },
        {
          "type": "transform",
          "prompt": "Add a tag: <em>Ali swims twice a week.</em>",
          "answer": [
            "ali swims twice a week, doesn't he"
          ],
          "explain": "Positive → negative <em>does</em> tag."
        },
        {
          "type": "transform",
          "prompt": "Add a tag: <em>You haven't paid the fee.</em>",
          "answer": [
            "you haven't paid the fee, have you"
          ],
          "explain": "Negative → positive <em>have</em> tag."
        },
        {
          "type": "transform",
          "prompt": "Add a tag: <em>Let's book the court.</em>",
          "answer": [
            "let's book the court, shall we"
          ],
          "explain": "<em>Let's</em> → <em>shall we?</em>"
        },
        {
          "type": "error",
          "prompt": "Correct the tag.",
          "given": "She runs fast, isn't she?",
          "answer": [
            "she runs fast, doesn't she"
          ],
          "explain": "No auxiliary in the statement → use <em>does</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the tag.",
          "given": "Pass the ball, do you?",
          "answer": [
            "pass the ball, will you"
          ],
          "explain": "Imperative → <em>will you?</em>"
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a tag question.",
          "bank": [
            "They",
            "won",
            "the",
            "match",
            "didn't",
            "they"
          ],
          "answer": "They won the match didn't they",
          "explain": "Positive past → negative <em>did</em> tag."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a tag question.",
          "bank": [
            "You",
            "can't",
            "drive",
            "can",
            "you"
          ],
          "answer": "You can't drive can you",
          "explain": "Negative → positive tag <em>can</em>."
        },
        {
          "type": "match",
          "prompt": "Match each statement to its correct tag.",
          "pairs": [
            {
              "l": "She has left,",
              "r": "hasn't she?"
            },
            {
              "l": "Close the door,",
              "r": "will you?"
            },
            {
              "l": "I'm late,",
              "r": "aren't I?"
            }
          ],
          "explain": "Use the matching auxiliary and reverse the polarity."
        }
      ]
    },
    "t1s7_L2_comparatives": {
      "id": "t1s7_L2_comparatives",
      "code": "Extension",
      "title": "Comparatives & Superlatives",
      "chapter": "Chapter 1 — A Picture of Health",
      "week": "Unit 1 · A Picture of Health (teacher extension)",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.S.IP.4.1",
      "source_ccg": "Teacher extension — themed to Unit 1 (A Picture of Health); rides the CCG 'Comparison' focus in the Health-clubs lessons. Not a CCG grammar code.",
      "vocabulary": [
        "affordable",
        "equipment",
        "facilities",
        "crowded",
        "spacious",
        "convenient",
        "value",
        "distance"
      ],
      "explanation": [
        "<p><b>Comparatives</b> compare two things. Add <b>-er + than</b> to short adjectives (<i>cheaper than</i>) and <b>more + adjective + than</b> to longer ones (<i>more modern than</i>). <b>Superlatives</b> pick out one from a group: <b>the + -est</b> (<i>the cheapest</i>) or <b>the most + adjective</b> (<i>the most popular</i>). Learn the irregulars: <i>good → better → best</i>, <i>bad → worse → worst</i>, <i>far → further → furthest</i>.</p>",
        "<p>Mind the spelling: <i>big → bigger</i> (double the consonant), <i>easy → easier</i> (y → i). For equality use <b>as + adjective + as</b> (<i>as crowded as</i>), and for less use <b>not as … as</b>. Never double-mark a comparison: <i><u>more cheaper</u></i> and <i><u>the most cheapest</u></i> are both wrong.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "This gym is cheaper than the one downtown."
        },
        {
          "type": "correct",
          "text": "The new health club is more modern than the old one."
        },
        {
          "type": "correct",
          "text": "It offers the best value in the city."
        },
        {
          "type": "correct",
          "text": "My local pool isn't as crowded as the city pool."
        },
        {
          "type": "incorrect",
          "text": "This is the most cheapest membership. (double superlative → the cheapest)"
        }
      ],
      "mistakes": [
        "Double comparison: <em>more bigger</em>, <em>most cheapest</em> instead of <em>bigger</em>, <em>the cheapest</em>.",
        "Using <em>more</em> with short adjectives: <em>more fast</em> instead of <em>faster</em>.",
        "Dropping <em>the</em> before a superlative: <em>It's best gym</em> instead of <em>the best gym</em>."
      ],
      "traps": [
        "Short adjective → <em>-er/-est</em>; long adjective → <em>more/most</em>; never both.",
        "Comparatives take <em>than</em>; superlatives take <em>the</em>.",
        "Equal → <em>as … as</em>; less → <em>not as … as</em>."
      ],
      "arabicInsight": "<p>تُستخدم صيغة <b>المقارنة (comparative)</b> للمقارنة بين شيئين: نضيف <b>-er + than</b> للصفات القصيرة، أو <b>more + صفة + than</b> للطويلة (<i>cheaper than</i> / <i>more modern than</i>). أمّا <b>التفضيل (superlative)</b> فيختار واحداً من مجموعة: <b>the + -est</b> أو <b>the most</b> (<i>the best value</i>). وتذكّر الشاذّ <i>good → better → best</i>، ولا تجمع بين الصيغتين (<u>more cheaper</u> خطأ). (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the comparative: 'This treadmill is ____ than that one.'",
          "options": [
            "more new",
            "newer",
            "newest",
            "the newer"
          ],
          "answer": 1,
          "explain": "Short adjective → <em>-er + than</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the superlative: 'It's ____ gym in town.'",
          "options": [
            "the cheaper",
            "cheapest",
            "the cheapest",
            "more cheap"
          ],
          "answer": 2,
          "explain": "<em>the + -est</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct form: 'Yoga is ____ relaxing than boxing.'",
          "options": [
            "more",
            "most",
            "the most",
            "-er"
          ],
          "answer": 0,
          "explain": "Long adjective → <em>more … than</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete with the irregular form: 'My old routine was ____ than this one.'",
          "options": [
            "badder",
            "worse",
            "worst",
            "more bad"
          ],
          "answer": 1,
          "explain": "<em>bad → worse</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the comparative.",
          "sentence": "The city pool is ____ (large) than ours.",
          "answers": [
            "larger"
          ],
          "explain": "<em>-er</em> for a short adjective."
        },
        {
          "type": "fill",
          "prompt": "Complete the superlative.",
          "sentence": "This is ____ (good) class in the schedule.",
          "answers": [
            "the best"
          ],
          "explain": "<em>good → the best</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with equality.",
          "sentence": "Spin is just ____ tiring as running.",
          "answers": [
            "as"
          ],
          "explain": "Equality: <em>as … as</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparative: <em>The new gym is modern. The old gym is less modern.</em>",
          "answer": [
            "the new gym is more modern than the old gym",
            "the new gym is more modern than the old one"
          ],
          "explain": "<em>more + adjective + than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a superlative: <em>This membership is cheap (of all).</em>",
          "answer": [
            "this is the cheapest membership",
            "this membership is the cheapest"
          ],
          "explain": "<em>the + -est</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with 'than': <em>Cardio is harder. Stretching is easier.</em>",
          "answer": [
            "cardio is harder than stretching"
          ],
          "explain": "<em>-er + than</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison.",
          "given": "This is the most cheapest plan.",
          "answer": [
            "this is the cheapest plan"
          ],
          "explain": "No double superlative."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison.",
          "given": "Swimming is more easy than running.",
          "answer": [
            "swimming is easier than running"
          ],
          "explain": "Short adjective → <em>-er</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a comparative.",
          "bank": [
            "The",
            "pool",
            "is",
            "bigger",
            "than",
            "the",
            "gym"
          ],
          "answer": "The pool is bigger than the gym",
          "explain": "<em>-er + than</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a superlative.",
          "bank": [
            "It",
            "is",
            "the",
            "most",
            "popular",
            "class"
          ],
          "answer": "It is the most popular class",
          "explain": "<em>the most + adjective</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its comparative.",
          "pairs": [
            {
              "l": "good",
              "r": "better"
            },
            {
              "l": "bad",
              "r": "worse"
            },
            {
              "l": "far",
              "r": "further"
            }
          ],
          "explain": "Irregular comparatives."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the comparative: 'Her bike is ____ than mine.'",
          "options": [
            "more fast",
            "faster",
            "fastest",
            "the faster"
          ],
          "answer": 1,
          "explain": "Short adjective → <em>-er + than</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the superlative: 'That café serves ____ coffee here.'",
          "options": [
            "the better",
            "best",
            "the best",
            "more good"
          ],
          "answer": 2,
          "explain": "<em>good → the best</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct form: 'This route is ____ dangerous than that one.'",
          "options": [
            "more",
            "most",
            "the most",
            "danger"
          ],
          "answer": 0,
          "explain": "Long adjective → <em>more … than</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete with the irregular form: 'Today's traffic is ____ than yesterday's.'",
          "options": [
            "worser",
            "worse",
            "worst",
            "more worse"
          ],
          "answer": 1,
          "explain": "<em>bad → worse</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the comparative.",
          "sentence": "The library is ____ (quiet) than the canteen.",
          "answers": [
            "quieter"
          ],
          "explain": "<em>-er</em> for a short adjective."
        },
        {
          "type": "fill",
          "prompt": "Complete the superlative.",
          "sentence": "It was ____ (hot) day of the year.",
          "answers": [
            "the hottest"
          ],
          "explain": "Double the final consonant: <em>hot → the hottest</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with equality.",
          "sentence": "This phone is just ____ fast as the new model.",
          "answers": [
            "as"
          ],
          "explain": "Equality: <em>as … as</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparative: <em>The blue car is expensive. The red car is less expensive.</em>",
          "answer": [
            "the blue car is more expensive than the red car",
            "the blue car is more expensive than the red one"
          ],
          "explain": "<em>more + adjective + than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a superlative: <em>This phone is light (of all).</em>",
          "answer": [
            "this is the lightest phone",
            "this phone is the lightest"
          ],
          "explain": "<em>the + -est</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with 'than': <em>Maths is difficult. Art is easy.</em>",
          "answer": [
            "maths is more difficult than art"
          ],
          "explain": "<em>more + adjective + than</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison.",
          "given": "She is the most tallest player.",
          "answer": [
            "she is the tallest player"
          ],
          "explain": "No double superlative."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison.",
          "given": "The film was more long than the book.",
          "answer": [
            "the film was longer than the book"
          ],
          "explain": "Short adjective → <em>-er</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a comparative.",
          "bank": [
            "This",
            "road",
            "is",
            "narrower",
            "than",
            "that",
            "one"
          ],
          "answer": "This road is narrower than that one",
          "explain": "<em>-er + than</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a superlative.",
          "bank": [
            "She",
            "is",
            "the",
            "strongest",
            "in",
            "the",
            "team"
          ],
          "answer": "She is the strongest in the team",
          "explain": "<em>the + -est</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its superlative.",
          "pairs": [
            {
              "l": "good",
              "r": "the best"
            },
            {
              "l": "bad",
              "r": "the worst"
            },
            {
              "l": "big",
              "r": "the biggest"
            }
          ],
          "explain": "Irregular and spelling-change superlatives."
        }
      ]
    },
    "t1s7_L3_modalsAdvice": {
      "id": "t1s7_L3_modalsAdvice",
      "code": "Extension",
      "title": "Modals of Advice: should / ought to / had better",
      "chapter": "Chapter 1 — A Picture of Health",
      "week": "Unit 1 · A Picture of Health (teacher extension)",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.S.IP.4.1",
      "source_ccg": "Teacher extension — themed to Unit 1 (A Picture of Health); rides the CCG 'asking for and giving advice' thread (Treating an Illness, Asking for and giving health advice). Not a CCG grammar code.",
      "vocabulary": [
        "symptom",
        "remedy",
        "prescription",
        "recover",
        "rest",
        "fluids",
        "appointment",
        "recommend"
      ],
      "explanation": [
        "<p>To give advice we use <b>should / shouldn't + base verb</b> (the most common) and <b>ought to + base verb</b> (same meaning, a little more formal). There is <b>no <i>to</i></b> after <i>should</i>: <i>You <b>should rest</b></i>, not <i>should to rest</i>. Questions invert the modal: <i>Should I see a doctor?</i></p>",
        "<p><b>had better (+ not) + base verb</b> gives <b>stronger</b> advice — a warning about a bad result — and points to now or the near future, not timeless tips. Contract it to <b>'d better</b>: <i>You'<b>d better</b> take the medicine now, or the pain will get worse.</i> Do not add <i>to</i>: <i>had better <u>go</u></i>, not <i>had better to go</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "You should drink more water when you have a fever."
        },
        {
          "type": "correct",
          "text": "She ought to see a doctor about that cough."
        },
        {
          "type": "correct",
          "text": "You'd better take the medicine now, or the pain will get worse."
        },
        {
          "type": "correct",
          "text": "You shouldn't ignore those symptoms."
        },
        {
          "type": "incorrect",
          "text": "You had better to rest. (no 'to' after had better → had better rest)"
        }
      ],
      "mistakes": [
        "Adding <em>to</em> after <em>should</em>: <em>You should to rest</em> instead of <em>You should rest</em>.",
        "Adding <em>to</em> after <em>had better</em>: <em>had better to go</em> instead of <em>had better go</em>.",
        "Using <em>had better</em> for timeless advice: it is for urgent advice or warnings, not general tips."
      ],
      "traps": [
        "<em>should</em>/<em>ought to</em> = ordinary advice; <em>had better</em> = stronger warning about a result.",
        "<em>should</em> + base verb (no <em>to</em>); <em>ought</em> <u>to</u> + base verb.",
        "Negative warning: <em>had better not</em> + base verb."
      ],
      "arabicInsight": "<p>لإسداء النصيحة نستخدم <b>should / shouldn't + الفعل الأساسي</b> (الأكثر شيوعاً) و<b>ought to + فعل أساسي</b> (بالمعنى ذاته وأكثر رسميةً قليلاً) — ولا نضع <i>to</i> بعد <i>should</i>. أمّا <b>had better (+ not) + فعل أساسي</b> فهو نصيحة <b>أقوى</b> تحمل تحذيراً من نتيجةٍ سيّئة وتشير إلى الحاضر أو المستقبل القريب (<i>You'd better see a doctor</i>)، ولا نضيف <i>to</i> بعدها. (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the best advice form: 'You ____ rest if you feel dizzy.'",
          "options": [
            "should to",
            "should",
            "ought",
            "had better to"
          ],
          "answer": 1,
          "explain": "<em>should + base verb</em>, no <em>to</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct form: 'She ____ see a doctor.'",
          "options": [
            "ought to",
            "ought",
            "should to",
            "had to better"
          ],
          "answer": 0,
          "explain": "<em>ought to + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the strong warning: 'You ____ take this now, or it will get worse.'",
          "options": [
            "should maybe",
            "ought",
            "'d better",
            "better had"
          ],
          "answer": 2,
          "explain": "<em>'d better</em> = stronger warning."
        },
        {
          "type": "mcq",
          "prompt": "Complete the negative: 'You ____ skip your medicine.'",
          "options": [
            "shouldn't",
            "should not to",
            "had better",
            "ought"
          ],
          "answer": 0,
          "explain": "<em>shouldn't + base verb</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with should.",
          "sentence": "You ____ (drink) more fluids.",
          "answers": [
            "should drink"
          ],
          "explain": "<em>should + base verb</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with ought to.",
          "sentence": "He ____ (book) an appointment.",
          "answers": [
            "ought to book"
          ],
          "explain": "<em>ought to + base verb</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with had better.",
          "sentence": "We ____ (not / wait) any longer.",
          "answers": [
            "had better not wait",
            "'d better not wait"
          ],
          "explain": "<em>had better not + base verb</em>."
        },
        {
          "type": "transform",
          "prompt": "Give advice with should: <em>Resting is a good idea.</em>",
          "answer": [
            "you should rest"
          ],
          "explain": "<em>should + base verb</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with ought to: <em>You should call the clinic.</em>",
          "answer": [
            "you ought to call the clinic"
          ],
          "explain": "Same meaning, more formal."
        },
        {
          "type": "transform",
          "prompt": "Make a warning with had better: <em>Take the medicine now.</em>",
          "answer": [
            "you had better take the medicine now",
            "you'd better take the medicine now"
          ],
          "explain": "Urgent advice / warning."
        },
        {
          "type": "error",
          "prompt": "Correct the modal.",
          "given": "You should to see a nurse.",
          "answer": [
            "you should see a nurse"
          ],
          "explain": "No <em>to</em> after <em>should</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal.",
          "given": "You had better to rest today.",
          "answer": [
            "you had better rest today",
            "you'd better rest today"
          ],
          "explain": "No <em>to</em> after <em>had better</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into advice.",
          "bank": [
            "You",
            "should",
            "drink",
            "more",
            "water"
          ],
          "answer": "You should drink more water",
          "explain": "<em>should + base verb</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a warning.",
          "bank": [
            "You",
            "had",
            "better",
            "see",
            "a",
            "doctor"
          ],
          "answer": "You had better see a doctor",
          "explain": "<em>had better + base verb</em>."
        },
        {
          "type": "match",
          "prompt": "Match each form to its use.",
          "pairs": [
            {
              "l": "should",
              "r": "ordinary advice"
            },
            {
              "l": "ought to",
              "r": "advice (more formal)"
            },
            {
              "l": "had better",
              "r": "strong warning"
            }
          ],
          "explain": "The strength of advice rises from should to had better."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the best advice form: 'You ____ stretch before exercise.'",
          "options": [
            "should to",
            "ought",
            "should",
            "had better to"
          ],
          "answer": 2,
          "explain": "<em>should + base verb</em>, no <em>to</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct form: 'They ____ eat less sugar.'",
          "options": [
            "ought to",
            "ought",
            "should to",
            "better had"
          ],
          "answer": 0,
          "explain": "<em>ought to + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the strong warning: 'We ____ leave now, or we'll miss the appointment.'",
          "options": [
            "ought",
            "should maybe",
            "'d better",
            "better had"
          ],
          "answer": 2,
          "explain": "<em>'d better</em> = stronger warning."
        },
        {
          "type": "mcq",
          "prompt": "Complete the negative: 'You ____ stay up so late before a test.'",
          "options": [
            "shouldn't",
            "ought",
            "should not to",
            "had better"
          ],
          "answer": 0,
          "explain": "<em>shouldn't + base verb</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with should.",
          "sentence": "You ____ (warm) up first.",
          "answers": [
            "should warm"
          ],
          "explain": "<em>should + base verb</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with ought to.",
          "sentence": "She ____ (rest) her ankle.",
          "answers": [
            "ought to rest"
          ],
          "explain": "<em>ought to + base verb</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with had better.",
          "sentence": "You ____ (not / miss) the deadline.",
          "answers": [
            "had better not miss",
            "'d better not miss"
          ],
          "explain": "<em>had better not + base verb</em>."
        },
        {
          "type": "transform",
          "prompt": "Give advice with should: <em>Eating breakfast is a good idea.</em>",
          "answer": [
            "you should eat breakfast"
          ],
          "explain": "<em>should + base verb</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with ought to: <em>You should apologise.</em>",
          "answer": [
            "you ought to apologise"
          ],
          "explain": "Same meaning, more formal."
        },
        {
          "type": "transform",
          "prompt": "Make a warning with had better: <em>Charge your phone now.</em>",
          "answer": [
            "you had better charge your phone now",
            "you'd better charge your phone now"
          ],
          "explain": "Urgent advice / warning."
        },
        {
          "type": "error",
          "prompt": "Correct the modal.",
          "given": "She ought see a specialist.",
          "answer": [
            "she ought to see a specialist"
          ],
          "explain": "<em>ought to</em> needs <em>to</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal.",
          "given": "You should resting more.",
          "answer": [
            "you should rest more"
          ],
          "explain": "<em>should + base verb</em>, not <em>-ing</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into advice.",
          "bank": [
            "You",
            "ought",
            "to",
            "eat",
            "more",
            "fruit"
          ],
          "answer": "You ought to eat more fruit",
          "explain": "<em>ought to + base verb</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a warning.",
          "bank": [
            "We",
            "had",
            "better",
            "hurry",
            "up"
          ],
          "answer": "We had better hurry up",
          "explain": "<em>had better + base verb</em>."
        },
        {
          "type": "match",
          "prompt": "Match each sentence to its function.",
          "pairs": [
            {
              "l": "You should rest.",
              "r": "ordinary advice"
            },
            {
              "l": "You ought to apologise.",
              "r": "advice (more formal)"
            },
            {
              "l": "You'd better hurry.",
              "r": "strong warning"
            }
          ],
          "explain": "From mild advice to urgent warning."
        }
      ]
    },
    "t1s7_L4_presentPerfect": {
      "id": "t1s7_L4_presentPerfect",
      "code": "Extension",
      "title": "Present Perfect: Experiences & Recent Changes",
      "chapter": "Chapter 1 — A Picture of Health",
      "week": "Unit 1 · A Picture of Health (teacher extension)",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.S.IP.1.1",
      "source_ccg": "Teacher extension — themed to Unit 1 (A Picture of Health); rides the CCG 'Longevity' and 'lifestyle/habits' content (Fit and healthy, Handling stress). Not a CCG grammar code.",
      "vocabulary": [
        "lifestyle",
        "habit",
        "recently",
        "improve",
        "give up",
        "take up",
        "ever",
        "already"
      ],
      "explanation": [
        "<p>The <b>present perfect</b> is <b>have/has + past participle</b>. Use it for <b>life experiences</b> with no specific time (<i>I have tried yoga</i>), often with <i>ever</i> in questions and <i>never</i> in negatives (<i>Have you <b>ever</b> fasted?</i> · <i>She has <b>never</b> smoked</i>), and for <b>recent events</b> with <i>just / already / yet</i> (<i>She has <b>just</b> started a diet</i>; <i>I haven't quit sugar <b>yet</b></i>).</p>",
        "<p>It also describes a situation continuing up to now with <b>for + a period</b> or <b>since + a starting point</b> (<i>He has exercised <b>since</b> January</i>). Contrast with the <b>past simple</b>, which needs a finished time (<i>yesterday, in 2010</i>): when the time is stated and over, use the past simple. So we say <i>I <u>saw</u> him yesterday</i>, never <i>I have seen him yesterday</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "I have recently taken up swimming."
        },
        {
          "type": "correct",
          "text": "She has never smoked."
        },
        {
          "type": "correct",
          "text": "Have you ever followed a vegetarian diet?"
        },
        {
          "type": "correct",
          "text": "He has improved his health since January."
        },
        {
          "type": "incorrect",
          "text": "I have given up sugar last month. (finished time → past simple: gave up)"
        }
      ],
      "mistakes": [
        "Using the present perfect with a finished time: <em>I have started yesterday</em> instead of <em>I <u>started</u> yesterday</em>.",
        "Wrong participle: <em>I have <u>went</u></em> instead of <em>I have <u>gone</u></em>.",
        "Putting <em>yet</em> in a positive statement: <em>I have finished yet</em> instead of <em>already</em>."
      ],
      "traps": [
        "No stated time / a life experience → present perfect; a finished-time word → past simple.",
        "<em>for</em> + a period; <em>since</em> + a starting point.",
        "<em>already/just</em> in positives; <em>yet</em> in questions and negatives."
      ],
      "arabicInsight": "<p>نستخدم <b>المضارع التام (present perfect)</b> — <b>have/has + التصريف الثالث</b> — للتعبير عن <b>تجربةٍ حياتية</b> بلا وقتٍ محدّد (<i>I have tried yoga</i>) أو عن <b>تغييرٍ حديث</b> مع <i>just/already/yet</i>، أو عن حالةٍ مستمرّة حتى الآن مع <b>for/since</b> (<i>since January</i>). أمّا عند ذكر <b>وقتٍ منتهٍ</b> (<i>yesterday, last month</i>) فنستخدم الماضي البسيط، فلا نقول <u>I have started yesterday</u>. (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the present perfect: 'I ____ a healthier lifestyle this year.'",
          "options": [
            "adopted yesterday",
            "have adopted",
            "adopt",
            "am adopting"
          ],
          "answer": 1,
          "explain": "Recent change, no finished time → present perfect."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct form: '____ you ever tried meditation?'",
          "options": [
            "Did",
            "Have",
            "Has",
            "Are"
          ],
          "answer": 1,
          "explain": "<em>Have + you + ever + past participle</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the right time word: 'She has ____ given up fast food.'",
          "options": [
            "yet",
            "already",
            "since",
            "ago"
          ],
          "answer": 1,
          "explain": "<em>already</em> in a positive statement."
        },
        {
          "type": "mcq",
          "prompt": "for or since? 'He has exercised ____ 2020.'",
          "options": [
            "for",
            "since",
            "ago",
            "from"
          ],
          "answer": 1,
          "explain": "<em>since</em> + a starting point."
        },
        {
          "type": "fill",
          "prompt": "Complete the present perfect.",
          "sentence": "We ____ (improve) our diet recently.",
          "answers": [
            "have improved"
          ],
          "explain": "<em>have + past participle</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the question.",
          "sentence": "____ she started the new routine yet?",
          "answers": [
            "has"
          ],
          "explain": "<em>Has + subject + past participle</em>."
        },
        {
          "type": "fill",
          "prompt": "for or since?",
          "sentence": "I have known him ____ five years.",
          "answers": [
            "for"
          ],
          "explain": "<em>for</em> + a period."
        },
        {
          "type": "transform",
          "prompt": "Make present perfect: <em>I / never / break / a bone</em>",
          "answer": [
            "i have never broken a bone",
            "i've never broken a bone"
          ],
          "explain": "<em>have + never + past participle</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite correctly: <em>She has finished her workout yesterday.</em>",
          "answer": [
            "she finished her workout yesterday"
          ],
          "explain": "Finished time → past simple."
        },
        {
          "type": "transform",
          "prompt": "Make a question: <em>You have tried the new gym.</em>",
          "answer": [
            "have you tried the new gym"
          ],
          "explain": "Invert <em>have</em> and the subject."
        },
        {
          "type": "error",
          "prompt": "Correct the verb.",
          "given": "I have went to the doctor twice this month.",
          "answer": [
            "i have gone to the doctor twice this month",
            "i've gone to the doctor twice this month"
          ],
          "explain": "The participle of <em>go</em> is <em>gone</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the tense.",
          "given": "He has joined the team in 2019.",
          "answer": [
            "he joined the team in 2019"
          ],
          "explain": "Finished time (<em>in 2019</em>) → past simple."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a present perfect.",
          "bank": [
            "She",
            "has",
            "just",
            "started",
            "yoga"
          ],
          "answer": "She has just started yoga",
          "explain": "<em>has + just + past participle</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a question.",
          "bank": [
            "Have",
            "you",
            "ever",
            "run",
            "a",
            "marathon"
          ],
          "answer": "Have you ever run a marathon",
          "explain": "Question word order with <em>have</em>."
        },
        {
          "type": "match",
          "prompt": "Match each time word to its use.",
          "pairs": [
            {
              "l": "already",
              "r": "positive statement"
            },
            {
              "l": "yet",
              "r": "questions and negatives"
            },
            {
              "l": "since",
              "r": "a starting point"
            }
          ],
          "explain": "Time markers of the present perfect."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the present perfect: 'They ____ their habits a lot lately.'",
          "options": [
            "changed yesterday",
            "have changed",
            "change",
            "are changing"
          ],
          "answer": 1,
          "explain": "Recent change, no finished time → present perfect."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct form: '____ he ever visited Japan?'",
          "options": [
            "Did",
            "Has",
            "Have",
            "Is"
          ],
          "answer": 1,
          "explain": "<em>Has + he + ever + past participle</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the right time word: 'I haven't paid the bill ____.'",
          "options": [
            "already",
            "just",
            "yet",
            "since"
          ],
          "answer": 2,
          "explain": "<em>yet</em> in a negative statement."
        },
        {
          "type": "mcq",
          "prompt": "for or since? 'She has worked here ____ six months.'",
          "options": [
            "since",
            "for",
            "ago",
            "from"
          ],
          "answer": 1,
          "explain": "<em>for</em> + a period."
        },
        {
          "type": "fill",
          "prompt": "Complete the present perfect.",
          "sentence": "He ____ (give) up coffee.",
          "answers": [
            "has given"
          ],
          "explain": "<em>has + past participle</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the question.",
          "sentence": "____ they finished the project yet?",
          "answers": [
            "have"
          ],
          "explain": "<em>Have + subject + past participle</em>."
        },
        {
          "type": "fill",
          "prompt": "for or since?",
          "sentence": "We have lived in Dubai ____ 2018.",
          "answers": [
            "since"
          ],
          "explain": "<em>since</em> + a starting point."
        },
        {
          "type": "transform",
          "prompt": "Make present perfect: <em>We / never / try / sushi</em>",
          "answer": [
            "we have never tried sushi",
            "we've never tried sushi"
          ],
          "explain": "<em>have + never + past participle</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite correctly: <em>I have seen that film last week.</em>",
          "answer": [
            "i saw that film last week"
          ],
          "explain": "Finished time → past simple."
        },
        {
          "type": "transform",
          "prompt": "Make a question: <em>She has read the article.</em>",
          "answer": [
            "has she read the article"
          ],
          "explain": "Invert <em>has</em> and the subject."
        },
        {
          "type": "error",
          "prompt": "Correct the verb.",
          "given": "They have took the early bus.",
          "answer": [
            "they have taken the early bus",
            "they've taken the early bus"
          ],
          "explain": "The participle of <em>take</em> is <em>taken</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the tense.",
          "given": "She has graduated in 2021.",
          "answer": [
            "she graduated in 2021"
          ],
          "explain": "Finished time (<em>in 2021</em>) → past simple."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a present perfect.",
          "bank": [
            "I",
            "have",
            "already",
            "booked",
            "the",
            "tickets"
          ],
          "answer": "I have already booked the tickets",
          "explain": "<em>have + already + past participle</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a question.",
          "bank": [
            "Has",
            "she",
            "ever",
            "lived",
            "abroad"
          ],
          "answer": "Has she ever lived abroad",
          "explain": "Question word order with <em>has</em>."
        },
        {
          "type": "match",
          "prompt": "Match each marker to its use.",
          "pairs": [
            {
              "l": "just",
              "r": "a very recent action"
            },
            {
              "l": "ever",
              "r": "questions about experience"
            },
            {
              "l": "for",
              "r": "a length of time"
            }
          ],
          "explain": "Markers of the present perfect."
        }
      ]
    },
    "t1s7_L5_historicPresent": {
      "id": "t1s7_L5_historicPresent",
      "code": "CCG",
      "title": "The Historic Present",
      "chapter": "Chapter 2 — Infotainment",
      "week": "Unit 2 · Infotainment · Wk 8 (CCG grammar)",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.S.F.1.1",
      "source_ccg": "CCG Unit 2 (Infotainment), Week 8, Lessons 9-10 — grammar 'Historic Present' listed without a number (Narrating a Story). Rendered as a 'CCG' pill, not a numbered G-code.",
      "vocabulary": [
        "all of a sudden",
        "panic",
        "ditch",
        "hurry",
        "witness",
        "dramatic",
        "narrate",
        "incident"
      ],
      "explanation": [
        "<p>The <b>historic present</b> (or narrative present) uses the <b>present simple</b> to tell a <b>past</b> story, making it feel vivid and immediate, as if it were happening now. It is very common in spoken storytelling, jokes and summaries: <i>So I'<b>m</b> walking home and this man <b>comes</b> up to me…</i>. The events are finished, but we narrate them in the present for effect.</p>",
        "<p>We often set the scene in the past and then switch to the historic present at the dramatic moment. The normal present-tense rules still apply — including the third-person <b>-s</b> (<i>he runs</i>, <i>she sees</i>) — so stay consistent within a stretch of narration. It is a <b>stylistic</b> choice: formal essays and reports normally keep past tenses.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "So I'm walking down the street, and suddenly a dog runs out in front of me."
        },
        {
          "type": "correct",
          "text": "She opens the door, sees the mess, and can't believe her eyes."
        },
        {
          "type": "correct",
          "text": "It's 1969. Armstrong steps onto the Moon and the whole world watches."
        },
        {
          "type": "correct",
          "text": "I'm minding my own business when all of a sudden the alarm goes off."
        },
        {
          "type": "incorrect",
          "text": "So he walk into the room and look around. (third person needs -s → he walks, looks)"
        }
      ],
      "mistakes": [
        "Dropping the third-person <em>-s</em>: <em>he walk in</em> instead of <em>he <u>walks</u> in</em>.",
        "Drifting between tenses by accident: <em>She opens the door and saw the mess</em> — keep one tense for effect.",
        "Using the historic present in formal essays where past tenses are expected."
      ],
      "traps": [
        "Historic present = present simple used to narrate <em>past</em> events for vividness.",
        "Third person still takes <em>-s</em>: <em>he runs</em>, <em>she sees</em>.",
        "It is a style choice; formal writing usually keeps past tenses."
      ],
      "arabicInsight": "<p>الـ <b>historic present</b> (الحاضر السردي) هو استخدام <b>المضارع البسيط</b> لسرد أحداثٍ <b>ماضية</b> بهدف جعلها أكثر حيويةً وكأنّها تقع الآن، وهو شائعٌ في الحكي الشفهي والملخّصات (<i>So I'm walking and this man comes up to me…</i>). تبقى قواعد المضارع كما هي، ومنها إضافة <b>-s</b> للغائب المفرد (<i>he walks</i>)، وهو خيارٌ أسلوبيّ؛ أمّا في الكتابة الرسمية فنستعمل الأزمنة الماضية عادةً. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Which sentence uses the historic present?",
          "options": [
            "Yesterday I walked home and saw a fire.",
            "So I'm walking home and I see a fire.",
            "I will walk home and see a fire.",
            "I have walked home and seen a fire."
          ],
          "answer": 1,
          "explain": "Present simple narrating a past event."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct verb: 'She opens the box and ____ a letter.'",
          "options": [
            "found",
            "finds",
            "finding",
            "will find"
          ],
          "answer": 1,
          "explain": "Present simple; third person <em>-s</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the consistent narration.",
          "options": [
            "He runs in, grabbed the keys, and leaves.",
            "He runs in, grabs the keys, and leaves.",
            "He ran in, grabs the keys, and left.",
            "He run in, grab the keys, and leave."
          ],
          "answer": 1,
          "explain": "Keep one tense; third person <em>-s</em>."
        },
        {
          "type": "mcq",
          "prompt": "Where is the historic present most natural?",
          "options": [
            "a formal report",
            "spoken storytelling",
            "a legal contract",
            "an exam essay"
          ],
          "answer": 1,
          "explain": "It suits vivid spoken narration."
        },
        {
          "type": "fill",
          "prompt": "Complete in the historic present.",
          "sentence": "So I'm sitting there, and this stranger ____ (walk) up to me.",
          "answers": [
            "walks"
          ],
          "explain": "Third person present <em>-s</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete in the historic present.",
          "sentence": "The hero ____ (open) the door and freezes.",
          "answers": [
            "opens"
          ],
          "explain": "Present simple, third person <em>-s</em>."
        },
        {
          "type": "fill",
          "prompt": "Keep the narration consistent.",
          "sentence": "She turns around and ____ (see) the shadow.",
          "answers": [
            "sees"
          ],
          "explain": "Stay in the present simple."
        },
        {
          "type": "transform",
          "prompt": "Rewrite in the historic present: <em>He opened the door and looked inside.</em>",
          "answer": [
            "he opens the door and looks inside"
          ],
          "explain": "Past → present simple for vividness."
        },
        {
          "type": "transform",
          "prompt": "Rewrite in the historic present: <em>The crowd cheered as she crossed the line.</em>",
          "answer": [
            "the crowd cheers as she crosses the line"
          ],
          "explain": "Both verbs → present simple."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a past-tense report: <em>So I walk in and everyone stares at me.</em>",
          "answer": [
            "so i walked in and everyone stared at me",
            "i walked in and everyone stared at me"
          ],
          "explain": "Historic present → past simple for a report."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "So he walk in and looks around.",
          "answer": [
            "so he walks in and looks around"
          ],
          "explain": "Third person needs <em>-s</em>."
        },
        {
          "type": "error",
          "prompt": "Make the narration consistent.",
          "given": "She opens the letter and gasped.",
          "answer": [
            "she opens the letter and gasps"
          ],
          "explain": "Keep one tense in the historic present."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a historic-present sentence.",
          "bank": [
            "So",
            "I'm",
            "walking",
            "home",
            "and",
            "a",
            "car",
            "stops"
          ],
          "answer": "So I'm walking home and a car stops",
          "explain": "Setting + present-simple action."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a historic-present sentence.",
          "bank": [
            "He",
            "opens",
            "the",
            "door",
            "and",
            "sees",
            "nothing"
          ],
          "answer": "He opens the door and sees nothing",
          "explain": "Present simple narration."
        },
        {
          "type": "match",
          "prompt": "Match each feature to the historic present.",
          "pairs": [
            {
              "l": "tense used",
              "r": "present simple"
            },
            {
              "l": "effect",
              "r": "vivid, immediate"
            },
            {
              "l": "typical context",
              "r": "spoken storytelling"
            }
          ],
          "explain": "Key features of the narrative present."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Which sentence uses the historic present?",
          "options": [
            "Last night we drove to the coast and stopped.",
            "So we're driving to the coast and the engine stops.",
            "We will drive to the coast and stop.",
            "We had driven to the coast and stopped."
          ],
          "answer": 1,
          "explain": "Present simple narrating a past event."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct verb: 'He picks up the phone and ____ a strange voice.'",
          "options": [
            "heard",
            "hears",
            "hearing",
            "will hear"
          ],
          "answer": 1,
          "explain": "Present simple; third person <em>-s</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the consistent narration.",
          "options": [
            "She enters, looked around, and sits down.",
            "She enters, looks around, and sits down.",
            "She entered, looks around, and sat down.",
            "She enter, look around, and sit down."
          ],
          "answer": 1,
          "explain": "Keep one tense; third person <em>-s</em>."
        },
        {
          "type": "mcq",
          "prompt": "Where is the historic present LEAST appropriate?",
          "options": [
            "a friend's anecdote",
            "a film summary",
            "a formal essay",
            "a joke"
          ],
          "answer": 2,
          "explain": "Formal essays normally use past tenses."
        },
        {
          "type": "fill",
          "prompt": "Complete in the historic present.",
          "sentence": "I'm standing at the bus stop when a man ____ (drop) his wallet.",
          "answers": [
            "drops"
          ],
          "explain": "Third person present <em>-s</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete in the historic present.",
          "sentence": "The detective ____ (study) the photo and smiles.",
          "answers": [
            "studies"
          ],
          "explain": "Third person <em>-s</em> (y → ies)."
        },
        {
          "type": "fill",
          "prompt": "Keep the narration consistent.",
          "sentence": "He reaches the summit and ____ (raise) the flag.",
          "answers": [
            "raises"
          ],
          "explain": "Stay in the present simple."
        },
        {
          "type": "transform",
          "prompt": "Rewrite in the historic present: <em>She picked up the pen and signed the form.</em>",
          "answer": [
            "she picks up the pen and signs the form"
          ],
          "explain": "Past → present simple for vividness."
        },
        {
          "type": "transform",
          "prompt": "Rewrite in the historic present: <em>The lights went out and everyone screamed.</em>",
          "answer": [
            "the lights go out and everyone screams"
          ],
          "explain": "Both verbs → present simple."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a past-tense report: <em>He runs onto the pitch and scores.</em>",
          "answer": [
            "he ran onto the pitch and scored"
          ],
          "explain": "Historic present → past simple for a report."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "Then the door open and a man steps out.",
          "answer": [
            "then the door opens and a man steps out"
          ],
          "explain": "Third person needs <em>-s</em>."
        },
        {
          "type": "error",
          "prompt": "Make the narration consistent.",
          "given": "He grabs the bag and ran away.",
          "answer": [
            "he grabs the bag and runs away"
          ],
          "explain": "Keep one tense in the historic present."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a historic-present sentence.",
          "bank": [
            "Suddenly",
            "the",
            "phone",
            "rings",
            "and",
            "everyone",
            "stops"
          ],
          "answer": "Suddenly the phone rings and everyone stops",
          "explain": "Present-simple narration."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a historic-present sentence.",
          "bank": [
            "She",
            "steps",
            "outside",
            "and",
            "feels",
            "the",
            "rain"
          ],
          "answer": "She steps outside and feels the rain",
          "explain": "Present simple narration."
        },
        {
          "type": "match",
          "prompt": "Match each label to the example.",
          "pairs": [
            {
              "l": "present simple",
              "r": "he walks in"
            },
            {
              "l": "third-person -s",
              "r": "she sees it"
            },
            {
              "l": "spoken style",
              "r": "so I'm telling you…"
            }
          ],
          "explain": "Recognising the narrative present."
        }
      ]
    },
    "t1s7_L6_pastSimpleVsCont": {
      "id": "t1s7_L6_pastSimpleVsCont",
      "code": "Extension",
      "title": "Past Simple vs Past Continuous",
      "chapter": "Chapter 2 — Infotainment",
      "week": "Unit 2 · Infotainment (teacher extension)",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.WR.P.1.1",
      "source_ccg": "Teacher extension — themed to Unit 2 (Infotainment); rides the CCG 'Narrating a Story' content (interrupted past actions) and complements the historic present. Not a CCG grammar code.",
      "vocabulary": [
        "suddenly",
        "while",
        "meanwhile",
        "background",
        "interrupt",
        "moment",
        "event",
        "just then"
      ],
      "explanation": [
        "<p>The <b>past simple</b> (verb + <i>-ed</i>, or an irregular form) describes a <b>completed</b> past action. The <b>past continuous</b> — <b>was/were + -ing</b> — describes an action <b>in progress</b> at a past moment, often the <b>background</b> of a story: <i>I <b>was watching</b> TV when the phone <b>rang</b>.</i> The continuous sets the scene; the simple is the shorter, interrupting action.</p>",
        "<p>Use <b>while</b> with the past continuous and <b>when</b> with the past simple: <i>While I <b>was cooking</b>, the doorbell <b>rang</b>.</i> Two background actions at the same time both take the continuous (<i>She was reading while he was cooking</i>). For a <b>sequence</b> of completed events, use the past simple throughout: <i>He woke up, got dressed, and left.</i></p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "I was sleeping when the alarm went off."
        },
        {
          "type": "correct",
          "text": "While she was studying, the power cut out."
        },
        {
          "type": "correct",
          "text": "They were watching the news when the story broke."
        },
        {
          "type": "correct",
          "text": "He arrived, sat down, and opened his laptop."
        },
        {
          "type": "incorrect",
          "text": "I watched TV when the phone was ringing. (longer background → I was watching TV when the phone rang)"
        }
      ],
      "mistakes": [
        "Using the past simple for the interrupted background: <em>I cooked when he called</em> instead of <em>I <u>was cooking</u> when he called</em>.",
        "Using the continuous for a quick completed action: <em>The phone was ringing once</em> instead of <em>rang</em>.",
        "Pairing <em>while</em> with the simple: use <em>while</em> with the continuous and <em>when</em> with the simple."
      ],
      "traps": [
        "Background / in progress → past continuous (<em>was/were + -ing</em>); short, completed, interrupting action → past simple.",
        "<em>while</em> + continuous; <em>when</em> + simple (usually).",
        "A sequence of finished events → past simple throughout."
      ],
      "arabicInsight": "<p>يصف <b>الماضي البسيط (past simple)</b> فعلاً مكتملاً في الماضي، بينما يصف <b>الماضي المستمر (past continuous)</b> — <b>was/were + -ing</b> — فعلاً كان جارياً في لحظةٍ ماضية، وغالباً ما يكون <b>خلفيةً</b> للحدث: <i>I <b>was watching</b> TV when the phone <b>rang</b></i>. نستعمل <b>while</b> مع المستمر و<b>when</b> مع البسيط، أمّا تسلسل الأحداث المكتملة فيُروى كلّه بالماضي البسيط. (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct tenses: 'I ____ a book when the lights ____ out.'",
          "options": [
            "read / were going",
            "was reading / went",
            "was reading / were going",
            "read / went"
          ],
          "answer": 1,
          "explain": "Background continuous + interrupting simple."
        },
        {
          "type": "mcq",
          "prompt": "Pick the right form: 'While we ____ dinner, the guests arrived.'",
          "options": [
            "had",
            "were having",
            "have",
            "has"
          ],
          "answer": 1,
          "explain": "<em>while</em> + past continuous (background)."
        },
        {
          "type": "mcq",
          "prompt": "Choose the sequence: 'He woke up, ____ dressed, and left.'",
          "options": [
            "was getting",
            "gets",
            "got",
            "get"
          ],
          "answer": 2,
          "explain": "Sequence of completed actions → past simple."
        },
        {
          "type": "mcq",
          "prompt": "Which is the interrupting action? 'She was walking home when it ____ to rain.'",
          "options": [
            "was starting",
            "started",
            "starts",
            "start"
          ],
          "answer": 1,
          "explain": "Short interrupting action → past simple."
        },
        {
          "type": "fill",
          "prompt": "Complete with the past continuous.",
          "sentence": "They ____ (watch) the match when the screen froze.",
          "answers": [
            "were watching"
          ],
          "explain": "Background action → <em>were + -ing</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the past simple.",
          "sentence": "While I was cooking, the smoke alarm ____ (go) off.",
          "answers": [
            "went"
          ],
          "explain": "Interrupting action → past simple."
        },
        {
          "type": "fill",
          "prompt": "Complete with the past continuous.",
          "sentence": "At 8 p.m. we ____ (drive) to the airport.",
          "answers": [
            "were driving"
          ],
          "explain": "Action in progress at a past time."
        },
        {
          "type": "transform",
          "prompt": "Join with 'when': <em>I was leaving. The phone rang.</em>",
          "answer": [
            "i was leaving when the phone rang"
          ],
          "explain": "Continuous background + simple interruption."
        },
        {
          "type": "transform",
          "prompt": "Join with 'while': <em>She was reading. He was cooking.</em>",
          "answer": [
            "she was reading while he was cooking",
            "while she was reading he was cooking"
          ],
          "explain": "Two parallel background actions → both continuous."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a sequence (past simple): <em>He was opening the door and was turning on the light.</em>",
          "answer": [
            "he opened the door and turned on the light"
          ],
          "explain": "Completed sequence → past simple."
        },
        {
          "type": "error",
          "prompt": "Correct the tenses.",
          "given": "I watched TV when the phone was ringing.",
          "answer": [
            "i was watching tv when the phone rang"
          ],
          "explain": "Background → continuous; interruption → simple."
        },
        {
          "type": "error",
          "prompt": "Correct the tense.",
          "given": "While she was study, the bell rang.",
          "answer": [
            "while she was studying, the bell rang",
            "while she was studying the bell rang"
          ],
          "explain": "Past continuous needs <em>-ing</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "We",
            "were",
            "sleeping",
            "when",
            "the",
            "storm",
            "began"
          ],
          "answer": "We were sleeping when the storm began",
          "explain": "Continuous background + simple interruption."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "While",
            "he",
            "was",
            "driving",
            "it",
            "started",
            "to",
            "snow"
          ],
          "answer": "While he was driving it started to snow",
          "explain": "<em>while</em> + continuous, then simple."
        },
        {
          "type": "match",
          "prompt": "Match each use to its tense.",
          "pairs": [
            {
              "l": "background in progress",
              "r": "past continuous"
            },
            {
              "l": "short interruption",
              "r": "past simple"
            },
            {
              "l": "finished sequence",
              "r": "past simple"
            }
          ],
          "explain": "Choosing between the two past tenses."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct tenses: 'She ____ a film when her brother ____ in.'",
          "options": [
            "watched / was walking",
            "was watching / walked",
            "watched / walked",
            "was watching / was walking"
          ],
          "answer": 1,
          "explain": "Background continuous + interrupting simple."
        },
        {
          "type": "mcq",
          "prompt": "Pick the right form: 'While they ____ football, it began to rain.'",
          "options": [
            "played",
            "were playing",
            "play",
            "have played"
          ],
          "answer": 1,
          "explain": "<em>while</em> + past continuous (background)."
        },
        {
          "type": "mcq",
          "prompt": "Choose the sequence: 'I opened the email, ____ it, and replied.'",
          "options": [
            "was reading",
            "reads",
            "read",
            "reading"
          ],
          "answer": 2,
          "explain": "Sequence of completed actions → past simple."
        },
        {
          "type": "mcq",
          "prompt": "Which is the interrupting action? 'He was sleeping when the alarm ____ off.'",
          "options": [
            "was going",
            "went",
            "goes",
            "go"
          ],
          "answer": 1,
          "explain": "Short interrupting action → past simple."
        },
        {
          "type": "fill",
          "prompt": "Complete with the past continuous.",
          "sentence": "We ____ (wait) at the gate when the flight was cancelled.",
          "answers": [
            "were waiting"
          ],
          "explain": "Background action → <em>were + -ing</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the past simple.",
          "sentence": "While he was talking, the line ____ (drop).",
          "answers": [
            "dropped"
          ],
          "explain": "Interrupting action → past simple."
        },
        {
          "type": "fill",
          "prompt": "Complete with the past continuous.",
          "sentence": "At midnight she ____ (study) for the exam.",
          "answers": [
            "was studying"
          ],
          "explain": "Action in progress at a past time."
        },
        {
          "type": "transform",
          "prompt": "Join with 'when': <em>They were eating. The lights went out.</em>",
          "answer": [
            "they were eating when the lights went out"
          ],
          "explain": "Continuous background + simple interruption."
        },
        {
          "type": "transform",
          "prompt": "Join with 'while': <em>I was writing. My sister was singing.</em>",
          "answer": [
            "i was writing while my sister was singing",
            "while i was writing my sister was singing"
          ],
          "explain": "Two parallel background actions → both continuous."
        },
        {
          "type": "transform",
          "prompt": "Rewrite as a sequence (past simple): <em>She was packing her bag and was calling a taxi.</em>",
          "answer": [
            "she packed her bag and called a taxi"
          ],
          "explain": "Completed sequence → past simple."
        },
        {
          "type": "error",
          "prompt": "Correct the tenses.",
          "given": "I cooked dinner when the guests were arriving.",
          "answer": [
            "i was cooking dinner when the guests arrived"
          ],
          "explain": "Background → continuous; interruption → simple."
        },
        {
          "type": "error",
          "prompt": "Correct the tense.",
          "given": "While we were play, the rain started.",
          "answer": [
            "while we were playing, the rain started",
            "while we were playing the rain started"
          ],
          "explain": "Past continuous needs <em>-ing</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "They",
            "were",
            "reading",
            "when",
            "the",
            "bell",
            "rang"
          ],
          "answer": "They were reading when the bell rang",
          "explain": "Continuous background + simple interruption."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "While",
            "she",
            "was",
            "cooking",
            "the",
            "phone",
            "rang"
          ],
          "answer": "While she was cooking the phone rang",
          "explain": "<em>while</em> + continuous, then simple."
        },
        {
          "type": "match",
          "prompt": "Match each clue to its tense.",
          "pairs": [
            {
              "l": "at 9 p.m. (in progress)",
              "r": "past continuous"
            },
            {
              "l": "suddenly / once",
              "r": "past simple"
            },
            {
              "l": "then … then …",
              "r": "past simple"
            }
          ],
          "explain": "Tense signals in past narration."
        }
      ]
    },
    "t1s7_L7_reportedSpeech": {
      "id": "t1s7_L7_reportedSpeech",
      "code": "Extension",
      "title": "Reported Speech & Reporting Verbs",
      "chapter": "Chapter 2 — Infotainment",
      "week": "Unit 2 · Infotainment (teacher extension)",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.S.IP.6.1",
      "source_ccg": "Teacher extension — themed to Unit 2 (Infotainment); rides the CCG 'News Report' lesson (Wk 7) and reporting within narration. Not a CCG grammar code.",
      "vocabulary": [
        "report",
        "claim",
        "announce",
        "deny",
        "according to",
        "source",
        "statement",
        "witness"
      ],
      "explanation": [
        "<p><b>Reported (indirect) speech</b> tells what someone said without quotation marks. We usually <b>backshift</b> the tense one step into the past: present simple → past simple, present continuous → past continuous, <i>will</i> → <i>would</i>, <i>can</i> → <i>could</i>. <i>'I am tired'</i> → <i>She said (that) she <b>was</b> tired.</i> Pronouns and time/place words also shift: <i>now → then</i>, <i>today → that day</i>, <i>here → there</i>.</p>",
        "<p>With <b>say</b> we do not name the listener; with <b>tell</b> we must: <i>He <b>said</b> (that)…</i> / <i>He <b>told me</b> (that)…</i>. <b>Reported questions</b> use statement word order (no inversion, no question mark) and <b>if/whether</b> for yes-no questions: <i>'Are you ready?'</i> → <i>She asked <b>if</b> I <b>was</b> ready.</i> Reporting verbs add meaning: <i>claim, deny, announce, admit</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "She said that she was feeling better."
        },
        {
          "type": "correct",
          "text": "He told me he would call later."
        },
        {
          "type": "correct",
          "text": "The reporter announced that the road had reopened."
        },
        {
          "type": "correct",
          "text": "They asked whether the match was cancelled."
        },
        {
          "type": "incorrect",
          "text": "He said me that he is tired. (use 'told me' or 'said that'; backshift → was tired)"
        }
      ],
      "mistakes": [
        "Mixing up <em>say</em> and <em>tell</em>: <em>He said me</em> instead of <em>He told me</em> or <em>He said</em>.",
        "Forgetting to backshift: <em>She said she is tired</em> instead of <em>she <u>was</u> tired</em>.",
        "Keeping question word order in reported questions: <em>She asked was I ready</em> instead of <em>She asked <u>if I was</u> ready</em>."
      ],
      "traps": [
        "Backshift one step: present → past, <em>will</em> → <em>would</em>, <em>can</em> → <em>could</em>.",
        "<em>tell</em> needs a listener (<em>told me</em>); <em>say</em> does not.",
        "Reported questions: no inversion, no question mark, use <em>if/whether</em> for yes-no."
      ],
      "arabicInsight": "<p>في <b>الكلام المنقول (reported speech)</b> نروي ما قاله شخصٌ دون علامات اقتباس، وغالباً <b>نُرجِع الزمن خطوةً</b> إلى الماضي: المضارع البسيط ← الماضي البسيط، و<i>will</i> ← <i>would</i>، و<i>can</i> ← <i>could</i>، وتتغيّر الضمائر وكلمات الزمان والمكان (<i>now → then</i>). نستخدم <b>tell</b> مع ذكر المستمع (<i>told me</i>) و<b>say</b> دونه، وفي الأسئلة المنقولة نستعمل ترتيب الجملة الخبرية مع <b>if/whether</b>. (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the reported form: 'I am busy.' → She said that she ____ busy.",
          "options": [
            "is",
            "was",
            "will be",
            "has been"
          ],
          "answer": 1,
          "explain": "Present → past (backshift)."
        },
        {
          "type": "mcq",
          "prompt": "say or tell? 'He ____ me that the news was true.'",
          "options": [
            "said",
            "told",
            "says",
            "say"
          ],
          "answer": 1,
          "explain": "<em>tell</em> needs a listener (<em>me</em>)."
        },
        {
          "type": "mcq",
          "prompt": "Backshift 'will': 'I will help.' → He said he ____ help.",
          "options": [
            "will",
            "would",
            "wills",
            "is going"
          ],
          "answer": 1,
          "explain": "<em>will → would</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the reported question for 'Are you ready?'",
          "options": [
            "She asked are you ready.",
            "She asked if I was ready.",
            "She asked was I ready.",
            "She asked if am I ready."
          ],
          "answer": 1,
          "explain": "No inversion; use <em>if</em>; backshift."
        },
        {
          "type": "fill",
          "prompt": "Report the statement.",
          "sentence": "'I can swim.' → He said he ____ swim.",
          "answers": [
            "could"
          ],
          "explain": "<em>can → could</em>."
        },
        {
          "type": "fill",
          "prompt": "say or tell?",
          "sentence": "She ____ that the shop was closed.",
          "answers": [
            "said"
          ],
          "explain": "No listener named → <em>said</em>."
        },
        {
          "type": "fill",
          "prompt": "Backshift the verb.",
          "sentence": "'We are leaving.' → They said they ____ leaving.",
          "answers": [
            "were"
          ],
          "explain": "Present continuous → past continuous."
        },
        {
          "type": "transform",
          "prompt": "Report it: <em>'I feel sick,' she said.</em>",
          "answer": [
            "she said that she felt sick",
            "she said she felt sick"
          ],
          "explain": "Present → past."
        },
        {
          "type": "transform",
          "prompt": "Report it: <em>'I will phone you,' he told me.</em>",
          "answer": [
            "he told me that he would phone me",
            "he told me he would phone me"
          ],
          "explain": "<em>will → would</em>; pronoun shift."
        },
        {
          "type": "transform",
          "prompt": "Report the question: <em>'Where do you live?' she asked.</em>",
          "answer": [
            "she asked where i lived"
          ],
          "explain": "Statement order; backshift; no question mark."
        },
        {
          "type": "error",
          "prompt": "Correct the report.",
          "given": "He said me that he is tired.",
          "answer": [
            "he told me that he was tired",
            "he said that he was tired"
          ],
          "explain": "<em>say</em>/<em>tell</em> + backshift."
        },
        {
          "type": "error",
          "prompt": "Correct the reported question.",
          "given": "She asked was I coming.",
          "answer": [
            "she asked if i was coming",
            "she asked whether i was coming"
          ],
          "explain": "No inversion; use <em>if/whether</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into reported speech.",
          "bank": [
            "He",
            "said",
            "that",
            "he",
            "was",
            "busy"
          ],
          "answer": "He said that he was busy",
          "explain": "Backshifted statement."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a reported question.",
          "bank": [
            "She",
            "asked",
            "if",
            "I",
            "was",
            "ready"
          ],
          "answer": "She asked if I was ready",
          "explain": "Statement order + <em>if</em>."
        },
        {
          "type": "match",
          "prompt": "Match each direct form to its reported form.",
          "pairs": [
            {
              "l": "am/is/are",
              "r": "was/were"
            },
            {
              "l": "will",
              "r": "would"
            },
            {
              "l": "can",
              "r": "could"
            }
          ],
          "explain": "Backshift table."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the reported form: 'I live in Dubai.' → He said that he ____ in Dubai.",
          "options": [
            "lives",
            "lived",
            "will live",
            "has lived"
          ],
          "answer": 1,
          "explain": "Present → past (backshift)."
        },
        {
          "type": "mcq",
          "prompt": "say or tell? 'She ____ that she was leaving.'",
          "options": [
            "told",
            "said",
            "tells",
            "tell"
          ],
          "answer": 1,
          "explain": "No listener named → <em>said</em>."
        },
        {
          "type": "mcq",
          "prompt": "Backshift 'can': 'I can drive.' → She said she ____ drive.",
          "options": [
            "can",
            "could",
            "cans",
            "is able"
          ],
          "answer": 1,
          "explain": "<em>can → could</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the reported question for 'Do you like it?'",
          "options": [
            "He asked do I like it.",
            "He asked if I liked it.",
            "He asked did I like it.",
            "He asked if do I like it."
          ],
          "answer": 1,
          "explain": "No inversion; use <em>if</em>; backshift."
        },
        {
          "type": "fill",
          "prompt": "Report the statement.",
          "sentence": "'I will win.' → He said he ____ win.",
          "answers": [
            "would"
          ],
          "explain": "<em>will → would</em>."
        },
        {
          "type": "fill",
          "prompt": "say or tell?",
          "sentence": "He ____ me that he had finished.",
          "answers": [
            "told"
          ],
          "explain": "<em>tell</em> needs a listener (<em>me</em>)."
        },
        {
          "type": "fill",
          "prompt": "Backshift the verb.",
          "sentence": "'They are watching.' → She said they ____ watching.",
          "answers": [
            "were"
          ],
          "explain": "Present continuous → past continuous."
        },
        {
          "type": "transform",
          "prompt": "Report it: <em>'I am hungry,' he said.</em>",
          "answer": [
            "he said that he was hungry",
            "he said he was hungry"
          ],
          "explain": "Present → past."
        },
        {
          "type": "transform",
          "prompt": "Report it: <em>'I can come,' she told me.</em>",
          "answer": [
            "she told me that she could come",
            "she told me she could come"
          ],
          "explain": "<em>can → could</em>; pronoun shift."
        },
        {
          "type": "transform",
          "prompt": "Report the question: <em>'What time is it?' he asked.</em>",
          "answer": [
            "he asked what time it was"
          ],
          "explain": "Statement order; backshift; no question mark."
        },
        {
          "type": "error",
          "prompt": "Correct the report.",
          "given": "She told that she was late.",
          "answer": [
            "she said that she was late",
            "she told me that she was late"
          ],
          "explain": "<em>tell</em> needs a listener, or use <em>said</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the reported question.",
          "given": "He asked do I want tea.",
          "answer": [
            "he asked if i wanted tea",
            "he asked whether i wanted tea"
          ],
          "explain": "No inversion; <em>if/whether</em>; backshift."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into reported speech.",
          "bank": [
            "She",
            "told",
            "me",
            "that",
            "she",
            "would",
            "call"
          ],
          "answer": "She told me that she would call",
          "explain": "<em>tell</em> + listener + backshift."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a reported question.",
          "bank": [
            "He",
            "asked",
            "whether",
            "I",
            "liked",
            "it"
          ],
          "answer": "He asked whether I liked it",
          "explain": "Statement order + <em>whether</em>."
        },
        {
          "type": "match",
          "prompt": "Match each reporting verb to its meaning.",
          "pairs": [
            {
              "l": "claim",
              "r": "say something is true"
            },
            {
              "l": "deny",
              "r": "say something is not true"
            },
            {
              "l": "announce",
              "r": "state publicly"
            }
          ],
          "explain": "Reporting verbs add meaning."
        }
      ]
    },
    "t1s7_L8_relativeClauses": {
      "id": "t1s7_L8_relativeClauses",
      "code": "Extension",
      "title": "Relative Clauses: Defining & Non-defining",
      "chapter": "Chapter 2 — Infotainment",
      "week": "Unit 2 · Infotainment (teacher extension)",
      "cefr": "B1.2–B2.1 (Stage 7 · ENG.07)",
      "moeSlo": "ENG.07.WR.P.4.1",
      "source_ccg": "Teacher extension — themed to Unit 2 (Infotainment); rides the CCG 'Visual Media and Language' content and describing. Not a CCG grammar code.",
      "vocabulary": [
        "media",
        "influencer",
        "content",
        "audience",
        "platform",
        "viewer",
        "broadcast",
        "screen"
      ],
      "explanation": [
        "<p><b>Relative clauses</b> add information about a noun, joined by relative pronouns: <b>who</b> (people), <b>which</b> (things), <b>that</b> (people or things, in defining clauses), <b>where</b> (places), <b>whose</b> (possession). A <b>defining</b> (restrictive) clause is <b>essential</b> — it tells us <i>which one</i> — and takes <b>no commas</b>: <i>The influencer <b>who</b> started the trend is famous.</i></p>",
        "<p>A <b>non-defining</b> clause adds <b>extra</b>, non-essential information set off with <b>commas</b>; it <b>cannot</b> use <i>that</i>, and the pronoun cannot be dropped: <i>My phone, <b>which</b> I bought last year, is broken.</i> In <b>defining</b> clauses you can <b>omit</b> the relative pronoun when it is the <b>object</b>: <i>The video (that) I watched was long.</i></p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "The app that everyone downloads is free."
        },
        {
          "type": "correct",
          "text": "She follows an influencer who reviews phones."
        },
        {
          "type": "correct",
          "text": "Netflix, which launched in 1997, now streams worldwide."
        },
        {
          "type": "correct",
          "text": "The studio where they film is huge."
        },
        {
          "type": "incorrect",
          "text": "My laptop, that I bought online, is slow. (a non-defining clause cannot use 'that' → which)"
        }
      ],
      "mistakes": [
        "Using <em>that</em> in a non-defining clause: <em>…, that…,</em> instead of <em>…, which…,</em>.",
        "Adding commas to a defining clause: <em>The man, who called, left</em> when the clause is essential.",
        "Using <em>which</em> for people: <em>the woman which</em> instead of <em>the woman <u>who</u></em>."
      ],
      "traps": [
        "Defining (essential) → no commas, <em>that</em> allowed; non-defining (extra) → commas, no <em>that</em>.",
        "<em>who</em> for people, <em>which</em> for things, <em>where</em> for places, <em>whose</em> for possession.",
        "You can drop the relative pronoun in a defining clause when it is the <em>object</em>."
      ],
      "arabicInsight": "<p>تُعطي <b>الجملة الوصلية (relative clause)</b> معلومةً إضافية عن اسمٍ سابق عبر <b>who</b> (للأشخاص) و<b>which</b> (للأشياء) و<b>that</b> (في الجمل المُعرِّفة) و<b>where</b> (للأماكن) و<b>whose</b> (للملكية). الجملة <b>المُعرِّفة</b> ضرورية لتحديد المقصود فلا فاصلة فيها (<i>The app that everyone uses…</i>)، أمّا <b>غير المُعرِّفة</b> فمعلومةٌ إضافية بين فاصلتين ولا تقبل <i>that</i> (<i>Netflix, which launched in 1997, …</i>). (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the relative pronoun: 'The influencer ____ posted the video is popular.'",
          "options": [
            "which",
            "who",
            "where",
            "whose"
          ],
          "answer": 1,
          "explain": "<em>who</em> for people."
        },
        {
          "type": "mcq",
          "prompt": "Choose the relative pronoun: 'This is the app ____ tracks your screen time.'",
          "options": [
            "who",
            "whose",
            "which",
            "where"
          ],
          "answer": 2,
          "explain": "<em>which</em> for things."
        },
        {
          "type": "mcq",
          "prompt": "Non-defining: 'My phone, ____ I bought last year, is slow.'",
          "options": [
            "that",
            "which",
            "who",
            "where"
          ],
          "answer": 1,
          "explain": "Non-defining clause → <em>which</em>, not <em>that</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct pronoun: 'That's the studio ____ they record podcasts.'",
          "options": [
            "which",
            "who",
            "where",
            "whose"
          ],
          "answer": 2,
          "explain": "<em>where</em> for places."
        },
        {
          "type": "fill",
          "prompt": "Complete with a relative pronoun.",
          "sentence": "The blogger ____ channel I follow lives abroad.",
          "answers": [
            "whose"
          ],
          "explain": "<em>whose</em> for possession."
        },
        {
          "type": "fill",
          "prompt": "Complete with a relative pronoun.",
          "sentence": "She shared an article ____ went viral.",
          "answers": [
            "which",
            "that"
          ],
          "explain": "<em>which/that</em> for things in a defining clause."
        },
        {
          "type": "fill",
          "prompt": "Complete the non-defining clause.",
          "sentence": "Our teacher, ____ loves media studies, set the project.",
          "answers": [
            "who"
          ],
          "explain": "Non-defining clause about a person → <em>who</em>."
        },
        {
          "type": "transform",
          "prompt": "Join with a relative clause: <em>The video is funny. I watched it.</em>",
          "answer": [
            "the video that i watched is funny",
            "the video which i watched is funny",
            "the video i watched is funny"
          ],
          "explain": "Object pronoun can be dropped in a defining clause."
        },
        {
          "type": "transform",
          "prompt": "Join with a relative clause: <em>She has a friend. His videos are famous.</em>",
          "answer": [
            "she has a friend whose videos are famous"
          ],
          "explain": "<em>whose</em> for possession."
        },
        {
          "type": "transform",
          "prompt": "Join (non-defining): <em>TikTok is popular. It launched in 2016.</em>",
          "answer": [
            "tiktok, which launched in 2016, is popular",
            "tiktok which launched in 2016 is popular"
          ],
          "explain": "Extra info → <em>which</em> + commas."
        },
        {
          "type": "error",
          "prompt": "Correct the pronoun.",
          "given": "My laptop, that I bought online, is slow.",
          "answer": [
            "my laptop, which i bought online, is slow"
          ],
          "explain": "A non-defining clause cannot use <em>that</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the pronoun.",
          "given": "The woman which presents the show is famous.",
          "answer": [
            "the woman who presents the show is famous"
          ],
          "explain": "<em>who</em> for people."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a defining clause.",
          "bank": [
            "The",
            "app",
            "that",
            "tracks",
            "sleep",
            "is",
            "free"
          ],
          "answer": "The app that tracks sleep is free",
          "explain": "Defining clause, no commas."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "This",
            "is",
            "the",
            "channel",
            "where",
            "I",
            "learn",
            "English"
          ],
          "answer": "This is the channel where I learn English",
          "explain": "<em>where</em> for places."
        },
        {
          "type": "match",
          "prompt": "Match each pronoun to its use.",
          "pairs": [
            {
              "l": "who",
              "r": "people"
            },
            {
              "l": "which",
              "r": "things"
            },
            {
              "l": "whose",
              "r": "possession"
            }
          ],
          "explain": "Relative pronouns."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the relative pronoun: 'The presenter ____ hosts the news is well known.'",
          "options": [
            "which",
            "who",
            "where",
            "whose"
          ],
          "answer": 1,
          "explain": "<em>who</em> for people."
        },
        {
          "type": "mcq",
          "prompt": "Choose the relative pronoun: \"Here's the platform ____ streams live games.\"",
          "options": [
            "who",
            "whose",
            "which",
            "where"
          ],
          "answer": 2,
          "explain": "<em>which</em> for things."
        },
        {
          "type": "mcq",
          "prompt": "Non-defining: 'Our school, ____ opened in 2005, has a media lab.'",
          "options": [
            "that",
            "which",
            "who",
            "where"
          ],
          "answer": 1,
          "explain": "Non-defining clause → <em>which</em>, not <em>that</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct pronoun: 'That's the city ____ the film was shot.'",
          "options": [
            "which",
            "who",
            "where",
            "whose"
          ],
          "answer": 2,
          "explain": "<em>where</em> for places."
        },
        {
          "type": "fill",
          "prompt": "Complete with a relative pronoun.",
          "sentence": "The artist ____ songs went viral is only sixteen.",
          "answers": [
            "whose"
          ],
          "explain": "<em>whose</em> for possession."
        },
        {
          "type": "fill",
          "prompt": "Complete with a relative pronoun.",
          "sentence": "He posted a clip ____ got a million views.",
          "answers": [
            "which",
            "that"
          ],
          "explain": "<em>which/that</em> for things in a defining clause."
        },
        {
          "type": "fill",
          "prompt": "Complete the non-defining clause.",
          "sentence": "My uncle, ____ works in TV, gave a talk.",
          "answers": [
            "who"
          ],
          "explain": "Non-defining clause about a person → <em>who</em>."
        },
        {
          "type": "transform",
          "prompt": "Join with a relative clause: <em>The song is great. She wrote it.</em>",
          "answer": [
            "the song that she wrote is great",
            "the song which she wrote is great",
            "the song she wrote is great"
          ],
          "explain": "Object pronoun can be dropped in a defining clause."
        },
        {
          "type": "transform",
          "prompt": "Join with a relative clause: <em>I have a neighbour. Her blog is famous.</em>",
          "answer": [
            "i have a neighbour whose blog is famous"
          ],
          "explain": "<em>whose</em> for possession."
        },
        {
          "type": "transform",
          "prompt": "Join (non-defining): <em>YouTube is huge. It started in 2005.</em>",
          "answer": [
            "youtube, which started in 2005, is huge",
            "youtube which started in 2005 is huge"
          ],
          "explain": "Extra info → <em>which</em> + commas."
        },
        {
          "type": "error",
          "prompt": "Correct the pronoun.",
          "given": "My tablet, that my dad gave me, is new.",
          "answer": [
            "my tablet, which my dad gave me, is new"
          ],
          "explain": "A non-defining clause cannot use <em>that</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the pronoun.",
          "given": "The actor which won the award spoke first.",
          "answer": [
            "the actor who won the award spoke first"
          ],
          "explain": "<em>who</em> for people."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a defining clause.",
          "bank": [
            "The",
            "website",
            "that",
            "sells",
            "tickets",
            "crashed"
          ],
          "answer": "The website that sells tickets crashed",
          "explain": "Defining clause, no commas."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "That",
            "is",
            "the",
            "place",
            "where",
            "we",
            "film"
          ],
          "answer": "That is the place where we film",
          "explain": "<em>where</em> for places."
        },
        {
          "type": "match",
          "prompt": "Match each clause type to its rule.",
          "pairs": [
            {
              "l": "defining",
              "r": "no commas, 'that' allowed"
            },
            {
              "l": "non-defining",
              "r": "commas, no 'that'"
            },
            {
              "l": "object pronoun",
              "r": "can be omitted (defining)"
            }
          ],
          "explain": "Defining vs non-defining rules."
        }
      ]
    }
  }
}
);
