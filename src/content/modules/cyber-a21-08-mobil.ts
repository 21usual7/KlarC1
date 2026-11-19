import type { Module } from '../types.ts';

// A2.1 cyber 08: app permissions (lesson 0) and a lost phone (lesson 1).

export const module: Module = {
  id: 'cyber-a21-08-mobil', sphere: 'cyber', level: 'A2.1',
  title: 'Mobile Sicherheit', subtitle: 'Местоположение, разрешения приложений, потерянный телефон: как защитить смартфон.',
  words: [
    { id: 'cyb-a21-08-geraet', icon: 'TabletSmartphone', imageQuery: 'smartphone and tablet', de: 'Gerät', pos: 'noun', article: 'das', plural: 'Geräte', ru: 'устройство, прибор', collocation: { de: 'ein mobiles Gerät', ru: 'мобильное устройство', accept: ['das mobile Gerät'] }, example: { de: 'Mein Gerät ist alt und langsam.', ru: 'Моё устройство старое и медленное.', cloze: 'Gerät' } },
    { id: 'cyb-a21-08-app-store', icon: 'Store', imageQuery: 'app store on smartphone screen', de: 'App-Store', pos: 'noun', article: 'der', plural: 'App-Stores', ru: 'магазин приложений', note: 'Общее название; у Android магазин называется Google Play Store.', example: { de: 'Lade Apps nur aus dem offiziellen App-Store!', ru: 'Скачивай приложения только из официального магазина приложений!', cloze: 'App-Store' } },
    { id: 'cyb-a21-08-app-berechtigung', icon: 'ShieldQuestion', de: 'App-Berechtigung', pos: 'noun', article: 'die', plural: 'App-Berechtigungen', ru: 'разрешение приложения (доступ к камере, контактам и т. п.)', note: 'Обычно во мн. ч. Разговорно также: die Rechte einer App.', collocation: { de: 'App-Berechtigungen prüfen', ru: 'проверять разрешения приложений', accept: ['die App-Berechtigungen prüfen'] }, example: { de: 'Prüf die App-Berechtigungen in den Einstellungen.', ru: 'Проверь разрешения приложений в настройках.', cloze: 'App-Berechtigungen' } },
    { id: 'cyb-a21-08-standort', icon: 'MapPinned', imageQuery: 'map pin on smartphone', de: 'Standort', pos: 'noun', article: 'der', plural: 'Standorte', ru: 'местоположение, геолокация', collocation: { de: 'den Standort teilen', ru: 'делиться местоположением', accept: ['meinen Standort teilen', 'seinen Standort teilen'] }, example: { de: 'Die Wetter-App will meinen Standort wissen.', ru: 'Приложение погоды хочет знать моё местоположение.', cloze: 'Standort' } },
    { id: 'cyb-a21-08-kontakt', icon: 'Contact', de: 'Kontakt', pos: 'noun', article: 'der', plural: 'Kontakte', ru: 'контакт (в телефоне); связь', note: 'Kontakt zu/mit + Dat — связь, контакт с кем-то.', example: { de: 'Warum braucht ein Spiel meine Kontakte?', ru: 'Зачем игре мои контакты?', cloze: 'Kontakte' } },
    { id: 'cyb-a21-08-verweigern', icon: 'CircleX', de: 'verweigern', pos: 'verb', ru: 'отказывать (в чём-то), запрещать', forms: 'er verweigert · hat verweigert', note: 'jemandem (Dat) etwas (Akk) verweigern. Приставка ver- неотделяемая.', collocation: { de: 'den Zugriff verweigern', ru: 'запретить доступ', accept: ['Zugriff verweigern'] }, example: { de: 'Ich verweigere der App den Zugriff.', ru: 'Я запрещаю приложению доступ.', cloze: 'verweigere' } },
    { id: 'cyb-a21-08-erlauben', icon: 'CircleCheck', de: 'erlauben', pos: 'verb', ru: 'разрешать', forms: 'er erlaubt · hat erlaubt', note: 'jemandem (Dat) etwas (Akk) erlauben. Приставка er- неотделяемая.', example: { de: 'Erlaubst du der App den Zugriff aufs Mikrofon?', ru: 'Ты разрешаешь приложению доступ к микрофону?', cloze: 'Erlaubst' } },
    { id: 'cyb-a21-08-vertrauenswuerdig', icon: 'BadgeCheck', de: 'vertrauenswürdig', pos: 'adj', ru: 'надёжный, заслуживающий доверия', parts: ['vertrauens', 'würdig'], note: 'das Vertrauen (доверие) + s + würdig (достойный).', collocation: { de: 'eine vertrauenswürdige Quelle', ru: 'надёжный источник', accept: ['vertrauenswürdige Quelle'] }, example: { de: 'Ist diese Quelle vertrauenswürdig?', ru: 'Этот источник надёжный?', cloze: 'vertrauenswürdig' } },

    { id: 'cyb-a21-08-gps', icon: 'Satellite', de: 'GPS', pos: 'noun', article: 'das', ru: 'GPS, спутниковая навигация', note: 'Читается по-немецки: «ге-пе-эс».', example: { de: 'Ohne GPS findet die App das Handy nicht.', ru: 'Без GPS приложение не найдёт телефон.', cloze: 'GPS' } },
    { id: 'cyb-a21-08-orten', icon: 'LocateFixed', de: 'orten', pos: 'verb', ru: 'определять местоположение (по сигналу)', forms: 'er ortet · hat geortet', note: '+ Akk: das Handy orten. Отсюда die Ortung — определение местоположения.', collocation: { de: 'das Handy orten', ru: 'определить, где телефон', accept: ['ein Handy orten', 'mein Handy orten'] }, example: { de: 'Mit der App kann man das Handy orten.', ru: 'С помощью приложения можно определить, где телефон.', cloze: 'orten' } },
    { id: 'cyb-a21-08-aus-der-ferne', icon: 'RadioTower', de: 'aus der Ferne', pos: 'phrase', ru: 'удалённо, на расстоянии', note: 'die Ferne — даль.', collocation: { de: 'Daten aus der Ferne löschen', ru: 'удалённо стереть данные', accept: ['die Daten aus der Ferne löschen'] }, example: { de: 'Man kann alle Daten aus der Ferne löschen.', ru: 'Можно удалённо стереть все данные.', cloze: 'aus der Ferne' } },
    { id: 'cyb-a21-08-sim-karte', icon: 'Microchip', imageQuery: 'SIM card', de: 'SIM-Karte', pos: 'noun', article: 'die', plural: 'SIM-Karten', ru: 'SIM-карта', collocation: { de: 'die SIM-Karte sperren', ru: 'заблокировать SIM-карту', accept: ['die SIM-Karte sperren lassen'] }, example: { de: 'Der Dieb hat die SIM-Karte herausgenommen.', ru: 'Вор вынул SIM-карту.', cloze: 'SIM-Karte' } },
    { id: 'cyb-a21-08-diebstahl', icon: 'Grab', de: 'Diebstahl', pos: 'noun', article: 'der', plural: 'Diebstähle', ru: 'кража', note: 'der Dieb — вор.', collocation: { de: 'einen Diebstahl melden', ru: 'заявить о краже', accept: ['den Diebstahl melden'] }, example: { de: 'Den Diebstahl meldest du der Polizei.', ru: 'О краже ты сообщаешь в полицию.', cloze: 'Diebstahl' } },
    { id: 'cyb-a21-08-seriennummer', icon: 'Hash', de: 'Seriennummer', pos: 'noun', article: 'die', plural: 'Seriennummern', ru: 'серийный номер', parts: ['Serien', 'nummer'], example: { de: 'Die Polizei fragt nach der Seriennummer des Handys.', ru: 'Полиция спрашивает серийный номер телефона.', cloze: 'Seriennummer' } },
    { id: 'cyb-a21-08-wiederfinden', icon: 'SearchCheck', de: 'wiederfinden', pos: 'verb', ru: 'находить (потерянное)', forms: 'er findet wieder · hat wiedergefunden', note: 'Отделяемая приставка: er findet … wieder.', example: { de: 'Zum Glück hat er sein Handy wiedergefunden.', ru: 'К счастью, он нашёл свой телефон.', cloze: 'wiedergefunden' } },
    { id: 'cyb-a21-08-aktivieren', icon: 'ToggleRight', de: 'aktivieren', pos: 'verb', ru: 'включать, активировать', forms: 'er aktiviert · hat aktiviert', note: 'Антоним: deaktivieren — отключать.', collocation: { de: 'eine Funktion aktivieren', ru: 'включить функцию', accept: ['die Funktion aktivieren'] }, example: { de: 'Aktiviere die Ortung auf deinem Handy!', ru: 'Включи определение местоположения на своём телефоне!', cloze: 'Aktiviere' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Eine Taschenlampe will alles wissen',
      de: `Emir studiert Elektrotechnik an der TU Wien. Am Wochenende sucht er im App-Store eine Taschenlampen-App. Er findet eine kostenlose App und lädt sie auf sein Gerät herunter.

Beim ersten Start will die App viele Rechte: den Standort, die Kontakte und das Mikrofon. Emir wundert sich, weil eine Taschenlampe nur das Licht braucht. Er fragt Katharina. Sie arbeitet als Tutorin im Sicherheitslabor der Uni.

Katharina sagt: „Verweigere der App den Zugriff! Gute Apps fragen nur nach Rechten, die sie wirklich brauchen. Lies auch die Bewertungen, denn nicht jeder Entwickler ist vertrauenswürdig.“

Emir löscht die App. Jetzt prüft er bei jeder neuen App die App-Berechtigungen. Er erlaubt nur, was die App wirklich braucht.`,
      ru: `Эмир изучает электротехнику в Венском техническом университете. На выходных он ищет в магазине приложений приложение-фонарик. Он находит бесплатное приложение и скачивает его на своё устройство.

При первом запуске приложение хочет много прав: местоположение, контакты и микрофон. Эмир удивляется, потому что фонарику нужен только свет. Он спрашивает Катарину. Она работает тьютором в лаборатории безопасности университета.

Катарина говорит: «Запрети приложению доступ! Хорошие приложения просят только те права, которые им действительно нужны. Читай также отзывы, потому что не каждый разработчик заслуживает доверия».

Эмир удаляет приложение. Теперь при каждом новом приложении он проверяет разрешения. Он разрешает только то, что приложению действительно нужно.`,
      gloss: {
        emir: 'Эмир (имя)', katharina: 'Катарина (имя)', elektrotechnik: 'электротехника', tu: 'TU — технический университет', wien: 'Вена',
        'taschenlampen-app': 'приложение-фонарик', taschenlampe: 'фонарик', kostenlose: 'бесплатное', app: 'приложение', apps: 'приложения', lädt: 'загружает (lädt herunter — скачивает)', herunter: 'вниз (lädt herunter — скачивает)',
        beim: 'при', start: 'запуск', rechte: 'права', rechten: 'права (дат. мн.)', mikrofon: 'микрофон', wundert: 'удивляет (sich wundern — удивляться)', licht: 'свет',
        tutorin: 'тьютор (ж.), ассистентка', sicherheitslabor: 'лаборатория безопасности', verweigere: 'запрети, откажи', zugriff: 'доступ', fragen: 'спрашивают (fragen nach — просить)',
        lies: 'читай', bewertungen: 'отзывы, оценки', entwickler: 'разработчик', löscht: 'удаляет', prüft: 'проверяет', erlaubt: 'разрешает', jetzt: 'теперь',
        rät: 'советует', teuer: 'дорогой', zu: 'слишком', kaufen: 'купить', schreibt: 'пишет', bewertung: 'отзыв', gibt: 'даёт', spiel: 'игра', 'wetter-app': 'приложение погоды',
      },
      questions: [
        { q: 'Was sucht Emir im App-Store?', ru: 'Что Эмир ищет в магазине приложений?', options: ['Eine Taschenlampen-App', 'Eine Wetter-App', 'Ein Spiel'], answer: 'Eine Taschenlampen-App' },
        { q: 'Warum wundert sich Emir?', ru: 'Почему Эмир удивляется?', options: ['Die App will zu viele Rechte.', 'Die App ist sehr teuer.', 'Die App funktioniert nicht.'], answer: 'Die App will zu viele Rechte.' },
        { q: 'Was rät Katharina?', ru: 'Что советует Катарина?', options: ['Den Zugriff verweigern', 'Alle Rechte erlauben', 'Ein neues Gerät kaufen'], answer: 'Den Zugriff verweigern' },
        { q: 'Was macht Emir am Ende?', ru: 'Что Эмир делает в конце?', options: ['Er löscht die App.', 'Er gibt der App den Standort.', 'Er schreibt eine Bewertung.'], answer: 'Er löscht die App.' },
      ],
      translate: [
        { de: 'Die App will meinen Standort und meine Kontakte.', ru: 'Приложение хочет моё местоположение и мои контакты.', wrongRu: ['Приложение хочет мой микрофон и мои контакты.', 'Приложение не хочет моё местоположение и мои контакты.'] },
        { de: 'Nicht jeder Entwickler ist vertrauenswürdig.', ru: 'Не каждый разработчик заслуживает доверия.', wrongRu: ['Каждый разработчик заслуживает доверия.', 'Не каждое приложение заслуживает доверия.'] },
        { de: 'Ich verweigere der App den Zugriff.', ru: 'Я запрещаю приложению доступ.', wrongRu: ['Я разрешаю приложению доступ.', 'Я запретил приложению доступ.', 'Он запрещает приложению доступ.'] },
      ],
    },
    {
      lesson: 1, title: 'Das Handy ist weg',
      de: `Am Freitagabend fährt Katharina mit der U-Bahn nach Hause. Zu Hause merkt sie: Ihr Handy ist weg! Hat sie es verloren, oder war es ein Diebstahl?

Zum Glück hat sie die Ortung schon vor einem Monat aktiviert. Sie meldet sich am Laptop an und kann das Handy orten. Es ist in einer U-Bahn-Station am Karlsplatz. Sie ruft beim Fundbüro an, aber dort hat niemand ihr Handy.

Ihr Bruder sagt: „Wenn du es nicht wiederfindest, lösch alle Daten aus der Ferne und sperr die SIM-Karte!“

Aber am nächsten Morgen ruft das Fundbüro an: Eine Frau hat das Handy in der U-Bahn gefunden und abgegeben. Am Nachmittag holt Katharina es ab. Ihre Daten sind sicher, weil das Handy gesperrt war.`,
      ru: `В пятницу вечером Катарина едет домой на метро. Дома она замечает: её телефона нет! Она его потеряла или это была кража?

К счастью, ещё месяц назад она включила определение местоположения. Она входит в аккаунт на ноутбуке и может определить, где телефон. Он на станции метро на Карлсплац. Она звонит в бюро находок, но там её телефона нет.

Её брат говорит: «Если ты его не найдёшь, удалённо сотри все данные и заблокируй SIM-карту!»

Но на следующее утро звонят из бюро находок: одна женщина нашла телефон в метро и сдала его. После обеда Катарина забирает его. Её данные в безопасности, потому что телефон был заблокирован.`,
      gloss: {
        katharina: 'Катарина (имя)', freitagabend: 'вечер пятницы', fährt: 'едет', 'u-bahn': 'метро (в Вене)', hause: 'дом (nach Hause — домой; zu Hause — дома)', merkt: 'замечает', handy: 'мобильный телефон', weg: 'пропал, нет (на месте)',
        verloren: 'потеряла', glück: 'счастье (zum Glück — к счастью)', ortung: 'определение местоположения', vor: 'назад (vor einem Monat — месяц назад)', aktiviert: 'включила, активировала',
        meldet: 'входит (sich anmelden)', laptop: 'ноутбук', orten: 'определить местоположение', 'u-bahn-station': 'станция метро', karlsplatz: 'Карлсплац (площадь в Вене)', ruft: 'звонит (anrufen)', fundbüro: 'бюро находок', niemand: 'никто',
        wiederfindest: '(ты) найдёшь (потерянное)', lösch: 'сотри, удали', daten: 'данные', ferne: 'даль (aus der Ferne — удалённо)', sperr: 'заблокируй', 'sim-karte': 'SIM-карта',
        nächsten: 'следующее', gefunden: 'нашла', abgegeben: 'сдала', nachmittag: 'после обеда, вторая половина дня', holt: 'забирает (abholen)', ab: 'приставка (holt ab — забирает)', sicher: 'в безопасности', gesperrt: 'заблокирован',
        rät: 'советует', polizei: 'полиция', anrufen: 'позвонить', neues: 'новый', kaufen: 'купить', geortet: 'определило местоположение', woche: 'неделя', finden: 'найти',
      },
      questions: [
        { q: 'Wo hat Katharina ihr Handy verloren?', ru: 'Где Катарина потеряла свой телефон?', options: ['In der U-Bahn', 'An der Uni', 'Zu Hause'], answer: 'In der U-Bahn' },
        { q: 'Warum kann Katharina das Handy orten?', ru: 'Почему Катарина может определить, где телефон?', options: ['Sie hat die Ortung aktiviert.', 'Ihr Bruder hat eine App.', 'Das Fundbüro hat es geortet.'], answer: 'Sie hat die Ortung aktiviert.' },
        { q: 'Was rät ihr Bruder?', ru: 'Что советует её брат?', options: ['Die Daten aus der Ferne löschen', 'Ein neues Handy kaufen', 'Die Polizei anrufen'], answer: 'Die Daten aus der Ferne löschen' },
        { q: 'Wer ruft am nächsten Morgen an?', ru: 'Кто звонит на следующее утро?', options: ['Das Fundbüro', 'Die Polizei', 'Ihr Bruder'], answer: 'Das Fundbüro' },
      ],
      translate: [
        { de: 'Ich habe mein Handy in der U-Bahn verloren.', ru: 'Я потерял свой телефон в метро.', wrongRu: ['Я нашёл свой телефон в метро.', 'Я потерял свой телефон в автобусе.', 'Я потеряю свой телефон в метро.'] },
        { de: 'Mit der Ortung kann man das Handy finden.', ru: 'С помощью определения местоположения можно найти телефон.', wrongRu: ['С помощью определения местоположения нельзя найти телефон.', 'С помощью бюро находок можно найти телефон.'] },
        { de: 'Sie löscht die Daten aus der Ferne.', ru: 'Она удалённо стирает данные.', wrongRu: ['Она удалённо сохраняет данные.', 'Он удалённо стирает данные.', 'Она удалённо стёрла данные.'] },
      ],
    },
  ],
};
