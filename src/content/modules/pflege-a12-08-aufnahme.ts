import type { Module } from '../types.ts';

// A1.2 pflege 08: admitting a patient — name, date of birth, insurance card (lesson 0); form, signature, valuables, GP (lesson 1).

export const module: Module = {
  id: 'pflege-a12-08-aufnahme', sphere: 'pflege', level: 'A1.2',
  title: 'Die Aufnahme', subtitle: 'Приём нового пациента: имя, дата рождения, страховая карта, анкета и подпись.',
  words: [
    { id: 'pfl-a12-08-aufnahme', icon: 'ClipboardPlus', de: 'Aufnahme', pos: 'noun', article: 'die', plural: 'Aufnahmen', ru: 'приём (пациента), поступление', note: 'die Notaufnahme — приёмный покой.', example: { de: 'Die Aufnahme dauert eine halbe Stunde.', ru: 'Приём длится полчаса.', cloze: 'Aufnahme' } },
    { id: 'pfl-a12-08-name', icon: 'IdCard', de: 'Name', pos: 'noun', article: 'der', plural: 'Namen', ru: 'имя; фамилия', note: 'der Vorname — имя, der Nachname — фамилия. Особое склонение: den Namen.', example: { de: 'Wie ist Ihr Name, bitte?', ru: 'Как ваше имя, пожалуйста?', cloze: 'Name' } },
    { id: 'pfl-a12-08-buchstabieren', icon: 'Type', de: 'buchstabieren', pos: 'verb', ru: 'произносить по буквам', forms: 'er buchstabiert · hat buchstabiert', example: { de: 'Können Sie das bitte buchstabieren?', ru: 'Можете произнести это по буквам?', cloze: 'buchstabieren' } },
    { id: 'pfl-a12-08-geburtsdatum', icon: 'Cake', de: 'Geburtsdatum', pos: 'noun', article: 'das', plural: 'Geburtsdaten', ru: 'дата рождения', parts: ['Geburts', 'datum'], example: { de: 'Wie ist Ihr Geburtsdatum?', ru: 'Какая у вас дата рождения?', cloze: 'Geburtsdatum' } },
    { id: 'pfl-a12-08-adresse', icon: 'MapPin', de: 'Adresse', pos: 'noun', article: 'die', plural: 'Adressen', ru: 'адрес', example: { de: 'Ist das Ihre aktuelle Adresse?', ru: 'Это ваш текущий адрес?', cloze: 'Adresse' } },
    { id: 'pfl-a12-08-versichertenkarte', icon: 'CreditCard', imageQuery: 'health insurance card germany', de: 'Versichertenkarte', pos: 'noun', article: 'die', plural: 'Versichertenkarten', ru: 'карта медицинского страхования', parts: ['Versicherten', 'karte'], note: 'Также: die Gesundheitskarte.', example: { de: 'Haben Sie Ihre Versichertenkarte dabei?', ru: 'У вас с собой страховая карта?', cloze: 'Versichertenkarte' } },
    { id: 'pfl-a12-08-krankenkasse', icon: 'Building', de: 'Krankenkasse', pos: 'noun', article: 'die', plural: 'Krankenkassen', ru: 'больничная касса (страховая компания)', parts: ['Kranken', 'kasse'], example: { de: 'Bei welcher Krankenkasse sind Sie?', ru: 'В какой больничной кассе вы застрахованы?', cloze: 'Krankenkasse' } },
    { id: 'pfl-a12-08-kontakt', icon: 'Contact', de: 'Kontakt', pos: 'noun', article: 'der', plural: 'Kontakte', ru: 'контакт', note: 'der Notfallkontakt — контакт на экстренный случай.', example: { de: 'Wer ist Ihr Kontakt für Notfälle?', ru: 'Кто ваш контакт на экстренный случай?', cloze: 'Kontakt' } },

    { id: 'pfl-a12-08-formular', icon: 'FileText', de: 'Formular', pos: 'noun', article: 'das', plural: 'Formulare', ru: 'анкета, бланк', example: { de: 'Hier ist das Formular.', ru: 'Вот анкета.', cloze: 'Formular' } },
    { id: 'pfl-a12-08-ausfuellen', icon: 'PenLine', de: 'ausfüllen', pos: 'verb', ru: 'заполнять (анкету)', forms: 'er füllt aus · hat ausgefüllt', collocation: { de: 'ein Formular ausfüllen', ru: 'заполнить анкету' }, example: { de: 'Ich fülle das Formular mit Ihnen aus.', ru: 'Я заполню анкету вместе с вами.', cloze: 'fülle' } },
    { id: 'pfl-a12-08-unterschreiben', icon: 'Signature', de: 'unterschreiben', pos: 'verb', ru: 'подписывать', forms: 'er unterschreibt · hat unterschrieben', example: { de: 'Bitte unterschreiben Sie hier.', ru: 'Пожалуйста, подпишите здесь.', cloze: 'unterschreiben' } },
    { id: 'pfl-a12-08-unterschrift', icon: 'Signature', de: 'Unterschrift', pos: 'noun', article: 'die', plural: 'Unterschriften', ru: 'подпись', example: { de: 'Hier fehlt noch Ihre Unterschrift.', ru: 'Здесь ещё не хватает вашей подписи.', cloze: 'Unterschrift' } },
    { id: 'pfl-a12-08-wertsachen', icon: 'Gem', de: 'Wertsachen', pos: 'noun', article: 'die', pluralOnly: true, ru: 'ценные вещи', parts: ['Wert', 'sachen'], example: { de: 'Wertsachen bitte nicht im Zimmer lassen.', ru: 'Пожалуйста, не оставляйте ценные вещи в палате.', cloze: 'Wertsachen' } },
    { id: 'pfl-a12-08-hausarzt', icon: 'Stethoscope', de: 'Hausarzt', pos: 'noun', article: 'der', plural: 'Hausärzte', ru: 'семейный (участковый) врач', parts: ['Haus', 'arzt'], note: 'Женщина — die Hausärztin.', example: { de: 'Wie heißt Ihr Hausarzt?', ru: 'Как зовут вашего семейного врача?', cloze: 'Hausarzt' } },
    { id: 'pfl-a12-08-grund', icon: 'CircleHelp', de: 'Grund', pos: 'noun', article: 'der', plural: 'Gründe', ru: 'причина; основание', note: 'aus diesem Grund — по этой причине.', example: { de: 'Was ist der Grund für Ihren Besuch?', ru: 'Какова причина вашего визита?', cloze: 'Grund' } },
    { id: 'pfl-a12-08-groesse', icon: 'Ruler', de: 'Größe', pos: 'noun', article: 'die', plural: 'Größen', ru: 'рост; размер', example: { de: 'Ihre Größe ist ein Meter siebzig.', ru: 'Ваш рост — метр семьдесят.', cloze: 'Größe' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein neuer Patient',
      de: `Ein neuer Patient kommt auf Station drei. Olena macht die Aufnahme. „Guten Tag! Wie ist Ihr Name, bitte?“ – „Ich heiße Dariusz Nowak.“ – „Können Sie den Nachnamen bitte buchstabieren?“ – „N-O-W-A-K.“

Dann fragt Olena nach dem Geburtsdatum und der Adresse. Herr Nowak ist am zwölften März neunzehnhundertsechzig geboren. Er wohnt in der Gartenstraße vier.

„Haben Sie Ihre Versichertenkarte dabei?“ Herr Nowak gibt ihr die Karte. Seine Krankenkasse ist die AOK. Sein Kontakt für Notfälle ist seine Tochter.`,
      ru: `В третье отделение поступает новый пациент. Олена оформляет приём. «Добрый день! Как вас зовут, пожалуйста?» — «Меня зовут Дариуш Новак». — «Можете продиктовать фамилию по буквам?» — «Н-О-В-А-К».

Потом Олена спрашивает дату рождения и адрес. Господин Новак родился двенадцатого марта тысяча девятьсот шестидесятого года. Он живёт на Гартенштрассе, дом четыре.

«У вас с собой страховая карта?» Господин Новак даёт ей карту. Его больничная касса — AOK. Его контакт на экстренный случай — дочь.`,
      gloss: { 'n-o-w-a-k': 'Н-О-В-А-К (по буквам)', becker: 'Беккер (фамилия)', yilmaz: 'Йылмаз (фамилия)', olena: 'Олена (имя)', dariusz: 'Дариуш (имя)', nowak: 'Новак (фамилия)', herr: 'господин', neuer: 'новый', patient: 'пациент', kommt: 'приходит, поступает', drei: 'три', macht: 'делает, оформляет', guten: 'добрый', tag: 'день', wie: 'как', bitte: 'пожалуйста', heiße: 'меня зовут', können: 'можете', nachnamen: 'фамилию', dann: 'потом', fragt: 'спрашивает; (fragt nach) спрашивает о', nach: 'о, про (fragt nach)', zwölften: 'двенадцатого', märz: 'март(а)', neunzehnhundertsechzig: 'тысяча девятьсот шестидесятый', geboren: 'родился', wohnt: 'живёт', gartenstraße: 'Гартенштрассе (улица)', vier: 'четыре', dabei: 'с собой', gibt: 'даёт', ihr: 'ей; ваш', karte: 'карта', seine: 'его', sein: 'его', aok: 'AOK (больничная касса)', notfälle: 'экстренные случаи', tochter: 'дочь', was: 'что', wo: 'где', wer: 'кто', sohn: 'сын', frau: 'жена', hausarzt: 'семейный врач', mai: 'май' },
      questions: [
        { q: 'Wie heißt der neue Patient?', ru: 'Как зовут нового пациента?', options: ['Dariusz Nowak', 'Herr Becker', 'Herr Yilmaz'], answer: 'Dariusz Nowak' },
        { q: 'Wo wohnt Herr Nowak?', ru: 'Где живёт господин Новак?', options: ['In der Gartenstraße', 'Im Krankenhaus', 'In der Station'], answer: 'In der Gartenstraße' },
        { q: 'Wer ist sein Kontakt für Notfälle?', ru: 'Кто его контакт на экстренный случай?', options: ['Seine Tochter', 'Sein Sohn', 'Sein Hausarzt'], answer: 'Seine Tochter' },
      ],
      translate: [
        { de: 'Wie ist Ihr Name, bitte?', ru: 'Как вас зовут, пожалуйста?', wrongRu: ['Где вы живёте, пожалуйста?', 'Как её зовут, пожалуйста?'] },
        { de: 'Können Sie das bitte buchstabieren?', ru: 'Можете произнести это по буквам?', wrongRu: ['Можете это записать?', 'Можете это повторить медленно?'] },
        { de: 'Haben Sie Ihre Versichertenkarte dabei?', ru: 'У вас с собой страховая карта?', wrongRu: ['У вас с собой паспорт?', 'У вас есть страховка?'] },
      ],
    },
    {
      lesson: 1, title: 'Das Formular',
      de: `Jetzt füllt Olena mit Herrn Nowak das Formular aus. „Was ist der Grund für Ihren Besuch im Krankenhaus?“ – „Ich habe seit Wochen Probleme mit dem Herzen.“

Olena misst die Größe: ein Meter achtundsiebzig. Dann fragt sie: „Wie heißt Ihr Hausarzt?“ – „Doktor Krüger in der Hauptstraße.“

Am Ende sagt Olena: „Bitte unterschreiben Sie hier unten. Hier fehlt noch Ihre Unterschrift.“ Herr Nowak unterschreibt. „Und noch etwas: Haben Sie Wertsachen dabei? Geld oder Schmuck? Die können wir in den Safe legen.“ Herr Nowak gibt ihr seine Uhr und sein Portemonnaie.`,
      ru: `Теперь Олена вместе с господином Новаком заполняет анкету. «Какова причина вашего поступления в больницу?» — «У меня уже несколько недель проблемы с сердцем».

Олена измеряет рост: метр семьдесят восемь. Потом она спрашивает: «Как зовут вашего семейного врача?» — «Доктор Крюгер на Хауптштрассе».

В конце Олена говорит: «Пожалуйста, подпишите здесь внизу. Здесь ещё не хватает вашей подписи». Господин Новак подписывает. «И ещё: у вас есть с собой ценные вещи? Деньги или украшения? Мы можем положить их в сейф». Господин Новак отдаёт ей свои часы и кошелёк.`,
      gloss: { olena: 'Олена (имя)', nowak: 'Новак (фамилия)', krüger: 'Крюгер (фамилия)', herrn: 'господином (дат.)', herr: 'господин', doktor: 'доктор', jetzt: 'теперь', füllt: '(füllt … aus) заполняет', mit: 'с', aus: '(füllt … aus) заполняет', für: 'для', ihren: 'ваш', besuch: 'визит; поступление', krankenhaus: 'больница', seit: 'уже (сколько-то), с', wochen: 'недель', probleme: 'проблемы', herzen: 'сердце (дат.)', misst: 'измеряет', meter: 'метр', achtundsiebzig: 'семьдесят восемь', siebzig: 'семьдесят', dann: 'потом', fragt: 'спрашивает', heißt: 'зовут', hauptstraße: 'Хауптштрассе (улица)', ende: 'конец; (am Ende) в конце', sagt: 'говорит', hier: 'здесь', unten: 'внизу', fehlt: 'не хватает', noch: 'ещё', unterschreibt: 'подписывает', etwas: 'что-то; (noch etwas) и ещё', dabei: 'с собой', geld: 'деньги', oder: 'или', schmuck: 'украшения', die: 'их', können: 'можем', safe: 'сейф', legen: 'положить', gibt: 'даёт', ihr: 'ей; ваш', seine: 'свои', sein: 'свой', uhr: 'часы', portemonnaie: 'кошелёк', was: 'что', wie: 'как, какой', groß: 'большой; высокий (о росте)', wo: 'где', wer: 'кто', magen: 'желудок', rücken: 'спина', zimmer: 'палата', tochter: 'дочь' },
      questions: [
        { q: 'Was ist der Grund für den Besuch?', ru: 'Какова причина поступления?', options: ['Probleme mit dem Herzen', 'Probleme mit dem Magen', 'Probleme mit dem Rücken'], answer: 'Probleme mit dem Herzen' },
        { q: 'Wie groß ist Herr Nowak?', ru: 'Какой рост у господина Новака?', options: ['Ein Meter achtundsiebzig', 'Ein Meter siebzig', 'Zwei Meter'], answer: 'Ein Meter achtundsiebzig' },
        { q: 'Was gibt Herr Nowak Olena?', ru: 'Что господин Новак отдаёт Олене?', options: ['Seine Uhr und sein Portemonnaie', 'Seine Versichertenkarte', 'Seinen Schmuck'], answer: 'Seine Uhr und sein Portemonnaie' },
      ],
      translate: [
        { de: 'Bitte unterschreiben Sie hier.', ru: 'Пожалуйста, подпишите здесь.', wrongRu: ['Пожалуйста, напишите здесь своё имя.', 'Пожалуйста, подпишите там.'] },
        { de: 'Ich fülle das Formular mit Ihnen aus.', ru: 'Я заполню анкету вместе с вами.', wrongRu: ['Вы заполните анкету сами.', 'Я принесу вам анкету.'] },
        { de: 'Haben Sie Wertsachen dabei?', ru: 'У вас есть с собой ценные вещи?', wrongRu: ['У вас есть с собой лекарства?', 'У вас есть с собой документы?'] },
      ],
    },
  ],
};
