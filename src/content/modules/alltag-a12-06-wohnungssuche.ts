import type { Module } from '../types.ts';

// A1.2 alltag 06: looking for a flat — ad, viewing, deposit, extra costs (lesson 0); moving in and out, caretaker (lesson 1).

export const module: Module = {
  id: 'alltag-a12-06-wohnungssuche', sphere: 'alltag', level: 'A1.2',
  title: 'Wohnungssuche', subtitle: 'Поиск квартиры: объявление, просмотр, залог, коммунальные платежи, переезд.',
  words: [
    { id: 'all-a12-06-anzeige', icon: 'Newspaper', de: 'Anzeige', pos: 'noun', article: 'die', plural: 'Anzeigen', ru: 'объявление; заявление (в полицию)', example: { de: 'Ich lese die Anzeigen im Internet.', ru: 'Я читаю объявления в интернете.', cloze: 'Anzeigen' } },
    { id: 'all-a12-06-besichtigung', icon: 'Eye', de: 'Besichtigung', pos: 'noun', article: 'die', plural: 'Besichtigungen', ru: 'просмотр (квартиры)', example: { de: 'Die Besichtigung ist am Samstag um zehn.', ru: 'Просмотр в субботу в десять.', cloze: 'Besichtigung' } },
    { id: 'all-a12-06-vermieter', icon: 'UserCheck', de: 'Vermieter', pos: 'noun', article: 'der', plural: 'Vermieter', ru: 'арендодатель', note: 'Арендатор — der Mieter.', example: { de: 'Der Vermieter möchte einen Arbeitsvertrag sehen.', ru: 'Арендодатель хочет видеть трудовой договор.', cloze: 'Vermieter' } },
    { id: 'all-a12-06-kaution', icon: 'Lock', de: 'Kaution', pos: 'noun', article: 'die', plural: 'Kautionen', ru: 'залог', note: 'Обычно до трёх холодных аренд.', example: { de: 'Die Kaution ist drei Monatsmieten.', ru: 'Залог — три месячные аренды.', cloze: 'Kaution' } },
    { id: 'all-a12-06-nebenkosten', icon: 'Receipt', de: 'Nebenkosten', pos: 'noun', article: 'die', pluralOnly: true, ru: 'коммунальные платежи', parts: ['Neben', 'kosten'], example: { de: 'Die Nebenkosten sind zweihundert Euro.', ru: 'Коммунальные платежи — двести евро.', cloze: 'Nebenkosten' } },
    { id: 'all-a12-06-kaltmiete', icon: 'Snowflake', de: 'Kaltmiete', pos: 'noun', article: 'die', plural: 'Kaltmieten', ru: 'аренда без коммунальных платежей', parts: ['Kalt', 'miete'], note: 'Warmmiete = Kaltmiete + Nebenkosten.', example: { de: 'Die Kaltmiete ist sechshundert Euro.', ru: 'Аренда без коммуналки — шестьсот евро.', cloze: 'Kaltmiete' } },
    { id: 'all-a12-06-warmmiete', icon: 'Flame', de: 'Warmmiete', pos: 'noun', article: 'die', plural: 'Warmmieten', ru: 'аренда с коммунальными платежами', parts: ['Warm', 'miete'], example: { de: 'Die Warmmiete ist achthundert Euro.', ru: 'Аренда с коммуналкой — восемьсот евро.', cloze: 'Warmmiete' } },
    { id: 'all-a12-06-quadratmeter', icon: 'Ruler', de: 'Quadratmeter', pos: 'noun', article: 'der', plural: 'Quadratmeter', ru: 'квадратный метр', note: 'Пишут m².', example: { de: 'Die Wohnung hat siebzig Quadratmeter.', ru: 'Квартира — семьдесят квадратных метров.', cloze: 'Quadratmeter' } },

    { id: 'all-a12-06-mieten', icon: 'Key', de: 'mieten', pos: 'verb', ru: 'снимать, арендовать', forms: 'er mietet · hat gemietet', example: { de: 'Wir möchten die Wohnung mieten.', ru: 'Мы хотим снять эту квартиру.', cloze: 'mieten' } },
    { id: 'all-a12-06-einziehen', icon: 'LogIn', de: 'einziehen', pos: 'verb', ru: 'въезжать (в квартиру)', forms: 'er zieht ein · ist eingezogen', example: { de: 'Wir ziehen am ersten Juni ein.', ru: 'Мы въезжаем первого июня.', cloze: 'ziehen' } },
    { id: 'all-a12-06-ausziehen', icon: 'LogOut', de: 'ausziehen', pos: 'verb', ru: 'выезжать (из квартиры); снимать (одежду)', forms: 'er zieht aus · ist ausgezogen', example: { de: 'Die alte Mieterin ist schon ausgezogen.', ru: 'Старая жиличка уже съехала.', cloze: 'ausgezogen' } },
    { id: 'all-a12-06-umzug', icon: 'Truck', imageQuery: 'moving boxes', de: 'Umzug', pos: 'noun', article: 'der', plural: 'Umzüge', ru: 'переезд', example: { de: 'Freunde helfen beim Umzug.', ru: 'Друзья помогают с переездом.', cloze: 'Umzug' } },
    { id: 'all-a12-06-moebliert', icon: 'Sofa', de: 'möbliert', pos: 'adj', ru: 'меблированный', example: { de: 'Die Wohnung ist nicht möbliert.', ru: 'Квартира без мебели.', cloze: 'möbliert' } },
    { id: 'all-a12-06-hausmeister', icon: 'Wrench', de: 'Hausmeister', pos: 'noun', article: 'der', plural: 'Hausmeister', ru: 'управдом, завхоз', example: { de: 'Der Hausmeister repariert die Heizung.', ru: 'Управдом чинит отопление.', cloze: 'Hausmeister' } },
    { id: 'all-a12-06-heizung', icon: 'Heater', de: 'Heizung', pos: 'noun', article: 'die', plural: 'Heizungen', ru: 'отопление; батарея', example: { de: 'Die Heizung funktioniert nicht.', ru: 'Отопление не работает.', cloze: 'Heizung' } },
    { id: 'all-a12-06-ab-sofort', icon: 'Zap', de: 'ab sofort', pos: 'phrase', ru: 'с этого момента, сразу', note: 'В объявлениях: ab sofort frei — свободна сразу.', example: { de: 'Die Wohnung ist ab sofort frei.', ru: 'Квартира свободна сразу.', cloze: 'ab sofort' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Eine größere Wohnung',
      de: `Die Wohnung von Familie Haddad ist zu klein. Leyla liest die Anzeigen im Internet: „Drei-Zimmer-Wohnung, siebzig Quadratmeter, Kaltmiete sechshundert Euro, Nebenkosten zweihundert Euro, ab sofort frei.“

Sie ruft den Vermieter an. Die Besichtigung ist am Samstag. Dort sind noch zehn andere Leute!

Der Vermieter sagt: „Die Warmmiete ist achthundert Euro. Die Kaution ist drei Monatsmieten. Bitte bringen Sie Ihren Arbeitsvertrag mit.“`,
      ru: `Квартира семьи Хаддад слишком маленькая. Лейла читает объявления в интернете: «Трёхкомнатная квартира, семьдесят квадратных метров, аренда шестьсот евро, коммунальные платежи двести евро, свободна сразу».

Она звонит арендодателю. Просмотр в субботу. Там ещё десять других людей!

Арендодатель говорит: «Аренда с коммуналкой — восемьсот евро. Залог — три месячные аренды. Пожалуйста, принесите трудовой договор».`,
      gloss: { mitbringen: 'принести с собой', samstag: 'суббота', achthundert: 'восемьсот', haddad: 'Хаддад (фамилия)', leyla: 'Лейла (имя)', internet: 'интернет', 'drei-zimmer-wohnung': 'трёхкомнатная квартира', sechshundert: 'шестьсот', zweihundert: 'двести', siebzig: 'семьдесят', andere: 'других', leute: 'людей', monatsmieten: 'месячные аренды', arbeitsvertrag: 'трудовой договор', größere: 'побольше' },
      questions: [
        { q: 'Wie groß ist die Wohnung?', ru: 'Какая площадь квартиры?', options: ['Siebzig Quadratmeter', 'Siebzehn Quadratmeter', 'Hundert Quadratmeter'], answer: 'Siebzig Quadratmeter' },
        { q: 'Wie hoch ist die Warmmiete?', ru: 'Какая аренда с коммуналкой?', options: ['Achthundert Euro', 'Sechshundert Euro', 'Zweihundert Euro'], answer: 'Achthundert Euro' },
        { q: 'Was soll Leyla mitbringen?', ru: 'Что Лейла должна принести?', options: ['Den Arbeitsvertrag', 'Die Kaution', 'Ihre Möbel'], answer: 'Den Arbeitsvertrag' },
      ],
      translate: [
        { de: 'Die Wohnung ist ab sofort frei.', ru: 'Квартира свободна сразу.', wrongRu: ['Квартира уже занята.', 'Квартира будет свободна через месяц.'] },
        { de: 'Die Besichtigung ist am Samstag.', ru: 'Просмотр в субботу.', wrongRu: ['Переезд в субботу.', 'Просмотр в воскресенье.'] },
        { de: 'Die Kaution ist drei Monatsmieten.', ru: 'Залог — три месячные аренды.', wrongRu: ['Залог — одна месячная аренда.', 'Аренда — три месяца.'] },
      ],
    },
    {
      lesson: 1, title: 'Der Umzug',
      de: `Familie Haddad bekommt die Wohnung! Die alte Mieterin ist schon ausgezogen. Am ersten Juni ziehen sie ein.

Der Umzug ist anstrengend. Dmytro und andere Freunde helfen. Die Wohnung ist nicht möbliert, deshalb bringen sie alle Möbel mit.

Am ersten Abend ist es kalt. Die Heizung funktioniert nicht. Amir ruft den Hausmeister an. Er kommt am nächsten Morgen und repariert sie.`,
      ru: `Семья Хаддад получает квартиру! Прежняя жиличка уже съехала. Первого июня они въезжают.

Переезд утомительный. Помогают Дмитро и другие друзья. Квартира без мебели, поэтому они привозят всю мебель с собой.

В первый вечер холодно. Отопление не работает. Амир звонит управдому. Тот приходит на следующее утро и чинит его.`,
      gloss: { samstag: 'суббота', mai: 'май', schulz: 'Шульц (фамилия)', haddad: 'Хаддад (фамилия)', dmytro: 'Дмитро (имя)', amir: 'Амир (имя)', mieterin: 'жиличка, арендатор (женщина)', juni: 'июнь', anstrengend: 'утомительный', funktioniert: 'работает, функционирует', repariert: 'чинит' },
      questions: [
        { q: 'Wann ziehen sie ein?', ru: 'Когда они въезжают?', options: ['Am ersten Juni', 'Am Samstag', 'Im Mai'], answer: 'Am ersten Juni' },
        { q: 'Wer hilft beim Umzug?', ru: 'Кто помогает с переездом?', options: ['Dmytro und andere Freunde', 'Der Vermieter', 'Frau Schulz'], answer: 'Dmytro und andere Freunde' },
        { q: 'Was funktioniert nicht?', ru: 'Что не работает?', options: ['Die Heizung', 'Das Licht', 'Das Wasser'], answer: 'Die Heizung' },
      ],
      translate: [
        { de: 'Wir ziehen am ersten Juni ein.', ru: 'Мы въезжаем первого июня.', wrongRu: ['Мы съезжаем первого июня.', 'Мы въезжаем первого июля.'] },
        { de: 'Freunde helfen beim Umzug.', ru: 'Друзья помогают с переездом.', wrongRu: ['Соседи помогают с переездом.', 'Друзья не помогают.'] },
        { de: 'Die Heizung funktioniert nicht.', ru: 'Отопление не работает.', wrongRu: ['Свет не работает.', 'Отопление работает.'] },
      ],
    },
  ],
};
