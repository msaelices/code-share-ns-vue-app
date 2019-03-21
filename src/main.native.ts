import Vue from 'nativescript-vue';
import Navigator from 'nativescript-vue-navigator';

import App from './App.vue';
import { options } from './router';

const routes = options.routes.reduce((data, route) => {
  data[route.name] = {
    component: route.component,
  };
  return data;
}, {});

Vue.use(Navigator, { routes });

// Set the following to `true` to hide the logs created by nativescript-vue
Vue.config.silent = false;
// Set the following to `false` to not colorize the logs created by nativescript-vue
// disabled in template due to typing issue for Typescript projects....NEEDS TO BE FIXED
// Vue.config.debug = true;

new Vue({
  render: (h) => h('frame', [h(App)]),
}).$start();
