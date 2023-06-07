---
sidebarDepth: 1
---

# 滚动框 scroll

用于代替原生滚动条

## 使用说明

### 简单引入

通过css变量`--vi-scroll-width`与`--vi-scroll-height`定义滚动框的宽度与高度

<code-show>
<row>
<vi-scroll class="my-scroll-v1">
<p>观沧海</p>
<p>朝代：三国 | 作者：曹操</p>
<p>东临碣石，以观沧海。</p>
<p>水何澹澹，山岛竦峙。</p>
<p>树木丛生，百草丰茂。</p>
<p>秋风萧瑟，洪波涌起。</p>
<p>日月之行，若出其中；</p>
<p>星汉灿烂，若出其里。</p>
<p>幸甚至哉！歌以咏志。</p>
</vi-scroll>
</row>
<template v-slot:code>

``` vue
<vi-scroll class="my-scroll-v1">
<p>观沧海</p>
<p>朝代：三国 | 作者：曹操</p>
<p>东临碣石，以观沧海。</p>
<p>水何澹澹，山岛竦峙。</p>
<p>树木丛生，百草丰茂。</p>
<p>秋风萧瑟，洪波涌起。</p>
<p>日月之行，若出其中；</p>
<p>星汉灿烂，若出其里。</p>
<p>幸甚至哉！歌以咏志。</p>
</vi-scroll>

<style>
  .my-scroll-v1 {
    --vi-scroll-width: 100%;
    --vi-scroll-height: 140px;
    text-align: center;
  }
</style>
```

</template>
</code-show>

<code-show>
<row>
<vi-scroll class="my-scroll-v2">
<p>
登上高高的碣石山，来眺望苍茫的大海。
水波多么汹涌澎湃，山岛高高的耸立在水中。
山岛上有丛生的树木，各种各样的奇花异草生长的很茂盛。
水面上吹起萧瑟的秋风，水中涌起了水花波浪。
雄伟的太阳和皎洁的月亮，好像在大海里升起。
灿烂的银河，好像出自大海里。
喜悦高兴到了极点，用这首诗歌来抒发自己的心愿志向。
</p>
</vi-scroll>
</row>
<template v-slot:code>

``` vue
<vi-scroll class="my-scroll-v2">
<p>
登上高高的碣石山，来眺望苍茫的大海。
水波多么汹涌澎湃，山岛高高的耸立在水中。
山岛上有丛生的树木，各种各样的奇花异草生长的很茂盛。
水面上吹起萧瑟的秋风，水中涌起了水花波浪。
雄伟的太阳和皎洁的月亮，好像在大海里升起。
灿烂的银河，好像出自大海里。
喜悦高兴到了极点，用这首诗歌来抒发自己的心愿志向。
</p>
</vi-scroll>

<style>
  .my-scroll-v2 {
    --vi-scroll-width: 100%;
    white-space:nowrap;
  }
</style>
```

</template>
</code-show>

### 颜色

通过color属性定义滚动条的颜色

<code-show>
<row>
<vi-scroll class="my-scroll-v1" :color="scrollBarColor"
:style="{
    backgroundColor: scrollBarColor === 'white' ? '#eeecff' : '#fff'
}">
<p>长歌行</p>
<p>朝代：上古</p>
<p>青青园中葵，朝露待日晞。</p>
<p>阳春布德泽，万物生光辉。</p>
<p>常恐秋节至，焜黄华叶衰。</p>
<p>百川东到海，何时复西归？</p>
<p>少壮不努力，老大徒伤悲。</p>
</vi-scroll>
<vi-button @click="changeColor('grey')">default</vi-button>
<vi-button @click="changeColor('purple')">purple</vi-button>
<vi-button @click="changeColor('black')">black</vi-button>
<vi-button @click="changeColor('white')">white</vi-button>
<vi-button @click="changeColor('golden')">golden</vi-button>
</row>
<template v-slot:code>

