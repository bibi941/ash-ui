<template>
  <div style="padding: 100px">
    <ash-table
      :columns="columns"
      :dataSource="dataSource"
      :height="800">
    </ash-table>
  </div>
</template>

<script>
  import table from './table'

  export default {
    name: 'app',
    components: {
      'ash-table': table

    },
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
          {id: 1, param: 'size', description: '尺寸', type: 'String', optional: 'medium/small/mini', default: '—'},
          {id: 2, param: 'size', description: '尺寸', type: 'String', optional: 'medium/small/mini', default: '—'},
          {id: 3, param: 'size', description: '尺寸', type: 'String', optional: 'medium/small/mini', default: '—'},
          {id: 4, param: 'size', description: '尺寸', type: 'String', optional: 'medium/small/mini', default: '—'},
          {id: 5, param: 'size', description: '尺寸', type: 'String', optional: 'medium/small/mini', default: '—'},
          {id: 6, param: 'size', description: '尺寸', type: 'String', optional: 'medium/small/mini', default: '—'},
          {id: 7, param: 'size', description: '尺寸', type: 'String', optional: 'medium/small/mini', default: '—'},
          {id: 8, param: 'size', description: '尺寸', type: 'String', optional: 'medium/small/mini', default: '—'},
        ],
        selectedItems: [],
        orderBy: {
          score: 'desc',
          name: true
        }
      }
    },
    methods: {},
    created() {
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

</style>
