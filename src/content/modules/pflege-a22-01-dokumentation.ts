import type { Module } from '../types.ts';

// A2.2 pflege 01: care documentation — care report, observations, objective wording (lesson 0); legal proof, electronic records (lesson 1).

export const module: Module = {
  id: 'pflege-a22-01-dokumentation', sphere: 'pflege', level: 'A2.2',
  title: 'Die Pflegedokumentation', subtitle: 'Записи по уходу: наблюдения, объективные формулировки, юридическое значение и электронная карта.',
  words: [
    { id: 'pfl-a22-01-pflegebericht', icon: 'NotebookPen', de: 'Pflegebericht', pos: 'noun', article: 'der', plural: 'Pflegeberichte', ru: 'отчёт по уходу', parts: ['Pflege', 'bericht'], example: { de: 'Im Pflegebericht steht, wie die Nacht war.', ru: 'В отчёте по уходу написано, как прошла ночь.', cloze: 'Pflegebericht' } },
    { id: 'pfl-a22-01-eintrag', icon: 'FilePen', de: 'Eintrag', pos: 'noun', article: 'der', plural: 'Einträge', ru: 'запись', example: { de: 'Jeder Eintrag braucht Datum und Uhrzeit.', ru: 'Каждой записи нужны дата и время.', cloze: 'Eintrag' } },
    { id: 'pfl-a22-01-eintragen', icon: 'PenLine', de: 'eintragen', pos: 'verb', ru: 'вносить (в документ)', forms: 'er trägt ein · hat eingetragen', example: { de: 'Ich trage den Blutdruck in die Kurve ein.', ru: 'Я вношу давление в карту.', cloze: 'trage' } },
    { id: 'pfl-a22-01-beobachtung', icon: 'Eye', de: 'Beobachtung', pos: 'noun', article: 'die', plural: 'Beobachtungen', ru: 'наблюдение', example: { de: 'Schreib nur deine Beobachtungen auf, keine Meinungen.', ru: 'Записывай только наблюдения, а не мнения.', cloze: 'Beobachtungen' } },
    { id: 'pfl-a22-01-beobachten', icon: 'Eye', de: 'beobachten', pos: 'verb', ru: 'наблюдать', forms: 'er beobachtet · hat beobachtet', example: { de: 'Ich habe beobachtet, dass er wenig trinkt.', ru: 'Я заметила, что он мало пьёт.', cloze: 'beobachtet' } },
    { id: 'pfl-a22-01-sachlich', icon: 'Scale', de: 'sachlich', pos: 'adj', ru: 'объективный, по существу', note: 'Не «Patient ist schwierig», а «Patient lehnt das Essen ab».', example: { de: 'Die Dokumentation muss sachlich sein.', ru: 'Документация должна быть объективной.', cloze: 'sachlich' } },
    { id: 'pfl-a22-01-abkuerzung', icon: 'Type', de: 'Abkürzung', pos: 'noun', article: 'die', plural: 'Abkürzungen', ru: 'сокращение, аббревиатура', example: { de: 'Verwende nur die erlaubten Abkürzungen.', ru: 'Используй только разрешённые сокращения.', cloze: 'Abkürzungen' } },
    { id: 'pfl-a22-01-handzeichen', icon: 'Signature', de: 'Handzeichen', pos: 'noun', article: 'das', plural: 'Handzeichen', ru: 'визирование (подпись-инициалы)', parts: ['Hand', 'zeichen'], example: { de: 'Nach jedem Eintrag kommt dein Handzeichen.', ru: 'После каждой записи ставится твоя подпись.', cloze: 'Handzeichen' } },

    { id: 'pfl-a22-01-rechtlich', icon: 'Gavel', de: 'rechtlich', pos: 'adj', ru: 'юридический, правовой', example: { de: 'Die Dokumentation ist auch rechtlich wichtig.', ru: 'Документация важна и с юридической точки зрения.', cloze: 'rechtlich' } },
    { id: 'pfl-a22-01-nachweis', icon: 'BadgeCheck', de: 'Nachweis', pos: 'noun', article: 'der', plural: 'Nachweise', ru: 'доказательство, подтверждение', example: { de: 'Was nicht dokumentiert ist, gibt es keinen Nachweis.', ru: 'Если не задокументировано — нет доказательства.', cloze: 'Nachweis' } },
    { id: 'pfl-a22-01-nachvollziehbar', icon: 'Route', de: 'nachvollziehbar', pos: 'adj', ru: 'понятный, прослеживаемый', example: { de: 'Jeder Schritt muss nachvollziehbar sein.', ru: 'Каждый шаг должен быть понятен.', cloze: 'nachvollziehbar' } },
    { id: 'pfl-a22-01-elektronisch', icon: 'Tablet', de: 'elektronisch', pos: 'adj', ru: 'электронный', example: { de: 'Wir dokumentieren elektronisch auf dem Tablet.', ru: 'Мы ведём документацию в электронном виде на планшете.', cloze: 'elektronisch' } },
    { id: 'pfl-a22-01-lueckenlos', icon: 'Link', de: 'lückenlos', pos: 'adj', ru: 'без пробелов, полный', example: { de: 'Die Dokumentation muss lückenlos sein.', ru: 'Документация должна быть полной, без пробелов.', cloze: 'lückenlos' } },
    { id: 'pfl-a22-01-formulierung', icon: 'TextQuote', de: 'Formulierung', pos: 'noun', article: 'die', plural: 'Formulierungen', ru: 'формулировка', example: { de: 'Diese Formulierung ist zu ungenau.', ru: 'Эта формулировка слишком неточная.', cloze: 'Formulierung' } },
    { id: 'pfl-a22-01-zustand', icon: 'Activity', de: 'Zustand', pos: 'noun', article: 'der', plural: 'Zustände', ru: 'состояние', note: 'Allgemeinzustand (AZ) — общее состояние.', example: { de: 'Sein Zustand hat sich verschlechtert.', ru: 'Его состояние ухудшилось.', cloze: 'Zustand' } },
    { id: 'pfl-a22-01-auffaellig', icon: 'TriangleAlert', de: 'auffällig', pos: 'adj', ru: 'заметный, отклоняющийся от нормы', note: 'unauffällig — без особенностей.', example: { de: 'Ist dir etwas Auffälliges aufgefallen?', ru: 'Ты заметила что-нибудь необычное?', cloze: 'Auffälliges' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Was gehört in den Pflegebericht?',
      de: `Jana schreibt zum ersten Mal einen Pflegebericht. Sie schreibt: „Frau Lange war heute sehr schwierig.“ Sabine liest den Eintrag und schüttelt den Kopf.

„Das ist eine Meinung, keine Beobachtung“, erklärt sie. „Die Dokumentation muss sachlich sein. Was genau hast du beobachtet?“ Jana denkt nach: „Sie hat das Frühstück abgelehnt und dreimal versucht, allein aufzustehen.“ – „Genau! Das ist eine gute Formulierung.“

Sabine zeigt ihr noch zwei Regeln: Man verwendet nur die erlaubten Abkürzungen, und nach jedem Eintrag kommt das eigene Handzeichen. So weiß jeder, wer was geschrieben hat.`,
      ru: `Яна впервые пишет отчёт по уходу. Она пишет: «Госпожа Ланге сегодня была очень трудной». Сабина читает запись и качает головой.

«Это мнение, а не наблюдение, — объясняет она. — Документация должна быть объективной. Что именно ты наблюдала?» Яна думает: «Она отказалась от завтрака и три раза пыталась встать сама». — «Вот! Это хорошая формулировка».

Сабина показывает ей ещё два правила: используют только разрешённые сокращения, и после каждой записи ставят свою подпись. Так все знают, кто что написал.`,
      gloss: { janas: 'Яны', erstem: 'первой, первым', verwende: 'используй', dreimal: 'три раза', jana: 'Яна (имя)', sabine: 'Сабина (имя)', lange: 'Ланге (фамилия)', schwierig: 'трудный', schüttelt: 'качает', meinung: 'мнение', abgelehnt: 'отказалась', versucht: 'пыталась', aufzustehen: 'встать', verwendet: 'использует', erlaubten: 'разрешённые', eigene: 'собственный, свой', geschrieben: 'написал' },
      questions: [
        { q: 'Was ist das Problem mit Janas erstem Eintrag?', ru: 'В чём проблема первой записи Яны?', options: ['Es ist eine Meinung, keine Beobachtung.', 'Er ist zu lang.', 'Das Datum fehlt.'], answer: 'Es ist eine Meinung, keine Beobachtung.' },
        { q: 'Was hat Frau Lange gemacht?', ru: 'Что сделала госпожа Ланге?', options: ['Sie hat das Frühstück abgelehnt.', 'Sie hat viel gegessen.', 'Sie hat geschlafen.'], answer: 'Sie hat das Frühstück abgelehnt.' },
        { q: 'Was kommt nach jedem Eintrag?', ru: 'Что ставится после каждой записи?', options: ['Das eigene Handzeichen', 'Ein Foto', 'Die Unterschrift vom Arzt'], answer: 'Das eigene Handzeichen' },
      ],
      translate: [
        { de: 'Die Dokumentation muss sachlich sein.', ru: 'Документация должна быть объективной.', wrongRu: ['Документация должна быть короткой.', 'Документация может быть эмоциональной.'] },
        { de: 'Das ist eine Meinung, keine Beobachtung.', ru: 'Это мнение, а не наблюдение.', wrongRu: ['Это наблюдение, а не мнение.', 'Это вопрос, а не ответ.'] },
        { de: 'Verwende nur die erlaubten Abkürzungen.', ru: 'Используй только разрешённые сокращения.', wrongRu: ['Не используй никаких сокращений.', 'Используй любые сокращения.'] },
      ],
    },
    {
      lesson: 1, title: 'Warum so genau?',
      de: `In der Pause fragt Jana: „Warum müssen wir so viel dokumentieren? Das kostet so viel Zeit.“ Sabine antwortet: „Die Dokumentation ist auch rechtlich wichtig. Wenn etwas passiert, ist sie der Nachweis für unsere Arbeit. Was nicht dokumentiert ist, gilt als nicht gemacht.“

Seit einem Jahr dokumentiert die Station elektronisch auf Tablets. Jeder Eintrag hat automatisch Datum und Uhrzeit. Das ist praktisch, aber die Dokumentation muss trotzdem lückenlos und nachvollziehbar sein.

„Und wenn mir etwas Auffälliges auffällt?“, fragt Jana. „Dann schreibst du es auf und sagst es sofort der Kollegin oder dem Arzt. Zum Beispiel, wenn sich der Zustand von einem Patienten verschlechtert.“`,
      ru: `На перерыве Яна спрашивает: «Почему мы должны столько документировать? Это отнимает столько времени». Сабина отвечает: «Документация важна и юридически. Если что-то случится, она — доказательство нашей работы. Что не задокументировано, считается несделанным».

Уже год отделение ведёт документацию в электронном виде на планшетах. У каждой записи автоматически есть дата и время. Это удобно, но документация всё равно должна быть полной и понятной.

«А если я замечу что-то необычное?» — спрашивает Яна. «Тогда записываешь и сразу говоришь коллеге или врачу. Например, если состояние пациента ухудшается».`,
      gloss: { sagst: 'говоришь', arbeit: 'работа', schreibst: '(ты) пишешь', schön: 'красивый', papier: 'бумага', gar: 'вовсе (gar nicht — вообще нет)', aufschreiben: 'записывать', bescheid: '(Bescheid wissen) быть в курсе', jana: 'Яна (имя)', sabine: 'Сабина (имя)', kostet: 'стоит; отнимает', gilt: '(gilt als) считается', gemacht: 'сделанным', tablets: 'планшеты', automatisch: 'автоматически', praktisch: 'удобно', trotzdem: 'всё равно', auffällt: '(mir auffällt) я замечу', verschlechtert: '(sich verschlechtert) ухудшается' },
      questions: [
        { q: 'Warum ist die Dokumentation rechtlich wichtig?', ru: 'Почему документация важна юридически?', options: ['Sie ist der Nachweis für die Arbeit.', 'Sie ist schön.', 'Der Arzt liest sie gern.'], answer: 'Sie ist der Nachweis für die Arbeit.' },
        { q: 'Wie dokumentiert die Station seit einem Jahr?', ru: 'Как отделение ведёт документацию уже год?', options: ['Elektronisch auf Tablets', 'Auf Papier', 'Gar nicht'], answer: 'Elektronisch auf Tablets' },
        { q: 'Was macht man, wenn sich der Zustand verschlechtert?', ru: 'Что делают, если состояние ухудшается?', options: ['Aufschreiben und sofort Bescheid sagen', 'Nur aufschreiben', 'Bis morgen warten'], answer: 'Aufschreiben und sofort Bescheid sagen' },
      ],
      translate: [
        { de: 'Was nicht dokumentiert ist, gilt als nicht gemacht.', ru: 'Что не задокументировано, считается несделанным.', wrongRu: ['Что задокументировано, считается несделанным.', 'Что не сделано, нужно задокументировать.'] },
        { de: 'Sein Zustand hat sich verschlechtert.', ru: 'Его состояние ухудшилось.', wrongRu: ['Его состояние улучшилось.', 'Её состояние ухудшилось.'] },
        { de: 'Die Dokumentation muss lückenlos sein.', ru: 'Документация должна быть полной, без пробелов.', wrongRu: ['Документация может быть неполной.', 'Документация должна быть короткой.'] },
      ],
    },
  ],
};
