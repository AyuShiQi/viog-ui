import dragListItem from './src/drag-list-item.vue'
import dragList from './src/drag-list.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, dragList, dragListItem)
export {
  dragList,
  dragListItem
}
