<template>
  <div>
    <div class="d-flex justify-content-around header align-items-center">
      <router-link :to="'/dashboard/record-game/select-players'" class="btn btn-primary nav-button"><i class="fas fa-chevron-left"></i> Back</router-link>
      <h2 class="text-center m-0">Select Game Type</h2>
      <div v-if="ifTypeSelected">
        <router-link :to="'/dashboard/record-game/select-winner'" class="btn btn-primary nav-button">Next <i class="fas fa-chevron-right"></i></router-link>
      </div>
      <div v-else>
        <router-link :to="'/dashboard/record-game/select-winner'" class="btn btn-primary nav-button invisible">Next <i class="fas fa-chevron-right"></i>
        </router-link>
      </div>
    </div>
    <div class="row justify-content-center m-0">
      <div v-for="type in types" :key="type" class="col-sm-6 p-0 text-center">
        <div v-if="ifSelected(type)">
          <button class="type-button type-selected p-0" @click="selectType(type)">
            <router-link :to="'/dashboard/record-game/select-winner'">
              <h4>{{ typeText(type) }}</h4>
            </router-link>
          </button>
        </div>
        <div v-else>
          <button class="type-button p-0" @click="selectType(type)">
            <router-link :to="'/dashboard/record-game/select-winner'">
              <h4>{{ typeText(type) }}</h4>
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecordSelectGameType",
  methods: {
    selectType(type) {
      this.$store.commit("selectTypeToRecord", type);
    },
    typeText(typeEnum) {
      switch (typeEnum) {
        case this.$root.$data.gameType.POINTS.HIGH_WINS:
          return "Points (highest wins)";
        case this.$root.$data.gameType.POINTS.LOW_WINS:
          return "Points (lowest wins)";
        case this.$root.$data.gameType.RANKED:
          return "Ranked (unfinished)";
        case this.$root.$data.gameType.VS_BOARD:
          return "Cooperative";
      }
    },
    ifSelected(type) {
      return this.$store.state.typeToRecord === type;
    },
  },
  computed: {
    types() {
      let allTypes = [];
      allTypes.push(this.$root.gameType.POINTS.HIGH_WINS);
      allTypes.push(this.$root.gameType.POINTS.LOW_WINS);
      allTypes.push(this.$root.gameType.RANKED);
      allTypes.push(this.$root.gameType.VS_BOARD);
      return allTypes;
    },
    ifTypeSelected() {
      return this.$store.state.typeToRecord !== "";
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

.type-button {
  width: 250px;
  height: 80px;
  margin: 5px;
  background-color: white;
  border: 4px solid var(--p-dark);
  border-radius: 5%;
}

.type-button:hover {
  border-color: var(--p);
}

.type-button a {
  color: var(--text-dark);
  text-decoration: none;
}

.type-selected {
  border-color: var(--s);
}

h4 {
  margin: 0;
}

@media (min-width: 576px) {
}
</style>