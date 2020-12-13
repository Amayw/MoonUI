<template>
  <div class="group-wrapper">
    <m-button-group>
      <m-button>默认按钮</m-button>
      <m-button>默认按钮</m-button>
      <m-button>默认按钮</m-button>
    </m-button-group>
  </div>
</template>

<script>
  import ButtonGroup from '../../../src/button-group'
  import Button from '../../../src/button'
  export default {
    components:{
      'm-button':Button,
      'm-button-group':ButtonGroup
    }
  }
</script>
<style lang="scss" scoped>
  @import "../styles/helper";
  .group-wrapper{
    padding-top: $wrapper-top;
  }
</style>