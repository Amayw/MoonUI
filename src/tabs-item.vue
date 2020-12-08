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
                this.eventBus.$emit('update:selected',this.name,this);
            }
        }
    };
</script>

<style lang="scss" scoped>
    $blue:#6495ed;
    .moon-tabs-item{
        padding: 0 2em;
        height: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        &.active{
            color: $blue;
            font-weight: bold;
        }
    }
</style>