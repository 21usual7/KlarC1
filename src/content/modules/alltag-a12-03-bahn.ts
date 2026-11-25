import type { Module } from '../types.ts';

// A1.2 alltag 03: travelling by train — platform, departure, delay (lesson 0); changing trains, return ticket, Deutschlandticket (lesson 1).

export const module: Module = {
  id: 'alltag-a12-03-bahn', sphere: 'alltag', level: 'A1.2',
  title: 'Mit dem Zug fahren', subtitle: 'Поездки на поезде: путь, отправление, опоздание, пересадка и Deutschlandticket.',
  words: [
    { id: 'all-a12-03-zug', icon: 'TrainFront', imageQuery: 'ICE train germany', de: 'Zug', pos: 'noun', article: 'der', plural: 'Züge', ru: 'поезд', example: { de: 'Der Zug nach Berlin fährt um zehn.', ru: 'Поезд в Берлин отправляется в десять.', cloze: 'Zug' } },
    { id: 'all-a12-03-gleis', icon: 'Rows3', de: 'Gleis', pos: 'noun', article: 'das', plural: 'Gleise', ru: 'путь (номер пути)', example: { de: 'Der Zug fährt von Gleis drei.', ru: 'Поезд отправляется с третьего пути.', cloze: 'Gleis' } },
    { id: 'all-a12-03-bahnsteig', icon: 'Signpost', de: 'Bahnsteig', pos: 'noun', article: 'der', plural: 'Bahnsteige', ru: 'платформа, перрон', parts: ['Bahn', 'steig'], example: { de: 'Wir warten auf dem Bahnsteig.', ru: 'Мы ждём на платформе.', cloze: 'Bahnsteig' } },
    { id: 'all-a12-03-abfahrt', icon: 'LogOut', de: 'Abfahrt', pos: 'noun', article: 'die', plural: 'Abfahrten', ru: 'отправление', example: { de: 'Die Abfahrt ist um zehn Uhr fünf.', ru: 'Отправление в десять ноль пять.', cloze: 'Abfahrt' } },
    { id: 'all-a12-03-ankunft', icon: 'LogIn', de: 'Ankunft', pos: 'noun', article: 'die', plural: 'Ankünfte', ru: 'прибытие', example: { de: 'Die Ankunft in Berlin ist um elf Uhr.', ru: 'Прибытие в Берлин в одиннадцать.', cloze: 'Ankunft' } },
    { id: 'all-a12-03-verspaetung', icon: 'Timer', de: 'Verspätung', pos: 'noun', article: 'die', plural: 'Verspätungen', ru: 'опоздание, задержка', note: 'Der Zug hat Verspätung. — Поезд опаздывает.', example: { de: 'Der Zug hat zwanzig Minuten Verspätung.', ru: 'Поезд опаздывает на двадцать минут.', cloze: 'Verspätung' } },
    { id: 'all-a12-03-durchsage', icon: 'Megaphone', de: 'Durchsage', pos: 'noun', article: 'die', plural: 'Durchsagen', ru: 'объявление (по громкой связи)', example: { de: 'Hören Sie die Durchsage?', ru: 'Вы слышите объявление?', cloze: 'Durchsage' } },
    { id: 'all-a12-03-ausfallen', icon: 'CircleOff', de: 'ausfallen', pos: 'verb', ru: 'отменяться (о поезде, уроке)', forms: 'er fällt aus · ist ausgefallen', example: { de: 'Der Zug fällt heute aus.', ru: 'Поезд сегодня отменён.', cloze: 'fällt' } },

    { id: 'all-a12-03-umsteigen', icon: 'ArrowLeftRight', de: 'umsteigen', pos: 'verb', ru: 'делать пересадку', forms: 'er steigt um · ist umgestiegen', example: { de: 'In Riesa müssen wir umsteigen.', ru: 'В Ризе нам нужно пересесть.', cloze: 'umsteigen' } },
    { id: 'all-a12-03-anschluss', icon: 'Link', de: 'Anschluss', pos: 'noun', article: 'der', plural: 'Anschlüsse', ru: 'пересадка, стыковка', note: 'den Anschluss verpassen — опоздать на пересадку.', example: { de: 'Wir haben den Anschluss verpasst.', ru: 'Мы опоздали на пересадку.', cloze: 'Anschluss' } },
    { id: 'all-a12-03-fahrplan', icon: 'CalendarClock', de: 'Fahrplan', pos: 'noun', article: 'der', plural: 'Fahrpläne', ru: 'расписание', parts: ['Fahr', 'plan'], example: { de: 'Ich schaue in der App auf den Fahrplan.', ru: 'Я смотрю расписание в приложении.', cloze: 'Fahrplan' } },
    { id: 'all-a12-03-einfach', icon: 'ArrowRight', de: 'einfach', pos: 'adj', ru: 'простой; (о билете) в одну сторону', note: 'Einmal einfach, bitte. — Один билет в одну сторону.', example: { de: 'Einmal nach Dresden, einfach.', ru: 'Один до Дрездена, в одну сторону.', cloze: 'einfach' } },
    { id: 'all-a12-03-rueckfahrkarte', icon: 'ArrowLeftRight', de: 'Rückfahrkarte', pos: 'noun', article: 'die', plural: 'Rückfahrkarten', ru: 'билет туда и обратно', parts: ['Rück', 'fahr', 'karte'], example: { de: 'Eine Rückfahrkarte ist oft billiger.', ru: 'Билет туда и обратно часто дешевле.', cloze: 'Rückfahrkarte' } },
    { id: 'all-a12-03-deutschlandticket', icon: 'Ticket', de: 'Deutschlandticket', pos: 'noun', article: 'das', plural: 'Deutschlandtickets', ru: 'Deutschlandticket (проездной на месяц)', parts: ['Deutschland', 'ticket'], note: 'Действует на весь региональный транспорт по Германии, но не на ICE/IC.', example: { de: 'Mit dem Deutschlandticket fahre ich mit allen Regionalzügen.', ru: 'С Deutschlandticket я езжу на всех региональных поездах.', cloze: 'Deutschlandticket' } },
    { id: 'all-a12-03-platz', icon: 'Armchair', de: 'Platz', pos: 'noun', article: 'der', plural: 'Plätze', ru: 'место; площадь', note: 'Ist hier noch frei? — Здесь свободно?', example: { de: 'Ist dieser Platz noch frei?', ru: 'Это место ещё свободно?', cloze: 'Platz' } },
    { id: 'all-a12-03-erreichen', icon: 'Target', de: 'erreichen', pos: 'verb', ru: 'успеть (на поезд), достичь', forms: 'er erreicht · hat erreicht', example: { de: 'Wir erreichen den Zug noch.', ru: 'Мы ещё успеваем на поезд.', cloze: 'erreichen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Der Zug hat Verspätung',
      de: `Amir möchte nach Berlin fahren. Dort wohnt sein Bruder. Er steht auf dem Bahnsteig. Die Abfahrt ist um zehn Uhr fünf von Gleis drei. Die Ankunft in Berlin ist um elf Uhr dreißig.

Dann kommt eine Durchsage: „Der ICE nach Berlin hat zwanzig Minuten Verspätung.“ Amir wartet.

Neben ihm steht eine Frau. Sie ist ärgerlich. „Mein Regionalzug fällt heute aus!“, sagt sie. „Das passiert oft.“`,
      ru: `Амир хочет поехать в Берлин. Там живёт его брат. Он стоит на платформе. Отправление в десять ноль пять с третьего пути. Прибытие в Берлин в одиннадцать тридцать.

Потом звучит объявление: «Поезд ICE в Берлин опаздывает на двадцать минут». Амир ждёт.

Рядом с ним стоит женщина. Она раздражена. «Мою электричку сегодня отменили! — говорит она. — Такое часто бывает».`,
      gloss: { amirs: 'Амира (чей?)', schulz: 'Шульц (фамилия)', amir: 'Амир (имя)', berlin: 'Берлин', ice: 'ICE (скоростной поезд)', ärgerlich: 'раздражённая', regionalzug: 'региональный поезд, электричка', passiert: 'случается' },
      questions: [
        { q: 'Wer wohnt in Berlin?', ru: 'Кто живёт в Берлине?', options: ['Amirs Bruder', 'Amirs Eltern', 'Frau Schulz'], answer: 'Amirs Bruder' },
        { q: 'Von welchem Gleis fährt der Zug?', ru: 'С какого пути отправляется поезд?', options: ['Von Gleis drei', 'Von Gleis zehn', 'Von Gleis fünf'], answer: 'Von Gleis drei' },
        { q: 'Wie viel Verspätung hat der ICE?', ru: 'На сколько опаздывает ICE?', options: ['Zwanzig Minuten', 'Fünf Minuten', 'Eine Stunde'], answer: 'Zwanzig Minuten' },
      ],
      translate: [
        { de: 'Der Zug hat Verspätung.', ru: 'Поезд опаздывает.', wrongRu: ['Поезд прибыл вовремя.', 'Автобус опаздывает.'] },
        { de: 'Der Zug fährt von Gleis drei.', ru: 'Поезд отправляется с третьего пути.', wrongRu: ['Поезд прибывает на третий путь.', 'Поезд отправляется с десятого пути.'] },
        { de: 'Mein Zug fällt heute aus.', ru: 'Мой поезд сегодня отменён.', wrongRu: ['Мой поезд сегодня опаздывает.', 'Мой поезд сегодня полный.'] },
      ],
    },
    {
      lesson: 1, title: 'Umsteigen in Riesa',
      de: `Leyla fährt mit Nour nach Dresden. Sie kauft keine Rückfahrkarte, denn sie hat ein Deutschlandticket. Damit fährt sie mit allen Regionalzügen.

Im Fahrplan steht: Sie müssen in Riesa umsteigen. Der Anschluss ist knapp, nur fünf Minuten. Leyla fragt einen Mann: „Ist dieser Platz noch frei?“ – „Ja, bitte.“

In Riesa laufen sie schnell zum anderen Gleis. Sie erreichen den Zug gerade noch! „Geschafft!“, sagt Nour.`,
      ru: `Лейла едет с Нур в Дрезден. Она не покупает билет туда и обратно, потому что у неё Deutschlandticket. С ним она ездит на всех региональных поездах.

В расписании указано: в Ризе нужно пересесть. Пересадка короткая, всего пять минут. Лейла спрашивает мужчину: «Это место ещё свободно?» — «Да, пожалуйста».

В Ризе они быстро бегут на другой путь. Они едва успевают на поезд! «Успели!» — говорит Нур.`,
      gloss: { berlin: 'Берлин', leyla: 'Лейла (имя)', nour: 'Нур (имя)', dresden: 'Дрезден', riesa: 'Риза (город)', halle: 'Галле (город)', damit: 'с ним', regionalzügen: 'региональных поездах', knapp: 'впритык, мало (времени)', anderen: 'другой', gerade: '(gerade noch) едва', geschafft: 'успели, справились' },
      questions: [
        { q: 'Warum kauft Leyla keine Fahrkarte?', ru: 'Почему Лейла не покупает билет?', options: ['Sie hat ein Deutschlandticket.', 'Nour fährt allein.', 'Der Zug ist kostenlos.'], answer: 'Sie hat ein Deutschlandticket.' },
        { q: 'Wo müssen sie umsteigen?', ru: 'Где им нужно пересесть?', options: ['In Riesa', 'In Halle', 'In Berlin'], answer: 'In Riesa' },
        { q: 'Wie viel Zeit haben sie zum Umsteigen?', ru: 'Сколько у них времени на пересадку?', options: ['Fünf Minuten', 'Eine Stunde', 'Zwanzig Minuten'], answer: 'Fünf Minuten' },
      ],
      translate: [
        { de: 'Wir müssen umsteigen.', ru: 'Нам нужно пересесть.', wrongRu: ['Нам нужно выйти.', 'Нам не нужно пересаживаться.'] },
        { de: 'Ist dieser Platz noch frei?', ru: 'Это место ещё свободно?', wrongRu: ['Это место занято?', 'Где моё место?'] },
        { de: 'Wir erreichen den Zug noch.', ru: 'Мы ещё успеваем на поезд.', wrongRu: ['Мы опоздали на поезд.', 'Мы ждём поезд.'] },
      ],
    },
  ],
};
