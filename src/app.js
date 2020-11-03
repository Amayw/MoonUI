import Vue from 'vue'
import Button from './components/button'
import Icon from './components/Icon'
import ButtonGroup from './components/button-group'

Vue.component('m-button',Button)
Vue.component('m-icon',Icon)
Vue.component('m-button-group',ButtonGroup)

new Vue({
    el:'#app',
    data(){
        return{
            loading1:false,
            loading2:false,
            loading3:false
        }
}
})

import chai from 'chai'
const expect=chai.expect;
import spies from'chai-spies'
chai.use(spies)
//单元测试

//测试icon属性
{
    const Constructor=Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            icon:'settings'
        }
    });
    vm.$mount();
    let useElement=vm.$el.querySelector('use');
    let name=useElement.getAttribute('xlink:href');
    expect(name).to.equal("#i-settings");
    vm.$destroy();
}

//测试loading
{
    const Constructor=Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            icon:"settings",
            loading:true
        }
    });
    vm.$mount();
    let useElement=vm.$el.querySelector('use');
    let name=useElement.getAttribute('xlink:href');
    expect(name).to.equal('#i-loading');
    vm.$destroy();
}

// 测试iconPosition属性
{
    const Constructor=Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            content:'按钮',
            icon:"download",
            iconPosition:'right',
        }
    });
    vm.$mount();
    let svgElement=vm.$el.querySelector('svg');
    let className=svgElement.getAttribute('class');
    expect(className).to.equal('m-icon right');
    vm.$destroy();
}

{
    const Constructor=Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            content:'按钮',
            icon:"download",
            loading:true
        }
    });
    vm.$mount();
    let svgElement=vm.$el.querySelector('svg');
    let className=svgElement.getAttribute('class');
    expect(className).to.equal('m-icon loading left');
    vm.$destroy();
}

//测试click事件
{
    const Constructor=Vue.extend(Button);
    const vm=new Constructor();
    vm.$mount("#test");
    const spy=chai.spy(function(){})
    vm.$on('click',spy);
    let button=vm.$el;
    button.click();
    expect(spy).to.have.been.called();
}