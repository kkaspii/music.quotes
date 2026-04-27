const quotes = [
{text: "И так хочется мне что-нибудь родное, сзади нежно приобнять и сразу же придушить",
    author: "Pyrokinesis",
    track: "Питер, чай, не Франция",
    trackId: "0awyQJ2BsxMme0P3ZexZPC"},

{text: "Пытаясь полюбить других, забыли полюбить себя",
    author: "Pyrokinesis",
    track: "Моя милая пустота",
    trackId: "7p6cvsaEavRQmwm7UK6lGe"}, 

    {text: "Я зависим, а значит мне сложно, мне больно, мне весело.",
    author: "Pyrokinesis",
    track: "Зависимость",
    trackId: "2oof3brFWIEkvoh54DrXVq"},

    {text: "И все-таки слезы падают на ладонь, а значит мне не все равно.",
    author: "Pyrokinesis",
    track: "Почему да потому что",
    trackId: "5GlV09LfZh4Y94mfk037Q8"},

{text: "Если на все глаза закрыл - к черту, ищи на запах",
    author: "Mzlff",
    track: "Культурный слой",
    trackId: "0vv20KU8Qi5qcQBUzDUJFH"},

    {text: "Кто-то ищет выход, а кто-то, как я, лишь делает вид.",
        author:"Playingtheangel",
        track:"Лабиринт",
        trackId:"0RVfmOvTTWSWy7eRuPq4vD"},
   
];

const quoteBtn = document.getElementById('quoteBtn');
const quoteText = document.getElementById('quoteText');
const quoteTrack = document.getElementById('quoteTrack');
const playerContainer = document.getElementById('spotifyPlayerContainer');
const authorSelect = document.getElementById('authorSelect');

function showRandomQuote() {
    const selectedAuthor = authorSelect.value;
    let resultList;
    if (selectedAuthor === 'all') {
        resultList = quotes;
    } else {
        resultList = quotes.filter(item => item.author === selectedAuthor);
    }
    if (resultList.length === 0) {
        quoteText.innerText = "Нет цитат выбранного исполнителя";
        quoteTrack.innerText = "";
        playerContainer.innerHTML = '';
        return;
    }

const randomQuote = resultList[Math.floor(Math.random() * resultList.length)];

    quoteText.innerText = `"${randomQuote.text}"`;
    quoteTrack.innerText = `${randomQuote.track} - ${randomQuote.author}`;
   
    playerContainer.innerHTML = `
        <iframe
            src="https://open.spotify.com/embed/track/${randomQuote.trackId}?utm_source=generator&theme=0"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style="border-radius: 12px;">
        </iframe>`;
}
quoteBtn.addEventListener('click', showRandomQuote);