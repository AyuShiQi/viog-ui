export default {
  title: {
    type: String,
    default: ''
  },
  autoRetract: {
    type: Boolean,
    default: false
  },
  needChange: {
    type: Function,
    default: () => true
  }
}
