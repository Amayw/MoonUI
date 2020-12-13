<template>
  <div class="response-wrapper">
    <m-row class="row">
      <m-col class="item"
             span="24"
             :pad="{span:8}"
             :narrow-pc="{span:4}"
             :pc="{span: 2}"
             :wide-pc="{span:1}"
      >
        col
      </m-col>
      <m-col class="item"
             span="24"
             :ipad="{span:16}"
             :narrow-pc="{span:20}"
             :pc="{span: 20,offset:2}"
             :wide-pc="{span:21}"
      >
        col
      </m-col>
    </m-row>
  </div>
</template>


<script>
  import Col from '../../../src/col'
  import Row from '../../../src/row'

  export default {
    components: {
      'm-col': Col,
      'm-row': Row
    },
  }
</script>


<style lang="scss" scoped>
  @import "../styles/helper";
  .response-wrapper { padding-top: $wrapper-top;
    > .m-row {padding: .2em;
      > .item { text-align: center; color: $font-color;background: $background;
      }
    }
  }
</style>
