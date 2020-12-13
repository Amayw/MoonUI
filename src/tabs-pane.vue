<template>
    <div  class="m-tabs-pane" :class="classActive" v-if="active"  :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoonTabsPane',
        inject:['eventBus'],
        data(){
            return {
                active:{
                    type:Boolean,
                    default:false
                }
            }
        },
        props:{
            name:{
                type:[String,Number],
                required:true
            }
        },
        computed:{
            classActive(){
                return this.active?'active':'';
            }
        },
        created() {
            if(this.eventBus){
                this.eventBus.$on('update:selected',(name)=>{
                    this.active = name === this.name;
                })
            }
        },
        methods:{
        }
    };
</script>

<style lang="scss" scoped>
    .m-tabs-pane{
        padding: 1em;
        &.active{

        }
    }
</style>
