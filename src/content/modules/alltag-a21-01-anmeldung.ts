import type { Module } from '../types.ts';

// A2.1 alltag 01: registering an address — Bürgeramt, deadline, landlord confirmation (lesson 0); documents, forms, copies (lesson 1).

export const module: Module = {
  id: 'alltag-a21-01-anmeldung', sphere: 'alltag', level: 'A2.1',
  title: 'Die Anmeldung beim Bürgeramt', subtitle: 'Регистрация по месту жительства: срок, подтверждение арендодателя, документы, анкета и копии.',
  words: [
    { id: 'all-a21-01-buergeramt', icon: 'Landmark', de: 'Bürgeramt', pos: 'noun', article: 'das', plural: 'Bürgerämter', ru: 'бюро по делам граждан (ЗАГС, регистрация)', parts: ['Bürger', 'amt'], note: 'В разных городах: Bürgerbüro, Einwohnermeldeamt.', example: { de: 'Das Bürgeramt ist im Rathaus.', ru: 'Бюро по делам граждан находится в ратуше.', cloze: 'Bürgeramt' } },
    { id: 'all-a21-01-anmeldung', icon: 'ClipboardCheck', de: 'Anmeldung', pos: 'noun', article: 'die', plural: 'Anmeldungen', ru: 'регистрация (по месту жительства)', example: { de: 'Ohne Anmeldung bekommen Sie kein Konto.', ru: 'Без регистрации вам не откроют счёт.', cloze: 'Anmeldung' } },
    { id: 'all-a21-01-anmelden', icon: 'LogIn', de: 'anmelden', pos: 'verb', ru: 'регистрировать; (sich anmelden) регистрироваться', forms: 'er meldet an · hat angemeldet', example: { de: 'Ich muss mich in Leipzig anmelden.', ru: 'Мне нужно зарегистрироваться в Лейпциге.', cloze: 'anmelden' } },
    { id: 'all-a21-01-frist', icon: 'Hourglass', de: 'Frist', pos: 'noun', article: 'die', plural: 'Fristen', ru: 'срок', note: 'Регистрироваться нужно в течение двух недель после переезда.', example: { de: 'Die Frist ist zwei Wochen nach dem Umzug.', ru: 'Срок — две недели после переезда.', cloze: 'Frist' } },
    { id: 'all-a21-01-wohnungsgeberbestaetigung', icon: 'FileCheck', de: 'Wohnungsgeberbestätigung', pos: 'noun', article: 'die', plural: 'Wohnungsgeberbestätigungen', ru: 'подтверждение арендодателя (о заселении)', parts: ['Wohnungsgeber', 'bestätigung'], example: { de: 'Die Wohnungsgeberbestätigung bekommen Sie vom Vermieter.', ru: 'Подтверждение о заселении вы получаете у арендодателя.', cloze: 'Wohnungsgeberbestätigung' } },
    { id: 'all-a21-01-meldebescheinigung', icon: 'BadgeCheck', de: 'Meldebescheinigung', pos: 'noun', article: 'die', plural: 'Meldebescheinigungen', ru: 'справка о регистрации', parts: ['Melde', 'bescheinigung'], example: { de: 'Nach dem Termin bekommen Sie die Meldebescheinigung.', ru: 'После приёма вы получите справку о регистрации.', cloze: 'Meldebescheinigung' } },
    { id: 'all-a21-01-wartenummer', icon: 'Ticket', de: 'Wartenummer', pos: 'noun', article: 'die', plural: 'Wartenummern', ru: 'номер очереди', parts: ['Warte', 'nummer'], example: { de: 'Ziehen Sie bitte eine Wartenummer.', ru: 'Возьмите, пожалуйста, номер очереди.', cloze: 'Wartenummer' } },
    { id: 'all-a21-01-vereinbaren', icon: 'CalendarCheck', de: 'vereinbaren', pos: 'verb', ru: 'договариваться (о встрече)', forms: 'er vereinbart · hat vereinbart', note: 'einen Termin vereinbaren — записаться на приём.', example: { de: 'Den Termin kann man online vereinbaren.', ru: 'Записаться на приём можно онлайн.', cloze: 'vereinbaren' } },

    { id: 'all-a21-01-ausweis', icon: 'IdCard', de: 'Ausweis', pos: 'noun', article: 'der', plural: 'Ausweise', ru: 'удостоверение личности', note: 'der Personalausweis — немецкое удостоверение личности.', example: { de: 'Bitte zeigen Sie Ihren Ausweis.', ru: 'Покажите, пожалуйста, ваше удостоверение.', cloze: 'Ausweis' } },
    { id: 'all-a21-01-reisepass', icon: 'BookUser', de: 'Reisepass', pos: 'noun', article: 'der', plural: 'Reisepässe', ru: 'заграничный паспорт', parts: ['Reise', 'pass'], example: { de: 'Mein Reisepass ist noch gültig.', ru: 'Мой загранпаспорт ещё действителен.', cloze: 'Reisepass' } },
    { id: 'all-a21-01-formular', icon: 'FileText', de: 'Formular', pos: 'noun', article: 'das', plural: 'Formulare', ru: 'анкета, бланк', example: { de: 'Das Formular finden Sie auch online.', ru: 'Бланк есть и в интернете.', cloze: 'Formular' } },
    { id: 'all-a21-01-ausfuellen', icon: 'PenLine', de: 'ausfüllen', pos: 'verb', ru: 'заполнять', forms: 'er füllt aus · hat ausgefüllt', example: { de: 'Füllen Sie bitte das Formular aus.', ru: 'Заполните, пожалуйста, анкету.', cloze: 'Füllen' } },
    { id: 'all-a21-01-unterschreiben', icon: 'Signature', de: 'unterschreiben', pos: 'verb', ru: 'подписывать', forms: 'er unterschreibt · hat unterschrieben', example: { de: 'Sie müssen hier unten unterschreiben.', ru: 'Вы должны подписать здесь внизу.', cloze: 'unterschreiben' } },
    { id: 'all-a21-01-kopie', icon: 'Copy', de: 'Kopie', pos: 'noun', article: 'die', plural: 'Kopien', ru: 'копия', example: { de: 'Bringen Sie bitte eine Kopie mit.', ru: 'Принесите, пожалуйста, копию.', cloze: 'Kopie' } },
    { id: 'all-a21-01-original', icon: 'FileBadge', de: 'Original', pos: 'noun', article: 'das', plural: 'Originale', ru: 'оригинал', example: { de: 'Wir brauchen das Original und eine Kopie.', ru: 'Нам нужен оригинал и копия.', cloze: 'Original' } },
    { id: 'all-a21-01-steuer-id', icon: 'Hash', de: 'Steuer-ID', pos: 'noun', article: 'die', plural: 'Steuer-IDs', ru: 'налоговый номер (ИНН)', note: 'Приходит по почте после регистрации. Нужен работодателю.', example: { de: 'Die Steuer-ID kommt ein paar Wochen später per Post.', ru: 'Налоговый номер приходит по почте через несколько недель.', cloze: 'Steuer-ID' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Zwei Wochen Zeit',
      de: `Nach dem Umzug in die neue Wohnung muss Familie Haddad sich ummelden. Frau Schulz erklärt: „Die Frist ist zwei Wochen. Wenn Sie zu spät kommen, kann es eine Strafe geben.“

Amir versucht, online einen Termin beim Bürgeramt zu vereinbaren. Aber der nächste freie Termin ist erst in drei Wochen! Er ruft an und erklärt das Problem. Die Mitarbeiterin sagt: „Kommen Sie am Montag ohne Termin. Ziehen Sie eine Wartenummer.“

Vorher braucht Amir noch die Wohnungsgeberbestätigung. Der Vermieter schickt sie per E-Mail. Mit diesem Papier bestätigt er, dass die Familie in der Wohnung wohnt.`,
      ru: `После переезда в новую квартиру семье Хаддад нужно перерегистрироваться. Госпожа Шульц объясняет: «Срок — две недели. Если опоздаете, может быть штраф».

Амир пытается записаться онлайн в бюро по делам граждан. Но ближайшая свободная запись только через три недели! Он звонит и объясняет проблему. Сотрудница говорит: «Приходите в понедельник без записи. Возьмите номер очереди».

До этого Амиру нужно ещё подтверждение арендодателя. Арендодатель присылает его по электронной почте. Этой бумагой он подтверждает, что семья живёт в квартире.`,
      gloss: { freie: 'свободные', erst: 'только (erst dann — только тогда)', mitarbeiterin: 'сотрудница', vorher: 'раньше', papier: 'бумага', haddad: 'Хаддад (фамилия)', schulz: 'Шульц (фамилия)', amir: 'Амир (имя)', ummelden: '(sich ummelden) перерегистрироваться', strafe: 'штраф', versucht: 'пытается', bestätigt: 'подтверждает' },
      questions: [
        { q: 'Wie lange ist die Frist für die Anmeldung?', ru: 'Какой срок для регистрации?', options: ['Zwei Wochen', 'Drei Wochen', 'Einen Monat'], answer: 'Zwei Wochen' },
        { q: 'Wann ist der nächste freie Termin online?', ru: 'Когда ближайшая свободная запись онлайн?', options: ['In drei Wochen', 'Morgen', 'Am Montag'], answer: 'In drei Wochen' },
        { q: 'Wer schickt die Wohnungsgeberbestätigung?', ru: 'Кто присылает подтверждение о заселении?', options: ['Der Vermieter', 'Frau Schulz', 'Das Bürgeramt'], answer: 'Der Vermieter' },
      ],
      translate: [
        { de: 'Die Frist ist zwei Wochen.', ru: 'Срок — две недели.', wrongRu: ['Срок — два месяца.', 'Очередь — две недели.'] },
        { de: 'Ziehen Sie bitte eine Wartenummer.', ru: 'Возьмите, пожалуйста, номер очереди.', wrongRu: ['Заполните, пожалуйста, анкету.', 'Подождите, пожалуйста, снаружи.'] },
        { de: 'Ich muss einen Termin vereinbaren.', ru: 'Мне нужно записаться на приём.', wrongRu: ['Мне нужно отменить приём.', 'У меня уже есть запись.'] },
      ],
    },
    {
      lesson: 1, title: 'Im Bürgeramt',
      de: `Am Montag sitzt Amir um acht Uhr im Bürgeramt. Nach einer Stunde ist seine Wartenummer dran. Die Sachbearbeiterin fragt: „Haben Sie das Formular ausgefüllt?“ – „Ja, hier.“

„Ich brauche noch Ihre Ausweise. Haben Sie Reisepässe?“ Amir gibt ihr die Pässe von der ganzen Familie und die Wohnungsgeberbestätigung im Original. „Eine Kopie reicht nicht, wir brauchen das Original.“

Zum Schluss muss Amir unterschreiben. Er bekommt die Meldebescheinigung. „Ihre Steuer-ID bekommen Sie in ein paar Wochen per Post“, sagt die Frau. „Die brauchen Sie für Ihre Arbeit.“`,
      ru: `В понедельник в восемь утра Амир сидит в бюро по делам граждан. Через час подходит его очередь. Сотрудница спрашивает: «Вы заполнили анкету?» — «Да, вот».

«Мне нужны ещё ваши документы. У вас есть загранпаспорта?» Амир даёт ей паспорта всей семьи и подтверждение арендодателя в оригинале. «Копии недостаточно, нам нужен оригинал».

В конце Амиру нужно подписать. Он получает справку о регистрации. «Налоговый номер вы получите по почте через несколько недель, — говорит женщина. — Он нужен вам для работы».`,
      gloss: { schluss: 'конец (zum Schluss — под конец)', arbeit: 'работа', amir: 'Амир (имя)', dran: '(ist dran) подходит очередь', sachbearbeiterin: 'сотрудница, ответственный специалист', pässe: 'паспорта', ganzen: 'всей', reicht: 'достаточно', paar: '(ein paar) несколько' },
      questions: [
        { q: 'Wie lange wartet Amir?', ru: 'Сколько ждёт Амир?', options: ['Eine Stunde', 'Zehn Minuten', 'Drei Stunden'], answer: 'Eine Stunde' },
        { q: 'Warum reicht eine Kopie nicht?', ru: 'Почему копии недостаточно?', options: ['Sie brauchen das Original.', 'Die Kopie ist alt.', 'Amir hat keine Kopie.'], answer: 'Sie brauchen das Original.' },
        { q: 'Wie bekommt Amir die Steuer-ID?', ru: 'Как Амир получит налоговый номер?', options: ['Per Post', 'Sofort', 'Per E-Mail'], answer: 'Per Post' },
      ],
      translate: [
        { de: 'Haben Sie das Formular ausgefüllt?', ru: 'Вы заполнили анкету?', wrongRu: ['Вы подписали анкету?', 'Вы взяли анкету?'] },
        { de: 'Wir brauchen das Original.', ru: 'Нам нужен оригинал.', wrongRu: ['Нам нужна копия.', 'Нам не нужен оригинал.'] },
        { de: 'Sie müssen hier unterschreiben.', ru: 'Вы должны подписать здесь.', wrongRu: ['Вы должны заплатить здесь.', 'Вам не нужно подписывать.'] },
      ],
    },
  ],
};
