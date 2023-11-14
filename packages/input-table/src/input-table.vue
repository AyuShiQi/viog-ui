<template>
  <table class="vi-input-table">
    <tr class="vi-input-table__tr">
      <th class="vi-input-table__th vi-input-table__sider-td" v-if="multi || pick">
        <vi-checkbox v-if="multi" :value="multiValue" v-model="originPickValue.value" @change="handleCheckBoxChange"></vi-checkbox>
      </th>
      <slot>
      </slot>
    </tr>
    <tr class="vi-input-table__tr" v-for="(line, i) of value" :key="i">
      <!-- 选择部分 -->
      <td class="vi-input-table__td vi-input-table__sider-td" v-if="pick || multi">
        <vi-radio v-if="pick" :value="i" v-model="pickViewValue"></vi-radio>
        <vi-checkbox v-else :value="i" v-model="originPickValue.value" @change="handleCheckBoxChange"></vi-checkbox>
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
      <svg class="vi-input-table__tr-del"
      @click="handleDelLine(i)"
      viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 960c-247.424 0-448-200.576-448-448s200.576-448 448-448 448 200.576 448 448S759.424 960 512 960zM512 176C326.464 176 176 326.464 176 512S326.464 848 512 848s336-150.464 336-336S697.536 176 512 176zM707.968 568 316.032 568C300.544 568 288 555.456 288 539.968L288 484.032c0-15.488 12.544-28.032 28.032-28.032l392 0c15.488 0 28.032 12.544 28.032 28.032l0 56C736 555.456 723.456 568 707.968 568z" p-id="8354"></path></svg>
    </tr>
    <tr class="vi-input-table__tr" v-if="extension">
      <td class="vi-input-table__td vi-input-table__sider-td" v-if="pick || multi">
        <vi-radio v-if="pick" :value="value.length" v-model="pickViewValue" disabled></vi-radio>
        <vi-checkbox v-else :value="value.length" v-model="originPickValue.value" disabled></vi-checkbox>
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
