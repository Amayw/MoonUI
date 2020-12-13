---
title: 'Popover - 弹出层'
---
# 弹出层
## 预览
&nbsp;
<ClientOnly>
    <popover-demo></popover-demo>
</ClientOnly>
## 使用方法
```vue
<template>
  <div class="popover-wrapper">
    <div>
      <m-popover position="left">
        <template slot="content">
          popover 中的内容
        </template>
        <m-button>点击左边显示内容</m-button>
      </m-popover>
      <m-popover>
        <template slot="content">
          popover 中的内容
        </template>
        <m-button>点击上方显示内容</m-button>
      </m-popover>
      <m-popover position="bottom">
        <template slot="content">
          popover 中的内容
        </template>
        <m-button>点击下方显示内容</m-button>
      </m-popover>
      <m-popover position="right">
        <template slot="content">
          popover 中的内容
        </template>
        <m-button>点击右边显示内容</m-button>
      </m-popover>
    </div>
    <div>
      <m-popover trigger="hover"  position="left">
        <template slot="content">
          popover 中的内容
        </template>
        <m-button>hover 左边显示内容</m-button>
      </m-popover>
      <m-popover trigger="hover"  position="top">
        <template slot="content">
          popover 中的内容
        </template>
        <m-button>hover 上方显示内容</m-button>
      </m-popover>
      <m-popover trigger="hover"  position="bottom">
        <template slot="content">
          popover 中的内容
        </template>
        <m-button>hover 下方显示内容</m-button>
      </m-popover>
      <m-popover trigger="hover"  position="right">
        <template slot="content">
          popover 中的内容
        </template>
        <m-button>hover 右边显示内容</m-button>
      </m-popover>
    </div>
  </div>
</template>
```
## 选项
> Popover 组件支两个选项： position 用于设置显示位置； trigger 用于设置触发事件
#### 1. position
<span style='color:#8397dc;background-color:#F8F8F8'> position </span> 默认为 <span style='color:#8397dc;background-color:#F8F8F8'> top </span>，可选择的参数为 
<span style='color:#8397dc;background-color:#F8F8F8'> top </span>,<span style='color:#8397dc;background-color:#F8F8F8'> left </span>,<span style='color:#8397dc;background-color:#F8F8F8'> right </span>,<span style='color:#8397dc;background-color:#F8F8F8'> bottom </span>,分别设置 popover 显示的方位。
#### 2. trigger
<span style='color:#8397dc;background-color:#F8F8F8'> trigger </span> 默认为<span style='color:#8397dc;background-color:#F8F8F8'> click </span>, 用于设置触发 popover 显示的事件。 除此之外还支持<span style='color:#8397dc;background-color:#F8F8F8'> hover </span>
