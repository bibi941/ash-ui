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
          {id: 1, param: 'columns', description: '表头内容,', type: "Array{text:' ', field:'',width:''},", optional: '—', default: '—'},
          {id: 2, param: 'dataSource', description: '数据源,对应表头内容', type: 'Array', optional: '—', default: '—'},
          {id: 3, param: 'orderBy', description: '排序顺序', type: 'Object', optional: '—', default: '—'},
          {id: 4, param: 'selectedItems', description: '所有选中的表格', type: 'Array', optional: '—', default: '—'},
          {id: 5, param: 'numberVisible', description: '是否现实 order', type: 'Boolean', optional: '—', default: 'false'},
          {id: 6, param: 'bordered', description: '是否带边框', type: 'Boolean', optional: '—', default: 'false'},
          {id: 7, param: 'compact', description: '是否为紧凑型', type: 'Boolean', optional: '—', default: 'false'},
          {id: 8, param: 'striped', description: '', type: 'Boolean', optional: '—', default: 'false'},
          {id: 9, param: 'loading', description: '', type: 'Boolean', optional: '—', default: 'false'},
          {id: 10, param: 'height', description: '表格高度(固定表头)', type: 'Number', optional: '—', default: '—'},
          {id: 11, param: 'checkAble', description: '是否展示多选', type: 'Boolean', optional: '—', default: 'false'},
          {id: 12, param: 'expendField', description: '展开列的 data 描述的 key', type: 'String', optional: '—', default: '—'},
        ],
        selectedItems: [],
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
