<template>
  <div>
    <ash-cascader :source.sync="source" :selected.sync="selected"></ash-cascader>
  </div>
</template>

<script>
  import ashCascader from '../../../src/cascader/cascader'

  export default {
    name: 'cascader-demos-1',
    components: {
      'ash-cascader': ashCascader
    },
    data() {
      return {
        selected: [],
        source: [
          {
            name: '四川',
            children: [
              {
                name: '成都',
                children: [{name: '高新区'}, {name: '天府新区'}, {name: '武侯区'}]
              },
              {
                name: '乐山',
                children: [{name: '峨眉'}, {name: '夹江'}, {name: '五通桥'}]
              }
            ]
          },
          {
            name: '福建',
            children: [
              {
                name: '福州',
                children: [{name: '鼓楼'}, {name: '台江'}, {name: '仓山'}]
              }
            ]
          },
          {
            name: '安徽',
            children: [
              {
                name: '合肥',
                children: [
                  {name: '瑶海'}, {name: '庐阳'}
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">

</style>
