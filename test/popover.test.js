const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'
import Button from '../src/button'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    it('可以设置position', (done) => {
        Vue.component('m-popover',Popover);
        Vue.component('m-button',Button);
        const div=document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML=`
           <m-popover  position="left" ref="cur">
            <template slot="content">
                <div class="content">popover的内容</div>
            </template>
            <m-button>click</m-button>
           </m-popover>
        `
        let vm=new Vue({
            el:div
        })
        const btn=vm.$el.querySelector('.m-button');
        btn.click();
        vm.$nextTick(()=>{
            const {contentWrapper}=vm.$refs.cur.$refs;
            expect(contentWrapper.classList.contains('position-left')).to.be.true;
            done();
        })
    })

    it('可以设置trigger', (done) => {
        Vue.component('m-popover',Popover);
        Vue.component('m-button',Button);
        const div=document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML=`
           <m-popover  trigger="hover" ref="cur">
            <template slot="content">
                <div class="content2">popover的内容2</div>
            </template>
            <m-button>click</m-button>
           </m-popover>
        `
        let vm=new Vue({
            el:div
        })
        let event=new Event('mouseenter');
        vm.$refs.cur.$el.dispatchEvent(event);
        vm.$nextTick(()=>{
            const {contentWrapper}=vm.$refs.cur.$refs;
            expect(contentWrapper).to.exist;
            done();
        })
    })

})