import type { Module } from '../types.ts';

// A1.2 alltag 10: emergencies — 112, fire brigade, ambulance, accident (lesson 0); police, theft, reporting (lesson 1).

export const module: Module = {
  id: 'alltag-a12-10-notruf', sphere: 'alltag', level: 'A1.2',
  title: 'Im Notfall', subtitle: 'Экстренные ситуации: 112 и 110, пожарные, скорая, авария, полиция и кража.',
  words: [
    { id: 'all-a12-10-notruf', icon: 'Phone', de: 'Notruf', pos: 'noun', article: 'der', plural: 'Notrufe', ru: 'экстренный вызов', parts: ['Not', 'ruf'], note: '112 — пожарные и скорая, 110 — полиция.', example: { de: 'Der Notruf ist eins-eins-zwei.', ru: 'Экстренный номер — сто двенадцать.', cloze: 'Notruf' } },
    { id: 'all-a12-10-feuerwehr', icon: 'FireExtinguisher', imageQuery: 'fire truck germany', de: 'Feuerwehr', pos: 'noun', article: 'die', plural: 'Feuerwehren', ru: 'пожарная служба', parts: ['Feuer', 'wehr'], example: { de: 'Ruf sofort die Feuerwehr!', ru: 'Срочно вызови пожарных!', cloze: 'Feuerwehr' } },
    { id: 'all-a12-10-krankenwagen', icon: 'Ambulance', de: 'Krankenwagen', pos: 'noun', article: 'der', plural: 'Krankenwagen', ru: 'скорая помощь (машина)', parts: ['Kranken', 'wagen'], example: { de: 'Der Krankenwagen kommt in zehn Minuten.', ru: 'Скорая приедет через десять минут.', cloze: 'Krankenwagen' } },
    { id: 'all-a12-10-feuer', icon: 'Flame', de: 'Feuer', pos: 'noun', article: 'das', plural: 'Feuer', ru: 'огонь, пожар', note: 'Feuer! — Пожар!', example: { de: 'Im Keller ist Feuer!', ru: 'В подвале пожар!', cloze: 'Feuer' } },
    { id: 'all-a12-10-brennen', icon: 'Flame', de: 'brennen', pos: 'verb', ru: 'гореть', forms: 'es brennt · hat gebrannt', note: 'Es brennt! — Горит!', example: { de: 'Hilfe, es brennt!', ru: 'Помогите, горит!', cloze: 'brennt' } },
    { id: 'all-a12-10-unfall', icon: 'CarFront', de: 'Unfall', pos: 'noun', article: 'der', plural: 'Unfälle', ru: 'несчастный случай, авария', example: { de: 'Auf der Straße ist ein Unfall passiert.', ru: 'На улице произошла авария.', cloze: 'Unfall' } },
    { id: 'all-a12-10-verletzt', icon: 'Bandage', de: 'verletzt', pos: 'adj', ru: 'раненый, травмированный', example: { de: 'Ein Mann ist verletzt.', ru: 'Мужчина ранен.', cloze: 'verletzt' } },
    { id: 'all-a12-10-hilfe', icon: 'LifeBuoy', de: 'Hilfe', pos: 'noun', article: 'die', ru: 'помощь', note: 'Hilfe! — Помогите!', example: { de: 'Wir brauchen Hilfe!', ru: 'Нам нужна помощь!', cloze: 'Hilfe' } },

    { id: 'all-a12-10-polizei', icon: 'Siren', de: 'Polizei', pos: 'noun', article: 'die', ru: 'полиция', note: 'Номер полиции — 110.', example: { de: 'Ich rufe die Polizei.', ru: 'Я вызываю полицию.', cloze: 'Polizei' } },
    { id: 'all-a12-10-stehlen', icon: 'Hand', de: 'stehlen', pos: 'verb', ru: 'красть', forms: 'er stiehlt · hat gestohlen', note: 'Mein Handy wurde gestohlen. — У меня украли телефон.', example: { de: 'Jemand hat mein Fahrrad gestohlen.', ru: 'Кто-то украл мой велосипед.', cloze: 'gestohlen' } },
    { id: 'all-a12-10-dieb', icon: 'UserX', de: 'Dieb', pos: 'noun', article: 'der', plural: 'Diebe', ru: 'вор', example: { de: 'Der Dieb ist weggelaufen.', ru: 'Вор убежал.', cloze: 'Dieb' } },
    { id: 'all-a12-10-melden', icon: 'Megaphone', de: 'melden', pos: 'verb', ru: 'сообщать, заявлять', forms: 'er meldet · hat gemeldet', example: { de: 'Sie müssen den Diebstahl bei der Polizei melden.', ru: 'Вы должны заявить о краже в полицию.', cloze: 'melden' } },
    { id: 'all-a12-10-diebstahl', icon: 'ShieldAlert', de: 'Diebstahl', pos: 'noun', article: 'der', plural: 'Diebstähle', ru: 'кража', example: { de: 'Ich möchte einen Diebstahl anzeigen.', ru: 'Я хочу заявить о краже.', cloze: 'Diebstahl' } },
    { id: 'all-a12-10-gefaehrlich', icon: 'TriangleAlert', de: 'gefährlich', pos: 'adj', ru: 'опасный', example: { de: 'Das ist sehr gefährlich!', ru: 'Это очень опасно!', cloze: 'gefährlich' } },
    { id: 'all-a12-10-notaufnahme', icon: 'Hospital', de: 'Notaufnahme', pos: 'noun', article: 'die', plural: 'Notaufnahmen', ru: 'приёмный покой (экстренное отделение)', parts: ['Not', 'aufnahme'], example: { de: 'Wir fahren in die Notaufnahme.', ru: 'Мы едем в приёмный покой.', cloze: 'Notaufnahme' } },
    { id: 'all-a12-10-ruhig-bleiben', icon: 'Leaf', de: 'ruhig bleiben', pos: 'phrase', ru: 'сохранять спокойствие', example: { de: 'Bitte bleiben Sie ruhig.', ru: 'Пожалуйста, сохраняйте спокойствие.', cloze: 'ruhig' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Unfall',
      de: `Amir fährt mit dem Fahrrad nach Hause. Auf der Straße sieht er einen Unfall. Ein Auto und ein Motorrad. Der Mann auf dem Motorrad liegt auf dem Boden. Er ist verletzt.

Amir ruft sofort den Notruf an: eins-eins-zwei. „Hier ist ein Unfall! Ein Mann ist verletzt. Wir sind in der Karl-Liebknecht-Straße.“ – „Bleiben Sie ruhig. Der Krankenwagen kommt.“

Nach acht Minuten ist der Krankenwagen da. Der Mann fährt in die Notaufnahme.`,
      ru: `Амир едет домой на велосипеде. На улице он видит аварию. Машина и мотоцикл. Мотоциклист лежит на земле. Он ранен.

Амир сразу звонит в экстренную службу: сто двенадцать. «Здесь авария! Мужчина ранен. Мы на Карл-Либкнехт-штрассе». — «Сохраняйте спокойствие. Скорая едет».

Через восемь минут скорая на месте. Мужчину везут в приёмный покой.`,
      gloss: { autofahrer: 'водитель', 'null-null-eins': 'ноль-ноль-один', 'eins-eins-null': 'сто десять (1-1-0)', amir: 'Амир (имя)', auto: 'машина', motorrad: 'мотоцикл', boden: 'земля, пол', 'eins-eins-zwei': 'сто двенадцать (1-1-2)', 'karl-liebknecht-straße': 'Карл-Либкнехт-штрассе (улица)', da: 'здесь, на месте' },
      questions: [
        { q: 'Wer ist verletzt?', ru: 'Кто ранен?', options: ['Der Mann auf dem Motorrad', 'Amir', 'Der Autofahrer'], answer: 'Der Mann auf dem Motorrad' },
        { q: 'Welche Nummer ruft Amir an?', ru: 'По какому номеру звонит Амир?', options: ['Eins-eins-zwei', 'Eins-eins-null', 'Null-null-eins'], answer: 'Eins-eins-zwei' },
        { q: 'Wann kommt der Krankenwagen?', ru: 'Когда приезжает скорая?', options: ['Nach acht Minuten', 'Nach einer Stunde', 'Sofort'], answer: 'Nach acht Minuten' },
      ],
      translate: [
        { de: 'Ein Mann ist verletzt.', ru: 'Мужчина ранен.', wrongRu: ['Мужчина без сознания.', 'Женщина ранена.'] },
        { de: 'Bitte bleiben Sie ruhig.', ru: 'Пожалуйста, сохраняйте спокойствие.', wrongRu: ['Пожалуйста, оставайтесь на месте.', 'Пожалуйста, говорите тише.'] },
        { de: 'Der Krankenwagen kommt.', ru: 'Скорая едет.', wrongRu: ['Полиция едет.', 'Пожарные едут.'] },
      ],
    },
    {
      lesson: 1, title: 'Das Fahrrad ist weg',
      de: `Am Morgen will Leyla zur Arbeit fahren. Aber ihr Fahrrad ist weg! Jemand hat es in der Nacht gestohlen.

Frau Schulz sagt: „Sie müssen den Diebstahl bei der Polizei melden. Die Nummer ist eins-eins-null. Aber das ist kein Notfall. Gehen Sie lieber zur Polizeiwache.“

Auf der Wache fragt der Polizist: „Wie sieht das Fahrrad aus? Haben Sie den Dieb gesehen?“ – „Nein. Es ist rot und alt.“ Leyla bekommt ein Papier für die Versicherung.`,
      ru: `Утром Лейла хочет поехать на работу. Но её велосипеда нет! Кто-то украл его ночью.

Госпожа Шульц говорит: «Вы должны заявить о краже в полицию. Номер — сто десять. Но это не экстренный случай. Лучше сходите в полицейский участок».

В участке полицейский спрашивает: «Как выглядит велосипед? Вы видели вора?» — «Нет. Он красный и старый». Лейла получает бумагу для страховой.`,
      gloss: { 'zwei-zwei-zwei': 'два-два-два', nacht: 'ночь', leylas: 'Лейлы (чей?)', 'eins-eins-zwei': 'сто двенадцать (1-1-2)', blau: 'синий', leyla: 'Лейла (имя)', schulz: 'Шульц (фамилия)', arbeit: 'работа', weg: 'пропал, нет', jemand: 'кто-то', 'eins-eins-null': 'сто десять (1-1-0)', notfall: 'экстренный случай', lieber: 'лучше', polizeiwache: 'полицейский участок', wache: 'участок', polizist: 'полицейский', sieht: '(sieht … aus) выглядит', gesehen: 'видели', rot: 'красный', papier: 'бумага, документ', versicherung: 'страховая (компания)' },
      questions: [
        { q: 'Was ist passiert?', ru: 'Что случилось?', options: ['Jemand hat Leylas Fahrrad gestohlen.', 'Leyla hatte einen Unfall.', 'Es brennt.'], answer: 'Jemand hat Leylas Fahrrad gestohlen.' },
        { q: 'Welche Nummer hat die Polizei?', ru: 'Какой номер у полиции?', options: ['Eins-eins-null', 'Eins-eins-zwei', 'Zwei-zwei-zwei'], answer: 'Eins-eins-null' },
        { q: 'Wie sieht das Fahrrad aus?', ru: 'Как выглядит велосипед?', options: ['Rot und alt', 'Blau und neu', 'Schwarz'], answer: 'Rot und alt' },
      ],
      translate: [
        { de: 'Jemand hat mein Fahrrad gestohlen.', ru: 'Кто-то украл мой велосипед.', wrongRu: ['Кто-то сломал мой велосипед.', 'Я нашёл свой велосипед.'] },
        { de: 'Ich rufe die Polizei.', ru: 'Я вызываю полицию.', wrongRu: ['Я вызываю скорую.', 'Полиция звонит мне.'] },
        { de: 'Das ist kein Notfall.', ru: 'Это не экстренный случай.', wrongRu: ['Это экстренный случай.', 'Это не кража.'] },
      ],
    },
  ],
};
