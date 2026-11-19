import type { Module } from '../types.ts';

// A2.1 informatik 09: storing data in the cloud (lesson 0), sharing and restoring files (lesson 1).

export const module: Module = {
  id: 'informatik-a21-09-cloud', sphere: 'informatik', level: 'A2.1',
  title: 'Cloud', subtitle: 'Облако, аккаунт, синхронизация и резервные копии: где живут наши файлы.',
  words: [
    { id: 'inf-a21-09-cloud', icon: 'Cloud', de: 'Cloud', pos: 'noun', article: 'die', plural: 'Clouds', ru: 'облако (облачное хранилище)', note: 'Произносится как по-английски [klaʊt].', collocation: { de: 'in der Cloud speichern', ru: 'сохранять в облаке', accept: ['etwas in der Cloud speichern'] }, example: { de: 'Meine Fotos sind alle in der Cloud.', ru: 'Все мои фотографии в облаке.', cloze: 'Cloud' } },
    { id: 'inf-a21-09-dienst', icon: 'Building2', de: 'Dienst', pos: 'noun', article: 'der', plural: 'Dienste', ru: 'сервис, служба', note: 'Часто в композитах: der Cloud-Dienst, der Online-Dienst.', example: { de: 'Welchen Dienst nutzt du für deine Dateien?', ru: 'Каким сервисом ты пользуешься для своих файлов?', cloze: 'Dienst' } },
    { id: 'inf-a21-09-rechenzentrum', icon: 'ServerCog', imageQuery: 'data center server racks', de: 'Rechenzentrum', pos: 'noun', article: 'das', plural: 'Rechenzentren', ru: 'дата-центр, вычислительный центр', parts: ['Rechen', 'zentrum'], example: { de: 'Das Rechenzentrum steht in Frankfurt.', ru: 'Дата-центр находится во Франкфурте.', cloze: 'Rechenzentrum' } },
    { id: 'inf-a21-09-konto', icon: 'CircleUser', de: 'Konto', pos: 'noun', article: 'das', plural: 'Konten', ru: 'аккаунт, учётная запись; счёт', note: 'Синоним в IT: der Account. Мн. ч.: die Konten.', collocation: { de: 'ein Konto erstellen', ru: 'создать аккаунт', accept: ['ein Konto anlegen', 'ein Konto eröffnen'] }, example: { de: 'Ich habe ein neues Konto erstellt.', ru: 'Я создал новый аккаунт.', cloze: 'Konto' } },
    { id: 'inf-a21-09-speicherplatz', icon: 'HardDrive', de: 'Speicherplatz', pos: 'noun', article: 'der', plural: 'Speicherplätze', ru: 'место для хранения, свободная память', parts: ['Speicher', 'platz'], collocation: { de: 'genug Speicherplatz haben', ru: 'иметь достаточно места', accept: ['genügend Speicherplatz haben'] }, example: { de: 'Ich habe kaum noch freien Speicherplatz.', ru: 'У меня почти не осталось свободного места.', cloze: 'Speicherplatz' } },
    { id: 'inf-a21-09-kostenpflichtig', icon: 'CreditCard', de: 'kostenpflichtig', pos: 'adj', ru: 'платный', parts: ['kosten', 'pflichtig'], note: 'Антоним: kostenlos — бесплатный.', example: { de: 'Mehr Speicherplatz ist leider kostenpflichtig.', ru: 'Дополнительное место, к сожалению, платное.', cloze: 'kostenpflichtig' } },
    { id: 'inf-a21-09-abo', icon: 'CreditCard', de: 'Abo', pos: 'noun', article: 'das', plural: 'Abos', ru: 'подписка', note: 'Сокращение от das Abonnement.', example: { de: 'Das Abo kostet drei Euro im Monat.', ru: 'Подписка стоит три евро в месяц.', cloze: 'Abo' } },
    { id: 'inf-a21-09-synchronisieren', icon: 'RefreshCw', de: 'synchronisieren', pos: 'verb', ru: 'синхронизировать', forms: 'er synchronisiert · hat synchronisiert', collocation: { de: 'Dateien synchronisieren', ru: 'синхронизировать файлы', accept: ['die Dateien synchronisieren'] }, example: { de: 'Das Handy synchronisiert die Fotos automatisch.', ru: 'Телефон автоматически синхронизирует фотографии.', cloze: 'synchronisiert' } },

    { id: 'inf-a21-09-freigeben', icon: 'Share', de: 'freigeben', pos: 'verb', ru: 'открывать доступ (к файлу, папке), расшаривать', forms: 'er gibt frei · hat freigegeben', note: 'Отделяемая приставка: ich gebe den Ordner frei; etwas für + Akk freigeben.', collocation: { de: 'einen Ordner freigeben', ru: 'открыть доступ к папке', accept: ['den Ordner freigeben'] }, example: { de: 'Kannst du den Ordner für mich freigeben?', ru: 'Можешь открыть мне доступ к папке?', cloze: 'freigeben' } },
    { id: 'inf-a21-09-berechtigung', icon: 'LockOpen', de: 'Berechtigung', pos: 'noun', article: 'die', plural: 'Berechtigungen', ru: 'право доступа, разрешение', collocation: { de: 'keine Berechtigung haben', ru: 'не иметь прав доступа' }, example: { de: 'Du hast keine Berechtigung für diese Datei.', ru: 'У тебя нет прав доступа к этому файлу.', cloze: 'Berechtigung' } },
    { id: 'inf-a21-09-gleichzeitig', icon: 'Layers', de: 'gleichzeitig', pos: 'adv', ru: 'одновременно', example: { de: 'Wir bearbeiten das Dokument gleichzeitig.', ru: 'Мы редактируем документ одновременно.', cloze: 'gleichzeitig' } },
    { id: 'inf-a21-09-verfuegbar', icon: 'CircleCheck', de: 'verfügbar', pos: 'adj', ru: 'доступный, имеющийся (в наличии)', note: 'verfügbar sein — быть доступным для использования.', example: { de: 'Die Dateien sind auf allen Geräten verfügbar.', ru: 'Файлы доступны на всех устройствах.', cloze: 'verfügbar' } },
    { id: 'inf-a21-09-internetverbindung', icon: 'WifiOff', de: 'Internetverbindung', pos: 'noun', article: 'die', plural: 'Internetverbindungen', ru: 'подключение к интернету', parts: ['Internet', 'verbindung'], example: { de: 'Im Zug gibt es keine Internetverbindung.', ru: 'В поезде нет подключения к интернету.', cloze: 'Internetverbindung' } },
    { id: 'inf-a21-09-sicherungskopie', icon: 'DatabaseBackup', de: 'Sicherungskopie', pos: 'noun', article: 'die', plural: 'Sicherungskopien', ru: 'резервная копия', parts: ['Sicherungs', 'kopie'], note: 'Sicherung + s + Kopie; синоним: das Backup.', collocation: { de: 'eine Sicherungskopie machen', ru: 'сделать резервную копию', accept: ['eine Sicherungskopie erstellen'] }, example: { de: 'Mach jede Woche eine Sicherungskopie!', ru: 'Делай резервную копию каждую неделю!', cloze: 'Sicherungskopie' } },
    { id: 'inf-a21-09-wiederherstellen', icon: 'ArchiveRestore', de: 'wiederherstellen', pos: 'verb', ru: 'восстанавливать', forms: 'er stellt wieder her · hat wiederhergestellt', note: 'Отделяемая приставка wieder-her-: ich stelle die Datei wieder her.', example: { de: 'Kann man gelöschte Dateien wiederherstellen?', ru: 'Можно ли восстановить удалённые файлы?', cloze: 'wiederherstellen' } },
    { id: 'inf-a21-09-datenschutz', icon: 'ShieldCheck', de: 'Datenschutz', pos: 'noun', article: 'der', ru: 'защита (персональных) данных', parts: ['Daten', 'schutz'], note: 'Без мн. ч.', example: { de: 'Beim Datenschutz ist die EU sehr streng.', ru: 'В вопросах защиты данных ЕС очень строг.', cloze: 'Datenschutz' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Kein Platz mehr',
      de: `Felix studiert im zweiten Semester an der TU Wien. Er macht viele Fotos und speichert alle Unterlagen für die Uni in der Cloud. Aber heute bekommt er eine Nachricht: „Ihr Speicherplatz ist fast voll.“

Felix will nichts bezahlen, aber bei seinem Dienst ist mehr Speicherplatz kostenpflichtig. Seine Freundin Clara erklärt ihm, dass die TU Wien für alle Studierenden eine eigene Cloud hat. Die Daten liegen in einem Rechenzentrum in Wien und nicht in Amerika.

Felix meldet sich mit seinem Konto der Uni an. Dann installiert er die App auf dem Laptop und auf dem Handy. Jetzt synchronisiert die App seine Dateien automatisch. Felix freut sich, weil er überall Zugriff auf seine Unterlagen hat.`,
      ru: `Феликс учится на втором семестре в Венском техническом университете. Он делает много фотографий и хранит все материалы для университета в облаке. Но сегодня он получает сообщение: «Ваше хранилище почти заполнено».

Феликс не хочет ничего платить, но в его сервисе дополнительное место платное. Его подруга Клара объясняет ему, что у TU Wien есть собственное облако для всех студентов. Данные находятся в дата-центре в Вене, а не в Америке.

Феликс входит со своим университетским аккаунтом. Потом он устанавливает приложение на ноутбук и на телефон. Теперь приложение автоматически синхронизирует его файлы. Феликс радуется, потому что у него везде есть доступ к своим материалам.`,
      gloss: {
        felix: 'Феликс (имя)', clara: 'Клара (имя)', zweiten: 'втором', semester: 'семестр', tu: 'TU — Технический университет', wien: 'Вена', fotos: 'фотографии',
        speichert: 'хранит, сохраняет', unterlagen: 'материалы, документы', uni: 'университет', nachricht: 'сообщение', ihr: 'Ваш', fast: 'почти', voll: 'полный, заполнен',
        nichts: 'ничего', bezahlen: 'платить', freundin: 'подруга', erklärt: 'объясняет', studierenden: 'студентов', eigene: 'собственное', daten: 'данные', liegen: 'лежат, находятся',
        amerika: 'Америка', meldet: 'входит (sich anmelden)', an: '(sich anmelden) приставка; у, на', installiert: 'устанавливает', app: 'приложение', laptop: 'ноутбук', handy: 'мобильный телефон',
        dateien: 'файлы', automatisch: 'автоматически', freut: 'радуется (sich freuen)', überall: 'везде', bekommt: 'получает',
        gesperrt: 'заблокирован', update: 'обновление', braucht: 'нужно', kaufen: 'купить', erzählt: 'рассказывает', professor: 'профессор', löscht: 'удаляет', alte: 'старые', neue: 'новые', macht: 'делает',
      },
      questions: [
        { q: 'Warum bekommt Felix eine Nachricht?', ru: 'Почему Феликс получает сообщение?', options: ['Weil sein Speicherplatz fast voll ist.', 'Weil sein Konto gesperrt ist.', 'Weil die App ein Update braucht.'], answer: 'Weil sein Speicherplatz fast voll ist.' },
        { q: 'Wo liegen die Daten der Cloud der TU Wien?', ru: 'Где находятся данные облака TU Wien?', options: ['In einem Rechenzentrum in Wien', 'In einem Rechenzentrum in Amerika', 'Auf dem Laptop von Felix'], answer: 'In einem Rechenzentrum in Wien' },
        { q: 'Wer erzählt Felix von der Cloud der Uni?', ru: 'Кто рассказывает Феликсу об облаке университета?', options: ['Clara, seine Freundin', 'Sein Professor', 'Sein Dienst'], answer: 'Clara, seine Freundin' },
        { q: 'Was macht die App jetzt automatisch?', ru: 'Что приложение теперь делает автоматически?', options: ['Sie synchronisiert seine Dateien.', 'Sie löscht alte Fotos.', 'Sie macht neue Fotos.'], answer: 'Sie synchronisiert seine Dateien.' },
      ],
      translate: [
        { de: 'Mehr Speicherplatz ist leider kostenpflichtig.', ru: 'Дополнительное место, к сожалению, платное.', wrongRu: ['Дополнительное место, к счастью, бесплатное.', 'Дополнительный аккаунт, к сожалению, платный.'] },
        { de: 'Die Daten liegen in einem Rechenzentrum in Wien.', ru: 'Данные находятся в дата-центре в Вене.', wrongRu: ['Данные находятся на сервере в Америке.', 'Данные находились в дата-центре в Вене.', 'Данные не находятся в дата-центре в Вене.'] },
        { de: 'Er hat überall Zugriff auf seine Dateien.', ru: 'У него везде есть доступ к своим файлам.', wrongRu: ['У него нигде нет доступа к своим файлам.', 'У неё везде есть доступ к своим файлам.', 'У него везде есть доступ к своим фотографиям.'] },
      ],
    },
    {
      lesson: 1, title: 'Der Bericht ist weg',
      de: `Für eine Übung schreiben Felix und Clara zusammen einen Bericht. Felix gibt den Ordner in der Cloud für Clara frei. Sie bekommt die Berechtigung, die Dateien zu bearbeiten. So können beide gleichzeitig am Bericht arbeiten.

Am Abend sitzt Clara im Zug nach Linz. Dort gibt es keine Internetverbindung, aber sie kann offline weiterschreiben. In Linz passiert ein Fehler: Clara löscht den Bericht aus Versehen.

Felix bleibt ruhig, weil die Cloud alte Versionen einen Monat lang speichert. Er kann die Datei schnell wiederherstellen, und nach einer Minute ist der Bericht wieder verfügbar. Trotzdem macht er jetzt jeden Sonntag eine Sicherungskopie. Und wegen des Datenschutzes ist er froh, dass die Server in Wien stehen.`,
      ru: `Для практического занятия Феликс и Клара вместе пишут отчёт. Феликс открывает Кларе доступ к папке в облаке. Она получает право редактировать файлы. Так оба могут одновременно работать над отчётом.

Вечером Клара сидит в поезде в Линц. Там нет подключения к интернету, но она может продолжать писать офлайн. В Линце случается ошибка: Клара по ошибке удаляет отчёт.

Феликс остаётся спокойным, потому что облако хранит старые версии в течение месяца. Он может быстро восстановить файл, и через минуту отчёт снова доступен. Тем не менее теперь он каждое воскресенье делает резервную копию. А из-за защиты данных он рад, что серверы стоят в Вене.`,
      gloss: {
        felix: 'Феликс (имя)', clara: 'Клара (имя)', übung: 'практическое занятие', schreiben: 'пишут', zusammen: 'вместе', bericht: 'отчёт', gibt: 'даёт; (es gibt) есть; (freigeben) открывает доступ',
        frei: '(freigeben) приставка; свободный', ordner: 'папка', bekommt: 'получает', dateien: 'файлы', bearbeiten: 'редактировать', beide: 'оба', arbeiten: 'работать',
        abend: 'вечер', sitzt: 'сидит', zug: 'поезд', linz: 'Линц (город в Австрии)', offline: 'офлайн, без подключения', weiterschreiben: 'писать дальше', passiert: 'случается', fehler: 'ошибка',
        löscht: 'удаляет', versehen: 'оплошность (aus Versehen — по ошибке, нечаянно)', bleibt: 'остаётся', ruhig: 'спокойным', alte: 'старые', versionen: 'версии', monat: 'месяц', lang: 'долго (einen Monat lang — в течение месяца)',
        speichert: 'хранит', datei: 'файл', schnell: 'быстро', minute: 'минута', trotzdem: 'тем не менее', sonntag: 'воскресенье', wegen: 'из-за', datenschutzes: 'защиты данных (род. п.)',
        froh: 'рад', server: 'серверы', wien: 'Вена', stehen: 'стоят', akku: 'аккумулятор', leer: 'разряжен, пустой', woche: 'неделя', jahr: 'год', neuen: 'новый (вин. п.)', verloren: 'потеряла (verlieren)',
      },
      questions: [
        { q: 'Was macht Felix mit dem Ordner?', ru: 'Что Феликс делает с папкой?', options: ['Er gibt ihn für Clara frei.', 'Er löscht ihn aus Versehen.', 'Er speichert ihn im Zug.'], answer: 'Er gibt ihn für Clara frei.' },
        { q: 'Warum schreibt Clara im Zug offline?', ru: 'Почему Клара пишет в поезде офлайн?', options: ['Weil es dort keine Internetverbindung gibt.', 'Weil ihr Akku leer ist.', 'Weil sie keine Berechtigung hat.'], answer: 'Weil es dort keine Internetverbindung gibt.' },
        { q: 'Wie lange speichert die Cloud alte Versionen?', ru: 'Как долго облако хранит старые версии?', options: ['Einen Monat lang', 'Eine Woche lang', 'Ein Jahr lang'], answer: 'Einen Monat lang' },
        { q: 'Was macht Felix jetzt jeden Sonntag?', ru: 'Что Феликс теперь делает каждое воскресенье?', options: ['Eine Sicherungskopie', 'Eine Übung', 'Einen neuen Bericht'], answer: 'Eine Sicherungskopie' },
      ],
      translate: [
        { de: 'Beide können gleichzeitig am Bericht arbeiten.', ru: 'Оба могут одновременно работать над отчётом.', wrongRu: ['Оба могут по очереди работать над отчётом.', 'Оба должны одновременно работать над отчётом.', 'Никто не может работать над отчётом.'] },
        { de: 'Clara hat keine Berechtigung für diese Datei.', ru: 'У Клары нет прав доступа к этому файлу.', wrongRu: ['У Клары есть права доступа к этому файлу.', 'У Клары нет копии этого файла.', 'У Феликса нет прав доступа к этому файлу.'] },
        { de: 'Er kann die Datei schnell wiederherstellen.', ru: 'Он может быстро восстановить файл.', wrongRu: ['Он может быстро удалить файл.', 'Он не может быстро восстановить файл.', 'Она может быстро восстановить файл.'] },
      ],
    },
  ],
};
