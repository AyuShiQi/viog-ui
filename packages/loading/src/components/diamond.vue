<template>
  <div class="diamond">
    <svg class="part1" width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" fill="#A0FFD5" fill-opacity="0.85" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part2" width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" fill="#A0FFD5" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part3" width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" fill="#FFCDC9" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part4" width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" fill="#FFCDC9" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part5" width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" fill="#ABD2FF" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part6" width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" fill="#ABD2FF" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>

    <svg class="part7" width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" fill="#80ECBC" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part8" width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" fill="#80ECBC" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part9" width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" fill="#FCB2AC" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part10" width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" fill="#FCB2AC" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part11" width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" fill="#88B2E0" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
    <svg class="part12" width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.27653 59L14.8078 4.12313L28.715 59H1.27653Z" fill="#88B2E0" fill-opacity="0.65" stroke="white" stroke-width="2"/>
    </svg>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ViDiamondLoad'
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

.vi-loading {
    .diamond {
        position: relative;
        width: 60px;
        height: 120px;
        margin: 0 auto;
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
}
</style>
