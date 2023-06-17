import select from './src/select.vue'
import virtualSelect from './src/virtual-select.vue'
import option from './src/option.vue'
import optionGroup from './src/option-group.vue'
import optionTitle from './src/option-title.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, select, option, optionGroup, optionTitle, virtualSelect)
export {
  select,
  option,
  optionGroup
}
