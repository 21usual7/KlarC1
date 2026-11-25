import type { Module } from '../types.ts';

// A2.1 alltag 02: the foreigners' office — residence permit, extension, application (lesson 0); documents, validity, waiting time (lesson 1).

export const module: Module = {
  id: 'alltag-a21-02-auslaenderbehoerde', sphere: 'alltag', level: 'A2.1',
  title: 'Bei der Ausländerbehörde', subtitle: 'Ведомство по делам иностранцев: вид на жительство, продление, заявление, документы и сроки.',
  words: [
    { id: 'all-a21-02-auslaenderbehoerde', icon: 'Landmark', de: 'Ausländerbehörde', pos: 'noun', article: 'die', plural: 'Ausländerbehörden', ru: 'ведомство по делам иностранцев', parts: ['Ausländer', 'behörde'], example: { de: 'Ich habe einen Termin bei der Ausländerbehörde.', ru: 'У меня запись в ведомство по делам иностранцев.', cloze: 'Ausländerbehörde' } },
    { id: 'all-a21-02-aufenthaltstitel', icon: 'IdCard', de: 'Aufenthaltstitel', pos: 'noun', article: 'der', plural: 'Aufenthaltstitel', ru: 'вид на жительство (документ)', parts: ['Aufenthalts', 'titel'], example: { de: 'Mein Aufenthaltstitel läuft im März ab.', ru: 'Мой вид на жительство истекает в марте.', cloze: 'Aufenthaltstitel' } },
    { id: 'all-a21-02-aufenthaltserlaubnis', icon: 'BadgeCheck', de: 'Aufenthaltserlaubnis', pos: 'noun', article: 'die', plural: 'Aufenthaltserlaubnisse', ru: 'разрешение на пребывание', parts: ['Aufenthalts', 'erlaubnis'], example: { de: 'Die Aufenthaltserlaubnis gilt drei Jahre.', ru: 'Разрешение на пребывание действует три года.', cloze: 'Aufenthaltserlaubnis' } },
    { id: 'all-a21-02-verlaengern', icon: 'CalendarPlus', de: 'verlängern', pos: 'verb', ru: 'продлевать', forms: 'er verlängert · hat verlängert', example: { de: 'Ich muss meinen Aufenthalt verlängern.', ru: 'Мне нужно продлить пребывание.', cloze: 'verlängern' } },
    { id: 'all-a21-02-antrag', icon: 'FileText', de: 'Antrag', pos: 'noun', article: 'der', plural: 'Anträge', ru: 'заявление', collocation: { de: 'einen Antrag stellen', ru: 'подать заявление' }, example: { de: 'Stellen Sie den Antrag rechtzeitig.', ru: 'Подайте заявление вовремя.', cloze: 'Antrag' } },
    { id: 'all-a21-02-beantragen', icon: 'FilePlus', de: 'beantragen', pos: 'verb', ru: 'подавать заявление (на что-то)', forms: 'er beantragt · hat beantragt', example: { de: 'Ich beantrage eine Verlängerung.', ru: 'Я подаю заявление на продление.', cloze: 'beantrage' } },
    { id: 'all-a21-02-bearbeitung', icon: 'Loader', de: 'Bearbeitung', pos: 'noun', article: 'die', ru: 'обработка, рассмотрение', example: { de: 'Die Bearbeitung dauert sechs Wochen.', ru: 'Рассмотрение длится шесть недель.', cloze: 'Bearbeitung' } },
    { id: 'all-a21-02-fiktionsbescheinigung', icon: 'FileClock', de: 'Fiktionsbescheinigung', pos: 'noun', article: 'die', plural: 'Fiktionsbescheinigungen', ru: 'временное подтверждение права на пребывание', parts: ['Fiktions', 'bescheinigung'], note: 'Выдаётся, пока заявление на продление рассматривается.', example: { de: 'Bis zur Entscheidung bekommen Sie eine Fiktionsbescheinigung.', ru: 'До решения вы получите временное подтверждение.', cloze: 'Fiktionsbescheinigung' } },

    { id: 'all-a21-02-unterlagen', icon: 'Files', de: 'Unterlagen', pos: 'noun', article: 'die', pluralOnly: true, ru: 'документы, бумаги', example: { de: 'Bringen Sie alle Unterlagen mit.', ru: 'Принесите все документы.', cloze: 'Unterlagen' } },
    { id: 'all-a21-02-nachweis', icon: 'BadgeCheck', de: 'Nachweis', pos: 'noun', article: 'der', plural: 'Nachweise', ru: 'подтверждение, доказательство', example: { de: 'Wir brauchen einen Nachweis über Ihr Einkommen.', ru: 'Нам нужно подтверждение вашего дохода.', cloze: 'Nachweis' } },
    { id: 'all-a21-02-sachbearbeiter', icon: 'UserCheck', de: 'Sachbearbeiter', pos: 'noun', article: 'der', plural: 'Sachbearbeiter', ru: 'сотрудник, ответственный специалист', note: 'Женщина — die Sachbearbeiterin.', example: { de: 'Mein Sachbearbeiter heißt Herr Krause.', ru: 'Моего специалиста зовут господин Краузе.', cloze: 'Sachbearbeiter' } },
    { id: 'all-a21-02-gueltig', icon: 'CircleCheck', de: 'gültig', pos: 'adj', ru: 'действительный', note: 'ungültig — недействительный.', example: { de: 'Ist Ihr Pass noch gültig?', ru: 'Ваш паспорт ещё действителен?', cloze: 'gültig' } },
    { id: 'all-a21-02-ablaufen', icon: 'Hourglass', de: 'ablaufen', pos: 'verb', ru: 'истекать (о сроке)', forms: 'es läuft ab · ist abgelaufen', example: { de: 'Der Pass ist leider abgelaufen.', ru: 'Паспорт, к сожалению, просрочен.', cloze: 'abgelaufen' } },
    { id: 'all-a21-02-passfoto', icon: 'Camera', imageQuery: 'passport photo', de: 'Passfoto', pos: 'noun', article: 'das', plural: 'Passfotos', ru: 'фото на паспорт', parts: ['Pass', 'foto'], example: { de: 'Ich brauche ein biometrisches Passfoto.', ru: 'Мне нужно биометрическое фото на паспорт.', cloze: 'Passfoto' } },
    { id: 'all-a21-02-biometrisch', icon: 'ScanFace', de: 'biometrisch', pos: 'adj', ru: 'биометрический', example: { de: 'Das Foto muss biometrisch sein.', ru: 'Фото должно быть биометрическим.', cloze: 'biometrisch' } },
    { id: 'all-a21-02-wartezeit', icon: 'Clock', de: 'Wartezeit', pos: 'noun', article: 'die', plural: 'Wartezeiten', ru: 'время ожидания', parts: ['Warte', 'zeit'], example: { de: 'Die Wartezeit für einen Termin ist lang.', ru: 'Ждать записи долго.', cloze: 'Wartezeit' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Die Aufenthaltserlaubnis verlängern',
      de: `Die Aufenthaltserlaubnis von Amir und Leyla läuft im März ab. Sie müssen sie verlängern. Frau Schulz sagt: „Stellen Sie den Antrag rechtzeitig, mindestens acht Wochen vorher. Die Wartezeit für einen Termin ist lang.“

Amir schreibt eine E-Mail an die Ausländerbehörde. Zwei Wochen später bekommt er einen Termin. Er beantragt die Verlängerung für die ganze Familie.

Die Sachbearbeiterin erklärt: „Die Bearbeitung dauert etwa sechs Wochen. Bis zur Entscheidung bekommen Sie eine Fiktionsbescheinigung. Damit dürfen Sie weiter in Deutschland bleiben und arbeiten.“`,
      ru: `Разрешение на пребывание у Амира и Лейлы истекает в марте. Им нужно его продлить. Госпожа Шульц говорит: «Подайте заявление вовремя, минимум за восемь недель. Записи ждать долго».

Амир пишет письмо в ведомство по делам иностранцев. Через две недели он получает запись. Он подаёт заявление на продление для всей семьи.

Сотрудница объясняет: «Рассмотрение длится около шести недель. До решения вы получите временное подтверждение. С ним вы можете дальше оставаться в Германии и работать».`,
      gloss: { aufenthalt: 'пребывание', märz: 'март', sachbearbeiterin: 'сотрудница, ответственный специалист', deutschland: 'Германия', mai: 'май', amir: 'Амир (имя)', leyla: 'Лейла (имя)', schulz: 'Шульц (фамилия)', mindestens: 'минимум, по крайней мере', vorher: 'заранее, до этого', verlängerung: 'продление', ganze: 'всей', entscheidung: 'решение', damit: 'с этим', dürfen: 'можете (разрешено)', weiter: 'дальше' },
      questions: [
        { q: 'Wann läuft die Aufenthaltserlaubnis ab?', ru: 'Когда истекает разрешение на пребывание?', options: ['Im März', 'Im Mai', 'In zwei Wochen'], answer: 'Im März' },
        { q: 'Wie lange dauert die Bearbeitung?', ru: 'Сколько длится рассмотрение?', options: ['Etwa sechs Wochen', 'Zwei Tage', 'Ein Jahr'], answer: 'Etwa sechs Wochen' },
        { q: 'Was bekommen sie bis zur Entscheidung?', ru: 'Что они получают до решения?', options: ['Eine Fiktionsbescheinigung', 'Einen neuen Pass', 'Nichts'], answer: 'Eine Fiktionsbescheinigung' },
      ],
      translate: [
        { de: 'Ich muss meinen Aufenthalt verlängern.', ru: 'Мне нужно продлить пребывание.', wrongRu: ['Мне нужно закончить пребывание.', 'Мне нужно продлить паспорт.'] },
        { de: 'Stellen Sie den Antrag rechtzeitig.', ru: 'Подайте заявление вовремя.', wrongRu: ['Подайте заявление позже.', 'Заберите заявление вовремя.'] },
        { de: 'Die Bearbeitung dauert sechs Wochen.', ru: 'Рассмотрение длится шесть недель.', wrongRu: ['Ожидание записи — шесть недель.', 'Рассмотрение длится шесть дней.'] },
      ],
    },
    {
      lesson: 1, title: 'Fehlende Unterlagen',
      de: `Beim Termin prüft die Sachbearbeiterin die Unterlagen. „Ihr Pass ist noch gültig, gut. Aber der Pass von Ihrem Sohn ist abgelaufen.“ Amir ist überrascht. Das hat er nicht gesehen.

„Außerdem brauchen wir einen Nachweis über Ihr Einkommen, zum Beispiel Ihren Arbeitsvertrag. Und für jede Person ein biometrisches Passfoto.“

Amir hat nur den Arbeitsvertrag dabei. „Kein Problem“, sagt die Sachbearbeiterin. „Schicken Sie die fehlenden Unterlagen per Post oder E-Mail. Den Pass für Karim beantragen Sie bei Ihrer Botschaft.“`,
      ru: `На приёме сотрудница проверяет документы. «Ваш паспорт ещё действителен, хорошо. Но паспорт вашего сына просрочен». Амир удивлён. Он этого не заметил.

«Кроме того, нам нужно подтверждение вашего дохода, например трудовой договор. И биометрическое фото на каждого человека».

У Амира с собой только трудовой договор. «Не проблема, — говорит сотрудница. — Пришлите недостающие документы по почте или по электронной почте. Паспорт для Карима оформите в вашем посольстве».`,
      gloss: { sachbearbeiterin: 'сотрудница, ответственный специалист', amirs: 'Амира (чей?)', leylas: 'Лейлы (чей?)', amir: 'Амир (имя)', karim: 'Карим (имя)', prüft: 'проверяет', überrascht: 'удивлён', außerdem: 'кроме того', einkommen: 'доход', arbeitsvertrag: 'трудовой договор', jede: 'каждого', person: 'человек', fehlenden: 'недостающие', botschaft: 'посольство', fehlende: 'недостающие' },
      questions: [
        { q: 'Welcher Pass ist abgelaufen?', ru: 'Чей паспорт просрочен?', options: ['Der Pass von Amirs Sohn', 'Amirs Pass', 'Leylas Pass'], answer: 'Der Pass von Amirs Sohn' },
        { q: 'Was ist ein Nachweis über das Einkommen?', ru: 'Что подтверждает доход?', options: ['Der Arbeitsvertrag', 'Das Passfoto', 'Die Meldebescheinigung'], answer: 'Der Arbeitsvertrag' },
        { q: 'Wo beantragt Amir den Pass für Karim?', ru: 'Где Амир оформляет паспорт для Карима?', options: ['Bei der Botschaft', 'Bei der Ausländerbehörde', 'Im Bürgeramt'], answer: 'Bei der Botschaft' },
      ],
      translate: [
        { de: 'Ist Ihr Pass noch gültig?', ru: 'Ваш паспорт ещё действителен?', wrongRu: ['Ваш паспорт просрочен?', 'Где ваш паспорт?'] },
        { de: 'Bringen Sie alle Unterlagen mit.', ru: 'Принесите все документы.', wrongRu: ['Отправьте все документы.', 'Принесите только паспорт.'] },
        { de: 'Das Foto muss biometrisch sein.', ru: 'Фото должно быть биометрическим.', wrongRu: ['Фото может быть любым.', 'Фото должно быть цветным.'] },
      ],
    },
  ],
};
