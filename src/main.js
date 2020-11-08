import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Mock data to fill stuff in
import mockShelf from './mock-data/mockShelf.js';
import mockMembers from './mock-data/mockMembers.js';

let data = {
  // Mock shelf data
  shelf: mockShelf,
  members: mockMembers
};

Vue.config.productionTip = false;

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
