<template>
    <div class="moon-tabs">
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
            console.log(1);
            if(this.$children.length===0){
                console.log(2);
                console&&console.warn&&console.warn(`tabs子组件应该是tabs-head或tabs-body，而你没有写子组件`);
            }
            console.log(3);
            this.$children.forEach((vm)=>{
                    if(vm.$options.name==='MoonTabsHead'){
                        vm.$children.forEach((item)=>{
                            if(item.$options.name==='MoonTabsItem' && item.name===this.selected){
                                console.log(333);
                                this.eventBus.$emit('update:selected',this.selected,item);
                            }
                        })
                    }
            })
        }
    };
</script>

<style lang="scss" scoped>
    .moon-tabs{
        display: flex;
        flex-direction: column;
        &.horizontal{
            flex-direction: row;
        }
    }
</style>