import type { Module } from '../types.ts';

export const module: Module = {
  id: 'informatik-a12-09-spiele', sphere: 'informatik', level: 'A1.2',
  title: 'Spiele', subtitle: 'Уровень, очки, победа и рекорд: говорим о компьютерных играх.',
  words: [
    { id: 'inf-a12-09-spiel', icon: 'Dices', de: 'Spiel', pos: 'noun', article: 'das', plural: 'Spiele', ru: 'игра', imageQuery: 'video game', collocation: { de: 'ein Spiel spielen', ru: 'играть в игру', accept: ['das Spiel spielen'] }, example: { de: 'Das Spiel ist neu und kostenlos.', ru: 'Игра новая и бесплатная.', cloze: 'Spiel' } },
    { id: 'inf-a12-09-spielen', icon: 'Gamepad2', de: 'spielen', pos: 'verb', ru: 'играть', forms: 'er spielt · hat gespielt', note: 'Без предлога: ein Spiel spielen, Gitarre spielen.', example: { de: 'Am Wochenende spiele ich mit Freunden.', ru: 'На выходных я играю с друзьями.', cloze: 'spiele' } },
    { id: 'inf-a12-09-spieler', icon: 'UserRound', de: 'Spieler', pos: 'noun', article: 'der', plural: 'Spieler', ru: 'игрок', imageQuery: 'person playing video game', note: 'Женщина — die Spielerin.', example: { de: 'Der Spieler startet im ersten Level.', ru: 'Игрок начинает с первого уровня.', cloze: 'Spieler' } },
    { id: 'inf-a12-09-level', icon: 'Layers', de: 'Level', pos: 'noun', article: 'das', plural: 'Levels', ru: 'уровень (в игре)', collocation: { de: 'das nächste Level', ru: 'следующий уровень' }, example: { de: 'Das letzte Level ist sehr schwer.', ru: 'Последний уровень очень трудный.', cloze: 'Level' } },
    { id: 'inf-a12-09-punkt', icon: 'Star', de: 'Punkt', pos: 'noun', article: 'der', plural: 'Punkte', ru: 'очко, балл; точка', collocation: { de: 'Punkte sammeln', ru: 'набирать очки' }, example: { de: 'Für jeden Stern bekommst du einen Punkt.', ru: 'За каждую звезду ты получаешь очко.', cloze: 'Punkt' } },
    { id: 'inf-a12-09-gewinnen', icon: 'Trophy', de: 'gewinnen', pos: 'verb', ru: 'выигрывать, побеждать', forms: 'er gewinnt · hat gewonnen', collocation: { de: 'ein Spiel gewinnen', ru: 'выиграть игру', accept: ['das Spiel gewinnen'] }, example: { de: 'Heute gewinnt mein Bruder immer.', ru: 'Сегодня мой брат всё время выигрывает.', cloze: 'gewinnt' } },
    { id: 'inf-a12-09-verlieren', icon: 'Frown', de: 'verlieren', pos: 'verb', ru: 'проигрывать; терять', forms: 'er verliert · hat verloren', note: 'Также «терять»: das Handy verlieren.', example: { de: 'Ich habe das Spiel leider verloren.', ru: 'Я, к сожалению, проиграл игру.', cloze: 'verloren' } },
    { id: 'inf-a12-09-spielkonsole', icon: 'Gamepad', de: 'Spielkonsole', pos: 'noun', article: 'die', plural: 'Spielkonsolen', ru: 'игровая приставка', parts: ['Spiel', 'konsole'], imageQuery: 'video game console', example: { de: 'Mein Freund hat eine neue Spielkonsole.', ru: 'У моего друга новая игровая приставка.', cloze: 'Spielkonsole' } },

    { id: 'inf-a12-09-controller', icon: 'Joystick', de: 'Controller', pos: 'noun', article: 'der', plural: 'Controller', ru: 'геймпад, контроллер', imageQuery: 'game controller', example: { de: 'Der Controller hat viele Tasten.', ru: 'У геймпада много кнопок.', cloze: 'Controller' } },
    { id: 'inf-a12-09-runde', icon: 'RotateCw', de: 'Runde', pos: 'noun', article: 'die', plural: 'Runden', ru: 'раунд, кон', collocation: { de: 'noch eine Runde spielen', ru: 'сыграть ещё один раунд', accept: ['noch eine Runde'] }, example: { de: 'Komm, wir spielen noch eine Runde!', ru: 'Давай сыграем ещё раунд!', cloze: 'Runde' } },
    { id: 'inf-a12-09-leben', icon: 'Heart', de: 'Leben', pos: 'noun', article: 'das', plural: 'Leben', ru: 'жизнь', note: 'В играх — «жизни»: drei Leben haben.', example: { de: 'Ich habe nur noch ein Leben.', ru: 'У меня осталась только одна жизнь.', cloze: 'Leben' } },
    { id: 'inf-a12-09-gegner', icon: 'Swords', de: 'Gegner', pos: 'noun', article: 'der', plural: 'Gegner', ru: 'противник, соперник', note: 'Женщина — die Gegnerin.', example: { de: 'Der Gegner ist stark und schnell.', ru: 'Противник сильный и быстрый.', cloze: 'Gegner' } },
    { id: 'inf-a12-09-ziel', icon: 'Flag', de: 'Ziel', pos: 'noun', article: 'das', plural: 'Ziele', ru: 'цель; финиш', imageQuery: 'checkered finish flag', collocation: { de: 'das Ziel erreichen', ru: 'дойти до финиша, достичь цели' }, example: { de: 'Endlich bin ich im Ziel!', ru: 'Наконец я на финише!', cloze: 'Ziel' } },
    { id: 'inf-a12-09-springen', icon: 'ArrowBigUp', de: 'springen', pos: 'verb', ru: 'прыгать', forms: 'er springt · ist gesprungen', note: 'Perfekt с sein: ich bin gesprungen.', imageQuery: 'person jumping', example: { de: 'Die Figur springt über den Fluss.', ru: 'Фигурка прыгает через реку.', cloze: 'springt' } },
    { id: 'inf-a12-09-schaffen', icon: 'BadgeCheck', de: 'schaffen', pos: 'verb', ru: 'справиться, суметь (сделать)', forms: 'er schafft · hat geschafft', note: 'Разговорное: Ich habe es geschafft! — У меня получилось!', collocation: { de: 'das Level schaffen', ru: 'пройти уровень' }, example: { de: 'Ich habe es endlich geschafft!', ru: 'У меня наконец получилось!', cloze: 'geschafft' } },
    { id: 'inf-a12-09-rekord', icon: 'Medal', de: 'Rekord', pos: 'noun', article: 'der', plural: 'Rekorde', ru: 'рекорд', collocation: { de: 'einen neuen Rekord aufstellen', ru: 'установить новый рекорд' }, example: { de: 'Mein Bruder hat einen neuen Rekord.', ru: 'У моего брата новый рекорд.', cloze: 'Rekord' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Samstag bei Laura',
      de: `Am Samstag ist Moritz bei seiner Freundin Laura. Laura hat eine neue Spielkonsole. Sie spielen zusammen ein Spiel mit Autos.

Jeder Spieler fährt ein Auto. Für jeden Stern gibt es einen Punkt. Das erste Level ist leicht. Moritz hat am Ende zwanzig Punkte und Laura nur zwölf. Moritz gewinnt!

Das zweite Level ist schwer. Moritz fährt zu schnell und verliert. Laura lacht und gewinnt. „Das Spiel ist super“, sagt Moritz. Am Abend spielen sie noch eine Stunde.`,
      ru: `В субботу Мориц у своей подруги Лауры. У Лауры новая игровая приставка. Они вместе играют в игру с машинами.

Каждый игрок ведёт машину. За каждую звезду дают очко. Первый уровень лёгкий. У Морица в конце двадцать очков, а у Лауры только двенадцать. Мориц выигрывает!

Второй уровень трудный. Мориц едет слишком быстро и проигрывает. Лаура смеётся и выигрывает. «Игра супер», — говорит Мориц. Вечером они играют ещё час.`,
      gloss: { samstag: 'суббота', moritz: 'Мориц (имя)', seiner: 'своей', laura: 'Лаура (имя)', freundin: 'подруга', autos: 'машины', fährt: 'едет; ведёт (машину)', auto: 'машина', stern: 'звезда', lacht: 'смеётся', super: 'супер, отлично', zweiten: 'второму, втором', niemand: 'никто' },
      questions: [
        { q: 'Was hat Laura?', ru: 'Что есть у Лауры?', options: ['Eine neue Spielkonsole', 'Ein neues Auto', 'Einen neuen Computer'], answer: 'Eine neue Spielkonsole' },
        { q: 'Wie viele Punkte hat Laura im ersten Level?', ru: 'Сколько очков у Лауры на первом уровне?', options: ['Zwölf', 'Zwanzig', 'Zehn'], answer: 'Zwölf' },
        { q: 'Wer gewinnt im zweiten Level?', ru: 'Кто выигрывает на втором уровне?', options: ['Laura', 'Moritz', 'Niemand'], answer: 'Laura' },
      ],
      translate: [
        { de: 'Wir spielen zusammen ein Spiel.', ru: 'Мы вместе играем в игру.', wrongRu: ['Мы вместе выигрываем игру.', 'Мы вместе покупаем игру.'] },
        { de: 'Das erste Level ist leicht.', ru: 'Первый уровень лёгкий.', wrongRu: ['Первый уровень трудный.', 'Последний уровень лёгкий.'] },
        { de: 'Moritz verliert das Spiel.', ru: 'Мориц проигрывает игру.', wrongRu: ['Мориц выигрывает игру.', 'Мориц проиграл игру.'] },
      ],
    },
    {
      lesson: 1, title: 'Nur noch eine Runde',
      de: `Am Sonntag spielt Laura allein ein altes Spiel. Ihre Figur springt über Steine und Wasser. Der Controller ist neu und funktioniert super.

In jedem Level gibt es Gegner. Sie sind schnell und gefährlich. Laura hat drei Leben. Im fünften Level verliert sie zwei Leben. Jetzt hat sie nur noch ein Leben!

Das Ziel ist ganz nah. Laura springt, springt noch einmal und schafft es! Sie hat einen neuen Rekord: elftausend Punkte. Ihre Mutter ruft: „Essen!“ Aber Laura sagt: „Nur noch eine Runde, bitte!“`,
      ru: `В воскресенье Лаура одна играет в старую игру. Её фигурка прыгает через камни и воду. Геймпад новый и работает отлично.

На каждом уровне есть противники. Они быстрые и опасные. У Лауры три жизни. На пятом уровне она теряет две жизни. Теперь у неё осталась только одна жизнь!

Финиш совсем близко. Лаура прыгает, прыгает ещё раз и справляется! У неё новый рекорд: одиннадцать тысяч очков. Мама зовёт: «Обедать!» Но Лаура говорит: «Ещё только один раунд, пожалуйста!»`,
      gloss: { sonntag: 'воскресенье', laura: 'Лаура (имя)', altes: 'старую', figur: 'фигурка, персонаж', steine: 'камни', wasser: 'вода', super: 'отлично', gefährlich: 'опасный', fünften: 'пятом', nah: 'близко', einmal: 'раз (noch einmal — ещё раз)', elftausend: 'одиннадцать тысяч', essen: 'еда; есть (Essen! — к столу!)', anfang: 'начало', hunger: 'голод (Hunger haben — хотеть есть)', verliert: 'теряет; проигрывает', schafft: 'справляется (es schaffen)' },
      questions: [
        { q: 'Wie viele Leben hat Laura am Anfang?', ru: 'Сколько жизней у Лауры в начале?', options: ['Drei', 'Zwei', 'Eins'], answer: 'Drei' },
        { q: 'Wo verliert Laura zwei Leben?', ru: 'Где Лаура теряет две жизни?', options: ['Im fünften Level', 'Im ersten Level', 'Im Ziel'], answer: 'Im fünften Level' },
        { q: 'Was sagt Laura zu ihrer Mutter?', ru: 'Что Лаура говорит маме?', options: ['Nur noch eine Runde, bitte!', 'Ich habe keinen Hunger.', 'Ich habe leider verloren.'], answer: 'Nur noch eine Runde, bitte!' },
      ],
      translate: [
        { de: 'Die Figur springt über das Wasser.', ru: 'Фигурка прыгает через воду.', wrongRu: ['Фигурка падает в воду.', 'Фигурка прыгала через воду.'] },
        { de: 'Ich habe nur noch ein Leben.', ru: 'У меня осталась только одна жизнь.', wrongRu: ['У меня ещё три жизни.', 'У него осталась только одна жизнь.'] },
        { de: 'Laura hat einen neuen Rekord.', ru: 'У Лауры новый рекорд.', wrongRu: ['У Лауры старый рекорд.', 'У Лауры новый геймпад.'] },
      ],
    },
  ],
};
