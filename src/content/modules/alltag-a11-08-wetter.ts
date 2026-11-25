import type { Module } from '../types.ts';

// A1.1 alltag 08: weather — sun, rain, snow, cold (lesson 0); clothes for the weather (lesson 1).

export const module: Module = {
  id: 'alltag-a11-08-wetter', sphere: 'alltag', level: 'A1.1',
  title: 'Wetter und Kleidung', subtitle: 'Погода и одежда: солнце, дождь, снег, куртка, шапка и зонт.',
  words: [
    { id: 'all-a11-08-wetter', icon: 'CloudSun', de: 'Wetter', pos: 'noun', article: 'das', ru: 'погода', note: 'Wie ist das Wetter? — Какая погода?', example: { de: 'Wie ist das Wetter heute?', ru: 'Какая сегодня погода?', cloze: 'Wetter' } },
    { id: 'all-a11-08-sonne', icon: 'Sun', de: 'Sonne', pos: 'noun', article: 'die', plural: 'Sonnen', ru: 'солнце', note: 'Die Sonne scheint. — Светит солнце.', example: { de: 'Heute scheint die Sonne.', ru: 'Сегодня светит солнце.', cloze: 'Sonne' } },
    { id: 'all-a11-08-regen', icon: 'CloudRain', de: 'Regen', pos: 'noun', article: 'der', ru: 'дождь', example: { de: 'Im Herbst gibt es viel Regen.', ru: 'Осенью много дождя.', cloze: 'Regen' } },
    { id: 'all-a11-08-regnen', icon: 'CloudRain', de: 'regnen', pos: 'verb', ru: 'идти (о дожде)', forms: 'es regnet · hat geregnet', example: { de: 'Es regnet schon wieder.', ru: 'Опять идёт дождь.', cloze: 'regnet' } },
    { id: 'all-a11-08-schnee', icon: 'Snowflake', de: 'Schnee', pos: 'noun', article: 'der', ru: 'снег', note: 'Es schneit. — Идёт снег.', example: { de: 'Die Kinder spielen im Schnee.', ru: 'Дети играют в снегу.', cloze: 'Schnee' } },
    { id: 'all-a11-08-kalt', icon: 'ThermometerSnowflake', de: 'kalt', pos: 'adj', ru: 'холодный, холодно', example: { de: 'Im Winter ist es kalt.', ru: 'Зимой холодно.', cloze: 'kalt' } },
    { id: 'all-a11-08-warm', icon: 'ThermometerSun', de: 'warm', pos: 'adj', ru: 'тёплый, тепло', example: { de: 'Im Sommer ist es warm.', ru: 'Летом тепло.', cloze: 'warm' } },
    { id: 'all-a11-08-grad', icon: 'Thermometer', de: 'Grad', pos: 'noun', article: 'das', plural: 'Grad', ru: 'градус', note: 'minus fünf Grad — минус пять.', example: { de: 'Es sind minus fünf Grad.', ru: 'Минус пять градусов.', cloze: 'Grad' } },

    { id: 'all-a11-08-jacke', icon: 'Shirt', imageQuery: 'winter jacket', de: 'Jacke', pos: 'noun', article: 'die', plural: 'Jacken', ru: 'куртка', example: { de: 'Zieh deine Jacke an!', ru: 'Надень куртку!', cloze: 'Jacke' } },
    { id: 'all-a11-08-mantel', icon: 'Shirt', imageQuery: 'winter coat', de: 'Mantel', pos: 'noun', article: 'der', plural: 'Mäntel', ru: 'пальто', example: { de: 'Der Mantel ist sehr warm.', ru: 'Пальто очень тёплое.', cloze: 'Mantel' } },
    { id: 'all-a11-08-pullover', icon: 'Shirt', imageQuery: 'knit sweater', de: 'Pullover', pos: 'noun', article: 'der', plural: 'Pullover', ru: 'свитер', note: 'Разговорно: der Pulli.', example: { de: 'Ich trage einen dicken Pullover.', ru: 'Я ношу толстый свитер.', cloze: 'Pullover' } },
    { id: 'all-a11-08-muetze', icon: 'HardHat', imageQuery: 'winter hat', de: 'Mütze', pos: 'noun', article: 'die', plural: 'Mützen', ru: 'шапка', example: { de: 'Ohne Mütze ist es zu kalt.', ru: 'Без шапки слишком холодно.', cloze: 'Mütze' } },
    { id: 'all-a11-08-schuh', icon: 'Footprints', imageQuery: 'winter boots', de: 'Schuh', pos: 'noun', article: 'der', plural: 'Schuhe', ru: 'ботинок, туфля', example: { de: 'Die Kinder brauchen Winterschuhe.', ru: 'Детям нужна зимняя обувь.', cloze: 'schuhe' } },
    { id: 'all-a11-08-hose', icon: 'Shirt', de: 'Hose', pos: 'noun', article: 'die', plural: 'Hosen', ru: 'брюки, штаны', example: { de: 'Die Hose ist zu kurz.', ru: 'Брюки слишком короткие.', cloze: 'Hose' } },
    { id: 'all-a11-08-regenschirm', icon: 'Umbrella', imageQuery: 'umbrella rain', de: 'Regenschirm', pos: 'noun', article: 'der', plural: 'Regenschirme', ru: 'зонт', parts: ['Regen', 'schirm'], example: { de: 'Nimm einen Regenschirm mit!', ru: 'Возьми с собой зонт!', cloze: 'Regenschirm' } },
    { id: 'all-a11-08-tragen', icon: 'Shirt', de: 'tragen', pos: 'verb', ru: 'носить (одежду); нести', forms: 'er trägt · hat getragen', example: { de: 'Im Winter trage ich eine Mütze.', ru: 'Зимой я ношу шапку.', cloze: 'trage' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Der erste Winter',
      de: `Es ist November in Leipzig. Das Wetter ist schlecht. Es regnet fast jeden Tag, und es ist kalt. Die Sonne sieht man selten.

In Syrien ist es im November noch warm, über zwanzig Grad. Hier sind es nur fünf Grad.

Im Dezember kommt der erste Schnee. Karim und Nour sind sehr froh. Sie spielen im Schnee. Amir sagt: „Brr, minus drei Grad!“`,
      ru: `Ноябрь в Лейпциге. Погода плохая. Почти каждый день идёт дождь, и холодно. Солнце видно редко.

В Сирии в ноябре ещё тепло, больше двадцати градусов. А здесь всего пять градусов.

В декабре выпадает первый снег. Карим и Нур очень рады. Они играют в снегу. Амир говорит: «Брр, минус три!»`,
      gloss: { regnerisch: 'дождливый', sonnig: 'солнечный', schneit: 'идёт снег', mai: 'май', winter: 'зима', leipzig: 'Лейпциг', syrien: 'Сирия', karim: 'Карим (имя)', nour: 'Нур (имя)', amir: 'Амир (имя)', november: 'ноябрь', dezember: 'декабрь', fast: 'почти', selten: 'редко', über: 'больше, свыше', zwanzig: 'двадцать', minus: 'минус', brr: 'брр', spielen: 'играют', froh: 'рады', erste: 'первый', man: '(sieht man) видно' },
      questions: [
        { q: 'Wie ist das Wetter im November?', ru: 'Какая погода в ноябре?', options: ['Kalt und regnerisch', 'Warm und sonnig', 'Es schneit.'], answer: 'Kalt und regnerisch' },
        { q: 'Wie warm ist es im November in Syrien?', ru: 'Насколько тепло в ноябре в Сирии?', options: ['Über zwanzig Grad', 'Fünf Grad', 'Minus drei Grad'], answer: 'Über zwanzig Grad' },
        { q: 'Wann kommt der erste Schnee?', ru: 'Когда выпадает первый снег?', options: ['Im Dezember', 'Im November', 'Im Mai'], answer: 'Im Dezember' },
      ],
      translate: [
        { de: 'Es regnet fast jeden Tag.', ru: 'Почти каждый день идёт дождь.', wrongRu: ['Почти каждый день идёт снег.', 'Дождь идёт редко.'] },
        { de: 'Im Winter ist es kalt.', ru: 'Зимой холодно.', wrongRu: ['Летом холодно.', 'Зимой тепло.'] },
        { de: 'Die Kinder spielen im Schnee.', ru: 'Дети играют в снегу.', wrongRu: ['Дети играют в парке.', 'Дети не любят снег.'] },
      ],
    },
    {
      lesson: 1, title: 'Warme Kleidung',
      de: `Die Kinder brauchen warme Kleidung. Leyla und Frau Schulz gehen zusammen einkaufen. Karim braucht eine Jacke, eine Mütze und Winterschuhe. Nour braucht einen Pullover und eine warme Hose.

Amir hat keinen Mantel. „Ich trage meine Jacke“, sagt er. Frau Schulz lacht: „Im Januar sind es minus zehn Grad. Da brauchen Sie einen Mantel!“

Am Ende kaufen sie auch einen Regenschirm. In Leipzig braucht man immer einen.`,
      ru: `Детям нужна тёплая одежда. Лейла и госпожа Шульц вместе идут за покупками. Кариму нужны куртка, шапка и зимние ботинки. Нур нужны свитер и тёплые брюки.

У Амира нет пальто. «Я ношу свою куртку», — говорит он. Госпожа Шульц смеётся: «В январе будет минус десять. Тогда вам понадобится пальто!»

В конце они покупают ещё и зонт. В Лейпциге он нужен всегда.`,
      gloss: { lacht: 'смеётся', nimm: 'возьми!', leyla: 'Лейла (имя)', schulz: 'Шульц (фамилия)', karim: 'Карим (имя)', nour: 'Нур (имя)', amir: 'Амир (имя)', leipzig: 'Лейпциг', kinder: 'дети', warme: 'тёплая', kleidung: 'одежда', einkaufen: 'за покупками', winterschuhe: 'зимняя обувь', januar: 'январь', minus: 'минус', zehn: 'десять', da: 'тогда', kaufen: 'покупают', immer: 'всегда', man: '(braucht man) нужно', einen: 'один' },
      questions: [
        { q: 'Was braucht Karim?', ru: 'Что нужно Кариму?', options: ['Eine Jacke, eine Mütze und Winterschuhe', 'Einen Mantel', 'Einen Regenschirm'], answer: 'Eine Jacke, eine Mütze und Winterschuhe' },
        { q: 'Was hat Amir nicht?', ru: 'Чего нет у Амира?', options: ['Einen Mantel', 'Eine Jacke', 'Schuhe'], answer: 'Einen Mantel' },
        { q: 'Was kaufen sie am Ende?', ru: 'Что они покупают в конце?', options: ['Einen Regenschirm', 'Eine Mütze', 'Eine Hose'], answer: 'Einen Regenschirm' },
      ],
      translate: [
        { de: 'Die Kinder brauchen warme Kleidung.', ru: 'Детям нужна тёплая одежда.', wrongRu: ['Детям нужна летняя одежда.', 'Детям не нужна одежда.'] },
        { de: 'Ich trage meine Jacke.', ru: 'Я ношу свою куртку.', wrongRu: ['Я покупаю куртку.', 'Я ношу пальто.'] },
        { de: 'Nimm einen Regenschirm mit!', ru: 'Возьми с собой зонт!', wrongRu: ['Купи зонт!', 'Возьми с собой шапку!'] },
      ],
    },
  ],
};
