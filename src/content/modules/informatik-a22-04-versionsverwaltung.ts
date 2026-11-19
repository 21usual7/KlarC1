import type { Module } from '../types.ts';

// A2.2 informatik 04: repository, commits and history (lesson 0), branches, merging and conflicts (lesson 1).

export const module: Module = {
  id: 'informatik-a22-04-versionsverwaltung', sphere: 'informatik', level: 'A2.2',
  title: 'Versionsverwaltung', subtitle: 'Репозиторий, коммит, ветка, слияние, конфликт: как команда работает с Git.',
  words: [
    { id: 'inf-a22-04-versionsverwaltung', icon: 'History', de: 'Versionsverwaltung', pos: 'noun', article: 'die', plural: 'Versionsverwaltungen', ru: 'система контроля версий; управление версиями', parts: ['Versions', 'verwaltung'], note: 'die Version + s + die Verwaltung (управление). Самая известная — Git.', example: { de: 'Ohne Versionsverwaltung arbeitet heute kaum ein Team.', ru: 'Без контроля версий сегодня почти ни одна команда не работает.', cloze: 'Versionsverwaltung' } },
    { id: 'inf-a22-04-repository', icon: 'FolderGit2', de: 'Repository', pos: 'noun', article: 'das', plural: 'Repositorys', ru: 'репозиторий', note: 'Мн. ч.: die Repositorys или die Repositorien. Разг.: das Repo.', collocation: { de: 'ein Repository anlegen', ru: 'создать репозиторий', accept: ['das Repository anlegen', 'ein neues Repository anlegen'] }, example: { de: 'Der ganze Code liegt in einem Repository.', ru: 'Весь код лежит в одном репозитории.', cloze: 'Repository' } },
    { id: 'inf-a22-04-aenderung', icon: 'FilePen', de: 'Änderung', pos: 'noun', article: 'die', plural: 'Änderungen', ru: 'изменение', collocation: { de: 'eine Änderung speichern', ru: 'сохранить изменение', accept: ['die Änderung speichern', 'Änderungen speichern'] }, example: { de: 'Jede Änderung bekommt eine kurze Beschreibung.', ru: 'Каждое изменение получает краткое описание.', cloze: 'Änderung' } },
    { id: 'inf-a22-04-commit', icon: 'GitCommitHorizontal', de: 'Commit', pos: 'noun', article: 'der', plural: 'Commits', ru: 'коммит (зафиксированное изменение)', note: 'Встречается и das Commit; глагол: committen.', collocation: { de: 'einen Commit machen', ru: 'сделать коммит', accept: ['einen Commit erstellen'] }, example: { de: 'Ich mache nach jeder kleinen Aufgabe einen Commit.', ru: 'Я делаю коммит после каждой небольшой задачи.', cloze: 'Commit' } },
    { id: 'inf-a22-04-stand', icon: 'History', de: 'Stand', pos: 'noun', article: 'der', plural: 'Stände', ru: 'состояние (на момент времени)', note: 'auf dem neuesten Stand — в актуальном состоянии.', example: { de: 'Ich gehe zum Stand von gestern zurück.', ru: 'Я возвращаюсь к состоянию на вчера.', cloze: 'Stand' } },
    { id: 'inf-a22-04-pushen', icon: 'Upload', de: 'pushen', pos: 'verb', ru: 'отправлять изменения (git push)', forms: 'er pusht · hat gepusht', note: 'Англицизм; противоположность: pullen.', example: { de: 'Am Abend pusht sie ihre Änderungen auf den Server.', ru: 'Вечером она отправляет свои изменения на сервер.', cloze: 'pusht' } },
    { id: 'inf-a22-04-vergleichen', icon: 'GitCompare', de: 'vergleichen', pos: 'verb', ru: 'сравнивать', forms: 'er vergleicht · verglich · hat verglichen', note: 'Неотделяемая приставка ver-; vergleichen mit + Dat.', collocation: { de: 'zwei Versionen vergleichen', ru: 'сравнить две версии' }, example: { de: 'Wir vergleichen die neue Datei mit der alten.', ru: 'Мы сравниваем новый файл со старым.', cloze: 'vergleichen' } },
    { id: 'inf-a22-04-zuruecksetzen', icon: 'RotateCcw', de: 'zurücksetzen', pos: 'verb', ru: 'откатывать, сбрасывать (к прежнему состоянию)', forms: 'er setzt zurück · hat zurückgesetzt', note: 'Отделяемая приставка: wir setzen den Code zurück; zurücksetzen auf + Akk.', example: { de: 'Sara setzt das Projekt auf den letzten Stand zurück.', ru: 'Сара откатывает проект к последнему состоянию.', cloze: 'setzt' } },

    { id: 'inf-a22-04-zweig', icon: 'GitBranch', de: 'Zweig', pos: 'noun', article: 'der', plural: 'Zweige', ru: 'ветка (branch)', note: 'Буквально «ветка дерева». Часто говорят и der Branch.', collocation: { de: 'einen Zweig erstellen', ru: 'создать ветку', accept: ['einen neuen Zweig erstellen'] }, example: { de: 'Für jede neue Funktion erstellen wir einen Zweig.', ru: 'Для каждой новой функции мы создаём ветку.', cloze: 'Zweig' } },
    { id: 'inf-a22-04-hauptzweig', icon: 'GitGraph', de: 'Hauptzweig', pos: 'noun', article: 'der', plural: 'Hauptzweige', ru: 'основная ветка', parts: ['Haupt', 'zweig'], note: 'В Git обычно называется main или master.', example: { de: 'Auf dem Hauptzweig liegt nur getesteter Code.', ru: 'В основной ветке лежит только протестированный код.', cloze: 'Hauptzweig' } },
    { id: 'inf-a22-04-klonen', icon: 'Copy', de: 'klonen', pos: 'verb', ru: 'клонировать', forms: 'er klont · hat geklont', collocation: { de: 'ein Repository klonen', ru: 'клонировать репозиторий', accept: ['das Repository klonen'] }, example: { de: 'Zuerst klont Felix das Repository auf seinen Laptop.', ru: 'Сначала Феликс клонирует репозиторий на свой ноутбук.', cloze: 'klont' } },
    { id: 'inf-a22-04-zusammenfuehren', icon: 'GitMerge', de: 'zusammenführen', pos: 'verb', ru: 'сливать, объединять (merge)', forms: 'er führt zusammen · hat zusammengeführt', note: 'Отделяемая приставка; zusammenführen mit + Dat. Разг.: mergen.', collocation: { de: 'zwei Zweige zusammenführen', ru: 'слить две ветки', accept: ['die Zweige zusammenführen'] }, example: { de: 'Am Freitag führen wir die Zweige zusammen.', ru: 'В пятницу мы сливаем ветки.', cloze: 'führen' } },
    { id: 'inf-a22-04-konflikt', icon: 'Swords', de: 'Konflikt', pos: 'noun', article: 'der', plural: 'Konflikte', ru: 'конфликт', collocation: { de: 'einen Konflikt lösen', ru: 'разрешить конфликт', accept: ['den Konflikt lösen'] }, example: { de: 'Beim Zusammenführen gab es einen Konflikt.', ru: 'При слиянии возник конфликт.', cloze: 'Konflikt' } },
    { id: 'inf-a22-04-rueckgaengig', icon: 'Undo2', de: 'rückgängig', pos: 'adj', ru: 'отменённый; (rückgängig machen) отменить', note: 'Почти всегда в выражении etwas rückgängig machen.', example: { de: 'Mit Git kann ich jede Änderung rückgängig machen.', ru: 'С Git я могу отменить любое изменение.', cloze: 'rückgängig' } },
    { id: 'inf-a22-04-loesen', icon: 'CircleCheck', de: 'lösen', pos: 'verb', ru: 'решать, разрешать (проблему, конфликт)', forms: 'er löst · hat gelöst', note: '+ Akk: ein Problem / einen Konflikt lösen.', example: { de: 'Gemeinsam haben sie den Konflikt schnell gelöst.', ru: 'Вместе они быстро разрешили конфликт.', cloze: 'gelöst' } },
    { id: 'inf-a22-04-code-review', icon: 'GitPullRequest', de: 'Code-Review', pos: 'noun', article: 'das', plural: 'Code-Reviews', ru: 'код-ревью, проверка кода коллегой', note: 'Встречается и der Code-Review. Делается до слияния в основную ветку.', collocation: { de: 'ein Code-Review machen', ru: 'провести код-ревью' }, example: { de: 'Nach dem Code-Review war der Code viel besser.', ru: 'После код-ревью код стал намного лучше.', cloze: 'Code-Review' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wer hat das geändert?',
      de: `Felix macht im Sommer ein Praktikum bei einer kleinen Softwarefirma in Wien. Am ersten Tag erklärte ihm seine Kollegin Sara, wie das Team mit Versionsverwaltung arbeitet.

Der ganze Code liegt in einem Repository. Wenn jemand etwas ändert, speichert er die Änderung mit einem Commit. Jeder Commit hat eine kurze Nachricht, damit die anderen wissen, was passiert ist.

Im Verlauf sieht man alle Commits: wer etwas geändert hat und wann. Mit einem Befehl kann man zwei Versionen vergleichen.

Am Nachmittag machte Felix einen Fehler, und die App startete nicht mehr. Er war nervös, aber Sara blieb ruhig: „Kein Problem, wir setzen den Code einfach auf den letzten Stand zurück.“ Nach einer Minute funktionierte alles wieder.`,
      ru: `Летом Феликс проходит практику в небольшой софтверной фирме в Вене. В первый день его коллега Сара объяснила ему, как команда работает с системой контроля версий.

Весь код лежит в одном репозитории. Когда кто-то что-то меняет, он сохраняет изменение коммитом. У каждого коммита есть короткое сообщение, чтобы остальные знали, что произошло.

В истории видны все коммиты: кто что изменил и когда. С помощью одной команды можно сравнить две версии.

После обеда Феликс сделал ошибку, и приложение перестало запускаться. Он нервничал, но Сара оставалась спокойной: «Не проблема, мы просто откатим код к последнему состоянию». Через минуту всё снова работало.`,
      gloss: {
        felix: 'Феликс (имя)', sara: 'Сара (имя)', sommer: 'лето', praktikum: 'практика, стажировка', kleinen: 'небольшой', softwarefirma: 'софтверная фирма',
        wien: 'Вена', ersten: 'первый', erklärte: 'объяснила', kollegin: 'коллега (женщина)', team: 'команда', ganze: 'весь', code: 'код', liegt: 'лежит',
        ändert: 'меняет', speichert: 'сохраняет', kurze: 'короткое', nachricht: 'сообщение', anderen: 'остальные', geändert: 'изменил', befehl: 'команда',
        versionen: 'версии', nachmittag: 'после обеда, вторая половина дня', machte: 'сделал', fehler: 'ошибка', app: 'приложение', startete: 'запускалось',
        nervös: 'нервный, нервничал', blieb: 'оставалась', ruhig: 'спокойной', setzen: 'откатим (setzen zurück)', stand: 'состояние', zurück: 'назад (zurücksetzen — откатить)',
        funktionierte: 'работало', commits: 'коммиты', usb: 'USB', stick: 'флешка (USB-Stick)', laptop: 'ноутбук', wozu: 'зачем', schneller: 'быстрее',
        neueste: 'самую новую', zurückgesetzt: 'откатила', gelöscht: 'удалила', geschickt: 'отправила', repository: 'репозиторий',
      },
      questions: [
        { q: 'Wo liegt der ganze Code?', ru: 'Где лежит весь код?', options: ['In einem Repository', 'Auf einem USB-Stick', 'In einer E-Mail'], answer: 'In einem Repository' },
        { q: 'Wozu hat jeder Commit eine Nachricht?', ru: 'Зачем у каждого коммита есть сообщение?', options: ['Damit die anderen wissen, was passiert ist.', 'Damit die App schneller startet.', 'Damit man keine Fehler machen kann.'], answer: 'Damit die anderen wissen, was passiert ist.' },
        { q: 'Was sieht man im Verlauf?', ru: 'Что видно в истории?', options: ['Wer wann etwas geändert hat', 'Nur die neueste Version', 'Die Fehler der App'], answer: 'Wer wann etwas geändert hat' },
        { q: 'Was hat Sara nach dem Fehler gemacht?', ru: 'Что сделала Сара после ошибки?', options: ['Sie hat den Code zurückgesetzt.', 'Sie hat das Repository gelöscht.', 'Sie hat Felix nach Hause geschickt.'], answer: 'Sie hat den Code zurückgesetzt.' },
      ],
      translate: [
        { de: 'Jeder Commit hat eine kurze Nachricht.', ru: 'У каждого коммита есть короткое сообщение.', wrongRu: ['У каждого коммита есть длинное сообщение.', 'У каждого репозитория есть короткое сообщение.'] },
        { de: 'Man kann zwei Versionen vergleichen.', ru: 'Можно сравнить две версии.', wrongRu: ['Можно объединить две версии.', 'Нельзя сравнить две версии.'] },
        { de: 'Wir setzen den Code zurück.', ru: 'Мы откатываем код.', wrongRu: ['Мы удаляем код.', 'Мы сохраняем код.', 'Они откатывают код.'] },
      ],
    },
    {
      lesson: 1, title: 'Zwei Zweige, ein Konflikt',
      de: `In der zweiten Woche bekam Felix seine erste eigene Aufgabe. Zuerst musste er das Repository klonen, also eine Kopie auf seinen Laptop holen. Dann erstellte er einen neuen Zweig, denn auf dem Hauptzweig soll immer nur getesteter Code liegen.

Sara arbeitete gleichzeitig an derselben Datei, aber in einem anderen Zweig. Als Felix seinen Zweig mit dem Hauptzweig zusammenführen wollte, gab es einen Konflikt: Beide hatten dieselbe Zeile geändert.

Felix wusste nicht, welche Version richtig war. Gemeinsam mit Sara hat er den Konflikt gelöst. Danach hat ein dritter Kollege ein Code-Review gemacht und noch zwei kleine Fehler gefunden. Erst dann wurden die Änderungen in den Hauptzweig übernommen.`,
      ru: `На второй неделе Феликс получил своё первое собственное задание. Сначала ему нужно было клонировать репозиторий, то есть получить копию на свой ноутбук. Потом он создал новую ветку, ведь в основной ветке всегда должен лежать только протестированный код.

Сара одновременно работала с тем же файлом, но в другой ветке. Когда Феликс хотел слить свою ветку с основной, возник конфликт: оба изменили одну и ту же строку.

Феликс не знал, какая версия правильная. Вместе с Сарой он разрешил конфликт. После этого третий коллега провёл код-ревью и нашёл ещё две небольшие ошибки. Только тогда изменения были приняты в основную ветку.`,
      gloss: {
        felix: 'Феликс (имя)', sara: 'Сара (имя)', zweiten: 'второй', bekam: 'получил', eigene: 'собственное', aufgabe: 'задание', musste: 'пришлось, должен был',
        repository: 'репозиторий', repositorys: 'репозитория', kopie: 'копия', laptop: 'ноутбук', erstellte: 'создал', getesteter: 'протестированный', code: 'код',
        liegen: 'лежать', arbeitete: 'работала', derselben: 'той же самой', datei: 'файл', anderen: 'другой', wollte: 'хотел', beide: 'оба', dieselbe: 'ту же самую',
        zeile: 'строка', geändert: 'изменили', wusste: 'знал', gemeinsam: 'вместе', dritter: 'третий', kollege: 'коллега', fehler: 'ошибки', erst: 'только (erst dann — только тогда)',
        übernommen: 'приняты, перенесены', bedeutet: 'означает', text: 'текст', löschen: 'удалить', testen: 'протестировать', erstellt: 'создал', kaputt: 'сломан',
        selbst: 'сам', welcher: 'какой', jeder: 'любой, каждый', klonen: 'клонировать',
      },
      questions: [
        { q: 'Was bedeutet „klonen“ im Text?', ru: 'Что означает «клонировать» в тексте?', options: ['Eine Kopie des Repositorys holen', 'Einen neuen Zweig löschen', 'Den Code testen'], answer: 'Eine Kopie des Repositorys holen' },
        { q: 'Warum gab es einen Konflikt?', ru: 'Почему возник конфликт?', options: ['Beide hatten dieselbe Zeile geändert.', 'Felix hatte keinen Zweig erstellt.', 'Das Repository war kaputt.'], answer: 'Beide hatten dieselbe Zeile geändert.' },
        { q: 'Wer hat das Code-Review gemacht?', ru: 'Кто провёл код-ревью?', options: ['Ein dritter Kollege', 'Sara', 'Felix selbst'], answer: 'Ein dritter Kollege' },
        { q: 'Welcher Code soll auf dem Hauptzweig liegen?', ru: 'Какой код должен лежать в основной ветке?', options: ['Nur getesteter Code', 'Jeder neue Code', 'Nur Code von Felix'], answer: 'Nur getesteter Code' },
      ],
      translate: [
        { de: 'Felix musste das Repository klonen.', ru: 'Феликсу нужно было клонировать репозиторий.', wrongRu: ['Феликсу нужно было удалить репозиторий.', 'Феликсу не нужно было клонировать репозиторий.'] },
        { de: 'Sie haben den Konflikt gemeinsam gelöst.', ru: 'Они вместе разрешили конфликт.', wrongRu: ['Они вместе создали конфликт.', 'Она одна разрешила конфликт.'] },
        { de: 'Sara arbeitete gleichzeitig in einem anderen Zweig.', ru: 'Сара одновременно работала в другой ветке.', wrongRu: ['Сара позже работала в другой ветке.', 'Сара одновременно работала в той же ветке.'] },
      ],
    },
  ],
};
