<template>
    <div class="m-toast" ref="wrapper">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default"></div>
        </div>
        <div v-if="closeButton" class="line" ref="line"></div>
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
                default:undefined
            },
            enableHtml:{
                type:Boolean,
                default:false
            }
        },
        mounted(){
            this.updateStyles();
            this.execAutoClose();
        },
        methods:{
            execAutoClose(){
                if(this.autoClose){
                    setTimeout(()=>{
                        this.close()
                    },this.autoCloseDelay*1000)
                }
            },
            updateStyles(){
                this.$nextTick(()=>{
                    this.$refs.line.style.height=`${this.$refs.wrapper.getBoundingClientRect().height}px`;
                })
            },
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
    $toast-min-height:40px;
    $toast-bg:pink;
    .m-toast{
        font-size:$font-size;
        line-height: 1.8;
        min-height: $toast-min-height;
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
        >.message{
            padding: 8px 0;
        }
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