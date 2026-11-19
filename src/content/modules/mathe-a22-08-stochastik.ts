import type { Module } from '../types.ts';

// A2.2 mathe 08: random variables, expectation, variance, binomial and normal distribution (lesson 0), testing whether a coin is fair (lesson 1).

export const module: Module = {
  id: 'mathe-a22-08-stochastik', sphere: 'mathe', level: 'A2.2',
  title: 'Stochastik', subtitle: 'Случайная величина, матожидание, дисперсия, распределения и проверка гипотез.',
  words: [
    { id: 'mat-a22-08-zufallsvariable', icon: 'Dices', de: 'Zufallsvariable', pos: 'noun', article: 'die', plural: 'Zufallsvariablen', ru: 'случайная величина', parts: ['Zufalls', 'variable'], example: { de: 'Die Zufallsvariable X ist die Augenzahl.', ru: 'Случайная величина X — число очков.', cloze: 'Zufallsvariable' } },
    { id: 'mat-a22-08-verteilung', icon: 'ChartColumn', de: 'Verteilung', pos: 'noun', article: 'die', plural: 'Verteilungen', ru: 'распределение', example: { de: 'Beim fairen Würfel ist die Verteilung gleichmäßig.', ru: 'У честного кубика распределение равномерное.', cloze: 'Verteilung' } },
    { id: 'mat-a22-08-erwartungswert', icon: 'Target', de: 'Erwartungswert', pos: 'noun', article: 'der', plural: 'Erwartungswerte', ru: 'математическое ожидание', parts: ['Erwartungs', 'wert'], note: 'die Erwartung — ожидание. Обозначение: E(X).', example: { de: 'Der Erwartungswert beim Würfeln ist 3,5.', ru: 'Математическое ожидание при броске кубика — 3,5.', cloze: 'Erwartungswert' } },
    { id: 'mat-a22-08-varianz', icon: 'MoveHorizontal', de: 'Varianz', pos: 'noun', article: 'die', plural: 'Varianzen', ru: 'дисперсия', example: { de: 'Die Varianz misst, wie stark die Werte schwanken.', ru: 'Дисперсия измеряет, насколько сильно колеблются значения.', cloze: 'Varianz' } },
    { id: 'mat-a22-08-standardabweichung', icon: 'Ruler', de: 'Standardabweichung', pos: 'noun', article: 'die', plural: 'Standardabweichungen', ru: 'стандартное отклонение', parts: ['Standard', 'abweichung'], note: 'Корень из дисперсии. abweichen — отклоняться.', example: { de: 'Die Standardabweichung ist die Wurzel aus der Varianz.', ru: 'Стандартное отклонение — корень из дисперсии.', cloze: 'Standardabweichung' } },
    { id: 'mat-a22-08-binomialverteilung', icon: 'ChartColumnBig', de: 'Binomialverteilung', pos: 'noun', article: 'die', plural: 'Binomialverteilungen', ru: 'биномиальное распределение', parts: ['Binomial', 'verteilung'], example: { de: 'Die Zahl der Treffer folgt einer Binomialverteilung.', ru: 'Число успехов подчиняется биномиальному распределению.', cloze: 'Binomialverteilung' } },
    { id: 'mat-a22-08-normalverteilung', icon: 'ChartSpline', de: 'Normalverteilung', pos: 'noun', article: 'die', plural: 'Normalverteilungen', ru: 'нормальное распределение', parts: ['Normal', 'verteilung'], note: 'Её график — die Glockenkurve (колокол Гаусса).', example: { de: 'Bei vielen Versuchen sieht die Verteilung wie eine Normalverteilung aus.', ru: 'При большом числе испытаний распределение выглядит как нормальное.', cloze: 'Normalverteilung' } },
    { id: 'mat-a22-08-streuung', icon: 'ChartScatter', de: 'Streuung', pos: 'noun', article: 'die', plural: 'Streuungen', ru: 'разброс', note: 'streuen — рассыпать, разбрасывать.', example: { de: 'Je größer die Varianz, desto größer die Streuung.', ru: 'Чем больше дисперсия, тем больше разброс.', cloze: 'Streuung' } },
    { id: 'mat-a22-08-hypothese', icon: 'Lightbulb', de: 'Hypothese', pos: 'noun', article: 'die', plural: 'Hypothesen', ru: 'гипотеза', example: { de: 'Wir testen eine Hypothese.', ru: 'Мы проверяем гипотезу.', cloze: 'Hypothese' } },
    { id: 'mat-a22-08-nullhypothese', icon: 'CircleDot', de: 'Nullhypothese', pos: 'noun', article: 'die', plural: 'Nullhypothesen', ru: 'нулевая гипотеза', parts: ['Null', 'hypothese'], note: 'Обозначение: H₀.', example: { de: 'Die Nullhypothese lautet: Die Münze ist fair.', ru: 'Нулевая гипотеза: монета честная.', cloze: 'Nullhypothese' } },
    { id: 'mat-a22-08-signifikanzniveau', icon: 'Gauge', de: 'Signifikanzniveau', pos: 'noun', article: 'das', plural: 'Signifikanzniveaus', ru: 'уровень значимости', parts: ['Signifikanz', 'niveau'], note: 'Niveau читается по-французски: «нивó». Обычно 5 %.', example: { de: 'Das Signifikanzniveau ist fünf Prozent.', ru: 'Уровень значимости — пять процентов.', cloze: 'Signifikanzniveau' } },
    { id: 'mat-a22-08-signifikant', icon: 'BadgeAlert', de: 'signifikant', pos: 'adj', ru: 'значимый (статистически)', example: { de: 'Das Ergebnis ist signifikant.', ru: 'Результат статистически значим.', cloze: 'signifikant' } },
    { id: 'mat-a22-08-ablehnen', icon: 'ThumbsDown', de: 'ablehnen', pos: 'verb', ru: 'отклонять, отвергать', forms: 'er lehnt ab · hat abgelehnt', note: 'die Nullhypothese ablehnen / beibehalten — отвергнуть / сохранить.', example: { de: 'Wir lehnen die Nullhypothese ab.', ru: 'Мы отвергаем нулевую гипотезу.', cloze: 'lehnen' } },
    { id: 'mat-a22-08-irrtum', icon: 'TriangleAlert', de: 'Irrtum', pos: 'noun', article: 'der', plural: 'Irrtümer', ru: 'ошибка, заблуждение', note: 'die Irrtumswahrscheinlichkeit — вероятность ошибки.', example: { de: 'Ein Irrtum ist trotzdem möglich.', ru: 'Ошибка всё равно возможна.', cloze: 'Irrtum' } },
    { id: 'mat-a22-08-bedingt', icon: 'GitBranch', de: 'bedingt', pos: 'adj', ru: 'условный; обусловленный', note: 'die bedingte Wahrscheinlichkeit P(A | B) — условная вероятность.', example: { de: 'Das ist eine bedingte Wahrscheinlichkeit.', ru: 'Это условная вероятность.', cloze: 'bedingte' } },
    { id: 'mat-a22-08-konfidenzintervall', icon: 'Brackets', de: 'Konfidenzintervall', pos: 'noun', article: 'das', plural: 'Konfidenzintervalle', ru: 'доверительный интервал', parts: ['Konfidenz', 'intervall'], example: { de: 'Die Zahl 0,5 liegt nicht im Konfidenzintervall.', ru: 'Число 0,5 не входит в доверительный интервал.', cloze: 'Konfidenzintervall' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Würfel und Münzen',
      de: `In der Stochastik-Vorlesung beginnt alles mit einem Würfel. Die Zufallsvariable X ist die Augenzahl. Jede Zahl hat dieselbe Wahrscheinlichkeit, die Verteilung ist also gleichmäßig. Der Erwartungswert ist eins plus zwei bis plus sechs, geteilt durch sechs, also 3,5. Natürlich kann man nie 3,5 würfeln, aber im Durchschnitt kommt das heraus.

Dann wirft die Professorin zehnmal eine Münze. Die Zahl der Treffer ist binomialverteilt, der Erwartungswert ist fünf. Die Varianz misst die Streuung um diesen Wert. Die Standardabweichung ist die Wurzel aus der Varianz, hier ungefähr 1,6.

„Wenn wir die Münze tausendmal werfen“, sagt sie, „sieht die Verteilung fast wie eine Normalverteilung aus: eine schöne Glockenkurve.“`,
      ru: `На лекции по стохастике всё начинается с кубика. Случайная величина X — число очков. У каждого числа одинаковая вероятность, значит, распределение равномерное. Математическое ожидание — один плюс два и так далее до шести, делённое на шесть, то есть 3,5. Конечно, выбросить 3,5 невозможно, но в среднем получается именно это.

Потом профессор десять раз подбрасывает монету. Число выпадений распределено биномиально, ожидание равно пяти. Дисперсия измеряет разброс вокруг этого значения. Стандартное отклонение — корень из дисперсии, здесь примерно 1,6.

«Если подбросить монету тысячу раз, — говорит она, — распределение будет выглядеть почти как нормальное: красивая колоколообразная кривая».`,
      gloss: { gar: 'совсем (gar nicht — совсем не)', 'stochastik-vorlesung': 'лекция по стохастике', beginnt: 'начинается', alles: 'всё', würfel: 'кубик', x: 'X (обозначение)', augenzahl: 'число очков', jede: 'каждое', dieselbe: 'одинаковую, ту же', wahrscheinlichkeit: 'вероятность', also: 'значит, то есть', gleichmäßig: 'равномерное', bis: 'до', geteilt: 'разделённое (geteilt durch — делённое на)', durch: 'на', natürlich: 'конечно', kann: 'может', nie: 'никогда', würfeln: 'выбросить (кубиком)', aber: 'но', durchschnitt: 'среднее (im Durchschnitt — в среднем)', kommt: '(kommt heraus) получается', heraus: '(herauskommen) получаться', wirft: 'бросает', professorin: 'профессор (женщина)', zehnmal: 'десять раз', münze: 'монета', münzen: 'монеты', treffer: 'попадания, успехи', binomialverteilt: 'распределено биномиально', misst: 'измеряет', um: 'вокруг', diesen: 'этого', wert: 'значения', wurzel: 'корень', aus: 'из', hier: 'здесь', ungefähr: 'примерно', wenn: 'если', tausendmal: 'тысячу раз', werfen: 'бросаем', sieht: '(sieht aus) выглядит', fast: 'почти', wie: 'как', schöne: 'красивая', glockenkurve: 'колоколообразная кривая', was: 'что', wo: 'где', welche: 'какое', groß: 'большой (wie groß — каков)' },
      questions: [
        { q: 'Wie groß ist der Erwartungswert beim Würfel?', ru: 'Чему равно математическое ожидание для кубика?', options: ['3,5', '6', '1'], answer: '3,5' },
        { q: 'Wie ist die Zahl der Treffer bei der Münze verteilt?', ru: 'Как распределено число выпадений у монеты?', options: ['Binomialverteilt', 'Gleichmäßig', 'Gar nicht'], answer: 'Binomialverteilt' },
        { q: 'Was misst die Varianz?', ru: 'Что измеряет дисперсия?', options: ['Die Streuung', 'Den Erwartungswert', 'Die Augenzahl'], answer: 'Die Streuung' },
      ],
      translate: [
        { de: 'Die Verteilung ist gleichmäßig.', ru: 'Распределение равномерное.', wrongRu: ['Распределение нормальное.', 'Распределение неравномерное.'] },
        { de: 'Der Erwartungswert ist fünf.', ru: 'Математическое ожидание равно пяти.', wrongRu: ['Дисперсия равна пяти.', 'Математическое ожидание равно десяти.'] },
        { de: 'Die Standardabweichung ist die Wurzel aus der Varianz.', ru: 'Стандартное отклонение — корень из дисперсии.', wrongRu: ['Дисперсия — корень из стандартного отклонения.', 'Стандартное отклонение — квадрат дисперсии.'] },
      ],
    },
    {
      lesson: 1, title: 'Ist die Münze fair?',
      de: `David hat eine alte Münze gefunden. Er wirft sie hundertmal und bekommt 62-mal Kopf. Ist die Münze fair? Sophie stellt eine Hypothese auf. Die Nullhypothese lautet: Die Münze ist fair, die Wahrscheinlichkeit für Kopf ist genau ein Halb.

Das Signifikanzniveau ist fünf Prozent. Wenn die Münze fair ist, ist so ein extremes Ergebnis nur mit etwa zwei Prozent Wahrscheinlichkeit möglich. Das ist weniger als fünf Prozent, also ist das Ergebnis signifikant. Sie lehnen die Nullhypothese ab.

Auch das Konfidenzintervall für die Wahrscheinlichkeit geht ungefähr von 0,53 bis 0,72. Die Zahl 0,5 liegt nicht darin. Trotzdem ist ein Irrtum möglich: Vielleicht hatte David einfach Glück. „Das ist wie eine bedingte Wahrscheinlichkeit“, sagt Sophie, „sicher sind wir nie.“`,
      ru: `Давид нашёл старую монету. Он подбрасывает её сто раз и получает 62 раза орла. Честная ли монета? Софи выдвигает гипотезу. Нулевая гипотеза: монета честная, вероятность орла — ровно половина.

Уровень значимости — пять процентов. Если монета честная, такой экстремальный результат возможен лишь с вероятностью около двух процентов. Это меньше пяти процентов, значит, результат значим. Они отвергают нулевую гипотезу.

Доверительный интервал для вероятности тоже примерно от 0,53 до 0,72. Число 0,5 в него не входит. Тем не менее ошибка возможна: может быть, Давиду просто повезло. «Это как условная вероятность, — говорит Софи, — уверены мы не бываем никогда».`,
      gloss: { david: 'Давид (имя)', alte: 'старую', münze: 'монета', gefunden: 'нашёл', wirft: 'бросает', hundertmal: 'сто раз', bekommt: 'получает', mal: '-mal (62-mal — 62 раза)', kopf: 'орёл (у монеты); голова', fair: 'честная', sophie: 'Софи (имя)', stellt: '(stellt auf) выдвигает', auf: '(aufstellen) выдвигать', lautet: 'гласит', wahrscheinlichkeit: 'вероятность', für: 'для', genau: 'ровно', halb: 'половина (ein Halb)', prozent: 'процентов', wenn: 'если', so: 'такой', extremes: 'экстремальный', ergebnis: 'результат', nur: 'только', mit: 'с', etwa: 'около', möglich: 'возможен', weniger: 'меньше', als: 'чем', also: 'значит', sie: 'они', auch: 'тоже', geht: 'идёт', von: 'от', bis: 'до', liegt: 'лежит', darin: 'в нём', trotzdem: 'тем не менее', vielleicht: 'может быть', hatte: 'имел (Glück haben — везти)', einfach: 'просто', glück: 'удача', wie: 'как', sicher: 'уверены', nie: 'никогда', was: 'что', warum: 'почему' },
      questions: [
        { q: 'Wie oft bekommt David Kopf?', ru: 'Сколько раз Давиду выпадает орёл?', options: ['62-mal', '50-mal', '100-mal'], answer: '62-mal' },
        { q: 'Was lautet die Nullhypothese?', ru: 'Что гласит нулевая гипотеза?', options: ['Die Münze ist fair.', 'Die Münze ist alt.', 'Die Münze zeigt immer Kopf.'], answer: 'Die Münze ist fair.' },
        { q: 'Warum ist trotzdem ein Irrtum möglich?', ru: 'Почему ошибка всё же возможна?', options: ['Vielleicht hatte David einfach Glück.', 'Das Signifikanzniveau ist null.', 'Die Münze ist zu klein.'], answer: 'Vielleicht hatte David einfach Glück.' },
      ],
      translate: [
        { de: 'Das Ergebnis ist signifikant.', ru: 'Результат статистически значим.', wrongRu: ['Результат незначим.', 'Результат случайный.'] },
        { de: 'Sie lehnen die Nullhypothese ab.', ru: 'Они отвергают нулевую гипотезу.', wrongRu: ['Они принимают нулевую гипотезу.', 'Они выдвигают нулевую гипотезу.'] },
        { de: 'Ein Irrtum ist trotzdem möglich.', ru: 'Ошибка всё равно возможна.', wrongRu: ['Ошибка невозможна.', 'Ошибка обязательно будет.'] },
      ],
    },
  ],
};
