import type { Module } from '../types.ts';

// A1.2 pflege 02: mobilisation — getting up, sitting, walker (lesson 0); walking in the corridor, stairs, lift (lesson 1).

export const module: Module = {
  id: 'pflege-a12-02-mobilisation', sphere: 'pflege', level: 'A1.2',
  title: 'Aufstehen und gehen', subtitle: 'Мобилизация: помочь пациенту встать, сесть и пройтись — медленно и безопасно.',
  words: [
    { id: 'pfl-a12-02-aufstehen', icon: 'ArrowUp', de: 'aufstehen', pos: 'verb', ru: 'вставать', forms: 'er steht auf · ist aufgestanden', note: 'Отделяемая приставка; перфект с sein: Ich bin aufgestanden.', example: { de: 'Heute stehen wir zusammen auf.', ru: 'Сегодня мы вместе встаём.', cloze: 'stehen' } },
    { id: 'pfl-a12-02-setzen', icon: 'Armchair', de: 'setzen', pos: 'verb', ru: 'сажать; (sich setzen) садиться', forms: 'er setzt sich · hat sich gesetzt', note: 'Setzen Sie sich bitte. — Садитесь, пожалуйста.', example: { de: 'Setzen Sie sich bitte auf die Bettkante.', ru: 'Сядьте, пожалуйста, на край кровати.', cloze: 'Setzen' } },
    { id: 'pfl-a12-02-bettkante', icon: 'BedSingle', de: 'Bettkante', pos: 'noun', article: 'die', plural: 'Bettkanten', ru: 'край кровати', parts: ['Bett', 'kante'], collocation: { de: 'an der Bettkante sitzen', ru: 'сидеть на краю кровати', accept: ['auf der Bettkante sitzen'] }, example: { de: 'Sie sitzt an der Bettkante.', ru: 'Она сидит на краю кровати.', cloze: 'Bettkante' } },
    { id: 'pfl-a12-02-langsam', icon: 'Snail', de: 'langsam', pos: 'adj', ru: 'медленный, медленно', note: 'Ganz langsam! — Совсем медленно! Противоположность — schnell.', example: { de: 'Stehen Sie bitte langsam auf.', ru: 'Вставайте, пожалуйста, медленно.', cloze: 'langsam' } },
    { id: 'pfl-a12-02-vorsichtig', icon: 'TriangleAlert', de: 'vorsichtig', pos: 'adj', ru: 'осторожный, осторожно', note: 'Vorsicht! — Осторожно!', example: { de: 'Seien Sie vorsichtig, der Boden ist nass.', ru: 'Будьте осторожны, пол мокрый.', cloze: 'vorsichtig' } },
    { id: 'pfl-a12-02-rollator', icon: 'ShoppingCart', imageQuery: 'rollator walker', de: 'Rollator', pos: 'noun', article: 'der', plural: 'Rollatoren', ru: 'ходунки на колёсах', example: { de: 'Mit dem Rollator geht es besser.', ru: 'С ходунками получается лучше.', cloze: 'Rollator' } },
    { id: 'pfl-a12-02-stuetzen', icon: 'HandHelping', de: 'stützen', pos: 'verb', ru: 'поддерживать, опираться', forms: 'er stützt · hat gestützt', note: 'sich stützen auf + Akk — опираться на что-то.', example: { de: 'Ich stütze Sie am Arm.', ru: 'Я поддержу вас под руку.', cloze: 'stütze' } },
    { id: 'pfl-a12-02-fallen', icon: 'ArrowDown', de: 'fallen', pos: 'verb', ru: 'падать', forms: 'er fällt · ist gefallen', note: 'Перфект с sein. hinfallen — упасть (на землю).', example: { de: 'Frau Wolf ist gestern gefallen.', ru: 'Госпожа Вольф вчера упала.', cloze: 'gefallen' } },

    { id: 'pfl-a12-02-flur', icon: 'MoveHorizontal', imageQuery: 'hospital corridor', de: 'Flur', pos: 'noun', article: 'der', plural: 'Flure', ru: 'коридор', example: { de: 'Wir gehen ein bisschen auf dem Flur.', ru: 'Мы немного пройдёмся по коридору.', cloze: 'Flur' } },
    { id: 'pfl-a12-02-laufen', icon: 'Footprints', de: 'laufen', pos: 'verb', ru: 'ходить; бегать', forms: 'er läuft · ist gelaufen', note: 'В разговоре laufen часто = gehen (ходить пешком).', example: { de: 'Herr Schmidt läuft schon allein.', ru: 'Господин Шмидт уже ходит сам.', cloze: 'läuft' } },
    { id: 'pfl-a12-02-schritt', icon: 'Footprints', de: 'Schritt', pos: 'noun', article: 'der', plural: 'Schritte', ru: 'шаг', note: 'Schritt für Schritt — шаг за шагом.', example: { de: 'Noch fünf Schritte bis zur Tür!', ru: 'Ещё пять шагов до двери!', cloze: 'Schritte' } },
    { id: 'pfl-a12-02-festhalten', icon: 'Grip', de: 'festhalten', pos: 'verb', ru: 'держать; (sich festhalten) держаться', forms: 'er hält fest · hat festgehalten', note: 'sich festhalten an + Dat: Halten Sie sich am Geländer fest.', example: { de: 'Halten Sie sich bitte gut fest.', ru: 'Держитесь, пожалуйста, крепко.', cloze: 'Halten' } },
    { id: 'pfl-a12-02-treppe', icon: 'ChartNoAxesColumnIncreasing', imageQuery: 'staircase', de: 'Treppe', pos: 'noun', article: 'die', plural: 'Treppen', ru: 'лестница', collocation: { de: 'die Treppe hochgehen', ru: 'подниматься по лестнице' }, example: { de: 'Die Treppe ist zu steil.', ru: 'Лестница слишком крутая.', cloze: 'Treppe' } },
    { id: 'pfl-a12-02-aufzug', icon: 'ArrowUpDown', imageQuery: 'hospital elevator', de: 'Aufzug', pos: 'noun', article: 'der', plural: 'Aufzüge', ru: 'лифт', note: 'Синоним — der Fahrstuhl.', collocation: { de: 'den Aufzug nehmen', ru: 'поехать на лифте' }, example: { de: 'Wir nehmen den Aufzug.', ru: 'Мы поедем на лифте.', cloze: 'Aufzug' } },
    { id: 'pfl-a12-02-gleichgewicht', icon: 'Scale', de: 'Gleichgewicht', pos: 'noun', article: 'das', ru: 'равновесие', parts: ['Gleich', 'gewicht'], collocation: { de: 'das Gleichgewicht verlieren', ru: 'потерять равновесие' }, example: { de: 'Er verliert leicht das Gleichgewicht.', ru: 'Он легко теряет равновесие.', cloze: 'Gleichgewicht' } },
    { id: 'pfl-a12-02-allein', icon: 'User', de: 'allein', pos: 'adv', ru: 'один, сам, без помощи', note: 'Bitte nicht allein aufstehen! — Пожалуйста, не вставайте без помощи!', example: { de: 'Bitte stehen Sie nicht allein auf.', ru: 'Пожалуйста, не вставайте без помощи.', cloze: 'allein' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ganz langsam',
      de: `Frau Wolf ist gestern in der Nacht gefallen. Sie wollte allein auf die Toilette gehen. Zum Glück hat sie nur einen blauen Fleck am Arm.

Heute hilft Olena ihr beim Aufstehen. „Setzen Sie sich zuerst auf die Bettkante“, sagt sie. „Und jetzt stehen Sie ganz langsam auf. Ich stütze Sie.“

Frau Wolf steht. Ihr ist ein bisschen schwindlig. Olena wartet. Dann bringt sie den Rollator. „Mit dem Rollator ist es sicher“, sagt sie. „Aber bitte seien Sie vorsichtig und stehen Sie in der Nacht nicht allein auf. Klingeln Sie!“`,
      ru: `Госпожа Вольф вчера ночью упала. Она хотела сама пойти в туалет. К счастью, у неё только синяк на руке.

Сегодня Олена помогает ей встать. «Сначала сядьте на край кровати, — говорит она. — А теперь вставайте совсем медленно. Я вас поддержу».

Госпожа Вольф стоит. У неё немного кружится голова. Олена ждёт. Потом она приносит ходунки. «С ходунками безопасно, — говорит она. — Но, пожалуйста, будьте осторожны и ночью не вставайте одна. Звоните!»`,
      gloss: { wolf: 'Вольф (фамилия)', olena: 'Олена (имя)', frau: 'госпожа', nacht: 'ночь', wollte: 'хотела', gehen: 'идти', glück: '(zum Glück) к счастью', zum: '(zum Glück) к счастью', nur: 'только', blauen: 'синий', fleck: 'пятно; (blauer Fleck) синяк', am: 'на (an + dem)', heute: 'сегодня', hilft: 'помогает', ihr: 'ей', beim: 'при (bei + dem)', aufstehen: 'вставать; (beim Aufstehen) вставая', zuerst: 'сначала', sagt: 'говорит', jetzt: 'теперь', steht: 'стоит', schwindlig: 'кружится голова', bisschen: '(ein bisschen) немного', wartet: 'ждёт', dann: 'потом', bringt: 'приносит', sicher: 'безопасно, надёжно', aber: 'но', seien: 'будьте', klingeln: 'звоните (кнопкой вызова)', was: 'что', wann: 'когда', wer: 'кто', ist: 'есть, является', bein: 'нога', kopf: 'голова', morgen: 'утро; (am Morgen) утром', abend: 'вечер; (am Abend) вечером' },
      questions: [
        { q: 'Wann ist Frau Wolf gefallen?', ru: 'Когда упала госпожа Вольф?', options: ['In der Nacht', 'Am Morgen', 'Am Abend'], answer: 'In der Nacht' },
        { q: 'Wo hat Frau Wolf einen blauen Fleck?', ru: 'Где у госпожи Вольф синяк?', options: ['Am Arm', 'Am Bein', 'Am Kopf'], answer: 'Am Arm' },
        { q: 'Was bringt Olena?', ru: 'Что приносит Олена?', options: ['Den Rollator', 'Den Rollstuhl', 'Die Klingel'], answer: 'Den Rollator' },
      ],
      translate: [
        { de: 'Stehen Sie bitte langsam auf.', ru: 'Вставайте, пожалуйста, медленно.', wrongRu: ['Вставайте, пожалуйста, быстро.', 'Садитесь, пожалуйста, медленно.'] },
        { de: 'Ich stütze Sie am Arm.', ru: 'Я поддержу вас под руку.', wrongRu: ['Вы поддержите меня под руку.', 'Я поддержу вас за спину.'] },
        { de: 'Bitte stehen Sie nicht allein auf.', ru: 'Пожалуйста, не вставайте без помощи.', wrongRu: ['Пожалуйста, вставайте сами.', 'Пожалуйста, не ходите без помощи.'] },
      ],
    },
    {
      lesson: 1, title: 'Ein Spaziergang auf dem Flur',
      de: `Herr Schmidt läuft schon gut. Heute möchte er zum Fenster am Ende vom Flur gehen. Tom geht mit ihm. „Halten Sie sich am Rollator gut fest“, sagt Tom.

Schritt für Schritt gehen sie den Flur entlang. Nach zwanzig Schritten macht Herr Schmidt eine Pause. „Mein Gleichgewicht ist nicht so gut“, sagt er.

Am Fenster ist eine Treppe. Herr Schmidt fragt: „Können wir die Treppe nehmen?“ Tom lacht: „Nein, heute noch nicht. Wir nehmen den Aufzug zur Cafeteria. Dort gibt es Kuchen.“`,
      ru: `Господин Шмидт уже хорошо ходит. Сегодня он хочет дойти до окна в конце коридора. Том идёт с ним. «Крепко держитесь за ходунки», — говорит Том.

Шаг за шагом они идут по коридору. Через двадцать шагов господин Шмидт делает перерыв. «Равновесие у меня не очень», — говорит он.

У окна лестница. Господин Шмидт спрашивает: «Можем мы пойти по лестнице?» Том смеётся: «Нет, сегодня ещё нет. Мы поедем на лифте в кафетерий. Там есть пирог».`,
      gloss: { schritten: 'шагов (дат. мн.)', fahren: 'ехать, едут', schmidt: 'Шмидт (фамилия)', tom: 'Том (имя)', herr: 'господин', schon: 'уже', gut: 'хорошо', heute: 'сегодня', möchte: 'хочет', zum: 'к, до (zu + dem)', fenster: 'окно', ende: 'конец', vom: 'от, из (von + dem)', gehen: 'идти', geht: 'идёт', mit: 'с', ihm: 'ним', sagt: 'говорит', für: '(Schritt für Schritt) шаг за шагом', entlang: 'вдоль; (den Flur entlang) по коридору', nach: 'через, после', zwanzig: 'двадцать', macht: 'делает', pause: 'перерыв', so: 'так', fragt: 'спрашивает', können: 'можем', nehmen: 'брать; (die Treppe nehmen) пойти по лестнице', lacht: 'смеётся', noch: 'ещё', zur: 'в, к (zu + der)', cafeteria: 'кафетерий', dort: 'там', gibt: '(es gibt) есть', kuchen: 'пирог', spaziergang: 'прогулка', wohin: 'куда', was: 'что', wie: 'как', viele: 'много; (wie viele) сколько', zehn: 'десять', fünf: 'пять', zimmer: 'палата', bad: 'ванная', rollstuhl: 'инвалидная коляска', tür: 'дверь' },
      questions: [
        { q: 'Wohin möchte Herr Schmidt gehen?', ru: 'Куда хочет дойти господин Шмидт?', options: ['Zum Fenster am Ende vom Flur', 'Ins Bad', 'Zur Tür'], answer: 'Zum Fenster am Ende vom Flur' },
        { q: 'Nach wie vielen Schritten macht er eine Pause?', ru: 'Через сколько шагов он делает перерыв?', options: ['Nach zwanzig', 'Nach zehn', 'Nach fünf'], answer: 'Nach zwanzig' },
        { q: 'Wie fahren sie zur Cafeteria?', ru: 'Как они едут в кафетерий?', options: ['Mit dem Aufzug', 'Über die Treppe', 'Mit dem Rollstuhl'], answer: 'Mit dem Aufzug' },
      ],
      translate: [
        { de: 'Halten Sie sich gut fest.', ru: 'Держитесь крепко.', wrongRu: ['Отпустите, пожалуйста.', 'Держите меня крепко.'] },
        { de: 'Wir nehmen den Aufzug.', ru: 'Мы поедем на лифте.', wrongRu: ['Мы пойдём по лестнице.', 'Мы ждём лифт.'] },
        { de: 'Mein Gleichgewicht ist nicht so gut.', ru: 'Равновесие у меня не очень.', wrongRu: ['Ноги у меня не очень.', 'Равновесие у меня отличное.'] },
      ],
    },
  ],
};
