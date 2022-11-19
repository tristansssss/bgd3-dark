chrome.tabs.onUpdated.addListener((tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.insertCSS(null, { file: "./content.css" });
    // console.log("tabs", tabs)
    tabs.forEach((tab) => {
      let tabUrl = tab.url;
      chrome.tabs.sendMessage(tab.id, { tabUrl });
    });
  });
});

