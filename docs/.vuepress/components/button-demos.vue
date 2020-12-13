<template>
  <div class="button-wrapper">
    <m-button>默认按钮</m-button>
    <m-button icon="settings">默认按钮</m-button>
    <m-button icon="thumbs-up" icon-position="right">默认按钮</m-button>
    <m-button :loading="loading" @click="loading=!loading">默认按钮</m-button>
    <m-button disabled>默认按钮</m-button>
  </div>
</template>

<script>
  import Button from '../../../src/button'

  export default {
    components: {
      'm-button': Button,
    },
    data(){
      return {
        loading:true
      }
    }
  }

</script>

<style lang="scss" scoped>
  .button-wrapper{
    padding: 0 10px;
    >.m-button{
      margin-bottom: 8px;
    }
  }
</style>
