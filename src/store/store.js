import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameToRecord: "",
    membersToRecord: [],
  },

  getters: {
    gameToRecord: (state) => state.gameToRecord,
    membersToRecord: (state) => state.membersToRecord,
  },

  mutations: {
    selectGameToRecord(state, game) {
      state.gameToRecord = game;
    },
    selectMembersToRecord(state, member) {
      state.membersToRecord.push(member);
    },
    unselectMembersToRecord(state, member) {
      state.membersToRecord.splice(state.membersToRecord.indexOf(member, 0), 1);
    },
  },
});