``` vue
<vi-scroll class="my-scroll-v1" :color="scrollBarColor"
:style="{
    backgroundColor: scrollBarColor === 'white' ? '#eeecff' : '#fff'
}">
<p>长歌行</p>
<p>朝代：上古</p>
<p>青青园中葵，朝露待日晞。</p>
<p>阳春布德泽，万物生光辉。</p>
<p>常恐秋节至，焜黄华叶衰。</p>
<p>百川东到海，何时复西归？</p>
<p>少壮不努力，老大徒伤悲。</p>
</vi-scroll>
<vi-button @click="changeColor('grey')">default</vi-button>
<vi-button @click="changeColor('purple')">purple</vi-button>
<vi-button @click="changeColor('black')">black</vi-button>
<vi-button @click="changeColor('white')">white</vi-button>
<vi-button @click="changeColor('golden')">golden</vi-button>

<script setup>
import { ref } from 'vue'
const scrollBarColor = ref('grey')

function changeColor(color) {
  scrollBarColor.value = color        
}
</script>
```

</template>
</code-show>

### 隐藏滚动条

通过hidden属性控制滚动条是否显示

<code-show>
<row>
<vi-scroll class="my-scroll-v1" hidden>
<p>敕勒歌</p>
<p>朝代：南北朝</p>
<p>敕勒川，阴山下。</p>
<p>天似穹庐，笼盖四野。</p>
<p>天苍苍，野茫茫，风吹草低见牛羊。</p>
</vi-scroll>
</row>
<template v-slot:code>

``` vue
<vi-scroll class="my-scroll-v1" hidden>
<p>敕勒歌</p>
<p>朝代：南北朝</p>
<p>敕勒川，阴山下。</p>
<p>天似穹庐，笼盖四野。</p>
<p>天苍苍，野茫茫，风吹草低见牛羊。</p>
</vi-scroll>
```

</template>
</code-show>

### 内容懒加载 <Badge type="tip" text="用法将更改" vertical="middle"/>

传入lazy回调函数开启滚动懒加载

更改wait与waitText属性定义加载动画与文字

使用finish属性控制懒加载操作，如果懒加载已经结束，将finish置为true即可

<code-show>
<row>
<vi-scroll class="my-scroll-v1" :lazy="lazy" wait="ball" waitText="加载中" :finish="finish">
<p>短歌行</p>
<p>朝代：三国|作者：曹操</p>
<p>【短歌行其一】</p>
<p>对酒当歌，人生几何！譬如朝露，去日苦多。</p>
<p>慨当以慷，忧思难忘。何以解忧？唯有杜康。</p>
<p>青青子衿，悠悠我心。但为君故，沉吟至今。</p>
<p v-for="item in poemView" :key="item">{{ item }}</p>
</vi-scroll>
</row>
<template v-slot:code>

``` vue
<vi-scroll class="my-scroll-v1" :lazy="lazy" wait="ball" waitText="加载中" :finish="finish">
<p>短歌行</p>
<p>朝代：三国|作者：曹操</p>
<p>【短歌行其一】</p>
<p>对酒当歌，人生几何！譬如朝露，去日苦多。</p>
<p>慨当以慷，忧思难忘。何以解忧？唯有杜康。</p>
<p>青青子衿，悠悠我心。但为君故，沉吟至今。</p>
<p v-for="item in poemView" :key="item">{{ item }}</p>
</vi-scroll>

<script setup>
const poem = [
  '呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。',
  '明明如月，何时可掇？忧从中来，不可断绝。',
  '越陌度阡，枉用相存。契阔谈讌，心念旧恩。',
  '月明星稀，乌鹊南飞。绕树三匝，何枝可依？',
  '山不厌高，海不厌深。周公吐哺，天下归心。',
]

const poemView = reactive([])
const finish = ref(false)

function lazy () {
  if (poem.length === 0) finish.value = true
  return new Promise((resolve) => {
    setTimeout(() => {
      if (poem.length > 0) poemView.push(poem.shift())
      resolve()
    }, 1000)
  })
}
</script>
```

</template>
</code-show>

### 平滑滚动

默认滚动效果是瞬间移动的，如果你需要使用平滑滚动，使用属性smooth控制

