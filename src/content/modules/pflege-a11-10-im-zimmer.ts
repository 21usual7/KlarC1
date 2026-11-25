import type { Module } from '../types.ts';

// A1.1 pflege 10: the patient room — window, door, light, open and close (lesson 0); TV, glasses, noise at night (lesson 1).

export const module: Module = {
  id: 'pflege-a11-10-im-zimmer', sphere: 'pflege', level: 'A1.1',
  title: 'Im Patientenzimmer', subtitle: 'Окно, дверь, свет, очки, телевизор: вещи в палате и простые просьбы пациентов.',
  words: [
    { id: 'pfl-a11-10-fenster', icon: 'AppWindow', imageQuery: 'hospital window', de: 'Fenster', pos: 'noun', article: 'das', plural: 'Fenster', ru: 'окно', collocation: { de: 'das Fenster öffnen', ru: 'открыть окно', accept: ['das Fenster aufmachen'] }, example: { de: 'Darf ich das Fenster öffnen?', ru: 'Можно мне открыть окно?', cloze: 'Fenster' } },
    { id: 'pfl-a11-10-tuer', icon: 'DoorClosed', de: 'Tür', pos: 'noun', article: 'die', plural: 'Türen', ru: 'дверь', collocation: { de: 'die Tür schließen', ru: 'закрыть дверь', accept: ['die Tür zumachen'] }, example: { de: 'Bitte schließen Sie die Tür.', ru: 'Пожалуйста, закройте дверь.', cloze: 'Tür' } },
    { id: 'pfl-a11-10-tisch', icon: 'Table', de: 'Tisch', pos: 'noun', article: 'der', plural: 'Tische', ru: 'стол', note: 'der Nachttisch — тумбочка у кровати.', example: { de: 'Das Glas steht auf dem Tisch.', ru: 'Стакан стоит на столе.', cloze: 'Tisch' } },
    { id: 'pfl-a11-10-stuhl', icon: 'Armchair', imageQuery: 'chair', de: 'Stuhl', pos: 'noun', article: 'der', plural: 'Stühle', ru: 'стул', example: { de: 'Setzen Sie sich bitte auf den Stuhl.', ru: 'Сядьте, пожалуйста, на стул.', cloze: 'Stuhl' } },
    { id: 'pfl-a11-10-licht', icon: 'Lightbulb', de: 'Licht', pos: 'noun', article: 'das', plural: 'Lichter', ru: 'свет', collocation: { de: 'das Licht ausmachen', ru: 'выключить свет', accept: ['das Licht anmachen'] }, example: { de: 'Soll ich das Licht ausmachen?', ru: 'Мне выключить свет?', cloze: 'Licht' } },
    { id: 'pfl-a11-10-schrank', icon: 'Archive', imageQuery: 'wardrobe', de: 'Schrank', pos: 'noun', article: 'der', plural: 'Schränke', ru: 'шкаф', example: { de: 'Ihre Tasche ist im Schrank.', ru: 'Ваша сумка в шкафу.', cloze: 'Schrank' } },
    { id: 'pfl-a11-10-oeffnen', icon: 'LockOpen', de: 'öffnen', pos: 'verb', ru: 'открывать', forms: 'er öffnet · hat geöffnet', note: 'Разговорно: aufmachen.', example: { de: 'Olena öffnet das Fenster.', ru: 'Олена открывает окно.', cloze: 'öffnet' } },
    { id: 'pfl-a11-10-schliessen', icon: 'Lock', de: 'schließen', pos: 'verb', ru: 'закрывать', forms: 'er schließt · hat geschlossen', note: 'Разговорно: zumachen.', example: { de: 'Tom schließt die Tür.', ru: 'Том закрывает дверь.', cloze: 'schließt' } },

    { id: 'pfl-a11-10-fernseher', icon: 'Tv', imageQuery: 'television hospital room', de: 'Fernseher', pos: 'noun', article: 'der', plural: 'Fernseher', ru: 'телевизор', note: 'fernsehen — смотреть телевизор.', example: { de: 'Der Fernseher ist zu laut.', ru: 'Телевизор слишком громкий.', cloze: 'Fernseher' } },
    { id: 'pfl-a11-10-kissen', icon: 'Cloud', imageQuery: 'pillow', de: 'Kissen', pos: 'noun', article: 'das', plural: 'Kissen', ru: 'подушка', example: { de: 'Möchten Sie noch ein Kissen?', ru: 'Хотите ещё одну подушку?', cloze: 'Kissen' } },
    { id: 'pfl-a11-10-brille', icon: 'Glasses', imageQuery: 'reading glasses', de: 'Brille', pos: 'noun', article: 'die', plural: 'Brillen', ru: 'очки', note: 'По-немецки ед. ч.: eine Brille — одни очки.', example: { de: 'Wo ist meine Brille?', ru: 'Где мои очки?', cloze: 'Brille' } },
    { id: 'pfl-a11-10-handy', icon: 'Smartphone', de: 'Handy', pos: 'noun', article: 'das', plural: 'Handys', ru: 'мобильный телефон', example: { de: 'Mein Handy ist leer.', ru: 'У меня сел телефон.', cloze: 'Handy' } },
    { id: 'pfl-a11-10-tasche', icon: 'ShoppingBag', imageQuery: 'handbag', de: 'Tasche', pos: 'noun', article: 'die', plural: 'Taschen', ru: 'сумка; карман', example: { de: 'Die Tasche liegt unter dem Bett.', ru: 'Сумка лежит под кроватью.', cloze: 'Tasche' } },
    { id: 'pfl-a11-10-laut', icon: 'Volume2', de: 'laut', pos: 'adj', ru: 'громкий, громко', example: { de: 'Der Mann in Zimmer drei ist sehr laut.', ru: 'Мужчина в палате три очень шумный.', cloze: 'laut' } },
    { id: 'pfl-a11-10-leise', icon: 'VolumeX', de: 'leise', pos: 'adj', ru: 'тихий, тихо', collocation: { de: 'leise sprechen', ru: 'говорить тихо' }, example: { de: 'Bitte sprechen Sie leise.', ru: 'Пожалуйста, говорите тихо.', cloze: 'leise' } },
    { id: 'pfl-a11-10-stoeren', icon: 'Ban', de: 'stören', pos: 'verb', ru: 'мешать, беспокоить', forms: 'er stört · hat gestört', note: 'Entschuldigung, darf ich kurz stören? — Извините, можно вас побеспокоить?', example: { de: 'Das Licht stört mich.', ru: 'Свет мне мешает.', cloze: 'stört' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Frische Luft',
      de: `Es ist warm im Zimmer. Herr Schmidt sagt: „Olena, können Sie bitte das Fenster öffnen?“ Olena öffnet das Fenster. Jetzt ist die Luft frisch.

Dann kommt Doktor Wagner. Er setzt sich auf den Stuhl neben dem Bett. Olena schließt die Tür. Der Arzt sagt: „Herr Schmidt, morgen können Sie nach Hause gehen.“

Herr Schmidt ist froh. Am Abend packt er seine Sachen. Die Kleidung ist im Schrank, die Bücher liegen auf dem Tisch. Um zweiundzwanzig Uhr macht Olena das Licht aus.`,
      ru: `В палате тепло. Господин Шмидт говорит: «Олена, вы можете, пожалуйста, открыть окно?» Олена открывает окно. Теперь воздух свежий.

Потом приходит доктор Вагнер. Он садится на стул рядом с кроватью. Олена закрывает дверь. Врач говорит: «Господин Шмидт, завтра вы можете идти домой».

Господин Шмидт рад. Вечером он собирает вещи. Одежда в шкафу, книги лежат на столе. В двадцать два часа Олена выключает свет.`,
      gloss: { sonntag: 'воскресенье', olena: 'Олена (имя)', schmidt: 'Шмидт (фамилия)', wagner: 'Вагнер (фамилия)', doktor: 'доктор', herr: 'господин', sagt: 'говорит', können: 'можете', jetzt: 'теперь, сейчас', luft: 'воздух', frisch: 'свежий', dann: 'потом, затем', kommt: 'приходит', setzt: '(setzt sich) садится', neben: 'рядом с', nach: '(nach Hause) домой', hause: '(nach Hause) домой', gehen: 'идти', abend: 'вечер', packt: 'упаковывает, собирает', seine: 'свои', sachen: 'вещи', bücher: 'книги', liegen: 'лежат', zweiundzwanzig: 'двадцать два', macht: 'делает; (macht … aus) выключает', aus: '(macht … aus) выключает', was: 'что', wo: 'где', wann: 'когда', wer: 'кто', frische: 'свежий' },
      questions: [
        { q: 'Was öffnet Olena?', ru: 'Что открывает Олена?', options: ['Das Fenster', 'Die Tür', 'Den Schrank'], answer: 'Das Fenster' },
        { q: 'Wann kann Herr Schmidt nach Hause gehen?', ru: 'Когда господин Шмидт может идти домой?', options: ['Morgen', 'Heute', 'Am Sonntag'], answer: 'Morgen' },
        { q: 'Wo liegen die Bücher?', ru: 'Где лежат книги?', options: ['Auf dem Tisch', 'Im Schrank', 'Auf dem Stuhl'], answer: 'Auf dem Tisch' },
      ],
      translate: [
        { de: 'Können Sie bitte das Fenster öffnen?', ru: 'Вы можете, пожалуйста, открыть окно?', wrongRu: ['Вы можете, пожалуйста, закрыть окно?', 'Вы можете, пожалуйста, открыть дверь?'] },
        { de: 'Olena schließt die Tür.', ru: 'Олена закрывает дверь.', wrongRu: ['Олена открывает дверь.', 'Олена закрывает окно.'] },
        { de: 'Die Kleidung ist im Schrank.', ru: 'Одежда в шкафу.', wrongRu: ['Одежда на стуле.', 'Сумка в шкафу.'] },
      ],
    },
    {
      lesson: 1, title: 'Eine laute Nacht',
      de: `In der Nacht ist es auf Station drei nicht ruhig. In Zimmer vier ist der Fernseher sehr laut. Frau Wolf klingelt. Sie sagt: „Der Fernseher stört mich. Ich kann nicht schlafen.“

Olena geht in Zimmer vier. Dort sitzt ein Mann im Bett. Er sucht seine Brille. Olena findet die Brille in seiner Tasche. Dann sagt sie: „Bitte machen Sie den Fernseher leise.“

Danach bringt sie Frau Wolf ein neues Kissen. Frau Wolf legt ihr Handy auf den Tisch und schläft endlich.`,
      ru: `Ночью в третьем отделении неспокойно. В палате четыре очень громко работает телевизор. Госпожа Вольф нажимает кнопку вызова. Она говорит: «Телевизор мне мешает. Я не могу спать».

Олена идёт в палату четыре. Там в кровати сидит мужчина. Он ищет свои очки. Олена находит очки в его сумке. Потом она говорит: «Пожалуйста, сделайте телевизор потише».

После этого она приносит госпоже Вольф новую подушку. Госпожа Вольф кладёт телефон на стол и наконец засыпает.`,
      gloss: { olena: 'Олена (имя)', wolf: 'Вольф (фамилия)', frau: 'госпожа', nacht: 'ночь', drei: 'три', vier: 'четыре', klingelt: 'нажимает кнопку вызова', sagt: 'говорит', kann: 'могу', geht: 'идёт', dort: 'там', sitzt: 'сидит', sucht: 'ищет', seine: 'свои', findet: 'находит', seiner: 'его (ж. р., дат.)', dann: 'потом, затем', machen: 'сделайте', danach: 'после этого', bringt: 'приносит', neues: 'новую', legt: 'кладёт', schläft: 'спит; засыпает', endlich: 'наконец', was: 'что', wo: 'где', wer: 'кто', warum: 'почему', fenster: 'окно', zimmer: 'палата, комната' },
      questions: [
        { q: 'Was ist in Zimmer vier laut?', ru: 'Что громко в палате четыре?', options: ['Der Fernseher', 'Das Handy', 'Das Fenster'], answer: 'Der Fernseher' },
        { q: 'Wo findet Olena die Brille?', ru: 'Где Олена находит очки?', options: ['In der Tasche', 'Auf dem Tisch', 'Unter dem Bett'], answer: 'In der Tasche' },
        { q: 'Was bringt Olena Frau Wolf?', ru: 'Что Олена приносит госпоже Вольф?', options: ['Ein Kissen', 'Eine Brille', 'Ein Handy'], answer: 'Ein Kissen' },
      ],
      translate: [
        { de: 'Der Fernseher stört mich.', ru: 'Телевизор мне мешает.', wrongRu: ['Телевизор мне нравится.', 'Свет мне мешает.'] },
        { de: 'Wo ist meine Brille?', ru: 'Где мои очки?', wrongRu: ['Где мой телефон?', 'Где его очки?'] },
        { de: 'Bitte machen Sie den Fernseher leise.', ru: 'Пожалуйста, сделайте телевизор потише.', wrongRu: ['Пожалуйста, сделайте телевизор погромче.', 'Пожалуйста, выключите свет.'] },
      ],
    },
  ],
};
