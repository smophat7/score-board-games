<template>
  <div>
    <div class="d-flex justify-content-around header align-items-center">
      <router-link :to="'/dashboard/record-game/select-game-played'" class="btn btn-primary nav-button">Backward</router-link>
      <h2 class="text-center m-0">Select Game Type</h2>
      <div v-if="ifGameSelected">
        <router-link
          :to="'/dashboard/record-game/select-players'"
          class="btn btn-primary nav-button"
          >Forward</router-link
        >
      </div>
      <div v-else>
        <router-link
          :to="'/dashboard/record-game/select-players'"
          class="btn btn-primary nav-button invisible"
          >Forward</router-link
        >
      </div>
    </div>
    <div class="row justify-content-center m-0">
      <div v-for="game in games" :key="game.id" class="col-6 col-lg-4 p-0 text-center">
        <button class="game-button p-0">
          <img
            :src="game.images.medium"
            :alt="game.name + ' game cover'"
            style="max-height: 150px"
          />
          <h4>{{ game.name }}</h4>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecordSelectGameType",
  methods: {
    // selectGame: (game) => {
    //   this.$store.commit("selectGameToRecord", game.id);
    // },
  },
  computed: {
    // games() {
    //   return this.$root.$data.shelf;
    // },
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