<code-show>
<row>
<vi-scroll class="my-scroll-v3" ref="scrollSmooth" :smooth="smooth">
逍遥游
<p>北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也；怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。”野马也，尘埃也，生物之以息相吹也。天之苍苍，其正色邪？其远而无所至极邪？其视下也，亦若是则已矣。且夫水之积也不厚，则其负大舟也无力。覆杯水于坳堂之上，则芥为之舟；置杯焉则胶，水浅而舟大也。风之积也不厚，则其负大翼也无力。故九万里，则风斯在下矣，而后乃今培风；背负青天，而莫之夭阏者，而后乃今将图南。蜩与学鸠笑之曰：“我决起而飞，抢榆枋而止，时则不至，而控于地而已矣，奚以之九万里而南为？”适莽苍者，三餐而反，腹犹果然；适百里者，宿舂粮；适千里者，三月聚粮。之二虫又何知！小知不及大知，小年不及大年。奚以知其然也？朝菌不知晦朔，蟪蛄不知春秋，此小年也。楚之南有冥灵者，以五百岁为春，五百岁为秋；上古有大椿者，以八千岁为春，八千岁为秋。此大年也。而彭祖乃今以久特闻，众人匹之，不亦悲乎？</p>
<p>汤之问棘也是已：“穷发之北，有冥海者，天池也。有鱼焉，其广数千里，未有知其修者，其名为鲲。有鸟焉，其名为鹏，背若泰山，翼若垂天之云；抟扶摇羊角而上者九万里，绝云气，负青天，然后图南，且适南冥也。斥鷃笑之曰：‘彼且奚适也？我腾跃而上，不过数仞而下，翱翔蓬蒿之间，此亦飞之至也。而彼且奚适也？’”此小大之辩也。</p>
<p>故夫知效一官、行比一乡、德合一君、而征一国者，其自视也，亦若此矣。而宋荣子犹然笑之。且举世誉之而不加劝，举世非之而不加沮，定乎内外之分，辩乎荣辱之境，斯已矣。彼其于世，未数数然也。虽然，犹有未树也。夫列子御风而行，泠然善也，旬有五日而后反。彼于致福者，未数数然也。此虽免乎行，犹有所待者也。若夫乘天地之正，而御六气之辩，以游无穷者，彼且恶乎待哉？故曰：至人无己，神人无功，圣人无名。</p>
</vi-scroll>
<vi-button @click="backToTop">返回文章顶部</vi-button>
<vi-button @click="changeSmooth">{{ smooth? '普通效果' : '平滑效果' }}</vi-button>
</row>
<template v-slot:code>

``` vue
<vi-scroll class="my-scroll-v3">
逍遥游
<p>北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也；怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。”野马也，尘埃也，生物之以息相吹也。天之苍苍，其正色邪？其远而无所至极邪？其视下也，亦若是则已矣。且夫水之积也不厚，则其负大舟也无力。覆杯水于坳堂之上，则芥为之舟；置杯焉则胶，水浅而舟大也。风之积也不厚，则其负大翼也无力。故九万里，则风斯在下矣，而后乃今培风；背负青天，而莫之夭阏者，而后乃今将图南。蜩与学鸠笑之曰：“我决起而飞，抢榆枋而止，时则不至，而控于地而已矣，奚以之九万里而南为？”适莽苍者，三餐而反，腹犹果然；适百里者，宿舂粮；适千里者，三月聚粮。之二虫又何知！小知不及大知，小年不及大年。奚以知其然也？朝菌不知晦朔，蟪蛄不知春秋，此小年也。楚之南有冥灵者，以五百岁为春，五百岁为秋；上古有大椿者，以八千岁为春，八千岁为秋。此大年也。而彭祖乃今以久特闻，众人匹之，不亦悲乎？</p>
<p>汤之问棘也是已：“穷发之北，有冥海者，天池也。有鱼焉，其广数千里，未有知其修者，其名为鲲。有鸟焉，其名为鹏，背若泰山，翼若垂天之云；抟扶摇羊角而上者九万里，绝云气，负青天，然后图南，且适南冥也。斥鷃笑之曰：‘彼且奚适也？我腾跃而上，不过数仞而下，翱翔蓬蒿之间，此亦飞之至也。而彼且奚适也？’”此小大之辩也。</p>
<p>故夫知效一官、行比一乡、德合一君、而征一国者，其自视也，亦若此矣。而宋荣子犹然笑之。且举世誉之而不加劝，举世非之而不加沮，定乎内外之分，辩乎荣辱之境，斯已矣。彼其于世，未数数然也。虽然，犹有未树也。夫列子御风而行，泠然善也，旬有五日而后反。彼于致福者，未数数然也。此虽免乎行，犹有所待者也。若夫乘天地之正，而御六气之辩，以游无穷者，彼且恶乎待哉？故曰：至人无己，神人无功，圣人无名。</p>
</vi-scroll>

<script setup>
const scrollSmooth = ref()
const smooth = ref(true)

function backToTop () {
    scrollSmooth.value.scrollTo(0, 0)
}

function changeSmooth () {
    smooth.value = !smooth.value
}
</script>
```

