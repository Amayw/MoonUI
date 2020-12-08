const expect = chai.expect;
import Vue from 'vue'
import TabsPane from '../src/tabs-pane'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(TabsPane).to.be.ok
    })

    it('接受name',()=>{
        const Constructor = Vue.extend(TabsPane)
        const vm = new Constructor({
            propsData: {
                name:'meinv'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.equal('meinv');
        vm.$destroy()
    })

})