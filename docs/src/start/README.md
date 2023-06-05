# 快速上手

## 安装
``` sh
npm install viog-ui --save
```

## 引入
将viog-ui注册给vueApp实例，即可完成组件的全局注册
``` javascript
// index.ts
import viog from 'viog-ui'; // 引入组件库
import from 'viog-ui/dist/viog-ui.css' // 引入css样式

app.use(viog) // 注册组件库
```
注意一定要引入css文件，否则组件将没有样式

## 使用
完成以上步骤后，就可以在项目中使用组件啦