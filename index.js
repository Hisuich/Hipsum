const words = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
];

const ends = [
    '.',
    '!',
    '?',
    ')'
]

function getRandomNumberFromMinToMax(max, min = 0) {
    let number = min + Math.floor(Math.random() * (max + 1 - min));
    return number;
}

function getSentenceWithWordAmount(from, to) {
    let sentence = words[getRandomNumberFromMinToMax(words.length - 1)];

    for(let i = 0; i < getRandomNumberFromMinToMax(from, to) - 1; i++) {
        sentence += " " + words[getRandomNumberFromMinToMax(words.length - 1)];
    }

    sentence += ends[getRandomNumberFromMinToMax(ends.length - 1)];

    return sentence;
}

function getParagraphWithSentenceAmount(from, to) {
    let paragraph = getSentenceWithWordAmount(6, 20);

    for(let i = 0; i < getRandomNumberFromMinToMax(from, to) - 1; i++) {
        paragraph += getSentenceWithWordAmount(6, 20);
    }

    return paragraph;
}

function getBlock(content) {
    return "<div>" + content + 
        "<input class='btn-copy' type='button' value ='copy'> </div>";
}

function copyToClipboard(event) { 
    const content = event.srcElement.parentNode.textContent;
    const el = document.createElement("textarea");
    el.value = content;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    
}

function init() {
    document.body.innerHTML += 
        getBlock(getSentenceWithWordAmount(1, 6)) +
        getBlock(getSentenceWithWordAmount(6, 12)) +
        getBlock(getParagraphWithSentenceAmount(4, 8)) +
        getBlock(getParagraphWithSentenceAmount(4, 8)) +
        getBlock(getParagraphWithSentenceAmount(4, 8));

        Object.values(document.getElementsByClassName('btn-copy')).map(value => {
            value.addEventListener('click', copyToClipboard);
        });
}