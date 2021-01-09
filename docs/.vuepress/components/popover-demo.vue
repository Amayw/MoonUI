<template>
  <div class="popover-wrapper">
    <div class="item">
      <m-popover position="left">
        <template slot="content">
          内容
        </template>
        <m-button>点击左边显示内容</m-button>
      </m-popover>
      <m-popover>
        <template slot="content">
          内容
        </template>
        <m-button>点击上方显示内容</m-button>
      </m-popover>
      <m-popover position="bottom">
        <template slot="content">
          内容
        </template>
        <m-button>点击下方显示内容</m-button>
      </m-popover>
      <m-popover position="right">
        <template slot="content">
          内容
        </template>
        <m-button>点击右边显示内容</m-button>
      </m-popover>
    </div>
    <div  class="item">
      <m-popover trigger="hover"  position="left">
        <template slot="content">
          内容
        </template>
        <m-button>hover 左边显示内容</m-button>
      </m-popover>
      <m-popover trigger="hover"  position="top">
        <template slot="content">
          内容
        </template>
        <m-button>hover 上方显示内容</m-button>
      </m-popover>
      <m-popover trigger="hover"  position="bottom">
        <template slot="content">
          内容
        </template>
        <m-button>hover 下方显示内容</m-button>
      </m-popover>
      <m-popover trigger="hover"  position="right">
        <template slot="content">
          内容
        </template>
        <m-button>hover 右边显示内容</m-button>
      </m-popover>
    </div>
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
  @import "../styles/helper";
  .popover-wrapper{
    padding-top: $wrapper-top;
    >.item{
      .m-popover{
        margin-bottom: 8px;
      }
    }
  }
</style>
