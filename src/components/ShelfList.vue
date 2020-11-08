<template>
  <div class="games">
    <div class="game" v-for="game in games" :key="game.id">
      <div class="card">
        <h3 class="card-title">{{ game.name }}</h3>
        <div class="media">
          <img :src="game.images.small" :alt="game.name + ' game cover'" />
          <div class="media-body ml-3 my-auto">
            <p>{{ playerCount(game.min_players, game.max_players) }}</p>
            <p>{{ playTime(game.min_playtime, game.max_playtime) }}</p>
            <p>{{ releaseYear(game.year_published) }}</p>

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
    },
    playerCount(min, max) {
      let count = "";
      if (min === null || max === null) {
        count += "Unknown player count";
      } else if (min === max) {
        if (min === 1) {
          count += min + " player";
        } else {
          count += min + " players";
        }
      } else {
        count += min + "-" + max + " players";
      }
      return count;
    },
    playTime(min, max) {
      let count = "";
      if (min === null || max === null) {
          count += 'Unknown play time';
        }
        else if (min === max) {
          count += min + ' minutes';
        }
        else {
          count += min + '-' + max + ' minutes';
        }
        return count;
    },
    releaseYear(year) {
      if (year === null) {
        return "Unknown release year";
      } else {
        return "Released in " + year;
      }
    }
  },
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