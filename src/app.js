import Vue from 'vue'
import Button from './components/button'
import Icon from './components/Icon'

Vue.component('m-button',Button)
Vue.component('m-icon',Icon)

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