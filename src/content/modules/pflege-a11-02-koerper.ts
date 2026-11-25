import type { Module } from '../types.ts';

// A1.1 pflege 02: body parts — where does it hurt (lesson 0), the doctor's round (lesson 1).

export const module: Module = {
  id: 'pflege-a11-02-koerper', sphere: 'pflege', level: 'A1.1',
  title: 'Der Körper', subtitle: 'Части тела: спросить, где болит, и попросить пациента показать.',
  words: [
    { id: 'pfl-a11-02-kopf', icon: 'Brain', de: 'Kopf', pos: 'noun', article: 'der', plural: 'Köpfe', ru: 'голова', note: 'die Kopfschmerzen — головная боль.', collocation: { de: 'Mein Kopf tut weh.', ru: 'У меня болит голова.', accept: ['Der Kopf tut weh.'] }, example: { de: 'Mein Kopf tut weh.', ru: 'У меня болит голова.', cloze: 'Kopf' } },
    { id: 'pfl-a11-02-arm', icon: 'BicepsFlexed', imageQuery: 'human arm', de: 'Arm', pos: 'noun', article: 'der', plural: 'Arme', ru: 'рука (от плеча до кисти)', note: 'der Arm — вся рука, die Hand — кисть.', collocation: { de: 'den Arm heben', ru: 'поднять руку', accept: ['den Arm hochheben'] }, example: { de: 'Heben Sie bitte den Arm!', ru: 'Поднимите, пожалуйста, руку!', cloze: 'Arm' } },
    { id: 'pfl-a11-02-hand', icon: 'Hand', imageQuery: 'washing hands', de: 'Hand', pos: 'noun', article: 'die', plural: 'Hände', ru: 'кисть руки, рука', collocation: { de: 'die Hände waschen', ru: 'мыть руки', accept: ['sich die Hände waschen'] }, example: { de: 'Ich wasche mir die Hände.', ru: 'Я мою руки.', cloze: 'Hände' } },
    { id: 'pfl-a11-02-bein', icon: 'PersonStanding', de: 'Bein', pos: 'noun', article: 'das', plural: 'Beine', ru: 'нога', note: 'das Bein — вся нога, der Fuß — стопа.', example: { de: 'Das Bein ist kalt.', ru: 'Нога холодная.', cloze: 'Bein' } },
    { id: 'pfl-a11-02-bauch', icon: 'CircleDot', de: 'Bauch', pos: 'noun', article: 'der', plural: 'Bäuche', ru: 'живот', note: 'die Bauchschmerzen — боль в животе.', example: { de: 'Der Bauch tut weh.', ru: 'Живот болит.', cloze: 'Bauch' } },
    { id: 'pfl-a11-02-ruecken', icon: 'Bone', de: 'Rücken', pos: 'noun', article: 'der', plural: 'Rücken', ru: 'спина', note: 'auf dem Rücken liegen — лежать на спине.', collocation: { de: 'auf dem Rücken liegen', ru: 'лежать на спине' }, example: { de: 'Legen Sie sich bitte auf den Rücken.', ru: 'Лягте, пожалуйста, на спину.', cloze: 'Rücken' } },
    { id: 'pfl-a11-02-auge', icon: 'Eye', imageQuery: 'human eye', de: 'Auge', pos: 'noun', article: 'das', plural: 'Augen', ru: 'глаз', collocation: { de: 'die Augen öffnen', ru: 'открыть глаза', accept: ['die Augen aufmachen'] }, example: { de: 'Öffnen Sie bitte die Augen!', ru: 'Откройте, пожалуйста, глаза!', cloze: 'Augen' } },
    { id: 'pfl-a11-02-wehtun', icon: 'Zap', de: 'wehtun', pos: 'verb', ru: 'болеть (о части тела)', forms: 'es tut weh · hat wehgetan', note: 'Отделяемая приставка: Der Kopf tut weh. Wo tut es weh? — Где болит?', collocation: { de: 'Wo tut es weh?', ru: 'Где болит?' }, example: { de: 'Wo tut es weh?', ru: 'Где болит?', cloze: 'tut' } },

    { id: 'pfl-a11-02-ohr', icon: 'Ear', imageQuery: 'human ear', de: 'Ohr', pos: 'noun', article: 'das', plural: 'Ohren', ru: 'ухо', example: { de: 'Ich höre auf dem linken Ohr schlecht.', ru: 'Я плохо слышу левым ухом.', cloze: 'Ohr' } },
    { id: 'pfl-a11-02-mund', icon: 'Smile', de: 'Mund', pos: 'noun', article: 'der', plural: 'Münder', ru: 'рот', collocation: { de: 'den Mund aufmachen', ru: 'открыть рот', accept: ['den Mund öffnen'] }, example: { de: 'Machen Sie bitte den Mund auf.', ru: 'Откройте, пожалуйста, рот.', cloze: 'Mund' } },
    { id: 'pfl-a11-02-zahn', icon: 'Sparkle', imageQuery: 'teeth smile', de: 'Zahn', pos: 'noun', article: 'der', plural: 'Zähne', ru: 'зуб', collocation: { de: 'die Zähne putzen', ru: 'чистить зубы', accept: ['sich die Zähne putzen'] }, example: { de: 'Ich putze mir die Zähne.', ru: 'Я чищу зубы.', cloze: 'Zähne' } },
    { id: 'pfl-a11-02-hals', icon: 'Thermometer', de: 'Hals', pos: 'noun', article: 'der', plural: 'Hälse', ru: 'шея; горло', note: 'die Halsschmerzen — боль в горле.', example: { de: 'Mein Hals tut weh.', ru: 'У меня болит горло.', cloze: 'Hals' } },
    { id: 'pfl-a11-02-brust', icon: 'HeartPulse', de: 'Brust', pos: 'noun', article: 'die', plural: 'Brüste', ru: 'грудь, грудная клетка', example: { de: 'Haben Sie Schmerzen in der Brust?', ru: 'У вас боли в груди?', cloze: 'Brust' } },
    { id: 'pfl-a11-02-knie', icon: 'Footprints', imageQuery: 'knee', de: 'Knie', pos: 'noun', article: 'das', plural: 'Knie', ru: 'колено', note: 'Мн. ч. не меняется: zwei Knie.', example: { de: 'Mein Knie ist dick.', ru: 'У меня распухло колено.', cloze: 'Knie' } },
    { id: 'pfl-a11-02-finger', icon: 'Fingerprint', imageQuery: 'fingers hand', de: 'Finger', pos: 'noun', article: 'der', plural: 'Finger', ru: 'палец (руки)', note: 'Палец ноги — der Zeh.', example: { de: 'Ein Finger ist blau.', ru: 'Один палец посинел.', cloze: 'Finger' } },
    { id: 'pfl-a11-02-zeigen', icon: 'MousePointerClick', de: 'zeigen', pos: 'verb', ru: 'показывать', forms: 'er zeigt · hat gezeigt', note: 'zeigen + Dat + Akk: Zeigen Sie mir das Knie.', collocation: { de: 'Zeigen Sie mir bitte …', ru: 'Покажите мне, пожалуйста, …' }, example: { de: 'Zeigen Sie mir bitte das Knie.', ru: 'Покажите мне, пожалуйста, колено.', cloze: 'Zeigen' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Wo tut es weh?',
      de: `Olena geht in Zimmer sieben. Dort liegt Frau Wolf. Sie ist achtzig Jahre alt. Olena gibt ihr die Hand und fragt: „Guten Morgen, Frau Wolf! Wie geht es Ihnen?“

Frau Wolf sagt: „Nicht gut. Mein Kopf tut weh. Und mein Bauch auch.“ Olena fragt: „Und der Rücken?“ – „Nein, der Rücken ist gut.“

Olena sagt: „Öffnen Sie bitte die Augen. Heben Sie bitte den Arm. Gut! Und jetzt das Bein.“ Dann ruft Olena den Arzt.`,
      ru: `Олена идёт в палату семь. Там лежит госпожа Вольф. Ей восемьдесят лет. Олена здоровается с ней за руку и спрашивает: «Доброе утро, госпожа Вольф! Как вы себя чувствуете?»

Госпожа Вольф говорит: «Плохо. У меня болит голова. И живот тоже». Олена спрашивает: «А спина?» — «Нет, со спиной всё хорошо».

Олена говорит: «Откройте, пожалуйста, глаза. Поднимите, пожалуйста, руку. Хорошо! А теперь ногу». Потом Олена зовёт врача.`,
      gloss: { olena: 'Олена (имя)', wolf: 'Вольф (фамилия)', frau: 'госпожа; женщина', sieben: 'семь', dort: 'там', liegt: 'лежит', achtzig: 'восемьдесят', jahre: 'годы, лет', alt: 'старый; (… Jahre alt) … лет', gibt: 'даёт; (die Hand geben) здороваться за руку', fragt: 'спрашивает', sagt: 'говорит', gut: 'хорошо, хороший', heben: 'поднимать, поднимите', ruft: 'зовёт', dann: 'потом, затем', jetzt: 'сейчас, теперь', weh: '(tut weh) болит', wen: 'кого', achtzehn: 'восемнадцать', zimmer: 'палата, комната' },
      questions: [
        { q: 'Wie alt ist Frau Wolf?', ru: 'Сколько лет госпоже Вольф?', options: ['Sieben', 'Achtzig', 'Achtzehn'], answer: 'Achtzig' },
        { q: 'Was tut Frau Wolf weh?', ru: 'Что болит у госпожи Вольф?', options: ['Der Kopf und der Bauch', 'Der Rücken', 'Das Bein'], answer: 'Der Kopf und der Bauch' },
        { q: 'Wen ruft Olena?', ru: 'Кого зовёт Олена?', options: ['Den Arzt', 'Frau Wolf', 'Den Patienten'], answer: 'Den Arzt' },
      ],
      translate: [
        { de: 'Mein Kopf tut weh.', ru: 'У меня болит голова.', wrongRu: ['У меня болит живот.', 'У неё болит голова.'] },
        { de: 'Heben Sie bitte den Arm.', ru: 'Поднимите, пожалуйста, руку.', wrongRu: ['Поднимите, пожалуйста, ногу.', 'Опустите, пожалуйста, руку.'] },
        { de: 'Der Rücken ist gut.', ru: 'Со спиной всё хорошо.', wrongRu: ['Спина болит.', 'С животом всё хорошо.'] },
      ],
    },
    {
      lesson: 1, title: 'Die Visite',
      de: `Doktor Wagner kommt in Zimmer sieben. Er sagt: „Frau Wolf, machen Sie bitte den Mund auf.“ Er sieht die Zähne und den Hals. Der Hals ist rot.

Frau Wolf sagt: „Mein Knie tut auch weh.“ Der Arzt sagt: „Zeigen Sie mir bitte das Knie.“ Das Knie ist dick. Die Brust und die Finger sind gut.

Am Ende sagt Frau Wolf: „Ich höre auf dem linken Ohr schlecht.“ Doktor Wagner schreibt alles auf.`,
      ru: `Доктор Вагнер приходит в палату семь. Он говорит: «Госпожа Вольф, откройте, пожалуйста, рот». Он смотрит зубы и горло. Горло красное.

Госпожа Вольф говорит: «У меня ещё колено болит». Врач говорит: «Покажите мне, пожалуйста, колено». Колено распухло. С грудью и пальцами всё в порядке.

В конце госпожа Вольф говорит: «Я плохо слышу левым ухом». Доктор Вагнер всё записывает.`,
      gloss: { doktor: 'доктор', wagner: 'Вагнер (фамилия)', wolf: 'Вольф (фамилия)', frau: 'госпожа; женщина', kommt: 'приходит', sieben: 'семь', sagt: 'говорит', machen: 'делать; (… auf) открывать', sieht: 'видит, смотрит', rot: 'красный', weh: '(tut weh) болит', dick: 'толстый; распухший', ende: 'конец; (am Ende) в конце', höre: 'слышу', linken: 'левым, левый', rechten: 'правым, правый', beiden: 'обоими, оба', schlecht: 'плохо', schreibt: 'пишет; (schreibt … auf) записывает', alles: 'всё', blau: 'синий', gut: 'хорошо, хороший', welchem: 'каким, на каком', zimmer: 'палата, комната' },
      questions: [
        { q: 'Wie ist der Hals?', ru: 'Какое горло?', options: ['Rot', 'Blau', 'Gut'], answer: 'Rot' },
        { q: 'Was ist dick?', ru: 'Что распухло?', options: ['Das Knie', 'Der Finger', 'Der Hals'], answer: 'Das Knie' },
        { q: 'Auf welchem Ohr hört Frau Wolf schlecht?', ru: 'Каким ухом госпожа Вольф плохо слышит?', options: ['Auf dem linken', 'Auf dem rechten', 'Auf beiden'], answer: 'Auf dem linken' },
      ],
      translate: [
        { de: 'Machen Sie bitte den Mund auf.', ru: 'Откройте, пожалуйста, рот.', wrongRu: ['Закройте, пожалуйста, рот.', 'Откройте, пожалуйста, глаза.'] },
        { de: 'Das Knie ist dick.', ru: 'Колено распухло.', wrongRu: ['Колено холодное.', 'Нога распухла.'] },
        { de: 'Zeigen Sie mir bitte den Finger.', ru: 'Покажите мне, пожалуйста, палец.', wrongRu: ['Покажите мне, пожалуйста, руку.', 'Покажите ему, пожалуйста, палец.'] },
      ],
    },
  ],
};
