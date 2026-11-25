import type { Module } from '../types.ts';

// A2.2 pflege 08: discharge management — rehab, transfer, doctor's letter (lesson 0); home situation, social services, aftercare (lesson 1).

export const module: Module = {
  id: 'pflege-a22-08-entlassung', sphere: 'pflege', level: 'A2.2',
  title: 'Entlassmanagement', subtitle: 'Организация выписки: реабилитация, выписной эпикриз, направление, жилищные условия и последующий уход.',
  words: [
    { id: 'pfl-a22-08-reha', icon: 'Dumbbell', de: 'Reha', pos: 'noun', article: 'die', plural: 'Rehas', ru: 'реабилитация (разг.)', note: 'Полностью — die Rehabilitation.', example: { de: 'Nach dem Krankenhaus geht sie drei Wochen in die Reha.', ru: 'После больницы она на три недели едет на реабилитацию.', cloze: 'Reha' } },
    { id: 'pfl-a22-08-ueberleitung', icon: 'ArrowRightLeft', de: 'Überleitung', pos: 'noun', article: 'die', plural: 'Überleitungen', ru: 'перевод (в другое учреждение)', example: { de: 'Der Überleitungsbogen geht mit in die Reha.', ru: 'Лист перевода передаётся в реабилитационный центр.', cloze: 'Überleitung' } },
    { id: 'pfl-a22-08-arztbrief', icon: 'Mail', de: 'Arztbrief', pos: 'noun', article: 'der', plural: 'Arztbriefe', ru: 'выписной эпикриз, письмо врача', parts: ['Arzt', 'brief'], example: { de: 'Der Arztbrief ist für den Hausarzt.', ru: 'Эпикриз — для семейного врача.', cloze: 'Arztbrief' } },
    { id: 'pfl-a22-08-ueberweisung', icon: 'Forward', de: 'Überweisung', pos: 'noun', article: 'die', plural: 'Überweisungen', ru: 'направление (к врачу); банковский перевод', example: { de: 'Mit der Überweisung gehen Sie zum Orthopäden.', ru: 'С направлением вы идёте к ортопеду.', cloze: 'Überweisung' } },
    { id: 'pfl-a22-08-verordnung', icon: 'FileText', de: 'Verordnung', pos: 'noun', article: 'die', plural: 'Verordnungen', ru: 'назначение, рецепт (на средство, терапию)', example: { de: 'Für die Physiotherapie brauchen Sie eine Verordnung.', ru: 'Для физиотерапии вам нужно назначение.', cloze: 'Verordnung' } },
    { id: 'pfl-a22-08-nachsorge', icon: 'CalendarHeart', de: 'Nachsorge', pos: 'noun', article: 'die', ru: 'последующее наблюдение', parts: ['Nach', 'sorge'], example: { de: 'Die Nachsorge macht der Hausarzt.', ru: 'Дальнейшее наблюдение проводит семейный врач.', cloze: 'Nachsorge' } },
    { id: 'pfl-a22-08-krankentransport', icon: 'Ambulance', de: 'Krankentransport', pos: 'noun', article: 'der', plural: 'Krankentransporte', ru: 'перевозка больного', parts: ['Kranken', 'transport'], example: { de: 'Der Krankentransport kommt um zehn Uhr.', ru: 'Машина для перевозки придёт в десять часов.', cloze: 'Krankentransport' } },
    { id: 'pfl-a22-08-organisieren', icon: 'CalendarCog', de: 'organisieren', pos: 'verb', ru: 'организовывать', forms: 'er organisiert · hat organisiert', example: { de: 'Der Sozialdienst organisiert die Reha.', ru: 'Социальная служба организует реабилитацию.', cloze: 'organisiert' } },

    { id: 'pfl-a22-08-sozialdienst', icon: 'Users', de: 'Sozialdienst', pos: 'noun', article: 'der', plural: 'Sozialdienste', ru: 'социальная служба (в больнице)', parts: ['Sozial', 'dienst'], example: { de: 'Fragen Sie beim Sozialdienst nach Hilfe.', ru: 'Обратитесь за помощью в социальную службу.', cloze: 'Sozialdienst' } },
    { id: 'pfl-a22-08-wohnsituation', icon: 'Home', de: 'Wohnsituation', pos: 'noun', article: 'die', plural: 'Wohnsituationen', ru: 'жилищные условия', parts: ['Wohn', 'situation'], example: { de: 'Wie ist Ihre Wohnsituation?', ru: 'Какие у вас жилищные условия?', cloze: 'Wohnsituation' } },
    { id: 'pfl-a22-08-treppenlift', icon: 'ArrowUpRight', de: 'Treppenlift', pos: 'noun', article: 'der', plural: 'Treppenlifte', ru: 'лестничный подъёмник', parts: ['Treppen', 'lift'], example: { de: 'Ohne Treppenlift kommt sie nicht in den ersten Stock.', ru: 'Без подъёмника она не попадёт на второй этаж.', cloze: 'Treppenlift' } },
    { id: 'pfl-a22-08-pflegebett', icon: 'BedDouble', de: 'Pflegebett', pos: 'noun', article: 'das', plural: 'Pflegebetten', ru: 'функциональная кровать', parts: ['Pflege', 'bett'], example: { de: 'Das Pflegebett wird nach Hause geliefert.', ru: 'Функциональную кровать доставят домой.', cloze: 'Pflegebett' } },
    { id: 'pfl-a22-08-kurzzeitpflege', icon: 'Clock', de: 'Kurzzeitpflege', pos: 'noun', article: 'die', ru: 'кратковременный уход (в учреждении)', parts: ['Kurzzeit', 'pflege'], example: { de: 'Für vier Wochen geht er in die Kurzzeitpflege.', ru: 'На четыре недели его переводят на кратковременный уход.', cloze: 'Kurzzeitpflege' } },
    { id: 'pfl-a22-08-hausbesuch', icon: 'DoorOpen', de: 'Hausbesuch', pos: 'noun', article: 'der', plural: 'Hausbesuche', ru: 'визит на дом', parts: ['Haus', 'besuch'], example: { de: 'Der Hausarzt macht einmal pro Woche einen Hausbesuch.', ru: 'Семейный врач раз в неделю приходит на дом.', cloze: 'Hausbesuch' } },
    { id: 'pfl-a22-08-versorgt', icon: 'ShieldCheck', de: 'versorgt', pos: 'adj', ru: 'обеспеченный (уходом), под присмотром', example: { de: 'Zu Hause ist sie gut versorgt.', ru: 'Дома она под хорошим присмотром.', cloze: 'versorgt' } },
    { id: 'pfl-a22-08-rechtzeitig', icon: 'AlarmClockCheck', de: 'rechtzeitig', pos: 'adj', ru: 'своевременный, вовремя', example: { de: 'Wir planen die Entlassung rechtzeitig.', ru: 'Мы заранее планируем выписку.', cloze: 'rechtzeitig' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Von der Klinik in die Reha',
      de: `Frau Wolf hat ein neues Knie. In einer Woche wird sie entlassen. Aber sie geht nicht gleich nach Hause, sondern drei Wochen in die Reha. Dort trainiert sie jeden Tag mit Physiotherapeuten.

Der Sozialdienst organisiert alles rechtzeitig: den Platz in der Reha und den Krankentransport. Olena schreibt den Überleitungsbogen. Darin steht, welche Hilfe Frau Wolf braucht und welche Medikamente sie nimmt.

Doktor Wagner schreibt den Arztbrief für den Hausarzt. Frau Wolf bekommt auch eine Überweisung zum Orthopäden und eine Verordnung für die Physiotherapie nach der Reha. Die Nachsorge macht dann ihr Hausarzt.`,
      ru: `У госпожи Вольф новое колено. Через неделю её выпишут. Но она поедет не сразу домой, а на три недели на реабилитацию. Там она каждый день занимается с физиотерапевтами.

Социальная служба заранее всё организует: место в реабилитационном центре и перевозку. Олена пишет лист перевода. В нём указано, какая помощь нужна госпоже Вольф и какие лекарства она принимает.

Доктор Вагнер пишет эпикриз для семейного врача. Госпожа Вольф получает ещё направление к ортопеду и назначение на физиотерапию после реабилитации. Дальнейшее наблюдение потом проводит её семейный врач.`,
      gloss: { olena: 'Олена (имя)', darin: 'в нём', doktor: 'доктор', wagner: 'Вагнер (фамилия)', planen: 'планировать', wolf: 'Вольф (фамилия)', gleich: 'сразу', sondern: 'а (после отрицания)', platz: 'место', überleitungsbogen: 'лист перевода', orthopäden: 'ортопед(у)', physiotherapie: 'физиотерапия', physiotherapeuten: 'физиотерапевты', klinik: 'клиника, больница' },
      questions: [
        { q: 'Wohin geht Frau Wolf nach dem Krankenhaus?', ru: 'Куда госпожа Вольф поедет после больницы?', options: ['In die Reha', 'Nach Hause', 'Ins Pflegeheim'], answer: 'In die Reha' },
        { q: 'Wer organisiert den Platz in der Reha?', ru: 'Кто организует место в реабилитационном центре?', options: ['Der Sozialdienst', 'Der Hausarzt', 'Ihr Sohn'], answer: 'Der Sozialdienst' },
        { q: 'Für wen ist der Arztbrief?', ru: 'Для кого эпикриз?', options: ['Für den Hausarzt', 'Für die Familie', 'Für die Krankenkasse'], answer: 'Für den Hausarzt' },
      ],
      translate: [
        { de: 'Nach dem Krankenhaus geht sie in die Reha.', ru: 'После больницы она едет на реабилитацию.', wrongRu: ['После реабилитации она едет в больницу.', 'После больницы она едет домой.'] },
        { de: 'Der Arztbrief ist für den Hausarzt.', ru: 'Эпикриз — для семейного врача.', wrongRu: ['Эпикриз — для пациента.', 'Рецепт — для семейного врача.'] },
        { de: 'Wir planen die Entlassung rechtzeitig.', ru: 'Мы заранее планируем выписку.', wrongRu: ['Мы планируем выписку в последний момент.', 'Мы заранее планируем операцию.'] },
      ],
    },
    {
      lesson: 1, title: 'Wie geht es zu Hause?',
      de: `Herr Becker soll in zwei Wochen nach Hause. Die Mitarbeiterin vom Sozialdienst fragt seine Tochter: „Wie ist die Wohnsituation? Wohnt Ihr Vater allein?“ – „Ja, im ersten Stock. Es gibt keinen Aufzug.“

„Das ist schwierig. Ohne Treppenlift kommt er nicht in die Wohnung.“ Die Tochter überlegt. Ein Treppenlift kostet viel Geld und braucht Zeit. Deshalb geht Herr Becker zuerst für vier Wochen in die Kurzzeitpflege.

In dieser Zeit beantragt die Familie einen Treppenlift und ein Pflegebett. Ein ambulanter Pflegedienst wird ihn später zu Hause versorgen, und der Hausarzt macht regelmäßig Hausbesuche. „So ist Ihr Vater gut versorgt“, sagt die Mitarbeiterin.`,
      ru: `Господина Беккера через две недели должны отпустить домой. Сотрудница социальной службы спрашивает его дочь: «Какие жилищные условия? Ваш отец живёт один?» — «Да, на втором этаже. Лифта нет».

«Это сложно. Без подъёмника он не попадёт в квартиру». Дочь задумывается. Подъёмник стоит много денег и требует времени. Поэтому господин Беккер сначала на четыре недели отправляется на кратковременный уход.

За это время семья подаёт заявку на лестничный подъёмник и функциональную кровать. Потом за ним дома будет ухаживать служба патронажа, а семейный врач будет регулярно приходить на дом. «Так ваш отец будет под хорошим присмотром», — говорит сотрудница.`,
      gloss: { erdgeschoss: 'первый (цокольный) этаж', becker: 'Беккер (фамилия)', mitarbeiterin: 'сотрудница', stock: 'этаж', schwierig: 'сложно', wohnung: 'квартира', überlegt: 'задумывается', dieser: 'это (дат.)', versorgen: 'ухаживать, обеспечивать' },
      questions: [
        { q: 'Wo wohnt Herr Becker?', ru: 'Где живёт господин Беккер?', options: ['Im ersten Stock ohne Aufzug', 'Im Erdgeschoss', 'Bei seiner Tochter'], answer: 'Im ersten Stock ohne Aufzug' },
        { q: 'Wohin geht Herr Becker zuerst?', ru: 'Куда господин Беккер отправится сначала?', options: ['In die Kurzzeitpflege', 'Nach Hause', 'In die Reha'], answer: 'In die Kurzzeitpflege' },
        { q: 'Was beantragt die Familie?', ru: 'На что семья подаёт заявку?', options: ['Einen Treppenlift und ein Pflegebett', 'Einen Rollstuhl', 'Eine neue Wohnung'], answer: 'Einen Treppenlift und ein Pflegebett' },
      ],
      translate: [
        { de: 'Wie ist Ihre Wohnsituation?', ru: 'Какие у вас жилищные условия?', wrongRu: ['Где вы работаете?', 'Какая у вас семья?'] },
        { de: 'Zu Hause ist er gut versorgt.', ru: 'Дома он под хорошим присмотром.', wrongRu: ['Дома за ним никто не смотрит.', 'В больнице он под хорошим присмотром.'] },
        { de: 'Der Hausarzt macht Hausbesuche.', ru: 'Семейный врач приходит на дом.', wrongRu: ['Семейный врач не приходит на дом.', 'Медсестра приходит на дом.'] },
      ],
    },
  ],
};
