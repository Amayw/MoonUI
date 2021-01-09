const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head';
import TabsBody from '../src/tabs-body';
import TabsItem from '../src/tabs-item';
import TabsPane from '../src/tabs-pane';
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })

    it('可以接收selected', (done) => {
        Vue.component('m-tabs',Tabs)
        Vue.component('m-tabs-head',TabsHead)
        Vue.component('m-tabs-body',TabsBody)
        Vue.component('m-tabs-item',TabsItem)
        Vue.component('m-tabs-pane',TabsPane)
        const div=document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML=`
           <m-tabs selected="tabs2">
                <m-tabs-head>
                    <m-tabs-item name="tabs1">tabs1</m-tabs-item>
                    <m-tabs-item name="tabs2">tabs2</m-tabs-item>
                    <m-tabs-item name="tabs3">tabs3</m-tabs-item>
                </m-tabs-head>
                <m-tabs-body>
                    <m-tabs-pane name="tabs1">content1</m-tabs-pane>
                    <m-tabs-pane name="tabs2">content2</m-tabs-pane>
                    <m-tabs-pane name="tabs3">content3</m-tabs-pane>
                </m-tabs-body>
            </m-tabs>
        `
        let vm=new Vue({
            el:div
        })
        vm.$nextTick(()=>{
            let name=vm.$el.querySelector(`.m-tabs-item[data-name="tabs2"]`);
            expect(name.classList.contains('active')).to.be.true;
            done();
        })
        vm.$destroy()

    })


})
