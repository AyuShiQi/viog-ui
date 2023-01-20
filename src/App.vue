<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div id="div">
    <ViButton>
      <ViIcon/>
      点击进入
    </ViButton>
    <ViButton color="pink" small @click="hello">点击进入</ViButton>
    <ViButton color="red">点击进入</ViButton>
    <ViButton color="blue">点击进入</ViButton>
    <ViButton color="yellow">点击进入</ViButton>
    <ViButton color="purple">点击进入</ViButton>
    <ViButton color="green">点击进入</ViButton>
  </div>
  <div id="div">
    <ViButton color="sgrey">点击进入</ViButton>
    <ViButton color="spink" disabled>点击进入</ViButton>
    <ViButton color="sred">点击进入</ViButton>
    <ViButton color="sblue">点击进入</ViButton>
    <ViButton color="syellow">点击进入</ViButton>
    <ViButton color="spurple">点击进入</ViButton>
    <ViButton color="sgreen">点击进入</ViButton>
  </div>
  <div id="div">
    <ViButton type="plain" small>点击进入</ViButton>
    <ViButton color="pink" disabled type="plain">点击进入</ViButton>
    <ViButton color="red" type="plain">点击进入</ViButton>
    <ViButton color="blue" type="plain">点击进入</ViButton>
    <ViButton color="yellow" type="plain">点击进入</ViButton>
    <ViButton color="purple" type="plain">点击进入</ViButton>
    <ViButton color="green" type="plain">点击进入</ViButton>
  </div>
  <div id="div">
    <ViButton color="sgrey" type="plain">点击进入</ViButton>
    <ViButton color="spink" type="plain">点击进入</ViButton>
    <ViButton color="sred" type="plain">点击进入</ViButton>
    <ViButton color="sblue" type="plain">点击进入</ViButton>
    <ViButton color="syellow" type="plain">点击进入</ViButton>
    <ViButton color="spurple" type="plain">点击进入</ViButton>
    <ViButton color="sgreen" type="plain">点击进入</ViButton>
  </div>
  <div id="div">
    <ViButton type="transparent" small>点击进入</ViButton>
    <ViButton color="pink" type="transparent">点击进入</ViButton>
    <ViButton color="red" type="transparent">点击进入</ViButton>
    <ViButton color="blue" type="transparent" >点击进入</ViButton>
    <ViButton color="yellow" type="transparent">点击进入</ViButton>
    <ViButton color="purple" type="transparent">点击进入</ViButton>
    <ViButton color="green" type="transparent">点击进入</ViButton>
  </div>
  <div id="div">
    <ViButton color="sgrey" type="transparent">点击进入</ViButton>
    <ViButton color="spink" type="transparent">点击进入</ViButton>
    <ViButton color="sred" type="transparent">点击进入</ViButton>
    <ViButton color="sblue" type="transparent">点击进入</ViButton>
    <ViButton color="syellow" type="transparent">点击进入</ViButton>
    <ViButton color="spurple" type="transparent">点击进入</ViButton>
    <ViButton color="sgreen" type="transparent">点击进入</ViButton>
  </div>
  <div id="div">
    <ViButton radius="round" small>点击xxxxx</ViButton>
    <ViButton color="pink" radius="round">点击xx</ViButton>
    <ViButton color="red" radius="round">点击xxx</ViButton>
    <ViButton color="blue" radius="round">点击xxx</ViButton>
    <ViButton color="yellow" radius="circle" style="transform: scale(80%)">
      <ViIcon type="renzheng" size="big"/>
    </ViButton>
    <ViButton color="purple" radius="round">点击xxx</ViButton>
    <ViButton color="green" radius="round">点击xxx</ViButton>
  </div>
  <div id="div">
    <ViButton color="sgrey" radius="circle" >
      <ViIcon type="renzheng"/>
    </ViButton>
    <ViButton color="spink" radius="circle">点击</ViButton>
    <ViButton color="sred" radius="circle">点击</ViButton>
    <ViButton color="sblue" radius="circle">点击</ViButton>
    <ViButton color="syellow" radius="circle">
      <ViIcon type="renzheng"/>
    </ViButton>
    <ViButton color="spurple" radius="circle">点击</ViButton>
    <ViButton color="sgreen" radius="circle">点击</ViButton>
  </div>
  <div id="div">
    <ViButton type="plain" radius="circle">点击</ViButton>
    <ViButton color="pink" type="plain" radius="circle">点击</ViButton>
    <ViButton color="red" type="plain" radius="circle">点击</ViButton>
    <ViButton color="blue" type="plain" radius="circle">点击</ViButton>
    <ViButton color="yellow" type="plain" radius="circle">
      <ViIcon type="renzheng"/>
    </ViButton>
    <ViButton color="purple" type="plain" radius="circle">点击</ViButton>
    <ViButton color="green" type="plain" radius="circle">点击</ViButton>
  </div>
  <div id="div">
    <ViButton color="sgrey" type="plain" radius="circle">点击</ViButton>
    <ViButton color="spink" type="plain" radius="circle">点击</ViButton>
    <ViButton color="sred" type="plain" radius="circle">点击</ViButton>
    <ViButton color="sblue" type="plain" radius="circle">点击</ViButton>
    <ViButton color="syellow" type="plain" radius="circle">
      <ViIcon type="renzheng"/>
    </ViButton>
    <ViButton color="spurple" type="plain" radius="circle">点击</ViButton>
    <ViButton color="sgreen" type="plain" radius="circle">点击</ViButton>
  </div>
  <div id="div">
    <ViButton type="transparent" radius="circle">点击</ViButton>
    <ViButton color="pink" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="red" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="blue" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="yellow" type="transparent" radius="circle">
      <ViIcon type="renzheng"/>
    </ViButton>
    <ViButton color="purple" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="green" type="transparent" radius="circle">点击</ViButton>
  </div>
  <div id="div">
    <ViButton color="sgrey" type="transparent" radius="circle">
      <ViIcon type="renzheng"/>
    </ViButton>
    <ViButton color="spink" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="sred" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="sblue" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="syellow" type="transparent" radius="circle">
      <ViIcon type="renzheng"/>
    </ViButton>
    <ViButton color="spurple" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="sgreen" type="transparent" radius="circle">点击</ViButton>
  </div>
  <div id="div">
    <ViButton disabled>点击进入</ViButton>
    <ViButton color="pink" disabled>
      点击进入
    </ViButton>
    <ViButton color="red" disabled>点击进入</ViButton>
    <ViButton color="blue" disabled>点击进入</ViButton>
    <ViButton color="yellow" disabled>点击进入</ViButton>
    <ViButton color="purple" disabled>点击进入</ViButton>
    <ViButton color="green" disabled>点击进入</ViButton>
  </div>
  <div id="div">
    <ViButton color="sgrey" disabled>点击进入</ViButton>
    <ViButton color="spink" disabled>点击进入</ViButton>
    <ViButton color="sred" disabled>点击进入</ViButton>
    <ViButton color="sblue" disabled>点击进入</ViButton>
    <ViButton color="syellow" disabled>点击进入</ViButton>
    <ViButton color="spurple" disabled>点击进入</ViButton>
    <ViButton color="sgreen" disabled>点击进入</ViButton>
  </div>
  <div id="div">
    <ViLoading/>
  </div>
  <ViDialog ref="child"
  maskFilter
  mask
  filter
  background="black"
  color="purple"
  shadow
  title="提示"
  @sure="hello">
    是否支付？
  </ViDialog>
  <ViScroll>
    <div class="li" v-for="item in arr" :key="item">{{item}}</div>
  </ViScroll>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

type ViDialogType = {
  open: (time?: number) => void,
  close: (time?: number) => void
}

export default defineComponent({
  name: 'App',
  components: {
  },
  setup () {
    const open = ref(true)
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    function hello () {
      alert('hello')
      open.value = false
    }

    return {
      hello,
      arr,
      open
    }
  },
  mounted () {
    // console.log()
    // (this.$refs.child as ViDialogType).open()
  }
})
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}

body {
  background-color: #0f0b28;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#div button {
  margin: 5px;
}

.li {
  width: 100%;
  padding: 5px 0;
  margin: 5px 0;
  background-color: pink;
}
</style>
