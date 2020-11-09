const gameType = {
    POINTS: {
      HIGH_WINS: "points.high_wins",
      LOW_WINS: "points.low_wins",
    },
    RANKED: "ranked",
    VS_BOARD: "vs_board"
  }  

let mockGameplayHistory = [
    {
        id: 1,
        boardGameId: "EL3YmDLY6W",
        playersId: [1, 2, 3],
        winnerId: [2],
        type: gameType.RANKED,
        rankWinToLose: [2, 3, 1],
        points: {},
        boardWin: false,
        datePlayed: new Date("September 21, 2020 10:29:00"),
        description: "This is a test note description to see how this would actually work and if it does! This could be interesting... hope this is functional at some point.",

    },
    {
        id: 2,
        boardGameId: "fG5Ax8PA7n",
        playersId: [1, 2, 3, 4],
        winnerId: [3],
        type: gameType.RANKED,
        rankWinToLose: [3, [2, 1], 4],
        points: {},
        boardWin: false,
        datePlayed: new Date("October 3, 2020 10:29:00"),
        description: "Another one of those little test descriptions to see how this would actually work and if it does! This could be interesting... hope this is functional at some point.",
    },
    {
        id: 3,
        boardGameId: "levMwXaCM6",
        playersId: [1, 2, 3, 4],
        winnerId: [3],
        type: gameType.POINTS.HIGH_WINS,
        rankWinToLose: [3, 4, 1, 2],
        points:
            {
                1: 35,
                2: 20,
                3: 58,
                4: 42
            },
        boardWin: false,
        datePlayed: new Date("October 5, 2020 10:29:00"),
        description: "A third one of those little test descriptions to see how this would actually work and if it does! This could be interesting... hope this is functional at some point.",
    },
    {
        id: 4,
        boardGameId: "EL3YmDLY6W",
        playersId: [1, 3, 4],
        winnerId: [],
        type: gameType.VS_BOARD,
        rankWinToLose: [],
        points: {},
        boardWin: true,
        datePlayed: new Date("October 8, 2020 10:29:00"),
        description: "A fourth one of those little test descriptions to see how this would actually work and if it does! This could be interesting... hope this is functional at some point.",
    },
    {
        id: 5,
        boardGameId: "EL3YmDLY6W",
        playersId: [2, 3, 4],
        winnerId: [2, 3, 4],
        type: gameType.VS_BOARD,
        rankWinToLose: [],
        points: {},
        boardWin: false,
        datePlayed: new Date("October 12, 2020 10:29:00"),
        description: "A fifth one of those little test descriptions to see how this would actually work and if it does! This could be interesting... hope this is functional at some point.",
    },
]

export default mockGameplayHistory;