<template>
  <svg class="vi-disk" :width="size" viewBox="0 0 580 580" fill="none">
    <circle :class="[`is-${color}`]" cx="290" cy="290" r="271" stroke-width="5"/>
    <circle :class="[`is-${color}`]" cx="290" cy="290" r="254" stroke-width="3"/>
    <circle class="bigger-ball" :class="[`is-${color}-fill`]" cx="40" cy="212" r="18"/>
    <circle :class="[`is-${color}`]" cx="290" cy="290" r="150" stroke-width="3"/>
    <circle :class="[`is-${color}`]" cx="290" cy="290" r="65" stroke-width="2"/>
    <circle class="little-ball" :class="[`is-${color}-fill`]" cx="438" cy="264" r="12"/>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ViDiskLoad',
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

@keyframes diskRotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes diskRotateReverse {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
}

.vi-disk {
    display: inline-block;

    .bigger-ball {
        transform-origin: center;
        animation: diskRotate 8s linear 0s infinite;
    }

    .little-ball {
        transform-origin: center;
        animation: diskRotateReverse 6s linear 0s infinite;
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

    .is-white-fill {
        fill: #fff;
    }

    .is-purple-fill {
        fill: @mpurple;
    }

    .is-golden-fill {
        fill: @golden;
    }

    .is-grey-fill {
        fill: @grey;
    }

    .is-blue-fill {
        fill: @blue;
    }

    .is-green-fill {
        fill: @sgreen-background-hover;
    }

    .is-red-fill {
        fill: @red;
    }

    .is-pink-fill {
        fill: @pink;
    }
}
</style>
