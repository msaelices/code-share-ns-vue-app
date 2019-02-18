import Vue from 'vue';
import App from '~/App.vue';
import { ActionBar, Button, GridLayout, Page } from 'nativescript-vue-web';
import router from './router';

Vue.component('ActionBar', ActionBar);
Vue.component('Button', Button);
Vue.component('GridLayout', GridLayout);
Vue.component('Page', Page);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
