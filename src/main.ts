import { createApp } from 'vue'
import App from './App.vue'

// 暂时性全局导入组件
import ViButton from '../packages/button'
import ViIcon from '../packages/icon'
import ViLoading from '../packages/loading'

const app = createApp(App)

// 暂时性全局导入组件
app.use(ViButton)
app.use(ViIcon)
app.use(ViLoading)

app.mount('#app')
