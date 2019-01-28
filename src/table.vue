/**
* @create-date :2019-Jan-Thursday-10:19 PM
* @author : fangXinRui
*/
<template>
  <div class="ash-table-wrapper">
    <table class="ash-table" :class="{bordered,compact,striped}">
      <thead>
      <tr>
        <th>
          <input type="checkbox"
            :checked="areAllItemsSelected"
            @change="onchangeAllItems"
            ref="allChecked">
        </th>
        <th v-if="numberVisible">Order</th>
        <th v-for="column in columns" :key="column.field">
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
        <td>
          <input type="checkbox"
            :checked="inSelectedItems(item)"
            @change="onChangeItem(item,index,$event)">
        </td>
        <td v-if="numberVisible">{{index+1}}</td>
        <td v-for="column in columns" :key="column.field"> {{item[column.field]}}</td>
      </tr>
      </tbody>
    </table>
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
      }
    },
    data() {
      return {}
    },
    created() {
    },
    mounted() {
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
  }
</style>
