import type { Module } from '../types.ts';

// A2.1 mathe 10: admission and the pre-course for maths at TU Wien (lesson 0), the first weeks — exercise sheets, tutors, deadlines (lesson 1).

export const module: Module = {
  id: 'mathe-a21-10-studium', sphere: 'mathe', level: 'A2.1',
  title: 'Mathematik studieren', subtitle: 'Специальность, допуск, подготовительный курс, листки с задачами и тьюторы: первые недели в TU Wien.',
  words: [
    { id: 'mat-a21-10-studiengang', icon: 'GraduationCap', de: 'Studiengang', pos: 'noun', article: 'der', plural: 'Studiengänge', ru: 'специальность, учебная программа', parts: ['Studien', 'gang'], note: 'В Австрии чаще: das Studium, z. B. das Bachelorstudium Technische Mathematik.', example: { de: 'Welchen Studiengang hast du gewählt?', ru: 'Какую специальность ты выбрал?', cloze: 'Studiengang' } },
    { id: 'mat-a21-10-bachelor', icon: 'Award', de: 'Bachelor', pos: 'noun', article: 'der', plural: 'Bachelors', ru: 'бакалавр; бакалавриат', note: 'Читается по-английски. Bachelor → Master → Doktorat.', example: { de: 'Der Bachelor dauert sechs Semester.', ru: 'Бакалавриат длится шесть семестров.', cloze: 'Bachelor' } },
    { id: 'mat-a21-10-zulassung', icon: 'DoorOpen', de: 'Zulassung', pos: 'noun', article: 'die', plural: 'Zulassungen', ru: 'допуск, зачисление', note: 'zulassen — допускать. Для иностранцев нужен и сертификат по немецкому.', example: { de: 'Für die Zulassung braucht man die Matura.', ru: 'Для зачисления нужен аттестат.', cloze: 'Zulassung' } },
    { id: 'mat-a21-10-vorkurs', icon: 'BookOpen', de: 'Vorkurs', pos: 'noun', article: 'der', plural: 'Vorkurse', ru: 'подготовительный курс', parts: ['Vor', 'kurs'], example: { de: 'Im September gibt es einen Vorkurs Mathematik.', ru: 'В сентябре проходит подготовительный курс по математике.', cloze: 'Vorkurs' } },
    { id: 'mat-a21-10-studienanfaenger', icon: 'UserPlus', de: 'Studienanfänger', pos: 'noun', article: 'der', plural: 'Studienanfänger', ru: 'первокурсник', parts: ['Studien', 'anfänger'], note: 'Ж. р.: die Studienanfängerin. В разговоре: Erstsemestrige (в Австрии).', example: { de: 'Der Vorkurs ist für Studienanfänger.', ru: 'Подготовительный курс — для первокурсников.', cloze: 'Studienanfänger' } },
    { id: 'mat-a21-10-lehramt', icon: 'School', de: 'Lehramt', pos: 'noun', article: 'das', ru: 'педагогическая специальность (учитель)', parts: ['Lehr', 'amt'], note: 'Lehramt studieren — учиться на учителя.', example: { de: 'David studiert Lehramt Mathematik und Physik.', ru: 'Давид учится на учителя математики и физики.', cloze: 'Lehramt' } },
    { id: 'mat-a21-10-semester', icon: 'CalendarRange', de: 'Semester', pos: 'noun', article: 'das', plural: 'Semester', ru: 'семестр', note: 'das Wintersemester (октябрь — январь), das Sommersemester (март — июнь).', example: { de: 'Das Semester beginnt im Oktober.', ru: 'Семестр начинается в октябре.', cloze: 'Semester' } },
    { id: 'mat-a21-10-hoersaal', icon: 'Armchair', imageQuery: 'university lecture hall', de: 'Hörsaal', pos: 'noun', article: 'der', plural: 'Hörsäle', ru: 'лекционный зал, аудитория', parts: ['Hör', 'saal'], example: { de: 'Der Hörsaal ist voll.', ru: 'Аудитория полная.', cloze: 'Hörsaal' } },
    { id: 'mat-a21-10-uebungsblatt', icon: 'FileText', de: 'Übungsblatt', pos: 'noun', article: 'das', plural: 'Übungsblätter', ru: 'листок с задачами (домашнее задание в вузе)', parts: ['Übungs', 'blatt'], example: { de: 'Jede Woche gibt es ein neues Übungsblatt.', ru: 'Каждую неделю выдают новый листок с задачами.', cloze: 'Übungsblatt' } },
    { id: 'mat-a21-10-tutor', icon: 'UserRoundCheck', de: 'Tutor', pos: 'noun', article: 'der', plural: 'Tutoren', ru: 'тьютор (старшекурсник, ведущий практику)', note: 'Ж. р.: die Tutorin. Ударение: TU-tor, мн. ч. Tu-TO-ren.', example: { de: 'Unser Tutor ist im fünften Semester.', ru: 'Наш тьютор учится на пятом семестре.', cloze: 'Tutor' } },
    { id: 'mat-a21-10-uebungsgruppe', icon: 'Users', de: 'Übungsgruppe', pos: 'noun', article: 'die', plural: 'Übungsgruppen', ru: 'группа для практических занятий', parts: ['Übungs', 'gruppe'], example: { de: 'In der Übungsgruppe präsentieren wir die Lösungen.', ru: 'В группе на практике мы представляем решения.', cloze: 'Übungsgruppe' } },
    { id: 'mat-a21-10-abgeben', icon: 'Send', de: 'abgeben', pos: 'verb', ru: 'сдавать (работу)', forms: 'er gibt ab · hat abgegeben', note: 'Существительное: die Abgabe — сдача работы.', example: { de: 'Wir müssen das Blatt bis Montag abgeben.', ru: 'Мы должны сдать листок до понедельника.', cloze: 'abgeben' } },
    { id: 'mat-a21-10-frist', icon: 'AlarmClock', de: 'Frist', pos: 'noun', article: 'die', plural: 'Fristen', ru: 'срок, дедлайн', note: 'die Frist einhalten — уложиться в срок; die Frist verpassen — пропустить срок.', example: { de: 'Die Frist ist Montag um zehn Uhr.', ru: 'Срок — понедельник, десять часов.', cloze: 'Frist' } },
    { id: 'mat-a21-10-skriptum', icon: 'NotebookText', de: 'Skriptum', pos: 'noun', article: 'das', plural: 'Skripten', ru: 'конспект лекций (от преподавателя)', note: 'Австрийское слово. В Германии: das Skript.', example: { de: 'Das Skriptum hat zweihundert Seiten.', ru: 'В конспекте лекций двести страниц.', cloze: 'Skriptum' } },
    { id: 'mat-a21-10-anstrengend', icon: 'BatteryLow', de: 'anstrengend', pos: 'adj', ru: 'утомительный, трудный', note: 'sich anstrengen — стараться, напрягаться.', example: { de: 'Die ersten Wochen sind sehr anstrengend.', ru: 'Первые недели очень утомительные.', cloze: 'anstrengend' } },
    { id: 'mat-a21-10-mathematiker', icon: 'Sigma', de: 'Mathematiker', pos: 'noun', article: 'der', plural: 'Mathematiker', ru: 'математик', note: 'Ж. р.: die Mathematikerin.', example: { de: 'Ein guter Mathematiker gibt nicht schnell auf.', ru: 'Хороший математик не сдаётся быстро.', cloze: 'Mathematiker' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Sophie an der TU',
      de: `Nach der Matura möchte Sophie Technische Mathematik an der TU Wien studieren. Der Studiengang ist ein Bachelor mit sechs Semestern. Für die Zulassung meldet sie sich online an und schickt ihr Maturazeugnis.

Das Wintersemester beginnt im Oktober. Aber schon im September gibt es einen Vorkurs Mathematik für Studienanfänger. Dort wiederholen sie den Stoff aus der Schule: Funktionen, Gleichungen und Vektoren.

Am ersten Tag ist der Hörsaal voll, mehr als dreihundert Leute sitzen dort. Neben Sophie sitzt David. Er studiert nicht Technische Mathematik, sondern Lehramt Mathematik und Physik. Er möchte später an einer Schule unterrichten. Sophie ist froh: Sie kennt schon jemanden.`,
      ru: `После матуры Софи хочет учиться на технической математике в TU Wien. Это бакалавриат на шесть семестров. Для зачисления она регистрируется онлайн и отправляет аттестат.

Зимний семестр начинается в октябре. Но уже в сентябре проходит подготовительный курс по математике для первокурсников. Там повторяют школьный материал: функции, уравнения и векторы.

В первый день аудитория полная, там сидят больше трёхсот человек. Рядом с Софи сидит Давид. Он учится не на технической математике, а на учителя математики и физики. Позже он хочет преподавать в школе. Софи рада: она уже кого-то знает.`,
      gloss: { jänner: 'январь (в Австрии)', informatik: 'информатика', nach: 'после', möchte: 'хочет', sophie: 'Софи (имя)', technische: 'техническая', mathematik: 'математика', tu: 'TU (технический университет)', wien: 'Вена', studieren: 'учиться (в вузе)', semestern: 'семестров', meldet: 'регистрируется (sich anmelden)', online: 'онлайн', an: '(meldet sich an) регистрируется', schickt: 'отправляет', maturazeugnis: 'аттестат о матуре', wintersemester: 'зимний семестр', beginnt: 'начинается', oktober: 'октябрь', aber: 'но', schon: 'уже', september: 'сентябрь', dort: 'там', wiederholen: 'повторяют', funktionen: 'функции', gleichungen: 'уравнения', vektoren: 'векторы', ersten: 'первый', voll: 'полный', mehr: 'больше', als: 'чем', dreihundert: 'триста', leute: 'люди', sitzen: 'сидят', neben: 'рядом с', sitzt: 'сидит', david: 'Давид (имя)', studiert: 'учится', sondern: 'а (после отрицания)', physik: 'физика', später: 'позже', unterrichten: 'преподавать', froh: 'рада', kennt: 'знает', jemanden: 'кого-то', was: 'что', wann: 'когда', wer: 'кто', wo: 'где', wie: 'как', viele: 'сколько (wie viele)' },
      questions: [
        { q: 'Wie viele Semester hat der Bachelor?', ru: 'Сколько семестров в бакалавриате?', options: ['Sechs', 'Vier', 'Acht'], answer: 'Sechs' },
        { q: 'Wann gibt es den Vorkurs?', ru: 'Когда проходит подготовительный курс?', options: ['Im September', 'Im Oktober', 'Im Jänner'], answer: 'Im September' },
        { q: 'Was studiert David?', ru: 'На кого учится Давид?', options: ['Lehramt Mathematik und Physik', 'Technische Mathematik', 'Informatik'], answer: 'Lehramt Mathematik und Physik' },
      ],
      translate: [
        { de: 'Für die Zulassung braucht man die Matura.', ru: 'Для зачисления нужен аттестат.', wrongRu: ['Для матуры нужно зачисление.', 'Для зачисления аттестат не нужен.'] },
        { de: 'Der Vorkurs ist für Studienanfänger.', ru: 'Подготовительный курс — для первокурсников.', wrongRu: ['Подготовительный курс — для преподавателей.', 'Лекция — для первокурсников.'] },
        { de: 'Der Hörsaal ist voll.', ru: 'Аудитория полная.', wrongRu: ['Аудитория пустая.', 'Аудитория закрыта.'] },
      ],
    },
    {
      lesson: 1, title: 'Die ersten Wochen',
      de: `Die ersten Wochen an der Uni sind anstrengend. Zu jeder Vorlesung gibt es ein Skriptum mit zweihundert Seiten. Und jede Woche gibt es ein neues Übungsblatt mit fünf Aufgaben.

Die Frist ist immer Montag um zehn Uhr. Wer das Blatt zu spät abgibt, bekommt keine Punkte. Sophie arbeitet mit David zusammen, aber jeder schreibt seine eigenen Lösungen.

Am Donnerstag ist die Übungsgruppe. Der Tutor heißt Ahmed und ist im fünften Semester. Sophie muss eine Lösung an der Tafel präsentieren. Sie ist nervös, aber Ahmed hilft ihr. Nach der Übung sagt er: „Am Anfang ist es für alle schwer. Eine gute Mathematikerin gibt nicht schnell auf.“`,
      ru: `Первые недели в университете утомительные. К каждой лекции есть конспект на двести страниц. И каждую неделю выдают новый листок с пятью задачами.

Срок сдачи — всегда понедельник, десять часов. Кто сдаёт листок слишком поздно, не получает баллов. Софи работает вместе с Давидом, но каждый пишет свои решения сам.

В четверг — практическое занятие в группе. Тьютора зовут Ахмед, он учится на пятом семестре. Софи должна представить решение у доски. Она нервничает, но Ахмед ей помогает. После занятия он говорит: «Вначале всем трудно. Хороший математик не сдаётся быстро».`,
      gloss: { mathematikerin: 'математик (женщина)', abgibt: 'сдаёт (abgeben)', sophie: 'Софи (имя)', david: 'Давид (имя)', freitag: 'пятница', professor: 'профессор', ersten: 'первые', uni: 'университет', jeder: 'каждой; каждый', vorlesung: 'лекция', zweihundert: 'двести', seiten: 'страниц', jede: 'каждую', neues: 'новый', fünf: 'пять', aufgaben: 'задачами', immer: 'всегда', montag: 'понедельник', zehn: 'десять', uhr: 'час(ов)', wer: 'кто', blatt: 'листок', zu: 'слишком', spät: 'поздно', bekommt: 'получает', keine: 'никаких', punkte: 'баллы', arbeitet: 'работает', zusammen: 'вместе', aber: 'но', schreibt: 'пишет', seine: 'свои', eigenen: 'собственные', lösungen: 'решения', donnerstag: 'четверг', heißt: 'зовут', ahmed: 'Ахмед (имя)', fünften: 'пятом', muss: 'должна', präsentieren: 'представить', nervös: 'нервничает', hilft: 'помогает', ihr: 'ей', nach: 'после', übung: 'практическое занятие', anfang: 'начало', alle: 'все, всех', schwer: 'трудно', gute: 'хорошая', gibt: '(gibt auf) сдаётся', auf: '(aufgeben) сдаваться', schnell: 'быстро', wann: 'когда', was: 'что', wie: 'как', viele: 'сколько (wie viele)' },
      questions: [
        { q: 'Wann ist die Frist für das Übungsblatt?', ru: 'Когда срок сдачи листка?', options: ['Montag um zehn Uhr', 'Donnerstag um zehn Uhr', 'Freitag am Abend'], answer: 'Montag um zehn Uhr' },
        { q: 'Wer ist Ahmed?', ru: 'Кто такой Ахмед?', options: ['Der Tutor', 'Der Professor', 'Ein Studienanfänger'], answer: 'Der Tutor' },
        { q: 'Was muss Sophie in der Übungsgruppe machen?', ru: 'Что Софи должна сделать на практике?', options: ['Eine Lösung präsentieren', 'Ein Skriptum schreiben', 'Die Frist ändern'], answer: 'Eine Lösung präsentieren' },
      ],
      translate: [
        { de: 'Jede Woche gibt es ein neues Übungsblatt.', ru: 'Каждую неделю выдают новый листок с задачами.', wrongRu: ['Каждый месяц выдают новый листок с задачами.', 'Каждую неделю пишут контрольную.'] },
        { de: 'Wer zu spät abgibt, bekommt keine Punkte.', ru: 'Кто сдаёт слишком поздно, не получает баллов.', wrongRu: ['Кто сдаёт рано, получает больше баллов.', 'Кто сдаёт поздно, получает половину баллов.'] },
        { de: 'Die ersten Wochen sind anstrengend.', ru: 'Первые недели утомительные.', wrongRu: ['Первые недели скучные.', 'Последние недели утомительные.'] },
      ],
    },
  ],
};
