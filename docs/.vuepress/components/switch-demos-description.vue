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
          {id: 1, param: 'value', description: '绑定值', type: 'Boolean', optional: '—', default: 'false'},
          {id: 2, param: 'width', description: 'switch的宽度', type: 'String', optional: '—', default: '40px'},
          {id: 3, param: 'falseText', description: '错误的文字提示', type: 'String', optional: '—', default: '—'},
          {id: 4, param: 'trueText', description: '正确的文字提示', type: 'String', optional: '—', default: '—'},
          {id: 4, param: 'disabled', description: '是否禁用', type: 'Boolean', optional: '—', default: 'false'},
          {id: 5, param: 'falseColor', description: '正确的 switch 的 color', type: 'String', optional: '—', default: '—'},
          {id: 6, param: 'trueColor', description: ' 错误的 switch 的 color', type: 'String', optional: '—', default: '—'},
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
