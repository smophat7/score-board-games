<template>
  <div>
    <div class="d-flex justify-content-around header align-items-center">
      <router-link @click.native="addPointsToStore" :to="'/dashboard/record-game/select-game-type'" class="btn btn-primary nav-button"><i class="fas fa-chevron-left"></i> Back</router-link>
      <h2 class="text-center m-0">Enter Points</h2>
      <div v-if="ifPointsEntered">
        <router-link @click.native="addPointsToStore" :to="'/dashboard/record-game/record-details'" class="btn btn-primary nav-button">Next <i class="fas fa-chevron-right"></i></router-link>
      </div>
      <div v-else>
        <router-link :to="'/dashboard/record-game/record-details'" class="btn btn-primary nav-button invisible">Next <i class="fas fa-chevron-right"></i>
        </router-link>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <div>
      <div v-for="player in players" :key="player.id">
        <input v-model.number="points[player.id]" type="number" :id="player.id">
        <label :for="player.id">{{ fullName(player.firstName, player.lastName) }}</label>
      </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "RecordEnterPoints",
    data() {
      return {
        scores: this.$store.state.pointsToRecord,
        points: this.$store.state.pointsToRecord,
      }
    },
    methods: {
      fullName(first, last) {
        return first + " " + last;
      },
      addPointsToStore() {
        this.$store.commit("setPointsToRecord", this.points);
      }
    },
    computed: {
      players() {
        return this.$store.state.membersToRecord;
      },
      ifPointsEntered() {
        // let statePoints = this.$store.state.pointsToRecord
        // let size = Object.keys(statePoints).length
        // if (size === this.players.length) {
        //   let i = 0;
        //   let ifFilled = true;
        //   while (ifFilled && i < this.players.length) {
        //     let j = this.players[i].id;
        //     if (typeof statePoints[j] === 'undefined' || statePoints[j] === "") {
        //       ifFilled = false;
        //     } else {
        //       i++;
        //     }
        //   }
        //   return ifFilled;
        // } else {
        //   return false;
        // }
        let statePoints = this.points;
        let size = Object.keys(statePoints).length
        if (size === this.players.length) {
          let i = 0;
          let ifFilled = true;
          while (ifFilled && i < this.players.length) {
            let j = this.players[i].id;
            if (typeof statePoints[j] === 'undefined' || statePoints[j] === "") {
              ifFilled = false;
            } else {
              i++;
            }
          }
          return ifFilled;
        } else {
          return false;
        }
      }
    },
    watch: {
      scores: function () {
        this.$store.commit("setPointsToRecord", this.scores);
      }
    }
  };
</script>

<style scoped>
.header {
  margin: 20px auto;
}

.nav-button {
  height: 40px;
}


input {
  width: 6rem;
  text-align: center;
  margin-right: 10px;
  margin-top: 10px;
}

@media (min-width: 576px) {
}
</style>