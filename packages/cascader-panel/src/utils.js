const isLeaf = el => !el.getAttribute('aria-owns')

const focusNode = el => {
  if (!el) return
  el.focus()
  !isLeaf(el) && el.click()
}

const checkNode = el => {
  if (!el) return

  const input = el.querySelector('input')
  if (input) {
    input.click()
  } else if (isLeaf(el)) {
    el.click()
  }
}

const getSibling = (el, distance) => {
  const { parentNode } = el
  if (parentNode) {
    const siblings = parentNode.querySelectorAll('.el-cascader-node[tabindex="-1"]')
    const index = Array.prototype.indexOf.call(siblings, el)
    return siblings[index + distance] || null
  }
  return null
}

const getMenuIndex = (el) => {
  if (!el) return
  const pieces = el.id.split('-')
  return Number(pieces[pieces.length - 2])
}

export {
  focusNode,
  checkNode,
  getSibling,
  getMenuIndex
}
