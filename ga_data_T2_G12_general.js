/* ===== Grammar Academy DATA MODULE (authored from official CCG, validated) ===== */
/* Term 2 · AY 2025-26 · Grade 12 General (ENG.08) · Mourad Mekki Teacher Toolkit */
/* Chapter 3 'The Way We Live' (6 lessons, all CCG) + Chapter 4 'World Village' (G.1.4 CCG + 3 teacher extensions). 10 lessons / 300 questions. */
/* Ch3 codes: G.11.1, G.11.2, G.11.3, G.2.5, G.12.4, G.1.3. Ch4: G.1.4 + Extension(compound/order/gradable adjectives). Codes/weeks/vocab from the official CCG. */
GA.register(
{
  "term": "T2-2526",
  "termLabel": "Term 2 · AY 2025–26",
  "grade": "12",
  "stream": "general",
  "streamLabel": "Grade 12 General Pathway",
  "cefr": "B2.1 (Stage 8 · ENG.08)",
  "source": "CCG Grade 12 General — Term 2 · Chapters 3 (The Way We Live) & 4 (World Village). Ch3 + G.1.4 are CCG; Ch4 also includes three teacher-extension adjective lessons (marked 'Extension').",
  "chapters": [
    {
      "id": "ch3",
      "title": "Chapter 3 — The Way We Live",
      "lessons": [
        "t2s8_L1_phrasalNonSep",
        "t2s8_L2_phrasalSep",
        "t2s8_L3_phrasalThreePart",
        "t2s8_L4_adverbialLinkers",
        "t2s8_L5_dependentPrep",
        "t2s8_L6_superlatives"
      ]
    },
    {
      "id": "ch4",
      "title": "Chapter 4 — World Village",
      "lessons": [
        "t2s8_L7_participleAdj",
        "t2s8_L8_compoundAdj",
        "t2s8_L9_adjOrder",
        "t2s8_L10_gradableAdj"
      ]
    }
  ],
  "lessons": {
    "t2s8_L1_phrasalNonSep": {
      "id": "t2s8_L1_phrasalNonSep",
      "code": "G.11.1",
      "title": "Phrasal Verbs: Non-Separable",
      "chapter": "Chapter 3 — The Way We Live",
      "week": "Week 1 · Helping Out",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.L.S.2.1",
      "source_ccg": "CCG Grade 12 General / Grade 11 Advanced — Term 2 · Chapter 3",
      "vocabulary": [
        "remarkable",
        "from time to time",
        "tough",
        "widow",
        "favor",
        "borrow",
        "lend",
        "mind"
      ],
      "explanation": [
        "<p>A <b>non-separable phrasal verb</b> is a verb + particle whose object <u>cannot</u> be split apart: the object always comes <b>after the whole verb</b>. <i>She looks after her elderly neighbour.</i> You can never say <i>looks her neighbour after</i>.</p>",
        "<p>This rule applies to <b>pronouns too</b>: <i>She looks after <u>her</u></i>, never <i>looks her after</i>. Common non-separable verbs include <i>look after</i>, <i>get over</i>, <i>come across</i>, <i>run into</i>, <i>look into</i> and <i>deal with</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "Neighbours look after the widow from time to time."
        },
        {
          "type": "correct",
          "text": "I ran into an old friend while helping out at the centre."
        },
        {
          "type": "correct",
          "text": "It was tough, but she got over the loss."
        },
        {
          "type": "correct",
          "text": "We came across a remarkable charity online."
        },
        {
          "type": "incorrect",
          "text": "She looks her neighbour after every weekend. (object splits the verb)"
        }
      ],
      "mistakes": [
        "Splitting the verb: <em>look the children after</em> instead of <em>look after the children</em>.",
        "Putting a pronoun in the middle: <em>look them after</em> instead of <em>look after them</em>.",
        "Dropping the particle: <em>I came a great idea across</em> instead of <em>came across a great idea</em>."
      ],
      "traps": [
        "Even short pronoun objects stay <em>after</em> a non-separable verb: <em>deal with it</em>, never <em>deal it with</em>.",
        "<em>look after</em> (care for) is different from <em>look for</em> (search) and <em>look into</em> (investigate) — the particle changes the meaning.",
        "If you are unsure, test it: if the object cannot move to the middle, the verb is non-separable."
      ],
      "arabicInsight": "<p>الفعل المركّب <b>غير القابل للفصل</b> لا يُدخَل المفعول في وسطه؛ يأتي المفعول دائمًا <b>بعد الفعل كاملًا</b>، حتى لو كان ضميرًا: <i>look after them</i> وليس <i>look them after</i>. من أمثلته: look after, get over, run into, deal with.</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct non-separable phrasal verb.",
          "options": [
            "She looks her father after.",
            "She looks after her father.",
            "She looks after he.",
            "She after looks her father."
          ],
          "answer": 1,
          "explain": "Object after the whole verb: <em>look after her father</em>."
        },
        {
          "type": "mcq",
          "prompt": "Where does the pronoun go?",
          "options": [
            "Please deal it with.",
            "Please deal with it.",
            "Please with deal it.",
            "Please deal it with now."
          ],
          "answer": 1,
          "explain": "Non-separable: <em>deal with it</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the verb meaning 'to recover from'.",
          "options": [
            "look after",
            "get over",
            "run into",
            "look into"
          ],
          "answer": 1,
          "explain": "<em>get over</em> = recover from."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'I ____ an old neighbour at the market.'",
          "options": [
            "ran into",
            "ran in to",
            "ran into to",
            "into ran"
          ],
          "answer": 0,
          "explain": "<em>run into</em> = meet by chance."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing particle.",
          "sentence": "Volunteers look ____ the elderly during winter.",
          "answers": [
            "after"
          ],
          "explain": "<em>look after</em> = care for."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "The committee will look ____ the complaint next week.",
          "answers": [
            "into"
          ],
          "explain": "<em>look into</em> = investigate."
        },
        {
          "type": "fill",
          "prompt": "Complete the pronoun placement.",
          "sentence": "The problem is serious, so we must deal ____ it now.",
          "answers": [
            "with"
          ],
          "explain": "<em>deal with it</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with the pronoun correctly placed: <em>She looks after the children.</em> Use <em>them</em>.",
          "answer": [
            "she looks after them"
          ],
          "explain": "Pronoun stays after the verb."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>got over</em>: <em>He recovered from the difficult news.</em>",
          "answer": [
            "he got over the difficult news"
          ],
          "explain": "<em>recover from</em> → <em>get over</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>came across</em>: <em>I found a remarkable article by chance.</em>",
          "answer": [
            "i came across a remarkable article"
          ],
          "explain": "<em>find by chance</em> → <em>come across</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the word order.",
          "given": "Could you look the baby after for an hour?",
          "answer": [
            "could you look after the baby for an hour"
          ],
          "explain": "Non-separable: object after the verb."
        },
        {
          "type": "error",
          "prompt": "Correct the pronoun placement.",
          "given": "The issue is tough, but we'll deal it with.",
          "answer": [
            "the issue is tough but we'll deal with it"
          ],
          "explain": "<em>deal with it</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Neighbours",
            "look",
            "after",
            "the",
            "widow",
            "every",
            "week"
          ],
          "answer": "Neighbours look after the widow every week",
          "explain": "<em>look after</em> + object."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "We",
            "came",
            "across",
            "a",
            "remarkable",
            "charity",
            "online"
          ],
          "answer": "We came across a remarkable charity online",
          "explain": "<em>come across</em> = find by chance."
        },
        {
          "type": "match",
          "prompt": "Match each non-separable verb to its meaning.",
          "pairs": [
            {
              "l": "look after",
              "r": "take care of"
            },
            {
              "l": "get over",
              "r": "recover from"
            },
            {
              "l": "look into",
              "r": "investigate"
            }
          ],
          "explain": "Each verb keeps its object after the particle."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct non-separable phrasal verb.",
          "options": [
            "He looks his mother after.",
            "He looks after his mother.",
            "He looks after she.",
            "He after looks his mother."
          ],
          "answer": 1,
          "explain": "Object after the whole verb."
        },
        {
          "type": "mcq",
          "prompt": "Where does the pronoun go?",
          "options": [
            "I'll look it into.",
            "I'll look into it.",
            "I'll into look it.",
            "I'll look it into today."
          ],
          "answer": 1,
          "explain": "<em>look into it</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the verb meaning 'to meet by chance'.",
          "options": [
            "look after",
            "get over",
            "run into",
            "deal with"
          ],
          "answer": 2,
          "explain": "<em>run into</em> = meet unexpectedly."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'They ____ a serious issue at the shelter.'",
          "options": [
            "looked into",
            "looked in to",
            "into looked",
            "looked it into"
          ],
          "answer": 0,
          "explain": "<em>look into</em> = investigate."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing particle.",
          "sentence": "A kind family looks ____ the orphaned child.",
          "answers": [
            "after"
          ],
          "explain": "<em>look after</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "It took months to get ____ the loss.",
          "answers": [
            "over"
          ],
          "explain": "<em>get over</em> = recover from."
        },
        {
          "type": "fill",
          "prompt": "Complete the pronoun placement.",
          "sentence": "The favour was tough, but she dealt ____ it calmly.",
          "answers": [
            "with"
          ],
          "explain": "<em>deal with it</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with the pronoun correctly placed: <em>We look after the garden.</em> Use <em>it</em>.",
          "answer": [
            "we look after it"
          ],
          "explain": "Pronoun after the verb."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>ran into</em>: <em>I met my old teacher unexpectedly.</em>",
          "answer": [
            "i ran into my old teacher"
          ],
          "explain": "<em>meet by chance</em> → <em>run into</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>looked into</em>: <em>The school investigated the matter.</em>",
          "answer": [
            "the school looked into the matter"
          ],
          "explain": "<em>investigate</em> → <em>look into</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the word order.",
          "given": "Please look the patient after tonight.",
          "answer": [
            "please look after the patient tonight"
          ],
          "explain": "Object after the verb."
        },
        {
          "type": "error",
          "prompt": "Correct the pronoun placement.",
          "given": "The news was hard, but he got over it slowly — he got it over.",
          "answer": [
            "the news was hard but he got over it slowly"
          ],
          "explain": "<em>get over it</em>, not <em>get it over</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "I",
            "ran",
            "into",
            "a",
            "kind",
            "stranger",
            "downtown"
          ],
          "answer": "I ran into a kind stranger downtown",
          "explain": "<em>run into</em> + object."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "They",
            "will",
            "look",
            "into",
            "the",
            "matter",
            "carefully"
          ],
          "answer": "They will look into the matter carefully",
          "explain": "<em>look into</em> = investigate."
        },
        {
          "type": "match",
          "prompt": "Match each non-separable verb to a natural ending.",
          "pairs": [
            {
              "l": "I'll deal with",
              "r": "the problem myself."
            },
            {
              "l": "She looks after",
              "r": "her younger brother."
            },
            {
              "l": "We came across",
              "r": "a useful website."
            }
          ],
          "explain": "Object follows the particle in each."
        }
      ]
    },
    "t2s8_L2_phrasalSep": {
      "id": "t2s8_L2_phrasalSep",
      "code": "G.11.2",
      "title": "Phrasal Verbs: Separable",
      "chapter": "Chapter 3 — The Way We Live",
      "week": "Week 1 · Helping Out",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.S.IP.4.1",
      "source_ccg": "CCG Grade 12 General / Grade 11 Advanced — Term 2 · Chapter 3",
      "vocabulary": [
        "favor",
        "give a hand",
        "borrow",
        "lend",
        "mind",
        "remarkable",
        "tough",
        "widow"
      ],
      "explanation": [
        "<p>A <b>separable phrasal verb</b> lets the object sit in <u>two</u> places: after the whole verb, or <b>between the verb and the particle</b>. <i>Turn off the light</i> = <i>Turn the light off</i>. Common ones: <i>turn off, put on, give back, pick up, throw away, fill in, hand in</i>.</p>",
        "<p>There is one firm rule: when the object is a <b>pronoun</b>, it <u>must</u> go in the middle. <i>Turn <u>it</u> off</i> is correct; <i>turn off it</i> is wrong.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "Could you give back the book? = Could you give the book back?"
        },
        {
          "type": "correct",
          "text": "She filled in the form to volunteer."
        },
        {
          "type": "correct",
          "text": "Please pick it up before you leave. (pronoun in the middle)"
        },
        {
          "type": "correct",
          "text": "They handed the donations in on time."
        },
        {
          "type": "incorrect",
          "text": "Turn off it before you go. (pronoun after the particle)"
        }
      ],
      "mistakes": [
        "Putting a pronoun after the particle: <em>give back it</em> instead of <em>give <u>it</u> back</em>.",
        "Believing the object can never move — with separable verbs it can: <em>fill the form in</em> is fine.",
        "Confusing a separable verb with a non-separable one (you cannot split <em>look after</em>)."
      ],
      "traps": [
        "A pronoun object <em>must</em> separate the verb: <em>throw it away</em>, never <em>throw away it</em>.",
        "A noun object may go either side: <em>hand in the form</em> or <em>hand the form in</em>.",
        "If a long phrase is the object, keep it after the particle for clarity: <em>fill in the registration form</em>."
      ],
      "arabicInsight": "<p>الفعل المركّب <b>القابل للفصل</b> يسمح للمفعول أن يأتي بعد الفعل أو <b>بين الفعل والحرف</b>: <i>turn off the light = turn the light off</i>. لكن إذا كان المفعول <b>ضميرًا</b> فيجب وضعه في الوسط: <i>turn it off</i> وليس <i>turn off it</i>.</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Which placement is correct for a pronoun?",
          "options": [
            "Give back it.",
            "Give it back.",
            "Back give it.",
            "Give it back it."
          ],
          "answer": 1,
          "explain": "Pronoun goes in the middle: <em>give it back</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence is also correct?",
          "options": [
            "Turn the radio off.",
            "Turn off radio the.",
            "Off turn the radio.",
            "Turn the off radio."
          ],
          "answer": 0,
          "explain": "Noun object may go in the middle."
        },
        {
          "type": "mcq",
          "prompt": "Pick the verb meaning 'to submit'.",
          "options": [
            "pick up",
            "hand in",
            "give a hand",
            "turn on"
          ],
          "answer": 1,
          "explain": "<em>hand in</em> = submit."
        },
        {
          "type": "mcq",
          "prompt": "Complete with a pronoun in the right place: 'Here's the pen — please give ____ back.'",
          "options": [
            "back it",
            "it back",
            "it back it",
            "back"
          ],
          "answer": 1,
          "explain": "<em>give it back</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing particle.",
          "sentence": "Please fill ____ this volunteer form.",
          "answers": [
            "in"
          ],
          "explain": "<em>fill in</em> = complete a form."
        },
        {
          "type": "fill",
          "prompt": "Complete the pronoun placement.",
          "sentence": "The bag is heavy — could you pick ____ up?",
          "answers": [
            "it"
          ],
          "explain": "Pronoun in the middle: <em>pick it up</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "Don't throw ____ the old clothes; donate them.",
          "answers": [
            "away"
          ],
          "explain": "<em>throw away</em> = discard."
        },
        {
          "type": "transform",
          "prompt": "Move the object to the middle: <em>She handed in the form.</em>",
          "answer": [
            "she handed the form in"
          ],
          "explain": "Noun object can move to the middle."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with the pronoun in the correct place: <em>Turn off the lights.</em> Use <em>them</em>.",
          "answer": [
            "turn them off"
          ],
          "explain": "Pronoun must split the verb."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>give back</em> with a pronoun: <em>Return the money to her.</em>",
          "answer": [
            "give it back to her",
            "give her the money back"
          ],
          "explain": "<em>give it back</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the pronoun placement.",
          "given": "Please pick up it from the floor.",
          "answer": [
            "please pick it up from the floor"
          ],
          "explain": "Pronoun in the middle: <em>pick it up</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the pronoun placement.",
          "given": "Throw away them, they're broken.",
          "answer": [
            "throw them away they're broken"
          ],
          "explain": "<em>throw them away</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Could",
            "you",
            "give",
            "the",
            "book",
            "back",
            "today"
          ],
          "answer": "Could you give the book back today",
          "explain": "Noun object in the middle is fine."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "filled",
            "the",
            "form",
            "in",
            "carefully"
          ],
          "answer": "She filled the form in carefully",
          "explain": "Separable: object in the middle."
        },
        {
          "type": "match",
          "prompt": "Match each separable verb to its meaning.",
          "pairs": [
            {
              "l": "hand in",
              "r": "submit"
            },
            {
              "l": "throw away",
              "r": "discard"
            },
            {
              "l": "fill in",
              "r": "complete a form"
            }
          ],
          "explain": "Each allows the noun object on either side."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Which placement is correct for a pronoun?",
          "options": [
            "Throw away it.",
            "Throw it away.",
            "Away throw it.",
            "Throw it away it."
          ],
          "answer": 1,
          "explain": "<em>throw it away</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence is also correct?",
          "options": [
            "Pick the litter up.",
            "Up pick the litter.",
            "Pick up litter the.",
            "Pick the up litter."
          ],
          "answer": 0,
          "explain": "Noun object may sit in the middle."
        },
        {
          "type": "mcq",
          "prompt": "Pick the verb meaning 'to return something'.",
          "options": [
            "fill in",
            "give back",
            "look after",
            "run into"
          ],
          "answer": 1,
          "explain": "<em>give back</em> = return."
        },
        {
          "type": "mcq",
          "prompt": "Complete with a pronoun in the right place: 'The form is ready — please hand ____ in.'",
          "options": [
            "in it",
            "it in",
            "it in it",
            "in"
          ],
          "answer": 1,
          "explain": "<em>hand it in</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing particle.",
          "sentence": "Could you turn ____ the heater? It's cold.",
          "answers": [
            "on"
          ],
          "explain": "<em>turn on</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the pronoun placement.",
          "sentence": "The report is done — submit ____ today by handing it in.",
          "answers": [
            "it"
          ],
          "explain": "Pronoun in the middle."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "Please pick ____ the books before class.",
          "answers": [
            "up"
          ],
          "explain": "<em>pick up</em>."
        },
        {
          "type": "transform",
          "prompt": "Move the object to the middle: <em>He gave back the keys.</em>",
          "answer": [
            "he gave the keys back"
          ],
          "explain": "Noun object can move."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with the pronoun in the correct place: <em>Turn on the projector.</em> Use <em>it</em>.",
          "answer": [
            "turn it on"
          ],
          "explain": "Pronoun must split the verb."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>hand in</em> with a pronoun: <em>Submit the essay.</em> Use <em>it</em>.",
          "answer": [
            "hand it in"
          ],
          "explain": "<em>hand it in</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the pronoun placement.",
          "given": "Please give back it tomorrow.",
          "answer": [
            "please give it back tomorrow"
          ],
          "explain": "<em>give it back</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the pronoun placement.",
          "given": "Turn off it when you leave.",
          "answer": [
            "turn it off when you leave"
          ],
          "explain": "<em>turn it off</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "handed",
            "the",
            "donations",
            "in",
            "early"
          ],
          "answer": "She handed the donations in early",
          "explain": "Noun object in the middle."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Please",
            "pick",
            "it",
            "up",
            "before",
            "noon"
          ],
          "answer": "Please pick it up before noon",
          "explain": "Pronoun in the middle."
        },
        {
          "type": "match",
          "prompt": "Match each separable verb to a natural ending.",
          "pairs": [
            {
              "l": "Please hand",
              "r": "the form in by Friday."
            },
            {
              "l": "Could you turn",
              "r": "the lights off, please."
            },
            {
              "l": "Don't throw",
              "r": "the bottles away."
            }
          ],
          "explain": "Noun object can sit before the particle."
        }
      ]
    },
    "t2s8_L3_phrasalThreePart": {
      "id": "t2s8_L3_phrasalThreePart",
      "code": "G.11.3",
      "title": "Phrasal Verbs: Three-Part",
      "chapter": "Chapter 3 — The Way We Live",
      "week": "Week 1 · Helping Out",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.S.F.1.1",
      "source_ccg": "CCG Grade 12 General / Grade 11 Advanced — Term 2 · Chapter 3",
      "vocabulary": [
        "get to know",
        "stay in touch",
        "catch up on",
        "get on with",
        "favor",
        "mind",
        "tough",
        "remarkable"
      ],
      "explanation": [
        "<p>A <b>three-part phrasal verb</b> is verb + adverb + preposition acting as one unit: <i>look forward to</i>, <i>get on with</i>, <i>catch up on</i>, <i>run out of</i>, <i>put up with</i>. The meaning is idiomatic and usually cannot be guessed word by word.</p>",
        "<p>These verbs are <b>inseparable</b> — the object always follows all three words, including pronouns: <i>I get on with them</i>, never <i>get them on with</i>. After <i>look forward to</i>, use a noun or an <i>-ing</i> form, because <i>to</i> here is a preposition.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "I look forward to helping out at the centre."
        },
        {
          "type": "correct",
          "text": "She gets on with all her neighbours."
        },
        {
          "type": "correct",
          "text": "We need to catch up on the volunteer schedule."
        },
        {
          "type": "correct",
          "text": "They ran out of supplies during the drive."
        },
        {
          "type": "incorrect",
          "text": "I get them on with very well. (object splits the verb)"
        }
      ],
      "mistakes": [
        "Splitting the cluster: <em>get them on with</em> instead of <em>get on with them</em>.",
        "Using a base verb after <em>look forward to</em>: <em>look forward to help</em> instead of <em>look forward to help<u>ing</u></em>.",
        "Dropping the final preposition: <em>I ran out supplies</em> instead of <em>ran out <u>of</u> supplies</em>."
      ],
      "traps": [
        "<em>look forward to</em> takes a noun or <em>-ing</em>, because <em>to</em> is a preposition, not an infinitive marker.",
        "Three-part verbs never separate, even for pronouns: <em>catch up on it</em>, not <em>catch it up on</em>.",
        "Similar-looking clusters differ in meaning: <em>get on with</em> (have a good relationship) vs <em>get on</em> (board)."
      ],
      "arabicInsight": "<p>الفعل المركّب الثلاثي (فعل + ظرف + حرف جر) يعمل كوحدة واحدة بمعنى اصطلاحي مثل <b>get on with</b> و<b>catch up on</b>، وهو <b>غير قابل للفصل</b>: المفعول بعد الكلمات الثلاث. وبعد <b>look forward to</b> نستخدم اسمًا أو صيغة <i>-ing</i>.</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct three-part phrasal verb.",
          "options": [
            "I look forward to help out.",
            "I look forward to helping out.",
            "I look forward helping out.",
            "I look forward help out."
          ],
          "answer": 1,
          "explain": "<em>to + -ing</em> after <em>look forward to</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence keeps the cluster together?",
          "options": [
            "She gets them on with.",
            "She gets on them with.",
            "She gets on with them.",
            "She on gets with them."
          ],
          "answer": 2,
          "explain": "Inseparable: object after all three words."
        },
        {
          "type": "mcq",
          "prompt": "Pick the verb meaning 'to review missed work'.",
          "options": [
            "get on with",
            "catch up on",
            "run out of",
            "look forward to"
          ],
          "answer": 1,
          "explain": "<em>catch up on</em> = review what was missed."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'We have ____ time before the event.'",
          "options": [
            "run out of",
            "run out",
            "run of out",
            "out run of"
          ],
          "answer": 0,
          "explain": "<em>run out of</em> + noun."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing preposition.",
          "sentence": "I look forward ____ meeting the new volunteers.",
          "answers": [
            "to"
          ],
          "explain": "<em>look forward to</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "He gets on ____ everyone at the shelter.",
          "answers": [
            "with"
          ],
          "explain": "<em>get on with</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "I'm looking forward to ____ (help) this weekend.",
          "answers": [
            "helping"
          ],
          "explain": "<em>to + -ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using a three-part verb meaning 'have a good relationship with': <em>She relates well to her colleagues.</em> Use <em>gets on with</em>.",
          "answer": [
            "she gets on with her colleagues"
          ],
          "explain": "<em>relate well to</em> → <em>get on with</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>catch up on</em>: <em>I need to review the news I missed.</em>",
          "answer": [
            "i need to catch up on the news"
          ],
          "explain": "<em>catch up on</em> = review missed material."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with the pronoun correctly placed: <em>I get on with my neighbours.</em> Use <em>them</em>.",
          "answer": [
            "i get on with them"
          ],
          "explain": "Pronoun after the cluster."
        },
        {
          "type": "error",
          "prompt": "Correct the word order.",
          "given": "I get my classmates on with easily.",
          "answer": [
            "i get on with my classmates easily"
          ],
          "explain": "Inseparable cluster."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "We look forward to receive your help.",
          "answer": [
            "we look forward to receiving your help"
          ],
          "explain": "<em>to + -ing</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "gets",
            "on",
            "with",
            "all",
            "her",
            "neighbours"
          ],
          "answer": "She gets on with all her neighbours",
          "explain": "<em>get on with</em> + object."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "We",
            "need",
            "to",
            "catch",
            "up",
            "on",
            "the",
            "schedule"
          ],
          "answer": "We need to catch up on the schedule",
          "explain": "<em>catch up on</em> stays intact."
        },
        {
          "type": "match",
          "prompt": "Match each three-part verb to its meaning.",
          "pairs": [
            {
              "l": "look forward to",
              "r": "feel excited about"
            },
            {
              "l": "get on with",
              "r": "relate well to"
            },
            {
              "l": "run out of",
              "r": "have no more of"
            }
          ],
          "explain": "Each cluster carries one fixed meaning."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct three-part phrasal verb.",
          "options": [
            "They look forward to volunteer.",
            "They look forward to volunteering.",
            "They look forward volunteering.",
            "They look forward volunteer."
          ],
          "answer": 1,
          "explain": "<em>to + -ing</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence keeps the cluster together?",
          "options": [
            "He catches it up on.",
            "He catches up it on.",
            "He catches up on it.",
            "He up catches on it."
          ],
          "answer": 2,
          "explain": "Inseparable: object after all three words."
        },
        {
          "type": "mcq",
          "prompt": "Pick the verb meaning 'to have no more left'.",
          "options": [
            "get on with",
            "catch up on",
            "run out of",
            "look forward to"
          ],
          "answer": 2,
          "explain": "<em>run out of</em> = have none left."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'I ____ my cousins very well.'",
          "options": [
            "get on with",
            "get on",
            "get with on",
            "on get with"
          ],
          "answer": 0,
          "explain": "<em>get on with</em> someone."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing preposition.",
          "sentence": "She looks forward ____ the weekly meetings.",
          "answers": [
            "to"
          ],
          "explain": "<em>look forward to</em> + noun."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "We ran out ____ time before finishing.",
          "answers": [
            "of"
          ],
          "explain": "<em>run out of</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "They look forward to ____ (meet) the team.",
          "answers": [
            "meeting"
          ],
          "explain": "<em>to + -ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using a three-part verb meaning 'feel excited about': <em>She is excited about the trip.</em> Use <em>looks forward to</em>.",
          "answer": [
            "she looks forward to the trip"
          ],
          "explain": "<em>be excited about</em> → <em>look forward to</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>run out of</em>: <em>We had no more paper.</em>",
          "answer": [
            "we ran out of paper"
          ],
          "explain": "<em>run out of</em> + noun."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with the pronoun correctly placed: <em>He gets on with his teammates.</em> Use <em>them</em>.",
          "answer": [
            "he gets on with them"
          ],
          "explain": "Pronoun after the cluster."
        },
        {
          "type": "error",
          "prompt": "Correct the word order.",
          "given": "I catch the lessons up on at the weekend.",
          "answer": [
            "i catch up on the lessons at the weekend"
          ],
          "explain": "Inseparable cluster."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "She looks forward to start the project.",
          "answer": [
            "she looks forward to starting the project"
          ],
          "explain": "<em>to + -ing</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "They",
            "ran",
            "out",
            "of",
            "supplies",
            "very",
            "quickly"
          ],
          "answer": "They ran out of supplies very quickly",
          "explain": "<em>run out of</em> + object."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "I",
            "look",
            "forward",
            "to",
            "helping",
            "the",
            "community"
          ],
          "answer": "I look forward to helping the community",
          "explain": "<em>look forward to + -ing</em>."
        },
        {
          "type": "match",
          "prompt": "Match each three-part verb to a natural ending.",
          "pairs": [
            {
              "l": "I look forward to",
              "r": "the celebration."
            },
            {
              "l": "She gets on with",
              "r": "her new colleagues."
            },
            {
              "l": "We must catch up on",
              "r": "the missed lessons."
            }
          ],
          "explain": "Object follows the whole cluster."
        }
      ]
    },
    "t2s8_L4_adverbialLinkers": {
      "id": "t2s8_L4_adverbialLinkers",
      "code": "G.2.5",
      "title": "Adverbial Linkers",
      "chapter": "Chapter 3 — The Way We Live",
      "week": "Week 2 · Research and Present",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.S.IP.6.1",
      "source_ccg": "CCG Grade 12 General / Grade 11 Advanced — Term 2 · Chapter 3",
      "vocabulary": [
        "climate",
        "employment",
        "cleanliness",
        "education",
        "health care",
        "transportation",
        "statistic",
        "trend"
      ],
      "explanation": [
        "<p><b>Adverbial linkers</b> (linking adverbs) join two complete sentences and signal how the ideas relate: contrast (<i>however, nevertheless, on the other hand</i>), addition (<i>moreover, furthermore, in addition</i>), result (<i>therefore, consequently, as a result</i>) and example (<i>for instance</i>).</p>",
        "<p>A linker is <u>not</u> a conjunction, so it cannot join two clauses with a comma alone. Use a <b>full stop</b> or a <b>semicolon</b> before it and a <b>comma</b> after it: <i>The city scores well on health care. <u>However,</u> transportation is poor.</i></p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "The climate is mild. However, employment is limited."
        },
        {
          "type": "correct",
          "text": "The city ranks high for education; moreover, cleanliness is excellent."
        },
        {
          "type": "correct",
          "text": "Transportation improved. As a result, the city rose in the rankings."
        },
        {
          "type": "correct",
          "text": "Health care is strong. Therefore, life expectancy is high."
        },
        {
          "type": "incorrect",
          "text": "The climate is mild, however employment is limited. (comma before however)"
        }
      ],
      "mistakes": [
        "Joining two sentences with only a comma before the linker (a comma splice): <em>It ranks high, however prices are steep.</em>",
        "Forgetting the comma after the linker: <em>However the cost is high</em> instead of <em>However, the cost is high</em>.",
        "Treating a linker like <em>but</em>/<em>so</em>: a linker needs a full stop or semicolon before it."
      ],
      "traps": [
        "A linker needs a full stop or semicolon before it — that is what separates it from a conjunction.",
        "<em>however</em> = contrast; <em>therefore</em> = result; <em>moreover</em> = addition; do not swap their roles.",
        "When a linker opens the second sentence, a comma normally follows it."
      ],
      "arabicInsight": "<p>الروابط الظرفية تصل بين جملتين كاملتين وتبيّن العلاقة: التضاد (<i>however</i>)، الإضافة (<i>moreover</i>)، النتيجة (<i>therefore</i>). نضع <b>نقطة أو فاصلة منقوطة</b> قبل الرابط و<b>فاصلة</b> بعده، ولا نكتفي بفاصلة عادية.</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct linker for contrast.",
          "options": [
            "The climate is mild. Therefore, jobs are scarce.",
            "The climate is mild. However, jobs are scarce.",
            "The climate is mild. Moreover, jobs are scarce.",
            "The climate is mild. For instance, jobs are scarce."
          ],
          "answer": 1,
          "explain": "Contrast → <em>however</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence is punctuated correctly?",
          "options": [
            "It ranks high, however prices are steep.",
            "It ranks high however, prices are steep.",
            "It ranks high. However, prices are steep.",
            "It ranks high however prices are steep."
          ],
          "answer": 2,
          "explain": "Full stop before, comma after."
        },
        {
          "type": "mcq",
          "prompt": "Complete (result): 'Transportation improved. ____, commuting is faster.'",
          "options": [
            "However",
            "Moreover",
            "Therefore",
            "For example"
          ],
          "answer": 2,
          "explain": "Result → <em>therefore</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete (addition): 'Education is strong. ____, health care is excellent.'",
          "options": [
            "Moreover",
            "However",
            "Nevertheless",
            "On the other hand"
          ],
          "answer": 0,
          "explain": "Addition → <em>moreover</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a contrast linker.",
          "sentence": "Employment is high. ____, the cost of living is steep.",
          "answers": [
            "However",
            "Nevertheless"
          ],
          "explain": "Contrast linker."
        },
        {
          "type": "fill",
          "prompt": "Complete the punctuation after the linker.",
          "sentence": "The city is clean; therefore____ tourists return often.",
          "answers": [
            ","
          ],
          "explain": "Comma follows the linker."
        },
        {
          "type": "fill",
          "prompt": "Complete with a result linker.",
          "sentence": "The statistics improved. ____, the city climbed the rankings.",
          "answers": [
            "Consequently",
            "Therefore",
            "As a result"
          ],
          "explain": "Result linker."
        },
        {
          "type": "transform",
          "prompt": "Join into two sentences with <em>However</em>: <em>The climate is pleasant. Jobs are limited.</em>",
          "answer": [
            "the climate is pleasant however jobs are limited",
            "the climate is pleasant. however, jobs are limited"
          ],
          "explain": "Full stop/semicolon + <em>However,</em>."
        },
        {
          "type": "transform",
          "prompt": "Join with <em>Therefore</em>: <em>Education improved. Literacy rose.</em>",
          "answer": [
            "education improved therefore literacy rose",
            "education improved. therefore, literacy rose"
          ],
          "explain": "Result → <em>Therefore,</em>."
        },
        {
          "type": "transform",
          "prompt": "Join with <em>Moreover</em>: <em>The city has good transport. It has clean air.</em>",
          "answer": [
            "the city has good transport moreover it has clean air",
            "the city has good transport. moreover, it has clean air"
          ],
          "explain": "Addition → <em>Moreover,</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the comma splice.",
          "given": "Cleanliness is high, however employment is low.",
          "answer": [
            "cleanliness is high. however, employment is low",
            "cleanliness is high; however, employment is low"
          ],
          "explain": "Full stop/semicolon before <em>however</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the missing comma.",
          "given": "Health care is strong. Therefore life expectancy is high.",
          "answer": [
            "health care is strong. therefore, life expectancy is high"
          ],
          "explain": "Comma after the linker."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct second sentence (after a full stop).",
          "bank": [
            "However",
            "the",
            "cost",
            "of",
            "living",
            "is",
            "high"
          ],
          "answer": "However the cost of living is high",
          "explain": "Linker opens the sentence."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct second sentence.",
          "bank": [
            "Therefore",
            "the",
            "city",
            "ranked",
            "first",
            "overall"
          ],
          "answer": "Therefore the city ranked first overall",
          "explain": "Result linker + clause."
        },
        {
          "type": "match",
          "prompt": "Match each linker to its function.",
          "pairs": [
            {
              "l": "however",
              "r": "contrast"
            },
            {
              "l": "moreover",
              "r": "addition"
            },
            {
              "l": "therefore",
              "r": "result"
            }
          ],
          "explain": "Each linker signals one relationship between sentences."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct linker for result.",
          "options": [
            "Transport improved. However, costs fell.",
            "Transport improved. Moreover, costs fell.",
            "Transport improved. As a result, costs fell.",
            "Transport improved. For instance, costs fell."
          ],
          "answer": 2,
          "explain": "Result → <em>as a result</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence is punctuated correctly?",
          "options": [
            "It is clean, moreover it is safe.",
            "It is clean moreover, it is safe.",
            "It is clean; moreover, it is safe.",
            "It is clean moreover it is safe."
          ],
          "answer": 2,
          "explain": "Semicolon before, comma after."
        },
        {
          "type": "mcq",
          "prompt": "Complete (contrast): 'Education is excellent. ____, housing is expensive.'",
          "options": [
            "Moreover",
            "However",
            "Therefore",
            "For example"
          ],
          "answer": 1,
          "explain": "Contrast → <em>however</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete (addition): 'It scores high on safety. ____, it has clean air.'",
          "options": [
            "Furthermore",
            "However",
            "Nevertheless",
            "On the other hand"
          ],
          "answer": 0,
          "explain": "Addition → <em>furthermore</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a contrast linker.",
          "sentence": "The climate is mild. ____, the winters can be long.",
          "answers": [
            "However",
            "Nevertheless"
          ],
          "explain": "Contrast linker."
        },
        {
          "type": "fill",
          "prompt": "Complete the punctuation after the linker.",
          "sentence": "Employment is high; moreover____ wages are fair.",
          "answers": [
            ","
          ],
          "explain": "Comma after the linker."
        },
        {
          "type": "fill",
          "prompt": "Complete with a result linker.",
          "sentence": "Cleanliness improved. ____, tourism increased.",
          "answers": [
            "Consequently",
            "Therefore",
            "As a result"
          ],
          "explain": "Result linker."
        },
        {
          "type": "transform",
          "prompt": "Join into two sentences with <em>Nevertheless</em>: <em>The city is costly. It attracts many residents.</em>",
          "answer": [
            "the city is costly nevertheless it attracts many residents",
            "the city is costly. nevertheless, it attracts many residents"
          ],
          "explain": "Contrast → <em>Nevertheless,</em>."
        },
        {
          "type": "transform",
          "prompt": "Join with <em>Consequently</em>: <em>Health care expanded. Life expectancy rose.</em>",
          "answer": [
            "health care expanded consequently life expectancy rose",
            "health care expanded. consequently, life expectancy rose"
          ],
          "explain": "Result → <em>Consequently,</em>."
        },
        {
          "type": "transform",
          "prompt": "Join with <em>Furthermore</em>: <em>The transport is fast. It is affordable.</em>",
          "answer": [
            "the transport is fast furthermore it is affordable",
            "the transport is fast. furthermore, it is affordable"
          ],
          "explain": "Addition → <em>Furthermore,</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the comma splice.",
          "given": "Education is strong, however jobs are few.",
          "answer": [
            "education is strong. however, jobs are few",
            "education is strong; however, jobs are few"
          ],
          "explain": "Full stop/semicolon before <em>however</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the missing comma.",
          "given": "The climate is mild. Therefore farming thrives.",
          "answer": [
            "the climate is mild. therefore, farming thrives"
          ],
          "explain": "Comma after the linker."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct second sentence (after a full stop).",
          "bank": [
            "Nevertheless",
            "the",
            "rankings",
            "stayed",
            "high"
          ],
          "answer": "Nevertheless the rankings stayed high",
          "explain": "Contrast linker opens the sentence."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct second sentence.",
          "bank": [
            "Consequently",
            "more",
            "families",
            "moved",
            "there"
          ],
          "answer": "Consequently more families moved there",
          "explain": "Result linker + clause."
        },
        {
          "type": "match",
          "prompt": "Match each linker to its function.",
          "pairs": [
            {
              "l": "nevertheless",
              "r": "contrast"
            },
            {
              "l": "furthermore",
              "r": "addition"
            },
            {
              "l": "consequently",
              "r": "result"
            }
          ],
          "explain": "Each linker marks one relationship."
        }
      ]
    },
    "t2s8_L5_dependentPrep": {
      "id": "t2s8_L5_dependentPrep",
      "code": "G.12.4",
      "title": "Dependent Prepositions",
      "chapter": "Chapter 3 — The Way We Live",
      "week": "Week 3 · Numbers, Percentages, and Graphs",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.L.CS.5.1",
      "source_ccg": "CCG Grade 12 General / Grade 11 Advanced — Term 2 · Chapter 3",
      "vocabulary": [
        "fall",
        "increase",
        "rise",
        "decline",
        "drop",
        "jump",
        "decrease",
        "trend"
      ],
      "explanation": [
        "<p>Some words are always followed by a <b>fixed preposition</b> — a <b>dependent preposition</b>. The combination must be learned as a pair: <i>depend <u>on</u></i>, <i>interested <u>in</u></i>, <i>good <u>at</u></i>, <i>afraid <u>of</u></i>, <i>responsible <u>for</u></i>.</p>",
        "<p>When describing graphs, dependent prepositions are essential: there is a <i>rise <u>in</u></i> prices, a <i>fall <u>in</u></i> sales, an <i>increase <u>of</u></i> 10%, a <i>decline <u>in</u></i> demand. Choosing the wrong preposition is a very common error.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "There was a sharp rise in unemployment."
        },
        {
          "type": "correct",
          "text": "The graph shows a decline in birth rates."
        },
        {
          "type": "correct",
          "text": "Sales increased by 20% over the year."
        },
        {
          "type": "correct",
          "text": "The trend depends on consumer confidence."
        },
        {
          "type": "incorrect",
          "text": "There was a rise of unemployment last year. (wrong dependent preposition)"
        }
      ],
      "mistakes": [
        "Choosing the wrong preposition: <em>a rise of prices</em> instead of <em>a rise <u>in</u> prices</em>.",
        "Confusing <em>increase by</em> (amount of change) with <em>increase in</em> (the thing changing).",
        "Omitting the preposition: <em>interested art</em> instead of <em>interested <u>in</u> art</em>."
      ],
      "traps": [
        "Use <em>in</em> for the area that changes (a rise <em>in</em> prices) and <em>by</em> for the size of the change (rose <em>by</em> 5%).",
        "<em>depend</em> always takes <em>on</em>; never <em>depend of</em> or <em>depend to</em>.",
        "The same root noun and verb keep the same preposition: <em>an increase in</em> / <em>increase in</em>."
      ],
      "arabicInsight": "<p>بعض الكلمات يتبعها <b>حرف جر ثابت</b> يجب حفظه معها: <i>depend on, interested in, good at, afraid of</i>. وفي وصف الرسوم البيانية نستخدم <i>a rise in</i> و<i>a fall in</i> و<i>increase by</i> لمقدار التغيّر. اختيار حرف الجر الخطأ من أكثر الأخطاء شيوعًا.</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct dependent preposition.",
          "options": [
            "a rise of prices",
            "a rise in prices",
            "a rise to prices",
            "a rise at prices"
          ],
          "answer": 1,
          "explain": "<em>a rise in</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which preposition follows 'depend'?",
          "options": [
            "depend of",
            "depend to",
            "depend on",
            "depend in"
          ],
          "answer": 2,
          "explain": "<em>depend on</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct phrase for the size of change.",
          "options": [
            "increased in 5%",
            "increased by 5%",
            "increased of 5%",
            "increased at 5%"
          ],
          "answer": 1,
          "explain": "Size of change → <em>by</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'She is very good ____ statistics.'",
          "options": [
            "at",
            "in",
            "of",
            "on"
          ],
          "answer": 0,
          "explain": "<em>good at</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing preposition.",
          "sentence": "The chart shows a steady decline ____ sales.",
          "answers": [
            "in"
          ],
          "explain": "<em>decline in</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing preposition.",
          "sentence": "The outcome depends ____ the economy.",
          "answers": [
            "on"
          ],
          "explain": "<em>depend on</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing preposition.",
          "sentence": "Prices rose ____ ten percent last year.",
          "answers": [
            "by"
          ],
          "explain": "Size of change → <em>by</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite correctly: <em>There was a fall of demand.</em>",
          "answer": [
            "there was a fall in demand"
          ],
          "explain": "<em>fall in</em>, not <em>fall of</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite correctly: <em>The forecast depends to the weather.</em>",
          "answer": [
            "the forecast depends on the weather"
          ],
          "explain": "<em>depend on</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>by</em> for the change: <em>Sales went up. The amount was 15%.</em>",
          "answer": [
            "sales increased by 15%",
            "sales rose by 15%"
          ],
          "explain": "Size of change → <em>by</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the preposition.",
          "given": "The graph shows an increase of crime in the city.",
          "answer": [
            "the graph shows an increase in crime in the city"
          ],
          "explain": "<em>increase in</em> the thing changing."
        },
        {
          "type": "error",
          "prompt": "Correct the preposition.",
          "given": "Young people are interested on the topic.",
          "answer": [
            "young people are interested in the topic"
          ],
          "explain": "<em>interested in</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "There",
            "was",
            "a",
            "sharp",
            "rise",
            "in",
            "prices"
          ],
          "answer": "There was a sharp rise in prices",
          "explain": "<em>rise in</em> + noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "result",
            "depends",
            "on",
            "the",
            "data"
          ],
          "answer": "The result depends on the data",
          "explain": "<em>depend on</em>."
        },
        {
          "type": "match",
          "prompt": "Match each word to its dependent preposition.",
          "pairs": [
            {
              "l": "depend",
              "r": "on"
            },
            {
              "l": "afraid",
              "r": "of"
            },
            {
              "l": "good",
              "r": "at"
            }
          ],
          "explain": "Each pairing is fixed and must be memorised."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct dependent preposition.",
          "options": [
            "a fall of demand",
            "a fall in demand",
            "a fall to demand",
            "a fall at demand"
          ],
          "answer": 1,
          "explain": "<em>a fall in</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which preposition follows 'responsible'?",
          "options": [
            "responsible of",
            "responsible for",
            "responsible to",
            "responsible in"
          ],
          "answer": 1,
          "explain": "<em>responsible for</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct phrase for the size of change.",
          "options": [
            "dropped in 8%",
            "dropped of 8%",
            "dropped by 8%",
            "dropped at 8%"
          ],
          "answer": 2,
          "explain": "Size of change → <em>by</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'He is afraid ____ public speaking.'",
          "options": [
            "at",
            "in",
            "of",
            "on"
          ],
          "answer": 2,
          "explain": "<em>afraid of</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing preposition.",
          "sentence": "The data shows a sudden jump ____ visitors.",
          "answers": [
            "in"
          ],
          "explain": "<em>jump in</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing preposition.",
          "sentence": "Success depends ____ careful planning.",
          "answers": [
            "on"
          ],
          "explain": "<em>depend on</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing preposition.",
          "sentence": "Demand decreased ____ twelve percent.",
          "answers": [
            "by"
          ],
          "explain": "Size of change → <em>by</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite correctly: <em>There was an increase of tourism.</em>",
          "answer": [
            "there was an increase in tourism"
          ],
          "explain": "<em>increase in</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite correctly: <em>She is good in mathematics.</em>",
          "answer": [
            "she is good at mathematics"
          ],
          "explain": "<em>good at</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite using <em>by</em> for the change: <em>Numbers went down. The amount was 9%.</em>",
          "answer": [
            "numbers decreased by 9%",
            "numbers fell by 9%",
            "numbers dropped by 9%"
          ],
          "explain": "Size of change → <em>by</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the preposition.",
          "given": "The report shows a decline of births.",
          "answer": [
            "the report shows a decline in births"
          ],
          "explain": "<em>decline in</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the preposition.",
          "given": "Everything depends of the budget.",
          "answer": [
            "everything depends on the budget"
          ],
          "explain": "<em>depend on</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "chart",
            "shows",
            "a",
            "fall",
            "in",
            "demand"
          ],
          "answer": "The chart shows a fall in demand",
          "explain": "<em>fall in</em> + noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Prices",
            "increased",
            "by",
            "ten",
            "percent",
            "overall"
          ],
          "answer": "Prices increased by ten percent overall",
          "explain": "Size of change → <em>by</em>."
        },
        {
          "type": "match",
          "prompt": "Match each word to its dependent preposition.",
          "pairs": [
            {
              "l": "interested",
              "r": "in"
            },
            {
              "l": "responsible",
              "r": "for"
            },
            {
              "l": "a rise",
              "r": "in"
            }
          ],
          "explain": "Each pairing is fixed."
        }
      ]
    },
    "t2s8_L6_superlatives": {
      "id": "t2s8_L6_superlatives",
      "code": "G.1.3",
      "title": "Superlative Adjectives",
      "chapter": "Chapter 3 — The Way We Live",
      "week": "Week 3 · Comparing Lifestyles",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.S.IP.7.1",
      "source_ccg": "CCG Grade 12 General / Grade 11 Advanced — Term 2 · Chapter 3",
      "vocabulary": [
        "lifestyle",
        "life expectancy",
        "population",
        "statistic",
        "trend",
        "climate",
        "employment",
        "education"
      ],
      "explanation": [
        "<p>A <b>superlative adjective</b> marks the top or bottom of a group of three or more. Short adjectives add <b>-est</b> with <b>the</b>: <i>the high<u>est</u></i>, <i>the cleanest</i>. Longer adjectives use <b>the most</b>: <i>the most populated</i>, <i>the most expensive</i>.</p>",
        "<p>Spelling changes apply: <i>big → the biggest</i> (double consonant), <i>happy → the happiest</i> (y → i). Some are irregular: <i>good → the best</i>, <i>bad → the worst</i>, <i>far → the furthest</i>. Use <b>in</b> with places and <b>of</b> with groups: <i>the largest city <u>in</u> the world</i>, <i>the best <u>of</u> the three</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "Tokyo has one of the highest populations in the world."
        },
        {
          "type": "correct",
          "text": "This city has the best life expectancy of the three."
        },
        {
          "type": "correct",
          "text": "It is the most expensive lifestyle in the region."
        },
        {
          "type": "correct",
          "text": "That country reports the cleanest air statistics."
        },
        {
          "type": "incorrect",
          "text": "It is the most highest ranking city. (double superlative)"
        }
      ],
      "mistakes": [
        "Double superlative: <em>the most highest</em> instead of <em>the highest</em>.",
        "Forgetting <em>the</em>: <em>It is biggest city</em> instead of <em>the biggest city</em>.",
        "Using <em>-est</em> with a long adjective: <em>the expensivest</em> instead of <em>the most expensive</em>."
      ],
      "traps": [
        "Use <em>in</em> for a place (the tallest building <em>in</em> Dubai) and <em>of</em> for a set (the best <em>of</em> the group).",
        "Irregular forms have no <em>-est</em> or <em>most</em>: <em>the best</em>, <em>the worst</em>, <em>the furthest</em>.",
        "Two-syllable adjectives ending in <em>-y</em> take <em>-est</em>: <em>the happiest</em>, <em>the easiest</em>."
      ],
      "arabicInsight": "<p>صفة التفضيل العليا تدل على الأعلى أو الأدنى في مجموعة من ثلاثة فأكثر. الصفات القصيرة تأخذ <b>the + -est</b> (the highest)، والطويلة تأخذ <b>the most</b> (the most populated). ونحذر من التفضيل المزدوج مثل <i>the most highest</i>، ومن الأشكال الشاذة مثل <b>the best / the worst</b>.</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct superlative.",
          "options": [
            "It is the most highest city.",
            "It is the highest city.",
            "It is the highest-est city.",
            "It is highest city."
          ],
          "answer": 1,
          "explain": "<em>the highest</em>; no double superlative."
        },
        {
          "type": "mcq",
          "prompt": "Which long adjective is correct?",
          "options": [
            "the expensivest lifestyle",
            "the most expensive lifestyle",
            "the more expensive lifestyle",
            "the expensive most lifestyle"
          ],
          "answer": 1,
          "explain": "Long adjective → <em>the most expensive</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct irregular superlative.",
          "options": [
            "the goodest life expectancy",
            "the bestest life expectancy",
            "the best life expectancy",
            "the most good life expectancy"
          ],
          "answer": 2,
          "explain": "<em>good → the best</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'It is the largest city ____ the country.'",
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
          "sentence": "This is the ____ (clean) city in the survey.",
          "answers": [
            "cleanest"
          ],
          "explain": "<em>clean → the cleanest</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the superlative.",
          "sentence": "Japan has one of the ____ (high) life expectancies.",
          "answers": [
            "highest"
          ],
          "explain": "<em>high → the highest</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct word.",
          "sentence": "It is the best ____ the three options.",
          "answers": [
            "of"
          ],
          "explain": "Group → <em>of</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative: <em>This lifestyle is expensive.</em> Use <em>the most</em> (in the region).",
          "answer": [
            "this is the most expensive lifestyle in the region"
          ],
          "explain": "Long adjective → <em>the most expensive</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative: <em>This city is big.</em> Use <em>the</em> (in Asia).",
          "answer": [
            "this is the biggest city in asia"
          ],
          "explain": "<em>big → the biggest</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative with an irregular form: <em>These statistics are good.</em> Use <em>the</em>.",
          "answer": [
            "these are the best statistics"
          ],
          "explain": "<em>good → the best</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the superlative.",
          "given": "It has the most cleanest streets in the country.",
          "answer": [
            "it has the cleanest streets in the country"
          ],
          "explain": "No double superlative."
        },
        {
          "type": "error",
          "prompt": "Correct the missing article.",
          "given": "That is biggest population in the region.",
          "answer": [
            "that is the biggest population in the region"
          ],
          "explain": "Superlatives take <em>the</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "It",
            "has",
            "the",
            "highest",
            "life",
            "expectancy",
            "in",
            "Asia"
          ],
          "answer": "It has the highest life expectancy in Asia",
          "explain": "<em>the highest</em> + <em>in</em> a place."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "This",
            "is",
            "the",
            "most",
            "populated",
            "city",
            "of",
            "all"
          ],
          "answer": "This is the most populated city of all",
          "explain": "<em>the most populated</em> + <em>of</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its superlative.",
          "pairs": [
            {
              "l": "clean",
              "r": "the cleanest"
            },
            {
              "l": "expensive",
              "r": "the most expensive"
            },
            {
              "l": "good",
              "r": "the best"
            }
          ],
          "explain": "Short → <em>-est</em>; long → <em>the most</em>; irregular forms differ."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct superlative.",
          "options": [
            "It is the most biggest country.",
            "It is the biggest country.",
            "It is the biggest-est country.",
            "It is biggest country."
          ],
          "answer": 1,
          "explain": "<em>the biggest</em>; no double superlative."
        },
        {
          "type": "mcq",
          "prompt": "Which long adjective is correct?",
          "options": [
            "the populatedest area",
            "the most populated area",
            "the more populated area",
            "the populated most area"
          ],
          "answer": 1,
          "explain": "<em>the most populated</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct irregular superlative.",
          "options": [
            "the baddest air quality",
            "the worst air quality",
            "the most bad air quality",
            "the worstest air quality"
          ],
          "answer": 1,
          "explain": "<em>bad → the worst</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'It is the best ____ all the cities.'",
          "options": [
            "of",
            "in",
            "at",
            "on"
          ],
          "answer": 0,
          "explain": "Group → <em>of</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the superlative.",
          "sentence": "This is the ____ (happy) population in the index.",
          "answers": [
            "happiest"
          ],
          "explain": "<em>happy → the happiest</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the superlative.",
          "sentence": "It has the ____ (low) crime rate of the three.",
          "answers": [
            "lowest"
          ],
          "explain": "<em>low → the lowest</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct word.",
          "sentence": "It is the tallest tower ____ the city.",
          "answers": [
            "in"
          ],
          "explain": "Place → <em>in</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative: <em>This city is safe.</em> Use <em>the</em> (in the region).",
          "answer": [
            "this is the safest city in the region"
          ],
          "explain": "<em>safe → the safest</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative: <em>This region is developed.</em> Use <em>the most</em> (in the country).",
          "answer": [
            "this is the most developed region in the country"
          ],
          "explain": "Long adjective → <em>the most developed</em>."
        },
        {
          "type": "transform",
          "prompt": "Make superlative with an irregular form: <em>This climate is bad for farming.</em> Use <em>the</em>.",
          "answer": [
            "this is the worst climate for farming"
          ],
          "explain": "<em>bad → the worst</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the superlative.",
          "given": "It records the most lowest pollution levels.",
          "answer": [
            "it records the lowest pollution levels"
          ],
          "explain": "No double superlative."
        },
        {
          "type": "error",
          "prompt": "Correct the missing article.",
          "given": "Tokyo has largest population in Japan.",
          "answer": [
            "tokyo has the largest population in japan"
          ],
          "explain": "Superlatives take <em>the</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "It",
            "has",
            "the",
            "cleanest",
            "air",
            "in",
            "the",
            "country"
          ],
          "answer": "It has the cleanest air in the country",
          "explain": "<em>the cleanest</em> + <em>in</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "This",
            "is",
            "the",
            "best",
            "lifestyle",
            "of",
            "all"
          ],
          "answer": "This is the best lifestyle of all",
          "explain": "<em>the best</em> + <em>of</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its superlative.",
          "pairs": [
            {
              "l": "big",
              "r": "the biggest"
            },
            {
              "l": "comfortable",
              "r": "the most comfortable"
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
    "t2s8_L7_participleAdj": {
      "id": "t2s8_L7_participleAdj",
      "code": "G.1.4",
      "title": "Participle Adjectives",
      "chapter": "Chapter 4 — World Village",
      "week": "Week 5 · Life in a Fishbowl",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.WR.P.1.1",
      "source_ccg": "CCG Grade 12 General / Grade 11 Advanced — Term 2 · Chapter 4",
      "vocabulary": [
        "horrified",
        "amazing",
        "endangered",
        "processed",
        "convinced",
        "impressed",
        "offensive",
        "exhausted"
      ],
      "explanation": [
        "<p><b>Participle adjectives</b> come from verbs and have two forms. The <b>-ing</b> form describes the <u>cause</u> — the thing that produces the feeling: <i>The reality show was <b>shocking</b>.</i> The <b>-ed</b> form describes the <u>person's feeling</u>: <i>The viewers were <b>shocked</b>.</i></p>",
        "<p>Choose by asking who or what you mean: a film can be <i>boring</i> (cause), but a person is <i>bored</i> (feeling). Many describe strong reactions: <i>amazing/amazed</i>, <i>horrifying/horrified</i>, <i>exhausting/exhausted</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "The globalisation documentary was fascinating. (the film causes the feeling)"
        },
        {
          "type": "correct",
          "text": "The audience was fascinated by the documentary. (people feel it)"
        },
        {
          "type": "correct",
          "text": "The amount of processed food is shocking."
        },
        {
          "type": "correct",
          "text": "Viewers felt horrified by the footage."
        },
        {
          "type": "incorrect",
          "text": "I was very boring during the lecture. (means the speaker found you dull)"
        }
      ],
      "mistakes": [
        "Using <em>-ing</em> for a feeling: <em>I am boring</em> (= I am dull) instead of <em>I am bored</em>.",
        "Using <em>-ed</em> for a cause: <em>The show was excited</em> instead of <em>The show was exciting</em>.",
        "Mixing the pair: <em>a horrified film</em> instead of <em>a horrifying film</em>."
      ],
      "traps": [
        "<em>-ing</em> = the source of the feeling (a <em>tiring</em> day); <em>-ed</em> = the person who feels it (a <em>tired</em> worker).",
        "Saying <em>I am boring</em> accidentally describes yourself as dull, not bored.",
        "Both forms can sit before a noun: <em>an interesting article</em> (cause) vs <em>an interested reader</em> (feeling)."
      ],
      "arabicInsight": "<p>الصفات المشتقة من الأفعال نوعان: صيغة <b>-ing</b> تصف <b>المُسبِّب</b> للشعور (<i>shocking</i>)، وصيغة <b>-ed</b> تصف <b>شعور الشخص</b> (<i>shocked</i>). نسأل: هل أتحدث عن سبب الشعور أم عن الشخص الذي يشعر به؟ الخطأ الشائع: <i>I am boring</i> بدل <i>I am bored</i>.</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct participle adjective.",
          "options": [
            "The show was very bored.",
            "The show was very boring.",
            "The show was very bore.",
            "The show was very boredom."
          ],
          "answer": 1,
          "explain": "The show is the cause → <em>boring</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which describes the people's feeling?",
          "options": [
            "The viewers were shocking.",
            "The viewers were shock.",
            "The viewers were shocked.",
            "The viewers were shockingly."
          ],
          "answer": 2,
          "explain": "People feel it → <em>shocked</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct pair.",
          "options": [
            "a fascinated documentary",
            "a fascinating documentary",
            "a fascinate documentary",
            "a fascination documentary"
          ],
          "answer": 1,
          "explain": "The documentary causes interest → <em>fascinating</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'The amount of processed food is ____.'",
          "options": [
            "alarmed",
            "alarming",
            "alarm",
            "alarms"
          ],
          "answer": 1,
          "explain": "It causes the feeling → <em>alarming</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "The audience felt ____ (horrify) by the footage.",
          "answers": [
            "horrified"
          ],
          "explain": "People feel it → <em>horrified</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "The new global trend is truly ____ (amaze).",
          "answers": [
            "amazing"
          ],
          "explain": "It causes the feeling → <em>amazing</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "After the long broadcast, the crew were ____ (exhaust).",
          "answers": [
            "exhausted"
          ],
          "explain": "People feel it → <em>exhausted</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form: <em>The film about endangered species. (it causes interest)</em> Use <em>interesting</em>.",
          "answer": [
            "the film about endangered species was interesting"
          ],
          "explain": "Cause → <em>interesting</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form: <em>The viewers. (they felt the interest)</em> Use <em>interested</em>.",
          "answer": [
            "the viewers were interested"
          ],
          "explain": "Feeling → <em>interested</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite correctly: <em>I am very confusing about the plot.</em>",
          "answer": [
            "i am very confused about the plot"
          ],
          "explain": "The person feels it → <em>confused</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the participle adjective.",
          "given": "The reality show was so excited to watch.",
          "answer": [
            "the reality show was so exciting to watch"
          ],
          "explain": "The show is the cause → <em>exciting</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the participle adjective.",
          "given": "The audience was amazing by the results.",
          "answer": [
            "the audience was amazed by the results"
          ],
          "explain": "People feel it → <em>amazed</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "documentary",
            "was",
            "absolutely",
            "fascinating"
          ],
          "answer": "The documentary was absolutely fascinating",
          "explain": "Cause → <em>fascinating</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "viewers",
            "were",
            "deeply",
            "moved",
            "by",
            "it"
          ],
          "answer": "The viewers were deeply moved by it",
          "explain": "Feeling → <em>moved</em>."
        },
        {
          "type": "match",
          "prompt": "Match each subject to the correct form.",
          "pairs": [
            {
              "l": "The film (cause)",
              "r": "was terrifying."
            },
            {
              "l": "The children (feeling)",
              "r": "were terrified."
            },
            {
              "l": "The news (cause)",
              "r": "was shocking."
            }
          ],
          "explain": "-ing for the cause; -ed for the feeling."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct participle adjective.",
          "options": [
            "The lecture was very tired.",
            "The lecture was very tiring.",
            "The lecture was very tire.",
            "The lecture was very tiredness."
          ],
          "answer": 1,
          "explain": "The lecture is the cause → <em>tiring</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which describes the people's feeling?",
          "options": [
            "The students were boring.",
            "The students were bored.",
            "The students were bore.",
            "The students were boredom."
          ],
          "answer": 1,
          "explain": "People feel it → <em>bored</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct pair.",
          "options": [
            "a disappointed result",
            "a disappointing result",
            "a disappoint result",
            "a disappointment result"
          ],
          "answer": 1,
          "explain": "The result causes the feeling → <em>disappointing</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'The endangered-species report was ____.'",
          "options": [
            "depressed",
            "depressing",
            "depress",
            "depression"
          ],
          "answer": 1,
          "explain": "It causes the feeling → <em>depressing</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "The fans were ____ (thrill) by the finale.",
          "answers": [
            "thrilled"
          ],
          "explain": "People feel it → <em>thrilled</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "The footage of the floods was ____ (terrify).",
          "answers": [
            "terrifying"
          ],
          "explain": "It causes the feeling → <em>terrifying</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "By the end, the host looked ____ (exhaust).",
          "answers": [
            "exhausted"
          ],
          "explain": "People feel it → <em>exhausted</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form: <em>The globalisation talk. (it causes the feeling)</em> Use <em>inspiring</em>.",
          "answer": [
            "the globalisation talk was inspiring"
          ],
          "explain": "Cause → <em>inspiring</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form: <em>The listeners. (they felt it)</em> Use <em>inspired</em>.",
          "answer": [
            "the listeners were inspired"
          ],
          "explain": "Feeling → <em>inspired</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite correctly: <em>She was very exciting about the trip.</em>",
          "answer": [
            "she was very excited about the trip"
          ],
          "explain": "The person feels it → <em>excited</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the participle adjective.",
          "given": "The audience was fascinating by the show.",
          "answer": [
            "the audience was fascinated by the show"
          ],
          "explain": "People feel it → <em>fascinated</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the participle adjective.",
          "given": "The plot was very confused.",
          "answer": [
            "the plot was very confusing"
          ],
          "explain": "The plot is the cause → <em>confusing</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "results",
            "were",
            "genuinely",
            "surprising"
          ],
          "answer": "The results were genuinely surprising",
          "explain": "Cause → <em>surprising</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "crowd",
            "felt",
            "completely",
            "amazed"
          ],
          "answer": "The crowd felt completely amazed",
          "explain": "Feeling → <em>amazed</em>."
        },
        {
          "type": "match",
          "prompt": "Match each subject to the correct form.",
          "pairs": [
            {
              "l": "The journey (cause)",
              "r": "was exhausting."
            },
            {
              "l": "The travellers (feeling)",
              "r": "were exhausted."
            },
            {
              "l": "The story (cause)",
              "r": "was moving."
            }
          ],
          "explain": "-ing for the cause; -ed for the feeling."
        }
      ]
    },
    "t2s8_L8_compoundAdj": {
      "id": "t2s8_L8_compoundAdj",
      "code": "Extension",
      "title": "Compound Adjectives",
      "chapter": "Chapter 4 — World Village",
      "week": "Week 5/6 · World Village · teacher extension",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.WR.P.1.1",
      "source_ccg": "Teacher extension (builds on G.1.4 Participle Adjectives) — not a separate CCG grammar code.",
      "vocabulary": [
        "out-of-the-way",
        "rags-to-riches",
        "well-known",
        "world-famous",
        "ten-year-old",
        "high-quality"
      ],
      "explanation": [
        "<p>A <b>compound adjective</b> is two or more words joined to describe a noun, usually with a <b>hyphen</b> before the noun: <i>a well-known author</i>, <i>an out-of-the-way village</i>, <i>a rags-to-riches story</i>. The hyphen shows the words work as one idea.</p>",
        "<p>When a number is part of the compound, the noun inside stays <b>singular</b>: <i>a five-star hotel</i>, <i>a ten-year-old child</i> (not <i>ten-years-old</i>). After the verb <i>be</i>, many compounds keep the hyphen too: <i>The place is out-of-the-way.</i></p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "Bagan is a once-quiet, out-of-the-way town."
        },
        {
          "type": "correct",
          "text": "It was a classic rags-to-riches journey."
        },
        {
          "type": "correct",
          "text": "They stayed in a five-star hotel."
        },
        {
          "type": "correct",
          "text": "She is a world-famous travel writer."
        },
        {
          "type": "incorrect",
          "text": "It was a ten-years-old tradition. (plural noun inside the compound)"
        }
      ],
      "mistakes": [
        "Making the inner noun plural: <em>a ten-years-old child</em> instead of <em>a ten-year-old child</em>.",
        "Leaving out the hyphen before the noun: <em>a well known author</em> instead of <em>a well-known author</em>.",
        "Hyphenating an <em>-ly</em> adverb + adjective: <em>a highly-respected leader</em> instead of <em>a highly respected leader</em>."
      ],
      "traps": [
        "Numbers in a compound keep the noun singular: <em>a three-hour flight</em>, not <em>a three-hours flight</em>.",
        "Do not hyphenate after an <em>-ly</em> adverb: <em>a beautifully designed home</em> (no hyphen).",
        "Compounds are usually hyphenated before the noun; some stay hyphenated after <em>be</em> (<em>out-of-the-way</em>)."
      ],
      "arabicInsight": "<p>الصفة المركّبة هي كلمتان أو أكثر تتّحدان لوصف الاسم، وتُوصَل عادة <b>بشَرطة</b> قبل الاسم: <i>well-known</i>, <i>out-of-the-way</i>, <i>rags-to-riches</i>. وإذا تضمّنت رقمًا يبقى الاسم الداخلي <b>مفردًا</b>: <i>a ten-year-old child</i> لا <i>ten-years-old</i>. (درس إثرائي يكمّل G.1.4).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct compound adjective.",
          "options": [
            "a ten-years-old custom",
            "a ten-year-old custom",
            "a ten year old custom",
            "a ten-years old custom"
          ],
          "answer": 1,
          "explain": "Number compound keeps the noun singular: <em>ten-year-old</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which is correctly hyphenated?",
          "options": [
            "a well known site",
            "a well-known site",
            "a wellknown site",
            "a well-known-site"
          ],
          "answer": 1,
          "explain": "Hyphen before the noun: <em>well-known</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct form after an -ly adverb.",
          "options": [
            "a highly-rated film",
            "a highly rated film",
            "a highlyrated film",
            "a high-ly rated film"
          ],
          "answer": 1,
          "explain": "No hyphen after an <em>-ly</em> adverb."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'It was a ____ flight to Asia.'",
          "options": [
            "five-hours",
            "five-hour",
            "five hours",
            "five-hour-long-hours"
          ],
          "answer": 1,
          "explain": "Number compound → singular noun: <em>five-hour</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the compound with a hyphen pattern.",
          "sentence": "She wrote a rags____to____riches memoir.",
          "answers": [
            "-"
          ],
          "explain": "Each gap takes a hyphen in <em>rags-to-riches</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "Bagan is an out-of-the-____ destination.",
          "answers": [
            "way"
          ],
          "explain": "<em>out-of-the-way</em> = remote."
        },
        {
          "type": "fill",
          "prompt": "Complete the number compound.",
          "sentence": "They took a three-____ tour of the village.",
          "answers": [
            "hour",
            "day"
          ],
          "explain": "Singular noun inside the compound."
        },
        {
          "type": "transform",
          "prompt": "Make a compound adjective: <em>a hotel with five stars</em>",
          "answer": [
            "a five-star hotel"
          ],
          "explain": "<em>five-star hotel</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a compound adjective: <em>a writer who is known around the world</em>",
          "answer": [
            "a world-famous writer",
            "a world-renowned writer"
          ],
          "explain": "<em>world-famous writer</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a compound adjective: <em>a child who is eight years old</em>",
          "answer": [
            "an eight-year-old child"
          ],
          "explain": "Number compound, singular noun."
        },
        {
          "type": "error",
          "prompt": "Correct the compound.",
          "given": "It is a ten-years-old festival.",
          "answer": [
            "it is a ten-year-old festival"
          ],
          "explain": "Singular noun inside: <em>ten-year-old</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the hyphenation.",
          "given": "She is a well known travel blogger.",
          "answer": [
            "she is a well-known travel blogger"
          ],
          "explain": "Hyphen before the noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Bagan",
            "is",
            "an",
            "out-of-the-way",
            "ancient",
            "town"
          ],
          "answer": "Bagan is an out-of-the-way ancient town",
          "explain": "Compound before the noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "It",
            "was",
            "a",
            "classic",
            "rags-to-riches",
            "story"
          ],
          "answer": "It was a classic rags-to-riches story",
          "explain": "Hyphenated compound adjective."
        },
        {
          "type": "match",
          "prompt": "Match each compound to its meaning.",
          "pairs": [
            {
              "l": "world-famous",
              "r": "known everywhere"
            },
            {
              "l": "out-of-the-way",
              "r": "remote, hard to reach"
            },
            {
              "l": "rags-to-riches",
              "r": "from poverty to wealth"
            }
          ],
          "explain": "Hyphens bind the words into one adjective."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct compound adjective.",
          "options": [
            "a five-stars resort",
            "a five-star resort",
            "a five star resort",
            "a five-stars-resort"
          ],
          "answer": 1,
          "explain": "Number compound keeps the noun singular."
        },
        {
          "type": "mcq",
          "prompt": "Which is correctly hyphenated?",
          "options": [
            "a world famous landmark",
            "a world-famous landmark",
            "a worldfamous landmark",
            "a world-famous-landmark"
          ],
          "answer": 1,
          "explain": "Hyphen before the noun."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct form after an -ly adverb.",
          "options": [
            "a beautifully-restored temple",
            "a beautifully restored temple",
            "a beautifullyrestored temple",
            "a beautiful-ly restored temple"
          ],
          "answer": 1,
          "explain": "No hyphen after an <em>-ly</em> adverb."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'It was a ____ journey by train.'",
          "options": [
            "two-days",
            "two-day",
            "two days",
            "two-days-long"
          ],
          "answer": 1,
          "explain": "Singular noun inside: <em>two-day</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the compound with a hyphen pattern.",
          "sentence": "He told a rags____to____riches tale.",
          "answers": [
            "-"
          ],
          "explain": "Hyphen in each gap of <em>rags-to-riches</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "The ruins sit in an out-of-the-____ valley.",
          "answers": [
            "way"
          ],
          "explain": "<em>out-of-the-way</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the number compound.",
          "sentence": "We booked a four-____ stay near the temples.",
          "answers": [
            "day",
            "night"
          ],
          "explain": "Singular noun inside the compound."
        },
        {
          "type": "transform",
          "prompt": "Make a compound adjective: <em>a tour that lasts six hours</em>",
          "answer": [
            "a six-hour tour"
          ],
          "explain": "<em>six-hour tour</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a compound adjective: <em>a site that is known around the world</em>",
          "answer": [
            "a world-famous site",
            "a world-renowned site"
          ],
          "explain": "<em>world-famous site</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a compound adjective: <em>a tradition that is two hundred years old</em>",
          "answer": [
            "a two-hundred-year-old tradition"
          ],
          "explain": "Number compound, singular noun."
        },
        {
          "type": "error",
          "prompt": "Correct the compound.",
          "given": "It is a five-stars hotel by the river.",
          "answer": [
            "it is a five-star hotel by the river"
          ],
          "explain": "Singular noun inside."
        },
        {
          "type": "error",
          "prompt": "Correct the hyphenation.",
          "given": "Bagan is a world famous heritage site.",
          "answer": [
            "bagan is a world-famous heritage site"
          ],
          "explain": "Hyphen before the noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "is",
            "a",
            "world-famous",
            "travel",
            "writer"
          ],
          "answer": "She is a world-famous travel writer",
          "explain": "Compound before the noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "They",
            "booked",
            "a",
            "five-star",
            "riverside",
            "hotel"
          ],
          "answer": "They booked a five-star riverside hotel",
          "explain": "Number compound, singular noun."
        },
        {
          "type": "match",
          "prompt": "Match each compound to its meaning.",
          "pairs": [
            {
              "l": "five-star",
              "r": "of the highest quality"
            },
            {
              "l": "ten-year-old",
              "r": "aged ten years"
            },
            {
              "l": "well-known",
              "r": "familiar to many"
            }
          ],
          "explain": "Hyphens join the words into one adjective."
        }
      ]
    },
    "t2s8_L9_adjOrder": {
      "id": "t2s8_L9_adjOrder",
      "code": "Extension",
      "title": "Order of Adjectives",
      "chapter": "Chapter 4 — World Village",
      "week": "Week 6 · World Village · teacher extension",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.WR.P.1.1",
      "source_ccg": "Teacher extension (builds on G.1.4 Participle Adjectives) — not a separate CCG grammar code.",
      "vocabulary": [
        "scattered",
        "impressive",
        "traditional",
        "wooden",
        "ancient",
        "colourful",
        "local"
      ],
      "explanation": [
        "<p>When several adjectives describe one noun, English follows a usual <b>order</b>: <b>opinion → size → age → shape → colour → origin → material → purpose</b>. So we say <i>a lovely small old round brown wooden table</i>, not a random mix.</p>",
        "<p>In practice you rarely use more than two or three together. The key rule is simple: an <b>opinion</b> adjective comes before <b>fact</b> adjectives — <i>a beautiful ancient temple</i>, not <i>an ancient beautiful temple</i>. Adjectives in a list before a noun are not separated by <i>and</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "They visited an impressive ancient temple. (opinion before age)"
        },
        {
          "type": "correct",
          "text": "It is a small traditional wooden house. (size–age/origin–material)"
        },
        {
          "type": "correct",
          "text": "She bought a beautiful little local carpet."
        },
        {
          "type": "correct",
          "text": "We saw colourful old festival costumes."
        },
        {
          "type": "incorrect",
          "text": "They visited an ancient impressive temple. (fact before opinion)"
        }
      ],
      "mistakes": [
        "Putting a fact before an opinion: <em>an old beautiful city</em> instead of <em>a beautiful old city</em>.",
        "Adding <em>and</em> between adjectives before a noun: <em>a small and old house</em> instead of <em>a small old house</em>.",
        "Reversing colour and material: <em>a wooden brown box</em> instead of <em>a brown wooden box</em>."
      ],
      "traps": [
        "Opinion adjectives (<em>lovely, impressive</em>) always come first; facts (<em>old, wooden</em>) follow.",
        "Origin and material sit close to the noun: <em>a Turkish silk scarf</em>.",
        "No <em>and</em> between adjectives before a noun, but <em>and</em> can join them after <em>be</em>: <em>The scarf is old and beautiful.</em>"
      ],
      "arabicInsight": "<p>عند اجتماع عدة صفات قبل الاسم تتبع ترتيبًا معتادًا: <b>رأي ← حجم ← عمر ← شكل ← لون ← أصل ← مادة ← غرض</b>. والقاعدة الأهم: صفة <b>الرأي</b> قبل صفات <b>الحقيقة</b> (<i>a beautiful ancient temple</i>)، ولا نضع <i>and</i> بين الصفات قبل الاسم. (درس إثرائي يكمّل G.1.4).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct order.",
          "options": [
            "an ancient impressive temple",
            "an impressive ancient temple",
            "an impressive temple ancient",
            "a temple impressive ancient"
          ],
          "answer": 1,
          "explain": "Opinion before fact: <em>impressive ancient</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which order is correct?",
          "options": [
            "a wooden small old house",
            "a small old wooden house",
            "an old wooden small house",
            "a wooden old small house"
          ],
          "answer": 1,
          "explain": "Size–age–material: <em>small old wooden</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct phrase.",
          "options": [
            "a brown beautiful carpet",
            "a beautiful brown carpet",
            "a brown carpet beautiful",
            "a beautiful carpet brown"
          ],
          "answer": 1,
          "explain": "Opinion before colour."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'We saw ____ costumes at the festival.'",
          "options": [
            "old colourful traditional",
            "colourful traditional old",
            "traditional colourful old",
            "colourful old traditional"
          ],
          "answer": 3,
          "explain": "Age before colour... pick the natural order: <em>colourful old traditional</em>? Best fit: opinion/colour–age–origin → <em>colourful old traditional</em>."
        },
        {
          "type": "fill",
          "prompt": "Reorder the two adjectives correctly (opinion first).",
          "sentence": "They explored a ____ ____ city. (ancient / beautiful)",
          "answers": [
            "beautiful ancient"
          ],
          "explain": "Opinion before fact."
        },
        {
          "type": "fill",
          "prompt": "Reorder correctly.",
          "sentence": "She wore a ____ ____ dress. (silk / lovely)",
          "answers": [
            "lovely silk"
          ],
          "explain": "Opinion before material."
        },
        {
          "type": "fill",
          "prompt": "Reorder correctly.",
          "sentence": "It is a ____ ____ village. (small / remote)",
          "answers": [
            "small remote"
          ],
          "explain": "Size before a describing fact."
        },
        {
          "type": "transform",
          "prompt": "Put in the usual order: <em>wooden / a / old / table</em>",
          "answer": [
            "an old wooden table"
          ],
          "explain": "Age before material."
        },
        {
          "type": "transform",
          "prompt": "Put in the usual order: <em>impressive / an / temple / stone</em>",
          "answer": [
            "an impressive stone temple"
          ],
          "explain": "Opinion before material."
        },
        {
          "type": "transform",
          "prompt": "Put in the usual order: <em>local / colourful / a / market</em>",
          "answer": [
            "a colourful local market"
          ],
          "explain": "Colour/opinion before origin."
        },
        {
          "type": "error",
          "prompt": "Correct the adjective order.",
          "given": "They visited an old beautiful palace.",
          "answer": [
            "they visited a beautiful old palace"
          ],
          "explain": "Opinion before fact."
        },
        {
          "type": "error",
          "prompt": "Correct the extra 'and'.",
          "given": "It is a small and traditional house.",
          "answer": [
            "it is a small traditional house"
          ],
          "explain": "No <em>and</em> between adjectives before a noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "They",
            "saw",
            "an",
            "impressive",
            "ancient",
            "temple"
          ],
          "answer": "They saw an impressive ancient temple",
          "explain": "Opinion before age."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "bought",
            "a",
            "beautiful",
            "little",
            "local",
            "carpet"
          ],
          "answer": "She bought a beautiful little local carpet",
          "explain": "Opinion–size–origin order."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its category.",
          "pairs": [
            {
              "l": "impressive",
              "r": "opinion"
            },
            {
              "l": "ancient",
              "r": "age"
            },
            {
              "l": "wooden",
              "r": "material"
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
            "a traditional lovely market",
            "a lovely traditional market",
            "a market lovely traditional",
            "a traditional market lovely"
          ],
          "answer": 1,
          "explain": "Opinion before fact: <em>lovely traditional</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which order is correct?",
          "options": [
            "a stone big old bridge",
            "a big old stone bridge",
            "an old big stone bridge",
            "a stone old big bridge"
          ],
          "answer": 1,
          "explain": "Size–age–material: <em>big old stone</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct phrase.",
          "options": [
            "a green beautiful valley",
            "a beautiful green valley",
            "a green valley beautiful",
            "a beautiful valley green"
          ],
          "answer": 1,
          "explain": "Opinion before colour."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'It is a ____ statue.'",
          "options": [
            "bronze tall ancient",
            "tall ancient bronze",
            "ancient bronze tall",
            "bronze ancient tall"
          ],
          "answer": 1,
          "explain": "Size–age–material: <em>tall ancient bronze</em>."
        },
        {
          "type": "fill",
          "prompt": "Reorder the two adjectives correctly (opinion first).",
          "sentence": "We saw a ____ ____ ruin. (impressive / ancient)",
          "answers": [
            "impressive ancient"
          ],
          "explain": "Opinion before fact."
        },
        {
          "type": "fill",
          "prompt": "Reorder correctly.",
          "sentence": "She admired a ____ ____ vase. (Chinese / delicate)",
          "answers": [
            "delicate chinese"
          ],
          "explain": "Opinion before origin."
        },
        {
          "type": "fill",
          "prompt": "Reorder correctly.",
          "sentence": "It is a ____ ____ town. (quiet / coastal)",
          "answers": [
            "quiet coastal"
          ],
          "explain": "Opinion before origin."
        },
        {
          "type": "transform",
          "prompt": "Put in the usual order: <em>brick / a / old / house</em>",
          "answer": [
            "an old brick house"
          ],
          "explain": "Age before material."
        },
        {
          "type": "transform",
          "prompt": "Put in the usual order: <em>lovely / a / scarf / silk</em>",
          "answer": [
            "a lovely silk scarf"
          ],
          "explain": "Opinion before material."
        },
        {
          "type": "transform",
          "prompt": "Put in the usual order: <em>traditional / a / colourful / costume</em>",
          "answer": [
            "a colourful traditional costume"
          ],
          "explain": "Colour before origin."
        },
        {
          "type": "error",
          "prompt": "Correct the adjective order.",
          "given": "We crossed an old impressive bridge.",
          "answer": [
            "we crossed an impressive old bridge"
          ],
          "explain": "Opinion before age."
        },
        {
          "type": "error",
          "prompt": "Correct the extra 'and'.",
          "given": "It is a quiet and remote village.",
          "answer": [
            "it is a quiet remote village"
          ],
          "explain": "No <em>and</em> before a noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "bought",
            "a",
            "lovely",
            "small",
            "wooden",
            "box"
          ],
          "answer": "She bought a lovely small wooden box",
          "explain": "Opinion–size–material order."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "They",
            "photographed",
            "a",
            "beautiful",
            "ancient",
            "temple"
          ],
          "answer": "They photographed a beautiful ancient temple",
          "explain": "Opinion before age."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its category.",
          "pairs": [
            {
              "l": "lovely",
              "r": "opinion"
            },
            {
              "l": "old",
              "r": "age"
            },
            {
              "l": "Chinese",
              "r": "origin"
            }
          ],
          "explain": "Opinion precedes the fact categories."
        }
      ]
    },
    "t2s8_L10_gradableAdj": {
      "id": "t2s8_L10_gradableAdj",
      "code": "Extension",
      "title": "Gradable & Non-Gradable Adjectives",
      "chapter": "Chapter 4 — World Village",
      "week": "Week 4/5 · World Village · teacher extension",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.RV.CS.6.1",
      "source_ccg": "Teacher extension (builds on G.1.4 Participle Adjectives) — not a separate CCG grammar code.",
      "vocabulary": [
        "enormous",
        "exhausted",
        "amazing",
        "terrified",
        "impossible",
        "huge",
        "essential",
        "fascinating"
      ],
      "explanation": [
        "<p><b>Gradable adjectives</b> describe qualities that can be stronger or weaker, so they take graders like <i>very</i>, <i>quite</i>, <i>a bit</i>, <i>extremely</i>: <i>very tired</i>, <i>quite big</i>, <i>extremely interesting</i>.</p>",
        "<p><b>Non-gradable</b> (extreme or absolute) adjectives already mean 'completely', so they do <u>not</u> take <i>very</i>. Use <i>absolutely</i>, <i>completely</i> or <i>totally</i> instead: <i>absolutely exhausted</i>, <i>completely impossible</i>. We say <i>absolutely enormous</i>, not <i>very enormous</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "The crowd was very large. (gradable + very)"
        },
        {
          "type": "correct",
          "text": "The stadium was absolutely enormous. (non-gradable + absolutely)"
        },
        {
          "type": "correct",
          "text": "Viewers were completely exhausted by the marathon broadcast."
        },
        {
          "type": "correct",
          "text": "The footage was quite shocking. (gradable + quite)"
        },
        {
          "type": "incorrect",
          "text": "The view was very amazing. (very + a non-gradable adjective)"
        }
      ],
      "mistakes": [
        "Using <em>very</em> with an extreme adjective: <em>very enormous</em> instead of <em>absolutely enormous</em>.",
        "Using <em>absolutely</em> with a gradable adjective: <em>absolutely big</em> instead of <em>absolutely huge</em> or <em>very big</em>.",
        "Treating <em>perfect</em>, <em>impossible</em> or <em>unique</em> as gradable: <em>more perfect</em> instead of leaving them absolute."
      ],
      "traps": [
        "<em>very</em> goes with gradable adjectives; <em>absolutely/completely</em> goes with extreme ones.",
        "<em>really</em> works with both: <em>really big</em> and <em>really enormous</em> are both fine.",
        "Extreme adjectives resist comparatives/superlatives: avoid <em>more impossible</em> or <em>most perfect</em>."
      ],
      "arabicInsight": "<p>الصفات <b>القابلة للتدرّج</b> (مثل big, tired) تقبل <i>very/quite</i>، أمّا الصفات <b>غير القابلة للتدرّج</b> أو المتطرّفة (مثل enormous, exhausted) فتعني أصلًا «تمامًا» فلا تأخذ <i>very</i> بل <b>absolutely/completely</b>. (درس إثرائي يكمّل G.1.4).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct intensifier.",
          "options": [
            "very enormous",
            "absolutely enormous",
            "quite enormous",
            "a bit enormous"
          ],
          "answer": 1,
          "explain": "Extreme adjective → <em>absolutely</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which pairing is correct?",
          "options": [
            "absolutely big",
            "very big",
            "absolutely tall",
            "quite huge wrongly"
          ],
          "answer": 1,
          "explain": "Gradable → <em>very</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the non-gradable adjective.",
          "options": [
            "large",
            "tired",
            "exhausted",
            "interesting"
          ],
          "answer": 2,
          "explain": "<em>exhausted</em> already means completely tired."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'The result was ____ impossible.'",
          "options": [
            "very",
            "a bit",
            "absolutely",
            "quite"
          ],
          "answer": 2,
          "explain": "Extreme adjective → <em>absolutely</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with very or absolutely.",
          "sentence": "The temple was ____ amazing.",
          "answers": [
            "absolutely"
          ],
          "explain": "<em>amazing</em> is extreme → <em>absolutely</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with very or absolutely.",
          "sentence": "The hall was ____ big.",
          "answers": [
            "very"
          ],
          "explain": "<em>big</em> is gradable → <em>very</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the right grader.",
          "sentence": "The audience felt ____ exhausted after the show.",
          "answers": [
            "absolutely",
            "completely",
            "totally"
          ],
          "explain": "Extreme → <em>absolutely/completely</em>."
        },
        {
          "type": "transform",
          "prompt": "Correct the intensifier: <em>The crowd was very huge.</em>",
          "answer": [
            "the crowd was absolutely huge"
          ],
          "explain": "<em>huge</em> is extreme → <em>absolutely</em>."
        },
        {
          "type": "transform",
          "prompt": "Correct the intensifier: <em>The film was absolutely good.</em>",
          "answer": [
            "the film was very good"
          ],
          "explain": "<em>good</em> is gradable → <em>very</em>."
        },
        {
          "type": "transform",
          "prompt": "Keep the absolute adjective absolute: <em>This plan is more perfect.</em>",
          "answer": [
            "this plan is perfect"
          ],
          "explain": "<em>perfect</em> is absolute; no comparative."
        },
        {
          "type": "error",
          "prompt": "Correct the intensifier.",
          "given": "The arena was very enormous.",
          "answer": [
            "the arena was absolutely enormous"
          ],
          "explain": "Extreme adjective → <em>absolutely</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the intensifier.",
          "given": "The walk was absolutely long.",
          "answer": [
            "the walk was very long"
          ],
          "explain": "<em>long</em> is gradable → <em>very</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "stadium",
            "was",
            "absolutely",
            "enormous",
            "inside"
          ],
          "answer": "The stadium was absolutely enormous inside",
          "explain": "Extreme adjective + <em>absolutely</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "documentary",
            "was",
            "very",
            "interesting",
            "overall"
          ],
          "answer": "The documentary was very interesting overall",
          "explain": "Gradable adjective + <em>very</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its correct grader.",
          "pairs": [
            {
              "l": "enormous",
              "r": "absolutely"
            },
            {
              "l": "big",
              "r": "very"
            },
            {
              "l": "exhausted",
              "r": "completely"
            }
          ],
          "explain": "Extreme adjectives take <em>absolutely/completely</em>; gradable take <em>very</em>."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct intensifier.",
          "options": [
            "very exhausted",
            "absolutely exhausted",
            "quite exhausted wrongly",
            "a bit exhausted"
          ],
          "answer": 1,
          "explain": "Extreme adjective → <em>absolutely</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which pairing is correct?",
          "options": [
            "absolutely tall",
            "very tall",
            "absolutely long",
            "completely big"
          ],
          "answer": 1,
          "explain": "Gradable → <em>very</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the non-gradable adjective.",
          "options": [
            "big",
            "cold",
            "terrified",
            "interesting"
          ],
          "answer": 2,
          "explain": "<em>terrified</em> already means extremely afraid."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'The design is ____ unique.'",
          "options": [
            "very",
            "a bit",
            "absolutely",
            "quite"
          ],
          "answer": 2,
          "explain": "Absolute adjective → <em>absolutely</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with very or absolutely.",
          "sentence": "The view was ____ fascinating.",
          "answers": [
            "absolutely"
          ],
          "explain": "<em>fascinating</em> is extreme → <em>absolutely</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with very or absolutely.",
          "sentence": "The crowd was ____ large.",
          "answers": [
            "very"
          ],
          "explain": "<em>large</em> is gradable → <em>very</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the right grader.",
          "sentence": "The task was ____ impossible without help.",
          "answers": [
            "absolutely",
            "completely",
            "totally"
          ],
          "explain": "Extreme → <em>absolutely/completely</em>."
        },
        {
          "type": "transform",
          "prompt": "Correct the intensifier: <em>The hall was very enormous.</em>",
          "answer": [
            "the hall was absolutely enormous"
          ],
          "explain": "Extreme → <em>absolutely</em>."
        },
        {
          "type": "transform",
          "prompt": "Correct the intensifier: <em>The show was absolutely interesting.</em>",
          "answer": [
            "the show was very interesting"
          ],
          "explain": "Gradable → <em>very</em>."
        },
        {
          "type": "transform",
          "prompt": "Keep the absolute adjective absolute: <em>It was the most impossible task.</em>",
          "answer": [
            "it was an impossible task"
          ],
          "explain": "<em>impossible</em> is absolute; avoid the superlative."
        },
        {
          "type": "error",
          "prompt": "Correct the intensifier.",
          "given": "The temple was very magnificent.",
          "answer": [
            "the temple was absolutely magnificent"
          ],
          "explain": "Extreme adjective → <em>absolutely</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the intensifier.",
          "given": "The trip was absolutely tiring but worth it.",
          "answer": [
            "the trip was very tiring but worth it"
          ],
          "explain": "<em>tiring</em> is gradable → <em>very</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "crowd",
            "was",
            "absolutely",
            "enormous",
            "that",
            "night"
          ],
          "answer": "The crowd was absolutely enormous that night",
          "explain": "Extreme adjective + <em>absolutely</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "The",
            "lecture",
            "was",
            "very",
            "informative",
            "today"
          ],
          "answer": "The lecture was very informative today",
          "explain": "Gradable adjective + <em>very</em>."
        },
        {
          "type": "match",
          "prompt": "Match each adjective to its correct grader.",
          "pairs": [
            {
              "l": "terrified",
              "r": "absolutely"
            },
            {
              "l": "cold",
              "r": "very"
            },
            {
              "l": "impossible",
              "r": "completely"
            }
          ],
          "explain": "Extreme → <em>absolutely/completely</em>; gradable → <em>very</em>."
        }
      ]
    }
  }
}
);
