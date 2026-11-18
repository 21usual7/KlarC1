import type { Module } from './types.ts';

export const matheA12: Module = {
  id: 'mathe-a12-rechnen', sphere: 'mathe', level: 'A1.2',
  title: 'Zahlen und Rechnen', subtitle: 'Числа, четыре действия и результат: математика вслух.',
  words: [
    { id: 'mat-a12-zahl', de: 'Zahl', pos: 'noun', article: 'die', plural: 'Zahlen', ru: 'число', example: { de: 'Welche Zahl fehlt?', ru: 'Какого числа не хватает?', cloze: 'Zahl' } },
    { id: 'mat-a12-rechnen', de: 'rechnen', pos: 'verb', ru: 'считать, вычислять', forms: 'er rechnet · hat gerechnet', collocation: { de: 'im Kopf rechnen', ru: 'считать в уме' }, example: { de: 'Ich rechne gern im Kopf.', ru: 'Я люблю считать в уме.', cloze: 'rechne' } },
    { id: 'mat-a12-plus', de: 'plus', pos: 'adv', ru: 'плюс', example: { de: 'Drei plus vier ist sieben.', ru: 'Три плюс четыре — семь.', cloze: 'plus' } },
    { id: 'mat-a12-minus', de: 'minus', pos: 'adv', ru: 'минус', example: { de: 'Zehn minus zwei ist acht.', ru: 'Десять минус два — восемь.', cloze: 'minus' } },
    { id: 'mat-a12-mal', de: 'mal', pos: 'adv', ru: 'умножить на («раз»)', example: { de: 'Drei mal fünf ist fünfzehn.', ru: 'Три умножить на пять — пятнадцать.', cloze: 'mal' } },
    { id: 'mat-a12-geteilt', de: 'geteilt durch', pos: 'phrase', ru: 'разделить на', example: { de: 'Zwölf geteilt durch vier ist drei.', ru: 'Двенадцать разделить на четыре — три.', cloze: 'geteilt durch' } },
    { id: 'mat-a12-ergebnis', de: 'Ergebnis', pos: 'noun', article: 'das', plural: 'Ergebnisse', ru: 'результат', collocation: { de: 'das richtige Ergebnis', ru: 'правильный результат' }, example: { de: 'Das Ergebnis ist zweiundvierzig.', ru: 'Результат — сорок два.', cloze: 'Ergebnis' } },
    { id: 'mat-a12-richtig', de: 'richtig', pos: 'adj', ru: 'правильный, верный', example: { de: 'Deine Antwort ist richtig.', ru: 'Твой ответ правильный.', cloze: 'richtig' } },
    { id: 'mat-a12-falsch', de: 'falsch', pos: 'adj', ru: 'неправильный, неверный', example: { de: 'Das Ergebnis ist leider falsch.', ru: 'Результат, к сожалению, неверный.', cloze: 'falsch' } },
    { id: 'mat-a12-gerade', de: 'gerade', pos: 'adj', ru: 'чётный', note: 'Также «прямой» и «как раз сейчас».', collocation: { de: 'eine gerade Zahl', ru: 'чётное число' }, example: { de: 'Vier ist eine gerade Zahl.', ru: 'Четыре — чётное число.', cloze: 'gerade' } },
    { id: 'mat-a12-ungerade', de: 'ungerade', pos: 'adj', ru: 'нечётный', collocation: { de: 'eine ungerade Zahl', ru: 'нечётное число' }, example: { de: 'Neun ist eine ungerade Zahl.', ru: 'Девять — нечётное число.', cloze: 'ungerade' } },
    { id: 'mat-a12-aufgabe', de: 'Aufgabe', pos: 'noun', article: 'die', plural: 'Aufgaben', ru: 'задача, задание', collocation: { de: 'eine Aufgabe lösen', ru: 'решить задачу', accept: ['die Aufgabe lösen'] }, example: { de: 'Die Aufgabe ist schwer.', ru: 'Задача трудная.', cloze: 'Aufgabe' } },
    { id: 'mat-a12-loesen', de: 'lösen', pos: 'verb', ru: 'решать', forms: 'er löst · hat gelöst', example: { de: 'Ich löse die Aufgabe allein.', ru: 'Я решаю задачу сам.', cloze: 'löse' } },
    { id: 'mat-a12-summe', de: 'Summe', pos: 'noun', article: 'die', plural: 'Summen', ru: 'сумма', example: { de: 'Die Summe von zwei und drei ist fünf.', ru: 'Сумма двух и трёх — пять.', cloze: 'Summe' } },
    { id: 'mat-a12-haelfte', de: 'Hälfte', pos: 'noun', article: 'die', plural: 'Hälften', ru: 'половина', example: { de: 'Die Hälfte von zehn ist fünf.', ru: 'Половина от десяти — пять.', cloze: 'Hälfte' } },
    { id: 'mat-a12-gleich', de: 'gleich', pos: 'adj', ru: 'равно; одинаковый', example: { de: 'Zwei plus zwei ist gleich vier.', ru: 'Два плюс два равно четырём.', cloze: 'gleich' } },
  ],
};

