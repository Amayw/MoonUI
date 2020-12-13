<template>
    <div class="m-tabs-item" @click="updateSelected" :class="classes" :data-name="name">
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
            classes(){
                return {
                    active:this.active,
                    disabled:this.disabled
                }
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
            updateSelected(){
                if(this.disabled){
                    return;
                }
                if(this.eventBus){
                    this.eventBus.$emit('update:selected',this.name,this);
                }
                this.$emit('click',this)
            }
        }
    };
</script>

<style lang="scss" scoped>
    $blue:#6495ed;
    .m-tabs-item{
        padding: 0 2em;
        height: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        >.m-icon{
            margin-right: 6px;
        }
        &.active{
            color: $blue;
            font-weight: bold;
        }
        &.disabled{
            opacity: 0.2;
            cursor: not-allowed;
        }
    }
</style>
