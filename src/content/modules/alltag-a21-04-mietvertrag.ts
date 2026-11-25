import type { Module } from '../types.ts';

// A2.1 alltag 04: the tenancy — contract, notice period, utility bill (lesson 0); damage, mould, airing, rent increase (lesson 1).

export const module: Module = {
  id: 'alltag-a21-04-mietvertrag', sphere: 'alltag', level: 'A2.1',
  title: 'Mietvertrag und Nebenkosten', subtitle: 'Договор аренды: срок расторжения, расчёт коммунальных платежей, ремонт, плесень и повышение аренды.',
  words: [
    { id: 'all-a21-04-mietvertrag', icon: 'FileSignature', de: 'Mietvertrag', pos: 'noun', article: 'der', plural: 'Mietverträge', ru: 'договор аренды', parts: ['Miet', 'vertrag'], example: { de: 'Lesen Sie den Mietvertrag genau.', ru: 'Внимательно прочитайте договор аренды.', cloze: 'Mietvertrag' } },
    { id: 'all-a21-04-mieter', icon: 'User', de: 'Mieter', pos: 'noun', article: 'der', plural: 'Mieter', ru: 'арендатор, жилец', note: 'Женщина — die Mieterin. der Mieterverein — союз арендаторов (помогает советом).', example: { de: 'Als Mieter haben Sie Rechte.', ru: 'Как у арендатора у вас есть права.', cloze: 'Mieter' } },
    { id: 'all-a21-04-kuendigungsfrist', icon: 'Hourglass', de: 'Kündigungsfrist', pos: 'noun', article: 'die', plural: 'Kündigungsfristen', ru: 'срок уведомления о расторжении', parts: ['Kündigungs', 'frist'], note: 'Для арендатора обычно три месяца.', example: { de: 'Die Kündigungsfrist ist drei Monate.', ru: 'Срок уведомления — три месяца.', cloze: 'Kündigungsfrist' } },
    { id: 'all-a21-04-nebenkostenabrechnung', icon: 'Receipt', de: 'Nebenkostenabrechnung', pos: 'noun', article: 'die', plural: 'Nebenkostenabrechnungen', ru: 'годовой расчёт коммунальных платежей', parts: ['Nebenkosten', 'abrechnung'], example: { de: 'Einmal im Jahr kommt die Nebenkostenabrechnung.', ru: 'Раз в год приходит расчёт коммунальных платежей.', cloze: 'Nebenkostenabrechnung' } },
    { id: 'all-a21-04-nachzahlen', icon: 'Euro', de: 'nachzahlen', pos: 'verb', ru: 'доплачивать', forms: 'er zahlt nach · hat nachgezahlt', note: 'die Nachzahlung — доплата; das Guthaben — переплата, которую вернут.', example: { de: 'Wir müssen hundert Euro nachzahlen.', ru: 'Нам нужно доплатить сто евро.', cloze: 'nachzahlen' } },
    { id: 'all-a21-04-strom', icon: 'Zap', de: 'Strom', pos: 'noun', article: 'der', ru: 'электричество; ток', note: 'Электричество часто оплачивают отдельно, не через арендодателя.', example: { de: 'Der Strom ist in Deutschland teuer.', ru: 'Электричество в Германии дорогое.', cloze: 'Strom' } },
    { id: 'all-a21-04-zaehlerstand', icon: 'Gauge', de: 'Zählerstand', pos: 'noun', article: 'der', plural: 'Zählerstände', ru: 'показания счётчика', parts: ['Zähler', 'stand'], example: { de: 'Bitte schreiben Sie den Zählerstand auf.', ru: 'Запишите, пожалуйста, показания счётчика.', cloze: 'Zählerstand' } },
    { id: 'all-a21-04-muell', icon: 'Trash2', de: 'Müll', pos: 'noun', article: 'der', ru: 'мусор', note: 'Мусор в Германии сортируют: Bio, Papier, Gelber Sack, Restmüll.', example: { de: 'Die Müllabfuhr kommt am Dienstag.', ru: 'Мусоровоз приезжает во вторник.', cloze: 'Müll' } },

    { id: 'all-a21-04-schaden', icon: 'Hammer', de: 'Schaden', pos: 'noun', article: 'der', plural: 'Schäden', ru: 'повреждение, ущерб', example: { de: 'Melden Sie jeden Schaden sofort dem Vermieter.', ru: 'Сообщайте арендодателю о любом повреждении сразу.', cloze: 'Schaden' } },
    { id: 'all-a21-04-reparieren', icon: 'Wrench', de: 'reparieren', pos: 'verb', ru: 'ремонтировать, чинить', forms: 'er repariert · hat repariert', example: { de: 'Wer repariert das Fenster?', ru: 'Кто починит окно?', cloze: 'repariert' } },
    { id: 'all-a21-04-mangel', icon: 'TriangleAlert', de: 'Mangel', pos: 'noun', article: 'der', plural: 'Mängel', ru: 'недостаток, дефект', example: { de: 'Die Wohnung hat einige Mängel.', ru: 'В квартире есть некоторые недостатки.', cloze: 'Mängel' } },
    { id: 'all-a21-04-schimmel', icon: 'Bug', de: 'Schimmel', pos: 'noun', article: 'der', ru: 'плесень', example: { de: 'Im Bad ist Schimmel an der Wand.', ru: 'В ванной на стене плесень.', cloze: 'Schimmel' } },
    { id: 'all-a21-04-lueften', icon: 'Wind', de: 'lüften', pos: 'verb', ru: 'проветривать', forms: 'er lüftet · hat gelüftet', note: 'В Германии советуют проветривать несколько раз в день по 5–10 минут.', example: { de: 'Lüften Sie dreimal am Tag.', ru: 'Проветривайте три раза в день.', cloze: 'Lüften' } },
    { id: 'all-a21-04-mieterhoehung', icon: 'TrendingUp', de: 'Mieterhöhung', pos: 'noun', article: 'die', plural: 'Mieterhöhungen', ru: 'повышение арендной платы', parts: ['Miet', 'erhöhung'], example: { de: 'Wir haben einen Brief über eine Mieterhöhung bekommen.', ru: 'Мы получили письмо о повышении аренды.', cloze: 'Mieterhöhung' } },
    { id: 'all-a21-04-wohngeld', icon: 'Home', de: 'Wohngeld', pos: 'noun', article: 'das', ru: 'жилищная субсидия', parts: ['Wohn', 'geld'], example: { de: 'Mit wenig Einkommen können Sie Wohngeld beantragen.', ru: 'При низком доходе можно получить жилищную субсидию.', cloze: 'Wohngeld' } },
    { id: 'all-a21-04-recht', icon: 'Scale', de: 'Recht', pos: 'noun', article: 'das', plural: 'Rechte', ru: 'право', note: 'Recht haben — быть правым.', example: { de: 'Sie haben das Recht auf eine Reparatur.', ru: 'У вас есть право на ремонт.', cloze: 'Recht' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die Nebenkostenabrechnung',
      de: `Ein Jahr nach dem Einzug bekommt Familie Haddad die Nebenkostenabrechnung. Darin stehen die Kosten für Wasser, Heizung und Müll. Leyla liest: „Nachzahlung: dreihundertzwanzig Euro.“ Sie erschrickt.

Frau Schulz erklärt: „Jeden Monat zahlen Sie eine Vorauszahlung. Wenn Sie mehr verbrauchen, müssen Sie nachzahlen. Wenn Sie weniger verbrauchen, bekommen Sie Geld zurück.“

Den Strom bezahlt die Familie extra. Einmal im Jahr schreibt Amir den Zählerstand auf und schickt ihn an den Stromanbieter. Leyla sagt: „Ab jetzt müssen wir sparen!“`,
      ru: `Через год после заселения семья Хаддад получает расчёт коммунальных платежей. В нём указаны расходы на воду, отопление и мусор. Лейла читает: «Доплата: триста двадцать евро». Она пугается.

Госпожа Шульц объясняет: «Каждый месяц вы вносите предоплату. Если тратите больше — доплачиваете. Если меньше — вам возвращают деньги».

За электричество семья платит отдельно. Раз в год Амир записывает показания счётчика и отправляет их поставщику электроэнергии. Лейла говорит: «Теперь нам нужно экономить!»`,
      gloss: { verbraucht: 'потребляет, тратит', darin: 'в нём', haddad: 'Хаддад (фамилия)', leyla: 'Лейла (имя)', amir: 'Амир (имя)', schulz: 'Шульц (фамилия)', einzug: 'заселение, въезд', kosten: 'расходы', nachzahlung: 'доплата', dreihundertzwanzig: 'триста двадцать', erschrickt: 'пугается', vorauszahlung: 'предоплата', verbrauchen: 'потребляете, тратите', weniger: 'меньше', extra: 'отдельно', stromanbieter: 'поставщик электроэнергии' },
      questions: [
        { q: 'Wie viel muss die Familie nachzahlen?', ru: 'Сколько семье нужно доплатить?', options: ['Dreihundertzwanzig Euro', 'Hundert Euro', 'Nichts'], answer: 'Dreihundertzwanzig Euro' },
        { q: 'Was passiert, wenn man weniger verbraucht?', ru: 'Что происходит, если потребляешь меньше?', options: ['Man bekommt Geld zurück.', 'Man muss nachzahlen.', 'Nichts.'], answer: 'Man bekommt Geld zurück.' },
        { q: 'Wie oft schreibt Amir den Zählerstand auf?', ru: 'Как часто Амир записывает показания?', options: ['Einmal im Jahr', 'Jeden Monat', 'Jeden Tag'], answer: 'Einmal im Jahr' },
      ],
      translate: [
        { de: 'Wir müssen hundert Euro nachzahlen.', ru: 'Нам нужно доплатить сто евро.', wrongRu: ['Нам вернут сто евро.', 'Нам нужно заплатить тысячу евро.'] },
        { de: 'Der Strom ist teuer.', ru: 'Электричество дорогое.', wrongRu: ['Вода дорогая.', 'Электричество дешёвое.'] },
        { de: 'Bitte schreiben Sie den Zählerstand auf.', ru: 'Запишите, пожалуйста, показания счётчика.', wrongRu: ['Позвоните, пожалуйста, поставщику.', 'Оплатите, пожалуйста, счёт.'] },
      ],
    },
    {
      lesson: 1, title: 'Schimmel im Bad',
      de: `Im Winter sieht Leyla schwarze Flecken an der Wand im Bad. Es ist Schimmel! Sie ruft den Vermieter an und meldet den Schaden.

Der Vermieter kommt und sagt: „Sie müssen mehr lüften. Dreimal am Tag, fünf Minuten.“ Aber das Fenster im Bad ist kaputt und schließt nicht richtig. Das ist ein Mangel der Wohnung. Wer repariert es?

Frau Schulz rät: „Gehen Sie zum Mieterverein. Als Mieter haben Sie Rechte. Der Vermieter muss das Fenster reparieren.“ Zwei Wochen später ist das Fenster neu. Leyla lüftet jetzt jeden Tag.`,
      ru: `Зимой Лейла видит на стене в ванной чёрные пятна. Это плесень! Она звонит арендодателю и сообщает о повреждении.

Арендодатель приходит и говорит: «Вам нужно больше проветривать. Три раза в день по пять минут». Но окно в ванной сломано и плохо закрывается. Это недостаток квартиры. Кто будет чинить?

Госпожа Шульц советует: «Сходите в союз арендаторов. У вас как у арендаторов есть права. Арендодатель обязан починить окно». Через две недели окно новое. Лейла теперь проветривает каждый день.`,
      gloss: { kaputten: 'сломанный', spiegel: 'зеркало', leyla: 'Лейла (имя)', schulz: 'Шульц (фамилия)', winter: 'зима', schwarze: 'чёрные', flecken: 'пятна', wand: 'стена', meldet: 'сообщает', kaputt: 'сломано', schließt: 'закрывается', richtig: 'правильно, как следует', rät: 'советует', mieterverein: 'союз арендаторов' },
      questions: [
        { q: 'Was sieht Leyla im Bad?', ru: 'Что Лейла видит в ванной?', options: ['Schimmel', 'Wasser auf dem Boden', 'Einen kaputten Spiegel'], answer: 'Schimmel' },
        { q: 'Was ist mit dem Fenster?', ru: 'Что с окном?', options: ['Es schließt nicht richtig.', 'Es ist zu klein.', 'Es ist neu.'], answer: 'Es schließt nicht richtig.' },
        { q: 'Wer muss das Fenster reparieren?', ru: 'Кто должен чинить окно?', options: ['Der Vermieter', 'Leyla', 'Frau Schulz'], answer: 'Der Vermieter' },
      ],
      translate: [
        { de: 'Im Bad ist Schimmel.', ru: 'В ванной плесень.', wrongRu: ['В кухне плесень.', 'В ванной вода.'] },
        { de: 'Lüften Sie dreimal am Tag.', ru: 'Проветривайте три раза в день.', wrongRu: ['Убирайте три раза в день.', 'Проветривайте раз в неделю.'] },
        { de: 'Als Mieter haben Sie Rechte.', ru: 'У вас как у арендатора есть права.', wrongRu: ['У арендатора нет прав.', 'У арендодателя есть права.'] },
      ],
    },
  ],
};
