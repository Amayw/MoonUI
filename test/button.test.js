const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/components/button'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })
    it('可以设置icon.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: "settings"
            }
        })
        vm.$mount();
        const useElement = vm.$el.querySelector('use');
        const name=useElement.getAttribute('xlink:href');
        expect(name).to.equal('#i-settings')
        vm.$destroy()
    })
    it('可以设置loading.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        }).$mount()
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
        vm.$destroy()
    })
    it('iconPosition默认是left，loading默认是false，当loading=false时，svg的class="m-icon left"', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount()
        const icon = vm.$el.querySelector('svg')
        expect(icon.getAttribute('class')).to.equal('m-icon left')
        vm.$destroy()
    })
    it('iconPosition==="right"，当loading=true时，svg的class="m-icon loading right"', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right',
                loading:true
            }
        }).$mount()
        const icon = vm.$el.querySelector('svg')
        expect(icon.getAttribute('class')).to.equal('m-icon loading right')
        vm.$destroy()
    })
    it('点击 button 触发 click 事件', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount()

        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called
    })
})