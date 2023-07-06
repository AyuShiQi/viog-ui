<template>
  <svg class="vi-circle" viewBox="0 0 24 24">
    <circle
    class="normal-circle"
    :class="[`is-${color}`]"
    cx="12"
    cy="12"
    r="10"
    stroke-width="2"
    stroke-linecap="round"
    fill="none"/>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ViCircleLoad',
  props: {
    color: {
      type: String,
      default: 'grey'
    },
    size: {
      type: String,
      default: '50px'
    }
  }
})
</script>

<style lang="less">
 @import '../../../../public/css/basecolor.less';

 .vi-circle {
    width: var(--vi-loading-width);
    display: inline-block;
     .normal-circle {
        stroke-dasharray: 62;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: changeLine 1.5s ease 0s infinite
    }

    .normal-circle.is-white {
        stroke: #fff
    }

    .normal-circle.is-purple {
        stroke: @mpurple
    }

    .normal-circle.is-golden {
        stroke: @golden
    }

    .normal-circle.is-grey {
        stroke: @grey-o7
    }

    .normal-circle.is-blue {
        stroke: @blue
    }

    .normal-circle.is-green {
        stroke: @sgreen-background-hover
    }

    .normal-circle.is-red {
        stroke: @red
    }

    .normal-circle.is-pink {
        stroke: @pink
    }
 }

@keyframes changeLine {
    0% {
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dashoffset: 60;
    }
    100% {
      stroke-dashoffset: 120;
    }
 }
</style>
