const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/tabs-item'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    })

    it('接受disabled',()=>{
        const callback=sinon.fake();
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled:true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true;
        vm.$on('click',callback);
        vm.$el.click()
        expect(callback).to.have.not.been.called
        vm.$destroy();
    })

    it('接受name',()=>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name:'meinv'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.equal('meinv');
        vm.$destroy()
    })

})