<template>
  <div class="small-bottom-nav">
    <div class="row h-100 align-items-center">
      <div class="col align-self-center">
        <router-link :to="'group'">
          <i class="fas fa-chart-line"></i>
          <h5>Group</h5>
        </router-link>
      </div>
      <div class="col">
        <router-link :to="'personal'">
          <i class="fas fa-user"></i>
          <h5>My Dash</h5>
        </router-link>
      </div>
      <div class="col">
        <router-link :to="'record-game'">
          <i class="fas fa-plus"></i>
          <h5>Record</h5>
        </router-link>
      </div>
      <div class="col">
        <div class="dropup">
          <button class="btn btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-bars"></i><h5>More</h5>
          </button>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <router-link :to="'shelf'" class="dropdown-item"><h5><i class="fas fa-dice"></i> Game Shelf</h5></router-link>
            <router-link :to="'members'" class="dropdown-item"><h5><i class="fas fa-users"></i> Group Members</h5></router-link>
            <router-link :to="'shelf'" class="dropdown-item"><h5><i class="fas fa-history"></i> History</h5></router-link>
            <div class="dropdown-divider"></div>
            <router-link :to="'shelf'" class="dropdown-item"><h5><i class="fas fa-cog"></i> Settings</h5></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "SecondaryNavSmallBottom",
};
</script>


<style scoped>
.small-bottom-nav {
  text-align: center;
  position: fixed;
  bottom: 0;
  height: 65px;
  width: 100%;
  background-color: var(--p-dark);
  z-index: 100;
}

h5 {
  font-size: 12px;
  margin: 0;
}

.col {
  padding: 5px;
}

a,
a:active,
a:focus {
  text-decoration: none;
  color: white;
}

i {
  font-size: 25px;
}

h5 > i {
  font-size: 20px;
}

.dropdown-menu {
  background-color: var(--p-dark);
}

#dropdownMenuButton{
  color: var(--text-light);
}

.dropdown-item {
  padding: 10px;
}

@media (min-width: 768px) {
  .small-bottom-nav {
    display: none;
  }
}
</style>