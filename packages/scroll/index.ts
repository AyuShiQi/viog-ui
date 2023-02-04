import { App } from 'vue'

import scroll from './src/scroll.vue'
import scrollItem from './src/scroll-item.vue'
import virtualScroll from './src/virtual-scroll.vue'

export default {
  install (app: App) {
    app.component(scroll.name, scroll)
    app.component(scrollItem.name, scroll)
    app.component(virtualScroll.name, virtualScroll)
  }
}

export {
  scroll,
  scrollItem,
  virtualScroll
}
