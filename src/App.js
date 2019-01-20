import React from 'react'
import {
  inject,
  observer,
} from 'mobx-react'
import {
  getCurrentTabURL,
  getCurrentTabTitle,
} from './utils/chromeApi'
import Log from './utils/debugLog'

@inject('fetchStore')
@observer
class App extends React.Component {
  constructor() {
    super()

    getCurrentTabURL()
    getCurrentTabTitle()
  }

  render() {
    // const targetIframe = document.getElementById('main-iframe')

    Log.info('App::render() - URL', this.props.fetchStore.url)
    Log.info('App::render() - Title', this.props.fetchStore.title)

    // if (this.props.fetchStore.url !== '') {
    //   targetIframe.contentWindow.document.getElementById('id_link').value = this.props.fetchStore.url
    // }

    // if (this.props.fetchStore.title !== '') {
    //   targetIframe.contentWindow.document.getElementById('id_title').value = this.props.fetchStore.title
    // }

    return (
      <iframe id='main-iframe' src='https://devnews.kr/link/create/' title='root' width='100%' height='100%' frameBorder='0' >
        <p>Cannot support iframes.</p>
      </iframe>
    )
  }
}

export default App
