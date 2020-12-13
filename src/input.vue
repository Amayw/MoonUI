<template>
    <div class="m-wrapper" :class="{error,tip}">
        <input class="m-input" :value='value' :disabled="disabled" :readonly="readonly"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"/>
        <template v-if="error">
            <m-icon icon="error" class="icon-error"></m-icon>
            <span class="errorMessage">{{error}}</span>
        </template>
        <template v-if="tip">
            <m-icon icon="tip" class="icon-tip"></m-icon>
            <span class="tipMessage">{{tip}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        name:'MoonInput',
        components:{
            'm-icon':Icon
        },
        props:{
            value:{

            },
            disabled:{
                type:Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default:false
            },
            error:{
                type:String,
            },
            tip:{
                type:String,
            }
        }
    };
</script>

<style lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $border-color-hover: #666666;
    $border-radius:4px;
    $font-size:12px;
    $box-shadow-color: rgba(102, 102,102, 0.3);
    $disabled-color:#bbb;
    $red: #f56c6c;
    $box-shadow-red: rgba(245, 108,108, 0.5);
    $green: #67c23a;
    $box-shadow-green: rgba(103, 194,58, 0.5);
    .m-wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;

        > .m-input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }

            &[disabled], &[readonly] {
                border-color: $disabled-color;
                color: $disabled-color;

            }
        }

        &.error {
            :not(lastchild) {
                margin-right: .5em;
            }

            > .m-input {
                border-color: $red;
                color: $red;

                &:focus {
                    box-shadow: inset 0 1px 3px $box-shadow-red;
                }
            }

            .icon-error {
                color: $red;
            }

            .errorMessage {
                color: $red;
            }
        }
        &.tip{
            :not(lastchild){
                margin-right: .5em;
            }
            >.m-input{
                border-color: $green;
                color: $green;
                &:focus{
                    box-shadow: inset 0 1px 3px $box-shadow-green;
                }
            }
            .icon-tip{
                color:$green;
            }
            .tipMessage{
                color: $green;
            }
        }
    }

</style>
