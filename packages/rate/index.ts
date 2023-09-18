import rate from './src/rate.vue'
import rateItem from './src/rate-item.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, rate, rateItem)
export {
  rate,
  rateItem
}
