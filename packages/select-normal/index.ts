import selectn from './src/select.vue'
import option from './src/option.vue'
import optionGroup from './src/option-group.vue'
import optionTitle from './src/option-title.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, selectn, option, optionGroup, optionTitle)
export {
  selectn,
  option,
  optionGroup
}
