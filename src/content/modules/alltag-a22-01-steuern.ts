import type { Module } from '../types.ts';

// A2.2 alltag 01: pay slip and taxes — gross/net, deductions, social insurance (lesson 0); tax return, tax office, child benefit (lesson 1).

export const module: Module = {
  id: 'alltag-a22-01-steuern', sphere: 'alltag', level: 'A2.2',
  title: 'Lohnabrechnung und Steuern', subtitle: 'Зарплатный лист и налоги: брутто и нетто, отчисления, соцстрахование, налоговая декларация и пособие на детей.',
  words: [
    { id: 'all-a22-01-lohnabrechnung', icon: 'Receipt', de: 'Lohnabrechnung', pos: 'noun', article: 'die', plural: 'Lohnabrechnungen', ru: 'расчётный лист (по зарплате)', parts: ['Lohn', 'abrechnung'], example: { de: 'Auf der Lohnabrechnung stehen alle Abzüge.', ru: 'В расчётном листе указаны все вычеты.', cloze: 'Lohnabrechnung' } },
    { id: 'all-a22-01-netto', icon: 'Wallet', de: 'netto', pos: 'adj', ru: 'нетто (после вычетов)', note: 'brutto — до вычетов.', example: { de: 'Netto bekomme ich etwa tausendachthundert Euro.', ru: 'Чистыми я получаю около тысячи восьмисот евро.', cloze: 'Netto' } },
    { id: 'all-a22-01-steuer', icon: 'Landmark', de: 'Steuer', pos: 'noun', article: 'die', plural: 'Steuern', ru: 'налог', example: { de: 'Ein Teil vom Gehalt geht an die Steuer.', ru: 'Часть зарплаты уходит на налоги.', cloze: 'Steuer' } },
    { id: 'all-a22-01-steuerklasse', icon: 'ListOrdered', de: 'Steuerklasse', pos: 'noun', article: 'die', plural: 'Steuerklassen', ru: 'налоговый класс', parts: ['Steuer', 'klasse'], note: 'Зависит от семейного положения; у супругов можно выбрать комбинацию.', example: { de: 'Verheiratete können die Steuerklasse wählen.', ru: 'Супруги могут выбрать налоговый класс.', cloze: 'Steuerklasse' } },
    { id: 'all-a22-01-abzug', icon: 'Minus', de: 'Abzug', pos: 'noun', article: 'der', plural: 'Abzüge', ru: 'вычет, удержание', example: { de: 'Die Abzüge sind fast vierzig Prozent.', ru: 'Удержания — почти сорок процентов.', cloze: 'Abzüge' } },
    { id: 'all-a22-01-sozialversicherung', icon: 'ShieldCheck', de: 'Sozialversicherung', pos: 'noun', article: 'die', plural: 'Sozialversicherungen', ru: 'социальное страхование', parts: ['Sozial', 'versicherung'], note: 'Сюда входят пенсионное, медицинское, по безработице и по уходу.', example: { de: 'Die Sozialversicherung schützt bei Krankheit und im Alter.', ru: 'Соцстрахование защищает при болезни и в старости.', cloze: 'Sozialversicherung' } },
    { id: 'all-a22-01-rente', icon: 'Armchair', de: 'Rente', pos: 'noun', article: 'die', plural: 'Renten', ru: 'пенсия', note: 'in Rente gehen — выйти на пенсию.', example: { de: 'Mit siebenundsechzig geht man in Rente.', ru: 'На пенсию выходят в шестьдесят семь.', cloze: 'Rente' } },
    { id: 'all-a22-01-arbeitgeber', icon: 'Building2', de: 'Arbeitgeber', pos: 'noun', article: 'der', plural: 'Arbeitgeber', ru: 'работодатель', parts: ['Arbeit', 'geber'], note: 'der Arbeitnehmer — работник.', example: { de: 'Der Arbeitgeber zahlt die Hälfte der Beiträge.', ru: 'Работодатель платит половину взносов.', cloze: 'Arbeitgeber' } },

    { id: 'all-a22-01-steuererklaerung', icon: 'FileSpreadsheet', de: 'Steuererklärung', pos: 'noun', article: 'die', plural: 'Steuererklärungen', ru: 'налоговая декларация', parts: ['Steuer', 'erklärung'], example: { de: 'Mit der Steuererklärung bekomme ich Geld zurück.', ru: 'По налоговой декларации мне вернут деньги.', cloze: 'Steuererklärung' } },
    { id: 'all-a22-01-finanzamt', icon: 'Landmark', de: 'Finanzamt', pos: 'noun', article: 'das', plural: 'Finanzämter', ru: 'налоговая инспекция', parts: ['Finanz', 'amt'], example: { de: 'Das Finanzamt schickt einen Bescheid.', ru: 'Налоговая присылает уведомление.', cloze: 'Finanzamt' } },
    { id: 'all-a22-01-zurueckbekommen', icon: 'Undo2', de: 'zurückbekommen', pos: 'verb', ru: 'получить обратно', forms: 'er bekommt zurück · hat zurückbekommen', example: { de: 'Wir haben vierhundert Euro zurückbekommen.', ru: 'Нам вернули четыреста евро.', cloze: 'zurückbekommen' } },
    { id: 'all-a22-01-beleg', icon: 'ReceiptText', de: 'Beleg', pos: 'noun', article: 'der', plural: 'Belege', ru: 'подтверждающий документ, чек', example: { de: 'Sammeln Sie alle Belege für die Steuererklärung.', ru: 'Собирайте все чеки для декларации.', cloze: 'Belege' } },
    { id: 'all-a22-01-fahrtkosten', icon: 'Car', de: 'Fahrtkosten', pos: 'noun', article: 'die', pluralOnly: true, ru: 'транспортные расходы', parts: ['Fahrt', 'kosten'], example: { de: 'Die Fahrtkosten zur Arbeit kann man absetzen.', ru: 'Расходы на дорогу до работы можно вычесть.', cloze: 'Fahrtkosten' } },
    { id: 'all-a22-01-absetzen', icon: 'CircleMinus', de: 'absetzen', pos: 'verb', ru: 'вычитать (из налогов)', forms: 'er setzt ab · hat abgesetzt', note: 'von der Steuer absetzen — уменьшить налоговую базу.', example: { de: 'Das Arbeitsmaterial können Sie von der Steuer absetzen.', ru: 'Рабочие материалы можно вычесть из налогов.', cloze: 'absetzen' } },
    { id: 'all-a22-01-kindergeld', icon: 'Baby', de: 'Kindergeld', pos: 'noun', article: 'das', ru: 'пособие на ребёнка', parts: ['Kinder', 'geld'], note: 'Выплачивает Familienkasse.', example: { de: 'Für jedes Kind gibt es Kindergeld.', ru: 'На каждого ребёнка платят пособие.', cloze: 'Kindergeld' } },
    { id: 'all-a22-01-arbeitnehmer', icon: 'User', de: 'Arbeitnehmer', pos: 'noun', article: 'der', plural: 'Arbeitnehmer', ru: 'работник (по найму)', parts: ['Arbeit', 'nehmer'], example: { de: 'Als Arbeitnehmer zahlt man automatisch Steuern.', ru: 'Работник по найму платит налоги автоматически.', cloze: 'Arbeitnehmer' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Brutto und netto',
      de: `Amir bekommt seine erste Lohnabrechnung. Er ist überrascht. Im Vertrag steht: zweitausendvierhundert Euro brutto. Aber auf das Konto kommen nur etwa tausendsiebenhundert Euro netto.

Sein Kollege erklärt ihm die Abzüge: „Zuerst gibt es die Lohnsteuer. Die hängt von der Steuerklasse ab. Dann die Sozialversicherung: Rentenversicherung, Krankenversicherung, Arbeitslosenversicherung und Pflegeversicherung. Die Hälfte davon zahlt der Arbeitgeber.“

„Das ist viel Geld“, sagt Amir. „Ja, aber dafür bekommst du später eine Rente, und du bist versichert, wenn du krank oder arbeitslos wirst.“`,
      ru: `Амир получает свой первый расчётный лист. Он удивлён. В договоре написано: две тысячи четыреста евро брутто. Но на счёт приходит лишь около тысячи семисот евро нетто.

Коллега объясняет ему вычеты: «Сначала подоходный налог. Он зависит от налогового класса. Потом соцстрахование: пенсионное, медицинское, по безработице и по уходу. Половину этого платит работодатель».

«Это много денег», — говорит Амир. «Да, но зато потом ты получишь пенсию и будешь застрахован, если заболеешь или останешься без работы».`,
      gloss: { wirst: 'станешь, будешь', wovon: 'от чего', staat: 'государство', überrascht: 'удивлена', brutto: 'брутто (до вычета налогов)', bekommst: 'получаешь', alter: 'старый', weniger: 'меньше', amir: 'Амир (имя)', zweitausendvierhundert: 'две тысячи четыреста', tausendsiebenhundert: 'тысяча семьсот', lohnsteuer: 'подоходный налог', rentenversicherung: 'пенсионное страхование', arbeitslosenversicherung: 'страхование по безработице', pflegeversicherung: 'страхование по уходу', davon: 'из этого', dafür: 'зато, за это' },
      questions: [
        { q: 'Wie viel bekommt Amir netto?', ru: 'Сколько Амир получает нетто?', options: ['Etwa tausendsiebenhundert Euro', 'Zweitausendvierhundert Euro', 'Tausend Euro'], answer: 'Etwa tausendsiebenhundert Euro' },
        { q: 'Wovon hängt die Lohnsteuer ab?', ru: 'От чего зависит подоходный налог?', options: ['Von der Steuerklasse', 'Vom Alter', 'Von der Wohnung'], answer: 'Von der Steuerklasse' },
        { q: 'Wer zahlt die Hälfte der Sozialversicherung?', ru: 'Кто платит половину соцстрахования?', options: ['Der Arbeitgeber', 'Der Staat', 'Niemand'], answer: 'Der Arbeitgeber' },
      ],
      translate: [
        { de: 'Netto bekomme ich weniger.', ru: 'Чистыми я получаю меньше.', wrongRu: ['Чистыми я получаю больше.', 'Брутто я получаю меньше.'] },
        { de: 'Die Abzüge sind sehr hoch.', ru: 'Вычеты очень высокие.', wrongRu: ['Вычеты очень низкие.', 'Зарплата очень высокая.'] },
        { de: 'Der Arbeitgeber zahlt die Hälfte.', ru: 'Работодатель платит половину.', wrongRu: ['Работник платит половину.', 'Работодатель платит всё.'] },
      ],
    },
    {
      lesson: 1, title: 'Die Steuererklärung',
      de: `Im Frühling macht Amir zum ersten Mal eine Steuererklärung. Frau Schulz sagt: „Das lohnt sich! Viele Arbeitnehmer bekommen Geld zurück.“

Amir sammelt alle Belege: für die Fahrtkosten zur Arbeit, für seine Arbeitskleidung und für den Deutschkurs. Diese Kosten kann er von der Steuer absetzen. Er füllt die Formulare online aus und schickt sie ans Finanzamt.

Drei Monate später kommt der Bescheid: Familie Haddad bekommt fünfhundert Euro zurück! Außerdem bekommt die Familie jeden Monat Kindergeld für Karim und Nour. „Davon kaufen wir neue Fahrräder für die Kinder“, sagt Leyla.`,
      ru: `Весной Амир впервые подаёт налоговую декларацию. Госпожа Шульц говорит: «Это того стоит! Многим работникам возвращают деньги».

Амир собирает все чеки: за дорогу до работы, за рабочую одежду и за курс немецкого. Эти расходы он может вычесть из налогов. Он заполняет формы онлайн и отправляет их в налоговую.

Через три месяца приходит уведомление: семье Хаддад вернут пятьсот евро! Кроме того, семья каждый месяц получает пособие на Карима и Нур. «На эти деньги купим детям новые велосипеды», — говорит Лейла.`,
      gloss: { arbeit: 'работа', ans: 'к (an + das)', außerdem: 'кроме того', auto: 'машина', amir: 'Амир (имя)', schulz: 'Шульц (фамилия)', haddad: 'Хаддад (фамилия)', karim: 'Карим (имя)', nour: 'Нур (имя)', leyla: 'Лейла (имя)', frühling: 'весна', lohnt: '(es lohnt sich) это того стоит', sammelt: 'собирает', arbeitskleidung: 'рабочая одежда', bescheid: 'уведомление, решение', fünfhundert: 'пятьсот', davon: 'на это, из этого' },
      questions: [
        { q: 'Was sammelt Amir?', ru: 'Что собирает Амир?', options: ['Belege', 'Briefmarken', 'Formulare'], answer: 'Belege' },
        { q: 'Wie viel Geld bekommt die Familie zurück?', ru: 'Сколько денег вернут семье?', options: ['Fünfhundert Euro', 'Fünfzig Euro', 'Nichts'], answer: 'Fünfhundert Euro' },
        { q: 'Was möchte Leyla von dem Geld kaufen?', ru: 'Что Лейла хочет купить на эти деньги?', options: ['Neue Fahrräder für die Kinder', 'Ein Auto', 'Möbel'], answer: 'Neue Fahrräder für die Kinder' },
      ],
      translate: [
        { de: 'Wir bekommen Geld zurück.', ru: 'Нам вернут деньги.', wrongRu: ['Нам нужно доплатить.', 'Мы отдаём деньги.'] },
        { de: 'Die Fahrtkosten kann man absetzen.', ru: 'Транспортные расходы можно вычесть.', wrongRu: ['Транспортные расходы нельзя вычесть.', 'Расходы на еду можно вычесть.'] },
        { de: 'Für jedes Kind gibt es Kindergeld.', ru: 'На каждого ребёнка платят пособие.', wrongRu: ['Пособие платят только на первого ребёнка.', 'На каждого ребёнка нужно платить налог.'] },
      ],
    },
  ],
};
