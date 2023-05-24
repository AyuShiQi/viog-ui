<template>
  <li
  class="vi-upload-list-item"
  :class="[
    `vi-upload-list-item-type-${type}`,
    `vi-upload-list-item-format-${format}`,
    {
      'vi-upload-list-item-show-size': showSize
    }
  ]">
    <div class="vi-upload-list-item__delete-btn" @click="handleDelete">
        删除
    </div>
    <div class="vi-upload-list-item__view">
      <div class="vi-upload-list-item__view__img"></div>
    </div>
    <div class="vi-upload-list-item__text">
      <p class="vi-upload-list-item__text__name">{{ file!.name }}</p>
      <p class="vi-upload-list-item__text__size" v-if="showSize">{{ sizeString }}</p>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/upload-list-item'
// 组件引用components
import uploadListItemState from './hooks/upload-list-item-state'
import { type } from 'os'

export default defineComponent({
  name: 'ViUploadListItem',
  props,
  setup (props: any, ctx: SetupContext) {
    const uploadListItem = uploadListItemState(props, ctx)

    return uploadListItem
  }
})
</script>

<style lang="less">
@import './css/upload-list-item.less';
</style>
