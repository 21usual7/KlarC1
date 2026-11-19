import type { Module } from '../types.ts';

export const module: Module = {
  id: 'informatik-a12-04-computerraum', sphere: 'informatik', level: 'A1.2',
  title: 'Im Computerraum', subtitle: 'Розетка, включить, войти в систему: слова для урока в компьютерном классе.',
  words: [
    { id: 'inf-a12-04-computerraum', icon: 'School', imageQuery: 'school computer lab', de: 'Computerraum', pos: 'noun', article: 'der', plural: 'Computerräume', ru: 'компьютерный класс', parts: ['Computer', 'raum'], example: { de: 'Der Computerraum ist im ersten Stock.', ru: 'Компьютерный класс на втором этаже.', cloze: 'Computerraum' } },
    { id: 'inf-a12-04-platz', icon: 'Armchair', imageQuery: 'empty desk with computer in classroom', de: 'Platz', pos: 'noun', article: 'der', plural: 'Plätze', ru: 'место', note: 'Platz nehmen — садиться (вежливо).', collocation: { de: 'einen Platz suchen', ru: 'искать место', accept: ['einen freien Platz suchen'] }, example: { de: 'Ist dieser Platz frei?', ru: 'Это место свободно?', cloze: 'Platz' } },
    { id: 'inf-a12-04-steckdose', icon: 'Unplug', imageQuery: 'wall power socket', de: 'Steckdose', pos: 'noun', article: 'die', plural: 'Steckdosen', ru: 'розетка', parts: ['Steck', 'dose'], example: { de: 'Die Steckdose ist unter dem Tisch.', ru: 'Розетка под столом.', cloze: 'Steckdose' } },
    { id: 'inf-a12-04-stecker', icon: 'Plug', imageQuery: 'power plug', de: 'Stecker', pos: 'noun', article: 'der', plural: 'Stecker', ru: 'штекер, вилка (электрическая)', collocation: { de: 'den Stecker ziehen', ru: 'вынуть вилку из розетки' }, example: { de: 'Der Stecker ist nicht in der Steckdose.', ru: 'Вилка не вставлена в розетку.', cloze: 'Stecker' } },
    { id: 'inf-a12-04-strom', icon: 'Zap', de: 'Strom', pos: 'noun', article: 'der', ru: 'электричество, ток', collocation: { de: 'Strom sparen', ru: 'экономить электричество' }, example: { de: 'Ohne Strom funktioniert nichts.', ru: 'Без электричества ничего не работает.', cloze: 'Strom' } },
    { id: 'inf-a12-04-einschalten', icon: 'Power', imageQuery: 'finger pressing computer power button', de: 'einschalten', pos: 'verb', ru: 'включать', forms: 'er schaltet ein · hat eingeschaltet', note: 'Отделяемая приставка: Ich schalte den PC ein. В речи также: anmachen.', collocation: { de: 'den Computer einschalten', ru: 'включить компьютер', accept: ['den PC einschalten'] }, example: { de: 'Ich schalte den Computer ein.', ru: 'Я включаю компьютер.', cloze: 'schalte' } },
    { id: 'inf-a12-04-ausschalten', icon: 'PowerOff', de: 'ausschalten', pos: 'verb', ru: 'выключать', forms: 'er schaltet aus · hat ausgeschaltet', note: 'Отделяемая приставка: Wir schalten die Computer aus. В речи также: ausmachen.', collocation: { de: 'das Handy ausschalten', ru: 'выключить телефон', accept: ['das Smartphone ausschalten'] }, example: { de: 'Bitte schaltet die Computer aus!', ru: 'Пожалуйста, выключите компьютеры!', cloze: 'schaltet' } },
    { id: 'inf-a12-04-licht', icon: 'Lightbulb', imageQuery: 'classroom ceiling lights', de: 'Licht', pos: 'noun', article: 'das', plural: 'Lichter', ru: 'свет', collocation: { de: 'das Licht einschalten', ru: 'включить свет', accept: ['das Licht anmachen'] }, example: { de: 'Das Licht im Raum ist sehr hell.', ru: 'Свет в комнате очень яркий.', cloze: 'Licht' } },

    { id: 'inf-a12-04-regel', icon: 'ScrollText', de: 'Regel', pos: 'noun', article: 'die', plural: 'Regeln', ru: 'правило', collocation: { de: 'die Regeln beachten', ru: 'соблюдать правила', accept: ['die Regeln einhalten'] }, example: { de: 'Im Computerraum gibt es Regeln.', ru: 'В компьютерном классе есть правила.', cloze: 'Regeln' } },
    { id: 'inf-a12-04-sich-anmelden', icon: 'LogIn', imageQuery: 'computer login screen', de: 'sich anmelden', pos: 'verb', ru: 'входить в систему, логиниться', forms: 'er meldet sich an · hat sich angemeldet', note: 'Возвратный, отделяемая приставка: ich melde mich an. sich bei + Dat anmelden.', collocation: { de: 'sich mit dem Passwort anmelden', ru: 'войти с паролем' }, example: { de: 'Ich melde mich mit meinem Passwort an.', ru: 'Я вхожу в систему со своим паролем.', cloze: 'melde' } },
    { id: 'inf-a12-04-sich-abmelden', icon: 'LogOut', de: 'sich abmelden', pos: 'verb', ru: 'выходить из системы', forms: 'er meldet sich ab · hat sich abgemeldet', note: 'Возвратный, отделяемая приставка: ich melde mich ab.', example: { de: 'Am Ende meldest du dich ab.', ru: 'В конце ты выходишь из системы.', cloze: 'meldest' } },
    { id: 'inf-a12-04-benutzername', icon: 'UserRound', de: 'Benutzername', pos: 'noun', article: 'der', plural: 'Benutzernamen', ru: 'имя пользователя, логин', parts: ['Benutzer', 'name'], note: 'Склоняется как Name: den Benutzernamen, des Benutzernamens.', example: { de: 'Mein Benutzername ist mein Vorname.', ru: 'Мой логин — это моё имя.', cloze: 'Benutzername' } },
    { id: 'inf-a12-04-usb-stick', icon: 'Usb', imageQuery: 'usb flash drive', de: 'USB-Stick', pos: 'noun', article: 'der', plural: 'USB-Sticks', ru: 'флешка', collocation: { de: 'den USB-Stick einstecken', ru: 'вставить флешку' }, example: { de: 'Die Datei ist auf meinem USB-Stick.', ru: 'Файл на моей флешке.', cloze: 'USB-Stick' } },
    { id: 'inf-a12-04-verboten', icon: 'Ban', de: 'verboten', pos: 'adj', ru: 'запрещённый, запрещено', example: { de: 'Essen ist hier verboten.', ru: 'Есть здесь запрещено.', cloze: 'verboten' } },
    { id: 'inf-a12-04-vergessen', icon: 'CircleHelp', de: 'vergessen', pos: 'verb', ru: 'забывать', forms: 'er vergisst · hat vergessen', note: 'Сильный глагол: du vergisst, er vergisst. vergessen + Akk.', collocation: { de: 'das Passwort vergessen', ru: 'забыть пароль' }, example: { de: 'Ich vergesse oft mein Passwort.', ru: 'Я часто забываю свой пароль.', cloze: 'vergesse' } },
    { id: 'inf-a12-04-aufraeumen', icon: 'Brush', imageQuery: 'tidy desk', de: 'aufräumen', pos: 'verb', ru: 'убирать, наводить порядок', forms: 'er räumt auf · hat aufgeräumt', note: 'Отделяемая приставка: Wir räumen den Platz auf.', collocation: { de: 'den Platz aufräumen', ru: 'убрать рабочее место', accept: ['den Tisch aufräumen'] }, example: { de: 'Nach der Stunde räumen wir auf.', ru: 'После урока мы убираемся.', cloze: 'räumen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die erste Stunde im Computerraum',
      de: `Heute hat Nina zum ersten Mal Unterricht im Computerraum. Es gibt zwanzig Plätze mit Computern. Nina sucht einen Platz am Fenster. Der Raum ist dunkel, und Herr Huber, der Lehrer, schaltet das Licht ein.

Nina will den Computer einschalten, aber nichts passiert. Herr Huber schaut unter den Tisch. Der Stecker ist nicht in der Steckdose! Ohne Strom geht es natürlich nicht.

Jetzt funktioniert der Computer. Die Klasse lernt eine Stunde mit einem Programm. Am Ende sagt Herr Huber: „Bitte schaltet die Computer aus!“`,
      ru: `Сегодня у Нины впервые урок в компьютерном классе. Там двадцать мест с компьютерами. Нина ищет место у окна. В комнате темно, и учитель, господин Хубер, включает свет.

Нина хочет включить компьютер, но ничего не происходит. Господин Хубер смотрит под стол. Вилка не вставлена в розетку! Без электричества, конечно, ничего не работает.

Теперь компьютер работает. Класс час занимается с программой. В конце господин Хубер говорит: «Пожалуйста, выключите компьютеры!»`,
      gloss: { nina: 'Нина (имя)', huber: 'Хубер (фамилия)', mal: 'раз', unterricht: 'урок, занятия', computern: 'компьютерами (дат. мн. ч.)', fenster: 'окно', raum: 'комната, помещение', dunkel: 'тёмный; темно', schaut: 'смотрит', geht: 'идёт; (es geht) получается, работает', tür: 'дверь', sitzt: 'сидит', viele: 'сколько (wie viele)', zwanzig: 'двадцать', zwölf: 'двенадцать', bildschirm: 'экран', kaputt: 'сломан', passwort: 'пароль' },
      questions: [
        { q: 'Wo sitzt Nina?', ru: 'Где сидит Нина?', options: ['Am Fenster', 'An der Tür', 'Neben dem Lehrer'], answer: 'Am Fenster' },
        { q: 'Warum funktioniert der Computer zuerst nicht?', ru: 'Почему компьютер сначала не работает?', options: ['Der Stecker ist nicht in der Steckdose.', 'Der Bildschirm ist kaputt.', 'Nina hat kein Passwort.'], answer: 'Der Stecker ist nicht in der Steckdose.' },
        { q: 'Wer schaltet das Licht ein?', ru: 'Кто включает свет?', options: ['Herr Huber', 'Nina', 'Die Klasse'], answer: 'Herr Huber' },
        { q: 'Wie viele Plätze gibt es im Computerraum?', ru: 'Сколько мест в компьютерном классе?', options: ['Zwanzig', 'Zwölf', 'Zehn'], answer: 'Zwanzig' },
      ],
      translate: [
        { de: 'Nina sucht einen Platz am Fenster.', ru: 'Нина ищет место у окна.', wrongRu: ['Нина нашла место у окна.', 'Нина ищет место у двери.'] },
        { de: 'Der Stecker ist nicht in der Steckdose.', ru: 'Вилка не вставлена в розетку.', wrongRu: ['Вилка вставлена в розетку.', 'Кабель не вставлен в розетку.'] },
        { de: 'Bitte schaltet die Computer aus!', ru: 'Пожалуйста, выключите компьютеры!', wrongRu: ['Пожалуйста, включите компьютеры!', 'Пожалуйста, выключи компьютер!'] },
      ],
    },
    {
      lesson: 1, title: 'Ninas USB-Stick',
      de: `Im Computerraum gibt es Regeln. Sie hängen an der Tür. Essen und Trinken sind verboten, und das Handy bleibt in der Tasche.

Nina meldet sich mit ihrem Benutzernamen und ihrem Passwort an. Sie hat ihr Referat auf einem USB-Stick. Sie öffnet die Datei und arbeitet bis zur Pause.

Dann klingelt es. Nina meldet sich schnell ab. Herr Huber sagt: „Bitte räumt eure Plätze auf!“ Nina räumt auf. Aber oh nein, sie vergisst den USB-Stick im Computer! Nach der Pause holt sie ihn schnell.`,
      ru: `В компьютерном классе есть правила. Они висят на двери. Есть и пить запрещено, а телефон остаётся в сумке.

Нина входит в систему со своим логином и паролем. Её доклад на флешке. Она открывает файл и работает до перемены.

Потом звенит звонок. Нина быстро выходит из системы. Господин Хубер говорит: «Пожалуйста, уберите свои места!» Нина убирается. Но ой, она забывает флешку в компьютере! После перемены она быстро её забирает.`,
      gloss: { nina: 'Нина (имя)', ninas: 'Нины (чей?)', huber: 'Хубер (фамилия)', hängen: 'висят', tür: 'дверь', essen: 'еда; есть (кушать)', trinken: 'пить', tasche: 'сумка; карман', meldet: 'meldet … an — входит в систему; meldet … ab — выходит из системы', ihrem: 'своим (дат.)', passwort: 'пароль', referat: 'доклад, реферат', pause: 'перемена, перерыв', klingelt: 'звенит (звонок)', räumt: 'убирает(ся)', oh: 'ой, о', fenster: 'окно', video: 'видео', fotos: 'фотографии', kopfhörer: 'наушники', handy: 'мобильный телефон', holt: 'забирает' },
      questions: [
        { q: 'Wo hängen die Regeln?', ru: 'Где висят правила?', options: ['An der Tür', 'Am Fenster', 'Am Computer'], answer: 'An der Tür' },
        { q: 'Was hat Nina auf dem USB-Stick?', ru: 'Что у Нины на флешке?', options: ['Ihr Referat', 'Ein Video', 'Ihre Fotos'], answer: 'Ihr Referat' },
        { q: 'Was vergisst Nina im Computer?', ru: 'Что Нина забывает в компьютере?', options: ['Den USB-Stick', 'Das Passwort', 'Die Kopfhörer'], answer: 'Den USB-Stick' },
      ],
      translate: [
        { de: 'Essen und Trinken sind verboten.', ru: 'Есть и пить запрещено.', wrongRu: ['Есть и пить разрешено.', 'Есть запрещено, а пить можно.'] },
        { de: 'Nina meldet sich schnell ab.', ru: 'Нина быстро выходит из системы.', wrongRu: ['Нина быстро входит в систему.', 'Нина медленно выходит из системы.'] },
        { de: 'Bitte räumt eure Plätze auf!', ru: 'Пожалуйста, уберите свои места!', wrongRu: ['Пожалуйста, займите свои места!', 'Пожалуйста, убери своё место!'] },
      ],
    },
  ],
};
