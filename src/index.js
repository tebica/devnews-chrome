import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import fetchStore from './stores/fetchStore'
import App from './App'
import './assets/css/index.less'
import * as serviceWorker from './serviceWorker'

if (process.env.NODE_ENV !== 'production') {
  localStorage.setItem('debug', 'devnews-extension:*')
}

// MUSTFIX: Remove
localStorage.setItem('debug', 'devnews-extension:*')

const stores = {
  fetchStore,
}

ReactDOM.render((
  <Provider {...stores}>
    <App />
  </Provider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
