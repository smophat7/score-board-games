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
        <label for="dateSelection">Date Played (required)</label>
        <InputDate />
      </div>
      <div class="form-group">
        <label for="descriptionInput">Description (optional)</label>
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
        this.$store.commit("changeDescription", {
          description
        });
      },
      get() {
        return this.$store.state.descriptionToRecord.description;
      },
    },
  },
  methods: {
    saveGame() {
      let newPlayRecord = {
        id: Math.max.apply(
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
        points: this.$store.state.pointsToRecord,
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
    clearStoreRecordValues() {
      this.$store.commit("clearRecordValues");
    },
    // Complicated, but it should work correctly; Really highlights the
    // flaws in how Gameplay objects are recorded
    rankPlayers() {
      if (this.$store.state.typeToRecord === this.$root.gameType.POINTS.LOW_WINS ||
        this.$store.state.typeToRecord === this.$root.gameType.POINTS.HIGH_WINS) {
        let players = this.membersToId(this.$store.state.membersToRecord);
        let points = this.$store.state.pointsToRecord;

        // Sort player ids from highest to lowest point values
        let highToLow = players.sort((a, b) => points[b] - points[a]);

        // Sort players from winners to losers depending on which point systems we are using
        let bestToWorse = [];
        if (this.$store.state.typeToRecord === this.$root.gameType.POINTS.HIGH_WINS) {
          bestToWorse = highToLow;
        } else if (this.$store.state.typeToRecord === this.$root.gameType.POINTS.LOW_WINS) {
          bestToWorse = highToLow.reverse();
        }

        // Group like scores into sub-arrays, creating a 2-D array that has an array for each
        // duplicate; i.e. if 3 and 5 tied, this sortedArray contains two [3,5] sub-arrays somewhere
        let sortedArray = [];
        bestToWorse.forEach(id => {
          let matchScore = points[id];
          let likeScores = bestToWorse.filter(member => {
            return points[member] === matchScore;
          });
          if (likeScores.length === 1) {
            sortedArray.push(likeScores[0]);
          } else {
            sortedArray.push(likeScores);
          }
        });

        // Convert potential 2-D array into a 1-D array of simple strings
        let stringArray = sortedArray.map(JSON.stringify);

        // Eliminate duplicates of simple string array by casting into a set
        let uniqueStringSet = new Set(stringArray);

        // Make another complex array from the non-duplicate filled set of strings
        let uniqueArray = Array.from(uniqueStringSet, JSON.parse);

        return uniqueArray;
      } else {
        return [];
      }
    },
    // VERY MUCH INCOMPLETE:
    // Fill this out with the RANKED gameType options too
    findWinners() {
      let winners = [];
      if (this.$store.state.typeToRecord === this.$root.gameType.VS_BOARD) {
        if (this.$store.state.groupOrBoardToRecord.name === "Board") {
          // Winners is empty
          return winners;
        } else if (this.$store.state.groupOrBoardToRecord.name === "Group") {
          // Every player is a winner
          winners = this.membersToId(this.$store.state.membersToRecord);
          return winners;
        }
      } else if (this.$store.state.typeToRecord === this.$root.gameType.RANKED) {
        // NOT DONE NOT DONE NOT DONE NOT DONE NOT DONE NOT DONE NOT DONE NOT DONE NOT DONE NOT DONE
        console.log("findWinner() not done for RANKED type yet"); // delete me
        return winners;
      } else if (this.$store.state.typeToRecord === this.$root.gameType.POINTS.LOW_WINS ||
        this.$store.state.typeToRecord === this.$root.gameType.POINTS.HIGH_WINS) {

        winners = this.rankPlayers()[0];
        return winners;

        // let bestScore = this.$store.state.pointsToRecord[this.$store.state.membersToRecord[0]];
        // if (this.$store.state.typeToRecord === this.$root.gameType.POINTS.HIGH_WINS) {
        //   // Determine the highest score if POINTS.HIGH_WINS
        //   Object.keys(this.$store.state.pointsToRecord).forEach(id => {
        //     if (this.$store.state.pointsToRecord[id] > bestScore) {
        //       bestScore = this.$store.state.pointsToRecord[id];
        //     }
        //   });

        // } else {
        //   // Determine the lowest score if POINTS.LOW_WINS
        //   Object.keys(this.$store.state.pointsToRecord).forEach(id => {
        //     if (this.$store.state.pointsToRecord[id] < bestScore) {
        //       bestScore = this.$store.state.pointsToRecord[id];
        //     }
        //   });
        // }
        // // Adds all the players with that best score to the winners array
        // Object.keys(this.$store.state.pointsToRecord).forEach(id => {
        //   if (this.$store.state.pointsToRecord[id] === bestScore) {
        //     winners.push(id);
        //   }
        // });
        // return winners
      } else {
        return winners;
      }
    },
    ifBoardWin() {
      if (this.$store.state.typeToRecord === "VS_BOARD") {
        return this.$store.state.groupOrBoardToRecord.name === "Board";
      } else {
        return false;
      }
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

