chrome.runtime.onInstalled.addListener(function() {
    
    console.log("BLUUUUE SKYYYY!!");

    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: "developer.chrome.com"}
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});

console.log(chrome);