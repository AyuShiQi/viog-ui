import tabCard from './src/tab-card.vue'
import tabGroup from './src/tab-group.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, tabCard, tabGroup)
export {
  tabCard,
  tabGroup
}
