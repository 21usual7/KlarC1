import type { Module } from '../types.ts';

// A2.2 mathe 09: counting — permutations, factorial, the Austrian Lotto (lesson 0), primes, divisors, the Euclidean algorithm and congruences (lesson 1).

export const module: Module = {
  id: 'mathe-a22-09-diskrete-mathematik', sphere: 'mathe', level: 'A2.2',
  title: 'Diskrete Mathematik', subtitle: 'Комбинаторика, факториал, биномиальный коэффициент, простые числа, делители и сравнения.',
  words: [
    { id: 'mat-a22-09-kombinatorik', icon: 'Shuffle', de: 'Kombinatorik', pos: 'noun', article: 'die', ru: 'комбинаторика', example: { de: 'In der Kombinatorik zählen wir Möglichkeiten.', ru: 'В комбинаторике мы считаем варианты.', cloze: 'Kombinatorik' } },
    { id: 'mat-a22-09-anordnung', icon: 'Rows3', de: 'Anordnung', pos: 'noun', article: 'die', plural: 'Anordnungen', ru: 'расположение, расстановка', note: 'anordnen — располагать, упорядочивать.', example: { de: 'Es gibt 120 verschiedene Anordnungen.', ru: 'Есть 120 различных расстановок.', cloze: 'Anordnungen' } },
    { id: 'mat-a22-09-permutation', icon: 'ArrowLeftRight', de: 'Permutation', pos: 'noun', article: 'die', plural: 'Permutationen', ru: 'перестановка', example: { de: 'Jede Anordnung ist eine Permutation.', ru: 'Каждая расстановка — перестановка.', cloze: 'Permutation' } },
    { id: 'mat-a22-09-fakultaet', icon: 'CircleAlert', de: 'Fakultät', pos: 'noun', article: 'die', plural: 'Fakultäten', ru: 'факториал; факультет', note: 'n! — „n Fakultät“. Второе значение: die Fakultät für Mathematik — факультет.', example: { de: 'Fünf Fakultät ist 120.', ru: 'Пять факториал — 120.', cloze: 'Fakultät' } },
    { id: 'mat-a22-09-reihenfolge', icon: 'ListOrdered', de: 'Reihenfolge', pos: 'noun', article: 'die', plural: 'Reihenfolgen', ru: 'порядок, последовательность', parts: ['Reihen', 'folge'], example: { de: 'Beim Lotto spielt die Reihenfolge keine Rolle.', ru: 'В лото порядок не играет роли.', cloze: 'Reihenfolge' } },
    { id: 'mat-a22-09-auswaehlen', icon: 'SquareCheck', de: 'auswählen', pos: 'verb', ru: 'выбирать', forms: 'er wählt aus · hat ausgewählt', example: { de: 'Wir wählen sechs Zahlen aus 45 aus.', ru: 'Мы выбираем шесть чисел из 45.', cloze: 'wählen' } },
    { id: 'mat-a22-09-binomialkoeffizient', icon: 'Parentheses', de: 'Binomialkoeffizient', pos: 'noun', article: 'der', plural: 'Binomialkoeffizienten', ru: 'биномиальный коэффициент', parts: ['Binomial', 'koeffizient'], note: 'Читается: „45 über 6“.', example: { de: 'Den Binomialkoeffizienten liest man „n über k“.', ru: 'Биномиальный коэффициент читают «из n по k».', cloze: 'Binomialkoeffizienten' } },
    { id: 'mat-a22-09-moeglichkeit', icon: 'Split', de: 'Möglichkeit', pos: 'noun', article: 'die', plural: 'Möglichkeiten', ru: 'возможность, вариант', example: { de: 'Es gibt über acht Millionen Möglichkeiten.', ru: 'Существует более восьми миллионов вариантов.', cloze: 'Möglichkeiten' } },
    { id: 'mat-a22-09-primzahl', icon: 'Diamond', de: 'Primzahl', pos: 'noun', article: 'die', plural: 'Primzahlen', ru: 'простое число', parts: ['Prim', 'zahl'], example: { de: 'Sieben ist eine Primzahl.', ru: 'Семь — простое число.', cloze: 'Primzahl' } },
    { id: 'mat-a22-09-teiler', icon: 'Divide', de: 'Teiler', pos: 'noun', article: 'der', plural: 'Teiler', ru: 'делитель', note: 'der größte gemeinsame Teiler (ggT) — наибольший общий делитель (НОД).', example: { de: 'Drei ist ein Teiler von zwölf.', ru: 'Три — делитель двенадцати.', cloze: 'Teiler' } },
    { id: 'mat-a22-09-teilbar', icon: 'Divide', de: 'teilbar', pos: 'adj', ru: 'делящийся (без остатка)', note: 'durch + Akk teilbar: 84 ist durch 7 teilbar.', example: { de: '84 ist durch sieben teilbar.', ru: '84 делится на семь.', cloze: 'teilbar' } },
    { id: 'mat-a22-09-primfaktorzerlegung', icon: 'Blocks', de: 'Primfaktorzerlegung', pos: 'noun', article: 'die', plural: 'Primfaktorzerlegungen', ru: 'разложение на простые множители', parts: ['Primfaktor', 'zerlegung'], example: { de: 'Die Primfaktorzerlegung von 84 ist zwei mal zwei mal drei mal sieben.', ru: 'Разложение 84 на простые множители — два на два на три на семь.', cloze: 'Primfaktorzerlegung' } },
    { id: 'mat-a22-09-euklidisch', icon: 'Repeat', de: 'euklidisch', pos: 'adj', ru: 'евклидов', note: 'der euklidische Algorithmus — алгоритм Евклида.', example: { de: 'Mit dem euklidischen Algorithmus findet man den ggT.', ru: 'С помощью алгоритма Евклида находят НОД.', cloze: 'euklidischen' } },
    { id: 'mat-a22-09-rekursion', icon: 'RefreshCw', de: 'Rekursion', pos: 'noun', article: 'die', plural: 'Rekursionen', ru: 'рекурсия', note: 'rekursiv — рекурсивный.', example: { de: 'Der Algorithmus arbeitet mit Rekursion.', ru: 'Алгоритм работает с помощью рекурсии.', cloze: 'Rekursion' } },
    { id: 'mat-a22-09-kongruent', icon: 'Equal', de: 'kongruent', pos: 'adj', ru: 'сравнимый (по модулю); конгруэнтный', note: '17 ≡ 2 mod 5: „17 ist kongruent 2 modulo 5“.', example: { de: 'Siebzehn ist kongruent zwei modulo fünf.', ru: 'Семнадцать сравнимо с двумя по модулю пять.', cloze: 'kongruent' } },
    { id: 'mat-a22-09-restklasse', icon: 'Boxes', de: 'Restklasse', pos: 'noun', article: 'die', plural: 'Restklassen', ru: 'класс вычетов', parts: ['Rest', 'klasse'], example: { de: 'Modulo fünf gibt es fünf Restklassen.', ru: 'По модулю пять существует пять классов вычетов.', cloze: 'Restklassen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wie viele Möglichkeiten?',
      de: `Die erste Stunde Diskrete Mathematik beginnt mit einer einfachen Frage: Auf wie viele Arten können sich fünf Freunde in eine Reihe setzen? Für den ersten Platz gibt es fünf Möglichkeiten, für den zweiten vier und so weiter. Das ergibt fünf mal vier mal drei mal zwei mal eins, also fünf Fakultät: 120 Anordnungen. Jede davon ist eine Permutation.

Dann geht es um das österreichische Lotto „6 aus 45“. Man wählt sechs Zahlen aus 45 aus. Hier spielt die Reihenfolge keine Rolle. Die Zahl der Möglichkeiten ist der Binomialkoeffizient 45 über 6: über acht Millionen!

„Kombinatorik ist nützlich“, sagt der Professor. „Wer das versteht, spielt nie wieder Lotto.“ Die Studierenden lachen.`,
      ru: `Первое занятие по дискретной математике начинается с простого вопроса: сколькими способами пятеро друзей могут сесть в ряд? Для первого места есть пять вариантов, для второго — четыре и так далее. Получается пять на четыре на три на два на один, то есть пять факториал: 120 расстановок. Каждая из них — перестановка.

Потом речь идёт об австрийском лото «6 из 45». Нужно выбрать шесть чисел из 45. Здесь порядок не играет роли. Число вариантов — биномиальный коэффициент «из 45 по 6»: больше восьми миллионов!

«Комбинаторика полезна, — говорит профессор. — Кто это понимает, больше никогда не играет в лото». Студенты смеются.`,
      gloss: { hundertzwanzig: 'сто двадцать', erste: 'первое', stunde: 'занятие, час', diskrete: 'дискретная', mathematik: 'математика', beginnt: 'начинается', einfachen: 'простого', frage: 'вопрос', auf: 'на (auf wie viele Arten — сколькими способами)', wie: 'как', viele: 'сколько (wie viele)', arten: 'способами', können: 'могут', fünf: 'пять', freunde: 'друзей', reihe: 'ряд', setzen: 'сесть (sich setzen)', für: 'для', ersten: 'первого', platz: 'место', zweiten: 'второго', so: 'так', weiter: 'далее', ergibt: 'даёт, получается', also: 'то есть', davon: 'из них', geht: '(es geht um) речь идёт о', um: 'о', österreichische: 'австрийское', lotto: 'лото', aus: 'из', man: '(безличное) нужно', wählt: 'выбирает', hier: 'здесь', spielt: 'играет', keine: 'никакой', rolle: 'роль', über: 'над; более; (45 über 6) из 45 по 6', acht: 'восемь', millionen: 'миллионов', nützlich: 'полезна', professor: 'профессор', wer: 'кто', versteht: 'понимает', nie: 'никогда', wieder: 'снова', studierenden: 'студенты', lachen: 'смеются', was: 'что', welche: 'какая', warum: 'почему' },
      questions: [
        { q: 'Wie viele Anordnungen gibt es für fünf Freunde?', ru: 'Сколько расстановок есть для пяти друзей?', options: ['120', '25', '5'], answer: '120' },
        { q: 'Was spielt beim Lotto keine Rolle?', ru: 'Что не играет роли в лото?', options: ['Die Reihenfolge', 'Die Zahlen', 'Der Preis'], answer: 'Die Reihenfolge' },
        { q: 'Wie viele Möglichkeiten gibt es beim Lotto?', ru: 'Сколько вариантов в лото?', options: ['Über acht Millionen', 'Genau 45', 'Etwa 120'], answer: 'Über acht Millionen' },
      ],
      translate: [
        { de: 'Fünf Fakultät ist hundertzwanzig.', ru: 'Пять факториал — сто двадцать.', wrongRu: ['Пять в квадрате — сто двадцать.', 'Шесть факториал — сто двадцать.'] },
        { de: 'Die Reihenfolge spielt keine Rolle.', ru: 'Порядок не играет роли.', wrongRu: ['Порядок очень важен.', 'Количество не играет роли.'] },
        { de: 'Man wählt sechs Zahlen aus.', ru: 'Выбирают шесть чисел.', wrongRu: ['Выбирают сорок пять чисел.', 'Складывают шесть чисел.'] },
      ],
    },
    {
      lesson: 1, title: 'Primzahlen und Geheimnisse',
      de: `David fragt in der Übung: „Wozu brauchen wir Primzahlen?“ Die Tutorin antwortet: „Ohne sie gibt es keine sichere Verschlüsselung im Internet.“

Zuerst üben sie die Primfaktorzerlegung: 84 ist durch zwei teilbar, dann noch einmal durch zwei, dann durch drei und durch sieben. Also ist 84 gleich zwei mal zwei mal drei mal sieben. Dann suchen sie den größten gemeinsamen Teiler von 84 und 30. Mit dem euklidischen Algorithmus geht das schnell: 84 geteilt durch 30 ist 2, Rest 24. Dann 30 durch 24, Rest 6. Dann 24 durch 6, Rest 0. Der ggT ist also 6. Der Algorithmus ruft sich immer wieder selbst auf, das ist eine Rekursion.

Zum Schluss geht es um Modulo. Siebzehn ist kongruent zwei modulo fünf, weil beide beim Teilen durch fünf den Rest zwei haben. Sie liegen in derselben Restklasse.`,
      ru: `Давид спрашивает на практике: «Зачем нам простые числа?» Тьютор отвечает: «Без них не было бы надёжного шифрования в интернете».

Сначала они тренируются раскладывать на простые множители: 84 делится на два, потом ещё раз на два, потом на три и на семь. Значит, 84 равно два на два на три на семь. Потом они ищут наибольший общий делитель 84 и 30. Алгоритмом Евклида это делается быстро: 84 разделить на 30 — это 2, остаток 24. Потом 30 на 24, остаток 6. Потом 24 на 6, остаток 0. Значит, НОД равен 6. Алгоритм снова и снова вызывает сам себя — это рекурсия.

В конце речь о вычислениях по модулю. Семнадцать сравнимо с двумя по модулю пять, потому что оба числа при делении на пять дают остаток два. Они лежат в одном классе вычетов.`,
      gloss: { lotto: 'лото', david: 'Давид (имя)', fragt: 'спрашивает', übung: 'практическое занятие', wozu: 'зачем', brauchen: 'нужны', tutorin: 'тьютор (женщина)', antwortet: 'отвечает', ohne: 'без', sie: 'них; они', keine: 'никакой', sichere: 'надёжное', verschlüsselung: 'шифрование', internet: 'интернет', zuerst: 'сначала', üben: 'тренируются', durch: 'на', dann: 'потом', noch: 'ещё', einmal: 'раз', also: 'значит', gleich: 'равно', suchen: 'ищут', größten: 'наибольший', gemeinsamen: 'общий', algorithmus: 'алгоритм', geht: 'идёт; (es geht um) речь о', schnell: 'быстро', geteilt: 'разделённое (geteilt durch — разделить на)', rest: 'остаток', ggt: 'НОД', ruft: '(ruft auf) вызывает', immer: 'всегда (immer wieder — снова и снова)', wieder: 'снова', selbst: 'сам', auf: '(aufrufen) вызывать', schluss: 'конец (zum Schluss — в конце)', um: 'о', modulo: 'по модулю', weil: 'потому что', beide: 'оба', teilen: 'делении', haben: 'имеют', liegen: 'лежат', derselben: 'одном и том же', geheimnisse: 'тайны, секреты', was: 'что', wie: 'как', groß: 'большой (wie groß — каков)', welcher: 'какой', warum: 'почему', wofür: 'для чего' },
      questions: [
        { q: 'Wofür braucht man Primzahlen?', ru: 'Для чего нужны простые числа?', options: ['Für sichere Verschlüsselung', 'Für das Lotto', 'Für die Matura'], answer: 'Für sichere Verschlüsselung' },
        { q: 'Wie groß ist der ggT von 84 und 30?', ru: 'Чему равен НОД 84 и 30?', options: ['6', '24', '2'], answer: '6' },
        { q: 'Warum ist siebzehn kongruent zwei modulo fünf?', ru: 'Почему семнадцать сравнимо с двумя по модулю пять?', options: ['Beide haben den Rest zwei.', 'Beide sind Primzahlen.', 'Beide sind gerade.'], answer: 'Beide haben den Rest zwei.' },
      ],
      translate: [
        { de: '84 ist durch sieben teilbar.', ru: '84 делится на семь.', wrongRu: ['84 не делится на семь.', '84 делится на пять.'] },
        { de: 'Der Algorithmus ruft sich selbst auf.', ru: 'Алгоритм вызывает сам себя.', wrongRu: ['Алгоритм никогда не вызывает себя.', 'Программа вызывает другой алгоритм.'] },
        { de: 'Sie liegen in derselben Restklasse.', ru: 'Они лежат в одном классе вычетов.', wrongRu: ['Они лежат в разных классах вычетов.', 'Они лежат в одной строке.'] },
      ],
    },
  ],
};
