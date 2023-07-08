<template>
  <div
  class="vi-result"
  :class="[
    `vi-result-type-${type}`,
    `vi-result-state-${state}`
  ]">
    <transition name="vi-result-animate">
      <div class="vi-result-view" v-if="modelValue">
        <template v-if="state === 'success'">
          <svg class="vi-result-success" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path class="vi-gougou-path" fill="none" d="M2 10 L8 18 L18 2"/>
          </svg>
        </template>
        <template v-if="state === 'danger'">
          <svg class="vi-result-danger" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path class="vi-gougou-path" fill="none" d="M4 4 L16 16 M16 4 L4 16"/>
          </svg>
        </template>
        <template v-if="state === 'warning'">
          <svg viewBox="0 0 6 20" class="vi-result-warning" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2.8H5.33333L3.44242 15.2H1.64849L0 2.8Z"/>
            <path d="M5.33333 2.81481C5.33333 4.36939 4.13943 5.62963 2.66667 5.62963C1.19391 5.62963 0 4.36939 0 2.81481C0 1.26024 1.19391 0 2.66667 0C4.13943 0 5.33333 1.26024 5.33333 2.81481Z"/>
            <path d="M3.44243 14.9764C3.49092 15.5394 3.05677 16 2.52122 16C2.03637 16 1.69698 15.6929 1.6485 15.13C1.6485 14.3623 1.98567 13.9529 2.52122 13.9529C3.05677 13.9529 3.39395 14.4135 3.44243 14.9764Z"/>
            <path d="M3.86667 18.6667C3.86667 19.403 3.26971 20 2.53333 20C1.79695 20 1.2 19.403 1.2 18.6667C1.2 17.9303 1.79695 17.3333 2.53333 17.3333C3.26971 17.3333 3.86667 17.9303 3.86667 18.6667Z"/>
          </svg>
        </template>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props'
// 组件引用components
import resultState from './hooks/result-state'

export default defineComponent({
  name: 'ViResult',
  props,
  setup (props: any, ctx: SetupContext) {
    const result = resultState()

    return result
  }
})
</script>

<style lang="less">
@import './css/result.less';
</style>
