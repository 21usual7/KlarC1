import type { Module } from '../types.ts';

// A2.2 cyber 06: penetration test — contract and scope (lesson 0), testing and report (lesson 1).

export const module: Module = {
  id: 'cyber-a22-06-penetrationstest', sphere: 'cyber', level: 'A2.2',
  title: 'Penetrationstest', subtitle: 'Заказ, договор, объём работ и отчёт: как легально взламывают по заказу.',
  words: [
    { id: 'cyb-a22-06-penetrationstest', icon: 'Radar', de: 'Penetrationstest', pos: 'noun', article: 'der', plural: 'Penetrationstests', ru: 'тест на проникновение, пентест', parts: ['Penetrations', 'test'], note: 'Разговорно: der Pentest. Тот, кто его проводит, — der Pentester.', collocation: { de: 'einen Penetrationstest durchführen', ru: 'провести тест на проникновение', accept: ['den Penetrationstest durchführen'] }, example: { de: 'Die Bank lässt jedes Jahr einen Penetrationstest machen.', ru: 'Банк каждый год заказывает тест на проникновение.', cloze: 'Penetrationstest' } },
    { id: 'cyb-a22-06-auftrag', icon: 'ClipboardList', de: 'Auftrag', pos: 'noun', article: 'der', plural: 'Aufträge', ru: 'заказ, поручение', note: 'der Auftraggeber — заказчик. im Auftrag von + Dat — по поручению.', collocation: { de: 'einen Auftrag bekommen', ru: 'получить заказ', accept: ['den Auftrag bekommen', 'einen Auftrag erhalten'] }, example: { de: 'Wir arbeiten nur mit einem klaren Auftrag.', ru: 'Мы работаем только с чётким заказом.', cloze: 'Auftrag' } },
    { id: 'cyb-a22-06-umfang', icon: 'Scan', de: 'Umfang', pos: 'noun', article: 'der', plural: 'Umfänge', ru: 'объём, рамки (работ)', note: 'В пентесте — scope: что именно можно тестировать.', collocation: { de: 'den Umfang festlegen', ru: 'определить объём работ', accept: ['den Umfang vereinbaren'] }, example: { de: 'Der Umfang steht genau im Vertrag.', ru: 'Объём работ точно указан в договоре.', cloze: 'Umfang' } },
    { id: 'cyb-a22-06-erlaubt', icon: 'CircleCheckBig', de: 'erlaubt', pos: 'adj', ru: 'разрешённый, разрешено', note: 'От erlauben. Противоположность: verboten.', example: { de: 'Ein Test ohne Vertrag ist nicht erlaubt.', ru: 'Тест без договора не разрешён.', cloze: 'erlaubt' } },
    { id: 'cyb-a22-06-vertrag', icon: 'ScrollText', de: 'Vertrag', pos: 'noun', article: 'der', plural: 'Verträge', ru: 'договор, контракт', imageQuery: 'signing a contract', collocation: { de: 'einen Vertrag unterschreiben', ru: 'подписать договор', accept: ['den Vertrag unterschreiben'] }, example: { de: 'Zuerst müssen beide Seiten den Vertrag lesen.', ru: 'Сначала обе стороны должны прочитать договор.', cloze: 'Vertrag' } },
    { id: 'cyb-a22-06-vereinbaren', icon: 'Handshake', de: 'vereinbaren', pos: 'verb', ru: 'договариваться, согласовывать', forms: 'er vereinbart · hat vereinbart', note: 'Приставка ver- неотделяемая; + Akk: einen Termin vereinbaren.', collocation: { de: 'einen Termin vereinbaren', ru: 'договориться о встрече', accept: ['den Termin vereinbaren'] }, example: { de: 'Wir vereinbaren die Regeln vor dem Test.', ru: 'Мы согласовываем правила до теста.', cloze: 'vereinbaren' } },
    { id: 'cyb-a22-06-zielsystem', icon: 'Target', de: 'Zielsystem', pos: 'noun', article: 'das', plural: 'Zielsysteme', ru: 'целевая система', parts: ['Ziel', 'system'], note: 'das Ziel (цель) + das System.', example: { de: 'Der Webserver ist das wichtigste Zielsystem.', ru: 'Веб-сервер — самая важная целевая система.', cloze: 'Zielsystem' } },
    { id: 'cyb-a22-06-unterschrift', icon: 'Signature', de: 'Unterschrift', pos: 'noun', article: 'die', plural: 'Unterschriften', ru: 'подпись', imageQuery: 'handwritten signature', note: 'От unterschreiben — подписывать. Цифровая подпись — die Signatur.', example: { de: 'Ohne Unterschrift beginnen wir nicht.', ru: 'Без подписи мы не начинаем.', cloze: 'Unterschrift' } },

    { id: 'cyb-a22-06-bericht', icon: 'FileText', de: 'Bericht', pos: 'noun', article: 'der', plural: 'Berichte', ru: 'отчёт', collocation: { de: 'einen Bericht schreiben', ru: 'написать отчёт', accept: ['den Bericht schreiben'] }, example: { de: 'Der Kunde liest den Bericht sehr genau.', ru: 'Клиент очень внимательно читает отчёт.', cloze: 'Bericht' } },
    { id: 'cyb-a22-06-scannen', icon: 'ScanSearch', de: 'scannen', pos: 'verb', ru: 'сканировать', forms: 'er scannt · hat gescannt', note: '+ Akk: das Netzwerk scannen, Ports scannen.', collocation: { de: 'das Netzwerk scannen', ru: 'сканировать сеть', accept: ['ein Netzwerk scannen'] }, example: { de: 'Sie scannt zuerst alle offenen Ports.', ru: 'Сначала она сканирует все открытые порты.', cloze: 'scannt' } },
    { id: 'cyb-a22-06-feststellen', icon: 'Eye', de: 'feststellen', pos: 'verb', ru: 'устанавливать, обнаруживать', forms: 'er stellt fest · hat festgestellt', note: 'Отделяемая приставка; часто + dass: Wir stellen fest, dass …', example: { de: 'Wir stellen fest, dass die Software veraltet ist.', ru: 'Мы устанавливаем, что программа устарела.', cloze: 'stellen' } },
    { id: 'cyb-a22-06-schweregrad', icon: 'Gauge', de: 'Schweregrad', pos: 'noun', article: 'der', plural: 'Schweregrade', ru: 'степень серьёзности', parts: ['Schwere', 'grad'], note: 'die Schwere (тяжесть) + der Grad (степень).', example: { de: 'Diese Lücke hat einen hohen Schweregrad.', ru: 'У этой бреши высокая степень серьёзности.', cloze: 'Schweregrad' } },
    { id: 'cyb-a22-06-empfehlung', icon: 'ThumbsUp', de: 'Empfehlung', pos: 'noun', article: 'die', plural: 'Empfehlungen', ru: 'рекомендация', note: 'От empfehlen — рекомендовать.', collocation: { de: 'eine Empfehlung geben', ru: 'дать рекомендацию', accept: ['Empfehlungen geben'] }, example: { de: 'Unsere Empfehlung ist ein sofortiges Update.', ru: 'Наша рекомендация — немедленное обновление.', cloze: 'Empfehlung' } },
    { id: 'cyb-a22-06-auftraggeber', icon: 'Briefcase', de: 'Auftraggeber', pos: 'noun', article: 'der', plural: 'Auftraggeber', ru: 'заказчик', parts: ['Auftrag', 'geber'], example: { de: 'Der Auftraggeber bekommt am Ende einen Bericht.', ru: 'В конце заказчик получает отчёт.', cloze: 'Auftraggeber' } },
    { id: 'cyb-a22-06-zusammenfassung', icon: 'NotebookText', de: 'Zusammenfassung', pos: 'noun', article: 'die', plural: 'Zusammenfassungen', ru: 'краткое изложение, резюме', note: 'От zusammenfassen — подытоживать.', example: { de: 'Die Chefin liest nur die Zusammenfassung.', ru: 'Начальница читает только резюме.', cloze: 'Zusammenfassung' } },
    { id: 'cyb-a22-06-schwachstellenscan', icon: 'ScanSearch', de: 'Schwachstellenscan', pos: 'noun', article: 'der', plural: 'Schwachstellenscans', ru: 'сканирование уязвимостей', parts: ['Schwachstellen', 'scan'], example: { de: 'Am ersten Tag machen wir einen Schwachstellenscan.', ru: 'В первый день мы проводим сканирование уязвимостей.', cloze: 'Schwachstellenscan' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Erst der Vertrag, dann der Test',
      de: `Aylin studiert Informatik an der TU Wien und macht ein Praktikum bei einer kleinen Sicherheitsfirma. Diese Woche bekam die Firma einen neuen Auftrag: Eine Bäckerei mit Onlineshop wollte einen Penetrationstest.

Aylin wollte sofort anfangen, aber ihr Kollege Stefan sagte: „Ohne Vertrag dürfen wir nichts machen. Sonst ist ein Pentest ein normaler Angriff, und der ist verboten.“

Zuerst wurde mit der Bäckerei der Umfang vereinbart. Im Vertrag steht genau, welche Zielsysteme getestet werden: der Onlineshop und der Webserver. Das Kassensystem in den Filialen gehört nicht dazu. Auch die Zeit ist festgelegt: Getestet wird nur nachts, von Montag bis Freitag.

Am Donnerstag kam endlich die Unterschrift der Chefin. Ab diesem Moment war der Test erlaubt, und Aylin konnte beginnen.`,
      ru: `Айлин изучает информатику в Венском техническом университете и проходит практику в небольшой фирме по информационной безопасности. На этой неделе фирма получила новый заказ: пекарня с интернет-магазином хотела тест на проникновение.

Айлин хотела сразу начать, но её коллега Штефан сказал: «Без договора нам ничего нельзя делать. Иначе пентест — это обычная атака, а она запрещена».

Сначала с пекарней согласовали объём работ. В договоре точно написано, какие целевые системы будут тестироваться: интернет-магазин и веб-сервер. Кассовая система в филиалах к этому не относится. Время тоже определено: тестируют только ночью, с понедельника по пятницу.

В четверг наконец пришла подпись начальницы. С этого момента тест был разрешён, и Айлин смогла начать.`,
      gloss: {
        aylin: 'Айлин (имя)', stefan: 'Штефан (имя)', informatik: 'информатика', tu: 'TU — технический университет', wien: 'Вена', praktikum: 'практика, стажировка',
        kleinen: 'небольшой', sicherheitsfirma: 'фирма по информационной безопасности', bekam: 'получила', firma: 'фирма', bäckerei: 'пекарня', onlineshop: 'интернет-магазин',
        wollte: 'хотела', anfangen: 'начать', kollege: 'коллега', dürfen: 'можем, имеем право', sonst: 'иначе', pentest: 'пентест', normaler: 'обычная',
        angriff: 'атака', verboten: 'запрещён(а)', getestet: 'тестируется, тестируют', webserver: 'веб-сервер', kassensystem: 'кассовая система',
        filialen: 'филиалы', gehört: 'относится, принадлежит', dazu: 'к этому', festgelegt: 'определено, установлено', nachts: 'ночью', freitag: 'пятница',
        donnerstag: 'четверг', kam: 'пришла', chefin: 'начальница', moment: 'момент', konnte: 'смогла', ab: 'с (ab diesem Moment — с этого момента)',
        test: 'тест', durfte: 'могла, имела право', keinen: 'никакого', geschlossen: 'закрыт', zeit: 'время', umfang: 'объём',
        woche: 'неделя', wochenende: 'выходные', vormittag: 'первая половина дня', unter: 'в течение (unter der Woche — в будни)', wann: 'когда', ihren: 'её, свой',
        neuen: 'новый', hatte: 'имел', 'shop': 'магазин', kassensysteme: 'кассовые системы', bekommen: 'получила', firmen: 'фирмы',
      },
      questions: [
        { q: 'Was wollte die Bäckerei?', ru: 'Чего хотела пекарня?', options: ['Einen Penetrationstest für ihren Onlineshop', 'Einen neuen Webserver', 'Ein neues Kassensystem'], answer: 'Einen Penetrationstest für ihren Onlineshop' },
        { q: 'Warum durfte Aylin nicht sofort anfangen?', ru: 'Почему Айлин нельзя было сразу начать?', options: ['Es gab noch keinen Vertrag.', 'Der Onlineshop war geschlossen.', 'Stefan hatte keine Zeit.'], answer: 'Es gab noch keinen Vertrag.' },
        { q: 'Was gehört nicht zum Umfang?', ru: 'Что не входит в объём работ?', options: ['Das Kassensystem in den Filialen', 'Der Onlineshop', 'Der Webserver'], answer: 'Das Kassensystem in den Filialen' },
        { q: 'Wann darf getestet werden?', ru: 'Когда можно тестировать?', options: ['Nur nachts unter der Woche', 'Nur am Wochenende', 'Jeden Tag am Vormittag'], answer: 'Nur nachts unter der Woche' },
      ],
      translate: [
        { de: 'Ohne Vertrag ist der Test nicht erlaubt.', ru: 'Без договора тест не разрешён.', wrongRu: ['С договором тест не разрешён.', 'Без договора тест разрешён.'] },
        { de: 'Wir haben den Umfang genau vereinbart.', ru: 'Мы точно согласовали объём работ.', wrongRu: ['Мы точно согласуем объём работ.', 'Мы точно проверили объём работ.'] },
        { de: 'Die Firma hat einen neuen Auftrag bekommen.', ru: 'Фирма получила новый заказ.', wrongRu: ['Фирма получила новый договор.', 'Фирма отправила новый заказ.'] },
      ],
    },
    {
      lesson: 1, title: 'Der Bericht',
      de: `In der ersten Nacht scannte Aylin den Webserver. Dabei stellte sie fest, dass eine alte Version der Shop-Software lief. Mit einem einfachen Trick konnte sie die Bestellungen anderer Kunden sehen. Stefan sagte: „Wir müssen das nachweisen, aber wir dürfen keine echten Daten kopieren.“ Deshalb machten sie nur Screenshots.

Danach schrieben sie den Bericht. Am Anfang steht eine kurze Zusammenfassung für die Chefin, die keine Technikerin ist. Dann wird jede Schwachstelle beschrieben, und jede bekommt einen Schweregrad: niedrig, mittel, hoch oder kritisch. Die Lücke im Shop bekam den höchsten Schweregrad.

Am Ende jedes Punktes steht eine Empfehlung, zum Beispiel: „Aktualisieren Sie die Software sofort.“ Der Bericht ist vertraulich und wurde verschlüsselt an die Bäckerei geschickt.`,
      ru: `В первую ночь Айлин просканировала веб-сервер. При этом она обнаружила, что работает старая версия программы магазина. С помощью простого трюка она смогла увидеть заказы других клиентов. Штефан сказал: «Мы должны это доказать, но нам нельзя копировать настоящие данные». Поэтому они сделали только скриншоты.

Потом они написали отчёт. В начале стоит краткое резюме для начальницы, которая не технический специалист. Затем описывается каждая уязвимость, и каждая получает степень серьёзности: низкая, средняя, высокая или критическая. Брешь в магазине получила самую высокую степень серьёзности.

В конце каждого пункта стоит рекомендация, например: «Немедленно обновите программу». Отчёт конфиденциальный и был отправлен пекарне в зашифрованном виде.`,
      gloss: {
        aylin: 'Айлин (имя)', stefan: 'Штефан (имя)', ersten: 'первую', nacht: 'ночь', scannte: 'просканировала', webserver: 'веб-сервер', stellte: 'установила (stellte fest — обнаружила)',
        fest: '(stellte fest — обнаружила)', version: 'версия', 'shop-software': 'программа магазина', lief: 'работала, была запущена', einfachen: 'простого', trick: 'трюк',
        konnte: 'смогла', bestellungen: 'заказы', anderer: 'других', kunden: 'клиентов', dürfen: 'можем, имеем право', echten: 'настоящие', daten: 'данные',
        kopieren: 'копировать', machten: 'сделали', screenshots: 'скриншоты', schrieben: 'написали', anfang: 'начало', kurze: 'краткое', chefin: 'начальница',
        technikerin: 'технический специалист (ж.)', schwachstelle: 'уязвимость', beschrieben: 'описывается', niedrig: 'низкая', mittel: 'средняя', hoch: 'высокая',
        kritisch: 'критическая', lücke: 'брешь', shop: 'магазин', bekam: 'получила', höchsten: 'самую высокую', punktes: 'пункта', aktualisieren: 'обновите',
        software: 'программа, ПО', verschlüsselt: 'в зашифрованном виде', bäckerei: 'пекарня', geschickt: 'отправлен', festgestellt: 'обнаружила',
        server: 'сервер', ausgeschaltet: 'выключен', firewall: 'файрвол', blockierte: 'блокировал', welchen: 'какую', mittleren: 'среднюю', niedrigen: 'низкую',
        bilder: 'картинки', wollte: 'хотела', sollte: 'должен был', wen: 'кого (für wen — для кого)', shops: 'магазина', ende: 'конец',
      },
      questions: [
        { q: 'Was hat Aylin auf dem Webserver festgestellt?', ru: 'Что Айлин обнаружила на веб-сервере?', options: ['Eine alte Version der Shop-Software lief.', 'Der Server war ausgeschaltet.', 'Die Firewall blockierte alles.'], answer: 'Eine alte Version der Shop-Software lief.' },
        { q: 'Warum machten sie nur Screenshots?', ru: 'Почему они сделали только скриншоты?', options: ['Sie durften keine echten Daten kopieren.', 'Der Bericht sollte kurz sein.', 'Die Chefin wollte Bilder sehen.'], answer: 'Sie durften keine echten Daten kopieren.' },
        { q: 'Für wen ist die Zusammenfassung?', ru: 'Для кого резюме?', options: ['Für die Chefin der Bäckerei', 'Für die Kunden des Shops', 'Für Stefan'], answer: 'Für die Chefin der Bäckerei' },
        { q: 'Welchen Schweregrad bekam die Lücke im Shop?', ru: 'Какую степень серьёзности получила брешь в магазине?', options: ['Den höchsten', 'Einen mittleren', 'Einen niedrigen'], answer: 'Den höchsten' },
      ],
      translate: [
        { de: 'Der Bericht ist vertraulich.', ru: 'Отчёт конфиденциальный.', wrongRu: ['Отчёт открытый.', 'Договор конфиденциальный.'] },
        { de: 'Jede Schwachstelle bekommt einen Schweregrad.', ru: 'Каждая уязвимость получает степень серьёзности.', wrongRu: ['Каждая уязвимость получает рекомендацию.', 'Ни одна уязвимость не получает степень серьёзности.'] },
        { de: 'Am Ende steht eine Empfehlung.', ru: 'В конце стоит рекомендация.', wrongRu: ['В начале стоит рекомендация.', 'В конце стоит резюме.'] },
      ],
    },
  ],
};
