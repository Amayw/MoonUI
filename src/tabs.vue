<template>
    <div class="m-tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        name:'MoonTabs',
        data(){
          return {
              eventBus:new Vue()
          }
        },
        provide(){
            return {
                eventBus:this.eventBus
            }
        },
        props:{
            selected:{
                type:String,
                required:true
            },
            direction:{
                type:String,
                default:'horizontal',
                validator(value){
                    return ['vertical','horizontal'].indexOf(value)>=0;
                }

            }
        },
        mounted(){
            if(this.$children.length===0){
                console&&console.warn&&console.warn(`tabs子组件应该是tabs-head或tabs-body，而你没有写子组件`);
            }
            this.$children.forEach((vm)=>{
                    if(vm.$options.name==='MoonTabsHead'){
                        vm.$children.forEach((item)=>{
                            if(item.$options.name==='MoonTabsItem' && item.name===this.selected){
                                this.eventBus.$emit('update:selected',this.selected,item);
                            }
                        })
                    }
            })
        }
    };
</script>

<style lang="scss" scoped>
    .m-tabs{
        display: flex;
        flex-direction: column;
        &.horizontal{
            flex-direction: row;
        }
    }
</style>
