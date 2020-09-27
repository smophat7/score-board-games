// Percent of Games Won
new Chart(document.getElementById('percentWonChart'), {
  type: 'line',

  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Kathy',
        backgroundColor: 'red',
        borderColor: 'red',
        fill: false,
        data: [20, 35, 30, 15, 25, 30, 15]
      },
      {
        label: 'Jim',
        backgroundColor: 'blue',
        borderColor: 'blue',
        fill: false,
        data: [29, 25, 25, 35, 30, 15, 20]
      },
      {
        label: 'Steven',
        backgroundColor: 'green',
        borderColor: 'green',
        fill: false,
        data: [6, 10, 15, 30, 20, 35, 40]
      },
      {
        label: 'Emma',
        backgroundColor: 'purple',
        borderColor: 'purple',
        fill: false,
        data: [45, 30, 35, 20, 25, 20, 25]
      }
    ]
  }
});


// Games Played
new Chart(document.getElementById("gamesPlayedChart"), {
  type: 'pie',
  data: {
    labels: ["Monopoly", "Risk", "Catan", "Ticket to Ride", "Sequence"],
    datasets: [{
      backgroundColor: ["red", "green", "blue", "purple", "orange"],
      data: [45, 33, 5, 16, 22]
    }]
  }
});

// Frequency of Play
new Chart(document.getElementById("playFrequencyChart"), {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: "Games Played",
      backgroundColor: ["red", "green", "blue", "purple", "orange", "teal", "pink"],
      data: [8, 16, 22, 19, 34, 25, 13]
    }]
  },
  options: {
    legend: {
      display: false
    }
  }
});

// Days of the Week
new Chart(document.getElementById("daysOfWeekChart"), {
  type: 'polarArea',
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      label: "Games Played",
      backgroundColor: ["red", "green", "blue", "purple", "orange", "teal", "pink"],
      data: [34, 4, 6, 2, 8, 26, 19]
    }]
  },
  options: {
    title: {
      display: false
    },
    legend: {
      display: true,
      position: "left"
    }
  }
});
