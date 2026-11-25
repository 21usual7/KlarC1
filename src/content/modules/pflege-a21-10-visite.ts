import type { Module } from '../types.ts';

// A2.1 pflege 10: the ward round — findings, diagnosis, tests (lesson 0); orders, follow-up questions, discharge (lesson 1).

export const module: Module = {
  id: 'pflege-a21-10-visite', sphere: 'pflege', level: 'A2.1',
  title: 'Die Visite', subtitle: 'Врачебный обход: результаты анализов, диагноз, назначения, уточняющие вопросы и выписка.',
  words: [
    { id: 'pfl-a21-10-oberarzt', icon: 'Stethoscope', de: 'Oberarzt', pos: 'noun', article: 'der', plural: 'Oberärzte', ru: 'старший врач (заведующий отделением)', parts: ['Ober', 'arzt'], note: 'Женщина — die Oberärztin. der Chefarzt — главврач отделения.', example: { de: 'Der Oberarzt macht heute die große Visite.', ru: 'Старший врач сегодня проводит большой обход.', cloze: 'Oberarzt' } },
    { id: 'pfl-a21-10-befund', icon: 'FileSearch', de: 'Befund', pos: 'noun', article: 'der', plural: 'Befunde', ru: 'результат обследования, заключение', example: { de: 'Der Befund vom Labor ist da.', ru: 'Результат из лаборатории пришёл.', cloze: 'Befund' } },
    { id: 'pfl-a21-10-diagnose', icon: 'ClipboardCheck', de: 'Diagnose', pos: 'noun', article: 'die', plural: 'Diagnosen', ru: 'диагноз', example: { de: 'Die Diagnose ist noch nicht sicher.', ru: 'Диагноз ещё не точный.', cloze: 'Diagnose' } },
    { id: 'pfl-a21-10-untersuchung', icon: 'ScanSearch', de: 'Untersuchung', pos: 'noun', article: 'die', plural: 'Untersuchungen', ru: 'обследование, осмотр', example: { de: 'Morgen hat er eine Untersuchung.', ru: 'Завтра у него обследование.', cloze: 'Untersuchung' } },
    { id: 'pfl-a21-10-roentgen', icon: 'Scan', de: 'Röntgen', pos: 'noun', article: 'das', ru: 'рентген', note: 'röntgen — делать рентген: Wir röntgen die Lunge.', example: { de: 'Das Röntgen zeigt keine Entzündung.', ru: 'Рентген не показывает воспаления.', cloze: 'Röntgen' } },
    { id: 'pfl-a21-10-ultraschall', icon: 'Radio', de: 'Ultraschall', pos: 'noun', article: 'der', ru: 'УЗИ, ультразвук', parts: ['Ultra', 'schall'], example: { de: 'Wir machen einen Ultraschall vom Bauch.', ru: 'Мы сделаем УЗИ живота.', cloze: 'Ultraschall' } },
    { id: 'pfl-a21-10-labor', icon: 'FlaskConical', de: 'Labor', pos: 'noun', article: 'das', plural: 'Labore', ru: 'лаборатория', example: { de: 'Das Blut geht ins Labor.', ru: 'Кровь отправляют в лабораторию.', cloze: 'Labor' } },
    { id: 'pfl-a21-10-blutwert', icon: 'Droplet', de: 'Blutwert', pos: 'noun', article: 'der', plural: 'Blutwerte', ru: 'показатель анализа крови', parts: ['Blut', 'wert'], example: { de: 'Die Blutwerte sind besser geworden.', ru: 'Показатели крови улучшились.', cloze: 'Blutwerte' } },

    { id: 'pfl-a21-10-anordnen', icon: 'Megaphone', de: 'anordnen', pos: 'verb', ru: 'назначать, распоряжаться', forms: 'er ordnet an · hat angeordnet', example: { de: 'Der Arzt ordnet ein Röntgen an.', ru: 'Врач назначает рентген.', cloze: 'ordnet' } },
    { id: 'pfl-a21-10-anordnung', icon: 'ListChecks', de: 'Anordnung', pos: 'noun', article: 'die', plural: 'Anordnungen', ru: 'назначение, распоряжение (врача)', example: { de: 'Die Anordnungen stehen in der Akte.', ru: 'Назначения записаны в карте.', cloze: 'Anordnungen' } },
    { id: 'pfl-a21-10-rueckfrage', icon: 'MessageCircleQuestion', de: 'Rückfrage', pos: 'noun', article: 'die', plural: 'Rückfragen', ru: 'уточняющий вопрос', parts: ['Rück', 'frage'], example: { de: 'Ich habe noch eine Rückfrage.', ru: 'У меня ещё один уточняющий вопрос.', cloze: 'Rückfrage' } },
    { id: 'pfl-a21-10-besprechen', icon: 'MessagesSquare', de: 'besprechen', pos: 'verb', ru: 'обсуждать', forms: 'er bespricht · hat besprochen', example: { de: 'Das besprechen wir nach der Visite.', ru: 'Это мы обсудим после обхода.', cloze: 'besprechen' } },
    { id: 'pfl-a21-10-verlauf', icon: 'ChartLine', de: 'Verlauf', pos: 'noun', article: 'der', plural: 'Verläufe', ru: 'течение (болезни), ход', example: { de: 'Der Verlauf ist positiv.', ru: 'Течение болезни положительное.', cloze: 'Verlauf' } },
    { id: 'pfl-a21-10-entlassung', icon: 'LogOut', de: 'Entlassung', pos: 'noun', article: 'die', plural: 'Entlassungen', ru: 'выписка', example: { de: 'Die Entlassung ist für Freitag geplant.', ru: 'Выписка запланирована на пятницу.', cloze: 'Entlassung' } },
    { id: 'pfl-a21-10-patientenakte', icon: 'FolderOpen', de: 'Patientenakte', pos: 'noun', article: 'die', plural: 'Patientenakten', ru: 'медицинская карта пациента', parts: ['Patienten', 'akte'], example: { de: 'Alles steht in der Patientenakte.', ru: 'Всё записано в карте пациента.', cloze: 'Patientenakte' } },
    { id: 'pfl-a21-10-positiv', icon: 'ThumbsUp', de: 'positiv', pos: 'adj', ru: 'положительный', note: 'В медицине «positiv» у теста = найдено (не всегда хорошо!).', example: { de: 'Der Test ist leider positiv.', ru: 'Тест, к сожалению, положительный.', cloze: 'positiv' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die große Visite',
      de: `Jeden Mittwoch ist große Visite. Der Oberarzt, Doktor Wagner und Olena gehen von Zimmer zu Zimmer. Olena bringt die Patientenakten mit.

Bei Herrn Nowak sagt der Oberarzt: „Die Befunde vom Labor sind da. Die Blutwerte sind besser geworden. Auch das Röntgen von der Lunge zeigt keine Entzündung mehr.“

Bei Frau Wolf ist die Diagnose noch nicht sicher. Sie hat oft Bauchschmerzen. „Wir brauchen noch eine Untersuchung“, sagt der Oberarzt. „Morgen machen wir einen Ultraschall vom Bauch.“ Olena notiert alles, damit der Spätdienst Bescheid weiß.`,
      ru: `Каждую среду большой обход. Старший врач, доктор Вагнер и Олена ходят из палаты в палату. Олена носит с собой карты пациентов.

У господина Новака старший врач говорит: «Результаты из лаборатории пришли. Показатели крови улучшились. И рентген лёгких больше не показывает воспаления».

У госпожи Вольф диагноз пока не точный. У неё часто болит живот. «Нам нужно ещё одно обследование, — говорит старший врач. — Завтра сделаем УЗИ живота». Олена всё записывает, чтобы вечерняя смена была в курсе.`,
      gloss: { wagner: 'Вагнер (фамилия)', olena: 'Олена (имя)', nowak: 'Новак (фамилия)', wolf: 'Вольф (фамилия)', doktor: 'доктор', herrn: 'господина (дат.)', frau: 'госпожа', jeden: 'каждую', mittwoch: 'среда', ist: 'есть, бывает', große: 'большой', visite: 'обход', gehen: 'ходят', von: 'от, из', zimmer: 'палата', zu: 'в, к', bringt: '(bringt … mit) приносит с собой', mit: '(bringt … mit) с собой', bei: 'у', sagt: 'говорит', vom: 'из (von + dem)', da: 'здесь; (sind da) пришли', besser: 'лучше', geworden: 'стали', auch: 'также', lunge: 'лёгкие', zeigt: 'показывает', keine: 'никакого', entzündung: 'воспаление', mehr: '(keine … mehr) больше не', noch: 'ещё', nicht: 'не', sicher: 'точный, определённый', hat: 'имеет', oft: 'часто', bauchschmerzen: 'боли в животе', brauchen: 'нужно', eine: 'одно', morgen: 'завтра', machen: 'сделаем', bauch: 'живот', notiert: 'записывает', alles: 'всё', damit: 'чтобы', spätdienst: 'вечерняя смена', bescheid: '(Bescheid wissen) быть в курсе', weiß: 'знает', was: 'что', wann: 'когда', wer: 'кто', wie: 'как', welche: 'какое', montag: 'понедельник', freitag: 'пятница', tom: 'Том (имя)', sabine: 'Сабина (имя)', herz: 'сердце', kopf: 'голова' },
      questions: [
        { q: 'Wann ist die große Visite?', ru: 'Когда большой обход?', options: ['Jeden Mittwoch', 'Jeden Montag', 'Jeden Freitag'], answer: 'Jeden Mittwoch' },
        { q: 'Was zeigt das Röntgen von Herrn Nowak?', ru: 'Что показывает рентген господина Новака?', options: ['Keine Entzündung mehr', 'Eine Entzündung', 'Ein Problem mit dem Herz'], answer: 'Keine Entzündung mehr' },
        { q: 'Welche Untersuchung bekommt Frau Wolf?', ru: 'Какое обследование будет у госпожи Вольф?', options: ['Einen Ultraschall vom Bauch', 'Ein Röntgen vom Kopf', 'Einen Abstrich'], answer: 'Einen Ultraschall vom Bauch' },
      ],
      translate: [
        { de: 'Die Blutwerte sind besser geworden.', ru: 'Показатели крови улучшились.', wrongRu: ['Показатели крови ухудшились.', 'Показатели давления улучшились.'] },
        { de: 'Die Diagnose ist noch nicht sicher.', ru: 'Диагноз пока не точный.', wrongRu: ['Диагноз уже точный.', 'Обследование пока не закончено.'] },
        { de: 'Wir brauchen noch eine Untersuchung.', ru: 'Нам нужно ещё одно обследование.', wrongRu: ['Нам больше не нужны обследования.', 'Нам нужен ещё один врач.'] },
      ],
    },
    {
      lesson: 1, title: 'Fragen nach der Visite',
      de: `Nach der Visite gibt es viele neue Anordnungen. Olena liest sie in der Akte und hat eine Rückfrage: „Doktor Wagner, Sie haben bei Herrn Becker ein neues Schmerzmittel angeordnet. Soll ich das alte absetzen?“ – „Ja, bitte. Gut, dass Sie fragen.“

Dann besprechen sie den Verlauf bei Herrn Nowak. Er hat keine Beschwerden mehr. „Der Verlauf ist sehr positiv“, sagt Doktor Wagner. „Die Entlassung planen wir für Freitag.“

Olena informiert Herrn Nowak. Er freut sich sehr. „Endlich nach Hause!“, sagt er. „Aber vorher muss der Hausarzt den Entlassungsbrief bekommen“, erklärt Olena.`,
      ru: `После обхода появляется много новых назначений. Олена читает их в карте, и у неё есть уточняющий вопрос: «Доктор Вагнер, вы назначили господину Беккеру новое обезболивающее. Старое мне отменить?» — «Да, пожалуйста. Хорошо, что вы спросили».

Потом они обсуждают течение болезни господина Новака. У него больше нет жалоб. «Течение очень положительное, — говорит доктор Вагнер. — Выписку планируем на пятницу».

Олена сообщает об этом господину Новаку. Он очень рад. «Наконец-то домой!» — говорит он. «Но сначала семейный врач должен получить выписной эпикриз», — объясняет Олена.`,
      gloss: { geplant: 'запланирована', olena: 'Олена (имя)', wagner: 'Вагнер (фамилия)', becker: 'Беккер (фамилия)', nowak: 'Новак (фамилия)', doktor: 'доктор', herrn: 'господину, господина', nach: 'после; (nach Hause) домой', gibt: '(es gibt) есть, появляется', viele: 'много', neue: 'новых', liest: 'читает', sie: 'их; вы', akte: 'карта (документ)', hat: 'имеет', haben: 'вспом. глагол', bei: 'у, для', neues: 'новое', schmerzmittel: 'обезболивающее', angeordnet: 'назначили', soll: 'должна, нужно', alte: 'старое', absetzen: 'отменить', bitte: 'пожалуйста', gut: 'хорошо', dass: 'что', fragen: 'спрашиваете', dann: 'потом', keine: 'никаких', beschwerden: 'жалобы', mehr: '(keine … mehr) больше нет', sagt: 'говорит', planen: 'планируем', für: 'на', freitag: 'пятница', informiert: 'сообщает, информирует', freut: '(freut sich) радуется', sich: 'себя, -ся', sehr: 'очень', endlich: 'наконец', hause: '(nach Hause) домой', aber: 'но', vorher: 'сначала, перед этим', muss: 'должен', hausarzt: 'семейный врач', entlassungsbrief: 'выписной эпикриз', bekommen: 'получить', erklärt: 'объясняет', was: 'что', wann: 'когда', wer: 'кто', wie: 'как, какой', montag: 'понедельник', sonntag: 'воскресенье', negativ: 'отрицательный', schlecht: 'плохой', schmerzen: 'боли', fieber: 'жар' },
      questions: [
        { q: 'Was fragt Olena den Arzt?', ru: 'О чём Олена спрашивает врача?', options: ['Ob sie das alte Schmerzmittel absetzen soll', 'Wann die Visite ist', 'Wo die Akte ist'], answer: 'Ob sie das alte Schmerzmittel absetzen soll' },
        { q: 'Wie ist der Verlauf bei Herrn Nowak?', ru: 'Какое течение болезни у господина Новака?', options: ['Sehr positiv', 'Negativ', 'Schlecht'], answer: 'Sehr positiv' },
        { q: 'Wann ist die Entlassung geplant?', ru: 'На когда запланирована выписка?', options: ['Für Freitag', 'Für Montag', 'Für Sonntag'], answer: 'Für Freitag' },
      ],
      translate: [
        { de: 'Ich habe noch eine Rückfrage.', ru: 'У меня ещё один уточняющий вопрос.', wrongRu: ['У меня больше нет вопросов.', 'У меня ещё одна просьба.'] },
        { de: 'Das besprechen wir nach der Visite.', ru: 'Это мы обсудим после обхода.', wrongRu: ['Это мы обсудим перед обходом.', 'Это мы обсудим завтра.'] },
        { de: 'Die Entlassung ist für Freitag geplant.', ru: 'Выписка запланирована на пятницу.', wrongRu: ['Операция запланирована на пятницу.', 'Выписка была в пятницу.'] },
      ],
    },
  ],
};
