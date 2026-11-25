import type { Module } from '../types.ts';

// A1.2 pflege 07: emergencies — a fall, unconscious, alarm (lesson 0); bleeding, wound, dressing (lesson 1).

export const module: Module = {
  id: 'pflege-a12-07-notfall', sphere: 'pflege', level: 'A1.2',
  title: 'Ein Notfall', subtitle: 'Экстренный случай: падение, потеря сознания, кровотечение — позвать помощь и сказать главное.',
  words: [
    { id: 'pfl-a12-07-notfall', icon: 'Siren', de: 'Notfall', pos: 'noun', article: 'der', plural: 'Notfälle', ru: 'экстренный случай', parts: ['Not', 'fall'], note: 'die Notaufnahme — приёмное (экстренное) отделение.', example: { de: 'Schnell, das ist ein Notfall!', ru: 'Быстро, это экстренный случай!', cloze: 'Notfall' } },
    { id: 'pfl-a12-07-alarm', icon: 'BellRing', de: 'Alarm', pos: 'noun', article: 'der', plural: 'Alarme', ru: 'тревога, сигнал тревоги', collocation: { de: 'Alarm auslösen', ru: 'поднять тревогу' }, example: { de: 'Olena drückt den Alarm.', ru: 'Олена нажимает тревожную кнопку.', cloze: 'Alarm' } },
    { id: 'pfl-a12-07-bewusstlos', icon: 'EyeOff', de: 'bewusstlos', pos: 'adj', ru: 'без сознания', example: { de: 'Der Patient ist bewusstlos.', ru: 'Пациент без сознания.', cloze: 'bewusstlos' } },
    { id: 'pfl-a12-07-stuerzen', icon: 'ArrowDown', de: 'stürzen', pos: 'verb', ru: 'упасть (резко), рухнуть', forms: 'er stürzt · ist gestürzt', note: 'der Sturz — падение. Официальнее, чем fallen.', example: { de: 'Herr Becker ist im Bad gestürzt.', ru: 'Господин Беккер упал в ванной.', cloze: 'gestürzt' } },
    { id: 'pfl-a12-07-boden', icon: 'Square', de: 'Boden', pos: 'noun', article: 'der', plural: 'Böden', ru: 'пол; земля', collocation: { de: 'auf dem Boden liegen', ru: 'лежать на полу' }, example: { de: 'Er liegt auf dem Boden.', ru: 'Он лежит на полу.', cloze: 'Boden' } },
    { id: 'pfl-a12-07-notarzt', icon: 'Ambulance', de: 'Notarzt', pos: 'noun', article: 'der', plural: 'Notärzte', ru: 'врач скорой помощи, дежурный врач', parts: ['Not', 'arzt'], collocation: { de: 'den Notarzt rufen', ru: 'вызвать врача скорой помощи' }, example: { de: 'Ruf sofort den Notarzt!', ru: 'Немедленно вызови врача!', cloze: 'Notarzt' } },
    { id: 'pfl-a12-07-sofort', icon: 'Zap', de: 'sofort', pos: 'adv', ru: 'немедленно, сразу', example: { de: 'Ich komme sofort!', ru: 'Я сейчас же приду!', cloze: 'sofort' } },
    { id: 'pfl-a12-07-schnell', icon: 'FastForward', de: 'schnell', pos: 'adj', ru: 'быстрый, быстро', example: { de: 'Bitte kommen Sie schnell!', ru: 'Пожалуйста, приходите быстрее!', cloze: 'schnell' } },

    { id: 'pfl-a12-07-blut', icon: 'Droplet', de: 'Blut', pos: 'noun', article: 'das', ru: 'кровь', collocation: { de: 'Blut abnehmen', ru: 'взять кровь (на анализ)' }, example: { de: 'Am Kopf ist Blut.', ru: 'На голове кровь.', cloze: 'Blut' } },
    { id: 'pfl-a12-07-bluten', icon: 'Droplets', de: 'bluten', pos: 'verb', ru: 'кровоточить', forms: 'es blutet · hat geblutet', example: { de: 'Die Wunde blutet stark.', ru: 'Рана сильно кровоточит.', cloze: 'blutet' } },
    { id: 'pfl-a12-07-wunde', icon: 'Bandage', de: 'Wunde', pos: 'noun', article: 'die', plural: 'Wunden', ru: 'рана', example: { de: 'Die Wunde ist nicht tief.', ru: 'Рана неглубокая.', cloze: 'Wunde' } },
    { id: 'pfl-a12-07-verband', icon: 'Bandage', imageQuery: 'bandage dressing', de: 'Verband', pos: 'noun', article: 'der', plural: 'Verbände', ru: 'повязка', collocation: { de: 'einen Verband machen', ru: 'наложить повязку', accept: ['einen Verband anlegen'] }, example: { de: 'Tom macht einen Verband.', ru: 'Том накладывает повязку.', cloze: 'Verband' } },
    { id: 'pfl-a12-07-gefaehrlich', icon: 'Skull', de: 'gefährlich', pos: 'adj', ru: 'опасный', example: { de: 'Ist das gefährlich?', ru: 'Это опасно?', cloze: 'gefährlich' } },
    { id: 'pfl-a12-07-ruhe', icon: 'Leaf', de: 'Ruhe', pos: 'noun', article: 'die', ru: 'покой, тишина', note: 'Ruhe bewahren — сохранять спокойствие.', collocation: { de: 'Ruhe bewahren', ru: 'сохранять спокойствие' }, example: { de: 'Bleiben Sie ganz in Ruhe.', ru: 'Сохраняйте полное спокойствие.', cloze: 'Ruhe' } },
    { id: 'pfl-a12-07-rettungswagen', icon: 'Ambulance', imageQuery: 'ambulance germany', de: 'Rettungswagen', pos: 'noun', article: 'der', plural: 'Rettungswagen', ru: 'машина скорой помощи', parts: ['Rettungs', 'wagen'], note: 'Номер экстренной помощи в Германии — 112.', example: { de: 'Der Rettungswagen kommt in fünf Minuten.', ru: 'Скорая приедет через пять минут.', cloze: 'Rettungswagen' } },
    { id: 'pfl-a12-07-passieren', icon: 'CircleHelp', de: 'passieren', pos: 'verb', ru: 'случаться, происходить', forms: 'es passiert · ist passiert', note: 'Was ist passiert? — Что случилось?', example: { de: 'Was ist passiert?', ru: 'Что случилось?', cloze: 'passiert' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Sturz im Bad',
      de: `Es ist drei Uhr in der Nacht. Olena hört einen lauten Ton aus Zimmer acht. Sie läuft sofort hin. Herr Becker liegt auf dem Boden im Bad. Er ist gestürzt.

„Herr Becker! Hören Sie mich?“ Er antwortet nicht. Er ist bewusstlos, aber er atmet. Olena drückt den Alarm. „Notfall in Zimmer acht!“, ruft sie.

Nach einer Minute kommt Tom. „Was ist passiert?“ – „Er ist gestürzt und ist bewusstlos. Ruf schnell den Notarzt!“ Tom telefoniert. Zwei Minuten später ist Doktor Wagner da.`,
      ru: `Три часа ночи. Олена слышит громкий звук из палаты восемь. Она сразу бежит туда. Господин Беккер лежит на полу в ванной. Он упал.

«Господин Беккер! Вы меня слышите?» Он не отвечает. Он без сознания, но дышит. Олена нажимает тревожную кнопку. «Экстренный случай в палате восемь!» — кричит она.

Через минуту приходит Том. «Что случилось?» — «Он упал и без сознания. Быстро вызови дежурного врача!» Том звонит. Через две минуты доктор Вагнер уже здесь.`,
      gloss: { olena: 'Олена (имя)', becker: 'Беккер (фамилия)', tom: 'Том (имя)', wagner: 'Вагнер (фамилия)', doktor: 'доктор', herr: 'господин', drei: 'три', uhr: 'час', nacht: 'ночь', hört: 'слышит', hören: 'слышите', lauten: 'громкий', ton: 'звук', aus: 'из', zimmer: 'палата', acht: 'восемь', läuft: 'бежит; (läuft hin) бежит туда', hin: 'туда', liegt: 'лежит', bad: 'ванная', mich: 'меня', antwortet: 'отвечает', nicht: 'не', aber: 'но', atmet: 'дышит', drückt: 'нажимает', ruft: 'кричит, зовёт', ruf: 'вызови, позови', nach: 'через', einer: 'одну', minute: 'минута', minuten: 'минут', kommt: 'приходит', telefoniert: 'звонит по телефону', zwei: 'две', später: 'позже; (zwei Minuten später) через две минуты', da: 'здесь', was: 'что', wo: 'где', wer: 'кто', wen: 'кого', ist: 'есть, является', flur: 'коридор', bett: 'кровать', küche: 'кухня', sturz: 'падение' },
      questions: [
        { q: 'Wo liegt Herr Becker?', ru: 'Где лежит господин Беккер?', options: ['Auf dem Boden im Bad', 'Im Bett', 'Auf dem Flur'], answer: 'Auf dem Boden im Bad' },
        { q: 'Was macht Olena zuerst?', ru: 'Что Олена делает сначала?', options: ['Sie drückt den Alarm.', 'Sie ruft den Rettungswagen.', 'Sie macht einen Verband.'], answer: 'Sie drückt den Alarm.' },
        { q: 'Wen ruft Tom?', ru: 'Кого вызывает Том?', options: ['Den Notarzt', 'Frau Becker', 'Die Familie'], answer: 'Den Notarzt' },
      ],
      translate: [
        { de: 'Was ist passiert?', ru: 'Что случилось?', wrongRu: ['Кто это сделал?', 'Где это случилось?'] },
        { de: 'Der Patient ist bewusstlos.', ru: 'Пациент без сознания.', wrongRu: ['Пациент в сознании.', 'Пациент спит.'] },
        { de: 'Ruf schnell den Notarzt!', ru: 'Быстро вызови дежурного врача!', wrongRu: ['Быстро позови медсестру!', 'Не вызывай врача!'] },
      ],
    },
    {
      lesson: 1, title: 'Die Wunde am Kopf',
      de: `Doktor Wagner untersucht Herrn Becker. Am Kopf ist eine Wunde. Sie blutet stark. „Ist das gefährlich?“, fragt Olena. „Nein, die Wunde ist nicht tief“, sagt der Arzt. „Aber er braucht einen Verband.“

Tom macht einen Verband. Nach fünf Minuten öffnet Herr Becker die Augen. „Wo bin ich?“, fragt er. Olena sagt: „Im Krankenhaus. Sie sind gestürzt. Bleiben Sie ganz in Ruhe.“

Doktor Wagner will den Kopf genauer untersuchen. Ein Rettungswagen bringt Herrn Becker in ein anderes Krankenhaus zur Untersuchung. Im Bad ist noch Blut auf dem Boden. Tom macht es sauber.`,
      ru: `Доктор Вагнер осматривает господина Беккера. На голове рана. Она сильно кровоточит. «Это опасно?» — спрашивает Олена. «Нет, рана неглубокая, — говорит врач. — Но ему нужна повязка».

Том накладывает повязку. Через пять минут господин Беккер открывает глаза. «Где я?» — спрашивает он. Олена говорит: «В больнице. Вы упали. Сохраняйте полное спокойствие».

Доктор Вагнер хочет обследовать голову подробнее. Скорая отвозит господина Беккера на обследование в другую больницу. В ванной на полу ещё кровь. Том убирает её.`,
      gloss: { wagner: 'Вагнер (фамилия)', becker: 'Беккер (фамилия)', olena: 'Олена (имя)', tom: 'Том (имя)', doktor: 'доктор', herrn: 'господина (вин.)', herr: 'господин', untersucht: 'осматривает', untersuchen: 'обследовать', untersuchung: 'обследование', am: 'на (an + dem)', kopf: 'голова', fragt: 'спрашивает', tief: 'глубокий', sagt: 'говорит', arzt: 'врач', aber: 'но', braucht: 'нуждается', macht: 'делает; (macht … sauber) убирает', nach: 'через', fünf: 'пять', minuten: 'минут', öffnet: 'открывает', augen: 'глаза', wo: 'где', bin: 'нахожусь, есть', krankenhaus: 'больница', sind: '(Sie sind gestürzt) вы упали', bleiben: 'оставайтесь', ganz: 'совсем, полностью', will: 'хочет', genauer: 'подробнее, точнее', bringt: 'привозит, отвозит', anderes: 'другую', zur: 'на (zu + der)', bad: 'ванная', noch: 'ещё', es: 'его, её, это', sauber: 'чистый; (sauber machen) убирать', was: 'что', wer: 'кто', wie: 'как, какой', bein: 'нога', arm: 'рука', rücken: 'спина' },
      questions: [
        { q: 'Wo ist die Wunde?', ru: 'Где рана?', options: ['Am Kopf', 'Am Bein', 'Am Arm'], answer: 'Am Kopf' },
        { q: 'Wer macht den Verband?', ru: 'Кто накладывает повязку?', options: ['Tom', 'Olena', 'Doktor Wagner'], answer: 'Tom' },
        { q: 'Wie ist die Wunde?', ru: 'Какая рана?', options: ['Nicht tief', 'Sehr tief', 'Gefährlich'], answer: 'Nicht tief' },
      ],
      translate: [
        { de: 'Die Wunde blutet stark.', ru: 'Рана сильно кровоточит.', wrongRu: ['Рана не кровоточит.', 'Нога сильно болит.'] },
        { de: 'Ist das gefährlich?', ru: 'Это опасно?', wrongRu: ['Это больно?', 'Это срочно?'] },
        { de: 'Bleiben Sie ganz in Ruhe.', ru: 'Сохраняйте полное спокойствие.', wrongRu: ['Встаньте, пожалуйста.', 'Оставайтесь в постели.'] },
      ],
    },
  ],
};
