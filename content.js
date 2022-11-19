// chrome.runtime.onMessage.addListener((request) => {
//   chrome.storage.local.get("focusUrl", (response) => {
//     if (
//       request.tabUrl !== response.focusUrl &&
//       response.focusUrl !== undefined
//     ) {
//       window.location.href = response.focusUrl;
//     } else {
//       console.log("were focusing");
//     }
//   });
// });

chrome.storage.local.get("grey", (response) => {

  if (response.grey) {
    document.querySelector("body").classList.add("greyed");
  } else {
    document.querySelector("body").classList.add("standard");
  }
});

// chrome.runtime.onMessage.addListener((request) => {
//   chrome.storage.local.get("grey", (response) => {
//     if (response.grey) {
//       document.querySelector("body").classList.add("greyed");
//     } else {
//       document.querySelector("body").classList.add("standard");
//     }
//   });
// });