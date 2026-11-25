import type { Module } from '../types.ts';

// A1.1 alltag 05: shopping — supermarket, till, bag, offer (lesson 0); bottle, can, bakery, receipt (lesson 1).

export const module: Module = {
  id: 'alltag-a11-05-einkaufen', sphere: 'alltag', level: 'A1.1',
  title: 'Im Supermarkt', subtitle: 'Покупки: супермаркет, касса, пакет, бутылки и банки, булочная и чек.',
  words: [
    { id: 'all-a11-05-supermarkt', icon: 'Store', imageQuery: 'supermarket aisle', de: 'Supermarkt', pos: 'noun', article: 'der', plural: 'Supermärkte', ru: 'супермаркет', example: { de: 'Der Supermarkt ist gleich um die Ecke.', ru: 'Супермаркет прямо за углом.', cloze: 'Supermarkt' } },
    { id: 'all-a11-05-kaufen', icon: 'ShoppingCart', de: 'kaufen', pos: 'verb', ru: 'покупать', forms: 'er kauft · hat gekauft', note: 'einkaufen — делать покупки.', example: { de: 'Ich kaufe Milch und Brot.', ru: 'Я покупаю молоко и хлеб.', cloze: 'kaufe' } },
    { id: 'all-a11-05-einkaufswagen', icon: 'ShoppingCart', imageQuery: 'shopping cart', de: 'Einkaufswagen', pos: 'noun', article: 'der', plural: 'Einkaufswagen', ru: 'тележка для покупок', parts: ['Einkaufs', 'wagen'], note: 'Часто нужна монета 1 € или жетон.', example: { de: 'Für den Einkaufswagen brauche ich einen Euro.', ru: 'Для тележки мне нужен один евро.', cloze: 'Einkaufswagen' } },
    { id: 'all-a11-05-kasse', icon: 'Calculator', de: 'Kasse', pos: 'noun', article: 'die', plural: 'Kassen', ru: 'касса', example: { de: 'An der Kasse ist eine lange Schlange.', ru: 'На кассе длинная очередь.', cloze: 'Kasse' } },
    { id: 'all-a11-05-tuete', icon: 'ShoppingBag', de: 'Tüte', pos: 'noun', article: 'die', plural: 'Tüten', ru: 'пакет', note: 'Пакеты в Германии платные.', example: { de: 'Brauchen Sie eine Tüte?', ru: 'Вам нужен пакет?', cloze: 'Tüte' } },
    { id: 'all-a11-05-angebot', icon: 'BadgePercent', de: 'Angebot', pos: 'noun', article: 'das', plural: 'Angebote', ru: 'предложение; акция, скидка', note: 'im Angebot — по акции.', example: { de: 'Der Käse ist heute im Angebot.', ru: 'Сыр сегодня по акции.', cloze: 'Angebot' } },
    { id: 'all-a11-05-kilo', icon: 'Weight', de: 'Kilo', pos: 'noun', article: 'das', plural: 'Kilos', ru: 'килограмм', note: 'После числа: zwei Kilo.', example: { de: 'Ein Kilo Kartoffeln, bitte.', ru: 'Килограмм картошки, пожалуйста.', cloze: 'Kilo' } },
    { id: 'all-a11-05-packung', icon: 'Package', de: 'Packung', pos: 'noun', article: 'die', plural: 'Packungen', ru: 'упаковка, пачка', example: { de: 'Eine Packung Reis kostet zwei Euro.', ru: 'Пачка риса стоит два евро.', cloze: 'Packung' } },

    { id: 'all-a11-05-flasche', icon: 'Milk', de: 'Flasche', pos: 'noun', article: 'die', plural: 'Flaschen', ru: 'бутылка', note: 'das Pfand — залог за бутылку; бутылки сдают в автомат.', example: { de: 'Eine Flasche Wasser, bitte.', ru: 'Бутылку воды, пожалуйста.', cloze: 'Flasche' } },
    { id: 'all-a11-05-dose', icon: 'Cylinder', de: 'Dose', pos: 'noun', article: 'die', plural: 'Dosen', ru: 'банка (жестяная)', example: { de: 'Ich kaufe eine Dose Tomaten.', ru: 'Я покупаю банку помидоров.', cloze: 'Dose' } },
    { id: 'all-a11-05-liter', icon: 'GlassWater', de: 'Liter', pos: 'noun', article: 'der', plural: 'Liter', ru: 'литр', example: { de: 'Ein Liter Milch kostet einen Euro.', ru: 'Литр молока стоит один евро.', cloze: 'Liter' } },
    { id: 'all-a11-05-gramm', icon: 'Scale', de: 'Gramm', pos: 'noun', article: 'das', plural: 'Gramm', ru: 'грамм', example: { de: 'Zweihundert Gramm Käse, bitte.', ru: 'Двести грамм сыра, пожалуйста.', cloze: 'Gramm' } },
    { id: 'all-a11-05-baeckerei', icon: 'Croissant', imageQuery: 'german bakery', de: 'Bäckerei', pos: 'noun', article: 'die', plural: 'Bäckereien', ru: 'булочная, пекарня', example: { de: 'Die Bäckerei öffnet um sechs Uhr.', ru: 'Пекарня открывается в шесть.', cloze: 'Bäckerei' } },
    { id: 'all-a11-05-broetchen', icon: 'Croissant', imageQuery: 'bread rolls', de: 'Brötchen', pos: 'noun', article: 'das', plural: 'Brötchen', ru: 'булочка', note: 'Типичный немецкий завтрак.', example: { de: 'Ich nehme vier Brötchen.', ru: 'Я возьму четыре булочки.', cloze: 'Brötchen' } },
    { id: 'all-a11-05-bon', icon: 'Receipt', de: 'Bon', pos: 'noun', article: 'der', plural: 'Bons', ru: 'чек', note: 'Также: der Kassenbon, die Quittung.', example: { de: 'Möchten Sie den Bon?', ru: 'Вам нужен чек?', cloze: 'Bon' } },
    { id: 'all-a11-05-brauchen', icon: 'ListChecks', de: 'brauchen', pos: 'verb', ru: 'нуждаться, нужно', forms: 'er braucht · hat gebraucht', example: { de: 'Was brauchen wir noch?', ru: 'Что нам ещё нужно?', cloze: 'brauchen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Einkaufen am Samstag',
      de: `Am Samstag geht Leyla in den Supermarkt. Sie nimmt einen Einkaufswagen. Dafür braucht sie einen Euro.

Sie kauft Reis, Tomaten und ein Kilo Kartoffeln. Der Käse ist heute im Angebot. Sie nimmt zwei Packungen.

An der Kasse fragt die Kassiererin: „Brauchen Sie eine Tüte?“ – „Nein danke, ich habe eine Tasche.“`,
      ru: `В субботу Лейла идёт в супермаркет. Она берёт тележку. Для этого ей нужен один евро.

Она покупает рис, помидоры и килограмм картошки. Сыр сегодня по акции. Она берёт две упаковки.

На кассе кассирша спрашивает: «Вам нужен пакет?» — «Нет, спасибо, у меня есть сумка».`,
      gloss: { karte: 'карта', leyla: 'Лейла (имя)', samstag: 'суббота', nimmt: 'берёт', dafür: 'для этого', reis: 'рис', tomaten: 'помидоры', kartoffeln: 'картошка', käse: 'сыр', kassiererin: 'кассирша', tasche: 'сумка' },
      questions: [
        { q: 'Was braucht Leyla für den Einkaufswagen?', ru: 'Что нужно Лейле для тележки?', options: ['Einen Euro', 'Eine Tüte', 'Eine Karte'], answer: 'Einen Euro' },
        { q: 'Was ist im Angebot?', ru: 'Что по акции?', options: ['Der Käse', 'Der Reis', 'Die Tomaten'], answer: 'Der Käse' },
        { q: 'Warum braucht Leyla keine Tüte?', ru: 'Почему Лейле не нужен пакет?', options: ['Sie hat eine Tasche.', 'Sie kauft nichts.', 'Die Tüte ist zu teuer.'], answer: 'Sie hat eine Tasche.' },
      ],
      translate: [
        { de: 'Der Käse ist im Angebot.', ru: 'Сыр по акции.', wrongRu: ['Сыр закончился.', 'Хлеб по акции.'] },
        { de: 'Brauchen Sie eine Tüte?', ru: 'Вам нужен пакет?', wrongRu: ['У вас есть пакет?', 'Вам нужен чек?'] },
        { de: 'Ich kaufe ein Kilo Kartoffeln.', ru: 'Я покупаю килограмм картошки.', wrongRu: ['Я покупаю два кило картошки.', 'Я покупаю килограмм помидоров.'] },
      ],
    },
    {
      lesson: 1, title: 'In der Bäckerei',
      de: `Dann geht Leyla noch in die Bäckerei. „Guten Morgen! Ich nehme sechs Brötchen, bitte.“ – „Das macht zwei Euro vierzig.“

Zu Hause sieht sie: Sie hat die Milch vergessen! Sie braucht auch zwei Flaschen Wasser und eine Dose Tomaten.

Amir geht schnell noch einmal in den Supermarkt. Er kauft einen Liter Milch und zweihundert Gramm Butter. An der Kasse fragt die Frau: „Möchten Sie den Bon?“`,
      ru: `Потом Лейла заходит ещё и в булочную. «Доброе утро! Мне шесть булочек, пожалуйста». — «С вас два евро сорок».

Дома она видит: она забыла молоко! Ей нужны ещё две бутылки воды и банка помидоров.

Амир быстро идёт в супермаркет ещё раз. Он покупает литр молока и двести грамм масла. На кассе женщина спрашивает: «Вам нужен чек?»`,
      gloss: { schulz: 'Шульц (фамилия)', leyla: 'Лейла (имя)', amir: 'Амир (имя)', nehme: 'возьму, беру', sechs: 'шесть', macht: '(das macht) с вас', vierzig: 'сорок', hause: '(zu Hause) дома', vergessen: 'забыла', milch: 'молоко', tomaten: 'помидоры', schnell: 'быстро', zweihundert: 'двести', butter: 'сливочное масло' },
      questions: [
        { q: 'Wie viele Brötchen nimmt Leyla?', ru: 'Сколько булочек берёт Лейла?', options: ['Sechs', 'Vier', 'Zwei'], answer: 'Sechs' },
        { q: 'Was hat Leyla vergessen?', ru: 'Что забыла Лейла?', options: ['Die Milch', 'Das Brot', 'Den Käse'], answer: 'Die Milch' },
        { q: 'Wer geht noch einmal in den Supermarkt?', ru: 'Кто идёт в супермаркет ещё раз?', options: ['Amir', 'Leyla', 'Frau Schulz'], answer: 'Amir' },
      ],
      translate: [
        { de: 'Ich nehme sechs Brötchen.', ru: 'Я возьму шесть булочек.', wrongRu: ['Я возьму шесть яиц.', 'Я возьму две булочки.'] },
        { de: 'Sie hat die Milch vergessen.', ru: 'Она забыла молоко.', wrongRu: ['Она купила молоко.', 'Он забыл молоко.'] },
        { de: 'Möchten Sie den Bon?', ru: 'Вам нужен чек?', wrongRu: ['Вам нужен пакет?', 'Вы будете платить картой?'] },
      ],
    },
  ],
};
