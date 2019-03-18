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
          {id: 1, param: 'size', description: '尺寸', type: 'String', optional: 'medium / small / mini', default: '—'},
          {id: 2, param: 'type', description: '类型', type: 'String', optional: 'primary / success / warning / danger / default', default: 'default'},
          {id: 3, param: 'iconPosition', description: '图标位置', type: 'String', optional: 'left / right /', default: 'left'},
          {id: 4, param: 'icon', description: '图标类型', type: 'String', optional: '-', default: '—'},
          {id: 5, param: 'loading', description: '是否加载中', type: 'Boolean', optional: '-', default: 'false'},
          {id: 6, param: 'disabled', description: '是否禁用', type: 'Boolean', optional: '-', default: 'false'},
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
