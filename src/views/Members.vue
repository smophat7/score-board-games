<template>
  <div class="members">
    <div class="heading">
      <h1>Group Members</h1>
      <p v-if="noMembers">There are no members in your group yet.</p>
      <MemberAddNew />
    </div>
    
    <MemberList :members="members" />
  </div>
</template>


<script>
import MemberList from "../components/MemberList.vue";
import MemberAddNew from "../components/MemberAddNew.vue";

export default {
  name: "Members",
  components: {
    MemberList,
    MemberAddNew
  },
  computed: {
    members() {
      return this.$root.$data.members;
    },
    noMembers() {
      return this.$root.$data.members.length === 0;
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