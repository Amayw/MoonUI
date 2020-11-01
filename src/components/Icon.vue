<template>
    <svg class="icon">
        <use :xlink:href=`#i-${icon}`></use>
    </svg>
</template>

<script>
    export default {
        data() {
            return {

            };
        },
        props: ['icon']
    };
</script>

<style lang="scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>