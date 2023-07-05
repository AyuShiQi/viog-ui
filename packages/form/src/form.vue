<template>
  <div class="vi-form">
    <slot :submit="submit" :getSubmitFeedback="getSubmitFeedback"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import type { SetupContext } from 'vue'

import formState from './hooks/form-state'
import props from './props/form'

export default defineComponent({
  name: 'ViForm',
  props,
  setup (props: any, ctx: SetupContext) {
    return formState(ctx)
  }
})
</script>

<style lang="less">
  @import './css/form.less';
</style>
