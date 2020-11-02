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