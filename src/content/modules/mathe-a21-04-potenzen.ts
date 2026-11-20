import type { Module } from '../types.ts';

// A2.1 mathe 04: powers — base, exponent, square numbers, powers of ten (lesson 0), exponential growth of bacteria (lesson 1).

export const module: Module = {
  id: 'mathe-a21-04-potenzen', sphere: 'mathe', level: 'A2.1',
  title: 'Potenzen und Wachstum', subtitle: 'Степень, основание, показатель, удвоение и экспоненциальный рост.',
  words: [
    { id: 'mat-a21-04-potenz', icon: 'Superscript', de: 'Potenz', pos: 'noun', article: 'die', plural: 'Potenzen', ru: 'степень', note: 'Читается: zwei hoch drei (2³).', example: { de: 'Zwei hoch drei ist eine Potenz.', ru: 'Два в третьей степени — это степень.', cloze: 'Potenz' } },
    { id: 'mat-a21-04-basis', icon: 'Square', de: 'Basis', pos: 'noun', article: 'die', plural: 'Basen', ru: 'основание (степени); база', example: { de: 'Bei zwei hoch drei ist die Zwei die Basis.', ru: 'В выражении два в кубе двойка — основание.', cloze: 'Basis' } },
    { id: 'mat-a21-04-exponent', icon: 'ChevronUp', de: 'Exponent', pos: 'noun', article: 'der', plural: 'Exponenten', ru: 'показатель степени', note: 'Слабое склонение: den Exponenten.', example: { de: 'Der Exponent steht oben rechts.', ru: 'Показатель степени стоит справа вверху.', cloze: 'Exponent' } },
    { id: 'mat-a21-04-quadratzahl', icon: 'Grid2x2', de: 'Quadratzahl', pos: 'noun', article: 'die', plural: 'Quadratzahlen', ru: 'квадрат числа (1, 4, 9, 16 …)', parts: ['Quadrat', 'zahl'], example: { de: 'Sechzehn ist eine Quadratzahl.', ru: 'Шестнадцать — квадрат целого числа.', cloze: 'Quadratzahl' } },
    { id: 'mat-a21-04-quadrieren', icon: 'Square', de: 'quadrieren', pos: 'verb', ru: 'возводить в квадрат', forms: 'er quadriert · hat quadriert', note: 'Глагол на -ieren: Perfekt без ge-.', example: { de: 'Wenn man fünf quadriert, bekommt man fünfundzwanzig.', ru: 'Если возвести пять в квадрат, получится двадцать пять.', cloze: 'quadriert' } },
    { id: 'mat-a21-04-zehnerpotenz', icon: 'Binary', de: 'Zehnerpotenz', pos: 'noun', article: 'die', plural: 'Zehnerpotenzen', ru: 'степень десяти', parts: ['Zehner', 'potenz'], note: 'Große Zahlen schreibt man mit Zehnerpotenzen: 3 · 10⁶.', example: { de: 'Zehn hoch sechs ist eine Zehnerpotenz.', ru: 'Десять в шестой — это степень десяти.', cloze: 'Zehnerpotenz' } },
    { id: 'mat-a21-04-negativ', icon: 'Minus', de: 'negativ', pos: 'adj', ru: 'отрицательный', example: { de: 'Minus acht ist eine negative Zahl.', ru: 'Минус восемь — отрицательное число.', cloze: 'negative' } },
    { id: 'mat-a21-04-positiv', icon: 'Plus', de: 'positiv', pos: 'adj', ru: 'положительный', note: 'Также в жизни: positiv denken — мыслить позитивно.', example: { de: 'Das Quadrat einer Zahl ist nie negativ, sondern positiv oder null.', ru: 'Квадрат числа никогда не бывает отрицательным: он положительный или ноль.', cloze: 'positiv' } },
    { id: 'mat-a21-04-verdoppeln', icon: 'Copy', de: 'verdoppeln', pos: 'verb', ru: 'удваивать', forms: 'er verdoppelt · hat verdoppelt', note: 'sich verdoppeln — удваиваться.', example: { de: 'Die Zahl der Bakterien verdoppelt sich alle zwanzig Minuten.', ru: 'Число бактерий удваивается каждые двадцать минут.', cloze: 'verdoppelt' } },
    { id: 'mat-a21-04-wachsen', icon: 'Sprout', de: 'wachsen', pos: 'verb', ru: 'расти', forms: 'er wächst · ist gewachsen', note: 'Сильный глагол с умлаутом: du wächst, er wächst. Perfekt с sein.', example: { de: 'Die Stadt wächst jedes Jahr.', ru: 'Город растёт каждый год.', cloze: 'wächst' } },
    { id: 'mat-a21-04-wachstum', icon: 'ChartNoAxesColumnIncreasing', imageQuery: 'plant growth', de: 'Wachstum', pos: 'noun', article: 'das', ru: 'рост', note: 'lineares Wachstum — линейный рост, exponentielles Wachstum — экспоненциальный.', example: { de: 'Das Wachstum ist hier nicht linear.', ru: 'Рост здесь нелинейный.', cloze: 'Wachstum' } },
    { id: 'mat-a21-04-exponentiell', icon: 'ChartSpline', de: 'exponentiell', pos: 'adj', ru: 'экспоненциальный', example: { de: 'Bakterien wachsen exponentiell.', ru: 'Бактерии растут экспоненциально.', cloze: 'exponentiell' } },
    { id: 'mat-a21-04-bakterie', icon: 'Microscope', imageQuery: 'bacteria microscope', de: 'Bakterie', pos: 'noun', article: 'die', plural: 'Bakterien', ru: 'бактерия', example: { de: 'Eine Bakterie teilt sich in zwei.', ru: 'Бактерия делится надвое.', cloze: 'Bakterie' } },
    { id: 'mat-a21-04-zeitraum', icon: 'CalendarRange', de: 'Zeitraum', pos: 'noun', article: 'der', plural: 'Zeiträume', ru: 'промежуток времени, период', parts: ['Zeit', 'raum'], example: { de: 'In einem kurzen Zeitraum passiert sehr viel.', ru: 'За короткий промежуток времени происходит очень многое.', cloze: 'Zeitraum' } },
    { id: 'mat-a21-04-rasant', icon: 'Rocket', de: 'rasant', pos: 'adj', ru: 'стремительный; стремительно', example: { de: 'Die Zahl steigt rasant.', ru: 'Число стремительно растёт.', cloze: 'rasant' } },
    { id: 'mat-a21-04-groessenordnung', icon: 'Scaling', de: 'Größenordnung', pos: 'noun', article: 'die', plural: 'Größenordnungen', ru: 'порядок величины', parts: ['Größen', 'ordnung'], example: { de: 'Das ist eine Zahl in der Größenordnung von zehn hoch einundzwanzig.', ru: 'Это число порядка десяти в двадцать первой степени.', cloze: 'Größenordnung' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Zwei hoch zehn',
      de: `Frau Berger schreibt „zwei hoch drei“ an die Tafel. „Das ist eine Potenz. Die Zwei ist die Basis, die Drei ist der Exponent. Der Exponent sagt, wie oft man die Basis mit sich selbst multipliziert: zwei mal zwei mal zwei ist acht.“

Wenn der Exponent zwei ist, quadriert man die Zahl. So entstehen die Quadratzahlen: eins, vier, neun, sechzehn. Mit Zehnerpotenzen kann man große Zahlen kurz schreiben. Zehn hoch sechs ist eine Million.

Dann wird es schwieriger. Minus zwei hoch zwei ist positiv, nämlich vier. Aber minus zwei hoch drei ist negativ, nämlich minus acht. Jakob staunt: „Der Exponent entscheidet über das Vorzeichen!“`,
      ru: `Госпожа Бергер пишет на доске «два в степени три». «Это степень. Двойка — основание, тройка — показатель. Показатель говорит, сколько раз основание умножают само на себя: два на два на два — восемь».

Если показатель равен двум, число возводят в квадрат. Так получаются квадраты чисел: один, четыре, девять, шестнадцать. Со степенями десяти можно коротко записывать большие числа. Десять в шестой — это миллион.

Потом становится сложнее. Минус два в квадрате — положительное число, а именно четыре. Но минус два в кубе — отрицательное, а именно минус восемь. Якоб удивляется: «Показатель решает, какой будет знак!»`,
      gloss: { berger: 'Бергер (фамилия)', schreibt: 'пишет', hoch: 'в степени (zwei hoch drei — два в третьей)', tafel: 'доска', sagt: 'говорит', oft: 'часто (wie oft — сколько раз)', man: '(безличное) нужно, -ют', mit: 'с', selbst: 'сам (mit sich selbst — сам на себя)', multipliziert: 'умножает', wenn: 'если', so: 'так', entstehen: 'возникают, получаются', große: 'большие', kurz: 'коротко', million: 'миллион', dann: 'потом', wird: 'становится', schwieriger: 'сложнее', nämlich: 'а именно', aber: 'но', jakob: 'Якоб (имя)', staunt: 'удивляется', entscheidet: 'решает', über: 'о, над (entscheiden über — решать что-то)', vorzeichen: 'знак (числа)', was: 'что', welche: 'какое', wie: 'как', woraus: 'из чего', ist: 'есть, является' },
      questions: [
        { q: 'Was ist bei „zwei hoch drei“ die Basis?', ru: 'Что является основанием в «два в степени три»?', options: ['Die Zwei', 'Die Drei', 'Die Acht'], answer: 'Die Zwei' },
        { q: 'Welche Zahl ist zehn hoch sechs?', ru: 'Какое число — десять в шестой?', options: ['Eine Million', 'Sechzig', 'Tausend'], answer: 'Eine Million' },
        { q: 'Was ist minus zwei hoch drei?', ru: 'Чему равно минус два в кубе?', options: ['Minus acht', 'Acht', 'Minus sechs'], answer: 'Minus acht' },
      ],
      translate: [
        { de: 'Die Drei ist der Exponent.', ru: 'Тройка — показатель степени.', wrongRu: ['Тройка — основание степени.', 'Двойка — показатель степени.'] },
        { de: 'Sechzehn ist eine Quadratzahl.', ru: 'Шестнадцать — квадрат целого числа.', wrongRu: ['Шестнадцать — простое число.', 'Шестьдесят — квадрат целого числа.'] },
        { de: 'Minus zwei hoch zwei ist positiv.', ru: 'Минус два в квадрате — положительное число.', wrongRu: ['Минус два в квадрате — отрицательное число.', 'Минус два в кубе — положительное число.'] },
      ],
    },
    {
      lesson: 1, title: 'Bakterien im Labor',
      de: `In der Biologiestunde zeigt Herr Wimmer ein Video aus einem Labor. Eine Bakterie teilt sich alle zwanzig Minuten. Aus einer Bakterie werden zwei, dann vier, dann acht. Die Zahl verdoppelt sich immer wieder.

Lea rechnet: Nach einer Stunde sind es acht Bakterien, nach drei Stunden schon 512, also zwei hoch neun. Das Wachstum ist nicht linear, sondern exponentiell. Am Anfang wächst die Zahl langsam, dann steigt sie rasant.

Herr Wimmer fragt: „Und nach 24 Stunden?“ Das ist zwei hoch 72. Die Zahl ist so groß, dass man sie nur mit einer Zehnerpotenz schreiben kann. Sie liegt in der Größenordnung von zehn hoch 21. In so einem kurzen Zeitraum! Zum Glück haben Bakterien in der Natur nicht immer genug Nahrung.`,
      ru: `На уроке биологии господин Виммер показывает видео из лаборатории. Бактерия делится каждые двадцать минут. Из одной бактерии получаются две, потом четыре, потом восемь. Число снова и снова удваивается.

Леа считает: через час будет восемь бактерий, через три часа — уже 512, то есть два в девятой степени. Рост не линейный, а экспоненциальный. Вначале число растёт медленно, потом стремительно увеличивается.

Господин Виммер спрашивает: «А через 24 часа?» Это два в степени 72. Число такое большое, что его можно записать только через степень десяти. Оно порядка десяти в двадцать первой. И это за такой короткий промежуток времени! К счастью, в природе у бактерий не всегда хватает пищи.`,
      gloss: { biologiestunde: 'урок биологии', zeigt: 'показывает', wimmer: 'Виммер (фамилия)', video: 'видео', labor: 'лаборатория', teilt: 'делит (sich teilen — делиться)', alle: 'каждые (alle zwanzig Minuten)', werden: 'становятся, получаются', immer: 'всегда (immer wieder — снова и снова)', wieder: 'снова', lea: 'Леа (имя)', rechnet: 'считает', nach: 'через, после', schon: 'уже', also: 'то есть', hoch: 'в степени (zwei hoch neun — два в девятой)', sondern: 'а (после отрицания)', anfang: 'начало', langsam: 'медленно', steigt: 'растёт, поднимается', fragt: 'спрашивает', so: 'так, такой', groß: 'большой', dass: 'что', nur: 'только', liegt: 'лежит, находится', kurzen: 'короткий', glück: 'счастье (zum Glück — к счастью)', natur: 'природа', genug: 'достаточно', nahrung: 'пища', zweiundsiebzig: 'семьдесят два', einundzwanzig: 'двадцать один', wie: 'как', viele: 'сколько (wie viele)', was: 'что', wann: 'когда' },
      questions: [
        { q: 'Wie oft teilt sich eine Bakterie?', ru: 'Как часто делится бактерия?', options: ['Alle zwanzig Minuten', 'Jede Stunde', 'Alle drei Stunden'], answer: 'Alle zwanzig Minuten' },
        { q: 'Wie viele Bakterien sind es nach drei Stunden?', ru: 'Сколько бактерий через три часа?', options: ['512', '8', '72'], answer: '512' },
        { q: 'Was für ein Wachstum ist das?', ru: 'Какой это рост?', options: ['Exponentiell', 'Linear', 'Negativ'], answer: 'Exponentiell' },
      ],
      translate: [
        { de: 'Die Zahl verdoppelt sich immer wieder.', ru: 'Число снова и снова удваивается.', wrongRu: ['Число снова и снова уменьшается вдвое.', 'Число удваивается только один раз.'] },
        { de: 'Das Wachstum ist exponentiell.', ru: 'Рост экспоненциальный.', wrongRu: ['Рост линейный.', 'Рост отрицательный.'] },
        { de: 'Am Anfang wächst die Zahl langsam.', ru: 'Вначале число растёт медленно.', wrongRu: ['В конце число растёт медленно.', 'Вначале число растёт стремительно.'] },
      ],
    },
  ],
};
