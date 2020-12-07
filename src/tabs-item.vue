<template>
    <div class="moon-tabs-item" @click="xxx" :class="classActive">
            <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoonTabsItem',
        data(){
            return {
                active:{
                    type:Boolean,
                    default:false
                }
            }
        },
        props:{
            disabled:{
                type:Boolean,
                default:false
            },
            name:{
                type:[String,Number],
                required:true
            }
        },
        inject:['eventBus'],
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
            xxx(){
                this.eventBus.$emit('update:selected',this.name);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .moon-tabs-item{
        padding: 0 2em;
        &.active{
            background-color: red;
        }
    }
</style>