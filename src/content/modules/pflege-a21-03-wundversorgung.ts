import type { Module } from '../types.ts';

// A2.1 pflege 03: wound care — sterile dressing change, disinfection (lesson 0); signs of inflammation, stitches, documentation (lesson 1).

export const module: Module = {
  id: 'pflege-a21-03-wundversorgung', sphere: 'pflege', level: 'A2.1',
  title: 'Wundversorgung', subtitle: 'Перевязка: стерильно сменить повязку, распознать воспаление, снять швы и записать результат.',
  words: [
    { id: 'pfl-a21-03-verbandswechsel', icon: 'RefreshCw', de: 'Verbandswechsel', pos: 'noun', article: 'der', plural: 'Verbandswechsel', ru: 'смена повязки, перевязка', parts: ['Verbands', 'wechsel'], example: { de: 'Der Verbandswechsel ist jeden zweiten Tag.', ru: 'Перевязка — через день.', cloze: 'Verbandswechsel' } },
    { id: 'pfl-a21-03-steril', icon: 'ShieldCheck', de: 'steril', pos: 'adj', ru: 'стерильный', example: { de: 'Wir arbeiten steril.', ru: 'Мы работаем стерильно.', cloze: 'steril' } },
    { id: 'pfl-a21-03-desinfizieren', icon: 'SprayCan', de: 'desinfizieren', pos: 'verb', ru: 'дезинфицировать', forms: 'er desinfiziert · hat desinfiziert', example: { de: 'Zuerst desinfiziere ich meine Hände.', ru: 'Сначала я дезинфицирую руки.', cloze: 'desinfiziere' } },
    { id: 'pfl-a21-03-desinfektionsmittel', icon: 'SprayCan', imageQuery: 'hand sanitizer dispenser', de: 'Desinfektionsmittel', pos: 'noun', article: 'das', plural: 'Desinfektionsmittel', ru: 'дезинфицирующее средство', parts: ['Desinfektions', 'mittel'], example: { de: 'Das Desinfektionsmittel muss dreißig Sekunden wirken.', ru: 'Дезсредство должно действовать тридцать секунд.', cloze: 'Desinfektionsmittel' } },
    { id: 'pfl-a21-03-kompresse', icon: 'Square', imageQuery: 'gauze pads', de: 'Kompresse', pos: 'noun', article: 'die', plural: 'Kompressen', ru: 'марлевая салфетка, компресс', example: { de: 'Ich lege eine sterile Kompresse auf die Wunde.', ru: 'Я кладу на рану стерильную салфетку.', cloze: 'Kompresse' } },
    { id: 'pfl-a21-03-pinzette', icon: 'Pipette', imageQuery: 'medical tweezers', de: 'Pinzette', pos: 'noun', article: 'die', plural: 'Pinzetten', ru: 'пинцет', example: { de: 'Mit der Pinzette nehme ich den alten Verband ab.', ru: 'Пинцетом я снимаю старую повязку.', cloze: 'Pinzette' } },
    { id: 'pfl-a21-03-naht', icon: 'Spline', de: 'Naht', pos: 'noun', article: 'die', plural: 'Nähte', ru: 'шов', note: 'die Fäden ziehen — снять швы.', example: { de: 'Die Naht sieht gut aus.', ru: 'Шов выглядит хорошо.', cloze: 'Naht' } },
    { id: 'pfl-a21-03-faden', icon: 'Spline', de: 'Faden', pos: 'noun', article: 'der', plural: 'Fäden', ru: 'нитка; (мн. ч.) швы', collocation: { de: 'die Fäden ziehen', ru: 'снять швы' }, example: { de: 'Morgen ziehen wir die Fäden.', ru: 'Завтра мы снимем швы.', cloze: 'Fäden' } },

    { id: 'pfl-a21-03-entzuendet', icon: 'Flame', de: 'entzündet', pos: 'adj', ru: 'воспалённый', example: { de: 'Die Wunde ist leicht entzündet.', ru: 'Рана слегка воспалена.', cloze: 'entzündet' } },
    { id: 'pfl-a21-03-geroetet', icon: 'Circle', de: 'gerötet', pos: 'adj', ru: 'покрасневший', example: { de: 'Die Haut um die Wunde ist gerötet.', ru: 'Кожа вокруг раны покраснела.', cloze: 'gerötet' } },
    { id: 'pfl-a21-03-geschwollen', icon: 'CircleDot', de: 'geschwollen', pos: 'adj', ru: 'опухший, отёкший', example: { de: 'Das Bein ist geschwollen.', ru: 'Нога опухла.', cloze: 'geschwollen' } },
    { id: 'pfl-a21-03-eiter', icon: 'Droplet', de: 'Eiter', pos: 'noun', article: 'der', ru: 'гной', example: { de: 'In der Wunde ist kein Eiter.', ru: 'В ране нет гноя.', cloze: 'Eiter' } },
    { id: 'pfl-a21-03-narbe', icon: 'Minus', de: 'Narbe', pos: 'noun', article: 'die', plural: 'Narben', ru: 'шрам, рубец', example: { de: 'Von der Operation bleibt eine kleine Narbe.', ru: 'После операции останется маленький шрам.', cloze: 'Narbe' } },
    { id: 'pfl-a21-03-wundheilung', icon: 'HeartPulse', de: 'Wundheilung', pos: 'noun', article: 'die', ru: 'заживление раны', parts: ['Wund', 'heilung'], example: { de: 'Rauchen stört die Wundheilung.', ru: 'Курение мешает заживлению ран.', cloze: 'Wundheilung' } },
    { id: 'pfl-a21-03-drainage', icon: 'Cable', de: 'Drainage', pos: 'noun', article: 'die', plural: 'Drainagen', ru: 'дренаж', example: { de: 'Die Drainage kommt morgen raus.', ru: 'Дренаж уберут завтра.', cloze: 'Drainage' } },
    { id: 'pfl-a21-03-dokumentieren', icon: 'NotebookPen', de: 'dokumentieren', pos: 'verb', ru: 'документировать, записывать', forms: 'er dokumentiert · hat dokumentiert', example: { de: 'Ich dokumentiere die Wunde mit einem Foto.', ru: 'Я документирую рану на фото.', cloze: 'dokumentiere' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Der Verbandswechsel',
      de: `Herr Nowak wurde vor fünf Tagen am Bein operiert. Heute ist wieder Verbandswechsel. Olena bereitet alles vor: sterile Kompressen, eine Pinzette, Handschuhe und Desinfektionsmittel.

Zuerst desinfiziert sie ihre Hände. Dann zieht sie Handschuhe an und nimmt mit der Pinzette den alten Verband ab. „Tut das weh?“, fragt sie. „Nein, nur ein bisschen“, sagt Herr Nowak.

Olena desinfiziert die Wunde. Das Mittel muss dreißig Sekunden wirken. Dann legt sie eine neue sterile Kompresse auf die Naht. Sie arbeitet ruhig und genau, denn bei einer Wunde ist Hygiene sehr wichtig.`,
      ru: `Господина Новака пять дней назад прооперировали на ноге. Сегодня снова перевязка. Олена всё подготавливает: стерильные салфетки, пинцет, перчатки и дезсредство.

Сначала она дезинфицирует руки. Потом надевает перчатки и пинцетом снимает старую повязку. «Это больно?» — спрашивает она. «Нет, только чуть-чуть», — говорит господин Новак.

Олена дезинфицирует рану. Средство должно действовать тридцать секунд. Потом она кладёт на шов новую стерильную салфетку. Она работает спокойно и точно, ведь при ране гигиена очень важна.`,
      gloss: { sterile: 'стерильные', lege: 'кладу', nowak: 'Новак (фамилия)', olena: 'Олена (имя)', herr: 'господин', wurde: '(wurde operiert) был прооперирован', vor: 'назад', fünf: 'пять', tagen: 'дней (дат.)', bein: 'нога', operiert: 'прооперирован', heute: 'сегодня', wieder: 'снова', bereitet: '(bereitet … vor) готовит', alles: 'всё', handschuhe: 'перчатки', zuerst: 'сначала', desinfiziert: 'дезинфицирует', ihre: 'свои', hände: 'руки', dann: 'потом', zieht: '(zieht … an) надевает', an: '(zieht … an) надевает', nimmt: '(nimmt … ab) снимает', ab: '(nimmt … ab) снимает', alten: 'старую', verband: 'повязка', tut: '(tut weh) больно', weh: '(tut weh) больно', fragt: 'спрашивает', nur: 'только', bisschen: '(ein bisschen) чуть-чуть', sagt: 'говорит', wunde: 'рана', mittel: 'средство', muss: 'должно', dreißig: 'тридцать', sekunden: 'секунд', wirken: 'действовать', legt: 'кладёт', neue: 'новую', arbeitet: 'работает', ruhig: 'спокойно', genau: 'точно', denn: 'ведь, потому что', bei: 'при', hygiene: 'гигиена', wichtig: 'важна', was: 'что', wo: 'где', wann: 'когда', wie: 'как', lange: '(wie lange) как долго', arm: 'рука', bauch: 'живот', zehn: 'десять', minute: 'минута', einer: 'одной' },
      questions: [
        { q: 'Wo wurde Herr Nowak operiert?', ru: 'Где оперировали господина Новака?', options: ['Am Bein', 'Am Arm', 'Am Bauch'], answer: 'Am Bein' },
        { q: 'Was macht Olena zuerst?', ru: 'Что Олена делает сначала?', options: ['Sie desinfiziert ihre Hände.', 'Sie nimmt den Verband ab.', 'Sie zieht Handschuhe an.'], answer: 'Sie desinfiziert ihre Hände.' },
        { q: 'Wie lange muss das Mittel wirken?', ru: 'Сколько должно действовать средство?', options: ['Dreißig Sekunden', 'Zehn Sekunden', 'Eine Minute'], answer: 'Dreißig Sekunden' },
      ],
      translate: [
        { de: 'Zuerst desinfiziere ich meine Hände.', ru: 'Сначала я дезинфицирую руки.', wrongRu: ['В конце я дезинфицирую руки.', 'Сначала я надеваю перчатки.'] },
        { de: 'Ich lege eine sterile Kompresse auf die Wunde.', ru: 'Я кладу на рану стерильную салфетку.', wrongRu: ['Я снимаю с раны стерильную салфетку.', 'Я кладу на рану мазь.'] },
        { de: 'Bei einer Wunde ist Hygiene wichtig.', ru: 'При ране гигиена важна.', wrongRu: ['При ране гигиена не важна.', 'При простуде гигиена важна.'] },
      ],
    },
    {
      lesson: 1, title: 'Ist die Wunde entzündet?',
      de: `Olena sieht sich die Wunde genau an. Die Haut um die Naht ist leicht gerötet, aber nicht geschwollen. Es ist kein Eiter in der Wunde. „Die Wundheilung ist normal“, sagt sie. „Die Wunde ist nicht entzündet.“

Die Drainage ist schon draußen. Am Freitag zieht Doktor Wagner die Fäden. Herr Nowak fragt: „Bleibt eine Narbe?“ – „Ja, eine kleine. Aber sie wird mit der Zeit heller.“

Zum Schluss dokumentiert Olena alles. Sie macht ein Foto von der Wunde und schreibt: „Wunde sauber, leicht gerötet, kein Eiter.“ So kann die nächste Kollegin sehen, ob es besser oder schlechter wird.`,
      ru: `Олена внимательно осматривает рану. Кожа вокруг шва слегка покраснела, но не опухла. Гноя в ране нет. «Заживление идёт нормально, — говорит она. — Рана не воспалена».

Дренаж уже удалён. В пятницу доктор Вагнер снимет швы. Господин Новак спрашивает: «Шрам останется?» — «Да, маленький. Но со временем он станет светлее».

В конце Олена всё документирует. Она фотографирует рану и пишет: «Рана чистая, слегка покрасневшая, гноя нет». Так следующая коллега сможет увидеть, становится ли лучше или хуже.`,
      gloss: { voller: 'полный (чего-то)', gar: '(gar nicht) совсем не', mündlich: 'устно', olena: 'Олена (имя)', nowak: 'Новак (фамилия)', wagner: 'Вагнер (фамилия)', doktor: 'доктор', herr: 'господин', sieht: '(sieht sich … an) осматривает; видит', sich: 'себе', an: '(sieht sich … an) осматривает', wunde: 'рана', genau: 'внимательно, точно', haut: 'кожа', um: 'вокруг', leicht: 'слегка', aber: 'но', kein: 'нет, никакой', normal: 'нормальная', sagt: 'говорит', schon: 'уже', draußen: 'снаружи; (ist draußen) удалён', freitag: 'пятница', zieht: 'снимает (швы); тянет', fragt: 'спрашивает', bleibt: 'остаётся', kleine: 'маленький', wird: 'становится', mit: 'с', zeit: 'время', heller: 'светлее', zum: '(zum Schluss) в конце', schluss: 'конец', alles: 'всё', macht: 'делает', foto: 'фото', von: 'от, с', schreibt: 'пишет', sauber: 'чистая', so: 'так', kann: 'может', nächste: 'следующая', kollegin: 'коллега', sehen: 'увидеть', ob: 'ли', besser: 'лучше', oder: 'или', schlechter: 'хуже', was: 'что', wann: 'когда', wer: 'кто', wie: 'как, какой', montag: 'понедельник', heute: 'сегодня' },
      questions: [
        { q: 'Wie ist die Haut um die Naht?', ru: 'Какая кожа вокруг шва?', options: ['Leicht gerötet', 'Stark geschwollen', 'Voller Eiter'], answer: 'Leicht gerötet' },
        { q: 'Wann zieht Doktor Wagner die Fäden?', ru: 'Когда доктор Вагнер снимет швы?', options: ['Am Freitag', 'Heute', 'Am Montag'], answer: 'Am Freitag' },
        { q: 'Wie dokumentiert Olena die Wunde?', ru: 'Как Олена документирует рану?', options: ['Mit einem Foto und einem Text', 'Nur mündlich', 'Gar nicht'], answer: 'Mit einem Foto und einem Text' },
      ],
      translate: [
        { de: 'Die Wunde ist nicht entzündet.', ru: 'Рана не воспалена.', wrongRu: ['Рана воспалена.', 'Шов не воспалён.'] },
        { de: 'Am Freitag ziehen wir die Fäden.', ru: 'В пятницу мы снимем швы.', wrongRu: ['В пятницу мы наложим швы.', 'В понедельник мы снимем швы.'] },
        { de: 'Die Haut um die Naht ist gerötet.', ru: 'Кожа вокруг шва покраснела.', wrongRu: ['Кожа вокруг шва опухла.', 'Кожа вокруг шва бледная.'] },
      ],
    },
  ],
};
