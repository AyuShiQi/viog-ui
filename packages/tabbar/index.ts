import tabbar from './src/tabbar.vue'
import tabbarItem from './src/tabbar-item.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, tabbar, tabbarItem)
export {
  tabbar,
  tabbarItem
}
