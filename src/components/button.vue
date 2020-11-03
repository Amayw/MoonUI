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
    import Icon from 'icon.vue'
    export default {
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
    @keyframes turnAround {
        from{
            transform: rotate(0deg);
        }
        to{
            transform:rotate(360deg);
        }
    }
    .m-button {
        height: var(--button-height);
        padding: 0 1em;
        background-color: var(--button-bg);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        vertical-align: middle;
        >.loading{
            animation: turnAround 2s infinite linear;
        }
        &:active {
            background-color: var(--button-active-bg);
      }

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:focus {
            outline: none;
        }
    }

</style>