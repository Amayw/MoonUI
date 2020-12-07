<template>
    <div>
        <slot></slot>
        <slot name="action"></slot>
    </div>
</template>

<script>
    export default {
        name:'MoonTabsHead',
        inject:['eventBus']
    };
</script>

<style lang="scss" scoped>

</style>