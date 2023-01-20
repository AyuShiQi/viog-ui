import scroll from './src/scroll.vue'
import scrollItem from './src/scroll-item.vue'

export default {
  install (app: any) {
    app.component(scroll.name, scroll)
    app.component(scrollItem.name, scroll)
  }
}

export {
  scroll,
  scrollItem
}
