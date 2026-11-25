import type { Module } from '../types.ts';

// A1.2 pflege 09: toileting — urine, bowel movements, commode (lesson 0); catheter, bag, diarrhoea and constipation (lesson 1).

export const module: Module = {
  id: 'pflege-a12-09-ausscheidung', sphere: 'pflege', level: 'A1.2',
  title: 'Toilette und Ausscheidung', subtitle: 'Деликатная тема: туалет, моча, стул, запор и понос — говорить спокойно и уважительно.',
  words: [
    { id: 'pfl-a12-09-urin', icon: 'FlaskConical', de: 'Urin', pos: 'noun', article: 'der', ru: 'моча', note: 'Разговорно — Wasser lassen (мочиться). der Urinbeutel — мочеприёмник.', example: { de: 'Der Urin ist sehr dunkel.', ru: 'Моча очень тёмная.', cloze: 'Urin' } },
    { id: 'pfl-a12-09-stuhlgang', icon: 'Calendar', de: 'Stuhlgang', pos: 'noun', article: 'der', ru: 'стул, дефекация', parts: ['Stuhl', 'gang'], note: 'Вежливый вопрос: Hatten Sie heute schon Stuhlgang?', example: { de: 'Hatten Sie heute schon Stuhlgang?', ru: 'У вас сегодня уже был стул?', cloze: 'Stuhlgang' } },
    { id: 'pfl-a12-09-toilettenstuhl', icon: 'Armchair', imageQuery: 'commode chair', de: 'Toilettenstuhl', pos: 'noun', article: 'der', plural: 'Toilettenstühle', ru: 'стул-туалет', parts: ['Toiletten', 'stuhl'], example: { de: 'Ich bringe Ihnen den Toilettenstuhl ans Bett.', ru: 'Я привезу вам стул-туалет к кровати.', cloze: 'Toilettenstuhl' } },
    { id: 'pfl-a12-09-steckbecken', icon: 'Inbox', de: 'Steckbecken', pos: 'noun', article: 'das', plural: 'Steckbecken', ru: 'подкладное судно', parts: ['Steck', 'becken'], note: 'Разговорно также: die Bettpfanne.', example: { de: 'Brauchen Sie das Steckbecken?', ru: 'Вам нужно судно?', cloze: 'Steckbecken' } },
    { id: 'pfl-a12-09-urinflasche', icon: 'FlaskRound', de: 'Urinflasche', pos: 'noun', article: 'die', plural: 'Urinflaschen', ru: 'мочеприёмник (утка)', parts: ['Urin', 'flasche'], example: { de: 'Die Urinflasche hängt am Bett.', ru: 'Утка висит на кровати.', cloze: 'Urinflasche' } },
    { id: 'pfl-a12-09-vorlage', icon: 'Layers', de: 'Vorlage', pos: 'noun', article: 'die', plural: 'Vorlagen', ru: 'урологическая прокладка; образец', note: 'die Inkontinenzvorlage — прокладка при недержании.', example: { de: 'Ich wechsle die Vorlage.', ru: 'Я поменяю прокладку.', cloze: 'Vorlage' } },
    { id: 'pfl-a12-09-spuelen', icon: 'Waves', de: 'spülen', pos: 'verb', ru: 'смывать; полоскать', forms: 'er spült · hat gespült', example: { de: 'Bitte vergessen Sie nicht zu spülen.', ru: 'Пожалуйста, не забудьте смыть.', cloze: 'spülen' } },
    { id: 'pfl-a12-09-peinlich', icon: 'Annoyed', de: 'peinlich', pos: 'adj', ru: 'неловкий, стыдный', note: 'Das muss Ihnen nicht peinlich sein. — Не нужно стесняться.', example: { de: 'Das muss Ihnen nicht peinlich sein.', ru: 'Вам не нужно стесняться.', cloze: 'peinlich' } },

    { id: 'pfl-a12-09-katheter', icon: 'Cable', imageQuery: 'urinary catheter', de: 'Katheter', pos: 'noun', article: 'der', plural: 'Katheter', ru: 'катетер', note: 'der Blasenkatheter — мочевой катетер.', example: { de: 'Herr Nowak hat einen Katheter.', ru: 'У господина Новака катетер.', cloze: 'Katheter' } },
    { id: 'pfl-a12-09-beutel', icon: 'ShoppingBag', de: 'Beutel', pos: 'noun', article: 'der', plural: 'Beutel', ru: 'мешок, пакет', note: 'der Urinbeutel — мешок-мочеприёмник.', example: { de: 'Der Beutel ist voll.', ru: 'Мешок полный.', cloze: 'Beutel' } },
    { id: 'pfl-a12-09-leeren', icon: 'Trash', de: 'leeren', pos: 'verb', ru: 'опорожнять, освобождать', forms: 'er leert · hat geleert', example: { de: 'Tom leert den Beutel.', ru: 'Том опорожняет мешок.', cloze: 'leert' } },
    { id: 'pfl-a12-09-durchfall', icon: 'Waves', de: 'Durchfall', pos: 'noun', article: 'der', ru: 'понос, диарея', parts: ['Durch', 'fall'], example: { de: 'Seit gestern hat sie Durchfall.', ru: 'Со вчерашнего дня у неё понос.', cloze: 'Durchfall' } },
    { id: 'pfl-a12-09-verstopfung', icon: 'Ban', de: 'Verstopfung', pos: 'noun', article: 'die', plural: 'Verstopfungen', ru: 'запор', example: { de: 'Gegen Verstopfung hilft viel Wasser.', ru: 'От запора помогает много воды.', cloze: 'Verstopfung' } },
    { id: 'pfl-a12-09-riechen', icon: 'Wind', de: 'riechen', pos: 'verb', ru: 'пахнуть; нюхать', forms: 'es riecht · hat gerochen', example: { de: 'Der Urin riecht stark.', ru: 'Моча сильно пахнет.', cloze: 'riecht' } },
    { id: 'pfl-a12-09-dunkel', icon: 'Moon', de: 'dunkel', pos: 'adj', ru: 'тёмный', note: 'Перед существительным: dunkler Urin (без -e-).', example: { de: 'Es ist schon dunkel draußen.', ru: 'На улице уже темно.', cloze: 'dunkel' } },
    { id: 'pfl-a12-09-muessen', icon: 'CircleAlert', de: 'müssen', pos: 'verb', ru: 'быть должным; (разг.) хотеть в туалет', forms: 'er muss · hat gemusst', note: 'Ich muss mal. — Мне надо в туалет (разговорно).', example: { de: 'Ich muss mal auf die Toilette.', ru: 'Мне надо в туалет.', cloze: 'muss' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Kein Grund zur Scham',
      de: `Frau Wolf klingelt in der Nacht. „Ich muss mal“, sagt sie leise. Sie kann noch nicht allein ins Bad gehen. Olena bringt den Toilettenstuhl ans Bett und hilft ihr.

Danach fragt Olena: „Hatten Sie heute schon Stuhlgang?“ Frau Wolf wird rot. „Das ist mir peinlich.“ Olena sagt: „Das muss Ihnen nicht peinlich sein. Das ist für uns ganz normal.“

Frau Wolf sagt: „Nein, seit zwei Tagen nicht.“ Olena schreibt es in die Kurve. Morgen früh spült sie den Toilettenstuhl und wechselt die Vorlage.`,
      ru: `Ночью госпожа Вольф нажимает кнопку вызова. «Мне надо в туалет», — тихо говорит она. Она пока не может сама ходить в ванную. Олена подвозит к кровати стул-туалет и помогает ей.

Потом Олена спрашивает: «У вас сегодня уже был стул?» Госпожа Вольф краснеет. «Мне неловко». Олена говорит: «Вам не нужно стесняться. Для нас это совершенно нормально».

Госпожа Вольф говорит: «Нет, уже два дня не было». Олена записывает это в карту. Завтра утром она промоет стул-туалет и поменяет прокладку.`,
      gloss: { wolf: 'Вольф (фамилия)', olena: 'Олена (имя)', frau: 'госпожа', klingelt: 'нажимает кнопку вызова', nacht: 'ночь', mal: '(ich muss mal) мне надо в туалет', sagt: 'говорит', leise: 'тихо', kann: 'может', noch: 'ещё, пока', allein: 'сама, одна', ins: 'в (in + das)', bad: 'ванная', gehen: 'идти', bringt: 'приносит, подвозит', ans: 'к (an + das)', bett: 'кровать', hilft: 'помогает', ihr: 'ей', danach: 'потом', fragt: 'спрашивает', hatten: 'был(о) у вас', heute: 'сегодня', schon: 'уже', wird: 'становится', rot: 'красный; (wird rot) краснеет', mir: 'мне', ihnen: 'вам', für: 'для', uns: 'нас', ganz: 'совершенно', normal: 'нормальный', seit: 'уже, с', zwei: 'два', tagen: 'дня (дат.)', schreibt: 'пишет', es: 'это', kurve: 'карта пациента', morgen: 'завтра', früh: 'рано; (morgen früh) завтра утром', wechselt: 'меняет', kein: 'никакой', grund: 'причина, повод', zur: 'для (zu + der)', scham: 'стыд', was: 'что', wie: 'как', warum: 'почему', wo: 'где', steckbecken: 'подкладное судно', rollstuhl: 'инвалидная коляска', drei: 'три', woche: 'неделя', müde: 'устала', schmerzen: 'боли' },
      questions: [
        { q: 'Was bringt Olena ans Bett?', ru: 'Что Олена привозит к кровати?', options: ['Den Toilettenstuhl', 'Den Rollstuhl', 'Das Steckbecken'], answer: 'Den Toilettenstuhl' },
        { q: 'Warum wird Frau Wolf rot?', ru: 'Почему госпожа Вольф краснеет?', options: ['Es ist ihr peinlich.', 'Sie hat Fieber.', 'Sie ist müde.'], answer: 'Es ist ihr peinlich.' },
        { q: 'Seit wann hatte Frau Wolf keinen Stuhlgang?', ru: 'Сколько у госпожи Вольф не было стула?', options: ['Seit zwei Tagen', 'Seit drei Tagen', 'Seit einer Woche'], answer: 'Seit zwei Tagen' },
      ],
      translate: [
        { de: 'Ich muss mal auf die Toilette.', ru: 'Мне надо в туалет.', wrongRu: ['Мне надо в ванную.', 'Мне не надо в туалет.'] },
        { de: 'Das muss Ihnen nicht peinlich sein.', ru: 'Вам не нужно стесняться.', wrongRu: ['Вам должно быть стыдно.', 'Мне не нужно стесняться.'] },
        { de: 'Brauchen Sie das Steckbecken?', ru: 'Вам нужно судно?', wrongRu: ['Вам нужна утка?', 'Вам нужен стул-туалет?'] },
      ],
    },
    {
      lesson: 1, title: 'Der Katheter',
      de: `Herr Nowak hat nach der Operation einen Katheter. Der Urin läuft in einen Beutel am Bett. Am Morgen ist der Beutel voll. Tom leert ihn und misst die Menge: achthundert Milliliter.

„Der Urin ist sehr dunkel und riecht stark“, sagt Tom zu Olena. „Herr Nowak trinkt zu wenig.“ Olena bringt Herrn Nowak eine große Flasche Wasser.

Im Zimmer nebenan hat Frau Wolf jetzt Durchfall. Vorher hatte sie Verstopfung, jetzt ist es umgekehrt. Olena sagt es Doktor Wagner bei der Visite.`,
      ru: `У господина Новака после операции катетер. Моча стекает в мешок на кровати. Утром мешок полный. Том опорожняет его и измеряет количество: восемьсот миллилитров.

«Моча очень тёмная и сильно пахнет, — говорит Том Олене. — Господин Новак пьёт слишком мало». Олена приносит господину Новаку большую бутылку воды.

В соседней палате у госпожи Вольф теперь понос. Раньше у неё был запор, теперь наоборот. Олена сообщает об этом доктору Вагнеру на обходе.`,
      gloss: { normal: 'нормальный', nowak: 'Новак (фамилия)', tom: 'Том (имя)', olena: 'Олена (имя)', wolf: 'Вольф (фамилия)', wagner: 'Вагнер (фамилия)', doktor: 'доктор', herr: 'господин', herrn: 'господину (дат.)', frau: 'госпожа', nach: 'после', operation: 'операция', läuft: 'бежит; стекает', am: 'на; (am Morgen) утром', bett: 'кровать', morgen: 'утро', voll: 'полный', ihn: 'его', misst: 'измеряет', menge: 'количество', achthundert: 'восемьсот', milliliter: 'миллилитр(ов)', sagt: 'говорит', zu: 'к; (sagt zu Olena) говорит Олене; (zu wenig) слишком мало', trinkt: 'пьёт', wenig: 'мало', bringt: 'приносит', große: 'большую', flasche: 'бутылка', wasser: 'вода', zimmer: 'палата', nebenan: 'по соседству', jetzt: 'теперь', vorher: 'раньше', hatte: 'было, имела', umgekehrt: 'наоборот', es: 'это', bei: 'на, при', visite: 'врачебный обход', was: 'что', wie: 'как, какой', viel: 'много; (wie viel) сколько', wer: 'кто', hell: 'светлый', fünfhundert: 'пятьсот', tausend: 'тысяча', saft: 'сок', tee: 'чай' },
      questions: [
        { q: 'Wie viel Urin ist im Beutel?', ru: 'Сколько мочи в мешке?', options: ['Achthundert Milliliter', 'Fünfhundert Milliliter', 'Tausend Milliliter'], answer: 'Achthundert Milliliter' },
        { q: 'Wie ist der Urin?', ru: 'Какая моча?', options: ['Dunkel', 'Hell', 'Normal'], answer: 'Dunkel' },
        { q: 'Was bringt Olena Herrn Nowak?', ru: 'Что Олена приносит господину Новаку?', options: ['Eine Flasche Wasser', 'Einen Tee', 'Einen Saft'], answer: 'Eine Flasche Wasser' },
      ],
      translate: [
        { de: 'Der Beutel ist voll.', ru: 'Мешок полный.', wrongRu: ['Мешок пустой.', 'Стакан полный.'] },
        { de: 'Tom leert den Beutel.', ru: 'Том опорожняет мешок.', wrongRu: ['Том меняет мешок.', 'Олена опорожняет мешок.'] },
        { de: 'Seit gestern hat sie Durchfall.', ru: 'Со вчерашнего дня у неё понос.', wrongRu: ['Со вчерашнего дня у неё запор.', 'Со вчерашнего дня у него понос.'] },
      ],
    },
  ],
};
