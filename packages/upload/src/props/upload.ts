export default {
  // 文件大小
  limit: [Number, Object],
  // 最多几份
  maximum: Number,
  multiple: {
    type: Boolean,
    default: false
  },
  drag: {
    type: Boolean,
    default: false
  },
  accept: String,
  // boolean | "user" | "environment" | undefined”
  capture: {
    default: false
  },
  name: String
}
