import steps from './src/steps.vue'
import stepsItem from './src/steps-item.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, steps, stepsItem)
export {
  steps,
  stepsItem
}
