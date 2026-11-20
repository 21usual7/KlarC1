import type { Module } from '../types.ts';

// A2.2 informatik 07: operating systems in depth — processes and threads (lesson 0), memory and file system (lesson 1).

export const module: Module = {
  id: 'informatik-a22-07-betriebssysteme', sphere: 'informatik', level: 'A2.2',
  title: 'Betriebssysteme vertieft', subtitle: 'Процессы, потоки, память и файловая система: курс по операционным системам.',
  words: [
    { id: 'inf-a22-07-prozess', icon: 'Activity', imageQuery: 'task manager', de: 'Prozess', pos: 'noun', article: 'der', plural: 'Prozesse', ru: 'процесс (запущенная программа)', collocation: { de: 'einen Prozess starten', ru: 'запустить процесс', accept: ['den Prozess starten'] }, example: { de: 'Jedes Programm läuft als eigener Prozess.', ru: 'Каждая программа работает как отдельный процесс.', cloze: 'Prozess' } },
    { id: 'inf-a22-07-thread', icon: 'Spline', imageQuery: 'thread spool', de: 'Thread', pos: 'noun', article: 'der', plural: 'Threads', ru: 'поток (выполнения)', note: 'В немецком обычно английское слово; реже — der Ausführungsstrang.', example: { de: 'Ein Prozess kann mehrere Threads haben.', ru: 'У процесса может быть несколько потоков.', cloze: 'Threads' } },
    { id: 'inf-a22-07-rechenzeit', icon: 'Hourglass', de: 'Rechenzeit', pos: 'noun', article: 'die', ru: 'процессорное (вычислительное) время', parts: ['Rechen', 'zeit'], note: 'Обычно без мн. ч.', example: { de: 'Das Spiel braucht sehr viel Rechenzeit.', ru: 'Игре нужно очень много процессорного времени.', cloze: 'Rechenzeit' } },
    { id: 'inf-a22-07-beenden', icon: 'CircleStop', de: 'beenden', pos: 'verb', ru: 'завершать, закрывать', forms: 'er beendet · hat beendet', note: 'Приставка be- неотделяемая; + Akk.', collocation: { de: 'einen Prozess beenden', ru: 'завершить процесс', accept: ['den Prozess beenden'] }, example: { de: 'Ich beende den hängenden Prozess im Terminal.', ru: 'Я завершаю зависший процесс в терминале.', cloze: 'beende' } },
    { id: 'inf-a22-07-treiber', icon: 'Cog', imageQuery: 'driver installation CD', de: 'Treiber', pos: 'noun', article: 'der', plural: 'Treiber', ru: 'драйвер', note: 'Мн. ч. совпадает с ед.: die Treiber.', example: { de: 'Für den neuen Drucker brauche ich einen Treiber.', ru: 'Для нового принтера мне нужен драйвер.', cloze: 'Treiber' } },
    { id: 'inf-a22-07-kern', icon: 'Atom', de: 'Kern', pos: 'noun', article: 'der', plural: 'Kerne', ru: 'ядро (процессора или ОС)', note: 'Ядро процессора — der Prozessorkern; ядро ОС — der Kernel / der Betriebssystemkern.', imageQuery: 'multi-core processor die', example: { de: 'Jeder Kern bearbeitet einen eigenen Thread.', ru: 'Каждое ядро обрабатывает свой поток.', cloze: 'Kern' } },
    { id: 'inf-a22-07-prioritaet', icon: 'ListOrdered', de: 'Priorität', pos: 'noun', article: 'die', plural: 'Prioritäten', ru: 'приоритет', collocation: { de: 'eine hohe Priorität haben', ru: 'иметь высокий приоритет', accept: ['hohe Priorität haben'] }, example: { de: 'Dieser Prozess hat eine hohe Priorität.', ru: 'У этого процесса высокий приоритет.', cloze: 'Priorität' } },
    { id: 'inf-a22-07-terminal', icon: 'Terminal', de: 'Terminal', pos: 'noun', article: 'das', plural: 'Terminals', ru: 'терминал', imageQuery: 'linux terminal window', example: { de: 'Im Terminal siehst du alle laufenden Prozesse.', ru: 'В терминале ты видишь все запущенные процессы.', cloze: 'Terminal' } },

    { id: 'inf-a22-07-speicherverwaltung', icon: 'MemoryStick', de: 'Speicherverwaltung', pos: 'noun', article: 'die', ru: 'управление памятью', parts: ['Speicher', 'verwaltung'], note: 'Speicher (память) + Verwaltung (управление). Обычно без мн. ч.', example: { de: 'Die Speicherverwaltung ist eine Aufgabe des Betriebssystems.', ru: 'Управление памятью — задача операционной системы.', cloze: 'Speicherverwaltung' } },
    { id: 'inf-a22-07-dateisystem', icon: 'FolderTree', de: 'Dateisystem', pos: 'noun', article: 'das', plural: 'Dateisysteme', ru: 'файловая система', parts: ['Datei', 'system'], example: { de: 'Linux und Windows verwenden verschiedene Dateisysteme.', ru: 'Linux и Windows используют разные файловые системы.', cloze: 'Dateisysteme' } },
    { id: 'inf-a22-07-zuweisen', icon: 'ArrowRightToLine', de: 'zuweisen', pos: 'verb', ru: 'выделять, назначать', forms: 'er weist zu · hat zugewiesen', note: 'Отделяемая приставка; jemandem (Dat) etwas (Akk) zuweisen.', collocation: { de: 'Speicher zuweisen', ru: 'выделить память', accept: ['den Speicher zuweisen'] }, example: { de: 'Das System weist dem Prozess Speicher zu.', ru: 'Система выделяет процессу память.', cloze: 'weist' } },
    { id: 'inf-a22-07-verzeichnis', icon: 'FolderOpen', imageQuery: 'file folders', de: 'Verzeichnis', pos: 'noun', article: 'das', plural: 'Verzeichnisse', ru: 'каталог, директория', note: 'В быту чаще: der Ordner (папка).', example: { de: 'Wechsle mit cd in ein anderes Verzeichnis.', ru: 'Перейди с помощью cd в другой каталог.', cloze: 'Verzeichnis' } },
    { id: 'inf-a22-07-pfad', icon: 'Route', imageQuery: 'footpath', de: 'Pfad', pos: 'noun', article: 'der', plural: 'Pfade', ru: 'путь (к файлу)', collocation: { de: 'den Pfad angeben', ru: 'указать путь', accept: ['einen Pfad angeben'] }, example: { de: 'Gib den vollständigen Pfad zur Datei an.', ru: 'Укажи полный путь к файлу.', cloze: 'Pfad' } },
    { id: 'inf-a22-07-systemaufruf', icon: 'Cpu', de: 'Systemaufruf', pos: 'noun', article: 'der', plural: 'Systemaufrufe', ru: 'системный вызов', parts: ['System', 'aufruf'], example: { de: 'Das Programm macht einen Systemaufruf.', ru: 'Программа делает системный вызов.', cloze: 'Systemaufruf' } },
    { id: 'inf-a22-07-hochfahren', icon: 'Power', imageQuery: 'computer booting', de: 'hochfahren', pos: 'verb', ru: 'загружаться, запускаться (о компьютере)', forms: 'er fährt hoch · ist hochgefahren', note: 'Den Rechner hochfahren (hat) — включить; der Rechner fährt hoch (ist) — загружается. Противоположность: herunterfahren.', example: { de: 'Der Rechner fährt in zwanzig Sekunden hoch.', ru: 'Компьютер загружается за двадцать секунд.', cloze: 'fährt' } },
    { id: 'inf-a22-07-virtuell', icon: 'Boxes', de: 'virtuell', pos: 'adj', ru: 'виртуальный', collocation: { de: 'virtueller Speicher', ru: 'виртуальная память', accept: ['der virtuelle Speicher'] }, example: { de: 'Jeder Prozess bekommt seinen eigenen virtuellen Speicher.', ru: 'Каждый процесс получает собственную виртуальную память.', cloze: 'virtuellen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Warum ist der Laptop so langsam?',
      de: `Tobias und Aylin lernen zusammen für die Prüfung in Betriebssystemen. Plötzlich wurde Tobias' Laptop sehr langsam, und der Lüfter war laut.

Aylin öffnete das Terminal und gab den Befehl top ein. Jetzt konnten sie alle Prozesse sehen. Ein Prozess brauchte fast die gesamte Rechenzeit: ein altes Programm, das Tobias vergessen hatte. „Es läuft mit hoher Priorität und benutzt alle Kerne gleichzeitig“, erklärte Aylin.

Tobias wollte wissen, ob ein Prozess mehrere Aufgaben gleichzeitig erledigen kann. „Ja, dafür gibt es Threads“, sagte Aylin. „Ein Prozess kann viele Threads haben, und das Betriebssystem verteilt sie auf die Kerne.“ Dann beendete sie den Prozess mit dem Befehl kill. Nach wenigen Sekunden war der Laptop wieder schnell.`,
      ru: `Тобиас и Айлин вместе готовятся к экзамену по операционным системам. Вдруг ноутбук Тобиаса стал очень медленным, а вентилятор шумел.

Айлин открыла терминал и ввела команду top. Теперь они видели все процессы. Один процесс забирал почти всё процессорное время: старая программа, о которой Тобиас забыл. «Он работает с высоким приоритетом и использует все ядра одновременно», — объяснила Айлин.

Тобиас хотел знать, может ли процесс выполнять несколько задач одновременно. «Да, для этого есть потоки, — сказала Айлин. — У процесса может быть много потоков, и операционная система распределяет их по ядрам». Потом она завершила процесс командой kill. Через несколько секунд ноутбук снова стал быстрым.`,
      gloss: {
        tobias: 'Тобиас (имя)', aylin: 'Айлин (имя)', lernen: 'учатся, готовятся', zusammen: 'вместе', prüfung: 'экзамен', betriebssystemen: 'операционным системам', plötzlich: 'вдруг',
        wurde: 'стал', laptop: 'ноутбук', langsam: 'медленный', lüfter: 'вентилятор', laut: 'громкий', öffnete: 'открыла', gab: 'ввела (gab ein)', befehl: 'команда', top: 'top (команда Linux)',
        konnten: 'могли', sehen: 'видеть', brauchte: 'забирал, потреблял', fast: 'почти', gesamte: 'всё', altes: 'старая', programm: 'программа', vergessen: 'забыл', läuft: 'работает',
        hoher: 'высоким', benutzt: 'использует', alle: 'все', erklärte: 'объяснила', wollte: 'хотел', wissen: 'знать', ob: 'ли', mehrere: 'несколько', aufgaben: 'задачи', erledigen: 'выполнять',
        dafür: 'для этого', sagte: 'сказала', viele: 'много', betriebssystem: 'операционная система', verteilt: 'распределяет', beendete: 'завершила', kill: 'kill (команда Linux)',
        wenigen: 'нескольких', sekunden: 'секунд', schnell: 'быстрый', los: '(was war los — что случилось)', kaputt: 'сломан', internet: 'интернет', welcher: 'какой', browser: 'браузер',
        dateien: 'файлы', befehle: 'команды', womit: 'чем, с помощью чего', neustart: 'перезагрузка', niedrigen: 'низким',
      },
      questions: [
        { q: 'Was war mit Tobias\' Laptop los?', ru: 'Что случилось с ноутбуком Тобиаса?', options: ['Er war sehr langsam.', 'Er war kaputt.', 'Er hatte kein Internet.'], answer: 'Er war sehr langsam.' },
        { q: 'Welcher Prozess brauchte fast die gesamte Rechenzeit?', ru: 'Какой процесс забирал почти всё процессорное время?', options: ['Ein altes Programm', 'Der Browser', 'Das Terminal'], answer: 'Ein altes Programm' },
        { q: 'Was verteilt das Betriebssystem auf die Kerne?', ru: 'Что операционная система распределяет по ядрам?', options: ['Die Threads', 'Die Dateien', 'Die Befehle'], answer: 'Die Threads' },
        { q: 'Womit beendete Aylin den Prozess?', ru: 'Чем Айлин завершила процесс?', options: ['Mit dem Befehl kill', 'Mit dem Befehl top', 'Mit einem Neustart'], answer: 'Mit dem Befehl kill' },
      ],
      translate: [
        { de: 'Ein Prozess kann viele Threads haben.', ru: 'У процесса может быть много потоков.', wrongRu: ['У процесса может быть только один поток.', 'У процесса должно быть много потоков.'] },
        { de: 'Aylin hat den Prozess beendet.', ru: 'Айлин завершила процесс.', wrongRu: ['Айлин запустила процесс.', 'Тобиас завершил процесс.'] },
        { de: 'Der Prozess läuft mit hoher Priorität.', ru: 'Процесс работает с высоким приоритетом.', wrongRu: ['Процесс работает с низким приоритетом.', 'Процесс работал с высоким приоритетом.'] },
      ],
    },
    {
      lesson: 1, title: 'Speicher und Dateien',
      de: `Am nächsten Tag ging es in der Vorlesung um Speicherverwaltung. Die Professorin erklärte, dass jeder Prozess seinen eigenen virtuellen Speicher bekommt. Das Betriebssystem weist ihm Speicher zu, und wenn der Prozess endet, wird der Speicher wieder freigegeben. Ein Prozess darf nicht einfach den Speicher eines anderen Prozesses lesen.

Danach sprach sie über das Dateisystem. Dateien liegen in Verzeichnissen, und jede Datei hat einen Pfad, der zeigt, wo sie liegt. Außerdem hat jede Datei Berechtigungen: Sie bestimmen, wer die Datei lesen oder ändern darf.

In der Übung wollte Tobias eine Datei im Verzeichnis eines anderen Benutzers öffnen. Das System zeigte nur eine Fehlermeldung, weil er keine Berechtigung hatte. Aylin lachte: „Das ist kein Fehler, das ist Sicherheit!“`,
      ru: `На следующий день лекция была об управлении памятью. Профессор объяснила, что каждый процесс получает собственную виртуальную память. Операционная система выделяет ему память, а когда процесс завершается, память снова освобождается. Процесс не может просто так читать память другого процесса.

Потом она рассказала о файловой системе. Файлы лежат в каталогах, и у каждого файла есть путь, который показывает, где он находится. Кроме того, у каждого файла есть права доступа: они определяют, кто может читать или изменять файл.

На практическом занятии Тобиас хотел открыть файл в каталоге другого пользователя. Система показала только сообщение об ошибке, потому что у него не было прав. Айлин засмеялась: «Это не ошибка, это безопасность!»`,
      gloss: {
        tobias: 'Тобиас (имя)', aylin: 'Айлин (имя)', nächsten: 'следующий', tag: 'день', ging: 'шла речь (es ging um — речь шла о)', um: 'о (es ging um)', vorlesung: 'лекция', professorin: 'профессор (женщина)', erklärte: 'объяснила',
        eigenen: 'собственную', speicher: 'память', bekommt: 'получает', betriebssystem: 'операционная система', ihm: 'ему', endet: 'завершается', wird: '(Passiv) освобождается', darf: 'может, имеет право', einfach: 'просто',
        anderen: 'другого', prozesses: 'процесса', lesen: 'читать', danach: 'потом', sprach: 'говорила', über: 'о', dateien: 'файлы', liegen: 'лежат', verzeichnissen: 'каталогах', datei: 'файл',
        zeigt: 'показывает', wo: 'где', liegt: 'находится', außerdem: 'кроме того', berechtigungen: 'права доступа', bestimmen: 'определяют', wer: 'кто', ändern: 'изменять',
        übung: 'практическое занятие', wollte: 'хотел', benutzers: 'пользователя', öffnen: 'открыть', system: 'система', zeigte: 'показала', nur: 'только', fehlermeldung: 'сообщение об ошибке',
        lachte: 'засмеялась', fehler: 'ошибка', sicherheit: 'безопасность', eigenes: 'собственную', festplatte: 'жёсткий диск', passiert: 'происходит', bleibt: 'остаётся', reserviert: 'зарезервирован',
        kopiert: 'скопирован', eine: 'один, какой-то', groß: 'большой', wie: 'как', warum: 'почему', falsch: 'неправильный', leer: 'пустой', für: 'для, на',
      },
      questions: [
        { q: 'Was bekommt jeder Prozess?', ru: 'Что получает каждый процесс?', options: ['Seinen eigenen virtuellen Speicher', 'Ein eigenes Dateisystem', 'Eine eigene Festplatte'], answer: 'Seinen eigenen virtuellen Speicher' },
        { q: 'Was passiert mit dem Speicher, wenn der Prozess endet?', ru: 'Что происходит с памятью, когда процесс завершается?', options: ['Er wird wieder freigegeben.', 'Er bleibt für den Prozess reserviert.', 'Er wird auf die Festplatte kopiert.'], answer: 'Er wird wieder freigegeben.' },
        { q: 'Was bestimmen Berechtigungen?', ru: 'Что определяют права доступа?', options: ['Wer eine Datei lesen oder ändern darf', 'Wo eine Datei liegt', 'Wie groß eine Datei ist'], answer: 'Wer eine Datei lesen oder ändern darf' },
        { q: 'Warum zeigte das System eine Fehlermeldung?', ru: 'Почему система показала сообщение об ошибке?', options: ['Tobias hatte keine Berechtigung.', 'Der Pfad war falsch.', 'Die Datei war leer.'], answer: 'Tobias hatte keine Berechtigung.' },
      ],
      translate: [
        { de: 'Das Betriebssystem weist dem Prozess Speicher zu.', ru: 'Операционная система выделяет процессу память.', wrongRu: ['Операционная система освобождает память процесса.', 'Процесс выделяет операционной системе память.'] },
        { de: 'Jede Datei hat einen Pfad.', ru: 'У каждого файла есть путь.', wrongRu: ['У каждого каталога есть путь.', 'У каждого файла есть права доступа.'] },
        { de: 'Tobias hatte keine Berechtigung für die Datei.', ru: 'У Тобиаса не было прав на этот файл.', wrongRu: ['У Тобиаса были права на этот файл.', 'У Тобиаса нет прав на этот файл.'] },
      ],
    },
  ],
};
