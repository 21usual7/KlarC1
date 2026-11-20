import type { Module } from '../types.ts';

// A1.2 cyber 05: installing updates (lesson 0) and waiting for a long system update (lesson 1).

export const module: Module = {
  id: 'cyber-a12-05-updates', sphere: 'cyber', level: 'A1.2',
  title: 'Updates', subtitle: 'Обновление, версия, перезагрузка: почему программы надо обновлять.',
  words: [
    { id: 'cyb-a12-05-update', icon: 'RefreshCcwDot', de: 'Update', pos: 'noun', article: 'das', plural: 'Updates', ru: 'обновление', note: 'Читается по-английски: «апдейт». Синоним: die Aktualisierung.', collocation: { de: 'ein Update installieren', ru: 'установить обновление', accept: ['das Update installieren'] }, example: { de: 'Für mein Handy gibt es ein Update.', ru: 'Для моего телефона есть обновление.', cloze: 'Update' } },
    { id: 'cyb-a12-05-installieren', icon: 'PackagePlus', de: 'installieren', pos: 'verb', ru: 'устанавливать (программу)', forms: 'er installiert · hat installiert', note: 'Глаголы на -ieren образуют Perfekt без ge-: hat installiert.', collocation: { de: 'eine App installieren', ru: 'установить приложение', accept: ['die App installieren'] }, example: { de: 'Ich installiere das Update heute Abend.', ru: 'Я установлю обновление сегодня вечером.', cloze: 'installiere' } },
    { id: 'cyb-a12-05-version', icon: 'Tag', de: 'Version', pos: 'noun', article: 'die', plural: 'Versionen', ru: 'версия', collocation: { de: 'die neue Version', ru: 'новая версия', accept: ['eine neue Version'] }, example: { de: 'Die neue Version ist schneller.', ru: 'Новая версия быстрее.', cloze: 'Version' } },
    { id: 'cyb-a12-05-automatisch', icon: 'Repeat', de: 'automatisch', pos: 'adj', ru: 'автоматический; автоматически', note: 'Как наречие — без окончания: Das geht automatisch.', example: { de: 'Mein Handy macht Updates automatisch.', ru: 'Мой телефон делает обновления автоматически.', cloze: 'automatisch' } },
    { id: 'cyb-a12-05-neu-starten', icon: 'RotateCcw', de: 'neu starten', pos: 'verb', ru: 'перезагружать, перезапускать', forms: 'er startet neu · hat neu gestartet', note: 'Пишется раздельно, neu стоит в конце: Ich starte den Computer neu.', collocation: { de: 'den Computer neu starten', ru: 'перезагрузить компьютер', accept: ['den Laptop neu starten'] }, example: { de: 'Starte den Computer jetzt neu!', ru: 'Перезагрузи компьютер сейчас!', cloze: 'Starte' } },
    { id: 'cyb-a12-05-herunterladen', icon: 'Download', de: 'herunterladen', pos: 'verb', ru: 'скачивать, загружать', forms: 'er lädt herunter · hat heruntergeladen', note: 'Отделяемая приставка: Ich lade … herunter. Разговорно: downloaden.', collocation: { de: 'ein Update herunterladen', ru: 'скачать обновление', accept: ['das Update herunterladen'] }, example: { de: 'Ich lade die neue Version herunter.', ru: 'Я скачиваю новую версию.', cloze: 'lade' } },
    { id: 'cyb-a12-05-aktuell', icon: 'CalendarCheck', de: 'aktuell', pos: 'adj', ru: 'актуальный, свежий (последней версии)', note: 'Значит «текущий, свежий», а не «важный».', example: { de: 'Die App ist jetzt wieder aktuell.', ru: 'Приложение теперь снова последней версии.', cloze: 'aktuell' } },
    { id: 'cyb-a12-05-speicher', icon: 'HardDrive', imageQuery: 'memory card', de: 'Speicher', pos: 'noun', article: 'der', plural: 'Speicher', ru: 'память (устройства)', example: { de: 'Für das Update ist nicht genug Speicher frei.', ru: 'Для обновления недостаточно свободной памяти.', cloze: 'Speicher' } },

    { id: 'cyb-a12-05-neustart', icon: 'RotateCcw', imageQuery: 'restart button', de: 'Neustart', pos: 'noun', article: 'der', plural: 'Neustarts', ru: 'перезапуск, перезагрузка', parts: ['Neu', 'start'], example: { de: 'Nach dem Update braucht das Handy einen Neustart.', ru: 'После обновления телефону нужна перезагрузка.', cloze: 'Neustart' } },
    { id: 'cyb-a12-05-dauern', icon: 'Hourglass', de: 'dauern', pos: 'verb', ru: 'длиться, занимать (время)', forms: 'er dauert · hat gedauert', note: 'Das dauert lange — это долго.', collocation: { de: 'lange dauern', ru: 'долго длиться', accept: ['sehr lange dauern'] }, example: { de: 'Das Update dauert sehr lange.', ru: 'Обновление идёт очень долго.', cloze: 'dauert' } },
    { id: 'cyb-a12-05-warten', icon: 'Clock', de: 'warten', pos: 'verb', ru: 'ждать', forms: 'er wartet · hat gewartet', note: 'warten auf + Akk: ждать чего-то / кого-то.', collocation: { de: 'auf das Update warten', ru: 'ждать обновление', accept: ['auf ein Update warten'] }, example: { de: 'Ich warte auf das neue Update.', ru: 'Я жду новое обновление.', cloze: 'warte' } },
    { id: 'cyb-a12-05-laptop', icon: 'Laptop', imageQuery: 'laptop computer', de: 'Laptop', pos: 'noun', article: 'der', plural: 'Laptops', ru: 'ноутбук', note: 'Можно и das Laptop; синоним: das Notebook.', example: { de: 'Mein Laptop ist schon sehr alt.', ru: 'Мой ноутбук уже очень старый.', cloze: 'Laptop' } },
    { id: 'cyb-a12-05-fertig', icon: 'CircleCheck', de: 'fertig', pos: 'adj', ru: 'готовый, законченный', note: 'Ich bin fertig — я закончил.', collocation: { de: 'fertig sein', ru: 'быть готовым, закончить' }, example: { de: 'Das Update ist endlich fertig.', ru: 'Обновление наконец готово.', cloze: 'fertig' } },
    { id: 'cyb-a12-05-akku', icon: 'BatteryLow', imageQuery: 'lithium-ion battery pack', de: 'Akku', pos: 'noun', article: 'der', plural: 'Akkus', ru: 'аккумулятор, батарея', note: 'Der Akku ist leer — батарея села.', collocation: { de: 'den Akku laden', ru: 'зарядить аккумулятор', accept: ['den Akku aufladen'] }, example: { de: 'Lade zuerst den Akku!', ru: 'Сначала заряди аккумулятор!', cloze: 'Akku' } },
    { id: 'cyb-a12-05-betriebssystem', icon: 'MonitorCog', de: 'Betriebssystem', pos: 'noun', article: 'das', plural: 'Betriebssysteme', ru: 'операционная система', parts: ['Betriebs', 'system'], note: 'Betrieb (работа) + s + System. Например: Windows, Android.', example: { de: 'Das Betriebssystem braucht ein Update.', ru: 'Операционной системе нужно обновление.', cloze: 'Betriebssystem' } },
    { id: 'cyb-a12-05-wichtig', icon: 'CircleAlert', de: 'wichtig', pos: 'adj', ru: 'важный', example: { de: 'Updates sind sehr wichtig für die Sicherheit.', ru: 'Обновления очень важны для безопасности.', cloze: 'wichtig' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Das Update am Morgen',
      de: `Mira geht in Wien in die Schule. Am Morgen sieht sie eine Nachricht auf ihrem Computer: „Ein Update ist da.“ Mira hat keine Zeit. Sie klickt auf „Später“.

Am Abend fragt sie ihren Bruder Felix. Felix sagt: „Die Version auf deinem Computer ist alt. Sie hat einen Fehler. Ein Hacker kann den Fehler nutzen. Die neue Version ist aktuell und sicher.“

Mira lädt das Update herunter und installiert es. Dann muss sie den Computer neu starten. Felix sagt: „Mach die Updates automatisch! Dann musst du nicht daran denken.“`,
      ru: `Мира ходит в школу в Вене. Утром она видит сообщение на своём компьютере: «Доступно обновление». У Миры нет времени. Она нажимает «Позже».

Вечером она спрашивает своего брата Феликса. Феликс говорит: «Версия на твоём компьютере старая. В ней есть ошибка. Хакер может использовать эту ошибку. Новая версия — свежая и безопасная».

Мира скачивает обновление и устанавливает его. Потом ей нужно перезагрузить компьютер. Феликс говорит: «Сделай обновления автоматическими! Тогда тебе не придётся о них думать».`,
      gloss: { mira: 'Мира (имя)', felix: 'Феликс (имя)', wien: 'Вена', computer: 'компьютер', da: 'здесь; (здесь) есть, доступно', daran: 'об этом', lösch: 'удали!', kauf: 'купи!', langsam: 'медленный', zu: 'слишком; к', nutzen: 'использовать' },
      questions: [
        { q: 'Was macht Mira am Morgen?', ru: 'Что Мира делает утром?', options: ['Sie klickt auf „Später“.', 'Sie installiert das Update.', 'Sie startet den Computer neu.'], answer: 'Sie klickt auf „Später“.' },
        { q: 'Warum ist die alte Version nicht sicher?', ru: 'Почему старая версия небезопасна?', options: ['Sie hat einen Fehler.', 'Sie ist zu langsam.', 'Sie ist automatisch.'], answer: 'Sie hat einen Fehler.' },
        { q: 'Was sagt Felix am Ende?', ru: 'Что Феликс говорит в конце?', options: ['Mach die Updates automatisch!', 'Lösch das Update!', 'Kauf einen neuen Computer!'], answer: 'Mach die Updates automatisch!' },
      ],
      translate: [
        { de: 'Das Update ist jetzt installiert.', ru: 'Обновление теперь установлено.', wrongRu: ['Обновление теперь скачано.', 'Обновление ещё не установлено.'] },
        { de: 'Ich muss den Computer neu starten.', ru: 'Мне нужно перезагрузить компьютер.', wrongRu: ['Мне нужно выключить компьютер.', 'Тебе нужно перезагрузить компьютер.'] },
        { de: 'Die alte Version hat einen Fehler.', ru: 'В старой версии есть ошибка.', wrongRu: ['В новой версии есть ошибка.', 'В старой версии нет ошибки.'] },
      ],
    },
    {
      lesson: 1, title: 'Ein langes Update',
      de: `Felix hat einen alten Laptop. Heute kommt ein großes Update für das Betriebssystem. Das Update ist wichtig, aber es dauert lange.

Zuerst ist der Akku fast leer. Felix holt das Kabel. Dann wartet er. Eine Stunde später ist das Update noch nicht fertig. Felix ist nicht froh. Er will ein Spiel spielen.

Endlich ist alles fertig. Felix öffnet die Einstellungen. Dort findet er „Automatische Updates“. Er klickt auf „Ein“. Jetzt kommen die Updates in der Nacht. Felix muss nicht mehr warten, und sein Laptop bleibt sicher.`,
      ru: `У Феликса старый ноутбук. Сегодня приходит большое обновление для операционной системы. Обновление важное, но оно идёт долго.

Сначала аккумулятор почти разряжен. Феликс берёт кабель. Потом он ждёт. Через час обновление всё ещё не готово. Феликс не рад. Он хочет поиграть в игру.

Наконец всё готово. Феликс открывает настройки. Там он находит «Автоматические обновления». Он нажимает «Вкл.». Теперь обновления приходят ночью. Феликсу больше не нужно ждать, и его ноутбук остаётся в безопасности.`,
      gloss: { felix: 'Феликс (имя)', alten: 'старый', langes: 'долгое', großes: 'большое', leer: 'пустой; (об аккумуляторе) разряжен', holt: 'берёт, приносит', kabel: 'кабель', spiel: 'игра', öffnet: 'открывает', automatische: 'автоматические', ein: 'один; (здесь, на кнопке) вкл.', nacht: 'ночь', anfang: 'начало', am: 'в, на (am Anfang — в начале)', mehr: 'больше (nicht mehr — больше не)', kaufen: 'покупать', holen: 'брать, приносить', später: 'позже (eine Stunde später — через час)' },
      questions: [
        { q: 'Was ist am Anfang fast leer?', ru: 'Что в начале почти разряжено?', options: ['Der Akku', 'Der Laptop', 'Das Kabel'], answer: 'Der Akku' },
        { q: 'Was will Felix machen?', ru: 'Что Феликс хочет делать?', options: ['Ein Spiel spielen', 'Ein Kabel kaufen', 'Einen Laptop holen'], answer: 'Ein Spiel spielen' },
        { q: 'Wo findet Felix „Automatische Updates“?', ru: 'Где Феликс находит «Автоматические обновления»?', options: ['In den Einstellungen', 'Im Akku', 'In der Nachricht'], answer: 'In den Einstellungen' },
        { q: 'Wann kommen die Updates jetzt?', ru: 'Когда теперь приходят обновления?', options: ['In der Nacht', 'Am Morgen', 'Am Abend'], answer: 'In der Nacht' },
      ],
      translate: [
        { de: 'Das Update dauert eine Stunde.', ru: 'Обновление длится час.', wrongRu: ['Обновление длится минуту.', 'Обновление длилось час.'] },
        { de: 'Der Akku ist fast leer.', ru: 'Аккумулятор почти разряжен.', wrongRu: ['Аккумулятор полностью заряжен.', 'Аккумулятор совсем разряжен.'] },
        { de: 'Felix öffnet die Einstellungen.', ru: 'Феликс открывает настройки.', wrongRu: ['Феликс закрывает настройки.', 'Феликс открывает обновления.'] },
      ],
    },
  ],
};
