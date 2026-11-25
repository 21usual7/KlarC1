import type { Module } from '../types.ts';

// A2.1 pflege 02: common illnesses — cold, flu, infection (lesson 0); chronic illness, heart attack, therapy (lesson 1).

export const module: Module = {
  id: 'pflege-a21-02-krankheiten', sphere: 'pflege', level: 'A2.1',
  title: 'Häufige Krankheiten', subtitle: 'Простуда, грипп, инфекция, хронические болезни: понять диагноз и объяснить простыми словами.',
  words: [
    { id: 'pfl-a21-02-erkaeltung', icon: 'Thermometer', de: 'Erkältung', pos: 'noun', article: 'die', plural: 'Erkältungen', ru: 'простуда', note: 'sich erkälten — простудиться.', example: { de: 'Ich habe eine leichte Erkältung.', ru: 'У меня лёгкая простуда.', cloze: 'Erkältung' } },
    { id: 'pfl-a21-02-grippe', icon: 'ThermometerSun', de: 'Grippe', pos: 'noun', article: 'die', plural: 'Grippen', ru: 'грипп', note: 'die Grippeimpfung — прививка от гриппа.', example: { de: 'Die Grippe ist viel stärker als eine Erkältung.', ru: 'Грипп гораздо тяжелее простуды.', cloze: 'Grippe' } },
    { id: 'pfl-a21-02-husten', icon: 'Wind', de: 'Husten', pos: 'noun', article: 'der', ru: 'кашель', note: 'husten — кашлять (глагол).', collocation: { de: 'Husten haben', ru: 'кашлять, иметь кашель' }, example: { de: 'Der Husten wird nachts schlimmer.', ru: 'Ночью кашель усиливается.', cloze: 'Husten' } },
    { id: 'pfl-a21-02-schnupfen', icon: 'Droplets', de: 'Schnupfen', pos: 'noun', article: 'der', ru: 'насморк', example: { de: 'Sie hat Schnupfen und Halsschmerzen.', ru: 'У неё насморк и болит горло.', cloze: 'Schnupfen' } },
    { id: 'pfl-a21-02-entzuendung', icon: 'Flame', de: 'Entzündung', pos: 'noun', article: 'die', plural: 'Entzündungen', ru: 'воспаление', note: 'die Lungenentzündung — пневмония.', example: { de: 'Die Entzündung ist schon besser.', ru: 'Воспаление уже лучше.', cloze: 'Entzündung' } },
    { id: 'pfl-a21-02-infektion', icon: 'Biohazard', de: 'Infektion', pos: 'noun', article: 'die', plural: 'Infektionen', ru: 'инфекция', example: { de: 'Eine Infektion kann gefährlich sein.', ru: 'Инфекция может быть опасной.', cloze: 'Infektion' } },
    { id: 'pfl-a21-02-ansteckend', icon: 'Users', de: 'ansteckend', pos: 'adj', ru: 'заразный', note: 'sich anstecken — заразиться.', example: { de: 'Ist die Krankheit ansteckend?', ru: 'Эта болезнь заразная?', cloze: 'ansteckend' } },
    { id: 'pfl-a21-02-virus', icon: 'Bug', de: 'Virus', pos: 'noun', article: 'das', plural: 'Viren', ru: 'вирус', note: 'В медицине обычно das Virus, в разговоре и о компьютерах — der Virus.', example: { de: 'Antibiotika helfen nicht gegen ein Virus.', ru: 'Антибиотики не помогают против вируса.', cloze: 'Virus' } },

    { id: 'pfl-a21-02-bakterie', icon: 'Microscope', de: 'Bakterie', pos: 'noun', article: 'die', plural: 'Bakterien', ru: 'бактерия', example: { de: 'Diese Infektion kommt von Bakterien.', ru: 'Эта инфекция вызвана бактериями.', cloze: 'Bakterien' } },
    { id: 'pfl-a21-02-lungenentzuendung', icon: 'Wind', de: 'Lungenentzündung', pos: 'noun', article: 'die', plural: 'Lungenentzündungen', ru: 'пневмония, воспаление лёгких', parts: ['Lungen', 'entzündung'], example: { de: 'Ältere Menschen bekommen oft eine Lungenentzündung.', ru: 'Пожилые люди часто болеют пневмонией.', cloze: 'Lungenentzündung' } },
    { id: 'pfl-a21-02-herzinfarkt', icon: 'HeartCrack', de: 'Herzinfarkt', pos: 'noun', article: 'der', plural: 'Herzinfarkte', ru: 'инфаркт', parts: ['Herz', 'infarkt'], example: { de: 'Nach dem Herzinfarkt war er drei Wochen im Krankenhaus.', ru: 'После инфаркта он три недели был в больнице.', cloze: 'Herzinfarkt' } },
    { id: 'pfl-a21-02-krebs', icon: 'CircleAlert', de: 'Krebs', pos: 'noun', article: 'der', ru: 'рак (болезнь); рак (животное)', example: { de: 'Krebs kann man heute oft gut behandeln.', ru: 'Рак сегодня часто хорошо лечится.', cloze: 'Krebs' } },
    { id: 'pfl-a21-02-asthma', icon: 'AirVent', de: 'Asthma', pos: 'noun', article: 'das', ru: 'астма', example: { de: 'Mit Asthma braucht man oft ein Spray.', ru: 'При астме часто нужен ингалятор.', cloze: 'Asthma' } },
    { id: 'pfl-a21-02-chronisch', icon: 'Infinity', de: 'chronisch', pos: 'adj', ru: 'хронический', example: { de: 'Diabetes ist eine chronische Krankheit.', ru: 'Диабет — хроническая болезнь.', cloze: 'chronische' } },
    { id: 'pfl-a21-02-heilen', icon: 'HeartPulse', de: 'heilen', pos: 'verb', ru: 'лечить, излечивать; заживать', forms: 'er heilt · hat geheilt', note: 'Die Wunde heilt gut. — Рана хорошо заживает.', example: { de: 'Die Wunde heilt gut.', ru: 'Рана хорошо заживает.', cloze: 'heilt' } },
    { id: 'pfl-a21-02-therapie', icon: 'ClipboardList', de: 'Therapie', pos: 'noun', article: 'die', plural: 'Therapien', ru: 'терапия, лечение', example: { de: 'Die Therapie dauert sechs Wochen.', ru: 'Лечение длится шесть недель.', cloze: 'Therapie' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Erkältung oder Grippe?',
      de: `Im Winter sind viele Kollegen krank. Tom hat Schnupfen und Husten. Er sagt: „Das ist nur eine Erkältung.“ Aber am nächsten Tag hat er hohes Fieber und Schmerzen am ganzen Körper.

Sabine sagt: „Das ist keine Erkältung, das ist eine Grippe! Die Grippe ist ansteckend. Du musst zu Hause bleiben.“ Tom geht zum Arzt. Der Arzt sagt: „Es ist ein Virus. Antibiotika helfen nicht. Sie brauchen Ruhe und viel Tee.“

Auf der Station sind die Pflegekräfte vorsichtig. Patienten mit einer Infektion sind in einem eigenen Zimmer. Alle tragen eine Maske, damit sich niemand ansteckt.`,
      ru: `Зимой многие коллеги болеют. У Тома насморк и кашель. Он говорит: «Это просто простуда». Но на следующий день у него высокая температура и ломит всё тело.

Сабина говорит: «Это не простуда, это грипп! Грипп заразный. Ты должен оставаться дома». Том идёт к врачу. Врач говорит: «Это вирус. Антибиотики не помогут. Вам нужен покой и много чая».

В отделении медсёстры осторожны. Пациенты с инфекцией лежат в отдельной палате. Все носят маску, чтобы никто не заразился.`,
      gloss: { tom: 'Том (имя)', sabine: 'Сабина (имя)', winter: 'зима', viele: 'многие', kollegen: 'коллеги', krank: 'больные, больны', sagt: 'говорит', nur: 'только, просто', aber: 'но', nächsten: 'следующий', tag: 'день', hohes: 'высокую', fieber: 'жар', schmerzen: 'боли', ganzen: 'всём', körper: 'тело', keine: 'не, никакая', musst: 'должен', hause: '(zu Hause) дома', bleiben: 'оставаться', geht: 'идёт', zum: 'к (zu + dem)', arzt: 'врач', antibiotika: 'антибиотики', helfen: 'помогают', brauchen: 'нуждаетесь', ruhe: 'покой', viel: 'много', tee: 'чай', station: 'отделение', pflegekräfte: 'медсёстры, персонал по уходу', vorsichtig: 'осторожные', patienten: 'пациенты', mit: 'с', eigenen: 'отдельной, собственной', zimmer: 'палата', alle: 'все', tragen: 'носят', maske: 'маска', damit: 'чтобы', niemand: 'никто', ansteckt: '(sich ansteckt) заражается', sich: 'себя, -ся', oder: 'или', was: 'что', wer: 'кто', warum: 'почему', wo: 'где', bakterien: 'бактерии', sommer: 'лето', sabines: 'Сабины' },
      questions: [
        { q: 'Was hat Tom wirklich?', ru: 'Что на самом деле у Тома?', options: ['Eine Grippe', 'Eine Erkältung', 'Eine Lungenentzündung'], answer: 'Eine Grippe' },
        { q: 'Warum helfen Antibiotika nicht?', ru: 'Почему антибиотики не помогут?', options: ['Es ist ein Virus.', 'Es sind Bakterien.', 'Tom hat kein Fieber.'], answer: 'Es ist ein Virus.' },
        { q: 'Wo sind Patienten mit einer Infektion?', ru: 'Где лежат пациенты с инфекцией?', options: ['In einem eigenen Zimmer', 'Zu Hause', 'Auf dem Flur'], answer: 'In einem eigenen Zimmer' },
      ],
      translate: [
        { de: 'Das ist nur eine Erkältung.', ru: 'Это просто простуда.', wrongRu: ['Это серьёзный грипп.', 'Это не простуда.'] },
        { de: 'Die Grippe ist ansteckend.', ru: 'Грипп заразный.', wrongRu: ['Грипп не заразный.', 'Простуда заразная.'] },
        { de: 'Antibiotika helfen nicht gegen ein Virus.', ru: 'Антибиотики не помогают против вируса.', wrongRu: ['Антибиотики помогают против вируса.', 'Антибиотики не помогают против бактерий.'] },
      ],
    },
    {
      lesson: 1, title: 'Chronisch krank',
      de: `Auf Station drei liegen viele ältere Patienten. Viele haben chronische Krankheiten: Diabetes, Asthma oder Probleme mit dem Herz. Herr Yilmaz hatte vor zwei Jahren einen Herzinfarkt.

Frau Wolf hat jetzt eine Lungenentzündung. Die Ärzte sagen, dass Bakterien die Infektion verursachen. Deshalb bekommt sie eine Therapie mit Antibiotika. Die Therapie dauert zehn Tage.

Im Zimmer nebenan liegt eine junge Frau mit Krebs. Sie fragt Olena: „Kann man das heilen?“ Olena antwortet ehrlich: „Das weiß ich nicht. Aber die Ärzte machen alles, was möglich ist. Fragen Sie bitte auch Doktor Wagner.“`,
      ru: `В третьем отделении лежит много пожилых пациентов. У многих хронические болезни: диабет, астма или проблемы с сердцем. У господина Йылмаза два года назад был инфаркт.

У госпожи Вольф сейчас пневмония. Врачи говорят, что инфекцию вызывают бактерии. Поэтому она получает лечение антибиотиками. Лечение длится десять дней.

В соседней палате лежит молодая женщина с раком. Она спрашивает Олену: «Это можно вылечить?» Олена честно отвечает: «Я не знаю. Но врачи делают всё возможное. Спросите, пожалуйста, ещё доктора Вагнера».`,
      gloss: { yilmaz: 'Йылмаз (фамилия)', wolf: 'Вольф (фамилия)', olena: 'Олена (имя)', wagner: 'Вагнер (фамилия)', doktor: 'доктор', herr: 'господин', frau: 'госпожа; женщина', station: 'отделение', drei: 'три', liegen: 'лежат', liegt: 'лежит', viele: 'многие, много', ältere: 'пожилые', patienten: 'пациенты', haben: 'имеют', diabetes: 'диабет', oder: 'или', probleme: 'проблемы', mit: 'с', hatte: 'был, имел', vor: 'назад', zwei: 'два', jahren: 'лет (дат.)', jetzt: 'сейчас', ärzte: 'врачи', sagen: 'говорят', dass: 'что', verursachen: 'вызывают', deshalb: 'поэтому', bekommt: 'получает', antibiotika: 'антибиотики', dauert: 'длится', zehn: 'десять', tage: 'дней', zimmer: 'палата', nebenan: 'по соседству', junge: 'молодая', fragt: 'спрашивает', kann: 'можно, может', man: 'кто-то; (kann man) можно', antwortet: 'отвечает', ehrlich: 'честно', weiß: 'знаю', aber: 'но', machen: 'делают', alles: 'всё', was: 'что', möglich: 'возможно', fragen: 'спросите', auch: 'также', wer: 'кто', wie: 'как', lange: '(wie lange) как долго', welche: 'какую', woher: 'откуда', kommt: 'приходит; вызвана', sechs: 'шесть', wochen: 'недель', virus: 'вирус', herzinfarkt: 'инфаркт' },
      questions: [
        { q: 'Welche Krankheit hat Frau Wolf jetzt?', ru: 'Какая болезнь сейчас у госпожи Вольф?', options: ['Eine Lungenentzündung', 'Asthma', 'Einen Herzinfarkt'], answer: 'Eine Lungenentzündung' },
        { q: 'Wie lange dauert die Therapie?', ru: 'Сколько длится лечение?', options: ['Zehn Tage', 'Sechs Wochen', 'Zwei Jahre'], answer: 'Zehn Tage' },
        { q: 'Wer hatte einen Herzinfarkt?', ru: 'У кого был инфаркт?', options: ['Herr Yilmaz', 'Frau Wolf', 'Die junge Frau'], answer: 'Herr Yilmaz' },
      ],
      translate: [
        { de: 'Diabetes ist eine chronische Krankheit.', ru: 'Диабет — хроническая болезнь.', wrongRu: ['Диабет — заразная болезнь.', 'Астма — хроническая болезнь.'] },
        { de: 'Bakterien verursachen die Infektion.', ru: 'Инфекцию вызывают бактерии.', wrongRu: ['Инфекцию вызывает вирус.', 'Бактерии лечат инфекцию.'] },
        { de: 'Die Therapie dauert zehn Tage.', ru: 'Лечение длится десять дней.', wrongRu: ['Лечение длится две недели.', 'Лечение закончилось десять дней назад.'] },
      ],
    },
  ],
};
