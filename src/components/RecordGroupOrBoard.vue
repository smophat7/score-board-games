<template>
  <div>
    <div class="d-flex justify-content-around header align-items-center">
      <router-link
        :to="'/dashboard/record-game/select-game-type'"
        class="btn btn-primary nav-button"
        ><i class="fas fa-chevron-left"></i> Back</router-link
      >
      <h2 class="text-center m-0">Select Winner</h2>
      <div v-if="ifWinnerSelected">
        <router-link
          :to="'/dashboard/record-game/record-details'"
          class="btn btn-primary nav-button"
          >Next <i class="fas fa-chevron-right"></i></router-link
        >
      </div>
      <div v-else>
        <router-link
          :to="'/dashboard/record-game/record-details'"
          class="btn btn-primary nav-button invisible"
          >Next <i class="fas fa-chevron-right"></i></router-link
        >
      </div>
    </div>
    <div class="row justify-content-center m-0">
      <div
        v-for="option in winnerOptions"
        :key="option.name"
        class="col-sm-6 p-0 text-center"
      >
        <div v-if="ifSelected(option)">
          <button
            class="option-button option-selected p-0"
            @click="selectOption(option)"
          >
            <router-link :to="'/dashboard/record-game/record-details'">
              <h4>{{ option.name }}</h4>
            </router-link>
          </button>
        </div>
        <div v-else>
          <button class="option-button p-0" @click="selectOption(option)">
            <router-link :to="'/dashboard/record-game/record-details'">
              <h4>{{ option.name }}</h4>
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecordGroupOrBoard",
  data() {
    return {
      winnerOptions: [
        {
          name: "Group",
        },
        {
          name: "Board",
        },
      ]
    }
  },
  methods: {
    selectOption(option) {
      this.$store.commit("selectGroupOrBoardToRecord", option);
    },
    ifSelected(option) {
      return this.$store.state.groupOrBoardToRecord === option;
    },
  },
  computed: {
      ifWinnerSelected() {
          return this.$store.state.groupOrBoardToRecord !== "";
      }
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

.option-button {
  width: 250px;
  height: 80px;
  margin: 5px;
  background-color: white;
  border: 4px solid var(--p-dark);
  border-radius: 5%;
}

.option-button:hover {
  border-color: var(--p);
}

.option-button a {
  color: var(--text-dark);
  text-decoration: none;
}

.option-selected {
  border-color: var(--s);
}

h4 {
  margin: 0;
}

@media (min-width: 576px) {
}
</style>