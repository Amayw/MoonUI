---
sidebarDepth: 2
---

## 引入必要资源
```javascript
import {Button} from "moonwangui";
import "moonwangui/dist/index.css";
```

## 注册组件
```javascript
export default {
  name: "ComponentName",
  components: {
    "m-button": Button,
  },
}
```

## 使用
代码：
```vue
<template>
  <div>
    <m-button>默认按钮</m-button>
  </div>
</template>
```
效果：
<ClientOnly>
  <get-started-button-demo></get-started-button-demo>
</ClientOnly>

