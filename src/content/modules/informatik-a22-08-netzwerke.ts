import type { Module } from '../types.ts';

// A2.2 informatik 08: packets and protocols (lesson 0), switching and reliable transfer in the lab (lesson 1).

export const module: Module = {
  id: 'informatik-a22-08-netzwerke', sphere: 'informatik', level: 'A2.2',
  title: 'Netzwerke vertieft', subtitle: 'Пакет, протокол, порт, узел: как данные путешествуют по сети — язык курса «Компьютерные сети».',
  words: [
    { id: 'inf-a22-08-paket', icon: 'Package', imageQuery: 'parcel package', de: 'Paket', pos: 'noun', article: 'das', plural: 'Pakete', ru: 'пакет (данных)', note: 'Das Datenpaket — пакет данных.', collocation: { de: 'ein Paket senden', ru: 'отправить пакет', accept: ['das Paket senden', 'ein Paket schicken'] }, example: { de: 'Jedes Paket findet seinen eigenen Weg.', ru: 'Каждый пакет находит свой собственный путь.', cloze: 'Paket' } },
    { id: 'inf-a22-08-uebertragen', icon: 'Send', de: 'übertragen', pos: 'verb', ru: 'передавать (данные)', forms: 'er überträgt · hat übertragen', note: 'Приставка über- здесь неотделяемая: er überträgt, hat übertragen. + Akk.', collocation: { de: 'Daten übertragen', ru: 'передавать данные', accept: ['die Daten übertragen'] }, example: { de: 'Das Netz überträgt die Daten sehr schnell.', ru: 'Сеть передаёт данные очень быстро.', cloze: 'überträgt' } },
    { id: 'inf-a22-08-protokoll', icon: 'ScrollText', de: 'Protokoll', pos: 'noun', article: 'das', plural: 'Protokolle', ru: 'протокол', note: 'В сетях — правила обмена данными (TCP, HTTP); в быту — протокол собрания.', example: { de: 'HTTP ist ein Protokoll für das Web.', ru: 'HTTP — протокол для веба.', cloze: 'Protokoll' } },
    { id: 'inf-a22-08-ip-adresse', icon: 'MapPin', de: 'IP-Adresse', pos: 'noun', article: 'die', plural: 'IP-Adressen', ru: 'IP-адрес', parts: ['IP-', 'Adresse'], collocation: { de: 'die IP-Adresse herausfinden', ru: 'узнать IP-адрес', accept: ['eine IP-Adresse herausfinden'] }, example: { de: 'Jedes Gerät im Netz hat eine IP-Adresse.', ru: 'У каждого устройства в сети есть IP-адрес.', cloze: 'IP-Adresse' } },
    { id: 'inf-a22-08-empfaenger', icon: 'Inbox', imageQuery: 'mailbox letter', de: 'Empfänger', pos: 'noun', article: 'der', plural: 'Empfänger', ru: 'получатель', note: 'Пара: der Absender ↔ der Empfänger (отправитель ↔ получатель).', example: { de: 'Der Empfänger bekommt alle Pakete.', ru: 'Получатель получает все пакеты.', cloze: 'Empfänger' } },
    { id: 'inf-a22-08-schicht', icon: 'Layers', imageQuery: 'OSI model diagram', de: 'Schicht', pos: 'noun', article: 'die', plural: 'Schichten', ru: 'уровень, слой (сетевой модели)', note: 'Das Schichtenmodell — модель уровней (например, OSI).', example: { de: 'Jede Schicht hat eine eigene Aufgabe.', ru: 'У каждого уровня своя задача.', cloze: 'Schicht' } },
    { id: 'inf-a22-08-port', icon: 'Plug', imageQuery: 'network switch ports', de: 'Port', pos: 'noun', article: 'der', plural: 'Ports', ru: 'порт', note: 'Номер порта показывает, какой программе предназначены данные.', collocation: { de: 'einen Port öffnen', ru: 'открыть порт', accept: ['den Port öffnen'] }, example: { de: 'Der Webserver wartet auf diesem Port.', ru: 'Веб-сервер ждёт на этом порту.', cloze: 'Port' } },
    { id: 'inf-a22-08-pruefsumme', icon: 'Hash', de: 'Prüfsumme', pos: 'noun', article: 'die', plural: 'Prüfsummen', ru: 'контрольная сумма', parts: ['Prüf', 'summe'], note: 'prüfen (проверять) + die Summe (сумма).', collocation: { de: 'die Prüfsumme berechnen', ru: 'вычислить контрольную сумму', accept: ['eine Prüfsumme berechnen'] }, example: { de: 'Die Prüfsumme zeigt, ob Daten beschädigt sind.', ru: 'Контрольная сумма показывает, повреждены ли данные.', cloze: 'Prüfsumme' } },

    { id: 'inf-a22-08-weiterleitung', icon: 'Forward', imageQuery: 'road sign detour', de: 'Weiterleitung', pos: 'noun', article: 'die', plural: 'Weiterleitungen', ru: 'пересылка, переадресация', example: { de: 'Der Router übernimmt die Weiterleitung der Daten.', ru: 'Маршрутизатор берёт на себя пересылку данных.', cloze: 'Weiterleitung' } },
    { id: 'inf-a22-08-weiterleiten', icon: 'Forward', de: 'weiterleiten', pos: 'verb', ru: 'пересылать, передавать дальше', forms: 'er leitet weiter · hat weitergeleitet', note: 'Отделяемая приставка: der Router leitet das Paket weiter.', collocation: { de: 'ein Paket weiterleiten', ru: 'переслать пакет', accept: ['das Paket weiterleiten'] }, example: { de: 'Der Router leitet das Paket an den Server weiter.', ru: 'Маршрутизатор пересылает пакет на сервер.', cloze: 'leitet' } },
    { id: 'inf-a22-08-verzoegerung', icon: 'Hourglass', imageQuery: 'delayed train board', de: 'Verzögerung', pos: 'noun', article: 'die', plural: 'Verzögerungen', ru: 'задержка', note: 'В сетях также говорят die Latenz.', example: { de: 'Bei Videoanrufen stört eine große Verzögerung.', ru: 'При видеозвонках мешает большая задержка.', cloze: 'Verzögerung' } },
    { id: 'inf-a22-08-switch', icon: 'EthernetPort', imageQuery: 'network switch', de: 'Switch', pos: 'noun', article: 'der', plural: 'Switches', ru: 'коммутатор, свитч', note: 'Из английского; в немецком мужской род: der Switch.', example: { de: 'Alle Rechner im Labor hängen an einem Switch.', ru: 'Все компьютеры в лаборатории подключены к одному коммутатору.', cloze: 'Switch' } },
    { id: 'inf-a22-08-topologie', icon: 'Share2', imageQuery: 'network topology diagram', de: 'Topologie', pos: 'noun', article: 'die', plural: 'Topologien', ru: 'топология (сети)', example: { de: 'Die Topologie zeigt, wie die Knoten verbunden sind.', ru: 'Топология показывает, как соединены узлы.', cloze: 'Topologie' } },
    { id: 'inf-a22-08-zuverlaessig', icon: 'ShieldCheck', de: 'zuverlässig', pos: 'adj', ru: 'надёжный', collocation: { de: 'eine zuverlässige Verbindung', ru: 'надёжное соединение' }, example: { de: 'TCP gilt als zuverlässiges Protokoll.', ru: 'TCP считается надёжным протоколом.', cloze: 'zuverlässiges' } },
    { id: 'inf-a22-08-bestaetigung', icon: 'CheckCheck', de: 'Bestätigung', pos: 'noun', article: 'die', plural: 'Bestätigungen', ru: 'подтверждение', note: 'bestätigen — подтверждать; в TCP это ACK.', example: { de: 'Der Server schickt eine Bestätigung zurück.', ru: 'Сервер отправляет подтверждение обратно.', cloze: 'Bestätigung' } },
    { id: 'inf-a22-08-verloren-gehen', icon: 'PackageX', de: 'verloren gehen', pos: 'phrase', ru: 'теряться, пропадать', forms: 'es geht verloren · ist verloren gegangen', note: 'Perfekt с sein: die Pakete sind verloren gegangen.', example: { de: 'Im WLAN gehen manchmal Pakete verloren.', ru: 'В Wi-Fi иногда теряются пакеты.', cloze: 'verloren' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wie reist eine Nachricht?',
      de: `Im Kurs „Rechnernetze“ an der TU Wien sollte Jonas letzte Woche eine Frage beantworten: Wie kommt eine Nachricht von seinem Laptop zu einem Server in Graz?

Die Professorin erklärte es so: Die Nachricht wird nicht als Ganzes übertragen. Sie wird in viele kleine Pakete geteilt. Jedes Paket hat einen Kopf mit der IP-Adresse des Absenders und des Empfängers. Dazu kommt ein Port, damit der Empfänger weiß, welches Programm die Daten bekommt.

Ein Netzwerk arbeitet in Schichten, und jede Schicht hat ihr eigenes Protokoll. Die Prüfsumme zeigt, ob ein Paket unterwegs beschädigt wurde. Jonas fand das am Anfang schwierig, aber nach der Übung war es ihm klar.`,
      ru: `На курсе «Компьютерные сети» в Венском техническом университете Йонасу на прошлой неделе нужно было ответить на вопрос: как сообщение попадает с его ноутбука на сервер в Граце?

Профессор объяснила это так: сообщение передаётся не целиком. Его делят на много маленьких пакетов. У каждого пакета есть заголовок с IP-адресом отправителя и получателя. К этому добавляется порт, чтобы получатель знал, какая программа получит данные.

Сеть работает по уровням, и у каждого уровня свой протокол. Контрольная сумма показывает, был ли пакет повреждён по дороге. Сначала Йонасу это показалось сложным, но после практического занятия ему всё стало ясно.`,
      gloss: {
        'empfängers': 'получателя',
        kurs: 'курс', rechnernetze: 'компьютерные сети', tu: 'TU — технический университет', wien: 'Вена', sollte: 'должен был, нужно было', jonas: 'Йонас (имя)', letzte: 'прошлой', frage: 'вопрос',
        beantworten: 'ответить на', nachricht: 'сообщение', seinem: 'его', laptop: 'ноутбук', server: 'сервер', graz: 'Грац (город в Австрии)', professorin: 'профессор (женщина)', erklärte: 'объяснила',
        ganzes: 'целое (als Ganzes — целиком)', viele: 'много', kleine: 'маленьких', geteilt: 'разделено, делят', kopf: 'голова; заголовок (пакета)', absenders: 'отправителя', dazu: 'к этому', welches: 'какая (программа)',
        programm: 'программа', daten: 'данные', netzwerk: 'сеть', eigenes: 'собственный, свой', unterwegs: 'по дороге', beschädigt: 'повреждён', fand: 'находил, считал', anfang: 'начало', schwierig: 'сложный, трудный',
        übung: 'практическое занятие, упражнение', klar: 'ясно', wohin: 'куда', geht: 'идёт', zeigt: 'показывает', ganze: 'целое, всё', groß: 'большой', wofür: 'для чего', name: 'имя', handy: 'мобильный телефон', schnell: 'быстро',
        teilt: 'делит', geschickt: 'отправлено', werden: 'становятся; (пассив)', wird: '(пассив) -ся', eigenen: 'собственный', jede: 'каждая', jedes: 'каждый', stimmt: 'верно',
      },
      questions: [
        { q: 'Wohin geht die Nachricht von Jonas?', ru: 'Куда идёт сообщение Йонаса?', options: ['Zu einem Server in Graz', 'Zu einem Server in Wien', 'Zu seinem Handy'], answer: 'Zu einem Server in Graz' },
        { q: 'Was steht im Kopf von jedem Paket?', ru: 'Что написано в заголовке каждого пакета?', options: ['Die IP-Adresse des Absenders und des Empfängers', 'Die ganze Nachricht', 'Der Name der Professorin'], answer: 'Die IP-Adresse des Absenders und des Empfängers' },
        { q: 'Wofür braucht man den Port?', ru: 'Для чего нужен порт?', options: ['Der Empfänger weiß, welches Programm die Daten bekommt.', 'Der Empfänger weiß, wie groß das Paket ist.', 'Die Daten werden schneller übertragen.'], answer: 'Der Empfänger weiß, welches Programm die Daten bekommt.' },
        { q: 'Was zeigt die Prüfsumme?', ru: 'Что показывает контрольная сумма?', options: ['Ob ein Paket unterwegs beschädigt wurde', 'Welche Schicht das Paket geschickt hat', 'Wie viele Pakete die Nachricht hat'], answer: 'Ob ein Paket unterwegs beschädigt wurde' },
      ],
      translate: [
        { de: 'Die Nachricht wird in Pakete geteilt.', ru: 'Сообщение делится на пакеты.', wrongRu: ['Сообщение не делится на пакеты.', 'Файл делится на пакеты.'] },
        { de: 'Jede Schicht hat ihr eigenes Protokoll.', ru: 'У каждого уровня свой протокол.', wrongRu: ['У каждого пакета свой протокол.', 'У всех уровней один протокол.'] },
        { de: 'Die Daten werden schnell übertragen.', ru: 'Данные передаются быстро.', wrongRu: ['Данные передаются медленно.', 'Данные быстро сохраняются.', 'Данные были быстро переданы.'] },
      ],
    },
    {
      lesson: 1, title: 'Im Netzwerklabor',
      de: `Am Donnerstag waren Jonas und seine Kollegin Mira im Netzwerklabor. Dort stehen mehrere Switches, und jeder Computer ist ein Knoten im Netz. Zuerst mussten sie die Topologie zeichnen: Welche Knoten sind direkt verbunden?

Dann schickte Mira Pakete an einen Rechner am anderen Ende. Jeder Switch leitet die Pakete weiter, bis sie am Ziel sind. Die Verzögerung war zuerst sehr klein. Als Jonas ein Kabel herauszog, gingen einige Pakete verloren.

Der Tutor erklärte: „Das Protokoll TCP ist zuverlässig. Der Empfänger schickt für jedes Paket eine Bestätigung. Fehlt die Bestätigung, wird das Paket noch einmal gesendet.“ Bei UDP gibt es keine Bestätigung, aber dafür ist es schneller.`,
      ru: `В четверг Йонас и его однокурсница Мира были в сетевой лаборатории. Там стоят несколько коммутаторов, и каждый компьютер — это узел в сети. Сначала им нужно было нарисовать топологию: какие узлы соединены напрямую?

Потом Мира отправила пакеты на компьютер на другом конце. Каждый коммутатор передаёт пакеты дальше, пока они не дойдут до цели. Задержка сначала была очень маленькой. Когда Йонас выдернул кабель, некоторые пакеты потерялись.

Тьютор объяснил: «Протокол TCP надёжный. Получатель отправляет подтверждение для каждого пакета. Если подтверждения нет, пакет отправляется ещё раз». В UDP подтверждений нет, но зато он быстрее.`,
      gloss: {
        herausziehen: 'вытащить, выдернуть',
        donnerstag: 'четверг', jonas: 'Йонас (имя)', kollegin: 'коллега, однокурсница', mira: 'Мира (имя)', netzwerklabor: 'сетевая лаборатория', mehrere: 'несколько', switches: 'коммутаторы', computer: 'компьютер',
        netz: 'сеть', mussten: 'должны были, нужно было', zeichnen: 'рисовать, чертить', direkt: 'напрямую', verbunden: 'соединены', schickte: 'отправила', rechner: 'компьютер', anderen: 'другом',
        ziel: 'цель, место назначения', klein: 'маленькой', kabel: 'кабель', herauszog: 'выдернул', gingen: 'шли (verloren gingen — потерялись)', einige: 'некоторые', tutor: 'тьютор, ассистент на практике',
        tcp: 'TCP (сетевой протокол)', udp: 'UDP (сетевой протокол)', fehlt: 'отсутствует, нет', einmal: 'раз (noch einmal — ещё раз)', gesendet: 'отправлен', dafür: 'зато', schneller: 'быстрее',
        passierte: 'произошло', wurde: 'стала', kleiner: 'меньше', zwei: 'два', sind: 'являются; (Perfekt) -', gegangen: 'ушли (verloren gegangen — потерялись)', langsam: 'медленный', machen: 'делать', pakete: 'пакеты',
      },
      questions: [
        { q: 'Was mussten Jonas und Mira zuerst machen?', ru: 'Что Йонасу и Мире нужно было сделать сначала?', options: ['Die Topologie zeichnen', 'Ein Kabel herausziehen', 'Pakete an einen Rechner schicken'], answer: 'Die Topologie zeichnen' },
        { q: 'Was passierte, als Jonas ein Kabel herauszog?', ru: 'Что произошло, когда Йонас выдернул кабель?', options: ['Einige Pakete gingen verloren.', 'Die Verzögerung wurde kleiner.', 'Der Switch schickte eine Bestätigung.'], answer: 'Einige Pakete gingen verloren.' },
        { q: 'Warum ist TCP zuverlässig?', ru: 'Почему TCP надёжный?', options: ['Der Empfänger schickt für jedes Paket eine Bestätigung.', 'TCP ist schneller als UDP.', 'Jeder Knoten hat zwei Kabel.'], answer: 'Der Empfänger schickt für jedes Paket eine Bestätigung.' },
      ],
      translate: [
        { de: 'Der Switch leitet die Pakete weiter.', ru: 'Коммутатор передаёт пакеты дальше.', wrongRu: ['Коммутатор удаляет пакеты.', 'Коммутатор передавал пакеты дальше.'] },
        { de: 'Einige Pakete sind verloren gegangen.', ru: 'Некоторые пакеты потерялись.', wrongRu: ['Все пакеты потерялись.', 'Некоторые пакеты дошли.'] },
        { de: 'Das Protokoll ist zuverlässig, aber langsam.', ru: 'Протокол надёжный, но медленный.', wrongRu: ['Протокол ненадёжный, но быстрый.', 'Протокол надёжный и быстрый.'] },
      ],
    },
  ],
};
