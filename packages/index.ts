import { App } from 'vue'

// 基础组件
import ViButton from './button'
import ViIcon from './icon'
import ViLoading from './loading'
import ViLayout from './layout'
// 交互组件
import ViDialog from './dialog'
// scroll 组
import ViScroll from './scroll'
// 表单组
import ViInput from './input'
import ViSwitch from './switch'
import ViRadio from './radio'
import ViCheckbox from './checkbox'

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
  ViLayout
]

export default {
  install: (app: App) => {
    app.config.unwrapInjectedRef = true
    components.forEach((component) => {
      component.install(app)
    })
  }
}
