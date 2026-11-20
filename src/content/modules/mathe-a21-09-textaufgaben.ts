import type { Module } from '../types.ts';

// A2.1 mathe 09: solving a word problem step by step — given, wanted, sketch, answer sentence (lesson 0), speed and distance on a bike tour (lesson 1).

export const module: Module = {
  id: 'mathe-a21-09-textaufgaben', sphere: 'mathe', level: 'A2.1',
  title: 'Textaufgaben', subtitle: 'Условие, дано, найти, эскиз, ответ, скорость и расстояние: решаем задачи словами.',
  words: [
    { id: 'mat-a21-09-textaufgabe', icon: 'FileText', de: 'Textaufgabe', pos: 'noun', article: 'die', plural: 'Textaufgaben', ru: 'текстовая задача', parts: ['Text', 'aufgabe'], example: { de: 'Viele Schüler haben Angst vor Textaufgaben.', ru: 'Многие ученики боятся текстовых задач.', cloze: 'Textaufgaben' } },
    { id: 'mat-a21-09-angabe', icon: 'ScrollText', de: 'Angabe', pos: 'noun', article: 'die', plural: 'Angaben', ru: 'условие (задачи); данные', note: 'В Австрии die Angabe = условие задачи. Также: Angaben machen — давать сведения.', example: { de: 'Lies die Angabe zweimal genau durch.', ru: 'Внимательно прочитай условие дважды.', cloze: 'Angabe' } },
    { id: 'mat-a21-09-gegeben', icon: 'ClipboardCheck', de: 'gegeben', pos: 'adj', ru: 'дано (в задаче)', note: 'Причастие от geben. В решении пишут: Gegeben: …, Gesucht: …', example: { de: 'Gegeben sind die Länge und die Breite.', ru: 'Даны длина и ширина.', cloze: 'Gegeben' } },
    { id: 'mat-a21-09-gesucht', icon: 'Search', de: 'gesucht', pos: 'adj', ru: 'найти, искомое (в задаче)', note: 'Причастие от suchen.', example: { de: 'Gesucht ist der Umfang des Gartens.', ru: 'Найти периметр сада.', cloze: 'Gesucht' } },
    { id: 'mat-a21-09-unterstreichen', icon: 'Underline', de: 'unterstreichen', pos: 'verb', ru: 'подчёркивать', forms: 'er unterstreicht · hat unterstrichen', note: 'Неотделяемая приставка: ich unterstreiche. Сильный: unterstrich – unterstrichen.', example: { de: 'Jakob unterstreicht alle Zahlen in der Angabe.', ru: 'Якоб подчёркивает все числа в условии.', cloze: 'unterstreicht' } },
    { id: 'mat-a21-09-skizze', icon: 'PencilRuler', imageQuery: 'sketch drawing', de: 'Skizze', pos: 'noun', article: 'die', plural: 'Skizzen', ru: 'эскиз, набросок', example: { de: 'Eine Skizze hilft beim Verstehen.', ru: 'Эскиз помогает понять задачу.', cloze: 'Skizze' } },
    { id: 'mat-a21-09-ansatz', icon: 'Sigma', de: 'Ansatz', pos: 'noun', article: 'der', plural: 'Ansätze', ru: 'подход, исходная формула решения', note: 'Учитель: Der Ansatz ist richtig — направление решения верное.', example: { de: 'Der Ansatz ist richtig, aber das Ergebnis ist falsch.', ru: 'Подход верный, но результат неправильный.', cloze: 'Ansatz' } },
    { id: 'mat-a21-09-antwortsatz', icon: 'MessageSquareText', de: 'Antwortsatz', pos: 'noun', article: 'der', plural: 'Antwortsätze', ru: 'ответ (полным предложением)', parts: ['Antwort', 'satz'], note: 'В австрийской школе без Antwortsatz снимают баллы.', example: { de: 'Am Ende schreibt Jakob einen Antwortsatz.', ru: 'В конце Якоб пишет ответ полным предложением.', cloze: 'Antwortsatz' } },
    { id: 'mat-a21-09-geschwindigkeit', icon: 'Gauge', imageQuery: 'speedometer car', de: 'Geschwindigkeit', pos: 'noun', article: 'die', plural: 'Geschwindigkeiten', ru: 'скорость', note: 'v = s / t. Geschwindigkeit = Strecke durch Zeit.', example: { de: 'Ihre Geschwindigkeit ist achtzehn Kilometer pro Stunde.', ru: 'Их скорость — восемнадцать километров в час.', cloze: 'Geschwindigkeit' } },
    { id: 'mat-a21-09-strecke', icon: 'Route', imageQuery: 'road distance', de: 'Strecke', pos: 'noun', article: 'die', plural: 'Strecken', ru: 'расстояние, путь; отрезок', note: 'В геометрии die Strecke AB — отрезок AB.', example: { de: 'Die Strecke bis Krems ist 45 Kilometer lang.', ru: 'Расстояние до Кремса — 45 километров.', cloze: 'Strecke' } },
    { id: 'mat-a21-09-fahrzeit', icon: 'Clock', imageQuery: 'car driving highway', de: 'Fahrzeit', pos: 'noun', article: 'die', plural: 'Fahrzeiten', ru: 'время в пути', parts: ['Fahr', 'zeit'], example: { de: 'Die Fahrzeit ist zweieinhalb Stunden.', ru: 'Время в пути — два с половиной часа.', cloze: 'Fahrzeit' } },
    { id: 'mat-a21-09-stundenkilometer', icon: 'Gauge', imageQuery: 'speed limit sign', de: 'Stundenkilometer', pos: 'noun', article: 'der', plural: 'Stundenkilometer', ru: 'километр в час', parts: ['Stunden', 'kilometer'], note: 'Разговорное. Точнее: Kilometer pro Stunde (km/h).', example: { de: 'In der Stadt darf man nur fünfzig Stundenkilometer fahren.', ru: 'В городе можно ехать только пятьдесят километров в час.', cloze: 'Stundenkilometer' } },
    { id: 'mat-a21-09-umrechnen', icon: 'ArrowLeftRight', de: 'umrechnen', pos: 'verb', ru: 'переводить (в другие единицы)', forms: 'er rechnet um · hat umgerechnet', note: 'in + Akk umrechnen: Stunden in Minuten umrechnen.', example: { de: 'Wir rechnen die Stunden in Minuten um.', ru: 'Мы переводим часы в минуты.', cloze: 'rechnen' } },
    { id: 'mat-a21-09-ueberschlagen', icon: 'Waves', de: 'überschlagen', pos: 'verb', ru: 'прикидывать (в уме)', forms: 'er überschlägt · hat überschlagen', note: 'Неотделяемая приставка: ich überschlage. Существительное: die Überschlagsrechnung — прикидка.', example: { de: 'Zuerst überschlägt Lea das Ergebnis im Kopf.', ru: 'Сначала Леа прикидывает результат в уме.', cloze: 'überschlägt' } },
    { id: 'mat-a21-09-zwischenergebnis', icon: 'Milestone', de: 'Zwischenergebnis', pos: 'noun', article: 'das', plural: 'Zwischenergebnisse', ru: 'промежуточный результат', parts: ['Zwischen', 'ergebnis'], example: { de: 'Schreib jedes Zwischenergebnis auf.', ru: 'Записывай каждый промежуточный результат.', cloze: 'Zwischenergebnis' } },
    { id: 'mat-a21-09-sinnvoll', icon: 'Lightbulb', de: 'sinnvoll', pos: 'adj', ru: 'разумный, имеющий смысл', note: 'der Sinn (смысл) + voll. Противоположность: sinnlos.', example: { de: 'Fünfundzwanzig Stunden für 45 Kilometer sind nicht sinnvoll.', ru: 'Двадцать пять часов на 45 километров — это бессмысленно.', cloze: 'sinnvoll' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Der Zaun',
      de: `Jakob hasst Textaufgaben. Heute steht in der Angabe: „Ein Garten ist zwölf Meter lang und acht Meter breit. Um den Garten soll ein Zaun kommen. Wie viele Meter Zaun braucht man?“

Frau Berger gibt Tipps: „Lies die Angabe zweimal. Unterstreiche alle Zahlen. Dann schreib auf, was gegeben und was gesucht ist.“ Jakob schreibt: Gegeben sind die Länge, zwölf Meter, und die Breite, acht Meter. Gesucht ist der Umfang.

Dann macht er eine Skizze: ein Rechteck mit den Zahlen. Jetzt sieht er den Ansatz: Umfang gleich zwei mal Länge plus zwei mal Breite. Er rechnet: 24 plus 16 ist 40. Am Ende schreibt er einen Antwortsatz: „Man braucht 40 Meter Zaun.“ Das war gar nicht so schwer!`,
      ru: `Якоб ненавидит текстовые задачи. Сегодня в условии написано: «Сад длиной двенадцать метров и шириной восемь метров. Вокруг сада нужно поставить забор. Сколько метров забора нужно?»

Госпожа Бергер даёт советы: «Прочитай условие два раза. Подчеркни все числа. Потом запиши, что дано и что нужно найти». Якоб пишет: даны длина — двенадцать метров и ширина — восемь метров. Найти периметр.

Потом он делает эскиз: прямоугольник с числами. Теперь он видит, как решать: периметр равен двум длинам плюс две ширины. Он считает: 24 плюс 16 — это 40. В конце он пишет ответ: «Нужно 40 метров забора». Это было совсем не так сложно!`,
      gloss: { jakob: 'Якоб (имя)', hasst: 'ненавидит', heute: 'сегодня', steht: 'написано, стоит', garten: 'сад', gartens: 'сада', lang: 'длиной', um: 'вокруг', soll: 'должен', zaun: 'забор', kommen: 'прийти; (здесь) быть поставлен', braucht: 'нужно (man braucht)', berger: 'Бергер (фамилия)', gibt: 'даёт', tipps: 'советы', lies: 'прочитай', zweimal: 'дважды', unterstreiche: 'подчеркни', alle: 'все', schreib: 'запиши', auf: '(schreib auf) запиши', schreibt: 'пишет', breite: 'ширина', macht: 'делает', sieht: 'видит', rechnet: 'считает', war: 'было', gar: 'совсем (gar nicht — совсем не)', so: 'так', schwer: 'трудный', was: 'что', wie: 'как', viele: 'сколько (wie viele)', welche: 'какую', wer: 'кто' },
      questions: [
        { q: 'Was ist gesucht?', ru: 'Что нужно найти?', options: ['Der Umfang', 'Die Fläche', 'Die Länge'], answer: 'Der Umfang' },
        { q: 'Welche Skizze macht Jakob?', ru: 'Какой эскиз делает Якоб?', options: ['Ein Rechteck', 'Einen Kreis', 'Ein Dreieck'], answer: 'Ein Rechteck' },
        { q: 'Wie viele Meter Zaun braucht man?', ru: 'Сколько метров забора нужно?', options: ['40', '96', '20'], answer: '40' },
      ],
      translate: [
        { de: 'Unterstreiche alle Zahlen.', ru: 'Подчеркни все числа.', wrongRu: ['Сложи все числа.', 'Зачеркни все числа.'] },
        { de: 'Gesucht ist der Umfang.', ru: 'Найти периметр.', wrongRu: ['Дан периметр.', 'Найти площадь.'] },
        { de: 'Am Ende schreibt er einen Antwortsatz.', ru: 'В конце он пишет ответ полным предложением.', wrongRu: ['В начале он пишет ответ полным предложением.', 'В конце он делает эскиз.'] },
      ],
    },
    {
      lesson: 1, title: 'Mit dem Rad nach Krems',
      de: `Lea und ihr Vater fahren am Samstag mit dem Rad an der Donau nach Krems. Die Strecke ist 45 Kilometer lang. Ihre Geschwindigkeit ist ungefähr 18 Stundenkilometer. Wie lange ist die Fahrzeit?

Zuerst überschlägt Lea im Kopf: 45 durch 20 ist etwas mehr als zwei. Also brauchen sie ungefähr zwei Stunden, vielleicht ein bisschen mehr. Dann rechnet sie genau: 45 geteilt durch 18 ist 2,5. Das Zwischenergebnis ist also zweieinhalb Stunden. Lea rechnet die Stunden in Minuten um: Das sind 150 Minuten.

Ihr Vater rechnet auch, aber er macht einen Fehler und bekommt 25 Stunden. Lea lacht: „Papa, das ist nicht sinnvoll! So langsam sind wir nicht.“`,
      ru: `В субботу Леа с папой едут на велосипедах вдоль Дуная в Кремс. Расстояние — 45 километров. Их скорость примерно 18 километров в час. Сколько времени займёт поездка?

Сначала Леа прикидывает в уме: 45 разделить на 20 — чуть больше двух. Значит, им нужно примерно два часа, может, чуть больше. Потом она считает точно: 45 разделить на 18 — это 2,5. Значит, промежуточный результат — два с половиной часа. Леа переводит часы в минуты: это 150 минут.

Папа тоже считает, но ошибается и получает 25 часов. Леа смеётся: «Папа, это бессмысленно! Мы не настолько медленные».`,
      gloss: { lea: 'Леа (имя)', kalt: 'холодный', ihr: 'её', vater: 'отец, папа', fahren: 'едут', samstag: 'суббота', rad: 'велосипед', donau: 'Дунай', krems: 'Кремс (город)', lang: 'длиной', ihre: 'их', lange: 'долго (wie lange — сколько времени)', zuerst: 'сначала', kopf: 'голова (im Kopf — в уме)', durch: 'на (45 durch 20 — 45 разделить на 20)', etwas: 'немного', mehr: 'больше', als: 'чем', also: 'значит', brauchen: 'нужно, им требуется', vielleicht: 'может быть', bisschen: 'немного (ein bisschen)', rechnet: 'считает', geteilt: 'разделённый (geteilt durch — разделить на)', zweieinhalb: 'два с половиной', minuten: 'минуты', auch: 'тоже', aber: 'но', macht: 'делает', bekommt: 'получает', lacht: 'смеётся', papa: 'папа', so: 'так', langsam: 'медленно, медленный', wie: 'как', was: 'что', wo: 'где', warum: 'почему', viele: 'сколько (wie viele)' },
      questions: [
        { q: 'Wie lang ist die Strecke nach Krems?', ru: 'Какое расстояние до Кремса?', options: ['45 Kilometer', '18 Kilometer', '150 Kilometer'], answer: '45 Kilometer' },
        { q: 'Wie lange ist die Fahrzeit?', ru: 'Сколько длится поездка?', options: ['Zweieinhalb Stunden', 'Zwei Stunden', 'Fünfundzwanzig Stunden'], answer: 'Zweieinhalb Stunden' },
        { q: 'Warum lacht Lea?', ru: 'Почему Леа смеётся?', options: ['Das Ergebnis von Papa ist nicht sinnvoll.', 'Papa fährt sehr schnell.', 'Die Donau ist sehr kalt.'], answer: 'Das Ergebnis von Papa ist nicht sinnvoll.' },
      ],
      translate: [
        { de: 'Die Strecke ist 45 Kilometer lang.', ru: 'Расстояние — 45 километров.', wrongRu: ['Расстояние — 18 километров.', 'Поездка длится 45 минут.'] },
        { de: 'Lea rechnet die Stunden in Minuten um.', ru: 'Леа переводит часы в минуты.', wrongRu: ['Леа переводит минуты в часы.', 'Леа считает часы и минуты.'] },
        { de: 'Das Ergebnis ist nicht sinnvoll.', ru: 'Результат бессмысленный.', wrongRu: ['Результат очень точный.', 'Результат правильный.'] },
      ],
    },
  ],
};
