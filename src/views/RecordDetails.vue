<template>
  <div>
    <div class="d-flex justify-content-around header align-items-center">
      <router-link
        :to="'/dashboard/record-game/select-winner'"
        class="btn btn-primary nav-button"
        >Back</router-link
      >
      <h2 class="text-center m-0">Add Details</h2>
      <div v-if="ifDateSelected">
        <router-link
          @click.native="saveGame"
          :to="'/dashboard/gameplay-history'"
          class="btn btn-success nav-button"
          >Submit</router-link
        >
      </div>
      <div v-else>
        <router-link
          :to="'/dashboard/gameplay-history'"
          class="btn btn-success nav-button invisible"
          >Save</router-link
        >
      </div>
    </div>
    <form>
      <div class="form-group">
        <label for="dateSelection">Date Played</label>
        <InputDate />
      </div>
      <div class="form-group">
        <label for="descriptionInput">Description</label>
        <textarea
          class="form-control"
          id="descriptionInput"
          row="4"
          v-model="description"
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script>
import InputDate from "../components/InputDate.vue";

export default {
  name: "RecordDetails",
  components: {
    InputDate,
  },
  computed: {
    ifDateSelected() {
      return this.$store.state.dateSet;
    },
    description: {
      set(description) {
        this.$store.commit("changeDescription", { description });
      },
      get() {
        return this.$store.state.descriptionToRecord.description;
      },
    },
  },
  methods: {
    saveGame() {
      console.log("saveGame()");
      let newPlayRecord = {
        id:
          Math.max.apply(
            Math,
            this.$root.$data.gameplayHistory.map(function (play) {
              return play.id;
            })
          ) + 1, // Finds highest id # in gamePlayHistory array and adds 1
        boardGameId: this.$store.state.gameToRecord.id,
        playersId: this.membersToId(this.$store.state.membersToRecord),
        winnerId: this.findWinners(),
        type: this.$store.state.typeToRecord,
        rankWinToLose: this.rankPlayers(),

        // VERY MUCH INCOMPLETE:
        // Figure out how the points thing will work (will probably be done anyway when I finish RecordEnterPoints.vue component)
        points: {},

        boardWin: this.ifBoardWin(),
        datePlayed: this.$store.state.dateToRecord,
        description: this.$store.state.descriptionToRecord.description,
      };
      this.$root.$data.gameplayHistory.push(newPlayRecord);
      this.clearStoreRecordValues();
    },
    membersToId(memberArray) {
      let ids = [];
      memberArray.forEach((member) => {
        ids.push(member.id);
      });
      return ids;
    },

    // VERY MUCH INCOMPLETE:
    // Fill this out with the POINTS and RANKED gameType options too
    findWinners() {
      let winners = [];
      if (this.$store.state.typeToRecord === this.$root.gameType.VS_BOARD) {
        if (this.$store.state.groupOrBoardToRecord.name === "Board") {
          return winners;
        } else if (this.$store.state.groupOrBoardToRecord.name === "Group") {
          winners = this.membersToId(this.$store.state.membersToRecord);
          return winners;
        }
      }
    },

    // VERY MUCH INCOMPLETE:
    rankPlayers() {
      console.log("rankPlayers() is NOT COMPLETE yet");
    },

    ifBoardWin() {
      return this.$store.state.groupOrBoardToRecord.name === "Board";
    },
    clearStoreRecordValues() {
      this.$store.commit("clearRecordValues");
    },
  },
};
</script>

<style scoped>
.header {
  margin: 20px auto;
}

.nav-button {
  height: 40px;
}

@media (min-width: 576px) {
}
</style>