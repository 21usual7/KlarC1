import type { Module } from '../types.ts';

// A2.2 cyber 04: SQL injection through forms (lesson 0), scripts and session hijacking (lesson 1).

export const module: Module = {
  id: 'cyber-a22-04-websicherheit', sphere: 'cyber', level: 'A2.2',
  title: 'Web-Sicherheit', subtitle: 'Инъекции, поля ввода, сессии и скрипты: типичные уязвимости веб-приложений.',
  words: [
    { id: 'cyb-a22-04-injection', icon: 'Syringe', de: 'Injection', pos: 'noun', article: 'die', plural: 'Injections', ru: 'инъекция (атака внедрением)', note: 'Англицизм. Die SQL-Injection — SQL-инъекция.', collocation: { de: 'eine SQL-Injection finden', ru: 'найти SQL-инъекцию' }, example: { de: 'Eine Injection ist eine sehr häufige Schwachstelle.', ru: 'Инъекция — очень частая уязвимость.', cloze: 'Injection' } },
    { id: 'cyb-a22-04-formular', icon: 'ClipboardList', imageQuery: 'web form', de: 'Formular', pos: 'noun', article: 'das', plural: 'Formulare', ru: 'форма (на сайте), бланк', collocation: { de: 'ein Formular ausfüllen', ru: 'заполнить форму', accept: ['das Formular ausfüllen'] }, example: { de: 'Bitte füllen Sie das Formular vollständig aus.', ru: 'Пожалуйста, заполните форму полностью.', cloze: 'Formular' } },
    { id: 'cyb-a22-04-eingabefeld', icon: 'TextCursorInput', de: 'Eingabefeld', pos: 'noun', article: 'das', plural: 'Eingabefelder', ru: 'поле ввода', parts: ['Eingabe', 'feld'], note: 'Die Eingabe — ввод, введённые данные.', example: { de: 'Der Angreifer schreibt Code in das Eingabefeld.', ru: 'Злоумышленник пишет код в поле ввода.', cloze: 'Eingabefeld' } },
    { id: 'cyb-a22-04-anfuehrungszeichen', icon: 'Quote', de: 'Anführungszeichen', pos: 'noun', article: 'das', plural: 'Anführungszeichen', ru: 'кавычка, кавычки', parts: ['Anführungs', 'zeichen'], note: 'Чаще во мн. ч. В немецком тексте пишут „так“.', example: { de: 'Ein einfaches Anführungszeichen kann die Abfrage zerstören.', ru: 'Одна одинарная кавычка может сломать запрос.', cloze: 'Anführungszeichen' } },
    { id: 'cyb-a22-04-filtern', icon: 'Filter', de: 'filtern', pos: 'verb', ru: 'фильтровать', forms: 'er filtert · hat gefiltert', note: '+ Akk; etwas aus + Dat filtern — отфильтровывать из чего-то.', collocation: { de: 'Eingaben filtern', ru: 'фильтровать ввод', accept: ['die Eingaben filtern'] }, example: { de: 'Der Server filtert gefährliche Zeichen aus der Eingabe.', ru: 'Сервер отфильтровывает опасные символы из ввода.', cloze: 'filtert' } },
    { id: 'cyb-a22-04-maskieren', icon: 'Braces', de: 'maskieren', pos: 'verb', ru: 'экранировать (символы)', forms: 'er maskiert · hat maskiert', note: '+ Akk. Англ. escape; разговорно: escapen.', collocation: { de: 'Sonderzeichen maskieren', ru: 'экранировать спецсимволы' }, example: { de: 'Wir maskieren jedes Anführungszeichen mit einem Backslash.', ru: 'Мы экранируем каждую кавычку обратной косой чертой.', cloze: 'maskieren' } },
    { id: 'cyb-a22-04-datenbank', icon: 'Database', de: 'Datenbank', pos: 'noun', article: 'die', plural: 'Datenbanken', ru: 'база данных', parts: ['Daten', 'bank'], collocation: { de: 'auf die Datenbank zugreifen', ru: 'обращаться к базе данных' }, example: { de: 'Alle Benutzerkonten liegen in einer Datenbank.', ru: 'Все учётные записи хранятся в базе данных.', cloze: 'Datenbank' } },
    { id: 'cyb-a22-04-einschleusen', icon: 'Import', de: 'einschleusen', pos: 'verb', ru: 'внедрять (тайком), подсовывать', forms: 'er schleust ein · hat eingeschleust', note: 'Отделяемая приставка ein-; etwas in + Akk einschleusen.', collocation: { de: 'Code einschleusen', ru: 'внедрить код', accept: ['Schadcode einschleusen'] }, example: { de: 'Der Hacker schleust eigenen Code in die Abfrage ein.', ru: 'Хакер внедряет собственный код в запрос.', cloze: 'schleust' } },

    { id: 'cyb-a22-04-sitzung', icon: 'Hourglass', de: 'Sitzung', pos: 'noun', article: 'die', plural: 'Sitzungen', ru: 'сессия, сеанс', note: 'В IT часто die Session. Другое значение — заседание.', collocation: { de: 'die Sitzung beenden', ru: 'завершить сессию', accept: ['eine Sitzung beenden'] }, example: { de: 'Nach dem Login beginnt eine neue Sitzung.', ru: 'После входа начинается новая сессия.', cloze: 'Sitzung' } },
    { id: 'cyb-a22-04-eingabepruefung', icon: 'ListChecks', de: 'Eingabeprüfung', pos: 'noun', article: 'die', plural: 'Eingabeprüfungen', ru: 'проверка ввода (валидация)', parts: ['Eingabe', 'prüfung'], example: { de: 'Ohne Eingabeprüfung ist das Formular gefährlich.', ru: 'Без проверки ввода форма опасна.', cloze: 'Eingabeprüfung' } },
    { id: 'cyb-a22-04-skript', icon: 'FileCode', de: 'Skript', pos: 'noun', article: 'das', plural: 'Skripte', ru: 'скрипт', note: 'Мн. ч. также die Skripts. Второе значение — конспект лекций.', example: { de: 'Das Skript läuft im Browser des Opfers.', ru: 'Скрипт выполняется в браузере жертвы.', cloze: 'Skript' } },
    { id: 'cyb-a22-04-boesartig', icon: 'Skull', de: 'bösartig', pos: 'adj', ru: 'вредоносный, злонамеренный', collocation: { de: 'bösartiger Code', ru: 'вредоносный код' }, example: { de: 'Jemand hat einen bösartigen Link gepostet.', ru: 'Кто-то опубликовал вредоносную ссылку.', cloze: 'bösartigen' } },
    { id: 'cyb-a22-04-ausfuehren', icon: 'Play', de: 'ausführen', pos: 'verb', ru: 'выполнять, запускать (код)', forms: 'er führt aus · hat ausgeführt', note: 'Отделяемая приставка aus-; + Akk: Code ausführen.', collocation: { de: 'Code ausführen', ru: 'выполнить код', accept: ['den Code ausführen'] }, example: { de: 'Der Browser führt das fremde Skript einfach aus.', ru: 'Браузер просто выполняет чужой скрипт.', cloze: 'führt' } },
    { id: 'cyb-a22-04-ablaufen', icon: 'TimerOff', de: 'ablaufen', pos: 'verb', ru: 'истекать (о сроке)', forms: 'er läuft ab · lief ab · ist abgelaufen', note: 'Отделяемая приставка ab-; Perfekt с sein.', example: { de: 'Nach einer halben Stunde läuft die Sitzung ab.', ru: 'Через полчаса сессия истекает.', cloze: 'läuft' } },
    { id: 'cyb-a22-04-webanwendung', icon: 'AppWindow', de: 'Webanwendung', pos: 'noun', article: 'die', plural: 'Webanwendungen', ru: 'веб-приложение', parts: ['Web', 'anwendung'], note: 'Die Anwendung — приложение. Синоним: die Web-App.', example: { de: 'Unsere Webanwendung speichert die Daten der Studierenden.', ru: 'Наше веб-приложение хранит данные студентов.', cloze: 'Webanwendung' } },
    { id: 'cyb-a22-04-anfrage', icon: 'Send', de: 'Anfrage', pos: 'noun', article: 'die', plural: 'Anfragen', ru: 'запрос', note: 'Eine Anfrage an + Akk schicken — отправить запрос кому-то/куда-то.', collocation: { de: 'eine Anfrage schicken', ru: 'отправить запрос', accept: ['eine Anfrage senden'] }, example: { de: 'Der Browser schickt eine Anfrage an den Server.', ru: 'Браузер отправляет запрос на сервер.', cloze: 'Anfrage' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Anführungszeichen zu viel',
      de: `Nina und Lukas studieren Informatik an der TU Wien. Für ein Projekt programmierten sie eine kleine Webseite, auf der Studierende alte Bücher verkaufen können. Auf der Startseite gibt es ein Formular mit einem Eingabefeld für die Suche.

Bevor die Seite online ging, wollte Lukas sie testen. Er schrieb ein Anführungszeichen in das Eingabefeld und klickte auf „Suchen“. Sofort erschien eine Fehlermeldung von der Datenbank. „Das ist schlecht“, sagte er. „Hier ist eine SQL-Injection möglich. Ein Angreifer kann eigene Befehle in unsere Abfrage einschleusen.“

Nina war überrascht, denn sie hatte die Eingaben gefiltert. Aber ihr Filter war zu einfach. Die bessere Lösung: Man darf Eingaben nie direkt in die Abfrage schreiben. Man muss Sonderzeichen maskieren oder vorbereitete Abfragen benutzen.`,
      ru: `Нина и Лукас изучают информатику в Венском техническом университете. Для проекта они запрограммировали небольшой сайт, на котором студенты могут продавать старые книги. На главной странице есть форма с полем ввода для поиска.

Прежде чем сайт заработал онлайн, Лукас захотел его протестировать. Он написал кавычку в поле ввода и нажал «Искать». Сразу появилось сообщение об ошибке от базы данных. «Это плохо, — сказал он. — Здесь возможна SQL-инъекция. Злоумышленник может внедрить собственные команды в наш запрос».

Нина удивилась, ведь она фильтровала ввод. Но её фильтр был слишком простым. Лучшее решение: вводимые данные никогда нельзя вписывать прямо в запрос. Нужно экранировать спецсимволы или использовать подготовленные запросы.`,
      gloss: {
        nina: 'Нина (имя)', lukas: 'Лукас (имя)', informatik: 'информатика', tu: 'TU — технический университет', wien: 'Вена', projekt: 'проект', programmierten: 'запрограммировали',
        kleine: 'небольшой', webseite: 'сайт', studierende: 'студенты', bücher: 'книги', verkaufen: 'продавать', startseite: 'главная страница', suche: 'поиск',
        bevor: 'прежде чем', seite: 'сайт, страница', online: 'онлайн', ging: 'пошёл (online gehen — заработать в сети)', wollte: 'хотел', testen: 'протестировать', schrieb: 'написал', klickte: 'нажал, кликнул',
        suchen: '«Искать» (кнопка)', erschien: 'появилось', fehlermeldung: 'сообщение об ошибке', sagte: 'сказал', 'sql-injection': 'SQL-инъекция', möglich: 'возможна', angreifer: 'злоумышленник',
        eigene: 'собственные', befehle: 'команды', abfrage: 'запрос (к базе данных)', überrascht: 'удивлена', eingaben: 'вводимые данные, ввод', filter: 'фильтр', bessere: 'лучшее', lösung: 'решение',
        direkt: 'прямо, напрямую', sonderzeichen: 'спецсимволы', vorbereitete: 'подготовленные', abfragen: 'запросы', benutzen: 'использовать',
        laptops: 'ноутбуки', prüfungsergebnisse: 'результаты экзаменов', passwort: 'пароль', buchtitel: 'название книги', gelöscht: 'удалил', löschen: 'удалить', schreiben: 'написать', besseren: 'лучший',
      },
      questions: [
        { q: 'Was können Studierende auf der Webseite machen?', ru: 'Что студенты могут делать на сайте?', options: ['Alte Bücher verkaufen', 'Neue Laptops kaufen', 'Prüfungsergebnisse sehen'], answer: 'Alte Bücher verkaufen' },
        { q: 'Was schrieb Lukas in das Eingabefeld?', ru: 'Что Лукас написал в поле ввода?', options: ['Ein Anführungszeichen', 'Sein Passwort', 'Einen Buchtitel'], answer: 'Ein Anführungszeichen' },
        { q: 'Warum war Nina überrascht?', ru: 'Почему Нина удивилась?', options: ['Sie hatte die Eingaben gefiltert.', 'Lukas hatte die Datenbank gelöscht.', 'Die Seite war schon online.'], answer: 'Sie hatte die Eingaben gefiltert.' },
        { q: 'Was ist die bessere Lösung?', ru: 'Какое решение лучше?', options: ['Sonderzeichen maskieren oder vorbereitete Abfragen benutzen', 'Das Formular löschen', 'Einen besseren Filter schreiben'], answer: 'Sonderzeichen maskieren oder vorbereitete Abfragen benutzen' },
      ],
      translate: [
        { de: 'Lukas schrieb ein Anführungszeichen in das Eingabefeld.', ru: 'Лукас написал кавычку в поле ввода.', wrongRu: ['Лукас написал пароль в поле ввода.', 'Лукас пишет кавычку в поле ввода.', 'Нина написала кавычку в поле ввода.'] },
        { de: 'Wir müssen alle Eingaben filtern.', ru: 'Мы должны фильтровать все вводимые данные.', wrongRu: ['Мы должны сохранять все вводимые данные.', 'Мы не должны фильтровать вводимые данные.'] },
        { de: 'Der Angreifer schleust Befehle in die Datenbank ein.', ru: 'Злоумышленник внедряет команды в базу данных.', wrongRu: ['Злоумышленник удаляет команды из базы данных.', 'Администратор внедряет команды в базу данных.', 'Злоумышленник внедрил команды в базу данных.'] },
      ],
    },
    {
      lesson: 1, title: 'Wer ist eingeloggt?',
      de: `Eine Woche später lief die Webanwendung schon. Jeder Nutzer bekam nach dem Login eine Sitzung mit einer geheimen Sitzungs-ID. Diese ID schickt der Browser bei jeder Anfrage an den Server mit.

Lukas fand noch ein Problem: In den Kommentaren unter den Büchern konnte man HTML schreiben. Er testete ein kleines Skript, und der Browser führte es wirklich aus. So kann ein bösartiger Nutzer die Sitzungs-ID von anderen stehlen und ihre Sitzung übernehmen. Solche Angriffe heißen Cross-Site-Scripting.

Nina reparierte die Kommentare sofort. Außerdem wurde eingestellt, dass eine Sitzung nach dreißig Minuten ohne Aktivität abläuft. „Eine sichere Webanwendung ist mehr Arbeit, als ich dachte“, sagte Nina. Lukas lachte: „Aber jetzt wissen wir, wie Angreifer denken.“`,
      ru: `Через неделю веб-приложение уже работало. Каждый пользователь после входа получал сессию с секретным идентификатором сессии. Этот идентификатор браузер отправляет вместе с каждым запросом на сервер.

Лукас нашёл ещё одну проблему: в комментариях под книгами можно было писать HTML. Он протестировал небольшой скрипт, и браузер действительно его выполнил. Так злонамеренный пользователь может украсть идентификатор сессии других и перехватить их сессию. Такие атаки называются межсайтовым скриптингом.

Нина сразу исправила комментарии. Кроме того, настроили, чтобы сессия истекала через тридцать минут без активности. «Безопасное веб-приложение — это больше работы, чем я думала», — сказала Нина. Лукас засмеялся: «Зато теперь мы знаем, как думают злоумышленники».`,
      gloss: {
        bücher: 'книги',
        nina: 'Нина (имя)', lukas: 'Лукас (имя)', später: 'позже (eine Woche später — через неделю)', lief: 'работало', nutzer: 'пользователь', bekam: 'получал', login: 'вход в систему',
        geheimen: 'секретным', 'sitzungs-id': 'идентификатор сессии', id: 'идентификатор', browser: 'браузер', server: 'сервер', mit: 'с; вместе (mitschicken — отправлять вместе)',
        fand: 'нашёл', kommentaren: 'комментариях', büchern: 'книгами', konnte: 'мог(ли), можно было', html: 'HTML (язык разметки)', testete: 'протестировал', kleines: 'небольшой',
        führte: 'выполнил (führte aus)', es: 'его, это', bösartiger: 'злонамеренный', anderen: 'других', stehlen: 'украсть', ihre: 'их', solche: 'такие', angriffe: 'атаки',
        'cross-site-scripting': 'межсайтовый скриптинг (XSS)', reparierte: 'исправила', kommentare: 'комментарии', außerdem: 'кроме того', eingestellt: 'настроено', dreißig: 'тридцать',
        aktivität: 'активность', abläuft: 'истекает', sichere: 'безопасное', arbeit: 'работа', dachte: 'думала', sagte: 'сказала', lachte: 'засмеялся', angreifer: 'злоумышленники',
        ersten: 'первом', formular: 'форма', datenbank: 'база данных', reparieren: 'исправить', verkaufen: 'продавать', übernommen: 'перехватил',
      },
      questions: [
        { q: 'Wann schickt der Browser die Sitzungs-ID mit?', ru: 'Когда браузер отправляет идентификатор сессии?', options: ['Bei jeder Anfrage an den Server', 'Nur beim ersten Login', 'Nur nach dreißig Minuten'], answer: 'Bei jeder Anfrage an den Server' },
        { q: 'Wo fand Lukas das zweite Problem?', ru: 'Где Лукас нашёл вторую проблему?', options: ['In den Kommentaren unter den Büchern', 'Im Formular für die Suche', 'In der Datenbank'], answer: 'In den Kommentaren unter den Büchern' },
        { q: 'Was kann ein bösartiger Nutzer mit der Sitzungs-ID machen?', ru: 'Что злонамеренный пользователь может сделать с идентификатором сессии?', options: ['Die Sitzung von anderen übernehmen', 'Die Webanwendung reparieren', 'Neue Bücher verkaufen'], answer: 'Die Sitzung von anderen übernehmen' },
        { q: 'Wann läuft eine Sitzung jetzt ab?', ru: 'Когда теперь истекает сессия?', options: ['Nach dreißig Minuten ohne Aktivität', 'Nach einer Woche', 'Nach jeder Anfrage'], answer: 'Nach dreißig Minuten ohne Aktivität' },
      ],
      translate: [
        { de: 'Der Browser führt das Skript aus.', ru: 'Браузер выполняет скрипт.', wrongRu: ['Браузер блокирует скрипт.', 'Браузер выполнил скрипт.', 'Сервер выполняет скрипт.'] },
        { de: 'Der Angreifer hat die Sitzung übernommen.', ru: 'Злоумышленник перехватил сессию.', wrongRu: ['Злоумышленник завершил сессию.', 'Злоумышленник перехватит сессию.'] },
        { de: 'Die Sitzung läuft nach dreißig Minuten ab.', ru: 'Сессия истекает через тридцать минут.', wrongRu: ['Сессия начинается через тридцать минут.', 'Сессия истекает через три минуты.', 'Сессия истекла тридцать минут назад.'] },
      ],
    },
  ],
};
