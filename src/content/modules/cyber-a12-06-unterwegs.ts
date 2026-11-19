import type { Module } from '../types.ts';

// A1.2 cyber 06: Wi-Fi and network on the train (lesson 0), Bluetooth and devices on a trip (lesson 1).

export const module: Module = {
  id: 'cyber-a12-06-unterwegs', sphere: 'cyber', level: 'A1.2',
  title: 'Unterwegs online', subtitle: 'Сеть, точка доступа, Bluetooth: интернет в дороге и в поездке.',
  words: [
    { id: 'cyb-a12-06-unterwegs', icon: 'Footprints', de: 'unterwegs', pos: 'adv', ru: 'в пути, в дороге, вне дома', note: 'unterwegs sein — быть в дороге.', example: { de: 'Unterwegs lese ich meine Nachrichten.', ru: 'В дороге я читаю свои сообщения.', cloze: 'Unterwegs' } },
    { id: 'cyb-a12-06-netz', icon: 'Network', de: 'Netz', pos: 'noun', article: 'das', plural: 'Netze', ru: 'сеть; связь', note: 'im Netz — в интернете; kein Netz haben — не ловить сеть.', collocation: { de: 'kein Netz haben', ru: 'не ловить сеть, быть без связи' }, example: { de: 'Im Zug habe ich kein Netz.', ru: 'В поезде у меня нет сети.', cloze: 'Netz' } },
    { id: 'cyb-a12-06-verbinden', icon: 'Link2', de: 'verbinden', pos: 'verb', ru: 'соединять, подключать', forms: 'er verbindet · hat verbunden', note: 'sich verbinden mit + Dat: подключаться к чему-то. Приставка ver- неотделяемая.', collocation: { de: 'sich mit dem WLAN verbinden', ru: 'подключиться к Wi-Fi', accept: ['mit dem WLAN verbinden'] }, example: { de: 'Mein Handy verbindet sich mit dem WLAN.', ru: 'Мой телефон подключается к Wi-Fi.', cloze: 'verbindet' } },
    { id: 'cyb-a12-06-hotspot', icon: 'RadioTower', imageQuery: 'wifi hotspot sign', de: 'Hotspot', pos: 'noun', article: 'der', plural: 'Hotspots', ru: 'точка доступа (Wi-Fi), хотспот', note: 'Так называют и бесплатный Wi-Fi в городе, и раздачу интернета с телефона.', example: { de: 'Am Bahnhof gibt es einen kostenlosen Hotspot.', ru: 'На вокзале есть бесплатная точка доступа.', cloze: 'Hotspot' } },
    { id: 'cyb-a12-06-kostenlos', icon: 'BadgeEuro', de: 'kostenlos', pos: 'adj', ru: 'бесплатный', note: 'Синоним: gratis.', example: { de: 'Das WLAN im Zug ist kostenlos.', ru: 'Wi-Fi в поезде бесплатный.', cloze: 'kostenlos' } },
    { id: 'cyb-a12-06-bahnhof', icon: 'TrainTrack', imageQuery: 'train station platform', de: 'Bahnhof', pos: 'noun', article: 'der', plural: 'Bahnhöfe', ru: 'вокзал, станция', parts: ['Bahn', 'hof'], collocation: { de: 'am Bahnhof', ru: 'на вокзале', accept: ['auf dem Bahnhof'] }, example: { de: 'Ich warte am Bahnhof auf den Zug.', ru: 'Я жду поезд на вокзале.', cloze: 'Bahnhof' } },
    { id: 'cyb-a12-06-zug', icon: 'TrainFront', imageQuery: 'passenger train', de: 'Zug', pos: 'noun', article: 'der', plural: 'Züge', ru: 'поезд', collocation: { de: 'mit dem Zug fahren', ru: 'ехать на поезде' }, example: { de: 'Der Zug nach Graz ist voll.', ru: 'Поезд в Грац полный.', cloze: 'Zug' } },
    { id: 'cyb-a12-06-empfang', icon: 'Signal', de: 'Empfang', pos: 'noun', article: 'der', ru: 'приём (сигнала), связь', note: 'В этом значении без мн. ч. (die Empfänge — это «приёмы, вечеринки»).', collocation: { de: 'keinen Empfang haben', ru: 'не ловить сигнал, быть без связи' }, example: { de: 'Im Tunnel habe ich keinen Empfang.', ru: 'В туннеле у меня нет связи.', cloze: 'Empfang' } },

    { id: 'cyb-a12-06-bluetooth', icon: 'Bluetooth', de: 'Bluetooth', pos: 'noun', article: 'das', ru: 'Bluetooth', note: 'Читается «блютус». Обычно без артикля: Bluetooth ist an / aus.', example: { de: 'Mein Bluetooth ist immer aus.', ru: 'Мой Bluetooth всегда выключен.', cloze: 'Bluetooth' } },
    { id: 'cyb-a12-06-kopfhoerer', icon: 'Headphones', imageQuery: 'wireless headphones', de: 'Kopfhörer', pos: 'noun', article: 'der', plural: 'Kopfhörer', ru: 'наушники', parts: ['Kopf', 'hörer'], note: 'Обычно во мн. ч.: die Kopfhörer.', example: { de: 'Meine Kopfhörer verbinden sich über Bluetooth.', ru: 'Мои наушники подключаются по Bluetooth.', cloze: 'Kopfhörer' } },
    { id: 'cyb-a12-06-einschalten', icon: 'Power', de: 'einschalten', pos: 'verb', ru: 'включать', forms: 'er schaltet ein · hat eingeschaltet', note: 'Отделяемая приставка: Ich schalte … ein. Разговорно: anmachen.', collocation: { de: 'Bluetooth einschalten', ru: 'включить Bluetooth', accept: ['das Bluetooth einschalten'] }, example: { de: 'Ich schalte Bluetooth nur zu Hause ein.', ru: 'Я включаю Bluetooth только дома.', cloze: 'schalte' } },
    { id: 'cyb-a12-06-ausschalten', icon: 'PowerOff', de: 'ausschalten', pos: 'verb', ru: 'выключать', forms: 'er schaltet aus · hat ausgeschaltet', note: 'Отделяемая приставка: Ich schalte … aus. Разговорно: ausmachen.', collocation: { de: 'das WLAN ausschalten', ru: 'выключить Wi-Fi', accept: ['WLAN ausschalten'] }, example: { de: 'Im Zug schaltet Sara Bluetooth aus.', ru: 'В поезде Сара выключает Bluetooth.', cloze: 'schaltet' } },
    { id: 'cyb-a12-06-ladegeraet', icon: 'PlugZap', imageQuery: 'phone charger', de: 'Ladegerät', pos: 'noun', article: 'das', plural: 'Ladegeräte', ru: 'зарядное устройство', parts: ['Lade', 'gerät'], note: 'laden (заряжать) + das Gerät (прибор).', example: { de: 'Ich habe mein Ladegerät zu Hause vergessen.', ru: 'Я забыл зарядку дома.', cloze: 'Ladegerät' } },
    { id: 'cyb-a12-06-fremd', icon: 'UserX', de: 'fremd', pos: 'adj', ru: 'чужой, незнакомый', collocation: { de: 'ein fremdes Gerät', ru: 'чужое устройство', accept: ['fremde Geräte'] }, example: { de: 'Verbinde dich nicht mit fremden Geräten!', ru: 'Не подключайся к чужим устройствам!', cloze: 'fremden' } },
    { id: 'cyb-a12-06-flugmodus', icon: 'Plane', de: 'Flugmodus', pos: 'noun', article: 'der', ru: 'авиарежим', parts: ['Flug', 'modus'], note: 'der Flug (полёт) + der Modus (режим).', example: { de: 'Im Flugzeug ist mein Handy im Flugmodus.', ru: 'В самолёте мой телефон в авиарежиме.', cloze: 'Flugmodus' } },
    { id: 'cyb-a12-06-reise', icon: 'Luggage', de: 'Reise', pos: 'noun', article: 'die', plural: 'Reisen', ru: 'поездка, путешествие', collocation: { de: 'eine Reise machen', ru: 'совершить поездку, поехать в путешествие' }, example: { de: 'Auf der Reise habe ich wenig Internet.', ru: 'В поездке у меня мало интернета.', cloze: 'Reise' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Am Bahnhof und im Zug',
      de: `Sara ist am Bahnhof in Wien. Sie fährt mit dem Zug nach Salzburg. Sie will unterwegs Musik hören und Nachrichten schreiben.

Am Bahnhof gibt es einen kostenlosen Hotspot. Sara verbindet ihr Handy mit dem Netz. Ihr Freund Emil sagt: „Das WLAN am Bahnhof ist öffentlich. Jeder kann es benutzen. Gib dort kein Passwort ein!“

Im Zug ist das WLAN langsam. Dann kommt ein Tunnel, und Sara hat keinen Empfang. Sie liest ein Buch. Nach dem Tunnel ist das Netz wieder da.`,
      ru: `Сара на вокзале в Вене. Она едет на поезде в Зальцбург. В дороге она хочет слушать музыку и писать сообщения.

На вокзале есть бесплатная точка доступа. Сара подключает свой телефон к сети. Её друг Эмиль говорит: «Wi-Fi на вокзале общедоступный. Им может пользоваться каждый. Не вводи там никакой пароль!»

В поезде Wi-Fi медленный. Потом начинается туннель, и у Сары нет связи. Она читает книгу. После туннеля сеть снова появляется.`,
      gloss: { sara: 'Сара (имя)', emil: 'Эмиль (имя)', wien: 'Вена', salzburg: 'Зальцбург', graz: 'Грац (город в Австрии)', fährt: 'едет', musik: 'музыка', kostenlosen: 'бесплатный', handy: 'мобильный телефон', öffentlich: 'общедоступный, публичный', jeder: 'каждый', gib: 'дай!; (здесь) gib … ein — введи!', ein: 'один; (здесь) часть глагола eingeben — вводить', tunnel: 'туннель', da: 'здесь (ist wieder da — снова есть)', kaputt: 'сломан' },
      questions: [
        { q: 'Wohin fährt Sara?', ru: 'Куда едет Сара?', options: ['Nach Salzburg', 'Nach Wien', 'Nach Graz'], answer: 'Nach Salzburg' },
        { q: 'Was sagt Emil über das WLAN am Bahnhof?', ru: 'Что Эмиль говорит о Wi-Fi на вокзале?', options: ['Es ist öffentlich.', 'Es ist sehr schnell.', 'Es ist nicht kostenlos.'], answer: 'Es ist öffentlich.' },
        { q: 'Warum hat Sara keinen Empfang?', ru: 'Почему у Сары нет связи?', options: ['Der Zug fährt durch einen Tunnel.', 'Ihr Handy ist kaputt.', 'Sie hat kein Passwort.'], answer: 'Der Zug fährt durch einen Tunnel.' },
      ],
      translate: [
        { de: 'Im Zug habe ich keinen Empfang.', ru: 'В поезде у меня нет связи.', wrongRu: ['В поезде у меня хорошая связь.', 'На вокзале у меня нет связи.'] },
        { de: 'Sara verbindet ihr Handy mit dem Hotspot.', ru: 'Сара подключает свой телефон к точке доступа.', wrongRu: ['Сара отключает свой телефон от точки доступа.', 'Сара подключает свой ноутбук к точке доступа.'] },
        { de: 'Das WLAN am Bahnhof ist kostenlos.', ru: 'Wi-Fi на вокзале бесплатный.', wrongRu: ['Wi-Fi в поезде бесплатный.', 'Wi-Fi на вокзале платный.'] },
      ],
    },
    {
      lesson: 1, title: 'Emils Reise',
      de: `Emil macht eine Reise nach Berlin. Er fliegt mit dem Flugzeug. Vor dem Start schaltet er den Flugmodus ein. Dann hört er Musik mit seinen Kopfhörern. Die Kopfhörer brauchen Bluetooth.

Im Hotel ist Emils Akku leer. Er sucht sein Ladegerät, aber es ist zu Hause. Ein fremder Mann sagt: „Ich habe ein Kabel für dich.“ Emil sagt: „Danke, aber nein.“ Ein fremdes Kabel kann gefährlich sein.

Am Abend schaltet Emil Bluetooth aus. Sara hat gesagt: „Unterwegs ist Bluetooth immer aus!“`,
      ru: `Эмиль едет в Берлин. Он летит на самолёте. Перед взлётом он включает авиарежим. Потом он слушает музыку в наушниках. Наушникам нужен Bluetooth.

В отеле у Эмиля садится аккумулятор. Он ищет своё зарядное устройство, но оно дома. Незнакомый мужчина говорит: «У меня есть для тебя кабель». Эмиль отвечает: «Спасибо, но нет». Чужой кабель может быть опасным.

Вечером Эмиль выключает Bluetooth. Сара сказала: «В дороге Bluetooth всегда выключен!»`,
      gloss: {
        reist: 'путешествует, едет', emil: 'Эмиль (имя)', emils: 'Эмиля (чей?)', sara: 'Сара (имя)', berlin: 'Берлин', fliegt: 'летит', flugzeug: 'самолёт', start: 'старт, взлёт', schaltet: 'включает / выключает (смотри на приставку ein/aus в конце)', ein: 'один; (здесь) часть глагола einschalten — включать', aus: 'выключен; (здесь) часть глагола ausschalten — выключать', musik: 'музыка', kopfhörern: 'наушниками (дат. мн. ч.)', hotel: 'отель, гостиница', leer: 'пустой; (об аккумуляторе) разряжен', fremder: 'незнакомый, чужой', fremdes: 'чужое, незнакомое', kabel: 'кабель', danke: 'спасибо', gefährlich: 'опасный', auto: 'машина, автомобиль', verbinde: 'подключай!', geräten: 'устройствам (дат. мн. ч.)', kauft: 'покупает' },
      questions: [
        { q: 'Wie reist Emil nach Berlin?', ru: 'Как Эмиль едет в Берлин?', options: ['Mit dem Flugzeug', 'Mit dem Zug', 'Mit dem Auto'], answer: 'Mit dem Flugzeug' },
        { q: 'Was hat Emil vergessen?', ru: 'Что Эмиль забыл?', options: ['Sein Ladegerät', 'Seine Kopfhörer', 'Sein Handy'], answer: 'Sein Ladegerät' },
        { q: 'Warum nimmt Emil das Kabel nicht?', ru: 'Почему Эмиль не берёт кабель?', options: ['Ein fremdes Kabel kann gefährlich sein.', 'Das Kabel ist kaputt.', 'Er hat schon ein Kabel.'], answer: 'Ein fremdes Kabel kann gefährlich sein.' },
        { q: 'Was macht Emil am Abend?', ru: 'Что Эмиль делает вечером?', options: ['Er schaltet Bluetooth aus.', 'Er schaltet den Flugmodus ein.', 'Er kauft ein Ladegerät.'], answer: 'Er schaltet Bluetooth aus.' },
      ],
      translate: [
        { de: 'Er schaltet den Flugmodus ein.', ru: 'Он включает авиарежим.', wrongRu: ['Он выключает авиарежим.', 'Я включаю авиарежим.'] },
        { de: 'Ich habe mein Ladegerät vergessen.', ru: 'Я забыл своё зарядное устройство.', wrongRu: ['Я нашёл своё зарядное устройство.', 'Я забыл свои наушники.'] },
        { de: 'Verbinde dich nicht mit fremden Geräten.', ru: 'Не подключайся к чужим устройствам.', wrongRu: ['Подключайся к чужим устройствам.', 'Не подключайся к своим устройствам.'] },
      ],
    },
  ],
};
