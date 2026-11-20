import type { Module } from '../types.ts';

// A1.2 cyber 02: who sees my profile (lesson 0) and strangers, requests, comments (lesson 1).

export const module: Module = {
  id: 'cyber-a12-02-profil', sphere: 'cyber', level: 'A1.2',
  title: 'Mein Profil online', subtitle: 'Профиль, аватарка, закрытый и публичный аккаунт: кто видит, что ты постишь.',
  words: [
    { id: 'cyb-a12-02-profil', icon: 'IdCard', imageQuery: 'social media profile', de: 'Profil', pos: 'noun', article: 'das', plural: 'Profile', ru: 'профиль', collocation: { de: 'ein Profil erstellen', ru: 'создать профиль', accept: ['das Profil erstellen', 'ein Profil anlegen'] }, example: { de: 'Wer sieht mein Profil?', ru: 'Кто видит мой профиль?', cloze: 'Profil' } },
    { id: 'cyb-a12-02-profilbild', icon: 'SquareUserRound', de: 'Profilbild', pos: 'noun', article: 'das', plural: 'Profilbilder', ru: 'аватарка, фото профиля', parts: ['Profil', 'bild'], imageQuery: 'profile picture', collocation: { de: 'das Profilbild ändern', ru: 'сменить аватарку', accept: ['mein Profilbild ändern', 'ein neues Profilbild'] }, example: { de: 'Mein Profilbild zeigt meinen Hund.', ru: 'На моей аватарке — моя собака.', cloze: 'Profilbild' } },
    { id: 'cyb-a12-02-privat', icon: 'Lock', de: 'privat', pos: 'adj', ru: 'личный, закрытый (не для всех)', collocation: { de: 'ein privates Konto', ru: 'закрытый аккаунт', accept: ['ein privates Profil'] }, example: { de: 'Mein Konto ist privat.', ru: 'Мой аккаунт закрытый.', cloze: 'privat' } },
    { id: 'cyb-a12-02-oeffentlich', icon: 'Globe', de: 'öffentlich', pos: 'adj', ru: 'публичный, открытый (для всех)', note: 'Также «общественный»: öffentliche Verkehrsmittel — общественный транспорт.', collocation: { de: 'ein öffentliches Profil', ru: 'публичный профиль', accept: ['ein öffentliches Konto'] }, example: { de: 'Dieser Beitrag ist öffentlich.', ru: 'Этот пост публичный.', cloze: 'öffentlich' } },
    { id: 'cyb-a12-02-teilen', icon: 'Share2', de: 'teilen', pos: 'verb', ru: 'делиться, публиковать; делить', forms: 'er teilt · hat geteilt', note: 'etwas mit + Dat teilen: делиться чем-то с кем-то.', collocation: { de: 'ein Foto teilen', ru: 'поделиться фото', accept: ['das Foto teilen', 'Fotos teilen'] }, example: { de: 'Ich teile das Video mit meiner Klasse.', ru: 'Я делюсь видео со своим классом.', cloze: 'teile' } },
    { id: 'cyb-a12-02-posten', icon: 'Send', imageQuery: 'posting on social media', de: 'posten', pos: 'verb', ru: 'постить, выкладывать', forms: 'er postet · hat gepostet', note: 'Разговорное слово из английского; нейтрально — veröffentlichen.', example: { de: 'Lisa postet jeden Tag ein Foto.', ru: 'Лиза каждый день выкладывает фото.', cloze: 'postet' } },
    { id: 'cyb-a12-02-beitrag', icon: 'Newspaper', de: 'Beitrag', pos: 'noun', article: 'der', plural: 'Beiträge', ru: 'пост, публикация', note: 'Также «вклад» и «взнос».', collocation: { de: 'einen Beitrag teilen', ru: 'поделиться постом', accept: ['den Beitrag teilen'] }, example: { de: 'Dein Beitrag hat viele Kommentare.', ru: 'У твоего поста много комментариев.', cloze: 'Beitrag' } },
    { id: 'cyb-a12-02-sichtbar', icon: 'Eye', de: 'sichtbar', pos: 'adj', ru: 'видимый, виден', note: 'sichtbar für + Akk: виден кому-то.', example: { de: 'Mein Profil ist nur für Freunde sichtbar.', ru: 'Мой профиль виден только друзьям.', cloze: 'sichtbar' } },

    { id: 'cyb-a12-02-einstellung', icon: 'Settings', de: 'Einstellung', pos: 'noun', article: 'die', plural: 'Einstellungen', ru: 'настройка', note: 'Обычно во мн. ч.: die Einstellungen — настройки.', collocation: { de: 'die Einstellungen öffnen', ru: 'открыть настройки', accept: ['die Einstellungen ändern'] }, example: { de: 'Öffne die Einstellungen in der App!', ru: 'Открой настройки в приложении!', cloze: 'Einstellungen' } },
    { id: 'cyb-a12-02-fremde', icon: 'Ghost', imageQuery: 'stranger hoodie', de: 'Fremde', pos: 'noun', article: 'der', plural: 'Fremden', ru: 'незнакомец, чужой человек', note: 'Склоняется как прилагательное: der Fremde, ein Fremder; о женщине — die Fremde.', example: { de: 'Ein Fremder schreibt mir eine Nachricht.', ru: 'Незнакомец пишет мне сообщение.', cloze: 'Fremder' } },
    { id: 'cyb-a12-02-freundschaftsanfrage', icon: 'UserPlus', de: 'Freundschaftsanfrage', pos: 'noun', article: 'die', plural: 'Freundschaftsanfragen', ru: 'запрос в друзья', parts: ['Freundschafts', 'anfrage'], note: 'Freundschaft (дружба) + s + Anfrage (запрос).', collocation: { de: 'eine Freundschaftsanfrage schicken', ru: 'отправить запрос в друзья', accept: ['eine Freundschaftsanfrage senden'] }, example: { de: 'Ich bekomme eine Freundschaftsanfrage.', ru: 'Я получаю запрос в друзья.', cloze: 'Freundschaftsanfrage' } },
    { id: 'cyb-a12-02-annehmen', icon: 'Check', de: 'annehmen', pos: 'verb', ru: 'принимать', forms: 'er nimmt an · hat angenommen', note: 'Отделяемая приставка: ich nehme die Anfrage an.', collocation: { de: 'eine Anfrage annehmen', ru: 'принять запрос', accept: ['die Anfrage annehmen'] }, example: { de: 'Ich nehme die Anfrage gern an.', ru: 'Я с удовольствием принимаю запрос.', cloze: 'nehme' } },
    { id: 'cyb-a12-02-ablehnen', icon: 'X', de: 'ablehnen', pos: 'verb', ru: 'отклонять, отказывать', forms: 'er lehnt ab · hat abgelehnt', note: 'Отделяемая приставка: sie lehnt die Anfrage ab.', example: { de: 'Sophie lehnt die Anfrage ab.', ru: 'Софи отклоняет запрос.', cloze: 'lehnt' } },
    { id: 'cyb-a12-02-kommentar', icon: 'MessageCircle', imageQuery: 'comments section', de: 'Kommentar', pos: 'noun', article: 'der', plural: 'Kommentare', ru: 'комментарий', collocation: { de: 'einen Kommentar schreiben', ru: 'написать комментарий', accept: ['einen Kommentar posten'] }, example: { de: 'Unter dem Foto steht ein gemeiner Kommentar.', ru: 'Под фото злой комментарий.', cloze: 'Kommentar' } },
    { id: 'cyb-a12-02-loeschen', icon: 'Trash2', de: 'löschen', pos: 'verb', ru: 'удалять', forms: 'er löscht · hat gelöscht', collocation: { de: 'ein Foto löschen', ru: 'удалить фото', accept: ['das Foto löschen', 'einen Beitrag löschen'] }, example: { de: 'Ich lösche das alte Foto.', ru: 'Я удаляю старое фото.', cloze: 'lösche' } },
    { id: 'cyb-a12-02-peinlich', icon: 'Annoyed', de: 'peinlich', pos: 'adj', ru: 'неловкий, стыдный', note: 'Das ist mir peinlich — мне стыдно / неловко.', example: { de: 'Das Foto von der Party ist peinlich.', ru: 'Фото с вечеринки стыдное.', cloze: 'peinlich' } },
  ],
  readings: [
    {
      lesson: 0, title: 'Sophies Profil',
      de: `Sophie ist fünfzehn und geht in Wien zur Schule. Sie hat ein neues Profil in einer App. Ihr Profilbild zeigt ihre Katze. Jeden Tag postet sie ein Foto oder ein Video.

Ihr Bruder Emil sieht das Profil und fragt: „Ist dein Profil öffentlich?“ Sophie sagt: „Ja, warum?“ Emil erklärt: „Ein öffentlicher Beitrag ist für alle sichtbar. Auch Fremde sehen deine Fotos.“

Sophie macht das Profil privat. Jetzt sind ihre Beiträge nur für Freunde sichtbar. Am Abend teilt sie ein Video von ihrer Schule. Aber sie teilt es nur mit ihrer Klasse.`,
      ru: `Софи пятнадцать, она ходит в школу в Вене. У неё новый профиль в одном приложении. На её аватарке — её кошка. Каждый день она выкладывает фото или видео.

Её брат Эмиль видит профиль и спрашивает: «Твой профиль публичный?» Софи говорит: «Да, а что?» Эмиль объясняет: «Публичный пост виден всем. Незнакомцы тоже видят твои фото».

Софи делает профиль закрытым. Теперь её посты видны только друзьям. Вечером она делится видео из своей школы. Но она делится им только со своим классом.`,
      gloss: { sophie: 'Софи (имя)', sophies: 'Софи (чей?)', emil: 'Эмиль (имя)', fünfzehn: 'пятнадцать', wien: 'Вена', app: 'приложение', katze: 'кошка', foto: 'фото', fotos: 'фото (мн. ч.)', video: 'видео', öffentlicher: 'публичный', öffentlichen: 'публичный (вин. п.)', fremde: 'чужие, незнакомцы', fremden: 'незнакомцам, чужим (дат. п.)', allen: 'всеми, со всеми', zeigt: 'показывает; (на аватарке) изображена' },
      questions: [
        { q: 'Was zeigt Sophies Profilbild?', ru: 'Что изображено на аватарке Софи?', options: ['Ihren Bruder', 'Ihre Katze', 'Ihre Schule'], answer: 'Ihre Katze' },
        { q: 'Wer sieht einen öffentlichen Beitrag?', ru: 'Кто видит публичный пост?', options: ['Nur Freunde', 'Nur Emil', 'Alle'], answer: 'Alle' },
        { q: 'Mit wem teilt Sophie das Video?', ru: 'С кем Софи делится видео?', options: ['Mit ihrer Klasse', 'Mit allen', 'Mit Fremden'], answer: 'Mit ihrer Klasse' },
      ],
      translate: [
        { de: 'Mein Profil ist jetzt privat.', ru: 'Мой профиль теперь закрытый.', wrongRu: ['Мой профиль теперь публичный.', 'Её профиль теперь закрытый.'] },
        { de: 'Der Beitrag ist für alle sichtbar.', ru: 'Пост виден всем.', wrongRu: ['Пост виден только друзьям.', 'Фото видно всем.', 'Пост никому не виден.'] },
        { de: 'Sie teilt ein Video mit ihrer Klasse.', ru: 'Она делится видео со своим классом.', wrongRu: ['Она удаляет видео своего класса.', 'Он делится видео со своим классом.', 'Она делится фото со своим классом.'] },
      ],
    },
    {
      lesson: 1, title: 'Eine Anfrage von einem Fremden',
      de: `Am Samstag bekommt Sophie eine Freundschaftsanfrage. Der Name ist Leon. Sophie kennt ihn nicht. Er ist ein Fremder. Sophie lehnt die Anfrage ab.

Dann liest sie einen Kommentar unter ihrem Foto: „Wie peinlich!“ Der Kommentar ist gemein. Sophie ist traurig. Sie löscht den Kommentar.

Danach öffnet Sophie die Einstellungen. Jetzt können nur Freunde Kommentare schreiben. Ihre Freundin Mia schickt auch eine Anfrage. Sophie kennt Mia aus der Schule. Sie nimmt die Anfrage gern an.`,
      ru: `В субботу Софи получает запрос в друзья. Имя — Леон. Софи его не знает. Он незнакомец. Софи отклоняет запрос.

Потом она читает комментарий под своим фото: «Какой позор!» Комментарий злой. Софи грустно. Она удаляет комментарий.

После этого Софи открывает настройки. Теперь только друзья могут писать комментарии. Её подруга Миа тоже отправляет запрос. Софи знает Мию по школе. Она с удовольствием принимает запрос.`,
      gloss: { samstag: 'суббота', sophie: 'Софи (имя)', leon: 'Леон (имя)', mia: 'Миа (имя)', emil: 'Эмиль (имя)', anfrage: 'запрос', foto: 'фото', gemein: 'злой, подлый', gemeinen: 'злой (вин. п.)', traurig: 'грустный', öffnet: 'открывает', nimmt: 'берёт; (nimmt … an) принимает', an: 'на, у; (nimmt … an) приставка: принимает', ab: '(lehnt … ab) приставка: отклоняет', peinlich: 'стыдно, неловко; (Wie peinlich!) Какой позор!', erste: 'первый, первая', internet: 'интернет', café: 'кафе' },
      questions: [
        { q: 'Wer schickt die erste Anfrage?', ru: 'Кто отправляет первый запрос?', options: ['Mia', 'Ein Fremder', 'Emil'], answer: 'Ein Fremder' },
        { q: 'Was macht Sophie mit dem Kommentar?', ru: 'Что Софи делает с комментарием?', options: ['Sie löscht ihn.', 'Sie teilt ihn.', 'Sie antwortet.'], answer: 'Sie löscht ihn.' },
        { q: 'Woher kennt Sophie Mia?', ru: 'Откуда Софи знает Мию?', options: ['Aus dem Internet', 'Aus dem Café', 'Aus der Schule'], answer: 'Aus der Schule' },
        { q: 'Wer darf jetzt Kommentare schreiben?', ru: 'Кто теперь может писать комментарии?', options: ['Alle', 'Nur Freunde', 'Nur Fremde'], answer: 'Nur Freunde' },
      ],
      translate: [
        { de: 'Sophie lehnt die Anfrage ab.', ru: 'Софи отклоняет запрос.', wrongRu: ['Софи принимает запрос.', 'Софи отправляет запрос.'] },
        { de: 'Ich lösche den gemeinen Kommentar.', ru: 'Я удаляю злой комментарий.', wrongRu: ['Я пишу злой комментарий.', 'Я удаляю смешной комментарий.', 'Ты удаляешь злой комментарий.'] },
        { de: 'Sie nimmt die Freundschaftsanfrage an.', ru: 'Она принимает запрос в друзья.', wrongRu: ['Она отклоняет запрос в друзья.', 'Он принимает запрос в друзья.', 'Она отправляет запрос в друзья.'] },
      ],
    },
  ],
};
