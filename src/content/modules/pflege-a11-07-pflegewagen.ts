import type { Module } from '../types.ts';

// A1.1 pflege 07: things on the care trolley — gloves, plasters, tablets (lesson 0); towel, soap, wheelchair, fetch and bring (lesson 1).

export const module: Module = {
  id: 'pflege-a11-07-pflegewagen', sphere: 'pflege', level: 'A1.1',
  title: 'Auf dem Pflegewagen', subtitle: 'Перчатки, пластырь, таблетки, полотенце: что лежит на тележке и как попросить коллегу принести.',
  words: [
    { id: 'pfl-a11-07-handschuh', icon: 'Hand', imageQuery: 'medical gloves', de: 'Handschuh', pos: 'noun', article: 'der', plural: 'Handschuhe', ru: 'перчатка', parts: ['Hand', 'schuh'], collocation: { de: 'Handschuhe anziehen', ru: 'надеть перчатки' }, example: { de: 'Ich ziehe Handschuhe an.', ru: 'Я надеваю перчатки.', cloze: 'Handschuhe' } },
    { id: 'pfl-a11-07-maske', icon: 'Shield', imageQuery: 'surgical mask', de: 'Maske', pos: 'noun', article: 'die', plural: 'Masken', ru: 'маска', collocation: { de: 'eine Maske tragen', ru: 'носить маску' }, example: { de: 'Im Zimmer tragen wir eine Maske.', ru: 'В палате мы носим маску.', cloze: 'Maske' } },
    { id: 'pfl-a11-07-pflaster', icon: 'Bandage', imageQuery: 'adhesive bandage', de: 'Pflaster', pos: 'noun', article: 'das', plural: 'Pflaster', ru: 'пластырь', example: { de: 'Ich brauche ein Pflaster.', ru: 'Мне нужен пластырь.', cloze: 'Pflaster' } },
    { id: 'pfl-a11-07-spritze', icon: 'Syringe', imageQuery: 'syringe', de: 'Spritze', pos: 'noun', article: 'die', plural: 'Spritzen', ru: 'шприц; укол', note: 'eine Spritze bekommen — получить укол.', example: { de: 'Der Patient bekommt eine Spritze.', ru: 'Пациенту делают укол.', cloze: 'Spritze' } },
    { id: 'pfl-a11-07-tablette', icon: 'Pill', imageQuery: 'pills tablets', de: 'Tablette', pos: 'noun', article: 'die', plural: 'Tabletten', ru: 'таблетка', note: 'Не путать с das Tablett — поднос!', collocation: { de: 'eine Tablette nehmen', ru: 'принять таблетку' }, example: { de: 'Nehmen Sie bitte die Tablette.', ru: 'Примите, пожалуйста, таблетку.', cloze: 'Tablette' } },
    { id: 'pfl-a11-07-medikament', icon: 'PillBottle', imageQuery: 'medicine bottles', de: 'Medikament', pos: 'noun', article: 'das', plural: 'Medikamente', ru: 'лекарство', collocation: { de: 'Medikamente nehmen', ru: 'принимать лекарства' }, example: { de: 'Herr Schmidt nimmt drei Medikamente.', ru: 'Господин Шмидт принимает три лекарства.', cloze: 'Medikamente' } },
    { id: 'pfl-a11-07-waage', icon: 'Scale', imageQuery: 'weighing scale', de: 'Waage', pos: 'noun', article: 'die', plural: 'Waagen', ru: 'весы', example: { de: 'Die Waage steht im Bad.', ru: 'Весы стоят в ванной.', cloze: 'Waage' } },
    { id: 'pfl-a11-07-wagen', icon: 'ShoppingCart', imageQuery: 'hospital trolley', de: 'Wagen', pos: 'noun', article: 'der', plural: 'Wagen', ru: 'тележка; машина', note: 'der Pflegewagen — тележка медсестры.', example: { de: 'Der Wagen steht im Flur.', ru: 'Тележка стоит в коридоре.', cloze: 'Wagen' } },

    { id: 'pfl-a11-07-handtuch', icon: 'Square', imageQuery: 'towels', de: 'Handtuch', pos: 'noun', article: 'das', plural: 'Handtücher', ru: 'полотенце', parts: ['Hand', 'tuch'], example: { de: 'Hier ist ein frisches Handtuch.', ru: 'Вот чистое полотенце.', cloze: 'Handtuch' } },
    { id: 'pfl-a11-07-seife', icon: 'Droplets', imageQuery: 'soap', de: 'Seife', pos: 'noun', article: 'die', plural: 'Seifen', ru: 'мыло', example: { de: 'Die Seife ist alle.', ru: 'Мыло закончилось.', cloze: 'Seife' } },
    { id: 'pfl-a11-07-schere', icon: 'Scissors', imageQuery: 'scissors', de: 'Schere', pos: 'noun', article: 'die', plural: 'Scheren', ru: 'ножницы', note: 'По-немецки ед. ч.: eine Schere — одни ножницы.', example: { de: 'Hast du eine Schere?', ru: 'У тебя есть ножницы?', cloze: 'Schere' } },
    { id: 'pfl-a11-07-becher', icon: 'CupSoda', imageQuery: 'plastic cup', de: 'Becher', pos: 'noun', article: 'der', plural: 'Becher', ru: 'стаканчик, кружка', note: 'der Medikamentenbecher — стаканчик для таблеток.', example: { de: 'Die Tabletten sind im Becher.', ru: 'Таблетки в стаканчике.', cloze: 'Becher' } },
    { id: 'pfl-a11-07-rollstuhl', icon: 'Accessibility', imageQuery: 'wheelchair', de: 'Rollstuhl', pos: 'noun', article: 'der', plural: 'Rollstühle', ru: 'инвалидная коляска', parts: ['Roll', 'stuhl'], collocation: { de: 'im Rollstuhl sitzen', ru: 'сидеть в инвалидной коляске' }, example: { de: 'Frau Wolf sitzt im Rollstuhl.', ru: 'Госпожа Вольф сидит в коляске.', cloze: 'Rollstuhl' } },
    { id: 'pfl-a11-07-holen', icon: 'Hand', de: 'holen', pos: 'verb', ru: 'приносить (сходив за чем-то), забирать', forms: 'er holt · hat geholt', note: 'holen — сходить и принести. Ich hole den Rollstuhl.', example: { de: 'Kannst du bitte Handschuhe holen?', ru: 'Можешь, пожалуйста, принести перчатки?', cloze: 'holen' } },
    { id: 'pfl-a11-07-bringen', icon: 'PackageOpen', de: 'bringen', pos: 'verb', ru: 'приносить, относить', forms: 'er bringt · hat gebracht', note: 'bringen + Dat + Akk: Ich bringe Ihnen Wasser.', example: { de: 'Ich bringe Ihnen ein Handtuch.', ru: 'Я принесу вам полотенце.', cloze: 'bringe' } },
    { id: 'pfl-a11-07-brauchen', icon: 'HandHelping', de: 'brauchen', pos: 'verb', ru: 'нуждаться, нужно', forms: 'er braucht · hat gebraucht', note: 'Ich brauche … — Мне нужно …', example: { de: 'Was brauchst du?', ru: 'Что тебе нужно?', cloze: 'brauchst' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Der Pflegewagen',
      de: `Olena macht den Pflegewagen fertig. Auf dem Wagen sind Handschuhe, Masken und Pflaster. Die Medikamente sind in einer Box.

Um acht Uhr geht Olena zu Herrn Schmidt. Sie zieht Handschuhe an. Herr Schmidt bekommt zwei Tabletten und eine Spritze. Er fragt: „Was ist das für ein Medikament?“ Olena sagt: „Gegen die Schmerzen.“

Dann bringt sie die Waage. Herr Schmidt wiegt achtzig Kilo.`,
      ru: `Олена готовит тележку. На тележке перчатки, маски и пластырь. Лекарства лежат в коробке.

В восемь часов Олена идёт к господину Шмидту. Она надевает перчатки. Господин Шмидт получает две таблетки и укол. Он спрашивает: «Что это за лекарство?» Олена говорит: «От боли».

Потом она приносит весы. Господин Шмидт весит восемьдесят килограммов.`,
      gloss: { olena: 'Олена (имя)', schmidt: 'Шмидт (фамилия)', herrn: 'господину (дат.)', herr: 'господин', macht: 'делает', fertig: 'готовый; (fertig machen) подготовить', pflegewagen: 'тележка медсестры', masken: 'маски', box: 'коробка', acht: 'восемь', zwei: 'два, две', achtzig: 'восемьдесят', geht: 'идёт', zieht: 'тянет; (zieht … an) надевает', an: 'на, у; (zieht … an) надевает', bekommt: 'получает', fragt: 'спрашивает', für: 'для; (was für ein) что за', sagt: 'говорит', gegen: 'против, от', dann: 'потом, затем', wiegt: 'весит', kilo: 'килограмм', wie: 'как', viel: 'много; (wie viel) сколько', was: 'что', wo: 'где', sechzig: 'шестьдесят', tisch: 'стол', bett: 'кровать' },
      questions: [
        { q: 'Wo sind die Medikamente?', ru: 'Где лекарства?', options: ['In einer Box', 'Im Bett', 'Auf dem Tisch'], answer: 'In einer Box' },
        { q: 'Was bekommt Herr Schmidt?', ru: 'Что получает господин Шмидт?', options: ['Zwei Tabletten und eine Spritze', 'Ein Pflaster', 'Eine Maske'], answer: 'Zwei Tabletten und eine Spritze' },
        { q: 'Wie viel wiegt Herr Schmidt?', ru: 'Сколько весит господин Шмидт?', options: ['Achtzig Kilo', 'Acht Kilo', 'Sechzig Kilo'], answer: 'Achtzig Kilo' },
      ],
      translate: [
        { de: 'Ich ziehe Handschuhe an.', ru: 'Я надеваю перчатки.', wrongRu: ['Я снимаю перчатки.', 'Я надеваю маску.'] },
        { de: 'Nehmen Sie bitte die Tablette.', ru: 'Примите, пожалуйста, таблетку.', wrongRu: ['Дайте мне, пожалуйста, таблетку.', 'Примите, пожалуйста, две таблетки.'] },
        { de: 'Das Medikament ist gegen Schmerzen.', ru: 'Это лекарство от боли.', wrongRu: ['Это лекарство от жара.', 'Это пластырь от боли.'] },
      ],
    },
    {
      lesson: 1, title: 'Kannst du das holen?',
      de: `Frau Wolf möchte duschen. Olena sagt zu Tom: „Ich brauche Hilfe. Kannst du bitte den Rollstuhl holen?“ Tom holt den Rollstuhl.

Im Bad ist die Seife alle. Olena fragt: „Tom, bringst du bitte Seife und zwei Handtücher?“ Tom bringt alles.

Nach dem Duschen hat Frau Wolf ein Pflaster am Arm. Olena braucht eine Schere. Dann gibt sie Frau Wolf die Tabletten in einem Becher.`,
      ru: `Госпожа Вольф хочет принять душ. Олена говорит Тому: «Мне нужна помощь. Можешь, пожалуйста, принести коляску?» Том приносит коляску.

В ванной закончилось мыло. Олена спрашивает: «Том, принесёшь, пожалуйста, мыло и два полотенца?» Том приносит всё.

После душа у госпожи Вольф пластырь на руке. Олене нужны ножницы. Потом она даёт госпоже Вольф таблетки в стаканчике.`,
      gloss: { olena: 'Олена (имя)', tom: 'Том (имя)', wolf: 'Вольф (фамилия)', frau: 'госпожа', möchte: 'хочет, хотела бы', duschen: 'принимать душ; (das Duschen) душ', sagt: 'говорит', zu: 'к; (sagt zu Tom) говорит Тому', kannst: 'можешь', bad: 'ванная', alle: '(ist alle) закончилось; все', fragt: 'спрашивает', bringst: 'принесёшь', zwei: 'два', alles: 'всё', nach: 'после', am: 'на (an + dem)', arm: 'рука', dann: 'потом, затем', gibt: 'даёт', was: 'что', wer: 'кто', wo: 'где', will: 'хочет', schlafen: 'спать', essen: 'есть', handtücher: 'полотенца' },
      questions: [
        { q: 'Was will Frau Wolf?', ru: 'Чего хочет госпожа Вольф?', options: ['Duschen', 'Schlafen', 'Essen'], answer: 'Duschen' },
        { q: 'Wer holt den Rollstuhl?', ru: 'Кто приносит коляску?', options: ['Tom', 'Olena', 'Frau Wolf'], answer: 'Tom' },
        { q: 'Wo sind die Tabletten?', ru: 'Где таблетки?', options: ['In einem Becher', 'Im Bad', 'Im Rollstuhl'], answer: 'In einem Becher' },
      ],
      translate: [
        { de: 'Kannst du den Rollstuhl holen?', ru: 'Можешь принести коляску?', wrongRu: ['Можешь отвезти коляску?', 'Можешь принести полотенце?'] },
        { de: 'Ich brauche eine Schere.', ru: 'Мне нужны ножницы.', wrongRu: ['У меня есть ножницы.', 'Мне нужен пластырь.'] },
        { de: 'Die Seife ist alle.', ru: 'Мыло закончилось.', wrongRu: ['Мыло здесь.', 'Полотенца закончились.'] },
      ],
    },
  ],
};
