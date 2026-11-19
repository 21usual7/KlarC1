import type { Module } from '../types.ts';

// A2.2 cyber 02: encryption basics and key exchange (lesson 0), hashes, signatures and trust (lesson 1).

export const module: Module = {
  id: 'cyber-a22-02-kryptografie', sphere: 'cyber', level: 'A2.2',
  title: 'Kryptografie', subtitle: 'Ключи, шифротекст, хеш и цифровая подпись: как устроено шифрование.',
  words: [
    { id: 'cyb-a22-02-schluessel', icon: 'KeyRound', de: 'Schlüssel', pos: 'noun', article: 'der', plural: 'Schlüssel', ru: 'ключ (криптографический)', note: 'Der öffentliche Schlüssel — открытый ключ; der private (geheime) Schlüssel — закрытый ключ.', collocation: { de: 'einen Schlüssel erzeugen', ru: 'сгенерировать ключ', accept: ['den Schlüssel erzeugen', 'einen Schlüssel generieren'] }, example: { de: 'Ohne den Schlüssel kann niemand die Datei lesen.', ru: 'Без ключа никто не может прочитать файл.', cloze: 'Schlüssel' } },
    { id: 'cyb-a22-02-entschluesseln', icon: 'LockOpen', de: 'entschlüsseln', pos: 'verb', ru: 'расшифровывать', forms: 'er entschlüsselt · hat entschlüsselt', note: 'Приставка ent- неотделяемая. Противоположность — verschlüsseln.', collocation: { de: 'eine Nachricht entschlüsseln', ru: 'расшифровать сообщение', accept: ['die Nachricht entschlüsseln'] }, example: { de: 'Der Empfänger entschlüsselt die Nachricht mit seinem Schlüssel.', ru: 'Получатель расшифровывает сообщение своим ключом.', cloze: 'entschlüsselt' } },
    { id: 'cyb-a22-02-klartext', icon: 'FileText', de: 'Klartext', pos: 'noun', article: 'der', plural: 'Klartexte', ru: 'открытый (незашифрованный) текст', note: 'Im Klartext — в открытом виде; в быту также «прямо говоря».', collocation: { de: 'im Klartext speichern', ru: 'хранить в открытом виде' }, example: { de: 'Passwörter darf man nie im Klartext speichern.', ru: 'Пароли никогда нельзя хранить в открытом виде.', cloze: 'Klartext' } },
    { id: 'cyb-a22-02-geheimtext', icon: 'FileLock', de: 'Geheimtext', pos: 'noun', article: 'der', plural: 'Geheimtexte', ru: 'шифротекст, зашифрованный текст', parts: ['Geheim', 'text'], note: 'Синоним: das Chiffrat.', example: { de: 'Der Geheimtext sieht wie zufällige Zeichen aus.', ru: 'Шифротекст выглядит как случайные символы.', cloze: 'Geheimtext' } },
    { id: 'cyb-a22-02-symmetrisch', icon: 'Equal', de: 'symmetrisch', pos: 'adj', ru: 'симметричный', note: 'Symmetrische Verschlüsselung — один общий ключ; asymmetrische — пара ключей.', collocation: { de: 'symmetrische Verschlüsselung', ru: 'симметричное шифрование', accept: ['die symmetrische Verschlüsselung'] }, example: { de: 'Bei symmetrischer Verschlüsselung gibt es nur einen Schlüssel.', ru: 'При симметричном шифровании есть только один ключ.', cloze: 'symmetrischer' } },
    { id: 'cyb-a22-02-schluesselpaar', icon: 'KeySquare', de: 'Schlüsselpaar', pos: 'noun', article: 'das', plural: 'Schlüsselpaare', ru: 'пара ключей', parts: ['Schlüssel', 'paar'], note: 'Состоит из öffentlicher Schlüssel (открытый) и privater Schlüssel (закрытый).', example: { de: 'Jeder Nutzer erzeugt sein eigenes Schlüsselpaar.', ru: 'Каждый пользователь создаёт собственную пару ключей.', cloze: 'Schlüsselpaar' } },
    { id: 'cyb-a22-02-algorithmus', icon: 'Cpu', de: 'Algorithmus', pos: 'noun', article: 'der', plural: 'Algorithmen', ru: 'алгоритм', collocation: { de: 'ein sicherer Algorithmus', ru: 'надёжный алгоритм' }, example: { de: 'AES ist ein bekannter Algorithmus für Verschlüsselung.', ru: 'AES — известный алгоритм шифрования.', cloze: 'Algorithmus' } },
    { id: 'cyb-a22-02-austauschen', icon: 'ArrowLeftRight', de: 'austauschen', pos: 'verb', ru: 'обмениваться, обменивать', forms: 'er tauscht aus · hat ausgetauscht', note: 'Отделяемая приставка aus-. Etwas mit jemandem austauschen — обмениваться чем-то с кем-то.', collocation: { de: 'Schlüssel austauschen', ru: 'обмениваться ключами', accept: ['die Schlüssel austauschen'] }, example: { de: 'Die beiden Server tauschen zuerst einen Schlüssel aus.', ru: 'Оба сервера сначала обмениваются ключом.', cloze: 'tauschen' } },

    { id: 'cyb-a22-02-signatur', icon: 'Signature', de: 'Signatur', pos: 'noun', article: 'die', plural: 'Signaturen', ru: 'подпись (цифровая)', note: 'Die digitale Signatur — цифровая подпись.', collocation: { de: 'die Signatur prüfen', ru: 'проверить подпись', accept: ['eine Signatur prüfen'] }, example: { de: 'Das Programm prüft die Signatur der Datei.', ru: 'Программа проверяет подпись файла.', cloze: 'Signatur' } },
    { id: 'cyb-a22-02-signieren', icon: 'PenLine', de: 'signieren', pos: 'verb', ru: 'подписывать (цифровой подписью)', forms: 'er signiert · hat signiert', note: '+ Akk. На бумаге чаще unterschreiben.', example: { de: 'Die Firma signiert jedes Update mit ihrem Schlüssel.', ru: 'Фирма подписывает каждое обновление своим ключом.', cloze: 'signiert' } },
    { id: 'cyb-a22-02-hashwert', icon: 'Hash', de: 'Hashwert', pos: 'noun', article: 'der', plural: 'Hashwerte', ru: 'хеш-значение, хеш', parts: ['Hash', 'wert'], note: 'Также: der Hash. Die Hashfunktion — хеш-функция.', collocation: { de: 'den Hashwert berechnen', ru: 'вычислить хеш', accept: ['einen Hashwert berechnen'] }, example: { de: 'Schon eine kleine Änderung ändert den ganzen Hashwert.', ru: 'Даже маленькое изменение меняет весь хеш.', cloze: 'Hashwert' } },
    { id: 'cyb-a22-02-integritaet', icon: 'ShieldCheck', de: 'Integrität', pos: 'noun', article: 'die', ru: 'целостность (данных)', note: 'Множественного числа нет. Три цели ИБ: Vertraulichkeit, Integrität, Verfügbarkeit.', example: { de: 'Mit dem Hashwert prüfen wir die Integrität der Daten.', ru: 'С помощью хеша мы проверяем целостность данных.', cloze: 'Integrität' } },
    { id: 'cyb-a22-02-echtheit', icon: 'BadgeCheck', de: 'Echtheit', pos: 'noun', article: 'die', ru: 'подлинность', note: 'От echt — настоящий. Множественного числа нет. Термин ИБ: die Authentizität.', example: { de: 'Die Signatur beweist die Echtheit des Dokuments.', ru: 'Подпись доказывает подлинность документа.', cloze: 'Echtheit' } },
    { id: 'cyb-a22-02-manipulieren', icon: 'Pencil', de: 'manipulieren', pos: 'verb', ru: 'подделывать, тайно изменять', forms: 'er manipuliert · hat manipuliert', note: '+ Akk. Manipulierte Daten — подделанные данные.', example: { de: 'Jemand hat die Datei unterwegs manipuliert.', ru: 'Кто-то подделал файл по дороге.', cloze: 'manipuliert' } },
    { id: 'cyb-a22-02-zertifizierungsstelle', icon: 'Landmark', de: 'Zertifizierungsstelle', pos: 'noun', article: 'die', plural: 'Zertifizierungsstellen', ru: 'удостоверяющий центр, центр сертификации', parts: ['Zertifizierungs', 'stelle'], note: 'Англ. Certificate Authority (CA). Выдаёт сертификаты (das Zertifikat).', example: { de: 'Eine Zertifizierungsstelle bestätigt, wem der Schlüssel gehört.', ru: 'Удостоверяющий центр подтверждает, кому принадлежит ключ.', cloze: 'Zertifizierungsstelle' } },
    { id: 'cyb-a22-02-vertraulich', icon: 'EyeOff', de: 'vertraulich', pos: 'adj', ru: 'конфиденциальный', note: 'Die Vertraulichkeit — конфиденциальность.', collocation: { de: 'vertrauliche Daten', ru: 'конфиденциальные данные', accept: ['die vertraulichen Daten'] }, example: { de: 'Diese Informationen sind streng vertraulich.', ru: 'Эта информация строго конфиденциальна.', cloze: 'vertraulich' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Schlüssel für zwei',
      de: `Sofia studiert im dritten Semester an der TU Wien. Am Dienstag hatte sie zum ersten Mal die Übung „Kryptografie“. Der Tutor Daniel erklärte zuerst die symmetrische Verschlüsselung: Ein Algorithmus macht aus dem Klartext einen Geheimtext. Wer denselben Schlüssel hat, kann den Geheimtext wieder entschlüsseln.

„Aber wie bekommt die andere Person den Schlüssel?“, fragte Sofia. „Wenn man ihn per E-Mail schickt, kann ihn jemand stehlen.“ Daniel lachte: „Genau das ist das Problem.“

Deshalb gibt es auch asymmetrische Verfahren. Jede Person hat ein Schlüsselpaar: einen öffentlichen und einen privaten Schlüssel. Der öffentliche Schlüssel darf von allen gesehen werden, der private bleibt geheim. Mit diesen Schlüsseln tauschen zwei Computer am Anfang sicher einen gemeinsamen Schlüssel aus. Danach wird schnell und symmetrisch verschlüsselt.`,
      ru: `Софья учится на третьем семестре в Венском техническом университете. Во вторник у неё впервые было практическое занятие «Криптография». Тьютор Даниэль сначала объяснил симметричное шифрование: алгоритм превращает открытый текст в шифротекст. Тот, у кого есть тот же ключ, может снова расшифровать шифротекст.

«Но как другой человек получит ключ?» — спросила Софья. «Если отправить его по электронной почте, кто-нибудь может его украсть». Даниэль засмеялся: «Именно в этом и проблема».

Поэтому существуют ещё и асимметричные методы. У каждого человека есть пара ключей: открытый и закрытый ключ. Открытый ключ могут видеть все, закрытый остаётся секретным. С помощью этих ключей два компьютера в начале надёжно обмениваются общим ключом. После этого шифрование идёт быстро и симметрично.`,
      gloss: {
        eigenes: 'собственная, своя',
        sofia: 'Софья (имя)', daniel: 'Даниэль (имя)', dritten: 'третьем', semester: 'семестр', tu: 'TU — технический университет', wien: 'Вена',
        dienstag: 'вторник', mal: 'раз (zum ersten Mal — впервые)', übung: 'практическое занятие, упражнение', kryptografie: 'криптография', tutor: 'тьютор, ассистент на занятиях',
        erklärte: 'объяснил', symmetrische: 'симметричное', verschlüsselung: 'шифрование', wer: 'тот, кто', denselben: 'тот же самый',
        person: 'человек, лицо', fragte: 'спросил(а)', schickt: 'отправляет (wenn man schickt — если отправить)', 'e-mail': 'электронное письмо', lachte: 'засмеялся',
        gibt: 'есть, существует (es gibt)', asymmetrische: 'асимметричные', verfahren: 'методы, процедуры', öffentlichen: 'открытый (вин.)', öffentliche: 'открытый', privaten: 'закрытый (вин.)', private: 'закрытый',
        allen: 'всеми', gesehen: 'видим (darf gesehen werden — могут видеть)', geheim: 'секретный, тайный', schlüsseln: 'ключами', computer: 'компьютеры', anfang: 'начало', sicher: 'надёжно, безопасно', gemeinsamen: 'общий (вин.)',
        verschlüsselt: 'шифруется (wird verschlüsselt)', stehlen: 'украсть', austausch: 'обмен', gar: 'вовсе (gar nicht — вообще не)', symmetrisch: 'симметрично', asymmetrisch: 'асимметрично', alle: 'все',
      },
      questions: [
        { q: 'Was macht ein Algorithmus bei der Verschlüsselung?', ru: 'Что делает алгоритм при шифровании?', options: ['Er macht aus dem Klartext einen Geheimtext.', 'Er schickt den Schlüssel per E-Mail.', 'Er macht aus dem Geheimtext ein Schlüsselpaar.'], answer: 'Er macht aus dem Klartext einen Geheimtext.' },
        { q: 'Welches Problem sieht Sofia?', ru: 'Какую проблему видит Софья?', options: ['Jemand kann den Schlüssel stehlen.', 'Der Geheimtext ist zu lang.', 'Die Übung ist zu schwer.'], answer: 'Jemand kann den Schlüssel stehlen.' },
        { q: 'Wer darf den öffentlichen Schlüssel sehen?', ru: 'Кто может видеть открытый ключ?', options: ['Alle', 'Nur der Tutor', 'Niemand'], answer: 'Alle' },
        { q: 'Wie wird nach dem Austausch verschlüsselt?', ru: 'Как шифруют после обмена?', options: ['Symmetrisch', 'Asymmetrisch', 'Gar nicht'], answer: 'Symmetrisch' },
      ],
      translate: [
        { de: 'Wir tauschen zuerst einen Schlüssel aus.', ru: 'Сначала мы обмениваемся ключом.', wrongRu: ['Сначала мы удаляем ключ.', 'Сначала мы не обмениваемся ключом.', 'Сначала мы обменялись ключом.'] },
        { de: 'Nur mit dem Schlüssel kann man den Geheimtext entschlüsseln.', ru: 'Только с помощью ключа можно расшифровать шифротекст.', wrongRu: ['Только с помощью ключа можно зашифровать шифротекст.', 'Только с помощью ключа можно расшифровать открытый текст.', 'И без ключа можно расшифровать шифротекст.'] },
        { de: 'Jede Person hat ein eigenes Schlüsselpaar.', ru: 'У каждого человека есть собственная пара ключей.', wrongRu: ['У каждого человека есть общий ключ.', 'Не у каждого человека есть пара ключей.'] },
      ],
    },
    {
      lesson: 1, title: 'Eine falsche Datei',
      de: `Am Wochenende wollte Sofia Linux auf ihrem alten Laptop installieren. Sie lud die Datei von einer fremden Webseite herunter, weil der Download dort schneller war. Auf der offiziellen Seite stand aber ein Hashwert. Sofia berechnete den Hashwert ihrer Datei und verglich die beiden. Sie waren nicht gleich!

Am Montag erzählte sie Daniel davon. „Gut, dass du das geprüft hast“, sagte er. „Wahrscheinlich hat jemand die Datei manipuliert. Der Hashwert zeigt, ob die Integrität der Daten stimmt.“

Dann erklärte er die Signatur: Die Entwickler signieren den Hashwert mit ihrem privaten Schlüssel. Mit dem öffentlichen Schlüssel kann jeder die Echtheit prüfen. Aber woher weiß man, dass der öffentliche Schlüssel echt ist? Das bestätigt eine Zertifizierungsstelle. „Und vertrauliche Daten?“, fragte Sofia. „Die muss man zusätzlich verschlüsseln“, antwortete Daniel.`,
      ru: `На выходных Софья хотела установить Linux на свой старый ноутбук. Она скачала файл с чужого сайта, потому что загрузка там была быстрее. Но на официальном сайте был указан хеш. Софья вычислила хеш своего файла и сравнила их. Они не совпадали!

В понедельник она рассказала об этом Даниэлю. «Хорошо, что ты это проверила», — сказал он. «Вероятно, кто-то подделал файл. Хеш показывает, сохранена ли целостность данных».

Потом он объяснил цифровую подпись: разработчики подписывают хеш своим закрытым ключом. С помощью открытого ключа любой может проверить подлинность. Но откуда известно, что открытый ключ настоящий? Это подтверждает удостоверяющий центр. «А конфиденциальные данные?» — спросила Софья. «Их нужно дополнительно шифровать», — ответил Даниэль.`,
      gloss: {
        vertrauliche: 'конфиденциальные', offizielle: 'официальная', öffentlicher: 'открытый',
        sofia: 'Софья (имя)', daniel: 'Даниэль (имя)', wollte: 'хотела', linux: 'Linux (операционная система)', ihrem: 'своём, своим', laptop: 'ноутбук', installieren: 'установить',
        lud: 'загрузила (herunterladen — скачивать)', datei: 'файл', fremden: 'чужого', webseite: 'сайт, веб-страница', herunter: 'вниз (lud herunter — скачала)', download: 'загрузка, скачивание', schneller: 'быстрее',
        offiziellen: 'официальном', seite: 'сайт, страница', stand: 'стоял, был написан', berechnete: 'вычислила', ihrer: 'её, своего', verglich: 'сравнила', beiden: 'оба, их обоих', gleich: 'одинаковые',
        erzählte: 'рассказала', davon: 'об этом', geprüft: 'проверил(а)', sagte: 'сказал', wahrscheinlich: 'вероятно', zeigt: 'показывает', daten: 'данные', stimmt: 'в порядке, верно (stimmen — быть верным)',
        erklärte: 'объяснил', entwickler: 'разработчики', signieren: 'подписывают', privaten: 'закрытым', öffentlichen: 'открытым; открытый', öffentliche: 'открытый', jeder: 'каждый, любой', prüfen: 'проверить',
        woher: 'откуда', echt: 'настоящий, подлинный', bestätigt: 'подтверждает', fragte: 'спросила', zusätzlich: 'дополнительно', verschlüsseln: 'шифровать', antwortete: 'ответил',
        warum: 'почему', lädt: 'загружает', bemerkte: 'заметила', vergleich: 'сравнение', hashwerte: 'хеши', groß: 'большой', signatur: 'подпись', fehlte: 'отсутствовала',
        womit: 'чем', passwort: 'пароль', browser: 'браузер', tutor: 'тьютор', update: 'обновление', dokument: 'документ',
      },
      questions: [
        { q: 'Warum lud Sofia die Datei von einer fremden Webseite herunter?', ru: 'Почему Софья скачала файл с чужого сайта?', options: ['Weil der Download dort schneller war.', 'Weil die offizielle Seite kaputt war.', 'Weil Daniel es ihr gesagt hat.'], answer: 'Weil der Download dort schneller war.' },
        { q: 'Was bemerkte Sofia beim Vergleich?', ru: 'Что заметила Софья при сравнении?', options: ['Die Hashwerte waren nicht gleich.', 'Die Datei war zu groß.', 'Die Signatur fehlte.'], answer: 'Die Hashwerte waren nicht gleich.' },
        { q: 'Womit signieren die Entwickler den Hashwert?', ru: 'Чем разработчики подписывают хеш?', options: ['Mit ihrem privaten Schlüssel', 'Mit dem öffentlichen Schlüssel', 'Mit einem Passwort'], answer: 'Mit ihrem privaten Schlüssel' },
        { q: 'Wer bestätigt, dass ein öffentlicher Schlüssel echt ist?', ru: 'Кто подтверждает, что открытый ключ настоящий?', options: ['Eine Zertifizierungsstelle', 'Der Tutor', 'Der Browser'], answer: 'Eine Zertifizierungsstelle' },
      ],
      translate: [
        { de: 'Jemand hat die Datei manipuliert.', ru: 'Кто-то подделал файл.', wrongRu: ['Кто-то удалил файл.', 'Никто не подделывал файл.', 'Кто-то подделает файл.'] },
        { de: 'Die Entwickler signieren jedes Update.', ru: 'Разработчики подписывают каждое обновление.', wrongRu: ['Разработчики шифруют каждое обновление.', 'Разработчики подписали каждое обновление.', 'Пользователи подписывают каждое обновление.'] },
        { de: 'Die Signatur beweist die Echtheit der Datei.', ru: 'Подпись доказывает подлинность файла.', wrongRu: ['Подпись доказывает целостность файла.', 'Хеш доказывает подлинность файла.', 'Подпись не доказывает подлинность файла.'] },
      ],
    },
  ],
};
