<template>
  <div class="large-side-nav">
    <router-link :to="'/dashboard/group'" class="btn">
      <i class="fas fa-chart-line"></i>
      <h5>Group Dash</h5>
    </router-link>
    <router-link :to="'/dashboard/personal'" class="btn">
      <i class="fas fa-user"></i>
      <h5>My Dash</h5>
    </router-link>
    <router-link :to="'/dashboard/record-game/select-game-played'" class="btn">
      <i class="fas fa-plus"></i>
      <h5>Record</h5>
    </router-link>
    <router-link :to="'/dashboard/shelf'" class="btn">
      <i class="fas fa-dice"></i>
      <h5>Game Shelf</h5>
    </router-link>
    <router-link :to="'/dashboard/members'" class="btn">
      <i class="fas fa-users"></i>
      <h5>Members</h5>
    </router-link>
    <router-link :to="'/dashboard/shelf'" class="btn">
      <i class="fas fa-history"></i>
      <h5>History</h5>
    </router-link>
    <router-link :to="'/dashboard/shelf'" class="btn">
      <i class="fas fa-cog"></i>
      <h5>Settings</h5>
    </router-link>
  </div>
</template>


<script>
export default {
  name: "SecondaryNavLargeSide",
};
</script>


<style scoped>
.large-side-nav {
  display: none;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px
}

a {
  background-color: var(--s);
  margin: 8px auto;
  width: 90%;
  padding: 5px;
  color: var(--text-light);
}

h5 {
  color: var(--text-light);
  margin: 0;
}

i {
  font-size: 30px;
}

@media (min-width: 768px) {
  .large-side-nav {
    display: block;
  }
}
</style>