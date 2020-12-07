import Button from '../src/button';

const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast',()=>{
    it('存在.', () => {
        expect(Toast).to.be.ok
    })

    describe('props',()=>{
        it('可以设置autoClose为false', (done) => {
            const Constructor = Vue.extend(Toast)
            const div=document.createElement('div');
            document.body.appendChild(div);
            const vm = new Constructor({
                propsData: {
                    autoClose: false,
                }
            })
            vm.$mount(div);
            expect(document.body.contains(vm.$el)).to.equal(true);
            done();
        })

        it('可以设置autoClose为数字', (done) => {
            const Constructor = Vue.extend(Toast)
            const div=document.createElement('div');
            document.body.appendChild(div);
            const vm = new Constructor({
                propsData: {
                    autoClose: 2,
                }
            })
            vm.$mount(div);
            vm.$on('close',()=>{
                expect(document.body.contains(vm.$el)).to.equal(false);
                done();
            })
        })

        it('可以设置closeButton', () => {
            const Constructor = Vue.extend(Toast);
            const callback=sinon.fake();
            const vm = new Constructor({
                propsData: {
                    closeButton:{
                        text:'关闭',
                        callback
                    }
                }
            })
            vm.$mount();
            const closeText=vm.$el.querySelector('.close');
            expect(closeText.textContent.trim()).to.equal('关闭');
            closeText.click();
            expect(callback).to.have.been.called;
        })

        it('可以设置enableHtml', () => {
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    enableHtml:true
                }
            })
            vm.$slots.default=['<span id="king">今天天气真好</span>'];
            vm.$mount();
            const span=vm.$el.querySelector('#king');
            expect(span).to.exist;
        })

        it('可以设置position', () => {
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    position:'bottom'
                }
            })
            vm.$mount();
            expect(vm.$el.classList.has('position-bottom')).to.equal(true);
        })
    })
})