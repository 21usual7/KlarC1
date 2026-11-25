import type { Module } from '../types.ts';

// A1.1 pflege 09: the patient's family — mother, son, grandchild (lesson 0); visiting hours, flowers, waiting (lesson 1).

export const module: Module = {
  id: 'pflege-a11-09-familie', sphere: 'pflege', level: 'A1.1',
  title: 'Die Familie zu Besuch', subtitle: 'Семья пациента: кто пришёл в гости, часы посещений и разговор с родственниками.',
  words: [
    { id: 'pfl-a11-09-familie', icon: 'Users', imageQuery: 'family visit hospital', de: 'Familie', pos: 'noun', article: 'die', plural: 'Familien', ru: 'семья', example: { de: 'Die Familie kommt am Sonntag.', ru: 'Семья приходит в воскресенье.', cloze: 'Familie' } },
    { id: 'pfl-a11-09-mutter', icon: 'UserRound', de: 'Mutter', pos: 'noun', article: 'die', plural: 'Mütter', ru: 'мать, мама', example: { de: 'Meine Mutter ist achtzig Jahre alt.', ru: 'Моей маме восемьдесят лет.', cloze: 'Mutter' } },
    { id: 'pfl-a11-09-vater', icon: 'UserRound', de: 'Vater', pos: 'noun', article: 'der', plural: 'Väter', ru: 'отец, папа', example: { de: 'Wie geht es meinem Vater?', ru: 'Как себя чувствует мой отец?', cloze: 'Vater' } },
    { id: 'pfl-a11-09-tochter', icon: 'User', de: 'Tochter', pos: 'noun', article: 'die', plural: 'Töchter', ru: 'дочь', example: { de: 'Die Tochter von Frau Wolf ruft an.', ru: 'Звонит дочь госпожи Вольф.', cloze: 'Tochter' } },
    { id: 'pfl-a11-09-sohn', icon: 'User', de: 'Sohn', pos: 'noun', article: 'der', plural: 'Söhne', ru: 'сын', example: { de: 'Mein Sohn wohnt in Berlin.', ru: 'Мой сын живёт в Берлине.', cloze: 'Sohn' } },
    { id: 'pfl-a11-09-mann', icon: 'UserRound', de: 'Mann', pos: 'noun', article: 'der', plural: 'Männer', ru: 'муж; мужчина', note: 'mein Mann — мой муж.', example: { de: 'Mein Mann kommt heute Abend.', ru: 'Мой муж придёт сегодня вечером.', cloze: 'Mann' } },
    { id: 'pfl-a11-09-frau', icon: 'UserRound', de: 'Frau', pos: 'noun', article: 'die', plural: 'Frauen', ru: 'жена; женщина; госпожа', note: 'meine Frau — моя жена; Frau Wolf — госпожа Вольф.', example: { de: 'Herr Schmidt wartet auf seine Frau.', ru: 'Господин Шмидт ждёт свою жену.', cloze: 'Frau' } },
    { id: 'pfl-a11-09-enkel', icon: 'Baby', de: 'Enkel', pos: 'noun', article: 'der', plural: 'Enkel', ru: 'внук', note: 'Внучка — die Enkelin.', example: { de: 'Frau Wolf hat drei Enkel.', ru: 'У госпожи Вольф трое внуков.', cloze: 'Enkel' } },

    { id: 'pfl-a11-09-besuch', icon: 'DoorOpen', de: 'Besuch', pos: 'noun', article: 'der', plural: 'Besuche', ru: 'визит; гости', note: 'Sie haben Besuch! — К вам пришли!', collocation: { de: 'Besuch haben', ru: 'принимать гостей' }, example: { de: 'Herr Schmidt, Sie haben Besuch!', ru: 'Господин Шмидт, к вам пришли!', cloze: 'Besuch' } },
    { id: 'pfl-a11-09-besuchen', icon: 'Footprints', de: 'besuchen', pos: 'verb', ru: 'навещать, посещать', forms: 'er besucht · hat besucht', example: { de: 'Ich besuche meine Mutter.', ru: 'Я навещаю маму.', cloze: 'besuche' } },
    { id: 'pfl-a11-09-besuchszeit', icon: 'Clock', de: 'Besuchszeit', pos: 'noun', article: 'die', plural: 'Besuchszeiten', ru: 'часы посещения', parts: ['Besuchs', 'zeit'], example: { de: 'Die Besuchszeit ist von vierzehn bis neunzehn Uhr.', ru: 'Часы посещения — с четырнадцати до девятнадцати.', cloze: 'Besuchszeit' } },
    { id: 'pfl-a11-09-blume', icon: 'Flower2', imageQuery: 'flowers bouquet', de: 'Blume', pos: 'noun', article: 'die', plural: 'Blumen', ru: 'цветок', example: { de: 'Die Blumen sind sehr schön.', ru: 'Цветы очень красивые.', cloze: 'Blumen' } },
    { id: 'pfl-a11-09-geschenk', icon: 'Gift', de: 'Geschenk', pos: 'noun', article: 'das', plural: 'Geschenke', ru: 'подарок', example: { de: 'Das ist ein Geschenk für Sie.', ru: 'Это подарок для вас.', cloze: 'Geschenk' } },
    { id: 'pfl-a11-09-angehoerige', icon: 'Users', de: 'Angehörige', pos: 'noun', article: 'der', plural: 'Angehörigen', ru: 'родственник (пациента)', note: 'Склоняется как прилагательное: der Angehörige, ein Angehöriger; о женщине — die Angehörige. Чаще мн. ч.: die Angehörigen.', example: { de: 'Die Angehörigen warten draußen.', ru: 'Родственники ждут снаружи.', cloze: 'Angehörigen' } },
    { id: 'pfl-a11-09-warten', icon: 'Hourglass', de: 'warten', pos: 'verb', ru: 'ждать', forms: 'er wartet · hat gewartet', note: 'warten auf + Akk: Ich warte auf den Arzt.', collocation: { de: 'auf den Arzt warten', ru: 'ждать врача' }, example: { de: 'Bitte warten Sie hier.', ru: 'Пожалуйста, подождите здесь.', cloze: 'warten' } },
    { id: 'pfl-a11-09-froh', icon: 'Smile', de: 'froh', pos: 'adj', ru: 'радостный, рад', note: 'Ich bin froh. — Я рада.', example: { de: 'Frau Wolf ist froh über den Besuch.', ru: 'Госпожа Вольф рада гостям.', cloze: 'froh' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Sonntag im Krankenhaus',
      de: `Am Sonntag kommt die Familie von Frau Wolf. Ihr Sohn Peter ist da. Er wohnt in München. Seine Frau und die zwei Enkel kommen auch.

Peter fragt Olena: „Wie geht es meiner Mutter?“ Olena sagt: „Heute geht es ihr besser. Sie hat kein Fieber mehr.“

Frau Wolf hat auch eine Tochter. Sie heißt Anna und wohnt in Hamburg. Sie ruft am Abend an. Herr Wolf, der Mann von Frau Wolf, ist schon tot. Der Vater von Peter lebt also nicht mehr.`,
      ru: `В воскресенье приходит семья госпожи Вольф. Пришёл её сын Петер. Он живёт в Мюнхене. Его жена и двое внуков тоже приходят.

Петер спрашивает Олену: «Как себя чувствует моя мама?» Олена говорит: «Сегодня ей лучше. У неё больше нет температуры».

У госпожи Вольф есть ещё дочь. Её зовут Анна, она живёт в Гамбурге. Она звонит вечером. Господин Вольф, муж госпожи Вольф, уже умер. То есть отца Петера уже нет в живых.`,
      gloss: { sonntag: 'воскресенье', wolf: 'Вольф (фамилия)', peter: 'Петер (имя)', anna: 'Анна (имя)', olena: 'Олена (имя)', münchen: 'Мюнхен', hamburg: 'Гамбург', berlin: 'Берлин', kommt: 'приходит', kommen: 'приходят', da: 'здесь, тут', wohnt: 'живёт', seine: 'его', zwei: 'два, двое', fragt: 'спрашивает', sagt: 'говорит', heißt: 'зовут', abend: 'вечер', schon: 'уже', tot: 'мёртвый; (ist tot) умер', lebt: 'живёт; жив', also: 'то есть, значит', mehr: 'больше; (nicht mehr) больше не', herr: 'господин', wer: 'кто', wo: 'где', ihr: 'ей; её' },
      questions: [
        { q: 'Wo wohnt Peter?', ru: 'Где живёт Петер?', options: ['In München', 'In Hamburg', 'In Berlin'], answer: 'In München' },
        { q: 'Wie viele Enkel kommen?', ru: 'Сколько внуков приходит?', options: ['Zwei', 'Drei', 'Keine'], answer: 'Zwei' },
        { q: 'Wer ruft am Abend an?', ru: 'Кто звонит вечером?', options: ['Die Tochter', 'Der Sohn', 'Der Mann'], answer: 'Die Tochter' },
      ],
      translate: [
        { de: 'Wie geht es meiner Mutter?', ru: 'Как себя чувствует моя мама?', wrongRu: ['Как себя чувствует мой отец?', 'Где моя мама?'] },
        { de: 'Ihr Sohn wohnt in München.', ru: 'Её сын живёт в Мюнхене.', wrongRu: ['Её дочь живёт в Мюнхене.', 'Его сын живёт в Мюнхене.'] },
        { de: 'Die Familie kommt am Sonntag.', ru: 'Семья приходит в воскресенье.', wrongRu: ['Семья приходит в субботу.', 'Сын приходит в воскресенье.'] },
      ],
    },
    {
      lesson: 1, title: 'Die Besuchszeit',
      de: `Die Besuchszeit ist von vierzehn bis neunzehn Uhr. Um dreizehn Uhr kommt eine Frau mit Blumen. Sie fragt: „Kann ich Herrn Schmidt besuchen? Ich bin seine Frau.“

Olena sagt: „Der Arzt ist gerade bei Ihrem Mann. Bitte warten Sie hier.“ Nach zehn Minuten sagt Olena: „Jetzt können Sie rein. Herr Schmidt, Sie haben Besuch!“

Herr Schmidt ist sehr froh. Seine Frau hat auch ein Geschenk: ein Buch. Die Angehörigen sind für die Patienten sehr wichtig.`,
      ru: `Часы посещения — с четырнадцати до девятнадцати. В тринадцать часов приходит женщина с цветами. Она спрашивает: «Можно навестить господина Шмидта? Я его жена».

Олена говорит: «Сейчас у вашего мужа врач. Пожалуйста, подождите здесь». Через десять минут Олена говорит: «Теперь можно заходить. Господин Шмидт, к вам пришли!»

Господин Шмидт очень рад. У жены для него ещё и подарок — книга. Родственники очень важны для пациентов.`,
      gloss: { wolf: 'Вольф (фамилия)', ärztin: 'врач (женщина)', schön: 'красивый', olena: 'Олена (имя)', schmidt: 'Шмидт (фамилия)', herrn: 'господина (вин.)', herr: 'господин', vierzehn: 'четырнадцать', neunzehn: 'девятнадцать', dreizehn: 'тринадцать', zehn: 'десять', von: 'от, с', bis: 'до', kommt: 'приходит', mit: 'с', fragt: 'спрашивает', kann: 'могу, можно', seine: 'его', sagt: 'говорит', gerade: 'как раз, сейчас', bei: 'у', ihrem: 'вашего, вашему', hier: 'здесь', nach: 'через, после', jetzt: 'теперь, сейчас', können: 'можете', rein: 'внутрь; (Sie können rein) можете войти', buch: 'книга', wichtig: 'важный', für: 'для', was: 'что', wer: 'кто', wann: 'когда', bringt: 'приносит', tee: 'чай', patienten: 'пациенты, пациентов' },
      questions: [
        { q: 'Wann ist die Besuchszeit?', ru: 'Когда часы посещения?', options: ['Von vierzehn bis neunzehn Uhr', 'Von dreizehn bis vierzehn Uhr', 'Um zehn Uhr'], answer: 'Von vierzehn bis neunzehn Uhr' },
        { q: 'Wer ist die Frau mit den Blumen?', ru: 'Кто эта женщина с цветами?', options: ['Die Frau von Herrn Schmidt', 'Die Tochter von Frau Wolf', 'Die Ärztin'], answer: 'Die Frau von Herrn Schmidt' },
        { q: 'Was ist das Geschenk?', ru: 'Что за подарок?', options: ['Ein Buch', 'Blumen', 'Tee'], answer: 'Ein Buch' },
      ],
      translate: [
        { de: 'Bitte warten Sie hier.', ru: 'Пожалуйста, подождите здесь.', wrongRu: ['Пожалуйста, войдите сюда.', 'Пожалуйста, подождите снаружи.'] },
        { de: 'Herr Schmidt, Sie haben Besuch!', ru: 'Господин Шмидт, к вам пришли!', wrongRu: ['Господин Шмидт, вам звонят!', 'Господин Шмидт, у вас подарок!'] },
        { de: 'Die Blumen sind sehr schön.', ru: 'Цветы очень красивые.', wrongRu: ['Цветы не очень красивые.', 'Подарок очень красивый.'] },
      ],
    },
  ],
};
