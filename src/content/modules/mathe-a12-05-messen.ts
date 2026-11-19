import type { Module } from '../types.ts';

// A1.2 mathe 05: measuring lengths for a new desk (lesson 0), weighing and liquid measures while baking (lesson 1).

export const module: Module = {
  id: 'mathe-a12-05-messen', sphere: 'mathe', level: 'A1.2',
  title: 'Messen und Wiegen', subtitle: 'Метр, сантиметр, линейка, весы и граммы: меряем мир вокруг.',
  words: [
    { id: 'mat-a12-05-meter', icon: 'MoveHorizontal', de: 'Meter', pos: 'noun', article: 'der', plural: 'Meter', ru: 'метр', note: 'Мн. ч. = ед. ч.: zwei Meter. Сокращение: m.', example: { de: 'Die Wand ist drei Meter lang.', ru: 'Стена длиной три метра.', cloze: 'Meter' } },
    { id: 'mat-a12-05-zentimeter', icon: 'Ruler', de: 'Zentimeter', pos: 'noun', article: 'der', plural: 'Zentimeter', ru: 'сантиметр', parts: ['Zenti', 'meter'], note: 'Ein Meter hat hundert Zentimeter. Сокращение: cm.', example: { de: 'Der Tisch ist 75 Zentimeter hoch.', ru: 'Стол высотой 75 сантиметров.', cloze: 'Zentimeter' } },
    { id: 'mat-a12-05-kilometer', icon: 'Milestone', de: 'Kilometer', pos: 'noun', article: 'der', plural: 'Kilometer', ru: 'километр', parts: ['Kilo', 'meter'], note: 'Сокращение: km. Читается полностью: zwei Kilometer.', example: { de: 'Die Schule ist zwei Kilometer weit weg.', ru: 'Школа в двух километрах отсюда.', cloze: 'Kilometer' } },
    { id: 'mat-a12-05-lineal', icon: 'PencilRuler', imageQuery: 'school ruler', de: 'Lineal', pos: 'noun', article: 'das', plural: 'Lineale', ru: 'линейка', note: 'Ударение на последний слог: Line-ÁL.', example: { de: 'Mit dem Lineal zeichne ich eine gerade Linie.', ru: 'Линейкой я рисую прямую линию.', cloze: 'Lineal' } },
    { id: 'mat-a12-05-massband', icon: 'Scaling', imageQuery: 'tape measure', de: 'Maßband', pos: 'noun', article: 'das', plural: 'Maßbänder', ru: 'рулетка, сантиметровая лента', parts: ['Maß', 'band'], note: 'das Maß — мера, das Band — лента.', example: { de: 'Papa holt das Maßband aus der Kiste.', ru: 'Папа достаёт рулетку из ящика.', cloze: 'Maßband' } },
    { id: 'mat-a12-05-messen', icon: 'Ruler', de: 'messen', pos: 'verb', ru: 'измерять', forms: 'er misst · hat gemessen', note: 'Сильный глагол: ich messe, du misst, er misst.', collocation: { de: 'die Länge messen', ru: 'измерить длину', accept: ['eine Länge messen'] }, example: { de: 'Emma misst die Wand.', ru: 'Эмма измеряет стену.', cloze: 'misst' } },
    { id: 'mat-a12-05-breit', icon: 'MoveHorizontal', de: 'breit', pos: 'adj', ru: 'широкий', note: 'die Breite — ширина. Wie breit ist …? — Какой ширины …?', example: { de: 'Der Schreibtisch ist 1,20 Meter breit.', ru: 'Письменный стол шириной 1,20 метра.', cloze: 'breit' } },
    { id: 'mat-a12-05-hoch', icon: 'MoveVertical', de: 'hoch', pos: 'adj', ru: 'высокий', note: 'Перед существительным: ein hoher Turm (c выпадает). die Höhe — высота.', example: { de: 'Das Regal ist zwei Meter hoch.', ru: 'Стеллаж высотой два метра.', cloze: 'hoch' } },
    { id: 'mat-a12-05-kilogramm', icon: 'Weight', de: 'Kilogramm', pos: 'noun', article: 'das', plural: 'Kilogramm', ru: 'килограмм', parts: ['Kilo', 'gramm'], note: 'Средний род! В разговоре: das Kilo. Сокращение: kg.', example: { de: 'Der Kuchen wiegt ein Kilogramm.', ru: 'Торт весит один килограмм.', cloze: 'Kilogramm' } },
    { id: 'mat-a12-05-gramm', icon: 'Feather', de: 'Gramm', pos: 'noun', article: 'das', plural: 'Gramm', ru: 'грамм', note: 'Средний род: das Gramm. 250 Gramm Mehl.', example: { de: 'Wir brauchen 250 Gramm Mehl.', ru: 'Нам нужно 250 граммов муки.', cloze: 'Gramm' } },
    { id: 'mat-a12-05-liter', icon: 'Milk', de: 'Liter', pos: 'noun', article: 'der', plural: 'Liter', ru: 'литр', note: 'ein halber Liter — пол-литра. Сокращение: l.', example: { de: 'Ich kaufe einen Liter Milch.', ru: 'Я покупаю литр молока.', cloze: 'Liter' } },
    { id: 'mat-a12-05-waage', icon: 'Scale', imageQuery: 'kitchen scale', de: 'Waage', pos: 'noun', article: 'die', plural: 'Waagen', ru: 'весы', note: 'В немецком — ед. ч.: die Waage (одни весы).', example: { de: 'Die Waage zeigt 500 Gramm.', ru: 'Весы показывают 500 граммов.', cloze: 'Waage' } },
    { id: 'mat-a12-05-wiegen', icon: 'Scale', de: 'wiegen', pos: 'verb', ru: 'весить; взвешивать', forms: 'er wiegt · hat gewogen', note: 'Сильный глагол: wiegen – wog – gewogen.', example: { de: 'Das Paket wiegt zwei Kilo.', ru: 'Посылка весит два килограмма.', cloze: 'wiegt' } },
    { id: 'mat-a12-05-schwer', icon: 'Dumbbell', de: 'schwer', pos: 'adj', ru: 'тяжёлый; трудный', note: 'Два значения: Die Kiste ist schwer (тяжёлая), Die Aufgabe ist schwer (трудная).', example: { de: 'Die Tasche mit den Büchern ist schwer.', ru: 'Сумка с книгами тяжёлая.', cloze: 'schwer' } },
    { id: 'mat-a12-05-leicht', icon: 'Feather', de: 'leicht', pos: 'adj', ru: 'лёгкий', note: 'Тоже два значения: лёгкий по весу и простой.', example: { de: 'Eine Feder ist sehr leicht.', ru: 'Перо очень лёгкое.', cloze: 'leicht' } },
    { id: 'mat-a12-05-einheit', icon: 'Boxes', de: 'Einheit', pos: 'noun', article: 'die', plural: 'Einheiten', ru: 'единица (измерения)', note: 'Meter, Gramm und Liter sind Einheiten.', example: { de: 'Ein Pfund ist eine alte Einheit.', ru: 'Фунт — старая единица измерения.', cloze: 'Einheit' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein neuer Schreibtisch',
      de: `Emma bekommt einen neuen Schreibtisch. Aber gibt es genug Platz in ihrem Zimmer? Papa holt das Maßband. Emma misst die Wand: Sie ist 2,40 Meter lang. Der Schreibtisch ist 1,20 Meter breit und 75 Zentimeter hoch. Das passt!

Am Nachmittag macht Emma Hausaufgaben am neuen Tisch. Sie soll mit dem Lineal eine Linie zeichnen. Die Linie ist genau zwölf Zentimeter lang.

Dann fragt Emma: „Papa, wie weit ist meine Schule?“ Papa sieht auf dem Handy nach: „Zwei Kilometer. Du kannst mit dem Fahrrad fahren.“`,
      ru: `Эмма получает новый письменный стол. Но хватит ли места в её комнате? Папа приносит рулетку. Эмма измеряет стену: она длиной 2,40 метра. Стол шириной 1,20 метра и высотой 75 сантиметров. Подходит!

Днём Эмма делает домашнее задание за новым столом. Ей нужно начертить линию по линейке. Линия длиной ровно двенадцать сантиметров.

Потом Эмма спрашивает: «Папа, далеко до моей школы?» Папа смотрит в телефоне: «Два километра. Можешь ездить на велосипеде».`,
      gloss: { emma: 'Эмма (имя)', bekommt: 'получает', neuen: 'новый', neuer: 'новый', schreibtisch: 'письменный стол', aber: 'но', genug: 'достаточно', platz: 'место', zimmer: 'комната', papa: 'папа', holt: 'приносит', wand: 'стена', lang: 'длинный, длиной', passt: 'подходит', nachmittag: 'вторая половина дня', soll: 'должна', linie: 'линия', zeichnen: 'чертить, рисовать', genau: 'ровно, точно', weit: 'далеко', sieht: 'смотрит (nachsehen — посмотреть)', nach: 'после; (sieht nach) смотрит', handy: 'мобильный телефон', fahrrad: 'велосипед', fahren: 'ехать', kannst: 'можешь', meine: 'моя', womit: 'чем, с помощью чего', wie: 'как' },
      questions: [
        { q: 'Wie lang ist die Wand?', ru: 'Какой длины стена?', options: ['2,40 Meter', '1,20 Meter', '75 Zentimeter'], answer: '2,40 Meter' },
        { q: 'Womit zeichnet Emma die Linie?', ru: 'Чем Эмма чертит линию?', options: ['Mit dem Lineal', 'Mit dem Maßband', 'Mit dem Handy'], answer: 'Mit dem Lineal' },
        { q: 'Wie weit ist die Schule?', ru: 'Как далеко школа?', options: ['Zwei Kilometer', 'Zwölf Kilometer', 'Zwei Meter'], answer: 'Zwei Kilometer' },
      ],
      translate: [
        { de: 'Emma misst die Wand.', ru: 'Эмма измеряет стену.', wrongRu: ['Эмма красит стену.', 'Папа измеряет стену.'] },
        { de: 'Der Tisch ist 75 Zentimeter hoch.', ru: 'Стол высотой 75 сантиметров.', wrongRu: ['Стол шириной 75 сантиметров.', 'Стол длиной 75 сантиметров.'] },
        { de: 'Die Schule ist zwei Kilometer weit weg.', ru: 'Школа в двух километрах отсюда.', wrongRu: ['Школа в двух метрах отсюда.', 'Школа в двенадцати километрах отсюда.'] },
      ],
    },
    {
      lesson: 1, title: 'Kuchen backen mit Oma',
      de: `Am Sonntag backt Emma mit Oma einen Kuchen. Im Rezept steht: 250 Gramm Mehl, 200 Gramm Zucker, ein halber Liter Milch und ein Pfund Butter.

Emma fragt: „Was ist ein Pfund?“ Oma lacht: „Das ist eine alte Einheit. Ein Pfund sind 500 Gramm.“ Emma stellt die Schüssel auf die Waage. Sie wiegt das Mehl. Das Mehl ist leicht, aber die Butter ist schwer.

Nach einer Stunde ist der Kuchen fertig. Er wiegt fast ein Kilogramm. Emma und Oma essen zwei große Stücke. Dann ist der Kuchen ein bisschen leichter.`,
      ru: `В воскресенье Эмма печёт с бабушкой торт. В рецепте написано: 250 граммов муки, 200 граммов сахара, пол-литра молока и фунт масла.

Эмма спрашивает: «Что такое фунт?» Бабушка смеётся: «Это старая единица измерения. Фунт — это 500 граммов». Эмма ставит миску на весы. Она взвешивает муку. Мука лёгкая, а масло тяжёлое.

Через час торт готов. Он весит почти килограмм. Эмма и бабушка съедают два больших куска. После этого торт становится немного легче.`,
      gloss: { sonntag: 'воскресенье', backt: 'печёт', emma: 'Эмма (имя)', oma: 'бабушка', kuchen: 'торт, пирог', rezept: 'рецепт', steht: 'написано, стоит', mehl: 'мука', zucker: 'сахар', halber: 'половина (ein halber Liter — пол-литра)', halben: 'половину (einen halben Liter — пол-литра)', milch: 'молоко', pfund: 'фунт (500 г)', butter: 'сливочное масло', lacht: 'смеётся', alte: 'старая', stellt: 'ставит', schüssel: 'миска', aber: 'а, но', nach: 'через, после', fertig: 'готов', fast: 'почти', essen: 'едят', große: 'большие', stücke: 'куски', bisschen: 'немного (ein bisschen)', leichter: 'легче', backen: 'печь', wie: 'как', viel: 'сколько' },
      questions: [
        { q: 'Wie viel Gramm hat ein Pfund?', ru: 'Сколько граммов в фунте?', options: ['500 Gramm', '250 Gramm', '200 Gramm'], answer: '500 Gramm' },
        { q: 'Was ist schwer?', ru: 'Что тяжёлое?', options: ['Die Butter', 'Das Mehl', 'Der Zucker'], answer: 'Die Butter' },
        { q: 'Wie viel wiegt der Kuchen?', ru: 'Сколько весит торт?', options: ['Fast ein Kilogramm', 'Ein Pfund', 'Ein Liter'], answer: 'Fast ein Kilogramm' },
      ],
      translate: [
        { de: 'Wir brauchen einen halben Liter Milch.', ru: 'Нам нужно пол-литра молока.', wrongRu: ['Нам нужен литр молока.', 'Нам нужно пол-литра воды.'] },
        { de: 'Emma wiegt das Mehl.', ru: 'Эмма взвешивает муку.', wrongRu: ['Эмма покупает муку.', 'Бабушка взвешивает муку.'] },
        { de: 'Ein Pfund ist eine alte Einheit.', ru: 'Фунт — старая единица измерения.', wrongRu: ['Фунт — новая единица измерения.', 'Килограмм — старая единица измерения.'] },
      ],
    },
  ],
};
