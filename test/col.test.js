const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })

    it('col接收span',()=>{
        const Constructor=Vue.extend(Col);
        const vm=new Constructor({
            propsData:{
                span:1
            }
        })
        vm.$mount();
        expect(vm.$el.classList.contains('col-1')).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })

    it('col接收offset',()=>{
        const Constructor=Vue.extend(Col);
        const vm=new Constructor({
            propsData:{
                offset:1
            }
        })
        vm.$mount();
        console.log(vm.$el.getAttribute('class'))
        expect(vm.$el.classList.contains('offset-1')).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })

})