// Submit of search function
document.getElementById("gameSearchSubmit").addEventListener("click", event => {
  event.preventDefault();
  const searchValue = document.getElementById("gameSearchInput").value;
  if (searchValue === "") {
    return;
  }
  // console.log("Submitted value = " + searchValue);


  //*************** Calling the API ***************
  // My client_id: "xPJ2LwITlm"
  const url = "https://api.boardgameatlas.com/api/search?name=" + searchValue + "&fuzzy_match=true&order_by=popularity&limit=21&client_id=xPJ2LwITlm";

  // Game Search Results
  fetch(url)
    .then(response => {
      return response.json();
    }).then(json => {
      // API response as JSON
      console.log(json);


      // Build a long HTML string with all of content from the API call formatted and everything and then insert it into the innerHTML of #gameSearchResults
      let results = '<div class="row" id="resultsRow" data-aos="zoom-in-up" data-aos-delay="600">';

      // If no game found
      if (json.games.length === 0) {
        results += '<div class="col-lg-6 col-xl-4">';
        results += '<h3 class="no-games-message">No games found. Please check your spelling.</h3></div>';
      }

      // For each game in the array, build a Bootstrap card with its picture, info, and a button to add the game to their collection
      for (let i = 0; i < json.games.length; i++) {
        let game = json.games[i];
        results += '<div class="col-lg-6 col-xl-4"><div class="card mx-auto my-3"><div class="card-body">';
        results += '<h3 class="card-title">' + game.name + '</h3><div class="media">';
        results += '<img class="align-self-center" style="width:100px" src="' + game.images.medium + '">';
        results += '<div class="media-body"><ul>';

        // Player count
        if (game.min_players === null || game.max_players === null) {
          results += '<li>Unknown player count</li>';
        }
        else if (game.min_players === game.max_players) {
          if (game.min_players === 1) {
            results += '<li>' + game.min_players + ' player</li>';
          }
          else {
            results += '<li>' + game.min_players + ' players</li>';
          }
        }
        else {
          results += '<li>' + game.min_players + '-' + game.max_players + ' players</li>';
        }

        // Play time
        if (game.min_playtime === null || game.max_playtime === null) {
          results += '<li>Unknown play time</li>';
        }
        else if (game.min_playtime === game.max_playtime) {
          results += '<li>' + game.min_playtime + ' min</li>';
        }
        else {
          results += '<li>' + game.min_playtime + '-' + game.max_playtime + ' min</li>';
        }

        // Release year
        if (game.year_published === null) {
          results += '<li>Unknown release year</li>';
        }
        else {
          results += '<li>Released: ' + game.year_published + '</li>';
        }

        results += '</ul><input class="btn btn-primary btn-block btn-custom-add" type="button" value="Add">';
        results += '</div></div></div></div></div>';
      }
      results += '</div>';
      document.getElementById("gameSearchResults").innerHTML = results;
    });
});
