<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoonTabsItem',
        props:{
            disabled:{
                type:Boolean,
                default:false
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>