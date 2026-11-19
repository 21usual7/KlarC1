import type { Module } from '../types.ts';

// A2.1 informatik 08: planning a team project (lesson 0) and working together until the result (lesson 1).

export const module: Module = {
  id: 'informatik-a21-08-team', sphere: 'informatik', level: 'A2.1',
  title: 'Arbeiten im Team', subtitle: 'Проект, совещание, сроки и обратная связь: как работает IT-команда.',
  words: [
    { id: 'inf-a21-08-projekt', icon: 'FolderKanban', de: 'Projekt', pos: 'noun', article: 'das', plural: 'Projekte', ru: 'проект', collocation: { de: 'an einem Projekt arbeiten', ru: 'работать над проектом', accept: ['am Projekt arbeiten', 'an dem Projekt arbeiten'] }, example: { de: 'Unser Projekt beginnt nächste Woche.', ru: 'Наш проект начинается на следующей неделе.', cloze: 'Projekt' } },
    { id: 'inf-a21-08-teammitglied', icon: 'Users', imageQuery: 'software team working together at desk', de: 'Teammitglied', pos: 'noun', article: 'das', plural: 'Teammitglieder', ru: 'член команды', parts: ['Team', 'mitglied'], note: 'Das Mitglied — член (клуба, команды); род средний.', example: { de: 'Jedes Teammitglied hat eine eigene Aufgabe.', ru: 'У каждого члена команды своя задача.', cloze: 'Teammitglied' } },
    { id: 'inf-a21-08-besprechung', icon: 'MessagesSquare', imageQuery: 'business meeting around table', de: 'Besprechung', pos: 'noun', article: 'die', plural: 'Besprechungen', ru: 'совещание, рабочая встреча', collocation: { de: 'an einer Besprechung teilnehmen', ru: 'участвовать в совещании', accept: ['an der Besprechung teilnehmen'] }, example: { de: 'Die Besprechung beginnt um neun Uhr.', ru: 'Совещание начинается в девять часов.', cloze: 'Besprechung' } },
    { id: 'inf-a21-08-teamleiter', icon: 'ClipboardList', de: 'Teamleiter', pos: 'noun', article: 'der', plural: 'Teamleiter', ru: 'руководитель команды, тимлид', parts: ['Team', 'leiter'], note: 'Женский род: die Teamleiterin. Leiten — руководить.', example: { de: 'Der Teamleiter plant die nächste Woche.', ru: 'Руководитель команды планирует следующую неделю.', cloze: 'Teamleiter' } },
    { id: 'inf-a21-08-verteilen', icon: 'Shuffle', de: 'verteilen', pos: 'verb', ru: 'распределять, раздавать', forms: 'er verteilt · hat verteilt', note: 'Приставка ver- неотделяемая; etwas an + Akk verteilen: die Aufgaben an das Team verteilen.', collocation: { de: 'Aufgaben verteilen', ru: 'распределять задачи', accept: ['die Aufgaben verteilen'] }, example: { de: 'Die Teamleiterin verteilt heute die Aufgaben.', ru: 'Руководитель команды сегодня распределяет задачи.', cloze: 'verteilt' } },
    { id: 'inf-a21-08-zustaendig', icon: 'UserCheck', de: 'zuständig', pos: 'adj', ru: 'ответственный (за что-л.), отвечающий', note: 'zuständig für + Akk: Wer ist dafür zuständig? — Кто за это отвечает?', collocation: { de: 'für die Datenbank zuständig sein', ru: 'отвечать за базу данных' }, example: { de: 'Wer ist für die Datenbank zuständig?', ru: 'Кто отвечает за базу данных?', cloze: 'zuständig' } },
    { id: 'inf-a21-08-zeitplan', icon: 'CalendarRange', de: 'Zeitplan', pos: 'noun', article: 'der', plural: 'Zeitpläne', ru: 'график, план по срокам', parts: ['Zeit', 'plan'], collocation: { de: 'den Zeitplan einhalten', ru: 'соблюдать график', accept: ['einen Zeitplan einhalten'] }, example: { de: 'Wir machen zuerst einen Zeitplan.', ru: 'Сначала мы составляем график.', cloze: 'Zeitplan' } },
    { id: 'inf-a21-08-frist', icon: 'AlarmClock', de: 'Frist', pos: 'noun', article: 'die', plural: 'Fristen', ru: 'срок (крайний), дедлайн', note: 'eine Frist verpassen — пропустить срок; die Abgabefrist — срок сдачи.', collocation: { de: 'die Frist einhalten', ru: 'уложиться в срок', accept: ['eine Frist einhalten'] }, example: { de: 'Die Frist endet am Montag.', ru: 'Срок истекает в понедельник.', cloze: 'Frist' } },

    { id: 'inf-a21-08-zusammenarbeiten', icon: 'Handshake', imageQuery: 'colleagues working together on laptop', de: 'zusammenarbeiten', pos: 'verb', ru: 'работать вместе, сотрудничать', forms: 'er arbeitet zusammen · hat zusammengearbeitet', note: 'Отделяемая приставка: wir arbeiten gut zusammen; zusammenarbeiten mit + Dat.', collocation: { de: 'gut zusammenarbeiten', ru: 'хорошо работать вместе' }, example: { de: 'Im Projekt müssen alle gut zusammenarbeiten.', ru: 'В проекте все должны хорошо работать вместе.', cloze: 'zusammenarbeiten' } },
    { id: 'inf-a21-08-videokonferenz', icon: 'Video', imageQuery: 'video conference on laptop screen', de: 'Videokonferenz', pos: 'noun', article: 'die', plural: 'Videokonferenzen', ru: 'видеоконференция', parts: ['Video', 'konferenz'], example: { de: 'Die Videokonferenz startet in fünf Minuten.', ru: 'Видеоконференция начнётся через пять минут.', cloze: 'Videokonferenz' } },
    { id: 'inf-a21-08-feedback', icon: 'MessageSquareReply', de: 'Feedback', pos: 'noun', article: 'das', ru: 'обратная связь, отзыв', note: 'Из английского; обычно без мн. ч. Немецкий синоним: die Rückmeldung.', collocation: { de: 'Feedback geben', ru: 'давать обратную связь', accept: ['ein Feedback geben'] }, example: { de: 'Danke für dein schnelles Feedback!', ru: 'Спасибо за твой быстрый отзыв!', cloze: 'Feedback' } },
    { id: 'inf-a21-08-fortschritt', icon: 'TrendingUp', de: 'Fortschritt', pos: 'noun', article: 'der', plural: 'Fortschritte', ru: 'прогресс, продвижение', collocation: { de: 'Fortschritte machen', ru: 'продвигаться, делать успехи', accept: ['gute Fortschritte machen'] }, example: { de: 'Das Team macht gute Fortschritte.', ru: 'Команда хорошо продвигается.', cloze: 'Fortschritte' } },
    { id: 'inf-a21-08-erledigen', icon: 'CircleCheckBig', de: 'erledigen', pos: 'verb', ru: 'выполнять, доделывать (дело, задачу)', forms: 'er erledigt · hat erledigt', note: 'Приставка er- неотделяемая; + Akk.', collocation: { de: 'eine Aufgabe erledigen', ru: 'выполнить задачу', accept: ['die Aufgabe erledigen'] }, example: { de: 'Ich habe meine Aufgabe schon erledigt.', ru: 'Я уже выполнил свою задачу.', cloze: 'erledigt' } },
    { id: 'inf-a21-08-praesentieren', icon: 'Presentation', imageQuery: 'student giving presentation', de: 'präsentieren', pos: 'verb', ru: 'представлять, презентовать', forms: 'er präsentiert · hat präsentiert', collocation: { de: 'die Ergebnisse präsentieren', ru: 'представить результаты', accept: ['das Ergebnis präsentieren'] }, example: { de: 'Morgen präsentieren wir unser Projekt.', ru: 'Завтра мы представляем наш проект.', cloze: 'präsentieren' } },
    { id: 'inf-a21-08-verantwortung', icon: 'BadgeCheck', de: 'Verantwortung', pos: 'noun', article: 'die', ru: 'ответственность', note: 'die Verantwortung für + Akk; обычно без мн. ч.', collocation: { de: 'Verantwortung übernehmen', ru: 'брать на себя ответственность', accept: ['die Verantwortung übernehmen'] }, example: { de: 'Sie trägt die Verantwortung für den Server.', ru: 'Она несёт ответственность за сервер.', cloze: 'Verantwortung' } },
    { id: 'inf-a21-08-meilenstein', icon: 'Target', de: 'Meilenstein', pos: 'noun', article: 'der', plural: 'Meilensteine', ru: 'этап, веха (в проекте)', parts: ['Meilen', 'stein'], note: 'Букв. «верстовой камень»; в проектах — важная промежуточная цель.', collocation: { de: 'einen Meilenstein erreichen', ru: 'достичь этапа (вехи)', accept: ['den Meilenstein erreichen'] }, example: { de: 'Den ersten Meilenstein haben wir schon erreicht.', ru: 'Первого этапа мы уже достигли.', cloze: 'Meilenstein' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die erste Besprechung',
      de: `Elif studiert Informatik an der TU Wien. In diesem Semester arbeitet sie mit drei anderen Studierenden an einem Projekt: Sie entwickeln eine App für die Mensa. Am Montag haben sie ihre erste Besprechung in der Bibliothek.

Niklas ist der Teamleiter. Er sagt: „Die Frist ist Ende Jänner. Wir brauchen einen Zeitplan, sonst schaffen wir das nicht.“ Dann verteilt er die Aufgaben. Elif ist für die Datenbank zuständig, weil sie das schon im Praktikum gemacht hat. Mara macht das Design, und Niklas schreibt den Code für den Server.

Jedes Teammitglied schreibt jeden Freitag eine kurze Nachricht über seine Arbeit. Am Ende der Besprechung sind alle zufrieden, weil die Aufgaben jetzt klar sind.`,
      ru: `Элиф изучает информатику в Венском техническом университете. В этом семестре она вместе с тремя другими студентами работает над проектом: они разрабатывают приложение для столовой. В понедельник у них первое совещание в библиотеке.

Никлас — руководитель команды. Он говорит: «Срок — конец января. Нам нужен график, иначе мы не справимся». Потом он распределяет задачи. Элиф отвечает за базу данных, потому что она уже делала это на практике. Мара делает дизайн, а Никлас пишет код для сервера.

Каждый член команды по пятницам пишет короткое сообщение о своей работе. В конце совещания все довольны, потому что теперь задачи понятны.`,
      gloss: {
        elif: 'Элиф (имя)', niklas: 'Никлас (имя)', mara: 'Мара (имя)', informatik: 'информатика', tu: 'TU — Технический университет', wien: 'Вена',
        semester: 'семестр', drei: 'три', anderen: 'другими', studierenden: 'студентами (Studierende)', entwickeln: 'разрабатывают', app: 'приложение', mensa: 'студенческая столовая', team: 'команда',
        montag: 'понедельник', erste: 'первое', bibliothek: 'библиотека', ende: 'конец', jänner: 'январь (австр.; нем. Januar)',
        brauchen: 'нужен, нуждаемся', sonst: 'иначе', schaffen: 'справимся (schaffen — успеть, справиться)', datenbank: 'база данных', praktikum: 'практика, стажировка',
        gemacht: 'делала (machen)', design: 'дизайн', code: 'код', server: 'сервер', freitag: 'пятница', kurze: 'короткое', nachricht: 'сообщение', arbeit: 'работа',
        zufrieden: 'довольны', aufgaben: 'задачи', aufgabe: 'задача', klar: 'ясные, понятные', woran: 'над чем', webseite: 'сайт', spiel: 'игра', studierende: 'студентов', teamleiterin: 'руководительница команды', gern: 'охотно, с удовольствием',
      },
      questions: [
        { q: 'Woran arbeitet das Team?', ru: 'Над чем работает команда?', options: ['An einer App für die Mensa', 'An einer Webseite für die Bibliothek', 'An einem Spiel für Studierende'], answer: 'An einer App für die Mensa' },
        { q: 'Wann ist die Frist?', ru: 'Когда срок?', options: ['Ende Jänner', 'Am Montag', 'Jeden Freitag'], answer: 'Ende Jänner' },
        { q: 'Warum ist Elif für die Datenbank zuständig?', ru: 'Почему Элиф отвечает за базу данных?', options: ['Weil sie das schon im Praktikum gemacht hat.', 'Weil sie die Teamleiterin ist.', 'Weil sie gern Design macht.'], answer: 'Weil sie das schon im Praktikum gemacht hat.' },
        { q: 'Was schreibt jedes Teammitglied am Freitag?', ru: 'Что пишет каждый член команды в пятницу?', options: ['Eine kurze Nachricht über seine Arbeit', 'Den Code für den Server', 'Einen neuen Zeitplan'], answer: 'Eine kurze Nachricht über seine Arbeit' },
      ],
      translate: [
        { de: 'Wir brauchen einen Zeitplan für das Projekt.', ru: 'Нам нужен график для проекта.', wrongRu: ['Нам не нужен график для проекта.', 'Нам нужен бюджет для проекта.', 'У нас есть график для проекта.'] },
        { de: 'Niklas verteilt die Aufgaben im Team.', ru: 'Никлас распределяет задачи в команде.', wrongRu: ['Никлас выполняет задачи в команде.', 'Никлас распределил задачи в команде.', 'Никлас получает задачи в команде.'] },
        { de: 'Elif ist für die Datenbank zuständig.', ru: 'Элиф отвечает за базу данных.', wrongRu: ['Элиф отвечает за дизайн.', 'Элиф не отвечает за базу данных.', 'Мара отвечает за базу данных.'] },
      ],
    },
    {
      lesson: 1, title: 'Kurz vor der Frist',
      de: `Drei Wochen später hat das Team eine Videokonferenz, weil Mara krank ist. Niklas fragt nach dem Fortschritt, denn bald ist der erste Meilenstein. Elif hat ihre Aufgabe schon erledigt: Die Datenbank funktioniert. Aber Mara ist mit dem Design noch nicht fertig.

Niklas ist nervös, denn er trägt die Verantwortung für das ganze Projekt. Elif sagt: „Kein Problem, ich helfe Mara. Wenn wir zusammenarbeiten, schaffen wir das bis Freitag.“

Am Freitag schickt Mara das Design. Die Tutorin gibt dem Team Feedback: Die App ist schön, aber der Login ist zu langsam. Niklas repariert den Fehler am Wochenende. In der letzten Woche präsentieren sie ihr Ergebnis vor dem ganzen Kurs. Alle klatschen, und die Professorin ist sehr zufrieden.`,
      ru: `Три недели спустя у команды видеоконференция, потому что Мара болеет. Никлас спрашивает о прогрессе, ведь скоро первый этап. Элиф уже выполнила свою задачу: база данных работает. Но Мара ещё не закончила дизайн.

Никлас нервничает, ведь он несёт ответственность за весь проект. Элиф говорит: «Не проблема, я помогу Маре. Если мы будем работать вместе, мы справимся к пятнице».

В пятницу Мара присылает дизайн. Тьютор даёт команде обратную связь: приложение красивое, но вход в систему слишком медленный. Никлас исправляет ошибку на выходных. На последней неделе они представляют свой результат перед всем курсом. Все аплодируют, и профессор очень довольна.`,
      gloss: {
        elif: 'Элиф (имя)', niklas: 'Никлас (имя)', mara: 'Мара (имя)', drei: 'три', wochen: 'недели', später: 'позже, спустя', team: 'команда', krank: 'больна',
        fragt: 'спрашивает', nach: 'о (fragen nach — спрашивать о)', datenbank: 'база данных', funktioniert: 'работает', design: 'дизайн', fertig: 'готов, закончил',
        nervös: 'нервничает', trägt: 'несёт (tragen)', ganze: 'весь, целый', ganzen: 'всем, целым', problem: 'проблема', helfe: 'помогу (helfen)', schaffen: 'справимся',
        freitag: 'пятница', schickt: 'присылает', tutorin: 'тьютор (женщина)', gibt: 'даёт', aufgabe: 'задача, задание', app: 'приложение', schön: 'красивая', login: 'вход в систему, логин', langsam: 'медленный',
        repariert: 'исправляет, чинит', fehler: 'ошибка', wochenende: 'выходные', letzten: 'последней', woche: 'неделя', vor: 'перед', kurs: 'курс (группа студентов)',
        klatschen: 'аплодируют', professorin: 'профессор (женщина)', zufrieden: 'довольна', bibliothek: 'библиотека', geschlossen: 'закрыта', urlaub: 'отпуск',
        über: 'о, про', muss: 'должен', ergebnis: 'результат', bald: 'скоро', denn: 'потому что, ведь'
      },
      questions: [
        { q: 'Warum hat das Team eine Videokonferenz?', ru: 'Почему у команды видеоконференция?', options: ['Weil Mara krank ist.', 'Weil die Bibliothek geschlossen ist.', 'Weil Niklas im Urlaub ist.'], answer: 'Weil Mara krank ist.' },
        { q: 'Wer hat die Aufgabe schon erledigt?', ru: 'Кто уже выполнил задачу?', options: ['Elif', 'Mara', 'Niklas'], answer: 'Elif' },
        { q: 'Was sagt die Tutorin über die App?', ru: 'Что говорит тьютор о приложении?', options: ['Der Login ist zu langsam.', 'Das Design ist nicht schön.', 'Die Datenbank funktioniert nicht.'], answer: 'Der Login ist zu langsam.' },
        { q: 'Warum ist Niklas nervös?', ru: 'Почему Никлас нервничает?', options: ['Weil er die Verantwortung für das Projekt trägt.', 'Weil er seine Aufgabe nicht erledigt hat.', 'Weil er krank ist.'], answer: 'Weil er die Verantwortung für das Projekt trägt.' },
      ],
      translate: [
        { de: 'Elif hat ihre Aufgabe schon erledigt.', ru: 'Элиф уже выполнила своё задание.', wrongRu: ['Элиф ещё не выполнила своё задание.', 'Мара уже выполнила своё задание.', 'Элиф уже получила своё задание.'] },
        { de: 'Die Tutorin gibt dem Team Feedback.', ru: 'Тьютор даёт команде обратную связь.', wrongRu: ['Команда даёт тьютору обратную связь.', 'Тьютор просит у команды обратную связь.', 'Тьютор даёт команде новое задание.'] },
        { de: 'Wenn wir zusammenarbeiten, schaffen wir das.', ru: 'Если мы будем работать вместе, мы справимся.', wrongRu: ['Если мы будем работать вместе, мы не справимся.', 'Если мы будем работать по отдельности, мы справимся.', 'Когда мы работали вместе, мы справились.'] },
      ],
    },
  ],
};
