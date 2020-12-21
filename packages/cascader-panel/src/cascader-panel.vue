<template>
  <div
      :class="[
          'elp-cascader-panel',
          border && 'is-bordered'
       ]"
      @keydown="handleKeyDown">
    <cascader-menu
        ref="menu"
        v-for="(menu, index) in menus"
        :key="index"
        :nodes="menu"
        :index="index"
    />
  </div>
</template>

<script>
// element-ui
import merge from 'element-ui/src/utils/merge'
import AriaUtils from 'element-ui/src/utils/aria-utils'
import scrollIntoView from 'element-ui/src/utils/scroll-into-view'
import {
  isEqual,
  isEmpty,
  valueEquals,
  coerceTruthyValueToArray
} from 'element-ui/src/utils/util'

import Store from './store'
import { DefaultProps } from './constant'
import CascaderMenu from './cascader-menu'
import {
  focusNode,
  checkNode,
  getSibling,
  getMenuIndex
} from './utils'
import 'elp-cascader/packages/theme/cascader-panel.less'

const { keys: KeyCode } = AriaUtils

export default {
  name: 'ElpCascaderPanel',

  components: { CascaderMenu },

  props: {
    value: {},
    options: Array,
    props: Object,
    border: {
      type: Boolean,
      default: true
    },
    renderLabel: Function
  },

  provide () {
    return {
      panel: this
    }
  },

  data () {
    return {
      store: [],
      menus: [],
      loadCount: 0,
      activePath: [],
      checkedValue: null,
      checkedNodePaths: []
    }
  },

  computed: {
    config () {
      return merge({ ...DefaultProps }, this.props || {})
    },
    multiple () {
      return this.config.multiple
    },
    checkStrictly () {
      return this.config.checkStrictly
    },
    leafOnly () {
      return !this.checkStrictly
    },
    isHoverMenu () {
      return this.config.expandTrigger === 'hover'
    },
    renderLabelFn () {
      return this.renderLabel || this.$scopedSlots.default
    }
  },

  watch: {
    options: {
      handler: function () {
        this.initStore()
      },
      immediate: true,
      deep: true
    },
    value () {
      this.syncCheckedValue()
      this.checkStrictly && this.calculateCheckedNodePaths()
    },
    checkedValue (val) {
      if (!isEqual(val, this.value)) {
        this.checkStrictly && this.calculateCheckedNodePaths()
        this.$emit('input', val)
        this.$emit('change', val)
      }
    }
  },

  mounted () {
    if (!isEmpty(this.value)) {
      this.syncCheckedValue()
    }
  },

  methods: {
    initStore () {
      const { config, options } = this
      if (config.lazy && isEmpty(options)) {
        this.lazyLoad()
      } else {
        this.store = new Store(options, config)
        this.menus = [this.store.getNodes()]
        this.syncMenuState()
      }
    },
    syncCheckedValue () {
      const { value, checkedValue } = this
      if (!isEqual(value, checkedValue)) {
        this.checkedValue = value
        this.syncMenuState()
      }
    },
    syncMenuState () {
      const { multiple, checkStrictly } = this
      this.syncActivePath()
      multiple && this.syncMultiCheckState()
      checkStrictly && this.calculateCheckedNodePaths()
      this.$nextTick(this.scrollIntoView)
    },
    syncMultiCheckState () {
      const nodes = this.getFlattedNodes(this.leafOnly)

      nodes.forEach(node => {
        node.syncCheckState(this.checkedValue)
      })
    },
    syncActivePath () {
      const { store, multiple, activePath, checkedValue } = this

      if (!isEmpty(activePath)) {
        const nodes = activePath.map(node => this.getNodeByValue(node.getValue()))
        this.expandNodes(nodes)
      } else if (!isEmpty(checkedValue)) {
        const value = multiple ? checkedValue[0] : checkedValue
        const checkedNode = this.getNodeByValue(value) || {}
        const nodes = (checkedNode.pathNodes || []).slice(0, -1)
        this.expandNodes(nodes)
      } else {
        this.activePath = []
        this.menus = [store.getNodes()]
      }
    },
    expandNodes (nodes) {
      nodes.forEach(node => this.handleExpand(node, true /* silent */))
    },
    calculateCheckedNodePaths () {
      const { checkedValue, multiple } = this
      const checkedValues = multiple
          ? coerceTruthyValueToArray(checkedValue)
          : [checkedValue]
      this.checkedNodePaths = checkedValues.map(v => {
        const checkedNode = this.getNodeByValue(v)
        return checkedNode ? checkedNode.pathNodes : []
      })
    },
    handleKeyDown (e) {
      const { target, keyCode } = e

      switch (keyCode) {
        case KeyCode.up: {
          const prev = getSibling(target, -1)
          focusNode(prev)
          break
        }
        case KeyCode.down: {
          const next = getSibling(target, 1)
          focusNode(next)
          break
        }
        case KeyCode.left: {
          const preMenu = this.$refs.menu[getMenuIndex(target) - 1]
          if (preMenu) {
            const expandedNode = preMenu.$el.querySelector('.elp-cascader-node[aria-expanded="true"]')
            focusNode(expandedNode)
          }
          break
        }
        case KeyCode.right: {
          const nextMenu = this.$refs.menu[getMenuIndex(target) + 1]
          if (nextMenu) {
            const firstNode = nextMenu.$el.querySelector('.elp-cascader-node[tabindex="-1"]')
            focusNode(firstNode)
          }
          break
        }
        case KeyCode.enter:
          checkNode(target)
          break
        case KeyCode.esc:
        case KeyCode.tab:
          this.$emit('close')
          break
        default:
          return
      }
    },
    handleExpand (node, silent) {
      const { activePath } = this
      const { level } = node
      const path = activePath.slice(0, level - 1)
      const menus = this.menus.slice(0, level)

      if (!node.isLeaf) {
        path.push(node)
        menus.push(node.children)
      }

      this.activePath = path
      this.menus = menus

      if (!silent) {
        const pathValues = path.map(node => node.getValue())
        const activePathValues = activePath.map(node => node.getValue())
        if (!valueEquals(pathValues, activePathValues)) {
          this.$emit('active-item-change', pathValues) // Deprecated
          this.$emit('expand-change', pathValues)
        }
      }
    },
    handleCheckChange (value) {
      this.checkedValue = value
    },
    lazyLoad (node, onFullfiled) {
      const { config } = this
      if (!node) {
        node = node || { root: true, level: 0 }
        this.store = new Store([], config)
        this.menus = [this.store.getNodes()]
      }
      node.loading = true
      const resolve = dataList => {
        const parent = node.root ? null : node
        dataList && dataList.length && this.store.appendNodes(dataList, parent)
        node.loading = false
        node.loaded = true

        // dispose default value on lazy load mode
        if (Array.isArray(this.checkedValue)) {
          const nodeValue = this.checkedValue[this.loadCount++]
          const valueKey = this.config.value
          const leafKey = this.config.leaf

          if (Array.isArray(dataList) && dataList.filter(item => item[valueKey] === nodeValue).length > 0) {
            const checkedNode = this.store.getNodeByValue(nodeValue)

            if (!checkedNode.data[leafKey]) {
              this.lazyLoad(checkedNode, () => {
                this.handleExpand(checkedNode)
              })
            }

            if (this.loadCount === this.checkedValue.length) {
              this.$parent.computePresentText()
            }
          }
        }

        onFullfiled && onFullfiled(dataList)
      }
      config.lazyLoad(node, resolve)
    },

    /**
     * public methods
     */
    calculateMultiCheckedValue () {
      this.checkedValue = this.getCheckedNodes(this.leafOnly).map(node => node.getValueByOption())
    },
    scrollIntoView () {
      if (this.$isServer) return

      const menus = this.$refs.menu || []
      menus.forEach(menu => {
        const menuElement = menu.$el
        if (menuElement) {
          const container = menuElement.querySelector('.elp-cascader-menu__wrap')
          const activeNode = menuElement.querySelector('.elp-cascader-node.is-active') ||
              menuElement.querySelector('.elp-cascader-node.in-active-path')
          scrollIntoView(container, activeNode)
        }
      })
    },
    getNodeByValue (val) {
      return this.store.getNodeByValue(val)
    },
    getFlattedNodes (leafOnly) {
      const cached = !this.config.lazy
      return this.store.getFlattedNodes(leafOnly, cached)
    },
    getCheckedNodes (leafOnly) {
      const { checkedValue, multiple } = this
      if (multiple) {
        const nodes = this.getFlattedNodes(leafOnly)
        return nodes.filter(node => node.checked)
      } else {
        return isEmpty(checkedValue)
            ? []
            : [this.getNodeByValue(checkedValue)]
      }
    },
    clearCheckedNodes () {
      const { config, leafOnly } = this
      const { multiple, emitPath } = config
      if (multiple) {
        this.getCheckedNodes(leafOnly).filter(node => !node.isDisabled).forEach(node => node.doCheck(false))
        this.calculateMultiCheckedValue()
      } else {
        this.checkedValue = emitPath ? [] : null
      }
    }
  }
}
</script>
