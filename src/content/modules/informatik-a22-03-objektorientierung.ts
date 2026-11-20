import type { Module } from '../types.ts';

// A2.2 informatik 03: classes and objects (lesson 0), inheritance and encapsulation (lesson 1).

export const module: Module = {
  id: 'informatik-a22-03-objektorientierung', sphere: 'informatik', level: 'A2.2',
  title: 'Objektorientierung', subtitle: 'Класс, объект, метод, наследование: язык курса по объектно-ориентированному программированию.',
  words: [
    { id: 'inf-a22-03-klasse', icon: 'Blocks', imageQuery: 'school class', de: 'Klasse', pos: 'noun', article: 'die', plural: 'Klassen', ru: 'класс (в ООП)', note: 'В школе die Klasse — тоже класс, но в ООП это «шаблон» для объектов.', collocation: { de: 'eine Klasse definieren', ru: 'определить класс', accept: ['die Klasse definieren'] }, example: { de: 'Die Klasse beschreibt alle Fahrräder.', ru: 'Класс описывает все велосипеды.', cloze: 'Klasse' } },
    { id: 'inf-a22-03-objekt', icon: 'Package', de: 'Objekt', pos: 'noun', article: 'das', plural: 'Objekte', ru: 'объект', example: { de: 'Jedes Objekt hat eigene Werte.', ru: 'У каждого объекта свои значения.', cloze: 'Objekt' } },
    { id: 'inf-a22-03-attribut', icon: 'Tag', de: 'Attribut', pos: 'noun', article: 'das', plural: 'Attribute', ru: 'атрибут, поле (класса)', example: { de: 'Die Farbe ist ein Attribut des Fahrrads.', ru: 'Цвет — атрибут велосипеда.', cloze: 'Attribut' } },
    { id: 'inf-a22-03-methode', icon: 'SquareFunction', de: 'Methode', pos: 'noun', article: 'die', plural: 'Methoden', ru: 'метод', collocation: { de: 'eine Methode aufrufen', ru: 'вызвать метод', accept: ['die Methode aufrufen'] }, example: { de: 'Die Methode berechnet den Preis.', ru: 'Метод вычисляет цену.', cloze: 'Methode' } },
    { id: 'inf-a22-03-konstruktor', icon: 'Hammer', de: 'Konstruktor', pos: 'noun', article: 'der', plural: 'Konstruktoren', ru: 'конструктор', example: { de: 'Der Konstruktor setzt die Startwerte.', ru: 'Конструктор задаёт начальные значения.', cloze: 'Konstruktor' } },
    { id: 'inf-a22-03-erzeugen', icon: 'CirclePlus', de: 'erzeugen', pos: 'verb', ru: 'создавать, порождать', forms: 'er erzeugt · hat erzeugt', note: 'Приставка er- неотделяемая; + Akk. Синоним: erstellen.', collocation: { de: 'ein Objekt erzeugen', ru: 'создать объект', accept: ['das Objekt erzeugen', 'ein neues Objekt erzeugen'] }, example: { de: 'Wir erzeugen drei Objekte aus einer Klasse.', ru: 'Мы создаём три объекта из одного класса.', cloze: 'erzeugen' } },
    { id: 'inf-a22-03-vererben', icon: 'GitFork', de: 'vererben', pos: 'verb', ru: 'передавать по наследству (в ООП)', forms: 'er vererbt · hat vererbt', note: 'etwas an + Akk vererben. Существительное: die Vererbung — наследование.', example: { de: 'Die Klasse Tier vererbt ihre Methoden an die Klasse Hund.', ru: 'Класс Tier передаёт свои методы классу Hund.', cloze: 'vererbt' } },
    { id: 'inf-a22-03-parameter', icon: 'SlidersHorizontal', de: 'Parameter', pos: 'noun', article: 'der', plural: 'Parameter', ru: 'параметр', collocation: { de: 'einen Parameter übergeben', ru: 'передать параметр', accept: ['den Parameter übergeben'] }, example: { de: 'Die Methode bekommt zwei Parameter.', ru: 'Метод получает два параметра.', cloze: 'Parameter' } },

    { id: 'inf-a22-03-erben', icon: 'Dna', de: 'erben', pos: 'verb', ru: 'наследовать', forms: 'er erbt · hat geerbt', note: 'erben von + Dat: die Klasse erbt von Fahrrad.', collocation: { de: 'von einer Klasse erben', ru: 'наследовать от класса', accept: ['von der Klasse erben'] }, example: { de: 'Die Klasse Auto erbt von der Klasse Fahrzeug.', ru: 'Класс Auto наследует от класса Fahrzeug.', cloze: 'erbt' } },
    { id: 'inf-a22-03-vererbung', icon: 'ListTree', de: 'Vererbung', pos: 'noun', article: 'die', ru: 'наследование', note: 'Обычно без мн. ч.', example: { de: 'Durch Vererbung spart man viel Code.', ru: 'Благодаря наследованию экономится много кода.', cloze: 'Vererbung' } },
    { id: 'inf-a22-03-oberklasse', icon: 'ArrowUpFromLine', de: 'Oberklasse', pos: 'noun', article: 'die', plural: 'Oberklassen', ru: 'суперкласс, родительский класс', parts: ['Ober', 'klasse'], note: 'Также: die Basisklasse, die Superklasse.', example: { de: 'Fahrzeug ist die Oberklasse von Auto.', ru: 'Fahrzeug — суперкласс для Auto.', cloze: 'Oberklasse' } },
    { id: 'inf-a22-03-unterklasse', icon: 'ArrowDownToLine', de: 'Unterklasse', pos: 'noun', article: 'die', plural: 'Unterklassen', ru: 'подкласс, дочерний класс', parts: ['Unter', 'klasse'], example: { de: 'Eine Unterklasse kann neue Methoden haben.', ru: 'Подкласс может иметь новые методы.', cloze: 'Unterklasse' } },
    { id: 'inf-a22-03-ueberschreiben', icon: 'PenLine', de: 'überschreiben', pos: 'verb', ru: 'переопределять (метод); перезаписывать', forms: 'er überschreibt · überschrieb · hat überschrieben', note: 'Неотделяемая приставка (ударение на -schrei-): er überschreibt die Methode.', collocation: { de: 'eine Methode überschreiben', ru: 'переопределить метод', accept: ['die Methode überschreiben'] }, example: { de: 'Die Unterklasse überschreibt die Methode fahren.', ru: 'Подкласс переопределяет метод «ехать».', cloze: 'überschreibt' } },
    { id: 'inf-a22-03-kapselung', icon: 'Container', de: 'Kapselung', pos: 'noun', article: 'die', ru: 'инкапсуляция', note: 'От die Kapsel — капсула. Обычно без мн. ч.', example: { de: 'Kapselung schützt die Daten eines Objekts.', ru: 'Инкапсуляция защищает данные объекта.', cloze: 'Kapselung' } },
    { id: 'inf-a22-03-privat', icon: 'Lock', de: 'privat', pos: 'adj', ru: 'приватный, закрытый (private)', note: 'Противоположность: öffentlich (public).', example: { de: 'Dieses Attribut ist privat.', ru: 'Этот атрибут приватный.', cloze: 'privat' } },
    { id: 'inf-a22-03-rueckgabewert', icon: 'Undo2', de: 'Rückgabewert', pos: 'noun', article: 'der', plural: 'Rückgabewerte', ru: 'возвращаемое значение', parts: ['Rückgabe', 'wert'], note: 'die Rückgabe (возврат) + der Wert (значение).', example: { de: 'Die Methode hat keinen Rückgabewert.', ru: 'У метода нет возвращаемого значения.', cloze: 'Rückgabewert' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Bauplan für Fahrräder',
      de: `Im zweiten Semester lernen Aylin und Tobias Java. In der ersten Übung sollten sie eine Klasse Fahrrad schreiben. Die Idee war einfach: Eine Klasse ist wie ein Bauplan, und ein Objekt ist ein konkretes Fahrrad nach diesem Plan.

Jedes Fahrrad hat Attribute, zum Beispiel Farbe und Geschwindigkeit. Außerdem hat die Klasse Methoden, etwa bremsen oder schneller fahren.

Um ein neues Objekt zu erzeugen, braucht man einen Konstruktor. Aylin hat dem Konstruktor zwei Parameter gegeben: die Farbe und die Nummer des Rads. Dann hat sie drei Fahrräder erzeugt und für jedes die Methode bremsen aufgerufen.

Tobias war zuerst unsicher, weil er die Begriffe nicht kannte. Nach der Übung konnte er aber alles erklären.`,
      ru: `Во втором семестре Айлин и Тобиас изучают Java. На первом практическом занятии им нужно было написать класс «Велосипед». Идея была простой: класс — это как чертёж, а объект — конкретный велосипед, сделанный по этому чертежу.

У каждого велосипеда есть атрибуты, например цвет и скорость. Кроме того, у класса есть методы, например «тормозить» или «ехать быстрее».

Чтобы создать новый объект, нужен конструктор. Айлин дала конструктору два параметра: цвет и номер велосипеда. Потом она создала три велосипеда и для каждого вызвала метод «тормозить».

Тобиас сначала был неуверен, потому что не знал этих терминов. Но после занятия он смог всё объяснить.`,
      gloss: {
        aylin: 'Айлин (имя)', aylins: 'Айлин (чей?)', tobias: 'Тобиас (имя)', semester: 'семестр', java: 'Java (язык программирования)', übung: 'практическое занятие, упражнение',
        sollten: 'должны были', fahrrad: 'велосипед', fahrräder: 'велосипеды', bauplan: 'чертёж, план постройки', konkretes: 'конкретный', plan: 'план, чертёж',
        attribute: 'атрибуты', farbe: 'цвет', geschwindigkeit: 'скорость', außerdem: 'кроме того', methoden: 'методы', etwa: 'например; примерно',
        bremsen: 'тормозить', schneller: 'быстрее', fahren: 'ехать', um: 'чтобы (um … zu)', gegeben: 'дала', nummer: 'номер', rads: 'велосипеда (das Rad)',
        unsicher: 'неуверенный', begriffe: 'понятия, термины', kannte: 'знал', konnte: 'смог', laut: 'согласно', text: 'текст', zum: 'к; (zum Beispiel — например)',
        computer: 'компьютер', hatte: 'имел', mochte: 'любил, нравилось', fahrrädern: 'велосипедам', viele: 'сколько (wie viele)', klasse: 'класс (в ООП)', objekte: 'объекты',
      },
      questions: [
        { q: 'Was ist eine Klasse laut dem Text?', ru: 'Что такое класс согласно тексту?', options: ['Ein Bauplan für Objekte', 'Ein konkretes Fahrrad', 'Eine Methode zum Bremsen'], answer: 'Ein Bauplan für Objekte' },
        { q: 'Welche Parameter hat Aylins Konstruktor?', ru: 'Какие параметры у конструктора Айлин?', options: ['Farbe und Nummer', 'Farbe und Geschwindigkeit', 'Nummer und Geschwindigkeit'], answer: 'Farbe und Nummer' },
        { q: 'Wie viele Fahrräder hat Aylin erzeugt?', ru: 'Сколько велосипедов создала Айлин?', options: ['Zwei', 'Drei', 'Vier'], answer: 'Drei' },
        { q: 'Warum war Tobias zuerst unsicher?', ru: 'Почему Тобиас сначала был неуверен?', options: ['Er kannte die Begriffe nicht.', 'Er hatte keinen Computer.', 'Er mochte keine Fahrräder.'], answer: 'Er kannte die Begriffe nicht.' },
      ],
      translate: [
        { de: 'Ein Objekt ist ein konkretes Fahrrad.', ru: 'Объект — это конкретный велосипед.', wrongRu: ['Класс — это конкретный велосипед.', 'Объект — это не конкретный велосипед.'] },
        { de: 'Der Konstruktor erzeugt ein neues Objekt.', ru: 'Конструктор создаёт новый объект.', wrongRu: ['Конструктор удаляет новый объект.', 'Конструктор создаёт новый класс.'] },
        { de: 'Sie hat die Methode aufgerufen.', ru: 'Она вызвала метод.', wrongRu: ['Он вызвал метод.', 'Она написала метод.', 'Она вызовет метод.'] },
      ],
    },
    {
      lesson: 1, title: 'Das Elektrofahrrad erbt',
      de: `Eine Woche später kam die nächste Aufgabe: Aylin und Tobias sollten eine Unterklasse Elektrofahrrad schreiben. Ein Elektrofahrrad ist auch ein Fahrrad, deshalb kann es von der Oberklasse Fahrrad erben. So muss man den Code nicht noch einmal schreiben.

Durch die Vererbung hatte das Elektrofahrrad sofort alle Attribute und Methoden. Nur die Methode schneller fahren musste Tobias überschreiben, weil ein Elektrofahrrad einen Motor hat.

Dann erklärte die Tutorin das Prinzip der Kapselung: Die Attribute sind privat, man kann sie nur über Methoden ändern. Die Methode für den Akku hat einen Rückgabewert: Sie gibt den Ladestand in Prozent zurück.

„Am Anfang war das alles sehr abstrakt“, sagte Aylin, „aber jetzt verstehe ich, wofür man das braucht.“`,
      ru: `Через неделю пришло следующее задание: Айлин и Тобиасу нужно было написать подкласс «Электровелосипед». Электровелосипед — тоже велосипед, поэтому он может наследовать от суперкласса «Велосипед». Так не нужно писать код ещё раз.

Благодаря наследованию у электровелосипеда сразу были все атрибуты и методы. Только метод «ехать быстрее» Тобиасу пришлось переопределить, потому что у электровелосипеда есть мотор.

Потом тьютор объяснила принцип инкапсуляции: атрибуты приватные, менять их можно только через методы. У метода для аккумулятора есть возвращаемое значение: он возвращает уровень заряда в процентах.

«Сначала всё это было очень абстрактно, — сказала Айлин, — но теперь я понимаю, зачем это нужно».`,
      gloss: {
        aylin: 'Айлин (имя)', tobias: 'Тобиас (имя)', später: 'позже (eine Woche später — через неделю)', kam: 'пришла', aufgabe: 'задание', sollten: 'должны были',
        elektrofahrrad: 'электровелосипед', fahrrad: 'велосипед', code: 'код', einmal: 'раз (noch einmal — ещё раз)', hatte: 'имел', attribute: 'атрибуты', methoden: 'методы',
        schneller: 'быстрее', fahren: 'ехать', musste: 'пришлось, должен был', motor: 'мотор', erklärte: 'объяснила', tutorin: 'тьютор (женщина), ассистентка',
        prinzip: 'принцип', ändern: 'менять', akku: 'аккумулятор', gibt: 'возвращает (gibt … zurück)', ladestand: 'уровень заряда', prozent: 'процент(ы)',
        zurück: 'обратно (zurückgeben — возвращать)', anfang: 'начало (am Anfang — сначала)', abstrakt: 'абстрактно', sagte: 'сказала', wofür: 'для чего',
        welcher: 'какого, от какого', erbt: 'наследует', klasse: 'класс (в ООП)', welche: 'какой, какую', bremsen: 'тормозить', zurückgeben: 'возвращать',
        private: 'приватные', direkt: 'напрямую', objekt: 'объект', gar: 'вовсе (gar nicht — вообще нет)', farbe: 'цвет', rads: 'велосипеда', geschwindigkeit: 'скорость',
      },
      questions: [
        { q: 'Von welcher Klasse erbt das Elektrofahrrad?', ru: 'От какого класса наследует электровелосипед?', options: ['Von der Klasse Fahrrad', 'Von der Klasse Motor', 'Von der Klasse Akku'], answer: 'Von der Klasse Fahrrad' },
        { q: 'Welche Methode musste Tobias überschreiben?', ru: 'Какой метод Тобиасу пришлось переопределить?', options: ['Schneller fahren', 'Bremsen', 'Den Ladestand zurückgeben'], answer: 'Schneller fahren' },
        { q: 'Wie kann man private Attribute ändern?', ru: 'Как можно изменить приватные атрибуты?', options: ['Nur über Methoden', 'Direkt im Objekt', 'Gar nicht'], answer: 'Nur über Methoden' },
        { q: 'Was gibt die Methode für den Akku zurück?', ru: 'Что возвращает метод для аккумулятора?', options: ['Den Ladestand in Prozent', 'Die Farbe des Rads', 'Die Geschwindigkeit'], answer: 'Den Ladestand in Prozent' },
      ],
      translate: [
        { de: 'Die Unterklasse erbt alle Methoden.', ru: 'Подкласс наследует все методы.', wrongRu: ['Суперкласс наследует все методы.', 'Подкласс наследует некоторые методы.'] },
        { de: 'Tobias musste die Methode überschreiben.', ru: 'Тобиасу пришлось переопределить метод.', wrongRu: ['Тобиасу пришлось вызвать метод.', 'Тобиасу не пришлось переопределять метод.'] },
        { de: 'Die Attribute sind privat.', ru: 'Атрибуты приватные.', wrongRu: ['Атрибуты публичные.', 'Методы приватные.'] },
      ],
    },
  ],
};
