export default {
  title: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    // button
    default: 'default'
  },
  autoRetract: {
    type: Boolean,
    default: false
  },
  // 是否更改伸缩框状态
  needChange: {
    type: Function,
    default: () => true
  }
}
