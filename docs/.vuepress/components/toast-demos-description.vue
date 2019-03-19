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
          {id: 1, param: 'autoClose', description: '自动关闭', type: 'Boolean / Number', optional: '—', default: '3'},
          {id: 2, param: 'position', description: '弹出位置', type: 'String', optional: 'top / middle / bottom', default: 'top'},
          {id: 3, param: 'closeButton', description: '是否可关闭(可携带callback)', type: 'Object', optional: '—', default: '—'},
          {id: 4, param: 'enableHtml', description: '是否可清空', type: 'Boolean', optional: '—', default: 'false'},
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
