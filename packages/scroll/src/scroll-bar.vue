<template>
  <div class="vi-scroll-bar" :class="{'is-hidden': hidden}">
    <div class="bar" :class="[`is-${color}`]"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ViScrollBar',
  props: {
    color: {
      type: String,
      default: 'grey'
    },
    hidden: Boolean
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
        height: 100px;
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
