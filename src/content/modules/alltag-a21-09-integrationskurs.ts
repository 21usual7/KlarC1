import type { Module } from '../types.ts';

// A2.1 alltag 09: the integration course — placement test, exam, certificate (lesson 0); orientation course: democracy, rights, duties (lesson 1).

export const module: Module = {
  id: 'alltag-a21-09-integrationskurs', sphere: 'alltag', level: 'A2.1',
  title: 'Der Integrationskurs', subtitle: 'Интеграционный курс: тест на уровень, экзамен, сертификат; ориентационный курс — демократия, права и обязанности.',
  words: [
    { id: 'all-a21-09-integrationskurs', icon: 'GraduationCap', de: 'Integrationskurs', pos: 'noun', article: 'der', plural: 'Integrationskurse', ru: 'интеграционный курс', parts: ['Integrations', 'kurs'], note: 'Язык до B1 + ориентационный курс. Часто бесплатно или со скидкой.', example: { de: 'Der Integrationskurs dauert etwa ein Jahr.', ru: 'Интеграционный курс длится около года.', cloze: 'Integrationskurs' } },
    { id: 'all-a21-09-berechtigungsschein', icon: 'FileCheck', de: 'Berechtigungsschein', pos: 'noun', article: 'der', plural: 'Berechtigungsscheine', ru: 'допуск (право на участие)', parts: ['Berechtigungs', 'schein'], example: { de: 'Mit dem Berechtigungsschein ist der Kurs günstiger.', ru: 'С допуском курс дешевле.', cloze: 'Berechtigungsschein' } },
    { id: 'all-a21-09-einstufungstest', icon: 'ListChecks', de: 'Einstufungstest', pos: 'noun', article: 'der', plural: 'Einstufungstests', ru: 'тест на определение уровня', parts: ['Einstufungs', 'test'], example: { de: 'Vor dem Kurs macht man einen Einstufungstest.', ru: 'Перед курсом проходят тест на уровень.', cloze: 'Einstufungstest' } },
    { id: 'all-a21-09-pruefung', icon: 'ClipboardCheck', de: 'Prüfung', pos: 'noun', article: 'die', plural: 'Prüfungen', ru: 'экзамен', note: 'Экзамен в конце — DTZ (Deutsch-Test für Zuwanderer).', example: { de: 'Am Ende gibt es eine Prüfung.', ru: 'В конце будет экзамен.', cloze: 'Prüfung' } },
    { id: 'all-a21-09-bestehen', icon: 'CircleCheck', de: 'bestehen', pos: 'verb', ru: 'сдать (экзамен); состоять', forms: 'er besteht · hat bestanden', note: 'nicht bestehen / durchfallen — не сдать.', example: { de: 'Ich habe die Prüfung bestanden!', ru: 'Я сдал экзамен!', cloze: 'bestanden' } },
    { id: 'all-a21-09-zertifikat', icon: 'Award', de: 'Zertifikat', pos: 'noun', article: 'das', plural: 'Zertifikate', ru: 'сертификат', example: { de: 'Das Zertifikat brauche ich für die Arbeit.', ru: 'Сертификат нужен мне для работы.', cloze: 'Zertifikat' } },
    { id: 'all-a21-09-teilnahme', icon: 'Users', de: 'Teilnahme', pos: 'noun', article: 'die', ru: 'участие', note: 'teilnehmen an + Dat — участвовать в.', example: { de: 'Die Teilnahme ist für mich Pflicht.', ru: 'Участие для меня обязательно.', cloze: 'Teilnahme' } },
    { id: 'all-a21-09-orientierungskurs', icon: 'Compass', de: 'Orientierungskurs', pos: 'noun', article: 'der', plural: 'Orientierungskurse', ru: 'ориентационный курс (об обществе)', parts: ['Orientierungs', 'kurs'], example: { de: 'Im Orientierungskurs lernen wir über Politik und Geschichte.', ru: 'На ориентационном курсе мы изучаем политику и историю.', cloze: 'Orientierungskurs' } },

    { id: 'all-a21-09-demokratie', icon: 'Vote', de: 'Demokratie', pos: 'noun', article: 'die', plural: 'Demokratien', ru: 'демократия', example: { de: 'Deutschland ist eine Demokratie.', ru: 'Германия — демократия.', cloze: 'Demokratie' } },
    { id: 'all-a21-09-grundgesetz', icon: 'BookOpen', de: 'Grundgesetz', pos: 'noun', article: 'das', ru: 'Основной закон (конституция ФРГ)', parts: ['Grund', 'gesetz'], example: { de: 'Das Grundgesetz schützt die Würde des Menschen.', ru: 'Основной закон защищает достоинство человека.', cloze: 'Grundgesetz' } },
    { id: 'all-a21-09-wahl', icon: 'Vote', de: 'Wahl', pos: 'noun', article: 'die', plural: 'Wahlen', ru: 'выборы; выбор', example: { de: 'Alle vier Jahre gibt es eine Wahl.', ru: 'Каждые четыре года проходят выборы.', cloze: 'Wahl' } },
    { id: 'all-a21-09-gleichberechtigung', icon: 'Equal', de: 'Gleichberechtigung', pos: 'noun', article: 'die', ru: 'равноправие', parts: ['Gleich', 'berechtigung'], example: { de: 'Männer und Frauen haben Gleichberechtigung.', ru: 'Мужчины и женщины равноправны.', cloze: 'Gleichberechtigung' } },
    { id: 'all-a21-09-religionsfreiheit', icon: 'Church', de: 'Religionsfreiheit', pos: 'noun', article: 'die', ru: 'свобода вероисповедания', parts: ['Religions', 'freiheit'], example: { de: 'In Deutschland gibt es Religionsfreiheit.', ru: 'В Германии есть свобода вероисповедания.', cloze: 'Religionsfreiheit' } },
    { id: 'all-a21-09-meinungsfreiheit', icon: 'MessageCircle', de: 'Meinungsfreiheit', pos: 'noun', article: 'die', ru: 'свобода слова', parts: ['Meinungs', 'freiheit'], example: { de: 'Meinungsfreiheit ist ein Grundrecht.', ru: 'Свобода слова — основное право.', cloze: 'Meinungsfreiheit' } },
    { id: 'all-a21-09-einbuergerung', icon: 'BadgeCheck', de: 'Einbürgerung', pos: 'noun', article: 'die', plural: 'Einbürgerungen', ru: 'получение гражданства, натурализация', example: { de: 'Für die Einbürgerung braucht man den Einbürgerungstest.', ru: 'Для получения гражданства нужен тест на натурализацию.', cloze: 'Einbürgerung' } },
    { id: 'all-a21-09-gesetz', icon: 'Gavel', de: 'Gesetz', pos: 'noun', article: 'das', plural: 'Gesetze', ru: 'закон', example: { de: 'Alle müssen sich an die Gesetze halten.', ru: 'Все должны соблюдать законы.', cloze: 'Gesetze' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Der Weg zum Zertifikat',
      de: `Kurz nach ihrer Ankunft bekamen Amir und Leyla einen Berechtigungsschein für den Integrationskurs. Die Teilnahme war für sie Pflicht. Vor dem Kurs machten sie einen Einstufungstest. Leyla kam in einen Kurs auf Niveau A1, Amir gleich auf A2.

Der Integrationskurs dauert etwa ein Jahr. Am Ende gibt es eine Prüfung, den Deutsch-Test für Zuwanderer. Leyla hatte große Angst. Sie lernte jeden Abend, wenn die Kinder schliefen.

Im Juni kam der Brief: Beide haben die Prüfung bestanden! Amir hat das Zertifikat B1, Leyla A2. „Das Zertifikat brauche ich für die Arbeit“, sagt Amir stolz.`,
      ru: `Вскоре после приезда Амир и Лейла получили допуск на интеграционный курс. Участие для них было обязательным. Перед курсом они прошли тест на уровень. Лейла попала в группу A1, Амир — сразу в A2.

Интеграционный курс длится около года. В конце — экзамен, немецкий тест для иммигрантов. Лейла очень боялась. Она занималась каждый вечер, когда дети спали.

В июне пришло письмо: оба сдали экзамен! У Амира сертификат B1, у Лейлы — A2. «Сертификат нужен мне для работы», — гордо говорит Амир.`,
      gloss: { a: 'А (название тарифа)', b: 'Б (буква в названии класса 2B)', arbeit: 'работа', begann: 'начала', amir: 'Амир (имя)', leyla: 'Лейла (имя)', kurz: 'вскоре', ankunft: 'приезд', bekamen: 'получили', war: 'было', machten: 'сделали, прошли', kam: 'попала; пришло', niveau: 'уровень', a1: 'A1 (уровень)', a2: 'A2 (уровень)', b1: 'B1 (уровень)', 'deutsch-test': 'Немецкий тест', zuwanderer: 'иммигранты', hatte: 'имела, было', lernte: 'занималась, учила', schliefen: 'спали', juni: 'июнь', beide: 'оба', stolz: 'гордо' },
      questions: [
        { q: 'Auf welchem Niveau begann Leyla?', ru: 'С какого уровня начала Лейла?', options: ['A1', 'A2', 'B1'], answer: 'A1' },
        { q: 'Wann lernte Leyla?', ru: 'Когда занималась Лейла?', options: ['Jeden Abend', 'Am Morgen', 'Am Wochenende'], answer: 'Jeden Abend' },
        { q: 'Welches Zertifikat hat Amir?', ru: 'Какой сертификат у Амира?', options: ['B1', 'A2', 'A1'], answer: 'B1' },
      ],
      translate: [
        { de: 'Ich habe die Prüfung bestanden.', ru: 'Я сдал экзамен.', wrongRu: ['Я не сдал экзамен.', 'Я сдаю экзамен завтра.'] },
        { de: 'Die Teilnahme ist Pflicht.', ru: 'Участие обязательно.', wrongRu: ['Участие добровольное.', 'Участие бесплатное.'] },
        { de: 'Am Ende gibt es eine Prüfung.', ru: 'В конце будет экзамен.', wrongRu: ['В начале будет экзамен.', 'Экзамена не будет.'] },
      ],
    },
    {
      lesson: 1, title: 'Der Orientierungskurs',
      de: `Zum Integrationskurs gehört auch ein Orientierungskurs. Dort lernt man über Politik, Geschichte und Gesellschaft in Deutschland.

Die Lehrerin erklärt: „Deutschland ist eine Demokratie. Das Grundgesetz ist die wichtigste Regel. Alle Menschen sind vor dem Gesetz gleich. Männer und Frauen haben Gleichberechtigung. Es gibt Religionsfreiheit und Meinungsfreiheit.“

Amir fragt: „Darf ich wählen?“ – „Bei der Bundestagswahl nur mit deutscher Staatsangehörigkeit. Dafür brauchen Sie die Einbürgerung.“ Amir denkt nach. Vielleicht wird er in einigen Jahren Deutscher.`,
      ru: `К интеграционному курсу относится и ориентационный курс. Там изучают политику, историю и общество Германии.

Учительница объясняет: «Германия — демократия. Основной закон — самое главное правило. Все люди равны перед законом. Мужчины и женщины равноправны. Есть свобода вероисповедания и свобода слова».

Амир спрашивает: «Могу ли я голосовать?» — «На выборах в бундестаг — только с немецким гражданством. Для этого вам нужна натурализация». Амир задумывается. Может быть, через несколько лет он станет немцем.`,
      gloss: { grammatik: 'грамматика', deutsche: 'немецкий, немецкое', deutschland: 'Германия', menschen: 'люди', jahren: 'лет (in zwei Jahren — через два года)', mathe: 'математика', b: 'Б (буква в названии класса 2B)', amir: 'Амир (имя)', gehört: '(gehört zu) относится к', politik: 'политика', geschichte: 'история', gesellschaft: 'общество', lehrerin: 'учительница', wichtigste: 'самое главное', regel: 'правило', gleich: 'равны', wählen: 'голосовать, выбирать', bundestagswahl: 'выборы в бундестаг', deutscher: 'немецким; немец', staatsangehörigkeit: 'гражданство', dafür: 'для этого', denkt: '(denkt nach) задумывается', nach: '(denkt nach) задумывается', einigen: 'нескольких' },
      questions: [
        { q: 'Was lernt man im Orientierungskurs?', ru: 'Что изучают на ориентационном курсе?', options: ['Politik, Geschichte und Gesellschaft', 'Nur Grammatik', 'Mathe'], answer: 'Politik, Geschichte und Gesellschaft' },
        { q: 'Was ist die wichtigste Regel in Deutschland?', ru: 'Какое правило в Германии самое главное?', options: ['Das Grundgesetz', 'Die Hausordnung', 'Der Mietvertrag'], answer: 'Das Grundgesetz' },
        { q: 'Was braucht Amir, um bei der Bundestagswahl zu wählen?', ru: 'Что нужно Амиру, чтобы голосовать на выборах в бундестаг?', options: ['Die deutsche Staatsangehörigkeit', 'Ein Zertifikat B1', 'Eine Wohnung'], answer: 'Die deutsche Staatsangehörigkeit' },
      ],
      translate: [
        { de: 'Deutschland ist eine Demokratie.', ru: 'Германия — демократия.', wrongRu: ['Германия — монархия.', 'Германия — большая страна.'] },
        { de: 'Alle sind vor dem Gesetz gleich.', ru: 'Все равны перед законом.', wrongRu: ['Не все равны перед законом.', 'Все должны знать закон.'] },
        { de: 'Es gibt Religionsfreiheit.', ru: 'Есть свобода вероисповедания.', wrongRu: ['Есть свобода слова.', 'Религия запрещена.'] },
      ],
    },
  ],
};
