<template>
  <div
  class="vi-cascader-select"
  :class="[
    `vi-cascader-select-type-${type}`,
    {
      'vi-cascader-select-need-placeholder': needPlaceholder
    }
  ]">
    <vi-dropdown>
      <template v-slot="{ open }">
        <div
        class="vi-cascader-select__view"
        :class="[
          {
            'vi-cascader-select__view_open': open
          }
        ]">
          <span class="vi-cascader-select__view__res">
            {{ resultView }}
          </span>
          <svg
          class="vi-cascader-select__view__arrow"
          viewBox="0 0 40 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4019 1.5C18.5566 -0.5 21.4434 -0.5 22.5981 1.5L39.0526 30C40.2073 32 38.7639 34.5 36.4545 34.5H3.54552C1.23612 34.5 -0.207259 32 0.947441 30L17.4019 1.5Z"/>
          </svg>
        </div>
      </template>
      <template v-slot:content>
        <vi-cascader
        :type="type"
        v-model="modelValue"
        :options="options"/>
      </template>
    </vi-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props'
// 组件引用components
import cascaderSelectState from './hooks/cascader-select-state'

export default defineComponent({
  name: 'ViCascaderSelect',
  props,
  setup (props: any, ctx: SetupContext) {
    const cascaderSelect = cascaderSelectState(props)
    return cascaderSelect
  }
})
</script>

<style lang="less">
@import './css/cascader-select.less';
</style>
