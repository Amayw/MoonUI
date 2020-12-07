<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoonTabs',
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