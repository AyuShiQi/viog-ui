import { createApp } from 'vue'
import App from './App.vue'

// [Vue warn]: injected property "radio-group" is a ref and will be auto-unwrapped and no longer needs
// `.value` in the next minor release. To opt-in to the new behavior now, set `app.config.unwrapInjectedRef = true` (this config is temporary and will not be needed in the future.)
// at <ViRadio type="button" color="purple" dark=""  ... >
// at <ViRadioGroup modelValue="12345" onUpdate:modelValue=fn >
// at <App>

// 暂时性全局导入组件
import ViButton from '../packages/button'
import ViIcon from '../packages/icon'
import ViLoading from '../packages/loading'
import ViDialog from '../packages/dialog'
// scroll 组
import ViScroll from '../packages/scroll'
// 表单组
import Viinput from '../packages/input'
import ViSwitch from '../packages/switch'
import ViRadio from '../packages/radio'
import ViCheckbox from '../packages/checkbox'

const app = createApp(App)
app.config.unwrapInjectedRef = true

// 暂时性全局导入组件
app.use(ViButton)
app.use(ViIcon)
app.use(ViLoading)
app.use(ViDialog)
app.use(ViScroll)
app.use(Viinput)
app.use(ViSwitch)
app.use(ViRadio)
app.use(ViCheckbox)

app.mount('#app')
