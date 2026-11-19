import type { Module } from '../types.ts';

export const module: Module = {
  id: 'informatik-a12-08-online-lernen', sphere: 'informatik', level: 'A1.2',
  title: 'Online lernen', subtitle: 'Курс, видеоурок, микрофон и чат: учёба через интернет.',
  words: [
    { id: 'inf-a12-08-kurs', icon: 'GraduationCap', de: 'Kurs', pos: 'noun', article: 'der', plural: 'Kurse', ru: 'курс', collocation: { de: 'einen Kurs machen', ru: 'проходить курс', accept: ['einen Kurs besuchen'] }, example: { de: 'Der Kurs beginnt am Montag.', ru: 'Курс начинается в понедельник.', cloze: 'Kurs' } },
    { id: 'inf-a12-08-lektion', icon: 'BookOpen', de: 'Lektion', pos: 'noun', article: 'die', plural: 'Lektionen', ru: 'урок (раздел курса)', note: 'Lektion — часть курса или учебника; урок в школе — die Stunde.', example: { de: 'Heute mache ich die dritte Lektion.', ru: 'Сегодня я прохожу третий урок.', cloze: 'Lektion' } },
    { id: 'inf-a12-08-video', icon: 'Video', de: 'Video', pos: 'noun', article: 'das', plural: 'Videos', ru: 'видео', imageQuery: 'video player on laptop screen', collocation: { de: 'ein Video anschauen', ru: 'посмотреть видео', accept: ['das Video anschauen', 'ein Video ansehen'] }, example: { de: 'Das Video ist sehr kurz.', ru: 'Видео очень короткое.', cloze: 'Video' } },
    { id: 'inf-a12-08-anschauen', icon: 'Eye', de: 'anschauen', pos: 'verb', ru: 'смотреть, рассматривать', forms: 'er schaut an · hat angeschaut', note: 'Отделяемая приставка: ich schaue … an. В Австрии и на юге — самое обычное слово; синоним ansehen.', example: { de: 'Wir schauen das Video zusammen an.', ru: 'Мы вместе смотрим видео.', cloze: 'schauen' } },
    { id: 'inf-a12-08-mikrofon', icon: 'Mic', de: 'Mikrofon', pos: 'noun', article: 'das', plural: 'Mikrofone', ru: 'микрофон', imageQuery: 'computer microphone', collocation: { de: 'das Mikrofon einschalten', ru: 'включить микрофон', accept: ['das Mikrofon anmachen'] }, example: { de: 'Mein Mikrofon ist kaputt.', ru: 'Мой микрофон сломан.', cloze: 'Mikrofon' } },
    { id: 'inf-a12-08-webcam', icon: 'Webcam', de: 'Webcam', pos: 'noun', article: 'die', plural: 'Webcams', ru: 'веб-камера', imageQuery: 'webcam', note: 'Читается по-английски: «вэбкэм».', example: { de: 'Die Webcam ist oben am Bildschirm.', ru: 'Веб-камера наверху экрана.', cloze: 'Webcam' } },
    { id: 'inf-a12-08-kopfhoerer', icon: 'Headphones', de: 'Kopfhörer', pos: 'noun', article: 'der', plural: 'Kopfhörer', ru: 'наушники', parts: ['Kopf', 'hörer'], imageQuery: 'headphones', note: 'der Kopfhörer — пара наушников; мн. ч. тоже Kopfhörer.', collocation: { de: 'die Kopfhörer aufsetzen', ru: 'надеть наушники', accept: ['Kopfhörer aufsetzen'] }, example: { de: 'Ohne Kopfhörer höre ich nichts.', ru: 'Без наушников я ничего не слышу.', cloze: 'Kopfhörer' } },
    { id: 'inf-a12-08-aufgabe', icon: 'ClipboardList', de: 'Aufgabe', pos: 'noun', article: 'die', plural: 'Aufgaben', ru: 'задание, задача', collocation: { de: 'eine Aufgabe machen', ru: 'выполнить задание', accept: ['die Aufgabe machen', 'eine Aufgabe lösen'] }, example: { de: 'Die Aufgabe ist heute leicht.', ru: 'Задание сегодня лёгкое.', cloze: 'Aufgabe' } },

    { id: 'inf-a12-08-lernplattform', icon: 'LayoutDashboard', de: 'Lernplattform', pos: 'noun', article: 'die', plural: 'Lernplattformen', ru: 'учебная платформа', parts: ['Lern', 'plattform'], example: { de: 'Die Lernplattform der Schule heißt Moodle.', ru: 'Учебная платформа школы называется Moodle.', cloze: 'Lernplattform' } },
    { id: 'inf-a12-08-chat', icon: 'MessagesSquare', de: 'Chat', pos: 'noun', article: 'der', plural: 'Chats', ru: 'чат', collocation: { de: 'im Chat schreiben', ru: 'писать в чате' }, example: { de: 'Ich schreibe meine Frage in den Chat.', ru: 'Я пишу свой вопрос в чат.', cloze: 'Chat' } },
    { id: 'inf-a12-08-ton', icon: 'Volume2', de: 'Ton', pos: 'noun', article: 'der', plural: 'Töne', ru: 'звук', note: 'Также «тон» в музыке.', example: { de: 'Ich sehe dich, aber der Ton ist schlecht.', ru: 'Я тебя вижу, но звук плохой.', cloze: 'Ton' } },
    { id: 'inf-a12-08-stummschalten', icon: 'MicOff', de: 'stummschalten', pos: 'verb', ru: 'выключать звук (микрофона)', forms: 'er schaltet stumm · hat stummgeschaltet', note: 'Отделяемая часть: ich schalte das Mikrofon stumm.', collocation: { de: 'das Mikrofon stummschalten', ru: 'выключить микрофон (звук)' }, example: { de: 'Bitte schalte dein Mikrofon stumm.', ru: 'Пожалуйста, выключи свой микрофон.', cloze: 'schalte' } },
    { id: 'inf-a12-08-pause', icon: 'Coffee', de: 'Pause', pos: 'noun', article: 'die', plural: 'Pausen', ru: 'перерыв, перемена', collocation: { de: 'eine Pause machen', ru: 'сделать перерыв', accept: ['Pause machen'] }, example: { de: 'Nach der Lektion machen wir eine Pause.', ru: 'После урока мы делаем перерыв.', cloze: 'Pause' } },
    { id: 'inf-a12-08-wiederholen', icon: 'Repeat', de: 'wiederholen', pos: 'verb', ru: 'повторять', forms: 'er wiederholt · hat wiederholt', note: 'Неотделяемая приставка: ich wiederhole, Partizip без ge-.', example: { de: 'Kannst du die Frage bitte wiederholen?', ru: 'Можешь, пожалуйста, повторить вопрос?', cloze: 'wiederholen' } },
    { id: 'inf-a12-08-test', icon: 'FileCheck', de: 'Test', pos: 'noun', article: 'der', plural: 'Tests', ru: 'тест, контрольная', collocation: { de: 'einen Test schreiben', ru: 'писать тест', accept: ['einen Test machen'] }, example: { de: 'Am Freitag schreiben wir einen Test.', ru: 'В пятницу мы пишем тест.', cloze: 'Test' } },
    { id: 'inf-a12-08-zertifikat', icon: 'Award', de: 'Zertifikat', pos: 'noun', article: 'das', plural: 'Zertifikate', ru: 'сертификат', imageQuery: 'certificate of completion', collocation: { de: 'ein Zertifikat bekommen', ru: 'получить сертификат', accept: ['ein Zertifikat erhalten'] }, example: { de: 'Nach dem Kurs bekomme ich ein Zertifikat.', ru: 'После курса я получу сертификат.', cloze: 'Zertifikat' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Hanna lernt online',
      de: `Hanna ist fünfzehn und wohnt in Wien. Sie macht online einen Kurs: Programmieren für Anfänger. Jede Woche gibt es eine neue Lektion.

Heute schaut Hanna das Video zur dritten Lektion an. Das Video ist zwanzig Minuten lang. Hanna setzt ihre Kopfhörer auf, denn ihr Bruder spielt laut Gitarre.

Danach hat der Kurs eine Live-Stunde. Hanna schaltet die Webcam ein. Der Lehrer fragt: „Hallo! Wer hat eine Frage?“ Hanna will etwas fragen, aber ihr Mikrofon funktioniert nicht. Sie startet den Computer neu, und jetzt geht es.

Am Ende macht Hanna die Aufgabe. Sie ist nicht leicht, aber Hanna schafft es.`,
      ru: `Ханне пятнадцать лет, она живёт в Вене. Она проходит онлайн-курс: программирование для начинающих. Каждую неделю есть новый урок.

Сегодня Ханна смотрит видео к третьему уроку. Видео длится двадцать минут. Ханна надевает наушники, потому что её брат громко играет на гитаре.

Потом у курса онлайн-занятие. Ханна включает веб-камеру. Учитель спрашивает: «Привет! У кого есть вопрос?» Ханна хочет что-то спросить, но её микрофон не работает. Она перезагружает компьютер, и теперь всё работает.

В конце Ханна выполняет задание. Оно нелёгкое, но Ханна справляется.`,
      gloss: { hanna: 'Ханна (имя)', fünfzehn: 'пятнадцать', wien: 'Вена', anfänger: 'начинающие', dritten: 'третьему', gitarre: 'гитара', 'live-stunde': 'онлайн-занятие в прямом эфире', startet: 'запускает (neu starten — перезагрузить)', neu: 'заново (neu starten — перезагрузить); новый', englisch: 'английский язык', setzt: 'надевает (aufsetzen)', auf: 'на; (aufsetzen) надевать', ein: 'включает (einschalten — приставка ein)', an: '(anschauen — смотреть) отделяемая приставка', laut: 'громко', schafft: 'справляется (es schaffen)' },
      questions: [
        { q: 'Was lernt Hanna im Kurs?', ru: 'Что Ханна изучает на курсе?', options: ['Programmieren', 'Englisch', 'Gitarre'], answer: 'Programmieren' },
        { q: 'Warum setzt Hanna ihre Kopfhörer auf?', ru: 'Почему Ханна надевает наушники?', options: ['Ihr Bruder spielt laut Gitarre.', 'Das Video ist sehr leise.', 'Ihr Mikrofon ist kaputt.'], answer: 'Ihr Bruder spielt laut Gitarre.' },
        { q: 'Was funktioniert in der Live-Stunde nicht?', ru: 'Что не работает на онлайн-занятии?', options: ['Das Mikrofon', 'Die Webcam', 'Die Kopfhörer'], answer: 'Das Mikrofon' },
      ],
      translate: [
        { de: 'Hanna schaut das Video an.', ru: 'Ханна смотрит видео.', wrongRu: ['Ханна скачивает видео.', 'Ханна смотрела видео.'] },
        { de: 'Mein Mikrofon funktioniert nicht.', ru: 'Мой микрофон не работает.', wrongRu: ['Моя веб-камера не работает.', 'Мой микрофон работает.', 'Твой микрофон не работает.'] },
        { de: 'Jede Woche gibt es eine neue Lektion.', ru: 'Каждую неделю есть новый урок.', wrongRu: ['Каждый день есть новый урок.', 'Каждую неделю есть новое видео.'] },
      ],
    },
    {
      lesson: 1, title: 'Deutsch am Abend',
      de: `Niko studiert an der TU Wien. Am Abend lernt er online Deutsch. Die Lernplattform ist einfach: Da findet er Videos, Texte und einen Chat.

Heute ist die Stunde live. Die Lehrerin spricht, aber der Ton ist schlecht. Niko schreibt in den Chat: „Ich höre nichts!“ Ein Student hat laut Musik im Zimmer. Die Lehrerin sagt: „Bitte schaltet alle das Mikrofon stumm.“ Jetzt ist der Ton gut.

Nach einer Stunde machen alle eine Pause. Dann wiederholt die Lehrerin die Wörter von gestern. Am Freitag hat Niko einen Test geschrieben. Er hat ihn geschafft und bekommt jetzt ein Zertifikat.`,
      ru: `Нико учится в Венском техническом университете. Вечером он онлайн изучает немецкий. Учебная платформа простая: там он находит видео, тексты и чат.

Сегодня занятие в прямом эфире. Учительница говорит, но звук плохой. Нико пишет в чат: «Я ничего не слышу!» У одного студента в комнате громко играет музыка. Учительница говорит: «Пожалуйста, все выключите микрофон». Теперь звук хороший.

Через час все делают перерыв. Потом учительница повторяет вчерашние слова. В пятницу Нико написал тест. Он его сдал и теперь получает сертификат.`,
      gloss: { niko: 'Нико (имя)', tu: 'TU — технический университет', wien: 'Вена', deutsch: 'немецкий язык', live: 'в прямом эфире', spricht: 'говорит', freitag: 'пятница', 'live-stunde': 'онлайн-занятие в прямом эфире', texte: 'тексты', wörter: 'слова', laut: 'громко', geschafft: 'справился; (тест) сдал' },
      questions: [
        { q: 'Was ist in der Live-Stunde das Problem?', ru: 'В чём проблема на онлайн-занятии?', options: ['Der Ton ist schlecht.', 'Die Webcam ist kaputt.', 'Der Chat funktioniert nicht.'], answer: 'Der Ton ist schlecht.' },
        { q: 'Was macht die Lehrerin nach der Pause?', ru: 'Что делает учительница после перерыва?', options: ['Sie wiederholt die Wörter.', 'Sie schreibt einen Test.', 'Sie zeigt ein Video.'], answer: 'Sie wiederholt die Wörter.' },
        { q: 'Was bekommt Niko nach dem Test?', ru: 'Что Нико получает после теста?', options: ['Ein Zertifikat', 'Einen neuen Kurs', 'Ein Mikrofon'], answer: 'Ein Zertifikat' },
      ],
      translate: [
        { de: 'Der Ton ist sehr schlecht.', ru: 'Звук очень плохой.', wrongRu: ['Звук очень хороший.', 'Видео очень плохое.'] },
        { de: 'Bitte schaltet das Mikrofon stumm.', ru: 'Пожалуйста, выключите микрофон.', wrongRu: ['Пожалуйста, включите микрофон.', 'Пожалуйста, выключите веб-камеру.'] },
        { de: 'Nach einer Stunde machen wir eine Pause.', ru: 'Через час мы делаем перерыв.', wrongRu: ['Через час мы пишем тест.', 'Через минуту мы делаем перерыв.'] },
      ],
    },
  ],
};
