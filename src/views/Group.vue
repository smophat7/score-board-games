<template>
  <div class="group">
    <div class="col p-0">
      <h1>Group DashBoard</h1>

      <p>This page is not yet done/working.</p>

      <!-- <div class="row my-3 mx-0" data-aos="zoom-in-up" data-aos-delay="600">
        <div class="col-lg-6 py-3">
          <div class="card">
            <div class="card-body mx-auto">
              <h3 class="card-title">Percent of Games Won</h3>
              <div class="group-dashboard-chart">
                <canvas id="percentWonChart"></canvas>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 py-3 align-self-center">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Games Played</h3>
              <div class="group-dashboard-chart">
                <canvas id="gamesPlayedChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="row my-3 py-3 mx-0"
        data-aos="zoom-in-up"
        data-aos-delay="600"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="col-lg-6 py-3">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Frequency of Play</h3>
              <div class="group-dashboard-chart">
                <canvas id="playFrequencyChart"></canvas>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 py-3">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Days of the Week Breakdown</h3>
              <div class="group-dashboard-chart">
                <canvas id="daysOfWeekChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>


<script>
// //**************** Chart.js mock data ****************//
// // Percent of Games Won
// new Chart(document.getElementById("percentWonChart"), {
//   type: "line",

//   data: {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "Kathy",
//         backgroundColor: "red",
//         borderColor: "red",
//         fill: false,
//         data: [20, 35, 30, 15, 25, 30, 15],
//       },
//       {
//         label: "Jim",
//         backgroundColor: "blue",
//         borderColor: "blue",
//         fill: false,
//         data: [29, 25, 25, 35, 30, 15, 20],
//       },
//       {
//         label: "Steven",
//         backgroundColor: "green",
//         borderColor: "green",
//         fill: false,
//         data: [6, 10, 15, 30, 20, 35, 40],
//       },
//       {
//         label: "Emma",
//         backgroundColor: "purple",
//         borderColor: "purple",
//         fill: false,
//         data: [45, 30, 35, 20, 25, 20, 25],
//       },
//     ],
//   },
// });
// // Games Played
// new Chart(document.getElementById("gamesPlayedChart"), {
//   type: "pie",
//   data: {
//     labels: ["Monopoly", "Risk", "Catan", "Ticket to Ride", "Sequence"],
//     datasets: [
//       {
//         backgroundColor: ["red", "green", "blue", "purple", "orange"],
//         data: [45, 33, 5, 16, 22],
//       },
//     ],
//   },
// });
// // Frequency of Play
// new Chart(document.getElementById("playFrequencyChart"), {
//   type: "bar",
//   data: {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "Games Played",
//         backgroundColor: [
//           "red",
//           "green",
//           "blue",
//           "purple",
//           "orange",
//           "teal",
//           "pink",
//         ],
//         data: [8, 16, 22, 19, 34, 25, 13],
//       },
//     ],
//   },
//   options: {
//     legend: {
//       display: false,
//     },
//   },
// });
// // Days of the Week
// new Chart(document.getElementById("daysOfWeekChart"), {
//   type: "polarArea",
//   data: {
//     labels: [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ],
//     datasets: [
//       {
//         label: "Games Played",
//         backgroundColor: [
//           "red",
//           "green",
//           "blue",
//           "purple",
//           "orange",
//           "teal",
//           "pink",
//         ],
//         data: [34, 4, 6, 2, 8, 26, 19],
//       },
//     ],
//   },
//   options: {
//     title: {
//       display: false,
//     },
//     legend: {
//       display: true,
//       position: "left",
//     },
//   },
// });

export default {
  name: "Group",
};
</script>