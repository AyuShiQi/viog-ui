// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
// GlobalComponents for Volar
  export interface GlobalComponents {
    ViForm: typeof import('../packages/form')['form'],
    ViFormItem: typeof import('../packages/form')['formItem'],
  }

  interface ComponentCustomProperties {
    // $message: typeof import('../packages/element-plus')['ElMessage']
  }
}

export {}