<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoonTabsBody',
        inject:['eventBus']
    };
</script>

<style lang="scss" scoped>

</style>