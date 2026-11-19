import type { Module } from '../types.ts';

// A2.2 mathe 10: registering for and preparing an exam with old exams and a study group (lesson 0), reviewing the marked exam and talking to the professor (lesson 1).

export const module: Module = {
  id: 'mathe-a22-10-pruefungen', sphere: 'mathe', level: 'A2.2',
  title: 'Prüfungen an der Uni', subtitle: 'Экзамен, регистрация, старые варианты, просмотр работы, консультация и учебный план.',
  words: [
    { id: 'mat-a22-10-klausur', icon: 'FileText', de: 'Klausur', pos: 'noun', article: 'die', plural: 'Klausuren', ru: 'письменный экзамен (в вузе)', note: 'В Австрии часто говорят die Prüfung или die schriftliche Prüfung.', collocation: { de: 'eine Klausur schreiben', ru: 'писать экзамен', accept: ['die Klausur schreiben'] }, example: { de: 'Die Klausur dauert drei Stunden.', ru: 'Письменный экзамен длится три часа.', cloze: 'Klausur' } },
    { id: 'mat-a22-10-pruefungstermin', icon: 'CalendarDays', de: 'Prüfungstermin', pos: 'noun', article: 'der', plural: 'Prüfungstermine', ru: 'дата экзамена', parts: ['Prüfungs', 'termin'], example: { de: 'Der erste Prüfungstermin ist Ende Jänner.', ru: 'Первая дата экзамена — конец января.', cloze: 'Prüfungstermin' } },
    { id: 'mat-a22-10-sich-anmelden', icon: 'LogIn', de: 'sich anmelden', pos: 'verb', ru: 'записываться, регистрироваться', forms: 'er meldet sich an · hat sich angemeldet', note: 'sich für + Akk / zu + Dat anmelden. Противоположность: sich abmelden.', example: { de: 'Sophie meldet sich online für die Prüfung an.', ru: 'Софи регистрируется на экзамен онлайн.', cloze: 'meldet' } },
    { id: 'mat-a22-10-altklausur', icon: 'History', de: 'Altklausur', pos: 'noun', article: 'die', plural: 'Altklausuren', ru: 'вариант экзамена прошлых лет', parts: ['Alt', 'klausur'], example: { de: 'Mit Altklausuren kann man gut üben.', ru: 'По старым вариантам хорошо тренироваться.', cloze: 'Altklausuren' } },
    { id: 'mat-a22-10-lerngruppe', icon: 'Users', de: 'Lerngruppe', pos: 'noun', article: 'die', plural: 'Lerngruppen', ru: 'учебная группа (для совместной подготовки)', parts: ['Lern', 'gruppe'], example: { de: 'Unsere Lerngruppe trifft sich in der Bibliothek.', ru: 'Наша учебная группа встречается в библиотеке.', cloze: 'Lerngruppe' } },
    { id: 'mat-a22-10-pruefungsangst', icon: 'Frown', de: 'Prüfungsangst', pos: 'noun', article: 'die', ru: 'страх перед экзаменом', parts: ['Prüfungs', 'angst'], note: 'die Angst — страх. Prüfungsangst haben.', example: { de: 'David hat große Prüfungsangst.', ru: 'У Давида сильный страх перед экзаменами.', cloze: 'Prüfungsangst' } },
    { id: 'mat-a22-10-lehrveranstaltung', icon: 'Presentation', de: 'Lehrveranstaltung', pos: 'noun', article: 'die', plural: 'Lehrveranstaltungen', ru: 'учебный курс, занятие (общее слово)', parts: ['Lehr', 'veranstaltung'], note: 'Сокращение: LVA (в Австрии). Лекция, практика, семинар — всё это Lehrveranstaltungen.', example: { de: 'Für jede Lehrveranstaltung gibt es ECTS-Punkte.', ru: 'За каждый курс начисляются кредиты ECTS.', cloze: 'Lehrveranstaltung' } },
    { id: 'mat-a22-10-ects-punkt', icon: 'Coins', de: 'ECTS-Punkt', pos: 'noun', article: 'der', plural: 'ECTS-Punkte', ru: 'кредит ECTS', note: 'Читается «е-це-те-эс». Один семестр — около 30 ECTS-Punkte.', example: { de: 'Ein Semester hat ungefähr dreißig ECTS-Punkte.', ru: 'В семестре около тридцати кредитов ECTS.', cloze: 'ECTS-Punkte' } },
    { id: 'mat-a22-10-einsicht', icon: 'Eye', de: 'Einsicht', pos: 'noun', article: 'die', plural: 'Einsichten', ru: 'просмотр (проверенной работы); понимание', note: 'die Prüfungseinsicht — можно посмотреть свою проверенную работу.', example: { de: 'Bei der Einsicht sieht David seine Fehler.', ru: 'На просмотре работы Давид видит свои ошибки.', cloze: 'Einsicht' } },
    { id: 'mat-a22-10-antritt', icon: 'RotateCw', de: 'Antritt', pos: 'noun', article: 'der', plural: 'Antritte', ru: 'попытка (сдачи экзамена)', note: 'Австрийское: der erste / zweite Antritt — первая / вторая попытка.', example: { de: 'Das war erst sein erster Antritt.', ru: 'Это была только его первая попытка.', cloze: 'Antritt' } },
    { id: 'mat-a22-10-sprechstunde', icon: 'MessagesSquare', de: 'Sprechstunde', pos: 'noun', article: 'die', plural: 'Sprechstunden', ru: 'консультация, приёмные часы', parts: ['Sprech', 'stunde'], example: { de: 'Der Professor hat am Mittwoch Sprechstunde.', ru: 'У профессора приёмные часы в среду.', cloze: 'Sprechstunde' } },
    { id: 'mat-a22-10-nachfragen', icon: 'CircleHelp', de: 'nachfragen', pos: 'verb', ru: 'переспрашивать, уточнять', forms: 'er fragt nach · hat nachgefragt', note: 'bei + Dat nachfragen — уточнить у кого-то.', example: { de: 'David fragt beim Professor nach.', ru: 'Давид уточняет у профессора.', cloze: 'fragt' } },
    { id: 'mat-a22-10-bewerten', icon: 'Star', de: 'bewerten', pos: 'verb', ru: 'оценивать', forms: 'er bewertet · hat bewertet', note: 'Существительное: die Bewertung.', example: { de: 'Die Aufgabe wurde mit null Punkten bewertet.', ru: 'Задачу оценили в ноль баллов.', cloze: 'bewertet' } },
    { id: 'mat-a22-10-studienplan', icon: 'Map', de: 'Studienplan', pos: 'noun', article: 'der', plural: 'Studienpläne', ru: 'учебный план (программы)', parts: ['Studien', 'plan'], note: 'В Австрии официально: das Curriculum.', example: { de: 'Laut Studienplan ist Analysis im ersten Semester.', ru: 'По учебному плану анализ — в первом семестре.', cloze: 'Studienplan' } },
    { id: 'mat-a22-10-pflichtfach', icon: 'BookLock', de: 'Pflichtfach', pos: 'noun', article: 'das', plural: 'Pflichtfächer', ru: 'обязательный предмет', parts: ['Pflicht', 'fach'], note: 'die Pflicht — обязанность. Противоположность: das Wahlfach.', example: { de: 'Analysis ist ein Pflichtfach.', ru: 'Анализ — обязательный предмет.', cloze: 'Pflichtfach' } },
    { id: 'mat-a22-10-abbrechen', icon: 'CircleStop', de: 'abbrechen', pos: 'verb', ru: 'бросать, прерывать', forms: 'er bricht ab · hat abgebrochen', note: 'das Studium abbrechen — бросить учёбу.', example: { de: 'David will das Studium nicht abbrechen.', ru: 'Давид не хочет бросать учёбу.', cloze: 'abbrechen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Vor der Analysis-Prüfung',
      de: `Das Wintersemester ist fast vorbei. Der erste Prüfungstermin für Analysis ist Ende Jänner. Sophie meldet sich online für die Klausur an. Analysis ist eine wichtige Lehrveranstaltung und bringt viele ECTS-Punkte. Ein ganzes Semester hat ungefähr dreißig.

Sophie und David gründen eine Lerngruppe mit zwei anderen Studierenden. Sie treffen sich jeden Tag in der Bibliothek. Am besten helfen die Altklausuren: Die Aufgaben sind oft ähnlich wie in der echten Prüfung.

David hat große Prüfungsangst. In der Nacht vor der Klausur schläft er kaum. Sophie sagt: „Du hast so viel geübt. Atme ruhig und lies jede Aufgabe genau.“`,
      ru: `Зимний семестр почти закончился. Первая дата экзамена по анализу — конец января. Софи регистрируется на экзамен онлайн. Анализ — важный курс, и за него дают много кредитов ECTS. Во всём семестре их около тридцати.

Софи и Давид создают учебную группу ещё с двумя студентами. Они каждый день встречаются в библиотеке. Лучше всего помогают старые варианты: задачи часто похожи на те, что в настоящем экзамене.

У Давида сильный страх перед экзаменом. В ночь перед экзаменом он почти не спит. Софи говорит: «Ты так много тренировался. Дыши спокойно и внимательно читай каждую задачу».`,
      gloss: { anfang: 'начало', oktober: 'октябрь', sommer: 'лето', trifft: 'встречается (sich treffen)', wintersemester: 'зимний семестр', fast: 'почти', vorbei: 'закончился, позади', erste: 'первая', für: 'для, на', analysis: 'математический анализ', ende: 'конец', jänner: 'январь (в Австрии)', sophie: 'Софи (имя)', online: 'онлайн', wichtige: 'важный', bringt: 'приносит', viele: 'много', ganzes: 'целый', semester: 'семестр', ungefähr: 'около', dreißig: 'тридцать', david: 'Давид (имя)', gründen: 'создают', mit: 'с', anderen: 'другими', studierenden: 'студентами', treffen: 'встречаются (sich treffen)', jeden: 'каждый', bibliothek: 'библиотека', besten: 'лучше всего (am besten)', helfen: 'помогают', aufgaben: 'задачи', oft: 'часто', ähnlich: 'похожи', wie: 'как', echten: 'настоящем', prüfung: 'экзамен', große: 'большой, сильный', nacht: 'ночь', vor: 'перед', schläft: 'спит', kaum: 'почти не', hast: 'имеешь (du hast geübt — ты тренировался)', so: 'так', viel: 'много', geübt: 'тренировался', atme: 'дыши', ruhig: 'спокойно', lies: 'читай', jede: 'каждую', aufgabe: 'задачу', genau: 'внимательно, точно', was: 'что', wann: 'когда', wo: 'где', wer: 'кто' },
      questions: [
        { q: 'Wann ist der erste Prüfungstermin?', ru: 'Когда первая дата экзамена?', options: ['Ende Jänner', 'Anfang Oktober', 'Im Sommer'], answer: 'Ende Jänner' },
        { q: 'Wo trifft sich die Lerngruppe?', ru: 'Где встречается учебная группа?', options: ['In der Bibliothek', 'Im Hörsaal', 'Zu Hause'], answer: 'In der Bibliothek' },
        { q: 'Was hilft am besten?', ru: 'Что помогает лучше всего?', options: ['Die Altklausuren', 'Das Handy', 'Der Studienplan'], answer: 'Die Altklausuren' },
      ],
      translate: [
        { de: 'Sophie meldet sich für die Klausur an.', ru: 'Софи регистрируется на экзамен.', wrongRu: ['Софи снимается с экзамена.', 'Софи сдаёт экзамен.'] },
        { de: 'Sie treffen sich in der Bibliothek.', ru: 'Они встречаются в библиотеке.', wrongRu: ['Они встречаются в аудитории.', 'Они занимаются дома.'] },
        { de: 'David hat große Prüfungsangst.', ru: 'У Давида сильный страх перед экзаменом.', wrongRu: ['Давид совсем не боится экзамена.', 'У Софи сильный страх перед экзаменом.'] },
      ],
    },
    {
      lesson: 1, title: 'Zwei Punkte zu wenig',
      de: `Drei Wochen später kommen die Ergebnisse. Sophie hat bestanden. David fehlen zwei Punkte, er ist negativ. Zuerst will er das Studium abbrechen. „Das war erst dein erster Antritt“, sagt Sophie. „Geh zur Einsicht!“

Bei der Einsicht sieht David seine Klausur. Aufgabe drei wurde mit null Punkten bewertet, aber der Ansatz war richtig. Er geht in die Sprechstunde des Professors und fragt nach. Der Professor liest die Aufgabe noch einmal: „Sie haben recht, der Ansatz ist gut. Dafür gibt es drei Punkte.“

Jetzt ist David positiv. Er ist sehr erleichtert, denn laut Studienplan ist Analysis ein Pflichtfach. Ohne diese Prüfung kann er im Sommersemester einige Lehrveranstaltungen nicht besuchen.`,
      ru: `Через три недели приходят результаты. Софи сдала. Давиду не хватает двух баллов, у него «неуд». Сначала он хочет бросить учёбу. «Это была только твоя первая попытка, — говорит Софи. — Сходи на просмотр работы!»

На просмотре Давид видит свою работу. Третью задачу оценили в ноль баллов, но подход был верным. Он идёт к профессору на консультацию и уточняет. Профессор ещё раз читает задачу: «Вы правы, подход хороший. За это полагается три балла».

Теперь у Давида положительная оценка. Он испытывает огромное облегчение, ведь по учебному плану анализ — обязательный предмет. Без этого экзамена он не сможет посещать некоторые курсы в летнем семестре.`,
      gloss: { später: 'позже (drei Wochen später — через три недели)', kommen: 'приходят', ergebnisse: 'результаты', sophie: 'Софи (имя)', bestanden: 'сдала', david: 'Давид (имя)', fehlen: 'не хватает', punkte: 'баллов, баллы', negativ: 'отрицательный (о результате: не сдал)', zuerst: 'сначала', will: 'хочет', studium: 'учёба (в вузе)', war: 'была', erst: 'только', dein: 'твоя', erster: 'первая', geh: 'иди, сходи', zur: 'на, к', bei: 'на, при', sieht: 'видит', seine: 'свою', aufgabe: 'задача', wurde: 'была', mit: 'в, с', null: 'ноль', punkten: 'баллов', aber: 'но', ansatz: 'подход', richtig: 'верный', geht: 'идёт', des: 'артикль (род. п.)', professors: 'профессора', professor: 'профессор', liest: 'читает', noch: 'ещё', einmal: 'раз', recht: 'правы (recht haben)', gut: 'хороший', dafür: 'за это', jetzt: 'теперь', positiv: 'положительный (о результате: сдал)', erleichtert: 'испытывает облегчение', denn: 'ведь', laut: 'согласно', analysis: 'математический анализ', ohne: 'без', diese: 'этого', prüfung: 'экзамен', kann: 'может', sommersemester: 'летний семестр', einige: 'некоторые', lehrveranstaltungen: 'курсы', besuchen: 'посещать', zu: 'слишком', wenig: 'мало', wie: 'как', viele: 'сколько (wie viele)', was: 'что', welche: 'какая', warum: 'почему', wo: 'где' },
      questions: [
        { q: 'Wie viele Punkte fehlen David?', ru: 'Скольких баллов не хватает Давиду?', options: ['Zwei', 'Drei', 'Null'], answer: 'Zwei' },
        { q: 'Welche Aufgabe wurde mit null Punkten bewertet?', ru: 'Какую задачу оценили в ноль баллов?', options: ['Aufgabe drei', 'Aufgabe eins', 'Aufgabe zwei'], answer: 'Aufgabe drei' },
        { q: 'Warum ist David so erleichtert?', ru: 'Почему Давид так рад?', options: ['Analysis ist ein Pflichtfach.', 'Er bricht das Studium ab.', 'Die Klausur war leicht.'], answer: 'Analysis ist ein Pflichtfach.' },
      ],
      translate: [
        { de: 'Das war erst dein erster Antritt.', ru: 'Это была только твоя первая попытка.', wrongRu: ['Это была уже твоя последняя попытка.', 'Это был твой первый экзамен в жизни.'] },
        { de: 'Er geht in die Sprechstunde.', ru: 'Он идёт на консультацию.', wrongRu: ['Он идёт на лекцию.', 'Он пропускает консультацию.'] },
        { de: 'Analysis ist ein Pflichtfach.', ru: 'Анализ — обязательный предмет.', wrongRu: ['Анализ — предмет по выбору.', 'Анализ — необязательный курс.'] },
      ],
    },
  ],
};
