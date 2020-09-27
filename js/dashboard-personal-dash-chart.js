Chart.scaleService.updateScaleDefaults('linear', {
  ticks: {
    min: 0
  }
});

// Percent of Games Won
new Chart(document.getElementById('percentWonChart'), {
  type: 'line',

  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: [20, 18, 31, 29, 8, 30, 35]
    }]
  },

  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 50
        }
      }]
    }
  }
});


// Games Played
new Chart(document.getElementById("gamesPlayedChart"), {
  type: 'doughnut',
  data: {
    labels: ["Monopoly", "Risk", "Catan", "Ticket to Ride", "Sequence"],
    datasets: [{
      backgroundColor: ["red", "green", "blue", "purple", "orange"],
      data: [13, 5, 10, 3, 6]
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
      data: [13, 10, 3, 9, 20, 12, 15]
    }]
  },
  options: {
    legend: {
      display: false
    }
  }
});
