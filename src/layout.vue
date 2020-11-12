<template>
    <div class="moon-layout" :class="{'moon-aside-layout': hasAside}">
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
    .moon-layout{
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        &.moon-aside-layout{
            flex-direction: row;
        }
    }
</style>