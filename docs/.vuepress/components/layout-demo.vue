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
    > .layout-wrapper { height: 30vh;
      > .header-wrapper { height: 3em; background: $background; }
      > .content-wrapper { background: lighten($background, 40%); }
      > .layout-wrapper { height: 6em;
        > .aside-wrapper { width: 3em; background: lighten($background, 15%); }
        > .content-wrapper { background: lighten($background, 40%); }
        > .layout-wrapper{
          > .content-wrapper{ background: lighten($background, 40%); }
          > .footer-wrapper { background: $background; }
        }
      }
      > .footer-wrapper { background: $background; }
    }
  }
</style>