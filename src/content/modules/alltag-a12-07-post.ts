import type { Module } from '../types.ts';

// A1.2 alltag 07: the post — letter, stamp, parcel (lesson 0); delivery notice, parcel locker, registered letter (lesson 1).

export const module: Module = {
  id: 'alltag-a12-07-post', sphere: 'alltag', level: 'A1.2',
  title: 'Post und Pakete', subtitle: 'Почта: письмо, марка, посылка, уведомление, постамат и заказное письмо.',
  words: [
    { id: 'all-a12-07-post', icon: 'Mail', de: 'Post', pos: 'noun', article: 'die', ru: 'почта (учреждение и письма)', example: { de: 'Heute ist keine Post gekommen.', ru: 'Сегодня почты не было.', cloze: 'Post' } },
    { id: 'all-a12-07-brief', icon: 'Mail', de: 'Brief', pos: 'noun', article: 'der', plural: 'Briefe', ru: 'письмо', example: { de: 'Ich schreibe einen Brief an meine Mutter.', ru: 'Я пишу письмо маме.', cloze: 'Brief' } },
    { id: 'all-a12-07-briefmarke', icon: 'Stamp', imageQuery: 'postage stamp', de: 'Briefmarke', pos: 'noun', article: 'die', plural: 'Briefmarken', ru: 'почтовая марка', parts: ['Brief', 'marke'], example: { de: 'Eine Briefmarke für Syrien, bitte.', ru: 'Марку для Сирии, пожалуйста.', cloze: 'Briefmarke' } },
    { id: 'all-a12-07-umschlag', icon: 'Mail', de: 'Umschlag', pos: 'noun', article: 'der', plural: 'Umschläge', ru: 'конверт', example: { de: 'Ich brauche einen großen Umschlag.', ru: 'Мне нужен большой конверт.', cloze: 'Umschlag' } },
    { id: 'all-a12-07-briefkasten', icon: 'Mailbox', imageQuery: 'yellow mailbox germany', de: 'Briefkasten', pos: 'noun', article: 'der', plural: 'Briefkästen', ru: 'почтовый ящик', parts: ['Brief', 'kasten'], note: 'Немецкие уличные почтовые ящики — жёлтые.', example: { de: 'Der Briefkasten ist gelb.', ru: 'Почтовый ящик жёлтый.', cloze: 'Briefkasten' } },
    { id: 'all-a12-07-paket', icon: 'Package', imageQuery: 'parcel box', de: 'Paket', pos: 'noun', article: 'das', plural: 'Pakete', ru: 'посылка', example: { de: 'Ich schicke ein Paket nach Syrien.', ru: 'Я отправляю посылку в Сирию.', cloze: 'Paket' } },
    { id: 'all-a12-07-absender', icon: 'ArrowUpRight', de: 'Absender', pos: 'noun', article: 'der', plural: 'Absender', ru: 'отправитель', example: { de: 'Schreiben Sie den Absender oben links.', ru: 'Напишите отправителя слева вверху.', cloze: 'Absender' } },
    { id: 'all-a12-07-empfaenger', icon: 'ArrowDownLeft', de: 'Empfänger', pos: 'noun', article: 'der', plural: 'Empfänger', ru: 'получатель', example: { de: 'Der Empfänger wohnt in Damaskus.', ru: 'Получатель живёт в Дамаске.', cloze: 'Empfänger' } },

    { id: 'all-a12-07-abholen', icon: 'Hand', de: 'abholen', pos: 'verb', ru: 'забирать', forms: 'er holt ab · hat abgeholt', example: { de: 'Ich hole das Paket morgen ab.', ru: 'Я заберу посылку завтра.', cloze: 'hole' } },
    { id: 'all-a12-07-benachrichtigung', icon: 'Bell', de: 'Benachrichtigung', pos: 'noun', article: 'die', plural: 'Benachrichtigungen', ru: 'уведомление', note: 'Если вас нет дома, кладут уведомление в ящик.', example: { de: 'Im Briefkasten ist eine Benachrichtigung.', ru: 'В ящике уведомление.', cloze: 'Benachrichtigung' } },
    { id: 'all-a12-07-packstation', icon: 'Grid3x3', imageQuery: 'parcel locker', de: 'Packstation', pos: 'noun', article: 'die', plural: 'Packstationen', ru: 'постамат', parts: ['Pack', 'station'], example: { de: 'Das Paket liegt in der Packstation.', ru: 'Посылка лежит в постамате.', cloze: 'Packstation' } },
    { id: 'all-a12-07-paeckchen', icon: 'Package', de: 'Päckchen', pos: 'noun', article: 'das', plural: 'Päckchen', ru: 'бандероль, маленькая посылка', example: { de: 'Ein Päckchen ist billiger als ein Paket.', ru: 'Бандероль дешевле посылки.', cloze: 'Päckchen' } },
    { id: 'all-a12-07-sendungsnummer', icon: 'Barcode', de: 'Sendungsnummer', pos: 'noun', article: 'die', plural: 'Sendungsnummern', ru: 'трек-номер', parts: ['Sendungs', 'nummer'], example: { de: 'Mit der Sendungsnummer sehe ich, wo das Paket ist.', ru: 'По трек-номеру я вижу, где посылка.', cloze: 'Sendungsnummer' } },
    { id: 'all-a12-07-einschreiben', icon: 'FileCheck', de: 'Einschreiben', pos: 'noun', article: 'das', plural: 'Einschreiben', ru: 'заказное письмо', note: 'Важные письма (расторжение договора) лучше отправлять заказным.', example: { de: 'Die Kündigung schicke ich per Einschreiben.', ru: 'Расторжение я отправлю заказным письмом.', cloze: 'Einschreiben' } },
    { id: 'all-a12-07-zustellen', icon: 'Truck', de: 'zustellen', pos: 'verb', ru: 'доставлять', forms: 'er stellt zu · hat zugestellt', example: { de: 'Das Paket wird morgen zugestellt.', ru: 'Посылку доставят завтра.', cloze: 'zugestellt' } },
    { id: 'all-a12-07-wiegen', icon: 'Scale', de: 'wiegen', pos: 'verb', ru: 'весить; взвешивать', forms: 'er wiegt · hat gewogen', example: { de: 'Das Paket wiegt drei Kilo.', ru: 'Посылка весит три килограмма.', cloze: 'wiegt' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Paket für Oma',
      de: `Leyla möchte ein Paket nach Syrien schicken. Darin sind Geschenke für ihre Mutter. In der Post fragt sie: „Was kostet ein Paket nach Syrien?“

Die Frau am Schalter wiegt das Paket. „Es wiegt drei Kilo. Das kostet fünfunddreißig Euro.“ – „Oh, das ist teuer.“

Dann kauft Leyla noch zwei Briefmarken und einen Umschlag. Sie schreibt den Empfänger in die Mitte und den Absender oben links. Den Brief wirft sie in den gelben Briefkasten.`,
      ru: `Лейла хочет отправить посылку в Сирию. В ней подарки для её мамы. На почте она спрашивает: «Сколько стоит посылка в Сирию?»

Женщина в окошке взвешивает посылку. «Она весит три килограмма. Это стоит тридцать пять евро». — «Ох, дорого».

Потом Лейла покупает ещё две марки и конверт. Получателя она пишет посередине, а отправителя — слева вверху. Письмо она бросает в жёлтый почтовый ящик.`,
      gloss: { leylas: 'Лейлы (чей?)', oh: 'ой, о', karim: 'Карим (имя)', hin: '(legt … hin) кладёт, стелет', unten: 'внизу', leyla: 'Лейла (имя)', syrien: 'Сирия', darin: 'в нём', geschenke: 'подарки', schalter: 'окошко', fünfunddreißig: 'тридцать пять', mitte: 'середина', oben: 'вверху', wirft: 'бросает', gelben: 'жёлтый', oma: 'бабушка' },
      questions: [
        { q: 'Was ist im Paket?', ru: 'Что в посылке?', options: ['Geschenke für Leylas Mutter', 'Briefe', 'Kleidung für Karim'], answer: 'Geschenke für Leylas Mutter' },
        { q: 'Wie viel wiegt das Paket?', ru: 'Сколько весит посылка?', options: ['Drei Kilo', 'Dreißig Kilo', 'Ein Kilo'], answer: 'Drei Kilo' },
        { q: 'Wo schreibt Leyla den Absender hin?', ru: 'Где Лейла пишет отправителя?', options: ['Oben links', 'In die Mitte', 'Unten rechts'], answer: 'Oben links' },
      ],
      translate: [
        { de: 'Was kostet ein Paket nach Syrien?', ru: 'Сколько стоит посылка в Сирию?', wrongRu: ['Сколько идёт посылка в Сирию?', 'Сколько стоит письмо в Сирию?'] },
        { de: 'Das Paket wiegt drei Kilo.', ru: 'Посылка весит три килограмма.', wrongRu: ['Посылка стоит три евро.', 'Посылка весит тридцать килограммов.'] },
        { de: 'Ich brauche zwei Briefmarken.', ru: 'Мне нужны две марки.', wrongRu: ['Мне нужны два конверта.', 'Мне нужна одна марка.'] },
      ],
    },
    {
      lesson: 1, title: 'Nicht zu Hause',
      de: `Amir hat online Schuhe bestellt. Aber als der Paketbote kommt, ist niemand zu Hause. Im Briefkasten liegt eine Benachrichtigung: „Ihr Paket liegt in der Packstation am Bahnhof.“

Mit der Sendungsnummer und einem Code holt Amir das Paket ab. Das geht schnell.

Später möchte Amir seinen alten Handyvertrag kündigen. Frau Schulz sagt: „Schicken Sie die Kündigung per Einschreiben. Dann haben Sie einen Beweis.“`,
      ru: `Амир заказал в интернете обувь. Но когда приходит курьер, никого нет дома. В почтовом ящике лежит уведомление: «Ваша посылка в постамате у вокзала».

По трек-номеру и коду Амир забирает посылку. Это быстро.

Потом Амир хочет расторгнуть свой старый договор на мобильную связь. Госпожа Шульц говорит: «Отправьте расторжение заказным письмом. Тогда у вас будет доказательство».`,
      gloss: { bücher: 'книги', amir: 'Амир (имя)', schulz: 'Шульц (фамилия)', online: 'онлайн', bestellt: 'заказал', paketbote: 'курьер, почтальон (посылки)', niemand: 'никто', code: 'код', handyvertrag: 'договор на мобильную связь', kündigung: 'расторжение (договора)', beweis: 'доказательство' },
      questions: [
        { q: 'Was hat Amir bestellt?', ru: 'Что заказал Амир?', options: ['Schuhe', 'Ein Handy', 'Bücher'], answer: 'Schuhe' },
        { q: 'Wo liegt das Paket?', ru: 'Где лежит посылка?', options: ['In der Packstation am Bahnhof', 'Bei Frau Schulz', 'In der Post'], answer: 'In der Packstation am Bahnhof' },
        { q: 'Wie soll Amir die Kündigung schicken?', ru: 'Как Амиру отправить расторжение?', options: ['Per Einschreiben', 'Per E-Mail', 'Per Paket'], answer: 'Per Einschreiben' },
      ],
      translate: [
        { de: 'Ich hole das Paket morgen ab.', ru: 'Я заберу посылку завтра.', wrongRu: ['Я отправлю посылку завтра.', 'Я заберу письмо завтра.'] },
        { de: 'Im Briefkasten ist eine Benachrichtigung.', ru: 'В ящике уведомление.', wrongRu: ['В ящике посылка.', 'В ящике ничего нет.'] },
        { de: 'Das Paket wird morgen zugestellt.', ru: 'Посылку доставят завтра.', wrongRu: ['Посылку отправят завтра.', 'Посылку доставили вчера.'] },
      ],
    },
  ],
};
