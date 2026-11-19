import type { Module } from '../types.ts';

// A2.1 mathe 05: chance in a dice game — probable, impossible, certain (lesson 0), a raffle and a wheel of fortune at the school fair (lesson 1).

export const module: Module = {
  id: 'mathe-a21-05-wahrscheinlichkeit', sphere: 'mathe', level: 'A2.1',
  title: 'Zufall und Wahrscheinlichkeit', subtitle: 'Случай, кубик, вероятность, лотерея и колесо фортуны.',
  words: [
    { id: 'mat-a21-05-zufall', icon: 'Shuffle', de: 'Zufall', pos: 'noun', article: 'der', plural: 'Zufälle', ru: 'случай, случайность', note: 'Was für ein Zufall! — Какое совпадение!', example: { de: 'Beim Würfeln entscheidet der Zufall.', ru: 'При бросании кубика всё решает случай.', cloze: 'Zufall' } },
    { id: 'mat-a21-05-zufaellig', icon: 'Dices', de: 'zufällig', pos: 'adj', ru: 'случайный; случайно', example: { de: 'Wir wählen zufällig eine Karte.', ru: 'Мы случайно выбираем карту.', cloze: 'zufällig' } },
    { id: 'mat-a21-05-wuerfeln', icon: 'Dice5', de: 'würfeln', pos: 'verb', ru: 'бросать кубик', forms: 'er würfelt · hat gewürfelt', note: 'eine Sechs würfeln — выбросить шестёрку.', example: { de: 'Tom würfelt eine Sechs.', ru: 'Том выбрасывает шестёрку.', cloze: 'würfelt' } },
    { id: 'mat-a21-05-augenzahl', icon: 'Dice6', de: 'Augenzahl', pos: 'noun', article: 'die', plural: 'Augenzahlen', ru: 'число очков (на кубике)', parts: ['Augen', 'zahl'], note: 'Точки на кубике называются Augen — «глаза».', example: { de: 'Die höchste Augenzahl ist sechs.', ru: 'Наибольшее число очков — шесть.', cloze: 'Augenzahl' } },
    { id: 'mat-a21-05-wahrscheinlichkeit', icon: 'ChartPie', de: 'Wahrscheinlichkeit', pos: 'noun', article: 'die', plural: 'Wahrscheinlichkeiten', ru: 'вероятность', note: 'Записывают дробью или в процентах: 1/6 ≈ 17 %.', example: { de: 'Die Wahrscheinlichkeit für eine Sechs ist ein Sechstel.', ru: 'Вероятность выпадения шестёрки — одна шестая.', cloze: 'Wahrscheinlichkeit' } },
    { id: 'mat-a21-05-wahrscheinlich', icon: 'Percent', de: 'wahrscheinlich', pos: 'adj', ru: 'вероятный; вероятно', example: { de: 'Wahrscheinlich dauert das Spiel noch lange.', ru: 'Вероятно, игра продлится ещё долго.', cloze: 'Wahrscheinlich' } },
    { id: 'mat-a21-05-unmoeglich', icon: 'Ban', de: 'unmöglich', pos: 'adj', ru: 'невозможный', note: 'ein unmögliches Ereignis — невозможное событие (вероятность 0).', example: { de: 'Eine Sieben zu würfeln ist unmöglich.', ru: 'Выбросить семёрку невозможно.', cloze: 'unmöglich' } },
    { id: 'mat-a21-05-sicher', icon: 'CircleCheck', de: 'sicher', pos: 'adj', ru: 'достоверный, точный; безопасный', note: 'ein sicheres Ereignis — достоверное событие (вероятность 1).', example: { de: 'Es ist sicher, dass die Augenzahl kleiner als sieben ist.', ru: 'Точно, что число очков меньше семи.', cloze: 'sicher' } },
    { id: 'mat-a21-05-ereignis', icon: 'Sparkles', de: 'Ereignis', pos: 'noun', article: 'das', plural: 'Ereignisse', ru: 'событие', note: 'Мн. ч. с удвоением s: die Ereignisse.', example: { de: 'Ein Gewinn ist ein seltenes Ereignis.', ru: 'Выигрыш — редкое событие.', cloze: 'Ereignis' } },
    { id: 'mat-a21-05-versuch', icon: 'FlaskConical', de: 'Versuch', pos: 'noun', article: 'der', plural: 'Versuche', ru: 'попытка; опыт, эксперимент', note: 'In der Mathematik: das Zufallsexperiment, ein Versuch — одно испытание.', example: { de: 'Beim dritten Versuch gewinnt Max.', ru: 'С третьей попытки Макс выигрывает.', cloze: 'Versuch' } },
    { id: 'mat-a21-05-gluecksrad', icon: 'LoaderPinwheel', imageQuery: 'wheel of fortune fair', de: 'Glücksrad', pos: 'noun', article: 'das', plural: 'Glücksräder', ru: 'колесо фортуны', parts: ['Glücks', 'rad'], example: { de: 'Das Glücksrad hat acht gleich große Felder.', ru: 'У колеса фортуны восемь одинаковых секторов.', cloze: 'Glücksrad' } },
    { id: 'mat-a21-05-los', icon: 'Ticket', imageQuery: 'raffle tickets', de: 'Los', pos: 'noun', article: 'das', plural: 'Lose', ru: 'лотерейный билет; жребий', note: 'das Los entscheidet — решает жребий.', example: { de: 'Ein Los kostet einen Euro.', ru: 'Один лотерейный билет стоит евро.', cloze: 'Los' } },
    { id: 'mat-a21-05-ziehen', icon: 'Hand', de: 'ziehen', pos: 'verb', ru: 'тянуть; вытягивать (билет)', forms: 'er zieht · hat gezogen', note: 'Сильный глагол: zog – gezogen. ein Los ziehen — тянуть билет.', example: { de: 'Max zieht drei Lose.', ru: 'Макс тянет три билета.', cloze: 'zieht' } },
    { id: 'mat-a21-05-gewinnchance', icon: 'Trophy', de: 'Gewinnchance', pos: 'noun', article: 'die', plural: 'Gewinnchancen', ru: 'шанс на выигрыш', parts: ['Gewinn', 'chance'], note: 'Chance читается по-французски: «шáнсе».', example: { de: 'Die Gewinnchance ist fünfundzwanzig Prozent.', ru: 'Шанс на выигрыш — двадцать пять процентов.', cloze: 'Gewinnchance' } },
    { id: 'mat-a21-05-treffer', icon: 'Target', de: 'Treffer', pos: 'noun', article: 'der', plural: 'Treffer', ru: 'попадание; выигрышный билет', note: 'treffen — попадать.', example: { de: 'Unter den Losen sind fünfzig Treffer.', ru: 'Среди билетов пятьдесят выигрышных.', cloze: 'Treffer' } },
    { id: 'mat-a21-05-niete', icon: 'CircleX', de: 'Niete', pos: 'noun', article: 'die', plural: 'Nieten', ru: 'пустой билет (без выигрыша)', note: 'В разговоре о человеке: eine Niete — неудачник.', example: { de: 'Leider war mein Los eine Niete.', ru: 'К сожалению, мой билет оказался пустым.', cloze: 'Niete' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wer würfelt eine Sechs?',
      de: `Am Sonntag spielen Lena und Tom ein Würfelspiel. Am Anfang braucht man eine Sechs, sonst darf man nicht starten. Tom würfelt dreimal und bekommt keine Sechs. Er ist sauer.

Lena erklärt: „Beim Würfeln entscheidet der Zufall. Jede Augenzahl von eins bis sechs ist gleich wahrscheinlich. Die Wahrscheinlichkeit für eine Sechs ist also ein Sechstel.“

Tom fragt: „Und wie wahrscheinlich ist eine Sieben?“ Lena lacht: „Das ist unmöglich, die Wahrscheinlichkeit ist null. Aber es ist sicher, dass du eine Zahl kleiner als sieben würfelst.“ Beim vierten Mal würfelt Tom endlich eine Sechs. Wahrscheinlich dauert das Spiel jetzt noch eine Stunde.`,
      ru: `В воскресенье Лена и Том играют в игру с кубиком. Вначале нужна шестёрка, иначе нельзя начать. Том бросает кубик три раза и не получает шестёрку. Он злится.

Лена объясняет: «При бросании кубика всё решает случай. Каждое число очков от одного до шести одинаково вероятно. Значит, вероятность шестёрки — одна шестая».

Том спрашивает: «А какова вероятность семёрки?» Лена смеётся: «Это невозможно, вероятность равна нулю. Но точно известно, что ты выбросишь число меньше семи». С четвёртого раза Том наконец выбрасывает шестёрку. Вероятно, игра теперь продлится ещё час.`,
      gloss: { sonntag: 'воскресенье', entscheidet: 'решает', spielen: 'играют', lena: 'Лена (имя)', tom: 'Том (имя)', würfelspiel: 'игра с кубиком', anfang: 'начало', braucht: 'нужна (man braucht)', sonst: 'иначе', darf: 'можно, разрешено', starten: 'начать, стартовать', dreimal: 'три раза', bekommt: 'получает', sauer: 'злой, сердитый; кислый', erklärt: 'объясняет', jede: 'каждое', von: 'от', bis: 'до', also: 'значит', sechstel: 'шестая часть', fragt: 'спрашивает', lacht: 'смеётся', aber: 'но', dass: 'что', kleiner: 'меньше', als: 'чем', würfelst: '(ты) выбросишь', vierten: 'четвёртый', mal: 'раз (beim vierten Mal — с четвёртого раза)', endlich: 'наконец', dauert: 'длится, продлится', jetzt: 'теперь', noch: 'ещё', wer: 'кто', wie: 'как', was: 'что', warum: 'почему' },
      questions: [
        { q: 'Warum ist Tom sauer?', ru: 'Почему Том злится?', options: ['Er würfelt keine Sechs.', 'Er verliert das Spiel.', 'Lena lacht über ihn.'], answer: 'Er würfelt keine Sechs.' },
        { q: 'Wie groß ist die Wahrscheinlichkeit für eine Sechs?', ru: 'Какова вероятность шестёрки?', options: ['Ein Sechstel', 'Die Hälfte', 'Null'], answer: 'Ein Sechstel' },
        { q: 'Was ist unmöglich?', ru: 'Что невозможно?', options: ['Eine Sieben zu würfeln', 'Eine Sechs zu würfeln', 'Eine Eins zu würfeln'], answer: 'Eine Sieben zu würfeln' },
      ],
      translate: [
        { de: 'Beim Würfeln entscheidet der Zufall.', ru: 'При бросании кубика всё решает случай.', wrongRu: ['При бросании кубика всё решает стратегия.', 'При игре в шахматы всё решает случай.'] },
        { de: 'Eine Sieben zu würfeln ist unmöglich.', ru: 'Выбросить семёрку невозможно.', wrongRu: ['Выбросить семёрку легко.', 'Выбросить шестёрку невозможно.'] },
        { de: 'Jede Augenzahl ist gleich wahrscheinlich.', ru: 'Каждое число очков одинаково вероятно.', wrongRu: ['Каждое число очков невозможно.', 'Шестёрка вероятнее других чисел.'] },
      ],
    },
    {
      lesson: 1, title: 'Das Schulfest',
      de: `Beim Schulfest gibt es eine Tombola. In der Box sind 200 Lose: 50 Treffer und 150 Nieten. Die Gewinnchance für ein Los ist also 50 von 200, das sind 25 Prozent.

Max zieht drei Lose. Das erste ist eine Niete, das zweite auch. Beim dritten Versuch hat er Glück: ein Treffer! Er gewinnt einen Kinogutschein.

Daneben steht ein Glücksrad mit acht gleich großen Feldern. Nur ein Feld ist der Hauptpreis. Die Wahrscheinlichkeit für dieses Ereignis ist ein Achtel. Sara dreht das Rad. Es bleibt zufällig auf dem Hauptpreis stehen! Alle jubeln. Max sagt: „Das ist kein Talent, das ist reiner Zufall.“`,
      ru: `На школьном празднике проходит лотерея. В коробке 200 билетов: 50 выигрышных и 150 пустых. Значит, шанс на выигрыш для одного билета — 50 из 200, это 25 процентов.

Макс тянет три билета. Первый — пустой, второй тоже. С третьей попытки ему везёт: выигрыш! Он получает сертификат в кино.

Рядом стоит колесо фортуны с восемью одинаковыми секторами. Только один сектор — главный приз. Вероятность этого события — одна восьмая. Сара крутит колесо. Оно случайно останавливается на главном призе! Все ликуют. Макс говорит: «Это не талант, это чистая случайность».`,
      gloss: { schulfest: 'школьный праздник', tombola: 'лотерея (на празднике)', box: 'коробка', von: 'из', also: 'значит', max: 'Макс (имя)', erste: 'первый', zweite: 'второй', auch: 'тоже', dritten: 'третьей', glück: 'удача, счастье (Glück haben — везти)', gewinnt: 'выигрывает', kinogutschein: 'сертификат в кино', daneben: 'рядом', steht: 'стоит', großen: 'больших (gleich großen — одинаковых)', feldern: 'полями, секторами', feld: 'поле, сектор', nur: 'только', hauptpreis: 'главный приз', dieses: 'этого', sara: 'Сара (имя)', dreht: 'крутит', rad: 'колесо', bleibt: 'остаётся (stehen bleiben — останавливаться)', stehen: 'стоять', alle: 'все', jubeln: 'ликуют', kein: 'не, никакой', talent: 'талант', reiner: 'чистый', wie: 'как', viele: 'сколько (wie viele)', was: 'что', welchem: 'каком', wo: 'где' },
      questions: [
        { q: 'Wie viele Treffer sind in der Box?', ru: 'Сколько выигрышных билетов в коробке?', options: ['50', '150', '200'], answer: '50' },
        { q: 'Was gewinnt Max?', ru: 'Что выигрывает Макс?', options: ['Einen Kinogutschein', 'Den Hauptpreis', 'Nichts'], answer: 'Einen Kinogutschein' },
        { q: 'Wie groß ist die Wahrscheinlichkeit für den Hauptpreis?', ru: 'Какова вероятность главного приза?', options: ['Ein Achtel', 'Ein Viertel', 'Die Hälfte'], answer: 'Ein Achtel' },
      ],
      translate: [
        { de: 'Die Gewinnchance ist fünfundzwanzig Prozent.', ru: 'Шанс на выигрыш — двадцать пять процентов.', wrongRu: ['Шанс на выигрыш — пятьдесят процентов.', 'Шанс на проигрыш — двадцать пять процентов.'] },
        { de: 'Das erste Los ist eine Niete.', ru: 'Первый билет — пустой.', wrongRu: ['Первый билет — выигрышный.', 'Последний билет — пустой.'] },
        { de: 'Das ist reiner Zufall.', ru: 'Это чистая случайность.', wrongRu: ['Это настоящий талант.', 'Это не случайность.'] },
      ],
    },
  ],
};
