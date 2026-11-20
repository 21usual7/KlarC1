import type { Module } from '../types.ts';

export const module: Module = {
  id: 'cyber-a12-08-online-einkaufen', sphere: 'cyber', level: 'A1.2',
  title: 'Online einkaufen', subtitle: 'Заказать, оплатить, получить посылку — и не попасться на фейковый магазин.',
  words: [
    { id: 'cyb-a12-08-online-shop', icon: 'Store', imageQuery: 'online shopping website on laptop', de: 'Online-Shop', pos: 'noun', article: 'der', plural: 'Online-Shops', ru: 'интернет-магазин', parts: ['Online-', 'Shop'], collocation: { de: 'in einem Online-Shop kaufen', ru: 'покупать в интернет-магазине', accept: ['im Online-Shop kaufen'] }, example: { de: 'Ich kaufe meine Schuhe in einem Online-Shop.', ru: 'Я покупаю обувь в интернет-магазине.', cloze: 'Online-Shop' } },
    { id: 'cyb-a12-08-bestellen', icon: 'MousePointerClick', imageQuery: 'online shopping', de: 'bestellen', pos: 'verb', ru: 'заказывать', forms: 'er bestellt · hat bestellt', note: 'etwas (Akk) bestellen; bei + Dat: bei einem Shop bestellen.', collocation: { de: 'online bestellen', ru: 'заказывать онлайн', accept: ['im Internet bestellen'] }, example: { de: 'Ich bestelle ein Buch im Internet.', ru: 'Я заказываю книгу в интернете.', cloze: 'bestelle' } },
    { id: 'cyb-a12-08-warenkorb', icon: 'ShoppingCart', imageQuery: 'shopping cart', de: 'Warenkorb', pos: 'noun', article: 'der', plural: 'Warenkörbe', ru: 'корзина (в интернет-магазине)', parts: ['Waren', 'korb'], collocation: { de: 'in den Warenkorb legen', ru: 'положить в корзину', accept: ['etwas in den Warenkorb legen'] }, example: { de: 'Die Jacke liegt schon im Warenkorb.', ru: 'Куртка уже лежит в корзине.', cloze: 'Warenkorb' } },
    { id: 'cyb-a12-08-preis', icon: 'Tag', imageQuery: 'price tag', de: 'Preis', pos: 'noun', article: 'der', plural: 'Preise', ru: 'цена', example: { de: 'Der Preis ist sehr niedrig.', ru: 'Цена очень низкая.', cloze: 'Preis' } },
    { id: 'cyb-a12-08-bezahlen', icon: 'Wallet', imageQuery: 'contactless card payment', de: 'bezahlen', pos: 'verb', ru: 'платить, оплачивать', forms: 'er bezahlt · hat bezahlt', note: 'etwas (Akk) bezahlen; mit + Dat: mit der Karte bezahlen.', collocation: { de: 'mit Karte bezahlen', ru: 'платить картой', accept: ['mit der Karte bezahlen', 'mit Kreditkarte bezahlen'] }, example: { de: 'Ich bezahle mit meiner Kreditkarte.', ru: 'Я плачу своей кредитной картой.', cloze: 'bezahle' } },
    { id: 'cyb-a12-08-kreditkarte', icon: 'CreditCard', imageQuery: 'credit card', de: 'Kreditkarte', pos: 'noun', article: 'die', plural: 'Kreditkarten', ru: 'кредитная карта', parts: ['Kredit', 'karte'], note: 'Дебетовая карта — die Bankkarte, в Австрии часто «die Bankomatkarte».', example: { de: 'Meine Mutter hat eine Kreditkarte.', ru: 'У моей мамы есть кредитная карта.', cloze: 'Kreditkarte' } },
    { id: 'cyb-a12-08-paket', icon: 'Package', imageQuery: 'cardboard parcel', de: 'Paket', pos: 'noun', article: 'das', plural: 'Pakete', ru: 'посылка', collocation: { de: 'ein Paket bekommen', ru: 'получить посылку', accept: ['das Paket bekommen'] }, example: { de: 'Heute kommt mein Paket.', ru: 'Сегодня придёт моя посылка.', cloze: 'Paket' } },
    { id: 'cyb-a12-08-liefern', icon: 'Truck', imageQuery: 'parcel delivery van', de: 'liefern', pos: 'verb', ru: 'доставлять', forms: 'er liefert · hat geliefert', note: 'Доставка — die Lieferung.', example: { de: 'Der Shop liefert in drei Tagen.', ru: 'Магазин доставляет за три дня.', cloze: 'liefert' } },

    { id: 'cyb-a12-08-betrug', icon: 'TriangleAlert', imageQuery: 'scam warning', de: 'Betrug', pos: 'noun', article: 'der', ru: 'мошенничество, обман', note: 'Мошенник — der Betrüger.', example: { de: 'Dieses Angebot ist Betrug!', ru: 'Это предложение — мошенничество!', cloze: 'Betrug' } },
    { id: 'cyb-a12-08-fake-shop', icon: 'BadgeAlert', de: 'Fake-Shop', pos: 'noun', article: 'der', plural: 'Fake-Shops', ru: 'фейковый интернет-магазин', parts: ['Fake-', 'Shop'], note: 'Так говорят в Австрии и Германии; пишут также «Fakeshop».', example: { de: 'Der Fake-Shop sieht ganz echt aus.', ru: 'Фейковый магазин выглядит совсем как настоящий.', cloze: 'Fake-Shop' } },
    { id: 'cyb-a12-08-angebot', icon: 'BadgePercent', imageQuery: 'sale sign shop', de: 'Angebot', pos: 'noun', article: 'das', plural: 'Angebote', ru: 'предложение, акция', collocation: { de: 'ein gutes Angebot', ru: 'выгодное предложение', accept: ['ein super Angebot'] }, example: { de: 'Das Angebot gilt nur heute.', ru: 'Предложение действует только сегодня.', cloze: 'Angebot' } },
    { id: 'cyb-a12-08-billig', icon: 'Coins', de: 'billig', pos: 'adj', ru: 'дешёвый', note: 'Нейтральнее и вежливее: günstig.', example: { de: 'Die Schuhe sind zu billig.', ru: 'Эта обувь слишком дешёвая.', cloze: 'billig' } },
    { id: 'cyb-a12-08-bewertung', icon: 'Star', imageQuery: 'five star review', de: 'Bewertung', pos: 'noun', article: 'die', plural: 'Bewertungen', ru: 'отзыв, оценка', collocation: { de: 'Bewertungen lesen', ru: 'читать отзывы', accept: ['die Bewertungen lesen'] }, example: { de: 'Der Shop hat eine schlechte Bewertung.', ru: 'У магазина плохой отзыв.', cloze: 'Bewertung' } },
    { id: 'cyb-a12-08-rechnung', icon: 'Receipt', imageQuery: 'paper invoice', de: 'Rechnung', pos: 'noun', article: 'die', plural: 'Rechnungen', ru: 'счёт (к оплате)', collocation: { de: 'die Rechnung bezahlen', ru: 'оплатить счёт', accept: ['eine Rechnung bezahlen'] }, example: { de: 'Die Rechnung kommt per E-Mail.', ru: 'Счёт приходит по электронной почте.', cloze: 'Rechnung' } },
    { id: 'cyb-a12-08-geld', icon: 'Banknote', imageQuery: 'euro banknotes', de: 'Geld', pos: 'noun', article: 'das', ru: 'деньги', note: 'В немецком — единственное число: das Geld ist weg.', collocation: { de: 'Geld zurückbekommen', ru: 'получить деньги обратно', accept: ['das Geld zurückbekommen'] }, example: { de: 'Ich will mein Geld zurück!', ru: 'Я хочу вернуть свои деньги!', cloze: 'Geld' } },
    { id: 'cyb-a12-08-bank', icon: 'Landmark', imageQuery: 'bank building', de: 'Bank', pos: 'noun', article: 'die', plural: 'Banken', ru: 'банк', note: 'Die Bank (Pl. Bänke) — также «скамейка».', example: { de: 'Sie ruft sofort ihre Bank an.', ru: 'Она сразу звонит в свой банк.', cloze: 'Bank' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Neue Kopfhörer',
      de: `Jonas ist sechzehn und wohnt in Wien. Er braucht neue Kopfhörer für die Schule. Im Geschäft sind sie zu teuer. Also sucht er einen Online-Shop.

Er findet schöne Kopfhörer. Der Preis ist gut: neunundzwanzig Euro. Jonas legt die Kopfhörer in den Warenkorb. Dann muss er bezahlen. Aber er hat keine Kreditkarte. Seine Mutter hilft ihm und bezahlt mit ihrer Kreditkarte.

Der Shop schreibt: „Danke! Wir liefern in drei Tagen.“ Jonas wartet. Am Freitag kommt das Paket. Die Kopfhörer sind super. Jonas bestellt jetzt oft online, aber immer mit seiner Mutter.`,
      ru: `Йонасу шестнадцать, он живёт в Вене. Ему нужны новые наушники для школы. В магазине они слишком дорогие. Поэтому он ищет интернет-магазин.

Он находит красивые наушники. Цена хорошая: двадцать девять евро. Йонас кладёт наушники в корзину. Потом ему нужно заплатить. Но у него нет кредитной карты. Мама помогает ему и платит своей кредитной картой.

Магазин пишет: «Спасибо! Мы доставим через три дня». Йонас ждёт. В пятницу приходит посылка. Наушники отличные. Теперь Йонас часто заказывает онлайн, но всегда вместе с мамой.`,
      gloss: {
        jonas: 'Йонас (имя)', wien: 'Вена', sechzehn: 'шестнадцать', kopfhörer: 'наушники', geschäft: 'магазин (обычный)', teuer: 'дорогой', schöne: 'красивые',
        neunundzwanzig: 'двадцать девять', euro: 'евро', legt: 'кладёт', shop: 'магазин', wartet: 'ждёт', freitag: 'пятница', super: 'отличный, супер',
        online: 'онлайн, в интернете', seiner: 'своей (его)', ihrer: 'своей (её)', tagen: 'днях; (in drei Tagen) через три дня', vater: 'папа', heute: 'сегодня',
        bestellt: 'заказывает', bezahlt: 'платит', warum: 'почему', zu: 'слишком', wer: 'кто',
      },
      questions: [
        { q: 'Warum kauft Jonas die Kopfhörer online?', ru: 'Почему Йонас покупает наушники онлайн?', options: ['Im Geschäft sind sie zu teuer.', 'Das Geschäft hat keine Kopfhörer.', 'Seine Mutter will das.'], answer: 'Im Geschäft sind sie zu teuer.' },
        { q: 'Wer bezahlt mit der Kreditkarte?', ru: 'Кто платит кредитной картой?', options: ['Seine Mutter', 'Jonas', 'Sein Vater'], answer: 'Seine Mutter' },
        { q: 'Wann kommt das Paket?', ru: 'Когда приходит посылка?', options: ['Am Freitag', 'Am Montag', 'Heute'], answer: 'Am Freitag' },
      ],
      translate: [
        { de: 'Der Preis ist gut.', ru: 'Цена хорошая.', wrongRu: ['Цена плохая.', 'Цена слишком высокая.'] },
        { de: 'Er legt die Kopfhörer in den Warenkorb.', ru: 'Он кладёт наушники в корзину.', wrongRu: ['Он убирает наушники из корзины.', 'Она кладёт наушники в корзину.', 'Он кладёт наушники в сумку.'] },
        { de: 'Seine Mutter bezahlt mit ihrer Kreditkarte.', ru: 'Его мама платит своей кредитной картой.', wrongRu: ['Его мама платит наличными.', 'Его папа платит своей кредитной картой.', 'Его мама заказывает кредитную карту.'] },
      ],
    },
    {
      lesson: 1, title: 'Ein super Angebot?',
      de: `Mira will eine Jacke kaufen. Im Internet sieht sie ein tolles Angebot: Die Jacke kostet nur zehn Euro! Normal kostet sie hundert Euro. Das ist sehr billig.

Mira liest die Bewertungen. Es gibt keine. Der Shop hat auch keine Adresse und kein Impressum. Ihr Bruder David sagt: „Das ist ein Fake-Shop. Das ist Betrug!“

Aber Mira hat schon bezahlt. Sie bekommt eine Rechnung per E-Mail, aber kein Paket. Mira ruft ihre Bank an. Die Bank hilft ihr. Nach zwei Wochen bekommt Mira ihr Geld zurück. Jetzt liest sie immer zuerst die Bewertungen.`,
      ru: `Мира хочет купить куртку. В интернете она видит классное предложение: куртка стоит всего десять евро! Обычно она стоит сто евро. Это очень дёшево.

Мира читает отзывы. Их нет. У магазина также нет адреса и нет выходных данных. Её брат Давид говорит: «Это фейковый магазин. Это мошенничество!»

Но Мира уже заплатила. Она получает счёт по электронной почте, но посылку — нет. Мира звонит в свой банк. Банк ей помогает. Через две недели Мира получает свои деньги обратно. Теперь она всегда сначала читает отзывы.`,
      gloss: {
        mira: 'Мира (имя)', david: 'Давид (имя)', jacke: 'куртка', internet: 'интернет', tolles: 'классное', kostet: 'стоит (о цене)', euro: 'евро', normal: 'обычно',
        adresse: 'адрес', impressum: 'выходные данные сайта (кто владелец, адрес)', shop: 'магазин', bezahlt: 'заплатил(а)', 'e-mail': 'электронная почта, e-mail',
        wochen: 'недели', zurück: 'обратно', billige: 'дешёвые', jacken: 'куртки', polizei: 'полиция', viel: 'сколько (wie viel)',
        bewertungen: 'отзывы', paket: 'посылка', rechnung: 'счёт',
      },
      questions: [
        { q: 'Wie viel kostet die Jacke im Angebot?', ru: 'Сколько стоит куртка по акции?', options: ['Zehn Euro', 'Hundert Euro', 'Zwanzig Euro'], answer: 'Zehn Euro' },
        { q: 'Was hat der Shop nicht?', ru: 'Чего нет у магазина?', options: ['Bewertungen und ein Impressum', 'Billige Jacken', 'Eine Rechnung'], answer: 'Bewertungen und ein Impressum' },
        { q: 'Wer hilft Mira am Ende?', ru: 'Кто помогает Мире в конце?', options: ['Ihre Bank', 'Die Polizei', 'Der Shop'], answer: 'Ihre Bank' },
      ],
      translate: [
        { de: 'Das ist ein Fake-Shop.', ru: 'Это фейковый магазин.', wrongRu: ['Это хороший магазин.', 'Это не фейковый магазин.'] },
        { de: 'Mira liest die Bewertungen.', ru: 'Мира читает отзывы.', wrongRu: ['Мира пишет отзывы.', 'Мира читает счёт.'] },
        { de: 'Sie bekommt ihr Geld zurück.', ru: 'Она получает свои деньги обратно.', wrongRu: ['Она отправляет свои деньги обратно.', 'Он получает свои деньги обратно.', 'Она не получает свои деньги обратно.'] },
      ],
    },
  ],
};
