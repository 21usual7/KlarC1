import type { Module } from './types.ts';

// A2.2 mathe: solving equations (lesson 0) and plane geometry (lesson 1).

export const matheA22: Module = {
  id: 'mathe-a22-geometrie', sphere: 'mathe', level: 'A2.2',
  title: 'Gleichungen und Geometrie', subtitle: 'Неизвестное, подстановка, площадь, периметр: как говорить о решении задач.',
  words: [
    { id: 'mat-a22-unbekannte', icon: 'BadgeHelp', de: 'Unbekannte', pos: 'noun', article: 'die', plural: 'Unbekannten', ru: 'неизвестное (в уравнении)', note: 'Субстантивированное прилагательное: die Unbekannte, eine Unbekannte, mit zwei Unbekannten.', example: { de: 'Die Gleichung hat nur eine Unbekannte.', ru: 'В уравнении только одно неизвестное.', cloze: 'Unbekannte' } },
    { id: 'mat-a22-loesung', icon: 'CircleCheckBig', de: 'Lösung', pos: 'noun', article: 'die', plural: 'Lösungen', ru: 'решение; ответ', note: 'Die Lösung einer Gleichung — решение (корень) уравнения.', example: { de: 'Diese Gleichung hat keine Lösung.', ru: 'У этого уравнения нет решения.', cloze: 'Lösung' } },
    { id: 'mat-a22-einsetzen', icon: 'ArrowDownToLine', de: 'einsetzen', pos: 'verb', ru: 'подставлять', forms: 'er setzt ein · hat eingesetzt', note: 'einsetzen in + Akk: in die Gleichung einsetzen. Отделяемая приставка.', collocation: { de: 'in die Gleichung einsetzen', ru: 'подставить в уравнение' }, example: { de: 'Setz die Lösung in die Gleichung ein!', ru: 'Подставь решение в уравнение!', cloze: 'Setz' } },
    { id: 'mat-a22-umformen', icon: 'Replace', de: 'umformen', pos: 'verb', ru: 'преобразовывать', forms: 'er formt um · hat umgeformt', note: 'Отделяемая приставка: wir formen die Gleichung um.', collocation: { de: 'die Gleichung umformen', ru: 'преобразовать уравнение', accept: ['eine Gleichung umformen'] }, example: { de: 'Wir formen die Gleichung Schritt für Schritt um.', ru: 'Мы шаг за шагом преобразуем уравнение.', cloze: 'formen' } },
    { id: 'mat-a22-seite', icon: 'Columns2', imageQuery: 'book page', de: 'Seite', pos: 'noun', article: 'die', plural: 'Seiten', ru: 'сторона; часть (уравнения); страница', collocation: { de: 'auf der linken Seite', ru: 'в левой части, слева', accept: ['auf der rechten Seite'] }, example: { de: 'Auf der linken Seite steht ein Bruch.', ru: 'В левой части стоит дробь.', cloze: 'Seite' } },
    { id: 'mat-a22-term', icon: 'Parentheses', de: 'Term', pos: 'noun', article: 'der', plural: 'Terme', ru: 'выражение (терм)', example: { de: 'Der Term in der Klammer ist negativ.', ru: 'Выражение в скобках отрицательное.', cloze: 'Term' } },
    { id: 'mat-a22-vereinfachen', icon: 'Minimize2', de: 'vereinfachen', pos: 'verb', ru: 'упрощать', forms: 'er vereinfacht · hat vereinfacht', note: 'Корень einfach (простой); приставка ver- неотделяемая.', example: { de: 'Zuerst vereinfachen wir den Term.', ru: 'Сначала мы упрощаем выражение.', cloze: 'vereinfachen' } },
    { id: 'mat-a22-probe', icon: 'CheckCheck', de: 'Probe', pos: 'noun', article: 'die', plural: 'Proben', ru: 'проверка (подстановкой)', note: 'Также «проба, образец; репетиция».', collocation: { de: 'die Probe machen', ru: 'сделать проверку', accept: ['eine Probe machen'] }, example: { de: 'Mach am Ende immer die Probe!', ru: 'В конце всегда делай проверку!', cloze: 'Probe' } },

    { id: 'mat-a22-dreieck', icon: 'Triangle', imageQuery: 'set square triangle ruler', de: 'Dreieck', pos: 'noun', article: 'das', plural: 'Dreiecke', ru: 'треугольник', parts: ['Drei', 'eck'], note: 'Das Eck (австр.), die Ecke — угол (вершина).', example: { de: 'Ein Dreieck hat drei Seiten.', ru: 'У треугольника три стороны.', cloze: 'Dreieck' } },
    { id: 'mat-a22-winkel', icon: 'TriangleRight', imageQuery: 'protractor', de: 'Winkel', pos: 'noun', article: 'der', plural: 'Winkel', ru: 'угол (геометрический)', collocation: { de: 'ein rechter Winkel', ru: 'прямой угол', accept: ['der rechte Winkel'] }, example: { de: 'Wie groß ist dieser Winkel?', ru: 'Какова величина этого угла?', cloze: 'Winkel' } },
    { id: 'mat-a22-flaeche', icon: 'Square', imageQuery: 'field area', de: 'Fläche', pos: 'noun', article: 'die', plural: 'Flächen', ru: 'площадь; поверхность', note: 'Точный термин для площади: der Flächeninhalt.', example: { de: 'Die Fläche des Zimmers ist ziemlich klein.', ru: 'Площадь комнаты довольно маленькая.', cloze: 'Fläche' } },
    { id: 'mat-a22-umfang', icon: 'SquareDashed', imageQuery: 'fence around field', de: 'Umfang', pos: 'noun', article: 'der', plural: 'Umfänge', ru: 'периметр; длина окружности', example: { de: 'Der Umfang ist die Summe aller Seiten.', ru: 'Периметр — это сумма всех сторон.', cloze: 'Umfang' } },
    { id: 'mat-a22-kreis', icon: 'Circle', imageQuery: 'drawing circle with compass', de: 'Kreis', pos: 'noun', article: 'der', plural: 'Kreise', ru: 'круг; окружность', example: { de: 'Zeichne einen Kreis um den Punkt!', ru: 'Нарисуй окружность вокруг точки!', cloze: 'Kreis' } },
    { id: 'mat-a22-rechteck', icon: 'RectangleHorizontal', imageQuery: 'rectangle', de: 'Rechteck', pos: 'noun', article: 'das', plural: 'Rechtecke', ru: 'прямоугольник', parts: ['Recht', 'eck'], example: { de: 'Das Rechteck ist doppelt so lang wie breit.', ru: 'Длина прямоугольника вдвое больше ширины.', cloze: 'Rechteck' } },
    { id: 'mat-a22-berechnen', icon: 'PencilRuler', imageQuery: 'calculator', de: 'berechnen', pos: 'verb', ru: 'вычислять, рассчитывать', forms: 'er berechnet · hat berechnet', note: 'rechnen — считать вообще; berechnen + Akk — вычислить что-то конкретное.', collocation: { de: 'die Fläche berechnen', ru: 'вычислить площадь', accept: ['eine Fläche berechnen'] }, example: { de: 'Berechne den Umfang des Kreises!', ru: 'Вычисли длину окружности!', cloze: 'Berechne' } },
    { id: 'mat-a22-laenge', icon: 'Ruler', imageQuery: 'tape measure', de: 'Länge', pos: 'noun', article: 'die', plural: 'Längen', ru: 'длина', note: 'Пара: die Länge und die Breite (ширина).', example: { de: 'Miss die Länge der Seite!', ru: 'Измерь длину стороны!', cloze: 'Länge' } },
  ],
  readings: [
    {
      lesson: 0, title: 'An der Tafel',
      de: `Am Mittwoch hatte Sara ihre erste Übung in Mathematik an der TU Wien. Die Tutorin hat eine Gleichung an die Tafel geschrieben und gefragt, wer sie lösen kann. Sara wollte zuerst nicht, aber dann ist sie nach vorne gegangen.

Auf der linken Seite stand ein langer Term. Sara hat ihn zuerst vereinfacht. Dann hat sie die Gleichung umgeformt, bis die Unbekannte allein auf einer Seite stand. So hat sie die Lösung gefunden.

Die Tutorin war zufrieden, aber sie hat gefragt: „Bist du sicher, dass die Lösung stimmt?“ Sara hat die Probe gemacht. Sie hat die Lösung in die Gleichung eingesetzt, und beide Seiten waren gleich. „Die Probe dauert nur eine Minute, aber sie ist sehr wichtig“, hat die Tutorin gesagt.`,
      ru: `В среду у Сары было первое практическое занятие по математике в Венском техническом университете. Тьюторша написала на доске уравнение и спросила, кто может его решить. Сначала Сара не хотела, но потом вышла к доске.

В левой части стояло длинное выражение. Сначала Сара его упростила. Потом она преобразовывала уравнение, пока неизвестное не осталось одно в одной части. Так она нашла решение.

Тьюторша была довольна, но спросила: «Ты уверена, что решение правильное?» Сара сделала проверку. Она подставила решение в уравнение, и обе части оказались равны. «Проверка занимает всего минуту, но она очень важна», — сказала тьюторша.`,
      gloss: {
        sara: 'Сара (имя)', mittwoch: 'среда', hatte: 'было (у неё), имела', mathematik: 'математика', tu: 'TU — технический университет', wien: 'Вена',
        tutorin: 'тьюторша, ассистентка на практике', tafel: 'доска', geschrieben: 'написала', gefragt: 'спросила', wollte: 'хотела',
        vorne: 'впереди (nach vorne — вперёд, к доске)', nach: 'к, в (nach vorne — вперёд)', gegangen: 'пошла, вышла', linken: 'левой', stand: 'стоял(о)', langer: 'длинный',
        bis: 'пока не', allein: 'одна, отдельно', gefunden: 'нашла', zufrieden: 'довольна', sicher: 'уверен(а)', stimmt: 'верно, правильно',
        gemacht: 'сделала', waren: 'были', dauert: 'длится, занимает', bruch: 'дробь', noch: 'ещё', einmal: 'раз (noch einmal — ещё раз)',
      },
      questions: [
        { q: 'Was stand auf der linken Seite?', ru: 'Что стояло в левой части?', options: ['Ein langer Term', 'Die Lösung', 'Ein Bruch'], answer: 'Ein langer Term' },
        { q: 'Was hat Sara zuerst gemacht?', ru: 'Что Сара сделала сначала?', options: ['Sie hat den Term vereinfacht.', 'Sie hat die Probe gemacht.', 'Sie hat die Lösung eingesetzt.'], answer: 'Sie hat den Term vereinfacht.' },
        { q: 'Wie hat Sara die Probe gemacht?', ru: 'Как Сара сделала проверку?', options: ['Sie hat die Lösung in die Gleichung eingesetzt.', 'Sie hat die Tutorin gefragt.', 'Sie hat die Gleichung noch einmal geschrieben.'], answer: 'Sie hat die Lösung in die Gleichung eingesetzt.' },
      ],
      translate: [
        { de: 'Sara hat den Term vereinfacht.', ru: 'Сара упростила выражение.', wrongRu: ['Сара преобразовала уравнение.', 'Сара не упростила выражение.'] },
        { de: 'Die Unbekannte steht allein auf der linken Seite.', ru: 'Неизвестное стоит одно в левой части.', wrongRu: ['Неизвестное стоит одно в правой части.', 'Решение стоит одно в левой части.'] },
        { de: 'Mach immer die Probe!', ru: 'Всегда делай проверку!', wrongRu: ['Никогда не делай проверку!', 'Всегда делай упражнение!'] },
      ],
    },
    {
      lesson: 1, title: 'Ein Garten für die WG',
      de: `Sara wohnt in einer WG in Wien. Hinter dem Haus gibt es einen kleinen Garten, und die WG möchte dort Gemüse pflanzen. Weil Sara Mathematik studiert, sollte sie alles planen.

Der Garten ist ein Rechteck. Sara hat die Länge und die Breite gemessen und dann die Fläche berechnet. Für einen Zaun brauchte sie auch den Umfang.

In einer Ecke wollte ihr Mitbewohner Tim ein Beet in Form eines Dreiecks. Der Winkel in der Ecke ist ein rechter Winkel, deshalb war die Fläche leicht zu berechnen: Länge mal Breite, geteilt durch zwei.

In der Mitte soll ein runder Tisch stehen. Für den Kreis hat Sara die Zahl Pi gebraucht. Am Ende hat Tim gesagt: „Mathe ist ja doch nützlich!“`,
      ru: `Сара живёт в квартире с соседями в Вене. За домом есть маленький сад, и соседи хотят посадить там овощи. Поскольку Сара изучает математику, планировать всё должна была она.

Сад — это прямоугольник. Сара измерила длину и ширину, а потом вычислила площадь. Для забора ей был нужен ещё и периметр.

В одном углу её сосед Тим хотел грядку в форме треугольника. Угол в этом месте прямой, поэтому площадь было легко вычислить: длина умножить на ширину и разделить на два.

В середине должен стоять круглый стол. Для круга Саре понадобилось число пи. В конце Тим сказал: «Математика всё-таки полезная!»`,
      gloss: {
        sara: 'Сара (имя)', tim: 'Тим (имя)', wg: 'WG — квартира, которую снимают вместе (Wohngemeinschaft)', wien: 'Вена', hinter: 'за, позади',
        garten: 'сад', gemüse: 'овощи', pflanzen: 'сажать', mathematik: 'математика', sollte: 'должна была', planen: 'планировать',
        breite: 'ширина', gemessen: 'измерила', zaun: 'забор', brauchte: 'нужен был, нуждалась', ecke: 'угол (место)', wollte: 'хотел',
        mitbewohner: 'сосед по квартире', beet: 'грядка, клумба', form: 'форма', rechter: 'прямой (угол)', mitte: 'середина', runder: 'круглый',
        pi: 'пи (число π)', gebraucht: 'понадобилось, использовала', mathe: 'математика (разг.)', nützlich: 'полезный', ja: 'ведь, же', doch: 'всё-таки',
        geteilt: 'разделить (на)', mal: 'умножить на', kleinen: 'маленький', gibt: 'есть, имеется (es gibt)', durch: 'на (geteilt durch — разделить на)', dreiecks: 'треугольника', gekannt: 'знал',
      },
      questions: [
        { q: 'Welche Form hat der Garten?', ru: 'Какую форму имеет сад?', options: ['Ein Rechteck', 'Ein Dreieck', 'Einen Kreis'], answer: 'Ein Rechteck' },
        { q: 'Warum hat Sara den Umfang gebraucht?', ru: 'Зачем Саре понадобился периметр?', options: ['Für einen Zaun', 'Für das Gemüse', 'Für den Tisch'], answer: 'Für einen Zaun' },
        { q: 'Warum war die Fläche des Dreiecks leicht zu berechnen?', ru: 'Почему площадь треугольника было легко вычислить?', options: ['Der Winkel in der Ecke ist ein rechter Winkel.', 'Das Dreieck ist sehr klein.', 'Tim hat die Fläche schon gekannt.'], answer: 'Der Winkel in der Ecke ist ein rechter Winkel.' },
        { q: 'Was soll in der Mitte stehen?', ru: 'Что должно стоять в середине?', options: ['Ein runder Tisch', 'Ein Beet', 'Ein Zaun'], answer: 'Ein runder Tisch' },
      ],
      translate: [
        { de: 'Sara hat die Fläche berechnet.', ru: 'Сара вычислила площадь.', wrongRu: ['Сара вычислила периметр.', 'Сара измерила площадь.'] },
        { de: 'Der Garten ist ein Rechteck.', ru: 'Сад — это прямоугольник.', wrongRu: ['Сад — это треугольник.', 'Сад — это квадрат.'] },
        { de: 'Für den Zaun brauchte sie den Umfang.', ru: 'Для забора ей был нужен периметр.', wrongRu: ['Для забора ей была нужна площадь.', 'Для стола ей был нужен периметр.'] },
      ],
    },
  ],
};
