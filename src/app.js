import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Aside from './aside.vue'
import Toast from './toast.vue'
import ToastPlugin from './ToastPlugin'

Vue.component('m-button',Button)
Vue.component('m-icon',Icon)
Vue.component('m-button-group',ButtonGroup)
Vue.component('m-input',Input)
Vue.component('m-row',Row)
Vue.component('m-col',Col)
Vue.component('m-layout',Layout)
Vue.component('m-header',Header)
Vue.component('m-content',Content)
Vue.component('m-footer',Footer)
Vue.component('m-aside',Aside)
Vue.component('m-toast',Toast)
Vue.use(ToastPlugin);


new Vue({
    el:'#app',
    data(){
        return{
            loading1:false,
            loading2:false,
            loading3:false,
            message:'hi'
        }
    },
    created(){
    },
    methods:{
        showToast(){
            this.$toast('我是message',{
                // closeButton:{
                //     text:'知道了',
                //     callback:()=>{
                //         console.log('用户知道了');
                //     }
                // }
            })
        }
    }
})