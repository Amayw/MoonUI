<template>
    <div class="m-collapse-item">
        <div class="m-title"  @click="toggle">
            <m-icon icon="right"></m-icon>
            <span>{{title}}</span>
        </div>
        <div v-if="open" class="m-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:"MoonCollapseItem",
        props:{
            title:{
                type:String,
                required:true
            },
            name:{
                type:String,
                required: true
            }
        },
        data(){
            return {
                open:false
            }
        },
        inject:['eventBus'],
        mounted(){
            this.eventBus&&this.eventBus.$on('update:selected',(selected)=>{
                this.open = selected.indexOf(this.name)>=0;
            })
        },
        methods:{
            toggle(){
                if(this.open){
                    this.open=false;
                    this.eventBus&&this.eventBus.$emit('update:removeSelected',this.name);
                }else{
                    this.open=true;
                    this.eventBus&&this.eventBus.$emit('update:addSelected',this.name);
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .m-collapse-item{
        .m-title{
            border: 1px solid #ddd;
            margin: -1px -1px 0 -1px;
            min-height: 32px;
            padding: 0 8px;
            display: flex;
            align-items: center;
        }
        &:first-child{
            >.m-title{
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
            }
        }
        &:last-child{
            >.m-title:last-child{
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
                border-bottom: none;
            }
        }
        >.m-content{
            padding: 8px;
        }
    }
</style>