import type { Module } from '../types.ts';

// A2.1 cyber: safe browsing — connection, lock icon, cookies (lesson 0), warnings, redirects, history (lesson 1).

export const module: Module = {
  id: 'cyber-a21-06-surfen', sphere: 'cyber', level: 'A2.1',
  title: 'Sicher surfen', subtitle: 'Защищённое соединение, куки, предупреждения браузера: как не попасться в сети.',
  words: [
    { id: 'cyb-a21-06-verbindung', icon: 'ArrowLeftRight', de: 'Verbindung', pos: 'noun', article: 'die', plural: 'Verbindungen', ru: 'соединение, подключение', note: 'Verbindung zu + Dat: соединение с чем-то.', collocation: { de: 'eine sichere Verbindung', ru: 'безопасное соединение', accept: ['die sichere Verbindung'] }, example: { de: 'Die Verbindung zur Bank ist verschlüsselt.', ru: 'Соединение с банком зашифровано.', cloze: 'Verbindung' } },
    { id: 'cyb-a21-06-verschluesselt', icon: 'FileLock', de: 'verschlüsselt', pos: 'adj', ru: 'зашифрованный', note: 'Причастие от verschlüsseln. Противоположность: unverschlüsselt.', example: { de: 'Diese Seite sendet nur verschlüsselte Daten.', ru: 'Этот сайт отправляет только зашифрованные данные.', cloze: 'verschlüsselte' } },
    { id: 'cyb-a21-06-cookie', icon: 'Cookie', de: 'Cookie', pos: 'noun', article: 'das', plural: 'Cookies', ru: 'cookie, куки', note: 'Обычно das Cookie (реже der Cookie). Произносится «куки».', collocation: { de: 'Cookies akzeptieren', ru: 'принять куки', accept: ['alle Cookies akzeptieren', 'die Cookies akzeptieren'] }, example: { de: 'Die Webseite speichert ein Cookie auf meinem Laptop.', ru: 'Сайт сохраняет куки на моём ноутбуке.', cloze: 'Cookie' } },
    { id: 'cyb-a21-06-adressleiste', icon: 'PanelTop', de: 'Adressleiste', pos: 'noun', article: 'die', plural: 'Adressleisten', ru: 'адресная строка', parts: ['Adress', 'leiste'], imageQuery: 'browser address bar', example: { de: 'Schau immer zuerst in die Adressleiste!', ru: 'Всегда сначала смотри в адресную строку!', cloze: 'Adressleiste' } },
    { id: 'cyb-a21-06-schloss', icon: 'LockKeyhole', de: 'Schloss', pos: 'noun', article: 'das', plural: 'Schlösser', ru: 'замок (в т. ч. значок в браузере)', imageQuery: 'padlock', note: 'Также «дворец, замок»: Schloss Schönbrunn.', example: { de: 'Neben der Adresse siehst du ein kleines Schloss.', ru: 'Рядом с адресом ты видишь маленький замок.', cloze: 'Schloss' } },
    { id: 'cyb-a21-06-erweiterung', icon: 'Blocks', de: 'Erweiterung', pos: 'noun', article: 'die', plural: 'Erweiterungen', ru: 'расширение (браузера)', note: 'От erweitern — расширять.', collocation: { de: 'eine Erweiterung installieren', ru: 'установить расширение', accept: ['die Erweiterung installieren'] }, example: { de: 'Installiere nur Erweiterungen aus dem offiziellen Store.', ru: 'Устанавливай расширения только из официального магазина.', cloze: 'Erweiterungen' } },
    { id: 'cyb-a21-06-werbeblocker', icon: 'Ban', de: 'Werbeblocker', pos: 'noun', article: 'der', plural: 'Werbeblocker', ru: 'блокировщик рекламы', parts: ['Werbe', 'blocker'], note: 'Werbung + Blocker. Синоним: der Adblocker.', example: { de: 'Mein Werbeblocker stoppt viele nervige Fenster.', ru: 'Мой блокировщик рекламы останавливает много назойливых окон.', cloze: 'Werbeblocker' } },
    { id: 'cyb-a21-06-akzeptieren', icon: 'CircleCheck', de: 'akzeptieren', pos: 'verb', ru: 'принимать, соглашаться (с чем-то)', forms: 'er akzeptiert · hat akzeptiert', note: '+ Akk. Глаголы на -ieren образуют Perfekt без ge-.', collocation: { de: 'die Bedingungen akzeptieren', ru: 'принять условия' }, example: { de: 'Ich akzeptiere nur die notwendigen Cookies.', ru: 'Я принимаю только необходимые куки.', cloze: 'akzeptiere' } },

    { id: 'cyb-a21-06-warnung', icon: 'OctagonAlert', de: 'Warnung', pos: 'noun', article: 'die', plural: 'Warnungen', ru: 'предупреждение', note: 'От warnen — предупреждать.', collocation: { de: 'eine Warnung ignorieren', ru: 'игнорировать предупреждение', accept: ['die Warnung ignorieren'] }, example: { de: 'Der Browser zeigt eine rote Warnung.', ru: 'Браузер показывает красное предупреждение.', cloze: 'Warnung' } },
    { id: 'cyb-a21-06-weiterleitung', icon: 'Forward', de: 'Weiterleitung', pos: 'noun', article: 'die', plural: 'Weiterleitungen', ru: 'перенаправление, редирект', parts: ['Weiter', 'leitung'], note: 'От weiterleiten — перенаправлять, пересылать.', example: { de: 'Die Weiterleitung führt auf eine falsche Seite.', ru: 'Перенаправление ведёт на чужую (не ту) страницу.', cloze: 'Weiterleitung' } },
    { id: 'cyb-a21-06-inkognitomodus', icon: 'EyeOff', de: 'Inkognitomodus', pos: 'noun', article: 'der', ru: 'режим инкогнито', parts: ['Inkognito', 'modus'], note: 'Браузер не сохраняет историю, но сайты и провайдер всё равно видят, что ты делаешь.', example: { de: 'Im Inkognitomodus speichert der Browser keinen Verlauf.', ru: 'В режиме инкогнито браузер не сохраняет историю.', cloze: 'Inkognitomodus' } },
    { id: 'cyb-a21-06-verlauf', icon: 'History', de: 'Verlauf', pos: 'noun', article: 'der', plural: 'Verläufe', ru: 'история (браузера)', note: 'Также «ход, течение»: im Verlauf des Tages.', collocation: { de: 'den Verlauf löschen', ru: 'удалить историю', accept: ['den Verlauf leeren'] }, example: { de: 'Im Verlauf stehen alle besuchten Seiten.', ru: 'В истории записаны все посещённые сайты.', cloze: 'Verlauf' } },
    { id: 'cyb-a21-06-leeren', icon: 'Trash2', de: 'leeren', pos: 'verb', ru: 'очищать, опустошать', forms: 'er leert · hat geleert', note: '+ Akk: den Cache, den Papierkorb leeren.', collocation: { de: 'den Cache leeren', ru: 'очистить кэш', accept: ['den Browser-Cache leeren'] }, example: { de: 'Leere nach der Arbeit den Verlauf!', ru: 'Очищай историю после работы!', cloze: 'Leere' } },
    { id: 'cyb-a21-06-serioes', icon: 'BadgeCheck', de: 'seriös', pos: 'adj', ru: 'надёжный, солидный (о сайте, фирме)', note: 'Ложный друг: не «серьёзный» по характеру, а «солидный, заслуживающий доверия». Противоположность: unseriös.', collocation: { de: 'ein seriöser Shop', ru: 'надёжный интернет-магазин', accept: ['ein seriöser Onlineshop'] }, example: { de: 'Ist dieser Onlineshop wirklich seriös?', ru: 'Этот интернет-магазин действительно надёжный?', cloze: 'seriös' } },
    { id: 'cyb-a21-06-pop-up', icon: 'AppWindow', de: 'Pop-up', pos: 'noun', article: 'das', plural: 'Pop-ups', ru: 'всплывающее окно', note: 'Также das Pop-up-Fenster.', example: { de: 'Plötzlich öffnet sich ein Pop-up mit einem Gewinnspiel.', ru: 'Вдруг открывается всплывающее окно с розыгрышем.', cloze: 'Pop-up' } },
    { id: 'cyb-a21-06-wegklicken', icon: 'MousePointerClick', de: 'wegklicken', pos: 'verb', ru: 'закрыть кликом, «смахнуть» (окно, сообщение)', forms: 'er klickt weg · hat weggeklickt', note: 'Разговорное; отделяемая приставка; + Akk: ein Fenster wegklicken.', collocation: { de: 'ein Fenster wegklicken', ru: 'закрыть окно кликом', accept: ['das Fenster wegklicken', 'die Warnung wegklicken'] }, example: { de: 'Sie klickt das Pop-up sofort weg.', ru: 'Она сразу закрывает всплывающее окно.', cloze: 'klickt' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Das kleine Schloss',
      de: `Sara studiert Wirtschaftsinformatik an der TU Wien. Ihr Opa Karl möchte zum ersten Mal online eine Bahnkarte kaufen und ruft sie an. Am Wochenende besucht sie ihn.

Zuerst zeigt Sara ihm die Adressleiste. „Siehst du das kleine Schloss? Das heißt, dass die Verbindung verschlüsselt ist“, erklärt sie. „Wenn das Schloss fehlt, gibst du keine Daten ein.“

Dann öffnet sich ein Fenster mit Cookies. Karl will sofort alles akzeptieren, aber Sara sagt: „Klick lieber auf ‚Nur notwendige Cookies‘.“ Am Ende installiert sie ihrem Opa noch einen Werbeblocker. Eine Erweiterung für Passwörter möchte er nicht: „Das ist mir zu kompliziert!“`,
      ru: `Сара изучает бизнес-информатику в TU Wien. Её дедушка Карл хочет впервые купить онлайн билет на поезд и звонит ей. На выходных она приезжает к нему.

Сначала Сара показывает ему адресную строку. «Видишь маленький замок? Это значит, что соединение зашифровано, — объясняет она. — Если замка нет, ты не вводишь никаких данных».

Потом открывается окно с куки. Карл хочет сразу всё принять, но Сара говорит: «Лучше кликни на „Только необходимые куки“». В конце она ещё устанавливает дедушке блокировщик рекламы. Расширение для паролей он не хочет: «Это для меня слишком сложно!»`,
      gloss: {
        sara: 'Сара (имя)', karl: 'Карл (имя)', wirtschaftsinformatik: 'бизнес-информатика', tu: 'TU — Технический университет', wien: 'Вена', opa: 'дедушка',
        mal: 'раз (zum ersten Mal — впервые)', online: 'онлайн', bahnkarte: 'билет на поезд', besucht: 'навещает', siehst: '(ты) видишь',
        gibst: '(ты) даёшь (gibst … ein — вводишь)', daten: 'данные', öffnet: 'открывает (sich öffnen — открываться)', fenster: 'окно', lieber: 'лучше, охотнее',
        notwendige: 'необходимые', installiert: 'устанавливает', passwörter: 'пароли', kompliziert: 'сложный',
        laptop: 'ноутбук', buch: 'книга', bedeutet: 'означает', seite: 'страница, сайт', aktiv: 'активный, включён', soll: 'должен', betriebssystem: 'операционная система',
      },
      questions: [
        { q: 'Was möchte Opa Karl online kaufen?', ru: 'Что дедушка Карл хочет купить онлайн?', options: ['Eine Bahnkarte', 'Einen Laptop', 'Ein Buch'], answer: 'Eine Bahnkarte' },
        { q: 'Was bedeutet das kleine Schloss?', ru: 'Что означает маленький замок?', options: ['Die Verbindung ist verschlüsselt.', 'Die Seite ist kostenlos.', 'Der Werbeblocker ist aktiv.'], answer: 'Die Verbindung ist verschlüsselt.' },
        { q: 'Welche Cookies soll Karl akzeptieren?', ru: 'Какие куки Карлу стоит принять?', options: ['Nur notwendige Cookies', 'Alle Cookies', 'Keine Cookies'], answer: 'Nur notwendige Cookies' },
        { q: 'Was installiert Sara am Ende?', ru: 'Что Сара устанавливает в конце?', options: ['Einen Werbeblocker', 'Eine Erweiterung für Passwörter', 'Ein neues Betriebssystem'], answer: 'Einen Werbeblocker' },
      ],
      translate: [
        { de: 'Die Verbindung ist verschlüsselt.', ru: 'Соединение зашифровано.', wrongRu: ['Соединение не зашифровано.', 'Сообщение зашифровано.'] },
        { de: 'Siehst du das Schloss in der Adressleiste?', ru: 'Ты видишь замок в адресной строке?', wrongRu: ['Ты видишь ссылку в адресной строке?', 'Вы видите замок в адресной строке?'] },
        { de: 'Ich akzeptiere nur notwendige Cookies.', ru: 'Я принимаю только необходимые куки.', wrongRu: ['Я принимаю все куки.', 'Я удаляю только необходимые куки.', 'Он принимает только необходимые куки.'] },
      ],
    },
    {
      lesson: 1, title: 'Ein Handy gewonnen?',
      de: `David wohnt in einem Studentenheim in Wien. Am Abend sucht er im Internet billige Kopfhörer. Plötzlich öffnet sich ein Pop-up: „Gratulation! Sie haben ein Handy gewonnen!“ David will den Button schon drücken, aber dann sieht er eine Warnung vom Browser.

Die Seite ist nicht seriös, denn eine Weiterleitung hat ihn auf eine fremde Adresse geschickt. David klickt das Fenster sofort weg.

Am nächsten Tag erzählt er seiner Mitbewohnerin Sara davon. Sie sagt: „Gut gemacht! Leere jetzt deinen Verlauf und deinen Cache.“ David fragt, ob der Inkognitomodus ihn schützt. „Nein“, lacht Sara. „Der Inkognitomodus speichert nur keinen Verlauf. Gegen Betrug hilft er nicht.“`,
      ru: `Давид живёт в студенческом общежитии в Вене. Вечером он ищет в интернете дешёвые наушники. Вдруг открывается всплывающее окно: «Поздравляем! Вы выиграли телефон!» Давид уже хочет нажать на кнопку, но тут видит предупреждение браузера.

Сайт ненадёжный: перенаправление отправило его на чужой адрес. Давид сразу закрывает окно.

На следующий день он рассказывает об этом своей соседке по квартире Саре. Она говорит: «Молодец! Теперь очисти историю и кэш». Давид спрашивает, защищает ли его режим инкогнито. «Нет, — смеётся Сара. — Режим инкогнито просто не сохраняет историю. От мошенничества он не помогает».`,
      gloss: {
        david: 'Давид (имя)', sara: 'Сара (имя)', wien: 'Вена', studentenheim: 'студенческое общежитие', internet: 'интернет', billige: 'дешёвые', kopfhörer: 'наушники',
        öffnet: 'открывает (sich öffnen — открываться)', gratulation: 'поздравляем!', handy: 'мобильный телефон', gewonnen: 'выиграли', button: 'кнопка', sieht: 'видит',
        browser: 'браузер', seite: 'страница, сайт', fremde: 'чужой', adresse: 'адрес', geschickt: 'отправил(а)', schließt: 'закрывает', fenster: 'окно',
        erzählt: 'рассказывает', seiner: 'своей', anruft: 'звонит (anrufen)', mitbewohnerin: 'соседка по квартире', davon: 'об этом', gemacht: '(gut gemacht — молодец)', cache: 'кэш', schützt: 'защищает',
        lacht: 'смеётся', speichert: 'сохраняет', betrug: 'мошенничество', verschwindet: 'исчезает', automatisch: 'автоматически', jedem: 'любого, каждого',
      },
      questions: [
        { q: 'Was sucht David im Internet?', ru: 'Что Давид ищет в интернете?', options: ['Billige Kopfhörer', 'Ein neues Handy', 'Ein Studentenheim'], answer: 'Billige Kopfhörer' },
        { q: 'Warum drückt David den Button nicht?', ru: 'Почему Давид не нажимает на кнопку?', options: ['Weil er eine Warnung vom Browser sieht.', 'Weil Sara ihn anruft.', 'Weil das Pop-up verschwindet.'], answer: 'Weil er eine Warnung vom Browser sieht.' },
        { q: 'Warum ist die Seite nicht seriös?', ru: 'Почему сайт ненадёжный?', options: ['Eine Weiterleitung hat ihn auf eine fremde Adresse geschickt.', 'Die Seite hat keinen Cache.', 'Die Kopfhörer sind zu billig.'], answer: 'Eine Weiterleitung hat ihn auf eine fremde Adresse geschickt.' },
        { q: 'Was sagt Sara über den Inkognitomodus?', ru: 'Что Сара говорит о режиме инкогнито?', options: ['Er speichert keinen Verlauf, aber er hilft nicht gegen Betrug.', 'Er schützt vor jedem Betrug.', 'Er leert den Cache automatisch.'], answer: 'Er speichert keinen Verlauf, aber er hilft nicht gegen Betrug.' },
      ],
      translate: [
        { de: 'Der Browser zeigt eine Warnung.', ru: 'Браузер показывает предупреждение.', wrongRu: ['Браузер показывает рекламу.', 'Браузер не показывает предупреждение.'] },
        { de: 'Diese Seite ist nicht seriös.', ru: 'Этот сайт ненадёжный.', wrongRu: ['Этот сайт надёжный.', 'Это приложение ненадёжное.'] },
        { de: 'Leere bitte deinen Verlauf!', ru: 'Очисти, пожалуйста, свою историю!', wrongRu: ['Сохрани, пожалуйста, свою историю!', 'Очисти, пожалуйста, свой кэш!'] },
      ],
    },
  ],
};
