<template>
  <ul class="vi-upload-list"></ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/upload-list'
// 组件引用components
import uploadListState from './hooks/upload-list-state'

export default defineComponent({
  name: 'ViUploadList',
  props,
  setup (props: any, ctx: SetupContext) {
    const uploadList = uploadListState()

    return uploadList
  }
})
</script>

<style lang="less">
@import './css/upload-list.less';
</style>
