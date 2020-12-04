import Toast from './toast'

export default {
    install(Vue,Options){
        Vue.prototype.$toast=function(message){
            let Constructor=Vue.extend(Toast);
            const toast=new Constructor();
            toast.$slots.default=message;
            toast.$mount();
            document.body.appendChild(toast.$el);
        }
    }
}