import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll';

import Main from './views/main.vue';

Vue.use(infiniteScroll);

new Vue(Main).$mount('#app-root');
