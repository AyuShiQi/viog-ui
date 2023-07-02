<template>
  <table
  class="vi-table"
  :class="[
    `vi-table-type-${type}`,
    `vi-table-align-${align}`,
    {
      'vi-table-stripe': stripe,
      'vi-table-hover': hover
    }
  ]">
    <div class="vi-table__head">
        <tr class="vi-table__head__tr">
          <th class="vi-table-column" v-if="pick" style="width: 40px">
            <vi-checkbox v-if="multi" hidden :modelValue="pickValue" :value="new Array(datas.length).fill(-1).map((v, i) => i)"></vi-checkbox>
          </th>
            <slot></slot>
        </tr>
    </div>
    <div class="vi-table__body">
      <div class="vi-table__body__tr-box" v-for="(data, index) in datas" :key="data">
        <tr class="vi-table__body__tr">
          <td v-if="pick" style="width: 40px">
            <vi-checkbox v-if="multi" name="vi-table-pick-multi" hidden :value="index" :modelValue="pickValue"></vi-checkbox>
            <vi-radio v-else name="vi-table-pick" hidden :value="index" :modelValue="pickValue" @update:modelValue="handelUpdateModelValue"></vi-radio>
          </td>
          <td v-for="title in titles"
          :key="title.value"
          :style="{
            width: title.width
          }">
            {{ data[title.value] }}
          </td>
        </tr>
      </div>
    </div>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props/table'
// 组件引用components
import tableState from './hooks/table-state'

export default defineComponent({
  name: 'ViTable',
  props,
  setup (props: any, ctx: SetupContext) {
    const table = tableState(props, ctx)

    return table
  }
})
</script>

<style lang="less">
@import './css/table.less';
</style>
