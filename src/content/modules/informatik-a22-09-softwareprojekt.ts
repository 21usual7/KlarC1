import type { Module } from '../types.ts';

// A2.2 informatik 09: requirements and design with a real client (lesson 0), sprints, acceptance and maintenance (lesson 1).

export const module: Module = {
  id: 'informatik-a22-09-softwareprojekt', sphere: 'informatik', level: 'A2.2',
  title: 'Softwareprojekt', subtitle: 'Требование, эскиз, спринт, приёмка: язык учебного проекта с настоящим заказчиком.',
  words: [
    { id: 'inf-a22-09-anforderung', icon: 'ListChecks', imageQuery: 'requirements document', de: 'Anforderung', pos: 'noun', article: 'die', plural: 'Anforderungen', ru: 'требование', note: 'Anforderungen an + Akk: Anforderungen an die Software.', collocation: { de: 'Anforderungen sammeln', ru: 'собирать требования', accept: ['die Anforderungen sammeln'] }, example: { de: 'Der Kunde hat eine neue Anforderung.', ru: 'У клиента новое требование.', cloze: 'Anforderung' } },
    { id: 'inf-a22-09-entwurf', icon: 'PencilRuler', imageQuery: 'UML diagram', de: 'Entwurf', pos: 'noun', article: 'der', plural: 'Entwürfe', ru: 'эскиз, проект; проектирование (системы)', collocation: { de: 'einen Entwurf machen', ru: 'сделать эскиз', accept: ['einen Entwurf erstellen'] }, example: { de: 'Wir besprechen den Entwurf mit dem Team.', ru: 'Мы обсуждаем эскиз с командой.', cloze: 'Entwurf' } },
    { id: 'inf-a22-09-umsetzen', icon: 'Hammer', de: 'umsetzen', pos: 'verb', ru: 'реализовывать, воплощать', forms: 'er setzt um · hat umgesetzt', note: 'Отделяемая приставка: wir setzen die Idee um. + Akk.', collocation: { de: 'eine Idee umsetzen', ru: 'воплотить идею', accept: ['die Idee umsetzen'] }, example: { de: 'Wir setzen die Anforderungen Schritt für Schritt um.', ru: 'Мы реализуем требования шаг за шагом.', cloze: 'setzen' } },
    { id: 'inf-a22-09-kunde', icon: 'UserRound', imageQuery: 'client meeting', de: 'Kunde', pos: 'noun', article: 'der', plural: 'Kunden', ru: 'клиент, заказчик', note: 'Женский род: die Kundin. Слабое склонение: den Kunden, dem Kunden.', example: { de: 'Der Kunde möchte eine einfache App.', ru: 'Клиент хочет простое приложение.', cloze: 'Kunde' } },
    { id: 'inf-a22-09-lastenheft', icon: 'NotebookText', de: 'Lastenheft', pos: 'noun', article: 'das', plural: 'Lastenhefte', ru: 'техническое задание (от заказчика)', parts: ['Lasten', 'heft'], note: 'Пишет заказчик (что нужно); ответ исполнителя — das Pflichtenheft (как это сделать).', example: { de: 'Im Lastenheft steht, was der Kunde braucht.', ru: 'В техзадании написано, что нужно клиенту.', cloze: 'Lastenheft' } },
    { id: 'inf-a22-09-anwendungsfall', icon: 'Route', imageQuery: 'use case diagram', de: 'Anwendungsfall', pos: 'noun', article: 'der', plural: 'Anwendungsfälle', ru: 'вариант использования (use case)', parts: ['Anwendungs', 'fall'], example: { de: 'Jeder Anwendungsfall beschreibt eine Aktion des Nutzers.', ru: 'Каждый вариант использования описывает действие пользователя.', cloze: 'Anwendungsfall' } },
    { id: 'inf-a22-09-pflichtenheft', icon: 'NotebookText', de: 'Pflichtenheft', pos: 'noun', article: 'das', plural: 'Pflichtenhefte', ru: 'техническое задание (от исполнителя)', parts: ['Pflichten', 'heft'], note: 'Пара к das Lastenheft (требования заказчика).', example: { de: 'Im Pflichtenheft steht, wie wir die Anforderungen umsetzen.', ru: 'В техническом задании написано, как мы реализуем требования.', cloze: 'Pflichtenheft' } },
    { id: 'inf-a22-09-festlegen', icon: 'Pin', de: 'festlegen', pos: 'verb', ru: 'определять, устанавливать, фиксировать', forms: 'er legt fest · hat festgelegt', note: 'Отделяемая приставка: wir legen den Termin fest. + Akk.', collocation: { de: 'die Architektur festlegen', ru: 'определить архитектуру', accept: ['eine Architektur festlegen'] }, example: { de: 'Zuerst legen wir die Architektur fest.', ru: 'Сначала мы определяем архитектуру.', cloze: 'legen' } },

    { id: 'inf-a22-09-sprint', icon: 'Timer', imageQuery: 'sprint running', de: 'Sprint', pos: 'noun', article: 'der', plural: 'Sprints', ru: 'спринт (короткий цикл разработки)', note: 'Из Scrum: обычно от одной до четырёх недель работы.', example: { de: 'Ein Sprint dauert bei uns zwei Wochen.', ru: 'У нас спринт длится две недели.', cloze: 'Sprint' } },
    { id: 'inf-a22-09-rueckmeldung', icon: 'MessageCircleReply', de: 'Rückmeldung', pos: 'noun', article: 'die', plural: 'Rückmeldungen', ru: 'обратная связь, отзыв', parts: ['Rück', 'meldung'], note: 'Синоним: das Feedback.', collocation: { de: 'eine Rückmeldung geben', ru: 'дать обратную связь', accept: ['Rückmeldung geben'] }, example: { de: 'Danke für deine schnelle Rückmeldung!', ru: 'Спасибо за твою быструю обратную связь!', cloze: 'Rückmeldung' } },
    { id: 'inf-a22-09-abnahme', icon: 'BadgeCheck', de: 'Abnahme', pos: 'noun', article: 'die', plural: 'Abnahmen', ru: 'приёмка (работы заказчиком)', note: 'abnehmen — принимать работу; das Abnahmeprotokoll — акт приёмки.', example: { de: 'Bei der Abnahme testet der Kunde alles.', ru: 'При приёмке клиент всё тестирует.', cloze: 'Abnahme' } },
    { id: 'inf-a22-09-aufwand', icon: 'Weight', de: 'Aufwand', pos: 'noun', article: 'der', ru: 'трудозатраты, затраты (времени, сил)', note: 'Обычно без мн. ч. Der Aufwand für + Akk.', collocation: { de: 'den Aufwand schätzen', ru: 'оценить трудозатраты' }, example: { de: 'Der Aufwand war größer als geplant.', ru: 'Трудозатраты оказались больше, чем планировалось.', cloze: 'Aufwand' } },
    { id: 'inf-a22-09-schaetzen', icon: 'Gauge', de: 'schätzen', pos: 'verb', ru: 'оценивать (приблизительно); ценить', forms: 'er schätzt · hat geschätzt', note: '+ Akk; schätzen auf + Akk — оценивать в. Второе значение: ценить (Ich schätze deine Hilfe).', example: { de: 'Wir schätzen die Arbeit auf drei Tage.', ru: 'Мы оцениваем работу в три дня.', cloze: 'schätzen' } },
    { id: 'inf-a22-09-dokumentation', icon: 'BookOpen', imageQuery: 'manual documentation books', de: 'Dokumentation', pos: 'noun', article: 'die', plural: 'Dokumentationen', ru: 'документация', collocation: { de: 'die Dokumentation schreiben', ru: 'писать документацию', accept: ['eine Dokumentation schreiben'] }, example: { de: 'Die Dokumentation erklärt, wie man die App installiert.', ru: 'Документация объясняет, как установить приложение.', cloze: 'Dokumentation' } },
    { id: 'inf-a22-09-wartung', icon: 'Wrench', imageQuery: 'server maintenance technician', de: 'Wartung', pos: 'noun', article: 'die', ru: 'обслуживание, сопровождение (ПО)', note: 'warten — обслуживать (и «ждать»). Обычно без мн. ч.', example: { de: 'Die Wartung der Software kostet viel Zeit.', ru: 'Сопровождение программы отнимает много времени.', cloze: 'Wartung' } },
    { id: 'inf-a22-09-ausliefern', icon: 'Truck', de: 'ausliefern', pos: 'verb', ru: 'поставлять, выпускать (продукт)', forms: 'er liefert aus · hat ausgeliefert', note: 'Отделяемая приставка: wir liefern die Version aus.', collocation: { de: 'eine neue Version ausliefern', ru: 'выпустить новую версию', accept: ['die neue Version ausliefern'] }, example: { de: 'Nächste Woche liefern wir die neue Version aus.', ru: 'На следующей неделе мы выпускаем новую версию.', cloze: 'liefern' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Eine App für die Bäckerei',
      de: `Im dritten Semester gibt es an der TU Wien eine Lehrveranstaltung, in der Studierende ein echtes Softwareprojekt machen. Selins Gruppe hat einen Kunden: Herr Berger hat eine kleine Bäckerei in Ottakring und möchte eine App für Bestellungen.

Beim ersten Treffen sammelte die Gruppe alle Anforderungen. Herr Berger wollte vieles, aber nicht alles war wichtig. Deshalb beschrieben die Studierenden jeden Anwendungsfall genau, zum Beispiel: „Ein Kunde bestellt Brot für Samstag.“ Alles kam in ein Lastenheft.

Danach legten sie die Architektur fest und machten einen Entwurf der Oberfläche. Nach zwei Wochen zeigten sie Herrn Berger einen einfachen Prototyp. Er war zufrieden: „Genau so habe ich mir das vorgestellt. Können Sie das bis Juni umsetzen?“`,
      ru: `На третьем семестре в Венском техническом университете есть курс, на котором студенты делают настоящий программный проект. У группы Селин есть заказчик: у господина Бергера маленькая пекарня в Оттакринге, и он хочет приложение для заказов.

На первой встрече группа собрала все требования. Господин Бергер хотел многого, но не всё было важно. Поэтому студенты подробно описали каждый вариант использования, например: «Клиент заказывает хлеб на субботу». Всё вошло в техническое задание.

После этого они определили архитектуру и сделали эскиз интерфейса. Через две недели они показали господину Бергеру простой прототип. Он был доволен: «Именно так я это себе и представлял. Вы сможете реализовать это до июня?»`,
      gloss: {
        studierenden: 'студенты, студентов',
        dritten: 'третьем', semester: 'семестр', tu: 'TU — технический университет', wien: 'Вена', lehrveranstaltung: 'учебный курс (в вузе)', studierende: 'студенты', echtes: 'настоящий', softwareprojekt: 'программный проект',
        selins: 'Селин (чья?)', selin: 'Селин (имя)', gruppe: 'группа', berger: 'Бергер (фамилия)', bergers: 'Бергера', bäckerei: 'пекарня', ottakring: 'Оттакринг (район Вены)', app: 'приложение', bestellungen: 'заказы',
        treffen: 'встрече, встреча', sammelte: 'собрала', wollte: 'хотел', vieles: 'многое', beschrieben: 'описали', zum: 'к; (zum Beispiel — например)', bestellt: 'заказывает', brot: 'хлеб', samstag: 'суббота',
        kam: 'попало, вошло', legten: 'положили (legten fest — определили)', architektur: 'архитектура', machten: 'сделали', oberfläche: 'интерфейс, оболочка', wochen: 'недели', zeigten: 'показали', herrn: 'господину',
        einfachen: 'простой', zufrieden: 'доволен', vorgestellt: 'представлял (sich vorstellen)', juni: 'июнь', sie: 'Вы; они', gemeinsam: 'вместе', besitzer: 'владелец', professor: 'профессор', firma: 'фирма',
        fertige: 'готовая', graz: 'Грац (город)', mail: 'письмо', wohin: 'куда', kamen: 'попали', anwendungsfälle: 'варианты использования', job: 'работа', große: 'большая',
      },
      questions: [
        { q: 'Was möchte Herr Berger?', ru: 'Чего хочет господин Бергер?', options: ['Eine App für Bestellungen', 'Eine neue Bäckerei', 'Einen Job an der TU Wien'], answer: 'Eine App für Bestellungen' },
        { q: 'Wer ist der Kunde von Selins Gruppe?', ru: 'Кто заказчик группы Селин?', options: ['Der Besitzer einer Bäckerei', 'Ein Professor der TU Wien', 'Eine große Firma in Graz'], answer: 'Der Besitzer einer Bäckerei' },
        { q: 'Wohin kamen alle Anwendungsfälle?', ru: 'Куда попали все варианты использования?', options: ['In ein Lastenheft', 'In den Prototyp', 'In eine E-Mail'], answer: 'In ein Lastenheft' },
        { q: 'Was zeigten die Studierenden nach zwei Wochen?', ru: 'Что показали студенты через две недели?', options: ['Einen einfachen Prototyp', 'Die fertige App', 'Die Architektur der Bäckerei'], answer: 'Einen einfachen Prototyp' },
      ],
      translate: [
        { de: 'Die Gruppe sammelte alle Anforderungen.', ru: 'Группа собрала все требования.', wrongRu: ['Группа собрала некоторые требования.', 'Группа выполнила все требования.', 'Клиент собрал все требования.'] },
        { de: 'Der Kunde war mit dem Prototyp zufrieden.', ru: 'Клиент был доволен прототипом.', wrongRu: ['Клиент не был доволен прототипом.', 'Клиент доволен прототипом.'] },
        { de: 'Wir legen die Anforderungen gemeinsam fest.', ru: 'Мы вместе определяем требования.', wrongRu: ['Мы вместе собираем требования.', 'Я один определяю требования.'] },
      ],
    },
    {
      lesson: 1, title: 'Sprint für Sprint',
      de: `Die Gruppe arbeitete in Sprints von zwei Wochen. Am Anfang schätzten alle den Aufwand für jede Funktion. Oft war die Schätzung zu optimistisch, und manche Aufgaben dauerten doppelt so lange.

Nach jedem Sprint gab Herr Berger eine Rückmeldung. Einmal sagte er: „Die Schrift ist zu klein, meine Kunden sind nicht mehr jung.“ So wurde die App Schritt für Schritt besser.

Im Juni war die Abnahme. Herr Berger testete alle Anwendungsfälle und unterschrieb das Protokoll. Dann konnte die Gruppe die App ausliefern. Zum Schluss schrieb Selin die Dokumentation, denn die Wartung übernimmt im nächsten Jahr eine andere Gruppe. Ohne gute Dokumentation versteht niemand den Code.`,
      ru: `Группа работала спринтами по две недели. В начале все оценивали трудозатраты на каждую функцию. Часто оценка оказывалась слишком оптимистичной, и некоторые задачи занимали вдвое больше времени.

После каждого спринта господин Бергер давал обратную связь. Однажды он сказал: «Шрифт слишком мелкий, мои клиенты уже не молоды». Так приложение шаг за шагом становилось лучше.

В июне была приёмка. Господин Бергер протестировал все варианты использования и подписал акт. После этого группа смогла выпустить приложение. В конце Селин написала документацию, потому что в следующем году сопровождение берёт на себя другая группа. Без хорошей документации никто не поймёт код.`,
      gloss: {
        gruppe: 'группа', arbeitete: 'работала', wochen: 'недели', anfang: 'начало', schätzten: 'оценивали', funktion: 'функция', schätzung: 'оценка', optimistisch: 'оптимистичный', aufgaben: 'задачи',
        dauerten: 'длились, занимали', doppelt: 'вдвое', berger: 'Бергер (фамилия)', einmal: 'однажды', sagte: 'сказал', schrift: 'шрифт', jung: 'молодой', wurde: 'становилась', app: 'приложение',
        schritt: 'шаг', besser: 'лучше', juni: 'июнь', testete: 'протестировал', anwendungsfälle: 'варианты использования', unterschrieb: 'подписал', protokoll: 'протокол, акт (документ)', konnte: 'смогла',
        schluss: 'конец (zum Schluss — в конце)', schrieb: 'написала', selin: 'Селин (имя)', übernimmt: 'берёт на себя', nächsten: 'следующем', code: 'код', lange: 'долго', wie: 'как',
        problem: 'проблема', pessimistisch: 'пессимистичный', bunt: 'пёстрый', monat: 'месяц', vergessen: 'забыла', lesen: 'читать', professorin: 'профессор (женщина)', morgen: 'завтра', dauerte: 'длился',
      },
      questions: [
        { q: 'Wie lange dauerte ein Sprint?', ru: 'Сколько длился спринт?', options: ['Zwei Wochen', 'Einen Monat', 'Drei Tage'], answer: 'Zwei Wochen' },
        { q: 'Was war oft das Problem mit der Schätzung?', ru: 'В чём часто была проблема с оценкой?', options: ['Sie war zu optimistisch.', 'Sie war zu pessimistisch.', 'Herr Berger hat sie nicht verstanden.'], answer: 'Sie war zu optimistisch.' },
        { q: 'Was sagte Herr Berger über die Schrift?', ru: 'Что господин Бергер сказал о шрифте?', options: ['Sie ist zu klein.', 'Sie ist zu groß.', 'Sie ist zu bunt.'], answer: 'Sie ist zu klein.' },
        { q: 'Warum schrieb Selin die Dokumentation?', ru: 'Почему Селин написала документацию?', options: ['Eine andere Gruppe übernimmt die Wartung.', 'Herr Berger wollte sie lesen.', 'Die Professorin hat sie vergessen.'], answer: 'Eine andere Gruppe übernimmt die Wartung.' },
      ],
      translate: [
        { de: 'Wir schätzen den Aufwand für jede Funktion.', ru: 'Мы оцениваем трудозатраты на каждую функцию.', wrongRu: ['Мы уменьшаем трудозатраты на каждую функцию.', 'Мы оценивали трудозатраты на каждую функцию.'] },
        { de: 'Nach jedem Sprint gab der Kunde eine Rückmeldung.', ru: 'После каждого спринта клиент давал обратную связь.', wrongRu: ['Перед каждым спринтом клиент давал обратную связь.', 'После каждого спринта клиент не давал обратной связи.'] },
        { de: 'Morgen liefern wir die App aus.', ru: 'Завтра мы выпускаем приложение.', wrongRu: ['Вчера мы выпустили приложение.', 'Завтра мы тестируем приложение.'] },
      ],
    },
  ],
};
