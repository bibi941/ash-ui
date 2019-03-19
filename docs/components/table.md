# Table(表格)
用于展示多条结构类似的数据

###  基础用法
 <br/>
 
<ClientOnly>
  <table-demos-1></table-demos-1>
</ClientOnly>

```html
<ash-table :columns="columns" :dataSource="dataSource" :selectedItems.sync="selectedItems"> </ash-table>
```

```js
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
```
</br>



###  带斑马纹和边框的表格
 <br/>
 
<ClientOnly>
  <table-demos-2></table-demos-2>
</ClientOnly>

```html
<ash-table :columns="columns" :dataSource="dataSource" :selectedItems.sync="selectedItems" striped bordered>
</ash-table>
```

```js
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
```
</br>



###  紧凑形表格
 <br/>

<ClientOnly>
  <table-demos-3></table-demos-3>
</ClientOnly>

```html
<ash-table :columns="columns" :dataSource="dataSource" :selectedItems.sync="selectedItems" compact bordered>
</ash-table>
```

```js
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
```
</br>

###  多选表格
 <br/>

<ClientOnly>
  <table-demos-4></table-demos-4>
</ClientOnly>

```html
    <ash-table :columns="columns" :dataSource="dataSource" :selectedItems.sync="selectedItems" bordered  checkAble></ash-table>
```

```js
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
```
</br>

###  固定表头
 <br/>

<ClientOnly>
  <table-demos-5></table-demos-5>
</ClientOnly>

```html
<ash-table :columns="columns" :dataSource="dataSource" :selectedItems.sync="selectedItems" :orderBy.sync="orderBy" :height="400" bordered>
</ash-table>
```

```js
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
```
</br>

###  可展开
 <br/>

<ClientOnly>
  <table-demos-6></table-demos-6>
</ClientOnly>

```html
<ash-table :columns="columns" :dataSource="dataSource" :selectedItems.sync="selectedItems" expend-field="description" bordered >
</ash-table>
```

```js
data() {
return {
  columns: [
    {text: '姓名', field: 'name',width:100},
    {text: '分数', field: 'score'}
  ],
  dataSource: [
    {id: 1, name: 'bibi', score: 99,description:'恭喜你获得马拉松冠军'},
    {id: 2, name: '小张', score: 23,description:'恭喜你获得二等奖'},
    {id: 3, name: '小王', score: 44},
    {id: 4, name: '孙哥', score: 43},
    {id: 5, name: '卡哥', score: 64},
    {id: 6, name: '牛哥', score: 83},
  ],
  selectedItems: [],
  }
},
```
</br>

###  携带 Action
 <br/>

<ClientOnly>
  <table-demos-7></table-demos-7>
</ClientOnly>

```html
<ash-table :columns="columns" :dataSource="dataSource" :selectedItems.sync="selectedItems" bordered> 
  <template slot-scope="aaa">
      <button>确定</button>
      <button>删除</button>
  </template>
</ash-table>
```

```js
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
  ],
  selectedItems: [],
  }
},
```
</br>

###  Loading 状态
 <br/>
 
<ClientOnly>
  <table-demos-8></table-demos-8>
</ClientOnly>

```html
<ash-table :columns="columns" :dataSource="dataSource" loading border> </ash-table>
```

```js
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
    }
  }
```
</br>

### Attributes
<br/>
<ClientOnly>
  <table-demos-description></table-demos-description>
</ClientOnly>
