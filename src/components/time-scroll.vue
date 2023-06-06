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

import { TimeScrollProps } from '@/types/date-select-types/time-scroll-types'

export default defineComponent({
  name: 'ViTimeScroll',
  props: {
    choosed: {
      default: {}
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
  setup (props: TimeScrollProps, context: SetupContext) {
    const first = 80
    const mainScroll = timeScrollState(props, props.need, first, props.target)

    return {
      ...mainScroll
    }
  }
})
</script>

<style lang="less">
  .vi-time-scroll {
    position: relative;
    overflow: hidden;
    width: 36px;
    height: 200px;
    border-left: 1px solid var(--vi-background-color-deep);
    color: var(--vi-background-color-deep);
    text-align: center;
    box-sizing: border-box;

    li {
        list-style: none;
        height: 30px;
    }

    li.be-choosed {
        color: var(--vi-main-color1);
    }

    .vi-time-scroll-information {
      position: absolute;
      top: 65px;
      right: 0px;
      font-size: var(--vi-font-size);
      color: var(--vi-main-color1);
      transform: scale(70%);
    }
  }
</style>
