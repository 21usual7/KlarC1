import type { Module } from '../types.ts';

// A1.2 alltag 05: the mobile phone — contract, SIM card, tariff, Wi-Fi (lesson 0); messages, battery, cancelling a contract (lesson 1).

export const module: Module = {
  id: 'alltag-a12-05-handy', sphere: 'alltag', level: 'A1.2',
  title: 'Handy und Internet', subtitle: 'Мобильная связь: договор или предоплата, SIM-карта, тариф, сообщения, зарядка и расторжение договора.',
  words: [
    { id: 'all-a12-05-handy', icon: 'Smartphone', de: 'Handy', pos: 'noun', article: 'das', plural: 'Handys', ru: 'мобильный телефон', example: { de: 'Mein Handy ist kaputt.', ru: 'Мой телефон сломался.', cloze: 'Handy' } },
    { id: 'all-a12-05-vertrag', icon: 'FileSignature', de: 'Vertrag', pos: 'noun', article: 'der', plural: 'Verträge', ru: 'договор', note: 'Договоры на связь часто на 24 месяца!', example: { de: 'Der Vertrag läuft vierundzwanzig Monate.', ru: 'Договор действует двадцать четыре месяца.', cloze: 'Vertrag' } },
    { id: 'all-a12-05-prepaidkarte', icon: 'CreditCard', de: 'Prepaidkarte', pos: 'noun', article: 'die', plural: 'Prepaidkarten', ru: 'предоплаченная SIM-карта', parts: ['Prepaid', 'karte'], example: { de: 'Mit einer Prepaidkarte habe ich keinen Vertrag.', ru: 'С предоплаченной картой у меня нет договора.', cloze: 'Prepaidkarte' } },
    { id: 'all-a12-05-sim-karte', icon: 'Cpu', de: 'SIM-Karte', pos: 'noun', article: 'die', plural: 'SIM-Karten', ru: 'SIM-карта', note: 'Для SIM-карты в Германии нужен документ (идентификация).', example: { de: 'Für die SIM-Karte brauchen Sie einen Ausweis.', ru: 'Для SIM-карты вам нужен документ.', cloze: 'SIM-Karte' } },
    { id: 'all-a12-05-tarif', icon: 'ListChecks', de: 'Tarif', pos: 'noun', article: 'der', plural: 'Tarife', ru: 'тариф', example: { de: 'Welcher Tarif ist am günstigsten?', ru: 'Какой тариф самый выгодный?', cloze: 'Tarif' } },
    { id: 'all-a12-05-datenvolumen', icon: 'Database', de: 'Datenvolumen', pos: 'noun', article: 'das', ru: 'объём интернет-трафика', parts: ['Daten', 'volumen'], example: { de: 'Ich habe zwanzig Gigabyte Datenvolumen.', ru: 'У меня двадцать гигабайт трафика.', cloze: 'Datenvolumen' } },
    { id: 'all-a12-05-wlan', icon: 'Wifi', de: 'WLAN', pos: 'noun', article: 'das', ru: 'Wi-Fi', note: 'Читается «ве-лан».', example: { de: 'Gibt es hier WLAN?', ru: 'Здесь есть Wi-Fi?', cloze: 'WLAN' } },
    { id: 'all-a12-05-aufladen', icon: 'BatteryCharging', de: 'aufladen', pos: 'verb', ru: 'пополнять (баланс); заряжать', forms: 'er lädt auf · hat aufgeladen', example: { de: 'Ich lade mein Guthaben im Supermarkt auf.', ru: 'Я пополняю баланс в супермаркете.', cloze: 'lade' } },

    { id: 'all-a12-05-anrufen', icon: 'PhoneCall', de: 'anrufen', pos: 'verb', ru: 'звонить', forms: 'er ruft an · hat angerufen', example: { de: 'Ich rufe dich heute Abend an.', ru: 'Я позвоню тебе сегодня вечером.', cloze: 'rufe' } },
    { id: 'all-a12-05-nachricht', icon: 'MessageSquare', de: 'Nachricht', pos: 'noun', article: 'die', plural: 'Nachrichten', ru: 'сообщение; (мн. ч.) новости', example: { de: 'Ich habe dir eine Nachricht geschrieben.', ru: 'Я написал тебе сообщение.', cloze: 'Nachricht' } },
    { id: 'all-a12-05-schicken', icon: 'Send', de: 'schicken', pos: 'verb', ru: 'отправлять, посылать', forms: 'er schickt · hat geschickt', example: { de: 'Schick mir bitte die Adresse.', ru: 'Пришли мне, пожалуйста, адрес.', cloze: 'Schick' } },
    { id: 'all-a12-05-akku', icon: 'BatteryLow', de: 'Akku', pos: 'noun', article: 'der', plural: 'Akkus', ru: 'аккумулятор, батарея', note: 'Der Akku ist leer. — Батарея села.', example: { de: 'Mein Akku ist fast leer.', ru: 'У меня почти села батарея.', cloze: 'Akku' } },
    { id: 'all-a12-05-ladekabel', icon: 'Cable', de: 'Ladekabel', pos: 'noun', article: 'das', plural: 'Ladekabel', ru: 'зарядный кабель', parts: ['Lade', 'kabel'], example: { de: 'Hast du ein Ladekabel für mich?', ru: 'У тебя есть для меня зарядка?', cloze: 'Ladekabel' } },
    { id: 'all-a12-05-kuendigen', icon: 'CircleOff', de: 'kündigen', pos: 'verb', ru: 'расторгать (договор); увольняться', forms: 'er kündigt · hat gekündigt', note: 'Обычно нужно расторгать письменно и заранее.', example: { de: 'Ich möchte meinen Vertrag kündigen.', ru: 'Я хочу расторгнуть договор.', cloze: 'kündigen' } },
    { id: 'all-a12-05-netz', icon: 'Signal', de: 'Netz', pos: 'noun', article: 'das', plural: 'Netze', ru: 'сеть; (о телефоне) связь', note: 'Ich habe kein Netz. — У меня нет связи.', example: { de: 'Im Keller habe ich kein Netz.', ru: 'В подвале у меня нет связи.', cloze: 'Netz' } },
    { id: 'all-a12-05-guthaben', icon: 'Wallet', de: 'Guthaben', pos: 'noun', article: 'das', ru: 'баланс (на счету)', example: { de: 'Ich habe kein Guthaben mehr.', ru: 'У меня закончились деньги на балансе.', cloze: 'Guthaben' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein neuer Tarif',
      de: `Leyla braucht eine neue SIM-Karte. Im Handyladen fragt der Verkäufer: „Möchten Sie einen Vertrag oder eine Prepaidkarte?“

„Was ist besser?“ – „Der Vertrag läuft vierundzwanzig Monate. Er kostet zwanzig Euro im Monat, mit zwanzig Gigabyte Datenvolumen. Mit einer Prepaidkarte zahlen Sie nur, was Sie brauchen.“

Leyla nimmt eine Prepaidkarte. Sie lädt das Guthaben im Supermarkt auf. Zu Hause benutzt sie das WLAN.`,
      ru: `Лейле нужна новая SIM-карта. В салоне связи продавец спрашивает: «Вы хотите договор или предоплаченную карту?»

«А что лучше?» — «Договор действует двадцать четыре месяца. Он стоит двадцать евро в месяц, с двадцатью гигабайтами трафика. С предоплаченной картой вы платите только за то, что вам нужно».

Лейла берёт предоплаченную карту. Баланс она пополняет в супермаркете. Дома она пользуется Wi-Fi.`,
      gloss: { günstigsten: '(am günstigsten) самый выгодный', leyla: 'Лейла (имя)', handyladen: 'салон связи', verkäufer: 'продавец', vierundzwanzig: 'двадцать четыре', gigabyte: 'гигабайт', zahlen: 'платите', nimmt: 'берёт', benutzt: 'пользуется' },
      questions: [
        { q: 'Wie lange läuft der Vertrag?', ru: 'Сколько действует договор?', options: ['Vierundzwanzig Monate', 'Ein Jahr', 'Einen Monat'], answer: 'Vierundzwanzig Monate' },
        { q: 'Was nimmt Leyla?', ru: 'Что берёт Лейла?', options: ['Eine Prepaidkarte', 'Einen Vertrag', 'Ein neues Handy'], answer: 'Eine Prepaidkarte' },
        { q: 'Wo lädt sie das Guthaben auf?', ru: 'Где она пополняет баланс?', options: ['Im Supermarkt', 'In der Bank', 'Zu Hause'], answer: 'Im Supermarkt' },
      ],
      translate: [
        { de: 'Ich brauche eine neue SIM-Karte.', ru: 'Мне нужна новая SIM-карта.', wrongRu: ['Мне нужен новый телефон.', 'Мне нужен новый договор.'] },
        { de: 'Gibt es hier WLAN?', ru: 'Здесь есть Wi-Fi?', wrongRu: ['Здесь есть связь?', 'Здесь есть розетка?'] },
        { de: 'Welcher Tarif ist am günstigsten?', ru: 'Какой тариф самый выгодный?', wrongRu: ['Какой тариф самый дорогой?', 'Какой у вас тариф?'] },
      ],
    },
    {
      lesson: 1, title: 'Der Akku ist leer',
      de: `Amir ist in der Stadt. Er möchte Leyla eine Nachricht schicken, aber der Akku ist fast leer. Er fragt in einem Café: „Haben Sie ein Ladekabel für mich?“ Die Kellnerin hilft ihm.

Dann ruft er Leyla an. „Ich komme später, der Bus fällt aus.“

Zu Hause sagt Amir: „Mein alter Vertrag ist zu teuer. Ich möchte ihn kündigen.“ Frau Schulz erklärt: „Sie müssen schriftlich kündigen, drei Monate vor dem Ende.“`,
      ru: `Амир в городе. Он хочет отправить Лейле сообщение, но батарея почти села. Он спрашивает в кафе: «У вас есть для меня зарядный кабель?» Официантка ему помогает.

Потом он звонит Лейле. «Я приду позже, автобус отменили».

Дома Амир говорит: «Мой старый договор слишком дорогой. Я хочу его расторгнуть». Госпожа Шульц объясняет: «Расторгать нужно письменно, за три месяца до окончания».`,
      gloss: { stadt: 'город', amirs: 'Амира (чей?)', vorher: 'раньше', gar: 'вовсе (gar nicht — вообще нет)', amir: 'Амир (имя)', leyla: 'Лейла (имя)', schulz: 'Шульц (фамилия)', café: 'кафе', kellnerin: 'официантка', hilft: 'помогает', fällt: '(fällt aus) отменяется', alter: 'старый', schriftlich: 'письменно', ende: 'конец, окончание' },
      questions: [
        { q: 'Was ist das Problem mit Amirs Handy?', ru: 'В чём проблема с телефоном Амира?', options: ['Der Akku ist fast leer.', 'Er hat kein Netz.', 'Es ist kaputt.'], answer: 'Der Akku ist fast leer.' },
        { q: 'Warum kommt Amir später?', ru: 'Почему Амир придёт позже?', options: ['Der Bus fällt aus.', 'Er arbeitet.', 'Er ist im Café.'], answer: 'Der Bus fällt aus.' },
        { q: 'Wie muss man den Vertrag kündigen?', ru: 'Как нужно расторгать договор?', options: ['Schriftlich, drei Monate vorher', 'Am Telefon', 'Gar nicht'], answer: 'Schriftlich, drei Monate vorher' },
      ],
      translate: [
        { de: 'Mein Akku ist fast leer.', ru: 'У меня почти села батарея.', wrongRu: ['У меня полная батарея.', 'У меня почти закончились деньги.'] },
        { de: 'Ich rufe dich später an.', ru: 'Я позвоню тебе позже.', wrongRu: ['Я напишу тебе позже.', 'Позвони мне позже.'] },
        { de: 'Ich möchte den Vertrag kündigen.', ru: 'Я хочу расторгнуть договор.', wrongRu: ['Я хочу заключить договор.', 'Я хочу продлить договор.'] },
      ],
    },
  ],
};
