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
    })
})