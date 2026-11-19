import type { Module } from '../types.ts';

export const module: Module = {
  id: 'informatik-a12-02-internet', sphere: 'informatik', level: 'A1.2',
  title: 'Im Internet', subtitle: 'Браузер, сайты, ссылки и поиск: как найти информацию в сети.',
  words: [
    { id: 'inf-a12-02-browser', icon: 'Compass', de: 'Browser', pos: 'noun', article: 'der', plural: 'Browser', ru: 'браузер', collocation: { de: 'den Browser öffnen', ru: 'открыть браузер', accept: ['einen Browser öffnen'] }, example: { de: 'Ich öffne den Browser auf dem Laptop.', ru: 'Я открываю браузер на ноутбуке.', cloze: 'Browser' } },
    { id: 'inf-a12-02-webseite', icon: 'LayoutTemplate', de: 'Webseite', pos: 'noun', article: 'die', plural: 'Webseiten', ru: 'веб-сайт, веб-страница', parts: ['Web', 'seite'], note: 'Также: die Website.', collocation: { de: 'eine Webseite besuchen', ru: 'зайти на сайт', accept: ['die Webseite besuchen'] }, example: { de: 'Die Webseite der Schule ist neu.', ru: 'Сайт школы новый.', cloze: 'Webseite' } },
    { id: 'inf-a12-02-link', icon: 'Link', de: 'Link', pos: 'noun', article: 'der', plural: 'Links', ru: 'ссылка', collocation: { de: 'auf einen Link klicken', ru: 'кликнуть по ссылке', accept: ['auf den Link klicken'] }, example: { de: 'Klick hier auf den Link!', ru: 'Кликни здесь по ссылке!', cloze: 'Link' } },
    { id: 'inf-a12-02-suchmaschine', icon: 'Search', de: 'Suchmaschine', pos: 'noun', article: 'die', plural: 'Suchmaschinen', ru: 'поисковая система, поисковик', parts: ['Such', 'maschine'], example: { de: 'Ich benutze eine Suchmaschine.', ru: 'Я пользуюсь поисковиком.', cloze: 'Suchmaschine' } },
    { id: 'inf-a12-02-suchen', icon: 'ScanSearch', de: 'suchen', pos: 'verb', ru: 'искать', forms: 'er sucht · hat gesucht', note: 'suchen + Akk: ein Rezept suchen; nach + Dat: nach Informationen suchen.', collocation: { de: 'im Internet suchen', ru: 'искать в интернете' }, example: { de: 'Wir suchen ein Rezept im Internet.', ru: 'Мы ищем рецепт в интернете.', cloze: 'suchen' } },
    { id: 'inf-a12-02-surfen', icon: 'Waves', imageQuery: 'teenager browsing internet on laptop', de: 'surfen', pos: 'verb', ru: 'сидеть в интернете, сёрфить', forms: 'er surft · hat gesurft', note: 'im Internet surfen. Perfekt с haben: Ich habe lange gesurft.', example: { de: 'Mein Bruder surft jeden Abend.', ru: 'Мой брат каждый вечер сидит в интернете.', cloze: 'surft' } },
    { id: 'inf-a12-02-wlan', icon: 'Wifi', imageQuery: 'wifi router', de: 'WLAN', pos: 'noun', article: 'das', plural: 'WLANs', ru: 'Wi-Fi, беспроводная сеть', note: 'Читается «вэ-лан». Слово Wi-Fi тоже понимают.', example: { de: 'Das WLAN in der Schule ist langsam.', ru: 'Wi-Fi в школе медленный.', cloze: 'WLAN' } },
    { id: 'inf-a12-02-online', icon: 'Activity', de: 'online', pos: 'adj', ru: 'онлайн, в сети', collocation: { de: 'online sein', ru: 'быть в сети' }, example: { de: 'Bist du heute Abend online?', ru: 'Ты сегодня вечером в сети?', cloze: 'online' } },

    { id: 'inf-a12-02-information', icon: 'Info', de: 'Information', pos: 'noun', article: 'die', plural: 'Informationen', ru: 'информация, сведения', note: 'Часто во мн. ч.: viele Informationen — много информации.', collocation: { de: 'Informationen finden', ru: 'найти информацию', accept: ['eine Information finden'] }, example: { de: 'Ich finde viele Informationen online.', ru: 'Я нахожу много информации в интернете.', cloze: 'Informationen' } },
    { id: 'inf-a12-02-ergebnis', icon: 'ListChecks', de: 'Ergebnis', pos: 'noun', article: 'das', plural: 'Ergebnisse', ru: 'результат', example: { de: 'Das erste Ergebnis ist gut.', ru: 'Первый результат хороший.', cloze: 'Ergebnis' } },
    { id: 'inf-a12-02-lesezeichen', icon: 'Bookmark', de: 'Lesezeichen', pos: 'noun', article: 'das', plural: 'Lesezeichen', ru: 'закладка', parts: ['Lese', 'zeichen'], collocation: { de: 'ein Lesezeichen setzen', ru: 'поставить закладку', accept: ['ein Lesezeichen machen'] }, example: { de: 'Ich mache ein Lesezeichen für die Webseite.', ru: 'Я делаю закладку для этого сайта.', cloze: 'Lesezeichen' } },
    { id: 'inf-a12-02-tab', icon: 'PanelTop', de: 'Tab', pos: 'noun', article: 'der', plural: 'Tabs', ru: 'вкладка (браузера)', note: 'Также das Tab; официально: die Registerkarte.', collocation: { de: 'einen neuen Tab öffnen', ru: 'открыть новую вкладку' }, example: { de: 'Ich habe zehn Tabs offen.', ru: 'У меня открыто десять вкладок.', cloze: 'Tabs' } },
    { id: 'inf-a12-02-nachricht', icon: 'MessageSquare', imageQuery: 'text message on smartphone', de: 'Nachricht', pos: 'noun', article: 'die', plural: 'Nachrichten', ru: 'сообщение', note: 'die Nachrichten — также «новости».', collocation: { de: 'eine Nachricht schreiben', ru: 'написать сообщение', accept: ['eine Nachricht schicken'] }, example: { de: 'Ich habe eine Nachricht von Mia.', ru: 'У меня сообщение от Мии.', cloze: 'Nachricht' } },
    { id: 'inf-a12-02-senden', icon: 'Send', de: 'senden', pos: 'verb', ru: 'отправлять', forms: 'er sendet · hat gesendet', note: 'senden + Akk + Dat: Ich sende dir den Link. Синоним: schicken.', example: { de: 'Ich sende dir den Link.', ru: 'Я отправляю тебе ссылку.', cloze: 'sende' } },
    { id: 'inf-a12-02-chatten', icon: 'MessagesSquare', imageQuery: 'teenagers texting on phones', de: 'chatten', pos: 'verb', ru: 'переписываться в чате', forms: 'er chattet · hat gechattet', note: 'mit + Dat: mit Freunden chatten.', collocation: { de: 'mit Freunden chatten', ru: 'переписываться с друзьями' }, example: { de: 'Wir chatten jeden Abend.', ru: 'Мы переписываемся каждый вечер.', cloze: 'chatten' } },
    { id: 'inf-a12-02-offline', icon: 'WifiOff', de: 'offline', pos: 'adj', ru: 'офлайн, не в сети', example: { de: 'Mein Handy ist offline.', ru: 'Мой телефон не в сети.', cloze: 'offline' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Jonas sucht im Internet',
      de: `Jonas hat eine Hausaufgabe: Er schreibt ein Referat über die Donau. Er öffnet den Browser auf seinem Laptop. Das WLAN zu Hause ist heute sehr langsam. Aber endlich ist Jonas online.

Er sucht mit einer Suchmaschine. Er schreibt „Donau“ und findet viele Webseiten. Die erste Webseite ist nur Werbung. Die zweite ist gut, sie hat Fotos und eine Karte.

Jonas klickt auf einen Link und liest. Seine Schwester Mia sagt: „Du surfst schon zwei Stunden!“ Jonas lacht: „Ich surfe nicht, ich lerne!“`,
      ru: `У Йонаса домашнее задание: он пишет доклад о Дунае. Он открывает браузер на своём ноутбуке. Wi-Fi дома сегодня очень медленный. Но наконец Йонас в сети.

Он ищет с помощью поисковика. Он пишет «Дунай» и находит много сайтов. Первый сайт — только реклама. Второй хороший: на нём есть фотографии и карта.

Йонас кликает по ссылке и читает. Его сестра Мия говорит: «Ты сидишь в интернете уже два часа!» Йонас смеётся: «Я не сижу в интернете, я учусь!»`,
      gloss: { jonas: 'Йонас (имя)', mia: 'Мия (имя)', wien: 'Вена', öffne: '(я) открываю', referat: 'доклад, реферат', donau: 'Дунай', laptop: 'ноутбук', seinem: 'своём (дат.)', einer: 'одной, какой-то (ж. р., дат.)', werbung: 'реклама', fotos: 'фотографии', karte: 'карта', stunden: 'часы (мн. ч.)', surfst: '(ты) сидишь в интернете', surfe: '(я) сижу в интернете', lacht: 'смеётся', kaputt: 'сломан(о)', video: 'видео', worüber: 'о чём' },
      questions: [
        { q: 'Worüber schreibt Jonas ein Referat?', ru: 'О чём Йонас пишет доклад?', options: ['Über die Donau', 'Über Wien', 'Über das Internet'], answer: 'Über die Donau' },
        { q: 'Wie ist das WLAN heute?', ru: 'Какой сегодня Wi-Fi?', options: ['Sehr langsam', 'Sehr schnell', 'Kaputt'], answer: 'Sehr langsam' },
        { q: 'Was hat die zweite Webseite?', ru: 'Что есть на втором сайте?', options: ['Fotos und eine Karte', 'Nur Werbung', 'Ein Video'], answer: 'Fotos und eine Karte' },
        { q: 'Was sagt Jonas zu Mia?', ru: 'Что Йонас говорит Мии?', options: ['Ich lerne!', 'Ich surfe!', 'Ich spiele!'], answer: 'Ich lerne!' },
      ],
      translate: [
        { de: 'Ich öffne den Browser.', ru: 'Я открываю браузер.', wrongRu: ['Я закрываю браузер.', 'Он открывает браузер.'] },
        { de: 'Die erste Webseite ist nur Werbung.', ru: 'Первый сайт — только реклама.', wrongRu: ['Второй сайт — только реклама.', 'Первый сайт — не реклама.'] },
        { de: 'Er klickt auf einen Link.', ru: 'Он кликает по ссылке.', wrongRu: ['Он кликнул по ссылке.', 'Я кликаю по ссылке.', 'Он ищет ссылку.'] },
      ],
    },
    {
      lesson: 1, title: 'Zwölf Tabs',
      de: `Am Abend chattet Jonas mit seiner Freundin Elif. Elif schreibt auch ein Referat. Sie fragt: „Hast du gute Informationen?“ Jonas sendet ihr einen Link.

Jonas hat jetzt zwölf Tabs offen. Das ist zu viel! Er macht ein Lesezeichen für die beste Webseite. Dann schließt er die anderen Tabs.

Elif sucht auch selbst. Sie bekommt tausend Ergebnisse, aber nur drei sind gut. Um zehn Uhr ist Jonas offline. Am Morgen hat er eine Nachricht von Elif: „Danke für den Link!“`,
      ru: `Вечером Йонас переписывается со своей подругой Элиф. Элиф тоже пишет доклад. Она спрашивает: «У тебя есть хорошая информация?» Йонас отправляет ей ссылку.

Теперь у Йонаса открыто двенадцать вкладок. Это слишком много! Он делает закладку для лучшего сайта. Потом он закрывает остальные вкладки.

Элиф тоже ищет сама. Она получает тысячу результатов, но хорошие только три. В десять часов Йонас уходит из сети. Утром у него сообщение от Элиф: «Спасибо за ссылку!»`,
      gloss: { jonas: 'Йонас (имя)', elif: 'Элиф (имя)', mia: 'Мия (имя)', seiner: 'своей (ж. р., дат.)', referat: 'доклад, реферат', offen: 'открыт(ы)', viel: 'много', beste: 'лучшую', besten: 'лучшим', schließt: 'закрывает', selbst: 'сама, сам', uhr: 'час (о времени)', tabs: 'вкладки', löscht: 'удаляет', druckt: 'печатает, распечатывает', mutter: 'мама' },
      questions: [
        { q: 'Mit wem chattet Jonas?', ru: 'С кем переписывается Йонас?', options: ['Mit Elif', 'Mit Mia', 'Mit seiner Mutter'], answer: 'Mit Elif' },
        { q: 'Was macht Jonas mit der besten Webseite?', ru: 'Что Йонас делает с лучшим сайтом?', options: ['Er macht ein Lesezeichen.', 'Er löscht sie.', 'Er druckt sie.'], answer: 'Er macht ein Lesezeichen.' },
        { q: 'Wie viele Ergebnisse sind für Elif gut?', ru: 'Сколько результатов хорошие для Элиф?', options: ['Drei', 'Zehn', 'Tausend'], answer: 'Drei' },
        { q: 'Wann ist Jonas offline?', ru: 'Когда Йонас уходит из сети?', options: ['Um zehn Uhr', 'Um zwölf Uhr', 'Am Morgen'], answer: 'Um zehn Uhr' },
      ],
      translate: [
        { de: 'Jonas sendet ihr einen Link.', ru: 'Йонас отправляет ей ссылку.', wrongRu: ['Йонас отправляет ему ссылку.', 'Йонас получает от неё ссылку.'] },
        { de: 'Er hat zwölf Tabs offen.', ru: 'У него открыто двенадцать вкладок.', wrongRu: ['У него открыто десять вкладок.', 'У него закрыто двенадцать вкладок.'] },
        { de: 'Sie bekommt viele Ergebnisse.', ru: 'Она получает много результатов.', wrongRu: ['Она получает мало результатов.', 'Он получает много результатов.', 'Она ищет много результатов.'] },
      ],
    },
  ],
};
