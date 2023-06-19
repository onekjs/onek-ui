## Button
按钮可以被点击，以便执行某些操作。例如，当用户点击按钮时，可以提交表单、打开链接、切换页面或触发自定义JavaScript函数等。

### 基本用法
按钮分为 default - 默认按钮、 primary - 主要按钮、warning - 警告、danger - 危险。
按钮大小分四种类型 - 超小号按钮(mini) -小号按钮(small) -中号按钮（normal） -大号按钮(large)

<demo src="./basic.vue"
title="按钮类型"
desc="这是按钮类型、按钮大小演示"
importMap="{'vue-typical': 'https://github.com/onekjs/onek-ui/tree/main/packages/components/src/button/__demo__/basic.vue'}">
</demo>

### 加载中
通过设置 loading 可以让按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件。

<demo src="./loading.vue"
title="loading"
desc="这是按钮加载"
importMap="{'vue-typical': 'https://github.com/onekjs/onek-ui/tree/main/packages/components/src/button/__demo__/loading.vue'}">
</demo>

### 按钮图标
按钮可以嵌入图标。通过<template #icon> 插入图标
<demo src="./icon.vue"
title="icon"
desc="这是图标按钮"
importMap="{'vue-typical': 'https://github.com/onekjs/onek-ui/tree/main/packages/components/src/button/__demo__/icon.vue'}">
</demo>

### 按钮形状
按钮形状。通过shape: 长条square(默认) 、圆角 round 、 圆 circle
<demo src="./shape.vue"
title="shape"
desc="这是图标形状"
importMap="{'vue-typical': 'https://github.com/onekjs/onek-ui/tree/main/packages/components/src/button/__demo__/shape.vue'}">
</demo>

### 按钮组
按钮以组合方式出现
<demo src="./group.vue"
title="group"
desc="这是按钮组示例"
importMap="{'vue-typical': 'https://github.com/onekjs/onek-ui/tree/main/packages/components/src/button/__demo__/group.vue'}">
</demo>

