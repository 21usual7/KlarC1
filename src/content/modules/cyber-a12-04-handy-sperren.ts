import type { Module } from '../types.ts';

// A1.2 cyber 04: ways to lock a phone (lesson 0) and a lost phone, wrong PIN attempts (lesson 1).

export const module: Module = {
  id: 'cyber-a12-04-handy-sperren', sphere: 'cyber', level: 'A1.2',
  title: 'Das Handy sperren', subtitle: 'PIN, отпечаток пальца, экран блокировки: как защитить телефон.',
  words: [
    { id: 'cyb-a12-04-handy', icon: 'Smartphone', de: 'Handy', pos: 'noun', article: 'das', plural: 'Handys', ru: 'мобильный телефон, смартфон', note: 'Псевдоанглицизм: по-английски так не говорят.', imageQuery: 'smartphone', example: { de: 'Mein Handy liegt auf dem Tisch.', ru: 'Мой телефон лежит на столе.', cloze: 'Handy' } },
    { id: 'cyb-a12-04-sperren', icon: 'Lock', de: 'sperren', pos: 'verb', ru: 'блокировать', forms: 'er sperrt · hat gesperrt', note: '+ Akk: das Handy sperren. Также ein Konto sperren — заблокировать аккаунт.', collocation: { de: 'das Handy sperren', ru: 'заблокировать телефон', accept: ['den Bildschirm sperren', 'das Smartphone sperren'] }, example: { de: 'Ich sperre mein Handy immer.', ru: 'Я всегда блокирую свой телефон.', cloze: 'sperre' } },
    { id: 'cyb-a12-04-entsperren', icon: 'LockOpen', de: 'entsperren', pos: 'verb', ru: 'разблокировать', forms: 'er entsperrt · hat entsperrt', note: 'Приставка ent- неотделяемая и значит «снять, убрать».', example: { de: 'Mit dem Finger entsperrt sie das Handy.', ru: 'Она разблокирует телефон пальцем.', cloze: 'entsperrt' } },
    { id: 'cyb-a12-04-pin', icon: 'RectangleEllipsis', de: 'PIN', pos: 'noun', article: 'die', plural: 'PINs', ru: 'PIN-код', note: 'Говорят die PIN или der PIN-Code.', imageQuery: 'PIN pad', collocation: { de: 'die PIN eingeben', ru: 'ввести PIN-код', accept: ['eine PIN eingeben', 'den PIN-Code eingeben'] }, example: { de: 'Ich ändere meine PIN.', ru: 'Я меняю свой PIN-код.', cloze: 'PIN' } },
    { id: 'cyb-a12-04-fingerabdruck', icon: 'Fingerprint', de: 'Fingerabdruck', pos: 'noun', article: 'der', plural: 'Fingerabdrücke', ru: 'отпечаток пальца', parts: ['Finger', 'abdruck'], imageQuery: 'fingerprint', example: { de: 'Mein Fingerabdruck öffnet das Handy.', ru: 'Мой отпечаток пальца открывает телефон.', cloze: 'Fingerabdruck' } },
    { id: 'cyb-a12-04-sperrbildschirm', icon: 'TabletSmartphone', de: 'Sperrbildschirm', pos: 'noun', article: 'der', plural: 'Sperrbildschirme', ru: 'экран блокировки', parts: ['Sperr', 'bildschirm'], imageQuery: 'smartphone lock screen', example: { de: 'Auf dem Sperrbildschirm sehe ich die Uhrzeit.', ru: 'На экране блокировки я вижу время.', cloze: 'Sperrbildschirm' } },
    { id: 'cyb-a12-04-muster', icon: 'Waypoints', de: 'Muster', pos: 'noun', article: 'das', plural: 'Muster', ru: 'графический ключ; узор, образец', note: 'Полностью: das Entsperrmuster.', imageQuery: 'android pattern lock', example: { de: 'Ein einfaches Muster ist nicht sicher.', ru: 'Простой графический ключ ненадёжен.', cloze: 'Muster' } },
    { id: 'cyb-a12-04-gesicht', icon: 'ScanFace', de: 'Gesicht', pos: 'noun', article: 'das', plural: 'Gesichter', ru: 'лицо', imageQuery: 'human face', collocation: { de: 'mit dem Gesicht entsperren', ru: 'разблокировать по лицу' }, example: { de: 'Das Handy erkennt mein Gesicht.', ru: 'Телефон узнаёт моё лицо.', cloze: 'Gesicht' } },

    { id: 'cyb-a12-04-verlieren', icon: 'SearchX', de: 'verlieren', pos: 'verb', ru: 'терять; проигрывать', forms: 'er verliert · hat verloren', collocation: { de: 'das Handy verlieren', ru: 'потерять телефон', accept: ['sein Handy verlieren', 'mein Handy verlieren'] }, example: { de: 'Ich habe mein Handy im Bus verloren.', ru: 'Я потерял телефон в автобусе.', cloze: 'verloren' } },
    { id: 'cyb-a12-04-fundbuero', icon: 'Package', de: 'Fundbüro', pos: 'noun', article: 'das', plural: 'Fundbüros', ru: 'бюро находок', parts: ['Fund', 'büro'], imageQuery: 'lost and found office', example: { de: 'Vielleicht ist dein Handy im Fundbüro.', ru: 'Может быть, твой телефон в бюро находок.', cloze: 'Fundbüro' } },
    { id: 'cyb-a12-04-eingeben', icon: 'Keyboard', de: 'eingeben', pos: 'verb', ru: 'вводить (данные)', forms: 'er gibt ein · hat eingegeben', note: 'Отделяемая приставка: ich gebe die PIN ein.', imageQuery: 'typing on smartphone', collocation: { de: 'das Passwort eingeben', ru: 'ввести пароль', accept: ['ein Passwort eingeben', 'den Code eingeben'] }, example: { de: 'Gib die PIN nicht vor anderen ein!', ru: 'Не вводи PIN-код при других!', cloze: 'Gib' } },
    { id: 'cyb-a12-04-versuch', icon: 'RotateCcw', de: 'Versuch', pos: 'noun', article: 'der', plural: 'Versuche', ru: 'попытка', collocation: { de: 'noch einen Versuch haben', ru: 'иметь ещё одну попытку', accept: ['einen Versuch haben'] }, example: { de: 'Nach drei falschen Versuchen ist das Handy gesperrt.', ru: 'После трёх неверных попыток телефон заблокирован.', cloze: 'Versuchen' } },
    { id: 'cyb-a12-04-nervoes', icon: 'Frown', de: 'nervös', pos: 'adj', ru: 'нервный, взволнованный', note: 'nervös sein — нервничать.', example: { de: 'Ohne mein Handy bin ich nervös.', ru: 'Без телефона я нервничаю.', cloze: 'nervös' } },
    { id: 'cyb-a12-04-leihen', icon: 'HandHelping', de: 'leihen', pos: 'verb', ru: 'одалживать, давать на время', forms: 'er leiht · hat geliehen', note: 'jemandem (Dat) etwas (Akk) leihen. sich etwas leihen — брать взаймы.', example: { de: 'Kannst du mir kurz dein Handy leihen?', ru: 'Можешь ненадолго одолжить мне свой телефон?', cloze: 'leihen' } },
    { id: 'cyb-a12-04-neugierig', icon: 'Eye', de: 'neugierig', pos: 'adj', ru: 'любопытный', note: 'neugierig auf + Akk: любопытно что-то узнать.', example: { de: 'Mein kleiner Bruder ist sehr neugierig.', ru: 'Мой младший брат очень любопытный.', cloze: 'neugierig' } },
    { id: 'cyb-a12-04-daumen', icon: 'ThumbsUp', de: 'Daumen', pos: 'noun', article: 'der', plural: 'Daumen', ru: 'большой палец (руки)', imageQuery: 'thumb', example: { de: 'Ich entsperre das Handy mit dem Daumen.', ru: 'Я разблокирую телефон большим пальцем.', cloze: 'Daumen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Lukas und sein neues Handy',
      de: `Lukas hat ein neues Handy. Seine Schwester Nina hilft ihm. Zuerst macht er eine PIN. Nina sagt: „Nimm nicht deinen Geburtstag. Den kennen alle.“

Dann speichert Lukas seinen Fingerabdruck. Er legt den Finger auf den Sensor. Jetzt entsperrt er das Handy ganz schnell. Das Handy kennt auch sein Gesicht.

Nina zeigt ihm noch ein Muster. „Ein Muster ist okay, aber man sieht es leicht“, sagt sie. Am Ende sperrt Lukas das Handy. Auf dem Sperrbildschirm sieht man jetzt nur die Uhrzeit und ein Foto von seinem Hund.`,
      ru: `У Лукаса новый телефон. Его сестра Нина ему помогает. Сначала он придумывает PIN-код. Нина говорит: «Не бери свой день рождения. Его знают все».

Потом Лукас сохраняет свой отпечаток пальца. Он кладёт палец на сенсор. Теперь он разблокирует телефон очень быстро. Телефон знает и его лицо.

Нина показывает ему ещё графический ключ. «Графический ключ — это нормально, но его легко подсмотреть», — говорит она. В конце Лукас блокирует телефон. На экране блокировки теперь видно только время и фото его собаки.`,
      gloss: { lukas: 'Лукас (имя)', nina: 'Нина (имя)', nimm: 'возьми!', geburtstag: 'день рождения', den: 'его (вин.); артикль', speichert: 'сохраняет', legt: 'кладёт', finger: 'палец', sensor: 'сенсор, датчик', kennt: 'знает, узнаёт', leicht: 'легко', uhrzeit: 'время (на часах)', foto: 'фото', hund: 'собака', sms: 'SMS', computer: 'компьютер', als: 'в качестве' },
      questions: [
        { q: 'Was soll Lukas nicht als PIN nehmen?', ru: 'Что Лукасу не стоит брать в качестве PIN-кода?', options: ['Sein Gesicht', 'Seinen Geburtstag', 'Seinen Hund'], answer: 'Seinen Geburtstag' },
        { q: 'Wie entsperrt Lukas das Handy schnell?', ru: 'Как Лукас быстро разблокирует телефон?', options: ['Mit dem Finger', 'Mit einem Code per SMS', 'Mit dem Computer'], answer: 'Mit dem Finger' },
        { q: 'Was sieht man auf dem Sperrbildschirm?', ru: 'Что видно на экране блокировки?', options: ['Seine PIN', 'Seine Nachrichten', 'Die Uhrzeit und ein Foto'], answer: 'Die Uhrzeit und ein Foto' },
      ],
      translate: [
        { de: 'Lukas sperrt sein Handy.', ru: 'Лукас блокирует свой телефон.', wrongRu: ['Лукас разблокирует свой телефон.', 'Лукас теряет свой телефон.'] },
        { de: 'Das Handy kennt sein Gesicht.', ru: 'Телефон узнаёт его лицо.', wrongRu: ['Телефон узнаёт его голос.', 'Телефон не узнаёт его лицо.'] },
        { de: 'Ein Muster ist nicht sehr sicher.', ru: 'Графический ключ не очень надёжный.', wrongRu: ['Графический ключ очень надёжный.', 'PIN-код не очень надёжный.', 'Графический ключ не очень удобный.'] },
      ],
    },
    {
      lesson: 1, title: 'Das Handy ist weg',
      de: `Am Freitag fährt Lukas mit der Straßenbahn zur Schule. Dort merkt er: Das Handy ist weg! Er hat es verloren. Lukas ist nervös. Aber das Handy ist gesperrt.

Ein Mann findet das Handy und ist neugierig. Er gibt dreimal eine falsche PIN ein. Nach drei Versuchen ist das Handy für eine Stunde gesperrt. Der Mann bringt es ins Fundbüro.

Am Nachmittag holt Lukas sein Handy im Fundbüro ab. Seine Freundin Lena fragt: „Kannst du mir dein Handy leihen?“ Lukas sagt: „Ja, aber ich entsperre es mit dem Daumen. Meine PIN hat sechs Ziffern und bleibt geheim.“`,
      ru: `В пятницу Лукас едет в школу на трамвае. Там он замечает: телефона нет! Он его потерял. Лукас нервничает. Но телефон заблокирован.

Какой-то мужчина находит телефон, и ему любопытно. Он три раза вводит неверный PIN-код. После трёх попыток телефон заблокирован на час. Мужчина относит его в бюро находок.

Днём Лукас забирает свой телефон в бюро находок. Его подруга Лена спрашивает: «Можешь одолжить мне свой телефон?» Лукас говорит: «Да, но я разблокирую его большим пальцем. В моём PIN-коде шесть цифр, и он остаётся секретным».`,
      gloss: { lukas: 'Лукас (имя)', lena: 'Лена (имя)', freitag: 'пятница', fährt: 'едет', straßenbahn: 'трамвай (в Вене разг. «die Bim»)', merkt: 'замечает', weg: 'пропал, исчез', ziffern: 'цифры', gibt: 'даёт; (gibt … ein) вводит', ein: 'один, какой-то; (gibt … ein) приставка: вводит', dreimal: 'три раза', falsche: 'неправильная, неверная', bringt: 'приносит, относит', nachmittag: 'вторая половина дня', holt: 'забирает', ab: '(holt … ab) приставка: забирает', entsperre: '(я) разблокирую', freundin: 'подруга; девушка', behält: 'оставляет себе', öffnen: 'открыть', akku: 'аккумулятор', leer: 'пустой, разряженный', an: '(ruft … an) приставка: звонит' },
      questions: [
        { q: 'Was macht der Mann mit dem Handy?', ru: 'Что мужчина делает с телефоном?', options: ['Er behält es.', 'Er bringt es ins Fundbüro.', 'Er ruft Lukas an.'], answer: 'Er bringt es ins Fundbüro.' },
        { q: 'Warum kann der Mann das Handy nicht öffnen?', ru: 'Почему мужчина не может открыть телефон?', options: ['Es ist gesperrt.', 'Es ist kaputt.', 'Der Akku ist leer.'], answer: 'Es ist gesperrt.' },
        { q: 'Wann holt Lukas das Handy ab?', ru: 'Когда Лукас забирает телефон?', options: ['Am Morgen', 'Am Abend', 'Am Nachmittag'], answer: 'Am Nachmittag' },
        { q: 'Wie entsperrt Lukas das Handy für Lena?', ru: 'Как Лукас разблокирует телефон для Лены?', options: ['Mit seinem Gesicht', 'Mit dem Daumen', 'Mit einem Muster'], answer: 'Mit dem Daumen' },
      ],
      translate: [
        { de: 'Ich habe mein Handy verloren.', ru: 'Я потерял свой телефон.', wrongRu: ['Я нашёл свой телефон.', 'Он потерял свой телефон.', 'Я потеряю свой телефон.'] },
        { de: 'Kannst du mir dein Handy leihen?', ru: 'Можешь одолжить мне свой телефон?', wrongRu: ['Можешь найти мой телефон?', 'Можешь одолжить мне свой ноутбук?'] },
        { de: 'Das Handy ist im Fundbüro.', ru: 'Телефон в бюро находок.', wrongRu: ['Телефон в школе.', 'Телефона нет в бюро находок.', 'Ключ в бюро находок.'] },
      ],
    },
  ],
};
