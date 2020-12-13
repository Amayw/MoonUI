<template>
  <div class="input-wrapper">
    <m-input v-model="value"></m-input>
    <br>
    value:{{value}}
  </div>
</template>

<script>
  import Input from '../../../src/input'

  export default {
    components:{
      'm-input':Input
    },
    data(){
      return{
        value:'双向绑定'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";
.input-wrapper{
  padding-top: $wrapper-top;
  >.m-wrapper{
    margin-bottom: 8px;
  }
}
</style>
