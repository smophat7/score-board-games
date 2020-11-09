<template>
  <div>
    <div class="d-flex justify-content-around header align-items-center">
      <router-link
        :to="'/dashboard/record-game/select-game-played'"
        class="btn btn-primary nav-button"
        >Backward</router-link
      >
      <h2 class="text-center m-0">Select Players</h2>
      <div v-if="ifMemberSelected">
        <router-link
          :to="'/dashboard/record-game/select-game-type'"
          class="btn btn-primary nav-button"
          >Forward</router-link
        >
      </div>
      <div v-else>
        <router-link
          :to="'/dashboard/record-game/select-game-type'"
          class="btn btn-primary nav-button invisible"
          >Forward</router-link
        >
      </div>
    </div>
    <div class="row justify-content-center m-0">
      <div
        v-for="member in members"
        :key="member.id"
        class="col-6 col-lg-4 p-0 text-center"
      >
        <div v-if="ifSelected(member)">
          <button
            class="member-button member-selected p-0"
            @click="unselectMember(member)"
          >
            <img
              class="rounded-circle"
              :src="'images/' + member.profilePicture"
              :alt="fullName(member) + ' profile picture'"
              style="max-height: 150px"
            />
            <h4>{{ fullName(member) }}</h4>
          </button>
        </div>
        <div v-else>
          <button class="member-button p-0" @click="selectMember(member)">
            <img
              class="rounded-circle"
              :src="'images/' + member.profilePicture"
              :alt="fullName(member) + ' profile picture'"
              style="max-height: 150px"
            />
            <h4>{{ fullName(member) }}</h4>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecordSelectPlayers",
  methods: {
    selectMember(member) {
      this.$store.commit("selectMembersToRecord", member);
    },
    unselectMember(member) {
        this.$store.commit("unselectMembersToRecord", member);
    },
    ifSelected(member) {
      return this.$store.state.membersToRecord.includes(member);
    },
    fullName(member) {
      return member.firstName + " " + member.lastName;
    },
  },
  computed: {
    members() {
      return this.$root.$data.members;
    },
    ifMemberSelected() {
      return this.$store.state.membersToRecord !== null;
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

.member-button {
  width: 150px;
  height: 150px;
  margin: 5px;
  background-color: white;
  border: 4px solid var(--p-dark);
  border-radius: 5%;
}

.member-button:hover {
  border-color: var(--p);
}

.member-button:focus {
    border-color: var(--p);
}

.member-button a {
  color: var(--text-dark);
  text-decoration: none;
}

.member-selected {
  border-color: var(--s);
}

img {
  width: 100px;
}

h4 {
  font-size: 18px;
  margin-top: 8px;
}

@media (min-width: 576px) {
  .member-button {
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