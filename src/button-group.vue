<template>
    <div class="buttonGroup">
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

    .buttonGroup{
        display: inline-flex;
        >.m-button{
            border-radius: 0;
            &:first-child{
                border-top-left-radius:var(--border-radius);
                border-bottom-left-radius:var(--border-radius);
            }
            &:last-child{
                border-top-right-radius:var(--border-radius);
                border-bottom-right-radius:var(--border-radius);
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