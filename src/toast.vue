<template>
    <div class="m-toast" ref="wrapper" :class="toastClass">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
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
                type:[Boolean,Number],
                default:5,
                validator(value) {
                    return value === false || typeof value === 'number';
                }
            },
            closeButton:{
                type:Object,
                default:undefined
            },
            enableHtml:{
                type:Boolean,
                default:false
            },
            position:{
                type:String,
                default:'top',
                validator(value){
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0;
                }
            }
        },
        computed:{
            toastClass(){
                return `position-${this.position}`;
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
                    },this.autoClose*1000)
                }
            },
            updateStyles(){
                if(this.closeButton){
                    this.$nextTick(()=>{
                        this.$refs.line.style.height=`${this.$refs.wrapper.getBoundingClientRect().height}px`;
                    })
                }
            },
            close(){
                this.$el.remove();
                this.$emit('close');
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
    @keyframes fade{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
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
        animation: fade 300ms linear;
        &.position-top{
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
        &.position-middle{
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
        }
        &.position-bottom{
            top: 100%;
            transform: translateX(-50%) translateY(-100%);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
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