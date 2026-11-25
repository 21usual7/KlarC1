import type { Module } from '../types.ts';

// A2.1 pflege 09: hygiene and MRSA — germs, hand disinfection, isolation (lesson 0); protective equipment, waste, rules (lesson 1).

export const module: Module = {
  id: 'pflege-a21-09-hygiene', sphere: 'pflege', level: 'A2.1',
  title: 'Hygiene und MRSA', subtitle: 'Гигиена: микробы, дезинфекция рук, изоляция при MRSA, защитная одежда и правила.',
  words: [
    { id: 'pfl-a21-09-hygiene', icon: 'Sparkles', de: 'Hygiene', pos: 'noun', article: 'die', ru: 'гигиена', note: 'die Hygienevorschriften — санитарные правила.', example: { de: 'Hygiene schützt Patienten und Personal.', ru: 'Гигиена защищает пациентов и персонал.', cloze: 'Hygiene' } },
    { id: 'pfl-a21-09-keim', icon: 'Bug', de: 'Keim', pos: 'noun', article: 'der', plural: 'Keime', ru: 'микроб, бактерия', example: { de: 'Auf den Händen sind viele Keime.', ru: 'На руках много микробов.', cloze: 'Keime' } },
    { id: 'pfl-a21-09-haendedesinfektion', icon: 'Hand', imageQuery: 'hand disinfection', de: 'Händedesinfektion', pos: 'noun', article: 'die', ru: 'дезинфекция рук', parts: ['Hände', 'desinfektion'], example: { de: 'Die Händedesinfektion ist die wichtigste Regel.', ru: 'Дезинфекция рук — самое важное правило.', cloze: 'Händedesinfektion' } },
    { id: 'pfl-a21-09-isolation', icon: 'Lock', de: 'Isolation', pos: 'noun', article: 'die', ru: 'изоляция', example: { de: 'Der Patient liegt in Isolation.', ru: 'Пациент лежит в изоляции.', cloze: 'Isolation' } },
    { id: 'pfl-a21-09-abstrich', icon: 'TestTube', de: 'Abstrich', pos: 'noun', article: 'der', plural: 'Abstriche', ru: 'мазок', collocation: { de: 'einen Abstrich machen', ru: 'взять мазок' }, example: { de: 'Wir machen einen Abstrich aus der Nase.', ru: 'Мы возьмём мазок из носа.', cloze: 'Abstrich' } },
    { id: 'pfl-a21-09-resistent', icon: 'ShieldOff', de: 'resistent', pos: 'adj', ru: 'устойчивый, резистентный', note: 'MRSA — бактерии, устойчивые к многим антибиотикам.', example: { de: 'Diese Bakterien sind gegen viele Antibiotika resistent.', ru: 'Эти бактерии устойчивы ко многим антибиотикам.', cloze: 'resistent' } },
    { id: 'pfl-a21-09-uebertragen', icon: 'ArrowRightLeft', de: 'übertragen', pos: 'verb', ru: 'передавать', forms: 'er überträgt · hat übertragen', example: { de: 'Keime werden oft mit den Händen übertragen.', ru: 'Микробы часто передаются через руки.', cloze: 'übertragen' } },
    { id: 'pfl-a21-09-erreger', icon: 'Microscope', de: 'Erreger', pos: 'noun', article: 'der', plural: 'Erreger', ru: 'возбудитель (болезни)', example: { de: 'Der Erreger heißt MRSA.', ru: 'Возбудитель называется MRSA.', cloze: 'Erreger' } },

    { id: 'pfl-a21-09-schutzkittel', icon: 'Shirt', imageQuery: 'protective gown', de: 'Schutzkittel', pos: 'noun', article: 'der', plural: 'Schutzkittel', ru: 'защитный халат', parts: ['Schutz', 'kittel'], example: { de: 'Vor dem Zimmer ziehe ich einen Schutzkittel an.', ru: 'Перед палатой я надеваю защитный халат.', cloze: 'Schutzkittel' } },
    { id: 'pfl-a21-09-mundschutz', icon: 'Shield', de: 'Mundschutz', pos: 'noun', article: 'der', ru: 'медицинская маска', parts: ['Mund', 'schutz'], example: { de: 'Der Mundschutz muss Mund und Nase bedecken.', ru: 'Маска должна закрывать рот и нос.', cloze: 'Mundschutz' } },
    { id: 'pfl-a21-09-schutzbrille', icon: 'Glasses', de: 'Schutzbrille', pos: 'noun', article: 'die', plural: 'Schutzbrillen', ru: 'защитные очки', parts: ['Schutz', 'brille'], example: { de: 'Beim Absaugen trage ich eine Schutzbrille.', ru: 'При отсасывании я ношу защитные очки.', cloze: 'Schutzbrille' } },
    { id: 'pfl-a21-09-entsorgen', icon: 'Trash2', de: 'entsorgen', pos: 'verb', ru: 'утилизировать, выбрасывать', forms: 'er entsorgt · hat entsorgt', example: { de: 'Den Kittel entsorge ich im Zimmer.', ru: 'Халат я выбрасываю в палате.', cloze: 'entsorge' } },
    { id: 'pfl-a21-09-abfall', icon: 'Trash', de: 'Abfall', pos: 'noun', article: 'der', plural: 'Abfälle', ru: 'отходы, мусор', example: { de: 'Spritzen gehören in einen speziellen Abfall.', ru: 'Шприцы выбрасывают в специальный контейнер для отходов.', cloze: 'Abfall' } },
    { id: 'pfl-a21-09-vorschrift', icon: 'ScrollText', de: 'Vorschrift', pos: 'noun', article: 'die', plural: 'Vorschriften', ru: 'предписание, правило', example: { de: 'Die Vorschriften hängen an der Tür.', ru: 'Правила висят на двери.', cloze: 'Vorschriften' } },
    { id: 'pfl-a21-09-flaeche', icon: 'Square', de: 'Fläche', pos: 'noun', article: 'die', plural: 'Flächen', ru: 'поверхность', example: { de: 'Alle Flächen werden jeden Tag desinfiziert.', ru: 'Все поверхности дезинфицируют каждый день.', cloze: 'Flächen' } },
    { id: 'pfl-a21-09-einwirkzeit', icon: 'Timer', de: 'Einwirkzeit', pos: 'noun', article: 'die', plural: 'Einwirkzeiten', ru: 'время воздействия (средства)', parts: ['Einwirk', 'zeit'], example: { de: 'Die Einwirkzeit beträgt dreißig Sekunden.', ru: 'Время воздействия — тридцать секунд.', cloze: 'Einwirkzeit' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein MRSA-Patient',
      de: `Herr Klaus kommt aus einem anderen Krankenhaus. Bei der Aufnahme machen wir einen Abstrich aus der Nase. Am nächsten Tag kommt das Ergebnis: Er hat MRSA.

MRSA ist ein Erreger, der gegen viele Antibiotika resistent ist. Für gesunde Menschen ist er meistens nicht gefährlich, aber für schwache Patienten schon. Deshalb kommt Herr Klaus sofort in Isolation, in ein Einzelzimmer.

Sabine erklärt der Auszubildenden Jana: „Keime werden vor allem mit den Händen übertragen. Deshalb ist die Händedesinfektion die wichtigste Regel. Vor und nach jedem Patientenkontakt – immer!“`,
      ru: `Господин Клаус переведён из другой больницы. При поступлении мы берём мазок из носа. На следующий день приходит результат: у него MRSA.

MRSA — возбудитель, устойчивый ко многим антибиотикам. Для здоровых людей он обычно не опасен, а вот для ослабленных пациентов — да. Поэтому господина Клауса сразу изолируют в одноместную палату.

Сабина объясняет практикантке Яне: «Микробы передаются в первую очередь через руки. Поэтому дезинфекция рук — самое важное правило. До и после каждого контакта с пациентом — всегда!»`,
      gloss: { niemanden: 'никого', klaus: 'Клаус (фамилия)', sabine: 'Сабина (имя)', jana: 'Яна (имя)', herr: 'господин', kommt: 'приходит, поступает', aus: 'из', einem: 'одной', anderen: 'другой', krankenhaus: 'больница', bei: 'при', aufnahme: 'поступление', machen: 'делаем', wir: 'мы', nase: 'нос', nächsten: 'следующий', tag: 'день', ergebnis: 'результат', hat: 'имеет', mrsa: 'MRSA (устойчивый золотистый стафилококк)', 'mrsa-patient': 'пациент с MRSA', der: 'который; артикль', gegen: 'против; (resistent gegen) устойчив к', viele: 'многие', antibiotika: 'антибиотики', für: 'для', gesunde: 'здоровых', menschen: 'людей', meistens: 'обычно', gefährlich: 'опасный', aber: 'но', schwache: 'ослабленных', patienten: 'пациентов', schon: '(… schon) а вот да', deshalb: 'поэтому', sofort: 'сразу', in: 'в', einzelzimmer: 'одноместная палата', erklärt: 'объясняет', auszubildenden: 'практикантке', werden: 'передаются (страд. залог)', vor: 'до, перед; (vor allem) в первую очередь', allem: '(vor allem) в первую очередь', händen: 'руки (дат.)', wichtigste: 'самое важное', regel: 'правило', und: 'и', nach: 'после', jedem: 'каждого', patientenkontakt: 'контакт с пациентом', immer: 'всегда', was: 'что', wo: 'где', wie: 'как', warum: 'почему', wer: 'кто', woher: 'откуда', mund: 'рот', ohr: 'ухо', blut: 'кровь', bett: 'кровать', flur: 'коридор', hause: '(zu Hause) дома', zu: '(zu Hause) дома' },
      questions: [
        { q: 'Woher machen sie den Abstrich?', ru: 'Откуда берут мазок?', options: ['Aus der Nase', 'Aus dem Mund', 'Aus dem Ohr'], answer: 'Aus der Nase' },
        { q: 'Für wen ist MRSA gefährlich?', ru: 'Для кого опасен MRSA?', options: ['Für schwache Patienten', 'Für alle Menschen', 'Für niemanden'], answer: 'Für schwache Patienten' },
        { q: 'Was ist die wichtigste Regel?', ru: 'Какое правило самое важное?', options: ['Die Händedesinfektion', 'Der Mundschutz', 'Die Isolation'], answer: 'Die Händedesinfektion' },
      ],
      translate: [
        { de: 'Der Patient liegt in Isolation.', ru: 'Пациент лежит в изоляции.', wrongRu: ['Пациент лежит в коридоре.', 'Пациента выписали домой.'] },
        { de: 'Keime werden mit den Händen übertragen.', ru: 'Микробы передаются через руки.', wrongRu: ['Микробы передаются через воздух.', 'Руки защищают от микробов.'] },
        { de: 'Wir machen einen Abstrich aus der Nase.', ru: 'Мы возьмём мазок из носа.', wrongRu: ['Мы возьмём кровь из пальца.', 'Мы возьмём мазок из горла.'] },
      ],
    },
    {
      lesson: 1, title: 'Vor der Tür',
      de: `An der Tür von Herrn Klaus hängen die Vorschriften. Vor dem Zimmer steht ein Wagen mit Schutzkitteln, Handschuhen und Mundschutz. Jana liest alles genau.

„Zuerst desinfiziere ich die Hände. Dann ziehe ich den Schutzkittel an, den Mundschutz und die Handschuhe“, sagt sie. „Richtig“, sagt Sabine. „Und beim Absaugen trägst du auch eine Schutzbrille.“

Nach der Pflege entsorgt Jana den Kittel und die Handschuhe im Zimmer, in einem speziellen Abfall. Danach desinfiziert sie wieder die Hände. Die Einwirkzeit beträgt dreißig Sekunden. Die Reinigungskraft desinfiziert jeden Tag alle Flächen im Zimmer. „So bleibt der Erreger im Zimmer“, sagt Sabine.`,
      ru: `На двери господина Клауса висят правила. Перед палатой стоит тележка с защитными халатами, перчатками и масками. Яна внимательно всё читает.

«Сначала я дезинфицирую руки. Потом надеваю защитный халат, маску и перчатки», — говорит она. «Правильно, — говорит Сабина. — А при отсасывании ты носишь ещё и защитные очки».

После ухода Яна выбрасывает халат и перчатки в палате в специальный контейнер для отходов. Потом снова дезинфицирует руки. Время воздействия — тридцать секунд. Уборщица каждый день дезинфицирует все поверхности в палате. «Так возбудитель остаётся в палате», — говорит Сабина.`,
      gloss: { schutzkleidung: 'защитная одежда', klaus: 'Клаус (фамилия)', jana: 'Яна (имя)', sabine: 'Сабина (имя)', herrn: 'господина', an: 'на', tür: 'дверь', von: 'у, от', hängen: 'висят', vor: 'перед', zimmer: 'палата', steht: 'стоит', wagen: 'тележка', mit: 'с', schutzkitteln: 'защитными халатами', handschuhen: 'перчатками', liest: 'читает', alles: 'всё', genau: 'внимательно', zuerst: 'сначала', desinfiziere: 'дезинфицирую', hände: 'руки', dann: 'потом', ziehe: '(ziehe … an) надеваю', handschuhe: 'перчатки', sagt: 'говорит', richtig: 'правильно', beim: 'при (bei + dem)', absaugen: 'отсасывание (слизи)', trägst: 'носишь', auch: 'также', nach: 'после', pflege: 'уход', entsorgt: 'выбрасывает', kittel: 'халат', einem: 'одном', speziellen: 'специальный', danach: 'потом', desinfiziert: 'дезинфицирует', wieder: 'снова', beträgt: 'составляет', dreißig: 'тридцать', sekunden: 'секунд', reinigungskraft: 'уборщица', jeden: 'каждый', tag: 'день', alle: 'все', so: 'так', bleibt: 'остаётся', was: 'что', wo: 'где', wie: 'как', lange: '(wie lange) как долго', wann: 'когда', flur: 'коридор', küche: 'кухня', zehn: 'десять', sechzig: 'шестьдесят', minute: 'минута', eine: 'одна' },
      questions: [
        { q: 'Was steht vor dem Zimmer?', ru: 'Что стоит перед палатой?', options: ['Ein Wagen mit Schutzkleidung', 'Ein Rollstuhl', 'Ein Bett'], answer: 'Ein Wagen mit Schutzkleidung' },
        { q: 'Wo entsorgt Jana den Kittel?', ru: 'Где Яна выбрасывает халат?', options: ['Im Zimmer', 'Auf dem Flur', 'In der Küche'], answer: 'Im Zimmer' },
        { q: 'Wie lange ist die Einwirkzeit?', ru: 'Сколько длится время воздействия?', options: ['Dreißig Sekunden', 'Zehn Sekunden', 'Eine Minute'], answer: 'Dreißig Sekunden' },
      ],
      translate: [
        { de: 'Ich ziehe einen Schutzkittel an.', ru: 'Я надеваю защитный халат.', wrongRu: ['Я снимаю защитный халат.', 'Я надеваю защитные очки.'] },
        { de: 'Alle Flächen werden desinfiziert.', ru: 'Все поверхности дезинфицируют.', wrongRu: ['Все руки дезинфицируют.', 'Никакие поверхности не дезинфицируют.'] },
        { de: 'Die Vorschriften hängen an der Tür.', ru: 'Правила висят на двери.', wrongRu: ['Правила лежат на столе.', 'Халаты висят на двери.'] },
      ],
    },
  ],
};
