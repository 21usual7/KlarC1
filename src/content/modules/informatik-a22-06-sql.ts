import type { Module } from '../types.ts';

// A2.2 informatik 06: SQL — first queries (lesson 0), keys and joins (lesson 1).

export const module: Module = {
  id: 'informatik-a22-06-sql', sphere: 'informatik', level: 'A2.2',
  title: 'SQL', subtitle: 'Запросы, столбцы, ключи и связи: язык реляционных баз данных.',
  words: [
    { id: 'inf-a22-06-abfrage', icon: 'FileSearch', de: 'Abfrage', pos: 'noun', article: 'die', plural: 'Abfragen', ru: 'запрос (к базе данных)', note: 'Abfrage — к базе данных; Anfrage — к серверу (HTTP).', collocation: { de: 'eine Abfrage schreiben', ru: 'написать запрос', accept: ['die Abfrage schreiben'] }, example: { de: 'Diese Abfrage zeigt alle Studierenden aus Wien.', ru: 'Этот запрос показывает всех студентов из Вены.', cloze: 'Abfrage' } },
    { id: 'inf-a22-06-spalte', icon: 'Columns3', de: 'Spalte', pos: 'noun', article: 'die', plural: 'Spalten', ru: 'столбец', note: 'Пара: die Zeile — строка.', example: { de: 'Die Spalte enthält die Namen der Kunden.', ru: 'Столбец содержит имена клиентов.', cloze: 'Spalte' } },
    { id: 'inf-a22-06-filtern', icon: 'Filter', de: 'filtern', pos: 'verb', ru: 'фильтровать', forms: 'er filtert · hat gefiltert', note: '+ Akk; nach etwas filtern — фильтровать по чему-то. В SQL — WHERE.', collocation: { de: 'nach dem Datum filtern', ru: 'фильтровать по дате' }, example: { de: 'Wir filtern die Ergebnisse nach dem Datum.', ru: 'Мы фильтруем результаты по дате.', cloze: 'filtern' } },
    { id: 'inf-a22-06-absteigend', icon: 'ArrowDownWideNarrow', de: 'absteigend', pos: 'adj', ru: 'по убыванию', note: 'В SQL: DESC. Противоположность: aufsteigend (ASC).', example: { de: 'Die Liste ist absteigend nach Preis sortiert.', ru: 'Список отсортирован по цене по убыванию.', cloze: 'absteigend' } },
    { id: 'inf-a22-06-primaerschluessel', icon: 'KeyRound', de: 'Primärschlüssel', pos: 'noun', article: 'der', plural: 'Primärschlüssel', ru: 'первичный ключ', parts: ['Primär', 'schlüssel'], note: 'der Schlüssel — ключ (мн. ч. тоже Schlüssel).', example: { de: 'Der Primärschlüssel ist für jede Zeile eindeutig.', ru: 'Первичный ключ уникален для каждой строки.', cloze: 'Primärschlüssel' } },
    { id: 'inf-a22-06-aufsteigend', icon: 'ArrowUpNarrowWide', de: 'aufsteigend', pos: 'adj', ru: 'по возрастанию', note: 'Пара: absteigend — по убыванию.', collocation: { de: 'aufsteigend sortieren', ru: 'сортировать по возрастанию' }, example: { de: 'Die Liste ist aufsteigend nach Namen sortiert.', ru: 'Список отсортирован по именам по возрастанию.', cloze: 'aufsteigend' } },
    { id: 'inf-a22-06-duplikat', icon: 'Copy', de: 'Duplikat', pos: 'noun', article: 'das', plural: 'Duplikate', ru: 'дубликат', example: { de: 'In der Tabelle gibt es ein Duplikat.', ru: 'В таблице есть дубликат.', cloze: 'Duplikat' } },
    { id: 'inf-a22-06-abfragesprache', icon: 'Code', de: 'Abfragesprache', pos: 'noun', article: 'die', plural: 'Abfragesprachen', ru: 'язык запросов', parts: ['Abfrage', 'sprache'], example: { de: 'SQL ist die bekannteste Abfragesprache.', ru: 'SQL — самый известный язык запросов.', cloze: 'Abfragesprache' } },

    { id: 'inf-a22-06-fremdschluessel', icon: 'Key', de: 'Fremdschlüssel', pos: 'noun', article: 'der', plural: 'Fremdschlüssel', ru: 'внешний ключ', parts: ['Fremd', 'schlüssel'], note: 'Ссылается на первичный ключ другой таблицы.', example: { de: 'Der Fremdschlüssel zeigt auf eine andere Tabelle.', ru: 'Внешний ключ указывает на другую таблицу.', cloze: 'Fremdschlüssel' } },
    { id: 'inf-a22-06-verknuepfen', icon: 'Link2', de: 'verknüpfen', pos: 'verb', ru: 'связывать, соединять', forms: 'er verknüpft · hat verknüpft', note: 'etwas mit etwas (Dat) verknüpfen; в SQL — JOIN.', collocation: { de: 'zwei Tabellen verknüpfen', ru: 'связать две таблицы', accept: ['die Tabellen verknüpfen'] }, example: { de: 'Wir verknüpfen die Tabellen über die Kundennummer.', ru: 'Мы связываем таблицы по номеру клиента.', cloze: 'verknüpfen' } },
    { id: 'inf-a22-06-beziehung', icon: 'Network', de: 'Beziehung', pos: 'noun', article: 'die', plural: 'Beziehungen', ru: 'связь, отношение', example: { de: 'Zwischen Kunden und Bestellungen gibt es eine Beziehung.', ru: 'Между клиентами и заказами есть связь.', cloze: 'Beziehung' } },
    { id: 'inf-a22-06-eindeutig', icon: 'Fingerprint', de: 'eindeutig', pos: 'adj', ru: 'однозначный, уникальный', example: { de: 'Jede Matrikelnummer ist eindeutig.', ru: 'Каждый номер студенческого уникален.', cloze: 'eindeutig' } },
    { id: 'inf-a22-06-redundanz', icon: 'Copy', de: 'Redundanz', pos: 'noun', article: 'die', plural: 'Redundanzen', ru: 'избыточность (дублирование данных)', collocation: { de: 'Redundanz vermeiden', ru: 'избегать избыточности' }, example: { de: 'Ein guter Entwurf vermeidet Redundanz.', ru: 'Хорошая структура избегает избыточности.', cloze: 'Redundanz' } },
    { id: 'inf-a22-06-nullwert', icon: 'CircleOff', de: 'Nullwert', pos: 'noun', article: 'der', plural: 'Nullwerte', ru: 'значение NULL, пустое значение', parts: ['Null', 'wert'], example: { de: 'Ein Nullwert bedeutet: Hier fehlt ein Wert.', ru: 'Значение NULL означает: здесь нет значения.', cloze: 'Nullwert' } },
    { id: 'inf-a22-06-gruppieren', icon: 'Group', de: 'gruppieren', pos: 'verb', ru: 'группировать', forms: 'er gruppiert · hat gruppiert', note: '+ Akk; nach etwas gruppieren. В SQL — GROUP BY.', example: { de: 'Wir gruppieren die Bestellungen nach dem Monat.', ru: 'Мы группируем заказы по месяцу.', cloze: 'gruppieren' } },
    { id: 'inf-a22-06-schema', icon: 'LayoutGrid', de: 'Schema', pos: 'noun', article: 'das', plural: 'Schemas', ru: 'схема (структура базы данных)', note: 'Мн. ч.: Schemas или Schemata.', example: { de: 'Das Schema beschreibt alle Tabellen der Datenbank.', ru: 'Схема описывает все таблицы базы данных.', cloze: 'Schema' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die erste Abfrage',
      de: `Selin studiert im dritten Semester Wirtschaftsinformatik an der TU Wien. In der Übung zu Datenbanken lernen die Studierenden SQL, die bekannteste Abfragesprache.

Die Tutorin Katharina hatte eine Tabelle mit allen Büchern der Unibibliothek vorbereitet. Jede Zeile hatte einen Primärschlüssel, und in den Spalten standen Titel, Autor und Jahr. Die erste Aufgabe war einfach: Man sollte nur den Titel und das Jahr auswählen.

Danach wurde es schwieriger. Selin musste alle Bücher nach dem Jahr filtern und das Ergebnis aufsteigend sortieren. Ihre erste Abfrage war falsch, weil sie WHERE vergessen hatte. Das Ergebnis war deshalb viel zu lang. Beim zweiten Versuch funktionierte alles, und Selin war stolz.`,
      ru: `Селин учится на третьем семестре бизнес-информатики в Венском техническом университете. На практических занятиях по базам данных студенты изучают SQL — самый известный язык запросов.

Тьютор Катарина подготовила таблицу со всеми книгами университетской библиотеки. У каждой строки был первичный ключ, а в столбцах стояли название, автор и год. Первое задание было простым: нужно было выбрать только название и год.

Потом стало сложнее. Селин нужно было отфильтровать все книги по году и отсортировать результат по возрастанию. Её первый запрос был неправильным, потому что она забыла WHERE. Поэтому результат был слишком длинным. Со второй попытки всё заработало, и Селин гордилась собой.`,
      gloss: {
        stand: 'стоял(о); (in der Tabelle stand) было записано',
        selin: 'Селин (имя)', katharina: 'Катарина (имя)', dritten: 'третьем', semester: 'семестр', wirtschaftsinformatik: 'бизнес-информатика', tu: 'TU — технический университет', wien: 'Вена',
        übung: 'практическое занятие', datenbanken: 'базы данных', studierenden: 'студенты', sql: 'SQL (язык запросов)', bekannteste: 'самый известный',
        tutorin: 'тьютор (женщина)', tabelle: 'таблица', büchern: 'книгами', bücher: 'книги', unibibliothek: 'университетская библиотека', vorbereitet: 'подготовила',
        zeile: 'строка', standen: 'стояли', titel: 'название', autor: 'автор', jahr: 'год', erste: 'первое', aufgabe: 'задание', einfach: 'простой', man: '(безличное) нужно было, надо', sollte: 'должен был', nur: 'только',
        danach: 'потом', wurde: 'стало', schwieriger: 'сложнее', musste: 'нужно было', sortieren: 'сортировать', falsch: 'неправильный', where: 'WHERE (условие в SQL)', vergessen: 'забыла', deshalb: 'поэтому', viel: 'гораздо', zu: 'слишком', lang: 'длинный',
        zweiten: 'второй', versuch: 'попытка', funktionierte: 'заработало', stolz: 'гордая',
        welche: 'какие', daten: 'данные', alle: 'все', noten: 'оценки', name: 'имя', adresse: 'адрес', note: 'оценка', preis: 'цена', seiten: 'страницы', wonach: 'по чему', warum: 'почему', leer: 'пустой', keinen: 'никакого',
      },
      questions: [
        { q: 'Welche Daten hatte Katharina vorbereitet?', ru: 'Какие данные подготовила Катарина?', options: ['Alle Bücher der Unibibliothek', 'Alle Studierenden der TU Wien', 'Alle Noten der Übung'], answer: 'Alle Bücher der Unibibliothek' },
        { q: 'Was stand in den Spalten?', ru: 'Что стояло в столбцах?', options: ['Titel, Autor und Jahr', 'Name, Adresse und Note', 'Titel, Preis und Seiten'], answer: 'Titel, Autor und Jahr' },
        { q: 'Wonach musste Selin die Bücher filtern?', ru: 'По чему Селин нужно было отфильтровать книги?', options: ['Nach dem Jahr', 'Nach dem Autor', 'Nach dem Titel'], answer: 'Nach dem Jahr' },
        { q: 'Warum war die erste Abfrage falsch?', ru: 'Почему первый запрос был неправильным?', options: ['Selin hatte WHERE vergessen.', 'Die Tabelle war leer.', 'Selin hatte keinen Primärschlüssel.'], answer: 'Selin hatte WHERE vergessen.' },
      ],
      translate: [
        { de: 'Jede Zeile hat einen Primärschlüssel.', ru: 'У каждой строки есть первичный ключ.', wrongRu: ['У каждой строки есть внешний ключ.', 'У каждого столбца есть первичный ключ.'] },
        { de: 'Selin musste die Bücher nach dem Jahr filtern.', ru: 'Селин нужно было отфильтровать книги по году.', wrongRu: ['Селин нужно было отсортировать книги по году.', 'Селин нужно было отфильтровать книги по автору.'] },
        { de: 'Das Ergebnis war zu lang.', ru: 'Результат был слишком длинным.', wrongRu: ['Результат был слишком коротким.', 'Запрос был слишком длинным.'] },
      ],
    },
    {
      lesson: 1, title: 'Zwei Tabellen verknüpfen',
      de: `In der nächsten Woche ging es um mehrere Tabellen. Katharina erklärte: „Wenn man alle Daten in eine einzige Tabelle schreibt, entsteht Redundanz. Der Name eines Autors steht dann zum Beispiel hundertmal in der Tabelle.“

Deshalb sollten die Studierenden ein neues Schema entwerfen. Autoren und Bücher kamen in zwei getrennte Tabellen. Zwischen den Tabellen gibt es eine Beziehung: Jedes Buch hat einen Fremdschlüssel, der auf die Autorennummer zeigt. Diese Nummer muss natürlich eindeutig sein.

Am Ende musste Selin die beiden Tabellen mit JOIN verknüpfen und die Bücher nach Autor gruppieren. Bei einigen Büchern stand im Feld für den Autor ein Nullwert, weil der Autor unbekannt war. Diese Bücher fehlten im Ergebnis, und Selin musste herausfinden, warum.`,
      ru: `На следующей неделе речь шла о нескольких таблицах. Катарина объяснила: «Если записать все данные в одну-единственную таблицу, возникает избыточность. Имя автора тогда, например, стоит в таблице сто раз».

Поэтому студенты должны были разработать новую схему. Авторы и книги попали в две отдельные таблицы. Между таблицами есть связь: у каждой книги есть внешний ключ, который указывает на номер автора. Этот номер, конечно, должен быть уникальным.

В конце Селин нужно было связать обе таблицы с помощью JOIN и сгруппировать книги по автору. У некоторых книг в поле для автора стояло значение NULL, потому что автор был неизвестен. Этих книг не было в результате, и Селин пришлось выяснять почему.`,
      gloss: {
        selin: 'Селин (имя)', katharina: 'Катарина (имя)', nächsten: 'следующей', woche: 'неделе', ging: 'шла (es ging um — речь шла о)', um: 'о (es ging um)', mehrere: 'несколько', tabellen: 'таблицы, таблицах', tabelle: 'таблица',
        erklärte: 'объяснила', man: '(безличное) записать, если ты', daten: 'данные', einzige: 'единственную', schreibt: 'пишет, записывает', entsteht: 'возникает', name: 'имя', autors: 'автора', steht: 'стоит',
        beispiel: 'пример (zum Beispiel — например)', hundertmal: 'сто раз', deshalb: 'поэтому', sollten: 'должны были', studierenden: 'студенты', neues: 'новую', entwerfen: 'разработать, спроектировать',
        autoren: 'авторы', bücher: 'книги', büchern: 'книгах', kamen: 'попали, пришли', getrennte: 'отдельные', buch: 'книга', autorennummer: 'номер автора', zeigt: 'указывает', nummer: 'номер', natürlich: 'конечно',
        ende: 'конец', musste: 'нужно было', beiden: 'обе', join: 'JOIN (соединение в SQL)', autor: 'автор', einigen: 'некоторых', stand: 'стояло', feld: 'поле', unbekannt: 'неизвестный',
        fehlten: 'отсутствовали', herausfinden: 'выяснить', warum: 'почему', worauf: 'на что', titel: 'название', buches: 'книги', jahr: 'год', womit: 'с помощью чего', where: 'WHERE (условие в SQL)', select: 'SELECT (выбор в SQL)',
        einige: 'некоторые', sie: 'они', hatten: 'имели', keinen: 'никакого', doppelt: 'двойной, дублирован', primärschlüssel: 'первичный ключ', gruppiert: 'сгруппировала',
      },
      questions: [
        { q: 'Was entsteht, wenn alle Daten in einer Tabelle stehen?', ru: 'Что возникает, если все данные стоят в одной таблице?', options: ['Redundanz', 'Ein Nullwert', 'Ein Fremdschlüssel'], answer: 'Redundanz' },
        { q: 'Worauf zeigt der Fremdschlüssel?', ru: 'На что указывает внешний ключ?', options: ['Auf die Autorennummer', 'Auf den Titel des Buches', 'Auf das Jahr'], answer: 'Auf die Autorennummer' },
        { q: 'Womit musste Selin die Tabellen verknüpfen?', ru: 'С помощью чего Селин нужно было связать таблицы?', options: ['Mit JOIN', 'Mit WHERE', 'Mit SELECT'], answer: 'Mit JOIN' },
        { q: 'Warum fehlten einige Bücher im Ergebnis?', ru: 'Почему некоторых книг не было в результате?', options: ['Beim Autor stand ein Nullwert.', 'Sie hatten keinen Titel.', 'Der Primärschlüssel war doppelt.'], answer: 'Beim Autor stand ein Nullwert.' },
      ],
      translate: [
        { de: 'Zwischen den Tabellen gibt es eine Beziehung.', ru: 'Между таблицами есть связь.', wrongRu: ['Между таблицами нет связи.', 'Между столбцами есть связь.'] },
        { de: 'Die Nummer muss eindeutig sein.', ru: 'Номер должен быть уникальным.', wrongRu: ['Номер может быть уникальным.', 'Номер не должен быть уникальным.'] },
        { de: 'Selin hat die Bücher nach Autor gruppiert.', ru: 'Селин сгруппировала книги по автору.', wrongRu: ['Селин отсортировала книги по автору.', 'Селин сгруппировала книги по году.'] },
      ],
    },
  ],
};
