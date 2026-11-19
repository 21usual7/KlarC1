import type { Module } from '../types.ts';

// A2.2 mathe 04: antiderivative, definite integral, the fundamental theorem (lesson 0), lower and upper sums and numerical approximation (lesson 1).

export const module: Module = {
  id: 'mathe-a22-04-integral', sphere: 'mathe', level: 'A2.2',
  title: 'Integralrechnung', subtitle: 'Интеграл, первообразная, основная теорема, нижние и верхние суммы, численное приближение.',
  words: [
    { id: 'mat-a22-04-integral', icon: 'SquareFunction', de: 'Integral', pos: 'noun', article: 'das', plural: 'Integrale', ru: 'интеграл', note: 'Читают: Integral von null bis drei über x Quadrat dx.', example: { de: 'Das Integral von null bis drei ist neun.', ru: 'Интеграл от нуля до трёх равен девяти.', cloze: 'Integral' } },
    { id: 'mat-a22-04-integrieren', icon: 'Sigma', de: 'integrieren', pos: 'verb', ru: 'интегрировать', forms: 'er integriert · hat integriert', note: 'Также в жизни: интегрировать (людей в общество).', example: { de: 'Wir integrieren die Funktion von null bis drei.', ru: 'Мы интегрируем функцию от нуля до трёх.', cloze: 'integrieren' } },
    { id: 'mat-a22-04-stammfunktion', icon: 'GitFork', de: 'Stammfunktion', pos: 'noun', article: 'die', plural: 'Stammfunktionen', ru: 'первообразная', parts: ['Stamm', 'funktion'], note: 'der Stamm — ствол, основа.', example: { de: 'Eine Stammfunktion von x Quadrat ist x hoch drei durch drei.', ru: 'Первообразная от x в квадрате — x в кубе, делённое на три.', cloze: 'Stammfunktion' } },
    { id: 'mat-a22-04-konstante', icon: 'Pin', de: 'Konstante', pos: 'noun', article: 'die', plural: 'Konstanten', ru: 'константа, постоянная', note: 'die Integrationskonstante C.', example: { de: 'Vergiss die Konstante C nicht!', ru: 'Не забудь константу C!', cloze: 'Konstante' } },
    { id: 'mat-a22-04-hauptsatz', icon: 'Landmark', de: 'Hauptsatz', pos: 'noun', article: 'der', plural: 'Hauptsätze', ru: 'основная теорема', parts: ['Haupt', 'satz'], note: 'der Hauptsatz der Differential- und Integralrechnung — формула Ньютона — Лейбница.', example: { de: 'Der Hauptsatz verbindet Ableitung und Integral.', ru: 'Основная теорема связывает производную и интеграл.', cloze: 'Hauptsatz' } },
    { id: 'mat-a22-04-bestimmt', icon: 'Brackets', de: 'bestimmt', pos: 'adj', ru: 'определённый; наверняка', note: 'das bestimmte Integral — определённый интеграл; das unbestimmte — неопределённый.', example: { de: 'Ein bestimmtes Integral hat Grenzen.', ru: 'У определённого интеграла есть пределы.', cloze: 'bestimmtes' } },
    { id: 'mat-a22-04-grenze', icon: 'Fence', de: 'Grenze', pos: 'noun', article: 'die', plural: 'Grenzen', ru: 'граница; предел (интегрирования)', note: 'die untere / obere Grenze — нижний / верхний предел.', example: { de: 'Die untere Grenze ist null.', ru: 'Нижний предел равен нулю.', cloze: 'Grenze' } },
    { id: 'mat-a22-04-flaecheninhalt', icon: 'SquareDashed', de: 'Flächeninhalt', pos: 'noun', article: 'der', plural: 'Flächeninhalte', ru: 'площадь (величина)', parts: ['Flächen', 'inhalt'], example: { de: 'Das Integral gibt den Flächeninhalt unter dem Graphen an.', ru: 'Интеграл даёт площадь под графиком.', cloze: 'Flächeninhalt' } },
    { id: 'mat-a22-04-intervall', icon: 'Brackets', de: 'Intervall', pos: 'noun', article: 'das', plural: 'Intervalle', ru: 'промежуток, интервал', example: { de: 'Wir betrachten das Intervall von null bis drei.', ru: 'Мы рассматриваем промежуток от нуля до трёх.', cloze: 'Intervall' } },
    { id: 'mat-a22-04-zerlegung', icon: 'Columns4', de: 'Zerlegung', pos: 'noun', article: 'die', plural: 'Zerlegungen', ru: 'разбиение', note: 'zerlegen — разбивать на части.', example: { de: 'Für die Zerlegung teilen wir das Intervall in n Teile.', ru: 'Для разбиения мы делим промежуток на n частей.', cloze: 'Zerlegung' } },
    { id: 'mat-a22-04-untersumme', icon: 'ChartColumnIncreasing', de: 'Untersumme', pos: 'noun', article: 'die', plural: 'Untersummen', ru: 'нижняя сумма', parts: ['Unter', 'summe'], example: { de: 'Die Untersumme ist immer zu klein.', ru: 'Нижняя сумма всегда слишком мала.', cloze: 'Untersumme' } },
    { id: 'mat-a22-04-obersumme', icon: 'ChartColumnBig', de: 'Obersumme', pos: 'noun', article: 'die', plural: 'Obersummen', ru: 'верхняя сумма', parts: ['Ober', 'summe'], example: { de: 'Die Obersumme ist immer zu groß.', ru: 'Верхняя сумма всегда слишком велика.', cloze: 'Obersumme' } },
    { id: 'mat-a22-04-verfeinern', icon: 'ZoomIn', de: 'verfeinern', pos: 'verb', ru: 'измельчать (разбиение), уточнять', forms: 'er verfeinert · hat verfeinert', note: 'fein — тонкий, мелкий.', example: { de: 'Wenn wir die Zerlegung verfeinern, wird der Fehler kleiner.', ru: 'Если мы измельчаем разбиение, ошибка уменьшается.', cloze: 'verfeinern' } },
    { id: 'mat-a22-04-naeherung', icon: 'Waves', de: 'Näherung', pos: 'noun', article: 'die', plural: 'Näherungen', ru: 'приближение', note: 'näherungsweise — приближённо.', example: { de: 'Der Computer berechnet nur eine Näherung.', ru: 'Компьютер вычисляет лишь приближение.', cloze: 'Näherung' } },
    { id: 'mat-a22-04-numerisch', icon: 'Binary', de: 'numerisch', pos: 'adj', ru: 'численный', note: 'die Numerik — численные методы (курс в TU Wien).', example: { de: 'Viele Integrale kann man nur numerisch berechnen.', ru: 'Многие интегралы можно вычислить только численно.', cloze: 'numerisch' } },
    { id: 'mat-a22-04-genauigkeit', icon: 'Crosshair', de: 'Genauigkeit', pos: 'noun', article: 'die', ru: 'точность', example: { de: 'Die Genauigkeit hängt von n ab.', ru: 'Точность зависит от n.', cloze: 'Genauigkeit' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die Fläche unter der Parabel',
      de: `Heute geht es um die Frage: Wie groß ist die Fläche unter der Parabel x Quadrat zwischen null und drei? Professor Weber sagt: „Diesen Flächeninhalt gibt das bestimmte Integral an. Die untere Grenze ist null, die obere Grenze ist drei.“

Um das Integral zu berechnen, brauchen wir eine Stammfunktion. Das ist eine Funktion, deren Ableitung x Quadrat ist, zum Beispiel x hoch drei durch drei. Jede andere Stammfunktion unterscheidet sich nur durch eine Konstante C.

Dann kommt der Hauptsatz: Man setzt die obere und die untere Grenze in die Stammfunktion ein und bildet die Differenz. Neun minus null ist neun. Der Professor lächelt: „Ableiten und integrieren sind also zwei Seiten derselben Medaille.“`,
      ru: `Сегодня речь о вопросе: какова площадь под параболой x в квадрате между нулём и тремя? Профессор Вебер говорит: «Эту площадь даёт определённый интеграл. Нижний предел — ноль, верхний — три».

Чтобы вычислить интеграл, нам нужна первообразная. Это функция, производная которой равна x в квадрате, например x в кубе, делённое на три. Любая другая первообразная отличается только константой C.

Потом идёт основная теорема: в первообразную подставляют верхний и нижний пределы и берут разность. Девять минус ноль — девять. Профессор улыбается: «Значит, дифференцирование и интегрирование — две стороны одной медали».`,
      gloss: { bestimmte: 'определённый', unterscheiden: 'отличаются', siebenundzwanzig: 'двадцать семь', heute: 'сегодня', geht: '(es geht um) речь идёт о', um: 'о; (um … zu) чтобы', frage: 'вопрос', wie: 'как', groß: 'большой (wie groß — какова)', fläche: 'площадь', unter: 'под', parabel: 'парабола', x: 'икс', quadrat: 'квадрат (x Quadrat — x в квадрате)', zwischen: 'между', professor: 'профессор', weber: 'Вебер (фамилия)', diesen: 'эту', gibt: '(gibt an) указывает', an: '(angeben) указывать', untere: 'нижний', obere: 'верхний', zu: '(um … zu) чтобы', berechnen: 'вычислить', brauchen: 'нужна', deren: 'чья, которой', zum: '(zum Beispiel) например', hoch: 'в степени (x hoch drei — x в кубе)', durch: 'на (durch drei — делённое на три)', jede: 'каждая', andere: 'другая', unterscheidet: 'отличается', nur: 'только', c: 'C (константа)', kommt: 'идёт, следует', setzt: '(setzt ein) подставляет', ein: '(einsetzen) подставлять', bildet: 'образует, берёт', differenz: 'разность', neun: 'девять', lächelt: 'улыбается', ableiten: 'дифференцировать', also: 'значит', seiten: 'стороны', derselben: 'одной и той же', medaille: 'медаль', was: 'что', welche: 'какой', wodurch: 'чем' },
      questions: [
        { q: 'Was ist die obere Grenze?', ru: 'Чему равен верхний предел?', options: ['Drei', 'Null', 'Neun'], answer: 'Drei' },
        { q: 'Wodurch unterscheiden sich zwei Stammfunktionen?', ru: 'Чем отличаются две первообразные?', options: ['Durch eine Konstante', 'Durch die Grenzen', 'Durch die Ableitung'], answer: 'Durch eine Konstante' },
        { q: 'Wie groß ist die Fläche?', ru: 'Чему равна площадь?', options: ['Neun', 'Drei', 'Siebenundzwanzig'], answer: 'Neun' },
      ],
      translate: [
        { de: 'Die untere Grenze ist null.', ru: 'Нижний предел равен нулю.', wrongRu: ['Верхний предел равен нулю.', 'Нижний предел равен трём.'] },
        { de: 'Wir brauchen eine Stammfunktion.', ru: 'Нам нужна первообразная.', wrongRu: ['Нам нужна производная.', 'Нам не нужна первообразная.'] },
        { de: 'Der Hauptsatz verbindet Ableitung und Integral.', ru: 'Основная теорема связывает производную и интеграл.', wrongRu: ['Основная теорема разделяет производную и интеграл.', 'Основная теорема связывает предел и последовательность.'] },
      ],
    },
    {
      lesson: 1, title: 'Rechtecke unter dem Graphen',
      de: `In der Übung zeigt die Tutorin Marie, woher das Integral kommt. Sie teilt das Intervall von null bis drei in drei gleich breite Teile. Das ist eine Zerlegung. Über jedem Teil zeichnet sie ein Rechteck.

Wenn die Rechtecke unter dem Graphen bleiben, bekommt man die Untersumme: Sie ist fünf und damit zu klein. Wenn sie über den Graphen hinausgehen, bekommt man die Obersumme: vierzehn, also zu groß. Die richtige Fläche liegt dazwischen.

„Und jetzt verfeinern wir die Zerlegung“, sagt Marie. Mit hundert Teilen sind beide Summen schon sehr nah bei neun. Im Grenzwert sind sie gleich. So arbeiten auch Computer: Sie berechnen Integrale numerisch. Das Ergebnis ist nur eine Näherung, aber die Genauigkeit ist für die Praxis meistens genug.`,
      ru: `На практике тьютор Мари показывает, откуда берётся интеграл. Она делит промежуток от нуля до трёх на три равные по ширине части. Это разбиение. Над каждой частью она рисует прямоугольник.

Если прямоугольники остаются под графиком, получается нижняя сумма: она равна пяти и потому слишком мала. Если они выходят за график, получается верхняя сумма: четырнадцать, то есть слишком много. Правильная площадь лежит между ними.

«А теперь измельчим разбиение», — говорит Мари. При ста частях обе суммы уже очень близки к девяти. В пределе они равны. Так работают и компьютеры: они вычисляют интегралы численно. Результат — лишь приближение, но для практики точности обычно достаточно.`,
      gloss: { genauen: 'точное', übung: 'практическое занятие', zeigt: 'показывает', tutorin: 'тьютор (женщина)', marie: 'Мари (имя)', woher: 'откуда', kommt: 'берётся, приходит', teilt: 'делит', von: 'от', bis: 'до', breite: 'широкие (gleich breite — равные по ширине)', teile: 'части', über: 'над; за', jedem: 'каждой', teil: 'частью, часть', zeichnet: 'рисует', rechteck: 'прямоугольник', rechtecke: 'прямоугольники', wenn: 'если', unter: 'под', graphen: 'графика, график', bleiben: 'остаются', bekommt: 'получает (man bekommt — получается)', damit: 'тем самым', zu: 'слишком', klein: 'маленький', hinausgehen: 'выходят за', vierzehn: 'четырнадцать', also: 'то есть', groß: 'большой', richtige: 'правильная', fläche: 'площадь', liegt: 'лежит', dazwischen: 'между ними', jetzt: 'теперь', mit: 'с, при', hundert: 'сто', beide: 'обе', summen: 'суммы', schon: 'уже', nah: 'близко', bei: 'к, около', neun: 'девять', so: 'так', arbeiten: 'работают', auch: 'тоже', computer: 'компьютеры', berechnen: 'вычисляют', integrale: 'интегралы', nur: 'только', aber: 'но', praxis: 'практика', meistens: 'обычно', genug: 'достаточно', was: 'что', wie: 'как', welche: 'какая', wo: 'где' },
      questions: [
        { q: 'In wie viele Teile teilt Marie das Intervall zuerst?', ru: 'На сколько частей Мари сначала делит промежуток?', options: ['In drei', 'In hundert', 'In neun'], answer: 'In drei' },
        { q: 'Wie groß ist die Untersumme?', ru: 'Чему равна нижняя сумма?', options: ['Fünf', 'Vierzehn', 'Neun'], answer: 'Fünf' },
        { q: 'Was berechnet ein Computer?', ru: 'Что вычисляет компьютер?', options: ['Eine Näherung', 'Den genauen Wert immer', 'Nur die Obersumme'], answer: 'Eine Näherung' },
      ],
      translate: [
        { de: 'Die Untersumme ist zu klein.', ru: 'Нижняя сумма слишком мала.', wrongRu: ['Нижняя сумма слишком велика.', 'Верхняя сумма слишком мала.'] },
        { de: 'Jetzt verfeinern wir die Zerlegung.', ru: 'Теперь мы измельчаем разбиение.', wrongRu: ['Теперь мы укрупняем разбиение.', 'Теперь мы удаляем разбиение.'] },
        { de: 'Das Ergebnis ist nur eine Näherung.', ru: 'Результат — лишь приближение.', wrongRu: ['Результат абсолютно точный.', 'Результат — это ошибка.'] },
      ],
    },
  ],
};
