<template>
  <div class="code-show">
    <div class="code-show__content">
        <slot></slot>
    </div>
    <vi-collapse title="展开代码">
        <slot name="code"></slot>
    </vi-collapse>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less">
.code-show {
    --vi-collapse-width: 100%;
    --vi-collapse-overflow-x: auto;
    --vi-scroll-width: 100%;
    --vi-scroll-min-width: 200px;
    overflow: hidden;
    padding: 0 .8em;
    margin: 8px 0;
    box-shadow: inset 0 0 0 1px var(--vi-background-color-deep);
    border-radius: var(--vi-card-radius);
    box-sizing: border-box;
}
</style>