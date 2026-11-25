import type { Module } from '../types.ts';

// A1.1 alltag 01: introducing yourself — name, country, language (lesson 0); family status, job, German course (lesson 1).

export const module: Module = {
  id: 'alltag-a11-01-vorstellen', sphere: 'alltag', level: 'A1.1',
  title: 'Sich vorstellen', subtitle: 'Представиться: имя, страна, язык, семейное положение и профессия.',
  words: [
    { id: 'all-a11-01-hallo', icon: 'Hand', de: 'Hallo', pos: 'phrase', ru: 'привет, здравствуйте', note: 'Нейтрально. Официальнее — Guten Tag. Прощание: Tschüss / Auf Wiedersehen.', example: { de: 'Hallo, ich bin Amir.', ru: 'Привет, я Амир.', cloze: 'Hallo' } },
    { id: 'all-a11-01-heissen', icon: 'MessageCircle', de: 'heißen', pos: 'verb', ru: 'зваться', forms: 'er heißt · hat geheißen', note: 'Wie heißen Sie? — Как вас зовут? Ich heiße … — Меня зовут …', example: { de: 'Wie heißen Sie?', ru: 'Как вас зовут?', cloze: 'heißen' } },
    { id: 'all-a11-01-name', icon: 'IdCard', de: 'Name', pos: 'noun', article: 'der', plural: 'Namen', ru: 'имя; фамилия', note: 'Vorname — имя, Nachname — фамилия.', example: { de: 'Mein Name ist Leyla Haddad.', ru: 'Меня зовут Лейла Хаддад.', cloze: 'Name' } },
    { id: 'all-a11-01-kommen', icon: 'Plane', de: 'kommen', pos: 'verb', ru: 'приходить; (kommen aus) быть родом из', forms: 'er kommt · ist gekommen', note: 'Woher kommen Sie? — Откуда вы?', example: { de: 'Ich komme aus Syrien.', ru: 'Я из Сирии.', cloze: 'komme' } },
    { id: 'all-a11-01-land', icon: 'Globe', de: 'Land', pos: 'noun', article: 'das', plural: 'Länder', ru: 'страна; деревня (за городом)', example: { de: 'Aus welchem Land kommen Sie?', ru: 'Из какой вы страны?', cloze: 'Land' } },
    { id: 'all-a11-01-wohnen', icon: 'Home', de: 'wohnen', pos: 'verb', ru: 'жить (где-то)', forms: 'er wohnt · hat gewohnt', example: { de: 'Wir wohnen jetzt in Leipzig.', ru: 'Мы теперь живём в Лейпциге.', cloze: 'wohnen' } },
    { id: 'all-a11-01-sprache', icon: 'Languages', de: 'Sprache', pos: 'noun', article: 'die', plural: 'Sprachen', ru: 'язык', example: { de: 'Ich spreche drei Sprachen.', ru: 'Я говорю на трёх языках.', cloze: 'Sprachen' } },
    { id: 'all-a11-01-sprechen', icon: 'MessagesSquare', de: 'sprechen', pos: 'verb', ru: 'говорить', forms: 'er spricht · hat gesprochen', note: 'du sprichst, er spricht.', example: { de: 'Sprechen Sie Englisch?', ru: 'Вы говорите по-английски?', cloze: 'Sprechen' } },

    { id: 'all-a11-01-verheiratet', icon: 'Heart', de: 'verheiratet', pos: 'adj', ru: 'женатый, замужем', example: { de: 'Ich bin verheiratet.', ru: 'Я женат.', cloze: 'verheiratet' } },
    { id: 'all-a11-01-ledig', icon: 'User', de: 'ledig', pos: 'adj', ru: 'холост, не замужем', example: { de: 'Mein Bruder ist ledig.', ru: 'Мой брат холост.', cloze: 'ledig' } },
    { id: 'all-a11-01-alt', icon: 'Cake', de: 'alt', pos: 'adj', ru: 'старый; (о возрасте) … лет', note: 'Wie alt sind Sie? — Сколько вам лет? Ich bin 30 Jahre alt.', example: { de: 'Ich bin dreißig Jahre alt.', ru: 'Мне тридцать лет.', cloze: 'alt' } },
    { id: 'all-a11-01-beruf', icon: 'Briefcase', de: 'Beruf', pos: 'noun', article: 'der', plural: 'Berufe', ru: 'профессия', note: 'Was sind Sie von Beruf? — Кто вы по профессии?', example: { de: 'Was sind Sie von Beruf?', ru: 'Кто вы по профессии?', cloze: 'Beruf' } },
    { id: 'all-a11-01-deutschkurs', icon: 'BookOpen', de: 'Deutschkurs', pos: 'noun', article: 'der', plural: 'Deutschkurse', ru: 'курс немецкого', parts: ['Deutsch', 'kurs'], example: { de: 'Ich mache einen Deutschkurs.', ru: 'Я хожу на курс немецкого.', cloze: 'Deutschkurs' } },
    { id: 'all-a11-01-lernen', icon: 'GraduationCap', de: 'lernen', pos: 'verb', ru: 'учить, учиться', forms: 'er lernt · hat gelernt', example: { de: 'Ich lerne jeden Tag Deutsch.', ru: 'Я учу немецкий каждый день.', cloze: 'lerne' } },
    { id: 'all-a11-01-freuen', icon: 'Smile', de: 'Freut mich!', pos: 'phrase', ru: 'Очень приятно!', note: 'При знакомстве. Полностью: Es freut mich, Sie kennenzulernen.', example: { de: 'Freut mich, Frau Schulz!', ru: 'Очень приятно, госпожа Шульц!', cloze: 'Freut mich' } },
    { id: 'all-a11-01-tschuess', icon: 'Hand', de: 'Tschüss', pos: 'phrase', ru: 'пока', note: 'Неформально. Официально — Auf Wiedersehen.', example: { de: 'Tschüss, bis morgen!', ru: 'Пока, до завтра!', cloze: 'Tschüss' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die neue Nachbarin',
      de: `Amir steht vor der Tür. Eine Frau kommt aus der Wohnung nebenan. „Hallo! Ich bin Ihre Nachbarin. Mein Name ist Schulz.“

„Hallo, Frau Schulz! Ich heiße Amir Haddad. Freut mich!“ – „Woher kommen Sie?“ – „Ich komme aus Syrien. Jetzt wohne ich hier in Leipzig.“

„Sprechen Sie Englisch?“, fragt Frau Schulz. „Ja, und Arabisch. Deutsch spreche ich nur ein bisschen.“`,
      ru: `Амир стоит у двери. Из соседней квартиры выходит женщина. «Здравствуйте! Я ваша соседка. Моя фамилия Шульц».

«Здравствуйте, госпожа Шульц! Меня зовут Амир Хаддад. Очень приятно!» — «Откуда вы?» — «Я из Сирии. Теперь я живу здесь, в Лейпциге».

«Вы говорите по-английски?» — спрашивает госпожа Шульц. «Да, и по-арабски. По-немецки я говорю совсем немного».`,
      gloss: { england: 'Англия', wohnung: 'квартира', nebenan: 'по соседству', deutsch: 'немецкий язык', bisschen: 'немного (ein bisschen)', leyla: 'Лейла (имя)', amir: 'Амир (имя)', schulz: 'Шульц (фамилия)', haddad: 'Хаддад (фамилия)', syrien: 'Сирия', leipzig: 'Лейпциг', englisch: 'английский', arabisch: 'арабский', nachbarin: 'соседка' },
      questions: [
        { q: 'Wie heißt die Nachbarin?', ru: 'Как зовут соседку?', options: ['Frau Schulz', 'Frau Haddad', 'Leyla'], answer: 'Frau Schulz' },
        { q: 'Woher kommt Amir?', ru: 'Откуда Амир?', options: ['Aus Syrien', 'Aus Leipzig', 'Aus England'], answer: 'Aus Syrien' },
        { q: 'Welche Sprachen spricht Amir?', ru: 'На каких языках говорит Амир?', options: ['Arabisch, Englisch und ein bisschen Deutsch', 'Nur Deutsch', 'Nur Arabisch'], answer: 'Arabisch, Englisch und ein bisschen Deutsch' },
      ],
      translate: [
        { de: 'Ich komme aus Syrien.', ru: 'Я из Сирии.', wrongRu: ['Я живу в Сирии.', 'Она из Сирии.'] },
        { de: 'Wie heißen Sie?', ru: 'Как вас зовут?', wrongRu: ['Откуда вы?', 'Где вы живёте?'] },
        { de: 'Ich wohne jetzt in Leipzig.', ru: 'Я теперь живу в Лейпциге.', wrongRu: ['Я раньше жил в Лейпциге.', 'Я работаю в Лейпциге.'] },
      ],
    },
    {
      lesson: 1, title: 'Im Deutschkurs',
      de: `Heute ist der erste Tag im Deutschkurs. Die Lehrerin fragt: „Wie alt sind Sie? Sind Sie verheiratet?“

Amir sagt: „Ich bin dreißig Jahre alt. Ich bin verheiratet. Meine Frau heißt Leyla.“ Neben ihm sitzt Dmytro. Er ist ledig.

„Was sind Sie von Beruf?“ – „Ich bin Elektriker“, sagt Amir. „Und ich lerne jetzt Deutsch.“ Nach dem Kurs sagt er: „Tschüss, bis morgen!“`,
      ru: `Сегодня первый день на курсе немецкого. Учительница спрашивает: «Сколько вам лет? Вы женаты?»

Амир говорит: «Мне тридцать лет. Я женат. Мою жену зовут Лейла». Рядом с ним сидит Дмитро. Он холост.

«Кто вы по профессии?» — «Я электрик, — говорит Амир. — А теперь я учу немецкий». После курса он говорит: «Пока, до завтра!»`,
      gloss: { deutsch: 'немецкий язык', amir: 'Амир (имя)', leyla: 'Лейла (имя)', dmytro: 'Дмитро (имя)', lehrerin: 'учительница', elektriker: 'электрик', kurs: 'курс' },
      questions: [
        { q: 'Wie alt ist Amir?', ru: 'Сколько лет Амиру?', options: ['Dreißig', 'Zwanzig', 'Vierzig'], answer: 'Dreißig' },
        { q: 'Wer ist ledig?', ru: 'Кто холост?', options: ['Dmytro', 'Amir', 'Leyla'], answer: 'Dmytro' },
        { q: 'Was ist Amir von Beruf?', ru: 'Кто Амир по профессии?', options: ['Elektriker', 'Lehrer', 'Arzt'], answer: 'Elektriker' },
      ],
      translate: [
        { de: 'Ich bin verheiratet.', ru: 'Я женат.', wrongRu: ['Я холост.', 'Он женат.'] },
        { de: 'Was sind Sie von Beruf?', ru: 'Кто вы по профессии?', wrongRu: ['Где вы работаете?', 'Сколько вам лет?'] },
        { de: 'Ich lerne jetzt Deutsch.', ru: 'Я теперь учу немецкий.', wrongRu: ['Я уже знаю немецкий.', 'Я преподаю немецкий.'] },
      ],
    },
  ],
};
