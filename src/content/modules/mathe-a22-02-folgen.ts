import type { Module } from '../types.ts';

// A2.2 mathe 02: sequences, terms, convergence and limits in the analysis lecture (lesson 0), the epsilon definition and estimates in the exercise group (lesson 1).

export const module: Module = {
  id: 'mathe-a22-02-folgen', sphere: 'mathe', level: 'A2.2',
  title: 'Folgen und Grenzwerte', subtitle: 'Последовательность, член, предел, сходимость, эпсилон и оценки: язык курса анализа.',
  words: [
    { id: 'mat-a22-02-folge', icon: 'ListOrdered', de: 'Folge', pos: 'noun', article: 'die', plural: 'Folgen', ru: 'последовательность; следствие', note: 'In Analysis: die Folge (aₙ). В жизни: die Folge — последствие.', example: { de: 'Die Folge 1, 1/2, 1/3 … wird immer kleiner.', ru: 'Последовательность 1, 1/2, 1/3 … становится всё меньше.', cloze: 'Folge' } },
    { id: 'mat-a22-02-glied', icon: 'Link2', de: 'Glied', pos: 'noun', article: 'das', plural: 'Glieder', ru: 'член (последовательности)', note: 'das n-te Glied — n-й член.', example: { de: 'Das erste Glied der Folge ist eins.', ru: 'Первый член последовательности — единица.', cloze: 'Glied' } },
    { id: 'mat-a22-02-grenzwert', icon: 'ArrowRightToLine', de: 'Grenzwert', pos: 'noun', article: 'der', plural: 'Grenzwerte', ru: 'предел', parts: ['Grenz', 'wert'], note: 'Синоним: der Limes. Читают: Limes für n gegen unendlich.', example: { de: 'Der Grenzwert der Folge ist null.', ru: 'Предел последовательности равен нулю.', cloze: 'Grenzwert' } },
    { id: 'mat-a22-02-konvergieren', icon: 'Merge', de: 'konvergieren', pos: 'verb', ru: 'сходиться', forms: 'sie konvergiert · hat konvergiert', note: 'gegen + Akk konvergieren — сходиться к. Существительное: die Konvergenz.', example: { de: 'Die Folge konvergiert gegen null.', ru: 'Последовательность сходится к нулю.', cloze: 'konvergiert' } },
    { id: 'mat-a22-02-divergieren', icon: 'Split', de: 'divergieren', pos: 'verb', ru: 'расходиться', forms: 'sie divergiert · hat divergiert', example: { de: 'Die Folge 1, 2, 3, … divergiert.', ru: 'Последовательность 1, 2, 3, … расходится.', cloze: 'divergiert' } },
    { id: 'mat-a22-02-unendlich', icon: 'Infinity', de: 'unendlich', pos: 'adj', ru: 'бесконечный; бесконечность', note: 'n gegen unendlich — n стремится к бесконечности.', example: { de: 'Für n gegen unendlich wird das Glied sehr klein.', ru: 'При n, стремящемся к бесконечности, член становится очень маленьким.', cloze: 'unendlich' } },
    { id: 'mat-a22-02-beschraenkt', icon: 'Brackets', de: 'beschränkt', pos: 'adj', ru: 'ограниченный', note: 'nach oben beschränkt — ограниченная сверху.', example: { de: 'Jede konvergente Folge ist beschränkt.', ru: 'Каждая сходящаяся последовательность ограничена.', cloze: 'beschränkt' } },
    { id: 'mat-a22-02-monoton', icon: 'TrendingDown', de: 'monoton', pos: 'adj', ru: 'монотонный', note: 'monoton wachsend / fallend — монотонно возрастающая / убывающая.', example: { de: 'Die Folge ist monoton fallend.', ru: 'Последовательность монотонно убывает.', cloze: 'monoton' } },
    { id: 'mat-a22-02-nullfolge', icon: 'CircleDot', de: 'Nullfolge', pos: 'noun', article: 'die', plural: 'Nullfolgen', ru: 'бесконечно малая последовательность (сходящаяся к нулю)', parts: ['Null', 'folge'], example: { de: 'Eins durch n ist eine Nullfolge.', ru: 'Один делённое на n — бесконечно малая последовательность.', cloze: 'Nullfolge' } },
    { id: 'mat-a22-02-streben', icon: 'MoveRight', de: 'streben', pos: 'verb', ru: 'стремиться', forms: 'sie strebt · hat gestrebt', note: 'gegen + Akk streben. В жизни: nach Erfolg streben — стремиться к успеху.', example: { de: 'Die Glieder streben gegen null.', ru: 'Члены стремятся к нулю.', cloze: 'streben' } },
    { id: 'mat-a22-02-epsilon', icon: 'Sigma', de: 'Epsilon', pos: 'noun', article: 'das', plural: 'Epsilons', ru: 'эпсилон (ε)', example: { de: 'Wähle ein beliebiges Epsilon größer als null.', ru: 'Выбери произвольный эпсилон больше нуля.', cloze: 'Epsilon' } },
    { id: 'mat-a22-02-umgebung', icon: 'CircleDashed', de: 'Umgebung', pos: 'noun', article: 'die', plural: 'Umgebungen', ru: 'окрестность; окружение', note: 'die Epsilon-Umgebung — ε-окрестность.', example: { de: 'Fast alle Glieder liegen in der Umgebung des Grenzwerts.', ru: 'Почти все члены лежат в окрестности предела.', cloze: 'Umgebung' } },
    { id: 'mat-a22-02-beliebig', icon: 'Shuffle', de: 'beliebig', pos: 'adj', ru: 'произвольный, любой', note: 'beliebig klein — сколь угодно малый.', example: { de: 'Epsilon kann beliebig klein sein.', ru: 'Эпсилон может быть сколь угодно малым.', cloze: 'beliebig' } },
    { id: 'mat-a22-02-abschaetzen', icon: 'Scale', de: 'abschätzen', pos: 'verb', ru: 'оценивать (неравенством)', forms: 'er schätzt ab · hat abgeschätzt', note: 'Существительное: die Abschätzung — оценка.', example: { de: 'Wir schätzen den Ausdruck nach oben ab.', ru: 'Мы оцениваем выражение сверху.', cloze: 'schätzen' } },
    { id: 'mat-a22-02-ungleichung', icon: 'ChevronsLeftRight', de: 'Ungleichung', pos: 'noun', article: 'die', plural: 'Ungleichungen', ru: 'неравенство', note: 'die Dreiecksungleichung — неравенство треугольника.', example: { de: 'Wir lösen zuerst eine einfache Ungleichung.', ru: 'Сначала мы решаем простое неравенство.', cloze: 'Ungleichung' } },
    { id: 'mat-a22-02-schranke', icon: 'Fence', de: 'Schranke', pos: 'noun', article: 'die', plural: 'Schranken', ru: 'граница (верхняя, нижняя); шлагбаум', note: 'obere Schranke — верхняя граница.', example: { de: 'Zwei ist eine obere Schranke der Folge.', ru: 'Два — верхняя граница последовательности.', cloze: 'Schranke' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Analysis, erste Vorlesung',
      de: `Die erste Vorlesung „Analysis 1“ beginnt mit Folgen. Professor Weber schreibt an die Tafel: a n gleich eins durch n. „Das erste Glied ist eins, das zweite ein Halb, das dritte ein Drittel. Was passiert, wenn n gegen unendlich geht?“

Sophie sieht es sofort: Die Glieder werden immer kleiner, die Folge ist monoton fallend. Sie konvergiert gegen null, der Grenzwert ist also null. Außerdem ist die Folge beschränkt, denn alle Glieder liegen zwischen null und eins.

Dann zeigt der Professor ein zweites Beispiel: a n gleich n. „Diese Folge wächst ohne Ende. Sie hat keinen Grenzwert, sie divergiert.“ Am Ende sagt er einen wichtigen Satz: „Jede konvergente Folge ist beschränkt. Aber nicht jede beschränkte Folge konvergiert.“`,
      ru: `Первая лекция «Анализ 1» начинается с последовательностей. Профессор Вебер пишет на доске: a n равно один, делённое на n. «Первый член — единица, второй — половина, третий — треть. Что происходит, когда n стремится к бесконечности?»

Софи сразу видит: члены становятся всё меньше, последовательность монотонно убывает. Она сходится к нулю, значит, предел равен нулю. Кроме того, последовательность ограничена, ведь все члены лежат между нулём и единицей.

Потом профессор показывает второй пример: a n равно n. «Эта последовательность растёт бесконечно. У неё нет предела, она расходится». В конце он произносит важную теорему: «Каждая сходящаяся последовательность ограничена. Но не каждая ограниченная последовательность сходится».`,
      gloss: { zweites: 'второй', aussage: 'утверждение', erste: 'первая', analysis: 'математический анализ', beginnt: 'начинается', folgen: 'последовательности', professor: 'профессор', weber: 'Вебер (фамилия)', schreibt: 'пишет', tafel: 'доска', a: 'a (обозначение последовательности)', n: 'n (индекс)', durch: 'на (eins durch n — один делённое на n)', zweite: 'второй', halb: 'половина (ein Halb)', dritte: 'третий', passiert: 'происходит', wenn: 'когда, если', gegen: 'к (n gegen unendlich — n стремится к бесконечности)', geht: 'идёт, стремится', sophie: 'Софи (имя)', sieht: 'видит', sofort: 'сразу', glieder: 'члены', werden: 'становятся', immer: 'всё (immer kleiner — всё меньше)', kleiner: 'меньше', fallend: 'убывающая', also: 'значит', außerdem: 'кроме того', denn: 'ведь', alle: 'все', liegen: 'лежат', zwischen: 'между', zeigt: 'показывает', wächst: 'растёт', ohne: 'без', ende: 'конец', keinen: 'никакого', wichtigen: 'важное', jede: 'каждая', konvergente: 'сходящаяся', aber: 'но', beschränkte: 'ограниченная', was: 'что', welchen: 'какой', welche: 'какая' },
      questions: [
        { q: 'Welchen Grenzwert hat die Folge eins durch n?', ru: 'Какой предел у последовательности один делённое на n?', options: ['Null', 'Eins', 'Unendlich'], answer: 'Null' },
        { q: 'Was macht die Folge a n gleich n?', ru: 'Что делает последовательность a n = n?', options: ['Sie divergiert.', 'Sie konvergiert gegen null.', 'Sie ist beschränkt.'], answer: 'Sie divergiert.' },
        { q: 'Welche Aussage ist richtig?', ru: 'Какое утверждение верно?', options: ['Jede konvergente Folge ist beschränkt.', 'Jede beschränkte Folge konvergiert.', 'Keine Folge ist beschränkt.'], answer: 'Jede konvergente Folge ist beschränkt.' },
      ],
      translate: [
        { de: 'Die Folge konvergiert gegen null.', ru: 'Последовательность сходится к нулю.', wrongRu: ['Последовательность расходится.', 'Последовательность сходится к единице.'] },
        { de: 'Alle Glieder liegen zwischen null und eins.', ru: 'Все члены лежат между нулём и единицей.', wrongRu: ['Все члены больше единицы.', 'Некоторые члены лежат между нулём и единицей.'] },
        { de: 'Jede konvergente Folge ist beschränkt.', ru: 'Каждая сходящаяся последовательность ограничена.', wrongRu: ['Каждая ограниченная последовательность сходится.', 'Каждая сходящаяся последовательность монотонна.'] },
      ],
    },
    {
      lesson: 1, title: 'Epsilon in der Übung',
      de: `In der Übung soll Sophie beweisen, dass eins durch n eine Nullfolge ist. Sie ist unsicher. Die Tutorin Marie erklärt die Definition: „Eine Folge konvergiert gegen a, wenn für jedes beliebige Epsilon größer als null fast alle Glieder in der Epsilon-Umgebung von a liegen.“

„Und wie zeige ich das?“, fragt Sophie. Marie antwortet: „Du schätzt den Abstand ab. Wir brauchen die Ungleichung: eins durch n ist kleiner als Epsilon. Das gilt, sobald n größer als eins durch Epsilon ist.“

Sophie schreibt den Beweis auf. Auch wenn Epsilon sehr klein ist, gibt es so ein n. Die Glieder streben also wirklich gegen null. Marie nickt: „Genau. Und jetzt die Hausübung: Finde eine obere Schranke für die Folge in Aufgabe drei.“`,
      ru: `На практическом занятии Софи должна доказать, что один делённое на n — бесконечно малая последовательность. Она не уверена. Тьютор Мари объясняет определение: «Последовательность сходится к a, если для любого эпсилон больше нуля почти все члены лежат в эпсилон-окрестности a».

«А как мне это показать?» — спрашивает Софи. Мари отвечает: «Ты оцениваешь расстояние. Нам нужно неравенство: один делённое на n меньше эпсилон. Это выполняется, как только n больше, чем один делённое на эпсилон».

Софи записывает доказательство. Даже если эпсилон очень мал, такое n существует. Значит, члены действительно стремятся к нулю. Мари кивает: «Именно. А теперь домашнее задание: найди верхнюю границу последовательности в задаче три».`,
      gloss: { beliebige: 'любой, произвольный', professor: 'профессор', weber: 'Вебер (фамилия)', übung: 'практическое занятие', soll: 'должна', sophie: 'Софи (имя)', dass: 'что', durch: 'на (eins durch n — один делённое на n)', n: 'n (индекс)', unsicher: 'неуверенная', tutorin: 'тьютор (женщина)', marie: 'Мари (имя)', erklärt: 'объясняет', gegen: 'к', a: 'a (предел)', wenn: 'если', für: 'для', jedes: 'любого, каждого', größer: 'больше', als: 'чем', fast: 'почти', alle: 'все', glieder: 'члены', 'epsilon-umgebung': 'эпсилон-окрестность', von: 'от, точки', liegen: 'лежат', wie: 'как', zeige: 'покажу', fragt: 'спрашивает', antwortet: 'отвечает', schätzt: 'оцениваешь', abstand: 'расстояние', brauchen: 'нужно', kleiner: 'меньше', sobald: 'как только', schreibt: 'пишет', auf: '(schreibt auf) записывает', auch: 'даже (auch wenn — даже если)', klein: 'маленький', so: 'такой', also: 'значит', wirklich: 'действительно', nickt: 'кивает', jetzt: 'теперь', hausübung: 'домашнее задание', finde: 'найди', obere: 'верхнюю', drei: 'три', was: 'что', wer: 'кто', wofür: 'для чего' },
      questions: [
        { q: 'Was soll Sophie beweisen?', ru: 'Что должна доказать Софи?', options: ['Eins durch n ist eine Nullfolge.', 'Die Folge divergiert.', 'Epsilon ist null.'], answer: 'Eins durch n ist eine Nullfolge.' },
        { q: 'Wer erklärt die Definition?', ru: 'Кто объясняет определение?', options: ['Die Tutorin Marie', 'Professor Weber', 'Sophie'], answer: 'Die Tutorin Marie' },
        { q: 'Was soll Sophie in der Hausübung finden?', ru: 'Что Софи должна найти в домашнем задании?', options: ['Eine obere Schranke', 'Einen Grenzwert', 'Ein Epsilon'], answer: 'Eine obere Schranke' },
      ],
      translate: [
        { de: 'Epsilon kann beliebig klein sein.', ru: 'Эпсилон может быть сколь угодно малым.', wrongRu: ['Эпсилон должен быть большим.', 'Эпсилон может быть отрицательным.'] },
        { de: 'Die Glieder streben gegen null.', ru: 'Члены стремятся к нулю.', wrongRu: ['Члены стремятся к бесконечности.', 'Члены равны нулю.'] },
        { de: 'Du schätzt den Abstand ab.', ru: 'Ты оцениваешь расстояние.', wrongRu: ['Ты вычисляешь расстояние точно.', 'Ты увеличиваешь расстояние.'] },
      ],
    },
  ],
};
