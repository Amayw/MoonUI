<template>
    <div class="moon-tabs-head">
        <slot></slot>
        <div ref="line" class="line"></div>
        <div class="moon-action">
            <slot name="action"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'MoonTabsHead',
        mounted(){
        }
    };
</script>

<style lang="scss" scoped>
    $tabs-height:40px;
    .moon-tabs-head{
        height: $tabs-height;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        >.line{
            position: absolute;
            border-bottom: 2px solid cornflowerblue;
            width: 100px;
            left: 0;
            bottom: 0;
        }
        >.moon-action{
            margin-left: auto;
        }
    }
</style>