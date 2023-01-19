<template>
  <span class="vi-icon" :class="[`icon-${type}`,`is-${size}`]"></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ViIcon',
  props: {
    type: {
      type: String,
      default: 'haoyourenzheng'
    },
    size: {
      type: String,
      default: 'middle'
    }
  }
})
</script>

<style lang="less">
  @path: '../../../';
  @import '@{path}public/css/base';
  @import '@{path}public/css/icon';

  @import './css/type.less';

  .vi-icon.is-small {
    font-size: @font-size;
  }

  .vi-icon.is-middle {
    font-size: 24px;
  }

  .vi-icon.is-big {
    font-size: 36px;
  }
</style>
