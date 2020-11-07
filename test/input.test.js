import Button from '../src/button';

const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })
    it('可以设置value.', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                value: "hello"
            }
        })
        vm.$mount();
        const input = vm.$el.querySelector('input');
        expect(input.value).to.equal('hello')
        vm.$destroy()
    })
})