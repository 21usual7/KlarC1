import type { Module } from '../types.ts';

// A1.1 alltag 10: free time — hobbies, sport, music (lesson 0); park, friends, bike, cooking together (lesson 1).

export const module: Module = {
  id: 'alltag-a11-10-freizeit', sphere: 'alltag', level: 'A1.1',
  title: 'Freizeit', subtitle: 'Свободное время: хобби, спорт, музыка, кино, парк, друзья и велосипед.',
  words: [
    { id: 'all-a11-10-freizeit', icon: 'Smile', de: 'Freizeit', pos: 'noun', article: 'die', ru: 'свободное время', parts: ['Frei', 'zeit'], example: { de: 'Was machst du in deiner Freizeit?', ru: 'Что ты делаешь в свободное время?', cloze: 'Freizeit' } },
    { id: 'all-a11-10-hobby', icon: 'Palette', de: 'Hobby', pos: 'noun', article: 'das', plural: 'Hobbys', ru: 'хобби', example: { de: 'Mein Hobby ist Fußball.', ru: 'Моё хобби — футбол.', cloze: 'Hobby' } },
    { id: 'all-a11-10-sport', icon: 'Dumbbell', de: 'Sport', pos: 'noun', article: 'der', ru: 'спорт', note: 'Sport machen — заниматься спортом.', example: { de: 'Ich mache zweimal pro Woche Sport.', ru: 'Я занимаюсь спортом два раза в неделю.', cloze: 'Sport' } },
    { id: 'all-a11-10-fussball', icon: 'Volleyball', imageQuery: 'football kids', de: 'Fußball', pos: 'noun', article: 'der', ru: 'футбол; футбольный мяч', example: { de: 'Karim spielt gern Fußball.', ru: 'Карим любит играть в футбол.', cloze: 'Fußball' } },
    { id: 'all-a11-10-schwimmen', icon: 'Waves', de: 'schwimmen', pos: 'verb', ru: 'плавать', forms: 'er schwimmt · ist geschwommen', example: { de: 'Im Sommer schwimmen wir im See.', ru: 'Летом мы плаваем в озере.', cloze: 'schwimmen' } },
    { id: 'all-a11-10-lesen', icon: 'BookOpen', de: 'lesen', pos: 'verb', ru: 'читать', forms: 'er liest · hat gelesen', note: 'du liest, er liest.', example: { de: 'Nour liest gern Bücher.', ru: 'Нур любит читать книги.', cloze: 'liest' } },
    { id: 'all-a11-10-musik', icon: 'Music', de: 'Musik', pos: 'noun', article: 'die', ru: 'музыка', example: { de: 'Amir hört gern arabische Musik.', ru: 'Амир любит слушать арабскую музыку.', cloze: 'Musik' } },
    { id: 'all-a11-10-kino', icon: 'Clapperboard', de: 'Kino', pos: 'noun', article: 'das', plural: 'Kinos', ru: 'кино(театр)', example: { de: 'Am Samstag gehen wir ins Kino.', ru: 'В субботу мы идём в кино.', cloze: 'Kino' } },

    { id: 'all-a11-10-park', icon: 'Trees', imageQuery: 'city park', de: 'Park', pos: 'noun', article: 'der', plural: 'Parks', ru: 'парк', example: { de: 'Der Park ist ganz in der Nähe.', ru: 'Парк совсем рядом.', cloze: 'Park' } },
    { id: 'all-a11-10-spazieren-gehen', icon: 'Footprints', de: 'spazieren gehen', pos: 'phrase', ru: 'гулять', note: 'Ich gehe spazieren. — Я гуляю.', example: { de: 'Am Sonntag gehen wir spazieren.', ru: 'В воскресенье мы гуляем.', cloze: 'spazieren' } },
    { id: 'all-a11-10-freund', icon: 'Users', de: 'Freund', pos: 'noun', article: 'der', plural: 'Freunde', ru: 'друг; парень', note: 'Подруга — die Freundin. mein Freund — иногда «мой парень».', example: { de: 'Das ist mein Freund Dmytro.', ru: 'Это мой друг Дмитро.', cloze: 'Freund' } },
    { id: 'all-a11-10-treffen', icon: 'Handshake', de: 'treffen', pos: 'verb', ru: 'встречать; (sich treffen) встречаться', forms: 'er trifft · hat getroffen', note: 'du triffst, er trifft.', example: { de: 'Wir treffen uns um drei im Park.', ru: 'Мы встречаемся в три в парке.', cloze: 'treffen' } },
    { id: 'all-a11-10-gern', icon: 'Heart', de: 'gern', pos: 'adv', ru: 'охотно; (с глаголом) любить делать', note: 'Ich lese gern. — Я люблю читать.', example: { de: 'Ich koche gern.', ru: 'Я люблю готовить.', cloze: 'gern' } },
    { id: 'all-a11-10-fahrrad', icon: 'Bike', imageQuery: 'bicycle', de: 'Fahrrad', pos: 'noun', article: 'das', plural: 'Fahrräder', ru: 'велосипед', note: 'Разговорно: das Rad.', example: { de: 'Ich fahre mit dem Fahrrad zum Kurs.', ru: 'Я езжу на курс на велосипеде.', cloze: 'Fahrrad' } },
    { id: 'all-a11-10-kochen', icon: 'CookingPot', de: 'kochen', pos: 'verb', ru: 'готовить (еду); варить', forms: 'er kocht · hat gekocht', example: { de: 'Am Abend kochen wir zusammen.', ru: 'Вечером мы готовим вместе.', cloze: 'kochen' } },
    { id: 'all-a11-10-spielen', icon: 'Gamepad2', de: 'spielen', pos: 'verb', ru: 'играть', forms: 'er spielt · hat gespielt', example: { de: 'Die Kinder spielen im Park.', ru: 'Дети играют в парке.', cloze: 'spielen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Was machst du gern?',
      de: `Im Deutschkurs sprechen alle über ihre Freizeit. Die Lehrerin fragt: „Was ist Ihr Hobby?“

Amir sagt: „Ich spiele gern Fußball. Und ich höre gern Musik.“ Dmytro macht viel Sport. Er geht dreimal pro Woche schwimmen. Eine Frau aus Afghanistan liest gern.

„Und Sie?“, fragt Amir die Lehrerin. Sie lacht: „Ich gehe gern ins Kino.“`,
      ru: `На курсе немецкого все говорят о своём свободном времени. Учительница спрашивает: «Какое у вас хобби?»

Амир говорит: «Я люблю играть в футбол. И люблю слушать музыку». Дмитро много занимается спортом. Он ходит плавать три раза в неделю. Женщина из Афганистана любит читать.

«А вы?» — спрашивает Амир учительницу. Она смеётся: «Я люблю ходить в кино».`,
      gloss: { tennis: 'теннис', karten: 'карты', machst: 'делаешь', amir: 'Амир (имя)', dmytro: 'Дмитро (имя)', afghanistan: 'Афганистан', deutschkurs: 'курс немецкого', alle: 'все', lehrerin: 'учительница', höre: 'слушаю', dreimal: 'три раза', pro: 'в (pro Woche — в неделю)', woche: 'неделя', lacht: 'смеётся' },
      questions: [
        { q: 'Was spielt Amir gern?', ru: 'Во что любит играть Амир?', options: ['Fußball', 'Tennis', 'Karten'], answer: 'Fußball' },
        { q: 'Wie oft geht Dmytro schwimmen?', ru: 'Как часто Дмитро ходит плавать?', options: ['Dreimal pro Woche', 'Jeden Tag', 'Einmal pro Woche'], answer: 'Dreimal pro Woche' },
        { q: 'Was macht die Lehrerin gern?', ru: 'Что любит учительница?', options: ['Sie geht gern ins Kino.', 'Sie liest gern.', 'Sie kocht gern.'], answer: 'Sie geht gern ins Kino.' },
      ],
      translate: [
        { de: 'Mein Hobby ist Fußball.', ru: 'Моё хобби — футбол.', wrongRu: ['Моё хобби — музыка.', 'Его хобби — футбол.'] },
        { de: 'Ich höre gern Musik.', ru: 'Я люблю слушать музыку.', wrongRu: ['Я не люблю музыку.', 'Я играю музыку.'] },
        { de: 'Was machst du in deiner Freizeit?', ru: 'Что ты делаешь в свободное время?', wrongRu: ['Где ты работаешь?', 'Что ты делаешь на работе?'] },
      ],
    },
    {
      lesson: 1, title: 'Ein Sonntag im Park',
      de: `Am Sonntag ist das Wetter schön. Die Familie Haddad geht in den Park. Karim fährt Fahrrad, Nour spielt mit anderen Kindern.

Im Park treffen sie Dmytro und seine Frau. Die Männer spielen Fußball. Leyla und die Frau von Dmytro gehen spazieren.

Am Abend kochen alle zusammen bei Haddads. Es gibt syrisches und ukrainisches Essen. „Ein schöner Tag!“, sagt Nour.`,
      ru: `В воскресенье хорошая погода. Семья Хаддад идёт в парк. Карим катается на велосипеде, Нур играет с другими детьми.

В парке они встречают Дмитро и его жену. Мужчины играют в футбол. Лейла и жена Дмитро гуляют.

Вечером все вместе готовят у Хаддадов. Сирийская и украинская еда. «Прекрасный день!» — говорит Нур.`,
      gloss: { schulz: 'Шульц (фамилия)', haddad: 'Хаддад (фамилия)', haddads: 'Хаддадов', karim: 'Карим (имя)', nour: 'Нур (имя)', dmytro: 'Дмитро (имя)', leyla: 'Лейла (имя)', sonntag: 'воскресенье', wetter: 'погода', schön: 'хороший, прекрасный', anderen: 'другими', kindern: 'детьми', seine: 'его', männer: 'мужчины', alle: 'все', bei: 'у', syrisches: 'сирийская', ukrainisches: 'украинская', essen: 'еда', schöner: 'прекрасный' },
      questions: [
        { q: 'Was macht Karim im Park?', ru: 'Что делает Карим в парке?', options: ['Er fährt Fahrrad.', 'Er schwimmt.', 'Er liest.'], answer: 'Er fährt Fahrrad.' },
        { q: 'Wen treffen sie im Park?', ru: 'Кого они встречают в парке?', options: ['Dmytro und seine Frau', 'Frau Schulz', 'Die Lehrerin'], answer: 'Dmytro und seine Frau' },
        { q: 'Was machen alle am Abend?', ru: 'Что все делают вечером?', options: ['Sie kochen zusammen.', 'Sie gehen ins Kino.', 'Sie schlafen.'], answer: 'Sie kochen zusammen.' },
      ],
      translate: [
        { de: 'Wir treffen uns im Park.', ru: 'Мы встречаемся в парке.', wrongRu: ['Мы встречаемся в кино.', 'Мы гуляем в парке.'] },
        { de: 'Die Kinder spielen im Park.', ru: 'Дети играют в парке.', wrongRu: ['Дети гуляют в городе.', 'Мужчины играют в парке.'] },
        { de: 'Am Abend kochen wir zusammen.', ru: 'Вечером мы готовим вместе.', wrongRu: ['Утром мы готовим вместе.', 'Вечером мы едим в ресторане.'] },
      ],
    },
  ],
};
