import type { Module } from '../types.ts';

// A2.1 informatik 05: surfing the web (lesson 0) and uploading / publishing (lesson 1).
// Browser, Webseite, Link, Suchmaschine, Lesezeichen, Tab belong to informatik A1.2 02, so they are not repeated here.

export const module: Module = {
  id: 'informatik-a21-05-web', sphere: 'informatik', level: 'A2.1',
  title: 'Im Web', subtitle: 'Адресная строка, история, реклама, формы и загрузка файлов.',
  words: [
    { id: 'inf-a21-05-webadresse', icon: 'Link', de: 'Webadresse', pos: 'noun', article: 'die', plural: 'Webadressen', ru: 'адрес сайта, веб-адрес', parts: ['Web', 'adresse'], note: 'Синоним: die URL.', collocation: { de: 'die Webadresse eingeben', ru: 'ввести адрес сайта', accept: ['eine Webadresse eingeben'] }, example: { de: 'Gib die Webadresse oben im Browser ein.', ru: 'Введи адрес сайта вверху в браузере.', cloze: 'Webadresse' } },
    { id: 'inf-a21-05-aufrufen', icon: 'MousePointerClick', de: 'aufrufen', pos: 'verb', ru: 'открывать (страницу), вызывать', forms: 'er ruft auf · hat aufgerufen', note: 'Отделяемая приставка; + Akk: eine Seite aufrufen.', collocation: { de: 'eine Seite aufrufen', ru: 'открыть страницу', accept: ['die Seite aufrufen', 'eine Webseite aufrufen'] }, example: { de: 'Ich rufe die Seite der Uni auf.', ru: 'Я открываю страницу университета.', cloze: 'rufe' } },
    { id: 'inf-a21-05-startseite', icon: 'House', de: 'Startseite', pos: 'noun', article: 'die', plural: 'Startseiten', ru: 'главная страница (сайта)', parts: ['Start', 'seite'], collocation: { de: 'auf der Startseite', ru: 'на главной странице' }, example: { de: 'Die Termine stehen auf der Startseite.', ru: 'Даты указаны на главной странице.', cloze: 'Startseite' } },
    { id: 'inf-a21-05-adressleiste', icon: 'PanelTop', imageQuery: 'web browser address bar', de: 'Adressleiste', pos: 'noun', article: 'die', plural: 'Adressleisten', ru: 'адресная строка (браузера)', parts: ['Adress', 'leiste'], note: 'Die Leiste — панель, полоса.', collocation: { de: 'in der Adressleiste', ru: 'в адресной строке' }, example: { de: 'Schreib die Webadresse in die Adressleiste.', ru: 'Напиши адрес сайта в адресной строке.', cloze: 'Adressleiste' } },
    { id: 'inf-a21-05-werbung', icon: 'Megaphone', de: 'Werbung', pos: 'noun', article: 'die', plural: 'Werbungen', ru: 'реклама', note: 'В значении «реклама вообще» обычно без мн. ч.', collocation: { de: 'Werbung blockieren', ru: 'блокировать рекламу' }, example: { de: 'Auf dieser Seite ist zu viel Werbung.', ru: 'На этой странице слишком много рекламы.', cloze: 'Werbung' } },
    { id: 'inf-a21-05-suchergebnis', icon: 'FileSearch', de: 'Suchergebnis', pos: 'noun', article: 'das', plural: 'Suchergebnisse', ru: 'результат поиска', parts: ['Such', 'ergebnis'], example: { de: 'Das erste Suchergebnis passt nicht zur Frage.', ru: 'Первый результат поиска не подходит к вопросу.', cloze: 'Suchergebnis' } },
    { id: 'inf-a21-05-verlauf', icon: 'History', de: 'Verlauf', pos: 'noun', article: 'der', ru: 'история (браузера)', note: 'Здесь без мн. ч.; в общем значении «ход, течение» — die Verläufe.', collocation: { de: 'den Verlauf löschen', ru: 'очистить историю' }, example: { de: 'Im Verlauf findest du alle besuchten Seiten.', ru: 'В истории ты найдёшь все посещённые страницы.', cloze: 'Verlauf' } },
    { id: 'inf-a21-05-scrollen', icon: 'ChevronsDown', de: 'scrollen', pos: 'verb', ru: 'прокручивать, листать (экран)', forms: 'er scrollt · hat gescrollt', collocation: { de: 'nach unten scrollen', ru: 'прокрутить вниз' }, example: { de: 'Scroll nach unten, dort ist das Formular.', ru: 'Прокрути вниз, там форма.', cloze: 'Scroll' } },

    { id: 'inf-a21-05-hochladen', icon: 'Upload', de: 'hochladen', pos: 'verb', ru: 'загружать (на сервер, на сайт)', forms: 'er lädt hoch · hat hochgeladen', note: 'Отделяемая приставка. Противоположность: herunterladen.', collocation: { de: 'eine Datei hochladen', ru: 'загрузить файл', accept: ['die Datei hochladen'] }, example: { de: 'Ich lade das Foto auf die Seite hoch.', ru: 'Я загружаю фото на сайт.', cloze: 'lade' } },
    { id: 'inf-a21-05-formular', icon: 'ClipboardList', imageQuery: 'online registration form', de: 'Formular', pos: 'noun', article: 'das', plural: 'Formulare', ru: 'форма, бланк, анкета', collocation: { de: 'ein Formular ausfüllen', ru: 'заполнить форму', accept: ['das Formular ausfüllen'] }, example: { de: 'Das Formular hat leider sehr viele Felder.', ru: 'В форме, к сожалению, очень много полей.', cloze: 'Formular' } },
    { id: 'inf-a21-05-ausfuellen', icon: 'PenLine', de: 'ausfüllen', pos: 'verb', ru: 'заполнять (форму, анкету)', forms: 'er füllt aus · hat ausgefüllt', note: 'Отделяемая приставка; + Akk.', example: { de: 'Hast du das Formular schon ausgefüllt?', ru: 'Ты уже заполнил форму?', cloze: 'ausgefüllt' } },
    { id: 'inf-a21-05-pflichtfeld', icon: 'Asterisk', de: 'Pflichtfeld', pos: 'noun', article: 'das', plural: 'Pflichtfelder', ru: 'обязательное поле', parts: ['Pflicht', 'feld'], note: 'Die Pflicht — обязанность. Обычно помечено звёздочкой.', example: { de: 'Die E-Mail-Adresse ist ein Pflichtfeld.', ru: 'Адрес электронной почты — обязательное поле.', cloze: 'Pflichtfeld' } },
    { id: 'inf-a21-05-dateigroesse', icon: 'Weight', de: 'Dateigröße', pos: 'noun', article: 'die', plural: 'Dateigrößen', ru: 'размер файла', parts: ['Datei', 'größe'], example: { de: 'Die Dateigröße ist für den Upload zu groß.', ru: 'Размер файла слишком большой для загрузки.', cloze: 'Dateigröße' } },
    { id: 'inf-a21-05-inhalt', icon: 'Newspaper', de: 'Inhalt', pos: 'noun', article: 'der', plural: 'Inhalte', ru: 'содержание, контент', collocation: { de: 'neue Inhalte', ru: 'новый контент' }, example: { de: 'Der Inhalt der Seite ist leider alt.', ru: 'Содержание страницы, к сожалению, устарело.', cloze: 'Inhalt' } },
    { id: 'inf-a21-05-veroeffentlichen', icon: 'Send', de: 'veröffentlichen', pos: 'verb', ru: 'публиковать', forms: 'er veröffentlicht · hat veröffentlicht', note: 'Приставка ver- неотделяемая, в Perfekt без ge-.', collocation: { de: 'einen Text veröffentlichen', ru: 'опубликовать текст', accept: ['den Text veröffentlichen'] }, example: { de: 'Wir veröffentlichen den Artikel morgen.', ru: 'Мы опубликуем статью завтра.', cloze: 'veröffentlichen' } },
    { id: 'inf-a21-05-beitrag', icon: 'StickyNote', de: 'Beitrag', pos: 'noun', article: 'der', plural: 'Beiträge', ru: 'пост, публикация; статья', collocation: { de: 'einen Beitrag schreiben', ru: 'написать пост', accept: ['einen Beitrag posten'] }, example: { de: 'Ihr Beitrag im Forum hat viele Kommentare.', ru: 'У её поста на форуме много комментариев.', cloze: 'Beitrag' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Zu viele Tabs',
      de: `Nora ist siebzehn und möchte nach der Matura Informatik an der TU Wien studieren. Am Abend sucht sie im Internet Informationen über das Studium. Sie gibt die Webadresse der Uni in die Adressleiste ein und ruft die Startseite auf.

Die Seite ist lang, Nora muss viel scrollen. Jede interessante Seite öffnet sie in einem neuen Tab. Nach zehn Minuten hat sie zwölf Tabs offen und findet nichts mehr.

Ihr Bruder Max lacht: „Speicher die wichtigen Seiten als Lesezeichen, dann kannst du die Tabs schließen.“

Am nächsten Tag weiß Nora nicht mehr, wo sie die Infos über die Zulassung gelesen hat. Zum Glück gibt es den Verlauf. Dort findet sie alle Seiten von gestern. Dann sucht sie noch einmal. Die ersten zwei Suchergebnisse sind nur Werbung, aber das dritte ist richtig.`,
      ru: `Норе семнадцать лет, и после выпускных экзаменов она хочет изучать информатику в Венском техническом университете. Вечером она ищет в интернете информацию об учёбе. Она вводит адрес сайта университета в адресную строку и открывает главную страницу.

Страница длинная, Норе приходится много прокручивать. Каждую интересную страницу она открывает в новой вкладке. Через десять минут у неё открыто двенадцать вкладок, и она больше ничего не находит.

Её брат Макс смеётся: «Сохрани важные страницы в закладки, тогда сможешь закрыть вкладки».

На следующий день Нора уже не помнит, где читала информацию о зачислении. К счастью, есть история браузера. Там она находит все страницы со вчерашнего дня. Потом она ищет ещё раз. Первые два результата поиска — просто реклама, но третий правильный.`,
      gloss: {
        nora: 'Нора (имя)', siebzehn: 'семнадцать', matura: 'аттестат зрелости, выпускные экзамены (Австрия)', informatik: 'информатика', tu: 'TU — технический университет', wien: 'Вена',
        informationen: 'информация, сведения', studium: 'учёба в вузе', gibt: 'вводит (eingeben)', ein: 'вводит (приставка eingeben); один', ruft: 'открывает (aufrufen)',
        seite: 'страница', seiten: 'страницы', interessante: 'интересную', interessanten: 'интересной', öffnet: 'открывает', offen: 'открытые', mehr: 'больше', tabs: 'вкладки',
        bruder: 'брат', max: 'Макс (имя)', lacht: 'смеётся', speicher: 'сохрани', wichtigen: 'важные', schließen: 'закрыть', kannst: '(ты) можешь',
        infos: 'информация (разг.)', zulassung: 'зачисление, допуск (в вуз)', glück: 'счастье (zum Glück — к счастью)', einmal: 'раз (noch einmal — ещё раз)', richtig: 'правильный', dritte: 'третий', ersten: 'первые', tab: 'вкладка', lesezeichen: 'закладки, закладка',
        rät: 'советует', seiner: 'своей', schwester: 'сестре', druckt: 'печатает', mathematik: 'математика', löschen: 'удалить, очистить',
        browser: 'браузер', installieren: 'установить', speichere: 'сохрани', speichern: 'сохранить',
      },
      questions: [
        { q: 'Was macht Nora mit jeder interessanten Seite?', ru: 'Что Нора делает с каждой интересной страницей?', options: ['Sie öffnet sie in einem neuen Tab.', 'Sie druckt sie aus.', 'Sie schickt sie an Max.'], answer: 'Sie öffnet sie in einem neuen Tab.' },
        { q: 'Was rät Max seiner Schwester?', ru: 'Что Макс советует своей сестре?', options: ['Wichtige Seiten als Lesezeichen speichern', 'Den Verlauf löschen', 'Einen neuen Browser installieren'], answer: 'Wichtige Seiten als Lesezeichen speichern' },
        { q: 'Wo findet Nora die Seiten von gestern?', ru: 'Где Нора находит страницы со вчерашнего дня?', options: ['Im Verlauf', 'In den Lesezeichen', 'Auf der Startseite'], answer: 'Im Verlauf' },
        { q: 'Was möchte Nora nach der Matura machen?', ru: 'Чем Нора хочет заниматься после выпускных экзаменов?', options: ['Informatik studieren', 'Mathematik studieren', 'Im Internet arbeiten'], answer: 'Informatik studieren' },
      ],
      translate: [
        { de: 'Sie ruft die Startseite der Uni auf.', ru: 'Она открывает главную страницу университета.', wrongRu: ['Она закрывает главную страницу университета.', 'Он открывает главную страницу университета.', 'Она открывает главную страницу школы.'] },
        { de: 'Speichere die Seite als Lesezeichen!', ru: 'Сохрани страницу в закладки!', wrongRu: ['Удали страницу из закладок!', 'Сохрани страницу в историю!'] },
        { de: 'Die ersten zwei Suchergebnisse sind nur Werbung.', ru: 'Первые два результата поиска — просто реклама.', wrongRu: ['Последние два результата поиска — просто реклама.', 'Первые два результата поиска — не реклама.'] },
      ],
    },
    {
      lesson: 1, title: 'Die Anmeldung zum Sommerkurs',
      de: `Die TU Wien bietet im Sommer einen Programmierkurs für Schülerinnen und Schüler an. Nora will mitmachen und muss online ein Formular ausfüllen. Sie schreibt ihren Namen, ihre Schule und ihre E-Mail-Adresse. Ein Feld vergisst sie, aber es ist ein Pflichtfeld. Die Seite zeigt eine rote Meldung, und Nora füllt das Feld noch aus.

Dann soll sie ihr Zeugnis hochladen. Leider ist die Dateigröße zu groß. Max hilft ihr, die Datei kleiner zu machen, und jetzt klappt es.

Nach dem Kurs schreibt Nora einen Beitrag für den Blog ihrer Schule. Sie erzählt, dass der Inhalt des Kurses spannend war. Ihre Lehrerin liest den Text und veröffentlicht ihn am Freitag.`,
      ru: `Венский технический университет летом проводит курс программирования для школьниц и школьников. Нора хочет поучаствовать, и ей нужно заполнить форму онлайн. Она пишет своё имя, свою школу и свой адрес электронной почты. Одно поле она забывает, но это обязательное поле. Сайт показывает красное сообщение, и Нора всё-таки заполняет поле.

Потом ей нужно загрузить свой табель успеваемости. К сожалению, размер файла слишком большой. Макс помогает ей уменьшить файл, и теперь всё получается.

После курса Нора пишет пост для блога своей школы. Она рассказывает, что содержание курса было захватывающим. Её учительница читает текст и публикует его в пятницу.`,
      gloss: {
        nora: 'Нора (имя)', noras: 'Норы (чей?)', max: 'Макс (имя)', tu: 'TU — технический университет', wien: 'Вена', bietet: 'предлагает (anbieten)', an: '(приставка anbieten); на, у, к',
        sommer: 'лето', programmierkurs: 'курс программирования', schülerinnen: 'школьницы', schüler: 'школьники', mitmachen: 'участвовать', online: 'онлайн',
        namen: 'имя', schule: 'школу, школа', 'e-mail-adresse': 'адрес электронной почты', feld: 'поле', vergisst: 'забывает', es: 'оно, это',
        seite: 'сайт, страница', rote: 'красное', meldung: 'сообщение', füllt: 'заполняет (ausfüllen)', zeugnis: 'табель успеваемости', datei: 'файл', kleiner: 'меньше',
        machen: 'сделать', klappt: 'получается', kurs: 'курс', kurses: 'курса', blog: 'блог', erzählt: 'рассказывает', spannend: 'захватывающий, интересный',
        lehrerin: 'учительница', liest: 'читает', text: 'текст', ihn: 'его', freitag: 'пятница', groß: 'большой',
        formular: 'форма', vergessen: 'забыла', hochladen: 'загрузить',
        lädt: 'загружает (hochladen)', hoch: '(приставка hochladen); высоко', beitrag: 'пост',
      },
      questions: [
        { q: 'Was hat Nora im Formular zuerst vergessen?', ru: 'Что Нора сначала забыла в форме?', options: ['Ein Pflichtfeld', 'Ihren Namen', 'Ihre Schule'], answer: 'Ein Pflichtfeld' },
        { q: 'Warum kann Nora das Zeugnis zuerst nicht hochladen?', ru: 'Почему Нора сначала не может загрузить табель?', options: ['Die Dateigröße ist zu groß.', 'Das Formular ist kaputt.', 'Max hat die Datei gelöscht.'], answer: 'Die Dateigröße ist zu groß.' },
        { q: 'Wer veröffentlicht Noras Beitrag?', ru: 'Кто публикует пост Норы?', options: ['Ihre Lehrerin', 'Ihr Bruder Max', 'Die TU Wien'], answer: 'Ihre Lehrerin' },
      ],
      translate: [
        { de: 'Nora muss ein Formular ausfüllen.', ru: 'Норе нужно заполнить форму.', wrongRu: ['Норе нужно отправить форму.', 'Норе не нужно заполнять форму.'] },
        { de: 'Sie lädt ihr Zeugnis hoch.', ru: 'Она загружает свой табель.', wrongRu: ['Она скачивает свой табель.', 'Он загружает свой табель.'] },
        { de: 'Die Lehrerin veröffentlicht den Beitrag.', ru: 'Учительница публикует пост.', wrongRu: ['Учительница удаляет пост.', 'Учительница пишет пост.', 'Ученица публикует пост.'] },
      ],
    },
  ],
};
