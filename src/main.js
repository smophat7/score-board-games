import Vue from "vue";
// import Vuex from "vuex";
import "es6-promise/auto"; // For using promises with Vuex for I.E.
import store from './store/store';
import gameType from './assets/gameType.js';
import App from "./App.vue";
import router from "./router";

// Mock data to fill stuff in
import mockShelf from "./mock-data/mockShelf.js";
import mockMembers from "./mock-data/mockMembers.js";
import mockGameplayHistory from "./mock-data/mockGameplayHistory.js";

let data = {
  // Mock shelf data
  shelf: mockShelf,
  members: mockMembers,
  gameplayHistory: mockGameplayHistory,
  gameType,
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data,
  render: (h) => h(App),
}).$mount("#app");
