import type { Module } from '../types.ts';

// A2.1 cyber 02: strong passwords and password managers (lesson 0), how passwords get cracked (lesson 1).

export const module: Module = {
  id: 'cyber-a21-02-passwoerter', sphere: 'cyber', level: 'A2.1',
  title: 'Passwörter richtig', subtitle: 'Менеджер паролей, спецсимволы, атака по словарю: как делать пароли, которые не взломают.',
  words: [
    { id: 'cyb-a21-02-passwortmanager', icon: 'KeySquare', de: 'Passwortmanager', pos: 'noun', article: 'der', plural: 'Passwortmanager', ru: 'менеджер паролей', parts: ['Passwort', 'manager'], collocation: { de: 'einen Passwortmanager benutzen', ru: 'пользоваться менеджером паролей', accept: ['einen Passwortmanager verwenden', 'den Passwortmanager benutzen'] }, example: { de: 'Mein Passwortmanager erstellt sichere Passwörter.', ru: 'Мой менеджер паролей создаёт надёжные пароли.', cloze: 'Passwortmanager' } },
    { id: 'cyb-a21-02-sonderzeichen', icon: 'Asterisk', de: 'Sonderzeichen', pos: 'noun', article: 'das', plural: 'Sonderzeichen', ru: 'спецсимвол, специальный знак', parts: ['Sonder', 'zeichen'], note: 'Sonder- — особый, das Zeichen — знак, символ. Например: ! ? # %.', example: { de: 'Das Passwort braucht mindestens ein Sonderzeichen.', ru: 'В пароле должен быть хотя бы один спецсимвол.', cloze: 'Sonderzeichen' } },
    { id: 'cyb-a21-02-erraten', icon: 'Dices', de: 'erraten', pos: 'verb', ru: 'угадать, отгадать', forms: 'er errät · erriet · hat erraten', note: 'Спрягается как raten: du errätst, er errät. Приставка er- неотделяемая.', collocation: { de: 'ein Passwort erraten', ru: 'угадать пароль', accept: ['das Passwort erraten'] }, example: { de: 'Niemand kann mein Passwort erraten.', ru: 'Никто не может угадать мой пароль.', cloze: 'erraten' } },
    { id: 'cyb-a21-02-wiederverwenden', icon: 'Repeat', de: 'wiederverwenden', pos: 'verb', ru: 'использовать повторно', forms: 'er verwendet wieder · hat wiederverwendet', note: 'Отделяемая приставка wieder-: er verwendet das Passwort wieder.', collocation: { de: 'Passwörter wiederverwenden', ru: 'повторно использовать пароли', accept: ['ein Passwort wiederverwenden', 'das Passwort wiederverwenden'] }, example: { de: 'Er verwendet sein Passwort überall wieder.', ru: 'Он везде использует один и тот же пароль.', cloze: 'verwendet' } },
    { id: 'cyb-a21-02-grossbuchstabe', icon: 'CaseUpper', de: 'Großbuchstabe', pos: 'noun', article: 'der', plural: 'Großbuchstaben', ru: 'заглавная буква', parts: ['Groß', 'buchstabe'], note: 'n-склонение: den/dem Großbuchstaben. Противоположность — der Kleinbuchstabe.', example: { de: 'Ein Passwort braucht auch Großbuchstaben.', ru: 'В пароле нужны и заглавные буквы.', cloze: 'Großbuchstaben' } },
    { id: 'cyb-a21-02-ziffer', icon: 'Hash', de: 'Ziffer', pos: 'noun', article: 'die', plural: 'Ziffern', ru: 'цифра', imageQuery: 'numeric keypad', note: 'Ziffer — знак (0–9), Zahl — число.', example: { de: 'Nimm Buchstaben, Ziffern und Sonderzeichen!', ru: 'Используй буквы, цифры и спецсимволы!', cloze: 'Ziffern' } },
    { id: 'cyb-a21-02-laenge', icon: 'Ruler', de: 'Länge', pos: 'noun', article: 'die', plural: 'Längen', ru: 'длина', example: { de: 'Die Länge des Passworts ist sehr wichtig.', ru: 'Длина пароля очень важна.', cloze: 'Länge' } },
    { id: 'cyb-a21-02-merken', icon: 'Brain', de: 'sich merken', pos: 'verb', ru: 'запоминать', forms: 'er merkt sich · hat sich gemerkt', note: 'sich (Dat) etwas merken: ich merke mir das Passwort.', collocation: { de: 'sich ein Passwort merken', ru: 'запомнить пароль', accept: ['sich das Passwort merken'] }, example: { de: 'Ich kann mir lange Passwörter nicht merken.', ru: 'Я не могу запомнить длинные пароли.', cloze: 'merken' } },

    { id: 'cyb-a21-02-passphrase', icon: 'TextCursorInput', de: 'Passphrase', pos: 'noun', article: 'die', plural: 'Passphrasen', ru: 'парольная фраза', note: 'Пароль из нескольких слов.', example: { de: 'Eine Passphrase besteht aus mehreren Wörtern.', ru: 'Парольная фраза состоит из нескольких слов.', cloze: 'Passphrase' } },
    { id: 'cyb-a21-02-master-passwort', icon: 'Vault', de: 'Master-Passwort', pos: 'noun', article: 'das', plural: 'Master-Passwörter', ru: 'мастер-пароль, главный пароль', parts: ['Master-', 'Passwort'], note: 'Им открывают менеджер паролей. Пишут и слитно: das Masterpasswort.', example: { de: 'Das Master-Passwort öffnet den Passwortmanager.', ru: 'Мастер-пароль открывает менеджер паролей.', cloze: 'Master-Passwort' } },
    { id: 'cyb-a21-02-speichern', icon: 'Save', de: 'speichern', pos: 'verb', ru: 'сохранять, хранить', forms: 'er speichert · hat gespeichert', note: 'speichern in + Dat: im Browser speichern.', collocation: { de: 'ein Passwort speichern', ru: 'сохранить пароль', accept: ['das Passwort speichern', 'Passwörter speichern'] }, example: { de: 'Der Browser speichert meine Passwörter.', ru: 'Браузер сохраняет мои пароли.', cloze: 'speichert' } },
    { id: 'cyb-a21-02-knacken', icon: 'Hammer', de: 'knacken', pos: 'verb', ru: 'взламывать (пароль)', forms: 'er knackt · hat geknackt', note: 'Буквально «колоть (орехи)»; в IT — взломать пароль или шифр.', collocation: { de: 'ein Passwort knacken', ru: 'взломать пароль', accept: ['das Passwort knacken'] }, example: { de: 'Der Hacker hat das Passwort geknackt.', ru: 'Хакер взломал пароль.', cloze: 'geknackt' } },
    { id: 'cyb-a21-02-datenleck', icon: 'Droplets', de: 'Datenleck', pos: 'noun', article: 'das', plural: 'Datenlecks', ru: 'утечка данных', parts: ['Daten', 'leck'], note: 'Das Leck — течь, пробоина.', example: { de: 'Nach dem Datenleck ändern alle ihre Passwörter.', ru: 'После утечки данных все меняют свои пароли.', cloze: 'Datenleck' } },
    { id: 'cyb-a21-02-woerterbuchangriff', icon: 'BookA', de: 'Wörterbuchangriff', pos: 'noun', article: 'der', plural: 'Wörterbuchangriffe', ru: 'атака по словарю', parts: ['Wörterbuch', 'angriff'], example: { de: 'Ein Wörterbuchangriff testet bekannte Wörter.', ru: 'Атака по словарю проверяет известные слова.', cloze: 'Wörterbuchangriff' } },
    { id: 'cyb-a21-02-ausprobieren', icon: 'FlaskConical', de: 'ausprobieren', pos: 'verb', ru: 'пробовать, перебирать (варианты)', forms: 'er probiert aus · hat ausprobiert', note: 'Отделяемая приставка: er probiert … aus.', example: { de: 'Das Programm probiert viele Passwörter aus.', ru: 'Программа перебирает много паролей.', cloze: 'probiert' } },
    { id: 'cyb-a21-02-zufaellig', icon: 'Shuffle', de: 'zufällig', pos: 'adj', ru: 'случайный', note: 'Также наречие: «случайно».', example: { de: 'Der Passwortmanager erstellt zufällige Passwörter.', ru: 'Менеджер паролей создаёт случайные пароли.', cloze: 'zufällige' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Ein Passwort für alles?',
      de: `Katharina studiert im ersten Semester an der TU Wien. Sie wohnt mit Florian in einer WG. Florian benutzt für alle Konten das gleiche Passwort, weil er es sich leicht merken kann. Katharina sagt: „Du solltest Passwörter nie wiederverwenden. Wenn ein Angreifer ein Passwort kennt, versucht er es auch bei deinen anderen Konten.“

Dann zeigt sie ihm ihren Passwortmanager. Das Programm erstellt lange Passwörter mit Großbuchstaben, Ziffern und Sonderzeichen. „Die Länge ist am wichtigsten“, erklärt Katharina. „Ein kurzes Passwort kann ein Computer schnell erraten.“

Florian ist nicht sicher: „Und wo sind dann meine Passwörter?“ Katharina lacht: „Im Passwortmanager natürlich. Du musst dir nur noch ein Passwort merken.“`,
      ru: `Катарина учится на первом семестре в Венском техническом университете. Она живёт с Флорианом в общей квартире. Флориан использует для всех аккаунтов один и тот же пароль, потому что его легко запомнить. Катарина говорит: «Тебе никогда не следует использовать пароли повторно. Если злоумышленник знает пароль, он пробует его и на твоих других аккаунтах».

Потом она показывает ему свой менеджер паролей. Программа создаёт длинные пароли с заглавными буквами, цифрами и спецсимволами. «Длина важнее всего, — объясняет Катарина. — Короткий пароль компьютер может быстро угадать».

Флориан не уверен: «А где тогда мои пароли?» Катарина смеётся: «В менеджере паролей, конечно. Тебе нужно запомнить только один пароль».`,
      gloss: {
        katharina: 'Катарина (имя)', florian: 'Флориан (имя)', semester: 'семестр', tu: 'TU — технический университет', wien: 'Вена',
        wg: 'общая квартира (Wohngemeinschaft)', konten: 'аккаунты', gleiche: 'тот же самый, одинаковый', passwort: 'пароль', passwörter: 'пароли',
        solltest: '(тебе) следовало бы', angreifer: 'злоумышленник', versucht: 'пробует', deinen: 'твоим',
        zeigt: 'показывает', programm: 'программа', erstellt: 'создаёт', lange: 'длинные', am: 'am wichtigsten — важнее всего', wichtigsten: 'важнее всего (am wichtigsten)',
        kurzes: 'короткий (ср. р.)', computer: 'компьютер', sicher: 'уверен', lacht: 'смеётся', laut: 'по словам, согласно',
        immer: 'всегда', viele: 'сколько (wie viele)', gesagt: 'сказал(а)', ihm: 'ему', aufschreiben: 'записывать',
      },
      questions: [
        { q: 'Warum benutzt Florian immer das gleiche Passwort?', ru: 'Почему Флориан всегда использует один и тот же пароль?', options: ['Weil er es sich leicht merken kann.', 'Weil Katharina es ihm gesagt hat.', 'Weil sein Passwortmanager es so macht.'], answer: 'Weil er es sich leicht merken kann.' },
        { q: 'Was ist laut Katharina am wichtigsten?', ru: 'Что, по словам Катарины, важнее всего?', options: ['Die Länge', 'Die Sonderzeichen', 'Die Großbuchstaben'], answer: 'Die Länge' },
        { q: 'Was macht ein Angreifer mit einem Passwort, das er kennt?', ru: 'Что злоумышленник делает с паролем, который он знает?', options: ['Er versucht es auch bei anderen Konten.', 'Er gibt es Florian zurück.', 'Er speichert es im Passwortmanager.'], answer: 'Er versucht es auch bei anderen Konten.' },
        { q: 'Wie viele Passwörter muss sich Florian mit dem Passwortmanager merken?', ru: 'Сколько паролей Флориану нужно запомнить с менеджером паролей?', options: ['Nur ein Passwort', 'Alle Passwörter', 'Kein Passwort'], answer: 'Nur ein Passwort' },
      ],
      translate: [
        { de: 'Du solltest Passwörter nie wiederverwenden.', ru: 'Тебе никогда не следует использовать пароли повторно.', wrongRu: ['Тебе следует часто использовать пароли повторно.', 'Тебе никогда не следует менять пароли.'] },
        { de: 'Ein Computer kann ein kurzes Passwort schnell erraten.', ru: 'Компьютер может быстро угадать короткий пароль.', wrongRu: ['Компьютер может быстро угадать длинный пароль.', 'Компьютер не может быстро угадать короткий пароль.', 'Компьютер может быстро сохранить короткий пароль.'] },
        { de: 'Ich muss mir nur ein Passwort merken.', ru: 'Мне нужно запомнить только один пароль.', wrongRu: ['Мне нужно запомнить все пароли.', 'Мне нужно записать только один пароль.'] },
      ],
    },
    {
      lesson: 1, title: 'Wie man Passwörter knackt',
      de: `Zwei Wochen später liest Florian in den Nachrichten von einem Datenleck: Ein Online-Shop hat Millionen Passwörter verloren. Zum Glück hat er sein altes Passwort schon geändert.

Im Tutorium zeigt die Tutorin Verena, wie Angreifer Passwörter knacken. Bei einem Wörterbuchangriff probiert ein Programm sehr viele bekannte Wörter aus. Das Passwort „sonnenschein“ ist nach wenigen Sekunden geknackt. Ein zufälliges Passwort mit zwanzig Zeichen ist viel sicherer.

Für sein Master-Passwort nimmt Florian jetzt eine Passphrase aus vier zufälligen Wörtern, zum Beispiel „Kaffee Fenster Wolke Gitarre“. Die kann er sich gut merken. Alle anderen Passwörter speichert der Passwortmanager für ihn.`,
      ru: `Две недели спустя Флориан читает в новостях об утечке данных: интернет-магазин потерял миллионы паролей. К счастью, он уже сменил свой старый пароль.

На семинаре тьютор Верена показывает, как злоумышленники взламывают пароли. При атаке по словарю программа перебирает очень много известных слов. Пароль «sonnenschein» взламывается за несколько секунд. Случайный пароль из двадцати символов гораздо надёжнее.

Для мастер-пароля Флориан теперь берёт парольную фразу из четырёх случайных слов, например «Kaffee Fenster Wolke Gitarre». Её он может легко запомнить. Все остальные пароли менеджер паролей хранит за него.`,
      gloss: {
        florian: 'Флориан (имя)', verena: 'Верена (имя)', wochen: 'недели', nachrichten: 'новости', 'online-shop': 'интернет-магазин',
        millionen: 'миллионы', passwörter: 'пароли', passwort: 'пароль', verloren: 'потерял', glück: 'счастье; zum Glück — к счастью', geändert: 'сменил, изменил',
        tutorium: 'семинар с тьютором (Tutorium)', tutorin: 'тьютор (женщина)', angreifer: 'злоумышленники', programm: 'программа', bekannte: 'известные',
        wörter: 'слова', wörtern: 'словами, слов (дат. мн.)', sonnenschein: 'солнечный свет (здесь: пример пароля)', wenigen: 'немногих, нескольких', sekunden: 'секунды',
        zufälliges: 'случайный (ср. р.)', zufälligen: 'случайных', zeichen: 'символы, знаки', sicherer: 'надёжнее', kaffee: 'кофе', fenster: 'окно', wolke: 'облако', gitarre: 'гитара',
        jetzt: 'теперь', zum: 'zum Beispiel — например; zum Glück — к счастью', nimmt: 'берёт', anderen: 'остальные, другие',
        besteht: 'состоит', woraus: 'из чего', florians: 'Флориана (род.)', verschlüsselt: 'шифрует', wörterbuch: 'словарь', kurze: 'короткие',
        angreifern: 'злоумышленникам', gelesen: 'прочитал',
      },
      questions: [
        { q: 'Wo hat Florian von dem Datenleck gelesen?', ru: 'Где Флориан прочитал об утечке данных?', options: ['In den Nachrichten', 'Im Tutorium', 'In einer E-Mail'], answer: 'In den Nachrichten' },
        { q: 'Was macht ein Programm bei einem Wörterbuchangriff?', ru: 'Что делает программа при атаке по словарю?', options: ['Es probiert viele bekannte Wörter aus.', 'Es speichert alle Passwörter.', 'Es verschlüsselt ein Wörterbuch.'], answer: 'Es probiert viele bekannte Wörter aus.' },
        { q: 'Woraus besteht Florians Passphrase?', ru: 'Из чего состоит парольная фраза Флориана?', options: ['Aus vier zufälligen Wörtern', 'Aus seinem alten Passwort', 'Aus Ziffern und Sonderzeichen'], answer: 'Aus vier zufälligen Wörtern' },
      ],
      translate: [
        { de: 'Angreifer können kurze Passwörter schnell knacken.', ru: 'Злоумышленники могут быстро взломать короткие пароли.', wrongRu: ['Злоумышленники не могут быстро взломать короткие пароли.', 'Злоумышленники могут быстро украсть короткие пароли.'] },
        { de: 'Der Passwortmanager speichert alle Passwörter.', ru: 'Менеджер паролей хранит все пароли.', wrongRu: ['Менеджер паролей удаляет все пароли.', 'Менеджер паролей хранил все пароли.'] },
        { de: 'Ein zufälliges Passwort ist schwer zu erraten.', ru: 'Случайный пароль трудно угадать.', wrongRu: ['Случайный пароль легко угадать.', 'Короткий пароль трудно угадать.'] },
      ],
    },
  ],
};
