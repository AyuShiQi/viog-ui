export default {
  modelValue: {
    type: Boolean,
    default: false
  },
  dark: {
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
  noSure: {
    type: Boolean,
    default: false
  },
  noUnsure: {
    type: Boolean,
    default: false
  },
  noShutdown: {
    type: Boolean,
    default: false
  },
  noMask: {
    type: Boolean,
    default: false
  },
  maskColor: {
    type: String,
    default: 'black'
  },
  blur: {
    type: Boolean,
    default: false
  },
  // top: {
  //   type: String,
  //   default: '20vh'
  // },
  // contentTextAlign: {
  //   type: String,
  //   default: 'left'
  // },
  // optionTextAlign: {
  //   type: String,
  //   default: 'right'
  // },
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
