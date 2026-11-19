import type { Module } from '../types.ts';

// A2.2 cyber 08: data protection law — GDPR basics (lesson 0), data breaches and rights of data subjects (lesson 1).

export const module: Module = {
  id: 'cyber-a22-08-datenschutzrecht', sphere: 'cyber', level: 'A2.2',
  title: 'Datenschutzrecht', subtitle: 'DSGVO, персональные данные, утечки и права пользователей: что нужно знать разработчику.',
  words: [
    { id: 'cyb-a22-08-dsgvo', icon: 'ScrollText', de: 'DSGVO', pos: 'noun', article: 'die', ru: 'GDPR, Общий регламент ЕС по защите данных', note: 'Сокращение от die Datenschutz-Grundverordnung. Мн. ч. нет. Так называют и в Германии, и в Австрии.', collocation: { de: 'gemäß DSGVO', ru: 'согласно GDPR', accept: ['laut DSGVO', 'nach der DSGVO'] }, example: { de: 'Die DSGVO gilt in der ganzen EU.', ru: 'GDPR действует во всём ЕС.', cloze: 'DSGVO' } },
    { id: 'cyb-a22-08-personenbezogen', icon: 'UserRound', de: 'personenbezogen', pos: 'adj', ru: 'персональный (о данных), относящийся к конкретному человеку', note: 'Person + en + bezogen (относящийся). Почти всегда в сочетании personenbezogene Daten.', collocation: { de: 'personenbezogene Daten', ru: 'персональные данные' }, example: { de: 'Name und Adresse sind personenbezogene Daten.', ru: 'Имя и адрес — персональные данные.', cloze: 'personenbezogene' } },
    { id: 'cyb-a22-08-verarbeiten', icon: 'Cpu', de: 'verarbeiten', pos: 'verb', ru: 'обрабатывать', forms: 'er verarbeitet · hat verarbeitet', note: 'Приставка ver- неотделяемая. В DSGVO «обработка» (die Verarbeitung) — любое действие с данными: сбор, хранение, передача, удаление.', collocation: { de: 'Daten verarbeiten', ru: 'обрабатывать данные', accept: ['die Daten verarbeiten'] }, example: { de: 'Die Firma verarbeitet die Daten ihrer Kunden.', ru: 'Фирма обрабатывает данные своих клиентов.', cloze: 'verarbeitet' } },
    { id: 'cyb-a22-08-verantwortliche', icon: 'Building2', de: 'Verantwortliche', pos: 'noun', article: 'der', plural: 'Verantwortlichen', ru: 'ответственный (за обработку данных), контролёр данных', note: 'Субстантивированное прилагательное: der Verantwortliche, ein Verantwortlicher. В DSGVO — тот, кто решает, зачем и как обрабатываются данные (часто фирма).', example: { de: 'Der Verantwortliche muss die Daten schützen.', ru: 'Ответственный должен защищать данные.', cloze: 'Verantwortliche' } },
    { id: 'cyb-a22-08-betroffene', icon: 'User', de: 'Betroffene', pos: 'noun', article: 'der', plural: 'Betroffenen', ru: 'субъект данных; затронутый, пострадавший', note: 'Субстантивированное прилагательное: der/die Betroffene, ein Betroffener. В DSGVO — человек, чьи данные обрабатываются (die betroffene Person).', example: { de: 'Die Betroffenen haben viele Rechte.', ru: 'У субъектов данных много прав.', cloze: 'Betroffenen' } },
    { id: 'cyb-a22-08-zweck', icon: 'Target', de: 'Zweck', pos: 'noun', article: 'der', plural: 'Zwecke', ru: 'цель, назначение', note: 'Принцип DSGVO: die Zweckbindung — данные используются только для заявленной цели.', collocation: { de: 'für einen bestimmten Zweck', ru: 'для определённой цели', accept: ['zu einem bestimmten Zweck'] }, example: { de: 'Für welchen Zweck braucht ihr meine Daten?', ru: 'Для какой цели вам нужны мои данные?', cloze: 'Zweck' } },
    { id: 'cyb-a22-08-rechtsgrundlage', icon: 'Scale', de: 'Rechtsgrundlage', pos: 'noun', article: 'die', plural: 'Rechtsgrundlagen', ru: 'правовое основание', parts: ['Rechts', 'grundlage'], note: 'Recht + s + Grundlage (основа). Rechtsgrundlage für + Akk.', example: { de: 'Ohne Rechtsgrundlage ist die Verarbeitung verboten.', ru: 'Без правового основания обработка запрещена.', cloze: 'Rechtsgrundlage' } },
    { id: 'cyb-a22-08-zulaessig', icon: 'CircleCheck', de: 'zulässig', pos: 'adj', ru: 'допустимый, разрешённый (законом)', note: 'Антоним: unzulässig. Официальнее, чем erlaubt.', collocation: { de: 'rechtlich zulässig', ru: 'допустимо по закону', accept: ['gesetzlich zulässig'] }, example: { de: 'Ist eine Kamera im Büro zulässig?', ru: 'Допустима ли камера в офисе?', cloze: 'zulässig' } },

    { id: 'cyb-a22-08-datenpanne', icon: 'DatabaseZap', de: 'Datenpanne', pos: 'noun', article: 'die', plural: 'Datenpannen', ru: 'утечка данных, инцидент с данными', parts: ['Daten', 'panne'], note: 'Die Panne — сбой, поломка. Официальный термин DSGVO: Verletzung des Schutzes personenbezogener Daten.', collocation: { de: 'eine Datenpanne melden', ru: 'сообщить об утечке данных', accept: ['die Datenpanne melden'] }, example: { de: 'Nach der Datenpanne waren viele Kunden wütend.', ru: 'После утечки данных многие клиенты были в ярости.', cloze: 'Datenpanne' } },
    { id: 'cyb-a22-08-datenschutzbeauftragte', icon: 'ShieldCheck', de: 'Datenschutzbeauftragte', pos: 'noun', article: 'der', plural: 'Datenschutzbeauftragten', ru: 'уполномоченный по защите данных (DPO)', parts: ['Datenschutz', 'beauftragte'], note: 'Субстантивированное причастие: der Datenschutzbeauftragte, ein Datenschutzbeauftragter; женщина — die Datenschutzbeauftragte.', example: { de: 'Frag am besten unseren Datenschutzbeauftragten.', ru: 'Лучше всего спроси нашего уполномоченного по защите данных.', cloze: 'Datenschutzbeauftragten' } },
    { id: 'cyb-a22-08-aufsichtsbehoerde', icon: 'Landmark', de: 'Aufsichtsbehörde', pos: 'noun', article: 'die', plural: 'Aufsichtsbehörden', ru: 'надзорный орган', parts: ['Aufsichts', 'behörde'], note: 'Die Aufsicht — надзор, die Behörde — ведомство. В Австрии это die Datenschutzbehörde (DSB).', collocation: { de: 'sich bei der Aufsichtsbehörde beschweren', ru: 'пожаловаться в надзорный орган' }, example: { de: 'Die Aufsichtsbehörde prüft die Beschwerde.', ru: 'Надзорный орган проверяет жалобу.', cloze: 'Aufsichtsbehörde' } },
    { id: 'cyb-a22-08-bussgeld', icon: 'Gavel', de: 'Bußgeld', pos: 'noun', article: 'das', plural: 'Bußgelder', ru: 'штраф (денежный, административный)', parts: ['Buß', 'geld'], note: 'Die Buße — наказание, искупление. В тексте DSGVO: die Geldbuße; разговорно просто die Strafe.', collocation: { de: 'ein Bußgeld verhängen', ru: 'наложить штраф', accept: ['ein hohes Bußgeld verhängen'] }, example: { de: 'Die Firma musste ein hohes Bußgeld zahlen.', ru: 'Фирме пришлось заплатить большой штраф.', cloze: 'Bußgeld' } },
    { id: 'cyb-a22-08-auskunft', icon: 'FileQuestion', de: 'Auskunft', pos: 'noun', article: 'die', plural: 'Auskünfte', ru: 'информация, сведения (по запросу)', note: 'Auskunft über + Akk. Das Auskunftsrecht — право узнать, какие данные о тебе хранятся.', collocation: { de: 'Auskunft verlangen', ru: 'требовать предоставить сведения', accept: ['eine Auskunft verlangen'] }, example: { de: 'Jeder darf Auskunft über seine Daten verlangen.', ru: 'Каждый может потребовать сведения о своих данных.', cloze: 'Auskunft' } },
    { id: 'cyb-a22-08-loeschung', icon: 'Trash2', de: 'Löschung', pos: 'noun', article: 'die', plural: 'Löschungen', ru: 'удаление', note: 'От löschen. Das Recht auf Löschung — «право на забвение».', example: { de: 'Sie hat die Löschung ihres Kontos beantragt.', ru: 'Она подала заявку на удаление своего аккаунта.', cloze: 'Löschung' } },
    { id: 'cyb-a22-08-widersprechen', icon: 'MessageSquareX', de: 'widersprechen', pos: 'verb', ru: 'возражать, заявлять возражение', forms: 'er widerspricht · widersprach · hat widersprochen', note: 'widersprechen + Dat: der Werbung widersprechen. Приставка wider- здесь неотделяемая.', collocation: { de: 'der Verarbeitung widersprechen', ru: 'возразить против обработки', accept: ['der Werbung widersprechen'] }, example: { de: 'Ich widerspreche der Nutzung meiner Daten.', ru: 'Я возражаю против использования моих данных.', cloze: 'widerspreche' } },
    { id: 'cyb-a22-08-anonymisieren', icon: 'VenetianMask', imageQuery: 'blurred face', de: 'anonymisieren', pos: 'verb', ru: 'анонимизировать, обезличивать', forms: 'er anonymisiert · hat anonymisiert', note: 'Глагол на -ieren: Partizip без ge-. Ср. pseudonymisieren — заменить имя кодом.', example: { de: 'Für die Studie anonymisieren wir alle Namen.', ru: 'Для исследования мы анонимизируем все имена.', cloze: 'anonymisieren' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Datenschutz im Start-up',
      de: `Selin studiert Wirtschaftsinformatik an der TU Wien. Im Sommer arbeitet sie in einem kleinen Start-up, das eine App für Fitnessstudios entwickelt. In der ersten Woche hat ihr die Juristin Frau Hofbauer die DSGVO erklärt.

„Unsere App verarbeitet personenbezogene Daten: Namen, E-Mail-Adressen und Trainingszeiten“, sagte Frau Hofbauer. „Im Sinne der DSGVO ist unsere Firma der Verantwortliche. Die Kunden sind die Betroffenen.“

Selin wollte wissen, ob man einfach alle Daten sammeln darf. „Nein“, antwortete die Juristin. „Für jede Verarbeitung brauchen wir eine Rechtsgrundlage, zum Beispiel einen Vertrag oder eine Einwilligung. Außerdem müssen wir den Zweck genau festlegen. Daten für das Training dürfen wir nicht für Werbung benutzen.“

Am Ende fragte Selin: „Ist es zulässig, die Daten für immer zu speichern?“ – „Nein. Nur so lange, wie es für den Zweck nötig ist.“`,
      ru: `Селин изучает бизнес-информатику в Венском техническом университете. Летом она работает в небольшом стартапе, который разрабатывает приложение для фитнес-клубов. В первую неделю юристка госпожа Хофбауэр объяснила ей GDPR.

«Наше приложение обрабатывает персональные данные: имена, адреса электронной почты и время тренировок, — сказала госпожа Хофбауэр. — В смысле GDPR наша фирма — ответственный за обработку. Клиенты — субъекты данных».

Селин хотела знать, можно ли просто собирать все данные. «Нет, — ответила юристка. — Для каждой обработки нам нужно правовое основание, например договор или согласие. Кроме того, мы должны точно определить цель. Данные для тренировок мы не можем использовать для рекламы».

В конце Селин спросила: «Допустимо ли хранить данные вечно?» — «Нет. Только столько, сколько нужно для этой цели».`,
      gloss: {
        juristen: 'юристы, юристов',
        selin: 'Селин (имя)', hofbauer: 'Хофбауэр (фамилия)', wirtschaftsinformatik: 'бизнес-информатика', tu: 'TU — технический университет', wien: 'Вена',
        sommer: 'лето', arbeitet: 'работает', kleinen: 'небольшом', 'start-up': 'стартап', app: 'приложение', fitnessstudios: 'фитнес-клубы', entwickelt: 'разрабатывает',
        woche: 'неделя', juristin: 'юристка', unsere: 'наше, наша', namen: 'имена', 'e-mail-adressen': 'адреса электронной почты', trainingszeiten: 'время тренировок',
        sagte: 'сказала', sinne: 'смысл (im Sinne — в смысле)', firma: 'фирма', kunden: 'клиенты', wollte: 'хотела', sammeln: 'собирать', darf: 'можно, разрешено',
        antwortete: 'ответила', verarbeitung: 'обработка', brauchen: 'нужно, нуждаемся', vertrag: 'договор', einwilligung: 'согласие', außerdem: 'кроме того',
        festlegen: 'определить, установить', daten: 'данные', training: 'тренировка', dürfen: 'можем, имеем право', werbung: 'реклама', benutzen: 'использовать',
        fragte: 'спросила', speichern: 'хранить, сохранять', nötig: 'нужно, необходимо', lange: 'долго (so lange — столько)', entwickelte: 'разработала',
        verantwortliche: 'ответственный (за обработку)', schule: 'школа', programmiererin: 'программистка', webseite: 'сайт', 'universität': 'университет',
        neue: 'новая, новое', erlaubnis: 'разрешение', genau: 'ровно, точно', jahre: 'годы, лет', möchte: 'хочет',
      },
      questions: [
        { q: 'Was entwickelt das Start-up?', ru: 'Что разрабатывает стартап?', options: ['Eine App für Fitnessstudios', 'Eine App für die TU Wien', 'Eine Webseite für Juristen'], answer: 'Eine App für Fitnessstudios' },
        { q: 'Wer ist im Sinne der DSGVO der Verantwortliche?', ru: 'Кто в смысле GDPR является ответственным за обработку?', options: ['Die Firma', 'Die Kunden', 'Frau Hofbauer'], answer: 'Die Firma' },
        { q: 'Was braucht man für jede Verarbeitung?', ru: 'Что нужно для каждой обработки?', options: ['Eine Rechtsgrundlage', 'Eine neue App', 'Die Erlaubnis der Universität'], answer: 'Eine Rechtsgrundlage' },
        { q: 'Wie lange darf man die Daten speichern?', ru: 'Как долго можно хранить данные?', options: ['Nur so lange, wie es für den Zweck nötig ist.', 'Für immer.', 'So lange, wie die Firma möchte.'], answer: 'Nur so lange, wie es für den Zweck nötig ist.' },
      ],
      translate: [
        { de: 'Die App verarbeitet personenbezogene Daten.', ru: 'Приложение обрабатывает персональные данные.', wrongRu: ['Приложение собирает персональные данные.', 'Приложение не обрабатывает персональные данные.', 'Приложение обрабатывало персональные данные.'] },
        { de: 'Wir brauchen eine Rechtsgrundlage für die Verarbeitung.', ru: 'Нам нужно правовое основание для обработки.', wrongRu: ['Нам нужно согласие для обработки.', 'Нам не нужно правовое основание для обработки.'] },
        { de: 'Wir müssen den Zweck genau festlegen.', ru: 'Мы должны точно определить цель.', wrongRu: ['Мы можем точно определить цель.', 'Мы должны точно определить срок.', 'Мы должны были точно определить цель.'] },
      ],
    },
    {
      lesson: 1, title: 'Eine Datenpanne',
      de: `Zwei Monate später gab es ein Problem. Ein Mitarbeiter hatte eine Tabelle mit Kundendaten an eine falsche E-Mail-Adresse geschickt. Frau Hofbauer sagte sofort: „Das ist eine Datenpanne. Wir müssen den Datenschutzbeauftragten informieren.“

Der Datenschutzbeauftragte prüfte den Fall und meldete ihn bei der Aufsichtsbehörde. In Österreich ist das die Datenschutzbehörde. Wenn eine Firma eine Panne verschweigt, kann sie ein hohes Bußgeld bekommen.

Ein paar Tage danach schrieb eine Kundin an das Start-up. Sie verlangte Auskunft über ihre Daten und danach ihre Löschung. Außerdem widersprach sie der Werbung per E-Mail. Selin durfte bei der Antwort helfen.

Später sollte Selin alte Trainingsdaten für eine Statistik anonymisieren. „Ohne Namen sind es keine personenbezogenen Daten mehr“, erklärte Frau Hofbauer. „Dann ist die Statistik kein Risiko.“`,
      ru: `Два месяца спустя возникла проблема. Один сотрудник отправил таблицу с данными клиентов на неправильный адрес электронной почты. Госпожа Хофбауэр сразу сказала: «Это утечка данных. Мы должны сообщить уполномоченному по защите данных».

Уполномоченный по защите данных проверил случай и сообщил о нём в надзорный орган. В Австрии это Ведомство по защите данных. Если фирма скрывает такой инцидент, она может получить большой штраф.

Через несколько дней одна клиентка написала в стартап. Она потребовала сведения о своих данных, а затем их удаления. Кроме того, она возразила против рекламы по электронной почте. Селин разрешили помочь с ответом.

Позже Селин должна была анонимизировать старые данные о тренировках для статистики. «Без имён это больше не персональные данные, — объяснила госпожа Хофбауэр. — Тогда статистика не представляет риска».`,
      gloss: {
        selin: 'Селин (имя)', hofbauer: 'Хофбауэр (фамилия)', monate: 'месяцы, месяца', später: 'позже, спустя', mitarbeiter: 'сотрудник', tabelle: 'таблица',
        kundendaten: 'данные клиентов', falsche: 'неправильную', 'e-mail-adresse': 'адрес электронной почты', geschickt: 'отправил', sagte: 'сказала', informieren: 'сообщить, проинформировать',
        prüfte: 'проверил', fall: 'случай', meldete: 'сообщил', 'österreich': 'Австрия', datenschutzbehörde: 'Ведомство по защите данных (Австрия)', firma: 'фирма',
        panne: 'сбой, инцидент', verschweigt: 'скрывает, умалчивает', hohes: 'высокий, большой', paar: 'пара (ein paar — несколько)', schrieb: 'написала',
        kundin: 'клиентка', 'start-up': 'стартап', verlangte: 'потребовала', daten: 'данные', außerdem: 'кроме того', werbung: 'реклама', 'e-mail': 'электронная почта',
        durfte: 'разрешили, могла', antwort: 'ответ', sollte: 'должна была', trainingsdaten: 'данные о тренировках', statistik: 'статистика',
        namen: 'имена', risiko: 'риск', personenbezogenen: 'персональные', wer: 'кто', kunde: 'клиент', tage: 'дни', erklärte: 'объяснила', verlangt: 'потребовал(а)',
        neues: 'новый', passwort: 'пароль', strafe: 'наказание, штраф', aufgabe: 'задание', hat: 'имеет', bekommen: 'получить', geschickte: 'отправленная',
      },
      questions: [
        { q: 'Was hat der Mitarbeiter falsch gemacht?', ru: 'Что сотрудник сделал неправильно?', options: ['Er hat Kundendaten an eine falsche Adresse geschickt.', 'Er hat die Statistik gelöscht.', 'Er hat sein Passwort vergessen.'], answer: 'Er hat Kundendaten an eine falsche Adresse geschickt.' },
        { q: 'Wer hat die Datenpanne bei der Aufsichtsbehörde gemeldet?', ru: 'Кто сообщил об утечке данных в надзорный орган?', options: ['Der Datenschutzbeauftragte', 'Selin', 'Die Kundin'], answer: 'Der Datenschutzbeauftragte' },
        { q: 'Was hat die Kundin verlangt?', ru: 'Что потребовала клиентка?', options: ['Auskunft und die Löschung ihrer Daten', 'Ein neues Passwort', 'Mehr Werbung per E-Mail'], answer: 'Auskunft und die Löschung ihrer Daten' },
        { q: 'Warum soll Selin die Trainingsdaten anonymisieren?', ru: 'Почему Селин должна анонимизировать данные о тренировках?', options: ['Für eine Statistik', 'Für die Aufsichtsbehörde', 'Für die Werbung'], answer: 'Für eine Statistik' },
      ],
      translate: [
        { de: 'Wir müssen die Datenpanne sofort melden.', ru: 'Мы должны сразу сообщить об утечке данных.', wrongRu: ['Мы должны сразу устранить утечку данных.', 'Мы не должны сразу сообщать об утечке данных.', 'Мы должны позже сообщить об утечке данных.'] },
        { de: 'Die Firma kann ein hohes Bußgeld bekommen.', ru: 'Фирма может получить большой штраф.', wrongRu: ['Фирма должна получить большой штраф.', 'Фирма получила большой штраф.', 'Фирма может заплатить небольшой штраф.'] },
        { de: 'Sie verlangte Auskunft über ihre Daten.', ru: 'Она потребовала сведения о своих данных.', wrongRu: ['Она потребовала удаления своих данных.', 'Он потребовал сведения о своих данных.', 'Она требует сведения о своих данных.'] },
      ],
    },
  ],
};
