import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Mock data to fill stuff in
import mockShelf from './mock-data/mockShelf.js';

let data = {
  // Mock shelf data
  shelf: mockShelf
};

Vue.config.productionTip = false;

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
