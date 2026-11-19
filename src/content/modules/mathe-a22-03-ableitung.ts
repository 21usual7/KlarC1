import type { Module } from '../types.ts';

// A2.2 mathe 03: derivative as instantaneous rate of change, tangent, chain rule (lesson 0), curve sketching and an optimisation problem (lesson 1).

export const module: Module = {
  id: 'mathe-a22-03-ableitung', sphere: 'mathe', level: 'A2.2',
  title: 'Differentialrechnung', subtitle: 'Производная, касательная, скорость изменения, экстремумы и точки перегиба.',
  words: [
    { id: 'mat-a22-03-ableitung', icon: 'TrendingUp', de: 'Ableitung', pos: 'noun', article: 'die', plural: 'Ableitungen', ru: 'производная', note: 'f′ читается «f Strich». die zweite Ableitung — вторая производная.', example: { de: 'Die Ableitung von x hoch zwei ist zwei x.', ru: 'Производная от x в квадрате — два x.', cloze: 'Ableitung' } },
    { id: 'mat-a22-03-ableiten', icon: 'Spline', de: 'ableiten', pos: 'verb', ru: 'дифференцировать, брать производную', forms: 'er leitet ab · hat abgeleitet', note: 'Также: выводить (eine Formel ableiten).', example: { de: 'Wir leiten die Funktion zweimal ab.', ru: 'Мы дважды дифференцируем функцию.', cloze: 'leiten' } },
    { id: 'mat-a22-03-tangente', icon: 'Slash', de: 'Tangente', pos: 'noun', article: 'die', plural: 'Tangenten', ru: 'касательная', example: { de: 'Die Tangente berührt den Graphen in einem Punkt.', ru: 'Касательная касается графика в одной точке.', cloze: 'Tangente' } },
    { id: 'mat-a22-03-aenderungsrate', icon: 'Activity', de: 'Änderungsrate', pos: 'noun', article: 'die', plural: 'Änderungsraten', ru: 'скорость изменения', parts: ['Änderungs', 'rate'], note: 'mittlere Änderungsrate — средняя, momentane — мгновенная.', example: { de: 'Die Ableitung ist die momentane Änderungsrate.', ru: 'Производная — это мгновенная скорость изменения.', cloze: 'Änderungsrate' } },
    { id: 'mat-a22-03-momentan', icon: 'Timer', de: 'momentan', pos: 'adj', ru: 'мгновенный; в данный момент', note: 'В разговоре momentan = сейчас: Momentan habe ich keine Zeit.', example: { de: 'Die momentane Geschwindigkeit ist achtzig Stundenkilometer.', ru: 'Мгновенная скорость — восемьдесят километров в час.', cloze: 'momentane' } },
    { id: 'mat-a22-03-differenzierbar', icon: 'Spline', de: 'differenzierbar', pos: 'adj', ru: 'дифференцируемый', example: { de: 'Die Betragsfunktion ist bei null nicht differenzierbar.', ru: 'Функция модуля не дифференцируема в нуле.', cloze: 'differenzierbar' } },
    { id: 'mat-a22-03-stetig', icon: 'Waves', de: 'stetig', pos: 'adj', ru: 'непрерывный', note: 'die Stetigkeit — непрерывность. В жизни stetig — постоянно, неуклонно.', example: { de: 'Jede differenzierbare Funktion ist stetig.', ru: 'Каждая дифференцируемая функция непрерывна.', cloze: 'stetig' } },
    { id: 'mat-a22-03-kettenregel', icon: 'Link', de: 'Kettenregel', pos: 'noun', article: 'die', plural: 'Kettenregeln', ru: 'правило дифференцирования сложной функции', parts: ['Ketten', 'regel'], note: 'die Kette — цепь. Также Produktregel, Quotientenregel.', example: { de: 'Für sinus von zwei x brauchen wir die Kettenregel.', ru: 'Для синуса от двух x нам нужно цепное правило.', cloze: 'Kettenregel' } },
    { id: 'mat-a22-03-nullstelle', icon: 'CircleDot', de: 'Nullstelle', pos: 'noun', article: 'die', plural: 'Nullstellen', ru: 'нуль функции (корень)', parts: ['Null', 'stelle'], example: { de: 'Die Funktion hat zwei Nullstellen.', ru: 'У функции два нуля.', cloze: 'Nullstellen' } },
    { id: 'mat-a22-03-hochpunkt', icon: 'ChevronUp', de: 'Hochpunkt', pos: 'noun', article: 'der', plural: 'Hochpunkte', ru: 'точка максимума', parts: ['Hoch', 'punkt'], example: { de: 'Am Hochpunkt ist die Ableitung null.', ru: 'В точке максимума производная равна нулю.', cloze: 'Hochpunkt' } },
    { id: 'mat-a22-03-tiefpunkt', icon: 'ChevronDown', de: 'Tiefpunkt', pos: 'noun', article: 'der', plural: 'Tiefpunkte', ru: 'точка минимума', parts: ['Tief', 'punkt'], example: { de: 'Der Tiefpunkt liegt bei x gleich drei.', ru: 'Точка минимума находится при x, равном трём.', cloze: 'Tiefpunkt' } },
    { id: 'mat-a22-03-maximum', icon: 'ArrowUpToLine', de: 'Maximum', pos: 'noun', article: 'das', plural: 'Maxima', ru: 'максимум', note: 'Мн. ч. латинское: die Maxima.', example: { de: 'Das Maximum der Fläche ist 25 Quadratmeter.', ru: 'Максимум площади — 25 квадратных метров.', cloze: 'Maximum' } },
    { id: 'mat-a22-03-minimum', icon: 'ArrowDownToLine', de: 'Minimum', pos: 'noun', article: 'das', plural: 'Minima', ru: 'минимум', example: { de: 'Die Kosten erreichen ein Minimum.', ru: 'Затраты достигают минимума.', cloze: 'Minimum' } },
    { id: 'mat-a22-03-wendepunkt', icon: 'RotateCw', de: 'Wendepunkt', pos: 'noun', article: 'der', plural: 'Wendepunkte', ru: 'точка перегиба', parts: ['Wende', 'punkt'], note: 'wenden — поворачивать. Также перен.: поворотный момент.', example: { de: 'Am Wendepunkt ist die zweite Ableitung null.', ru: 'В точке перегиба вторая производная равна нулю.', cloze: 'Wendepunkt' } },
    { id: 'mat-a22-03-optimieren', icon: 'Target', de: 'optimieren', pos: 'verb', ru: 'оптимизировать', forms: 'er optimiert · hat optimiert', example: { de: 'Wir optimieren die Fläche des Gartens.', ru: 'Мы оптимизируем площадь сада.', cloze: 'optimieren' } },
    { id: 'mat-a22-03-extremwertaufgabe', icon: 'Mountain', de: 'Extremwertaufgabe', pos: 'noun', article: 'die', plural: 'Extremwertaufgaben', ru: 'задача на экстремум', parts: ['Extremwert', 'aufgabe'], example: { de: 'Auf der Matura gibt es oft eine Extremwertaufgabe.', ru: 'На матуре часто бывает задача на экстремум.', cloze: 'Extremwertaufgabe' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wie schnell ist das Auto?',
      de: `Professor Weber beginnt mit einem Beispiel aus der Physik. Ein Auto fährt in zwei Stunden 160 Kilometer. Die durchschnittliche Geschwindigkeit ist 80 Stundenkilometer. Aber wie schnell ist das Auto genau jetzt? Das ist die momentane Änderungsrate.

„Wir machen das Zeitintervall immer kleiner“, erklärt Weber. „Der Grenzwert ist die Ableitung.“ Geometrisch ist die Ableitung die Steigung der Tangente. Die Tangente berührt den Graphen in genau einem Punkt.

Dann leitet er einige Funktionen ab. Für sinus von zwei x braucht man die Kettenregel: Die Ableitung ist zwei mal cosinus von zwei x. Am Ende kommt ein wichtiger Satz: Jede differenzierbare Funktion ist stetig. Umgekehrt stimmt das nicht. Die Betragsfunktion ist stetig, aber bei null hat sie einen Knick und ist dort nicht differenzierbar.`,
      ru: `Профессор Вебер начинает с примера из физики. Машина проезжает 160 километров за два часа. Средняя скорость — 80 километров в час. Но как быстро едет машина именно сейчас? Это мгновенная скорость изменения.

«Мы делаем промежуток времени всё меньше, — объясняет Вебер. — Предел — это производная». Геометрически производная — это угловой коэффициент касательной. Касательная касается графика ровно в одной точке.

Потом он дифференцирует несколько функций. Для синуса от двух x нужно цепное правило: производная равна двум, умноженным на косинус от двух x. В конце — важная теорема: каждая дифференцируемая функция непрерывна. Обратное неверно. Функция модуля непрерывна, но в нуле у неё излом, и там она не дифференцируема.`,
      gloss: { überall: 'везде', professor: 'профессор', weber: 'Вебер (фамилия)', beginnt: 'начинает', physik: 'физика', auto: 'машина', fährt: 'едет', stunden: 'часа', durchschnittliche: 'средняя', aber: 'но', wie: 'как', schnell: 'быстро', jetzt: 'сейчас', machen: 'делаем', zeitintervall: 'промежуток времени', immer: 'всё (immer kleiner — всё меньше)', kleiner: 'меньше', erklärt: 'объясняет', geometrisch: 'геометрически', berührt: 'касается', einige: 'несколько', funktionen: 'функции', sinus: 'синус', von: 'от', x: 'икс', braucht: 'нужно (man braucht)', cosinus: 'косинус', kommt: 'идёт, следует', wichtiger: 'важный', jede: 'каждая', differenzierbare: 'дифференцируемая', umgekehrt: 'наоборот', stimmt: 'верно', betragsfunktion: 'функция модуля (|x|)', bei: 'в, при', knick: 'излом', dort: 'там', was: 'что', wo: 'где', welche: 'какая' },
      questions: [
        { q: 'Was ist die durchschnittliche Geschwindigkeit?', ru: 'Чему равна средняя скорость?', options: ['80 Stundenkilometer', '160 Stundenkilometer', '2 Stundenkilometer'], answer: '80 Stundenkilometer' },
        { q: 'Was ist die Ableitung geometrisch?', ru: 'Чем является производная геометрически?', options: ['Die Steigung der Tangente', 'Die Fläche unter dem Graphen', 'Eine Nullstelle'], answer: 'Die Steigung der Tangente' },
        { q: 'Wo ist die Betragsfunktion nicht differenzierbar?', ru: 'Где функция модуля не дифференцируема?', options: ['Bei null', 'Bei eins', 'Überall'], answer: 'Bei null' },
      ],
      translate: [
        { de: 'Die Ableitung ist die momentane Änderungsrate.', ru: 'Производная — это мгновенная скорость изменения.', wrongRu: ['Производная — это средняя скорость изменения.', 'Интеграл — это мгновенная скорость изменения.'] },
        { de: 'Jede differenzierbare Funktion ist stetig.', ru: 'Каждая дифференцируемая функция непрерывна.', wrongRu: ['Каждая непрерывная функция дифференцируема.', 'Ни одна дифференцируемая функция не непрерывна.'] },
        { de: 'Hier brauchen wir die Kettenregel.', ru: 'Здесь нам нужно цепное правило.', wrongRu: ['Здесь нам не нужно цепное правило.', 'Здесь нам нужно правило произведения.'] },
      ],
    },
    {
      lesson: 1, title: 'Der größte Garten',
      de: `In der Übung gibt es eine typische Extremwertaufgabe: Ein Bauer hat zwanzig Meter Zaun und möchte einen rechteckigen Garten mit möglichst großer Fläche bauen. Welche Seiten muss das Rechteck haben?

Sophie stellt die Funktion auf: A von x gleich x mal zehn minus x. Das ist eine Parabel nach unten. Die Nullstellen sind null und zehn. Um die Fläche zu optimieren, leitet sie ab und setzt die Ableitung gleich null. So findet sie die Stelle x gleich fünf.

Ist das ein Hochpunkt oder ein Tiefpunkt? Die zweite Ableitung ist negativ, also ist es ein Hochpunkt. Das Maximum der Fläche ist 25 Quadratmeter, und der Garten ist ein Quadrat. Ein Minimum gibt es hier nur am Rand. Einen Wendepunkt hat die Parabel nicht.`,
      ru: `На практике дают типичную задачу на экстремум: у фермера двадцать метров забора, и он хочет построить прямоугольный сад как можно большей площади. Какими должны быть стороны прямоугольника?

Софи составляет функцию: A от x равно x, умноженному на десять минус x. Это парабола ветвями вниз. Нули — ноль и десять. Чтобы оптимизировать площадь, она берёт производную и приравнивает её к нулю. Так она находит точку x равно пяти.

Это максимум или минимум? Вторая производная отрицательна, значит, это точка максимума. Максимальная площадь — 25 квадратных метров, и сад квадратный. Минимум здесь есть только на краю. Точки перегиба у параболы нет.`,
      gloss: { maximale: 'максимальная', übung: 'практическое занятие', typische: 'типичная', bauer: 'фермер, крестьянин', zwanzig: 'двадцать', zaun: 'забор', möchte: 'хочет', rechteckigen: 'прямоугольный', garten: 'сад', mit: 'с', möglichst: 'как можно', großer: 'большой', bauen: 'построить', welche: 'какие', seiten: 'стороны', muss: 'должен', haben: 'иметь', sophie: 'Софи (имя)', stellt: '(stellt auf) составляет', auf: '(aufstellen) составлять', a: 'A (площадь)', von: 'от', x: 'икс', zehn: 'десять', parabel: 'парабола', unten: 'вниз (nach unten)', um: 'чтобы (um … zu)', zu: '(um … zu) чтобы', setzt: 'ставит (gleich null setzen — приравнять к нулю)', so: 'так', findet: 'находит', stelle: 'точка, место', fünf: 'пять', oder: 'или', zweite: 'вторая', also: 'значит', quadratmeter: 'квадратные метры', nur: 'только', rand: 'край, граница', hat: 'имеет', was: 'что', wie: 'как', groß: 'большой (wie groß — какой величины)', wo: 'где' },
      questions: [
        { q: 'Wie viel Zaun hat der Bauer?', ru: 'Сколько забора у фермера?', options: ['Zwanzig Meter', 'Zehn Meter', 'Fünfundzwanzig Meter'], answer: 'Zwanzig Meter' },
        { q: 'Warum ist x gleich fünf ein Hochpunkt?', ru: 'Почему x = 5 — точка максимума?', options: ['Die zweite Ableitung ist negativ.', 'Die Funktion hat dort eine Nullstelle.', 'Die zweite Ableitung ist positiv.'], answer: 'Die zweite Ableitung ist negativ.' },
        { q: 'Wie groß ist die maximale Fläche?', ru: 'Чему равна максимальная площадь?', options: ['25 Quadratmeter', '20 Quadratmeter', '100 Quadratmeter'], answer: '25 Quadratmeter' },
      ],
      translate: [
        { de: 'Sie setzt die Ableitung gleich null.', ru: 'Она приравнивает производную к нулю.', wrongRu: ['Она приравнивает функцию к единице.', 'Она вычисляет вторую производную.'] },
        { de: 'Das ist ein Hochpunkt.', ru: 'Это точка максимума.', wrongRu: ['Это точка минимума.', 'Это точка перегиба.'] },
        { de: 'Die Parabel hat keinen Wendepunkt.', ru: 'У параболы нет точки перегиба.', wrongRu: ['У параболы две точки перегиба.', 'У параболы нет нулей.'] },
      ],
    },
  ],
};
