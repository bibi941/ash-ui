<!--suppress ALL -->
<template>
  <div class="col" :class="propsClass" :style="propStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = (val) => {
  let keys = Object.keys(val)
  let valid = true
  keys.map(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}
export default {
  name: 'ash-col',
  props: {
    span: { type: [Number, String] },
    offset: { type: [Number, String] },
    ipad: { type: Object, validator },
    notebook: { type: Object, validator },
    pc: { type: Object, validator },
    pc2k: { type: Object, validator },
    pc4k: { type: Object, validator }
  },
  methods: {
    creatClasses(obj, str = '') {
      if (!obj) {
        return []
      }
      let arr = []
      if (obj.span) {
        arr.push(`${str}span-${obj.span}`)
      }
      if (obj.offset) {
        arr.push(`${str}offset-${obj.offset}`)
      }
      return arr
    }
  },
  computed: {
    propStyle() {
      return {
        paddingLeft: this.gutter / 2 + `px`,
        paddingRight: this.gutter / 2 + `px`
      }
    },
    propsClass() {
      let { span, offset, pc, ipad, notebook, pc2k, pc4k, creatClasses } = this
      return [
        ...creatClasses({ span, offset }),
        ...creatClasses(ipad, 'ipad-'),
        ...creatClasses(notebook, 'notebook-'),
        ...creatClasses(pc, 'pc-'),
        ...creatClasses(pc2k, 'pc2k-'),
        ...creatClasses(pc4k, 'pc4k-')
      ]
    }
  },
  data() {
    return {
      gutter: 0
    }
  }
}
</script>

<style scoped lang='scss' type="text/scss">
.col {
  height: 100px;
  $class-prefix: span-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  @media (min-width: 577px) {
    $class-prefix: ipad-span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: ipad-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) {
    $class-prefix: notebook-span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: notebook-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: pc-span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: pc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: pc2k-span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: pc2k-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1601px) {
    $class-prefix: pc4k-span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: pc4k-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
