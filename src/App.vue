<template>
  <vi-dropdown v-model="open">
    <vi-button>点击展开</vi-button>
    <template v-slot:content>
      <vi-cascader
      v-model="ar"
      @pick="look"
      :options="options"
      style="--vi-cascader-width: 200px 400px 100px; --vi-cascader-height: 200px 400px 100px;"/>
    </template>
  </vi-dropdown>
  <vi-button @click="ar.length = 1">点击变换</vi-button>
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

const searchInfo = ref(null)
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
    const value = ref('#fff')
    const val = ref('')
    const ar = reactive([])
    const o = ref({})
    const open = ref(false)
    const data = ref('scs')
    const nav = ['吃饭', '睡觉', '长个子', '好']
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const obj = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }, { number: 6 }, { number: 7 }, { number: 8 }, { number: 9 }, { number: 10 }]
    const table = reactive([['销量', '领先销量11111111111111', '全球销量'], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]])
    const info = reactive([] as string[])
    const id = ref(0)
    const infoTable = reactive({
      pickValue: [0, 1, 2]
    })
    const options = [
      {
        value: 'guide',
        label: 'Guide',
        children: [
          {
            value: 'disciplines',
            label: 'Disciplines',
            children: [
              {
                value: 'consistency',
                label: 'Consistency'
              },
              {
                value: 'feedback',
                label: 'Feedback'
              },
              {
                value: 'efficiency',
                label: 'Efficiency'
              },
              {
                value: 'controllability',
                label: 'Controllability'
              }
            ]
          },
          {
            value: 'navigation',
            label: 'Navigation',
            children: [
              {
                value: 'side nav',
                label: 'Side Navigation'
              },
              {
                value: 'top nav',
                label: 'Top Navigation'
              }
            ]
          }
        ]
      },
      {
        value: 'component',
        label: 'Component',
        children: [
          {
            value: 'basic',
            label: 'Basic',
            children: [
              {
                value: 'layout',
                label: 'Layout'
              },
              {
                value: 'color',
                label: 'Color'
              },
              {
                value: 'typography',
                label: 'Typography'
              },
              {
                value: 'icon',
                label: 'Icon'
              },
              {
                value: 'button',
                label: 'Button'
              }
            ]
          },
          {
            value: 'form',
            label: 'Form',
            children: [
              {
                value: 'radio',
                label: 'Radio'
              },
              {
                value: 'checkbox',
                label: 'Checkbox'
              },
              {
                value: 'input',
                label: 'Input'
              },
              {
                value: 'input-number',
                label: 'InputNumber'
              },
              {
                value: 'select',
                label: 'Select'
              },
              {
                value: 'cascader',
                label: 'Cascader'
              },
              {
                value: 'switch',
                label: 'Switch'
              },
              {
                value: 'slider',
                label: 'Slider'
              },
              {
                value: 'time-picker',
                label: 'TimePicker'
              },
              {
                value: 'date-picker',
                label: 'DatePicker'
              },
              {
                value: 'datetime-picker',
                label: 'DateTimePicker'
              },
              {
                value: 'upload',
                label: 'Upload'
              },
              {
                value: 'rate',
                label: 'Rate'
              },
              {
                value: 'form',
                label: 'Form'
              }
            ]
          },
          {
            value: 'data',
            label: 'Data',
            children: [
              {
                value: 'table',
                label: 'Table'
              },
              {
                value: 'tag',
                label: 'Tag'
              },
              {
                value: 'progress',
                label: 'Progress'
              },
              {
                value: 'tree',
                label: 'Tree'
              },
              {
                value: 'pagination',
                label: 'Pagination'
              },
              {
                value: 'badge',
                label: 'Badge'
              }
            ]
          },
          {
            value: 'notice',
            label: 'Notice',
            children: [
              {
                value: 'alert',
                label: 'Alert'
              },
              {
                value: 'loading',
                label: 'Loading'
              },
              {
                value: 'message',
                label: 'Message'
              },
              {
                value: 'message-box',
                label: 'MessageBox'
              },
              {
                value: 'notification',
                label: 'Notification'
              }
            ]
          },
          {
            value: 'navigation',
            label: 'Navigation',
            children: [
              {
                value: 'menu',
                label: 'Menu'
              },
              {
                value: 'tabs',
                label: 'Tabs'
              },
              {
                value: 'breadcrumb',
                label: 'Breadcrumb'
              },
              {
                value: 'dropdown',
                label: 'Dropdown'
              },
              {
                value: 'steps',
                label: 'Steps'
              }
            ]
          },
          {
            value: 'others',
            label: 'Others',
            children: [
              {
                value: 'dialog',
                label: 'Dialog'
              },
              {
                value: 'tooltip',
                label: 'Tooltip'
              },
              {
                value: 'popover',
                label: 'Popover'
              },
              {
                value: 'card',
                label: 'Card'
              },
              {
                value: 'carousel',
                label: 'Carousel'
              },
              {
                value: 'collapse',
                label: 'Collapse'
              }
            ]
          }
        ]
      },
      {
        value: 'resource',
        label: 'Resource',
        children: [
          {
            value: 'axure',
            label: 'Axure Components'
          },
          {
            value: 'sketch',
            label: 'Sketch Templates'
          },
          {
            value: 'docs',
            label: 'Design Documentation'
          }
        ]
      }
    ]

    function changePickValue () {
      infoTable.pickValue = [2, 5, 6]
    }

    function handleAddInfo () {
      info.push('xinde')
    }

    watch(id, () => {
      console.log(id.value)
    })

    watch(ar, () => {
      console.log(ar)
    })

    function append () {
      ViMessage.append('你好')
    }

    function look (...args: any[]) {
      console.log(...args)
      // const map = new Map()
      // map.set('nickname', '此账号不存在')
      // args[2].getSubmitFeedback(map)
    }

    function handleDelete (val: any) {
      alert(val)
    }

    return {
      data,
      id,
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
      append,
      look,
      handleAddInfo,
      info,
      handleDelete,
      infoTable,
      changePickValue,
      options
    }
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
