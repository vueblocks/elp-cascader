<template>
  <div class="el-cascader-menu">
    <div class="el-cascader-menu__wrap el-cascader-menu__list">
      <!--      <div style="padding: 5px 20px">-->
      <!--        <el-input-->
      <!--            v-model.trim="searchKey"-->
      <!--            placeholder="请输入内容"-->
      <!--            size="small"-->
      <!--            suffix-icon="el-icon-search"-->
      <!--            @input="handleFilterNode"-->
      <!--        />-->
      <!--      </div>-->
      <div v-if="isEmpty" class="el-cascader-menu__empty-text">
        {{ emptyText }}
      </div>
      <recycle-scroller
          v-else
          v-slot="{ item, index }"
          :buffer="100"
          :items="nodes"
          :item-size="34"
          key-field="value"
          style="height: 100%">
        <cascader-node
            :key="item.uid"
            :node="item"
            :node-id="`${menuId}-${index}`"
            :aria-haspopup="item.hasChildren"
            :aria-owns="item.hasChildren ? menuId : null"
            @expand="isHover && handleExpand"
        />
      </recycle-scroller>
      <svg
          v-if="isHover"
          ref='hoverZone'
          class='el-cascader-menu__hover-zone'
      />
    </div>
  </div>
</template>

<script>
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import { RecycleScroller } from 'vue-virtual-scroller'

import CascaderNode from './cascader-node.vue'

export default {
  name: 'ElpCascaderMenu',

  inject: ['panel'],

  components: {
    RecycleScroller,
    CascaderNode
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
    }
  },

  data () {
    return {
      activeNode: null,
      hoverTimer: null
      // searchKey: '',
      // renderNodes: []
    }
  },

  computed: {
    isEmpty () {
      return !this.nodes.length
    },
    menuId () {
      return `cascader-menu-${this.index}`
    },
    isHover () {
      return this.panel.isHoverMenu
    }
  },

  // mounted () {
  //   this.renderNodes = cloneDeep(this.nodes)
  // },

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
    }
    // handleFilterNode: debounce(function (key) {
    //   try {
    //     this.renderNodes = this.nodes.filter(v => v.label.includes(key))
    //   } catch (e) {
    //     console.error(e)
    //     this.renderNodes = []
    //   }
    // }, 500)
  }
}
</script>
