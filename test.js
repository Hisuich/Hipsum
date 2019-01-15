for(let i = 0; i < 1000; i++) {
    let randNumber = getRandomNumberFromMinToMax(1, 10);
    if (randNumber < 1 || randNumber > 10)
        console.log("error with getRandomNumberFromMinToMax");
}

for(let i = 0; i < 1000; i++) {
    let testSentence = getSentenceWithWordAmount(1, 6).split(" ");
    if (testSentence.length < 1 || testSentence.length > 6) 
        console.log("error with getSentenceWithWordAmount");
}

/*for(let i = 0; i < 100; i++) {
    let testPararaph = getParagraphWithSentenceAmount(1, 5);
    console.log(testPararaph);
}*/

init();
