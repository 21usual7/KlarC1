import type { Module } from '../types.ts';

// A2.1 pflege 08: dementia — confusion, memory, patience (lesson 0); biography, memories, calming down (lesson 1).

export const module: Module = {
  id: 'pflege-a21-08-demenz', sphere: 'pflege', level: 'A2.1',
  title: 'Menschen mit Demenz', subtitle: 'Общение с пациентом с деменцией: спокойствие, терпение, воспоминания и знакомые ритуалы.',
  words: [
    { id: 'pfl-a21-08-demenz', icon: 'Brain', de: 'Demenz', pos: 'noun', article: 'die', ru: 'деменция', note: 'dement — страдающий деменцией.', example: { de: 'Frau Lange hat Demenz.', ru: 'У госпожи Ланге деменция.', cloze: 'Demenz' } },
    { id: 'pfl-a21-08-verwirrt', icon: 'CircleHelp', de: 'verwirrt', pos: 'adj', ru: 'растерянный, с помрачённым сознанием', example: { de: 'Am Abend ist sie oft verwirrt.', ru: 'Вечером она часто растеряна.', cloze: 'verwirrt' } },
    { id: 'pfl-a21-08-vergesslich', icon: 'CloudFog', de: 'vergesslich', pos: 'adj', ru: 'забывчивый', example: { de: 'Mein Vater wird immer vergesslicher.', ru: 'Мой отец становится всё забывчивее.', cloze: 'vergesslich' } },
    { id: 'pfl-a21-08-gedaechtnis', icon: 'Brain', de: 'Gedächtnis', pos: 'noun', article: 'das', plural: 'Gedächtnisse', ru: 'память', note: 'das Kurzzeitgedächtnis — кратковременная память.', example: { de: 'Das Gedächtnis wird schlechter.', ru: 'Память ухудшается.', cloze: 'Gedächtnis' } },
    { id: 'pfl-a21-08-erkennen', icon: 'ScanFace', de: 'erkennen', pos: 'verb', ru: 'узнавать, распознавать', forms: 'er erkennt · hat erkannt', example: { de: 'Sie erkennt ihren Sohn nicht mehr.', ru: 'Она больше не узнаёт сына.', cloze: 'erkennt' } },
    { id: 'pfl-a21-08-geduld', icon: 'Hourglass', de: 'Geduld', pos: 'noun', article: 'die', ru: 'терпение', note: 'geduldig — терпеливый.', collocation: { de: 'Geduld haben', ru: 'иметь терпение' }, example: { de: 'Mit Demenz braucht man viel Geduld.', ru: 'При деменции нужно много терпения.', cloze: 'Geduld' } },
    { id: 'pfl-a21-08-wiederholen', icon: 'Repeat', de: 'wiederholen', pos: 'verb', ru: 'повторять', forms: 'er wiederholt · hat wiederholt', note: 'Неотделяемая приставка: Ich wiederhole.', example: { de: 'Sie wiederholt dieselbe Frage zehnmal.', ru: 'Она повторяет один и тот же вопрос десять раз.', cloze: 'wiederholt' } },
    { id: 'pfl-a21-08-orientierung', icon: 'Compass', de: 'Orientierung', pos: 'noun', article: 'die', ru: 'ориентация (во времени и месте)', example: { de: 'Ein großer Kalender hilft bei der Orientierung.', ru: 'Большой календарь помогает ориентироваться.', cloze: 'Orientierung' } },

    { id: 'pfl-a21-08-weglaufen', icon: 'DoorOpen', de: 'weglaufen', pos: 'verb', ru: 'убегать, уходить (без спроса)', forms: 'er läuft weg · ist weggelaufen', example: { de: 'In der Nacht ist sie weggelaufen.', ru: 'Ночью она ушла.', cloze: 'weggelaufen' } },
    { id: 'pfl-a21-08-biografie', icon: 'BookOpen', de: 'Biografie', pos: 'noun', article: 'die', plural: 'Biografien', ru: 'биография', note: 'Biografiearbeit — работа с биографией пациента.', example: { de: 'Die Biografie hilft uns, sie zu verstehen.', ru: 'Биография помогает нам её понять.', cloze: 'Biografie' } },
    { id: 'pfl-a21-08-erinnerung', icon: 'Image', de: 'Erinnerung', pos: 'noun', article: 'die', plural: 'Erinnerungen', ru: 'воспоминание', example: { de: 'Alte Erinnerungen sind oft noch da.', ru: 'Старые воспоминания часто ещё сохраняются.', cloze: 'Erinnerungen' } },
    { id: 'pfl-a21-08-beruhigen', icon: 'Leaf', de: 'beruhigen', pos: 'verb', ru: 'успокаивать; (sich beruhigen) успокаиваться', forms: 'er beruhigt · hat beruhigt', example: { de: 'Musik beruhigt sie.', ru: 'Музыка её успокаивает.', cloze: 'beruhigt' } },
    { id: 'pfl-a21-08-fotoalbum', icon: 'Images', de: 'Fotoalbum', pos: 'noun', article: 'das', plural: 'Fotoalben', ru: 'фотоальбом', parts: ['Foto', 'album'], example: { de: 'Wir schauen zusammen ins Fotoalbum.', ru: 'Мы вместе смотрим фотоальбом.', cloze: 'Fotoalbum' } },
    { id: 'pfl-a21-08-ritual', icon: 'Repeat2', de: 'Ritual', pos: 'noun', article: 'das', plural: 'Rituale', ru: 'ритуал, привычный порядок', example: { de: 'Feste Rituale geben Sicherheit.', ru: 'Постоянные ритуалы дают чувство безопасности.', cloze: 'Rituale' } },
    { id: 'pfl-a21-08-aggressiv', icon: 'Angry', de: 'aggressiv', pos: 'adj', ru: 'агрессивный', example: { de: 'Manchmal wird er aggressiv.', ru: 'Иногда он становится агрессивным.', cloze: 'aggressiv' } },
    { id: 'pfl-a21-08-betreuung', icon: 'HeartHandshake', de: 'Betreuung', pos: 'noun', article: 'die', ru: 'уход, присмотр, сопровождение', example: { de: 'Sie braucht Betreuung rund um die Uhr.', ru: 'Ей нужен круглосуточный присмотр.', cloze: 'Betreuung' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wo bin ich?',
      de: `Frau Lange ist achtundachtzig Jahre alt und hat Demenz. Ihr Kurzzeitgedächtnis ist sehr schlecht. Sie fragt Olena jeden Morgen: „Wo bin ich? Wer sind Sie?“

Olena erklärt es ruhig und mit viel Geduld: „Sie sind im Krankenhaus, Frau Lange. Ich bin Olena, Ihre Pflegerin.“ Fünf Minuten später wiederholt Frau Lange dieselbe Frage. Olena antwortet wieder freundlich.

Am Abend ist Frau Lange oft unruhig und verwirrt. Manchmal erkennt sie sogar ihren Sohn nicht. Für die Orientierung hängt jetzt ein großer Kalender mit dem Datum an der Wand. Und auf der Tür ist ein Bild von ihrem Hund, damit sie ihr Zimmer findet.`,
      ru: `Госпоже Ланге восемьдесят восемь лет, у неё деменция. Кратковременная память у неё очень плохая. Каждое утро она спрашивает Олену: «Где я? Кто вы?»

Олена объясняет спокойно и терпеливо: «Вы в больнице, госпожа Ланге. Я Олена, ваша медсестра». Через пять минут госпожа Ланге повторяет тот же вопрос. Олена снова приветливо отвечает.

Вечером госпожа Ланге часто беспокойна и растеряна. Иногда она даже не узнаёт сына. Для ориентации на стене теперь висит большой календарь с датой. А на двери — фото её собаки, чтобы она находила свою палату.`,
      gloss: { lange: 'Ланге (фамилия)', olena: 'Олена (имя)', frau: 'госпожа', achtundachtzig: 'восемьдесят восемь', jahre: 'лет', alt: '(… Jahre alt) … лет', ihr: 'её', kurzzeitgedächtnis: 'кратковременная память', schlecht: 'плохая', fragt: 'спрашивает', jeden: 'каждое', morgen: 'утро', wo: 'где', bin: 'нахожусь, есть', wer: 'кто', sind: 'есть, находитесь', erklärt: 'объясняет', es: 'это', ruhig: 'спокойно', mit: 'с', viel: 'много', krankenhaus: 'больница', ihre: 'ваша', pflegerin: 'медсестра, сиделка', fünf: 'пять', minuten: 'минут', später: 'позже; (fünf Minuten später) через пять минут', dieselbe: 'тот же самый', frage: 'вопрос', antwortet: 'отвечает', wieder: 'снова', freundlich: 'приветливо', abend: 'вечер', oft: 'часто', unruhig: 'беспокойная', manchmal: 'иногда', sogar: 'даже', ihren: 'своего', sohn: 'сын', nicht: 'не', für: 'для', hängt: 'висит', jetzt: 'теперь', großer: 'большой', kalender: 'календарь', datum: 'дата', an: 'на', wand: 'стена', auf: 'на', tür: 'дверь', bild: 'картинка, фото', von: 'с, от', ihrem: 'её', hund: 'собака', damit: 'чтобы', zimmer: 'палата', findet: 'находит', was: 'что', wie: 'как', warum: 'почему', tochter: 'дочь', mann: 'муж', katze: 'кошка', vogel: 'птица' },
      questions: [
        { q: 'Was fragt Frau Lange jeden Morgen?', ru: 'О чём госпожа Ланге спрашивает каждое утро?', options: ['Wo bin ich? Wer sind Sie?', 'Wann kommt mein Sohn?', 'Was gibt es zum Essen?'], answer: 'Wo bin ich? Wer sind Sie?' },
        { q: 'Wen erkennt Frau Lange manchmal nicht?', ru: 'Кого госпожа Ланге иногда не узнаёт?', options: ['Ihren Sohn', 'Ihre Tochter', 'Ihren Mann'], answer: 'Ihren Sohn' },
        { q: 'Was ist auf der Tür?', ru: 'Что на двери?', options: ['Ein Bild von ihrem Hund', 'Ein Kalender', 'Ein Bild von ihrer Katze'], answer: 'Ein Bild von ihrem Hund' },
      ],
      translate: [
        { de: 'Sie erkennt ihren Sohn nicht mehr.', ru: 'Она больше не узнаёт сына.', wrongRu: ['Она узнаёт сына.', 'Сын её больше не узнаёт.'] },
        { de: 'Mit Demenz braucht man viel Geduld.', ru: 'При деменции нужно много терпения.', wrongRu: ['При деменции не нужно терпение.', 'При диабете нужно много терпения.'] },
        { de: 'Sie wiederholt dieselbe Frage.', ru: 'Она повторяет тот же вопрос.', wrongRu: ['Она задаёт новый вопрос.', 'Она забывает вопрос.'] },
      ],
    },
    {
      lesson: 1, title: 'Die alten Lieder',
      de: `In der Nacht ist Frau Lange weggelaufen. Tom hat sie im Treppenhaus gefunden. Sie wollte „nach Hause, zu den Kindern“. Als Tom sie zurückbringen wollte, wurde sie aggressiv und hat geschrien.

Am nächsten Tag liest Olena die Biografie von Frau Lange. Sie war vierzig Jahre Lehrerin und hat gern im Chor gesungen. Ihre alten Erinnerungen sind noch da.

Am Nachmittag schaut Olena mit ihr ins Fotoalbum und singt ein altes Volkslied. Frau Lange singt sofort mit – sie kennt jedes Wort! Die Musik beruhigt sie. Jetzt gibt es ein neues Ritual: Jeden Abend um sieben singen sie zusammen. So wird die Betreuung leichter.`,
      ru: `Ночью госпожа Ланге ушла. Том нашёл её на лестнице. Она хотела «домой, к детям». Когда Том хотел отвести её обратно, она стала агрессивной и кричала.

На следующий день Олена читает биографию госпожи Ланге. Она сорок лет была учительницей и любила петь в хоре. Её старые воспоминания ещё сохранились.

Днём Олена смотрит с ней фотоальбом и поёт старую народную песню. Госпожа Ланге сразу подпевает — она знает каждое слово! Музыка её успокаивает. Теперь появился новый ритуал: каждый вечер в семь они вместе поют. Так ухаживать за ней становится легче.`,
      gloss: { beruf: 'профессия', sonntag: 'воскресенье', lange: 'Ланге (фамилия)', tom: 'Том (имя)', olena: 'Олена (имя)', frau: 'госпожа', nacht: 'ночь', ist: 'есть; вспом. глагол', hat: 'вспом. глагол; имеет', sie: 'она; её', treppenhaus: 'лестничная клетка', gefunden: 'нашёл', wollte: 'хотела, хотел', nach: '(nach Hause) домой', hause: '(nach Hause) домой', zu: 'к', kindern: 'детям', als: 'когда', zurückbringen: 'отвести обратно', wurde: 'стала', geschrien: 'кричала', nächsten: 'следующий', tag: 'день', liest: 'читает', war: 'была', vierzig: 'сорок', jahre: 'лет', lehrerin: 'учительница', gern: 'охотно; (gern gesungen) любила петь', chor: 'хор', gesungen: 'пела', ihre: 'её', alten: 'старые', noch: 'ещё', da: 'здесь; (sind noch da) сохранились', nachmittag: 'вторая половина дня', schaut: 'смотрит', mit: 'с; (singt mit) подпевает', ihr: 'ней', ins: 'в (in + das)', singt: 'поёт', altes: 'старую', volkslied: 'народная песня', sofort: 'сразу', kennt: 'знает', jedes: 'каждое', wort: 'слово', musik: 'музыка', jetzt: 'теперь', gibt: '(es gibt) есть, появился', neues: 'новый', jeden: 'каждый', abend: 'вечер', um: 'в (о времени)', sieben: 'семь', singen: 'поют', zusammen: 'вместе', so: 'так', wird: 'становится', leichter: 'легче', was: 'что', wo: 'где', wann: 'когда', wer: 'кто', lieder: 'песни', küche: 'кухня', garten: 'сад', ärztin: 'врач (женщина)', verkäuferin: 'продавщица', acht: 'восемь', neun: 'девять' },
      questions: [
        { q: 'Wo hat Tom Frau Lange gefunden?', ru: 'Где Том нашёл госпожу Ланге?', options: ['Im Treppenhaus', 'Im Garten', 'In der Küche'], answer: 'Im Treppenhaus' },
        { q: 'Was war Frau Lange von Beruf?', ru: 'Кем по профессии была госпожа Ланге?', options: ['Lehrerin', 'Ärztin', 'Verkäuferin'], answer: 'Lehrerin' },
        { q: 'Wann singen sie zusammen?', ru: 'Когда они вместе поют?', options: ['Jeden Abend um sieben', 'Jeden Morgen um acht', 'Am Sonntag'], answer: 'Jeden Abend um sieben' },
      ],
      translate: [
        { de: 'Die Musik beruhigt sie.', ru: 'Музыка её успокаивает.', wrongRu: ['Музыка её раздражает.', 'Фотоальбом её успокаивает.'] },
        { de: 'Alte Erinnerungen sind noch da.', ru: 'Старые воспоминания ещё сохранились.', wrongRu: ['Старых воспоминаний уже нет.', 'Новые воспоминания ещё сохранились.'] },
        { de: 'Manchmal wird er aggressiv.', ru: 'Иногда он становится агрессивным.', wrongRu: ['Он никогда не бывает агрессивным.', 'Иногда он становится грустным.'] },
      ],
    },
  ],
};
