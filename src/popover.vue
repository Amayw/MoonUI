<template>
    <div class="moon-popover" @click="changeVisible">
        <div  v-if="visible" class="moon-content-wrapper">
            <slot name="content"></slot>
        </div>
        <slot></slot>
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
            changeVisible(){
                console.log(1);
                this.visible=!this.visible;
                console.log(this.visible);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .moon-popover{
        display: inline-flex;
        vertical-align: top;
        position: relative;
        .moon-content-wrapper{
            position: absolute;
            bottom: 100%;
            border: 1px solid pink;
            box-shadow: 0 0 3px rgba(0,0,0,0.5);
        }
    }
</style>