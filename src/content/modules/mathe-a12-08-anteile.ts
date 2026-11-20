import type { Module } from '../types.ts';

// A1.2 mathe 08: sharing pizza into eighths and thirds (lesson 0), a class vote with votes, majority and percent (lesson 1).

export const module: Module = {
  id: 'mathe-a12-08-anteile', sphere: 'mathe', level: 'A1.2',
  title: 'Teile und Prozent', subtitle: 'Треть, восьмая, остаток, большинство и процент: делим поровну.',
  words: [
    { id: 'mat-a12-08-teilen', icon: 'Split', de: 'teilen', pos: 'verb', ru: 'делить; делиться', forms: 'er teilt · hat geteilt', note: 'In Mathe: 12 geteilt durch 3. В жизни: etwas mit jemandem teilen — делиться.', collocation: { de: 'etwas mit Freunden teilen', ru: 'делиться чем-то с друзьями', accept: ['mit Freunden teilen'] }, example: { de: 'Wir teilen die Pizza in acht Stücke.', ru: 'Мы делим пиццу на восемь кусков.', cloze: 'teilen' } },
    { id: 'mat-a12-08-stueck', icon: 'Pizza', imageQuery: 'pizza slices', de: 'Stück', pos: 'noun', article: 'das', plural: 'Stücke', ru: 'кусок, штука', note: 'ein Stück Pizza — кусок пиццы. 2 Euro pro Stück — 2 евро за штуку.', example: { de: 'Jedes Kind bekommt drei Stücke.', ru: 'Каждый ребёнок получает три куска.', cloze: 'Stücke' } },
    { id: 'mat-a12-08-achtel', icon: 'ChartPie', imageQuery: 'pizza slices', de: 'Achtel', pos: 'noun', article: 'das', plural: 'Achtel', ru: 'восьмая часть', note: 'Доли на -tel: Drittel, Viertel, Fünftel, Achtel. Все среднего рода.', example: { de: 'Ein Stück ist ein Achtel der Pizza.', ru: 'Один кусок — восьмая часть пиццы.', cloze: 'Achtel' } },
    { id: 'mat-a12-08-drittel', icon: 'ChartPie', imageQuery: 'cake cut in three', de: 'Drittel', pos: 'noun', article: 'das', plural: 'Drittel', ru: 'треть', note: 'ein Drittel = 1/3, zwei Drittel = 2/3.', example: { de: 'Ein Drittel der Schokolade ist für Tom.', ru: 'Треть шоколадки — для Тома.', cloze: 'Drittel' } },
    { id: 'mat-a12-08-verteilen', icon: 'Share2', de: 'verteilen', pos: 'verb', ru: 'раздавать, распределять', forms: 'er verteilt · hat verteilt', note: 'etwas an + Akk verteilen — раздать кому-то.', example: { de: 'Mama verteilt die Stücke an die Kinder.', ru: 'Мама раздаёт куски детям.', cloze: 'verteilt' } },
    { id: 'mat-a12-08-gleichmaessig', icon: 'Equal', de: 'gleichmäßig', pos: 'adj', ru: 'равномерный; поровну', note: 'gleich (одинаковый) + -mäßig.', example: { de: 'Wir verteilen die Stücke gleichmäßig.', ru: 'Мы раздаём куски поровну.', cloze: 'gleichmäßig' } },
    { id: 'mat-a12-08-rest', icon: 'CircleEllipsis', de: 'Rest', pos: 'noun', article: 'der', plural: 'Reste', ru: 'остаток', note: 'В делении: 7 geteilt durch 2 ist 3, Rest 1.', example: { de: '13 geteilt durch 4 ist 3, Rest 1.', ru: '13 разделить на 4 — это 3, остаток 1.', cloze: 'Rest' } },
    { id: 'mat-a12-08-uebrig', icon: 'CircleDashed', de: 'übrig', pos: 'adj', ru: 'оставшийся, лишний', note: 'Обычно в выражении übrig sein / übrig bleiben — оставаться.', example: { de: 'Am Ende ist ein Stück übrig.', ru: 'В конце остаётся один кусок.', cloze: 'übrig' } },
    { id: 'mat-a12-08-prozent', icon: 'Percent', imageQuery: 'percent sign', de: 'Prozent', pos: 'noun', article: 'das', plural: 'Prozente', ru: 'процент', note: 'После числа без окончания: 50 Prozent. Знак: %.', example: { de: 'Fünfzig Prozent sind die Hälfte.', ru: 'Пятьдесят процентов — это половина.', cloze: 'Prozent' } },
    { id: 'mat-a12-08-anteil', icon: 'ChartPie', imageQuery: 'pie slice', de: 'Anteil', pos: 'noun', article: 'der', plural: 'Anteile', ru: 'доля, часть', example: { de: 'Der Anteil der Mädchen in der Klasse ist groß.', ru: 'Доля девочек в классе большая.', cloze: 'Anteil' } },
    { id: 'mat-a12-08-stimme', icon: 'Vote', imageQuery: 'ballot box', de: 'Stimme', pos: 'noun', article: 'die', plural: 'Stimmen', ru: 'голос (в голосовании; голос человека)', example: { de: 'Der Zoo bekommt dreizehn Stimmen.', ru: 'Зоопарк получает тринадцать голосов.', cloze: 'Stimmen' } },
    { id: 'mat-a12-08-abstimmen', icon: 'Vote', imageQuery: 'voting', de: 'abstimmen', pos: 'verb', ru: 'голосовать', forms: 'er stimmt ab · hat abgestimmt', note: 'über + Akk abstimmen — голосовать по какому-то вопросу. Существительное: die Abstimmung.', example: { de: 'Die Klasse stimmt über den Ausflug ab.', ru: 'Класс голосует за экскурсию.', cloze: 'stimmt' } },
    { id: 'mat-a12-08-mehrheit', icon: 'Users', imageQuery: 'raised hands vote', de: 'Mehrheit', pos: 'noun', article: 'die', plural: 'Mehrheiten', ru: 'большинство', note: 'mehr (больше) + -heit. Противоположность: die Minderheit.', example: { de: 'Die Mehrheit will in den Zoo fahren.', ru: 'Большинство хочет поехать в зоопарк.', cloze: 'Mehrheit' } },
    { id: 'mat-a12-08-doppelt', icon: 'Copy', de: 'doppelt', pos: 'adj', ru: 'двойной; вдвое', note: 'doppelt so viele wie — вдвое больше, чем.', example: { de: 'Der Zoo hat mehr als doppelt so viele Stimmen.', ru: 'У зоопарка более чем вдвое больше голосов.', cloze: 'doppelt' } },
    { id: 'mat-a12-08-ganz', icon: 'Circle', de: 'ganz', pos: 'adj', ru: 'целый, весь; совсем', note: 'die ganze Klasse — весь класс; ganz gut — вполне хорошо.', example: { de: 'Die ganze Klasse fährt mit.', ru: 'Едет весь класс.', cloze: 'ganze' } },
    { id: 'mat-a12-08-knapp', icon: 'Gauge', de: 'knapp', pos: 'adj', ru: 'едва, чуть-чуть; впритык', note: 'knapp gewinnen — выиграть с небольшим перевесом.', example: { de: 'Der Zoo gewinnt nur knapp.', ru: 'Зоопарк побеждает с небольшим перевесом.', cloze: 'knapp' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Pizza für acht',
      de: `Tom hat Geburtstag. Acht Kinder sind auf der Party. Mama bestellt drei Pizzas. Sie teilt jede Pizza in acht Stücke. Ein Stück ist also ein Achtel.

Insgesamt sind es 24 Stücke. Mama rechnet: 24 geteilt durch 8 ist 3. Sie verteilt die Stücke gleichmäßig: Jedes Kind bekommt drei Stücke.

Aber Lisa isst nur zwei Stücke. Am Ende ist ein Stück übrig. Tom nimmt den Rest gern. Danach gibt es noch Schokolade. Mama teilt sie in drei Teile. Ein Drittel ist für Tom, ein Drittel für Lisa und ein Drittel für Papa.`,
      ru: `У Тома день рождения. На вечеринке восемь детей. Мама заказывает три пиццы. Она делит каждую пиццу на восемь кусков. Значит, один кусок — это восьмая часть.

Всего получается 24 куска. Мама считает: 24 разделить на 8 — это 3. Она раздаёт куски поровну: каждый ребёнок получает три куска.

Но Лиза съедает только два куска. В конце остаётся один кусок. Том с удовольствием берёт остаток. Потом ещё есть шоколад. Мама делит его на три части. Треть — Тому, треть — Лизе и треть — папе.`,
      gloss: { tom: 'Том (имя)', geburtstag: 'день рождения', kinder: 'дети', party: 'вечеринка', mama: 'мама', bestellt: 'заказывает', pizzas: 'пиццы', pizza: 'пицца', jede: 'каждую', also: 'значит, то есть', insgesamt: 'всего', es: 'это; (sind es) получается', rechnet: 'считает', geteilt: 'разделённый (geteilt durch — разделить на)', durch: 'через; (geteilt durch) на', jedes: 'каждый', kind: 'ребёнок', bekommt: 'получает', aber: 'но', lisa: 'Лиза (имя)', isst: 'ест', nur: 'только', ende: 'конец', nimmt: 'берёт', gern: 'охотно, с удовольствием', danach: 'потом', noch: 'ещё', schokolade: 'шоколад', teile: 'части', papa: 'папа', wie: 'как', viele: 'сколько (wie viele)', wer: 'кто' },
      questions: [
        { q: 'In wie viele Stücke teilt Mama jede Pizza?', ru: 'На сколько кусков мама делит каждую пиццу?', options: ['In acht', 'In drei', 'In vierundzwanzig'], answer: 'In acht' },
        { q: 'Wie viele Stücke bekommt jedes Kind?', ru: 'Сколько кусков получает каждый ребёнок?', options: ['Drei', 'Zwei', 'Acht'], answer: 'Drei' },
        { q: 'Wer nimmt den Rest?', ru: 'Кто берёт остаток?', options: ['Tom', 'Lisa', 'Papa'], answer: 'Tom' },
      ],
      translate: [
        { de: 'Mama teilt die Pizza in acht Stücke.', ru: 'Мама делит пиццу на восемь кусков.', wrongRu: ['Мама делит пиццу на три куска.', 'Мама заказывает восемь пицц.'] },
        { de: 'Am Ende ist ein Stück übrig.', ru: 'В конце остаётся один кусок.', wrongRu: ['В конце не остаётся ни одного куска.', 'В начале остаётся один кусок.'] },
        { de: 'Ein Drittel ist für Papa.', ru: 'Треть — для папы.', wrongRu: ['Половина — для папы.', 'Треть — для мамы.'] },
      ],
    },
    {
      lesson: 1, title: 'Wohin fahren wir?',
      de: `Die Klasse 2B plant einen Ausflug. In der Klasse sind 24 Kinder. Frau Novak sagt: „Wir stimmen ab. Jedes Kind hat eine Stimme.“

Es gibt drei Ideen: den Zoo, das Museum und das Schwimmbad. Der Zoo bekommt 13 Stimmen, das Museum 6 und das Schwimmbad 5. Der Zoo hat mehr als doppelt so viele Stimmen wie das Museum.

Frau Novak rechnet: 13 von 24, das sind ungefähr 54 Prozent. Das ist mehr als die Hälfte, also die Mehrheit. Aber der Zoo gewinnt nur knapp. Der Anteil für das Schwimmbad ist klein. Trotzdem fährt die ganze Klasse in den Zoo.`,
      ru: `Класс 2Б планирует экскурсию. В классе 24 ребёнка. Госпожа Новак говорит: «Мы проголосуем. У каждого ребёнка один голос».

Есть три идеи: зоопарк, музей и бассейн. Зоопарк получает 13 голосов, музей — 6, бассейн — 5. У зоопарка более чем вдвое больше голосов, чем у музея.

Госпожа Новак считает: 13 из 24 — это примерно 54 процента. Это больше половины, то есть большинство. Но зоопарк побеждает с небольшим перевесом. Доля бассейна маленькая. Тем не менее весь класс едет в зоопарк.`,
      gloss: { b: 'Б (буква в названии класса 2B)', klasse: 'класс', plant: 'планирует', ausflug: 'экскурсия, поездка', kinder: 'дети', novak: 'Новак (фамилия)', jedes: 'каждый', kind: 'ребёнок', ideen: 'идеи', zoo: 'зоопарк', museum: 'музей', schwimmbad: 'бассейн', bekommt: 'получает', mehr: 'больше', als: 'чем', so: 'так (so viele wie — столько же, сколько)', wie: 'как', rechnet: 'считает', von: 'из', also: 'то есть', aber: 'но', gewinnt: 'побеждает', nur: 'только', klein: 'маленький', trotzdem: 'тем не менее', fährt: 'едет', wohin: 'куда', fahren: 'едем, ехать', viele: 'много, столько', welche: 'какая', idee: 'идея' },
      questions: [
        { q: 'Wie viele Stimmen bekommt der Zoo?', ru: 'Сколько голосов получает зоопарк?', options: ['Dreizehn', 'Sechs', 'Fünf'], answer: 'Dreizehn' },
        { q: 'Welche Idee hat die Mehrheit?', ru: 'У какой идеи большинство?', options: ['Der Zoo', 'Das Museum', 'Das Schwimmbad'], answer: 'Der Zoo' },
        { q: 'Wie viel Prozent hat der Zoo ungefähr?', ru: 'Сколько процентов примерно у зоопарка?', options: ['54 Prozent', '13 Prozent', '24 Prozent'], answer: '54 Prozent' },
      ],
      translate: [
        { de: 'Jedes Kind hat eine Stimme.', ru: 'У каждого ребёнка один голос.', wrongRu: ['У каждого ребёнка два голоса.', 'У каждого учителя один голос.'] },
        { de: 'Die Mehrheit will in den Zoo.', ru: 'Большинство хочет в зоопарк.', wrongRu: ['Меньшинство хочет в зоопарк.', 'Большинство хочет в музей.'] },
        { de: 'Der Zoo gewinnt nur knapp.', ru: 'Зоопарк побеждает с небольшим перевесом.', wrongRu: ['Зоопарк побеждает с большим перевесом.', 'Зоопарк проигрывает.'] },
      ],
    },
  ],
};
