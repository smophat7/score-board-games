<template>
  <div>
    <div v-if="ifRanked">
      <RecordRankPlayers />
    </div>
    <div v-else-if="ifGroupOrBoard">
      <RecordGroupOrBoard />
    </div>
    <div v-else>
      <RecordEnterPoints />
    </div>
  </div>
</template>

<script>
import RecordEnterPoints from "../components/RecordEnterPoints";
import RecordRankPlayers from "../components/RecordRankPlayers";
import RecordGroupOrBoard from "../components/RecordGroupOrBoard";

export default {
  name: "RecordSelectWinner",
  components: {
    RecordEnterPoints,
    RecordRankPlayers,
    RecordGroupOrBoard,
  },
  methods: {},
  computed: {
    ifRanked() {
      return (
        this.$store.state.typeToRecord === this.$root.$data.gameType.RANKED
      );
    },
    ifGroupOrBoard() {
      return (
        this.$store.state.typeToRecord === this.$root.$data.gameType.VS_BOARD
      );
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