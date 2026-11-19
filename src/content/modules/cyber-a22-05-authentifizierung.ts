import type { Module } from '../types.ts';

// A2.2 cyber 05: authentication (lesson 0) and authorization / roles (lesson 1).

export const module: Module = {
  id: 'cyber-a22-05-authentifizierung', sphere: 'cyber', level: 'A2.2',
  title: 'Authentifizierung', subtitle: 'Учётные данные, токен, роли и права: как система узнаёт, кто ты и что тебе можно.',
  words: [
    { id: 'cyb-a22-05-authentifizierung', icon: 'ShieldCheck', de: 'Authentifizierung', pos: 'noun', article: 'die', plural: 'Authentifizierungen', ru: 'аутентификация (проверка подлинности)', note: 'Проверка, кто ты. Не путать с Autorisierung — что тебе разрешено.', collocation: { de: 'die Authentifizierung schlägt fehl', ru: 'аутентификация не проходит', accept: ['Authentifizierung schlägt fehl'] }, example: { de: 'Die Authentifizierung dauert nur wenige Sekunden.', ru: 'Аутентификация длится всего несколько секунд.', cloze: 'Authentifizierung' } },
    { id: 'cyb-a22-05-anmeldedaten', icon: 'FileKey', de: 'Anmeldedaten', pos: 'noun', article: 'die', pluralOnly: true, ru: 'учётные данные (логин и пароль)', parts: ['Anmelde', 'daten'], note: 'Только мн. ч. Синоним: die Zugangsdaten.', collocation: { de: 'die Anmeldedaten eingeben', ru: 'ввести учётные данные', accept: ['Anmeldedaten eingeben', 'seine Anmeldedaten eingeben'] }, example: { de: 'Gib deine Anmeldedaten niemals am Telefon weiter!', ru: 'Никогда не сообщай свои учётные данные по телефону!', cloze: 'Anmeldedaten' } },
    { id: 'cyb-a22-05-token', icon: 'Ticket', de: 'Token', pos: 'noun', article: 'das', plural: 'Tokens', ru: 'токен', note: 'Цифровой «пропуск» после входа; также аппаратный ключ (Hardware-Token).', example: { de: 'Nach dem Login bekommt der Browser ein Token.', ru: 'После входа браузер получает токен.', cloze: 'Token' } },
    { id: 'cyb-a22-05-ueberpruefen', icon: 'SearchCheck', de: 'überprüfen', pos: 'verb', ru: 'проверять, перепроверять', forms: 'er überprüft · hat überprüft', note: 'Приставка über- здесь неотделяемая; + Akk.', collocation: { de: 'die Identität überprüfen', ru: 'проверить личность', accept: ['die Identität des Benutzers überprüfen'] }, example: { de: 'Der Server überprüft zuerst das Passwort.', ru: 'Сервер сначала проверяет пароль.', cloze: 'überprüft' } },
    { id: 'cyb-a22-05-identitaet', icon: 'ScanFace', de: 'Identität', pos: 'noun', article: 'die', plural: 'Identitäten', ru: 'личность, идентичность', collocation: { de: 'die Identität nachweisen', ru: 'подтвердить личность', accept: ['seine Identität nachweisen'] }, example: { de: 'Mit dem Code beweist du deine Identität.', ru: 'Кодом ты подтверждаешь свою личность.', cloze: 'Identität' } },
    { id: 'cyb-a22-05-einmalpasswort', icon: 'Smartphone', de: 'Einmalpasswort', pos: 'noun', article: 'das', plural: 'Einmalpasswörter', ru: 'одноразовый пароль', parts: ['Einmal', 'passwort'], imageQuery: 'authenticator app on smartphone', note: 'einmal (один раз) + Passwort; сокращение OTP.', example: { de: 'Die App zeigt ein neues Einmalpasswort.', ru: 'Приложение показывает новый одноразовый пароль.', cloze: 'Einmalpasswort' } },
    { id: 'cyb-a22-05-gueltig', icon: 'CircleCheck', de: 'gültig', pos: 'adj', ru: 'действительный, действующий', note: 'Противоположность: ungültig.', example: { de: 'Dieser Code ist nicht mehr gültig.', ru: 'Этот код больше не действителен.', cloze: 'gültig' } },
    { id: 'cyb-a22-05-sicherheitsschluessel', icon: 'Usb', de: 'Sicherheitsschlüssel', pos: 'noun', article: 'der', plural: 'Sicherheitsschlüssel', ru: 'аппаратный ключ безопасности', parts: ['Sicherheits', 'schlüssel'], note: 'Например, YubiKey (FIDO2).', example: { de: 'Ich melde mich mit einem Sicherheitsschlüssel an.', ru: 'Я вхожу с помощью аппаратного ключа.', cloze: 'Sicherheitsschlüssel' } },

    { id: 'cyb-a22-05-autorisierung', icon: 'KeySquare', de: 'Autorisierung', pos: 'noun', article: 'die', plural: 'Autorisierungen', ru: 'авторизация (выдача прав)', note: 'Решает, что тебе разрешено, после аутентификации.', example: { de: 'Die Autorisierung bestimmt, was du darfst.', ru: 'Авторизация определяет, что тебе можно.', cloze: 'Autorisierung' } },
    { id: 'cyb-a22-05-rolle', icon: 'Drama', de: 'Rolle', pos: 'noun', article: 'die', plural: 'Rollen', ru: 'роль', collocation: { de: 'eine Rolle zuweisen', ru: 'назначить роль', accept: ['die Rolle zuweisen', 'jemandem eine Rolle zuweisen'] }, example: { de: 'Jeder Benutzer hat genau eine Rolle.', ru: 'У каждого пользователя ровно одна роль.', cloze: 'Rolle' } },
    { id: 'cyb-a22-05-zuweisen', icon: 'UserPlus', de: 'zuweisen', pos: 'verb', ru: 'назначать, присваивать', forms: 'er weist zu · wies zu · hat zugewiesen', note: 'Отделяемая приставка: jemandem (Dat) etwas (Akk) zuweisen.', example: { de: 'Der Admin weist mir eine neue Rolle zu.', ru: 'Админ назначает мне новую роль.', cloze: 'weist' } },
    { id: 'cyb-a22-05-zugriffsrecht', icon: 'FolderLock', de: 'Zugriffsrecht', pos: 'noun', article: 'das', plural: 'Zugriffsrechte', ru: 'право доступа', parts: ['Zugriffs', 'recht'], note: 'Zugriff + s + Recht; чаще во мн. ч.', collocation: { de: 'Zugriffsrechte vergeben', ru: 'выдавать права доступа', accept: ['die Zugriffsrechte vergeben'] }, example: { de: 'Gäste haben nur wenige Zugriffsrechte.', ru: 'У гостей лишь немного прав доступа.', cloze: 'Zugriffsrechte' } },
    { id: 'cyb-a22-05-prinzip', icon: 'Scale', de: 'Prinzip', pos: 'noun', article: 'das', plural: 'Prinzipien', ru: 'принцип', note: 'das Prinzip der minimalen Rechte — принцип минимальных привилегий.', collocation: { de: 'das Prinzip der minimalen Rechte', ru: 'принцип минимальных привилегий' }, example: { de: 'Bei uns gilt ein einfaches Prinzip.', ru: 'У нас действует простой принцип.', cloze: 'Prinzip' } },
    { id: 'cyb-a22-05-anfordern', icon: 'Send', de: 'anfordern', pos: 'verb', ru: 'запрашивать, затребовать', forms: 'er fordert an · hat angefordert', note: 'Отделяемая приставка; + Akk: Rechte anfordern.', collocation: { de: 'Rechte anfordern', ru: 'запросить права', accept: ['neue Rechte anfordern', 'die Rechte anfordern'] }, example: { de: 'Ich fordere die Rechte schriftlich an.', ru: 'Я запрашиваю права письменно.', cloze: 'fordere' } },
    { id: 'cyb-a22-05-eingeschraenkt', icon: 'ShieldMinus', de: 'eingeschränkt', pos: 'adj', ru: 'ограниченный', note: 'От глагола einschränken — ограничивать.', collocation: { de: 'eingeschränkter Zugriff', ru: 'ограниченный доступ', accept: ['ein eingeschränkter Zugriff'] }, example: { de: 'Mit diesem Konto ist der Zugriff eingeschränkt.', ru: 'С этим аккаунтом доступ ограничен.', cloze: 'eingeschränkt' } },
    { id: 'cyb-a22-05-biometrisch', icon: 'Fingerprint', de: 'biometrisch', pos: 'adj', ru: 'биометрический', note: 'Fingerabdruck und Gesicht sind biometrische Merkmale.', example: { de: 'Das Handy nutzt ein biometrisches Verfahren.', ru: 'Телефон использует биометрический метод.', cloze: 'biometrisches' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Der Code ist abgelaufen',
      de: `Miriam studiert im dritten Semester an der TU Wien. Seit Oktober arbeitet sie zehn Stunden pro Woche im Helpdesk der Universität. Schon am ersten Tag kam ein Student zu ihr, weil er sich nicht anmelden konnte.

„Sind Ihre Anmeldedaten richtig?“, fragte Miriam. Der Student war sicher, dass sein Passwort stimmte. Aber das Einmalpasswort aus der App war nicht mehr gültig. So ein Code läuft nach dreißig Sekunden ab.

Miriam erklärte ihm, wie die Authentifizierung funktioniert: Zuerst überprüft das System das Passwort, dann den Code. Der Code zeigt, dass wirklich er das Handy hat. Erst danach wird ein Token erzeugt. Mit diesem Token kann der Browser zeigen, dass seine Identität schon überprüft wurde.

Der Student probierte es noch einmal, diesmal schneller. Es funktionierte.`,
      ru: `Мириам учится на третьем семестре в Венском техническом университете. С октября она работает десять часов в неделю в службе поддержки университета. Уже в первый день к ней пришёл студент, потому что не мог войти в систему.

«Ваши учётные данные правильные?» — спросила Мириам. Студент был уверен, что пароль верный. Но одноразовый пароль из приложения был уже недействителен. Такой код истекает через тридцать секунд.

Мириам объяснила ему, как работает аутентификация: сначала система проверяет пароль, потом код. Код показывает, что телефон действительно у него. Только после этого создаётся токен. С этим токеном браузер может показать, что его личность уже проверена.

Студент попробовал ещё раз, на этот раз быстрее. Получилось.`,
      gloss: {
        funktionierte: 'работал(о), функционировал(о)',
        miriam: 'Мириам (имя)', dritten: 'третьем', semester: 'семестр', tu: 'TU — технический университет', wien: 'Вена', oktober: 'октябрь',
        stunden: 'часы', helpdesk: 'служба поддержки', universität: 'университет', kam: 'пришёл', anmelden: 'войти (в систему)', konnte: 'мог',
        richtig: 'правильные', fragte: 'спросила', sicher: 'уверен', passwort: 'пароль', stimmte: 'был верным', app: 'приложение', code: 'код',
        dreißig: 'тридцать', sekunden: 'секунды', erklärte: 'объяснила', system: 'система', handy: 'мобильный телефон', erst: 'только (лишь)',
        erzeugt: 'создан, создаётся', browser: 'браузер', probierte: 'попробовал', einmal: 'раз (noch einmal — ещё раз)', diesmal: 'на этот раз',
        schneller: 'быстрее', neben: 'помимо', studium: 'учёба', labor: 'лаборатория', it: 'IT', 'it-abteilung': 'IT-отдел', firma: 'фирма',
        konnten: 'могли', vergessen: 'забыл', kaputt: 'сломан', bevor: 'прежде чем', eingibt: 'вводит', nachdem: 'после того как', abgelaufen: 'истёк',
        kurzer: 'короткого', sein: 'его', anmeldedaten: 'учётные данные', 'shop-software': 'программа магазина', so: 'такой (so ein)',
      },
      questions: [
        { q: 'Wo arbeitet Miriam neben dem Studium?', ru: 'Где Мириам работает помимо учёбы?', options: ['Im Helpdesk der Universität', 'In einem Labor der TU Wien', 'In der IT-Abteilung einer Firma'], answer: 'Im Helpdesk der Universität' },
        { q: 'Warum konnte sich der Student nicht anmelden?', ru: 'Почему студент не мог войти?', options: ['Das Einmalpasswort war nicht mehr gültig.', 'Er hatte sein Passwort vergessen.', 'Sein Handy war kaputt.'], answer: 'Das Einmalpasswort war nicht mehr gültig.' },
        { q: 'Was überprüft das System zuerst?', ru: 'Что система проверяет сначала?', options: ['Das Passwort', 'Den Code', 'Das Token'], answer: 'Das Passwort' },
        { q: 'Wann wird ein Token erzeugt?', ru: 'Когда создаётся токен?', options: ['Nachdem Passwort und Code überprüft wurden', 'Bevor der Student das Passwort eingibt', 'Wenn der Code abgelaufen ist'], answer: 'Nachdem Passwort und Code überprüft wurden' },
      ],
      translate: [
        { de: 'Das Einmalpasswort ist nicht mehr gültig.', ru: 'Одноразовый пароль больше не действителен.', wrongRu: ['Одноразовый пароль ещё действителен.', 'Токен больше не действителен.'] },
        { de: 'Der Code läuft nach kurzer Zeit ab.', ru: 'Код истекает через короткое время.', wrongRu: ['Код приходит через короткое время.', 'Код истёк через короткое время.'] },
        { de: 'Das System überprüft zuerst die Anmeldedaten.', ru: 'Система сначала проверяет учётные данные.', wrongRu: ['Система потом проверяет учётные данные.', 'Система сначала сохраняет учётные данные.'] },
      ],
    },
    {
      lesson: 1, title: 'Eine neue Rolle für Miriam',
      de: `Nach einem Monat bekam Miriam eine neue Aufgabe. Sie sollte Lehrenden helfen, die keinen Zugang zu ihren Kursen hatten. Dafür brauchte sie mehr Zugriffsrechte als vorher.

Ihr Chef, Herr Novak, erklärte ihr den Unterschied: „Die Authentifizierung zeigt, wer du bist. Die Autorisierung bestimmt, was du darfst.“ Im System hat jeder Benutzer eine Rolle, zum Beispiel Studentin, Lehrende oder Admin. Die Rechte werden einer Rolle zugewiesen, nicht einzelnen Personen.

Miriam musste die neuen Rechte schriftlich anfordern und ihren Ausweis zeigen. Herr Novak sagte: „Bei uns gilt das Prinzip der minimalen Rechte. Deine Rolle bleibt eingeschränkt: Du kannst Kurse sehen, aber keine Noten ändern.“ Miriam fand das sinnvoll. So ist der Schaden kleiner, wenn ein Konto gestohlen wird.`,
      ru: `Через месяц Мириам получила новое задание. Она должна была помогать преподавателям, у которых не было доступа к своим курсам. Для этого ей нужно было больше прав доступа, чем раньше.

Её начальник, господин Новак, объяснил ей разницу: «Аутентификация показывает, кто ты. Авторизация определяет, что тебе можно». В системе у каждого пользователя есть роль, например студентка, преподаватель или админ. Права назначаются роли, а не отдельным людям.

Мириам должна была запросить новые права письменно и показать своё удостоверение. Господин Новак сказал: «У нас действует принцип минимальных привилегий. Твоя роль остаётся ограниченной: ты можешь видеть курсы, но не можешь менять оценки». Мириам сочла это разумным. Так ущерб меньше, если аккаунт украдут.`,
      gloss: {
        miriam: 'Мириам (имя)', novak: 'Новак (фамилия)', bekam: 'получила', aufgabe: 'задание', sollte: 'должна была', lehrenden: 'преподавателям',
        lehrende: 'преподаватель (-ница)', zugang: 'доступ', kursen: 'курсам', kurse: 'курсы', brauchte: 'нуждалась, нужно было', vorher: 'раньше', chef: 'начальник',
        unterschied: 'разница', bestimmt: 'определяет', system: 'система', benutzer: 'пользователь', studentin: 'студентка', admin: 'админ',
        rechte: 'права', einzelnen: 'отдельным', personen: 'людям', musste: 'должна была', schriftlich: 'письменно', gilt: 'действует',
        minimalen: 'минимальных', noten: 'оценки', ändern: 'менять', fand: 'сочла, нашла', sinnvoll: 'разумный, осмысленный', schaden: 'ущерб',
        kleiner: 'меньше', konto: 'аккаунт', gestohlen: 'украден', dafür: 'для этого', kannst: 'можешь', bleibt: 'остаётся',
        wollte: 'хотела', wem: 'кому', lang: 'длинный', passwort: 'пароль', nicht: 'не', jeder: 'каждый', muss: 'должна', ihre: 'её',
      },
      questions: [
        { q: 'Warum brauchte Miriam mehr Zugriffsrechte?', ru: 'Почему Мириам нужно было больше прав доступа?', options: ['Sie sollte Lehrenden mit ihren Kursen helfen.', 'Sie wollte Noten ändern.', 'Ihr Konto wurde gestohlen.'], answer: 'Sie sollte Lehrenden mit ihren Kursen helfen.' },
        { q: 'Was bestimmt die Autorisierung?', ru: 'Что определяет авторизация?', options: ['Was ein Benutzer darf', 'Wer ein Benutzer ist', 'Wie lang ein Passwort ist'], answer: 'Was ein Benutzer darf' },
        { q: 'Wem werden die Rechte im System zugewiesen?', ru: 'Кому в системе назначаются права?', options: ['Einer Rolle', 'Einzelnen Personen', 'Dem Ausweis'], answer: 'Einer Rolle' },
        { q: 'Was kann Miriam mit ihrer Rolle nicht machen?', ru: 'Чего Мириам не может делать со своей ролью?', options: ['Noten ändern', 'Kurse sehen', 'Lehrenden helfen'], answer: 'Noten ändern' },
      ],
      translate: [
        { de: 'Jeder Benutzer hat eine Rolle im System.', ru: 'У каждого пользователя есть роль в системе.', wrongRu: ['У каждого пользователя есть пароль в системе.', 'Не у каждого пользователя есть роль в системе.'] },
        { de: 'Miriam muss die Rechte schriftlich anfordern.', ru: 'Мириам должна запросить права письменно.', wrongRu: ['Мириам должна выдать права письменно.', 'Мириам должна запросить права устно.'] },
        { de: 'Ihre Rolle bleibt eingeschränkt.', ru: 'Её роль остаётся ограниченной.', wrongRu: ['Её роль больше не ограничена.', 'Его роль остаётся ограниченной.'] },
      ],
    },
  ],
};
