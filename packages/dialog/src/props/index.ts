export default {
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  sureTitle: {
    type: String,
    default: '确认'
  },
  unsureTitle: {
    type: String,
    default: '取消'
  },
  sure: {
    type: Boolean,
    default: true
  },
  unsure: {
    type: Boolean,
    default: true
  },
  shutdown: {
    type: Boolean,
    default: true
  },
  mask: {
    type: Boolean,
    default: false
  },
  maskColor: {
    type: String,
    default: 'black'
  },
  maskFilter: {
    type: Boolean,
    default: false
  },
  background: {
    type: String,
    default: 'white'
  },
  color: {
    type: String,
    default: 'black'
  },
  filter: {
    type: Boolean,
    default: false
  },
  shadow: {
    type: Boolean,
    default: false
  },
  top: {
    type: String,
    default: '20vh'
  },
  contentTextAlign: {
    type: String,
    default: 'left'
  },
  optionTextAlign: {
    type: String,
    default: 'right'
  },
  toSure: {
    type: Function,
    default: (): boolean => {
      return true
    }
  },
  toUnSure: {
    type: Function,
    default: (): boolean => {
      return true
    }
  },
  toShutDown: {
    type: Function,
    default: (): boolean => {
      return true
    }
  }
}
