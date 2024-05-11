<template>
  <section>
    <div class="innerbox">
      <div class="leftbox">
        <img
          src="../assets/3d-hygge-isometric-view-of-colleagues-discussing-work-project.png"
          alt=""
        />
      </div>
      <div class="rightbox">
        <form action="">
          <div class="head">
            <router-link to="/">
              <svg
                fill="#ccc"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"
                />
              </svg>
            </router-link>
            <h3 class="form__header">Welcome to Fidelity Broker Corps</h3>
          </div>

          <div class="inner__form">
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

            <div class="btn-box">
              <button @click="handleLogin">Login account</button>
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
import { auth } from "../utils/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const user = reactive({
  email: "",
  password: "",
});

const userRules = {
  email: { required, email },
  password: { required, minLength: minLength(8) },
};

const v$ = useVuelidate(userRules, user);

const router = useRouter();

const handleLogin = async () => {
  const isValid = await v$.value.$validate();
  if (!isValid) return;
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    console.log(response);
    if (response.user) {
      localStorage.setItem("isLoggedIn", "true");

      await router.push("/dashboard", { ...history.state });
      toast.success("You are Logged In", {
        autoClose: 8000,
      });
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

// const provider = new GoogleAuthProvider();

// const handleSignupWithGoogle = async () => {
//   try {
//     await signInWithPopup(auth, provider);
//     router.push("/dashboard");
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     // const credential = await GoogleAuthProvider.credentialFromResult(result);
//     // const token = credential.accessToken;
//     // The signed-in user info.
//     // const user = result.user;
//     // console.log(user)
//   } catch (error) {
//     console.log(error);
//     // Handle Errors here.
//     // const errorCode = error.code;
//     // const errorMessage = error.message;
//     // The email of the user's account used.
//     // const email = error.customData.email;
//     // The AuthCredential type that was used.
//     // const credential = GoogleAuthProvider.credentialFromError(error);
//   }
// };
</script>

<style scoped>
section {
  background: rgba(5, 118, 355, 0.2);
  padding: 15rem 10%;
}
.innerbox {
  display: flex;
}

.head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
svg {
    height: 3rem;
    width: 3rem;
    &:hover {
        fill: #e67e22;
    }
}

.leftbox {
  flex: 1 1 30%;
  height: 60rem;
  margin-top: -3rem;
}

.leftbox img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.rightbox {
  margin: 0 auto;
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
  margin-top: 3rem;
  margin-bottom: 6rem;
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
  section {
    padding: 6rem 10%;
  }
  .rightbox {
    display: flex;
    padding: 3rem 2%;
  }

  .inner__form label input {
    width: 100%;
    margin-right: 3rem;
  }

  .btn-box {
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  .rightbox .navigatepagebtn-box button {
    width: 15rem;
    color: #e67e22;
    font-weight: bold;
    &:hover {
      color: #000;
    }
  }
}

@media (max-width: 320px) {
  .rightbox {
    padding: 3rem 0%;
    margin-left: -1.5rem;
  }

  .rightbox h1 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 2rem;
  }

  .inner__form select,
  .inner__form label {
    font-size: 1.2rem;
  }
}
</style>
