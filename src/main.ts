import { createApp } from 'vue'
import App from './App.vue'

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

const app = createApp(App)

// 暂时性全局导入组件
app.use(ViButton)
app.use(ViIcon)
app.use(ViLoading)
app.use(ViDialog)
app.use(ViScroll)
app.use(Viinput)
app.use(ViSwitch)
app.use(ViRadio)

app.mount('#app')
