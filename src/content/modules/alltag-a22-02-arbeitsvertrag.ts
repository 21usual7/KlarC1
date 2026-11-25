import type { Module } from '../types.ts';

// A2.2 alltag 02: the employment contract — probation, fixed-term, working hours, minimum wage (lesson 0); sick leave, works council, union, dismissal (lesson 1).

export const module: Module = {
  id: 'alltag-a22-02-arbeitsvertrag', sphere: 'alltag', level: 'A2.2',
  title: 'Arbeitsvertrag und Rechte', subtitle: 'Трудовой договор и права: испытательный срок, срочный договор, рабочее время, отпуск, больничный, профсоюз и увольнение.',
  words: [
    { id: 'all-a22-02-arbeitsvertrag', icon: 'FileSignature', de: 'Arbeitsvertrag', pos: 'noun', article: 'der', plural: 'Arbeitsverträge', ru: 'трудовой договор', parts: ['Arbeits', 'vertrag'], example: { de: 'Lesen Sie den Arbeitsvertrag, bevor Sie unterschreiben.', ru: 'Прочитайте трудовой договор, прежде чем подписывать.', cloze: 'Arbeitsvertrag' } },
    { id: 'all-a22-02-probezeit', icon: 'Hourglass', de: 'Probezeit', pos: 'noun', article: 'die', plural: 'Probezeiten', ru: 'испытательный срок', parts: ['Probe', 'zeit'], note: 'Обычно до шести месяцев; в это время легче уволить.', example: { de: 'Die Probezeit dauert sechs Monate.', ru: 'Испытательный срок — шесть месяцев.', cloze: 'Probezeit' } },
    { id: 'all-a22-02-befristet', icon: 'CalendarClock', de: 'befristet', pos: 'adj', ru: 'срочный (на определённый срок)', example: { de: 'Der Vertrag ist auf ein Jahr befristet.', ru: 'Договор заключён на год.', cloze: 'befristet' } },
    { id: 'all-a22-02-unbefristet', icon: 'Infinity', de: 'unbefristet', pos: 'adj', ru: 'бессрочный', example: { de: 'Nach einem Jahr bekomme ich einen unbefristeten Vertrag.', ru: 'Через год я получу бессрочный договор.', cloze: 'unbefristeten' } },
    { id: 'all-a22-02-arbeitszeit', icon: 'Clock', de: 'Arbeitszeit', pos: 'noun', article: 'die', plural: 'Arbeitszeiten', ru: 'рабочее время', parts: ['Arbeits', 'zeit'], example: { de: 'Meine Arbeitszeit ist von sieben bis sechzehn Uhr.', ru: 'Моё рабочее время — с семи до шестнадцати.', cloze: 'Arbeitszeit' } },
    { id: 'all-a22-02-ueberstunde', icon: 'AlarmClockPlus', de: 'Überstunde', pos: 'noun', article: 'die', plural: 'Überstunden', ru: 'сверхурочный час', parts: ['Über', 'stunde'], example: { de: 'Überstunden werden extra bezahlt.', ru: 'Сверхурочные оплачиваются отдельно.', cloze: 'Überstunden' } },
    { id: 'all-a22-02-urlaubsanspruch', icon: 'Palmtree', de: 'Urlaubsanspruch', pos: 'noun', article: 'der', plural: 'Urlaubsansprüche', ru: 'право на отпуск', parts: ['Urlaubs', 'anspruch'], note: 'По закону минимум 20 рабочих дней при 5-дневке; часто больше.', example: { de: 'Mein Urlaubsanspruch sind dreißig Tage im Jahr.', ru: 'Мне положено тридцать дней отпуска в год.', cloze: 'Urlaubsanspruch' } },
    { id: 'all-a22-02-mindestlohn', icon: 'Coins', de: 'Mindestlohn', pos: 'noun', article: 'der', plural: 'Mindestlöhne', ru: 'минимальная оплата труда', parts: ['Mindest', 'lohn'], example: { de: 'In Deutschland gibt es einen gesetzlichen Mindestlohn.', ru: 'В Германии есть установленный законом минимальный оклад.', cloze: 'Mindestlohn' } },

    { id: 'all-a22-02-krankmelden', icon: 'Phone', de: 'krankmelden', pos: 'verb', ru: '(sich krankmelden) сообщить о болезни, взять больничный', forms: 'er meldet sich krank · hat sich krankgemeldet', example: { de: 'Ich muss mich heute krankmelden.', ru: 'Мне сегодня нужно взять больничный.', cloze: 'krankmelden' } },
    { id: 'all-a22-02-kuendigung', icon: 'FileX', de: 'Kündigung', pos: 'noun', article: 'die', plural: 'Kündigungen', ru: 'увольнение; расторжение договора', example: { de: 'Die Kündigung muss schriftlich sein.', ru: 'Увольнение должно быть оформлено письменно.', cloze: 'Kündigung' } },
    { id: 'all-a22-02-betriebsrat', icon: 'Users', de: 'Betriebsrat', pos: 'noun', article: 'der', plural: 'Betriebsräte', ru: 'производственный совет (представители работников)', parts: ['Betriebs', 'rat'], example: { de: 'Bei Problemen hilft der Betriebsrat.', ru: 'При проблемах помогает совет работников.', cloze: 'Betriebsrat' } },
    { id: 'all-a22-02-gewerkschaft', icon: 'Flag', de: 'Gewerkschaft', pos: 'noun', article: 'die', plural: 'Gewerkschaften', ru: 'профсоюз', example: { de: 'Die Gewerkschaft verhandelt über höhere Löhne.', ru: 'Профсоюз ведёт переговоры о повышении зарплат.', cloze: 'Gewerkschaft' } },
    { id: 'all-a22-02-tarifvertrag', icon: 'FileText', de: 'Tarifvertrag', pos: 'noun', article: 'der', plural: 'Tarifverträge', ru: 'коллективный (тарифный) договор', parts: ['Tarif', 'vertrag'], example: { de: 'Die Firma zahlt nach Tarifvertrag.', ru: 'Фирма платит по тарифному договору.', cloze: 'Tarifvertrag' } },
    { id: 'all-a22-02-chef', icon: 'UserCog', de: 'Chef', pos: 'noun', article: 'der', plural: 'Chefs', ru: 'начальник', note: 'Женщина — die Chefin. Официально: der / die Vorgesetzte.', example: { de: 'Mein Chef ist streng, aber fair.', ru: 'Мой начальник строгий, но справедливый.', cloze: 'Chef' } },
    { id: 'all-a22-02-arbeitsschutz', icon: 'HardHat', de: 'Arbeitsschutz', pos: 'noun', article: 'der', ru: 'охрана труда', parts: ['Arbeits', 'schutz'], example: { de: 'Zum Arbeitsschutz gehören Helm und Schutzbrille.', ru: 'К охране труда относятся каска и защитные очки.', cloze: 'Arbeitsschutz' } },
    { id: 'all-a22-02-schichtarbeit', icon: 'RotateCw', de: 'Schichtarbeit', pos: 'noun', article: 'die', ru: 'сменная работа', parts: ['Schicht', 'arbeit'], example: { de: 'Schichtarbeit ist anstrengend.', ru: 'Сменная работа утомительна.', cloze: 'Schichtarbeit' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Der Vertrag',
      de: `Vor der Unterschrift liest Amir den Arbeitsvertrag genau. Die Probezeit dauert sechs Monate. Der Vertrag ist zuerst auf ein Jahr befristet. Wenn alles gut läuft, bekommt er danach einen unbefristeten Vertrag.

Seine Arbeitszeit ist von sieben bis sechzehn Uhr, mit einer Stunde Pause. Überstunden werden extra bezahlt oder er bekommt dafür freie Tage. Sein Urlaubsanspruch beträgt dreißig Tage im Jahr.

Leyla fragt: „Und wie viel verdienst du pro Stunde?“ Amir rechnet nach. „Mehr als den Mindestlohn. Die Firma zahlt nach Tarifvertrag.“`,
      ru: `Перед подписанием Амир внимательно читает трудовой договор. Испытательный срок — шесть месяцев. Сначала договор заключён на год. Если всё пойдёт хорошо, потом он получит бессрочный договор.

Его рабочее время — с семи до шестнадцати, с часовым перерывом. Сверхурочные оплачиваются отдельно, или за них дают выходные. Ему положено тридцать дней отпуска в год.

Лейла спрашивает: «А сколько ты получаешь в час?» Амир пересчитывает. «Больше минимальной ставки. Фирма платит по тарифному договору».`,
      gloss: { urlaubstage: 'дни отпуска', extra: 'отдельно', freie: 'свободные', firma: 'фирма', bar: 'наличными', amir: 'Амир (имя)', leyla: 'Лейла (имя)', unterschrift: 'подпись', läuft: '(gut läuft) идёт хорошо', danach: 'после этого', dafür: 'за это', beträgt: 'составляет', verdienst: 'зарабатываешь', rechnet: '(rechnet nach) пересчитывает', nach: 'по; (rechnet nach) пересчитывает' },
      questions: [
        { q: 'Wie lange dauert die Probezeit?', ru: 'Сколько длится испытательный срок?', options: ['Sechs Monate', 'Ein Jahr', 'Drei Wochen'], answer: 'Sechs Monate' },
        { q: 'Wie viele Urlaubstage hat Amir?', ru: 'Сколько дней отпуска у Амира?', options: ['Dreißig', 'Zwanzig', 'Zehn'], answer: 'Dreißig' },
        { q: 'Wie zahlt die Firma?', ru: 'Как платит фирма?', options: ['Nach Tarifvertrag', 'Nur Mindestlohn', 'Bar'], answer: 'Nach Tarifvertrag' },
      ],
      translate: [
        { de: 'Der Vertrag ist auf ein Jahr befristet.', ru: 'Договор заключён на год.', wrongRu: ['Договор бессрочный.', 'Договор заключён на месяц.'] },
        { de: 'Überstunden werden extra bezahlt.', ru: 'Сверхурочные оплачиваются отдельно.', wrongRu: ['Сверхурочные не оплачиваются.', 'Отпуск оплачивается отдельно.'] },
        { de: 'Die Probezeit dauert sechs Monate.', ru: 'Испытательный срок — шесть месяцев.', wrongRu: ['Отпуск длится шесть месяцев.', 'Испытательный срок — шесть недель.'] },
      ],
    },
    {
      lesson: 1, title: 'Krank und Kündigung',
      de: `Im Winter hat Amir hohes Fieber. Um sechs Uhr morgens ruft er seinen Chef an und meldet sich krank. Ab dem dritten Tag braucht er eine Krankmeldung vom Arzt. Sein Gehalt bekommt er trotzdem weiter.

Ein Kollege, Marco, hat ein Problem: Er arbeitet seit Monaten viel Schichtarbeit und die Überstunden werden nicht bezahlt. Amir rät ihm: „Geh zum Betriebsrat. Der hilft bei solchen Problemen.“

Marco ist auch Mitglied in der Gewerkschaft. Mit ihrer Hilfe bekommt er sein Geld. „Eine Kündigung muss immer schriftlich sein“, erklärt der Betriebsrat. „Und Arbeitsschutz ist Pflicht. Niemand muss ohne Helm auf die Baustelle.“`,
      ru: `Зимой у Амира высокая температура. В шесть утра он звонит начальнику и сообщает, что заболел. С третьего дня ему нужен больничный от врача. Зарплату он всё равно продолжает получать.

У коллеги, Марко, проблема: он уже несколько месяцев много работает посменно, а сверхурочные не оплачивают. Амир советует ему: «Иди в совет работников. Он помогает с такими проблемами».

Марко ещё и член профсоюза. С его помощью он получает свои деньги. «Увольнение всегда должно быть письменным, — объясняет член совета. — А охрана труда обязательна. Никто не обязан выходить на стройку без каски»`,
      gloss: { problemen: 'проблемах', marcos: 'Марко (чей?)', winter: 'зима', monaten: 'месяцев', geh: 'иди, ходи', amir: 'Амир (имя)', marco: 'Марко (имя)', hohes: 'высокую', sechs: 'шесть', morgens: 'утра', dritten: 'третьего', trotzdem: 'всё равно', weiter: 'дальше, продолжает', rät: 'советует', solchen: 'таким', mitglied: 'член (организации)', hilfe: 'помощь', helm: 'каска', baustelle: 'стройка' },
      questions: [
        { q: 'Ab wann braucht Amir eine Krankmeldung?', ru: 'С какого дня Амиру нужен больничный?', options: ['Ab dem dritten Tag', 'Ab dem ersten Tag', 'Nach einer Woche'], answer: 'Ab dem dritten Tag' },
        { q: 'Was ist Marcos Problem?', ru: 'В чём проблема Марко?', options: ['Die Überstunden werden nicht bezahlt.', 'Er ist krank.', 'Er hat keinen Vertrag.'], answer: 'Die Überstunden werden nicht bezahlt.' },
        { q: 'Wie muss eine Kündigung sein?', ru: 'Каким должно быть увольнение?', options: ['Schriftlich', 'Am Telefon', 'Mündlich'], answer: 'Schriftlich' },
      ],
      translate: [
        { de: 'Ich muss mich heute krankmelden.', ru: 'Мне сегодня нужно взять больничный.', wrongRu: ['Мне сегодня нужно к врачу.', 'Мне сегодня лучше.'] },
        { de: 'Bei Problemen hilft der Betriebsrat.', ru: 'При проблемах помогает совет работников.', wrongRu: ['При проблемах помогает начальник.', 'Совет работников создаёт проблемы.'] },
        { de: 'Die Kündigung muss schriftlich sein.', ru: 'Увольнение должно быть письменным.', wrongRu: ['Увольнение может быть устным.', 'Договор должен быть письменным.'] },
      ],
    },
  ],
};
