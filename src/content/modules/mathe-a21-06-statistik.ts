import type { Module } from '../types.ts';

// A2.1 mathe 06: a school survey — questionnaire, sample, frequency, pie chart (lesson 0), mean, median and an outlier in pocket money (lesson 1).

export const module: Module = {
  id: 'mathe-a21-06-statistik', sphere: 'mathe', level: 'A2.1',
  title: 'Statistik', subtitle: 'Опрос, выборка, частота, среднее, медиана и выброс: как не обмануться цифрами.',
  words: [
    { id: 'mat-a21-06-umfrage', icon: 'ClipboardList', imageQuery: 'survey interview street', de: 'Umfrage', pos: 'noun', article: 'die', plural: 'Umfragen', ru: 'опрос', note: 'eine Umfrage machen / durchführen — провести опрос.', collocation: { de: 'eine Umfrage machen', ru: 'провести опрос', accept: ['eine Umfrage durchführen'] }, example: { de: 'Die Schülerzeitung macht eine Umfrage.', ru: 'Школьная газета проводит опрос.', cloze: 'Umfrage' } },
    { id: 'mat-a21-06-befragen', icon: 'MessageCircleQuestion', de: 'befragen', pos: 'verb', ru: 'опрашивать', forms: 'er befragt · hat befragt', note: 'die Befragten — опрошенные.', example: { de: 'Wir befragen sechzig Schülerinnen und Schüler.', ru: 'Мы опрашиваем шестьдесят учеников.', cloze: 'befragen' } },
    { id: 'mat-a21-06-fragebogen', icon: 'FileQuestion', imageQuery: 'questionnaire', de: 'Fragebogen', pos: 'noun', article: 'der', plural: 'Fragebögen', ru: 'анкета, опросный лист', parts: ['Frage', 'bogen'], note: 'der Bogen — лист (бумаги); в Австрии мн. ч. Fragebögen.', example: { de: 'Jeder bekommt einen Fragebogen mit fünf Fragen.', ru: 'Каждый получает анкету с пятью вопросами.', cloze: 'Fragebogen' } },
    { id: 'mat-a21-06-stichprobe', icon: 'Filter', de: 'Stichprobe', pos: 'noun', article: 'die', plural: 'Stichproben', ru: 'выборка', parts: ['Stich', 'probe'], note: 'Не все, а часть: 60 aus 600.', example: { de: 'Sechzig Personen sind eine Stichprobe aus sechshundert.', ru: 'Шестьдесят человек — это выборка из шестисот.', cloze: 'Stichprobe' } },
    { id: 'mat-a21-06-repraesentativ', icon: 'Users', de: 'repräsentativ', pos: 'adj', ru: 'репрезентативный', example: { de: 'Nur eine Klasse zu befragen ist nicht repräsentativ.', ru: 'Опросить только один класс — нерепрезентативно.', cloze: 'repräsentativ' } },
    { id: 'mat-a21-06-haeufigkeit', icon: 'ChartColumn', de: 'Häufigkeit', pos: 'noun', article: 'die', plural: 'Häufigkeiten', ru: 'частота', note: 'absolute Häufigkeit — сколько раз, relative Häufigkeit — доля.', example: { de: 'Die Antwort „sieben Stunden“ hat die größte Häufigkeit.', ru: 'Ответ «семь часов» встречается чаще всего.', cloze: 'Häufigkeit' } },
    { id: 'mat-a21-06-kreisdiagramm', icon: 'ChartPie', imageQuery: 'pie chart', de: 'Kreisdiagramm', pos: 'noun', article: 'das', plural: 'Kreisdiagramme', ru: 'круговая диаграмма', parts: ['Kreis', 'diagramm'], example: { de: 'Das Ergebnis zeigen wir in einem Kreisdiagramm.', ru: 'Результат мы показываем круговой диаграммой.', cloze: 'Kreisdiagramm' } },
    { id: 'mat-a21-06-auswerten', icon: 'ChartBar', de: 'auswerten', pos: 'verb', ru: 'обрабатывать, анализировать (данные)', forms: 'er wertet aus · hat ausgewertet', note: 'Существительное: die Auswertung.', example: { de: 'Am Wochenende werten wir die Fragebögen aus.', ru: 'На выходных мы обрабатываем анкеты.', cloze: 'werten' } },
    { id: 'mat-a21-06-mittelwert', icon: 'Equal', de: 'Mittelwert', pos: 'noun', article: 'der', plural: 'Mittelwerte', ru: 'среднее арифметическое', parts: ['Mittel', 'wert'], note: 'Синоним: der Durchschnitt, das arithmetische Mittel.', example: { de: 'Der Mittelwert ist hier über vierzig Euro.', ru: 'Среднее здесь больше сорока евро.', cloze: 'Mittelwert' } },
    { id: 'mat-a21-06-median', icon: 'AlignVerticalJustifyCenter', de: 'Median', pos: 'noun', article: 'der', plural: 'Mediane', ru: 'медиана', note: 'Значение посередине упорядоченного ряда.', example: { de: 'Der Median ist der Wert in der Mitte.', ru: 'Медиана — значение посередине.', cloze: 'Median' } },
    { id: 'mat-a21-06-spannweite', icon: 'MoveHorizontal', de: 'Spannweite', pos: 'noun', article: 'die', plural: 'Spannweiten', ru: 'размах (вариации)', parts: ['Spann', 'weite'], note: 'Наибольшее значение минус наименьшее.', example: { de: 'Die Spannweite ist 190 Euro.', ru: 'Размах — 190 евро.', cloze: 'Spannweite' } },
    { id: 'mat-a21-06-ausreisser', icon: 'ChartScatter', de: 'Ausreißer', pos: 'noun', article: 'der', plural: 'Ausreißer', ru: 'выброс (в данных)', note: 'ausreißen — вырываться, сбегать.', example: { de: 'Ein Ausreißer kann den Mittelwert stark verändern.', ru: 'Один выброс может сильно изменить среднее.', cloze: 'Ausreißer' } },
    { id: 'mat-a21-06-sortieren', icon: 'ArrowDownUp', de: 'sortieren', pos: 'verb', ru: 'упорядочивать, сортировать', forms: 'er sortiert · hat sortiert', example: { de: 'Zuerst sortieren wir die Werte der Größe nach.', ru: 'Сначала мы упорядочиваем значения по величине.', cloze: 'sortieren' } },
    { id: 'mat-a21-06-verfaelschen', icon: 'TriangleAlert', de: 'verfälschen', pos: 'verb', ru: 'искажать', forms: 'er verfälscht · hat verfälscht', note: 'falsch → verfälschen.', example: { de: 'Ein einziger Wert verfälscht das Ergebnis.', ru: 'Одно-единственное значение искажает результат.', cloze: 'verfälscht' } },
    { id: 'mat-a21-06-aussagekraeftig', icon: 'BadgeCheck', de: 'aussagekräftig', pos: 'adj', ru: 'показательный, информативный', parts: ['aussage', 'kräftig'], note: 'die Aussage (высказывание) + kräftig (сильный).', example: { de: 'Hier ist der Median aussagekräftiger.', ru: 'Здесь медиана показательнее.', cloze: 'aussagekräftiger' } },
    { id: 'mat-a21-06-datenreihe', icon: 'Rows3', de: 'Datenreihe', pos: 'noun', article: 'die', plural: 'Datenreihen', ru: 'ряд данных', parts: ['Daten', 'reihe'], example: { de: 'Die Datenreihe hat sieben Werte.', ru: 'В ряду данных семь значений.', cloze: 'Datenreihe' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wie lange schlafen wir?',
      de: `Die Schülerzeitung will wissen: Wie lange schlafen die Jugendlichen an unserer Schule? Die Schule hat 600 Schülerinnen und Schüler. Alle zu befragen ist zu viel Arbeit. Deshalb nehmen Mia und Jonas eine Stichprobe: Sie befragen 60 Personen.

Zuerst wollen sie nur ihre eigene Klasse fragen. Aber Frau Berger sagt: „Das ist nicht repräsentativ. Jüngere Kinder schlafen länger.“ Also wählen sie aus jeder Klasse sechs Personen.

Jede Person bekommt einen kurzen Fragebogen. Am Wochenende werten Mia und Jonas die Fragebögen aus. Die Antwort „sieben Stunden“ hat die größte Häufigkeit: 24 von 60, also 40 Prozent. Das Ergebnis zeigen sie in einem Kreisdiagramm.`,
      ru: `Школьная газета хочет узнать: сколько спят подростки в нашей школе? В школе 600 учеников. Опросить всех — слишком много работы. Поэтому Мия и Йонас делают выборку: они опрашивают 60 человек.

Сначала они хотят спросить только свой класс. Но госпожа Бергер говорит: «Это нерепрезентативно. Младшие дети спят дольше». Поэтому они выбирают по шесть человек из каждого класса.

Каждый получает короткую анкету. На выходных Мия и Йонас обрабатывают анкеты. Ответ «семь часов» встречается чаще всего: 24 из 60, то есть 40 процентов. Результат они показывают круговой диаграммой.`,
      gloss: { schülerzeitung: 'школьная газета', will: 'хочет', wissen: 'знать', lange: 'долго (wie lange — сколько времени)', schlafen: 'спят', jugendlichen: 'подростки', unserer: 'нашей', schülerinnen: 'ученицы', schüler: 'ученики', befragen: 'опросить', zu: 'слишком; (zu befragen) опросить', arbeit: 'работа', deshalb: 'поэтому', nehmen: 'берут, делают', mia: 'Мия (имя)', jonas: 'Йонас (имя)', personen: 'человек, лиц', zuerst: 'сначала', wollen: 'хотят', nur: 'только', ihre: 'свой', eigene: 'собственный', klasse: 'класс', fragen: 'спросить', berger: 'Бергер (фамилия)', jüngere: 'младшие', kinder: 'дети', länger: 'дольше', also: 'поэтому; то есть', wählen: 'выбирают', aus: 'из', jeder: 'каждого', person: 'человек', bekommt: 'получает', kurzen: 'короткую', fragebögen: 'анкеты', antwort: 'ответ', größte: 'наибольшую', von: 'из', zeigen: 'показывают', warum: 'почему', was: 'что', wie: 'как', viele: 'сколько (wie viele)', welche: 'какой' },
      questions: [
        { q: 'Wie viele Personen befragen Mia und Jonas?', ru: 'Сколько человек опрашивают Мия и Йонас?', options: ['60', '600', '24'], answer: '60' },
        { q: 'Warum befragen sie nicht nur ihre Klasse?', ru: 'Почему они опрашивают не только свой класс?', options: ['Das ist nicht repräsentativ.', 'Ihre Klasse hat keine Zeit.', 'Das ist zu viel Arbeit.'], answer: 'Das ist nicht repräsentativ.' },
        { q: 'Welche Antwort hat die größte Häufigkeit?', ru: 'Какой ответ встречается чаще всего?', options: ['Sieben Stunden', 'Sechs Stunden', 'Neun Stunden'], answer: 'Sieben Stunden' },
      ],
      translate: [
        { de: 'Sie befragen sechzig Personen.', ru: 'Они опрашивают шестьдесят человек.', wrongRu: ['Они опрашивают шестьсот человек.', 'Шестьдесят человек опрашивают их.'] },
        { de: 'Das ist nicht repräsentativ.', ru: 'Это нерепрезентативно.', wrongRu: ['Это очень репрезентативно.', 'Это неинтересно.'] },
        { de: 'Am Wochenende werten sie die Fragebögen aus.', ru: 'На выходных они обрабатывают анкеты.', wrongRu: ['На выходных они раздают анкеты.', 'В понедельник они обрабатывают анкеты.'] },
      ],
    },
    {
      lesson: 1, title: 'Der reiche Felix',
      de: `In Jonas' Lerngruppe sind sieben Kinder. Sie vergleichen ihr Taschengeld pro Monat. Die Datenreihe ist: 15, 20, 10, 25, 15, 20 und 200 Euro. Die 200 Euro bekommt Felix. Seine Eltern sind sehr reich.

Jonas rechnet den Mittelwert aus: Die Summe ist 305 Euro, geteilt durch sieben sind das ungefähr 44 Euro. „Wir bekommen im Schnitt 44 Euro? Das stimmt doch nicht!“, sagt Lisa. Felix ist ein Ausreißer, und ein Ausreißer verfälscht den Mittelwert.

Dann sortieren sie die Werte: 10, 15, 15, 20, 20, 25, 200. Der Wert in der Mitte ist 20. Das ist der Median. Die Spannweite ist 200 minus 10, also 190 Euro. Für diese Gruppe ist der Median viel aussagekräftiger als der Mittelwert.`,
      ru: `В учебной группе Йонаса семь детей. Они сравнивают свои карманные деньги за месяц. Ряд данных: 15, 20, 10, 25, 15, 20 и 200 евро. 200 евро получает Феликс. Его родители очень богаты.

Йонас вычисляет среднее арифметическое: сумма — 305 евро, разделить на семь — получается примерно 44 евро. «Мы в среднем получаем 44 евро? Да это же неправда!» — говорит Лиза. Феликс — это выброс, а выброс искажает среднее.

Потом они упорядочивают значения: 10, 15, 15, 20, 20, 25, 200. Значение посередине — 20. Это медиана. Размах — 200 минус 10, то есть 190 евро. Для этой группы медиана гораздо показательнее, чем среднее.`,
      gloss: { jonas: 'Йонаса (имя)', lerngruppe: 'учебная группа', kinder: 'дети', vergleichen: 'сравнивают', ihr: 'своё', taschengeld: 'карманные деньги', pro: 'в, за (pro Monat — в месяц)', monat: 'месяц', euro: 'евро', bekommt: 'получает', felix: 'Феликс (имя)', seine: 'его', eltern: 'родители', reich: 'богатый', reiche: 'богатый', rechnet: 'считает (ausrechnen — вычислить)', aus: '(rechnet aus) вычисляет', geteilt: 'разделённый (geteilt durch — разделить на)', durch: 'на (geteilt durch)', schnitt: 'среднее (im Schnitt — в среднем)', stimmt: 'верно (das stimmt nicht — это неправда)', doch: 'же, ведь', lisa: 'Лиза (имя)', werte: 'значения', also: 'то есть', diese: 'эту, этой', gruppe: 'группа', viel: 'гораздо', als: 'чем', wer: 'кто', wie: 'как', was: 'что', welcher: 'какой', groß: 'большой' },
      questions: [
        { q: 'Wer bekommt 200 Euro?', ru: 'Кто получает 200 евро?', options: ['Felix', 'Jonas', 'Lisa'], answer: 'Felix' },
        { q: 'Wie groß ist der Median?', ru: 'Чему равна медиана?', options: ['20 Euro', '44 Euro', '190 Euro'], answer: '20 Euro' },
        { q: 'Was verfälscht den Mittelwert?', ru: 'Что искажает среднее?', options: ['Ein Ausreißer', 'Der Median', 'Die Spannweite'], answer: 'Ein Ausreißer' },
      ],
      translate: [
        { de: 'Ein Ausreißer verfälscht den Mittelwert.', ru: 'Выброс искажает среднее.', wrongRu: ['Выброс не влияет на среднее.', 'Медиана искажает среднее.'] },
        { de: 'Zuerst sortieren sie die Werte.', ru: 'Сначала они упорядочивают значения.', wrongRu: ['Сначала они складывают значения.', 'В конце они упорядочивают значения.'] },
        { de: 'Der Median ist hier aussagekräftiger.', ru: 'Медиана здесь показательнее.', wrongRu: ['Среднее здесь показательнее.', 'Медиана здесь менее показательна.'] },
      ],
    },
  ],
};
