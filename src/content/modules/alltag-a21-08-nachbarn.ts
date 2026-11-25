import type { Module } from '../types.ts';

// A2.1 alltag 08: neighbours — house rules, quiet hours, noise (lesson 0); stairwell, bins, courtyard, accepting parcels, conflict (lesson 1).

export const module: Module = {
  id: 'alltag-a21-08-nachbarn', sphere: 'alltag', level: 'A2.1',
  title: 'Nachbarn und Hausordnung', subtitle: 'Соседи и правила дома: время тишины, шум, подъезд, мусорные баки, двор и как решить спор.',
  words: [
    { id: 'all-a21-08-hausordnung', icon: 'ScrollText', de: 'Hausordnung', pos: 'noun', article: 'die', plural: 'Hausordnungen', ru: 'правила внутреннего распорядка дома', parts: ['Haus', 'ordnung'], example: { de: 'Die Hausordnung hängt im Treppenhaus.', ru: 'Правила дома висят в подъезде.', cloze: 'Hausordnung' } },
    { id: 'all-a21-08-ruhezeit', icon: 'Moon', de: 'Ruhezeit', pos: 'noun', article: 'die', plural: 'Ruhezeiten', ru: 'время тишины', parts: ['Ruhe', 'zeit'], note: 'Обычно 22:00–6:00 и воскресенье весь день.', example: { de: 'Die Ruhezeit beginnt um zweiundzwanzig Uhr.', ru: 'Время тишины начинается в двадцать два часа.', cloze: 'Ruhezeit' } },
    { id: 'all-a21-08-laerm', icon: 'Volume2', de: 'Lärm', pos: 'noun', article: 'der', ru: 'шум', example: { de: 'Der Lärm von oben stört uns.', ru: 'Нам мешает шум сверху.', cloze: 'Lärm' } },
    { id: 'all-a21-08-laut', icon: 'Volume2', de: 'laut', pos: 'adj', ru: 'громкий, громко', example: { de: 'Die Musik ist zu laut.', ru: 'Музыка слишком громкая.', cloze: 'laut' } },
    { id: 'all-a21-08-leise', icon: 'VolumeX', de: 'leise', pos: 'adj', ru: 'тихий, тихо', example: { de: 'Bitte seid nach zehn Uhr leise.', ru: 'Пожалуйста, после десяти ведите себя тихо.', cloze: 'leise' } },
    { id: 'all-a21-08-stoeren', icon: 'Ban', de: 'stören', pos: 'verb', ru: 'мешать, беспокоить', forms: 'er stört · hat gestört', example: { de: 'Entschuldigung, stören wir Sie?', ru: 'Извините, мы вам мешаем?', cloze: 'stören' } },
    { id: 'all-a21-08-ruecksicht', icon: 'HeartHandshake', de: 'Rücksicht', pos: 'noun', article: 'die', ru: 'внимание, уважение к другим', note: 'Rücksicht nehmen auf + Akk — считаться с кем-то.', example: { de: 'Nehmen Sie bitte Rücksicht auf die Nachbarn.', ru: 'Пожалуйста, считайтесь с соседями.', cloze: 'Rücksicht' } },
    { id: 'all-a21-08-streit', icon: 'Swords', de: 'Streit', pos: 'noun', article: 'der', plural: 'Streitigkeiten', ru: 'ссора, спор', example: { de: 'Wir wollen keinen Streit mit den Nachbarn.', ru: 'Мы не хотим ссориться с соседями.', cloze: 'Streit' } },

    { id: 'all-a21-08-treppenhaus', icon: 'ChartNoAxesColumnIncreasing', de: 'Treppenhaus', pos: 'noun', article: 'das', plural: 'Treppenhäuser', ru: 'подъезд, лестничная клетка', parts: ['Treppen', 'haus'], example: { de: 'Im Treppenhaus darf man keine Fahrräder abstellen.', ru: 'В подъезде нельзя ставить велосипеды.', cloze: 'Treppenhaus' } },
    { id: 'all-a21-08-keller', icon: 'ArrowDownToLine', de: 'Keller', pos: 'noun', article: 'der', plural: 'Keller', ru: 'подвал', example: { de: 'Die Fahrräder stehen im Keller.', ru: 'Велосипеды стоят в подвале.', cloze: 'Keller' } },
    { id: 'all-a21-08-muelltonne', icon: 'Trash2', imageQuery: 'garbage bins germany', de: 'Mülltonne', pos: 'noun', article: 'die', plural: 'Mülltonnen', ru: 'мусорный бак', parts: ['Müll', 'tonne'], note: 'Цвета: синий — бумага, коричневый — био, жёлтый — упаковка, чёрный/серый — остальное.', example: { de: 'Das Papier kommt in die blaue Mülltonne.', ru: 'Бумагу выбрасывают в синий бак.', cloze: 'Mülltonne' } },
    { id: 'all-a21-08-hof', icon: 'Trees', de: 'Hof', pos: 'noun', article: 'der', plural: 'Höfe', ru: 'двор', example: { de: 'Die Kinder spielen im Hof.', ru: 'Дети играют во дворе.', cloze: 'Hof' } },
    { id: 'all-a21-08-grillen', icon: 'Flame', de: 'grillen', pos: 'verb', ru: 'жарить на гриле', forms: 'er grillt · hat gegrillt', example: { de: 'Darf man auf dem Balkon grillen?', ru: 'Можно жарить гриль на балконе?', cloze: 'grillen' } },
    { id: 'all-a21-08-annehmen', icon: 'Package', de: 'annehmen', pos: 'verb', ru: 'принимать (посылку); предполагать', forms: 'er nimmt an · hat angenommen', example: { de: 'Können Sie ein Paket für mich annehmen?', ru: 'Можете принять посылку для меня?', cloze: 'annehmen' } },
    { id: 'all-a21-08-zettel', icon: 'StickyNote', de: 'Zettel', pos: 'noun', article: 'der', plural: 'Zettel', ru: 'записка, листок', example: { de: 'An der Tür hängt ein Zettel.', ru: 'На двери висит записка.', cloze: 'Zettel' } },
    { id: 'all-a21-08-freundlich', icon: 'Smile', de: 'freundlich', pos: 'adj', ru: 'дружелюбный, вежливый', example: { de: 'Sprechen Sie freundlich mit dem Nachbarn.', ru: 'Говорите с соседом вежливо.', cloze: 'freundlich' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Zu laut?',
      de: `An einem Freitagabend feiern Amir und Leyla mit Freunden. Sie hören Musik und lachen. Um halb elf klingelt es. Vor der Tür steht Herr Krüger von oben. Er ist nicht freundlich.

„Es ist halb elf! Die Ruhezeit beginnt um zweiundzwanzig Uhr. Der Lärm stört mich. Ich muss morgen früh arbeiten.“ Amir entschuldigt sich: „Das wussten wir nicht. Wir sind sofort leise.“

Am nächsten Tag liest Amir die Hausordnung im Treppenhaus. Dort steht: Von zweiundzwanzig bis sechs Uhr und am Sonntag sollen alle Rücksicht nehmen und leise sein.`,
      ru: `В пятницу вечером Амир и Лейла празднуют с друзьями. Они слушают музыку и смеются. В половине одиннадцатого звонят в дверь. За дверью стоит господин Крюгер сверху. Он недружелюбен.

«Половина одиннадцатого! Время тишины начинается в двадцать два часа. Шум мне мешает. Мне завтра рано на работу». Амир извиняется: «Мы этого не знали. Сейчас же будем тише».

На следующий день Амир читает правила дома в подъезде. Там написано: с двадцати двух до шести часов и в воскресенье все должны считаться с другими и соблюдать тишину.`,
      gloss: { freunden: 'друзьями', sonntag: 'воскресенье', amir: 'Амир (имя)', leyla: 'Лейла (имя)', krüger: 'Крюгер (фамилия)', freitagabend: 'вечер пятницы', hören: 'слушают', lachen: 'смеются', klingelt: '(es klingelt) звонят', oben: 'сверху', wussten: 'знали', entschuldigt: '(entschuldigt sich) извиняется', zweiundzwanzig: 'двадцать два' },
      questions: [
        { q: 'Wann klingelt Herr Krüger?', ru: 'Когда звонит господин Крюгер?', options: ['Um halb elf', 'Um acht Uhr', 'Um Mitternacht'], answer: 'Um halb elf' },
        { q: 'Wann beginnt die Ruhezeit?', ru: 'Когда начинается время тишины?', options: ['Um zweiundzwanzig Uhr', 'Um zwanzig Uhr', 'Um Mitternacht'], answer: 'Um zweiundzwanzig Uhr' },
        { q: 'Wo hängt die Hausordnung?', ru: 'Где висят правила дома?', options: ['Im Treppenhaus', 'Im Keller', 'In der Wohnung'], answer: 'Im Treppenhaus' },
      ],
      translate: [
        { de: 'Der Lärm stört mich.', ru: 'Шум мне мешает.', wrongRu: ['Музыка мне нравится.', 'Шум мне не мешает.'] },
        { de: 'Wir sind sofort leise.', ru: 'Мы сейчас же будем тише.', wrongRu: ['Мы сейчас же уйдём.', 'Мы будем громче.'] },
        { de: 'Die Ruhezeit beginnt um zehn Uhr.', ru: 'Время тишины начинается в десять часов.', wrongRu: ['Время тишины заканчивается в десять часов.', 'Праздник начинается в десять часов.'] },
      ],
    },
    {
      lesson: 1, title: 'Gute Nachbarschaft',
      de: `Amir möchte keinen Streit. Er schreibt einen Zettel und hängt ihn an Herrn Krügers Tür: „Entschuldigung für den Lärm am Freitag. Wenn Sie ein Paket bekommen und nicht zu Hause sind, nehmen wir es gern für Sie an.“

Eine Woche später klingelt Herr Krüger wieder. Diesmal lächelt er. „Danke für den Zettel. Sie haben wirklich ein Paket für mich angenommen!“

Herr Krüger zeigt Amir den Hof und den Keller. „Die Fahrräder stehen im Keller, nicht im Treppenhaus. Und der Müll: Papier kommt in die blaue Mülltonne.“ Im Sommer grillen alle Nachbarn zusammen im Hof.`,
      ru: `Амир не хочет ссоры. Он пишет записку и вешает её на дверь господина Крюгера: «Извините за шум в пятницу. Если вы получите посылку и вас не будет дома, мы с удовольствием её примем».

Через неделю господин Крюгер снова звонит. В этот раз он улыбается. «Спасибо за записку. Вы действительно приняли для меня посылку!»

Господин Крюгер показывает Амиру двор и подвал. «Велосипеды стоят в подвале, не в подъезде. И мусор: бумага — в синий бак». Летом все соседи вместе жарят гриль во дворе.`,
      gloss: { gelbe: 'жёлтый', braune: 'коричневый', herrn: 'господину (дат.)', entschuldigung: 'извините', freitag: 'пятница', klingelt: 'звенит (звонок)', papier: 'бумага', sommer: 'лето', amir: 'Амир (имя)', krüger: 'Крюгер (фамилия)', krügers: 'Крюгера (чей?)', hängt: 'вешает', diesmal: 'в этот раз', lächelt: 'улыбается', wirklich: 'действительно', blaue: 'синий', nachbarschaft: 'соседство' },
      questions: [
        { q: 'Was schreibt Amir auf den Zettel?', ru: 'Что Амир пишет в записке?', options: ['Eine Entschuldigung und ein Angebot', 'Eine Beschwerde', 'Eine Einladung'], answer: 'Eine Entschuldigung und ein Angebot' },
        { q: 'Wo stehen die Fahrräder?', ru: 'Где стоят велосипеды?', options: ['Im Keller', 'Im Treppenhaus', 'Im Hof'], answer: 'Im Keller' },
        { q: 'In welche Mülltonne kommt Papier?', ru: 'В какой бак бумагу?', options: ['In die blaue', 'In die gelbe', 'In die braune'], answer: 'In die blaue' },
      ],
      translate: [
        { de: 'Wir wollen keinen Streit.', ru: 'Мы не хотим ссоры.', wrongRu: ['Мы хотим поговорить.', 'Мы не хотим шума.'] },
        { de: 'Können Sie ein Paket für mich annehmen?', ru: 'Можете принять посылку для меня?', wrongRu: ['Можете отправить посылку за меня?', 'Можете открыть посылку?'] },
        { de: 'Die Kinder spielen im Hof.', ru: 'Дети играют во дворе.', wrongRu: ['Дети играют в подвале.', 'Дети играют в парке.'] },
      ],
    },
  ],
};
