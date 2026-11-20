import type { Module } from '../types.ts';

// A2.2 cyber 09: CTF competitions (lesson 0) and learning binary exploitation (lesson 1).

export const module: Module = {
  id: 'cyber-a22-09-ctf', sphere: 'cyber', level: 'A2.2',
  title: 'CTF und Lernen', subtitle: 'Соревнования Capture the Flag, подсказки, эксплойты и отладчик: как учиться хакингу легально.',
  words: [
    { id: 'cyb-a22-09-wettbewerb', icon: 'Trophy', imageQuery: 'hackathon', de: 'Wettbewerb', pos: 'noun', article: 'der', plural: 'Wettbewerbe', ru: 'соревнование, конкурс', collocation: { de: 'einen Wettbewerb gewinnen', ru: 'победить в соревновании', accept: ['den Wettbewerb gewinnen'] }, example: { de: 'Der Wettbewerb dauert das ganze Wochenende.', ru: 'Соревнование длится все выходные.', cloze: 'Wettbewerb' } },
    { id: 'cyb-a22-09-teilnehmen', icon: 'UserPlus', de: 'teilnehmen', pos: 'verb', ru: 'участвовать', forms: 'er nimmt teil · nahm teil · hat teilgenommen', note: 'Отделяемая приставка; teilnehmen an + Dat: an einem Wettbewerb teilnehmen.', collocation: { de: 'an einem Wettbewerb teilnehmen', ru: 'участвовать в соревновании', accept: ['am Wettbewerb teilnehmen'] }, example: { de: 'Letztes Jahr haben wir am Wettbewerb teilgenommen.', ru: 'В прошлом году мы участвовали в соревновании.', cloze: 'teilgenommen' } },
    { id: 'cyb-a22-09-team', icon: 'Users', imageQuery: 'students working together on laptops', de: 'Team', pos: 'noun', article: 'das', plural: 'Teams', ru: 'команда', note: 'Произносится [tiːm]. В спорте также: die Mannschaft.', collocation: { de: 'im Team arbeiten', ru: 'работать в команде' }, example: { de: 'Unser Team hat vier Mitglieder.', ru: 'В нашей команде четыре участника.', cloze: 'Team' } },
    { id: 'cyb-a22-09-flagge', icon: 'Flag', imageQuery: 'flag on pole', de: 'Flagge', pos: 'noun', article: 'die', plural: 'Flaggen', ru: 'флаг (в CTF — секретная строка-ответ)', note: 'В CTF флаг — строка вида flag{…}, которую нужно найти и сдать. Синоним в обычном смысле: die Fahne.', collocation: { de: 'die Flagge finden', ru: 'найти флаг', accept: ['eine Flagge finden'] }, example: { de: 'Die Flagge war in einem Bild versteckt.', ru: 'Флаг был спрятан в картинке.', cloze: 'Flagge' } },
    { id: 'cyb-a22-09-raetsel', icon: 'Puzzle', imageQuery: 'jigsaw puzzle', de: 'Rätsel', pos: 'noun', article: 'das', plural: 'Rätsel', ru: 'загадка, головоломка', note: 'Мн. ч. совпадает с ед.: die Rätsel.', collocation: { de: 'ein Rätsel lösen', ru: 'решить загадку', accept: ['das Rätsel lösen'] }, example: { de: 'Dieses Rätsel ist wirklich schwer.', ru: 'Эта загадка действительно трудная.', cloze: 'Rätsel' } },
    { id: 'cyb-a22-09-hinweis', icon: 'Lightbulb', de: 'Hinweis', pos: 'noun', article: 'der', plural: 'Hinweise', ru: 'подсказка; указание', note: 'Hinweis auf + Akk. В CTF часто по-английски: der Hint.', collocation: { de: 'einen Hinweis bekommen', ru: 'получить подсказку' }, example: { de: 'Der Hinweis hat uns sehr geholfen.', ru: 'Подсказка нам очень помогла.', cloze: 'Hinweis' } },
    { id: 'cyb-a22-09-einreichen', icon: 'Send', de: 'einreichen', pos: 'verb', ru: 'сдавать, подавать (решение, документ)', forms: 'er reicht ein · hat eingereicht', note: 'Отделяемая приставка; + Akk. Также: eine Arbeit, einen Antrag einreichen.', collocation: { de: 'eine Flagge einreichen', ru: 'сдать флаг', accept: ['die Flagge einreichen'] }, example: { de: 'Wir haben die Flagge um Mitternacht eingereicht.', ru: 'Мы сдали флаг в полночь.', cloze: 'eingereicht' } },
    { id: 'cyb-a22-09-rangliste', icon: 'ListOrdered', imageQuery: 'scoreboard', de: 'Rangliste', pos: 'noun', article: 'die', plural: 'Ranglisten', ru: 'рейтинг, турнирная таблица', parts: ['Rang', 'liste'], note: 'Der Rang — место, ранг. В CTF часто: das Scoreboard.', collocation: { de: 'auf der Rangliste stehen', ru: 'быть в рейтинге' }, example: { de: 'Wir stehen auf Platz drei der Rangliste.', ru: 'Мы на третьем месте в рейтинге.', cloze: 'Rangliste' } },

    { id: 'cyb-a22-09-binaerdatei', icon: 'Binary', imageQuery: 'binary code', de: 'Binärdatei', pos: 'noun', article: 'die', plural: 'Binärdateien', ru: 'бинарный (исполняемый) файл', parts: ['Binär', 'datei'], note: 'binär — двоичный, die Datei — файл. Разговорно: das Binary.', example: { de: 'Die Binärdatei stürzt bei langen Eingaben ab.', ru: 'Бинарник падает при длинном вводе.', cloze: 'Binärdatei' } },
    { id: 'cyb-a22-09-pufferueberlauf', icon: 'Layers', de: 'Pufferüberlauf', pos: 'noun', article: 'der', plural: 'Pufferüberläufe', ru: 'переполнение буфера', parts: ['Puffer', 'überlauf'], note: 'Der Puffer — буфер, der Überlauf — переполнение. Часто по-английски: der Buffer Overflow.', collocation: { de: 'einen Pufferüberlauf ausnutzen', ru: 'эксплуатировать переполнение буфера', accept: ['den Pufferüberlauf ausnutzen'] }, example: { de: 'Ein Pufferüberlauf kann das Programm abstürzen lassen.', ru: 'Переполнение буфера может обрушить программу.', cloze: 'Pufferüberlauf' } },
    { id: 'cyb-a22-09-exploit', icon: 'Bomb', imageQuery: 'exploit code', de: 'Exploit', pos: 'noun', article: 'der', plural: 'Exploits', ru: 'эксплойт', note: 'Англицизм; встречается и das Exploit, но чаще der. Глагол — ausnutzen (eine Schwachstelle ausnutzen).', collocation: { de: 'einen Exploit schreiben', ru: 'написать эксплойт', accept: ['den Exploit schreiben'] }, example: { de: 'Sein Exploit hat beim ersten Versuch funktioniert.', ru: 'Его эксплойт сработал с первой попытки.', cloze: 'Exploit' } },
    { id: 'cyb-a22-09-debugger', icon: 'Bug', imageQuery: 'gdb debugger screenshot', de: 'Debugger', pos: 'noun', article: 'der', plural: 'Debugger', ru: 'отладчик', note: 'Мн. ч. совпадает с ед. Глагол: debuggen (er debuggt · hat debuggt).', example: { de: 'Mit dem Debugger sieht man jeden Schritt.', ru: 'В отладчике видно каждый шаг.', cloze: 'Debugger' } },
    { id: 'cyb-a22-09-writeup', icon: 'NotebookPen', de: 'Writeup', pos: 'noun', article: 'das', plural: 'Writeups', ru: 'разбор решения (write-up)', example: { de: 'Nach dem CTF schreibe ich ein Writeup.', ru: 'После CTF я пишу разбор решения.', cloze: 'Writeup' } },
    { id: 'cyb-a22-09-loesungsweg', icon: 'Route', de: 'Lösungsweg', pos: 'noun', article: 'der', plural: 'Lösungswege', ru: 'ход решения, способ решения', parts: ['Lösungs', 'weg'], note: 'Die Lösung + s + der Weg. В CTF описание решения называют das Write-up.', collocation: { de: 'den Lösungsweg beschreiben', ru: 'описать ход решения', accept: ['einen Lösungsweg beschreiben'] }, example: { de: 'Nach dem Wettbewerb beschreiben wir unseren Lösungsweg.', ru: 'После соревнования мы описываем наш ход решения.', cloze: 'Lösungsweg' } },
    { id: 'cyb-a22-09-dranbleiben', icon: 'Footprints', de: 'dranbleiben', pos: 'verb', ru: 'не сдаваться, продолжать заниматься', forms: 'er bleibt dran · ist drangeblieben', note: 'Разговорное, отделяемая приставка dran-; dranbleiben an + Dat. Perfekt с sein.', example: { de: 'Er ist bis zum Ende drangeblieben.', ru: 'Он не сдавался до самого конца.', cloze: 'drangeblieben' } },
    { id: 'cyb-a22-09-fortschritt', icon: 'TrendingUp', de: 'Fortschritt', pos: 'noun', article: 'der', plural: 'Fortschritte', ru: 'прогресс, успех', parts: ['Fort', 'schritt'], note: 'Чаще во мн. ч.: Fortschritte machen — делать успехи.', collocation: { de: 'Fortschritte machen', ru: 'делать успехи', accept: ['große Fortschritte machen'] }, example: { de: 'In einem Semester hat sie große Fortschritte gemacht.', ru: 'За один семестр она сделала большие успехи.', cloze: 'Fortschritte' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Das erste CTF',
      de: `Kerem studiert im zweiten Semester an der TU Wien. Im Herbst hat ihn seine Kommilitonin Mira gefragt, ob er an einem CTF-Wettbewerb teilnehmen möchte. CTF bedeutet „Capture the Flag“. Kerem hatte keine Erfahrung, aber er war neugierig.

Ihr Team hatte vier Leute und einen lustigen Namen: „Die Wiener Würstchen“. Am Samstag um neun Uhr begann der Wettbewerb. Jede Aufgabe war ein Rätsel aus einem anderen Bereich: Web, Kryptografie oder Reverse Engineering. Wer ein Rätsel löst, findet eine Flagge und muss sie auf der Webseite einreichen.

Bei einer Aufgabe kamen sie lange nicht weiter. Dann haben sie einen Hinweis gekauft, aber dafür verliert man Punkte. Der Hinweis war gut, und Mira konnte die Flagge schnell finden.

Am Ende stand das Team auf Platz zwölf der Rangliste. „Nicht schlecht für das erste Mal!“, sagte Mira.`,
      ru: `Керем учится на втором семестре в Венском техническом университете. Осенью его однокурсница Мира спросила, хочет ли он участвовать в соревновании CTF. CTF означает «Захват флага». У Керема не было опыта, но ему было любопытно.

В их команде было четыре человека, и у неё было смешное название: «Венские сосиски». В субботу в девять часов началось соревнование. Каждое задание было загадкой из другой области: веб, криптография или реверс-инжиниринг. Кто решает загадку, находит флаг и должен сдать его на сайте.

На одном задании они долго не могли продвинуться. Тогда они купили подсказку, но за это теряешь очки. Подсказка была хорошей, и Мира смогла быстро найти флаг.

В итоге команда оказалась на двенадцатом месте в рейтинге. «Неплохо для первого раза!» — сказала Мира.`,
      gloss: {
        kerem: 'Керем (имя)', mira: 'Мира (имя)', zweiten: 'втором', semester: 'семестр', tu: 'TU — технический университет', wien: 'Вена', herbst: 'осень',
        kommilitonin: 'однокурсница', gefragt: 'спросила', ctf: 'CTF (Capture the Flag)', 'ctf-wettbewerb': 'соревнование CTF', bedeutet: 'означает', capture: '(англ.) захват', the: '(англ.) артикль', flag: '(англ.) флаг',
        erfahrung: 'опыт', neugierig: 'любопытный', leute: 'люди', lustigen: 'смешное', namen: 'название, имя', wiener: 'венские', würstchen: 'сосиски',
        samstag: 'суббота', uhr: 'час (о времени)', begann: 'начался', aufgabe: 'задание', anderen: 'другой', bereich: 'область', web: 'веб',
        kryptografie: 'криптография', reverse: '(англ.) обратный', engineering: '(англ.) инжиниринг; Reverse Engineering — реверс-инжиниринг', löst: 'решает', findet: 'находит',
        webseite: 'сайт', kamen: 'пришли (nicht weiterkommen — не продвигаться)', weiter: 'дальше', gekauft: 'купили', dafür: 'за это', verliert: 'теряет', punkte: 'очки, баллы',
        konnte: 'смогла', finden: 'найти', stand: 'стояла, находилась', platz: 'место', mal: 'раз', sagte: 'сказала', schlecht: 'плохо',
        gewinnt: 'выигрывает', zeigen: 'показать', schreiben: 'написать', passiert: 'происходит', kauft: 'покупает', welchem: 'каком', wirklich: 'действительно',
        gewinnen: 'выиграть', eins: 'один', vier: 'четыре', code: 'код', test: 'тест', firewall: 'файрвол', computer: 'компьютер',
      },
      questions: [
        { q: 'Was bedeutet CTF?', ru: 'Что означает CTF?', options: ['Capture the Flag', 'Code, Test, Firewall', 'Computer, Team, Flagge'], answer: 'Capture the Flag' },
        { q: 'Was muss man mit einer Flagge machen?', ru: 'Что нужно сделать с флагом?', options: ['Sie auf der Webseite einreichen', 'Sie dem Team zeigen', 'Sie in ein Rätsel schreiben'], answer: 'Sie auf der Webseite einreichen' },
        { q: 'Was passiert, wenn man einen Hinweis kauft?', ru: 'Что происходит, если покупаешь подсказку?', options: ['Man verliert Punkte.', 'Man gewinnt den Wettbewerb.', 'Man bekommt sofort die Flagge.'], answer: 'Man verliert Punkte.' },
        { q: 'Auf welchem Platz stand das Team am Ende?', ru: 'На каком месте оказалась команда в итоге?', options: ['Auf Platz zwölf', 'Auf Platz eins', 'Auf Platz vier'], answer: 'Auf Platz zwölf' },
      ],
      translate: [
        { de: 'Wir wollen an einem Wettbewerb teilnehmen.', ru: 'Мы хотим участвовать в соревновании.', wrongRu: ['Мы хотим победить в соревновании.', 'Мы не хотим участвовать в соревновании.', 'Мы участвовали в соревновании.'] },
        { de: 'Der Hinweis war wirklich gut.', ru: 'Подсказка была действительно хорошей.', wrongRu: ['Подсказка была действительно плохой.', 'Флаг был действительно хорошим.'] },
        { de: 'Unser Team hat die Flagge eingereicht.', ru: 'Наша команда сдала флаг.', wrongRu: ['Наша команда нашла флаг.', 'Наша команда не сдала флаг.', 'Ваша команда сдала флаг.'] },
      ],
    },
    {
      lesson: 1, title: 'Lernen nach dem Wettbewerb',
      de: `Nach dem Wettbewerb wollte Kerem mehr über Binary Exploitation lernen. Mira hat ihm eine Lernplattform empfohlen. Dort bekommt man eine Binärdatei und muss eine Schwachstelle finden.

Die erste Aufgabe war ein einfacher Pufferüberlauf. Kerem öffnete das Programm im Debugger und beobachtete den Speicher. Er hat viele Eingaben ausprobiert, aber sein Exploit funktionierte nicht. Zwei Abende lang konnte er den Fehler nicht finden.

Mira sagte: „Du musst dranbleiben. Am Anfang dauert alles lange.“ Am dritten Abend hat Kerem den Fehler endlich gefunden: Die Adresse im Exploit war falsch. Danach hat sein Exploit die Flagge gezeigt.

Jetzt schreibt Kerem nach jeder Aufgabe seinen Lösungsweg auf. So sieht er seine Fortschritte, und später kann er alles wiederholen.`,
      ru: `После соревнования Керем хотел больше узнать о бинарной эксплуатации. Мира посоветовала ему обучающую платформу. Там получаешь бинарный файл и должен найти уязвимость.

Первым заданием было простое переполнение буфера. Керем открыл программу в отладчике и наблюдал за памятью. Он перепробовал много вариантов ввода, но его эксплойт не работал. Два вечера подряд он не мог найти ошибку.

Мира сказала: «Тебе нужно не сдаваться. Поначалу всё занимает много времени». На третий вечер Керем наконец нашёл ошибку: адрес в эксплойте был неправильным. После этого его эксплойт показал флаг.

Теперь после каждого задания Керем записывает свой ход решения. Так он видит свои успехи и позже может всё повторить.`,
      gloss: {
        beobachtet: 'наблюдает; наблюдал (beobachten)',
        kerem: 'Керем (имя)', mira: 'Мира (имя)', wollte: 'хотел', binary: '(англ.) бинарный', exploitation: '(англ.) эксплуатация', lernplattform: 'обучающая платформа',
        empfohlen: 'посоветовала, порекомендовала', dort: 'там', aufgabe: 'задание', einfacher: 'простой', öffnete: 'открыл', programm: 'программа', beobachtete: 'наблюдал',
        speicher: 'память', eingaben: 'вводы, входные данные', funktionierte: 'работал, срабатывал', abende: 'вечера', lang: 'подряд, в течение', konnte: 'мог',
        fehler: 'ошибка', anfang: 'начало', dauert: 'длится, занимает время', dritten: 'третий', abend: 'вечер', adresse: 'адрес', falsch: 'неправильный',
        gezeigt: 'показал', schreibt: 'пишет (aufschreiben — записывать)', auf: 'на; (aufschreiben) записывать', wiederholen: 'повторить', womit: 'с помощью чего',
        firewall: 'файрвол', kaputt: 'сломан', möchte: 'хочет', lesen: 'прочитать', sehen: 'видеть', erste: 'первое, первый',
      },
      questions: [
        { q: 'Was bekommt man auf der Lernplattform?', ru: 'Что получаешь на обучающей платформе?', options: ['Eine Binärdatei', 'Einen Debugger', 'Eine Flagge'], answer: 'Eine Binärdatei' },
        { q: 'Womit hat Kerem den Speicher beobachtet?', ru: 'С помощью чего Керем наблюдал за памятью?', options: ['Mit einem Debugger', 'Mit einer Firewall', 'Mit einem Exploit'], answer: 'Mit einem Debugger' },
        { q: 'Warum funktionierte der Exploit zuerst nicht?', ru: 'Почему эксплойт сначала не работал?', options: ['Die Adresse war falsch.', 'Die Binärdatei war kaputt.', 'Der Debugger funktionierte nicht.'], answer: 'Die Adresse war falsch.' },
        { q: 'Warum schreibt Kerem seinen Lösungsweg auf?', ru: 'Почему Керем записывает свой ход решения?', options: ['Er will seine Fortschritte sehen.', 'Mira möchte ihn lesen.', 'Er muss ihn einreichen.'], answer: 'Er will seine Fortschritte sehen.' },
      ],
      translate: [
        { de: 'Er hat den Exploit im Debugger ausprobiert.', ru: 'Он опробовал эксплойт в отладчике.', wrongRu: ['Он написал эксплойт в отладчике.', 'Он опробует эксплойт в отладчике.', 'Она опробовала эксплойт в отладчике.'] },
        { de: 'Du musst dranbleiben.', ru: 'Тебе нужно не сдаваться.', wrongRu: ['Тебе можно сдаться.', 'Нам нужно не сдаваться.'] },
        { de: 'Die erste Aufgabe war ein Pufferüberlauf.', ru: 'Первым заданием было переполнение буфера.', wrongRu: ['Последним заданием было переполнение буфера.', 'Первым заданием был эксплойт.'] },
      ],
    },
  ],
};
