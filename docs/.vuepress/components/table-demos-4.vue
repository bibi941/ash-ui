/**
* @create-date :2019-Mar-Tuesday-7:43 PM
* @author : fangXinRui
*/
<template>
  <ash-table :columns="columns" :dataSource="dataSource" :selectedItems.sync="selectedItems" bordered checkAble></ash-table>
</template>

<script>
  import table from '../../../src/table'

  export default {
    name: 'table-demos-1',
    components: {
      'ash-table': table
    },
    data () {
      return{
        columns: [
          {text: '姓名', field: 'name',width:100},
          {text: '分数', field: 'score'},
          {text: '地址', field: 'address'}
        ],
        dataSource: [
          {id: 1, name: 'bibi', score: 99,address:'上海市普陀区金沙江路 1518 弄'},
          {id: 2, name: '小张', score: 23,address:'上海市普陀区金沙江路 1518 弄'},
          {id: 3, name: '小王', score: 44,address:'上海市普陀区金沙江路 1518 弄'},
          {id: 4, name: '孙哥', score: 43,address:'上海市普陀区金沙江路 1518 弄'},
          {id: 5, name: '卡哥', score: 64,address:'上海市普陀区金沙江路 1518 弄'},
          {id: 6, name: '牛哥', score: 83,address:'上海市普陀区金沙江路 1518 弄'},
          {id: 7, name: '屁屁', score: 100,address:'上海市普陀区金沙江路 1518 弄'},
        ],
        selectedItems: [],
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
