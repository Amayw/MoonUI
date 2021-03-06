const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })

    it('row接收gutter',(done)=>{
        Vue.component('m-row',Row);
        Vue.component('m-col',Col);
        const div=document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML=`
            <m-row gutter="20">
                 <m-col span="12"></m-col>
                 <m-col span="12"></m-col>
            </m-row>`;
        const vm=new Vue({
            el:div
        });
        setTimeout(()=>{
            const row=vm.$el.querySelector('.m-row');
            expect(getComputedStyle(row).marginLeft).to.eq('-10px');
            expect(getComputedStyle(row).marginRight).to.eq('-10px');
            const cols=vm.$el.querySelectorAll('.m-col');
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px');
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px');
            done();
            vm.$el.remove();
            vm.$destroy();
        },0)
    })

    it('row接收align',()=>{
        const div=document.createElement('div');
        document.body.appendChild(div);
        const Constructor=Vue.extend(Row);
        const vm=new Constructor({
            propsData:{
                align:'right'
            }
        })
        vm.$mount(div);
        const element=vm.$el;
        expect(getComputedStyle(element).justifyContent).to.eq('flex-end');
        vm.$el.remove();
        vm.$destroy();
    })

})
