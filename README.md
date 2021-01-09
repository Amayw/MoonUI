
# MoonUI 一个vue组件

[![Build Status](https://travis-ci.org/Amayw/MoonUI.svg?branch=main)](https://travis-ci.org/Amayw/MoonUI)

作者：moonwanger
## 介绍
这是我学习vue时做的一个UI框架，简单易上手，希望你能喜欢！<br>

## 开始使用
1. 安装
    ```
    npm install --save moonwangerui
    or
    yarn add moonwangerui
    ```
2. 引用moonwangerui
    ```vue
    import {
        Button,ButtonGroup,Icon
    } from "moonwangerui";
    import "moonwangerui/dist/index.css";
    export default {
        name: "App",
        components: {
            "m-button": Button,
        },
    };
    ```



