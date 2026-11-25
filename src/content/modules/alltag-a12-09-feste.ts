import type { Module } from '../types.ts';

// A1.2 alltag 09: celebrations — invitation, party, guests, presents (lesson 0); holidays: Christmas, Easter, Ramadan, New Year (lesson 1).

export const module: Module = {
  id: 'alltag-a12-09-feste', sphere: 'alltag', level: 'A1.2',
  title: 'Feste und Einladungen', subtitle: 'Праздники: приглашение, гости, подарки, поздравления; Рождество, Пасха, Рамадан и Новый год.',
  words: [
    { id: 'all-a12-09-fest', icon: 'PartyPopper', de: 'Fest', pos: 'noun', article: 'das', plural: 'Feste', ru: 'праздник', example: { de: 'Im Sommer gibt es ein Straßenfest.', ru: 'Летом будет уличный праздник.', cloze: 'fest' } },
    { id: 'all-a12-09-feier', icon: 'PartyPopper', de: 'Feier', pos: 'noun', article: 'die', plural: 'Feiern', ru: 'праздник, вечеринка, торжество', example: { de: 'Die Feier beginnt um sieben.', ru: 'Праздник начинается в семь.', cloze: 'Feier' } },
    { id: 'all-a12-09-feiern', icon: 'PartyPopper', de: 'feiern', pos: 'verb', ru: 'праздновать', forms: 'er feiert · hat gefeiert', example: { de: 'Wir feiern Karims Geburtstag.', ru: 'Мы празднуем день рождения Карима.', cloze: 'feiern' } },
    { id: 'all-a12-09-einladung', icon: 'Mail', de: 'Einladung', pos: 'noun', article: 'die', plural: 'Einladungen', ru: 'приглашение', example: { de: 'Danke für die Einladung!', ru: 'Спасибо за приглашение!', cloze: 'Einladung' } },
    { id: 'all-a12-09-einladen', icon: 'MailOpen', de: 'einladen', pos: 'verb', ru: 'приглашать', forms: 'er lädt ein · hat eingeladen', note: 'du lädst ein, er lädt ein.', example: { de: 'Wir laden die Nachbarn ein.', ru: 'Мы приглашаем соседей.', cloze: 'laden' } },
    { id: 'all-a12-09-gast', icon: 'Users', de: 'Gast', pos: 'noun', article: 'der', plural: 'Gäste', ru: 'гость', example: { de: 'Wir haben zwanzig Gäste.', ru: 'У нас двадцать гостей.', cloze: 'Gäste' } },
    { id: 'all-a12-09-geschenk', icon: 'Gift', de: 'Geschenk', pos: 'noun', article: 'das', plural: 'Geschenke', ru: 'подарок', example: { de: 'Das Geschenk ist für dich.', ru: 'Подарок для тебя.', cloze: 'Geschenk' } },
    { id: 'all-a12-09-mitbringen', icon: 'ShoppingBag', de: 'mitbringen', pos: 'verb', ru: 'приносить с собой', forms: 'er bringt mit · hat mitgebracht', note: 'Soll ich etwas mitbringen? — Мне что-нибудь принести?', example: { de: 'Soll ich etwas mitbringen?', ru: 'Мне что-нибудь принести?', cloze: 'mitbringen' } },

    { id: 'all-a12-09-gratulieren', icon: 'Award', de: 'gratulieren', pos: 'verb', ru: 'поздравлять', forms: 'er gratuliert · hat gratuliert', note: 'gratulieren + Dat: Ich gratuliere dir!', example: { de: 'Wir gratulieren dir zum Geburtstag!', ru: 'Поздравляем тебя с днём рождения!', cloze: 'gratulieren' } },
    { id: 'all-a12-09-glueckwunsch', icon: 'Sparkles', de: 'Glückwunsch', pos: 'noun', article: 'der', plural: 'Glückwünsche', ru: 'поздравление', parts: ['Glück', 'wunsch'], note: 'Herzlichen Glückwunsch! — Поздравляю!', example: { de: 'Herzlichen Glückwunsch zur Hochzeit!', ru: 'Поздравляю со свадьбой!', cloze: 'Glückwunsch' } },
    { id: 'all-a12-09-hochzeit', icon: 'Heart', de: 'Hochzeit', pos: 'noun', article: 'die', plural: 'Hochzeiten', ru: 'свадьба', example: { de: 'Die Hochzeit ist im August.', ru: 'Свадьба в августе.', cloze: 'Hochzeit' } },
    { id: 'all-a12-09-weihnachten', icon: 'TreePine', de: 'Weihnachten', pos: 'noun', article: 'das', ru: 'Рождество', note: 'Обычно без артикля: an Weihnachten / zu Weihnachten. Frohe Weihnachten!', example: { de: 'An Weihnachten sind die Geschäfte zu.', ru: 'На Рождество магазины закрыты.', cloze: 'Weihnachten' } },
    { id: 'all-a12-09-ostern', icon: 'Egg', de: 'Ostern', pos: 'noun', article: 'das', ru: 'Пасха', note: 'Обычно без артикля: an Ostern. Frohe Ostern!', example: { de: 'An Ostern suchen Kinder bunte Eier.', ru: 'На Пасху дети ищут крашеные яйца.', cloze: 'Ostern' } },
    { id: 'all-a12-09-silvester', icon: 'Sparkle', de: 'Silvester', pos: 'noun', article: 'das', ru: 'канун Нового года (31 декабря)', note: 'Guten Rutsch! — С наступающим! (перед Новым годом)', example: { de: 'An Silvester gibt es Feuerwerk.', ru: 'В новогоднюю ночь — фейерверк.', cloze: 'Silvester' } },
    { id: 'all-a12-09-ramadan', icon: 'Moon', de: 'Ramadan', pos: 'noun', article: 'der', ru: 'Рамадан', example: { de: 'Im Ramadan essen wir erst am Abend.', ru: 'Во время Рамадана мы едим только вечером.', cloze: 'Ramadan' } },
    { id: 'all-a12-09-feiertag', icon: 'CalendarHeart', de: 'Feiertag', pos: 'noun', article: 'der', plural: 'Feiertage', ru: 'праздничный (выходной) день', parts: ['Feier', 'tag'], example: { de: 'Am Feiertag arbeite ich nicht.', ru: 'В праздничный день я не работаю.', cloze: 'Feiertag' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die Einladung',
      de: `Karim wird sechs. Amir und Leyla feiern seinen Geburtstag. Sie laden die Nachbarn und Freunde ein. Frau Schulz bekommt eine Einladung: „Liebe Frau Schulz, wir feiern am Samstag um drei Uhr. Kommen Sie?“

Frau Schulz ruft an. „Danke für die Einladung! Ich komme gern. Soll ich etwas mitbringen?“ – „Vielleicht einen Kuchen?“

Am Samstag kommen zwanzig Gäste. Alle bringen Geschenke mit. Die Feier ist laut und lustig.`,
      ru: `Кариму исполняется шесть. Амир и Лейла празднуют его день рождения. Они приглашают соседей и друзей. Госпожа Шульц получает приглашение: «Дорогая госпожа Шульц, мы празднуем в субботу в три часа. Придёте?»

Госпожа Шульц звонит. «Спасибо за приглашение! С удовольствием приду. Мне что-нибудь принести?» — «Может быть, пирог?»

В субботу приходят двадцать гостей. Все приносят подарки. Праздник шумный и весёлый.`,
      gloss: { samstag: 'суббота', karim: 'Карим (имя)', amir: 'Амир (имя)', leyla: 'Лейла (имя)', schulz: 'Шульц (фамилия)', wird: 'исполняется', liebe: 'дорогая', kuchen: 'пирог', lustig: 'весёлый', vielleicht: 'может быть' },
      questions: [
        { q: 'Wie alt wird Karim?', ru: 'Сколько исполняется Кариму?', options: ['Sechs', 'Fünf', 'Acht'], answer: 'Sechs' },
        { q: 'Was bringt Frau Schulz mit?', ru: 'Что приносит госпожа Шульц?', options: ['Einen Kuchen', 'Blumen', 'Ein Buch'], answer: 'Einen Kuchen' },
        { q: 'Wie viele Gäste kommen?', ru: 'Сколько гостей приходит?', options: ['Zwanzig', 'Zehn', 'Sechs'], answer: 'Zwanzig' },
      ],
      translate: [
        { de: 'Danke für die Einladung!', ru: 'Спасибо за приглашение!', wrongRu: ['Спасибо за подарок!', 'Спасибо за праздник!'] },
        { de: 'Soll ich etwas mitbringen?', ru: 'Мне что-нибудь принести?', wrongRu: ['Мне что-нибудь купить?', 'Вам что-нибудь принести?'] },
        { de: 'Wir laden die Nachbarn ein.', ru: 'Мы приглашаем соседей.', wrongRu: ['Мы навещаем соседей.', 'Соседи приглашают нас.'] },
      ],
    },
    {
      lesson: 1, title: 'Feste in Deutschland',
      de: `Im Deutschkurs sprechen alle über Feste. Die Lehrerin erklärt: „Die wichtigsten Feiertage in Deutschland sind Weihnachten und Ostern. An Weihnachten bekommen Kinder Geschenke. An Ostern suchen sie bunte Eier.“

„Und an Silvester?“, fragt Dmytro. „An Silvester gibt es Feuerwerk. Man sagt: Guten Rutsch!“

Amir erzählt vom Ramadan. „Wir essen erst am Abend, wenn die Sonne untergeht. Am Ende feiern wir ein großes Fest.“ Die Lehrerin sagt: „Dann gratuliere ich Ihnen schon jetzt zum Fest!“`,
      ru: `На курсе немецкого все говорят о праздниках. Учительница объясняет: «Главные праздники в Германии — Рождество и Пасха. На Рождество дети получают подарки. На Пасху они ищут крашеные яйца».

«А в новогоднюю ночь?» — спрашивает Дмитро. «В новогоднюю ночь — фейерверк. Говорят: «Guten Rutsch!»»

Амир рассказывает о Рамадане. «Мы едим только вечером, когда садится солнце. В конце мы празднуем большой праздник». Учительница говорит: «Тогда я уже сейчас поздравляю вас с праздником!»`,
      gloss: { gratuliere: 'поздравляю', frohe: 'весёлой, счастливой (Frohe Ostern! — Счастливой Пасхи!)', muslime: 'мусульмане', herzlichen: 'сердечный (Herzlichen Glückwunsch! — Поздравляю!)', großes: 'большая', mittag: 'полдень', geschäfte: 'магазины', dmytro: 'Дмитро (имя)', amir: 'Амир (имя)', lehrerin: 'учительница', wichtigsten: 'самые важные', bunte: 'крашеные, разноцветные', feuerwerk: 'фейерверк', guten: '(Guten Rutsch!) С наступающим!', rutsch: '(Guten Rutsch!) С наступающим!', erst: 'только (не раньше)', untergeht: 'заходит, садится', erzählt: 'рассказывает', deutschland: 'Германия' },
      questions: [
        { q: 'Was bekommen Kinder an Weihnachten?', ru: 'Что дети получают на Рождество?', options: ['Geschenke', 'Bunte Eier', 'Feuerwerk'], answer: 'Geschenke' },
        { q: 'Was sagt man an Silvester?', ru: 'Что говорят в новогоднюю ночь?', options: ['Guten Rutsch!', 'Frohe Ostern!', 'Gute Besserung!'], answer: 'Guten Rutsch!' },
        { q: 'Wann essen Muslime im Ramadan?', ru: 'Когда мусульмане едят в Рамадан?', options: ['Am Abend', 'Am Morgen', 'Am Mittag'], answer: 'Am Abend' },
      ],
      translate: [
        { de: 'An Weihnachten sind die Geschäfte zu.', ru: 'На Рождество магазины закрыты.', wrongRu: ['На Рождество магазины открыты.', 'На Пасху магазины закрыты.'] },
        { de: 'Herzlichen Glückwunsch zum Geburtstag!', ru: 'С днём рождения!', wrongRu: ['Счастливого Рождества!', 'Выздоравливай!'] },
        { de: 'Wir feiern ein großes Fest.', ru: 'Мы празднуем большой праздник.', wrongRu: ['Мы идём на большой праздник.', 'Мы готовим большой ужин.'] },
      ],
    },
  ],
};
