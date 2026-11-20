import type { Module } from '../types.ts';

// A2.1 mathe 08: the written Austrian Mathematik-Matura (lesson 0), failing and preparing for the oral Kompensationsprüfung (lesson 1).

export const module: Module = {
  id: 'mathe-a21-08-matura', sphere: 'mathe', level: 'A2.1',
  title: 'Die Mathe-Matura', subtitle: 'Письменный экзамен, справочник формул, шкала оценок и устная пересдача.',
  words: [
    { id: 'mat-a21-08-matura', icon: 'GraduationCap', imageQuery: 'students writing exam hall', de: 'Matura', pos: 'noun', article: 'die', ru: 'выпускной экзамен (аттестат) в Австрии', note: 'В Германии — das Abitur. Официально: die Reifeprüfung. Нужна для поступления в университет.', collocation: { de: 'die Matura machen', ru: 'сдавать выпускные экзамены', accept: ['die Matura schreiben'] }, example: { de: 'Ohne Matura kann man nicht an der TU Wien studieren.', ru: 'Без аттестата нельзя учиться в TU Wien.', cloze: 'Matura' } },
    { id: 'mat-a21-08-schriftlich', icon: 'PenLine', de: 'schriftlich', pos: 'adj', ru: 'письменный; письменно', example: { de: 'Die schriftliche Prüfung dauert 270 Minuten.', ru: 'Письменный экзамен длится 270 минут.', cloze: 'schriftliche' } },
    { id: 'mat-a21-08-formelsammlung', icon: 'BookMarked', imageQuery: 'math formula book', de: 'Formelsammlung', pos: 'noun', article: 'die', plural: 'Formelsammlungen', ru: 'справочник формул', parts: ['Formel', 'sammlung'], note: 'На австрийской матуре разрешена официальная Formelsammlung.', example: { de: 'Die Formelsammlung darf man benutzen.', ru: 'Справочником формул пользоваться можно.', cloze: 'Formelsammlung' } },
    { id: 'mat-a21-08-grundkompetenz', icon: 'Blocks', de: 'Grundkompetenz', pos: 'noun', article: 'die', plural: 'Grundkompetenzen', ru: 'базовая компетенция', parts: ['Grund', 'kompetenz'], note: 'Teil 1 der Mathe-Matura prüft die Grundkompetenzen.', example: { de: 'Im ersten Teil geht es um Grundkompetenzen.', ru: 'Первая часть посвящена базовым компетенциям.', cloze: 'Grundkompetenzen' } },
    { id: 'mat-a21-08-notenschluessel', icon: 'KeyRound', de: 'Notenschlüssel', pos: 'noun', article: 'der', plural: 'Notenschlüssel', ru: 'шкала перевода баллов в оценки', parts: ['Noten', 'schlüssel'], example: { de: 'Laut Notenschlüssel braucht man für ein „Gut“ 36 Punkte.', ru: 'По шкале для «хорошо» нужно 36 баллов.', cloze: 'Notenschlüssel' } },
    { id: 'mat-a21-08-zeitdruck', icon: 'Timer', imageQuery: 'clock stress', de: 'Zeitdruck', pos: 'noun', article: 'der', ru: 'нехватка времени, цейтнот', parts: ['Zeit', 'druck'], note: 'unter Zeitdruck stehen — работать в цейтноте.', example: { de: 'Beim zweiten Teil gerät Sophie unter Zeitdruck.', ru: 'Во второй части Софи попадает в цейтнот.', cloze: 'Zeitdruck' } },
    { id: 'mat-a21-08-sich-konzentrieren', icon: 'Focus', de: 'sich konzentrieren', pos: 'verb', ru: 'сосредоточиваться', forms: 'er konzentriert sich · hat sich konzentriert', note: 'sich auf + Akk konzentrieren.', example: { de: 'Sophie konzentriert sich auf die nächste Aufgabe.', ru: 'Софи сосредотачивается на следующем задании.', cloze: 'konzentriert' } },
    { id: 'mat-a21-08-bestehen', icon: 'CircleCheckBig', de: 'bestehen', pos: 'verb', ru: 'сдать (экзамен)', forms: 'er besteht · hat bestanden', note: 'eine Prüfung bestehen — сдать. Ложный друг: «bestehen aus» — состоять из.', collocation: { de: 'die Prüfung bestehen', ru: 'сдать экзамен', accept: ['eine Prüfung bestehen'] }, example: { de: 'Sophie hat die Matura bestanden.', ru: 'Софи сдала выпускной экзамен.', cloze: 'bestanden' } },
    { id: 'mat-a21-08-muendlich', icon: 'Mic', de: 'mündlich', pos: 'adj', ru: 'устный; устно', note: 'der Mund — рот.', example: { de: 'Die Kompensationsprüfung ist mündlich.', ru: 'Пересдача проходит устно.', cloze: 'mündlich' } },
    { id: 'mat-a21-08-kompensationspruefung', icon: 'RotateCcw', de: 'Kompensationsprüfung', pos: 'noun', article: 'die', plural: 'Kompensationsprüfungen', ru: 'компенсационный (устный) экзамен после проваленной письменной матуры', parts: ['Kompensations', 'prüfung'], note: 'Австрийское понятие. Коротко: die Kompensation, «Kompi».', example: { de: 'Nach dem „Nicht genügend“ hat David eine Kompensationsprüfung.', ru: 'После «неудовлетворительно» у Давида устная пересдача.', cloze: 'Kompensationsprüfung' } },
    { id: 'mat-a21-08-durchfallen', icon: 'ThumbsDown', de: 'durchfallen', pos: 'verb', ru: 'провалиться (на экзамене)', forms: 'er fällt durch · ist durchgefallen', note: 'Perfekt с sein. bei der Prüfung durchfallen.', example: { de: 'David ist bei der schriftlichen Matura durchgefallen.', ru: 'Давид провалил письменный экзамен.', cloze: 'durchgefallen' } },
    { id: 'mat-a21-08-sich-vorbereiten', icon: 'ListChecks', de: 'sich vorbereiten', pos: 'verb', ru: 'готовиться', forms: 'er bereitet sich vor · hat sich vorbereitet', note: 'sich auf + Akk vorbereiten — готовиться к чему-то.', example: { de: 'David bereitet sich drei Wochen lang vor.', ru: 'Давид готовится три недели.', cloze: 'bereitet' } },
    { id: 'mat-a21-08-lernplan', icon: 'CalendarCheck', imageQuery: 'study planner', de: 'Lernplan', pos: 'noun', article: 'der', plural: 'Lernpläne', ru: 'план подготовки', parts: ['Lern', 'plan'], example: { de: 'Sein Lernplan hat jeden Tag ein Thema.', ru: 'В его плане подготовки на каждый день — одна тема.', cloze: 'Lernplan' } },
    { id: 'mat-a21-08-zusammenfassung', icon: 'NotebookText', imageQuery: 'study notes', de: 'Zusammenfassung', pos: 'noun', article: 'die', plural: 'Zusammenfassungen', ru: 'конспект, краткое изложение', parts: ['Zusammen', 'fassung'], example: { de: 'Er schreibt zu jedem Thema eine Zusammenfassung.', ru: 'По каждой теме он пишет краткий конспект.', cloze: 'Zusammenfassung' } },
    { id: 'mat-a21-08-pruefer', icon: 'UserCheck', imageQuery: 'examiner', de: 'Prüfer', pos: 'noun', article: 'der', plural: 'Prüfer', ru: 'экзаменатор', note: 'Ж. р.: die Prüferin.', example: { de: 'Der Prüfer stellt drei Fragen.', ru: 'Экзаменатор задаёт три вопроса.', cloze: 'Prüfer' } },
    { id: 'mat-a21-08-stoff', icon: 'Library', imageQuery: 'fabric', de: 'Stoff', pos: 'noun', article: 'der', plural: 'Stoffe', ru: 'учебный материал; ткань; вещество', note: 'der Prüfungsstoff — материал к экзамену.', example: { de: 'Der Stoff von vier Jahren ist sehr viel.', ru: 'Материал за четыре года — это очень много.', cloze: 'Stoff' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Der große Tag',
      de: `Heute schreibt Sophie die schriftliche Matura in Mathematik. Die Prüfung dauert 270 Minuten. Auf dem Tisch liegen der Taschenrechner und die offizielle Formelsammlung. Beides darf man benutzen.

Der erste Teil hat viele kurze Aufgaben. Hier geht es um Grundkompetenzen: Gleichungen, Funktionen, Prozente. Sophie ist gut vorbereitet und arbeitet schnell. Der zweite Teil ist schwieriger. Die Aufgaben sind länger, und Sophie gerät unter Zeitdruck. Sie atmet tief ein und konzentriert sich auf die nächste Aufgabe.

Zwei Wochen später kommt das Ergebnis. Laut Notenschlüssel braucht man für ein „Gut“ mindestens 36 Punkte. Sophie hat 38 Punkte. Sie hat die Matura bestanden! Im Herbst kann sie an der TU Wien studieren.`,
      ru: `Сегодня Софи пишет письменный выпускной экзамен по математике. Экзамен длится 270 минут. На столе лежат калькулятор и официальный справочник формул. Пользоваться можно и тем, и другим.

В первой части много коротких заданий. Здесь проверяются базовые компетенции: уравнения, функции, проценты. Софи хорошо подготовлена и работает быстро. Вторая часть сложнее. Задания длиннее, и Софи попадает в цейтнот. Она глубоко вдыхает и сосредотачивается на следующем задании.

Через две недели приходит результат. По шкале для «хорошо» нужно минимум 36 баллов. У Софи 38 баллов. Она сдала матуру! Осенью она сможет учиться в TU Wien.`,
      gloss: { heute: 'сегодня', schreibt: 'пишет', sophie: 'Софи (имя)', mathematik: 'математика', prüfung: 'экзамен', minuten: 'минут', tisch: 'стол', liegen: 'лежат', offizielle: 'официальный', beides: 'и то, и другое', darf: 'можно', benutzen: 'использовать', erste: 'первая', teil: 'часть', kurze: 'короткие', geht: '(es geht um) речь идёт о', um: '(es geht um) о', gleichungen: 'уравнения', funktionen: 'функции', prozente: 'проценты', gut: 'хорошо; «хорошо» (оценка 2)', vorbereitet: 'подготовлена', arbeitet: 'работает', schnell: 'быстро', zweite: 'вторая', schwieriger: 'сложнее', länger: 'длиннее', gerät: 'попадает', unter: 'под', atmet: 'дышит (einatmen — вдыхать)', tief: 'глубоко', ein: '(atmet ein) вдыхает', nächste: 'следующее', später: 'позже (zwei Wochen später — через две недели)', kommt: 'приходит', laut: 'согласно, по', mindestens: 'минимум, как минимум', punkte: 'баллы', herbst: 'осень', kann: 'может', tu: 'TU (технический университет)', wien: 'Вена', studieren: 'учиться (в вузе)', wie: 'как', lange: 'долго (wie lange — сколько времени)', was: 'что', viele: 'сколько (wie viele)', wo: 'где' },
      questions: [
        { q: 'Wie lange dauert die Prüfung?', ru: 'Сколько длится экзамен?', options: ['270 Minuten', '90 Minuten', '36 Minuten'], answer: '270 Minuten' },
        { q: 'Was darf Sophie benutzen?', ru: 'Чем может пользоваться Софи?', options: ['Taschenrechner und Formelsammlung', 'Nur das Handy', 'Nichts'], answer: 'Taschenrechner und Formelsammlung' },
        { q: 'Wie viele Punkte hat Sophie?', ru: 'Сколько баллов у Софи?', options: ['38', '36', '27'], answer: '38' },
      ],
      translate: [
        { de: 'Die Formelsammlung darf man benutzen.', ru: 'Справочником формул пользоваться можно.', wrongRu: ['Справочником формул пользоваться нельзя.', 'Калькулятором пользоваться нельзя.'] },
        { de: 'Sophie gerät unter Zeitdruck.', ru: 'Софи попадает в цейтнот.', wrongRu: ['У Софи много времени.', 'Софи попадает под дождь.'] },
        { de: 'Sie hat die Matura bestanden.', ru: 'Она сдала выпускной экзамен.', wrongRu: ['Она провалила выпускной экзамен.', 'Она сдаёт выпускной экзамен завтра.'] },
      ],
    },
    {
      lesson: 1, title: 'Eine zweite Chance',
      de: `Sophies Freund David hatte weniger Glück. Bei der schriftlichen Matura ist er durchgefallen: „Nicht genügend“. Aber es gibt eine zweite Chance, die Kompensationsprüfung. Sie ist mündlich und findet drei Wochen später statt.

David bereitet sich gut vor. Er macht einen Lernplan: Jeden Tag lernt er ein Thema. Zu jedem Thema schreibt er eine kurze Zusammenfassung. Sophie hilft ihm, denn der Stoff von vier Jahren ist sehr viel.

Am Tag der Prüfung ist David nervös. Die Prüferin stellt ihm drei Fragen zu Funktionen und Wahrscheinlichkeit. Er erklärt seine Rechenwege ruhig und genau. Nach zwanzig Minuten lächelt die Prüferin: „Bestanden, Herr Novak!“ David ist sehr erleichtert.`,
      ru: `Другу Софи Давиду повезло меньше. Письменный экзамен он провалил: «неудовлетворительно». Но есть второй шанс — компенсационный экзамен. Он устный и проходит через три недели.

Давид хорошо готовится. Он составляет план подготовки: каждый день он учит одну тему. По каждой теме он пишет короткий конспект. Софи ему помогает, ведь материал за четыре года — это очень много.

В день экзамена Давид нервничает. Экзаменатор задаёт ему три вопроса о функциях и вероятности. Он спокойно и точно объясняет ход решения. Через двадцать минут экзаменатор улыбается: «Сдано, господин Новак!» У Давида огромное облегчение.`,
      gloss: { prüferin: 'экзаменатор (женщина)', sophie: 'Софи (имя)', brief: 'письмо', sophies: 'Софи (род. п.)', freund: 'друг', david: 'Давид (имя)', hatte: 'имел', weniger: 'меньше', glück: 'удача', schriftlichen: 'письменном', genügend: 'достаточно («Nicht genügend» — неудовлетворительно, 5)', aber: 'но', zweite: 'второй', chance: 'шанс', findet: '(findet statt) проходит', statt: '(stattfinden) проходить', später: 'позже (drei Wochen später — через три недели)', gut: 'хорошо', macht: 'делает, составляет', lernt: 'учит', thema: 'тема', jedem: 'каждой', schreibt: 'пишет', kurze: 'короткий', hilft: 'помогает', ihm: 'ему', denn: 'ведь', jahren: 'лет', prüfung: 'экзамен', stellt: 'задаёт (Fragen stellen)', fragen: 'вопросы', zu: 'к, по', funktionen: 'функциям', erklärt: 'объясняет', seine: 'свои', ruhig: 'спокойно', nach: 'через', lächelt: 'улыбается', bestanden: 'сдано', novak: 'Новак (фамилия)', erleichtert: 'испытывает облегчение', wann: 'когда', wer: 'кто', was: 'что', wie: 'как', viele: 'сколько (wie viele)', wobei: 'в чём, при чём' },
      questions: [
        { q: 'Wie ist die Kompensationsprüfung?', ru: 'Какая компенсационная пересдача?', options: ['Mündlich', 'Schriftlich', 'Online'], answer: 'Mündlich' },
        { q: 'Was schreibt David zu jedem Thema?', ru: 'Что Давид пишет по каждой теме?', options: ['Eine Zusammenfassung', 'Einen Brief', 'Eine Formelsammlung'], answer: 'Eine Zusammenfassung' },
        { q: 'Wie viele Fragen stellt die Prüferin?', ru: 'Сколько вопросов задаёт экзаменатор?', options: ['Drei', 'Zwanzig', 'Vier'], answer: 'Drei' },
      ],
      translate: [
        { de: 'David ist bei der Matura durchgefallen.', ru: 'Давид провалил матуру.', wrongRu: ['Давид сдал матуру.', 'Давид пропустил матуру.'] },
        { de: 'Er macht einen Lernplan.', ru: 'Он составляет план подготовки.', wrongRu: ['Он выполняет план работы.', 'Она составляет план подготовки.'] },
        { de: 'Die Prüfung ist mündlich.', ru: 'Экзамен устный.', wrongRu: ['Экзамен письменный.', 'Экзамен очень длинный.'] },
      ],
    },
  ],
};
