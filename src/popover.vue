<template>
    <div class="m-popover" ref="popover">
        <div ref="contentWrapper" v-if="visible" class="m-content-wrapper" :class="classes">
            <slot name="content"></slot>
        </div>
        <span ref="triggerButton" style="display: inline-block">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'MoonPopOver',
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['left', 'right', 'bottom', 'top'].indexOf(value) >= 0;
                }
            },
            trigger:{
                type:String,
                default:'click',
                validator(value){
                    return ['click','hover'].indexOf(value)>=0;
                }
            }
        },
        data() {
            return {
                visible: false
            };
        },
        computed: {
            classes() {
                return `position-${this.position}`;
            }
        },
        mounted() {
            if(this.trigger==='click'){
                this.$refs.popover.addEventListener('click',this.onClick)
            }else if(this.trigger==='hover'){
                this.$refs.popover.addEventListener('mouseenter',this.open)
                this.$refs.popover.addEventListener('mouseleave',this.close)
            }
        },
        destroyed() {
            if(this.trigger==='click'){
                this.$refs.popover.removeListener('click',this.onClick)
            }else if(this.trigger==='hover'){
                this.$refs.popover.removeListener('mouseenter',this.open)
                this.$refs.popover.removeListener('mouseleave',this.close)
            }
        },
        methods: {
            positionContent() {
                const {contentWrapper, triggerButton} = this.$refs;
                document.body.appendChild(contentWrapper);
                const {left, top, width, height} = triggerButton.getBoundingClientRect();
                const {height: height2} = contentWrapper.getBoundingClientRect();
                let positions = {
                    top: {
                        left: left + window.scrollX,
                        top: top + window.scrollY,
                    },
                    bottom: {
                        left: left + window.scrollX,
                        top: top + height + window.scrollY,
                    },
                    left: {
                        left: left + window.scrollX,
                        top: top + window.scrollY + (height - height2) / 2,
                    },
                    right: {
                        left: left + window.scrollX + width,
                        top: top + window.scrollY + (height - height2) / 2,
                    }
                };
                contentWrapper.style.left = positions[this.position].left + 'px';
                contentWrapper.style.top = positions[this.position].top + 'px';
            },
            onClickDocument(e) {
                if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
                    return;
                }
                if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
                    return;
                }
                this.close();
            },
            open() {
                this.visible = true;
                this.$nextTick(() => {
                    this.positionContent();
                    document.addEventListener('click', this.onClickDocument);
                });
            },
            close() {
                this.visible = false;
                document.removeEventListener('click', this.onClickDocument);
            },
            onClick(event) {
                if (this.$refs.triggerButton.contains(event.target)) {
                    if (this.visible === true) {
                        this.close();
                    } else {
                        this.open();
                    }
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .m-popover {
        display: inline-flex;
        vertical-align: top;
        position: relative;
    }

    .m-content-wrapper {
        position: absolute;
        border: 1px solid #333;
        background: white;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        padding: 0.5em;
        border-radius: 4px;
        max-width: 20em;
        word-break: break-all;

        &::before, &::after {
            content: "";
            display: block;
            position: absolute;
            border: 10px solid transparent;
            width: 0;
            height: 0;
        }

        &.position-top {
            margin-top: -10px;
            transform: translateY(-100%);

            &::before, &::after {
                left: 1em;
                border-bottom: none;
            }
            &::before{
                border-top-color: #333;
                top: 100%;
            }
            &::after {
                border-top-color: white;
                top:  calc(100% - 1px);
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before, &::after {
                left: 1em;
                border-top: none;
            }

            &::before{
                bottom: calc(100% + 1px);
                border-bottom-color: #333;
            }

            &::after {
                bottom: 100%;
                border-bottom-color: white;
            }
        }

        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;

            &::before, &::after {
                bottom: 50%;
                transform: translateY(50%);
                border-right: none;
            }
            &::before{
                left: calc(100% + 1px);
                border-left-color: #333;
            }
            &::after {
                left: 100%;
                border-left-color: white;
            }
        }

        &.position-right {
            margin-left: 10px;
            &::before, &::after{
                bottom: 50%;
                transform: translateY(50%);
                border-left:none;
            }
            &::before {
                right: calc(100% + 1px);
                border-right-color: #333;
            }

            &::after {
                right: 100%;
                border-right-color: white;
            }
        }
    }
</style>
