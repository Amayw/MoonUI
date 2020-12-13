<template>
  <div class="input-wrapper">
    <m-input value="请输入"></m-input>
    <m-input value="请输入" disabled></m-input>
    <m-input value="请输入" readonly></m-input>
    <m-input value="请输入" tip="正确信息"></m-input>
    <m-input value="请输入" error="错误信息"></m-input>
    <br>
    <m-input v-model:value="value"></m-input>
    <br>
    <span>value: {{value}}</span>
  </div>
</template>

<script>
  import Input from '../../../src/input'

  export default {
    data(){
      return{
        value:'双向绑定'
      }
    },
    components: { 'm-input': Input }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";

  .input-wrapper {
    padding-top: $wrapper-top;
    >.m-wrapper{
      margin-bottom: 8px;
    }
  }
</style>
