import type { Module } from '../types.ts';

// A1.1 pflege 06: meals for patients — breakfast, lunch, drinks (lesson 0); thirst, tray, taste (lesson 1).

export const module: Module = {
  id: 'pflege-a11-06-essen', sphere: 'pflege', level: 'A1.1',
  title: 'Essen und Trinken', subtitle: 'Завтрак, обед, ужин: спросить пациента, что он хочет есть и пить.',
  words: [
    { id: 'pfl-a11-06-fruehstueck', icon: 'Croissant', imageQuery: 'hospital breakfast tray', de: 'Frühstück', pos: 'noun', article: 'das', plural: 'Frühstücke', ru: 'завтрак', note: 'frühstücken — завтракать.', collocation: { de: 'das Frühstück bringen', ru: 'принести завтрак' }, example: { de: 'Das Frühstück kommt um sieben Uhr.', ru: 'Завтрак приносят в семь часов.', cloze: 'Frühstück' } },
    { id: 'pfl-a11-06-mittagessen', icon: 'UtensilsCrossed', imageQuery: 'lunch plate', de: 'Mittagessen', pos: 'noun', article: 'das', plural: 'Mittagessen', ru: 'обед', parts: ['Mittag', 'essen'], example: { de: 'Zum Mittagessen gibt es Suppe.', ru: 'На обед суп.', cloze: 'Mittagessen' } },
    { id: 'pfl-a11-06-abendessen', icon: 'Sandwich', de: 'Abendessen', pos: 'noun', article: 'das', plural: 'Abendessen', ru: 'ужин', parts: ['Abend', 'essen'], note: 'В Германии ужин часто холодный: хлеб, сыр, колбаса (Abendbrot).', example: { de: 'Das Abendessen ist um achtzehn Uhr.', ru: 'Ужин в восемнадцать часов.', cloze: 'Abendessen' } },
    { id: 'pfl-a11-06-essen', icon: 'Utensils', de: 'essen', pos: 'verb', ru: 'есть, кушать', forms: 'er isst · hat gegessen', note: 'du isst, er isst. Das Essen — еда.', example: { de: 'Herr Schmidt isst nicht viel.', ru: 'Господин Шмидт ест немного.', cloze: 'isst' } },
    { id: 'pfl-a11-06-trinken', icon: 'CupSoda', de: 'trinken', pos: 'verb', ru: 'пить', forms: 'er trinkt · hat getrunken', note: 'Пожилые пациенты часто пьют слишком мало — важно напоминать.', collocation: { de: 'genug trinken', ru: 'пить достаточно' }, example: { de: 'Bitte trinken Sie mehr Wasser.', ru: 'Пожалуйста, пейте больше воды.', cloze: 'trinken' } },
    { id: 'pfl-a11-06-wasser', icon: 'GlassWater', imageQuery: 'glass of water', de: 'Wasser', pos: 'noun', article: 'das', ru: 'вода', note: 'Wasser mit / ohne Kohlensäure — с газом / без газа.', collocation: { de: 'ein Glas Wasser', ru: 'стакан воды' }, example: { de: 'Möchten Sie ein Glas Wasser?', ru: 'Хотите стакан воды?', cloze: 'Wasser' } },
    { id: 'pfl-a11-06-tee', icon: 'Coffee', imageQuery: 'cup of tea', de: 'Tee', pos: 'noun', article: 'der', plural: 'Tees', ru: 'чай', example: { de: 'Ich trinke gern Tee.', ru: 'Я люблю пить чай.', cloze: 'Tee' } },
    { id: 'pfl-a11-06-hunger', icon: 'Soup', de: 'Hunger', pos: 'noun', article: 'der', ru: 'голод', note: 'Hunger haben — быть голодным. Ich habe Hunger. — Я голоден.', collocation: { de: 'Hunger haben', ru: 'быть голодным' }, example: { de: 'Haben Sie Hunger?', ru: 'Вы голодны?', cloze: 'Hunger' } },

    { id: 'pfl-a11-06-durst', icon: 'Droplet', de: 'Durst', pos: 'noun', article: 'der', ru: 'жажда', note: 'Durst haben — хотеть пить.', collocation: { de: 'Durst haben', ru: 'хотеть пить' }, example: { de: 'Ich habe Durst.', ru: 'Я хочу пить.', cloze: 'Durst' } },
    { id: 'pfl-a11-06-brot', icon: 'Wheat', imageQuery: 'bread slices', de: 'Brot', pos: 'noun', article: 'das', plural: 'Brote', ru: 'хлеб', note: 'das Brötchen — булочка.', example: { de: 'Zum Frühstück gibt es Brot und Käse.', ru: 'На завтрак хлеб и сыр.', cloze: 'Brot' } },
    { id: 'pfl-a11-06-suppe', icon: 'Soup', imageQuery: 'bowl of soup', de: 'Suppe', pos: 'noun', article: 'die', plural: 'Suppen', ru: 'суп', example: { de: 'Die Suppe ist zu heiß.', ru: 'Суп слишком горячий.', cloze: 'Suppe' } },
    { id: 'pfl-a11-06-glas', icon: 'GlassWater', de: 'Glas', pos: 'noun', article: 'das', plural: 'Gläser', ru: 'стакан; стекло', collocation: { de: 'ein Glas Saft', ru: 'стакан сока' }, example: { de: 'Das Glas ist leer.', ru: 'Стакан пустой.', cloze: 'Glas' } },
    { id: 'pfl-a11-06-tasse', icon: 'Coffee', imageQuery: 'cup', de: 'Tasse', pos: 'noun', article: 'die', plural: 'Tassen', ru: 'чашка', collocation: { de: 'eine Tasse Tee', ru: 'чашка чая', accept: ['eine Tasse Kaffee'] }, example: { de: 'Möchten Sie eine Tasse Tee?', ru: 'Хотите чашку чая?', cloze: 'Tasse' } },
    { id: 'pfl-a11-06-tablett', icon: 'RectangleHorizontal', imageQuery: 'hospital food tray', de: 'Tablett', pos: 'noun', article: 'das', plural: 'Tabletts', ru: 'поднос', note: 'Не путать с die Tablette — таблетка!', example: { de: 'Ich stelle das Tablett auf den Tisch.', ru: 'Я ставлю поднос на стол.', cloze: 'Tablett' } },
    { id: 'pfl-a11-06-schmecken', icon: 'ChefHat', de: 'schmecken', pos: 'verb', ru: 'быть вкусным, нравиться (на вкус)', forms: 'es schmeckt · hat geschmeckt', note: 'Schmeckt es Ihnen? — Вам вкусно? Es schmeckt gut.', collocation: { de: 'Schmeckt es Ihnen?', ru: 'Вам вкусно?' }, example: { de: 'Die Suppe schmeckt gut.', ru: 'Суп вкусный.', cloze: 'schmeckt' } },
    { id: 'pfl-a11-06-satt', icon: 'CircleCheck', de: 'satt', pos: 'adj', ru: 'сытый', note: 'Ich bin satt. — Я наелся / наелась.', example: { de: 'Danke, ich bin satt.', ru: 'Спасибо, я наелся.', cloze: 'satt' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Das Frühstück',
      de: `Um sieben Uhr bringt Olena das Frühstück. Es gibt Brot, Käse und Marmelade. Herr Schmidt hat Hunger. Er isst zwei Brote.

Olena fragt: „Was möchten Sie trinken? Tee oder Kaffee?“ Herr Schmidt sagt: „Tee, bitte. Und ein Glas Wasser.“

Frau Wolf isst nicht viel. Sie trinkt auch nicht viel. Olena sagt: „Frau Wolf, bitte trinken Sie mehr Wasser. Das ist wichtig.“ Zum Mittagessen gibt es Suppe. Das Abendessen ist um achtzehn Uhr.`,
      ru: `В семь часов Олена приносит завтрак. Есть хлеб, сыр и варенье. Господин Шмидт голоден. Он съедает два бутерброда.

Олена спрашивает: «Что вы хотите пить? Чай или кофе?» Господин Шмидт говорит: «Чай, пожалуйста. И стакан воды».

Госпожа Вольф ест немного. И пьёт тоже немного. Олена говорит: «Госпожа Вольф, пожалуйста, пейте больше воды. Это важно». На обед будет суп. Ужин в восемнадцать часов.`,
      gloss: { olena: 'Олена (имя)', schmidt: 'Шмидт (фамилия)', wolf: 'Вольф (фамилия)', herr: 'господин', frau: 'госпожа', sieben: 'семь', zwei: 'два', achtzehn: 'восемнадцать', bringt: 'приносит', gibt: '(es gibt) есть, имеется', käse: 'сыр', marmelade: 'варенье, джем', fragt: 'спрашивает', möchten: 'хотите, хотели бы', kaffee: 'кофе', oder: 'или', sagt: 'говорит', viel: 'много', mehr: 'больше', wichtig: 'важно, важный', zum: 'на (zu + dem)', wer: 'кто', was: 'что', wann: 'когда', brote: 'хлеба; бутерброды', zwölf: 'двенадцать', wenig: 'мало' },
      questions: [
        { q: 'Was trinkt Herr Schmidt?', ru: 'Что пьёт господин Шмидт?', options: ['Tee und Wasser', 'Kaffee', 'Nur Wasser'], answer: 'Tee und Wasser' },
        { q: 'Wer trinkt zu wenig?', ru: 'Кто пьёт слишком мало?', options: ['Frau Wolf', 'Herr Schmidt', 'Olena'], answer: 'Frau Wolf' },
        { q: 'Wann ist das Abendessen?', ru: 'Когда ужин?', options: ['Um achtzehn Uhr', 'Um sieben Uhr', 'Um zwölf Uhr'], answer: 'Um achtzehn Uhr' },
      ],
      translate: [
        { de: 'Was möchten Sie trinken?', ru: 'Что вы хотите пить?', wrongRu: ['Что вы хотите есть?', 'Что вы пьёте?'] },
        { de: 'Herr Schmidt hat Hunger.', ru: 'Господин Шмидт голоден.', wrongRu: ['Господин Шмидт хочет пить.', 'Господин Шмидт сыт.'] },
        { de: 'Bitte trinken Sie mehr Wasser.', ru: 'Пожалуйста, пейте больше воды.', wrongRu: ['Пожалуйста, пейте меньше воды.', 'Пожалуйста, ешьте больше хлеба.'] },
      ],
    },
    {
      lesson: 1, title: 'Schmeckt es Ihnen?',
      de: `Zum Mittagessen bringt Tom die Tabletts. Er stellt ein Tablett auf den Tisch von Frau Wolf. Es gibt Suppe und Brot.

Tom fragt: „Schmeckt es Ihnen?“ Frau Wolf sagt: „Die Suppe schmeckt gut. Aber sie ist zu heiß.“ Nach zehn Minuten isst sie die Suppe. Dann sagt sie: „Ich bin satt.“

Am Nachmittag hat Frau Wolf Durst. Tom bringt eine Tasse Tee. Das Glas Wasser ist leer. Er bringt auch neues Wasser.`,
      ru: `На обед Том приносит подносы. Он ставит поднос на стол госпожи Вольф. Суп и хлеб.

Том спрашивает: «Вам вкусно?» Госпожа Вольф говорит: «Суп вкусный. Но он слишком горячий». Через десять минут она ест суп. Потом говорит: «Я наелась».

Днём госпоже Вольф хочется пить. Том приносит чашку чая. Стакан с водой пустой. Он приносит и свежую воду.`,
      gloss: { tom: 'Том (имя)', wolf: 'Вольф (фамилия)', frau: 'госпожа', zum: 'на (zu + dem)', bringt: 'приносит', stellt: 'ставит', tisch: 'стол', gibt: '(es gibt) есть, имеется', fragt: 'спрашивает', sagt: 'говорит', aber: 'но', heiß: 'горячий', zehn: 'десять', dann: 'потом, затем', nachmittag: 'вторая половина дня', leer: 'пустой', neues: 'новую, свежую', wie: 'как, какой', was: 'что', kalt: 'холодный', tabletts: 'подносы', ihnen: 'вам', kaffee: 'кофе' },
      questions: [
        { q: 'Wie ist die Suppe?', ru: 'Какой суп?', options: ['Zu heiß', 'Zu kalt', 'Nicht gut'], answer: 'Zu heiß' },
        { q: 'Was bringt Tom am Nachmittag?', ru: 'Что Том приносит днём?', options: ['Eine Tasse Tee', 'Suppe', 'Kaffee'], answer: 'Eine Tasse Tee' },
        { q: 'Wie ist das Glas?', ru: 'Какой стакан?', options: ['Leer', 'Heiß', 'Neu'], answer: 'Leer' },
      ],
      translate: [
        { de: 'Schmeckt es Ihnen?', ru: 'Вам вкусно?', wrongRu: ['Вы голодны?', 'Вам холодно?'] },
        { de: 'Danke, ich bin satt.', ru: 'Спасибо, я наелся.', wrongRu: ['Спасибо, я голоден.', 'Спасибо, я хочу пить.'] },
        { de: 'Die Suppe ist zu heiß.', ru: 'Суп слишком горячий.', wrongRu: ['Суп слишком холодный.', 'Чай слишком горячий.'] },
      ],
    },
  ],
};
