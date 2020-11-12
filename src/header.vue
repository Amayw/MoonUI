<template>
    <div class="moon-header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoonHeader'
    };
</script>

<style lang="scss" scoped>
    .moon-header{
        width: 100%;
    }
</style>