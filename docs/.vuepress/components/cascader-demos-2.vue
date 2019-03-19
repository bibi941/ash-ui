<template>
  <div>
    <ash-cascader :source.sync="source" :selected.sync="selected" :load-data="loadData"></ash-cascader>
  </div>
</template>

<script>
  import db from '../../../tests/fixtures/db'
  import ashCascader from '../../../src/cascader/cascader'

  function ajax(parentId = 0) {
    return new Promise((resolve, reject) => {
      let result = db.filter(item => item.parent_id === parentId)
      result.forEach(node => {
        node.isLeaf = db.filter(item => item.parent_id === node.id).length <= 0
      })
      setTimeout(() => {
        resolve(result)
      }, 500)
    })
  }

  export default {
    name: 'cascader-demos-2',
    components: {
      'ash-cascader': ashCascader
    },
    data() {
      return {
        selected: [],
        source: []
      }
    },
    methods: {
      loadData({id}, upDateSource) {
        ajax(id).then(result => upDateSource(result))
      }
    },
    created() {
      ajax(0).then(res => {
        this.source = res
      })
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
