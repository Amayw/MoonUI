<template>
    <div class="moon-popover" ref="popover" @click="onClick">
        <div ref="contentWrapper"  v-if="visible" class="moon-content-wrapper">
            <slot name="content"></slot>
        </div>
        <span ref="triggerButton">
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
                console.log('执行了');
                console.log(this);
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
                console.log('close');
                this.visible=false;
                document.removeEventListener('click', this.onClickDocument);
            },
            onClick(event){
                if(this.$refs.triggerButton.contains(event.target)){
                    if(this.visible===true){
                        console.log('a');
                        this.close();
                    }else{
                        console.log('b');
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
        border: 1px solid pink;
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
        transform: translateY(-100%);
    }
</style>