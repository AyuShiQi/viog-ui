<template>
  <vi-dropdown
  class="vi-color-select"
  :class="[
    `vi-color-select-type-${type}`,
    {
      'vi-color-select-show-number': number
    }
  ]">
    <div class="vi-color-select__view">
      <div
      class="vi-color-select__view__color-patches"
      :style="{
        background: modelValue
      }"></div>
      <div number class="vi-color-select__view__number" v-if="number">
        {{ modelValue }}
      </div>
    </div>
    <template v-slot:content>
      <div class="vi-color-select__list">
        <!-- 色盘 -->
        <div class="vi-color-select__list__color-choose"
        :style="{
          background: colorSliderView
        }">
          <div class="vi-color-select__list__color-choose__thumb"
          @mousedown="handleBoardMousedown"
          @touchstart="handleBoardMousedown"
          :style="{
            transform: `translate(${boardPos[0]}px, ${boardPos[1]}px)`
          }"></div>
        </div>
        <div class="vi-color__list__else">
          <div class="vi-color__list__option">
            <!-- 选中颜色展示 -->
            <div class="vi-color-choose">
              <div class="vi-color__list__option__color"
              :style="{
                backgroundColor: colorView
              }"></div>
            </div>
            <div class="vi-color-slider">
              <!-- 透明度条 -->
              <div class="vi-color__list__alpha" v-if="alpha">
                <div class="vi-color__list__alpha__thumb"
                @mousedown="handleAlphaMousedown"
                @touchstart="handleAlphaMousedown"
                :style="{
                  transform: `translateX(${alphaPos[0]}px)`
                }"></div>
              </div>
              <!-- 色条盘 -->
              <div class="vi-color-select__list__info__slider">
                <div class="vi-color__list__info__slider__thumb"
                @mousedown="handleColorSliderMousedown"
                @touchstart="handleColorSliderMousedown"
                :style="{
                  transform: `translateX(${colorSliderPos[0]}px)`
                }"></div>
              </div>
            </div>
          </div>
          <!-- 颜色信息 -->
          <div class="vi-color-select__list__info">
            <vi-input type="button"
            v-model="hexColor"
            :maxlength="8"
            class="vi-color-select__list__info__input">
              <template v-slot:prefix>
                #
              </template>
            </vi-input>
            <div class="transparent-color" @click="handleTransparent"></div>
            <vi-button @click="handleSure">确认</vi-button>
          </div>
        </div>
      </div>
    </template>
  </vi-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props'
// 组件引用components
import colorSelectState from './hooks/color-select-state'

export default defineComponent({
  name: 'ViColorSelect',
  props,
  setup (props: any, ctx: SetupContext) {
    const colorSelect = colorSelectState(props, ctx)

    return colorSelect
  }
})
</script>

<style lang="less">
@import './css/color-select.less';
</style>
