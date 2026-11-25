import type { Module } from '../types.ts';

// A1.2 pflege 03: basic care — skin, cream, shaving (lesson 0); washcloth, bed linen, changing (lesson 1).

export const module: Module = {
  id: 'pflege-a12-03-grundpflege', sphere: 'pflege', level: 'A1.2',
  title: 'Grundpflege', subtitle: 'Уход за телом: кожа, крем, бритьё, смена постельного белья.',
  words: [
    { id: 'pfl-a12-03-haut', icon: 'Hand', de: 'Haut', pos: 'noun', article: 'die', plural: 'Häute', ru: 'кожа', note: 'Мн. ч. почти не используется.', example: { de: 'Die Haut ist sehr trocken.', ru: 'Кожа очень сухая.', cloze: 'Haut' } },
    { id: 'pfl-a12-03-trocken', icon: 'Sun', de: 'trocken', pos: 'adj', ru: 'сухой', example: { de: 'Ist die Haut trocken?', ru: 'Кожа сухая?', cloze: 'trocken' } },
    { id: 'pfl-a12-03-nass', icon: 'Droplets', de: 'nass', pos: 'adj', ru: 'мокрый', example: { de: 'Das Bett ist nass.', ru: 'Кровать мокрая.', cloze: 'nass' } },
    { id: 'pfl-a12-03-creme', icon: 'Pipette', imageQuery: 'skin cream jar', de: 'Creme', pos: 'noun', article: 'die', plural: 'Cremes', ru: 'крем', example: { de: 'Die Creme ist gut für die Haut.', ru: 'Крем хорош для кожи.', cloze: 'Creme' } },
    { id: 'pfl-a12-03-eincremen', icon: 'Hand', de: 'eincremen', pos: 'verb', ru: 'намазывать кремом', forms: 'er cremt ein · hat eingecremt', note: 'Отделяемая приставка: Ich creme Ihren Rücken ein.', example: { de: 'Ich creme Ihnen die Beine ein.', ru: 'Я намажу вам ноги кремом.', cloze: 'creme' } },
    { id: 'pfl-a12-03-rasieren', icon: 'Scissors', de: 'rasieren', pos: 'verb', ru: 'брить; (sich rasieren) бриться', forms: 'er rasiert sich · hat sich rasiert', example: { de: 'Möchten Sie sich heute rasieren?', ru: 'Хотите сегодня побриться?', cloze: 'rasieren' } },
    { id: 'pfl-a12-03-rasierer', icon: 'Zap', imageQuery: 'electric shaver', de: 'Rasierer', pos: 'noun', article: 'der', plural: 'Rasierer', ru: 'бритва', example: { de: 'Der Rasierer liegt im Bad.', ru: 'Бритва лежит в ванной.', cloze: 'Rasierer' } },
    { id: 'pfl-a12-03-haar', icon: 'Wind', de: 'Haar', pos: 'noun', article: 'das', plural: 'Haare', ru: 'волос; (мн. ч.) волосы', note: 'Обычно мн. ч.: die Haare waschen — мыть голову.', collocation: { de: 'die Haare waschen', ru: 'мыть голову' }, example: { de: 'Heute waschen wir die Haare.', ru: 'Сегодня мы моем голову.', cloze: 'Haare' } },

    { id: 'pfl-a12-03-waschlappen', icon: 'Square', imageQuery: 'washcloth', de: 'Waschlappen', pos: 'noun', article: 'der', plural: 'Waschlappen', ru: 'мочалка (тканевая), рукавичка для мытья', parts: ['Wasch', 'lappen'], example: { de: 'Hier ist ein frischer Waschlappen.', ru: 'Вот свежая мочалка.', cloze: 'Waschlappen' } },
    { id: 'pfl-a12-03-schuessel', icon: 'Soup', imageQuery: 'wash basin bowl', de: 'Schüssel', pos: 'noun', article: 'die', plural: 'Schüsseln', ru: 'миска, таз', note: 'die Waschschüssel — тазик для мытья.', example: { de: 'Ich fülle die Schüssel mit warmem Wasser.', ru: 'Я наполняю таз тёплой водой.', cloze: 'Schüssel' } },
    { id: 'pfl-a12-03-bettwaesche', icon: 'BedDouble', imageQuery: 'bed linen', de: 'Bettwäsche', pos: 'noun', article: 'die', ru: 'постельное бельё', parts: ['Bett', 'wäsche'], note: 'Без мн. ч.', example: { de: 'Die Bettwäsche ist schmutzig.', ru: 'Постельное бельё грязное.', cloze: 'Bettwäsche' } },
    { id: 'pfl-a12-03-wechseln', icon: 'RefreshCw', de: 'wechseln', pos: 'verb', ru: 'менять', forms: 'er wechselt · hat gewechselt', collocation: { de: 'die Bettwäsche wechseln', ru: 'сменить постельное бельё', accept: ['das Bett frisch beziehen'] }, example: { de: 'Wir wechseln jetzt die Bettwäsche.', ru: 'Сейчас мы сменим постельное бельё.', cloze: 'wechseln' } },
    { id: 'pfl-a12-03-abtrocknen', icon: 'Wind', de: 'abtrocknen', pos: 'verb', ru: 'вытирать (насухо)', forms: 'er trocknet ab · hat abgetrocknet', note: 'sich abtrocknen — вытираться.', example: { de: 'Ich trockne Ihnen den Rücken ab.', ru: 'Я вытру вам спину.', cloze: 'trockne' } },
    { id: 'pfl-a12-03-zahnprothese', icon: 'Smile', imageQuery: 'denture', de: 'Zahnprothese', pos: 'noun', article: 'die', plural: 'Zahnprothesen', ru: 'зубной протез', parts: ['Zahn', 'prothese'], note: 'Разговорно: die dritten Zähne, das Gebiss.', example: { de: 'Die Zahnprothese liegt im Becher.', ru: 'Зубной протез лежит в стаканчике.', cloze: 'Zahnprothese' } },
    { id: 'pfl-a12-03-umdrehen', icon: 'RotateCcw', de: 'umdrehen', pos: 'verb', ru: 'поворачивать; (sich umdrehen) поворачиваться', forms: 'er dreht sich um · hat sich umgedreht', note: 'Drehen Sie sich bitte auf die Seite. — Повернитесь, пожалуйста, на бок.', example: { de: 'Drehen Sie sich bitte um.', ru: 'Повернитесь, пожалуйста.', cloze: 'Drehen' } },
    { id: 'pfl-a12-03-seite', icon: 'PanelLeft', de: 'Seite', pos: 'noun', article: 'die', plural: 'Seiten', ru: 'сторона, бок; страница', collocation: { de: 'auf der Seite liegen', ru: 'лежать на боку' }, example: { de: 'Legen Sie sich bitte auf die Seite.', ru: 'Лягте, пожалуйста, на бок.', cloze: 'Seite' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Trockene Haut',
      de: `Herr Yilmaz kann heute nicht duschen. Olena wäscht ihn im Bett. Danach sieht sie: Seine Haut ist an den Beinen sehr trocken. „Ich creme Ihnen die Beine ein“, sagt sie. „Die Creme ist gut für trockene Haut.“

Herr Yilmaz fragt: „Kann ich mich auch rasieren?“ – „Natürlich. Wo ist Ihr Rasierer?“ – „Im Schrank, in der grauen Tasche.“

Olena holt den Rasierer und einen Spiegel. Herr Yilmaz rasiert sich allein. Dann kämmt er seine Haare. „Jetzt fühle ich mich wie ein neuer Mensch“, sagt er.`,
      ru: `Господин Йылмаз сегодня не может принять душ. Олена моет его в постели. После этого она видит: кожа на ногах у него очень сухая. «Я намажу вам ноги кремом, — говорит она. — Этот крем хорош для сухой кожи».

Господин Йылмаз спрашивает: «А можно мне ещё и побриться?» — «Конечно. Где ваша бритва?» — «В шкафу, в серой сумке».

Олена приносит бритву и зеркало. Господин Йылмаз бреется сам. Потом он причёсывается. «Теперь я чувствую себя новым человеком», — говорит он.`,
      gloss: { yilmaz: 'Йылмаз (фамилия)', olena: 'Олена (имя)', herr: 'господин', kann: 'может, могу', heute: 'сегодня', duschen: 'принять душ', wäscht: 'моет', ihn: 'его', danach: 'после этого', sieht: 'видит', seine: 'его, свои', beinen: 'ногах (дат. мн.)', sagt: 'говорит', trockene: 'сухую, сухая', fragt: 'спрашивает', mich: 'себя, меня', natürlich: 'конечно', wo: 'где', schrank: 'шкаф', grauen: 'серой', tasche: 'сумка', holt: 'приносит (сходив)', spiegel: 'зеркало', allein: 'сам, один', dann: 'потом', kämmt: 'причёсывает', jetzt: 'теперь', fühle: 'чувствую', wie: 'как', neuer: 'новый', mensch: 'человек', was: 'что', bad: 'ванная', tisch: 'стол', arme: 'руки', rücken: 'спина', kopf: 'голова' },
      questions: [
        { q: 'Wo ist die Haut sehr trocken?', ru: 'Где кожа очень сухая?', options: ['An den Beinen', 'Am Rücken', 'Am Kopf'], answer: 'An den Beinen' },
        { q: 'Wo ist der Rasierer?', ru: 'Где бритва?', options: ['Im Schrank', 'Im Bad', 'Auf dem Tisch'], answer: 'Im Schrank' },
        { q: 'Was macht Herr Yilmaz allein?', ru: 'Что господин Йылмаз делает сам?', options: ['Er rasiert sich.', 'Er duscht.', 'Er wechselt die Bettwäsche.'], answer: 'Er rasiert sich.' },
      ],
      translate: [
        { de: 'Die Haut ist sehr trocken.', ru: 'Кожа очень сухая.', wrongRu: ['Кожа очень мокрая.', 'Волосы очень сухие.'] },
        { de: 'Ich creme Ihnen die Beine ein.', ru: 'Я намажу вам ноги кремом.', wrongRu: ['Я помою вам ноги.', 'Я намажу вам руки кремом.'] },
        { de: 'Möchten Sie sich rasieren?', ru: 'Хотите побриться?', wrongRu: ['Хотите помыться?', 'Хотите причесаться?'] },
      ],
    },
    {
      lesson: 1, title: 'Frische Bettwäsche',
      de: `Frau Wolf hat in der Nacht geschwitzt. Ihr Nachthemd und die Bettwäsche sind nass. Olena und Tom wechseln das Bett.

Zuerst füllt Olena eine Schüssel mit warmem Wasser. Sie wäscht Frau Wolf mit dem Waschlappen und trocknet sie gut ab. „Drehen Sie sich bitte auf die Seite“, sagt Tom. Frau Wolf dreht sich um. Tom nimmt die alte Bettwäsche weg und legt die neue hin.

Zum Schluss putzt Olena die Zahnprothese von Frau Wolf. Sie legt sie in einen Becher mit Wasser. Frau Wolf lächelt: „Danke! Jetzt ist alles frisch.“`,
      ru: `Госпожа Вольф ночью вспотела. Её ночная рубашка и постельное бельё мокрые. Олена и Том перестилают кровать.

Сначала Олена наполняет таз тёплой водой. Она моет госпожу Вольф мочалкой и хорошо вытирает. «Повернитесь, пожалуйста, на бок», — говорит Том. Госпожа Вольф поворачивается. Том убирает старое бельё и стелет новое.

Напоследок Олена чистит зубной протез госпожи Вольф. Она кладёт его в стаканчик с водой. Госпожа Вольф улыбается: «Спасибо! Теперь всё свежее».`,
      gloss: { umgefallen: 'упал, опрокинулся', offen: 'открыт(ый)', wolf: 'Вольф (фамилия)', olena: 'Олена (имя)', tom: 'Том (имя)', frau: 'госпожа', nacht: 'ночь', geschwitzt: 'вспотела', ihr: 'её', nachthemd: 'ночная рубашка', zuerst: 'сначала', füllt: 'наполняет', mit: 'с, чем', warmem: 'тёплой', wasser: 'вода', wäscht: 'моет', trocknet: 'вытирает; (trocknet … ab) вытирает насухо', sie: 'она; её', gut: 'хорошо', sagt: 'говорит', dreht: 'поворачивает; (dreht sich um) поворачивается', nimmt: 'берёт; (nimmt … weg) убирает', weg: '(nimmt … weg) убирает', alte: 'старое', legt: 'кладёт; (legt … hin) стелет', hin: '(legt … hin) кладёт, стелет', neue: 'новое', zum: '(zum Schluss) напоследок', schluss: 'конец; (zum Schluss) напоследок', putzt: 'чистит', becher: 'стаканчик', lächelt: 'улыбается', danke: 'спасибо', jetzt: 'теперь', alles: 'всё', frisch: 'свежий', frische: 'свежее', was: 'что', warum: 'почему', wer: 'кто', kalt: 'холодный', schmutzig: 'грязный', bett: 'кровать', handtuch: 'полотенце', kaltem: 'холодной' },
      questions: [
        { q: 'Warum ist die Bettwäsche nass?', ru: 'Почему постельное бельё мокрое?', options: ['Frau Wolf hat geschwitzt.', 'Das Glas ist umgefallen.', 'Das Fenster war offen.'], answer: 'Frau Wolf hat geschwitzt.' },
        { q: 'Womit wäscht Olena Frau Wolf?', ru: 'Чем Олена моет госпожу Вольф?', options: ['Mit dem Waschlappen', 'Mit dem Handtuch', 'Mit der Creme'], answer: 'Mit dem Waschlappen' },
        { q: 'Wo liegt die Zahnprothese am Ende?', ru: 'Где в конце лежит зубной протез?', options: ['In einem Becher mit Wasser', 'Im Bett', 'In der Schüssel'], answer: 'In einem Becher mit Wasser' },
      ],
      translate: [
        { de: 'Wir wechseln jetzt die Bettwäsche.', ru: 'Сейчас мы сменим постельное бельё.', wrongRu: ['Сейчас мы постираем постельное бельё.', 'Завтра мы сменим постельное бельё.'] },
        { de: 'Drehen Sie sich bitte auf die Seite.', ru: 'Повернитесь, пожалуйста, на бок.', wrongRu: ['Лягте, пожалуйста, на спину.', 'Сядьте, пожалуйста, на край кровати.'] },
        { de: 'Die Schüssel ist voll mit Wasser.', ru: 'Таз полон воды.', wrongRu: ['Таз пустой.', 'Стакан полон воды.'] },
      ],
    },
  ],
};
