<template>
  <div class="vi-upload-choose" @click="handleClick" @drop="handleDrop" @dragover="e=>e.preventDefault()">
    <slot>
      <div class="vi-upload-choose__drag-default" v-if="drag && !photo">
        <vi-icon type="wenjianjia" style="font-size: 48px; color: var(--vi-background-color-deep)"></vi-icon>
        通过拖拽或点击上传文件
      </div>
      <vi-upload-list v-if="drag && !photo"></vi-upload-list>
      <div class="vi-uplaod-choose__photo-default" v-if="photo">
        <div class="vi-uplaod-choose__photo-default__mask"></div>
        <div class="vi-uplaod-choose__photo-default__img">
          <img :src="imgsrc" alt="头像">
        </div>
      </div>
    </slot>
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
    const optionChoose = optionChooseState(props)

    return optionChoose
  }
})
</script>

<style lang="less">
@import './css/upload-choose.less';
</style>
