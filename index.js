const words = [
  'photo booth',
  'etsy',
  'subway',
  'tile',
  'snackwave',
  'twee',
  'franzen',
  'Iceland',
  'kickstarter',
  'sustainable',
  'chambray',
  'gastropub',
  'distillery',
  'yuccie',
  'marfa',
  'activated',
  'charcoal',
  'woke',
  'neutra',
  'yolo',
  'lomo',
  'aesthetic',
  'cold-pressed',
  'schlitz',
  'tumblr',
  'listicle',
  'glossier',
  'thundercats',
  'fashion',
  'axe',
  'pabst',
  'bespoke',
  'you',
  'probably',
  "haven't",
  'heard',
  'of',
  'them',
  'whatever',
  'forage',
  'crucifix',
  'chicharrones',
  'seitan',
  'live-edge',
  'venmo',
  'mustache',
  'skateboard',
  'narwhal',
  'af',
  'kogi',
  'master',
  'cleanse',
  'letterpress',
  'hell',
  'plaid',
  'cred',
  'brunch',
  'roof',
  'party',
  'tattooed',
  'banjo',
  'raw',
  'denim',
  'mumblecore',
  'dreamcatcher',
  'cardigan',
  'pinterest',
  'banh',
  'mi',
  'fanny',
  'pack',
  'tofu',
  'paleo',
  'slow-carb',
  'shabby',
  'chic',
  'tacos',
  'artisan',
  'normcore',
  'irony',
  'ugh',
  'put',
  'a',
  'bird',
  'on',
  'it',
  'stumptown',
  'hella',
  'deep',
  'street',
  'art',
  'ennui',
  'pork',
  'belly',
  'try-hard',
  'brooklyn',
  'chicharrones',
  'occupy',
  'vaporware',
  'fixie',
  'gluten-free',
  'vexillologist',
  'flannel',
  'coloring',
  'book',
  'jianbing',
  'lyft',
  'tbh',
  'typewriter',
  'gochujang',
  'echo',
  'park',
  'pok',
  'pok',
  'lo-fi',
  'meditation',
  'scenester',
  'biodiesel',
  'asymmetrical',
  'keffiyeh',
  'polaroid',
  'taiyaki',
  'meggings',
  'microdosing',
  'pour-over',
  'hashtag',
  'mustache',
  'wolf',
  'locavore',
  'readymade',
  'you',
  'swag',
  'knausgaard',
  'pickled',
  'bitters',
  'unicorn',
  'blue',
  'bottle',
  'cray',
  'direct',
  'trade',
  'everyday',
  'carry',
  '8-bit',
  'poke',
  'pickled',
  'single-origin',
  'coffee',
  'blog',
  'edison',
  'bulb',
  'la',
  'croix',
  'la',
  'health',
  'goth',
  'farm-to-table',
  'heirloom',
  'vegan',
  'vinyl',
  'affogato',
  'food',
  'truck',
  'selfies',
  'chambray',
  'quinoa',
  'freegan',
  'portland',
  'wolf',
  'xoxo',
  'taiyaki',
  'cloud',
  'bread',
  'salvia',
  'fam',
  'literally',
  'synth',
  'vice',
  'messenger',
  'bag',
  'kitsch',
  'fingerstache',
  'drinking',
  'vinegar',
  'air',
  'plant',
  'semiotics',
  'offal',
  'shoreditch',
  'farm-to-table',
  'lumbersexual',
  'viral',
  'cardigan',
  'next',
  'level',
  'kale',
  'chips',
  'waistcoat',
  'tumeric',
  'umami',
  'gentrify',
  'gluten-free',
  'godard',
  'banh',
  'pop-up',
  'artisan',
  'pbr&b',
  'cronut',
  'sartorial',
  'keytar',
  'plaid',
  'palo',
  'santo',
  'butcher',
  'roof',
  'mlkshk',
  'four',
  'dollar',
  'toast',
  'wayfarers',
  'tote',
  'cold-pressed',
  'poke',
  'drinking',
  'hoodie',
  'organic',
  'prism',
  'pug',
  'raclette',
  'fashion',
  'celiac',
  'succulents',
  'pork',
  'kombucha',
  'chillwave',
  'urbanism',
  'coldwave',
  'vaporwave',
  'vape',
  'hoverboard'
];

const ends = [
    '.',
    '!',
    '?',
    ')'
];

function getRandomNumberFromMinToMax(max, min = 0) {
    console.log("max = ", max, "min = ", min);
    const number = min + Math.floor(Math.random() * (max + 1 - min));
    return number;
}

function firstToUpper(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function getSentenceWithWordAmount(from, to) {
    let sentence = firstToUpper(words[getRandomNumberFromMinToMax(words.length - 1)]);

    for(let i = 0; i < getRandomNumberFromMinToMax(to, from) - 1; i++) {
        sentence += " " + words[getRandomNumberFromMinToMax(words.length - 1)];
    }

    sentence += ends[getRandomNumberFromMinToMax(ends.length - 1)];

    return sentence;
}

function getParagraphWithSentenceAmount(from, to) {
    let paragraph = getSentenceWithWordAmount(6, 20);

    for(let i = 0; i < getRandomNumberFromMinToMax(to, from) - 1; i++) {
        paragraph += " " + getSentenceWithWordAmount(6, 20);
    }

    return paragraph;
}

function createBlock(content) {
    const block =  `<div class='text-field'> 
                <div class='text-area'>${content}</div>
                <div class='done-overlay'>Coppied!</div>
                <button class="copy-button">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path
                        d="M15 1H4c-1.1 0-2 .9-2 2v13c0 .55.45 1 1 1s1-.45 1-1V4c0-.55.45-1 1-1h10c.55 0 1-.45 1-1s-.45-1-1-1zm.59 4.59l4.83 4.83c.37.37.58.88.58 1.41V21c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h6.17c.53 0 1.04.21 1.42.59zM15 12h4.5L14 6.5V11c0 .55.45 1 1 1z"
                    />
                    </svg>
                </button> 
            </div>`;

    return block;
}

function copyToClipboard(event) {
    const parentNode = event.path.find(node => node.className == "text-field");
    const content = parentNode.querySelector('.text-area').textContent;
    const el = document.createElement("textarea");
    el.value = content;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    console.log(parentNode);
    parentNode.querySelector('.done-overlay').classList.add('visible');
    
}

function init() {
    console.log("hey");
    document.body.querySelector(".text-content").innerHTML += 
        createBlock(getSentenceWithWordAmount(1, 6)) +
        createBlock(getSentenceWithWordAmount(6, 12)) +
        createBlock(getParagraphWithSentenceAmount(4, 8)) +
        createBlock(getParagraphWithSentenceAmount(4, 8)) +
        createBlock(getParagraphWithSentenceAmount(4, 8));

        Object.values(document.getElementsByClassName('copy-button')).map(value => {
            value.addEventListener('click', copyToClipboard);
        });
    console.log("I'm here");
}

init();