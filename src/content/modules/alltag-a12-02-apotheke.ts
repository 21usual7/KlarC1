import type { Module } from '../types.ts';

// A1.2 alltag 02: at the pharmacy — prescription, over-the-counter, how to take (lesson 0); cold, allergy, emergency pharmacy (lesson 1).

export const module: Module = {
  id: 'alltag-a12-02-apotheke', sphere: 'alltag', level: 'A1.2',
  title: 'In der Apotheke', subtitle: 'В аптеке: лекарства по рецепту и без, как принимать, дежурная аптека.',
  words: [
    { id: 'all-a12-02-apotheke', icon: 'Cross', imageQuery: 'german pharmacy sign', de: 'Apotheke', pos: 'noun', article: 'die', plural: 'Apotheken', ru: 'аптека', note: 'Узнаётся по красной букве A.', example: { de: 'Die Apotheke ist neben dem Supermarkt.', ru: 'Аптека рядом с супермаркетом.', cloze: 'Apotheke' } },
    { id: 'all-a12-02-medikament', icon: 'PillBottle', de: 'Medikament', pos: 'noun', article: 'das', plural: 'Medikamente', ru: 'лекарство', example: { de: 'Dieses Medikament ist für Kinder.', ru: 'Это лекарство для детей.', cloze: 'Medikament' } },
    { id: 'all-a12-02-tablette', icon: 'Pill', de: 'Tablette', pos: 'noun', article: 'die', plural: 'Tabletten', ru: 'таблетка', example: { de: 'Nehmen Sie eine Tablette am Morgen.', ru: 'Принимайте одну таблетку утром.', cloze: 'Tablette' } },
    { id: 'all-a12-02-rezeptfrei', icon: 'BadgeCheck', de: 'rezeptfrei', pos: 'adj', ru: 'без рецепта', note: 'rezeptpflichtig — только по рецепту.', example: { de: 'Diese Tabletten sind rezeptfrei.', ru: 'Эти таблетки продаются без рецепта.', cloze: 'rezeptfrei' } },
    { id: 'all-a12-02-einnehmen', icon: 'Pill', de: 'einnehmen', pos: 'verb', ru: 'принимать (лекарство)', forms: 'er nimmt ein · hat eingenommen', example: { de: 'Wie oft soll ich das einnehmen?', ru: 'Как часто мне это принимать?', cloze: 'einnehmen' } },
    { id: 'all-a12-02-dreimal-taeglich', icon: 'Repeat', de: 'dreimal täglich', pos: 'phrase', ru: 'три раза в день', note: 'einmal / zweimal täglich — раз / два раза в день.', example: { de: 'Nehmen Sie den Saft dreimal täglich.', ru: 'Принимайте сироп три раза в день.', cloze: 'dreimal täglich' } },
    { id: 'all-a12-02-packungsbeilage', icon: 'ScrollText', de: 'Packungsbeilage', pos: 'noun', article: 'die', plural: 'Packungsbeilagen', ru: 'инструкция (вкладыш)', parts: ['Packungs', 'beilage'], note: 'Также: der Beipackzettel.', example: { de: 'Lesen Sie die Packungsbeilage.', ru: 'Прочитайте инструкцию.', cloze: 'Packungsbeilage' } },
    { id: 'all-a12-02-hustensaft', icon: 'FlaskRound', imageQuery: 'cough syrup', de: 'Hustensaft', pos: 'noun', article: 'der', plural: 'Hustensäfte', ru: 'сироп от кашля', parts: ['Husten', 'saft'], example: { de: 'Der Hustensaft schmeckt süß.', ru: 'Сироп от кашля сладкий на вкус.', cloze: 'Hustensaft' } },

    { id: 'all-a12-02-erkaeltung', icon: 'Thermometer', de: 'Erkältung', pos: 'noun', article: 'die', plural: 'Erkältungen', ru: 'простуда', example: { de: 'Haben Sie etwas gegen eine Erkältung?', ru: 'У вас есть что-нибудь от простуды?', cloze: 'Erkältung' } },
    { id: 'all-a12-02-salbe', icon: 'Pipette', de: 'Salbe', pos: 'noun', article: 'die', plural: 'Salben', ru: 'мазь', example: { de: 'Die Salbe hilft gegen den Juckreiz.', ru: 'Мазь помогает от зуда.', cloze: 'Salbe' } },
    { id: 'all-a12-02-tropfen', icon: 'Droplet', de: 'Tropfen', pos: 'noun', article: 'der', plural: 'Tropfen', ru: 'капля; (мн. ч.) капли', example: { de: 'Ich brauche Tropfen für die Nase.', ru: 'Мне нужны капли для носа.', cloze: 'Tropfen' } },
    { id: 'all-a12-02-spray', icon: 'SprayCan', de: 'Spray', pos: 'noun', article: 'das', plural: 'Sprays', ru: 'спрей', example: { de: 'Das Nasenspray hilft schnell.', ru: 'Спрей для носа быстро помогает.', cloze: 'spray' } },
    { id: 'all-a12-02-pflaster', icon: 'Bandage', de: 'Pflaster', pos: 'noun', article: 'das', plural: 'Pflaster', ru: 'пластырь', example: { de: 'Karim braucht ein Pflaster.', ru: 'Кариму нужен пластырь.', cloze: 'Pflaster' } },
    { id: 'all-a12-02-allergie', icon: 'Flower2', de: 'Allergie', pos: 'noun', article: 'die', plural: 'Allergien', ru: 'аллергия', example: { de: 'Im Frühling habe ich eine Allergie.', ru: 'Весной у меня аллергия.', cloze: 'Allergie' } },
    { id: 'all-a12-02-nebenwirkung', icon: 'TriangleAlert', de: 'Nebenwirkung', pos: 'noun', article: 'die', plural: 'Nebenwirkungen', ru: 'побочное действие', parts: ['Neben', 'wirkung'], example: { de: 'Hat das Medikament Nebenwirkungen?', ru: 'У лекарства есть побочные действия?', cloze: 'Nebenwirkungen' } },
    { id: 'all-a12-02-notdienst', icon: 'Moon', de: 'Notdienst', pos: 'noun', article: 'der', plural: 'Notdienste', ru: 'дежурная служба (ночью, в выходные)', parts: ['Not', 'dienst'], note: 'Дежурную аптеку можно найти на сайте aponet.de или на двери любой аптеки.', example: { de: 'Am Sonntag hat nur eine Apotheke Notdienst.', ru: 'В воскресенье работает только дежурная аптека.', cloze: 'Notdienst' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Das Rezept einlösen',
      de: `Leyla geht mit dem Rezept in die Apotheke. Die Apothekerin gibt ihr einen Hustensaft. „Wie oft soll Nour das einnehmen?“, fragt Leyla.

„Dreimal täglich, nach dem Essen. Bitte lesen Sie auch die Packungsbeilage.“

Leyla hat auch Kopfschmerzen. „Haben Sie etwas gegen Kopfschmerzen?“ – „Ja, diese Tabletten sind rezeptfrei. Nehmen Sie nicht mehr als drei pro Tag.“ Leyla bezahlt zehn Euro.`,
      ru: `Лейла идёт с рецептом в аптеку. Фармацевт даёт ей сироп от кашля. «Как часто Нур его принимать?» — спрашивает Лейла.

«Три раза в день, после еды. Прочитайте, пожалуйста, и инструкцию».

У Лейлы тоже болит голова. «У вас есть что-нибудь от головной боли?» — «Да, эти таблетки без рецепта. Принимайте не больше трёх в день». Лейла платит десять евро.`,
      gloss: { zweimal: 'два раза', leyla: 'Лейла (имя)', nour: 'Нур (имя)', apothekerin: 'фармацевт (женщина)', einlösen: 'отоварить (рецепт)' },
      questions: [
        { q: 'Wie oft soll Nour den Hustensaft nehmen?', ru: 'Как часто Нур принимать сироп?', options: ['Dreimal täglich', 'Einmal täglich', 'Zweimal täglich'], answer: 'Dreimal täglich' },
        { q: 'Was hat Leyla?', ru: 'Что у Лейлы?', options: ['Kopfschmerzen', 'Fieber', 'Husten'], answer: 'Kopfschmerzen' },
        { q: 'Wie viele Tabletten darf Leyla pro Tag nehmen?', ru: 'Сколько таблеток в день можно Лейле?', options: ['Nicht mehr als drei', 'Zehn', 'Nur eine'], answer: 'Nicht mehr als drei' },
      ],
      translate: [
        { de: 'Wie oft soll ich das einnehmen?', ru: 'Как часто мне это принимать?', wrongRu: ['Сколько это стоит?', 'Когда мне это купить?'] },
        { de: 'Diese Tabletten sind rezeptfrei.', ru: 'Эти таблетки без рецепта.', wrongRu: ['Эти таблетки только по рецепту.', 'Эти таблетки бесплатные.'] },
        { de: 'Haben Sie etwas gegen Kopfschmerzen?', ru: 'У вас есть что-нибудь от головной боли?', wrongRu: ['У вас болит голова?', 'У вас есть что-нибудь от кашля?'] },
      ],
    },
    {
      lesson: 1, title: 'Am Sonntag',
      de: `Am Sonntag hat Amir eine starke Allergie. Seine Augen sind rot, die Nase läuft. Aber am Sonntag sind die Geschäfte zu. Was tun?

Frau Schulz hilft: „Eine Apotheke hat immer Notdienst. Schauen Sie an der Tür, da steht die Adresse.“

In der Notdienst-Apotheke kauft Amir Tropfen für die Augen und ein Nasenspray. Er fragt: „Hat das Nebenwirkungen?“ – „Sie werden vielleicht ein bisschen müde.“ Karim ist auch dabei. Er ist hingefallen und bekommt ein Pflaster.`,
      ru: `В воскресенье у Амира сильная аллергия. Глаза красные, из носа течёт. Но в воскресенье магазины закрыты. Что делать?

Госпожа Шульц помогает: «Одна аптека всегда дежурит. Посмотрите на двери — там написан адрес».

В дежурной аптеке Амир покупает капли для глаз и спрей для носа. Он спрашивает: «Есть побочные действия?» — «Возможно, вы будете немного сонным». Карим тоже с ним. Он упал, и ему дают пластырь.`,
      gloss: { sonntag: 'воскресенье', starke: 'сильное', rot: 'красный', bisschen: 'немного (ein bisschen)', amir: 'Амир (имя)', schulz: 'Шульц (фамилия)', karim: 'Карим (имя)', nase: 'нос', läuft: 'бежит; (die Nase läuft) течёт из носа', geschäfte: 'магазины', zu: 'закрыты', tun: 'делать', 'notdienst-apotheke': 'дежурная аптека', nasenspray: 'спрей для носа', hingefallen: 'упал', dabei: 'рядом, с ним' },
      questions: [
        { q: 'Was hat Amir am Sonntag?', ru: 'Что у Амира в воскресенье?', options: ['Eine Allergie', 'Fieber', 'Bauchschmerzen'], answer: 'Eine Allergie' },
        { q: 'Wo steht die Adresse der Notdienst-Apotheke?', ru: 'Где написан адрес дежурной аптеки?', options: ['An der Tür einer Apotheke', 'Im Supermarkt', 'Beim Arzt'], answer: 'An der Tür einer Apotheke' },
        { q: 'Was bekommt Karim?', ru: 'Что получает Карим?', options: ['Ein Pflaster', 'Tropfen', 'Ein Spray'], answer: 'Ein Pflaster' },
      ],
      translate: [
        { de: 'Am Sonntag hat eine Apotheke Notdienst.', ru: 'В воскресенье одна аптека дежурит.', wrongRu: ['В воскресенье все аптеки закрыты.', 'В субботу одна аптека дежурит.'] },
        { de: 'Hat das Nebenwirkungen?', ru: 'Есть побочные действия?', wrongRu: ['Это помогает?', 'Это дорого?'] },
        { de: 'Ich brauche Tropfen für die Augen.', ru: 'Мне нужны капли для глаз.', wrongRu: ['Мне нужен спрей для носа.', 'Мне нужны капли для ушей.'] },
      ],
    },
  ],
};
