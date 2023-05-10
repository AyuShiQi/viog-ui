import menu from './src/menu.vue'
import menuItem from './src/menu-item.vue'
import menuGroup from './src/menu-group.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, menu, menuItem, menuGroup)
export {
  menu
}
