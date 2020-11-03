<template>
    <button class="m-button" @click="$emit('click')">
        <m-icon v-if="iconPosition===`left`&&(loading||icon)" :icon="loading?'loading':icon" :class="loading?'loading':''"></m-icon>
        <slot>button</slot>
        <m-icon v-if="icon&&iconPosition===`right`" :icon="loading?'loading':icon" :class="loading?'loading':''"></m-icon>
    </button>
</template>

<script>
    export default {
        props: {
            icon: {},
            loading:{},
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