export const matheA2: Module = {
  id: 'mathe-a2-uni', sphere: 'mathe', level: 'A2',
  title: 'Mathe an der Uni', subtitle: 'Уравнение, доказательство, теорема: первые слова с лекции по математике.',
  words: [
    { id: 'mat-a2-gleichung', de: 'Gleichung', pos: 'noun', article: 'die', plural: 'Gleichungen', ru: 'уравнение', collocation: { de: 'eine Gleichung lösen', ru: 'решить уравнение', accept: ['die Gleichung lösen'] }, example: { de: 'Wir lösen eine Gleichung mit einer Unbekannten.', ru: 'Мы решаем уравнение с одной неизвестной.', cloze: 'Gleichung' } },
    { id: 'mat-a2-variable', de: 'Variable', pos: 'noun', article: 'die', plural: 'Variablen', ru: 'переменная', example: { de: 'In der Gleichung ist x eine Variable.', ru: 'В уравнении x — переменная.', cloze: 'Variable' } },
    { id: 'mat-a2-funktion', de: 'Funktion', pos: 'noun', article: 'die', plural: 'Funktionen', ru: 'функция', example: { de: 'Die Funktion f(x) = 2x ist linear.', ru: 'Функция f(x) = 2x линейная.', cloze: 'Funktion' } },
    { id: 'mat-a2-menge', de: 'Menge', pos: 'noun', article: 'die', plural: 'Mengen', ru: 'множество', note: 'В быту: «количество» (eine Menge Arbeit).', example: { de: 'Die Menge der natürlichen Zahlen ist unendlich.', ru: 'Множество натуральных чисел бесконечно.', cloze: 'Menge' } },
    { id: 'mat-a2-natuerlich', de: 'natürlich', pos: 'adj', ru: 'натуральный (о числе)', note: 'В быту: «конечно».', collocation: { de: 'eine natürliche Zahl', ru: 'натуральное число' }, example: { de: 'Fünf ist eine natürliche Zahl.', ru: 'Пять — натуральное число.', cloze: 'natürliche' } },
    { id: 'mat-a2-beweis', de: 'Beweis', pos: 'noun', article: 'der', plural: 'Beweise', ru: 'доказательство', collocation: { de: 'einen Beweis führen', ru: 'провести доказательство' }, example: { de: 'Der Beweis ist nur eine halbe Seite lang.', ru: 'Доказательство длиной всего полстраницы.', cloze: 'Beweis' } },
    { id: 'mat-a2-beweisen', de: 'beweisen', pos: 'verb', ru: 'доказывать', forms: 'er beweist · hat bewiesen', example: { de: 'Wir beweisen den Satz in der Vorlesung.', ru: 'Мы доказываем теорему на лекции.', cloze: 'beweisen' } },
    { id: 'mat-a2-satz', de: 'Satz', pos: 'noun', article: 'der', plural: 'Sätze', ru: 'теорема', note: 'В грамматике: «предложение».', example: { de: 'Der Satz des Pythagoras ist sehr bekannt.', ru: 'Теорема Пифагора очень известна.', cloze: 'Satz' } },
    { id: 'mat-a2-definition', de: 'Definition', pos: 'noun', article: 'die', plural: 'Definitionen', ru: 'определение', example: { de: 'Lies zuerst die Definition!', ru: 'Сначала прочитай определение!', cloze: 'Definition' } },
    { id: 'mat-a2-vorlesung', de: 'Vorlesung', pos: 'noun', article: 'die', plural: 'Vorlesungen', ru: 'лекция', note: 'В TU Wien сокращённо VO.', collocation: { de: 'in die Vorlesung gehen', ru: 'ходить на лекцию' }, example: { de: 'Die Vorlesung beginnt um neun Uhr.', ru: 'Лекция начинается в девять.', cloze: 'Vorlesung' } },
    { id: 'mat-a2-uebung', de: 'Übung', pos: 'noun', article: 'die', plural: 'Übungen', ru: 'практическое занятие; упражнение', note: 'В TU Wien сокращённо UE.', example: { de: 'In der Übung rechnen wir Beispiele.', ru: 'На практике мы решаем задачи.', cloze: 'Übung' } },
    { id: 'mat-a2-beispiel', de: 'Beispiel', pos: 'noun', article: 'das', plural: 'Beispiele', ru: 'пример; (в Австрии) задача', note: 'В австрийских вузах «ein Beispiel rechnen» = решить задачу.', example: { de: 'Für morgen müssen wir fünf Beispiele rechnen.', ru: 'К завтрашнему дню нам нужно решить пять задач.', cloze: 'Beispiele' } },
    { id: 'mat-a2-bruch', de: 'Bruch', pos: 'noun', article: 'der', plural: 'Brüche', ru: 'дробь', collocation: { de: 'einen Bruch kürzen', ru: 'сократить дробь' }, example: { de: 'Ein Drittel ist ein Bruch.', ru: 'Одна треть — это дробь.', cloze: 'Bruch' } },
    { id: 'mat-a2-wurzel', de: 'Wurzel', pos: 'noun', article: 'die', plural: 'Wurzeln', ru: 'корень', collocation: { de: 'die Wurzel ziehen', ru: 'извлечь корень' }, example: { de: 'Die Wurzel aus neun ist drei.', ru: 'Корень из девяти — три.', cloze: 'Wurzel' } },
    { id: 'mat-a2-esgilt', de: 'es gilt', pos: 'phrase', ru: 'выполняется, справедливо', note: 'Типичная фраза на лекции: «Für alle x gilt …».', example: { de: 'Für alle x gilt: x + 0 = x.', ru: 'Для всех x выполняется: x + 0 = x.', cloze: 'gilt' } },
    { id: 'mat-a2-darausfolgt', de: 'daraus folgt', pos: 'phrase', ru: 'отсюда следует', example: { de: 'x ist gleich zwei, daraus folgt: x² = 4.', ru: 'x равно двум, отсюда следует: x² = 4.', cloze: 'daraus folgt' } },
  ],
};
