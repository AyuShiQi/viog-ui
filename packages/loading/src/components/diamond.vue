<template>
  <div class="vi-diamond">
    <svg class="part1" width="30" height="60" viewBox="0 0 30 60" fill="none">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" :fill="colors[0]" fill-opacity="0.85" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part2" width="30" height="60" viewBox="0 0 30 60" fill="none">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" :fill="colors[0]" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part3" width="30" height="60" viewBox="0 0 30 60" fill="none">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" :fill="colors[1]" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part4" width="30" height="60" viewBox="0 0 30 60" fill="none">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" :fill="colors[1]" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part5" width="30" height="60" viewBox="0 0 30 60" fill="none">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" :fill="colors[2]" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part6" width="30" height="60" viewBox="0 0 30 60" fill="none">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" :fill="colors[2]" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>

    <svg class="part7" width="30" height="60" viewBox="0 0 30 60" fill="none">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" :fill="colors[3]" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part8" width="30" height="60" viewBox="0 0 30 60" fill="none">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" :fill="colors[3]" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part9" width="30" height="60" viewBox="0 0 30 60" fill="none">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" :fill="colors[4]" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part10" width="30" height="60" viewBox="0 0 30 60" fill="none">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" :fill="colors[4]" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part11" width="30" height="60" viewBox="0 0 30 60" fill="none">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" :fill="colors[5]" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part12" width="30" height="60" viewBox="0 0 30 60" fill="none">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" :fill="colors[5]" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { loadingProps, ColorTeamType } from '@/types/loading-types'

export default defineComponent({
  name: 'ViDiamondLoad',
  props: {
    color: {
      type: String,
      default: 'colorful'
    }
  },
  setup (props: loadingProps) {
    const colorTeam: ColorTeamType = {
      colorful: ['#A0FFD5', '#FFCDC9', '#ABD2FF', '#80ECBC', '#FCB2AC', '#88B2E0'],
      plain: ['#eafdff', '#ecf3ff', '#ecfffa', '#eafdff', '#ecf3ff', '#ecfffa'],
      purple: ['#f4d1e0', '#dccaf0', '#edcaf0', '#f4d1e0', '#dccaf0', '#edcaf0']
    }

    return {
      colors: colorTeam[props.color as keyof ColorTeamType]
    }
  }
})
</script>

<style lang="less">
@keyframes diamond-load {
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(360deg);
    }
}

.vi-diamond {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 120px;
    margin: 0 auto;
    color: #ecfffa;
    /* perspective: 500px; */
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(0deg) rotateX(0deg);
    // background-color: #fff;
    animation: diamond-load 2.5s linear 0s infinite;

    [class*=part] {
        position: absolute;
        top: 0;
        transform-origin: bottom center;
    }

    .part1 {
        transform: translate3d(-15px,0,26px) rotateX(27deg);
    }

    .part2 {
        transform: translate3d(-15px,0,-26px) rotateX(-27deg);
    }

    .part3 {
        transform: translate3d(8px,0,-13px) rotateY(-60deg) rotateX(-27deg);
    }

    .part4 {
        transform: translate3d(-38px,0,13px) rotateY(-60deg) rotateX(27deg);
    }

    .part5 {
        transform: translate3d(-38px,0,-13px) rotateY(-120deg) rotateX(27deg);
    }

    .part6 {
        transform: translate3d(8px,0,13px) rotateY(-120deg) rotateX(-27deg);
    }

    .part7 {
        transform: translate3d(-15px,0,26px) rotateX(153deg);
    }

    .part8 {
        transform: translate3d(-15px,0,-26px) rotateX(-153deg);
    }

    .part9 {
        transform: translate3d(8px,0,-13px) rotateY(-61deg) rotateX(-152deg);
    }

    .part10 {
        transform: translate3d(-38px,0,13px) rotateY(-61deg) rotateX(152deg);
    }

    .part11 {
        transform: translate3d(8px,0,13px) rotateY(61deg) rotateX(152deg);
    }

    .part12 {
        transform: translate3d(-38px,0,-13px) rotateY(61deg) rotateX(-152deg);
    }
}
</style>
