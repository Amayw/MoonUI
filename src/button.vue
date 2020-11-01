<template>
    <button class="m-button">
        <Icon v-if="icon&&iconPosition===`left`" :icon="icon"></Icon>
        <slot></slot>
        <Icon v-if="icon&&iconPosition===`right`" :icon="icon"></Icon>
    </button>
</template>

<script>
    import Icon from './components/Icon';

    export default {
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator: (value) => {
                  if(value!=='left'&&value!=='right'){
                      return false;
                  }else{
                      return true;
                  }
                }

            }
        },
        components: {Icon}
    };
</script>

<style lang="scss" scoped>

    .m-button {
        height: var(--button-height);
        padding: 0 1em;
        background-color: var(--button-bg);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);

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