import type { Module } from '../types.ts';

// A1.1 alltag 06: food — breakfast, bread, cheese, eggs (lesson 0); lunch, fruit, vegetables, rice, fish (lesson 1).

export const module: Module = {
  id: 'alltag-a11-06-essen', sphere: 'alltag', level: 'A1.1',
  title: 'Essen und Trinken', subtitle: 'Еда: завтрак, обед и ужин, хлеб, сыр, яйца, фрукты, овощи, мясо и рыба.',
  words: [
    { id: 'all-a11-06-fruehstueck', icon: 'Croissant', de: 'Frühstück', pos: 'noun', article: 'das', plural: 'Frühstücke', ru: 'завтрак', example: { de: 'Zum Frühstück gibt es Brot.', ru: 'На завтрак хлеб.', cloze: 'Frühstück' } },
    { id: 'all-a11-06-kaffee', icon: 'Coffee', de: 'Kaffee', pos: 'noun', article: 'der', plural: 'Kaffees', ru: 'кофе', example: { de: 'Ich trinke morgens Kaffee.', ru: 'Утром я пью кофе.', cloze: 'Kaffee' } },
    { id: 'all-a11-06-tee', icon: 'Coffee', de: 'Tee', pos: 'noun', article: 'der', plural: 'Tees', ru: 'чай', example: { de: 'Möchtest du einen Tee?', ru: 'Хочешь чаю?', cloze: 'Tee' } },
    { id: 'all-a11-06-brot', icon: 'Wheat', de: 'Brot', pos: 'noun', article: 'das', plural: 'Brote', ru: 'хлеб', example: { de: 'Das Brot ist frisch.', ru: 'Хлеб свежий.', cloze: 'Brot' } },
    { id: 'all-a11-06-kaese', icon: 'Pizza', imageQuery: 'cheese', de: 'Käse', pos: 'noun', article: 'der', ru: 'сыр', example: { de: 'Ich esse gern Käse.', ru: 'Я люблю сыр.', cloze: 'Käse' } },
    { id: 'all-a11-06-wurst', icon: 'Beef', imageQuery: 'sausage', de: 'Wurst', pos: 'noun', article: 'die', plural: 'Würste', ru: 'колбаса, сосиска', example: { de: 'Wir essen keine Wurst.', ru: 'Мы не едим колбасу.', cloze: 'Wurst' } },
    { id: 'all-a11-06-ei', icon: 'Egg', imageQuery: 'eggs', de: 'Ei', pos: 'noun', article: 'das', plural: 'Eier', ru: 'яйцо', example: { de: 'Zum Frühstück esse ich ein Ei.', ru: 'На завтрак я ем яйцо.', cloze: 'Ei' } },
    { id: 'all-a11-06-essen', icon: 'Utensils', de: 'essen', pos: 'verb', ru: 'есть', forms: 'er isst · hat gegessen', note: 'du isst, er isst.', example: { de: 'Was isst du gern?', ru: 'Что ты любишь есть?', cloze: 'isst' } },

    { id: 'all-a11-06-mittagessen', icon: 'UtensilsCrossed', de: 'Mittagessen', pos: 'noun', article: 'das', plural: 'Mittagessen', ru: 'обед', parts: ['Mittag', 'essen'], example: { de: 'Das Mittagessen ist um eins.', ru: 'Обед в час.', cloze: 'Mittagessen' } },
    { id: 'all-a11-06-abendessen', icon: 'Moon', de: 'Abendessen', pos: 'noun', article: 'das', plural: 'Abendessen', ru: 'ужин', parts: ['Abend', 'essen'], example: { de: 'Zum Abendessen gibt es Suppe.', ru: 'На ужин суп.', cloze: 'Abendessen' } },
    { id: 'all-a11-06-obst', icon: 'Apple', de: 'Obst', pos: 'noun', article: 'das', ru: 'фрукты', example: { de: 'Kinder brauchen viel Obst.', ru: 'Детям нужно много фруктов.', cloze: 'Obst' } },
    { id: 'all-a11-06-gemuese', icon: 'Carrot', de: 'Gemüse', pos: 'noun', article: 'das', ru: 'овощи', example: { de: 'Das Gemüse ist vom Markt.', ru: 'Овощи с рынка.', cloze: 'Gemüse' } },
    { id: 'all-a11-06-fleisch', icon: 'Beef', imageQuery: 'meat butcher', de: 'Fleisch', pos: 'noun', article: 'das', ru: 'мясо', note: 'Rindfleisch — говядина, Hähnchen — курица, Schweinefleisch — свинина.', example: { de: 'Wir essen kein Schweinefleisch.', ru: 'Мы не едим свинину.', cloze: 'fleisch' } },
    { id: 'all-a11-06-fisch', icon: 'Fish', imageQuery: 'fresh fish', de: 'Fisch', pos: 'noun', article: 'der', plural: 'Fische', ru: 'рыба', example: { de: 'Am Freitag gibt es Fisch.', ru: 'В пятницу рыба.', cloze: 'Fisch' } },
    { id: 'all-a11-06-reis', icon: 'Wheat', imageQuery: 'rice bowl', de: 'Reis', pos: 'noun', article: 'der', ru: 'рис', example: { de: 'Leyla kocht Reis mit Gemüse.', ru: 'Лейла готовит рис с овощами.', cloze: 'Reis' } },
    { id: 'all-a11-06-lecker', icon: 'Smile', de: 'lecker', pos: 'adj', ru: 'вкусный', example: { de: 'Das Essen ist sehr lecker!', ru: 'Еда очень вкусная!', cloze: 'lecker' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Frühstück bei Haddads',
      de: `Es ist Sonntag. Die Familie Haddad frühstückt zusammen. Es gibt Brot, Käse und Eier. Die Kinder trinken Milch, Leyla trinkt Tee und Amir trinkt Kaffee.

Karim fragt: „Gibt es Wurst?“ Leyla sagt: „Nein, wir essen keine Wurst. Aber hier ist Honig.“

Das Frühstück ist lecker. Nour isst zwei Eier!`,
      ru: `Воскресенье. Семья Хаддад завтракает вместе. Есть хлеб, сыр и яйца. Дети пьют молоко, Лейла пьёт чай, а Амир — кофе.

Карим спрашивает: «А колбаса есть?» Лейла говорит: «Нет, мы не едим колбасу. Но вот мёд».

Завтрак вкусный. Нур съедает два яйца!`,
      gloss: { haddads: 'Хаддадов', haddad: 'Хаддад (фамилия)', amir: 'Амир (имя)', leyla: 'Лейла (имя)', karim: 'Карим (имя)', nour: 'Нур (имя)', sonntag: 'воскресенье', frühstückt: 'завтракает', kinder: 'дети', milch: 'молоко', honig: 'мёд' },
      questions: [
        { q: 'Was trinkt Amir?', ru: 'Что пьёт Амир?', options: ['Kaffee', 'Tee', 'Milch'], answer: 'Kaffee' },
        { q: 'Was gibt es nicht?', ru: 'Чего нет?', options: ['Wurst', 'Käse', 'Brot'], answer: 'Wurst' },
        { q: 'Wie viele Eier isst Nour?', ru: 'Сколько яиц съедает Нур?', options: ['Zwei', 'Eins', 'Drei'], answer: 'Zwei' },
      ],
      translate: [
        { de: 'Wir essen keine Wurst.', ru: 'Мы не едим колбасу.', wrongRu: ['Мы любим колбасу.', 'Мы не едим сыр.'] },
        { de: 'Das Frühstück ist lecker.', ru: 'Завтрак вкусный.', wrongRu: ['Ужин вкусный.', 'Завтрак невкусный.'] },
        { de: 'Leyla trinkt Tee.', ru: 'Лейла пьёт чай.', wrongRu: ['Лейла пьёт кофе.', 'Амир пьёт чай.'] },
      ],
    },
    {
      lesson: 1, title: 'Was essen wir heute?',
      de: `Leyla kocht das Mittagessen. Heute gibt es Reis mit Gemüse und Hähnchen. Die Familie isst kein Schweinefleisch.

Amir hilft. Er schneidet Tomaten und Zwiebeln. Die Kinder essen gern Obst. Zum Nachtisch gibt es Äpfel und Bananen.

Am Abend gibt es nur ein kleines Abendessen: Brot und Suppe. Am Freitag möchte Amir Fisch kochen.`,
      ru: `Лейла готовит обед. Сегодня рис с овощами и курицей. Семья не ест свинину.

Амир помогает. Он режет помидоры и лук. Дети любят фрукты. На десерт яблоки и бананы.

Вечером только лёгкий ужин: хлеб и суп. В пятницу Амир хочет приготовить рыбу.`,
      gloss: { kleines: 'небольшой', leyla: 'Лейла (имя)', amir: 'Амир (имя)', kocht: 'готовит', hähnchen: 'курица', schweinefleisch: 'свинина', hilft: 'помогает', schneidet: 'режет', tomaten: 'помидоры', zwiebeln: 'лук (луковицы)', kinder: 'дети', nachtisch: 'десерт', äpfel: 'яблоки', bananen: 'бананы', suppe: 'суп', freitag: 'пятница', kochen: 'готовить' },
      questions: [
        { q: 'Was gibt es zum Mittagessen?', ru: 'Что на обед?', options: ['Reis mit Gemüse und Hähnchen', 'Fisch', 'Suppe'], answer: 'Reis mit Gemüse und Hähnchen' },
        { q: 'Was macht Amir?', ru: 'Что делает Амир?', options: ['Er schneidet Tomaten und Zwiebeln.', 'Er kauft ein.', 'Er schläft.'], answer: 'Er schneidet Tomaten und Zwiebeln.' },
        { q: 'Was möchte Amir am Freitag kochen?', ru: 'Что Амир хочет приготовить в пятницу?', options: ['Fisch', 'Reis', 'Suppe'], answer: 'Fisch' },
      ],
      translate: [
        { de: 'Die Kinder essen gern Obst.', ru: 'Дети любят фрукты.', wrongRu: ['Дети не любят фрукты.', 'Дети любят овощи.'] },
        { de: 'Heute gibt es Reis mit Gemüse.', ru: 'Сегодня рис с овощами.', wrongRu: ['Завтра рис с овощами.', 'Сегодня рис с рыбой.'] },
        { de: 'Wir essen kein Schweinefleisch.', ru: 'Мы не едим свинину.', wrongRu: ['Мы едим только свинину.', 'Мы не едим рыбу.'] },
      ],
    },
  ],
};
