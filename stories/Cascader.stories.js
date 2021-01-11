import './../lib/elp-cascader.css'
import ElpCascader from './../lib/elp-cascader.umd.min.js'
import Mock from 'mockjs'

const { Cascader } = ElpCascader
// 模拟整棵树
const MockTree = Mock.mock({
  'array|100': [
    {
      label: '@csentence(6)',
      value: '@string()',
      'children|2': [
        {
          label: '@csentence(6)',
          value: '@string()',
          'children|2': [
            {
              label: '@csentence(6)',
              value: '@string()'
            }
          ]
        }
      ]
    }
  ]
})
// 模拟单个节点
const MockNode = Mock.mock({
  'array|1000': [
    {
      label: '@csentence(6)',
      value: '@string()'
    }
  ]
})

export default {
  title: 'Example/Cascader',
  component: Cascader,
  argTypes: {
    props: { control: { type: 'object' } },
    size: { control: { type: 'select', options: ['medium', 'small', 'mini'] } },
    placeholder: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    clearable: { control: { type: 'boolean' } },
    'show-all-levels': { control: { type: 'boolean' } },
    'collapse-tags': { control: { type: 'boolean' } },
    separator: { control: { type: 'text' } },
    filterable: { control: { type: 'boolean' } },
    debounce: { control: { type: 'number', min: 0, step: 100 } }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Cascader },
  props: Object.keys(argTypes),
  template: `
    <div style="margin-top: 100px;text-align: center">
    <cascader v-bind="$props" style="width: 400px" />
    </div>
  `
})

/**
 * 基础
 */
export const Base = Template.bind()
Base.args = {
  debounce: 300,
  size: 'medium',
  separator: '/',
  placeholder: '请选择',
  'show-all-levels': true,
  options: MockTree.array
}

/**
 * 远程&单选
 */
export const Lazy = Template.bind({})
Lazy.args = {
  ...Base.args,
  placeholder: '单选时不级联请求下一级',
  props: {
    lazy: true,
    checkStrictly: true,
    selectWithExpand: false,
    lazyLoad (node, resolve) {
      setTimeout(_ => { resolve(MockNode) }, 1000)
    }
  }
}

/**
 * 远程&多选
 */
export const LazyAndMulti = Template.bind({})
LazyAndMulti.args = {
  ...Base.args,
  placeholder: '多选时懒加载取值',
  props: {
    lazy: true,
    multiple: true,
    lazyMultiCheck: true,
    lazyLoad (node, resolve) {
      setTimeout(_ => { resolve(MockNode) }, 1000)
    }
  }
}

/**
 * 支持单个面板搜索、全选
 */
export const PanelLabels = Template.bind({})
PanelLabels.args = {
  ...Base.args,
  placeholder: '支持单个面板搜索、全选',
  props: {
    lazy: true,
    multiple: true,
    checkStrictly: true,
    panelLabels: ['FIRST', 'SECOND', 'THIRD'],
    lazyLoad (node, resolve) {
      setTimeout(_ => { resolve(MockNode) }, 1000)
    }
  }
}
