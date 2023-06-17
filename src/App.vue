<template>
  <vi-select v-model="searchInfo" name="choose" class="my-select-v2" placeholder="请输入关键字" @search="handleSearch" search>
      <vi-option v-for="item in optionList" :key="item" :value="item">{{ item }}</vi-option>
  </vi-select>
  <vi-input></vi-input>
  <vi-select type="button" disabled>
    <vi-option>1</vi-option>
    <vi-option>1</vi-option>
    <vi-option>1</vi-option>
    <vi-option>1</vi-option>
  </vi-select>
  <vi-select type="plain">
    <vi-option>1</vi-option>
    <vi-option>1</vi-option>
    <vi-option>1</vi-option>
    <vi-option>1</vi-option>
  </vi-select>
  <vi-divider style="margin: 10px 0;"></vi-divider>
  <vi-time-select v-model="o"></vi-time-select>
  <vi-time-select v-model="o" type="button" disabled></vi-time-select>
  <vi-time-select v-model="o" type="plain"></vi-time-select>
  <vi-time-select v-model="o" size="big"></vi-time-select>
  <vi-time-select v-model="o" size="small"></vi-time-select>
  <vi-time-select v-model="o" type="plain" size="big"></vi-time-select>
  <vi-time-select range v-model="o" size="big"></vi-time-select>
  <vi-time-select range v-model="o" size="middle"></vi-time-select>
  <vi-time-select range v-model="o" size="small"></vi-time-select>
  <vi-divider style="margin: 10px 0;"></vi-divider>
  <vi-date-select v-model="o"></vi-date-select>
  <vi-date-select v-model="o" type="button"></vi-date-select>
  <vi-date-select style="--vi-date-select-width: 320px;" v-model="o" type="plain" unit="month" range></vi-date-select>
  <vi-date-select style="--vi-date-select-width: 320px;" v-model="o" time timeUnit="second" unit="year" range></vi-date-select>
  <vi-date-select style="--vi-date-select-width: 320px;" v-model="o" range></vi-date-select>
  <!-- <vi-form>
    <vi-form-item label="姓名">
      <vi-input password show-password>123</vi-input>
    </vi-form-item>
    <vi-form-item label="你觉得呢">
      <vi-input>123</vi-input>
    </vi-form-item>
    <vi-form-item dark label="你觉得呢">
      <ViCheckboxGroup v-model="ar">
        <ViCheckbox value="唱歌" dark></ViCheckbox>
        <ViCheckbox value="跳舞"></ViCheckbox>
        <ViCheckbox value="打豆豆"></ViCheckbox>
        <ViCheckbox value="吃饭" color="purple"></ViCheckbox>
        <ViCheckbox value="睡觉" color="green"></ViCheckbox>
        <ViCheckbox value="划水" color="sgreen"></ViCheckbox>
        <ViCheckbox value="飞翔" color="syellow"></ViCheckbox>
        <ViCheckbox value="这个" color="yellow"></ViCheckbox>
        <ViCheckbox value="唱歌" color="pink"></ViCheckbox>
      </ViCheckboxGroup>
    </vi-form-item>
    <vi-form-item label="你觉得呢">
      <ViSelect class="select-style" filter placeholder="123" size="small" :datas="arr" v-model="value">
        <vi-option value="你看" disabled></vi-option>
      </ViSelect>
      <ViSelect class="select-style" dark type="plain" filter placeholder="123" size="small" :datas="arr" v-model="value"></ViSelect>
    </vi-form-item>
    <vi-form-item label="你觉得呢">
      <ViRadioGroup v-model="value">
      <ViRadio type="button" color="yellow" rid="#127" value="吃饭" name="haha"></ViRadio>
      <ViRadio type="button" color="green" dark rid="#128" value="睡觉" name="haha"></ViRadio>
      <ViRadio type="button" color="purple" dark size="small" rid="#129" value="打豆豆"  name="haha">打豆豆</ViRadio>
      </ViRadioGroup>
    </vi-form-item>
    <vi-form-item label="生日">
      <ViDateSelect v-model="date" timeUnit="hour" time></ViDateSelect>
      <ViDateSelect v-model="date" dark></ViDateSelect>
      <ViDateSelect type="button" v-model="date"></ViDateSelect>
      <ViDateSelect type="button" v-model="date" dark></ViDateSelect>
      <ViDateSelect type="plain" v-model="date"></ViDateSelect>
      <ViDateSelect type="plain" v-model="date" dark></ViDateSelect>
    </vi-form-item>
    <vi-form-item label="生日">
      <vi-switch v-model="open"></vi-switch>
      <ViDateSelect v-model="date" timeUnit="second" time></ViDateSelect>
      <ViDateSelect v-model="date" dark unit="year"></ViDateSelect>
      <ViDateSelect v-model="date" dark unit="month"></ViDateSelect>
    </vi-form-item>
    <vi-form-item label="生日">
      <ViTimeSelect v-model="date"></ViTimeSelect>
      <ViTimeSelect v-model="date" dark></ViTimeSelect>
    </vi-form-item>
  </vi-form> -->

  <!-- <vi-checkbox v-model="ar"></vi-checkbox>
  <vi-checkbox v-model="ar"></vi-checkbox>
  <vi-checkbox v-model="ar"></vi-checkbox>
  <vi-checkbox disabled v-model="ar"></vi-checkbox>
  <vi-checkbox color="pink" mutate v-model="ar"></vi-checkbox>
  <vi-checkbox v-model="ar"></vi-checkbox>
  <vi-checkbox disabled type="button" v-model="ar"></vi-checkbox>
  <vi-checkbox type="button" v-model="ar"></vi-checkbox>
  <vi-checkbox color="pink" mutate type="button" v-model="ar"></vi-checkbox>
  <vi-checkbox type="button" v-model="ar" size="big"></vi-checkbox>
  <vi-checkbox type="button" v-model="ar" size="middle"></vi-checkbox>
  <vi-checkbox type="button" v-model="ar" size="small"></vi-checkbox>
  <vi-checkbox v-model="ar" size="big"></vi-checkbox>
  <vi-checkbox v-model="ar" size="middle"></vi-checkbox>
  <vi-checkbox v-model="ar" size="small" checked name="性别"></vi-checkbox>

  <vi-checkbox-group v-model="ar" name="hao">
    <vi-checkbox value="1" size="small" checked></vi-checkbox>
    <vi-checkbox value="2" size="small" checked></vi-checkbox>
    <vi-checkbox value="3" size="small" checked></vi-checkbox>
    <vi-checkbox value="4" size="small" checked></vi-checkbox>
    <vi-checkbox value="5" size="small" checked></vi-checkbox>
  </vi-checkbox-group>

  <vi-radio value="12" v-model="val" checked></vi-radio>
  <vi-radio disabled></vi-radio>
  <vi-radio disabled type="button"></vi-radio> -->
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, ComponentInternalInstance, reactive } from 'vue'
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
      handleSearch
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
