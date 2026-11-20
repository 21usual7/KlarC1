import type { Module } from '../types.ts';

// A2.2 informatik 05: how the web works — requests and APIs (lesson 0), frontend and backend (lesson 1).

export const module: Module = {
  id: 'informatik-a22-05-webentwicklung', sphere: 'informatik', level: 'A2.2',
  title: 'Webentwicklung', subtitle: 'Запрос, ответ, API, фронтенд и бэкенд: как устроено веб-приложение.',
  words: [
    { id: 'inf-a22-05-anfrage', icon: 'Send', de: 'Anfrage', pos: 'noun', article: 'die', plural: 'Anfragen', ru: 'запрос (к серверу)', note: 'Anfrage — запрос к серверу (HTTP); Abfrage — запрос к базе данных.', collocation: { de: 'eine Anfrage senden', ru: 'отправить запрос', accept: ['die Anfrage senden', 'eine Anfrage schicken'] }, example: { de: 'Der Browser schickt eine Anfrage an den Server.', ru: 'Браузер отправляет запрос на сервер.', cloze: 'Anfrage' } },
    { id: 'inf-a22-05-antwort', icon: 'Reply', de: 'Antwort', pos: 'noun', article: 'die', plural: 'Antworten', ru: 'ответ (сервера)', collocation: { de: 'eine Antwort bekommen', ru: 'получить ответ', accept: ['die Antwort bekommen', 'eine Antwort erhalten'] }, example: { de: 'Der Server schickt die Antwort sofort zurück.', ru: 'Сервер сразу отправляет ответ обратно.', cloze: 'Antwort' } },
    { id: 'inf-a22-05-schnittstelle', icon: 'Unplug', de: 'Schnittstelle', pos: 'noun', article: 'die', plural: 'Schnittstellen', ru: 'интерфейс (API)', parts: ['Schnitt', 'stelle'], note: 'Programmierschnittstelle = API.', collocation: { de: 'eine Schnittstelle nutzen', ru: 'использовать интерфейс (API)', accept: ['die Schnittstelle nutzen', 'eine Schnittstelle verwenden'] }, example: { de: 'Die App nutzt die Schnittstelle des Wetterdienstes.', ru: 'Приложение использует API службы погоды.', cloze: 'Schnittstelle' } },
    { id: 'inf-a22-05-client', icon: 'Laptop', de: 'Client', pos: 'noun', article: 'der', plural: 'Clients', ru: 'клиент (программа, которая обращается к серверу)', imageQuery: 'laptop computer', example: { de: 'Der Client wartet auf die Antwort.', ru: 'Клиент ждёт ответа.', cloze: 'Client' } },
    { id: 'inf-a22-05-statuscode', icon: 'Hash', de: 'Statuscode', pos: 'noun', article: 'der', plural: 'Statuscodes', ru: 'код состояния (HTTP)', parts: ['Status', 'code'], example: { de: 'Der Statuscode zeigt, ob alles geklappt hat.', ru: 'Код состояния показывает, всё ли получилось.', cloze: 'Statuscode' } },
    { id: 'inf-a22-05-verarbeiten', icon: 'Cpu', de: 'verarbeiten', pos: 'verb', ru: 'обрабатывать', forms: 'er verarbeitet · hat verarbeitet', note: 'Приставка ver- неотделяемая; + Akk.', collocation: { de: 'eine Anfrage verarbeiten', ru: 'обработать запрос', accept: ['die Anfrage verarbeiten'] }, example: { de: 'Der Server verarbeitet jede Anfrage sehr schnell.', ru: 'Сервер очень быстро обрабатывает каждый запрос.', cloze: 'verarbeitet' } },
    { id: 'inf-a22-05-webanwendung', icon: 'AppWindow', de: 'Webanwendung', pos: 'noun', article: 'die', plural: 'Webanwendungen', ru: 'веб-приложение', parts: ['Web', 'anwendung'], example: { de: 'Unsere Webanwendung läuft in jedem Browser.', ru: 'Наше веб-приложение работает в любом браузере.', cloze: 'Webanwendung' } },
    { id: 'inf-a22-05-endpunkt', icon: 'Target', de: 'Endpunkt', pos: 'noun', article: 'der', plural: 'Endpunkte', ru: 'эндпоинт, конечная точка (адрес в API)', parts: ['End', 'punkt'], example: { de: 'Jeder Endpunkt liefert andere Daten.', ru: 'Каждый эндпоинт отдаёт другие данные.', cloze: 'Endpunkt' } },

    { id: 'inf-a22-05-frontend', icon: 'PanelsTopLeft', imageQuery: 'web page design', de: 'Frontend', pos: 'noun', article: 'das', plural: 'Frontends', ru: 'фронтенд (клиентская часть)', note: 'Противоположность: das Backend.', example: { de: 'Mira baut das Frontend mit HTML und CSS.', ru: 'Мира делает фронтенд на HTML и CSS.', cloze: 'Frontend' } },
    { id: 'inf-a22-05-backend', icon: 'ServerCog', imageQuery: 'server room', de: 'Backend', pos: 'noun', article: 'das', plural: 'Backends', ru: 'бэкенд (серверная часть)', example: { de: 'Das Backend speichert die Daten in einer Datenbank.', ru: 'Бэкенд сохраняет данные в базе данных.', cloze: 'Backend' } },
    { id: 'inf-a22-05-framework', icon: 'Blocks', de: 'Framework', pos: 'noun', article: 'das', plural: 'Frameworks', ru: 'фреймворк', collocation: { de: 'ein Framework verwenden', ru: 'использовать фреймворк', accept: ['das Framework verwenden', 'ein Framework benutzen'] }, example: { de: 'Wir verwenden ein Framework für das Frontend.', ru: 'Мы используем фреймворк для фронтенда.', cloze: 'Framework' } },
    { id: 'inf-a22-05-darstellen', icon: 'Monitor', de: 'darstellen', pos: 'verb', ru: 'отображать, показывать', forms: 'er stellt dar · hat dargestellt', note: 'Отделяемая приставка: Der Browser stellt die Seite dar.', collocation: { de: 'Daten darstellen', ru: 'отображать данные', accept: ['die Daten darstellen'] }, example: { de: 'Der Browser stellt die Seite richtig dar.', ru: 'Браузер правильно отображает страницу.', cloze: 'stellt' } },
    { id: 'inf-a22-05-abrufen', icon: 'CloudDownload', de: 'abrufen', pos: 'verb', ru: 'запрашивать, получать (данные)', forms: 'er ruft ab · hat abgerufen', note: 'Отделяемая приставка; + Akk.', collocation: { de: 'Daten abrufen', ru: 'получить данные', accept: ['die Daten abrufen'] }, example: { de: 'Die App hat die Daten vom Server abgerufen.', ru: 'Приложение получило данные с сервера.', cloze: 'abgerufen' } },
    { id: 'inf-a22-05-format', icon: 'Braces', de: 'Format', pos: 'noun', article: 'das', plural: 'Formate', ru: 'формат', example: { de: 'Der Server schickt die Daten in einem einfachen Format.', ru: 'Сервер отправляет данные в простом формате.', cloze: 'Format' } },
    { id: 'inf-a22-05-ladezeit', icon: 'Timer', imageQuery: 'loading hourglass', de: 'Ladezeit', pos: 'noun', article: 'die', plural: 'Ladezeiten', ru: 'время загрузки', parts: ['Lade', 'zeit'], collocation: { de: 'die Ladezeit verkürzen', ru: 'сократить время загрузки' }, example: { de: 'Große Bilder erhöhen die Ladezeit der Seite.', ru: 'Большие картинки увеличивают время загрузки страницы.', cloze: 'Ladezeit' } },
    { id: 'inf-a22-05-reagieren', icon: 'MousePointerClick', de: 'reagieren', pos: 'verb', ru: 'реагировать', forms: 'er reagiert · hat reagiert', note: 'reagieren auf + Akk.', example: { de: 'Die Seite reagiert nicht auf meinen Klick.', ru: 'Страница не реагирует на мой клик.', cloze: 'reagiert' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wie kommt die Seite auf den Bildschirm?',
      de: `Jonas studiert Informatik an der TU Wien und macht ein Praktikum bei einem kleinen Start-up. Die Firma entwickelt eine Webanwendung für Leihräder in Wien. Am ersten Tag erklärte ihm seine Kollegin Mira, wie das Web funktioniert.

„Wenn du die Seite öffnest, schickt der Client eine Anfrage an den Server“, sagte sie. „Die Anfrage wird vom Server verarbeitet, und dann kommt eine Antwort zurück. In der Antwort steht immer ein Statuscode. Wenn etwas fehlt, sieht man den bekannten Fehler ‚Nicht gefunden‘.“

Danach zeigte Mira ihm die Schnittstelle der Firma. Sie hat viele Endpunkte: Ein Endpunkt liefert die freien Räder, ein anderer die Preise. Jonas durfte selbst eine Anfrage schreiben. Zuerst war er nervös, aber die Antwort kam sofort.`,
      ru: `Йонас изучает информатику в Венском техническом университете и проходит практику в небольшом стартапе. Фирма разрабатывает веб-приложение для прокатных велосипедов в Вене. В первый день его коллега Мира объяснила ему, как работает веб.

«Когда ты открываешь страницу, клиент отправляет запрос на сервер, — сказала она. — Запрос обрабатывается сервером, и потом приходит ответ. В ответе всегда есть код состояния. Если чего-то нет, видишь известную ошибку „Не найдено“».

Потом Мира показала ему API фирмы. У него много эндпоинтов: один эндпоинт отдаёт свободные велосипеды, другой — цены. Йонасу разрешили самому написать запрос. Сначала он нервничал, но ответ пришёл сразу.`,
      gloss: {
        jonas: 'Йонас (имя)', mira: 'Мира (имя)', informatik: 'информатика', tu: 'TU — технический университет', wien: 'Вена', praktikum: 'практика, стажировка',
        kleinen: 'небольшом', 'start-up': 'стартап', firma: 'фирма', entwickelt: 'разрабатывает', leihräder: 'прокатные велосипеды',
        ersten: 'первый', tag: 'день', erklärte: 'объяснила', kollegin: 'коллега (женщина)', web: 'веб, интернет', funktioniert: 'работает, функционирует',
        seite: 'страница', öffnest: 'открываешь', server: 'сервер', sagte: 'сказала', wird: 'становится; (Passiv) обрабатывается', vom: 'от, (Passiv) кем: vom Server — сервером', zurück: 'обратно',
        steht: 'стоит, написано', immer: 'всегда', fehlt: 'отсутствует, не хватает', sieht: 'видит', man: '(безличное) видишь, видят', bekannten: 'известную', fehler: 'ошибку', nicht: 'не', gefunden: 'найдено',
        danach: 'после этого', zeigte: 'показала', viele: 'много', liefert: 'отдаёт, поставляет', freien: 'свободные', räder: 'велосипеды', anderer: 'другой', preise: 'цены',
        durfte: 'разрешили (ему), мог', selbst: 'сам', schreiben: 'написать', zuerst: 'сначала', nervös: 'нервный', kam: 'пришёл', sofort: 'сразу',
        wo: 'где', macht: 'делает', großen: 'большой', bank: 'банк', namen: 'имена', kollegen: 'коллег', wie: 'как', fühlte: 'чувствовал', müde: 'усталый', wütend: 'злой', was: 'что', welche: 'какие',
      },
      questions: [
        { q: 'Wo macht Jonas ein Praktikum?', ru: 'Где Йонас проходит практику?', options: ['Bei einem kleinen Start-up', 'An der TU Wien', 'Bei einer großen Bank'], answer: 'Bei einem kleinen Start-up' },
        { q: 'Was steht immer in der Antwort?', ru: 'Что всегда есть в ответе?', options: ['Ein Statuscode', 'Ein Endpunkt', 'Die Preise'], answer: 'Ein Statuscode' },
        { q: 'Was liefert ein Endpunkt der Schnittstelle?', ru: 'Что отдаёт один из эндпоинтов API?', options: ['Die freien Räder', 'Die Namen der Kollegen', 'Den Statuscode der Firma'], answer: 'Die freien Räder' },
        { q: 'Wie fühlte sich Jonas zuerst?', ru: 'Как Йонас чувствовал себя сначала?', options: ['Er war nervös.', 'Er war müde.', 'Er war wütend.'], answer: 'Er war nervös.' },
      ],
      translate: [
        { de: 'Der Client schickt eine Anfrage an den Server.', ru: 'Клиент отправляет запрос на сервер.', wrongRu: ['Сервер отправляет запрос клиенту.', 'Клиент отправляет ответ на сервер.'] },
        { de: 'Der Server verarbeitet die Anfrage.', ru: 'Сервер обрабатывает запрос.', wrongRu: ['Сервер отклоняет запрос.', 'Сервер обработал запрос.'] },
        { de: 'In der Antwort steht ein Statuscode.', ru: 'В ответе есть код состояния.', wrongRu: ['В запросе есть код состояния.', 'В ответе нет кода состояния.'] },
      ],
    },
    {
      lesson: 1, title: 'Frontend und Backend',
      de: `Nach zwei Wochen bekam Jonas seine erste eigene Aufgabe. Die Ladezeit der Fahrradseite war zu lang, und manchmal reagierte die Seite gar nicht.

Mira arbeitet im Backend, ihr Kollege Daniel ist für das Frontend verantwortlich. Das Frontend wurde mit einem modernen Framework gebaut. Es ruft die Daten über die Schnittstelle ab und stellt sie als Karte dar.

Jonas fand das Problem schnell: Das Frontend rief bei jedem Klick alle Räder in Wien ab, nicht nur die Räder in der Nähe. Außerdem schickte das Backend die Daten in einem sehr großen Format. Gemeinsam mit Mira änderte Jonas beide Teile. Danach konnte man die Seite in einer Sekunde laden, und die Chefin war zufrieden.`,
      ru: `Через две недели Йонас получил своё первое собственное задание. Время загрузки страницы с велосипедами было слишком долгим, а иногда страница вообще не реагировала.

Мира работает над бэкендом, её коллега Даниэль отвечает за фронтенд. Фронтенд был сделан на современном фреймворке. Он получает данные через API и отображает их в виде карты.

Йонас быстро нашёл проблему: при каждом клике фронтенд запрашивал все велосипеды в Вене, а не только велосипеды поблизости. Кроме того, бэкенд отправлял данные в очень большом формате. Вместе с Мирой Йонас изменил обе части. После этого страница загружалась за одну секунду, и начальница была довольна.`,
      gloss: {
        reagierte: 'реагировал(а), отреагировал(а)',
        jonas: 'Йонас (имя)', mira: 'Мира (имя)', daniel: 'Даниэль (имя)', wien: 'Вена', zwei: 'две', wochen: 'недели', bekam: 'получил', erste: 'первое', eigene: 'собственное', aufgabe: 'задание',
        fahrradseite: 'страница с велосипедами', zu: 'слишком', lang: 'долгий, длинный', manchmal: 'иногда', gar: 'вообще (gar nicht — вообще не)', seite: 'страница',
        arbeitet: 'работает', kollege: 'коллега', verantwortlich: 'ответственный (für — за)', wurde: '(Passiv) был', modernen: 'современном', gebaut: 'построен, сделан',
        ruft: 'запрашивает (ruft ab)', über: 'через', karte: 'карта', fand: 'нашёл', problem: 'проблема', schnell: 'быстро', rief: 'запрашивал (rief ab)', jedem: 'каждом', klick: 'клик',
        räder: 'велосипеды', nähe: 'близость (in der Nähe — поблизости)', außerdem: 'кроме того', schickte: 'отправлял', großen: 'большом', gemeinsam: 'вместе', änderte: 'изменил',
        beide: 'обе', teile: 'части', danach: 'после этого', konnte: 'мог(ла)', man: '(безличное) можно', sekunde: 'секунда', laden: 'загружать', chefin: 'начальница', zufrieden: 'довольна',
        preise: 'цены', hoch: 'высокий', waren: 'были', alt: 'старый', welche: 'какие', nur: 'только', kunden: 'клиентов', lange: 'долго', dauerte: 'длилось',
        zehn: 'десять', sekunden: 'секунд', minute: 'минута', meinen: 'мой', bei: 'при', abrufen: 'запрашивать',
      },
      questions: [
        { q: 'Was war das Problem der Fahrradseite?', ru: 'В чём была проблема страницы с велосипедами?', options: ['Die Ladezeit war zu lang.', 'Die Preise waren zu hoch.', 'Das Framework war zu alt.'], answer: 'Die Ladezeit war zu lang.' },
        { q: 'Wer ist für das Frontend verantwortlich?', ru: 'Кто отвечает за фронтенд?', options: ['Daniel', 'Mira', 'Jonas'], answer: 'Daniel' },
        { q: 'Welche Daten rief das Frontend bei jedem Klick ab?', ru: 'Какие данные запрашивал фронтенд при каждом клике?', options: ['Alle Räder in Wien', 'Nur die Räder in der Nähe', 'Die Daten der Kunden'], answer: 'Alle Räder in Wien' },
        { q: 'Wie lange dauerte das Laden danach?', ru: 'Сколько длилась загрузка после этого?', options: ['Eine Sekunde', 'Zehn Sekunden', 'Eine Minute'], answer: 'Eine Sekunde' },
      ],
      translate: [
        { de: 'Das Frontend stellt die Daten als Karte dar.', ru: 'Фронтенд отображает данные в виде карты.', wrongRu: ['Бэкенд отображает данные в виде карты.', 'Фронтенд сохраняет данные в виде карты.'] },
        { de: 'Die Ladezeit der Seite war zu lang.', ru: 'Время загрузки страницы было слишком долгим.', wrongRu: ['Время загрузки страницы было слишком коротким.', 'Время загрузки страницы слишком долгое.'] },
        { de: 'Die Seite reagiert nicht auf meinen Klick.', ru: 'Страница не реагирует на мой клик.', wrongRu: ['Страница реагирует на мой клик.', 'Страница не реагирует на его клик.'] },
      ],
    },
  ],
};
