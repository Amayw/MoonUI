<template>
    <div class="moon-tabs-head">
        <slot></slot>
        <div class="moon-action">
            <slot name="action"></slot>
        </div>
    </div>
</template>

<script>
    export default {
    };
</script>

<style lang="scss" scoped>
    $tabs-height:40px;
    .moon-tabs-head{
        height: $tabs-height;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        >.moon-action{
            margin-left: auto;
        }
    }
</style>