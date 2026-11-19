import type { Module } from '../types.ts';

// A2.1 cyber 03: recognising a phishing mail (lesson 0), what to do with it (lesson 1).

export const module: Module = {
  id: 'cyber-a21-03-phishing', sphere: 'cyber', level: 'A2.1',
  title: 'Phishing erkennen', subtitle: 'Вложение, адрес отправителя, поддельное письмо: как распознать фишинг и что с ним делать.',
  words: [
    { id: 'cyb-a21-03-anhang', icon: 'Paperclip', de: 'Anhang', pos: 'noun', article: 'der', plural: 'Anhänge', ru: 'вложение (в письме)', note: 'im Anhang — во вложении.', collocation: { de: 'einen Anhang öffnen', ru: 'открыть вложение', accept: ['den Anhang öffnen'] }, example: { de: 'Öffne keinen Anhang von Fremden!', ru: 'Не открывай вложения от незнакомцев!', cloze: 'Anhang' } },
    { id: 'cyb-a21-03-gefaelscht', icon: 'BadgeX', de: 'gefälscht', pos: 'adj', ru: 'поддельный', note: 'Причастие от fälschen — подделывать.', collocation: { de: 'eine gefälschte E-Mail', ru: 'поддельное письмо', accept: ['die gefälschte E-Mail', 'eine gefälschte Mail'] }, example: { de: 'Die E-Mail hat einen gefälschten Absender.', ru: 'У письма поддельный отправитель.', cloze: 'gefälschten' } },
    { id: 'cyb-a21-03-absenderadresse', icon: 'AtSign', de: 'Absenderadresse', pos: 'noun', article: 'die', plural: 'Absenderadressen', ru: 'адрес отправителя', parts: ['Absender', 'adresse'], note: 'Der Absender — отправитель.', example: { de: 'Schau dir immer genau die Absenderadresse an!', ru: 'Всегда внимательно смотри на адрес отправителя!', cloze: 'Absenderadresse' } },
    { id: 'cyb-a21-03-betreffzeile', icon: 'Heading', de: 'Betreffzeile', pos: 'noun', article: 'die', plural: 'Betreffzeilen', ru: 'строка темы (письма)', parts: ['Betreff', 'zeile'], note: 'Der Betreff — тема письма.', example: { de: 'In der Betreffzeile steht „Dringend“.', ru: 'В строке темы написано «Срочно».', cloze: 'Betreffzeile' } },
    { id: 'cyb-a21-03-mauszeiger', icon: 'MousePointer2', de: 'Mauszeiger', pos: 'noun', article: 'der', plural: 'Mauszeiger', ru: 'указатель мыши', parts: ['Maus', 'zeiger'], example: { de: 'Ich fahre mit dem Mauszeiger über den Link.', ru: 'Я навожу указатель мыши на ссылку.', cloze: 'Mauszeiger' } },
    { id: 'cyb-a21-03-logo', icon: 'Image', de: 'Logo', pos: 'noun', article: 'das', plural: 'Logos', ru: 'логотип', example: { de: 'Das Logo der Bank sieht ein bisschen anders aus.', ru: 'Логотип банка выглядит немного иначе.', cloze: 'Logo' } },
    { id: 'cyb-a21-03-rechtschreibfehler', icon: 'SpellCheck', de: 'Rechtschreibfehler', pos: 'noun', article: 'der', plural: 'Rechtschreibfehler', ru: 'орфографическая ошибка', parts: ['Rechtschreib', 'fehler'], note: 'Die Rechtschreibung — орфография, der Fehler — ошибка.', example: { de: 'Die Mail hat viele Rechtschreibfehler.', ru: 'В письме много орфографических ошибок.', cloze: 'Rechtschreibfehler' } },
    { id: 'cyb-a21-03-koeder', icon: 'Fish', de: 'Köder', pos: 'noun', article: 'der', plural: 'Köder', ru: 'приманка', note: 'Phishing — от fishing: «рыбалка» на пароли.', example: { de: 'Ein Gutschein ist oft nur ein Köder.', ru: 'Подарочный сертификат — часто просто приманка.', cloze: 'Köder' } },

    { id: 'cyb-a21-03-erkennen', icon: 'ScanSearch', de: 'erkennen', pos: 'verb', ru: 'распознавать, узнавать', forms: 'er erkennt · erkannte · hat erkannt', note: 'Приставка er- неотделяемая. erkennen an + Dat — узнавать по чему-то.', collocation: { de: 'Phishing erkennen', ru: 'распознать фишинг', accept: ['eine Phishing-Mail erkennen'] }, example: { de: 'Man erkennt Phishing oft an der Sprache.', ru: 'Фишинг часто можно узнать по языку.', cloze: 'erkennt' } },
    { id: 'cyb-a21-03-spam-ordner', icon: 'FolderX', de: 'Spam-Ordner', pos: 'noun', article: 'der', plural: 'Spam-Ordner', ru: 'папка «Спам»', parts: ['Spam-', 'Ordner'], note: 'Der Ordner — папка.', example: { de: 'Die Mail ist im Spam-Ordner gelandet.', ru: 'Письмо попало в папку «Спам».', cloze: 'Spam-Ordner' } },
    { id: 'cyb-a21-03-faelschung', icon: 'CopyX', de: 'Fälschung', pos: 'noun', article: 'die', plural: 'Fälschungen', ru: 'подделка', example: { de: 'Diese Webseite ist eine gute Fälschung.', ru: 'Этот сайт — хорошая подделка.', cloze: 'Fälschung' } },
    { id: 'cyb-a21-03-auffordern', icon: 'Megaphone', de: 'auffordern', pos: 'verb', ru: 'призывать, требовать (сделать что-то)', forms: 'er fordert auf · hat aufgefordert', note: 'jemanden zu + Dat auffordern: zur Zahlung auffordern. Отделяемая приставка.', example: { de: 'Die Mail fordert mich zur Zahlung auf.', ru: 'Письмо требует от меня оплаты.', cloze: 'fordert' } },
    { id: 'cyb-a21-03-zugangsdaten', icon: 'KeyRound', de: 'Zugangsdaten', pos: 'noun', article: 'die', pluralOnly: true, ru: 'данные для входа (логин и пароль)', parts: ['Zugangs', 'daten'], note: 'Только мн. ч. Синоним: die Anmeldedaten.', example: { de: 'Gib deine Zugangsdaten nie per Mail weiter!', ru: 'Никогда не передавай свои данные для входа по почте!', cloze: 'Zugangsdaten' } },
    { id: 'cyb-a21-03-weiterleiten', icon: 'Forward', de: 'weiterleiten', pos: 'verb', ru: 'пересылать', forms: 'er leitet weiter · hat weitergeleitet', note: 'Отделяемая приставка; weiterleiten an + Akk.', collocation: { de: 'eine Mail weiterleiten', ru: 'переслать письмо', accept: ['die Mail weiterleiten', 'eine E-Mail weiterleiten'] }, example: { de: 'Ich leite die Mail an die IT weiter.', ru: 'Я пересылаю письмо в IT-отдел.', cloze: 'leite' } },
    { id: 'cyb-a21-03-kennwort', icon: 'KeyRound', de: 'Kennwort', pos: 'noun', article: 'das', plural: 'Kennwörter', ru: 'пароль', parts: ['Kenn', 'wort'], note: 'Синоним das Passwort, часто в официальных письмах.', example: { de: 'Die Mail verlangt mein Kennwort.', ru: 'Письмо требует мой пароль.', cloze: 'Kennwort' } },
    { id: 'cyb-a21-03-misstrauisch', icon: 'Eye', de: 'misstrauisch', pos: 'adj', ru: 'недоверчивый, настороженный', note: 'Das Misstrauen — недоверие.', example: { de: 'Bei dringenden Mails bin ich misstrauisch.', ru: 'К срочным письмам я отношусь с недоверием.', cloze: 'misstrauisch' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Eine Mail von der Bank?',
      de: `Nina studiert an der TU Wien und arbeitet zweimal pro Woche im IT-Support einer kleinen Firma. Am Dienstag ruft Frau Berger aus der Buchhaltung an: „In meinem Postfach liegt eine Mail von der Bank. In der Betreffzeile steht: Dringend! Ihr Konto wird gesperrt.“

Nina kommt sofort zu ihr. Die Mail hat einen Anhang mit dem Namen „Rechnung.zip“. Nina sagt: „Bitte nichts anklicken!“ Dann zeigt sie Frau Berger die Absenderadresse: Sie endet nicht mit dem Namen der Bank, sondern mit einer komischen Domain. Außerdem hat der Text viele Rechtschreibfehler.

„Die Mail ist gefälscht“, erklärt Nina. „Eine echte Bank schreibt nie so.“ Frau Berger ist froh, dass sie zuerst angerufen hat.`,
      ru: `Нина учится в Венском техническом университете и два раза в неделю работает в IT-поддержке небольшой фирмы. Во вторник звонит госпожа Бергер из бухгалтерии: «В моём почтовом ящике лежит письмо от банка. В строке темы написано: Срочно! Ваш аккаунт будет заблокирован».

Нина сразу приходит к ней. У письма есть вложение под названием «Rechnung.zip». Нина говорит: «Пожалуйста, ничего не нажимай!» Потом она показывает госпоже Бергер адрес отправителя: он заканчивается не названием банка, а каким-то странным доменом. Кроме того, в тексте много орфографических ошибок.

«Письмо поддельное, — объясняет Нина. — Настоящий банк никогда так не пишет». Госпожа Бергер рада, что сначала позвонила.`,
      gloss: {
        komischen: 'странными, странных', rechtschreibfehlern: 'орфографическими ошибками',
        nina: 'Нина (имя)', tu: 'TU — технический университет', wien: 'Вена', zweimal: 'два раза', 'it-support': 'IT-поддержка', kleinen: 'небольшой (род./дат.)', firma: 'фирма',
        dienstag: 'вторник', berger: 'Бергер (фамилия)', buchhaltung: 'бухгалтерия', mail: 'письмо, e-mail', bank: 'банк', konto: 'аккаунт; счёт', gesperrt: 'заблокирован',
        namen: 'название, имя (дат./вин.)', rechnung: 'счёт (к оплате)', zip: 'zip (формат архива)', zeigt: 'показывает', endet: 'заканчивается', domain: 'домен',
        außerdem: 'кроме того', text: 'текст', erklärt: 'объясняет', echte: 'настоящий, подлинный', angerufen: 'позвонил(а)', woran: 'по чему, как',
        farbe: 'цвет', logos: 'логотипа', anruf: 'звонок', willkommen: 'добро пожаловать', klick: 'кликни', öffne: 'открой', link: 'ссылка', dringende: 'срочное',
      },
      questions: [
        { q: 'Wer hat die Mail bekommen?', ru: 'Кто получил письмо?', options: ['Frau Berger aus der Buchhaltung', 'Nina', 'Die Bank'], answer: 'Frau Berger aus der Buchhaltung' },
        { q: 'Was steht in der Betreffzeile?', ru: 'Что написано в строке темы?', options: ['Dringend! Ihr Konto wird gesperrt.', 'Ihre Rechnung ist da.', 'Willkommen bei der Bank!'], answer: 'Dringend! Ihr Konto wird gesperrt.' },
        { q: 'Woran erkennt Nina, dass die Mail gefälscht ist?', ru: 'По чему Нина понимает, что письмо поддельное?', options: ['An der Absenderadresse und den Rechtschreibfehlern', 'An der Farbe des Logos', 'An einem Anruf von der Bank'], answer: 'An der Absenderadresse und den Rechtschreibfehlern' },
      ],
      translate: [
        { de: 'In meinem Postfach liegt eine dringende Mail.', ru: 'В моём почтовом ящике лежит срочное письмо.', wrongRu: ['В моём почтовом ящике лежит поддельное письмо.', 'В моём почтовом ящике нет срочного письма.'] },
        { de: 'Der Text hat viele Rechtschreibfehler.', ru: 'В тексте много орфографических ошибок.', wrongRu: ['В тексте нет орфографических ошибок.', 'В тексте много ссылок.'] },
        { de: 'Öffne den Anhang nicht!', ru: 'Не открывай вложение!', wrongRu: ['Открой вложение!', 'Не удаляй вложение!'] },
      ],
    },
    {
      lesson: 1, title: 'Was tun mit Phishing?',
      de: `Nach dieser Mail erklärt Nina allen Kollegen, wie man Phishing erkennt. „Seid misstrauisch, wenn eine Mail euch zu etwas auffordert: Ihr sollt schnell bezahlen oder eure Zugangsdaten eingeben. Das ist fast immer eine Fälschung.“

Herr Novak fragt: „Und was mache ich mit so einer Mail? Soll ich sie einfach löschen?“ Nina antwortet: „Nein, leitet sie zuerst an den IT-Support weiter. Dann sehen wir, ob auch andere Kollegen die Mail bekommen haben. Danach könnt ihr sie löschen.“

Später zeigt sie den Kollegen noch den Spam-Ordner. Dort findet Herr Novak drei weitere Phishing-Mails. Er lacht: „Die habe ich nie gesehen!“`,
      ru: `После этого письма Нина объясняет всем коллегам, как распознать фишинг. «Будьте настороже, если письмо призывает вас что-то сделать: вы должны быстро заплатить или ввести свои данные для входа. Это почти всегда подделка».

Господин Новак спрашивает: «А что мне делать с таким письмом? Просто удалить?» Нина отвечает: «Нет, сначала перешлите его в IT-поддержку. Тогда мы увидим, получили ли это письмо и другие коллеги. После этого можете его удалить».

Позже она ещё показывает коллегам папку «Спам». Там господин Новак находит ещё три фишинговых письма. Он смеётся: «Я их никогда не видел!»`,
      gloss: {
        auffordert: 'требует, призывает (auffordern)',
        nina: 'Нина (имя)', novak: 'Новак (фамилия)', mail: 'письмо, e-mail', kollegen: 'коллеги, коллегам', phishing: 'фишинг', seid: 'будьте', euch: 'вас, вам',
        sollt: '(вы) должны', bezahlen: 'платить', eingeben: 'ввести', fälschung: 'подделка', soll: 'должен; (мне) стоит', leitet: 'перешлите (leitet weiter)', weiter: 'дальше (weiterleiten — пересылать)',
        'it-support': 'IT-поддержка', könnt: '(вы) можете', weitere: 'ещё, дополнительные', 'phishing-mails': 'фишинговые письма', 'phishing-mail': 'фишинговое письмо', lacht: 'смеётся',
        sollen: 'должны', klicken: 'кликнуть', link: 'ссылка', anhang: 'вложение', kollege: 'коллега', anruft: 'звонит', ich: 'я', zum: 'к (zum Bezahlen — к оплате)',
        webseite: 'сайт', bank: 'банк',
      },
      questions: [
        { q: 'Wann soll man misstrauisch sein?', ru: 'Когда нужно быть настороже?', options: ['Wenn eine Mail zu etwas auffordert.', 'Wenn eine Mail keinen Anhang hat.', 'Wenn ein Kollege anruft.'], answer: 'Wenn eine Mail zu etwas auffordert.' },
        { q: 'Was soll man zuerst mit einer Phishing-Mail machen?', ru: 'Что нужно сначала сделать с фишинговым письмом?', options: ['An den IT-Support weiterleiten', 'Sofort löschen', 'Auf den Link klicken'], answer: 'An den IT-Support weiterleiten' },
        { q: 'Wie viele Phishing-Mails findet Herr Novak im Spam-Ordner?', ru: 'Сколько фишинговых писем господин Новак находит в папке «Спам»?', options: ['Drei', 'Eine', 'Keine'], answer: 'Drei' },
      ],
      translate: [
        { de: 'Ich leite die Mail an den IT-Support weiter.', ru: 'Я пересылаю письмо в IT-поддержку.', wrongRu: ['Я переслал письмо в IT-поддержку.', 'Я удаляю письмо из IT-поддержки.'] },
        { de: 'Die Mail fordert mich zum Bezahlen auf.', ru: 'Письмо требует, чтобы я заплатил.', wrongRu: ['Письмо не требует, чтобы я заплатил.', 'Письмо требует, чтобы я позвонил.'] },
        { de: 'Diese Webseite ist eine Fälschung.', ru: 'Этот сайт — подделка.', wrongRu: ['Это письмо — подделка.', 'Этот сайт — не подделка.'] },
      ],
    },
  ],
};
