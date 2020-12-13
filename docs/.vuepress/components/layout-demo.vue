<template>
  <div class="wrapper">
    <m-layout>
      <m-header> header </m-header>
      <m-layout>
        <m-aside> aside </m-aside>
        <m-content> content </m-content>
      </m-layout>
      <m-footer> footer </m-footer>
    </m-layout>
    <br>
    <m-layout>
      <m-header> header </m-header>
      <m-content> content </m-content>
      <m-footer> footer </m-footer>
    </m-layout>
    <br>
    <m-layout>
      <m-header> header </m-header>
      <m-layout>
        <m-aside>aside </m-aside>
        <m-layout>
          <m-content> content </m-content>
          <m-footer> footer </m-footer>
        </m-layout>
      </m-layout>
    </m-layout>
  </div>
</template>

<script>
  import Layout from '../../../src/layout'
  import Header from '../../../src/header'
  import Aside from '../../../src/aside'
  import Content from '../../../src/content'
  import Footer from '../../../src/footer'

  export default {
    components: {
      'm-layout': Layout,
      'm-header': Header,
      'm-aside': Aside,
      'm-content': Content,
      'm-footer': Footer
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";

  .wrapper {
    > .m-layout { height: 30vh;color:$font-color;text-align: center;
      > .m-header { height: 3em; background: lighten($background, 5%); }
      > .m-content { background: lighten($background, 30%); }
      > .m-layout { height: 6em;
        > .m-aside{ width: 3em; background: lighten($background, 15%); }
        > .m-content { background: lighten($background, 30%); }
        > .m-layout{
          > .m-content{ background: lighten($background, 30%); }
          > .m-footer { background: $background; }
        }
      }
      > .m-footer { background: lighten($background, 5%); }
    }
  }
</style>
