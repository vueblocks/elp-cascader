import { coerceTruthyValueToArray, valueEquals } from 'element-ui/src/utils/util'
import Node from './node'

const flatNodes = (data, leafOnly, lazyMultiCheck) => {
  return data.reduce((res, node) => {
    if (node.isLeaf) {
      res.push(node)
    } else {
      (!leafOnly || lazyMultiCheck) && res.push(node)
      res = res.concat(flatNodes(node.children, leafOnly, lazyMultiCheck))
    }
    return res
  }, [])
}

export default class Store {

  constructor (data, config) {
    this.config = config
    this.initNodes(data)
  }

  initNodes (data) {
    data = coerceTruthyValueToArray(data)
    this.nodes = data.map(nodeData => new Node(nodeData, this.config))
    this.flattedNodes = this.getFlattedNodes(false, false)
    this.leafNodes = this.getFlattedNodes(true, false)
  }

  appendNodes (nodeDataList, parentNode) {
    nodeDataList = coerceTruthyValueToArray(nodeDataList)
    const children = parentNode ? parentNode.children : this.nodes
    const nodes = []

    for (let i = 0, length = nodeDataList.length; i < length; i++) {
      const node = new Node(nodeDataList[i], this.config, parentNode)

      // Skip if the node already exists
      const _idx = children.findIndex(item => item.value === node.value)
      if (_idx > -1) {
        // replace the old node when the value repeats
        // children.splice(_idx, 1, node)
        break
      }

      nodes.push(node)
    }
    if (parentNode) {
      parentNode.children = Object.freeze(nodes)
    } else {
      this.nodes = Object.freeze(nodes)
    }
  }

  getNodes () {
    return this.nodes
  }

  getFlattedNodes (leafOnly, cached = true) {
    const cachedNodes = leafOnly ? this.leafNodes : this.flattedNodes
    return cached
      ? cachedNodes
      : flatNodes(this.nodes, leafOnly, this.config.lazyMultiCheck)
  }

  getNodeByValue (value) {
    if (value) {
      const nodes = this.getFlattedNodes(false, !this.config.lazy).
        filter(node => (valueEquals(node.path, value) || node.value === value))
      return nodes && nodes.length ? nodes[0] : null
    }
    return null
  }

}
