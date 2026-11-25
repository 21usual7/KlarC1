import type { Module } from '../types.ts';

// A2.1 alltag 06: daycare and school — Kita place, primary school, class, teacher (lesson 0); homework, report, holidays, excusing absence (lesson 1).

export const module: Module = {
  id: 'alltag-a21-06-schule', sphere: 'alltag', level: 'A2.1',
  title: 'Kita und Schule', subtitle: 'Детсад и школа: место в саду, начальная школа, учитель, домашние задания, табель и каникулы.',
  words: [
    { id: 'all-a21-06-kita', icon: 'Baby', de: 'Kita', pos: 'noun', article: 'die', plural: 'Kitas', ru: 'детский сад (ясли)', note: 'Kindertagesstätte. На место в саду у детей с 1 года есть право.', example: { de: 'Karim geht in die Kita.', ru: 'Карим ходит в детский сад.', cloze: 'Kita' } },
    { id: 'all-a21-06-betreuungsplatz', icon: 'Armchair', de: 'Betreuungsplatz', pos: 'noun', article: 'der', plural: 'Betreuungsplätze', ru: 'место в детском учреждении', parts: ['Betreuungs', 'platz'], example: { de: 'Wir suchen einen Betreuungsplatz für unsere Tochter.', ru: 'Мы ищем место в саду для дочери.', cloze: 'Betreuungsplatz' } },
    { id: 'all-a21-06-grundschule', icon: 'School', de: 'Grundschule', pos: 'noun', article: 'die', plural: 'Grundschulen', ru: 'начальная школа', parts: ['Grund', 'schule'], note: 'Обычно 1–4 класс, с 6 лет.', example: { de: 'Nour geht in die dritte Klasse der Grundschule.', ru: 'Нур учится в третьем классе начальной школы.', cloze: 'Grundschule' } },
    { id: 'all-a21-06-einschulung', icon: 'PartyPopper', de: 'Einschulung', pos: 'noun', article: 'die', plural: 'Einschulungen', ru: 'поступление в первый класс', note: 'Дети получают Schultüte — большой кулёк со сладостями.', example: { de: 'Zur Einschulung bekommt Karim eine Schultüte.', ru: 'На первое сентября Карим получает кулёк со сладостями.', cloze: 'Einschulung' } },
    { id: 'all-a21-06-klasse', icon: 'Users', de: 'Klasse', pos: 'noun', article: 'die', plural: 'Klassen', ru: 'класс', example: { de: 'In der Klasse sind fünfundzwanzig Kinder.', ru: 'В классе двадцать пять детей.', cloze: 'Klasse' } },
    { id: 'all-a21-06-lehrer', icon: 'User', de: 'Lehrer', pos: 'noun', article: 'der', plural: 'Lehrer', ru: 'учитель', note: 'Учительница — die Lehrerin. die Klassenlehrerin — классный руководитель.', example: { de: 'Der Lehrer ist sehr geduldig.', ru: 'Учитель очень терпеливый.', cloze: 'Lehrer' } },
    { id: 'all-a21-06-elternabend', icon: 'Users', de: 'Elternabend', pos: 'noun', article: 'der', plural: 'Elternabende', ru: 'родительское собрание', parts: ['Eltern', 'abend'], example: { de: 'Der Elternabend ist am Mittwoch um neunzehn Uhr.', ru: 'Родительское собрание в среду в девятнадцать часов.', cloze: 'Elternabend' } },
    { id: 'all-a21-06-schulpflicht', icon: 'CircleAlert', de: 'Schulpflicht', pos: 'noun', article: 'die', ru: 'обязательное школьное образование', parts: ['Schul', 'pflicht'], note: 'Пропускать школу без причины нельзя — штраф.', example: { de: 'In Deutschland gibt es eine Schulpflicht.', ru: 'В Германии школа обязательна.', cloze: 'Schulpflicht' } },

    { id: 'all-a21-06-hausaufgabe', icon: 'NotebookPen', de: 'Hausaufgabe', pos: 'noun', article: 'die', plural: 'Hausaufgaben', ru: 'домашнее задание', parts: ['Haus', 'aufgabe'], example: { de: 'Hast du deine Hausaufgaben gemacht?', ru: 'Ты сделал домашнее задание?', cloze: 'Hausaufgaben' } },
    { id: 'all-a21-06-hort', icon: 'Home', de: 'Hort', pos: 'noun', article: 'der', plural: 'Horte', ru: 'группа продлённого дня', example: { de: 'Nach der Schule geht Nour in den Hort.', ru: 'После школы Нур идёт в продлёнку.', cloze: 'Hort' } },
    { id: 'all-a21-06-zeugnis', icon: 'Award', de: 'Zeugnis', pos: 'noun', article: 'das', plural: 'Zeugnisse', ru: 'табель, аттестат', example: { de: 'Im Sommer gibt es Zeugnisse.', ru: 'Летом выдают табели.', cloze: 'Zeugnisse' } },
    { id: 'all-a21-06-note', icon: 'Star', de: 'Note', pos: 'noun', article: 'die', plural: 'Noten', ru: 'оценка', note: 'В Германии 1 — лучшая оценка, 6 — худшая!', example: { de: 'Nour hat sehr gute Noten.', ru: 'У Нур очень хорошие оценки.', cloze: 'Noten' } },
    { id: 'all-a21-06-ferien', icon: 'Sun', de: 'Ferien', pos: 'noun', article: 'die', pluralOnly: true, ru: 'каникулы', note: 'die Sommerferien — летние каникулы (около 6 недель).', example: { de: 'Die Sommerferien dauern sechs Wochen.', ru: 'Летние каникулы длятся шесть недель.', cloze: 'ferien' } },
    { id: 'all-a21-06-entschuldigen', icon: 'FileHeart', de: 'entschuldigen', pos: 'verb', ru: 'извиняться; оправдывать (отсутствие)', forms: 'er entschuldigt · hat entschuldigt', note: 'Если ребёнок болен, родители пишут Entschuldigung для школы.', example: { de: 'Ich muss Nour heute in der Schule entschuldigen.', ru: 'Мне нужно сегодня отпросить Нур из школы.', cloze: 'entschuldigen' } },
    { id: 'all-a21-06-schultasche', icon: 'Backpack', imageQuery: 'school backpack', de: 'Schultasche', pos: 'noun', article: 'die', plural: 'Schultaschen', ru: 'школьный рюкзак, ранец', parts: ['Schul', 'tasche'], note: 'Также: der Ranzen, der Schulranzen.', example: { de: 'Die Schultasche ist sehr schwer.', ru: 'Школьный рюкзак очень тяжёлый.', cloze: 'Schultasche' } },
    { id: 'all-a21-06-schulweg', icon: 'Route', de: 'Schulweg', pos: 'noun', article: 'der', plural: 'Schulwege', ru: 'дорога в школу', parts: ['Schul', 'weg'], example: { de: 'Der Schulweg dauert zehn Minuten.', ru: 'Дорога в школу занимает десять минут.', cloze: 'Schulweg' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Platz in der Kita',
      de: `Als Familie Haddad nach Leipzig kam, war Karim vier Jahre alt. Leyla suchte einen Betreuungsplatz. Das war schwer, denn viele Kitas hatten keinen Platz frei. Nach drei Monaten bekam Karim endlich einen Platz in einer Kita in der Nähe.

Jetzt ist Karim sechs. Bald ist seine Einschulung in die Grundschule. Er bekommt eine Schultasche und eine große Schultüte mit Süßigkeiten.

Nour ist schon in der dritten Klasse. In ihrer Klasse sind fünfundzwanzig Kinder aus acht Ländern. Ihre Lehrerin, Frau Bauer, ist sehr nett. Am Mittwoch ist Elternabend. Leyla geht hin und versteht schon fast alles.`,
      ru: `Когда семья Хаддад приехала в Лейпциг, Кариму было четыре года. Лейла искала место в детском саду. Это было трудно: во многих садах не было свободных мест. Через три месяца Карим наконец получил место в саду рядом с домом.

Теперь Кариму шесть. Скоро он идёт в первый класс начальной школы. Он получает ранец и большой кулёк со сладостями.

Нур уже в третьем классе. В её классе двадцать пять детей из восьми стран. Её учительница, госпожа Бауэр, очень приятная. В среду родительское собрание. Лейла идёт и понимает уже почти всё.`,
      gloss: { monaten: 'месяцев', dritten: 'третьему', nett: 'милый, приятный', mittwoch: 'среда', hin: '(legt … hin) кладёт, стелет', fünften: 'пятом', haddad: 'Хаддад (фамилия)', karim: 'Карим (имя)', leyla: 'Лейла (имя)', nour: 'Нур (имя)', bauer: 'Бауэр (фамилия)', leipzig: 'Лейпциг', kam: 'приехала', war: 'был, было', suchte: 'искала', hatten: 'имели, было', bekam: 'получил', nähe: '(in der Nähe) рядом', schultüte: 'кулёк со сладостями (первоклашкам)', süßigkeiten: 'сладости', ländern: 'стран', versteht: 'понимает' },
      questions: [
        { q: 'Wie alt war Karim bei der Ankunft?', ru: 'Сколько было Кариму при приезде?', options: ['Vier', 'Sechs', 'Zwei'], answer: 'Vier' },
        { q: 'Was bekommt Karim zur Einschulung?', ru: 'Что Карим получает к первому классу?', options: ['Eine Schultasche und eine Schultüte', 'Ein Fahrrad', 'Ein Handy'], answer: 'Eine Schultasche und eine Schultüte' },
        { q: 'In welcher Klasse ist Nour?', ru: 'В каком классе Нур?', options: ['In der dritten', 'In der ersten', 'In der fünften'], answer: 'In der dritten' },
      ],
      translate: [
        { de: 'Wir suchen einen Betreuungsplatz.', ru: 'Мы ищем место в детском саду.', wrongRu: ['Мы ищем школу.', 'Мы нашли место в саду.'] },
        { de: 'Bald ist seine Einschulung.', ru: 'Скоро он идёт в первый класс.', wrongRu: ['Скоро у него день рождения.', 'Скоро он заканчивает школу.'] },
        { de: 'Der Elternabend ist am Mittwoch.', ru: 'Родительское собрание в среду.', wrongRu: ['Экскурсия в среду.', 'Родительское собрание в пятницу.'] },
      ],
    },
    {
      lesson: 1, title: 'Hausaufgaben und Zeugnisse',
      de: `Nach der Schule geht Nour in den Hort. Dort macht sie ihre Hausaufgaben. Um sechzehn Uhr holt Leyla sie ab. Der Schulweg dauert nur zehn Minuten.

Im Juli gibt es Zeugnisse. Nour hat sehr gute Noten. In Mathe hat sie eine Eins! Leyla ist zuerst verwirrt: „Eine Eins? Ist das schlecht?“ Die Lehrerin lacht: „Nein, in Deutschland ist die Eins die beste Note.“

Dann beginnen die Sommerferien. Sie dauern sechs Wochen. Einmal ist Nour krank. Leyla muss sie in der Schule entschuldigen und einen Zettel schreiben. In Deutschland gibt es eine Schulpflicht.`,
      ru: `После школы Нур идёт в продлёнку. Там она делает домашнее задание. В шестнадцать часов Лейла её забирает. Дорога в школу занимает всего десять минут.

В июле выдают табели. У Нур очень хорошие оценки. По математике у неё единица! Лейла сначала растеряна: «Единица? Это плохо?» Учительница смеётся: «Нет, в Германии единица — лучшая оценка».

Потом начинаются летние каникулы. Они длятся шесть недель. Однажды Нур заболела. Лейле нужно отпросить её из школы и написать записку. В Германии школа обязательна.`,
      gloss: { lacht: 'смеётся', deutschland: 'Германия', nour: 'Нур (имя)', leyla: 'Лейла (имя)', sechzehn: 'шестнадцать', holt: '(holt … ab) забирает', juli: 'июль', mathe: 'математика', eins: 'единица (лучшая оценка)', verwirrt: 'растеряна', beste: 'лучшая', sommerferien: 'летние каникулы', zettel: 'записка' },
      questions: [
        { q: 'Wo macht Nour ihre Hausaufgaben?', ru: 'Где Нур делает домашнее задание?', options: ['Im Hort', 'Zu Hause', 'In der Kita'], answer: 'Im Hort' },
        { q: 'Was ist in Deutschland die beste Note?', ru: 'Какая оценка в Германии лучшая?', options: ['Die Eins', 'Die Sechs', 'Die Fünf'], answer: 'Die Eins' },
        { q: 'Wie lange dauern die Sommerferien?', ru: 'Сколько длятся летние каникулы?', options: ['Sechs Wochen', 'Drei Monate', 'Zwei Wochen'], answer: 'Sechs Wochen' },
      ],
      translate: [
        { de: 'Hast du deine Hausaufgaben gemacht?', ru: 'Ты сделал домашнее задание?', wrongRu: ['Ты взял домашнее задание?', 'У тебя есть домашнее задание?'] },
        { de: 'In Mathe hat sie eine Eins.', ru: 'По математике у неё отлично.', wrongRu: ['По математике у неё плохо.', 'По немецкому у неё отлично.'] },
        { de: 'Die Ferien dauern sechs Wochen.', ru: 'Каникулы длятся шесть недель.', wrongRu: ['Каникулы длятся шесть дней.', 'Учебный год длится шесть недель.'] },
      ],
    },
  ],
};
