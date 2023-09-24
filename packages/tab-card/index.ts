import tabCard from './src/tab-card.vue'
import tabCardGroup from './src/tab-group.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, tabCard, tabCardGroup)
export {
  tabCard,
  tabCardGroup
}
