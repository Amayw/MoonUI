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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

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
Vue.component('m-tabs',Tabs)
Vue.component('m-tabs-head',TabsHead)
Vue.component('m-tabs-body',TabsBody)
Vue.component('m-tabs-item',TabsItem)
Vue.component('m-tabs-pane',TabsPane)
Vue.component('m-popover',Popover)
Vue.component('m-collapse',Collapse)
Vue.component('m-collapse-item',CollapseItem)

new Vue({
    el:'#app',
    data(){
        return{
            selected:['2']
        }
    },
    created(){
    },
    methods:{
    }
})