import type { Module } from '../types.ts';

// A1.1 pflege 05: how the patient feels — ill, pain, sleep, fear (lesson 0); cold, dizzy, call bell (lesson 1).

export const module: Module = {
  id: 'pflege-a11-05-befinden', sphere: 'pflege', level: 'A1.1',
  title: 'Wie fühlen Sie sich?', subtitle: 'Самочувствие пациента: боль, сон, страх, холод — понять и переспросить.',
  words: [
    { id: 'pfl-a11-05-krank', icon: 'Frown', de: 'krank', pos: 'adj', ru: 'больной, болен', note: 'krank sein — болеть. Ich bin krank. — Я болею.', example: { de: 'Herr Schmidt ist sehr krank.', ru: 'Господин Шмидт очень болен.', cloze: 'krank' } },
    { id: 'pfl-a11-05-gesund', icon: 'HeartPulse', de: 'gesund', pos: 'adj', ru: 'здоровый', note: 'Bleiben Sie gesund! — Будьте здоровы!', example: { de: 'Morgen sind Sie wieder gesund.', ru: 'Завтра вы снова будете здоровы.', cloze: 'gesund' } },
    { id: 'pfl-a11-05-schmerz', icon: 'Zap', de: 'Schmerz', pos: 'noun', article: 'der', plural: 'Schmerzen', ru: 'боль', note: 'Обычно во мн. ч.: Schmerzen haben — испытывать боль.', collocation: { de: 'Schmerzen haben', ru: 'испытывать боль' }, example: { de: 'Haben Sie Schmerzen?', ru: 'У вас что-нибудь болит?', cloze: 'Schmerzen' } },
    { id: 'pfl-a11-05-schlecht', icon: 'ThumbsDown', de: 'schlecht', pos: 'adj', ru: 'плохой, плохо', note: 'Mir geht es schlecht. — Мне плохо.', example: { de: 'Mir geht es heute schlecht.', ru: 'Мне сегодня плохо.', cloze: 'schlecht' } },
    { id: 'pfl-a11-05-besser', icon: 'TrendingUp', de: 'besser', pos: 'adj', ru: 'лучше', note: 'gut — besser — am besten.', example: { de: 'Heute geht es mir besser.', ru: 'Сегодня мне лучше.', cloze: 'besser' } },
    { id: 'pfl-a11-05-schlafen', icon: 'Moon', de: 'schlafen', pos: 'verb', ru: 'спать', forms: 'er schläft · hat geschlafen', note: 'du schläfst, er schläft. Gut geschlafen? — Хорошо спали?', collocation: { de: 'gut schlafen', ru: 'хорошо спать', accept: ['schlecht schlafen'] }, example: { de: 'Haben Sie gut geschlafen?', ru: 'Вы хорошо спали?', cloze: 'geschlafen' } },
    { id: 'pfl-a11-05-angst', icon: 'CloudLightning', de: 'Angst', pos: 'noun', article: 'die', plural: 'Ängste', ru: 'страх', note: 'Angst haben vor + Dat — бояться чего-то.', collocation: { de: 'Angst haben', ru: 'бояться' }, example: { de: 'Frau Wolf hat Angst.', ru: 'Госпожа Вольф боится.', cloze: 'Angst' } },
    { id: 'pfl-a11-05-traurig', icon: 'Frown', de: 'traurig', pos: 'adj', ru: 'грустный', example: { de: 'Warum sind Sie traurig?', ru: 'Почему вы грустите?', cloze: 'traurig' } },

    { id: 'pfl-a11-05-kalt', icon: 'Snowflake', de: 'kalt', pos: 'adj', ru: 'холодный, холодно', note: 'Mir ist kalt. — Мне холодно (не «Ich bin kalt»!).', collocation: { de: 'Mir ist kalt.', ru: 'Мне холодно.' }, example: { de: 'Mir ist so kalt.', ru: 'Мне так холодно.', cloze: 'kalt' } },
    { id: 'pfl-a11-05-warm', icon: 'Sun', de: 'warm', pos: 'adj', ru: 'тёплый, тепло', note: 'Mir ist warm. — Мне тепло / жарко.', example: { de: 'Das Zimmer ist warm.', ru: 'В палате тепло.', cloze: 'warm' } },
    { id: 'pfl-a11-05-schwindlig', icon: 'RotateCw', de: 'schwindlig', pos: 'adj', ru: 'с головокружением', note: 'Mir ist schwindlig. — У меня кружится голова.', collocation: { de: 'Mir ist schwindlig.', ru: 'У меня кружится голова.' }, example: { de: 'Mir ist schwindlig.', ru: 'У меня кружится голова.', cloze: 'schwindlig' } },
    { id: 'pfl-a11-05-uebel', icon: 'Annoyed', de: 'übel', pos: 'adj', ru: 'тошно, нехорошо', note: 'Mir ist übel. — Меня тошнит.', collocation: { de: 'Mir ist übel.', ru: 'Меня тошнит.' }, example: { de: 'Nach dem Essen ist mir übel.', ru: 'После еды меня тошнит.', cloze: 'übel' } },
    { id: 'pfl-a11-05-hilfe', icon: 'LifeBuoy', de: 'Hilfe', pos: 'noun', article: 'die', ru: 'помощь', note: 'Hilfe! — Помогите! Без мн. ч.', collocation: { de: 'Hilfe brauchen', ru: 'нуждаться в помощи' }, example: { de: 'Brauchen Sie Hilfe?', ru: 'Вам нужна помощь?', cloze: 'Hilfe' } },
    { id: 'pfl-a11-05-klingel', icon: 'BellRing', imageQuery: 'nurse call button', de: 'Klingel', pos: 'noun', article: 'die', plural: 'Klingeln', ru: 'кнопка вызова, звонок', note: 'klingeln — звонить, нажимать кнопку вызова.', collocation: { de: 'auf die Klingel drücken', ru: 'нажать кнопку вызова' }, example: { de: 'Die Klingel ist hier am Bett.', ru: 'Кнопка вызова здесь, у кровати.', cloze: 'Klingel' } },
    { id: 'pfl-a11-05-decke', icon: 'Layers', imageQuery: 'blanket bed', de: 'Decke', pos: 'noun', article: 'die', plural: 'Decken', ru: 'одеяло; потолок', example: { de: 'Ich bringe Ihnen eine Decke.', ru: 'Я принесу вам одеяло.', cloze: 'Decke' } },
    { id: 'pfl-a11-05-ruhig', icon: 'Leaf', de: 'ruhig', pos: 'adj', ru: 'спокойный, тихий', note: 'Ganz ruhig! — Спокойно!', example: { de: 'Atmen Sie ganz ruhig.', ru: 'Дышите совсем спокойно.', cloze: 'ruhig' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Eine schlechte Nacht',
      de: `Am Morgen kommt Olena zu Herrn Schmidt. Sie fragt: „Haben Sie gut geschlafen?“ Herr Schmidt sagt: „Nein, ich habe schlecht geschlafen. Ich habe Schmerzen im Rücken.“

Frau Wolf ist auch krank. Sie ist traurig und hat Angst. Sie fragt: „Bin ich bald wieder gesund?“ Olena sagt: „Ja, Frau Wolf. Heute geht es Ihnen schon besser.“

Frau Wolf lächelt. „Danke, Olena. Sie sind sehr nett.“`,
      ru: `Утром Олена приходит к господину Шмидту. Она спрашивает: «Вы хорошо спали?» Господин Шмидт говорит: «Нет, я плохо спал. У меня болит спина».

Госпожа Вольф тоже больна. Ей грустно, и она боится. Она спрашивает: «Я скоро снова буду здорова?» Олена говорит: «Да, госпожа Вольф. Сегодня вам уже лучше».

Госпожа Вольф улыбается. «Спасибо, Олена. Вы очень милая».`,
      gloss: { olena: 'Олена (имя)', schmidt: 'Шмидт (фамилия)', wolf: 'Вольф (фамилия)', herrn: 'господину (дат./вин.)', herr: 'господин', frau: 'госпожа', kommt: 'приходит', fragt: 'спрашивает', sagt: 'говорит', bald: 'скоро', wieder: 'снова', schon: 'уже', lächelt: 'улыбается', danke: 'спасибо', nett: 'милый, приятный', nacht: 'ночь', wer: 'кто', was: 'что', wo: 'где', rücken: 'спина', kopf: 'голова', bauch: 'живот' },
      questions: [
        { q: 'Wie hat Herr Schmidt geschlafen?', ru: 'Как спал господин Шмидт?', options: ['Gut', 'Schlecht', 'Sehr gut'], answer: 'Schlecht' },
        { q: 'Wo hat Herr Schmidt Schmerzen?', ru: 'Где у господина Шмидта боль?', options: ['Im Rücken', 'Im Kopf', 'Im Bauch'], answer: 'Im Rücken' },
        { q: 'Wer hat Angst?', ru: 'Кто боится?', options: ['Frau Wolf', 'Olena', 'Herr Schmidt'], answer: 'Frau Wolf' },
      ],
      translate: [
        { de: 'Haben Sie gut geschlafen?', ru: 'Вы хорошо спали?', wrongRu: ['Вы плохо спали?', 'Вы хорошо поели?'] },
        { de: 'Heute geht es mir besser.', ru: 'Сегодня мне лучше.', wrongRu: ['Сегодня мне хуже.', 'Вчера мне было лучше.'] },
        { de: 'Frau Wolf hat Angst.', ru: 'Госпожа Вольф боится.', wrongRu: ['Госпожа Вольф устала.', 'Госпожа Вольф не боится.'] },
      ],
    },
    {
      lesson: 1, title: 'Die Klingel',
      de: `In der Nacht klingelt Frau Wolf. Olena hat Nachtdienst und kommt sofort. „Brauchen Sie Hilfe?“, fragt sie.

Frau Wolf sagt: „Mir ist schwindlig. Und mir ist so kalt.“ Olena bringt eine Decke. Dann misst sie die Temperatur. Sie ist normal.

Olena sagt: „Atmen Sie ganz ruhig. Ist Ihnen auch übel?“ – „Nein“, sagt Frau Wolf. Nach zehn Minuten ist ihr warm. Olena zeigt ihr die Klingel noch einmal: „Klingeln Sie, wenn Sie Hilfe brauchen.“`,
      ru: `Ночью госпожа Вольф нажимает кнопку вызова. У Олены ночная смена, и она приходит сразу. «Вам нужна помощь?» — спрашивает она.

Госпожа Вольф говорит: «У меня кружится голова. И мне так холодно». Олена приносит одеяло. Потом она измеряет температуру. Она нормальная.

Олена говорит: «Дышите совсем спокойно. Вас ещё и тошнит?» — «Нет», — говорит госпожа Вольф. Через десять минут ей тепло. Олена ещё раз показывает ей кнопку вызова: «Звоните, если вам нужна помощь».`,
      gloss: { warme: 'тёплое, тёплую', olena: 'Олена (имя)', wolf: 'Вольф (фамилия)', frau: 'госпожа', nacht: 'ночь', klingelt: 'звонит; нажимает кнопку вызова', klingeln: 'звоните, нажимайте кнопку вызова', kommt: 'приходит', sofort: 'сразу, немедленно', brauchen: 'нуждаться; (Brauchen Sie …?) Вам нужна …?', fragt: 'спрашивает', sagt: 'говорит', so: 'так', bringt: 'приносит', dann: 'потом, затем', normal: 'нормальный', atmen: 'дышать, дышите', ganz: 'совсем, совершенно', zehn: 'десять', noch: 'ещё', einmal: 'раз; (noch einmal) ещё раз', wenn: 'если, когда', was: 'что', wie: 'как, какой', ihnen: 'вам; им', mir: 'мне', ihr: 'ей; её', hoch: 'высокий' },
      questions: [
        { q: 'Was bringt Olena?', ru: 'Что приносит Олена?', options: ['Eine Decke', 'Einen Tee', 'Die Klingel'], answer: 'Eine Decke' },
        { q: 'Wie ist die Temperatur?', ru: 'Какая температура?', options: ['Normal', 'Hoch', 'Kalt'], answer: 'Normal' },
        { q: 'Ist Frau Wolf übel?', ru: 'Госпожу Вольф тошнит?', options: ['Ja', 'Nein', 'Sehr'], answer: 'Nein' },
      ],
      translate: [
        { de: 'Mir ist schwindlig.', ru: 'У меня кружится голова.', wrongRu: ['У меня болит голова.', 'Мне холодно.'] },
        { de: 'Brauchen Sie Hilfe?', ru: 'Вам нужна помощь?', wrongRu: ['Вам нужно одеяло?', 'Вы мне поможете?'] },
        { de: 'Olena bringt eine warme Decke.', ru: 'Олена приносит тёплое одеяло.', wrongRu: ['Олена уносит тёплое одеяло.', 'Олена приносит холодную воду.'] },
      ],
    },
  ],
};
