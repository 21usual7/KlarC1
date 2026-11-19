import type { Module } from '../types.ts';

// A2.2 cyber 07: incident response — first reaction (lesson 0), analysis and lessons learned (lesson 1).

export const module: Module = {
  id: 'cyber-a22-07-incident-response', sphere: 'cyber', level: 'A2.2',
  title: 'Incident Response', subtitle: 'План на случай ЧП, изоляция, причина и выводы: что делать, когда атака уже идёт.',
  words: [
    { id: 'cyb-a22-07-notfallplan', icon: 'LifeBuoy', de: 'Notfallplan', pos: 'noun', article: 'der', plural: 'Notfallpläne', ru: 'план действий в чрезвычайной ситуации', parts: ['Notfall', 'plan'], note: 'der Notfall (чрезвычайная ситуация) + der Plan.', collocation: { de: 'den Notfallplan öffnen', ru: 'открыть план действий при ЧП', accept: ['einen Notfallplan haben', 'den Notfallplan befolgen'] }, example: { de: 'Jede Firma braucht einen guten Notfallplan.', ru: 'Каждой фирме нужен хороший план действий при ЧП.', cloze: 'Notfallplan' } },
    { id: 'cyb-a22-07-isolieren', icon: 'Unlink', de: 'isolieren', pos: 'verb', ru: 'изолировать', forms: 'er isoliert · hat isoliert', note: 'Глаголы на -ieren без ge- в Partizip: hat isoliert.', collocation: { de: 'einen Rechner isolieren', ru: 'изолировать компьютер', accept: ['den Rechner isolieren'] }, example: { de: 'Wir isolieren den infizierten Rechner sofort.', ru: 'Мы сразу изолируем заражённый компьютер.', cloze: 'isolieren' } },
    { id: 'cyb-a22-07-eindaemmen', icon: 'Fence', de: 'eindämmen', pos: 'verb', ru: 'сдерживать, локализовать', forms: 'er dämmt ein · hat eingedämmt', note: 'Отделяемая приставка; der Damm — дамба. Термин IR: Eindämmung (containment).', collocation: { de: 'einen Angriff eindämmen', ru: 'локализовать атаку', accept: ['den Angriff eindämmen'] }, example: { de: 'Das Team dämmt den Angriff schnell ein.', ru: 'Команда быстро локализует атаку.', cloze: 'dämmt' } },
    { id: 'cyb-a22-07-ursache', icon: 'FileQuestion', de: 'Ursache', pos: 'noun', article: 'die', plural: 'Ursachen', ru: 'причина', note: 'die Ursache für + Akk.', collocation: { de: 'die Ursache finden', ru: 'найти причину', accept: ['die Ursache suchen'] }, example: { de: 'Die Ursache war ein schwaches Passwort.', ru: 'Причиной был слабый пароль.', cloze: 'Ursache' } },
    { id: 'cyb-a22-07-ausfall', icon: 'ServerCrash', de: 'Ausfall', pos: 'noun', article: 'der', plural: 'Ausfälle', ru: 'сбой, отказ (системы)', note: 'От ausfallen — выходить из строя.', example: { de: 'Der Ausfall dauerte den ganzen Vormittag.', ru: 'Сбой длился всю первую половину дня.', cloze: 'Ausfall' } },
    { id: 'cyb-a22-07-betroffen', icon: 'MonitorX', de: 'betroffen', pos: 'adj', ru: 'затронутый, пострадавший', note: 'von etwas betroffen sein — быть затронутым чем-то.', collocation: { de: 'betroffene Systeme', ru: 'затронутые системы', accept: ['die betroffenen Systeme'] }, example: { de: 'Auch der Mailserver ist betroffen.', ru: 'Почтовый сервер тоже затронут.', cloze: 'betroffen' } },
    { id: 'cyb-a22-07-trennen', icon: 'Unplug', de: 'trennen', pos: 'verb', ru: 'отключать, разъединять', forms: 'er trennt · hat getrennt', note: 'etwas vom Netz trennen — отключить от сети.', collocation: { de: 'vom Netz trennen', ru: 'отключить от сети', accept: ['vom Netzwerk trennen'] }, example: { de: 'Trenn das Notebook sofort vom Netz!', ru: 'Немедленно отключи ноутбук от сети!', cloze: 'Trenn' } },
    { id: 'cyb-a22-07-sofortmassnahme', icon: 'Zap', de: 'Sofortmaßnahme', pos: 'noun', article: 'die', plural: 'Sofortmaßnahmen', ru: 'срочная мера', parts: ['Sofort', 'maßnahme'], note: 'sofort (сразу) + die Maßnahme (мера).', example: { de: 'Die erste Sofortmaßnahme steht im Plan.', ru: 'Первая срочная мера указана в плане.', cloze: 'Sofortmaßnahme' } },

    { id: 'cyb-a22-07-spur', icon: 'Footprints', de: 'Spur', pos: 'noun', article: 'die', plural: 'Spuren', ru: 'след', collocation: { de: 'Spuren hinterlassen', ru: 'оставлять следы', accept: ['keine Spuren hinterlassen'] }, example: { de: 'Der Angreifer hat kaum Spuren hinterlassen.', ru: 'Злоумышленник почти не оставил следов.', cloze: 'Spuren' } },
    { id: 'cyb-a22-07-forensik', icon: 'Microscope', de: 'Forensik', pos: 'noun', article: 'die', ru: 'криминалистика, форензика', note: 'IT-Forensik — компьютерная криминалистика. Мн. ч. не употребляется.', example: { de: 'Für die Forensik brauchen wir eine Kopie der Festplatte.', ru: 'Для форензики нам нужна копия жёсткого диска.', cloze: 'Forensik' } },
    { id: 'cyb-a22-07-wiederanlauf', icon: 'Play', de: 'Wiederanlauf', pos: 'noun', article: 'der', ru: 'возобновление работы (после сбоя)', parts: ['Wieder', 'anlauf'], example: { de: 'Nach der Analyse planen wir den Wiederanlauf der Systeme.', ru: 'После анализа мы планируем возобновление работы систем.', cloze: 'Wiederanlauf' } },
    { id: 'cyb-a22-07-zeitpunkt', icon: 'Clock', de: 'Zeitpunkt', pos: 'noun', article: 'der', plural: 'Zeitpunkte', ru: 'момент (времени)', parts: ['Zeit', 'punkt'], note: 'zu diesem Zeitpunkt — в этот момент.', example: { de: 'Zu diesem Zeitpunkt war niemand im Büro.', ru: 'В этот момент в офисе никого не было.', cloze: 'Zeitpunkt' } },
    { id: 'cyb-a22-07-ausmass', icon: 'Expand', de: 'Ausmaß', pos: 'noun', article: 'das', ru: 'масштаб, размер (ущерба)', note: 'Обычно без мн. ч.: das Ausmaß des Schadens.', example: { de: 'Das Ausmaß des Angriffs war groß.', ru: 'Масштаб атаки был большим.', cloze: 'Ausmaß' } },
    { id: 'cyb-a22-07-neu-aufsetzen', icon: 'RotateCcw', de: 'neu aufsetzen', pos: 'verb', ru: 'переустановить (систему с нуля)', forms: 'er setzt neu auf · hat neu aufgesetzt', note: 'Отделяемая приставка: Wir setzen den Server neu auf.', example: { de: 'Wir setzen alle Rechner neu auf.', ru: 'Мы переустанавливаем все компьютеры.', cloze: 'setzen' } },
    { id: 'cyb-a22-07-lehre', icon: 'GraduationCap', de: 'Lehre', pos: 'noun', article: 'die', plural: 'Lehren', ru: 'урок, вывод (из опыта)', note: 'Lehren aus etwas ziehen — извлекать уроки. Второе значение: профобучение (eine Lehre machen).', collocation: { de: 'Lehren ziehen', ru: 'извлечь уроки', accept: ['Lehren aus dem Vorfall ziehen', 'eine Lehre ziehen'] }, example: { de: 'Daraus ziehen wir eine wichtige Lehre.', ru: 'Из этого мы извлекаем важный урок.', cloze: 'Lehre' } },
    { id: 'cyb-a22-07-vorbeugen', icon: 'ShieldPlus', de: 'vorbeugen', pos: 'verb', ru: 'предупреждать, предотвращать (заранее)', forms: 'er beugt vor · hat vorgebeugt', note: 'Отделяемая приставка; + Dat: einem Angriff vorbeugen.', example: { de: 'Schulungen beugen solchen Fehlern vor.', ru: 'Обучение предупреждает такие ошибки.', cloze: 'beugen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Morgen ohne Lager',
      de: `Lukas studiert Wirtschaftsinformatik und arbeitet nebenbei bei einer Logistikfirma in Wien. Am Freitag um sieben Uhr früh war plötzlich die Hälfte der Computer im Lager gesperrt. Auf den Bildschirmen stand eine Nachricht von Erpressern. Es gab einen Ausfall: Niemand konnte Pakete verschicken.

Seine Teamleiterin, Frau Berger, öffnete sofort den Notfallplan. Darin war genau beschrieben, was zu tun war. Die erste Sofortmaßnahme war klar: Die betroffenen Rechner mussten isoliert werden. Lukas trennte sie vom Netzwerk, damit sich die Schadsoftware nicht weiter verbreiten konnte.

„Zuerst dämmen wir den Angriff ein, dann suchen wir die Ursache“, sagte Frau Berger. Nach zwei Stunden war der Angriff eingedämmt. Die Server in der Zentrale waren zum Glück nicht betroffen.`,
      ru: `Лукас изучает бизнес-информатику и подрабатывает в логистической фирме в Вене. В пятницу в семь утра вдруг половина компьютеров на складе оказалась заблокирована. На экранах было сообщение от вымогателей. Произошёл сбой: никто не мог отправлять посылки.

Его руководительница команды, госпожа Бергер, сразу открыла план действий при ЧП. В нём было точно описано, что делать. Первая срочная мера была ясна: затронутые компьютеры нужно было изолировать. Лукас отключил их от сети, чтобы вредоносное ПО не могло распространяться дальше.

«Сначала мы локализуем атаку, потом ищем причину», — сказала госпожа Бергер. Через два часа атака была локализована. Серверы в головном офисе, к счастью, не были затронуты.`,
      gloss: {
        'dämmen': '(eindämmen) сдерживать, локализовать',
        lukas: 'Лукас (имя)', berger: 'Бергер (фамилия)', wirtschaftsinformatik: 'бизнес-информатика', nebenbei: 'параллельно, подрабатывая', logistikfirma: 'логистическая фирма',
        wien: 'Вена', freitag: 'пятница', uhr: 'час (о времени)', früh: 'рано, утра', hälfte: 'половина', computer: 'компьютеры', lager: 'склад', gesperrt: 'заблокированы',
        bildschirmen: 'экранах', stand: 'стояло, было написано', nachricht: 'сообщение', erpressern: 'вымогателей', konnte: 'мог', pakete: 'посылки', verschicken: 'отправлять',
        teamleiterin: 'руководительница команды', öffnete: 'открыла', darin: 'в нём', beschrieben: 'описано', klar: 'ясно', betroffenen: 'затронутые', rechner: 'компьютеры',
        mussten: 'должны были', isoliert: 'изолированы', trennte: 'отключил', netzwerk: 'сеть', verbreiten: 'распространяться', weiter: 'дальше',
        angriff: 'атака', stunden: 'часа', server: 'серверы', zentrale: 'головной офис', glück: 'счастье (zum Glück — к счастью)', schadsoftware: 'вредоносное ПО',
        erste: 'первая', polizei: 'полиция', anzurufen: 'позвонить', auszuschalten: 'выключить', verbreitet: 'распространяется', ankommen: 'приходят',
        schneller: 'быстрее', welche: 'какие', systeme: 'системы', notfallplan: 'план действий при ЧП', kennen: 'знаем', ursache: 'причина', tun: 'делать',
      },
      questions: [
        { q: 'Was stand auf den Bildschirmen?', ru: 'Что было на экранах?', options: ['Eine Nachricht von Erpressern', 'Eine Nachricht von Frau Berger', 'Ein neues Passwort'], answer: 'Eine Nachricht von Erpressern' },
        { q: 'Was war die erste Sofortmaßnahme?', ru: 'Какой была первая срочная мера?', options: ['Die betroffenen Rechner zu isolieren', 'Die Polizei anzurufen', 'Alle Server auszuschalten'], answer: 'Die betroffenen Rechner zu isolieren' },
        { q: 'Warum trennte Lukas die Rechner vom Netzwerk?', ru: 'Почему Лукас отключил компьютеры от сети?', options: ['Damit sich die Schadsoftware nicht verbreitet', 'Damit die Pakete schneller ankommen', 'Weil der Notfallplan alt war'], answer: 'Damit sich die Schadsoftware nicht verbreitet' },
        { q: 'Welche Systeme waren nicht betroffen?', ru: 'Какие системы не были затронуты?', options: ['Die Server in der Zentrale', 'Die Computer im Lager', 'Die Rechner von Lukas'], answer: 'Die Server in der Zentrale' },
      ],
      translate: [
        { de: 'Die betroffenen Rechner müssen isoliert werden.', ru: 'Затронутые компьютеры должны быть изолированы.', wrongRu: ['Затронутые компьютеры должны быть выключены.', 'Затронутые компьютеры не должны быть изолированы.'] },
        { de: 'Frau Berger öffnete den Notfallplan.', ru: 'Госпожа Бергер открыла план действий при ЧП.', wrongRu: ['Госпожа Бергер закрыла план действий при ЧП.', 'Госпожа Бергер открывает план действий при ЧП.'] },
        { de: 'Wir kennen die Ursache noch nicht.', ru: 'Мы ещё не знаем причину.', wrongRu: ['Мы уже знаем причину.', 'Они ещё не знают причину.'] },
      ],
    },
    {
      lesson: 1, title: 'Was ist passiert?',
      de: `In der nächsten Woche begann die Forensik. Ein externer Experte half dem Team, die Logdateien auszuwerten. Er suchte nach Spuren des Angreifers und schrieb eine Liste: Zu welchem Zeitpunkt war der Angreifer im Netz, und welche Rechner hat er benutzt?

Die Spur führte zu einer E-Mail. Ein Mitarbeiter hatte einen gefälschten Anhang geöffnet. Das Ausmaß war zum Glück kleiner als befürchtet: Es wurden keine Kundendaten gestohlen.

Die Rechner im Lager wurden neu aufgesetzt, und nach drei Tagen lief alles wieder normal. Am Ende traf sich das Team, um Lehren aus dem Vorfall zu ziehen. Frau Berger sagte: „Wir müssen solchen Angriffen besser vorbeugen. Ab jetzt gibt es jeden Monat ein Training für alle.“`,
      ru: `На следующей неделе началась форензика. Внешний эксперт помог команде проанализировать лог-файлы. Он искал следы злоумышленника и составил список: в какой момент злоумышленник был в сети и какие компьютеры он использовал?

След привёл к электронному письму. Один сотрудник открыл поддельное вложение. Масштаб, к счастью, оказался меньше, чем опасались: данные клиентов не были украдены.

Компьютеры на складе переустановили, и через три дня всё снова работало нормально. В конце команда собралась, чтобы извлечь уроки из инцидента. Госпожа Бергер сказала: «Мы должны лучше предупреждать такие атаки. Отныне каждый месяц будет тренинг для всех».`,
      gloss: {
        berger: 'Бергер (фамилия)', begann: 'началась', externer: 'внешний', experte: 'эксперт', half: 'помог', team: 'команда', auszuwerten: 'проанализировать',
        suchte: 'искал', angreifers: 'злоумышленника', schrieb: 'составил, написал', liste: 'список', welchem: 'какой (дат.)', netz: 'сеть', rechner: 'компьютеры',
        benutzt: 'использовал', führte: 'привёл', 'e-mail': 'электронное письмо', mitarbeiter: 'сотрудник', hatte: 'имел (вспомог. глагол)', gefälschten: 'поддельное',
        anhang: 'вложение', geöffnet: 'открыл', glück: 'счастье (zum Glück — к счастью)', kleiner: 'меньше', befürchtet: 'опасались', kundendaten: 'данные клиентов',
        gestohlen: 'украдены', lager: 'склад', aufgesetzt: 'переустановлены', tagen: 'дней', lief: 'работало', normal: 'нормально', traf: 'собралась, встретилась',
        ziehen: 'извлечь (Lehren ziehen)', vorfall: 'инцидент', solchen: 'такие, таким', angriffen: 'атакам', besser: 'лучше', ab: 'с (ab jetzt — отныне)',
        training: 'тренинг', wer: 'кто', polizei: 'полиция', kunde: 'клиент', kam: 'попал', angreifer: 'злоумышленник', offenes: 'открытый', wlan: 'Wi-Fi',
        gestohlenes: 'украденный', passwort: 'пароль', wie: 'как', groß: 'большой', größer: 'больше', penetrationstest: 'тест на проникновение', logdateien: 'лог-файлы',
        experten: 'эксперт', gefunden: 'нашли', keine: 'никаких', über: 'через', einen: 'один, какой-то', ins: 'в',
      },
      questions: [
        { q: 'Wer half dem Team bei der Forensik?', ru: 'Кто помог команде с форензикой?', options: ['Ein externer Experte', 'Die Polizei', 'Ein Kunde'], answer: 'Ein externer Experte' },
        { q: 'Wie kam der Angreifer ins Netz?', ru: 'Как злоумышленник попал в сеть?', options: ['Über einen gefälschten Anhang', 'Über ein offenes WLAN', 'Über ein gestohlenes Passwort'], answer: 'Über einen gefälschten Anhang' },
        { q: 'Wie groß war das Ausmaß?', ru: 'Каким был масштаб?', options: ['Kleiner als befürchtet', 'Größer als befürchtet', 'Genau wie befürchtet'], answer: 'Kleiner als befürchtet' },
        { q: 'Was gibt es ab jetzt jeden Monat?', ru: 'Что теперь будет каждый месяц?', options: ['Ein Training für alle', 'Einen neuen Notfallplan', 'Einen Penetrationstest'], answer: 'Ein Training für alle' },
      ],
      translate: [
        { de: 'Der Experte wertet die Logdateien aus.', ru: 'Эксперт анализирует лог-файлы.', wrongRu: ['Эксперт удаляет лог-файлы.', 'Эксперт проанализировал лог-файлы.'] },
        { de: 'Wir haben keine Spuren gefunden.', ru: 'Мы не нашли никаких следов.', wrongRu: ['Мы нашли следы.', 'Они не нашли никаких следов.'] },
        { de: 'Wir müssen solchen Angriffen vorbeugen.', ru: 'Мы должны предупреждать такие атаки.', wrongRu: ['Мы должны расследовать такие атаки.', 'Мы не можем предупреждать такие атаки.'] },
      ],
    },
  ],
};
