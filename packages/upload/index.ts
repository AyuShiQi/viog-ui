import upload from './src/upload.vue'
import uploadChoose from './src/upload-choose.vue'
import uploadList from './src/upload-list.vue'
import { toInstall } from '../utils/component'
import './src/img'

export default toInstall({}, upload, uploadChoose, uploadList)
export {
  upload,
  uploadChoose,
  uploadList
}
