import type { Module } from '../types.ts';

// A2.1 pflege 06: pressure sores — what they are, where, positioning (lesson 0); finger test, relieving pressure, the positioning plan (lesson 1).

export const module: Module = {
  id: 'pflege-a21-06-dekubitus', sphere: 'pflege', level: 'A2.1',
  title: 'Dekubitus vorbeugen', subtitle: 'Пролежни: где они появляются, как переворачивать пациента и проверить кожу.',
  words: [
    { id: 'pfl-a21-06-dekubitus', icon: 'CircleAlert', de: 'Dekubitus', pos: 'noun', article: 'der', ru: 'пролежень', note: 'Мн. ч. — die Dekubiti (редко). Синоним — das Druckgeschwür.', example: { de: 'Ein Dekubitus entsteht durch langen Druck.', ru: 'Пролежень возникает из-за долгого давления.', cloze: 'Dekubitus' } },
    { id: 'pfl-a21-06-druckstelle', icon: 'CircleDot', de: 'Druckstelle', pos: 'noun', article: 'die', plural: 'Druckstellen', ru: 'место давления, натёртость', parts: ['Druck', 'stelle'], example: { de: 'An der Ferse ist eine Druckstelle.', ru: 'На пятке есть натёртость.', cloze: 'Druckstelle' } },
    { id: 'pfl-a21-06-ferse', icon: 'Footprints', de: 'Ferse', pos: 'noun', article: 'die', plural: 'Fersen', ru: 'пятка', example: { de: 'Die Fersen sind besonders gefährdet.', ru: 'Пятки особенно уязвимы.', cloze: 'Fersen' } },
    { id: 'pfl-a21-06-steissbein', icon: 'Bone', de: 'Steißbein', pos: 'noun', article: 'das', plural: 'Steißbeine', ru: 'копчик', parts: ['Steiß', 'bein'], example: { de: 'Am Steißbein ist die Haut rot.', ru: 'На копчике кожа красная.', cloze: 'Steißbein' } },
    { id: 'pfl-a21-06-lagern', icon: 'BedSingle', de: 'lagern', pos: 'verb', ru: 'укладывать, менять положение (пациента)', forms: 'er lagert · hat gelagert', example: { de: 'Wir lagern Herrn Becker alle zwei Stunden.', ru: 'Мы меняем положение господина Беккера каждые два часа.', cloze: 'lagern' } },
    { id: 'pfl-a21-06-lagerung', icon: 'RotateCcw', de: 'Lagerung', pos: 'noun', article: 'die', plural: 'Lagerungen', ru: 'положение, укладка (пациента)', note: 'die 30-Grad-Lagerung — укладка на бок под 30°.', example: { de: 'Die Lagerung auf der Seite entlastet den Rücken.', ru: 'Положение на боку разгружает спину.', cloze: 'Lagerung' } },
    { id: 'pfl-a21-06-matratze', icon: 'RectangleHorizontal', imageQuery: 'hospital mattress', de: 'Matratze', pos: 'noun', article: 'die', plural: 'Matratzen', ru: 'матрас', note: 'die Wechseldruckmatratze — противопролежневый матрас.', example: { de: 'Er bekommt eine spezielle Matratze.', ru: 'Ему дают специальный матрас.', cloze: 'Matratze' } },
    { id: 'pfl-a21-06-bettlaegerig', icon: 'BedDouble', de: 'bettlägerig', pos: 'adj', ru: 'лежачий, прикованный к постели', example: { de: 'Herr Becker ist seit dem Schlaganfall bettlägerig.', ru: 'Господин Беккер после инсульта лежачий.', cloze: 'bettlägerig' } },

    { id: 'pfl-a21-06-gefaehrdet', icon: 'TriangleAlert', de: 'gefährdet', pos: 'adj', ru: 'в группе риска, под угрозой', example: { de: 'Wer ist besonders gefährdet?', ru: 'Кто в особой группе риска?', cloze: 'gefährdet' } },
    { id: 'pfl-a21-06-roetung', icon: 'Circle', de: 'Rötung', pos: 'noun', article: 'die', plural: 'Rötungen', ru: 'покраснение', example: { de: 'Die Rötung geht nicht weg.', ru: 'Покраснение не проходит.', cloze: 'Rötung' } },
    { id: 'pfl-a21-06-fingertest', icon: 'Fingerprint', de: 'Fingertest', pos: 'noun', article: 'der', plural: 'Fingertests', ru: 'тест пальцем (проверка покраснения)', parts: ['Finger', 'test'], note: 'Нажать пальцем на покраснение: если кожа не бледнеет — начало пролежня.', example: { de: 'Mit dem Fingertest prüfe ich die Haut.', ru: 'Тестом пальцем я проверяю кожу.', cloze: 'Fingertest' } },
    { id: 'pfl-a21-06-pruefen', icon: 'ScanSearch', de: 'prüfen', pos: 'verb', ru: 'проверять', forms: 'er prüft · hat geprüft', example: { de: 'Wir prüfen die Haut jeden Tag.', ru: 'Мы проверяем кожу каждый день.', cloze: 'prüfen' } },
    { id: 'pfl-a21-06-entlasten', icon: 'Feather', de: 'entlasten', pos: 'verb', ru: 'разгружать, снимать нагрузку', forms: 'er entlastet · hat entlastet', example: { de: 'Ein Kissen entlastet die Fersen.', ru: 'Подушка разгружает пятки.', cloze: 'entlastet' } },
    { id: 'pfl-a21-06-lagerungsplan', icon: 'CalendarClock', de: 'Lagerungsplan', pos: 'noun', article: 'der', plural: 'Lagerungspläne', ru: 'план смены положения', parts: ['Lagerungs', 'plan'], example: { de: 'Im Lagerungsplan steht jede Uhrzeit.', ru: 'В плане смены положения указано каждое время.', cloze: 'Lagerungsplan' } },
    { id: 'pfl-a21-06-durchblutung', icon: 'HeartPulse', de: 'Durchblutung', pos: 'noun', article: 'die', ru: 'кровоснабжение, кровообращение', example: { de: 'Bewegung verbessert die Durchblutung.', ru: 'Движение улучшает кровообращение.', cloze: 'Durchblutung' } },
    { id: 'pfl-a21-06-druck', icon: 'ArrowDownToLine', de: 'Druck', pos: 'noun', article: 'der', ru: 'давление', note: 'unter Druck — под давлением.', example: { de: 'Zu viel Druck schadet der Haut.', ru: 'Слишком сильное давление вредит коже.', cloze: 'Druck' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Was ist ein Dekubitus?',
      de: `Herr Becker ist seit seinem Schlaganfall bettlägerig. Er kann sich nicht allein bewegen. Deshalb ist er für einen Dekubitus besonders gefährdet.

Sabine erklärt der neuen Auszubildenden Jana: „Ein Dekubitus ist eine Wunde, die durch langen Druck entsteht. Die Haut bekommt nicht genug Blut. Besonders gefährdet sind die Fersen, das Steißbein und die Schultern.“

„Was können wir tun?“, fragt Jana. „Wir lagern Herrn Becker alle zwei Stunden: einmal auf die rechte Seite, dann auf den Rücken, dann auf die linke Seite. Und er hat eine spezielle Matratze. Die Lagerung verbessert die Durchblutung.“`,
      ru: `Господин Беккер после инсульта лежачий. Он не может двигаться сам. Поэтому он в особой группе риска по пролежням.

Сабина объясняет новой практикантке Яне: «Пролежень — это рана, которая возникает из-за долгого давления. Коже не хватает крови. Особенно уязвимы пятки, копчик и плечи».

«Что мы можем сделать?» — спрашивает Яна. «Мы меняем положение господина Беккера каждые два часа: сначала на правый бок, потом на спину, потом на левый бок. И у него специальный матрас. Смена положения улучшает кровообращение».`,
      gloss: { becker: 'Беккер (фамилия)', sabine: 'Сабина (имя)', jana: 'Яна (имя)', herr: 'господин', herrn: 'господина (вин.)', seit: 'с, после', seinem: 'своего', schlaganfall: 'инсульт', kann: 'может', sich: 'себя, -ся', allein: 'сам', bewegen: 'двигать(ся)', deshalb: 'поэтому', für: 'для, по', einen: 'один, какой-то', besonders: 'особенно', erklärt: 'объясняет', neuen: 'новой', auszubildenden: 'практикантке, ученице', wunde: 'рана', die: 'которая; артикль', durch: 'из-за, через', langen: 'долгий', entsteht: 'возникает', haut: 'кожа', bekommt: 'получает', genug: 'достаточно', blut: 'кровь', schultern: 'плечи', können: 'можем', tun: 'делать', fragt: 'спрашивает', alle: '(alle zwei Stunden) каждые', zwei: 'два', stunden: 'часа', einmal: 'сначала, один раз', rechte: 'правый', seite: 'бок', dann: 'потом', rücken: 'спина', linke: 'левый', hat: 'имеет', spezielle: 'специальный', verbessert: 'улучшает', was: 'что', wie: 'как', oft: '(wie oft) как часто', wer: 'кто', warum: 'почему', drei: 'три', vier: 'четыре', bauch: 'живот', kopf: 'голова', ohren: 'уши', hände: 'руки', fieber: 'жар', diabetes: 'диабет', er: 'он', ist: 'есть, является', stunde: 'час' },
      questions: [
        { q: 'Warum ist Herr Becker besonders gefährdet?', ru: 'Почему господин Беккер в особой группе риска?', options: ['Er ist bettlägerig.', 'Er hat Fieber.', 'Er hat Diabetes.'], answer: 'Er ist bettlägerig.' },
        { q: 'Wie oft lagern sie Herrn Becker?', ru: 'Как часто меняют положение господина Беккера?', options: ['Alle zwei Stunden', 'Alle vier Stunden', 'Einmal am Tag'], answer: 'Alle zwei Stunden' },
        { q: 'Welche Stellen sind besonders gefährdet?', ru: 'Какие места особенно уязвимы?', options: ['Fersen, Steißbein, Schultern', 'Kopf und Ohren', 'Bauch und Hände'], answer: 'Fersen, Steißbein, Schultern' },
      ],
      translate: [
        { de: 'Er kann sich nicht allein bewegen.', ru: 'Он не может двигаться сам.', wrongRu: ['Он может двигаться сам.', 'Он не хочет двигаться.'] },
        { de: 'Die Haut bekommt nicht genug Blut.', ru: 'Коже не хватает крови.', wrongRu: ['Коже не хватает воды.', 'Кожа получает слишком много крови.'] },
        { de: 'Wir lagern ihn alle zwei Stunden.', ru: 'Мы меняем его положение каждые два часа.', wrongRu: ['Мы моем его каждые два часа.', 'Мы меняем его положение раз в день.'] },
      ],
    },
    {
      lesson: 1, title: 'Der Fingertest',
      de: `Beim Waschen sieht Jana eine Rötung am Steißbein von Herrn Becker. „Ist das schon ein Dekubitus?“, fragt sie. Sabine sagt: „Wir prüfen das mit dem Fingertest.“

Sie drückt kurz mit dem Finger auf die Rötung. Die Haut wird weiß und dann wieder rot. „Gut, das ist noch kein Dekubitus“, sagt Sabine. „Wenn die Haut rot bleibt, ist es ein Dekubitus in der ersten Stufe.“

Dann legt Sabine ein kleines Kissen unter die Beine. So entlastet sie die Fersen. Jana schreibt die Uhrzeit und die Seite in den Lagerungsplan. „Ohne Plan vergisst man schnell etwas“, sagt Sabine.`,
      ru: `Во время мытья Яна видит покраснение на копчике господина Беккера. «Это уже пролежень?» — спрашивает она. Сабина говорит: «Проверим это тестом пальцем».

Она коротко нажимает пальцем на покраснение. Кожа белеет, а потом снова краснеет. «Хорошо, это ещё не пролежень, — говорит Сабина. — Если кожа остаётся красной, это пролежень первой степени».

Потом Сабина подкладывает под ноги небольшую подушку. Так она разгружает пятки. Яна записывает время и сторону в план смены положения. «Без плана легко что-нибудь забыть», — говорит Сабина.`,
      gloss: { jana: 'Яна (имя)', sabine: 'Сабина (имя)', becker: 'Беккер (фамилия)', herrn: 'господина', beim: 'при, во время (bei + dem)', waschen: 'мытьё', sieht: 'видит', am: 'на (an + dem)', von: 'у, от', schon: 'уже', fragt: 'спрашивает', sagt: 'говорит', das: 'это', drückt: 'нажимает', kurz: 'коротко', mit: 'с, чем', finger: 'палец', auf: 'на', haut: 'кожа', wird: 'становится', weiß: 'белый', dann: 'потом', wieder: 'снова', rot: 'красный', gut: 'хорошо', noch: 'ещё', kein: 'не, никакой', wenn: 'если', bleibt: 'остаётся', ersten: 'первой', stufe: 'степень', legt: 'кладёт', kleines: 'небольшую', kissen: 'подушка', unter: 'под', beine: 'ноги', so: 'так', schreibt: 'записывает', uhrzeit: 'время', seite: 'сторона, бок', ohne: 'без', plan: 'план', vergisst: 'забывает', man: '(vergisst man) забываешь', schnell: 'быстро', etwas: 'что-нибудь', was: 'что', wo: 'где', wie: 'как, какой', farbe: 'цвет', blau: 'синий', gelb: 'жёлтый', schultern: 'плечи', ferse: 'пятка', rücken: 'спина', arm: 'рука' },
      questions: [
        { q: 'Wo sieht Jana die Rötung?', ru: 'Где Яна видит покраснение?', options: ['Am Steißbein', 'An der Ferse', 'Am Arm'], answer: 'Am Steißbein' },
        { q: 'Welche Farbe hat die Haut nach dem Druck zuerst?', ru: 'Какого цвета становится кожа сразу после нажатия?', options: ['Weiß', 'Blau', 'Gelb'], answer: 'Weiß' },
        { q: 'Was legt Sabine unter die Beine?', ru: 'Что Сабина подкладывает под ноги?', options: ['Ein kleines Kissen', 'Eine Decke', 'Ein Handtuch'], answer: 'Ein kleines Kissen' },
      ],
      translate: [
        { de: 'Wir prüfen die Haut jeden Tag.', ru: 'Мы проверяем кожу каждый день.', wrongRu: ['Мы моем кожу каждый день.', 'Мы проверяем кожу раз в неделю.'] },
        { de: 'Die Rötung geht nicht weg.', ru: 'Покраснение не проходит.', wrongRu: ['Покраснение прошло.', 'Опухоль не проходит.'] },
        { de: 'Ein Kissen entlastet die Fersen.', ru: 'Подушка разгружает пятки.', wrongRu: ['Подушка давит на пятки.', 'Подушка разгружает спину.'] },
      ],
    },
  ],
};
