import breadcrumb from './src/breadcrumb.vue'
import breadcrumbItem from './src/breadcrumb-item.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, breadcrumb, breadcrumbItem)
export {
  breadcrumb,
  breadcrumbItem
}
