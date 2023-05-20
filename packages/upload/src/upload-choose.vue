<template>
  <div class="vi-upload-choose" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/upload-choose'
// 组件引用components
import optionChooseState from './hooks/upload-choose-state'

export default defineComponent({
  name: 'ViUploadChoose',
  props,
  setup (props: any, ctx: SetupContext) {
    const optionChoose = optionChooseState()

    return optionChoose
  }
})
</script>

<style lang="less">
@import './css/upload-choose.less';
</style>
