import type { Module } from '../types.ts';

// A2.1 cyber: privacy — consent, tracking, privacy policy (lesson 0), advertising, user data, surveillance (lesson 1).

export const module: Module = {
  id: 'cyber-a21-07-privatsphaere', sphere: 'cyber', level: 'A2.1',
  title: 'Privatsphäre', subtitle: 'Защита данных, согласие, трекинг: кто собирает твои данные и как сказать «нет».',
  words: [
    { id: 'cyb-a21-07-privatsphaere', icon: 'EyeOff', de: 'Privatsphäre', pos: 'noun', article: 'die', ru: 'частная жизнь, приватность', parts: ['Privat', 'sphäre'], collocation: { de: 'die Privatsphäre schützen', ru: 'защищать частную жизнь', accept: ['meine Privatsphäre schützen', 'seine Privatsphäre schützen'] }, example: { de: 'Im Internet ist die Privatsphäre besonders wichtig.', ru: 'В интернете приватность особенно важна.', cloze: 'Privatsphäre' } },
    { id: 'cyb-a21-07-datenschutz', icon: 'ShieldCheck', de: 'Datenschutz', pos: 'noun', article: 'der', ru: 'защита (персональных) данных', parts: ['Daten', 'schutz'], note: 'В Австрии за соблюдение отвечает die Datenschutzbehörde.', example: { de: 'Der Datenschutz gilt auch für Schulen.', ru: 'Защита данных касается и школ.', cloze: 'Datenschutz' } },
    { id: 'cyb-a21-07-einwilligung', icon: 'Handshake', de: 'Einwilligung', pos: 'noun', article: 'die', plural: 'Einwilligungen', ru: 'согласие', note: 'Einwilligung in + Akk. Синоним: die Zustimmung.', collocation: { de: 'die Einwilligung geben', ru: 'дать согласие', accept: ['seine Einwilligung geben', 'eine Einwilligung geben'] }, example: { de: 'Die App braucht deine Einwilligung.', ru: 'Приложению нужно твоё согласие.', cloze: 'Einwilligung' } },
    { id: 'cyb-a21-07-sammeln', icon: 'Magnet', de: 'sammeln', pos: 'verb', ru: 'собирать', forms: 'er sammelt · hat gesammelt', note: '+ Akk.', collocation: { de: 'Daten sammeln', ru: 'собирать данные', accept: ['die Daten sammeln'] }, example: { de: 'Viele Apps sammeln heimlich Daten.', ru: 'Многие приложения тайно собирают данные.', cloze: 'sammeln' } },
    { id: 'cyb-a21-07-tracking', icon: 'Radar', de: 'Tracking', pos: 'noun', article: 'das', ru: 'трекинг, отслеживание', note: 'Произносится по-английски: «трэкинг».', example: { de: 'Ich blockiere das Tracking im Browser.', ru: 'Я блокирую трекинг в браузере.', cloze: 'Tracking' } },
    { id: 'cyb-a21-07-datenschutzerklaerung', icon: 'ScrollText', de: 'Datenschutzerklärung', pos: 'noun', article: 'die', plural: 'Datenschutzerklärungen', ru: 'политика конфиденциальности', parts: ['Datenschutz', 'erklärung'], collocation: { de: 'die Datenschutzerklärung lesen', ru: 'прочитать политику конфиденциальности' }, example: { de: 'Kaum jemand liest die Datenschutzerklärung.', ru: 'Почти никто не читает политику конфиденциальности.', cloze: 'Datenschutzerklärung' } },
    { id: 'cyb-a21-07-zustimmen', icon: 'ThumbsUp', de: 'zustimmen', pos: 'verb', ru: 'соглашаться, давать согласие', forms: 'er stimmt zu · hat zugestimmt', note: '+ Dat: der Nutzung zustimmen. Отделяемая приставка.', example: { de: 'Ich stimme der Nutzung meiner Daten nicht zu.', ru: 'Я не даю согласия на использование моих данных.', cloze: 'stimme' } },
    { id: 'cyb-a21-07-widerrufen', icon: 'CircleX', de: 'widerrufen', pos: 'verb', ru: 'отзывать (согласие, разрешение)', forms: 'er widerruft · hat widerrufen', note: 'Неотделяемая приставка wider-; + Akk: die Einwilligung widerrufen.', collocation: { de: 'die Einwilligung widerrufen', ru: 'отозвать согласие', accept: ['seine Einwilligung widerrufen', 'meine Einwilligung widerrufen'] }, example: { de: 'Du kannst deine Einwilligung jederzeit widerrufen.', ru: 'Ты можешь в любой момент отозвать своё согласие.', cloze: 'widerrufen' } },

    { id: 'cyb-a21-07-werbung', icon: 'Megaphone', de: 'Werbung', pos: 'noun', article: 'die', plural: 'Werbungen', ru: 'реклама', note: 'Обычно без мн. ч.: viel Werbung.', collocation: { de: 'personalisierte Werbung', ru: 'персонализированная реклама' }, example: { de: 'Nach der Suche sehe ich überall Werbung für Schuhe.', ru: 'После поиска я везде вижу рекламу обуви.', cloze: 'Werbung' } },
    { id: 'cyb-a21-07-nutzerverhalten', icon: 'MousePointer2', de: 'Nutzerverhalten', pos: 'noun', article: 'das', ru: 'поведение пользователей', parts: ['Nutzer', 'verhalten'], example: { de: 'Die Firma analysiert das Nutzerverhalten.', ru: 'Фирма анализирует поведение пользователей.', cloze: 'Nutzerverhalten' } },
    { id: 'cyb-a21-07-verkaufen', icon: 'HandCoins', de: 'verkaufen', pos: 'verb', ru: 'продавать', forms: 'er verkauft · hat verkauft', note: '+ Akk; etwas an + Akk verkaufen — продать кому-то. Противоположность: kaufen.', collocation: { de: 'Daten verkaufen', ru: 'продавать данные', accept: ['die Daten verkaufen', 'Daten an Dritte verkaufen'] }, example: { de: 'Die App verkauft meine Daten an andere Firmen.', ru: 'Приложение продаёт мои данные другим фирмам.', cloze: 'verkauft' } },
    { id: 'cyb-a21-07-anbieter', icon: 'Building2', de: 'Anbieter', pos: 'noun', article: 'der', plural: 'Anbieter', ru: 'провайдер, поставщик (услуги)', note: 'Женский род: die Anbieterin. Der Internetanbieter — интернет-провайдер.', example: { de: 'Der Anbieter speichert alle Nachrichten.', ru: 'Провайдер хранит все сообщения.', cloze: 'Anbieter' } },
    { id: 'cyb-a21-07-tracker', icon: 'Radar', de: 'Tracker', pos: 'noun', article: 'der', plural: 'Tracker', ru: 'трекер (отслеживание)', example: { de: 'Viele Webseiten haben Tracker.', ru: 'На многих сайтах есть трекеры.', cloze: 'Tracker' } },
    { id: 'cyb-a21-07-deaktivieren', icon: 'ToggleLeft', de: 'deaktivieren', pos: 'verb', ru: 'отключать, деактивировать', forms: 'er deaktiviert · hat deaktiviert', note: '+ Akk. Противоположность: aktivieren. Perfekt без ge-.', collocation: { de: 'eine Funktion deaktivieren', ru: 'отключить функцию', accept: ['die Funktion deaktivieren'] }, example: { de: 'Ich deaktiviere die personalisierte Werbung.', ru: 'Я отключаю персонализированную рекламу.', cloze: 'deaktiviere' } },
    { id: 'cyb-a21-07-ueberwachung', icon: 'Cctv', de: 'Überwachung', pos: 'noun', article: 'die', plural: 'Überwachungen', ru: 'наблюдение, слежка', imageQuery: 'surveillance camera', example: { de: 'Viele Menschen haben Angst vor Überwachung.', ru: 'Многие люди боятся слежки.', cloze: 'Überwachung' } },
    { id: 'cyb-a21-07-auswerten', icon: 'ChartColumn', de: 'auswerten', pos: 'verb', ru: 'анализировать, обрабатывать (данные)', forms: 'er wertet aus · hat ausgewertet', note: 'Отделяемая приставка; + Akk: Daten auswerten.', example: { de: 'Das Programm wertet die Klicks aus.', ru: 'Программа анализирует клики.', cloze: 'wertet' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die neue Lern-App',
      de: `Nora geht in die Maturaklasse eines Gymnasiums in Wien und möchte nächstes Jahr an der TU studieren. Für Mathe lädt sie eine neue Lern-App herunter. Sofort erscheint ein langes Fenster: Die App möchte ihre Einwilligung für Tracking.

Ihr Bruder Felix studiert Informatik und schaut ihr über die Schulter. „Lies zuerst die Datenschutzerklärung“, sagt er. Dort steht, dass die App viele Daten sammelt, zum Beispiel ihre Kontakte.

Nora findet das komisch. „Warum braucht eine Mathe-App meine Kontakte?“ Felix erklärt: „Der Datenschutz in der EU ist streng. Ohne deine Einwilligung darf die App nicht alles speichern.“ Also sagt Nora Nein zum Tracking. Nur den Mitteilungen stimmt sie zu. „Wenn du deine Meinung änderst, kannst du die Einwilligung jederzeit widerrufen“, sagt Felix. Ihre Privatsphäre ist Nora wichtig.`,
      ru: `Нора учится в выпускном классе гимназии в Вене и в следующем году хочет поступить в TU. Для математики она скачивает новое учебное приложение. Сразу появляется длинное окно: приложение хочет её согласия на трекинг.

Её брат Феликс изучает информатику и смотрит ей через плечо. «Сначала прочитай политику конфиденциальности», — говорит он. Там написано, что приложение собирает много данных, например её контакты.

Норе это кажется странным. «Зачем приложению по математике мои контакты?» Феликс объясняет: «Защита данных в ЕС строгая. Без твоего согласия приложение не имеет права всё сохранять». Поэтому Нора говорит трекингу «нет». Она соглашается только на уведомления. «Если передумаешь, сможешь в любой момент отозвать согласие», — говорит Феликс. Приватность для Норы важна.`,
      gloss: {
        nora: 'Нора (имя)', felix: 'Феликс (имя)', maturaklasse: 'выпускной класс (Matura — австрийский аттестат)', gymnasiums: 'гимназии', wien: 'Вена', tu: 'TU — Технический университет',
        nächstes: 'следующий', mathe: 'математика', lädt: '(lädt … herunter) скачивает', herunter: '(herunterladen) приставка: скачать', 'lern-app': 'учебное приложение', app: 'приложение',
        erscheint: 'появляется', langes: 'длинное', fenster: 'окно', informatik: 'информатика', schaut: 'смотрит', schulter: 'плечо', lies: 'читай!', daten: 'данные', kontakte: 'контакты',
        'mathe-app': 'приложение по математике', eu: 'ЕС (Евросоюз)', streng: 'строгий', speichern: 'сохранять', mitteilungen: 'уведомлениям (Mitteilungen)',
        programmieren: 'программировать', arbeiten: 'работать', konto: 'аккаунт', aufgaben: 'задания', lehrerin: 'учительница', 'mathe-aufgaben': 'задания по математике', nein: 'нет («Nein sagen» — отказаться)', meinung: 'мнение', änderst: '(ты) меняешь (Meinung ändern — передумать)', jederzeit: 'в любой момент', wozu: 'к чему, чему', mutter: 'мама',
      },
      questions: [
        { q: 'Was möchte Nora nächstes Jahr machen?', ru: 'Что Нора хочет делать в следующем году?', options: ['An der TU studieren', 'Eine App programmieren', 'In der EU arbeiten'], answer: 'An der TU studieren' },
        { q: 'Was steht in der Datenschutzerklärung?', ru: 'Что написано в политике конфиденциальности?', options: ['Die App sammelt viele Daten.', 'Die App ist kostenlos.', 'Die App braucht kein Konto.'], answer: 'Die App sammelt viele Daten.' },
        { q: 'Wozu sagt Nora Nein?', ru: 'Чему Нора говорит «нет»?', options: ['Das Tracking', 'Die Mitteilungen', 'Die Mathe-Aufgaben'], answer: 'Das Tracking' },
        { q: 'Wer erklärt Nora den Datenschutz?', ru: 'Кто объясняет Норе про защиту данных?', options: ['Ihr Bruder Felix', 'Ihre Lehrerin', 'Ihre Mutter'], answer: 'Ihr Bruder Felix' },
      ],
      translate: [
        { de: 'Die App sammelt viele Daten.', ru: 'Приложение собирает много данных.', wrongRu: ['Приложение удаляет много данных.', 'Приложение собирает мало данных.'] },
        { de: 'Nora widerruft ihre Einwilligung.', ru: 'Нора отзывает своё согласие.', wrongRu: ['Нора даёт своё согласие.', 'Феликс отзывает своё согласие.'] },
        { de: 'Lies zuerst die Datenschutzerklärung!', ru: 'Сначала прочитай политику конфиденциальности!', wrongRu: ['Сначала удали политику конфиденциальности!', 'Потом прочитай политику конфиденциальности!'] },
      ],
    },
    {
      lesson: 1, title: 'Wer verdient mit meinen Daten?',
      de: `Felix hält in seinem Seminar an der TU ein kurzes Referat über Werbung im Internet. Er erklärt seinen Kolleginnen und Kollegen: „Viele Apps sind kostenlos, weil der Anbieter mit unseren Daten Geld verdient.“

Ein Anbieter wertet das Nutzerverhalten aus: Welche Seiten besuchen wir? Wie lange schauen wir ein Video? Manche Firmen verkaufen diese Daten auch an andere Firmen. So entsteht personalisierte Werbung.

Eine Studentin fragt, ob man im Netz anonym sein kann. Felix antwortet: „Ganz anonym ist man fast nie. Aber du kannst viel tun. Deaktiviere die Werbe-ID auf deinem Handy und nutze einen anderen Browser.“ Am Ende sagt er: „Nicht jede Datensammlung ist Überwachung, aber wir sollten aufpassen.“`,
      ru: `Феликс делает на своём семинаре в TU короткий доклад о рекламе в интернете. Он объясняет однокурсницам и однокурсникам: «Многие приложения бесплатны, потому что провайдер зарабатывает на наших данных».

Провайдер анализирует поведение пользователей: какие сайты мы посещаем? Как долго мы смотрим видео? Некоторые фирмы ещё и продают эти данные другим фирмам. Так появляется персонализированная реклама.

Одна студентка спрашивает, можно ли быть анонимным в сети. Феликс отвечает: «Полностью анонимным почти никогда не бываешь. Но ты можешь многое сделать. Отключи рекламный идентификатор на телефоне и пользуйся другим браузером». В конце он говорит: «Не каждый сбор данных — это слежка, но нам стоит быть внимательными».`,
      gloss: {
        felix: 'Феликс (имя)', hält: 'держит (ein Referat halten — делать доклад)', seinem: 'своём', seminar: 'семинар', tu: 'TU — Технический университет', kurzes: 'короткий',
        referat: 'доклад', internet: 'интернет', kolleginnen: 'коллеги (женщины), однокурсницы', kollegen: 'коллеги, однокурсники', apps: 'приложения', unseren: 'наших',
        daten: 'данные, данных', geld: 'деньги', verdient: 'зарабатывает', seiten: 'сайты, страницы', besuchen: 'посещаем', schauen: 'смотрим', video: 'видео',
        firmen: 'фирмы, фирмам', entsteht: 'возникает', personalisierte: 'персонализированная', netz: 'сеть',
        sein: 'быть', 'werbe-id': 'рекламный идентификатор', handy: 'мобильный телефон', browser: 'браузер', datensammlung: 'сбор данных', sollten: 'следовало бы, стоит', aufpassen: 'быть внимательным', nutze: 'пользуйся!', verkaufen: 'продают',
        worüber: 'о чём', passwörter: 'пароли', handys: 'телефоны', uni: 'университет', bezahlt: 'оплачивает', sammeln: 'собирают', löschen: 'удаляют', schicken: 'отправляют', polizei: 'полиция',
        soll: 'должен, следует', kamera: 'камера', unsere: 'наши',
      },
      questions: [
        { q: 'Worüber hält Felix ein Referat?', ru: 'О чём Феликс делает доклад?', options: ['Über Werbung im Internet', 'Über Passwörter', 'Über alte Handys'], answer: 'Über Werbung im Internet' },
        { q: 'Warum sind viele Apps kostenlos?', ru: 'Почему многие приложения бесплатны?', options: ['Weil der Anbieter mit den Daten Geld verdient.', 'Weil die Uni sie bezahlt.', 'Weil sie keine Daten sammeln.'], answer: 'Weil der Anbieter mit den Daten Geld verdient.' },
        { q: 'Was machen manche Firmen mit den Daten?', ru: 'Что некоторые фирмы делают с данными?', options: ['Sie verkaufen sie an andere Firmen.', 'Sie löschen sie sofort.', 'Sie schicken sie an die Polizei.'], answer: 'Sie verkaufen sie an andere Firmen.' },
        { q: 'Was soll man auf dem Handy deaktivieren?', ru: 'Что стоит отключить на телефоне?', options: ['Die Werbe-ID', 'Den Browser', 'Die Kamera'], answer: 'Die Werbe-ID' },
      ],
      translate: [
        { de: 'Der Anbieter wertet unsere Daten aus.', ru: 'Провайдер анализирует наши данные.', wrongRu: ['Провайдер удаляет наши данные.', 'Провайдер анализирует ваши данные.'] },
        { de: 'Im Netz ist man fast nie anonym.', ru: 'В сети почти никогда не бываешь анонимным.', wrongRu: ['В сети всегда бываешь анонимным.', 'В сети почти никогда не бываешь в безопасности.'] },
        { de: 'Deaktiviere die Werbung auf deinem Handy!', ru: 'Отключи рекламу на своём телефоне!', wrongRu: ['Включи рекламу на своём телефоне!', 'Отключи рекламу на своём ноутбуке!'] },
      ],
    },
  ],
};
