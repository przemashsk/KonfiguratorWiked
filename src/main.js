import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import Konva from 'konva';
import VueKonva from 'vue-konva';
// import router from './router'

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(VueKonva);
// Vue.use(router);

new Vue({
  store,
  data:{
    test:'asdf'
  },
  render: h => h(App)
}).$mount('#app')
