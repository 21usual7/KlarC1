import type { Module } from '../types.ts';

// A2.2 mathe 07: assumption, claim and proof by contradiction — the square root of two (lesson 0), induction, counterexamples and case distinction (lesson 1).

export const module: Module = {
  id: 'mathe-a22-07-beweise', sphere: 'mathe', level: 'A2.2',
  title: 'Beweistechniken', subtitle: 'Предположение, утверждение, доказательство от противного, индукция и контрпример.',
  words: [
    { id: 'mat-a22-07-voraussetzung', icon: 'ClipboardList', de: 'Voraussetzung', pos: 'noun', article: 'die', plural: 'Voraussetzungen', ru: 'условие (теоремы), предпосылка', parts: ['Voraus', 'setzung'], note: 'В записи доказательства: Vor.: … / Beh.: … / Bew.: …', example: { de: 'Die Voraussetzung ist: n ist gerade.', ru: 'Условие: n чётное.', cloze: 'Voraussetzung' } },
    { id: 'mat-a22-07-behauptung', icon: 'Megaphone', de: 'Behauptung', pos: 'noun', article: 'die', plural: 'Behauptungen', ru: 'утверждение (которое нужно доказать)', note: 'behaupten — утверждать.', example: { de: 'Die Behauptung ist: n Quadrat ist gerade.', ru: 'Утверждение: n в квадрате чётно.', cloze: 'Behauptung' } },
    { id: 'mat-a22-07-zeigen', icon: 'Presentation', de: 'zeigen', pos: 'verb', ru: 'показывать; доказывать', forms: 'er zeigt · hat gezeigt', note: 'In Mathe: Zeigen Sie, dass … — Докажите, что …', example: { de: 'Zeigen Sie, dass die Summe gerade ist.', ru: 'Докажите, что сумма чётная.', cloze: 'Zeigen' } },
    { id: 'mat-a22-07-direkt', icon: 'ArrowRight', de: 'direkt', pos: 'adj', ru: 'прямой; прямо', note: 'ein direkter Beweis — прямое доказательство.', example: { de: 'Das kann man direkt beweisen.', ru: 'Это можно доказать напрямую.', cloze: 'direkt' } },
    { id: 'mat-a22-07-annahme', icon: 'CircleHelp', de: 'Annahme', pos: 'noun', article: 'die', plural: 'Annahmen', ru: 'предположение, допущение', example: { de: 'Die Annahme führt zu einem Widerspruch.', ru: 'Предположение приводит к противоречию.', cloze: 'Annahme' } },
    { id: 'mat-a22-07-annehmen', icon: 'Hand', de: 'annehmen', pos: 'verb', ru: 'предполагать; принимать', forms: 'er nimmt an · hat angenommen', note: 'Angenommen, … — Предположим, что …', example: { de: 'Wir nehmen an, dass die Wurzel aus zwei rational ist.', ru: 'Предположим, что корень из двух рационален.', cloze: 'nehmen' } },
    { id: 'mat-a22-07-widerspruch', icon: 'Zap', de: 'Widerspruch', pos: 'noun', article: 'der', plural: 'Widersprüche', ru: 'противоречие', note: 'der Beweis durch Widerspruch — доказательство от противного.', example: { de: 'Das ist ein Widerspruch!', ru: 'Это противоречие!', cloze: 'Widerspruch' } },
    { id: 'mat-a22-07-widerlegen', icon: 'CircleX', de: 'widerlegen', pos: 'verb', ru: 'опровергать', forms: 'er widerlegt · hat widerlegt', note: 'Неотделяемая приставка wider- (против).', example: { de: 'Ein einziges Beispiel genügt, um die Aussage zu widerlegen.', ru: 'Одного примера достаточно, чтобы опровергнуть утверждение.', cloze: 'widerlegen' } },
    { id: 'mat-a22-07-induktion', icon: 'Repeat', de: 'Induktion', pos: 'noun', article: 'die', plural: 'Induktionen', ru: 'индукция', note: 'die vollständige Induktion — математическая индукция.', example: { de: 'Wir beweisen die Formel mit vollständiger Induktion.', ru: 'Мы доказываем формулу методом математической индукции.', cloze: 'Induktion' } },
    { id: 'mat-a22-07-induktionsanfang', icon: 'Play', de: 'Induktionsanfang', pos: 'noun', article: 'der', plural: 'Induktionsanfänge', ru: 'база индукции', parts: ['Induktions', 'anfang'], example: { de: 'Der Induktionsanfang ist n gleich eins.', ru: 'База индукции — n равно единице.', cloze: 'Induktionsanfang' } },
    { id: 'mat-a22-07-induktionsschritt', icon: 'StepForward', de: 'Induktionsschritt', pos: 'noun', article: 'der', plural: 'Induktionsschritte', ru: 'шаг индукции', parts: ['Induktions', 'schritt'], note: 'Шаг от n к n + 1.', example: { de: 'Im Induktionsschritt gehen wir von n zu n plus eins.', ru: 'В шаге индукции мы переходим от n к n плюс один.', cloze: 'Induktionsschritt' } },
    { id: 'mat-a22-07-gegenbeispiel', icon: 'Ban', de: 'Gegenbeispiel', pos: 'noun', article: 'das', plural: 'Gegenbeispiele', ru: 'контрпример', parts: ['Gegen', 'beispiel'], example: { de: 'Zwei ist ein Gegenbeispiel: Sie ist eine Primzahl und gerade.', ru: 'Двойка — контрпример: она простая и чётная.', cloze: 'Gegenbeispiel' } },
    { id: 'mat-a22-07-fallunterscheidung', icon: 'GitBranch', de: 'Fallunterscheidung', pos: 'noun', article: 'die', plural: 'Fallunterscheidungen', ru: 'разбор случаев', parts: ['Fall', 'unterscheidung'], note: '1. Fall: n gerade, 2. Fall: n ungerade.', example: { de: 'Mit einer Fallunterscheidung ist der Beweis einfach.', ru: 'С разбором случаев доказательство простое.', cloze: 'Fallunterscheidung' } },
    { id: 'mat-a22-07-lemma', icon: 'Puzzle', de: 'Lemma', pos: 'noun', article: 'das', plural: 'Lemmata', ru: 'лемма (вспомогательная теорема)', note: 'Мн. ч.: die Lemmata. Синоним: der Hilfssatz.', example: { de: 'Zuerst beweisen wir ein kleines Lemma.', ru: 'Сначала мы докажем небольшую лемму.', cloze: 'Lemma' } },
    { id: 'mat-a22-07-allgemein', icon: 'Globe', de: 'allgemein', pos: 'adj', ru: 'общий; в общем виде', note: 'ohne Beschränkung der Allgemeinheit (o. B. d. A.) — без ограничения общности.', example: { de: 'Die Formel gilt allgemein für alle n.', ru: 'Формула верна в общем виде для всех n.', cloze: 'allgemein' } },
    { id: 'mat-a22-07-gelten', icon: 'BadgeCheck', de: 'gelten', pos: 'verb', ru: 'быть верным, выполняться; действовать', forms: 'es gilt · hat gegolten', note: 'Сильный глагол: gilt – galt – gegolten. Für alle n gilt … — Для всех n верно …', example: { de: 'Die Aussage gilt nicht für n gleich vierzig.', ru: 'Утверждение неверно при n, равном сорока.', cloze: 'gilt' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die Wurzel aus zwei',
      de: `Heute lernen die Studierenden zwei Arten von Beweisen. Zuerst einen direkten Beweis. Die Voraussetzung ist: n ist gerade. Die Behauptung ist: n Quadrat ist auch gerade. Man schreibt n als zwei mal k und rechnet direkt nach.

Dann kommt ein berühmter Beweis durch Widerspruch. Die Behauptung: Die Wurzel aus zwei ist nicht rational. „Wir nehmen das Gegenteil an“, sagt die Professorin. Die Annahme ist also: Die Wurzel aus zwei ist ein gekürzter Bruch p durch q.

Nach ein paar Schritten folgt: p ist gerade und q ist auch gerade. Aber dann wäre der Bruch nicht gekürzt. Das ist ein Widerspruch! Also war die Annahme falsch, und die Behauptung ist bewiesen. Sophie schreibt darunter: „q. e. d.“ — was zu zeigen war.`,
      ru: `Сегодня студенты изучают два вида доказательств. Сначала прямое доказательство. Условие: n чётное. Утверждение: n в квадрате тоже чётное. Записывают n как два, умноженное на k, и проверяют напрямую.

Потом идёт знаменитое доказательство от противного. Утверждение: корень из двух не является рациональным числом. «Предположим обратное», — говорит профессор. Значит, допущение: корень из двух — несократимая дробь p/q.

Через несколько шагов следует: p чётное, и q тоже чётное. Но тогда дробь была бы сократимой. Это противоречие! Значит, предположение было ложным, и утверждение доказано. Софи пишет под этим: «q. e. d.» — что и требовалось доказать.`,
      gloss: { heute: 'сегодня', lernen: 'изучают', studierenden: 'студенты', arten: 'вида, виды', von: 'из, от', beweisen: 'доказательств; доказывать', zuerst: 'сначала', einen: 'одно', direkten: 'прямое', n: 'n (число)', gerade: 'чётное', quadrat: 'квадрат (n Quadrat — n в квадрате)', auch: 'тоже', man: '(безличное) -ют', schreibt: 'пишет, записывает', als: 'как', k: 'k (число)', rechnet: '(rechnet nach) проверяет вычислением', nach: '(nachrechnen) проверять; через', kommt: 'идёт', berühmter: 'знаменитое', beweis: 'доказательство', durch: 'через; (durch Widerspruch) от противного', wurzel: 'корень', aus: 'из', rational: 'рациональный', gegenteil: 'обратное, противоположное', an: '(annehmen) предполагать', professorin: 'профессор (женщина)', also: 'значит', gekürzter: 'несократимая (сокращённая)', bruch: 'дробь', p: 'p (число)', q: 'q (число)', paar: 'пара (ein paar — несколько)', schritten: 'шагов', aber: 'но', dann: 'тогда', wäre: 'была бы', gekürzt: 'сокращённая', war: 'было', bewiesen: 'доказано', sophie: 'Софи (имя)', darunter: 'под этим', e: 'e (q. e. d.)', d: 'd (q. e. d.)', zu: '(was zu zeigen war) что требовалось', was: 'что', welche: 'какое', wie: 'как', viele: 'сколько (wie viele)', warum: 'почему' },
      questions: [
        { q: 'Was ist die Voraussetzung im direkten Beweis?', ru: 'Какое условие в прямом доказательстве?', options: ['n ist gerade.', 'n Quadrat ist gerade.', 'n ist eine Wurzel.'], answer: 'n ist gerade.' },
        { q: 'Was nimmt die Professorin an?', ru: 'Что предполагает профессор?', options: ['Die Wurzel aus zwei ist rational.', 'Die Wurzel aus zwei ist gerade.', 'p ist ungerade.'], answer: 'Die Wurzel aus zwei ist rational.' },
        { q: 'Warum ist die Annahme falsch?', ru: 'Почему предположение ложно?', options: ['Sie führt zu einem Widerspruch.', 'Der Bruch ist zu groß.', 'p und q sind ungerade.'], answer: 'Sie führt zu einem Widerspruch.' },
      ],
      translate: [
        { de: 'Wir nehmen das Gegenteil an.', ru: 'Предположим обратное.', wrongRu: ['Мы принимаем это утверждение.', 'Мы доказываем это напрямую.'] },
        { de: 'Das ist ein Widerspruch.', ru: 'Это противоречие.', wrongRu: ['Это доказательство.', 'Это не противоречие.'] },
        { de: 'Die Behauptung ist bewiesen.', ru: 'Утверждение доказано.', wrongRu: ['Утверждение опровергнуто.', 'Предположение доказано.'] },
      ],
    },
    {
      lesson: 1, title: 'Induktion und ein falscher Satz',
      de: `In der Übung soll Sophie zeigen, dass für alle n gilt: Die Summe von eins bis n ist n mal n plus eins durch zwei. Die Tutorin sagt: „Das machen wir mit Induktion.“

Der Induktionsanfang ist leicht: Für n gleich eins stimmt die Formel. Im Induktionsschritt nimmt man an, dass die Formel für n gilt, und zeigt sie für n plus eins. Danach gilt die Formel allgemein, für jedes n.

Dann kommt eine Falle. Die Aufgabe behauptet: „n Quadrat plus n plus 41 ist immer eine Primzahl.“ Für n gleich eins, zwei, drei stimmt das. Aber für n gleich 40 ist die Zahl 41 mal 41, also keine Primzahl. Ein einziges Gegenbeispiel widerlegt die Aussage. Für die letzte Aufgabe braucht Sophie ein Lemma und eine Fallunterscheidung: n gerade oder n ungerade.`,
      ru: `На практике Софи должна доказать, что для всех n верно: сумма от одного до n равна n, умноженному на n плюс один, делённому на два. Тьютор говорит: «Это мы сделаем по индукции».

База индукции простая: при n = 1 формула верна. В шаге индукции предполагают, что формула верна для n, и доказывают её для n + 1. После этого формула верна в общем виде, для любого n.

Потом попадается ловушка. В задаче утверждается: «n в квадрате плюс n плюс 41 — всегда простое число». Для n = 1, 2, 3 это верно. Но при n = 40 число равно 41 на 41, то есть не простое. Одного контрпримера достаточно, чтобы опровергнуть утверждение. Для последней задачи Софи нужна лемма и разбор случаев: n чётное или n нечётное.`,
      gloss: { summenformel: 'формула суммы', übung: 'практическое занятие', soll: 'должна', sophie: 'Софи (имя)', dass: 'что', für: 'для', alle: 'всех', n: 'n (число)', summe: 'сумма', von: 'от', bis: 'до', durch: 'на (durch zwei — делённое на два)', tutorin: 'тьютор (женщина)', machen: 'сделаем', leicht: 'простой, лёгкий', stimmt: 'верна', formel: 'формула', nimmt: '(nimmt an) предполагает', man: '(безличное) -ют', danach: 'после этого', jedes: 'любого', kommt: 'идёт, попадается', falle: 'ловушка', aufgabe: 'задача', behauptet: 'утверждает', quadrat: 'квадрат (n Quadrat — n в квадрате)', immer: 'всегда', primzahl: 'простое число', aber: 'но', also: 'то есть', keine: 'не', einziges: 'единственный', aussage: 'утверждение', letzte: 'последней', braucht: 'нужна', gerade: 'чётное', oder: 'или', ungerade: 'нечётное', falscher: 'ложная', satz: 'теорема, утверждение', was: 'что', wie: 'как', welches: 'какое', womit: 'чем', warum: 'почему' },
      questions: [
        { q: 'Womit beweist Sophie die Summenformel?', ru: 'Чем Софи доказывает формулу суммы?', options: ['Mit Induktion', 'Mit einem Gegenbeispiel', 'Mit einer Wahrheitstafel'], answer: 'Mit Induktion' },
        { q: 'Für welches n ist n Quadrat plus n plus 41 keine Primzahl?', ru: 'При каком n выражение n² + n + 41 не простое?', options: ['Für n gleich 40', 'Für n gleich 1', 'Für n gleich 3'], answer: 'Für n gleich 40' },
        { q: 'Was widerlegt die Aussage?', ru: 'Что опровергает утверждение?', options: ['Ein Gegenbeispiel', 'Ein Lemma', 'Der Induktionsanfang'], answer: 'Ein Gegenbeispiel' },
      ],
      translate: [
        { de: 'Der Induktionsanfang ist leicht.', ru: 'База индукции простая.', wrongRu: ['Шаг индукции простой.', 'База индукции очень сложная.'] },
        { de: 'Die Formel gilt für alle n.', ru: 'Формула верна для всех n.', wrongRu: ['Формула верна не для всех n.', 'Формула верна только для n = 1.'] },
        { de: 'Ein Gegenbeispiel widerlegt die Aussage.', ru: 'Контрпример опровергает утверждение.', wrongRu: ['Контрпример доказывает утверждение.', 'Лемма опровергает утверждение.'] },
      ],
    },
  ],
};
