<template>
  <div class="container-fluid">
    <div class="row no-gutter">

      <!-- Left-hand image -->
      <img class="img-fluid d-none d-md-flex bg-image col-md-4 col-lg-6" src="images/monopoly-from-above-wine.jpg" alt="Monopoly party from above">

      <!-- Login form section -->
      <div class="col-md-8 col-lg-6" data-aos="fade-up" data-aos-duration="800">
        <div class="login d-flex align-items-center py-5">
          <div class="container d-flex flex-wrap justify-content-center">
            <router-link :to="'/'" class="btn">
              <h1>ScoreBoard Games</h1>
            </router-link>
            
            <form>

              <div class="form-row">
                <div class="col-sm-6">
                  <div class="form-label-group">
                    <input type="text" id="inputFirstName" class="form-control" placeholder="First name" required autofocus>
                    <label for="inputFirstName">First name</label>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-label-group">
                    <input type="text" id="inputLastName" class="form-control" placeholder="Last name" required autofocus>
                    <label for="inputLastName">Last name</label>
                  </div>
                </div>
              </div>

              <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <label for="inputPassword">Password</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="retypePassword" class="form-control" placeholder="Retype password" required>
                <label for="retypePassword">Retype password</label>
              </div>

              <button class="btn btn-primary btn-block btn-submit mb-2" type="submit">Sign up</button>
              <button class="btn btn-primary btn-block btn-submit mb-2" type="submit">Already have an account?</button>
              <div class="text-center">
                <a class="small text-white" href="#">Forgot password?</a>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
  export default {
    name: 'Login'
  }
</script>


<style scoped>
.container-fluid {
  background-color: var(--p-dark);
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

.login.container a {
  text-align: center;
  margin: auto;
  width: 100%;
}


.login h1 {
  font-family: 'Black Han Sans', sans-serif;
  margin-bottom: 3rem;
  color: var(--text-light);
}

.login,
.image {
  min-height: 100vh;
}

.bg-image {
  object-fit: cover;
  padding: 0;

}

.btn-submit {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
  border-width: 0;
  background-color: var(--s);
}

.btn-submit:hover {
  background-color: var(--p);
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
  height: auto;
  border-radius: 2rem;
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  line-height: 1.5;
  color: #495057;
  cursor: text;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}


/* Fallback for Edge */
@supports (-ms-ime-align: auto) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for Internet Explorer */
@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}

</style>