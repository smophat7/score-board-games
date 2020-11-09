<template>
  <div class="plays">
    <table>
      <tr>
        <th>Date</th>
        <th>Game</th>
        <th>Winner</th>
        <th class="player-count">Players</th>
        <th></th>
      </tr>
      <tr class="play" v-for="play in plays" :key="play.id">
        <td>{{ readableDate(play.datePlayed) }}</td>
        <td>
          <img
            :src="gameImage(play.boardGameId)"
            :alt="gameName(play.boardGameId) + ' game cover'"
            style="width: 40px"
          />
          {{ gameName(play.boardGameId) }}
        </td>
        <td>
          {{ playWinnerMember(play.winnerId, play.type, play.boardWin, false) }}
        </td>
        <td class="player-count">{{ numPlayers(play.playersId) }}</td>
        <td>
          <button class="more-info-button"
            type="button"
            data-toggle="modal"
            :data-target="'#moreInfoModal-' + play.id"
          >
            <i class="fas fa-info-circle"></i>
          </button>
        </td>
        <!-- Modal (more info) -->
        <div
          class="modal fade"
          :id="'moreInfoModal-' + play.id"
          tabindex="-1"
          role="dialog"
          aria-labelledby="moreInfoModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h2 class="modal-title" id="modalLabel">Gameplay Info</h2>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h5>{{ readableDate(play.datePlayed) }}</h5>
                <img
                  :src="gameImage(play.boardGameId)"
                  :alt="gameName(play.boardGameId) + ' game cover'"
                />
                <h5>{{ gameName(play.boardGameId) }}</h5>
                <!-- <h5 v-for="member in playWinnerMember(play.winnerId, play.type, play.boardWin, true)" :key="member.id">
                {{ fullName(member) }}</h5> -->
                <p><strong>Type: </strong>{{ gameType(play.type) }}</p>
                <p><strong>Description: </strong>{{ play.description }}</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
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
    playWinnerMember(membersId, type, ifBoardWon, ifReturnList) {
      if (type === this.$root.$data.gameType.VS_BOARD) {
        if (ifBoardWon) {
          return "The Board";
        } else {
          return "The Group";
        }
      } else {
        let winners = [];

        // For each ID value in the play.winnerId array, find the corresponding member object
        // and add it to the winners array just declared
        membersId.forEach((personId) => {
          winners.push(
            this.$root.$data.members.find((member) => {
              return member.id === personId;
            })
          );
        });

        if (winners.length > 1) {
          if (ifReturnList) {
            return winners;
          } else {
            return "Multiple";
          }
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
          return "Against the Board";
      }
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
</style>