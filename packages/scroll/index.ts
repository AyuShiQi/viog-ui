import scroll from './src/scroll.vue'
import scrollItem from './src/scroll-item.vue'
// import virtualScrollPlus from './src/virtual-scroll-plus.vue'
import virtualScroll from './src/virtual-scroll.vue'

export default {
  install (app: any) {
    app.component(scroll.name, scroll)
    app.component(scrollItem.name, scroll)
    // app.component(virtualScrollPlus.name, virtualScrollPlus)
    app.component(virtualScroll.name, virtualScroll)
  }
}

export {
  scroll,
  scrollItem,
  // virtualScrollPlus,
  virtualScroll
}
