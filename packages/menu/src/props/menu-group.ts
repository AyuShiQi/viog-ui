export default {
  // 是否是可升缩组件，如果不是那么直接展示
  scalable: {
    type: Boolean,
    default: false
  },
  title: {
    type: String
  },
  // 标题是否可以选择，只在scalable下有效
  option: {
    type: Boolean,
    default: false
  }
}
