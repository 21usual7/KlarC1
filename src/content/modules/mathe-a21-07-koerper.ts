import type { Module } from '../types.ts';

// A2.1 mathe 07: a cuboid aquarium — base, height, volume, surface, net (lesson 0), cylinder, cone and pyramid with radius and pi (lesson 1).

export const module: Module = {
  id: 'mathe-a21-07-koerper', sphere: 'mathe', level: 'A2.1',
  title: 'Körper und Volumen', subtitle: 'Параллелепипед, цилиндр, конус, объём, площадь поверхности и число π.',
  words: [
    { id: 'mat-a21-07-quader', icon: 'Box', imageQuery: 'glass aquarium empty', de: 'Quader', pos: 'noun', article: 'der', plural: 'Quader', ru: 'прямоугольный параллелепипед', note: 'Würfel — частный случай Quader с равными рёбрами.', example: { de: 'Ein Aquarium hat oft die Form eines Quaders.', ru: 'Аквариум часто имеет форму параллелепипеда.', cloze: 'Quaders' } },
    { id: 'mat-a21-07-volumen', icon: 'Container', imageQuery: 'measuring cup', de: 'Volumen', pos: 'noun', article: 'das', plural: 'Volumina', ru: 'объём', note: 'Мн. ч. латинское: die Volumina (редко).', example: { de: 'Das Volumen ist Grundfläche mal Höhe.', ru: 'Объём — это площадь основания, умноженная на высоту.', cloze: 'Volumen' } },
    { id: 'mat-a21-07-grundflaeche', icon: 'Square', de: 'Grundfläche', pos: 'noun', article: 'die', plural: 'Grundflächen', ru: 'площадь основания; основание', parts: ['Grund', 'fläche'], example: { de: 'Die Grundfläche ist 60 mal 30 Zentimeter.', ru: 'Основание — 60 на 30 сантиметров.', cloze: 'Grundfläche' } },
    { id: 'mat-a21-07-hoehe', icon: 'MoveVertical', imageQuery: 'tall tower', de: 'Höhe', pos: 'noun', article: 'die', plural: 'Höhen', ru: 'высота', note: 'hoch → die Höhe. In der Höhe — на высоте.', example: { de: 'Die Höhe des Aquariums ist 40 Zentimeter.', ru: 'Высота аквариума — 40 сантиметров.', cloze: 'Höhe' } },
    { id: 'mat-a21-07-kubikzentimeter', icon: 'Box', imageQuery: 'cube', de: 'Kubikzentimeter', pos: 'noun', article: 'der', plural: 'Kubikzentimeter', ru: 'кубический сантиметр', parts: ['Kubik', 'zentimeter'], note: 'cm³. 1 Liter = 1000 Kubikzentimeter.', example: { de: 'Ein Liter hat tausend Kubikzentimeter.', ru: 'В литре тысяча кубических сантиметров.', cloze: 'Kubikzentimeter' } },
    { id: 'mat-a21-07-oberflaeche', icon: 'Layers', de: 'Oberfläche', pos: 'noun', article: 'die', plural: 'Oberflächen', ru: 'площадь поверхности; поверхность', parts: ['Ober', 'fläche'], note: 'Также: Benutzeroberfläche — интерфейс.', example: { de: 'Für die Oberfläche addieren wir alle Seitenflächen.', ru: 'Для площади поверхности мы складываем все грани.', cloze: 'Oberfläche' } },
    { id: 'mat-a21-07-netz', icon: 'LayoutGrid', imageQuery: 'cube net', de: 'Netz', pos: 'noun', article: 'das', plural: 'Netze', ru: 'развёртка (тела); сеть', note: 'In Geometrie: das Netz eines Würfels — развёртка куба.', example: { de: 'Zeichne das Netz des Quaders.', ru: 'Нарисуй развёртку параллелепипеда.', cloze: 'Netz' } },
    { id: 'mat-a21-07-fuellen', icon: 'Droplets', imageQuery: 'filling glass water', de: 'füllen', pos: 'verb', ru: 'наполнять', forms: 'er füllt · hat gefüllt', note: 'etwas mit + Dat füllen — наполнить чем-то.', example: { de: 'Wir füllen das Aquarium mit Wasser.', ru: 'Мы наполняем аквариум водой.', cloze: 'füllen' } },
    { id: 'mat-a21-07-zylinder', icon: 'Cylinder', imageQuery: 'tin can', de: 'Zylinder', pos: 'noun', article: 'der', plural: 'Zylinder', ru: 'цилиндр', note: 'Читается «цюлиндер».', example: { de: 'Eine Dose hat die Form eines Zylinders.', ru: 'Банка имеет форму цилиндра.', cloze: 'Zylinders' } },
    { id: 'mat-a21-07-kegel', icon: 'Triangle', imageQuery: 'ice cream cone', de: 'Kegel', pos: 'noun', article: 'der', plural: 'Kegel', ru: 'конус', note: 'Также: кегля (beim Kegeln).', example: { de: 'Die Eistüte ist ein Kegel.', ru: 'Вафельный рожок — это конус.', cloze: 'Kegel' } },
    { id: 'mat-a21-07-pyramide', icon: 'Pyramid', imageQuery: 'Egyptian pyramid Giza', de: 'Pyramide', pos: 'noun', article: 'die', plural: 'Pyramiden', ru: 'пирамида', example: { de: 'Die Pyramide hat eine quadratische Grundfläche.', ru: 'У пирамиды квадратное основание.', cloze: 'Pyramide' } },
    { id: 'mat-a21-07-radius', icon: 'CircleDot', imageQuery: 'circle radius', de: 'Radius', pos: 'noun', article: 'der', plural: 'Radien', ru: 'радиус', note: 'Мн. ч.: die Radien.', example: { de: 'Der Radius ist die Hälfte des Durchmessers.', ru: 'Радиус — половина диаметра.', cloze: 'Radius' } },
    { id: 'mat-a21-07-durchmesser', icon: 'Diameter', imageQuery: 'caliper', de: 'Durchmesser', pos: 'noun', article: 'der', plural: 'Durchmesser', ru: 'диаметр', parts: ['Durch', 'messer'], example: { de: 'Die Dose hat einen Durchmesser von acht Zentimetern.', ru: 'Диаметр банки — восемь сантиметров.', cloze: 'Durchmesser' } },
    { id: 'mat-a21-07-fassen', icon: 'Beaker', de: 'fassen', pos: 'verb', ru: 'вмещать', forms: 'er fasst · hat gefasst', note: 'Также: greifen, понять (Ich kann es nicht fassen — не могу поверить).', example: { de: 'Die Dose fasst einen halben Liter.', ru: 'Банка вмещает пол-литра.', cloze: 'fasst' } },
    { id: 'mat-a21-07-pi', icon: 'Pi', imageQuery: 'pi symbol', de: 'Pi', pos: 'noun', article: 'das', ru: 'число пи (π)', note: 'π ≈ 3,14. Читается «пи».', example: { de: 'Für den Kreis brauchen wir die Zahl Pi.', ru: 'Для круга нам нужно число пи.', cloze: 'Pi' } },
    { id: 'mat-a21-07-formel', icon: 'SquareFunction', imageQuery: 'formula blackboard', de: 'Formel', pos: 'noun', article: 'die', plural: 'Formeln', ru: 'формула', example: { de: 'Die Formel für das Volumen steht im Heft.', ru: 'Формула объёма записана в тетради.', cloze: 'Formel' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Das neue Aquarium',
      de: `Lukas bekommt ein Aquarium für seine Fische. Es hat die Form eines Quaders: 60 Zentimeter lang, 30 Zentimeter breit und 40 Zentimeter hoch. Wie viel Wasser braucht er?

Sein Vater erklärt: „Zuerst rechnest du die Grundfläche aus: 60 mal 30, das sind 1800 Quadratzentimeter. Das Volumen ist Grundfläche mal Höhe, also 1800 mal 40.“ Das ergibt 72 000 Kubikzentimeter. Ein Liter hat 1000 Kubikzentimeter, also sind es 72 Liter.

Dann will Lukas wissen, wie viel Glas man für das Aquarium braucht. Oben ist es offen. Er zeichnet das Netz und addiert die Flächen: Die Oberfläche ohne Deckel ist 9000 Quadratzentimeter. Am Abend füllen sie das Aquarium mit Wasser.`,
      ru: `Лукас получает аквариум для своих рыбок. Он имеет форму параллелепипеда: 60 сантиметров в длину, 30 в ширину и 40 в высоту. Сколько воды ему нужно?

Папа объясняет: «Сначала вычисли площадь основания: 60 на 30 — это 1800 квадратных сантиметров. Объём — это площадь основания, умноженная на высоту, то есть 1800 на 40». Получается 72 000 кубических сантиметров. В литре 1000 кубических сантиметров, значит, это 72 литра.

Потом Лукас хочет узнать, сколько стекла нужно для аквариума. Сверху он открыт. Он рисует развёртку и складывает площади: площадь поверхности без крышки — 9000 квадратных сантиметров. Вечером они наполняют аквариум водой.`,
      gloss: { lukas: 'Лукас (имя)', bekommt: 'получает', aquarium: 'аквариум', aquariums: 'аквариума', seine: 'своих', fische: 'рыбки, рыбы', lang: 'длиной', wasser: 'вода', braucht: 'нужно, требуется', sein: 'его', vater: 'отец, папа', erklärt: 'объясняет', zuerst: 'сначала', rechnest: '(ты) вычисляешь', aus: '(rechnest aus) вычисляешь', quadratzentimeter: 'квадратные сантиметры', also: 'то есть, значит', ergibt: 'даёт, получается', will: 'хочет', wissen: 'знать', glas: 'стекло', oben: 'сверху', offen: 'открытый', zeichnet: 'рисует', addiert: 'складывает', flächen: 'площади', ohne: 'без', deckel: 'крышка', abend: 'вечер', wie: 'как', viel: 'сколько', was: 'что', welche: 'какую' },
      questions: [
        { q: 'Welche Form hat das Aquarium?', ru: 'Какой формы аквариум?', options: ['Einen Quader', 'Einen Zylinder', 'Eine Pyramide'], answer: 'Einen Quader' },
        { q: 'Wie viel Wasser passt in das Aquarium?', ru: 'Сколько воды помещается в аквариум?', options: ['72 Liter', '1800 Liter', '9 Liter'], answer: '72 Liter' },
        { q: 'Was zeichnet Lukas für die Oberfläche?', ru: 'Что Лукас рисует для площади поверхности?', options: ['Das Netz', 'Den Deckel', 'Einen Kreis'], answer: 'Das Netz' },
      ],
      translate: [
        { de: 'Das Volumen ist Grundfläche mal Höhe.', ru: 'Объём — это площадь основания, умноженная на высоту.', wrongRu: ['Объём — это площадь основания плюс высота.', 'Площадь — это основание, умноженное на высоту.'] },
        { de: 'Ein Liter hat tausend Kubikzentimeter.', ru: 'В литре тысяча кубических сантиметров.', wrongRu: ['В литре сто кубических сантиметров.', 'В килограмме тысяча кубических сантиметров.'] },
        { de: 'Sie füllen das Aquarium mit Wasser.', ru: 'Они наполняют аквариум водой.', wrongRu: ['Они выливают воду из аквариума.', 'Они моют аквариум водой.'] },
      ],
    },
    {
      lesson: 1, title: 'Dose, Eistüte, Pyramide',
      de: `Im Supermarkt hält Lena eine Dose Tomaten in der Hand. Die Dose ist ein Zylinder. Ihr Durchmesser ist acht Zentimeter, also ist der Radius vier Zentimeter. Die Höhe ist zehn Zentimeter.

Zu Hause sucht Lena die Formel: Volumen gleich Pi mal Radius zum Quadrat mal Höhe. Pi ist ungefähr 3,14. Sie rechnet: 3,14 mal 16 mal 10, das sind ungefähr 502 Kubikzentimeter. Die Dose fasst also etwa einen halben Liter.

Danach isst Lena ein Eis. Die Eistüte ist ein Kegel. Ein Kegel hat nur ein Drittel des Volumens eines Zylinders mit derselben Grundfläche und Höhe. Für eine Pyramide gilt dieselbe Regel. Lena denkt: „Deshalb ist in der Tüte immer so wenig Eis!“`,
      ru: `В супермаркете Лена держит в руке банку помидоров. Банка — это цилиндр. Её диаметр восемь сантиметров, значит, радиус — четыре сантиметра. Высота — десять сантиметров.

Дома Лена ищет формулу: объём равен пи, умноженному на радиус в квадрате и на высоту. Пи примерно равно 3,14. Она считает: 3,14 на 16 на 10 — это примерно 502 кубических сантиметра. Значит, банка вмещает примерно пол-литра.

Потом Лена ест мороженое. Вафельный рожок — это конус. У конуса объём всего треть объёма цилиндра с тем же основанием и той же высотой. Для пирамиды действует то же правило. Лена думает: «Вот почему в рожке всегда так мало мороженого!»`,
      gloss: { supermarkt: 'супермаркет', hält: 'держит', lena: 'Лена (имя)', dose: 'банка (консервная)', tomaten: 'помидоров', hand: 'рука', ihr: 'её', also: 'значит', zu: '(zu Hause) дома', sucht: 'ищет', gleich: 'равно', quadrat: 'квадрат (zum Quadrat — в квадрате)', rechnet: 'считает', etwa: 'примерно', halben: 'половину (einen halben Liter — пол-литра)', danach: 'потом', isst: 'ест', eis: 'мороженое', eistüte: 'вафельный рожок', nur: 'только', volumens: 'объёма', zylinders: 'цилиндра', derselben: 'той же', gilt: 'действует, справедливо', dieselbe: 'то же самое', regel: 'правило', denkt: 'думает', deshalb: 'поэтому', tüte: 'рожок; пакет', immer: 'всегда', so: 'так', wenig: 'мало', wie: 'как', groß: 'большой (wie groß — какой величины)', was: 'что', viel: 'сколько' },
      questions: [
        { q: 'Wie groß ist der Radius der Dose?', ru: 'Чему равен радиус банки?', options: ['Vier Zentimeter', 'Acht Zentimeter', 'Zehn Zentimeter'], answer: 'Vier Zentimeter' },
        { q: 'Wie viel fasst die Dose ungefähr?', ru: 'Сколько примерно вмещает банка?', options: ['Einen halben Liter', 'Zwei Liter', 'Zehn Liter'], answer: 'Einen halben Liter' },
        { q: 'Was ist die Eistüte?', ru: 'Чем является вафельный рожок?', options: ['Ein Kegel', 'Ein Zylinder', 'Ein Quader'], answer: 'Ein Kegel' },
      ],
      translate: [
        { de: 'Die Dose ist ein Zylinder.', ru: 'Банка — это цилиндр.', wrongRu: ['Банка — это конус.', 'Коробка — это цилиндр.'] },
        { de: 'Der Radius ist vier Zentimeter.', ru: 'Радиус — четыре сантиметра.', wrongRu: ['Диаметр — четыре сантиметра.', 'Радиус — восемь сантиметров.'] },
        { de: 'Für eine Pyramide gilt dieselbe Regel.', ru: 'Для пирамиды действует то же правило.', wrongRu: ['Для пирамиды действует другое правило.', 'Для цилиндра действует то же правило.'] },
      ],
    },
  ],
};
