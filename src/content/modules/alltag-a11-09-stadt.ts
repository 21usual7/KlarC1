import type { Module } from '../types.ts';

// A1.1 alltag 09: in the city — street, left, right, traffic light (lesson 0); bus, tram, ticket (lesson 1).

export const module: Module = {
  id: 'alltag-a11-09-stadt', sphere: 'alltag', level: 'A1.1',
  title: 'In der Stadt', subtitle: 'В городе: спросить дорогу, налево и направо, автобус, трамвай и билет.',
  words: [
    { id: 'all-a11-09-strasse', icon: 'Route', de: 'Straße', pos: 'noun', article: 'die', plural: 'Straßen', ru: 'улица', example: { de: 'Wir wohnen in der Lindenstraße.', ru: 'Мы живём на Линденштрассе.', cloze: 'straße' } },
    { id: 'all-a11-09-bahnhof', icon: 'TrainFront', imageQuery: 'leipzig train station', de: 'Bahnhof', pos: 'noun', article: 'der', plural: 'Bahnhöfe', ru: 'вокзал', note: 'der Hauptbahnhof — главный вокзал.', example: { de: 'Wo ist der Bahnhof?', ru: 'Где вокзал?', cloze: 'Bahnhof' } },
    { id: 'all-a11-09-haltestelle', icon: 'Signpost', imageQuery: 'bus stop', de: 'Haltestelle', pos: 'noun', article: 'die', plural: 'Haltestellen', ru: 'остановка', parts: ['Halte', 'stelle'], example: { de: 'Die Haltestelle ist hier vorne.', ru: 'Остановка вот здесь, впереди.', cloze: 'Haltestelle' } },
    { id: 'all-a11-09-links', icon: 'ArrowLeft', de: 'links', pos: 'adv', ru: 'налево, слева', example: { de: 'Gehen Sie hier links.', ru: 'Здесь идите налево.', cloze: 'links' } },
    { id: 'all-a11-09-rechts', icon: 'ArrowRight', de: 'rechts', pos: 'adv', ru: 'направо, справа', example: { de: 'Die Apotheke ist rechts.', ru: 'Аптека справа.', cloze: 'rechts' } },
    { id: 'all-a11-09-geradeaus', icon: 'ArrowUp', de: 'geradeaus', pos: 'adv', ru: 'прямо', example: { de: 'Gehen Sie immer geradeaus.', ru: 'Идите всё время прямо.', cloze: 'geradeaus' } },
    { id: 'all-a11-09-ampel', icon: 'TrafficCone', imageQuery: 'traffic light pedestrian', de: 'Ampel', pos: 'noun', article: 'die', plural: 'Ampeln', ru: 'светофор', note: 'Bei Rot nicht gehen! — На красный не ходить!', example: { de: 'An der Ampel gehen Sie links.', ru: 'У светофора поверните налево.', cloze: 'Ampel' } },
    { id: 'all-a11-09-ecke', icon: 'CornerDownRight', de: 'Ecke', pos: 'noun', article: 'die', plural: 'Ecken', ru: 'угол', note: 'um die Ecke — за углом.', example: { de: 'Der Supermarkt ist um die Ecke.', ru: 'Супермаркет за углом.', cloze: 'Ecke' } },

    { id: 'all-a11-09-bus', icon: 'Bus', imageQuery: 'city bus', de: 'Bus', pos: 'noun', article: 'der', plural: 'Busse', ru: 'автобус', example: { de: 'Der Bus kommt alle zehn Minuten.', ru: 'Автобус ходит каждые десять минут.', cloze: 'Bus' } },
    { id: 'all-a11-09-strassenbahn', icon: 'TramFront', imageQuery: 'tram leipzig', de: 'Straßenbahn', pos: 'noun', article: 'die', plural: 'Straßenbahnen', ru: 'трамвай', parts: ['Straßen', 'bahn'], example: { de: 'Ich fahre mit der Straßenbahn.', ru: 'Я еду на трамвае.', cloze: 'Straßenbahn' } },
    { id: 'all-a11-09-u-bahn', icon: 'TrainFront', de: 'U-Bahn', pos: 'noun', article: 'die', plural: 'U-Bahnen', ru: 'метро', note: 'В Лейпциге метро нет, зато есть S-Bahn (городская электричка).', example: { de: 'In Berlin fahre ich U-Bahn.', ru: 'В Берлине я езжу на метро.', cloze: 'U-Bahn' } },
    { id: 'all-a11-09-fahrkarte', icon: 'Ticket', de: 'Fahrkarte', pos: 'noun', article: 'die', plural: 'Fahrkarten', ru: 'билет (на транспорт)', parts: ['Fahr', 'karte'], note: 'Также: das Ticket. Билет часто покупают в автомате или в приложении.', example: { de: 'Wo kaufe ich eine Fahrkarte?', ru: 'Где купить билет?', cloze: 'Fahrkarte' } },
    { id: 'all-a11-09-fahren', icon: 'Car', de: 'fahren', pos: 'verb', ru: 'ехать, ездить', forms: 'er fährt · ist gefahren', note: 'du fährst, er fährt.', example: { de: 'Wir fahren in die Stadt.', ru: 'Мы едем в город.', cloze: 'fahren' } },
    { id: 'all-a11-09-einsteigen', icon: 'LogIn', de: 'einsteigen', pos: 'verb', ru: 'садиться (в транспорт)', forms: 'er steigt ein · ist eingestiegen', example: { de: 'Bitte schnell einsteigen!', ru: 'Пожалуйста, быстрее садитесь!', cloze: 'einsteigen' } },
    { id: 'all-a11-09-aussteigen', icon: 'LogOut', de: 'aussteigen', pos: 'verb', ru: 'выходить (из транспорта)', forms: 'er steigt aus · ist ausgestiegen', example: { de: 'Wo muss ich aussteigen?', ru: 'Где мне выходить?', cloze: 'aussteigen' } },
    { id: 'all-a11-09-weit', icon: 'MoveHorizontal', de: 'weit', pos: 'adj', ru: 'далеко, далёкий', note: 'Ist es weit? — Это далеко? Противоположность — nah.', example: { de: 'Ist es weit bis zum Bahnhof?', ru: 'До вокзала далеко?', cloze: 'weit' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wo ist die Apotheke?',
      de: `Leyla sucht eine Apotheke. Sie fragt einen Mann auf der Straße: „Entschuldigung, wo ist die Apotheke?“

„Gehen Sie hier geradeaus bis zur Ampel. An der Ampel gehen Sie links. Dann sehen Sie die Apotheke rechts, an der Ecke.“

„Ist es weit?“ – „Nein, nur fünf Minuten.“ – „Vielen Dank!“`,
      ru: `Лейла ищет аптеку. Она спрашивает мужчину на улице: «Извините, где аптека?»

«Идите здесь прямо до светофора. У светофора поверните налево. Потом увидите аптеку справа, на углу».

«Это далеко?» — «Нет, всего пять минут». — «Большое спасибо!»`,
      gloss: { leyla: 'Лейла (имя)', sucht: 'ищет', apotheke: 'аптека', fragt: 'спрашивает', entschuldigung: 'извините', bis: 'до', zur: 'до (zu + der)', vielen: '(vielen Dank) большое', dank: '(vielen Dank) спасибо' },
      questions: [
        { q: 'Was sucht Leyla?', ru: 'Что ищет Лейла?', options: ['Eine Apotheke', 'Den Bahnhof', 'Einen Supermarkt'], answer: 'Eine Apotheke' },
        { q: 'Wo geht Leyla links?', ru: 'Где Лейле нужно повернуть налево?', options: ['An der Ampel', 'An der Ecke', 'Am Bahnhof'], answer: 'An der Ampel' },
        { q: 'Wie weit ist es?', ru: 'Как далеко идти?', options: ['Fünf Minuten', 'Eine Stunde', 'Zwanzig Minuten'], answer: 'Fünf Minuten' },
      ],
      translate: [
        { de: 'Gehen Sie hier geradeaus.', ru: 'Идите здесь прямо.', wrongRu: ['Поверните здесь налево.', 'Идите здесь направо.'] },
        { de: 'Die Apotheke ist an der Ecke.', ru: 'Аптека на углу.', wrongRu: ['Аптека у светофора.', 'Вокзал на углу.'] },
        { de: 'Ist es weit?', ru: 'Это далеко?', wrongRu: ['Это близко?', 'Это дорого?'] },
      ],
    },
    {
      lesson: 1, title: 'Mit der Straßenbahn',
      de: `Amir muss zum Hauptbahnhof. Die Haltestelle ist um die Ecke. Zuerst kauft er eine Fahrkarte am Automaten.

Dann kommt die Straßenbahn Nummer zehn. Amir steigt ein. Er fragt eine Frau: „Wo muss ich aussteigen? Ich möchte zum Hauptbahnhof.“ – „In drei Stationen.“

Nach zehn Minuten steigt Amir aus. Der Bahnhof ist groß. Später fährt er mit dem Bus nach Hause.`,
      ru: `Амиру нужно на главный вокзал. Остановка за углом. Сначала он покупает билет в автомате.

Потом приходит трамвай номер десять. Амир садится. Он спрашивает женщину: «Где мне выходить? Мне нужно на главный вокзал». — «Через три остановки».

Через десять минут Амир выходит. Вокзал большой. Позже он едет домой на автобусе.`,
      gloss: { fahre: 'еду', auto: 'машина', amir: 'Амир (имя)', muss: 'должен, нужно', hauptbahnhof: 'главный вокзал', zuerst: 'сначала', kauft: 'покупает', automaten: 'автомат', nummer: 'номер', zehn: 'десять', fragt: 'спрашивает', möchte: 'хочу', drei: 'три', stationen: 'остановки', später: 'позже', hause: '(nach Hause) домой' },
      questions: [
        { q: 'Wo kauft Amir die Fahrkarte?', ru: 'Где Амир покупает билет?', options: ['Am Automaten', 'Im Bus', 'Am Bahnhof'], answer: 'Am Automaten' },
        { q: 'Welche Straßenbahn nimmt Amir?', ru: 'На каком трамвае едет Амир?', options: ['Nummer zehn', 'Nummer drei', 'Nummer zwei'], answer: 'Nummer zehn' },
        { q: 'Wie fährt Amir nach Hause?', ru: 'Как Амир едет домой?', options: ['Mit dem Bus', 'Mit der U-Bahn', 'Mit dem Auto'], answer: 'Mit dem Bus' },
      ],
      translate: [
        { de: 'Wo muss ich aussteigen?', ru: 'Где мне выходить?', wrongRu: ['Где мне садиться?', 'Где остановка?'] },
        { de: 'Ich fahre mit der Straßenbahn.', ru: 'Я еду на трамвае.', wrongRu: ['Я еду на автобусе.', 'Я иду пешком.'] },
        { de: 'Wo kaufe ich eine Fahrkarte?', ru: 'Где купить билет?', wrongRu: ['Сколько стоит билет?', 'Где остановка?'] },
      ],
    },
  ],
};
