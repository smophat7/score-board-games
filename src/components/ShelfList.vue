<template>
  <div class="games">
    <div class="game" v-for="game in games" :key="game.id">
      <div class="card">
        <h3 class="card-title">{{ game.name }}</h3>
        <div class="media">
          <img :src="game.images.small" :alt="game.name + ' game cover'" />
          <div class="media-body ml-3 my-auto">
            <p>{{ game.min_players }} - {{ game.max_players }} players</p>
            <p>{{ game.min_playtime }} - {{ game.max_playtime }} minutes</p>
            <p>Released in {{ game.year_published }}</p>

            <input
              class="btn btn-danger"
              type="button"
              value="Remove"
              @click="removeFromShelf(game)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShelfList",
  props: {
    games: Array,
  },
  methods: {
    removeFromShelf(game) {
      this.$root.$data.shelf.splice(this.$root.$data.shelf.indexOf(game, 0), 1);
    }
  }
};
</script>

<style scoped>
.game {
  margin: 30px 0;
}

.card {
  padding: 15px;
}
</style>