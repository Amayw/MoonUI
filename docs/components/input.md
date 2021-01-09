---
title: 'Input 输入框'
---
# 输入框
## 预览
&nbsp;
<ClientOnly>
  <input-demo></input-demo>
</ClientOnly>

## 使用方法
```vue
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
```

## 选项
> Input 组件的选项有： disabled, readonly, error, tip。 并且支持数据的双向绑定。  
#### 1. disabled
表示是否禁用状态，默认为 false，禁用。
#### 2. readonly
表示只读状态， 与 disabled 相似。但是 disabled 不可以被 Tab 键选中，<span style='color:#8397dc;background-color:#F8F8F8'>readonly</span> 可以被选中，不能修改。
#### 3. error
给 Input 添加 <span style='color:#8397dc;background-color:#F8F8F8'>error</span> 属性，会在该 input 右侧显示一个绿色提示图标与文字，用于提示错误。
#### 4. tip
给 Input 添加 <span style='color:#8397dc;background-color:#F8F8F8'>tip</span> 属性，会在该 input 右侧显示一个红色提示图标与文字，用于显著提示。
#### 5. v-model  
预览  
<ClientOnly>
  <v-model-demo></v-model-demo>  
</ClientOnly>
代码
```vue
<template>
  <div>
    <m-input v-model="value"></m-input> <br>
    value:{{value}}
  </div>
</template>
<script>
  export default {
    data(){
      return{ value:'双向绑定' }
    }
  }
</script>
```



