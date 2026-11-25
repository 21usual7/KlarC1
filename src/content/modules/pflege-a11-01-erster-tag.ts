import type { Module } from '../types.ts';

// A1.1 pflege 01: first day on the ward, people and places (lesson 0); early shift, colleague, patient (lesson 1).

export const module: Module = {
  id: 'pflege-a11-01-erster-tag', sphere: 'pflege', level: 'A1.1',
  title: 'Erster Tag im Krankenhaus', subtitle: 'Больница, отделение, палата: как поздороваться и представиться в первый рабочий день.',
  words: [
    { id: 'pfl-a11-01-krankenhaus', icon: 'Hospital', imageQuery: 'hospital building', de: 'Krankenhaus', pos: 'noun', article: 'das', plural: 'Krankenhäuser', ru: 'больница', parts: ['Kranken', 'haus'], note: 'krank (больной) + Haus (дом). Синоним — die Klinik.', collocation: { de: 'im Krankenhaus arbeiten', ru: 'работать в больнице', accept: ['in einem Krankenhaus arbeiten'] }, example: { de: 'Ich arbeite im Krankenhaus.', ru: 'Я работаю в больнице.', cloze: 'Krankenhaus' } },
    { id: 'pfl-a11-01-pflegekraft', icon: 'HeartHandshake', imageQuery: 'nurse hospital', de: 'Pflegekraft', pos: 'noun', article: 'die', plural: 'Pflegekräfte', ru: 'медсестра, медбрат; сотрудник по уходу', parts: ['Pflege', 'kraft'], note: 'Нейтральное слово для мужчин и женщин. Также: die Pflegefachfrau / der Pflegefachmann.', example: { de: 'Olena ist Pflegekraft.', ru: 'Олена — медсестра.', cloze: 'Pflegekraft' } },
    { id: 'pfl-a11-01-arzt', icon: 'Stethoscope', imageQuery: 'doctor stethoscope', de: 'Arzt', pos: 'noun', article: 'der', plural: 'Ärzte', ru: 'врач', note: 'Женщина-врач — die Ärztin. Обращение: Herr Doktor / Frau Doktor + фамилия.', collocation: { de: 'den Arzt rufen', ru: 'позвать врача', accept: ['einen Arzt rufen'] }, example: { de: 'Der Arzt kommt um acht Uhr.', ru: 'Врач приходит в восемь часов.', cloze: 'Arzt' } },
    { id: 'pfl-a11-01-patient', icon: 'UserRound', imageQuery: 'patient hospital bed', de: 'Patient', pos: 'noun', article: 'der', plural: 'Patienten', ru: 'пациент', note: 'Пациентка — die Patientin. Особое склонение: den / dem Patienten.', example: { de: 'Der Patient heißt Herr Schmidt.', ru: 'Пациента зовут господин Шмидт.', cloze: 'Patient' } },
    { id: 'pfl-a11-01-station', icon: 'Building2', imageQuery: 'hospital ward corridor', de: 'Station', pos: 'noun', article: 'die', plural: 'Stationen', ru: 'отделение (в больнице)', note: 'auf der Station — в отделении (с auf, не in).', collocation: { de: 'auf der Station arbeiten', ru: 'работать в отделении', accept: ['auf Station arbeiten'] }, example: { de: 'Ich arbeite auf Station drei.', ru: 'Я работаю в третьем отделении.', cloze: 'Station' } },
    { id: 'pfl-a11-01-zimmer', icon: 'DoorOpen', imageQuery: 'hospital room', de: 'Zimmer', pos: 'noun', article: 'das', plural: 'Zimmer', ru: 'комната; палата (в больнице)', note: 'Мн. ч. не меняется: ein Zimmer — zwei Zimmer.', collocation: { de: 'in Zimmer fünf', ru: 'в палате номер пять', accept: ['im Zimmer fünf'] }, example: { de: 'Herr Schmidt liegt in Zimmer fünf.', ru: 'Господин Шмидт лежит в палате пять.', cloze: 'Zimmer' } },
    { id: 'pfl-a11-01-heissen', icon: 'MessageCircle', de: 'heißen', pos: 'verb', ru: 'зваться, называться', forms: 'er heißt · hat geheißen', note: 'Ich heiße … — меня зовут …; Wie heißen Sie? — Как вас зовут?', collocation: { de: 'Wie heißen Sie?', ru: 'Как вас зовут?', accept: ['Wie heißt du?'] }, example: { de: 'Ich heiße Olena.', ru: 'Меня зовут Олена.', cloze: 'heiße' } },
    { id: 'pfl-a11-01-guten-morgen', icon: 'Sunrise', de: 'Guten Morgen', pos: 'phrase', ru: 'доброе утро', note: 'До ~11 часов. Днём — Guten Tag, вечером — Guten Abend.', example: { de: 'Guten Morgen, Frau Becker!', ru: 'Доброе утро, госпожа Беккер!', cloze: 'Guten Morgen' } },

    { id: 'pfl-a11-01-kollege', icon: 'Users', imageQuery: 'nurses team hospital', de: 'Kollege', pos: 'noun', article: 'der', plural: 'Kollegen', ru: 'коллега', note: 'Коллега-женщина — die Kollegin. Особое склонение: den / dem Kollegen.', example: { de: 'Tom ist mein Kollege.', ru: 'Том — мой коллега.', cloze: 'Kollege' } },
    { id: 'pfl-a11-01-neu', icon: 'Sparkles', de: 'neu', pos: 'adj', ru: 'новый', note: 'Ich bin neu hier. — Я здесь новенький / новенькая.', collocation: { de: 'eine neue Kollegin', ru: 'новая коллега', accept: ['ein neuer Kollege'] }, example: { de: 'Ich bin neu auf der Station.', ru: 'Я новенькая в отделении.', cloze: 'neu' } },
    { id: 'pfl-a11-01-arbeiten', icon: 'Briefcase', de: 'arbeiten', pos: 'verb', ru: 'работать', forms: 'er arbeitet · hat gearbeitet', note: 'du arbeitest, er arbeitet — с -e- перед окончанием.', collocation: { de: 'als Pflegekraft arbeiten', ru: 'работать медсестрой', accept: ['im Krankenhaus arbeiten'] }, example: { de: 'Tom arbeitet heute mit Olena.', ru: 'Том сегодня работает с Оленой.', cloze: 'arbeitet' } },
    { id: 'pfl-a11-01-helfen', icon: 'HandHelping', de: 'helfen', pos: 'verb', ru: 'помогать', forms: 'er hilft · hat geholfen', note: 'helfen + Dat: Ich helfe dem Patienten. du hilfst, er hilft.', collocation: { de: 'dem Patienten helfen', ru: 'помочь пациенту', accept: ['einem Patienten helfen'] }, example: { de: 'Kann ich Ihnen helfen?', ru: 'Могу я вам помочь?', cloze: 'helfen' } },
    { id: 'pfl-a11-01-namensschild', icon: 'IdCard', imageQuery: 'name badge nurse', de: 'Namensschild', pos: 'noun', article: 'das', plural: 'Namensschilder', ru: 'бейдж (с именем)', parts: ['Namens', 'schild'], note: 'Name (имя) + s + Schild (табличка).', example: { de: 'Auf dem Namensschild steht mein Name.', ru: 'На бейдже написано моё имя.', cloze: 'Namensschild' } },
    { id: 'pfl-a11-01-fruehdienst', icon: 'AlarmClock', de: 'Frühdienst', pos: 'noun', article: 'der', plural: 'Frühdienste', ru: 'утренняя смена', parts: ['Früh', 'dienst'], note: 'Смены: der Frühdienst, der Spätdienst (вечерняя), der Nachtdienst (ночная).', collocation: { de: 'Frühdienst haben', ru: 'работать в утреннюю смену', accept: ['im Frühdienst arbeiten'] }, example: { de: 'Heute habe ich Frühdienst.', ru: 'Сегодня у меня утренняя смена.', cloze: 'Frühdienst' } },
    { id: 'pfl-a11-01-bett', icon: 'BedSingle', imageQuery: 'hospital bed', de: 'Bett', pos: 'noun', article: 'das', plural: 'Betten', ru: 'кровать, койка', collocation: { de: 'das Bett machen', ru: 'заправить кровать', accept: ['ein Bett machen'] }, example: { de: 'Wir machen das Bett zusammen.', ru: 'Мы вместе заправляем кровать.', cloze: 'Bett' } },
    { id: 'pfl-a11-01-wie-geht-es-ihnen', icon: 'Smile', de: 'Wie geht es Ihnen?', pos: 'phrase', ru: 'Как вы себя чувствуете? Как у вас дела?', note: 'Вежливо, на «вы». На «ты»: Wie geht es dir? Ответ: Danke, gut.', example: { de: 'Guten Tag, Frau Lehmann! Wie geht es Ihnen?', ru: 'Добрый день, госпожа Леман! Как вы себя чувствуете?', cloze: 'Wie geht es Ihnen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Olena ist neu',
      de: `Olena ist neu im Krankenhaus. Sie ist Pflegekraft. Heute ist ihr erster Tag auf Station drei.

Eine Frau kommt und sagt: „Guten Morgen! Ich heiße Frau Becker. Ich bin die Stationsleitung.“ Olena sagt: „Guten Morgen! Ich heiße Olena Kovalenko.“

Frau Becker zeigt Olena die Station. Hier sind zwölf Zimmer. In Zimmer fünf liegt ein Patient. Er heißt Herr Schmidt. Dann kommt ein Arzt. Er heißt Doktor Wagner. Er sagt: „Herzlich willkommen!“`,
      ru: `Олена — новенькая в больнице. Она медсестра. Сегодня её первый день в третьем отделении.

Подходит женщина и говорит: «Доброе утро! Меня зовут госпожа Беккер. Я заведующая отделением». Олена говорит: «Доброе утро! Меня зовут Олена Коваленко».

Госпожа Беккер показывает Олене отделение. Здесь двенадцать палат. В палате пять лежит пациент. Его зовут господин Шмидт. Потом приходит врач. Его зовут доктор Вагнер. Он говорит: «Добро пожаловать!»`,
      gloss: { olena: 'Олена (имя)', kovalenko: 'Коваленко (фамилия)', becker: 'Беккер (фамилия)', schmidt: 'Шмидт (фамилия)', wagner: 'Вагнер (фамилия)', frau: 'госпожа; женщина', herr: 'господин', doktor: 'доктор', heute: 'сегодня', erster: 'первый', tag: 'день', drei: 'три', fünf: 'пять', zwölf: 'двенадцать', stationsleitung: 'заведующая (старшая медсестра) отделения', zeigt: 'показывает', liegt: 'лежит', herzlich: 'сердечно; (Herzlich willkommen!) Добро пожаловать!', willkommen: 'добро пожаловать', hier: 'здесь', dann: 'потом, затем', kommt: 'приходит', sagt: 'говорит', wie: 'как; сколько (wie viele)', viele: 'много; (wie viele) сколько', wer: 'кто' },
      questions: [
        { q: 'Wer ist neu im Krankenhaus?', ru: 'Кто новенький в больнице?', options: ['Olena', 'Frau Becker', 'Herr Schmidt'], answer: 'Olena' },
        { q: 'Wie viele Zimmer sind auf der Station?', ru: 'Сколько палат в отделении?', options: ['Fünf', 'Zwölf', 'Drei'], answer: 'Zwölf' },
        { q: 'Wer liegt in Zimmer fünf?', ru: 'Кто лежит в палате пять?', options: ['Doktor Wagner', 'Herr Schmidt', 'Frau Becker'], answer: 'Herr Schmidt' },
      ],
      translate: [
        { de: 'Ich heiße Olena.', ru: 'Меня зовут Олена.', wrongRu: ['Её зовут Олена.', 'Я знаю Олену.'] },
        { de: 'Der Patient liegt in Zimmer fünf.', ru: 'Пациент лежит в палате пять.', wrongRu: ['Пациент лежит в палате три.', 'Врач стоит в палате пять.', 'Пациентка лежит в палате пять.'] },
        { de: 'Olena ist neu auf der Station.', ru: 'Олена новенькая в отделении.', wrongRu: ['Олена давно работает в отделении.', 'Олена новенькая в школе.'] },
      ],
    },
    {
      lesson: 1, title: 'Im Frühdienst',
      de: `Der Frühdienst beginnt um sechs Uhr. Olena arbeitet heute mit Tom. Tom ist ihr Kollege. Er ist sehr nett.

Olena und Tom gehen in Zimmer fünf. Olena fragt: „Guten Morgen, Herr Schmidt! Wie geht es Ihnen?“ Herr Schmidt sagt: „Danke, gut. Aber das Bett ist nicht gut.“

Tom hilft Olena. Sie machen das Bett zusammen. Dann liest Herr Schmidt Olenas Namensschild. Er sagt: „Olena – ein schöner Name!“`,
      ru: `Утренняя смена начинается в шесть часов. Олена сегодня работает с Томом. Том — её коллега. Он очень милый.

Олена и Том идут в палату пять. Олена спрашивает: «Доброе утро, господин Шмидт! Как вы себя чувствуете?» Господин Шмидт говорит: «Спасибо, хорошо. Но кровать неудобная».

Том помогает Олене. Они вместе заправляют кровать. Потом господин Шмидт читает бейдж Олены. Он говорит: «Олена — красивое имя!»`,
      gloss: { olena: 'Олена (имя)', olenas: 'Олены (чей?)', tom: 'Том (имя)', schmidt: 'Шмидт (фамилия)', herr: 'господин', beginnt: 'начинается', sechs: 'шесть', acht: 'восемь', zwölf: 'двенадцать', fünf: 'пять', uhr: 'час (о времени); часы', heute: 'сегодня', nett: 'милый, приятный', gehen: 'идут, идти', fragt: 'спрашивает', danke: 'спасибо', gut: 'хорошо, хороший', sagt: 'говорит', machen: 'делают; (das Bett machen) заправлять кровать', zusammen: 'вместе', dann: 'потом, затем', liest: 'читает', schöner: 'красивый', name: 'имя', wann: 'когда', was: 'что', wer: 'кто', ein: 'один, какой-то' },
      questions: [
        { q: 'Wann beginnt der Frühdienst?', ru: 'Когда начинается утренняя смена?', options: ['Um sechs Uhr', 'Um acht Uhr', 'Um zwölf Uhr'], answer: 'Um sechs Uhr' },
        { q: 'Wer ist Tom?', ru: 'Кто такой Том?', options: ['Ein Patient', 'Olenas Kollege', 'Ein Arzt'], answer: 'Olenas Kollege' },
        { q: 'Was ist nicht gut?', ru: 'Что не в порядке?', options: ['Das Zimmer', 'Das Bett', 'Der Name'], answer: 'Das Bett' },
      ],
      translate: [
        { de: 'Tom ist mein Kollege.', ru: 'Том — мой коллега.', wrongRu: ['Том — мой пациент.', 'Том — её коллега.'] },
        { de: 'Wie geht es Ihnen, Herr Schmidt?', ru: 'Как вы себя чувствуете, господин Шмидт?', wrongRu: ['Как вас зовут, господин Шмидт?', 'Где вы работаете, господин Шмидт?'] },
        { de: 'Tom hilft Olena mit dem Bett.', ru: 'Том помогает Олене с кроватью.', wrongRu: ['Олена помогает Тому с кроватью.', 'Том помогает Олене с палатой.', 'Том заправляет кровать без Олены.'] },
      ],
    },
  ],
};
