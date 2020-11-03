<template>
  <div class="members">
    <div class="col dashboard-content py-3 px-2">
      <h1 data-aos="zoom-in-up" data-aos-delay="500">Group Members</h1>

      <div
        class="group-member-names"
        data-aos="zoom-in-up"
        data-aos-delay="600"
      >
        <div class="card">
          <div class="card-body mx-auto">
            <div class="media">
              <img
                class="rounded-circle align-self-center w-25"
                src="images/profile-cross-eyed.jpg"
                alt=""
              />
              <div class="media-body">
                <h3 class="card-title">Kathy Wyatt</h3>
                <ul>
                  <li>Total Wins: <strong>12</strong></li>
                  <li>Total Games Played: <strong>30</strong></li>
                  <li>Win Percentage: <strong>40%</strong></li>
                  <li>Tracking Since: <strong>February 2020</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body mx-auto">
            <div class="media">
              <img
                class="rounded-circle align-self-center w-25"
                src="images/portrait-man-with-tongue.jpg"
                alt=""
              />
              <div class="media-body">
                <h3 class="card-title">Jim Austin</h3>
                <ul>
                  <li>Total Wins: <strong>3</strong></li>
                  <li>Total Games Played: <strong>8</strong></li>
                  <li>Win Percentage: <strong>37.5%</strong></li>
                  <li>Tracking Since: <strong>July 2020</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body mx-auto">
            <div class="media">
              <img
                class="rounded-circle align-self-center w-25"
                src="images/portrait-fashionable-woman.jpg"
                alt=""
              />
              <div class="media-body">
                <h3 class="card-title">Emma Morgan</h3>
                <ul>
                  <li>Total Wins: <strong>18</strong></li>
                  <li>Total Games Played: <strong>37</strong></li>
                  <li>Win Percentage: <strong>48.64%</strong></li>
                  <li>Tracking Since: <strong>January 2020</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body mx-auto">
            <div class="media">
              <img
                class="rounded-circle align-self-center w-25"
                src="images/portrait-man-red-hat.jpg"
                alt=""
              />
              <div class="media-body">
                <h3 class="card-title">Steven Greenberg</h3>
                <ul>
                  <li>Total Wins: <strong>14</strong></li>
                  <li>Total Games Played: <strong>48</strong></li>
                  <li>Win Percentage: <strong>29.17%</strong></li>
                  <li>Tracking Since: <strong>February 2020</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <a href="" class="btn btn-block my-5">Invite New Members</a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Members",
};
</script>


<style scoped>
.group-member-names {
  max-width: 500px;
  margin: 30px;
}

.group-member-names .card {
  margin: 30px auto;
}

.group-member-names .btn {
  background-color: var(--p-light);
}
</style>