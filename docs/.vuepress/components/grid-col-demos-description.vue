/**
* @create-date :2019-Mar-Monday-1:15 AM
* @author : fangXinRui
*/
<template>
  <ash-table
    :columns="columns"
    :dataSource="dataSource"
    :selectedItems.sync="selectedItems">
  </ash-table>
</template>

<script>
  import ashTable from '../../../src/table'

  export default {
    name: 'grid-demos-description',
    components: {ashTable},
    data() {
      return {
        columns: [
          {text: '参数', field: 'param'},
          {text: '说明', field: 'description'},
          {text: '类型', field: 'type'},
          {text: '可选值', field: 'optional'},
          {text: '默认值', field: 'default'}
        ],
        dataSource: [
          {id: 1, param: 'span', description: '栅格占据的列数', type: 'Number / String', optional: '—', default: '24'},
          {id: 2, param: 'offset', description: '栅格左侧的间隔格数', type: 'Number / String', optional: '—', default: '0'},
          {id: 3, param: 'ipad', description: 'ipad响应式栅格数或者栅格属性对象', type: 'Object', optional: '—', default: '—'},
          {id: 4, param: 'notebook', description: 'notebook响应式栅格数或者栅格属性对象', type: 'Object', optional: '—', default: '—'},
          {id: 5, param: 'pc', description: 'pc响应式栅格数或者栅格属性对象', type: 'Object', optional: '—', default: '—'},
          {id: 6, param: 'pc2k', description: 'pc-2k响应式栅格数或者栅格属性对象', type: 'Object', optional: '—', default: '—'},
          {id: 7, param: 'pc4k', description: 'pc-4k响应式栅格数或者栅格属性对象', type: 'Object', optional: '—', default: '—'}
        ],
        selectedItems: [],
        orderBy: {
          score: 'desc',
          name: true
        }
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
