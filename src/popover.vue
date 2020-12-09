<template>
    <div class="moon-popover" @click.stop="onClick">
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
            onClick(event){
                console.log(event);
                // this.visible=!this.visible;
                // if(this.visible===true){
                //     this.$nextTick(()=>{
                //         document.body.appendChild(this.$refs.contentWrapper);
                //         const {left,top}=this.$refs.triggerButton.getBoundingClientRect();
                //         this.$refs.contentWrapper.style.left=left+window.scrollX+'px';
                //         this.$refs.contentWrapper.style.top=top+window.scrollY+'px';
                //         const eventHandler=()=>{
                //             this.visible=false;
                //             document.removeEventListener('click',eventHandler);
                //         }
                //         document.addEventListener('click',eventHandler);
                //     })
                // }
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