import type { Module } from '../types.ts';

// A1.2 mathe 06: flat shapes in an art lesson (lesson 0), solids — cube, ball, box — when packing a present (lesson 1).

export const module: Module = {
  id: 'mathe-a12-06-formen', sphere: 'mathe', level: 'A1.2',
  title: 'Formen und Körper', subtitle: 'Квадрат, угол, линия, куб и шар: фигуры вокруг нас.',
  words: [
    { id: 'mat-a12-06-form', icon: 'Shapes', de: 'Form', pos: 'noun', article: 'die', plural: 'Formen', ru: 'форма, фигура', note: 'Welche Form hat …? — Какой формы …?', example: { de: 'Welche Form hat das Fenster?', ru: 'Какой формы окно?', cloze: 'Form' } },
    { id: 'mat-a12-06-quadrat', icon: 'Square', de: 'Quadrat', pos: 'noun', article: 'das', plural: 'Quadrate', ru: 'квадрат', note: 'Средний род: das Quadrat. Все четыре стороны равны.', example: { de: 'Ein Quadrat hat vier gleiche Seiten.', ru: 'У квадрата четыре равные стороны.', cloze: 'Quadrat' } },
    { id: 'mat-a12-06-ecke', icon: 'SquareDashedBottom', de: 'Ecke', pos: 'noun', article: 'die', plural: 'Ecken', ru: 'угол (вершина фигуры, угол комнаты)', note: 'Ecke — угол-вершина; Winkel — угол как величина в градусах.', example: { de: 'Ein Dreieck hat drei Ecken.', ru: 'У треугольника три угла.', cloze: 'Ecken' } },
    { id: 'mat-a12-06-linie', icon: 'Minus', de: 'Linie', pos: 'noun', article: 'die', plural: 'Linien', ru: 'линия', note: 'Читается «ли́-ни-е».', example: { de: 'Zeichne eine Linie von A nach B.', ru: 'Проведи линию от A до B.', cloze: 'Linie' } },
    { id: 'mat-a12-06-punkt', icon: 'Dot', de: 'Punkt', pos: 'noun', article: 'der', plural: 'Punkte', ru: 'точка; балл', note: 'Два значения: точка в геометрии и балл на контрольной.', example: { de: 'Der Punkt A liegt auf der Linie.', ru: 'Точка A лежит на линии.', cloze: 'Punkt' } },
    { id: 'mat-a12-06-rund', icon: 'Circle', de: 'rund', pos: 'adj', ru: 'круглый', example: { de: 'Der Tisch in der Küche ist rund.', ru: 'Стол на кухне круглый.', cloze: 'rund' } },
    { id: 'mat-a12-06-eckig', icon: 'Square', de: 'eckig', pos: 'adj', ru: 'угловатый, с углами', note: 'viereckig — четырёхугольный, dreieckig — треугольный.', example: { de: 'Das Bild ist eckig, der Spiegel ist rund.', ru: 'Картина прямоугольная, а зеркало круглое.', cloze: 'eckig' } },
    { id: 'mat-a12-06-zeichnen', icon: 'Pencil', de: 'zeichnen', pos: 'verb', ru: 'рисовать, чертить', forms: 'er zeichnet · hat gezeichnet', note: 'zeichnen — карандашом, линиями; malen — красками.', example: { de: 'Wir zeichnen ein Haus aus Formen.', ru: 'Мы рисуем дом из фигур.', cloze: 'zeichnen' } },
    { id: 'mat-a12-06-wuerfel', icon: 'Box', imageQuery: 'wooden cube', de: 'Würfel', pos: 'noun', article: 'der', plural: 'Würfel', ru: 'куб; игральный кубик', note: 'В игре: würfeln — бросать кубик.', example: { de: 'Ein Würfel hat sechs Flächen.', ru: 'У куба шесть граней.', cloze: 'Würfel' } },
    { id: 'mat-a12-06-kugel', icon: 'CircleDashed', imageQuery: 'glass sphere', de: 'Kugel', pos: 'noun', article: 'die', plural: 'Kugeln', ru: 'шар', note: 'eine Kugel Eis — шарик мороженого.', example: { de: 'Ein Ball hat die Form einer Kugel.', ru: 'Мяч имеет форму шара.', cloze: 'Kugel' } },
    { id: 'mat-a12-06-kante', icon: 'PanelTop', de: 'Kante', pos: 'noun', article: 'die', plural: 'Kanten', ru: 'ребро, край', note: 'У куба 12 Kanten (рёбер) и 8 Ecken (вершин).', example: { de: 'Ein Würfel hat zwölf Kanten.', ru: 'У куба двенадцать рёбер.', cloze: 'Kanten' } },
    { id: 'mat-a12-06-flach', icon: 'RectangleHorizontal', de: 'flach', pos: 'adj', ru: 'плоский', example: { de: 'Ein Blatt Papier ist flach.', ru: 'Лист бумаги плоский.', cloze: 'flach' } },
    { id: 'mat-a12-06-spitze', icon: 'Triangle', de: 'Spitze', pos: 'noun', article: 'die', plural: 'Spitzen', ru: 'вершина, остриё', note: 'В разговоре Spitze! — «Супер!»', example: { de: 'Die Pyramide hat oben eine Spitze.', ru: 'У пирамиды наверху вершина.', cloze: 'Spitze' } },
    { id: 'mat-a12-06-mitte', icon: 'Crosshair', de: 'Mitte', pos: 'noun', article: 'die', plural: 'Mitten', ru: 'середина, центр', note: 'in der Mitte — посередине.', example: { de: 'In der Mitte des Kreises ist ein Punkt.', ru: 'В центре круга — точка.', cloze: 'Mitte' } },
    { id: 'mat-a12-06-schachtel', icon: 'Package', imageQuery: 'cardboard gift box', de: 'Schachtel', pos: 'noun', article: 'die', plural: 'Schachteln', ru: 'коробка, коробочка', example: { de: 'Die Schachtel hat die Form eines Würfels.', ru: 'Коробка имеет форму куба.', cloze: 'Schachtel' } },
    { id: 'mat-a12-06-stern', icon: 'Star', de: 'Stern', pos: 'noun', article: 'der', plural: 'Sterne', ru: 'звезда', example: { de: 'Auf dem Papier ist ein goldener Stern.', ru: 'На бумаге — золотая звезда.', cloze: 'Stern' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Haus aus Formen',
      de: `In der Zeichenstunde sagt Frau Novak: „Heute zeichnen wir ein Haus. Aber ihr dürft nur Formen benutzen.“

Lukas nimmt ein Quadrat für das Haus. Für das Dach zeichnet er ein Dreieck. Die Fenster sind kleine Quadrate. Die Tür ist ein Rechteck. Ein Rechteck hat vier Ecken, genau wie ein Quadrat.

Neben dem Haus zeichnet Lukas eine Sonne. Die Sonne ist rund. Um die Sonne macht er viele Linien. Am Ende macht er einen kleinen Punkt auf die Tür. Das ist der Türgriff! Frau Novak sagt: „Sehr schön, alles ist eckig, nur die Sonne nicht.“`,
      ru: `На уроке рисования госпожа Новак говорит: «Сегодня мы рисуем дом. Но можно использовать только фигуры».

Лукас берёт квадрат для дома. Для крыши он рисует треугольник. Окна — маленькие квадраты. Дверь — прямоугольник. У прямоугольника четыре угла, как и у квадрата.

Рядом с домом Лукас рисует солнце. Солнце круглое. Вокруг солнца он проводит много линий. В конце он ставит маленькую точку на двери. Это дверная ручка! Госпожа Новак говорит: «Очень красиво, всё угловатое, кроме солнца».`,
      gloss: { zeichenstunde: 'урок рисования', novak: 'Новак (фамилия)', heute: 'сегодня', haus: 'дом', aber: 'но', dürft: 'можете, вам разрешено', nur: 'только', benutzen: 'использовать', lukas: 'Лукас (имя)', nimmt: 'берёт', dach: 'крыша', fenster: 'окна; окно', kleine: 'маленькие', kleinen: 'маленький', tür: 'дверь', genau: 'точно (genau wie — так же, как)', neben: 'рядом с', sonne: 'солнце', um: 'вокруг', macht: 'делает', ende: 'конец', türgriff: 'дверная ручка', schön: 'красиво', aus: 'из', welche: 'какая', womit: 'чем', wofür: 'для чего' },
      questions: [
        { q: 'Welche Form hat das Dach?', ru: 'Какой формы крыша?', options: ['Ein Dreieck', 'Ein Quadrat', 'Ein Rechteck'], answer: 'Ein Dreieck' },
        { q: 'Was ist rund?', ru: 'Что круглое?', options: ['Die Sonne', 'Die Tür', 'Das Fenster'], answer: 'Die Sonne' },
        { q: 'Was ist der Punkt auf der Tür?', ru: 'Что за точка на двери?', options: ['Der Türgriff', 'Ein Fenster', 'Die Sonne'], answer: 'Der Türgriff' },
      ],
      translate: [
        { de: 'Ein Quadrat hat vier Ecken.', ru: 'У квадрата четыре угла.', wrongRu: ['У квадрата три угла.', 'У треугольника четыре угла.'] },
        { de: 'Die Sonne ist rund.', ru: 'Солнце круглое.', wrongRu: ['Солнце жёлтое.', 'Луна круглая.'] },
        { de: 'Lukas zeichnet eine Linie.', ru: 'Лукас проводит линию.', wrongRu: ['Лукас стирает линию.', 'Лукас рисует круг.'] },
      ],
    },
    {
      lesson: 1, title: 'Ein Geschenk für Mama',
      de: `Mama hat morgen Geburtstag. Lukas und seine Schwester Mia haben ein Geschenk: eine kleine Kugel aus Glas. In der Mitte der Kugel ist ein Stern.

Sie brauchen eine Schachtel. Die erste Schachtel ist flach. Die Kugel passt nicht hinein. Die zweite Schachtel ist ein Würfel. Mia sagt: „Ein Würfel hat sechs Flächen, acht Ecken und zwölf Kanten. Die Kugel hat keine Ecken und keine Kanten!“

Die Kugel passt in den Würfel. Lukas klebt auf die Spitze der Schachtel einen goldenen Stern. Jetzt ist das Geschenk fertig.`,
      ru: `Завтра у мамы день рождения. У Лукаса и его сестры Мии есть подарок: маленький стеклянный шар. В центре шара — звезда.

Им нужна коробка. Первая коробка плоская. Шар в неё не помещается. Вторая коробка — куб. Мия говорит: «У куба шесть граней, восемь вершин и двенадцать рёбер. А у шара нет ни вершин, ни рёбер!»

Шар помещается в куб. Лукас наклеивает на верх коробки золотую звезду. Теперь подарок готов.`,
      gloss: { mama: 'мама', morgen: 'завтра', geburtstag: 'день рождения', lukas: 'Лукас (имя)', schwester: 'сестра', mia: 'Мия (имя)', geschenk: 'подарок', kleine: 'маленькая', glas: 'стекло', brauchen: 'нужна, нуждаются', erste: 'первая', passt: 'помещается, подходит', hinein: 'внутрь', zweite: 'вторая', flächen: 'грани, поверхности', keine: 'никаких, нет', klebt: 'клеит', goldenen: 'золотую', fertig: 'готов', jetzt: 'теперь', wer: 'кто', viele: 'сколько (wie viele)', wie: 'как', wohin: 'куда' },
      questions: [
        { q: 'Was ist in der Mitte der Kugel?', ru: 'Что в центре шара?', options: ['Ein Stern', 'Ein Würfel', 'Ein Punkt'], answer: 'Ein Stern' },
        { q: 'Wie viele Kanten hat ein Würfel?', ru: 'Сколько рёбер у куба?', options: ['Zwölf', 'Acht', 'Sechs'], answer: 'Zwölf' },
        { q: 'Warum passt die Kugel nicht in die erste Schachtel?', ru: 'Почему шар не помещается в первую коробку?', options: ['Die Schachtel ist flach.', 'Die Schachtel ist rund.', 'Die Kugel hat Ecken.'], answer: 'Die Schachtel ist flach.' },
      ],
      translate: [
        { de: 'Die Kugel hat keine Ecken.', ru: 'У шара нет углов.', wrongRu: ['У куба нет углов.', 'У шара восемь углов.'] },
        { de: 'Die erste Schachtel ist flach.', ru: 'Первая коробка плоская.', wrongRu: ['Вторая коробка плоская.', 'Первая коробка круглая.'] },
        { de: 'Ein Würfel hat zwölf Kanten.', ru: 'У куба двенадцать рёбер.', wrongRu: ['У куба восемь рёбер.', 'У шара двенадцать рёбер.'] },
      ],
    },
  ],
};
