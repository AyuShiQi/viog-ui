<template>
  <table class="vi-input-table">
    <tr class="vi-input-table__tr">
      <th class="vi-input-table__th vi-input-table__sider-td" v-if="multi || pick">
        <vi-checkbox v-if="multi" :value="multiValue" v-model="originPickValue" @change="handleCheckBoxChange"></vi-checkbox>
      </th>
      <slot>
      </slot>
    </tr>
    <tr class="vi-input-table__tr" v-for="(line, i) of value" :key="i">
      <!-- 选择部分 -->
      <td class="vi-input-table__td vi-input-table__sider-td" v-if="pick || multi">
        <vi-radio v-if="pick" :value="i" v-model="pickViewValue"></vi-radio>
        <vi-checkbox v-else :value="i" v-model="originPickValue" @change="handleCheckBoxChange"></vi-checkbox>
      </td>
      <inputTd
      class="vi-input-table__td"
      v-for="val of colMap"
      :key="`${i}+${val}`"
      :value="line[val]"
      :i="i"
      :j="val"
      :style="{
        ['--vi-table-td-width']: widthMap[val]
      }"/>
    </tr>
    <tr class="vi-input-table__tr" v-if="extension">
      <td class="vi-input-table__td vi-input-table__sider-td" v-if="pick || multi">
        <vi-radio v-if="pick" :value="value.length" v-model="pickViewValue" disabled></vi-radio>
        <vi-checkbox v-else :value="value.length" v-model="originPickValue" disabled></vi-checkbox>
      </td>
      <inputTd
      class="vi-input-table__td"
      v-for="val of colMap"
      :key="`${value.length}+${val}`"
      value=""
      :i="value.length"
      :j="val"
      :style="{
        ['--vi-table-td-width']: widthMap[val]
      }"/>
    </tr>
  </table>
</template>

<script lang="ts">
import inputTd from './input-table-td.vue'
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props'
// 组件引用components
import inputTableState from './hooks/input-table-state'

export default defineComponent({
  name: 'ViInputTable',
  props,
  components: {
    inputTd
  },
  setup (props: any, ctx: SetupContext) {
    const inputTable = inputTableState(props, ctx)

    return inputTable
  }
})
</script>

<style lang="less">
@import './css/input-table.less';
</style>
