<template>
    <div class="m-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoonContent'
    };
</script>

<style lang="scss" scoped>
    .m-content{
        flex-grow: 1;
    }
</style>
