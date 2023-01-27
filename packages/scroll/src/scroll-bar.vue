<template>
  <div class="vi-scroll-bar" :class="{'is-hidden': hidden}">
    <div class="bar" :class="[`is-${color}`]" :style="{height: `${barHeight}px`}"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { VirtualScrollPlusProps } from '@/types/scroll-types'

export default defineComponent({
  name: 'ViScrollBar',
  props: {
    color: {
      type: String,
      default: 'grey'
    },
    hidden: {
      type: Boolean,
      default: false
    },
    totalHeight: {
      type: Number,
      default: 1
    },
    clientHeight: {
      type: Number,
      default: 1
    }
  },
  setup (props: VirtualScrollPlusProps) {
    const barRatio = props.clientHeight / props.totalHeight
    const barHeight = barRatio >= 1 ? 0 : props.clientHeight * barRatio
    console.log(barRatio, barHeight)

    return {
      barRatio,
      barHeight
    }
  }
})
</script>

<style lang="less">
  @import '../../../public/css/basecolor.less';

  .vi-scroll-bar {
    width: 6px;
    opacity: 1;
    transition: all.3s;

    .bar {
        width: 100%;
        border-radius: 3px;
        cursor: pointer;
    }

    .bar.is-white {
        background-color: @white;

        &:hover {
            background-color: @lgrey;
        }
    }

    .bar.is-grey {
        background-color: @grey-o7;

        &:hover {
            background-color: @grey-o9;
        }
    }

    .bar.is-black {
        background-color: @black-background;

        &:hover {
            background-color: @black-background-hover;
        }
    }

    .bar.is-purple {
        background-color: @mpurple;

        &:hover {
            background-color: @mpurple-hover;
        }
    }

    .bar.is-golden {
        background-color: @golden;

        &:hover {
            background-color: @golden-hover;
        }
    }
  }

  .vi-scroll-bar.is-hidden {
    opacity: 0;
  }
</style>
