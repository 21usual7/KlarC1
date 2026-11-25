import type { Module } from '../types.ts';

// A2.2 pflege 09: working in a team — staff meeting, overtime, staff shortage (lesson 0); conflict, criticism, compromise (lesson 1).

export const module: Module = {
  id: 'pflege-a22-09-team', sphere: 'pflege', level: 'A2.2',
  title: 'Im Team arbeiten', subtitle: 'Работа в команде: планёрка, сверхурочные, нехватка персонала, конфликты, критика и компромисс.',
  words: [
    { id: 'pfl-a22-09-dienstbesprechung', icon: 'Users', de: 'Dienstbesprechung', pos: 'noun', article: 'die', plural: 'Dienstbesprechungen', ru: 'рабочее совещание, планёрка', parts: ['Dienst', 'besprechung'], example: { de: 'Die Dienstbesprechung ist jeden Montag.', ru: 'Планёрка — каждый понедельник.', cloze: 'Dienstbesprechung' } },
    { id: 'pfl-a22-09-stationsleitung', icon: 'UserCog', de: 'Stationsleitung', pos: 'noun', article: 'die', plural: 'Stationsleitungen', ru: 'заведующая отделением (по уходу), старшая медсестра', parts: ['Stations', 'leitung'], example: { de: 'Frau Becker ist die Stationsleitung.', ru: 'Госпожа Беккер — старшая медсестра отделения.', cloze: 'Stationsleitung' } },
    { id: 'pfl-a22-09-personalmangel', icon: 'UserMinus', de: 'Personalmangel', pos: 'noun', article: 'der', ru: 'нехватка персонала', parts: ['Personal', 'mangel'], example: { de: 'Wegen Personalmangel arbeiten wir oft allein.', ru: 'Из-за нехватки персонала мы часто работаем одни.', cloze: 'Personalmangel' } },
    { id: 'pfl-a22-09-ueberstunde', icon: 'Clock', de: 'Überstunde', pos: 'noun', article: 'die', plural: 'Überstunden', ru: 'сверхурочный час', parts: ['Über', 'stunde'], note: 'Обычно мн. ч.: Überstunden machen.', collocation: { de: 'Überstunden machen', ru: 'работать сверхурочно' }, example: { de: 'Diesen Monat habe ich zwanzig Überstunden.', ru: 'В этом месяце у меня двадцать сверхурочных часов.', cloze: 'Überstunden' } },
    { id: 'pfl-a22-09-einspringen', icon: 'Repeat', de: 'einspringen', pos: 'verb', ru: 'подменить, выйти на замену', forms: 'er springt ein · ist eingesprungen', example: { de: 'Kannst du am Samstag einspringen?', ru: 'Можешь выйти на замену в субботу?', cloze: 'einspringen' } },
    { id: 'pfl-a22-09-belastung', icon: 'Weight', de: 'Belastung', pos: 'noun', article: 'die', plural: 'Belastungen', ru: 'нагрузка', example: { de: 'Die Belastung im Team ist sehr hoch.', ru: 'Нагрузка в команде очень высокая.', cloze: 'Belastung' } },
    { id: 'pfl-a22-09-teamgeist', icon: 'HeartHandshake', de: 'Teamgeist', pos: 'noun', article: 'der', ru: 'командный дух', parts: ['Team', 'geist'], example: { de: 'Auf unserer Station gibt es einen guten Teamgeist.', ru: 'В нашем отделении хороший командный дух.', cloze: 'Teamgeist' } },
    { id: 'pfl-a22-09-ruecksicht', icon: 'Eye', de: 'Rücksicht', pos: 'noun', article: 'die', ru: 'внимание, уважение (к другим)', collocation: { de: 'Rücksicht nehmen auf', ru: 'учитывать интересы' }, example: { de: 'Wir nehmen Rücksicht auf Kollegen mit Kindern.', ru: 'Мы учитываем интересы коллег с детьми.', cloze: 'Rücksicht' } },

    { id: 'pfl-a22-09-konflikt', icon: 'Swords', de: 'Konflikt', pos: 'noun', article: 'der', plural: 'Konflikte', ru: 'конфликт', example: { de: 'Es gibt einen Konflikt im Team.', ru: 'В команде конфликт.', cloze: 'Konflikt' } },
    { id: 'pfl-a22-09-kritik', icon: 'MessageSquareWarning', de: 'Kritik', pos: 'noun', article: 'die', plural: 'Kritiken', ru: 'критика', example: { de: 'Kritik sollte man sachlich äußern.', ru: 'Критику следует высказывать по существу.', cloze: 'Kritik' } },
    { id: 'pfl-a22-09-lob', icon: 'ThumbsUp', de: 'Lob', pos: 'noun', article: 'das', ru: 'похвала', example: { de: 'Ein Lob tut allen gut.', ru: 'Похвала всем приятна.', cloze: 'Lob' } },
    { id: 'pfl-a22-09-ansprechen', icon: 'MessageCircle', de: 'ansprechen', pos: 'verb', ru: 'заговорить (о чём-то), поднять тему', forms: 'er spricht an · hat angesprochen', example: { de: 'Ich möchte ein Problem ansprechen.', ru: 'Я хочу поднять одну проблему.', cloze: 'ansprechen' } },
    { id: 'pfl-a22-09-fair', icon: 'Scale', de: 'fair', pos: 'adj', ru: 'справедливый, честный', example: { de: 'Der Dienstplan ist nicht fair.', ru: 'График несправедливый.', cloze: 'fair' } },
    { id: 'pfl-a22-09-kompromiss', icon: 'Handshake', de: 'Kompromiss', pos: 'noun', article: 'der', plural: 'Kompromisse', ru: 'компромисс', example: { de: 'Wir finden einen Kompromiss.', ru: 'Мы находим компромисс.', cloze: 'Kompromiss' } },
    { id: 'pfl-a22-09-supervision', icon: 'Users', de: 'Supervision', pos: 'noun', article: 'die', plural: 'Supervisionen', ru: 'супервизия (разбор ситуаций с психологом)', example: { de: 'Einmal im Monat haben wir Supervision.', ru: 'Раз в месяц у нас супервизия.', cloze: 'Supervision' } },
    { id: 'pfl-a22-09-unterstuetzen', icon: 'HandHelping', de: 'unterstützen', pos: 'verb', ru: 'поддерживать, помогать', forms: 'er unterstützt · hat unterstützt', example: { de: 'Im Team unterstützen wir uns gegenseitig.', ru: 'В команде мы поддерживаем друг друга.', cloze: 'unterstützen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die Dienstbesprechung',
      de: `Jeden Montag ist Dienstbesprechung. Heute spricht die Stationsleitung, Frau Becker, über ein großes Problem: Personalmangel. Zwei Kolleginnen sind krank, eine ist in Elternzeit.

„Ich weiß, dass die Belastung sehr hoch ist“, sagt Frau Becker. „Viele von euch machen Überstunden. Trotzdem brauche ich jemanden, der am Samstag einspringt.“ Es ist still. Dann sagt Olena: „Ich kann einspringen. Aber dann möchte ich nächste Woche einen Tag frei.“

Frau Becker ist froh. „Danke, Olena. Das ist echter Teamgeist.“ Sie verspricht, dass bald zwei neue Pflegekräfte kommen. Tom flüstert: „Das hat sie letztes Jahr auch gesagt.“`,
      ru: `Каждый понедельник — планёрка. Сегодня старшая медсестра, госпожа Беккер, говорит о большой проблеме: нехватке персонала. Две коллеги болеют, одна в декретном отпуске.

«Я знаю, что нагрузка очень высокая, — говорит госпожа Беккер. — Многие из вас работают сверхурочно. И всё же мне нужен кто-то, кто выйдет на замену в субботу». Тишина. Потом Олена говорит: «Я могу выйти. Но тогда я хочу выходной на следующей неделе».

Госпожа Беккер рада. «Спасибо, Олена. Вот это настоящий командный дух». Она обещает, что скоро придут две новые медсестры. Том шепчет: «Она и в прошлом году так говорила».`,
      gloss: { großes: 'большая', samstag: 'суббота', olena: 'Олена (имя)', tom: 'Том (имя)', winter: 'зима', sabine: 'Сабина (имя)', weniger: 'меньше', becker: 'Беккер (фамилия)', elternzeit: 'отпуск по уходу за ребёнком', euch: 'вас', jemanden: 'кого-то', einspringt: 'выйдет на замену', still: 'тихо', echter: 'настоящий', verspricht: 'обещает', flüstert: 'шепчет', letztes: 'прошлый' },
      questions: [
        { q: 'Was ist das große Problem?', ru: 'Какая большая проблема?', options: ['Personalmangel', 'Zu viele Patienten im Winter', 'Das Essen'], answer: 'Personalmangel' },
        { q: 'Wer springt am Samstag ein?', ru: 'Кто выйдет на замену в субботу?', options: ['Olena', 'Tom', 'Sabine'], answer: 'Olena' },
        { q: 'Was verspricht Frau Becker?', ru: 'Что обещает госпожа Беккер?', options: ['Zwei neue Pflegekräfte', 'Mehr Geld', 'Weniger Patienten'], answer: 'Zwei neue Pflegekräfte' },
      ],
      translate: [
        { de: 'Kannst du am Samstag einspringen?', ru: 'Можешь выйти на замену в субботу?', wrongRu: ['Можешь взять выходной в субботу?', 'Можешь выйти на замену в воскресенье?'] },
        { de: 'Die Belastung ist sehr hoch.', ru: 'Нагрузка очень высокая.', wrongRu: ['Нагрузка очень низкая.', 'Зарплата очень высокая.'] },
        { de: 'Viele machen Überstunden.', ru: 'Многие работают сверхурочно.', wrongRu: ['Никто не работает сверхурочно.', 'Многие в отпуске.'] },
      ],
    },
    {
      lesson: 1, title: 'Ein Konflikt',
      de: `Tom ist unzufrieden. Er hat im Dezember jedes Wochenende Dienst, aber Sabine hat Weihnachten frei. „Das ist nicht fair!“, sagt er laut im Stationszimmer.

Olena findet, dass man das Problem ansprechen soll, aber nicht so. Sie schlägt vor, mit Frau Becker darüber zu sprechen. Im Gespräch sagt Tom sachlich, was ihn stört. Sabine erklärt: „Ich habe zwei kleine Kinder. Aber ich verstehe deine Kritik.“

Am Ende finden sie einen Kompromiss: Sabine arbeitet an Silvester, und Tom hat Weihnachten frei. Frau Becker sagt: „Danke, dass ihr Rücksicht aufeinander nehmt.“ Und auch ein Lob gibt es: „Ihr unterstützt euch gegenseitig – das ist nicht selbstverständlich.“`,
      ru: `Том недоволен. В декабре у него дежурство каждые выходные, а у Сабины на Рождество выходной. «Это несправедливо!» — громко говорит он в сестринской.

Олена считает, что проблему нужно поднять, но не так. Она предлагает поговорить об этом с госпожой Беккер. В разговоре Том по существу объясняет, что его не устраивает. Сабина говорит: «У меня двое маленьких детей. Но я понимаю твою критику».

В итоге они находят компромисс: Сабина работает в новогоднюю ночь, а у Тома выходной на Рождество. Госпожа Беккер говорит: «Спасибо, что вы считаетесь друг с другом». И есть ещё похвала: «Вы поддерживаете друг друга — это не само собой разумеется».`,
      gloss: { nehmt: 'берёте; (Rücksicht nehmt) считаетесь', kündigt: 'увольняется', tom: 'Том (имя)', sabine: 'Сабина (имя)', olena: 'Олена (имя)', schlägt: 'предлагает (vorschlagen)', unzufrieden: 'недоволен', dezember: 'декабрь', jedes: 'каждые', weihnachten: 'Рождество', stationszimmer: 'сестринская (комната персонала)', darüber: 'об этом', stört: 'мешает; (was ihn stört) что его не устраивает', kinder: 'дети', silvester: 'новогодняя ночь (31 декабря)', ihr: 'вы', aufeinander: 'друг на друга', gegenseitig: 'взаимно, друг друга', selbstverständlich: 'само собой разумеющееся', becker: 'Беккер (фамилия)' },
      questions: [
        { q: 'Warum ist Tom unzufrieden?', ru: 'Почему Том недоволен?', options: ['Er hat jedes Wochenende im Dezember Dienst.', 'Er hat zu viel Urlaub.', 'Er mag Sabine nicht.'], answer: 'Er hat jedes Wochenende im Dezember Dienst.' },
        { q: 'Warum möchte Sabine Weihnachten frei haben?', ru: 'Почему Сабина хочет выходной на Рождество?', options: ['Sie hat zwei kleine Kinder.', 'Sie fährt in den Urlaub.', 'Sie ist krank.'], answer: 'Sie hat zwei kleine Kinder.' },
        { q: 'Was ist der Kompromiss?', ru: 'Какой компромисс?', options: ['Sabine arbeitet an Silvester, Tom hat Weihnachten frei.', 'Beide arbeiten Weihnachten.', 'Tom kündigt.'], answer: 'Sabine arbeitet an Silvester, Tom hat Weihnachten frei.' },
      ],
      translate: [
        { de: 'Das ist nicht fair.', ru: 'Это несправедливо.', wrongRu: ['Это очень справедливо.', 'Это не важно.'] },
        { de: 'Ich möchte ein Problem ansprechen.', ru: 'Я хочу поднять одну проблему.', wrongRu: ['Я хочу решить проблему сам.', 'У меня нет проблем.'] },
        { de: 'Wir finden einen Kompromiss.', ru: 'Мы находим компромисс.', wrongRu: ['Мы не можем договориться.', 'Мы находим виноватого.'] },
      ],
    },
  ],
};
