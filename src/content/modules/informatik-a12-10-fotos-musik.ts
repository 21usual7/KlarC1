import type { Module } from '../types.ts';

export const module: Module = {
  id: 'informatik-a12-10-fotos-musik', sphere: 'informatik', level: 'A1.2',
  title: 'Fotos und Musik', subtitle: 'Фото, альбом, плейлист и колонка: медиа в телефоне и компьютере.',
  words: [
    { id: 'inf-a12-10-bild', icon: 'Image', de: 'Bild', pos: 'noun', article: 'das', plural: 'Bilder', ru: 'картинка, изображение, фото', imageQuery: 'framed picture', collocation: { de: 'ein Bild machen', ru: 'сделать снимок', accept: ['ein Foto machen'] }, example: { de: 'Das Bild ist sehr schön.', ru: 'Картинка очень красивая.', cloze: 'Bild' } },
    { id: 'inf-a12-10-knipsen', icon: 'Camera', de: 'knipsen', pos: 'verb', ru: 'щёлкать, фотографировать (разг.)', forms: 'er knipst · hat geknipst', note: 'Разговорное слово; нейтрально — fotografieren. Без предлога: den Hund knipsen.', imageQuery: 'person taking photo with smartphone', example: { de: 'Ich knipse gern Tiere im Zoo.', ru: 'Я люблю фоткать животных в зоопарке.', cloze: 'knipse' } },
    { id: 'inf-a12-10-selfie', icon: 'SwitchCamera', de: 'Selfie', pos: 'noun', article: 'das', plural: 'Selfies', ru: 'селфи', imageQuery: 'selfie', collocation: { de: 'ein Selfie machen', ru: 'сделать селфи' }, example: { de: 'Wir machen ein Selfie vor der Schule.', ru: 'Мы делаем селфи перед школой.', cloze: 'Selfie' } },
    { id: 'inf-a12-10-galerie', icon: 'Images', imageQuery: 'photo gallery wall', de: 'Galerie', pos: 'noun', article: 'die', plural: 'Galerien', ru: 'галерея', note: 'В телефоне — место, где лежат все фото.', example: { de: 'Das Foto ist in der Galerie.', ru: 'Фото в галерее.', cloze: 'Galerie' } },
    { id: 'inf-a12-10-album', icon: 'BookImage', de: 'Album', pos: 'noun', article: 'das', plural: 'Alben', ru: 'альбом', imageQuery: 'photo album', collocation: { de: 'ein Album erstellen', ru: 'создать альбом', accept: ['ein Album machen'] }, example: { de: 'Ich mache ein Album für den Urlaub.', ru: 'Я делаю альбом для отпуска.', cloze: 'Album' } },
    { id: 'inf-a12-10-teilen', icon: 'Share2', imageQuery: 'sharing food', de: 'teilen', pos: 'verb', ru: 'делиться; делить', forms: 'er teilt · hat geteilt', note: 'etwas mit + Dat teilen: das Foto mit Freunden teilen.', collocation: { de: 'ein Foto teilen', ru: 'поделиться фото', accept: ['das Foto teilen', 'ein Bild teilen'] }, example: { de: 'Ich teile das Video mit meiner Klasse.', ru: 'Я делюсь видео со своим классом.', cloze: 'teile' } },
    { id: 'inf-a12-10-filter', icon: 'Wand', imageQuery: 'camera lens filter', de: 'Filter', pos: 'noun', article: 'der', plural: 'Filter', ru: 'фильтр', example: { de: 'Mit diesem Filter ist das Bild schwarz-weiß.', ru: 'С этим фильтром картинка чёрно-белая.', cloze: 'Filter' } },
    { id: 'inf-a12-10-dunkel', icon: 'Moon', de: 'dunkel', pos: 'adj', ru: 'тёмный', note: 'С окончанием e выпадает: ein dunkles Bild.', example: { de: 'Das Foto ist leider zu dunkel.', ru: 'Фото, к сожалению, слишком тёмное.', cloze: 'dunkel' } },

    { id: 'inf-a12-10-musik', icon: 'Music', imageQuery: 'music concert', de: 'Musik', pos: 'noun', article: 'die', ru: 'музыка', collocation: { de: 'Musik hören', ru: 'слушать музыку' }, example: { de: 'Beim Lernen höre ich gern Musik.', ru: 'Когда учусь, я люблю слушать музыку.', cloze: 'Musik' } },
    { id: 'inf-a12-10-lied', icon: 'Music2', imageQuery: 'singer with microphone', de: 'Lied', pos: 'noun', article: 'das', plural: 'Lieder', ru: 'песня', example: { de: 'Dieses Lied ist sehr bekannt.', ru: 'Эта песня очень известная.', cloze: 'Lied' } },
    { id: 'inf-a12-10-hoeren', icon: 'Ear', imageQuery: 'listening headphones', de: 'hören', pos: 'verb', ru: 'слушать; слышать', forms: 'er hört · hat gehört', note: 'Без предлога: Musik hören, das Radio hören.', example: { de: 'Hörst du das neue Lied?', ru: 'Ты слышишь новую песню?', cloze: 'Hörst' } },
    { id: 'inf-a12-10-lautsprecher', icon: 'Speaker', de: 'Lautsprecher', pos: 'noun', article: 'der', plural: 'Lautsprecher', ru: 'колонка, динамик', parts: ['Laut', 'sprecher'], imageQuery: 'bluetooth speaker', example: { de: 'Der Lautsprecher ist klein, aber laut.', ru: 'Колонка маленькая, но громкая.', cloze: 'Lautsprecher' } },
    { id: 'inf-a12-10-laut', icon: 'Megaphone', de: 'laut', pos: 'adj', ru: 'громкий; громко', collocation: { de: 'die Musik lauter machen', ru: 'сделать музыку громче' }, example: { de: 'Die Musik ist zu laut.', ru: 'Музыка слишком громкая.', cloze: 'laut' } },
    { id: 'inf-a12-10-leise', icon: 'Volume1', de: 'leise', pos: 'adj', ru: 'тихий; тихо', example: { de: 'Bitte sprich leise, das Baby schläft.', ru: 'Пожалуйста, говори тихо, малыш спит.', cloze: 'leise' } },
    { id: 'inf-a12-10-playlist', icon: 'ListMusic', imageQuery: 'music player headphones', de: 'Playlist', pos: 'noun', article: 'die', plural: 'Playlists', ru: 'плейлист', collocation: { de: 'eine Playlist erstellen', ru: 'создать плейлист', accept: ['eine Playlist machen'] }, example: { de: 'Meine Playlist hat viele Lieder.', ru: 'В моём плейлисте много песен.', cloze: 'Playlist' } },
    { id: 'inf-a12-10-streamen', icon: 'Radio', imageQuery: 'streaming video', de: 'streamen', pos: 'verb', ru: 'слушать/смотреть онлайн, стримить', forms: 'er streamt · hat gestreamt', note: 'Из английского, спрягается как обычный глагол: ich streame.', example: { de: 'Ich streame Musik auf dem Handy.', ru: 'Я слушаю музыку онлайн на телефоне.', cloze: 'streame' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Fotos vom Ausflug',
      de: `Emma und ihre Klasse machen einen Ausflug in den Prater. Emma knipst viel: Bäume, Tiere und das Riesenrad. Am Ende machen alle zusammen ein Selfie.

Am Abend sitzt Emma zu Hause. In der Galerie hat sie jetzt hundert Bilder! Manche Bilder sind zu dunkel. Emma nimmt einen Filter, und die Bilder sind wieder schön.

Dann macht sie ein Album. Es heißt „Prater“. Emma teilt das Album mit der Klasse. Die Lehrerin schreibt: „Danke, Emma! Die Bilder sind super.“`,
      ru: `Эмма и её класс едут на экскурсию в Пратер. Эмма много фотографирует: деревья, животных и колесо обозрения. В конце все вместе делают селфи.

Вечером Эмма сидит дома. В галерее у неё теперь сто фотографий! Некоторые фото слишком тёмные. Эмма берёт фильтр, и фото снова красивые.

Потом она делает альбом. Он называется «Пратер». Эмма делится альбомом с классом. Учительница пишет: «Спасибо, Эмма! Фото супер».`,
      gloss: { emma: 'Эмма (имя)', ausflug: 'экскурсия, поездка', prater: 'Пратер (парк в Вене)', tiere: 'животные', riesenrad: 'колесо обозрения', schön: 'красивый', super: 'супер, отлично', kino: 'кино, кинотеатр', manchen: 'некоторыми', manche: 'некоторые', bildern: 'картинками, фото (дат. мн.)', danke: 'спасибо' },
      questions: [
        { q: 'Wohin macht die Klasse einen Ausflug?', ru: 'Куда класс едет на экскурсию?', options: ['In den Prater', 'In die Schule', 'Ins Kino'], answer: 'In den Prater' },
        { q: 'Was ist das Problem mit manchen Bildern?', ru: 'Какая проблема с некоторыми фото?', options: ['Sie sind zu dunkel.', 'Sie sind zu klein.', 'Sie sind gelöscht.'], answer: 'Sie sind zu dunkel.' },
        { q: 'Mit wem teilt Emma das Album?', ru: 'С кем Эмма делится альбомом?', options: ['Mit der Klasse', 'Mit ihrer Mutter', 'Mit ihrem Bruder'], answer: 'Mit der Klasse' },
      ],
      translate: [
        { de: 'Emma knipst das Riesenrad.', ru: 'Эмма фотографирует колесо обозрения.', wrongRu: ['Эмма рисует колесо обозрения.', 'Эмма фотографировала колесо обозрения.'] },
        { de: 'Manche Bilder sind zu dunkel.', ru: 'Некоторые фото слишком тёмные.', wrongRu: ['Все фото слишком тёмные.', 'Некоторые фото слишком светлые.'] },
        { de: 'Emma teilt das Album mit der Klasse.', ru: 'Эмма делится альбомом с классом.', wrongRu: ['Эмма удаляет альбом класса.', 'Класс делится альбомом с Эммой.'] },
      ],
    },
    {
      lesson: 1, title: 'Musik in der WG',
      de: `Valentin studiert an der TU Wien und wohnt mit Pia in einer WG. Valentin hört gern Musik. Er streamt jeden Tag Lieder auf dem Handy.

Am Freitag hat Pia Geburtstag. Valentin macht eine Playlist für die Party. Sie hat fünfzig Lieder. Das erste Lied ist von Falco, denn Pia liebt Musik aus Österreich.

Am Abend kommen viele Freunde. Der Lautsprecher ist neu und sehr laut. Um elf klopft die Nachbarin: „Bitte leise! Ich muss morgen früh arbeiten.“ Valentin macht die Musik leise. Die Party geht weiter.`,
      ru: `Валентин учится в Венском техническом университете и живёт с Пией в общей квартире. Валентин любит слушать музыку. Каждый день он слушает песни онлайн на телефоне.

В пятницу у Пии день рождения. Валентин делает плейлист для вечеринки. В нём пятьдесят песен. Первая песня — Фалько, потому что Пия любит музыку из Австрии.

Вечером приходит много друзей. Колонка новая и очень громкая. В одиннадцать стучит соседка: «Потише, пожалуйста! Мне завтра рано на работу». Валентин делает музыку тише. Вечеринка продолжается.`,
      gloss: { valentin: 'Валентин (имя)', tu: 'TU — технический университет', wien: 'Вена', pia: 'Пия (имя)', wg: 'WG — общая квартира (Wohngemeinschaft)', freitag: 'пятница', geburtstag: 'день рождения', party: 'вечеринка', fünfzig: 'пятьдесят', falco: 'Фалько (австрийский певец)', liebt: 'любит', österreich: 'Австрия', klopft: 'стучит', nachbarin: 'соседка', früh: 'рано', worauf: 'на чём', fernseher: 'телевизор', fünfzehn: 'пятнадцать', mitfeiern: 'праздновать вместе', weiter: 'дальше (weitergehen — продолжаться)', macht: 'делает' },
      questions: [
        { q: 'Worauf streamt Valentin die Lieder?', ru: 'На чём Валентин слушает песни онлайн?', options: ['Auf dem Handy', 'Auf dem Computer', 'Auf dem Fernseher'], answer: 'Auf dem Handy' },
        { q: 'Wie viele Lieder hat die Playlist?', ru: 'Сколько песен в плейлисте?', options: ['Fünfzig', 'Fünfzehn', 'Elf'], answer: 'Fünfzig' },
        { q: 'Was will die Nachbarin?', ru: 'Чего хочет соседка?', options: ['Die Musik soll leise sein.', 'Sie will mitfeiern.', 'Sie sucht Pia.'], answer: 'Die Musik soll leise sein.' },
      ],
      translate: [
        { de: 'Valentin hört gern Musik.', ru: 'Валентин любит слушать музыку.', wrongRu: ['Валентин не любит слушать музыку.', 'Валентин любит играть музыку.'] },
        { de: 'Der Lautsprecher ist sehr laut.', ru: 'Колонка очень громкая.', wrongRu: ['Колонка очень тихая.', 'Музыка очень громкая.'] },
        { de: 'Er macht eine Playlist für die Party.', ru: 'Он делает плейлист для вечеринки.', wrongRu: ['Она делает плейлист для вечеринки.', 'Он слушает плейлист на вечеринке.'] },
      ],
    },
  ],
};
