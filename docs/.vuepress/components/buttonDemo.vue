<template>
    <div>
        <m-button>默认按钮</m-button>
        <pre>
        <code>{{content}}</code>
    </pre>
    </div>
</template>

<script>
    import Button from '../../../src/button.vue'
    export default {
        name:'MoonButtonDemo',
        components:{
            'm-button':Button
        },
        data(){
            return{
                content:`<m-button>默认按钮</m-button>`
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>