import type { Module } from '../types.ts';

// A1.2 informatik 05: writing a text on the computer (lesson 0) and editing it (lesson 1).

export const module: Module = {
  id: 'informatik-a12-05-texte', sphere: 'informatik', level: 'A1.2',
  title: 'Texte schreiben', subtitle: 'Документ, строка, буква, копировать и вставить: работа с текстом на компьютере.',
  words: [
    { id: 'inf-a12-05-dokument', icon: 'FileText', imageQuery: 'printed document', de: 'Dokument', pos: 'noun', article: 'das', plural: 'Dokumente', ru: 'документ', collocation: { de: 'ein Dokument erstellen', ru: 'создать документ', accept: ['ein neues Dokument erstellen', 'ein Dokument anlegen'] }, example: { de: 'Ich öffne ein neues Dokument.', ru: 'Я открываю новый документ.', cloze: 'Dokument' } },
    { id: 'inf-a12-05-text', icon: 'Text', imageQuery: 'printed text page', de: 'Text', pos: 'noun', article: 'der', plural: 'Texte', ru: 'текст', collocation: { de: 'einen Text schreiben', ru: 'написать текст', accept: ['den Text schreiben'] }, example: { de: 'Der Text ist zu lang.', ru: 'Текст слишком длинный.', cloze: 'Text' } },
    { id: 'inf-a12-05-zeile', icon: 'AlignLeft', de: 'Zeile', pos: 'noun', article: 'die', plural: 'Zeilen', ru: 'строка', collocation: { de: 'in der ersten Zeile', ru: 'в первой строке' }, example: { de: 'Die erste Zeile ist leer.', ru: 'Первая строка пустая.', cloze: 'Zeile' } },
    { id: 'inf-a12-05-buchstabe', icon: 'CaseSensitive', imageQuery: 'wooden alphabet letters', de: 'Buchstabe', pos: 'noun', article: 'der', plural: 'Buchstaben', ru: 'буква', note: 'Особое склонение: den / dem / des Buchstaben.', example: { de: 'Das Wort hat fünf Buchstaben.', ru: 'В слове пять букв.', cloze: 'Buchstaben' } },
    { id: 'inf-a12-05-wort', icon: 'WholeWord', imageQuery: 'word written on paper', de: 'Wort', pos: 'noun', article: 'das', plural: 'Wörter', ru: 'слово', note: 'Мн. ч. Wörter — отдельные слова; Worte — «слова, высказывание».', example: { de: 'Wie schreibt man dieses Wort?', ru: 'Как пишется это слово?', cloze: 'Wort' } },
    { id: 'inf-a12-05-satz', icon: 'TextQuote', de: 'Satz', pos: 'noun', article: 'der', plural: 'Sätze', ru: 'предложение (фраза)', note: 'Также «комплект, набор» и «прыжок».', collocation: { de: 'einen Satz schreiben', ru: 'написать предложение', accept: ['den Satz schreiben'] }, example: { de: 'Der erste Satz ist sehr lang.', ru: 'Первое предложение очень длинное.', cloze: 'Satz' } },
    { id: 'inf-a12-05-seite', icon: 'BookOpen', imageQuery: 'open book pages', de: 'Seite', pos: 'noun', article: 'die', plural: 'Seiten', ru: 'страница; сторона', collocation: { de: 'auf Seite zwei', ru: 'на второй странице', accept: ['auf der zweiten Seite'] }, example: { de: 'Das Dokument hat nur eine Seite.', ru: 'В документе только одна страница.', cloze: 'Seite' } },
    { id: 'inf-a12-05-absatz', icon: 'Pilcrow', de: 'Absatz', pos: 'noun', article: 'der', plural: 'Absätze', ru: 'абзац', note: 'Также «каблук».', collocation: { de: 'einen neuen Absatz beginnen', ru: 'начать новый абзац' }, example: { de: 'Der zweite Absatz ist sehr kurz.', ru: 'Второй абзац очень короткий.', cloze: 'Absatz' } },

    { id: 'inf-a12-05-kopieren', icon: 'Copy', imageQuery: 'photocopier', de: 'kopieren', pos: 'verb', ru: 'копировать', forms: 'er kopiert · hat kopiert', note: 'kopieren + Akk; на клавиатуре Strg + C.', collocation: { de: 'einen Text kopieren', ru: 'скопировать текст', accept: ['den Text kopieren'] }, example: { de: 'Ich kopiere den ganzen Satz.', ru: 'Я копирую всё предложение.', cloze: 'kopiere' } },
    { id: 'inf-a12-05-einfuegen', icon: 'ClipboardPaste', de: 'einfügen', pos: 'verb', ru: 'вставлять', forms: 'er fügt ein · hat eingefügt', note: 'Отделяемая приставка: ich füge den Text ein. На клавиатуре Strg + V.', collocation: { de: 'ein Bild einfügen', ru: 'вставить картинку', accept: ['ein Foto einfügen'] }, example: { de: 'Jetzt füge ich den Text unten ein.', ru: 'Теперь я вставляю текст внизу.', cloze: 'füge' } },
    { id: 'inf-a12-05-ausschneiden', icon: 'Scissors', imageQuery: 'scissors cutting paper', de: 'ausschneiden', pos: 'verb', ru: 'вырезать', forms: 'er schneidet aus · hat ausgeschnitten', note: 'Отделяемая приставка: ich schneide das Wort aus. На клавиатуре Strg + X.', example: { de: 'Sie schneidet das Wort aus.', ru: 'Она вырезает слово.', cloze: 'schneidet' } },
    { id: 'inf-a12-05-markieren', icon: 'Highlighter', imageQuery: 'highlighter pen', de: 'markieren', pos: 'verb', ru: 'выделять, отмечать', forms: 'er markiert · hat markiert', collocation: { de: 'den ganzen Text markieren', ru: 'выделить весь текст', accept: ['den Text markieren'] }, example: { de: 'Ich markiere das erste Wort.', ru: 'Я выделяю первое слово.', cloze: 'markiere' } },
    { id: 'inf-a12-05-schrift', icon: 'Type', imageQuery: 'typeface specimen', de: 'Schrift', pos: 'noun', article: 'die', plural: 'Schriften', ru: 'шрифт; почерк', collocation: { de: 'eine große Schrift', ru: 'крупный шрифт' }, example: { de: 'Die Schrift ist zu klein.', ru: 'Шрифт слишком мелкий.', cloze: 'Schrift' } },
    { id: 'inf-a12-05-fett', icon: 'Bold', de: 'fett', pos: 'adj', ru: 'жирный (о шрифте)', note: 'Про шрифт: fett — жирный, kursiv — курсив.', example: { de: 'Der Titel ist fett.', ru: 'Заголовок жирный.', cloze: 'fett' } },
    { id: 'inf-a12-05-rueckgaengig-machen', icon: 'Undo2', de: 'rückgängig machen', pos: 'phrase', ru: 'отменить (действие)', note: 'etwas rückgängig machen; на клавиатуре Strg + Z.', example: { de: 'Kann ich das rückgängig machen?', ru: 'Можно это отменить?', cloze: 'rückgängig machen' } },
    { id: 'inf-a12-05-leerzeichen', icon: 'Space', imageQuery: 'keyboard space bar', de: 'Leerzeichen', pos: 'noun', article: 'das', plural: 'Leerzeichen', ru: 'пробел', parts: ['Leer', 'zeichen'], note: 'leer (пустой) + Zeichen (знак).', example: { de: 'Hier fehlt ein Leerzeichen.', ru: 'Здесь не хватает пробела.', cloze: 'Leerzeichen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Text über Wien',
      de: `Jonas geht in Wien in die Schule. Heute schreibt er einen Text über seine Stadt. Er öffnet ein neues Dokument am Computer und tippt langsam.

Der Text hat drei Absätze. Im ersten Absatz schreibt Jonas über den Prater. In der ersten Zeile fehlt ein Buchstabe. Das Wort heißt nicht „Stat“, sondern „Stadt“. Jonas korrigiert das Wort und liest den Satz noch einmal.

Am Ende hat das Dokument zwei Seiten. Die Lehrerin liest den Text und sagt: „Der Text ist gut, aber das Wort ‚super‘ steht zu oft da!“ Jonas lacht.`,
      ru: `Йонас ходит в школу в Вене. Сегодня он пишет текст о своём городе. Он открывает новый документ на компьютере и медленно печатает.

В тексте три абзаца. В первом абзаце Йонас пишет о Пратере. В первой строке не хватает буквы. Слово не «Стат», а «Штадт» (город). Йонас исправляет слово и ещё раз читает предложение.

В конце в документе две страницы. Учительница читает текст и говорит: «Текст хороший, но слово „супер“ встречается слишком часто!» Йонас смеётся.`,
      gloss: {
        jonas: 'Йонас (имя)', wien: 'Вена', geht: 'идёт; (in die Schule gehen) ходит в школу', stadt: 'город', prater: 'Пратер (парк в Вене)', stat: 'ошибка: правильно «Stadt»',
        korrigiert: 'исправляет', super: 'супер', lacht: 'смеётся', tippt: 'печатает, набирает', absätze: 'абзацы', seiten: 'страницы',
        worüber: 'о чём', schule: 'школа', seinen: 'его, свой (вин. м. р.)', viele: 'много, сколько (wie viele)',
      },
      questions: [
        { q: 'Worüber schreibt Jonas?', ru: 'О чём пишет Йонас?', options: ['Über seine Stadt', 'Über seine Schule', 'Über seinen Computer'], answer: 'Über seine Stadt' },
        { q: 'Was fehlt in der ersten Zeile?', ru: 'Чего не хватает в первой строке?', options: ['Ein Buchstabe', 'Ein Wort', 'Ein Absatz'], answer: 'Ein Buchstabe' },
        { q: 'Wie viele Seiten hat das Dokument am Ende?', ru: 'Сколько страниц в документе в конце?', options: ['Zwei', 'Drei', 'Eine'], answer: 'Zwei' },
      ],
      translate: [
        { de: 'Jonas tippt den Text am Computer.', ru: 'Йонас набирает текст на компьютере.', wrongRu: ['Йонас читает текст на компьютере.', 'Йонас печатает текст на принтере.'] },
        { de: 'In der ersten Zeile fehlt ein Buchstabe.', ru: 'В первой строке не хватает буквы.', wrongRu: ['В последней строке не хватает буквы.', 'В первой строке не хватает слова.'] },
        { de: 'Das Dokument hat zwei Seiten.', ru: 'В документе две страницы.', wrongRu: ['В документе три страницы.', 'В тексте два абзаца.'] },
      ],
    },
    {
      lesson: 1, title: 'Das Plakat für das Schulfest',
      de: `Mia und Elif machen ein Plakat für das Schulfest. Mia markiert den Titel und macht ihn fett. Dann wählt sie eine große Schrift.

Elif kopiert ein Foto aus dem Internet und fügt es ein. Aber das Foto ist zu groß. Elif ist nervös und löscht den ganzen Text. „Oh nein!“, ruft sie.

Mia lacht: „Kein Problem. Wir machen das rückgängig.“ Sie drückt Strg und Z. Der Text ist wieder da. Dann schneidet Mia ein Wort aus und fügt es unten ein. Zwischen zwei Wörtern fehlt ein Leerzeichen. Jetzt ist das Plakat fertig.`,
      ru: `Мия и Элиф делают плакат для школьного праздника. Мия выделяет заголовок и делает его жирным. Потом она выбирает крупный шрифт.

Элиф копирует фото из интернета и вставляет его. Но фото слишком большое. Элиф нервничает и удаляет весь текст. «О нет!» — кричит она.

Мия смеётся: «Не проблема. Мы это отменим». Она нажимает Ctrl и Z. Текст снова на месте. Потом Мия вырезает одно слово и вставляет его внизу. Между двумя словами не хватает пробела. Теперь плакат готов.`,
      gloss: {
        mia: 'Мия (имя)', elif: 'Элиф (имя)', plakat: 'плакат', schulfest: 'школьный праздник', titel: 'заголовок', wählt: 'выбирает',
        foto: 'фото', nervös: 'нервный, нервничает', löscht: 'удаляет', ganzen: 'весь, целый (вин. м. р.)', oh: 'о!', ruft: 'кричит, зовёт',
        lacht: 'смеётся', machen: 'делаем; (rückgängig machen) отменяем', strg: 'Ctrl (клавиша)', z: 'Z (клавиша)', c: 'C (клавиша)', v: 'V (клавиша)',
        schneidet: 'вырезает (ausschneiden)', fügt: 'вставляет (einfügen)', unten: 'внизу', wörtern: 'словами (дат. мн.)', tasten: 'клавиши',
        woher: 'откуда', vom: 'с (von dem)', handy: 'мобильный телефон', schule: 'школа',
      },
      questions: [
        { q: 'Was macht Mia mit dem Titel?', ru: 'Что Мия делает с заголовком?', options: ['Sie macht ihn fett.', 'Sie löscht ihn.', 'Sie kopiert ihn.'], answer: 'Sie macht ihn fett.' },
        { q: 'Woher kommt das Foto?', ru: 'Откуда фото?', options: ['Aus dem Internet', 'Vom Handy', 'Aus der Schule'], answer: 'Aus dem Internet' },
        { q: 'Welche Tasten drückt Mia?', ru: 'Какие клавиши нажимает Мия?', options: ['Strg und Z', 'Strg und C', 'Strg und V'], answer: 'Strg und Z' },
        { q: 'Was fehlt zwischen zwei Wörtern?', ru: 'Чего не хватает между двумя словами?', options: ['Ein Leerzeichen', 'Ein Buchstabe', 'Ein Foto'], answer: 'Ein Leerzeichen' },
      ],
      translate: [
        { de: 'Mia macht den Titel fett.', ru: 'Мия делает заголовок жирным.', wrongRu: ['Мия делает заголовок крупным.', 'Элиф делает заголовок жирным.'] },
        { de: 'Elif kopiert ein Foto aus dem Internet.', ru: 'Элиф копирует фото из интернета.', wrongRu: ['Элиф удаляет фото из интернета.', 'Элиф копирует текст из интернета.'] },
        { de: 'Wir machen das rückgängig.', ru: 'Мы это отменим.', wrongRu: ['Мы это сохраним.', 'Мы это не отменим.', 'Они это отменят.'] },
      ],
    },
  ],
};
