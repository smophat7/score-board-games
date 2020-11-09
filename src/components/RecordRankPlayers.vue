<template>
  <div>
    <div class="d-flex justify-content-around header align-items-center">
      <router-link
        :to="'/dashboard/record-game/select-game-type'"
        class="btn btn-primary nav-button"
        >Back</router-link
      >
      <h2 class="text-center m-0">Select Game</h2>
      <div v-if="ifGameSelected">
        <router-link
          :to="'/dashboard/record-game/record-details'"
          class="btn btn-primary nav-button"
          >Next</router-link
        >
      </div>
      <div v-else>
        <router-link
          :to="'/dashboard/record-game/record-details'"
          class="btn btn-primary nav-button invisible"
          >Next</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecordRankPlayers",
  methods: {},
  computed: {},
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