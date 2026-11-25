import type { Module } from '../types.ts';

// A1.2 pflege 04: helping with meals — spoon, cutting, swallowing (lesson 0); allergies, diabetes, ordering the menu (lesson 1).

export const module: Module = {
  id: 'pflege-a12-04-essen-reichen', sphere: 'pflege', level: 'A1.2',
  title: 'Beim Essen helfen', subtitle: 'Кормление: ложка, мягкая пища, глотание, аллергии и диабет, заказ меню.',
  words: [
    { id: 'pfl-a12-04-loeffel', icon: 'Utensils', imageQuery: 'spoon', de: 'Löffel', pos: 'noun', article: 'der', plural: 'Löffel', ru: 'ложка', example: { de: 'Hier ist ein Löffel für die Suppe.', ru: 'Вот ложка для супа.', cloze: 'Löffel' } },
    { id: 'pfl-a12-04-gabel', icon: 'Utensils', imageQuery: 'fork', de: 'Gabel', pos: 'noun', article: 'die', plural: 'Gabeln', ru: 'вилка', example: { de: 'Können Sie die Gabel halten?', ru: 'Вы можете держать вилку?', cloze: 'Gabel' } },
    { id: 'pfl-a12-04-messer', icon: 'Slice', imageQuery: 'table knife', de: 'Messer', pos: 'noun', article: 'das', plural: 'Messer', ru: 'нож', example: { de: 'Das Messer ist nicht scharf.', ru: 'Нож не острый.', cloze: 'Messer' } },
    { id: 'pfl-a12-04-schneiden', icon: 'Scissors', de: 'schneiden', pos: 'verb', ru: 'резать', forms: 'er schneidet · hat geschnitten', note: 'klein schneiden — нарезать мелко.', collocation: { de: 'das Fleisch klein schneiden', ru: 'мелко нарезать мясо' }, example: { de: 'Soll ich das Fleisch klein schneiden?', ru: 'Мне нарезать мясо мелко?', cloze: 'schneiden' } },
    { id: 'pfl-a12-04-schlucken', icon: 'ArrowDownCircle', de: 'schlucken', pos: 'verb', ru: 'глотать', forms: 'er schluckt · hat geschluckt', note: 'Schluckstörung — нарушение глотания.', example: { de: 'Er kann nicht gut schlucken.', ru: 'Он плохо глотает.', cloze: 'schlucken' } },
    { id: 'pfl-a12-04-serviette', icon: 'StickyNote', de: 'Serviette', pos: 'noun', article: 'die', plural: 'Servietten', ru: 'салфетка', example: { de: 'Ich lege Ihnen eine Serviette hin.', ru: 'Я положу вам салфетку.', cloze: 'Serviette' } },
    { id: 'pfl-a12-04-weich', icon: 'Cloud', de: 'weich', pos: 'adj', ru: 'мягкий', note: 'weiche Kost — мягкая (щадящая) пища.', example: { de: 'Er bekommt nur weiches Essen.', ru: 'Он получает только мягкую пищу.', cloze: 'weiches' } },
    { id: 'pfl-a12-04-brei', icon: 'Soup', de: 'Brei', pos: 'noun', article: 'der', plural: 'Breie', ru: 'каша, пюре', note: 'der Kartoffelbrei — картофельное пюре.', example: { de: 'Heute gibt es Kartoffelbrei.', ru: 'Сегодня картофельное пюре.', cloze: 'brei' } },

    { id: 'pfl-a12-04-allergie', icon: 'TriangleAlert', de: 'Allergie', pos: 'noun', article: 'die', plural: 'Allergien', ru: 'аллергия', note: 'eine Allergie gegen + Akk: gegen Nüsse.', collocation: { de: 'eine Allergie haben', ru: 'иметь аллергию' }, example: { de: 'Haben Sie eine Allergie?', ru: 'У вас есть аллергия?', cloze: 'Allergie' } },
    { id: 'pfl-a12-04-diabetes', icon: 'Droplet', de: 'Diabetes', pos: 'noun', article: 'der', ru: 'диабет', note: 'Diabetiker / Diabetikerin — диабетик. Разговорно: Zucker haben.', example: { de: 'Herr Yilmaz hat Diabetes.', ru: 'У господина Йылмаза диабет.', cloze: 'Diabetes' } },
    { id: 'pfl-a12-04-zucker', icon: 'Candy', de: 'Zucker', pos: 'noun', article: 'der', ru: 'сахар', example: { de: 'Bitte keinen Zucker in den Tee.', ru: 'Пожалуйста, без сахара в чай.', cloze: 'Zucker' } },
    { id: 'pfl-a12-04-saft', icon: 'CupSoda', imageQuery: 'orange juice glass', de: 'Saft', pos: 'noun', article: 'der', plural: 'Säfte', ru: 'сок', example: { de: 'Möchten Sie Apfelsaft oder Orangensaft?', ru: 'Хотите яблочный сок или апельсиновый?', cloze: 'saft' } },
    { id: 'pfl-a12-04-milch', icon: 'Milk', imageQuery: 'glass of milk', de: 'Milch', pos: 'noun', article: 'die', ru: 'молоко', example: { de: 'Trinken Sie den Kaffee mit Milch?', ru: 'Вы пьёте кофе с молоком?', cloze: 'Milch' } },
    { id: 'pfl-a12-04-joghurt', icon: 'IceCreamBowl', imageQuery: 'yogurt cup', de: 'Joghurt', pos: 'noun', article: 'der', plural: 'Joghurts', ru: 'йогурт', note: 'Встречается и das Joghurt.', example: { de: 'Zum Nachtisch gibt es Joghurt.', ru: 'На десерт йогурт.', cloze: 'Joghurt' } },
    { id: 'pfl-a12-04-portion', icon: 'PieChart', de: 'Portion', pos: 'noun', article: 'die', plural: 'Portionen', ru: 'порция', collocation: { de: 'eine kleine Portion', ru: 'маленькая порция' }, example: { de: 'Ich möchte nur eine kleine Portion.', ru: 'Я хочу только маленькую порцию.', cloze: 'Portion' } },
    { id: 'pfl-a12-04-bestellen', icon: 'ClipboardList', de: 'bestellen', pos: 'verb', ru: 'заказывать', forms: 'er bestellt · hat bestellt', note: 'В больницах пациенты часто заказывают еду на завтра по меню.', example: { de: 'Was möchten Sie für morgen bestellen?', ru: 'Что вы хотите заказать на завтра?', cloze: 'bestellen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Hilfe beim Mittagessen',
      de: `Herr Becker hatte einen Schlaganfall. Seine rechte Hand ist schwach, und er kann nicht gut schlucken. Deshalb bekommt er nur weiches Essen.

Heute gibt es Fisch mit Kartoffelbrei. Olena setzt sich neben ihn. Sie legt ihm eine Serviette hin und schneidet den Fisch ganz klein. „Möchten Sie es allein versuchen?“, fragt sie. Herr Becker nimmt den Löffel in die linke Hand.

Es geht langsam, aber es geht. Die Gabel und das Messer braucht er nicht. Nach zwanzig Minuten ist der Teller leer. Olena ist stolz auf ihn.`,
      ru: `У господина Беккера был инсульт. Его правая рука слабая, и он плохо глотает. Поэтому он получает только мягкую пищу.

Сегодня рыба с картофельным пюре. Олена садится рядом с ним. Она кладёт ему салфетку и нарезает рыбу совсем мелко. «Хотите попробовать сами?» — спрашивает она. Господин Беккер берёт ложку в левую руку.

Получается медленно, но получается. Вилка и нож ему не нужны. Через двадцать минут тарелка пустая. Олена гордится им.`,
      gloss: { becker: 'Беккер (фамилия)', olena: 'Олена (имя)', herr: 'господин', hatte: 'имел; (hatte einen Schlaganfall) у него был инсульт', schlaganfall: 'инсульт', seine: 'его', rechte: 'правая', schwach: 'слабый', kann: 'может', deshalb: 'поэтому', bekommt: 'получает', nur: 'только', essen: 'еда', heute: 'сегодня', gibt: '(es gibt) есть, подают', fisch: 'рыба', kartoffelbrei: 'картофельное пюре', setzt: '(setzt sich) садится', neben: 'рядом с', ihn: 'него, его', legt: 'кладёт; (legt … hin) кладёт перед', hin: '(legt … hin) кладёт перед', ihm: 'ему', schneidet: 'режет', ganz: 'совсем', klein: 'маленький; мелко', möchten: 'хотите', allein: 'сам', versuchen: 'попробовать', fragt: 'спрашивает', nimmt: 'берёт', linke: 'левую', geht: '(es geht) получается', langsam: 'медленно', aber: 'но', braucht: 'нужно, нуждается', nach: 'через', zwanzig: 'двадцать', minuten: 'минут', teller: 'тарелка', leer: 'пустой', stolz: 'гордый; (stolz auf) гордится', auf: 'на', was: 'что', welche: 'какая', wie: 'как', lange: '(wie lange) как долго', zehn: 'десять', stunde: 'час', suppe: 'суп', brot: 'хлеб', hand: 'рука, кисть' },
      questions: [
        { q: 'Was gibt es heute?', ru: 'Что сегодня на обед?', options: ['Fisch mit Kartoffelbrei', 'Suppe mit Brot', 'Joghurt'], answer: 'Fisch mit Kartoffelbrei' },
        { q: 'Welche Hand ist schwach?', ru: 'Какая рука слабая?', options: ['Die rechte', 'Die linke', 'Beide'], answer: 'Die rechte' },
        { q: 'Wie lange isst Herr Becker?', ru: 'Сколько времени ест господин Беккер?', options: ['Zwanzig Minuten', 'Zehn Minuten', 'Eine Stunde'], answer: 'Zwanzig Minuten' },
      ],
      translate: [
        { de: 'Er kann nicht gut schlucken.', ru: 'Он плохо глотает.', wrongRu: ['Он плохо слышит.', 'Он хорошо глотает.'] },
        { de: 'Soll ich den Fisch klein schneiden?', ru: 'Мне нарезать рыбу мелко?', wrongRu: ['Мне нарезать мясо мелко?', 'Вы нарежете рыбу мелко?'] },
        { de: 'Er nimmt den Löffel in die linke Hand.', ru: 'Он берёт ложку в левую руку.', wrongRu: ['Он берёт вилку в левую руку.', 'Он берёт ложку в правую руку.'] },
      ],
    },
    {
      lesson: 1, title: 'Das Menü für morgen',
      de: `Am Nachmittag kommt Tom mit dem Menüplan. Die Patienten können das Essen für morgen bestellen. Es gibt drei Menüs.

Herr Yilmaz hat Diabetes. Er darf nicht viel Zucker essen. Tom sagt: „Menü zwei ist gut für Sie. Und zum Trinken? Saft hat viel Zucker. Lieber Tee oder Wasser.“

Frau Wolf hat eine Allergie gegen Nüsse. Sie bestellt Menü eins. Sie möchte nur eine kleine Portion. Zum Frühstück bestellt sie Joghurt und einen Kaffee mit Milch.`,
      ru: `Днём Том приходит с меню. Пациенты могут заказать еду на завтра. Есть три меню.

У господина Йылмаза диабет. Ему нельзя много сахара. Том говорит: «Меню два вам подходит. А пить? В соке много сахара. Лучше чай или вода».

У госпожи Вольф аллергия на орехи. Она заказывает меню один. Она хочет только маленькую порцию. На завтрак она заказывает йогурт и кофе с молоком.`,
      gloss: { wogegen: 'против чего, на что', tom: 'Том (имя)', yilmaz: 'Йылмаз (фамилия)', wolf: 'Вольф (фамилия)', herr: 'господин', frau: 'госпожа', nachmittag: 'вторая половина дня', kommt: 'приходит', mit: 'с', menüplan: 'меню (план питания)', menü: 'меню (набор блюд)', menüs: 'меню (мн. ч.)', patienten: 'пациенты', können: 'могут', essen: 'есть; еда', für: 'для, на', gibt: '(es gibt) есть', drei: 'три', darf: 'может (разрешено); (darf nicht) нельзя', viel: 'много', sagt: 'говорит', zwei: 'два', eins: 'один', zum: 'для, на (zu + dem)', trinken: 'пить; (zum Trinken) из напитков', lieber: 'лучше', gegen: 'против; (Allergie gegen) аллергия на', nüsse: 'орехи', bestellt: 'заказывает', möchte: 'хочет', kleine: 'маленькую', frühstück: 'завтрак', kaffee: 'кофе', was: 'что', wer: 'кто', welches: 'какое', warum: 'почему', tee: 'чай', wasser: 'вода', milch: 'молоко', fisch: 'рыба' },
      questions: [
        { q: 'Wer hat Diabetes?', ru: 'У кого диабет?', options: ['Herr Yilmaz', 'Frau Wolf', 'Tom'], answer: 'Herr Yilmaz' },
        { q: 'Wogegen hat Frau Wolf eine Allergie?', ru: 'На что у госпожи Вольф аллергия?', options: ['Gegen Nüsse', 'Gegen Milch', 'Gegen Fisch'], answer: 'Gegen Nüsse' },
        { q: 'Was bestellt Frau Wolf zum Frühstück?', ru: 'Что госпожа Вольф заказывает на завтрак?', options: ['Joghurt und Kaffee mit Milch', 'Saft und Brot', 'Tee und Zucker'], answer: 'Joghurt und Kaffee mit Milch' },
      ],
      translate: [
        { de: 'Haben Sie eine Allergie?', ru: 'У вас есть аллергия?', wrongRu: ['У вас есть диабет?', 'У вас есть меню?'] },
        { de: 'Saft hat viel Zucker.', ru: 'В соке много сахара.', wrongRu: ['В соке мало сахара.', 'В чае много сахара.'] },
        { de: 'Ich möchte nur eine kleine Portion.', ru: 'Я хочу только маленькую порцию.', wrongRu: ['Я хочу большую порцию.', 'Я не хочу есть.'] },
      ],
    },
  ],
};
