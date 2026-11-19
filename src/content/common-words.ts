/**
 * Hover translations for frequent words that every text uses (pronouns, articles, prepositions,
 * common verbs and their forms). Keys are lowercase word forms. Topic words go into `Reading.gloss`.
 */
export const commonWords: Record<string, string> = {
  // articles and determiners
  der: 'артикль м. р. (им.); артикль ж. р. (дат./род.)', die: 'артикль ж. р. / мн. ч.', das: 'артикль ср. р.; это', den: 'артикль м. р. (вин.); мн. ч. (дат.)', dem: 'артикль м./ср. р. (дат.)', des: 'артикль м./ср. р. (род.)',
  ein: 'один, какой-то (м./ср. р.)', eine: 'одна, какая-то (ж. р.)', einen: 'какой-то (м. р., вин.)', einem: 'какому-то (дат.)', einer: 'какой-то (ж. р., дат./род.)', eines: 'какого-то (род.)',
  kein: 'никакой, не', keine: 'никакая, никакие, не', keinen: 'никакого (вин.)', keinem: 'никакому', keiner: 'никто; никакой',
  mein: 'мой', meine: 'моя, мои', meinen: 'моего, моим (мн. дат.)', meinem: 'моему, моём', meiner: 'моей',
  dein: 'твой', deine: 'твоя, твои', deinen: 'твоего, твоим (мн.)', deinem: 'твоему, твоём', deiner: 'твоей',
  sein: 'его; быть', seine: 'его (ж. р. / мн. ч.)', seinen: 'его (вин. м. р.)', seinem: 'его (дат.)',
  ihr: 'её; их; вы', ihre: 'её, их; Ваш(а)', ihren: 'её, их (вин. м. р.)', ihrem: 'её, их (дат.)', ihrer: 'её, их (дат./род.)',
  unser: 'наш', unsere: 'наша, наши', unseren: 'наших, нашего', unserem: 'нашему, нашем', euer: 'ваш', eure: 'ваша, ваши',
  dieser: 'этот', diese: 'эта, эти', dieses: 'это', diesen: 'этого, этим', diesem: 'этому, этом',
  jeder: 'каждый', jede: 'каждая', jedes: 'каждое', jeden: 'каждого, каждый (вин.)', jedem: 'каждому',
  alle: 'все', alles: 'всё', viele: 'многие', viel: 'много', wenig: 'мало', wenige: 'немногие', mehr: 'больше', andere: 'другие, другая', anderen: 'другим, других', anderes: 'другое', beide: 'оба', manche: 'некоторые', einige: 'несколько',
  // pronouns
  ich: 'я', du: 'ты', er: 'он', sie: 'она; они; Вы', es: 'оно; это', wir: 'мы', mich: 'меня, себя', mir: 'мне', dich: 'тебя, себя', dir: 'тебе', ihn: 'его', ihm: 'ему', uns: 'нас, нам', euch: 'вас, вам', ihnen: 'им; Вам', sich: 'себя, -ся', man: '(безличное) люди, «-ют»',
  was: 'что', wer: 'кто', wen: 'кого', wem: 'кому', wo: 'где', wohin: 'куда', woher: 'откуда', wie: 'как', warum: 'почему', wann: 'когда', welche: 'какая, какие', welcher: 'какой', welches: 'какое', wieso: 'почему', wofür: 'для чего', womit: 'чем, с помощью чего',
  etwas: 'что-то; немного', nichts: 'ничего', jemand: 'кто-то', niemand: 'никто',
  // be / have / modal
  bin: '(я) есть; являюсь', bist: '(ты) есть', ist: 'есть, является', sind: '(мы/они) есть', seid: '(вы) есть', war: 'был', waren: 'были', gewesen: 'был (Perfekt)',
  habe: '(я) имею, у меня есть', hast: '(ты) имеешь', hat: 'имеет, у него есть', haben: 'иметь; (мы/они) имеем', habt: '(вы) имеете', hatte: 'имел', hatten: 'имели',
  werde: '(я) буду; становлюсь', wird: 'будет; становится', werden: 'становиться; будут', wurde: 'стал; был (пассив)', wurden: 'стали; были (пассив)', geworden: 'стал (Perfekt)',
  kann: 'может, могу', kannst: '(ты) можешь', können: 'мочь; можем, могут', konnte: 'мог', muss: 'должен', musst: '(ты) должен', müssen: 'быть должным; должны', soll: 'должен (по поручению)', sollen: 'должны', sollte: 'следовало бы', will: 'хочет, хочу', willst: '(ты) хочешь', wollen: 'хотеть', darf: 'можно, разрешено', dürfen: 'иметь право', möchte: 'хотел(а) бы', möchten: 'хотели бы', mag: 'нравится, люблю',
  // frequent verbs
  gehen: 'идти', geht: 'идёт; работает', gehe: '(я) иду', ging: 'шёл', kommen: 'приходить', kommt: 'приходит', komme: '(я) прихожу', machen: 'делать', macht: 'делает', mache: '(я) делаю', mach: 'делай!', gemacht: 'сделал(а)',
  sagen: 'сказать', sagt: 'говорит', sage: '(я) говорю', gesagt: 'сказал(а)', sehen: 'видеть', sieht: 'видит', sehe: '(я) вижу', gesehen: 'увидел(а)', lesen: 'читать', liest: 'читает', lese: '(я) читаю', gelesen: 'прочитал(а)',
  schreiben: 'писать', schreibt: 'пишет', schreibe: '(я) пишу', geschrieben: 'написал(а)', lernen: 'учить, учиться', lernt: 'учит', lerne: '(я) учу', gelernt: 'выучил(а)', arbeiten: 'работать', arbeitet: 'работает', arbeite: '(я) работаю', gearbeitet: 'работал(а)',
  brauchen: 'нуждаться', braucht: 'нужен, нуждается', brauche: '(мне) нужно', finden: 'находить; считать', findet: 'находит', finde: '(я) нахожу; считаю', gefunden: 'нашёл', geben: 'давать', gibt: 'даёт', gab: 'было, имелось', nehmen: 'брать', nimmt: 'берёт', nehme: '(я) беру',
  wissen: 'знать', weiß: 'знаю, знает', weißt: '(ты) знаешь', kennen: 'знать (кого-то)', kennt: 'знает', kenne: '(я) знаю', denken: 'думать', denkt: 'думает', denke: '(я) думаю', glauben: 'верить, полагать', glaubt: 'думает', glaube: '(я) думаю',
  heißen: 'называться', heißt: 'зовут; называется; значит', heiße: '(меня) зовут', spielen: 'играть', spielt: 'играет', fragen: 'спрашивать', fragt: 'спрашивает', frage: '(я) спрашиваю; вопрос', antworten: 'отвечать', antwortet: 'отвечает',
  helfen: 'помогать', hilft: 'помогает', helfe: '(я) помогаю', zeigen: 'показывать', zeigt: 'показывает', bleiben: 'оставаться', bleibt: 'остаётся', stehen: 'стоять', steht: 'стоит; написано', liegen: 'лежать', liegt: 'лежит', sitzen: 'сидеть', sitzt: 'сидит',
  bekommen: 'получать', bekommt: 'получает', bekomme: '(я) получаю', suchen: 'искать', sucht: 'ищет', suche: '(я) ищу', klicken: 'кликать', klickt: 'кликает', klick: 'кликни!', funktionieren: 'работать (о технике)', funktioniert: 'работает',
  benutzen: 'пользоваться', benutzt: 'пользуется', benutze: '(я) пользуюсь', nutzen: 'использовать', nutzt: 'использует', erklären: 'объяснять', erklärt: 'объясняет', verstehen: 'понимать', versteht: 'понимает', verstehe: '(я) понимаю', verstanden: 'понял(а)',
  beginnen: 'начинать', beginnt: 'начинается', zählen: 'считать (по порядку)', zählt: 'считает', fehlen: 'отсутствовать, не хватать', fehlt: 'не хватает', passieren: 'происходить', passiert: 'происходит; произошло', schicken: 'отправлять', schickt: 'отправляет', schicke: '(я) отправляю',
  wohnen: 'жить, проживать', wohnt: 'живёт', wohne: '(я) живу', studieren: 'учиться в вузе', studiert: 'учится в вузе', studiere: '(я) учусь в вузе', tun: 'делать', tut: 'делает', mögen: 'любить, нравиться', drücken: 'нажимать', drückt: 'нажимает', drück: 'нажми!',
  holen: 'приносить, забирать', ruft: 'звонит, зовёт', rufen: 'звать', anrufen: 'позвонить', hören: 'слышать, слушать', hört: 'слышит', höre: '(я) слышу', kaufen: 'покупать', kauft: 'покупает',
  // prepositions and conjunctions
  in: 'в', im: 'в (in dem)', ins: 'в (in das)', an: 'на, у, к', am: 'на, у (an dem); в (о дне)', auf: 'на', aus: 'из', bei: 'у, при', beim: 'при, у (bei dem)', mit: 'с', nach: 'после; в (город); по', von: 'от, из; (род. отношение)', vom: 'от (von dem)', zu: 'к; слишком', zum: 'к (zu dem)', zur: 'к (zu der)',
  für: 'для', ohne: 'без', gegen: 'против', über: 'над; о, про; через', unter: 'под; среди', vor: 'перед; назад (о времени)', hinter: 'за, позади', neben: 'рядом с', zwischen: 'между', durch: 'через; сквозь', um: 'вокруг; в (о времени)', seit: 'с (какого-то времени)', bis: 'до', pro: 'за, в (каждый)', per: 'по, через',
  und: 'и', oder: 'или', aber: 'но', denn: 'ведь, потому что', weil: 'потому что', dass: 'что (союз)', wenn: 'если; когда', ob: 'ли', als: 'когда; чем; как', damit: 'чтобы; с этим', sondern: 'а (не то, а это)', also: 'итак, значит', dann: 'потом, тогда', danach: 'после этого', deshalb: 'поэтому', trotzdem: 'всё же',
  // adverbs and particles
  nicht: 'не', nein: 'нет', ja: 'да', doch: 'всё-таки; же', auch: 'тоже', noch: 'ещё', schon: 'уже', nur: 'только', sehr: 'очень', so: 'так', sofort: 'сразу', immer: 'всегда', nie: 'никогда', oft: 'часто', manchmal: 'иногда', jetzt: 'сейчас', heute: 'сегодня', morgen: 'завтра; утро', gestern: 'вчера',
  hier: 'здесь', da: 'там; тут; так как', dort: 'там', zuerst: 'сначала', später: 'позже', wieder: 'снова', zusammen: 'вместе', allein: 'один, самостоятельно', gern: 'охотно', gerne: 'охотно, с удовольствием', leider: 'к сожалению', vielleicht: 'может быть', natürlich: 'конечно', wirklich: 'действительно', genau: 'точно', ganz: 'совсем, целый', fast: 'почти', etwa: 'примерно',
  bitte: 'пожалуйста', danke: 'спасибо', hallo: 'привет', tschüss: 'пока', okay: 'хорошо, ок', einfach: 'просто; простой', schnell: 'быстро; быстрый', langsam: 'медленно', lange: 'долго', bald: 'скоро', endlich: 'наконец', plötzlich: 'вдруг', dabei: 'при этом', darum: 'поэтому',
  // adjectives
  gut: 'хороший; хорошо', gute: 'хорошая, хорошие', guten: 'хорошего, хорошим', gutes: 'хорошее', schlecht: 'плохой; плохо', neu: 'новый', neue: 'новая, новые', neuen: 'нового, новым', neues: 'новое', alt: 'старый', alte: 'старая, старые', alten: 'старого, старым',
  groß: 'большой', große: 'большая, большие', klein: 'маленький', kleine: 'маленькая', lang: 'длинный', kurz: 'короткий', leicht: 'лёгкий', schwer: 'трудный; тяжёлый', wichtig: 'важный', wichtige: 'важная, важные', kaputt: 'сломанный', kostenlos: 'бесплатный', komisch: 'странный', komische: 'странная', fertig: 'готовый',
  erste: 'первая, первый', erstes: 'первое, первый (ср. р.)', ersten: 'первого, первым', zweite: 'вторая, второй', letzte: 'последняя', nächste: 'следующая', nächsten: 'следующего', ander: 'другой', richtige: 'правильная', falsche: 'неправильная', ganze: 'целая', stark: 'сильный', starkes: 'сильное', schwach: 'слабый', schwaches: 'слабое', sicheres: 'надёжное', froh: 'рад',
  // people, time, everyday nouns
  freund: 'друг', freundin: 'подруга', freunde: 'друзья', mutter: 'мама', vater: 'папа', bruder: 'брат', schwester: 'сестра', eltern: 'родители', lehrer: 'учитель', lehrerin: 'учительница', schule: 'школа', klasse: 'класс', student: 'студент', studentin: 'студентка', uni: 'университет',
  tag: 'день', tage: 'дни', woche: 'неделя', monat: 'месяц', jahr: 'год', jahre: 'годы', stunde: 'час', minute: 'минута', minuten: 'минуты', zeit: 'время', abend: 'вечер', morgens: 'утром', abends: 'вечером', montag: 'понедельник', wochenende: 'выходные', ende: 'конец',
  hause: 'дома (zu Hause)', haus: 'дом', zimmer: 'комната', tisch: 'стол', buch: 'книга', heft: 'тетрадь', hausaufgabe: 'домашнее задание', hausaufgaben: 'домашние задания', frau: 'женщина; госпожа', herr: 'господин', mann: 'мужчина', kind: 'ребёнок', name: 'имя', problem: 'проблема', hilfe: 'помощь', idee: 'идея', beispiel: 'пример',
  einmal: 'один раз; (noch einmal) ещё раз', zweiten: 'второго, втором', letzten: 'последнего, последнем',
  // more frequent forms
  sagte: 'сказал(а)', erklärte: 'объяснил(а)', wollte: 'хотел(а)', durften: 'им (нам) разрешалось, могли', darfst: '(ты) можешь, тебе разрешено', brauchst: '(ты) нуждаешься, тебе нужно',
  allen: 'всем, всех (дат.)', vielen: 'многим, многих (дат.)', eigene: 'собственная, свой', selbst: 'сам; даже', schneller: 'быстрее', einfache: 'простая, простые', welchem: 'каком, какому (дат.)',
  seiner: 'его (дат./род. ж. р.)', echten: 'настоящего, настоящим', altes: 'старое',
  // numbers
  null: 'ноль', eins: 'один', zwei: 'два', drei: 'три', vier: 'четыре', fünf: 'пять', sechs: 'шесть', sieben: 'семь', acht: 'восемь', neun: 'девять', zehn: 'десять', elf: 'одиннадцать', zwölf: 'двенадцать', zwanzig: 'двадцать', hundert: 'сто', tausend: 'тысяча',
  dreizehn: 'тринадцать', vierzehn: 'четырнадцать', fünfzehn: 'пятнадцать', sechzehn: 'шестнадцать', siebzehn: 'семнадцать', achtzehn: 'восемнадцать', neunzehn: 'девятнадцать', fünfundzwanzig: 'двадцать пять', vierundzwanzig: 'двадцать четыре', dreißig: 'тридцать', vierzig: 'сорок', fünfzig: 'пятьдесят', sechzig: 'шестьдесят', siebzig: 'семьдесят', achtzig: 'восемьдесят', neunzig: 'девяносто', dritte: 'третья, третий', stunden: 'часы, часов (мн. от Stunde)', wochen: 'недели, недель',
};
