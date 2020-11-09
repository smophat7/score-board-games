<template>
  <div class="gameplay-history">
    <div class="heading">
      <h1>Gameplay History</h1>
      <p v-if="noGames">Your group has not yet recorded any games.</p>
    </div>
    <GameplayHistoryList :plays="plays" />
  </div>
</template>


<script>
import GameplayHistoryList from "../components/GameplayHistoryList.vue";

export default {
  name: "GameplayHistory",
  components: {
      GameplayHistoryList
  },
  computed: {
    plays() {
      return this.$root.$data.gameplayHistory;
    },
    noGames() {
      return this.$root.$data.gameplayHistory.length === 0;
    },
  },
};
</script>


<style scoped>
.heading {
  text-align: center;
}

@media (min-width: 768px) {
  .heading {
    text-align: left;
  }
}
</style>