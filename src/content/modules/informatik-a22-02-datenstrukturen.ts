import type { Module } from '../types.ts';

// A2.2 informatik 02: lists and arrays (lesson 0), stacks, queues and trees (lesson 1).

export const module: Module = {
  id: 'informatik-a22-02-datenstrukturen', sphere: 'informatik', level: 'A2.2',
  title: 'Datenstrukturen', subtitle: 'Список, массив, индекс, стек, дерево: язык курса «Алгоритмы и структуры данных».',
  words: [
    { id: 'inf-a22-02-datenstruktur', icon: 'Boxes', de: 'Datenstruktur', pos: 'noun', article: 'die', plural: 'Datenstrukturen', ru: 'структура данных', parts: ['Daten', 'struktur'], collocation: { de: 'eine Datenstruktur wählen', ru: 'выбрать структуру данных', accept: ['die Datenstruktur wählen'] }, example: { de: 'Für diese Aufgabe brauchen wir eine passende Datenstruktur.', ru: 'Для этой задачи нам нужна подходящая структура данных.', cloze: 'Datenstruktur' } },
    { id: 'inf-a22-02-liste', icon: 'List', imageQuery: 'shopping list', de: 'Liste', pos: 'noun', article: 'die', plural: 'Listen', ru: 'список', example: { de: 'Die Liste enthält die Namen aller Studierenden.', ru: 'Список содержит имена всех студентов.', cloze: 'Liste' } },
    { id: 'inf-a22-02-feld', icon: 'Brackets', de: 'Feld', pos: 'noun', article: 'das', plural: 'Felder', ru: 'массив (array); поле', note: 'В программировании das Feld = массив фиксированной длины; часто говорят и das Array.', example: { de: 'Ein Feld hat in Java eine feste Länge.', ru: 'Массив в Java имеет фиксированную длину.', cloze: 'Feld' } },
    { id: 'inf-a22-02-index', icon: 'Hash', de: 'Index', pos: 'noun', article: 'der', plural: 'Indizes', ru: 'индекс', note: 'Мн. ч.: die Indizes (в IT обычно) или die Indexe.', example: { de: 'Der erste Index ist null, nicht eins.', ru: 'Первый индекс — ноль, а не один.', cloze: 'Index' } },
    { id: 'inf-a22-02-element', icon: 'Box', de: 'Element', pos: 'noun', article: 'das', plural: 'Elemente', ru: 'элемент', collocation: { de: 'ein Element hinzufügen', ru: 'добавить элемент', accept: ['das Element hinzufügen'] }, example: { de: 'Wir fügen ein neues Element am Ende hinzu.', ru: 'Мы добавляем новый элемент в конец.', cloze: 'Element' } },
    { id: 'inf-a22-02-laenge', icon: 'MoveHorizontal', imageQuery: 'measuring tape', de: 'Länge', pos: 'noun', article: 'die', plural: 'Längen', ru: 'длина', example: { de: 'Die Länge der Liste ändert sich ständig.', ru: 'Длина списка постоянно меняется.', cloze: 'Länge' } },
    { id: 'inf-a22-02-sortieren', icon: 'ArrowDownAZ', de: 'sortieren', pos: 'verb', ru: 'сортировать', forms: 'er sortiert · hat sortiert', note: 'sortieren nach + Dat: nach Namen sortieren — сортировать по именам.', collocation: { de: 'eine Liste sortieren', ru: 'отсортировать список', accept: ['die Liste sortieren'] }, example: { de: 'Das Programm sortiert die Namen alphabetisch.', ru: 'Программа сортирует имена по алфавиту.', cloze: 'sortiert' } },
    { id: 'inf-a22-02-zugreifen', icon: 'MousePointerClick', de: 'zugreifen', pos: 'verb', ru: 'обращаться (к данным), получать доступ', forms: 'er greift zu · hat zugegriffen', note: 'Отделяемая приставка; zugreifen auf + Akk: auf ein Element zugreifen.', collocation: { de: 'auf ein Element zugreifen', ru: 'обратиться к элементу', accept: ['auf das Element zugreifen'] }, example: { de: 'Mit dem Index greift man direkt auf Elemente zu.', ru: 'По индексу можно напрямую обращаться к элементам.', cloze: 'greift' } },

    { id: 'inf-a22-02-stapel', icon: 'Layers', imageQuery: 'stack of plates', de: 'Stapel', pos: 'noun', article: 'der', plural: 'Stapel', ru: 'стек; стопка', note: 'В IT также der Stack. Принцип LIFO: последним пришёл — первым вышел.', example: { de: 'Das letzte Element auf dem Stapel kommt zuerst heraus.', ru: 'Последний элемент в стеке выходит первым.', cloze: 'Stapel' } },
    { id: 'inf-a22-02-warteschlange', icon: 'ListEnd', imageQuery: 'people waiting in line', de: 'Warteschlange', pos: 'noun', article: 'die', plural: 'Warteschlangen', ru: 'очередь', parts: ['Warte', 'schlange'], note: 'warten (ждать) + die Schlange (змея; очередь). В IT также die Queue, принцип FIFO.', example: { de: 'In der Warteschlange ist das erste Element zuerst dran.', ru: 'В очереди первый элемент обрабатывается первым.', cloze: 'Warteschlange' } },
    { id: 'inf-a22-02-baum', icon: 'Network', imageQuery: 'binary tree diagram', de: 'Baum', pos: 'noun', article: 'der', plural: 'Bäume', ru: 'дерево (в т. ч. структура данных)', example: { de: 'Ein Baum speichert Daten auf mehreren Ebenen.', ru: 'Дерево хранит данные на нескольких уровнях.', cloze: 'Baum' } },
    { id: 'inf-a22-02-knoten', icon: 'CircleDot', imageQuery: 'knot rope', de: 'Knoten', pos: 'noun', article: 'der', plural: 'Knoten', ru: 'узел', example: { de: 'Jeder Knoten speichert einen Wert.', ru: 'Каждый узел хранит значение.', cloze: 'Knoten' } },
    { id: 'inf-a22-02-wurzel', icon: 'Sprout', imageQuery: 'tree roots', de: 'Wurzel', pos: 'noun', article: 'die', plural: 'Wurzeln', ru: 'корень (дерева)', note: 'В информатике дерево рисуют «вверх ногами»: корень наверху.', example: { de: 'In der Informatik steht die Wurzel ganz oben.', ru: 'В информатике корень находится в самом верху.', cloze: 'Wurzel' } },
    { id: 'inf-a22-02-zeiger', icon: 'MoveRight', imageQuery: 'clock hand', de: 'Zeiger', pos: 'noun', article: 'der', plural: 'Zeiger', ru: 'указатель (pointer); стрелка (часов)', note: 'Zeiger auf + Akk: ein Zeiger auf den Knoten.', collocation: { de: 'einen Zeiger setzen', ru: 'установить указатель', accept: ['den Zeiger setzen'] }, example: { de: 'Der Zeiger zeigt auf den nächsten Knoten.', ru: 'Указатель указывает на следующий узел.', cloze: 'Zeiger' } },
    { id: 'inf-a22-02-entfernen', icon: 'ListX', de: 'entfernen', pos: 'verb', ru: 'удалять, убирать', forms: 'er entfernt · hat entfernt', note: 'Приставка ent- неотделяемая; + Akk, entfernen aus + Dat.', collocation: { de: 'ein Element entfernen', ru: 'удалить элемент', accept: ['das Element entfernen'] }, example: { de: 'Sie entfernt das oberste Element vom Stapel.', ru: 'Она удаляет верхний элемент из стека.', cloze: 'entfernt' } },
    { id: 'inf-a22-02-durchsuchen', icon: 'SearchCode', de: 'durchsuchen', pos: 'verb', ru: 'искать (по всему), просматривать', forms: 'er durchsucht · hat durchsucht', note: 'Неотделяемая приставка: er durchsucht die Liste; durchsuchen nach + Dat.', collocation: { de: 'eine Liste durchsuchen', ru: 'выполнить поиск по списку', accept: ['die Liste durchsuchen'] }, example: { de: 'Wir durchsuchen den Baum nach einem Namen.', ru: 'Мы ищем в дереве имя.', cloze: 'durchsuchen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Liste oder Feld?',
      de: `Mira studiert Informatik an der TU Wien. Im Kurs „Algorithmen und Datenstrukturen“ sollte sie letzte Woche eine einfache Datenstruktur bauen: eine Liste mit den Namen aller Studierenden ihrer Übungsgruppe.

Zuerst wollte Mira ein Feld benutzen. Ein Feld hat aber eine feste Länge, und die Gruppe wurde immer größer. Deshalb hat sie eine Liste genommen, denn ihre Länge kann sich ändern.

Jedes Element der Liste hat einen Index. Der erste Index ist null, nicht eins. Das war für Mira am Anfang komisch. Mit dem Index kann man direkt auf ein Element zugreifen.

Danach musste sie die Namen alphabetisch sortieren. Ihr Kollege Jonas hat ihr gezeigt, dass Python dafür schon eine fertige Funktion hat.`,
      ru: `Мира изучает информатику в Венском техническом университете. На курсе «Алгоритмы и структуры данных» ей на прошлой неделе нужно было построить простую структуру данных: список с именами всех студентов её группы по практическим занятиям.

Сначала Мира хотела использовать массив. Но у массива фиксированная длина, а группа становилась всё больше. Поэтому она взяла список, ведь его длина может меняться.

У каждого элемента списка есть индекс. Первый индекс — ноль, а не один. Для Миры это поначалу было странно. По индексу можно напрямую обратиться к элементу.

После этого ей нужно было отсортировать имена по алфавиту. Её однокурсник Йонас показал ей, что в Python для этого уже есть готовая функция.`,
      gloss: {
        mira: 'Мира (имя)', miras: 'Миры (чей?)', jonas: 'Йонас (имя)', informatik: 'информатика', tu: 'TU — технический университет', wien: 'Вена',
        kurs: 'курс', algorithmen: 'алгоритмы', datenstrukturen: 'структуры данных', sollte: 'должна была', bauen: 'построить, создать',
        namen: 'имена; имени', aller: 'всех', studierenden: 'студентов, учащихся', ihrer: 'её', übungsgruppe: 'группа практических занятий',
        wollte: 'хотела', feste: 'фиксированную, постоянную', gruppe: 'группа', größer: 'больше', genommen: 'взяла',
        ihre: 'её (здесь: его — длина списка)', ändern: 'менять(ся)', eins: 'один', anfang: 'начало (am Anfang — поначалу)', direkt: 'напрямую',
        musste: 'должна была, пришлось', alphabetisch: 'по алфавиту', kollege: 'коллега, однокурсник', gezeigt: 'показал', python: 'Python (язык программирования)',
        dafür: 'для этого', fertige: 'готовую', funktion: 'функция', professorin: 'профессор (женщина)', geholfen: 'помог', löschen: 'удалить',
        beginnt: 'начинается', letzten: 'последнего, последним', keinen: 'никакого, не', kennt: 'знает', felder: 'массивы',
      },
      questions: [
        { q: 'Warum hat Mira kein Feld genommen?', ru: 'Почему Мира не взяла массив?', options: ['Ein Feld hat eine feste Länge.', 'Ein Feld hat keinen Index.', 'Python kennt keine Felder.'], answer: 'Ein Feld hat eine feste Länge.' },
        { q: 'Mit welchem Index beginnt eine Liste?', ru: 'С какого индекса начинается список?', options: ['Mit null', 'Mit eins', 'Mit dem letzten Element'], answer: 'Mit null' },
        { q: 'Was musste Mira danach machen?', ru: 'Что Мире нужно было сделать после этого?', options: ['Die Namen sortieren', 'Die Gruppe löschen', 'Ein neues Feld bauen'], answer: 'Die Namen sortieren' },
        { q: 'Wer hat Mira geholfen?', ru: 'Кто помог Мире?', options: ['Ihr Kollege Jonas', 'Ihre Professorin', 'Niemand'], answer: 'Ihr Kollege Jonas' },
      ],
      translate: [
        { de: 'Ein Feld hat eine feste Länge.', ru: 'У массива фиксированная длина.', wrongRu: ['У списка фиксированная длина.', 'У массива нет фиксированной длины.'] },
        { de: 'Jedes Element hat einen Index.', ru: 'У каждого элемента есть индекс.', wrongRu: ['У каждого элемента есть значение.', 'У некоторых элементов есть индекс.'] },
        { de: 'Sie musste die Namen sortieren.', ru: 'Ей нужно было отсортировать имена.', wrongRu: ['Ей нужно было удалить имена.', 'Ему нужно было отсортировать имена.', 'Ей нужно будет отсортировать имена.'] },
      ],
    },
    {
      lesson: 1, title: 'Teller, Kassa und Bäume',
      de: `In der nächsten Einheit ging es um weitere Datenstrukturen. Die Professorin begann mit einem Beispiel aus dem Alltag: In der Mensa steht ein Stapel Teller. Man nimmt immer den obersten Teller. So funktioniert auch ein Stapel im Computer: Das letzte Element wird zuerst entfernt.

Bei einer Warteschlange ist es umgekehrt. Wer zuerst kommt, ist zuerst dran – wie an der Kassa im Supermarkt.

Danach zeichnete sie einen Baum an die Tafel. Ganz oben war die Wurzel, darunter kamen weitere Knoten. Jeder Knoten hatte einen Zeiger auf seine Kinder.

Jonas fragte: „Warum braucht man so einen Baum?“ Die Professorin antwortete: „Einen sortierten Baum kann man viel schneller durchsuchen als eine lange Liste.“`,
      ru: `На следующем занятии речь шла о других структурах данных. Профессор начала с примера из повседневной жизни: в столовой стоит стопка тарелок. Всегда берут верхнюю тарелку. Так же работает и стек в компьютере: последний элемент удаляется первым.

В очереди всё наоборот. Кто пришёл первым, тот первым и обслуживается — как на кассе в супермаркете.

Потом она нарисовала на доске дерево. В самом верху был корень, под ним шли другие узлы. У каждого узла был указатель на его потомков.

Йонас спросил: «Зачем нужно такое дерево?» Профессор ответила: «По отсортированному дереву искать можно гораздо быстрее, чем по длинному списку».`,
      gloss: {
        jonas: 'Йонас (имя)', einheit: 'занятие, учебный блок', ging: 'шла (es ging um — речь шла о)', weitere: 'другие, дальнейшие', datenstrukturen: 'структуры данных',
        professorin: 'профессор (женщина)', begann: 'начала', alltag: 'повседневная жизнь', mensa: 'студенческая столовая', teller: 'тарелка, тарелки',
        nimmt: 'берёт (man nimmt — берут)', obersten: 'самый верхний', computer: 'компьютер', letzte: 'последний', umgekehrt: 'наоборот',
        dran: 'на очереди (ist dran — его очередь)', kassa: 'касса (австр.)', supermarkt: 'супермаркет', zeichnete: 'нарисовала', tafel: 'доска',
        oben: 'наверху', darunter: 'под этим, ниже', kamen: 'шли, следовали', hatte: 'имел', kinder: 'дети (здесь: потомки узла)',
        fragte: 'спросил', antwortete: 'ответила', sortierten: 'отсортированное', schneller: 'быстрее', lange: 'длинный',
        beispiel: 'пример', nennt: 'называет', menschen: 'люди', bäume: 'деревья', park: 'парк', zuerst: 'сначала, первым', dem: 'артикль (дат.)',
        weniger: 'меньше', kürzer: 'короче', daten: 'данные', welches: 'какой, какое', oberste: 'верхний',
      },
      questions: [
        { q: 'Welches Beispiel aus dem Alltag nennt die Professorin für einen Stapel?', ru: 'Какой пример из повседневной жизни профессор приводит для стека?', options: ['Teller in der Mensa', 'Menschen an der Kassa', 'Bäume im Park'], answer: 'Teller in der Mensa' },
        { q: 'Wie funktioniert eine Warteschlange?', ru: 'Как работает очередь?', options: ['Wer zuerst kommt, ist zuerst dran.', 'Das letzte Element wird zuerst entfernt.', 'Man nimmt immer den obersten Teller.'], answer: 'Wer zuerst kommt, ist zuerst dran.' },
        { q: 'Was war ganz oben im Baum?', ru: 'Что было в самом верху дерева?', options: ['Die Wurzel', 'Ein Zeiger', 'Die Kinder'], answer: 'Die Wurzel' },
        { q: 'Warum braucht man einen sortierten Baum?', ru: 'Зачем нужно отсортированное дерево?', options: ['Man kann Daten schneller durchsuchen.', 'Er braucht weniger Zeiger.', 'Er ist kürzer als eine Liste.'], answer: 'Man kann Daten schneller durchsuchen.' },
      ],
      translate: [
        { de: 'Das letzte Element wird zuerst entfernt.', ru: 'Последний элемент удаляется первым.', wrongRu: ['Последний элемент добавляется первым.', 'Последний элемент не удаляется.'] },
        { de: 'Jeder Knoten hat einen Zeiger.', ru: 'У каждого узла есть указатель.', wrongRu: ['У каждого узла есть корень.', 'Ни у одного узла нет указателя.'] },
        { de: 'Ganz oben ist die Wurzel.', ru: 'В самом верху находится корень.', wrongRu: ['В самом низу находится корень.', 'В самом верху находится узел.'] },
      ],
    },
  ],
};
