<template>
    <div class="m-layout" :class="{'m-aside-layout': hasAside}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoonLayout',
        data(){
            return {
                hasAside:false
            }
        },
        mounted(){
            this.$children.forEach(item=>{
                if(item.$options.name==='MoonAside'){
                    this.hasAside=true;
                }
            })
        }
    };
</script>

<style lang="scss" scoped>
    .m-layout{
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        &.m-aside-layout{
            flex-direction: row;
        }
    }
</style>
