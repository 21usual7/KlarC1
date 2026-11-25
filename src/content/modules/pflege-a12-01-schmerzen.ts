import type { Module } from '../types.ts';

// A1.2 pflege 01: asking about pain — how strong, since when, what kind (lesson 0); where, what helps (lesson 1).

export const module: Module = {
  id: 'pflege-a12-01-schmerzen', sphere: 'pflege', level: 'A1.2',
  title: 'Nach Schmerzen fragen', subtitle: 'Где болит, как сильно, с каких пор и что помогает: расспросить пациента о боли.',
  words: [
    { id: 'pfl-a12-01-stark', icon: 'Zap', de: 'stark', pos: 'adj', ru: 'сильный', note: 'starke Schmerzen — сильные боли. Противоположность — leicht (лёгкий).', collocation: { de: 'starke Schmerzen', ru: 'сильные боли' }, example: { de: 'Die Schmerzen sind sehr stark.', ru: 'Боли очень сильные.', cloze: 'stark' } },
    { id: 'pfl-a12-01-leicht', icon: 'Feather', de: 'leicht', pos: 'adj', ru: 'лёгкий, слабый; лёгкий (по весу)', example: { de: 'Ich habe nur leichte Schmerzen.', ru: 'У меня только слабая боль.', cloze: 'leichte' } },
    { id: 'pfl-a12-01-skala', icon: 'Ruler', de: 'Skala', pos: 'noun', article: 'die', plural: 'Skalen', ru: 'шкала', note: 'Schmerzskala von 0 bis 10 — шкала боли от 0 до 10.', example: { de: 'Auf einer Skala von null bis zehn: Wie stark ist der Schmerz?', ru: 'По шкале от нуля до десяти: насколько сильная боль?', cloze: 'Skala' } },
    { id: 'pfl-a12-01-seit', icon: 'History', de: 'seit', pos: 'phrase', ru: 'с (какого-то времени), уже (сколько-то)', note: 'seit + Dat: seit gestern — со вчерашнего дня, seit zwei Tagen — уже два дня.', collocation: { de: 'seit gestern', ru: 'со вчерашнего дня', accept: ['seit zwei Tagen'] }, example: { de: 'Seit wann haben Sie Schmerzen?', ru: 'С каких пор у вас боли?', cloze: 'Seit' } },
    { id: 'pfl-a12-01-gestern', icon: 'CalendarMinus', de: 'gestern', pos: 'adv', ru: 'вчера', note: 'vorgestern — позавчера.', example: { de: 'Gestern ging es mir besser.', ru: 'Вчера мне было лучше.', cloze: 'Gestern' } },
    { id: 'pfl-a12-01-ploetzlich', icon: 'Zap', de: 'plötzlich', pos: 'adj', ru: 'внезапный, вдруг', example: { de: 'Der Schmerz kam ganz plötzlich.', ru: 'Боль пришла совсем внезапно.', cloze: 'plötzlich' } },
    { id: 'pfl-a12-01-stechen', icon: 'Syringe', de: 'stechen', pos: 'verb', ru: 'колоть; (о боли) колоть, пронзать', forms: 'es sticht · hat gestochen', note: 'Es sticht hier. — Здесь колет. stechende Schmerzen — колющие боли.', example: { de: 'Es sticht in der Brust.', ru: 'Колет в груди.', cloze: 'sticht' } },
    { id: 'pfl-a12-01-brennen', icon: 'Flame', de: 'brennen', pos: 'verb', ru: 'гореть; (о боли) жечь', forms: 'es brennt · hat gebrannt', example: { de: 'Die Wunde brennt.', ru: 'Рана жжёт.', cloze: 'brennt' } },

    { id: 'pfl-a12-01-kopfschmerzen', icon: 'Brain', de: 'Kopfschmerzen', pos: 'noun', article: 'die', pluralOnly: true, ru: 'головная боль', parts: ['Kopf', 'schmerzen'], collocation: { de: 'Kopfschmerzen haben', ru: 'страдать головной болью' }, example: { de: 'Ich habe seit heute Morgen Kopfschmerzen.', ru: 'У меня с утра болит голова.', cloze: 'Kopfschmerzen' } },
    { id: 'pfl-a12-01-bauchschmerzen', icon: 'CircleDot', de: 'Bauchschmerzen', pos: 'noun', article: 'die', pluralOnly: true, ru: 'боль в животе', parts: ['Bauch', 'schmerzen'], example: { de: 'Nach dem Essen hat er Bauchschmerzen.', ru: 'После еды у него болит живот.', cloze: 'Bauchschmerzen' } },
    { id: 'pfl-a12-01-stelle', icon: 'MapPin', de: 'Stelle', pos: 'noun', article: 'die', plural: 'Stellen', ru: 'место; должность', note: 'An welcher Stelle? — В каком месте?', example: { de: 'Zeigen Sie mir bitte die Stelle.', ru: 'Покажите мне, пожалуйста, это место.', cloze: 'Stelle' } },
    { id: 'pfl-a12-01-druecken', icon: 'Hand', de: 'drücken', pos: 'verb', ru: 'нажимать, давить', forms: 'er drückt · hat gedrückt', note: 'Tut es weh, wenn ich hier drücke? — Больно, когда я здесь нажимаю?', example: { de: 'Tut es weh, wenn ich hier drücke?', ru: 'Больно, когда я здесь нажимаю?', cloze: 'drücke' } },
    { id: 'pfl-a12-01-aushalten', icon: 'Dumbbell', de: 'aushalten', pos: 'verb', ru: 'терпеть, выдерживать', forms: 'er hält aus · hat ausgehalten', note: 'Ich halte das nicht aus! — Я не могу это терпеть!', example: { de: 'Ich kann die Schmerzen nicht mehr aushalten.', ru: 'Я больше не могу терпеть боль.', cloze: 'aushalten' } },
    { id: 'pfl-a12-01-schmerzmittel', icon: 'Pill', imageQuery: 'painkiller pills', de: 'Schmerzmittel', pos: 'noun', article: 'das', plural: 'Schmerzmittel', ru: 'обезболивающее', parts: ['Schmerz', 'mittel'], collocation: { de: 'ein Schmerzmittel bekommen', ru: 'получить обезболивающее' }, example: { de: 'Der Arzt gibt Ihnen ein Schmerzmittel.', ru: 'Врач даст вам обезболивающее.', cloze: 'Schmerzmittel' } },
    { id: 'pfl-a12-01-waermflasche', icon: 'Heater', imageQuery: 'hot water bottle', de: 'Wärmflasche', pos: 'noun', article: 'die', plural: 'Wärmflaschen', ru: 'грелка', parts: ['Wärm', 'flasche'], example: { de: 'Eine Wärmflasche hilft gegen Bauchschmerzen.', ru: 'Грелка помогает от боли в животе.', cloze: 'Wärmflasche' } },
    { id: 'pfl-a12-01-bewegen', icon: 'Move', de: 'bewegen', pos: 'verb', ru: 'двигать; (sich bewegen) двигаться', forms: 'er bewegt · hat bewegt', note: 'Bewegen Sie bitte die Finger. — Пошевелите, пожалуйста, пальцами.', example: { de: 'Können Sie das Bein bewegen?', ru: 'Вы можете пошевелить ногой?', cloze: 'bewegen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wie stark ist der Schmerz?',
      de: `Herr Yilmaz ist seit gestern auf Station drei. Er ist fünfundfünfzig Jahre alt und hat Probleme mit dem Magen. Am Morgen klingelt er. Olena kommt sofort.

„Ich habe Schmerzen“, sagt Herr Yilmaz. Olena fragt: „Seit wann haben Sie die Schmerzen?“ – „Seit einer Stunde. Sie kamen ganz plötzlich.“

„Auf einer Skala von null bis zehn: Wie stark ist der Schmerz?“ Herr Yilmaz denkt kurz nach. „Sieben. Es sticht und brennt.“ Olena schreibt alles auf. Gestern waren die Schmerzen nur leicht. Heute sind sie stark.`,
      ru: `Господин Йылмаз со вчерашнего дня в третьем отделении. Ему пятьдесят пять лет, у него проблемы с желудком. Утром он нажимает кнопку вызова. Олена приходит сразу.

«У меня боли», — говорит господин Йылмаз. Олена спрашивает: «С каких пор у вас боли?» — «Уже час. Они начались совсем внезапно».

«По шкале от нуля до десяти: насколько сильная боль?» Господин Йылмаз недолго думает. «Семь. Колет и жжёт». Олена всё записывает. Вчера боли были лишь слабыми. Сегодня они сильные.`,
      gloss: { kam: 'пришёл, пришла', yilmaz: 'Йылмаз (фамилия)', olena: 'Олена (имя)', herr: 'господин', fünfundfünfzig: 'пятьдесят пять', jahre: 'лет, годы', alt: 'старый; (… Jahre alt) … лет', probleme: 'проблемы', magen: 'желудок', morgen: 'утро', klingelt: 'нажимает кнопку вызова', kommt: 'приходит', sofort: 'сразу', sagt: 'говорит', fragt: 'спрашивает', wann: 'когда; (seit wann) с каких пор', einer: 'одного, одной', stunde: 'час', kamen: 'пришли, начались', ganz: 'совсем', null: 'ноль', bis: 'до', zehn: 'десять', denkt: 'думает; (denkt nach) обдумывает', nach: '(denkt … nach) обдумывает', kurz: 'коротко, недолго', sieben: 'семь', schreibt: 'пишет; (schreibt … auf) записывает', alles: 'всё', waren: 'были', nur: 'только', heute: 'сегодня', drei: 'три', zwei: 'два', tagen: 'дней (дат. мн.)', mit: 'с', woche: 'неделя; (seit einer Woche) уже неделю', schmerz: 'боль', schmerzen: 'боли', station: 'отделение', welche: 'какие', zahl: 'число' },
      questions: [
        { q: 'Seit wann ist Herr Yilmaz auf Station drei?', ru: 'С каких пор господин Йылмаз в третьем отделении?', options: ['Seit gestern', 'Seit einer Woche', 'Seit zwei Tagen'], answer: 'Seit gestern' },
        { q: 'Welche Zahl sagt Herr Yilmaz?', ru: 'Какое число называет господин Йылмаз?', options: ['Sieben', 'Zehn', 'Drei'], answer: 'Sieben' },
        { q: 'Wie waren die Schmerzen gestern?', ru: 'Какими были боли вчера?', options: ['Leicht', 'Stark', 'Plötzlich'], answer: 'Leicht' },
      ],
      translate: [
        { de: 'Seit wann haben Sie Schmerzen?', ru: 'С каких пор у вас боли?', wrongRu: ['Где у вас боли?', 'Как долго будут боли?'] },
        { de: 'Der Schmerz kam ganz plötzlich.', ru: 'Боль пришла совсем внезапно.', wrongRu: ['Боль ушла совсем внезапно.', 'Боль пришла очень медленно.'] },
        { de: 'Heute sind die Schmerzen stark.', ru: 'Сегодня боли сильные.', wrongRu: ['Сегодня боли слабые.', 'Вчера боли были сильные.', 'Сегодня болей нет.'] },
      ],
    },
    {
      lesson: 1, title: 'Was hilft?',
      de: `Olena fragt weiter: „Wo genau tut es weh? Zeigen Sie mir bitte die Stelle.“ Herr Yilmaz zeigt auf den Bauch. „Hier. Und ich habe auch Kopfschmerzen.“

Olena drückt vorsichtig auf den Bauch. „Tut es weh, wenn ich hier drücke?“ – „Ja, sehr!“ Dann sagt Herr Yilmaz: „Ich kann die Schmerzen nicht mehr aushalten.“

Olena ruft Doktor Wagner. Er sagt: „Herr Yilmaz bekommt ein Schmerzmittel.“ Olena bringt auch eine Wärmflasche gegen die Bauchschmerzen. Nach einer halben Stunde kann Herr Yilmaz die Beine wieder bewegen und schläft ein bisschen.`,
      ru: `Олена продолжает спрашивать: «Где именно болит? Покажите мне, пожалуйста, это место». Господин Йылмаз показывает на живот. «Здесь. И у меня ещё болит голова».

Олена осторожно нажимает на живот. «Больно, когда я здесь нажимаю?» — «Да, очень!» Потом господин Йылмаз говорит: «Я больше не могу терпеть боль».

Олена зовёт доктора Вагнера. Он говорит: «Господину Йылмазу дадим обезболивающее». Олена приносит ещё и грелку от боли в животе. Через полчаса господин Йылмаз снова может двигать ногами и немного спит.`,
      gloss: { herrn: 'господина (вин.)', olena: 'Олена (имя)', yilmaz: 'Йылмаз (фамилия)', herr: 'господин', doktor: 'доктор', wagner: 'Вагнер (фамилия)', fragt: 'спрашивает', weiter: 'дальше; (fragt weiter) продолжает спрашивать', genau: 'точно, именно', tut: '(tut weh) болит', weh: '(tut weh) болит', zeigt: 'показывает', vorsichtig: 'осторожно', wenn: 'когда, если', dann: 'потом, затем', sagt: 'говорит', kann: 'может, могу', mehr: '(nicht mehr) больше не', ruft: 'зовёт', bekommt: 'получает', bringt: 'приносит', gegen: 'против, от', nach: 'через, после', einer: 'одной', halben: 'половины; (nach einer halben Stunde) через полчаса', stunde: 'час', beine: 'ноги', wieder: 'снова', schläft: 'спит', bisschen: '(ein bisschen) немного', wo: 'где', was: 'что', wen: 'кого', hilft: 'помогает', tee: 'чай', rücken: 'спина', bauch: 'живот', kopf: 'голова', decke: 'одеяло', tom: 'Том (имя)' },
      questions: [
        { q: 'Wo hat Herr Yilmaz Schmerzen?', ru: 'Где у господина Йылмаза боли?', options: ['Im Bauch und im Kopf', 'Im Rücken', 'Nur im Kopf'], answer: 'Im Bauch und im Kopf' },
        { q: 'Wen ruft Olena?', ru: 'Кого зовёт Олена?', options: ['Doktor Wagner', 'Tom', 'Herrn Yilmaz'], answer: 'Doktor Wagner' },
        { q: 'Was bringt Olena gegen die Bauchschmerzen?', ru: 'Что Олена приносит от боли в животе?', options: ['Eine Wärmflasche', 'Einen Tee', 'Eine Decke'], answer: 'Eine Wärmflasche' },
      ],
      translate: [
        { de: 'Zeigen Sie mir bitte die Stelle.', ru: 'Покажите мне, пожалуйста, это место.', wrongRu: ['Скажите мне, пожалуйста, где это место.', 'Покажите мне, пожалуйста, руку.'] },
        { de: 'Tut es weh, wenn ich hier drücke?', ru: 'Больно, когда я здесь нажимаю?', wrongRu: ['Больно, когда вы здесь нажимаете?', 'Больно, когда я здесь трогаю?'] },
        { de: 'Herr Yilmaz bekommt ein Schmerzmittel.', ru: 'Господин Йылмаз получает обезболивающее.', wrongRu: ['Господин Йылмаз не хочет обезболивающее.', 'Господин Йылмаз получает грелку.'] },
      ],
    },
  ],
};
