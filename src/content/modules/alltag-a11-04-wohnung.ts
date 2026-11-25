import type { Module } from '../types.ts';

// A1.1 alltag 04: the flat — rooms, kitchen, balcony (lesson 0); rent, floor, key, neighbours (lesson 1).

export const module: Module = {
  id: 'alltag-a11-04-wohnung', sphere: 'alltag', level: 'A1.1',
  title: 'Die Wohnung', subtitle: 'Квартира: комнаты, кухня, балкон, аренда, этаж, ключ и соседи.',
  words: [
    { id: 'all-a11-04-wohnung', icon: 'Building', de: 'Wohnung', pos: 'noun', article: 'die', plural: 'Wohnungen', ru: 'квартира', example: { de: 'Unsere Wohnung hat drei Zimmer.', ru: 'В нашей квартире три комнаты.', cloze: 'Wohnung' } },
    { id: 'all-a11-04-zimmer', icon: 'DoorOpen', de: 'Zimmer', pos: 'noun', article: 'das', plural: 'Zimmer', ru: 'комната', example: { de: 'Das Zimmer ist klein.', ru: 'Комната маленькая.', cloze: 'Zimmer' } },
    { id: 'all-a11-04-kueche', icon: 'CookingPot', imageQuery: 'small kitchen', de: 'Küche', pos: 'noun', article: 'die', plural: 'Küchen', ru: 'кухня', example: { de: 'Die Küche ist neu.', ru: 'Кухня новая.', cloze: 'Küche' } },
    { id: 'all-a11-04-bad', icon: 'Bath', de: 'Bad', pos: 'noun', article: 'das', plural: 'Bäder', ru: 'ванная', example: { de: 'Das Bad hat kein Fenster.', ru: 'В ванной нет окна.', cloze: 'Bad' } },
    { id: 'all-a11-04-schlafzimmer', icon: 'BedDouble', de: 'Schlafzimmer', pos: 'noun', article: 'das', plural: 'Schlafzimmer', ru: 'спальня', parts: ['Schlaf', 'zimmer'], example: { de: 'Das Schlafzimmer ist ruhig.', ru: 'Спальня тихая.', cloze: 'Schlafzimmer' } },
    { id: 'all-a11-04-wohnzimmer', icon: 'Sofa', imageQuery: 'living room', de: 'Wohnzimmer', pos: 'noun', article: 'das', plural: 'Wohnzimmer', ru: 'гостиная', parts: ['Wohn', 'zimmer'], example: { de: 'Im Wohnzimmer steht ein Sofa.', ru: 'В гостиной стоит диван.', cloze: 'Wohnzimmer' } },
    { id: 'all-a11-04-balkon', icon: 'Fence', imageQuery: 'balcony flowers', de: 'Balkon', pos: 'noun', article: 'der', plural: 'Balkone', ru: 'балкон', example: { de: 'Die Wohnung hat einen Balkon.', ru: 'В квартире есть балкон.', cloze: 'Balkon' } },
    { id: 'all-a11-04-hell', icon: 'Sun', de: 'hell', pos: 'adj', ru: 'светлый', note: 'Противоположность — dunkel.', example: { de: 'Das Wohnzimmer ist schön hell.', ru: 'Гостиная приятно светлая.', cloze: 'hell' } },

    { id: 'all-a11-04-gross', icon: 'Maximize2', de: 'groß', pos: 'adj', ru: 'большой', example: { de: 'Die Küche ist groß.', ru: 'Кухня большая.', cloze: 'groß' } },
    { id: 'all-a11-04-klein', icon: 'Minimize2', de: 'klein', pos: 'adj', ru: 'маленький', example: { de: 'Das Bad ist sehr klein.', ru: 'Ванная очень маленькая.', cloze: 'klein' } },
    { id: 'all-a11-04-miete', icon: 'Euro', de: 'Miete', pos: 'noun', article: 'die', plural: 'Mieten', ru: 'арендная плата', example: { de: 'Die Miete ist achthundert Euro.', ru: 'Аренда — восемьсот евро.', cloze: 'Miete' } },
    { id: 'all-a11-04-stock', icon: 'Layers', de: 'Stock', pos: 'noun', article: 'der', plural: 'Stockwerke', ru: 'этаж', note: 'im ersten Stock — на втором этаже (по-русски), т.к. первый — Erdgeschoss.', example: { de: 'Wir wohnen im dritten Stock.', ru: 'Мы живём на четвёртом этаже.', cloze: 'Stock' } },
    { id: 'all-a11-04-haus', icon: 'Home', de: 'Haus', pos: 'noun', article: 'das', plural: 'Häuser', ru: 'дом', example: { de: 'Das Haus ist alt, aber schön.', ru: 'Дом старый, но красивый.', cloze: 'Haus' } },
    { id: 'all-a11-04-nachbar', icon: 'Users', de: 'Nachbar', pos: 'noun', article: 'der', plural: 'Nachbarn', ru: 'сосед', note: 'Соседка — die Nachbarin. Особое склонение: den Nachbarn.', example: { de: 'Unser Nachbar ist sehr nett.', ru: 'Наш сосед очень милый.', cloze: 'Nachbar' } },
    { id: 'all-a11-04-schluessel', icon: 'Key', de: 'Schlüssel', pos: 'noun', article: 'der', plural: 'Schlüssel', ru: 'ключ', example: { de: 'Hier ist der Schlüssel für die Wohnung.', ru: 'Вот ключ от квартиры.', cloze: 'Schlüssel' } },
    { id: 'all-a11-04-moebel', icon: 'Armchair', de: 'Möbel', pos: 'noun', article: 'die', pluralOnly: true, ru: 'мебель', note: 'Обычно мн. ч.; один предмет — das Möbelstück.', example: { de: 'Wir brauchen noch Möbel.', ru: 'Нам ещё нужна мебель.', cloze: 'Möbel' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die neue Wohnung',
      de: `Amir und Leyla haben eine neue Wohnung in Leipzig. Sie hat drei Zimmer, eine Küche und ein Bad.

Das Wohnzimmer ist groß und hell. Es hat einen Balkon. Das Schlafzimmer ist ruhig. Die Kinder haben ein Zimmer zusammen. Das Bad ist klein, aber neu.

Leyla sagt: „Die Küche ist super! Hier koche ich gern.“`,
      ru: `У Амира и Лейлы новая квартира в Лейпциге. В ней три комнаты, кухня и ванная.

Гостиная большая и светлая. В ней есть балкон. Спальня тихая. У детей одна комната на двоих. Ванная маленькая, но новая.

Лейла говорит: «Кухня — супер! Здесь я с удовольствием готовлю».`,
      gloss: { amir: 'Амир (имя)', leyla: 'Лейла (имя)', leipzig: 'Лейпциг', kinder: 'дети', super: 'супер', koche: 'готовлю' },
      questions: [
        { q: 'Wie viele Zimmer hat die Wohnung?', ru: 'Сколько комнат в квартире?', options: ['Drei', 'Zwei', 'Fünf'], answer: 'Drei' },
        { q: 'Wie ist das Wohnzimmer?', ru: 'Какая гостиная?', options: ['Groß und hell', 'Klein und dunkel', 'Alt'], answer: 'Groß und hell' },
        { q: 'Was findet Leyla super?', ru: 'Что Лейла считает супер?', options: ['Die Küche', 'Das Bad', 'Den Balkon'], answer: 'Die Küche' },
      ],
      translate: [
        { de: 'Die Wohnung hat einen Balkon.', ru: 'В квартире есть балкон.', wrongRu: ['В квартире нет балкона.', 'В доме есть балкон.'] },
        { de: 'Das Bad ist klein.', ru: 'Ванная маленькая.', wrongRu: ['Ванная большая.', 'Кухня маленькая.'] },
        { de: 'Das Wohnzimmer ist hell.', ru: 'Гостиная светлая.', wrongRu: ['Гостиная тёмная.', 'Спальня светлая.'] },
      ],
    },
    {
      lesson: 1, title: 'Im dritten Stock',
      de: `Das Haus ist alt. Die Wohnung ist im dritten Stock. Es gibt keinen Aufzug. Die Miete ist achthundert Euro im Monat.

Der Vermieter gibt Amir den Schlüssel. „Willkommen! Ihre Nachbarin ist Frau Schulz. Sie ist sehr nett.“

Die Wohnung ist noch leer. Amir und Leyla brauchen Möbel: ein Sofa, einen Tisch und Betten für die Kinder.`,
      ru: `Дом старый. Квартира на четвёртом этаже. Лифта нет. Аренда — восемьсот евро в месяц.

Арендодатель отдаёт Амиру ключ. «Добро пожаловать! Ваша соседка — госпожа Шульц. Она очень милая».

Квартира ещё пустая. Амиру и Лейле нужна мебель: диван, стол и кровати для детей.`,
      gloss: { nett: 'милый, приятный', erdgeschoss: 'первый (цокольный) этаж', dreihundert: 'триста', amir: 'Амир (имя)', leyla: 'Лейла (имя)', schulz: 'Шульц (фамилия)', dritten: 'третьем', aufzug: 'лифт', achthundert: 'восемьсот', monat: 'месяц', vermieter: 'арендодатель', willkommen: 'добро пожаловать', nachbarin: 'соседка', leer: 'пустой', sofa: 'диван', betten: 'кровати' },
      questions: [
        { q: 'In welchem Stock ist die Wohnung?', ru: 'На каком этаже квартира?', options: ['Im dritten Stock', 'Im ersten Stock', 'Im Erdgeschoss'], answer: 'Im dritten Stock' },
        { q: 'Wie hoch ist die Miete?', ru: 'Какая аренда?', options: ['Achthundert Euro', 'Dreihundert Euro', 'Tausend Euro'], answer: 'Achthundert Euro' },
        { q: 'Was brauchen Amir und Leyla?', ru: 'Что нужно Амиру и Лейле?', options: ['Möbel', 'Einen Schlüssel', 'Eine neue Wohnung'], answer: 'Möbel' },
      ],
      translate: [
        { de: 'Hier ist der Schlüssel.', ru: 'Вот ключ.', wrongRu: ['Где ключ?', 'Вот квартира.'] },
        { de: 'Die Miete ist achthundert Euro.', ru: 'Аренда — восемьсот евро.', wrongRu: ['Аренда — восемьдесят евро.', 'Квартира стоит восемьсот евро.'] },
        { de: 'Wir brauchen noch Möbel.', ru: 'Нам ещё нужна мебель.', wrongRu: ['У нас уже есть мебель.', 'Нам ещё нужна квартира.'] },
      ],
    },
  ],
};
