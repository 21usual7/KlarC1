import type { Module } from '../types.ts';

// A2.1 pflege 05: fall prevention — risks in the room, slippers, bed rails (lesson 0); strength training, physiotherapy (lesson 1).

export const module: Module = {
  id: 'pflege-a21-05-sturzprophylaxe', sphere: 'pflege', level: 'A2.1',
  title: 'Stürze vermeiden', subtitle: 'Профилактика падений: опасности в палате, правильная обувь, поручни и упражнения на силу.',
  words: [
    { id: 'pfl-a21-05-sturzgefahr', icon: 'TriangleAlert', de: 'Sturzgefahr', pos: 'noun', article: 'die', ru: 'риск падения', parts: ['Sturz', 'gefahr'], example: { de: 'Bei Frau Wolf besteht Sturzgefahr.', ru: 'У госпожи Вольф есть риск падения.', cloze: 'Sturzgefahr' } },
    { id: 'pfl-a21-05-risiko', icon: 'Gauge', de: 'Risiko', pos: 'noun', article: 'das', plural: 'Risiken', ru: 'риск', example: { de: 'Das Risiko ist nachts am größten.', ru: 'Ночью риск самый высокий.', cloze: 'Risiko' } },
    { id: 'pfl-a21-05-rutschig', icon: 'Waves', de: 'rutschig', pos: 'adj', ru: 'скользкий', example: { de: 'Der Boden im Bad ist rutschig.', ru: 'Пол в ванной скользкий.', cloze: 'rutschig' } },
    { id: 'pfl-a21-05-stolperfalle', icon: 'Cable', de: 'Stolperfalle', pos: 'noun', article: 'die', plural: 'Stolperfallen', ru: 'то, обо что можно споткнуться', parts: ['Stolper', 'falle'], note: 'stolpern — спотыкаться.', example: { de: 'Das Kabel ist eine Stolperfalle.', ru: 'Об этот кабель можно споткнуться.', cloze: 'Stolperfalle' } },
    { id: 'pfl-a21-05-hausschuh', icon: 'Footprints', imageQuery: 'slippers', de: 'Hausschuh', pos: 'noun', article: 'der', plural: 'Hausschuhe', ru: 'тапочек', parts: ['Haus', 'schuh'], note: 'Лучше закрытые тапочки с нескользящей подошвой.', example: { de: 'Ihre Hausschuhe sind zu groß.', ru: 'Ваши тапочки слишком большие.', cloze: 'Hausschuhe' } },
    { id: 'pfl-a21-05-bettgitter', icon: 'Fence', de: 'Bettgitter', pos: 'noun', article: 'das', plural: 'Bettgitter', ru: 'боковое ограждение кровати', parts: ['Bett', 'gitter'], note: 'Ограждение — это мера ограничения, нужно согласие или разрешение.', example: { de: 'Ein Bettgitter braucht eine Erlaubnis.', ru: 'Для ограждения кровати нужно разрешение.', cloze: 'Bettgitter' } },
    { id: 'pfl-a21-05-nachtlicht', icon: 'Lamp', de: 'Nachtlicht', pos: 'noun', article: 'das', plural: 'Nachtlichter', ru: 'ночник', parts: ['Nacht', 'licht'], example: { de: 'Ein Nachtlicht hilft in der Dunkelheit.', ru: 'Ночник помогает в темноте.', cloze: 'Nachtlicht' } },
    { id: 'pfl-a21-05-haltegriff', icon: 'Grip', de: 'Haltegriff', pos: 'noun', article: 'der', plural: 'Haltegriffe', ru: 'поручень', parts: ['Halte', 'griff'], example: { de: 'Neben der Toilette ist ein Haltegriff.', ru: 'Рядом с туалетом поручень.', cloze: 'Haltegriff' } },

    { id: 'pfl-a21-05-kraft', icon: 'BicepsFlexed', de: 'Kraft', pos: 'noun', article: 'die', plural: 'Kräfte', ru: 'сила', example: { de: 'In den Beinen fehlt ihr die Kraft.', ru: 'Её ногам не хватает силы.', cloze: 'Kraft' } },
    { id: 'pfl-a21-05-uebung', icon: 'Dumbbell', de: 'Übung', pos: 'noun', article: 'die', plural: 'Übungen', ru: 'упражнение', example: { de: 'Diese Übung machen wir jeden Tag.', ru: 'Это упражнение мы делаем каждый день.', cloze: 'Übung' } },
    { id: 'pfl-a21-05-trainieren', icon: 'Activity', de: 'trainieren', pos: 'verb', ru: 'тренировать(ся)', forms: 'er trainiert · hat trainiert', example: { de: 'Wir trainieren das Gleichgewicht.', ru: 'Мы тренируем равновесие.', cloze: 'trainieren' } },
    { id: 'pfl-a21-05-physiotherapeut', icon: 'PersonStanding', de: 'Physiotherapeut', pos: 'noun', article: 'der', plural: 'Physiotherapeuten', ru: 'физиотерапевт, реабилитолог', note: 'Женщина — die Physiotherapeutin. Разговорно: der Physio.', example: { de: 'Der Physiotherapeut kommt jeden Morgen.', ru: 'Физиотерапевт приходит каждое утро.', cloze: 'Physiotherapeut' } },
    { id: 'pfl-a21-05-sicher', icon: 'ShieldCheck', de: 'sicher', pos: 'adj', ru: 'безопасный, уверенный', note: 'Также «уверенный»: Ich bin sicher. — Я уверен.', example: { de: 'Mit dem Rollator geht sie sicher.', ru: 'С ходунками она идёт уверенно.', cloze: 'sicher' } },
    { id: 'pfl-a21-05-unsicher', icon: 'ShieldAlert', de: 'unsicher', pos: 'adj', ru: 'неуверенный, небезопасный', example: { de: 'Er geht noch sehr unsicher.', ru: 'Он ещё ходит очень неуверенно.', cloze: 'unsicher' } },
    { id: 'pfl-a21-05-teppich', icon: 'RectangleHorizontal', de: 'Teppich', pos: 'noun', article: 'der', plural: 'Teppiche', ru: 'ковёр', example: { de: 'Zu Hause sind Teppiche oft gefährlich.', ru: 'Дома ковры часто опасны.', cloze: 'Teppiche' } },
    { id: 'pfl-a21-05-vermeiden', icon: 'CircleOff', de: 'vermeiden', pos: 'verb', ru: 'избегать, предотвращать', forms: 'er vermeidet · hat vermieden', example: { de: 'So vermeiden wir Stürze.', ru: 'Так мы предотвращаем падения.', cloze: 'vermeiden' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Gefahren im Zimmer',
      de: `Frau Wolf ist vor zwei Wochen gestürzt. Jetzt besteht bei ihr hohe Sturzgefahr. Olena geht mit Sabine durch das Zimmer und sucht Risiken.

„Das Kabel vom Fernseher liegt auf dem Boden. Das ist eine Stolperfalle“, sagt Sabine. Olena legt das Kabel hinter den Schrank. Im Bad ist der Boden nass und rutschig. Sie legt ein Handtuch hin.

Dann sieht Olena die Hausschuhe von Frau Wolf. Sie sind alt und zu groß. „Ihre Tochter soll neue bringen, mit einer festen Sohle“, sagt sie. Am Abend schaltet sie das Nachtlicht ein. So sieht Frau Wolf in der Nacht den Weg zur Toilette. Dort gibt es auch einen Haltegriff.`,
      ru: `Госпожа Вольф упала две недели назад. Теперь у неё высокий риск падения. Олена вместе с Сабиной проходит по палате и ищет опасности.

«Кабель от телевизора лежит на полу. Об него можно споткнуться», — говорит Сабина. Олена убирает кабель за шкаф. В ванной пол мокрый и скользкий. Она кладёт полотенце.

Потом Олена видит тапочки госпожи Вольф. Они старые и слишком большие. «Пусть её дочь принесёт новые, с твёрдой подошвой», — говорит она. Вечером она включает ночник. Так госпожа Вольф ночью видит дорогу в туалет. Там есть и поручень.`,
      gloss: { hausschuhen: 'тапочками (дат.)', wolf: 'Вольф (фамилия)', olena: 'Олена (имя)', sabine: 'Сабина (имя)', frau: 'госпожа', vor: 'назад', zwei: 'две', wochen: 'недели', gestürzt: 'упала', jetzt: 'теперь', besteht: 'существует, есть', bei: 'у', ihr: 'неё', hohe: 'высокий', geht: 'идёт', mit: 'с', durch: 'через, по', zimmer: 'палата', sucht: 'ищет', kabel: 'кабель', vom: 'от (von + dem)', fernseher: 'телевизор', liegt: 'лежит', boden: 'пол', sagt: 'говорит', legt: 'кладёт; (legt … hin) кладёт', hinter: 'за', schrank: 'шкаф', bad: 'ванная', nass: 'мокрый', handtuch: 'полотенце', hin: '(legt … hin) кладёт', dann: 'потом', sieht: 'видит', alt: 'старые', groß: 'большие', ihre: 'её', tochter: 'дочь', soll: 'пусть, должна', neue: 'новые', bringen: 'принести', einer: 'одной', festen: 'твёрдой', sohle: 'подошва', abend: 'вечер', schaltet: '(schaltet … ein) включает', ein: '(schaltet … ein) включает', so: 'так', nacht: 'ночь', weg: 'путь, дорога', zur: 'в, к (zu + der)', toilette: 'туалет', dort: 'там', gibt: '(es gibt) есть', was: 'что', wo: 'где', warum: 'почему', wer: 'кто', tisch: 'стол', bett: 'кровать', gefahren: 'опасности', klein: 'маленькие', neu: 'новые', schuhe: 'обувь' },
      questions: [
        { q: 'Wo legt Olena das Kabel hin?', ru: 'Куда Олена убирает кабель?', options: ['Hinter den Schrank', 'Auf den Tisch', 'Unter das Bett'], answer: 'Hinter den Schrank' },
        { q: 'Was ist das Problem mit den Hausschuhen?', ru: 'В чём проблема с тапочками?', options: ['Sie sind alt und zu groß.', 'Sie sind zu klein.', 'Sie sind neu.'], answer: 'Sie sind alt und zu groß.' },
        { q: 'Warum schaltet Olena das Nachtlicht ein?', ru: 'Зачем Олена включает ночник?', options: ['Damit Frau Wolf den Weg sieht', 'Damit Frau Wolf lesen kann', 'Weil der Fernseher kaputt ist'], answer: 'Damit Frau Wolf den Weg sieht' },
      ],
      translate: [
        { de: 'Der Boden im Bad ist rutschig.', ru: 'Пол в ванной скользкий.', wrongRu: ['Пол в ванной сухой.', 'Пол в палате скользкий.'] },
        { de: 'Das Kabel ist eine Stolperfalle.', ru: 'Об этот кабель можно споткнуться.', wrongRu: ['Этот кабель не работает.', 'Об этот ковёр можно споткнуться.'] },
        { de: 'Neben der Toilette ist ein Haltegriff.', ru: 'Рядом с туалетом есть поручень.', wrongRu: ['Рядом с кроватью есть поручень.', 'Рядом с туалетом нет поручня.'] },
      ],
    },
    {
      lesson: 1, title: 'Kraft und Gleichgewicht',
      de: `Jeden Morgen kommt Herr Klein, der Physiotherapeut. Er trainiert mit Frau Wolf. „In Ihren Beinen fehlt die Kraft“, sagt er. „Deshalb gehen Sie noch so unsicher.“

Die erste Übung ist einfach: Frau Wolf steht zehnmal vom Stuhl auf. Dann trainieren sie das Gleichgewicht: Sie steht auf einem Bein und hält sich am Tisch fest.

Nach einer Woche geht Frau Wolf schon viel sicherer. Herr Klein gibt ihr Tipps für zu Hause: „Nehmen Sie die Teppiche weg und tragen Sie immer feste Schuhe. So vermeiden Sie Stürze.“ Frau Wolf lacht: „Ich habe zu Hause fünf Teppiche. Mein Sohn muss viel arbeiten!“`,
      ru: `Каждое утро приходит господин Кляйн, физиотерапевт. Он занимается с госпожой Вольф. «Вашим ногам не хватает силы, — говорит он. — Поэтому вы ещё ходите так неуверенно».

Первое упражнение простое: госпожа Вольф десять раз встаёт со стула. Потом они тренируют равновесие: она стоит на одной ноге и держится за стол.

Через неделю госпожа Вольф ходит уже гораздо увереннее. Господин Кляйн даёт ей советы для дома: «Уберите ковры и всегда носите закрытую обувь. Так вы избежите падений». Госпожа Вольф смеётся: «У меня дома пять ковров. Сыну придётся поработать!»`,
      gloss: { wegnehmen: 'убрать', klein: 'Кляйн (фамилия); маленький', wolf: 'Вольф (фамилия)', herr: 'господин', frau: 'госпожа', jeden: 'каждое', morgen: 'утро', kommt: 'приходит', mit: 'с', ihren: 'ваших', beinen: 'ногах', fehlt: 'не хватает', sagt: 'говорит', deshalb: 'поэтому', gehen: 'ходите', noch: 'ещё', so: 'так', erste: 'первое', einfach: 'простое', steht: 'встаёт; стоит; (steht … auf) встаёт', zehnmal: 'десять раз', vom: 'с (von + dem)', stuhl: 'стул', auf: '(steht … auf) встаёт; на', dann: 'потом', gleichgewicht: 'равновесие', einem: 'одной', bein: 'нога', hält: '(hält sich … fest) держится', sich: 'себя, -ся', am: 'за (an + dem)', tisch: 'стол', fest: '(hält sich fest) держится', nach: 'через', einer: 'одну', woche: 'неделя', geht: 'ходит', schon: 'уже', viel: 'гораздо; много', sicherer: 'увереннее', gibt: 'даёт', ihr: 'ей', tipps: 'советы', für: 'для', hause: '(zu Hause) дома', nehmen: '(nehmen … weg) уберите', weg: '(nehmen … weg) уберите', tragen: 'носите', immer: 'всегда', feste: 'закрытую, прочную', schuhe: 'обувь', stürze: 'падения', lacht: 'смеётся', habe: 'имею', fünf: 'пять', mein: 'мой', sohn: 'сын', muss: 'должен', arbeiten: 'работать', was: 'что', wie: 'как', oft: '(wie oft) как часто', wer: 'кто', zweimal: 'два раза', dreimal: 'три раза', arzt: 'врач', tochter: 'дочь', ist: 'есть, является' },
      questions: [
        { q: 'Wer ist Herr Klein?', ru: 'Кто такой господин Кляйн?', options: ['Der Physiotherapeut', 'Der Arzt', 'Der Sohn von Frau Wolf'], answer: 'Der Physiotherapeut' },
        { q: 'Wie oft steht Frau Wolf vom Stuhl auf?', ru: 'Сколько раз госпожа Вольф встаёт со стула?', options: ['Zehnmal', 'Zweimal', 'Dreimal'], answer: 'Zehnmal' },
        { q: 'Was soll Frau Wolf zu Hause wegnehmen?', ru: 'Что госпоже Вольф нужно убрать дома?', options: ['Die Teppiche', 'Die Stühle', 'Die Schuhe'], answer: 'Die Teppiche' },
      ],
      translate: [
        { de: 'In den Beinen fehlt die Kraft.', ru: 'Ногам не хватает силы.', wrongRu: ['В ногах много силы.', 'Рукам не хватает силы.'] },
        { de: 'Wir trainieren das Gleichgewicht.', ru: 'Мы тренируем равновесие.', wrongRu: ['Мы теряем равновесие.', 'Мы тренируем силу рук.'] },
        { de: 'So vermeiden Sie Stürze.', ru: 'Так вы избежите падений.', wrongRu: ['Так вы упадёте.', 'Так вы избежите боли.'] },
      ],
    },
  ],
};
