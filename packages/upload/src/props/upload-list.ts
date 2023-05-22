export default {
  type: {
    type: String,
    // button
    default: 'default'
  },
  // 开启后可以手动删除上传文件
  delete: {
    type: Boolean,
    default: true
  },
  // 开启可以显示文件大小
  showSize: {
    type: Boolean,
    default: false
  }
}
