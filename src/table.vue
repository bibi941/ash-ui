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
          <th class="ash-table-center" v-if="expendField"></th>
          <th class="ash-table-center" v-if="checkAble"><input type="checkbox" :checked="areAllItemsSelected" @change="onchangeAllItems" ref="allChecked"></th>
          <th class="ash-table-center" v-if="numberVisible">Order</th>
          <th :style="{width:column.width+'px'}" v-for="column in columns" :key="column.field">
            <div class="ash-table-header">
              {{column.text}}
              <span class="ash-table-sort" v-if="column.field in orderBy" @click="changeOrderBy(column.field)">
              <ash-icon name="asc" :class="{active:orderBy[column.field]==='asc'}"></ash-icon>
              <ash-icon name="desc" :class="{active:orderBy[column.field]==='desc'}"></ash-icon>
            </span>
            </div>
          </th>
          <th v-if="$scopedSlots.default" ref="actionsHeader"></th>
        </tr>
        </thead>
        <tbody>
        <template v-for="(item,index) in dataSource">
          <tr :key="item.id">
            <td class="ash-table-center ash-table-icon" :class="{active:inExpendIdList(item.id)}" v-if="expendField" @click="expendItem(item.id)">
              <ash-icon name="right"></ash-icon>
            </td>
            <td class="ash-table-center" v-if="checkAble"><input type="checkbox" :checked="inSelectedItems(item)" @change="onChangeItem(item,index,$event)"></td>
            <td class="ash-table-center" v-if="numberVisible">{{index+1}}</td>
            <td :style="{width:column.width+'px'}" v-for="column in columns" :key="column.field"> {{item[column.field]}}</td>
            <td v-if="$scopedSlots.default">
              <div ref="actions" style="display: inline-block">
                <slot :item="item"></slot>
              </div>
            </td>
          </tr>
          <tr v-if="inExpendIdList(item.id)" :key="`${item.id}-expend`">
            <td :colspan="columns.length+expendCellColSpan">{{item[expendField]||'空'}}</td>
          </tr>
        </template>
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
        default: false
      },
      loading: {  //加载中
        type: Boolean,
        default: false
      },
      height: {  //固定表头-高度
        type: Number
      },
      checkAble: {
        type: Boolean,
        default: false
      },
      expendField: {
        type: String  //展开列的 data 描述的 key
      }
    },
    data() {
      return {
        expendIdList: []
      }
    },
    created() {
    },
    mounted() {
      // fixme 固定表头高度计算有误
      this.height && this.moveTheadToOtherTableAndComputeHeight()  //固定表头
      let ifScopedSlots = Object.keys(this.$scopedSlots).length
      ifScopedSlots > 0 && this.computeActionsRelatedWidth()  //计算 action 的宽度
    },
    beforeDestroy() {
      if(this.height){this.tableCopy.remove()}  //固定表头
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
      },
      expendCellColSpan() {
        let result = 0
        if (this.checkAble) {
          result += 1
        }
        if (this.expendField) {
          result += 1
        }
        if (this.numberVisible) {
          result += 1
        }
        return result
      }
    },
    watch: {
      selectedItems() {
        this.$refs.allChecked.indeterminate = this.selectedItems.length !== this.dataSource.length && this.selectedItems.length !== 0
      }
    },
    methods: {
      computeActionsRelatedWidth() {
        let div = this.$refs.actions[0]
        let styleList = getComputedStyle(div.parentNode)
        let paddingLeft = styleList.getPropertyValue('padding-left')
        let paddingRight = styleList.getPropertyValue('padding-right')
        let borderLeft = styleList.getPropertyValue('border-left')
        let borderRight = styleList.getPropertyValue('border-right')
        let {width} = div.getBoundingClientRect()
        let width2 = width + parseInt(paddingLeft) + parseInt(paddingRight) + parseInt(borderLeft) + parseInt(borderLeft) + 'px'
        // todo 滚动条宽度无法计算
        this.$refs.actionsHeader.style.width = parseInt(width2) + 15 + 'px'
        this.$refs.actions.map(div => {
          div.parentNode.style.width = width2
        })
      },
      expendItem(id) {
        if (this.inExpendIdList(id)) {
          this.expendIdList.splice(this.expendIdList.indexOf(id), 1)
        } else {
          this.expendIdList.push(id)
        }
      },
      inExpendIdList(id) {
        return this.expendIdList.includes(id)
      },
      moveTheadToOtherTableAndComputeHeight() {
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
    & &-center {
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

  .ash-table-icon {
    &.active {
      transform: rotate(90deg);
    }
    transition: transform .3s;
    width: 10px;
    height: 10px;
    fill: $grey-lv4;
    cursor: pointer;
  }
</style>
