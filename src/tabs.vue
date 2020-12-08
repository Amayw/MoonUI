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
</style>