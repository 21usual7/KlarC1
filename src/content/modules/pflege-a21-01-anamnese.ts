import type { Module } from '../types.ts';

// A2.1 pflege 01: taking a history — previous illnesses, operations, habits (lesson 0); organs, family history, treatment (lesson 1).

export const module: Module = {
  id: 'pflege-a21-01-anamnese', sphere: 'pflege', level: 'A2.1',
  title: 'Die Anamnese', subtitle: 'Сбор анамнеза: прошлые болезни, операции, привычки, органы и семейная история.',
  words: [
    { id: 'pfl-a21-01-vorerkrankung', icon: 'History', de: 'Vorerkrankung', pos: 'noun', article: 'die', plural: 'Vorerkrankungen', ru: 'перенесённое (хроническое) заболевание', parts: ['Vor', 'erkrankung'], example: { de: 'Haben Sie Vorerkrankungen?', ru: 'У вас есть хронические заболевания?', cloze: 'Vorerkrankungen' } },
    { id: 'pfl-a21-01-operation', icon: 'Scissors', de: 'Operation', pos: 'noun', article: 'die', plural: 'Operationen', ru: 'операция', note: 'Разговорно: die OP.', example: { de: 'Die Operation war vor zwei Jahren.', ru: 'Операция была два года назад.', cloze: 'Operation' } },
    { id: 'pfl-a21-01-operieren', icon: 'Scissors', de: 'operieren', pos: 'verb', ru: 'оперировать', forms: 'er operiert · hat operiert', note: 'operiert werden — перенести операцию.', example: { de: 'Ich bin am Knie operiert worden.', ru: 'Мне сделали операцию на колене.', cloze: 'operiert' } },
    { id: 'pfl-a21-01-rauchen', icon: 'Cigarette', de: 'rauchen', pos: 'verb', ru: 'курить', forms: 'er raucht · hat geraucht', example: { de: 'Rauchen Sie?', ru: 'Вы курите?', cloze: 'Rauchen' } },
    { id: 'pfl-a21-01-alkohol', icon: 'Wine', de: 'Alkohol', pos: 'noun', article: 'der', ru: 'алкоголь', example: { de: 'Wie viel Alkohol trinken Sie pro Woche?', ru: 'Сколько алкоголя вы пьёте в неделю?', cloze: 'Alkohol' } },
    { id: 'pfl-a21-01-beschwerde', icon: 'MessageSquareWarning', de: 'Beschwerde', pos: 'noun', article: 'die', plural: 'Beschwerden', ru: 'жалоба (на здоровье); претензия', note: 'Обычно мн. ч.: Welche Beschwerden haben Sie? — На что жалуетесь?', example: { de: 'Welche Beschwerden haben Sie?', ru: 'На что вы жалуетесь?', cloze: 'Beschwerden' } },
    { id: 'pfl-a21-01-symptom', icon: 'ListChecks', de: 'Symptom', pos: 'noun', article: 'das', plural: 'Symptome', ru: 'симптом', example: { de: 'Fieber und Husten sind typische Symptome.', ru: 'Жар и кашель — типичные симптомы.', cloze: 'Symptome' } },
    { id: 'pfl-a21-01-behandeln', icon: 'Stethoscope', de: 'behandeln', pos: 'verb', ru: 'лечить; обращаться (с кем-то)', forms: 'er behandelt · hat behandelt', note: 'die Behandlung — лечение.', example: { de: 'Wer hat Sie bisher behandelt?', ru: 'Кто вас лечил до сих пор?', cloze: 'behandelt' } },

    { id: 'pfl-a21-01-herz', icon: 'Heart', de: 'Herz', pos: 'noun', article: 'das', plural: 'Herzen', ru: 'сердце', note: 'Особое склонение: dem Herzen, des Herzens.', example: { de: 'Mein Herz schlägt manchmal sehr schnell.', ru: 'Моё сердце иногда бьётся очень быстро.', cloze: 'Herz' } },
    { id: 'pfl-a21-01-lunge', icon: 'Wind', de: 'Lunge', pos: 'noun', article: 'die', plural: 'Lungen', ru: 'лёгкое; лёгкие', example: { de: 'Die Lunge ist frei.', ru: 'Лёгкие чистые.', cloze: 'Lunge' } },
    { id: 'pfl-a21-01-niere', icon: 'Bean', de: 'Niere', pos: 'noun', article: 'die', plural: 'Nieren', ru: 'почка', example: { de: 'Er hat Probleme mit den Nieren.', ru: 'У него проблемы с почками.', cloze: 'Nieren' } },
    { id: 'pfl-a21-01-leber', icon: 'Shapes', de: 'Leber', pos: 'noun', article: 'die', plural: 'Lebern', ru: 'печень', example: { de: 'Alkohol schadet der Leber.', ru: 'Алкоголь вредит печени.', cloze: 'Leber' } },
    { id: 'pfl-a21-01-bluthochdruck', icon: 'Gauge', de: 'Bluthochdruck', pos: 'noun', article: 'der', ru: 'гипертония, высокое давление', parts: ['Blut', 'hoch', 'druck'], example: { de: 'Mein Vater hatte auch Bluthochdruck.', ru: 'У моего отца тоже была гипертония.', cloze: 'Bluthochdruck' } },
    { id: 'pfl-a21-01-erblich', icon: 'Dna', de: 'erblich', pos: 'adj', ru: 'наследственный', example: { de: 'Ist die Krankheit erblich?', ru: 'Эта болезнь наследственная?', cloze: 'erblich' } },
    { id: 'pfl-a21-01-krankheit', icon: 'Bug', de: 'Krankheit', pos: 'noun', article: 'die', plural: 'Krankheiten', ru: 'болезнь', example: { de: 'Gibt es Krankheiten in Ihrer Familie?', ru: 'Есть ли болезни в вашей семье?', cloze: 'Krankheiten' } },
    { id: 'pfl-a21-01-dauerhaft', icon: 'Repeat', de: 'dauerhaft', pos: 'adj', ru: 'постоянный, длительный', note: 'Dauermedikation — постоянный приём лекарств.', example: { de: 'Nehmen Sie dauerhaft Medikamente?', ru: 'Вы постоянно принимаете лекарства?', cloze: 'dauerhaft' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Fragen zur Vorgeschichte',
      de: `Herr Nowak liegt seit gestern auf Station drei. Heute macht Olena mit ihm die Anamnese. Sie hat einen Bogen mit vielen Fragen.

„Welche Beschwerden haben Sie?“, fragt sie. Herr Nowak erzählt: „Seit drei Wochen bekomme ich schlecht Luft, wenn ich Treppen steige. Das ist mein wichtigstes Symptom.“

„Haben Sie Vorerkrankungen? Sind Sie schon einmal operiert worden?“ – „Ja, vor fünf Jahren hatte ich eine Operation am Magen.“ Olena fragt auch nach seinen Gewohnheiten: „Rauchen Sie? Trinken Sie Alkohol?“ Herr Nowak lacht: „Ich habe vor zehn Jahren aufgehört zu rauchen. Und Alkohol trinke ich nur am Wochenende ein Bier.“`,
      ru: `Господин Новак со вчерашнего дня лежит в третьем отделении. Сегодня Олена собирает у него анамнез. У неё анкета с множеством вопросов.

«На что вы жалуетесь?» — спрашивает она. Господин Новак рассказывает: «Уже три недели мне тяжело дышать, когда я поднимаюсь по лестнице. Это мой главный симптом».

«У вас есть хронические заболевания? Вас уже когда-нибудь оперировали?» — «Да, пять лет назад у меня была операция на желудке». Олена спрашивает и о его привычках: «Вы курите? Пьёте алкоголь?» Господин Новак смеётся: «Я бросил курить десять лет назад. А из алкоголя пью только кружку пива на выходных».`,
      gloss: { lacht: 'смеётся', trinke: 'пью', wichtigste: 'самый важный', herrn: 'господина (род./дат.)', nowak: 'Новак (фамилия)', olena: 'Олена (имя)', herr: 'господин', liegt: 'лежит', anamnese: 'анамнез', bogen: 'анкета, бланк', vielen: 'многими', fragen: 'вопросы', erzählt: 'рассказывает', bekomme: 'получаю; (bekomme schlecht Luft) мне тяжело дышать', luft: 'воздух', treppen: 'лестницы', steige: 'поднимаюсь', wichtigstes: 'самый важный', einmal: 'однажды; (schon einmal) уже когда-нибудь', worden: '(operiert worden) был прооперирован', vor: 'назад (vor fünf Jahren); перед', jahren: 'лет (дат.)', hatte: 'было, имел', magen: 'желудок', gewohnheiten: 'привычки', aufgehört: 'перестал, бросил', bier: 'пиво', vorgeschichte: 'история болезни', zur: 'о, к (zu + der)', seit: 'уже, с', wochen: 'недель', wann: 'когда', was: 'что', wie: 'как', welches: 'какой', wo: 'где', herz: 'сердце', knie: 'колено' },
      questions: [
        { q: 'Was ist das wichtigste Symptom von Herrn Nowak?', ru: 'Какой главный симптом у господина Новака?', options: ['Er bekommt schlecht Luft.', 'Er hat Bauchschmerzen.', 'Er hat Fieber.'], answer: 'Er bekommt schlecht Luft.' },
        { q: 'Wo wurde Herr Nowak operiert?', ru: 'Где оперировали господина Новака?', options: ['Am Magen', 'Am Herz', 'Am Knie'], answer: 'Am Magen' },
        { q: 'Wann hat Herr Nowak aufgehört zu rauchen?', ru: 'Когда господин Новак бросил курить?', options: ['Vor zehn Jahren', 'Vor fünf Jahren', 'Vor drei Wochen'], answer: 'Vor zehn Jahren' },
      ],
      translate: [
        { de: 'Welche Beschwerden haben Sie?', ru: 'На что вы жалуетесь?', wrongRu: ['Какие лекарства вы принимаете?', 'Какие у вас вопросы?'] },
        { de: 'Sind Sie schon einmal operiert worden?', ru: 'Вас уже когда-нибудь оперировали?', wrongRu: ['Вас скоро будут оперировать?', 'Вы уже были в больнице?'] },
        { de: 'Ich habe vor zehn Jahren aufgehört zu rauchen.', ru: 'Я бросил курить десять лет назад.', wrongRu: ['Я начал курить десять лет назад.', 'Я курю уже десять лет.'] },
      ],
    },
    {
      lesson: 1, title: 'Herz, Lunge, Nieren',
      de: `Dann fragt Olena nach den Organen. „Haben Sie Probleme mit dem Herz, mit der Lunge oder mit den Nieren?“ Herr Nowak antwortet: „Mit dem Herz, ja. Ich habe seit vielen Jahren Bluthochdruck. Mit der Leber und den Nieren ist alles in Ordnung.“

„Nehmen Sie dauerhaft Medikamente?“ – „Ja, jeden Morgen eine Tablette gegen den Bluthochdruck.“ Olena notiert den Namen.

Zum Schluss fragt sie: „Gibt es Krankheiten in Ihrer Familie?“ – „Mein Vater hatte auch Bluthochdruck und mit sechzig einen Herzinfarkt. Ist das erblich?“ Olena sagt: „Das Risiko kann höher sein. Das bespricht der Arzt mit Ihnen. Er wird Sie gut behandeln.“`,
      ru: `Потом Олена спрашивает об органах. «У вас есть проблемы с сердцем, лёгкими или почками?» Господин Новак отвечает: «С сердцем — да. У меня много лет гипертония. С печенью и почками всё в порядке».

«Вы постоянно принимаете лекарства?» — «Да, каждое утро таблетку от давления». Олена записывает название.

Напоследок она спрашивает: «Есть ли болезни в вашей семье?» — «У моего отца тоже была гипертония, а в шестьдесят — инфаркт. Это наследственное?» Олена говорит: «Риск может быть выше. Это врач обсудит с вами. Он вас хорошо вылечит».`,
      gloss: { organ: 'орган', olena: 'Олена (имя)', nowak: 'Новак (фамилия)', herr: 'господин', dann: 'потом', fragt: 'спрашивает', nach: 'о, про (fragt nach)', organen: 'органах', probleme: 'проблемы', antwortet: 'отвечает', vielen: 'многих', jahren: 'лет (дат.)', alles: 'всё', ordnung: 'порядок; (in Ordnung) в порядке', nehmen: 'принимаете', jeden: 'каждое', morgen: 'утро', tablette: 'таблетка', gegen: 'против, от', notiert: 'записывает', namen: 'название, имя', zum: '(zum Schluss) напоследок', schluss: 'конец', gibt: '(es gibt) есть', ihrer: 'вашей', familie: 'семья', vater: 'отец', hatte: 'имел, был', sechzig: 'шестьдесят', herzinfarkt: 'инфаркт', sagt: 'говорит', risiko: 'риск', kann: 'может', höher: 'выше', sein: 'быть', bespricht: 'обсуждает', arzt: 'врач', wird: 'будет', gut: 'хорошо', organe: 'органы', was: 'что', wer: 'кто', welche: 'какие', wie: 'как', oft: '(wie oft) как часто', mutter: 'мать', sohn: 'сын', abends: 'вечером', morgens: 'утром', manchmal: 'иногда' },
      questions: [
        { q: 'Mit welchem Organ hat Herr Nowak Probleme?', ru: 'С каким органом у господина Новака проблемы?', options: ['Mit dem Herz', 'Mit der Leber', 'Mit den Nieren'], answer: 'Mit dem Herz' },
        { q: 'Wann nimmt er seine Tablette?', ru: 'Когда он принимает таблетку?', options: ['Jeden Morgen', 'Jeden Abend', 'Manchmal'], answer: 'Jeden Morgen' },
        { q: 'Wer hatte einen Herzinfarkt?', ru: 'У кого был инфаркт?', options: ['Sein Vater', 'Seine Mutter', 'Sein Sohn'], answer: 'Sein Vater' },
      ],
      translate: [
        { de: 'Nehmen Sie dauerhaft Medikamente?', ru: 'Вы постоянно принимаете лекарства?', wrongRu: ['Вы иногда принимаете лекарства?', 'Вы принимали лекарства вчера?'] },
        { de: 'Mit der Leber ist alles in Ordnung.', ru: 'С печенью всё в порядке.', wrongRu: ['С печенью проблемы.', 'С почками всё в порядке.'] },
        { de: 'Gibt es Krankheiten in Ihrer Familie?', ru: 'Есть ли болезни в вашей семье?', wrongRu: ['Есть ли у вас семья?', 'Есть ли у вас болезни сейчас?'] },
      ],
    },
  ],
};
