import type { Module } from '../types.ts';

// A2.1 informatik 04: inside the computer (lesson 0) and choosing a laptop (lesson 1).

export const module: Module = {
  id: 'informatik-a21-04-hardware', sphere: 'informatik', level: 'A2.1',
  title: 'Hardware', subtitle: 'Процессор, память, видеокарта и разъёмы: из чего состоит компьютер.',
  words: [
    { id: 'inf-a21-04-hardware', icon: 'PcCase', de: 'Hardware', pos: 'noun', article: 'die', ru: 'аппаратное обеспечение, «железо»', note: 'Без мн. ч. Читается по-английски. Противоположность: die Software.', imageQuery: 'computer hardware components', example: { de: 'Die Hardware dieses Computers ist schon alt.', ru: 'Железо этого компьютера уже старое.', cloze: 'Hardware' } },
    { id: 'inf-a21-04-prozessor', icon: 'Cpu', de: 'Prozessor', pos: 'noun', article: 'der', plural: 'Prozessoren', ru: 'процессор', imageQuery: 'cpu processor chip', collocation: { de: 'ein schneller Prozessor', ru: 'быстрый процессор' }, example: { de: 'Der Prozessor ist das Gehirn des Computers.', ru: 'Процессор — мозг компьютера.', cloze: 'Prozessor' } },
    { id: 'inf-a21-04-arbeitsspeicher', icon: 'MemoryStick', de: 'Arbeitsspeicher', pos: 'noun', article: 'der', plural: 'Arbeitsspeicher', ru: 'оперативная память (ОЗУ)', parts: ['Arbeits', 'speicher'], note: 'Arbeit + s + Speicher. Сокращение: RAM.', imageQuery: 'ram memory module', collocation: { de: 'den Arbeitsspeicher erweitern', ru: 'увеличить оперативную память' }, example: { de: 'Mehr Arbeitsspeicher macht den Laptop schneller.', ru: 'Больше оперативной памяти делает ноутбук быстрее.', cloze: 'Arbeitsspeicher' } },
    { id: 'inf-a21-04-grafikkarte', icon: 'Microchip', de: 'Grafikkarte', pos: 'noun', article: 'die', plural: 'Grafikkarten', ru: 'видеокарта', parts: ['Grafik', 'karte'], imageQuery: 'graphics card', example: { de: 'Für Spiele brauchst du eine gute Grafikkarte.', ru: 'Для игр тебе нужна хорошая видеокарта.', cloze: 'Grafikkarte' } },
    { id: 'inf-a21-04-hauptplatine', icon: 'CircuitBoard', de: 'Hauptplatine', pos: 'noun', article: 'die', plural: 'Hauptplatinen', ru: 'материнская плата', parts: ['Haupt', 'platine'], note: 'Разговорно чаще das Mainboard.', imageQuery: 'computer motherboard', example: { de: 'Alle Teile stecken auf der Hauptplatine.', ru: 'Все детали вставлены в материнскую плату.', cloze: 'Hauptplatine' } },
    { id: 'inf-a21-04-gehaeuse', icon: 'Box', de: 'Gehäuse', pos: 'noun', article: 'das', plural: 'Gehäuse', ru: 'корпус', imageQuery: 'computer case', example: { de: 'Das Gehäuse ist aus Metall.', ru: 'Корпус из металла.', cloze: 'Gehäuse' } },
    { id: 'inf-a21-04-luefter', icon: 'Fan', de: 'Lüfter', pos: 'noun', article: 'der', plural: 'Lüfter', ru: 'вентилятор, кулер', imageQuery: 'computer cooling fan', example: { de: 'Der Lüfter ist heute sehr laut.', ru: 'Вентилятор сегодня очень громкий.', cloze: 'Lüfter' } },
    { id: 'inf-a21-04-netzteil', icon: 'PlugZap', de: 'Netzteil', pos: 'noun', article: 'das', plural: 'Netzteile', ru: 'блок питания', parts: ['Netz', 'teil'], imageQuery: 'computer power supply unit', example: { de: 'Das Netzteil liefert Strom für alle Teile.', ru: 'Блок питания даёт ток всем деталям.', cloze: 'Netzteil' } },

    { id: 'inf-a21-04-geraet', icon: 'MonitorSmartphone', imageQuery: 'electronic device', de: 'Gerät', pos: 'noun', article: 'das', plural: 'Geräte', ru: 'устройство, прибор', collocation: { de: 'ein mobiles Gerät', ru: 'мобильное устройство' }, example: { de: 'Wie viele Geräte hast du zu Hause?', ru: 'Сколько у тебя дома устройств?', cloze: 'Geräte' } },
    { id: 'inf-a21-04-leistung', icon: 'Gauge', de: 'Leistung', pos: 'noun', article: 'die', plural: 'Leistungen', ru: 'производительность, мощность', collocation: { de: 'eine hohe Leistung', ru: 'высокая производительность' }, example: { de: 'Der neue Laptop hat eine hohe Leistung.', ru: 'У нового ноутбука высокая производительность.', cloze: 'Leistung' } },
    { id: 'inf-a21-04-leistungsstark', icon: 'Rocket', de: 'leistungsstark', pos: 'adj', ru: 'мощный, производительный', parts: ['leistungs', 'stark'], example: { de: 'Für Videoschnitt brauchst du einen leistungsstarken Computer.', ru: 'Для монтажа видео тебе нужен мощный компьютер.', cloze: 'leistungsstarken' } },
    { id: 'inf-a21-04-akkulaufzeit', icon: 'BatteryFull', imageQuery: 'battery charge indicator', de: 'Akkulaufzeit', pos: 'noun', article: 'die', plural: 'Akkulaufzeiten', ru: 'время работы от батареи', parts: ['Akku', 'laufzeit'], example: { de: 'Die Akkulaufzeit ist mir sehr wichtig.', ru: 'Время работы от батареи для меня очень важно.', cloze: 'Akkulaufzeit' } },
    { id: 'inf-a21-04-anschluss', icon: 'Usb', de: 'Anschluss', pos: 'noun', article: 'der', plural: 'Anschlüsse', ru: 'разъём, порт; подключение', imageQuery: 'usb ports on laptop', example: { de: 'Der Laptop hat leider zu wenige Anschlüsse.', ru: 'У ноутбука, к сожалению, слишком мало разъёмов.', cloze: 'Anschlüsse' } },
    { id: 'inf-a21-04-anschliessen', icon: 'Plug', imageQuery: 'plugging in cable', de: 'anschließen', pos: 'verb', ru: 'подключать (кабелем)', forms: 'er schließt an · hat angeschlossen', note: 'Отделяемая приставка: ich schließe den Monitor an. etwas an + Akk anschließen.', collocation: { de: 'einen Monitor anschließen', ru: 'подключить монитор', accept: ['den Monitor anschließen', 'einen Bildschirm anschließen'] }, example: { de: 'Ich schließe die Maus am Laptop an.', ru: 'Я подключаю мышь к ноутбуку.', cloze: 'schließe' } },
    { id: 'inf-a21-04-aufruesten', icon: 'ArrowBigUpDash', de: 'aufrüsten', pos: 'verb', ru: 'модернизировать, делать апгрейд', forms: 'er rüstet auf · hat aufgerüstet', note: 'Отделяемая приставка: ich rüste meinen PC auf. + Akk.', example: { de: 'Wir rüsten den alten Computer auf.', ru: 'Мы модернизируем старый компьютер.', cloze: 'rüsten' } },
    { id: 'inf-a21-04-komponente', icon: 'Puzzle', imageQuery: 'computer components', de: 'Komponente', pos: 'noun', article: 'die', plural: 'Komponenten', ru: 'компонент, комплектующая', example: { de: 'Diese Komponente passt nicht in das Gehäuse.', ru: 'Этот компонент не помещается в корпус.', cloze: 'Komponente' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wir bauen einen Computer',
      de: `Emre spielt gern am Computer, aber sein alter PC ist zu langsam. Sein Freund Lukas studiert Technische Informatik und schlägt vor: „Wir bauen zusammen einen neuen Computer!“

Am Samstag bestellen sie die Teile. Zuerst montieren sie den Prozessor und den Arbeitsspeicher auf der Hauptplatine. Dann setzen sie die Hauptplatine in das Gehäuse. Die Grafikkarte ist das teuerste Teil, weil Emre moderne Spiele spielen will.

Zum Schluss schließen sie das Netzteil an alle Teile an. Emre drückt den Knopf, aber nichts passiert. Lukas sucht den Fehler und lacht: „Der Schalter am Netzteil ist aus!“ Endlich drehen sich die Lüfter, und die Hardware funktioniert.`,
      ru: `Эмре любит играть на компьютере, но его старый ПК слишком медленный. Его друг Лукас изучает техническую информатику и предлагает: «Давай вместе соберём новый компьютер!»

В субботу они заказывают детали. Сначала они устанавливают процессор и оперативную память на материнскую плату. Потом ставят материнскую плату в корпус. Видеокарта — самая дорогая деталь, потому что Эмре хочет играть в современные игры.

Под конец они подключают блок питания ко всем деталям. Эмре нажимает кнопку, но ничего не происходит. Лукас ищет ошибку и смеётся: «Выключатель на блоке питания выключен!» Наконец вентиляторы крутятся, и железо работает.`,
      gloss: {
        emre: 'Эмре (имя)', emres: 'Эмре (чей?)', lukas: 'Лукас (имя)', alter: 'старый', pc: 'ПК, персональный компьютер', technische: 'техническую', informatik: 'информатика',
        schlägt: 'предлагает (vorschlagen)', vor: '(vorschlagen) приставка; перед', bauen: 'строим, собираем', samstag: 'суббота', bestellen: 'заказывают', teile: 'детали', teil: 'деталь, часть',
        montieren: 'устанавливают, монтируют', setzen: 'ставят', teuerste: 'самая дорогая', moderne: 'современные', spiele: 'игры', schluss: 'конец (zum Schluss — под конец)',
        schließen: 'подключают (anschließen)', an: '(anschließen) приставка; к, на', knopf: 'кнопка', lacht: 'смеётся', schalter: 'выключатель', aus: 'выключен; из', drehen: 'крутятся (sich drehen)',
        teure: 'дорогую', videos: 'видео', schneiden: 'монтировать (видео)', uni: 'университет',
      },
      questions: [
        { q: 'Warum wollen Emre und Lukas einen neuen Computer bauen?', ru: 'Почему Эмре и Лукас хотят собрать новый компьютер?', options: ['Weil Emres alter PC zu langsam ist.', 'Weil Lukas einen PC für die Uni braucht.', 'Weil Emres Computer kaputt ist.'], answer: 'Weil Emres alter PC zu langsam ist.' },
        { q: 'Was montieren sie zuerst auf der Hauptplatine?', ru: 'Что они сначала устанавливают на материнскую плату?', options: ['Den Prozessor und den Arbeitsspeicher', 'Die Grafikkarte und das Netzteil', 'Den Lüfter und das Gehäuse'], answer: 'Den Prozessor und den Arbeitsspeicher' },
        { q: 'Warum kaufen sie eine teure Grafikkarte?', ru: 'Почему они покупают дорогую видеокарту?', options: ['Weil Emre moderne Spiele spielen will.', 'Weil Lukas Videos schneiden will.', 'Weil der Prozessor zu schwach ist.'], answer: 'Weil Emre moderne Spiele spielen will.' },
        { q: 'Warum funktioniert der Computer zuerst nicht?', ru: 'Почему компьютер сначала не работает?', options: ['Der Schalter am Netzteil ist aus.', 'Der Lüfter ist kaputt.', 'Die Grafikkarte fehlt.'], answer: 'Der Schalter am Netzteil ist aus.' },
      ],
      translate: [
        { de: 'Die Grafikkarte ist das teuerste Teil.', ru: 'Видеокарта — самая дорогая деталь.', wrongRu: ['Видеокарта — самая дешёвая деталь.', 'Процессор — самая дорогая деталь.'] },
        { de: 'Sie setzen die Hauptplatine in das Gehäuse.', ru: 'Они ставят материнскую плату в корпус.', wrongRu: ['Они достают материнскую плату из корпуса.', 'Он ставит материнскую плату в корпус.', 'Они ставят видеокарту в корпус.'] },
        { de: 'Endlich drehen sich die Lüfter.', ru: 'Наконец вентиляторы крутятся.', wrongRu: ['Вентиляторы всё ещё не крутятся.', 'Наконец вентиляторы остановились.'] },
      ],
    },
    {
      lesson: 1, title: 'Ein Laptop für das Studium',
      de: `Emres Schwester Derya beginnt im Herbst ihr Studium an der TU Wien. Sie braucht ein neues Gerät, das sie jeden Tag in die Uni mitnehmen kann. Emre will ihr einen Gaming-Laptop empfehlen, aber Derya sagt: „Ich brauche keine riesige Leistung. Die Akkulaufzeit ist mir viel wichtiger.“

Im Geschäft vergleichen sie drei Laptops. Der erste ist sehr leistungsstark, aber schwer. Der zweite hat zu wenige Anschlüsse, und man kann keinen Monitor anschließen. Der dritte ist leicht, hält zehn Stunden und hat genug Anschlüsse.

Derya nimmt den dritten. Der Verkäufer erklärt, dass man den Arbeitsspeicher später aufrüsten kann. „Super“, sagt Derya, „dann kann ich diese Komponente in zwei Jahren einfach tauschen.“`,
      ru: `Сестра Эмре Дерья осенью начинает учёбу в Венском техническом университете. Ей нужно новое устройство, которое она сможет каждый день брать с собой в университет. Эмре хочет посоветовать ей игровой ноутбук, но Дерья говорит: «Мне не нужна огромная производительность. Время работы от батареи для меня гораздо важнее».

В магазине они сравнивают три ноутбука. Первый очень мощный, но тяжёлый. У второго слишком мало разъёмов, и к нему нельзя подключить монитор. Третий лёгкий, держит заряд десять часов и имеет достаточно разъёмов.

Дерья берёт третий. Продавец объясняет, что оперативную память можно будет потом расширить. «Супер, — говорит Дерья, — тогда через два года я просто заменю этот компонент».`,
      gloss: {
        emre: 'Эмре (имя)',
        emres: 'Эмре (чей?)', derya: 'Дерья (имя)', herbst: 'осень (im Herbst — осенью)', studium: 'учёба в вузе', tu: 'TU — Технический университет', wien: 'Вена',
        das: 'которое; артикль ср. р.; это', mitnehmen: 'брать с собой', 'gaming-laptop': 'игровой ноутбук', empfehlen: 'посоветовать, порекомендовать', riesige: 'огромная',
        wichtiger: 'важнее', geschäft: 'магазин', vergleichen: 'сравнивают', laptops: 'ноутбуки', laptop: 'ноутбук', monitor: 'монитор', dritte: 'третий', dritten: 'третий (вин.)',
        hält: 'держит (заряд), работает', stunden: 'часов', genug: 'достаточно', verkäufer: 'продавец', super: 'супер', jahren: 'лет (in zwei Jahren — через два года)', tauschen: 'заменить',
        wichtigsten: 'важнее всего (am wichtigsten)', hohe: 'высокая', großer: 'большой', teuer: 'дорогой', welchen: 'какой (вин.)', erste: 'первый', erklärt: 'объясняет',
      },
      questions: [
        { q: 'Was ist für Derya am wichtigsten?', ru: 'Что для Дерьи важнее всего?', options: ['Die Akkulaufzeit', 'Eine hohe Leistung', 'Ein großer Bildschirm'], answer: 'Die Akkulaufzeit' },
        { q: 'Was ist das Problem beim zweiten Laptop?', ru: 'В чём проблема второго ноутбука?', options: ['Er hat zu wenige Anschlüsse.', 'Er ist zu schwer.', 'Er ist zu teuer.'], answer: 'Er hat zu wenige Anschlüsse.' },
        { q: 'Welchen Laptop nimmt Derya?', ru: 'Какой ноутбук берёт Дерья?', options: ['Den dritten', 'Den ersten', 'Den zweiten'], answer: 'Den dritten' },
        { q: 'Was kann man später aufrüsten?', ru: 'Что можно потом модернизировать?', options: ['Den Arbeitsspeicher', 'Den Prozessor', 'Die Grafikkarte'], answer: 'Den Arbeitsspeicher' },
      ],
      translate: [
        { de: 'Die Akkulaufzeit ist mir viel wichtiger.', ru: 'Время работы от батареи для меня гораздо важнее.', wrongRu: ['Время работы от батареи для меня совсем не важно.', 'Производительность для меня гораздо важнее.'] },
        { de: 'Man kann keinen Monitor anschließen.', ru: 'Нельзя подключить монитор.', wrongRu: ['Можно подключить монитор.', 'Нельзя подключить клавиатуру.'] },
        { de: 'Der erste Laptop ist sehr leistungsstark.', ru: 'Первый ноутбук очень мощный.', wrongRu: ['Второй ноутбук очень мощный.', 'Первый ноутбук очень лёгкий.', 'Первый ноутбук не очень мощный.'] },
      ],
    },
  ],
};
