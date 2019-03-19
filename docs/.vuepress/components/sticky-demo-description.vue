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
          {id: 1, param: 'distance', description: '距离顶部粘滞的距离', type: 'Number', optional: '—', default: '—'},
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
