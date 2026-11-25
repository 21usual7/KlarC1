import type { Module } from '../types.ts';

// A1.1 pflege 04: the shift plan — week, days, shifts (lesson 0); breaks, end of work, swapping a shift (lesson 1).

export const module: Module = {
  id: 'pflege-a11-04-dienstplan', sphere: 'pflege', level: 'A1.1',
  title: 'Der Dienstplan', subtitle: 'Дни недели и смены: когда ты работаешь, когда выходной и как поменяться сменой.',
  words: [
    { id: 'pfl-a11-04-woche', icon: 'CalendarDays', de: 'Woche', pos: 'noun', article: 'die', plural: 'Wochen', ru: 'неделя', collocation: { de: 'diese Woche', ru: 'на этой неделе', accept: ['nächste Woche'] }, example: { de: 'Diese Woche habe ich Frühdienst.', ru: 'На этой неделе у меня утренние смены.', cloze: 'Woche' } },
    { id: 'pfl-a11-04-montag', icon: 'Calendar', de: 'Montag', pos: 'noun', article: 'der', plural: 'Montage', ru: 'понедельник', note: 'Дни недели: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag. am Montag — в понедельник.', collocation: { de: 'am Montag', ru: 'в понедельник' }, example: { de: 'Am Montag arbeite ich.', ru: 'В понедельник я работаю.', cloze: 'Montag' } },
    { id: 'pfl-a11-04-wochenende', icon: 'Sofa', de: 'Wochenende', pos: 'noun', article: 'das', plural: 'Wochenenden', ru: 'выходные (суббота и воскресенье)', parts: ['Wochen', 'ende'], collocation: { de: 'am Wochenende', ru: 'на выходных' }, example: { de: 'Am Wochenende habe ich Nachtdienst.', ru: 'На выходных у меня ночные смены.', cloze: 'Wochenende' } },
    { id: 'pfl-a11-04-dienstplan', icon: 'CalendarRange', imageQuery: 'work schedule', de: 'Dienstplan', pos: 'noun', article: 'der', plural: 'Dienstpläne', ru: 'график смен', parts: ['Dienst', 'plan'], collocation: { de: 'auf dem Dienstplan stehen', ru: 'стоять в графике' }, example: { de: 'Der Dienstplan hängt im Büro.', ru: 'График смен висит в кабинете.', cloze: 'Dienstplan' } },
    { id: 'pfl-a11-04-spaetdienst', icon: 'Sunset', de: 'Spätdienst', pos: 'noun', article: 'der', plural: 'Spätdienste', ru: 'вечерняя смена', parts: ['Spät', 'dienst'], note: 'Обычно с ~13:30 до ~22:00.', example: { de: 'Morgen habe ich Spätdienst.', ru: 'Завтра у меня вечерняя смена.', cloze: 'Spätdienst' } },
    { id: 'pfl-a11-04-nachtdienst', icon: 'Moon', de: 'Nachtdienst', pos: 'noun', article: 'der', plural: 'Nachtdienste', ru: 'ночная смена', parts: ['Nacht', 'dienst'], example: { de: 'Der Nachtdienst beginnt um einundzwanzig Uhr.', ru: 'Ночная смена начинается в двадцать один час.', cloze: 'Nachtdienst' } },
    { id: 'pfl-a11-04-frei', icon: 'PartyPopper', de: 'frei', pos: 'adj', ru: 'свободный; выходной (о дне)', note: 'Ich habe frei. — У меня выходной. Ist der Platz frei? — Место свободно?', collocation: { de: 'frei haben', ru: 'иметь выходной' }, example: { de: 'Am Sonntag habe ich frei.', ru: 'В воскресенье у меня выходной.', cloze: 'frei' } },
    { id: 'pfl-a11-04-heute', icon: 'CalendarCheck', de: 'heute', pos: 'adv', ru: 'сегодня', example: { de: 'Heute arbeite ich mit Tom.', ru: 'Сегодня я работаю с Томом.', cloze: 'Heute' } },

    { id: 'pfl-a11-04-schicht', icon: 'Repeat', de: 'Schicht', pos: 'noun', article: 'die', plural: 'Schichten', ru: 'смена (на работе)', note: 'die Schicht ≈ der Dienst. in Schichten arbeiten — работать посменно.', collocation: { de: 'in Schichten arbeiten', ru: 'работать посменно' }, example: { de: 'Meine Schicht beginnt um sechs.', ru: 'Моя смена начинается в шесть.', cloze: 'Schicht' } },
    { id: 'pfl-a11-04-morgen', icon: 'ArrowRight', de: 'morgen', pos: 'adv', ru: 'завтра', note: 'morgen (завтра) — с маленькой буквы; der Morgen (утро) — с большой. morgen früh — завтра утром.', example: { de: 'Morgen habe ich frei.', ru: 'Завтра у меня выходной.', cloze: 'Morgen' } },
    { id: 'pfl-a11-04-pause', icon: 'Coffee', imageQuery: 'coffee break', de: 'Pause', pos: 'noun', article: 'die', plural: 'Pausen', ru: 'перерыв', collocation: { de: 'Pause machen', ru: 'сделать перерыв', accept: ['eine Pause machen'] }, example: { de: 'Wir machen jetzt Pause.', ru: 'Мы сейчас делаем перерыв.', cloze: 'Pause' } },
    { id: 'pfl-a11-04-anfangen', icon: 'Play', de: 'anfangen', pos: 'verb', ru: 'начинать(ся)', forms: 'er fängt an · hat angefangen', note: 'Отделяемая приставка: Der Dienst fängt um sechs an. du fängst an.', example: { de: 'Wann fängt der Dienst an?', ru: 'Когда начинается смена?', cloze: 'fängt' } },
    { id: 'pfl-a11-04-feierabend', icon: 'Home', de: 'Feierabend', pos: 'noun', article: 'der', plural: 'Feierabende', ru: 'конец рабочего дня; время после работы', parts: ['Feier', 'abend'], note: 'Schönen Feierabend! — Хорошего вечера! (после работы)', collocation: { de: 'Feierabend haben', ru: 'закончить работу' }, example: { de: 'Um vierzehn Uhr habe ich Feierabend.', ru: 'В четырнадцать часов я заканчиваю работу.', cloze: 'Feierabend' } },
    { id: 'pfl-a11-04-muede', icon: 'BedDouble', de: 'müde', pos: 'adj', ru: 'усталый, сонный', example: { de: 'Nach dem Nachtdienst bin ich müde.', ru: 'После ночной смены я уставшая.', cloze: 'müde' } },
    { id: 'pfl-a11-04-urlaub', icon: 'Palmtree', imageQuery: 'beach vacation', de: 'Urlaub', pos: 'noun', article: 'der', plural: 'Urlaube', ru: 'отпуск', collocation: { de: 'Urlaub haben', ru: 'быть в отпуске', accept: ['im Urlaub sein'] }, example: { de: 'Im August habe ich Urlaub.', ru: 'В августе у меня отпуск.', cloze: 'Urlaub' } },
    { id: 'pfl-a11-04-tauschen', icon: 'ArrowLeftRight', de: 'tauschen', pos: 'verb', ru: 'менять(ся), обменивать(ся)', forms: 'er tauscht · hat getauscht', note: 'den Dienst tauschen — поменяться сменами.', collocation: { de: 'den Dienst tauschen', ru: 'поменяться сменой', accept: ['die Schicht tauschen'] }, example: { de: 'Können wir den Dienst tauschen?', ru: 'Можем мы поменяться сменами?', cloze: 'tauschen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Der neue Dienstplan',
      de: `Im Büro hängt der neue Dienstplan. Olena liest ihn. Am Montag und am Dienstag hat sie Frühdienst. Am Mittwoch hat sie frei.

Am Donnerstag und am Freitag hat sie Spätdienst. Und am Wochenende? Da hat sie Nachtdienst.

Tom sagt: „Heute ist Montag. Diese Woche arbeiten wir viel zusammen!“ Olena lacht: „Ja, aber am Wochenende arbeite ich allein.“`,
      ru: `В кабинете висит новый график смен. Олена читает его. В понедельник и во вторник у неё утренние смены. В среду у неё выходной.

В четверг и в пятницу у неё вечерние смены. А на выходных? Тогда у неё ночные смены.

Том говорит: «Сегодня понедельник. На этой неделе мы много работаем вместе!» Олена смеётся: «Да, но на выходных я работаю одна».`,
      gloss: { olena: 'Олена (имя)', tom: 'Том (имя)', büro: 'кабинет, офис', hängt: 'висит', neue: 'новый', liest: 'читает', dienstag: 'вторник', mittwoch: 'среда', donnerstag: 'четверг', freitag: 'пятница', samstag: 'суббота', sonntag: 'воскресенье', da: 'тогда; там', sagt: 'говорит', diese: 'эта', viel: 'много', zusammen: 'вместе', lacht: 'смеётся', allein: 'один, одна', wann: 'когда', was: 'что', wo: 'где' },
      questions: [
        { q: 'Wann hat Olena frei?', ru: 'Когда у Олены выходной?', options: ['Am Mittwoch', 'Am Montag', 'Am Freitag'], answer: 'Am Mittwoch' },
        { q: 'Was hat Olena am Wochenende?', ru: 'Что у Олены на выходных?', options: ['Frühdienst', 'Nachtdienst', 'Frei'], answer: 'Nachtdienst' },
        { q: 'Wo hängt der Dienstplan?', ru: 'Где висит график смен?', options: ['Im Büro', 'Im Zimmer', 'Im Bett'], answer: 'Im Büro' },
      ],
      translate: [
        { de: 'Am Mittwoch habe ich frei.', ru: 'В среду у меня выходной.', wrongRu: ['В среду я работаю.', 'В понедельник у меня выходной.'] },
        { de: 'Heute habe ich Spätdienst.', ru: 'Сегодня у меня вечерняя смена.', wrongRu: ['Завтра у меня вечерняя смена.', 'Сегодня у меня ночная смена.'] },
        { de: 'Diese Woche arbeiten wir zusammen.', ru: 'На этой неделе мы работаем вместе.', wrongRu: ['На следующей неделе мы работаем вместе.', 'На этой неделе мы не работаем.'] },
      ],
    },
    {
      lesson: 1, title: 'Können wir tauschen?',
      de: `Es ist zwölf Uhr. Olena und Tom machen Pause. Tom ist müde. Er sagt: „Ich habe morgen Frühdienst. Aber mein Sohn ist krank.“

Er fragt: „Olena, können wir tauschen? Du arbeitest morgen früh und ich am Wochenende.“ Olena sagt: „Ja, gern!“

Frau Becker ändert den Dienstplan. Morgen fängt Olenas Schicht um sechs Uhr an. Um vierzehn Uhr hat sie Feierabend. Im August hat sie Urlaub.`,
      ru: `Двенадцать часов. Олена и Том делают перерыв. Том устал. Он говорит: «У меня завтра утренняя смена. Но мой сын болеет».

Он спрашивает: «Олена, можем поменяться? Ты работаешь завтра утром, а я на выходных». Олена говорит: «Да, с удовольствием!»

Госпожа Беккер меняет график. Завтра смена Олены начинается в шесть часов. В четырнадцать часов у неё конец рабочего дня. В августе у неё отпуск.`,
      gloss: { olena: 'Олена (имя)', olenas: 'Олены (чей?)', tom: 'Том (имя)', toms: 'Тома (чей?)', becker: 'Беккер (фамилия)', frau: 'госпожа', zwölf: 'двенадцать', sechs: 'шесть', vierzehn: 'четырнадцать', machen: 'делают', sagt: 'говорит', sohn: 'сын', krank: 'больной, болеет', fragt: 'спрашивает', können: 'можем, мочь', arbeitest: 'работаешь', früh: '(morgen früh) завтра утром', gern: 'охотно, с удовольствием', ändert: 'меняет', august: 'август', wer: 'кто', warum: 'почему', wann: 'когда', ist: 'есть, является' },
      questions: [
        { q: 'Wer ist krank?', ru: 'Кто болеет?', options: ['Toms Sohn', 'Tom', 'Olena'], answer: 'Toms Sohn' },
        { q: 'Wann hat Olena morgen Feierabend?', ru: 'Когда у Олены завтра конец рабочего дня?', options: ['Um vierzehn Uhr', 'Um sechs Uhr', 'Um zwölf Uhr'], answer: 'Um vierzehn Uhr' },
        { q: 'Wann hat Olena Urlaub?', ru: 'Когда у Олены отпуск?', options: ['Im August', 'Am Wochenende', 'Morgen'], answer: 'Im August' },
      ],
      translate: [
        { de: 'Können wir den Dienst tauschen?', ru: 'Можем мы поменяться сменами?', wrongRu: ['Можем мы отменить смену?', 'Можем мы работать вместе?'] },
        { de: 'Nach dem Dienst bin ich müde.', ru: 'После смены я уставший.', wrongRu: ['Перед сменой я уставший.', 'После смены я голодный.'] },
        { de: 'Um vierzehn Uhr habe ich Feierabend.', ru: 'В четырнадцать часов я заканчиваю работу.', wrongRu: ['В четырнадцать часов я начинаю работу.', 'В четыре часа я заканчиваю работу.'] },
      ],
    },
  ],
};
