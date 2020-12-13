---
title: 'Layout - 布局'
---
# 布局
## 预览
&nbsp;
<ClientOnly>
    <layout-demo></layout-demo>
</ClientOnly>
## 使用方法
```vue
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
<style lang="scss" scoped>
  $background: #6495ed;
  $font-color: white;
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
```

## 选项
提供基础布局，样式自定义。
### 组件概述
- <span style='color:#8397dc;background-color:#F8F8F8'> m-layout </span>：布局容器，其下可嵌套 Header Aside Content Footer 或 Layout 本身，可以放在任何父容器中。

- <span style='color:#8397dc;background-color:#F8F8F8'> m-header </span>：顶部布局，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#8397dc;background-color:#F8F8F8'> m-aside </span>：侧边栏，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#8397dc;background-color:#F8F8F8'> m-content </span>：内容部分，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#8397dc;background-color:#F8F8F8'> m-footer </span>：底部布局，其下可嵌套任何元素，只能放在 Layout 中。

