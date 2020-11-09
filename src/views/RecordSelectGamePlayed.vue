<template>
  <div>
    <div class="d-flex justify-content-around header align-items-center">
      <router-link
        :to="'/dashboard/record-game/select-game-played'"
        class="btn btn-primary nav-button invisible"
        >Back</router-link
      >
      <h2 class="text-center m-0">Select Game</h2>
      <div v-if="ifGameSelected">
        <router-link
          :to="'/dashboard/record-game/select-players'"
          class="btn btn-primary nav-button"
          >Next</router-link
        >
      </div>
      <div v-else>
        <router-link
          :to="'/dashboard/record-game/select-players'"
          class="btn btn-primary nav-button invisible"
          >Next</router-link
        >
      </div>
    </div>
    <div class="row justify-content-center m-0">
      <div
        v-for="game in games"
        :key="game.id"
        class="col-6 col-lg-4 p-0 text-center"
      >
        <div v-if="ifSelected(game)">
          <button
            class="game-button game-selected p-0"
            @click="selectGame(game)"
          >
            <img
              :src="game.images.medium"
              :alt="game.name + ' game cover'"
              style="max-height: 150px"
            />
            <h4>{{ game.name }}</h4>
          </button>
        </div>
        <div v-else>
          <button class="game-button p-0" @click="selectGame(game)">
            <router-link :to="'/dashboard/record-game/select-players'">
            <img
              :src="game.images.medium"
              :alt="game.name + ' game cover'"
              style="max-height: 150px"
            />
            <h4>{{ game.name }}</h4>
              </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecordSelectGamePlayed",
  methods: {
    selectGame(game) {
      this.$store.commit("selectGameToRecord", game);
    },
    ifSelected(game) {
      return this.$store.state.gameToRecord === game;
    },
  },
  computed: {
    games() {
      return this.$root.$data.shelf;
    },
    ifGameSelected() {
      return this.$store.state.gameToRecord !== "";
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

.game-button {
  width: 150px;
  height: 150px;
  margin: 5px;
  background-color: white;
  border: 4px solid var(--p-dark);
  border-radius: 5%;
}

.game-button:hover {
  border-color: var(--p);
}

.game-button a {
  color: var(--text-dark);
  text-decoration: none;
}


.game-selected {
  border-color: var(--s);
}

img {
  width: 100px;
}

h4 {
  font-size: 18px;
}

@media (min-width: 576px) {
  .game-button {
    width: 250px;
    height: 250px;
    margin: 15px;
  }

  img {
    width: 150px;
  }

  h4 {
    font-size: 24px;
  }
}
</style>