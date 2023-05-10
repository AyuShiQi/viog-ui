import collapse from './src/collapse.vue'
import collapseLi from './src/collapse-li.vue'
import collapseGroup from './src/collapse-group.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, collapse, collapseGroup)
export {
  collapse,
  collapseLi,
  collapseGroup
}
