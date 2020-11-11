<template>
  <div class="plays">
    <table class="w-100">
      <tr>
        <th>Date</th>
        <th>Game</th>
        <th>Winner</th>
        <th class="player-count">Players</th>
        <th class="game-type">Type</th>
        <th></th>
      </tr>
      <tr class="play" v-for="play in plays" :key="play.id">
        <td>{{ readableDate(play.datePlayed) }}</td>
        <td>
          <img :src="gameImage(play.boardGameId)" :alt="gameName(play.boardGameId) + ' game cover'"
            style="width: 40px" />
          {{ gameName(play.boardGameId) }}
        </td>
        <td>
          {{ playWinnerMember(play.winnerId, play.type, play.boardWin) }}
        </td>
        <td class="player-count">{{ numPlayers(play.playersId) }}</td>
        <td class="game-type">{{ gameType(play.type) }}</td>
        <td>
          <button class="more-info-button" type="button" data-toggle="modal" :data-target="'#moreInfoModal-' + play.id">
            <i class="fas fa-info-circle"></i>
          </button>
        </td>
        <!-- Modal (more info) -->
        <div class="modal fade" :id="'moreInfoModal-' + play.id" tabindex="-1" role="dialog"
          aria-labelledby="moreInfoModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h2 class="modal-title" id="modalLabel">Gameplay Info</h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="info-heading text-center">
                  <img :src="gameImage(play.boardGameId)" :alt="gameName(play.boardGameId) + ' game cover'" />
                  <h3>{{ gameName(play.boardGameId) }}</h3>
                  <h5>{{ readableDate(play.datePlayed) }}</h5>

                  <div v-if="play.boardWin">
                    <h5>Winner: The Board</h5>
                  </div>
                  <div v-else>
                    <h5 v-for="memberId in play.winnerId" :key="memberId">
                      Winner: {{ fullName(idToMember(memberId)) }}
                    </h5>
                  </div>
                </div>
                <div class="info-details">
                  <p><strong>Type: </strong>{{ gameType(play.type) }}</p>

                  <div v-if="notAgainstBoard(play)">
                    <p><strong>Standings:</strong></p>
                    <ol>
                      <li v-for="ids in play.rankWinToLose" :key="ids">
                        {{ playerRankings(ids, play) }}
                      </li>
                    </ol>
                  </div>
                  <div v-else>
                    <p><strong>Players: </strong></p>
                    <ul>
                      <li v-for="memberId in play.playersId" :key="memberId">
                        {{ fullName(idToMember(memberId)) }}
                      </li>
                    </ul>
                  </div>

                  <p><strong>Description: </strong>{{ play.description }}</p>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "GameplayHistoryList",
  props: {
    plays: Array,
  },
  methods: {
    fullName(member) {
      return member.firstName + " " + member.lastName;
    },
    readableDate(date) {
      return date.toLocaleDateString("en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      });
    },
    gameName(gameId) {
      return this.$root.$data.shelf.find((game) => {
        return game.id === gameId;
      }).name;
    },
    gameImage(gameId) {
      return this.$root.$data.shelf.find((game) => {
        return game.id === gameId;
      }).images.small;
    },
    playWinnerMember(membersId, type, ifBoardWon) {
      if (type === this.$root.$data.gameType.VS_BOARD) {
        if (ifBoardWon) {
          return "The Board";
        } else {
          return "The Group";
        }
      } else {
        let winners = [];

        // If there are multiple winners in their own sub-array, break it out just into its elements
        if (Array.isArray(membersId[0])) {
          membersId = [...membersId[0]];
        }

        // For each ID value in the play.winnerId array, find the corresponding member object
        // and add it to the winners array just declared
        membersId.forEach((personId) => {
          winners.push(
            this.$root.$data.members.find((member) => {
              return member.id === personId;
            })
          );
        });

        if (winners.length > 1 || Array.isArray(winners[0])) {
          return "Multiple";
        } else {
          return this.fullName(winners[0]);
        }
      }
    },
    numPlayers(playersId) {
      return playersId.length;
    },
    gameType(typeEnum) {
      switch (typeEnum) {
        case this.$root.$data.gameType.POINTS.HIGH_WINS:
          return "Points (highest wins)";
        case this.$root.$data.gameType.POINTS.LOW_WINS:
          return "Points (lowest wins)";
        case this.$root.$data.gameType.RANKED:
          return "Ranked";
        case this.$root.$data.gameType.VS_BOARD:
          return "Group vs Board";
      }
    },
    idToMember(personId) {
      return this.$root.$data.members.find((member) => {
        return member.id === personId;
      });
    },
    notAgainstBoard(play) {
      return play.type !== this.$root.$data.gameType.VS_BOARD;
    },
    playerRankings(ids, play) {
      if (!Array.isArray(ids)) {
        let result = this.fullName(this.idToMember(ids));
        if (
          play.type === this.$root.$data.gameType.POINTS.HIGH_WINS ||
          play.type === this.$root.$data.gameType.POINTS.LOW_WINS
        ) {
          result += ": " + play.points[ids] + " pts";
        }
        return result;
      } else {

        // If there are multiple members in their own sub-array, break it out just into its elements
        if (Array.isArray(ids[0])) {
          ids = [...ids[0]];
        }

        let result = this.fullName(this.idToMember(ids[0]));
        for (let i = 1; i < ids.length; i++) {
          result += ", " + this.fullName(this.idToMember(ids[i]));
        }
        if (play.type === this.$root.$data.gameType.POINTS.HIGH_WINS || play.type === this.$root.$data.gameType.POINTS.LOW_WINS) {
          result += ": " + play.points[ids[0]] + " pts";
        }
        return result;
      }
    },
    getPoints(play, id) {
      return play.points[id];
    },
    // removeFromGamePlayHistory(play) {
    //   this.$root.$data.gameplayHistory.splice(
    //     this.$root.$data.gameplayHistory.indexOf(play, 0),
    //     1
    //   );
    // },
  },
};
</script>

<style scoped>
.play {
  margin: 30px 0;
}

td,
th {
  padding: 5px 8px;
}

.more-info-button {
  padding: 0;
  background-color: white;
  border: none;
}

@media (max-width: 576px) {
  td > img {
    display: none;
  }
  .player-count {
    display: none;
  }
}

@media (max-width: 992px) {
  .game-type {
    display: none;
  }
}
</style>