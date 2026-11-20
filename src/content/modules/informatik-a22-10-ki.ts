import type { Module } from '../types.ts';

// A2.2 informatik 10: training a model in the lab (lesson 0), language models, image recognition and bias (lesson 1).

export const module: Module = {
  id: 'informatik-a22-10-ki', sphere: 'informatik', level: 'A2.2',
  title: 'Künstliche Intelligenz', subtitle: 'Модель, обучение, набор данных, смещение: базовые слова машинного обучения.',
  words: [
    { id: 'inf-a22-10-modell', icon: 'BrainCircuit', de: 'Modell', pos: 'noun', article: 'das', plural: 'Modelle', ru: 'модель', collocation: { de: 'ein Modell trainieren', ru: 'обучить модель', accept: ['das Modell trainieren'] }, example: { de: 'Das Modell erkennt Katzen auf Fotos.', ru: 'Модель распознаёт кошек на фотографиях.', cloze: 'Modell' } },
    { id: 'inf-a22-10-trainieren', icon: 'Dumbbell', de: 'trainieren', pos: 'verb', ru: 'обучать (модель); тренировать(ся)', forms: 'er trainiert · hat trainiert', note: '+ Akk: ein Modell trainieren. Обучение модели — das Training.', example: { de: 'Wir trainieren das Modell die ganze Nacht.', ru: 'Мы обучаем модель всю ночь.', cloze: 'trainieren' } },
    { id: 'inf-a22-10-vorhersage', icon: 'TrendingUp', imageQuery: 'weather forecast', de: 'Vorhersage', pos: 'noun', article: 'die', plural: 'Vorhersagen', ru: 'предсказание, прогноз', collocation: { de: 'eine Vorhersage treffen', ru: 'сделать прогноз', accept: ['eine Vorhersage machen'] }, example: { de: 'Die Vorhersage des Modells war richtig.', ru: 'Предсказание модели было верным.', cloze: 'Vorhersage' } },
    { id: 'inf-a22-10-datensatz', icon: 'Table', imageQuery: 'dataset spreadsheet', de: 'Datensatz', pos: 'noun', article: 'der', plural: 'Datensätze', ru: 'набор данных, датасет; запись (в БД)', parts: ['Daten', 'satz'], note: 'В машинном обучении — набор данных; в базах данных — одна запись.', example: { de: 'Der Datensatz enthält tausend Bilder von Vögeln.', ru: 'Набор данных содержит тысячу изображений птиц.', cloze: 'Datensatz' } },
    { id: 'inf-a22-10-trainingsdaten', icon: 'DatabaseZap', de: 'Trainingsdaten', pos: 'noun', article: 'die', pluralOnly: true, ru: 'обучающие данные', parts: ['Trainings', 'daten'], note: 'Только мн. ч. Пара: die Testdaten — тестовые данные.', example: { de: 'Die Trainingsdaten müssen gut beschriftet sein.', ru: 'Обучающие данные должны быть хорошо размечены.', cloze: 'Trainingsdaten' } },
    { id: 'inf-a22-10-genauigkeit', icon: 'Target', imageQuery: 'target bullseye', de: 'Genauigkeit', pos: 'noun', article: 'die', ru: 'точность', note: 'genau — точный. Обычно без мн. ч.', collocation: { de: 'eine hohe Genauigkeit', ru: 'высокая точность' }, example: { de: 'Die Genauigkeit liegt jetzt bei neunzig Prozent.', ru: 'Точность сейчас составляет девяносто процентов.', cloze: 'Genauigkeit' } },
    { id: 'inf-a22-10-merkmal', icon: 'Tag', de: 'Merkmal', pos: 'noun', article: 'das', plural: 'Merkmale', ru: 'признак, характеристика', example: { de: 'Die Farbe ist ein wichtiges Merkmal.', ru: 'Цвет — важный признак.', cloze: 'Merkmal' } },
    { id: 'inf-a22-10-erkennen', icon: 'ScanEye', de: 'erkennen', pos: 'verb', ru: 'распознавать, узнавать', forms: 'er erkennt · hat erkannt', note: 'Неотделяемая приставка er-. + Akk.', collocation: { de: 'Gesichter erkennen', ru: 'распознавать лица' }, example: { de: 'Das Programm erkennt Gesichter auf Fotos.', ru: 'Программа распознаёт лица на фотографиях.', cloze: 'erkennt' } },

    { id: 'inf-a22-10-kuenstliche-intelligenz', icon: 'Brain', imageQuery: 'humanoid robot', de: 'künstliche Intelligenz', pos: 'noun', article: 'die', ru: 'искусственный интеллект', note: 'Сокращение: die KI (англ. AI). Прилагательное склоняется: der künstlichen Intelligenz.', example: { de: 'Künstliche Intelligenz verändert viele Berufe.', ru: 'Искусственный интеллект меняет многие профессии.', cloze: 'Künstliche Intelligenz' } },
    { id: 'inf-a22-10-neuronales-netz', icon: 'Network', imageQuery: 'artificial neural network diagram', de: 'neuronales Netz', pos: 'noun', article: 'das', plural: 'neuronale Netze', ru: 'нейронная сеть', note: 'Прилагательное склоняется: ein neuronales Netz, das neuronale Netz.', example: { de: 'Ein neuronales Netz besteht aus vielen Schichten.', ru: 'Нейронная сеть состоит из многих слоёв.', cloze: 'neuronales Netz' } },
    { id: 'inf-a22-10-sprachmodell', icon: 'MessagesSquare', de: 'Sprachmodell', pos: 'noun', article: 'das', plural: 'Sprachmodelle', ru: 'языковая модель', parts: ['Sprach', 'modell'], collocation: { de: 'ein großes Sprachmodell', ru: 'большая языковая модель' }, example: { de: 'Ein Sprachmodell schreibt Texte Wort für Wort.', ru: 'Языковая модель пишет тексты слово за словом.', cloze: 'Sprachmodell' } },
    { id: 'inf-a22-10-chatbot', icon: 'Bot', imageQuery: 'chatbot conversation on smartphone', de: 'Chatbot', pos: 'noun', article: 'der', plural: 'Chatbots', ru: 'чат-бот', example: { de: 'Der Chatbot beantwortet Fragen von Kunden.', ru: 'Чат-бот отвечает на вопросы клиентов.', cloze: 'Chatbot' } },
    { id: 'inf-a22-10-bilderkennung', icon: 'ScanFace', imageQuery: 'face recognition', de: 'Bilderkennung', pos: 'noun', article: 'die', ru: 'распознавание изображений', parts: ['Bild', 'erkennung'], example: { de: 'Selbstfahrende Autos brauchen eine gute Bilderkennung.', ru: 'Беспилотным автомобилям нужно хорошее распознавание изображений.', cloze: 'Bilderkennung' } },
    { id: 'inf-a22-10-muster', icon: 'Grid3x3', imageQuery: 'pattern texture', de: 'Muster', pos: 'noun', article: 'das', plural: 'Muster', ru: 'закономерность, шаблон; узор', collocation: { de: 'Muster erkennen', ru: 'распознавать закономерности' }, example: { de: 'Das Modell findet Muster in den Daten.', ru: 'Модель находит закономерности в данных.', cloze: 'Muster' } },
    { id: 'inf-a22-10-verzerrung', icon: 'Scale', de: 'Verzerrung', pos: 'noun', article: 'die', plural: 'Verzerrungen', ru: 'смещение, искажение (bias)', note: 'В ИИ также говорят der Bias.', example: { de: 'Eine Verzerrung in den Daten führt zu unfairen Ergebnissen.', ru: 'Смещение в данных приводит к несправедливым результатам.', cloze: 'Verzerrung' } },
    { id: 'inf-a22-10-auswerten', icon: 'ChartColumn', de: 'auswerten', pos: 'verb', ru: 'анализировать, обрабатывать (результаты)', forms: 'er wertet aus · hat ausgewertet', note: 'Отделяемая приставка: sie wertet die Ergebnisse aus. + Akk.', collocation: { de: 'Ergebnisse auswerten', ru: 'анализировать результаты', accept: ['die Ergebnisse auswerten'] }, example: { de: 'Morgen werten wir die Ergebnisse aus.', ru: 'Завтра мы проанализируем результаты.', cloze: 'werten' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Modell für Vögel',
      de: `Amira studiert Informatik und arbeitet an einem kleinen Projekt im Labor für maschinelles Lernen. Ihr Modell soll auf Fotos Vögel erkennen, zum Beispiel Amseln und Spatzen.

Zuerst brauchte Amira einen guten Datensatz. Studierende der Biologie hatten tausende Fotos gesammelt und auf jedem Foto den Namen des Vogels notiert. Diese Trainingsdaten waren sehr wertvoll.

Dann trainierte Amira das Modell. Es lernte selbst, welche Merkmale wichtig sind: die Farbe, die Form des Schnabels, die Größe. Danach testete sie das Modell mit neuen Fotos, die es noch nie gesehen hatte. Die Genauigkeit war am Anfang nur mittelmäßig, denn viele Vorhersagen waren falsch. Mit mehr Daten wurde das Modell aber deutlich besser.`,
      ru: `Амира изучает информатику и работает над небольшим проектом в лаборатории машинного обучения. Её модель должна распознавать птиц на фотографиях, например чёрных дроздов и воробьёв.

Сначала Амире был нужен хороший набор данных. Студенты-биологи собрали тысячи фотографий и на каждой записали название птицы. Эти обучающие данные были очень ценными.

Потом Амира обучила модель. Модель сама выучила, какие признаки важны: цвет, форма клюва, размер. После этого Амира протестировала модель на новых фотографиях, которые та ещё никогда не видела. Точность вначале была лишь средней, потому что многие предсказания были неверными. Но с бóльшим количеством данных модель стала заметно лучше.`,
      gloss: {
        merkmalen: 'признаками, характеристиками (дат. мн.)',
        amira: 'Амира (имя)', amiras: 'Амиры (чья?)', informatik: 'информатику', kleinen: 'небольшом', projekt: 'проект', labor: 'лаборатория', maschinelles: 'машинное', lernen: 'обучение; учиться',
        fotos: 'фотографии', vögel: 'птицы', zum: 'к; (zum Beispiel — например)', amseln: 'чёрные дрозды', spatzen: 'воробьи', brauchte: 'нужен был', guten: 'хороший', studierende: 'студенты',
        biologie: 'биология', hatten: 'имели; (Plusquamperfekt) -', tausende: 'тысячи', gesammelt: 'собрали', foto: 'фотография', namen: 'название, имя', vogels: 'птицы', notiert: 'записали', wertvoll: 'ценный',
        trainierte: 'обучила', lernte: 'выучила, научилась', selbst: 'сама', farbe: 'цвет', form: 'форма', schnabels: 'клюва', größe: 'размер', testete: 'протестировала', neuen: 'новых', gesehen: 'видела',
        anfang: 'начало', mittelmäßig: 'средне, посредственно', falsch: 'неверный', daten: 'данные', wurde: 'стала', deutlich: 'заметно', besser: 'лучше', gesichter: 'лица', fehler: 'ошибки', code: 'код',
        museum: 'музей', graz: 'Грац (город)', womit: 'чем, с помощью чего', fragebogen: 'анкета', computer: 'компьютер', weniger: 'меньше', vielen: 'многих', wichtige: 'важные', gut: 'хорошей',
      },
      questions: [
        { q: 'Was soll Amiras Modell erkennen?', ru: 'Что должна распознавать модель Амиры?', options: ['Vögel auf Fotos', 'Gesichter auf Fotos', 'Fehler im Code'], answer: 'Vögel auf Fotos' },
        { q: 'Wer hat die Fotos gesammelt?', ru: 'Кто собрал фотографии?', options: ['Studierende der Biologie', 'Amira selbst', 'Ein Museum in Graz'], answer: 'Studierende der Biologie' },
        { q: 'Womit testete Amira das Modell?', ru: 'На чём Амира протестировала модель?', options: ['Mit neuen Fotos', 'Mit den Trainingsdaten', 'Mit einem Fragebogen'], answer: 'Mit neuen Fotos' },
        { q: 'Wie wurde das Modell besser?', ru: 'Как модель стала лучше?', options: ['Mit mehr Daten', 'Mit einem neuen Computer', 'Mit weniger Merkmalen'], answer: 'Mit mehr Daten' },
      ],
      translate: [
        { de: 'Amira trainierte das Modell mit vielen Fotos.', ru: 'Амира обучила модель на многих фотографиях.', wrongRu: ['Амира протестировала модель на многих фотографиях.', 'Амира обучила модель на нескольких фотографиях.'] },
        { de: 'Die Genauigkeit war am Anfang nicht gut.', ru: 'Вначале точность была плохой.', wrongRu: ['Вначале точность была хорошей.', 'В конце точность была плохой.'] },
        { de: 'Das Modell erkennt wichtige Merkmale.', ru: 'Модель распознаёт важные признаки.', wrongRu: ['Модель распознаёт неважные признаки.', 'Модель распознавала важные признаки.', 'Модель не распознаёт важные признаки.'] },
      ],
    },
    {
      lesson: 1, title: 'Kann man der KI vertrauen?',
      de: `In einem Seminar über künstliche Intelligenz diskutierten die Studierenden über Chancen und Risiken. Tobias zeigte, wie ein Chatbot funktioniert: Dahinter steht ein großes Sprachmodell, also ein neuronales Netz, das mit riesigen Mengen Text trainiert wurde. Es findet Muster in der Sprache und schreibt so neue Sätze.

Dann sprach Amira über Bilderkennung. Ein bekanntes System erkannte Gesichter von Menschen mit heller Haut viel besser als Gesichter von Menschen mit dunkler Haut. Der Grund war eine Verzerrung in den Daten: Es gab fast nur Fotos von hellen Gesichtern.

Die Professorin sagte am Ende: „Man muss die Ergebnisse immer kritisch auswerten. Ein Modell ist nur so gut wie seine Daten.“`,
      ru: `На семинаре об искусственном интеллекте студенты обсуждали возможности и риски. Тобиас показал, как работает чат-бот: за ним стоит большая языковая модель, то есть нейронная сеть, которую обучили на огромных объёмах текста. Она находит закономерности в языке и так пишет новые предложения.

Потом Амира рассказала о распознавании изображений. Одна известная система распознавала лица людей со светлой кожей гораздо лучше, чем лица людей с тёмной кожей. Причиной было смещение в данных: там были почти только фотографии светлых лиц.

В конце профессор сказала: «Результаты всегда нужно критически анализировать. Модель хороша ровно настолько, насколько хороши её данные».`,
      gloss: {
        seminar: 'семинар', diskutierten: 'обсуждали', studierenden: 'студенты', chancen: 'шансы, возможности', risiken: 'риски', tobias: 'Тобиас (имя)', zeigte: 'показал', dahinter: 'за этим, за ним',
        großes: 'большая', riesigen: 'огромными', mengen: 'количества, объёмы', text: 'текст', trainiert: 'обучена', sprache: 'язык', sätze: 'предложения', sprach: 'говорил(а)', amira: 'Амира (имя)',
        bekanntes: 'известная', system: 'система', erkannte: 'распознавала', gesichter: 'лица', gesichtern: 'лиц', menschen: 'люди, людей', heller: 'светлой', haut: 'кожа', besser: 'лучше', dunkler: 'тёмной',
        grund: 'причина', daten: 'данные', fotos: 'фотографии', hellen: 'светлых', professorin: 'профессор (женщина)', sagte: 'сказала', ergebnisse: 'результаты', kritisch: 'критически', seine: 'его, её',
        mensch: 'человек', büro: 'офис', einfache: 'простая', tabelle: 'таблица', erkannt: 'распознавала', schlechter: 'хуже', tieren: 'животных', fehler: 'ошибка', langsame: 'медленная', kamera: 'камера',
        starke: 'сильное', hatten: 'имели', müssen: 'должны', zu: 'слишком; к', netz: 'сеть', neuronales: 'нейронная',
      },
      questions: [
        { q: 'Was steht hinter einem Chatbot?', ru: 'Что стоит за чат-ботом?', options: ['Ein großes Sprachmodell', 'Ein Mensch im Büro', 'Eine einfache Tabelle'], answer: 'Ein großes Sprachmodell' },
        { q: 'Was hat das System schlechter erkannt?', ru: 'Что система распознавала хуже?', options: ['Gesichter von Menschen mit dunkler Haut', 'Gesichter von Menschen mit heller Haut', 'Fotos von Tieren'], answer: 'Gesichter von Menschen mit dunkler Haut' },
        { q: 'Was war der Grund für das Problem?', ru: 'Что было причиной проблемы?', options: ['Eine Verzerrung in den Daten', 'Ein Fehler im Chatbot', 'Eine zu langsame Kamera'], answer: 'Eine Verzerrung in den Daten' },
      ],
      translate: [
        { de: 'Ein Chatbot findet Muster in der Sprache.', ru: 'Чат-бот находит закономерности в языке.', wrongRu: ['Чат-бот находит ошибки в языке.', 'Чат-бот не находит закономерностей в языке.'] },
        { de: 'Die Daten hatten eine starke Verzerrung.', ru: 'В данных было сильное смещение.', wrongRu: ['В данных не было смещения.', 'В данных было слабое смещение.'] },
        { de: 'Wir müssen die Ergebnisse kritisch auswerten.', ru: 'Мы должны критически анализировать результаты.', wrongRu: ['Мы не должны критически анализировать результаты.', 'Мы должны критически анализировать данные.'] },
      ],
    },
  ],
};
