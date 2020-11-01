<template>
    <div>
        <button class="m-button"><slot/></button>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="scss" scoped>

    .m-button{
        height: var(--button-height);
        padding: 0 1em;
        background-color: var(--button-bg);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);

        &:active{
            background-color: var(--button-active-bg);
        }

        &:hover{
            border-color:var(--border-color-hover);
        }

        &:focus{
            outline:none;
        }
    }

</style>