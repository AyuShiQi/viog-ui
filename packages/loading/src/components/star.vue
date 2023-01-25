<template>
  <svg class="vi-star" :width="size" viewBox="0 0 867 867" fill="none">
    <circle :class="[`is-${color}`]" cx="433.624" cy="433.042" r="324.725" stroke-width="10"/>
    <path class="big-star" :class="[`is-${color}`]" d="M165.539 587.363L433.333 123.53L701.128 587.363H165.539Z" stroke-width="8"/>
    <path class="big-star" :class="[`is-${color}`]" d="M165.539 278.722L701.128 278.722L433.333 742.555L165.539 278.722Z" stroke-width="8"/>
    <path class="small-star" :class="[`is-${color}`]" d="M378.238 334L547.642 434.746L375.692 531.081L378.238 334Z" stroke-width="6"/>
    <path class="small-star" :class="[`is-${color}`]" d="M492.023 335.47L489.477 532.551L320.073 431.805L492.023 335.47Z" stroke-width="6"/>
    <circle class="moon-circle" :class="[`is-${color}`]" cx="392.627" cy="408.328" r="272.515" stroke-width="8"/>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ViStarLoad',
  props: {
    color: {
      type: String,
      default: 'grey'
    },
    size: {
      type: String,
      default: '200px'
    }
  }
})
</script>

<style lang="less">
@import '../../../../public/css/basecolor.less';

@keyframes starRotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes starRotateReverse {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
}

.vi-star {
    display: inline-block;

    .moon-circle {
        transform-origin: center;
        animation: starRotate 30s linear 0s infinite;
    }

    .big-star {
        transform-origin: center;
        animation: starRotateReverse 24s linear 0s infinite;
    }

    .small-star {
        transform-origin: center;
        animation: starRotate 36s linear 0s infinite;
    }

    .is-white {
        stroke: #fff;
    }

    .is-purple {
        stroke: @mpurple;
    }

    .is-golden {
        stroke: @golden;
    }

    .is-grey {
        stroke: @grey-o7;
    }

    .is-blue {
        stroke: @blue;
    }

    .is-green {
        stroke: @sgreen-background-hover;
    }

    .is-red {
        stroke: @red;
    }

    .is-pink {
        stroke: @pink;
    }
}
</style>
