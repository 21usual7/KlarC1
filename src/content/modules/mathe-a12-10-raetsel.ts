import type { Module } from '../types.ts';

// A1.2 mathe 10: a number sequence puzzle with grandpa (lesson 0), chess and sudoku — moves, strategy, a draw (lesson 1).

export const module: Module = {
  id: 'mathe-a12-10-raetsel', sphere: 'mathe', level: 'A1.2',
  title: 'Rätsel und Spiele', subtitle: 'Загадка, закономерность, подсказка, шахматы и судоку: математика для удовольствия.',
  words: [
    { id: 'mat-a12-10-raetsel', icon: 'Puzzle', imageQuery: 'jigsaw puzzle pieces', de: 'Rätsel', pos: 'noun', article: 'das', plural: 'Rätsel', ru: 'загадка, головоломка', note: 'ein Rätsel lösen — решить загадку.', collocation: { de: 'ein Rätsel lösen', ru: 'решить загадку', accept: ['das Rätsel lösen'] }, example: { de: 'Opa hat ein neues Rätsel für Lena.', ru: 'У дедушки новая загадка для Лены.', cloze: 'Rätsel' } },
    { id: 'mat-a12-10-raten', icon: 'CircleHelp', de: 'raten', pos: 'verb', ru: 'угадывать; советовать', forms: 'er rät · hat geraten', note: 'Сильный глагол: du rätst, er rät. Rate mal! — Угадай!', example: { de: 'Lena rät: „Zwanzig?“', ru: 'Лена пытается угадать: «Двадцать?»', cloze: 'rät' } },
    { id: 'mat-a12-10-reihe', icon: 'ListOrdered', imageQuery: 'row of chairs', de: 'Reihe', pos: 'noun', article: 'die', plural: 'Reihen', ru: 'ряд, последовательность', note: 'Du bist an der Reihe! — Твоя очередь!', example: { de: 'Wie geht die Reihe weiter?', ru: 'Как продолжается ряд?', cloze: 'Reihe' } },
    { id: 'mat-a12-10-muster', icon: 'Grid3x3', imageQuery: 'pattern tiles', de: 'Muster', pos: 'noun', article: 'das', plural: 'Muster', ru: 'закономерность; узор', example: { de: 'Siehst du das Muster?', ru: 'Видишь закономерность?', cloze: 'Muster' } },
    { id: 'mat-a12-10-regel', icon: 'BookOpenCheck', de: 'Regel', pos: 'noun', article: 'die', plural: 'Regeln', ru: 'правило', example: { de: 'Die Regel ist: immer mal zwei.', ru: 'Правило такое: каждый раз умножать на два.', cloze: 'Regel' } },
    { id: 'mat-a12-10-hinweis', icon: 'Info', de: 'Hinweis', pos: 'noun', article: 'der', plural: 'Hinweise', ru: 'подсказка, указание', note: 'einen Hinweis geben — дать подсказку.', example: { de: 'Opa gibt Lena einen Hinweis.', ru: 'Дедушка даёт Лене подсказку.', cloze: 'Hinweis' } },
    { id: 'mat-a12-10-fortsetzen', icon: 'ArrowRight', de: 'fortsetzen', pos: 'verb', ru: 'продолжать', forms: 'er setzt fort · hat fortgesetzt', note: 'Отделяемая приставка fort- (дальше). Setz die Reihe fort! — Продолжи ряд!', example: { de: 'Lena setzt die Reihe fort.', ru: 'Лена продолжает ряд.', cloze: 'setzt' } },
    { id: 'mat-a12-10-knobeln', icon: 'Brain', de: 'knobeln', pos: 'verb', ru: 'ломать голову (над задачей)', forms: 'er knobelt · hat geknobelt', note: 'Разговорное. die Knobelaufgabe — задача на смекалку.', example: { de: 'Lena knobelt gern an Rätseln.', ru: 'Лена любит ломать голову над загадками.', cloze: 'knobelt' } },
    { id: 'mat-a12-10-schach', icon: 'Crown', imageQuery: 'chess board pieces', de: 'Schach', pos: 'noun', article: 'das', ru: 'шахматы', note: 'В немецком — ед. ч.: Schach spielen. Schachmatt! — Шах и мат!', example: { de: 'Am Abend spielt Lena mit Opa Schach.', ru: 'Вечером Лена играет с дедушкой в шахматы.', cloze: 'Schach' } },
    { id: 'mat-a12-10-zug', icon: 'MoveRight', imageQuery: 'chess move', de: 'Zug', pos: 'noun', article: 'der', plural: 'Züge', ru: 'ход (в игре)', note: 'Ещё значение: поезд. Du bist am Zug — твой ход.', example: { de: 'Das war ein schlechter Zug.', ru: 'Это был плохой ход.', cloze: 'Zug' } },
    { id: 'mat-a12-10-strategie', icon: 'Target', imageQuery: 'chess board', de: 'Strategie', pos: 'noun', article: 'die', plural: 'Strategien', ru: 'стратегия', note: 'Ударение на последний слог: Strate-GIE.', example: { de: 'Opa hat immer eine gute Strategie.', ru: 'У дедушки всегда хорошая стратегия.', cloze: 'Strategie' } },
    { id: 'mat-a12-10-gewinnen', icon: 'Trophy', de: 'gewinnen', pos: 'verb', ru: 'выигрывать, побеждать', forms: 'er gewinnt · hat gewonnen', note: 'Сильный глагол: gewann – gewonnen.', example: { de: 'Opa gewinnt fast immer.', ru: 'Дедушка почти всегда выигрывает.', cloze: 'gewinnt' } },
    { id: 'mat-a12-10-verlieren', icon: 'ThumbsDown', de: 'verlieren', pos: 'verb', ru: 'проигрывать; терять', forms: 'er verliert · hat verloren', note: 'Сильный глагол: verlor – verloren.', example: { de: 'Lena verliert nicht gern.', ru: 'Лена не любит проигрывать.', cloze: 'verliert' } },
    { id: 'mat-a12-10-unentschieden', icon: 'Equal', de: 'unentschieden', pos: 'adj', ru: 'вничью; ничья', note: 'Das Spiel endet unentschieden — игра заканчивается вничью.', example: { de: 'Heute endet das Spiel unentschieden.', ru: 'Сегодня игра заканчивается вничью.', cloze: 'unentschieden' } },
    { id: 'mat-a12-10-sudoku', icon: 'Grid3x3', imageQuery: 'sudoku puzzle', de: 'Sudoku', pos: 'noun', article: 'das', plural: 'Sudokus', ru: 'судоку', example: { de: 'In der Zeitung ist jeden Tag ein Sudoku.', ru: 'В газете каждый день есть судоку.', cloze: 'Sudoku' } },
    { id: 'mat-a12-10-kaestchen', icon: 'Square', imageQuery: 'graph paper', de: 'Kästchen', pos: 'noun', article: 'das', plural: 'Kästchen', ru: 'клеточка, квадратик', note: 'Уменьшительное от der Kasten (ящик). -chen всегда средний род.', example: { de: 'In jedes Kästchen kommt eine Ziffer.', ru: 'В каждую клеточку ставится одна цифра.', cloze: 'Kästchen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Opas Zahlenrätsel',
      de: `Lena besucht ihren Opa. Opa hat immer ein Rätsel für sie. Heute schreibt er eine Reihe auf ein Blatt: 2, 4, 8, 16 … „Wie geht die Reihe weiter?“

Lena rät: „Zwanzig?“ Opa schüttelt den Kopf: „Leider falsch.“ Dann gibt er ihr einen Hinweis: „Sieh dir das Muster an. Jede Zahl ist doppelt so groß wie die Zahl davor.“

Jetzt versteht Lena die Regel: immer mal zwei! Sie setzt die Reihe fort: 32, 64, 128. Opa lacht: „Richtig! Knobeln macht Spaß, oder?“ Lena möchte sofort ein neues Rätsel.`,
      ru: `Лена навещает дедушку. У дедушки всегда есть для неё загадка. Сегодня он пишет на листке ряд: 2, 4, 8, 16… «Как продолжается ряд?»

Лена пытается угадать: «Двадцать?» Дедушка качает головой: «К сожалению, неверно». Потом он даёт ей подсказку: «Посмотри на закономерность. Каждое число в два раза больше предыдущего».

Теперь Лена понимает правило: каждый раз умножать на два! Она продолжает ряд: 32, 64, 128. Дедушка смеётся: «Правильно! Ломать голову — это весело, правда?» Лена сразу хочет новую загадку.`,
      gloss: { lena: 'Лена (имя)', besucht: 'навещает', ihren: 'своего', opa: 'дедушка', opas: 'дедушкина, дедушки', immer: 'всегда', heute: 'сегодня', schreibt: 'пишет', blatt: 'лист', geht: 'идёт (wie geht … weiter — как продолжается)', weiter: 'дальше', schüttelt: 'качает', kopf: 'голова', leider: 'к сожалению', gibt: 'даёт', ihr: 'ей', sieh: 'посмотри (sich etwas ansehen)', an: '(sieh … an) посмотри', jede: 'каждое', groß: 'большой', davor: 'перед этим', versteht: 'понимает', lacht: 'смеётся', macht: 'делает (Spaß machen — приносить удовольствие)', spaß: 'удовольствие, веселье', oder: 'или; (в конце вопроса) правда?', möchte: 'хочет', sofort: 'сразу', neues: 'новое', zahlenrätsel: 'числовая загадка', zweiunddreißig: 'тридцать два', was: 'что', wie: 'как', welche: 'какая', wer: 'кто' },
      questions: [
        { q: 'Was rät Lena zuerst?', ru: 'Что Лена называет сначала?', options: ['Zwanzig', 'Zweiunddreißig', 'Sechzehn'], answer: 'Zwanzig' },
        { q: 'Welche Regel hat die Reihe?', ru: 'Какое правило у ряда?', options: ['Immer mal zwei', 'Immer plus zwei', 'Immer plus vier'], answer: 'Immer mal zwei' },
        { q: 'Wer gibt den Hinweis?', ru: 'Кто даёт подсказку?', options: ['Opa', 'Lena', 'Die Lehrerin'], answer: 'Opa' },
      ],
      translate: [
        { de: 'Opa gibt Lena einen Hinweis.', ru: 'Дедушка даёт Лене подсказку.', wrongRu: ['Дедушка даёт Лене загадку.', 'Лена даёт дедушке подсказку.'] },
        { de: 'Lena setzt die Reihe fort.', ru: 'Лена продолжает ряд.', wrongRu: ['Лена начинает ряд.', 'Лена стирает ряд.'] },
        { de: 'Jede Zahl ist doppelt so groß.', ru: 'Каждое число в два раза больше.', wrongRu: ['Каждое число в два раза меньше.', 'Каждое число на два больше.'] },
      ],
    },
    {
      lesson: 1, title: 'Schach und Sudoku',
      de: `Am Abend spielt Lena mit Opa Schach. Opa hat immer eine gute Strategie und gewinnt fast immer. Lena verliert nicht gern.

Heute denkt Lena lange nach. Aber dann macht sie einen schlechten Zug und verliert ihre Dame. Opa sagt: „Nicht schlimm. Spiel weiter!“ Am Ende hat keiner gewonnen. Das Spiel endet unentschieden. Lena ist zufrieden.

Danach löst Lena noch ein Sudoku aus der Zeitung. Es hat 81 Kästchen. In jedes Kästchen kommt eine Ziffer von 1 bis 9. Jede Ziffer darf in einer Zeile nur einmal stehen.`,
      ru: `Вечером Лена играет с дедушкой в шахматы. У дедушки всегда хорошая стратегия, и он почти всегда выигрывает. Лена не любит проигрывать.

Сегодня Лена долго думает. Но потом она делает плохой ход и теряет ферзя. Дедушка говорит: «Ничего страшного. Играй дальше!» В конце никто не выиграл. Партия заканчивается вничью. Лена довольна.

Потом Лена решает ещё судоку из газеты. В нём 81 клеточка. В каждую клеточку ставится цифра от 1 до 9. Каждая цифра может стоять в строке только один раз.`,
      gloss: { abend: 'вечер', spielt: 'играет', lena: 'Лена (имя)', opa: 'дедушка', immer: 'всегда', gute: 'хорошую', fast: 'почти', gern: 'охотно (nicht gern — неохотно)', heute: 'сегодня', denkt: 'думает (nachdenken — обдумывать)', lange: 'долго', nach: '(denkt nach) обдумывает', aber: 'но', macht: 'делает', schlechten: 'плохой', ihre: 'свою', dame: 'ферзь (в шахматах); дама', schlimm: 'плохо, страшно', spiel: 'играй; игра, партия', weiter: 'дальше', ende: 'конец', keiner: 'никто', endet: 'заканчивается', zufrieden: 'доволен', danach: 'потом', löst: 'решает', noch: 'ещё', zeitung: 'газета', kommt: 'идёт, ставится', von: 'от', bis: 'до', darf: 'может, разрешено', zeile: 'строка', nur: 'только', stehen: 'стоять', was: 'что', wie: 'как', viele: 'сколько (wie viele)', verliert: 'теряет; проигрывает' },
      questions: [
        { q: 'Wer gewinnt fast immer?', ru: 'Кто почти всегда выигрывает?', options: ['Opa', 'Lena', 'Keiner'], answer: 'Opa' },
        { q: 'Wie endet das Spiel heute?', ru: 'Чем сегодня заканчивается партия?', options: ['Unentschieden', 'Opa gewinnt', 'Lena gewinnt'], answer: 'Unentschieden' },
        { q: 'Wie viele Kästchen hat das Sudoku?', ru: 'Сколько клеточек в судоку?', options: ['81', '9', '18'], answer: '81' },
      ],
      translate: [
        { de: 'Lena macht einen schlechten Zug.', ru: 'Лена делает плохой ход.', wrongRu: ['Лена делает хороший ход.', 'Дедушка делает плохой ход.'] },
        { de: 'Das Spiel endet unentschieden.', ru: 'Партия заканчивается вничью.', wrongRu: ['Партия заканчивается победой.', 'Партия не заканчивается.'] },
        { de: 'In jedes Kästchen kommt eine Ziffer.', ru: 'В каждую клеточку ставится цифра.', wrongRu: ['В каждую строку ставится цифра.', 'В каждую клеточку ставится буква.'] },
      ],
    },
  ],
};
