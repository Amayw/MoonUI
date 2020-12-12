<template>
    <div class="m-collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"MoonCollapse"
    };
</script>

<style lang="scss" scoped>
    .m-collapse{
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>