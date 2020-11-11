const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
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
            const row=vm.$el.querySelector('.moon-row');
            expect(getComputedStyle(row).marginLeft).to.eq('-10px');
            expect(getComputedStyle(row).marginRight).to.eq('-10px');
            const cols=vm.$el.querySelectorAll('.moon-col');
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px');
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px');
            done();
        })
    })

    it('row接收align',(done)=>{
        Vue.component('m-row',Row);
        Vue.component('m-col',Col);
        const div=document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML=`
            <m-row align="center">
                 <m-col span="12"></m-col>
                 <m-col span="12"></m-col>
            </m-row>`;
        const vm=new Vue({
            el:div
        });
        setTimeout(()=>{
            const row=vm.$el.querySelector('.moon-row');
            expect(getComputedStyle(row).justifyContent).to.eq('center');
            done();
        })
    })

})