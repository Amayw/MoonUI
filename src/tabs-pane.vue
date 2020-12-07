<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoonTabsPane',
        inject:['eventBus'],
        props:{
            name:{
                type:[String,Number],
                required:true
            }
        },
        created() {
            this.eventBus.$on('update:selected',(name)=>{
                console.log(`我是pane,${name}`);
            })
        },
        methods:{
        }
    };
</script>

<style lang="scss" scoped>

</style>