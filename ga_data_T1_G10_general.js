/* ===== Grammar Academy DATA MODULE (CCG-faithful, validated) ===== */
/* Term 1 · AY 2026-27 · Grade 10 General (ENG.06 · Stage 6) · Mourad Mekki Teacher Toolkit */
/* Unit 1 'Meeting New People, Learning New Things' (4 lessons) + Unit 2 'Come Rain or Shine' (4 lessons). */
/* 8 lessons / 240 questions. All eight grammar items are named in the CCG -> 'CCG' pills; no teacher extensions. No invented G-codes. */
/* Stage-based IDs (t1s6_) so the byte-identical Grade 9 Advanced (ENG.06) twin can reuse the lesson bank. */
GA.register(
{
  "term": "T1-2627",
  "termLabel": "Term 1 · AY 2026–27",
  "grade": "10",
  "stream": "general",
  "streamLabel": "Grade 10 General Pathway",
  "cefr": "B1.2 (Stage 6 · ENG.06)",
  "source": "MoE Comprehensive Curriculum Guide — English Language, Grade 10 General, Term 1 (ENG.06 · Stage 6). Grammar items are named in the CCG scope & sequence and Unit Overview without numbered G-codes, so all eight render as 'CCG' pills.",
  "chapters": [
    {
      "id": "ch1",
      "title": "Chapter 1 — Meeting New People, Learning New Things",
      "lessons": [
        "t1s6_L1_questionTags",
        "t1s6_L2_comparatives",
        "t1s6_L3_modalsSuggestion",
        "t1s6_L4_purpose"
      ]
    },
    {
      "id": "ch2",
      "title": "Chapter 2 — Come Rain or Shine",
      "lessons": [
        "t1s6_L5_historicPresent",
        "t1s6_L6_zeroConditional",
        "t1s6_L7_imperativesRules",
        "t1s6_L8_sequencingAdverbs"
      ]
    }
  ],
  "lessons": {
    "t1s6_L1_questionTags": {
      "id": "t1s6_L1_questionTags",
      "code": "CCG",
      "title": "Question Tags",
      "chapter": "Chapter 1 — Meeting New People, Learning New Things",
      "week": "Unit 1 · Meeting New People… · Unit Overview grammar focus (CCG grammar)",
      "cefr": "B1.2 (Stage 6 · ENG.06)",
      "moeSlo": "ENG.06.S.P.2.1",
      "source_ccg": "CCG Unit 1 Overview — 'Grammar Focus' lists 'Tag questions' (and the Stage 6 syllabus G.17.3), named without a per-lesson G-code, so it renders as a 'CCG' pill.",
      "vocabulary": [
        "roommate",
        "freshman",
        "colleague",
        "introduce",
        "classmate",
        "dormitory",
        "hang out",
        "in person"
      ],
      "explanation": [
        "<p>A <b>question tag</b> is a short question added to the end of a statement to check information or invite agreement: <i>You're a freshman, <b>aren't you</b>?</i> The basic rule is the <b>rule of opposites</b> — a <b>positive</b> statement takes a <b>negative</b> tag, and a <b>negative</b> statement takes a <b>positive</b> tag. The tag repeats the same <b>auxiliary verb</b> and a <b>pronoun</b>: <i>She <b>isn't</b> your roommate, <b>is she</b>?</i></p>",
        "<p>If there is no auxiliary, use a form of <b>do</b>: <i>You <b>know</b> Sara, <b>don't you</b>?</i> A few tags are special: <i>I am…</i> → <b>aren't I?</b>; <i>Let's…</i> → <b>shall we?</b>; an imperative → <b>will you?</b> (<i>Open the door, <b>will you</b>?</i>). The intonation matters too: a <b>falling</b> tone expects agreement, while a <b>rising</b> tone asks a real question.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "You know Jack, don't you?"
        },
        {
          "type": "correct",
          "text": "He isn't a freshman, is he?"
        },
        {
          "type": "correct",
          "text": "They live in the dormitory, don't they?"
        },
        {
          "type": "correct",
          "text": "Let's introduce ourselves, shall we?"
        },
        {
          "type": "incorrect",
          "text": "You're my roommate, are you? (a positive statement needs a negative tag → aren't you?)"
        }
      ],
      "mistakes": [
        "Repeating the main verb instead of an auxiliary: <em>You study here, study you?</em> → <em>…<u>don't you</u>?</em>",
        "Matching the polarity instead of reversing it: <em>You're new, are you?</em> → <em>…<u>aren't you</u>?</em>",
        "Using <em>amn't I</em>: <em>I'm late, amn't I?</em> → <em>I'm late, <u>aren't I</u>?</em>"
      ],
      "traps": [
        "Rule of opposites: positive statement → negative tag, and negative statement → positive tag.",
        "No auxiliary in the statement → use <em>do/does/did</em> in the tag.",
        "Special tags: <em>I am</em> → <em>aren't I?</em>; <em>Let's</em> → <em>shall we?</em>; imperative → <em>will you?</em>"
      ],
      "arabicInsight": "<p><b>أسئلة التذييل (question tags)</b> هي أسئلةٌ قصيرة تُضاف إلى نهاية الجملة لطلب التأكيد أو الموافقة، وتقوم على <b>قاعدة العكس</b>: الجملة المثبتة تأخذ تذييلاً <b>منفياً</b> والعكس صحيح، مع تكرار <b>الفعل المساعد</b> والضمير (<i>You're a freshman, <b>aren't you</b>?</i>). وإذا لم يوجد فعلٌ مساعد نستعمل <b>do/does/did</b>، ومن الحالات الخاصة <i>I am</i> ← <b>aren't I?</b> و<i>Let's</i> ← <b>shall we?</b>. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct tag.",
          "options": [
            "do you?",
            "don't you?",
            "aren't you?",
            "won't you?"
          ],
          "answer": 1,
          "explain": "No auxiliary + positive statement → negative <em>do</em> tag."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'She isn't your classmate, ____'",
          "options": [
            "is she?",
            "isn't she?",
            "does she?",
            "was she?"
          ],
          "answer": 0,
          "explain": "Negative statement → positive tag."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Let's meet the new students, ____'",
          "options": [
            "will we?",
            "shall we?",
            "do we?",
            "don't we?"
          ],
          "answer": 1,
          "explain": "<em>Let's</em> takes the special tag <em>shall we?</em>"
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'I'm in your group, ____'",
          "options": [
            "amn't I?",
            "aren't I?",
            "isn't I?",
            "am not I?"
          ],
          "answer": 1,
          "explain": "<em>I am</em> uses the special tag <em>aren't I?</em>"
        },
        {
          "type": "fill",
          "prompt": "Add the tag.",
          "sentence": "You share a room with Ali, ____?",
          "answers": [
            "don't you"
          ],
          "explain": "No auxiliary + positive → <em>don't you</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the tag.",
          "sentence": "They aren't freshmen, ____?",
          "answers": [
            "are they"
          ],
          "explain": "Negative → positive tag."
        },
        {
          "type": "fill",
          "prompt": "Add the tag.",
          "sentence": "He has met the teacher, ____?",
          "answers": [
            "hasn't he"
          ],
          "explain": "Auxiliary <em>has</em> + positive → <em>hasn't he</em>."
        },
        {
          "type": "transform",
          "prompt": "Add a tag: <em>You like your dormitory.</em>",
          "answer": [
            "you like your dormitory, don't you",
            "you like your dormitory don't you"
          ],
          "explain": "No auxiliary + positive → <em>don't you</em>."
        },
        {
          "type": "transform",
          "prompt": "Add a tag: <em>She won't join the club today.</em>",
          "answer": [
            "she won't join the club today, will she",
            "she won't join the club today will she"
          ],
          "explain": "Negative <em>won't</em> → positive <em>will she</em>."
        },
        {
          "type": "transform",
          "prompt": "Add a tag: <em>We should introduce ourselves.</em>",
          "answer": [
            "we should introduce ourselves, shouldn't we",
            "we should introduce ourselves shouldn't we"
          ],
          "explain": "Auxiliary <em>should</em> + positive → <em>shouldn't we</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the tag.",
          "given": "You know my roommate, do you?",
          "answer": [
            "you know my roommate, don't you",
            "you know my roommate don't you"
          ],
          "explain": "Positive statement → negative tag."
        },
        {
          "type": "error",
          "prompt": "Correct the tag.",
          "given": "I'm next, amn't I?",
          "answer": [
            "i'm next, aren't i",
            "i'm next aren't i"
          ],
          "explain": "<em>I am</em> → <em>aren't I?</em>"
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a tag question.",
          "bank": [
            "You",
            "study",
            "here",
            "don't",
            "you"
          ],
          "answer": "You study here don't you",
          "explain": "Statement + opposite tag."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a tag question.",
          "bank": [
            "She",
            "isn't",
            "new",
            "is",
            "she"
          ],
          "answer": "She isn't new is she",
          "explain": "Negative statement → positive tag."
        },
        {
          "type": "match",
          "prompt": "Match each statement to its tag.",
          "pairs": [
            {
              "l": "You live here,",
              "r": "don't you?"
            },
            {
              "l": "He can't drive,",
              "r": "can he?"
            },
            {
              "l": "Let's go,",
              "r": "shall we?"
            }
          ],
          "explain": "Rule of opposites + special tags."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Complete: 'He works in the office, ____'",
          "options": [
            "doesn't he?",
            "does he?",
            "isn't he?",
            "won't he?"
          ],
          "answer": 0,
          "explain": "No auxiliary + positive → <em>doesn't he</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'They weren't at the meeting, ____'",
          "options": [
            "weren't they?",
            "were they?",
            "did they?",
            "are they?"
          ],
          "answer": 1,
          "explain": "Negative statement → positive tag."
        },
        {
          "type": "mcq",
          "prompt": "Complete the imperative: 'Close the door, ____'",
          "options": [
            "do you?",
            "shall we?",
            "will you?",
            "aren't you?"
          ],
          "answer": 2,
          "explain": "An imperative takes the tag <em>will you?</em>"
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'I'm on your team, ____'",
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
          "prompt": "Add the tag.",
          "sentence": "Mr Owen teaches English, ____?",
          "answers": [
            "doesn't he"
          ],
          "explain": "No auxiliary + positive → <em>doesn't he</em>."
        },
        {
          "type": "fill",
          "prompt": "Add the tag.",
          "sentence": "You haven't met Ellen, ____?",
          "answers": [
            "have you"
          ],
          "explain": "Negative → positive tag."
        },
        {
          "type": "fill",
          "prompt": "Add the tag.",
          "sentence": "We'll start soon, ____?",
          "answers": [
            "won't we"
          ],
          "explain": "Auxiliary <em>will</em> + positive → <em>won't we</em>."
        },
        {
          "type": "transform",
          "prompt": "Add a tag: <em>Ricardo speaks Spanish.</em>",
          "answer": [
            "ricardo speaks spanish, doesn't he",
            "ricardo speaks spanish doesn't he"
          ],
          "explain": "No auxiliary + positive → <em>doesn't he</em>."
        },
        {
          "type": "transform",
          "prompt": "Add a tag: <em>You haven't signed the form.</em>",
          "answer": [
            "you haven't signed the form, have you",
            "you haven't signed the form have you"
          ],
          "explain": "Negative <em>haven't</em> → positive <em>have you</em>."
        },
        {
          "type": "transform",
          "prompt": "Add a tag: <em>Let's take a break.</em>",
          "answer": [
            "let's take a break, shall we",
            "let's take a break shall we"
          ],
          "explain": "<em>Let's</em> → <em>shall we?</em>"
        },
        {
          "type": "error",
          "prompt": "Correct the tag.",
          "given": "She arrives early, isn't she?",
          "answer": [
            "she arrives early, doesn't she",
            "she arrives early doesn't she"
          ],
          "explain": "No auxiliary → use <em>does</em>: <em>doesn't she</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the tag.",
          "given": "Pass the file, do you?",
          "answer": [
            "pass the file, will you",
            "pass the file will you"
          ],
          "explain": "An imperative takes <em>will you?</em>"
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a tag question.",
          "bank": [
            "They",
            "finished",
            "the",
            "task",
            "didn't",
            "they"
          ],
          "answer": "They finished the task didn't they",
          "explain": "Past statement + <em>didn't they</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a tag question.",
          "bank": [
            "You",
            "can't",
            "type",
            "can",
            "you"
          ],
          "answer": "You can't type can you",
          "explain": "Negative <em>can't</em> → positive <em>can you</em>."
        },
        {
          "type": "match",
          "prompt": "Match each statement to its tag.",
          "pairs": [
            {
              "l": "She has left,",
              "r": "hasn't she?"
            },
            {
              "l": "Open the window,",
              "r": "will you?"
            },
            {
              "l": "I'm right,",
              "r": "aren't I?"
            }
          ],
          "explain": "Rule of opposites + special tags."
        }
      ]
    },
    "t1s6_L2_comparatives": {
      "id": "t1s6_L2_comparatives",
      "code": "CCG",
      "title": "Comparatives & Superlatives",
      "chapter": "Chapter 1 — Meeting New People, Learning New Things",
      "week": "Unit 1 · Do All Students Graduate? · Wk 5 (CCG grammar)",
      "cefr": "B1.2 (Stage 6 · ENG.06)",
      "moeSlo": "ENG.06.S.IP.4.1",
      "source_ccg": "CCG Unit 1, Week 5, Lesson 20 — grammar 'Comparatives and Superlatives' listed without a number (Giving Presentations). Rendered as a 'CCG' pill.",
      "vocabulary": [
        "affordable",
        "convenient",
        "spacious",
        "crowded",
        "popular",
        "expensive",
        "comfortable",
        "modern"
      ],
      "explanation": [
        "<p>We use <b>comparatives</b> to compare two things and <b>superlatives</b> to compare three or more. For <b>short</b> adjectives, add <b>-er</b> / <b>-est</b>: <i>cheap → cheap<b>er</b> → the cheap<b>est</b></i>. For <b>longer</b> adjectives (two+ syllables), use <b>more</b> / <b>the most</b>: <i>comfortable → <b>more</b> comfortable → <b>the most</b> comfortable</i>. The comparative is followed by <b>than</b>; the superlative takes <b>the</b>.</p>",
        "<p>Some are <b>irregular</b>: <i>good → better → the best</i>, <i>bad → worse → the worst</i>, <i>far → further → the furthest</i>. Watch the spelling: <i>big → big<b>g</b>er</i>, <i>easy → eas<b>i</b>er</i>. Use <b>as … as</b> to say two things are equal (<i>as cheap as</i>). Never <b>double-mark</b>: not <i>more cheaper</i> or <i>the most cheapest</i> — just <i>cheaper</i> / <i>the cheapest</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "The new dormitory is cheaper than the old one."
        },
        {
          "type": "correct",
          "text": "This café is more popular than that one."
        },
        {
          "type": "correct",
          "text": "It's the most comfortable room on campus."
        },
        {
          "type": "correct",
          "text": "My flat isn't as spacious as yours."
        },
        {
          "type": "incorrect",
          "text": "This is the most cheapest option. (double-marked → the cheapest)"
        }
      ],
      "mistakes": [
        "Double comparison: <em>more cheaper</em> / <em>the most cheapest</em> → <em>cheaper</em> / <em>the cheapest</em>.",
        "Using <em>more</em> with a short adjective: <em>more big</em> → <em>bigger</em>.",
        "Dropping <em>the</em> before a superlative: <em>most popular café</em> → <em>the most popular café</em>."
      ],
      "traps": [
        "Short adjective → <em>-er</em> / <em>the -est</em>; long adjective → <em>more</em> / <em>the most</em>.",
        "Comparative + <em>than</em>; superlative + <em>the</em>.",
        "Equal amounts → <em>as … as</em>; never double-mark."
      ],
      "arabicInsight": "<p>نستعمل <b>صيغة المقارنة (comparative)</b> بين شيئين و<b>صيغة التفضيل (superlative)</b> بين ثلاثة فأكثر. للصفات <b>القصيرة</b> نضيف <b>-er / -est</b> (<i>cheaper / the cheapest</i>)، وللصفات <b>الطويلة</b> نستعمل <b>more / the most</b> (<i>more comfortable / the most comfortable</i>). تتبع المقارنةَ كلمةُ <b>than</b>، ويسبق التفضيلَ <b>the</b>. ومن الشواذّ <i>good → better → the best</i> و<i>bad → worse → the worst</i>، ولا يجوز الجمع بين علامتي المقارنة معاً. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Complete: 'This room is ____ than mine.'",
          "options": [
            "more new",
            "newer",
            "newest",
            "the newer"
          ],
          "answer": 1,
          "explain": "Short adjective → <em>-er</em> + <em>than</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'It's ____ café in town.'",
          "options": [
            "the cheaper",
            "cheapest",
            "the cheapest",
            "more cheap"
          ],
          "answer": 2,
          "explain": "Superlative needs <em>the</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Living off campus is ____ convenient than living on campus.'",
          "options": [
            "more",
            "most",
            "the most",
            "conveni-er"
          ],
          "answer": 0,
          "explain": "Long adjective → <em>more</em> + <em>than</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'My old flat was ____ than this one.'",
          "options": [
            "badder",
            "worse",
            "worst",
            "more bad"
          ],
          "answer": 1,
          "explain": "Irregular: <em>bad → worse</em>."
        },
        {
          "type": "fill",
          "prompt": "Use the comparative.",
          "sentence": "The library is ____ (quiet) than the canteen.",
          "answers": [
            "quieter"
          ],
          "explain": "Short adjective → <em>-er</em>."
        },
        {
          "type": "fill",
          "prompt": "Use the superlative.",
          "sentence": "This is ____ (good) dorm on campus.",
          "answers": [
            "the best"
          ],
          "explain": "Irregular superlative: <em>good → the best</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the equal comparison.",
          "sentence": "The bus is just ____ fast as the metro.",
          "answers": [
            "as"
          ],
          "explain": "Equal amounts → <em>as … as</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparative: <em>The new gym is modern; the old gym is less modern.</em>",
          "answer": [
            "the new gym is more modern than the old gym",
            "the new gym is more modern than the old one"
          ],
          "explain": "Long adjective → <em>more … than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a superlative: <em>This room is small (of all the rooms).</em>",
          "answer": [
            "this is the smallest room",
            "this room is the smallest"
          ],
          "explain": "Short adjective → <em>the -est</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with 'than': <em>The flat is expensive. The dorm is cheap.</em>",
          "answer": [
            "the flat is more expensive than the dorm"
          ],
          "explain": "Comparative + <em>than</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison.",
          "given": "This is the most cheapest plan.",
          "answer": [
            "this is the cheapest plan"
          ],
          "explain": "Don't double-mark a superlative."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison.",
          "given": "The metro is more fast than the bus.",
          "answer": [
            "the metro is faster than the bus"
          ],
          "explain": "Short adjective → <em>-er</em>, not <em>more</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a comparative sentence.",
          "bank": [
            "The",
            "dorm",
            "is",
            "bigger",
            "than",
            "the",
            "flat"
          ],
          "answer": "The dorm is bigger than the flat",
          "explain": "Comparative + <em>than</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a superlative sentence.",
          "bank": [
            "It",
            "is",
            "the",
            "most",
            "popular",
            "café"
          ],
          "answer": "It is the most popular café",
          "explain": "<em>the most</em> + long adjective."
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
          "prompt": "Complete: 'Her phone is ____ than mine.'",
          "options": [
            "more fast",
            "faster",
            "fastest",
            "the faster"
          ],
          "answer": 1,
          "explain": "Short adjective → <em>-er</em> + <em>than</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'That shop sells ____ coffee here.'",
          "options": [
            "the better",
            "best",
            "the best",
            "more good"
          ],
          "answer": 2,
          "explain": "Irregular superlative with <em>the</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'This route is ____ dangerous than that one.'",
          "options": [
            "more",
            "most",
            "the most",
            "danger-er"
          ],
          "answer": 0,
          "explain": "Long adjective → <em>more</em> + <em>than</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Today the traffic is ____ than yesterday.'",
          "options": [
            "badder",
            "worse",
            "worst",
            "more bad"
          ],
          "answer": 1,
          "explain": "Irregular: <em>bad → worse</em>."
        },
        {
          "type": "fill",
          "prompt": "Use the comparative.",
          "sentence": "The train is ____ (quick) than the bus.",
          "answers": [
            "quicker"
          ],
          "explain": "Short adjective → <em>-er</em>."
        },
        {
          "type": "fill",
          "prompt": "Use the superlative.",
          "sentence": "It was ____ (hot) day of the year.",
          "answers": [
            "the hottest"
          ],
          "explain": "Double the consonant: <em>hot → the hottest</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the equal comparison.",
          "sentence": "This laptop is just ____ light as that one.",
          "answers": [
            "as"
          ],
          "explain": "Equal amounts → <em>as … as</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a comparative: <em>The red car is expensive; the blue car is less expensive.</em>",
          "answer": [
            "the red car is more expensive than the blue car",
            "the red car is more expensive than the blue one"
          ],
          "explain": "Long adjective → <em>more … than</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a superlative: <em>This bag is light (of all the bags).</em>",
          "answer": [
            "this is the lightest bag",
            "this bag is the lightest"
          ],
          "explain": "Short adjective → <em>the -est</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with 'than': <em>Maths is difficult. Art is easy.</em>",
          "answer": [
            "maths is more difficult than art"
          ],
          "explain": "Comparative + <em>than</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison.",
          "given": "She is the most tallest student.",
          "answer": [
            "she is the tallest student"
          ],
          "explain": "Don't double-mark a superlative."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison.",
          "given": "The book was more long than the film.",
          "answer": [
            "the book was longer than the film"
          ],
          "explain": "Short adjective → <em>-er</em>, not <em>more</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a comparative sentence.",
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
          "explain": "Comparative + <em>than</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a superlative sentence.",
          "bank": [
            "She",
            "is",
            "the",
            "strongest",
            "in",
            "the",
            "class"
          ],
          "answer": "She is the strongest in the class",
          "explain": "<em>the -est</em> superlative."
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
          "explain": "Irregular & spelling superlatives."
        }
      ]
    },
    "t1s6_L3_modalsSuggestion": {
      "id": "t1s6_L3_modalsSuggestion",
      "code": "CCG",
      "title": "Modals of Suggestion & Advice: should / could",
      "chapter": "Chapter 1 — Meeting New People, Learning New Things",
      "week": "Unit 1 · Do All Students Graduate? · Wk 5 (CCG grammar)",
      "cefr": "B1.2 (Stage 6 · ENG.06)",
      "moeSlo": "ENG.06.S.IP.4.1",
      "source_ccg": "CCG Unit 1, Week 5, Lesson 19 — grammar 'Modal Verbs (should/could)' listed without a number (Make suggestions and solutions). Rendered as a 'CCG' pill.",
      "vocabulary": [
        "revise",
        "deadline",
        "schedule",
        "focus",
        "struggle",
        "cope",
        "suggestion",
        "improve"
      ],
      "explanation": [
        "<p>We use <b>should</b> and <b>could</b> to give advice and make suggestions. <b>Should</b> (+ base verb) gives <b>clear advice</b> — what you think is the best idea: <i>You <b>should</b> make a study schedule.</i> <b>Could</b> (+ base verb) gives a <b>gentler suggestion</b> or one of several options: <i>You <b>could</b> join a study group.</i> Neither is followed by <b>to</b>.</p>",
        "<p>The negative of <i>should</i> is <b>shouldn't</b> (advice not to do something): <i>You <b>shouldn't</b> leave revision until the last night.</i> To ask for advice, invert: <i><b>Should I</b> ask the teacher for help?</i> Remember the verb after the modal stays in its <b>base form</b> — <i>should revise</i>, never <i>should to revise</i> or <i>should revising</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "You should make a study schedule."
        },
        {
          "type": "correct",
          "text": "You could join a study group."
        },
        {
          "type": "correct",
          "text": "You shouldn't leave revision until the last night."
        },
        {
          "type": "correct",
          "text": "Should I ask the teacher for help?"
        },
        {
          "type": "incorrect",
          "text": "You should to revise more. (no 'to' after should → should revise)"
        }
      ],
      "mistakes": [
        "Adding <em>to</em>: <em>should to revise</em> → <em>should revise</em>.",
        "Adding <em>to</em> after could: <em>could to ask</em> → <em>could ask</em>.",
        "Using <em>-ing</em> after the modal: <em>could studying</em> → <em>could study</em>."
      ],
      "traps": [
        "<em>should</em> = clear advice; <em>could</em> = a gentler suggestion or option.",
        "Base verb after the modal — no <em>to</em>, no <em>-ing</em>.",
        "Negative advice → <em>shouldn't</em>; ask for advice → <em>Should I…?</em>"
      ],
      "arabicInsight": "<p>نستعمل <b>should</b> و<b>could</b> للنصح واقتراح الحلول. يفيد <b>should</b> (+ الفعل المجرّد) <b>نصيحةً واضحة</b> (<i>You <b>should</b> make a schedule</i>)، بينما يفيد <b>could</b> <b>اقتراحاً ألطف</b> أو خياراً من خيارات (<i>You <b>could</b> join a study group</i>). يأتي الفعل بعدهما <b>مجرّداً</b> دون <i>to</i>، ونفيُ النصح هو <b>shouldn't</b>، ونسأل عن النصيحة بـ <i>Should I…?</i>. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Complete: 'You ____ make a plan before exams.'",
          "options": [
            "should to",
            "should",
            "could to",
            "might to"
          ],
          "answer": 1,
          "explain": "Clear advice → <em>should</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'You ____ try flashcards to remember words.'",
          "options": [
            "could",
            "could to",
            "should to",
            "could-ing"
          ],
          "answer": 0,
          "explain": "Gentle suggestion → <em>could</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'You ____ skip your revision.'",
          "options": [
            "shouldn't",
            "should not to",
            "could not to",
            "mightn't to"
          ],
          "answer": 0,
          "explain": "Advice not to do something → <em>shouldn't</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: '____ I take a break now?'",
          "options": [
            "Should",
            "Do should",
            "Am should",
            "Should to"
          ],
          "answer": 0,
          "explain": "Ask for advice by inverting: <em>Should I…?</em>"
        },
        {
          "type": "fill",
          "prompt": "Use should + base verb.",
          "sentence": "You ____ (revise) a little every day.",
          "answers": [
            "should revise"
          ],
          "explain": "Clear advice; base verb, no <em>to</em>."
        },
        {
          "type": "fill",
          "prompt": "Use could + base verb.",
          "sentence": "You ____ (ask) a friend to help.",
          "answers": [
            "could ask"
          ],
          "explain": "Gentle suggestion; base verb."
        },
        {
          "type": "fill",
          "prompt": "Use the negative.",
          "sentence": "You ____ (not / study) all night.",
          "answers": [
            "shouldn't study",
            "should not study"
          ],
          "explain": "Advice against → <em>shouldn't</em>."
        },
        {
          "type": "transform",
          "prompt": "Give advice with should: <em>Making a schedule is a good idea.</em>",
          "answer": [
            "you should make a schedule"
          ],
          "explain": "<em>should</em> + base verb."
        },
        {
          "type": "transform",
          "prompt": "Make a suggestion with could: <em>Joining a study group is one option.</em>",
          "answer": [
            "you could join a study group"
          ],
          "explain": "<em>could</em> + base verb."
        },
        {
          "type": "transform",
          "prompt": "Make it negative: <em>You should ignore the deadline.</em>",
          "answer": [
            "you shouldn't ignore the deadline",
            "you should not ignore the deadline"
          ],
          "explain": "Negative advice → <em>shouldn't</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal.",
          "given": "You should to focus more.",
          "answer": [
            "you should focus more"
          ],
          "explain": "No <em>to</em> after <em>should</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "You could studying in the library.",
          "answer": [
            "you could study in the library"
          ],
          "explain": "Base verb after <em>could</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into advice.",
          "bank": [
            "You",
            "should",
            "make",
            "a",
            "plan"
          ],
          "answer": "You should make a plan",
          "explain": "<em>should</em> + base verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a suggestion.",
          "bank": [
            "You",
            "could",
            "ask",
            "the",
            "teacher"
          ],
          "answer": "You could ask the teacher",
          "explain": "<em>could</em> + base verb."
        },
        {
          "type": "match",
          "prompt": "Match each modal to its use.",
          "pairs": [
            {
              "l": "should",
              "r": "clear advice"
            },
            {
              "l": "could",
              "r": "gentle suggestion"
            },
            {
              "l": "shouldn't",
              "r": "advice not to do something"
            }
          ],
          "explain": "Suggestion & advice modals."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Complete: 'You ____ drink more water.'",
          "options": [
            "should to",
            "should",
            "could to",
            "might to"
          ],
          "answer": 1,
          "explain": "Clear advice → <em>should</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'You ____ go for a walk to relax.'",
          "options": [
            "could",
            "could to",
            "should to",
            "could-ing"
          ],
          "answer": 0,
          "explain": "Gentle suggestion → <em>could</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'You ____ stay up so late.'",
          "options": [
            "shouldn't",
            "should not to",
            "could not to",
            "mightn't to"
          ],
          "answer": 0,
          "explain": "Advice not to do something → <em>shouldn't</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: '____ we leave now?'",
          "options": [
            "Should",
            "Do should",
            "Am should",
            "Should to"
          ],
          "answer": 0,
          "explain": "Ask for advice → <em>Should we…?</em>"
        },
        {
          "type": "fill",
          "prompt": "Use should + base verb.",
          "sentence": "You ____ (sleep) earlier on school nights.",
          "answers": [
            "should sleep"
          ],
          "explain": "Clear advice; base verb."
        },
        {
          "type": "fill",
          "prompt": "Use could + base verb.",
          "sentence": "You ____ (take) the bus to save time.",
          "answers": [
            "could take"
          ],
          "explain": "Gentle suggestion; base verb."
        },
        {
          "type": "fill",
          "prompt": "Use the negative.",
          "sentence": "You ____ (not / eat) so much sugar.",
          "answers": [
            "shouldn't eat",
            "should not eat"
          ],
          "explain": "Advice against → <em>shouldn't</em>."
        },
        {
          "type": "transform",
          "prompt": "Give advice with should: <em>Eating breakfast is a good idea.</em>",
          "answer": [
            "you should eat breakfast"
          ],
          "explain": "<em>should</em> + base verb."
        },
        {
          "type": "transform",
          "prompt": "Make a suggestion with could: <em>Trying a new app is one option.</em>",
          "answer": [
            "you could try a new app"
          ],
          "explain": "<em>could</em> + base verb."
        },
        {
          "type": "transform",
          "prompt": "Make it negative: <em>You should waste time.</em>",
          "answer": [
            "you shouldn't waste time",
            "you should not waste time"
          ],
          "explain": "Negative advice → <em>shouldn't</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal.",
          "given": "You could to rest more.",
          "answer": [
            "you could rest more"
          ],
          "explain": "No <em>to</em> after <em>could</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "You should calling a doctor.",
          "answer": [
            "you should call a doctor"
          ],
          "explain": "Base verb after <em>should</em> — no <em>-ing</em>."
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
          "explain": "<em>should</em> + base verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a suggestion.",
          "bank": [
            "You",
            "could",
            "try",
            "a",
            "new",
            "route"
          ],
          "answer": "You could try a new route",
          "explain": "<em>could</em> + base verb."
        },
        {
          "type": "match",
          "prompt": "Match each form to its function.",
          "pairs": [
            {
              "l": "should",
              "r": "strong advice"
            },
            {
              "l": "could",
              "r": "a possible option"
            },
            {
              "l": "Should I…?",
              "r": "asking for advice"
            }
          ],
          "explain": "Suggestion & advice modals."
        }
      ]
    },
    "t1s6_L4_purpose": {
      "id": "t1s6_L4_purpose",
      "code": "CCG",
      "title": "Expressing Purpose: to / in order to",
      "chapter": "Chapter 1 — Meeting New People, Learning New Things",
      "week": "Unit 1 · Unique Housing for Three College Students · Wk 2 (CCG grammar)",
      "cefr": "B1.2 (Stage 6 · ENG.06)",
      "moeSlo": "ENG.06.WR.S.5.1",
      "source_ccg": "CCG Unit 1, Week 2, Lesson 5 — grammar 'Expressing purpose: in order to / to + verb (infinitive)' listed without a number. Rendered as a 'CCG' pill.",
      "vocabulary": [
        "save money",
        "in order to",
        "so that",
        "reason",
        "purpose",
        "afford",
        "reduce",
        "manage"
      ],
      "explanation": [
        "<p>To explain the <b>purpose</b> of an action — the <i>why</i> — we use <b>to</b> + base verb or <b>in order to</b> + base verb: <i>She studies hard <b>to</b> pass the exam.</i> / <i>He took a job <b>in order to</b> save money.</i> Both mean the same thing; <b>in order to</b> is a little more formal, while plain <b>to</b> is the most common in everyday English.</p>",
        "<p>For a <b>negative</b> purpose, use <b>in order not to</b> or <b>so as not to</b> + base verb: <i>She left early <b>in order not to</b> miss the train.</i> You can also use <b>so that</b> + a clause: <i>He saved money <b>so that</b> he could travel.</i> Do <b>not</b> use <i>for to</i> or <i>for + -ing</i> to express the purpose of an action — <i>for to save</i> and <i>for saving money</i> are both wrong; say <i>to save money</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "He lived in a van to save money."
        },
        {
          "type": "correct",
          "text": "She uses the library in order to study quietly."
        },
        {
          "type": "correct",
          "text": "I take the metro to avoid traffic."
        },
        {
          "type": "correct",
          "text": "They left early in order not to miss the train."
        },
        {
          "type": "incorrect",
          "text": "He got a job for to earn money. (purpose → to earn money)"
        }
      ],
      "mistakes": [
        "Using <em>for to</em>: <em>for to save money</em> → <em>to save money</em>.",
        "Using <em>for + -ing</em> for the purpose of an action: <em>for saving money</em> → <em>to save money</em>.",
        "Dropping <em>to</em>: <em>He works hard pass the exam</em> → <em>…<u>to</u> pass the exam</em>."
      ],
      "traps": [
        "Purpose → <em>to</em> / <em>in order to</em> + base verb.",
        "Negative purpose → <em>in order not to</em> / <em>so as not to</em>.",
        "<em>so that</em> + a clause; never <em>for to</em> or <em>for + -ing</em> for purpose."
      ],
      "arabicInsight": "<p>للتعبير عن <b>الغرض (purpose)</b> — أيِ السببِ من الفعل — نستعمل <b>to</b> + الفعل المجرّد أو <b>in order to</b> + الفعل المجرّد (<i>He took a job <b>to / in order to</b> save money</i>)، وتُعدّ <i>in order to</i> أكثر رسميّةً قليلاً. أمّا الغرض المنفيّ فبـ <b>in order not to</b> أو <b>so as not to</b>، ويمكن استعمال <b>so that</b> مع جملة. ولا يصحّ استعمال <i>for to</i> ولا <i>for + -ing</i> للتعبير عن غرض الفعل. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Complete: 'She studies every night ____ pass her exams.'",
          "options": [
            "for",
            "for to",
            "to",
            "so"
          ],
          "answer": 2,
          "explain": "Purpose → <em>to</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'He took a part-time job ____ save money.'",
          "options": [
            "in order to",
            "for",
            "for to",
            "because"
          ],
          "answer": 0,
          "explain": "Purpose → <em>in order to</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'I use a bike ____ avoid traffic.'",
          "options": [
            "to",
            "for",
            "for to",
            "so as"
          ],
          "answer": 0,
          "explain": "Purpose → <em>to</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Complete the negative purpose: 'She left early ____ miss the bus.'",
          "options": [
            "in order to",
            "in order not to",
            "for not",
            "to not"
          ],
          "answer": 1,
          "explain": "Negative purpose → <em>in order not to</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with one word.",
          "sentence": "He saved money ____ buy a laptop.",
          "answers": [
            "to"
          ],
          "explain": "Purpose → <em>to</em> + base verb."
        },
        {
          "type": "fill",
          "prompt": "Complete with one word.",
          "sentence": "She made a plan ____ order to stay organised.",
          "answers": [
            "in"
          ],
          "explain": "The phrase is <em>in order to</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with one word.",
          "sentence": "We use the app so ____ we can track spending.",
          "answers": [
            "that"
          ],
          "explain": "<em>so that</em> + a clause."
        },
        {
          "type": "transform",
          "prompt": "Join with 'to': <em>He works hard. He wants to pass.</em>",
          "answer": [
            "he works hard to pass"
          ],
          "explain": "Purpose → <em>to</em> + base verb."
        },
        {
          "type": "transform",
          "prompt": "Join with 'in order to': <em>She reads a lot. She wants to improve her English.</em>",
          "answer": [
            "she reads a lot in order to improve her english"
          ],
          "explain": "Purpose → <em>in order to</em> + base verb."
        },
        {
          "type": "transform",
          "prompt": "Make it negative purpose: <em>He set an alarm. He doesn't want to be late.</em>",
          "answer": [
            "he set an alarm in order not to be late",
            "he set an alarm so as not to be late"
          ],
          "explain": "Negative purpose → <em>in order not to</em> / <em>so as not to</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the purpose.",
          "given": "He got a job for to earn money.",
          "answer": [
            "he got a job to earn money"
          ],
          "explain": "Never <em>for to</em>; use <em>to</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the purpose.",
          "given": "She uses a planner for organising her week.",
          "answer": [
            "she uses a planner to organise her week",
            "she uses a planner to organize her week"
          ],
          "explain": "Purpose of an action → <em>to</em> + base verb, not <em>for + -ing</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder to show purpose.",
          "bank": [
            "She",
            "studies",
            "hard",
            "to",
            "pass"
          ],
          "answer": "She studies hard to pass",
          "explain": "<em>to</em> + base verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder to show purpose.",
          "bank": [
            "He",
            "saves",
            "money",
            "in",
            "order",
            "to",
            "travel"
          ],
          "answer": "He saves money in order to travel",
          "explain": "<em>in order to</em> + base verb."
        },
        {
          "type": "match",
          "prompt": "Match each form to its use.",
          "pairs": [
            {
              "l": "to + base verb",
              "r": "purpose (common)"
            },
            {
              "l": "in order to",
              "r": "purpose (more formal)"
            },
            {
              "l": "in order not to",
              "r": "negative purpose"
            }
          ],
          "explain": "Ways to express purpose."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Complete: 'He exercises every day ____ stay fit.'",
          "options": [
            "for",
            "for to",
            "to",
            "so"
          ],
          "answer": 2,
          "explain": "Purpose → <em>to</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'She wakes up early ____ catch the first train.'",
          "options": [
            "in order to",
            "for",
            "for to",
            "because"
          ],
          "answer": 0,
          "explain": "Purpose → <em>in order to</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'I wear a helmet ____ protect my head.'",
          "options": [
            "to",
            "for",
            "for to",
            "so as"
          ],
          "answer": 0,
          "explain": "Purpose → <em>to</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Complete the negative purpose: 'He whispered ____ wake the baby.'",
          "options": [
            "in order to",
            "in order not to",
            "for not",
            "to not"
          ],
          "answer": 1,
          "explain": "Negative purpose → <em>in order not to</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with one word.",
          "sentence": "She drinks water ____ stay healthy.",
          "answers": [
            "to"
          ],
          "explain": "Purpose → <em>to</em> + base verb."
        },
        {
          "type": "fill",
          "prompt": "Complete with one word.",
          "sentence": "He studies abroad ____ order to learn new skills.",
          "answers": [
            "in"
          ],
          "explain": "The phrase is <em>in order to</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with one word.",
          "sentence": "We saved money so ____ we could buy tickets.",
          "answers": [
            "that"
          ],
          "explain": "<em>so that</em> + a clause."
        },
        {
          "type": "transform",
          "prompt": "Join with 'to': <em>She runs every morning. She wants to be healthy.</em>",
          "answer": [
            "she runs every morning to be healthy"
          ],
          "explain": "Purpose → <em>to</em> + base verb."
        },
        {
          "type": "transform",
          "prompt": "Join with 'in order to': <em>He took notes. He wanted to remember the lesson.</em>",
          "answer": [
            "he took notes in order to remember the lesson"
          ],
          "explain": "Purpose → <em>in order to</em> + base verb."
        },
        {
          "type": "transform",
          "prompt": "Make it negative purpose: <em>She spoke quietly. She didn't want to disturb others.</em>",
          "answer": [
            "she spoke quietly in order not to disturb others",
            "she spoke quietly so as not to disturb others"
          ],
          "explain": "Negative purpose → <em>in order not to</em> / <em>so as not to</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the purpose.",
          "given": "She joined a club for to make friends.",
          "answer": [
            "she joined a club to make friends"
          ],
          "explain": "Never <em>for to</em>; use <em>to</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the purpose.",
          "given": "He uses a map for finding the way.",
          "answer": [
            "he uses a map to find the way"
          ],
          "explain": "Purpose of an action → <em>to</em> + base verb, not <em>for + -ing</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder to show purpose.",
          "bank": [
            "He",
            "exercises",
            "to",
            "stay",
            "fit"
          ],
          "answer": "He exercises to stay fit",
          "explain": "<em>to</em> + base verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder to show purpose.",
          "bank": [
            "She",
            "reads",
            "in",
            "order",
            "to",
            "learn"
          ],
          "answer": "She reads in order to learn",
          "explain": "<em>in order to</em> + base verb."
        },
        {
          "type": "match",
          "prompt": "Match each form to its use.",
          "pairs": [
            {
              "l": "to",
              "r": "common purpose"
            },
            {
              "l": "in order to",
              "r": "formal purpose"
            },
            {
              "l": "so that",
              "r": "purpose + a clause"
            }
          ],
          "explain": "Ways to express purpose."
        }
      ]
    },
    "t1s6_L5_historicPresent": {
      "id": "t1s6_L5_historicPresent",
      "code": "CCG",
      "title": "The Historic Present",
      "chapter": "Chapter 2 — Come Rain or Shine",
      "week": "Unit 2 · Come Rain or Shine · Unit Overview grammar focus (CCG grammar)",
      "cefr": "B1.2 (Stage 6 · ENG.06)",
      "moeSlo": "ENG.06.S.IP.3.1",
      "source_ccg": "CCG Unit 2 Overview — 'Grammar Focus' lists 'Understanding and using historic present', named without a per-lesson G-code, so it renders as a 'CCG' pill.",
      "vocabulary": [
        "storm",
        "all of a sudden",
        "suddenly",
        "witness",
        "dramatic",
        "narrate",
        "incident",
        "freeze"
      ],
      "explanation": [
        "<p>The <b>historic present</b> (or narrative present) uses the <b>present simple</b> to tell a <b>past</b> story, making it feel vivid and immediate — as if it is happening now. It is very common in spoken storytelling and summaries: <i>So I'<b>m</b> walking home and suddenly the rain <b>starts</b>.</i> The events are finished, but we narrate them in the present for effect.</p>",
        "<p>The normal present-tense rules still apply, including the third-person <b>-s</b> (<i>he runs</i>, <i>she sees</i>), so stay <b>consistent</b> within a stretch of narration. It is a <b>stylistic</b> choice: formal reports and essays normally keep the past tenses.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "So I'm walking home and suddenly the rain starts."
        },
        {
          "type": "correct",
          "text": "She opens the door, sees the storm, and runs back inside."
        },
        {
          "type": "correct",
          "text": "It's 2010. A huge storm hits the coast and everyone panics."
        },
        {
          "type": "correct",
          "text": "I'm standing at the bus stop when all of a sudden the wind blows my umbrella away."
        },
        {
          "type": "incorrect",
          "text": "So he walk outside and look at the sky. (third person needs -s → he walks, looks)"
        }
      ],
      "mistakes": [
        "Dropping the third-person <em>-s</em>: <em>he walk in</em> → <em>he <u>walks</u> in</em>.",
        "Drifting between tenses: <em>She opens the door and saw the storm</em> — keep one tense for effect.",
        "Using the historic present in a formal essay where past tenses are expected."
      ],
      "traps": [
        "Historic present = present simple used to narrate <em>past</em> events for vividness.",
        "Third person still takes <em>-s</em>: <em>he runs</em>, <em>she sees</em>.",
        "It is a style choice; formal writing usually keeps the past tenses."
      ],
      "arabicInsight": "<p>الـ <b>historic present</b> (الحاضر السردي) هو استخدام <b>المضارع البسيط</b> لسرد أحداثٍ <b>ماضية</b> بهدف جعلها أكثر حيويةً وكأنّها تقع الآن، وهو شائعٌ في الحكي الشفهي (<i>So I'm walking and the rain starts</i>). تبقى قواعد المضارع كما هي ومنها إضافة <b>-s</b> للغائب المفرد (<i>he walks</i>)، ويجب الثبات على زمنٍ واحد، وهو خيارٌ أسلوبيّ أمّا الكتابة الرسمية فتبقى بالأزمنة الماضية. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Which sentence uses the historic present?",
          "options": [
            "Yesterday it rained and we stayed in.",
            "So I'm walking and the rain starts.",
            "It will rain tomorrow.",
            "It has rained all day."
          ],
          "answer": 1,
          "explain": "Present simple narrating a past event."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct verb: 'She looks outside and ____ the storm.'",
          "options": [
            "saw",
            "sees",
            "seeing",
            "will see"
          ],
          "answer": 1,
          "explain": "Present simple; third person <em>-s</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the consistent narration.",
          "options": [
            "He runs in, grabbed the towel, and leaves.",
            "He runs in, grabs the towel, and leaves.",
            "He ran in, grabs the towel, and left.",
            "He run in, grab the towel, and leave."
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
            "a legal notice",
            "an exam essay"
          ],
          "answer": 1,
          "explain": "It suits vivid spoken narration."
        },
        {
          "type": "fill",
          "prompt": "Complete in the historic present.",
          "sentence": "So I'm sitting there, and the wind ____ (blow) hard.",
          "answers": [
            "blows"
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
          "sentence": "She turns around and ____ (see) the lightning.",
          "answers": [
            "sees"
          ],
          "explain": "Stay in the present simple."
        },
        {
          "type": "transform",
          "prompt": "Rewrite in the historic present: <em>He opened the window and looked out.</em>",
          "answer": [
            "he opens the window and looks out"
          ],
          "explain": "Past → present simple for vividness."
        },
        {
          "type": "transform",
          "prompt": "Rewrite in the historic present: <em>The crowd cheered as the sun came out.</em>",
          "answer": [
            "the crowd cheers as the sun comes out"
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
            "it",
            "starts",
            "raining"
          ],
          "answer": "So I'm walking home and it starts raining",
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
            "feels",
            "the",
            "cold"
          ],
          "answer": "He opens the door and feels the cold",
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
            "Last night the storm hit and we lost power.",
            "So we're driving and the fog comes down.",
            "We will drive to the coast.",
            "We had driven through the storm."
          ],
          "answer": 1,
          "explain": "Present simple narrating a past event."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct verb: 'He picks up the phone and ____ bad news.'",
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
            "She enters, looked around, and sits.",
            "She enters, looks around, and sits.",
            "She entered, looks around, and sat.",
            "She enter, look around, and sit."
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
          "sentence": "I'm standing outside when a man ____ (drop) his umbrella.",
          "answers": [
            "drops"
          ],
          "explain": "Third person present <em>-s</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete in the historic present.",
          "sentence": "The reporter ____ (study) the map and smiles.",
          "answers": [
            "studies"
          ],
          "explain": "Third person <em>-s</em> (y → ies)."
        },
        {
          "type": "fill",
          "prompt": "Keep the narration consistent.",
          "sentence": "He reaches the shelter and ____ (raise) his hand.",
          "answers": [
            "raises"
          ],
          "explain": "Stay in the present simple."
        },
        {
          "type": "transform",
          "prompt": "Rewrite in the historic present: <em>She picked up the phone and called home.</em>",
          "answer": [
            "she picks up the phone and calls home"
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
          "prompt": "Rewrite as a past-tense report: <em>He runs outside and shouts.</em>",
          "answer": [
            "he ran outside and shouted"
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
            "sky",
            "darkens",
            "and",
            "everyone",
            "runs"
          ],
          "answer": "Suddenly the sky darkens and everyone runs",
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
    "t1s6_L6_zeroConditional": {
      "id": "t1s6_L6_zeroConditional",
      "code": "CCG",
      "title": "Zero Conditional",
      "chapter": "Chapter 2 — Come Rain or Shine",
      "week": "Unit 2 · Writing a Description of Wild Weather · Wk 8 (CCG grammar)",
      "cefr": "B1.2 (Stage 6 · ENG.06)",
      "moeSlo": "ENG.06.WR.P.1.1",
      "source_ccg": "CCG Unit 2, Week 8, Lessons 9-10 — grammar 'Zero Conditional' listed without a number (Describing Cause and Consequence). Rendered as a 'CCG' pill.",
      "vocabulary": [
        "freeze",
        "boil",
        "melt",
        "evaporate",
        "temperature",
        "pressure",
        "humidity",
        "condition"
      ],
      "explanation": [
        "<p>The <b>zero conditional</b> describes things that are <b>always true</b> — facts, scientific truths, and natural results. The pattern is <b>if / when + present simple</b>, then <b>present simple</b>: <i><b>If</b> you heat ice, it <b>melts</b>.</i> Both clauses use the <b>present simple</b>, because the result is always the same.</p>",
        "<p>In the zero conditional, <b>if</b> and <b>when</b> mean almost the same thing, because the result always happens: <i><b>When</b> it rains, the ground <b>gets</b> wet.</i> Use a <b>comma</b> when the <i>if/when</i>-clause comes first, and no comma when it comes second. Do <b>not</b> use <b>will</b> — <i>If you heat ice, it will melt</i> is a first conditional, not a zero conditional.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "If you heat water to 100°C, it boils."
        },
        {
          "type": "correct",
          "text": "When the temperature drops below zero, water freezes."
        },
        {
          "type": "correct",
          "text": "Ice melts if you leave it in the sun."
        },
        {
          "type": "correct",
          "text": "When it rains heavily, the river rises."
        },
        {
          "type": "incorrect",
          "text": "If you heat ice, it will melt. (zero conditional uses present, not 'will' → it melts)"
        }
      ],
      "mistakes": [
        "Using <em>will</em> in the result: <em>If you heat ice, it will melt</em> → <em>…it <u>melts</u></em>.",
        "Mixing tenses: <em>When it rains, the ground got wet</em> → <em>…<u>gets</u> wet</em>.",
        "Forgetting the comma when the <em>if/when</em>-clause comes first."
      ],
      "traps": [
        "<em>if / when + present simple</em>, then <em>present simple</em>.",
        "Used for general truths, facts and natural results.",
        "No <em>will</em> in the zero conditional."
      ],
      "arabicInsight": "<p>تصف <b>الجملة الشرطية الصفرية (zero conditional)</b> حقائقَ ونتائجَ <b>ثابتةً دائماً</b>، وصيغتها <b>if / when + المضارع البسيط</b> ثم <b>المضارع البسيط</b> (<i>If you heat ice, it melts</i>). يتساوى <i>if</i> و<i>when</i> هنا لأنّ النتيجة تحدث دائماً، ونضع فاصلةً إذا تقدّمت جملة الشرط. ولا نستعمل <b>will</b> في هذا النوع. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Complete: 'If you heat ice, it ____.'",
          "options": [
            "will melt",
            "melts",
            "melted",
            "is melting"
          ],
          "answer": 1,
          "explain": "Zero conditional → present simple result."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'When the sun ____, the snow melts.'",
          "options": [
            "shines",
            "will shine",
            "shone",
            "is shining"
          ],
          "answer": 0,
          "explain": "<em>when</em> + present simple."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Water ____ if the temperature falls below zero.'",
          "options": [
            "will freeze",
            "freezes",
            "froze",
            "freezing"
          ],
          "answer": 1,
          "explain": "Present simple result."
        },
        {
          "type": "mcq",
          "prompt": "Which is a zero conditional?",
          "options": [
            "If it rains tomorrow, we will stay in.",
            "When you mix blue and yellow, you get green.",
            "If I were rich, I would travel.",
            "If you had studied, you would have passed."
          ],
          "answer": 1,
          "explain": "Always-true result with present + present."
        },
        {
          "type": "fill",
          "prompt": "Complete with the present simple.",
          "sentence": "If you ____ (drop) ice in water, it floats.",
          "answers": [
            "drop"
          ],
          "explain": "<em>if</em> + present simple."
        },
        {
          "type": "fill",
          "prompt": "Complete with the present simple.",
          "sentence": "When you heat metal, it ____ (expand).",
          "answers": [
            "expands"
          ],
          "explain": "Present simple result, third person <em>-s</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the present simple.",
          "sentence": "Plants ____ (die) if they get no water.",
          "answers": [
            "die"
          ],
          "explain": "Present simple result."
        },
        {
          "type": "transform",
          "prompt": "Make a zero conditional: <em>heat water / it boils</em>",
          "answer": [
            "if you heat water, it boils",
            "if you heat water it boils"
          ],
          "explain": "<em>if</em> + present, present."
        },
        {
          "type": "transform",
          "prompt": "Make a zero conditional with 'when': <em>the sun sets / it gets dark</em>",
          "answer": [
            "when the sun sets, it gets dark",
            "when the sun sets it gets dark"
          ],
          "explain": "<em>when</em> + present, present."
        },
        {
          "type": "transform",
          "prompt": "Fix the tense: <em>If you freeze water, it will turn to ice.</em>",
          "answer": [
            "if you freeze water, it turns to ice",
            "if you freeze water it turns to ice"
          ],
          "explain": "No <em>will</em> in the zero conditional."
        },
        {
          "type": "error",
          "prompt": "Correct the conditional.",
          "given": "If you heat ice, it will melt.",
          "answer": [
            "if you heat ice, it melts",
            "if you heat ice it melts"
          ],
          "explain": "Zero conditional uses the present simple, not <em>will</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the tense.",
          "given": "When it rains, the ground got wet.",
          "answer": [
            "when it rains, the ground gets wet",
            "when it rains the ground gets wet"
          ],
          "explain": "Both clauses present simple."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a zero conditional.",
          "bank": [
            "If",
            "you",
            "mix",
            "red",
            "and",
            "white",
            "you",
            "get",
            "pink"
          ],
          "answer": "If you mix red and white you get pink",
          "explain": "<em>if</em> + present, present."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a zero conditional.",
          "bank": [
            "Ice",
            "melts",
            "when",
            "it",
            "gets",
            "warm"
          ],
          "answer": "Ice melts when it gets warm",
          "explain": "Result + <em>when</em>-clause second (no comma)."
        },
        {
          "type": "match",
          "prompt": "Match each part to the rule.",
          "pairs": [
            {
              "l": "if-clause",
              "r": "present simple"
            },
            {
              "l": "result clause",
              "r": "present simple"
            },
            {
              "l": "use",
              "r": "general truths / facts"
            }
          ],
          "explain": "Zero conditional structure."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Complete: 'If you don't water plants, they ____.'",
          "options": [
            "will die",
            "die",
            "died",
            "are dying"
          ],
          "answer": 1,
          "explain": "Zero conditional → present simple result."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'When you ____ the switch, the light comes on.'",
          "options": [
            "press",
            "will press",
            "pressed",
            "pressing"
          ],
          "answer": 0,
          "explain": "<em>when</em> + present simple."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'The alarm ____ if there is smoke.'",
          "options": [
            "will ring",
            "rings",
            "rang",
            "ringing"
          ],
          "answer": 1,
          "explain": "Present simple result."
        },
        {
          "type": "mcq",
          "prompt": "Which is a zero conditional?",
          "options": [
            "If you touch fire, you get burned.",
            "If you study, you will pass.",
            "If I had time, I would help.",
            "If she comes, we will start."
          ],
          "answer": 0,
          "explain": "Always-true result with present + present."
        },
        {
          "type": "fill",
          "prompt": "Complete with the present simple.",
          "sentence": "If you ____ (mix) blue and yellow, you get green.",
          "answers": [
            "mix"
          ],
          "explain": "<em>if</em> + present simple."
        },
        {
          "type": "fill",
          "prompt": "Complete with the present simple.",
          "sentence": "When water ____ (reach) 100°C, it boils.",
          "answers": [
            "reaches"
          ],
          "explain": "Present simple, third person <em>-s</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the present simple.",
          "sentence": "Metal ____ (rust) if it gets wet.",
          "answers": [
            "rusts"
          ],
          "explain": "Present simple result."
        },
        {
          "type": "transform",
          "prompt": "Make a zero conditional: <em>not sleep / you feel tired</em>",
          "answer": [
            "if you don't sleep, you feel tired",
            "if you don't sleep you feel tired"
          ],
          "explain": "<em>if</em> + present, present."
        },
        {
          "type": "transform",
          "prompt": "Make a zero conditional with 'when': <em>you press the button / the machine starts</em>",
          "answer": [
            "when you press the button, the machine starts",
            "when you press the button the machine starts"
          ],
          "explain": "<em>when</em> + present, present."
        },
        {
          "type": "transform",
          "prompt": "Fix the tense: <em>If you mix oil and water, they will not mix.</em>",
          "answer": [
            "if you mix oil and water, they don't mix",
            "if you mix oil and water they don't mix"
          ],
          "explain": "No <em>will</em> in the zero conditional."
        },
        {
          "type": "error",
          "prompt": "Correct the conditional.",
          "given": "If you touch a flame, you will get burned.",
          "answer": [
            "if you touch a flame, you get burned",
            "if you touch a flame you get burned"
          ],
          "explain": "Zero conditional uses the present simple, not <em>will</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the tense.",
          "given": "When the sun shines, the snow melted.",
          "answer": [
            "when the sun shines, the snow melts",
            "when the sun shines the snow melts"
          ],
          "explain": "Both clauses present simple."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a zero conditional.",
          "bank": [
            "If",
            "you",
            "heat",
            "butter",
            "it",
            "melts"
          ],
          "answer": "If you heat butter it melts",
          "explain": "<em>if</em> + present, present."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a zero conditional.",
          "bank": [
            "Plants",
            "grow",
            "when",
            "they",
            "get",
            "sunlight"
          ],
          "answer": "Plants grow when they get sunlight",
          "explain": "Result + <em>when</em>-clause second."
        },
        {
          "type": "match",
          "prompt": "Match each part to the rule.",
          "pairs": [
            {
              "l": "condition",
              "r": "if/when + present"
            },
            {
              "l": "result",
              "r": "present simple"
            },
            {
              "l": "meaning",
              "r": "always true"
            }
          ],
          "explain": "Zero conditional structure."
        }
      ]
    },
    "t1s6_L7_imperativesRules": {
      "id": "t1s6_L7_imperativesRules",
      "code": "CCG",
      "title": "Imperatives & Rules: must / mustn't / have to",
      "chapter": "Chapter 2 — Come Rain or Shine",
      "week": "Unit 2 · Explaining Rules · Wk 8 (CCG grammar)",
      "cefr": "B1.2 (Stage 6 · ENG.06)",
      "moeSlo": "ENG.06.S.IP.1.1",
      "source_ccg": "CCG Unit 2, Week 8, Lesson 11 — grammar 'Imperatives' with functions 'Expressing necessity and obligation' and 'Expressing prohibition', listed without a number. Rendered as a 'CCG' pill.",
      "vocabulary": [
        "rule",
        "allowed",
        "forbidden",
        "litter",
        "protect",
        "sign",
        "permission",
        "safety"
      ],
      "explanation": [
        "<p><b>Imperatives</b> give direct instructions, commands and rules. They use the <b>base verb</b> with <b>no subject</b>: <i><b>Keep</b> to the path.</i> The negative is <b>Don't</b> + base verb: <i><b>Don't</b> drop litter.</i> Imperatives are common on signs and in lists of rules.</p>",
        "<p>For <b>obligation</b> we use <b>must</b> or <b>have to</b> + base verb: <i>You <b>must</b> wear a helmet</i> / <i>Visitors <b>have to</b> sign in.</i> For <b>prohibition</b> we use <b>mustn't</b>: <i>You <b>mustn't</b> feed the animals.</i> Be careful: <b>mustn't</b> means it is <b>forbidden</b>, while <b>don't have to</b> means it is <b>not necessary</b> — these are very different. Note there is no <b>to</b> after <i>must</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "Keep to the path."
        },
        {
          "type": "correct",
          "text": "Don't drop litter in the park."
        },
        {
          "type": "correct",
          "text": "You must wear a seatbelt."
        },
        {
          "type": "correct",
          "text": "You mustn't swim here — it's dangerous."
        },
        {
          "type": "incorrect",
          "text": "You don't have to smoke here. (if it's forbidden → You mustn't smoke here)"
        }
      ],
      "mistakes": [
        "Adding a subject to an imperative sign: <em>You keep quiet</em> → <em>Keep quiet</em>.",
        "Confusing <em>mustn't</em> (forbidden) with <em>don't have to</em> (not necessary).",
        "Adding <em>to</em> after must: <em>must to wear</em> → <em>must wear</em>."
      ],
      "traps": [
        "Imperative = base verb, no subject; negative = <em>Don't</em> + base verb.",
        "<em>must</em> / <em>have to</em> = obligation; <em>mustn't</em> = forbidden.",
        "<em>don't have to</em> = not necessary (very different from <em>mustn't</em>); no <em>to</em> after <em>must</em>."
      ],
      "arabicInsight": "<p>تُعطي <b>صيغة الأمر (imperative)</b> تعليماتٍ وقواعد مباشرة بالفعل <b>المجرّد</b> دون فاعل (<i>Keep to the path</i>)، ونفيُها <b>Don't</b> + الفعل المجرّد. وللتعبير عن <b>الإلزام</b> نستعمل <b>must / have to</b> (<i>You must wear a helmet</i>) وللـ<b>منع</b> نستعمل <b>mustn't</b>. انتبه: <b>mustn't</b> تعني «ممنوع»، أمّا <b>don't have to</b> فتعني «غير ضروري»، وهما مختلفتان تماماً، ولا نضع <i>to</i> بعد <i>must</i>. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Complete the sign: '____ to the path.'",
          "options": [
            "You keep",
            "Keep",
            "Keeping",
            "To keep"
          ],
          "answer": 1,
          "explain": "Imperative = base verb, no subject."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'You ____ wear a helmet on the site.'",
          "options": [
            "must",
            "must to",
            "musting",
            "have"
          ],
          "answer": 0,
          "explain": "Obligation → <em>must</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'You ____ feed the animals — it's forbidden.'",
          "options": [
            "don't have to",
            "mustn't",
            "couldn't",
            "wouldn't"
          ],
          "answer": 1,
          "explain": "Prohibition → <em>mustn't</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'It's optional, so you ____ come early.'",
          "options": [
            "mustn't",
            "don't have to",
            "can't",
            "shouldn't"
          ],
          "answer": 1,
          "explain": "Not necessary → <em>don't have to</em>."
        },
        {
          "type": "fill",
          "prompt": "Make the imperative.",
          "sentence": "____ (not / drop) litter here.",
          "answers": [
            "don't drop"
          ],
          "explain": "Negative imperative = <em>Don't</em> + base verb."
        },
        {
          "type": "fill",
          "prompt": "Use have to.",
          "sentence": "Visitors ____ (have to) sign in at the gate.",
          "answers": [
            "have to"
          ],
          "explain": "Obligation → <em>have to</em> + base verb."
        },
        {
          "type": "fill",
          "prompt": "Use the prohibition form.",
          "sentence": "You ____ (must / not) use your phone in the exam.",
          "answers": [
            "mustn't",
            "must not"
          ],
          "explain": "Forbidden → <em>mustn't</em>."
        },
        {
          "type": "transform",
          "prompt": "Make an imperative: <em>You should close the gate.</em>",
          "answer": [
            "close the gate"
          ],
          "explain": "Imperative = base verb, no subject."
        },
        {
          "type": "transform",
          "prompt": "Make it a prohibition with mustn't: <em>Don't park here.</em>",
          "answer": [
            "you mustn't park here",
            "you must not park here"
          ],
          "explain": "Forbidden → <em>mustn't</em>."
        },
        {
          "type": "transform",
          "prompt": "Make it an obligation with have to: <em>Sign the form.</em>",
          "answer": [
            "you have to sign the form"
          ],
          "explain": "Obligation → <em>have to</em> + base verb."
        },
        {
          "type": "error",
          "prompt": "Correct the modal.",
          "given": "You must to wear a uniform.",
          "answer": [
            "you must wear a uniform"
          ],
          "explain": "No <em>to</em> after <em>must</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the meaning (it is forbidden).",
          "given": "You don't have to smoke here.",
          "answer": [
            "you mustn't smoke here",
            "you must not smoke here"
          ],
          "explain": "Forbidden → <em>mustn't</em>, not <em>don't have to</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a negative imperative.",
          "bank": [
            "Don't",
            "drop",
            "litter",
            "in",
            "the",
            "park"
          ],
          "answer": "Don't drop litter in the park",
          "explain": "<em>Don't</em> + base verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into an obligation.",
          "bank": [
            "You",
            "must",
            "wear",
            "a",
            "seatbelt"
          ],
          "answer": "You must wear a seatbelt",
          "explain": "<em>must</em> + base verb."
        },
        {
          "type": "match",
          "prompt": "Match each form to its meaning.",
          "pairs": [
            {
              "l": "imperative",
              "r": "base verb (no subject)"
            },
            {
              "l": "must / have to",
              "r": "obligation"
            },
            {
              "l": "mustn't",
              "r": "prohibition"
            }
          ],
          "explain": "Imperatives and rules."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Complete the instruction: '____ the door quietly.'",
          "options": [
            "You close",
            "Close",
            "Closing",
            "To close"
          ],
          "answer": 1,
          "explain": "Imperative = base verb, no subject."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Drivers ____ stop at a red light.'",
          "options": [
            "must",
            "must to",
            "musting",
            "have"
          ],
          "answer": 0,
          "explain": "Obligation → <em>must</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'You ____ park on the yellow line — it's not allowed.'",
          "options": [
            "don't have to",
            "mustn't",
            "couldn't",
            "needn't"
          ],
          "answer": 1,
          "explain": "Prohibition → <em>mustn't</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'It's a holiday, so you ____ go to school.'",
          "options": [
            "mustn't",
            "don't have to",
            "can't",
            "shouldn't"
          ],
          "answer": 1,
          "explain": "Not necessary → <em>don't have to</em>."
        },
        {
          "type": "fill",
          "prompt": "Make the imperative.",
          "sentence": "____ (not / run) in the corridor.",
          "answers": [
            "don't run"
          ],
          "explain": "Negative imperative = <em>Don't</em> + base verb."
        },
        {
          "type": "fill",
          "prompt": "Use have to.",
          "sentence": "Students ____ (have to) wear a uniform.",
          "answers": [
            "have to"
          ],
          "explain": "Obligation → <em>have to</em> + base verb."
        },
        {
          "type": "fill",
          "prompt": "Complete with the forbidden form.",
          "sentence": "You ____ feed the birds here.",
          "answers": [
            "mustn't",
            "must not"
          ],
          "explain": "Forbidden → <em>mustn't</em>."
        },
        {
          "type": "transform",
          "prompt": "Make an imperative: <em>You should turn off the lights.</em>",
          "answer": [
            "turn off the lights"
          ],
          "explain": "Imperative = base verb, no subject."
        },
        {
          "type": "transform",
          "prompt": "Make it a prohibition with mustn't: <em>Don't touch the wires.</em>",
          "answer": [
            "you mustn't touch the wires",
            "you must not touch the wires"
          ],
          "explain": "Forbidden → <em>mustn't</em>."
        },
        {
          "type": "transform",
          "prompt": "Make it an obligation with have to: <em>Wear safety glasses.</em>",
          "answer": [
            "you have to wear safety glasses"
          ],
          "explain": "Obligation → <em>have to</em> + base verb."
        },
        {
          "type": "error",
          "prompt": "Correct the modal.",
          "given": "You must to show your ID.",
          "answer": [
            "you must show your id"
          ],
          "explain": "No <em>to</em> after <em>must</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the meaning (it is forbidden).",
          "given": "You don't have to enter without a ticket.",
          "answer": [
            "you mustn't enter without a ticket",
            "you must not enter without a ticket"
          ],
          "explain": "Forbidden → <em>mustn't</em>, not <em>don't have to</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a negative imperative.",
          "bank": [
            "Don't",
            "run",
            "near",
            "the",
            "pool"
          ],
          "answer": "Don't run near the pool",
          "explain": "<em>Don't</em> + base verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a rule.",
          "bank": [
            "Cyclists",
            "must",
            "use",
            "the",
            "lane"
          ],
          "answer": "Cyclists must use the lane",
          "explain": "<em>must</em> + base verb."
        },
        {
          "type": "match",
          "prompt": "Match each form to its meaning.",
          "pairs": [
            {
              "l": "imperative",
              "r": "a direct instruction"
            },
            {
              "l": "must",
              "r": "strong obligation"
            },
            {
              "l": "mustn't",
              "r": "something forbidden"
            }
          ],
          "explain": "Imperatives and rules."
        }
      ]
    },
    "t1s6_L8_sequencingAdverbs": {
      "id": "t1s6_L8_sequencingAdverbs",
      "code": "CCG",
      "title": "Sequencing Adverbs for Narration",
      "chapter": "Chapter 2 — Come Rain or Shine",
      "week": "Unit 2 · Camping · Wk 9 (CCG grammar)",
      "cefr": "B1.2 (Stage 6 · ENG.06)",
      "moeSlo": "ENG.06.WR.P.4.1",
      "source_ccg": "CCG Unit 2, Week 9, Lesson 16 — grammar 'Sequencing Adverbs' listed without a number (Retell stories / narration). Rendered as a 'CCG' pill.",
      "vocabulary": [
        "first",
        "then",
        "next",
        "after that",
        "finally",
        "meanwhile",
        "eventually",
        "suddenly"
      ],
      "explanation": [
        "<p><b>Sequencing adverbs</b> (also called sequencers or time connectors) show the <b>order</b> of events in a story or the <b>steps</b> in a process: <b>first</b>, <b>then</b>, <b>next</b>, <b>after that</b>, <b>later</b>, <b>finally</b>. They make narration clear and easy to follow, guiding the reader from one event to the next.</p>",
        "<p>We usually put a sequencer at the <b>start</b> of the sentence, followed by a <b>comma</b>: <i><b>First,</b> we packed our bags. <b>Then,</b> we set off.</i> Use <b>finally</b> or <b>eventually</b> for the <b>last</b> event, and <b>meanwhile</b> for something happening at the <b>same time</b>. Keep the sequencers in a logical order — <i>first → then/next → after that → finally</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "First, we packed the car."
        },
        {
          "type": "correct",
          "text": "Then we drove to the beach."
        },
        {
          "type": "correct",
          "text": "After that, the rain started."
        },
        {
          "type": "correct",
          "text": "Finally, we headed home."
        },
        {
          "type": "incorrect",
          "text": "Finally we packed, then we left, first we drove. (the order of the sequencers is wrong)"
        }
      ],
      "mistakes": [
        "Putting the sequencers in the wrong order (<em>finally</em> before <em>first</em>).",
        "Forgetting the comma after a fronted sequencer: <em>First we packed</em> → <em>First, we packed</em>.",
        "Using <em>at the end</em> for the last step instead of <em>finally</em> / <em>in the end</em>."
      ],
      "traps": [
        "Order: <em>first → then/next → after that → finally</em>.",
        "A comma usually follows a fronted sequencer.",
        "<em>meanwhile</em> = at the same time; <em>finally</em>/<em>eventually</em> = the last event."
      ],
      "arabicInsight": "<p><b>ظروف الترتيب (sequencing adverbs)</b> تُبيّن <b>تسلسل</b> الأحداث في القصّة أو <b>خطوات</b> العملية: <i>first, then, next, after that, finally</i>، فتجعل السردَ واضحاً ومتسلسلاً. وغالباً نضعها في <b>بداية</b> الجملة تتبعها <b>فاصلة</b> (<i>First, we packed. Then, we left</i>)، ونستعمل <i>finally/eventually</i> للحدث الأخير و<i>meanwhile</i> لما يحدث في الوقت نفسه. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the first-step sequencer: '____, we packed our bags.'",
          "options": [
            "Finally",
            "First",
            "After that",
            "Then"
          ],
          "answer": 1,
          "explain": "<em>First</em> opens the sequence."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'We woke up early. ____, we made breakfast.'",
          "options": [
            "Finally",
            "Then",
            "Meanwhile",
            "At the end"
          ],
          "answer": 1,
          "explain": "<em>Then</em> links the next step."
        },
        {
          "type": "mcq",
          "prompt": "Choose the last-step sequencer: '____, we arrived home, tired but happy.'",
          "options": [
            "First",
            "Next",
            "Finally",
            "Then"
          ],
          "answer": 2,
          "explain": "<em>Finally</em> marks the last event."
        },
        {
          "type": "mcq",
          "prompt": "Choose the same-time word: 'I cooked dinner. ____, my brother set the table.'",
          "options": [
            "Finally",
            "Meanwhile",
            "First",
            "After"
          ],
          "answer": 1,
          "explain": "<em>Meanwhile</em> = at the same time."
        },
        {
          "type": "fill",
          "prompt": "Add a middle-step sequencer.",
          "sentence": "First, we packed. ____, we left the house.",
          "answers": [
            "then",
            "next"
          ],
          "explain": "<em>Then</em>/<em>Next</em> links a middle step."
        },
        {
          "type": "fill",
          "prompt": "Complete the phrase.",
          "sentence": "We hiked all morning. ____ that, we had lunch.",
          "answers": [
            "after"
          ],
          "explain": "The phrase is <em>after that</em>."
        },
        {
          "type": "fill",
          "prompt": "Add a last-step sequencer.",
          "sentence": "____, after a long walk, we reached the top.",
          "answers": [
            "finally",
            "eventually"
          ],
          "explain": "<em>Finally</em>/<em>Eventually</em> marks the last event."
        },
        {
          "type": "transform",
          "prompt": "Add a first-step sequencer: <em>We checked the weather.</em>",
          "answer": [
            "first, we checked the weather",
            "first we checked the weather"
          ],
          "explain": "Front the sequencer + comma."
        },
        {
          "type": "transform",
          "prompt": "Add a last-step sequencer: <em>We went home.</em>",
          "answer": [
            "finally, we went home",
            "finally we went home"
          ],
          "explain": "<em>Finally</em> marks the last event."
        },
        {
          "type": "transform",
          "prompt": "Join with 'then': <em>We packed. We left.</em>",
          "answer": [
            "we packed, then we left",
            "first we packed, then we left"
          ],
          "explain": "<em>then</em> links the next step."
        },
        {
          "type": "error",
          "prompt": "Put the sequencers in order.",
          "given": "Finally we packed, then we drove, first we left.",
          "answer": [
            "first we packed, then we left, finally we drove",
            "first, we packed; then, we left; finally, we drove"
          ],
          "explain": "Order: first → then → finally."
        },
        {
          "type": "error",
          "prompt": "Put the sequencers in order.",
          "given": "Next we woke up, first we had breakfast.",
          "answer": [
            "first we woke up, next we had breakfast",
            "first, we woke up; next, we had breakfast"
          ],
          "explain": "<em>First</em> comes before <em>next</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "First",
            "we",
            "packed",
            "our",
            "bags"
          ],
          "answer": "First we packed our bags",
          "explain": "Sequencer + event."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "Finally",
            "we",
            "arrived",
            "at",
            "the",
            "beach"
          ],
          "answer": "Finally we arrived at the beach",
          "explain": "<em>Finally</em> marks the last event."
        },
        {
          "type": "match",
          "prompt": "Match each sequencer to its place in a story.",
          "pairs": [
            {
              "l": "first",
              "r": "the beginning"
            },
            {
              "l": "then / next",
              "r": "the middle"
            },
            {
              "l": "finally",
              "r": "the end"
            }
          ],
          "explain": "Ordering a narrative."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the first-step sequencer: '____, boil the water.'",
          "options": [
            "Finally",
            "First",
            "After that",
            "Then"
          ],
          "answer": 1,
          "explain": "<em>First</em> opens the sequence."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Add the pasta. ____, stir it well.'",
          "options": [
            "Finally",
            "Then",
            "Meanwhile",
            "At the end"
          ],
          "answer": 1,
          "explain": "<em>Then</em> links the next step."
        },
        {
          "type": "mcq",
          "prompt": "Choose the last-step sequencer: '____, serve the dish hot.'",
          "options": [
            "First",
            "Next",
            "Finally",
            "Then"
          ],
          "answer": 2,
          "explain": "<em>Finally</em> marks the last step."
        },
        {
          "type": "mcq",
          "prompt": "Choose the same-time word: 'I chopped the onions. ____, my sister heated the oil.'",
          "options": [
            "Finally",
            "Meanwhile",
            "First",
            "After"
          ],
          "answer": 1,
          "explain": "<em>Meanwhile</em> = at the same time."
        },
        {
          "type": "fill",
          "prompt": "Add a middle-step sequencer.",
          "sentence": "First, mix the flour. ____, add the eggs.",
          "answers": [
            "then",
            "next"
          ],
          "explain": "<em>Then</em>/<em>Next</em> links a middle step."
        },
        {
          "type": "fill",
          "prompt": "Complete the phrase.",
          "sentence": "Bake for ten minutes. ____ that, let it cool.",
          "answers": [
            "after"
          ],
          "explain": "The phrase is <em>after that</em>."
        },
        {
          "type": "fill",
          "prompt": "Add a last-step sequencer.",
          "sentence": "____, after an hour, the cake is ready.",
          "answers": [
            "finally",
            "eventually"
          ],
          "explain": "<em>Finally</em>/<em>Eventually</em> marks the last step."
        },
        {
          "type": "transform",
          "prompt": "Add a first-step sequencer: <em>Wash the vegetables.</em>",
          "answer": [
            "first, wash the vegetables",
            "first wash the vegetables"
          ],
          "explain": "Front the sequencer + comma."
        },
        {
          "type": "transform",
          "prompt": "Add a last-step sequencer: <em>Serve the meal.</em>",
          "answer": [
            "finally, serve the meal",
            "finally serve the meal"
          ],
          "explain": "<em>Finally</em> marks the last step."
        },
        {
          "type": "transform",
          "prompt": "Join with 'then': <em>Heat the pan. Add the oil.</em>",
          "answer": [
            "heat the pan, then add the oil",
            "first heat the pan, then add the oil"
          ],
          "explain": "<em>then</em> links the next step."
        },
        {
          "type": "error",
          "prompt": "Put the sequencers in order.",
          "given": "Finally mix it, then bake it, first prepare it.",
          "answer": [
            "first prepare it, then mix it, finally bake it",
            "first, prepare it; then, mix it; finally, bake it"
          ],
          "explain": "Order: first → then → finally."
        },
        {
          "type": "error",
          "prompt": "Put the sequencers in order.",
          "given": "Next turn on the oven, first set the temperature.",
          "answer": [
            "first turn on the oven, next set the temperature",
            "first, turn on the oven; next, set the temperature"
          ],
          "explain": "<em>First</em> comes before <em>next</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "First",
            "boil",
            "the",
            "water"
          ],
          "answer": "First boil the water",
          "explain": "Sequencer + step."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "Finally",
            "serve",
            "the",
            "dish"
          ],
          "answer": "Finally serve the dish",
          "explain": "<em>Finally</em> marks the last step."
        },
        {
          "type": "match",
          "prompt": "Match each sequencer to its place in a process.",
          "pairs": [
            {
              "l": "first",
              "r": "step one"
            },
            {
              "l": "then / next",
              "r": "a middle step"
            },
            {
              "l": "finally",
              "r": "the final step"
            }
          ],
          "explain": "Ordering a process."
        }
      ]
    }
  }
}
);