</template>
</code-show>

## Props
| 属性名 | 描述 | 类型 | 默认 |
| - | - | - | - |
| color | 滚动条颜色 | 'grey' \| 'black' \| 'white' \| 'golden' \| 'purple' | 'grey' |
| hidden | 是否隐藏滚动条,隐藏后保持滚动效果 | boolean | false |
| smooth | 滚动是否为平滑效果 | boolean | false |
| lazy | 滚动区域懒加载回调函数，传入该参数默认实现无限滚动 | function | - |
| wait | 等待缺省加载动画，前提传入无限滚动回调函数开启懒加载 | 'none' \| 'circle' \| 'ball' | 'none' |
| waitText | 等待缺省文字，若有加载动画，传入文字将跟在加载动画后面 | string | - |
| finish | 用于懒加载中，代表全部数据是否加载完成 | boolean | false |

::: warning
注意：lazy请传入一个异步promise函数，懒加载自动实现节流，待lazy函数返回结果后，才将再次监听事件触发lazy函数
:::

## 插槽
| 插槽名 | 描述 |
| - | - |
| 默认插槽 | 滚动框内内容 |

## 事件支持
- 滚动事件 scroll

## 可覆写css变量

- **--vi-scroll-height**: 滚动框高度 
- **--vi-scroll-width**: 滚动框宽度
- **--vi-scroll-max-height**: 滚动框最大高度
- **--vi-scroll-min-height**: 滚动框最小高度

## 可调用方法

#### 对外暴露方法调用

- **scrollTo** 滚动到相应位置

``` vue
<!-- 父子组件中 -->
<ViVirtualScroll ref="child">这里是scroll里的内容</ViVirtualScroll>

<!-- script -->
child.value.scrollTo(0, 140)
```

#### 

<script setup>
import { ref, reactive } from 'vue'
const scrollBarColor = ref('grey')

function changeColor(color) {
  scrollBarColor.value = color        
}

const poem = [
  '呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。',
  '明明如月，何时可掇？忧从中来，不可断绝。',
  '越陌度阡，枉用相存。契阔谈讌，心念旧恩。',
  '月明星稀，乌鹊南飞。绕树三匝，何枝可依？',
  '山不厌高，海不厌深。周公吐哺，天下归心。',
]

const poemView = reactive([])
const finish = ref(false)

function lazy () {
  if (poem.length === 0) finish.value = true
  return new Promise((resolve) => {
    setTimeout(() => {
      if (poem.length > 0) poemView.push(poem.shift())
      resolve()
    }, 1000)
  })
}

const scrollSmooth = ref()
const smooth = ref(true)

function backToTop () {
    scrollSmooth.value.scrollTo(0, 0)
}

function changeSmooth () {
    smooth.value = !smooth.value
}
</script>

<style>
  .my-scroll-v1 {
    --vi-scroll-width: 100%;
    --vi-scroll-height: 140px;
    text-align: center;
  }

  .my-scroll-v2 {
    --vi-scroll-width: 100%;
    white-space:nowrap;
  }

  .my-scroll-v3 {
    --vi-scroll-width: 100%;
    --vi-scroll-height: 200px;
    text-align: center;
  }

  .my-scroll-v3 > p {
    text-align: left;
   }
</style>