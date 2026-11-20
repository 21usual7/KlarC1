import type { Module } from '../types.ts';

// A1.2 mathe 03: reading a clock and measuring time on a sports day (lesson 0), a train timetable and time zones (lesson 1).

export const module: Module = {
  id: 'mathe-a12-03-uhrzeit', sphere: 'mathe', level: 'A1.2',
  title: 'Uhrzeit und Dauer', subtitle: 'Четверть, половина, секунда, расписание и опоздание: время в цифрах.',
  words: [
    { id: 'mat-a12-03-uhr', icon: 'Clock', imageQuery: 'wall clock', de: 'Uhr', pos: 'noun', article: 'die', plural: 'Uhren', ru: 'часы; (во времени) час', note: 'Um drei Uhr — в три часа. Wie viel Uhr ist es? — Который час?', collocation: { de: 'auf die Uhr schauen', ru: 'посмотреть на часы', accept: ['auf die Uhr sehen'] }, example: { de: 'Die Uhr an der Wand ist zu langsam.', ru: 'Часы на стене отстают.', cloze: 'Uhr' } },
    { id: 'mat-a12-03-zeiger', icon: 'Clock3', imageQuery: 'clock hands', de: 'Zeiger', pos: 'noun', article: 'der', plural: 'Zeiger', ru: 'стрелка (часов)', note: 'der große Zeiger — минутная стрелка, der kleine Zeiger — часовая.', example: { de: 'Der kleine Zeiger steht auf der Drei.', ru: 'Маленькая стрелка стоит на тройке.', cloze: 'Zeiger' } },
    { id: 'mat-a12-03-viertel', icon: 'ChartPie', imageQuery: 'quarter of pizza', de: 'Viertel', pos: 'noun', article: 'das', plural: 'Viertel', ru: 'четверть', note: 'Viertel nach acht — 8:15, Viertel vor neun — 8:45.', example: { de: 'Der Unterricht beginnt um Viertel nach acht.', ru: 'Урок начинается в четверть девятого.', cloze: 'Viertel' } },
    { id: 'mat-a12-03-halb', icon: 'Clock6', de: 'halb', pos: 'adj', ru: 'половина; (о времени) половина следующего часа', note: 'Ловушка: halb neun = 8:30, как в русском «половина девятого».', example: { de: 'Es ist halb neun.', ru: 'Сейчас половина девятого.', cloze: 'halb' } },
    { id: 'mat-a12-03-sekunde', icon: 'Timer', imageQuery: 'stopwatch', de: 'Sekunde', pos: 'noun', article: 'die', plural: 'Sekunden', ru: 'секунда', note: 'Eine Minute hat sechzig Sekunden.', example: { de: 'Sara läuft hundert Meter in vierzehn Sekunden.', ru: 'Сара пробегает сто метров за четырнадцать секунд.', cloze: 'Sekunden' } },
    { id: 'mat-a12-03-stoppuhr', icon: 'TimerReset', imageQuery: 'stopwatch', de: 'Stoppuhr', pos: 'noun', article: 'die', plural: 'Stoppuhren', ru: 'секундомер', parts: ['Stopp', 'uhr'], example: { de: 'Der Lehrer hat eine Stoppuhr in der Hand.', ru: 'У учителя в руке секундомер.', cloze: 'Stoppuhr' } },
    { id: 'mat-a12-03-dauer', icon: 'Hourglass', imageQuery: 'hourglass', de: 'Dauer', pos: 'noun', article: 'die', ru: 'продолжительность', note: 'Обычно без мн. ч. Глагол: dauern.', example: { de: 'Die Dauer der Pause ist zwanzig Minuten.', ru: 'Продолжительность перемены — двадцать минут.', cloze: 'Dauer' } },
    { id: 'mat-a12-03-dauern', icon: 'Loader', de: 'dauern', pos: 'verb', ru: 'длиться, продолжаться', forms: 'es dauert · hat gedauert', note: 'Wie lange dauert …? — Сколько длится …?', collocation: { de: 'lange dauern', ru: 'долго длиться', accept: ['sehr lange dauern'] }, example: { de: 'Die Fahrt dauert zwei Stunden.', ru: 'Поездка длится два часа.', cloze: 'dauert' } },
    { id: 'mat-a12-03-fahrplan', icon: 'TableProperties', imageQuery: 'train timetable board', de: 'Fahrplan', pos: 'noun', article: 'der', plural: 'Fahrpläne', ru: 'расписание (транспорта)', parts: ['Fahr', 'plan'], note: 'laut Fahrplan — по расписанию.', example: { de: 'Laut Fahrplan kommt der Bus um zehn.', ru: 'По расписанию автобус приходит в десять.', cloze: 'Fahrplan' } },
    { id: 'mat-a12-03-abfahrt', icon: 'TrainFront', imageQuery: 'departure board', de: 'Abfahrt', pos: 'noun', article: 'die', plural: 'Abfahrten', ru: 'отправление', note: 'Глагол: abfahren — отправляться.', example: { de: 'Die Abfahrt ist um 10:08 Uhr.', ru: 'Отправление в 10:08.', cloze: 'Abfahrt' } },
    { id: 'mat-a12-03-ankunft', icon: 'MapPinCheck', imageQuery: 'arrivals hall airport', de: 'Ankunft', pos: 'noun', article: 'die', plural: 'Ankünfte', ru: 'прибытие', note: 'Глагол: ankommen — прибывать.', example: { de: 'Die Ankunft in Salzburg ist um eins.', ru: 'Прибытие в Зальцбург — в час.', cloze: 'Ankunft' } },
    { id: 'mat-a12-03-verspaetung', icon: 'AlarmClockOff', imageQuery: 'train delay', de: 'Verspätung', pos: 'noun', article: 'die', plural: 'Verspätungen', ru: 'опоздание, задержка', note: 'Der Zug hat Verspätung — поезд опаздывает.', collocation: { de: 'Verspätung haben', ru: 'опаздывать', accept: ['zehn Minuten Verspätung haben'] }, example: { de: 'Der Zug hat zwanzig Minuten Verspätung.', ru: 'Поезд опаздывает на двадцать минут.', cloze: 'Verspätung' } },
    { id: 'mat-a12-03-puenktlich', icon: 'CalendarCheck', de: 'pünktlich', pos: 'adj', ru: 'пунктуальный; вовремя', example: { de: 'Der Zug ist heute pünktlich.', ru: 'Поезд сегодня приходит вовремя.', cloze: 'pünktlich' } },
    { id: 'mat-a12-03-umsteigen', icon: 'ArrowLeftRight', de: 'umsteigen', pos: 'verb', ru: 'делать пересадку', forms: 'er steigt um · ist umgestiegen', note: 'Perfekt с sein: ist umgestiegen.', example: { de: 'In Linz müssen wir umsteigen.', ru: 'В Линце нам нужно пересесть.', cloze: 'umsteigen' } },
    { id: 'mat-a12-03-zeitunterschied', icon: 'Earth', imageQuery: 'world clocks', de: 'Zeitunterschied', pos: 'noun', article: 'der', plural: 'Zeitunterschiede', ru: 'разница во времени', parts: ['Zeit', 'unterschied'], example: { de: 'Der Zeitunterschied nach New York ist sechs Stunden.', ru: 'Разница во времени с Нью-Йорком — шесть часов.', cloze: 'Zeitunterschied' } },
    { id: 'mat-a12-03-mitternacht', icon: 'Moon', imageQuery: 'clock midnight', de: 'Mitternacht', pos: 'noun', article: 'die', ru: 'полночь', note: 'um Mitternacht — в полночь.', example: { de: 'Um Mitternacht ist es null Uhr.', ru: 'В полночь — ноль часов.', cloze: 'Mitternacht' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Der Sporttag',
      de: `Heute ist Sporttag in der Schule. Um Viertel nach acht beginnt der Lauf. Herr Huber hat eine Stoppuhr. Die Kinder laufen hundert Meter.

Jonas läuft schnell. Die Stoppuhr zeigt fünfzehn Sekunden. Sara braucht nur vierzehn Sekunden. Sie gewinnt!

Danach schaut Jonas auf die Uhr an der Wand. Der große Zeiger steht auf der Sechs, der kleine Zeiger zwischen acht und neun. Es ist halb neun. Jonas fragt: „Wie lange dauert die Pause?“ Herr Huber sagt: „Eine halbe Stunde. Um neun Uhr geht es weiter.“ Die Dauer ist lang genug für ein Brot und ein Wasser.`,
      ru: `Сегодня в школе спортивный день. В четверть девятого начинается забег. У господина Хубера есть секундомер. Дети бегут сто метров.

Йонас бежит быстро. Секундомер показывает пятнадцать секунд. Саре нужно всего четырнадцать секунд. Она побеждает!

Потом Йонас смотрит на часы на стене. Большая стрелка стоит на шестёрке, маленькая — между восемью и девятью. Сейчас половина девятого. Йонас спрашивает: «Сколько длится перерыв?» Господин Хубер говорит: «Полчаса. В девять часов продолжаем». Этого времени хватает на бутерброд и воду.`,
      gloss: { sporttag: 'спортивный день', beginnt: 'начинается', lauf: 'забег, бег', huber: 'Хубер (фамилия)', kinder: 'дети', laufen: 'бегут; бегать', meter: 'метр, метров', jonas: 'Йонас (имя)', läuft: 'бежит', schnell: 'быстро', zeigt: 'показывает', sara: 'Сара (имя)', braucht: 'нужно, требуется', nur: 'только', gewinnt: 'побеждает', danach: 'потом, после этого', schaut: 'смотрит', wand: 'стена', großen: 'большой', große: 'большой', kleine: 'маленький', steht: 'стоит', zwischen: 'между', lange: 'долго', pause: 'перерыв, перемена', halbe: 'половина (eine halbe Stunde — полчаса)', geht: 'идёт (es geht weiter — продолжаем)', weiter: 'дальше', lang: 'длинный, долгий', genug: 'достаточно', brot: 'бутерброд, хлеб', wasser: 'вода', wer: 'кто', wann: 'когда' },
      questions: [
        { q: 'Wann beginnt der Lauf?', ru: 'Когда начинается забег?', options: ['Um Viertel nach acht', 'Um halb neun', 'Um neun Uhr'], answer: 'Um Viertel nach acht' },
        { q: 'Wer gewinnt?', ru: 'Кто побеждает?', options: ['Sara', 'Jonas', 'Herr Huber'], answer: 'Sara' },
        { q: 'Wie lange dauert die Pause?', ru: 'Сколько длится перерыв?', options: ['Eine halbe Stunde', 'Fünfzehn Sekunden', 'Eine Stunde'], answer: 'Eine halbe Stunde' },
      ],
      translate: [
        { de: 'Die Stoppuhr zeigt fünfzehn Sekunden.', ru: 'Секундомер показывает пятнадцать секунд.', wrongRu: ['Секундомер показывает пятнадцать минут.', 'Часы показывают пятнадцать секунд.'] },
        { de: 'Es ist halb neun.', ru: 'Сейчас половина девятого.', wrongRu: ['Сейчас половина десятого.', 'Сейчас девять часов.'] },
        { de: 'Die Pause dauert eine halbe Stunde.', ru: 'Перерыв длится полчаса.', wrongRu: ['Перерыв длится час.', 'Урок длится полчаса.'] },
      ],
    },
    {
      lesson: 1, title: 'Mit dem Zug nach Salzburg',
      de: `Familie Berger fährt mit dem Zug von Wien nach Salzburg. Laut Fahrplan ist die Abfahrt um 10:08 Uhr. Der Zug ist pünktlich. Die Fahrt dauert zweieinhalb Stunden.

In Linz müssen sie umsteigen. Aber heute hat der zweite Zug Verspätung: zwanzig Minuten! Papa rechnet: Die Ankunft ist jetzt nicht um 12:38 Uhr, sondern um 12:58 Uhr.

In der Nacht kann Anna nicht schlafen. Es ist Mitternacht. Sie schreibt ihrer Freundin in New York. Dort ist es erst sechs Uhr am Abend. Der Zeitunterschied ist sechs Stunden.`,
      ru: `Семья Бергер едет на поезде из Вены в Зальцбург. По расписанию отправление в 10:08. Поезд приходит вовремя. Поездка длится два с половиной часа.

В Линце им нужно пересесть. Но сегодня второй поезд опаздывает на двадцать минут! Папа считает: прибытие теперь не в 12:38, а в 12:58.

Ночью Анна не может уснуть. Полночь. Она пишет своей подруге в Нью-Йорк. Там ещё только шесть часов вечера. Разница во времени — шесть часов.`,
      gloss: { familie: 'семья', berger: 'Бергер (фамилия)', fährt: 'едет', zug: 'поезд', von: 'из, от', nach: 'в (о городе); после', wien: 'Вена', salzburg: 'Зальцбург', laut: 'согласно, по', fahrt: 'поездка', zweieinhalb: 'два с половиной', linz: 'Линц', müssen: 'должны, нужно', aber: 'но', zweite: 'второй', papa: 'папа', rechnet: 'считает, вычисляет', sondern: 'а (после отрицания)', nacht: 'ночь', anna: 'Анна (имя)', kann: 'может', schlafen: 'спать', schreibt: 'пишет', ihrer: 'своей', freundin: 'подруга', new: 'Нью (New York — Нью-Йорк)', york: 'Йорк (New York — Нью-Йорк)', dort: 'там', erst: 'только (ещё только)', abend: 'вечер', wo: 'где', wie: 'как', groß: 'большой (wie groß — какой величины)' },
      questions: [
        { q: 'Wann ist die Abfahrt?', ru: 'Когда отправление?', options: ['Um 10:08 Uhr', 'Um 12:38 Uhr', 'Um 12:58 Uhr'], answer: 'Um 10:08 Uhr' },
        { q: 'Wo müssen sie umsteigen?', ru: 'Где им нужно пересесть?', options: ['In Linz', 'In Wien', 'In Salzburg'], answer: 'In Linz' },
        { q: 'Wie groß ist der Zeitunterschied?', ru: 'Какова разница во времени?', options: ['Sechs Stunden', 'Zwanzig Minuten', 'Zwei Stunden'], answer: 'Sechs Stunden' },
      ],
      translate: [
        { de: 'Der Zug hat zwanzig Minuten Verspätung.', ru: 'Поезд опаздывает на двадцать минут.', wrongRu: ['Поезд приходит на двадцать минут раньше.', 'Автобус опаздывает на двадцать минут.'] },
        { de: 'In Linz müssen wir umsteigen.', ru: 'В Линце нам нужно пересесть.', wrongRu: ['В Линце нам нужно выйти.', 'В Вене нам нужно пересесть.'] },
        { de: 'Laut Fahrplan ist der Zug pünktlich.', ru: 'По расписанию поезд приходит вовремя.', wrongRu: ['По расписанию поезд опаздывает.', 'Поезд всегда приходит вовремя.'] },
      ],
    },
  ],
};
