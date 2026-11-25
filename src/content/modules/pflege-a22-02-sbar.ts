import type { Module } from '../types.ts';

// A2.2 pflege 02: structured communication (SBAR) — situation, background, assessment, recommendation (lesson 0); calling the on-call doctor at night (lesson 1).

export const module: Module = {
  id: 'pflege-a22-02-sbar', sphere: 'pflege', level: 'A2.2',
  title: 'Klar kommunizieren: SBAR', subtitle: 'Структурированная передача информации: ситуация, предыстория, оценка, рекомендация — и звонок дежурному врачу ночью.',
  words: [
    { id: 'pfl-a22-02-schema', icon: 'LayoutList', de: 'Schema', pos: 'noun', article: 'das', plural: 'Schemata', ru: 'схема', note: 'Мн. ч. также die Schemas.', example: { de: 'Das SBAR-Schema hilft bei der Übergabe.', ru: 'Схема SBAR помогает при передаче смены.', cloze: 'Schema' } },
    { id: 'pfl-a22-02-situation', icon: 'CircleAlert', de: 'Situation', pos: 'noun', article: 'die', plural: 'Situationen', ru: 'ситуация', example: { de: 'Zuerst beschreibe ich kurz die Situation.', ru: 'Сначала я коротко описываю ситуацию.', cloze: 'Situation' } },
    { id: 'pfl-a22-02-hintergrund', icon: 'History', de: 'Hintergrund', pos: 'noun', article: 'der', plural: 'Hintergründe', ru: 'предыстория, фон', parts: ['Hinter', 'grund'], example: { de: 'Zum Hintergrund: Er wurde gestern operiert.', ru: 'Предыстория: его вчера прооперировали.', cloze: 'Hintergrund' } },
    { id: 'pfl-a22-02-einschaetzung', icon: 'Gauge', de: 'Einschätzung', pos: 'noun', article: 'die', plural: 'Einschätzungen', ru: 'оценка', example: { de: 'Meine Einschätzung: Es ist ernst.', ru: 'Моя оценка: это серьёзно.', cloze: 'Einschätzung' } },
    { id: 'pfl-a22-02-empfehlung', icon: 'Lightbulb', de: 'Empfehlung', pos: 'noun', article: 'die', plural: 'Empfehlungen', ru: 'рекомендация', example: { de: 'Meine Empfehlung: Bitte kommen Sie sofort.', ru: 'Моя рекомендация: пожалуйста, приходите немедленно.', cloze: 'Empfehlung' } },
    { id: 'pfl-a22-02-verschlechterung', icon: 'TrendingDown', de: 'Verschlechterung', pos: 'noun', article: 'die', plural: 'Verschlechterungen', ru: 'ухудшение', example: { de: 'Bei einer Verschlechterung rufe ich sofort an.', ru: 'При ухудшении я сразу звоню.', cloze: 'Verschlechterung' } },
    { id: 'pfl-a22-02-verstaendigen', icon: 'PhoneCall', de: 'verständigen', pos: 'verb', ru: 'уведомить, сообщить', forms: 'er verständigt · hat verständigt', example: { de: 'Ich habe den Arzt verständigt.', ru: 'Я сообщила врачу.', cloze: 'verständigt' } },
    { id: 'pfl-a22-02-dringend', icon: 'Siren', de: 'dringend', pos: 'adj', ru: 'срочный, срочно', example: { de: 'Es ist dringend.', ru: 'Это срочно.', cloze: 'dringend' } },

    { id: 'pfl-a22-02-bereitschaftsdienst', icon: 'PhoneIncoming', de: 'Bereitschaftsdienst', pos: 'noun', article: 'der', plural: 'Bereitschaftsdienste', ru: 'дежурство (врача на вызове)', parts: ['Bereitschafts', 'dienst'], example: { de: 'Nachts hat Doktor Wagner Bereitschaftsdienst.', ru: 'Ночью доктор Вагнер дежурит.', cloze: 'Bereitschaftsdienst' } },
    { id: 'pfl-a22-02-sauerstoffsaettigung', icon: 'Percent', de: 'Sauerstoffsättigung', pos: 'noun', article: 'die', ru: 'насыщение крови кислородом (сатурация)', parts: ['Sauerstoff', 'sättigung'], example: { de: 'Die Sauerstoffsättigung liegt bei achtundachtzig Prozent.', ru: 'Сатурация — восемьдесят восемь процентов.', cloze: 'Sauerstoffsättigung' } },
    { id: 'pfl-a22-02-atemnot', icon: 'Wind', de: 'Atemnot', pos: 'noun', article: 'die', ru: 'одышка, удушье', parts: ['Atem', 'not'], example: { de: 'Der Patient hat plötzlich Atemnot.', ru: 'У пациента внезапно одышка.', cloze: 'Atemnot' } },
    { id: 'pfl-a22-02-telefonat', icon: 'Phone', de: 'Telefonat', pos: 'noun', article: 'das', plural: 'Telefonate', ru: 'телефонный разговор', example: { de: 'Ich notiere das Telefonat in der Akte.', ru: 'Я записываю телефонный разговор в карту.', cloze: 'Telefonat' } },
    { id: 'pfl-a22-02-rueckruf', icon: 'PhoneForwarded', de: 'Rückruf', pos: 'noun', article: 'der', plural: 'Rückrufe', ru: 'обратный звонок', parts: ['Rück', 'ruf'], example: { de: 'Ich warte auf den Rückruf vom Arzt.', ru: 'Я жду, когда врач перезвонит.', cloze: 'Rückruf' } },
    { id: 'pfl-a22-02-praezise', icon: 'Crosshair', de: 'präzise', pos: 'adj', ru: 'точный, чёткий', example: { de: 'Sprich kurz und präzise.', ru: 'Говори коротко и чётко.', cloze: 'präzise' } },
    { id: 'pfl-a22-02-weiterleiten', icon: 'Forward', de: 'weiterleiten', pos: 'verb', ru: 'передавать дальше, пересылать', forms: 'er leitet weiter · hat weitergeleitet', example: { de: 'Ich leite die Information an den Spätdienst weiter.', ru: 'Я передам информацию вечерней смене.', cloze: 'leite' } },
    { id: 'pfl-a22-02-zusammenfassen', icon: 'ListCollapse', de: 'zusammenfassen', pos: 'verb', ru: 'подводить итог, резюмировать', forms: 'er fasst zusammen · hat zusammengefasst', example: { de: 'Kannst du das kurz zusammenfassen?', ru: 'Можешь коротко резюмировать?', cloze: 'zusammenfassen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Das SBAR-Schema',
      de: `In einer Fortbildung lernt Olena das SBAR-Schema. Es hilft, wichtige Informationen kurz und präzise weiterzuleiten, zum Beispiel bei der Übergabe oder am Telefon.

S steht für Situation: Was ist jetzt das Problem? B steht für Hintergrund: Welche Diagnose hat der Patient, was ist vorher passiert? A ist die Einschätzung: Was denke ich, wie ernst ist es? Und R ist die Empfehlung: Was soll jetzt passieren?

„Gerade für Menschen, die nicht in ihrer Muttersprache arbeiten, ist das Schema super“, sagt die Trainerin. „Man muss nicht lange nach Worten suchen, man folgt einfach der Struktur.“ Olena findet das sehr hilfreich.`,
      ru: `На курсе повышения квалификации Олена изучает схему SBAR. Она помогает коротко и чётко передавать важную информацию, например при передаче смены или по телефону.

S — это ситуация: в чём сейчас проблема? B — предыстория: какой у пациента диагноз, что случилось раньше? A — оценка: что я думаю, насколько это серьёзно? А R — рекомендация: что должно произойти сейчас?

«Особенно для тех, кто работает не на родном языке, эта схема — супер, — говорит тренер. — Не нужно долго подбирать слова, просто следуешь структуре». Олене это кажется очень полезным.`,
      gloss: { beschreibe: 'описываю', olena: 'Олена (имя)', vorher: 'раньше', menschen: 'люди', besonders: 'особенно', sprich: 'поговори!', fortbildung: 'курс повышения квалификации', lernt: 'изучает', 'sbar-schema': 'схема SBAR', sbar: 'SBAR (схема передачи информации)', informationen: 'информацию', weiterzuleiten: 'передавать', s: 'S (буква)', b: 'B (буква)', a: 'A (буква)', r: 'R (буква)', ernst: 'серьёзно', gerade: 'особенно, как раз', muttersprache: 'родной язык', super: 'супер', trainerin: 'тренер (женщина)', worten: 'слова', suchen: 'искать', folgt: 'следует', struktur: 'структура', hilfreich: 'полезный', steht: '(steht für) означает' },
      questions: [
        { q: 'Wofür steht das B?', ru: 'Что означает буква B?', options: ['Hintergrund', 'Bericht', 'Blutdruck'], answer: 'Hintergrund' },
        { q: 'Wann hilft das Schema?', ru: 'Когда помогает схема?', options: ['Bei der Übergabe und am Telefon', 'Nur beim Essen', 'Nur bei der Visite'], answer: 'Bei der Übergabe und am Telefon' },
        { q: 'Für wen ist das Schema besonders gut?', ru: 'Для кого схема особенно хороша?', options: ['Für Menschen, die nicht in ihrer Muttersprache arbeiten', 'Nur für Ärzte', 'Nur für Patienten'], answer: 'Für Menschen, die nicht in ihrer Muttersprache arbeiten' },
      ],
      translate: [
        { de: 'Zuerst beschreibe ich die Situation.', ru: 'Сначала я описываю ситуацию.', wrongRu: ['В конце я описываю ситуацию.', 'Сначала я даю рекомендацию.'] },
        { de: 'Meine Einschätzung: Es ist ernst.', ru: 'Моя оценка: это серьёзно.', wrongRu: ['Моя оценка: это не страшно.', 'Моя рекомендация: это серьёзно.'] },
        { de: 'Sprich kurz und präzise.', ru: 'Говори коротко и чётко.', wrongRu: ['Говори долго и подробно.', 'Пиши коротко и чётко.'] },
      ],
    },
    {
      lesson: 1, title: 'Ein Anruf in der Nacht',
      de: `Um drei Uhr nachts hat Herr Nowak plötzlich Atemnot. Seine Sauerstoffsättigung liegt bei achtundachtzig Prozent. Olena ruft Doktor Wagner an, der Bereitschaftsdienst hat.

„Hier ist Olena von Station drei. Situation: Herr Nowak, Zimmer fünf, hat seit zehn Minuten starke Atemnot, Sättigung achtundachtzig Prozent. Hintergrund: Er hatte vor drei Tagen eine Operation am Bein. Einschätzung: Ich habe Angst, dass es eine Lungenembolie ist. Empfehlung: Bitte kommen Sie sofort.“

Doktor Wagner sagt: „Verstanden, ich komme. Geben Sie ihm Sauerstoff.“ Nach dem Telefonat notiert Olena alles. Später sagt Doktor Wagner: „Sehr gut zusammengefasst. So konnte ich schnell reagieren.“`,
      ru: `В три часа ночи у господина Новака внезапно одышка. Сатурация — восемьдесят восемь процентов. Олена звонит доктору Вагнеру, который дежурит.

«Это Олена из третьего отделения. Ситуация: господин Новак, палата пять, уже десять минут сильная одышка, сатурация восемьдесят восемь процентов. Предыстория: три дня назад ему оперировали ногу. Оценка: боюсь, что это эмболия лёгочной артерии. Рекомендация: пожалуйста, приходите немедленно».

Доктор Вагнер говорит: «Понял, иду. Дайте ему кислород». После разговора Олена всё записывает. Позже доктор Вагнер говорит: «Очень хорошо изложено. Так я смог быстро отреагировать».`,
      gloss: { nachts: 'ночью', nowak: 'Новак (фамилия)', olena: 'Олена (имя)', doktor: 'доктор', wagner: 'Вагнер (фамилия)', starke: 'сильное', tagen: 'днях; (in drei Tagen) через три дня', olenas: 'Олены (чей?)', herrn: 'господину (дат.)', liegt: '(liegt bei) составляет', prozent: 'процентов', sättigung: 'сатурация', lungenembolie: 'тромбоэмболия лёгочной артерии', verstanden: 'понял', geben: 'дайте', zusammengefasst: 'изложено, резюмировано', konnte: 'смог', reagieren: 'реагировать', achtundachtzig: 'восемьдесят восемь' },
      questions: [
        { q: 'Was hat Herr Nowak?', ru: 'Что у господина Новака?', options: ['Starke Atemnot', 'Fieber', 'Bauchschmerzen'], answer: 'Starke Atemnot' },
        { q: 'Was ist Olenas Empfehlung?', ru: 'Какая рекомендация у Олены?', options: ['Der Arzt soll sofort kommen.', 'Sie wartet bis morgen.', 'Herr Nowak soll schlafen.'], answer: 'Der Arzt soll sofort kommen.' },
        { q: 'Was soll Olena Herrn Nowak geben?', ru: 'Что Олена должна дать господину Новаку?', options: ['Sauerstoff', 'Wasser', 'Ein Schmerzmittel'], answer: 'Sauerstoff' },
      ],
      translate: [
        { de: 'Der Patient hat plötzlich Atemnot.', ru: 'У пациента внезапно одышка.', wrongRu: ['У пациента внезапно жар.', 'Пациент внезапно уснул.'] },
        { de: 'Ich habe den Arzt verständigt.', ru: 'Я сообщила врачу.', wrongRu: ['Я не стала звонить врачу.', 'Врач сообщил мне.'] },
        { de: 'Ich warte auf den Rückruf.', ru: 'Я жду обратного звонка.', wrongRu: ['Я сама перезвоню.', 'Я жду врача в палате.'] },
      ],
    },
  ],
};
