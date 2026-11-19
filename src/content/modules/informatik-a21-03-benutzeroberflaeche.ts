import type { Module } from '../types.ts';

// A2.1 informatik 03: first steps with a desktop (lesson 0) and settings (lesson 1).

export const module: Module = {
  id: 'informatik-a21-03-benutzeroberflaeche', sphere: 'informatik', level: 'A2.1',
  title: 'Benutzeroberfläche', subtitle: 'Окна, меню, значки и настройки: как говорить об интерфейсе программы.',
  words: [
    { id: 'inf-a21-03-benutzeroberflaeche', icon: 'LayoutDashboard', de: 'Benutzeroberfläche', pos: 'noun', article: 'die', plural: 'Benutzeroberflächen', ru: 'пользовательский интерфейс', parts: ['Benutzer', 'oberfläche'], note: 'Die Oberfläche — поверхность. Часто коротко: die Oberfläche.', example: { de: 'Die Benutzeroberfläche ist klar und einfach.', ru: 'Пользовательский интерфейс понятный и простой.', cloze: 'Benutzeroberfläche' } },
    { id: 'inf-a21-03-fenster', icon: 'AppWindow', de: 'Fenster', pos: 'noun', article: 'das', plural: 'Fenster', ru: 'окно', note: 'И окно в комнате, и окно программы.', collocation: { de: 'ein Fenster schließen', ru: 'закрыть окно', accept: ['das Fenster schließen'] }, example: { de: 'Das Programm öffnet ein neues Fenster.', ru: 'Программа открывает новое окно.', cloze: 'Fenster' } },
    { id: 'inf-a21-03-menue', icon: 'Menu', de: 'Menü', pos: 'noun', article: 'das', plural: 'Menüs', ru: 'меню', collocation: { de: 'das Menü öffnen', ru: 'открыть меню', accept: ['ein Menü öffnen'] }, example: { de: 'Oben links findest du das Menü.', ru: 'Слева вверху ты найдёшь меню.', cloze: 'Menü' } },
    { id: 'inf-a21-03-symbol', icon: 'Component', de: 'Symbol', pos: 'noun', article: 'das', plural: 'Symbole', ru: 'значок, иконка; символ', collocation: { de: 'auf ein Symbol klicken', ru: 'кликнуть по значку', accept: ['auf das Symbol klicken'] }, example: { de: 'Klick auf das kleine Symbol oben rechts.', ru: 'Кликни по маленькому значку справа вверху.', cloze: 'Symbol' } },
    { id: 'inf-a21-03-schaltflaeche', icon: 'RectangleHorizontal', de: 'Schaltfläche', pos: 'noun', article: 'die', plural: 'Schaltflächen', ru: 'кнопка (на экране)', parts: ['Schalt', 'fläche'], note: 'Разговорно также der Button.', example: { de: 'Die Schaltfläche „Speichern“ ist noch grau.', ru: 'Кнопка «Сохранить» ещё серая.', cloze: 'Schaltfläche' } },
    { id: 'inf-a21-03-taskleiste', icon: 'PanelBottom', de: 'Taskleiste', pos: 'noun', article: 'die', plural: 'Taskleisten', ru: 'панель задач', parts: ['Task', 'leiste'], note: 'Die Leiste — планка, полоса.', example: { de: 'Die Uhr ist rechts in der Taskleiste.', ru: 'Часы справа на панели задач.', cloze: 'Taskleiste' } },
    { id: 'inf-a21-03-mauszeiger', icon: 'MousePointer2', de: 'Mauszeiger', pos: 'noun', article: 'der', plural: 'Mauszeiger', ru: 'указатель мыши, курсор', parts: ['Maus', 'zeiger'], example: { de: 'Der Mauszeiger bewegt sich nicht mehr.', ru: 'Указатель мыши больше не двигается.', cloze: 'Mauszeiger' } },
    { id: 'inf-a21-03-doppelklicken', icon: 'MousePointerClick', de: 'doppelklicken', pos: 'verb', ru: 'дважды кликнуть', forms: 'er doppelklickt · hat doppelgeklickt', note: 'doppelklicken auf + Akk: auf das Symbol doppelklicken.', example: { de: 'Sie doppelklickt auf den Ordner.', ru: 'Она дважды кликает по папке.', cloze: 'doppelklickt' } },

    { id: 'inf-a21-03-einstellung', icon: 'Settings', de: 'Einstellung', pos: 'noun', article: 'die', plural: 'Einstellungen', ru: 'настройка', note: 'В меню обычно мн. ч.: die Einstellungen — настройки.', collocation: { de: 'die Einstellungen öffnen', ru: 'открыть настройки' }, example: { de: 'Die Sprache änderst du in den Einstellungen.', ru: 'Язык ты меняешь в настройках.', cloze: 'Einstellungen' } },
    { id: 'inf-a21-03-einstellen', icon: 'SlidersHorizontal', de: 'einstellen', pos: 'verb', ru: 'настраивать, выставлять', forms: 'er stellt ein · hat eingestellt', note: 'Отделяемая приставка: ich stelle die Sprache ein. + Akk; etwas auf + Akk einstellen.', example: { de: 'Ich stelle die Sprache auf Deutsch ein.', ru: 'Я выставляю немецкий язык.', cloze: 'stelle' } },
    { id: 'inf-a21-03-ansicht', icon: 'Eye', de: 'Ansicht', pos: 'noun', article: 'die', plural: 'Ansichten', ru: 'вид, режим просмотра', collocation: { de: 'die Ansicht wechseln', ru: 'переключить вид', accept: ['die Ansicht ändern'] }, example: { de: 'In dieser Ansicht siehst du alle Dateien.', ru: 'В этом виде ты видишь все файлы.', cloze: 'Ansicht' } },
    { id: 'inf-a21-03-schriftgroesse', icon: 'ALargeSmall', de: 'Schriftgröße', pos: 'noun', article: 'die', plural: 'Schriftgrößen', ru: 'размер шрифта', parts: ['Schrift', 'größe'], collocation: { de: 'die Schriftgröße ändern', ru: 'изменить размер шрифта' }, example: { de: 'Die Schriftgröße ist für Oma zu klein.', ru: 'Размер шрифта для бабушки слишком маленький.', cloze: 'Schriftgröße' } },
    { id: 'inf-a21-03-auswaehlen', icon: 'SquareCheck', de: 'auswählen', pos: 'verb', ru: 'выбирать, выделять', forms: 'er wählt aus · hat ausgewählt', note: 'Отделяемая приставка: ich wähle die Datei aus. + Akk.', example: { de: 'Ich wähle zuerst alle Bilder aus.', ru: 'Сначала я выделяю все картинки.', cloze: 'wähle' } },
    { id: 'inf-a21-03-ziehen', icon: 'Move', de: 'ziehen', pos: 'verb', ru: 'тянуть, перетаскивать', forms: 'er zieht · hat gezogen', note: 'Сильный глагол: ziehen – zog – gezogen. Drag and drop = ziehen und ablegen.', example: { de: 'Ich ziehe die Datei mit der Maus in den Ordner.', ru: 'Я перетаскиваю файл мышью в папку.', cloze: 'ziehe' } },
    { id: 'inf-a21-03-dunkelmodus', icon: 'Moon', de: 'Dunkelmodus', pos: 'noun', article: 'der', ru: 'тёмный режим (тема)', parts: ['Dunkel', 'modus'], note: 'Обычно без мн. ч. Также der Dark Mode.', example: { de: 'Am Abend benutze ich den Dunkelmodus.', ru: 'Вечером я пользуюсь тёмным режимом.', cloze: 'Dunkelmodus' } },
    { id: 'inf-a21-03-anpassen', icon: 'Paintbrush', de: 'anpassen', pos: 'verb', ru: 'настраивать под себя, адаптировать', forms: 'er passt an · hat angepasst', note: 'Отделяемая приставка: ich passe den Desktop an. etwas an + Akk anpassen — подгонять под что-то.', example: { de: 'Hier kannst du die Taskleiste anpassen.', ru: 'Здесь ты можешь настроить панель задач под себя.', cloze: 'anpassen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Omas neuer Laptop',
      de: `Jakob studiert Informatik an der TU Wien. Am Sonntag besucht er seine Oma Hilde. Sie hat einen neuen Laptop, aber die Benutzeroberfläche ist für sie ganz fremd.

Zuerst zeigt Jakob ihr die Taskleiste unten auf dem Bildschirm. Dort sind kleine Symbole für die wichtigsten Programme. „Wenn du auf ein Symbol doppelklickst, öffnet sich ein Fenster“, erklärt er. Oma Hilde probiert es, aber der Mauszeiger springt immer zu weit.

Dann öffnet Jakob das Menü und zeigt ihr die Schaltfläche zum Ausschalten. Oma ist zufrieden: „Jetzt kann ich E-Mails lesen und den Laptop wieder ausschalten. Mehr brauche ich nicht!“`,
      ru: `Якоб изучает информатику в Венском техническом университете. В воскресенье он навещает свою бабушку Хильде. У неё новый ноутбук, но интерфейс для неё совсем чужой.

Сначала Якоб показывает ей панель задач внизу экрана. Там маленькие значки для самых важных программ. «Если дважды кликнешь по значку, откроется окно», — объясняет он. Бабушка Хильде пробует, но указатель мыши всё время прыгает слишком далеко.

Потом Якоб открывает меню и показывает ей кнопку выключения. Бабушка довольна: «Теперь я могу читать письма и снова выключать ноутбук. Больше мне ничего не нужно!»`,
      gloss: {
        jakob: 'Якоб (имя)', informatik: 'информатика', tu: 'TU — Технический университет', wien: 'Вена', sonntag: 'воскресенье', besucht: 'навещает',
        oma: 'бабушка', omas: 'бабушкин', hilde: 'Хильде (имя)', neuer: 'новый', laptop: 'ноутбук', fremd: 'чужой, незнакомый', unten: 'внизу',
        wichtigsten: 'самых важных', doppelklickst: '(ты) дважды кликнешь', öffnet: 'открывает; (öffnet sich) открывается', probiert: 'пробует',
        springt: 'прыгает', weit: 'далеко', ausschalten: 'выключение; выключать', zufrieden: 'довольна', oben: 'вверху',
        tastatur: 'клавиатура', schaltet: 'выключается (schaltet sich aus)', verschwindet: 'исчезает',
      },
      questions: [
        { q: 'Was ist für Oma Hilde ganz fremd?', ru: 'Что для бабушки Хильде совсем чужое?', options: ['Die Benutzeroberfläche', 'Die Tastatur', 'Das Internet'], answer: 'Die Benutzeroberfläche' },
        { q: 'Wo ist die Taskleiste?', ru: 'Где находится панель задач?', options: ['Unten auf dem Bildschirm', 'Oben im Menü', 'In einem Fenster'], answer: 'Unten auf dem Bildschirm' },
        { q: 'Was passiert, wenn man auf ein Symbol doppelklickt?', ru: 'Что происходит, если дважды кликнуть по значку?', options: ['Ein Fenster öffnet sich.', 'Der Laptop schaltet sich aus.', 'Das Menü verschwindet.'], answer: 'Ein Fenster öffnet sich.' },
        { q: 'Was zeigt Jakob ihr im Menü?', ru: 'Что Якоб показывает ей в меню?', options: ['Die Schaltfläche zum Ausschalten', 'Die Einstellungen', 'Ein neues Programm'], answer: 'Die Schaltfläche zum Ausschalten' },
      ],
      translate: [
        { de: 'Die Taskleiste ist unten auf dem Bildschirm.', ru: 'Панель задач внизу экрана.', wrongRu: ['Панель задач вверху экрана.', 'Меню внизу экрана.'] },
        { de: 'Der Mauszeiger springt immer zu weit.', ru: 'Указатель мыши всё время прыгает слишком далеко.', wrongRu: ['Указатель мыши иногда прыгает слишком далеко.', 'Указатель мыши всё время двигается слишком медленно.'] },
        { de: 'Jakob öffnet das Menü.', ru: 'Якоб открывает меню.', wrongRu: ['Якоб закрывает меню.', 'Якоб открывает окно.', 'Бабушка открывает меню.'] },
      ],
    },
    {
      lesson: 1, title: 'Größer, dunkler, einfacher',
      de: `Eine Woche später ruft Oma Hilde an: „Die Buchstaben sind so klein, ich kann nichts lesen!“ Jakob kommt wieder vorbei und öffnet die Einstellungen.

Zuerst stellt er die Schriftgröße auf das Maximum ein. Dann wählt er eine andere Ansicht aus, damit die Symbole größer sind. Am Abend ist der helle Bildschirm für Omas Augen anstrengend, deshalb schaltet Jakob den Dunkelmodus ein.

Zum Schluss verschiebt er die wichtigsten Programme in die Taskleiste. „Siehst du, Oma? Man kann fast alles an die eigenen Wünsche anpassen.“ Oma Hilde lacht: „Dann pass bitte auch meinen Enkel an. Er soll mich öfter besuchen!“`,
      ru: `Через неделю звонит бабушка Хильде: «Буквы такие маленькие, я ничего не могу прочитать!» Якоб снова заходит и открывает настройки.

Сначала он выставляет размер шрифта на максимум. Потом выбирает другой вид, чтобы значки были больше. Вечером яркий экран утомляет бабушкины глаза, поэтому Якоб включает тёмный режим.

Под конец он перетаскивает самые важные программы на панель задач. «Видишь, бабушка? Почти всё можно настроить под свои желания». Бабушка Хильде смеётся: «Тогда, пожалуйста, настрой заодно и моего внука. Пусть навещает меня почаще!»`,
      gloss: {
        jakob: 'Якоб (имя)', oma: 'бабушка', omas: 'бабушкины', hilde: 'Хильде (имя)', an: '(anrufen, anpassen) приставка; на, у, к', buchstaben: 'буквы', vorbei: '(vorbeikommen) заходит', kommt: 'приходит (kommt vorbei — заходит)',
        ein: '(einstellen, einschalten) приставка; один, какой-то', maximum: 'максимум', aus: '(auswählen) приставка; из', größer: 'больше', helle: 'яркий, светлый', augen: 'глаза',
        anstrengend: 'утомительный, тяжёлый', schaltet: 'включает (einschalten)', schluss: 'конец (zum Schluss — под конец)', wichtigsten: 'самые важные', siehst: '(ты) видишь',
        eigenen: 'собственные', wünsche: 'желания', lacht: 'смеётся', pass: '(anpassen) настрой', enkel: 'внук', öfter: 'чаще', besuchen: 'навещать',
        laptop: 'ноутбук', farbe: 'цвет', schwarz: 'чёрный', schneller: 'быстрее', wünscht: 'желает (sich wünschen)', einmal: 'раз (noch einmal — ещё раз)', ändern: 'изменить', großen: 'большой (вин.)',
      },
      questions: [
        { q: 'Warum ruft Oma Hilde an?', ru: 'Почему звонит бабушка Хильде?', options: ['Weil die Buchstaben zu klein sind.', 'Weil der Laptop kaputt ist.', 'Weil sie ein neues Programm braucht.'], answer: 'Weil die Buchstaben zu klein sind.' },
        { q: 'Was macht Jakob, damit die Symbole größer sind?', ru: 'Что делает Якоб, чтобы значки были больше?', options: ['Er wählt eine andere Ansicht aus.', 'Er schaltet den Dunkelmodus ein.', 'Er kauft einen großen Bildschirm.'], answer: 'Er wählt eine andere Ansicht aus.' },
        { q: 'Warum schaltet Jakob den Dunkelmodus ein?', ru: 'Почему Якоб включает тёмный режим?', options: ['Weil der helle Bildschirm am Abend anstrengend ist.', 'Weil Oma Hilde die Farbe Schwarz mag.', 'Weil der Laptop dann schneller ist.'], answer: 'Weil der helle Bildschirm am Abend anstrengend ist.' },
        { q: 'Was wünscht sich Oma Hilde am Ende?', ru: 'Чего хочет бабушка Хильде в конце?', options: ['Jakob soll sie öfter besuchen.', 'Jakob soll ihr einen neuen Laptop kaufen.', 'Jakob soll die Schriftgröße noch einmal ändern.'], answer: 'Jakob soll sie öfter besuchen.' },
      ],
      translate: [
        { de: 'Jakob öffnet die Einstellungen.', ru: 'Якоб открывает настройки.', wrongRu: ['Якоб закрывает настройки.', 'Якоб открывает меню.'] },
        { de: 'Er stellt die Schriftgröße auf das Maximum ein.', ru: 'Он выставляет размер шрифта на максимум.', wrongRu: ['Он выставляет размер шрифта на минимум.', 'Она выставляет размер шрифта на максимум.', 'Он выставляет яркость на максимум.'] },
        { de: 'Am Abend schaltet er den Dunkelmodus ein.', ru: 'Вечером он включает тёмный режим.', wrongRu: ['Утром он включает тёмный режим.', 'Вечером он выключает тёмный режим.'] },
      ],
    },
  ],
};
