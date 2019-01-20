/* eslint-disable */
chrome.tabs.query({
  'active': true,
  'currentWindow': true,
  'lastFocusedWindow': true
}, (tabs) => {
  alert(tabs[0].url)
  localStorage.setItem('url', tabs[0].url)
  localStorage.setItem('tabs', JSON.stringify(tabs))
})
/* eslint-enable */
