/* global chrome */
/**
 * Chrome API Wrapper
 */
import fetchStore from '../stores/fetchStore'
import Log from './debugLog'

export function isExtension() {
  try {
    if (typeof chrome.storage === 'object') {
      return true
    }
  } catch (err) {
    Log.error('chromeApi::isExtension()', err)
  }

  return false
}

export function getCurrentTabURL() {
  try {
    if (isExtension()) {
      /* eslint-disable */
      chrome.tabs.query({
        'active': true,
        'currentWindow': true,
        'lastFocusedWindow': true
      }, (tabs) => {
        if (tabs[0].url !== 'undefined') {
          localStorage.setItem('url', tabs[0].url)
          fetchStore.setUrl(tabs[0].url)
        } else {
          localStorage.setItem('url', '')
        }
        localStorage.setItem('tabs', JSON.stringify(tabs))
      })
      /* eslint-enable */
    } else {
      localStorage.setItem('url', window.location.href)
    }
  } catch (err) {
    Log.error('chromeApi::getCurrentTabURL()', err)
  }
}

export function getCurrentTabTitle() {
  try {
    if (isExtension()) {
      /* eslint-disable */
      chrome.tabs.query({
        'active': true,
        'currentWindow': true,
        'lastFocusedWindow': true
      }, (tabs) => {
        if (tabs[0].url !== 'undefined') {
          localStorage.setItem('title', tabs[0].title)
          fetchStore.setTitle(tabs[0].title)
        } else {
          localStorage.setItem('title', '')
        }
      })
      /* eslint-enable */
    } else {
      localStorage.setItem('title', document.title)
    }
  } catch (err) {
    Log.error('chromeApi::getCurrentTabTitle()', err)
  }
}

export function newWindow() {
  window.open(window.location.href, 'Addit Extension', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=380,height=800')
}

export function resetExtension() {
  if (isExtension()) {
    try {
      /* eslint-disable */
      chrome.storage.local.clear()
      /* eslint-enable */
    } catch (err) {
      Log.error('chromeApi::resetExtension()', err)
    }
  }

  fetchStore.reset()
  localStorage.clear()
  sessionStorage.clear()
}

export default isExtension
