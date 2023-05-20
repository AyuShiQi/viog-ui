<template>
  <div class="vi-upload" @click="handleClick">
    <input type="file" ref="fileUploaderInput" @change="handleFileChange"/>
    123
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
  setup (props: any, ctx: SetupContext) {
    const upload = uploadState()

    return upload
  }
})
</script>

<style lang="less">
@import './css/upload.less';
</style>
