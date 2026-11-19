import type { Module } from '../types.ts';

// A1.2 informatik 07: the computer does not work (lesson 0), calling support and repair (lesson 1).

export const module: Module = {
  id: 'informatik-a12-07-probleme', sphere: 'informatik', level: 'A1.2',
  title: 'Es funktioniert nicht', subtitle: 'Завис, сломался, перезагрузить, позвонить в поддержку: когда техника не работает.',
  words: [
    { id: 'inf-a12-07-problem', icon: 'TriangleAlert', de: 'Problem', pos: 'noun', article: 'das', plural: 'Probleme', ru: 'проблема', collocation: { de: 'ein Problem lösen', ru: 'решить проблему', accept: ['das Problem lösen'] }, example: { de: 'Ich habe ein Problem mit dem Drucker.', ru: 'У меня проблема с принтером.', cloze: 'Problem' } },
    { id: 'inf-a12-07-neu-starten', icon: 'RotateCw', de: 'neu starten', pos: 'verb', ru: 'перезагружать, перезапускать', forms: 'er startet neu · hat neu gestartet', note: 'Пишется раздельно; neu уходит в конец: Ich starte den Computer neu.', collocation: { de: 'den Computer neu starten', ru: 'перезагрузить компьютер', accept: ['den Laptop neu starten'] }, example: { de: 'Starte den Computer einfach neu!', ru: 'Просто перезагрузи компьютер!', cloze: 'Starte' } },
    { id: 'inf-a12-07-reparieren', icon: 'Wrench', imageQuery: 'repairing a laptop', de: 'reparieren', pos: 'verb', ru: 'чинить, ремонтировать', forms: 'er repariert · hat repariert', collocation: { de: 'den Computer reparieren', ru: 'починить компьютер', accept: ['einen Computer reparieren'] }, example: { de: 'Kannst du meinen Laptop reparieren?', ru: 'Ты можешь починить мой ноутбук?', cloze: 'reparieren' } },
    { id: 'inf-a12-07-hilfe', icon: 'LifeBuoy', de: 'Hilfe', pos: 'noun', article: 'die', ru: 'помощь', note: 'Обычно без мн. ч. Hilfe! — Помогите!', collocation: { de: 'um Hilfe bitten', ru: 'просить о помощи' }, example: { de: 'Ich brauche deine Hilfe.', ru: 'Мне нужна твоя помощь.', cloze: 'Hilfe' } },
    { id: 'inf-a12-07-haengen', icon: 'Loader', de: 'hängen', pos: 'verb', ru: 'зависать (о компьютере); висеть', forms: 'er hängt · hat gehangen', note: 'Der Computer hängt — компьютер завис. Perfekt: hat gehangen (в Австрии и на юге Германии — ist gehangen).', example: { de: 'Mein Computer hängt schon wieder.', ru: 'Мой компьютер опять завис.', cloze: 'hängt' } },
    { id: 'inf-a12-07-techniker', icon: 'UserCog', imageQuery: 'computer technician', de: 'Techniker', pos: 'noun', article: 'der', plural: 'Techniker', ru: 'техник', note: 'Женщина: die Technikerin.', example: { de: 'Der Techniker kommt am Nachmittag.', ru: 'Техник придёт днём.', cloze: 'Techniker' } },
    { id: 'inf-a12-07-kaputt', icon: 'MonitorX', imageQuery: 'broken laptop screen', de: 'kaputt', pos: 'adj', ru: 'сломанный', note: 'kaputtgehen (слитно) — сломаться.', example: { de: 'Die Maus ist leider kaputt.', ru: 'Мышь, к сожалению, сломана.', cloze: 'kaputt' } },
    { id: 'inf-a12-07-loesung', icon: 'CircleCheckBig', de: 'Lösung', pos: 'noun', article: 'die', plural: 'Lösungen', ru: 'решение', collocation: { de: 'eine Lösung finden', ru: 'найти решение', accept: ['die Lösung finden'] }, example: { de: 'Wir finden bestimmt eine Lösung.', ru: 'Мы обязательно найдём решение.', cloze: 'Lösung' } },

    { id: 'inf-a12-07-anrufen', icon: 'Phone', imageQuery: 'person making a phone call', de: 'anrufen', pos: 'verb', ru: 'звонить (по телефону)', forms: 'er ruft an · hat angerufen', note: 'Отделяемая приставка; + Akk: ich rufe dich an (не «тебе»!).', example: { de: 'Ruf mich morgen an!', ru: 'Позвони мне завтра!', cloze: 'Ruf' } },
    { id: 'inf-a12-07-hotline', icon: 'Headset', imageQuery: 'call center headset', de: 'Hotline', pos: 'noun', article: 'die', plural: 'Hotlines', ru: 'горячая линия, телефон поддержки', collocation: { de: 'die Hotline anrufen', ru: 'позвонить на горячую линию' }, example: { de: 'Die Hotline ist heute geschlossen.', ru: 'Горячая линия сегодня не работает.', cloze: 'Hotline' } },
    { id: 'inf-a12-07-warten', icon: 'Hourglass', de: 'warten', pos: 'verb', ru: 'ждать', forms: 'er wartet · hat gewartet', note: 'warten auf + Akk: Ich warte auf den Techniker.', collocation: { de: 'auf eine Antwort warten', ru: 'ждать ответа' }, example: { de: 'Ich warte schon zehn Minuten.', ru: 'Я жду уже десять минут.', cloze: 'warte' } },
    { id: 'inf-a12-07-garantie', icon: 'BadgeCheck', imageQuery: 'warranty card', de: 'Garantie', pos: 'noun', article: 'die', plural: 'Garantien', ru: 'гарантия', collocation: { de: 'noch Garantie haben', ru: 'быть ещё на гарантии' }, example: { de: 'Das Handy hat noch zwei Jahre Garantie.', ru: 'На телефон ещё два года гарантии.', cloze: 'Garantie' } },
    { id: 'inf-a12-07-reparatur', icon: 'Hammer', imageQuery: 'electronics repair shop', de: 'Reparatur', pos: 'noun', article: 'die', plural: 'Reparaturen', ru: 'ремонт', example: { de: 'Die Reparatur kostet nichts.', ru: 'Ремонт ничего не стоит.', cloze: 'Reparatur' } },
    { id: 'inf-a12-07-tipp', icon: 'Lightbulb', de: 'Tipp', pos: 'noun', article: 'der', plural: 'Tipps', ru: 'совет, подсказка', collocation: { de: 'einen Tipp geben', ru: 'дать совет' }, example: { de: 'Hast du einen Tipp für mich?', ru: 'У тебя есть совет для меня?', cloze: 'Tipp' } },
    { id: 'inf-a12-07-ausprobieren', icon: 'TestTube', de: 'ausprobieren', pos: 'verb', ru: 'пробовать, испытывать', forms: 'er probiert aus · hat ausprobiert', note: 'Отделяемая приставка: ich probiere es aus.', collocation: { de: 'etwas Neues ausprobieren', ru: 'попробовать что-то новое' }, example: { de: 'Ich probiere die neue App aus.', ru: 'Я пробую новое приложение.', cloze: 'probiere' } },
    { id: 'inf-a12-07-schwarz', icon: 'MonitorOff', de: 'schwarz', pos: 'adj', ru: 'чёрный', note: 'Der Bildschirm bleibt schwarz — экран остаётся чёрным (ничего не показывает).', example: { de: 'Der Bildschirm ist plötzlich schwarz.', ru: 'Экран вдруг стал чёрным.', cloze: 'schwarz' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Der Computer hängt',
      de: `Felix macht am Computer eine Hausübung für Informatik. Plötzlich hängt der Computer. Die Maus geht nicht und die Tastatur auch nicht. Felix ruft seinen Vater: „Hilfe! Mein Computer ist kaputt!“

Der Vater sagt: „Starte den Computer neu. Das ist oft die Lösung.“ Felix startet den Computer neu, aber das Problem bleibt.

Am Montag geht Felix zu Herrn Huber. Er ist Techniker in der Schule. Herr Huber findet das Problem schnell: Ein Programm ist zu alt. Er repariert den Computer in zehn Minuten. Felix ist froh. Zum Glück hat er die Datei gespeichert!`,
      ru: `Феликс делает на компьютере домашнее задание по информатике. Вдруг компьютер зависает. Мышь не работает, и клавиатура тоже. Феликс зовёт папу: «Помогите! Мой компьютер сломался!»

Папа говорит: «Перезагрузи компьютер. Часто это и есть решение». Феликс перезагружает компьютер, но проблема остаётся.

В понедельник Феликс идёт к господину Хуберу. Он техник в школе. Господин Хубер быстро находит проблему: одна программа слишком старая. Он чинит компьютер за десять минут. Феликс рад. К счастью, он сохранил файл!`,
      gloss: {
        felix: 'Феликс (имя)', hausübung: 'домашнее задание (австр.)', informatik: 'информатика', hängt: 'зависает', geht: 'идёт; (о технике) работает',
        ruft: 'зовёт', starte: 'запусти; (starte … neu) перезагрузи', startet: 'запускает; (startet … neu) перезагружает', neu: 'новый; (neu starten) заново',
        herrn: 'господину (дат.)', huber: 'Хубер (фамилия)', repariert: 'чинит', glück: 'счастье; (zum Glück) к счастью', gespeichert: 'сохранил',
        spiel: 'игра', video: 'видео', kauf: 'купи!', an: 'на; (ruf … an) приставка от anrufen', ruf: 'позвони (anrufen)',
      },
      questions: [
        { q: 'Was macht Felix am Computer?', ru: 'Что Феликс делает на компьютере?', options: ['Eine Hausübung', 'Ein Spiel', 'Ein Video'], answer: 'Eine Hausübung' },
        { q: 'Was sagt der Vater?', ru: 'Что говорит папа?', options: ['Starte den Computer neu.', 'Kauf einen neuen Computer.', 'Ruf den Techniker an.'], answer: 'Starte den Computer neu.' },
        { q: 'Wer repariert den Computer?', ru: 'Кто чинит компьютер?', options: ['Herr Huber', 'Der Vater', 'Felix'], answer: 'Herr Huber' },
      ],
      translate: [
        { de: 'Mein Computer hängt schon wieder.', ru: 'Мой компьютер опять завис.', wrongRu: ['Мой компьютер опять сломался.', 'Мой телефон опять завис.'] },
        { de: 'Der Techniker repariert den Computer.', ru: 'Техник чинит компьютер.', wrongRu: ['Техник покупает компьютер.', 'Учитель чинит компьютер.'] },
        { de: 'Das ist oft die Lösung.', ru: 'Часто это и есть решение.', wrongRu: ['Это никогда не решение.', 'Часто это и есть проблема.'] },
      ],
    },
    {
      lesson: 1, title: 'Kein Ton!',
      de: `Laura hat ein neues Tablet. Sie will ein Video sehen, aber es gibt keinen Ton. Sie probiert viel aus: Sie macht den Ton lauter und startet das Tablet neu. Nichts hilft.

Ihre Freundin Nora hat einen Tipp: „Ruf die Hotline an! Das Tablet hat noch Garantie.“ Laura ruft an. Sie muss zwanzig Minuten warten. Dann sagt ein Mann: „Schicken Sie das Tablet zu uns. Die Reparatur ist kostenlos.“

Nach einer Woche kommt das Tablet zurück. Laura probiert es sofort aus. Der Ton ist wieder da!`,
      ru: `У Лауры новый планшет. Она хочет посмотреть видео, но звука нет. Она много чего пробует: делает звук громче и перезагружает планшет. Ничего не помогает.

У её подруги Норы есть совет: «Позвони на горячую линию! Планшет ещё на гарантии». Лаура звонит. Ей приходится ждать двадцать минут. Потом мужчина говорит: «Пришлите планшет нам. Ремонт бесплатный».

Через неделю планшет возвращается. Лаура сразу пробует его. Звук снова есть!`,
      gloss: {
        laura: 'Лаура (имя)', nora: 'Нора (имя)', tablet: 'планшет', video: 'видео', ton: 'звук', lauter: 'громче', startet: 'запускает; (startet … neu) перезагружает', neu: 'новый; (neu starten) заново',
        probiert: 'пробует (ausprobieren)', aus: 'из; (probiert … aus) приставка от ausprobieren', ruf: 'позвони (anrufen)', ruft: 'звонит (anrufen)', an: 'на; (ruft … an) приставка от anrufen',
        zurück: 'назад, обратно', nach: 'после; (nach einer Woche) через', kamera: 'камера', euro: 'евро', kostet: 'стоит (о цене)', lange: 'долго; (wie lange) сколько времени',
      },
      questions: [
        { q: 'Was funktioniert beim Tablet nicht?', ru: 'Что не работает в планшете?', options: ['Der Ton', 'Der Bildschirm', 'Die Kamera'], answer: 'Der Ton' },
        { q: 'Wer hat einen Tipp für Laura?', ru: 'У кого есть совет для Лауры?', options: ['Nora', 'Der Mann', 'Ihr Bruder'], answer: 'Nora' },
        { q: 'Wie lange muss Laura warten?', ru: 'Сколько Лауре приходится ждать?', options: ['Zwanzig Minuten', 'Zehn Minuten', 'Eine Woche'], answer: 'Zwanzig Minuten' },
        { q: 'Was kostet die Reparatur?', ru: 'Сколько стоит ремонт?', options: ['Nichts', 'Zwanzig Euro', 'Hundert Euro'], answer: 'Nichts' },
      ],
      translate: [
        { de: 'Laura ruft die Hotline an.', ru: 'Лаура звонит на горячую линию.', wrongRu: ['Лаура пишет на горячую линию.', 'Нора звонит на горячую линию.'] },
        { de: 'Das Tablet hat noch Garantie.', ru: 'Планшет ещё на гарантии.', wrongRu: ['Планшет уже не на гарантии.', 'Телефон ещё на гарантии.'] },
        { de: 'Die Reparatur ist kostenlos.', ru: 'Ремонт бесплатный.', wrongRu: ['Ремонт дорогой.', 'Доставка бесплатная.'] },
      ],
    },
  ],
};
