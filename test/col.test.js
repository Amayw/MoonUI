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
        expect(vm.$el.classList.contains('offset-1')).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })

    it('col接收pad',()=>{
        const Constructor=Vue.extend(Col);
        const vm=new Constructor({
            propsData:{
                pad:{span:1, offset:1}

            }
        })
        vm.$mount();
        expect(vm.$el.classList.contains('col-pad-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-pad-1')).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })

    it('col接收narrowPc',()=>{
        const Constructor=Vue.extend(Col);
        const vm=new Constructor({
            propsData:{
                narrowPc:{span:1, offset:1}

            }
        })
        vm.$mount();
        expect(vm.$el.classList.contains('col-narrow-pc-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-narrow-pc-1')).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })

    it('col接收pc',()=>{
        const Constructor=Vue.extend(Col);
        const vm=new Constructor({
            propsData:{
                pc:{span:1, offset:1}

            }
        })
        vm.$mount();
        expect(vm.$el.classList.contains('col-pc-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-pc-1')).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })

    it('col接收widePc',()=>{
        const Constructor=Vue.extend(Col);
        const vm=new Constructor({
            propsData:{
                widePc:{span:1, offset:1}

            }
        })
        vm.$mount();
        expect(vm.$el.classList.contains('col-wide-pc-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-wide-pc-1')).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })


})