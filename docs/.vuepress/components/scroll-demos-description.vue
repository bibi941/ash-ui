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
          {id: 1, param: 'height', description: 'scroll组件高度', type: ' Number', optional: '—', default: '—'},
          {id: 2, param: 'width', description: 'scroll组件宽度', type: 'Number', optional: '', default: '—'},
          {id: 2, param: 'scrollVisibleWhenMouseEnter', description: '鼠标移开是否隐藏滚动条。', type: 'Boolean', optional: '—', default: 'false'},
          {id: 2, param: 'borderVisible', description: '外边框是否可见', type: 'Boolean', optional: '—', default: 'true'},
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
