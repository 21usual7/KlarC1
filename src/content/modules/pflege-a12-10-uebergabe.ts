import type { Module } from '../types.ts';

// A1.2 pflege 10: simple shift handover — report, notes, stable or restless (lesson 0); tasks, done, reminding (lesson 1).

export const module: Module = {
  id: 'pflege-a12-10-uebergabe', sphere: 'pflege', level: 'A1.2',
  title: 'Die Übergabe', subtitle: 'Передача смены: коротко рассказать коллеге о каждом пациенте и о том, что ещё нужно сделать.',
  words: [
    { id: 'pfl-a12-10-uebergabe', icon: 'ArrowLeftRight', de: 'Übergabe', pos: 'noun', article: 'die', plural: 'Übergaben', ru: 'передача смены', note: 'Bei der Übergabe — во время передачи смены.', example: { de: 'Die Übergabe ist um vierzehn Uhr.', ru: 'Передача смены в четырнадцать часов.', cloze: 'Übergabe' } },
    { id: 'pfl-a12-10-berichten', icon: 'Megaphone', de: 'berichten', pos: 'verb', ru: 'сообщать, докладывать', forms: 'er berichtet · hat berichtet', note: 'berichten über + Akk / von + Dat.', example: { de: 'Olena berichtet über die Nacht.', ru: 'Олена рассказывает о ночи.', cloze: 'berichtet' } },
    { id: 'pfl-a12-10-notiz', icon: 'StickyNote', de: 'Notiz', pos: 'noun', article: 'die', plural: 'Notizen', ru: 'заметка, запись', collocation: { de: 'sich Notizen machen', ru: 'делать заметки' }, example: { de: 'Ich mache mir Notizen.', ru: 'Я делаю себе заметки.', cloze: 'Notizen' } },
    { id: 'pfl-a12-10-unruhig', icon: 'Waves', de: 'unruhig', pos: 'adj', ru: 'беспокойный', example: { de: 'Frau Wolf war in der Nacht unruhig.', ru: 'Госпожа Вольф ночью беспокоилась.', cloze: 'unruhig' } },
    { id: 'pfl-a12-10-stabil', icon: 'ShieldCheck', de: 'stabil', pos: 'adj', ru: 'стабильный', example: { de: 'Herr Nowak ist stabil.', ru: 'Господин Новак в стабильном состоянии.', cloze: 'stabil' } },
    { id: 'pfl-a12-10-besonderheit', icon: 'Star', de: 'Besonderheit', pos: 'noun', article: 'die', plural: 'Besonderheiten', ru: 'особенность, что-то особое', note: 'Keine Besonderheiten. — Без особенностей (типичная фраза в отчёте).', example: { de: 'In Zimmer fünf gibt es keine Besonderheiten.', ru: 'В палате пять без особенностей.', cloze: 'Besonderheiten' } },
    { id: 'pfl-a12-10-entlassen', icon: 'LogOut', de: 'entlassen', pos: 'verb', ru: 'выписывать (из больницы)', forms: 'er entlässt · hat entlassen', note: 'die Entlassung — выписка.', example: { de: 'Herr Schmidt wird heute entlassen.', ru: 'Господина Шмидта сегодня выписывают.', cloze: 'entlassen' } },
    { id: 'pfl-a12-10-wichtig', icon: 'CircleAlert', de: 'wichtig', pos: 'adj', ru: 'важный', example: { de: 'Das ist sehr wichtig.', ru: 'Это очень важно.', cloze: 'wichtig' } },

    { id: 'pfl-a12-10-visite', icon: 'Stethoscope', de: 'Visite', pos: 'noun', article: 'die', plural: 'Visiten', ru: 'врачебный обход', example: { de: 'Nach der Visite gibt es neue Aufgaben.', ru: 'После обхода появляются новые задачи.', cloze: 'Visite' } },
    { id: 'pfl-a12-10-aufgabe', icon: 'ListChecks', de: 'Aufgabe', pos: 'noun', article: 'die', plural: 'Aufgaben', ru: 'задача, задание', example: { de: 'Was sind meine Aufgaben heute?', ru: 'Какие у меня сегодня задачи?', cloze: 'Aufgaben' } },
    { id: 'pfl-a12-10-erledigen', icon: 'CheckCheck', de: 'erledigen', pos: 'verb', ru: 'выполнять, сделать (дело)', forms: 'er erledigt · hat erledigt', note: 'Das ist erledigt. — Это сделано.', example: { de: 'Den Verband habe ich schon erledigt.', ru: 'Перевязку я уже сделала.', cloze: 'erledigt' } },
    { id: 'pfl-a12-10-fertig', icon: 'CircleCheck', de: 'fertig', pos: 'adj', ru: 'готовый; законченный', note: 'Ich bin fertig. — Я закончил(а).', example: { de: 'Bist du schon fertig?', ru: 'Ты уже закончила?', cloze: 'fertig' } },
    { id: 'pfl-a12-10-kollegin', icon: 'UserRound', de: 'Kollegin', pos: 'noun', article: 'die', plural: 'Kolleginnen', ru: 'коллега (женщина)', example: { de: 'Meine Kollegin übernimmt den Spätdienst.', ru: 'Моя коллега берёт вечернюю смену.', cloze: 'Kollegin' } },
    { id: 'pfl-a12-10-zettel', icon: 'FileText', de: 'Zettel', pos: 'noun', article: 'der', plural: 'Zettel', ru: 'записка, листок', example: { de: 'Auf dem Zettel stehen alle Aufgaben.', ru: 'На листке записаны все задачи.', cloze: 'Zettel' } },
    { id: 'pfl-a12-10-erinnern', icon: 'BellRing', de: 'erinnern', pos: 'verb', ru: 'напоминать; (sich erinnern) помнить', forms: 'er erinnert · hat erinnert', note: 'jemanden an + Akk erinnern — напомнить кому-то о чём-то.', example: { de: 'Kannst du mich an den Termin erinnern?', ru: 'Можешь напомнить мне о приёме?', cloze: 'erinnern' } },
    { id: 'pfl-a12-10-spaeter', icon: 'Clock', de: 'später', pos: 'adv', ru: 'позже', note: 'Bis später! — До встречи!', example: { de: 'Das mache ich später.', ru: 'Это я сделаю позже.', cloze: 'später' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Übergabe am Morgen',
      de: `Um sechs Uhr endet der Nachtdienst. Olena macht die Übergabe für ihre Kollegin Sabine. Sabine macht sich Notizen.

„Zimmer fünf: Herr Nowak ist stabil. Keine Besonderheiten“, berichtet Olena. „Zimmer sieben: Frau Wolf war in der Nacht unruhig. Sie hat wenig geschlafen. Bitte heute Mittag den Blutdruck messen. Das ist wichtig.“

„Und Herr Schmidt?“, fragt Sabine. „Er wird heute entlassen. Seine Frau holt ihn um zehn Uhr ab.“`,
      ru: `В шесть часов заканчивается ночная смена. Олена передаёт смену своей коллеге Сабине. Сабина делает заметки.

«Палата пять: господин Новак стабилен. Без особенностей, — докладывает Олена. — Палата семь: госпожа Вольф ночью беспокоилась. Она мало спала. Пожалуйста, сегодня в обед измерь давление. Это важно».

«А господин Шмидт?» — спрашивает Сабина. «Его сегодня выписывают. Жена заберёт его в десять часов».`,
      gloss: { herrn: 'господина (вин.)', olena: 'Олена (имя)', sabine: 'Сабина (имя)', nowak: 'Новак (фамилия)', wolf: 'Вольф (фамилия)', schmidt: 'Шмидт (фамилия)', herr: 'господин', frau: 'госпожа; жена', sechs: 'шесть', uhr: 'час', endet: 'заканчивается', nachtdienst: 'ночная смена', macht: 'делает', für: 'для', ihre: 'её, свою', sich: 'себе', zimmer: 'палата', fünf: 'пять', keine: 'никаких', sieben: 'семь', war: 'была', nacht: 'ночь', hat: 'имеет; вспом. глагол', wenig: 'мало', geschlafen: 'спала', heute: 'сегодня', mittag: 'полдень; (heute Mittag) сегодня в обед', blutdruck: 'давление', messen: 'измерить', fragt: 'спрашивает', wird: '(wird entlassen) выписывают', seine: 'его', holt: '(holt … ab) забирает', ihn: 'его', ab: '(holt … ab) забирает', zehn: 'десять', wann: 'когда', wer: 'кто', was: 'что', wie: 'как', abend: 'вечер', acht: 'восемь', tom: 'Том (имя)', sohn: 'сын', tochter: 'дочь', fieber: 'жар', zucker: 'сахар' },
      questions: [
        { q: 'Wann endet der Nachtdienst?', ru: 'Когда заканчивается ночная смена?', options: ['Um sechs Uhr', 'Um acht Uhr', 'Um zehn Uhr'], answer: 'Um sechs Uhr' },
        { q: 'Wie war Frau Wolf in der Nacht?', ru: 'Какой была госпожа Вольф ночью?', options: ['Unruhig', 'Stabil', 'Sehr müde'], answer: 'Unruhig' },
        { q: 'Wer holt Herrn Schmidt ab?', ru: 'Кто забирает господина Шмидта?', options: ['Seine Frau', 'Sein Sohn', 'Tom'], answer: 'Seine Frau' },
      ],
      translate: [
        { de: 'Herr Nowak ist stabil.', ru: 'Господин Новак стабилен.', wrongRu: ['Господин Новак беспокоен.', 'Господина Новака выписывают.'] },
        { de: 'Frau Wolf war in der Nacht unruhig.', ru: 'Госпожа Вольф ночью беспокоилась.', wrongRu: ['Госпожа Вольф ночью хорошо спала.', 'Госпожа Вольф днём беспокоилась.'] },
        { de: 'Herr Schmidt wird heute entlassen.', ru: 'Господина Шмидта сегодня выписывают.', wrongRu: ['Господина Шмидта сегодня привозят.', 'Господина Шмидта завтра выписывают.'] },
      ],
    },
    {
      lesson: 1, title: 'Was ist noch zu tun?',
      de: `Sabine fragt: „Was sind meine Aufgaben nach der Visite?“ Olena gibt ihr einen Zettel. Darauf stehen alle Aufgaben für den Frühdienst.

„Den Verband von Herrn Becker habe ich schon erledigt“, sagt Olena. „Aber der Katheter-Beutel von Herrn Nowak ist noch nicht leer. Das musst du später machen.“

„Bist du fertig?“, fragt Sabine. „Fast. Kannst du mich an etwas erinnern? Morgen muss ich um zehn Uhr zum Arzt. Ich tausche den Dienst mit Tom.“ Sabine lacht: „Kein Problem. Schlaf gut!“`,
      ru: `Сабина спрашивает: «Какие у меня задачи после обхода?» Олена даёт ей листок. На нём записаны все задачи на утреннюю смену.

«Перевязку господину Беккеру я уже сделала, — говорит Олена. — А мешок от катетера господина Новака ещё не опорожнён. Это тебе нужно сделать позже».

«Ты закончила?» — спрашивает Сабина. «Почти. Можешь мне кое о чём напомнить? Завтра мне в десять к врачу. Я меняюсь сменой с Томом». Сабина смеётся: «Без проблем. Выспись хорошенько!»`,
      gloss: { sabine: 'Сабина (имя)', olena: 'Олена (имя)', becker: 'Беккер (фамилия)', nowak: 'Новак (фамилия)', tom: 'Том (имя)', herrn: 'господина (род. смысл: von Herrn)', fragt: 'спрашивает', meine: 'мои', nach: 'после', gibt: 'даёт', ihr: 'ей', darauf: 'на нём', stehen: 'стоят; (darauf stehen) на нём записаны', alle: 'все', für: 'на, для', frühdienst: 'утренняя смена', verband: 'повязка, перевязка', von: 'от, у', habe: 'вспом. глагол', schon: 'уже', sagt: 'говорит', aber: 'но', 'katheter-beutel': 'мешок от катетера', noch: 'ещё', nicht: 'не', leer: 'пустой', musst: 'должна, нужно', machen: 'сделать', bist: 'ты (есть)', fast: 'почти', kannst: 'можешь', mich: 'меня, мне', an: 'о (erinnern an)', etwas: 'кое-что', morgen: 'завтра', muss: 'должна, нужно', zehn: 'десять', uhr: 'час', zum: 'к (zu + dem)', arzt: 'врач', tausche: 'меняюсь', dienst: 'смена', mit: 'с', lacht: 'смеётся', kein: 'никакой; (kein Problem) без проблем', problem: 'проблема', schlaf: 'спи, выспись', gut: 'хорошо', was: 'что', wer: 'кто', wann: 'когда', zu: 'надо; (zu tun) нужно сделать', tun: 'делать', ist: 'есть', acht: 'восемь', zwölf: 'двенадцать', urlaub: 'отпуск', sie: 'она', heute: 'сегодня' },
      questions: [
        { q: 'Was gibt Olena Sabine?', ru: 'Что Олена даёт Сабине?', options: ['Einen Zettel', 'Einen Verband', 'Einen Beutel'], answer: 'Einen Zettel' },
        { q: 'Was hat Olena schon erledigt?', ru: 'Что Олена уже сделала?', options: ['Den Verband von Herrn Becker', 'Den Beutel von Herrn Nowak', 'Die Visite'], answer: 'Den Verband von Herrn Becker' },
        { q: 'Wann muss Olena morgen zum Arzt?', ru: 'Когда Олене завтра к врачу?', options: ['Um zehn Uhr', 'Um acht Uhr', 'Um zwölf Uhr'], answer: 'Um zehn Uhr' },
      ],
      translate: [
        { de: 'Was sind meine Aufgaben heute?', ru: 'Какие у меня сегодня задачи?', wrongRu: ['Какие у неё сегодня задачи?', 'Какие у меня завтра задачи?'] },
        { de: 'Den Verband habe ich schon erledigt.', ru: 'Перевязку я уже сделала.', wrongRu: ['Перевязку я ещё не сделала.', 'Перевязку сделает коллега.'] },
        { de: 'Kannst du mich an den Termin erinnern?', ru: 'Можешь напомнить мне о приёме?', wrongRu: ['Можешь записать меня на приём?', 'Ты помнишь о приёме?'] },
      ],
    },
  ],
};
