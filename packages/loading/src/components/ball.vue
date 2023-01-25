<template>
  <svg class="vi-ball" viewBox="0 0 18 8" :width="size">
    <circle
    class="normal-ball"
    :class="[`is-${color}`]"
    cx="2"
    cy="4"
    r="1"
    fill="#fff"/>
    <circle
    class="normal-ball"
    :class="[`is-${color}`]"
    cx="9"
    cy="4"
    r="1"
    fill="#fff"/>
    <circle
    class="normal-ball"
    :class="[`is-${color}`]"
    cx="16"
    cy="4"
    r="1"/>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ViBallLoad',
  props: {
    color: {
      type: String,
      default: 'white'
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

@keyframes upAndDown {
    0% {
        transform: translateY(0px);
    }
    25% {
        transform: translateY(1px);
    }
    50% {
        transform: translateY(0px);
    }
    75% {
        transform: translateY(-1px);
    }
    100% {
        transform: translateY(0px);
    }
}

.vi-ball {
    display: inline-block;

    .normal-ball {
        transform-origin: center;
    }

    .normal-ball:nth-child(1) {
        animation: upAndDown .8s linear 0s infinite;
    }
    .normal-ball:nth-child(2) {
        animation: upAndDown .8s linear .2s infinite;
    }
    .normal-ball:nth-child(3) {
        animation: upAndDown .8s linear .4s infinite;
    }

    .normal-ball.is-white {
        fill: #fff
    }

    .normal-ball.is-purple {
        fill: @mpurple
    }

    .normal-ball.is-golden {
        fill: @golden
    }

    .normal-ball.is-grey {
        fill: @grey-o7
    }

    .normal-ball.is-blue {
        fill: @blue
    }

    .normal-ball.is-green {
        fill: @sgreen-background-hover
    }

    .normal-ball.is-red {
        fill: @red
    }

    .normal-ball.is-pink {
        fill: @pink
    }
}
</style>
