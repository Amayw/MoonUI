<template>
  <div>
    <m-button @click="auto">设置 zIndex</m-button>&nbsp;&nbsp;
    <m-button @click="auto">会自动关闭</m-button>&nbsp;&nbsp;
    <m-button @click="auto">点击按钮才关闭</m-button>&nbsp;&nbsp;
    <m-button @click="auto">支持 HTML 语法</m-button>&nbsp;&nbsp;
    <br>
    <m-button @click="top">上方弹出</m-button>
    <m-button @click="middle">中间弹出</m-button>
    <m-button @click="bottom">下方弹出</m-button>
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
          autoClose: 5,
          closeButton: {
          text:'确定',
            callback:()=>{
            console.log('回调的输出')
            }
          },
          enableHTML:true
        })
      },
      top(){
        this.$toast('我是 toast 内容', { position: 'top' })
      },
      middle(){
        this.$toast('我是 toast 内容', { position: 'middle' })
      },
      bottom(){
        this.$toast('我是 toast 内容', { position: 'bottom' })
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>