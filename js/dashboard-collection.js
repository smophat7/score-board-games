// Submit of search function
document.getElementById("gameSearchSubmit").addEventListener("click", event => {
  event.preventDefault();
  const searchValue = document.getElementById("gameSearchInput").value;
  // if (value === "") {
  //   return;
  // }
  console.log("Submitted value = " + searchValue);


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

      // Invalid submission
      // if (json.cod === "404") {
      //   console.log("Invalid API submission: 404 error received");
      // }

      let results = "";
      for (let i = 0; i < json.games.length; i++) {
        let game = json.games[i];
        results += '<div class="col-lg-6 col-xl-4"><div class="card mx-auto my-3"><div class="card-body">';
        results += '<h3 class="card-title">' + game.name + '</h3><div class="media">';
        results += '<img class="align-self-center" style="width:100px" src="' + game.images.medium + '">';
        results += '<div class="media-body">';
        results += '<ul><li>' + game.min_players + '-' + game.max_players + ' players</li>';
        results += '<li>' + game.min_playtime + '-' + game.max_playtime + ' min</li>';
        results += '<li>Released: ' + game.year_published + '</li></ul>';
        results += '<input class="btn btn-primary btn-block btn-custom-add" type="button" value="Add">'
        results += '</div></div></div></div></div>'
      }
      document.getElementById("resultsRow").innerHTML = results;
    });
});
