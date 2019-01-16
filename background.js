chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "id": "Hipsum",
        "title": "Hipsum",
        "description": "It's Hipsum"
    });
});

console.log(chrome);