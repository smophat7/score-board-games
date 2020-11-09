<template>
  <div class="shelf">
      <div class="heading">
        <h1>Game Shelf</h1>
        <p>Keep track of all the games your group plays. Grow your collection.</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#searchGamesModal">
        Search Games
        </button>
      </div>
    <div class="modal fade" id="searchGamesModal" tabindex="-1" role="dialog" aria-labelledby="searchGamesModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="modalLabel">
              Add Games to Shelf
            </h2>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <ShelfSearchNewGames/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="emptyShelf">
      <h3>You have no games on your shelf!</h3>
    </div>
    <div v-else>
      <ShelfList :games="games" />
    </div>
  </div>
</template>

<script>
import ShelfList from "../components/ShelfList.vue";
import ShelfSearchNewGames from "../components/ShelfSearchNewGames.vue";

export default {
  name: "Shelf",
  components: {
    ShelfList,
    ShelfSearchNewGames
  },
  computed: {
    games() {
      return this.$root.$data.shelf;
    },
    emptyShelf() {
      return this.$root.$data.shelf.length === 0;
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