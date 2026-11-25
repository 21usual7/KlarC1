import type { Module } from '../types.ts';

// A2.2 alltag 03: insurance — liability, household contents, policy (lesson 0); claims, excess, monthly and annual payments (lesson 1).

export const module: Module = {
  id: 'alltag-a22-03-versicherungen', sphere: 'alltag', level: 'A2.2',
  title: 'Versicherungen', subtitle: 'Страховки: ответственность перед третьими лицами, имущество, полис, страховой случай и франшиза.',
  words: [
    { id: 'all-a22-03-versicherung', icon: 'Shield', de: 'Versicherung', pos: 'noun', article: 'die', plural: 'Versicherungen', ru: 'страховка; страховая компания', example: { de: 'Welche Versicherungen braucht man wirklich?', ru: 'Какие страховки действительно нужны?', cloze: 'Versicherungen' } },
    { id: 'all-a22-03-versichern', icon: 'ShieldCheck', de: 'versichern', pos: 'verb', ru: 'страховать', forms: 'er versichert · hat versichert', example: { de: 'Wir versichern unsere Wohnung gegen Feuer.', ru: 'Мы страхуем квартиру от пожара.', cloze: 'versichern' } },
    { id: 'all-a22-03-haftpflichtversicherung', icon: 'ShieldAlert', de: 'Haftpflichtversicherung', pos: 'noun', article: 'die', plural: 'Haftpflichtversicherungen', ru: 'страхование гражданской ответственности', parts: ['Haftpflicht', 'versicherung'], note: 'Платит, если вы случайно причинили ущерб другим. Очень рекомендуется.', example: { de: 'Eine Haftpflichtversicherung ist sehr wichtig.', ru: 'Страхование ответственности очень важно.', cloze: 'Haftpflichtversicherung' } },
    { id: 'all-a22-03-hausratversicherung', icon: 'Sofa', de: 'Hausratversicherung', pos: 'noun', article: 'die', plural: 'Hausratversicherungen', ru: 'страхование домашнего имущества', parts: ['Hausrat', 'versicherung'], example: { de: 'Die Hausratversicherung zahlt bei einem Einbruch.', ru: 'Страхование имущества платит при краже со взломом.', cloze: 'Hausratversicherung' } },
    { id: 'all-a22-03-autoversicherung', icon: 'Car', de: 'Autoversicherung', pos: 'noun', article: 'die', plural: 'Autoversicherungen', ru: 'автостраховка', parts: ['Auto', 'versicherung'], note: 'Официально: Kfz-Versicherung; обязательна для каждой машины.', example: { de: 'Ohne Autoversicherung darf man nicht fahren.', ru: 'Без автостраховки ездить нельзя.', cloze: 'Autoversicherung' } },
    { id: 'all-a22-03-police', icon: 'FileText', de: 'Police', pos: 'noun', article: 'die', plural: 'Policen', ru: 'страховой полис', example: { de: 'In der Police steht, was versichert ist.', ru: 'В полисе написано, что застраховано.', cloze: 'Police' } },
    { id: 'all-a22-03-versicherungsbeitrag', icon: 'Euro', de: 'Versicherungsbeitrag', pos: 'noun', article: 'der', plural: 'Versicherungsbeiträge', ru: 'страховой взнос', parts: ['Versicherungs', 'beitrag'], example: { de: 'Der Versicherungsbeitrag ist sechzig Euro im Jahr.', ru: 'Страховой взнос — шестьдесят евро в год.', cloze: 'Versicherungsbeitrag' } },
    { id: 'all-a22-03-kaputtmachen', icon: 'Hammer', de: 'kaputtmachen', pos: 'verb', ru: 'сломать, испортить', forms: 'er macht kaputt · hat kaputtgemacht', example: { de: 'Karim hat beim Nachbarn ein Fenster kaputtgemacht.', ru: 'Карим разбил окно у соседа.', cloze: 'kaputtgemacht' } },

    { id: 'all-a22-03-schadensfall', icon: 'TriangleAlert', de: 'Schadensfall', pos: 'noun', article: 'der', plural: 'Schadensfälle', ru: 'страховой случай', parts: ['Schadens', 'fall'], example: { de: 'Im Schadensfall rufen Sie diese Nummer an.', ru: 'При страховом случае звоните по этому номеру.', cloze: 'Schadensfall' } },
    { id: 'all-a22-03-schadensmeldung', icon: 'FileWarning', de: 'Schadensmeldung', pos: 'noun', article: 'die', plural: 'Schadensmeldungen', ru: 'заявление о страховом случае', parts: ['Schadens', 'meldung'], example: { de: 'Die Schadensmeldung kann man online machen.', ru: 'Заявление о страховом случае можно подать онлайн.', cloze: 'Schadensmeldung' } },
    { id: 'all-a22-03-ersetzen', icon: 'Repeat', de: 'ersetzen', pos: 'verb', ru: 'возмещать; заменять', forms: 'er ersetzt · hat ersetzt', example: { de: 'Die Versicherung ersetzt den Schaden.', ru: 'Страховая возмещает ущерб.', cloze: 'ersetzt' } },
    { id: 'all-a22-03-selbstbeteiligung', icon: 'Percent', de: 'Selbstbeteiligung', pos: 'noun', article: 'die', plural: 'Selbstbeteiligungen', ru: 'франшиза (собственное участие)', parts: ['Selbst', 'beteiligung'], example: { de: 'Die Selbstbeteiligung beträgt hundertfünfzig Euro.', ru: 'Франшиза составляет сто пятьдесят евро.', cloze: 'Selbstbeteiligung' } },
    { id: 'all-a22-03-vertragsnummer', icon: 'Hash', de: 'Vertragsnummer', pos: 'noun', article: 'die', plural: 'Vertragsnummern', ru: 'номер договора', parts: ['Vertrags', 'nummer'], example: { de: 'Bitte nennen Sie Ihre Vertragsnummer.', ru: 'Назовите, пожалуйста, номер договора.', cloze: 'Vertragsnummer' } },
    { id: 'all-a22-03-rechtsschutzversicherung', icon: 'Scale', de: 'Rechtsschutzversicherung', pos: 'noun', article: 'die', plural: 'Rechtsschutzversicherungen', ru: 'страхование юридических расходов', parts: ['Rechtsschutz', 'versicherung'], example: { de: 'Die Rechtsschutzversicherung zahlt den Anwalt.', ru: 'Страхование юридических расходов оплачивает адвоката.', cloze: 'Rechtsschutzversicherung' } },
    { id: 'all-a22-03-monatlich', icon: 'CalendarDays', de: 'monatlich', pos: 'adj', ru: 'ежемесячный, ежемесячно', example: { de: 'Ich zahle monatlich zehn Euro.', ru: 'Я плачу десять евро в месяц.', cloze: 'monatlich' } },
    { id: 'all-a22-03-jaehrlich', icon: 'CalendarRange', de: 'jährlich', pos: 'adj', ru: 'ежегодный, ежегодно', note: 'Платить раз в год часто дешевле.', example: { de: 'Jährlich zu zahlen ist oft günstiger.', ru: 'Платить раз в год часто выгоднее.', cloze: 'Jährlich' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Welche Versicherung brauchen wir?',
      de: `Ein Versicherungsvertreter klingelt bei Familie Haddad. Er möchte ihnen viele Versicherungen verkaufen. Amir ist unsicher und fragt Frau Schulz um Rat.

Sie sagt: „Wirklich wichtig ist die Haftpflichtversicherung. Wenn Sie oder die Kinder bei anderen etwas kaputtmachen, zahlt sie. Ein Unfall kann sonst sehr teuer werden. Eine Hausratversicherung ist auch gut. Sie zahlt, wenn bei Ihnen eingebrochen wird oder es brennt.“

„Und die Autoversicherung?“ – „Die brauchen Sie erst, wenn Sie ein Auto haben. Dann ist sie Pflicht.“ Amir vergleicht im Internet und schließt zwei Versicherungen ab. Der Versicherungsbeitrag ist nicht hoch.`,
      ru: `К семье Хаддад приходит страховой агент. Он хочет продать им много страховок. Амир не уверен и спрашивает совета у госпожи Шульц.

Она говорит: «Действительно важно страхование ответственности. Если вы или дети что-то сломаете у других, оно заплатит. Иначе несчастный случай может обойтись очень дорого. Страхование имущества тоже хорошо. Оно платит, если к вам вломятся или будет пожар».

«А автостраховка?» — «Она понадобится, только когда у вас будет машина. Тогда она обязательна». Амир сравнивает в интернете и оформляет две страховки. Взнос невысокий.`,
      gloss: { einbruch: 'кража со взломом', autounfall: 'автоавария', klingelt: 'звенит (звонок)', auto: 'машина', haddad: 'Хаддад (фамилия)', amir: 'Амир (имя)', schulz: 'Шульц (фамилия)', versicherungsvertreter: 'страховой агент', verkaufen: 'продать', unsicher: 'неуверен', rat: 'совет', sonst: 'иначе', eingebrochen: '(eingebrochen wird) вломятся, совершат кражу со взломом', erst: 'только (не раньше)', vergleicht: 'сравнивает', schließt: '(schließt … ab) оформляет, заключает', ab: '(schließt … ab) заключает' },
      questions: [
        { q: 'Welche Versicherung ist wirklich wichtig?', ru: 'Какая страховка действительно важна?', options: ['Die Haftpflichtversicherung', 'Die Autoversicherung', 'Keine'], answer: 'Die Haftpflichtversicherung' },
        { q: 'Wann zahlt die Hausratversicherung?', ru: 'Когда платит страхование имущества?', options: ['Bei einem Einbruch oder Feuer', 'Bei Krankheit', 'Bei einem Autounfall'], answer: 'Bei einem Einbruch oder Feuer' },
        { q: 'Wann ist die Autoversicherung Pflicht?', ru: 'Когда автостраховка обязательна?', options: ['Wenn man ein Auto hat', 'Immer', 'Nie'], answer: 'Wenn man ein Auto hat' },
      ],
      translate: [
        { de: 'Die Haftpflichtversicherung ist sehr wichtig.', ru: 'Страхование ответственности очень важно.', wrongRu: ['Страхование ответственности не нужно.', 'Автостраховка очень важна.'] },
        { de: 'Wir versichern unsere Wohnung.', ru: 'Мы страхуем квартиру.', wrongRu: ['Мы продаём квартиру.', 'Мы страхуем машину.'] },
        { de: 'Der Beitrag ist nicht hoch.', ru: 'Взнос невысокий.', wrongRu: ['Взнос очень высокий.', 'Зарплата невысокая.'] },
      ],
    },
    {
      lesson: 1, title: 'Ein Schadensfall',
      de: `Karim spielt im Hof Fußball. Der Ball fliegt gegen das Fenster von Herrn Krüger. Das Fenster ist kaputt! Karim weint. Amir entschuldigt sich bei Herrn Krüger.

Zum Glück hat die Familie eine Haftpflichtversicherung. Amir macht online eine Schadensmeldung. Er nennt seine Vertragsnummer und lädt ein Foto vom Fenster hoch.

Nach zwei Wochen kommt die Antwort: Die Versicherung ersetzt den Schaden. Herr Krüger bekommt ein neues Fenster. Es gibt keine Selbstbeteiligung. Amir zahlt den Beitrag jetzt jährlich statt monatlich, das ist günstiger.`,
      ru: `Карим играет во дворе в футбол. Мяч летит в окно господина Крюгера. Окно разбито! Карим плачет. Амир извиняется перед господином Крюгером.

К счастью, у семьи есть страхование ответственности. Амир онлайн подаёт заявление о страховом случае. Он указывает номер договора и загружает фото окна.

Через две недели приходит ответ: страховая возмещает ущерб. Господин Крюгер получает новое окно. Франшизы нет. Теперь Амир платит взнос раз в год, а не каждый месяц — так выгоднее.`,
      gloss: { nennen: 'назовите, называть', karims: 'Карима (чей?)', gar: 'вовсе (gar nicht — вообще нет)', karim: 'Карим (имя)', krüger: 'Крюгер (фамилия)', amir: 'Амир (имя)', herrn: 'господина', ball: 'мяч', fliegt: 'летит', gegen: 'в, против', weint: 'плачет', entschuldigt: '(entschuldigt sich) извиняется', glück: '(zum Glück) к счастью', nennt: 'называет, указывает', lädt: '(lädt … hoch) загружает', hoch: '(lädt … hoch) загружает', antwort: 'ответ', statt: 'вместо' },
      questions: [
        { q: 'Was ist kaputt?', ru: 'Что сломано?', options: ['Das Fenster von Herrn Krüger', 'Karims Fahrrad', 'Die Tür'], answer: 'Das Fenster von Herrn Krüger' },
        { q: 'Wie macht Amir die Schadensmeldung?', ru: 'Как Амир подаёт заявление?', options: ['Online', 'Per Post', 'Persönlich'], answer: 'Online' },
        { q: 'Wie zahlt Amir den Beitrag jetzt?', ru: 'Как Амир теперь платит взнос?', options: ['Jährlich', 'Monatlich', 'Gar nicht'], answer: 'Jährlich' },
      ],
      translate: [
        { de: 'Die Versicherung ersetzt den Schaden.', ru: 'Страховая возмещает ущерб.', wrongRu: ['Страховая не платит.', 'Страховая чинит окно сама.'] },
        { de: 'Bitte nennen Sie Ihre Vertragsnummer.', ru: 'Назовите, пожалуйста, номер договора.', wrongRu: ['Назовите, пожалуйста, ваш адрес.', 'Подпишите, пожалуйста, договор.'] },
        { de: 'Jährlich zu zahlen ist günstiger.', ru: 'Платить раз в год выгоднее.', wrongRu: ['Платить каждый месяц выгоднее.', 'Платить раз в год дороже.'] },
      ],
    },
  ],
};
