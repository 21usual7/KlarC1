import type { Reading } from './types.ts';

// Texts that close the A1.2 lessons. Present tense, simple Perfekt, short main clauses;
// mostly lesson words plus very frequent words, every other word is glossed.

export const cyberA12Readings: Reading[] = [
  {
    lesson: 0, title: 'Annas neues Konto',
    de: `Anna ist zwanzig und studiert in Wien. Heute macht sie ein neues Konto für die Uni. Zuerst braucht sie einen Benutzernamen. Sie nimmt „anna.wien“. Dann braucht sie ein Passwort. Ihr erstes Passwort ist „anna123“. Das ist nicht sicher, sagt ihr Bruder Max. Es ist zu kurz und zu einfach.

Anna macht ein neues Passwort mit vierzehn Zeichen. Jetzt ist es sicher. Am Abend sitzt Anna im Café. Das WLAN im Café ist kostenlos, aber unsicher. Anna meldet sich im Café nicht an. Sie wartet und meldet sich zu Hause an. Am Ende meldet sie sich immer ab.`,
    ru: `Анне двадцать, она учится в Вене. Сегодня она создаёт новый аккаунт для университета. Сначала ей нужен логин. Она берёт «anna.wien». Потом ей нужен пароль. Её первый пароль — «anna123». Это ненадёжно, говорит её брат Макс. Он слишком короткий и слишком простой.

Анна придумывает новый пароль из четырнадцати символов. Теперь он надёжный. Вечером Анна сидит в кафе. Wi-Fi в кафе бесплатный, но небезопасный. Анна не входит в аккаунт в кафе. Она ждёт и входит дома. В конце она всегда выходит из аккаунта.`,
    gloss: { anna: 'Анна (имя)', annas: 'Анны (чей?)', max: 'Макс (имя)', wien: 'Вена', zeichen: 'знак, символ', vierzehn: 'четырнадцать', café: 'кафе', wartet: 'ждёт', meldet: 'входит (sich anmelden) / выходит (sich abmelden) — смотри на приставку в конце', berlin: 'Берлин', graz: 'Грац (город в Австрии)' },
    questions: [
      { q: 'Wo studiert Anna?', ru: 'Где учится Анна?', options: ['In Wien', 'In Berlin', 'In Graz'], answer: 'In Wien' },
      { q: 'Warum ist „anna123“ nicht sicher?', ru: 'Почему «anna123» ненадёжный?', options: ['Es ist zu kurz und zu einfach.', 'Es ist zu lang.', 'Es hat keine Zahlen.'], answer: 'Es ist zu kurz und zu einfach.' },
      { q: 'Wo meldet sich Anna an?', ru: 'Где Анна входит в аккаунт?', options: ['Zu Hause', 'Im Café', 'In der Uni'], answer: 'Zu Hause' },
    ],
    translate: [
      { de: 'Mein Passwort ist jetzt sicher.', ru: 'Мой пароль теперь надёжный.', wrongRu: ['Мой пароль теперь небезопасный.', 'Твой пароль теперь надёжный.'] },
      { de: 'Das WLAN im Café ist unsicher.', ru: 'Wi-Fi в кафе небезопасный.', wrongRu: ['Wi-Fi в кафе бесплатный.', 'Wi-Fi дома небезопасный.', 'Wi-Fi в кафе надёжный.'] },
      { de: 'Am Ende meldet sie sich ab.', ru: 'В конце она выходит из аккаунта.', wrongRu: ['В конце она входит в аккаунт.', 'Сначала она выходит из аккаунта.'] },
    ],
  },
  {
    lesson: 1, title: 'Eine komische Nachricht',
    de: `Max bekommt am Montag eine komische Nachricht. Da steht: „Dein Konto ist gesperrt. Klick hier und schreib dein Passwort!“ Max ist unsicher. Er fragt seine Schwester Anna.

Anna sagt: „Das ist ein Hacker. Ein Passwort ist geheim. Du schreibst es nie in eine Nachricht.“ Max klickt nicht. Aber er hat sein Passwort vergessen. Er ändert es und bekommt einen Code per SMS. Er tippt den Code und alles ist gut.

Am Abend findet Anna einen Virus auf ihrem Computer. Ein gutes Programm schützt den Computer. Anna sagt: „Wir müssen besser aufpassen!“`,
    ru: `В понедельник Макс получает странное сообщение. Там написано: «Твой аккаунт заблокирован. Кликни здесь и напиши свой пароль!» Макс не уверен. Он спрашивает свою сестру Анну.

Анна говорит: «Это хакер. Пароль — это секрет. Ты никогда не пишешь его в сообщении». Макс не кликает. Но он забыл свой пароль. Он меняет его и получает код по SMS. Он вводит код, и всё в порядке.

Вечером Анна находит вирус на своём компьютере. Хорошая программа защищает компьютер. Анна говорит: «Нам надо быть внимательнее!»`,
    gloss: { anna: 'Анна (имя)', max: 'Макс (имя)', gesperrt: 'заблокирован', schreib: 'напиши!', schreibst: '(ты) пишешь', sms: 'SMS', tippt: 'вводит, набирает (на клавиатуре)', besser: 'лучше', aufpassen: 'быть внимательным, следить', unsicher: 'не уверен; небезопасный' },
    questions: [
      { q: 'Was steht in der Nachricht?', ru: 'Что написано в сообщении?', options: ['Dein Konto ist gesperrt.', 'Dein Computer ist neu.', 'Dein Code ist richtig.'], answer: 'Dein Konto ist gesperrt.' },
      { q: 'Was macht Max mit dem Passwort?', ru: 'Что Макс делает с паролем?', options: ['Er ändert es.', 'Er schreibt es in die Nachricht.', 'Er löscht das Konto.'], answer: 'Er ändert es.' },
      { q: 'Was findet Anna am Abend?', ru: 'Что Анна находит вечером?', options: ['Einen Virus', 'Einen Code', 'Einen Hacker'], answer: 'Einen Virus' },
    ],
    translate: [
      { de: 'Ein Passwort ist geheim.', ru: 'Пароль — это секрет.', wrongRu: ['Пароль простой.', 'Код — это секрет.'] },
      { de: 'Ich habe mein Passwort vergessen.', ru: 'Я забыл свой пароль.', wrongRu: ['Я изменил свой пароль.', 'Я забыл свой логин.', 'Я не забуду свой пароль.'] },
      { de: 'Ein gutes Programm schützt den Computer.', ru: 'Хорошая программа защищает компьютер.', wrongRu: ['Хорошая программа удаляет компьютер.', 'Хороший компьютер защищает программу.'] },
    ],
  },
];

