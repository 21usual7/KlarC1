import type { Module } from '../types.ts';

// A1.1 alltag 07: time — days, weeks, appointments (lesson 0); birthday, date, calendar (lesson 1).

export const module: Module = {
  id: 'alltag-a11-07-zeit', sphere: 'alltag', level: 'A1.1',
  title: 'Zeit und Termine', subtitle: 'Время: дни, недели, месяцы, встречи, дата и день рождения.',
  words: [
    { id: 'all-a11-07-uhr', icon: 'Clock', de: 'Uhr', pos: 'noun', article: 'die', plural: 'Uhren', ru: 'часы; (о времени) час', note: 'Wie spät ist es? — Es ist drei Uhr.', example: { de: 'Der Kurs beginnt um neun Uhr.', ru: 'Курс начинается в девять часов.', cloze: 'Uhr' } },
    { id: 'all-a11-07-tag', icon: 'Sun', de: 'Tag', pos: 'noun', article: 'der', plural: 'Tage', ru: 'день', note: 'Guten Tag! — Добрый день!', example: { de: 'Jeden Tag lerne ich Deutsch.', ru: 'Каждый день я учу немецкий.', cloze: 'Tag' } },
    { id: 'all-a11-07-woche', icon: 'CalendarDays', de: 'Woche', pos: 'noun', article: 'die', plural: 'Wochen', ru: 'неделя', example: { de: 'Nächste Woche habe ich frei.', ru: 'На следующей неделе я свободен.', cloze: 'Woche' } },
    { id: 'all-a11-07-monat', icon: 'Calendar', de: 'Monat', pos: 'noun', article: 'der', plural: 'Monate', ru: 'месяц', example: { de: 'Wir sind seit einem Monat in Leipzig.', ru: 'Мы уже месяц в Лейпциге.', cloze: 'Monat' } },
    { id: 'all-a11-07-jahr', icon: 'CalendarRange', de: 'Jahr', pos: 'noun', article: 'das', plural: 'Jahre', ru: 'год', example: { de: 'Ein Jahr hat zwölf Monate.', ru: 'В году двенадцать месяцев.', cloze: 'Jahr' } },
    { id: 'all-a11-07-heute', icon: 'CalendarCheck', de: 'heute', pos: 'adv', ru: 'сегодня', example: { de: 'Heute ist Montag.', ru: 'Сегодня понедельник.', cloze: 'Heute' } },
    { id: 'all-a11-07-morgen', icon: 'ArrowRight', de: 'morgen', pos: 'adv', ru: 'завтра', example: { de: 'Morgen habe ich einen Termin.', ru: 'Завтра у меня встреча.', cloze: 'Morgen' } },
    { id: 'all-a11-07-termin', icon: 'CalendarClock', de: 'Termin', pos: 'noun', article: 'der', plural: 'Termine', ru: 'встреча, приём (в назначенное время)', example: { de: 'Ich habe um zehn Uhr einen Termin beim Arzt.', ru: 'У меня в десять часов приём у врача.', cloze: 'Termin' } },

    { id: 'all-a11-07-gestern', icon: 'ArrowLeft', de: 'gestern', pos: 'adv', ru: 'вчера', example: { de: 'Gestern war ich beim Amt.', ru: 'Вчера я был в ведомстве.', cloze: 'Gestern' } },
    { id: 'all-a11-07-frueh', icon: 'Sunrise', de: 'früh', pos: 'adj', ru: 'рано', example: { de: 'Wir stehen früh auf.', ru: 'Мы рано встаём.', cloze: 'früh' } },
    { id: 'all-a11-07-spaet', icon: 'Sunset', de: 'spät', pos: 'adj', ru: 'поздно', note: 'Wie spät ist es? — Который час?', example: { de: 'Wie spät ist es?', ru: 'Который час?', cloze: 'spät' } },
    { id: 'all-a11-07-puenktlich', icon: 'AlarmClockCheck', de: 'pünktlich', pos: 'adj', ru: 'пунктуальный, вовремя', example: { de: 'In Deutschland ist man pünktlich.', ru: 'В Германии приходят вовремя.', cloze: 'pünktlich' } },
    { id: 'all-a11-07-wochenende', icon: 'Sofa', de: 'Wochenende', pos: 'noun', article: 'das', plural: 'Wochenenden', ru: 'выходные', parts: ['Wochen', 'ende'], example: { de: 'Am Wochenende besuchen wir Freunde.', ru: 'На выходных мы ходим в гости к друзьям.', cloze: 'Wochenende' } },
    { id: 'all-a11-07-geburtstag', icon: 'Cake', de: 'Geburtstag', pos: 'noun', article: 'der', plural: 'Geburtstage', ru: 'день рождения', note: 'Alles Gute zum Geburtstag! — С днём рождения!', example: { de: 'Wann hast du Geburtstag?', ru: 'Когда у тебя день рождения?', cloze: 'Geburtstag' } },
    { id: 'all-a11-07-datum', icon: 'CalendarDays', de: 'Datum', pos: 'noun', article: 'das', plural: 'Daten', ru: 'дата', note: 'Welches Datum ist heute? — Какое сегодня число?', example: { de: 'Welches Datum ist heute?', ru: 'Какое сегодня число?', cloze: 'Datum' } },
    { id: 'all-a11-07-kalender', icon: 'Calendar', de: 'Kalender', pos: 'noun', article: 'der', plural: 'Kalender', ru: 'календарь', example: { de: 'Ich schreibe den Termin in den Kalender.', ru: 'Я записываю встречу в календарь.', cloze: 'Kalender' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Eine volle Woche',
      de: `Amir hat eine volle Woche. Jeden Tag von neun bis zwölf Uhr hat er Deutschkurs. Am Montag hat er auch einen Termin beim Amt. Heute ist Dienstag.

Morgen, am Mittwoch, hat Nour einen Termin beim Arzt. Leyla geht mit. Am Donnerstag ist Elternabend in der Schule.

Amir sagt: „Wir sind jetzt seit einem Monat in Deutschland. Die Zeit geht so schnell!“`,
      ru: `У Амира насыщенная неделя. Каждый день с девяти до двенадцати у него курс немецкого. В понедельник у него ещё встреча в ведомстве. Сегодня вторник.

Завтра, в среду, у Нур приём у врача. Лейла идёт с ней. В четверг родительское собрание в школе.

Амир говорит: «Мы уже месяц в Германии. Время летит так быстро!»`,
      gloss: { karim: 'Карим (имя)', amir: 'Амир (имя)', nour: 'Нур (имя)', leyla: 'Лейла (имя)', volle: 'полная, насыщенная', deutschkurs: 'курс немецкого', amt: 'ведомство', dienstag: 'вторник', mittwoch: 'среда', arzt: 'врач', donnerstag: 'четверг', elternabend: 'родительское собрание', schule: 'школа', deutschland: 'Германия', schnell: 'быстро' },
      questions: [
        { q: 'Welcher Tag ist heute?', ru: 'Какой сегодня день?', options: ['Dienstag', 'Montag', 'Mittwoch'], answer: 'Dienstag' },
        { q: 'Wer hat am Mittwoch einen Termin beim Arzt?', ru: 'У кого в среду приём у врача?', options: ['Nour', 'Amir', 'Karim'], answer: 'Nour' },
        { q: 'Wie lange ist die Familie schon in Deutschland?', ru: 'Сколько семья уже в Германии?', options: ['Einen Monat', 'Ein Jahr', 'Eine Woche'], answer: 'Einen Monat' },
      ],
      translate: [
        { de: 'Morgen habe ich einen Termin.', ru: 'Завтра у меня встреча.', wrongRu: ['Вчера у меня была встреча.', 'Сегодня у меня встреча.'] },
        { de: 'Heute ist Dienstag.', ru: 'Сегодня вторник.', wrongRu: ['Завтра вторник.', 'Сегодня четверг.'] },
        { de: 'Wir sind seit einem Monat hier.', ru: 'Мы уже месяц здесь.', wrongRu: ['Мы будем здесь месяц.', 'Мы уже год здесь.'] },
      ],
    },
    {
      lesson: 1, title: 'Ein Geburtstag',
      de: `Gestern hat Frau Schulz gefragt: „Wann hat Karim Geburtstag?“ Leyla schaut in den Kalender. „Am zehnten Mai. Er wird sechs.“

„Welches Datum ist heute?“ – „Der dritte Mai.“ – „Dann ist der Geburtstag schon nächste Woche!“

Frau Schulz kommt am zehnten Mai pünktlich um drei Uhr mit einem Geschenk. Karim ist sehr froh. Es ist ein schöner Tag.`,
      ru: `Вчера госпожа Шульц спросила: «Когда у Карима день рождения?» Лейла смотрит в календарь. «Десятого мая. Ему исполнится шесть».

«Какое сегодня число?» — «Третье мая». — «Значит, день рождения уже на следующей неделе!»

Десятого мая госпожа Шульц приходит точно в три часа с подарком. Карим очень рад. Прекрасный день.`,
      gloss: { dritten: 'третьему', juni: 'июнь', schulz: 'Шульц (фамилия)', karim: 'Карим (имя)', leyla: 'Лейла (имя)', gefragt: 'спросила', schaut: 'смотрит', zehnten: 'десятого', mai: 'май', wird: 'исполнится, станет', dritte: 'третье', nächste: 'следующей', geschenk: 'подарок', froh: 'рад', schöner: 'прекрасный' },
      questions: [
        { q: 'Wann hat Karim Geburtstag?', ru: 'Когда у Карима день рождения?', options: ['Am zehnten Mai', 'Am dritten Mai', 'Im Juni'], answer: 'Am zehnten Mai' },
        { q: 'Wie alt wird Karim?', ru: 'Сколько исполнится Кариму?', options: ['Sechs', 'Fünf', 'Zehn'], answer: 'Sechs' },
        { q: 'Wann kommt Frau Schulz?', ru: 'Когда приходит госпожа Шульц?', options: ['Pünktlich um drei Uhr', 'Zu spät', 'Am Morgen'], answer: 'Pünktlich um drei Uhr' },
      ],
      translate: [
        { de: 'Wann hast du Geburtstag?', ru: 'Когда у тебя день рождения?', wrongRu: ['Сколько тебе лет?', 'Где твой день рождения?'] },
        { de: 'Welches Datum ist heute?', ru: 'Какое сегодня число?', wrongRu: ['Какой сегодня день недели?', 'Который час?'] },
        { de: 'Sie kommt pünktlich.', ru: 'Она приходит вовремя.', wrongRu: ['Она опаздывает.', 'Он приходит вовремя.'] },
      ],
    },
  ],
};
