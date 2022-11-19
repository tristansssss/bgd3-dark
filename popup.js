const greycheck = document.querySelector("#greycheck");

// handle button render
chrome.tabs.query({ active: true }, (tabs) => {
  // let currentUrl = tabs[0].url;

  // // handles the button for onChanged events
  chrome.storage.onChanged.addListener((changes, namespace) => {
    chrome.storage.local.get("grey", (response) => {
      if (!response.grey) {
        greycheck.checked = false;
      } else {
        greycheck.checked = true;
      }
    });
  });

  // // handles the button for the initial focusUrl set without onChange
  chrome.storage.local.get("grey", (response) => {
    if (!response.grey) {
      chrome.storage.local.set({ grey: false })
      greycheck.checked = false;
    } else {
      greycheck.checked = true;
    }
  });
});

// handle setting focusUrl in storage
document.querySelector("#greycheck").addEventListener("click", () => {
  chrome.tabs.query({ active: true }, (tabs) => {
    console.log("popup tabs", tabs)
    chrome.storage.local.get("grey", (response) => {
      console.log("popup grey", response)
      chrome.storage.local.set({ grey: !response.grey })
    });

    // let focusUrl = tabs[0].url;
    // chrome.storage.local.set({ focusUrl: focusUrl });
  });
});

// document.querySelector("#unfocus-btn").addEventListener("click", () => {
//   chrome.tabs.query({ active: true }, (tabs) => {
//     chrome.storage.local.clear(function () {
//       var error = chrome.runtime.lastError;
//       if (error) {
//         console.error(error);
//       }
//     });
//   });
// });
