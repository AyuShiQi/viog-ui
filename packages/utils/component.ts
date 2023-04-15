import type { App, Component } from 'vue'
import type { Install } from '@/types/component'

export function toInstall <T extends Component> (option: T, component: Component): T & Install {
  (option as Install).install = function (app: App) {
    app.component(component.name as string, component)
  }
  return option as T & Install
}
