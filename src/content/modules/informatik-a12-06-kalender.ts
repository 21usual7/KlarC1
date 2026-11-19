import type { Module } from '../types.ts';

// A1.2 informatik 06: a calendar app and appointments (lesson 0), free time, birthdays and holidays (lesson 1).

export const module: Module = {
  id: 'informatik-a12-06-kalender', sphere: 'informatik', level: 'A1.2',
  title: 'Termine und Kalender', subtitle: 'Дата, встреча, напоминание: планируем время в календаре и на телефоне.',
  words: [
    { id: 'inf-a12-06-kalender', icon: 'Calendar', imageQuery: 'wall calendar', de: 'Kalender', pos: 'noun', article: 'der', plural: 'Kalender', ru: 'календарь', collocation: { de: 'im Kalender stehen', ru: 'быть записанным в календаре' }, example: { de: 'Der Termin steht im Kalender.', ru: 'Встреча записана в календаре.', cloze: 'Kalender' } },
    { id: 'inf-a12-06-termin', icon: 'CalendarClock', de: 'Termin', pos: 'noun', article: 'der', plural: 'Termine', ru: 'назначенная встреча, приём (у врача), срок', note: 'Не «термин»! Термин по-немецки — der Fachbegriff.', collocation: { de: 'einen Termin machen', ru: 'договориться о встрече, записаться', accept: ['einen Termin ausmachen', 'einen Termin vereinbaren'] }, example: { de: 'Ich habe morgen einen Termin.', ru: 'У меня завтра назначена встреча.', cloze: 'Termin' } },
    { id: 'inf-a12-06-datum', icon: 'CalendarDays', de: 'Datum', pos: 'noun', article: 'das', plural: 'Daten', ru: 'дата, число', note: 'Мн. ч. Daten совпадает со словом «данные».', collocation: { de: 'das Datum eingeben', ru: 'ввести дату' }, example: { de: 'Welches Datum hat der Termin?', ru: 'На какое число назначена встреча?', cloze: 'Datum' } },
    { id: 'inf-a12-06-uhrzeit', icon: 'Clock', imageQuery: 'clock face', de: 'Uhrzeit', pos: 'noun', article: 'die', plural: 'Uhrzeiten', ru: 'время (по часам)', parts: ['Uhr', 'zeit'], example: { de: 'Die Uhrzeit steht oben rechts.', ru: 'Время показано справа вверху.', cloze: 'Uhrzeit' } },
    { id: 'inf-a12-06-eintragen', icon: 'CalendarPlus', imageQuery: 'writing in a planner', de: 'eintragen', pos: 'verb', ru: 'вносить, записывать (в календарь, список)', forms: 'er trägt ein · hat eingetragen', note: 'Отделяемая приставка: ich trage den Termin ein. eintragen in + Akk.', collocation: { de: 'einen Termin eintragen', ru: 'записать встречу', accept: ['den Termin eintragen'] }, example: { de: 'Ich trage den Termin in den Kalender ein.', ru: 'Я записываю встречу в календарь.', cloze: 'trage' } },
    { id: 'inf-a12-06-erinnerung', icon: 'BellRing', de: 'Erinnerung', pos: 'noun', article: 'die', plural: 'Erinnerungen', ru: 'напоминание; воспоминание', collocation: { de: 'eine Erinnerung bekommen', ru: 'получить напоминание' }, example: { de: 'Das Handy zeigt eine Erinnerung.', ru: 'Телефон показывает напоминание.', cloze: 'Erinnerung' } },
    { id: 'inf-a12-06-wochentag', icon: 'CalendarRange', de: 'Wochentag', pos: 'noun', article: 'der', plural: 'Wochentage', ru: 'день недели', parts: ['Wochen', 'tag'], example: { de: 'Welcher Wochentag ist heute?', ru: 'Какой сегодня день недели?', cloze: 'Wochentag' } },
    { id: 'inf-a12-06-verschieben', icon: 'CalendarArrowUp', de: 'verschieben', pos: 'verb', ru: 'переносить (на другое время)', forms: 'er verschiebt · hat verschoben', note: 'Неотделяемая приставка ver-; verschieben auf + Akk — перенести на …', collocation: { de: 'den Termin verschieben', ru: 'перенести встречу', accept: ['einen Termin verschieben'] }, example: { de: 'Wir verschieben das Treffen auf Freitag.', ru: 'Мы переносим встречу на пятницу.', cloze: 'verschieben' } },

    { id: 'inf-a12-06-absagen', icon: 'CalendarX', de: 'absagen', pos: 'verb', ru: 'отменять (встречу), отказываться', forms: 'er sagt ab · hat abgesagt', note: 'Отделяемая приставка: ich sage den Termin ab.', collocation: { de: 'einen Termin absagen', ru: 'отменить встречу', accept: ['den Termin absagen'] }, example: { de: 'Leider muss ich den Termin absagen.', ru: 'К сожалению, мне придётся отменить встречу.', cloze: 'absagen' } },
    { id: 'inf-a12-06-puenktlich', icon: 'Timer', de: 'pünktlich', pos: 'adj', ru: 'пунктуальный; вовремя', collocation: { de: 'pünktlich sein', ru: 'приходить вовремя' }, example: { de: 'Der Bus ist heute pünktlich.', ru: 'Автобус сегодня пришёл вовремя.', cloze: 'pünktlich' } },
    { id: 'inf-a12-06-wecker', icon: 'AlarmClock', imageQuery: 'alarm clock', de: 'Wecker', pos: 'noun', article: 'der', plural: 'Wecker', ru: 'будильник', collocation: { de: 'den Wecker stellen', ru: 'поставить будильник', accept: ['einen Wecker stellen'] }, example: { de: 'Mein Wecker klingelt um sieben.', ru: 'Мой будильник звонит в семь.', cloze: 'Wecker' } },
    { id: 'inf-a12-06-geburtstag', icon: 'Cake', imageQuery: 'birthday cake with candles', de: 'Geburtstag', pos: 'noun', article: 'der', plural: 'Geburtstage', ru: 'день рождения', parts: ['Geburts', 'tag'], collocation: { de: 'Alles Gute zum Geburtstag!', ru: 'С днём рождения!' }, example: { de: 'Am Samstag hat Paul Geburtstag.', ru: 'В субботу у Пауля день рождения.', cloze: 'Geburtstag' } },
    { id: 'inf-a12-06-einladung', icon: 'MailOpen', imageQuery: 'invitation card', de: 'Einladung', pos: 'noun', article: 'die', plural: 'Einladungen', ru: 'приглашение', collocation: { de: 'eine Einladung schicken', ru: 'отправить приглашение', accept: ['eine Einladung senden'] }, example: { de: 'Danke für die Einladung!', ru: 'Спасибо за приглашение!', cloze: 'Einladung' } },
    { id: 'inf-a12-06-stundenplan', icon: 'Table', imageQuery: 'school timetable', de: 'Stundenplan', pos: 'noun', article: 'der', plural: 'Stundenpläne', ru: 'расписание уроков', parts: ['Stunden', 'plan'], example: { de: 'Mein Stundenplan ist am Montag sehr voll.', ru: 'В понедельник у меня очень плотное расписание.', cloze: 'Stundenplan' } },
    { id: 'inf-a12-06-frei', icon: 'CircleCheck', de: 'frei', pos: 'adj', ru: 'свободный (о времени); бесплатный', note: 'Ich habe frei — у меня выходной.', example: { de: 'Am Freitag habe ich frei.', ru: 'В пятницу у меня выходной.', cloze: 'frei' } },
    { id: 'inf-a12-06-ferien', icon: 'Sun', imageQuery: 'children summer holidays beach', de: 'Ferien', pos: 'noun', article: 'die', pluralOnly: true, ru: 'каникулы', note: 'Только мн. ч.: die Ferien.', collocation: { de: 'in den Ferien', ru: 'на каникулах' }, example: { de: 'In den Ferien fahren wir nach Graz.', ru: 'На каникулах мы едем в Грац.', cloze: 'Ferien' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Davids Kalender',
      de: `David ist sechzehn und wohnt in Wien. Er hat einen Kalender auf dem Handy. Seine Mutter sagt: „Du hast einen Termin beim Zahnarzt. Das Datum ist der zehnte März, um vier Uhr.“ David trägt den Termin sofort ein. Die App zeigt auch den Wochentag: Dienstag.

Am Montagabend bekommt David eine Erinnerung. Aber am Dienstag um vier hat er Fußball! Das ist genau dieselbe Uhrzeit. David ruft beim Zahnarzt an und verschiebt den Termin auf Freitag. Dann ändert er das Datum im Kalender. Jetzt passt alles.`,
      ru: `Давиду шестнадцать, он живёт в Вене. У него на телефоне есть календарь. Мама говорит: «Ты записан к зубному врачу. Дата — десятое марта, в четыре часа». Давид сразу вносит запись. Приложение показывает и день недели: вторник.

В понедельник вечером Давид получает напоминание. Но во вторник в четыре у него футбол! Это ровно то же самое время. Давид звонит зубному врачу и переносит приём на пятницу. Потом он меняет дату в календаре. Теперь всё сходится.`,
      gloss: {
        david: 'Давид (имя)', davids: 'Давида (чей?)', sechzehn: 'шестнадцать', wien: 'Вена', handy: 'мобильный телефон', hast: '(ты) имеешь; (einen Termin haben) ты записан',
        beim: 'у (bei dem)', zahnarzt: 'зубной врач', zehnte: 'десятое', märz: 'март', uhr: 'час (о времени); часы', trägt: 'вносит (eintragen)', ein: 'одна; (trägt … ein) приставка от eintragen',
        app: 'приложение', dienstag: 'вторник', montagabend: 'вечер понедельника', fußball: 'футбол', dieselbe: 'та же самая', ruft: 'звонит (anrufen)', an: 'на; (ruft … an) приставка от anrufen',
        verschiebt: 'переносит', freitag: 'пятница', ändert: 'меняет', passt: 'подходит, сходится', welchem: 'какой (дат.)', krank: 'больной, болен', heft: 'тетрадь',
      },
      questions: [
        { q: 'Wo hat David seinen Kalender?', ru: 'Где у Давида календарь?', options: ['Auf dem Handy', 'Im Heft', 'Auf dem Computer'], answer: 'Auf dem Handy' },
        { q: 'An welchem Wochentag ist der Termin zuerst?', ru: 'На какой день недели сначала назначен приём?', options: ['Am Dienstag', 'Am Montag', 'Am Freitag'], answer: 'Am Dienstag' },
        { q: 'Warum verschiebt David den Termin?', ru: 'Почему Давид переносит приём?', options: ['Er hat dann Fußball.', 'Er ist krank.', 'Der Zahnarzt hat keine Zeit.'], answer: 'Er hat dann Fußball.' },
      ],
      translate: [
        { de: 'David trägt den Termin in den Kalender ein.', ru: 'Давид записывает приём в календарь.', wrongRu: ['Давид удаляет приём из календаря.', 'Давид переносит приём в календаре.'] },
        { de: 'Er verschiebt den Termin auf Freitag.', ru: 'Он переносит приём на пятницу.', wrongRu: ['Он отменяет приём в пятницу.', 'Он переносит приём на вторник.'] },
        { de: 'Am Abend bekommt er eine Erinnerung.', ru: 'Вечером он получает напоминание.', wrongRu: ['Утром он получает напоминание.', 'Вечером он отправляет напоминание.'] },
      ],
    },
    {
      lesson: 1, title: 'Sophies Geburtstag',
      de: `Sophie hat am Samstag Geburtstag. Sie schreibt eine Einladung in die Klassengruppe: „Party bei mir, Samstag um sieben!“ Viele Freunde antworten sofort. Nur Paul sagt ab. Er muss am Samstag arbeiten und hat nicht frei.

Am Freitag hat Sophie noch Schule. Laut Stundenplan hat sie sechs Stunden, auch Mathe. Am Samstag stellt sie keinen Wecker und schläft lange.

Am Abend kommen die Gäste. Alle sind pünktlich. Sie essen Kuchen und sprechen über die Ferien im Sommer. Am Ende kommt doch noch Paul. Er hat ein Geschenk für Sophie.`,
      ru: `У Софи в субботу день рождения. Она пишет приглашение в группу класса: «Вечеринка у меня, в субботу в семь!» Многие друзья сразу отвечают. Только Пауль отказывается. Ему нужно работать в субботу, и у него нет выходного.

В пятницу у Софи ещё школа. По расписанию у неё шесть уроков, в том числе математика. В субботу она не ставит будильник и долго спит.

Вечером приходят гости. Все приходят вовремя. Они едят торт и говорят о летних каникулах. В конце всё-таки приходит Пауль. У него подарок для Софи.`,
      gloss: {
        sophie: 'Софи (имя)', sophies: 'Софи (чей?)', samstag: 'суббота', klassengruppe: 'группа (чат) класса', party: 'вечеринка', mir: 'мне; (bei mir) у меня',
        paul: 'Пауль (имя)', sagt: 'говорит; (sagt ab) отказывается, отменяет', ab: 'приставка от absagen', freitag: 'пятница', laut: 'согласно, по (laut Stundenplan)',
        stunden: 'уроки, часы', mathe: 'математика', stellt: 'ставит', schläft: 'спит', gäste: 'гости', essen: 'едят', kuchen: 'торт, пирог', sprechen: 'говорят',
        sommer: 'лето', geschenk: 'подарок', sonntag: 'воскресенье', krank: 'больной, болен', fußball: 'футбол', spät: 'поздно, опоздавшие', müde: 'усталые',
      },
      questions: [
        { q: 'Wann hat Sophie Geburtstag?', ru: 'Когда у Софи день рождения?', options: ['Am Samstag', 'Am Freitag', 'Am Sonntag'], answer: 'Am Samstag' },
        { q: 'Warum sagt Paul zuerst ab?', ru: 'Почему Пауль сначала отказывается?', options: ['Er muss arbeiten.', 'Er ist krank.', 'Er hat Schule.'], answer: 'Er muss arbeiten.' },
        { q: 'Was machen die Gäste?', ru: 'Что делают гости?', options: ['Sie essen Kuchen.', 'Sie spielen Fußball.', 'Sie machen Hausaufgaben.'], answer: 'Sie essen Kuchen.' },
        { q: 'Wie sind die Gäste?', ru: 'Какие гости?', options: ['Pünktlich', 'Spät', 'Müde'], answer: 'Pünktlich' },
      ],
      translate: [
        { de: 'Sophie schreibt eine Einladung.', ru: 'Софи пишет приглашение.', wrongRu: ['Софи получает приглашение.', 'Софи пишет напоминание.'] },
        { de: 'Paul hat am Samstag nicht frei.', ru: 'Пауль в субботу не свободен.', wrongRu: ['Пауль в субботу свободен.', 'Пауль в пятницу не свободен.'] },
        { de: 'Alle Gäste sind pünktlich.', ru: 'Все гости приходят вовремя.', wrongRu: ['Все гости опаздывают.', 'Не все гости приходят вовремя.'] },
      ],
    },
  ],
};
