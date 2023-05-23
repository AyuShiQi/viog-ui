<template>
  <ul class="vi-upload-list">
    <vi-upload-list-item
    :showSize="showSize"
    :type="type"
    v-for="file in fileList"
    :key="file.name"
    :name="file.name"
    :size="file.size"></vi-upload-list-item>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/upload-list'
// 组件引用components
import uploadListItem from './upload-list-item.vue'

import uploadListState from './hooks/upload-list-state'

export default defineComponent({
  name: 'ViUploadList',
  props,
  components: {
    ViUploadListItem: uploadListItem
  },
  setup (props: any, ctx: SetupContext) {
    const uploadList = uploadListState(props, ctx)

    return uploadList
  }
})
</script>

<style lang="less">
@import './css/upload-list.less';
</style>
