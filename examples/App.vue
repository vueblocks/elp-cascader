<template>
  <div id="app">
    <cascader :props="props" :options="options" filterable clearable />
    <cascader-panel
        :options="options"
        :props="props"
        style="margin: 200px 0"
    />
  </div>
</template>

<script>
import Mock from 'mockjs'
import ElpCascader from 'elp-cascader/packages'
// import { CascaderPanel } from 'element-ui'

const { Cascader, CascaderPanel } = ElpCascader

export default {
  name: 'APP',
  components: { Cascader, CascaderPanel },
  filters: {},
  mixins: [],
  props: {},
  data () {
    console.log('Mock Start')
    console.time('MockStart')
    const _mock = Mock.mock({
      'array|1000': [
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
    console.timeEnd('MockStart')
    console.log(_mock.array)
    return {
      value: [],
      options: _mock.array,
      props: {
        checkStrictly: true,
        expandTrigger: 'hover'
      }
    }
  }
}
</script>

<style>
#app {
  display: grid;
  place-items: flex-start;
  margin: 60px;
}
</style>

