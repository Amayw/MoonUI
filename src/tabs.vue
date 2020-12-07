<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoonTabs',
        props:{
            selected:{
                type:String,
                required:true
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>