export const informatikA12Readings: Reading[] = [
  {
    lesson: 0, title: 'Leas neuer Computer',
    de: `Lea hat einen neuen Computer. Der Bildschirm ist groß und die Tastatur ist leise. Die Maus ist klein und schwarz. Lea ist sehr froh.

Heute schreibt Lea einen Text für die Schule. Sie öffnet das Programm und schreibt eine Stunde. Dann speichert sie die Datei. Die Datei heißt „Referat“. Lea macht auch einen Ordner. Der Ordner heißt „Schule“. Sie legt die Datei in den Ordner.

Am Abend sucht Lea die Datei. Wo ist sie? Lea öffnet den Ordner „Schule“. Da ist die Datei!`,
    ru: `У Леи новый компьютер. Экран большой, а клавиатура тихая. Мышь маленькая и чёрная. Лея очень рада.

Сегодня Лея пишет текст для школы. Она открывает программу и пишет час. Потом она сохраняет файл. Файл называется «Доклад». Ещё Лея создаёт папку. Папка называется «Школа». Она кладёт файл в папку.

Вечером Лея ищет файл. Где же он? Лея открывает папку «Школа». Вот он, файл!`,
    gloss: { lea: 'Лея (имя)', leas: 'Леи (чей?)', neuer: 'новый', leise: 'тихий', schwarz: 'чёрный', text: 'текст', referat: 'доклад, реферат', legt: 'кладёт', sie: 'она; они; (здесь также) он — о файле: die Datei' },
    questions: [
      { q: 'Wie ist der Bildschirm?', ru: 'Какой экран?', options: ['Groß', 'Klein', 'Kaputt'], answer: 'Groß' },
      { q: 'Wie heißt die Datei?', ru: 'Как называется файл?', options: ['Referat', 'Schule', 'Text'], answer: 'Referat' },
      { q: 'Wo ist die Datei am Abend?', ru: 'Где файл вечером?', options: ['Im Ordner', 'Im Internet', 'Auf dem Handy'], answer: 'Im Ordner' },
    ],
    translate: [
      { de: 'Lea hat einen neuen Computer.', ru: 'У Леи новый компьютер.', wrongRu: ['У Леи старый компьютер.', 'Лея покупает новый компьютер.'] },
      { de: 'Sie speichert die Datei.', ru: 'Она сохраняет файл.', wrongRu: ['Она открывает файл.', 'Она удаляет файл.', 'Она ищет файл.'] },
      { de: 'Der Bildschirm ist sehr groß.', ru: 'Экран очень большой.', wrongRu: ['Экран очень маленький.', 'Клавиатура очень большая.'] },
    ],
  },
  {
    lesson: 1, title: 'Ein Tag mit Technik',
    de: `Tom studiert Informatik. Am Morgen lädt er eine App auf sein Handy herunter. Die App ist kostenlos. Dann liest er seine E-Mails. Eine E-Mail ist Werbung. Tom löscht sie sofort.

Am Nachmittag will Tom ein Dokument drucken. Aber der Drucker druckt nicht. Tom drückt jede Taste. Nichts passiert! Er sucht im Internet eine Lösung. Ein neues Programm hilft. Tom lädt das Programm herunter, und jetzt funktioniert der Drucker wieder.`,
    ru: `Том изучает информатику. Утром он скачивает приложение на свой телефон. Приложение бесплатное. Потом он читает свои письма. Одно письмо — реклама. Том сразу его удаляет.

Днём Том хочет распечатать документ. Но принтер не печатает. Том нажимает каждую клавишу. Ничего не происходит! Он ищет решение в интернете. Помогает новая программа. Том скачивает программу, и теперь принтер снова работает.`,
    gloss: { tom: 'Том (имя)', informatik: 'информатика', technik: 'техника', app: 'приложение', werbung: 'реклама', nachmittag: 'вторая половина дня', dokument: 'документ', drucken: 'печатать, распечатывать', druckt: 'печатает', lösung: 'решение', zweimal: 'два раза', langsam: 'медленный; медленно' },
    questions: [
      { q: 'Was macht Tom mit der Werbung?', ru: 'Что Том делает с рекламой?', options: ['Er löscht sie.', 'Er druckt sie.', 'Er liest sie zweimal.'], answer: 'Er löscht sie.' },
      { q: 'Was ist am Nachmittag das Problem?', ru: 'В чём проблема днём?', options: ['Der Drucker druckt nicht.', 'Das Handy ist kaputt.', 'Das Internet ist langsam.'], answer: 'Der Drucker druckt nicht.' },
      { q: 'Was hilft Tom?', ru: 'Что помогает Тому?', options: ['Ein neues Programm', 'Eine neue Taste', 'Eine E-Mail'], answer: 'Ein neues Programm' },
    ],
    translate: [
      { de: 'Tom lädt eine App herunter.', ru: 'Том скачивает приложение.', wrongRu: ['Том удаляет приложение.', 'Том открывает приложение.'] },
      { de: 'Der Drucker druckt nicht.', ru: 'Принтер не печатает.', wrongRu: ['Принтер печатает.', 'Принтер новый.', 'Компьютер не печатает.'] },
      { de: 'Ich lösche die E-Mail sofort.', ru: 'Я сразу удаляю письмо.', wrongRu: ['Я сразу читаю письмо.', 'Я потом удаляю письмо.'] },
    ],
  },
];

