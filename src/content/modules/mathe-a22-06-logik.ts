import type { Module } from '../types.ts';

// A2.2 mathe 06: statements, negation, implication, equivalence, quantifiers, truth tables (lesson 0), sets — subset, union, intersection, complement (lesson 1).

export const module: Module = {
  id: 'mathe-a22-06-logik', sphere: 'mathe', level: 'A2.2',
  title: 'Logik und Mengen', subtitle: 'Высказывание, отрицание, импликация, кванторы, подмножество, объединение и пересечение.',
  words: [
    { id: 'mat-a22-06-aussage', icon: 'MessageSquareQuote', de: 'Aussage', pos: 'noun', article: 'die', plural: 'Aussagen', ru: 'высказывание, утверждение', note: 'In der Logik ist eine Aussage entweder wahr oder falsch.', example: { de: 'Die Aussage „zwei ist gerade“ ist wahr.', ru: 'Высказывание «два — чётное» истинно.', cloze: 'Aussage' } },
    { id: 'mat-a22-06-wahr', icon: 'CircleCheck', de: 'wahr', pos: 'adj', ru: 'истинный, верный', note: 'Не путать с war (был).', example: { de: 'Ist diese Aussage wahr oder falsch?', ru: 'Это высказывание истинно или ложно?', cloze: 'wahr' } },
    { id: 'mat-a22-06-negation', icon: 'Ban', de: 'Negation', pos: 'noun', article: 'die', plural: 'Negationen', ru: 'отрицание', example: { de: 'Die Negation von „alle“ ist „nicht alle“.', ru: 'Отрицание «все» — это «не все».', cloze: 'Negation' } },
    { id: 'mat-a22-06-implikation', icon: 'ArrowRight', de: 'Implikation', pos: 'noun', article: 'die', plural: 'Implikationen', ru: 'импликация (следование)', note: 'A ⇒ B: „Aus A folgt B“, „wenn A, dann B“.', example: { de: 'Eine Implikation ist nur falsch, wenn A wahr und B falsch ist.', ru: 'Импликация ложна, только если A истинно, а B ложно.', cloze: 'Implikation' } },
    { id: 'mat-a22-06-aequivalenz', icon: 'ArrowLeftRight', de: 'Äquivalenz', pos: 'noun', article: 'die', plural: 'Äquivalenzen', ru: 'эквивалентность', note: 'A ⇔ B: „A genau dann, wenn B“.', example: { de: 'Für eine Äquivalenz musst du zwei Richtungen zeigen.', ru: 'Для эквивалентности нужно доказать два направления.', cloze: 'Äquivalenz' } },
    { id: 'mat-a22-06-quantor', icon: 'Sigma', de: 'Quantor', pos: 'noun', article: 'der', plural: 'Quantoren', ru: 'квантор', note: '„für alle“ (∀) — квантор всеобщности, „es gibt“ (∃) — квантор существования.', example: { de: '„Für alle“ ist ein Quantor.', ru: '«Для всех» — это квантор.', cloze: 'Quantor' } },
    { id: 'mat-a22-06-folgen', icon: 'ArrowDown', de: 'folgen', pos: 'verb', ru: 'следовать', forms: 'es folgt · ist gefolgt', note: 'aus + Dat folgen: Aus A folgt B. Perfekt с sein.', example: { de: 'Aus der Annahme folgt ein Widerspruch.', ru: 'Из предположения следует противоречие.', cloze: 'folgt' } },
    { id: 'mat-a22-06-wahrheitstafel', icon: 'Table', imageQuery: 'truth table', de: 'Wahrheitstafel', pos: 'noun', article: 'die', plural: 'Wahrheitstafeln', ru: 'таблица истинности', parts: ['Wahrheits', 'tafel'], example: { de: 'Die Wahrheitstafel hat vier Zeilen.', ru: 'В таблице истинности четыре строки.', cloze: 'Wahrheitstafel' } },
    { id: 'mat-a22-06-element', icon: 'Dot', de: 'Element', pos: 'noun', article: 'das', plural: 'Elemente', ru: 'элемент', note: 'x ∈ A: „x ist ein Element von A“.', example: { de: 'Sophie ist ein Element der Menge A.', ru: 'Софи — элемент множества A.', cloze: 'Element' } },
    { id: 'mat-a22-06-teilmenge', icon: 'CircleDot', de: 'Teilmenge', pos: 'noun', article: 'die', plural: 'Teilmengen', ru: 'подмножество', parts: ['Teil', 'menge'], example: { de: 'Die geraden Zahlen sind eine Teilmenge der ganzen Zahlen.', ru: 'Чётные числа — подмножество целых чисел.', cloze: 'Teilmenge' } },
    { id: 'mat-a22-06-vereinigung', icon: 'Combine', de: 'Vereinigung', pos: 'noun', article: 'die', plural: 'Vereinigungen', ru: 'объединение (множеств)', note: 'A ∪ B: „A vereinigt B“.', example: { de: 'Die Vereinigung enthält alle Elemente aus A und aus B.', ru: 'Объединение содержит все элементы из A и из B.', cloze: 'Vereinigung' } },
    { id: 'mat-a22-06-schnittmenge', icon: 'Blend', de: 'Schnittmenge', pos: 'noun', article: 'die', plural: 'Schnittmengen', ru: 'пересечение (множеств)', parts: ['Schnitt', 'menge'], note: 'A ∩ B: „A geschnitten B“.', example: { de: 'In der Schnittmenge sind nur gemeinsame Elemente.', ru: 'В пересечении только общие элементы.', cloze: 'Schnittmenge' } },
    { id: 'mat-a22-06-leer', icon: 'CircleSlash', de: 'leer', pos: 'adj', ru: 'пустой', note: 'die leere Menge (∅) — пустое множество.', example: { de: 'Die Schnittmenge ist leer.', ru: 'Пересечение пусто.', cloze: 'leer' } },
    { id: 'mat-a22-06-komplement', icon: 'SquareMinus', de: 'Komplement', pos: 'noun', article: 'das', plural: 'Komplemente', ru: 'дополнение (множества)', example: { de: 'Das Komplement von A sind alle Elemente, die nicht in A sind.', ru: 'Дополнение A — это все элементы, не входящие в A.', cloze: 'Komplement' } },
    { id: 'mat-a22-06-enthalten', icon: 'Package', de: 'enthalten', pos: 'verb', ru: 'содержать', forms: 'er enthält · hat enthalten', note: 'Сильный глагол: enthält – enthielt – enthalten. in + Dat enthalten sein — содержаться в.', example: { de: 'Die Menge enthält drei Elemente.', ru: 'Множество содержит три элемента.', cloze: 'enthält' } },
    { id: 'mat-a22-06-disjunkt', icon: 'Unlink2', de: 'disjunkt', pos: 'adj', ru: 'непересекающиеся', example: { de: 'Zwei Mengen sind disjunkt, wenn ihre Schnittmenge leer ist.', ru: 'Два множества не пересекаются, если их пересечение пусто.', cloze: 'disjunkt' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wenn es regnet …',
      de: `Die erste Woche in „Einführung in das mathematische Arbeiten“ beginnt mit Logik. Der Professor schreibt eine Aussage an die Tafel: „Wenn es regnet, ist die Straße nass.“ Das ist eine Implikation: Aus A folgt B.

„Ist auch die Umkehrung wahr?“, fragt er. Nein! Die Straße kann auch nass sein, weil ein Reinigungswagen gefahren ist. Eine Äquivalenz gilt nur, wenn beide Richtungen stimmen: A genau dann, wenn B.

Dann zeigt er die Wahrheitstafel. Eine Implikation ist nur dann falsch, wenn A wahr und B falsch ist. Zum Schluss geht es um Quantoren. Die Negation von „Für alle Studierenden gilt: Sie lieben Mathe“ ist nicht „Keiner liebt Mathe“, sondern „Es gibt mindestens einen, der Mathe nicht liebt“. Viele Studierende machen hier Fehler.`,
      ru: `Первая неделя курса «Введение в математическую работу» начинается с логики. Профессор пишет на доске высказывание: «Если идёт дождь, улица мокрая». Это импликация: из A следует B.

«А обратное утверждение тоже верно?» — спрашивает он. Нет! Улица может быть мокрой и потому, что проехала поливальная машина. Эквивалентность выполняется, только если верны оба направления: A тогда и только тогда, когда B.

Потом он показывает таблицу истинности. Импликация ложна только тогда, когда A истинно, а B ложно. В конце речь о кванторах. Отрицание фразы «Для всех студентов верно: они любят математику» — это не «Никто не любит математику», а «Есть хотя бы один, кто не любит математику». Многие студенты здесь ошибаются.`,
      gloss: { erste: 'первая', woche: 'неделя', einführung: 'введение', mathematische: 'математическую', arbeiten: 'работу; работать', beginnt: 'начинается', logik: 'логика', professor: 'профессор', schreibt: 'пишет', tafel: 'доска', wenn: 'если, когда', regnet: 'идёт дождь', straße: 'улица', nass: 'мокрая', a: 'A (высказывание)', b: 'B (высказывание)', auch: 'тоже; и', umkehrung: 'обратное утверждение', fragt: 'спрашивает', nein: 'нет', kann: 'может', weil: 'потому что', reinigungswagen: 'поливальная (уборочная) машина', gefahren: 'проехал', gilt: 'выполняется, верно', nur: 'только', beide: 'оба', richtungen: 'направления', stimmen: 'верны', genau: 'точно (genau dann, wenn — тогда и только тогда, когда)', dann: 'тогда', zeigt: 'показывает', schluss: 'конец (zum Schluss — в конце)', geht: '(es geht um) речь идёт о', um: 'о', quantoren: 'кванторы', alle: 'все', studierenden: 'студентов, студенты', lieben: 'любят', mathe: 'математика', keiner: 'никто', liebt: 'любит', sondern: 'а (после отрицания)', mindestens: 'хотя бы', einen: 'одного', viele: 'многие', studierende: 'студенты', machen: 'делают', was: 'что', wann: 'когда', welche: 'какая' },
      questions: [
        { q: 'Welche Aussage schreibt der Professor an die Tafel?', ru: 'Какое высказывание пишет профессор на доске?', options: ['Wenn es regnet, ist die Straße nass.', 'Die Straße ist immer nass.', 'Es regnet nie.'], answer: 'Wenn es regnet, ist die Straße nass.' },
        { q: 'Wann ist eine Implikation falsch?', ru: 'Когда импликация ложна?', options: ['Wenn A wahr und B falsch ist.', 'Wenn A falsch ist.', 'Wenn B wahr ist.'], answer: 'Wenn A wahr und B falsch ist.' },
        { q: 'Was ist die Negation von „Für alle gilt“?', ru: 'Что является отрицанием «для всех верно»?', options: ['Es gibt mindestens einen, für den es nicht gilt.', 'Für keinen gilt es.', 'Für alle gilt es nicht.'], answer: 'Es gibt mindestens einen, für den es nicht gilt.' },
      ],
      translate: [
        { de: 'Aus A folgt B.', ru: 'Из A следует B.', wrongRu: ['Из B следует A.', 'A и B эквивалентны.'] },
        { de: 'Die Umkehrung ist nicht wahr.', ru: 'Обратное утверждение неверно.', wrongRu: ['Обратное утверждение верно.', 'Отрицание неверно.'] },
        { de: 'Viele Studierende machen hier Fehler.', ru: 'Многие студенты здесь ошибаются.', wrongRu: ['Немногие студенты здесь ошибаются.', 'Многие студенты здесь правы.'] },
      ],
    },
    {
      lesson: 1, title: 'Wer besucht welche Vorlesung?',
      de: `In der Übung bekommt Sophie eine Aufgabe zu Mengen. A ist die Menge der Studierenden in Analysis, B die Menge der Studierenden in Lineare Algebra. Sophie ist ein Element von A und auch von B.

Die Vereinigung von A und B enthält alle, die mindestens eine der beiden Vorlesungen besuchen. In der Schnittmenge sind nur die Studierenden, die beide Vorlesungen besuchen, also auch Sophie.

C ist die Menge der Studierenden, die schon fertig sind und keine Vorlesung mehr besuchen. Die Schnittmenge von A und C ist leer, A und C sind also disjunkt. Zum Schluss fragt die Tutorin: „Ist A eine Teilmenge von B?“ Sophie denkt nach: „Nein, David ist in Analysis, aber nicht in Lineare Algebra. Er ist im Komplement von B.“`,
      ru: `На практике Софи получает задачу о множествах. A — множество студентов на курсе анализа, B — множество студентов на линейной алгебре. Софи — элемент A и также элемент B.

Объединение A и B содержит всех, кто посещает хотя бы одну из двух лекций. В пересечении только те студенты, кто посещает обе лекции, то есть и Софи.

C — множество студентов, которые уже закончили учёбу и больше не посещают лекций. Пересечение A и C пусто, значит, A и C не пересекаются. В конце тьютор спрашивает: «A — подмножество B?» Софи думает: «Нет, Давид на анализе, но не на линейной алгебре. Он в дополнении B».`,
      gloss: { übung: 'практическое занятие', bekommt: 'получает', sophie: 'Софи (имя)', aufgabe: 'задача', zu: 'о, по', mengen: 'множества, множествах', a: 'A (множество)', b: 'B (множество)', c: 'C (множество)', studierenden: 'студентов, студенты', analysis: 'математический анализ', lineare: 'линейная', algebra: 'алгебра', auch: 'также, и', alle: 'всех', mindestens: 'хотя бы', beiden: 'двух', vorlesungen: 'лекции, лекций', besuchen: 'посещают', nur: 'только', beide: 'обе', also: 'то есть; значит', schon: 'уже', fertig: 'закончили', keine: 'никакой', vorlesung: 'лекция', mehr: 'больше', schluss: 'конец (zum Schluss — в конце)', fragt: 'спрашивает', tutorin: 'тьютор (женщина)', denkt: 'думает (nachdenken — обдумывать)', nach: '(denkt nach) обдумывает', nein: 'нет', david: 'Давид (имя)', aber: 'но', wer: 'кто', besucht: 'посещает', welche: 'какую', was: 'что', wo: 'где', warum: 'почему' },
      questions: [
        { q: 'In welcher Menge sind die Studierenden, die beide Vorlesungen besuchen?', ru: 'В каком множестве студенты, посещающие обе лекции?', options: ['In der Schnittmenge', 'Im Komplement', 'In der leeren Menge'], answer: 'In der Schnittmenge' },
        { q: 'Warum sind A und C disjunkt?', ru: 'Почему A и C не пересекаются?', options: ['Ihre Schnittmenge ist leer.', 'Sie sind gleich.', 'C ist eine Teilmenge von A.'], answer: 'Ihre Schnittmenge ist leer.' },
        { q: 'Warum ist A keine Teilmenge von B?', ru: 'Почему A — не подмножество B?', options: ['David ist in A, aber nicht in B.', 'Sophie ist in A und B.', 'B ist leer.'], answer: 'David ist in A, aber nicht in B.' },
      ],
      translate: [
        { de: 'Sophie ist ein Element von A.', ru: 'Софи — элемент A.', wrongRu: ['Софи — подмножество A.', 'Софи не входит в A.'] },
        { de: 'Die Schnittmenge ist leer.', ru: 'Пересечение пусто.', wrongRu: ['Объединение пусто.', 'Пересечение содержит всех.'] },
        { de: 'A ist keine Teilmenge von B.', ru: 'A — не подмножество B.', wrongRu: ['A — подмножество B.', 'B — не подмножество A.'] },
      ],
    },
  ],
};
