export default {
  options: Array,
  // nextValue: String,
  pick: Array,
  nextValue: {
    type: [String, Number, Boolean, Object],
    default: undefined
  },
  step: {
    type: Number,
    default: 0
  },
  width: Array,
  height: Array
}
