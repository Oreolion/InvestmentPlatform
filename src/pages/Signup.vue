<template>
  <section>
    <div class="innerbox">
      <div class="leftbox">
        <img
          src="../assets/3d-hygge-isometric-view-of-colleagues-having-meeting.png"
          alt=""
        />
      </div>
      <div class="rightbox">
        <form action="">
          <h3 class="form__header">Create Account</h3>
          <p>Fill the below form to create a new account</p>
          <div class="inner__form">
            <div class="name">
              <label for="firstname">
                First name: <br />
                <input v-model="user.firstname" type="text" />
              </label>
              <label for="lastname">
                Last name: <br />
                <input v-model="user.lastname" type="text" />
              </label>
            </div>
            <label for="phone">
              Phone Number <br />
              <input v-model="user.phoneNumber" type="tel" id="" />
            </label>
            <label for="username">
              Username <br />
              <input v-model="user.username" type="tel" id="" />
            </label>

            <label for="email">
              Email address: <br />
              <input type="email" v-model="v$.email.$model" />

              <small v-if="v$.email.$errors.length > 0 && v$.email.$errors[0]">
                {{ v$.email.$errors[0].$message }}
              </small>
            </label>
            <label for="password">
              Password: <br />
              <input type="password" v-model="v$.password.$model" />
              <small v-if="v$.password.$errors.length">{{
                v$.password.$errors[0].$message
              }}</small>
            </label>
            <label for="password">
              Retype Password: <br />
              <input type="password" v-model="v$.confirmPassword.$model" />
              <small v-if="v$.confirmPassword.$errors.length">{{
                v$.confirmPassword.$errors[0].$message
              }}</small>
            </label>

            <div class="btn-box">
              <button @click="handleSignUp">Create account</button>
              <button @click="handleSignupWithGoogle">
                Sign up with
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="navigatepagebtn-box">
            <button>
              <router-link to="/signup" class="nbtn">REGISTER</router-link>
            </button>
            <button>
              <router-link to="/login">LOGIN</router-link>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script setup>
import { toast } from "vue3-toastify";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import Footer from "../components/Footer.vue";

const userRules = {
  email: { required, email },
  password: { required, minLength: minLength(8) },
  confirmPassword: {
    required,
    minLength: minLength(8),
    sameAs: sameAs(computed(() => user.password)),
  },
};

const router = useRouter();

const user = reactive({
  email: "",
  password: "",
  confirmPassword: "",
  firstname: "",
  lastname: "",
  username: "",
  phoneNumber: "",
  typeOfUser: "",
});

const v$ = useVuelidate(userRules, user);
</script>

<style scoped>
section {
  background: rgba(5, 118, 355, 0.2);
}
.innerbox {
  display: flex;
}

.leftbox {
  flex: 1 1 30%;
  height: 60rem;
  margin-top: 15rem;
}

.leftbox img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.rightbox {
  margin: 0 auto;
  /* background: rgba(5, 118, 355, 0.2); */
  flex: 1 1 35%;
  color: #ccc;
  padding: 5rem;
}

h3 {
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
}

.rightbox h1 {
  font-size: 2.2rem;
  text-align: center;
}

p {
  font-size: 1.6rem;
  margin-bottom: 2rem;
}
.rightbox .navigatepagebtn-box {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #e67e22;
}

.navigatepagebtn-box button > * {
  color: #e67e22;
  font-weight: bold;
}

.rightbox .navigatepagebtn-box button,
.nbtn {
  width: 40%;
  font-weight: bold;
  height: 7rem;
  font-size: 2rem;
}
.form__header {
  margin-bottom: 2rem;
}

.inner__form {
  display: flex;
  flex-direction: column;
}
.inner__form .name {
  margin-bottom: 1rem;
  display: flex;
}

.inner__form .name label {
  width: 100%;
}

br {
  margin-bottom: 0.5rem;
}

.inner__form .name input {
  padding: 0 1rem;
  width: 100%;
}
.inner__form select,
.inner__form label {
  margin-bottom: 1rem;
  margin-right: 2rem;
  font-size: 1.5rem;
}

.inner__form select {
  margin-bottom: 1rem;
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
}

.inner__form label input {
  height: 4rem;
  width: 100%;
  padding: 0 1rem;
}

small {
  color: red;
}
.btn-box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.btn-box button {
  background: rgba(355, 355, 355, 0.2);
  width: 98%;
  border: 3px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  gap: 1rem;
  &:hover {
    color: #fff;
    background: rgba(005, 005, 005, 0.2);
  }
}

.btn-box button svg {
  height: 3rem;
  width: 3rem;
  fill: #e67e22;
}

@media (max-width: 768px) {
  .leftbox {
    display: none;
  }
}

@media (max-width: 480px) {
  .right__box {
    display: flex;
  }

  .inner__form label input {
    width: 100%;
    margin-right: 3rem;
  }
}

@media (max-width: 320px) {
  .right__box h1 {
    font-size: 1.8rem;
  }

  .inner__form select,
  .inner__form label {
    font-size: 1.2rem;
  }

  .right__box .navigatepagebtn-box button {
    width: 35%;
    color: #e67e22;
    font-weight: bold;
    &:hover {
      color: #000;
    }
  }
}
</style>
