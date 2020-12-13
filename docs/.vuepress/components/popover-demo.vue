<template>
  <div class="popover-wrapper">
    <m-popover position="bottom">
      <template slot="content">
        popover 中的内容
      </template>
      <m-button>下方显示内容</m-button>
    </m-popover>
    <m-popover>
      <template slot="content">
        popover 中的内容
      </template>
      <m-button>点击显示</m-button>
    </m-popover>
    <m-popover trigger="hover">
      <template slot="content">
        popover 中的内容
      </template>
      <m-button>hover 显示内容</m-button>
    </m-popover>
  </div>
</template>

<script>
  import Popover from '../../../src/popover'
  import Button from '../../../src/button'

  export default {
    components:{
      'm-popover':Popover,
      'm-button': Button
    }
  }
</script>

<style lang="scss" scoped>

</style>