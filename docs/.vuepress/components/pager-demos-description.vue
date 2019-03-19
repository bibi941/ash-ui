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
    name: 'button-demos-description',
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
          {id: 1, param: 'totalPage', description: '总页数', type: 'Number', optional: '—', default: '—'},
          {id: 2, param: 'currentPage', description: '当前页', type: 'Number', optional: '—', default: '—'},
          {id: 3, param: 'hideIfOnePage', description: '只有一页是否隐藏分页器', type: 'Boolean', optional: '—', default: 'true'},
        ],
        selectedItems: [],
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
