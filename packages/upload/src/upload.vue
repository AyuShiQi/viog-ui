<template>
  <div class="vi-upload">
    <input
    type="file"
    :multiple="multiple"
    :accept="accept"
    :capture="capture"
    :name="name"
    ref="fileUploaderInput"
    @change="handleFileChange"/>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/upload'
// 组件引用components
import uploadState from './hooks/upload-state'

export default defineComponent({
  name: 'ViUpload',
  props,
  emits: ['beforeadd', 'afteradd', 'beforedelete', 'afterdelete', 'MaximumAttention', 'LimitAttention', 'change'],
  setup (props: any, ctx: SetupContext) {
    const upload = uploadState(props, ctx)

    return upload
  }
})
</script>

<style lang="less">
@import './css/upload.less';
</style>
