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

  appendNode (nodeData, parentNode) {
    const node = new Node(nodeData, this.config, parentNode)
    const children = parentNode ? parentNode.children : this.nodes

    // Skip if the node already exists
    const _idx = children.findIndex(item => item.value === node.value)
    if (_idx > -1) {
      // replace the old node when the value repeats
      // children.splice(_idx, 1, node)
      return
    }

    children.push(node)
  }

  appendNodes (nodeDataList, parentNode) {
    nodeDataList = coerceTruthyValueToArray(nodeDataList)
    nodeDataList.forEach(nodeData => this.appendNode(nodeData, parentNode))
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
