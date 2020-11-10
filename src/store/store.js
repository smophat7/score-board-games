import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameToRecord: "",
    membersToRecord: [],
    typeToRecord: "",
    groupOrBoardToRecord: null,
    dateToRecord: new Date(),
    dateSet: false,
    descriptionToRecord: "",
  },

  getters: {
    gameToRecord: (state) => state.gameToRecord,
    membersToRecord: (state) => state.membersToRecord,
  },

  mutations: {
    selectGameToRecord(state, game) {
      state.gameToRecord = game;
    },
    selectMembersToRecord(state, members) {
      // state.membersToRecord.push(member);
      state.membersToRecord = members;
    },
    unselectMembersToRecord(state, member) {
      state.membersToRecord.splice(state.membersToRecord.indexOf(member, 0), 1);
    },
    selectTypeToRecord(state, type) {
      state.typeToRecord = type;
    },
    selectGroupOrBoardToRecord(state, option) {
      state.groupOrBoardToRecord = option;
    },
    selectDateToRecord(state, date) {
      state.dateToRecord = date;
    },
    changeDescription(state, description) {
      state.descriptionToRecord = description;
    },
    clearRecordValues(state) {
      state.gameToRecord = "";
      state.membersToRecord = [];
      state.typeToRecord = "";
      state.groupOrBoardToRecord = null;
      state.dateToRecord = new Date();
      state.dateSet = false;
      state.descriptionToRecord = "";
    },
  },
});
