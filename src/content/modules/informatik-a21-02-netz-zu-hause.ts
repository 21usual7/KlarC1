import type { Module } from '../types.ts';

// A2.1 informatik 02: setting up the home network (lesson 0) and slow internet (lesson 1).

export const module: Module = {
  id: 'informatik-a21-02-netz-zu-hause', sphere: 'informatik', level: 'A2.1',
  title: 'Das Netz zu Hause', subtitle: 'Роутер, Wi-Fi, скорость и сбои: как настроить интернет в квартире.',
  words: [
    { id: 'inf-a21-02-router', icon: 'Router', de: 'Router', pos: 'noun', article: 'der', plural: 'Router', ru: 'роутер, маршрутизатор', imageQuery: 'wireless router', collocation: { de: 'den Router neu starten', ru: 'перезагрузить роутер', accept: ['den Router neustarten'] }, example: { de: 'Der Router steht im Wohnzimmer.', ru: 'Роутер стоит в гостиной.', cloze: 'Router' } },
    { id: 'inf-a21-02-modem', icon: 'Box', de: 'Modem', pos: 'noun', article: 'das', plural: 'Modems', ru: 'модем', imageQuery: 'cable modem', example: { de: 'Das Modem verbindet die Wohnung mit dem Internet.', ru: 'Модем подключает квартиру к интернету.', cloze: 'Modem' } },
    { id: 'inf-a21-02-heimnetz', icon: 'Wifi', de: 'Heimnetz', pos: 'noun', article: 'das', plural: 'Heimnetze', ru: 'домашняя сеть', parts: ['Heim', 'netz'], note: 'Das Heim — дом, жилище. Также das Heimnetzwerk.', example: { de: 'Drucker und Laptop sind im selben Heimnetz.', ru: 'Принтер и ноутбук в одной домашней сети.', cloze: 'Heimnetz' } },
    { id: 'inf-a21-02-drahtlos', icon: 'Radio', de: 'drahtlos', pos: 'adj', ru: 'беспроводной; без провода', parts: ['draht', 'los'], note: 'Der Draht — провод; -los — без.', example: { de: 'Ich drucke drahtlos über das WLAN.', ru: 'Я печатаю без провода через Wi-Fi.', cloze: 'drahtlos' } },
    { id: 'inf-a21-02-verbinden', icon: 'Link', de: 'verbinden', pos: 'verb', ru: 'соединять, подключать', forms: 'er verbindet · hat verbunden', note: 'etwas mit + Dat verbinden; sich mit dem WLAN verbinden — подключиться к Wi-Fi.', example: { de: 'Ich verbinde den Laptop mit dem Router.', ru: 'Я подключаю ноутбук к роутеру.', cloze: 'verbinde' } },
    { id: 'inf-a21-02-signal', icon: 'Signal', de: 'Signal', pos: 'noun', article: 'das', plural: 'Signale', ru: 'сигнал', collocation: { de: 'ein schwaches Signal', ru: 'слабый сигнал', accept: ['ein schlechtes Signal'] }, example: { de: 'Im Keller ist das Signal sehr schwach.', ru: 'В подвале сигнал очень слабый.', cloze: 'Signal' } },
    { id: 'inf-a21-02-anbieter', icon: 'Building2', de: 'Anbieter', pos: 'noun', article: 'der', plural: 'Anbieter', ru: 'провайдер, поставщик услуг', note: 'Полностью: der Internetanbieter. Разговорно также der Provider.', collocation: { de: 'den Anbieter wechseln', ru: 'сменить провайдера' }, example: { de: 'Unser Anbieter ist leider sehr teuer.', ru: 'Наш провайдер, к сожалению, очень дорогой.', cloze: 'Anbieter' } },
    { id: 'inf-a21-02-netzwerkkabel', icon: 'EthernetPort', de: 'Netzwerkkabel', pos: 'noun', article: 'das', plural: 'Netzwerkkabel', ru: 'сетевой кабель (LAN)', parts: ['Netzwerk', 'kabel'], imageQuery: 'ethernet cable', example: { de: 'Mit dem Netzwerkkabel ist die Verbindung stabiler.', ru: 'С сетевым кабелем соединение стабильнее.', cloze: 'Netzwerkkabel' } },

    { id: 'inf-a21-02-geschwindigkeit', icon: 'Gauge', de: 'Geschwindigkeit', pos: 'noun', article: 'die', plural: 'Geschwindigkeiten', ru: 'скорость', collocation: { de: 'die Geschwindigkeit messen', ru: 'измерить скорость' }, example: { de: 'Am Abend ist die Geschwindigkeit oft niedrig.', ru: 'Вечером скорость часто низкая.', cloze: 'Geschwindigkeit' } },
    { id: 'inf-a21-02-bandbreite', icon: 'Activity', de: 'Bandbreite', pos: 'noun', article: 'die', plural: 'Bandbreiten', ru: 'пропускная способность (канала)', parts: ['Band', 'breite'], example: { de: 'Videos in hoher Qualität brauchen viel Bandbreite.', ru: 'Видео в высоком качестве требуют большой пропускной способности.', cloze: 'Bandbreite' } },
    { id: 'inf-a21-02-reichweite', icon: 'Radar', de: 'Reichweite', pos: 'noun', article: 'die', plural: 'Reichweiten', ru: 'радиус действия, дальность', parts: ['Reich', 'weite'], example: { de: 'Die Reichweite des Routers ist zu klein.', ru: 'Радиус действия роутера слишком мал.', cloze: 'Reichweite' } },
    { id: 'inf-a21-02-verstaerker', icon: 'RadioTower', de: 'Verstärker', pos: 'noun', article: 'der', plural: 'Verstärker', ru: 'усилитель (Wi-Fi), репитер', note: 'Полностью: der WLAN-Verstärker; также der Repeater.', imageQuery: 'wifi repeater', example: { de: 'Der Verstärker steckt in der Steckdose im Flur.', ru: 'Усилитель воткнут в розетку в коридоре.', cloze: 'Verstärker' } },
    { id: 'inf-a21-02-einrichten', icon: 'Settings2', de: 'einrichten', pos: 'verb', ru: 'настраивать (устройство, сеть)', forms: 'er richtet ein · hat eingerichtet', note: 'Отделяемая приставка: ich richte das WLAN ein. + Akk.', collocation: { de: 'das WLAN einrichten', ru: 'настроить Wi-Fi', accept: ['ein WLAN einrichten'] }, example: { de: 'Mein Bruder richtet heute den Router ein.', ru: 'Мой брат сегодня настраивает роутер.', cloze: 'richtet' } },
    { id: 'inf-a21-02-zugangsdaten', icon: 'KeyRound', de: 'Zugangsdaten', pos: 'noun', article: 'die', pluralOnly: true, ru: 'данные для входа (логин и пароль)', parts: ['Zugangs', 'daten'], note: 'Только мн. ч. Der Zugang (доступ) + s + Daten.', example: { de: 'Die Zugangsdaten stehen auf dem Router.', ru: 'Данные для входа написаны на роутере.', cloze: 'Zugangsdaten' } },
    { id: 'inf-a21-02-stoerung', icon: 'ZapOff', de: 'Störung', pos: 'noun', article: 'die', plural: 'Störungen', ru: 'сбой, неполадка', collocation: { de: 'eine Störung melden', ru: 'сообщить о сбое' }, example: { de: 'Wegen einer Störung gibt es kein Internet.', ru: 'Из-за сбоя нет интернета.', cloze: 'Störung' } },
    { id: 'inf-a21-02-glasfaser', icon: 'Waypoints', de: 'Glasfaser', pos: 'noun', article: 'die', plural: 'Glasfasern', ru: 'оптоволокно', parts: ['Glas', 'faser'], imageQuery: 'fiber optic cable', example: { de: 'Unser Haus bekommt bald Internet über Glasfaser.', ru: 'Наш дом скоро получит интернет по оптоволокну.', cloze: 'Glasfaser' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Kein Internet in der WG',
      de: `Valentina studiert Elektrotechnik an der TU Wien und wohnt seit Oktober in einer WG. Am ersten Abend gibt es kein Internet. Ihre Mitbewohnerin Kerstin sagt: „Der Anbieter hat das Modem schon geschickt, aber niemand hat es angeschlossen.“

Valentina findet das Modem und den Router in einer Kiste. Sie verbindet die beiden Geräte mit einem Netzwerkkabel. Nach zehn Minuten leuchtet eine grüne Lampe, und das WLAN funktioniert.

Kerstin ist froh, weil sie jetzt drahtlos im Bett arbeiten kann. Aber in Valentinas Zimmer ist das Signal schwach. Deshalb legt sie für ihren Computer ein langes Netzwerkkabel durch den Flur. Kerstin lacht: „Du bist wirklich eine Technikerin!“`,
      ru: `Валентина изучает электротехнику в Венском техническом университете и с октября живёт в съёмной квартире с соседями. В первый вечер интернета нет. Её соседка Керстин говорит: «Провайдер уже прислал модем, но никто его не подключил».

Валентина находит модем и роутер в коробке. Она соединяет оба устройства сетевым кабелем. Через десять минут загорается зелёная лампочка, и Wi-Fi работает.

Керстин рада, потому что теперь она может работать без провода прямо в кровати. Но в комнате Валентины сигнал слабый. Поэтому она протягивает для своего компьютера длинный сетевой кабель через коридор. Керстин смеётся: «Ты настоящий техник!»`,
      gloss: {
        valentina: 'Валентина (имя)', valentinas: 'Валентины (чей?)', kerstin: 'Керстин (имя)', kerstins: 'Керстин (чей?)', elektrotechnik: 'электротехника', tu: 'TU — Технический университет', wien: 'Вена',
        oktober: 'октябрь', wg: 'WG — квартира, которую снимают вместе', mitbewohnerin: 'соседка по квартире', geschickt: 'прислал', angeschlossen: 'подключил (anschließen)',
        kiste: 'коробка, ящик', beiden: 'оба', geräte: 'устройства', leuchtet: 'горит, светится', grüne: 'зелёная', lampe: 'лампочка',
        bett: 'кровать', legt: 'кладёт, протягивает', langes: 'длинный (ср. р.)', flur: 'коридор', lacht: 'смеётся', technikerin: 'техник (о женщине)',
        küche: 'кухня', wlan: 'Wi-Fi, беспроводная сеть', aufräumt: 'убирает (aufräumen)', womit: 'чем, с помощью чего',
      },
      questions: [
        { q: 'Wer hat das Modem geschickt?', ru: 'Кто прислал модем?', options: ['Der Anbieter', 'Kerstins Mutter', 'Die TU Wien'], answer: 'Der Anbieter' },
        { q: 'Womit verbindet Valentina die beiden Geräte?', ru: 'Чем Валентина соединяет оба устройства?', options: ['Mit einem Netzwerkkabel', 'Drahtlos über das WLAN', 'Mit einem Verstärker'], answer: 'Mit einem Netzwerkkabel' },
        { q: 'Warum ist Kerstin froh?', ru: 'Почему Керстин рада?', options: ['Weil sie jetzt drahtlos im Bett arbeiten kann.', 'Weil das Modem kostenlos war.', 'Weil Valentina ihr Zimmer aufräumt.'], answer: 'Weil sie jetzt drahtlos im Bett arbeiten kann.' },
        { q: 'Wo ist das Signal schwach?', ru: 'Где сигнал слабый?', options: ['In Valentinas Zimmer', 'In der Küche', 'Im Flur'], answer: 'In Valentinas Zimmer' },
      ],
      translate: [
        { de: 'Sie verbindet den Router mit dem Modem.', ru: 'Она подключает роутер к модему.', wrongRu: ['Он подключает роутер к модему.', 'Она отключает роутер от модема.', 'Она подключает компьютер к модему.'] },
        { de: 'In ihrem Zimmer ist das Signal schwach.', ru: 'В её комнате сигнал слабый.', wrongRu: ['В её комнате сигнал сильный.', 'В его комнате сигнал слабый.', 'На кухне сигнал слабый.'] },
        { de: 'Jetzt funktioniert das WLAN.', ru: 'Теперь Wi-Fi работает.', wrongRu: ['Теперь Wi-Fi не работает.', 'Теперь роутер работает.'] },
      ],
    },
    {
      lesson: 1, title: 'Warum ist das Internet so langsam?',
      de: `Im November ist das Internet in der WG plötzlich sehr langsam. Valentina misst die Geschwindigkeit: Sie ist viel niedriger als im Vertrag. Zuerst denkt sie an eine Störung, aber auf der Webseite des Anbieters steht nichts.

Dann merkt sie, dass Kerstin jeden Abend Serien in hoher Qualität schaut. Das braucht viel Bandbreite. Außerdem ist die Reichweite des Routers zu klein für die große Wohnung.

Valentina kauft einen Verstärker und richtet ihn im Flur ein. Dafür braucht sie die Zugangsdaten, die unten auf dem Router stehen. Jetzt ist das Signal überall gut. Aber die beiden Mädchen wissen: Im nächsten Jahr bekommt das Haus Glasfaser, und dann gibt es endlich genug Bandbreite für alle.`,
      ru: `В ноябре интернет в квартире вдруг становится очень медленным. Валентина измеряет скорость: она намного ниже, чем в договоре. Сначала она думает, что это сбой, но на сайте провайдера ничего не написано.

Потом она замечает, что Керстин каждый вечер смотрит сериалы в высоком качестве. Это требует большой пропускной способности. Кроме того, радиус действия роутера слишком мал для большой квартиры.

Валентина покупает усилитель и настраивает его в коридоре. Для этого ей нужны данные для входа, которые написаны снизу на роутере. Теперь сигнал везде хороший. Но обе девушки знают: в следующем году дом получит оптоволокно, и тогда наконец пропускной способности хватит всем.`,
      gloss: {
        flur: 'коридор, прихожая', 'küche': 'кухня',
        valentina: 'Валентина (имя)', kerstin: 'Керстин (имя)', kerstins: 'Керстин (чей?)', november: 'ноябрь', wg: 'WG — квартира, которую снимают вместе', misst: 'измеряет',
        niedriger: 'ниже', vertrag: 'договор', denkt: 'думает (denken an — думать о)', webseite: 'сайт, веб-страница', anbieters: 'провайдера', merkt: 'замечает',
        serien: 'сериалы', hoher: 'высоком', qualität: 'качество', schaut: 'смотрит', außerdem: 'кроме того', routers: 'роутера', wohnung: 'квартира',
        dafür: 'для этого', die: 'которые; артикль ж. р. / мн. ч.', unten: 'внизу, снизу', überall: 'везде', beiden: 'обе', mädchen: 'девушки', genug: 'достаточно',
        online: 'онлайн', wlan: 'Wi-Fi, беспроводная сеть', spiele: 'игры', welchen: 'какой', neuen: 'новый (вин.)',
      },
      questions: [
        { q: 'Warum braucht die WG so viel Bandbreite?', ru: 'Почему квартире нужно так много пропускной способности?', options: ['Weil Kerstin jeden Abend Serien schaut.', 'Weil Valentina online Spiele spielt.', 'Weil es eine Störung gibt.'], answer: 'Weil Kerstin jeden Abend Serien schaut.' },
        { q: 'Wo richtet Valentina den Verstärker ein?', ru: 'Где Валентина настраивает усилитель?', options: ['Im Flur', 'In der Küche', 'In Kerstins Zimmer'], answer: 'Im Flur' },
        { q: 'Wo stehen die Zugangsdaten?', ru: 'Где написаны данные для входа?', options: ['Unten auf dem Router', 'Auf der Webseite des Anbieters', 'Im Vertrag'], answer: 'Unten auf dem Router' },
        { q: 'Was bekommt das Haus im nächsten Jahr?', ru: 'Что получит дом в следующем году?', options: ['Glasfaser', 'Einen neuen Router', 'Eine neue Wohnung'], answer: 'Glasfaser' },
      ],
      translate: [
        { de: 'Die Reichweite des Routers ist zu klein.', ru: 'Радиус действия роутера слишком мал.', wrongRu: ['Радиус действия роутера достаточно большой.', 'Скорость роутера слишком мала.'] },
        { de: 'Valentina richtet den Verstärker im Flur ein.', ru: 'Валентина настраивает усилитель в коридоре.', wrongRu: ['Валентина настраивает роутер в коридоре.', 'Валентина выключает усилитель в коридоре.', 'Валентина настраивает усилитель на кухне.'] },
        { de: 'Zuerst denkt sie an eine Störung.', ru: 'Сначала она думает, что это сбой.', wrongRu: ['Потом она думает, что это сбой.', 'Сначала он думает, что это сбой.', 'Сначала она думает, что это вирус.'] },
      ],
    },
  ],
};
