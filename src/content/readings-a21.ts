import type { Reading } from './types.ts';

// Texts that close the A2.1 lessons. Präsens and Perfekt, modal verbs, subordinate clauses
// with weil / dass / wenn, separable verbs; lesson words in natural forms, every other word is glossed.

export const cyberA21Readings: Reading[] = [
  {
    lesson: 0, title: 'Ein Angriff auf die Bibliothek',
    de: `Jonas studiert Informatik an der TU Wien und arbeitet nebenbei in der IT-Abteilung. Am Montag hat es einen Angriff auf den Server der Bibliothek gegeben. Ein Angreifer hat eine Schwachstelle in einer alten Software gefunden und sie ausgenutzt.

Seine Chefin, Frau Berger, erklärt ihm: „Der Angreifer konnte die Sicherheitslücke nur ausnutzen, weil niemand das Update installiert hat.“ Zum Glück waren die Daten sicher, denn die Verschlüsselung hat funktioniert. Der Angreifer hat nur unlesbare Zeichen gesehen.

Jetzt muss das Team alle Systeme prüfen. Frau Berger sagt außerdem, dass alle Studierenden die Zwei-Faktor-Authentifizierung aktivieren sollen. Am Abend schreibt Jonas eine Nachricht an seine Freunde: „Verschlüsselt bitte eure Festplatten und aktiviert die Zwei-Faktor-Authentifizierung! Das dauert nur fünf Minuten.“`,
    ru: `Йонас изучает информатику в TU Wien и подрабатывает в IT-отделе. В понедельник была атака на сервер библиотеки. Злоумышленник нашёл уязвимость в старой программе и воспользовался ею.

Его начальница, госпожа Бергер, объясняет ему: «Злоумышленник смог воспользоваться брешью в безопасности только потому, что никто не установил обновление». К счастью, данные были в безопасности, потому что шифрование сработало. Злоумышленник увидел только нечитаемые символы.

Теперь команда должна проверить все системы. Госпожа Бергер ещё говорит, что все студенты должны включить двухфакторную аутентификацию. Вечером Йонас пишет сообщение друзьям: «Пожалуйста, зашифруйте свои жёсткие диски и включите двухфакторную аутентификацию! Это займёт всего пять минут».`,
    gloss: {
      jonas: 'Йонас (имя)', berger: 'Бергер (фамилия)', informatik: 'информатика', tu: 'TU — Технический университет', wien: 'Вена',
      nebenbei: 'параллельно, в качестве подработки', 'it-abteilung': 'IT-отдел', gegeben: '(es hat … gegeben) было, имелось', bibliothek: 'библиотека', software: 'программа, ПО',
      ausgenutzt: 'воспользовался (ausnutzen)', chefin: 'начальница', glück: 'счастье, удача (zum Glück = к счастью)', unlesbare: 'нечитаемые', zeichen: 'символы, знаки',
      team: 'команда', systeme: 'системы', prüfen: 'проверить', außerdem: 'кроме того', studierenden: 'студенты (Studierende)', aktivieren: 'включить, активировать', aktiviert: 'включите (ihr-форма)',
      verschlüsselt: 'зашифруйте (ihr-форма); зашифрован', dauert: 'длится, занимает', geschlossen: 'закрыта', ausgeschaltet: 'выключил',
    },
    questions: [
      { q: 'Was hat der Angreifer ausgenutzt?', ru: 'Чем воспользовался злоумышленник?', options: ['Eine Schwachstelle in einer alten Software', 'Ein schwaches Passwort von Jonas', 'Einen Fehler in der Firewall'], answer: 'Eine Schwachstelle in einer alten Software' },
      { q: 'Warum konnte der Angreifer die Sicherheitslücke ausnutzen?', ru: 'Почему злоумышленник смог воспользоваться брешью?', options: ['Weil niemand das Update installiert hat.', 'Weil das WLAN unsicher war.', 'Weil Jonas sein Passwort vergessen hat.'], answer: 'Weil niemand das Update installiert hat.' },
      { q: 'Warum waren die Daten sicher?', ru: 'Почему данные были в безопасности?', options: ['Weil die Verschlüsselung funktioniert hat.', 'Weil die Bibliothek geschlossen war.', 'Weil Jonas den Server ausgeschaltet hat.'], answer: 'Weil die Verschlüsselung funktioniert hat.' },
      { q: 'Was sollen alle Studierenden machen?', ru: 'Что должны сделать все студенты?', options: ['Die Zwei-Faktor-Authentifizierung aktivieren', 'Ein neues Konto machen', 'Die alte Software löschen'], answer: 'Die Zwei-Faktor-Authentifizierung aktivieren' },
    ],
    translate: [
      { de: 'Der Angreifer hat eine Schwachstelle gefunden.', ru: 'Злоумышленник нашёл уязвимость.', wrongRu: ['Злоумышленник ищет уязвимость.', 'Админ нашёл уязвимость.', 'Злоумышленник не нашёл уязвимость.'] },
      { de: 'Die Verschlüsselung hat die Daten geschützt.', ru: 'Шифрование защитило данные.', wrongRu: ['Шифрование удалило данные.', 'Файрвол защитил данные.', 'Шифрование не защитило данные.'] },
      { de: 'Bitte aktiviert die Zwei-Faktor-Authentifizierung!', ru: 'Пожалуйста, включите двухфакторную аутентификацию!', wrongRu: ['Пожалуйста, отключите двухфакторную аутентификацию!', 'Пожалуйста, включите шифрование!'] },
    ],
  },
  {
    lesson: 1, title: 'Eine Mail vom Rektorat?',
    de: `Am Freitag bekommt Lena, eine Studentin an der TU Wien, eine E-Mail. Der Absender ist angeblich das Rektorat: „Ihr Zugriff auf TISS endet heute. Klicken Sie auf den Link und geben Sie Ihr Passwort ein!“ Lena wird misstrauisch, weil die Adresse komisch aussieht. Sie denkt: Das ist bestimmt eine Phishing-Mail!

Sie klickt nicht auf den Link, sondern meldet die Mail der IT-Abteilung. Dort arbeitet Jonas. Er erklärt ihr, dass Angreifer mit solchen Mails Passwörter stehlen. Manchmal ist im Anhang auch Schadsoftware. Wenn man den Anhang öffnet, kann ein Angreifer auf den Computer zugreifen.

„Die Firewall blockiert viel, aber nicht alles“, sagt Jonas. „Deshalb ist eine Datensicherung so wichtig.“ Am Abend macht Lena eine Datensicherung von ihrer Festplatte. Jetzt fühlt sie sich viel sicherer.`,
    ru: `В пятницу Лена, студентка TU Wien, получает электронное письмо. Отправитель — якобы ректорат: «Ваш доступ к TISS заканчивается сегодня. Кликните по ссылке и введите свой пароль!» Лена начинает подозревать неладное, потому что адрес выглядит странно. Она думает: это точно фишинговое письмо!

Она не кликает по ссылке, а сообщает о письме в IT-отдел. Там работает Йонас. Он объясняет ей, что злоумышленники с помощью таких писем крадут пароли. Иногда во вложении ещё и вредоносная программа. Если открыть вложение, злоумышленник может получить доступ к компьютеру.

«Файрвол блокирует многое, но не всё», — говорит Йонас. «Поэтому резервная копия так важна». Вечером Лена делает резервную копию своего жёсткого диска. Теперь она чувствует себя гораздо спокойнее.`,
    gloss: {
      lena: 'Лена (имя)', jonas: 'Йонас (имя)', tu: 'TU — Технический университет', wien: 'Вена', freitag: 'пятница', mail: 'письмо (e-mail)', mails: 'письма',
      absender: 'отправитель', angeblich: 'якобы', rektorat: 'ректорат', tiss: 'TISS (учебный портал TU Wien)', endet: 'заканчивается', klicken: 'кликните', link: 'ссылка',
      geben: '(geben … ein) введите', ein: '(eingeben) приставка: ввести; один, какой-то', misstrauisch: 'недоверчивый (wird misstrauisch = начинает подозревать)', wird: 'становится',
      adresse: 'адрес', aussieht: 'выглядит (aussehen)', bestimmt: 'наверняка, точно', meldet: 'сообщает (о чём-то кому-то)', 'it-abteilung': 'IT-отдел', solchen: 'такими',
      anhang: 'вложение (в письме)', blockiert: 'блокирует', fühlt: 'чувствует', sicherer: 'безопаснее, увереннее', englisch: 'английский', geschickt: 'отправил(а)',
    },
    questions: [
      { q: 'Wer hat angeblich die E-Mail geschickt?', ru: 'Кто якобы отправил письмо?', options: ['Das Rektorat', 'Die IT-Abteilung', 'Jonas'], answer: 'Das Rektorat' },
      { q: 'Warum wird Lena misstrauisch?', ru: 'Почему Лена начинает подозревать неладное?', options: ['Weil die Adresse komisch aussieht.', 'Weil die Mail auf Englisch ist.', 'Weil sie kein Konto hat.'], answer: 'Weil die Adresse komisch aussieht.' },
      { q: 'Was macht Lena mit der Mail?', ru: 'Что Лена делает с письмом?', options: ['Sie meldet sie der IT-Abteilung.', 'Sie klickt auf den Link.', 'Sie schickt sie an ihre Freunde.'], answer: 'Sie meldet sie der IT-Abteilung.' },
      { q: 'Was macht Lena am Abend?', ru: 'Что Лена делает вечером?', options: ['Sie macht eine Datensicherung.', 'Sie installiert eine Firewall.', 'Sie ändert ihr Passwort.'], answer: 'Sie macht eine Datensicherung.' },
    ],
    translate: [
      { de: 'Lena meldet die Phishing-Mail der IT-Abteilung.', ru: 'Лена сообщает о фишинговом письме в IT-отдел.', wrongRu: ['Лена пересылает фишинговое письмо друзьям.', 'Йонас сообщает о фишинговом письме в IT-отдел.', 'Лена не сообщает о фишинговом письме в IT-отдел.'] },
      { de: 'Die Angreifer wollen Passwörter stehlen.', ru: 'Злоумышленники хотят украсть пароли.', wrongRu: ['Злоумышленники уже украли пароли.', 'Злоумышленники хотят изменить пароли.', 'Злоумышленники хотят украсть данные.'] },
      { de: 'Die Firewall blockiert nicht alles.', ru: 'Файрвол блокирует не всё.', wrongRu: ['Файрвол блокирует всё.', 'Антивирус блокирует не всё.'] },
    ],
  },
];

