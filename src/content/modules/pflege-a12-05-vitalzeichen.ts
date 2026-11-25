import type { Module } from '../types.ts';

// A1.2 pflege 05: vital signs — blood pressure, pulse, values (lesson 0); breathing, oxygen, weight, the chart (lesson 1).

export const module: Module = {
  id: 'pflege-a12-05-vitalzeichen', sphere: 'pflege', level: 'A1.2',
  title: 'Vitalzeichen messen', subtitle: 'Давление, пульс, сахар, дыхание, вес: измерить, записать и сказать, высокое или низкое.',
  words: [
    { id: 'pfl-a12-05-blutdruck', icon: 'Gauge', imageQuery: 'blood pressure monitor', de: 'Blutdruck', pos: 'noun', article: 'der', ru: 'кровяное давление', parts: ['Blut', 'druck'], collocation: { de: 'den Blutdruck messen', ru: 'измерить давление' }, example: { de: 'Ich messe jetzt Ihren Blutdruck.', ru: 'Сейчас я измерю вам давление.', cloze: 'Blutdruck' } },
    { id: 'pfl-a12-05-puls', icon: 'Activity', de: 'Puls', pos: 'noun', article: 'der', plural: 'Pulse', ru: 'пульс', collocation: { de: 'den Puls fühlen', ru: 'прощупать пульс' }, example: { de: 'Der Puls ist zu schnell.', ru: 'Пульс слишком частый.', cloze: 'Puls' } },
    { id: 'pfl-a12-05-manschette', icon: 'Circle', de: 'Manschette', pos: 'noun', article: 'die', plural: 'Manschetten', ru: 'манжета (тонометра)', example: { de: 'Ich lege die Manschette um Ihren Arm.', ru: 'Я надену манжету вам на руку.', cloze: 'Manschette' } },
    { id: 'pfl-a12-05-hoch', icon: 'ArrowUpCircle', de: 'hoch', pos: 'adj', ru: 'высокий', note: 'Перед существительным: ein hoher Blutdruck (без -c-).', example: { de: 'Der Blutdruck ist zu hoch.', ru: 'Давление слишком высокое.', cloze: 'hoch' } },
    { id: 'pfl-a12-05-niedrig', icon: 'ArrowDownCircle', de: 'niedrig', pos: 'adj', ru: 'низкий', example: { de: 'Ihr Blutzucker ist niedrig.', ru: 'У вас низкий сахар.', cloze: 'niedrig' } },
    { id: 'pfl-a12-05-wert', icon: 'Hash', de: 'Wert', pos: 'noun', article: 'der', plural: 'Werte', ru: 'значение, показатель', note: 'Die Werte sind gut. — Показатели хорошие.', example: { de: 'Die Werte sind heute normal.', ru: 'Показатели сегодня в норме.', cloze: 'Werte' } },
    { id: 'pfl-a12-05-notieren', icon: 'PenLine', de: 'notieren', pos: 'verb', ru: 'записывать, отмечать', forms: 'er notiert · hat notiert', example: { de: 'Ich notiere den Wert in der Kurve.', ru: 'Я записываю показатель в карту.', cloze: 'notiere' } },
    { id: 'pfl-a12-05-blutzucker', icon: 'Droplet', imageQuery: 'blood glucose meter', de: 'Blutzucker', pos: 'noun', article: 'der', ru: 'сахар в крови', parts: ['Blut', 'zucker'], collocation: { de: 'den Blutzucker messen', ru: 'измерить сахар' }, example: { de: 'Vor dem Essen messen wir den Blutzucker.', ru: 'Перед едой мы измеряем сахар.', cloze: 'Blutzucker' } },

    { id: 'pfl-a12-05-atmung', icon: 'Wind', de: 'Atmung', pos: 'noun', article: 'die', ru: 'дыхание', example: { de: 'Die Atmung ist ruhig.', ru: 'Дыхание спокойное.', cloze: 'Atmung' } },
    { id: 'pfl-a12-05-atmen', icon: 'Wind', de: 'atmen', pos: 'verb', ru: 'дышать', forms: 'er atmet · hat geatmet', note: 'tief einatmen — глубоко вдохнуть, ausatmen — выдохнуть.', example: { de: 'Atmen Sie bitte tief ein.', ru: 'Сделайте, пожалуйста, глубокий вдох.', cloze: 'Atmen' } },
    { id: 'pfl-a12-05-sauerstoff', icon: 'CircleDashed', de: 'Sauerstoff', pos: 'noun', article: 'der', ru: 'кислород', parts: ['Sauer', 'stoff'], collocation: { de: 'Sauerstoff bekommen', ru: 'получать кислород' }, example: { de: 'Der Patient bekommt Sauerstoff.', ru: 'Пациент получает кислород.', cloze: 'Sauerstoff' } },
    { id: 'pfl-a12-05-gewicht', icon: 'Scale', de: 'Gewicht', pos: 'noun', article: 'das', plural: 'Gewichte', ru: 'вес', example: { de: 'Das Gewicht ist seit gestern gleich.', ru: 'Вес со вчерашнего дня не изменился.', cloze: 'Gewicht' } },
    { id: 'pfl-a12-05-wiegen', icon: 'Scale', de: 'wiegen', pos: 'verb', ru: 'весить; взвешивать', forms: 'er wiegt · hat gewogen', example: { de: 'Wir wiegen Sie jeden Morgen.', ru: 'Мы взвешиваем вас каждое утро.', cloze: 'wiegen' } },
    { id: 'pfl-a12-05-thermometer', icon: 'Thermometer', imageQuery: 'ear thermometer', de: 'Thermometer', pos: 'noun', article: 'das', plural: 'Thermometer', ru: 'термометр, градусник', example: { de: 'Das Thermometer zeigt 37,2 Grad.', ru: 'Градусник показывает 37,2.', cloze: 'Thermometer' } },
    { id: 'pfl-a12-05-kurve', icon: 'ChartLine', de: 'Kurve', pos: 'noun', article: 'die', plural: 'Kurven', ru: 'температурный лист, карта пациента; кривая', note: 'В немецких больницах «die Kurve» — лист с показателями пациента.', example: { de: 'Alle Werte stehen in der Kurve.', ru: 'Все показатели записаны в карте.', cloze: 'Kurve' } },
    { id: 'pfl-a12-05-regelmaessig', icon: 'Repeat', de: 'regelmäßig', pos: 'adj', ru: 'регулярный, регулярно', example: { de: 'Wir messen den Blutdruck regelmäßig.', ru: 'Мы регулярно измеряем давление.', cloze: 'regelmäßig' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die Morgenrunde',
      de: `Jeden Morgen misst Olena die Vitalzeichen. Zuerst geht sie zu Herrn Yilmaz. Sie legt die Manschette um seinen Arm. Der Blutdruck ist hundertsechzig zu hundert. „Das ist zu hoch“, sagt Olena.

Dann fühlt sie den Puls. Er ist sechsundachtzig, das ist normal. Weil Herr Yilmaz Diabetes hat, misst sie auch den Blutzucker. Der Wert ist niedrig. Olena gibt ihm ein Glas Saft.

Sie notiert alle Werte. Danach ruft sie Doktor Wagner an und sagt ihm: „Der Blutdruck von Herrn Yilmaz ist zu hoch.“`,
      ru: `Каждое утро Олена измеряет жизненные показатели. Сначала она идёт к господину Йылмазу. Она надевает манжету ему на руку. Давление сто шестьдесят на сто. «Это слишком высокое», — говорит Олена.

Потом она проверяет пульс. Он восемьдесят шесть, это нормально. Поскольку у господина Йылмаза диабет, она измеряет ещё и сахар. Показатель низкий. Олена даёт ему стакан сока.

Она записывает все показатели. После этого она звонит доктору Вагнеру и говорит ему: «У господина Йылмаза слишком высокое давление».`,
      gloss: { messe: 'измеряю', olena: 'Олена (имя)', yilmaz: 'Йылмаз (фамилия)', wagner: 'Вагнер (фамилия)', doktor: 'доктор', herrn: 'господину, господина', herr: 'господин', jeden: 'каждый', morgen: 'утро', misst: 'измеряет', vitalzeichen: 'жизненные показатели', zuerst: 'сначала', geht: 'идёт', legt: 'кладёт; (legt … um) надевает', um: 'вокруг; (legt … um) надевает', seinen: 'его', arm: 'рука', hundertsechzig: 'сто шестьдесят', zu: 'к; (160 zu 100) 160 на 100; (zu hoch) слишком', hundert: 'сто', sagt: 'говорит', dann: 'потом', fühlt: 'щупает, проверяет', sechsundachtzig: 'восемьдесят шесть', normal: 'нормальный', weil: 'потому что', gibt: 'даёт', ihm: 'ему', glas: 'стакан', alle: 'все', danach: 'после этого', ruft: '(ruft … an) звонит', an: '(ruft … an) звонит', was: 'что', wie: 'как, какой', wen: 'кого', saft: 'сок', tee: 'чай', wasser: 'вода', tom: 'Том (имя)', morgenrunde: 'утренний обход' },
      questions: [
        { q: 'Wie ist der Blutdruck von Herrn Yilmaz?', ru: 'Какое давление у господина Йылмаза?', options: ['Zu hoch', 'Zu niedrig', 'Normal'], answer: 'Zu hoch' },
        { q: 'Was gibt Olena ihm?', ru: 'Что даёт ему Олена?', options: ['Ein Glas Saft', 'Ein Glas Wasser', 'Einen Tee'], answer: 'Ein Glas Saft' },
        { q: 'Wen ruft Olena an?', ru: 'Кому звонит Олена?', options: ['Doktor Wagner', 'Tom', 'Herrn Yilmaz'], answer: 'Doktor Wagner' },
      ],
      translate: [
        { de: 'Der Blutdruck ist zu hoch.', ru: 'Давление слишком высокое.', wrongRu: ['Давление слишком низкое.', 'Пульс слишком высокий.'] },
        { de: 'Ich messe jetzt Ihren Puls.', ru: 'Сейчас я измерю ваш пульс.', wrongRu: ['Сейчас я измерю ваше давление.', 'Вы сейчас измерите мой пульс.'] },
        { de: 'Olena notiert alle Werte.', ru: 'Олена записывает все показатели.', wrongRu: ['Олена забывает все показатели.', 'Олена записывает только давление.'] },
      ],
    },
    {
      lesson: 1, title: 'Atmen Sie tief ein',
      de: `Frau Wolf hat seit gestern Probleme mit der Atmung. Sie bekommt Sauerstoff. Olena kontrolliert regelmäßig, wie sie atmet. „Atmen Sie bitte tief ein … und wieder aus.“

Dann misst Olena die Temperatur mit dem Thermometer: 37,8 Grad. Das ist ein bisschen hoch. Danach wiegt sie Frau Wolf. Das Gewicht ist seit drei Tagen gleich: sechzig Kilo.

Olena schreibt alles in die Kurve. Bei der Visite liest Doktor Wagner die Kurve und sagt: „Gut. Wir messen weiter jeden Tag.“`,
      ru: `У госпожи Вольф со вчерашнего дня проблемы с дыханием. Она получает кислород. Олена регулярно проверяет, как она дышит. «Сделайте, пожалуйста, глубокий вдох… и снова выдох».

Потом Олена измеряет температуру градусником: 37,8. Это немного высоковато. После этого она взвешивает госпожу Вольф. Вес уже три дня одинаковый: шестьдесят килограммов.

Олена всё записывает в карту. На обходе доктор Вагнер читает карту и говорит: «Хорошо. Продолжаем измерять каждый день».`,
      gloss: { hin: '(schreibt … hin) записывает куда-то', wolf: 'Вольф (фамилия)', olena: 'Олена (имя)', wagner: 'Вагнер (фамилия)', doktor: 'доктор', frau: 'госпожа', probleme: 'проблемы', mit: 'с', bekommt: 'получает', kontrolliert: 'проверяет', wie: 'как', tief: 'глубоко', ein: '(atmen … ein) вдыхать; один', wieder: 'снова', aus: '(atmen … aus) выдыхать', dann: 'потом', misst: 'измеряет', temperatur: 'температура', grad: 'градус(ов)', bisschen: '(ein bisschen) немного', danach: 'после этого', drei: 'три', tagen: 'дней (дат.)', gleich: 'одинаковый', sechzig: 'шестьдесят', kilo: 'килограмм', schreibt: 'пишет', alles: 'всё', bei: 'на, при', visite: 'врачебный обход', liest: 'читает', sagt: 'говорит', gut: 'хорошо', weiter: 'дальше', jeden: 'каждый', tag: 'день', was: 'что', wo: 'где', siebzig: 'семьдесят', fünfzig: 'пятьдесят', hoch: 'высокий', niedrig: 'низкий', normal: 'нормальный', zettel: 'записка, листок', tasche: 'сумка' },
      questions: [
        { q: 'Was bekommt Frau Wolf?', ru: 'Что получает госпожа Вольф?', options: ['Sauerstoff', 'Saft', 'Ein Schmerzmittel'], answer: 'Sauerstoff' },
        { q: 'Wie viel wiegt Frau Wolf?', ru: 'Сколько весит госпожа Вольф?', options: ['Sechzig Kilo', 'Siebzig Kilo', 'Fünfzig Kilo'], answer: 'Sechzig Kilo' },
        { q: 'Wo schreibt Olena alles hin?', ru: 'Куда Олена всё записывает?', options: ['In die Kurve', 'Auf einen Zettel', 'In ihre Tasche'], answer: 'In die Kurve' },
      ],
      translate: [
        { de: 'Atmen Sie bitte tief ein.', ru: 'Сделайте, пожалуйста, глубокий вдох.', wrongRu: ['Сделайте, пожалуйста, выдох.', 'Не дышите, пожалуйста.'] },
        { de: 'Das Gewicht ist seit drei Tagen gleich.', ru: 'Вес уже три дня одинаковый.', wrongRu: ['Вес за три дня вырос.', 'Температура уже три дня одинаковая.'] },
        { de: 'Wir messen den Blutdruck regelmäßig.', ru: 'Мы регулярно измеряем давление.', wrongRu: ['Мы редко измеряем давление.', 'Мы регулярно измеряем сахар.'] },
      ],
    },
  ],
};
