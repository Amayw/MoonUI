<template>
    <div class="m-col" :class="colClass"
         :style="colStyle">
            <slot></slot>
    </div>
</template>

<script>
    let validator=(value)=>{
        let valid=true;
        Object.keys(value).forEach(key=>{
            if(!['span','offset'].includes(key)){
                valid=false;
            }
        })
        return valid;
    }
    export default {
        name:'MoonCol',
        props:{
            span:{
                type:[String,Number]
            },
            offset:{
                type:[String,Number]
            },
            pad:{
                type:Object,
                validator
            },
            narrowPc:{
                type:Object,
                validator
            },
            pc:{
                type:Object,
                validator
            },
            widePc:{
                type:Object,
                validator
            }

        },
        data(){
            return{
                gutter:0
            }
        },
        methods:{
            createClasses:(obj,str='')=>{
                if(!obj) {return []};
                let array=[];
                if(obj.span){
                    array.push(`col-${str}${obj.span}`);
                }
                if(obj.offset){
                    array.push(`offset-${str}${obj.offset}`);
                }
                return array;
            }
        },
        computed:{
            colClass(){
                let {span,offset,pad,narrowPc,pc,widePc}=this;
                let {createClasses}=this;
                return [...createClasses({span,offset})
                    ,...createClasses(pad,'pad-')
                    ,...createClasses(narrowPc,'narrow-pc-')
                    ,...createClasses(pc,'pc-')
                    ,...createClasses(widePc,'wide-pc-')];
            },
            colStyle(){
                let {gutter}=this;
                return {paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'};
            }
        }
    };
</script>

<style lang="scss">
    .m-col{
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


        @media (min-width: 577px){
            $class-prefix: col-pad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }

            $class-prefix: offset-pad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }

        @media (min-width: 769px){
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }

            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }

        @media (min-width: 993px){
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }

            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }

        @media (min-width: 1201px){
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }

            $class-prefix: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }
    }

</style>