export const informatikA21Readings: Reading[] = [
  {
    lesson: 0, title: 'Probleme im Computerraum',
    de: `Sophie studiert im ersten Semester Informatik. Heute hat sie ihre erste Übung im Computerraum der TU Wien. Aber der Raum ist voll, und die Verbindung zum Server ist sehr langsam. Der Tutor Paul sagt: „Das Netzwerk hat heute ein Problem. Wir müssen ein bisschen warten.“

Sophie will ein Programm installieren, aber das geht nicht. Auf ihrem Laptop ist noch ein altes Betriebssystem. Paul erklärt ihr, dass sie zuerst das Betriebssystem aktualisieren muss. Das Update dauert fast eine halbe Stunde.

Danach startet Sophie das Programm, aber es zeigt einen Fehler. Sophie ist nervös, weil die Übung bald zu Ende ist. Paul schaut sich den Fehler an und lacht: „Du hast nur das falsche Passwort eingegeben!“ Sophie lacht auch. Zum Glück funktioniert jetzt alles.`,
    ru: `Софи учится на первом семестре информатики. Сегодня у неё первое практическое занятие в компьютерном классе TU Wien. Но класс переполнен, и соединение с сервером очень медленное. Тьютор Пауль говорит: «У сети сегодня проблема. Нам придётся немного подождать».

Софи хочет установить программу, но не получается. На её ноутбуке ещё старая операционная система. Пауль объясняет ей, что сначала ей нужно обновить операционную систему. Обновление длится почти полчаса.

После этого Софи запускает программу, но она показывает ошибку. Софи нервничает, потому что занятие скоро закончится. Пауль смотрит на ошибку и смеётся: «Ты просто ввела неправильный пароль!» Софи тоже смеётся. К счастью, теперь всё работает.`,
    gloss: {
      sophie: 'Софи (имя)', paul: 'Пауль (имя)', sophies: 'Софи (чей?)', tu: 'TU — Технический университет', wien: 'Вена', semester: 'семестр', informatik: 'информатика',
      computerraum: 'компьютерный класс', raum: 'помещение, класс', voll: 'полный, переполненный', tutor: 'тьютор (студент-ассистент)', bisschen: 'немного (ein bisschen)', warten: 'ждать', geht: 'получается (das geht nicht = не получается)', laptop: 'ноутбук', altes: 'старая (ср. р.)', dauert: 'длится', halbe: 'половина (eine halbe Stunde = полчаса)', startet: 'запускает',
      nervös: 'нервный, нервничает', schaut: 'смотрит (sich … anschauen)', an: '(anschauen) приставка; на, у, к', lacht: 'смеётся', eingegeben: 'ввела (eingeben)', glück: 'удача (zum Glück = к счастью)', stunden: 'часа', ausgeschaltet: 'выключил', erreichbar: 'доступен',
    },
    questions: [
      { q: 'Warum ist die Verbindung zum Server so langsam?', ru: 'Почему соединение с сервером такое медленное?', options: ['Weil das Netzwerk ein Problem hat.', 'Weil Sophies Laptop kaputt ist.', 'Weil Paul den Server ausgeschaltet hat.'], answer: 'Weil das Netzwerk ein Problem hat.' },
      { q: 'Warum kann Sophie das Programm nicht installieren?', ru: 'Почему Софи не может установить программу?', options: ['Weil ihr Betriebssystem zu alt ist.', 'Weil sie kein Passwort hat.', 'Weil der Speicher voll ist.'], answer: 'Weil ihr Betriebssystem zu alt ist.' },
      { q: 'Wie lange dauert das Update?', ru: 'Сколько длится обновление?', options: ['Fast eine halbe Stunde', 'Zehn Minuten', 'Zwei Stunden'], answer: 'Fast eine halbe Stunde' },
      { q: 'Was war der Fehler?', ru: 'В чём была ошибка?', options: ['Sophie hat das falsche Passwort eingegeben.', 'Das Programm war kaputt.', 'Der Server war nicht erreichbar.'], answer: 'Sophie hat das falsche Passwort eingegeben.' },
    ],
    translate: [
      { de: 'Die Verbindung zum Server ist sehr langsam.', ru: 'Соединение с сервером очень медленное.', wrongRu: ['Соединение с сервером очень быстрое.', 'Соединение с сервером было очень медленным.', 'Сервер очень старый.'] },
      { de: 'Sie muss zuerst das Betriebssystem aktualisieren.', ru: 'Сначала ей нужно обновить операционную систему.', wrongRu: ['Сначала ей нужно установить операционную систему.', 'Сначала ему нужно обновить операционную систему.', 'Потом ей нужно обновить операционную систему.'] },
      { de: 'Das Programm zeigt einen Fehler.', ru: 'Программа показывает ошибку.', wrongRu: ['Программа не показывает ошибку.', 'Программа исправляет ошибку.'] },
    ],
  },
  {
    lesson: 1, title: 'Eine App für freie Lernräume',
    de: `Mehmet und Sophie programmieren zusammen eine kleine Anwendung für ihr Projekt. Die Anwendung soll den Studierenden helfen, weil sie freie Lernräume an der Uni zeigt. Mehmet kennt schon Java, aber für das Projekt nehmen sie Python. Sophie findet, dass Python eine gute Programmiersprache für Anfänger ist.

Am Mittwoch testen sie die App mit zehn Benutzern. Plötzlich erscheint eine Fehlermeldung: „Nicht genug Speicher“. Die Festplatte von Mehmets Laptop ist fast voll, denn er hat dort viele Filme gespeichert.

Sophie lacht und löscht zuerst ein paar alte Dateien. Dann speichern sie die Daten auf dem Server der Uni. Danach funktioniert die Anwendung ohne Probleme, und die Benutzer sind zufrieden. Mehmet sagt: „Nächste Woche räume ich meine Festplatte auf, versprochen!“`,
    ru: `Мехмет и Софи вместе программируют небольшое приложение для своего проекта. Приложение должно помогать студентам, потому что оно показывает свободные учебные аудитории в университете. Мехмет уже знает Java, но для проекта они берут Python. Софи считает, что Python — хороший язык программирования для начинающих.

В среду они тестируют приложение с десятью пользователями. Вдруг появляется сообщение об ошибке: «Недостаточно памяти». Жёсткий диск ноутбука Мехмета почти заполнен, потому что он сохранил там много фильмов.

Софи смеётся и сначала удаляет несколько старых файлов. Потом они сохраняют данные на сервере университета. После этого приложение работает без проблем, и пользователи довольны. Мехмет говорит: «На следующей неделе я разберу свой жёсткий диск, обещаю!»`,
    gloss: {
      mehmet: 'Мехмет (имя)', mehmets: 'Мехмета', sophie: 'Софи (имя)', sophies: 'Софи (чей?)', projekt: 'проект', studierenden: 'студентам (Studierende)', freie: 'свободные',
      lernräume: 'учебные аудитории, места для учёбы', java: 'Java (язык программирования)', python: 'Python (язык программирования)', anfänger: 'начинающие',
      mittwoch: 'среда', testen: 'тестируют', app: 'приложение', benutzern: 'пользователями (дат. мн.)', erscheint: 'появляется', genug: 'достаточно', laptop: 'ноутбук', voll: 'полный, заполненный',
      filme: 'фильмы', lacht: 'смеётся', paar: 'пара (ein paar = несколько)', probleme: 'проблемы', zufrieden: 'довольны', räume: '(aufräumen) разберу, наведу порядок', versprochen: 'обещаю (букв. обещано)',
      noten: 'оценки', plan: 'расписание, план', c: 'C (язык программирования)',
    },
    questions: [
      { q: 'Was zeigt die Anwendung?', ru: 'Что показывает приложение?', options: ['Freie Lernräume an der Uni', 'Die Noten der Studierenden', 'Den Plan der Vorlesungen'], answer: 'Freie Lernräume an der Uni' },
      { q: 'Welche Programmiersprache nehmen sie für das Projekt?', ru: 'Какой язык программирования они берут для проекта?', options: ['Python', 'Java', 'C'], answer: 'Python' },
      { q: 'Warum ist die Festplatte fast voll?', ru: 'Почему жёсткий диск почти заполнен?', options: ['Weil Mehmet dort viele Filme gespeichert hat.', 'Weil die App zu groß ist.', 'Weil die Benutzer viele Daten schicken.'], answer: 'Weil Mehmet dort viele Filme gespeichert hat.' },
      { q: 'Wo speichern sie am Ende die Daten?', ru: 'Где они в итоге сохраняют данные?', options: ['Auf dem Server der Uni', 'Auf Sophies Laptop', 'Auf Mehmets Festplatte'], answer: 'Auf dem Server der Uni' },
    ],
    translate: [
      { de: 'Python ist eine gute Programmiersprache für Anfänger.', ru: 'Python — хороший язык программирования для начинающих.', wrongRu: ['Python — хороший язык программирования для профессионалов.', 'Java — хороший язык программирования для начинающих.', 'Python — плохой язык программирования для начинающих.'] },
      { de: 'Plötzlich erscheint eine Fehlermeldung.', ru: 'Вдруг появляется сообщение об ошибке.', wrongRu: ['Вдруг исчезает сообщение об ошибке.', 'Вдруг появляется обновление.'] },
      { de: 'Die Festplatte ist fast voll.', ru: 'Жёсткий диск почти заполнен.', wrongRu: ['Жёсткий диск почти пустой.', 'Жёсткий диск полностью заполнен.', 'Память почти заполнена.'] },
    ],
  },
];

