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
            <h3 class="form__header">Create Account</h3>
          </div>
          <p>Fill the below form to create a new account</p>
          <div class="inner__form">
            <div class="name">
              <label for="firstname">
                First name: <br />
                <input v-model="v$.firstname.$model" type="text" />
                <small v-if="v$.firstname.$errors.length">{{
                  v$.firstname.$errors[0].$message
                }}</small>
              </label>
              <label for="lastname">
                Last name: <br />
                <input v-model="v$.lastname.$model" type="text" />
                <small v-if="v$.lastname.$errors.length">{{
                  v$.lastname.$errors[0].$message
                }}</small>
              </label>
            </div>
            <label for="country">
              Country <br />
              <input v-model="user.country" type="text"  />
            </label>
            <label for="phone">
              Phone Number <br />
              <input v-model="user.phoneNumber" type="tel"  />
            </label>
            <label for="username">
              Username <br />
              <input v-model="user.displayName" type="text" />
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
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 48 48"
                  enable-background="new 0 0 48 48"
                  font-size="20px"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
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
import { auth } from "../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase";

const userRules = {
  firstname: { required },
  lastname: { required },
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
  displayName: "",
  phoneNumber: "",
  country: "",
});

const v$ = useVuelidate(userRules, user);

const handleSignUp = async () => {
  const isValid = await v$.value.$validate();
  if (!isValid) return;
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password, 
      user.displayName,
    );
    console.log(response);
    if (response.user) {
      localStorage.setItem("isLoggedIn", "true");
      await createUser({
        userId: response.user.uid,
        firstname: user.firstname,
        lastname: user.lastname,
        displayName: user.displayName,
        country: user.country,
        phoneNumber: user.phoneNumber,
        registeredDate: setRegisteredDate(),
      });

      router.push("/dashboard");
      toast.success("You are Logged In");
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

const setRegisteredDate = () => {
    const date = new Date().toISOString().slice(0, 10)
    return date
}

const createUser = async (data) => {
  try {
    await setDoc(doc(db, "users", data.userId), { ...data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const handleSignupWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    router.push("/dashboard", { ...history.state });
    toast.success("You are Logged In");
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = await GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    // const user = result.user;
    // console.log(user)
  } catch (error) {
    // Handle Errors here.
    console.log(error);
    toast.error(error.message);
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
  }
};
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
  .rightbox {
    display: flex;
    padding: 3rem 3%;
    /* width: 65rem; */
  }

  .inner__form label input {
    width: 100%;
    margin-right: 3rem;
  }

  .rightbox .navigatepagebtn-box button {
    width: 16rem;
    color: #e67e22;
    font-weight: bold;
    &:hover {
      color: #000;
    }
  }
}

@media (max-width: 320px) {
  .rightbox {
    padding: 3rem 0;
    margin-left: -0.5rem;
  }
  .rightbox h1 {
    font-size: 1.8rem;
  }

  .inner__form select,
  .inner__form label {
    font-size: 1.2rem;
  }
}
</style>
