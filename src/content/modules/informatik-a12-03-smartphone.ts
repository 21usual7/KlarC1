import type { Module } from '../types.ts';

export const module: Module = {
  id: 'informatik-a12-03-smartphone', sphere: 'informatik', level: 'A1.2',
  title: 'Das Smartphone', subtitle: 'Приложения, аккумулятор, камера и звонки: слова для телефона.',
  words: [
    { id: 'inf-a12-03-smartphone', icon: 'TabletSmartphone', imageQuery: 'smartphone', de: 'Smartphone', pos: 'noun', article: 'das', plural: 'Smartphones', ru: 'смартфон', note: 'В разговоре чаще: das Handy.', example: { de: 'Mein Smartphone ist neu.', ru: 'Мой смартфон новый.', cloze: 'Smartphone' } },
    { id: 'inf-a12-03-app', icon: 'LayoutGrid', imageQuery: 'app icons on smartphone screen', de: 'App', pos: 'noun', article: 'die', plural: 'Apps', ru: 'приложение', note: 'В Австрии иногда: das App.', collocation: { de: 'eine App installieren', ru: 'установить приложение', accept: ['die App installieren'] }, example: { de: 'Die App ist kostenlos.', ru: 'Приложение бесплатное.', cloze: 'App' } },
    { id: 'inf-a12-03-akku', icon: 'Battery', imageQuery: 'smartphone battery', de: 'Akku', pos: 'noun', article: 'der', plural: 'Akkus', ru: 'аккумулятор, батарея', collocation: { de: 'den Akku laden', ru: 'зарядить аккумулятор', accept: ['den Akku aufladen'] }, example: { de: 'Mein Akku ist fast leer.', ru: 'Мой аккумулятор почти сел.', cloze: 'Akku' } },
    { id: 'inf-a12-03-laden', icon: 'BatteryCharging', imageQuery: 'phone charging', de: 'laden', pos: 'verb', ru: 'заряжать; загружать', forms: 'er lädt · hat geladen', note: 'Сильный глагол: du lädst, er lädt. Синоним: aufladen.', collocation: { de: 'das Handy laden', ru: 'зарядить телефон', accept: ['das Smartphone laden', 'das Handy aufladen'] }, example: { de: 'Ich lade mein Handy in der Nacht.', ru: 'Я заряжаю телефон ночью.', cloze: 'lade' } },
    { id: 'inf-a12-03-ladegeraet', icon: 'PlugZap', imageQuery: 'phone charger', de: 'Ladegerät', pos: 'noun', article: 'das', plural: 'Ladegeräte', ru: 'зарядное устройство, зарядка', parts: ['Lade', 'gerät'], example: { de: 'Wo ist mein Ladegerät?', ru: 'Где моя зарядка?', cloze: 'Ladegerät' } },
    { id: 'inf-a12-03-leer', icon: 'BatteryLow', de: 'leer', pos: 'adj', ru: 'пустой; разряженный (об аккумуляторе)', collocation: { de: 'Der Akku ist leer.', ru: 'Аккумулятор сел.' }, example: { de: 'Der Akku ist schon wieder leer.', ru: 'Аккумулятор опять сел.', cloze: 'leer' } },
    { id: 'inf-a12-03-voll', icon: 'BatteryFull', de: 'voll', pos: 'adj', ru: 'полный; заряженный', collocation: { de: 'voll geladen', ru: 'полностью заряжен' }, example: { de: 'Jetzt ist der Akku wieder voll.', ru: 'Теперь аккумулятор снова заряжен.', cloze: 'voll' } },
    { id: 'inf-a12-03-display', icon: 'MonitorSmartphone', imageQuery: 'smartphone touchscreen', de: 'Display', pos: 'noun', article: 'das', plural: 'Displays', ru: 'дисплей, экран (телефона)', note: 'У компьютера обычно говорят der Bildschirm.', example: { de: 'Das Display ist kaputt.', ru: 'Дисплей сломан.', cloze: 'Display' } },

    { id: 'inf-a12-03-kamera', icon: 'Camera', imageQuery: 'smartphone camera lens', de: 'Kamera', pos: 'noun', article: 'die', plural: 'Kameras', ru: 'камера, фотоаппарат', example: { de: 'Die Kamera von meinem Handy ist sehr gut.', ru: 'Камера моего телефона очень хорошая.', cloze: 'Kamera' } },
    { id: 'inf-a12-03-foto', icon: 'Image', imageQuery: 'printed photographs', de: 'Foto', pos: 'noun', article: 'das', plural: 'Fotos', ru: 'фотография, фото', collocation: { de: 'ein Foto machen', ru: 'сделать фото', accept: ['ein Foto schießen'] }, example: { de: 'Ich mache ein Foto von dir.', ru: 'Я тебя фотографирую.', cloze: 'Foto' } },
    { id: 'inf-a12-03-fotografieren', icon: 'Aperture', imageQuery: 'person taking photo with phone', de: 'fotografieren', pos: 'verb', ru: 'фотографировать', forms: 'er fotografiert · hat fotografiert', note: 'Perfekt без ge-: hat fotografiert. fotografieren + Akk.', example: { de: 'Sie fotografiert den Hund.', ru: 'Она фотографирует собаку.', cloze: 'fotografiert' } },
    { id: 'inf-a12-03-anruf', icon: 'Phone', imageQuery: 'person talking on mobile phone', de: 'Anruf', pos: 'noun', article: 'der', plural: 'Anrufe', ru: 'звонок (телефонный)', collocation: { de: 'einen Anruf bekommen', ru: 'получить звонок' }, example: { de: 'Ich habe einen Anruf von Papa.', ru: 'Мне звонит папа.', cloze: 'Anruf' } },
    { id: 'inf-a12-03-kontakt', icon: 'Contact', de: 'Kontakt', pos: 'noun', article: 'der', plural: 'Kontakte', ru: 'контакт (в телефоне)', collocation: { de: 'einen Kontakt speichern', ru: 'сохранить контакт' }, example: { de: 'Ich speichere den Kontakt im Handy.', ru: 'Я сохраняю контакт в телефоне.', cloze: 'Kontakt' } },
    { id: 'inf-a12-03-tippen', icon: 'Pointer', imageQuery: 'finger typing on smartphone', de: 'tippen', pos: 'verb', ru: 'нажимать (на экран); набирать текст', forms: 'er tippt · hat getippt', note: 'auf + Akk: auf das Symbol tippen.', collocation: { de: 'auf das Display tippen', ru: 'нажать на экран', accept: ['auf den Bildschirm tippen'] }, example: { de: 'Er tippt schnell eine Nachricht.', ru: 'Он быстро набирает сообщение.', cloze: 'tippt' } },
    { id: 'inf-a12-03-wischen', icon: 'MoveHorizontal', imageQuery: 'finger swiping touchscreen', de: 'wischen', pos: 'verb', ru: 'проводить пальцем, свайпать', forms: 'er wischt · hat gewischt', note: 'nach links / nach rechts wischen — свайпнуть влево / вправо. Основное значение: вытирать.', collocation: { de: 'nach links wischen', ru: 'свайпнуть влево' }, example: { de: 'Wisch nach oben, dann ist das Handy offen.', ru: 'Проведи вверх — и телефон разблокирован.', cloze: 'Wisch' } },
    { id: 'inf-a12-03-lautlos', icon: 'BellOff', de: 'lautlos', pos: 'adj', ru: 'беззвучный (режим)', collocation: { de: 'auf lautlos stellen', ru: 'поставить на беззвучный' }, example: { de: 'Im Unterricht ist mein Handy lautlos.', ru: 'На уроке мой телефон на беззвучном.', cloze: 'lautlos' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Der Akku ist leer',
      de: `Paul hat ein neues Smartphone. Das Display ist groß und die Kamera ist super. Paul installiert viele Apps: Spiele, Musik und einen Chat.

Am Nachmittag ist Paul in der Stadt. Er spielt und chattet zwei Stunden. Dann ist der Akku leer! Paul hat kein Ladegerät dabei. Er kann seine Mutter nicht anrufen.

Er geht in ein Café. Die Frau dort hilft ihm. Paul lädt das Handy eine halbe Stunde. Jetzt ist der Akku halb voll. Paul sagt: „Morgen nehme ich mein Ladegerät mit!“`,
      ru: `У Пауля новый смартфон. Дисплей большой, а камера — супер. Пауль устанавливает много приложений: игры, музыку и чат.

Днём Пауль в городе. Он два часа играет и переписывается. И вдруг аккумулятор сел! У Пауля нет с собой зарядки. Он не может позвонить маме.

Он заходит в кафе. Женщина там ему помогает. Пауль полчаса заряжает телефон. Теперь аккумулятор заряжен наполовину. Пауль говорит: «Завтра я возьму с собой зарядку!»`,
      gloss: { paul: 'Пауль (имя)', super: 'супер, отличный', installiert: 'устанавливает', spiele: 'игры', musik: 'музыка', chat: 'чат', nachmittag: 'вторая половина дня', stadt: 'город', stunden: 'часы (мн. ч.)', dabei: 'с собой', mutter: 'мама', café: 'кафе', frau: 'женщина', lädt: 'заряжает', halbe: 'половину', halb: 'наполовину', mit: 'с; (mitnehmen) брать с собой', warum: 'почему', nummer: 'номер', wie: 'как, насколько', ganz: 'совсем, полностью', schule: 'школа' },
      questions: [
        { q: 'Was ist auf dem neuen Smartphone super?', ru: 'Что в новом смартфоне супер?', options: ['Die Kamera', 'Der Akku', 'Das Ladegerät'], answer: 'Die Kamera' },
        { q: 'Warum kann Paul seine Mutter nicht anrufen?', ru: 'Почему Пауль не может позвонить маме?', options: ['Der Akku ist leer.', 'Er hat keine Nummer.', 'Das Display ist kaputt.'], answer: 'Der Akku ist leer.' },
        { q: 'Wo lädt Paul das Handy?', ru: 'Где Пауль заряжает телефон?', options: ['In einem Café', 'Zu Hause', 'In der Schule'], answer: 'In einem Café' },
        { q: 'Wie voll ist der Akku am Ende?', ru: 'Насколько заряжен аккумулятор в конце?', options: ['Halb voll', 'Ganz voll', 'Leer'], answer: 'Halb voll' },
      ],
      translate: [
        { de: 'Der Akku ist leer.', ru: 'Аккумулятор сел.', wrongRu: ['Аккумулятор заряжен.', 'Аккумулятор сломан.'] },
        { de: 'Paul hat kein Ladegerät dabei.', ru: 'У Пауля нет с собой зарядки.', wrongRu: ['У Пауля есть с собой зарядка.', 'У Пауля нет с собой телефона.'] },
        { de: 'Das Display ist groß.', ru: 'Дисплей большой.', wrongRu: ['Дисплей маленький.', 'Камера большая.'] },
      ],
    },
    {
      lesson: 1, title: 'Fotos für Oma',
      de: `Sara hat am Samstag Geburtstag. Ihre Oma wohnt in Graz und kann nicht kommen. Am Abend bekommt Sara einen Anruf von Oma: „Schick mir bitte Fotos!“

Saras Bruder David fotografiert die Party mit seiner Kamera. Er macht dreißig Fotos. Sara wischt durch die Fotos und tippt auf die besten. Dann sucht sie Oma in den Kontakten und schickt fünf Fotos.

Am Sonntag geht Sara ins Kino. Dort ist ihr Handy lautlos. Nach dem Film sieht sie eine Nachricht von Oma: „Die Fotos sind wunderschön!“`,
      ru: `В субботу у Сары день рождения. Её бабушка живёт в Граце и не может приехать. Вечером Саре звонит бабушка: «Пришли мне, пожалуйста, фотографии!»

Брат Сары Давид фотографирует праздник своей камерой. Он делает тридцать фотографий. Сара листает фотографии и нажимает на лучшие. Потом она ищет бабушку в контактах и отправляет пять фотографий.

В воскресенье Сара идёт в кино. Там её телефон на беззвучном. После фильма она видит сообщение от бабушки: «Фотографии чудесные!»`,
      gloss: { sara: 'Сара (имя)', saras: 'Сары (чей?)', david: 'Давид (имя)', samstag: 'суббота', geburtstag: 'день рождения', oma: 'бабушка', graz: 'Грац (город в Австрии)', linz: 'Линц (город в Австрии)', schick: 'пришли!, отправь!', party: 'вечеринка, праздник', seiner: 'своей (ж. р., дат.)', dreißig: 'тридцать', besten: 'лучшие', kontakten: 'контактах (дат. мн. ч.)', schickt: 'отправляет', sonntag: 'воскресенье', kino: 'кино, кинотеатр', film: 'фильм', wunderschön: 'чудесный, очень красивый', wien: 'Вена' },
      questions: [
        { q: 'Wo wohnt Saras Oma?', ru: 'Где живёт бабушка Сары?', options: ['In Graz', 'In Wien', 'In Linz'], answer: 'In Graz' },
        { q: 'Wer fotografiert die Party?', ru: 'Кто фотографирует праздник?', options: ['David', 'Sara', 'Oma'], answer: 'David' },
        { q: 'Wie viele Fotos schickt Sara?', ru: 'Сколько фотографий отправляет Сара?', options: ['Fünf', 'Dreißig', 'Zehn'], answer: 'Fünf' },
        { q: 'Wann sieht Sara die Nachricht von Oma?', ru: 'Когда Сара видит сообщение от бабушки?', options: ['Nach dem Film', 'Vor dem Film', 'Am Samstag'], answer: 'Nach dem Film' },
      ],
      translate: [
        { de: 'David fotografiert die Party.', ru: 'Давид фотографирует праздник.', wrongRu: ['Давид сфотографировал праздник.', 'Сара фотографирует праздник.'] },
        { de: 'Sara bekommt einen Anruf von Oma.', ru: 'Саре звонит бабушка.', wrongRu: ['Сара звонит бабушке.', 'Сара получает сообщение от бабушки.'] },
        { de: 'Im Kino ist ihr Handy lautlos.', ru: 'В кино её телефон на беззвучном.', wrongRu: ['В кино её телефон выключен.', 'В кино его телефон на беззвучном.'] },
      ],
    },
  ],
};
