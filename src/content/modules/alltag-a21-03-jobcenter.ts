import type { Module } from '../types.ts';

// A2.1 alltag 03: job centre and job search — benefits, adviser, applications (lesson 0); full-time, part-time, interview (lesson 1).

export const module: Module = {
  id: 'alltag-a21-03-jobcenter', sphere: 'alltag', level: 'A2.1',
  title: 'Jobcenter und Arbeitssuche', subtitle: 'Jobcenter и поиск работы: пособие, консультант, отклики, полная и частичная занятость, собеседование.',
  words: [
    { id: 'all-a21-03-jobcenter', icon: 'Building2', de: 'Jobcenter', pos: 'noun', article: 'das', plural: 'Jobcenter', ru: 'Jobcenter (центр занятости, выплачивает пособие)', example: { de: 'Morgen habe ich einen Termin im Jobcenter.', ru: 'Завтра у меня приём в Jobcenter.', cloze: 'Jobcenter' } },
    { id: 'all-a21-03-arbeitsagentur', icon: 'Building', de: 'Arbeitsagentur', pos: 'noun', article: 'die', plural: 'Arbeitsagenturen', ru: 'агентство по труду', parts: ['Arbeits', 'agentur'], note: 'Полностью: Agentur für Arbeit.', example: { de: 'Die Arbeitsagentur hilft bei der Jobsuche.', ru: 'Агентство по труду помогает в поиске работы.', cloze: 'Arbeitsagentur' } },
    { id: 'all-a21-03-arbeitslos', icon: 'UserMinus', de: 'arbeitslos', pos: 'adj', ru: 'безработный', example: { de: 'Ich bin seit drei Monaten arbeitslos.', ru: 'Я безработный уже три месяца.', cloze: 'arbeitslos' } },
    { id: 'all-a21-03-buergergeld', icon: 'Euro', de: 'Bürgergeld', pos: 'noun', article: 'das', ru: 'гражданское пособие (Bürgergeld)', parts: ['Bürger', 'geld'], example: { de: 'Die Familie bekommt noch Bürgergeld.', ru: 'Семья ещё получает пособие.', cloze: 'Bürgergeld' } },
    { id: 'all-a21-03-berater', icon: 'UserCheck', de: 'Berater', pos: 'noun', article: 'der', plural: 'Berater', ru: 'консультант', note: 'Женщина — die Beraterin.', example: { de: 'Mein Berater im Jobcenter ist sehr nett.', ru: 'Мой консультант в Jobcenter очень приятный.', cloze: 'Berater' } },
    { id: 'all-a21-03-bewerbung', icon: 'Send', de: 'Bewerbung', pos: 'noun', article: 'die', plural: 'Bewerbungen', ru: 'отклик, заявка на работу', example: { de: 'Ich habe schon zehn Bewerbungen geschrieben.', ru: 'Я уже написал десять откликов.', cloze: 'Bewerbungen' } },
    { id: 'all-a21-03-bewerben', icon: 'Send', de: 'bewerben', pos: 'verb', ru: '(sich bewerben) подавать заявку, откликаться', forms: 'er bewirbt sich · hat sich beworben', note: 'sich bewerben um eine Stelle / bei einer Firma.', example: { de: 'Ich bewerbe mich bei einer Elektrofirma.', ru: 'Я подаю заявку в электротехническую фирму.', cloze: 'bewerbe' } },
    { id: 'all-a21-03-lebenslauf', icon: 'FileUser', de: 'Lebenslauf', pos: 'noun', article: 'der', plural: 'Lebensläufe', ru: 'резюме', parts: ['Lebens', 'lauf'], note: 'В Германии в резюме часто добавляют фото.', example: { de: 'Im Lebenslauf steht meine Berufserfahrung.', ru: 'В резюме указан мой опыт работы.', cloze: 'Lebenslauf' } },

    { id: 'all-a21-03-stelle', icon: 'Briefcase', de: 'Stelle', pos: 'noun', article: 'die', plural: 'Stellen', ru: 'место, вакансия; место (вообще)', example: { de: 'Die Firma hat eine freie Stelle.', ru: 'У фирмы есть вакансия.', cloze: 'Stelle' } },
    { id: 'all-a21-03-vollzeit', icon: 'Clock', de: 'Vollzeit', pos: 'noun', article: 'die', ru: 'полная занятость', parts: ['Voll', 'zeit'], example: { de: 'Ich möchte in Vollzeit arbeiten.', ru: 'Я хочу работать полный день.', cloze: 'Vollzeit' } },
    { id: 'all-a21-03-teilzeit', icon: 'Clock3', de: 'Teilzeit', pos: 'noun', article: 'die', ru: 'частичная занятость', parts: ['Teil', 'zeit'], example: { de: 'Leyla arbeitet in Teilzeit.', ru: 'Лейла работает неполный день.', cloze: 'Teilzeit' } },
    { id: 'all-a21-03-minijob', icon: 'Coins', de: 'Minijob', pos: 'noun', article: 'der', plural: 'Minijobs', ru: 'мини-джоб (подработка с низким доходом)', note: 'До установленного лимита в месяц, без налогов.', example: { de: 'Am Wochenende hat sie einen Minijob.', ru: 'По выходным у неё подработка.', cloze: 'Minijob' } },
    { id: 'all-a21-03-gehalt', icon: 'Banknote', de: 'Gehalt', pos: 'noun', article: 'das', plural: 'Gehälter', ru: 'зарплата, оклад', note: 'brutto — до налогов, netto — после.', example: { de: 'Das Gehalt ist zweitausend Euro brutto.', ru: 'Зарплата — две тысячи евро до вычета налогов.', cloze: 'Gehalt' } },
    { id: 'all-a21-03-vorstellungsgespraech', icon: 'MessagesSquare', de: 'Vorstellungsgespräch', pos: 'noun', article: 'das', plural: 'Vorstellungsgespräche', ru: 'собеседование', parts: ['Vorstellungs', 'gespräch'], example: { de: 'Am Freitag habe ich ein Vorstellungsgespräch.', ru: 'В пятницу у меня собеседование.', cloze: 'Vorstellungsgespräch' } },
    { id: 'all-a21-03-weiterbildung', icon: 'GraduationCap', de: 'Weiterbildung', pos: 'noun', article: 'die', plural: 'Weiterbildungen', ru: 'повышение квалификации', parts: ['Weiter', 'bildung'], example: { de: 'Das Jobcenter bezahlt eine Weiterbildung.', ru: 'Jobcenter оплачивает повышение квалификации.', cloze: 'Weiterbildung' } },
    { id: 'all-a21-03-berufserfahrung', icon: 'Award', de: 'Berufserfahrung', pos: 'noun', article: 'die', ru: 'опыт работы', parts: ['Berufs', 'erfahrung'], example: { de: 'Ich habe zehn Jahre Berufserfahrung.', ru: 'У меня десять лет опыта работы.', cloze: 'Berufserfahrung' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Beim Jobcenter',
      de: `Die Familie Haddad bekommt seit ihrer Ankunft Bürgergeld vom Jobcenter. Aber Amir möchte so schnell wie möglich arbeiten. Er ist Elektriker und hat zehn Jahre Berufserfahrung.

Sein Berater im Jobcenter, Herr Wolff, sagt: „Ihr Deutsch ist schon gut. Jetzt schreiben wir zusammen Bewerbungen.“ Zuerst machen sie einen Lebenslauf. Herr Wolff erklärt: „In Deutschland ist ein Foto im Lebenslauf normal.“

„Und meine Ausbildung aus Syrien?“, fragt Amir. „Die müssen Sie anerkennen lassen. Bis dahin können Sie als Helfer arbeiten. Das Jobcenter bezahlt vielleicht auch eine Weiterbildung.“`,
      ru: `С момента приезда семья Хаддад получает от Jobcenter пособие. Но Амир хочет как можно скорее начать работать. Он электрик, у него десять лет опыта.

Его консультант в Jobcenter, господин Вольфф, говорит: «Ваш немецкий уже хороший. Теперь будем вместе писать отклики». Сначала они составляют резюме. Господин Вольфф объясняет: «В Германии фото в резюме — это нормально».

«А моё образование из Сирии?» — спрашивает Амир. «Его нужно признать. А пока вы можете работать помощником. Jobcenter, может быть, оплатит и повышение квалификации».`,
      gloss: { koch: 'повар', deutsch: 'немецкий язык', deutschland: 'Германия', normal: 'обычно', syrien: 'Сирия', lassen: 'позволить (sich täuschen lassen — дать себя обмануть)', haddad: 'Хаддад (фамилия)', amir: 'Амир (имя)', wolff: 'Вольфф (фамилия)', ankunft: 'приезд', möglich: 'возможно; (so schnell wie möglich) как можно скорее', elektriker: 'электрик', ausbildung: 'образование, профподготовка', anerkennen: '(anerkennen lassen) признать (официально)', dahin: '(bis dahin) до тех пор', helfer: 'помощник, подсобный рабочий' },
      questions: [
        { q: 'Was ist Amir von Beruf?', ru: 'Кто Амир по профессии?', options: ['Elektriker', 'Lehrer', 'Koch'], answer: 'Elektriker' },
        { q: 'Was ist in Deutschland im Lebenslauf normal?', ru: 'Что в Германии нормально для резюме?', options: ['Ein Foto', 'Die Telefonnummer der Eltern', 'Der Pass'], answer: 'Ein Foto' },
        { q: 'Was muss Amir mit seiner Ausbildung machen?', ru: 'Что Амиру нужно сделать со своим образованием?', options: ['Sie anerkennen lassen', 'Nichts', 'Sie vergessen'], answer: 'Sie anerkennen lassen' },
      ],
      translate: [
        { de: 'Ich habe zehn Jahre Berufserfahrung.', ru: 'У меня десять лет опыта работы.', wrongRu: ['Я учился десять лет.', 'У меня нет опыта работы.'] },
        { de: 'Jetzt schreiben wir Bewerbungen.', ru: 'Теперь будем писать отклики.', wrongRu: ['Теперь будем читать вакансии.', 'Теперь будем писать письма.'] },
        { de: 'Das Jobcenter bezahlt eine Weiterbildung.', ru: 'Jobcenter оплачивает повышение квалификации.', wrongRu: ['Jobcenter не оплачивает обучение.', 'Jobcenter оплачивает квартиру.'] },
      ],
    },
    {
      lesson: 1, title: 'Eine freie Stelle',
      de: `Nach drei Wochen findet Amir eine freie Stelle bei einer Elektrofirma. Es ist eine Stelle in Vollzeit, vierzig Stunden pro Woche. Er bewirbt sich sofort.

Am Freitag hat er ein Vorstellungsgespräch. Der Chef fragt: „Warum möchten Sie bei uns arbeiten?“ Amir erzählt von seiner Berufserfahrung. Dann sprechen sie über das Gehalt: zweitausendvierhundert Euro brutto im Monat.

Leyla möchte auch arbeiten, aber nur in Teilzeit, weil die Kinder nach der Schule nach Hause kommen. Zuerst sucht sie einen Minijob in einer Bäckerei.`,
      ru: `Через три недели Амир находит вакансию в электротехнической фирме. Это полная занятость, сорок часов в неделю. Он сразу откликается.

В пятницу у него собеседование. Начальник спрашивает: «Почему вы хотите работать у нас?» Амир рассказывает о своём опыте. Потом они говорят о зарплате: две тысячи четыреста евро брутто в месяц.

Лейла тоже хочет работать, но только неполный день, потому что дети после школы приходят домой. Сначала она ищет подработку в пекарне.`,
      gloss: { viertausend: 'четыре тысячи', freie: 'свободные', freitag: 'пятница', verdient: 'зарабатывает', wegen: 'из-за', firma: 'фирма', amir: 'Амир (имя)', leyla: 'Лейла (имя)', elektrofirma: 'электротехническая фирма', vierzig: 'сорок', pro: 'в (pro Woche — в неделю)', chef: 'начальник', erzählt: 'рассказывает', zweitausendvierhundert: 'две тысячи четыреста', brutto: 'брутто (до вычета налогов)', sucht: 'ищет' },
      questions: [
        { q: 'Wie viele Stunden pro Woche ist die Stelle?', ru: 'Сколько часов в неделю на этой работе?', options: ['Vierzig', 'Zwanzig', 'Dreißig'], answer: 'Vierzig' },
        { q: 'Wie viel verdient Amir brutto?', ru: 'Сколько Амир получает брутто?', options: ['Zweitausendvierhundert Euro', 'Tausend Euro', 'Viertausend Euro'], answer: 'Zweitausendvierhundert Euro' },
        { q: 'Warum möchte Leyla nur in Teilzeit arbeiten?', ru: 'Почему Лейла хочет работать только неполный день?', options: ['Wegen der Kinder', 'Sie ist krank.', 'Sie macht einen Kurs.'], answer: 'Wegen der Kinder' },
      ],
      translate: [
        { de: 'Ich möchte in Vollzeit arbeiten.', ru: 'Я хочу работать полный день.', wrongRu: ['Я хочу работать неполный день.', 'Я не хочу работать.'] },
        { de: 'Am Freitag habe ich ein Vorstellungsgespräch.', ru: 'В пятницу у меня собеседование.', wrongRu: ['В пятницу у меня экзамен.', 'В пятницу я начинаю работать.'] },
        { de: 'Die Firma hat eine freie Stelle.', ru: 'У фирмы есть вакансия.', wrongRu: ['У фирмы нет вакансий.', 'Фирма ищет квартиру.'] },
      ],
    },
  ],
};
