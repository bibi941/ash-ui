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
          {id: 1, param: 'value', description: '绑定值', type: 'String / Date', optional: '—', default: '—'},
          {id: 2, param: 'disabled', description: '是否禁用', type: 'Boolean', optional: '—', default: 'false'},
          {id: 3, param: 'readonly', description: '是否只读', type: 'Boolean', optional: '—', default: 'false'},
          {id: 4, param: 'clearable', description: '是否可清空', type: 'Boolean', optional: '—', default: 'false'},
          {id: 5, param: 'error', description: '显示错误文本', type: 'String', optional: '-', default: '—'},
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
