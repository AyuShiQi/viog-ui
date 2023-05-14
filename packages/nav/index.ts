import nav from './src/nav.vue'
import navItem from './src/nav-item.vue'
import navItemGroup from './src/nav-item-group.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, nav, navItem, navItemGroup)
export {
  nav,
  navItem,
  navItemGroup
}
