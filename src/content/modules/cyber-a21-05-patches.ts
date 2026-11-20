import type { Module } from '../types.ts';

// A2.1 cyber: security updates and patches (lesson 0), maintenance and patch planning (lesson 1).

export const module: Module = {
  id: 'cyber-a21-05-patches', sphere: 'cyber', level: 'A2.1',
  title: 'Updates und Patches', subtitle: 'Патч, устаревшая система, обновление безопасности: почему обновляться нужно вовремя.',
  words: [
    { id: 'cyb-a21-05-patch', icon: 'Bandage', imageQuery: 'fabric patch', de: 'Patch', pos: 'noun', article: 'der', plural: 'Patches', ru: 'патч, исправление', note: 'Произносится по-английски: «пэтч».', collocation: { de: 'einen Patch einspielen', ru: 'установить патч', accept: ['den Patch einspielen', 'einen Patch installieren', 'den Patch installieren'] }, example: { de: 'Der Patch schließt die Sicherheitslücke.', ru: 'Патч закрывает брешь в безопасности.', cloze: 'Patch' } },
    { id: 'cyb-a21-05-veraltet', icon: 'Hourglass', de: 'veraltet', pos: 'adj', ru: 'устаревший', collocation: { de: 'veraltete Software', ru: 'устаревшее ПО', accept: ['eine veraltete Software'] }, example: { de: 'Die Software auf dem Laptop ist veraltet.', ru: 'ПО на ноутбуке устарело.', cloze: 'veraltet' } },
    { id: 'cyb-a21-05-hersteller', icon: 'Factory', imageQuery: 'factory', de: 'Hersteller', pos: 'noun', article: 'der', plural: 'Hersteller', ru: 'производитель', note: 'От herstellen — производить. Женский род: die Herstellerin.', example: { de: 'Der Hersteller schickt jeden Monat Updates.', ru: 'Производитель присылает обновления каждый месяц.', cloze: 'Hersteller' } },
    { id: 'cyb-a21-05-sicherheitsupdate', icon: 'ShieldPlus', de: 'Sicherheitsupdate', pos: 'noun', article: 'das', plural: 'Sicherheitsupdates', ru: 'обновление безопасности', parts: ['Sicherheits', 'update'], note: 'Sicherheit + s + Update («апдейт»).', collocation: { de: 'ein Sicherheitsupdate installieren', ru: 'установить обновление безопасности', accept: ['das Sicherheitsupdate installieren'] }, example: { de: 'Heute kommt ein wichtiges Sicherheitsupdate.', ru: 'Сегодня выходит важное обновление безопасности.', cloze: 'Sicherheitsupdate' } },
    { id: 'cyb-a21-05-aktualisieren', icon: 'RotateCw', de: 'aktualisieren', pos: 'verb', ru: 'обновлять', forms: 'er aktualisiert · hat aktualisiert', note: '+ Akk. Глаголы на -ieren образуют Perfekt без ge-.', collocation: { de: 'die Software aktualisieren', ru: 'обновить ПО', accept: ['Software aktualisieren'] }, example: { de: 'Wir aktualisieren heute alle Laptops.', ru: 'Сегодня мы обновляем все ноутбуки.', cloze: 'aktualisieren' } },
    { id: 'cyb-a21-05-einspielen', icon: 'HardDriveDownload', de: 'einspielen', pos: 'verb', ru: 'устанавливать (обновление, патч)', forms: 'er spielt ein · hat eingespielt', note: 'Отделяемая приставка: er spielt den Patch ein. Профессиональное слово админов.', example: { de: 'Der Admin spielt den Patch am Abend ein.', ru: 'Админ устанавливает патч вечером.', cloze: 'spielt' } },
    { id: 'cyb-a21-05-treiber', icon: 'Cpu', imageQuery: 'device driver', de: 'Treiber', pos: 'noun', article: 'der', plural: 'Treiber', ru: 'драйвер', note: 'Также «погонщик» (от treiben — гнать). Der Druckertreiber — драйвер принтера.', collocation: { de: 'den Treiber aktualisieren', ru: 'обновить драйвер', accept: ['einen Treiber aktualisieren'] }, example: { de: 'Der Drucker braucht einen neuen Treiber.', ru: 'Принтеру нужен новый драйвер.', cloze: 'Treiber' } },
    { id: 'cyb-a21-05-veroeffentlichen', icon: 'Megaphone', de: 'veröffentlichen', pos: 'verb', ru: 'публиковать, выпускать', forms: 'er veröffentlicht · hat veröffentlicht', note: 'Неотделяемая приставка ver-: Perfekt без ge-.', collocation: { de: 'ein Update veröffentlichen', ru: 'выпустить обновление', accept: ['das Update veröffentlichen'] }, example: { de: 'Die Firma veröffentlicht morgen eine neue Version.', ru: 'Фирма завтра выпускает новую версию.', cloze: 'veröffentlicht' } },

    { id: 'cyb-a21-05-wartung', icon: 'Wrench', de: 'Wartung', pos: 'noun', article: 'die', plural: 'Wartungen', ru: 'техническое обслуживание', imageQuery: 'server maintenance', note: 'От warten — обслуживать (технику).', collocation: { de: 'eine Wartung planen', ru: 'запланировать техобслуживание', accept: ['die Wartung planen'] }, example: { de: 'Während der Wartung ist der Server offline.', ru: 'Во время техобслуживания сервер недоступен.', cloze: 'Wartung' } },
    { id: 'cyb-a21-05-fehlerbehebung', icon: 'BugOff', de: 'Fehlerbehebung', pos: 'noun', article: 'die', plural: 'Fehlerbehebungen', ru: 'исправление ошибок', parts: ['Fehler', 'behebung'], note: 'Fehler + Behebung (от beheben).', example: { de: 'Das Update enthält eine wichtige Fehlerbehebung.', ru: 'Обновление содержит важное исправление ошибки.', cloze: 'Fehlerbehebung' } },
    { id: 'cyb-a21-05-beheben', icon: 'Hammer', de: 'beheben', pos: 'verb', ru: 'устранять, исправлять', forms: 'er behebt · hat behoben', note: 'Неотделяемая приставка be-; + Akk.', collocation: { de: 'einen Fehler beheben', ru: 'исправить ошибку', accept: ['den Fehler beheben', 'ein Problem beheben'] }, example: { de: 'Der Patch behebt einen gefährlichen Fehler.', ru: 'Патч устраняет опасную ошибку.', cloze: 'behebt' } },
    { id: 'cyb-a21-05-kritisch', icon: 'AlarmClock', de: 'kritisch', pos: 'adj', ru: 'критический, очень опасный', note: 'Также «критичный, придирчивый» (о человеке).', collocation: { de: 'eine kritische Lücke', ru: 'критическая уязвимость', accept: ['eine kritische Sicherheitslücke'] }, example: { de: 'Diese Sicherheitslücke ist kritisch.', ru: 'Эта брешь в безопасности критическая.', cloze: 'kritisch' } },
    { id: 'cyb-a21-05-verschieben', icon: 'CalendarClock', de: 'verschieben', pos: 'verb', ru: 'переносить, откладывать', forms: 'er verschiebt · hat verschoben', note: 'verschieben auf + Akk: auf Montag verschieben.', collocation: { de: 'auf morgen verschieben', ru: 'перенести на завтра', accept: ['auf Montag verschieben'] }, example: { de: 'Wir verschieben das Update auf Montag.', ru: 'Мы переносим обновление на понедельник.', cloze: 'verschieben' } },
    { id: 'cyb-a21-05-supportende', icon: 'CalendarX', de: 'Supportende', pos: 'noun', article: 'das', ru: 'окончание поддержки', parts: ['Support', 'ende'], note: 'После Supportende производитель больше не выпускает патчи.', example: { de: 'Nach dem Supportende gibt es keine Patches mehr.', ru: 'После окончания поддержки патчей больше нет.', cloze: 'Supportende' } },
    { id: 'cyb-a21-05-kompatibel', icon: 'Puzzle', de: 'kompatibel', pos: 'adj', ru: 'совместимый', note: 'kompatibel mit + Dat.', collocation: { de: 'mit dem System kompatibel', ru: 'совместимый с системой' }, example: { de: 'Die App ist nicht mit dem Handy kompatibel.', ru: 'Приложение несовместимо с телефоном.', cloze: 'kompatibel' } },
    { id: 'cyb-a21-05-rueckgaengig-machen', icon: 'Undo2', de: 'rückgängig machen', pos: 'phrase', ru: 'отменить, откатить', note: '+ Akk: etwas rückgängig machen. Кнопка «Rückgängig» — «Отменить».', example: { de: 'Kannst du das Update rückgängig machen?', ru: 'Можешь откатить обновление?', cloze: 'rückgängig machen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Patch für das Labor',
      de: `Mia studiert Elektrotechnik an der TU Wien und hilft zweimal pro Woche im Labor. Am Dienstag zeigt ihr der Techniker Herr Huber eine Liste. Auf vielen Computern ist der Treiber für die Grafikkarte veraltet.

„Der Hersteller hat gestern ein Sicherheitsupdate für den Treiber veröffentlicht“, erklärt Herr Huber. „Es schließt eine gefährliche Lücke. Wir müssen den Patch heute noch einspielen.“ Mia fragt, warum das so eilig ist. Er antwortet, dass Angreifer veraltete Systeme oft schon nach wenigen Tagen angreifen.

Zuerst aktualisieren sie den Computer von Herrn Huber. Dann spielt Mia den Patch auf den anderen Geräten ein. Das dauert drei Stunden. Am Abend sind alle Computer aktuell, und Herr Huber ist zufrieden.`,
      ru: `Мия изучает электротехнику в TU Wien и два раза в неделю помогает в лаборатории. Во вторник техник господин Хубер показывает ей список. На многих компьютерах устарел драйвер видеокарты.

«Производитель вчера выпустил обновление безопасности для драйвера, — объясняет господин Хубер. — Оно закрывает опасную брешь. Мы должны установить патч ещё сегодня». Мия спрашивает, почему это так срочно. Он отвечает, что злоумышленники часто атакуют устаревшие системы уже через несколько дней.

Сначала они обновляют компьютер господина Хубера. Потом Мия устанавливает патч на остальные устройства. Это занимает три часа. К вечеру все компьютеры обновлены, и господин Хубер доволен.`,
      gloss: {
        mia: 'Мия (имя)', huber: 'Хубер (фамилия)', elektrotechnik: 'электротехника', tu: 'TU — Технический университет', wien: 'Вена',
        zweimal: 'два раза', labor: 'лаборатория', dienstag: 'вторник', techniker: 'техник', liste: 'список', vielen: 'многих', computern: 'компьютерах',
        computer: 'компьютер, компьютеры', schließt: 'закрывает', gefährliche: 'опасную', lücke: 'брешь, дыра', eilig: 'срочный, спешный',
        veraltete: 'устаревшие', systeme: 'системы', wenigen: 'немногих, нескольких', tagen: 'днях (nach … Tagen — через … дней)', angreifen: 'атаковать, нападать',
        herrn: 'господина (Herr)', anderen: 'остальных, других', geräten: 'устройствах', dauert: 'длится, занимает', stunden: 'часа, часов', aktuell: 'актуальный, обновлённый', zufrieden: 'довольный',
        grafikkarte: 'видеокарта', browser: 'браузер', firewall: 'файрвол', urlaub: 'отпуск', kaputt: 'сломанный',
      },
      questions: [
        { q: 'Was ist auf vielen Computern veraltet?', ru: 'Что устарело на многих компьютерах?', options: ['Der Treiber für die Grafikkarte', 'Die Firewall', 'Der Browser'], answer: 'Der Treiber für die Grafikkarte' },
        { q: 'Wer hat das Sicherheitsupdate veröffentlicht?', ru: 'Кто выпустил обновление безопасности?', options: ['Der Hersteller', 'Herr Huber', 'Die TU Wien'], answer: 'Der Hersteller' },
        { q: 'Warum ist der Patch so eilig?', ru: 'Почему с патчем так спешат?', options: ['Weil Angreifer veraltete Systeme schnell angreifen.', 'Weil Mia am Abend nach Hause geht.', 'Weil der Hersteller morgen Urlaub hat.'], answer: 'Weil Angreifer veraltete Systeme schnell angreifen.' },
        { q: 'Wie sind die Computer am Abend?', ru: 'Какие компьютеры вечером?', options: ['Aktuell', 'Kaputt', 'Veraltet'], answer: 'Aktuell' },
      ],
      translate: [
        { de: 'Der Treiber auf diesem Computer ist veraltet.', ru: 'Драйвер на этом компьютере устарел.', wrongRu: ['Драйвер на этом компьютере новый.', 'Программа на этом компьютере устарела.', 'Драйвер на том компьютере устарел.'] },
        { de: 'Der Hersteller hat einen Patch veröffentlicht.', ru: 'Производитель выпустил патч.', wrongRu: ['Производитель выпустит патч.', 'Администратор выпустил патч.', 'Производитель не выпустил патч.'] },
        { de: 'Mia spielt das Sicherheitsupdate heute ein.', ru: 'Сегодня Мия устанавливает обновление безопасности.', wrongRu: ['Сегодня Мия удаляет обновление безопасности.', 'Завтра Мия устанавливает обновление безопасности.'] },
      ],
    },
    {
      lesson: 1, title: 'Wartung am Wochenende',
      de: `Herr Huber plant für Samstag eine Wartung im Rechenzentrum der Uni. Mia soll ihm dabei helfen. Ein neues Update für den Mailserver ist sehr wichtig, weil es einen kritischen Fehler behebt. Diese Fehlerbehebung ist für alle Studierenden wichtig.

Leider ist das Programm für die Raumplanung nicht mit dem Update kompatibel. Ein Kollege möchte die Wartung deshalb verschieben. Aber Herr Huber sagt: „Wir können sie nicht verschieben. Nächsten Monat ist sowieso das Supportende für die alte Version.“

Am Samstag installieren sie das Update. Danach startet der Mailserver nicht mehr. Mia bleibt ruhig: Sie macht das Update rückgängig, und der Server läuft wieder. Am Montag finden sie die Ursache und probieren es noch einmal.`,
      ru: `Господин Хубер планирует на субботу техобслуживание в вычислительном центре университета. Мия должна ему в этом помочь. Новое обновление для почтового сервера очень важно, потому что оно устраняет критическую ошибку. Это исправление важно для всех студентов.

К сожалению, программа для планирования аудиторий несовместима с обновлением. Поэтому один коллега хочет перенести техобслуживание. Но господин Хубер говорит: «Мы не можем его перенести. В следующем месяце у старой версии всё равно заканчивается поддержка».

В субботу они устанавливают обновление. После этого почтовый сервер больше не запускается. Мия сохраняет спокойствие: она откатывает обновление, и сервер снова работает. В понедельник они находят причину и пробуют ещё раз.`,
      gloss: {
        huber: 'Хубер (фамилия)', mia: 'Мия (имя)', plant: 'планирует', samstag: 'суббота', rechenzentrum: 'вычислительный центр, дата-центр', update: 'обновление',
        mailserver: 'почтовый сервер', kritischen: 'критическую', herrn: 'господина (Herr)', fehler: 'ошибку, ошибка', studierenden: 'студентов (Studierende)', programm: 'программа', raumplanung: 'планирование аудиторий',
        kollege: 'коллега', sowieso: 'всё равно, так или иначе', version: 'версия', installieren: 'устанавливают', startet: 'запускается', mehr: 'больше (nicht mehr — больше не)',
        ruhig: 'спокойный', server: 'сервер', läuft: 'работает (о технике)', ursache: 'причина', probieren: 'пробуют', einmal: 'раз (noch einmal — ещё раз)',
        freitag: 'пятница', langsam: 'медленный', studierende: 'студенты', behalten: 'сохранить, оставить', kaufen: 'купить', ruft: 'звонит (ruft … an)', neu: 'заново',
      },
      questions: [
        { q: 'Wann plant Herr Huber die Wartung?', ru: 'Когда господин Хубер планирует техобслуживание?', options: ['Am Samstag', 'Am Montag', 'Am Freitag'], answer: 'Am Samstag' },
        { q: 'Warum ist das Update so wichtig?', ru: 'Почему обновление так важно?', options: ['Weil es einen kritischen Fehler behebt.', 'Weil der Mailserver zu langsam ist.', 'Weil die Studierenden es wollen.'], answer: 'Weil es einen kritischen Fehler behebt.' },
        { q: 'Was möchte ein Kollege machen?', ru: 'Что хочет сделать один коллега?', options: ['Die Wartung verschieben', 'Die alte Version behalten', 'Ein neues Programm kaufen'], answer: 'Die Wartung verschieben' },
        { q: 'Was macht Mia, als der Mailserver nicht startet?', ru: 'Что делает Мия, когда почтовый сервер не запускается?', options: ['Sie macht das Update rückgängig.', 'Sie ruft Herrn Huber an.', 'Sie installiert die alte Version neu.'], answer: 'Sie macht das Update rückgängig.' },
      ],
      translate: [
        { de: 'Die Wartung ist am Samstag.', ru: 'Техобслуживание в субботу.', wrongRu: ['Техобслуживание в понедельник.', 'Обновление в субботу.'] },
        { de: 'Das Programm ist nicht mit dem Update kompatibel.', ru: 'Программа несовместима с обновлением.', wrongRu: ['Программа совместима с обновлением.', 'Сервер несовместим с обновлением.'] },
        { de: 'Wir können die Wartung nicht verschieben.', ru: 'Мы не можем перенести техобслуживание.', wrongRu: ['Мы можем перенести техобслуживание.', 'Мы не можем отменить техобслуживание.', 'Они не могут перенести техобслуживание.'] },
      ],
    },
  ],
};
