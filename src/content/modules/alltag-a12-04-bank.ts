import type { Module } from '../types.ts';

// A1.2 alltag 04: the bank — opening an account, cash machine, money (lesson 0); transfers, IBAN, fees, direct debit (lesson 1).

export const module: Module = {
  id: 'alltag-a12-04-bank', sphere: 'alltag', level: 'A1.2',
  title: 'Auf der Bank', subtitle: 'Банк: открыть счёт, снять деньги, перевод, IBAN, комиссии и автосписание.',
  words: [
    { id: 'all-a12-04-bank', icon: 'Landmark', de: 'Bank', pos: 'noun', article: 'die', plural: 'Banken', ru: 'банк', note: 'Но: die Bank, die Bänke — скамейка!', example: { de: 'Die Bank ist bis sechzehn Uhr offen.', ru: 'Банк открыт до шестнадцати часов.', cloze: 'Bank' } },
    { id: 'all-a12-04-konto', icon: 'Wallet', de: 'Konto', pos: 'noun', article: 'das', plural: 'Konten', ru: 'счёт (в банке)', note: 'das Girokonto — текущий счёт.', example: { de: 'Ich möchte ein Konto eröffnen.', ru: 'Я хочу открыть счёт.', cloze: 'Konto' } },
    { id: 'all-a12-04-eroeffnen', icon: 'FolderOpen', de: 'eröffnen', pos: 'verb', ru: 'открывать (счёт, магазин)', forms: 'er eröffnet · hat eröffnet', example: { de: 'Für ein Konto eröffnen brauchen Sie Ihren Pass.', ru: 'Чтобы открыть счёт, вам нужен паспорт.', cloze: 'eröffnen' } },
    { id: 'all-a12-04-geld', icon: 'Banknote', de: 'Geld', pos: 'noun', article: 'das', ru: 'деньги', note: 'Без мн. ч.', example: { de: 'Ich habe kein Geld dabei.', ru: 'У меня нет с собой денег.', cloze: 'Geld' } },
    { id: 'all-a12-04-geldautomat', icon: 'Landmark', imageQuery: 'atm cash machine', de: 'Geldautomat', pos: 'noun', article: 'der', plural: 'Geldautomaten', ru: 'банкомат', parts: ['Geld', 'automat'], note: 'Особое склонение: am Geldautomaten.', example: { de: 'Wo ist der nächste Geldautomat?', ru: 'Где ближайший банкомат?', cloze: 'Geldautomat' } },
    { id: 'all-a12-04-abheben', icon: 'ArrowDownToLine', de: 'abheben', pos: 'verb', ru: 'снимать (деньги)', forms: 'er hebt ab · hat abgehoben', example: { de: 'Ich hebe hundert Euro ab.', ru: 'Я снимаю сто евро.', cloze: 'hebe' } },
    { id: 'all-a12-04-bankkarte', icon: 'CreditCard', de: 'Bankkarte', pos: 'noun', article: 'die', plural: 'Bankkarten', ru: 'банковская карта', parts: ['Bank', 'karte'], note: 'Также: die Girocard, die EC-Karte.', example: { de: 'Die Bankkarte kommt per Post.', ru: 'Банковская карта придёт по почте.', cloze: 'Bankkarte' } },
    { id: 'all-a12-04-pin', icon: 'KeyRound', de: 'PIN', pos: 'noun', article: 'die', plural: 'PINs', ru: 'ПИН-код', example: { de: 'Geben Sie bitte Ihre PIN ein.', ru: 'Введите, пожалуйста, ваш ПИН-код.', cloze: 'PIN' } },

    { id: 'all-a12-04-ueberweisung', icon: 'ArrowRightLeft', de: 'Überweisung', pos: 'noun', article: 'die', plural: 'Überweisungen', ru: 'банковский перевод', example: { de: 'Die Miete bezahle ich per Überweisung.', ru: 'Аренду я оплачиваю переводом.', cloze: 'Überweisung' } },
    { id: 'all-a12-04-ueberweisen', icon: 'Send', de: 'überweisen', pos: 'verb', ru: 'переводить (деньги)', forms: 'er überweist · hat überwiesen', example: { de: 'Ich überweise das Geld heute.', ru: 'Я переведу деньги сегодня.', cloze: 'überweise' } },
    { id: 'all-a12-04-iban', icon: 'Hash', de: 'IBAN', pos: 'noun', article: 'die', plural: 'IBANs', ru: 'IBAN (номер счёта)', note: 'Немецкий IBAN начинается с DE и имеет 22 знака.', example: { de: 'Wie ist Ihre IBAN?', ru: 'Какой у вас IBAN?', cloze: 'IBAN' } },
    { id: 'all-a12-04-kontoauszug', icon: 'ScrollText', de: 'Kontoauszug', pos: 'noun', article: 'der', plural: 'Kontoauszüge', ru: 'выписка со счёта', parts: ['Konto', 'auszug'], example: { de: 'Auf dem Kontoauszug sehe ich alle Zahlungen.', ru: 'В выписке я вижу все платежи.', cloze: 'Kontoauszug' } },
    { id: 'all-a12-04-gebuehr', icon: 'Coins', de: 'Gebühr', pos: 'noun', article: 'die', plural: 'Gebühren', ru: 'плата, комиссия', example: { de: 'Das Konto kostet keine Gebühr.', ru: 'За счёт нет никакой платы.', cloze: 'Gebühr' } },
    { id: 'all-a12-04-lastschrift', icon: 'Repeat', de: 'Lastschrift', pos: 'noun', article: 'die', plural: 'Lastschriften', ru: 'автоматическое списание', parts: ['Last', 'schrift'], note: 'Так часто оплачивают страховку, связь, электричество.', example: { de: 'Den Strom bezahle ich per Lastschrift.', ru: 'Электричество у меня списывается автоматически.', cloze: 'Lastschrift' } },
    { id: 'all-a12-04-online-banking', icon: 'Smartphone', de: 'Online-Banking', pos: 'noun', article: 'das', ru: 'онлайн-банк', example: { de: 'Mit Online-Banking geht alles schneller.', ru: 'С онлайн-банком всё быстрее.', cloze: 'Online-Banking' } },
    { id: 'all-a12-04-sparen', icon: 'PiggyBank', de: 'sparen', pos: 'verb', ru: 'копить, экономить', forms: 'er spart · hat gespart', example: { de: 'Wir sparen für ein Auto.', ru: 'Мы копим на машину.', cloze: 'sparen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Konto eröffnen',
      de: `Amir hat bald eine Arbeit. Er braucht ein Konto. Er geht mit seinem Pass und seiner Anmeldung zur Bank. „Guten Tag, ich möchte ein Konto eröffnen.“

Die Bankberaterin erklärt: „Das Girokonto kostet keine Gebühr. Die Bankkarte und die PIN kommen in einer Woche per Post.“

Eine Woche später hebt Amir zum ersten Mal Geld ab. Er geht zum Geldautomaten, steckt die Karte ein und gibt die PIN ein. Er hebt fünfzig Euro ab.`,
      ru: `У Амира скоро будет работа. Ему нужен счёт. Он идёт в банк с паспортом и справкой о регистрации. «Добрый день, я хотел бы открыть счёт».

Консультант банка объясняет: «За текущий счёт плата не взимается. Банковская карта и ПИН-код придут по почте через неделю».

Через неделю Амир впервые снимает деньги. Он идёт к банкомату, вставляет карту и вводит ПИН-код. Он снимает пятьдесят евро.`,
      gloss: { karte: 'карта', amir: 'Амир (имя)', arbeit: 'работа', pass: 'паспорт', anmeldung: 'регистрация (по месту жительства)', bankberaterin: 'консультант банка (женщина)', girokonto: 'текущий счёт', steckt: '(steckt … ein) вставляет', gibt: '(gibt … ein) вводит' },
      questions: [
        { q: 'Was bringt Amir zur Bank mit?', ru: 'Что Амир берёт с собой в банк?', options: ['Pass und Anmeldung', 'Geld', 'Seine Frau'], answer: 'Pass und Anmeldung' },
        { q: 'Was kostet das Girokonto?', ru: 'Сколько стоит текущий счёт?', options: ['Keine Gebühr', 'Zehn Euro', 'Fünfzig Euro'], answer: 'Keine Gebühr' },
        { q: 'Wie viel Geld hebt Amir ab?', ru: 'Сколько денег снимает Амир?', options: ['Fünfzig Euro', 'Hundert Euro', 'Zehn Euro'], answer: 'Fünfzig Euro' },
      ],
      translate: [
        { de: 'Ich möchte ein Konto eröffnen.', ru: 'Я хотел бы открыть счёт.', wrongRu: ['Я хотел бы закрыть счёт.', 'Я хотел бы снять деньги.'] },
        { de: 'Geben Sie bitte Ihre PIN ein.', ru: 'Введите, пожалуйста, ваш ПИН-код.', wrongRu: ['Вставьте, пожалуйста, карту.', 'Назовите, пожалуйста, своё имя.'] },
        { de: 'Wo ist der nächste Geldautomat?', ru: 'Где ближайший банкомат?', wrongRu: ['Где ближайший банк?', 'Где ближайшая аптека?'] },
      ],
    },
    {
      lesson: 1, title: 'Die Miete überweisen',
      de: `Jeden Monat muss Amir die Miete überweisen. Er macht das mit Online-Banking. Er braucht die IBAN vom Vermieter und schreibt „Miete Mai“ dazu.

Den Strom und das Handy bezahlt er per Lastschrift. Das Geld geht dann automatisch vom Konto.

Am Ende vom Monat schaut Leyla auf den Kontoauszug. „Wir haben noch dreihundert Euro“, sagt sie. „Das sparen wir. Wir möchten im Sommer nach Berlin fahren.“`,
      ru: `Каждый месяц Амир должен переводить аренду. Он делает это через онлайн-банк. Ему нужен IBAN арендодателя, и он пишет в назначении «Аренда май».

Электричество и телефон он оплачивает автосписанием. Деньги тогда уходят со счёта автоматически.

В конце месяца Лейла смотрит выписку. «У нас осталось ещё триста евро, — говорит она. — Их мы отложим. Летом мы хотим съездить в Берлин».`,
      gloss: { mai: 'май', berlin: 'Берлин', bar: 'наличными', auto: 'машина', amir: 'Амир (имя)', leyla: 'Лейла (имя)', vermieter: 'арендодатель', dazu: 'к этому, дополнительно', strom: 'электричество', handy: 'мобильный телефон', automatisch: 'автоматически', dreihundert: 'триста', sommer: 'лето' },
      questions: [
        { q: 'Wie überweist Amir die Miete?', ru: 'Как Амир переводит аренду?', options: ['Mit Online-Banking', 'Am Geldautomaten', 'Bar'], answer: 'Mit Online-Banking' },
        { q: 'Wie bezahlt er den Strom?', ru: 'Как он оплачивает электричество?', options: ['Per Lastschrift', 'Bar', 'Per Post'], answer: 'Per Lastschrift' },
        { q: 'Wofür sparen sie?', ru: 'На что они копят?', options: ['Für eine Reise nach Berlin', 'Für ein Auto', 'Für Möbel'], answer: 'Für eine Reise nach Berlin' },
      ],
      translate: [
        { de: 'Ich überweise das Geld heute.', ru: 'Я переведу деньги сегодня.', wrongRu: ['Я сниму деньги сегодня.', 'Я переведу деньги завтра.'] },
        { de: 'Wie ist Ihre IBAN?', ru: 'Какой у вас IBAN?', wrongRu: ['Какой у вас ПИН-код?', 'Какой у вас адрес?'] },
        { de: 'Wir sparen für eine Reise.', ru: 'Мы копим на поездку.', wrongRu: ['Мы тратим деньги на поездку.', 'Мы копим на квартиру.'] },
      ],
    },
  ],
};
