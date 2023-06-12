<template>
  <span
  class="vi-input"
  :class="[
  `is-${color}`,
  `vi-input-${type}`,
  `vi-input-size-${size}`,
  {
    'is-focus': isFocus,
    'is-dark': dark,
    'is-round': round,
    'info-right': right,
    'info-error': error,
    'info-warn': warn,
    'show-password': showPassword,
    'show-clear': showClear,
    'is-disabled': disabled,
    'is-number': number
  }]"
  @click="toFocus"
  @mouseenter="mouseEnter"
  @mouseleave="mouseLeave">
    <!-- 前缀 -->
    <span class="vi-input-prefix vi-input-fix" v-if="prefixSlot">
      <slot name="prefix"></slot>
    </span>
    <!-- 输入框 -->
    <input
    class="vi-input__origin"
    @input="handleInput"
    @change="handleChange"
    @beforeinput="beforeInput"
    @keyup="handleKeyUp"
    @focus="focus"
    @blur="blur"
    :value="value"
    :name="name"
    :type="passwordOrText"
    :maxlength="maxlength"
    :minlength="minlength"
    :disabled="disabled"
    :autofocus="autofocus"
    :placeholder="placeholder"
    ref="input"/>
    <!-- 按钮 -->
    <span class="vi-option-button-home">
      <span class="vi-option-clear" v-show="showClear" @click="toClear">
        <svg class="clear-option"
        viewBox="0 0 1024 1024">
          <path
          d="M512 104.489796c230.838857 0 417.959184 187.120327 417.959184 417.959184s-187.120327 417.959184-417.959184 417.959183S94.040816 753.287837 94.040816 522.44898 281.161143 104.489796 512 104.489796z m0 83.591837C327.324735 188.081633 177.632653 337.773714 177.632653 522.44898s149.692082 334.367347 334.367347 334.367347 334.367347-149.692082 334.367347-334.367347S696.675265 188.081633 512 188.081633z m-103.444898 171.82302l103.444898 103.444898 103.444898-103.444898a20.897959 20.897959 0 0 1 29.549714 0l29.549715 29.549714a20.897959 20.897959 0 0 1 0 29.549715L571.141224 522.44898l103.444898 103.444898a20.897959 20.897959 0 0 1 0 29.549714l-29.570612 29.549714a20.897959 20.897959 0 0 1-29.549714 0L512 581.548408l-103.444898 103.444898a20.897959 20.897959 0 0 1-29.549714 0l-29.549715-29.549714a20.897959 20.897959 0 0 1 0-29.549714l103.444898-103.444898-103.444898-103.444898a20.897959 20.897959 0 0 1 0-29.549715l29.549715-29.549714a20.897959 20.897959 0 0 1 29.549714 0z"  />
        </svg>
      </span>
      <span class="vi-option-password" v-show="showPassword && password" @click="changeShowPassword">
        <svg
        class="view-option"
        viewBox="0 0 1024 1024"
        v-show="!ifShowPassword">
          <path
          d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3-7.7 16.2-7.7 35.2 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zM508 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
        </svg>
        <svg
        class="noview-option"
        viewBox="0 0 1024 1024"
        v-show="ifShowPassword">
          <path
          d="M942.3 486.4l-0.1-0.1-0.1-0.1c-36.4-76.7-80-138.7-130.7-186L760.7 351c43.7 40.2 81.5 93.7 114.1 160.9C791.5 684.2 673.4 766 512 766c-51.3 0-98.3-8.3-141.2-25.1l-54.7 54.7C374.6 823.8 439.8 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0.1-51.3z m-64-332.2l-42.4-42.4c-3.1-3.1-8.2-3.1-11.3 0L707.8 228.5C649.4 200.2 584.2 186 512 186c-192.2 0-335.4 100.5-430.2 300.3v0.1c-7.7 16.2-7.7 35.2 0 51.5 36.4 76.7 80 138.7 130.7 186.1L111.8 824.5c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0l712.8-712.8c3.1-3 3.1-8.1 0-11.2zM398.9 537.4c-1.9-8.2-2.9-16.7-2.9-25.4 0-61.9 50.1-112 112-112 8.7 0 17.3 1 25.4 2.9L398.9 537.4z m184.5-184.5C560.5 342.1 535 336 508 336c-97.2 0-176 78.8-176 176 0 27 6.1 52.5 16.9 75.4L263.3 673c-43.7-40.2-81.5-93.7-114.1-160.9C232.6 339.8 350.7 258 512 258c51.3 0 98.3 8.3 141.2 25.1l-69.8 69.8zM508 624c-6.4 0-12.7-0.5-18.8-1.6l-51.1 51.1c21.4 9.3 45.1 14.4 69.9 14.4 97.2 0 176-78.8 176-176 0-24.8-5.1-48.5-14.4-69.9l-51.1 51.1c1 6.1 1.6 12.4 1.6 18.8C620 573.9 569.9 624 508 624z" />
        </svg>
      </span>
    </span>
    <!-- 后缀 -->
    <span class="vi-input-suffix vi-input-fix" v-if="suffixSlot">
      <slot name="suffix"></slot>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
import type { InputProps } from './type'

import props from './props'

import inputState from './hooks/input-state'

export default defineComponent({
  name: 'ViInput',
  emits: ['change', 'input', 'update:modelValue', 'search'] as string[],
  props,
  setup (props: InputProps, context: SetupContext) {
    const input = inputState(props, context)

    return input
  }
})
</script>

<style lang="less">
@import './css/input.less';
</style>
