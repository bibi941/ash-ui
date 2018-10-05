<!--suppress ALL -->
<template>
  <div class="col" :class="propsClass" :style="propStyle">
    <slot></slot>
  </div>
</template>

<script>
  let validator = (val) => {
    let keys = Object.keys(val);
    let valid = true;
    keys.map(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false;
      }
    });
    return valid;
  };
  export default {
    name: 'ash-col',
    props: {
      span: {type: [Number, String]},
      offset: {type: [Number, String]},
      phone: {type: Object, validator},
      ipad: {type: Object, validator},
      notebook: {type: Object, validator},
      pc2k: {type: Object, validator},
      pc4k: {type: Object, validator}
    },
    computed: {
      propStyle () {
        return {
          paddingLeft: this.gutter / 2 + `px`,
          paddingRight: this.gutter / 2 + `px`
        };
      },
      propsClass () {
        let {span, offset, phone, ipad, notebook, pc2k, pc4k} = this;
        return [
          span && `span-${span}`,
          offset && `offset-${offset}`,
          ... (phone ? [`phone-span-${phone.span}`] : []),
          ... (ipad ? [`ipad-span-${ipad.span}`] : []),
          ... (notebook ? [`notebook-span-${notebook.span}`] : []),
          ... (pc2k ? [`pc2k-span-${pc2k.span}`] : []),
          ... (pc4k ? [`pc4kpan-${pc4k.span}`] : [])
        ];
      }
    },
    data () {
      return {
        gutter: 0
      };
    }
  };
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
    @media (max-width: 576px) {
      $class-prefix: phone-span-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: phone-offset-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 577px)  {
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
    @media (min-width: 769px)  {
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
    @media (min-width: 1201px)  {
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
