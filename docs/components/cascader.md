# Cascader(级联选择器)

::: tip
级联选择器对数据有较严格要求，每个source为一个对象，name和children属性，子集为children，    
selected为当前选中数据value值组成的数组，比如 ['四川', '成都', '高新区'] ，按照层级次序排序，使用.sync进行绑定。
:::

###  基础用法
 <br/>
 
<ClientOnly>
  <cascader-demos-1></cascader-demos-1>
</ClientOnly>

```html
  <ash-cascader :source.sync="source" :selected.sync="selected"></ash-cascader>
```

```js
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
```

</br>

###  异步加载次级选项
 <br/>
 
 ::: tip
此处异步加载以及选项为前端模拟,后端需告是否有无子节点,请严格遵守数据结构
 :::
 
<ClientOnly>
  <cascader-demos-2></cascader-demos-2>
</ClientOnly>

```html
  <ash-cascader :source.sync="source" :selected.sync="selected" :load-data="loadData"></ash-cascader>
```

```js
methods: {
  loadData({id}, upDateSource) {//得到子节点数据后将会回调此函数
    $ajax(id).then(result => upDateSource(result))
  }
},
created() {
  $ajax(0).then(res => {  //此处为前端模拟数据第一个节点默认加载
    this.source = res
  })
}

```

### Attributes
<br/>
<ClientOnly>
  <input-demos-description></input-demos-description>
</ClientOnly>
