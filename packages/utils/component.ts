import type { App, Component } from 'vue'
import type { Install } from '@/types/component'

export function toInstall <T extends Component> (option: T, ...components: Component[]): T & Install {
  (option as Install).install = function (app: App) {
    for (const component of components) {
      app.component(component.name as string, component)
    }
  }
  return option as T & Install
}
