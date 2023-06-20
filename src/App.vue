<template>
  <vi-checkbox v-model="ar">你好</vi-checkbox>
  <vi-collapse title="下拉框" auto-retract>内容</vi-collapse>
  <vi-collapse-group accordion>
    <vi-collapse title="下拉框" auto-retract type="button">内容</vi-collapse>
    <vi-collapse title="下拉框" auto-retract type="button">内容</vi-collapse>
    <vi-collapse title="下拉框" auto-retract type="button">内容</vi-collapse>
    <vi-collapse title="下拉框" auto-retract type="button">内容</vi-collapse>
  </vi-collapse-group>
  <vi-dropdown>
    <vi-button>haode</vi-button>
    <template v-slot:content>
      12134
    </template>
  </vi-dropdown>
  <!-- <vi-dialog v-model="open" title="这是一个对话框">
    你好
    <template v-slot:shutdown>
      <vi-button radius="round" color="red" size="small" type="transparent">关闭</vi-button>
    </template>
    <template v-slot:unsure>
      <vi-button>取消</vi-button>
    </template>
    <template v-slot:sure>
      <vi-button color="purple">确认</vi-button>
    </template>
  </vi-dialog> -->
  <vi-button @click="open = true">打开对话框</vi-button>
  <!-- <vi-menu router>
    <vi-menu-item to="/ok">你好</vi-menu-item>
    <vi-menu-item to="/home">你好</vi-menu-item>
    <vi-menu-group scalable option to="/12" title="好吧">
      <vi-menu-item to="/">你好</vi-menu-item>
    </vi-menu-group>
  </vi-menu> -->
  <vi-bubble dark>
    <vi-button @click="append">看bubble</vi-button>
    <template v-slot:content>
      <div>
        暗色bubble
      </div>
    </template>
  </vi-bubble>
  <vi-bubble trigger="click">
    <vi-button>看bubble</vi-button>
    <template v-slot:content>
      <div>
        暗色bubble
      </div>
    </template>
  </vi-bubble>
  <vi-table-editor></vi-table-editor>
  <!-- <vi-drawer v-model="open" teleport direction="bottom">
    <vi-table-editor style="width: 100%"></vi-table-editor>
  </vi-drawer> -->
  <!-- <div style="width: 400px; height: 400px; overflow: hidden; position: relative;">
    <vi-drawer v-model="open" teleport diretction="top">
      <vi-table-editor style="width: 100%"></vi-table-editor>
    </vi-drawer>
  </div> -->
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, ComponentInternalInstance, reactive, watch } from 'vue'
import { ViToast, ViMessage } from '../packages/index'

type ViDialogType = {
  open: (time?: number) => void,
  close: (time?: number) => void
}

interface scrollType {
    scrollTo: (x: number, y: number) => void
    finish: boolean
}

interface VirtualScrollType {
    scrollTo: (x: number, y: number) => void
}

interface ViInputType {
  toClear: () => void,
  toFocus: () => void,
  toBlur: () => void
}

const searchInfo = ref()
const optionList: any[] = reactive([])

function handleSearch (key: string, { finish }: any) {
  console.log(key)
  setTimeout(() => {
    optionList[0] = key
    finish.value = true
  }, 500)
}

export default defineComponent({
  name: 'App',
  components: {
  },
  setup () {
    const date = reactive({
      year: undefined,
      month: undefined,
      date: undefined
    })
    const choose = ref(0)
    const res = ref(false)
    const value = ref('')
    const val = ref('')
    const ar = reactive([])
    const o = ref({})
    const open = ref(true)
    const nav = ['吃饭', '睡觉', '长个子', '好']
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const obj = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }, { number: 6 }, { number: 7 }, { number: 8 }, { number: 9 }, { number: 10 }]
    const table = [['销量', '领先销量', '全球销量'], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

    watch(ar, () => {
      console.log(ar)
    })

    function append () {
      ViMessage.append('你好')
    }

    return {
      o,
      val,
      ar,
      value,
      arr,
      open,
      obj,
      res,
      date,
      nav,
      choose,
      table,
      searchInfo,
      optionList,
      handleSearch,
      append
    }
  },
  mounted () {
    // console.log()
    // (this.$refs.child as ViDialogType).open()
    // (this.$refs.scroll as scrollType).finish = true
    // (this.$refs.ipt as ViInputType).toFocus()
  }
})
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}

body {
  // background-color: #0f0b28;
  background-color: #fff;
}

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

// div > * {
//   text-align: center;
//   margin: 10px auto;
// }

// div > span {
//   margin: 0 auto;
// }

div > button {
  margin: 5px;
}

.li {
  width: 100%;
  padding: 5px 0;
  margin: 10px 0;
}

.v-v-v {
  --vi-select-width: 3.6em;
  --vi-dropdown-max-height: 200px;
  --vi-dropdown-width: 10em;
}

.lili {
  width: 100%;
  height: 100px;
  line-height: 50px;
  text-align: center;
}

.okk {
  box-sizing: border-box;
  background-color: #0d1869;
  border: 1px solid #000;
}

.scroll-style {
  --vi-scroll-width: 100px;
  --vi-scroll-height: 300px;
  background-color: #fff;
}

.virtual-scroll {
  --vi-virtual-scroll-height: 400px;
  // --vi-virtual-scroll-max-height: 300px;
}

.select-style {
  --vi-select-width: 100px;
  --vi-select-scroll-width: 100%;
  --vi-select-max-height: 50px;
}

.okkkkk {
  --vi-collapse-overflow: auto;
}
</style>
