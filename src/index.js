import Vue from 'vue';

import Toasted from 'vue-toasted';

import Main from './views/main.vue';

Vue.use(Toasted);

new Vue(Main).$mount('#app-root');
