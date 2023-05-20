<template>
  <li class="vi-upload-list-item"></li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/upload-list-item'
// 组件引用components
import uploadListItemState from './hooks/upload-list-item-state'

export default defineComponent({
  name: 'ViUploadListItem',
  props,
  setup (props: any, ctx: SetupContext) {
    const uploadListItem = uploadListItemState()

    return uploadListItem
  }
})
</script>

<style lang="less">
@import './css/_.less';
</style>
