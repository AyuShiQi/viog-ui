import tableEditor from './src/table-editor.vue'
import tableEditorTd from './src/table-editor-td.vue'
import { toInstall } from '../utils/component'

export default toInstall({}, tableEditor, tableEditorTd)
export {
  tableEditor,
  tableEditorTd
}
