<template>
    <div class="m-collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from "vue"
    export default {
        name:"MoonCollapse",
        props:{
            single:{
                type:Boolean,
                default:false
            },
            selected:{
                type:Array
            }
        },
        data(){
            return{
                eventBus:new Vue()
            }
        },
        provide(){
                return {
                    eventBus:this.eventBus
                }
        },
        mounted() {
            //初始化，告诉所有子组件当前selected数组的值
            this.eventBus.$emit('update:selected',this.selected);
            //监听添加选中面板事件
            this.eventBus.$on('update:addSelected',(name)=>{
                //添加
                let tempSelected=this.single?[]:JSON.parse(JSON.stringify(this.selected));
                tempSelected.push(name);
                //通知外部更新后的selected数组
                this.$emit('update:selected',tempSelected)
                //通知内部更新后的selected数组
                this.eventBus.$emit('update:selected',tempSelected)
            })
            //监听移除选中面板事件
            this.eventBus.$on('update:removeSelected',(name)=>{
                //删除
                let tempSelected=JSON.parse(JSON.stringify(this.selected));
                let index=tempSelected.indexOf(name);
                tempSelected.splice(index,1);
                //通知外部更新后的selected数组
                this.$emit('update:selected',tempSelected)
                //通知内部更新后的selected数组
                this.eventBus.$emit('update:selected',tempSelected)
            })

        }
    };
</script>

<style lang="scss" scoped>
    .m-collapse{
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>