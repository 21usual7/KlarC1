import type { Module } from '../types.ts';

// A2.1 pflege 04: giving medication — plan, dose, preparing, checking (lesson 0); injections, blood thinners, antibiotics, intolerance (lesson 1).

export const module: Module = {
  id: 'pflege-a21-04-medikamentengabe', sphere: 'pflege', level: 'A2.1',
  title: 'Medikamente richten und geben', subtitle: 'Раздача лекарств: план, доза, проверка, уколы, антибиотики и непереносимость.',
  words: [
    { id: 'pfl-a21-04-medikamentenplan', icon: 'ClipboardList', de: 'Medikamentenplan', pos: 'noun', article: 'der', plural: 'Medikamentenpläne', ru: 'план приёма лекарств', parts: ['Medikamenten', 'plan'], example: { de: 'Im Medikamentenplan steht die genaue Dosis.', ru: 'В плане приёма указана точная доза.', cloze: 'Medikamentenplan' } },
    { id: 'pfl-a21-04-dosis', icon: 'Pill', de: 'Dosis', pos: 'noun', article: 'die', plural: 'Dosen', ru: 'доза', example: { de: 'Die Dosis ist zu hoch.', ru: 'Доза слишком высокая.', cloze: 'Dosis' } },
    { id: 'pfl-a21-04-richten', icon: 'ListChecks', de: 'richten', pos: 'verb', ru: 'готовить, раскладывать (лекарства)', forms: 'er richtet · hat gerichtet', note: 'Medikamente richten — разложить лекарства по пациентам.', example: { de: 'Der Nachtdienst richtet die Medikamente für den nächsten Tag.', ru: 'Ночная смена раскладывает лекарства на следующий день.', cloze: 'richtet' } },
    { id: 'pfl-a21-04-dispenser', icon: 'Grid3x3', imageQuery: 'pill organizer', de: 'Dispenser', pos: 'noun', article: 'der', plural: 'Dispenser', ru: 'таблетница, дозатор', note: 'Также: die Tablettenbox.', example: { de: 'Die Tabletten liegen im Dispenser.', ru: 'Таблетки лежат в таблетнице.', cloze: 'Dispenser' } },
    { id: 'pfl-a21-04-kontrollieren', icon: 'ScanSearch', de: 'kontrollieren', pos: 'verb', ru: 'проверять, контролировать', forms: 'er kontrolliert · hat kontrolliert', example: { de: 'Eine Kollegin kontrolliert die Medikamente noch einmal.', ru: 'Коллега ещё раз проверяет лекарства.', cloze: 'kontrolliert' } },
    { id: 'pfl-a21-04-verwechseln', icon: 'Shuffle', de: 'verwechseln', pos: 'verb', ru: 'перепутать', forms: 'er verwechselt · hat verwechselt', example: { de: 'Man darf die Patienten nicht verwechseln.', ru: 'Нельзя перепутать пациентов.', cloze: 'verwechseln' } },
    { id: 'pfl-a21-04-wirkstoff', icon: 'FlaskConical', de: 'Wirkstoff', pos: 'noun', article: 'der', plural: 'Wirkstoffe', ru: 'действующее вещество', parts: ['Wirk', 'stoff'], example: { de: 'Die zwei Tabletten haben denselben Wirkstoff.', ru: 'У двух таблеток одно и то же действующее вещество.', cloze: 'Wirkstoff' } },
    { id: 'pfl-a21-04-uhrzeit', icon: 'Clock', de: 'Uhrzeit', pos: 'noun', article: 'die', plural: 'Uhrzeiten', ru: 'время (на часах)', parts: ['Uhr', 'zeit'], example: { de: 'Die Uhrzeit ist bei Antibiotika wichtig.', ru: 'Время приёма важно для антибиотиков.', cloze: 'Uhrzeit' } },

    { id: 'pfl-a21-04-spritzen', icon: 'Syringe', de: 'spritzen', pos: 'verb', ru: 'делать укол, колоть; брызгать', forms: 'er spritzt · hat gespritzt', example: { de: 'Ich spritze Ihnen das Insulin in den Bauch.', ru: 'Я сделаю вам укол инсулина в живот.', cloze: 'spritze' } },
    { id: 'pfl-a21-04-blutverduenner', icon: 'Droplets', de: 'Blutverdünner', pos: 'noun', article: 'der', plural: 'Blutverdünner', ru: 'препарат для разжижения крови', parts: ['Blut', 'verdünner'], note: 'При блутфердюннерах — риск кровотечений!', example: { de: 'Mit Blutverdünnern blutet man schneller.', ru: 'При разжижающих кровь препаратах кровотечение начинается быстрее.', cloze: 'Blutverdünnern' } },
    { id: 'pfl-a21-04-antibiotikum', icon: 'Pill', de: 'Antibiotikum', pos: 'noun', article: 'das', plural: 'Antibiotika', ru: 'антибиотик', example: { de: 'Das Antibiotikum muss man bis zum Ende nehmen.', ru: 'Антибиотик нужно принимать до конца курса.', cloze: 'Antibiotikum' } },
    { id: 'pfl-a21-04-unvertraeglichkeit', icon: 'TriangleAlert', de: 'Unverträglichkeit', pos: 'noun', article: 'die', plural: 'Unverträglichkeiten', ru: 'непереносимость', example: { de: 'Er hat eine Unverträglichkeit gegen Penicillin.', ru: 'У него непереносимость пенициллина.', cloze: 'Unverträglichkeit' } },
    { id: 'pfl-a21-04-absetzen', icon: 'CircleOff', de: 'absetzen', pos: 'verb', ru: 'отменить (лекарство)', forms: 'er setzt ab · hat abgesetzt', example: { de: 'Der Arzt setzt das Medikament ab.', ru: 'Врач отменяет лекарство.', cloze: 'setzt' } },
    { id: 'pfl-a21-04-moersern', icon: 'Hammer', de: 'mörsern', pos: 'verb', ru: 'толочь (в ступке)', forms: 'er mörsert · hat gemörsert', note: 'Не все таблетки можно толочь — сначала спросить!', example: { de: 'Darf ich die Tablette mörsern?', ru: 'Можно мне растолочь таблетку?', cloze: 'mörsern' } },
    { id: 'pfl-a21-04-schmerzpflaster', icon: 'Bandage', de: 'Schmerzpflaster', pos: 'noun', article: 'das', plural: 'Schmerzpflaster', ru: 'обезболивающий пластырь', parts: ['Schmerz', 'pflaster'], example: { de: 'Das Schmerzpflaster wirkt drei Tage.', ru: 'Обезболивающий пластырь действует три дня.', cloze: 'Schmerzpflaster' } },
    { id: 'pfl-a21-04-vertragen', icon: 'ThumbsUp', de: 'vertragen', pos: 'verb', ru: 'переносить (лекарство, еду)', forms: 'er verträgt · hat vertragen', example: { de: 'Wie vertragen Sie das neue Medikament?', ru: 'Как вы переносите новое лекарство?', cloze: 'vertragen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Medikamente richten',
      de: `In der Nacht richtet Olena die Medikamente für den nächsten Tag. Sie nimmt den Medikamentenplan von jedem Patienten und legt die Tabletten in den Dispenser: morgens, mittags, abends und zur Nacht.

Das braucht Zeit, denn sie muss sehr genau arbeiten. Die Dosis muss stimmen. Zwei Medikamente haben verschiedene Namen, aber denselben Wirkstoff. Hier darf sie nichts verwechseln.

Am Morgen kontrolliert Sabine die Medikamente noch einmal. Das ist die Regel auf Station drei: Vier Augen sehen mehr als zwei. Danach bringt Sabine die Tabletten zu den Patienten. Sie fragt immer zuerst nach dem Namen.`,
      ru: `Ночью Олена раскладывает лекарства на следующий день. Она берёт план приёма каждого пациента и раскладывает таблетки по таблетницам: утро, обед, вечер и на ночь.

Это требует времени, ведь работать нужно очень точно. Доза должна быть правильной. У двух лекарств разные названия, но одно и то же действующее вещество. Тут нельзя ничего перепутать.

Утром Сабина ещё раз проверяет лекарства. Таково правило в третьем отделении: четыре глаза видят больше, чем два. Потом Сабина разносит таблетки пациентам. Она всегда сначала спрашивает имя.`,
      gloss: { nachmittag: 'вторая половина дня', olena: 'Олена (имя)', sabine: 'Сабина (имя)', nacht: 'ночь; (zur Nacht) на ночь', richtet: 'раскладывает', medikamente: 'лекарства', für: 'на, для', nächsten: 'следующий', tag: 'день', nimmt: 'берёт', jedem: 'каждого', patienten: 'пациент(ы)', legt: 'кладёт', tabletten: 'таблетки', morgens: 'утром', mittags: 'в обед', abends: 'вечером', zur: 'на (zu + der)', braucht: 'требует', zeit: 'время', denn: 'ведь', muss: 'должна', genau: 'точно', arbeiten: 'работать', stimmen: 'быть правильным', verschiedene: 'разные', namen: 'названия; имя', denselben: 'тот же самый', hier: 'тут, здесь', darf: 'можно; (darf nichts) нельзя ничего', nichts: 'ничего', morgen: 'утро', noch: 'ещё', einmal: '(noch einmal) ещё раз', regel: 'правило', station: 'отделение', vier: 'четыре', augen: 'глаза', sehen: 'видят', mehr: 'больше', als: 'чем', danach: 'потом', bringt: 'приносит, разносит', zu: 'к', immer: 'всегда', zuerst: 'сначала', fragt: 'спрашивает', nach: 'о, про', was: 'что', wer: 'кто', wann: 'когда', wie: 'как', warum: 'почему', tom: 'Том (имя)', doktor: 'доктор', wagner: 'Вагнер (фамилия)', zimmer: 'палата' },
      questions: [
        { q: 'Wann richtet Olena die Medikamente?', ru: 'Когда Олена раскладывает лекарства?', options: ['In der Nacht', 'Am Morgen', 'Am Nachmittag'], answer: 'In der Nacht' },
        { q: 'Wer kontrolliert die Medikamente?', ru: 'Кто проверяет лекарства?', options: ['Sabine', 'Tom', 'Doktor Wagner'], answer: 'Sabine' },
        { q: 'Was fragt Sabine die Patienten zuerst?', ru: 'О чём Сабина сначала спрашивает пациентов?', options: ['Nach dem Namen', 'Nach den Schmerzen', 'Nach dem Zimmer'], answer: 'Nach dem Namen' },
      ],
      translate: [
        { de: 'Die Dosis muss stimmen.', ru: 'Доза должна быть правильной.', wrongRu: ['Доза может быть любой.', 'Время должно быть правильным.'] },
        { de: 'Hier darf sie nichts verwechseln.', ru: 'Тут ей нельзя ничего перепутать.', wrongRu: ['Тут она всё перепутала.', 'Тут ей можно всё поменять.'] },
        { de: 'Vier Augen sehen mehr als zwei.', ru: 'Четыре глаза видят больше, чем два.', wrongRu: ['Два глаза видят больше, чем четыре.', 'Четыре руки делают больше, чем две.'] },
      ],
    },
    {
      lesson: 1, title: 'Insulin und Antibiotika',
      de: `Herr Yilmaz hat Diabetes. Vor jedem Essen misst Olena den Blutzucker und spritzt ihm Insulin in den Bauch. Seit einer Woche bekommt er auch ein Antibiotikum. „Die Uhrzeit ist hier sehr wichtig“, erklärt Olena. „Und Sie müssen es bis zum Ende nehmen.“

Frau Wolf bekommt einen Blutverdünner. Deshalb muss man bei ihr vorsichtig sein: Sie blutet schneller. Sie kann große Tabletten nicht gut schlucken. Olena fragt den Apotheker: „Darf ich diese Tablette mörsern?“ – „Nein, besser nicht. Es gibt sie auch als Saft.“

Herr Becker hat eine Unverträglichkeit gegen Penicillin. Nach dem neuen Medikament hat er rote Flecken auf der Haut. Doktor Wagner setzt es sofort ab.`,
      ru: `У господина Йылмаза диабет. Перед каждой едой Олена измеряет сахар и колет ему инсулин в живот. Уже неделю он получает и антибиотик. «Время приёма здесь очень важно, — объясняет Олена. — И пить его нужно до конца курса».

Госпожа Вольф получает препарат для разжижения крови. Поэтому с ней нужно быть осторожнее: у неё быстрее начинается кровотечение. Большие таблетки ей трудно глотать. Олена спрашивает фармацевта: «Можно эту таблетку растолочь?» — «Нет, лучше не надо. Она есть и в виде сиропа».

У господина Беккера непереносимость пенициллина. После нового лекарства у него красные пятна на коже. Доктор Вагнер сразу его отменяет.`,
      gloss: { davon: 'этого, из этого', yilmaz: 'Йылмаз (фамилия)', olena: 'Олена (имя)', wolf: 'Вольф (фамилия)', becker: 'Беккер (фамилия)', wagner: 'Вагнер (фамилия)', doktor: 'доктор', herr: 'господин', frau: 'госпожа', diabetes: 'диабет', vor: 'перед', jedem: 'каждой', essen: 'еда', misst: 'измеряет', blutzucker: 'сахар крови', ihm: 'ему', insulin: 'инсулин', bauch: 'живот', seit: 'уже (сколько-то)', einer: 'одной', woche: 'неделя', bekommt: 'получает', auch: 'также', erklärt: 'объясняет', müssen: 'должны', es: 'его, это', bis: 'до', zum: 'к, до (zu + dem)', ende: 'конец', nehmen: 'принимать', deshalb: 'поэтому', muss: 'нужно', man: '(muss man) нужно', bei: 'с, у', ihr: 'ней', vorsichtig: 'осторожный', sein: 'быть', blutet: 'кровоточит', schneller: 'быстрее', kann: 'может', große: 'большие', schlucken: 'глотать', fragt: 'спрашивает', apotheker: 'фармацевт', darf: 'можно', diese: 'эту', besser: 'лучше', gibt: '(es gibt) есть, бывает', sie: 'её, она', als: 'в виде', saft: 'сироп, сок', gegen: 'против; (gegen Penicillin) на пенициллин', penicillin: 'пенициллин', nach: 'после', neuen: 'нового', rote: 'красные', flecken: 'пятна', haut: 'кожа', sofort: 'сразу', was: 'что', wer: 'кто', wo: 'где', warum: 'почему', arm: 'рука', bein: 'нога', tropfen: 'капли', salbe: 'мазь' },
      questions: [
        { q: 'Wohin spritzt Olena das Insulin?', ru: 'Куда Олена колет инсулин?', options: ['In den Bauch', 'In den Arm', 'In das Bein'], answer: 'In den Bauch' },
        { q: 'Warum muss man bei Frau Wolf vorsichtig sein?', ru: 'Почему с госпожой Вольф нужно быть осторожнее?', options: ['Sie bekommt einen Blutverdünner.', 'Sie hat Diabetes.', 'Sie hat Fieber.'], answer: 'Sie bekommt einen Blutverdünner.' },
        { q: 'Was macht Doktor Wagner mit dem neuen Medikament?', ru: 'Что доктор Вагнер делает с новым лекарством?', options: ['Er setzt es ab.', 'Er gibt mehr davon.', 'Er mörsert es.'], answer: 'Er setzt es ab.' },
      ],
      translate: [
        { de: 'Darf ich die Tablette mörsern?', ru: 'Можно мне растолочь таблетку?', wrongRu: ['Можно мне разделить таблетку?', 'Можно мне проглотить таблетку?'] },
        { de: 'Der Arzt setzt das Medikament ab.', ru: 'Врач отменяет лекарство.', wrongRu: ['Врач назначает лекарство.', 'Врач увеличивает дозу.'] },
        { de: 'Wie vertragen Sie das Antibiotikum?', ru: 'Как вы переносите антибиотик?', wrongRu: ['Когда вы принимаете антибиотик?', 'Где ваш антибиотик?'] },
      ],
    },
  ],
};
