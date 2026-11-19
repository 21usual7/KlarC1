import type { Module } from './types.ts';

// A2.2 informatik: first programs (lesson 0) and testing / debugging (lesson 1).

export const informatikA22: Module = {
  id: 'informatik-a22-code', sphere: 'informatik', level: 'A2.2',
  title: 'Programmieren lernen', subtitle: 'Цикл, условие, тип данных, тесты: язык первой лабораторной по программированию.',
  words: [
    { id: 'inf-a22-schleife', icon: 'Repeat', de: 'Schleife', pos: 'noun', article: 'die', plural: 'Schleifen', ru: 'цикл (в программе); петля', collocation: { de: 'eine Schleife schreiben', ru: 'написать цикл', accept: ['die Schleife schreiben'] }, example: { de: 'Die Schleife läuft durch alle Elemente der Liste.', ru: 'Цикл проходит по всем элементам списка.', cloze: 'Schleife' } },
    { id: 'inf-a22-bedingung', icon: 'Split', de: 'Bedingung', pos: 'noun', article: 'die', plural: 'Bedingungen', ru: 'условие', collocation: { de: 'die Bedingung prüfen', ru: 'проверить условие', accept: ['eine Bedingung prüfen'] }, example: { de: 'Wenn die Bedingung wahr ist, läuft die Schleife weiter.', ru: 'Если условие истинно, цикл продолжается.', cloze: 'Bedingung' } },
    { id: 'inf-a22-quellcode', icon: 'FileCode', imageQuery: 'source code on computer screen', de: 'Quellcode', pos: 'noun', article: 'der', ru: 'исходный код', parts: ['Quell', 'code'], note: 'Die Quelle — источник. Обычно без мн. ч.', example: { de: 'Jeder kann den Quellcode lesen.', ru: 'Каждый может читать исходный код.', cloze: 'Quellcode' } },
    { id: 'inf-a22-ausfuehren', icon: 'Play', de: 'ausführen', pos: 'verb', ru: 'выполнять, запускать (программу, код)', forms: 'er führt aus · hat ausgeführt', note: 'Отделяемая приставка: er führt das Programm aus.', collocation: { de: 'ein Programm ausführen', ru: 'запустить программу', accept: ['das Programm ausführen'] }, example: { de: 'Ich führe das Programm noch einmal aus.', ru: 'Я запускаю программу ещё раз.', cloze: 'führe' } },
    { id: 'inf-a22-algorithmus', icon: 'Workflow', de: 'Algorithmus', pos: 'noun', article: 'der', plural: 'Algorithmen', ru: 'алгоритм', example: { de: 'Dieser Algorithmus sortiert eine Liste.', ru: 'Этот алгоритм сортирует список.', cloze: 'Algorithmus' } },
    { id: 'inf-a22-befehl', icon: 'SquareTerminal', de: 'Befehl', pos: 'noun', article: 'der', plural: 'Befehle', ru: 'команда', collocation: { de: 'einen Befehl eingeben', ru: 'ввести команду', accept: ['den Befehl eingeben'] }, example: { de: 'Gib den Befehl im Terminal ein.', ru: 'Введи команду в терминале.', cloze: 'Befehl' } },
    { id: 'inf-a22-wert', icon: 'Binary', de: 'Wert', pos: 'noun', article: 'der', plural: 'Werte', ru: 'значение', note: 'Der Wert einer Variable — значение переменной.', example: { de: 'Die Variable hat jetzt einen neuen Wert.', ru: 'У переменной теперь новое значение.', cloze: 'Wert' } },
    { id: 'inf-a22-datentyp', icon: 'Shapes', de: 'Datentyp', pos: 'noun', article: 'der', plural: 'Datentypen', ru: 'тип данных', parts: ['Daten', 'typ'], example: { de: 'Ein Text hat einen anderen Datentyp als eine Zahl.', ru: 'У текста другой тип данных, чем у числа.', cloze: 'Datentyp' } },

    { id: 'inf-a22-testen', icon: 'FlaskConical', de: 'testen', pos: 'verb', ru: 'тестировать, проверять', forms: 'er testet · hat getestet', example: { de: 'Wir testen den Code vor jedem Update.', ru: 'Мы тестируем код перед каждым обновлением.', cloze: 'testen' } },
    { id: 'inf-a22-eingabe', icon: 'TextCursorInput', de: 'Eingabe', pos: 'noun', article: 'die', plural: 'Eingaben', ru: 'ввод; входные данные', note: 'Пара: die Eingabe ↔ die Ausgabe (ввод ↔ вывод).', example: { de: 'Das Programm wartet auf eine Eingabe.', ru: 'Программа ждёт ввода.', cloze: 'Eingabe' } },
    { id: 'inf-a22-ausgabe', icon: 'ArrowRightFromLine', de: 'Ausgabe', pos: 'noun', article: 'die', plural: 'Ausgaben', ru: 'вывод (результат программы)', example: { de: 'Die Ausgabe ist leider falsch.', ru: 'Вывод, к сожалению, неверный.', cloze: 'Ausgabe' } },
    { id: 'inf-a22-kommentar', icon: 'MessageSquareText', de: 'Kommentar', pos: 'noun', article: 'der', plural: 'Kommentare', ru: 'комментарий', collocation: { de: 'einen Kommentar schreiben', ru: 'написать комментарий' }, example: { de: 'Ein guter Kommentar erklärt den Code.', ru: 'Хороший комментарий объясняет код.', cloze: 'Kommentar' } },
    { id: 'inf-a22-kompilieren', icon: 'Cog', de: 'kompilieren', pos: 'verb', ru: 'компилировать', forms: 'er kompiliert · hat kompiliert', example: { de: 'Du musst den Code zuerst kompilieren.', ru: 'Сначала тебе нужно скомпилировать код.', cloze: 'kompilieren' } },
    { id: 'inf-a22-abstuerzen', icon: 'MonitorX', de: 'abstürzen', pos: 'verb', ru: 'падать, вылетать (о программе)', forms: 'er stürzt ab · ist abgestürzt', note: 'Отделяемая приставка; Perfekt с sein: ist abgestürzt.', example: { de: 'Das Programm ist schon wieder abgestürzt.', ru: 'Программа опять упала.', cloze: 'abgestürzt' } },
    { id: 'inf-a22-beheben', icon: 'Wrench', imageQuery: 'computer repair screwdriver', de: 'beheben', pos: 'verb', ru: 'устранять, исправлять', forms: 'er behebt · behob · hat behoben', note: 'Приставка be- неотделяемая; + Akk.', collocation: { de: 'einen Fehler beheben', ru: 'исправить ошибку', accept: ['den Fehler beheben'] }, example: { de: 'Sie hat den Fehler schnell behoben.', ru: 'Она быстро исправила ошибку.', cloze: 'behoben' } },
    { id: 'inf-a22-entwicklungsumgebung', icon: 'CodeXml', de: 'Entwicklungsumgebung', pos: 'noun', article: 'die', plural: 'Entwicklungsumgebungen', ru: 'среда разработки (IDE)', parts: ['Entwicklungs', 'umgebung'], note: 'Entwicklung (разработка) + s + Umgebung (окружение). Сокращение: IDE.', example: { de: 'Meine Entwicklungsumgebung zeigt Fehler sofort an.', ru: 'Моя среда разработки сразу показывает ошибки.', cloze: 'Entwicklungsumgebung' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Das erste Programm',
      de: `Lena studiert im ersten Semester Informatik an der TU Wien. Diese Woche musste sie ihr erstes Programm in Python schreiben. Die Aufgabe war ein einfacher Algorithmus: Das Programm soll die größte Zahl in einer Liste finden.

Zuerst hat Lena eine Schleife geschrieben. Die Schleife geht durch alle Werte der Liste. In der Schleife steht eine Bedingung: Wenn ein Wert größer als das Maximum ist, wird er das neue Maximum.

Dann hat sie im Terminal einen Befehl eingegeben und das Programm ausgeführt. Aber es gab einen Fehler, weil eine Zahl in der Liste als Text gespeichert war. Ihr Tutor Paul hat den Quellcode gelesen und gesagt: „Der Datentyp ist falsch. Du musst den Text zuerst in eine Zahl umwandeln.“`,
      ru: `Лена учится на первом семестре информатики в Венском техническом университете. На этой неделе ей нужно было написать свою первую программу на Python. Задание было простым алгоритмом: программа должна найти самое большое число в списке.

Сначала Лена написала цикл. Цикл проходит по всем значениям списка. В цикле стоит условие: если значение больше максимума, оно становится новым максимумом.

Потом она ввела команду в терминале и запустила программу. Но возникла ошибка, потому что одно число в списке было сохранено как текст. Её тьютор Пауль прочитал исходный код и сказал: «Тип данных неправильный. Сначала тебе нужно преобразовать текст в число».`,
      gloss: {
        lena: 'Лена (имя)', lenas: 'Лены (чей?)', paul: 'Пауль (имя)', semester: 'семестр', informatik: 'информатика', tu: 'TU — технический университет', wien: 'Вена',
        musste: 'должна была, пришлось', python: 'Python (язык программирования)', größte: 'самое большое', liste: 'список', geschrieben: 'написала',
        geht: 'идёт, проходит', größer: 'больше', maximum: 'максимум', wird: 'становится', neue: 'новым', terminal: 'терминал',
        eingegeben: 'ввела', gab: 'было, возникло (es gab — было)', text: 'текст', gespeichert: 'сохранено', tutor: 'тьютор, ассистент на практике',
        gelesen: 'прочитал', umwandeln: 'преобразовать', kleinste: 'самое маленькое', professor: 'профессор', selbst: 'сам(а)', einfacher: 'простой',
      },
      questions: [
        { q: 'Was soll Lenas Programm finden?', ru: 'Что должна найти программа Лены?', options: ['Die größte Zahl in einer Liste', 'Die kleinste Zahl in einer Liste', 'Einen Fehler im Quellcode'], answer: 'Die größte Zahl in einer Liste' },
        { q: 'Was steht in der Schleife?', ru: 'Что стоит в цикле?', options: ['Eine Bedingung', 'Ein Befehl für das Terminal', 'Eine neue Liste'], answer: 'Eine Bedingung' },
        { q: 'Warum gab es einen Fehler?', ru: 'Почему возникла ошибка?', options: ['Eine Zahl war als Text gespeichert.', 'Die Schleife war zu lang.', 'Lena hat das Programm nicht ausgeführt.'], answer: 'Eine Zahl war als Text gespeichert.' },
        { q: 'Wer hat den Quellcode gelesen?', ru: 'Кто прочитал исходный код?', options: ['Paul, der Tutor', 'Lenas Professor', 'Lena selbst'], answer: 'Paul, der Tutor' },
      ],
      translate: [
        { de: 'Die Schleife geht durch alle Werte.', ru: 'Цикл проходит по всем значениям.', wrongRu: ['Цикл проходит по некоторым значениям.', 'Условие проходит по всем значениям.'] },
        { de: 'Sie hat das Programm ausgeführt.', ru: 'Она запустила программу.', wrongRu: ['Она написала программу.', 'Он запустил программу.', 'Она удалила программу.'] },
        { de: 'Der Datentyp ist falsch.', ru: 'Тип данных неправильный.', wrongRu: ['Тип данных правильный.', 'Значение неправильное.'] },
      ],
    },
    {
      lesson: 1, title: 'Warum stürzt das Programm ab?',
      de: `In der zweiten Woche hat Lena ein Programm in C geschrieben. Bevor man es ausführen kann, muss man es kompilieren. Lenas Entwicklungsumgebung hat keinen Fehler angezeigt, aber das Programm ist trotzdem abgestürzt.

Lena wusste nicht, ob das Problem bei der Eingabe oder bei der Ausgabe war. Deshalb hat sie das Programm mit verschiedenen Eingaben getestet. Bei kleinen Zahlen war die Ausgabe richtig. Bei sehr großen Zahlen ist das Programm aber abgestürzt.

Paul hat ihr erklärt, dass der Datentyp int für so große Zahlen zu klein ist. Lena hat den Fehler behoben und einen Kommentar in den Quellcode geschrieben. Jetzt weiß jeder, warum dort long steht.`,
      ru: `На второй неделе Лена написала программу на C. Прежде чем её можно запустить, её нужно скомпилировать. Среда разработки Лены не показала ни одной ошибки, но программа всё равно упала.

Лена не знала, была ли проблема во вводе или в выводе. Поэтому она протестировала программу с разными входными данными. При маленьких числах вывод был правильным. А при очень больших числах программа падала.

Пауль объяснил ей, что тип данных int слишком мал для таких больших чисел. Лена исправила ошибку и написала комментарий в исходном коде. Теперь каждый знает, почему там стоит long.`,
      gloss: {
        lena: 'Лена (имя)', lenas: 'Лены (чей?)', paul: 'Пауль (имя)', c: 'C (язык программирования)', geschrieben: 'написала', bevor: 'прежде чем',
        angezeigt: 'показала', wusste: 'знала', verschiedenen: 'разными', kleinen: 'маленьких', großen: 'больших', zahlen: 'числах, числа',
        int: 'int (тип для целых чисел)', long: 'long (тип для больших целых чисел)', bei: 'при', dort: 'там', erklärt: 'объяснил', beim: 'при', zweiten: 'второй', ausführt: 'запускает, выполняет',
      },
      questions: [
        { q: 'Was muss man machen, bevor man ein Programm in C ausführt?', ru: 'Что нужно сделать, прежде чем запустить программу на C?', options: ['Man muss es kompilieren.', 'Man muss es löschen.', 'Man muss einen Kommentar schreiben.'], answer: 'Man muss es kompilieren.' },
        { q: 'Wann ist das Programm abgestürzt?', ru: 'Когда программа падала?', options: ['Bei sehr großen Zahlen', 'Bei kleinen Zahlen', 'Beim Kompilieren'], answer: 'Bei sehr großen Zahlen' },
        { q: 'Wie hat Lena das Programm getestet?', ru: 'Как Лена тестировала программу?', options: ['Mit verschiedenen Eingaben', 'Mit einer neuen Entwicklungsumgebung', 'Ohne Eingabe'], answer: 'Mit verschiedenen Eingaben' },
        { q: 'Was hat Lena in den Quellcode geschrieben?', ru: 'Что Лена написала в исходном коде?', options: ['Einen Kommentar', 'Eine Fehlermeldung', 'Eine neue Schleife'], answer: 'Einen Kommentar' },
      ],
      translate: [
        { de: 'Das Programm ist wieder abgestürzt.', ru: 'Программа снова упала.', wrongRu: ['Программа снова запустилась.', 'Программа не упала.'] },
        { de: 'Lena hat den Fehler behoben.', ru: 'Лена исправила ошибку.', wrongRu: ['Лена нашла ошибку.', 'Лена сделала ошибку.'] },
        { de: 'Bei kleinen Zahlen war die Ausgabe richtig.', ru: 'При маленьких числах вывод был правильным.', wrongRu: ['При больших числах вывод был правильным.', 'При маленьких числах ввод был правильным.', 'При маленьких числах вывод был неправильным.'] },
      ],
    },
  ],
};
