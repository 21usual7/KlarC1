import type { Module } from '../types.ts';

// A2.1 informatik 07: building a small database (lesson 0), querying and maintaining it (lesson 1).
// Zeile, Spalte, Ergebnis, Datensatz belong to other informatik modules, so they are not cards here.

export const module: Module = {
  id: 'informatik-a21-07-datenbanken', sphere: 'informatik', level: 'A2.1',
  title: 'Datenbanken', subtitle: 'Таблицы, записи, запросы и резервные копии на примере школьной библиотеки.',
  words: [
    { id: 'inf-a21-07-datenbank', icon: 'Database', imageQuery: 'database server', de: 'Datenbank', pos: 'noun', article: 'die', plural: 'Datenbanken', ru: 'база данных', parts: ['Daten', 'bank'], collocation: { de: 'eine Datenbank anlegen', ru: 'создать базу данных', accept: ['eine Datenbank erstellen'] }, example: { de: 'Alle Bücher sind jetzt in der Datenbank.', ru: 'Все книги теперь в базе данных.', cloze: 'Datenbank' } },
    { id: 'inf-a21-07-tabelle', icon: 'Table', imageQuery: 'spreadsheet', de: 'Tabelle', pos: 'noun', article: 'die', plural: 'Tabellen', ru: 'таблица', collocation: { de: 'eine Tabelle anlegen', ru: 'создать таблицу', accept: ['eine Tabelle erstellen'] }, example: { de: 'Die Tabelle hat Spalten für Titel und Autor.', ru: 'В таблице есть столбцы для названия и автора.', cloze: 'Tabelle' } },
    { id: 'inf-a21-07-eintrag', icon: 'Rows3', de: 'Eintrag', pos: 'noun', article: 'der', plural: 'Einträge', ru: 'запись (в таблице, списке)', collocation: { de: 'einen Eintrag löschen', ru: 'удалить запись', accept: ['den Eintrag löschen'] }, example: { de: 'Jedes Buch ist ein eigener Eintrag.', ru: 'Каждая книга — отдельная запись.', cloze: 'Eintrag' } },
    { id: 'inf-a21-07-erfassen', icon: 'PencilLine', de: 'erfassen', pos: 'verb', ru: 'вносить, регистрировать (данные)', forms: 'er erfasst · hat erfasst', note: 'Приставка er- неотделяемая; + Akk: Daten erfassen.', collocation: { de: 'Daten erfassen', ru: 'вносить данные', accept: ['die Daten erfassen'] }, example: { de: 'Ich erfasse die neuen Bücher in der Tabelle.', ru: 'Я вношу новые книги в таблицу.', cloze: 'erfasse' } },
    { id: 'inf-a21-07-kategorie', icon: 'Tags', imageQuery: 'sorted boxes shelf', de: 'Kategorie', pos: 'noun', article: 'die', plural: 'Kategorien', ru: 'категория', example: { de: 'Krimis haben eine eigene Kategorie.', ru: 'У детективов своя категория.', cloze: 'Kategorie' } },
    { id: 'inf-a21-07-doppelt', icon: 'Copy', de: 'doppelt', pos: 'adj', ru: 'двойной; дважды (о дубликате)', note: 'doppelt vorhanden / doppelt drin (разг.) — есть два раза, дубликат.', collocation: { de: 'doppelt vorhanden sein', ru: 'встречаться дважды (быть дубликатом)' }, example: { de: 'Dieser Eintrag ist doppelt.', ru: 'Эта запись повторяется дважды.', cloze: 'doppelt' } },
    { id: 'inf-a21-07-alphabetisch', icon: 'ArrowDownAZ', de: 'alphabetisch', pos: 'adj', ru: 'алфавитный; по алфавиту', collocation: { de: 'alphabetisch sortiert', ru: 'отсортированный по алфавиту', accept: ['alphabetisch geordnet'] }, example: { de: 'Die Namen stehen alphabetisch in der Liste.', ru: 'Имена стоят в списке по алфавиту.', cloze: 'alphabetisch' } },
    { id: 'inf-a21-07-uebersichtlich', icon: 'LayoutList', de: 'übersichtlich', pos: 'adj', ru: 'наглядный, удобный для обзора', note: 'Die Übersicht — обзор.', example: { de: 'Die neue Tabelle ist viel übersichtlicher.', ru: 'Новая таблица гораздо нагляднее.', cloze: 'übersichtlicher' } },

    { id: 'inf-a21-07-abfragen', icon: 'Search', de: 'abfragen', pos: 'verb', ru: 'запрашивать (данные), делать запрос', forms: 'er fragt ab · hat abgefragt', note: 'Отделяемая приставка; + Akk: die Datenbank / Daten abfragen.', collocation: { de: 'Daten abfragen', ru: 'запрашивать данные', accept: ['die Daten abfragen'] }, example: { de: 'Das Programm fragt die Datenbank jede Minute ab.', ru: 'Программа каждую минуту делает запрос к базе данных.', cloze: 'fragt' } },
    { id: 'inf-a21-07-suchbegriff', icon: 'TextSearch', de: 'Suchbegriff', pos: 'noun', article: 'der', plural: 'Suchbegriffe', ru: 'поисковый запрос, ключевое слово', parts: ['Such', 'begriff'], collocation: { de: 'einen Suchbegriff eingeben', ru: 'ввести поисковый запрос', accept: ['den Suchbegriff eingeben'] }, example: { de: 'Gib einen kurzen Suchbegriff ein.', ru: 'Введи короткое ключевое слово.', cloze: 'Suchbegriff' } },
    { id: 'inf-a21-07-verwalten', icon: 'FolderCog', de: 'verwalten', pos: 'verb', ru: 'управлять, вести (данные, систему)', forms: 'er verwaltet · hat verwaltet', note: 'Приставка ver- неотделяемая; + Akk.', collocation: { de: 'Daten verwalten', ru: 'управлять данными', accept: ['die Daten verwalten'] }, example: { de: 'Frau Novak verwaltet die Bücher der Schule.', ru: 'Госпожа Новак ведёт учёт книг школы.', cloze: 'verwaltet' } },
    { id: 'inf-a21-07-zugriff', icon: 'KeyRound', imageQuery: 'access card reader', de: 'Zugriff', pos: 'noun', article: 'der', plural: 'Zugriffe', ru: 'доступ', note: 'Zugriff auf + Akk: Zugriff auf die Datenbank.', collocation: { de: 'Zugriff haben', ru: 'иметь доступ', accept: ['Zugriff auf die Datenbank haben'] }, example: { de: 'Nur zwei Personen haben Zugriff auf die Daten.', ru: 'Доступ к данным есть только у двух человек.', cloze: 'Zugriff' } },
    { id: 'inf-a21-07-reihenfolge', icon: 'ListOrdered', imageQuery: 'queue of people', de: 'Reihenfolge', pos: 'noun', article: 'die', plural: 'Reihenfolgen', ru: 'порядок, последовательность', parts: ['Reihen', 'folge'], collocation: { de: 'in der richtigen Reihenfolge', ru: 'в правильном порядке' }, example: { de: 'Die Reihenfolge der Ergebnisse kannst du ändern.', ru: 'Порядок результатов ты можешь изменить.', cloze: 'Reihenfolge' } },
    { id: 'inf-a21-07-datensicherung', icon: 'ArchiveRestore', imageQuery: 'backup hard disk', de: 'Datensicherung', pos: 'noun', article: 'die', plural: 'Datensicherungen', ru: 'резервное копирование; резервная копия', parts: ['Daten', 'sicherung'], note: 'Синоним: das Backup.', collocation: { de: 'eine Datensicherung machen', ru: 'сделать резервную копию' }, example: { de: 'Wir machen jeden Freitag eine Datensicherung.', ru: 'Мы каждую пятницу делаем резервную копию.', cloze: 'Datensicherung' } },
    { id: 'inf-a21-07-vollstaendig', icon: 'CircleCheck', de: 'vollständig', pos: 'adj', ru: 'полный, полностью', example: { de: 'Die Liste ist noch nicht vollständig.', ru: 'Список ещё не полный.', cloze: 'vollständig' } },
    { id: 'inf-a21-07-bestand', icon: 'Library', imageQuery: 'school library bookshelves', de: 'Bestand', pos: 'noun', article: 'der', plural: 'Bestände', ru: 'фонд, имеющийся запас (книг, товаров)', collocation: { de: 'im Bestand', ru: 'в наличии, в фонде' }, example: { de: 'Die Bibliothek hat viele Krimis im Bestand.', ru: 'В фонде библиотеки много детективов.', cloze: 'Bestand' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ordnung in der Schulbibliothek',
      de: `Felix geht in eine HTL in Wien und hilft am Nachmittag in der Schulbibliothek. Bis jetzt stehen alle Bücher in einer langen Liste. Die Liste ist nicht übersichtlich, und viele Bücher sind doppelt drin.

Deshalb baut Felix eine kleine Datenbank. Sie hat eine Tabelle für die Bücher und eine Tabelle für die Schüler. Jedes Buch ist ein Eintrag mit Titel, Autor und Kategorie, zum Beispiel Krimi, Roman oder Informatik.

Zwei Tage lang erfasst Felix alle Bücher. Danach zeigt das Programm alle Titel alphabetisch an. Die Bibliothekarin, Frau Novak, ist begeistert: „Endlich finde ich ein Buch in zehn Sekunden!“`,
      ru: `Феликс учится в HTL (высшем техническом училище) в Вене и после обеда помогает в школьной библиотеке. До сих пор все книги записаны в одном длинном списке. Список не наглядный, и многие книги в нём повторяются дважды.

Поэтому Феликс делает небольшую базу данных. В ней есть таблица для книг и таблица для учеников. Каждая книга — это запись с названием, автором и категорией, например детектив, роман или информатика.

Два дня Феликс вносит книги. После этого программа показывает все названия по алфавиту. Библиотекарь, госпожа Новак, в восторге: «Наконец-то я нахожу книгу за десять секунд!»`,
      gloss: {
        felix: 'Феликс (имя)', htl: 'HTL — высшее техническое училище (Австрия)', wien: 'Вена', hilft: 'помогает', nachmittag: 'время после обеда', schulbibliothek: 'школьная библиотека',
        bis: 'до (bis jetzt — до сих пор)', stehen: 'стоят, записаны', bücher: 'книги', buch: 'книга', langen: 'длинном', liste: 'список', drin: 'внутри, в нём (разг.)',
        baut: 'строит, делает', kleine: 'небольшую', schüler: 'ученики, ученики (мн.)', titel: 'название, названия', autor: 'автор', zum: 'к (zum Beispiel — например)', beispiel: 'пример',
        krimi: 'детектив (книга)', roman: 'роман', informatik: 'информатика', tage: 'дня', lang: 'долго (zwei Tage lang — два дня)',
        zeigt: 'показывает (anzeigen)', an: '(приставка anzeigen); на, у, к', programm: 'программа', bibliothekarin: 'библиотекарь (женщина)', novak: 'Новак (фамилия)',
        begeistert: 'в восторге', sekunden: 'секунды', computerraum: 'компьютерный класс', mensa: 'столовая', problem: 'проблема', alten: 'старым', waren: 'были', war: 'была',
        server: 'сервер', hatte: 'имела', tabellen: 'таблицы', zwei: 'два', eine: 'одна', drei: 'три', kategorie: 'категория', nach: 'по',
      },
      questions: [
        { q: 'Wo hilft Felix am Nachmittag?', ru: 'Где Феликс помогает после обеда?', options: ['In der Schulbibliothek', 'Im Computerraum', 'In der Mensa'], answer: 'In der Schulbibliothek' },
        { q: 'Was war das Problem mit der alten Liste?', ru: 'В чём была проблема со старым списком?', options: ['Viele Bücher waren doppelt drin.', 'Die Liste war auf dem Server.', 'Die Liste hatte keine Titel.'], answer: 'Viele Bücher waren doppelt drin.' },
        { q: 'Wie viele Tabellen hat die Datenbank?', ru: 'Сколько таблиц в базе данных?', options: ['Zwei', 'Eine', 'Drei'], answer: 'Zwei' },
        { q: 'Wie zeigt das Programm die Titel an?', ru: 'Как программа показывает названия?', options: ['Alphabetisch', 'Nach Kategorie', 'Nach Autor'], answer: 'Alphabetisch' },
      ],
      translate: [
        { de: 'Jedes Buch ist ein Eintrag in der Tabelle.', ru: 'Каждая книга — это запись в таблице.', wrongRu: ['Каждый ученик — это запись в таблице.', 'Каждая книга — это категория в таблице.'] },
        { de: 'Felix erfasst die Bücher.', ru: 'Феликс вносит книги в базу.', wrongRu: ['Феликс удаляет книги из базы.', 'Феликс читает книги.'] },
        { de: 'Die Liste ist nicht übersichtlich.', ru: 'Список не наглядный.', wrongRu: ['Список наглядный.', 'Таблица не наглядная.'] },
      ],
    },
    {
      lesson: 1, title: 'Wer hat Zugriff?',
      de: `Jetzt kann Frau Novak die Datenbank abfragen. Sie gibt zum Beispiel den Suchbegriff „Krimi“ ein und sieht sofort alle Krimis im Bestand der Bibliothek. Sie kann auch fragen, welche Schüler ein Buch zu spät zurückgebracht haben.

Felix erklärt ihr, wie man die Datenbank verwaltet. Nur Frau Novak und Felix haben Zugriff, weil dort auch Namen von Schülern stehen. Die Reihenfolge der Bücher kann man selbst wählen: nach Titel oder nach Datum.

Am Ende sagt Felix: „Wichtig ist die Datensicherung. Jeden Freitag kopieren wir die Datenbank auf eine externe Festplatte.“ Nach einem Monat ist die Datenbank vollständig, und die alte Liste braucht niemand mehr.`,
      ru: `Теперь госпожа Новак может делать запросы к базе данных. Например, она вводит поисковое слово «детектив» и сразу видит все детективы в фонде библиотеки. Она также может узнать, какие ученики слишком поздно вернули книгу.

Феликс объясняет ей, как вести базу данных. Доступ есть только у госпожи Новак и Феликса, потому что там также записаны имена учеников. Порядок книг можно выбрать самому: по названию или по дате.

В конце Феликс говорит: «Важно резервное копирование. Каждую пятницу мы копируем базу данных на внешний жёсткий диск». Через месяц база данных заполнена полностью, и старый список больше никому не нужен.`,
      gloss: {
        felix: 'Феликс (имя)', novak: 'Новак (фамилия)', gibt: 'вводит (eingeben)', ein: '(приставка eingeben); один', zum: 'к (zum Beispiel — например)', beispiel: 'пример',
        krimi: 'детектив (книга)', krimis: 'детективы', sieht: 'видит', bibliothek: 'библиотека', fragen: 'спросить, узнать', schüler: 'ученики', buch: 'книгу', bücher: 'книг',
        spät: 'поздно', zurückgebracht: 'вернули', namen: 'имена', stehen: 'записаны, стоят', selbst: 'сам(и)', wählen: 'выбрать', nach: 'по; через', titel: 'название', datum: 'дата',
        ende: 'конец', wichtig: 'важно', freitag: 'пятница', kopieren: 'копируем', externe: 'внешний', monat: 'месяц', alte: 'старый', liste: 'список', braucht: 'нуждается (никому не нужен)', mehr: 'больше',
        zeigt: 'показывает', eingibt: 'вводит', neue: 'новые', personen: 'человека', datenbank: 'база данных', sehr: 'очень', computer: 'компьютер', montag: 'понедельник',
        einmal: 'раз (einmal im Monat — раз в месяц)', macht: 'делает', man: '(безличное)', schülern: 'учеников',
      },
      questions: [
        { q: 'Was sieht Frau Novak, wenn sie „Krimi“ eingibt?', ru: 'Что видит госпожа Новак, когда вводит «детектив»?', options: ['Alle Krimis im Bestand', 'Nur neue Krimis', 'Alle Schüler mit Krimis'], answer: 'Alle Krimis im Bestand' },
        { q: 'Warum haben nur zwei Personen Zugriff?', ru: 'Почему доступ есть только у двух человек?', options: ['Weil dort Namen von Schülern stehen.', 'Weil die Datenbank sehr alt ist.', 'Weil der Computer langsam ist.'], answer: 'Weil dort Namen von Schülern stehen.' },
        { q: 'Wann macht man die Datensicherung?', ru: 'Когда делают резервную копию?', options: ['Jeden Freitag', 'Jeden Montag', 'Einmal im Monat'], answer: 'Jeden Freitag' },
      ],
      translate: [
        { de: 'Frau Novak fragt die Datenbank ab.', ru: 'Госпожа Новак делает запрос к базе данных.', wrongRu: ['Госпожа Новак удаляет базу данных.', 'Феликс делает запрос к базе данных.'] },
        { de: 'Nur zwei Personen haben Zugriff.', ru: 'Доступ есть только у двух человек.', wrongRu: ['Доступ есть только у трёх человек.', 'У двух человек нет доступа.'] },
        { de: 'Die Datenbank ist jetzt vollständig.', ru: 'Теперь база данных полная.', wrongRu: ['Теперь база данных неполная.', 'Раньше база данных была полной.'] },
      ],
    },
  ],
};
