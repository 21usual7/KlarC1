import type { Module } from '../types.ts';

// A1.2 cyber 03: a strange e-mail with a prize (lesson 0) and how to spot spam and fake sites (lesson 1).

export const module: Module = {
  id: 'cyber-a12-03-links', sphere: 'cyber', level: 'A1.2',
  title: 'Komische Links', subtitle: 'Отправитель, тема, ссылка: как распознать подозрительное письмо.',
  words: [
    { id: 'cyb-a12-03-e-mail', icon: 'Mail', de: 'E-Mail', pos: 'noun', article: 'die', plural: 'E-Mails', ru: 'электронное письмо, имейл', note: 'Коротко: die Mail. В Австрии также встречается das E-Mail.', collocation: { de: 'eine E-Mail schreiben', ru: 'написать письмо', accept: ['eine E-Mail schicken'] }, example: { de: 'Heute bekomme ich eine seltsame E-Mail.', ru: 'Сегодня я получаю странное письмо.', cloze: 'E-Mail' } },
    { id: 'cyb-a12-03-absender', icon: 'Contact', de: 'Absender', pos: 'noun', article: 'der', plural: 'Absender', ru: 'отправитель', collocation: { de: 'den Absender prüfen', ru: 'проверить отправителя', accept: ['den Absender kontrollieren'] }, example: { de: 'Ich kenne den Absender nicht.', ru: 'Я не знаю отправителя.', cloze: 'Absender' } },
    { id: 'cyb-a12-03-betreff', icon: 'Heading', de: 'Betreff', pos: 'noun', article: 'der', ru: 'тема (письма)', note: 'Множественное число (Betreffe) почти не используется.', example: { de: 'Der Betreff ist sehr kurz.', ru: 'Тема письма очень короткая.', cloze: 'Betreff' } },
    { id: 'cyb-a12-03-link', icon: 'Link', de: 'Link', pos: 'noun', article: 'der', plural: 'Links', ru: 'ссылка', collocation: { de: 'auf einen Link klicken', ru: 'нажать на ссылку', accept: ['auf den Link klicken'] }, example: { de: 'Klick nicht auf diesen Link!', ru: 'Не нажимай на эту ссылку!', cloze: 'Link' } },
    { id: 'cyb-a12-03-anklicken', icon: 'MousePointerClick', de: 'anklicken', pos: 'verb', ru: 'кликать (по чему-то), нажимать', forms: 'er klickt an · hat angeklickt', note: 'Отделяемая приставка; + Akk: den Link anklicken = auf den Link klicken.', imageQuery: 'computer mouse click', example: { de: 'Ich klicke den Link nicht an.', ru: 'Я не нажимаю на ссылку.', cloze: 'klicke' } },
    { id: 'cyb-a12-03-echt', icon: 'BadgeCheck', de: 'echt', pos: 'adj', ru: 'настоящий, подлинный', note: 'Разговорно также «реально, очень»: echt gut.', example: { de: 'Ist diese Nachricht echt?', ru: 'Это сообщение настоящее?', cloze: 'echt' } },
    { id: 'cyb-a12-03-dringend', icon: 'AlarmClock', de: 'dringend', pos: 'adj', ru: 'срочный; срочно', collocation: { de: 'eine dringende Nachricht', ru: 'срочное сообщение', accept: ['eine dringende E-Mail'] }, example: { de: 'Die Bank schreibt: Das ist dringend!', ru: 'Банк пишет: это срочно!', cloze: 'dringend' } },
    { id: 'cyb-a12-03-gewinn', icon: 'Trophy', de: 'Gewinn', pos: 'noun', article: 'der', plural: 'Gewinne', ru: 'выигрыш, приз', note: 'Также «прибыль». Глагол: gewinnen — выигрывать.', example: { de: 'Die E-Mail verspricht einen großen Gewinn.', ru: 'Письмо обещает большой выигрыш.', cloze: 'Gewinn' } },

    { id: 'cyb-a12-03-fehler', icon: 'SpellCheck', de: 'Fehler', pos: 'noun', article: 'der', plural: 'Fehler', ru: 'ошибка', collocation: { de: 'einen Fehler finden', ru: 'найти ошибку', accept: ['den Fehler finden', 'Fehler finden'] }, example: { de: 'Der Text hat viele Fehler.', ru: 'В тексте много ошибок.', cloze: 'Fehler' } },
    { id: 'cyb-a12-03-falsch', icon: 'CircleX', de: 'falsch', pos: 'adj', ru: 'неправильный; фальшивый, ложный', example: { de: 'Die Adresse ist falsch.', ru: 'Адрес неправильный.', cloze: 'falsch' } },
    { id: 'cyb-a12-03-webseite', icon: 'Globe', de: 'Webseite', pos: 'noun', article: 'die', plural: 'Webseiten', ru: 'веб-страница, сайт', parts: ['Web', 'seite'], note: 'Также die Website.', example: { de: 'Die Webseite sieht aus wie meine Bank.', ru: 'Сайт выглядит как мой банк.', cloze: 'Webseite' } },
    { id: 'cyb-a12-03-spam', icon: 'MailX', de: 'Spam', pos: 'noun', article: 'der', ru: 'спам', note: 'Множественного числа нет.', example: { de: 'Diese Nachricht ist Spam.', ru: 'Это сообщение — спам.', cloze: 'Spam' } },
    { id: 'cyb-a12-03-postfach', icon: 'Inbox', de: 'Postfach', pos: 'noun', article: 'das', plural: 'Postfächer', ru: 'почтовый ящик (электронный)', parts: ['Post', 'fach'], example: { de: 'Mein Postfach ist voll.', ru: 'Мой почтовый ящик переполнен.', cloze: 'Postfach' } },
    { id: 'cyb-a12-03-ignorieren', icon: 'EyeOff', de: 'ignorieren', pos: 'verb', ru: 'игнорировать', forms: 'er ignoriert · hat ignoriert', note: 'Глаголы на -ieren: Perfekt без ge-.', collocation: { de: 'eine Nachricht ignorieren', ru: 'игнорировать сообщение', accept: ['die Nachricht ignorieren', 'eine E-Mail ignorieren'] }, example: { de: 'Ich ignoriere diese E-Mail einfach.', ru: 'Я просто игнорирую это письмо.', cloze: 'ignoriere' } },
    { id: 'cyb-a12-03-gutschein', icon: 'Ticket', de: 'Gutschein', pos: 'noun', article: 'der', plural: 'Gutscheine', ru: 'подарочный сертификат, купон', parts: ['Gut', 'schein'], imageQuery: 'gift voucher', collocation: { de: 'einen Gutschein einlösen', ru: 'воспользоваться купоном', accept: ['den Gutschein einlösen'] }, example: { de: 'Ein Gutschein für fünfzig Euro? Das ist komisch!', ru: 'Сертификат на пятьдесят евро? Это странно!', cloze: 'Gutschein' } },
    { id: 'cyb-a12-03-trick', icon: 'WandSparkles', de: 'Trick', pos: 'noun', article: 'der', plural: 'Tricks', ru: 'трюк, уловка', example: { de: 'Das ist ein alter Trick von Betrügern.', ru: 'Это старая уловка мошенников.', cloze: 'Trick' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein großer Gewinn?',
      de: `Paul geht in Wien zur Schule. Am Dienstag bekommt er eine E-Mail. Der Betreff ist: „Dringend! Sie haben gewonnen!“ Der Absender ist eine unbekannte Adresse. Paul kennt den Absender nicht.

In der E-Mail steht: „Ihr Gewinn ist ein neues Handy. Klicken Sie schnell auf den Link!“ Paul ist froh. Er will den Link sofort anklicken.

Aber seine Oma ruft: „Stopp! Ist die E-Mail echt? Du hast nichts gespielt. Also kannst du auch nichts gewinnen.“ Paul klickt den Link nicht an. Er zeigt die E-Mail seiner Lehrerin.`,
      ru: `Пауль ходит в школу в Вене. Во вторник он получает имейл. Тема: «Срочно! Вы выиграли!» Отправитель — незнакомый адрес. Пауль не знает отправителя.

В письме написано: «Ваш приз — новый телефон. Быстро нажмите на ссылку!» Пауль рад. Он хочет сразу нажать на ссылку.

Но его бабушка кричит: «Стоп! Это письмо настоящее? Ты ни в чём не участвовал. Значит, ты и выиграть ничего не можешь». Пауль не нажимает на ссылку. Он показывает письмо своей учительнице.`,
      gloss: { paul: 'Пауль (имя)', wien: 'Вена', dienstag: 'вторник', gewonnen: 'выиграл(и)', gewinnen: 'выигрывать', unbekannte: 'незнакомый, неизвестный', adresse: 'адрес', ihr: 'Ваш; её; их', handy: 'мобильный телефон', oma: 'бабушка', ruft: 'кричит, зовёт', stopp: 'стоп', gespielt: 'играл, участвовал (в игре)', an: '(klickt … an) приставка: нажимает', seiner: 'своей, его (дат. ж. р.)', hallo: 'привет', neues: 'новое', dem: 'ему (дат.)' },
      questions: [
        { q: 'Was steht im Betreff?', ru: 'Что написано в теме письма?', options: ['Hallo Paul!', 'Dringend! Sie haben gewonnen!', 'Dein neues Handy'], answer: 'Dringend! Sie haben gewonnen!' },
        { q: 'Kennt Paul den Absender?', ru: 'Пауль знает отправителя?', options: ['Ja, das ist seine Oma.', 'Ja, das ist seine Lehrerin.', 'Nein, er kennt ihn nicht.'], answer: 'Nein, er kennt ihn nicht.' },
        { q: 'Was macht Paul am Ende?', ru: 'Что Пауль делает в конце?', options: ['Er klickt den Link an.', 'Er zeigt die E-Mail seiner Lehrerin.', 'Er schreibt dem Absender.'], answer: 'Er zeigt die E-Mail seiner Lehrerin.' },
      ],
      translate: [
        { de: 'Ich kenne den Absender nicht.', ru: 'Я не знаю отправителя.', wrongRu: ['Я знаю отправителя.', 'Он не знает отправителя.'] },
        { de: 'Klick nicht auf den Link!', ru: 'Не нажимай на ссылку!', wrongRu: ['Нажми на ссылку!', 'Не открывай письмо!'] },
        { de: 'Ist diese E-Mail wirklich echt?', ru: 'Это письмо действительно настоящее?', wrongRu: ['Это письмо действительно поддельное?', 'Это письмо действительно срочное?', 'Эта ссылка действительно настоящая?'] },
      ],
    },
    {
      lesson: 1, title: 'Spam im Postfach',
      de: `Am Mittwoch spricht Frau Berger mit der Klasse über Spam. Sie sagt: „Spam ist oft ein Trick. Ein Gutschein ist gratis? Ein Paket wartet auf dich? Das ist meistens falsch.“

Dann zeigt sie eine falsche Webseite. Sie sieht aus wie die Seite von einer Bank. Aber die Adresse hat einen Fehler: „banck“ und nicht „bank“. Auch im Text sind viele Fehler.

Frau Berger sagt: „Ignoriert solche E-Mails! Löscht sie aus eurem Postfach. Schreibt nie euer Passwort auf so eine Webseite.“ Paul lacht. Jetzt kennt er den Trick.`,
      ru: `В среду госпожа Бергер говорит с классом о спаме. Она говорит: «Спам — это часто уловка. Сертификат бесплатно? Тебя ждёт посылка? Это чаще всего обман».

Потом она показывает поддельный сайт. Он выглядит как страница банка. Но в адресе есть ошибка: «banck», а не «bank». И в тексте тоже много ошибок.

Госпожа Бергер говорит: «Игнорируйте такие письма! Удаляйте их из своего почтового ящика. Никогда не пишите свой пароль на таком сайте». Пауль смеётся. Теперь он знает этот трюк.`,
      gloss: { mittwoch: 'среда', spricht: 'говорит', berger: 'Бергер (фамилия)', gratis: 'бесплатно', paket: 'посылка', wartet: 'ждёт', dich: 'тебя', meistens: 'чаще всего', falsch: 'ложь, обман; неправильно', falsche: 'поддельная, фальшивая', sieht: 'видит; (sieht … aus) выглядит', aus: 'из; (sieht … aus) выглядит', wie: 'как', seite: 'страница', bank: 'банк', banck: '«banck» (ошибка в адресе)', adresse: 'адрес', text: 'текст', ignoriert: 'игнорируйте!', solche: 'такие', löscht: 'удаляйте!', eurem: 'вашего, своего', schreibt: 'пишите!', paul: 'Пауль (имя)', lacht: 'смеётся', worüber: 'о чём', mathe: 'математика', handys: 'мобильные телефоны', farbe: 'цвет', bild: 'картинка', schüler: 'ученики', ihn: 'его (вин.)', beantworten: 'отвечать на (что-то)', voll: 'полный, переполненный' },
      questions: [
        { q: 'Worüber spricht Frau Berger?', ru: 'О чём говорит госпожа Бергер?', options: ['Über Mathe', 'Über Spam', 'Über Handys'], answer: 'Über Spam' },
        { q: 'Was ist falsch an der Webseite?', ru: 'Что не так с сайтом?', options: ['Die Adresse', 'Die Farbe', 'Das Bild'], answer: 'Die Adresse' },
        { q: 'Was sollen die Schüler mit Spam machen?', ru: 'Что ученики должны делать со спамом?', options: ['Ihn teilen', 'Ihn beantworten', 'Ihn löschen'], answer: 'Ihn löschen' },
      ],
      translate: [
        { de: 'Mein Postfach ist voll mit Spam.', ru: 'Мой почтовый ящик полон спама.', wrongRu: ['Мой почтовый ящик пуст.', 'Твой почтовый ящик полон спама.'] },
        { de: 'Die Webseite hat einen Fehler.', ru: 'На сайте есть ошибка.', wrongRu: ['На сайте нет ошибок.', 'В письме есть ошибка.', 'На сайте есть ссылка.'] },
        { de: 'Der Gutschein ist nur ein Trick.', ru: 'Этот сертификат — всего лишь уловка.', wrongRu: ['Этот сертификат — настоящий подарок.', 'Этот выигрыш — всего лишь уловка.'] },
      ],
    },
  ],
};
