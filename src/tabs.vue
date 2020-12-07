<template>
    <div>
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
        }
    };
</script>

<style lang="scss" scoped>

</style>