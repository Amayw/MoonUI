<template>
    <div class="moon-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoonContent'
    };
</script>

<style lang="scss" scoped>
    .moon-content{
        flex-grow: 1;
    }
</style>