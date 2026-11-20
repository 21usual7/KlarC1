import type { Module } from '../types.ts';

// A2.1 cyber 09: losing data without a backup (lesson 0) and restoring from a planned backup (lesson 1).

export const module: Module = {
  id: 'cyber-a21-09-backups', sphere: 'cyber', level: 'A2.1',
  title: 'Backups', subtitle: 'Копия, внешний диск, восстановление: как не потерять свои данные.',
  words: [
    { id: 'cyb-a21-09-kopie', icon: 'Copy', imageQuery: 'photocopier', de: 'Kopie', pos: 'noun', article: 'die', plural: 'Kopien', ru: 'копия', collocation: { de: 'eine Kopie machen', ru: 'сделать копию', accept: ['eine Kopie erstellen'] }, example: { de: 'Ich mache eine Kopie von meinen Fotos.', ru: 'Я делаю копию своих фотографий.', cloze: 'Kopie' } },
    { id: 'cyb-a21-09-sichern', icon: 'Save', de: 'sichern', pos: 'verb', ru: 'делать резервную копию, сохранять (надёжно)', forms: 'er sichert · hat gesichert', note: 'Daten sichern — сделать бэкап данных. Отсюда die Datensicherung.', collocation: { de: 'Daten sichern', ru: 'сделать бэкап данных', accept: ['die Daten sichern', 'meine Daten sichern'] }, example: { de: 'Sichere deine Daten jede Woche!', ru: 'Делай бэкап своих данных каждую неделю!', cloze: 'Sichere' } },
    { id: 'cyb-a21-09-datenverlust', icon: 'FileX', imageQuery: 'broken hard drive', de: 'Datenverlust', pos: 'noun', article: 'der', plural: 'Datenverluste', ru: 'потеря данных', parts: ['Daten', 'verlust'], note: 'der Verlust — потеря. Чаще в ед. ч.', example: { de: 'Ein Backup schützt vor Datenverlust.', ru: 'Резервная копия защищает от потери данных.', cloze: 'Datenverlust' } },
    { id: 'cyb-a21-09-festplatte', icon: 'HardDrive', imageQuery: 'external hard drive', de: 'Festplatte', pos: 'noun', article: 'die', plural: 'Festplatten', ru: 'жёсткий диск', parts: ['Fest', 'platte'], collocation: { de: 'eine externe Festplatte', ru: 'внешний жёсткий диск', accept: ['die externe Festplatte'] }, example: { de: 'Die Festplatte macht komische Geräusche.', ru: 'Жёсткий диск издаёт странные звуки.', cloze: 'Festplatte' } },
    { id: 'cyb-a21-09-extern', icon: 'Cable', de: 'extern', pos: 'adj', ru: 'внешний', note: 'Антоним: intern — внутренний.', example: { de: 'Ich speichere das Backup auf einem externen Laufwerk.', ru: 'Я сохраняю резервную копию на внешнем накопителе.', cloze: 'externen' } },
    { id: 'cyb-a21-09-speichermedium', icon: 'HardDrive', imageQuery: 'storage media', de: 'Speichermedium', pos: 'noun', article: 'das', plural: 'Speichermedien', ru: 'носитель данных', parts: ['Speicher', 'medium'], example: { de: 'Eine externe Festplatte ist ein gutes Speichermedium.', ru: 'Внешний жёсткий диск — хороший носитель данных.', cloze: 'Speichermedium' } },
    { id: 'cyb-a21-09-defekt', icon: 'ServerCrash', imageQuery: 'broken laptop', de: 'defekt', pos: 'adj', ru: 'неисправный, сломанный', note: 'Разговорный синоним: kaputt. Существительное: der Defekt — неисправность.', example: { de: 'Mein Laptop ist defekt und startet nicht.', ru: 'Мой ноутбук неисправен и не запускается.', cloze: 'defekt' } },
    { id: 'cyb-a21-09-aus-versehen', icon: 'MousePointerClick', de: 'aus Versehen', pos: 'phrase', ru: 'случайно, по ошибке', note: 'das Versehen — оплошность. Синоним: versehentlich.', example: { de: 'Ich habe die Datei aus Versehen gelöscht.', ru: 'Я случайно удалил файл.', cloze: 'aus Versehen' } },

    { id: 'cyb-a21-09-wiederherstellen', icon: 'ArchiveRestore', de: 'wiederherstellen', pos: 'verb', ru: 'восстанавливать', forms: 'er stellt wieder her · hat wiederhergestellt', note: 'Отделяемая приставка: er stellt … wieder her.', collocation: { de: 'Daten wiederherstellen', ru: 'восстановить данные', accept: ['die Daten wiederherstellen'] }, example: { de: 'Der Techniker stellt die Daten wieder her.', ru: 'Техник восстанавливает данные.', cloze: 'stellt' } },
    { id: 'cyb-a21-09-speicherort', icon: 'Archive', de: 'Speicherort', pos: 'noun', article: 'der', plural: 'Speicherorte', ru: 'место хранения', parts: ['Speicher', 'ort'], collocation: { de: 'ein sicherer Speicherort', ru: 'надёжное место хранения', accept: ['einen sicheren Speicherort'] }, example: { de: 'Wähle einen sicheren Speicherort für das Backup.', ru: 'Выбери надёжное место хранения для резервной копии.', cloze: 'Speicherort' } },
    { id: 'cyb-a21-09-cloud-speicher', icon: 'Cloud', imageQuery: 'data center servers', de: 'Cloud-Speicher', pos: 'noun', article: 'der', plural: 'Cloud-Speicher', ru: 'облачное хранилище', note: 'der Speicher — память, хранилище.', example: { de: 'Meine Fotos liegen auch im Cloud-Speicher.', ru: 'Мои фотографии лежат ещё и в облачном хранилище.', cloze: 'Cloud-Speicher' } },
    { id: 'cyb-a21-09-zeitplan', icon: 'CalendarClock', imageQuery: 'schedule calendar', de: 'Zeitplan', pos: 'noun', article: 'der', plural: 'Zeitpläne', ru: 'расписание, график', parts: ['Zeit', 'plan'], collocation: { de: 'nach Zeitplan', ru: 'по расписанию', accept: ['nach einem Zeitplan', 'nach dem Zeitplan'] }, example: { de: 'Das Backup läuft nach einem festen Zeitplan.', ru: 'Резервное копирование идёт по твёрдому расписанию.', cloze: 'Zeitplan' } },
    { id: 'cyb-a21-09-vollstaendig', icon: 'CircleCheckBig', de: 'vollständig', pos: 'adj', ru: 'полный, целиком', collocation: { de: 'ein vollständiges Backup', ru: 'полная резервная копия' }, example: { de: 'Ist das Backup vollständig?', ru: 'Резервная копия полная?', cloze: 'vollständig' } },
    { id: 'cyb-a21-09-ersetzen', icon: 'Replace', de: 'ersetzen', pos: 'verb', ru: 'заменять', forms: 'er ersetzt · hat ersetzt', note: 'etwas durch + Akk ersetzen: заменить что-то чем-то. Приставка er- неотделяемая.', example: { de: 'Wir ersetzen die alte Festplatte durch eine neue.', ru: 'Мы заменяем старый жёсткий диск новым.', cloze: 'ersetzen' } },
    { id: 'cyb-a21-09-aufbewahren', icon: 'Vault', de: 'aufbewahren', pos: 'verb', ru: 'хранить', forms: 'er bewahrt auf · hat aufbewahrt', note: 'Отделяемая приставка: er bewahrt … auf.', collocation: { de: 'sicher aufbewahren', ru: 'надёжно хранить' }, example: { de: 'Bewahre die Festplatte an einem anderen Ort auf.', ru: 'Храни жёсткий диск в другом месте.', cloze: 'Bewahre' } },
    { id: 'cyb-a21-09-ordner', icon: 'Folder', imageQuery: 'file folders', de: 'Ordner', pos: 'noun', article: 'der', plural: 'Ordner', ru: 'папка', example: { de: 'Alle Fotos sind in einem Ordner.', ru: 'Все фотографии в одной папке.', cloze: 'Ordner' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die Hausarbeit ist weg',
      de: `Felix studiert Architektur an der TU Wien. Seit Wochen schreibt er an einer wichtigen Hausarbeit. Die Datei ist nur auf seinem Laptop und auf einem alten USB-Stick.

Am Dienstag startet der Laptop nicht mehr. Die Festplatte ist defekt. Felix steckt den USB-Stick ein, aber er findet dort nur eine alte Kopie. Die neue Datei hat er letzte Woche aus Versehen gelöscht, weil er Platz gebraucht hat. Das ist ein großer Datenverlust!

Seine Mitbewohnerin Sara studiert Informatik. Sie sagt: „Du musst deine Daten regelmäßig sichern, am besten auf einer externen Festplatte und noch an einem zweiten Ort.“ Felix kauft sofort eine Festplatte. Aber er ist traurig, weil er viele Seiten noch einmal schreiben muss.`,
      ru: `Феликс изучает архитектуру в Венском техническом университете. Уже несколько недель он пишет важную курсовую работу. Файл есть только на его ноутбуке и на старой флешке.

Во вторник ноутбук больше не запускается. Жёсткий диск неисправен. Феликс вставляет флешку, но находит там только старую копию. Новый файл он на прошлой неделе случайно удалил, потому что ему нужно было место. Это большая потеря данных!

Его соседка по квартире Сара изучает информатику. Она говорит: «Ты должен регулярно делать бэкап своих данных, лучше всего на внешний жёсткий диск и ещё в другое место». Феликс сразу покупает жёсткий диск. Но ему грустно, потому что много страниц ему придётся писать заново.`,
      gloss: {
        felix: 'Феликс (имя)', sara: 'Сара (имя)', architektur: 'архитектура', tu: 'TU — технический университет', wien: 'Вена', wochen: 'недели', schreibt: 'пишет (schreiben an — работать над текстом)',
        wichtigen: 'важной', hausarbeit: 'курсовая работа, реферат', datei: 'файл', seinem: 'его', laptop: 'ноутбук', alten: 'старой', 'usb-stick': 'флешка',
        dienstag: 'вторник', startet: 'запускается', mehr: 'больше (nicht mehr — больше не)', festplatte: 'жёсткий диск', defekt: 'неисправен', steckt: 'вставляет (einstecken)', ein: 'приставка (steckt ein — вставляет); один', dort: 'там', kopie: 'копия',
        neue: 'новый', letzte: 'прошлой (letzte Woche — на прошлой неделе)', versehen: 'оплошность (aus Versehen — случайно)', gelöscht: 'удалил', platz: 'место', gebraucht: 'нуждался (hat gebraucht — было нужно)', großer: 'большая', datenverlust: 'потеря данных',
        mitbewohnerin: 'соседка по квартире', informatik: 'информатика', daten: 'данные', regelmäßig: 'регулярно', sichern: 'делать бэкап', besten: 'лучше всего (am besten)', externen: 'внешний', zweiten: 'второе, другое', ort: 'место',
        kauft: 'покупает', traurig: 'грустный', seiten: 'страницы', einmal: 'раз (noch einmal — ещё раз)',
        mathematik: 'математика', akku: 'аккумулятор', leer: 'пустой, разряжен', virus: 'вирус', version: 'версия', nichts: 'ничего', rät: 'советует', benutzen: 'пользоваться', neuen: 'новый',
      },
      questions: [
        { q: 'Was studiert Felix?', ru: 'Что изучает Феликс?', options: ['Architektur', 'Informatik', 'Mathematik'], answer: 'Architektur' },
        { q: 'Warum startet der Laptop nicht?', ru: 'Почему ноутбук не запускается?', options: ['Die Festplatte ist defekt.', 'Der Akku ist leer.', 'Er hat einen Virus.'], answer: 'Die Festplatte ist defekt.' },
        { q: 'Was findet Felix auf dem USB-Stick?', ru: 'Что Феликс находит на флешке?', options: ['Eine alte Kopie', 'Die neue Version', 'Nichts'], answer: 'Eine alte Kopie' },
        { q: 'Was rät Sara?', ru: 'Что советует Сара?', options: ['Die Daten regelmäßig sichern', 'Einen neuen Laptop kaufen', 'Nur einen USB-Stick benutzen'], answer: 'Die Daten regelmäßig sichern' },
      ],
      translate: [
        { de: 'Die Festplatte von meinem Laptop ist defekt.', ru: 'Жёсткий диск моего ноутбука неисправен.', wrongRu: ['Жёсткий диск моего ноутбука исправен.', 'Флешка моего ноутбука неисправна.'] },
        { de: 'Ich habe die Datei aus Versehen gelöscht.', ru: 'Я случайно удалил файл.', wrongRu: ['Я специально удалил файл.', 'Я случайно сохранил файл.', 'Он случайно удалил файл.'] },
        { de: 'Du musst deine Daten regelmäßig sichern.', ru: 'Ты должен регулярно делать бэкап своих данных.', wrongRu: ['Ты должен регулярно удалять свои данные.', 'Ты не должен регулярно делать бэкап своих данных.', 'Мы должны регулярно делать бэкап своих данных.'] },
      ],
    },
    {
      lesson: 1, title: 'Backup nach Plan',
      de: `Sara arbeitet neben dem Studium im IT-Support eines Instituts. Am Montag hat eine Schadsoftware alle Ordner auf dem Server verschlüsselt. Die Mitarbeiter sind nervös, weil sie nicht arbeiten können.

Aber Saras Chef bleibt ruhig. Das Institut macht jede Nacht ein Backup nach einem festen Zeitplan. Die Kopien bewahren sie an zwei Speicherorten auf: auf Festplatten in einem anderen Gebäude und in einem Cloud-Speicher.

Zuerst ersetzen sie die Festplatten im Server durch neue. Dann stellen sie die Daten vom Sonntag wieder her. Das Backup ist vollständig, nur die Arbeit von einem Tag fehlt. Sara lernt: Ein Backup ist nur gut, wenn man es auch wiederherstellen kann.`,
      ru: `Сара параллельно с учёбой работает в IT-поддержке одного института. В понедельник вредоносная программа зашифровала все папки на сервере. Сотрудники нервничают, потому что не могут работать.

Но начальник Сары остаётся спокойным. Институт каждую ночь делает резервную копию по твёрдому расписанию. Копии хранятся в двух местах: на жёстких дисках в другом здании и в облачном хранилище.

Сначала они заменяют жёсткие диски в сервере на новые. Потом восстанавливают данные за воскресенье. Резервная копия полная, не хватает только работы за один день. Сара делает вывод: резервная копия хороша, только если её можно и восстановить.`,
      gloss: {
        sara: 'Сара (имя)', saras: 'Сары', neben: 'наряду с, параллельно с', studium: 'учёба в вузе', 'it-support': 'IT-поддержка', instituts: 'института', institut: 'институт',
        schadsoftware: 'вредоносная программа', ordner: 'папки', server: 'сервер', verschlüsselt: 'зашифровала', mitarbeiter: 'сотрудники', nervös: 'нервные, нервничают',
        chef: 'начальник', ruhig: 'спокойный', nacht: 'ночь', backup: 'резервная копия', festen: 'твёрдому, постоянному', zeitplan: 'расписание', kopien: 'копии', bewahren: 'хранят (aufbewahren)', auf: 'на; приставка (bewahren … auf — хранят)',
        speicherorten: 'местах хранения', festplatten: 'жёсткие диски', gebäude: 'здание', 'cloud-speicher': 'облачное хранилище', ersetzen: 'заменяют', neue: 'новые',
        stellen: 'ставят (stellen … wieder her — восстанавливают)', daten: 'данные', sonntag: 'воскресенье', wieder: 'снова (stellen … wieder her — восстанавливают)', her: 'приставка (wieder her — восстанавливают)', vollständig: 'полная', arbeit: 'работа', wiederherstellen: 'восстановить',
        passiert: 'произошло', gelöscht: 'удалил', voll: 'полный, переполнен', einmal: 'один раз', bewahrt: 'хранит (aufbewahren)', 'usb-sticks': 'флешки', büro: 'офис', wiederherstellung: 'восстановление', läuft: 'идёт, запускается', speicherort: 'место хранения', anderen: 'другом',
      },
      questions: [
        { q: 'Was ist am Montag passiert?', ru: 'Что случилось в понедельник?', options: ['Eine Schadsoftware hat die Ordner verschlüsselt.', 'Ein Mitarbeiter hat alle Ordner gelöscht.', 'Der Cloud-Speicher war voll.'], answer: 'Eine Schadsoftware hat die Ordner verschlüsselt.' },
        { q: 'Wann macht das Institut ein Backup?', ru: 'Когда институт делает резервную копию?', options: ['Jede Nacht', 'Jeden Sonntag', 'Einmal im Monat'], answer: 'Jede Nacht' },
        { q: 'Wo bewahrt das Institut die Kopien auf?', ru: 'Где институт хранит копии?', options: ['In einem anderen Gebäude und in einem Cloud-Speicher', 'Nur auf dem Server', 'Auf USB-Sticks im Büro'], answer: 'In einem anderen Gebäude und in einem Cloud-Speicher' },
        { q: 'Was fehlt nach der Wiederherstellung?', ru: 'Чего не хватает после восстановления?', options: ['Die Arbeit von einem Tag', 'Alle Ordner', 'Die Arbeit von einer Woche'], answer: 'Die Arbeit von einem Tag' },
      ],
      translate: [
        { de: 'Das Backup läuft jede Nacht nach Zeitplan.', ru: 'Резервное копирование запускается каждую ночь по расписанию.', wrongRu: ['Резервное копирование запускается каждую неделю по расписанию.', 'Резервное копирование не запускается каждую ночь по расписанию.'] },
        { de: 'Wir stellen die Daten vom Sonntag wieder her.', ru: 'Мы восстанавливаем данные за воскресенье.', wrongRu: ['Мы удаляем данные за воскресенье.', 'Мы восстановили данные за воскресенье.', 'Мы восстанавливаем данные за понедельник.'] },
        { de: 'Die Kopien liegen an einem anderen Speicherort.', ru: 'Копии лежат в другом месте хранения.', wrongRu: ['Копии лежат в том же месте хранения.', 'Файлы лежат в другом месте хранения.'] },
      ],
    },
  ],
};
