import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './plugins/notes';

import './styles/fonts.scss';
import 'vue-code-highlight/themes/duotone-sea.css';

Vue.config.productionTip = false;

import VueCodeHighlight from 'vue-code-highlight';

Vue.use(VueCodeHighlight);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
