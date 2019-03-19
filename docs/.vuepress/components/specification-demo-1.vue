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
    name: 'grid-demos-description',
    components: {ashTable},
    data() {
      return {
        columns: [
          {text: 'Component', field: 'param'},
          {text: 'zIndex', field: 'description'},

        ],
        dataSource: [
          {id: 1, param: 'sub-nav', description: '5'},
          {id: 2, param: 'casecader', description: '10'},
          {id: 3, param: 'popover', description: '15'},
          {id: 4, param: 'toast', description: '20'},
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
