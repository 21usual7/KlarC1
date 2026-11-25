import type { Module } from '../types.ts';

// A2.2 pflege 05: palliative care — dignity, wishes, advance directive (lesson 0); dying, saying goodbye, grief (lesson 1).

export const module: Module = {
  id: 'pflege-a22-05-palliativ', sphere: 'pflege', level: 'A2.2',
  title: 'Am Ende des Lebens', subtitle: 'Паллиативный уход: достоинство, желания пациента, распоряжение пациента, прощание и горе.',
  words: [
    { id: 'pfl-a22-05-palliativstation', icon: 'HeartHandshake', de: 'Palliativstation', pos: 'noun', article: 'die', plural: 'Palliativstationen', ru: 'паллиативное отделение', parts: ['Palliativ', 'station'], example: { de: 'Frau Krüger kommt auf die Palliativstation.', ru: 'Госпожу Крюгер переводят в паллиативное отделение.', cloze: 'Palliativstation' } },
    { id: 'pfl-a22-05-hospiz', icon: 'Home', de: 'Hospiz', pos: 'noun', article: 'das', plural: 'Hospize', ru: 'хоспис', example: { de: 'Sie möchte ihre letzten Wochen im Hospiz verbringen.', ru: 'Она хочет провести последние недели в хосписе.', cloze: 'Hospiz' } },
    { id: 'pfl-a22-05-unheilbar', icon: 'CircleOff', de: 'unheilbar', pos: 'adj', ru: 'неизлечимый', example: { de: 'Die Krankheit ist unheilbar.', ru: 'Болезнь неизлечима.', cloze: 'unheilbar' } },
    { id: 'pfl-a22-05-wuerde', icon: 'Crown', de: 'Würde', pos: 'noun', article: 'die', ru: 'достоинство', example: { de: 'Jeder Mensch hat ein Recht auf ein Sterben in Würde.', ru: 'Каждый человек имеет право умереть достойно.', cloze: 'Würde' } },
    { id: 'pfl-a22-05-wunsch', icon: 'Star', de: 'Wunsch', pos: 'noun', article: 'der', plural: 'Wünsche', ru: 'желание', example: { de: 'Was ist Ihr größter Wunsch?', ru: 'Какое ваше самое большое желание?', cloze: 'Wunsch' } },
    { id: 'pfl-a22-05-patientenverfuegung', icon: 'FileSignature', de: 'Patientenverfügung', pos: 'noun', article: 'die', plural: 'Patientenverfügungen', ru: 'распоряжение пациента (о лечении)', parts: ['Patienten', 'verfügung'], note: 'Документ: какое лечение человек хочет или не хочет, если не сможет решать сам.', example: { de: 'In ihrer Patientenverfügung steht: keine Wiederbelebung.', ru: 'В её распоряжении написано: не реанимировать.', cloze: 'Patientenverfügung' } },
    { id: 'pfl-a22-05-lebensverlaengernd', icon: 'Hourglass', de: 'lebensverlängernd', pos: 'adj', ru: 'продлевающий жизнь', example: { de: 'Sie möchte keine lebensverlängernden Maßnahmen.', ru: 'Она не хочет мер, продлевающих жизнь.', cloze: 'lebensverlängernden' } },
    { id: 'pfl-a22-05-seelsorger', icon: 'Church', de: 'Seelsorger', pos: 'noun', article: 'der', plural: 'Seelsorger', ru: 'священник, духовный наставник (в больнице)', note: 'Женщина — die Seelsorgerin.', example: { de: 'Der Seelsorger kommt jeden Dienstag.', ru: 'Священник приходит каждый вторник.', cloze: 'Seelsorger' } },

    { id: 'pfl-a22-05-sterben', icon: 'Sunset', de: 'sterben', pos: 'verb', ru: 'умирать', forms: 'er stirbt · ist gestorben', example: { de: 'Sie ist in der Nacht ruhig gestorben.', ru: 'Она спокойно умерла ночью.', cloze: 'gestorben' } },
    { id: 'pfl-a22-05-tod', icon: 'Moon', de: 'Tod', pos: 'noun', article: 'der', plural: 'Tode', ru: 'смерть', example: { de: 'Über den Tod zu sprechen ist nicht leicht.', ru: 'Говорить о смерти нелегко.', cloze: 'Tod' } },
    { id: 'pfl-a22-05-begleiten', icon: 'Footprints', de: 'begleiten', pos: 'verb', ru: 'сопровождать', forms: 'er begleitet · hat begleitet', note: 'Sterbebegleitung — сопровождение умирающих.', example: { de: 'Wir begleiten sie bis zum Ende.', ru: 'Мы будем рядом с ней до конца.', cloze: 'begleiten' } },
    { id: 'pfl-a22-05-abschied', icon: 'Hand', de: 'Abschied', pos: 'noun', article: 'der', plural: 'Abschiede', ru: 'прощание', collocation: { de: 'Abschied nehmen', ru: 'прощаться' }, example: { de: 'Die Familie kann in Ruhe Abschied nehmen.', ru: 'Семья может спокойно попрощаться.', cloze: 'Abschied' } },
    { id: 'pfl-a22-05-friedlich', icon: 'Leaf', de: 'friedlich', pos: 'adj', ru: 'мирный, спокойный', example: { de: 'Sie ist friedlich eingeschlafen.', ru: 'Она мирно уснула.', cloze: 'friedlich' } },
    { id: 'pfl-a22-05-trauer', icon: 'CloudRain', de: 'Trauer', pos: 'noun', article: 'die', ru: 'горе, скорбь', example: { de: 'In der Trauer brauchen Angehörige Unterstützung.', ru: 'В горе родственникам нужна поддержка.', cloze: 'Trauer' } },
    { id: 'pfl-a22-05-trauern', icon: 'CloudRain', de: 'trauern', pos: 'verb', ru: 'скорбеть, горевать', forms: 'er trauert · hat getrauert', note: 'trauern um + Akk — горевать о ком-то.', example: { de: 'Die Familie trauert um ihre Mutter.', ru: 'Семья скорбит о матери.', cloze: 'trauert' } },
    { id: 'pfl-a22-05-beileid', icon: 'Heart', de: 'Beileid', pos: 'noun', article: 'das', ru: 'соболезнование', note: 'Mein herzliches Beileid. — Мои искренние соболезнования.', example: { de: 'Mein herzliches Beileid.', ru: 'Мои искренние соболезнования.', cloze: 'Beileid' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Was ist Ihnen wichtig?',
      de: `Der Krebs von Frau Krüger ist unheilbar. Sie kommt auf die Palliativstation. Hier geht es nicht mehr um Heilung, sondern um Lebensqualität und Würde.

Olena setzt sich zu ihr und fragt: „Was ist Ihnen jetzt wichtig? Haben Sie einen Wunsch?“ Frau Krüger lächelt: „Ich möchte noch einmal meinen Garten sehen. Und keine Schmerzen haben.“

Frau Krüger hat eine Patientenverfügung. Darin steht, dass sie keine lebensverlängernden Maßnahmen möchte, zum Beispiel keine Wiederbelebung. Das Team respektiert ihren Willen. Am Dienstag kommt der Seelsorger. Frau Krüger ist nicht religiös, aber sie spricht gern mit ihm über ihr Leben.`,
      ru: `Рак госпожи Крюгер неизлечим. Её переводят в паллиативное отделение. Здесь речь идёт уже не об излечении, а о качестве жизни и достоинстве.

Олена садится рядом и спрашивает: «Что для вас сейчас важно? У вас есть желание?» Госпожа Крюгер улыбается: «Я хотела бы ещё раз увидеть свой сад. И чтобы не было боли».

У госпожи Крюгер есть распоряжение пациента. В нём написано, что она не хочет мер, продлевающих жизнь, например реанимации. Команда уважает её волю. Во вторник приходит священник. Госпожа Крюгер не религиозна, но с удовольствием говорит с ним о своей жизни.`,
      gloss: { worum: 'о чём', größter: 'самый большой', olena: 'Олена (имя)', lächelt: 'улыбается', dienstag: 'вторник', wünscht: 'желает (sich wünschen)', hamburg: 'Гамбург', fahren: 'ехать', krüger: 'Крюгер (фамилия)', heilung: 'излечение', sondern: 'а, но (после отрицания)', garten: 'сад', darin: 'в нём', wiederbelebung: 'реанимация', team: 'команда', respektiert: 'уважает', willen: 'воля', religiös: 'религиозный', leben: 'жизнь', geht: '(es geht um) речь идёт о' },
      questions: [
        { q: 'Worum geht es auf der Palliativstation?', ru: 'О чём идёт речь в паллиативном отделении?', options: ['Um Lebensqualität und Würde', 'Um Heilung', 'Um Operationen'], answer: 'Um Lebensqualität und Würde' },
        { q: 'Was wünscht sich Frau Krüger?', ru: 'Чего хочет госпожа Крюгер?', options: ['Noch einmal ihren Garten sehen', 'Nach Hamburg fahren', 'Eine Operation'], answer: 'Noch einmal ihren Garten sehen' },
        { q: 'Was steht in ihrer Patientenverfügung?', ru: 'Что написано в её распоряжении?', options: ['Keine lebensverlängernden Maßnahmen', 'Alle Maßnahmen', 'Nichts'], answer: 'Keine lebensverlängernden Maßnahmen' },
      ],
      translate: [
        { de: 'Die Krankheit ist unheilbar.', ru: 'Болезнь неизлечима.', wrongRu: ['Болезнь легко вылечить.', 'Болезнь заразна.'] },
        { de: 'Was ist Ihr größter Wunsch?', ru: 'Какое ваше самое большое желание?', wrongRu: ['Какая ваша самая большая проблема?', 'Какой ваш самый большой страх?'] },
        { de: 'Das Team respektiert ihren Willen.', ru: 'Команда уважает её волю.', wrongRu: ['Команда не знает её волю.', 'Семья уважает её волю.'] },
      ],
    },
    {
      lesson: 1, title: 'Abschied',
      de: `Zwei Wochen später geht es Frau Krüger schlechter. Sie schläft viel und isst nichts mehr. Ihre Tochter sitzt Tag und Nacht an ihrem Bett. Das Team begleitet beide.

In der Nacht zum Sonntag ist Frau Krüger friedlich gestorben. Ihre Tochter war bei ihr. Olena gibt ihr die Hand und sagt: „Mein herzliches Beileid.“ Die Tochter weint. „Danke, dass Sie meine Mutter so gut begleitet haben.“

Die Familie kann in Ruhe Abschied nehmen. Später spricht Olena mit Sabine über den Tod. „Das ist nicht leicht für mich“, sagt Olena. Sabine nickt: „Auch wir trauern. Darüber zu sprechen hilft.“`,
      ru: `Через две недели госпоже Крюгер становится хуже. Она много спит и больше ничего не ест. Её дочь сидит у её постели днём и ночью. Команда поддерживает обеих.

В ночь на воскресенье госпожа Крюгер мирно умерла. Дочь была рядом. Олена берёт её за руку и говорит: «Мои искренние соболезнования». Дочь плачет. «Спасибо, что вы так хорошо были рядом с моей мамой».

Семья может спокойно попрощаться. Позже Олена говорит с Сабиной о смерти. «Мне это нелегко», — говорит Олена. Сабина кивает: «Мы тоже горюем. Об этом помогает поговорить».`,
      gloss: { herzliches: 'сердечное, искреннее', besserung: 'выздоровление; (Gute Besserung!) Выздоравливайте!', schlechter: 'хуже', nacht: 'ночь', sonntag: 'воскресенье', olena: 'Олена (имя)', sabine: 'Сабина (имя)', dienstag: 'вторник', krüger: 'Крюгер (фамилия)', beide: 'обеих, обоих', weint: 'плачет', nickt: 'кивает', darüber: 'об этом', war: 'была' },
      questions: [
        { q: 'Wer sitzt am Bett von Frau Krüger?', ru: 'Кто сидит у постели госпожи Крюгер?', options: ['Ihre Tochter', 'Ihr Sohn', 'Der Seelsorger'], answer: 'Ihre Tochter' },
        { q: 'Wann ist Frau Krüger gestorben?', ru: 'Когда умерла госпожа Крюгер?', options: ['In der Nacht zum Sonntag', 'Am Dienstag', 'Am Morgen'], answer: 'In der Nacht zum Sonntag' },
        { q: 'Was sagt Olena zur Tochter?', ru: 'Что Олена говорит дочери?', options: ['Mein herzliches Beileid.', 'Gute Besserung!', 'Bis morgen!'], answer: 'Mein herzliches Beileid.' },
      ],
      translate: [
        { de: 'Sie ist friedlich gestorben.', ru: 'Она мирно умерла.', wrongRu: ['Она мирно спит.', 'Она тяжело умирала.'] },
        { de: 'Die Familie kann Abschied nehmen.', ru: 'Семья может попрощаться.', wrongRu: ['Семья не может прийти.', 'Семья может забрать вещи.'] },
        { de: 'Wir begleiten sie bis zum Ende.', ru: 'Мы будем рядом с ней до конца.', wrongRu: ['Мы отвезём её домой.', 'Мы оставим её одну.'] },
      ],
    },
  ],
};
