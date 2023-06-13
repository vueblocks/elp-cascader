## [0.2.1](https://github.com/vueblocks/elp-cascader/compare/v0.2.0...v0.2.1) (2023-06-13)


### Bug Fixes

* 首层搜索节点无法选中 ([77ae674](https://github.com/vueblocks/elp-cascader/commit/77ae674ef03d0d8d40097b8b2f68f33efd3bbc46))


### Features

* 新增初级远程搜索功能 ([f01fb3d](https://github.com/vueblocks/elp-cascader/commit/f01fb3d43c02fac17b700b56390194276679f70e))



# [0.2.0](https://github.com/vueblocks/elp-cascader/compare/v0.1.10...v0.2.0) (2023-06-12)


### Features

* 新增属性panelPlaceholder用于定制文案 ([76d6b37](https://github.com/vueblocks/elp-cascader/commit/76d6b37cdecf4c0a6a5bf9136ebe2916525acb74))



## [0.1.10](https://github.com/vueblocks/elp-cascader/compare/v0.1.9...v0.1.10) (2021-09-26)


### Bug Fixes

* 修复懒加载情况下panel被覆盖的问题 ([10ea8db](https://github.com/vueblocks/elp-cascader/commit/10ea8dbf51536d9c65acfbbac6e33ad0cc5ea4c0))



## [0.1.9](https://github.com/vueblocks/elp-cascader/compare/v0.1.8...v0.1.9) (2021-07-16)


### Performance Improvements

* 优化节点树加载速度，添加懒加载完成事件 ([6a9f8eb](https://github.com/vueblocks/elp-cascader/commit/6a9f8eb1267583d570b62fa1d5bd5ac2fd164534))



## [0.1.8](https://github.com/vueblocks/elp-cascader/compare/v0.1.7...v0.1.8) (2021-06-30)


### Performance Improvements

* 级联面板隐藏时，移除面板内容以减少DOM存量 ([e5f9e6e](https://github.com/vueblocks/elp-cascader/commit/e5f9e6ea712d77a7a19237b94d302ae6b034baad))



## [0.1.7](https://github.com/vueblocks/elp-cascader/compare/v0.1.6...v0.1.7) (2021-06-23)


### Bug Fixes

* 修复空格搜索导致列表内容丢失以及在 lazy 模式下默认面板展开失效的问题 ([219c4b6](https://github.com/vueblocks/elp-cascader/commit/219c4b67d2597577a7635a8bc380b8511feb9af8))



## [0.1.6](https://github.com/vueblocks/elp-cascader/compare/v0.1.5...v0.1.6) (2021-06-10)


### Bug Fixes

* option包含disabled时的全选 ([916eba2](https://github.com/vueblocks/elp-cascader/commit/916eba2c739d24c254ed148573b071342b2894a4))



## [0.1.5](https://github.com/vueblocks/elp-cascader/compare/v0.1.4...v0.1.5) (2021-06-04)


### Features

* 将 panelLabels 拆分为 面板搜索（panelSearch）、选中全部（checkAll）以及面板标题（panelLabels），新增 expandPanels 默认展开面板数量功能 ([933477a](https://github.com/vueblocks/elp-cascader/commit/933477a0af6c9e3f9189ffd6964adf01079915d4))



## [0.1.4](https://github.com/vueblocks/elp-cascader/compare/v0.1.3...v0.1.4) (2021-01-11)


### Features

*  增加panelLabels用于搜索和全选 ([a6d579b](https://github.com/vueblocks/elp-cascader/commit/a6d579b639f5529f9a4a8b8bd39756664fcbdbb4))
* 新增storybook ([9333648](https://github.com/vueblocks/elp-cascader/commit/93336488f9646e31ba9a46ad46795927c5708394))



## [0.1.3](https://github.com/vueblocks/elp-cascader/compare/v0.1.2...v0.1.3) (2020-12-23)


### Bug Fixes

* 修复多选状态下，输入首个搜索词，选中内容后，搜索词会被清空的问题 ([e2d2f97](https://github.com/vueblocks/elp-cascader/commit/e2d2f97c6cf8d1d4dcc5916eb47abd1e80ba68b9))


### Features

* 新增属性lazyMultiCheck，懒加载且父子节点关联时可选择已加载出的层级，当lazy===true且checkStrictly===false时使用 ([8ea3f2c](https://github.com/vueblocks/elp-cascader/commit/8ea3f2c334fadcd7edc2fe009273fbd64211b7b5))



## [0.1.2](https://github.com/vueblocks/elp-cascader/compare/v0.1.1...v0.1.2) (2020-12-22)


### Features

* 新增属性selectWithExpand，控制单选（checkStrictly为true）时是否默认展开下一级 ([8930008](https://github.com/vueblocks/elp-cascader/commit/893000814c1cb3c9c1a61a43dca2ee0a998d6fcc))



## 0.1.1 (2020-12-10)



