import type { Module } from '../types.ts';

// A2.2 pflege 07: before and after surgery — consent, anaesthesia, checklist (lesson 0); recovery room, thrombosis, pain pump (lesson 1).

export const module: Module = {
  id: 'pflege-a22-07-op', sphere: 'pflege', level: 'A2.2',
  title: 'Vor und nach der Operation', subtitle: 'Подготовка к операции: согласие, наркоз, чек-лист; после — палата пробуждения, тромбоз и обезболивание.',
  words: [
    { id: 'pfl-a22-07-eingriff', icon: 'Scissors', de: 'Eingriff', pos: 'noun', article: 'der', plural: 'Eingriffe', ru: 'вмешательство, операция', example: { de: 'Der Eingriff dauert etwa eine Stunde.', ru: 'Вмешательство длится около часа.', cloze: 'Eingriff' } },
    { id: 'pfl-a22-07-narkose', icon: 'Moon', de: 'Narkose', pos: 'noun', article: 'die', plural: 'Narkosen', ru: 'наркоз', note: 'die Vollnarkose — общий наркоз; die örtliche Betäubung — местная анестезия.', example: { de: 'Sie bekommen eine Vollnarkose.', ru: 'Вам сделают общий наркоз.', cloze: 'narkose' } },
    { id: 'pfl-a22-07-aufklaerung', icon: 'Info', de: 'Aufklärung', pos: 'noun', article: 'die', plural: 'Aufklärungen', ru: 'разъяснение (о рисках операции)', example: { de: 'Der Arzt macht die Aufklärung vor der Operation.', ru: 'Врач разъясняет риски перед операцией.', cloze: 'Aufklärung' } },
    { id: 'pfl-a22-07-einwilligung', icon: 'FileCheck', de: 'Einwilligung', pos: 'noun', article: 'die', plural: 'Einwilligungen', ru: 'согласие (письменное)', example: { de: 'Ohne Einwilligung keine Operation.', ru: 'Без согласия — никакой операции.', cloze: 'Einwilligung' } },
    { id: 'pfl-a22-07-schmuck', icon: 'Gem', de: 'Schmuck', pos: 'noun', article: 'der', ru: 'украшения', note: 'Без мн. ч.', example: { de: 'Bitte legen Sie allen Schmuck ab.', ru: 'Пожалуйста, снимите все украшения.', cloze: 'Schmuck' } },
    { id: 'pfl-a22-07-prothese', icon: 'Bone', de: 'Prothese', pos: 'noun', article: 'die', plural: 'Prothesen', ru: 'протез', example: { de: 'Tragen Sie eine Prothese oder ein Hörgerät?', ru: 'Вы носите протез или слуховой аппарат?', cloze: 'Prothese' } },
    { id: 'pfl-a22-07-kontaktlinse', icon: 'Eye', de: 'Kontaktlinse', pos: 'noun', article: 'die', plural: 'Kontaktlinsen', ru: 'контактная линза', parts: ['Kontakt', 'linse'], example: { de: 'Kontaktlinsen müssen vor der OP raus.', ru: 'Контактные линзы перед операцией нужно снять.', cloze: 'Kontaktlinsen' } },
    { id: 'pfl-a22-07-checkliste', icon: 'ListChecks', de: 'Checkliste', pos: 'noun', article: 'die', plural: 'Checklisten', ru: 'чек-лист, контрольный список', example: { de: 'Wir gehen die Checkliste zusammen durch.', ru: 'Мы вместе пройдём по чек-листу.', cloze: 'Checkliste' } },

    { id: 'pfl-a22-07-aufwachraum', icon: 'BedSingle', de: 'Aufwachraum', pos: 'noun', article: 'der', plural: 'Aufwachräume', ru: 'палата пробуждения', parts: ['Aufwach', 'raum'], example: { de: 'Nach der OP liegt er eine Stunde im Aufwachraum.', ru: 'После операции он час лежит в палате пробуждения.', cloze: 'Aufwachraum' } },
    { id: 'pfl-a22-07-aufwachen', icon: 'Sunrise', de: 'aufwachen', pos: 'verb', ru: 'просыпаться', forms: 'er wacht auf · ist aufgewacht', example: { de: 'Er ist gut aus der Narkose aufgewacht.', ru: 'Он хорошо проснулся после наркоза.', cloze: 'aufgewacht' } },
    { id: 'pfl-a22-07-kreislauf', icon: 'RefreshCw', de: 'Kreislauf', pos: 'noun', article: 'der', ru: 'кровообращение', note: 'Kreislaufprobleme — проблемы с давлением, головокружение.', example: { de: 'Der Kreislauf ist noch schwach.', ru: 'Кровообращение ещё слабое.', cloze: 'Kreislauf' } },
    { id: 'pfl-a22-07-ueberwachung', icon: 'MonitorDot', de: 'Überwachung', pos: 'noun', article: 'die', ru: 'наблюдение, мониторинг', example: { de: 'Nach der OP ist eine enge Überwachung wichtig.', ru: 'После операции важно тщательное наблюдение.', cloze: 'Überwachung' } },
    { id: 'pfl-a22-07-thrombose', icon: 'Droplet', de: 'Thrombose', pos: 'noun', article: 'die', plural: 'Thrombosen', ru: 'тромбоз', example: { de: 'Bewegung schützt vor einer Thrombose.', ru: 'Движение защищает от тромбоза.', cloze: 'Thrombose' } },
    { id: 'pfl-a22-07-thrombosestruempfe', icon: 'Footprints', imageQuery: 'compression stockings', de: 'Thrombosestrümpfe', pos: 'noun', article: 'die', pluralOnly: true, ru: 'компрессионные чулки', parts: ['Thrombose', 'strümpfe'], example: { de: 'Ich ziehe Ihnen die Thrombosestrümpfe an.', ru: 'Я надену вам компрессионные чулки.', cloze: 'Thrombosestrümpfe' } },
    { id: 'pfl-a22-07-schmerzpumpe', icon: 'Syringe', de: 'Schmerzpumpe', pos: 'noun', article: 'die', plural: 'Schmerzpumpen', ru: 'обезболивающая помпа', parts: ['Schmerz', 'pumpe'], note: 'Пациент сам нажимает кнопку и получает дозу.', example: { de: 'Mit der Schmerzpumpe kann er selbst eine Dosis geben.', ru: 'С помпой он может сам дать себе дозу.', cloze: 'Schmerzpumpe' } },
    { id: 'pfl-a22-07-op-hemd', icon: 'Shirt', de: 'OP-Hemd', pos: 'noun', article: 'das', plural: 'OP-Hemden', ru: 'операционная рубашка', example: { de: 'Ziehen Sie bitte das OP-Hemd an.', ru: 'Наденьте, пожалуйста, операционную рубашку.', cloze: 'OP-Hemd' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die Checkliste',
      de: `Morgen bekommt Frau Wolf ein neues Kniegelenk. Gestern hat der Arzt die Aufklärung gemacht: Er hat den Eingriff und die Risiken erklärt. Frau Wolf hat die Einwilligung unterschrieben. Auch der Narkosearzt war da.

Am Morgen der Operation geht Olena mit Frau Wolf die Checkliste durch. „Sind Sie nüchtern? Haben Sie seit Mitternacht nichts gegessen?“ – „Ja.“ – „Tragen Sie Schmuck, eine Prothese oder Kontaktlinsen?“ Frau Wolf gibt Olena ihren Ring und ihre Zahnprothese.

Dann zieht Frau Wolf das OP-Hemd an. Olena zieht ihr Thrombosestrümpfe an und kontrolliert das Armband mit ihrem Namen. Um acht Uhr bringt Tom sie in den OP.`,
      ru: `Завтра госпоже Вольф поставят новый коленный сустав. Вчера врач провёл разъяснение: объяснил вмешательство и риски. Госпожа Вольф подписала согласие. Приходил и анестезиолог.

Утром в день операции Олена проходит с госпожой Вольф по чек-листу. «Вы натощак? С полуночи ничего не ели?» — «Да». — «На вас есть украшения, протез или контактные линзы?» Госпожа Вольф отдаёт Олене кольцо и зубной протез.

Потом госпожа Вольф надевает операционную рубашку. Олена надевает ей компрессионные чулки и проверяет браслет с её именем. В восемь часов Том отвозит её в операционную.`,
      gloss: { hüfte: 'бедро, тазобедренный сустав', olena: 'Олена (имя)', tom: 'Том (имя)', wolf: 'Вольф (фамилия)', kniegelenk: 'коленный сустав', risiken: 'риски', narkosearzt: 'анестезиолог', mitternacht: 'полночь', ring: 'кольцо', armband: 'браслет', op: 'операционная; операция', durch: '(geht … durch) проходит по' },
      questions: [
        { q: 'Was bekommt Frau Wolf morgen?', ru: 'Что поставят госпоже Вольф завтра?', options: ['Ein neues Kniegelenk', 'Eine neue Hüfte', 'Eine Zahnprothese'], answer: 'Ein neues Kniegelenk' },
        { q: 'Was hat Frau Wolf unterschrieben?', ru: 'Что подписала госпожа Вольф?', options: ['Die Einwilligung', 'Den Dienstplan', 'Ein Rezept'], answer: 'Die Einwilligung' },
        { q: 'Was gibt Frau Wolf Olena?', ru: 'Что госпожа Вольф отдаёт Олене?', options: ['Ihren Ring und ihre Zahnprothese', 'Ihre Brille', 'Ihr Handy'], answer: 'Ihren Ring und ihre Zahnprothese' },
      ],
      translate: [
        { de: 'Ohne Einwilligung keine Operation.', ru: 'Без согласия — никакой операции.', wrongRu: ['Без наркоза — никакой операции.', 'С согласием можно не оперировать.'] },
        { de: 'Bitte legen Sie allen Schmuck ab.', ru: 'Пожалуйста, снимите все украшения.', wrongRu: ['Пожалуйста, наденьте украшения.', 'Пожалуйста, снимите всю одежду.'] },
        { de: 'Wir gehen die Checkliste durch.', ru: 'Мы проходим по чек-листу.', wrongRu: ['Мы пишем чек-лист.', 'Мы забываем чек-лист.'] },
      ],
    },
    {
      lesson: 1, title: 'Nach der Operation',
      de: `Die Operation ist gut gelaufen. Frau Wolf liegt noch eine Stunde im Aufwachraum. Dort ist die Überwachung besonders eng: Blutdruck, Puls und Sauerstoff werden ständig gemessen.

Am Nachmittag kommt sie zurück auf Station drei. Sie ist gut aufgewacht, aber ihr Kreislauf ist noch schwach. Beim ersten Aufstehen wird ihr schwindlig. „Langsam, Frau Wolf“, sagt Olena.

Gegen die Schmerzen hat sie eine Schmerzpumpe. Wenn es wehtut, drückt sie auf einen Knopf und bekommt eine kleine Dosis. Wichtig ist jetzt auch die Bewegung: Sie soll die Füße oft bewegen, damit sie keine Thrombose bekommt.`,
      ru: `Операция прошла хорошо. Госпожа Вольф ещё час лежит в палате пробуждения. Там наблюдение особенно тщательное: давление, пульс и кислород измеряют постоянно.

Днём её возвращают в третье отделение. Она хорошо проснулась, но кровообращение ещё слабое. Когда она впервые встаёт, у неё кружится голова. «Медленно, госпожа Вольф», — говорит Олена.

От боли у неё обезболивающая помпа. Когда болит, она нажимает кнопку и получает небольшую дозу. Сейчас важно и движение: ей нужно часто двигать стопами, чтобы не возник тромбоз.`,
      gloss: { wehtut: 'болит', bewegung: 'движение', besonders: 'особенно', nachmittag: 'вторая половина дня', olena: 'Олена (имя)', füße: 'ноги, стопы', hin: '(legt … hin) кладёт, стелет', wolf: 'Вольф (фамилия)', gelaufen: '(ist gut gelaufen) прошла хорошо', eng: 'тщательный, плотный', ständig: 'постоянно', gemessen: 'измеряются', zurück: 'обратно', ersten: 'первом', knopf: 'кнопка' },
      questions: [
        { q: 'Wie lange liegt Frau Wolf im Aufwachraum?', ru: 'Сколько госпожа Вольф лежит в палате пробуждения?', options: ['Eine Stunde', 'Einen Tag', 'Zehn Minuten'], answer: 'Eine Stunde' },
        { q: 'Was passiert beim ersten Aufstehen?', ru: 'Что происходит, когда она впервые встаёт?', options: ['Ihr wird schwindlig.', 'Sie fällt hin.', 'Sie hat keine Probleme.'], answer: 'Ihr wird schwindlig.' },
        { q: 'Warum soll sie die Füße bewegen?', ru: 'Зачем ей двигать стопами?', options: ['Damit sie keine Thrombose bekommt', 'Damit sie besser schläft', 'Weil die Füße kalt sind'], answer: 'Damit sie keine Thrombose bekommt' },
      ],
      translate: [
        { de: 'Sie ist gut aus der Narkose aufgewacht.', ru: 'Она хорошо проснулась после наркоза.', wrongRu: ['Она ещё не проснулась после наркоза.', 'Она плохо перенесла наркоз.'] },
        { de: 'Der Kreislauf ist noch schwach.', ru: 'Кровообращение ещё слабое.', wrongRu: ['Кровообращение уже в норме.', 'Дыхание ещё слабое.'] },
        { de: 'Bewegung schützt vor einer Thrombose.', ru: 'Движение защищает от тромбоза.', wrongRu: ['Движение вызывает тромбоз.', 'Лекарство защищает от тромбоза.'] },
      ],
    },
  ],
};
