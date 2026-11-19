import type { Module } from '../types.ts';

// A2.2 cyber 10: working in IT security — a night shift in a SOC (lesson 0) and applying for a job (lesson 1).

export const module: Module = {
  id: 'cyber-a22-10-beruf', sphere: 'cyber', level: 'A2.2',
  title: 'Beruf IT-Sicherheit', subtitle: 'Смена в SOC, тревоги и ложные срабатывания, отклик на вакансию и собеседование.',
  words: [
    { id: 'cyb-a22-10-analyst', icon: 'UserSearch', imageQuery: 'security operations center', de: 'Analyst', pos: 'noun', article: 'der', plural: 'Analysten', ru: 'аналитик', note: 'Слабое склонение: den/dem Analysten. Женщина — die Analystin. Например: der SOC-Analyst.', example: { de: 'Der Analyst sitzt vor sechs Bildschirmen.', ru: 'Аналитик сидит перед шестью мониторами.', cloze: 'Analyst' } },
    { id: 'cyb-a22-10-schicht', icon: 'Clock', de: 'Schicht', pos: 'noun', article: 'die', plural: 'Schichten', ru: 'смена (рабочая)', note: 'Второе значение — слой. Die Nachtschicht — ночная смена; im Schichtdienst arbeiten — работать посменно.', collocation: { de: 'Schicht haben', ru: 'быть на смене' }, example: { de: 'Meine Schicht beginnt um sechs Uhr.', ru: 'Моя смена начинается в шесть часов.', cloze: 'Schicht' } },
    { id: 'cyb-a22-10-ueberwachen', icon: 'Eye', de: 'überwachen', pos: 'verb', ru: 'наблюдать, отслеживать, контролировать', forms: 'er überwacht · hat überwacht', note: 'Приставка über- здесь неотделяемая (ударение на -wa-). Существительное: die Überwachung.', collocation: { de: 'das Netzwerk überwachen', ru: 'отслеживать сеть', accept: ['ein Netzwerk überwachen'] }, example: { de: 'Wir überwachen das Netzwerk rund um die Uhr.', ru: 'Мы отслеживаем сеть круглосуточно.', cloze: 'überwachen' } },
    { id: 'cyb-a22-10-alarm', icon: 'BellRing', imageQuery: 'red alarm light', de: 'Alarm', pos: 'noun', article: 'der', plural: 'Alarme', ru: 'тревога, сигнал тревоги', collocation: { de: 'Alarm schlagen', ru: 'бить тревогу' }, example: { de: 'Mitten in der Nacht kam ein Alarm.', ru: 'Посреди ночи пришёл сигнал тревоги.', cloze: 'Alarm' } },
    { id: 'cyb-a22-10-fehlalarm', icon: 'BellOff', de: 'Fehlalarm', pos: 'noun', article: 'der', plural: 'Fehlalarme', ru: 'ложная тревога, ложное срабатывание', parts: ['Fehl', 'alarm'], note: 'fehl- = ошибочный. В IT-безопасности — то же, что false positive.', example: { de: 'Zum Glück war es nur ein Fehlalarm.', ru: 'К счастью, это была лишь ложная тревога.', cloze: 'Fehlalarm' } },
    { id: 'cyb-a22-10-ereignis', icon: 'Activity', de: 'Ereignis', pos: 'noun', article: 'das', plural: 'Ereignisse', ru: 'событие', note: 'В логах и SIEM: das Sicherheitsereignis — событие безопасности.', example: { de: 'Das System speichert jedes Ereignis.', ru: 'Система сохраняет каждое событие.', cloze: 'Ereignis' } },
    { id: 'cyb-a22-10-arbeitgeber', icon: 'Building2', de: 'Arbeitgeber', pos: 'noun', article: 'der', plural: 'Arbeitgeber', ru: 'работодатель', parts: ['Arbeit', 'geber'], example: { de: 'Mein Arbeitgeber bezahlt die Zertifizierung.', ru: 'Мой работодатель оплачивает сертификацию.', cloze: 'Arbeitgeber' } },
    { id: 'cyb-a22-10-eskalieren', icon: 'ArrowUpRight', de: 'eskalieren', pos: 'verb', ru: 'эскалировать, передавать выше (по уровню)', forms: 'er eskaliert · hat eskaliert', note: 'Глагол на -ieren, Partizip без ge-. Второе значение — обостряться (der Streit ist eskaliert).', example: { de: 'Bei einem echten Angriff eskaliert er den Fall sofort.', ru: 'При настоящей атаке он сразу передаёт случай выше.', cloze: 'eskaliert' } },

    { id: 'cyb-a22-10-sich-bewerben', icon: 'FileUser', de: 'sich bewerben', pos: 'verb', ru: 'подавать заявку (на работу), откликаться на вакансию', forms: 'er bewirbt sich · bewarb sich · hat sich beworben', note: 'sich bewerben um + Akk (на должность), bei + Dat (в фирму). Приставка be- неотделяемая.', collocation: { de: 'sich um eine Stelle bewerben', ru: 'претендовать на должность', accept: ['sich um die Stelle bewerben'] }, example: { de: 'Ich bewerbe mich bei einer Bank in Wien.', ru: 'Я подаю заявку в один банк в Вене.', cloze: 'bewerbe' } },
    { id: 'cyb-a22-10-bewerbung', icon: 'Mail', imageQuery: 'job application documents', de: 'Bewerbung', pos: 'noun', article: 'die', plural: 'Bewerbungen', ru: 'заявка на работу, отклик (резюме и письмо)', note: 'Bewerbung um + Akk / als + Nom: die Bewerbung als Analyst.', collocation: { de: 'eine Bewerbung schicken', ru: 'отправить заявку', accept: ['die Bewerbung schicken'] }, example: { de: 'Seine Bewerbung war kurz, aber sehr gut.', ru: 'Его отклик был коротким, но очень хорошим.', cloze: 'Bewerbung' } },
    { id: 'cyb-a22-10-stelle', icon: 'Briefcase', de: 'Stelle', pos: 'noun', article: 'die', plural: 'Stellen', ru: 'должность, рабочее место, вакансия', note: 'Многозначно: место (an dieser Stelle). Die offene Stelle — вакансия.', collocation: { de: 'eine offene Stelle', ru: 'вакансия', accept: ['eine freie Stelle'] }, example: { de: 'Die Bank sucht jemanden für eine neue Stelle.', ru: 'Банк ищет кого-то на новую должность.', cloze: 'Stelle' } },
    { id: 'cyb-a22-10-vorstellungsgespraech', icon: 'Handshake', imageQuery: 'job interview', de: 'Vorstellungsgespräch', pos: 'noun', article: 'das', plural: 'Vorstellungsgespräche', ru: 'собеседование (при приёме на работу)', parts: ['Vorstellungs', 'gespräch'], note: 'Die Vorstellung (представление) + s + das Gespräch. Синоним: das Bewerbungsgespräch.', collocation: { de: 'zu einem Vorstellungsgespräch einladen', ru: 'пригласить на собеседование' }, example: { de: 'Morgen habe ich ein Vorstellungsgespräch.', ru: 'Завтра у меня собеседование.', cloze: 'Vorstellungsgespräch' } },
    { id: 'cyb-a22-10-berufserfahrung', icon: 'Hourglass', de: 'Berufserfahrung', pos: 'noun', article: 'die', ru: 'опыт работы', parts: ['Berufs', 'erfahrung'], note: 'Der Beruf + s + die Erfahrung. Мн. ч. обычно не употребляется.', collocation: { de: 'Berufserfahrung sammeln', ru: 'набираться опыта работы', accept: ['erste Berufserfahrung sammeln'] }, example: { de: 'Für die Stelle braucht man keine Berufserfahrung.', ru: 'Для этой должности опыт работы не нужен.', cloze: 'Berufserfahrung' } },
    { id: 'cyb-a22-10-kenntnisse', icon: 'Brain', de: 'Kenntnisse', pos: 'noun', article: 'die', pluralOnly: true, ru: 'знания, навыки (в какой-то области)', note: 'В этом значении только мн. ч.: Kenntnisse in + Dat (Kenntnisse in Linux). Ед. ч. die Kenntnis — «осведомлённость».', collocation: { de: 'gute Kenntnisse in Linux', ru: 'хорошие знания Linux', accept: ['sehr gute Kenntnisse in Linux'] }, example: { de: 'Sie hat gute Kenntnisse in Netzwerktechnik.', ru: 'У неё хорошие знания в сетевых технологиях.', cloze: 'Kenntnisse' } },
    { id: 'cyb-a22-10-zertifizierung', icon: 'Award', de: 'Zertifizierung', pos: 'noun', article: 'die', plural: 'Zertifizierungen', ru: 'сертификация (профессиональная)', note: 'Например, OSCP или Security+. Сам документ — das Zertifikat.', collocation: { de: 'eine Zertifizierung machen', ru: 'пройти сертификацию', accept: ['eine Zertifizierung ablegen'] }, example: { de: 'Viele Firmen verlangen eine Zertifizierung.', ru: 'Многие фирмы требуют сертификацию.', cloze: 'Zertifizierung' } },
    { id: 'cyb-a22-10-gehalt', icon: 'Wallet', de: 'Gehalt', pos: 'noun', article: 'das', plural: 'Gehälter', ru: 'зарплата, оклад', note: 'Das Gehalt — зарплата служащих, der Lohn — оплата рабочих. Не путать с der Gehalt — содержание (доля чего-то).', collocation: { de: 'ein gutes Gehalt', ru: 'хорошая зарплата', accept: ['ein hohes Gehalt'] }, example: { de: 'Das Gehalt ist für Berufseinsteiger ziemlich gut.', ru: 'Для начинающих зарплата довольно хорошая.', cloze: 'Gehalt' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Nachtschicht im SOC',
      de: `Elias hat an der TU Wien studiert und arbeitet seit einem Jahr als Analyst in einem Security Operations Center, kurz SOC. Das SOC überwacht die Netzwerke von vielen Firmen. Weil Angriffe auch in der Nacht passieren, arbeiten die Analysten in drei Schichten.

Letzte Woche hatte Elias Nachtschicht. Um zwei Uhr kam ein Alarm: Ein Server hatte plötzlich sehr viele Daten nach außen geschickt. Elias musste die Ereignisse genau auswerten. Er las die Logdateien und fand den Grund: Ein neues Backup-Programm hatte die Daten in die Cloud kopiert. Es war also nur ein Fehlalarm.

Eine Stunde später sah er etwas Gefährliches. Jemand versuchte, sich hundertmal mit falschen Passwörtern anzumelden. Dieses Problem konnte Elias nicht allein lösen. Deshalb hat er den Fall sofort an seine Teamleiterin eskaliert.`,
      ru: `Элиас учился в Венском техническом университете и уже год работает аналитиком в центре мониторинга безопасности, сокращённо SOC. SOC отслеживает сети многих фирм. Поскольку атаки случаются и ночью, аналитики работают в три смены.

На прошлой неделе у Элиаса была ночная смена. В два часа пришёл сигнал тревоги: один сервер внезапно отправил наружу очень много данных. Элиасу нужно было тщательно проанализировать события. Он прочитал лог-файлы и нашёл причину: новая программа резервного копирования скопировала данные в облако. Значит, это была лишь ложная тревога.

Через час он увидел кое-что опасное. Кто-то пытался сто раз войти в систему с неправильными паролями. Эту проблему Элиас не мог решить сам. Поэтому он сразу передал случай своей руководительнице команды.`,
      gloss: {
        backup: 'резервная копия, бэкап',
        elias: 'Элиас (имя)', tu: 'TU — технический университет', wien: 'Вена', studiert: 'учился (в вузе)', arbeitet: 'работает', jahr: 'год', security: '(англ.) безопасность',
        operations: '(англ.) операции', center: '(англ.) центр; Security Operations Center — центр мониторинга безопасности', kurz: 'сокращённо', soc: 'SOC — центр мониторинга безопасности',
        netzwerke: 'сети', firmen: 'фирмы', angriffe: 'атаки', nacht: 'ночь', arbeiten: 'работают', letzte: 'прошлой', woche: 'неделя', nachtschicht: 'ночная смена',
        uhr: 'час (о времени)', kam: 'пришёл', server: 'сервер', daten: 'данные', außen: 'наружу (nach außen)', geschickt: 'отправил', musste: 'должен был, пришлось',
        las: 'прочитал', logdateien: 'лог-файлы', fand: 'нашёл', grund: 'причина', neues: 'новая', 'backup-programm': 'программа резервного копирования', cloud: 'облако',
        kopiert: 'скопировала', stunde: 'час', sah: 'увидел', gefährliches: 'опасное', versuchte: 'пытался', hundertmal: 'сто раз', falschen: 'неправильными',
        passwörtern: 'паролями', anzumelden: 'войти в систему (sich anmelden)', konnte: 'мог', lösen: 'решить', fall: 'случай', teamleiterin: 'руководительница команды',
        klein: 'маленький', ausland: 'заграница', passwort: 'пароль', anmeldungen: 'попытки входа', zweiten: 'второй', gelöst: 'решил', gelöscht: 'удалил', falsches: 'неправильный',
        angreifer: 'злоумышленник', vieler: 'многих', noch: 'ещё',
      },
      questions: [
        { q: 'Warum arbeiten die Analysten in Schichten?', ru: 'Почему аналитики работают посменно?', options: ['Weil Angriffe auch in der Nacht passieren.', 'Weil das SOC sehr klein ist.', 'Weil Elias noch studiert.'], answer: 'Weil Angriffe auch in der Nacht passieren.' },
        { q: 'Was war der Grund für den ersten Alarm?', ru: 'Что было причиной первой тревоги?', options: ['Ein neues Backup-Programm', 'Ein Angreifer aus dem Ausland', 'Ein falsches Passwort'], answer: 'Ein neues Backup-Programm' },
        { q: 'Was hat Elias eine Stunde später gesehen?', ru: 'Что Элиас увидел через час?', options: ['Viele Anmeldungen mit falschen Passwörtern', 'Einen zweiten Fehlalarm', 'Ein neues Backup in der Cloud'], answer: 'Viele Anmeldungen mit falschen Passwörtern' },
        { q: 'Was hat Elias mit dem zweiten Fall gemacht?', ru: 'Что Элиас сделал со вторым случаем?', options: ['Er hat ihn an seine Teamleiterin eskaliert.', 'Er hat ihn allein gelöst.', 'Er hat ihn als Fehlalarm gelöscht.'], answer: 'Er hat ihn an seine Teamleiterin eskaliert.' },
      ],
      translate: [
        { de: 'Das SOC überwacht die Netzwerke vieler Firmen.', ru: 'SOC отслеживает сети многих фирм.', wrongRu: ['SOC защищает сети многих фирм.', 'SOC отслеживал сети многих фирм.', 'SOC не отслеживает сети многих фирм.'] },
        { de: 'Es war nur ein Fehlalarm.', ru: 'Это была лишь ложная тревога.', wrongRu: ['Это была настоящая тревога.', 'Это была не ложная тревога.'] },
        { de: 'Er hat den Fall sofort eskaliert.', ru: 'Он сразу передал случай выше.', wrongRu: ['Он сразу закрыл случай.', 'Он позже передал случай выше.', 'Она сразу передала случай выше.'] },
      ],
    },
    {
      lesson: 1, title: 'Der Weg in die IT-Sicherheit',
      de: `Elias erzählt gern, wie er seine Stelle bekommen hat. Schon im Studium spielte er bei CTF-Wettbewerben mit. Danach machte er ein Praktikum in einer IT-Abteilung. So hatte er ein bisschen Berufserfahrung.

Im letzten Semester hat er sich bei fünf Firmen beworben. In seiner Bewerbung beschrieb er seine Kenntnisse in Linux und Netzwerken. Zwei Firmen haben ihn zu einem Vorstellungsgespräch eingeladen.

Im Gespräch wollte die Chefin vor allem wissen, wie er Probleme löst. Sie fragte auch, ob er eine Zertifizierung hat. Elias hatte noch keine, aber jetzt bezahlt die Firma sie für ihn.

Über das Gehalt war Elias am Anfang überrascht, denn es war höher, als er gedacht hatte. Sein Tipp für Studierende: „Lernt nicht nur für Prüfungen. Zeigt in der Bewerbung, was ihr in echten Projekten gemacht habt.“`,
      ru: `Элиас охотно рассказывает, как он получил свою должность. Ещё во время учёбы он участвовал в соревнованиях CTF. Потом он прошёл практику в IT-отделе. Так у него появилось немного опыта работы.

В последнем семестре он подал заявки в пять фирм. В своём отклике он описал свои знания Linux и сетей. Две фирмы пригласили его на собеседование.

На собеседовании начальница прежде всего хотела знать, как он решает проблемы. Она также спросила, есть ли у него сертификация. У Элиаса её ещё не было, но теперь фирма оплачивает её для него.

Зарплата поначалу удивила Элиаса, потому что она была выше, чем он думал. Его совет студентам: «Учитесь не только для экзаменов. Покажите в отклике, что вы сделали в настоящих проектах».`,
      gloss: {
        elias: 'Элиас (имя)', erzählt: 'рассказывает', studium: 'учёба (в вузе)', spielte: 'играл (mitspielen — участвовать)', mit: 'с; (mitspielen) участвовать', 'ctf-wettbewerben': 'соревнованиях CTF',
        machte: 'делал, прошёл', praktikum: 'практика, стажировка', 'it-abteilung': 'IT-отдел', bisschen: 'немного (ein bisschen)', letzten: 'последнем', semester: 'семестр',
        firmen: 'фирмы', beschrieb: 'описал', linux: 'Linux', netzwerken: 'сетях, сетей', eingeladen: 'пригласили', gespräch: 'разговор; собеседование', wollte: 'хотела',
        chefin: 'начальница', allem: 'всё (vor allem — прежде всего)', probleme: 'проблемы', löst: 'решает', fragte: 'спросила', bezahlt: 'оплачивает', firma: 'фирма',
        anfang: 'начало', überrascht: 'удивлён', höher: 'выше', gedacht: 'думал', tipp: 'совет', studierende: 'студенты', lernt: 'учитесь', prüfungen: 'экзамены',
        zeigt: 'покажите', echten: 'настоящих', projekten: 'проектах', habt: '(вы) имеете; вспом. глагол', gesammelt: 'собрал, накопил', nebenjob: 'подработка',
        möchte: 'хочет', studiert: 'учился', wien: 'Вена', tu: 'TU — технический университет', zwei: 'два, две', fünf: 'пять', keine: 'ни одной',
        braucht: 'нужны', gute: 'хорошие', morgen: 'завтра', soc: 'SOC — центр мониторинга безопасности', ihn: 'его',
      },
      questions: [
        { q: 'Wie hat Elias Berufserfahrung gesammelt?', ru: 'Как Элиас получил опыт работы?', options: ['Mit einem Praktikum', 'Mit einer Zertifizierung', 'Mit einem Nebenjob im SOC'], answer: 'Mit einem Praktikum' },
        { q: 'Wie viele Firmen haben ihn zu einem Vorstellungsgespräch eingeladen?', ru: 'Сколько фирм пригласили его на собеседование?', options: ['Zwei', 'Fünf', 'Keine'], answer: 'Zwei' },
        { q: 'Was wollte die Chefin vor allem wissen?', ru: 'Что начальница прежде всего хотела знать?', options: ['Wie er Probleme löst', 'Wie viel Gehalt er möchte', 'Wo er studiert hat'], answer: 'Wie er Probleme löst' },
        { q: 'Wer bezahlt die Zertifizierung?', ru: 'Кто оплачивает сертификацию?', options: ['Die Firma', 'Elias selbst', 'Die TU Wien'], answer: 'Die Firma' },
      ],
      translate: [
        { de: 'Er hat sich bei fünf Firmen beworben.', ru: 'Он подал заявки в пять фирм.', wrongRu: ['Он подаст заявки в пять фирм.', 'Он подал заявки в две фирмы.', 'Она подала заявки в пять фирм.'] },
        { de: 'Für die Stelle braucht man gute Kenntnisse in Linux.', ru: 'Для этой должности нужны хорошие знания Linux.', wrongRu: ['Для этой должности нужен опыт работы с Linux.', 'Для этой должности не нужны знания Linux.'] },
        { de: 'Morgen habe ich ein Vorstellungsgespräch.', ru: 'Завтра у меня собеседование.', wrongRu: ['Вчера у меня было собеседование.', 'Завтра у меня экзамен.', 'Завтра у него собеседование.'] },
      ],
    },
  ],
};
