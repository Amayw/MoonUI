<template>
    <div class="m-toast">
        <slot></slot>
        <div class="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
</template>

<script>
    export default {
        name:'MoonToast',
        props:{
            autoClose:{
                type:Boolean,
                default:true,
            },
            autoCloseDelay:{
                type:Number,
                default:5,
            },
            closeButton:{
                type:Object,
                default(){
                    return {
                        text:'关闭',
                        callback:undefined
                    }
                }
            }
        },
        mounted(){
            if(this.autoClose){
                setTimeout(()=>{
                    this.close()
                },this.autoCloseDelay*1000)
            }
        },
        methods:{
            close(){
                this.$el.remove();
                this.$destroy();
            },
            onClickClose(){
                this.close();
                if(this.closeButton.callback&&typeof this.closeButton.callback==='function'){
                    this.closeButton.callback();
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    $font-size:14px;
    $toast-height:40px;
    $toast-bg:pink;
    .m-toast{
        font-size:$font-size;
        line-height: 1.8;
        height: $toast-height;
        position: fixed;
        left:50%;
        transform: translateX(-50%);
        top: 0;
        padding: 0 16px;
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 03px 0 $toast-bg;
        color: #fff;
        >.line{
            height: 100%;
            border-left: 1px solid #fff;
            margin-left: 16px;
        }
        >.close{
            padding-left: 16px;
        }
    }
</style>