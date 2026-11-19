import type { Module } from '../types.ts';

// A1.2 mathe 09: a class survey with a tally, a table and a bar chart (lesson 0), a week of temperatures and the average (lesson 1).

export const module: Module = {
  id: 'mathe-a12-09-diagramme', sphere: 'mathe', level: 'A1.2',
  title: 'Tabellen und Diagramme', subtitle: 'Таблица, столбец, диаграмма, температура и среднее: читаем данные.',
  words: [
    { id: 'mat-a12-09-strichliste', icon: 'ListTodo', de: 'Strichliste', pos: 'noun', article: 'die', plural: 'Strichlisten', ru: 'подсчёт палочками', parts: ['Strich', 'liste'], note: 'der Strich — чёрточка. Каждый пятый штрих перечёркивает четыре.', example: { de: 'Lea macht eine Strichliste an der Tafel.', ru: 'Леа считает голоса палочками на доске.', cloze: 'Strichliste' } },
    { id: 'mat-a12-09-tabelle', icon: 'Table', de: 'Tabelle', pos: 'noun', article: 'die', plural: 'Tabellen', ru: 'таблица', example: { de: 'Wir schreiben die Zahlen in eine Tabelle.', ru: 'Мы записываем числа в таблицу.', cloze: 'Tabelle' } },
    { id: 'mat-a12-09-spalte', icon: 'Columns2', de: 'Spalte', pos: 'noun', article: 'die', plural: 'Spalten', ru: 'столбец, колонка (таблицы)', note: 'Spalte — вертикально, Zeile — горизонтально.', example: { de: 'Die Tabelle hat zwei Spalten.', ru: 'В таблице два столбца.', cloze: 'Spalten' } },
    { id: 'mat-a12-09-zeile', icon: 'Rows2', de: 'Zeile', pos: 'noun', article: 'die', plural: 'Zeilen', ru: 'строка', example: { de: 'In jeder Zeile steht ein Tier.', ru: 'В каждой строке — одно животное.', cloze: 'Zeile' } },
    { id: 'mat-a12-09-eintragen', icon: 'PenLine', de: 'eintragen', pos: 'verb', ru: 'вносить, записывать (в таблицу, список)', forms: 'er trägt ein · hat eingetragen', note: 'etwas in + Akk eintragen. Сильный глагол: tragen – trug – getragen.', example: { de: 'Wir tragen die Zahlen in die Tabelle ein.', ru: 'Мы вносим числа в таблицу.', cloze: 'tragen' } },
    { id: 'mat-a12-09-diagramm', icon: 'ChartColumn', de: 'Diagramm', pos: 'noun', article: 'das', plural: 'Diagramme', ru: 'диаграмма', note: 'das Balkendiagramm — столбчатая диаграмма, das Kreisdiagramm — круговая.', example: { de: 'Zum Schluss zeichnen wir ein Diagramm.', ru: 'В конце мы рисуем диаграмму.', cloze: 'Diagramm' } },
    { id: 'mat-a12-09-balken', icon: 'ChartBar', de: 'Balken', pos: 'noun', article: 'der', plural: 'Balken', ru: 'столбик (диаграммы); балка', example: { de: 'Der längste Balken ist blau.', ru: 'Самый длинный столбик — синий.', cloze: 'Balken' } },
    { id: 'mat-a12-09-ablesen', icon: 'Eye', de: 'ablesen', pos: 'verb', ru: 'считывать (значение с графика, прибора)', forms: 'er liest ab · hat abgelesen', note: 'Сильный глагол: du liest ab, er liest ab.', example: { de: 'Im Diagramm kann man das leicht ablesen.', ru: 'На диаграмме это легко увидеть.', cloze: 'ablesen' } },
    { id: 'mat-a12-09-temperatur', icon: 'Thermometer', imageQuery: 'thermometer outdoor', de: 'Temperatur', pos: 'noun', article: 'die', plural: 'Temperaturen', ru: 'температура', example: { de: 'Am Montag ist die Temperatur zwölf Grad.', ru: 'В понедельник температура двенадцать градусов.', cloze: 'Temperatur' } },
    { id: 'mat-a12-09-grad', icon: 'ThermometerSun', de: 'Grad', pos: 'noun', article: 'das', plural: 'Grad', ru: 'градус', note: 'После числа без окончания: zwanzig Grad. Под нулём: minus fünf Grad.', example: { de: 'Heute hat es zwanzig Grad.', ru: 'Сегодня двадцать градусов.', cloze: 'Grad' } },
    { id: 'mat-a12-09-steigen', icon: 'TrendingUp', de: 'steigen', pos: 'verb', ru: 'подниматься, расти', forms: 'er steigt · ist gestiegen', note: 'Perfekt с sein. Противоположность: sinken.', example: { de: 'Die Temperatur steigt bis Donnerstag.', ru: 'Температура растёт до четверга.', cloze: 'steigt' } },
    { id: 'mat-a12-09-sinken', icon: 'TrendingDown', de: 'sinken', pos: 'verb', ru: 'опускаться, падать', forms: 'er sinkt · ist gesunken', note: 'Сильный глагол: sinken – sank – gesunken.', example: { de: 'Am Wochenende sinkt die Temperatur.', ru: 'На выходных температура падает.', cloze: 'sinkt' } },
    { id: 'mat-a12-09-durchschnitt', icon: 'Equal', de: 'Durchschnitt', pos: 'noun', article: 'der', plural: 'Durchschnitte', ru: 'среднее (значение)', parts: ['Durch', 'schnitt'], note: 'im Durchschnitt — в среднем. Сумма, делённая на количество.', example: { de: 'Im Durchschnitt hatte es fünfzehn Grad.', ru: 'В среднем было пятнадцать градусов.', cloze: 'Durchschnitt' } },
    { id: 'mat-a12-09-wert', icon: 'Hash', de: 'Wert', pos: 'noun', article: 'der', plural: 'Werte', ru: 'значение, величина', note: 'der höchste Wert — максимальное значение.', example: { de: 'Der höchste Wert ist zwanzig Grad.', ru: 'Самое высокое значение — двадцать градусов.', cloze: 'Wert' } },
    { id: 'mat-a12-09-kurve', icon: 'ChartSpline', de: 'Kurve', pos: 'noun', article: 'die', plural: 'Kurven', ru: 'кривая, график', note: 'Также «поворот дороги».', example: { de: 'Die Kurve geht zuerst nach oben.', ru: 'Кривая сначала идёт вверх.', cloze: 'Kurve' } },
    { id: 'mat-a12-09-vergleichen', icon: 'Scale', de: 'vergleichen', pos: 'verb', ru: 'сравнивать', forms: 'er vergleicht · hat verglichen', note: 'etwas mit + Dat vergleichen. Сильный глагол: verglich – verglichen.', example: { de: 'Wir vergleichen diese Woche mit der letzten.', ru: 'Мы сравниваем эту неделю с прошлой.', cloze: 'vergleichen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Haustiere in der Klasse',
      de: `Frau Novak fragt die Klasse: „Welches Haustier habt ihr?“ Lea macht eine Strichliste an der Tafel. Sieben Kinder haben einen Hund, fünf eine Katze und drei einen Fisch. Neun Kinder haben kein Haustier.

Dann tragen sie die Zahlen in eine Tabelle ein. Die Tabelle hat zwei Spalten: „Tier“ und „Anzahl“. In jeder Zeile steht ein Tier.

Zum Schluss zeichnen alle ein Diagramm. Jeder Balken ist ein Tier. Der längste Balken ist „kein Haustier“. Im Diagramm kann man leicht ablesen: Hunde sind beliebter als Katzen.`,
      ru: `Госпожа Новак спрашивает класс: «Какие у вас домашние животные?» Леа считает палочками на доске. У семи детей собака, у пяти — кошка, у трёх — рыбка. У девяти детей нет домашнего животного.

Потом они вносят числа в таблицу. В таблице два столбца: «Животное» и «Количество». В каждой строке — одно животное.

В конце все рисуют диаграмму. Каждый столбик — одно животное. Самый длинный столбик — «нет животного». На диаграмме легко увидеть: собаки популярнее кошек.`,
      gloss: { novak: 'Новак (фамилия)', fragt: 'спрашивает', klasse: 'класс', welches: 'какое', haustier: 'домашнее животное', haustiere: 'домашние животные', habt: 'имеете, у вас есть', lea: 'Леа (имя)', tafel: 'доска', kinder: 'дети', hund: 'собака', katze: 'кошка', fisch: 'рыбка, рыба', tier: 'животное', anzahl: 'количество', jeder: 'каждой; каждый', steht: 'стоит', schluss: 'конец (zum Schluss — в конце)', zeichnen: 'рисуют', längste: 'самый длинный', man: '(безличное) можно', leicht: 'легко', hunde: 'собаки', beliebter: 'популярнее', katzen: 'кошки', als: 'чем', wie: 'как', viele: 'сколько (wie viele)', was: 'что' },
      questions: [
        { q: 'Wie viele Kinder haben einen Hund?', ru: 'У скольких детей есть собака?', options: ['Sieben', 'Fünf', 'Neun'], answer: 'Sieben' },
        { q: 'Wie viele Spalten hat die Tabelle?', ru: 'Сколько столбцов в таблице?', options: ['Zwei', 'Drei', 'Vier'], answer: 'Zwei' },
        { q: 'Was ist der längste Balken?', ru: 'Какой столбик самый длинный?', options: ['Kein Haustier', 'Hund', 'Katze'], answer: 'Kein Haustier' },
      ],
      translate: [
        { de: 'Lea macht eine Strichliste.', ru: 'Леа считает палочками.', wrongRu: ['Леа рисует диаграмму.', 'Леа заполняет таблицу.'] },
        { de: 'Die Tabelle hat zwei Spalten.', ru: 'В таблице два столбца.', wrongRu: ['В таблице две строки.', 'В таблице три столбца.'] },
        { de: 'Jeder Balken ist ein Tier.', ru: 'Каждый столбик — одно животное.', wrongRu: ['Каждая строка — одно животное.', 'Каждый столбик — один ребёнок.'] },
      ],
    },
    {
      lesson: 1, title: 'Eine Woche Wetter',
      de: `Jonas misst eine Woche lang jeden Mittag die Temperatur. Am Montag hat es 12 Grad, am Dienstag 14 und am Mittwoch 17 Grad. Die Temperatur steigt bis Donnerstag. Am Donnerstag ist der höchste Wert: 20 Grad. Dann sinkt sie wieder: Freitag 18, Samstag 13, Sonntag 11 Grad.

Jonas zeichnet eine Kurve. Sie geht zuerst nach oben und dann nach unten. Dann rechnet er den Durchschnitt: Die Summe ist 105, und 105 geteilt durch 7 ist 15. Im Durchschnitt hatte es also 15 Grad.

Am Ende vergleicht Jonas die Woche mit der letzten Woche. Diese Woche war wärmer.`,
      ru: `Йонас неделю каждый день в полдень измеряет температуру. В понедельник 12 градусов, во вторник 14, а в среду 17 градусов. Температура растёт до четверга. В четверг самое высокое значение: 20 градусов. Потом она снова падает: пятница — 18, суббота — 13, воскресенье — 11 градусов.

Йонас рисует кривую. Сначала она идёт вверх, а потом вниз. Потом он считает среднее: сумма — 105, а 105, делённое на 7, — это 15. Значит, в среднем было 15 градусов.

В конце Йонас сравнивает эту неделю с прошлой. Эта неделя была теплее.`,
      gloss: { jonas: 'Йонас (имя)', misst: 'измеряет', lang: 'в течение (eine Woche lang — неделю)', mittag: 'полдень', montag: 'понедельник', dienstag: 'вторник', mittwoch: 'среда', donnerstag: 'четверг', höchste: 'самый высокий', höchsten: 'выше всего (am höchsten)', kälter: 'холоднее', wieder: 'снова', freitag: 'пятница', samstag: 'суббота', sonntag: 'воскресенье', zeichnet: 'рисует', geht: 'идёт', zuerst: 'сначала', oben: 'вверху (nach oben — вверх)', unten: 'внизу (nach unten — вниз)', rechnet: 'считает', geteilt: 'разделённый (geteilt durch — разделить на)', durch: 'на (geteilt durch)', hatte: 'было (es hatte — было)', also: 'значит', ende: 'конец', letzten: 'прошлой', diese: 'эта', war: 'была', wärmer: 'теплее', wetter: 'погода', wann: 'когда', was: 'что', wie: 'как', welcher: 'какой' },
      questions: [
        { q: 'Wann ist die Temperatur am höchsten?', ru: 'Когда температура самая высокая?', options: ['Am Donnerstag', 'Am Montag', 'Am Sonntag'], answer: 'Am Donnerstag' },
        { q: 'Was ist der Durchschnitt?', ru: 'Чему равно среднее?', options: ['15 Grad', '20 Grad', '105 Grad'], answer: '15 Grad' },
        { q: 'Wie war diese Woche?', ru: 'Какой была эта неделя?', options: ['Wärmer als die letzte Woche', 'Kälter als die letzte Woche', 'Genau wie die letzte Woche'], answer: 'Wärmer als die letzte Woche' },
      ],
      translate: [
        { de: 'Die Temperatur steigt bis Donnerstag.', ru: 'Температура растёт до четверга.', wrongRu: ['Температура падает до четверга.', 'Температура растёт с четверга.'] },
        { de: 'Im Durchschnitt hatte es fünfzehn Grad.', ru: 'В среднем было пятнадцать градусов.', wrongRu: ['Максимум был пятнадцать градусов.', 'В среднем было пятьдесят градусов.'] },
        { de: 'Jonas zeichnet eine Kurve.', ru: 'Йонас рисует кривую.', wrongRu: ['Йонас рисует таблицу.', 'Йонас стирает кривую.'] },
      ],
    },
  ],
};
