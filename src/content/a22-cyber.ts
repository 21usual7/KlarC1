import type { Module } from './types.ts';

// A2.2 cyber: network incidents (lesson 0) and access rights / policies (lesson 1).

export const cyberA22: Module = {
  id: 'cyber-a22-vorfaelle', sphere: 'cyber', level: 'A2.2',
  title: 'Netzwerke und Vorfälle', subtitle: 'Инцидент, лог-файл, права доступа: как IT-отдел расследует атаки и пишет правила.',
  words: [
    { id: 'cyb-a22-vorfall', icon: 'Siren', de: 'Vorfall', pos: 'noun', article: 'der', plural: 'Vorfälle', ru: 'инцидент, происшествие', note: 'Der Sicherheitsvorfall — инцидент безопасности.', collocation: { de: 'einen Vorfall untersuchen', ru: 'расследовать инцидент', accept: ['den Vorfall untersuchen'] }, example: { de: 'Gestern gab es einen Vorfall im Rechenzentrum.', ru: 'Вчера в дата-центре произошёл инцидент.', cloze: 'Vorfall' } },
    { id: 'cyb-a22-logdatei', icon: 'FileClock', de: 'Logdatei', pos: 'noun', article: 'die', plural: 'Logdateien', ru: 'лог-файл, файл журнала', parts: ['Log', 'datei'], note: 'Синонимы: das Log, das Protokoll.', example: { de: 'Jede Anmeldung steht in der Logdatei.', ru: 'Каждый вход записан в лог-файле.', cloze: 'Logdatei' } },
    { id: 'cyb-a22-untersuchen', icon: 'Search', imageQuery: 'magnifying glass', de: 'untersuchen', pos: 'verb', ru: 'расследовать, исследовать', forms: 'er untersucht · hat untersucht', note: 'Приставка unter- здесь неотделяемая: er untersucht, hat untersucht.', example: { de: 'Das Team untersucht den Angriff.', ru: 'Команда расследует атаку.', cloze: 'untersucht' } },
    { id: 'cyb-a22-verdaechtig', icon: 'ScanEye', de: 'verdächtig', pos: 'adj', ru: 'подозрительный', collocation: { de: 'eine verdächtige Verbindung', ru: 'подозрительное соединение', accept: ['die verdächtige Verbindung'] }, example: { de: 'Die Firewall meldet eine verdächtige Verbindung.', ru: 'Файрвол сообщает о подозрительном соединении.', cloze: 'verdächtige' } },
    { id: 'cyb-a22-datenverkehr', icon: 'ArrowLeftRight', de: 'Datenverkehr', pos: 'noun', article: 'der', ru: 'сетевой трафик', parts: ['Daten', 'verkehr'], note: 'Der Verkehr — движение, трафик. Множественного числа нет.', example: { de: 'In der Nacht war der Datenverkehr ungewöhnlich hoch.', ru: 'Ночью трафик был необычно высоким.', cloze: 'Datenverkehr' } },
    { id: 'cyb-a22-port', icon: 'Plug', imageQuery: 'ethernet ports switch', de: 'Port', pos: 'noun', article: 'der', plural: 'Ports', ru: 'порт (сетевой)', collocation: { de: 'einen Port schließen', ru: 'закрыть порт', accept: ['den Port schließen'] }, example: { de: 'Dieser Port ist offen und unsicher.', ru: 'Этот порт открыт и небезопасен.', cloze: 'Port' } },
    { id: 'cyb-a22-blockieren', icon: 'Ban', de: 'blockieren', pos: 'verb', ru: 'блокировать', forms: 'er blockiert · hat blockiert', example: { de: 'Wir haben die Adresse sofort blockiert.', ru: 'Мы сразу заблокировали адрес.', cloze: 'blockiert' } },
    { id: 'cyb-a22-ipadresse', icon: 'MapPin', de: 'IP-Adresse', pos: 'noun', article: 'die', plural: 'IP-Adressen', ru: 'IP-адрес', example: { de: 'Woher kommt diese IP-Adresse?', ru: 'Откуда этот IP-адрес?', cloze: 'IP-Adresse' } },

    { id: 'cyb-a22-berechtigung', icon: 'BadgeCheck', de: 'Berechtigung', pos: 'noun', article: 'die', plural: 'Berechtigungen', ru: 'право (доступа), разрешение', note: 'Часто во мн. ч.: die Berechtigungen. Berechtigung für + Akk.', collocation: { de: 'Berechtigungen vergeben', ru: 'выдавать права доступа', accept: ['die Berechtigungen vergeben'] }, example: { de: 'Für diesen Ordner fehlt dir die Berechtigung.', ru: 'Для этой папки у тебя нет прав.', cloze: 'Berechtigung' } },
    { id: 'cyb-a22-vergeben', icon: 'UserCheck', de: 'vergeben', pos: 'verb', ru: 'выдавать, назначать (права, пароли)', forms: 'er vergibt · vergab · hat vergeben', note: 'vergeben an + Akk: выдавать кому-то. Приставка ver- неотделяемая. Второе значение — «прощать».', collocation: { de: 'Rechte vergeben', ru: 'выдавать права', accept: ['die Rechte vergeben'] }, example: { de: 'Der Administrator vergibt die Rechte.', ru: 'Администратор выдаёт права.', cloze: 'vergibt' } },
    { id: 'cyb-a22-administrator', icon: 'UserCog', imageQuery: 'system administrator server room', de: 'Administrator', pos: 'noun', article: 'der', plural: 'Administratoren', ru: 'администратор', note: 'Разговорно: der Admin. Женский род: die Administratorin.', example: { de: 'Nur der Administrator darf Programme installieren.', ru: 'Только администратор может устанавливать программы.', cloze: 'Administrator' } },
    { id: 'cyb-a22-sicherheitsrichtlinie', icon: 'BookLock', de: 'Sicherheitsrichtlinie', pos: 'noun', article: 'die', plural: 'Sicherheitsrichtlinien', ru: 'политика безопасности', parts: ['Sicherheits', 'richtlinie'], note: 'Sicherheit + s + Richtlinie (правило, директива).', example: { de: 'Jeder Mitarbeiter muss die Sicherheitsrichtlinie lesen.', ru: 'Каждый сотрудник должен прочитать политику безопасности.', cloze: 'Sicherheitsrichtlinie' } },
    { id: 'cyb-a22-einhalten', icon: 'ListChecks', de: 'einhalten', pos: 'verb', ru: 'соблюдать', forms: 'er hält ein · hielt ein · hat eingehalten', note: 'Отделяемая приставка; + Akk: Regeln einhalten.', collocation: { de: 'die Regeln einhalten', ru: 'соблюдать правила', accept: ['Regeln einhalten'] }, example: { de: 'Nicht alle halten die Regeln ein.', ru: 'Не все соблюдают правила.', cloze: 'halten' } },
    { id: 'cyb-a22-verstoss', icon: 'OctagonAlert', de: 'Verstoß', pos: 'noun', article: 'der', plural: 'Verstöße', ru: 'нарушение', note: 'Verstoß gegen + Akk: нарушение чего-то.', example: { de: 'Das ist ein Verstoß gegen die Sicherheitsrichtlinie.', ru: 'Это нарушение политики безопасности.', cloze: 'Verstoß' } },
    { id: 'cyb-a22-verhindern', icon: 'Hand', de: 'verhindern', pos: 'verb', ru: 'предотвращать', forms: 'er verhindert · hat verhindert', example: { de: 'Ein starkes Passwort verhindert viele Angriffe.', ru: 'Надёжный пароль предотвращает многие атаки.', cloze: 'verhindert' } },
    { id: 'cyb-a22-risiko', icon: 'TriangleAlert', de: 'Risiko', pos: 'noun', article: 'das', plural: 'Risiken', ru: 'риск', collocation: { de: 'ein hohes Risiko', ru: 'высокий риск', accept: ['ein großes Risiko'] }, example: { de: 'Alte Software ist ein großes Risiko.', ru: 'Старое ПО — большой риск.', cloze: 'Risiko' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Vorfall in der Nacht',
      de: `Jonas studiert Informatik an der TU Wien und macht ein Praktikum in der IT-Abteilung einer Firma. Am Montag hat ihm seine Chefin Petra eine Logdatei gezeigt. In der Nacht war der Datenverkehr sehr hoch, aber niemand war im Büro.

Petra hat gesagt: „Das ist verdächtig. Wir müssen den Vorfall untersuchen.“ Zusammen haben sie die Logdatei gelesen. Sie haben gesehen, dass eine fremde IP-Adresse viele Ports getestet hat. Ein Port war offen, weil ein Kollege ihn nicht geschlossen hat.

Jonas wollte wissen, ob der Angreifer Daten gestohlen hat. Zum Glück hat die Firewall die Verbindung gestoppt. Petra hat die IP-Adresse sofort blockiert und den Port geschlossen. Dann hat sie den Vorfall gemeldet.`,
      ru: `Йонас изучает информатику в Венском техническом университете и проходит практику в IT-отделе одной фирмы. В понедельник его начальница Петра показала ему лог-файл. Ночью трафик был очень высоким, но в офисе никого не было.

Петра сказала: «Это подозрительно. Мы должны расследовать инцидент». Вместе они прочитали лог-файл. Они увидели, что чужой IP-адрес проверил много портов. Один порт был открыт, потому что коллега его не закрыл.

Йонас хотел знать, украл ли злоумышленник данные. К счастью, файрвол остановил соединение. Петра сразу заблокировала IP-адрес и закрыла порт. Потом она сообщила об инциденте.`,
      gloss: {
        jonas: 'Йонас (имя)', petra: 'Петра (имя)', informatik: 'информатика', tu: 'TU — технический университет', wien: 'Вена',
        praktikum: 'практика, стажировка', 'it-abteilung': 'IT-отдел', firma: 'фирма', chefin: 'начальница', gezeigt: 'показал(а)',
        nacht: 'ночь', hoch: 'высокий', niemand: 'никто', büro: 'офис', gelesen: 'прочитали', fremde: 'чужой', offen: 'открыт',
        kollege: 'коллега', geschlossen: 'закрыл(а)', wollte: 'хотел', glück: 'счастье; zum Glück — к счастью', zum: 'к (zum Glück — к счастью)', gestoppt: 'остановил(а)',
        einem: 'одном', café: 'кафе', niedrig: 'низкий', kam: 'пришёл, исходил', geöffnet: 'открыл(а)', gelöscht: 'удалил(а)',
      },
      questions: [
        { q: 'Wo macht Jonas ein Praktikum?', ru: 'Где Йонас проходит практику?', options: ['In der IT-Abteilung einer Firma', 'An der TU Wien', 'In einem Café'], answer: 'In der IT-Abteilung einer Firma' },
        { q: 'Warum war der Datenverkehr verdächtig?', ru: 'Почему трафик был подозрительным?', options: ['Er war in der Nacht sehr hoch.', 'Er war am Montag sehr niedrig.', 'Er kam aus dem Büro von Petra.'], answer: 'Er war in der Nacht sehr hoch.' },
        { q: 'Warum war ein Port offen?', ru: 'Почему один порт был открыт?', options: ['Ein Kollege hat ihn nicht geschlossen.', 'Der Angreifer hat ihn geöffnet.', 'Petra hat ihn getestet.'], answer: 'Ein Kollege hat ihn nicht geschlossen.' },
        { q: 'Was hat Petra am Ende gemacht?', ru: 'Что Петра сделала в конце?', options: ['Sie hat den Vorfall gemeldet.', 'Sie hat die Logdatei gelöscht.', 'Sie hat den Port geöffnet.'], answer: 'Sie hat den Vorfall gemeldet.' },
      ],
      translate: [
        { de: 'Wir müssen den Vorfall untersuchen.', ru: 'Мы должны расследовать инцидент.', wrongRu: ['Мы должны сообщить об инциденте.', 'Мы не должны расследовать инцидент.', 'Мы расследовали инцидент.'] },
        { de: 'Die IP-Adresse ist verdächtig.', ru: 'IP-адрес подозрительный.', wrongRu: ['IP-адрес заблокирован.', 'Порт подозрительный.'] },
        { de: 'In der Nacht war der Datenverkehr sehr hoch.', ru: 'Ночью трафик был очень высоким.', wrongRu: ['Днём трафик был очень высоким.', 'Ночью трафик был очень низким.'] },
      ],
    },
    {
      lesson: 1, title: 'Neue Regeln für alle',
      de: `Nach dem Vorfall hat die Firma eine neue Sicherheitsrichtlinie geschrieben. Petra hat Jonas erklärt, warum sie so wichtig ist: „Viele Mitarbeiter hatten zu viele Berechtigungen. Das war ein großes Risiko.“

Ab jetzt vergibt nur der Administrator die Rechte. Jeder Mitarbeiter bekommt nur die Berechtigungen, die er für seine Arbeit braucht. Wenn jemand mehr Zugriff möchte, muss er einen Antrag schreiben.

Jonas sollte prüfen, ob alle die Regeln einhalten. Schon am ersten Tag hat er einen Verstoß gefunden: Ein Kollege hat sein Passwort auf einen Zettel geschrieben. Petra war nicht böse, aber sie hat gesagt: „Mit guten Regeln können wir viele Angriffe verhindern. Aber das funktioniert nur, wenn alle mitmachen.“`,
      ru: `После инцидента фирма написала новую политику безопасности. Петра объяснила Йонасу, почему она так важна: «У многих сотрудников было слишком много прав. Это был большой риск».

Отныне права выдаёт только администратор. Каждый сотрудник получает только те права, которые нужны ему для работы. Если кто-то хочет больше доступа, он должен написать заявку.

Йонас должен был проверить, все ли соблюдают правила. Уже в первый день он нашёл нарушение: один коллега записал свой пароль на бумажку. Петра не рассердилась, но сказала: «С хорошими правилами мы можем предотвратить многие атаки. Но это работает, только если все участвуют».`,
      gloss: {
        jonas: 'Йонас (имя)', petra: 'Петра (имя)', firma: 'фирма', mitarbeiter: 'сотрудник(и)', rechte: 'права', ab: 'с (ab jetzt — отныне)', erklärt: 'объяснил(а)',
        arbeit: 'работа', jemand: 'кто-то', antrag: 'заявление, заявка', sollte: 'должен был', prüfen: 'проверять', regeln: 'правила',
        kollege: 'коллега', zettel: 'бумажка, записка', böse: 'злой, сердитый', mitmachen: 'участвовать', tür: 'дверь', offene: 'открытая', büro: 'офис',
        anrufen: 'позвонить', einem: 'одном, каком-то', fremde: 'чужой', großes: 'большой', welchen: 'какой (вин.)',
      },
      questions: [
        { q: 'Was war das große Risiko?', ru: 'В чём был большой риск?', options: ['Viele Mitarbeiter hatten zu viele Berechtigungen.', 'Der Administrator hatte keine Berechtigungen.', 'Die Firma hatte keine Firewall.'], answer: 'Viele Mitarbeiter hatten zu viele Berechtigungen.' },
        { q: 'Wer vergibt ab jetzt die Rechte?', ru: 'Кто отныне выдаёт права?', options: ['Nur der Administrator', 'Jeder Mitarbeiter', 'Jonas'], answer: 'Nur der Administrator' },
        { q: 'Was muss man machen, wenn man mehr Zugriff möchte?', ru: 'Что нужно сделать, если хочешь больше доступа?', options: ['Einen Antrag schreiben', 'Den Administrator anrufen', 'Ein neues Passwort machen'], answer: 'Einen Antrag schreiben' },
        { q: 'Welchen Verstoß hat Jonas gefunden?', ru: 'Какое нарушение нашёл Йонас?', options: ['Ein Passwort auf einem Zettel', 'Eine offene Tür im Büro', 'Eine fremde IP-Adresse'], answer: 'Ein Passwort auf einem Zettel' },
      ],
      translate: [
        { de: 'Nur der Administrator vergibt die Rechte.', ru: 'Только администратор выдаёт права.', wrongRu: ['Только администратор получает права.', 'Каждый администратор выдаёт права.'] },
        { de: 'Alle müssen die Regeln einhalten.', ru: 'Все должны соблюдать правила.', wrongRu: ['Все должны знать правила.', 'Все могут соблюдать правила.', 'Все должны писать правила.'] },
        { de: 'Das war ein Verstoß gegen die Sicherheitsrichtlinie.', ru: 'Это было нарушение политики безопасности.', wrongRu: ['Это было изменение политики безопасности.', 'Это не было нарушением политики безопасности.'] },
      ],
    },
  ],
};
