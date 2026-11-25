import type { Module } from '../types.ts';

// A1.1 pflege 03: time on the ward — clock, minutes, early and late (lesson 0); appointments, phone, temperature (lesson 1).

export const module: Module = {
  id: 'pflege-a11-03-uhrzeit', sphere: 'pflege', level: 'A1.1',
  title: 'Zahlen und Uhrzeit', subtitle: 'Который час, во сколько обход, какая температура: время и числа на работе.',
  words: [
    { id: 'pfl-a11-03-uhr', icon: 'Clock', imageQuery: 'wall clock hospital', de: 'Uhr', pos: 'noun', article: 'die', plural: 'Uhren', ru: 'часы; (о времени) час', note: 'Um acht Uhr — в восемь часов. Но: zwei Stunden — два часа (длительность).', collocation: { de: 'um sieben Uhr', ru: 'в семь часов', accept: ['um acht Uhr'] }, example: { de: 'Die Visite ist um neun Uhr.', ru: 'Обход в девять часов.', cloze: 'Uhr' } },
    { id: 'pfl-a11-03-minute', icon: 'Timer', de: 'Minute', pos: 'noun', article: 'die', plural: 'Minuten', ru: 'минута', collocation: { de: 'in fünf Minuten', ru: 'через пять минут', accept: ['in zehn Minuten'] }, example: { de: 'Ich komme in fünf Minuten.', ru: 'Я приду через пять минут.', cloze: 'Minuten' } },
    { id: 'pfl-a11-03-stunde', icon: 'Hourglass', de: 'Stunde', pos: 'noun', article: 'die', plural: 'Stunden', ru: 'час (длительность)', note: 'eine halbe Stunde — полчаса.', collocation: { de: 'eine halbe Stunde', ru: 'полчаса' }, example: { de: 'Die Pause dauert eine halbe Stunde.', ru: 'Перерыв длится полчаса.', cloze: 'Stunde' } },
    { id: 'pfl-a11-03-halb', icon: 'PieChart', de: 'halb', pos: 'adj', ru: 'половина; (о времени) половина следующего часа', note: 'halb acht = 7:30 (половина восьмого), не 8:30!', example: { de: 'Es ist halb acht.', ru: 'Сейчас половина восьмого.', cloze: 'halb' } },
    { id: 'pfl-a11-03-viertel', icon: 'Clock3', de: 'Viertel', pos: 'noun', article: 'das', plural: 'Viertel', ru: 'четверть', note: 'Viertel nach acht = 8:15, Viertel vor neun = 8:45.', collocation: { de: 'Viertel nach acht', ru: 'четверть девятого', accept: ['Viertel vor neun'] }, example: { de: 'Es ist Viertel nach acht.', ru: 'Сейчас четверть девятого.', cloze: 'Viertel' } },
    { id: 'pfl-a11-03-frueh', icon: 'Sunrise', de: 'früh', pos: 'adj', ru: 'рано; ранний', note: 'Также: am frühen Morgen — рано утром.', example: { de: 'Der Dienst beginnt sehr früh.', ru: 'Смена начинается очень рано.', cloze: 'früh' } },
    { id: 'pfl-a11-03-spaet', icon: 'Sunset', de: 'spät', pos: 'adj', ru: 'поздно; поздний', note: 'zu spät — слишком поздно, опоздать: Ich bin zu spät.', collocation: { de: 'Wie spät ist es?', ru: 'Который час?', accept: ['Wie viel Uhr ist es?'] }, example: { de: 'Entschuldigung, ich bin zu spät!', ru: 'Извините, я опоздала!', cloze: 'spät' } },
    { id: 'pfl-a11-03-puenktlich', icon: 'AlarmClockCheck', de: 'pünktlich', pos: 'adj', ru: 'пунктуальный; вовремя', note: 'В Германии пунктуальность на работе очень важна.', example: { de: 'Tom ist immer pünktlich.', ru: 'Том всегда приходит вовремя.', cloze: 'pünktlich' } },

    { id: 'pfl-a11-03-termin', icon: 'CalendarCheck', de: 'Termin', pos: 'noun', article: 'der', plural: 'Termine', ru: 'приём, встреча (в назначенное время)', collocation: { de: 'einen Termin haben', ru: 'иметь назначенный приём', accept: ['einen Termin machen'] }, example: { de: 'Herr Schmidt hat um zehn Uhr einen Termin.', ru: 'У господина Шмидта в десять часов приём.', cloze: 'Termin' } },
    { id: 'pfl-a11-03-nummer', icon: 'Hash', de: 'Nummer', pos: 'noun', article: 'die', plural: 'Nummern', ru: 'номер', collocation: { de: 'die Nummer von Zimmer fünf', ru: 'номер палаты пять' }, example: { de: 'Wie ist Ihre Nummer?', ru: 'Какой у вас номер?', cloze: 'Nummer' } },
    { id: 'pfl-a11-03-telefon', icon: 'Phone', imageQuery: 'telephone desk', de: 'Telefon', pos: 'noun', article: 'das', plural: 'Telefone', ru: 'телефон', example: { de: 'Das Telefon klingelt.', ru: 'Звонит телефон.', cloze: 'Telefon' } },
    { id: 'pfl-a11-03-anrufen', icon: 'PhoneCall', de: 'anrufen', pos: 'verb', ru: 'звонить (по телефону)', forms: 'er ruft an · hat angerufen', note: 'anrufen + Akk: Ich rufe den Arzt an. Отделяемая приставка.', collocation: { de: 'den Arzt anrufen', ru: 'позвонить врачу', accept: ['die Station anrufen'] }, example: { de: 'Ich rufe die Station an.', ru: 'Я звоню в отделение.', cloze: 'rufe' } },
    { id: 'pfl-a11-03-temperatur', icon: 'Thermometer', imageQuery: 'digital thermometer', de: 'Temperatur', pos: 'noun', article: 'die', plural: 'Temperaturen', ru: 'температура', collocation: { de: 'die Temperatur messen', ru: 'измерить температуру' }, example: { de: 'Die Temperatur ist normal.', ru: 'Температура нормальная.', cloze: 'Temperatur' } },
    { id: 'pfl-a11-03-grad', icon: 'ThermometerSun', de: 'Grad', pos: 'noun', article: 'das', plural: 'Grad', ru: 'градус', note: 'Читается: 38,5 Grad — achtunddreißig Komma fünf Grad. Мн. ч. не меняется.', example: { de: 'Sie hat achtunddreißig Grad.', ru: 'У неё тридцать восемь градусов.', cloze: 'Grad' } },
    { id: 'pfl-a11-03-messen', icon: 'Gauge', de: 'messen', pos: 'verb', ru: 'измерять', forms: 'er misst · hat gemessen', note: 'du misst, er misst. Fieber messen — измерить температуру.', collocation: { de: 'Fieber messen', ru: 'измерить температуру', accept: ['die Temperatur messen'] }, example: { de: 'Olena misst die Temperatur.', ru: 'Олена измеряет температуру.', cloze: 'misst' } },
    { id: 'pfl-a11-03-fieber', icon: 'Flame', de: 'Fieber', pos: 'noun', article: 'das', ru: 'жар, высокая температура', note: 'Fieber haben — иметь жар. Без мн. ч.', collocation: { de: 'Fieber haben', ru: 'иметь высокую температуру' }, example: { de: 'Der Patient hat Fieber.', ru: 'У пациента жар.', cloze: 'Fieber' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wie spät ist es?',
      de: `Es ist sechs Uhr. Der Frühdienst beginnt. Olena ist pünktlich, aber Tom ist zu spät. Er kommt um Viertel nach sechs. „Entschuldigung!“, sagt er.

Um halb sieben machen sie die Betten. Um sieben Uhr gibt es Frühstück. Frau Wolf fragt: „Wie spät ist es?“ Olena sagt: „Es ist Viertel vor acht.“

Um neun Uhr ist die Pause. Sie dauert eine halbe Stunde. Olena trinkt einen Kaffee. Nach zehn Minuten ruft Frau Becker: „Olena, kommen Sie bitte!“`,
      ru: `Шесть часов. Начинается утренняя смена. Олена пришла вовремя, а Том опаздывает. Он приходит в четверть седьмого. «Извините!» — говорит он.

В половине седьмого они заправляют кровати. В семь часов завтрак. Госпожа Вольф спрашивает: «Который час?» Олена отвечает: «Без четверти восемь».

В девять часов перерыв. Он длится полчаса. Олена пьёт кофе. Через десять минут госпожа Беккер зовёт: «Олена, подойдите, пожалуйста!»`,
      gloss: { halbe: 'половина; (eine halbe Stunde) полчаса', olena: 'Олена (имя)', tom: 'Том (имя)', wolf: 'Вольф (фамилия)', becker: 'Беккер (фамилия)', frau: 'госпожа', sechs: 'шесть', sieben: 'семь', acht: 'восемь', neun: 'девять', zehn: 'десять', beginnt: 'начинается', kommt: 'приходит', kommen: 'приходить; (kommen Sie!) подойдите', entschuldigung: 'извините', sagt: 'говорит', machen: 'делают; (die Betten machen) заправлять кровати', gibt: '(es gibt) есть, бывает', frühstück: 'завтрак', fragt: 'спрашивает', vor: 'до, перед; (Viertel vor acht) без четверти восемь', nach: 'после; (Viertel nach) четверть … ; (nach zehn Minuten) через десять минут', pause: 'перерыв', dauert: 'длится', trinkt: 'пьёт', kaffee: 'кофе', ruft: 'зовёт', wann: 'когда', wie: 'как', lange: 'долго; (wie lange) сколько времени', zwanzig: 'двадцать', ganze: 'целый', betten: 'кровати' },
      questions: [
        { q: 'Wann kommt Tom?', ru: 'Когда приходит Том?', options: ['Um sechs Uhr', 'Um Viertel nach sechs', 'Um halb sieben'], answer: 'Um Viertel nach sechs' },
        { q: 'Wann gibt es Frühstück?', ru: 'Когда завтрак?', options: ['Um sieben Uhr', 'Um neun Uhr', 'Um halb sieben'], answer: 'Um sieben Uhr' },
        { q: 'Wie lange dauert die Pause?', ru: 'Сколько длится перерыв?', options: ['Zehn Minuten', 'Eine halbe Stunde', 'Eine ganze Stunde'], answer: 'Eine halbe Stunde' },
      ],
      translate: [
        { de: 'Es ist Viertel nach sechs.', ru: 'Сейчас четверть седьмого.', wrongRu: ['Сейчас без четверти шесть.', 'Сейчас половина седьмого.'] },
        { de: 'Tom ist heute zu spät.', ru: 'Том сегодня опоздал.', wrongRu: ['Том сегодня пришёл вовремя.', 'Том сегодня пришёл рано.'] },
        { de: 'Die Pause dauert eine halbe Stunde.', ru: 'Перерыв длится полчаса.', wrongRu: ['Перерыв длится час.', 'Смена длится полчаса.'] },
      ],
    },
    {
      lesson: 1, title: 'Frau Wolf hat Fieber',
      de: `Um zehn Uhr misst Olena die Temperatur von Frau Wolf. Sie hat achtunddreißig Grad. Das ist Fieber!

Olena geht zum Telefon und ruft Doktor Wagner an. Er sagt: „Ich komme in zwanzig Minuten.“

Dann klingelt das Telefon. Es ist die Tochter von Frau Wolf. Sie fragt: „Hat meine Mutter heute einen Termin?“ Olena sagt: „Ja, um vierzehn Uhr. Ihre Nummer, bitte?“ Die Tochter sagt die Nummer, und Olena schreibt sie auf.`,
      ru: `В десять часов Олена измеряет температуру госпоже Вольф. У неё тридцать восемь градусов. Это жар!

Олена идёт к телефону и звонит доктору Вагнеру. Он говорит: «Я приду через двадцать минут».

Потом звонит телефон. Это дочь госпожи Вольф. Она спрашивает: «У моей мамы сегодня приём у врача?» Олена говорит: «Да, в четырнадцать часов. Ваш номер, пожалуйста?» Дочь говорит номер, и Олена его записывает.`,
      gloss: { tom: 'Том (имя)', olena: 'Олена (имя)', wolf: 'Вольф (фамилия)', doktor: 'доктор', wagner: 'Вагнер (фамилия)', frau: 'госпожа', zehn: 'десять', achtunddreißig: 'тридцать восемь', zwanzig: 'двадцать', vierzehn: 'четырнадцать', sechzehn: 'шестнадцать', neun: 'девять', zwölf: 'двенадцать', geht: 'идёт', zum: 'к (zu + dem)', sagt: 'говорит', komme: 'приду, прихожу', dann: 'потом, затем', klingelt: 'звонит (о телефоне)', tochter: 'дочь', fragt: 'спрашивает', mutter: 'мать, мама', heute: 'сегодня', schreibt: 'пишет; (schreibt … auf) записывает', wann: 'когда', wer: 'кто', wen: 'кого', was: 'что', normal: 'нормальный', sohn: 'сын' },
      questions: [
        { q: 'Wie viel Grad hat Frau Wolf?', ru: 'Сколько градусов у госпожи Вольф?', options: ['Achtunddreißig', 'Sechzehn', 'Zwanzig'], answer: 'Achtunddreißig' },
        { q: 'Wen ruft Olena an?', ru: 'Кому звонит Олена?', options: ['Doktor Wagner', 'Die Tochter', 'Tom'], answer: 'Doktor Wagner' },
        { q: 'Wann ist der Termin?', ru: 'Когда приём?', options: ['Um zwölf Uhr', 'Um vierzehn Uhr', 'Um neun Uhr'], answer: 'Um vierzehn Uhr' },
      ],
      translate: [
        { de: 'Frau Wolf hat Fieber.', ru: 'У госпожи Вольф жар.', wrongRu: ['У госпожи Вольф нормальная температура.', 'У господина Вольфа жар.'] },
        { de: 'Ich rufe den Arzt an.', ru: 'Я звоню врачу.', wrongRu: ['Врач звонит мне.', 'Я зову врача в палату.'] },
        { de: 'Der Termin ist um vierzehn Uhr.', ru: 'Приём в четырнадцать часов.', wrongRu: ['Приём в четыре часа.', 'Перерыв в четырнадцать часов.'] },
      ],
    },
  ],
};
