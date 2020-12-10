# @vueblocks/elp-cascader

> 基于`element-ui`和`vue-virtual-scroller`的级联选择器，用虚拟列表的方式逐级渲染列表。适用于数据量较大的场景。

[在线demo](<https://baidu.com>)

## 效果预览

![elp-cascader](./docs/assets/demo.gif)

## install 安装

```shell
npm i @vueblocks/elp-cascader --save
# or
yarn add @vueblocks/elp-cascader
```

## 全局调用

在main.js中写入下面的代码

```javascript
import ElpCascader from '@vueblocks/cascader'
Vue.use(ElpCascader)
```

页面中直接使用

```html
<template>
  <div id="app">
    <elp-cascader v-model="value" :options="options" />
    <elp-cascader-panel v-model="value" :options="options" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      options: [
        {
          value: 'test',
          label: '测试',
          children: []
        }]
    }
  }
}
</script>
```

**Attributes、Events、Methods、Props**

详见[ElementUI-Cascader](https://element.eleme.io/#/zh-CN/component/cascader)

## 更新日志

**版本：0.1.1**

时间：2020-12-06

内容：

- [refactor]调整资源样式打包方式，避免污染到存在不同版本'element-ui'的项目
**版本：0.1.0**

时间：2020-12-01

内容：

- [feat]初版
