<template>
  <button class="vi-button" type="button" :disabled="disabled"
    :class="[`vi-button--${color}`,`is-${type}`,`is-${radius}`,{
        'is-small': small,
        'is-disabled': disabled
    }]">
    <span>
        <slot>button</slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { buttonProps } from '@/types/button-types'

export default defineComponent({
  name: 'ViButton',
  props: {
    color: {
      type: String,
      default: 'grey',
      validator (value: string): boolean {
        const colors = ['grey', 'purple', 'red', 'green', 'yellow', 'pink', 'blue', 'sgrey', 'spurple', 'sred', 'sgreen', 'syellow', 'spink', 'sblue']
        // The value must match one of these strings
        if (colors.includes(value)) return true
        else {
          console.error('[viog] color=' + value)
          console.error('[viog]button: 你应该为color参数传入[grey/purple/red/green/yellow/pink/blue/sgrey/spurple/sred/sgreen/syellow/spink/sblue]中的一个值')
          return false
        }
      }
    },
    type: {
      type: String,
      default: 'default',
      validator (value: string): boolean {
        const types = ['default', 'plain', 'transparent']
        // The value must match one of these strings
        if (types.includes(value)) return true
        else {
          console.error('[viog]button: 你应该为type参数传入[plain/transparent]中的一个值')
          return false
        }
      }
    },
    radius: {
      type: String,
      default: 'default',
      validator (value: string): boolean {
        const radius = ['default', 'round', 'circle']
        // The value must match one of these strings
        if (radius.includes(value)) return true
        else {
          console.error('[viog]button: 你应该为radius参数传入[round/circle]中的一个值')
          return false
        }
      }
    },
    small: {
      type: Boolean,
      default: false,
      validator (value: boolean): boolean {
        const radius = [true, false]
        // The value must match one of these strings
        if (radius.includes(value)) return true
        else {
          console.error('[viog]button: 你应该为small参数传入一个布尔值')
          return false
        }
      }
    },
    disabled: {
      type: Boolean,
      default: false,
      validator (value: boolean): boolean {
        const radius = [true, false]
        // The value must match one of these strings
        if (radius.includes(value)) return true
        else {
          console.error('[viog]button: 你应该为disabled参数传入一个布尔值')
          return false
        }
      }
    }
  },
  setup (props: buttonProps, context: any) {
    function handleClick (e: any): void {
      console.log(e)
      context.emit('click', e.target)
    }

    return {
      // handleClick
    }
  }
})
</script>

<style lang="less">
    @path: '../../../';
    @import '@{path}public/css/basecolor';
    @import '@{path}public/css/base';

    .vi-button {
        overflow: hidden;
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: @white;
        border: 1px solid @black;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: all 0.2s ease 0s;
        font-weight: 500;
        // 禁止元素的文字被选中
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: 12px 20px;
        font-size: @font-size;
        border-radius: 4px;
    }

    .vi-button > span {
      display: flex;
      align-items: center;
      justify-content: space-around
    }

    @import './css/color';
    @import './css/type';
    @import './css/size';
    @import './css/disabled';
</style>
