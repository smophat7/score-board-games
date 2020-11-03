<template>
  <div class="secondary-nav">
    <div class="small-bottom-nav">
      <div class="wrapper">
        <div class="row h-100 align-items-center">
          <div class="col">
            <router-link :to="'group'"><h4>Group</h4></router-link>
          </div>
          <div class="col">
            <router-link :to="'personal'"><h4>Me</h4></router-link>
          </div>
          <div class="col">
            <router-link :to="'record-game'"><h4>Record</h4></router-link>
          </div>
          <div class="col">
            <router-link :to="'collection'"><h4>Shelf</h4></router-link>
          </div>
          <div class="col">
            <h4>More</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="large-left-nav">

    </div>     -->
  </div>
</template>

<script>
export default {
  name: "SecondaryNav",
};
</script>

<style scoped>
.secondary-nav {
    text-align: center;
}

.small-bottom-nav {
  position: fixed;
  bottom: 0;
  height: 56px;
  width: 100%;
  background-color: var(--p-dark);
  z-index: 100;
}

a,
a:active,
a:focus {
  text-decoration: none;
  color: white;
}
</style>