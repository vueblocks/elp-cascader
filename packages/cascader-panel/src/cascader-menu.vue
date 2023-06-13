<template>
  <div class="elp-cascader-menu">
    <div class="elp-cascader-menu__wrap elp-cascader-menu__list">
      <div class="elp-search-check">
        <div v-if="labelAndCheckAllVisible" class="elp-search-check__check">
          <div v-if="menuLabel">{{menuLabel}}</div>
          <el-checkbox
            v-if="checkAllVisible"
            :value="menuCheckState.checked"
            :indeterminate="menuCheckState.indeterminate"
            @change="onMenuCheck"
          >全选</el-checkbox>
        </div>
        <div v-if="searchVisible" style="padding: 5px 20px">
          <el-input
            clearable
            v-model.trim="keyWordsTemp"
            :placeholder="panelPlaceholder"
            :placeholder="menuPlaceholder"
            size="small"
            suffix-icon="el-icon-search"
            @input="handleSearchInput"
          />
        </div>
      </div>
      <div v-if="searchLoading" class="elp-cascader-menu__empty-text">加载中</div>
      <div v-else-if="isEmpty" class="elp-cascader-menu__empty-text">
        {{ emptyText }}
      </div>
      <recycle-scroller
          v-else
          v-slot="{ item, index }"
          :buffer="100"
          :items="filterNodes"
          :item-size="34"
          key-field="value"
          :style="{ height: scrollHeight }">
        <cascader-node
          :key="item.uid"
          :node="item"
          :node-id="`${menuId}-${index}`"
          :insertMode="searching"
          :aria-haspopup="item.hasChildren"
          :aria-owns="item.hasChildren ? menuId : null"
          @expand="isHover && handleExpand"
        />
      </recycle-scroller>
      <svg
          v-if="isHover"
          ref='hoverZone'
          class='elp-cascader-menu__hover-zone'
      />
    </div>
  </div>
</template>

<script>
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import { RecycleScroller } from 'vue-virtual-scroller'
import ElInput from 'element-ui/packages/input'
import { coerceTruthyValueToArray } from 'element-ui/src/utils/util'

import CascaderNode from './cascader-node.vue'
import ElCheckbox from 'element-ui/packages/checkbox'
import debounce from 'throttle-debounce/debounce'


export default {
  name: 'ElpCascaderMenu',

  inject: ['panel'],

  components: {
    RecycleScroller,
    CascaderNode,
    ElInput,
    ElCheckbox
  },

  props: {
    nodes: {
      type: Array,
      required: true
    },
    index: Number,
    emptyText: {
      type: String,
      default: '暂无数据'
    },
    panelPlaceholder: {
      type: String,
      default: '请输入内容'
    }
  },

  data () {
    return {
      activeNode: null,
      hoverTimer: null,
      searchKey: '',
      keyWordsTemp: '',
      menuCheckState: {
        checked: false,
        indeterminate: false
      },
      searching: false,
      searchLoading: false,
      searchNodes: []
    }
  },

  computed: {
    config () {
      return this.panel.config
    },
    isEmpty () {
      return !this.filterNodes.length
    },
    menuId () {
      return `cascader-menu-${this.index}`
    },
    isHover () {
      return this.panel.isHoverMenu
    },
    filterNodes () { // 经搜索词过滤后的node节点
      if (this.hasRemote && this.searching) return this.searchNodes
      if (!this.searchKey) return this.nodes
      return this.nodes.filter(node => node.label.includes(this.searchKey))
    },
    menuLabel () {
      let _labels = coerceTruthyValueToArray(this.config.panelLabels)
      return _labels[this.index]
    },
    menuPlaceholder () {
      const _placeholders = coerceTruthyValueToArray(this.config.panelPlaceholder)
      return _placeholders[this.index] || '请输入内容'
    },
    checkAllVisible () {
      const { checkStrictly, multiple, lazyMultiCheck, checkAll } = this.config
      const validCheck = Array.isArray(checkAll) ? checkAll.includes(this.index) : checkAll
      return checkStrictly && multiple && !lazyMultiCheck && validCheck && !this.hasRemote
    },
    labelAndCheckAllVisible () {
      return this.menuLabel || this.checkAllVisible
    },
    searchVisible () {
      return this.config.panelSearch
    },
    scrollHeight () {
      const labelAndCheckAllHeight = this.labelAndCheckAllVisible ? 30 : 0
      const searchHeight = this.searchVisible ? 42 : 0
      return `calc(100% - ${ labelAndCheckAllHeight + searchHeight }px)`
    },
    hasRemote () {
      return typeof this.config.remoteInitMethods === 'function' && this.index === 0
    }
  },
  watch: {
    'panel.checkedValue': {
      handler () {
        this.setMenuCheckedVal()
      },
      deep: true
    },
    'panel.activePath': {
      handler () {
        this.setMenuCheckedVal()
      },
      deep: true,
      immediate: true
    },
    searching: {
      handler (val) {
        this.panel.isKeyWordSearching = val
      },
      immediate: true
    }
  },
  methods: {
    handleExpand (e) {
      this.activeNode = e.target
    },
    handleMouseMove (e) {
      const { activeNode, hoverTimer } = this
      const { hoverZone } = this.$refs

      if (!activeNode || !hoverZone) return

      if (activeNode.contains(e.target)) {
        clearTimeout(hoverTimer)

        const { left } = this.$el.getBoundingClientRect()
        const startX = e.clientX - left
        const { offsetWidth, offsetHeight } = this.$el
        const top = activeNode.offsetTop
        const bottom = top + activeNode.offsetHeight

        hoverZone.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${top} L${offsetWidth} 0 V${top} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom} L${offsetWidth} ${offsetHeight} V${bottom} Z" />
        `
      } else if (!hoverTimer) {
        this.hoverTimer = setTimeout(this.clearHoverZone, this.panel.config.hoverThreshold)
      }
    },
    clearHoverZone () {
      const { hoverZone } = this.$refs
      if (!hoverZone) return
      hoverZone.innerHTML = ''
    },
    setMenuCheckedVal () {
      if (!this.checkAllVisible) return
      const totalNum = this.filterNodes.filter(it => !it.isDisabled).length
      const checkedNum = this.filterNodes.reduce((c, p) => {
        const num = p.checked ? 1 : (p.indeterminate ? 0.5 : 0)
        return c + num
      }, 0)
      this.menuCheckState = {
        checked: checkedNum > 0 && checkedNum === totalNum,
        indeterminate: checkedNum > 0 && checkedNum !== totalNum
      }
    },
    onMenuCheck (checked) {
      // 标识已选中的标签
      this.filterNodes.forEach(node => { !node.isDisabled && node.doCheck(checked) })
      this.panel.calculateMultiCheckedValue()
    },
    handleSearchInput: debounce(300, function (searchWords = '') {
      // 适应大数据量，首层可以进行懒加载
      if (this.hasRemote) {
        this.searching = !!searchWords
        this.handlerRemoteSearch()
      }
      this.searchKey = searchWords.trim()
      this.setMenuCheckedVal()
    }),
    handlerRemoteSearch () {
      if (!this.hasRemote) return
      const  { remoteInitMethods } = this.config
      this.panel.initSearchStatus(!!this.keyWordsTemp)
      if (!this.keyWordsTemp) return
      this.searchLoading = true
      const fufiled = (nodeLists) => {
        this.searchLoading = false
        this.searchNodes = this.panel.store.createNodes(nodeLists, this.config)
      }
      remoteInitMethods(this.keyWordsTemp, fufiled)
    }
  }
}
</script>
