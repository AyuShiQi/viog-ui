<template>
  <svg
  class="vi-round-load"
  viewBox="0 0 402 402" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="175.877" y="0.877258" width="50" height="104.167" rx="25"/>
    <rect x="296.877" y="214.877" width="50" height="104.167" rx="25" transform="rotate(-90 296.877 214.877)"/>
    <rect x="0.877197" y="214.877" width="50" height="104.167" rx="25" transform="rotate(-90 0.877197 214.877)"/>
    <rect x="175.877" y="296.877" width="50" height="104.167" rx="25"/>
    <rect x="49.6396" y="69.4945" width="50" height="104.167" rx="25" transform="rotate(-45 49.6396 69.4945)"/>
    <rect x="258.943" y="278.798" width="50" height="104.167" rx="25" transform="rotate(-45 258.943 278.798)"/>
    <rect x="115.401" y="251.221" width="50" height="104.167" rx="25" transform="rotate(45 115.401 251.221)"/>
    <rect x="324.704" y="41.9173" width="50" height="104.167" rx="25" transform="rotate(45 324.704 41.9173)"/>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
// 组件引用components

export default defineComponent({
  name: 'ViRoundLoad'
})
</script>

<style lang="less" scoped>
 .vi-round-load {
    width: var(--vi-loading-width);
    height: var(--vi-loading-height);
    @keyframes roundloading {
        0% {
            fill: var(--vi-purple-color3);
        }

        100% {
            fill: transparent;
        }
    }
    rect:nth-child(1) {
        animation: roundloading .8s linear 0s infinite;
    }
    rect:nth-child(2) {
        animation: roundloading .8s linear .1s infinite;
    }
    rect:nth-child(3) {
        animation: roundloading .8s linear .2s infinite;
    }
    rect:nth-child(4) {
        animation: roundloading .8s linear .3s infinite;
    }
    rect:nth-child(5) {
        animation: roundloading .8s linear .4s infinite;
    }
    rect:nth-child(6) {
        animation: roundloading .8s linear .5s infinite;
    }
    rect:nth-child(7) {
        animation: roundloading .8s linear .6s infinite;
    }
    rect:nth-child(8) {
        animation: roundloading .8s linear .7s infinite;
    }
    rect:nth-child(1) {
        animation: roundloading .8s linear .8s infinite;
    }
 }
</style>
