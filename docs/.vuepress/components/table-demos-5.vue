/**
* @create-date :2019-Mar-Tuesday-7:43 PM
* @author : fangXinRui
*/
<template>
  <ash-table :columns="columns" :dataSource="dataSource" :selectedItems.sync="selectedItems" :orderBy.sync="orderBy" :height="400" bordered>
  </ash-table>
</template>

<script>
  import table from '../../../src/table'

  export default {
    name: 'table-demos-1',
    components: {
      'ash-table': table
    },
    data() {
      return {
        columns: [
          {text: '姓名', field: 'name',width:100},
          {text: '分数', field: 'score'}
        ],
        dataSource: [
          {id: 1, name: 'bibi', score: 99},
          {id: 2, name: '小张', score: 23},
          {id: 3, name: '小王', score: 44},
          {id: 4, name: '孙哥', score: 43},
          {id: 5, name: '卡哥', score: 64},
          {id: 6, name: '牛哥', score: 83},
          {id: 7, name: '屁屁', score: 100},
          {id: 8, name: '卡哥', score: 64},
          {id: 9, name: '牛哥', score: 83},
          {id: 10,name: '屁屁', score: 100},
          {id: 11,name: '卡哥', score: 64},
          {id: 12,name: '牛哥', score: 83},
          {id: 13,name: '屁屁', score: 100},
          {id: 14,name: '卡哥', score: 64},
          {id: 15,name: '牛哥', score: 83},
          {id: 16,name: '牛哥', score: 83},
          {id: 17,name: '牛哥', score: 83},
          {id: 18,name: '牛哥', score: 83},
          {id: 19,name: '牛哥', score: 83},
          {id: 20,name: '牛哥', score: 83},
          {id: 21,name: '屁屁', score: 100}
        ],
        selectedItems: [],
        orderBy: {
          score: 'desc',
          name: true
        }
      }
    },
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
