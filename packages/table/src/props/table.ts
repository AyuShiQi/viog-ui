export default {
  datas: {
    type: [Array, Object],
    default: {}
  },
  type: {
    type: String,
    // three-line border
    default: 'default'
  },
  align: {
    type: String,
    default: 'left'
  },
  stripe: {
    type: Boolean,
    default: false
  },
  hover: {
    type: Boolean,
    default: false
  },
  pick: {
    type: Boolean,
    default: false
  },
  multi: {
    type: Boolean,
    default: false
  },
  pickValue: [String, Number, Boolean, Array]
}