export const matheA21Readings: Reading[] = [
  {
    lesson: 0, title: 'Die erste Vorlesung',
    de: `Am Montag sitzt Elif zum ersten Mal in der Vorlesung „Analysis 1“. Der Hörsaal ist voll, und der Professor beginnt sofort. Zuerst schreibt er eine Definition an die Tafel: die Menge der natürlichen Zahlen. Dann zeigt er eine Funktion mit einer Variablen.

Danach beweist er einen Satz. Der Beweis ist nur eine halbe Seite lang, aber Elif versteht ihn nicht. Sie denkt: „In der Schule haben wir nur Gleichungen gelöst. Hier müssen wir alles beweisen!“

Nach der Vorlesung spricht sie mit ihrem Studienkollegen Tobias. Er sagt, dass es am Anfang allen so geht. „Wenn du den Beweis zu Hause noch einmal langsam liest, verstehst du ihn bestimmt.“ Am Abend liest Elif ihre Notizen und versteht endlich den Beweis. Sie ist sehr stolz auf sich.`,
    ru: `В понедельник Элиф впервые сидит на лекции «Анализ 1». Аудитория полная, и профессор сразу начинает. Сначала он пишет на доске определение: множество натуральных чисел. Потом он показывает функцию с одной переменной.

После этого он доказывает теорему. Доказательство длиной всего полстраницы, но Элиф его не понимает. Она думает: «В школе мы только решали уравнения. А здесь нам нужно всё доказывать!»

После лекции она говорит со своим однокурсником Тобиасом. Он говорит, что поначалу у всех так. «Если ты дома ещё раз медленно прочитаешь доказательство, то наверняка поймёшь его». Вечером Элиф читает свои записи и наконец понимает доказательство. Она очень гордится собой.`,
    gloss: {
      elif: 'Элиф (имя)', tobias: 'Тобиас (имя)', mal: 'раз (zum ersten Mal = впервые)', analysis: 'математический анализ', hörsaal: 'лекционная аудитория', voll: 'полный',
      professor: 'профессор', tafel: 'доска', natürlichen: 'натуральных', halbe: 'половина (eine halbe Seite = полстраницы)', seite: 'страница', lang: 'длиной',
      spricht: 'говорит, разговаривает', studienkollegen: 'однокурсником (Studienkollege, австр.)', anfang: 'начало (am Anfang = поначалу)', allen: 'всем',
      geht: '(es geht allen so) у всех так', einmal: 'раз (noch einmal = ещё раз)', liest: 'читает; прочитаешь', verstehst: '(ты) понимаешь; поймёшь', bestimmt: 'наверняка',
      notizen: 'записи, конспект', stolz: 'гордый (stolz auf sich = гордится собой)', unendlich: 'бесконечно',
    },
    questions: [
      { q: 'Was schreibt der Professor zuerst an die Tafel?', ru: 'Что профессор сначала пишет на доске?', options: ['Eine Definition', 'Eine Gleichung', 'Einen Beweis'], answer: 'Eine Definition' },
      { q: 'Was hat Elif in der Schule gemacht?', ru: 'Что Элиф делала в школе?', options: ['Sie hat nur Gleichungen gelöst.', 'Sie hat viele Sätze bewiesen.', 'Sie hat Funktionen programmiert.'], answer: 'Sie hat nur Gleichungen gelöst.' },
      { q: 'Was sagt Tobias?', ru: 'Что говорит Тобиас?', options: ['Am Anfang geht es allen so.', 'Der Beweis ist falsch.', 'Die Vorlesung ist zu leicht.'], answer: 'Am Anfang geht es allen so.' },
      { q: 'Wann versteht Elif den Beweis?', ru: 'Когда Элиф понимает доказательство?', options: ['Am Abend zu Hause', 'Sofort in der Vorlesung', 'Am nächsten Tag in der Übung'], answer: 'Am Abend zu Hause' },
    ],
    translate: [
      { de: 'Der Professor beweist einen Satz.', ru: 'Профессор доказывает теорему.', wrongRu: ['Профессор объясняет теорему.', 'Студентка доказывает теорему.', 'Профессор доказал теорему.'] },
      { de: 'Der Beweis ist nur eine halbe Seite lang.', ru: 'Доказательство длиной всего полстраницы.', wrongRu: ['Доказательство длиной целую страницу.', 'Определение длиной всего полстраницы.'] },
      { de: 'Die Menge der natürlichen Zahlen ist unendlich.', ru: 'Множество натуральных чисел бесконечно.', wrongRu: ['Множество натуральных чисел конечно.', 'Множество чётных чисел бесконечно.'] },
    ],
  },
  {
    lesson: 1, title: 'Beispiele für die Übung',
    de: `Jeden Donnerstag hat Elif eine Übung. Dort muss sie manchmal an der Tafel ein Beispiel vorrechnen. Diese Woche hat sie fünf Beispiele bekommen, und sie rechnet sie mit Tobias in der Bibliothek.

Beim ersten Beispiel müssen sie einen Bruch kürzen. Das ist leicht. Beim zweiten Beispiel geht es um eine Wurzel: Ist die Wurzel aus zwei ein Bruch? Tobias weiß es nicht. Elif liest die Definition im Skript noch einmal genau. Dann sagt sie: „Angenommen, es gilt: Die Wurzel aus zwei ist ein Bruch. Daraus folgt ein Widerspruch. Also ist sie kein Bruch!“

Am Donnerstag rechnet Elif genau dieses Beispiel an der Tafel vor. Der Tutor ist zufrieden. Danach geht sie mit Tobias in die Vorlesung, weil sie heute nicht zu spät kommen wollen.`,
    ru: `Каждый четверг у Элиф практическое занятие. Там ей иногда нужно решать задачу у доски. На этой неделе ей дали пять задач, и она решает их с Тобиасом в библиотеке.

В первой задаче им нужно сократить дробь. Это легко. Во второй задаче речь идёт о корне: является ли корень из двух дробью? Тобиас не знает. Элиф ещё раз внимательно читает определение в конспекте. Потом она говорит: «Допустим, выполняется: корень из двух — это дробь. Отсюда следует противоречие. Значит, это не дробь!»

В четверг Элиф решает именно эту задачу у доски. Тьютор доволен. Потом она идёт с Тобиасом на лекцию, потому что сегодня они не хотят опоздать.`,
    gloss: {
      elif: 'Элиф (имя)', tobias: 'Тобиас (имя)', donnerstag: 'четверг', tafel: 'доска', vorrechnen: 'решать (задачу) у доски', vor: '(vorrechnen) решать у доски — приставка', rechnet: 'решает, считает',
      bibliothek: 'библиотека', zweiten: 'втором (zweite)', kürzen: 'сократить (дробь)', geht: 'идёт; es geht um … = речь идёт о …', skript: 'конспект лекций, скрипт',
      einmal: 'раз (noch einmal = ещё раз)', angenommen: 'допустим, предположим', widerspruch: 'противоречие', tutor: 'тьютор (студент-ассистент)', zufrieden: 'доволен',
      spät: 'поздно (zu spät kommen = опоздать)', test: 'контрольная', halten: 'читать (лекцию)', lösung: 'решение', pythagoras: 'Пифагор',
    },
    questions: [
      { q: 'Was muss Elif manchmal in der Übung machen?', ru: 'Что Элиф иногда должна делать на практическом занятии?', options: ['Ein Beispiel an der Tafel vorrechnen', 'Eine Vorlesung halten', 'Einen Test schreiben'], answer: 'Ein Beispiel an der Tafel vorrechnen' },
      { q: 'Mit wem rechnet Elif die Beispiele?', ru: 'С кем Элиф решает задачи?', options: ['Mit Tobias', 'Mit dem Tutor', 'Allein'], answer: 'Mit Tobias' },
      { q: 'Was liest Elif im Skript noch einmal?', ru: 'Что Элиф ещё раз читает в конспекте?', options: ['Die Definition', 'Die Lösung', 'Den Satz des Pythagoras'], answer: 'Die Definition' },
      { q: 'Was zeigt Elif beim zweiten Beispiel?', ru: 'Что Элиф показывает во второй задаче?', options: ['Die Wurzel aus zwei ist kein Bruch.', 'Die Wurzel aus zwei ist ein Bruch.', 'Die Wurzel aus zwei ist eine natürliche Zahl.'], answer: 'Die Wurzel aus zwei ist kein Bruch.' },
    ],
    translate: [
      { de: 'Jeden Donnerstag hat Elif eine Übung.', ru: 'Каждый четверг у Элиф практическое занятие.', wrongRu: ['Каждый четверг у Элиф лекция.', 'Каждую пятницу у Элиф практическое занятие.', 'В этот четверг у Элиф практическое занятие.'] },
      { de: 'Wir müssen einen Bruch kürzen.', ru: 'Нам нужно сократить дробь.', wrongRu: ['Нам нужно извлечь корень.', 'Нам не нужно сокращать дробь.', 'Им нужно сократить дробь.'] },
      { de: 'Daraus folgt ein Widerspruch.', ru: 'Отсюда следует противоречие.', wrongRu: ['Отсюда не следует противоречие.', 'Отсюда следует доказательство.'] },
    ],
  },
];
