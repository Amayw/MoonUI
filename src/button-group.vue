<template>
    <div class="m-buttonGroup">
       <slot/>
    </div>
</template>

<script>
    export default {
        name:'MoonButtonGroup',
        mounted() {
            for(let node of this.$el.children){
                let name=node.nodeName.toLowerCase();
                if(name!=='button'){
                    console.warn(`m-button-group的子元素应该是m-button，而你输入的是${name}`);
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    $border-radius:4px;
    .m-buttonGroup{
        display: inline-flex;
        >.m-button{
            border-radius: 0;
            &:first-child{
                border-top-left-radius:$border-radius;
                border-bottom-left-radius:$border-radius;
            }
            &:last-child{
                border-top-right-radius:$border-radius;
                border-bottom-right-radius:$border-radius;
            }
            &:not(:last-child){
                margin-right: -1px;
            }
            &:hover{
                position: relative;
                z-index: 1;
            }

        }
    }
</style>
