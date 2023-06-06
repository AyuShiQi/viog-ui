<template>
  <div class="comp-card">
    <div class="comp-card__view">
      <slot></slot>
    </div>
    <vi-divider></vi-divider>
    <div class="comp-card__text">
      <span>{{ title }}</span>
      <span>{{ desc }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    title: String,
    desc: String
  })
</script>

<style>
.comp-card {
  display: flex;
  padding: 8px;
  width: 100px;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0 0 0 1px var(--vi-background-color-deep);
  border-radius: var(--vi-card-radius);
}

.comp-card > .comp-card__view {
  display: flex;
  height: 72px;
  justify-content: center;
  align-items: center;
}

.comp-card > .comp-card__view .vi-icon {
  font-size: 48px;
}

.comp-card > .comp-card__text {
  display: flex;
  width: 100%;
  padding-top: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.comp-card .comp-card__text > span {
  text-align: center;
  word-break: break-all;
}

.comp-card .comp-card__text span:first-child {
  font-weight: 600;
  font-size: 13px;
}

.comp-card .comp-card__text span:last-child {
  padding-top: 8px;
  font-size: 12px;
  color: var(--vi-link-color);
  user-select: none;
}
</style>