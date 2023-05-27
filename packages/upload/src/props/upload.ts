export default {
  // 文件大小
  // 暂时只支持number类型，单位为b
  limit: [Number, Object],
  // 最多几份
  maximum: Number,
  // 控制是否为可拖拽组件（未做）
  drag: {
    type: Boolean,
    default: false
  },
  // 当规定maximum参数前提下将replace置为true，新加载的文件将覆盖最早加载的文件
  replace: {
    type: Boolean,
    default: false
  },
  // 以下为原生属性
  multiple: {
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
