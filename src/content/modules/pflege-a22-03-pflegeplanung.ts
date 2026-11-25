import type { Module } from '../types.ts';

// A2.2 pflege 03: care planning — problems, resources, goals, measures (lesson 0); care levels, outpatient care, aids (lesson 1).

export const module: Module = {
  id: 'pflege-a22-03-pflegeplanung', sphere: 'pflege', level: 'A2.2',
  title: 'Pflegeplanung', subtitle: 'План ухода: проблемы, ресурсы, цели и меры; степень ухода, амбулаторная служба и вспомогательные средства.',
  words: [
    { id: 'pfl-a22-03-pflegeplanung', icon: 'ClipboardList', de: 'Pflegeplanung', pos: 'noun', article: 'die', plural: 'Pflegeplanungen', ru: 'планирование ухода, план ухода', parts: ['Pflege', 'planung'], example: { de: 'Die Pflegeplanung wird jede Woche überprüft.', ru: 'План ухода пересматривают каждую неделю.', cloze: 'Pflegeplanung' } },
    { id: 'pfl-a22-03-pflegeproblem', icon: 'CircleAlert', de: 'Pflegeproblem', pos: 'noun', article: 'das', plural: 'Pflegeprobleme', ru: 'проблема (в уходе)', parts: ['Pflege', 'problem'], example: { de: 'Ein Pflegeproblem ist die Sturzgefahr.', ru: 'Одна из проблем ухода — риск падения.', cloze: 'Pflegeproblem' } },
    { id: 'pfl-a22-03-ressource', icon: 'BatteryFull', de: 'Ressource', pos: 'noun', article: 'die', plural: 'Ressourcen', ru: 'ресурс (то, что пациент может сам)', example: { de: 'Eine Ressource: Sie kann allein essen.', ru: 'Ресурс: она может есть сама.', cloze: 'Ressource' } },
    { id: 'pfl-a22-03-ziel', icon: 'Target', de: 'Ziel', pos: 'noun', article: 'das', plural: 'Ziele', ru: 'цель', example: { de: 'Das Ziel ist, dass er wieder allein läuft.', ru: 'Цель — чтобы он снова ходил сам.', cloze: 'Ziel' } },
    { id: 'pfl-a22-03-massnahme', icon: 'ListChecks', de: 'Maßnahme', pos: 'noun', article: 'die', plural: 'Maßnahmen', ru: 'мера, мероприятие', example: { de: 'Welche Maßnahmen helfen?', ru: 'Какие меры помогают?', cloze: 'Maßnahmen' } },
    { id: 'pfl-a22-03-selbststaendig', icon: 'User', de: 'selbstständig', pos: 'adj', ru: 'самостоятельный, самостоятельно', example: { de: 'Er wäscht sich wieder selbstständig.', ru: 'Он снова моется самостоятельно.', cloze: 'selbstständig' } },
    { id: 'pfl-a22-03-unterstuetzung', icon: 'HandHelping', de: 'Unterstützung', pos: 'noun', article: 'die', ru: 'поддержка, помощь', example: { de: 'Beim Anziehen braucht sie Unterstützung.', ru: 'При одевании ей нужна помощь.', cloze: 'Unterstützung' } },
    { id: 'pfl-a22-03-bedarf', icon: 'Gauge', de: 'Bedarf', pos: 'noun', article: 'der', ru: 'потребность', note: 'bei Bedarf — при необходимости.', example: { de: 'Bei Bedarf bekommt sie ein Schmerzmittel.', ru: 'При необходимости она получает обезболивающее.', cloze: 'Bedarf' } },

    { id: 'pfl-a22-03-pflegegrad', icon: 'BarChart3', de: 'Pflegegrad', pos: 'noun', article: 'der', plural: 'Pflegegrade', ru: 'степень потребности в уходе (1–5)', parts: ['Pflege', 'grad'], note: 'От степени зависят выплаты страховки по уходу.', example: { de: 'Frau Wolf hat Pflegegrad drei.', ru: 'У госпожи Вольф третья степень ухода.', cloze: 'Pflegegrad' } },
    { id: 'pfl-a22-03-pflegeheim', icon: 'Building2', de: 'Pflegeheim', pos: 'noun', article: 'das', plural: 'Pflegeheime', ru: 'дом престарелых, дом ухода', parts: ['Pflege', 'heim'], example: { de: 'Sie möchte nicht ins Pflegeheim.', ru: 'Она не хочет в дом престарелых.', cloze: 'Pflegeheim' } },
    { id: 'pfl-a22-03-ambulant', icon: 'Car', de: 'ambulant', pos: 'adj', ru: 'амбулаторный (на дому, без госпитализации)', example: { de: 'Ein ambulanter Pflegedienst kommt zu ihr nach Hause.', ru: 'Служба патронажа приходит к ней домой.', cloze: 'ambulanter' } },
    { id: 'pfl-a22-03-pflegedienst', icon: 'Car', de: 'Pflegedienst', pos: 'noun', article: 'der', plural: 'Pflegedienste', ru: 'служба ухода (патронаж)', parts: ['Pflege', 'dienst'], example: { de: 'Der Pflegedienst kommt zweimal am Tag.', ru: 'Служба ухода приходит два раза в день.', cloze: 'Pflegedienst' } },
    { id: 'pfl-a22-03-hilfsmittel', icon: 'Wrench', de: 'Hilfsmittel', pos: 'noun', article: 'das', plural: 'Hilfsmittel', ru: 'вспомогательное средство', parts: ['Hilfs', 'mittel'], note: 'Rollator, Rollstuhl, Pflegebett — это Hilfsmittel.', example: { de: 'Ein Rollator ist ein Hilfsmittel.', ru: 'Ходунки — вспомогательное средство.', cloze: 'Hilfsmittel' } },
    { id: 'pfl-a22-03-antrag', icon: 'FileText', de: 'Antrag', pos: 'noun', article: 'der', plural: 'Anträge', ru: 'заявление, заявка', collocation: { de: 'einen Antrag stellen', ru: 'подать заявление' }, example: { de: 'Die Familie stellt einen Antrag bei der Pflegekasse.', ru: 'Семья подаёт заявление в кассу по уходу.', cloze: 'Antrag' } },
    { id: 'pfl-a22-03-beantragen', icon: 'FilePlus', de: 'beantragen', pos: 'verb', ru: 'подавать заявление (на что-то)', forms: 'er beantragt · hat beantragt', example: { de: 'Wir beantragen ein Pflegebett.', ru: 'Мы подаём заявку на функциональную кровать.', cloze: 'beantragen' } },
    { id: 'pfl-a22-03-selbststaendigkeit', icon: 'Sparkles', de: 'Selbstständigkeit', pos: 'noun', article: 'die', ru: 'самостоятельность', example: { de: 'Wir fördern die Selbstständigkeit der Patienten.', ru: 'Мы поддерживаем самостоятельность пациентов.', cloze: 'Selbstständigkeit' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Plan für Herrn Becker',
      de: `Für jeden Patienten gibt es eine Pflegeplanung. Jana schreibt heute zum ersten Mal einen Plan für Herrn Becker, mit Sabine zusammen.

„Zuerst suchen wir die Pflegeprobleme“, sagt Sabine. „Herr Becker kann sich nach dem Schlaganfall nicht selbstständig anziehen. Und er hat Sturzgefahr.“ Dann fragt sie: „Und welche Ressourcen hat er?“ Jana überlegt: „Er kann allein essen und seine linke Hand ist stark.“

Danach formulieren sie ein Ziel: In vier Wochen soll Herr Becker sein Hemd selbstständig anziehen. Die Maßnahmen: Jeden Morgen üben sie zusammen, und er bekommt nur so viel Unterstützung wie nötig.`,
      ru: `На каждого пациента составляют план ухода. Яна сегодня впервые пишет план для господина Беккера вместе с Сабиной.

«Сначала ищем проблемы ухода, — говорит Сабина. — Господин Беккер после инсульта не может самостоятельно одеваться. И у него риск падения». Потом она спрашивает: «А какие у него ресурсы?» Яна думает: «Он может есть сам, и левая рука у него сильная».

После этого они формулируют цель: через четыре недели господин Беккер должен самостоятельно надевать рубашку. Меры: каждое утро они вместе тренируются, и он получает ровно столько помощи, сколько нужно.`,
      gloss: { plan: 'расписание, план', herrn: 'господину (дат.)', schlaganfall: 'инсульт', linke: 'левую', jana: 'Яна (имя)', sabine: 'Сабина (имя)', becker: 'Беккер (фамилия)', überlegt: 'думает, размышляет', formulieren: 'формулируют', üben: 'тренируются, упражняются', nötig: 'нужно, необходимо' },
      questions: [
        { q: 'Was kann Herr Becker nicht selbstständig?', ru: 'Что господин Беккер не может делать самостоятельно?', options: ['Sich anziehen', 'Essen', 'Sprechen'], answer: 'Sich anziehen' },
        { q: 'Welche Ressource hat Herr Becker?', ru: 'Какой ресурс есть у господина Беккера?', options: ['Er kann allein essen.', 'Er kann allein duschen.', 'Er kann gut laufen.'], answer: 'Er kann allein essen.' },
        { q: 'Was ist das Ziel?', ru: 'Какая цель?', options: ['Er soll sein Hemd selbstständig anziehen.', 'Er soll nach Hause gehen.', 'Er soll mehr essen.'], answer: 'Er soll sein Hemd selbstständig anziehen.' },
      ],
      translate: [
        { de: 'Er wäscht sich wieder selbstständig.', ru: 'Он снова моется самостоятельно.', wrongRu: ['Он больше не может мыться сам.', 'Его снова моют медсёстры.'] },
        { de: 'Beim Anziehen braucht sie Unterstützung.', ru: 'При одевании ей нужна помощь.', wrongRu: ['При одевании ей не нужна помощь.', 'При еде ей нужна помощь.'] },
        { de: 'Welche Maßnahmen helfen?', ru: 'Какие меры помогают?', wrongRu: ['Какие лекарства помогают?', 'Какие цели у нас есть?'] },
      ],
    },
    {
      lesson: 1, title: 'Wie geht es zu Hause weiter?',
      de: `Frau Wolf wird bald entlassen. Aber sie kann zu Hause nicht mehr alles allein machen. Sie hat Pflegegrad drei. Ihr Sohn fragt: „Muss meine Mutter jetzt ins Pflegeheim?“

Sabine antwortet: „Nicht unbedingt. Ein ambulanter Pflegedienst kann zweimal am Tag zu ihr nach Hause kommen. Er hilft beim Waschen und gibt die Medikamente.“

„Und was braucht sie noch?“ – „Einige Hilfsmittel: einen Rollator und einen Duschstuhl. Dafür müssen Sie einen Antrag bei der Krankenkasse stellen. Den Rollator beantragen wir schon hier im Krankenhaus.“ Der Sohn ist erleichtert. Frau Wolf möchte ihre Selbstständigkeit so lange wie möglich behalten.`,
      ru: `Госпожу Вольф скоро выпишут. Но дома она уже не может всё делать сама. У неё третья степень ухода. Её сын спрашивает: «Маме теперь нужно в дом престарелых?»

Сабина отвечает: «Не обязательно. Служба патронажа может приходить к ней домой два раза в день. Она помогает мыться и даёт лекарства».

«А что ей ещё нужно?» — «Некоторые вспомогательные средства: ходунки и стул для душа. Для этого нужно подать заявление в больничную кассу. Заявку на ходунки мы подадим уже здесь, в больнице». Сын испытывает облегчение. Госпожа Вольф хочет как можно дольше сохранить самостоятельность.`,
      gloss: { pflegebett: 'функциональная кровать', zweimal: 'два раза', möglich: 'возможна', welchen: 'какой', wolf: 'Вольф (фамилия)', sabine: 'Сабина (имя)', unbedingt: 'обязательно', einige: 'некоторые', duschstuhl: 'стул для душа', dafür: 'для этого', stellen: '(einen Antrag stellen) подать заявление', erleichtert: 'испытывает облегчение', behalten: 'сохранить' },
      questions: [
        { q: 'Welchen Pflegegrad hat Frau Wolf?', ru: 'Какая степень ухода у госпожи Вольф?', options: ['Drei', 'Eins', 'Fünf'], answer: 'Drei' },
        { q: 'Wie oft kommt der Pflegedienst?', ru: 'Как часто приходит служба ухода?', options: ['Zweimal am Tag', 'Einmal in der Woche', 'Jede Stunde'], answer: 'Zweimal am Tag' },
        { q: 'Welche Hilfsmittel braucht Frau Wolf?', ru: 'Какие вспомогательные средства нужны госпоже Вольф?', options: ['Einen Rollator und einen Duschstuhl', 'Einen Rollstuhl', 'Ein Bettgitter'], answer: 'Einen Rollator und einen Duschstuhl' },
      ],
      translate: [
        { de: 'Muss sie jetzt ins Pflegeheim?', ru: 'Ей теперь нужно в дом престарелых?', wrongRu: ['Ей теперь можно домой?', 'Ей нужно в больницу?'] },
        { de: 'Der Pflegedienst kommt zweimal am Tag.', ru: 'Служба ухода приходит два раза в день.', wrongRu: ['Служба ухода приходит раз в неделю.', 'Врач приходит два раза в день.'] },
        { de: 'Wir beantragen ein Pflegebett.', ru: 'Мы подаём заявку на функциональную кровать.', wrongRu: ['Мы покупаем функциональную кровать.', 'Мы отказываемся от функциональной кровати.'] },
      ],
    },
  ],
};
