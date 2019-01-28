<template>
  <div style="padding: 100px">
    <ash-table
      :columns="columns"
      :dataSource="dataSource"
      :selectedItems.sync="selectedItems"
      :orderBy.sync="orderBy"
      bordered>
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
          {text: '姓名', field: 'name'},
          {text: '分数', field: 'score'}
        ],
        dataSource: [
          {id: 1, name: 'bibi', score: 99},
          {id: 2, name: '小张', score: 23},
          {id: 3, name: '小王', score: 44},
          {id: 4, name: '孙哥', score: 43},
          {id: 5, name: '卡哥', score: 64},
          {id: 6, name: '牛哥', score: 83},
          {id: 7, name: '屁屁', score: 100}
        ],
        selectedItems: [],
        orderBy:{
          score:'desc',
          name:true
        }
      }
    },
    methods: {
    },
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
