import type { Module } from '../types.ts';

// A1.2 pflege 06: medication basics — taking, drops, ointment, morning and evening (lesson 0); side effects, infusion, prescription (lesson 1).

export const module: Module = {
  id: 'pflege-a12-06-medikamente', sphere: 'pflege', level: 'A1.2',
  title: 'Medikamente', subtitle: 'Как принимать лекарства: утром или вечером, натощак, капли, мазь, побочные эффекты.',
  words: [
    { id: 'pfl-a12-06-einnehmen', icon: 'Pill', de: 'einnehmen', pos: 'verb', ru: 'принимать (лекарство)', forms: 'er nimmt ein · hat eingenommen', note: 'Отделяемая приставка: Nehmen Sie die Tablette nach dem Essen ein.', example: { de: 'Nehmen Sie die Tablette bitte jetzt ein.', ru: 'Примите, пожалуйста, таблетку сейчас.', cloze: 'Nehmen' } },
    { id: 'pfl-a12-06-tropfen', icon: 'Droplet', imageQuery: 'eye drops bottle', de: 'Tropfen', pos: 'noun', article: 'der', plural: 'Tropfen', ru: 'капля; (мн. ч.) капли (лекарство)', note: 'zehn Tropfen in Wasser — десять капель в воду.', example: { de: 'Sie bekommen zehn Tropfen in einem Glas Wasser.', ru: 'Вы получите десять капель в стакане воды.', cloze: 'Tropfen' } },
    { id: 'pfl-a12-06-salbe', icon: 'Pipette', imageQuery: 'ointment tube', de: 'Salbe', pos: 'noun', article: 'die', plural: 'Salben', ru: 'мазь', example: { de: 'Die Salbe kommt auf die Wunde.', ru: 'Мазь наносится на рану.', cloze: 'Salbe' } },
    { id: 'pfl-a12-06-morgens', icon: 'Sunrise', de: 'morgens', pos: 'adv', ru: 'утром, по утрам', note: 'morgens, mittags, abends, nachts — утром, днём, вечером, ночью.', example: { de: 'Diese Tablette nehmen Sie morgens.', ru: 'Эту таблетку вы принимаете утром.', cloze: 'morgens' } },
    { id: 'pfl-a12-06-abends', icon: 'Sunset', de: 'abends', pos: 'adv', ru: 'вечером, по вечерам', example: { de: 'Abends bekommt sie eine Schlaftablette.', ru: 'Вечером она получает снотворное.', cloze: 'Abends' } },
    { id: 'pfl-a12-06-nuechtern', icon: 'Ban', de: 'nüchtern', pos: 'adj', ru: 'натощак; трезвый', note: 'nüchtern bleiben — ничего не есть (перед анализом или операцией).', example: { de: 'Bitte bleiben Sie morgen früh nüchtern.', ru: 'Пожалуйста, завтра утром ничего не ешьте.', cloze: 'nüchtern' } },
    { id: 'pfl-a12-06-rezept', icon: 'FileText', de: 'Rezept', pos: 'noun', article: 'das', plural: 'Rezepte', ru: 'рецепт', note: 'Также рецепт блюда.', collocation: { de: 'ein Rezept bekommen', ru: 'получить рецепт' }, example: { de: 'Für dieses Medikament brauchen Sie ein Rezept.', ru: 'Для этого лекарства вам нужен рецепт.', cloze: 'Rezept' } },
    { id: 'pfl-a12-06-apotheke', icon: 'Cross', imageQuery: 'pharmacy', de: 'Apotheke', pos: 'noun', article: 'die', plural: 'Apotheken', ru: 'аптека', example: { de: 'Die Apotheke im Krankenhaus ist im Keller.', ru: 'Аптека больницы в подвале.', cloze: 'Apotheke' } },

    { id: 'pfl-a12-06-nebenwirkung', icon: 'TriangleAlert', de: 'Nebenwirkung', pos: 'noun', article: 'die', plural: 'Nebenwirkungen', ru: 'побочное действие', parts: ['Neben', 'wirkung'], example: { de: 'Müdigkeit ist eine Nebenwirkung.', ru: 'Усталость — это побочное действие.', cloze: 'Nebenwirkung' } },
    { id: 'pfl-a12-06-wirken', icon: 'Sparkles', de: 'wirken', pos: 'verb', ru: 'действовать (о лекарстве)', forms: 'es wirkt · hat gewirkt', example: { de: 'Das Schmerzmittel wirkt nach zwanzig Minuten.', ru: 'Обезболивающее действует через двадцать минут.', cloze: 'wirkt' } },
    { id: 'pfl-a12-06-kapsel', icon: 'Pill', imageQuery: 'capsules', de: 'Kapsel', pos: 'noun', article: 'die', plural: 'Kapseln', ru: 'капсула', example: { de: 'Die Kapsel ist sehr groß.', ru: 'Капсула очень большая.', cloze: 'Kapsel' } },
    { id: 'pfl-a12-06-packung', icon: 'Package', imageQuery: 'medicine box', de: 'Packung', pos: 'noun', article: 'die', plural: 'Packungen', ru: 'упаковка', example: { de: 'Die Packung ist fast leer.', ru: 'Упаковка почти пустая.', cloze: 'Packung' } },
    { id: 'pfl-a12-06-beipackzettel', icon: 'ScrollText', de: 'Beipackzettel', pos: 'noun', article: 'der', plural: 'Beipackzettel', ru: 'инструкция (вкладыш) к лекарству', parts: ['Beipack', 'zettel'], example: { de: 'Im Beipackzettel stehen die Nebenwirkungen.', ru: 'Во вкладыше указаны побочные действия.', cloze: 'Beipackzettel' } },
    { id: 'pfl-a12-06-infusion', icon: 'Droplets', imageQuery: 'iv drip infusion', de: 'Infusion', pos: 'noun', article: 'die', plural: 'Infusionen', ru: 'капельница, инфузия', collocation: { de: 'eine Infusion bekommen', ru: 'получать капельницу' }, example: { de: 'Herr Yilmaz bekommt eine Infusion.', ru: 'Господину Йылмазу ставят капельницу.', cloze: 'Infusion' } },
    { id: 'pfl-a12-06-verschreiben', icon: 'PenLine', de: 'verschreiben', pos: 'verb', ru: 'выписывать (лекарство)', forms: 'er verschreibt · hat verschrieben', example: { de: 'Der Arzt verschreibt ein neues Medikament.', ru: 'Врач выписывает новое лекарство.', cloze: 'verschreibt' } },
    { id: 'pfl-a12-06-vergessen', icon: 'CircleHelp', de: 'vergessen', pos: 'verb', ru: 'забывать', forms: 'er vergisst · hat vergessen', note: 'du vergisst, er vergisst.', example: { de: 'Ich habe die Tablette vergessen!', ru: 'Я забыл принять таблетку!', cloze: 'vergessen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Morgens, mittags, abends',
      de: `Morgen darf Herr Schmidt nach Hause gehen. Olena erklärt ihm seine Medikamente. „Diese kleine Tablette nehmen Sie morgens, vor dem Frühstück. Sie müssen dafür nüchtern sein.“

„Und die große?“, fragt Herr Schmidt. „Die nehmen Sie abends, nach dem Essen.“ Dann zeigt Olena ihm die Tropfen: „Zehn Tropfen in ein Glas Wasser, dreimal am Tag.“

Für das Knie bekommt er eine Salbe. „Hier ist auch das Rezept vom Arzt“, sagt Olena. „Die Medikamente bekommen Sie in der Apotheke.“`,
      ru: `Завтра господина Шмидта выписывают домой. Олена объясняет ему его лекарства. «Эту маленькую таблетку вы принимаете утром, перед завтраком. Для этого нужно быть натощак».

«А большую?» — спрашивает господин Шмидт. «Её вы принимаете вечером, после еды». Потом Олена показывает ему капли: «Десять капель в стакан воды, три раза в день».

Для колена он получает мазь. «Вот ещё рецепт от врача, — говорит Олена. — Лекарства вы получите в аптеке».`,
      gloss: { schmidt: 'Шмидт (фамилия)', olena: 'Олена (имя)', herr: 'господин', darf: 'может, разрешено', nach: '(nach Hause) домой; после', hause: '(nach Hause) домой', gehen: 'идти', erklärt: 'объясняет', ihm: 'ему', seine: 'его', diese: 'эту', kleine: 'маленькую', vor: 'перед', frühstück: 'завтрак', müssen: 'должны', dafür: 'для этого', sein: 'быть', große: 'большую', fragt: 'спрашивает', die: '(die nehmen Sie) её', essen: 'еда', dann: 'потом', zeigt: 'показывает', zehn: 'десять', glas: 'стакан', wasser: 'вода', dreimal: 'три раза', tag: 'день', für: 'для', knie: 'колено', bekommt: 'получает', hier: 'вот, здесь', vom: 'от (von + dem)', sagt: 'говорит', bekommen: 'получаете', wann: 'когда', was: 'что', wo: 'где', wie: 'как', oft: 'часто; (wie oft) как часто', mittags: 'днём, в обед', einmal: 'один раз', zweimal: 'два раза', krankenhaus: 'больница', station: 'отделение' },
      questions: [
        { q: 'Wann nimmt Herr Schmidt die kleine Tablette?', ru: 'Когда господин Шмидт принимает маленькую таблетку?', options: ['Morgens', 'Abends', 'Mittags'], answer: 'Morgens' },
        { q: 'Wie oft nimmt er die Tropfen?', ru: 'Как часто он принимает капли?', options: ['Dreimal am Tag', 'Einmal am Tag', 'Zweimal am Tag'], answer: 'Dreimal am Tag' },
        { q: 'Wo bekommt er die Medikamente?', ru: 'Где он получит лекарства?', options: ['In der Apotheke', 'Im Krankenhaus', 'Auf der Station'], answer: 'In der Apotheke' },
      ],
      translate: [
        { de: 'Diese Tablette nehmen Sie morgens.', ru: 'Эту таблетку вы принимаете утром.', wrongRu: ['Эту таблетку вы принимаете вечером.', 'Эти капли вы принимаете утром.'] },
        { de: 'Bitte bleiben Sie nüchtern.', ru: 'Пожалуйста, ничего не ешьте.', wrongRu: ['Пожалуйста, поешьте.', 'Пожалуйста, оставайтесь в постели.'] },
        { de: 'Für die Salbe brauchen Sie ein Rezept.', ru: 'Для мази вам нужен рецепт.', wrongRu: ['Для мази рецепт не нужен.', 'Для капель вам нужен рецепт.'] },
      ],
    },
    {
      lesson: 1, title: 'Eine Nebenwirkung',
      de: `Herr Yilmaz bekommt seit gestern ein neues Medikament. Doktor Wagner hat es verschrieben. Heute ist Herr Yilmaz sehr müde und ihm ist übel.

Olena liest den Beipackzettel. Dort steht: Müdigkeit und Übelkeit sind Nebenwirkungen. Sie sagt es dem Arzt. Doktor Wagner sagt: „Wir geben das Medikament jetzt als Infusion. So wirkt es besser.“

Am Abend fragt Herr Yilmaz: „Muss ich noch die Kapsel nehmen? Ich habe sie heute Morgen vergessen.“ Olena sieht in die Kurve und sagt: „Nein, die Packung ist leer. Das ist jetzt in der Infusion.“`,
      ru: `Господин Йылмаз со вчерашнего дня получает новое лекарство. Его выписал доктор Вагнер. Сегодня господин Йылмаз очень уставший, и его тошнит.

Олена читает вкладыш. Там написано: усталость и тошнота — побочные действия. Она сообщает об этом врачу. Доктор Вагнер говорит: «Теперь будем давать лекарство капельницей. Так оно лучше подействует».

Вечером господин Йылмаз спрашивает: «Мне ещё нужно принять капсулу? Я сегодня утром забыл». Олена смотрит в карту и говорит: «Нет, упаковка пустая. Теперь это в капельнице».`,
      gloss: { yilmaz: 'Йылмаз (фамилия)', olena: 'Олена (имя)', wagner: 'Вагнер (фамилия)', doktor: 'доктор', herr: 'господин', bekommt: 'получает', seit: 'с (какого-то времени)', gestern: 'вчера', neues: 'новое', hat: 'имеет; вспом. глагол', es: 'оно, его', heute: 'сегодня', müde: 'уставший', ihm: 'ему', übel: '(ihm ist übel) его тошнит', liest: 'читает', dort: 'там', steht: 'стоит; (dort steht) там написано', müdigkeit: 'усталость', übelkeit: 'тошнота', sagt: 'говорит', dem: 'тому, этому', arzt: 'врач', geben: 'давать', als: 'как, в виде', so: 'так', besser: 'лучше', abend: 'вечер', fragt: 'спрашивает', muss: 'должен', noch: 'ещё', nehmen: 'принимать', sie: 'её', morgen: 'утро; (heute Morgen) сегодня утром', sieht: 'смотрит', kurve: 'карта пациента', leer: 'пустой', was: 'что', wer: 'кто', wie: 'как', jetzt: 'теперь', salbe: 'мазь', tropfen: 'капли', tom: 'Том (имя)', fieber: 'жар', kopfschmerzen: 'головная боль' },
      questions: [
        { q: 'Wer hat das Medikament verschrieben?', ru: 'Кто выписал лекарство?', options: ['Doktor Wagner', 'Olena', 'Tom'], answer: 'Doktor Wagner' },
        { q: 'Was sind die Nebenwirkungen?', ru: 'Какие побочные действия?', options: ['Müdigkeit und Übelkeit', 'Fieber', 'Kopfschmerzen'], answer: 'Müdigkeit und Übelkeit' },
        { q: 'Wie bekommt Herr Yilmaz das Medikament jetzt?', ru: 'Как господин Йылмаз получает лекарство теперь?', options: ['Als Infusion', 'Als Tropfen', 'Als Salbe'], answer: 'Als Infusion' },
      ],
      translate: [
        { de: 'Ich habe die Tablette vergessen.', ru: 'Я забыл принять таблетку.', wrongRu: ['Я принял таблетку.', 'Я забыл свои очки.'] },
        { de: 'Das Medikament wirkt besser.', ru: 'Лекарство действует лучше.', wrongRu: ['Лекарство действует хуже.', 'Мазь действует лучше.'] },
        { de: 'Der Arzt verschreibt ein neues Medikament.', ru: 'Врач выписывает новое лекарство.', wrongRu: ['Врач отменяет лекарство.', 'Медсестра выписывает новое лекарство.'] },
      ],
    },
  ],
};
