import type { Module } from '../types.ts';

// A2.1 informatik 06: planning and designing an app (lesson 0), building and releasing it (lesson 1).
// «Rückmeldung» is in informatik-a21-08-team. «Nutzer» is left out as a card: «Benutzer» is already in informatik-a2-software; «Oberfläche» belongs to module 03.

export const module: Module = {
  id: 'informatik-a21-06-apps', sphere: 'informatik', level: 'A2.1',
  title: 'Apps entwickeln', subtitle: 'От идеи и эскиза до первой версии в магазине приложений.',
  words: [
    { id: 'inf-a21-06-entwickler', icon: 'Laptop', imageQuery: 'software developer at computer', de: 'Entwickler', pos: 'noun', article: 'der', plural: 'Entwickler', ru: 'разработчик', note: 'Женский род: die Entwicklerin, мн. ч. die Entwicklerinnen.', example: { de: 'Der Entwickler arbeitet an einer neuen App.', ru: 'Разработчик работает над новым приложением.', cloze: 'Entwickler' } },
    { id: 'inf-a21-06-zielgruppe', icon: 'Users', de: 'Zielgruppe', pos: 'noun', article: 'die', plural: 'Zielgruppen', ru: 'целевая аудитория', parts: ['Ziel', 'gruppe'], collocation: { de: 'die Zielgruppe kennen', ru: 'знать целевую аудиторию' }, example: { de: 'Unsere Zielgruppe sind Studierende in Wien.', ru: 'Наша целевая аудитория — студенты в Вене.', cloze: 'Zielgruppe' } },
    { id: 'inf-a21-06-funktion', icon: 'Puzzle', de: 'Funktion', pos: 'noun', article: 'die', plural: 'Funktionen', ru: 'функция (возможность программы)', collocation: { de: 'eine neue Funktion', ru: 'новая функция' }, example: { de: 'Die App hat nur wenige Funktionen.', ru: 'У приложения всего несколько функций.', cloze: 'Funktionen' } },
    { id: 'inf-a21-06-gestalten', icon: 'Palette', de: 'gestalten', pos: 'verb', ru: 'оформлять, создавать дизайн', forms: 'er gestaltet · hat gestaltet', note: '+ Akk; приставка ge- здесь часть корня, в Perfekt второго ge- нет.', collocation: { de: 'eine Seite gestalten', ru: 'оформить страницу', accept: ['die Seite gestalten'] }, example: { de: 'Clara gestaltet die Farben und die Schrift.', ru: 'Клара оформляет цвета и шрифт.', cloze: 'gestaltet' } },
    { id: 'inf-a21-06-skizze', icon: 'PencilRuler', imageQuery: 'app wireframe sketch on paper', de: 'Skizze', pos: 'noun', article: 'die', plural: 'Skizzen', ru: 'эскиз, набросок', collocation: { de: 'eine Skizze zeichnen', ru: 'нарисовать эскиз', accept: ['eine Skizze machen'] }, example: { de: 'Er zeichnet eine Skizze auf Papier.', ru: 'Он рисует эскиз на бумаге.', cloze: 'Skizze' } },
    { id: 'inf-a21-06-prototyp', icon: 'Component', de: 'Prototyp', pos: 'noun', article: 'der', plural: 'Prototypen', ru: 'прототип', note: 'Слабое склонение: den/dem Prototypen (в речи часто и den Prototyp).', example: { de: 'Wir testen den Prototyp mit fünf Nutzern.', ru: 'Мы тестируем прототип с пятью пользователями.', cloze: 'Prototyp' } },
    { id: 'inf-a21-06-benutzerfreundlich', icon: 'Smile', de: 'benutzerfreundlich', pos: 'adj', ru: 'удобный для пользователя', parts: ['benutzer', 'freundlich'], note: 'Der Benutzer + freundlich (дружелюбный).', example: { de: 'Eine gute App ist einfach und benutzerfreundlich.', ru: 'Хорошее приложение — простое и удобное.', cloze: 'benutzerfreundlich' } },
    { id: 'inf-a21-06-layout', icon: 'LayoutTemplate', de: 'Layout', pos: 'noun', article: 'das', plural: 'Layouts', ru: 'макет, компоновка (расположение элементов)', note: 'Произносится по-английски: [ˈleːaʊ̯t].', collocation: { de: 'ein klares Layout', ru: 'понятный макет', accept: ['ein einfaches Layout'] }, example: { de: 'Das Layout zeigt oben das Menü.', ru: 'Макет показывает меню сверху.', cloze: 'Layout' } },

    { id: 'inf-a21-06-entwickeln', icon: 'Hammer', de: 'entwickeln', pos: 'verb', ru: 'разрабатывать', forms: 'er entwickelt · hat entwickelt', note: 'Приставка ent- неотделяемая, в Perfekt без ge-.', collocation: { de: 'eine App entwickeln', ru: 'разработать приложение', accept: ['die App entwickeln'] }, example: { de: 'Das Team entwickelt eine App für die Mensa.', ru: 'Команда разрабатывает приложение для столовой.', cloze: 'entwickelt' } },
    { id: 'inf-a21-06-version', icon: 'Tag', de: 'Version', pos: 'noun', article: 'die', plural: 'Versionen', ru: 'версия', collocation: { de: 'die neue Version', ru: 'новая версия', accept: ['eine neue Version'] }, example: { de: 'Die neue Version kommt nächste Woche.', ru: 'Новая версия выйдет на следующей неделе.', cloze: 'Version' } },
    { id: 'inf-a21-06-plattform', icon: 'Layers', de: 'Plattform', pos: 'noun', article: 'die', plural: 'Plattformen', ru: 'платформа', example: { de: 'Die App läuft auf beiden Plattformen.', ru: 'Приложение работает на обеих платформах.', cloze: 'Plattformen' } },
    { id: 'inf-a21-06-optimieren', icon: 'SlidersHorizontal', de: 'optimieren', pos: 'verb', ru: 'оптимизировать, улучшать (под задачу)', forms: 'er optimiert · hat optimiert', note: 'Глаголы на -ieren: в Perfekt без ge-. etwas für + Akk optimieren.', collocation: { de: 'für das Handy optimieren', ru: 'оптимизировать для телефона', accept: ['für Handys optimieren'] }, example: { de: 'Wir optimieren die App für kleine Bildschirme.', ru: 'Мы оптимизируем приложение для маленьких экранов.', cloze: 'optimieren' } },
    { id: 'inf-a21-06-bewertung', icon: 'Star', de: 'Bewertung', pos: 'noun', article: 'die', plural: 'Bewertungen', ru: 'оценка, отзыв (с рейтингом)', collocation: { de: 'eine Bewertung schreiben', ru: 'написать отзыв', accept: ['eine Bewertung abgeben'] }, example: { de: 'Die App hat sehr gute Bewertungen.', ru: 'У приложения очень хорошие оценки.', cloze: 'Bewertungen' } },
    { id: 'inf-a21-06-benachrichtigung', icon: 'Bell', de: 'Benachrichtigung', pos: 'noun', article: 'die', plural: 'Benachrichtigungen', ru: 'уведомление', note: 'Benachrichtigungen aktivieren / deaktivieren — включить / выключить уведомления.', example: { de: 'Ich bekomme jeden Morgen eine Benachrichtigung.', ru: 'Я каждое утро получаю уведомление.', cloze: 'Benachrichtigung' } },
    { id: 'inf-a21-06-verbessern', icon: 'TrendingUp', de: 'verbessern', pos: 'verb', ru: 'улучшать', forms: 'er verbessert · hat verbessert', note: 'Приставка ver- неотделяемая; + Akk.', example: { de: 'Wir wollen die App weiter verbessern.', ru: 'Мы хотим дальше улучшать приложение.', cloze: 'verbessern' } },
    { id: 'inf-a21-06-absturz', icon: 'CircleX', de: 'Absturz', pos: 'noun', article: 'der', plural: 'Abstürze', ru: 'сбой, «падение» (программы)', note: 'Глагол: abstürzen — die App ist abgestürzt.', example: { de: 'Nach dem Update gab es keinen Absturz mehr.', ru: 'После обновления сбоев больше не было.', cloze: 'Absturz' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Eine App für die Mensa',
      de: `Amir macht im Sommer ein Praktikum bei einer kleinen Firma in Wien. Das Team dort baut Apps, und Amir arbeitet mit Clara zusammen. Sie ist Entwicklerin, und Amir möchte später auch Entwickler werden. Ihr neues Projekt ist eine App für die Mensa: Studierende sollen sehen, welches Essen es heute gibt.

Zuerst sprechen sie über die Zielgruppe. Clara sagt: „Unsere Nutzer haben wenig Zeit. Die App muss benutzerfreundlich sein.“ Deshalb bekommt die App nur drei Funktionen.

Amir zeichnet eine Skizze auf Papier. Danach gestalten sie zusammen das Layout und einen einfachen Prototyp am Computer. Am Freitag testen fünf Studierende den Prototyp. Ihre Rückmeldung ist positiv, nur die Schrift ist zu klein.`,
      ru: `Летом Амир проходит практику в небольшой фирме в Вене. Команда там делает приложения, и Амир работает вместе с Кларой. Она разработчица, и Амир тоже хочет потом стать разработчиком. Их новый проект — приложение для студенческой столовой: студенты должны видеть, какая еда сегодня есть.

Сначала они говорят о целевой аудитории. Клара говорит: «У наших пользователей мало времени. Приложение должно быть удобным». Поэтому у приложения будет только три функции.

Амир рисует эскиз на бумаге. После этого они вместе разрабатывают макет и простой прототип на компьютере. В пятницу пять студентов тестируют прототип. Их отзыв положительный, только шрифт слишком мелкий.`,
      gloss: {
        amir: 'Амир (имя)', amirs: 'Амира (чей?)', clara: 'Клара (имя)', sommer: 'лето', praktikum: 'практика, стажировка', kleinen: 'небольшой', firma: 'фирма', wien: 'Вена',
        team: 'команда', baut: 'строит, делает', apps: 'приложения', app: 'приложение', entwicklerin: 'разработчица', werden: 'стать', projekt: 'проект', mensa: 'студенческая столовая',
        studierende: 'студенты', studierenden: 'студентов', sollen: 'должны', welches: 'какое', essen: 'еда', sprechen: 'говорят', unsere: 'наши', nutzer: 'пользователи', haben: 'имеют (у них есть)',
        bekommt: 'получает (здесь: у неё будет)', drei: 'три', zeichnet: 'рисует', papier: 'бумага', einfachen: 'простой', computer: 'компьютер', freitag: 'пятница',
        testen: 'тестируют', positiv: 'положительный', rückmeldung: 'отзыв, обратная связь', schrift: 'шрифт', klein: 'мелкий, маленький', soll: 'должна', zeigen: 'показывать',
        lernräume: 'учебные помещения', freie: 'свободные', noten: 'оценки', geld: 'деньги', programmieren: 'программировать', tabelle: 'таблица',
        langsam: 'медленный', farben: 'цвета', hell: 'светлые', waren: 'были', war: 'был(а)', gezeichnet: 'нарисовал', prototyp: 'прототип',
      },
      questions: [
        { q: 'Was soll die App zeigen?', ru: 'Что должно показывать приложение?', options: ['Das Essen in der Mensa', 'Freie Lernräume an der Uni', 'Die Noten der Studierenden'], answer: 'Das Essen in der Mensa' },
        { q: 'Warum bekommt die App nur drei Funktionen?', ru: 'Почему у приложения будет только три функции?', options: ['Die Nutzer haben wenig Zeit.', 'Das Team hat wenig Geld.', 'Amir kann nicht programmieren.'], answer: 'Die Nutzer haben wenig Zeit.' },
        { q: 'Was hat Amir auf Papier gezeichnet?', ru: 'Что Амир нарисовал на бумаге?', options: ['Eine Skizze', 'Einen Prototyp', 'Eine Tabelle'], answer: 'Eine Skizze' },
        { q: 'Was war das Problem beim Prototyp?', ru: 'В чём была проблема с прототипом?', options: ['Die Schrift war zu klein.', 'Die App war zu langsam.', 'Die Farben waren zu hell.'], answer: 'Die Schrift war zu klein.' },
      ],
      translate: [
        { de: 'Die App muss benutzerfreundlich sein.', ru: 'Приложение должно быть удобным для пользователя.', wrongRu: ['Приложение не должно быть удобным для пользователя.', 'Приложение может быть удобным для пользователя.'] },
        { de: 'Wir gestalten einen einfachen Prototyp.', ru: 'Мы делаем дизайн простого прототипа.', wrongRu: ['Мы тестируем простой прототип.', 'Они делают дизайн простого прототипа.'] },
        { de: 'Die Rückmeldung der Studierenden ist positiv.', ru: 'Отзыв студентов положительный.', wrongRu: ['Отзыв студентов отрицательный.', 'Отзыв преподавателей положительный.'] },
      ],
    },
    {
      lesson: 1, title: 'Die erste Version',
      de: `Im August entwickelt das Team die richtige App. Sie soll auf zwei Plattformen laufen: auf Android und auf iOS. Amir optimiert die Schrift und die Farben, weil die Nutzer das gewünscht haben.

Nach drei Wochen ist die erste Version fertig. Aber am ersten Tag gibt es einen Absturz, wenn man auf das Menü vom Montag klickt. Clara findet den Fehler schnell, und am nächsten Tag kommt eine neue Version.

Jetzt bekommt jeder Nutzer um elf Uhr eine Benachrichtigung mit dem Essen des Tages. Im App-Store hat die App schon viele gute Bewertungen. Clara sagt zu Amir: „Wir müssen die App weiter verbessern, aber du hast im Praktikum sehr gut gearbeitet.“`,
      ru: `В августе команда разрабатывает настоящее приложение. Оно должно работать на двух платформах: на Android и на iOS. Амир дорабатывает шрифт и цвета, потому что пользователи этого хотели.

Через три недели первая версия готова. Но в первый же день случается сбой, когда нажимаешь на меню понедельника. Клара быстро находит ошибку, и на следующий день выходит новая версия.

Теперь каждый пользователь в одиннадцать часов получает уведомление с блюдами дня. В магазине приложений у приложения уже много хороших отзывов. Клара говорит Амиру: «Нам нужно дальше улучшать приложение, но ты очень хорошо поработал на практике».`,
      gloss: {
        amir: 'Амир (имя)', clara: 'Клара (имя)', august: 'август', team: 'команда', richtige: 'настоящее', app: 'приложение', soll: 'должна', laufen: 'работать (о программе)',
        android: 'Android (ОС)', ios: 'iOS (ОС)', kleine: 'маленьких', handys: 'телефонов', schrift: 'шрифт', farben: 'цвета', nutzer: 'пользователи; пользователь',
        gewünscht: 'хотели, пожелали', drei: 'три', wochen: 'недели', fertig: 'готова', ersten: 'первый', menü: 'меню', vom: 'с, от (von dem)', montag: 'понедельник',
        nächsten: 'следующий', kommt: 'выходит, приходит', bekommt: 'получает', elf: 'одиннадцать', uhr: 'час (о времени)', essen: 'еда', tages: 'дня',
        'app-store': 'магазин приложений', praktikum: 'практика, стажировка', gearbeitet: 'работал', weiter: 'дальше', zu: 'к; (sagen zu — говорить кому-то)',
        welchen: 'каких', plattformen: 'платформах', nur: 'только', windows: 'Windows (ОС)', linux: 'Linux (ОС)', abgestürzt: 'упало (о программе)',
        installiert: 'устанавливает', schreibt: 'пишет', viele: 'много', gute: 'хорошие',
      },
      questions: [
        { q: 'Auf welchen Plattformen soll die App laufen?', ru: 'На каких платформах должно работать приложение?', options: ['Auf Android und iOS', 'Nur auf Android', 'Auf Windows und Linux'], answer: 'Auf Android und iOS' },
        { q: 'Wann ist die App abgestürzt?', ru: 'Когда приложение падало?', options: ['Wenn man auf das Menü vom Montag klickt', 'Wenn man die App installiert', 'Wenn man eine Bewertung schreibt'], answer: 'Wenn man auf das Menü vom Montag klickt' },
        { q: 'Was bekommen die Nutzer um elf Uhr?', ru: 'Что получают пользователи в одиннадцать часов?', options: ['Eine Benachrichtigung mit dem Essen', 'Eine neue Version der App', 'Eine E-Mail von Clara'], answer: 'Eine Benachrichtigung mit dem Essen' },
      ],
      translate: [
        { de: 'Amir optimiert die App für kleine Handys.', ru: 'Амир оптимизирует приложение для маленьких телефонов.', wrongRu: ['Амир оптимизирует приложение для больших телефонов.', 'Клара оптимизирует приложение для маленьких телефонов.'] },
        { de: 'Die erste Version ist fertig.', ru: 'Первая версия готова.', wrongRu: ['Последняя версия готова.', 'Первая версия не готова.'] },
        { de: 'Die App hat viele gute Bewertungen.', ru: 'У приложения много хороших отзывов.', wrongRu: ['У приложения много плохих отзывов.', 'У приложения мало хороших отзывов.'] },
      ],
    },
  ],
};
