import type { Module } from '../types.ts';

// A2.1 alltag 10: travelling — booking, hotel, suitcase, airport (lesson 0); border, visa, sights, beach (lesson 1).

export const module: Module = {
  id: 'alltag-a21-10-reisen', sphere: 'alltag', level: 'A2.1',
  title: 'Urlaub und Reisen', subtitle: 'Отпуск и поездки: бронирование, отель, чемодан, аэропорт, виза, достопримечательности и море.',
  words: [
    { id: 'all-a21-10-reise', icon: 'Plane', de: 'Reise', pos: 'noun', article: 'die', plural: 'Reisen', ru: 'поездка, путешествие', note: 'Gute Reise! — Счастливого пути!', example: { de: 'Die Reise nach Hamburg war schön.', ru: 'Поездка в Гамбург была прекрасной.', cloze: 'Reise' } },
    { id: 'all-a21-10-urlaub', icon: 'Palmtree', de: 'Urlaub', pos: 'noun', article: 'der', plural: 'Urlaube', ru: 'отпуск', example: { de: 'Im Sommer machen wir Urlaub an der Ostsee.', ru: 'Летом мы отдыхаем на Балтийском море.', cloze: 'Urlaub' } },
    { id: 'all-a21-10-buchen', icon: 'CalendarCheck', de: 'buchen', pos: 'verb', ru: 'бронировать', forms: 'er bucht · hat gebucht', example: { de: 'Wir haben ein Hotel gebucht.', ru: 'Мы забронировали отель.', cloze: 'gebucht' } },
    { id: 'all-a21-10-hotel', icon: 'Hotel', de: 'Hotel', pos: 'noun', article: 'das', plural: 'Hotels', ru: 'отель', example: { de: 'Das Hotel liegt direkt am Meer.', ru: 'Отель прямо у моря.', cloze: 'Hotel' } },
    { id: 'all-a21-10-ferienwohnung', icon: 'Home', de: 'Ferienwohnung', pos: 'noun', article: 'die', plural: 'Ferienwohnungen', ru: 'квартира для отдыха', parts: ['Ferien', 'wohnung'], example: { de: 'Mit Kindern ist eine Ferienwohnung praktisch.', ru: 'С детьми удобна квартира для отдыха.', cloze: 'Ferienwohnung' } },
    { id: 'all-a21-10-koffer', icon: 'Luggage', de: 'Koffer', pos: 'noun', article: 'der', plural: 'Koffer', ru: 'чемодан', example: { de: 'Der Koffer ist zu schwer.', ru: 'Чемодан слишком тяжёлый.', cloze: 'Koffer' } },
    { id: 'all-a21-10-packen', icon: 'Package', de: 'packen', pos: 'verb', ru: 'упаковывать, собирать (вещи)', forms: 'er packt · hat gepackt', example: { de: 'Hast du schon den Koffer gepackt?', ru: 'Ты уже собрал чемодан?', cloze: 'gepackt' } },
    { id: 'all-a21-10-flughafen', icon: 'PlaneTakeoff', de: 'Flughafen', pos: 'noun', article: 'der', plural: 'Flughäfen', ru: 'аэропорт', parts: ['Flug', 'hafen'], example: { de: 'Wir fahren mit dem Zug zum Flughafen.', ru: 'Мы едем в аэропорт на поезде.', cloze: 'Flughafen' } },

    { id: 'all-a21-10-flug', icon: 'Plane', de: 'Flug', pos: 'noun', article: 'der', plural: 'Flüge', ru: 'рейс, полёт', example: { de: 'Der Flug dauert vier Stunden.', ru: 'Полёт длится четыре часа.', cloze: 'Flug' } },
    { id: 'all-a21-10-ausland', icon: 'Globe', de: 'Ausland', pos: 'noun', article: 'das', ru: 'заграница', note: 'ins Ausland — за границу, im Ausland — за границей.', example: { de: 'Zum ersten Mal fahren wir ins Ausland.', ru: 'Мы впервые едем за границу.', cloze: 'Ausland' } },
    { id: 'all-a21-10-grenze', icon: 'Fence', de: 'Grenze', pos: 'noun', article: 'die', plural: 'Grenzen', ru: 'граница', example: { de: 'An der Grenze kontrolliert die Polizei die Pässe.', ru: 'На границе полиция проверяет паспорта.', cloze: 'Grenze' } },
    { id: 'all-a21-10-visum', icon: 'Stamp', de: 'Visum', pos: 'noun', article: 'das', plural: 'Visa', ru: 'виза', example: { de: 'Brauche ich ein Visum für die Schweiz?', ru: 'Мне нужна виза в Швейцарию?', cloze: 'Visum' } },
    { id: 'all-a21-10-sehenswuerdigkeit', icon: 'Landmark', de: 'Sehenswürdigkeit', pos: 'noun', article: 'die', plural: 'Sehenswürdigkeiten', ru: 'достопримечательность', example: { de: 'Das Brandenburger Tor ist eine bekannte Sehenswürdigkeit.', ru: 'Бранденбургские ворота — известная достопримечательность.', cloze: 'Sehenswürdigkeit' } },
    { id: 'all-a21-10-stadtrundfahrt', icon: 'Bus', de: 'Stadtrundfahrt', pos: 'noun', article: 'die', plural: 'Stadtrundfahrten', ru: 'обзорная экскурсия по городу', parts: ['Stadt', 'rund', 'fahrt'], example: { de: 'Wir machen eine Stadtrundfahrt mit dem Bus.', ru: 'Мы едем на обзорную автобусную экскурсию.', cloze: 'Stadtrundfahrt' } },
    { id: 'all-a21-10-strand', icon: 'Waves', imageQuery: 'baltic sea beach', de: 'Strand', pos: 'noun', article: 'der', plural: 'Strände', ru: 'пляж', example: { de: 'Die Kinder spielen den ganzen Tag am Strand.', ru: 'Дети целый день играют на пляже.', cloze: 'Strand' } },
    { id: 'all-a21-10-meer', icon: 'Waves', de: 'Meer', pos: 'noun', article: 'das', plural: 'Meere', ru: 'море', note: 'die Ostsee — Балтийское море, die Nordsee — Северное море.', example: { de: 'Das Meer ist noch kalt.', ru: 'Море ещё холодное.', cloze: 'Meer' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Urlaub an der Ostsee',
      de: `Endlich Sommerferien! Familie Haddad macht zum ersten Mal Urlaub in Deutschland. Sie fahren an die Ostsee. Leyla hat eine Ferienwohnung gebucht, denn ein Hotel ist für vier Personen zu teuer.

Am Abend vorher packt Amir die Koffer. „Der Koffer ist zu schwer!“, sagt er. Nour hat fünf Bücher eingepackt.

Mit dem Deutschlandticket fahren sie sechs Stunden mit Regionalzügen. Das dauert lange, aber es ist billig. Die Ferienwohnung liegt nur zehn Minuten vom Strand. Das Meer ist noch kalt, aber die Kinder springen sofort ins Wasser.`,
      ru: `Наконец летние каникулы! Семья Хаддад впервые отдыхает в Германии. Они едут на Балтийское море. Лейла забронировала квартиру для отдыха, потому что отель для четверых слишком дорогой.

Накануне вечером Амир собирает чемоданы. «Чемодан слишком тяжёлый!» — говорит он. Нур упаковала пять книг.

С Deutschlandticket они шесть часов едут на региональных поездах. Это долго, но дёшево. Квартира всего в десяти минутах от пляжа. Море ещё холодное, но дети сразу прыгают в воду.`,
      gloss: { berge: 'горы', deutschland: 'Германия', berlin: 'Берлин', haddad: 'Хаддад (фамилия)', leyla: 'Лейла (имя)', amir: 'Амир (имя)', nour: 'Нур (имя)', endlich: 'наконец', sommerferien: 'летние каникулы', ostsee: 'Балтийское море', personen: 'человек', vorher: 'накануне', bücher: 'книги', eingepackt: 'упаковала', regionalzügen: 'региональных поездах', springen: 'прыгают' },
      questions: [
        { q: 'Wohin fährt die Familie?', ru: 'Куда едет семья?', options: ['An die Ostsee', 'In die Berge', 'Nach Berlin'], answer: 'An die Ostsee' },
        { q: 'Warum bucht Leyla kein Hotel?', ru: 'Почему Лейла не бронирует отель?', options: ['Es ist zu teuer.', 'Es ist zu weit.', 'Es ist voll.'], answer: 'Es ist zu teuer.' },
        { q: 'Wie weit ist der Strand?', ru: 'Как далеко пляж?', options: ['Zehn Minuten', 'Eine Stunde', 'Sechs Stunden'], answer: 'Zehn Minuten' },
      ],
      translate: [
        { de: 'Wir haben eine Ferienwohnung gebucht.', ru: 'Мы забронировали квартиру для отдыха.', wrongRu: ['Мы забронировали отель.', 'Мы сняли квартиру надолго.'] },
        { de: 'Der Koffer ist zu schwer.', ru: 'Чемодан слишком тяжёлый.', wrongRu: ['Чемодан слишком большой.', 'Сумка слишком тяжёлая.'] },
        { de: 'Das Meer ist noch kalt.', ru: 'Море ещё холодное.', wrongRu: ['Море уже тёплое.', 'Озеро ещё холодное.'] },
      ],
    },
    {
      lesson: 1, title: 'Eine Reise ins Ausland',
      de: `Im Herbst möchte Amir mit Leyla eine kurze Reise ins Ausland machen, nach Prag. „Brauche ich ein Visum?“, fragt Amir. Frau Schulz erklärt: „Mit Ihrer Aufenthaltserlaubnis dürfen Sie in andere Schengen-Länder reisen, bis zu neunzig Tage. Nehmen Sie aber immer den Pass mit.“

Sie fliegen nicht, sondern fahren mit dem Bus. An der Grenze kontrolliert die Polizei kurz die Pässe.

In Prag machen sie eine Stadtrundfahrt. Sie sehen viele Sehenswürdigkeiten: die Karlsbrücke, die Burg und die Altstadt. „Nächstes Jahr fliegen wir nach Syrien“, sagt Leyla. „Meine Mutter wartet schon so lange.“`,
      ru: `Осенью Амир хочет съездить с Лейлой в короткую поездку за границу, в Прагу. «Мне нужна виза?» — спрашивает Амир. Госпожа Шульц объясняет: «С вашим разрешением на пребывание вы можете ездить в другие страны Шенгена до девяноста дней. Но всегда берите с собой паспорт».

Они не летят, а едут на автобусе. На границе полиция коротко проверяет паспорта.

В Праге они едут на обзорную экскурсию. Они видят много достопримечательностей: Карлов мост, Град и Старый город. «В следующем году полетим в Сирию, — говорит Лейла. — Мама так давно ждёт».`,
      gloss: { ostsee: 'Балтийское море', flugzeug: 'самолёт', auto: 'машина', amir: 'Амир (имя)', leyla: 'Лейла (имя)', schulz: 'Шульц (фамилия)', herbst: 'осень', kurze: 'короткую', prag: 'Прага', dürfen: 'можете (разрешено)', 'schengen-länder': 'страны Шенгена', reisen: 'ездить, путешествовать', neunzig: 'девяносто', fliegen: 'летят, летим', sondern: 'а (после отрицания)', kontrolliert: 'проверяет', pässe: 'паспорта', karlsbrücke: 'Карлов мост', burg: 'крепость, замок', altstadt: 'старый город', nächstes: 'следующий', syrien: 'Сирия' },
      questions: [
        { q: 'Wohin reisen Amir und Leyla im Herbst?', ru: 'Куда Амир и Лейла едут осенью?', options: ['Nach Prag', 'Nach Syrien', 'An die Ostsee'], answer: 'Nach Prag' },
        { q: 'Wie lange dürfen sie in andere Schengen-Länder reisen?', ru: 'Как долго они могут находиться в других странах Шенгена?', options: ['Bis zu neunzig Tage', 'Ein Jahr', 'Eine Woche'], answer: 'Bis zu neunzig Tage' },
        { q: 'Wie fahren sie nach Prag?', ru: 'Как они едут в Прагу?', options: ['Mit dem Bus', 'Mit dem Flugzeug', 'Mit dem Auto'], answer: 'Mit dem Bus' },
      ],
      translate: [
        { de: 'Brauche ich ein Visum?', ru: 'Мне нужна виза?', wrongRu: ['У меня есть виза?', 'Мне нужен паспорт?'] },
        { de: 'Wir fahren ins Ausland.', ru: 'Мы едем за границу.', wrongRu: ['Мы возвращаемся из-за границы.', 'Мы едем на море.'] },
        { de: 'Wir machen eine Stadtrundfahrt.', ru: 'Мы едем на обзорную экскурсию.', wrongRu: ['Мы гуляем по городу.', 'Мы покупаем сувениры.'] },
      ],
    },
  ],
};
