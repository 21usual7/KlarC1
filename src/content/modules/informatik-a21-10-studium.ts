import type { Module } from '../types.ts';

// A2.1 informatik 10: the first weeks at TU Wien (lesson 0) and preparing for an exam (lesson 1).

export const module: Module = {
  id: 'informatik-a21-10-studium', sphere: 'informatik', level: 'A2.1',
  title: 'Informatik studieren', subtitle: 'Семестр, лекция, экзамен, оценка: как устроена учёба в TU Wien.',
  words: [
    { id: 'inf-a21-10-semester', icon: 'CalendarDays', imageQuery: 'university lecture hall', de: 'Semester', pos: 'noun', article: 'das', plural: 'Semester', ru: 'семестр', note: 'Wintersemester начинается в октябре, Sommersemester — в марте.', collocation: { de: 'im ersten Semester', ru: 'на первом семестре' }, example: { de: 'Das Semester beginnt im Oktober.', ru: 'Семестр начинается в октябре.', cloze: 'Semester' } },
    { id: 'inf-a21-10-lehrveranstaltung', icon: 'BookOpen', imageQuery: 'university lecture', de: 'Lehrveranstaltung', pos: 'noun', article: 'die', plural: 'Lehrveranstaltungen', ru: 'учебное занятие, курс (в вузе)', parts: ['Lehr', 'veranstaltung'], note: 'Общее слово для лекции, упражнения, семинара. В Австрии сокращают: LVA.', example: { de: 'Diese Lehrveranstaltung ist für alle Pflicht.', ru: 'Этот курс обязателен для всех.', cloze: 'Lehrveranstaltung' } },
    { id: 'inf-a21-10-vorlesung', icon: 'Presentation', imageQuery: 'university lecture with professor', de: 'Vorlesung', pos: 'noun', article: 'die', plural: 'Vorlesungen', ru: 'лекция', collocation: { de: 'eine Vorlesung besuchen', ru: 'посещать лекцию', accept: ['die Vorlesung besuchen'] }, example: { de: 'Die Vorlesung ist am Dienstag um acht.', ru: 'Лекция во вторник в восемь.', cloze: 'Vorlesung' } },
    { id: 'inf-a21-10-hoersaal', icon: 'Landmark', imageQuery: 'lecture hall', de: 'Hörsaal', pos: 'noun', article: 'der', plural: 'Hörsäle', ru: 'аудитория, лекционный зал', parts: ['Hör', 'saal'], example: { de: 'Der Hörsaal ist heute ganz voll.', ru: 'Аудитория сегодня совсем заполнена.', cloze: 'Hörsaal' } },
    { id: 'inf-a21-10-uebung', icon: 'PencilLine', imageQuery: 'students exercise class', de: 'Übung', pos: 'noun', article: 'die', plural: 'Übungen', ru: 'практическое занятие; упражнение', note: 'В австрийских вузах Übung — занятие с задачами к лекции.', example: { de: 'In der Übung lösen wir Aufgaben.', ru: 'На практическом занятии мы решаем задачи.', cloze: 'Übung' } },
    { id: 'inf-a21-10-pruefung', icon: 'ClipboardCheck', imageQuery: 'students writing exam', de: 'Prüfung', pos: 'noun', article: 'die', plural: 'Prüfungen', ru: 'экзамен', collocation: { de: 'eine Prüfung schreiben', ru: 'писать экзамен', accept: ['die Prüfung schreiben', 'eine Prüfung ablegen'] }, example: { de: 'Morgen schreibe ich eine schwere Prüfung.', ru: 'Завтра я пишу трудный экзамен.', cloze: 'Prüfung' } },
    { id: 'inf-a21-10-einschreiben', icon: 'GraduationCap', de: 'sich einschreiben', pos: 'verb', ru: 'зачисляться (в вуз), записываться', forms: 'er schreibt sich ein · hat sich eingeschrieben', note: 'Отделяемая приставка. Существительное: die Einschreibung — зачисление.', example: { de: 'Lena schreibt sich im Herbst an der Universität ein.', ru: 'Лена осенью зачисляется в университет.', cloze: 'schreibt' } },
    { id: 'inf-a21-10-bestehen', icon: 'Award', de: 'bestehen', pos: 'verb', ru: 'сдать (экзамен), выдержать', forms: 'er besteht · bestand · hat bestanden', note: '+ Akk: eine Prüfung bestehen. Не путать: bestehen aus + Dat — состоять из.', collocation: { de: 'die Prüfung bestehen', ru: 'сдать экзамен', accept: ['eine Prüfung bestehen'] }, example: { de: 'Sie hat die Prüfung bestanden.', ru: 'Она сдала экзамен.', cloze: 'bestanden' } },

    { id: 'inf-a21-10-note', icon: 'Star', imageQuery: 'school report grades', de: 'Note', pos: 'noun', article: 'die', plural: 'Noten', ru: 'оценка', note: 'В Австрии: 1 — sehr gut, 2 — gut, 3 — befriedigend, 4 — genügend, 5 — nicht genügend.', collocation: { de: 'eine gute Note bekommen', ru: 'получить хорошую оценку' }, example: { de: 'Ich habe eine gute Note bekommen.', ru: 'Я получил хорошую оценку.', cloze: 'Note' } },
    { id: 'inf-a21-10-abgabe', icon: 'Send', imageQuery: 'handing in paper', de: 'Abgabe', pos: 'noun', article: 'die', plural: 'Abgaben', ru: 'сдача (работы); работа к сдаче', note: 'От abgeben — сдавать. Die Abgabe ist am Freitag — сдать нужно в пятницу.', example: { de: 'Die Abgabe ist am Sonntag um Mitternacht.', ru: 'Сдача в воскресенье в полночь.', cloze: 'Abgabe' } },
    { id: 'inf-a21-10-tutorium', icon: 'GraduationCap', imageQuery: 'tutoring session', de: 'Tutorium', pos: 'noun', article: 'das', plural: 'Tutorien', ru: 'тьюториал, занятие с тьютором', note: 'Ведёт его тьютор — обычно студент старшего курса.', example: { de: 'Im Tutorium erklärt eine Studentin den Stoff.', ru: 'На тьюториале студентка объясняет материал.', cloze: 'Tutorium' } },
    { id: 'inf-a21-10-lerngruppe', icon: 'UsersRound', imageQuery: 'students studying together in library', de: 'Lerngruppe', pos: 'noun', article: 'die', plural: 'Lerngruppen', ru: 'учебная группа (для совместной подготовки)', parts: ['Lern', 'gruppe'], collocation: { de: 'eine Lerngruppe gründen', ru: 'создать учебную группу' }, example: { de: 'Unsere Lerngruppe trifft sich jeden Mittwoch.', ru: 'Наша учебная группа встречается каждую среду.', cloze: 'Lerngruppe' } },
    { id: 'inf-a21-10-mitschrift', icon: 'NotebookPen', imageQuery: 'handwritten lecture notes', de: 'Mitschrift', pos: 'noun', article: 'die', plural: 'Mitschriften', ru: 'конспект (лекции)', note: 'От mitschreiben — записывать (за лектором).', example: { de: 'Kann ich deine Mitschrift von gestern kopieren?', ru: 'Можно мне скопировать твой вчерашний конспект?', cloze: 'Mitschrift' } },
    { id: 'inf-a21-10-durchfallen', icon: 'ThumbsDown', de: 'durchfallen', pos: 'verb', ru: 'провалиться (на экзамене)', forms: 'er fällt durch · ist durchgefallen', note: 'Отделяемая приставка; Perfekt с sein; bei/in + Dat: bei der Prüfung durchfallen.', collocation: { de: 'bei der Prüfung durchfallen', ru: 'провалиться на экзамене', accept: ['durch die Prüfung fallen'] }, example: { de: 'Leider ist er bei der Prüfung durchgefallen.', ru: 'К сожалению, он провалился на экзамене.', cloze: 'durchgefallen' } },
    { id: 'inf-a21-10-sprechstunde', icon: 'MessageCircleQuestion', imageQuery: 'professor office hours', de: 'Sprechstunde', pos: 'noun', article: 'die', plural: 'Sprechstunden', ru: 'приёмные часы (преподавателя), консультация', parts: ['Sprech', 'stunde'], collocation: { de: 'in die Sprechstunde gehen', ru: 'пойти на консультацию к преподавателю', accept: ['zur Sprechstunde gehen'] }, example: { de: 'Die Professorin hat am Donnerstag Sprechstunde.', ru: 'У профессора приёмные часы в четверг.', cloze: 'Sprechstunde' } },
    { id: 'inf-a21-10-studium', icon: 'BookOpenText', imageQuery: 'university students library', de: 'Studium', pos: 'noun', article: 'das', plural: 'Studien', ru: 'учёба (в вузе)', note: 'Studium — учёба в университете; das Studio — студия.', example: { de: 'Das Studium an der TU ist anstrengend.', ru: 'Учёба в TU утомительна.', cloze: 'Studium' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die erste Woche an der TU',
      de: `Im Oktober beginnt für Viktor das erste Semester an der TU Wien. Er kommt aus Graz und kennt die Stadt noch nicht gut. Seine erste Vorlesung heißt „Einführung in die Programmierung“. Der Hörsaal ist so voll, dass einige Studierende auf dem Boden sitzen.

Zu jeder Vorlesung gibt es auch eine Übung. Dort lösen die Studierenden kleine Aufgaben am Computer. Viktor lernt ein neues Wort: Lehrveranstaltung. So heißt an der TU jede Vorlesung und jede Übung.

Eine Studentin aus dem dritten Semester erklärt ihm, dass er sich für jede Lehrveranstaltung online anmelden muss. Auch für die Prüfung im Jänner muss er sich anmelden. „Wenn du die Prüfung bestehen willst, geh in jede Übung!“, sagt sie.`,
      ru: `В октябре у Виктора начинается первый семестр в Венском техническом университете. Он из Граца и пока плохо знает город. Его первая лекция называется «Введение в программирование». Аудитория настолько переполнена, что некоторые студенты сидят на полу.

К каждой лекции есть и практическое занятие. Там студенты решают небольшие задачи на компьютере. Виктор узнаёт новое слово: Lehrveranstaltung (учебное занятие). Так в TU называется любая лекция и любое практическое занятие.

Студентка третьего семестра объясняет ему, что на каждый курс нужно записываться онлайн. На экзамен в январе ему тоже нужно записаться. «Если хочешь сдать экзамен, ходи на каждое практическое занятие!» — говорит она.`,
      gloss: {
        viktor: 'Виктор (имя)', oktober: 'октябрь', beginnt: 'начинается', erste: 'первый, первая', tu: 'TU — Технический университет', wien: 'Вена', graz: 'Грац (город в Австрии)',
        kennt: 'знает', stadt: 'город', heißt: 'называется', einführung: 'введение', programmierung: 'программирование', voll: 'полный, переполнен', einige: 'некоторые',
        studierende: 'студенты', studierenden: 'студенты (die Studierenden)', boden: 'пол', sitzen: 'сидят', lösen: 'решают', kleine: 'небольшие', aufgaben: 'задачи', computer: 'компьютер',
        lernt: 'узнаёт, учит', neues: 'новое', wort: 'слово', studentin: 'студентка', dritten: 'третьего', erklärt: 'объясняет', online: 'онлайн', jänner: 'январь (австр.; нем. Januar)',
        willst: 'хочешь', geh: 'иди, ходи', sagt: 'говорит', woher: 'откуда', linz: 'Линц (город)', stühle: 'стулья', kaputt: 'сломаны', draußen: 'снаружи, на улице',
        nur: 'только', gruppe: 'группа', schreiben: 'писать', machen: 'делать', lehrveranstaltungen: 'учебные занятия, курсы',
      },
      questions: [
        { q: 'Woher kommt Viktor?', ru: 'Откуда Виктор?', options: ['Aus Graz', 'Aus Wien', 'Aus Linz'], answer: 'Aus Graz' },
        { q: 'Warum sitzen einige Studierende auf dem Boden?', ru: 'Почему некоторые студенты сидят на полу?', options: ['Weil der Hörsaal so voll ist.', 'Weil die Stühle kaputt sind.', 'Weil die Vorlesung draußen ist.'], answer: 'Weil der Hörsaal so voll ist.' },
        { q: 'Was ist an der TU eine Lehrveranstaltung?', ru: 'Что в TU называется Lehrveranstaltung?', options: ['Jede Vorlesung und jede Übung', 'Nur eine Prüfung', 'Eine Gruppe von Studierenden'], answer: 'Jede Vorlesung und jede Übung' },
        { q: 'Was muss Viktor online machen?', ru: 'Что Виктор должен делать онлайн?', options: ['Sich für Lehrveranstaltungen anmelden', 'Aufgaben am Computer lösen', 'Die Prüfung schreiben'], answer: 'Sich für Lehrveranstaltungen anmelden' },
      ],
      translate: [
        { de: 'Zu jeder Vorlesung gibt es eine Übung.', ru: 'К каждой лекции есть практическое занятие.', wrongRu: ['К каждой лекции есть экзамен.', 'Не к каждой лекции есть практическое занятие.', 'К каждому практическому занятию есть две лекции.'] },
        { de: 'Er muss sich für die Prüfung anmelden.', ru: 'Ему нужно записаться на экзамен.', wrongRu: ['Ему нужно сдать экзамен.', 'Ей нужно записаться на экзамен.', 'Ему не нужно записываться на экзамен.'] },
        { de: 'Der Hörsaal ist heute ganz voll.', ru: 'Аудитория сегодня совсем заполнена.', wrongRu: ['Аудитория сегодня совсем пустая.', 'Аудитория вчера была совсем заполнена.', 'Библиотека сегодня совсем заполнена.'] },
      ],
    },
    {
      lesson: 1, title: 'Vor der Prüfung',
      de: `Im Dezember wird das Studium für Viktor anstrengend. Jede Woche gibt es eine Abgabe, meistens am Sonntag um Mitternacht. Viktor schreibt in jeder Vorlesung eine Mitschrift, aber manche Aufgaben versteht er trotzdem nicht.

Deshalb gründet er mit drei Kollegen eine Lerngruppe. Sie treffen sich jeden Mittwoch in der Bibliothek. Am Freitag gehen sie gemeinsam ins Tutorium, weil die Tutorin alles sehr gut erklärt. Eine Frage kann sie aber nicht beantworten, also geht Viktor in die Sprechstunde des Professors.

Viktor hat Angst, dass er bei der Prüfung durchfällt. Aber die Arbeit hat sich gelohnt: Im Februar bekommt er eine gute Note, eine Zwei. In Österreich bedeutet das „gut“.`,
      ru: `В декабре учёба становится для Виктора утомительной. Каждую неделю нужно что-то сдавать, чаще всего в воскресенье в полночь. Виктор ведёт конспект на каждой лекции, но некоторые задачи всё равно не понимает.

Поэтому он с тремя однокурсниками создаёт учебную группу. Они встречаются каждую среду в библиотеке. В пятницу они вместе идут на тьюториал, потому что тьютор всё очень хорошо объясняет. Но на один вопрос она ответить не может, поэтому Виктор идёт на консультацию к профессору.

Виктор боится, что провалится на экзамене. Но труд окупился: в феврале он получает хорошую оценку — двойку. В Австрии это означает «хорошо».`,
      gloss: {
        viktor: 'Виктор (имя)', dezember: 'декабрь', wird: 'становится', anstrengend: 'утомительный, тяжёлый', woche: 'неделя', meistens: 'чаще всего', sonntag: 'воскресенье',
        mitternacht: 'полночь', schreibt: 'пишет', manche: 'некоторые', aufgaben: 'задачи', versteht: 'понимает', trotzdem: 'всё равно, тем не менее', deshalb: 'поэтому',
        gründet: 'создаёт, основывает', drei: 'три', kollegen: 'однокурсники, коллеги', treffen: 'встречаются (sich treffen)', mittwoch: 'среда', bibliothek: 'библиотека',
        freitag: 'пятница', gemeinsam: 'вместе', ins: 'в (in das)', tutorin: 'тьютор (женщина)', erklärt: 'объясняет', frage: 'вопрос', beantworten: 'ответить', also: 'поэтому, итак',
        geht: 'идёт', professors: 'профессора (род. п.)', angst: 'страх (Angst haben — бояться)', durchfällt: 'провалится (durchfallen)', arbeit: 'работа, труд', gelohnt: 'окупилась (sich lohnen)',
        februar: 'февраль', bekommt: 'получает', gute: 'хорошую', zwei: 'два; «двойка» (в Австрии = «хорошо»)', österreich: 'Австрия', bedeutet: 'означает', gut: 'хорошо',
        hörsaal: 'аудитория', café: 'кафе', verloren: 'потерял (verlieren)', eins: 'единица (в Австрии = «отлично»)', fünf: 'пятёрка (в Австрии = «неудовлетворительно»)',
        kann: 'может', trifft: 'встречается (sich treffen)', durchgefallen: 'провалился', welche: 'какую',
      },
      questions: [
        { q: 'Wann ist die Abgabe meistens?', ru: 'Когда обычно сдача?', options: ['Am Sonntag um Mitternacht', 'Am Mittwoch in der Bibliothek', 'Am Freitag im Tutorium'], answer: 'Am Sonntag um Mitternacht' },
        { q: 'Wo trifft sich die Lerngruppe?', ru: 'Где встречается учебная группа?', options: ['In der Bibliothek', 'Im Hörsaal', 'Im Café'], answer: 'In der Bibliothek' },
        { q: 'Warum geht Viktor in die Sprechstunde?', ru: 'Почему Виктор идёт на консультацию к профессору?', options: ['Weil die Tutorin eine Frage nicht beantworten kann.', 'Weil er seine Mitschrift verloren hat.', 'Weil er bei der Prüfung durchgefallen ist.'], answer: 'Weil die Tutorin eine Frage nicht beantworten kann.' },
        { q: 'Welche Note bekommt Viktor?', ru: 'Какую оценку получает Виктор?', options: ['Eine Zwei', 'Eine Eins', 'Eine Fünf'], answer: 'Eine Zwei' },
      ],
      translate: [
        { de: 'Jede Woche gibt es eine Abgabe.', ru: 'Каждую неделю есть сдача работы.', wrongRu: ['Каждый месяц есть сдача работы.', 'Каждую неделю есть экзамен.', 'На этой неделе нет сдачи работы.'] },
        { de: 'Viktor gründet mit Kollegen eine Lerngruppe.', ru: 'Виктор создаёт с однокурсниками учебную группу.', wrongRu: ['Виктор ищет с однокурсниками учебную группу.', 'Виктор создал с однокурсниками учебную группу.', 'Виктор создаёт с однокурсниками проект.'] },
        { de: 'Er bekommt eine gute Note.', ru: 'Он получает хорошую оценку.', wrongRu: ['Он получает плохую оценку.', 'Она получает хорошую оценку.', 'Он получил хорошую оценку.'] },
      ],
    },
  ],
};
