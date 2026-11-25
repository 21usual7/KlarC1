import type { Module } from '../types.ts';

// A2.1 pflege 07: nutrition and diabetes — carbohydrates, low blood sugar (lesson 0); diet, weight, meals (lesson 1).

export const module: Module = {
  id: 'pflege-a21-07-ernaehrung', sphere: 'pflege', level: 'A2.1',
  title: 'Ernährung und Diabetes', subtitle: 'Питание при диабете: углеводы, гипогликемия, диета и регулярные приёмы пищи.',
  words: [
    { id: 'pfl-a21-07-ernaehrung', icon: 'Apple', de: 'Ernährung', pos: 'noun', article: 'die', ru: 'питание', example: { de: 'Eine gesunde Ernährung ist bei Diabetes wichtig.', ru: 'При диабете важно здоровое питание.', cloze: 'Ernährung' } },
    { id: 'pfl-a21-07-kohlenhydrat', icon: 'Wheat', de: 'Kohlenhydrat', pos: 'noun', article: 'das', plural: 'Kohlenhydrate', ru: 'углевод', note: 'Обычно мн. ч.: Brot und Nudeln haben viele Kohlenhydrate.', example: { de: 'Brot hat viele Kohlenhydrate.', ru: 'В хлебе много углеводов.', cloze: 'Kohlenhydrate' } },
    { id: 'pfl-a21-07-unterzucker', icon: 'ArrowDownCircle', de: 'Unterzucker', pos: 'noun', article: 'der', ru: 'гипогликемия, низкий сахар', parts: ['Unter', 'zucker'], note: 'Признаки: пот, дрожь, голод, спутанность.', example: { de: 'Er zittert und schwitzt – vielleicht hat er Unterzucker.', ru: 'Он дрожит и потеет — может, у него низкий сахар.', cloze: 'Unterzucker' } },
    { id: 'pfl-a21-07-vollkornbrot', icon: 'Wheat', imageQuery: 'whole grain bread', de: 'Vollkornbrot', pos: 'noun', article: 'das', plural: 'Vollkornbrote', ru: 'цельнозерновой хлеб', parts: ['Vollkorn', 'brot'], example: { de: 'Vollkornbrot ist besser als Weißbrot.', ru: 'Цельнозерновой хлеб лучше белого.', cloze: 'Vollkornbrot' } },
    { id: 'pfl-a21-07-obst', icon: 'Apple', imageQuery: 'fruit bowl', de: 'Obst', pos: 'noun', article: 'das', ru: 'фрукты', note: 'Собирательное, без мн. ч.', example: { de: 'Zum Nachtisch gibt es Obst.', ru: 'На десерт фрукты.', cloze: 'Obst' } },
    { id: 'pfl-a21-07-gemuese', icon: 'Carrot', imageQuery: 'vegetables', de: 'Gemüse', pos: 'noun', article: 'das', ru: 'овощи', note: 'Собирательное, без мн. ч.', example: { de: 'Essen Sie viel Gemüse.', ru: 'Ешьте много овощей.', cloze: 'Gemüse' } },
    { id: 'pfl-a21-07-fett', icon: 'Droplet', de: 'Fett', pos: 'noun', article: 'das', plural: 'Fette', ru: 'жир', example: { de: 'Die Wurst hat viel Fett.', ru: 'В колбасе много жира.', cloze: 'Fett' } },
    { id: 'pfl-a21-07-ausgewogen', icon: 'Scale', de: 'ausgewogen', pos: 'adj', ru: 'сбалансированный', example: { de: 'Er braucht eine ausgewogene Ernährung.', ru: 'Ему нужно сбалансированное питание.', cloze: 'ausgewogene' } },

    { id: 'pfl-a21-07-insulin', icon: 'Syringe', imageQuery: 'insulin pen', de: 'Insulin', pos: 'noun', article: 'das', ru: 'инсулин', note: 'der Insulinpen — инсулиновая ручка.', example: { de: 'Vor dem Essen spritzt er Insulin.', ru: 'Перед едой он колет инсулин.', cloze: 'Insulin' } },
    { id: 'pfl-a21-07-diaet', icon: 'Salad', de: 'Diät', pos: 'noun', article: 'die', plural: 'Diäten', ru: 'диета', collocation: { de: 'eine Diät machen', ru: 'сидеть на диете' }, example: { de: 'Der Arzt hat eine Diät angeordnet.', ru: 'Врач назначил диету.', cloze: 'Diät' } },
    { id: 'pfl-a21-07-abnehmen', icon: 'TrendingDown', de: 'abnehmen', pos: 'verb', ru: 'худеть; снимать', forms: 'er nimmt ab · hat abgenommen', note: 'Также «снимать»: den Verband abnehmen; «брать кровь»: Blut abnehmen.', example: { de: 'Er hat drei Kilo abgenommen.', ru: 'Он похудел на три килограмма.', cloze: 'abgenommen' } },
    { id: 'pfl-a21-07-zunehmen', icon: 'TrendingUp', de: 'zunehmen', pos: 'verb', ru: 'поправляться, набирать вес', forms: 'er nimmt zu · hat zugenommen', example: { de: 'Im Krankenhaus hat sie zugenommen.', ru: 'В больнице она поправилась.', cloze: 'zugenommen' } },
    { id: 'pfl-a21-07-kalorie', icon: 'Flame', de: 'Kalorie', pos: 'noun', article: 'die', plural: 'Kalorien', ru: 'калория', example: { de: 'Kuchen hat viele Kalorien.', ru: 'В пироге много калорий.', cloze: 'Kalorien' } },
    { id: 'pfl-a21-07-getraenk', icon: 'CupSoda', de: 'Getränk', pos: 'noun', article: 'das', plural: 'Getränke', ru: 'напиток', example: { de: 'Süße Getränke sind bei Diabetes schlecht.', ru: 'Сладкие напитки при диабете вредны.', cloze: 'Getränke' } },
    { id: 'pfl-a21-07-mahlzeit', icon: 'UtensilsCrossed', de: 'Mahlzeit', pos: 'noun', article: 'die', plural: 'Mahlzeiten', ru: 'приём пищи', note: 'Mahlzeit! — разговорное приветствие в обед на работе.', example: { de: 'Er isst drei Mahlzeiten am Tag.', ru: 'Он ест три раза в день.', cloze: 'Mahlzeiten' } },
    { id: 'pfl-a21-07-zwischenmahlzeit', icon: 'Cookie', de: 'Zwischenmahlzeit', pos: 'noun', article: 'die', plural: 'Zwischenmahlzeiten', ru: 'перекус', parts: ['Zwischen', 'mahlzeit'], example: { de: 'Am Nachmittag gibt es eine kleine Zwischenmahlzeit.', ru: 'Днём будет небольшой перекус.', cloze: 'Zwischenmahlzeit' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Unterzucker!',
      de: `Es ist elf Uhr. Olena geht in Zimmer vier. Herr Yilmaz sitzt im Bett. Er zittert, schwitzt und spricht ein bisschen verwirrt. „Mir ist so komisch“, sagt er.

Olena denkt sofort: Unterzucker! Sie misst den Blutzucker. Der Wert ist sehr niedrig. Sie gibt ihm schnell ein Glas Orangensaft und ein Stück Traubenzucker. Nach zehn Minuten geht es ihm besser.

„Haben Sie heute Morgen gefrühstückt?“, fragt Olena. „Nein, ich hatte keinen Hunger. Aber das Insulin habe ich gespritzt.“ Olena erklärt: „Nach dem Insulin müssen Sie immer etwas essen. Am besten Vollkornbrot. Es hat Kohlenhydrate, die langsam ins Blut gehen.“`,
      ru: `Одиннадцать часов. Олена заходит в палату четыре. Господин Йылмаз сидит в кровати. Он дрожит, потеет и говорит немного бессвязно. «Мне как-то странно», — говорит он.

Олена сразу думает: гипогликемия! Она измеряет сахар. Показатель очень низкий. Она быстро даёт ему стакан апельсинового сока и кусочек глюкозы. Через десять минут ему лучше.

«Вы сегодня утром завтракали?» — спрашивает Олена. «Нет, я не был голоден. Но инсулин я уколол». Олена объясняет: «После инсулина нужно обязательно что-то съесть. Лучше всего цельнозерновой хлеб. В нём углеводы, которые медленно поступают в кровь».`,
      gloss: { herrn: 'господина', olena: 'Олена (имя)', yilmaz: 'Йылмаз (фамилия)', herr: 'господин', elf: 'одиннадцать', uhr: 'час', geht: 'идёт; (geht es ihm besser) ему лучше', zimmer: 'палата', vier: 'четыре', sitzt: 'сидит', bett: 'кровать', zittert: 'дрожит', schwitzt: 'потеет', spricht: 'говорит', bisschen: '(ein bisschen) немного', verwirrt: 'спутанно, растерянно', mir: 'мне', so: 'так', komisch: 'странно', sagt: 'говорит', denkt: 'думает', sofort: 'сразу', misst: 'измеряет', blutzucker: 'сахар крови', wert: 'показатель', niedrig: 'низкий', gibt: 'даёт', ihm: 'ему', schnell: 'быстро', glas: 'стакан', orangensaft: 'апельсиновый сок', stück: 'кусок', traubenzucker: 'глюкоза, виноградный сахар', nach: 'через; после', zehn: 'десять', minuten: 'минут', es: 'оно, это', besser: 'лучше', heute: 'сегодня', morgen: 'утро; (heute Morgen) сегодня утром', gefrühstückt: 'завтракали', fragt: 'спрашивает', hatte: 'имел', keinen: 'никакого', hunger: 'голод', aber: 'но', habe: 'вспом. глагол', gespritzt: 'уколол', erklärt: 'объясняет', müssen: 'должны', immer: 'всегда', etwas: 'что-нибудь', essen: 'есть', besten: '(am besten) лучше всего', die: 'которые', langsam: 'медленно', ins: 'в (in + das)', blut: 'кровь', gehen: 'идут, поступают', was: 'что', wie: 'как, какой', warum: 'почему', hoch: 'высокий', normal: 'нормальный', tee: 'чай', wasser: 'вода', kuchen: 'пирог', durst: 'жажда', müde: 'уставший' },
      questions: [
        { q: 'Wie ist der Blutzucker von Herrn Yilmaz?', ru: 'Какой сахар у господина Йылмаза?', options: ['Sehr niedrig', 'Sehr hoch', 'Normal'], answer: 'Sehr niedrig' },
        { q: 'Was gibt Olena ihm?', ru: 'Что даёт ему Олена?', options: ['Orangensaft und Traubenzucker', 'Tee und Kuchen', 'Wasser'], answer: 'Orangensaft und Traubenzucker' },
        { q: 'Warum hat er Unterzucker?', ru: 'Почему у него низкий сахар?', options: ['Er hat Insulin gespritzt, aber nicht gefrühstückt.', 'Er hat zu viel gegessen.', 'Er hat kein Insulin gespritzt.'], answer: 'Er hat Insulin gespritzt, aber nicht gefrühstückt.' },
      ],
      translate: [
        { de: 'Vielleicht hat er Unterzucker.', ru: 'Может быть, у него низкий сахар.', wrongRu: ['Наверное, у него высокий сахар.', 'Может быть, у него жар.'] },
        { de: 'Nach dem Insulin müssen Sie etwas essen.', ru: 'После инсулина вам нужно что-то съесть.', wrongRu: ['Перед инсулином вам нужно что-то съесть.', 'После инсулина вам нельзя есть.'] },
        { de: 'Brot hat viele Kohlenhydrate.', ru: 'В хлебе много углеводов.', wrongRu: ['В хлебе мало углеводов.', 'В хлебе много жира.'] },
      ],
    },
    {
      lesson: 1, title: 'Die Diät',
      de: `Herr Yilmaz wiegt zu viel. Doktor Wagner hat eine Diät angeordnet: wenig Fett, wenig Zucker, viel Gemüse. Eine Ernährungsberaterin erklärt ihm den Plan.

„Essen Sie drei Mahlzeiten am Tag und zwei kleine Zwischenmahlzeiten, zum Beispiel einen Apfel oder einen Joghurt“, sagt sie. „Obst ist gut, aber nicht zu viel, denn es hat auch Zucker.“

Herr Yilmaz fragt: „Und meine Getränke?“ – „Wasser und Tee ohne Zucker. Cola und Limonade haben sehr viele Kalorien.“ Nach zwei Wochen hat Herr Yilmaz vier Kilo abgenommen. Er ist stolz: „Zu Hause habe ich immer zugenommen. Jetzt lebe ich ausgewogen!“`,
      ru: `Господин Йылмаз весит слишком много. Доктор Вагнер назначил диету: мало жира, мало сахара, много овощей. Диетолог объясняет ему план.

«Ешьте три раза в день и два небольших перекуса, например яблоко или йогурт, — говорит она. — Фрукты полезны, но не слишком много, ведь в них тоже есть сахар».

Господин Йылмаз спрашивает: «А мои напитки?» — «Вода и чай без сахара. В коле и лимонаде очень много калорий». Через две недели господин Йылмаз похудел на четыре килограмма. Он гордится: «Дома я всегда поправлялся. Теперь я живу сбалансированно!»`,
      gloss: { olena: 'Олена (имя)', yilmaz: 'Йылмаз (фамилия)', wagner: 'Вагнер (фамилия)', doktor: 'доктор', herr: 'господин', wiegt: 'весит', zu: 'слишком; (zu Hause) дома', viel: 'много', hat: 'имеет; вспом. глагол', angeordnet: 'назначил', wenig: 'мало', zucker: 'сахар', ernährungsberaterin: 'диетолог (женщина)', erklärt: 'объясняет', ihm: 'ему', plan: 'план', essen: 'ешьте', drei: 'три', am: '(am Tag) в день', tag: 'день', zwei: 'два', kleine: 'небольших', zum: '(zum Beispiel) например', beispiel: 'пример', apfel: 'яблоко', oder: 'или', joghurt: 'йогурт', sagt: 'говорит', gut: 'хорошо, полезно', aber: 'но', denn: 'ведь', auch: 'тоже', fragt: 'спрашивает', meine: 'мои', wasser: 'вода', tee: 'чай', ohne: 'без', cola: 'кола', limonade: 'лимонад', nach: 'через', wochen: 'недели', vier: 'четыре', kilo: 'килограмм', stolz: 'гордый', hause: '(zu Hause) дома', habe: 'вспом. глагол', immer: 'всегда', jetzt: 'теперь', lebe: 'живу', was: 'что', wie: 'как', viele: 'много; (wie viele) сколько', wer: 'кто', welche: 'какие', saft: 'сок', kaffee: 'кофе', milch: 'молоко', fünf: 'пять', sechs: 'шесть', zehn: 'десять' },
      questions: [
        { q: 'Wer hat die Diät angeordnet?', ru: 'Кто назначил диету?', options: ['Doktor Wagner', 'Die Ernährungsberaterin', 'Olena'], answer: 'Doktor Wagner' },
        { q: 'Welche Getränke soll Herr Yilmaz trinken?', ru: 'Какие напитки нужно пить господину Йылмазу?', options: ['Wasser und Tee ohne Zucker', 'Cola und Limonade', 'Saft und Milch'], answer: 'Wasser und Tee ohne Zucker' },
        { q: 'Wie viele Kilo hat er abgenommen?', ru: 'Сколько килограммов он сбросил?', options: ['Vier', 'Zwei', 'Zehn'], answer: 'Vier' },
      ],
      translate: [
        { de: 'Er hat vier Kilo abgenommen.', ru: 'Он похудел на четыре килограмма.', wrongRu: ['Он поправился на четыре килограмма.', 'Он похудел на два килограмма.'] },
        { de: 'Essen Sie drei Mahlzeiten am Tag.', ru: 'Ешьте три раза в день.', wrongRu: ['Ешьте пять раз в день.', 'Пейте три раза в день.'] },
        { de: 'Cola hat sehr viele Kalorien.', ru: 'В коле очень много калорий.', wrongRu: ['В коле мало калорий.', 'В воде очень много калорий.'] },
      ],
    },
  ],
};
