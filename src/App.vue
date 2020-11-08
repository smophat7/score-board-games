<template>
  <div id="app">

    <!-- Nav-Bar -->
    <nav class="navbar navbar-expand-md navbar-dark navbar-custom custom-toggler">
      <router-link :to="'/'" class="navbar-brand">ScoreBoard Games</router-link>
      <button class="navbar-toggler custom-toggler" data-aos="fade-left" data-aos-delay="800" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav ml-auto d-lg-flex align-items-center">
          <li class="nav-item">
            <router-link :to="'/about'" class="nav-link"><i class="fas fa-info-circle"></i>About</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="'dashboard/record-game'" class="nav-link"><i class="fas fa-plus-circle"></i>Record Game</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-user-circle" style="font-size: 2.7rem"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <router-link :to="'dashboard/group'" class="dropdown-item">DashBoard</router-link>
              
              <!-- Need to figure these ones out too -->
              <a class="dropdown-item" href="#">Groups</a>
              <a class="dropdown-item" href="#">Profile</a>
              <div class="dropdown-divider"></div>
              <!-- <a class="dropdown-item" href="#">Login/Sign out</a> -->
              <router-link :to="'/login'" class="dropdown-item">Login/Sign out</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Page content -->
    <router-view/>

    <!-- Footer -->
    <div class="footer container-fluid pt-5 pb-2">
      <div class="row mx-auto justify-content-around">
        <div class="col-md-4 px-4">
          <h1 class="footer-logo">ScoreBoard Games</h1>
          <p>Fuel your friendly competition with data-driven insights.</p>
          <a href="#" class="btn btn-block btn-lg">Make a Donation</a>
          <hr class="my-3">
        </div>
        <div class="col-md-4 px-4">
          <h3>Creation</h3>
          <p>Made by Spencer Moffat, a neuroscience student at Brigham Young University.</p>
          <a href="https://github.com/smophat7/score-board-games" target="_blank"><p><i class="fab fa-github"></i>  See GitHub repo here</p></a>
          <a href="https://spencermoffat.com" target="_blank">See more from the creator</a>
          <hr class="my-3">
        </div>
        <div class="col-md-4 px-4">
          <h3>Credits</h3>
          <div class="image-credits">
            <p><a href="https://michalsnik.github.io/aos/" target="_blank">Animate on Scroll Library</a> by <strong>michalsnik</strong></p>
            <p>Icons provided by <a href="https://fontawesome.com" target="_blank">Font Awesome</a></p>
            <p>Photo of Monopoly board by <strong>Suzy Hazelwood</strong> from <a href="https://www.pexels.com/" target="_blank">Pexels</a></p>
            <p>Photo of crowned chess piece by <strong>Pixabay</strong> from <a href="https://www.pexels.com/" target="_blank">Pexels</a></p>
            <p>Photo of boys playing Ticket to Ride by <strong>cottonbro</strong> from <a href="https://www.pexels.com/" target="_blank">Pexels</a></p>
          </div>
          <hr class="my-3">
        </div>
      </div>
      <p class="copyright mt-3">© 2020 Spencer Moffat</p>
    </div>
  </div>
</template>

<style>
@import './assets/css/variables.css';

html {
  background-color: var(--text-light);
}

body {
  color: var(--text-dark);
  font-family: 'Encode Sans Expanded', sans-serif;
}

h1, h2, h3, h4, h5 {
  font-family: 'Contrail One', cursive;
}


/* Nav-bar Overrides */
.navbar-custom {
  background-color: var(--p);
  height: 70px;
}

.navbar-custom .navbar-brand,
.navbar-custom .navbar-text {
  font-family: 'Black Han Sans', sans-serif;
  color: var(--text-light);
}

.navbar-custom .navbar-nav .nav-link {
  color: var(--text-light);
}

.navbar-custom .nav-item.active .nav-link,
.navbar-custom .nav-item:focus .nav-link,
.navbar-custom .nav-item:hover .nav-link {
    color: var(--s);
}

.navbar i.fas {
  color: var(--s);
  margin: 0 0.5rem;
}

/* Footer */
.footer {
  background-color: var(--s);
  color: var(--text-light);
  margin-bottom: 65px;
}

.footer-logo {
  font-family: 'Black Han Sans', sans-serif;
}

.footer .btn {
  background-color: var(--p-dark);
  color: var(--text-light);
}

.footer h3 {
  text-align: left;
}

.footer i.fab {
  color: var(--text-light);
  margin: 0.1rem;
}

.footer .image-credits {
  font-size: 0.8rem;
}

.copyright {
  text-align: center;
}

@media (min-width: 768px) {
  .footer hr {
    display: none;
  }

  .footer {
    margin-bottom: 0;
  }
}
</style>
