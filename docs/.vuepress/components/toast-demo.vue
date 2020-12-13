<template>
  <div class="wrapper">
    <m-button @click="auto">设置自动关闭时间</m-button>&nbsp;&nbsp;
    <m-button @click="closeButton">点击按钮可提前关闭</m-button>&nbsp;&nbsp;
    <m-button @click="supportHtml">支持 HTML 语法</m-button>&nbsp;&nbsp;
    <br>
    <m-button @click="top">上方弹出</m-button>
    <m-button @click="middle">中间弹出</m-button>
    <m-button @click="bottom" zIndex>下方弹出</m-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Toast from '../../../src/toast'
  import Button from '../../../src/button'
  import plugin from '../../../src/ToastPlugin'

  Vue.use(plugin)
  export default {
    components: {'m-toast': Toast, 'm-button': Button},
    methods: {
      auto() {
        this.$toast('我是 toast 内容', {
          zIndex:30,
          autoClose: 2,
        })
      },
      closeButton(){
        this.$toast('我是 toast 内容', {
          zIndex:30,
          closeButton: {
            text:'关闭',
            callback:()=>{
              console.log('回调的输出')
            }
          }
        })
      },
      supportHtml(){
        this.$toast(`<strong>使用strong标签加粗的 toast</strong>`, {
          zIndex:30,
          enableHtml:true
        })
      },
      top(){
        this.$toast('我是 toast 内容', {
          position: 'top',
          zIndex:30,
          closeButton: {
            text:'关闭',
            callback:()=>{
              console.log('回调的输出')
            }
          }})
      },
      middle(){
        this.$toast('我是 toast 内容', {
          position: 'middle',
          zIndex:30,
          closeButton: {
            text:'关闭',
            callback:()=>{
              console.log('回调的输出')
            }
          }})
      },
      bottom(){
        this.$toast('我是 toast 内容', {
          position: 'bottom',
          zIndex:30,
          closeButton: {
            text:'关闭',
            callback:()=>{
              console.log('回调的输出')
            }
          }})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";
  .wrapper{
    padding-top: $wrapper-top;
    >.m-button{
      margin-bottom: 8px;
    }
  }
</style>
