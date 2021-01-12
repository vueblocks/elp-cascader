<p align="center">
    <h3 align="center">elp-cascader</h3>
    <br>
    <p align="center">
        <a href="https://www.npmjs.com/package/@vueblocks/elp-cascader"><img src="https://img.shields.io/npm/v/@vueblocks/elp-cascader?maxAge=2592000"></a>
        <a href="https://www.npmjs.com/package/@vueblocks/elp-cascader"><img src="https://img.shields.io/npm/dt/@vueblocks/elp-cascader"></a>
        <a href="https://github.com/vueblocks/elp-cascader/stargazers"><img src="https://img.shields.io/github/stars/vueblocks/elp-cascader.svg"></a>
    </p>
    <p align="center">
       Cascader based on 'element-ui' and 'vue-virtual-scroller'<br>
    </p>
</p>

# @vueblocks/elp-cascader

> 基于`element-ui`和`vue-virtual-scroller`的级联选择器，用虚拟列表的方式逐级渲染列表。适用于数据量较大的场景。

[Demo](<https://vueblocks.github.io/elp-cascader/>)

## 效果预览

![elp-cascader](./demo.gif)

## install 安装

```shell
npm i @vueblocks/elp-cascader --save
# or
yarn add @vueblocks/elp-cascader
```

## 全局调用

在main.js中写入下面的代码

```javascript
import '@vueblocks/elp-cascader/lib/elp-cascader.css'
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


## 💡 与Element cascader的区别项

1. el-cascader当option重复时，会出一个空白节点

    解决逻辑：重复时保留老节点，舍去新节点
    
2. el-cascader多选状态下，第一个搜索词选中内容后，搜索词被清空

    解决逻辑：保留第一个搜索词

3. props中新增属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| selectWithExpand | 单选且checkStrictly为true时是否展开下一级 | boolean | - | false |
| lazyMultiCheck | 多选且懒加载时取值 | boolean | - | false |
| panelLabels | 支持单个面板搜索、全选 | Array | - | [] |

[CHANGELOG](CHANGELOG.md)
