import { App } from 'vue'
import '../public/css/icon.less'
import '../public/css/default-style.css'

// 基础组件
import ViButton from './button'
import ViIcon from './icon'
import ViLoading from './loading'
import ViLayout from './layout'
import ViLink from './link'
import ViTag from './tag'
import ViCard from './card'
import ViDropDown from './dropdown'
import ViAffix from './affix'
import ViCollapse from './collapse'
import ViDivider from './divider'
import ViFlex from './flex'
// 模块组
import ViHeader from './header'
import ViSkeleton from './skeleton'
import ViAvater from './avater'
// 导航组
import ViNav from './nav'
import ViMenu from './menu'
import ViBreadcrumb from './breadcrumb'
import ViTabbar from './tabbar'
// 交互组件
import ViDialog from './dialog'
import ViToast from './toast'
import ViMessage from './message'
import ViDrawer from './drawer'
import ViBubble from './bubble'
import ViSteps from './steps'
import ViRate from './rate'
// scroll 组
import ViScroll from './scroll'
// 表单组
import ViForm from './form'
import ViInput from './input'
import ViSwitch from './switch'
import ViRadio from './radio'
import ViCheckbox from './checkbox'
import ViSelectN from './select-normal'
import ViDateSelect from './date-select'
import ViTimeSelect from './time-select'
import ViUpload from './upload'
import ViVerifySlider from './verify-slider'
import ViColorSelect from './color-select'

// 表格组
import ViTable from './table'
import ViTableEditor from './table-editor'

// 信息展示组
import ViResult from './result'
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
  ViNav,
  ViAffix,
  ViCard,
  ViMenu,
  ViCollapse,
  ViDivider,
  ViSkeleton,
  ViBubble,
  ViAvater,
  ViBreadcrumb,
  ViUpload,
  ViTableEditor,
  ViTable,
  ViVerifySlider,
  ViResult,
  ViSteps,
  ViTabbar,
  ViColorSelect,
  ViRate,
  ViFlex
]

export {
  ViToast,
  ViMessage
}

export default {
  install: (app: App) => {
    // 3.3 弃用
    // app.config.unwrapInjectedRef = true
    components.forEach((component) => {
      component.install(app)
    })
  },
  ViToast,
  ViMessage
}
