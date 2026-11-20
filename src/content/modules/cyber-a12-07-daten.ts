import type { Module } from '../types.ts';

// A1.2 cyber 07: personal details in an online form (lesson 0) and a fake prize draw (lesson 1).

export const module: Module = {
  id: 'cyber-a12-07-daten', sphere: 'cyber', level: 'A1.2',
  title: 'Meine Daten', subtitle: 'Адрес, телефон, день рождения: какие личные данные лучше не раздавать.',
  words: [
    { id: 'cyb-a12-07-adresse', icon: 'Mailbox', imageQuery: 'address on envelope', de: 'Adresse', pos: 'noun', article: 'die', plural: 'Adressen', ru: 'адрес', collocation: { de: 'die Adresse angeben', ru: 'указать адрес', accept: ['meine Adresse angeben', 'seine Adresse angeben'] }, example: { de: 'Schreib deine Adresse nicht ins Internet!', ru: 'Не пиши свой адрес в интернете!', cloze: 'Adresse' } },
    { id: 'cyb-a12-07-telefonnummer', icon: 'Phone', imageQuery: 'phone keypad', de: 'Telefonnummer', pos: 'noun', article: 'die', plural: 'Telefonnummern', ru: 'номер телефона', parts: ['Telefon', 'nummer'], collocation: { de: 'die Telefonnummer geben', ru: 'дать номер телефона', accept: ['meine Telefonnummer geben'] }, example: { de: 'Gib deine Telefonnummer nicht jedem!', ru: 'Не давай свой номер телефона каждому!', cloze: 'Telefonnummer' } },
    { id: 'cyb-a12-07-geburtstag', icon: 'Cake', imageQuery: 'birthday cake with candles', de: 'Geburtstag', pos: 'noun', article: 'der', plural: 'Geburtstage', ru: 'день рождения', parts: ['Geburts', 'tag'], note: 'die Geburt (рождение) + s + der Tag. Ich habe heute Geburtstag — у меня сегодня день рождения.', collocation: { de: 'Alles Gute zum Geburtstag!', ru: 'С днём рождения!', accept: ['Alles Gute zum Geburtstag'] }, example: { de: 'Mein Geburtstag ist im Mai.', ru: 'Мой день рождения в мае.', cloze: 'Geburtstag' } },
    { id: 'cyb-a12-07-foto', icon: 'Image', imageQuery: 'printed photographs', de: 'Foto', pos: 'noun', article: 'das', plural: 'Fotos', ru: 'фотография, фото', collocation: { de: 'ein Foto posten', ru: 'выложить фото', accept: ['das Foto posten', 'ein Foto hochladen'] }, example: { de: 'Auf dem Foto sieht man mein Haus.', ru: 'На фото видно мой дом.', cloze: 'Foto' } },
    { id: 'cyb-a12-07-vorname', icon: 'UserRound', imageQuery: 'name tag', de: 'Vorname', pos: 'noun', article: 'der', plural: 'Vornamen', ru: 'имя', parts: ['Vor', 'name'], note: 'der Vorname — имя, der Nachname — фамилия.', example: { de: 'Mein Vorname ist Paula.', ru: 'Меня зовут Паула.', cloze: 'Vorname' } },
    { id: 'cyb-a12-07-nachname', icon: 'Signature', imageQuery: 'door name plate', de: 'Nachname', pos: 'noun', article: 'der', plural: 'Nachnamen', ru: 'фамилия', parts: ['Nach', 'name'], note: 'Синоним: der Familienname.', example: { de: 'Wie ist dein Nachname?', ru: 'Какая у тебя фамилия?', cloze: 'Nachname' } },
    { id: 'cyb-a12-07-wohnen', icon: 'House', de: 'wohnen', pos: 'verb', ru: 'жить, проживать', forms: 'er wohnt · hat gewohnt', note: 'wohnen in + Dat: Ich wohne in Wien. (leben — жить вообще.)', example: { de: 'Paula wohnt mit ihrer Familie in Wien.', ru: 'Паула живёт с семьёй в Вене.', cloze: 'wohnt' } },
    { id: 'cyb-a12-07-ausfuellen', icon: 'ClipboardPen', imageQuery: 'filling out paper form', de: 'ausfüllen', pos: 'verb', ru: 'заполнять (анкету, форму)', forms: 'er füllt aus · hat ausgefüllt', note: 'Отделяемая приставка: Ich fülle das Formular aus.', collocation: { de: 'ein Formular ausfüllen', ru: 'заполнить анкету', accept: ['das Formular ausfüllen'] }, example: { de: 'Ich fülle das Formular online aus.', ru: 'Я заполняю анкету онлайн.', cloze: 'fülle' } },

    { id: 'cyb-a12-07-daten', icon: 'Database', de: 'Daten', pos: 'noun', article: 'die', pluralOnly: true, ru: 'данные', note: 'В значении «данные» — только мн. ч.', collocation: { de: 'persönliche Daten', ru: 'личные данные', accept: ['die persönlichen Daten'] }, example: { de: 'Meine Daten gehören mir.', ru: 'Мои данные принадлежат мне.', cloze: 'Daten' } },
    { id: 'cyb-a12-07-persoenlich', icon: 'Contact', de: 'persönlich', pos: 'adj', ru: 'личный; лично', example: { de: 'Das ist eine persönliche Frage.', ru: 'Это личный вопрос.', cloze: 'persönliche' } },
    { id: 'cyb-a12-07-verraten', icon: 'Megaphone', de: 'verraten', pos: 'verb', ru: 'выдавать (секрет), рассказывать', forms: 'er verrät · hat verraten', note: 'jemandem etwas verraten — выдать кому-то что-то. Приставка ver- неотделяемая. Второе значение — «предавать».', example: { de: 'Er verrät seine Adresse nicht.', ru: 'Он не выдаёт свой адрес.', cloze: 'verrät' } },
    { id: 'cyb-a12-07-weitergeben', icon: 'Forward', de: 'weitergeben', pos: 'verb', ru: 'передавать (дальше)', forms: 'er gibt weiter · hat weitergegeben', note: 'Отделяемая приставка: Ich gebe … weiter. weitergeben an + Akk — передать кому-то.', collocation: { de: 'Daten weitergeben', ru: 'передавать данные', accept: ['die Daten weitergeben', 'meine Daten weitergeben'] }, example: { de: 'Die App hat meine Daten weitergegeben.', ru: 'Приложение передало мои данные дальше.', cloze: 'weitergegeben' } },
    { id: 'cyb-a12-07-unbekannt', icon: 'Ghost', de: 'unbekannt', pos: 'adj', ru: 'незнакомый, неизвестный', collocation: { de: 'eine unbekannte Nummer', ru: 'незнакомый номер', accept: ['unbekannte Nummer'] }, example: { de: 'Eine unbekannte Person schreibt mir.', ru: 'Мне пишет незнакомый человек.', cloze: 'unbekannte' } },
    { id: 'cyb-a12-07-gewinnspiel', icon: 'Gift', imageQuery: 'lottery tickets', de: 'Gewinnspiel', pos: 'noun', article: 'das', plural: 'Gewinnspiele', ru: 'розыгрыш, конкурс с призами', parts: ['Gewinn', 'spiel'], note: 'der Gewinn (выигрыш) + das Spiel. Часто ловушка для сбора данных.', example: { de: 'Bei dem Gewinnspiel kann man ein Handy gewinnen.', ru: 'В этом розыгрыше можно выиграть телефон.', cloze: 'Gewinnspiel' } },
    { id: 'cyb-a12-07-ausweis', icon: 'IdCard', imageQuery: 'identity card', de: 'Ausweis', pos: 'noun', article: 'der', plural: 'Ausweise', ru: 'удостоверение личности, документ', note: 'der Personalausweis — ID-карта, der Schülerausweis — ученический билет.', collocation: { de: 'den Ausweis zeigen', ru: 'показать документ', accept: ['seinen Ausweis zeigen', 'deinen Ausweis zeigen'] }, example: { de: 'Mach kein Foto von deinem Ausweis!', ru: 'Не фотографируй своё удостоверение!', cloze: 'Ausweis' } },
    { id: 'cyb-a12-07-strasse', icon: 'Signpost', imageQuery: 'street name sign Vienna', de: 'Straße', pos: 'noun', article: 'die', plural: 'Straßen', ru: 'улица', note: 'В адресе: улица + номер дома, например Hauptstraße.', example: { de: 'In welcher Straße wohnst du?', ru: 'На какой улице ты живёшь?', cloze: 'Straße' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Formular im Internet',
      de: `Paula ist dreizehn und wohnt in Wien. Sie will online bei einem Schachklub mitmachen. Dafür muss sie ein Formular ausfüllen.

Zuerst schreibt sie ihren Vornamen und ihren Nachnamen. Dann fragt das Formular: Adresse, Telefonnummer, Geburtstag. Am Ende will der Klub auch ein Foto.

Paula fragt ihre Mutter. Die Mutter sagt: „Vorname und Geburtstag sind okay. Aber warum braucht ein Schachklub deine Adresse und ein Foto?“ Paula schreibt keine Telefonnummer und lädt kein Foto hoch. Sie füllt nur das Wichtigste aus.`,
      ru: `Пауле тринадцать, она живёт в Вене. Она хочет вступить в шахматный клуб онлайн. Для этого ей нужно заполнить анкету.

Сначала она пишет своё имя и фамилию. Потом анкета спрашивает: адрес, номер телефона, день рождения. В конце клуб хочет ещё и фото.

Паула спрашивает маму. Мама говорит: «Имя и день рождения — нормально. Но зачем шахматному клубу твой адрес и фото?» Паула не пишет номер телефона и не загружает фото. Она заполняет только самое важное.`,
      gloss: { paula: 'Паула (имя)', dreizehn: 'тринадцать', wien: 'Вена', online: 'онлайн', schachklub: 'шахматный клуб', fußballklub: 'футбольный клуб', mitmachen: 'участвовать, присоединиться', dafür: 'для этого', formular: 'анкета, форма', klub: 'клуб', lädt: 'загружает (здесь: lädt … hoch — загружает в сеть)', hoch: 'вверх; (здесь) часть глагола hochladen — загружать в сеть', wichtigste: 'самое важное', ins: 'в (ins Formular — в анкету)', mai: 'май' },
      questions: [
        { q: 'Wo will Paula mitmachen?', ru: 'Где Паула хочет участвовать?', options: ['Bei einem Schachklub', 'Bei einem Fußballklub', 'Bei einem Gewinnspiel'], answer: 'Bei einem Schachklub' },
        { q: 'Was will der Klub am Ende?', ru: 'Что клуб хочет в конце?', options: ['Ein Foto', 'Eine Adresse', 'Einen Ausweis'], answer: 'Ein Foto' },
        { q: 'Was schreibt Paula nicht ins Formular?', ru: 'Что Паула не пишет в анкету?', options: ['Ihre Telefonnummer', 'Ihren Vornamen', 'Ihren Geburtstag'], answer: 'Ihre Telefonnummer' },
        { q: 'Wer hilft Paula?', ru: 'Кто помогает Пауле?', options: ['Ihre Mutter', 'Ihr Bruder', 'Ihre Lehrerin'], answer: 'Ihre Mutter' },
      ],
      translate: [
        { de: 'Paula füllt das Formular aus.', ru: 'Паула заполняет анкету.', wrongRu: ['Паула удаляет анкету.', 'Паула заполнила анкету.'] },
        { de: 'Wie ist dein Nachname?', ru: 'Какая у тебя фамилия?', wrongRu: ['Как тебя зовут?', 'Какая у него фамилия?'] },
        { de: 'Mein Geburtstag ist im Mai.', ru: 'Мой день рождения в мае.', wrongRu: ['Мой день рождения в марте.', 'Твой день рождения в мае.'] },
      ],
    },
    {
      lesson: 1, title: 'Das große Gewinnspiel',
      de: `Paulas Freund Leon findet im Internet ein Gewinnspiel. Man kann ein neues Handy gewinnen! Leon muss nur seine Daten schreiben: Name, Straße, Telefonnummer und ein Foto vom Ausweis.

Leon ist froh, aber Paula sagt: „Stopp! Das ist persönlich. Die Firma ist unbekannt. Vielleicht gibt sie deine Daten weiter.“

Leon denkt nach. Er verrät seine Daten nicht. Eine Woche später liest er in den Nachrichten: Das Gewinnspiel war ein Betrug. Die Firma hat viele Daten gesammelt und verkauft.`,
      ru: `Друг Паулы Леон находит в интернете розыгрыш. Можно выиграть новый телефон! Леону нужно только написать свои данные: имя, улицу, номер телефона и фото удостоверения.

Леон рад, но Паула говорит: «Стоп! Это личное. Фирма неизвестная. Может быть, она передаст твои данные дальше».

Леон думает. Он не выдаёт свои данные. Через неделю он читает в новостях: розыгрыш был мошенничеством. Фирма собрала много данных и продала их.`,
      gloss: {
        wien: 'Вена', paula: 'Паула (имя)', paulas: 'Паулы (чей?)', leon: 'Леон (имя)', internet: 'интернет', handy: 'мобильный телефон', gewinnen: 'выигрывать', stopp: 'стоп', firma: 'фирма, компания', gibt: 'даёт; (здесь) gibt … weiter — передаёт дальше', weiter: 'дальше; (здесь) часть глагола weitergeben', nach: 'после; (здесь) denkt nach — думает, размышляет', nachrichten: 'новости; сообщения', betrug: 'обман, мошенничество', gesammelt: 'собрала (sammeln — собирать)', verkauft: 'продала (verkaufen — продавать)', geschenk: 'подарок', später: 'позже (eine Woche später — через неделю)' },
      questions: [
        { q: 'Was kann man bei dem Gewinnspiel gewinnen?', ru: 'Что можно выиграть в розыгрыше?', options: ['Ein Handy', 'Einen Laptop', 'Einen Ausweis'], answer: 'Ein Handy' },
        { q: 'Was sagt Paula über die Firma?', ru: 'Что Паула говорит о фирме?', options: ['Sie ist unbekannt.', 'Sie ist sehr gut.', 'Sie ist in Wien.'], answer: 'Sie ist unbekannt.' },
        { q: 'Was war das Gewinnspiel?', ru: 'Чем был розыгрыш?', options: ['Ein Betrug', 'Ein Geschenk', 'Eine Nachricht'], answer: 'Ein Betrug' },
      ],
      translate: [
        { de: 'Meine Daten sind persönlich.', ru: 'Мои данные — личные.', wrongRu: ['Твои данные — личные.', 'Мои данные — общедоступные.'] },
        { de: 'Die Firma gibt deine Daten weiter.', ru: 'Фирма передаёт твои данные дальше.', wrongRu: ['Фирма удаляет твои данные.', 'Фирма передала твои данные дальше.'] },
        { de: 'Leon verrät seine Adresse nicht.', ru: 'Леон не выдаёт свой адрес.', wrongRu: ['Леон выдаёт свой адрес.', 'Леон не знает свой адрес.'] },
      ],
    },
  ],
};
