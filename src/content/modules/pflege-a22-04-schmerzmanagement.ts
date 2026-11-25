import type { Module } from '../types.ts';

// A2.2 pflege 04: pain management — assessing, pain diary, as-needed medication, opioids (lesson 0); non-drug methods, quality of life (lesson 1).

export const module: Module = {
  id: 'pflege-a22-04-schmerzmanagement', sphere: 'pflege', level: 'A2.2',
  title: 'Schmerzen lindern', subtitle: 'Обезболивание: оценить боль, дневник боли, препараты «по требованию», опиоиды и немедикаментозные методы.',
  words: [
    { id: 'pfl-a22-04-einschaetzen', icon: 'Gauge', de: 'einschätzen', pos: 'verb', ru: 'оценивать', forms: 'er schätzt ein · hat eingeschätzt', example: { de: 'Wie schätzen Sie Ihre Schmerzen ein?', ru: 'Как вы оцениваете свою боль?', cloze: 'schätzen' } },
    { id: 'pfl-a22-04-schmerzintensitaet', icon: 'Activity', de: 'Schmerzintensität', pos: 'noun', article: 'die', ru: 'интенсивность боли', parts: ['Schmerz', 'intensität'], example: { de: 'Die Schmerzintensität liegt bei sechs.', ru: 'Интенсивность боли — шесть.', cloze: 'Schmerzintensität' } },
    { id: 'pfl-a22-04-schmerztagebuch', icon: 'BookOpen', de: 'Schmerztagebuch', pos: 'noun', article: 'das', plural: 'Schmerztagebücher', ru: 'дневник боли', parts: ['Schmerz', 'tagebuch'], example: { de: 'Im Schmerztagebuch notiert er jeden Tag die Werte.', ru: 'В дневнике боли он каждый день записывает значения.', cloze: 'Schmerztagebuch' } },
    { id: 'pfl-a22-04-bedarfsmedikation', icon: 'Pill', de: 'Bedarfsmedikation', pos: 'noun', article: 'die', plural: 'Bedarfsmedikationen', ru: 'лекарство «по требованию»', parts: ['Bedarfs', 'medikation'], example: { de: 'Bei starken Schmerzen gibt es eine Bedarfsmedikation.', ru: 'При сильной боли есть лекарство по требованию.', cloze: 'Bedarfsmedikation' } },
    { id: 'pfl-a22-04-opioid', icon: 'Pill', de: 'Opioid', pos: 'noun', article: 'das', plural: 'Opioide', ru: 'опиоид', note: 'Сильные обезболивающие (морфин и др.) — учитываются особо.', example: { de: 'Opioide machen oft müde und verstopft.', ru: 'Опиоиды часто вызывают сонливость и запор.', cloze: 'Opioide' } },
    { id: 'pfl-a22-04-abhaengigkeit', icon: 'Link2', de: 'Abhängigkeit', pos: 'noun', article: 'die', plural: 'Abhängigkeiten', ru: 'зависимость', example: { de: 'Viele haben Angst vor einer Abhängigkeit.', ru: 'Многие боятся зависимости.', cloze: 'Abhängigkeit' } },
    { id: 'pfl-a22-04-dumpf', icon: 'CircleDot', de: 'dumpf', pos: 'adj', ru: 'тупой (о боли)', note: 'Виды боли: stechend (колющая), brennend (жгучая), dumpf (тупая), ziehend (тянущая).', example: { de: 'Der Schmerz ist dumpf und dauerhaft.', ru: 'Боль тупая и постоянная.', cloze: 'dumpf' } },
    { id: 'pfl-a22-04-ausstrahlen', icon: 'Radiation', de: 'ausstrahlen', pos: 'verb', ru: 'отдавать, иррадиировать (о боли)', forms: 'er strahlt aus · hat ausgestrahlt', example: { de: 'Der Schmerz strahlt in den linken Arm aus.', ru: 'Боль отдаёт в левую руку.', cloze: 'strahlt' } },

    { id: 'pfl-a22-04-lindern', icon: 'Feather', de: 'lindern', pos: 'verb', ru: 'облегчать, смягчать', forms: 'er lindert · hat gelindert', example: { de: 'Wärme kann die Schmerzen lindern.', ru: 'Тепло может облегчить боль.', cloze: 'lindern' } },
    { id: 'pfl-a22-04-waerme', icon: 'Sun', de: 'Wärme', pos: 'noun', article: 'die', ru: 'тепло', example: { de: 'Bei Rückenschmerzen hilft Wärme.', ru: 'При боли в спине помогает тепло.', cloze: 'Wärme' } },
    { id: 'pfl-a22-04-kaelte', icon: 'Snowflake', de: 'Kälte', pos: 'noun', article: 'die', ru: 'холод', example: { de: 'Nach der Operation hilft Kälte gegen die Schwellung.', ru: 'После операции холод помогает от отёка.', cloze: 'Kälte' } },
    { id: 'pfl-a22-04-entspannung', icon: 'Leaf', de: 'Entspannung', pos: 'noun', article: 'die', ru: 'расслабление', example: { de: 'Musik und Entspannung können helfen.', ru: 'Музыка и расслабление могут помочь.', cloze: 'Entspannung' } },
    { id: 'pfl-a22-04-mimik', icon: 'Frown', de: 'Mimik', pos: 'noun', article: 'die', ru: 'мимика', example: { de: 'An der Mimik sieht man, dass sie Schmerzen hat.', ru: 'По мимике видно, что ей больно.', cloze: 'Mimik' } },
    { id: 'pfl-a22-04-aeussern', icon: 'MessageCircle', de: 'äußern', pos: 'verb', ru: 'выражать, высказывать', forms: 'er äußert · hat geäußert', note: 'sich äußern zu — высказываться о.', example: { de: 'Menschen mit Demenz können Schmerzen oft nicht äußern.', ru: 'Люди с деменцией часто не могут выразить боль.', cloze: 'äußern' } },
    { id: 'pfl-a22-04-lebensqualitaet', icon: 'Heart', de: 'Lebensqualität', pos: 'noun', article: 'die', ru: 'качество жизни', parts: ['Lebens', 'qualität'], example: { de: 'Ohne Schmerzen steigt die Lebensqualität.', ru: 'Без боли качество жизни растёт.', cloze: 'Lebensqualität' } },
    { id: 'pfl-a22-04-uebelkeit', icon: 'Annoyed', de: 'Übelkeit', pos: 'noun', article: 'die', ru: 'тошнота', example: { de: 'Gegen die Übelkeit bekommt sie Tropfen.', ru: 'От тошноты она получает капли.', cloze: 'Übelkeit' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die Schmerzen ernst nehmen',
      de: `Frau Krüger hat Knochenkrebs und starke Schmerzen. Jeden Morgen fragt Olena: „Wie schätzen Sie Ihre Schmerzen heute ein, von null bis zehn?“ Frau Krüger sagt meistens fünf oder sechs. Der Schmerz ist dumpf und strahlt manchmal in die Beine aus.

Frau Krüger führt ein Schmerztagebuch. So sieht der Arzt, wann die Schmerzintensität steigt. Sie bekommt regelmäßig ein Opioid und bei Bedarf eine zusätzliche Bedarfsmedikation.

„Ich habe Angst vor einer Abhängigkeit“, sagt sie. Olena erklärt: „Bei Krebsschmerzen ist das Risiko klein. Wichtig ist, dass Sie keine Schmerzen aushalten müssen.“ Wegen der Nebenwirkungen bekommt sie auch etwas gegen Übelkeit und Verstopfung.`,
      ru: `У госпожи Крюгер рак костей и сильные боли. Каждое утро Олена спрашивает: «Как вы оцениваете боль сегодня, от нуля до десяти?» Госпожа Крюгер обычно говорит пять или шесть. Боль тупая и иногда отдаёт в ноги.

Госпожа Крюгер ведёт дневник боли. Так врач видит, когда интенсивность боли растёт. Она регулярно получает опиоид, а при необходимости — дополнительное лекарство по требованию.

«Я боюсь зависимости», — говорит она. Олена объясняет: «При раковых болях риск небольшой. Важно, чтобы вам не приходилось терпеть боль». Из-за побочных действий она получает ещё и средство от тошноты и запора.`,
      gloss: { stechend: 'колющий', brennend: 'жгучий', wovor: 'чего (бояться)', starke: 'сильное', olena: 'Олена (имя)', meistens: 'чаще всего', krüger: 'Крюгер (фамилия)', knochenkrebs: 'рак костей', führt: 'ведёт', steigt: 'растёт', zusätzliche: 'дополнительное', krebsschmerzen: 'раковые боли', wegen: 'из-за', ernst: '(ernst nehmen) воспринимать всерьёз' },
      questions: [
        { q: 'Wie ist der Schmerz von Frau Krüger?', ru: 'Какая боль у госпожи Крюгер?', options: ['Dumpf', 'Stechend', 'Brennend'], answer: 'Dumpf' },
        { q: 'Warum führt sie ein Schmerztagebuch?', ru: 'Зачем она ведёт дневник боли?', options: ['Damit der Arzt sieht, wann die Schmerzen steigen', 'Weil sie gern schreibt', 'Für ihre Familie'], answer: 'Damit der Arzt sieht, wann die Schmerzen steigen' },
        { q: 'Wovor hat Frau Krüger Angst?', ru: 'Чего боится госпожа Крюгер?', options: ['Vor einer Abhängigkeit', 'Vor der Operation', 'Vor dem Arzt'], answer: 'Vor einer Abhängigkeit' },
      ],
      translate: [
        { de: 'Der Schmerz strahlt in den Arm aus.', ru: 'Боль отдаёт в руку.', wrongRu: ['Боль ушла из руки.', 'Боль отдаёт в ногу.'] },
        { de: 'Wie schätzen Sie Ihre Schmerzen ein?', ru: 'Как вы оцениваете свою боль?', wrongRu: ['Где у вас болит?', 'Когда у вас болит?'] },
        { de: 'Sie müssen keine Schmerzen aushalten.', ru: 'Вам не нужно терпеть боль.', wrongRu: ['Вам нужно потерпеть боль.', 'Вам нельзя принимать обезболивающее.'] },
      ],
    },
    {
      lesson: 1, title: 'Nicht nur Tabletten',
      de: `Herr Becker kann seit dem Schlaganfall nicht gut sprechen. Er kann Schmerzen nicht äußern. Deshalb achtet Olena auf seine Mimik: Er verzieht das Gesicht und ist unruhig. „Ich glaube, er hat Schmerzen“, sagt sie zu Doktor Wagner.

Nicht nur Tabletten helfen. Gegen seine Rückenschmerzen bekommt Herr Becker Wärme. Bei Frau Wolf hilft nach der Knieoperation dagegen Kälte. Andere Patienten finden Entspannung mit Musik oder einer Massage.

„Unser Ziel ist nicht nur, dass die Schmerzen weg sind“, erklärt Doktor Wagner. „Wir wollen die Lebensqualität verbessern. Man kann nicht jeden Schmerz ganz wegnehmen, aber man kann ihn fast immer lindern.“`,
      ru: `Господин Беккер после инсульта плохо говорит. Он не может выразить боль. Поэтому Олена следит за его мимикой: он морщится и беспокоится. «Мне кажется, ему больно», — говорит она доктору Вагнеру.

Помогают не только таблетки. От боли в спине господин Беккер получает тепло. Госпоже Вольф после операции на колене, наоборот, помогает холод. Другие пациенты расслабляются с музыкой или массажем.

«Наша цель — не только чтобы боль ушла, — объясняет доктор Вагнер. — Мы хотим улучшить качество жизни. Не каждую боль можно убрать полностью, но почти всегда её можно облегчить».`,
      gloss: { schlaganfall: 'инсульт', olena: 'Олена (имя)', doktor: 'доктор', wagner: 'Вагнер (фамилия)', wolf: 'Вольф (фамилия)', wegnehmen: 'убрать', herrn: 'господину (дат.)', becker: 'Беккер (фамилия)', achtet: '(achtet auf) следит за', verzieht: '(verzieht das Gesicht) морщится', gesicht: 'лицо', glaube: 'думаю, полагаю', rückenschmerzen: 'боль в спине', knieoperation: 'операция на колене', dagegen: 'наоборот', andere: 'другие', massage: 'массаж', unser: 'наша', wollen: 'хотим' },
      questions: [
        { q: 'Warum achtet Olena auf die Mimik von Herrn Becker?', ru: 'Почему Олена следит за мимикой господина Беккера?', options: ['Er kann Schmerzen nicht äußern.', 'Er schläft viel.', 'Er spricht zu laut.'], answer: 'Er kann Schmerzen nicht äußern.' },
        { q: 'Was hilft Frau Wolf nach der Knieoperation?', ru: 'Что помогает госпоже Вольф после операции на колене?', options: ['Kälte', 'Wärme', 'Musik'], answer: 'Kälte' },
        { q: 'Was ist das Ziel von Doktor Wagner?', ru: 'Какая цель у доктора Вагнера?', options: ['Die Lebensqualität verbessern', 'Mehr Tabletten geben', 'Die Patienten schnell entlassen'], answer: 'Die Lebensqualität verbessern' },
      ],
      translate: [
        { de: 'Wärme kann die Schmerzen lindern.', ru: 'Тепло может облегчить боль.', wrongRu: ['Тепло может усилить боль.', 'Холод может облегчить боль.'] },
        { de: 'An der Mimik sieht man die Schmerzen.', ru: 'По мимике видна боль.', wrongRu: ['По голосу слышна боль.', 'По мимике видна радость.'] },
        { de: 'Wir wollen die Lebensqualität verbessern.', ru: 'Мы хотим улучшить качество жизни.', wrongRu: ['Мы хотим ухудшить качество жизни.', 'Мы хотим улучшить сон.'] },
      ],
    },
  ],
};
