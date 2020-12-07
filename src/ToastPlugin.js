import Toast from './toast'

let currentToast;
export default {
    install(Vue,Options){
        Vue.prototype.$toast=function(message,toastOptions){
              if(currentToast){
                  currentToast.close();
              }
              currentToast=createToast(Vue,message,toastOptions,()=>{
                  currentToast=null;
              })
            }
        }
    }

function createToast(Vue,message,propsDate,onClose){
    let Constructor=Vue.extend(Toast);
    const toast=new Constructor({
        propsData:propsDate
    });
    toast.$slots.default=message;
    toast.$mount();
    toast.$on('close',onClose);
    document.body.appendChild(toast.$el);
    return toast;
}