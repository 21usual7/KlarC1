import type { Module } from '../types.ts';

// A1.1 pflege 08: hygiene — washing, shower, toilet (lesson 0); clothes, getting dressed (lesson 1).

export const module: Module = {
  id: 'pflege-a11-08-koerperpflege', sphere: 'pflege', level: 'A1.1',
  title: 'Waschen und Anziehen', subtitle: 'Гигиена и одежда: помыться, почистить зубы, одеться — простые просьбы к пациенту.',
  words: [
    { id: 'pfl-a11-08-waschen', icon: 'Droplets', de: 'waschen', pos: 'verb', ru: 'мыть, стирать', forms: 'er wäscht · hat gewaschen', note: 'sich waschen — умываться, мыться. du wäschst, er wäscht.', collocation: { de: 'sich waschen', ru: 'умываться, мыться' }, example: { de: 'Ich helfe Ihnen beim Waschen.', ru: 'Я помогу вам помыться.', cloze: 'Waschen' } },
    { id: 'pfl-a11-08-duschen', icon: 'ShowerHead', imageQuery: 'shower head', de: 'duschen', pos: 'verb', ru: 'принимать душ', forms: 'er duscht · hat geduscht', example: { de: 'Möchten Sie heute duschen?', ru: 'Хотите сегодня принять душ?', cloze: 'duschen' } },
    { id: 'pfl-a11-08-bad', icon: 'Bath', imageQuery: 'hospital bathroom', de: 'Bad', pos: 'noun', article: 'das', plural: 'Bäder', ru: 'ванная (комната)', collocation: { de: 'ins Bad gehen', ru: 'пойти в ванную' }, example: { de: 'Das Bad ist neben dem Zimmer.', ru: 'Ванная рядом с палатой.', cloze: 'Bad' } },
    { id: 'pfl-a11-08-toilette', icon: 'DoorClosed', de: 'Toilette', pos: 'noun', article: 'die', plural: 'Toiletten', ru: 'туалет', note: 'auf die Toilette gehen — сходить в туалет. Разговорно: das Klo.', collocation: { de: 'auf die Toilette gehen', ru: 'сходить в туалет' }, example: { de: 'Ich muss auf die Toilette.', ru: 'Мне нужно в туалет.', cloze: 'Toilette' } },
    { id: 'pfl-a11-08-zahnbuerste', icon: 'Brush', imageQuery: 'toothbrush', de: 'Zahnbürste', pos: 'noun', article: 'die', plural: 'Zahnbürsten', ru: 'зубная щётка', parts: ['Zahn', 'bürste'], example: { de: 'Wo ist Ihre Zahnbürste?', ru: 'Где ваша зубная щётка?', cloze: 'Zahnbürste' } },
    { id: 'pfl-a11-08-kamm', icon: 'Rows3', imageQuery: 'hair comb', de: 'Kamm', pos: 'noun', article: 'der', plural: 'Kämme', ru: 'расчёска', note: 'kämmen — причёсывать.', example: { de: 'Der Kamm liegt im Schrank.', ru: 'Расчёска лежит в шкафу.', cloze: 'Kamm' } },
    { id: 'pfl-a11-08-sauber', icon: 'Sparkles', de: 'sauber', pos: 'adj', ru: 'чистый', example: { de: 'Das Handtuch ist sauber.', ru: 'Полотенце чистое.', cloze: 'sauber' } },
    { id: 'pfl-a11-08-schmutzig', icon: 'Trash2', de: 'schmutzig', pos: 'adj', ru: 'грязный', example: { de: 'Das Hemd ist schmutzig.', ru: 'Рубашка грязная.', cloze: 'schmutzig' } },

    { id: 'pfl-a11-08-kleidung', icon: 'Shirt', imageQuery: 'clothes on hanger', de: 'Kleidung', pos: 'noun', article: 'die', ru: 'одежда', note: 'Без мн. ч. Одна вещь — das Kleidungsstück.', example: { de: 'Die Kleidung ist im Schrank.', ru: 'Одежда в шкафу.', cloze: 'Kleidung' } },
    { id: 'pfl-a11-08-hemd', icon: 'Shirt', imageQuery: 'shirt', de: 'Hemd', pos: 'noun', article: 'das', plural: 'Hemden', ru: 'рубашка', example: { de: 'Ich hole ein neues Hemd.', ru: 'Я принесу новую рубашку.', cloze: 'Hemd' } },
    { id: 'pfl-a11-08-hose', icon: 'Scissors', imageQuery: 'trousers', de: 'Hose', pos: 'noun', article: 'die', plural: 'Hosen', ru: 'брюки, штаны', note: 'По-немецки ед. ч.: eine Hose — одни брюки.', example: { de: 'Die Hose ist zu groß.', ru: 'Брюки слишком большие.', cloze: 'Hose' } },
    { id: 'pfl-a11-08-socke', icon: 'Footprints', imageQuery: 'socks', de: 'Socke', pos: 'noun', article: 'die', plural: 'Socken', ru: 'носок', example: { de: 'Ihre Füße sind kalt. Hier sind Socken.', ru: 'У вас холодные ноги. Вот носки.', cloze: 'Socken' } },
    { id: 'pfl-a11-08-schuh', icon: 'Footprints', imageQuery: 'slippers', de: 'Schuh', pos: 'noun', article: 'der', plural: 'Schuhe', ru: 'ботинок, туфля; (мн. ч.) обувь', note: 'Тапочки — die Hausschuhe.', example: { de: 'Ziehen Sie bitte die Schuhe an.', ru: 'Наденьте, пожалуйста, обувь.', cloze: 'Schuhe' } },
    { id: 'pfl-a11-08-nachthemd', icon: 'Moon', de: 'Nachthemd', pos: 'noun', article: 'das', plural: 'Nachthemden', ru: 'ночная рубашка', parts: ['Nacht', 'hemd'], example: { de: 'Frau Wolf braucht ein frisches Nachthemd.', ru: 'Госпоже Вольф нужна чистая ночная рубашка.', cloze: 'Nachthemd' } },
    { id: 'pfl-a11-08-anziehen', icon: 'ArrowDownToLine', de: 'anziehen', pos: 'verb', ru: 'надевать; одевать', forms: 'er zieht an · hat angezogen', note: 'sich anziehen — одеваться. Отделяемая приставка: Ich ziehe mich an.', example: { de: 'Ich helfe Ihnen beim Anziehen.', ru: 'Я помогу вам одеться.', cloze: 'Anziehen' } },
    { id: 'pfl-a11-08-ausziehen', icon: 'ArrowUpFromLine', de: 'ausziehen', pos: 'verb', ru: 'снимать (одежду); раздевать', forms: 'er zieht aus · hat ausgezogen', note: 'sich ausziehen — раздеваться.', example: { de: 'Ziehen Sie bitte das Hemd aus.', ru: 'Снимите, пожалуйста, рубашку.', cloze: 'Ziehen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Im Bad',
      de: `Am Morgen hilft Olena Herrn Schmidt beim Waschen. Herr Schmidt kann nicht gut laufen. Olena fragt: „Möchten Sie heute duschen?“ Herr Schmidt sagt: „Nein, heute nicht. Ich wasche mich am Waschbecken.“

Olena bringt ein sauberes Handtuch und die Zahnbürste. Dann kämmt Herr Schmidt seine Haare. Der Kamm ist alt, aber gut.

Später sagt Herr Schmidt: „Ich muss auf die Toilette.“ Olena hilft ihm. Das Handtuch ist jetzt schmutzig. Sie bringt ein neues.`,
      ru: `Утром Олена помогает господину Шмидту умыться. Господин Шмидт плохо ходит. Олена спрашивает: «Хотите сегодня принять душ?» Господин Шмидт говорит: «Нет, сегодня нет. Я умоюсь у раковины».

Олена приносит чистое полотенце и зубную щётку. Потом господин Шмидт причёсывается. Расчёска старая, но хорошая.

Позже господин Шмидт говорит: «Мне нужно в туалет». Олена ему помогает. Полотенце теперь грязное. Она приносит новое.`,
      gloss: { olena: 'Олена (имя)', schmidt: 'Шмидт (фамилия)', herrn: 'господину (дат.)', herr: 'господин', beim: 'при, во время (bei + dem)', kann: 'может', laufen: 'ходить', fragt: 'спрашивает', möchten: 'хотите', sagt: 'говорит', wasche: 'мою; (ich wasche mich) я умываюсь', waschbecken: 'раковина', bringt: 'приносит', sauberes: 'чистое', dann: 'потом, затем', kämmt: 'причёсывает', seine: 'свои', haare: 'волосы', alt: 'старый', später: 'позже', muss: 'должен; (ich muss auf die Toilette) мне нужно в туалет', ihm: 'ему', jetzt: 'теперь, сейчас', neues: 'новое', wo: 'где', was: 'что', wie: 'как, какой', wer: 'кто', heute: 'сегодня', dusche: 'душ' },
      questions: [
        { q: 'Wo wäscht sich Herr Schmidt?', ru: 'Где умывается господин Шмидт?', options: ['Am Waschbecken', 'In der Dusche', 'Im Bett'], answer: 'Am Waschbecken' },
        { q: 'Wie ist der Kamm?', ru: 'Какая расчёска?', options: ['Alt, aber gut', 'Neu', 'Schmutzig'], answer: 'Alt, aber gut' },
        { q: 'Was ist am Ende schmutzig?', ru: 'Что в конце грязное?', options: ['Das Handtuch', 'Die Zahnbürste', 'Der Kamm'], answer: 'Das Handtuch' },
      ],
      translate: [
        { de: 'Möchten Sie heute duschen?', ru: 'Хотите сегодня принять душ?', wrongRu: ['Хотите сегодня умыться?', 'Хотите завтра принять душ?'] },
        { de: 'Ich muss auf die Toilette.', ru: 'Мне нужно в туалет.', wrongRu: ['Мне нужно в ванную.', 'Ему нужно в туалет.'] },
        { de: 'Das Handtuch ist sauber.', ru: 'Полотенце чистое.', wrongRu: ['Полотенце грязное.', 'Рубашка чистая.'] },
      ],
    },
    {
      lesson: 1, title: 'Frische Kleidung',
      de: `Frau Wolf möchte heute nicht im Bett bleiben. Sie möchte sich anziehen. Olena öffnet den Schrank. Dort ist ihre Kleidung.

Zuerst zieht Frau Wolf das Nachthemd aus. Dann zieht sie ein Hemd und eine Hose an. Die Hose ist ein bisschen groß. Ihre Füße sind kalt. Olena bringt warme Socken.

Am Ende fragt Olena: „Wo sind Ihre Schuhe?“ Frau Wolf lacht: „Unter dem Bett!“`,
      ru: `Госпожа Вольф сегодня не хочет оставаться в постели. Она хочет одеться. Олена открывает шкаф. Там её одежда.

Сначала госпожа Вольф снимает ночную рубашку. Потом надевает рубашку и брюки. Брюки немного великоваты. У неё холодные ноги. Олена приносит тёплые носки.

В конце Олена спрашивает: «Где ваша обувь?» Госпожа Вольф смеётся: «Под кроватью!»`,
      gloss: { olena: 'Олена (имя)', wolf: 'Вольф (фамилия)', frau: 'госпожа', möchte: 'хочет', bleiben: 'оставаться', öffnet: 'открывает', schrank: 'шкаф', dort: 'там', zuerst: 'сначала', zieht: 'тянет; (zieht … an / aus) надевает / снимает', aus: '(zieht … aus) снимает', an: '(zieht … an) надевает', dann: 'потом, затем', bisschen: '(ein bisschen) немного', groß: 'большой', füße: 'ноги, стопы', bringt: 'приносит', warme: 'тёплые', ende: 'конец; (am Ende) в конце', fragt: 'спрашивает', lacht: 'смеётся', unter: 'под', wo: 'где', was: 'что', wie: 'как, какой', klein: 'маленький', frische: 'свежая, чистая', mich: 'меня, себя', sich: 'себя, -ся' },
      questions: [
        { q: 'Was zieht Frau Wolf zuerst aus?', ru: 'Что госпожа Вольф снимает сначала?', options: ['Das Nachthemd', 'Die Hose', 'Die Socken'], answer: 'Das Nachthemd' },
        { q: 'Wie ist die Hose?', ru: 'Какие брюки?', options: ['Ein bisschen groß', 'Zu klein', 'Schmutzig'], answer: 'Ein bisschen groß' },
        { q: 'Wo sind die Schuhe?', ru: 'Где обувь?', options: ['Unter dem Bett', 'Im Schrank', 'Im Bad'], answer: 'Unter dem Bett' },
      ],
      translate: [
        { de: 'Frau Wolf zieht das Nachthemd aus.', ru: 'Госпожа Вольф снимает ночную рубашку.', wrongRu: ['Госпожа Вольф надевает ночную рубашку.', 'Госпожа Вольф снимает брюки.'] },
        { de: 'Hier sind warme Socken.', ru: 'Вот тёплые носки.', wrongRu: ['Вот холодные носки.', 'Вот тёплая рубашка.'] },
        { de: 'Wo sind Ihre Schuhe?', ru: 'Где ваша обувь?', wrongRu: ['Где ваша одежда?', 'Где её обувь?'] },
      ],
    },
  ],
};
