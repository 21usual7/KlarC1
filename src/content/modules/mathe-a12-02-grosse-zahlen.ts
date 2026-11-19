import type { Module } from '../types.ts';

// A1.2 mathe 02: big numbers and places (lesson 0), decimal numbers and rounding in a shop (lesson 1).

export const module: Module = {
  id: 'mathe-a12-02-grosse-zahlen', sphere: 'mathe', level: 'A1.2',
  title: 'Große Zahlen', subtitle: 'Цифры, разряды, миллион, запятая и округление: числа в жизни.',
  words: [
    { id: 'mat-a12-02-ziffer', icon: 'Hash', de: 'Ziffer', pos: 'noun', article: 'die', plural: 'Ziffern', ru: 'цифра', note: 'Ziffer — знак (0–9), Zahl — число. Число 25 состоит из двух цифр.', collocation: { de: 'eine Zahl mit drei Ziffern', ru: 'трёхзначное число', accept: ['eine Zahl mit 3 Ziffern'] }, example: { de: 'Die Zahl 507 hat drei Ziffern.', ru: 'В числе 507 три цифры.', cloze: 'Ziffern' } },
    { id: 'mat-a12-02-stelle', icon: 'Columns3', de: 'Stelle', pos: 'noun', article: 'die', plural: 'Stellen', ru: 'разряд, позиция (цифры)', note: 'an der ersten Stelle — на первом месте; eine vierstellige Zahl — четырёхзначное число.', example: { de: 'An der ersten Stelle steht eine Fünf.', ru: 'На первом месте стоит пятёрка.', cloze: 'Stelle' } },
    { id: 'mat-a12-02-einer', icon: 'Dice1', de: 'Einer', pos: 'noun', article: 'der', plural: 'Einer', ru: 'единицы (разряд)', note: 'Разряды: Einer, Zehner, Hunderter, Tausender.', example: { de: 'Bei der Zahl 34 ist die Vier der Einer.', ru: 'В числе 34 четвёрка — это единицы.', cloze: 'Einer' } },
    { id: 'mat-a12-02-zehner', icon: 'Dice2', de: 'Zehner', pos: 'noun', article: 'der', plural: 'Zehner', ru: 'десятки (разряд)', example: { de: 'Die Zahl 34 hat drei Zehner.', ru: 'В числе 34 три десятка.', cloze: 'Zehner' } },
    { id: 'mat-a12-02-million', icon: 'Users', imageQuery: 'crowd of people city', de: 'Million', pos: 'noun', article: 'die', plural: 'Millionen', ru: 'миллион', note: 'Женский род! eine Million, zwei Millionen.', example: { de: 'Wien hat fast zwei Millionen Einwohner.', ru: 'В Вене почти два миллиона жителей.', cloze: 'Millionen' } },
    { id: 'mat-a12-02-milliarde', icon: 'Globe', de: 'Milliarde', pos: 'noun', article: 'die', plural: 'Milliarden', ru: 'миллиард', note: 'Ловушка: английское billion = немецкое Milliarde, а немецкое Billion — это триллион.', example: { de: 'Auf der Erde leben acht Milliarden Menschen.', ru: 'На Земле живут восемь миллиардов человек.', cloze: 'Milliarden' } },
    { id: 'mat-a12-02-einwohner', icon: 'Building2', imageQuery: 'Vienna city street people', de: 'Einwohner', pos: 'noun', article: 'der', plural: 'Einwohner', ru: 'житель', note: 'Ж. р.: die Einwohnerin. Wie viele Einwohner hat …? — Сколько жителей в …?', example: { de: 'Graz hat etwa 300 000 Einwohner.', ru: 'В Граце около 300 000 жителей.', cloze: 'Einwohner' } },
    { id: 'mat-a12-02-zaehlen', icon: 'ListOrdered', de: 'zählen', pos: 'verb', ru: 'считать (по порядку), пересчитывать', forms: 'er zählt · hat gezählt', note: 'zählen — считать предметы (1, 2, 3 …), rechnen — выполнять вычисления.', collocation: { de: 'bis zehn zählen', ru: 'считать до десяти', accept: ['bis 10 zählen'] }, example: { de: 'Mein kleiner Bruder zählt bis hundert.', ru: 'Мой младший брат считает до ста.', cloze: 'zählt' } },
    { id: 'mat-a12-02-komma', icon: 'Dot', de: 'Komma', pos: 'noun', article: 'das', plural: 'Kommas', ru: 'запятая (в десятичной дроби)', note: 'По-немецки дробную часть отделяют запятой: 1,5 — eins Komma fünf.', example: { de: 'Nach dem Komma stehen die Cent.', ru: 'После запятой стоят центы.', cloze: 'Komma' } },
    { id: 'mat-a12-02-dezimalzahl', icon: 'Binary', de: 'Dezimalzahl', pos: 'noun', article: 'die', plural: 'Dezimalzahlen', ru: 'десятичная дробь', parts: ['Dezimal', 'zahl'], example: { de: '2,5 ist eine Dezimalzahl.', ru: '2,5 — это десятичная дробь.', cloze: 'Dezimalzahl' } },
    { id: 'mat-a12-02-runden', icon: 'CircleDot', de: 'runden', pos: 'verb', ru: 'округлять', forms: 'er rundet · hat gerundet', note: 'auf + Akk runden: auf zwei Stellen runden — округлить до двух знаков.', collocation: { de: 'auf ganze Zahlen runden', ru: 'округлять до целых', accept: ['auf eine ganze Zahl runden'] }, example: { de: 'Wir runden das Ergebnis auf zwei Stellen.', ru: 'Мы округляем результат до двух знаков.', cloze: 'runden' } },
    { id: 'mat-a12-02-aufrunden', icon: 'ArrowUpToLine', de: 'aufrunden', pos: 'verb', ru: 'округлять в большую сторону', forms: 'er rundet auf · hat aufgerundet', note: 'Отделяемая приставка auf-: Ich runde auf.', example: { de: '2,85 runde ich auf 3 auf.', ru: '2,85 я округляю до 3.', cloze: 'runde' } },
    { id: 'mat-a12-02-abrunden', icon: 'ArrowDownToLine', de: 'abrunden', pos: 'verb', ru: 'округлять в меньшую сторону', forms: 'er rundet ab · hat abgerundet', example: { de: 'Sie rundet 1,19 auf 1 ab.', ru: 'Она округляет 1,19 до 1.', cloze: 'rundet' } },
    { id: 'mat-a12-02-ungefaehr', icon: 'Waves', de: 'ungefähr', pos: 'adv', ru: 'примерно, приблизительно', note: 'Синонимы: etwa, circa (ca.).', example: { de: 'Das kostet ungefähr fünf Euro.', ru: 'Это стоит примерно пять евро.', cloze: 'ungefähr' } },
    { id: 'mat-a12-02-genau', icon: 'Crosshair', de: 'genau', pos: 'adj', ru: 'точный; точно', note: 'В разговоре Genau! — «Точно! Именно!»', example: { de: 'Das Brot kostet genau zwei Euro.', ru: 'Хлеб стоит ровно два евро.', cloze: 'genau' } },
    { id: 'mat-a12-02-zahlenstrahl', icon: 'Ruler', de: 'Zahlenstrahl', pos: 'noun', article: 'der', plural: 'Zahlenstrahlen', ru: 'числовой луч', parts: ['Zahlen', 'strahl'], note: 'der Strahl — луч.', example: { de: 'Die Drei liegt auf dem Zahlenstrahl links von der Vier.', ru: 'Тройка лежит на числовом луче слева от четвёрки.', cloze: 'Zahlenstrahl' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wie viele Menschen leben in Wien?',
      de: `Lena macht ihre Hausaufgaben. Die Frage ist: Wie viele Einwohner hat Wien? Lena sucht im Internet. Wien hat fast 2 000 000 Einwohner. Das sind zwei Millionen. Die Zahl hat sieben Ziffern.

Ihr Bruder Tom fragt: „Und Österreich?“ Österreich hat etwa neun Millionen Einwohner. Tom zählt die Stellen: Einer, Zehner, Hunderter … Das ist schwer!

Dann fragt Lena: „Und wie viele Menschen leben auf der Erde?“ Die Antwort ist: acht Milliarden. Tom lacht: „So viele Nullen! So weit kann ich nicht zählen.“`,
      ru: `Лена делает домашнее задание. Вопрос такой: сколько жителей в Вене? Лена ищет в интернете. В Вене почти 2 000 000 жителей. Это два миллиона. В этом числе семь цифр.

Её брат Том спрашивает: «А в Австрии?» В Австрии около девяти миллионов жителей. Том считает разряды: единицы, десятки, сотни… Это трудно!

Потом Лена спрашивает: «А сколько людей живёт на Земле?» Ответ: восемь миллиардов. Том смеётся: «Столько нулей! Так далеко я считать не умею».`,
      gloss: { lena: 'Лена (имя)', tom: 'Том (имя)', wien: 'Вена', österreich: 'Австрия', frage: 'вопрос', fast: 'почти', etwa: 'около, примерно', hunderter: 'сотни (разряд)', schwer: 'трудный, тяжёлый', menschen: 'люди', leben: 'живут; жить', erde: 'Земля', nullen: 'нули', weit: 'далеко', lacht: 'смеётся', sucht: 'ищет', internet: 'интернет', so: 'так, такой' },
      questions: [
        { q: 'Wie viele Einwohner hat Wien?', ru: 'Сколько жителей в Вене?', options: ['Fast zwei Millionen', 'Etwa neun Millionen', 'Acht Milliarden'], answer: 'Fast zwei Millionen' },
        { q: 'Wie viele Ziffern hat die Zahl?', ru: 'Сколько цифр в этом числе?', options: ['Sieben', 'Sechs', 'Zwei'], answer: 'Sieben' },
        { q: 'Was kann Tom nicht?', ru: 'Чего не умеет Том?', options: ['So weit zählen', 'Im Internet suchen', 'Die Frage lesen'], answer: 'So weit zählen' },
      ],
      translate: [
        { de: 'Die Zahl hat sieben Ziffern.', ru: 'В числе семь цифр.', wrongRu: ['В числе шесть цифр.', 'В числе семь нулей.'] },
        { de: 'Wien hat zwei Millionen Einwohner.', ru: 'В Вене два миллиона жителей.', wrongRu: ['В Вене два миллиарда жителей.', 'В Австрии два миллиона жителей.'] },
        { de: 'Tom zählt die Stellen.', ru: 'Том считает разряды.', wrongRu: ['Том считает цифры.', 'Том пишет разряды.'] },
      ],
    },
    {
      lesson: 1, title: 'Rechnen im Supermarkt',
      de: `Mia kauft im Supermarkt ein. Die Milch kostet 1,19 Euro. Das ist eine Dezimalzahl. Vor dem Komma steht der Euro, nach dem Komma stehen die Cent.

Mia hat nicht viel Geld. Sie rechnet ungefähr und rundet die Preise. 1,19 Euro rundet sie auf 1 Euro ab. Das Brot kostet 2,85 Euro. Das rundet sie auf 3 Euro auf. Zusammen sind das ungefähr 4 Euro.

An der Kasse sagt die Frau: „Genau 4,04 Euro, bitte.“ Mia lacht. Ihre Rechnung war fast richtig. Zu Hause zeigt sie ihrem Bruder die Preise auf dem Zahlenstrahl.`,
      ru: `Мия делает покупки в супермаркете. Молоко стоит 1,19 евро. Это десятичная дробь. Перед запятой стоят евро, после запятой — центы.

У Мии мало денег. Она считает приблизительно и округляет цены. 1,19 евро она округляет вниз до 1 евро. Хлеб стоит 2,85 евро. Это она округляет вверх до 3 евро. Вместе получается примерно 4 евро.

На кассе женщина говорит: «Ровно 4,04 евро, пожалуйста». Мия смеётся. Её подсчёт был почти правильным. Дома она показывает брату цены на числовом луче.`,
      gloss: { mia: 'Мия (имя)', kauft: 'покупает (einkaufen — делать покупки)', supermarkt: 'супермаркет', milch: 'молоко', kostet: 'стоит', euro: 'евро', cent: 'цент, центы', vor: 'перед', nach: 'после', steht: 'стоит', stehen: 'стоят', geld: 'деньги', preise: 'цены', brot: 'хлеб', zusammen: 'вместе', kasse: 'касса', bitte: 'пожалуйста', lacht: 'смеётся', rechnung: 'подсчёт; счёт', war: 'был(а)', fast: 'почти', zeigt: 'показывает', zu: 'к; (zu Hause) дома', wie: 'как', viel: 'сколько; много', alles: 'всё' },
      questions: [
        { q: 'Was kostet die Milch?', ru: 'Сколько стоит молоко?', options: ['1,19 Euro', '2,85 Euro', '4,04 Euro'], answer: '1,19 Euro' },
        { q: 'Wie rundet Mia 2,85 Euro?', ru: 'Как Мия округляет 2,85 евро?', options: ['Auf 3 Euro', 'Auf 2 Euro', 'Auf 4 Euro'], answer: 'Auf 3 Euro' },
        { q: 'Wie viel kostet alles genau?', ru: 'Сколько точно стоит всё?', options: ['4,04 Euro', '4 Euro', '3 Euro'], answer: '4,04 Euro' },
      ],
      translate: [
        { de: 'Die Milch kostet ungefähr einen Euro.', ru: 'Молоко стоит примерно один евро.', wrongRu: ['Молоко стоит ровно один евро.', 'Хлеб стоит примерно один евро.'] },
        { de: 'Mia rundet den Preis auf.', ru: 'Мия округляет цену вверх.', wrongRu: ['Мия округляет цену вниз.', 'Мия записывает цену.'] },
        { de: 'Nach dem Komma stehen die Cent.', ru: 'После запятой стоят центы.', wrongRu: ['Перед запятой стоят центы.', 'После запятой стоят евро.'] },
      ],
    },
  ],
};
