export default {
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'default'// inline
  },
  size: {
    type: String,
    default: 'middle'
  },
  align: {
    type: String,
    default: 'right'// right,left,updown
  },
  // 一有更新就检查
  auto: {
    type: Boolean,
    default: false
  },
  rightInfo: {
    type: String,
    default: ''
  },
  errorInfo: {
    type: String,
    default: '输入错误'
  },
  // 可以是一个正则表达式、一个判断函数、也可以是它们的一个集合
  rules: [Array, Function, String]
}
