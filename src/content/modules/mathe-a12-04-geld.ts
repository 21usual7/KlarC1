import type { Module } from '../types.ts';

// A1.2 mathe 04: pocket money and saving (lesson 0), buying a bike with a discount and change (lesson 1).

export const module: Module = {
  id: 'mathe-a12-04-geld', sphere: 'mathe', level: 'A1.2',
  title: 'Geld und Preise', subtitle: 'Монеты, сдача, скидка и чек: считаем деньги по-немецки.',
  words: [
    { id: 'mat-a12-04-taschengeld', icon: 'Wallet', imageQuery: 'child piggy bank coins', de: 'Taschengeld', pos: 'noun', article: 'das', ru: 'карманные деньги', parts: ['Taschen', 'geld'], note: 'die Tasche (карман, сумка) + das Geld.', example: { de: 'Ich bekomme zehn Euro Taschengeld pro Woche.', ru: 'Я получаю десять евро карманных денег в неделю.', cloze: 'Taschengeld' } },
    { id: 'mat-a12-04-sparschwein', icon: 'PiggyBank', imageQuery: 'piggy bank', de: 'Sparschwein', pos: 'noun', article: 'das', plural: 'Sparschweine', ru: 'копилка', parts: ['Spar', 'schwein'], note: 'Буквально «свинья для сбережений».', example: { de: 'Das Sparschwein ist fast voll.', ru: 'Копилка почти полная.', cloze: 'Sparschwein' } },
    { id: 'mat-a12-04-sparen', icon: 'Landmark', de: 'sparen', pos: 'verb', ru: 'копить, экономить', forms: 'er spart · hat gespart', note: 'für + Akk sparen — копить на что-то.', collocation: { de: 'Geld sparen', ru: 'копить деньги', accept: ['viel Geld sparen'] }, example: { de: 'Paul spart für ein Fahrrad.', ru: 'Пауль копит на велосипед.', cloze: 'spart' } },
    { id: 'mat-a12-04-ausgeben', icon: 'HandCoins', de: 'ausgeben', pos: 'verb', ru: 'тратить (деньги)', forms: 'er gibt aus · hat ausgegeben', note: 'Geld für + Akk ausgeben — тратить деньги на что-то.', collocation: { de: 'Geld ausgeben', ru: 'тратить деньги', accept: ['viel Geld ausgeben'] }, example: { de: 'Er gibt zu viel Geld für Süßigkeiten aus.', ru: 'Он тратит слишком много денег на сладости.', cloze: 'gibt' } },
    { id: 'mat-a12-04-muenze', icon: 'Coins', imageQuery: 'euro coins', de: 'Münze', pos: 'noun', article: 'die', plural: 'Münzen', ru: 'монета', example: { de: 'Ich habe nur Münzen in der Tasche.', ru: 'У меня в кармане только монеты.', cloze: 'Münzen' } },
    { id: 'mat-a12-04-geldschein', icon: 'Banknote', imageQuery: 'euro banknotes', de: 'Geldschein', pos: 'noun', article: 'der', plural: 'Geldscheine', ru: 'купюра, банкнота', parts: ['Geld', 'schein'], note: 'Коротко: der Schein. ein Zehn-Euro-Schein — десятиевровая купюра.', example: { de: 'Paul steckt einen Geldschein ins Sparschwein.', ru: 'Пауль кладёт купюру в копилку.', cloze: 'Geldschein' } },
    { id: 'mat-a12-04-teuer', icon: 'Gem', de: 'teuer', pos: 'adj', ru: 'дорогой', note: 'Перед существительным -e- выпадает: ein teures Fahrrad.', example: { de: 'Das Fahrrad ist sehr teuer.', ru: 'Велосипед очень дорогой.', cloze: 'teuer' } },
    { id: 'mat-a12-04-betrag', icon: 'Calculator', de: 'Betrag', pos: 'noun', article: 'der', plural: 'Beträge', ru: 'сумма (денег)', note: 'Summe — результат сложения в математике, Betrag — сумма денег (и модуль числа).', example: { de: 'Der Betrag ist zweihundert Euro.', ru: 'Сумма — двести евро.', cloze: 'Betrag' } },
    { id: 'mat-a12-04-kosten', icon: 'Tag', de: 'kosten', pos: 'verb', ru: 'стоить', forms: 'es kostet · hat gekostet', note: 'Was kostet das? / Wie viel kostet das? — Сколько это стоит?', example: { de: 'Was kostet das Eis?', ru: 'Сколько стоит мороженое?', cloze: 'kostet' } },
    { id: 'mat-a12-04-bezahlen', icon: 'CreditCard', de: 'bezahlen', pos: 'verb', ru: 'платить, оплачивать', forms: 'er bezahlt · hat bezahlt', note: 'Без ge- в Perfekt: hat bezahlt. bar bezahlen — платить наличными.', collocation: { de: 'an der Kasse bezahlen', ru: 'платить на кассе', accept: ['bei der Kasse bezahlen'] }, example: { de: 'Ich bezahle an der Kasse.', ru: 'Я плачу на кассе.', cloze: 'bezahle' } },
    { id: 'mat-a12-04-wechselgeld', icon: 'RefreshCcw', de: 'Wechselgeld', pos: 'noun', article: 'das', ru: 'сдача', parts: ['Wechsel', 'geld'], example: { de: 'Der Verkäufer gibt mir das Wechselgeld.', ru: 'Продавец даёт мне сдачу.', cloze: 'Wechselgeld' } },
    { id: 'mat-a12-04-rabatt', icon: 'BadgePercent', de: 'Rabatt', pos: 'noun', article: 'der', plural: 'Rabatte', ru: 'скидка', note: 'zehn Prozent Rabatt — скидка десять процентов.', example: { de: 'Heute gibt es zwanzig Euro Rabatt.', ru: 'Сегодня скидка двадцать евро.', cloze: 'Rabatt' } },
    { id: 'mat-a12-04-kassenbon', icon: 'Receipt', imageQuery: 'shopping receipt', de: 'Kassenbon', pos: 'noun', article: 'der', plural: 'Kassenbons', ru: 'кассовый чек', parts: ['Kassen', 'bon'], note: 'В Австрии говорят и die Rechnung, и der Kassenzettel.', example: { de: 'Bitte heb den Kassenbon auf!', ru: 'Пожалуйста, сохрани чек!', cloze: 'Kassenbon' } },
    { id: 'mat-a12-04-billig', icon: 'ThumbsUp', de: 'billig', pos: 'adj', ru: 'дешёвый', note: 'Нейтральнее: günstig — выгодный, недорогой.', example: { de: 'Das T-Shirt war sehr billig.', ru: 'Футболка была очень дешёвой.', cloze: 'billig' } },
    { id: 'mat-a12-04-insgesamt', icon: 'Sigma', de: 'insgesamt', pos: 'adv', ru: 'всего, в сумме', example: { de: 'Insgesamt kostet das 225 Euro.', ru: 'Всего это стоит 225 евро.', cloze: 'Insgesamt' } },
    { id: 'mat-a12-04-zurueckgeben', icon: 'Undo2', de: 'zurückgeben', pos: 'verb', ru: 'возвращать, отдавать обратно', forms: 'er gibt zurück · hat zurückgegeben', example: { de: 'Der Verkäufer gibt ihm 25 Euro zurück.', ru: 'Продавец возвращает ему 25 евро.', cloze: 'gibt' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Paul spart',
      de: `Paul bekommt jede Woche zehn Euro Taschengeld. Er will ein Fahrrad kaufen. Aber das Fahrrad ist teuer: Es kostet 240 Euro.

Paul hat ein Sparschwein. Jeden Samstag steckt er einen Geldschein hinein. Manchmal gibt er Geld für Süßigkeiten aus. Dann sagt seine Mutter: „Gib weniger aus, dann kannst du mehr sparen!“

Nach einem halben Jahr öffnet Paul das Sparschwein. Er zählt die Münzen und die Scheine. Der Betrag ist 210 Euro. Es fehlen noch 30 Euro. Paul rechnet: Das sind noch drei Wochen!`,
      ru: `Пауль каждую неделю получает десять евро карманных денег. Он хочет купить велосипед. Но велосипед дорогой: он стоит 240 евро.

У Пауля есть копилка. Каждую субботу он кладёт в неё купюру. Иногда он тратит деньги на сладости. Тогда мама говорит: «Трать меньше, тогда сможешь больше накопить!»

Через полгода Пауль открывает копилку. Он считает монеты и купюры. Сумма — 210 евро. Не хватает ещё 30 евро. Пауль считает: это ещё три недели!`,
      gloss: { paul: 'Пауль (имя)', bekommt: 'получает', euro: 'евро', will: 'хочет', fahrrad: 'велосипед', kaufen: 'купить', aber: 'но', samstag: 'суббота', steckt: 'кладёт, суёт', hinein: 'внутрь', manchmal: 'иногда', geld: 'деньги', süßigkeiten: 'сладости', gib: 'давай; (gib aus) трать', weniger: 'меньше', kannst: 'можешь', halben: 'половину (ein halbes Jahr — полгода)', öffnet: 'открывает', scheine: 'купюры', fehlen: 'не хватает', noch: 'ещё', rechnet: 'считает', wochen: 'недели', pro: 'в, за (pro Woche — в неделю)', zweihundert: 'двести' },
      questions: [
        { q: 'Wie viel Taschengeld bekommt Paul?', ru: 'Сколько карманных денег получает Пауль?', options: ['Zehn Euro pro Woche', 'Dreißig Euro pro Woche', 'Zweihundert Euro pro Woche'], answer: 'Zehn Euro pro Woche' },
        { q: 'Was will Paul kaufen?', ru: 'Что Пауль хочет купить?', options: ['Ein Fahrrad', 'Ein Sparschwein', 'Süßigkeiten'], answer: 'Ein Fahrrad' },
        { q: 'Wie viel Geld fehlt noch?', ru: 'Сколько денег ещё не хватает?', options: ['30 Euro', '210 Euro', '240 Euro'], answer: '30 Euro' },
      ],
      translate: [
        { de: 'Paul spart für ein Fahrrad.', ru: 'Пауль копит на велосипед.', wrongRu: ['Пауль тратит деньги на велосипед.', 'Пауль покупает велосипед.'] },
        { de: 'Das Fahrrad ist sehr teuer.', ru: 'Велосипед очень дорогой.', wrongRu: ['Велосипед очень дешёвый.', 'Велосипед довольно дорогой.'] },
        { de: 'Er zählt die Münzen.', ru: 'Он считает монеты.', wrongRu: ['Он считает купюры.', 'Он тратит монеты.'] },
      ],
    },
    {
      lesson: 1, title: 'Das neue Fahrrad',
      de: `Endlich hat Paul genug Geld. Er geht mit seinem Vater ins Sportgeschäft. Heute gibt es zwanzig Euro Rabatt! Das Fahrrad kostet jetzt nur noch 220 Euro. Paul kauft auch eine Klingel für fünf Euro. Insgesamt sind das 225 Euro.

Paul bezahlt an der Kasse mit fünf Fünfzig-Euro-Scheinen. Das sind 250 Euro. Der Verkäufer gibt ihm 25 Euro Wechselgeld zurück und auch den Kassenbon.

Paul ist froh: Das war billig! Mit dem Wechselgeld kauft er ein Eis für sich und für seinen Vater.`,
      ru: `Наконец у Пауля достаточно денег. Он идёт с папой в спортивный магазин. Сегодня скидка двадцать евро! Велосипед теперь стоит всего 220 евро. Пауль покупает ещё звонок за пять евро. Всего получается 225 евро.

Пауль платит на кассе пятью купюрами по пятьдесят евро. Это 250 евро. Продавец возвращает ему 25 евро сдачи и чек.

Пауль рад: это было дёшево! На сдачу он покупает мороженое себе и папе.`,
      gloss: { endlich: 'наконец', paul: 'Пауль (имя)', genug: 'достаточно', geld: 'деньги', geht: 'идёт', seinem: 'своим', vater: 'папа, отец', sportgeschäft: 'спортивный магазин', euro: 'евро', fahrrad: 'велосипед', nur: 'только (nur noch — всего лишь)', noch: 'ещё', kauft: 'покупает', auch: 'тоже, также', klingel: 'звонок (велосипедный)', kasse: 'касса', 'fünfzig-euro-scheinen': 'купюрами по пятьдесят евро', verkäufer: 'продавец', ihm: 'ему', war: 'было', eis: 'мороженое', seinen: 'своего', sich: 'себя', neue: 'новый', wie: 'как', viel: 'сколько' },
      questions: [
        { q: 'Wie viel Rabatt gibt es heute?', ru: 'Какая сегодня скидка?', options: ['Zwanzig Euro', 'Fünf Euro', 'Fünfundzwanzig Euro'], answer: 'Zwanzig Euro' },
        { q: 'Was kostet alles insgesamt?', ru: 'Сколько стоит всё вместе?', options: ['225 Euro', '220 Euro', '250 Euro'], answer: '225 Euro' },
        { q: 'Was kauft Paul mit dem Wechselgeld?', ru: 'Что Пауль покупает на сдачу?', options: ['Ein Eis', 'Eine Klingel', 'Ein Fahrrad'], answer: 'Ein Eis' },
      ],
      translate: [
        { de: 'Paul bezahlt an der Kasse.', ru: 'Пауль платит на кассе.', wrongRu: ['Пауль ждёт на кассе.', 'Папа платит на кассе.'] },
        { de: 'Der Verkäufer gibt das Wechselgeld zurück.', ru: 'Продавец возвращает сдачу.', wrongRu: ['Продавец берёт сдачу.', 'Продавец возвращает чек.'] },
        { de: 'Heute gibt es zwanzig Euro Rabatt.', ru: 'Сегодня скидка двадцать евро.', wrongRu: ['Завтра скидка двадцать евро.', 'Сегодня скидка двенадцать евро.'] },
      ],
    },
  ],
};
