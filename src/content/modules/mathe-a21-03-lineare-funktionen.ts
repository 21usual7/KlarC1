import type { Module } from '../types.ts';

// A2.1 mathe 03: the coordinate system, slope and a straight line (lesson 0), comparing two phone tariffs with graphs (lesson 1).

export const module: Module = {
  id: 'mathe-a21-03-lineare-funktionen', sphere: 'mathe', level: 'A2.1',
  title: 'Lineare Funktionen', subtitle: 'Система координат, ось, наклон, прямая и тариф: функции y = kx + d.',
  words: [
    { id: 'mat-a21-03-koordinatensystem', icon: 'Grid2x2', imageQuery: 'coordinate system', de: 'Koordinatensystem', pos: 'noun', article: 'das', plural: 'Koordinatensysteme', ru: 'система координат', parts: ['Koordinaten', 'system'], example: { de: 'Wir zeichnen die Punkte in ein Koordinatensystem.', ru: 'Мы наносим точки в систему координат.', cloze: 'Koordinatensystem' } },
    { id: 'mat-a21-03-achse', icon: 'Axis3d', imageQuery: 'axle wheel', de: 'Achse', pos: 'noun', article: 'die', plural: 'Achsen', ru: 'ось', note: 'die x-Achse — ось абсцисс, die y-Achse — ось ординат.', example: { de: 'Die Zeit steht auf der waagrechten Achse.', ru: 'Время откладывается по горизонтальной оси.', cloze: 'Achse' } },
    { id: 'mat-a21-03-ursprung', icon: 'Crosshair', de: 'Ursprung', pos: 'noun', article: 'der', plural: 'Ursprünge', ru: 'начало координат; происхождение', note: 'Точка (0|0). В Австрии координаты пишут через черту: P(2|3).', example: { de: 'Die Gerade geht durch den Ursprung.', ru: 'Прямая проходит через начало координат.', cloze: 'Ursprung' } },
    { id: 'mat-a21-03-gerade-noun', icon: 'Slash', de: 'Gerade', pos: 'noun', article: 'die', plural: 'Geraden', ru: 'прямая (линия)', note: 'Существительное! die Gerade — прямая; gerade (прил.) — прямой, чётный.', example: { de: 'Der Graph einer linearen Funktion ist eine Gerade.', ru: 'График линейной функции — прямая.', cloze: 'Gerade' } },
    { id: 'mat-a21-03-steigung', icon: 'TrendingUp', imageQuery: 'steep road sign', de: 'Steigung', pos: 'noun', article: 'die', plural: 'Steigungen', ru: 'наклон, угловой коэффициент (k)', note: 'В Австрии: y = k·x + d, k — Steigung, d — сдвиг по оси y.', example: { de: 'Die Steigung ist hier zwei.', ru: 'Угловой коэффициент здесь равен двум.', cloze: 'Steigung' } },
    { id: 'mat-a21-03-schnittpunkt', icon: 'X', imageQuery: 'road intersection', de: 'Schnittpunkt', pos: 'noun', article: 'der', plural: 'Schnittpunkte', ru: 'точка пересечения', parts: ['Schnitt', 'punkt'], note: 'schneiden — пересекать (и резать).', example: { de: 'Wo liegt der Schnittpunkt der beiden Geraden?', ru: 'Где находится точка пересечения двух прямых?', cloze: 'Schnittpunkt' } },
    { id: 'mat-a21-03-linear', icon: 'MoveUpRight', de: 'linear', pos: 'adj', ru: 'линейный', example: { de: 'Das Wachstum ist linear: jeden Monat gleich viel.', ru: 'Рост линейный: каждый месяц одинаково.', cloze: 'linear' } },
    { id: 'mat-a21-03-proportional', icon: 'Equal', de: 'proportional', pos: 'adj', ru: 'пропорциональный', note: 'direkt proportional — прямо пропорциональный.', example: { de: 'Der Preis ist proportional zur Menge.', ru: 'Цена пропорциональна количеству.', cloze: 'proportional' } },
    { id: 'mat-a21-03-graph', icon: 'ChartLine', imageQuery: 'function graph', de: 'Graph', pos: 'noun', article: 'der', plural: 'Graphen', ru: 'график (функции)', note: 'Слабое склонение: den Graphen, des Graphen. Пишут и Graf.', example: { de: 'Der Graph steigt nach rechts.', ru: 'График поднимается вправо.', cloze: 'Graph' } },
    { id: 'mat-a21-03-wertetabelle', icon: 'Table', de: 'Wertetabelle', pos: 'noun', article: 'die', plural: 'Wertetabellen', ru: 'таблица значений', parts: ['Werte', 'tabelle'], example: { de: 'Zuerst machen wir eine Wertetabelle.', ru: 'Сначала составим таблицу значений.', cloze: 'Wertetabelle' } },
    { id: 'mat-a21-03-zuordnen', icon: 'ArrowRightLeft', de: 'zuordnen', pos: 'verb', ru: 'сопоставлять, ставить в соответствие', forms: 'er ordnet zu · hat zugeordnet', note: 'Функция ordnet jedem x genau ein y zu. Существительное: die Zuordnung.', example: { de: 'Die Funktion ordnet jeder Minute einen Preis zu.', ru: 'Функция ставит в соответствие каждой минуте цену.', cloze: 'ordnet' } },
    { id: 'mat-a21-03-abhaengig', icon: 'Link', de: 'abhängig', pos: 'adj', ru: 'зависимый', note: 'von + Dat abhängig sein — зависеть от.', example: { de: 'Der Preis ist von den Minuten abhängig.', ru: 'Цена зависит от количества минут.', cloze: 'abhängig' } },
    { id: 'mat-a21-03-tarif', icon: 'Smartphone', imageQuery: 'price list', de: 'Tarif', pos: 'noun', article: 'der', plural: 'Tarife', ru: 'тариф', example: { de: 'Welcher Tarif ist günstiger?', ru: 'Какой тариф выгоднее?', cloze: 'Tarif' } },
    { id: 'mat-a21-03-grundgebuehr', icon: 'Receipt', de: 'Grundgebühr', pos: 'noun', article: 'die', plural: 'Grundgebühren', ru: 'абонентская плата', parts: ['Grund', 'gebühr'], note: 'die Gebühr — сбор, плата.', example: { de: 'Tarif A hat eine Grundgebühr von zehn Euro.', ru: 'У тарифа A абонентская плата десять евро.', cloze: 'Grundgebühr' } },
    { id: 'mat-a21-03-guenstig', icon: 'ThumbsUp', de: 'günstig', pos: 'adj', ru: 'выгодный, недорогой; удобный', note: 'Вежливее, чем billig.', example: { de: 'Für Vieltelefonierer ist Tarif A günstiger.', ru: 'Для тех, кто много звонит, тариф A выгоднее.', cloze: 'günstiger' } },
    { id: 'mat-a21-03-steil', icon: 'MountainSnow', de: 'steil', pos: 'adj', ru: 'крутой', note: 'Чем больше Steigung, тем steiler die Gerade.', example: { de: 'Die Gerade von Tarif B ist steiler.', ru: 'Прямая тарифа B круче.', cloze: 'steiler' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Eine Gerade zeichnen',
      de: `In der Mathestunde zeichnet Frau Berger ein Koordinatensystem an die Tafel. Es hat zwei Achsen: die x-Achse und die y-Achse. Der Punkt in der Mitte heißt Ursprung.

Dann schreibt sie die Funktion y = 2x + 1 auf. „Das ist eine lineare Funktion. Ihr Graph ist immer eine Gerade.“ Die Klasse macht eine Wertetabelle. Für x = 0 ist y = 1, für x = 1 ist y = 3, für x = 2 ist y = 5.

Frau Berger fragt: „Was ist die Steigung?“ Jakob meldet sich: „Zwei. Wenn x um eins größer wird, wird y um zwei größer.“ Die Gerade geht nicht durch den Ursprung, weil sie bei 1 die y-Achse schneidet.`,
      ru: `На уроке математики госпожа Бергер рисует на доске систему координат. У неё две оси: ось x и ось y. Точка в середине называется началом координат.

Потом она записывает функцию y = 2x + 1. «Это линейная функция. Её график всегда прямая». Класс составляет таблицу значений. При x = 0 y = 1, при x = 1 y = 3, при x = 2 y = 5.

Госпожа Бергер спрашивает: «Чему равен угловой коэффициент?» Якоб поднимает руку: «Двум. Когда x увеличивается на один, y увеличивается на два». Прямая не проходит через начало координат, потому что пересекает ось y в точке 1.`,
      gloss: { mathestunde: 'урок математики', lineare: 'линейная', berger: 'Бергер (фамилия)', heißt: 'называется', x: 'икс', y: 'игрек', 'x-achse': 'ось x', 'y-achse': 'ось y', schreibt: 'пишет', auf: 'на; (schreibt auf) записывает', ihr: 'её', immer: 'всегда', klasse: 'класс', macht: 'делает, составляет', für: 'для, при', fragt: 'спрашивает', jakob: 'Якоб (имя)', wenn: 'когда, если', um: 'на (um eins größer — на один больше)', größer: 'больше', wird: 'становится', geht: 'идёт, проходит', durch: 'через', weil: 'потому что', bei: 'в, при', schneidet: 'пересекает', wie: 'как', viele: 'сколько (wie viele)', wer: 'кто', warum: 'почему', was: 'что' },
      questions: [
        { q: 'Wie heißt der Punkt in der Mitte?', ru: 'Как называется точка в середине?', options: ['Ursprung', 'Schnittpunkt', 'Steigung'], answer: 'Ursprung' },
        { q: 'Was ist y für x = 2?', ru: 'Чему равен y при x = 2?', options: ['5', '3', '1'], answer: '5' },
        { q: 'Warum geht die Gerade nicht durch den Ursprung?', ru: 'Почему прямая не проходит через начало координат?', options: ['Sie schneidet die y-Achse bei 1.', 'Die Steigung ist zwei.', 'Sie ist keine Gerade.'], answer: 'Sie schneidet die y-Achse bei 1.' },
      ],
      translate: [
        { de: 'Der Graph ist immer eine Gerade.', ru: 'График всегда прямая.', wrongRu: ['График всегда кривая.', 'График никогда не прямая.'] },
        { de: 'Die Klasse macht eine Wertetabelle.', ru: 'Класс составляет таблицу значений.', wrongRu: ['Класс рисует систему координат.', 'Учитель составляет таблицу значений.'] },
        { de: 'Die Steigung ist zwei.', ru: 'Угловой коэффициент равен двум.', wrongRu: ['Угловой коэффициент равен одному.', 'Начало координат равно двум.'] },
      ],
    },
    {
      lesson: 1, title: 'Welcher Handytarif?',
      de: `Elena braucht einen neuen Handytarif. Es gibt zwei Angebote. Tarif A hat eine Grundgebühr von zehn Euro im Monat, jede Minute kostet fünf Cent. Tarif B hat keine Grundgebühr, aber jede Minute kostet fünfzehn Cent.

Elena macht für beide Tarife eine Wertetabelle und zeichnet die Graphen. Bei beiden ist der Preis von den Minuten abhängig. Jede Funktion ordnet der Zahl der Minuten einen Preis zu. Die Gerade von Tarif B geht durch den Ursprung und ist steiler. Bei Tarif B ist der Preis proportional zu den Minuten.

Der Schnittpunkt liegt bei hundert Minuten. Dort kosten beide Tarife fünfzehn Euro. Elena telefoniert viel, mehr als hundert Minuten. Für sie ist also Tarif A günstiger.`,
      ru: `Елене нужен новый тариф для телефона. Есть два предложения. У тарифа A абонентская плата десять евро в месяц, каждая минута стоит пять центов. У тарифа B нет абонентской платы, но каждая минута стоит пятнадцать центов.

Елена составляет для обоих тарифов таблицы значений и рисует графики. В обоих случаях цена зависит от количества минут. Каждая функция ставит в соответствие числу минут цену. Прямая тарифа B проходит через начало координат и она круче. У тарифа B цена пропорциональна количеству минут.

Точка пересечения — на ста минутах. Там оба тарифа стоят пятнадцать евро. Елена много разговаривает по телефону, больше ста минут. Значит, для неё выгоднее тариф A.`,
      gloss: { elena: 'Елена (имя)', braucht: 'нуждается, нужен', neuen: 'новый', handytarif: 'тариф для мобильного', angebote: 'предложения', a: 'А (название тарифа)', b: 'Б (название тарифа)', euro: 'евро', monat: 'месяц', jede: 'каждая', minute: 'минута', kostet: 'стоит', cent: 'центов', keine: 'никакой, нет', aber: 'но', macht: 'делает, составляет', beide: 'оба', beiden: 'обоих', zeichnet: 'рисует', bei: 'у, при', preis: 'цена', minuten: 'минуты, минут', funktion: 'функция', der: 'артикль; (der Zahl) числу', geht: 'идёт, проходит', durch: 'через', zu: 'к', liegt: 'лежит, находится', hundert: 'сто', dort: 'там', kosten: 'стоят', telefoniert: 'разговаривает по телефону', viel: 'много', mehr: 'больше', als: 'чем', sie: 'неё; она', also: 'значит', wo: 'где', welcher: 'какой', wie: 'как', was: 'что' },
      questions: [
        { q: 'Welcher Tarif hat keine Grundgebühr?', ru: 'У какого тарифа нет абонентской платы?', options: ['Tarif B', 'Tarif A', 'Beide'], answer: 'Tarif B' },
        { q: 'Wo liegt der Schnittpunkt?', ru: 'Где находится точка пересечения?', options: ['Bei hundert Minuten', 'Bei zehn Minuten', 'Im Ursprung'], answer: 'Bei hundert Minuten' },
        { q: 'Welcher Tarif ist für Elena günstiger?', ru: 'Какой тариф выгоднее для Елены?', options: ['Tarif A', 'Tarif B', 'Beide kosten gleich viel'], answer: 'Tarif A' },
      ],
      translate: [
        { de: 'Der Preis ist von den Minuten abhängig.', ru: 'Цена зависит от количества минут.', wrongRu: ['Цена не зависит от количества минут.', 'Минуты зависят от цены.'] },
        { de: 'Die Gerade von Tarif B ist steiler.', ru: 'Прямая тарифа B круче.', wrongRu: ['Прямая тарифа B положе.', 'Прямая тарифа A круче.'] },
        { de: 'Tarif A hat eine Grundgebühr von zehn Euro.', ru: 'У тарифа A абонентская плата десять евро.', wrongRu: ['У тарифа A абонентская плата пятнадцать евро.', 'У тарифа A нет абонентской платы.'] },
      ],
    },
  ],
};
