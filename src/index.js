/**
 * Modules
 */
import Vue from 'vue';
import Toasted from 'vue-toasted';

/**
 * Vue components
 */
import Main from './views/main.vue';

/**
 * Vue statements
 */
Vue.use(Toasted);

/**
 * Mount app
 */
new Vue(Main).$mount('#app-root');

console.log('Humans worked on this project! https://wareader.nethruster.com/humans.txt');
