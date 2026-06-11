/* ===== Grammar Academy DATA MODULE (CCG-faithful, validated) ===== */
/* Term 1 · AY 2026-27 · Grade 9 General (ENG.05 · Stage 5) · Mourad Mekki Teacher Toolkit */
/* Unit 1 'Living Together, Learning Together' (4 lessons) + Unit 2 'Shop Till You Drop!' (4 lessons). */
/* 8 lessons / 240 questions. All eight grammar items are named in the CCG -> 'CCG' pills; no teacher extensions. No invented G-codes. */
/* Stage-based IDs (t1s5_). */
GA.register(
{
  "term": "T1-2627",
  "termLabel": "Term 1 · AY 2026–27",
  "grade": "9",
  "stream": "general",
  "streamLabel": "Grade 9 General Pathway",
  "cefr": "B1.1 (Stage 5 · ENG.05)",
  "source": "MoE Comprehensive Curriculum Guide — English Language, Grade 9 General, Term 1 (ENG.05 · Stage 5). Grammar items are named in the CCG scope & sequence and Unit Overview without numbered G-codes, so all eight render as 'CCG' pills.",
  "chapters": [
    {
      "id": "ch1",
      "title": "Chapter 1 — Living Together, Learning Together",
      "lessons": [
        "t1s5_L1_wordOrder",
        "t1s5_L2_contractions",
        "t1s5_L3_comparatives",
        "t1s5_L4_prepositions"
      ]
    },
    {
      "id": "ch2",
      "title": "Chapter 2 — Shop Till You Drop!",
      "lessons": [
        "t1s5_L5_reference",
        "t1s5_L6_canAbility",
        "t1s5_L7_certainty",
        "t1s5_L8_transitions"
      ]
    }
  ],
  "lessons": {
    "t1s5_L1_wordOrder": {
      "id": "t1s5_L1_wordOrder",
      "code": "CCG",
      "title": "Word Order & Sentence Structure",
      "chapter": "Chapter 1 — Living Together, Learning Together",
      "week": "Unit 1 · Living Together, Learning Together · Unit Overview grammar focus (CCG grammar)",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.P.1.1",
      "source_ccg": "CCG Unit 1 Overview — 'Grammar Focus' lists basic English word order / sentence structure, named without a per-lesson G-code, so it renders as a 'CCG' pill.",
      "vocabulary": [
        "classmate",
        "community",
        "neighbour",
        "library",
        "assembly",
        "canteen",
        "cooperate",
        "schedule"
      ],
      "explanation": [
        "<p>An English statement follows a fixed order: <b>Subject + Verb + Object</b> (SVO). In <i>My classmates read the news</i>, the subject (<i>my classmates</i>) comes first, then the verb (<i>read</i>), then the object (<i>the news</i>). <b>Adjectives</b> normally come <b>before</b> the noun they describe: <i>a <b>friendly</b> neighbour</i>, not <i>a neighbour friendly</i>.</p>",
        "<p>Two more rules keep sentences natural. <b>Adverbs of frequency</b> (<i>always, often, never</i>) go <b>before</b> the main verb but <b>after</b> the verb <i>be</i>: <i>She <b>always</b> helps</i> / <i>She <b>is</b> always kind</i>. And when you mention where and when, <b>place comes before time</b>: <i>We met <b>at the library</b> <b>yesterday</b></i>. In questions, the subject and auxiliary swap places: <i><b>Do</b> you live near the school?</i></p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "My classmates study English every morning."
        },
        {
          "type": "correct",
          "text": "She always helps the new students."
        },
        {
          "type": "correct",
          "text": "We met at the canteen after the assembly."
        },
        {
          "type": "correct",
          "text": "Do you walk to school with your neighbour?"
        },
        {
          "type": "incorrect",
          "text": "Every morning study my classmates English. (the subject must come first → My classmates study English every morning.)"
        }
      ],
      "mistakes": [
        "Putting the object before the verb: <em>I English speak.</em> → <em>I <u>speak English</u>.</em>",
        "Time before place: <em>We arrived yesterday at school.</em> → <em>We arrived <u>at school yesterday</u>.</em>",
        "A frequency adverb after the main verb: <em>She helps always.</em> → <em>She <u>always helps</u>.</em>"
      ],
      "traps": [
        "Keep Subject + Verb + Object together and in that order.",
        "Place comes before time: '…at the club on Friday', not '…on Friday at the club'.",
        "Frequency adverbs go before the main verb but after the verb <em>be</em>."
      ],
      "arabicInsight": "<p>تختلف <b>ترتيب الكلمات</b> في الإنجليزية عن العربية؛ فالجملة الإنجليزية الخبرية تتبع نظام <b>فاعل + فعل + مفعول</b> (SVO) بترتيبٍ ثابت، وتأتي <b>الصفة قبل الاسم</b> (a friendly neighbour). كما تُوضع <b>ظروف التكرار</b> (always, often, never) <b>قبل</b> الفعل الرئيسي و<b>بعد</b> الفعل be، ويسبق <b>المكان الزمان</b> عادةً. الانتباه إلى هذا الترتيب يمنع نقل ترتيب الجملة العربية حرفياً إلى الإنجليزية. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correctly ordered sentence.",
          "options": [
            "Plays he football every weekend.",
            "He plays football every weekend.",
            "Every weekend football he plays.",
            "Football he plays every weekend."
          ],
          "answer": 1,
          "explain": "A statement follows Subject + Verb + Object."
        },
        {
          "type": "mcq",
          "prompt": "Where does the frequency adverb go with <em>be</em>?",
          "options": [
            "They late are often.",
            "They are often late.",
            "Often they late are.",
            "They often are late."
          ],
          "answer": 1,
          "explain": "Frequency adverbs come after the verb <em>be</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct order (place before time).",
          "options": [
            "We will meet tomorrow at the canteen.",
            "We will meet at the canteen tomorrow.",
            "We will meet at tomorrow the canteen.",
            "We will meet the canteen at tomorrow."
          ],
          "answer": 1,
          "explain": "Place ('at the canteen') comes before time ('tomorrow')."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct question.",
          "options": [
            "Where you do study?",
            "Where do you study?",
            "You do study where?",
            "Do where you study?"
          ],
          "answer": 1,
          "explain": "Questions invert the auxiliary and the subject."
        },
        {
          "type": "fill",
          "prompt": "Place the frequency adverb correctly.",
          "sentence": "They ____ play in the yard before class. (never)",
          "answers": [
            "never"
          ],
          "explain": "Frequency adverbs go before the main verb."
        },
        {
          "type": "fill",
          "prompt": "Add the place phrase in the right position.",
          "sentence": "We study ____ every morning. (in the lab)",
          "answers": [
            "in the lab"
          ],
          "explain": "Place phrases follow the verb and its object."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct question word for time.",
          "sentence": "____ does the class start? (time)",
          "answers": [
            "when"
          ],
          "explain": "Use <em>when</em> to ask about time."
        },
        {
          "type": "transform",
          "prompt": "Reorder into a correct sentence: <em>every day / we / the news / read</em>",
          "answer": [
            "we read the news every day"
          ],
          "explain": "Subject + Verb + Object, then the time phrase."
        },
        {
          "type": "transform",
          "prompt": "Make a yes/no question: <em>You live near the park.</em>",
          "answer": [
            "do you live near the park"
          ],
          "explain": "Add the auxiliary <em>do</em> and invert."
        },
        {
          "type": "transform",
          "prompt": "Place the adverb correctly: <em>I do my homework. (usually)</em>",
          "answer": [
            "i usually do my homework"
          ],
          "explain": "<em>Usually</em> goes before the main verb."
        },
        {
          "type": "error",
          "prompt": "Correct the word order.",
          "given": "She speaks fluently English.",
          "answer": [
            "she speaks english fluently"
          ],
          "explain": "The object comes before the manner adverb."
        },
        {
          "type": "error",
          "prompt": "Correct the word order.",
          "given": "We go on Fridays to the market.",
          "answer": [
            "we go to the market on fridays"
          ],
          "explain": "Place ('to the market') before time ('on Fridays')."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct statement.",
          "bank": [
            "My",
            "sister",
            "studies",
            "science",
            "every",
            "evening"
          ],
          "answer": "My sister studies science every evening",
          "explain": "Subject + Verb + Object + time."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a question.",
          "bank": [
            "Do",
            "you",
            "walk",
            "to",
            "school"
          ],
          "answer": "Do you walk to school",
          "explain": "Auxiliary first in a yes/no question."
        },
        {
          "type": "match",
          "prompt": "Match each rule to its description.",
          "pairs": [
            {
              "l": "Always, often, never go",
              "r": "before the main verb"
            },
            {
              "l": "Place phrases come",
              "r": "before time phrases"
            },
            {
              "l": "A statement follows",
              "r": "Subject–Verb–Object"
            }
          ],
          "explain": "Core word-order rules."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Which sentence is correctly ordered?",
          "options": [
            "Books my brother every night reads.",
            "My brother reads books every night.",
            "Reads my brother books every night.",
            "Every night my brother books reads."
          ],
          "answer": 1,
          "explain": "Subject + Verb + Object, then time."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct order with the verb <em>be</em>.",
          "options": [
            "They are usually busy.",
            "They usually are busy.",
            "Usually they busy are.",
            "Busy they are usually."
          ],
          "answer": 0,
          "explain": "Frequency adverb after <em>be</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the sentence with place before time.",
          "options": [
            "I saw him on Sunday at the mall.",
            "I saw him at the mall on Sunday.",
            "I saw him at on Sunday the mall.",
            "I on Sunday saw him at the mall."
          ],
          "answer": 1,
          "explain": "'At the mall' (place) before 'on Sunday' (time)."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct question.",
          "options": [
            "When the bus arrives?",
            "When does the bus arrive?",
            "Does when the bus arrive?",
            "The bus when does arrive?"
          ],
          "answer": 1,
          "explain": "Question word + auxiliary + subject + verb."
        },
        {
          "type": "fill",
          "prompt": "Place the frequency adverb correctly.",
          "sentence": "He ____ forgets his books. (rarely)",
          "answers": [
            "rarely"
          ],
          "explain": "Before the main verb."
        },
        {
          "type": "fill",
          "prompt": "Add the time phrase in the right position.",
          "sentence": "They finished the project ____ . (last week)",
          "answers": [
            "last week"
          ],
          "explain": "Time phrase comes at the end here."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct question word for place.",
          "sentence": "____ do you keep your bag? (place)",
          "answers": [
            "where"
          ],
          "explain": "Use <em>where</em> to ask about place."
        },
        {
          "type": "transform",
          "prompt": "Reorder into a correct sentence: <em>football / on Saturdays / we / play</em>",
          "answer": [
            "we play football on saturdays"
          ],
          "explain": "Subject + Verb + Object + time."
        },
        {
          "type": "transform",
          "prompt": "Make a yes/no question: <em>She knows the answer.</em>",
          "answer": [
            "does she know the answer"
          ],
          "explain": "Auxiliary <em>does</em> + base verb."
        },
        {
          "type": "transform",
          "prompt": "Place the adverb correctly: <em>He is helpful. (often)</em>",
          "answer": [
            "he is often helpful"
          ],
          "explain": "After the verb <em>be</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the word order.",
          "given": "I like very much this song.",
          "answer": [
            "i like this song very much"
          ],
          "explain": "Object before the intensifier phrase."
        },
        {
          "type": "error",
          "prompt": "Correct the word order.",
          "given": "They study in the morning at home.",
          "answer": [
            "they study at home in the morning"
          ],
          "explain": "Place before time."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct statement.",
          "bank": [
            "We",
            "clean",
            "the",
            "classroom",
            "on",
            "Mondays"
          ],
          "answer": "We clean the classroom on Mondays",
          "explain": "Subject + Verb + Object + time."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a question.",
          "bank": [
            "Does",
            "he",
            "take",
            "the",
            "train"
          ],
          "answer": "Does he take the train",
          "explain": "Auxiliary first."
        },
        {
          "type": "match",
          "prompt": "Match each rule to its description.",
          "pairs": [
            {
              "l": "The object goes",
              "r": "after the verb"
            },
            {
              "l": "Time phrases come",
              "r": "after place phrases"
            },
            {
              "l": "Questions usually",
              "r": "invert auxiliary and subject"
            }
          ],
          "explain": "Core word-order rules."
        }
      ]
    },
    "t1s5_L2_contractions": {
      "id": "t1s5_L2_contractions",
      "code": "CCG",
      "title": "Contractions (Affirmative & Negative)",
      "chapter": "Chapter 1 — Living Together, Learning Together",
      "week": "Unit 1 · Living Together, Learning Together · Unit Overview grammar focus (CCG grammar)",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.P.1.2",
      "source_ccg": "CCG Unit 1 Overview — 'Grammar Focus' lists affirmative and negative contractions, named without a per-lesson G-code, so it renders as a 'CCG' pill.",
      "vocabulary": [
        "roommate",
        "schoolmate",
        "belong",
        "share",
        "polite",
        "friendly",
        "argue",
        "apologise"
      ],
      "explanation": [
        "<p>A <b>contraction</b> joins two words and replaces the missing letters with an <b>apostrophe</b> (’). <b>Affirmative</b> contractions usually join a subject and an auxiliary: <i>I am → <b>I'm</b></i>, <i>she is → <b>she's</b></i>, <i>we are → <b>we're</b></i>, <i>they have → <b>they've</b></i>, <i>he will → <b>he'll</b></i>, <i>I would → <b>I'd</b></i>. Contractions make speech and friendly writing sound natural.</p>",
        "<p><b>Negative</b> contractions join a verb and <i>not</i>: <i>is not → <b>isn't</b></i>, <i>do not → <b>don't</b></i>, <i>cannot → <b>can't</b></i>, <i>will not → <b>won't</b></i>, <i>have not → <b>haven't</b></i>. Two forms are irregular: <i>will not → <b>won't</b></i> and <i>shall not → shan't</i>. Note that <i>'s</i> can mean <i>is</i> or <i>has</i> (<i>She's tired</i> / <i>She's left</i>). Avoid contractions in very formal writing.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "We're roommates, so we share everything."
        },
        {
          "type": "correct",
          "text": "She doesn't argue with her schoolmates."
        },
        {
          "type": "correct",
          "text": "They won't be late for the assembly."
        },
        {
          "type": "correct",
          "text": "I've already apologised to him."
        },
        {
          "type": "incorrect",
          "text": "He do'nt belong to that club. (the apostrophe replaces the 'o' in not → He doesn't…)"
        }
      ],
      "mistakes": [
        "Misplacing the apostrophe: <em>do'nt</em> → <em><u>don't</u></em>.",
        "Writing <em>willn't</em>: the form is irregular → <em><u>won't</u></em>.",
        "Confusing <em>its</em> (possessive) with <em>it's</em>: <em>Its raining.</em> → <em><u>It's</u> raining.</em>"
      ],
      "traps": [
        "The apostrophe replaces the missing letter(s), e.g. <em>is not → isn't</em>.",
        "<em>won't</em> and <em>shan't</em> are irregular negative contractions.",
        "<em>'s</em> can mean <em>is</em> or <em>has</em> — read the rest of the sentence."
      ],
      "arabicInsight": "<p><b>الاختصارات (contractions)</b> تدمج كلمتين وتستبدل الحرف المحذوف بعلامة <b>الفاصلة العليا (’)</b>، مثل <i>I am → I'm</i> و<i>is not → isn't</i>. وتُستعمل كثيراً في الحديث والكتابة الودّية، بينما يُفضَّل تجنّبها في الكتابة الرسمية. انتبه إلى الصيغ الشاذة <i>will not → won't</i> وإلى أن <b>'s</b> قد تعني <i>is</i> أو <i>has</i> حسب السياق. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Which is the correct contraction of <em>they are</em>?",
          "options": [
            "they're",
            "their",
            "they'are",
            "theyre"
          ],
          "answer": 0,
          "explain": "<em>they are → they're</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct negative contraction.",
          "options": [
            "She do'nt share.",
            "She doesn't share.",
            "She dosn't share.",
            "She does'nt share."
          ],
          "answer": 1,
          "explain": "<em>does not → doesn't</em>, apostrophe before <em>t</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which contraction is irregular?",
          "options": [
            "isn't",
            "won't",
            "aren't",
            "haven't"
          ],
          "answer": 1,
          "explain": "<em>will not</em> becomes <em>won't</em>, not <em>willn't</em>."
        },
        {
          "type": "mcq",
          "prompt": "What does <em>'s</em> mean in <em>She's left the room</em>?",
          "options": [
            "is",
            "has",
            "us",
            "was"
          ],
          "answer": 1,
          "explain": "Here <em>'s = has</em> (present perfect)."
        },
        {
          "type": "fill",
          "prompt": "Contract the underlined words.",
          "sentence": "____ (We are) good roommates.",
          "answers": [
            "we're"
          ],
          "explain": "<em>we are → we're</em>."
        },
        {
          "type": "fill",
          "prompt": "Contract the underlined words.",
          "sentence": "He ____ (will not) be late.",
          "answers": [
            "won't"
          ],
          "explain": "<em>will not → won't</em> (irregular)."
        },
        {
          "type": "fill",
          "prompt": "Contract the underlined words.",
          "sentence": "I ____ (have not) seen the list.",
          "answers": [
            "haven't"
          ],
          "explain": "<em>have not → haven't</em>."
        },
        {
          "type": "transform",
          "prompt": "Contract the affirmative: <em>I will help you.</em>",
          "answer": [
            "i'll help you"
          ],
          "explain": "<em>I will → I'll</em>."
        },
        {
          "type": "transform",
          "prompt": "Contract the negative: <em>They do not argue.</em>",
          "answer": [
            "they don't argue"
          ],
          "explain": "<em>do not → don't</em>."
        },
        {
          "type": "transform",
          "prompt": "Contract the affirmative: <em>She has finished.</em>",
          "answer": [
            "she's finished"
          ],
          "explain": "<em>she has → she's</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the contraction.",
          "given": "We did'nt apologise.",
          "answer": [
            "we didn't apologise"
          ],
          "explain": "Apostrophe before <em>t</em>: <em>didn't</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the contraction.",
          "given": "Its a friendly class.",
          "answer": [
            "it's a friendly class"
          ],
          "explain": "<em>it is → it's</em> (possessive <em>its</em> has no apostrophe)."
        },
        {
          "type": "reorder",
          "prompt": "Reorder using the contraction.",
          "bank": [
            "We're",
            "polite",
            "to",
            "everyone"
          ],
          "answer": "We're polite to everyone",
          "explain": "Affirmative contraction <em>we're</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder using the contraction.",
          "bank": [
            "She",
            "doesn't",
            "argue",
            "much"
          ],
          "answer": "She doesn't argue much",
          "explain": "Negative contraction <em>doesn't</em>."
        },
        {
          "type": "match",
          "prompt": "Match each full form to its contraction.",
          "pairs": [
            {
              "l": "is not",
              "r": "isn't"
            },
            {
              "l": "I would",
              "r": "I'd"
            },
            {
              "l": "cannot",
              "r": "can't"
            }
          ],
          "explain": "Affirmative and negative contractions."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Which is the correct contraction of <em>we have</em>?",
          "options": [
            "we've",
            "weve",
            "we'have",
            "wev"
          ],
          "answer": 0,
          "explain": "<em>we have → we've</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct negative contraction.",
          "options": [
            "He is'nt friendly.",
            "He isn't friendly.",
            "He in't friendly.",
            "He isnt friendly."
          ],
          "answer": 1,
          "explain": "<em>is not → isn't</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which negative form is irregular?",
          "options": [
            "don't",
            "shan't",
            "couldn't",
            "wasn't"
          ],
          "answer": 1,
          "explain": "<em>shall not → shan't</em>."
        },
        {
          "type": "mcq",
          "prompt": "What does <em>'s</em> mean in <em>He's a kind neighbour</em>?",
          "options": [
            "has",
            "is",
            "us",
            "does"
          ],
          "answer": 1,
          "explain": "Here <em>'s = is</em>."
        },
        {
          "type": "fill",
          "prompt": "Contract the underlined words.",
          "sentence": "____ (They have) shared the books.",
          "answers": [
            "they've"
          ],
          "explain": "<em>they have → they've</em>."
        },
        {
          "type": "fill",
          "prompt": "Contract the underlined words.",
          "sentence": "I ____ (cannot) find my schedule.",
          "answers": [
            "can't"
          ],
          "explain": "<em>cannot → can't</em>."
        },
        {
          "type": "fill",
          "prompt": "Contract the underlined words.",
          "sentence": "She ____ (is not) here yet.",
          "answers": [
            "isn't"
          ],
          "explain": "<em>is not → isn't</em>."
        },
        {
          "type": "transform",
          "prompt": "Contract the affirmative: <em>You are welcome.</em>",
          "answer": [
            "you're welcome"
          ],
          "explain": "<em>you are → you're</em>."
        },
        {
          "type": "transform",
          "prompt": "Contract the negative: <em>He does not belong here.</em>",
          "answer": [
            "he doesn't belong here"
          ],
          "explain": "<em>does not → doesn't</em>."
        },
        {
          "type": "transform",
          "prompt": "Contract the affirmative: <em>We had already left.</em>",
          "answer": [
            "we'd already left"
          ],
          "explain": "<em>we had → we'd</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the contraction.",
          "given": "They could'nt agree.",
          "answer": [
            "they couldn't agree"
          ],
          "explain": "<em>couldn't</em>, apostrophe before <em>t</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the contraction.",
          "given": "Your late again.",
          "answer": [
            "you're late again"
          ],
          "explain": "<em>you are → you're</em> (not the possessive <em>your</em>)."
        },
        {
          "type": "reorder",
          "prompt": "Reorder using the contraction.",
          "bank": [
            "They're",
            "sharing",
            "a",
            "room"
          ],
          "answer": "They're sharing a room",
          "explain": "Affirmative contraction <em>they're</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder using the contraction.",
          "bank": [
            "He",
            "won't",
            "be",
            "rude"
          ],
          "answer": "He won't be rude",
          "explain": "Irregular negative <em>won't</em>."
        },
        {
          "type": "match",
          "prompt": "Match each full form to its contraction.",
          "pairs": [
            {
              "l": "do not",
              "r": "don't"
            },
            {
              "l": "she will",
              "r": "she'll"
            },
            {
              "l": "have not",
              "r": "haven't"
            }
          ],
          "explain": "Affirmative and negative contractions."
        }
      ]
    },
    "t1s5_L3_comparatives": {
      "id": "t1s5_L3_comparatives",
      "code": "CCG",
      "title": "Comparative & Superlative Adjectives",
      "chapter": "Chapter 1 — Living Together, Learning Together",
      "week": "Unit 1 · Living Together, Learning Together · Unit Overview grammar focus (CCG grammar)",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.P.2.1",
      "source_ccg": "CCG Unit 1 Overview — 'Grammar Focus' lists comparative and superlative adjectives together (combined per the Grade 10 General precedent), named without a per-lesson G-code, so it renders as a 'CCG' pill.",
      "vocabulary": [
        "helpful",
        "patient",
        "popular",
        "crowded",
        "comfortable",
        "responsible",
        "talented",
        "generous"
      ],
      "explanation": [
        "<p>Use the <b>comparative</b> to compare <b>two</b> things and the <b>superlative</b> to pick out <b>one</b> from a group of three or more. <b>Short adjectives</b> (one syllable) add <i>-er</i> / <i>-est</i>: <i>tall → <b>taller</b> → <b>the tallest</b></i>. Adjectives ending in <i>-y</i> change <i>y</i> to <i>i</i>: <i>happy → <b>happier</b> → <b>the happiest</b></i>. The comparative is usually followed by <i>than</i>.</p>",
        "<p><b>Longer adjectives</b> (two or more syllables) use <i><b>more</b></i> / <i><b>the most</b></i>: <i>helpful → <b>more helpful</b> → <b>the most helpful</b></i>. A few are <b>irregular</b>: <i>good → <b>better</b> → <b>the best</b></i>, <i>bad → <b>worse</b> → <b>the worst</b></i>, <i>far → <b>farther/further</b></i>. Never mix the two systems: write <i>more popular</i>, not <i>more popularer</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "Sara is more patient than her brother."
        },
        {
          "type": "correct",
          "text": "This is the most comfortable seat in the library."
        },
        {
          "type": "correct",
          "text": "Today is busier than yesterday."
        },
        {
          "type": "correct",
          "text": "He is the best player on the team."
        },
        {
          "type": "incorrect",
          "text": "She is more friendlier than me. (don't mix 'more' and '-er' → She is friendlier than me.)"
        }
      ],
      "mistakes": [
        "Doubling the comparative: <em>more taller</em> → <em><u>taller</u></em>.",
        "Using <em>-er</em> on a long adjective: <em>popularer</em> → <em><u>more popular</u></em>.",
        "Forgetting <em>than</em>: <em>She is older me.</em> → <em>She is older <u>than</u> me.</em>"
      ],
      "traps": [
        "One-syllable adjectives add <em>-er/-est</em>; long ones use <em>more/the most</em>.",
        "Adjectives ending in <em>-y</em> change to <em>-ier/-iest</em>.",
        "<em>good/bad/far</em> are irregular: <em>better/best</em>, <em>worse/worst</em>, <em>farther/further</em>."
      ],
      "arabicInsight": "<p>تُستعمل صيغة <b>المقارنة (comparative)</b> للمقارنة بين <b>شيئين</b> وتُتبع غالباً بـ <i>than</i>، وصيغة <b>التفضيل (superlative)</b> لاختيار <b>واحد</b> من مجموعة. تأخذ الصفات <b>القصيرة</b> اللاحقة <i>-er/-est</i>، بينما تستعمل الصفات <b>الطويلة</b> <i>more / the most</i>. لا يجوز الجمع بين الطريقتين (لا نقول <i>more taller</i>)، وهناك صفاتٌ شاذّة مثل <i>good → better → best</i>. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct comparative.",
          "options": [
            "more tall",
            "taller",
            "tallest",
            "more taller"
          ],
          "answer": 1,
          "explain": "One syllable → add <em>-er</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct superlative.",
          "options": [
            "the helpfulest",
            "the most helpful",
            "most helpful",
            "the helpfuler"
          ],
          "answer": 1,
          "explain": "Long adjective → <em>the most</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'This room is ____ than that one.'",
          "options": [
            "crowdeder",
            "more crowded",
            "most crowded",
            "crowdedest"
          ],
          "answer": 1,
          "explain": "Two syllables → <em>more</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct irregular form.",
          "options": [
            "gooder",
            "better",
            "more good",
            "bestest"
          ],
          "answer": 1,
          "explain": "<em>good → better</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the comparative.",
          "sentence": "Maths is ____ (easy) than science for me.",
          "answers": [
            "easier"
          ],
          "explain": "<em>-y → -ier</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the superlative.",
          "sentence": "She is the ____ (responsible) student in class.",
          "answers": [
            "most responsible"
          ],
          "explain": "Long adjective → <em>the most</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the comparative.",
          "sentence": "He is ____ (generous) than his cousin.",
          "answers": [
            "more generous"
          ],
          "explain": "Two syllables → <em>more</em>."
        },
        {
          "type": "transform",
          "prompt": "Make the comparative: <em>This bag is heavy. (than that one)</em>",
          "answer": [
            "this bag is heavier than that one"
          ],
          "explain": "<em>heavy → heavier</em>."
        },
        {
          "type": "transform",
          "prompt": "Make the superlative: <em>He is a talented singer. (in the group)</em>",
          "answer": [
            "he is the most talented singer in the group"
          ],
          "explain": "Long adjective → <em>the most</em>."
        },
        {
          "type": "transform",
          "prompt": "Make the comparative: <em>Today is bad. (than yesterday)</em>",
          "answer": [
            "today is worse than yesterday"
          ],
          "explain": "<em>bad → worse</em> (irregular)."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison.",
          "given": "She is more older than me.",
          "answer": [
            "she is older than me"
          ],
          "explain": "Don't mix <em>more</em> with <em>-er</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison.",
          "given": "This is the popularest club.",
          "answer": [
            "this is the most popular club"
          ],
          "explain": "Long adjective → <em>the most popular</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a comparison.",
          "bank": [
            "Ali",
            "is",
            "taller",
            "than",
            "Omar"
          ],
          "answer": "Ali is taller than Omar",
          "explain": "Comparative + <em>than</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a superlative.",
          "bank": [
            "It",
            "is",
            "the",
            "best",
            "library"
          ],
          "answer": "It is the best library",
          "explain": "Irregular superlative <em>the best</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its comparative.",
          "pairs": [
            {
              "l": "happy",
              "r": "happier"
            },
            {
              "l": "comfortable",
              "r": "more comfortable"
            },
            {
              "l": "bad",
              "r": "worse"
            }
          ],
          "explain": "Short, long, and irregular forms."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct comparative.",
          "options": [
            "more big",
            "bigger",
            "biggest",
            "more bigger"
          ],
          "answer": 1,
          "explain": "One syllable → <em>-er</em> (double the consonant)."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct superlative.",
          "options": [
            "the popularest",
            "the most popular",
            "most popular",
            "the populariest"
          ],
          "answer": 1,
          "explain": "Long adjective → <em>the most</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'My seat is ____ than yours.'",
          "options": [
            "comfortabler",
            "more comfortable",
            "most comfortable",
            "comfortablest"
          ],
          "answer": 1,
          "explain": "Long adjective → <em>more</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct irregular form.",
          "options": [
            "the baddest",
            "the worst",
            "the most bad",
            "worsest"
          ],
          "answer": 1,
          "explain": "<em>bad → the worst</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the comparative.",
          "sentence": "Today is ____ (busy) than Monday.",
          "answers": [
            "busier"
          ],
          "explain": "<em>-y → -ier</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the superlative.",
          "sentence": "He is the ____ (patient) teacher here.",
          "answers": [
            "most patient"
          ],
          "explain": "Long adjective → <em>the most</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the comparative.",
          "sentence": "This phone is ____ (good) than my old one.",
          "answers": [
            "better"
          ],
          "explain": "<em>good → better</em> (irregular)."
        },
        {
          "type": "transform",
          "prompt": "Make the comparative: <em>The hall is large. (than the office)</em>",
          "answer": [
            "the hall is larger than the office"
          ],
          "explain": "<em>large → larger</em>."
        },
        {
          "type": "transform",
          "prompt": "Make the superlative: <em>She is a helpful friend. (of all)</em>",
          "answer": [
            "she is the most helpful friend of all"
          ],
          "explain": "Long adjective → <em>the most</em>."
        },
        {
          "type": "transform",
          "prompt": "Make the comparative: <em>The park is far. (than the mall)</em>",
          "answer": [
            "the park is farther than the mall",
            "the park is further than the mall"
          ],
          "explain": "<em>far → farther/further</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison.",
          "given": "He is the most fastest runner.",
          "answer": [
            "he is the fastest runner"
          ],
          "explain": "Don't mix <em>most</em> with <em>-est</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the comparison.",
          "given": "She is responsibler than him.",
          "answer": [
            "she is more responsible than him"
          ],
          "explain": "Long adjective → <em>more responsible</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a comparison.",
          "bank": [
            "Maths",
            "is",
            "harder",
            "than",
            "art"
          ],
          "answer": "Maths is harder than art",
          "explain": "Comparative + <em>than</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a superlative.",
          "bank": [
            "She",
            "is",
            "the",
            "most",
            "generous"
          ],
          "answer": "She is the most generous",
          "explain": "Long-adjective superlative."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its superlative.",
          "pairs": [
            {
              "l": "easy",
              "r": "the easiest"
            },
            {
              "l": "talented",
              "r": "the most talented"
            },
            {
              "l": "good",
              "r": "the best"
            }
          ],
          "explain": "Short, long, and irregular forms."
        }
      ]
    },
    "t1s5_L4_prepositions": {
      "id": "t1s5_L4_prepositions",
      "code": "CCG",
      "title": "Prepositions of Place & Direction",
      "chapter": "Chapter 1 — Living Together, Learning Together",
      "week": "Unit 1 · Living Together, Learning Together · Unit Overview grammar focus (CCG grammar)",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.P.2.2",
      "source_ccg": "CCG Unit 1 Overview — 'Grammar Focus' lists prepositions of place and direction, named without a per-lesson G-code, so it renders as a 'CCG' pill.",
      "vocabulary": [
        "corridor",
        "entrance",
        "noticeboard",
        "playground",
        "opposite",
        "between",
        "towards",
        "across"
      ],
      "explanation": [
        "<p><b>Prepositions of place</b> say where something is. The three most common are <i><b>in</b></i> (inside an area or space: <i>in the classroom</i>), <i><b>on</b></i> (on a surface: <i>on the noticeboard</i>), and <i><b>at</b></i> (at a point or place: <i>at the entrance</i>). Others describe position: <i><b>between</b></i> (two things), <i><b>next to</b></i> / <i><b>beside</b></i>, <i><b>opposite</b></i>, <i><b>behind</b></i>, <i><b>in front of</b></i>, and <i><b>under</b></i>.</p>",
        "<p><b>Prepositions of direction</b> show movement. Use <i><b>to</b></i> for a destination (<i>walk <b>to</b> school</i>), <i><b>into</b></i> for entering (<i>go <b>into</b> the hall</i>), <i><b>out of</b></i> for leaving, <i><b>towards</b></i> for moving in a direction, <i><b>across</b></i> for one side to the other, <i><b>through</b></i> for passing inside something, and <i><b>along</b></i> for following a line such as a corridor. Remember: <i>arrive <b>at</b></i> a building but <i>arrive <b>in</b></i> a city.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "The notice is on the board next to the door."
        },
        {
          "type": "correct",
          "text": "We waited at the entrance of the school."
        },
        {
          "type": "correct",
          "text": "She walked across the playground towards her friends."
        },
        {
          "type": "correct",
          "text": "The library is between the canteen and the lab."
        },
        {
          "type": "incorrect",
          "text": "He went in the classroom quietly. (movement into a space needs 'into' → He went into the classroom quietly.)"
        }
      ],
      "mistakes": [
        "Using <em>in</em> for movement: <em>go in the hall</em> → <em>go <u>into</u> the hall</em>.",
        "Using <em>to</em> with <em>arrive</em>: <em>arrive to school</em> → <em>arrive <u>at</u> school</em>.",
        "Confusing <em>between</em> and <em>among</em>: <em>between the three of us</em> → <em><u>among</u> the three of us</em>."
      ],
      "traps": [
        "<em>in</em> = inside a space, <em>on</em> = on a surface, <em>at</em> = at a point.",
        "Movement <b>into</b> a space, but position <b>in</b> a space.",
        "<em>arrive at</em> a building, <em>arrive in</em> a city or country."
      ],
      "arabicInsight": "<p>تُبيّن <b>حروف الجر المكانية</b> موضع الشيء: <i>in</i> داخل حيّز، و<i>on</i> على سطح، و<i>at</i> عند نقطة. أمّا <b>حروف جر الاتجاه</b> فتدل على الحركة مثل <i>to / into / across / towards / through</i>. لاحظ الفرق بين الموضع والحركة: نقول <i>in the hall</i> للموضع و<i>into the hall</i> للدخول، و<i>arrive at</i> لمبنى و<i>arrive in</i> لمدينة. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct preposition: 'The keys are ____ the table.'",
          "options": [
            "in",
            "on",
            "at",
            "into"
          ],
          "answer": 1,
          "explain": "On a surface → <em>on</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct preposition of direction.",
          "options": [
            "She ran across to the gate.",
            "She ran into the gate.",
            "She ran towards the gate.",
            "She ran at the gate."
          ],
          "answer": 2,
          "explain": "Moving in a direction → <em>towards</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'We arrived ____ the school early.'",
          "options": [
            "to",
            "at",
            "into",
            "on"
          ],
          "answer": 1,
          "explain": "<em>arrive at</em> a building."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence shows position, not movement?",
          "options": [
            "He walked into the lab.",
            "The bag is in the lab.",
            "She went into the lab.",
            "They ran into the lab."
          ],
          "answer": 1,
          "explain": "Position uses <em>in</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a place preposition.",
          "sentence": "The poster is ____ the noticeboard.",
          "answers": [
            "on"
          ],
          "explain": "On a surface → <em>on</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a direction preposition.",
          "sentence": "Walk ____ the corridor to room 5.",
          "answers": [
            "along"
          ],
          "explain": "Following a line → <em>along</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a place preposition.",
          "sentence": "The shop is ____ the bank and the café.",
          "answers": [
            "between"
          ],
          "explain": "Two things → <em>between</em>."
        },
        {
          "type": "transform",
          "prompt": "Add the missing preposition: <em>They walked ___ the playground. (one side to the other)</em>",
          "answer": [
            "they walked across the playground"
          ],
          "explain": "One side to the other → <em>across</em>."
        },
        {
          "type": "transform",
          "prompt": "Add the missing preposition: <em>Put the file ___ the shelf.</em>",
          "answer": [
            "put the file on the shelf"
          ],
          "explain": "On a surface → <em>on</em>."
        },
        {
          "type": "transform",
          "prompt": "Add the missing preposition: <em>We went ___ the hall for the assembly.</em>",
          "answer": [
            "we went into the hall for the assembly"
          ],
          "explain": "Movement inside → <em>into</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the preposition.",
          "given": "He arrived to the office late.",
          "answer": [
            "he arrived at the office late"
          ],
          "explain": "<em>arrive at</em> a building."
        },
        {
          "type": "error",
          "prompt": "Correct the preposition.",
          "given": "She went in the classroom and sat down.",
          "answer": [
            "she went into the classroom and sat down"
          ],
          "explain": "Movement → <em>into</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "The",
            "lab",
            "is",
            "opposite",
            "the",
            "canteen"
          ],
          "answer": "The lab is opposite the canteen",
          "explain": "Position → <em>opposite</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "We",
            "walked",
            "towards",
            "the",
            "entrance"
          ],
          "answer": "We walked towards the entrance",
          "explain": "Direction → <em>towards</em>."
        },
        {
          "type": "match",
          "prompt": "Match each preposition to its use.",
          "pairs": [
            {
              "l": "in",
              "r": "inside a space"
            },
            {
              "l": "on",
              "r": "on a surface"
            },
            {
              "l": "into",
              "r": "movement inside"
            }
          ],
          "explain": "Place vs direction."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Which preposition shows position inside a space?",
          "options": [
            "under",
            "in",
            "beside",
            "across"
          ],
          "answer": 1,
          "explain": "Inside a space → <em>in</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct preposition of direction.",
          "options": [
            "We walked through the corridor.",
            "We walked on the corridor.",
            "We walked at the corridor.",
            "We walked in to the corridor."
          ],
          "answer": 0,
          "explain": "Passing inside → <em>through</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'They arrived ____ Abu Dhabi at noon.'",
          "options": [
            "at",
            "in",
            "to",
            "on"
          ],
          "answer": 1,
          "explain": "<em>arrive in</em> a city."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence shows movement, not position?",
          "options": [
            "The book is on the desk.",
            "She is at the gate.",
            "He ran out of the room.",
            "The keys are in the bag."
          ],
          "answer": 2,
          "explain": "Movement uses <em>out of</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a place preposition.",
          "sentence": "The clock is ____ the wall.",
          "answers": [
            "on"
          ],
          "explain": "On a surface → <em>on</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a direction preposition.",
          "sentence": "Go ____ the door and turn left.",
          "answers": [
            "through"
          ],
          "explain": "Passing inside → <em>through</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a place preposition.",
          "sentence": "My locker is ____ to the stairs.",
          "answers": [
            "next"
          ],
          "explain": "Beside → <em>next to</em>."
        },
        {
          "type": "transform",
          "prompt": "Add the missing preposition: <em>She ran ___ her classroom. (entering)</em>",
          "answer": [
            "she ran into her classroom"
          ],
          "explain": "Entering → <em>into</em>."
        },
        {
          "type": "transform",
          "prompt": "Add the missing preposition: <em>The map is ___ the corridor wall.</em>",
          "answer": [
            "the map is on the corridor wall"
          ],
          "explain": "On a surface → <em>on</em>."
        },
        {
          "type": "transform",
          "prompt": "Add the missing preposition: <em>We waited ___ the entrance.</em>",
          "answer": [
            "we waited at the entrance"
          ],
          "explain": "At a point → <em>at</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the preposition.",
          "given": "The picture is in the wall.",
          "answer": [
            "the picture is on the wall"
          ],
          "explain": "On a surface → <em>on</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the preposition.",
          "given": "They drove towards to the city.",
          "answer": [
            "they drove towards the city"
          ],
          "explain": "<em>towards</em> takes no extra <em>to</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "The",
            "office",
            "is",
            "behind",
            "the",
            "library"
          ],
          "answer": "The office is behind the library",
          "explain": "Position → <em>behind</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "She",
            "walked",
            "across",
            "the",
            "yard"
          ],
          "answer": "She walked across the yard",
          "explain": "Direction → <em>across</em>."
        },
        {
          "type": "match",
          "prompt": "Match each preposition to its use.",
          "pairs": [
            {
              "l": "at",
              "r": "at a point"
            },
            {
              "l": "between",
              "r": "two things"
            },
            {
              "l": "towards",
              "r": "moving in a direction"
            }
          ],
          "explain": "Place vs direction."
        }
      ]
    },
    "t1s5_L5_reference": {
      "id": "t1s5_L5_reference",
      "code": "CCG",
      "title": "Reference & Substitution",
      "chapter": "Chapter 2 — Shop Till You Drop!",
      "week": "Unit 2 · Shop Till You Drop! · Unit Overview grammar focus (CCG grammar)",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.R.2.1",
      "source_ccg": "CCG Unit 2 Overview — 'Grammar Focus' lists reference and substitution as cohesion devices, named without a per-lesson G-code, so it renders as a 'CCG' pill.",
      "vocabulary": [
        "bargain",
        "receipt",
        "refund",
        "customer",
        "discount",
        "trolley",
        "checkout",
        "afford"
      ],
      "explanation": [
        "<p><b>Reference</b> words point back to something already mentioned so we don't repeat it. <b>Pronouns</b> like <i>it, they, them, this, that, these, those</i> refer to nouns: <i>I bought a jacket. <b>It</b> was a bargain.</i> <b>Possessives</b> (<i>its, their</i>) and words like <i><b>here, there, then</b></i> also refer back. Good reference makes writing flow and avoids repeating the same noun.</p>",
        "<p><b>Substitution</b> replaces a word or phrase with a shorter word to avoid repetition. Use <i><b>one/ones</b></i> for countable nouns (<i>This bag is cheap, but that <b>one</b> is cheaper</i>), <i><b>do/does/did</b></i> for verb phrases (<i>She shops online and so <b>does</b> he</i>), and <i><b>so/not</b></i> after verbs like <i>think</i> and <i>hope</i> (<i>Will it be on sale? — I think <b>so</b>.</i>). Always make sure the reader can tell what the word refers to.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "I returned the shoes because they were too small."
        },
        {
          "type": "correct",
          "text": "This trolley is full, so I'll take that one."
        },
        {
          "type": "correct",
          "text": "Did you keep the receipt? — Yes, I did."
        },
        {
          "type": "correct",
          "text": "Is there a discount? — I hope so."
        },
        {
          "type": "incorrect",
          "text": "I like this jacket more than this. (use 'one' to substitute → I like this jacket more than that one.)"
        }
      ],
      "mistakes": [
        "Repeating the noun instead of substituting: <em>a red bag and a blue bag</em> → <em>a red bag and a blue <u>one</u></em>.",
        "Unclear reference: <em>She told her it was cheap.</em> (who is <em>her</em>?) → name the person.",
        "Using <em>it</em> for plurals: <em>The prices? It is high.</em> → <em>The prices? <u>They</u> are high.</em>"
      ],
      "traps": [
        "<em>one/ones</em> substitutes for countable nouns to avoid repetition.",
        "<em>do/does/did</em> can stand in for a whole verb phrase.",
        "After <em>think/hope/believe</em>, use <em>so</em> or <em>not</em>, not a full clause."
      ],
      "arabicInsight": "<p>تُستعمل أدوات <b>الإحالة (reference)</b> مثل الضمائر <i>it, they, this, that</i> للإشارة إلى ما سبق ذكره دون تكراره، بينما يُستعمل <b>الإبدال (substitution)</b> لاستبدال كلمة بأخرى أقصر مثل <i>one/ones</i> للأسماء المعدودة و<i>do/does/did</i> للجمل الفعلية و<i>so/not</i> بعد أفعال مثل <i>think</i> و<i>hope</i>. تساعد هاتان الأداتان على <b>التماسك النصي</b> وتجنّب التكرار. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct reference word: 'I bought two pens. ____ are blue.'",
          "options": [
            "It",
            "They",
            "That",
            "This"
          ],
          "answer": 1,
          "explain": "Plural noun → <em>they</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct substitution: 'This shirt is small; I'll take a bigger ____.'",
          "options": [
            "it",
            "one",
            "that",
            "some"
          ],
          "answer": 1,
          "explain": "Countable noun → <em>one</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Do you shop online? — Yes, I ____.'",
          "options": [
            "am",
            "do",
            "so",
            "did"
          ],
          "answer": 1,
          "explain": "Present verb phrase → <em>do</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Will it be cheaper next week? — I think ____.'",
          "options": [
            "it",
            "that",
            "so",
            "yes"
          ],
          "answer": 2,
          "explain": "After <em>think</em> → <em>so</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a reference word.",
          "sentence": "I lost my receipt, so I couldn't show ____ .",
          "answers": [
            "it"
          ],
          "explain": "Singular noun → <em>it</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a substitution word.",
          "sentence": "These gloves are torn; I need new ____ .",
          "answers": [
            "ones"
          ],
          "explain": "Plural countable → <em>ones</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a substitution word.",
          "sentence": "She likes bargains and so ____ I.",
          "answers": [
            "do"
          ],
          "explain": "Verb-phrase substitution → <em>do</em>."
        },
        {
          "type": "transform",
          "prompt": "Avoid repetition: <em>I want the red bag, not the black bag.</em>",
          "answer": [
            "i want the red bag not the black one"
          ],
          "explain": "Substitute the second noun with <em>one</em>."
        },
        {
          "type": "transform",
          "prompt": "Replace the verb phrase: <em>He saves money, and I save money too.</em>",
          "answer": [
            "he saves money and i do too",
            "he saves money and so do i"
          ],
          "explain": "Use <em>do</em> for the verb phrase."
        },
        {
          "type": "transform",
          "prompt": "Answer with substitution: <em>Is the sale still on? (you believe yes)</em>",
          "answer": [
            "i believe so"
          ],
          "explain": "After <em>believe</em> → <em>so</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the reference.",
          "given": "The prices are high. It is too much.",
          "answer": [
            "the prices are high they are too much"
          ],
          "explain": "Plural → <em>they</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the substitution.",
          "given": "This phone is good, but that phone is better.",
          "answer": [
            "this phone is good but that one is better"
          ],
          "explain": "Substitute with <em>one</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder using substitution.",
          "bank": [
            "I",
            "want",
            "this",
            "one",
            "not",
            "that"
          ],
          "answer": "I want this one not that",
          "explain": "<em>one</em> avoids repeating the noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder using reference.",
          "bank": [
            "They",
            "were",
            "on",
            "sale",
            "yesterday"
          ],
          "answer": "They were on sale yesterday",
          "explain": "<em>they</em> refers back to a plural noun."
        },
        {
          "type": "match",
          "prompt": "Match each word to what it does.",
          "pairs": [
            {
              "l": "one",
              "r": "substitutes a countable noun"
            },
            {
              "l": "they",
              "r": "refers to a plural noun"
            },
            {
              "l": "so",
              "r": "follows think/hope"
            }
          ],
          "explain": "Reference and substitution."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct reference word: 'I returned the jacket. ____ was faulty.'",
          "options": [
            "They",
            "It",
            "Those",
            "These"
          ],
          "answer": 1,
          "explain": "Singular noun → <em>it</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct substitution: 'These shoes are old; I want new ____.'",
          "options": [
            "one",
            "ones",
            "it",
            "that"
          ],
          "answer": 1,
          "explain": "Plural countable → <em>ones</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Did she ask for a refund? — Yes, she ____.'",
          "options": [
            "does",
            "did",
            "so",
            "was"
          ],
          "answer": 1,
          "explain": "Past verb phrase → <em>did</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Will the queue be long? — I hope ____.'",
          "options": [
            "that",
            "it",
            "not",
            "no"
          ],
          "answer": 2,
          "explain": "After <em>hope</em>, the negative is <em>not</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a reference word.",
          "sentence": "I saw the discount sign and pointed at ____ .",
          "answers": [
            "it"
          ],
          "explain": "Singular → <em>it</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a substitution word.",
          "sentence": "This trolley is broken; take that ____ .",
          "answers": [
            "one"
          ],
          "explain": "Countable → <em>one</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a substitution word.",
          "sentence": "He pays by card and so ____ she.",
          "answers": [
            "does"
          ],
          "explain": "Verb-phrase substitution → <em>does</em>."
        },
        {
          "type": "transform",
          "prompt": "Avoid repetition: <em>I prefer the small box to the large box.</em>",
          "answer": [
            "i prefer the small box to the large one"
          ],
          "explain": "Substitute with <em>one</em>."
        },
        {
          "type": "transform",
          "prompt": "Replace the verb phrase: <em>They love bargains, and we love bargains too.</em>",
          "answer": [
            "they love bargains and we do too",
            "they love bargains and so do we"
          ],
          "explain": "Use <em>do</em> for the verb phrase."
        },
        {
          "type": "transform",
          "prompt": "Answer with substitution: <em>Is it sold out? (you think yes)</em>",
          "answer": [
            "i think so"
          ],
          "explain": "After <em>think</em> → <em>so</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the reference.",
          "given": "My friends shopped early. He found great deals.",
          "answer": [
            "my friends shopped early they found great deals"
          ],
          "explain": "Plural subject → <em>they</em>."
        },
        {
          "type": "error",
          "prompt": "Fix the substitution.",
          "given": "I tried the blue cap and then the red cap.",
          "answer": [
            "i tried the blue cap and then the red one"
          ],
          "explain": "Substitute with <em>one</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder using substitution.",
          "bank": [
            "She",
            "took",
            "the",
            "cheaper",
            "one"
          ],
          "answer": "She took the cheaper one",
          "explain": "<em>one</em> avoids repeating the noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder using reference.",
          "bank": [
            "It",
            "was",
            "a",
            "great",
            "bargain"
          ],
          "answer": "It was a great bargain",
          "explain": "<em>it</em> refers back to a singular noun."
        },
        {
          "type": "match",
          "prompt": "Match each word to what it does.",
          "pairs": [
            {
              "l": "ones",
              "r": "substitutes a plural noun"
            },
            {
              "l": "it",
              "r": "refers to a singular noun"
            },
            {
              "l": "did",
              "r": "stands in for a past verb"
            }
          ],
          "explain": "Reference and substitution."
        }
      ]
    },
    "t1s5_L6_canAbility": {
      "id": "t1s5_L6_canAbility",
      "code": "CCG",
      "title": "can / can't — Ability & Rules",
      "chapter": "Chapter 2 — Shop Till You Drop!",
      "week": "Unit 2 · Shop Till You Drop! · Unit Overview grammar focus (CCG grammar)",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.P.3.1",
      "source_ccg": "CCG Unit 2 Overview — 'Grammar Focus' lists the modal verb can/can't for ability, permission and rules, named without a per-lesson G-code, so it renders as a 'CCG' pill.",
      "vocabulary": [
        "queue",
        "cashier",
        "exchange",
        "warranty",
        "loyalty",
        "voucher",
        "permit",
        "expire"
      ],
      "explanation": [
        "<p><b>can</b> is a modal verb with several uses. It expresses <b>ability</b> (<i>I <b>can</b> pay by card</i>), <b>permission</b> (<i>You <b>can</b> return it within a week</i>), and <b>possibility</b> (<i>Prices <b>can</b> change at the weekend</i>). After <b>can</b> we always use the <b>base verb</b> with no <i>to</i> and no <i>-s</i>: <i>She can <b>buy</b></i>, never <i>can to buy</i> or <i>can buys</i>.</p>",
        "<p>The negative is <b>cannot</b>, usually contracted to <b>can't</b>, and it shows <b>inability</b> or things that are <b>not allowed</b> (a rule): <i>You <b>can't</b> use this voucher after it expires.</i> Questions invert the subject and <b>can</b>: <i><b>Can</b> I exchange this?</i> Short answers keep the modal: <i>Yes, you <b>can</b> / No, you <b>can't</b></i>. For the past, use <b>could / couldn't</b>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "You can return the item with the receipt."
        },
        {
          "type": "correct",
          "text": "Customers can't use an expired voucher."
        },
        {
          "type": "correct",
          "text": "Can I pay with this loyalty card?"
        },
        {
          "type": "correct",
          "text": "She can speak to the cashier in English."
        },
        {
          "type": "incorrect",
          "text": "He can to exchange the shirt today. (no 'to' after a modal → He can exchange the shirt today.)"
        }
      ],
      "mistakes": [
        "Adding <em>to</em> after the modal: <em>can to pay</em> → <em>can <u>pay</u></em>.",
        "Adding <em>-s</em> to the verb: <em>She can buys.</em> → <em>She can <u>buy</u>.</em>",
        "Writing the negative wrongly: <em>can not</em> as one word <em>cannot</em> → contracted <em><u>can't</u></em>."
      ],
      "traps": [
        "After <em>can/can't</em>, use the base verb (no <em>to</em>, no <em>-s</em>).",
        "<em>can't</em> can mean inability or a rule (not allowed).",
        "In questions, <em>can</em> comes before the subject: <em>Can I…?</em>"
      ],
      "arabicInsight": "<p>الفعل الناقص <b>can</b> يعبّر عن <b>القدرة</b> و<b>الإذن</b> و<b>الإمكان</b>، ويُتبع دائماً بالفعل في <b>صيغته الأساسية</b> دون <i>to</i> ودون إضافة <i>-s</i> (نقول <i>She can buy</i> لا <i>can to buy</i>). أمّا النفي <b>can't (cannot)</b> فيدل على عدم القدرة أو على <b>منعٍ</b> بموجب قاعدة، وفي السؤال يتقدّم <b>can</b> على الفاعل: <i>Can I…?</i>. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct form.",
          "options": [
            "She can to pay now.",
            "She can pay now.",
            "She can pays now.",
            "She can paying now."
          ],
          "answer": 1,
          "explain": "Base verb after a modal."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence states a rule (not allowed)?",
          "options": [
            "You can park here.",
            "You can't park here.",
            "Can you park here?",
            "You could park here."
          ],
          "answer": 1,
          "explain": "<em>can't</em> = not allowed."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct question.",
          "options": [
            "Can I to exchange this?",
            "Can I exchange this?",
            "I can exchange this?",
            "Exchange can I this?"
          ],
          "answer": 1,
          "explain": "Modal before subject, base verb."
        },
        {
          "type": "mcq",
          "prompt": "Choose the past form of ability.",
          "options": [
            "She can found a bargain.",
            "She could find a bargain.",
            "She can find bargain.",
            "She could to find a bargain."
          ],
          "answer": 1,
          "explain": "Past ability → <em>could</em> + base verb."
        },
        {
          "type": "fill",
          "prompt": "Complete with can or can't.",
          "sentence": "Members ____ get a discount; non-members can't.",
          "answers": [
            "can"
          ],
          "explain": "Permission for members → <em>can</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the base verb.",
          "sentence": "You can ____ (use) the voucher today.",
          "answers": [
            "use"
          ],
          "explain": "Base verb after a modal."
        },
        {
          "type": "fill",
          "prompt": "Complete with can't.",
          "sentence": "Sorry, you ____ return food items.",
          "answers": [
            "can't",
            "cannot"
          ],
          "explain": "A shop rule → <em>can't</em>."
        },
        {
          "type": "transform",
          "prompt": "Make it negative: <em>You can use this card here.</em>",
          "answer": [
            "you can't use this card here",
            "you cannot use this card here"
          ],
          "explain": "Negative modal → <em>can't</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a question: <em>I can try the jacket.</em>",
          "answer": [
            "can i try the jacket"
          ],
          "explain": "Modal before subject."
        },
        {
          "type": "transform",
          "prompt": "Make it past: <em>She can read the receipt.</em>",
          "answer": [
            "she could read the receipt"
          ],
          "explain": "Past of <em>can</em> → <em>could</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal.",
          "given": "He can to buys two.",
          "answer": [
            "he can buy two"
          ],
          "explain": "No <em>to</em>, no <em>-s</em> after a modal."
        },
        {
          "type": "error",
          "prompt": "Correct the modal.",
          "given": "Customers cans pay online.",
          "answer": [
            "customers can pay online"
          ],
          "explain": "<em>can</em> has no <em>-s</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "You",
            "can",
            "exchange",
            "it",
            "tomorrow"
          ],
          "answer": "You can exchange it tomorrow",
          "explain": "Modal + base verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a question.",
          "bank": [
            "Can",
            "I",
            "use",
            "this",
            "voucher"
          ],
          "answer": "Can I use this voucher",
          "explain": "Modal before subject."
        },
        {
          "type": "match",
          "prompt": "Match each use of can to its meaning.",
          "pairs": [
            {
              "l": "I can swim.",
              "r": "ability"
            },
            {
              "l": "You can leave.",
              "r": "permission"
            },
            {
              "l": "You can't smoke here.",
              "r": "a rule"
            }
          ],
          "explain": "Uses of can/can't."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct form.",
          "options": [
            "He can buy it.",
            "He can to buy it.",
            "He can buys it.",
            "He can buying it."
          ],
          "answer": 0,
          "explain": "Base verb after a modal."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence expresses ability?",
          "options": [
            "You can't enter.",
            "She can drive a van.",
            "Can I sit here?",
            "You can't be serious."
          ],
          "answer": 1,
          "explain": "Ability → <em>can</em> + base verb."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct question.",
          "options": [
            "Can he return it?",
            "He can return it to?",
            "Can he to return it?",
            "Return he can it?"
          ],
          "answer": 0,
          "explain": "Modal before subject, base verb."
        },
        {
          "type": "mcq",
          "prompt": "Choose the correct negative past.",
          "options": [
            "She can't found it.",
            "She couldn't find it.",
            "She couldn't found it.",
            "She can't to find it."
          ],
          "answer": 1,
          "explain": "Past negative ability → <em>couldn't</em> + base verb."
        },
        {
          "type": "fill",
          "prompt": "Complete with can or can't.",
          "sentence": "You ____ pay by phone here; the reader is broken.",
          "answers": [
            "can't",
            "cannot"
          ],
          "explain": "Inability/rule → <em>can't</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the base verb.",
          "sentence": "Shoppers can ____ (collect) points each visit.",
          "answers": [
            "collect"
          ],
          "explain": "Base verb after a modal."
        },
        {
          "type": "fill",
          "prompt": "Complete with can.",
          "sentence": "Members ____ enter the sale an hour early.",
          "answers": [
            "can"
          ],
          "explain": "Permission → <em>can</em>."
        },
        {
          "type": "transform",
          "prompt": "Make it negative: <em>They can refund the ticket.</em>",
          "answer": [
            "they can't refund the ticket",
            "they cannot refund the ticket"
          ],
          "explain": "Negative modal → <em>can't</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a question: <em>She can join the queue.</em>",
          "answer": [
            "can she join the queue"
          ],
          "explain": "Modal before subject."
        },
        {
          "type": "transform",
          "prompt": "Make it past: <em>He can find the receipt.</em>",
          "answer": [
            "he could find the receipt"
          ],
          "explain": "Past of <em>can</em> → <em>could</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal.",
          "given": "She can to exchanges it.",
          "answer": [
            "she can exchange it"
          ],
          "explain": "No <em>to</em>, no <em>-s</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal.",
          "given": "We cannot to wait long.",
          "answer": [
            "we cannot wait long",
            "we can't wait long"
          ],
          "explain": "No <em>to</em> after <em>cannot</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "Members",
            "can",
            "collect",
            "extra",
            "points"
          ],
          "answer": "Members can collect extra points",
          "explain": "Modal + base verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a question.",
          "bank": [
            "Can",
            "she",
            "return",
            "the",
            "shoes"
          ],
          "answer": "Can she return the shoes",
          "explain": "Modal before subject."
        },
        {
          "type": "match",
          "prompt": "Match each use of can to its meaning.",
          "pairs": [
            {
              "l": "Can you help?",
              "r": "request"
            },
            {
              "l": "Prices can rise.",
              "r": "possibility"
            },
            {
              "l": "You can't refund this.",
              "r": "a rule"
            }
          ],
          "explain": "Uses of can/can't."
        }
      ]
    },
    "t1s5_L7_certainty": {
      "id": "t1s5_L7_certainty",
      "code": "CCG",
      "title": "Certainty, Probability & Doubt",
      "chapter": "Chapter 2 — Shop Till You Drop!",
      "week": "Unit 2 · Shop Till You Drop! · Unit Overview grammar focus (CCG grammar)",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.P.3.2",
      "source_ccg": "CCG Unit 2 Overview — 'Grammar Focus' lists modal verbs of certainty, probability and doubt (deduction), named without a per-lesson G-code, so it renders as a 'CCG' pill.",
      "vocabulary": [
        "genuine",
        "guarantee",
        "probably",
        "definitely",
        "unlikely",
        "estimate",
        "reliable",
        "doubt"
      ],
      "explanation": [
        "<p>We use <b>modal verbs</b> to show how <b>sure</b> we are about something now. For near <b>certainty</b>, use <i><b>must</b></i> (<i>The shop <b>must</b> be open — the lights are on</i>) or, for the negative, <i><b>can't</b></i> (<i>It <b>can't</b> be closed</i>). For <b>probability</b>, use <i><b>should</b></i> (<i>The delivery <b>should</b> arrive today</i>). After all of these, use the <b>base verb</b>: <i>must <b>be</b></i>, <i>should <b>arrive</b></i>.</p>",
        "<p>For <b>possibility</b> or <b>doubt</b> — when you are not sure — use <i><b>may</b></i>, <i><b>might</b></i> or <i><b>could</b></i> (<i>The price <b>might</b> be wrong</i>; <i>It <b>could</b> be a fake</i>). Adverbs add to the meaning: <i><b>definitely</b></i> (sure), <i><b>probably</b></i> (likely), <i><b>possibly</b></i> / <i><b>perhaps</b></i> (not sure). Remember: <i>must</i> for a confident <b>positive</b> guess, but <i>can't</i> (not <i>mustn't</i>) for a confident <b>negative</b> guess.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "This deal must be genuine; the store is well known."
        },
        {
          "type": "correct",
          "text": "The receipt can't be fake — it has a barcode."
        },
        {
          "type": "correct",
          "text": "The sale should start on Friday."
        },
        {
          "type": "correct",
          "text": "The guarantee might cover the screen."
        },
        {
          "type": "incorrect",
          "text": "It mustn't be true; the price is too low. (for a sure negative guess use 'can't' → It can't be true…)"
        }
      ],
      "mistakes": [
        "Using <em>mustn't</em> for a negative guess: <em>It mustn't be real.</em> → <em>It <u>can't</u> be real.</em>",
        "Adding <em>to</em>: <em>It might to rain.</em> → <em>It might <u>rain</u>.</em>",
        "Confusing certainty with doubt: <em>must</em> = sure, <em>might</em> = not sure."
      ],
      "traps": [
        "<em>must</em> = confident positive guess; <em>can't</em> = confident negative guess.",
        "<em>may/might/could</em> show possibility or doubt.",
        "Use the base verb after every modal (no <em>to</em>)."
      ],
      "arabicInsight": "<p>تُستعمل <b>الأفعال الناقصة</b> للتعبير عن درجة <b>اليقين</b> في الحاضر: <i>must</i> للتخمين <b>المؤكَّد المُثبَت</b> و<i>can't</i> للتخمين <b>المؤكَّد المنفي</b>، و<i>should</i> للاحتمال الراجح، و<i>may / might / could</i> للإمكان أو <b>الشكّ</b>. ويُتبع كلٌّ منها بالفعل في صيغته الأساسية. تذكّر أنّنا نستعمل <i>can't</i> لا <i>mustn't</i> للتخمين المنفي المؤكد. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the modal of certainty (positive).",
          "options": [
            "The shop might be open.",
            "The shop must be open — I see staff inside.",
            "The shop can't be open.",
            "The shop should be open."
          ],
          "answer": 1,
          "explain": "Sure positive guess → <em>must</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the modal for a sure negative guess.",
          "options": [
            "It mustn't be real.",
            "It can't be real at that price.",
            "It may not be real.",
            "It shouldn't be real."
          ],
          "answer": 1,
          "explain": "Sure negative guess → <em>can't</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the modal of probability.",
          "options": [
            "The parcel must arrive.",
            "The parcel can't arrive.",
            "The parcel should arrive by noon.",
            "The parcel might arrive."
          ],
          "answer": 2,
          "explain": "Likely → <em>should</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the modal of doubt.",
          "options": [
            "The label must be wrong.",
            "The label might be wrong.",
            "The label can't be wrong.",
            "The label should be wrong."
          ],
          "answer": 1,
          "explain": "Not sure → <em>might</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with must or can't.",
          "sentence": "The store is full of lights; it ____ be open.",
          "answers": [
            "must"
          ],
          "explain": "Sure positive → <em>must</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the base verb.",
          "sentence": "The offer should ____ (last) until Sunday.",
          "answers": [
            "last"
          ],
          "explain": "Base verb after a modal."
        },
        {
          "type": "fill",
          "prompt": "Complete with might.",
          "sentence": "The size ____ be wrong, so check the label.",
          "answers": [
            "might"
          ],
          "explain": "Doubt → <em>might</em>."
        },
        {
          "type": "transform",
          "prompt": "Show a sure positive guess: <em>The deal ___ genuine. (you are sure)</em>",
          "answer": [
            "the deal must be genuine"
          ],
          "explain": "Sure positive → <em>must be</em>."
        },
        {
          "type": "transform",
          "prompt": "Show a sure negative guess: <em>This ___ a real diamond. (you are sure it isn't)</em>",
          "answer": [
            "this can't be a real diamond"
          ],
          "explain": "Sure negative → <em>can't be</em>."
        },
        {
          "type": "transform",
          "prompt": "Show doubt: <em>The price ___ change. (you are unsure)</em>",
          "answer": [
            "the price might change",
            "the price may change",
            "the price could change"
          ],
          "explain": "Doubt → <em>may/might/could</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal of deduction.",
          "given": "It mustn't be true; nobody sells that cheap.",
          "answer": [
            "it can't be true nobody sells that cheap"
          ],
          "explain": "Sure negative → <em>can't</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal.",
          "given": "The warranty might to cover it.",
          "answer": [
            "the warranty might cover it"
          ],
          "explain": "No <em>to</em> after a modal."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "The",
            "sale",
            "should",
            "start",
            "soon"
          ],
          "answer": "The sale should start soon",
          "explain": "Probability → <em>should</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "It",
            "must",
            "be",
            "a",
            "bargain"
          ],
          "answer": "It must be a bargain",
          "explain": "Certainty → <em>must</em>."
        },
        {
          "type": "match",
          "prompt": "Match each modal to its degree of certainty.",
          "pairs": [
            {
              "l": "must",
              "r": "almost sure (positive)"
            },
            {
              "l": "can't",
              "r": "almost sure (negative)"
            },
            {
              "l": "might",
              "r": "not sure"
            }
          ],
          "explain": "Certainty, probability, doubt."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the modal of certainty (positive).",
          "options": [
            "He might own the shop.",
            "He must own the shop — his name is on it.",
            "He can't own the shop.",
            "He should own the shop."
          ],
          "answer": 1,
          "explain": "Sure positive guess → <em>must</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the modal for a sure negative guess.",
          "options": [
            "That price mustn't be right.",
            "That price can't be right.",
            "That price may be right.",
            "That price should be right."
          ],
          "answer": 1,
          "explain": "Sure negative guess → <em>can't</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the modal of probability.",
          "options": [
            "The refund must come today.",
            "The refund should come today.",
            "The refund can't come today.",
            "The refund might come today."
          ],
          "answer": 1,
          "explain": "Likely → <em>should</em>."
        },
        {
          "type": "mcq",
          "prompt": "Choose the modal of doubt.",
          "options": [
            "The tag must be old.",
            "The tag can't be old.",
            "The tag could be old.",
            "The tag should be old."
          ],
          "answer": 2,
          "explain": "Not sure → <em>could</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with must or can't.",
          "sentence": "She knows every brand; she ____ work in fashion.",
          "answers": [
            "must"
          ],
          "explain": "Sure positive → <em>must</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the base verb.",
          "sentence": "The delivery should ____ (reach) you by Tuesday.",
          "answers": [
            "reach"
          ],
          "explain": "Base verb after a modal."
        },
        {
          "type": "fill",
          "prompt": "Complete with may.",
          "sentence": "The colour ____ differ from the photo.",
          "answers": [
            "may",
            "might",
            "could"
          ],
          "explain": "Doubt → <em>may/might/could</em>."
        },
        {
          "type": "transform",
          "prompt": "Show a sure positive guess: <em>She ___ the manager. (you are sure)</em>",
          "answer": [
            "she must be the manager"
          ],
          "explain": "Sure positive → <em>must be</em>."
        },
        {
          "type": "transform",
          "prompt": "Show a sure negative guess: <em>That ___ the right size. (you are sure it isn't)</em>",
          "answer": [
            "that can't be the right size"
          ],
          "explain": "Sure negative → <em>can't be</em>."
        },
        {
          "type": "transform",
          "prompt": "Show doubt: <em>The shop ___ closed early. (you are unsure)</em>",
          "answer": [
            "the shop might have closed early",
            "the shop may have closed early",
            "the shop might be closed early",
            "the shop could be closed early"
          ],
          "explain": "Doubt → <em>may/might/could</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal of deduction.",
          "given": "She mustn't be the owner; she's too young.",
          "answer": [
            "she can't be the owner she's too young"
          ],
          "explain": "Sure negative → <em>can't</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal.",
          "given": "The card may to expire soon.",
          "answer": [
            "the card may expire soon"
          ],
          "explain": "No <em>to</em> after a modal."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "The",
            "offer",
            "might",
            "end",
            "tonight"
          ],
          "answer": "The offer might end tonight",
          "explain": "Doubt → <em>might</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a sentence.",
          "bank": [
            "This",
            "can't",
            "be",
            "the",
            "price"
          ],
          "answer": "This can't be the price",
          "explain": "Sure negative → <em>can't</em>."
        },
        {
          "type": "match",
          "prompt": "Match each modal to its degree of certainty.",
          "pairs": [
            {
              "l": "should",
              "r": "probable"
            },
            {
              "l": "may",
              "r": "possible / unsure"
            },
            {
              "l": "must",
              "r": "almost sure (positive)"
            }
          ],
          "explain": "Certainty, probability, doubt."
        }
      ]
    },
    "t1s5_L8_transitions": {
      "id": "t1s5_L8_transitions",
      "code": "CCG",
      "title": "Transition Words: Cause & Effect",
      "chapter": "Chapter 2 — Shop Till You Drop!",
      "week": "Unit 2 · Shop Till You Drop! · Unit Overview grammar focus (CCG grammar)",
      "cefr": "B1.1 (Stage 5 · ENG.05)",
      "moeSlo": "ENG.05.S.W.2.1",
      "source_ccg": "CCG Unit 2 Overview — 'Grammar Focus' lists transition words / linkers showing cause and effect, named without a per-lesson G-code, so it renders as a 'CCG' pill.",
      "vocabulary": [
        "demand",
        "supply",
        "consequence",
        "therefore",
        "afford",
        "popular",
        "shortage",
        "result"
      ],
      "explanation": [
        "<p><b>Cause-and-effect</b> linkers join a reason to its result. To give a <b>cause</b>, use <i><b>because</b></i>, <i><b>since</b></i> or <i><b>as</b></i> + a clause (<i>Prices rose <b>because</b> demand was high</i>), or <i><b>because of</b></i> / <i><b>due to</b></i> + a noun (<i>The shop closed <b>because of</b> the storm</i>). <i>because</i> answers the question <i>why?</i>.</p>",
        "<p>To give an <b>effect/result</b>, use <i><b>so</b></i> (informal: <i>It was cheap, <b>so</b> I bought two</i>), or the more formal linkers <i><b>therefore</b></i>, <i><b>as a result</b></i> and <i><b>consequently</b></i>, which usually start a new sentence and take a comma: <i>Demand fell. <b>Therefore</b>, prices dropped.</i> Don't confuse the two directions: <i>because</i> introduces the <b>cause</b>, while <i>so / therefore</i> introduce the <b>result</b>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "The jacket sold out because it was so cheap."
        },
        {
          "type": "correct",
          "text": "There was a shortage, so prices went up."
        },
        {
          "type": "correct",
          "text": "Demand was high; therefore, the shop ordered more."
        },
        {
          "type": "correct",
          "text": "The store closed early due to the bad weather."
        },
        {
          "type": "incorrect",
          "text": "It was expensive, because I didn't buy it. (use 'so' for a result → It was expensive, so I didn't buy it.)"
        }
      ],
      "mistakes": [
        "Mixing cause and result: <em>It rained, because the match stopped.</em> → <em>It rained, <u>so</u> the match stopped.</em>",
        "Using <em>because of</em> before a clause: <em>because of it was cheap</em> → <em><u>because</u> it was cheap</em>.",
        "No comma with <em>therefore</em> at the start: <em>Therefore prices fell</em> → <em>Therefore<u>,</u> prices fell.</em>"
      ],
      "traps": [
        "<em>because/since/as</em> introduce the cause (the reason why).",
        "<em>so/therefore/as a result</em> introduce the effect (the result).",
        "Use <em>because of / due to</em> + a noun; <em>because</em> + a full clause."
      ],
      "arabicInsight": "<p>تربط أدوات <b>السبب والنتيجة</b> بين العلّة ونتيجتها. للتعبير عن <b>السبب</b> نستعمل <i>because / since / as</i> مع جملة، أو <i>because of / due to</i> مع اسم. وللتعبير عن <b>النتيجة</b> نستعمل <i>so</i> (غير رسمية) أو <i>therefore / as a result / consequently</i> (أكثر رسمية وتُتبع غالباً بفاصلة). الخطأ الشائع هو الخلط بين اتجاه السبب واتجاه النتيجة. (درس من المنهج — CCG).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the cause linker.",
          "options": [
            "The mall was busy, so we left.",
            "We left because the mall was busy.",
            "We left; therefore the mall was busy.",
            "As a result, the mall was busy."
          ],
          "answer": 1,
          "explain": "<em>because</em> introduces the cause."
        },
        {
          "type": "mcq",
          "prompt": "Choose the result linker.",
          "options": [
            "Prices fell because demand dropped.",
            "Since demand dropped, prices stayed.",
            "Demand dropped, so prices fell.",
            "Demand dropped because prices fell."
          ],
          "answer": 2,
          "explain": "<em>so</em> introduces the result."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'The shop shut early ____ the storm.'",
          "options": [
            "because",
            "so",
            "due to",
            "therefore"
          ],
          "answer": 2,
          "explain": "<em>due to</em> + a noun."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence is punctuated correctly?",
          "options": [
            "Therefore prices rose.",
            "Therefore, prices rose.",
            "Therefore; prices rose.",
            "Therefore: prices rose"
          ],
          "answer": 1,
          "explain": "<em>therefore</em> at the start takes a comma."
        },
        {
          "type": "fill",
          "prompt": "Complete with a cause linker (one word).",
          "sentence": "Sales increased ____ the discount was huge.",
          "answers": [
            "because",
            "since",
            "as"
          ],
          "explain": "Cause + clause → <em>because/since/as</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a result linker (one word).",
          "sentence": "The bag was faulty, ____ I returned it.",
          "answers": [
            "so"
          ],
          "explain": "Result → <em>so</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with because of or due to.",
          "sentence": "The delay was ____ heavy traffic.",
          "answers": [
            "because of",
            "due to"
          ],
          "explain": "Cause + noun phrase."
        },
        {
          "type": "transform",
          "prompt": "Join with a cause linker: <em>The shop was empty. The prices were high.</em>",
          "answer": [
            "the shop was empty because the prices were high"
          ],
          "explain": "Cause → <em>because</em>."
        },
        {
          "type": "transform",
          "prompt": "Join with a result linker: <em>The sale ended. We paid full price.</em>",
          "answer": [
            "the sale ended so we paid full price"
          ],
          "explain": "Result → <em>so</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite formally: <em>Demand was high, so we ordered more.</em>",
          "answer": [
            "demand was high therefore we ordered more",
            "demand was high therefore, we ordered more"
          ],
          "explain": "Formal result → <em>therefore</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the linker.",
          "given": "It was raining, because we stayed home.",
          "answer": [
            "it was raining so we stayed home"
          ],
          "explain": "Result direction → <em>so</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the linker.",
          "given": "The store closed because of it was late.",
          "answer": [
            "the store closed because it was late"
          ],
          "explain": "<em>because</em> + a clause."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a cause sentence.",
          "bank": [
            "We",
            "waited",
            "because",
            "the",
            "queue",
            "was",
            "long"
          ],
          "answer": "We waited because the queue was long",
          "explain": "Cause → <em>because</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a result sentence.",
          "bank": [
            "It",
            "was",
            "cheap",
            "so",
            "I",
            "bought",
            "it"
          ],
          "answer": "It was cheap so I bought it",
          "explain": "Result → <em>so</em>."
        },
        {
          "type": "match",
          "prompt": "Match each linker to what it shows.",
          "pairs": [
            {
              "l": "because",
              "r": "cause"
            },
            {
              "l": "so",
              "r": "result"
            },
            {
              "l": "due to",
              "r": "cause + noun"
            }
          ],
          "explain": "Cause and effect linkers."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the cause linker.",
          "options": [
            "The line was long, so we waited.",
            "We waited since the line was long.",
            "We waited; therefore the line was long.",
            "As a result, the line was long."
          ],
          "answer": 1,
          "explain": "<em>since</em> introduces the cause."
        },
        {
          "type": "mcq",
          "prompt": "Choose the result linker.",
          "options": [
            "The item broke because it was cheap.",
            "As it was cheap, the item lasted.",
            "The item was cheap, so it broke.",
            "The item broke because of the price."
          ],
          "answer": 2,
          "explain": "<em>so</em> introduces the result."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'The event was cancelled ____ low ticket sales.'",
          "options": [
            "because",
            "so",
            "therefore",
            "due to"
          ],
          "answer": 3,
          "explain": "<em>due to</em> + a noun."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence is punctuated correctly?",
          "options": [
            "As a result prices dropped.",
            "As a result, prices dropped.",
            "As a result; prices dropped.",
            "As, a result prices dropped."
          ],
          "answer": 1,
          "explain": "<em>as a result</em> at the start takes a comma."
        },
        {
          "type": "fill",
          "prompt": "Complete with a cause linker (one word).",
          "sentence": "We changed shops ____ the service was poor.",
          "answers": [
            "because",
            "since",
            "as"
          ],
          "explain": "Cause + clause → <em>because/since/as</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a result linker (one word).",
          "sentence": "The price was unfair, ____ we complained.",
          "answers": [
            "so"
          ],
          "explain": "Result → <em>so</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with because of or due to.",
          "sentence": "The shortage was ____ a supply problem.",
          "answers": [
            "because of",
            "due to"
          ],
          "explain": "Cause + noun phrase."
        },
        {
          "type": "transform",
          "prompt": "Join with a cause linker: <em>I saved money. I used a voucher.</em>",
          "answer": [
            "i saved money because i used a voucher"
          ],
          "explain": "Cause → <em>because</em>."
        },
        {
          "type": "transform",
          "prompt": "Join with a result linker: <em>The model was old. They cut the price.</em>",
          "answer": [
            "the model was old so they cut the price"
          ],
          "explain": "Result → <em>so</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite formally: <em>Sales fell, so the branch closed.</em>",
          "answer": [
            "sales fell therefore the branch closed",
            "sales fell therefore, the branch closed"
          ],
          "explain": "Formal result → <em>therefore</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the linker.",
          "given": "The shelf was empty, because we ordered more.",
          "answer": [
            "the shelf was empty so we ordered more"
          ],
          "explain": "Result direction → <em>so</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the linker.",
          "given": "Prices rose due to demand was high.",
          "answer": [
            "prices rose because demand was high"
          ],
          "explain": "<em>because</em> + a clause (not <em>due to</em>)."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a cause sentence.",
          "bank": [
            "They",
            "complained",
            "because",
            "the",
            "refund",
            "was",
            "slow"
          ],
          "answer": "They complained because the refund was slow",
          "explain": "Cause → <em>because</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a result sentence.",
          "bank": [
            "Stock",
            "ran",
            "out",
            "so",
            "we",
            "left"
          ],
          "answer": "Stock ran out so we left",
          "explain": "Result → <em>so</em>."
        },
        {
          "type": "match",
          "prompt": "Match each linker to what it shows.",
          "pairs": [
            {
              "l": "since",
              "r": "cause"
            },
            {
              "l": "therefore",
              "r": "result"
            },
            {
              "l": "because of",
              "r": "cause + noun"
            }
          ],
          "explain": "Cause and effect linkers."
        }
      ]
    }
  }
}
);
