import type { Module } from '../types.ts';

// A2.1 alltag 05: health insurance — statutory/private, contribution, co-payment (lesson 0); specialists, dentist, vaccinations, check-ups (lesson 1).

export const module: Module = {
  id: 'alltag-a21-05-krankenversicherung', sphere: 'alltag', level: 'A2.1',
  title: 'Die Krankenversicherung', subtitle: 'Медицинская страховка: государственная и частная, взносы, доплаты, специалисты, прививки и профилактика.',
  words: [
    { id: 'all-a21-05-krankenversicherung', icon: 'ShieldPlus', de: 'Krankenversicherung', pos: 'noun', article: 'die', plural: 'Krankenversicherungen', ru: 'медицинская страховка', parts: ['Kranken', 'versicherung'], note: 'В Германии медстраховка обязательна для всех.', example: { de: 'In Deutschland ist eine Krankenversicherung Pflicht.', ru: 'В Германии медстраховка обязательна.', cloze: 'Krankenversicherung' } },
    { id: 'all-a21-05-krankenkasse', icon: 'Building', de: 'Krankenkasse', pos: 'noun', article: 'die', plural: 'Krankenkassen', ru: 'больничная касса (страховщик)', parts: ['Kranken', 'kasse'], example: { de: 'Bei welcher Krankenkasse sind Sie?', ru: 'В какой больничной кассе вы застрахованы?', cloze: 'Krankenkasse' } },
    { id: 'all-a21-05-versichert', icon: 'ShieldCheck', de: 'versichert', pos: 'adj', ru: 'застрахованный', example: { de: 'Die Kinder sind bei mir mitversichert.', ru: 'Дети застрахованы вместе со мной.', cloze: 'versichert' } },
    { id: 'all-a21-05-gesetzlich', icon: 'Scale', de: 'gesetzlich', pos: 'adj', ru: 'законный, государственный (о страховке)', note: 'gesetzlich versichert — в государственной кассе; privat versichert — в частной.', example: { de: 'Die meisten Menschen sind gesetzlich versichert.', ru: 'Большинство людей застрахованы в государственной кассе.', cloze: 'gesetzlich' } },
    { id: 'all-a21-05-privat', icon: 'Lock', de: 'privat', pos: 'adj', ru: 'частный, личный', example: { de: 'Privat versichert sind vor allem Beamte.', ru: 'В частных кассах застрахованы в основном госслужащие.', cloze: 'Privat' } },
    { id: 'all-a21-05-beitrag', icon: 'Percent', de: 'Beitrag', pos: 'noun', article: 'der', plural: 'Beiträge', ru: 'взнос', note: 'Взнос делят работник и работодатель.', example: { de: 'Den Beitrag zahlt man direkt vom Gehalt.', ru: 'Взнос платится прямо из зарплаты.', cloze: 'Beitrag' } },
    { id: 'all-a21-05-zuzahlung', icon: 'Coins', de: 'Zuzahlung', pos: 'noun', article: 'die', plural: 'Zuzahlungen', ru: 'доплата (пациента)', note: 'Например, за лекарство по рецепту — 5–10 €.', example: { de: 'Für das Medikament gibt es eine Zuzahlung von fünf Euro.', ru: 'За лекарство доплата пять евро.', cloze: 'Zuzahlung' } },
    { id: 'all-a21-05-gesundheitskarte', icon: 'CreditCard', de: 'Gesundheitskarte', pos: 'noun', article: 'die', plural: 'Gesundheitskarten', ru: 'карта медицинского страхования', parts: ['Gesundheits', 'karte'], example: { de: 'Die Gesundheitskarte hat ein Foto.', ru: 'На карте медстрахования есть фото.', cloze: 'Gesundheitskarte' } },

    { id: 'all-a21-05-facharzt', icon: 'Stethoscope', de: 'Facharzt', pos: 'noun', article: 'der', plural: 'Fachärzte', ru: 'врач-специалист', parts: ['Fach', 'arzt'], example: { de: 'Beim Facharzt wartet man oft lange.', ru: 'К специалисту часто долго ждать.', cloze: 'Facharzt' } },
    { id: 'all-a21-05-zahnarzt', icon: 'Smile', de: 'Zahnarzt', pos: 'noun', article: 'der', plural: 'Zahnärzte', ru: 'стоматолог', parts: ['Zahn', 'arzt'], note: 'Женщина — die Zahnärztin.', example: { de: 'Zweimal im Jahr gehe ich zum Zahnarzt.', ru: 'Два раза в год я хожу к стоматологу.', cloze: 'Zahnarzt' } },
    { id: 'all-a21-05-kinderarzt', icon: 'Baby', de: 'Kinderarzt', pos: 'noun', article: 'der', plural: 'Kinderärzte', ru: 'педиатр', parts: ['Kinder', 'arzt'], example: { de: 'Der Kinderarzt untersucht Karim.', ru: 'Педиатр осматривает Карима.', cloze: 'Kinderarzt' } },
    { id: 'all-a21-05-impfung', icon: 'Syringe', de: 'Impfung', pos: 'noun', article: 'die', plural: 'Impfungen', ru: 'прививка', note: 'der Impfpass — прививочный сертификат.', example: { de: 'Die Impfung gegen Masern ist wichtig.', ru: 'Прививка от кори важна.', cloze: 'Impfung' } },
    { id: 'all-a21-05-impfen', icon: 'Syringe', de: 'impfen', pos: 'verb', ru: 'делать прививку', forms: 'er impft · hat geimpft', example: { de: 'Ist Ihr Kind schon geimpft?', ru: 'Ваш ребёнок уже привит?', cloze: 'geimpft' } },
    { id: 'all-a21-05-vorsorge', icon: 'HeartPulse', de: 'Vorsorge', pos: 'noun', article: 'die', ru: 'профилактика, профилактический осмотр', note: 'Для детей — обязательные осмотры U1–U9.', example: { de: 'Die Vorsorge für Kinder bezahlt die Krankenkasse.', ru: 'Профилактику для детей оплачивает больничная касса.', cloze: 'Vorsorge' } },
    { id: 'all-a21-05-bonusheft', icon: 'BookOpen', de: 'Bonusheft', pos: 'noun', article: 'das', plural: 'Bonushefte', ru: 'бонусная книжка (стоматолог)', parts: ['Bonus', 'heft'], note: 'Регулярные визиты к стоматологу — меньше доплата за протезы.', example: { de: 'Der Zahnarzt stempelt mein Bonusheft.', ru: 'Стоматолог ставит печать в мою бонусную книжку.', cloze: 'Bonusheft' } },
    { id: 'all-a21-05-pflicht', icon: 'CircleAlert', de: 'Pflicht', pos: 'noun', article: 'die', plural: 'Pflichten', ru: 'обязанность', example: { de: 'Die Schule ist in Deutschland Pflicht.', ru: 'Школа в Германии обязательна.', cloze: 'Pflicht' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wie funktioniert die Krankenkasse?',
      de: `Amir hat jetzt eine Arbeit. Er muss eine Krankenkasse wählen. Die Kollegin Petra erklärt: „In Deutschland ist die Krankenversicherung Pflicht. Die meisten Menschen sind gesetzlich versichert, nur wenige privat.“

„Wie viel kostet das?“, fragt Amir. „Der Beitrag hängt vom Gehalt ab. Du und der Chef zahlen je die Hälfte. Das Geld geht direkt vom Gehalt weg.“

„Und meine Familie?“ – „Deine Frau und die Kinder sind bei dir mitversichert. Das kostet nichts extra.“ Beim Arzt zeigt Amir dann nur seine Gesundheitskarte. Für Medikamente gibt es manchmal eine kleine Zuzahlung.`,
      ru: `У Амира теперь есть работа. Ему нужно выбрать больничную кассу. Коллега Петра объясняет: «В Германии медстраховка обязательна. Большинство застрахованы в государственной кассе, лишь немногие — в частной».

«Сколько это стоит?» — спрашивает Амир. «Взнос зависит от зарплаты. Ты и начальник платите по половине. Деньги снимаются прямо с зарплаты».

«А моя семья?» — «Жена и дети застрахованы вместе с тобой. Это ничего не стоит дополнительно». У врача Амир потом просто показывает карту медстрахования. За лекарства иногда бывает небольшая доплата.`,
      gloss: { deutschland: 'Германия', menschen: 'люди', extra: 'отдельно', gar: 'вовсе (gar nicht — вообще нет)', versicherung: 'страховая компания', leyla: 'Лейла (имя)', amir: 'Амир (имя)', petra: 'Петра (имя)', arbeit: 'работа', wählen: 'выбрать', meisten: 'большинство', wenige: 'немногие', hängt: '(hängt … ab) зависит', ab: '(hängt … ab) зависит', chef: 'начальник', je: 'по, каждый', hälfte: 'половина', direkt: 'прямо', mitversichert: 'застрахованы вместе (с кем-то)', funktioniert: 'работает, функционирует' },
      questions: [
        { q: 'Wie sind die meisten Menschen in Deutschland versichert?', ru: 'Как застраховано большинство людей в Германии?', options: ['Gesetzlich', 'Privat', 'Gar nicht'], answer: 'Gesetzlich' },
        { q: 'Wer zahlt den Beitrag?', ru: 'Кто платит взнос?', options: ['Amir und der Chef je die Hälfte', 'Nur Amir', 'Nur der Chef'], answer: 'Amir und der Chef je die Hälfte' },
        { q: 'Was kostet die Versicherung für Leyla und die Kinder?', ru: 'Сколько стоит страховка для Лейлы и детей?', options: ['Nichts extra', 'Hundert Euro', 'Die Hälfte'], answer: 'Nichts extra' },
      ],
      translate: [
        { de: 'Die Krankenversicherung ist Pflicht.', ru: 'Медстраховка обязательна.', wrongRu: ['Медстраховка добровольная.', 'Медстраховка бесплатная.'] },
        { de: 'Die Kinder sind bei mir mitversichert.', ru: 'Дети застрахованы вместе со мной.', wrongRu: ['Дети не застрахованы.', 'Дети застрахованы отдельно.'] },
        { de: 'Bei welcher Krankenkasse sind Sie?', ru: 'В какой больничной кассе вы застрахованы?', wrongRu: ['Какой у вас врач?', 'Сколько стоит ваша страховка?'] },
      ],
    },
    {
      lesson: 1, title: 'Vorsorge für die Kinder',
      de: `Für Kinder gibt es in Deutschland regelmäßige Vorsorgeuntersuchungen. Die Krankenkasse bezahlt sie. Leyla geht mit Karim zum Kinderarzt. Der Arzt fragt: „Ist Karim gegen Masern geimpft?“ Leyla zeigt den Impfpass aus Syrien. Eine Impfung fehlt noch. Karim bekommt sie sofort.

Leyla hat seit Wochen Rückenschmerzen. Ihr Hausarzt schickt sie zu einem Facharzt. Aber dort wartet man oft zwei Monate auf einen Termin!

Amir geht zum Zahnarzt. Der Zahnarzt stempelt sein Bonusheft. „Kommen Sie zweimal im Jahr“, sagt er. „Dann zahlt die Krankenkasse später mehr, wenn Sie neue Zähne brauchen.“`,
      ru: `Для детей в Германии есть регулярные профилактические осмотры. Их оплачивает больничная касса. Лейла идёт с Каримом к педиатру. Врач спрашивает: «Карим привит от кори?» Лейла показывает прививочный сертификат из Сирии. Одной прививки не хватает. Кариму сразу её делают.

У Лейлы уже несколько недель болит спина. Семейный врач направляет её к специалисту. Но там записи часто ждут два месяца!

Амир идёт к стоматологу. Стоматолог ставит печать в его бонусную книжку. «Приходите два раза в год, — говорит он. — Тогда касса потом заплатит больше, если вам понадобятся новые зубы».`,
      gloss: { regelmäßige: 'регулярные', deutschland: 'Германия', syrien: 'Сирия', zweimal: 'два раза', leyla: 'Лейла (имя)', karim: 'Карим (имя)', amir: 'Амир (имя)', vorsorgeuntersuchungen: 'профилактические осмотры', masern: 'корь', impfpass: 'прививочный сертификат', fehlt: 'не хватает', rückenschmerzen: 'боль в спине', schickt: 'направляет, посылает', stempelt: 'ставит печать', zähne: 'зубы' },
      questions: [
        { q: 'Wer bezahlt die Vorsorgeuntersuchungen?', ru: 'Кто оплачивает профилактические осмотры?', options: ['Die Krankenkasse', 'Die Eltern', 'Die Schule'], answer: 'Die Krankenkasse' },
        { q: 'Wie lange wartet man beim Facharzt oft auf einen Termin?', ru: 'Сколько часто ждут записи к специалисту?', options: ['Zwei Monate', 'Zwei Tage', 'Ein Jahr'], answer: 'Zwei Monate' },
        { q: 'Wie oft soll Amir zum Zahnarzt gehen?', ru: 'Как часто Амиру ходить к стоматологу?', options: ['Zweimal im Jahr', 'Jeden Monat', 'Alle fünf Jahre'], answer: 'Zweimal im Jahr' },
      ],
      translate: [
        { de: 'Ist Ihr Kind schon geimpft?', ru: 'Ваш ребёнок уже привит?', wrongRu: ['Ваш ребёнок уже здоров?', 'Ваш ребёнок уже в школе?'] },
        { de: 'Beim Facharzt wartet man lange.', ru: 'К специалисту долго ждать.', wrongRu: ['К специалисту быстро попасть.', 'К стоматологу долго ждать.'] },
        { de: 'Ich gehe zweimal im Jahr zum Zahnarzt.', ru: 'Я хожу к стоматологу два раза в год.', wrongRu: ['Я хожу к стоматологу раз в год.', 'Я хожу к педиатру два раза в год.'] },
      ],
    },
  ],
};
