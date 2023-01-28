import { createApp } from 'vue'
import App from './App.vue'

// 暂时性全局导入组件
import ViButton from '../packages/button'
import ViIcon from '../packages/icon'
import ViLoading from '../packages/loading'
import ViDialog from '../packages/dialog'
// scroll 组
import ViScroll from '../packages/scroll'
// input 表单组
import Viform from '../packages/input'

const app = createApp(App)

// 暂时性全局导入组件
app.use(ViButton)
app.use(ViIcon)
app.use(ViLoading)
app.use(ViDialog)
app.use(ViScroll)
app.use(Viform)

app.mount('#app')
