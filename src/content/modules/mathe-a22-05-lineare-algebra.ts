import type { Module } from '../types.ts';

// A2.2 mathe 05: vectors, scalars, the dot product and independence (lesson 0), matrices, determinant, rank and invertibility (lesson 1).

export const module: Module = {
  id: 'mathe-a22-05-lineare-algebra', sphere: 'mathe', level: 'A2.2',
  title: 'Lineare Algebra', subtitle: 'Вектор, скаляр, скалярное произведение, матрица, определитель и ранг.',
  words: [
    { id: 'mat-a22-05-vektor', icon: 'MoveUpRight', de: 'Vektor', pos: 'noun', article: 'der', plural: 'Vektoren', ru: 'вектор', note: 'Ударение: VEK-tor, мн. ч. Vek-TO-ren.', example: { de: 'Der Vektor zeigt nach rechts oben.', ru: 'Вектор направлен вправо вверх.', cloze: 'Vektor' } },
    { id: 'mat-a22-05-skalar', icon: 'Hash', de: 'Skalar', pos: 'noun', article: 'der', plural: 'Skalare', ru: 'скаляр (число)', example: { de: 'Ein Skalar ist einfach eine Zahl.', ru: 'Скаляр — это просто число.', cloze: 'Skalar' } },
    { id: 'mat-a22-05-vektorraum', icon: 'Box', de: 'Vektorraum', pos: 'noun', article: 'der', plural: 'Vektorräume', ru: 'векторное пространство', parts: ['Vektor', 'raum'], example: { de: 'Die Ebene ist ein Vektorraum der Dimension zwei.', ru: 'Плоскость — векторное пространство размерности два.', cloze: 'Vektorraum' } },
    { id: 'mat-a22-05-koordinate', icon: 'Grid2x2', de: 'Koordinate', pos: 'noun', article: 'die', plural: 'Koordinaten', ru: 'координата', example: { de: 'Die erste Koordinate ist zwei.', ru: 'Первая координата равна двум.', cloze: 'Koordinate' } },
    { id: 'mat-a22-05-unabhaengig', icon: 'Unlink', de: 'unabhängig', pos: 'adj', ru: 'независимый', note: 'linear unabhängig — линейно независимый. Противоположность: abhängig.', example: { de: 'Die beiden Vektoren sind linear unabhängig.', ru: 'Эти два вектора линейно независимы.', cloze: 'unabhängig' } },
    { id: 'mat-a22-05-skalarprodukt', icon: 'X', de: 'Skalarprodukt', pos: 'noun', article: 'das', plural: 'Skalarprodukte', ru: 'скалярное произведение', parts: ['Skalar', 'produkt'], example: { de: 'Das Skalarprodukt der beiden Vektoren ist null.', ru: 'Скалярное произведение двух векторов равно нулю.', cloze: 'Skalarprodukt' } },
    { id: 'mat-a22-05-senkrecht', icon: 'SquareDashedBottom', de: 'senkrecht', pos: 'adj', ru: 'перпендикулярный; вертикальный', note: 'aufeinander senkrecht stehen — быть перпендикулярными. waagrecht — горизонтальный.', example: { de: 'Die Vektoren stehen senkrecht aufeinander.', ru: 'Векторы перпендикулярны друг другу.', cloze: 'senkrecht' } },
    { id: 'mat-a22-05-richtung', icon: 'Compass', de: 'Richtung', pos: 'noun', article: 'die', plural: 'Richtungen', ru: 'направление', example: { de: 'Ein negativer Skalar ändert die Richtung.', ru: 'Отрицательный скаляр меняет направление.', cloze: 'Richtung' } },
    { id: 'mat-a22-05-matrix', icon: 'Grid3x3', de: 'Matrix', pos: 'noun', article: 'die', plural: 'Matrizen', ru: 'матрица', note: 'Мн. ч.: die Matrizen. eine 2×2-Matrix — «zwei-mal-zwei-Matrix».', example: { de: 'Die Matrix hat zwei Zeilen und zwei Spalten.', ru: 'У матрицы две строки и два столбца.', cloze: 'Matrix' } },
    { id: 'mat-a22-05-determinante', icon: 'SquareSigma', de: 'Determinante', pos: 'noun', article: 'die', plural: 'Determinanten', ru: 'определитель, детерминант', example: { de: 'Die Determinante ist fünf.', ru: 'Определитель равен пяти.', cloze: 'Determinante' } },
    { id: 'mat-a22-05-gleichungssystem', icon: 'Rows3', de: 'Gleichungssystem', pos: 'noun', article: 'das', plural: 'Gleichungssysteme', ru: 'система уравнений', parts: ['Gleichungs', 'system'], example: { de: 'Das Gleichungssystem hat genau eine Lösung.', ru: 'Система уравнений имеет ровно одно решение.', cloze: 'Gleichungssystem' } },
    { id: 'mat-a22-05-rang', icon: 'ChartNoAxesColumn', de: 'Rang', pos: 'noun', article: 'der', plural: 'Ränge', ru: 'ранг', note: 'Также: звание, место (in der Rangliste).', example: { de: 'Die Matrix hat vollen Rang.', ru: 'Матрица имеет полный ранг.', cloze: 'Rang' } },
    { id: 'mat-a22-05-invertierbar', icon: 'Undo2', de: 'invertierbar', pos: 'adj', ru: 'обратимый', note: 'die inverse Matrix — обратная матрица.', example: { de: 'Wenn die Determinante nicht null ist, ist die Matrix invertierbar.', ru: 'Если определитель не равен нулю, матрица обратима.', cloze: 'invertierbar' } },
    { id: 'mat-a22-05-eigenwert', icon: 'Sparkle', de: 'Eigenwert', pos: 'noun', article: 'der', plural: 'Eigenwerte', ru: 'собственное значение', parts: ['Eigen', 'wert'], note: 'der Eigenvektor — собственный вектор. В английском заимствовано: eigenvalue.', example: { de: 'Nächste Woche berechnen wir die Eigenwerte.', ru: 'На следующей неделе мы вычислим собственные значения.', cloze: 'Eigenwerte' } },
    { id: 'mat-a22-05-abbildung', icon: 'ArrowRightLeft', de: 'Abbildung', pos: 'noun', article: 'die', plural: 'Abbildungen', ru: 'отображение; рисунок', note: 'eine lineare Abbildung — линейное отображение. В книгах: Abbildung 3 — рисунок 3.', example: { de: 'Jede Matrix beschreibt eine lineare Abbildung.', ru: 'Каждая матрица задаёт линейное отображение.', cloze: 'Abbildung' } },
    { id: 'mat-a22-05-transponieren', icon: 'FlipHorizontal2', de: 'transponieren', pos: 'verb', ru: 'транспонировать', forms: 'er transponiert · hat transponiert', example: { de: 'Wenn man die Matrix transponiert, bleibt sie gleich.', ru: 'Если транспонировать эту матрицу, она не изменится.', cloze: 'transponiert' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Zwei Pfeile',
      de: `In der ersten Vorlesung „Lineare Algebra“ zeichnet Professorin Huber zwei Pfeile in ein Koordinatensystem. Der erste Vektor hat die Koordinaten zwei und eins, der zweite minus eins und zwei.

„Wenn ich einen Vektor mit einem Skalar multipliziere, ändert sich seine Länge. Bei einem negativen Skalar ändert sich auch die Richtung.“ Dann berechnet sie das Skalarprodukt: zwei mal minus eins plus eins mal zwei. Das ist null! Die beiden Vektoren stehen also senkrecht aufeinander.

Sie sind auch linear unabhängig: Keiner ist ein Vielfaches des anderen. Deshalb bilden sie eine Basis der Ebene. Die Ebene ist ein Vektorraum der Dimension zwei. Sophie schreibt mit: „Zwei unabhängige Vektoren in der Ebene sind immer eine Basis.“`,
      ru: `На первой лекции «Линейная алгебра» профессор Хубер рисует в системе координат две стрелки. У первого вектора координаты два и один, у второго — минус один и два.

«Если я умножаю вектор на скаляр, меняется его длина. При отрицательном скаляре меняется и направление». Потом она вычисляет скалярное произведение: два на минус один плюс один на два. Это ноль! Значит, эти два вектора перпендикулярны.

Они также линейно независимы: ни один не является кратным другому. Поэтому они образуют базис плоскости. Плоскость — векторное пространство размерности два. Софи записывает: «Два независимых вектора на плоскости всегда образуют базис».`,
      gloss: { negativer: 'отрицательный', ersten: 'первой', vorlesung: 'лекция', lineare: 'линейная', algebra: 'алгебра', zeichnet: 'рисует', professorin: 'профессор (женщина)', huber: 'Хубер (фамилия)', pfeile: 'стрелки', erste: 'первый', koordinaten: 'координаты', zweite: 'второй', wenn: 'если', multipliziere: 'умножаю', ändert: 'меняется (sich ändern)', seine: 'его', länge: 'длина', bei: 'при', negativen: 'отрицательном', auch: 'также', berechnet: 'вычисляет', beiden: 'оба', stehen: 'стоят', also: 'значит', aufeinander: 'друг на друга, друг к другу', linear: 'линейно', keiner: 'ни один', vielfaches: 'кратное', anderen: 'другого', deshalb: 'поэтому', bilden: 'образуют', basis: 'базис', ebene: 'плоскость', dimension: 'размерность', sophie: 'Софи (имя)', schreibt: 'пишет (mitschreiben — записывать)', mit: '(schreibt mit) записывает', unabhängige: 'независимых', immer: 'всегда', was: 'что', welche: 'какие', wie: 'как', warum: 'почему', viele: 'сколько (wie viele)' },
      questions: [
        { q: 'Was ist das Skalarprodukt der beiden Vektoren?', ru: 'Чему равно скалярное произведение двух векторов?', options: ['Null', 'Zwei', 'Fünf'], answer: 'Null' },
        { q: 'Wann ändert sich die Richtung?', ru: 'Когда меняется направление?', options: ['Bei einem negativen Skalar', 'Bei jedem Skalar', 'Nie'], answer: 'Bei einem negativen Skalar' },
        { q: 'Welche Dimension hat die Ebene?', ru: 'Какая размерность у плоскости?', options: ['Zwei', 'Drei', 'Eins'], answer: 'Zwei' },
      ],
      translate: [
        { de: 'Die Vektoren stehen senkrecht aufeinander.', ru: 'Векторы перпендикулярны друг другу.', wrongRu: ['Векторы параллельны друг другу.', 'Векторы лежат на одной прямой.'] },
        { de: 'Sie sind linear unabhängig.', ru: 'Они линейно независимы.', wrongRu: ['Они линейно зависимы.', 'Они не являются векторами.'] },
        { de: 'Ein negativer Skalar ändert die Richtung.', ru: 'Отрицательный скаляр меняет направление.', wrongRu: ['Положительный скаляр меняет направление.', 'Отрицательный скаляр не меняет направление.'] },
      ],
    },
    {
      lesson: 1, title: 'Eine Matrix mit Determinante fünf',
      de: `In der zweiten Woche geht es um Matrizen. Professorin Huber schreibt eine Matrix mit zwei Zeilen und zwei Spalten an: oben zwei und eins, unten eins und drei. „Jede Matrix beschreibt eine lineare Abbildung.“

Zuerst berechnet die Klasse die Determinante: zwei mal drei minus eins mal eins, also fünf. Weil die Determinante nicht null ist, ist die Matrix invertierbar. Sie hat vollen Rang, nämlich zwei. Deshalb hat das passende Gleichungssystem genau eine Lösung.

Ein Student fragt: „Was passiert, wenn man die Matrix transponiert?“ Die Professorin antwortet: „Bei dieser Matrix bleibt sie gleich, denn sie ist symmetrisch. Symmetrische Matrizen haben schöne Eigenschaften. Nächste Woche berechnen wir ihre Eigenwerte.“`,
      ru: `На второй неделе речь идёт о матрицах. Профессор Хубер пишет матрицу с двумя строками и двумя столбцами: сверху два и один, снизу один и три. «Каждая матрица задаёт линейное отображение».

Сначала группа вычисляет определитель: два на три минус один на один, то есть пять. Поскольку определитель не равен нулю, матрица обратима. У неё полный ранг, а именно два. Поэтому соответствующая система уравнений имеет ровно одно решение.

Один студент спрашивает: «Что будет, если транспонировать матрицу?» Профессор отвечает: «Эта матрица не изменится, ведь она симметрична. У симметричных матриц прекрасные свойства. На следующей неделе мы вычислим их собственные значения».`,
      gloss: { zweiten: 'второй', woche: 'неделя', geht: '(es geht um) речь идёт о', um: 'о', matrizen: 'матрицы, матрицах', professorin: 'профессор (женщина)', huber: 'Хубер (фамилия)', schreibt: 'пишет (anschreiben — записать на доске)', zeilen: 'строки', spalten: 'столбцы', an: '(anschreiben) записывает', oben: 'сверху', unten: 'снизу', jede: 'каждая', beschreibt: 'описывает', lineare: 'линейное', zuerst: 'сначала', berechnet: 'вычисляет', klasse: 'группа, класс', also: 'то есть', weil: 'поскольку', vollen: 'полный', nämlich: 'а именно', deshalb: 'поэтому', passende: 'соответствующая', genau: 'ровно', lösung: 'решение', student: 'студент', fragt: 'спрашивает', passiert: 'происходит', wenn: 'если', antwortet: 'отвечает', bei: 'у, при', dieser: 'этой', bleibt: 'остаётся', denn: 'ведь', symmetrisch: 'симметричная', symmetrische: 'симметричные', schöne: 'прекрасные', eigenschaften: 'свойства', nächste: 'следующей', berechnen: 'вычислим', ihre: 'их', was: 'что', warum: 'почему', wie: 'как', groß: 'большой (wie groß — какова)', welchen: 'какой' },
      questions: [
        { q: 'Wie groß ist die Determinante?', ru: 'Чему равен определитель?', options: ['Fünf', 'Sieben', 'Null'], answer: 'Fünf' },
        { q: 'Warum ist die Matrix invertierbar?', ru: 'Почему матрица обратима?', options: ['Die Determinante ist nicht null.', 'Sie hat zwei Zeilen.', 'Sie ist eine Abbildung.'], answer: 'Die Determinante ist nicht null.' },
        { q: 'Was passiert beim Transponieren?', ru: 'Что происходит при транспонировании?', options: ['Die Matrix bleibt gleich.', 'Die Determinante wird null.', 'Der Rang wird eins.'], answer: 'Die Matrix bleibt gleich.' },
      ],
      translate: [
        { de: 'Die Matrix ist invertierbar.', ru: 'Матрица обратима.', wrongRu: ['Матрица необратима.', 'Матрица равна нулю.'] },
        { de: 'Das Gleichungssystem hat genau eine Lösung.', ru: 'Система уравнений имеет ровно одно решение.', wrongRu: ['Система уравнений не имеет решений.', 'Система уравнений имеет бесконечно много решений.'] },
        { de: 'Nächste Woche berechnen wir die Eigenwerte.', ru: 'На следующей неделе мы вычислим собственные значения.', wrongRu: ['На прошлой неделе мы вычислили собственные значения.', 'На следующей неделе мы вычислим определитель.'] },
      ],
    },
  ],
};
