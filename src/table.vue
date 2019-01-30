/**
* @create-date :2019-Jan-Thursday-10:19 PM
* @author : fangXinRui
*/
<template>
  <div class="ash-table-wrapper" ref="wrapper">
    <div :style="{height:height+'px',overflow:'auto'}" ref="tableWrapper">
      <table class="ash-table" :class="{bordered,compact,striped}" ref="table">
        <thead>
        <tr>
          <th class="ash-table-fix"><input type="checkbox" :checked="areAllItemsSelected" @change="onchangeAllItems" ref="allChecked"></th>
          <th class="ash-table-fix" v-if="numberVisible">Order</th>
          <th :style="{width:column.width+'px'}" v-for="column in columns" :key="column.field">
            <div class="ash-table-header">
              {{column.text}}
              <span class="ash-table-sort" v-if="column.field in orderBy" @click="changeOrderBy(column.field)">
              <ash-icon name="asc" :class="{active:orderBy[column.field]==='asc'}"></ash-icon>
              <ash-icon name="desc" :class="{active:orderBy[column.field]==='desc'}"></ash-icon>
            </span>
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in dataSource" :key="item.id">
          <td class="ash-table-fix"><input type="checkbox" :checked="inSelectedItems(item)" @change="onChangeItem(item,index,$event)"></td>
          <td class="ash-table-fix" v-if="numberVisible">{{index+1}}</td>
          <td :style="{width:column.width+'px'}" v-for="column in columns" :key="column.field"> {{item[column.field]}}</td>
        </tr>
        </tbody>
      </table>
      <div class="ash-table-loading" v-if="loading">
        <ash-icon name="loading1"></ash-icon>
      </div>
    </div>
  </div>
</template>

<script>
  import ashIcon from './icon'

  export default {
    name: 'ash-table',
    components: {ashIcon},
    props: {
      columns: {
        type: Array,
        required: true
      },
      dataSource: {
        type: Array,
        required: true,
        validator(array) {
          return !array.filter(i => i.id === undefined).length > 0
        }
      },
      orderBy: {  //排序顺序-true 开启排序不确认是 asc 还是 desc
        type: Object,
        default: () => ({})
      },
      selectedItems: {  //选中项
        type: Array,
        default: () => []
      },
      numberVisible: {  //显示 order
        type: Boolean,
        default: false
      },
      bordered: {  //带边框
        type: Boolean,
        default: false
      },
      compact: {  //紧凑
        type: Boolean,
        default: false
      },
      striped: {  //斑马纹
        type: Boolean,
        default: true
      },
      loading: {  //加载中
        type: Boolean,
        default: false
      },
      height: {  //固定表头-高度
        type: Number
      }
    },
    data() {
      return {}
    },
    created() {
    },
    mounted() {
      this.height && this.moveTheadAndComputeHeight()  //固定表头
    },
    beforeDestroy() {
      this.tableCopy.remove()
    },
    computed: {
      areAllItemsSelected() {
        let a = this.selectedItems.map(item => item.id).sort()
        let b = this.dataSource.map(item => item.id).sort()
        if (a.length !== b.length) {
          return false
        }
        let equal = true
        for (let i = 0; i < b.length; i++) {
          if (a[i] !== b[i]) {
            equal = false
            break
          }
        }
        return equal
      }
    },
    watch: {
      selectedItems() {
        this.$refs.allChecked.indeterminate = this.selectedItems.length !== this.dataSource.length && this.selectedItems.length !== 0
      }
    },
    methods: {
      moveTheadAndComputeHeight() {
        let table = this.$refs.table
        let tableCopy = table.cloneNode(false)
        let tableHead = table.querySelector('thead')
        let {height} = tableHead.getBoundingClientRect()
        this.tableCopy = tableCopy
        tableCopy.classList.add('ash-table-copy')
        this.$refs.tableWrapper.style.marginTop = height + 'px'
        this.$refs.tableWrapper.style.height = this.height - height + 'px'
        tableCopy.appendChild(tableHead)
        this.$refs.wrapper.appendChild(tableCopy)
      },
      changeOrderBy(key) {
        let copy = JSON.parse(JSON.stringify(this.orderBy))
        let oldValue = copy[key]
        if (oldValue === 'asc') {
          copy[key] = 'desc'
        } else if (oldValue === 'desc') {
          copy[key] = true
        } else {
          copy[key] = 'asc'
        }
        this.$emit('update:orderBy', copy)
      },
      inSelectedItems(item) {
        return this.selectedItems.filter(e => e.id === item.id).length > 0
      },
      onChangeItem(item, index, e) {
        let selected = e.target.checked
        let copy = JSON.parse(JSON.stringify(this.selectedItems))
        if (selected) {
          copy.push(item)
        } else {
          copy = copy.filter(i => i.id !== item.id)
        }
        this.$emit('update:selectedItems', copy)
      },
      onchangeAllItems(e) {
        let selected = e.target.checked
        this.$emit('update:selectedItems', selected ? this.dataSource : [])
      }
    }
  }
</script>

<style scoped lang='scss' type="text/scss">
  @import "var";

  .ash-table-wrapper {
    position: relative;
    overflow: hidden;
  }

  .ash-table {
    &.bordered {
      border: 1px solid $grey-lv2;
      td, th {
        border: 1px solid $grey-lv2;
      }
    }
    &.compact {
      td, th {
        padding: 4px;
      }
    }
    color: $grey-lv5;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid $grey-lv2;
    td, th {
      border-bottom: 1px solid $grey-lv2;
      text-align: left;
      padding: 8px;
    }
    &.striped {
      tbody {
        > tr {
          &:nth-child(odd) {
            background: $white;
          }
          &:nth-child(even) {
            background: $grey-lv0;
          }
        }
      }

    }
    &-sort {
      display: inline-flex;
      flex-direction: column;
      cursor: pointer;
      svg {
        width: 10px;
        height: 10px;
        fill: $grey-lv2;
        &.active {
          fill: $purple-lv2;
        }
      }
    }
    &-header {
      display: flex;
      align-items: center;
    }
    &-loading {
      background: rgba(255, 255, 255, 0.7);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 40px;
        height: 40px;
        fill: $grey-lv5;
        @include spin
      }
    }
    & &-fix {
      width: 50px;
      text-align: center;
    }
  }

  .ash-table-copy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: $white;
  }
</style>
