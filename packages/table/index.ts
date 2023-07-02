import table from './src/table.vue'
import tableColumn from './src/table-col.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, table, tableColumn)
export {
  table,
  tableColumn
}
