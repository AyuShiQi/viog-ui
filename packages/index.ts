import { App } from 'vue'

// 基础组件
import ViButton from './button'
import ViIcon from './icon'
import ViLoading from './loading'
import ViLayout from './layout'
import ViLink from './link'
import ViTag from './tag'
import ViDropDown from './dropdown'
// 模块组
import ViHeader from './header'
// 导航组
import ViNav from './nav'
// 交互组件
import ViDialog from './dialog'
import ViToast from './toast'
import ViMessage from './message'
import ViDrawer from './drawer'
// scroll 组
import ViScroll from './scroll'
// 表单组
import ViForm from './form'
import ViInput from './input'
import ViSwitch from './switch'
import ViRadio from './radio'
import ViCheckbox from './checkbox'
import ViSelect from './select'
import ViSelectN from './select-normal'
import ViDateSelect from './date-select'
import ViTimeSelect from './time-select'
// type
export * from '@/types'

const components = [
  ViButton,
  ViIcon,
  ViLoading,
  ViDialog,
  ViScroll,
  ViInput,
  ViSwitch,
  ViRadio,
  ViCheckbox,
  ViLayout,
  ViSelect,
  ViForm,
  ViDateSelect,
  ViTimeSelect,
  ViMessage,
  ViLink,
  ViTag,
  ViSelectN,
  ViDropDown,
  ViDrawer,
  ViHeader,
  ViNav
]

export {
  ViToast,
  ViMessage
}

export default {
  install: (app: App) => {
    app.config.unwrapInjectedRef = true
    components.forEach((component) => {
      component.install(app)
    })
  }
}
