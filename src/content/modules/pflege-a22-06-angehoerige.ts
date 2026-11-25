import type { Module } from '../types.ts';

// A2.2 pflege 06: talking to relatives — confidentiality, power of attorney, information (lesson 0); complaints, misunderstandings, clearing things up (lesson 1).

export const module: Module = {
  id: 'pflege-a22-06-angehoerige', sphere: 'pflege', level: 'A2.2',
  title: 'Gespräche mit Angehörigen', subtitle: 'Разговор с родственниками: врачебная тайна, доверенность, жалобы и как спокойно прояснить недоразумение.',
  words: [
    { id: 'pfl-a22-06-gespraech', icon: 'MessagesSquare', de: 'Gespräch', pos: 'noun', article: 'das', plural: 'Gespräche', ru: 'разговор, беседа', example: { de: 'Können wir kurz ein Gespräch führen?', ru: 'Можем мы коротко поговорить?', cloze: 'Gespräch' } },
    { id: 'pfl-a22-06-sorge', icon: 'CloudRain', de: 'Sorge', pos: 'noun', article: 'die', plural: 'Sorgen', ru: 'забота, беспокойство', note: 'sich Sorgen machen — беспокоиться.', collocation: { de: 'sich Sorgen machen', ru: 'беспокоиться' }, example: { de: 'Ich mache mir große Sorgen um meinen Vater.', ru: 'Я очень беспокоюсь за отца.', cloze: 'Sorgen' } },
    { id: 'pfl-a22-06-schweigepflicht', icon: 'Lock', de: 'Schweigepflicht', pos: 'noun', article: 'die', ru: 'обязанность хранить тайну (врачебная тайна)', parts: ['Schweige', 'pflicht'], example: { de: 'Wegen der Schweigepflicht darf ich Ihnen das nicht sagen.', ru: 'Из-за врачебной тайны я не могу вам это сказать.', cloze: 'Schweigepflicht' } },
    { id: 'pfl-a22-06-auskunft', icon: 'Info', de: 'Auskunft', pos: 'noun', article: 'die', plural: 'Auskünfte', ru: 'справка, информация', collocation: { de: 'Auskunft geben', ru: 'давать информацию' }, example: { de: 'Am Telefon geben wir keine Auskunft.', ru: 'По телефону мы не даём информацию.', cloze: 'Auskunft' } },
    { id: 'pfl-a22-06-vollmacht', icon: 'FileSignature', de: 'Vollmacht', pos: 'noun', article: 'die', plural: 'Vollmachten', ru: 'доверенность', example: { de: 'Der Sohn hat eine Vollmacht.', ru: 'У сына есть доверенность.', cloze: 'Vollmacht' } },
    { id: 'pfl-a22-06-betreuer', icon: 'UserCheck', de: 'Betreuer', pos: 'noun', article: 'der', plural: 'Betreuer', ru: 'опекун (законный представитель)', note: 'Женщина — die Betreuerin. Назначается судом.', example: { de: 'Ihr Betreuer entscheidet über die Behandlung.', ru: 'Её опекун решает вопросы лечения.', cloze: 'Betreuer' } },
    { id: 'pfl-a22-06-zustaendig', icon: 'BadgeCheck', de: 'zuständig', pos: 'adj', ru: 'ответственный, компетентный (за что-то)', note: 'zuständig für + Akk.', example: { de: 'Wer ist für meine Mutter zuständig?', ru: 'Кто отвечает за мою маму?', cloze: 'zuständig' } },
    { id: 'pfl-a22-06-vertraulich', icon: 'ShieldCheck', de: 'vertraulich', pos: 'adj', ru: 'конфиденциальный', example: { de: 'Alle Informationen sind vertraulich.', ru: 'Вся информация конфиденциальна.', cloze: 'vertraulich' } },

    { id: 'pfl-a22-06-beschweren', icon: 'MessageSquareWarning', de: 'beschweren', pos: 'verb', ru: '(sich beschweren) жаловаться', forms: 'er beschwert sich · hat sich beschwert', note: 'sich beschweren über + Akk — жаловаться на.', example: { de: 'Die Tochter beschwert sich über das Essen.', ru: 'Дочь жалуется на еду.', cloze: 'beschwert' } },
    { id: 'pfl-a22-06-vorwurf', icon: 'Pointer', de: 'Vorwurf', pos: 'noun', article: 'der', plural: 'Vorwürfe', ru: 'упрёк, обвинение', example: { de: 'Das ist ein schwerer Vorwurf.', ru: 'Это серьёзное обвинение.', cloze: 'Vorwurf' } },
    { id: 'pfl-a22-06-vorwerfen', icon: 'Pointer', de: 'vorwerfen', pos: 'verb', ru: 'упрекать', forms: 'er wirft vor · hat vorgeworfen', example: { de: 'Er wirft uns vor, dass niemand kommt.', ru: 'Он упрекает нас, что никто не приходит.', cloze: 'wirft' } },
    { id: 'pfl-a22-06-missverstaendnis', icon: 'CircleHelp', de: 'Missverständnis', pos: 'noun', article: 'das', plural: 'Missverständnisse', ru: 'недоразумение', example: { de: 'Das war ein Missverständnis.', ru: 'Это было недоразумение.', cloze: 'Missverständnis' } },
    { id: 'pfl-a22-06-klaeren', icon: 'CheckCheck', de: 'klären', pos: 'verb', ru: 'выяснять, прояснять', forms: 'er klärt · hat geklärt', example: { de: 'Das klären wir am besten im Gespräch.', ru: 'Это лучше всего прояснить в разговоре.', cloze: 'klären' } },
    { id: 'pfl-a22-06-verstaendnis', icon: 'HeartHandshake', de: 'Verständnis', pos: 'noun', article: 'das', ru: 'понимание', example: { de: 'Ich habe Verständnis für Ihre Sorgen.', ru: 'Я понимаю ваши беспокойства.', cloze: 'Verständnis' } },
    { id: 'pfl-a22-06-vereinbaren', icon: 'CalendarCheck', de: 'vereinbaren', pos: 'verb', ru: 'договариваться (о встрече)', forms: 'er vereinbart · hat vereinbart', collocation: { de: 'einen Termin vereinbaren', ru: 'договориться о встрече' }, example: { de: 'Wir vereinbaren einen Termin mit dem Arzt.', ru: 'Мы договоримся о встрече с врачом.', cloze: 'vereinbaren' } },
    { id: 'pfl-a22-06-ernst-nehmen', icon: 'Scale', de: 'ernst nehmen', pos: 'phrase', ru: 'воспринимать всерьёз', example: { de: 'Wir nehmen Ihre Kritik ernst.', ru: 'Мы воспринимаем вашу критику всерьёз.', cloze: 'ernst' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Am Telefon',
      de: `Das Telefon klingelt. Ein Mann sagt: „Ich bin der Neffe von Frau Lange. Wie geht es ihr? Welche Diagnose hat sie?“ Olena antwortet freundlich: „Es tut mir leid, aber am Telefon geben wir keine Auskunft. Wir haben Schweigepflicht.“

Der Mann ist nicht zufrieden. „Ich mache mir doch nur Sorgen!“ – „Das verstehe ich. Aber ich weiß nicht, wer Sie sind. Alle Informationen über Patienten sind vertraulich.“

Später fragt Olena Sabine: „Wer darf denn Auskunft bekommen?“ Sabine erklärt: „Frau Lange hat Demenz und kann nicht selbst entscheiden. Ihr Sohn hat eine Vollmacht. Er ist zuständig. Mit ihm sprechen wir, oder er sagt uns, wer informiert werden darf.“`,
      ru: `Звонит телефон. Мужчина говорит: «Я племянник госпожи Ланге. Как она? Какой у неё диагноз?» Олена вежливо отвечает: «Мне жаль, но по телефону мы не даём информацию. У нас обязанность хранить тайну».

Мужчина недоволен. «Я же просто беспокоюсь!» — «Я понимаю. Но я не знаю, кто вы. Вся информация о пациентах конфиденциальна».

Позже Олена спрашивает Сабину: «А кому вообще можно давать информацию?» Сабина объясняет: «У госпожи Ланге деменция, и она не может решать сама. У её сына есть доверенность. Он отвечает за неё. С ним мы и говорим — или он сообщает нам, кого можно информировать».`,
      gloss: { klingelt: 'звенит (звонок)', olena: 'Олена (имя)', freundlich: 'вежливый, дружелюбный', sabine: 'Сабина (имя)', wegen: 'из-за', lange: 'Ланге (фамилия)', neffe: 'племянник', leid: '(es tut mir leid) мне жаль', zufrieden: 'довольный', doch: 'же, ведь', verstehe: 'понимаю', selbst: 'сам(а)', entscheiden: 'решать', informiert: 'информирован(ы)', denn: 'же, вообще (в вопросе)' },
      questions: [
        { q: 'Wer ruft an?', ru: 'Кто звонит?', options: ['Der Neffe von Frau Lange', 'Der Sohn von Frau Lange', 'Der Arzt'], answer: 'Der Neffe von Frau Lange' },
        { q: 'Warum gibt Olena keine Auskunft?', ru: 'Почему Олена не даёт информацию?', options: ['Wegen der Schweigepflicht', 'Weil sie nichts weiß', 'Weil sie keine Zeit hat'], answer: 'Wegen der Schweigepflicht' },
        { q: 'Wer hat eine Vollmacht?', ru: 'У кого доверенность?', options: ['Der Sohn', 'Der Neffe', 'Olena'], answer: 'Der Sohn' },
      ],
      translate: [
        { de: 'Am Telefon geben wir keine Auskunft.', ru: 'По телефону мы не даём информацию.', wrongRu: ['По телефону мы даём всю информацию.', 'По почте мы не даём информацию.'] },
        { de: 'Ich mache mir große Sorgen.', ru: 'Я очень беспокоюсь.', wrongRu: ['Я совсем не беспокоюсь.', 'Я очень устал.'] },
        { de: 'Alle Informationen sind vertraulich.', ru: 'Вся информация конфиденциальна.', wrongRu: ['Вся информация открыта.', 'Некоторая информация конфиденциальна.'] },
      ],
    },
    {
      lesson: 1, title: 'Eine Beschwerde',
      de: `Die Tochter von Herrn Becker ist wütend. Sie beschwert sich bei Olena: „Mein Vater hat gestern zwei Stunden geklingelt und niemand ist gekommen! Das ist doch unmöglich!“

Olena bleibt ruhig. „Ich verstehe, dass Sie sich ärgern. Ich nehme Ihren Vorwurf ernst. Lassen Sie uns das klären.“ Sie schaut in die Dokumentation. Dort steht: Tom war um 15 Uhr und um 15.40 Uhr bei Herrn Becker.

„Vielleicht ist das ein Missverständnis“, sagt Olena. „Ihr Vater hat nach dem Schlaganfall oft kein gutes Zeitgefühl.“ Die Tochter wird ruhiger. „Ich wusste das nicht. Danke für Ihr Verständnis.“ Olena schlägt vor: „Wollen wir einen Termin mit Doktor Wagner vereinbaren? Dann können Sie alle Fragen stellen.“`,
      ru: `Дочь господина Беккера в гневе. Она жалуется Олене: «Мой отец вчера два часа звонил, и никто не пришёл! Это же недопустимо!»

Олена остаётся спокойной. «Я понимаю, что вы сердитесь. Я воспринимаю ваш упрёк всерьёз. Давайте выясним». Она смотрит в документацию. Там написано: Том был у господина Беккера в 15:00 и в 15:40.

«Возможно, это недоразумение, — говорит Олена. — После инсульта ваш отец часто плохо ощущает время». Дочь успокаивается. «Я этого не знала. Спасибо за понимание». Олена предлагает: «Давайте договоримся о встрече с доктором Вагнером? Тогда вы сможете задать все вопросы».`,
      gloss: { herrn: 'господину (дат.)', olena: 'Олена (имя)', tom: 'Том (имя)', schlaganfall: 'инсульт', doktor: 'доктор', wagner: 'Вагнер (фамилия)', worüber: 'о чём', zweimal: 'два раза', becker: 'Беккер (фамилия)', wütend: 'в гневе, злой', geklingelt: 'звонил (кнопкой вызова)', gekommen: 'пришёл', unmöglich: 'невозможно, недопустимо', ärgern: '(sich ärgern) сердиться', lassen: '(lassen Sie uns) давайте', zeitgefühl: 'чувство времени', ruhiger: 'спокойнее', wusste: 'знала', schlägt: '(schlägt … vor) предлагает', vor: '(schlägt … vor) предлагает', stellen: '(Fragen stellen) задавать вопросы' },
      questions: [
        { q: 'Worüber beschwert sich die Tochter?', ru: 'На что жалуется дочь?', options: ['Niemand ist gekommen, als ihr Vater geklingelt hat.', 'Das Essen ist schlecht.', 'Das Zimmer ist zu klein.'], answer: 'Niemand ist gekommen, als ihr Vater geklingelt hat.' },
        { q: 'Was steht in der Dokumentation?', ru: 'Что написано в документации?', options: ['Tom war zweimal bei Herrn Becker.', 'Niemand war bei ihm.', 'Der Arzt war da.'], answer: 'Tom war zweimal bei Herrn Becker.' },
        { q: 'Was schlägt Olena am Ende vor?', ru: 'Что Олена предлагает в конце?', options: ['Einen Termin mit Doktor Wagner', 'Ein neues Zimmer', 'Eine Beschwerde schreiben'], answer: 'Einen Termin mit Doktor Wagner' },
      ],
      translate: [
        { de: 'Ich nehme Ihren Vorwurf ernst.', ru: 'Я воспринимаю ваш упрёк всерьёз.', wrongRu: ['Я не принимаю ваш упрёк.', 'Я воспринимаю ваш вопрос всерьёз.'] },
        { de: 'Das war ein Missverständnis.', ru: 'Это было недоразумение.', wrongRu: ['Это была ошибка медсестры.', 'Это было правильное решение.'] },
        { de: 'Danke für Ihr Verständnis.', ru: 'Спасибо за понимание.', wrongRu: ['Спасибо за помощь.', 'Простите за недоразумение.'] },
      ],
    },
  ],
};
