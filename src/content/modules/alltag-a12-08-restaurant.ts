import type { Module } from '../types.ts';

// A1.2 alltag 08: in a restaurant — reservation, menu, ordering (lesson 0); bill, paying separately, tip (lesson 1).

export const module: Module = {
  id: 'alltag-a12-08-restaurant', sphere: 'alltag', level: 'A1.2',
  title: 'Im Restaurant', subtitle: 'В ресторане: забронировать столик, меню, заказ, счёт, раздельная оплата и чаевые.',
  words: [
    { id: 'all-a12-08-restaurant', icon: 'UtensilsCrossed', de: 'Restaurant', pos: 'noun', article: 'das', plural: 'Restaurants', ru: 'ресторан', example: { de: 'Das Restaurant ist am Markt.', ru: 'Ресторан на рыночной площади.', cloze: 'Restaurant' } },
    { id: 'all-a12-08-reservieren', icon: 'CalendarCheck', de: 'reservieren', pos: 'verb', ru: 'бронировать', forms: 'er reserviert · hat reserviert', example: { de: 'Ich möchte einen Tisch für vier Personen reservieren.', ru: 'Я хочу забронировать столик на четверых.', cloze: 'reservieren' } },
    { id: 'all-a12-08-tisch', icon: 'Table', de: 'Tisch', pos: 'noun', article: 'der', plural: 'Tische', ru: 'стол, столик', example: { de: 'Ist dieser Tisch frei?', ru: 'Этот столик свободен?', cloze: 'Tisch' } },
    { id: 'all-a12-08-speisekarte', icon: 'BookOpen', de: 'Speisekarte', pos: 'noun', article: 'die', plural: 'Speisekarten', ru: 'меню', parts: ['Speise', 'karte'], example: { de: 'Die Speisekarte, bitte.', ru: 'Меню, пожалуйста.', cloze: 'Speisekarte' } },
    { id: 'all-a12-08-kellner', icon: 'User', de: 'Kellner', pos: 'noun', article: 'der', plural: 'Kellner', ru: 'официант', note: 'Официантка — die Kellnerin. Обращение: Entschuldigung! / Hallo!', example: { de: 'Der Kellner bringt die Getränke.', ru: 'Официант приносит напитки.', cloze: 'Kellner' } },
    { id: 'all-a12-08-bestellen', icon: 'ClipboardList', de: 'bestellen', pos: 'verb', ru: 'заказывать', forms: 'er bestellt · hat bestellt', example: { de: 'Möchten Sie schon bestellen?', ru: 'Вы уже готовы заказать?', cloze: 'bestellen' } },
    { id: 'all-a12-08-vegetarisch', icon: 'Leaf', de: 'vegetarisch', pos: 'adj', ru: 'вегетарианский', note: 'vegan — веганский.', example: { de: 'Haben Sie auch etwas Vegetarisches?', ru: 'У вас есть что-нибудь вегетарианское?', cloze: 'Vegetarisches' } },
    { id: 'all-a12-08-scharf', icon: 'Flame', de: 'scharf', pos: 'adj', ru: 'острый', example: { de: 'Ist das Essen scharf?', ru: 'Блюдо острое?', cloze: 'scharf' } },

    { id: 'all-a12-08-vorspeise', icon: 'Salad', de: 'Vorspeise', pos: 'noun', article: 'die', plural: 'Vorspeisen', ru: 'закуска, первое блюдо', parts: ['Vor', 'speise'], example: { de: 'Als Vorspeise nehme ich eine Suppe.', ru: 'На закуску я возьму суп.', cloze: 'Vorspeise' } },
    { id: 'all-a12-08-hauptgericht', icon: 'UtensilsCrossed', de: 'Hauptgericht', pos: 'noun', article: 'das', plural: 'Hauptgerichte', ru: 'основное блюдо', parts: ['Haupt', 'gericht'], example: { de: 'Als Hauptgericht möchte ich den Fisch.', ru: 'На основное я хотел бы рыбу.', cloze: 'Hauptgericht' } },
    { id: 'all-a12-08-nachspeise', icon: 'IceCreamCone', de: 'Nachspeise', pos: 'noun', article: 'die', plural: 'Nachspeisen', ru: 'десерт', parts: ['Nach', 'speise'], note: 'Синоним — der Nachtisch.', example: { de: 'Als Nachspeise gibt es Eis.', ru: 'На десерт мороженое.', cloze: 'Nachspeise' } },
    { id: 'all-a12-08-getraenk', icon: 'CupSoda', de: 'Getränk', pos: 'noun', article: 'das', plural: 'Getränke', ru: 'напиток', example: { de: 'Was möchten Sie als Getränk?', ru: 'Что будете пить?', cloze: 'Getränk' } },
    { id: 'all-a12-08-rechnung', icon: 'Receipt', de: 'Rechnung', pos: 'noun', article: 'die', plural: 'Rechnungen', ru: 'счёт', note: 'Die Rechnung, bitte! / Zahlen, bitte! — Счёт, пожалуйста!', example: { de: 'Die Rechnung, bitte!', ru: 'Счёт, пожалуйста!', cloze: 'Rechnung' } },
    { id: 'all-a12-08-getrennt', icon: 'Split', de: 'getrennt', pos: 'adj', ru: 'раздельно', note: 'Zusammen oder getrennt? — Вместе или раздельно?', example: { de: 'Wir zahlen getrennt.', ru: 'Мы платим раздельно.', cloze: 'getrennt' } },
    { id: 'all-a12-08-trinkgeld', icon: 'Coins', de: 'Trinkgeld', pos: 'noun', article: 'das', plural: 'Trinkgelder', ru: 'чаевые', parts: ['Trink', 'geld'], note: 'Обычно 5–10 %; называют сумму сразу: «Machen Sie 30».', example: { de: 'In Deutschland gibt man etwa zehn Prozent Trinkgeld.', ru: 'В Германии дают около десяти процентов чаевых.', cloze: 'Trinkgeld' } },
    { id: 'all-a12-08-stimmt-so', icon: 'ThumbsUp', de: 'Stimmt so!', pos: 'phrase', ru: 'Сдачи не надо!', example: { de: 'Achtundzwanzig Euro? Hier sind dreißig. Stimmt so!', ru: 'Двадцать восемь евро? Вот тридцать. Сдачи не надо!', cloze: 'Stimmt so' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Abend im Restaurant',
      de: `Amir und Leyla haben ihren Hochzeitstag. Amir hat einen Tisch für zwei Personen reserviert. Der Kellner bringt die Speisekarte. „Was möchten Sie trinken?“ – „Zwei Apfelschorlen, bitte.“

Leyla fragt: „Haben Sie auch etwas Vegetarisches?“ – „Ja, die Gemüsepfanne.“ – „Ist sie scharf?“ – „Nein, gar nicht.“

Dann bestellen sie. Als Vorspeise nehmen beide eine Suppe. Als Hauptgericht nimmt Leyla die Gemüsepfanne, Amir den Fisch.`,
      ru: `У Амира и Лейлы годовщина свадьбы. Амир забронировал столик на двоих. Официант приносит меню. «Что будете пить?» — «Два яблочных сока с минералкой, пожалуйста».

Лейла спрашивает: «У вас есть что-нибудь вегетарианское?» — «Да, овощная сковорода». — «Она острая?» — «Нет, совсем нет».

Потом они заказывают. На закуску оба берут суп. На основное Лейла берёт овощную сковороду, Амир — рыбу.`,
      gloss: { karims: 'Карима (чей?)', apfelschorle: 'яблочный сок с минеральной водой', wein: 'вино', gar: 'вовсе (gar nicht — вообще нет)', amir: 'Амир (имя)', leyla: 'Лейла (имя)', hochzeitstag: 'годовщина свадьбы', personen: 'человек, персоны', apfelschorlen: 'яблочный сок с минеральной водой', gemüsepfanne: 'овощная сковорода (блюдо)', beide: 'оба' },
      questions: [
        { q: 'Warum gehen sie ins Restaurant?', ru: 'Почему они идут в ресторан?', options: ['Sie haben ihren Hochzeitstag.', 'Es ist Karims Geburtstag.', 'Sie haben Hunger.'], answer: 'Sie haben ihren Hochzeitstag.' },
        { q: 'Was trinken sie?', ru: 'Что они пьют?', options: ['Apfelschorle', 'Wein', 'Tee'], answer: 'Apfelschorle' },
        { q: 'Was isst Amir als Hauptgericht?', ru: 'Что Амир ест на основное?', options: ['Den Fisch', 'Die Gemüsepfanne', 'Eine Suppe'], answer: 'Den Fisch' },
      ],
      translate: [
        { de: 'Die Speisekarte, bitte.', ru: 'Меню, пожалуйста.', wrongRu: ['Счёт, пожалуйста.', 'Воду, пожалуйста.'] },
        { de: 'Ist das Essen scharf?', ru: 'Блюдо острое?', wrongRu: ['Блюдо горячее?', 'Блюдо вкусное?'] },
        { de: 'Ich möchte einen Tisch reservieren.', ru: 'Я хочу забронировать столик.', wrongRu: ['Я хочу заказать еду.', 'Я хочу оплатить столик.'] },
      ],
    },
    {
      lesson: 1, title: 'Zahlen, bitte!',
      de: `Das Essen ist sehr lecker. Als Nachspeise teilen sie ein Eis. Dann ruft Amir den Kellner: „Die Rechnung, bitte!“

„Zusammen oder getrennt?“, fragt der Kellner. „Zusammen“, sagt Amir. „Das macht achtundfünfzig Euro.“

Amir gibt ihm sechzig Euro und sagt: „Stimmt so!“ Auf dem Heimweg fragt Leyla: „Wie viel Trinkgeld gibt man in Deutschland?“ – „Etwa zehn Prozent. Beim Bäcker gibt man meistens keins.“`,
      ru: `Еда очень вкусная. На десерт они делят одно мороженое. Потом Амир зовёт официанта: «Счёт, пожалуйста!»

«Вместе или раздельно?» — спрашивает официант. «Вместе», — говорит Амир. «С вас пятьдесят восемь евро».

Амир даёт ему шестьдесят евро и говорит: «Сдачи не надо!» По дороге домой Лейла спрашивает: «Сколько чаевых дают в Германии?» — «Примерно десять процентов. В булочной обычно не дают».`,
      gloss: { deutschland: 'Германия', meistens: 'чаще всего', kuchen: 'торт, пирог', gar: 'вовсе (gar nicht — вообще нет)', amir: 'Амир (имя)', leyla: 'Лейла (имя)', teilen: 'делят', eis: 'мороженое', zusammen: 'вместе', achtundfünfzig: 'пятьдесят восемь', heimweg: 'дорога домой', etwa: 'примерно', prozent: 'процентов', bäcker: 'пекарь; (beim Bäcker) в булочной', keins: 'никаких, ни одного', man: '(gibt man) дают' },
      questions: [
        { q: 'Was essen sie als Nachspeise?', ru: 'Что они едят на десерт?', options: ['Ein Eis', 'Kuchen', 'Obst'], answer: 'Ein Eis' },
        { q: 'Wie viel kostet das Essen?', ru: 'Сколько стоит ужин?', options: ['Achtundfünfzig Euro', 'Sechzig Euro', 'Achtzehn Euro'], answer: 'Achtundfünfzig Euro' },
        { q: 'Wie viel Trinkgeld gibt man im Restaurant?', ru: 'Сколько чаевых дают в ресторане?', options: ['Etwa zehn Prozent', 'Gar nichts', 'Fünfzig Prozent'], answer: 'Etwa zehn Prozent' },
      ],
      translate: [
        { de: 'Die Rechnung, bitte!', ru: 'Счёт, пожалуйста!', wrongRu: ['Меню, пожалуйста!', 'Десерт, пожалуйста!'] },
        { de: 'Wir zahlen getrennt.', ru: 'Мы платим раздельно.', wrongRu: ['Мы платим вместе.', 'Мы платим картой.'] },
        { de: 'Das stimmt so, danke!', ru: 'Сдачи не надо, спасибо!', wrongRu: ['Дайте сдачу, пожалуйста!', 'Это неправильно, спасибо!'] },
      ],
    },
  ],
};
