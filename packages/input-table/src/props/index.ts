export default {
  modelValue: {
    type: Array,
    debfault: []
  },
  // 单选
  pick: {
    type: Boolean,
    default: false
  },
  // 多选
  multi: {
    type: Boolean,
    default: false
  },
  // 选值(单选值也存放在数组中)
  pickValue: {
    type: Array,
    default: []
  }
}
