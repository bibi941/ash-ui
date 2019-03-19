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
    name: 'input-demos-description',
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
          {id: 1, param: 'selected', description: '当前选中的数据 value 值的集合，用 .sync 绑定', type: 'Array', optional: '—', default: '—'},
          {id: 2, param: 'source', description: '数据源', type: 'Array', optional: '—', default: '—'},
          {id: 3, param: 'loadData', description: '异步加载数据的方法', type: 'Function', optional: '—', default: '—'},
          {id: 4, param: 'popoverHeight', description: '下拉框高度', type: 'popoverHeight', optional: '—', default: '160px'},
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
