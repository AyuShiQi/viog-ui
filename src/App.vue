<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <vi-row justify="center">
    <ViButton @click="openDialog">
      <ViIcon/>打开对话框</ViButton>
    <ViButton color="pink" @click="opent">打开toast</ViButton>
    <ViButton color="red" @click="openf">点击进入</ViButton>
    <ViButton color="blue">点击进入</ViButton>
    <ViButton color="yellow">点击进入</ViButton>
    <ViButton color="purple">点击进入</ViButton>
    <ViButton color="green">点击进入</ViButton>
    <ViButton color="dark">点击进入</ViButton>
  </vi-row>
  <vi-row justify="center">
    <ViButton mutate>点击进入</ViButton>
    <ViButton color="pink" mutate>点击进入</ViButton>
    <ViButton color="red" mutate>点击进入</ViButton>
    <ViButton color="blue" mutate>点击进入</ViButton>
    <ViButton color="yellow" mutate>点击进入</ViButton>
    <ViButton color="purple" mutate>点击进入</ViButton>
    <ViButton color="green" mutate>点击进入</ViButton>
    <ViButton color="dark" mutate>点击进入</ViButton>
  </vi-row>
  <vi-row justify="center">
    <ViButton type="plain">点击进入</ViButton>
    <ViButton color="pink" type="plain">点击进入</ViButton>
    <ViButton color="red" type="plain">点击进入</ViButton>
    <ViButton color="blue" type="plain">点击进入</ViButton>
    <ViButton color="yellow" type="plain">点击进入</ViButton>
    <ViButton color="purple" type="plain">点击进入</ViButton>
    <ViButton color="green" type="plain">点击进入</ViButton>
    <ViButton color="dark" type="plain">点击进入</ViButton>

  </vi-row>
  <vi-row justify="center">
    <ViButton size="big" type="plain" mutate>点击进入</ViButton>
    <ViButton size="big" color="pink" type="plain" mutate>点击进入</ViButton>
    <ViButton size="big" color="red" type="plain" mutate>点击进入</ViButton>
    <ViButton size="big" color="blue" type="plain" mutate>点击进入</ViButton>
    <ViButton size="big" color="yellow" type="plain" mutate>点击进入</ViButton>
    <ViButton size="big" color="purple" type="plain" mutate>点击进入</ViButton>
    <ViButton size="big" color="green" type="plain" mutate>点击进入</ViButton>
    <ViButton size="big" color="dark" type="plain" mutate>点击进入</ViButton>
  </vi-row>
  <vi-row justify="center">
    <ViButton type="transparent" small>点击进入</ViButton>
    <ViButton color="pink" type="transparent">点击进入</ViButton>
    <ViButton color="red" type="transparent">点击进入</ViButton>
    <ViButton color="blue" type="transparent" >点击进入</ViButton>
    <ViButton color="yellow" type="transparent">点击进入</ViButton>
    <ViButton color="purple" type="transparent">点击进入</ViButton>
    <ViButton color="green" type="transparent">点击进入</ViButton>
    <ViButton color="dark" type="transparent">点击进入</ViButton>
  </vi-row>
  <vi-row justify="center">
    <ViButton type="transparent" mutate>点击进入</ViButton>
    <ViButton color="pink" type="transparent" mutate>点击进入</ViButton>
    <ViButton color="red" type="transparent" mutate>点击进入</ViButton>
    <ViButton color="blue" type="transparent" mutate>点击进入</ViButton>
    <ViButton color="yellow" type="transparent" mutate>点击进入</ViButton>
    <ViButton color="purple" type="transparent" mutate>点击进入</ViButton>
    <ViButton color="green" type="transparent" mutate>点击进入</ViButton>
    <ViButton color="dark" type="transparent" mutate>点击进入</ViButton>
  </vi-row>
    <vi-row justify="center">
    <ViButton @click="openDialog">
      <ViIcon/>打开对话框</ViButton>
    <ViButton color="pink" small @click="hello">点击进入</ViButton>
    <ViButton color="red">点击进入</ViButton>
    <ViButton color="blue">点击进入</ViButton>
    <ViButton color="yellow">点击进入</ViButton>
    <ViButton color="purple">点击进入</ViButton>
    <ViButton color="green">点击进入</ViButton>
    <ViButton color="dark">点击进入</ViButton>
  </vi-row>
  <vi-row justify="center">
    <ViButton disabled mutate>点击进入</ViButton>
    <ViButton disabled color="pink" mutate>点击进入</ViButton>
    <ViButton disabled color="red" mutate>点击进入</ViButton>
    <ViButton disabled color="blue" mutate>点击进入</ViButton>
    <ViButton disabled color="yellow" mutate>点击进入</ViButton>
    <ViButton disabled color="purple" mutate>点击进入</ViButton>
    <ViButton disabled color="green" mutate>点击进入</ViButton>
    <ViButton disabled color="dark" mutate>点击进入</ViButton>
  </vi-row>
  <vi-row justify="center">
    <ViButton disabled type="plain" small>点击进入</ViButton>
    <ViButton disabled color="pink" type="plain">点击进入</ViButton>
    <ViButton disabled color="red" type="plain">点击进入</ViButton>
    <ViButton disabled color="blue" type="plain">点击进入</ViButton>
    <ViButton disabled color="yellow" type="plain">点击进入</ViButton>
    <ViButton disabled color="purple" type="plain">点击进入</ViButton>
    <ViButton disabled color="green" type="plain">点击进入</ViButton>
    <ViButton disabled color="dark" type="plain">点击进入</ViButton>

  </vi-row>
  <vi-row justify="center">
    <ViButton disabled type="plain" mutate>点击进入</ViButton>
    <ViButton disabled color="pink" type="plain" mutate>点击进入</ViButton>
    <ViButton disabled color="red" type="plain" mutate>点击进入</ViButton>
    <ViButton disabled color="blue" type="plain" mutate>点击进入</ViButton>
    <ViButton disabled color="yellow" type="plain" mutate>点击进入</ViButton>
    <ViButton disabled color="purple" type="plain" mutate>点击进入</ViButton>
    <ViButton disabled color="green" type="plain" mutate>点击进入</ViButton>
    <ViButton disabled color="dark" type="plain" mutate>点击进入</ViButton>
  </vi-row>
  <vi-row justify="center">
    <ViButton disabled type="transparent" small>点击进入</ViButton>
    <ViButton disabled color="pink" type="transparent">点击进入</ViButton>
    <ViButton disabled color="red" type="transparent">点击进入</ViButton>
    <ViButton disabled color="blue" type="transparent" >点击进入</ViButton>
    <ViButton disabled color="yellow" type="transparent">点击进入</ViButton>
    <ViButton disabled color="purple" type="transparent">点击进入</ViButton>
    <ViButton disabled color="green" type="transparent">点击进入</ViButton>
    <ViButton disabled color="dark" type="transparent">点击进入</ViButton>
  </vi-row>
  <vi-row justify="center">
    <ViButton disabled type="transparent" mutate>点击进入</ViButton>
    <ViButton disabled color="pink" type="transparent" mutate>点击进入</ViButton>
    <ViButton disabled color="red" type="transparent" mutate>点击进入</ViButton>
    <ViButton disabled color="blue" type="transparent" mutate>点击进入</ViButton>
    <ViButton disabled color="yellow" type="transparent" mutate>点击进入</ViButton>
    <ViButton disabled color="purple" type="transparent" mutate>点击进入</ViButton>
    <ViButton disabled color="green" type="transparent" mutate>点击进入</ViButton>
    <ViButton disabled color="dark" type="transparent" mutate>点击进入</ViButton>
  </vi-row>
  <vi-row justify="center">
    <ViButton radius="round">点击</ViButton>
    <ViButton color="pink" radius="round">点击</ViButton>
    <ViButton color="red" radius="round">点击</ViButton>
    <ViButton color="blue" radius="round">点击</ViButton>
    <ViButton color="yellow" radius="circle" style="transform: scale(80%)">
      <ViIcon type="renzheng" size="big"/>
    </ViButton>
    <ViButton color="purple" radius="round">点击xxx</ViButton>
    <ViButton color="green" radius="round">点击xxx</ViButton>
  </vi-row>
  <vi-row justify="center">
    <ViButton radius="circle" mutate>
      <ViIcon type="renzheng"/>
    </ViButton>
    <ViButton color="pink" radius="circle" mutate>点击</ViButton>
    <ViButton color="red" radius="circle" mutate>点击</ViButton>
    <ViButton color="blue" radius="circle" mutate>点击</ViButton>
    <ViButton color="yellow" radius="circle" mutate>
      <ViIcon type="renzheng"/>
    </ViButton>
    <ViButton color="purple" radius="circle" mutate>点击</ViButton>
    <ViButton color="green" radius="circle" mutate>点击</ViButton>
  </vi-row>
  <vi-row justify="center">
    <ViButton type="plain" radius="circle">点击</ViButton>
    <ViButton color="pink" type="plain" radius="circle">点击</ViButton>
    <ViButton color="red" type="plain" radius="circle">点击</ViButton>
    <ViButton color="blue" type="plain" radius="circle">点击</ViButton>
    <ViButton color="yellow" type="plain" radius="circle">
      <ViIcon type="renzheng"/>
    </ViButton>
    <ViButton color="purple" type="plain" radius="circle">点击</ViButton>
    <ViButton color="green" type="plain" radius="circle">点击</ViButton>
  </vi-row>
  <vi-row justify="center">
    <ViButton type="plain" radius="circle">点击</ViButton>
    <ViButton color="pink" type="plain" radius="circle">点击</ViButton>
    <ViButton color="red" type="plain" radius="circle">点击</ViButton>
    <ViButton color="blue" type="plain" radius="circle">点击</ViButton>
    <ViButton color="yellow" type="plain" radius="circle">
      <ViIcon type="renzheng"/>
    </ViButton>
    <ViButton color="purple" type="plain" radius="circle">点击</ViButton>
    <ViButton color="green" type="plain" radius="circle">点击</ViButton>
  </vi-row>
  <vi-row justify="center">
    <ViButton type="transparent" radius="circle">点击</ViButton>
    <ViButton color="pink" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="red" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="blue" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="yellow" type="transparent" radius="circle">
      <ViIcon type="renzheng"/>
    </ViButton>
    <ViButton color="purple" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="green" type="transparent" radius="circle">点击</ViButton>
  </vi-row>
  <vi-row justify="center">
    <ViButton type="transparent" radius="circle">
      <ViIcon type="renzheng"/>
    </ViButton>
    <ViButton color="pink" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="red" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="blue" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="yellow" type="transparent" radius="circle">
      <ViIcon type="renzheng"/>
    </ViButton>
    <ViButton color="purple" type="transparent" radius="circle">点击</ViButton>
    <ViButton color="green" type="transparent" radius="circle">点击</ViButton>
  </vi-row>

    <!-- <vi-row justify="center">
      <ViLoading type="diamond"/>
    </vi-row>
    <vi-row justify="center">
      <ViLoading type="diamond" color="purple"/>
    </vi-row>
     <ViLoading type="diamond" color="white"/> -->
  <!-- <vi-row justify="center">
    <ViLoading type="ball"/><br/>
    <ViLoading type="ball" color="purple"/><br/>
    <ViLoading type="ball" color="golden"/><br/>
    <ViLoading type="ball" color="white"/><br/>
    <ViLoading type="ball" color="green"/><br/>
    <ViLoading type="ball" color="blue"/><br>
    <ViLoading type="ball" color="red"/><br/>
    <ViLoading type="ball" color="pink"/>
  </vi-row>
  <vi-row justify="center">
    <ViLoading type="circle"/>
    <ViLoading type="circle" color="purple"/>
    <ViLoading type="circle" color="golden"/>
    <ViLoading type="circle" color="white"/>
    <ViLoading type="circle" color="green"/>
    <ViLoading type="circle" color="blue"/>
    <ViLoading type="circle" color="red"/>
    <ViLoading type="circle" color="pink"/>
  </vi-row>
  <vi-row justify="center">
    <ViLoading type="disk"/>
    <ViLoading type="disk" color="purple"/>
    <ViLoading type="disk" color="golden"/>
    <ViLoading type="disk" color="white"/>
    <ViLoading type="disk" color="green"/>
    <ViLoading type="disk" color="blue"/>
    <ViLoading type="disk" color="red"/>
    <ViLoading type="disk" color="pink"/>
  </vi-row>
  <vi-row justify="center">
    <ViLoading type="star"/>
    <ViLoading type="star" color="purple"/>
    <ViLoading type="star" color="golden"/>
    <ViLoading type="star" color="white"/>
    <ViLoading type="star" color="green"/>
    <ViLoading type="star" color="blue"/>
    <ViLoading type="star" color="red"/>
    <ViLoading type="star" color="pink"/>
  </vi-row> -->

  <!-- <ViDialog ref="child"
  v-model="open"
  maskBlur
  mask
  background="black"
  color="purple"
  title="提示"
  @sure="hello">
    <vi-row>
      是否支付？
      <ViSwitch dark size="small" filter></ViSwitch>
    </vi-row>
  </ViDialog> -->

  <!-- <ViScroll :lazy="pf" ref="scroll" smooth wait="ball" waitText="加载中" class="scroll-style">
    <vi-row class="li" v-for="item in arr" :key="item">{{item}}</vi-row>
  </ViScroll>
  <ViScroll :lazy="pf" ref="scroll" smooth wait="ball" waitText="加载中">
    <vi-row class="li" v-for="item in arr" :key="item">{{item}}</vi-row>
  </ViScroll> -->
  <!-- <ViVirtualScroll :itemHeight="100" :datas="obj" ref="vscroll" class="virtual-scroll">
    <template v-slot="vi">
      <vi-row class="lili">
        {{vi.data.number}}
      </vi-row>
    </template>
  </ViVirtualScroll> -->

  <vi-row id="div" style="padding: 10px 0;">
    <ViInput v-model="value" number showClear width="400px" :maxLength="10" @change="ok" placeholder="账号"></ViInput><br/>
    <ViInput v-model="value" dark password showPassword showClear>密码</ViInput><br/>
    <ViInput round color="pink" password showPassword showClear>密码</ViInput><br/>
    <ViInput color="pink" dark>
      <template v-slot:prefix>
        placeholder
      </template>
    </ViInput><br>
    <ViInput color="purple">placeholder</ViInput><br/>
    <ViInput color="purple" dark>placeholder</ViInput><br>
    <ViInput color="golden">placeholder</ViInput><br/>
    <ViInput color="golden" dark>placeholder</ViInput><br>
    <ViInput color="green">placeholder</ViInput><br/>
    <ViInput color="green" dark>placeholder</ViInput><br>
    <ViInput disabled color="yellow">placeholder</ViInput><br/>
    <ViInput color="yellow" dark>placeholder</ViInput><br>
    <ViInput color="blue">placeholder</ViInput><br/>
    <ViInput color="blue" dark>placeholder</ViInput><br>
    <ViInput color="red">placeholder</ViInput><br/>
    <ViInput :suffix="arr" color="red" dark password :prefix="arr">placeholder</ViInput><br>
  </vi-row>
    <vi-row id="div" style="padding: 10px 0;">
    <ViInput round :suffix="arr" type="plain" v-model="value" number showClear :maxlength="10" @change="ok">账号</ViInput><br/>
    <ViInput type="plain" v-model="value" dark password showPassword showClear>密码</ViInput><br/>
    <ViInput type="plain" round color="pink" password showPassword showClear>密码</ViInput><br/>
    <ViInput type="plain" color="purple">placeholder</ViInput><br/>
    <ViInput type="plain" color="purple" dark>placeholder</ViInput><br>
    <ViInput type="plain" color="pink" dark>placeholder</ViInput><br>
    <ViInput type="plain" color="golden">placeholder</ViInput><br/>
    <ViInput type="plain" color="golden" dark>placeholder</ViInput><br>
    <ViInput type="plain" color="green">placeholder</ViInput><br/>
    <ViInput type="plain" color="green" dark>placeholder</ViInput><br>
    <ViInput type="plain" disabled color="yellow">placeholder</ViInput><br/>
    <ViInput type="plain" color="yellow" dark>placeholder</ViInput><br>
    <ViInput type="plain" color="blue">placeholder</ViInput><br/>
    <ViInput type="plain" color="blue" dark>placeholder</ViInput><br>
    <ViInput type="plain" color="red">placeholder</ViInput><br/>
    <ViInput disabled :suffix="arr" type="plain" color="red" dark password :prefix="arr">placeholder</ViInput><br>
  </vi-row>
  <vi-row id="div" style="backgroundColor: #fff; padding: 10px 0;">
    <ViInput disabled type="plain">placeholder</ViInput><br/>
    <ViInput type="plain" dark>placeholder</ViInput><br>
    <ViInput type="plain" color="pink">placeholder</ViInput><br/>
    <ViInput type="plain" color="pink" dark>placeholder</ViInput><br>
    <ViInput type="plain" color="golden">placeholder</ViInput><br/>
    <ViInput type="plain" color="golden" dark>placeholder</ViInput><br>
    <ViInput type="plain" color="green">placeholder</ViInput><br/>
    <ViInput type="plain" color="green" dark>placeholder</ViInput><br>
    <ViInput type="plain" color="yellow" right>placeholder</ViInput><br/>
    <ViInput type="plain" color="yellow" dark right>placeholder</ViInput><br>
    <ViInput type="plain" color="blue" warn>placeholder</ViInput><br/>
    <ViInput type="plain" color="blue" dark warn>placeholder</ViInput><br>
    <ViInput type="plain" color="red" error>placeholder</ViInput><br/>
    <ViInput type="plain" ref="ipt" color="red" dark error>placeholder</ViInput><br>
  </vi-row>
    <vi-row id="div" style="backgroundColor: #fff; padding: 10px 0;">
    <ViInput :preffix="arr" :suffix="arr" round type="button">placeholder</ViInput><br/>
    <ViInput disabled type="button" dark placeholder="ysysysy"></ViInput><br>
    <ViInput type="button" color="pink">placeholder</ViInput><br/>
    <ViInput type="button" color="pink" dark>placeholder</ViInput><br>
    <ViInput type="button" color="golden">placeholder</ViInput><br/>
    <ViInput type="button" color="golden" dark>placeholder</ViInput><br>
    <ViInput type="button" color="green">placeholder</ViInput><br/>
    <ViInput type="button" color="green" dark>placeholder</ViInput><br>
    <ViInput type="button" color="yellow" right>placeholder</ViInput><br/>
    <ViInput type="button" color="yellow" dark right>placeholder</ViInput><br>
    <ViInput type="button" color="blue" warn>placeholder</ViInput><br/>
    <ViInput type="button" color="blue" dark warn>placeholder</ViInput><br>
    <ViInput type="button" color="red" error>placeholder</ViInput><br/>
    <ViInput type="button" ref="ipt" color="red" dark error>placeholder</ViInput><br>
  </vi-row>

  <vi-row id="div" style="padding: 10px 0;">
    <ViSwitch v-model="res" disabled></ViSwitch><br><br>
    <ViSwitch v-model="res" size="small" dark></ViSwitch><br><br>
    <ViSwitch v-model="res" size="big" filter></ViSwitch><br><br>
    <ViSwitch dark filter></ViSwitch>
  </vi-row>
  <vi-row id="div" style="backgroundColor: #fff; padding: 10px 0;">
    <ViSwitch></ViSwitch><br><br>
    <ViSwitch dark></ViSwitch><br><br>
    <ViSwitch filter></ViSwitch><br><br>
    <ViSwitch dark filter leftColor="#0f0b286c"></ViSwitch>
  </vi-row>

  <vi-row id="div" style="padding: 10px 0;">
    <ViRadio disabled color="yellow" @change="change" rid="#123" value="吃饭" name="haha" v-model="value"></ViRadio>
    <ViRadio color="blue" dark rid="#124" value="睡觉" name="haha" v-model="value"></ViRadio>
    <ViRadio color="red" dark size="small" rid="#125" value="打豆豆"  name="haha" v-model="value">打豆豆</ViRadio>
    <ViRadio color="pink" size="big" rid="#126" value="飞翔" name="haha" v-model="value">飞翔</ViRadio>
  </vi-row>
  <vi-row id="div" style="backgroundColor: #fff; padding: 10px 0;">
    <ViRadio color="green" rid="#127" value="吃饭" name="haha" v-model="value"></ViRadio>
    <ViRadio color="purple" dark rid="#128" value="睡觉" name="haha" v-model="value"></ViRadio>
    <ViRadio dark size="small" rid="#129" value="打豆豆"  name="haha" v-model="value">打豆豆</ViRadio>
    <ViRadio size="big" rid="#130" value="飞翔" name="haha" v-model="value">飞翔</ViRadio>
  </vi-row>
    <vi-row id="div" style="padding: 10px 0;">
    <ViRadio type="button" color="yellow" @change="change" rid="#123" value="吃饭" name="haha" v-model="value"></ViRadio>
    <ViRadio color="blue" type="button" dark rid="#124" value="睡觉" name="haha" v-model="value"></ViRadio>
    <ViRadio type="button" color="red" dark size="small" rid="#125" value="打豆豆"  name="haha" v-model="value">打豆豆</ViRadio>
    <ViRadio type="button" color="pink" size="big" rid="#126" value="飞翔" name="haha" v-model="value">飞翔</ViRadio>
  </vi-row>
  <vi-row id="div" style="backgroundColor: #fff; padding: 10px 0;">
    <ViRadio type="button" color="yellow" rid="#127" value="吃饭" name="haha" v-model="value"></ViRadio>
    <ViRadio type="button" color="green" dark rid="#128" value="睡觉" name="haha" v-model="value"></ViRadio>
    <ViRadio type="button" color="purple" dark size="small" rid="#129" value="打豆豆"  name="haha" v-model="value">打豆豆</ViRadio>
    <ViRadio type="button" size="big" rid="#130" value="飞翔" name="haha" v-model="value">飞翔</ViRadio>
  </vi-row>
  <vi-row id="div" style="backgroundColor: #fff; padding: 10px 0;">
    <ViRadioGroup v-model="value">
      <ViRadio disabled type="button" color="yellow" rid="#127" value="吃饭" name="haha"></ViRadio>
      <ViRadio type="button" color="green" dark rid="#128" value="睡觉" name="haha"></ViRadio>
      <ViRadio type="button" color="purple" dark size="small" rid="#129" value="打豆豆"  name="haha">打豆豆</ViRadio>
      <ViRadio type="button" size="big" rid="#130" value="飞翔" name="haha">飞翔</ViRadio>
    </ViRadioGroup>
  </vi-row>

  <vi-row height="200px">
    <vi-row>
      <ViCheckbox disabled size="small" @change="change" v-model="ar" value="唱歌" dark></ViCheckbox>
      <ViCheckbox size="small" v-model="ar" value="跳舞"></ViCheckbox>
      <ViCheckbox size="small" v-model="ar" value="打豆豆"></ViCheckbox>
      <ViCheckbox size="small" v-model="ar" value="吃饭" color="purple"></ViCheckbox>
      <ViCheckbox size="small" v-model="ar" value="睡觉" color="green"></ViCheckbox>
      <ViCheckbox size="small" v-model="ar" value="划水" color="green"></ViCheckbox>
      <ViCheckbox size="small" v-model="ar" value="飞翔" color="yellow"></ViCheckbox>
      <ViCheckbox size="small" v-model="ar" value="这个" color="yellow"></ViCheckbox>
      <ViCheckbox size="small" v-model="ar" value="唱歌" color="pink"></ViCheckbox>
      <ViCheckbox size="small" v-model="ar" value="妈妈" color="pink" type="button"></ViCheckbox>
      <ViCheckbox size="small" v-model="ar" value="米亚" dark color="pink" type="button"></ViCheckbox>
    </vi-row>
    <vi-row>
      <ViCheckbox @change="change" v-model="ar" value="唱歌" dark></ViCheckbox>
      <ViCheckbox v-model="ar" value="跳舞"></ViCheckbox>
      <ViCheckbox v-model="ar" value="打豆豆"></ViCheckbox>
      <ViCheckbox v-model="ar" value="吃饭" color="purple"></ViCheckbox>
      <ViCheckbox v-model="ar" value="睡觉" color="green"></ViCheckbox>
      <ViCheckbox v-model="ar" value="划水" color="green"></ViCheckbox>
      <ViCheckbox v-model="ar" value="飞翔" color="yellow"></ViCheckbox>
      <ViCheckbox v-model="ar" value="这个" color="yellow"></ViCheckbox>
      <ViCheckbox v-model="ar" value="唱歌" color="pink"></ViCheckbox>
      <ViCheckbox v-model="ar" value="妈妈" color="pink" type="button"></ViCheckbox>
      <ViCheckbox v-model="ar" value="米亚" dark color="pink" type="button"></ViCheckbox>
    </vi-row>
    <vi-row>
      <ViCheckboxGroup v-model="ar">
        <ViCheckbox @change="change" value="唱歌" dark size="big"></ViCheckbox>
        <ViCheckbox value="跳舞" size="big"></ViCheckbox>
        <ViCheckbox value="打豆豆" size="big"></ViCheckbox>
        <ViCheckbox value="吃饭" size="big" color="purple"></ViCheckbox>
        <ViCheckbox value="睡觉" size="big" color="green"></ViCheckbox>
        <ViCheckbox value="划水" size="big" color="green"></ViCheckbox>
        <ViCheckbox value="飞翔" size="big" color="yellow"></ViCheckbox>
        <ViCheckbox value="这个" size="big" color="yellow"></ViCheckbox>
        <ViCheckbox value="唱歌" size="big" color="pink"></ViCheckbox>
        <ViCheckbox value="妈妈" size="big" color="pink" type="button"></ViCheckbox>
        <ViCheckbox disabled mutate value="米亚" dark size="big" color="pink" type="button"></ViCheckbox>
      </ViCheckboxGroup>
    </vi-row>
  </vi-row>

  <!-- <vi-grid :row="2" :col="11" gap="10px" height="500px">
    <vi-col :row="1" :col="2" class="okk">1</vi-col>
    <vi-col :row="1" :col="3" class="okk">2</vi-col>
    <vi-col :row="1" :col="2" class="okk">3</vi-col>
    <vi-col :row="1" :col="3" class="okk">4</vi-col>
    <vi-col :row="1" :col="2" class="okk">5</vi-col>
    <vi-col :row="1" :col="4" class="okk">6</vi-col>
    <vi-col :row="1" :col="2" class="okk">7</vi-col>
    <vi-col :row="1" :col="4" class="okk">8</vi-col>
    <vi-col :row="1" :col="2" class="okk">9</vi-col>
  </vi-grid> -->

  <vi-row justify="center">
    <ViSelect filter dark size="big" :datas="arr" v-model="value"></ViSelect>
  </vi-row>
  <vi-row justify="center">
    <ViSelect filter dark size="big" :datas="arr" multi v-model="ar"></ViSelect>
  </vi-row>
  <vi-row justify="center">
    <ViSelect type="button" filter :datas="arr" multi v-model="ar"></ViSelect>
  </vi-row>
  <vi-row justify="center">
    <ViSelect filter placeholder="123" size="small" :datas="arr" v-model="value"></ViSelect>
  </vi-row>
  <vi-row justify="center">
    <ViSelect filter placeholder="123" size="small" :datas="arr" v-model="value" disabled></ViSelect>
  </vi-row>
  <div style="background-color: #fff">
    <vi-row justify="center">
    <ViSelect filter dark size="big" :datas="arr" v-model="value"></ViSelect>
  </vi-row>
  <vi-row justify="center">
    <ViSelect filter dark size="big" :datas="arr" multi v-model="ar"></ViSelect>
  </vi-row>
  <vi-row justify="center">
    <ViSelect filter :datas="arr" multi v-model="ar"></ViSelect>
  </vi-row>
  <vi-row justify="center">
    <ViSelect filter placeholder="123" size="small" :datas="arr" v-model="value"></ViSelect>
  </vi-row>
  <vi-row justify="center">
    <ViSelect filter placeholder="123" size="small" :datas="arr" v-model="value" disabled></ViSelect>
  </vi-row>
  </div>
  <vi-row justify="center">
    <ViSelect dark :datas="arr" v-model="value"></ViSelect>
    <ViSelect :datas="arr" v-model="value"></ViSelect>
  </vi-row>
  <vi-row justify="center">
    <ViSelect dark type="button" :datas="arr" v-model="value"></ViSelect>
    <ViSelect type="button" :datas="arr" v-model="value"></ViSelect>
  </vi-row>
  <vi-row justify="center">
    <ViSelect dark type="plain" :datas="arr" v-model="value"></ViSelect>
    <ViSelect type="plain" :datas="arr" v-model="value"></ViSelect>
  </vi-row>

  <!-- <vi-input password show-password></vi-input>
  <vi-input width="100%" type="plain" password show-password></vi-input>
  <vi-input type="plain" password show-password size="big"></vi-input>
  <vi-input v-model="value" :maxlength="10" :suffix="arr" type="plain" password show-password show-clear size="small"></vi-input> -->

  <vi-form>
    <vi-form-item label="姓名">
      <vi-input password show-password>123</vi-input>
    </vi-form-item>
    <vi-form-item label="你觉得呢">
      <vi-input>123</vi-input>
    </vi-form-item>
    <vi-form-item dark label="你觉得呢">
      <ViCheckboxGroup v-model="ar">
        <ViCheckbox @change="change" value="唱歌" dark></ViCheckbox>
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
      <ViSelect class="select-style" filter placeholder="123" size="small" :datas="arr" v-model="value"></ViSelect>
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
      <ViDateSelect v-model="date" timeUnit="second" time></ViDateSelect>
      <ViDateSelect v-model="date" dark unit="year"></ViDateSelect>
      <ViDateSelect v-model="date" dark unit="month"></ViDateSelect>
    </vi-form-item>
    <vi-form-item label="生日">
      <ViTimeSelect v-model="date"></ViTimeSelect>
      <ViTimeSelect v-model="date" dark></ViTimeSelect>
    </vi-form-item>
  </vi-form>
  <!-- <vi-message></vi-message> -->
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
    const res = ref(false)
    const value = ref('')
    const ar = reactive([])
    const { proxy } = getCurrentInstance() as ComponentInternalInstance
    const open = ref(true)
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const obj = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }, { number: 6 }, { number: 7 }, { number: 8 }, { number: 9 }, { number: 10 }]

    function hello () {
      alert('hello')
      open.value = false
    }

    function ok () {
      console.log('ok')
    }

    function scr () {
      (proxy?.$refs.scroll as scrollType).scrollTo(0, 140);
      (proxy?.$refs.vscroll as VirtualScrollType).scrollTo(0, 140)
    }

    function pf () {
      return new Promise((resolve) => {
        console.log('pf')
        setTimeout(() => {
          resolve('ok')
        }, 3000)
      })
    }

    function openDialog () {
      (proxy?.$refs.child as ViDialogType).open()
    }

    function change () {
      console.log(value.value)
      console.log(ar)
    }

    function up () {
      console.log('up')
    }

    function opent () {
      // ViToast.open('你好，成功了')
      ViMessage.append('可以了')
    }

    function openf () {
      ViToast.open('这样也可以')
    }

    return {
      ar,
      value,
      hello,
      ok,
      arr,
      open,
      scr,
      pf,
      openDialog,
      obj,
      change,
      res,
      date,
      up,
      opent,
      openf
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
</style>
