<template>
    <svg class="m-icon">
        <use :xlink:href=`#i-${icon}`></use>
    </svg>
</template>

<script>
    import './svg.js'
    export default {
        name:'MoonIcon',
        data() {
            return {

            };
        },
        props: ['icon']
    };
</script>

<style lang="scss" scoped>
    .m-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>