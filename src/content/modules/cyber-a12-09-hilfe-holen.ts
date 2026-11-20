import type { Module } from '../types.ts';

export const module: Module = {
  id: 'cyber-a12-09-hilfe-holen', sphere: 'cyber', level: 'A1.2',
  title: 'Hilfe holen', subtitle: 'Проблема, помощь, полиция: кому рассказать, если в сети что-то пошло не так.',
  words: [
    { id: 'cyb-a12-09-problem', icon: 'CircleAlert', de: 'Problem', pos: 'noun', article: 'das', plural: 'Probleme', ru: 'проблема', collocation: { de: 'ein Problem haben', ru: 'иметь проблему', accept: ['Probleme haben'] }, example: { de: 'Ich habe ein Problem mit meinem Konto.', ru: 'У меня проблема с моим аккаунтом.', cloze: 'Problem' } },
    { id: 'cyb-a12-09-hilfe', icon: 'LifeBuoy', de: 'Hilfe', pos: 'noun', article: 'die', ru: 'помощь', note: 'Hilfe holen — позвать на помощь, найти помощь.', collocation: { de: 'um Hilfe bitten', ru: 'попросить о помощи' }, example: { de: 'Ich brauche deine Hilfe.', ru: 'Мне нужна твоя помощь.', cloze: 'Hilfe' } },
    { id: 'cyb-a12-09-eltern', icon: 'Users', imageQuery: 'parents talking with teenager', de: 'Eltern', pos: 'noun', article: 'die', pluralOnly: true, ru: 'родители', example: { de: 'Meine Eltern wissen das schon.', ru: 'Мои родители это уже знают.', cloze: 'Eltern' } },
    { id: 'cyb-a12-09-erzaehlen', icon: 'MessagesSquare', de: 'erzählen', pos: 'verb', ru: 'рассказывать', forms: 'er erzählt · hat erzählt', note: 'jemandem (Dat) etwas (Akk) erzählen; erzählen von + Dat.', collocation: { de: 'den Eltern alles erzählen', ru: 'рассказать родителям всё', accept: ['meinen Eltern alles erzählen'] }, example: { de: 'Erzähl deinen Eltern von dem Problem!', ru: 'Расскажи родителям об этой проблеме!', cloze: 'Erzähl' } },
    { id: 'cyb-a12-09-angst', icon: 'Frown', imageQuery: 'frightened person', de: 'Angst', pos: 'noun', article: 'die', plural: 'Ängste', ru: 'страх', note: 'Angst haben vor + Dat — бояться чего-то.', collocation: { de: 'Angst haben', ru: 'бояться', accept: ['keine Angst haben'] }, example: { de: 'Hab keine Angst, wir helfen dir!', ru: 'Не бойся, мы тебе поможем!', cloze: 'Angst' } },
    { id: 'cyb-a12-09-mobbing', icon: 'MessageSquareWarning', imageQuery: 'bullying', de: 'Mobbing', pos: 'noun', article: 'das', ru: 'травля, буллинг', note: 'В интернете — das Cybermobbing.', example: { de: 'Mobbing im Klassenchat ist nicht okay.', ru: 'Травля в чате класса — это не нормально.', cloze: 'Mobbing' } },
    { id: 'cyb-a12-09-screenshot', icon: 'Camera', imageQuery: 'smartphone screenshot', de: 'Screenshot', pos: 'noun', article: 'der', plural: 'Screenshots', ru: 'скриншот', collocation: { de: 'einen Screenshot machen', ru: 'сделать скриншот', accept: ['Screenshots machen'] }, example: { de: 'Mach einen Screenshot von der Nachricht!', ru: 'Сделай скриншот сообщения!', cloze: 'Screenshot' } },
    { id: 'cyb-a12-09-beleidigen', icon: 'Angry', de: 'beleidigen', pos: 'verb', ru: 'оскорблять', forms: 'er beleidigt · hat beleidigt', note: 'jemanden (Akk) beleidigen.', example: { de: 'Ein Junge beleidigt sie im Chat.', ru: 'Один мальчик оскорбляет её в чате.', cloze: 'beleidigt' } },

    { id: 'cyb-a12-09-polizei', icon: 'Siren', imageQuery: 'police car', de: 'Polizei', pos: 'noun', article: 'die', ru: 'полиция', collocation: { de: 'zur Polizei gehen', ru: 'пойти в полицию', accept: ['die Polizei rufen'] }, example: { de: 'Wir gehen zusammen zur Polizei.', ru: 'Мы вместе идём в полицию.', cloze: 'Polizei' } },
    { id: 'cyb-a12-09-anzeige', icon: 'FileText', imageQuery: 'police station', de: 'Anzeige', pos: 'noun', article: 'die', plural: 'Anzeigen', ru: 'заявление (в полицию)', note: 'Также «объявление». Anzeige erstatten — подать заявление в полицию.', collocation: { de: 'Anzeige erstatten', ru: 'подать заявление в полицию', accept: ['eine Anzeige erstatten'] }, example: { de: 'Papa erstattet Anzeige bei der Polizei.', ru: 'Папа подаёт заявление в полицию.', cloze: 'Anzeige' } },
    { id: 'cyb-a12-09-notruf', icon: 'PhoneCall', imageQuery: 'emergency call telephone', de: 'Notruf', pos: 'noun', article: 'der', plural: 'Notrufe', ru: 'экстренный вызов; номер экстренной службы', parts: ['Not', 'ruf'], note: 'В Австрии: полиция — 133, общий экстренный номер — 112.', example: { de: 'Im Notfall wählst du den Notruf.', ru: 'В экстренной ситуации ты звонишь на номер экстренной службы.', cloze: 'Notruf' } },
    { id: 'cyb-a12-09-beratung', icon: 'HeartHandshake', imageQuery: 'counseling conversation', de: 'Beratung', pos: 'noun', article: 'die', plural: 'Beratungen', ru: 'консультация; служба помощи', note: 'В Австрии для детей и подростков есть «Rat auf Draht» (телефон 147).', example: { de: 'Die Beratung ist kostenlos und anonym.', ru: 'Консультация бесплатная и анонимная.', cloze: 'Beratung' } },
    { id: 'cyb-a12-09-anonym', icon: 'Ghost', de: 'anonym', pos: 'adj', ru: 'анонимный; анонимно', example: { de: 'Du kannst dort anonym anrufen.', ru: 'Туда можно позвонить анонимно.', cloze: 'anonym' } },
    { id: 'cyb-a12-09-beweis', icon: 'FileSearch', imageQuery: 'evidence bag', de: 'Beweis', pos: 'noun', article: 'der', plural: 'Beweise', ru: 'доказательство', collocation: { de: 'Beweise sammeln', ru: 'собирать доказательства', accept: ['die Beweise sammeln'] }, example: { de: 'Der Screenshot ist ein Beweis.', ru: 'Скриншот — это доказательство.', cloze: 'Beweis' } },
    { id: 'cyb-a12-09-ernst', icon: 'OctagonAlert', de: 'ernst', pos: 'adj', ru: 'серьёзный; серьёзно', collocation: { de: 'etwas ernst nehmen', ru: 'воспринимать что-то всерьёз', accept: ['das ernst nehmen'] }, example: { de: 'Die Polizei nimmt das Problem ernst.', ru: 'Полиция воспринимает проблему всерьёз.', cloze: 'ernst' } },
    { id: 'cyb-a12-09-sprechen', icon: 'Speech', imageQuery: 'people talking', de: 'sprechen', pos: 'verb', ru: 'говорить, разговаривать', forms: 'er spricht · hat gesprochen', note: 'sprechen mit + Dat (с кем), über + Akk (о чём). Повелительное: Sprich!', example: { de: 'Ich spreche mit meiner Lehrerin.', ru: 'Я разговариваю со своей учительницей.', cloze: 'spreche' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ärger im Klassenchat',
      de: `Elif ist vierzehn. Seit einer Woche hat sie ein Problem. In ihrem Klassenchat beleidigt ein Junge sie jeden Tag. Er schreibt böse Nachrichten über sie. Das ist Mobbing. Elif hat Angst und schläft schlecht.

Ihre Freundin Sophie sagt: „Du brauchst Hilfe. Mach Screenshots von den Nachrichten!“ Elif macht Screenshots. Dann erzählt sie ihren Eltern alles.

Ihre Eltern sind nicht böse. Sie sagen: „Danke, du hast uns alles erzählt. Wir helfen dir.“ Am Montag gehen sie zusammen zur Lehrerin. Die Lehrerin spricht mit dem Jungen. Elif fühlt sich jetzt besser.`,
      ru: `Элиф четырнадцать. Уже неделю у неё проблема. В чате класса один мальчик каждый день её оскорбляет. Он пишет о ней злые сообщения. Это травля. Элиф страшно, и она плохо спит.

Её подруга Софи говорит: «Тебе нужна помощь. Сделай скриншоты сообщений!» Элиф делает скриншоты. Потом она всё рассказывает родителям.

Родители не сердятся. Они говорят: «Спасибо, что ты нам всё рассказала. Мы тебе поможем». В понедельник они вместе идут к учительнице. Учительница разговаривает с мальчиком. Теперь Элиф чувствует себя лучше.`,
      gloss: {
        'ärger': 'неприятности', elif: 'Элиф (имя)', sophie: 'Софи (имя)', vierzehn: 'четырнадцать', klassenchat: 'чат класса', junge: 'мальчик', jungen: 'мальчиком (дат.)',
        'böse': 'злой; сердитый', 'bösen': 'злые', nachrichten: 'сообщения', 'schläft': 'спит', 'fühlt': 'чувствует', besser: 'лучше', sagen: 'говорят',
        erzählt: 'рассказывает; (hast erzählt) рассказала', spricht: 'разговаривает', chat: 'чат', 'e-mail': 'электронная почта', sms: 'SMS',
        'lösch': 'удали!', zurück: 'обратно, в ответ', schreib: 'напиши!', soll: 'должна, следует',
      },
      questions: [
        { q: 'Wo bekommt Elif die bösen Nachrichten?', ru: 'Где Элиф получает злые сообщения?', options: ['Im Klassenchat', 'Per E-Mail', 'Per SMS'], answer: 'Im Klassenchat' },
        { q: 'Was sagt Sophie?', ru: 'Что говорит Софи?', options: ['Mach Screenshots!', 'Lösch den Chat!', 'Schreib zurück!'], answer: 'Mach Screenshots!' },
        { q: 'Wem erzählt Elif alles?', ru: 'Кому Элиф всё рассказывает?', options: ['Ihren Eltern', 'Ihrer Lehrerin', 'Ihrem Bruder'], answer: 'Ihren Eltern' },
      ],
      translate: [
        { de: 'Elif hat ein Problem.', ru: 'У Элиф проблема.', wrongRu: ['У Элиф нет проблем.', 'У Софи проблема.'] },
        { de: 'Mach Screenshots von den Nachrichten!', ru: 'Сделай скриншоты сообщений!', wrongRu: ['Удали скриншоты сообщений!', 'Сделай скриншоты фотографий!'] },
        { de: 'Sie erzählt ihren Eltern alles.', ru: 'Она рассказывает родителям всё.', wrongRu: ['Она ничего не рассказывает родителям.', 'Она рассказывает всё подруге.', 'Он рассказывает родителям всё.'] },
      ],
    },
    {
      lesson: 1, title: 'Ein Fall für die Polizei',
      de: `David ist fünfzehn und spielt gern online. Eines Tages schreibt ihm ein Fremder: „Schick mir Geld, sonst zeige ich deine Chats allen!“ David hat Angst. Was soll er tun?

Er ruft eine Beratung an. Die Beratung ist kostenlos und anonym. Die Frau am Telefon sagt: „Das ist ernst. Sprich mit deinen Eltern. Lösch nichts, denn die Nachrichten sind Beweise.“

David spricht mit seinem Vater. Zusammen gehen sie zur Polizei und erstatten Anzeige. Der Polizist sagt: „Im Notfall wählst du sofort den Notruf.“ David ist froh: Er hat Hilfe geholt.`,
      ru: `Давиду пятнадцать, и он любит играть онлайн. Однажды ему пишет незнакомец: «Пришли мне деньги, иначе я покажу твои чаты всем!» Давиду страшно. Что ему делать?

Он звонит в службу помощи. Консультация бесплатная и анонимная. Женщина по телефону говорит: «Это серьёзно. Поговори с родителями. Ничего не удаляй, ведь сообщения — это доказательства».

Давид разговаривает с папой. Вместе они идут в полицию и подают заявление. Полицейский говорит: «В экстренной ситуации сразу звони на номер экстренной службы». Давид рад: он нашёл помощь.`,
      gloss: {
        fall: 'случай, дело', david: 'Давид (имя)', 'fünfzehn': 'пятнадцать', gern: 'охотно (spielt gern — любит играть)', online: 'онлайн', eines: '(eines Tages) однажды', tages: '(eines Tages) однажды',
        fremder: 'незнакомец, чужой', schick: 'пришли!', geld: 'деньги', sonst: 'иначе', zeige: '(я) покажу', chats: 'чаты', allen: 'всем', soll: 'должен, следует', tun: 'делать',
        ruft: 'звонит (anrufen)', telefon: 'телефон', sprich: 'поговори!', 'lösch': 'удали!', nachrichten: 'сообщения', erstatten: 'подают (Anzeige erstatten — подать заявление)',
        polizist: 'полицейский', notfall: 'экстренный случай', 'wählst': '(ты) набираешь (номер)', geholt: '(hat geholt) позвал, нашёл (помощь)', fotos: 'фотографии',
        passwort: 'пароль', teuer: 'дорогой, платный', nett: 'милый, приятный', wohin: 'куда', 'löschen': 'удалять', nur: 'только',
      },
      questions: [
        { q: 'Was will der Fremde?', ru: 'Чего хочет незнакомец?', options: ['Geld', 'Fotos', 'Ein Passwort'], answer: 'Geld' },
        { q: 'Wie ist die Beratung?', ru: 'Какая консультация?', options: ['Kostenlos und anonym', 'Teuer und anonym', 'Nur online'], answer: 'Kostenlos und anonym' },
        { q: 'Warum soll David nichts löschen?', ru: 'Почему Давиду не нужно ничего удалять?', options: ['Die Nachrichten sind Beweise.', 'Die Nachrichten sind nett.', 'Sein Vater will die Nachrichten lesen.'], answer: 'Die Nachrichten sind Beweise.' },
        { q: 'Wohin gehen David und sein Vater?', ru: 'Куда идут Давид и его папа?', options: ['Zur Polizei', 'Zur Beratung', 'In die Schule'], answer: 'Zur Polizei' },
      ],
      translate: [
        { de: 'Die Beratung ist kostenlos und anonym.', ru: 'Консультация бесплатная и анонимная.', wrongRu: ['Консультация платная и анонимная.', 'Консультация бесплатная, но не анонимная.'] },
        { de: 'Die Nachrichten sind Beweise.', ru: 'Сообщения — это доказательства.', wrongRu: ['Сообщения — это не доказательства.', 'Скриншоты — это доказательства.'] },
        { de: 'David geht mit seinem Vater zur Polizei.', ru: 'Давид идёт с папой в полицию.', wrongRu: ['Давид идёт с мамой в полицию.', 'Давид не идёт с папой в полицию.', 'Давид звонит с папой в полицию.'] },
      ],
    },
  ],
};
