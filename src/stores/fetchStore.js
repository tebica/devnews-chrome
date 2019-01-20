import {
  action,
  observable,
  // runInAction,
  // spy,
} from 'mobx'
// import Log from '../utils/debugLog'


class FetchStore {
  @observable url = ''

  @observable title = ''

  @action setUrl(url) {
    this.url = url
  }

  @action setTitle(title) {
    this.title = title
  }

  @action reset() {
    this.url = ''
    this.title = ''
  }
}

// spy((event) => {
//   if (event.type === 'action') {
//     Log.info('MobX::FetchStore::action', `${event.name} with args: ${event.arguments}`)
//   }
// })

const fetchStore = new FetchStore()
export default fetchStore
