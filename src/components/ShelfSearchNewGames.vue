<template>
  <div class="wrapper">
    <div class="game-search-form mb-5" id="gameSearchForm">
      <form v-on:submit.prevent="searchGames">
        <label class="my-1 mr-2" id="gameSearchLabel" for="gameSearchInput">
          Search from over 120,000 games</label
        ><br />
        <input
          class="mr-2 mb-2"
          id="gameSearchInput"
          type="text"
          v-model="searchValue"
        />
        <input
          class="btn btn-primary"
          id="gameSearchSubmit"
          type="submit"
          value="Search"
        />
      </form>
    </div>
    <div v-if="loading" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-else>
      <div v-if="searched">
        <div v-if="noResults">
          <p>Your search yielded no results! Check your spelling.</p>
        </div>
        <div v-for="game in searchResults" :key="game.id">
          <div class="card mx-auto my-3">
            <div class="card-body p-3">
              <h3 class="card-title">{{ game.name }}</h3>
              <div class="media">
                <img
                  class="align-self-center"
                  style="width: 150px"
                  :src="game.images.small"
                  :alt="game.name + ' game cover'"
                />
                <div class="media-body ml-3 my-auto">
                  <p>{{ playerCount(game.min_players, game.max_players) }}</p>
                  <p>{{ playTime(game.min_playtime, game.max_playtime) }}</p>
                  <p>{{ releaseYear(game.year_published) }}</p>

                  <div v-if="gameOnShelf(game)">
                    <input
                      class="btn btn-danger btn-block"
                      type="button"
                      value="Remove from Shelf"
                      @click="removeFromShelf(game)"
                    />
                  </div>
                  <div v-else>
                    <input
                      class="btn btn-success btn-block"
                      type="button"
                      value="Add to Shelf"
                      @click="addToShelf(game)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShelfSearchNewGames",
  data() {
    return {
      searchValue: "",
      oldSearchValue: "",
      searchResults: [],
      loading: false,
      searched: false,
    };
  },
  computed: {
    sameSearchTerm() {
      if (this.oldSearchValue !== "") {
        return this.searchValue === this.oldSearchValue;
      } else {
        return false;
      }
    },
    noResults() {
      if (this.searched) {
        return this.searchResults.length === 0;
      } else {
        return false;
      }
    },
  },
  methods: {
    searchGames() {
      if (this.searchValue === "" || this.sameSearchTerm) {
        return;
      }

      this.searchResults = [];

      // My client_id: "xPJ2LwITlm"
      let url =
        "https://api.boardgameatlas.com/api/search?name=" +
        this.searchValue +
        "&fuzzy_match=true&order_by=popularity&limit=21&client_id=xPJ2LwITlm";

      this.loading = true;

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          // API response as JSON
          console.log(json);
          this.searchResults.push(...json.games);
          this.loading = false;
          this.searched = true;
          this.oldSearchValue = this.searchValue;
        });
    },
    addToShelf(game) {
      this.$root.$data.shelf.push(game);
    },
    removeFromShelf(game) {
      this.$root.$data.shelf.splice(
        this.$root.$data.shelf.indexOf(
          this.$root.$data.shelf.find((item) => item.id === game.id),
          0
        ),
        1
      );
    },
    gameOnShelf(game) {
      return this.$root.$data.shelf.some((item) => item.id === game.id);
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
        count += "Unknown play time";
      } else if (min === max) {
        count += min + " minutes";
      } else {
        count += min + "-" + max + " minutes";
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
p {
  margin: 0;
}
</style>