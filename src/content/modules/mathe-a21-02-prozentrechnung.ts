import type { Module } from '../types.ts';

// A2.1 mathe 02: percentages in a sale — base value, rate, the rule of three (lesson 0), saving at the bank — interest and credit (lesson 1).

export const module: Module = {
  id: 'mathe-a21-02-prozentrechnung', sphere: 'mathe', level: 'A2.1',
  title: 'Prozentrechnung', subtitle: 'Основное значение, процентная ставка, тройное правило, проценты по вкладу и кредит.',
  words: [
    { id: 'mat-a21-02-grundwert', icon: 'Square', de: 'Grundwert', pos: 'noun', article: 'der', plural: 'Grundwerte', ru: 'основное значение (100 %)', parts: ['Grund', 'wert'], note: 'Три величины процентной задачи: Grundwert (G), Prozentsatz (p %), Prozentwert (W).', example: { de: 'Der alte Preis ist der Grundwert.', ru: 'Старая цена — это основное значение.', cloze: 'Grundwert' } },
    { id: 'mat-a21-02-prozentsatz', icon: 'Percent', de: 'Prozentsatz', pos: 'noun', article: 'der', plural: 'Prozentsätze', ru: 'процентная ставка, процент (p %)', parts: ['Prozent', 'satz'], example: { de: 'Der Prozentsatz ist hier dreißig Prozent.', ru: 'Процент здесь — тридцать.', cloze: 'Prozentsatz' } },
    { id: 'mat-a21-02-prozentwert', icon: 'SquareSplitHorizontal', de: 'Prozentwert', pos: 'noun', article: 'der', plural: 'Prozentwerte', ru: 'процентная величина (часть от целого)', parts: ['Prozent', 'wert'], note: 'W = G · p / 100.', example: { de: 'Der Prozentwert ist 24 Euro.', ru: 'Процентная величина — 24 евро.', cloze: 'Prozentwert' } },
    { id: 'mat-a21-02-dreisatz', icon: 'ListOrdered', de: 'Dreisatz', pos: 'noun', article: 'der', ru: 'тройное правило (пропорция)', parts: ['Drei', 'satz'], note: 'Три шага: 100 % → 1 % → нужный процент.', example: { de: 'Mit dem Dreisatz rechnen wir zuerst ein Prozent aus.', ru: 'С помощью тройного правила мы сначала вычисляем один процент.', cloze: 'Dreisatz' } },
    { id: 'mat-a21-02-reduziert', icon: 'TicketPercent', de: 'reduziert', pos: 'adj', ru: 'уценённый, со скидкой', note: 'Глагол: reduzieren — снижать. Auf Schildern: „Reduziert!“', example: { de: 'Die Jacke ist um dreißig Prozent reduziert.', ru: 'Куртка уценена на тридцать процентов.', cloze: 'reduziert' } },
    { id: 'mat-a21-02-ermaessigung', icon: 'BadgePercent', imageQuery: 'discount ticket', de: 'Ermäßigung', pos: 'noun', article: 'die', plural: 'Ermäßigungen', ru: 'льгота, скидка (для групп)', note: 'Для студентов и школьников: die Schülerermäßigung, die Studentenermäßigung.', example: { de: 'Mit dem Schülerausweis bekommst du eine Ermäßigung.', ru: 'Со школьным билетом ты получаешь скидку.', cloze: 'Ermäßigung' } },
    { id: 'mat-a21-02-mehrwertsteuer', icon: 'Receipt', imageQuery: 'receipt VAT', de: 'Mehrwertsteuer', pos: 'noun', article: 'die', ru: 'налог на добавленную стоимость (НДС)', parts: ['Mehrwert', 'steuer'], note: 'Сокращение: MwSt. В Австрии обычно 20 %.', example: { de: 'Im Preis sind zwanzig Prozent Mehrwertsteuer enthalten.', ru: 'В цену включено двадцать процентов НДС.', cloze: 'Mehrwertsteuer' } },
    { id: 'mat-a21-02-erhoehen', icon: 'TrendingUp', de: 'erhöhen', pos: 'verb', ru: 'повышать, увеличивать', forms: 'er erhöht · hat erhöht', note: 'um + Akk erhöhen — на сколько; auf + Akk — до какого значения.', example: { de: 'Der Laden erhöht die Preise um fünf Prozent.', ru: 'Магазин повышает цены на пять процентов.', cloze: 'erhöht' } },
    { id: 'mat-a21-02-zins', icon: 'Coins', imageQuery: 'bank interest', de: 'Zins', pos: 'noun', article: 'der', plural: 'Zinsen', ru: 'процент (по вкладу, кредиту)', note: 'Почти всегда во мн. ч.: die Zinsen. Zinsen bekommen / zahlen.', example: { de: 'Die Bank zahlt mir zwei Prozent Zinsen.', ru: 'Банк платит мне два процента годовых.', cloze: 'Zinsen' } },
    { id: 'mat-a21-02-zinssatz', icon: 'Percent', de: 'Zinssatz', pos: 'noun', article: 'der', plural: 'Zinssätze', ru: 'процентная ставка (банка)', parts: ['Zins', 'satz'], example: { de: 'Der Zinssatz ist im Moment niedrig.', ru: 'Процентная ставка сейчас низкая.', cloze: 'Zinssatz' } },
    { id: 'mat-a21-02-sparbuch', icon: 'BookOpen', imageQuery: 'savings account bank book', de: 'Sparbuch', pos: 'noun', article: 'das', plural: 'Sparbücher', ru: 'сберегательная книжка, вклад', parts: ['Spar', 'buch'], example: { de: 'Oma hat für Paul ein Sparbuch eröffnet.', ru: 'Бабушка открыла для Пауля сберегательную книжку.', cloze: 'Sparbuch' } },
    { id: 'mat-a21-02-anlegen', icon: 'PiggyBank', de: 'anlegen', pos: 'verb', ru: 'вкладывать (деньги)', forms: 'er legt an · hat angelegt', note: 'Geld anlegen — вложить деньги. Также: eine Datei anlegen — создать файл.', example: { de: 'Paul legt 1000 Euro für ein Jahr an.', ru: 'Пауль вкладывает 1000 евро на год.', cloze: 'legt' } },
    { id: 'mat-a21-02-guthaben', icon: 'Wallet', imageQuery: 'piggy bank', de: 'Guthaben', pos: 'noun', article: 'das', plural: 'Guthaben', ru: 'остаток на счёте, баланс', note: 'Также: das Guthaben auf der Handykarte — баланс телефона.', example: { de: 'Nach einem Jahr ist das Guthaben 1020 Euro.', ru: 'Через год на счёте 1020 евро.', cloze: 'Guthaben' } },
    { id: 'mat-a21-02-kredit', icon: 'Landmark', imageQuery: 'bank loan', de: 'Kredit', pos: 'noun', article: 'der', plural: 'Kredite', ru: 'кредит', note: 'einen Kredit aufnehmen — взять кредит.', collocation: { de: 'einen Kredit aufnehmen', ru: 'взять кредит', accept: ['einen Kredit nehmen'] }, example: { de: 'Für ein Auto nehmen viele Leute einen Kredit auf.', ru: 'Для покупки машины многие берут кредит.', cloze: 'Kredit' } },
    { id: 'mat-a21-02-jaehrlich', icon: 'CalendarDays', de: 'jährlich', pos: 'adj', ru: 'ежегодный; ежегодно', note: 'monatlich — ежемесячно, täglich — ежедневно.', example: { de: 'Die Zinsen werden jährlich gezahlt.', ru: 'Проценты выплачиваются ежегодно.', cloze: 'jährlich' } },
    { id: 'mat-a21-02-zuwachs', icon: 'ChartNoAxesColumnIncreasing', imageQuery: 'growing plant', de: 'Zuwachs', pos: 'noun', article: 'der', plural: 'Zuwächse', ru: 'прирост', note: 'Глагол: zuwachsen — прирастать (редко); чаще wachsen.', example: { de: 'Der Zuwachs ist nur zwanzig Euro.', ru: 'Прирост — всего двадцать евро.', cloze: 'Zuwachs' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Schlussverkauf',
      de: `Im Jänner ist Schlussverkauf. Sophie sieht eine Jacke im Schaufenster. Früher hat sie 80 Euro gekostet, jetzt ist sie um 30 Prozent reduziert. Der alte Preis ist der Grundwert, 30 Prozent ist der Prozentsatz.

Sophie rechnet mit dem Dreisatz: 100 Prozent sind 80 Euro, also ist 1 Prozent 80 Cent. 30 Prozent sind dann 24 Euro. Das ist der Prozentwert. Die Jacke kostet also nur noch 56 Euro.

An der Kasse zeigt Sophie ihren Schülerausweis und bekommt noch einmal eine Ermäßigung von 10 Prozent. Auf dem Kassenbon steht auch die Mehrwertsteuer: 20 Prozent sind schon im Preis enthalten. Sophie ist froh, denn ab Februar erhöht der Laden die Preise wieder.`,
      ru: `В январе — распродажа. Софи видит в витрине куртку. Раньше она стоила 80 евро, теперь уценена на 30 процентов. Старая цена — это основное значение, 30 процентов — процентная ставка.

Софи считает по тройному правилу: 100 процентов — это 80 евро, значит, 1 процент — 80 центов. Тогда 30 процентов — это 24 евро. Это процентная величина. Значит, куртка стоит всего 56 евро.

На кассе Софи показывает школьный билет и получает ещё скидку 10 процентов. В чеке указан и НДС: 20 процентов уже включены в цену. Софи рада, ведь с февраля магазин снова повышает цены.`,
      gloss: { jänner: 'январь (в Австрии)', schlussverkauf: 'распродажа (в конце сезона)', sophie: 'Софи (имя)', sieht: 'видит', jacke: 'куртка', schaufenster: 'витрина', früher: 'раньше', gekostet: 'стоила (kosten)', jetzt: 'теперь', alte: 'старая', preis: 'цена', rechnet: 'считает', also: 'значит', cent: 'центов', dann: 'тогда', nur: 'только (nur noch — всего лишь)', noch: 'ещё', kasse: 'касса', zeigt: 'показывает', ihren: 'свой', schülerausweis: 'школьный билет', bekommt: 'получает', einmal: 'раз (noch einmal — ещё раз)', steht: 'написано, стоит', auch: 'тоже', schon: 'уже', enthalten: 'включено, содержится', froh: 'рад', denn: 'ведь, потому что', ab: 'с (ab Februar — с февраля)', februar: 'февраль', laden: 'магазин', preise: 'цены', wieder: 'снова', euro: 'евро', wie: 'как', viel: 'сколько', was: 'что', welcher: 'какой' },
      questions: [
        { q: 'Um wie viel Prozent ist die Jacke reduziert?', ru: 'На сколько процентов уценена куртка?', options: ['Um 30 Prozent', 'Um 20 Prozent', 'Um 10 Prozent'], answer: 'Um 30 Prozent' },
        { q: 'Was kostet die Jacke nach dem Rabatt im Fenster?', ru: 'Сколько стоит куртка после скидки на витрине?', options: ['56 Euro', '24 Euro', '80 Euro'], answer: '56 Euro' },
        { q: 'Was zeigt Sophie an der Kasse?', ru: 'Что Софи показывает на кассе?', options: ['Ihren Schülerausweis', 'Ihr Sparbuch', 'Den Kassenbon'], answer: 'Ihren Schülerausweis' },
      ],
      translate: [
        { de: 'Die Jacke ist um dreißig Prozent reduziert.', ru: 'Куртка уценена на тридцать процентов.', wrongRu: ['Куртка подорожала на тридцать процентов.', 'Куртка уценена на тринадцать процентов.'] },
        { de: 'Der alte Preis ist der Grundwert.', ru: 'Старая цена — это основное значение.', wrongRu: ['Новая цена — это основное значение.', 'Старая цена — это процентная величина.'] },
        { de: 'Im Februar erhöht der Laden die Preise.', ru: 'В феврале магазин повышает цены.', wrongRu: ['В феврале магазин снижает цены.', 'В январе магазин повышает цены.'] },
      ],
    },
    {
      lesson: 1, title: 'Geld auf der Bank',
      de: `Paul hat zum Geburtstag 1000 Euro von seiner Oma bekommen. Er will das Geld nicht ausgeben, sondern anlegen. Mit seinem Vater geht er zur Bank.

Die Beraterin erklärt: „Auf dem Sparbuch ist der Zinssatz zwei Prozent. Die Zinsen bekommst du jährlich.“ Paul rechnet: Nach einem Jahr ist das Guthaben 1020 Euro. Der Zuwachs ist also nur zwanzig Euro.

Dann fragt Paul: „Und wenn ich Geld leihe?“ Die Beraterin lacht: „Für einen Kredit zahlst du mehr Zinsen, zum Beispiel sechs Prozent.“ Paul versteht: Die Bank verdient an der Differenz. Am Ende legt er das Geld für drei Jahre an. Danach ist es ein bisschen mehr als 1061 Euro.`,
      ru: `Пауль получил на день рождения 1000 евро от бабушки. Он хочет не тратить деньги, а вложить их. Вместе с папой он идёт в банк.

Консультант объясняет: «На сберегательном вкладе ставка два процента. Проценты ты получаешь раз в год». Пауль считает: через год на счёте будет 1020 евро. Значит, прирост — всего двадцать евро.

Потом Пауль спрашивает: «А если я беру деньги в долг?» Консультант смеётся: «По кредиту ты платишь больше процентов, например шесть». Пауль понимает: банк зарабатывает на разнице. В итоге он вкладывает деньги на три года. После этого у него будет чуть больше 1061 евро.`,
      gloss: { paul: 'Пауль (имя)', geburtstag: 'день рождения', euro: 'евро', von: 'от', seiner: 'своей', oma: 'бабушка', bekommen: 'получил', will: 'хочет', geld: 'деньги', sondern: 'а (после отрицания)', seinem: 'своим', vater: 'отец, папа', geht: 'идёт', bank: 'банк', beraterin: 'консультант (женщина)', bekommst: 'получаешь', rechnet: 'считает', nach: 'через, после', also: 'значит', nur: 'только', fragt: 'спрашивает', wenn: 'если', leihe: 'беру в долг', lacht: 'смеётся', zahlst: 'платишь', mehr: 'больше', zum: 'к; (zum Beispiel) например', versteht: 'понимает', verdient: 'зарабатывает', differenz: 'разница', ende: 'конец', jahre: 'года, лет', danach: 'после этого', bisschen: 'немного (ein bisschen)', als: 'чем', wie: 'как', hoch: 'высокий (wie hoch — какой величины)', was: 'что', wo: 'где', woran: 'на чём' },
      questions: [
        { q: 'Wie hoch ist der Zinssatz auf dem Sparbuch?', ru: 'Какая ставка на сберегательном вкладе?', options: ['Zwei Prozent', 'Sechs Prozent', 'Zwanzig Prozent'], answer: 'Zwei Prozent' },
        { q: 'Wie viel ist das Guthaben nach einem Jahr?', ru: 'Сколько на счёте через год?', options: ['1020 Euro', '1000 Euro', '1061 Euro'], answer: '1020 Euro' },
        { q: 'Woran verdient die Bank?', ru: 'На чём зарабатывает банк?', options: ['An der Differenz', 'Am Sparbuch', 'Am Geburtstag'], answer: 'An der Differenz' },
      ],
      translate: [
        { de: 'Paul legt das Geld für drei Jahre an.', ru: 'Пауль вкладывает деньги на три года.', wrongRu: ['Пауль тратит деньги за три года.', 'Пауль вкладывает деньги на тридцать лет.'] },
        { de: 'Die Zinsen bekommst du jährlich.', ru: 'Проценты ты получаешь ежегодно.', wrongRu: ['Проценты ты получаешь ежемесячно.', 'Проценты ты платишь ежегодно.'] },
        { de: 'Für einen Kredit zahlst du mehr Zinsen.', ru: 'По кредиту ты платишь больше процентов.', wrongRu: ['По кредиту ты получаешь больше процентов.', 'По кредиту ты платишь меньше процентов.'] },
      ],
    },
  ],
};
