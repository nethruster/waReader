/**
 * Modules
 */
import Vue from 'vue';
import Toasted from 'vue-toasted';
/**
 * Styles
 */
import "./styles/styles.scss";
import "./styles/print.scss";
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

if (process.env.NODE_ENV === "production" && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
