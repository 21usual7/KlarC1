import type { Module } from '../types.ts';

// A1.2 alltag 01: at the doctor's — practice, appointment, waiting room (lesson 0); symptoms, sick note, get well (lesson 1).

export const module: Module = {
  id: 'alltag-a12-01-arzt', sphere: 'alltag', level: 'A1.2',
  title: 'Beim Arzt', subtitle: 'У врача: записаться, приёмные часы, симптомы и больничный.',
  words: [
    { id: 'all-a12-01-arztpraxis', icon: 'Stethoscope', imageQuery: 'doctor office waiting', de: 'Arztpraxis', pos: 'noun', article: 'die', plural: 'Arztpraxen', ru: 'врачебный кабинет, практика', parts: ['Arzt', 'praxis'], note: 'Часто просто: die Praxis.', example: { de: 'Die Arztpraxis ist im ersten Stock.', ru: 'Кабинет врача на втором этаже.', cloze: 'Arztpraxis' } },
    { id: 'all-a12-01-hausarzt', icon: 'Stethoscope', de: 'Hausarzt', pos: 'noun', article: 'der', plural: 'Hausärzte', ru: 'семейный врач, терапевт', parts: ['Haus', 'arzt'], note: 'Женщина — die Hausärztin. Сначала идут к нему, потом по направлению к специалисту.', example: { de: 'Ich suche einen Hausarzt.', ru: 'Я ищу семейного врача.', cloze: 'Hausarzt' } },
    { id: 'all-a12-01-sprechstunde', icon: 'Clock', de: 'Sprechstunde', pos: 'noun', article: 'die', plural: 'Sprechstunden', ru: 'приёмные часы', parts: ['Sprech', 'stunde'], example: { de: 'Die Sprechstunde ist von acht bis zwölf.', ru: 'Приём с восьми до двенадцати.', cloze: 'Sprechstunde' } },
    { id: 'all-a12-01-wartezimmer', icon: 'Armchair', de: 'Wartezimmer', pos: 'noun', article: 'das', plural: 'Wartezimmer', ru: 'приёмная, комната ожидания', parts: ['Warte', 'zimmer'], example: { de: 'Bitte nehmen Sie im Wartezimmer Platz.', ru: 'Пожалуйста, присядьте в приёмной.', cloze: 'Wartezimmer' } },
    { id: 'all-a12-01-krank', icon: 'Frown', de: 'krank', pos: 'adj', ru: 'больной', example: { de: 'Mein Sohn ist krank.', ru: 'Мой сын болен.', cloze: 'krank' } },
    { id: 'all-a12-01-versichertenkarte', icon: 'CreditCard', de: 'Versichertenkarte', pos: 'noun', article: 'die', plural: 'Versichertenkarten', ru: 'карта медицинского страхования', parts: ['Versicherten', 'karte'], example: { de: 'Ihre Versichertenkarte, bitte.', ru: 'Вашу страховую карту, пожалуйста.', cloze: 'Versichertenkarte' } },
    { id: 'all-a12-01-rezept', icon: 'FileText', de: 'Rezept', pos: 'noun', article: 'das', plural: 'Rezepte', ru: 'рецепт', example: { de: 'Der Arzt gibt mir ein Rezept.', ru: 'Врач даёт мне рецепт.', cloze: 'Rezept' } },
    { id: 'all-a12-01-krankmeldung', icon: 'FileHeart', de: 'Krankmeldung', pos: 'noun', article: 'die', plural: 'Krankmeldungen', ru: 'больничный лист', parts: ['Krank', 'meldung'], note: 'Официально: Arbeitsunfähigkeitsbescheinigung (AU). Работодателю — с 4-го дня болезни, часто раньше.', example: { de: 'Ich brauche eine Krankmeldung für die Arbeit.', ru: 'Мне нужен больничный для работы.', cloze: 'Krankmeldung' } },

    { id: 'all-a12-01-fieber', icon: 'Thermometer', de: 'Fieber', pos: 'noun', article: 'das', ru: 'жар, температура', example: { de: 'Nour hat seit gestern Fieber.', ru: 'У Нур со вчерашнего дня температура.', cloze: 'Fieber' } },
    { id: 'all-a12-01-husten', icon: 'Wind', de: 'Husten', pos: 'noun', article: 'der', ru: 'кашель', example: { de: 'Der Husten ist nachts schlimm.', ru: 'Ночью кашель сильный.', cloze: 'Husten' } },
    { id: 'all-a12-01-schmerz', icon: 'Zap', de: 'Schmerz', pos: 'noun', article: 'der', plural: 'Schmerzen', ru: 'боль', example: { de: 'Ich habe Schmerzen im Bauch.', ru: 'У меня болит живот.', cloze: 'Schmerzen' } },
    { id: 'all-a12-01-wehtun', icon: 'Zap', de: 'wehtun', pos: 'verb', ru: 'болеть (о части тела)', forms: 'es tut weh · hat wehgetan', note: 'Mir tut der Kopf weh. — У меня болит голова.', example: { de: 'Mir tut der Hals weh.', ru: 'У меня болит горло.', cloze: 'tut' } },
    { id: 'all-a12-01-kopfschmerzen', icon: 'Brain', de: 'Kopfschmerzen', pos: 'noun', article: 'die', pluralOnly: true, ru: 'головная боль', parts: ['Kopf', 'schmerzen'], example: { de: 'Ich habe starke Kopfschmerzen.', ru: 'У меня сильно болит голова.', cloze: 'Kopfschmerzen' } },
    { id: 'all-a12-01-halsschmerzen', icon: 'Thermometer', de: 'Halsschmerzen', pos: 'noun', article: 'die', pluralOnly: true, ru: 'боль в горле', parts: ['Hals', 'schmerzen'], example: { de: 'Sie hat Halsschmerzen und Husten.', ru: 'У неё болит горло и кашель.', cloze: 'Halsschmerzen' } },
    { id: 'all-a12-01-untersuchen', icon: 'ScanSearch', de: 'untersuchen', pos: 'verb', ru: 'обследовать, осматривать', forms: 'er untersucht · hat untersucht', example: { de: 'Die Ärztin untersucht das Kind.', ru: 'Врач осматривает ребёнка.', cloze: 'untersucht' } },
    { id: 'all-a12-01-gute-besserung', icon: 'HeartPulse', de: 'Gute Besserung!', pos: 'phrase', ru: 'Выздоравливайте!', example: { de: 'Gute Besserung, Nour!', ru: 'Выздоравливай, Нур!', cloze: 'Gute Besserung' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Einen Termin machen',
      de: `Nour ist krank. Leyla ruft in der Arztpraxis an. „Guten Morgen, meine Tochter hat Fieber. Kann sie heute kommen?“ – „Die Sprechstunde ist bis zwölf Uhr. Kommen Sie um zehn.“

In der Praxis fragt die Frau am Empfang: „Ihre Versichertenkarte, bitte.“ Leyla gibt ihr die Karte. „Danke. Nehmen Sie bitte im Wartezimmer Platz.“

Im Wartezimmer sitzen viele Leute. Nach dreißig Minuten ruft die Ärztin: „Nour Haddad, bitte!“`,
      ru: `Нур заболела. Лейла звонит в кабинет врача. «Доброе утро, у моей дочери температура. Можно прийти сегодня?» — «Приём до двенадцати. Приходите в десять».

В кабинете женщина на ресепшене спрашивает: «Вашу страховую карту, пожалуйста». Лейла даёт ей карту. «Спасибо. Присядьте, пожалуйста, в приёмной».

В приёмной сидит много людей. Через тридцать минут врач зовёт: «Нур Хаддад, пожалуйста!»`,
      gloss: { praxis: 'практика', karte: 'карта', ärztin: 'врач (женщина)', nour: 'Нур (имя)', leyla: 'Лейла (имя)', haddad: 'Хаддад (фамилия)', empfang: 'ресепшен, регистратура', platz: '(Platz nehmen) садиться', leute: 'люди' },
      questions: [
        { q: 'Warum ruft Leyla an?', ru: 'Почему Лейла звонит?', options: ['Nour hat Fieber.', 'Sie braucht ein Rezept.', 'Sie hat Kopfschmerzen.'], answer: 'Nour hat Fieber.' },
        { q: 'Bis wann ist die Sprechstunde?', ru: 'До скольких приём?', options: ['Bis zwölf Uhr', 'Bis zehn Uhr', 'Bis acht Uhr'], answer: 'Bis zwölf Uhr' },
        { q: 'Wie lange warten sie?', ru: 'Сколько они ждут?', options: ['Dreißig Minuten', 'Zehn Minuten', 'Eine Stunde'], answer: 'Dreißig Minuten' },
      ],
      translate: [
        { de: 'Meine Tochter hat Fieber.', ru: 'У моей дочери температура.', wrongRu: ['У моего сына температура.', 'У моей дочери кашель.'] },
        { de: 'Ihre Versichertenkarte, bitte.', ru: 'Вашу страховую карту, пожалуйста.', wrongRu: ['Ваш рецепт, пожалуйста.', 'Ваш паспорт, пожалуйста.'] },
        { de: 'Bitte nehmen Sie im Wartezimmer Platz.', ru: 'Пожалуйста, присядьте в приёмной.', wrongRu: ['Пожалуйста, зайдите в кабинет.', 'Пожалуйста, подождите на улице.'] },
      ],
    },
    {
      lesson: 1, title: 'Was fehlt Ihnen?',
      de: `Die Ärztin untersucht Nour. „Was tut dir weh?“ – „Mir tut der Hals weh. Und ich habe Husten und Kopfschmerzen.“

„Das ist eine Erkältung“, sagt die Ärztin. „Nour braucht viel Tee und Ruhe. Ich gebe Ihnen ein Rezept für einen Hustensaft. Morgen bleibt sie zu Hause.“

Leyla fragt: „Ich muss morgen arbeiten. Brauche ich eine Krankmeldung?“ – „Ja, für das kranke Kind bekommen Sie eine Bescheinigung.“ Am Ende sagt die Ärztin: „Gute Besserung, Nour!“`,
      ru: `Врач осматривает Нур. «Что у тебя болит?» — «У меня болит горло. И кашель, и голова болит».

«Это простуда, — говорит врач. — Нур нужно много чая и покой. Я дам вам рецепт на сироп от кашля. Завтра она остаётся дома».

Лейла спрашивает: «Мне завтра на работу. Нужен ли мне больничный?» — «Да, по уходу за больным ребёнком вы получите справку». В конце врач говорит: «Выздоравливай, Нур!»`,
      gloss: { gebe: 'дам, даю', ärztin: 'врач (женщина)', nour: 'Нур (имя)', leyla: 'Лейла (имя)', fehlt: '(was fehlt Ihnen?) что с вами?', erkältung: 'простуда', hustensaft: 'сироп от кашля', bescheinigung: 'справка', kranke: 'больного' },
      questions: [
        { q: 'Was tut Nour weh?', ru: 'Что болит у Нур?', options: ['Der Hals', 'Der Bauch', 'Das Bein'], answer: 'Der Hals' },
        { q: 'Was hat Nour?', ru: 'Что у Нур?', options: ['Eine Erkältung', 'Eine Grippe', 'Eine Allergie'], answer: 'Eine Erkältung' },
        { q: 'Wofür ist das Rezept?', ru: 'На что рецепт?', options: ['Für einen Hustensaft', 'Für Tabletten', 'Für Tee'], answer: 'Für einen Hustensaft' },
      ],
      translate: [
        { de: 'Mir tut der Hals weh.', ru: 'У меня болит горло.', wrongRu: ['У меня болит голова.', 'У неё болит горло.'] },
        { de: 'Ich brauche eine Krankmeldung.', ru: 'Мне нужен больничный.', wrongRu: ['Мне нужен рецепт.', 'Мне нужна страховая карта.'] },
        { de: 'Morgen bleibt sie zu Hause.', ru: 'Завтра она остаётся дома.', wrongRu: ['Завтра она идёт в школу.', 'Сегодня она остаётся дома.'] },
      ],
    },
  ],
};
