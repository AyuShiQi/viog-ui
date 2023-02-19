<template>
  <div class="vi-time-scroll" @wheel="mouseWheel">
    <div class="vi-time-scroll-information">
      {{info}}
    </div>
    <ul
    ref="scrollUl"
    :style="{
    transform: `translateY(${translate}px)`
    }">
      <li
      v-for="(item, i) in lists"
      :key="item"
      :class="{
        'be-choosed': isChoosed(i)
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
    },
    target: {
      type: String,
      default: 'hour'
    },
    info: {
      type: String,
      default: '时'
    },
    need: {
      type: Number,
      default: 60
    }
  },
  setup (props: any, context: SetupContext) {
    const first = 80
    const mainScroll = timeScrollState(props, props.need, first, props.target)

    return {
      ...mainScroll
    }
  }
})
</script>

<style lang="less">
  @import '../../public/css/basecolor.less';
  @import '../../public/css/base.less';
//   @import './css/time-box.less';
  .vi-time-scroll {
    position: relative;
    .vi-time-scroll-information {
      position: absolute;
      top: 65px;
      right: 0px;
      font-size: @font-size;
      color: @spurple-background;
      transform: scale(70%);
    }
  }
</style>
