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
            :checked="allCheckedItems"
            @change="onchangeAllItems"
            ref="allChecked">
        </th>
        <th v-if="numberVisible">Order</th>
        <th v-for="column in columns">
          {{column.text}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in dataSource">
        <td>
          <input type="checkbox"
            :checked="inSelectedItems(item)"
            @change="onChangeItem(item,index,$event)">
        </td>
        <td v-if="numberVisible">{{index+1}}</td>
        <td v-for="column in columns"> {{item[column.field]}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'ash-table',
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
      allCheckedItems() {
        return this.selectedItems.length === this.dataSource.length
      }
    },
    watch: {
      selectedItems() {
        this.$refs.allChecked.indeterminate = !(this.selectedItems.length === this.dataSource.length || this.selectedItems.length === 0);
      }
    },
    methods: {
      inSelectedItems(item) {
        return this.selectedItems.filter(e => e.id === item.id).length > 0
      },
      onChangeItem(item, index, e) {
        let selected = e.target.checked
        let copy = JSON.parse(JSON.stringify(this.selectedItems))
        if (selected) {
          copy.push(item)
        } else {
          copy.splice(copy.indexOf(item), 1)
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
  }
</style>
