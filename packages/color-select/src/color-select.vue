<template>
  <vi-dropdown>
    <div>取色器</div>
    <template v-slot:content>
      neirong
    </template>
  </vi-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
// 组件引用components
import colorSelectState from './hooks/color-select-state'

export default defineComponent({
  name: 'ViColorSelect',
  setup (props: any, ctx: SetupContext) {
    const colorSelect = colorSelectState()
  }
})
</script>

<style lang="less">
@import './css/color-select.less';
</style>
