import Button from '../src/button';

const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input';
import {describe} from 'mocha';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
    it('存在.', () => {
        expect(Button).to.be.ok;
    });
    describe('Props', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(() => {
            vm.$destroy();
        });
        it('可以设置value.', () => {
            vm = new Constructor({
                propsData: {
                    value: 'hello'
                }
            });
            vm.$mount();
            const input = vm.$el.querySelector('input');
            expect(input.value).to.equal('hello');
        });
        it('可以设置disabled.', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            });
            vm.$mount();
            const input = vm.$el.querySelector('input');
            expect(input.getAttribute('disabled')).to.equal('disabled');
        });
        it('可以设置readonly.', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            });
            vm.$mount();
            const input = vm.$el.querySelector('input');
            //input.readOnly
            expect(input.getAttribute('readonly')).to.equal('readonly');
        });
        it('可以设置error.', () => {
            vm = new Constructor({
                propsData: {
                    error: '输入错误'
                }
            });
            vm.$mount();
            const use = vm.$el.querySelector('use');
            const span = vm.$el.querySelector('span');
            expect(use.getAttribute('xlink:href')).to.equal('#i-error');
            expect(span.textContent).to.equal('输入错误');
        });
        it('可以设置tip.', () => {
            vm = new Constructor({
                propsData: {
                    tip: '输入正确'
                }
            });
            vm.$mount();
            const use = vm.$el.querySelector('use');
            const span = vm.$el.querySelector('span');
            expect(use.getAttribute('xlink:href')).to.equal('#i-tip');
            expect(span.textContent).to.equal('输入正确');
        });
    });
    describe('Events', () => {
        it('支持change/input/blur/focus事件', () => {
            ['change', 'input', 'blur', 'focus'].forEach(eventName => {
                const Constructor = Vue.extend(Input);
                const vm = new Constructor({});
                vm.$mount();
                const callback = sinon.fake();
                vm.$on(eventName, callback);
                const event = new Event(eventName);
                Object.defineProperty(event, 'target', {value: {value: 'hi'}, enumerable: true});
                const input = vm.$el.querySelector('input');
                input.dispatchEvent(event);
                expect(callback).to.have.been.calledWith(event.target.value);
                vm.$destroy();
            });

        });
    });
});