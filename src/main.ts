import { createApp } from 'vue'
import App from './App.vue'

import viog from '../packages/index'
// [Vue warn]: injected property "radio-group" is a ref and will be auto-unwrapped and no longer needs
// `.value` in the next minor release. To opt-in to the new behavior now, set `app.config.unwrapInjectedRef = true` (this config is temporary and will not be needed in the future.)
// at <ViRadio type="button" color="purple" dark=""  ... >
// at <ViRadioGroup modelValue="12345" onUpdate:modelValue=fn >
// at <App>

const app = createApp(App)
app.use(viog)

app.mount('#app')
