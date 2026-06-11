/* ===== Grammar Academy DATA MODULE (CCG + marked extensions, validated) ===== */
/* Term 1 · AY 2026-27 · Grade 12 General (ENG.08) · Mourad Mekki Teacher Toolkit */
/* Unit 1 'Money Talks' (4 teacher extensions — no CCG grammar in Unit 1) + Unit 2 'Nail That Job' (4 CCG: G.17.4, G.1.6, G.9.7, G.18). 8 lessons / 240 questions. */
GA.register(
{
  "term": "T1-2627",
  "termLabel": "Term 1 · AY 2026–27",
  "grade": "12",
  "stream": "general",
  "streamLabel": "Grade 12 General Pathway",
  "cefr": "B2.1 (Stage 8 · ENG.08)",
  "source": "CCG Grade 12 General — Term 1 (AY 2026–27) · Units 1 (Money Talks) & 2 (Nail That Job). Unit 2 supplies the 4 CCG codes (G.17.4, G.1.6, G.9.7, G.18); Unit 1 has no CCG grammar, so its 4 lessons are teacher extensions marked 'Extension'.",
  "chapters": [
    {
      "id": "ch1",
      "title": "Chapter 1 — Money Talks",
      "lessons": [
        "t1s8_L1_firstCond",
        "t1s8_L2_modalsObligation",
        "t1s8_L3_gerundsInf",
        "t1s8_L4_presentPerfect"
      ]
    },
    {
      "id": "ch2",
      "title": "Chapter 2 — Nail That Job",
      "lessons": [
        "t1s8_L5_indirectQ",
        "t1s8_L6_compoundAdj",
        "t1s8_L7_compoundNouns",
        "t1s8_L8_reportedSpeech"
      ]
    }
  ],
  "lessons": {
    "t1s8_L1_firstCond": {
      "id": "t1s8_L1_firstCond",
      "code": "Extension",
      "title": "First Conditional",
      "chapter": "Chapter 1 — Money Talks",
      "week": "Unit 1 · Money Talks (teacher extension)",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.S.IP.4.1",
      "source_ccg": "Teacher extension — themed to Unit 1 (Money Talks), which has no grammar code in the CCG; not a CCG grammar code.",
      "vocabulary": [
        "budget",
        "income",
        "earn",
        "afford",
        "save",
        "loan",
        "scholarship",
        "make ends meet"
      ],
      "explanation": [
        "<p>The <b>first conditional</b> talks about a real or likely future result of a condition. Form: <b>if + present simple</b>, <b>will + base verb</b>. <i>If you stick to a budget, you <b>will</b> save money.</i> It is ideal for discussing financial choices and their consequences.</p>",
        "<p>The two clauses can swap order; use a <b>comma</b> only when the <i>if</i>-clause comes first: <i>If you overspend, you'll struggle.</i> = <i>You'll struggle if you overspend.</i> Never put <i>will</i> in the <i>if</i>-clause: <i>If you <u>save</u>…</i>, not <i>If you will save…</i>. You can replace <i>will</i> with <i>can/may/might</i> for ability or possibility.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "If you make a budget, you will spend less."
        },
        {
          "type": "correct",
          "text": "You won't get into debt if you live within your income."
        },
        {
          "type": "correct",
          "text": "If she earns more, she can afford the loan repayments."
        },
        {
          "type": "correct",
          "text": "If they don't save now, they will struggle later."
        },
        {
          "type": "incorrect",
          "text": "If you will save money, you will afford the trip. (will in the if-clause)"
        }
      ],
      "mistakes": [
        "Putting <em>will</em> in the <em>if</em>-clause: <em>If you will save</em> instead of <em>If you <u>save</u></em>.",
        "Forgetting the comma when the <em>if</em>-clause comes first: <em>If you overspend you'll struggle</em>.",
        "Using a past form in the result for a real future: <em>If you save, you would afford it</em> instead of <em>you <u>will</u> afford it</em>."
      ],
      "traps": [
        "Real/likely future → first conditional (<em>if + present, will + base</em>); don't mix in <em>would</em>.",
        "The comma appears only when the <em>if</em>-clause is first.",
        "<em>will</em> can become <em>can/may/might</em> to show ability or possibility in the result."
      ],
      "arabicInsight": "<p>الجملة الشرطية الأولى تعبّر عن نتيجة محتملة في المستقبل: <b>if + مضارع بسيط</b> ثم <b>will + فعل أساسي</b> (<i>If you save, you will afford it</i>). لا نضع <i>will</i> في جملة <i>if</i>، ونضع فاصلة فقط إذا تصدّرت جملة <i>if</i>. (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct first conditional.",
          "options": [
            "If you will save, you will afford it.",
            "If you save, you will afford it.",
            "If you save, you afford it.",
            "If you saved, you will afford it."
          ],
          "answer": 1,
          "explain": "<em>if + present</em>, <em>will + base</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which clause needs a comma after it?",
          "options": [
            "You'll save if you budget.",
            "If you budget you'll save.",
            "If you budget, you'll save.",
            "You'll save, if you budget."
          ],
          "answer": 2,
          "explain": "Comma when the <em>if</em>-clause is first."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct verb in the if-clause.",
          "options": [
            "If you will earn more…",
            "If you earn more…",
            "If you earned more…",
            "If you to earn more…"
          ],
          "answer": 1,
          "explain": "Present simple in the <em>if</em>-clause."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'If she repays the loan, she ____ debt-free.'",
          "options": [
            "is being",
            "will be",
            "would be",
            "was"
          ],
          "answer": 1,
          "explain": "Real future result → <em>will be</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the result clause.",
          "sentence": "If you spend less, you ____ (save) more.",
          "answers": [
            "will save",
            "'ll save"
          ],
          "explain": "<em>will + base verb</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the if-clause.",
          "sentence": "If you ____ (not / budget), you will overspend.",
          "answers": [
            "don't budget",
            "do not budget"
          ],
          "explain": "Present simple in the <em>if</em>-clause."
        },
        {
          "type": "fill",
          "prompt": "Complete with a modal of possibility.",
          "sentence": "If you get a scholarship, you ____ afford university.",
          "answers": [
            "can",
            "may",
            "might",
            "will"
          ],
          "explain": "Possibility in the result."
        },
        {
          "type": "transform",
          "prompt": "Join into a first conditional: <em>You save money. You afford the trip.</em>",
          "answer": [
            "if you save money you will afford the trip",
            "if you save money, you'll afford the trip"
          ],
          "explain": "<em>if + present</em>, <em>will + base</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with the result first: <em>If you overspend, you'll get into debt.</em>",
          "answer": [
            "you'll get into debt if you overspend",
            "you will get into debt if you overspend"
          ],
          "explain": "No comma when the result is first."
        },
        {
          "type": "transform",
          "prompt": "Correct the verb: <em>If you will earn more, you will save more.</em>",
          "answer": [
            "if you earn more you will save more",
            "if you earn more, you'll save more"
          ],
          "explain": "No <em>will</em> in the <em>if</em>-clause."
        },
        {
          "type": "error",
          "prompt": "Correct the if-clause.",
          "given": "If you will make a budget, you will spend less.",
          "answer": [
            "if you make a budget, you will spend less"
          ],
          "explain": "No <em>will</em> in the <em>if</em>-clause."
        },
        {
          "type": "error",
          "prompt": "Correct the missing comma.",
          "given": "If you take a loan you will pay interest.",
          "answer": [
            "if you take a loan, you will pay interest"
          ],
          "explain": "Comma when the <em>if</em>-clause is first."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "If",
            "you",
            "budget",
            "carefully",
            "you",
            "will",
            "save",
            "money"
          ],
          "answer": "If you budget carefully you will save money",
          "explain": "<em>if</em>-clause first + comma logic."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "will",
            "get",
            "into",
            "debt",
            "if",
            "you",
            "overspend"
          ],
          "answer": "You will get into debt if you overspend",
          "explain": "Result clause first, no comma."
        },
        {
          "type": "match",
          "prompt": "Match each clause to its verb form.",
          "pairs": [
            {
              "l": "the if-clause",
              "r": "present simple"
            },
            {
              "l": "the result clause",
              "r": "will + base verb"
            },
            {
              "l": "comma needed",
              "r": "when if-clause is first"
            }
          ],
          "explain": "First conditional: real/likely future."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct first conditional.",
          "options": [
            "If the company will cut costs, profits will rise.",
            "If the company cuts costs, profits will rise.",
            "If the company cuts costs, profits rise.",
            "If the company cut costs, profits will rise."
          ],
          "answer": 1,
          "explain": "<em>if + present</em>, <em>will + base</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which sentence is correctly punctuated?",
          "options": [
            "If prices rise people will spend less.",
            "If prices rise, people will spend less.",
            "People will spend less, if prices rise.",
            "If, prices rise people will spend less."
          ],
          "answer": 1,
          "explain": "Comma when the <em>if</em>-clause is first."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct verb in the if-clause.",
          "options": [
            "If you will spend less…",
            "If you spend less…",
            "If you spent less…",
            "If you to spend less…"
          ],
          "answer": 1,
          "explain": "Present simple in the <em>if</em>-clause."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'If he earns a wage, he ____ rent.'",
          "options": [
            "is affording",
            "will afford",
            "would afford",
            "afforded"
          ],
          "answer": 1,
          "explain": "Real future result → <em>will afford</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the result clause.",
          "sentence": "If you keep a budget, you ____ (avoid) debt.",
          "answers": [
            "will avoid",
            "'ll avoid"
          ],
          "explain": "<em>will + base verb</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the if-clause.",
          "sentence": "If she ____ (get) a scholarship, she will study abroad.",
          "answers": [
            "gets"
          ],
          "explain": "Present simple in the <em>if</em>-clause."
        },
        {
          "type": "fill",
          "prompt": "Complete with a modal of possibility.",
          "sentence": "If you save enough, you ____ buy a car.",
          "answers": [
            "can",
            "may",
            "might",
            "will"
          ],
          "explain": "Possibility in the result."
        },
        {
          "type": "transform",
          "prompt": "Join into a first conditional: <em>You spend wisely. You make ends meet.</em>",
          "answer": [
            "if you spend wisely you will make ends meet",
            "if you spend wisely, you'll make ends meet"
          ],
          "explain": "<em>if + present</em>, <em>will + base</em>."
        },
        {
          "type": "transform",
          "prompt": "Rewrite with the result first: <em>If you save, you'll afford the course.</em>",
          "answer": [
            "you'll afford the course if you save",
            "you will afford the course if you save"
          ],
          "explain": "No comma when the result is first."
        },
        {
          "type": "transform",
          "prompt": "Correct the verb: <em>If you will spend less, you will save more.</em>",
          "answer": [
            "if you spend less you will save more",
            "if you spend less, you'll save more"
          ],
          "explain": "No <em>will</em> in the <em>if</em>-clause."
        },
        {
          "type": "error",
          "prompt": "Correct the if-clause.",
          "given": "If you will repay the loan, your credit will improve.",
          "answer": [
            "if you repay the loan, your credit will improve"
          ],
          "explain": "No <em>will</em> in the <em>if</em>-clause."
        },
        {
          "type": "error",
          "prompt": "Correct the missing comma.",
          "given": "If you invest early you will earn more.",
          "answer": [
            "if you invest early, you will earn more"
          ],
          "explain": "Comma when the <em>if</em>-clause is first."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "If",
            "you",
            "save",
            "now",
            "you",
            "will",
            "avoid",
            "debt",
            "later"
          ],
          "answer": "If you save now you will avoid debt later",
          "explain": "<em>if</em>-clause first + comma logic."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "will",
            "struggle",
            "financially",
            "if",
            "you",
            "overspend"
          ],
          "answer": "You will struggle financially if you overspend",
          "explain": "Result clause first, no comma."
        },
        {
          "type": "match",
          "prompt": "Match each part to its rule.",
          "pairs": [
            {
              "l": "if-clause verb",
              "r": "present simple"
            },
            {
              "l": "result-clause verb",
              "r": "will + base"
            },
            {
              "l": "would",
              "r": "not used here"
            }
          ],
          "explain": "First conditional uses present + will."
        }
      ]
    },
    "t1s8_L2_modalsObligation": {
      "id": "t1s8_L2_modalsObligation",
      "code": "Extension",
      "title": "Modals of Obligation & Advice",
      "chapter": "Chapter 1 — Money Talks",
      "week": "Unit 1 · Money Talks (teacher extension)",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.S.IP.1.1",
      "source_ccg": "Teacher extension — themed to Unit 1 (Money Talks), which has no grammar code in the CCG; not a CCG grammar code.",
      "vocabulary": [
        "budget",
        "loan",
        "repay",
        "afford",
        "save",
        "income",
        "expense",
        "interest"
      ],
      "explanation": [
        "<p>Modal verbs express how necessary or advisable something is. <b>must</b> / <b>have to</b> = obligation (<i>You must repay the loan.</i>); <b>should</b> / <b>ought to</b> = advice (<i>You should save more.</i>); <b>mustn't</b> = prohibition; <b>don't have to</b> = no obligation. They are essential for giving financial advice.</p>",
        "<p>Modals are followed by the <b>base verb</b> with no <i>to</i> and no <i>-s</i> (except <i>have to</i> and <i>ought to</i>, which keep <i>to</i>): <i>She should budget</i>, never <i>should to budget</i> or <i>should budgets</i>. Note the key contrast: <b>mustn't</b> (it is forbidden) is very different from <b>don't have to</b> (it isn't necessary).</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "You must repay the loan on time."
        },
        {
          "type": "correct",
          "text": "You should put some money aside each month."
        },
        {
          "type": "correct",
          "text": "You don't have to buy the extended warranty."
        },
        {
          "type": "correct",
          "text": "She ought to track her expenses."
        },
        {
          "type": "incorrect",
          "text": "You should to save more money. (to after should)"
        }
      ],
      "mistakes": [
        "Adding <em>to</em> after <em>must/should</em>: <em>should to save</em> instead of <em>should <u>save</u></em>.",
        "Confusing <em>mustn't</em> (forbidden) with <em>don't have to</em> (not necessary).",
        "Adding <em>-s</em>: <em>He must repays</em> instead of <em>He must <u>repay</u></em>."
      ],
      "traps": [
        "<em>must/should</em> take the base verb (no <em>to</em>); <em>have to</em> and <em>ought to</em> keep <em>to</em>.",
        "<em>mustn't</em> = prohibition; <em>don't have to</em> = no obligation — opposite meanings.",
        "<em>have to</em> often shows an outside rule, while <em>must</em> can show the speaker's own authority."
      ],
      "arabicInsight": "<p>الأفعال الناقصة تبيّن درجة الإلزام أو النصح: <b>must/have to</b> للالتزام، <b>should/ought to</b> للنصح، <b>mustn't</b> للمنع، <b>don't have to</b> لعدم الضرورة. ويتبعها الفعل المجرّد عدا <i>have to/ought to</i> فيأخذان <i>to</i>. و<b>mustn't</b> تختلف تمامًا عن <b>don't have to</b>. (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct advice form.",
          "options": [
            "You should to budget monthly.",
            "You should budget monthly.",
            "You should budgets monthly.",
            "You should budgeting monthly."
          ],
          "answer": 1,
          "explain": "<em>should + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which shows there is NO obligation?",
          "options": [
            "You mustn't pay extra.",
            "You don't have to pay extra.",
            "You must pay extra.",
            "You should pay extra."
          ],
          "answer": 1,
          "explain": "No obligation → <em>don't have to</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the prohibition.",
          "options": [
            "You don't have to spend your savings.",
            "You mustn't spend your savings.",
            "You could spend your savings.",
            "You should spend your savings."
          ],
          "answer": 1,
          "explain": "Prohibition → <em>mustn't</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'You ____ repay the loan by Friday (a rule).'",
          "options": [
            "should",
            "could",
            "have to",
            "might"
          ],
          "answer": 2,
          "explain": "Outside rule → <em>have to</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a modal of advice.",
          "sentence": "You ____ keep track of your expenses.",
          "answers": [
            "should",
            "ought to"
          ],
          "explain": "Advice → <em>should/ought to</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the base verb.",
          "sentence": "You must ____ (repay) the loan on time.",
          "answers": [
            "repay"
          ],
          "explain": "Base verb after <em>must</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "You ought ____ save part of your income.",
          "answers": [
            "to"
          ],
          "explain": "<em>ought to</em>."
        },
        {
          "type": "transform",
          "prompt": "Give advice with <em>should</em>: <em>It is a good idea to make a budget.</em>",
          "answer": [
            "you should make a budget"
          ],
          "explain": "Advice → <em>should + base</em>."
        },
        {
          "type": "transform",
          "prompt": "Show no obligation with <em>don't have to</em>: <em>It isn't necessary to buy insurance.</em>",
          "answer": [
            "you don't have to buy insurance",
            "you do not have to buy insurance"
          ],
          "explain": "No obligation → <em>don't have to</em>."
        },
        {
          "type": "transform",
          "prompt": "Show prohibition with <em>mustn't</em>: <em>It is forbidden to share your PIN.</em>",
          "answer": [
            "you mustn't share your pin",
            "you must not share your pin"
          ],
          "explain": "Prohibition → <em>mustn't</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal form.",
          "given": "You should to track your spending.",
          "answer": [
            "you should track your spending"
          ],
          "explain": "No <em>to</em> after <em>should</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal form.",
          "given": "He must repays the loan this month.",
          "answer": [
            "he must repay the loan this month"
          ],
          "explain": "Base verb after <em>must</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "should",
            "put",
            "some",
            "money",
            "aside"
          ],
          "answer": "You should put some money aside",
          "explain": "<em>should + base verb</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "don't",
            "have",
            "to",
            "buy",
            "the",
            "warranty"
          ],
          "answer": "You don't have to buy the warranty",
          "explain": "<em>don't have to + base verb</em>."
        },
        {
          "type": "match",
          "prompt": "Match each modal to its meaning.",
          "pairs": [
            {
              "l": "must",
              "r": "obligation"
            },
            {
              "l": "should",
              "r": "advice"
            },
            {
              "l": "mustn't",
              "r": "prohibition"
            }
          ],
          "explain": "Modals take the base verb and add meaning."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct advice form.",
          "options": [
            "You should to save regularly.",
            "You should save regularly.",
            "You should saves regularly.",
            "You should saving regularly."
          ],
          "answer": 1,
          "explain": "<em>should + base verb</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which shows there is NO obligation?",
          "options": [
            "You mustn't tip the waiter.",
            "You don't have to tip the waiter.",
            "You must tip the waiter.",
            "You should tip the waiter."
          ],
          "answer": 1,
          "explain": "No obligation → <em>don't have to</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the prohibition.",
          "options": [
            "You don't have to overdraw your account.",
            "You mustn't overdraw your account.",
            "You could overdraw your account.",
            "You should overdraw your account."
          ],
          "answer": 1,
          "explain": "Prohibition → <em>mustn't</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'You ____ show ID to open an account (a rule).'",
          "options": [
            "should",
            "could",
            "have to",
            "might"
          ],
          "answer": 2,
          "explain": "Outside rule → <em>have to</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with a modal of advice.",
          "sentence": "You ____ compare prices before buying.",
          "answers": [
            "should",
            "ought to"
          ],
          "explain": "Advice → <em>should/ought to</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the base verb.",
          "sentence": "You must ____ (pay) the bill before the deadline.",
          "answers": [
            "pay"
          ],
          "explain": "Base verb after <em>must</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "You ought ____ set a monthly limit.",
          "answers": [
            "to"
          ],
          "explain": "<em>ought to</em>."
        },
        {
          "type": "transform",
          "prompt": "Give advice with <em>should</em>: <em>It is wise to save part of your wages.</em>",
          "answer": [
            "you should save part of your wages"
          ],
          "explain": "Advice → <em>should + base</em>."
        },
        {
          "type": "transform",
          "prompt": "Show no obligation with <em>don't have to</em>: <em>It isn't necessary to pay in cash.</em>",
          "answer": [
            "you don't have to pay in cash",
            "you do not have to pay in cash"
          ],
          "explain": "No obligation → <em>don't have to</em>."
        },
        {
          "type": "transform",
          "prompt": "Show prohibition with <em>mustn't</em>: <em>It is forbidden to lend your card.</em>",
          "answer": [
            "you mustn't lend your card",
            "you must not lend your card"
          ],
          "explain": "Prohibition → <em>mustn't</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal form.",
          "given": "You should to compare loan rates.",
          "answer": [
            "you should compare loan rates"
          ],
          "explain": "No <em>to</em> after <em>should</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the modal form.",
          "given": "She must saves for emergencies.",
          "answer": [
            "she must save for emergencies"
          ],
          "explain": "Base verb after <em>must</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "must",
            "repay",
            "the",
            "loan",
            "on",
            "time"
          ],
          "answer": "You must repay the loan on time",
          "explain": "<em>must + base verb</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "You",
            "ought",
            "to",
            "track",
            "your",
            "expenses"
          ],
          "answer": "You ought to track your expenses",
          "explain": "<em>ought to + base verb</em>."
        },
        {
          "type": "match",
          "prompt": "Match each modal to its meaning.",
          "pairs": [
            {
              "l": "have to",
              "r": "obligation (a rule)"
            },
            {
              "l": "ought to",
              "r": "advice"
            },
            {
              "l": "don't have to",
              "r": "no obligation"
            }
          ],
          "explain": "Modals take the base verb and add meaning."
        }
      ]
    },
    "t1s8_L3_gerundsInf": {
      "id": "t1s8_L3_gerundsInf",
      "code": "Extension",
      "title": "Gerunds & Infinitives after Verbs",
      "chapter": "Chapter 1 — Money Talks",
      "week": "Unit 1 · Money Talks (teacher extension)",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.S.IP.6.1",
      "source_ccg": "Teacher extension — themed to Unit 1 (Money Talks), which has no grammar code in the CCG; not a CCG grammar code.",
      "vocabulary": [
        "afford",
        "save",
        "invest",
        "budget",
        "manage",
        "earn",
        "spend",
        "borrow"
      ],
      "explanation": [
        "<p>Some verbs are followed by an <b>-ing form (gerund)</b>: <i>enjoy, avoid, consider, suggest, keep, finish</i>. <i>I <b>avoid borrowing</b> money.</i> Others take a <b>to-infinitive</b>: <i>want, decide, plan, hope, afford, manage, agree</i>. <i>We <b>decided to invest</b>.</i></p>",
        "<p>After a <b>preposition</b>, always use the <b>-ing</b> form: <i>good <u>at</u> saving</i>, <i>interested <u>in</u> investing</i>, <i>instead <u>of</u> spending</i>. The phrase <i>worth</i> also takes <i>-ing</i>: <i>It's worth saving.</i> A few verbs (<i>like, love, hate, start</i>) accept either form.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "We can't afford to waste money."
        },
        {
          "type": "correct",
          "text": "She avoids spending on luxuries."
        },
        {
          "type": "correct",
          "text": "They are good at managing a budget."
        },
        {
          "type": "correct",
          "text": "He decided to save for a car."
        },
        {
          "type": "incorrect",
          "text": "We can't afford wasting money. (afford + -ing)"
        }
      ],
      "mistakes": [
        "Using <em>-ing</em> after <em>afford/decide/plan</em>: <em>afford wasting</em> instead of <em>afford <u>to waste</u></em>.",
        "Using a to-infinitive after <em>avoid/consider/suggest</em>: <em>avoid to spend</em> instead of <em>avoid <u>spending</u></em>.",
        "Using a base verb after a preposition: <em>good at save</em> instead of <em>good at <u>saving</u></em>."
      ],
      "traps": [
        "<em>afford, decide, plan, hope, manage, agree</em> take <em>to</em>; <em>avoid, consider, suggest, keep, enjoy</em> take <em>-ing</em>.",
        "After any preposition, use <em>-ing</em>: <em>interested in <u>investing</u></em>.",
        "<em>worth</em> + <em>-ing</em>: <em>It's worth comparing prices.</em>"
      ],
      "arabicInsight": "<p>بعض الأفعال يتبعها <b>-ing</b> (avoid, consider, suggest, enjoy)، وبعضها <b>to + مصدر</b> (afford, decide, plan, manage). وبعد <b>حرف الجر</b> نستخدم دائمًا <b>-ing</b> (<i>good at saving</i>)، وكذلك بعد <b>worth</b>. (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct form after 'afford'.",
          "options": [
            "We can't afford wasting money.",
            "We can't afford to waste money.",
            "We can't afford waste money.",
            "We can't afford wastes money."
          ],
          "answer": 1,
          "explain": "<em>afford + to-infinitive</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which form follows 'avoid'?",
          "options": [
            "She avoids to spend.",
            "She avoids spending.",
            "She avoids spend.",
            "She avoids spends."
          ],
          "answer": 1,
          "explain": "<em>avoid + -ing</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct form after a preposition.",
          "options": [
            "He is good at save money.",
            "He is good at to save money.",
            "He is good at saving money.",
            "He is good at saves money."
          ],
          "answer": 2,
          "explain": "After a preposition → <em>-ing</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which is correct with 'decide'?",
          "options": [
            "They decided investing.",
            "They decided to invest.",
            "They decided invest.",
            "They decided invests."
          ],
          "answer": 1,
          "explain": "<em>decide + to-infinitive</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "We plan ____ (save) for a house.",
          "answers": [
            "to save"
          ],
          "explain": "<em>plan + to-infinitive</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "Consider ____ (open) a savings account.",
          "answers": [
            "opening"
          ],
          "explain": "<em>consider + -ing</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "She is interested in ____ (invest) early.",
          "answers": [
            "investing"
          ],
          "explain": "After a preposition → <em>-ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form: <em>manage + pay</em> the loan.",
          "answer": [
            "they managed to pay the loan",
            "we managed to pay the loan"
          ],
          "explain": "<em>manage + to-infinitive</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form: <em>avoid + borrow</em> money.",
          "answer": [
            "i avoid borrowing money",
            "we avoid borrowing money"
          ],
          "explain": "<em>avoid + -ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form after a preposition: <em>good at + budget</em>.",
          "answer": [
            "i am good at budgeting",
            "she is good at budgeting"
          ],
          "explain": "Preposition → <em>-ing</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "We can't afford buying a new car.",
          "answer": [
            "we can't afford to buy a new car"
          ],
          "explain": "<em>afford + to-infinitive</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "She avoids to spend on luxuries.",
          "answer": [
            "she avoids spending on luxuries"
          ],
          "explain": "<em>avoid + -ing</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "He",
            "decided",
            "to",
            "save",
            "for",
            "a",
            "car"
          ],
          "answer": "He decided to save for a car",
          "explain": "<em>decide + to-infinitive</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "is",
            "good",
            "at",
            "managing",
            "money"
          ],
          "answer": "She is good at managing money",
          "explain": "Preposition + <em>-ing</em>."
        },
        {
          "type": "match",
          "prompt": "Match each verb to the form it takes.",
          "pairs": [
            {
              "l": "afford",
              "r": "+ to-infinitive"
            },
            {
              "l": "avoid",
              "r": "+ -ing"
            },
            {
              "l": "good at",
              "r": "+ -ing"
            }
          ],
          "explain": "<em>to</em> after afford; <em>-ing</em> after avoid/prepositions."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct form after 'manage'.",
          "options": [
            "They managed saving enough.",
            "They managed to save enough.",
            "They managed save enough.",
            "They managed saves enough."
          ],
          "answer": 1,
          "explain": "<em>manage + to-infinitive</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which form follows 'consider'?",
          "options": [
            "He considered to invest.",
            "He considered investing.",
            "He considered invest.",
            "He considered invests."
          ],
          "answer": 1,
          "explain": "<em>consider + -ing</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct form after a preposition.",
          "options": [
            "She is interested in invest.",
            "She is interested in to invest.",
            "She is interested in investing.",
            "She is interested in invests."
          ],
          "answer": 2,
          "explain": "After a preposition → <em>-ing</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which is correct with 'hope'?",
          "options": [
            "We hope saving more.",
            "We hope to save more.",
            "We hope save more.",
            "We hope saves more."
          ],
          "answer": 1,
          "explain": "<em>hope + to-infinitive</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "They decided ____ (open) a joint account.",
          "answers": [
            "to open"
          ],
          "explain": "<em>decide + to-infinitive</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "Avoid ____ (spend) more than you earn.",
          "answers": [
            "spending"
          ],
          "explain": "<em>avoid + -ing</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct form.",
          "sentence": "He is keen on ____ (save) for the future.",
          "answers": [
            "saving"
          ],
          "explain": "After a preposition → <em>-ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form: <em>plan + invest</em> wisely.",
          "answer": [
            "we plan to invest wisely",
            "they plan to invest wisely"
          ],
          "explain": "<em>plan + to-infinitive</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form: <em>suggest + open</em> a savings account.",
          "answer": [
            "i suggest opening a savings account",
            "she suggested opening a savings account"
          ],
          "explain": "<em>suggest + -ing</em>."
        },
        {
          "type": "transform",
          "prompt": "Choose the right form after a preposition: <em>interested in + invest</em>.",
          "answer": [
            "i am interested in investing",
            "he is interested in investing"
          ],
          "explain": "Preposition → <em>-ing</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "They managed paying off the loan.",
          "answer": [
            "they managed to pay off the loan"
          ],
          "explain": "<em>manage + to-infinitive</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "He suggested to open an account.",
          "answer": [
            "he suggested opening an account"
          ],
          "explain": "<em>suggest + -ing</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "We",
            "managed",
            "to",
            "pay",
            "off",
            "the",
            "loan"
          ],
          "answer": "We managed to pay off the loan",
          "explain": "<em>manage + to-infinitive</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "is",
            "interested",
            "in",
            "investing",
            "early"
          ],
          "answer": "She is interested in investing early",
          "explain": "Preposition + <em>-ing</em>."
        },
        {
          "type": "match",
          "prompt": "Match each verb to the form it takes.",
          "pairs": [
            {
              "l": "manage",
              "r": "+ to-infinitive"
            },
            {
              "l": "consider",
              "r": "+ -ing"
            },
            {
              "l": "interested in",
              "r": "+ -ing"
            }
          ],
          "explain": "<em>to</em> after manage; <em>-ing</em> after consider/prepositions."
        }
      ]
    },
    "t1s8_L4_presentPerfect": {
      "id": "t1s8_L4_presentPerfect",
      "code": "Extension",
      "title": "Present Perfect vs Past Simple",
      "chapter": "Chapter 1 — Money Talks",
      "week": "Unit 1 · Money Talks (teacher extension)",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.S.F.1.1",
      "source_ccg": "Teacher extension — themed to Unit 1 (Money Talks), which has no grammar code in the CCG; not a CCG grammar code.",
      "vocabulary": [
        "save",
        "borrow",
        "earn",
        "spend",
        "invest",
        "budget",
        "afford",
        "repay"
      ],
      "explanation": [
        "<p>The <b>present perfect</b> (<b>have/has + past participle</b>) links the past to now: an experience (<i>Have you ever <b>borrowed</b> money?</i>), a recent action (<i>I've just <b>paid</b> the bill</i>), or an unfinished time period (<i>I've <b>saved</b> a lot this year</i>).</p>",
        "<p>The <b>past simple</b> describes a <b>finished</b> action at a specific past time: <i>I <b>borrowed</b> money last year.</i> Watch the time markers: <i>ever, never, just, already, yet, so far, since, for</i> → present perfect; <i>yesterday, last week, ago, in 2020</i> → past simple.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "I have saved enough for a deposit."
        },
        {
          "type": "correct",
          "text": "She borrowed money last month."
        },
        {
          "type": "correct",
          "text": "Have you ever been in debt?"
        },
        {
          "type": "correct",
          "text": "We haven't paid the bill yet."
        },
        {
          "type": "incorrect",
          "text": "I have borrowed money last year. (present perfect + 'last year')"
        }
      ],
      "mistakes": [
        "Using the present perfect with a finished-time marker: <em>I have saved yesterday</em> instead of <em>I <u>saved</u> yesterday</em>.",
        "Using the past simple with <em>since/for/yet</em>: <em>I saved since January</em> instead of <em>I <u>have saved</u> since January</em>.",
        "Wrong participle: <em>I have spend</em> instead of <em>I have <u>spent</u></em>."
      ],
      "traps": [
        "<em>ever, never, just, already, yet, since, for, so far</em> → present perfect.",
        "<em>yesterday, last…, …ago, in 2020</em> → past simple.",
        "Use the <em>past participle</em> after <em>have/has</em> (<em>spent, saved, borrowed</em>), not the base form."
      ],
      "arabicInsight": "<p>المضارع التام (<b>have/has + التصريف الثالث</b>) يربط الماضي بالحاضر: تجربة (<i>Have you ever borrowed…</i>)، أو فعل حديث، أو فترة غير منتهية (<i>this year</i>). والماضي البسيط لفعل منتهٍ في زمن محدّد (<i>last year</i>). الكلمات الدالة: <i>ever/just/since/for</i> ← مضارع تام، و<i>yesterday/last/ago</i> ← ماضٍ بسيط. (درس إثرائي).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct tense.",
          "options": [
            "I have saved $200 last month.",
            "I saved $200 last month.",
            "I save $200 last month.",
            "I had saved $200 last month."
          ],
          "answer": 1,
          "explain": "'last month' (finished time) → past simple."
        },
        {
          "type": "mcq",
          "prompt": "Which uses the present perfect correctly?",
          "options": [
            "I have paid the bill yesterday.",
            "I have just paid the bill.",
            "I paid the bill since Monday.",
            "I have pay the bill."
          ],
          "answer": 1,
          "explain": "<em>just</em> → present perfect with the participle."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct participle.",
          "options": [
            "She has spend all her wages.",
            "She has spent all her wages.",
            "She has spended all her wages.",
            "She has spending all her wages."
          ],
          "answer": 1,
          "explain": "<em>spend → spent</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'We ____ in debt since last year.'",
          "options": [
            "are",
            "were",
            "have been",
            "was"
          ],
          "answer": 2,
          "explain": "<em>since</em> → present perfect."
        },
        {
          "type": "fill",
          "prompt": "Complete with the present perfect.",
          "sentence": "I ____ (save) a lot of money this year.",
          "answers": [
            "have saved",
            "'ve saved"
          ],
          "explain": "Unfinished time → present perfect."
        },
        {
          "type": "fill",
          "prompt": "Complete with the past simple.",
          "sentence": "She ____ (borrow) money from the bank in 2022.",
          "answers": [
            "borrowed"
          ],
          "explain": "'in 2022' → past simple."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct participle.",
          "sentence": "Have you ever ____ (be) broke?",
          "answers": [
            "been"
          ],
          "explain": "<em>be → been</em> after <em>have</em>."
        },
        {
          "type": "transform",
          "prompt": "Make present perfect with 'just': <em>I / pay / the bill.</em>",
          "answer": [
            "i have just paid the bill",
            "i've just paid the bill"
          ],
          "explain": "<em>just</em> → present perfect."
        },
        {
          "type": "transform",
          "prompt": "Make past simple: <em>She / earn / a bonus / last year.</em>",
          "answer": [
            "she earned a bonus last year"
          ],
          "explain": "'last year' → past simple."
        },
        {
          "type": "transform",
          "prompt": "Correct the tense: <em>I have borrowed money last week.</em>",
          "answer": [
            "i borrowed money last week"
          ],
          "explain": "'last week' → past simple."
        },
        {
          "type": "error",
          "prompt": "Correct the tense.",
          "given": "We have repaid the loan yesterday.",
          "answer": [
            "we repaid the loan yesterday"
          ],
          "explain": "'yesterday' → past simple."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "She has spend all her savings.",
          "answer": [
            "she has spent all her savings"
          ],
          "explain": "Use the participle <em>spent</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "I",
            "have",
            "saved",
            "enough",
            "for",
            "a",
            "deposit"
          ],
          "answer": "I have saved enough for a deposit",
          "explain": "Present perfect + result now."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "borrowed",
            "money",
            "from",
            "the",
            "bank",
            "last",
            "year"
          ],
          "answer": "She borrowed money from the bank last year",
          "explain": "Past simple + finished time."
        },
        {
          "type": "match",
          "prompt": "Match each time word to its tense.",
          "pairs": [
            {
              "l": "since / for",
              "r": "present perfect"
            },
            {
              "l": "yesterday",
              "r": "past simple"
            },
            {
              "l": "just / already",
              "r": "present perfect"
            }
          ],
          "explain": "Time markers choose the tense."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct tense.",
          "options": [
            "She has borrowed money in 2021.",
            "She borrowed money in 2021.",
            "She borrows money in 2021.",
            "She had borrowed money in 2021."
          ],
          "answer": 1,
          "explain": "'in 2021' (finished time) → past simple."
        },
        {
          "type": "mcq",
          "prompt": "Which uses the present perfect correctly?",
          "options": [
            "I have invested yesterday.",
            "I have already invested my savings.",
            "I invested since March.",
            "I have invest my savings."
          ],
          "answer": 1,
          "explain": "<em>already</em> → present perfect with the participle."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct participle.",
          "options": [
            "He has earn a bonus.",
            "He has earned a bonus.",
            "He has earnt a bonus wrongly.",
            "He has earning a bonus."
          ],
          "answer": 1,
          "explain": "<em>earn → earned</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'They ____ for this house for years.'",
          "options": [
            "save",
            "saved",
            "have saved",
            "were saving"
          ],
          "answer": 2,
          "explain": "<em>for years</em> → present perfect."
        },
        {
          "type": "fill",
          "prompt": "Complete with the present perfect.",
          "sentence": "We ____ (not / pay) the bill yet.",
          "answers": [
            "haven't paid",
            "have not paid"
          ],
          "explain": "<em>yet</em> → present perfect."
        },
        {
          "type": "fill",
          "prompt": "Complete with the past simple.",
          "sentence": "He ____ (spend) all his wages last weekend.",
          "answers": [
            "spent"
          ],
          "explain": "'last weekend' → past simple."
        },
        {
          "type": "fill",
          "prompt": "Complete with the correct participle.",
          "sentence": "She has ____ (save) a lot so far.",
          "answers": [
            "saved"
          ],
          "explain": "Participle after <em>has</em>."
        },
        {
          "type": "transform",
          "prompt": "Make present perfect with 'already': <em>They / repay / the loan.</em>",
          "answer": [
            "they have already repaid the loan",
            "they've already repaid the loan"
          ],
          "explain": "<em>already</em> → present perfect."
        },
        {
          "type": "transform",
          "prompt": "Make past simple: <em>I / open / an account / yesterday.</em>",
          "answer": [
            "i opened an account yesterday"
          ],
          "explain": "'yesterday' → past simple."
        },
        {
          "type": "transform",
          "prompt": "Correct the tense: <em>She has earned a bonus last year.</em>",
          "answer": [
            "she earned a bonus last year"
          ],
          "explain": "'last year' → past simple."
        },
        {
          "type": "error",
          "prompt": "Correct the tense.",
          "given": "I have saved a lot last month.",
          "answer": [
            "i saved a lot last month"
          ],
          "explain": "'last month' → past simple."
        },
        {
          "type": "error",
          "prompt": "Correct the verb form.",
          "given": "They have borrow money from a friend.",
          "answer": [
            "they have borrowed money from a friend"
          ],
          "explain": "Use the participle <em>borrowed</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "We",
            "have",
            "not",
            "paid",
            "the",
            "bill",
            "yet"
          ],
          "answer": "We have not paid the bill yet",
          "explain": "Present perfect with <em>yet</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "He",
            "spent",
            "all",
            "his",
            "wages",
            "last",
            "weekend"
          ],
          "answer": "He spent all his wages last weekend",
          "explain": "Past simple + finished time."
        },
        {
          "type": "match",
          "prompt": "Match each time word to its tense.",
          "pairs": [
            {
              "l": "ever / never",
              "r": "present perfect"
            },
            {
              "l": "ago",
              "r": "past simple"
            },
            {
              "l": "so far",
              "r": "present perfect"
            }
          ],
          "explain": "Time markers choose the tense."
        }
      ]
    },
    "t1s8_L5_indirectQ": {
      "id": "t1s8_L5_indirectQ",
      "code": "G.17.4",
      "title": "Indirect Questions",
      "chapter": "Chapter 2 — Nail That Job",
      "week": "Unit 2 · Week 6 · Become Interviewers",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.L.CS.2.1",
      "source_ccg": "CCG Grade 12 General / Grade 11 Advanced — Term 1 (AY 2026–27) · Unit 2",
      "vocabulary": [
        "interview",
        "applicant",
        "position",
        "vacancy",
        "candidate",
        "qualification",
        "reference",
        "salary"
      ],
      "explanation": [
        "<p><b>Indirect (embedded) questions</b> are more polite and formal than direct questions — useful in a job interview. They begin with an opening phrase such as <i>Could you tell me…</i>, <i>Do you know…</i>, <i>I'd like to know…</i>, followed by the question information in <b>statement word order</b>.</p>",
        "<p>Two rules change from the direct form: there is <b>no inversion</b> (<i>…what the salary <u>is</u></i>, not <i>what is the salary</i>) and <b>no</b> <i>do/does/did</i> (<i>…when the interview <u>starts</u></i>, not <i>when does it start</i>). For yes/no questions, link with <b>if</b> or <b>whether</b>: <i>Could you tell me <u>if</u> the post is full-time?</i></p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "Could you tell me what the salary is?"
        },
        {
          "type": "correct",
          "text": "Do you know when the interview starts?"
        },
        {
          "type": "correct",
          "text": "I'd like to know if the position is still open."
        },
        {
          "type": "correct",
          "text": "Can you tell me how many references they need?"
        },
        {
          "type": "incorrect",
          "text": "Could you tell me what is the salary? (inversion kept)"
        }
      ],
      "mistakes": [
        "Keeping question inversion: <em>…what <u>is the salary</u></em> instead of <em>…what the salary <u>is</u></em>.",
        "Keeping <em>do/does/did</em>: <em>…when <u>does it start</u></em> instead of <em>…when it <u>starts</u></em>.",
        "Omitting <em>if/whether</em> in an embedded yes/no question: <em>Do you know the job is full-time?</em>"
      ],
      "traps": [
        "Use <b>statement order</b> after the opening phrase — subject before verb.",
        "Drop <em>do/does/did</em> and move the tense onto the main verb (<em>start → starts</em>).",
        "Yes/no questions need <em>if</em> or <em>whether</em>."
      ],
      "arabicInsight": "<p>الأسئلة غير المباشرة أكثر تهذيبًا ورسمية، تبدأ بعبارة مثل <i>Could you tell me…</i> ثم <b>ترتيب جملة خبرية</b> (الفاعل قبل الفعل) <b>دون</b> قلب و<b>دون</b> <i>do/does/did</i>. وفي سؤال نعم/لا نربط بـ <b>if/whether</b>. (G.17.4 من المنهج).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct indirect question.",
          "options": [
            "Could you tell me what is the salary?",
            "Could you tell me what the salary is?",
            "Could you tell me what does the salary?",
            "Could you tell me what salary is the?"
          ],
          "answer": 1,
          "explain": "Statement order: <em>what the salary is</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which removes 'do/does/did' correctly?",
          "options": [
            "Do you know when does it start?",
            "Do you know when it starts?",
            "Do you know when start it?",
            "Do you know when does start?"
          ],
          "answer": 1,
          "explain": "No <em>does</em>; tense on the main verb."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct yes/no link.",
          "options": [
            "I'd like to know is the job full-time.",
            "I'd like to know if the job is full-time.",
            "I'd like to know that the job full-time.",
            "I'd like to know does the job full-time."
          ],
          "answer": 1,
          "explain": "Yes/no → <em>if/whether</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Can you tell me where ____?'",
          "options": [
            "is the office",
            "the office is",
            "does the office",
            "the office does be"
          ],
          "answer": 1,
          "explain": "Statement order: <em>the office is</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete in statement order.",
          "sentence": "Could you tell me what time the interview ____ (start)?",
          "answers": [
            "starts"
          ],
          "explain": "No <em>does</em>; tense on the verb."
        },
        {
          "type": "fill",
          "prompt": "Complete with the yes/no link.",
          "sentence": "Do you know ____ the position is still open?",
          "answers": [
            "if",
            "whether"
          ],
          "explain": "Yes/no → <em>if/whether</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete in statement order.",
          "sentence": "I'd like to know how much the job ____ (pay).",
          "answers": [
            "pays"
          ],
          "explain": "Statement order, tense on the verb."
        },
        {
          "type": "transform",
          "prompt": "Make indirect: <em>What is the salary?</em> Begin with <em>Could you tell me…</em>",
          "answer": [
            "could you tell me what the salary is"
          ],
          "explain": "Statement order, no inversion."
        },
        {
          "type": "transform",
          "prompt": "Make indirect: <em>When does the interview start?</em> Begin with <em>Do you know…</em>",
          "answer": [
            "do you know when the interview starts"
          ],
          "explain": "Drop <em>does</em>; <em>start → starts</em>."
        },
        {
          "type": "transform",
          "prompt": "Make indirect (yes/no): <em>Is the job full-time?</em> Begin with <em>I'd like to know…</em>",
          "answer": [
            "i'd like to know if the job is full-time",
            "i would like to know if the job is full-time",
            "i'd like to know whether the job is full-time"
          ],
          "explain": "Yes/no → <em>if/whether</em> + statement order."
        },
        {
          "type": "error",
          "prompt": "Correct the indirect question.",
          "given": "Could you tell me what is the start date?",
          "answer": [
            "could you tell me what the start date is"
          ],
          "explain": "Statement order: no inversion."
        },
        {
          "type": "error",
          "prompt": "Correct the indirect question.",
          "given": "Do you know when does the interview begin?",
          "answer": [
            "do you know when the interview begins"
          ],
          "explain": "Drop <em>does</em>; tense on the verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct indirect question.",
          "bank": [
            "Could",
            "you",
            "tell",
            "me",
            "what",
            "the",
            "salary",
            "is"
          ],
          "answer": "Could you tell me what the salary is",
          "explain": "Opening phrase + statement order."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct indirect question.",
          "bank": [
            "Do",
            "you",
            "know",
            "if",
            "the",
            "position",
            "is",
            "open"
          ],
          "answer": "Do you know if the position is open",
          "explain": "Yes/no link + statement order."
        },
        {
          "type": "match",
          "prompt": "Match each direct question to its indirect link.",
          "pairs": [
            {
              "l": "What is it?",
              "r": "…what it is."
            },
            {
              "l": "When does it start?",
              "r": "…when it starts."
            },
            {
              "l": "Is it open?",
              "r": "…if it is open."
            }
          ],
          "explain": "No inversion; no do/does/did; if/whether for yes/no."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct indirect question.",
          "options": [
            "Do you know where is the office?",
            "Do you know where the office is?",
            "Do you know where does the office?",
            "Do you know where office is the?"
          ],
          "answer": 1,
          "explain": "Statement order: <em>where the office is</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which removes 'do/does/did' correctly?",
          "options": [
            "Could you tell me when does it finish?",
            "Could you tell me when it finishes?",
            "Could you tell me when finish it?",
            "Could you tell me when does finish?"
          ],
          "answer": 1,
          "explain": "No <em>does</em>; tense on the main verb."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct yes/no link.",
          "options": [
            "Can you tell me is the post permanent.",
            "Can you tell me if the post is permanent.",
            "Can you tell me that the post permanent.",
            "Can you tell me does the post permanent."
          ],
          "answer": 1,
          "explain": "Yes/no → <em>if/whether</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'I'd like to know how many people ____.'",
          "options": [
            "do they interview",
            "they interview",
            "interview they",
            "does they interview"
          ],
          "answer": 1,
          "explain": "Statement order: <em>they interview</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete in statement order.",
          "sentence": "Could you tell me where the interview ____ (take) place?",
          "answers": [
            "takes"
          ],
          "explain": "No <em>does</em>; tense on the verb."
        },
        {
          "type": "fill",
          "prompt": "Complete with the yes/no link.",
          "sentence": "Do you know ____ they offer training?",
          "answers": [
            "if",
            "whether"
          ],
          "explain": "Yes/no → <em>if/whether</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete in statement order.",
          "sentence": "I'd like to know what the role ____ (involve).",
          "answers": [
            "involves"
          ],
          "explain": "Statement order, tense on the verb."
        },
        {
          "type": "transform",
          "prompt": "Make indirect: <em>Where is the office?</em> Begin with <em>Could you tell me…</em>",
          "answer": [
            "could you tell me where the office is"
          ],
          "explain": "Statement order, no inversion."
        },
        {
          "type": "transform",
          "prompt": "Make indirect: <em>When does the contract end?</em> Begin with <em>Do you know…</em>",
          "answer": [
            "do you know when the contract ends"
          ],
          "explain": "Drop <em>does</em>; <em>end → ends</em>."
        },
        {
          "type": "transform",
          "prompt": "Make indirect (yes/no): <em>Is the role permanent?</em> Begin with <em>I'd like to know…</em>",
          "answer": [
            "i'd like to know if the role is permanent",
            "i would like to know if the role is permanent",
            "i'd like to know whether the role is permanent"
          ],
          "explain": "Yes/no → <em>if/whether</em> + statement order."
        },
        {
          "type": "error",
          "prompt": "Correct the indirect question.",
          "given": "Do you know where is the meeting room?",
          "answer": [
            "do you know where the meeting room is"
          ],
          "explain": "Statement order: no inversion."
        },
        {
          "type": "error",
          "prompt": "Correct the indirect question.",
          "given": "Could you tell me when does the shift end?",
          "answer": [
            "could you tell me when the shift ends"
          ],
          "explain": "Drop <em>does</em>; tense on the verb."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct indirect question.",
          "bank": [
            "Do",
            "you",
            "know",
            "when",
            "the",
            "interview",
            "starts"
          ],
          "answer": "Do you know when the interview starts",
          "explain": "Opening phrase + statement order."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct indirect question.",
          "bank": [
            "Could",
            "you",
            "tell",
            "me",
            "if",
            "the",
            "job",
            "is",
            "permanent"
          ],
          "answer": "Could you tell me if the job is permanent",
          "explain": "Yes/no link + statement order."
        },
        {
          "type": "match",
          "prompt": "Match each direct question to its indirect link.",
          "pairs": [
            {
              "l": "Where is it?",
              "r": "…where it is."
            },
            {
              "l": "When does it end?",
              "r": "…when it ends."
            },
            {
              "l": "Is it paid?",
              "r": "…if it is paid."
            }
          ],
          "explain": "No inversion; no do/does/did; if/whether for yes/no."
        }
      ]
    },
    "t1s8_L6_compoundAdj": {
      "id": "t1s8_L6_compoundAdj",
      "code": "G.1.6",
      "title": "Compound Adjectives",
      "chapter": "Chapter 2 — Nail That Job",
      "week": "Unit 2 · Week 7 · Career Trends",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.RV.S.3.3",
      "source_ccg": "CCG Grade 12 General / Grade 11 Advanced — Term 1 (AY 2026–27) · Unit 2",
      "vocabulary": [
        "well-paid",
        "full-time",
        "part-time",
        "high-pressure",
        "long-term",
        "entry-level",
        "fast-paced",
        "self-employed"
      ],
      "explanation": [
        "<p>A <b>compound adjective</b> joins two or more words into one describing word, usually with a <b>hyphen</b> before the noun: <i>a <b>well-paid</b> job</i>, <i>a <b>full-time</b> position</i>, <i>a <b>high-pressure</b> environment</i>. The hyphen shows the words work as a single idea.</p>",
        "<p>When a <b>number</b> is part of the compound, the noun inside stays <b>singular</b>: <i>a <b>five-year</b> contract</i> (not <i>five-years</i>), <i>a <b>ten-minute</b> break</i>. Do not hyphenate after an <i>-ly</i> adverb: <i>a highly paid worker</i> (no hyphen).</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "She found a well-paid, full-time job."
        },
        {
          "type": "correct",
          "text": "It is a high-pressure, fast-paced workplace."
        },
        {
          "type": "correct",
          "text": "They offered a five-year contract."
        },
        {
          "type": "correct",
          "text": "He prefers part-time, entry-level work."
        },
        {
          "type": "incorrect",
          "text": "They offered a five-years contract. (plural noun inside)"
        }
      ],
      "mistakes": [
        "Making the inner noun plural: <em>a five-years contract</em> instead of <em>a five-year contract</em>.",
        "Leaving out the hyphen before the noun: <em>a full time job</em> instead of <em>a full-time job</em>.",
        "Hyphenating after an <em>-ly</em> adverb: <em>a highly-paid role</em> instead of <em>a highly paid role</em>."
      ],
      "traps": [
        "Numbers keep the noun singular: <em>a three-month probation</em>, not <em>three-months</em>.",
        "No hyphen after an <em>-ly</em> adverb: <em>a poorly paid job</em>.",
        "Compounds are hyphenated before the noun; some stay hyphenated after <em>be</em> (<em>The job is full-time.</em>)."
      ],
      "arabicInsight": "<p>الصفة المركّبة تجمع كلمتين أو أكثر بوصفٍ واحد، وتُوصَل عادة <b>بشَرطة</b> قبل الاسم: <i>well-paid, full-time, high-pressure</i>. وإذا تضمّنت رقمًا يبقى الاسم الداخلي <b>مفردًا</b> (<i>a five-year contract</i>)، ولا نضع شَرطة بعد ظرف ينتهي بـ <i>-ly</i>. (G.1.6 من المنهج).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct compound adjective.",
          "options": [
            "a five-years contract",
            "a five-year contract",
            "a five year contract",
            "a five-years-contract"
          ],
          "answer": 1,
          "explain": "Number compound keeps the noun singular."
        },
        {
          "type": "mcq",
          "prompt": "Which is correctly hyphenated?",
          "options": [
            "a full time job",
            "a full-time job",
            "a fulltime job",
            "a full-time-job"
          ],
          "answer": 1,
          "explain": "Hyphen before the noun: <em>full-time</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct form after an -ly adverb.",
          "options": [
            "a highly-paid role",
            "a highly paid role",
            "a highlypaid role",
            "a high-ly paid role"
          ],
          "answer": 1,
          "explain": "No hyphen after an <em>-ly</em> adverb."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'It is a ____ workplace.'",
          "options": [
            "high pressure",
            "high-pressure",
            "high-pressures",
            "highly-pressure"
          ],
          "answer": 1,
          "explain": "Hyphenated compound before the noun."
        },
        {
          "type": "fill",
          "prompt": "Complete the compound with a hyphen.",
          "sentence": "She wants a well____paid position.",
          "answers": [
            "-"
          ],
          "explain": "Hyphen in <em>well-paid</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the number compound.",
          "sentence": "They signed a three-____ contract.",
          "answers": [
            "year",
            "month"
          ],
          "explain": "Singular noun inside the compound."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "He prefers part-____ work while studying.",
          "answers": [
            "time"
          ],
          "explain": "<em>part-time</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a compound adjective: <em>a job that is paid well</em>",
          "answer": [
            "a well-paid job"
          ],
          "explain": "<em>well-paid job</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a compound adjective: <em>a contract that lasts two years</em>",
          "answer": [
            "a two-year contract"
          ],
          "explain": "Number compound, singular noun."
        },
        {
          "type": "transform",
          "prompt": "Make a compound adjective: <em>a position at entry level</em>",
          "answer": [
            "an entry-level position"
          ],
          "explain": "<em>entry-level position</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the compound.",
          "given": "They offered a five-years contract.",
          "answer": [
            "they offered a five-year contract"
          ],
          "explain": "Singular noun inside: <em>five-year</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the hyphenation.",
          "given": "She has a full time job now.",
          "answer": [
            "she has a full-time job now"
          ],
          "explain": "Hyphen before the noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "found",
            "a",
            "well-paid",
            "full-time",
            "job"
          ],
          "answer": "She found a well-paid full-time job",
          "explain": "Compounds before the noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "They",
            "offered",
            "a",
            "five-year",
            "contract"
          ],
          "answer": "They offered a five-year contract",
          "explain": "Number compound, singular noun."
        },
        {
          "type": "match",
          "prompt": "Match each compound to its meaning.",
          "pairs": [
            {
              "l": "well-paid",
              "r": "with a good salary"
            },
            {
              "l": "full-time",
              "r": "the whole working week"
            },
            {
              "l": "entry-level",
              "r": "for beginners"
            }
          ],
          "explain": "Hyphens bind words into one adjective."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct compound adjective.",
          "options": [
            "a ten-minutes break",
            "a ten-minute break",
            "a ten minute break",
            "a ten-minutes-break"
          ],
          "answer": 1,
          "explain": "Number compound keeps the noun singular."
        },
        {
          "type": "mcq",
          "prompt": "Which is correctly hyphenated?",
          "options": [
            "a part time role",
            "a part-time role",
            "a parttime role",
            "a part-time-role"
          ],
          "answer": 1,
          "explain": "Hyphen before the noun: <em>part-time</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct form after an -ly adverb.",
          "options": [
            "a poorly-paid job",
            "a poorly paid job",
            "a poorlypaid job",
            "a poor-ly paid job"
          ],
          "answer": 1,
          "explain": "No hyphen after an <em>-ly</em> adverb."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'It is a ____ industry.'",
          "options": [
            "fast paced",
            "fast-paced",
            "fast-paces",
            "fastly-paced"
          ],
          "answer": 1,
          "explain": "Hyphenated compound before the noun."
        },
        {
          "type": "fill",
          "prompt": "Complete the compound with a hyphen.",
          "sentence": "He has a long____term goal.",
          "answers": [
            "-"
          ],
          "explain": "Hyphen in <em>long-term</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the number compound.",
          "sentence": "She passed a six-____ probation.",
          "answers": [
            "month",
            "week"
          ],
          "explain": "Singular noun inside the compound."
        },
        {
          "type": "fill",
          "prompt": "Complete with the missing word.",
          "sentence": "It is an entry-____ role for graduates.",
          "answers": [
            "level"
          ],
          "explain": "<em>entry-level</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a compound adjective: <em>an environment with high pressure</em>",
          "answer": [
            "a high-pressure environment"
          ],
          "explain": "<em>high-pressure environment</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a compound adjective: <em>a break of fifteen minutes</em>",
          "answer": [
            "a fifteen-minute break"
          ],
          "explain": "Number compound, singular noun."
        },
        {
          "type": "transform",
          "prompt": "Make a compound adjective: <em>a job that is full time</em>",
          "answer": [
            "a full-time job"
          ],
          "explain": "<em>full-time job</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the compound.",
          "given": "She took a ten-minutes break.",
          "answer": [
            "she took a ten-minute break"
          ],
          "explain": "Singular noun inside: <em>ten-minute</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the hyphenation.",
          "given": "He wants a part time position.",
          "answer": [
            "he wants a part-time position"
          ],
          "explain": "Hyphen before the noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "It",
            "is",
            "a",
            "high-pressure",
            "fast-paced",
            "workplace"
          ],
          "answer": "It is a high-pressure fast-paced workplace",
          "explain": "Compounds before the noun."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "He",
            "prefers",
            "part-time",
            "entry-level",
            "work"
          ],
          "answer": "He prefers part-time entry-level work",
          "explain": "Compounds before the noun."
        },
        {
          "type": "match",
          "prompt": "Match each compound to its meaning.",
          "pairs": [
            {
              "l": "part-time",
              "r": "fewer than full hours"
            },
            {
              "l": "long-term",
              "r": "over a long period"
            },
            {
              "l": "high-pressure",
              "r": "very demanding"
            }
          ],
          "explain": "Hyphens bind words into one adjective."
        }
      ]
    },
    "t1s8_L7_compoundNouns": {
      "id": "t1s8_L7_compoundNouns",
      "code": "G.9.7",
      "title": "Compound Nouns",
      "chapter": "Chapter 2 — Nail That Job",
      "week": "Unit 2 · Week 7 · Career Trends",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.RV.S.3.3",
      "source_ccg": "CCG Grade 12 General / Grade 11 Advanced — Term 1 (AY 2026–27) · Unit 2",
      "vocabulary": [
        "job interview",
        "cover letter",
        "career path",
        "job seeker",
        "work experience",
        "application form",
        "job title",
        "workplace"
      ],
      "explanation": [
        "<p>A <b>compound noun</b> combines two words (most often <b>noun + noun</b>) into one idea: <i>job interview, cover letter, career path, work experience</i>. They can be written as two words (<i>job interview</i>), hyphenated (<i>part-timer</i>) or one word (<i>workplace</i>).</p>",
        "<p>The <b>first word</b> usually acts like an adjective and stays <b>singular</b>: a <i>shoe shop</i> (not <i>shoes shop</i>), a <i>three-day course</i>. Stress normally falls on the <b>first</b> word: a <b>JOB</b> interview. To make it plural, change the <b>last</b> word: <i>job interviews</i>, <i>cover letters</i>.</p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "Bring your cover letter to the job interview."
        },
        {
          "type": "correct",
          "text": "She is mapping out her career path."
        },
        {
          "type": "correct",
          "text": "They asked about my work experience."
        },
        {
          "type": "correct",
          "text": "Complete the application form online."
        },
        {
          "type": "incorrect",
          "text": "Bring your cover letters to the jobs interview. (first word made plural)"
        }
      ],
      "mistakes": [
        "Making the first word plural: <em>a jobs interview</em> instead of <em>a <u>job</u> interview</em>.",
        "Pluralising the wrong word: <em>cover letter<u>s</u></em> is correct, not <em>cover<u>s</u> letter</em>.",
        "Splitting a fixed compound: <em>a path of career</em> instead of <em>a career path</em>."
      ],
      "traps": [
        "The first noun behaves like an adjective and stays singular: <em>work experience</em>, <em>job title</em>.",
        "Pluralise the <em>last</em> word: <em>application forms</em>, <em>job seekers</em>.",
        "Stress usually falls on the first element: a <em>CAReer path</em>."
      ],
      "arabicInsight": "<p>الاسم المركّب يجمع كلمتين (غالبًا اسم + اسم) بمعنى واحد: <i>job interview, cover letter, career path</i>. الكلمة <b>الأولى</b> تعمل كصفة وتبقى <b>مفردة</b> (<i>a shoe shop</i>)، والجمع يكون في الكلمة <b>الأخيرة</b> (<i>job interviews</i>). (G.9.7 من المنهج).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct compound noun.",
          "options": [
            "a jobs interview",
            "a job interview",
            "a job's interview",
            "an interview of job"
          ],
          "answer": 1,
          "explain": "First word singular: <em>job interview</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which plural is correct?",
          "options": [
            "covers letters",
            "cover letters",
            "cover letter's",
            "covers letter"
          ],
          "answer": 1,
          "explain": "Pluralise the last word: <em>cover letters</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct compound noun.",
          "options": [
            "a path career",
            "a career path",
            "a careers path",
            "a path of career"
          ],
          "answer": 1,
          "explain": "<em>career path</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Please fill in the ____.'",
          "options": [
            "form application",
            "applications form",
            "application form",
            "forms application"
          ],
          "answer": 2,
          "explain": "First word singular: <em>application form</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the compound noun.",
          "sentence": "Send your cover ____ with the CV.",
          "answers": [
            "letter"
          ],
          "explain": "<em>cover letter</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with the first word singular.",
          "sentence": "She has five years of ____ experience.",
          "answers": [
            "work"
          ],
          "explain": "First noun singular: <em>work experience</em>."
        },
        {
          "type": "fill",
          "prompt": "Make it plural.",
          "sentence": "All the job ____ arrived early. (seeker)",
          "answers": [
            "seekers"
          ],
          "explain": "Pluralise the last word."
        },
        {
          "type": "transform",
          "prompt": "Make a compound noun: <em>an interview for a job</em>",
          "answer": [
            "a job interview"
          ],
          "explain": "<em>job interview</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a compound noun: <em>a letter that covers your application</em>",
          "answer": [
            "a cover letter"
          ],
          "explain": "<em>cover letter</em>."
        },
        {
          "type": "transform",
          "prompt": "Make it plural: <em>application form</em>",
          "answer": [
            "application forms"
          ],
          "explain": "Pluralise the last word."
        },
        {
          "type": "error",
          "prompt": "Correct the compound noun.",
          "given": "Bring your CV to the jobs interview.",
          "answer": [
            "bring your cv to the job interview"
          ],
          "explain": "First word singular: <em>job interview</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the plural.",
          "given": "We received many covers letters.",
          "answer": [
            "we received many cover letters"
          ],
          "explain": "Pluralise the last word."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "She",
            "is",
            "planning",
            "her",
            "career",
            "path"
          ],
          "answer": "She is planning her career path",
          "explain": "Compound noun <em>career path</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "They",
            "asked",
            "about",
            "my",
            "work",
            "experience"
          ],
          "answer": "They asked about my work experience",
          "explain": "Compound noun <em>work experience</em>."
        },
        {
          "type": "match",
          "prompt": "Match each compound noun to its meaning.",
          "pairs": [
            {
              "l": "job interview",
              "r": "a meeting with an employer"
            },
            {
              "l": "cover letter",
              "r": "a letter sent with a CV"
            },
            {
              "l": "career path",
              "r": "a planned work route"
            }
          ],
          "explain": "First noun acts like an adjective; plural on the last word."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct compound noun.",
          "options": [
            "a jobs application",
            "a job application",
            "a job's application",
            "an application of job"
          ],
          "answer": 1,
          "explain": "First word singular: <em>job application</em>."
        },
        {
          "type": "mcq",
          "prompt": "Which plural is correct?",
          "options": [
            "jobs seekers",
            "job seekers",
            "job seeker's",
            "job's seekers"
          ],
          "answer": 1,
          "explain": "Pluralise the last word: <em>job seekers</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct compound noun.",
          "options": [
            "a title job",
            "a job title",
            "a jobs title",
            "a title of job"
          ],
          "answer": 1,
          "explain": "<em>job title</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete: 'Add it to your ____.'",
          "options": [
            "experience work",
            "work experience",
            "works experience",
            "experience of work"
          ],
          "answer": 1,
          "explain": "First word singular: <em>work experience</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete the compound noun.",
          "sentence": "Read the job ____ before applying.",
          "answers": [
            "description",
            "advert",
            "title"
          ],
          "explain": "A job + noun compound."
        },
        {
          "type": "fill",
          "prompt": "Complete with the first word singular.",
          "sentence": "He sent his ____ letter today.",
          "answers": [
            "cover"
          ],
          "explain": "<em>cover letter</em>."
        },
        {
          "type": "fill",
          "prompt": "Make it plural.",
          "sentence": "All the application ____ are online. (form)",
          "answers": [
            "forms"
          ],
          "explain": "Pluralise the last word."
        },
        {
          "type": "transform",
          "prompt": "Make a compound noun: <em>a seeker of a job</em>",
          "answer": [
            "a job seeker"
          ],
          "explain": "<em>job seeker</em>."
        },
        {
          "type": "transform",
          "prompt": "Make a compound noun: <em>a path for your career</em>",
          "answer": [
            "a career path"
          ],
          "explain": "<em>career path</em>."
        },
        {
          "type": "transform",
          "prompt": "Make it plural: <em>job interview</em>",
          "answer": [
            "job interviews"
          ],
          "explain": "Pluralise the last word."
        },
        {
          "type": "error",
          "prompt": "Correct the compound noun.",
          "given": "Fill in the forms application carefully.",
          "answer": [
            "fill in the application form carefully",
            "fill in the application forms carefully"
          ],
          "explain": "<em>application form(s)</em>, first word singular."
        },
        {
          "type": "error",
          "prompt": "Correct the plural.",
          "given": "She attended three jobs interviews.",
          "answer": [
            "she attended three job interviews"
          ],
          "explain": "First word singular; plural on the last word."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Send",
            "your",
            "cover",
            "letter",
            "with",
            "the",
            "CV"
          ],
          "answer": "Send your cover letter with the CV",
          "explain": "Compound noun <em>cover letter</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct sentence.",
          "bank": [
            "Complete",
            "the",
            "application",
            "form",
            "online"
          ],
          "answer": "Complete the application form online",
          "explain": "Compound noun <em>application form</em>."
        },
        {
          "type": "match",
          "prompt": "Match each compound noun to its meaning.",
          "pairs": [
            {
              "l": "job seeker",
              "r": "someone looking for work"
            },
            {
              "l": "work experience",
              "r": "time spent working"
            },
            {
              "l": "application form",
              "r": "a document you fill in"
            }
          ],
          "explain": "First noun acts like an adjective; plural on the last word."
        }
      ]
    },
    "t1s8_L8_reportedSpeech": {
      "id": "t1s8_L8_reportedSpeech",
      "code": "G.18",
      "title": "Reported Speech",
      "chapter": "Chapter 2 — Nail That Job",
      "week": "Unit 2 · Week 9 · My Dream Job",
      "cefr": "B2.1 (Stage 8 · ENG.08)",
      "moeSlo": "ENG.08.WR.P.2.1",
      "source_ccg": "CCG Grade 12 General / Grade 11 Advanced — Term 1 (AY 2026–27) · Unit 2",
      "vocabulary": [
        "apply",
        "applicant",
        "employer",
        "offer",
        "accept",
        "promotion",
        "colleague",
        "manager"
      ],
      "explanation": [
        "<p><b>Reported speech</b> tells what someone said without quoting them. The verb usually <b>shifts back</b> one tense: present → past, <i>will → would</i>, <i>can → could</i>, present perfect/past simple → past perfect. <i>\"I <b>am</b> nervous\"</i> → She said she <b>was</b> nervous.</p>",
        "<p>Pronouns and time/place words also change (<i>I → she</i>, <i>today → that day</i>, <i>tomorrow → the next day</i>, <i>here → there</i>). Use <b>say</b> with no listener and <b>tell</b> with a listener: <i>He <u>said</u> (that)…</i> / <i>He <u>told me</u> (that)…</i>. Reported questions use statement order (see indirect questions): <i>She asked <b>if</b> I <b>had</b> applied.</i></p>"
      ],
      "examples": [
        {
          "type": "correct",
          "text": "\"I am qualified\" → He said he was qualified."
        },
        {
          "type": "correct",
          "text": "\"We will call you\" → They said they would call me."
        },
        {
          "type": "correct",
          "text": "\"I can start Monday\" → She said she could start Monday."
        },
        {
          "type": "correct",
          "text": "\"Have you applied?\" → She asked if I had applied."
        },
        {
          "type": "incorrect",
          "text": "She said she will call me the next day. (will not backshifted)"
        }
      ],
      "mistakes": [
        "Not backshifting the tense: <em>He said he is qualified</em> instead of <em>he <u>was</u> qualified</em>.",
        "Keeping <em>will/can</em>: <em>said she will start</em> instead of <em>said she <u>would</u> start</em>.",
        "Using <em>tell</em> without a listener: <em>He told that…</em> instead of <em>He <u>said</u> that…</em> or <em>He <u>told me</u> that…</em>."
      ],
      "traps": [
        "Backshift: present → past, <em>will → would</em>, <em>can → could</em>.",
        "<em>say</em> takes no listener; <em>tell</em> needs one (<em>told me/him/her</em>).",
        "Reported questions use statement order with <em>if/whether</em> or a question word — no <em>do/does/did</em>."
      ],
      "arabicInsight": "<p>الكلام المنقول يحكي ما قاله شخص دون اقتباس مباشر، مع <b>تراجع الزمن</b>: مضارع ← ماضٍ، <i>will → would</i>، <i>can → could</i>، وتغيّر الضمائر وكلمات الزمان/المكان. نستخدم <b>say</b> دون مستمع و<b>tell</b> مع مستمع، والأسئلة المنقولة بترتيب الجملة الخبرية مع <i>if/whether</i>. (G.18 من المنهج).</p>",
      "practice": [
        {
          "type": "mcq",
          "prompt": "Choose the correct reported sentence.",
          "options": [
            "\"I am ready\" → He said he is ready.",
            "\"I am ready\" → He said he was ready.",
            "\"I am ready\" → He said he be ready.",
            "\"I am ready\" → He said he were ready."
          ],
          "answer": 1,
          "explain": "Backshift present → past."
        },
        {
          "type": "mcq",
          "prompt": "Which backshifts 'will' correctly?",
          "options": [
            "\"I will apply\" → She said she will apply.",
            "\"I will apply\" → She said she would apply.",
            "\"I will apply\" → She said she applies.",
            "\"I will apply\" → She said she apply."
          ],
          "answer": 1,
          "explain": "<em>will → would</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct verb: say or tell.",
          "options": [
            "He told that he was hired.",
            "He said me that he was hired.",
            "He told me that he was hired.",
            "He said to that he was hired."
          ],
          "answer": 2,
          "explain": "<em>tell + listener</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete the reported question: 'She asked ____ I had applied.'",
          "options": [
            "that",
            "if",
            "does",
            "do"
          ],
          "answer": 1,
          "explain": "Reported yes/no question → <em>if</em>."
        },
        {
          "type": "fill",
          "prompt": "Backshift the verb.",
          "sentence": "\"I can start today\" → He said he ____ start that day.",
          "answers": [
            "could"
          ],
          "explain": "<em>can → could</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with say or tell.",
          "sentence": "She ____ me that the job was full-time.",
          "answers": [
            "told"
          ],
          "explain": "<em>tell + listener</em>."
        },
        {
          "type": "fill",
          "prompt": "Backshift the verb.",
          "sentence": "\"We are hiring\" → They said they ____ hiring.",
          "answers": [
            "were"
          ],
          "explain": "<em>are → were</em>."
        },
        {
          "type": "transform",
          "prompt": "Report this: <em>\"I am qualified,\" she said.</em>",
          "answer": [
            "she said she was qualified",
            "she said that she was qualified"
          ],
          "explain": "Backshift present → past."
        },
        {
          "type": "transform",
          "prompt": "Report this: <em>\"We will call you,\" they said.</em> (to me)",
          "answer": [
            "they said they would call me",
            "they said that they would call me"
          ],
          "explain": "<em>will → would</em>, <em>you → me</em>."
        },
        {
          "type": "transform",
          "prompt": "Report this question: <em>\"Have you applied?\" she asked.</em>",
          "answer": [
            "she asked if i had applied",
            "she asked whether i had applied"
          ],
          "explain": "Reported question: <em>if</em> + backshift."
        },
        {
          "type": "error",
          "prompt": "Correct the backshift.",
          "given": "He said he will start the next day.",
          "answer": [
            "he said he would start the next day"
          ],
          "explain": "<em>will → would</em>."
        },
        {
          "type": "error",
          "prompt": "Correct say/tell.",
          "given": "She told that she had got the job.",
          "answer": [
            "she said that she had got the job",
            "she told me that she had got the job"
          ],
          "explain": "<em>say</em> (no listener) or <em>tell + listener</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct reported sentence.",
          "bank": [
            "She",
            "said",
            "she",
            "was",
            "qualified",
            "for",
            "the",
            "role"
          ],
          "answer": "She said she was qualified for the role",
          "explain": "Backshift present → past."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct reported sentence.",
          "bank": [
            "They",
            "said",
            "they",
            "would",
            "call",
            "me",
            "later"
          ],
          "answer": "They said they would call me later",
          "explain": "<em>will → would</em>."
        },
        {
          "type": "match",
          "prompt": "Match each direct form to its reported form.",
          "pairs": [
            {
              "l": "\"I am…\"",
              "r": "…he was…"
            },
            {
              "l": "\"I will…\"",
              "r": "…she would…"
            },
            {
              "l": "\"I can…\"",
              "r": "…he could…"
            }
          ],
          "explain": "Reported speech shifts the tense back."
        }
      ],
      "official": [
        {
          "type": "mcq",
          "prompt": "Choose the correct reported sentence.",
          "options": [
            "\"I am nervous\" → She said she is nervous.",
            "\"I am nervous\" → She said she was nervous.",
            "\"I am nervous\" → She said she be nervous.",
            "\"I am nervous\" → She said she were nervous."
          ],
          "answer": 1,
          "explain": "Backshift present → past."
        },
        {
          "type": "mcq",
          "prompt": "Which backshifts 'can' correctly?",
          "options": [
            "\"I can start\" → He said he can start.",
            "\"I can start\" → He said he could start.",
            "\"I can start\" → He said he starts.",
            "\"I can start\" → He said he start."
          ],
          "answer": 1,
          "explain": "<em>can → could</em>."
        },
        {
          "type": "mcq",
          "prompt": "Pick the correct verb: say or tell.",
          "options": [
            "She told that she was hired.",
            "She said me that she was hired.",
            "She told me that she was hired.",
            "She said to that she was hired."
          ],
          "answer": 2,
          "explain": "<em>tell + listener</em>."
        },
        {
          "type": "mcq",
          "prompt": "Complete the reported question: 'He asked ____ I was available.'",
          "options": [
            "that",
            "whether",
            "does",
            "do"
          ],
          "answer": 1,
          "explain": "Reported yes/no question → <em>whether/if</em>."
        },
        {
          "type": "fill",
          "prompt": "Backshift the verb.",
          "sentence": "\"I will accept the offer\" → She said she ____ accept the offer.",
          "answers": [
            "would"
          ],
          "explain": "<em>will → would</em>."
        },
        {
          "type": "fill",
          "prompt": "Complete with say or tell.",
          "sentence": "He ____ that the interview went well.",
          "answers": [
            "said"
          ],
          "explain": "<em>say</em> with no listener."
        },
        {
          "type": "fill",
          "prompt": "Backshift the verb.",
          "sentence": "\"I am applying\" → He said he ____ applying.",
          "answers": [
            "was"
          ],
          "explain": "<em>am → was</em>."
        },
        {
          "type": "transform",
          "prompt": "Report this: <em>\"I am available,\" he said.</em>",
          "answer": [
            "he said he was available",
            "he said that he was available"
          ],
          "explain": "Backshift present → past."
        },
        {
          "type": "transform",
          "prompt": "Report this: <em>\"I can start Monday,\" she said.</em>",
          "answer": [
            "she said she could start monday",
            "she said that she could start monday"
          ],
          "explain": "<em>can → could</em>."
        },
        {
          "type": "transform",
          "prompt": "Report this question: <em>\"Did you apply?\" he asked.</em>",
          "answer": [
            "he asked if i had applied",
            "he asked whether i had applied"
          ],
          "explain": "Reported question: <em>if</em> + backshift, no <em>did</em>."
        },
        {
          "type": "error",
          "prompt": "Correct the backshift.",
          "given": "She said she will call me tomorrow.",
          "answer": [
            "she said she would call me the next day",
            "she said she would call me"
          ],
          "explain": "<em>will → would</em> (and time shift)."
        },
        {
          "type": "error",
          "prompt": "Correct say/tell.",
          "given": "He told that he had accepted the job.",
          "answer": [
            "he said that he had accepted the job",
            "he told me that he had accepted the job"
          ],
          "explain": "<em>say</em> (no listener) or <em>tell + listener</em>."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct reported sentence.",
          "bank": [
            "He",
            "said",
            "he",
            "was",
            "available",
            "for",
            "an",
            "interview"
          ],
          "answer": "He said he was available for an interview",
          "explain": "Backshift present → past."
        },
        {
          "type": "reorder",
          "prompt": "Reorder into a correct reported sentence.",
          "bank": [
            "She",
            "said",
            "she",
            "could",
            "start",
            "on",
            "Monday"
          ],
          "answer": "She said she could start on Monday",
          "explain": "<em>can → could</em>."
        },
        {
          "type": "match",
          "prompt": "Match each direct form to its reported form.",
          "pairs": [
            {
              "l": "\"We are…\"",
              "r": "…they were…"
            },
            {
              "l": "\"I will…\"",
              "r": "…he would…"
            },
            {
              "l": "\"I have applied\"",
              "r": "…she had applied."
            }
          ],
          "explain": "Reported speech shifts the tense back."
        }
      ]
    }
  }
}
);
