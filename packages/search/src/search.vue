<template>
    <dropdown class="vi-search">
        <template v-slot:default>
            <vi-input class="">
                <template v-slot:prefix>
                    <icon type="sousuo"></icon>
                </template>
            </vi-input>
        </template>
        <template v-slot:content>
        </template>
    </dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { SetupContext } from 'vue'
// 组件type
// 组件props
import props from './props'
// 组件引用components
import { dropdown } from '../../dropdown'
import { input } from '../../input'
import { icon } from '../../icon'

import searchState from './hooks/search-state'

export default defineComponent({
  name: 'ViSearch',
  props,
  components: {
    dropdown,
    ViInput: input,
    icon
  },
  setup (props: any, ctx: SetupContext) {
    const search = searchState()

    return search
  }
})
</script>

<style lang="less">
@import './css/search.less';
</style>
