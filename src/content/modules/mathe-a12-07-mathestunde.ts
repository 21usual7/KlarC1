import type { Module } from '../types.ts';

// A1.2 mathe 07: mental arithmetic in class (lesson 0), the Austrian Schularbeit, mistakes and grades (lesson 1).

export const module: Module = {
  id: 'mathe-a12-07-mathestunde', sphere: 'mathe', level: 'A1.2',
  title: 'In der Mathestunde', subtitle: 'Доска, калькулятор, устный счёт, контрольная и оценка: школьная математика.',
  words: [
    { id: 'mat-a12-07-tafel', icon: 'Presentation', imageQuery: 'classroom blackboard math', de: 'Tafel', pos: 'noun', article: 'die', plural: 'Tafeln', ru: 'доска (школьная)', note: 'an die Tafel schreiben — писать на доске; an der Tafel stehen — стоять у доски.', collocation: { de: 'an die Tafel schreiben', ru: 'писать на доске', accept: ['etwas an die Tafel schreiben'] }, example: { de: 'Der Lehrer schreibt die Aufgabe an die Tafel.', ru: 'Учитель пишет задание на доске.', cloze: 'Tafel' } },
    { id: 'mat-a12-07-taschenrechner', icon: 'Calculator', imageQuery: 'pocket calculator', de: 'Taschenrechner', pos: 'noun', article: 'der', plural: 'Taschenrechner', ru: 'калькулятор', parts: ['Taschen', 'rechner'], note: 'Буквально «карманный вычислитель».', example: { de: 'Bei der Schularbeit ist der Taschenrechner erlaubt.', ru: 'На контрольной калькулятор разрешён.', cloze: 'Taschenrechner' } },
    { id: 'mat-a12-07-kopfrechnen', icon: 'Brain', de: 'Kopfrechnen', pos: 'noun', article: 'das', ru: 'устный счёт', parts: ['Kopf', 'rechnen'], note: 'der Kopf (голова) + rechnen. Глагол: im Kopf rechnen.', example: { de: 'Beim Kopfrechnen ist Sara sehr schnell.', ru: 'В устном счёте Сара очень быстрая.', cloze: 'Kopfrechnen' } },
    { id: 'mat-a12-07-rechenweg', icon: 'Route', de: 'Rechenweg', pos: 'noun', article: 'der', plural: 'Rechenwege', ru: 'ход решения', parts: ['Rechen', 'weg'], note: 'Учителя просят: Schreib den Rechenweg auf! — Запиши решение!', example: { de: 'Erklär uns bitte deinen Rechenweg.', ru: 'Объясни нам, пожалуйста, ход решения.', cloze: 'Rechenweg' } },
    { id: 'mat-a12-07-erklaeren', icon: 'MessageCircle', de: 'erklären', pos: 'verb', ru: 'объяснять', forms: 'er erklärt · hat erklärt', note: 'jemandem etwas erklären — объяснить кому-то что-то. Без ge- в Perfekt.', example: { de: 'Der Lehrer erklärt die Aufgabe noch einmal.', ru: 'Учитель ещё раз объясняет задание.', cloze: 'erklärt' } },
    { id: 'mat-a12-07-verstehen', icon: 'Lightbulb', de: 'verstehen', pos: 'verb', ru: 'понимать', forms: 'er versteht · hat verstanden', note: 'Сильный глагол: verstehen – verstand – verstanden.', example: { de: 'Jetzt verstehe ich die Aufgabe.', ru: 'Теперь я понимаю задание.', cloze: 'verstehe' } },
    { id: 'mat-a12-07-sich-melden', icon: 'Hand', imageQuery: 'student raising hand', de: 'sich melden', pos: 'verb', ru: 'поднимать руку (на уроке)', forms: 'er meldet sich · hat sich gemeldet', note: 'В школе sich melden = поднять руку, чтобы ответить.', example: { de: 'Sara meldet sich sofort.', ru: 'Сара сразу поднимает руку.', cloze: 'meldet' } },
    { id: 'mat-a12-07-hausuebung', icon: 'NotebookPen', imageQuery: 'child doing homework', de: 'Hausübung', pos: 'noun', article: 'die', plural: 'Hausübungen', ru: 'домашнее задание (в Австрии)', parts: ['Haus', 'übung'], note: 'В Австрии — die Hausübung, в Германии — die Hausaufgabe.', example: { de: 'Als Hausübung machen wir zehn Aufgaben.', ru: 'На дом мы делаем десять заданий.', cloze: 'Hausübung' } },
    { id: 'mat-a12-07-schularbeit', icon: 'FileText', imageQuery: 'students writing test', de: 'Schularbeit', pos: 'noun', article: 'die', plural: 'Schularbeiten', ru: 'контрольная работа (в Австрии)', parts: ['Schul', 'arbeit'], note: 'Австрийское слово для большой письменной контрольной. В Германии: die Klassenarbeit.', example: { de: 'Nächste Woche schreiben wir eine Schularbeit.', ru: 'На следующей неделе у нас контрольная.', cloze: 'Schularbeit' } },
    { id: 'mat-a12-07-fehler', icon: 'CircleX', imageQuery: 'red pen correction', de: 'Fehler', pos: 'noun', article: 'der', plural: 'Fehler', ru: 'ошибка', note: 'einen Fehler machen — сделать ошибку.', collocation: { de: 'einen Fehler machen', ru: 'сделать ошибку', accept: ['Fehler machen'] }, example: { de: 'Max hat nur zwei Fehler gemacht.', ru: 'Макс сделал всего две ошибки.', cloze: 'Fehler' } },
    { id: 'mat-a12-07-korrigieren', icon: 'PenLine', de: 'korrigieren', pos: 'verb', ru: 'исправлять, проверять (работы)', forms: 'er korrigiert · hat korrigiert', note: 'Учитель korrigiert die Schularbeit — проверяет контрольную.', example: { de: 'Der Lehrer korrigiert die Hefte am Wochenende.', ru: 'Учитель проверяет тетради на выходных.', cloze: 'korrigiert' } },
    { id: 'mat-a12-07-abschreiben', icon: 'Copy', de: 'abschreiben', pos: 'verb', ru: 'списывать; переписывать', forms: 'er schreibt ab · hat abgeschrieben', note: 'von jemandem abschreiben — списывать у кого-то.', example: { de: 'Max schreibt nicht von Sara ab.', ru: 'Макс не списывает у Сары.', cloze: 'schreibt' } },
    { id: 'mat-a12-07-note', icon: 'Award', imageQuery: 'grade on test', de: 'Note', pos: 'noun', article: 'die', plural: 'Noten', ru: 'оценка', note: 'В Австрии 1 (Sehr gut) — лучшая, 5 (Nicht genügend) — худшая.', example: { de: 'Für die Schularbeit bekommt Max die Note Zwei.', ru: 'За контрольную Макс получает четвёрку (оценку 2).', cloze: 'Note' } },
    { id: 'mat-a12-07-ueben', icon: 'Repeat', de: 'üben', pos: 'verb', ru: 'упражняться, тренироваться', forms: 'er übt · hat geübt', example: { de: 'Ich übe jeden Tag zwanzig Minuten.', ru: 'Я занимаюсь каждый день по двадцать минут.', cloze: 'übe' } },
    { id: 'mat-a12-07-nervoes', icon: 'Frown', de: 'nervös', pos: 'adj', ru: 'нервный; нервничающий', example: { de: 'Vor der Schularbeit ist Max nervös.', ru: 'Перед контрольной Макс нервничает.', cloze: 'nervös' } },
    { id: 'mat-a12-07-zeugnis', icon: 'ScrollText', imageQuery: 'school report card', de: 'Zeugnis', pos: 'noun', article: 'das', plural: 'Zeugnisse', ru: 'табель, аттестат', note: 'Мн. ч. с удвоением s: die Zeugnisse.', example: { de: 'Im Zeugnis hat Sara in Mathe eine Eins.', ru: 'В табеле у Сары по математике пятёрка (1).', cloze: 'Zeugnis' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Kopfrechnen',
      de: `Herr Wagner schreibt eine Aufgabe an die Tafel: 48 plus 37. „Heute ohne Taschenrechner! Das ist Kopfrechnen.“

Sara meldet sich sofort. „85!“ – „Richtig. Erklär uns bitte deinen Rechenweg.“ Sara sagt: „Zuerst rechne ich 40 plus 30, das ist 70. Dann 8 plus 7, das ist 15. Und 70 plus 15 ist 85.“

Max versteht das nicht. Herr Wagner erklärt es noch einmal langsam. Jetzt versteht Max den Rechenweg auch. Am Ende sagt Herr Wagner: „Als Hausübung macht ihr zehn Aufgaben. Ohne Taschenrechner, bitte!“`,
      ru: `Господин Вагнер пишет на доске задание: 48 плюс 37. «Сегодня без калькулятора! Это устный счёт».

Сара сразу поднимает руку. «85!» — «Правильно. Объясни нам, пожалуйста, как ты решала». Сара говорит: «Сначала я считаю 40 плюс 30, это 70. Потом 8 плюс 7, это 15. А 70 плюс 15 — это 85».

Макс этого не понимает. Господин Вагнер ещё раз медленно объясняет. Теперь Макс тоже понимает ход решения. В конце господин Вагнер говорит: «На дом вы делаете десять заданий. Без калькулятора, пожалуйста!»`,
      gloss: { wagner: 'Вагнер (фамилия)', schreibt: 'пишет', heute: 'сегодня', ohne: 'без', sara: 'Сара (имя)', sofort: 'сразу', bitte: 'пожалуйста', erklär: 'объясни', deinen: 'твой', zuerst: 'сначала', rechne: 'считаю', dann: 'потом', max: 'Макс (имя)', langsam: 'медленно', jetzt: 'теперь', auch: 'тоже', ende: 'конец', als: 'в качестве', macht: 'делаете', ihr: 'вы', uns: 'нам', was: 'что', wer: 'кто' },
      questions: [
        { q: 'Was ist die Aufgabe an der Tafel?', ru: 'Какое задание на доске?', options: ['48 plus 37', '40 plus 30', '70 plus 15'], answer: '48 plus 37' },
        { q: 'Wer meldet sich sofort?', ru: 'Кто сразу поднимает руку?', options: ['Sara', 'Max', 'Herr Wagner'], answer: 'Sara' },
        { q: 'Was ist die Hausübung?', ru: 'Какое домашнее задание?', options: ['Zehn Aufgaben ohne Taschenrechner', 'Zehn Aufgaben mit Taschenrechner', 'Eine Aufgabe an der Tafel'], answer: 'Zehn Aufgaben ohne Taschenrechner' },
      ],
      translate: [
        { de: 'Sara meldet sich sofort.', ru: 'Сара сразу поднимает руку.', wrongRu: ['Сара сразу отвечает.', 'Сара сразу уходит.'] },
        { de: 'Erklär uns bitte deinen Rechenweg.', ru: 'Объясни нам, пожалуйста, ход решения.', wrongRu: ['Напиши нам, пожалуйста, ответ.', 'Объясни нам, пожалуйста, задание.'] },
        { de: 'Jetzt versteht Max die Aufgabe.', ru: 'Теперь Макс понимает задание.', wrongRu: ['Теперь Макс решает задание.', 'Макс всё ещё не понимает задание.'] },
      ],
    },
    {
      lesson: 1, title: 'Die Schularbeit',
      de: `Nächste Woche ist die Schularbeit in Mathe. Max ist nervös. Er übt jeden Tag eine halbe Stunde. Seine Schwester hilft ihm.

Bei der Schularbeit sitzt Max neben Sara. Sara ist sehr gut in Mathe. Aber Max schreibt nicht ab. Er rechnet alles allein.

Eine Woche später korrigiert Herr Wagner die Schularbeiten. Max hat nur zwei Fehler. Er bekommt die Note Zwei, also „Gut“. Max ist froh. Herr Wagner sagt: „Wenn du weiter so übst, hast du im Zeugnis vielleicht eine Eins.“`,
      ru: `На следующей неделе контрольная по математике. Макс нервничает. Он каждый день занимается по полчаса. Сестра ему помогает.

На контрольной Макс сидит рядом с Сарой. Сара очень хорошо знает математику. Но Макс не списывает. Он решает всё сам.

Через неделю господин Вагнер проверяет контрольные. У Макса всего две ошибки. Он получает оценку 2, то есть «хорошо». Макс рад. Господин Вагнер говорит: «Если будешь и дальше так заниматься, в табеле у тебя, может быть, будет 1».`,
      gloss: { nächste: 'следующая', mathe: 'математика', max: 'Макс (имя)', halbe: 'половина (eine halbe Stunde — полчаса)', seine: 'его', schwester: 'сестра', hilft: 'помогает', ihm: 'ему', bei: 'на, при', sitzt: 'сидит', neben: 'рядом с', sara: 'Сара (имя)', gut: 'хорошо, хороший', aber: 'но', rechnet: 'решает, считает', allein: 'сам, один', später: 'позже (eine Woche später — через неделю)', wagner: 'Вагнер (фамилия)', nur: 'только', bekommt: 'получает', also: 'то есть', froh: 'рад', wenn: 'если', übst: '(ты) занимаешься, тренируешься', weiter: 'дальше', so: 'так', hast: 'имеешь, у тебя есть', vielleicht: 'может быть', eins: 'единица (лучшая оценка в Австрии)', zwei: 'два; (оценка) «хорошо»', wann: 'когда', welche: 'какую', wie: 'как', viele: 'сколько (wie viele)' },
      questions: [
        { q: 'Wie lange übt Max jeden Tag?', ru: 'Сколько Макс занимается каждый день?', options: ['Eine halbe Stunde', 'Eine Stunde', 'Zwei Stunden'], answer: 'Eine halbe Stunde' },
        { q: 'Wie viele Fehler hat Max?', ru: 'Сколько ошибок у Макса?', options: ['Zwei', 'Keine', 'Zehn'], answer: 'Zwei' },
        { q: 'Welche Note bekommt Max?', ru: 'Какую оценку получает Макс?', options: ['Zwei', 'Eins', 'Fünf'], answer: 'Zwei' },
      ],
      translate: [
        { de: 'Max ist vor der Schularbeit nervös.', ru: 'Макс нервничает перед контрольной.', wrongRu: ['Макс рад перед контрольной.', 'Макс нервничает после контрольной.'] },
        { de: 'Er schreibt nicht von Sara ab.', ru: 'Он не списывает у Сары.', wrongRu: ['Он списывает у Сары.', 'Он не пишет Саре.'] },
        { de: 'Herr Wagner korrigiert die Schularbeiten.', ru: 'Господин Вагнер проверяет контрольные.', wrongRu: ['Господин Вагнер пишет контрольные.', 'Господин Вагнер раздаёт контрольные.'] },
      ],
    },
  ],
};
