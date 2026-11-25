import type { Module } from '../types.ts';

// A1.1 alltag 02: numbers — phone number, address, spelling (lesson 0); prices, paying (lesson 1).

export const module: Module = {
  id: 'alltag-a11-02-zahlen', sphere: 'alltag', level: 'A1.1',
  title: 'Zahlen und Buchstaben', subtitle: 'Номер телефона, адрес, произнести по буквам; цены и оплата.',
  words: [
    { id: 'all-a11-02-zahl', icon: 'Hash', de: 'Zahl', pos: 'noun', article: 'die', plural: 'Zahlen', ru: 'число, цифра', example: { de: 'Die Zahlen von eins bis zehn sind leicht.', ru: 'Числа от одного до десяти — лёгкие.', cloze: 'Zahlen' } },
    { id: 'all-a11-02-telefonnummer', icon: 'Phone', de: 'Telefonnummer', pos: 'noun', article: 'die', plural: 'Telefonnummern', ru: 'номер телефона', parts: ['Telefon', 'nummer'], example: { de: 'Wie ist Ihre Telefonnummer?', ru: 'Какой у вас номер телефона?', cloze: 'Telefonnummer' } },
    { id: 'all-a11-02-adresse', icon: 'MapPin', de: 'Adresse', pos: 'noun', article: 'die', plural: 'Adressen', ru: 'адрес', example: { de: 'Meine Adresse ist Lindenstraße zwölf.', ru: 'Мой адрес — Линденштрассе, двенадцать.', cloze: 'Adresse' } },
    { id: 'all-a11-02-hausnummer', icon: 'Home', de: 'Hausnummer', pos: 'noun', article: 'die', plural: 'Hausnummern', ru: 'номер дома', parts: ['Haus', 'nummer'], note: 'В Германии номер дома пишут после улицы: Lindenstraße 12.', example: { de: 'Die Hausnummer ist zwölf.', ru: 'Номер дома — двенадцать.', cloze: 'Hausnummer' } },
    { id: 'all-a11-02-postleitzahl', icon: 'Mail', de: 'Postleitzahl', pos: 'noun', article: 'die', plural: 'Postleitzahlen', ru: 'почтовый индекс', parts: ['Post', 'leit', 'zahl'], note: 'Сокращённо PLZ. В Германии — 5 цифр, пишется перед городом.', example: { de: 'Wie ist die Postleitzahl?', ru: 'Какой почтовый индекс?', cloze: 'Postleitzahl' } },
    { id: 'all-a11-02-buchstabe', icon: 'Type', de: 'Buchstabe', pos: 'noun', article: 'der', plural: 'Buchstaben', ru: 'буква', note: 'Особое склонение: den / dem Buchstaben.', example: { de: 'Das Wort hat fünf Buchstaben.', ru: 'В слове пять букв.', cloze: 'Buchstaben' } },
    { id: 'all-a11-02-buchstabieren', icon: 'Type', de: 'buchstabieren', pos: 'verb', ru: 'произносить по буквам', forms: 'er buchstabiert · hat buchstabiert', example: { de: 'Können Sie das bitte buchstabieren?', ru: 'Можете произнести это по буквам?', cloze: 'buchstabieren' } },
    { id: 'all-a11-02-e-mail', icon: 'AtSign', de: 'E-Mail', pos: 'noun', article: 'die', plural: 'E-Mails', ru: 'электронная почта, письмо', note: '@ читается «ät».', example: { de: 'Schreiben Sie mir eine E-Mail.', ru: 'Напишите мне письмо.', cloze: 'E-Mail' } },

    { id: 'all-a11-02-preis', icon: 'Tag', de: 'Preis', pos: 'noun', article: 'der', plural: 'Preise', ru: 'цена; приз', example: { de: 'Der Preis ist gut.', ru: 'Цена хорошая.', cloze: 'Preis' } },
    { id: 'all-a11-02-euro', icon: 'Euro', de: 'Euro', pos: 'noun', article: 'der', plural: 'Euro', ru: 'евро', note: 'После числа мн. ч. не меняется: zwei Euro.', example: { de: 'Das kostet drei Euro.', ru: 'Это стоит три евро.', cloze: 'Euro' } },
    { id: 'all-a11-02-cent', icon: 'Coins', de: 'Cent', pos: 'noun', article: 'der', plural: 'Cent', ru: 'цент', example: { de: 'Das Brötchen kostet fünfzig Cent.', ru: 'Булочка стоит пятьдесят центов.', cloze: 'Cent' } },
    { id: 'all-a11-02-kosten', icon: 'Banknote', de: 'kosten', pos: 'verb', ru: 'стоить', forms: 'es kostet · hat gekostet', note: 'Was kostet das? — Сколько это стоит?', example: { de: 'Was kostet der Kaffee?', ru: 'Сколько стоит кофе?', cloze: 'kostet' } },
    { id: 'all-a11-02-wie-viel', icon: 'CircleHelp', de: 'wie viel', pos: 'phrase', ru: 'сколько', note: 'wie viel (неисчисл.) / wie viele (исчисл.): Wie viele Kinder?', example: { de: 'Wie viel kostet das?', ru: 'Сколько это стоит?', cloze: 'Wie viel' } },
    { id: 'all-a11-02-billig', icon: 'TrendingDown', de: 'billig', pos: 'adj', ru: 'дешёвый', note: 'Нейтральнее — günstig.', example: { de: 'Das T-Shirt ist billig.', ru: 'Футболка дешёвая.', cloze: 'billig' } },
    { id: 'all-a11-02-teuer', icon: 'TrendingUp', de: 'teuer', pos: 'adj', ru: 'дорогой', example: { de: 'Die Wohnung ist zu teuer.', ru: 'Квартира слишком дорогая.', cloze: 'teuer' } },
    { id: 'all-a11-02-bezahlen', icon: 'CreditCard', de: 'bezahlen', pos: 'verb', ru: 'платить, оплачивать', forms: 'er bezahlt · hat bezahlt', note: 'bar bezahlen — наличными, mit Karte — картой.', example: { de: 'Kann ich mit Karte bezahlen?', ru: 'Можно заплатить картой?', cloze: 'bezahlen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Beim Amt',
      de: `Amir ist beim Amt. Die Frau am Schalter fragt: „Wie ist Ihr Name, bitte? Können Sie das buchstabieren?“ – „H-A-D-D-A-D.“

„Und Ihre Adresse?“ – „Lindenstraße, Hausnummer zwölf.“ – „Die Postleitzahl?“ – „Null vier eins drei eins.“

„Haben Sie eine Telefonnummer?“ Amir sagt die Zahlen langsam. Dann fragt die Frau noch nach der E-Mail.`,
      ru: `Амир в ведомстве. Женщина в окошке спрашивает: «Ваше имя, пожалуйста? Можете произнести по буквам?» — «Х-А-Д-Д-А-Д».

«А ваш адрес?» — «Линденштрассе, дом двенадцать». — «Индекс?» — «Ноль четыре один три один».

«У вас есть номер телефона?» Амир медленно говорит цифры. Потом женщина спрашивает ещё адрес электронной почты.`,
      gloss: { supermarkt: 'супермаркет', amir: 'Амир (имя)', amt: 'ведомство, учреждение', schalter: 'окошко (в учреждении)', 'h-a-d-d-a-d': 'Х-А-Д-Д-А-Д (по буквам)', lindenstraße: 'Линденштрассе (улица)', null: 'ноль', vier: 'четыре', eins: 'один', drei: 'три' },
      questions: [
        { q: 'Wo ist Amir?', ru: 'Где Амир?', options: ['Beim Amt', 'Im Supermarkt', 'Im Deutschkurs'], answer: 'Beim Amt' },
        { q: 'Wie ist die Hausnummer?', ru: 'Какой номер дома?', options: ['Zwölf', 'Zwei', 'Zwanzig'], answer: 'Zwölf' },
        { q: 'Wie sagt Amir die Zahlen?', ru: 'Как Амир говорит цифры?', options: ['Langsam', 'Schnell', 'Leise'], answer: 'Langsam' },
      ],
      translate: [
        { de: 'Können Sie das buchstabieren?', ru: 'Можете произнести это по буквам?', wrongRu: ['Можете это написать?', 'Можете повторить?'] },
        { de: 'Wie ist Ihre Telefonnummer?', ru: 'Какой у вас номер телефона?', wrongRu: ['Какой у вас адрес?', 'Какой у вас индекс?'] },
        { de: 'Die Hausnummer ist zwölf.', ru: 'Номер дома — двенадцать.', wrongRu: ['Номер квартиры — двенадцать.', 'Номер дома — два.'] },
      ],
    },
    {
      lesson: 1, title: 'Was kostet das?',
      de: `Leyla ist auf dem Markt. Sie fragt: „Wie viel kosten die Tomaten?“ – „Zwei Euro fünfzig das Kilo.“ – „Das ist billig!“

Dann sieht sie eine Jacke. „Was kostet die Jacke?“ – „Neunzig Euro.“ – „Oh, das ist zu teuer.“

Leyla kauft Tomaten und Äpfel. Der Preis ist vier Euro zwanzig. „Kann ich mit Karte bezahlen?“ – „Nein, nur bar.“ Leyla bezahlt mit fünf Euro und bekommt achtzig Cent zurück.`,
      ru: `Лейла на рынке. Она спрашивает: «Сколько стоят помидоры?» — «Два евро пятьдесят за кило». — «Это дёшево!»

Потом она видит куртку. «Сколько стоит куртка?» — «Девяносто евро». — «О, это слишком дорого».

Лейла покупает помидоры и яблоки. Цена — четыре евро двадцать. «Можно заплатить картой?» — «Нет, только наличными». Лейла платит пятью евро и получает восемьдесят центов сдачи.`,
      gloss: { oh: 'ой, о', gar: 'вовсе (gar nicht — вообще нет)', leyla: 'Лейла (имя)', markt: 'рынок', tomaten: 'помидоры', fünfzig: 'пятьдесят', kilo: 'килограмм', jacke: 'куртка', neunzig: 'девяносто', kauft: 'покупает', äpfel: 'яблоки', karte: 'карта', bar: 'наличными', achtzig: 'восемьдесят', zurück: 'обратно; (bekommt … zurück) получает сдачу' },
      questions: [
        { q: 'Was kostet ein Kilo Tomaten?', ru: 'Сколько стоит кило помидоров?', options: ['Zwei Euro fünfzig', 'Neunzig Euro', 'Fünf Euro'], answer: 'Zwei Euro fünfzig' },
        { q: 'Warum kauft Leyla die Jacke nicht?', ru: 'Почему Лейла не покупает куртку?', options: ['Sie ist zu teuer.', 'Sie ist zu klein.', 'Sie ist billig.'], answer: 'Sie ist zu teuer.' },
        { q: 'Wie bezahlt Leyla?', ru: 'Как платит Лейла?', options: ['Bar', 'Mit Karte', 'Gar nicht'], answer: 'Bar' },
      ],
      translate: [
        { de: 'Was kostet die Jacke?', ru: 'Сколько стоит куртка?', wrongRu: ['Где куртка?', 'Сколько стоят помидоры?'] },
        { de: 'Das ist zu teuer.', ru: 'Это слишком дорого.', wrongRu: ['Это очень дёшево.', 'Это слишком большое.'] },
        { de: 'Kann ich mit Karte bezahlen?', ru: 'Можно заплатить картой?', wrongRu: ['Можно заплатить наличными?', 'Сколько нужно заплатить?'] },
      ],
    },
  ],
};
