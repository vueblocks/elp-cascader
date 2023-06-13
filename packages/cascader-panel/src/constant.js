import { noop } from 'element-ui/src/utils/util'

const DefaultProps = {
  value: 'value',
  label: 'label',
  leaf: 'leaf',
  children: 'children',
  disabled: 'disabled',
  lazy: false,
  lazyLoad: noop,
  emitPath: true,
  multiple: false,
  checkStrictly: false,
  expandTrigger: 'click', // click / hover
  hoverThreshold: 500,
  selectWithExpand: true, // when node is selectable, click event trigger expand event
  lazyMultiCheck: false, // effective when lazy===true&checkStrictly===false
  expandPanels: 1,
  emptyText: '暂无数据'
}

export {
  DefaultProps
}
