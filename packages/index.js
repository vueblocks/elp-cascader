// 全量注册组件

import Cascader from './cascader'
import CascaderPanel from './cascader-panel'

const components = [
  Cascader,
  CascaderPanel
]

const install = Vue => {
  if (install.installed) return

  components.forEach(Component => {
    Vue.component(Component.name, Component)
  })
}

//  如果浏览器环境且拥有全局Vue，则自动安装组件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Cascader,
  CascaderPanel
}