export const matheA12Readings: Reading[] = [
  {
    lesson: 0, title: 'Rechnen im Kopf',
    de: `Paul ist in der Mathe-Stunde. Die Lehrerin sagt: „Heute rechnen wir im Kopf.“ Die erste Aufgabe ist leicht: sieben plus acht. Paul sagt: „Fünfzehn.“ Das Ergebnis ist richtig.

Dann kommt die zweite Aufgabe: zwanzig minus sechs. Mia sagt: „Vierzehn.“ Auch richtig! Jetzt wird es schwer: neun mal sechs. Paul denkt lange. „Vierundfünfzig“, sagt er. Richtig!

Die letzte Aufgabe ist hundert geteilt durch vier. Niemand weiß das Ergebnis. Die Lehrerin lacht: „Fünfundzwanzig. Diese Zahl ist wichtig!“`,
    ru: `Пауль на уроке математики. Учительница говорит: «Сегодня мы считаем в уме». Первая задача лёгкая: семь плюс восемь. Пауль говорит: «Пятнадцать». Результат правильный.

Потом идёт вторая задача: двадцать минус шесть. Миа говорит: «Четырнадцать». Тоже правильно! Теперь становится трудно: девять умножить на шесть. Пауль долго думает. «Пятьдесят четыре», — говорит он. Правильно!

Последняя задача — сто разделить на четыре. Никто не знает результат. Учительница смеётся: «Двадцать пять. Это число важное!»`,
    gloss: { paul: 'Пауль (имя)', mia: 'Миа (имя)', 'mathe-stunde': 'урок математики', kopf: 'голова (im Kopf — в уме)', fünfzehn: 'пятнадцать', vierzehn: 'четырнадцать', sechzehn: 'шестнадцать', vierundfünfzig: 'пятьдесят четыре', fünfundzwanzig: 'двадцать пять', lacht: 'смеётся', durch: 'через; (geteilt durch) разделить на', viel: 'много (wie viel — сколько)' },
    questions: [
      { q: 'Wie viel ist sieben plus acht?', ru: 'Сколько будет семь плюс восемь?', options: ['Fünfzehn', 'Vierzehn', 'Sechzehn'], answer: 'Fünfzehn' },
      { q: 'Welche Aufgabe ist schwer?', ru: 'Какая задача трудная?', options: ['Neun mal sechs', 'Sieben plus acht', 'Zwanzig minus sechs'], answer: 'Neun mal sechs' },
      { q: 'Wer weiß das letzte Ergebnis?', ru: 'Кто знает последний результат?', options: ['Die Lehrerin', 'Paul', 'Mia'], answer: 'Die Lehrerin' },
    ],
    translate: [
      { de: 'Heute rechnen wir im Kopf.', ru: 'Сегодня мы считаем в уме.', wrongRu: ['Завтра мы считаем в уме.', 'Сегодня мы считаем на бумаге.'] },
      { de: 'Das Ergebnis ist richtig.', ru: 'Результат правильный.', wrongRu: ['Результат неправильный.', 'Задача правильная.', 'Ответ трудный.'] },
      { de: 'Neun mal sechs ist vierundfünfzig.', ru: 'Девять умножить на шесть — пятьдесят четыре.', wrongRu: ['Девять плюс шесть — пятьдесят четыре.', 'Девять умножить на пять — сорок пять.'] },
    ],
  },
  {
    lesson: 1, title: 'Hausaufgaben mit Papa',
    de: `Mia macht ihre Hausaufgaben. Ihr Vater hilft. Die erste Aufgabe: Welche Zahlen sind gerade? Mia schreibt: zwei, vier, sieben. Der Vater sagt: „Sieben ist falsch. Sieben ist ungerade.“

Die zweite Aufgabe: die Summe von elf und neun. Mia rechnet und sagt: „Zwanzig.“ Und die Hälfte von zwanzig? „Zehn!“

Die letzte Aufgabe ist schwer. Mia und ihr Vater lösen sie zusammen. Am Ende sind beide froh. Zwei plus zwei ist gleich vier – das weiß Mia schon lange.`,
    ru: `Миа делает домашнее задание. Папа помогает. Первое задание: какие числа чётные? Миа пишет: два, четыре, семь. Папа говорит: «Семь — неправильно. Семь — нечётное».

Второе задание: сумма одиннадцати и девяти. Миа считает и говорит: «Двадцать». А половина от двадцати? «Десять!»

Последнее задание трудное. Миа и папа решают его вместе. В конце оба довольны. Два плюс два равно четырём — это Миа знает уже давно.`,
    gloss: { mia: 'Миа (имя)', papa: 'папа', sie: 'она; они; (здесь) её — о задаче: die Aufgabe' },
    questions: [
      { q: 'Welche Zahl ist falsch?', ru: 'Какое число неправильное?', options: ['Sieben', 'Zwei', 'Vier'], answer: 'Sieben' },
      { q: 'Was ist die Hälfte von zwanzig?', ru: 'Сколько будет половина от двадцати?', options: ['Zehn', 'Elf', 'Neun'], answer: 'Zehn' },
      { q: 'Wer hilft Mia?', ru: 'Кто помогает Мие?', options: ['Ihr Vater', 'Ihre Mutter', 'Die Lehrerin'], answer: 'Ihr Vater' },
    ],
    translate: [
      { de: 'Sieben ist eine ungerade Zahl.', ru: 'Семь — нечётное число.', wrongRu: ['Семь — чётное число.', 'Семь — большое число.'] },
      { de: 'Die Hälfte von zwanzig ist zehn.', ru: 'Половина от двадцати — десять.', wrongRu: ['Двадцать — половина от десяти.', 'Половина от двадцати — двенадцать.', 'Сумма двадцати и десяти.'] },
      { de: 'Wir lösen die Aufgabe zusammen.', ru: 'Мы решаем задачу вместе.', wrongRu: ['Мы решаем задачу сами.', 'Мы пишем задачу вместе.'] },
    ],
  },
];
