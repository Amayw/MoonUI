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
        inject:['eventBus'],
        mounted(){
            this.eventBus.$on('update:selected',(name,vm)=>{
                console.log(vm.$el);
                const {width,height,top,left} =vm.$el.getBoundingClientRect();
                const leftp=vm.$el.parentNode.getBoundingClientRect().left;
                this.$refs.line.style.width=`${width}px`;
                this.$refs.line.style.left=`${left-leftp}px`;
            })
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
        border-bottom: 1px solid #ddd;
        padding-bottom: -1;
        >.line{
            position: absolute;
            border-bottom: 2px solid cornflowerblue;
            bottom: 0;
            transition: all 350ms;
        }
        >.moon-action{
            margin-left: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1em;
        }
    }
</style>