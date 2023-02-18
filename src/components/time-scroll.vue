<template>
  <div class="vi-time-scroll" @wheel="mouseWheel">
    <ul
    ref="scrollUl"
    :style="{
    transform: `translateY(${translate}px)`
    }">
      <li
      v-for="(item, i) in lists"
      :key="item"
      :class="{
        'be-choosed': isChoosed(i, 0)
      }">{{item}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'

import timeScrollState from '@/hooks/time-scroll-state'

export default defineComponent({
  name: 'ViTimeScroll',
  emits: [],
  props: {
    choosed: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup (props: any, context: SetupContext) {
    const first = 80
    const mainScroll = timeScrollState(props, 60, first, 'hour')

    return {
      ...mainScroll
    }
  }
})
</script>

<style lang="less">
//   @import './css/time-box.less';
</style>
