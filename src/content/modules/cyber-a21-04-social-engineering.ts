import type { Module } from '../types.ts';

// A2.1 cyber 04: social engineering by phone (lesson 0), on site and with a USB stick (lesson 1).

export const module: Module = {
  id: 'cyber-a21-04-social-engineering', sphere: 'cyber', level: 'A2.1',
  title: 'Social Engineering', subtitle: 'Звонок, доверие, мошенник: как злоумышленники обманывают людей, а не компьютеры.',
  words: [
    { id: 'cyb-a21-04-anruf', icon: 'PhoneCall', de: 'Anruf', pos: 'noun', article: 'der', plural: 'Anrufe', ru: 'звонок (телефонный)', imageQuery: 'person answering phone call', collocation: { de: 'einen Anruf bekommen', ru: 'получить звонок', accept: ['einen Anruf erhalten'] }, example: { de: 'Gestern kam ein komischer Anruf von der IT.', ru: 'Вчера был странный звонок якобы от IT-отдела.', cloze: 'Anruf' } },
    { id: 'cyb-a21-04-vertrauen', icon: 'Handshake', imageQuery: 'handshake', de: 'Vertrauen', pos: 'noun', article: 'das', ru: 'доверие', note: 'Мн. ч. нет. Vertrauen zu + Dat / in + Akk.', collocation: { de: 'Vertrauen ausnutzen', ru: 'злоупотреблять доверием', accept: ['das Vertrauen ausnutzen'] }, example: { de: 'Betrüger nutzen unser Vertrauen aus.', ru: 'Мошенники злоупотребляют нашим доверием.', cloze: 'Vertrauen' } },
    { id: 'cyb-a21-04-taeuschen', icon: 'VenetianMask', de: 'täuschen', pos: 'verb', ru: 'обманывать, вводить в заблуждение', forms: 'er täuscht · hat getäuscht', note: '+ Akk: jemanden täuschen. sich täuschen — ошибаться.', example: { de: 'Der Anrufer hat uns alle getäuscht.', ru: 'Звонивший всех нас обманул.', cloze: 'getäuscht' } },
    { id: 'cyb-a21-04-betrueger', icon: 'UserX', imageQuery: 'fraudster', de: 'Betrüger', pos: 'noun', article: 'der', plural: 'Betrüger', ru: 'мошенник', note: 'Женский род: die Betrügerin. Der Betrug — мошенничество.', example: { de: 'Der Betrüger wollte mein Passwort haben.', ru: 'Мошенник хотел получить мой пароль.', cloze: 'Betrüger' } },
    { id: 'cyb-a21-04-ausgeben', icon: 'Drama', de: 'sich ausgeben', pos: 'verb', ru: 'выдавать себя (за кого-то)', forms: 'er gibt sich aus · gab sich aus · hat sich ausgegeben', note: 'sich als + Nom ausgeben: er gibt sich als Techniker aus. Отделяемая приставка.', collocation: { de: 'sich als Kollege ausgeben', ru: 'выдавать себя за коллегу', accept: ['sich als Kollegin ausgeben'] }, example: { de: 'Er gibt sich als Techniker aus.', ru: 'Он выдаёт себя за техника.', cloze: 'gibt' } },
    { id: 'cyb-a21-04-druck', icon: 'Gauge', de: 'Druck', pos: 'noun', article: 'der', ru: 'давление', note: 'В этом значении без мн. ч. Druck machen — давить, торопить. Также «печать» (на принтере).', collocation: { de: 'Druck machen', ru: 'давить, торопить', accept: ['Druck ausüben'] }, example: { de: 'Der Anrufer macht viel Druck.', ru: 'Звонящий сильно давит.', cloze: 'Druck' } },
    { id: 'cyb-a21-04-mitarbeiter', icon: 'Users', de: 'Mitarbeiter', pos: 'noun', article: 'der', plural: 'Mitarbeiter', ru: 'сотрудник', imageQuery: 'office employee at desk', note: 'Женский род: die Mitarbeiterin.', example: { de: 'Ein Mitarbeiter hat sein Passwort am Telefon gesagt.', ru: 'Один сотрудник назвал свой пароль по телефону.', cloze: 'Mitarbeiter' } },
    { id: 'cyb-a21-04-hilfsbereit', icon: 'HandHelping', de: 'hilfsbereit', pos: 'adj', ru: 'готовый помочь, отзывчивый', parts: ['hilfs', 'bereit'], example: { de: 'Betrüger nutzen hilfsbereite Kollegen aus.', ru: 'Мошенники пользуются отзывчивостью коллег.', cloze: 'hilfsbereite' } },

    { id: 'cyb-a21-04-glaubwuerdig', icon: 'BadgeCheck', de: 'glaubwürdig', pos: 'adj', ru: 'правдоподобный, заслуживающий доверия', example: { de: 'Seine Geschichte klingt sehr glaubwürdig.', ru: 'Его история звучит очень правдоподобно.', cloze: 'glaubwürdig' } },
    { id: 'cyb-a21-04-anrufer', icon: 'PhoneIncoming', imageQuery: 'man on phone call', de: 'Anrufer', pos: 'noun', article: 'der', plural: 'Anrufer', ru: 'звонящий', note: 'anrufen — звонить. Ж. р.: die Anruferin.', example: { de: 'Der Anrufer sagt, er ist von der Bank.', ru: 'Звонящий говорит, что он из банка.', cloze: 'Anrufer' } },
    { id: 'cyb-a21-04-eingang', icon: 'DoorOpen', de: 'Eingang', pos: 'noun', article: 'der', plural: 'Eingänge', ru: 'вход (в здание)', imageQuery: 'office building entrance', example: { de: 'Ein Fremder wartet am Eingang.', ru: 'У входа ждёт незнакомец.', cloze: 'Eingang' } },
    { id: 'cyb-a21-04-draengen', icon: 'Gauge', de: 'drängen', pos: 'verb', ru: 'торопить, давить, настаивать', forms: 'er drängt · hat gedrängt', note: 'Давление и спешка — типичный приём социальной инженерии.', example: { de: 'Der Anrufer drängt mich: Ich soll schnell handeln.', ru: 'Звонящий давит на меня: я должен действовать быстро.', cloze: 'drängt' } },
    { id: 'cyb-a21-04-neugier', icon: 'Search', imageQuery: 'curious child', de: 'Neugier', pos: 'noun', article: 'die', ru: 'любопытство', note: 'Мн. ч. нет. Прилагательное: neugierig.', example: { de: 'Die Neugier war stärker als die Vorsicht.', ru: 'Любопытство оказалось сильнее осторожности.', cloze: 'Neugier' } },
    { id: 'cyb-a21-04-usb-stick', icon: 'Usb', de: 'USB-Stick', pos: 'noun', article: 'der', plural: 'USB-Sticks', ru: 'флешка', imageQuery: 'usb flash drive', example: { de: 'Auf dem Parkplatz liegt ein USB-Stick.', ru: 'На парковке лежит флешка.', cloze: 'USB-Stick' } },
    { id: 'cyb-a21-04-hereinfallen', icon: 'TrendingDown', de: 'hereinfallen', pos: 'verb', ru: 'попасться (на обман)', forms: 'er fällt herein · fiel herein · ist hereingefallen', note: 'hereinfallen auf + Akk; Perfekt с sein. Отделяемая приставка.', collocation: { de: 'auf einen Trick hereinfallen', ru: 'попасться на уловку', accept: ['auf den Trick hereinfallen'] }, example: { de: 'Viele fallen auf diesen Trick herein.', ru: 'Многие попадаются на эту уловку.', cloze: 'fallen' } },
    { id: 'cyb-a21-04-schulung', icon: 'Presentation', de: 'Schulung', pos: 'noun', article: 'die', plural: 'Schulungen', ru: 'обучение, тренинг (для сотрудников)', imageQuery: 'corporate training session', example: { de: 'Alle Mitarbeiter machen eine Schulung zur Sicherheit.', ru: 'Все сотрудники проходят тренинг по безопасности.', cloze: 'Schulung' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Anruf vom IT-Support?',
      de: `Miriam studiert Informatik und arbeitet nebenbei in einer Versicherung in Wien. Am Donnerstag bekommt sie einen Anruf. Ein Mann sagt: „Hallo, hier ist Stefan vom IT-Support. Wir haben ein Problem mit Ihrem Konto. Ich brauche schnell Ihr Passwort, sonst verlieren Sie alle Daten.“

Der Mann ist freundlich, aber er macht viel Druck. Miriam ist hilfsbereit und möchte keine Probleme. Trotzdem denkt sie: Ein echter Mitarbeiter vom IT-Support fragt nie nach dem Passwort.

Sie sagt: „Ich rufe Sie gleich zurück.“ Dann ruft sie die echte IT-Abteilung an. Dort kennt niemand einen Stefan. Der Anrufer war ein Betrüger. Er hat sich als Kollege ausgegeben, weil er ihr Vertrauen gewinnen wollte. Aber Miriam hat sich nicht täuschen lassen.`,
      ru: `Мириам изучает информатику и подрабатывает в страховой компании в Вене. В четверг ей звонят. Мужчина говорит: «Здравствуйте, это Штефан из IT-поддержки. У нас проблема с вашим аккаунтом. Мне срочно нужен ваш пароль, иначе вы потеряете все данные».

Мужчина вежлив, но сильно давит. Мириам отзывчивая и не хочет проблем. И всё же она думает: настоящий сотрудник IT-поддержки никогда не спрашивает пароль.

Она говорит: «Я вам сейчас перезвоню». Потом она звонит в настоящий IT-отдел. Там никто не знает никакого Штефана. Звонивший был мошенником. Он выдал себя за коллегу, потому что хотел завоевать её доверие. Но Мириам не дала себя обмануть.`,
      gloss: {
        miriam: 'Мириам (имя)', stefan: 'Штефан (имя)', informatik: 'информатика', nebenbei: 'параллельно, в свободное время', versicherung: 'страховая компания', wien: 'Вена',
        donnerstag: 'четверг', 'it-support': 'IT-поддержка', ihrem: 'вашим (дат.)', konto: 'аккаунт', passwort: 'пароль', sonst: 'иначе', verlieren: 'потеряете, терять', daten: 'данные',
        freundlich: 'вежливый, дружелюбный', probleme: 'проблемы', echter: 'настоящий', echte: 'настоящий, настоящая', nach: 'о (fragen nach — спрашивать о)', rufe: '(я) звоню (zurückrufen)',
        gleich: 'сейчас, сразу', zurück: 'обратно (zurückrufen — перезвонить)', 'it-abteilung': 'IT-отдел', anrufer: 'звонивший', kollege: 'коллега', gewinnen: 'завоевать',
        wollte: 'хотел', lassen: 'позволить (sich täuschen lassen — дать себя обмануть)', ausgegeben: 'выдал себя', chef: 'начальник', telefonnummer: 'номер телефона',
        löscht: 'удаляет', gibt: 'даёт', unser: 'наше',
      },
      questions: [
        { q: 'Als wer gibt sich der Anrufer aus?', ru: 'За кого выдаёт себя звонящий?', options: ['Als Mitarbeiter vom IT-Support', 'Als Chef von Miriam', 'Als Mitarbeiter einer Bank'], answer: 'Als Mitarbeiter vom IT-Support' },
        { q: 'Was will der Mann von Miriam?', ru: 'Чего мужчина хочет от Мириам?', options: ['Ihr Passwort', 'Ihre Telefonnummer', 'Ihren Ausweis'], answer: 'Ihr Passwort' },
        { q: 'Was macht Miriam nach dem Anruf?', ru: 'Что Мириам делает после звонка?', options: ['Sie ruft die echte IT-Abteilung an.', 'Sie gibt dem Mann ihr Passwort.', 'Sie löscht alle Daten.'], answer: 'Sie ruft die echte IT-Abteilung an.' },
      ],
      translate: [
        { de: 'Der Anrufer macht viel Druck.', ru: 'Звонящий сильно давит.', wrongRu: ['Звонящий совсем не давит.', 'Звонящий сильно торопится.'] },
        { de: 'Er gibt sich als Kollege aus.', ru: 'Он выдаёт себя за коллегу.', wrongRu: ['Он выдавал себя за коллегу.', 'Он выдаёт себя за начальника.'] },
        { de: 'Ein Betrüger will unser Vertrauen gewinnen.', ru: 'Мошенник хочет завоевать наше доверие.', wrongRu: ['Мошенник хочет украсть наши данные.', 'Мошенник хотел завоевать наше доверие.'] },
      ],
    },
    {
      lesson: 1, title: 'Der USB-Stick auf dem Parkplatz',
      de: `Eine Woche später gibt es in der Versicherung eine Schulung zum Thema Social Engineering. Die Trainerin erzählt: „Letztes Jahr ist ein Mann mit einer Warnweste und einem gefälschten Ausweis zum Eingang gekommen. Er hat glaubwürdig gewirkt, und jemand hat ihm die Tür aufgehalten.“

Dann zeigt sie einen USB-Stick. „Diesen Stick haben wir als Test auf den Parkplatz gelegt. Zehn Mitarbeiter haben ihn gefunden, und acht haben ihn an ihren Computer angesteckt. Die Neugier ist oft stärker als die Vorsicht.“

Miriam erzählt von ihrem Anruf. Die Trainerin lobt sie: „Genau richtig! Verraten Sie nie Ihr Passwort, auch nicht am Telefon. Wer sich Zeit nimmt, fällt nicht so schnell herein.“`,
      ru: `Неделю спустя в страховой компании проходит тренинг на тему социальной инженерии. Тренер рассказывает: «В прошлом году мужчина в светоотражающем жилете и с поддельным пропуском подошёл ко входу. Он выглядел правдоподобно, и кто-то придержал ему дверь».

Потом она показывает флешку. «Эту флешку мы в качестве теста положили на парковку. Десять сотрудников её нашли, и восемь подключили её к своему компьютеру. Любопытство часто сильнее осторожности».

Мириам рассказывает о своём звонке. Тренер хвалит её: «Совершенно правильно! Никогда не выдавайте свой пароль, даже по телефону. Кто не торопится, тот не так быстро попадается».`,
      gloss: {
        miriam: 'Мириам (имя)', versicherung: 'страховая компания', thema: 'тема', social: 'social (Social Engineering — социальная инженерия)', engineering: 'engineering (Social Engineering — социальная инженерия)',
        trainerin: 'тренер (женщина)', erzählt: 'рассказывает', letztes: 'прошлый (letztes Jahr — в прошлом году)', warnweste: 'светоотражающий жилет', gefälschten: 'поддельным',
        gekommen: 'пришёл, подошёл', gewirkt: 'выглядел, производил впечатление', tür: 'дверь', aufgehalten: 'придержал (дверь)', stick: 'флешка', test: 'тест',
        parkplatz: 'парковка', gelegt: 'положили', mitarbeiter: 'сотрудники', computer: 'компьютер', angesteckt: 'подключили, вставили', stärker: 'сильнее', vorsicht: 'осторожность',
        ihrem: 'своём, её (дат.)', lobt: 'хвалит', richtig: 'правильно', passwort: 'пароль', telefon: 'телефон', nimmt: 'берёт (sich Zeit nehmen — не торопиться)',
        fällt: 'попадается (hereinfallen)', herein: 'внутрь (hereinfallen — попасться)', firma: 'фирма', schlüssel: 'ключ', fenster: 'окно', gestiegen: 'залез', hatte: 'имел, у него был',
        organisiert: 'организовала', gefunden: 'нашла, нашли',
      },
      questions: [
        { q: 'Wie ist der Mann mit der Warnweste in die Firma gekommen?', ru: 'Как мужчина в светоотражающем жилете попал в фирму?', options: ['Jemand hat ihm die Tür aufgehalten.', 'Er hatte einen echten Schlüssel.', 'Er ist durch ein Fenster gestiegen.'], answer: 'Jemand hat ihm die Tür aufgehalten.' },
        { q: 'Wie viele Mitarbeiter haben den USB-Stick angesteckt?', ru: 'Сколько сотрудников подключили флешку?', options: ['Acht', 'Zehn', 'Zwei'], answer: 'Acht' },
        { q: 'Warum lobt die Trainerin Miriam?', ru: 'Почему тренер хвалит Мириам?', options: ['Weil sie ihr Passwort nicht verraten hat.', 'Weil sie den USB-Stick gefunden hat.', 'Weil sie die Schulung organisiert hat.'], answer: 'Weil sie ihr Passwort nicht verraten hat.' },
      ],
      translate: [
        { de: 'Verraten Sie nie Ihr Passwort!', ru: 'Никогда не выдавайте свой пароль!', wrongRu: ['Никогда не меняйте свой пароль!', 'Всегда выдавайте свой пароль!'] },
        { de: 'Der Mann hatte einen gefälschten Ausweis.', ru: 'У мужчины было поддельное удостоверение.', wrongRu: ['У мужчины было настоящее удостоверение.', 'У мужчины нет поддельного удостоверения.'] },
        { de: 'Die Neugier ist oft stärker als die Vorsicht.', ru: 'Любопытство часто сильнее осторожности.', wrongRu: ['Любопытство никогда не сильнее осторожности.', 'Осторожность часто сильнее любопытства.'] },
      ],
    },
  ],
};
