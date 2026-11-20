import type { Module } from '../types.ts';

// A2.1 cyber 10: an unusual login (lesson 0) and getting a hijacked account back (lesson 1).

export const module: Module = {
  id: 'cyber-a21-10-konten', sphere: 'cyber', level: 'A2.1',
  title: 'Konten schützen', subtitle: 'Уведомление, контрольный вопрос, восстановление доступа: что делать, если аккаунт взломали.',
  words: [
    { id: 'cyb-a21-10-benachrichtigung', icon: 'Bell', imageQuery: 'phone notification', de: 'Benachrichtigung', pos: 'noun', article: 'die', plural: 'Benachrichtigungen', ru: 'уведомление', collocation: { de: 'eine Benachrichtigung bekommen', ru: 'получить уведомление', accept: ['eine Benachrichtigung erhalten'] }, example: { de: 'Ich bekomme eine Benachrichtigung auf dem Handy.', ru: 'Я получаю уведомление на телефон.', cloze: 'Benachrichtigung' } },
    { id: 'cyb-a21-10-anmeldeversuch', icon: 'LogIn', de: 'Anmeldeversuch', pos: 'noun', article: 'der', plural: 'Anmeldeversuche', ru: 'попытка входа', parts: ['Anmelde', 'versuch'], note: 'die Anmeldung (вход) + der Versuch (попытка).', example: { de: 'Es gab viele Anmeldeversuche aus dem Ausland.', ru: 'Было много попыток входа из-за границы.', cloze: 'Anmeldeversuche' } },
    { id: 'cyb-a21-10-ungewoehnlich', icon: 'CircleAlert', de: 'ungewöhnlich', pos: 'adj', ru: 'необычный', collocation: { de: 'eine ungewöhnliche Anmeldung', ru: 'необычный вход', accept: ['ungewöhnliche Anmeldung'] }, example: { de: 'Wir haben eine ungewöhnliche Anmeldung bemerkt.', ru: 'Мы заметили необычный вход.', cloze: 'ungewöhnliche' } },
    { id: 'cyb-a21-10-bestaetigen', icon: 'ThumbsUp', de: 'bestätigen', pos: 'verb', ru: 'подтверждать', forms: 'er bestätigt · hat bestätigt', note: 'Приставка be- неотделяемая.', collocation: { de: 'die Anmeldung bestätigen', ru: 'подтвердить вход', accept: ['eine Anmeldung bestätigen'] }, example: { de: 'Bitte bestätige die Anmeldung auf deinem Handy.', ru: 'Пожалуйста, подтверди вход на своём телефоне.', cloze: 'bestätige' } },
    { id: 'cyb-a21-10-sicherheitsfrage', icon: 'MessageCircleQuestion', imageQuery: 'question mark', de: 'Sicherheitsfrage', pos: 'noun', article: 'die', plural: 'Sicherheitsfragen', ru: 'контрольный (секретный) вопрос', parts: ['Sicherheits', 'frage'], note: 'Sicherheit + s + Frage.', example: { de: 'Die Antwort auf die Sicherheitsfrage ist zu leicht.', ru: 'Ответ на контрольный вопрос слишком лёгкий.', cloze: 'Sicherheitsfrage' } },
    { id: 'cyb-a21-10-aktivitaet', icon: 'Activity', de: 'Aktivität', pos: 'noun', article: 'die', plural: 'Aktivitäten', ru: 'активность, действия', collocation: { de: 'verdächtige Aktivitäten', ru: 'подозрительная активность' }, example: { de: 'In deinem Konto gibt es neue Aktivitäten.', ru: 'В твоём аккаунте есть новая активность.', cloze: 'Aktivitäten' } },
    { id: 'cyb-a21-10-unbefugt', icon: 'UserX', de: 'unbefugt', pos: 'adj', ru: 'посторонний, не имеющий права; несанкционированный', note: 'befugt — уполномоченный, имеющий право.', collocation: { de: 'ein unbefugter Zugriff', ru: 'несанкционированный доступ', accept: ['unbefugter Zugriff'] }, example: { de: 'Ein unbefugter Zugriff ist strafbar.', ru: 'Несанкционированный доступ наказуем.', cloze: 'unbefugter' } },
    { id: 'cyb-a21-10-voruebergehend', icon: 'Timer', de: 'vorübergehend', pos: 'adj', ru: 'временный; временно', note: 'Часто как наречие: vorübergehend gesperrt — временно заблокирован.', example: { de: 'Das Konto ist vorübergehend gesperrt.', ru: 'Аккаунт временно заблокирован.', cloze: 'vorübergehend' } },

    { id: 'cyb-a21-10-wiederherstellung', icon: 'RotateCcw', de: 'Wiederherstellung', pos: 'noun', article: 'die', plural: 'Wiederherstellungen', ru: 'восстановление', note: 'От глагола wiederherstellen.', collocation: { de: 'die Wiederherstellung des Kontos', ru: 'восстановление аккаунта' }, example: { de: 'Die Wiederherstellung des Kontos dauert ein paar Tage.', ru: 'Восстановление аккаунта занимает несколько дней.', cloze: 'Wiederherstellung' } },
    { id: 'cyb-a21-10-support', icon: 'Headset', imageQuery: 'call center headset', de: 'Support', pos: 'noun', article: 'der', ru: 'служба поддержки, техподдержка', note: 'Мн. ч. не употребляется. Синоним: der Kundendienst.', collocation: { de: 'den Support kontaktieren', ru: 'связаться со службой поддержки', accept: ['den Support anschreiben'] }, example: { de: 'Ich schreibe dem Support eine E-Mail.', ru: 'Я пишу письмо в службу поддержки.', cloze: 'Support' } },
    { id: 'cyb-a21-10-videoanruf', icon: 'Video', imageQuery: 'video call on laptop', de: 'Videoanruf', pos: 'noun', article: 'der', plural: 'Videoanrufe', ru: 'видеозвонок', parts: ['Video', 'anruf'], example: { de: 'Im Videoanruf zeigt er seinen Ausweis.', ru: 'Во время видеозвонка он показывает своё удостоверение.', cloze: 'Videoanruf' } },
    { id: 'cyb-a21-10-nachweisen', icon: 'FileCheck', de: 'nachweisen', pos: 'verb', ru: 'доказывать, подтверждать (документально)', forms: 'er weist nach · hat nachgewiesen', note: 'Отделяемая приставка: er weist … nach.', collocation: { de: 'die Identität nachweisen', ru: 'подтвердить личность', accept: ['seine Identität nachweisen', 'meine Identität nachweisen'] }, example: { de: 'Sie weist ihre Identität mit dem Ausweis nach.', ru: 'Она подтверждает свою личность удостоверением.', cloze: 'weist' } },
    { id: 'cyb-a21-10-wiederherstellungscode', icon: 'LifeBuoy', imageQuery: 'recovery codes', de: 'Wiederherstellungscode', pos: 'noun', article: 'der', plural: 'Wiederherstellungscodes', ru: 'код восстановления', parts: ['Wiederherstellungs', 'code'], example: { de: 'Ich schreibe den Wiederherstellungscode auf Papier.', ru: 'Я записываю код восстановления на бумагу.', cloze: 'Wiederherstellungscode' } },
    { id: 'cyb-a21-10-uebernehmen', icon: 'Skull', de: 'übernehmen', pos: 'verb', ru: 'захватывать (аккаунт); брать на себя', forms: 'er übernimmt · übernahm · hat übernommen', note: 'Приставка über- здесь неотделяемая. Основное значение — «брать на себя» (Verantwortung übernehmen).', example: { de: 'Ein Hacker hat mein Konto übernommen.', ru: 'Хакер захватил мой аккаунт.', cloze: 'übernommen' } },
    { id: 'cyb-a21-10-aussperren', icon: 'DoorClosed', de: 'aussperren', pos: 'verb', ru: 'лишать доступа, не пускать', forms: 'er sperrt aus · hat ausgesperrt', note: 'Отделяемая приставка; jemanden aus + Dat aussperren.', example: { de: 'Der Angreifer hat mich aus meinem Konto ausgesperrt.', ru: 'Злоумышленник лишил меня доступа к моему аккаунту.', cloze: 'ausgesperrt' } },
    { id: 'cyb-a21-10-rechtzeitig', icon: 'AlarmClock', de: 'rechtzeitig', pos: 'adv', ru: 'вовремя, своевременно', example: { de: 'Sie hat den Angriff rechtzeitig bemerkt.', ru: 'Она вовремя заметила атаку.', cloze: 'rechtzeitig' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Eine Anmeldung aus Brasilien',
      de: `Laura studiert Wirtschaftsinformatik an der TU Wien. Am Donnerstag um Mitternacht bekommt sie eine Benachrichtigung: „Ungewöhnliche Anmeldung bei deinem Konto aus Brasilien. Warst du das?“ Laura war noch nie in Brasilien.

Sie öffnet die App und sieht die letzten Aktivitäten. Es gab zehn Anmeldeversuche in einer Stunde. Jemand hat das Passwort und auch die Sicherheitsfrage probiert. Die Antwort war leicht: der Name ihrer Katze.

Laura klickt auf „Das war ich nicht“ und bestätigt das mit einem Code. Der Dienst sperrt das Konto vorübergehend, weil er einen unbefugten Zugriff verhindern will. Am nächsten Tag ändert Laura ihr Passwort und wählt eine neue Sicherheitsfrage mit einer schwierigen Antwort.`,
      ru: `Лаура изучает бизнес-информатику в Венском техническом университете. В четверг в полночь она получает уведомление: «Необычный вход в твой аккаунт из Бразилии. Это был ты?» Лаура никогда не была в Бразилии.

Она открывает приложение и смотрит последнюю активность. За один час было десять попыток входа. Кто-то пробовал пароль и контрольный вопрос. Ответ был лёгким: имя её кошки.

Лаура нажимает «Это был не я» и подтверждает это кодом. Сервис временно блокирует аккаунт, потому что хочет предотвратить несанкционированный доступ. На следующий день Лаура меняет пароль и выбирает новый контрольный вопрос со сложным ответом.`,
      gloss: {
        laura: 'Лаура (имя)', wirtschaftsinformatik: 'бизнес-информатика', tu: 'TU — технический университет', wien: 'Вена', donnerstag: 'четверг', mitternacht: 'полночь',
        benachrichtigung: 'уведомление', ungewöhnliche: 'необычный', anmeldung: 'вход (в аккаунт)', konto: 'аккаунт', brasilien: 'Бразилия', warst: '(ты) был',
        öffnet: 'открывает', app: 'приложение', letzten: 'последние', aktivitäten: 'активность, действия', anmeldeversuche: 'попытки входа', jemand: 'кто-то', passwort: 'пароль', sicherheitsfrage: 'контрольный вопрос', probiert: 'пробовал',
        antwort: 'ответ', katze: 'кошка', bestätigt: 'подтверждает', code: 'код', dienst: 'сервис, служба', sperrt: 'блокирует', vorübergehend: 'временно', unbefugten: 'несанкционированный', zugriff: 'доступ', verhindern: 'предотвратить',
        nächsten: 'следующий', ändert: 'меняет', wählt: 'выбирает', schwierigen: 'сложным',
        kam: 'пришёл, был', deutschland: 'Германия', geburtstag: 'день рождения', vergessen: 'забыла', gesperrt: 'заблокирован', bekommen: 'получил', leicht: 'лёгкий', viele: 'сколько (wie viele — сколько)',
      },
      questions: [
        { q: 'Woher kam die ungewöhnliche Anmeldung?', ru: 'Откуда был необычный вход?', options: ['Aus Brasilien', 'Aus Wien', 'Aus Deutschland'], answer: 'Aus Brasilien' },
        { q: 'Wie viele Anmeldeversuche gab es in einer Stunde?', ru: 'Сколько попыток входа было за один час?', options: ['Zehn', 'Zwei', 'Hundert'], answer: 'Zehn' },
        { q: 'Was war die Antwort auf die Sicherheitsfrage?', ru: 'Каким был ответ на контрольный вопрос?', options: ['Der Name ihrer Katze', 'Ihr Geburtstag', 'Der Name ihrer Uni'], answer: 'Der Name ihrer Katze' },
        { q: 'Warum sperrt der Dienst das Konto?', ru: 'Почему сервис блокирует аккаунт?', options: ['Er will einen unbefugten Zugriff verhindern.', 'Laura hat das Passwort vergessen.', 'Laura war in Brasilien.'], answer: 'Er will einen unbefugten Zugriff verhindern.' },
      ],
      translate: [
        { de: 'Ich habe eine Benachrichtigung bekommen.', ru: 'Я получил уведомление.', wrongRu: ['Я отправил уведомление.', 'Я не получил уведомление.', 'Мы получили уведомление.'] },
        { de: 'Das Konto ist vorübergehend gesperrt.', ru: 'Аккаунт временно заблокирован.', wrongRu: ['Аккаунт навсегда заблокирован.', 'Аккаунт временно разблокирован.'] },
        { de: 'Die Antwort auf die Sicherheitsfrage war zu leicht.', ru: 'Ответ на контрольный вопрос был слишком лёгким.', wrongRu: ['Ответ на контрольный вопрос был слишком трудным.', 'Вопрос был слишком лёгким.'] },
      ],
    },
    {
      lesson: 1, title: 'Hilfe vom Support',
      de: `Lauras Freund David hat weniger Glück gehabt. Ein Hacker hat sein Konto bei einer Spiele-Plattform übernommen und das Passwort geändert. Jetzt ist David aus seinem eigenen Konto ausgesperrt. Er hat den Angriff nicht rechtzeitig bemerkt, weil die Benachrichtigungen an eine alte E-Mail-Adresse gegangen sind.

Laura hilft ihm, und zusammen starten sie die Wiederherstellung. Zuerst schreibt David dem Support. Der Support will wissen, ob das Konto wirklich ihm gehört. David muss das nachweisen. In einem Videoanruf zeigt er seinen Ausweis. Als Beweis nennt er auch seine letzten Käufe im Spiel.

Nach drei Tagen bekommt er sein Konto zurück. Jetzt hat er eine neue E-Mail-Adresse im Konto und die Zwei-Faktor-Authentifizierung.`,
      ru: `Другу Лауры Давиду повезло меньше. Хакер захватил его аккаунт на игровой платформе и сменил пароль. Теперь Давид лишён доступа к собственному аккаунту. Он не заметил атаку вовремя, потому что уведомления приходили на старый адрес электронной почты.

Лаура помогает ему, и вместе они начинают восстановление. Сначала Давид пишет в службу поддержки. Служба поддержки хочет знать, действительно ли аккаунт принадлежит ему. Давид должен это доказать. Во время видеозвонка он показывает своё удостоверение личности. В качестве доказательства он также называет свои последние покупки в игре.

Через три дня он получает свой аккаунт обратно. Теперь у него в аккаунте новый адрес электронной почты и двухфакторная аутентификация.`,
      gloss: {
        laura: 'Лаура (имя)',
        lauras: 'Лауры', david: 'Давид (имя)', davids: 'Давида', weniger: 'меньше', glück: 'удача, счастье (Glück haben — везти)', gehabt: 'имел (Glück gehabt — повезло)', hacker: 'хакер', konto: 'аккаунт', 'spiele-plattform': 'игровая платформа',
        übernommen: 'захватил', passwort: 'пароль', geändert: 'изменил', eigenen: 'собственного', ausgesperrt: 'лишён доступа', angriff: 'атака', rechtzeitig: 'вовремя', bemerkt: 'заметил',
        benachrichtigungen: 'уведомления', alte: 'старый', 'e-mail-adresse': 'адрес электронной почты', gegangen: 'шли, приходили', starten: 'начинают', wiederherstellung: 'восстановление', support: 'служба поддержки',
        gehört: 'принадлежит', nachweisen: 'доказать', videoanruf: 'видеозвонок', ausweis: 'удостоверение личности', beweis: 'доказательство', nennt: 'называет', letzten: 'последние', käufe: 'покупки', spiel: 'игра',
        tagen: 'дней (nach drei Tagen — через три дня)', zurück: 'обратно', 'zwei-faktor-authentifizierung': 'двухфакторная аутентификация',
        urlaub: 'отпуск', handy: 'мобильный телефон', defekt: 'неисправен', polizei: 'полиция', weist: 'доказывает (nachweisen)', identität: 'личность', schickt: 'отправляет', beantwortet: 'отвечает на', sicherheitsfrage: 'контрольный вопрос',
        nächsten: 'следующий', tag: 'день', bekommt: 'получает', bin: '(я) есть; здесь: я', musst: '(ты) должен',
      },
      questions: [
        { q: 'Warum hat David den Angriff nicht rechtzeitig bemerkt?', ru: 'Почему Давид не заметил атаку вовремя?', options: ['Die Benachrichtigungen sind an eine alte E-Mail-Adresse gegangen.', 'Er war im Urlaub.', 'Sein Handy war defekt.'], answer: 'Die Benachrichtigungen sind an eine alte E-Mail-Adresse gegangen.' },
        { q: 'Wem schreibt David zuerst?', ru: 'Кому Давид пишет сначала?', options: ['Dem Support', 'Dem Hacker', 'Der Polizei'], answer: 'Dem Support' },
        { q: 'Wie weist David nach, dass das Konto ihm gehört?', ru: 'Как Давид доказывает, что аккаунт принадлежит ему?', options: ['Er zeigt seinen Ausweis in einem Videoanruf.', 'Er schickt sein Passwort.', 'Er beantwortet eine Sicherheitsfrage.'], answer: 'Er zeigt seinen Ausweis in einem Videoanruf.' },
        { q: 'Wann bekommt David sein Konto zurück?', ru: 'Когда Давид получает свой аккаунт обратно?', options: ['Nach drei Tagen', 'Am nächsten Tag', 'Nach einer Woche'], answer: 'Nach drei Tagen' },
      ],
      translate: [
        { de: 'Ein Hacker hat mein Konto übernommen.', ru: 'Хакер захватил мой аккаунт.', wrongRu: ['Хакер удалил мой аккаунт.', 'Хакер захватил твой аккаунт.', 'Хакер не захватил мой аккаунт.'] },
        { de: 'Ich bin aus meinem Konto ausgesperrt.', ru: 'Я лишён доступа к своему аккаунту.', wrongRu: ['У меня есть доступ к своему аккаунту.', 'Он лишён доступа к своему аккаунту.'] },
        { de: 'Du musst nachweisen, dass das Konto dir gehört.', ru: 'Ты должен доказать, что аккаунт принадлежит тебе.', wrongRu: ['Ты должен доказать, что аккаунт принадлежит ему.', 'Ты не должен доказывать, что аккаунт принадлежит тебе.', 'Я должен доказать, что аккаунт принадлежит мне.'] },
      ],
    },
  ],
};
