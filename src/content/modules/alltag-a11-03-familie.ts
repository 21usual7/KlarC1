import type { Module } from '../types.ts';

// A1.1 alltag 03: family — parents, children, siblings (lesson 0); grandparents, baby (lesson 1).

export const module: Module = {
  id: 'alltag-a11-03-familie', sphere: 'alltag', level: 'A1.1',
  title: 'Meine Familie', subtitle: 'Семья: родители, дети, братья и сёстры, бабушка и дедушка.',
  words: [
    { id: 'all-a11-03-familie', icon: 'Users', de: 'Familie', pos: 'noun', article: 'die', plural: 'Familien', ru: 'семья', example: { de: 'Meine Familie ist groß.', ru: 'У меня большая семья.', cloze: 'Familie' } },
    { id: 'all-a11-03-eltern', icon: 'Users', de: 'Eltern', pos: 'noun', article: 'die', pluralOnly: true, ru: 'родители', example: { de: 'Meine Eltern wohnen in Damaskus.', ru: 'Мои родители живут в Дамаске.', cloze: 'Eltern' } },
    { id: 'all-a11-03-mutter', icon: 'UserRound', de: 'Mutter', pos: 'noun', article: 'die', plural: 'Mütter', ru: 'мать', note: 'Разговорно: die Mama.', example: { de: 'Meine Mutter heißt Samira.', ru: 'Мою маму зовут Самира.', cloze: 'Mutter' } },
    { id: 'all-a11-03-vater', icon: 'UserRound', de: 'Vater', pos: 'noun', article: 'der', plural: 'Väter', ru: 'отец', note: 'Разговорно: der Papa.', example: { de: 'Mein Vater ist sechzig.', ru: 'Моему отцу шестьдесят.', cloze: 'Vater' } },
    { id: 'all-a11-03-kind', icon: 'Baby', de: 'Kind', pos: 'noun', article: 'das', plural: 'Kinder', ru: 'ребёнок', example: { de: 'Haben Sie Kinder?', ru: 'У вас есть дети?', cloze: 'Kinder' } },
    { id: 'all-a11-03-sohn', icon: 'User', de: 'Sohn', pos: 'noun', article: 'der', plural: 'Söhne', ru: 'сын', example: { de: 'Unser Sohn ist fünf.', ru: 'Нашему сыну пять.', cloze: 'Sohn' } },
    { id: 'all-a11-03-tochter', icon: 'User', de: 'Tochter', pos: 'noun', article: 'die', plural: 'Töchter', ru: 'дочь', example: { de: 'Unsere Tochter geht in die Schule.', ru: 'Наша дочь ходит в школу.', cloze: 'Tochter' } },
    { id: 'all-a11-03-geschwister', icon: 'Users', de: 'Geschwister', pos: 'noun', article: 'die', pluralOnly: true, ru: 'братья и сёстры', example: { de: 'Hast du Geschwister?', ru: 'У тебя есть братья или сёстры?', cloze: 'Geschwister' } },

    { id: 'all-a11-03-bruder', icon: 'User', de: 'Bruder', pos: 'noun', article: 'der', plural: 'Brüder', ru: 'брат', example: { de: 'Mein Bruder wohnt in Berlin.', ru: 'Мой брат живёт в Берлине.', cloze: 'Bruder' } },
    { id: 'all-a11-03-schwester', icon: 'User', de: 'Schwester', pos: 'noun', article: 'die', plural: 'Schwestern', ru: 'сестра', note: 'В больнице раньше так называли медсестру (Krankenschwester).', example: { de: 'Ich habe zwei Schwestern.', ru: 'У меня две сестры.', cloze: 'Schwestern' } },
    { id: 'all-a11-03-mann', icon: 'UserRound', de: 'Mann', pos: 'noun', article: 'der', plural: 'Männer', ru: 'муж; мужчина', example: { de: 'Das ist mein Mann.', ru: 'Это мой муж.', cloze: 'Mann' } },
    { id: 'all-a11-03-frau', icon: 'UserRound', de: 'Frau', pos: 'noun', article: 'die', plural: 'Frauen', ru: 'жена; женщина; госпожа', example: { de: 'Meine Frau kommt auch aus Syrien.', ru: 'Моя жена тоже из Сирии.', cloze: 'Frau' } },
    { id: 'all-a11-03-baby', icon: 'Baby', de: 'Baby', pos: 'noun', article: 'das', plural: 'Babys', ru: 'младенец', example: { de: 'Das Baby schläft.', ru: 'Малыш спит.', cloze: 'Baby' } },
    { id: 'all-a11-03-grosseltern', icon: 'Users', de: 'Großeltern', pos: 'noun', article: 'die', pluralOnly: true, ru: 'бабушка и дедушка', parts: ['Groß', 'eltern'], example: { de: 'Die Großeltern besuchen uns oft.', ru: 'Бабушка с дедушкой часто нас навещают.', cloze: 'Großeltern' } },
    { id: 'all-a11-03-oma', icon: 'UserRound', de: 'Oma', pos: 'noun', article: 'die', plural: 'Omas', ru: 'бабушка', note: 'Официально — die Großmutter.', example: { de: 'Meine Oma kocht sehr gut.', ru: 'Моя бабушка очень хорошо готовит.', cloze: 'Oma' } },
    { id: 'all-a11-03-opa', icon: 'UserRound', de: 'Opa', pos: 'noun', article: 'der', plural: 'Opas', ru: 'дедушка', note: 'Официально — der Großvater.', example: { de: 'Der Opa spielt mit den Kindern.', ru: 'Дедушка играет с детьми.', cloze: 'Opa' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Amirs Familie',
      de: `Amir zeigt Frau Schulz ein Foto. „Das ist meine Familie. Das ist meine Frau Leyla. Und das sind unsere Kinder: unser Sohn Karim und unsere Tochter Nour.“

„Wie alt sind die Kinder?“ – „Karim ist fünf und Nour ist acht.“

„Und Ihre Eltern?“ – „Meine Eltern wohnen noch in Syrien. Mein Vater ist sechzig, meine Mutter ist fünfundfünfzig.“`,
      ru: `Амир показывает госпоже Шульц фото. «Это моя семья. Это моя жена Лейла. А это наши дети: сын Карим и дочь Нур».

«Сколько лет детям?» — «Кариму пять, а Нур восемь».

«А ваши родители?» — «Мои родители ещё живут в Сирии. Отцу шестьдесят, маме пятьдесят пять».`,
      gloss: { fünfundfünfzig: 'пятьдесят пять', leipzig: 'Лейпциг', berlin: 'Берлин', amirs: 'Амира (чей?)', amir: 'Амир (имя)', schulz: 'Шульц (фамилия)', leyla: 'Лейла (имя)', karim: 'Карим (имя)', nour: 'Нур (имя)', foto: 'фото', syrien: 'Сирия' },
      questions: [
        { q: 'Wie heißt Amirs Tochter?', ru: 'Как зовут дочь Амира?', options: ['Nour', 'Leyla', 'Karim'], answer: 'Nour' },
        { q: 'Wie alt ist Karim?', ru: 'Сколько лет Кариму?', options: ['Fünf', 'Acht', 'Sechzig'], answer: 'Fünf' },
        { q: 'Wo wohnen Amirs Eltern?', ru: 'Где живут родители Амира?', options: ['In Syrien', 'In Leipzig', 'In Berlin'], answer: 'In Syrien' },
      ],
      translate: [
        { de: 'Das ist meine Familie.', ru: 'Это моя семья.', wrongRu: ['Это его семья.', 'Это мой дом.'] },
        { de: 'Haben Sie Kinder?', ru: 'У вас есть дети?', wrongRu: ['У вас есть братья?', 'Сколько у вас детей?'] },
        { de: 'Meine Eltern wohnen in Syrien.', ru: 'Мои родители живут в Сирии.', wrongRu: ['Мои дети живут в Сирии.', 'Мои родители живут в Лейпциге.'] },
      ],
    },
    {
      lesson: 1, title: 'Frau Schulz erzählt',
      de: `Frau Schulz erzählt auch von ihrer Familie. „Mein Mann ist schon tot. Ich habe einen Sohn und eine Tochter. Mein Sohn wohnt in Berlin.“

„Haben Sie Geschwister?“, fragt Amir. „Ja, einen Bruder und eine Schwester.“

„Und Enkel?“ – „Ja! Meine Tochter hat ein Baby. Jetzt bin ich Oma!“ Frau Schulz lacht. „Ihre Kinder haben hier keine Großeltern. Ich kann für Karim und Nour eine Oma sein.“`,
      ru: `Госпожа Шульц тоже рассказывает о своей семье. «Мой муж уже умер. У меня сын и дочь. Сын живёт в Берлине».

«У вас есть братья или сёстры?» — спрашивает Амир. «Да, брат и сестра».

«А внуки?» — «Да! У дочери малыш. Теперь я бабушка!» Госпожа Шульц смеётся. «У ваших детей здесь нет бабушки и дедушки. Я могу быть бабушкой для Карима и Нур».`,
      gloss: { lacht: 'смеётся', leipzig: 'Лейпциг', syrien: 'Сирия', leyla: 'Лейла (имя)', schulz: 'Шульц (фамилия)', amir: 'Амир (имя)', karim: 'Карим (имя)', nour: 'Нур (имя)', erzählt: 'рассказывает', tot: 'мёртвый; (ist tot) умер', enkel: 'внуки', berlin: 'Берлин' },
      questions: [
        { q: 'Wo wohnt der Sohn von Frau Schulz?', ru: 'Где живёт сын госпожи Шульц?', options: ['In Berlin', 'In Leipzig', 'In Syrien'], answer: 'In Berlin' },
        { q: 'Wer hat ein Baby?', ru: 'У кого малыш?', options: ['Die Tochter von Frau Schulz', 'Leyla', 'Der Bruder'], answer: 'Die Tochter von Frau Schulz' },
        { q: 'Was möchte Frau Schulz für Karim und Nour sein?', ru: 'Кем госпожа Шульц хочет быть для Карима и Нур?', options: ['Eine Oma', 'Eine Lehrerin', 'Eine Schwester'], answer: 'Eine Oma' },
      ],
      translate: [
        { de: 'Hast du Geschwister?', ru: 'У тебя есть братья или сёстры?', wrongRu: ['У тебя есть дети?', 'У тебя есть родители?'] },
        { de: 'Jetzt bin ich Oma.', ru: 'Теперь я бабушка.', wrongRu: ['Теперь я мама.', 'Теперь он дедушка.'] },
        { de: 'Mein Bruder wohnt in Berlin.', ru: 'Мой брат живёт в Берлине.', wrongRu: ['Моя сестра живёт в Берлине.', 'Мой брат работает в Берлине.'] },
      ],
    },
  ],
};
