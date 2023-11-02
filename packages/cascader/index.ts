import cascader from './src/cascader.vue'
import cascaderGroup from './src/cascader-group.vue'
import cascaderItem from './src/cascader-item.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, cascader, cascaderGroup, cascaderItem)
export {
  cascader
}
