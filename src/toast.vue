<template>
    <div class="m-toast">
        <slot/>
    </div>
</template>

<script>
    export default {
        name:'MoonToast'
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
    }
</style>