import type { Module } from '../types.ts';

// A2.1 alltag 07: returns and complaints — broken product, receipt, guarantee, exchange (lesson 0); online order, refund, voucher, withdrawal (lesson 1).

export const module: Module = {
  id: 'alltag-a21-07-reklamation', sphere: 'alltag', level: 'A2.1',
  title: 'Umtausch und Reklamation', subtitle: 'Обмен и возврат: сломанный товар, чек, гарантия, онлайн-заказ, возврат денег и ваучер.',
  words: [
    { id: 'all-a21-07-reklamation', icon: 'MessageSquareWarning', de: 'Reklamation', pos: 'noun', article: 'die', plural: 'Reklamationen', ru: 'рекламация, претензия (по товару)', example: { de: 'Ich habe eine Reklamation.', ru: 'У меня претензия по товару.', cloze: 'Reklamation' } },
    { id: 'all-a21-07-reklamieren', icon: 'MessageSquareWarning', de: 'reklamieren', pos: 'verb', ru: 'предъявлять претензию', forms: 'er reklamiert · hat reklamiert', example: { de: 'Ich möchte diesen Wasserkocher reklamieren.', ru: 'Я хочу вернуть этот чайник по претензии.', cloze: 'reklamieren' } },
    { id: 'all-a21-07-defekt', icon: 'CircleX', de: 'defekt', pos: 'adj', ru: 'неисправный, бракованный', example: { de: 'Das Gerät ist defekt.', ru: 'Прибор неисправен.', cloze: 'defekt' } },
    { id: 'all-a21-07-kaputt', icon: 'Hammer', de: 'kaputt', pos: 'adj', ru: 'сломанный', note: 'Разговорно, чаще, чем defekt.', example: { de: 'Nach einer Woche war er schon kaputt.', ru: 'Через неделю он уже сломался.', cloze: 'kaputt' } },
    { id: 'all-a21-07-quittung', icon: 'Receipt', de: 'Quittung', pos: 'noun', article: 'die', plural: 'Quittungen', ru: 'квитанция, чек', example: { de: 'Haben Sie noch die Quittung?', ru: 'У вас ещё есть чек?', cloze: 'Quittung' } },
    { id: 'all-a21-07-garantie', icon: 'ShieldCheck', de: 'Garantie', pos: 'noun', article: 'die', plural: 'Garantien', ru: 'гарантия', note: 'В ЕС на товары минимум 2 года гарантии (Gewährleistung).', example: { de: 'Auf das Handy gibt es zwei Jahre Garantie.', ru: 'На телефон два года гарантии.', cloze: 'Garantie' } },
    { id: 'all-a21-07-umtauschen', icon: 'ArrowLeftRight', de: 'umtauschen', pos: 'verb', ru: 'обменивать', forms: 'er tauscht um · hat umgetauscht', example: { de: 'Kann ich die Hose umtauschen?', ru: 'Можно обменять брюки?', cloze: 'umtauschen' } },
    { id: 'all-a21-07-zurueckgeben', icon: 'Undo2', de: 'zurückgeben', pos: 'verb', ru: 'возвращать', forms: 'er gibt zurück · hat zurückgegeben', example: { de: 'Ich möchte die Schuhe zurückgeben.', ru: 'Я хочу вернуть обувь.', cloze: 'zurückgeben' } },

    { id: 'all-a21-07-ersatz', icon: 'Repeat', de: 'Ersatz', pos: 'noun', article: 'der', ru: 'замена', example: { de: 'Sie bekommen ein neues Gerät als Ersatz.', ru: 'Вы получите новый прибор на замену.', cloze: 'Ersatz' } },
    { id: 'all-a21-07-erstatten', icon: 'Banknote', de: 'erstatten', pos: 'verb', ru: 'возмещать, возвращать (деньги)', forms: 'er erstattet · hat erstattet', note: 'Geld zurückerstatten — вернуть деньги.', example: { de: 'Wir erstatten Ihnen den Preis.', ru: 'Мы вернём вам стоимость.', cloze: 'erstatten' } },
    { id: 'all-a21-07-gutschein', icon: 'Ticket', de: 'Gutschein', pos: 'noun', article: 'der', plural: 'Gutscheine', ru: 'ваучер, подарочный сертификат', parts: ['Gut', 'schein'], example: { de: 'Statt Geld bekomme ich einen Gutschein.', ru: 'Вместо денег я получаю ваучер.', cloze: 'Gutschein' } },
    { id: 'all-a21-07-kundenservice', icon: 'Headset', de: 'Kundenservice', pos: 'noun', article: 'der', ru: 'служба поддержки клиентов', parts: ['Kunden', 'service'], example: { de: 'Ich rufe beim Kundenservice an.', ru: 'Я звоню в службу поддержки.', cloze: 'Kundenservice' } },
    { id: 'all-a21-07-lieferung', icon: 'Truck', de: 'Lieferung', pos: 'noun', article: 'die', plural: 'Lieferungen', ru: 'доставка', example: { de: 'Die Lieferung ist nicht angekommen.', ru: 'Доставка не пришла.', cloze: 'Lieferung' } },
    { id: 'all-a21-07-widerruf', icon: 'Undo2', de: 'Widerruf', pos: 'noun', article: 'der', plural: 'Widerrufe', ru: 'отказ от покупки (онлайн), отзыв', note: 'При онлайн-покупках — 14 дней на отказ без причины.', example: { de: 'Für den Widerruf haben Sie vierzehn Tage Zeit.', ru: 'На отказ от покупки у вас четырнадцать дней.', cloze: 'Widerruf' } },
    { id: 'all-a21-07-beschwerde', icon: 'Megaphone', de: 'Beschwerde', pos: 'noun', article: 'die', plural: 'Beschwerden', ru: 'жалоба', example: { de: 'Ich schreibe eine Beschwerde an die Firma.', ru: 'Я пишу жалобу в фирму.', cloze: 'Beschwerde' } },
    { id: 'all-a21-07-beschweren', icon: 'Megaphone', de: 'beschweren', pos: 'verb', ru: '(sich beschweren) жаловаться', forms: 'er beschwert sich · hat sich beschwert', example: { de: 'Ich möchte mich beschweren.', ru: 'Я хочу пожаловаться.', cloze: 'beschweren' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Der kaputte Wasserkocher',
      de: `Leyla hat vor zwei Wochen einen Wasserkocher gekauft. Jetzt ist er kaputt. Sie geht zurück ins Geschäft. „Guten Tag, ich habe eine Reklamation. Der Wasserkocher ist defekt.“

Der Verkäufer fragt: „Haben Sie noch die Quittung?“ Leyla zeigt den Kassenbon. „Gut, es gibt zwei Jahre Garantie. Möchten Sie das Gerät umtauschen oder zurückgeben?“

Leyla möchte lieber einen anderen Wasserkocher. Sie bekommt sofort ein neues Gerät als Ersatz. „Bewahren Sie die Quittung immer auf“, sagt der Verkäufer.`,
      ru: `Две недели назад Лейла купила чайник. Теперь он сломался. Она возвращается в магазин. «Добрый день, у меня претензия. Чайник неисправен».

Продавец спрашивает: «У вас ещё есть квитанция?» Лейла показывает чек. «Хорошо, гарантия два года. Вы хотите обменять прибор или вернуть?»

Лейла лучше возьмёт другой чайник. Она сразу получает новый прибор на замену. «Всегда храните чек», — говорит продавец.`,
      gloss: { jahren: 'лет (in zwei Jahren — через два года)', leyla: 'Лейла (имя)', wasserkocher: 'электрочайник', gekauft: 'купила', geschäft: 'магазин', verkäufer: 'продавец', kassenbon: 'кассовый чек', gerät: 'прибор', lieber: 'лучше, охотнее', anderen: 'другой', bewahren: '(bewahren … auf) храните', auf: '(bewahren … auf) храните' },
      questions: [
        { q: 'Wann hat Leyla den Wasserkocher gekauft?', ru: 'Когда Лейла купила чайник?', options: ['Vor zwei Wochen', 'Vor zwei Jahren', 'Gestern'], answer: 'Vor zwei Wochen' },
        { q: 'Wie lange ist die Garantie?', ru: 'Сколько длится гарантия?', options: ['Zwei Jahre', 'Zwei Wochen', 'Ein Monat'], answer: 'Zwei Jahre' },
        { q: 'Was bekommt Leyla?', ru: 'Что получает Лейла?', options: ['Ein neues Gerät', 'Ihr Geld zurück', 'Einen Gutschein'], answer: 'Ein neues Gerät' },
      ],
      translate: [
        { de: 'Haben Sie noch die Quittung?', ru: 'У вас ещё есть квитанция?', wrongRu: ['У вас есть гарантия?', 'Вам нужна квитанция?'] },
        { de: 'Das Gerät ist defekt.', ru: 'Прибор неисправен.', wrongRu: ['Прибор новый.', 'Прибор дорогой.'] },
        { de: 'Kann ich die Hose umtauschen?', ru: 'Можно обменять брюки?', wrongRu: ['Можно примерить брюки?', 'Можно купить брюки?'] },
      ],
    },
    {
      lesson: 1, title: 'Eine Bestellung im Internet',
      de: `Amir hat im Internet Schuhe bestellt. Die Lieferung kommt nach fünf Tagen. Aber die Schuhe sind zu klein. Er möchte sie zurückgeben.

Online hat man vierzehn Tage Zeit für den Widerruf. Amir füllt das Formular aus und schickt die Schuhe zurück. Nach einer Woche erstattet die Firma ihm den Preis.

Mit einer anderen Firma hat er mehr Probleme. Die Lieferung ist nicht angekommen. Er ruft beim Kundenservice an, aber niemand hilft. Schließlich schreibt er eine Beschwerde. Die Firma entschuldigt sich und schickt ihm einen Gutschein über zwanzig Euro.`,
      ru: `Амир заказал в интернете обувь. Доставка приходит через пять дней. Но обувь слишком маленькая. Он хочет её вернуть.

При покупке онлайн на отказ есть четырнадцать дней. Амир заполняет форму и отправляет обувь обратно. Через неделю фирма возвращает ему деньги.

С другой фирмой у него больше проблем. Доставка не пришла. Он звонит в службу поддержки, но никто не помогает. В конце концов он пишет жалобу. Фирма извиняется и присылает ему ваучер на двадцать евро.`,
      gloss: { schuhen: 'обувью, обуви', tagen: 'днях; (in drei Tagen) через три дня', amir: 'Амир (имя)', internet: 'интернет', bestellt: 'заказал', online: 'онлайн', firma: 'фирма', anderen: 'другой', angekommen: 'пришла, прибыла', niemand: 'никто', schließlich: 'в конце концов', entschuldigt: '(entschuldigt sich) извиняется', bestellung: 'заказ' },
      questions: [
        { q: 'Was ist das Problem mit den Schuhen?', ru: 'В чём проблема с обувью?', options: ['Sie sind zu klein.', 'Sie sind kaputt.', 'Sie sind zu teuer.'], answer: 'Sie sind zu klein.' },
        { q: 'Wie viel Zeit hat man für den Widerruf?', ru: 'Сколько времени на отказ от покупки?', options: ['Vierzehn Tage', 'Zwei Jahre', 'Einen Tag'], answer: 'Vierzehn Tage' },
        { q: 'Was bekommt Amir von der zweiten Firma?', ru: 'Что Амир получает от второй фирмы?', options: ['Einen Gutschein', 'Neue Schuhe', 'Nichts'], answer: 'Einen Gutschein' },
      ],
      translate: [
        { de: 'Ich möchte die Schuhe zurückgeben.', ru: 'Я хочу вернуть обувь.', wrongRu: ['Я хочу купить обувь.', 'Я хочу обменять обувь.'] },
        { de: 'Die Lieferung ist nicht angekommen.', ru: 'Доставка не пришла.', wrongRu: ['Доставка пришла вовремя.', 'Заказ отменён.'] },
        { de: 'Ich möchte mich beschweren.', ru: 'Я хочу пожаловаться.', wrongRu: ['Я хочу поблагодарить.', 'Я хочу заказать.'] },
      ],
    },
  ],
};
