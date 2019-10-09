import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './plugins/notes';

import './styles/fonts.scss';
import './styles/dracula_2.css';

Vue.config.productionTip = false;

import VueCodeHighlight from 'vue-code-highlight';

Vue.use(VueCodeHighlight);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
