<template>
    <div  class="moon-tabs-pane" :class="classActive" v-if="active">
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
            this.eventBus.$on('update:selected',(name)=>{
                if(name===this.name){
                    this.active=true;
                }else{
                    this.active=false;
                }
            })
        },
        methods:{
        }
    };
</script>

<style lang="scss" scoped>
    .moon-tabs-pane{
        padding: 1em;
        &.active{

        }
    }
</style>