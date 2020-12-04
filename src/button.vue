<template>
    <button class="m-button" @click="$emit('click')">
        <m-icon v-if="iconPosition===`left`&&(loading||icon)" :icon="loading?'loading':icon"
                :class="loading?'loading left':'left'"></m-icon>
        <slot></slot>
        <m-icon v-if="icon&&iconPosition===`right`" :icon="loading?'loading':icon"
                :class="loading?'loading right':'right'"></m-icon>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        name:'MoonButton',
        components:{
            "m-icon":Icon
        },
        props: {
            icon: {},
            loading:{
                type:Boolean,
                default:false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator: (value) => {
                  return !(value !== 'left' && value !== 'right');
                }

            }
        },
        methods:{

        }
    };
</script>

<style lang="scss" scoped>

    $button-height:32px;
    $button-bg:white;
    $button-active-bg:#eee;
    $font-size:14px;
    $border-radius:4px;
    $color:#333;
    $border-color:#999;
    $border-color-hover:#666;

    @keyframes turnAround {
        from{
            transform: rotate(0deg);
        }
        to{
            transform:rotate(360deg);
        }
    }
    .m-button {
        height: $button-height;
        padding: 0 1em;
        background-color: $button-bg;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        vertical-align: middle;
        >.loading{
            animation: turnAround 2s infinite linear;
        }
        &:active {
            background-color: $button-active-bg;
      }

        &:hover {
            border-color: $border-color-hover;
        }

        &:focus {
            outline: none;
        }
    }

</style>