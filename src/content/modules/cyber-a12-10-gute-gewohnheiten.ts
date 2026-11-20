import type { Module } from '../types.ts';

export const module: Module = {
  id: 'cyber-a12-10-gute-gewohnheiten', sphere: 'cyber', level: 'A1.2',
  title: 'Gute Gewohnheiten', subtitle: 'Регулярно, осторожно, внимательно: простые привычки, которые защищают каждый день.',
  words: [
    { id: 'cyb-a12-10-gewohnheit', icon: 'Repeat', imageQuery: 'morning routine', de: 'Gewohnheit', pos: 'noun', article: 'die', plural: 'Gewohnheiten', ru: 'привычка', collocation: { de: 'eine gute Gewohnheit', ru: 'хорошая привычка', accept: ['gute Gewohnheiten'] }, example: { de: 'Das ist eine gute Gewohnheit.', ru: 'Это хорошая привычка.', cloze: 'Gewohnheit' } },
    { id: 'cyb-a12-10-regel', icon: 'ListChecks', de: 'Regel', pos: 'noun', article: 'die', plural: 'Regeln', ru: 'правило', collocation: { de: 'sich an die Regeln halten', ru: 'соблюдать правила', accept: ['sich an eine Regel halten'] }, example: { de: 'Unsere Klasse hat drei Regeln für das Internet.', ru: 'У нашего класса три правила для интернета.', cloze: 'Regeln' } },
    { id: 'cyb-a12-10-regelmaessig', icon: 'CalendarClock', de: 'regelmäßig', pos: 'adj', ru: 'регулярный; регулярно', example: { de: 'Ich mache regelmäßig Updates.', ru: 'Я регулярно делаю обновления.', cloze: 'regelmäßig' } },
    { id: 'cyb-a12-10-vorsichtig', icon: 'ShieldHalf', de: 'vorsichtig', pos: 'adj', ru: 'осторожный; осторожно', note: 'vorsichtig sein mit + Dat — быть осторожным с чем-то.', collocation: { de: 'vorsichtig sein', ru: 'быть осторожным' }, example: { de: 'Sei vorsichtig mit fremden Links!', ru: 'Будь осторожен с чужими ссылками!', cloze: 'vorsichtig' } },
    { id: 'cyb-a12-10-aufpassen', icon: 'Eye', de: 'aufpassen', pos: 'verb', ru: 'быть внимательным; присматривать', forms: 'er passt auf · hat aufgepasst', note: 'aufpassen auf + Akk; отделяемая приставка: Pass … auf!', collocation: { de: 'auf das Handy aufpassen', ru: 'присматривать за телефоном', accept: ['auf mein Handy aufpassen', 'auf dein Handy aufpassen'] }, example: { de: 'Pass gut auf dein Handy auf!', ru: 'Хорошо присматривай за своим телефоном!', cloze: 'Pass' } },
    { id: 'cyb-a12-10-kontrollieren', icon: 'SearchCheck', de: 'kontrollieren', pos: 'verb', ru: 'проверять, контролировать', forms: 'er kontrolliert · hat kontrolliert', note: 'Синоним: prüfen.', example: { de: 'Ich kontrolliere die Adresse im Browser.', ru: 'Я проверяю адрес в браузере.', cloze: 'kontrolliere' } },
    { id: 'cyb-a12-10-nachdenken', icon: 'Brain', de: 'nachdenken', pos: 'verb', ru: 'подумать, обдумывать', forms: 'er denkt nach · hat nachgedacht', note: 'nachdenken über + Akk; отделяемая приставка: Denk … nach!', collocation: { de: 'kurz nachdenken', ru: 'немного подумать' }, example: { de: 'Denk nach, bevor du klickst!', ru: 'Подумай, прежде чем кликать!', cloze: 'Denk' } },
    { id: 'cyb-a12-10-pause', icon: 'Coffee', imageQuery: 'break outdoors', de: 'Pause', pos: 'noun', article: 'die', plural: 'Pausen', ru: 'перерыв', collocation: { de: 'eine Pause machen', ru: 'сделать перерыв', accept: ['Pause machen'] }, example: { de: 'Nach einer Stunde mache ich eine Pause.', ru: 'Через час я делаю перерыв.', cloze: 'Pause' } },

    { id: 'cyb-a12-10-bildschirmzeit', icon: 'Hourglass', imageQuery: 'child using smartphone', de: 'Bildschirmzeit', pos: 'noun', article: 'die', ru: 'экранное время', parts: ['Bildschirm', 'zeit'], example: { de: 'Meine Bildschirmzeit ist zu lang.', ru: 'Моё экранное время слишком большое.', cloze: 'Bildschirmzeit' } },
    { id: 'cyb-a12-10-webcam', icon: 'Webcam', imageQuery: 'laptop webcam', de: 'Webcam', pos: 'noun', article: 'die', plural: 'Webcams', ru: 'веб-камера', example: { de: 'Die Webcam ist oben am Laptop.', ru: 'Веб-камера находится сверху на ноутбуке.', cloze: 'Webcam' } },
    { id: 'cyb-a12-10-abdecken', icon: 'CameraOff', imageQuery: 'webcam cover', de: 'abdecken', pos: 'verb', ru: 'закрывать, заклеивать (сверху)', forms: 'er deckt ab · hat abgedeckt', note: 'Отделяемая приставка: ich decke … ab.', collocation: { de: 'die Webcam abdecken', ru: 'заклеить веб-камеру', accept: ['die Kamera abdecken'] }, example: { de: 'Ich decke meine Webcam immer ab.', ru: 'Я всегда заклеиваю свою веб-камеру.', cloze: 'decke' } },
    { id: 'cyb-a12-10-aufraeumen', icon: 'Sparkles', imageQuery: 'tidying up', de: 'aufräumen', pos: 'verb', ru: 'убирать, наводить порядок', forms: 'er räumt auf · hat aufgeräumt', note: 'Отделяемая приставка. Про телефон: удалять лишние приложения и аккаунты.', example: { de: 'Am Wochenende räume ich mein Handy auf.', ru: 'На выходных я навожу порядок в телефоне.', cloze: 'räume' } },
    { id: 'cyb-a12-10-tipp', icon: 'Lightbulb', de: 'Tipp', pos: 'noun', article: 'der', plural: 'Tipps', ru: 'совет, подсказка', collocation: { de: 'einen Tipp geben', ru: 'дать совет', accept: ['einen guten Tipp geben'] }, example: { de: 'Hast du einen Tipp für mich?', ru: 'У тебя есть совет для меня?', cloze: 'Tipp' } },
    { id: 'cyb-a12-10-gefahr', icon: 'Flame', imageQuery: 'danger sign', de: 'Gefahr', pos: 'noun', article: 'die', plural: 'Gefahren', ru: 'опасность', note: 'Опасный — gefährlich.', example: { de: 'Fremde Links sind eine Gefahr.', ru: 'Чужие ссылки — это опасность.', cloze: 'Gefahr' } },
    { id: 'cyb-a12-10-routine', icon: 'Repeat', de: 'Routine', pos: 'noun', article: 'die', plural: 'Routinen', ru: 'привычный порядок, рутина', example: { de: 'Updates sind für mich eine Routine.', ru: 'Обновления для меня — привычное дело.', cloze: 'Routine' } },
    { id: 'cyb-a12-10-achten', icon: 'Focus', de: 'achten', pos: 'verb', ru: 'обращать внимание', forms: 'er achtet · hat geachtet', note: 'achten auf + Akk.', example: { de: 'Achte auf das Schloss im Browser!', ru: 'Обращай внимание на замок в браузере!', cloze: 'Achte' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Drei Regeln für die Klasse',
      de: `Lukas geht in die HTL in Wien. Er ist oft online. Seine Lehrerin sagt: „Gute Gewohnheiten schützen euch.“ Sie gibt der Klasse drei Regeln.

Erste Regel: Sei vorsichtig mit Links und Nachrichten. Denk kurz nach und klick nicht sofort. Zweite Regel: Pass auf dein Handy auf. Lass es nie allein in der Schule liegen. Dritte Regel: Kontrolliere regelmäßig deine Konten und Passwörter.

Lukas findet die Regeln gut. Jetzt macht er jede Woche einen kleinen Check. Und nach einer Stunde am Computer macht er immer eine Pause.`,
      ru: `Лукас учится в HTL в Вене. Он часто бывает онлайн. Его учительница говорит: «Хорошие привычки вас защищают». Она даёт классу три правила.

Первое правило: будь осторожен со ссылками и сообщениями. Немного подумай и не кликай сразу. Второе правило: присматривай за своим телефоном. Никогда не оставляй его в школе без присмотра. Третье правило: регулярно проверяй свои аккаунты и пароли.

Лукас считает эти правила хорошими. Теперь он каждую неделю делает небольшую проверку. А после часа за компьютером он всегда делает перерыв.`,
      gloss: {
        lukas: 'Лукас (имя)', htl: 'HTL — высшая техническая школа (в Австрии)', wien: 'Вена', online: 'онлайн', gewohnheiten: 'привычки', sei: 'будь!',
        links: 'ссылки', nachrichten: 'сообщения', denk: 'подумай! (nachdenken)', nach: '(Denk … nach) — приставка глагола nachdenken; после',
        pass: 'следи! (aufpassen)', auf: '(Pass … auf) — приставка глагола aufpassen; на', handy: 'мобильный телефон', lass: 'оставь!', dritte: 'третье', kontrolliere: 'проверяй!',
        konten: 'аккаунты', 'passwörter': 'пароли', kleinen: 'небольшую', check: 'проверка', computer: 'компьютер', regeln: 'правила', update: 'обновление',
        nachdenken: 'подумать', klicken: 'кликать', schicken: 'отправлять', sie: 'их; она; они', der: '(der Lehrerin) учительнице; артикль м. р.',
      },
      questions: [
        { q: 'Wie viele Regeln gibt die Lehrerin?', ru: 'Сколько правил даёт учительница?', options: ['Drei', 'Zwei', 'Vier'], answer: 'Drei' },
        { q: 'Was soll Lukas mit Links machen?', ru: 'Что Лукасу нужно делать со ссылками?', options: ['Vorsichtig sein und kurz nachdenken', 'Sofort klicken', 'Sie der Lehrerin schicken'], answer: 'Vorsichtig sein und kurz nachdenken' },
        { q: 'Was macht Lukas nach einer Stunde am Computer?', ru: 'Что делает Лукас после часа за компьютером?', options: ['Eine Pause', 'Einen Check', 'Ein Update'], answer: 'Eine Pause' },
      ],
      translate: [
        { de: 'Sei vorsichtig mit Links!', ru: 'Будь осторожен со ссылками!', wrongRu: ['Будь осторожен с паролями!', 'Не бойся ссылок!'] },
        { de: 'Pass auf dein Handy auf!', ru: 'Присматривай за своим телефоном!', wrongRu: ['Выключи свой телефон!', 'Присматривай за своим ноутбуком!'] },
        { de: 'Er kontrolliert regelmäßig seine Passwörter.', ru: 'Он регулярно проверяет свои пароли.', wrongRu: ['Он регулярно меняет свои пароли.', 'Он никогда не проверяет свои пароли.', 'Она регулярно проверяет свои пароли.'] },
      ],
    },
    {
      lesson: 1, title: 'Nina räumt auf',
      de: `Nina ist sechzehn. Ihre Bildschirmzeit ist sehr lang: fünf Stunden am Tag! Am Samstag will sie etwas ändern. Ihr Cousin Paul studiert an der TU Wien. Er hat ein paar Tipps für sie.

Zuerst räumt Nina ihr Handy auf. Sie löscht alte Apps und Konten. Dann deckt sie die Webcam am Laptop ab. Paul sagt: „Eine offene Webcam ist eine Gefahr.“

Nina fragt: „Und wenn ich einen Fehler mache?“ Paul lacht: „Jeder macht Fehler, das ist normal. Achte einfach auf kleine Dinge, zum Beispiel auf das Schloss im Browser.“ Nina findet die Tipps super.`,
      ru: `Нине шестнадцать. Её экранное время очень большое: пять часов в день! В субботу она хочет что-то изменить. Её двоюродный брат Пауль учится в TU Wien. У него есть для неё пара советов.

Сначала Нина наводит порядок в телефоне. Она удаляет старые приложения и аккаунты. Потом она заклеивает веб-камеру на ноутбуке. Пауль говорит: «Открытая веб-камера — это опасность».

Нина спрашивает: «А если я сделаю ошибку?» Пауль смеётся: «Все ошибаются, это нормально. Просто обращай внимание на мелочи, например на замок в браузере». Нина считает эти советы отличными.`,
      gloss: {
        nina: 'Нина (имя)', ninas: 'Нины (чей?)', sechzehn: 'шестнадцать', stunden: 'часы', samstag: 'суббота', 'ändern': 'изменить', cousin: 'двоюродный брат', paul: 'Пауль (имя)',
        tu: 'TU — технический университет', wien: 'Вена', paar: '(ein paar) несколько, пара', tipps: 'советы', 'räumt': 'наводит порядок (aufräumen)', auf: '(räumt … auf, Achte auf) приставка / предлог «на»',
        handy: 'мобильный телефон', 'löscht': 'удаляет', apps: 'приложения', konten: 'аккаунты', deckt: 'закрывает (abdecken)', ab: '(deckt … ab) — приставка глагола abdecken',
        laptop: 'ноутбук', offene: 'открытая', lacht: 'смеётся', normal: 'нормально', achte: 'обращай внимание!', kleine: 'маленькие', dinge: 'вещи', schloss: 'замок',
        browser: 'браузер', super: 'отличный, супер', jeder: 'каждый; (здесь) все', kauft: 'покупает', lehrer: 'учитель', bruder: 'брат',
      },
      questions: [
        { q: 'Wie lang ist Ninas Bildschirmzeit?', ru: 'Сколько у Нины экранного времени?', options: ['Fünf Stunden am Tag', 'Eine Stunde am Tag', 'Zehn Stunden am Tag'], answer: 'Fünf Stunden am Tag' },
        { q: 'Was macht Nina mit der Webcam?', ru: 'Что Нина делает с веб-камерой?', options: ['Sie deckt sie ab.', 'Sie löscht sie.', 'Sie kauft eine neue.'], answer: 'Sie deckt sie ab.' },
        { q: 'Wer ist Paul?', ru: 'Кто такой Пауль?', options: ['Ninas Cousin', 'Ninas Lehrer', 'Ninas Bruder'], answer: 'Ninas Cousin' },
      ],
      translate: [
        { de: 'Nina räumt ihr Handy auf.', ru: 'Нина наводит порядок в своём телефоне.', wrongRu: ['Нина выключает свой телефон.', 'Нина наводит порядок в своей комнате.'] },
        { de: 'Eine offene Webcam ist eine Gefahr.', ru: 'Открытая веб-камера — это опасность.', wrongRu: ['Закрытая веб-камера — это опасность.', 'Открытая веб-камера — это не опасность.'] },
        { de: 'Jeder macht Fehler, das ist normal.', ru: 'Все ошибаются, это нормально.', wrongRu: ['Никто не ошибается, это нормально.', 'Все ошибаются, это ненормально.'] },
      ],
    },
  ],
};
