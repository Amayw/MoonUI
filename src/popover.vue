<template>
    <div class="moon-popover" ref="popover" @click="onClick">
        <div ref="contentWrapper"  v-if="visible" class="moon-content-wrapper">
            <slot name="content"></slot>
        </div>
        <span ref="triggerButton" style="display: inline-block">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name:'MoonPopOver',
        data(){
            return{
                visible:false
            }
        },
        methods:{
            positionContent(){
                document.body.appendChild(this.$refs.contentWrapper);
                const {left,top}=this.$refs.triggerButton.getBoundingClientRect();
                this.$refs.contentWrapper.style.left=left+window.scrollX+'px';
                this.$refs.contentWrapper.style.top=top+window.scrollY+'px';
            },
            onClickDocument(e){
                if (this.$refs.popover&&(this.$refs.popover===e.target||this.$refs.popover.contains(e.target))) {
                    return;
                }
                console.log(2);
                this.close();
            },
            open(){
                this.visible=true;
                this.$nextTick(()=>{
                    this.positionContent();
                    document.addEventListener('click',this.onClickDocument);
                })
            },
            close(){
                this.visible=false;
                document.removeEventListener('click', this.onClickDocument);
            },
            onClick(event){
                if(this.$refs.triggerButton.contains(event.target)){
                    if(this.visible===true){
                        this.close();
                    }else{
                        this.open();
                    }
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .moon-popover{
        display: inline-flex;
        vertical-align: top;
        position: relative;
    }
    .moon-content-wrapper{
        position: absolute;
        border: 1px solid #333;
        background: white;
        filter:drop-shadow(0 1px 1px rgba(0,0,0,0.5));
        transform: translateY(-100%);
        margin-top: -10px;
        padding: 1em;
        border-radius: 4px;
        max-width: 20em;
        word-break: break-all;
        &::before,&::after{
            content: "";
            display: block;
            position: absolute;
            border: 10px solid transparent;
            border-top-color: #333;
            width: 0;
            height: 0;
            top: calc(100% + 1px);
            left: 1em;
        }
        &::after{
            border-top-color: white;
            top: 100%;
        }
    }
</style>