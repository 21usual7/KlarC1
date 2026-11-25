import type { Module } from '../types.ts';

// A2.2 pflege 10: recognition of a foreign nursing degree — documents, knowledge test (lesson 0); application, interview, contract (lesson 1).

export const module: Module = {
  id: 'pflege-a22-10-anerkennung', sphere: 'pflege', level: 'A2.2',
  title: 'Anerkennung und Bewerbung', subtitle: 'Признание иностранного диплома медсестры: документы, экзамен, резюме, собеседование и трудовой договор.',
  words: [
    { id: 'pfl-a22-10-anerkennung', icon: 'BadgeCheck', de: 'Anerkennung', pos: 'noun', article: 'die', plural: 'Anerkennungen', ru: 'признание (диплома)', example: { de: 'Die Anerkennung dauert oft viele Monate.', ru: 'Признание диплома часто длится много месяцев.', cloze: 'Anerkennung' } },
    { id: 'pfl-a22-10-urkunde', icon: 'ScrollText', de: 'Urkunde', pos: 'noun', article: 'die', plural: 'Urkunden', ru: 'документ, свидетельство, грамота', example: { de: 'Ich brauche meine Urkunde vom Studium.', ru: 'Мне нужен документ об окончании учёбы.', cloze: 'Urkunde' } },
    { id: 'pfl-a22-10-beglaubigt', icon: 'Stamp', de: 'beglaubigt', pos: 'adj', ru: 'заверенный (нотариально)', example: { de: 'Die Kopien müssen beglaubigt sein.', ru: 'Копии должны быть заверены.', cloze: 'beglaubigt' } },
    { id: 'pfl-a22-10-uebersetzung', icon: 'Languages', de: 'Übersetzung', pos: 'noun', article: 'die', plural: 'Übersetzungen', ru: 'перевод', example: { de: 'Ich brauche eine Übersetzung von meinem Diplom.', ru: 'Мне нужен перевод диплома.', cloze: 'Übersetzung' } },
    { id: 'pfl-a22-10-gleichwertigkeit', icon: 'Equal', de: 'Gleichwertigkeit', pos: 'noun', article: 'die', ru: 'равноценность', example: { de: 'Das Amt prüft die Gleichwertigkeit der Ausbildung.', ru: 'Ведомство проверяет равноценность образования.', cloze: 'Gleichwertigkeit' } },
    { id: 'pfl-a22-10-kenntnispruefung', icon: 'GraduationCap', de: 'Kenntnisprüfung', pos: 'noun', article: 'die', plural: 'Kenntnisprüfungen', ru: 'экзамен на проверку знаний', parts: ['Kenntnis', 'prüfung'], example: { de: 'Im Mai mache ich die Kenntnisprüfung.', ru: 'В мае я сдаю экзамен на проверку знаний.', cloze: 'Kenntnisprüfung' } },
    { id: 'pfl-a22-10-anpassungslehrgang', icon: 'BookOpen', de: 'Anpassungslehrgang', pos: 'noun', article: 'der', plural: 'Anpassungslehrgänge', ru: 'адаптационный курс', parts: ['Anpassungs', 'lehrgang'], note: 'Альтернатива экзамену: несколько месяцев практики с обучением.', example: { de: 'Statt der Prüfung kann man einen Anpassungslehrgang machen.', ru: 'Вместо экзамена можно пройти адаптационный курс.', cloze: 'Anpassungslehrgang' } },
    { id: 'pfl-a22-10-fachkraft', icon: 'UserCheck', de: 'Fachkraft', pos: 'noun', article: 'die', plural: 'Fachkräfte', ru: 'специалист, квалифицированный работник', parts: ['Fach', 'kraft'], note: 'die Pflegefachkraft — дипломированная медсестра.', example: { de: 'Nach der Anerkennung arbeite ich als Pflegefachkraft.', ru: 'После признания диплома я работаю дипломированной медсестрой.', cloze: 'fachkraft' } },

    { id: 'pfl-a22-10-bewerbung', icon: 'Send', de: 'Bewerbung', pos: 'noun', article: 'die', plural: 'Bewerbungen', ru: 'заявка на работу, отклик', note: 'sich bewerben um / bei — подавать заявку на / в.', example: { de: 'Ich schreibe eine Bewerbung an das Klinikum.', ru: 'Я пишу заявку в клинику.', cloze: 'Bewerbung' } },
    { id: 'pfl-a22-10-lebenslauf', icon: 'FileUser', de: 'Lebenslauf', pos: 'noun', article: 'der', plural: 'Lebensläufe', ru: 'резюме, автобиография', parts: ['Lebens', 'lauf'], example: { de: 'Im Lebenslauf steht meine Berufserfahrung.', ru: 'В резюме указан мой опыт работы.', cloze: 'Lebenslauf' } },
    { id: 'pfl-a22-10-zeugnis', icon: 'Award', de: 'Zeugnis', pos: 'noun', article: 'das', plural: 'Zeugnisse', ru: 'аттестат, справка, характеристика', note: 'das Arbeitszeugnis — характеристика с места работы.', example: { de: 'Bitte schicken Sie uns Ihre Zeugnisse.', ru: 'Пожалуйста, пришлите нам ваши документы об образовании.', cloze: 'Zeugnisse' } },
    { id: 'pfl-a22-10-berufserfahrung', icon: 'Briefcase', de: 'Berufserfahrung', pos: 'noun', article: 'die', ru: 'опыт работы', parts: ['Berufs', 'erfahrung'], example: { de: 'Ich habe fünf Jahre Berufserfahrung.', ru: 'У меня пять лет опыта работы.', cloze: 'Berufserfahrung' } },
    { id: 'pfl-a22-10-vorstellungsgespraech', icon: 'MessagesSquare', de: 'Vorstellungsgespräch', pos: 'noun', article: 'das', plural: 'Vorstellungsgespräche', ru: 'собеседование (при приёме на работу)', parts: ['Vorstellungs', 'gespräch'], example: { de: 'Morgen habe ich ein Vorstellungsgespräch.', ru: 'Завтра у меня собеседование.', cloze: 'Vorstellungsgespräch' } },
    { id: 'pfl-a22-10-gehalt', icon: 'Banknote', de: 'Gehalt', pos: 'noun', article: 'das', plural: 'Gehälter', ru: 'зарплата, оклад', example: { de: 'Das Gehalt richtet sich nach dem Tarif.', ru: 'Зарплата определяется тарифом.', cloze: 'Gehalt' } },
    { id: 'pfl-a22-10-probezeit', icon: 'Hourglass', de: 'Probezeit', pos: 'noun', article: 'die', plural: 'Probezeiten', ru: 'испытательный срок', parts: ['Probe', 'zeit'], example: { de: 'Die Probezeit dauert sechs Monate.', ru: 'Испытательный срок — шесть месяцев.', cloze: 'Probezeit' } },
    { id: 'pfl-a22-10-unbefristet', icon: 'Infinity', de: 'unbefristet', pos: 'adj', ru: 'бессрочный', note: 'befristet — срочный (на определённый срок).', example: { de: 'Ich bekomme einen unbefristeten Vertrag.', ru: 'Я получаю бессрочный договор.', cloze: 'unbefristeten' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Olenas Weg zur Anerkennung',
      de: `Olena hat in der Ukraine Pflege studiert und dort fünf Jahre gearbeitet. In Deutschland arbeitet sie zuerst als Pflegehelferin. Für die volle Anerkennung als Pflegefachkraft braucht sie viele Dokumente.

Sie schickt ihre Urkunde, ihr Zeugnis und eine Übersetzung an das Amt. Alle Kopien müssen beglaubigt sein. Das Amt prüft die Gleichwertigkeit ihrer Ausbildung. Nach vier Monaten kommt der Brief: Ein paar Themen fehlen.

Olena hat zwei Möglichkeiten: eine Kenntnisprüfung oder einen Anpassungslehrgang. Sie entscheidet sich für die Prüfung. „Mit meinem Sprachzertifikat B2 und der Prüfung bin ich endlich eine anerkannte Fachkraft“, sagt sie.`,
      ru: `Олена училась в Украине на медсестру и пять лет там работала. В Германии она сначала работает помощницей по уходу. Для полного признания диплома дипломированной медсестры ей нужно много документов.

Она отправляет в ведомство диплом, приложение с оценками и перевод. Все копии должны быть заверены. Ведомство проверяет равноценность её образования. Через четыре месяца приходит письмо: нескольких тем не хватает.

У Олены два варианта: экзамен на проверку знаний или адаптационный курс. Она выбирает экзамен. «С сертификатом B2 и экзаменом я наконец стану признанным специалистом», — говорит она.`,
      gloss: { pflegefachkraft: 'дипломированная медсестра', monaten: 'месяцев', polen: 'Польша', farbig: 'цветной', olena: 'Олена (имя)', pflege: 'уход', b: 'Б (буква в названии класса 2B)', monate: 'месяцы, месяца', olenas: 'Олены (чей?)', ukraine: 'Украина', studiert: 'училась', gearbeitet: 'работала', deutschland: 'Германия', pflegehelferin: 'помощница по уходу', volle: 'полное', dokumente: 'документы', schickt: 'отправляет', amt: 'ведомство', kopien: 'копии', ausbildung: 'образование, обучение', brief: 'письмо', paar: '(ein paar) несколько', themen: 'темы', möglichkeiten: 'варианты, возможности', entscheidet: '(entscheidet sich für) выбирает', sprachzertifikat: 'языковой сертификат', b2: 'B2 (уровень языка)', anerkannte: 'признанный', weg: 'путь' },
      questions: [
        { q: 'Wo hat Olena Pflege studiert?', ru: 'Где Олена училась на медсестру?', options: ['In der Ukraine', 'In Deutschland', 'In Polen'], answer: 'In der Ukraine' },
        { q: 'Was müssen die Kopien sein?', ru: 'Какими должны быть копии?', options: ['Beglaubigt', 'Farbig', 'Neu'], answer: 'Beglaubigt' },
        { q: 'Wofür entscheidet sich Olena?', ru: 'Что выбирает Олена?', options: ['Für die Kenntnisprüfung', 'Für den Anpassungslehrgang', 'Für ein neues Studium'], answer: 'Für die Kenntnisprüfung' },
      ],
      translate: [
        { de: 'Die Kopien müssen beglaubigt sein.', ru: 'Копии должны быть заверены.', wrongRu: ['Копии не нужно заверять.', 'Оригиналы должны быть заверены.'] },
        { de: 'Die Anerkennung dauert viele Monate.', ru: 'Признание диплома длится много месяцев.', wrongRu: ['Признание диплома длится одну неделю.', 'Экзамен длится много месяцев.'] },
        { de: 'Ich habe fünf Jahre Berufserfahrung.', ru: 'У меня пять лет опыта работы.', wrongRu: ['Я учился пять лет.', 'У меня нет опыта работы.'] },
      ],
    },
    {
      lesson: 1, title: 'Das Vorstellungsgespräch',
      de: `Olena hat die Prüfung bestanden! Jetzt schreibt sie eine Bewerbung an ein großes Klinikum in Köln. Im Lebenslauf beschreibt sie ihre Berufserfahrung und ihre Sprachkenntnisse.

Eine Woche später hat sie ein Vorstellungsgespräch. Die Pflegedirektorin fragt: „Warum möchten Sie bei uns arbeiten?“ Olena antwortet: „Ich möchte auf einer Intensivstation arbeiten und mich weiterbilden.“

Am Ende sprechen sie über den Vertrag. „Das Gehalt richtet sich nach dem Tarif. Die Probezeit dauert sechs Monate, danach ist der Vertrag unbefristet.“ Zwei Tage später kommt der Anruf: Olena bekommt die Stelle!`,
      ru: `Олена сдала экзамен! Теперь она пишет заявку в большую клинику в Кёльне. В резюме она описывает свой опыт работы и знание языков.

Через неделю у неё собеседование. Директор по сестринскому делу спрашивает: «Почему вы хотите работать у нас?» Олена отвечает: «Я хочу работать в реанимации и повышать квалификацию».

В конце они говорят о договоре. «Зарплата определяется тарифом. Испытательный срок — шесть месяцев, после этого договор бессрочный». Через два дня звонят: Олена получает место!`,
      gloss: { absage: 'отказ', olena: 'Олена (имя)', großes: 'большая', beschreibt: 'описывает', monate: 'месяцы, месяца', ukraine: 'Украина', bestanden: 'сдала (экзамен)', klinikum: 'клиника, больничный комплекс', köln: 'Кёльн', sprachkenntnisse: 'знание языков', pflegedirektorin: 'директор по сестринскому делу', intensivstation: 'отделение интенсивной терапии, реанимация', weiterbilden: '(mich weiterbilden) повышать квалификацию', vertrag: 'договор', richtet: '(richtet sich nach) определяется', tarif: 'тариф(ная сетка)', anruf: 'звонок', stelle: 'место, должность' },
      questions: [
        { q: 'Wo möchte Olena arbeiten?', ru: 'Где Олена хочет работать?', options: ['In einem Klinikum in Köln', 'In einem Pflegeheim', 'In der Ukraine'], answer: 'In einem Klinikum in Köln' },
        { q: 'Wie lange dauert die Probezeit?', ru: 'Сколько длится испытательный срок?', options: ['Sechs Monate', 'Ein Jahr', 'Drei Monate'], answer: 'Sechs Monate' },
        { q: 'Was passiert am Ende?', ru: 'Что происходит в конце?', options: ['Olena bekommt die Stelle.', 'Olena bekommt eine Absage.', 'Olena macht noch eine Prüfung.'], answer: 'Olena bekommt die Stelle.' },
      ],
      translate: [
        { de: 'Morgen habe ich ein Vorstellungsgespräch.', ru: 'Завтра у меня собеседование.', wrongRu: ['Завтра у меня экзамен.', 'Вчера у меня было собеседование.'] },
        { de: 'Die Probezeit dauert sechs Monate.', ru: 'Испытательный срок — шесть месяцев.', wrongRu: ['Испытательный срок — шесть недель.', 'Отпуск длится шесть месяцев.'] },
        { de: 'Ich bekomme einen unbefristeten Vertrag.', ru: 'Я получаю бессрочный договор.', wrongRu: ['Я получаю договор на год.', 'Я не получаю договор.'] },
      ],
    },
  ],
};
