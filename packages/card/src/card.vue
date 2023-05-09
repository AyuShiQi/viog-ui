<template>
  <div
  class="vi-card"
  :class="[
    `is-${type}`
  ]">
    <slot v-if="finish" :data="{data}"></slot>
    <slot name="default" v-else></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import type { SetupContext } from 'vue'

import props from './props'

export default defineComponent({
  name: 'ViCard',
  props,
  setup (props: any, ctx: SetupContext) {
    const finish = ref(!props.db)
    const data = reactive({
      data: null
    })
    if (props.db) {
      props.db.then((val: any) => {
        data.data = val
        setTimeout(() => {
          finish.value = true
        })
      }).catch((err: any) => {
        console.log(err)
      })
    }

    return {
      finish,
      data
    }
  }
})
</script>

<style lang="less">
@import './css/card.less';
</style>
