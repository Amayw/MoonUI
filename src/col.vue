<template>
    <div class="col" :class="[span&&`col-${span}`,offset&&`offset-${offset}`]"
         :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
        <div class="inner">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'MoonCol',
        props:{
            span:{
                type:[String,Number]
            },
            offset:{
                type:[String,Number]
            }
        },
        data(){
            return{
                gutter:0
            }
        }
    };
</script>

<style lang="scss" scoped>
    .col{
        height: 100px;
        width: 100%;
        >.inner{
            border: 1px solid red;
        }
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24)*100%;
            }
        }

        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24)*100%;
            }
        }

    }

</style>