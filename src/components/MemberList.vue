<template>
  <div class="members">
    <div class="member" v-for="member in members" :key="member.id">
      <div class="card">
        <h3 class="card-body">{{ fullName(member) }}</h3>
        <div class="media">
          <img
            class="rounded-circle align-self-center w-25"
            :src="'images/' + member.profilePicture"
            :alt="fullName(member) + ' profile picture'"
          />
          <div class="media-body ml-3 my-auto">
            <p>{{member.totalWins}} wins</p>
            <p>{{member.gamesPlayed}} games played</p>
            <p>{{ winPercentage(member) }}% won</p>
            <p>Member since {{ readableDate(member.dateJoined) }}</p>

            <input
              class="btn btn-danger"
              type="button"
              value="Remove"
              @click="removeFromGroup(member)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberList",
  props: {
    members: Array,
  },
  methods: {
    removeFromGroup(member) {
      this.$root.$data.members.splice(
        this.$root.$data.members.indexOf(member, 0),
        1
      );
    },
    fullName(member) {
        return member.firstName + " " + member.lastName;
    },
    winPercentage(member) {
        let percent = (100 * (member.totalWins / member.gamesPlayed)).toFixed(2);
        return percent.toString();
    },
    readableDate(date) {
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }
  },
};
</script>

<style scoped>
.member {
  margin: 30px 0;
}

.card {
  padding: 15px;
}
</style>