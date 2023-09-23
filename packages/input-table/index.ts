import inputTable from './src/input-table.vue'
import inputTableCol from './src/input-table-col.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, inputTable, inputTableCol)
export {
  inputTable,
  inputTableCol
}
