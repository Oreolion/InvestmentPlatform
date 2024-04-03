<template>
  <!-- mobile dashboard navbar -->
  <div v-if="toggle" class="dashboard__nav mobile">
    <div class="logo link">
      <router-link to="/">
        <h3>FIDELITY <span>BROKER</span> CORPS</h3>
      </router-link>
    </div>
    <div class="user">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
        />
      </svg>
      <div class="user__info">
        <p>{user.email}</p>
        <p>$0.00</p>
      </div>
    </div>

    <ul class="dashboard__navlists">
      <li>
        <router-link class="link" to="/dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            />
          </svg>
          <p>Dashboard</p>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/depositfunds">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
          <p>Deposit</p>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/withdrawfunds">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
            />
          </svg>
          <p>Withdraw</p>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/deposittransactions">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"
            />
          </svg>
          <p>Deposit Transactions</p>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/withdrawtransactions">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"
            />
          </svg>
          <p>Withdraw Transactions</p>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/accountprofile">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
            />
          </svg>
          <p>Account Settings</p>
        </router-link>
      </li>
      <li @Click="handleSignOut">
        <div class="link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
            />
          </svg>
          <p>Logout</p>
        </div>
      </li>
    </ul>
  </div>
  <main class="innerdashboard__container">
    <!-- header -->
    <header class="header">
      <div class="logo link">
        <router-link to="/">
          <h3>FIDELITY <span>BROKER</span> CORPS</h3>
        </router-link>
      </div>
      <p>
        Account Status:
        <svg
          class="svg"
          fill="green"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
          />
        </svg>
        <span>active</span>
      </p>
      <nav class="right__nav">
        <div class="nav__icons">
          <div v-if="!toggle" @click="toggleMenu" class="menu-bar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </div>
          <svg
            class="close-btn"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            @click="toggleMenu"
            v-else="toggle"
          >
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
          <svg
            class="notification-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
            />
          </svg>
        </div>
      </nav>

      <svg
        class="caret"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        @click="toggleDropDown"
      >
        <path
          d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
        />
      </svg>
      <div class="img__box">
        <router-link to="/dashboard/accountprofile">
          <span class="" v-if="!profile.photoURL">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              /></svg
          ></span>

          <img :src="profile.photoURL" alt="photo" class="" v-else />
        </router-link>
      </div>

      <div class="notificationbox" v-if="dropDown">
        <li @click="handleSignOut">
          <div class="link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              />
            </svg>
            <p>Logout</p>
          </div>
        </li>
      </div>
    </header>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "../utils/firebase";
import { toast } from "vue3-toastify";

const router = useRouter();

const isLoading = ref(true);

let profile = reactive({
  photoURL: "",
  displayName: "",
});

const handleSignOut = async () => {
  try {
    await signOut(getAuth());
    localStorage.clear();
    router.push("/login");
    toast.success("You are Logged Out", {
      autoClose: 8000,
    });
  } catch (error) {
    console.log(error);
  }
};

let toggle = ref<boolean>(false);
let dropDown = ref<boolean>(false);

function toggleMenu() {
  return (toggle.value = !toggle.value);
}
function toggleDropDown() {
  return (dropDown.value = !dropDown.value);
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    isLoading.value = false;
    profile.photoURL = user.photoURL ?? "";
    profile.displayName = user.displayName ?? "";
  }
});
</script>

<style scoped>
.logo {
  color: #e67e22;
  font-size: 2rem;
  margin-right: auto;
}

.logo h3 {
  line-height: 1;
  letter-spacing: 0.7;
  color: #e67e22;
  font-size: 1.8rem;
  text-align: center;
}

h3 span {
  color: green;
  background-color: #e67e22;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 0.2rem;
  font-weight: bold;
}
.dashboard__nav {
  position: fixed;
  top: 0;
  left: 0;
  padding: 3rem;
  width: 28rem;
  height: 100vh;
  background-color: #1e4274;
  color: #ccc;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1111;
}

.logo {
  margin: 2rem 0 -2rem;
  color: #e67e22;
}

.logo p {
  font-size: 1rem;
}

.dashboard__nav .user {
  margin-bottom: 5rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
}

.dashboard__nav .user p {
  font-size: 1.1rem;
}

.mobile {
  display: none;
}

.dashboard__navlists .link {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
  white-space: nowrap;
  cursor: pointer;
  padding: 1rem;
  color: #ddd;
  font-weight: bold;
  font-size: 1.9rem;
  &:hover {
    letter-spacing: 2px;
  }
}

nav ul li a.router-link-exact-active {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.3rem;
}

.dashboard__navlists .link svg {
  background-color: #fff;
  color: red;
  height: 2.3rem;
  border-radius: 50%;
  padding: 0.2rem;
  width: 2.3rem;
}

.dashboard__navlists li:last-child {
  color: red;
  font-weight: bold;
}

.dashboard__navlists h5 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: bold;
  border-bottom: 3px solid #e67e22;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(5, 118, 369, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 7%;
  height: 9rem;
  z-index: 111;
}

.header p {
  color: #ccc;
  font-size: 1.8rem;
  font-weight: bold;
  margin-left: 23rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

.header span {
  color: green;
  display: flex;
  font-weight: bold;
  gap: .5rem;
}

.header .svg {
  fill: green;
  height: 2rem;
  width: 2rem;
  display: flex;
}
.innerdashboard__container .header .logo {
  display: none;
}

.innerdashboard__container .header p {
  min-width: 2rem;
}

.right__nav {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.notificationbox {
  height: 6rem;
  width: 22rem;
  position: absolute;
  color: #fff;
  top: 10rem;
  right: 7%;
  background: rgba(0, 0, 015, 0.5);
  z-index: 111;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  list-style: none;
}

.notificationbox svg {
  display: flex;
}

.notificationbox .link {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.notificationbox p {
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: red;
  }
}

.navigationlist {
  height: 12rem;
  width: 22rem;
  padding: 2rem;
  position: absolute;
  top: 11%;
  right: 5%;
  background: rgba(0, 0, 015, 0.5);
  text-align: center;
  padding-top: 1rem;
  z-index: 1111;
}

.navigationlist li .link {
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #fff;
  font-weight: bold;
}

.header .nav__icons {
  display: flex;
  gap: 3rem;
  position: absolute;
  top: 40%;
  right: 20%;
  z-index: 111;
  color: #fff;
  cursor: pointer;
  gap: 1rem;
}

.nav__icons .notification-icon {
  display: flex;
  height: 3rem;
  width: 3rem;
}
.icons .menu-icon,
.icons .close-icon {
  display: none;
}

.mobile-header {
  display: none;
}

.nav__icons .menu-bar svg {
  height: 3rem;
  width: 3rem;
  display: none;
  align-items: center;
  justify-content: center;
}

.caret {
  display: inline-block;
  cursor: pointer;
}

svg {
  height: 3rem;
  width: 3rem;
  display: none;
  align-items: center;
  justify-content: center;
  fill: #e67e22;
}

.search-form {
  position: absolute;
  width: 46rem;
  top: 25%;
  right: 30%;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #eee;
  padding: 0.6rem;
  border-radius: 0.6rem;
  height: 5rem;
}

.search {
  height: 4.5rem;
  padding: 1rem;
  width: 4.5rem;
  text-align: center;
  color: var(--black);
  background-color: #eee;
  border-radius: 50%;
  margin-left: 0.7rem;
  font-size: 1.7rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 05, 0.3);
  }
}

.search-form .search svg {
  display: flex;
  align-items: center;
  justify-content: center;
  fill: #e67e22;
}

.search-form input {
  height: 4rem;
  width: 80%;
  padding: 1rem;
}

.header .img__box {
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  background-color: #000;
  top: 15%;
  right: 10%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img__box span {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header .img__box svg {
  display: block;
}

.header .img__box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  z-index: 111;
}

@media (max-width: 767px) {
  .header {
    padding: 1.2rem 5%;
  }

  .header p {
    margin-left: 0;
  }
  .logo {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #e67e22;
    /* margin-left: -2rem; */
  }

  .logo h3 {
    white-space: nowrap;
  }

  .logo p {
    white-space: nowrap;
  }

  .innerdashboard__container .header .logo {
    margin-bottom: 1rem;
    color: #e67e22;
    max-width: 18rem;
    font-weight: bold;
    display: block;
  }

  .innerdashboard__container .header h3 {
    line-height: 1;
    letter-spacing: 0.2;
    font-size: 2rem;
  }

  .innerdashboard__container .header .logo p {
    font-size: 1.1rem;
    letter-spacing: 1px;
    padding-left: 4px;
  }

  .nav__icons .menu-bar svg {
    display: flex;
  }

  .mobile {
    display: flex;
  }

  .dashboard__nav {
    display: none;
  }

  .mobile {
    display: flex;
  }

  svg {
    display: flex;
  }

  .search-form {
    width: 30rem;
    margin-right: 4rem;
  }

  .header .img__box {
    height: 5rem;
    width: 5rem;
    top: 22%;
    right: 10%;
    position: absolute;
  }

  .post {
    width: 40rem;
    padding-left: 20rem;
  }
}

@media (max-width: 480px) {
  .logo h3 {
    font-size: 1.3rem;
  }

  .header .logo h3 {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  .header {
    padding: 1.2rem 2%;
  }

  .header .nav__icons {
    display: flex;
    gap: 3rem;
    position: absolute;
    top: 40%;
    right: 23%;
  }
  .dashboard__nav {
    width: 22rem;
  }

  .dashboard__navlists .link {
    font-size: 1.6rem;
    margin-left: 0.1rem;
  }

  .search-form {
    display: none;
  }

  .caret {
    margin-left: 1rem;
  }

  .header .nav__icons {
    right: 27%;
    gap: 1rem;
  }
}

@media (max-width: 320px) {
  .logo {
    margin-left: 0rem;
    margin-top: 3rem;
  }
  .nav__icons .close-btn {
    z-index: 111;
  }

  .header .logo h3 {
    font-size: 1.34rem;
    margin-top: 0rem;
  }

  .dashboard__navlists h5 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .dashboard__nav {
    padding: 0rem 1rem;
    width: 20rem;
  }

  .close-btn {
    z-index: 111;
  }

  .dashboard__navlists .link {
    gap: 1rem;
    margin-bottom: 0.5rem;
    white-space: nowrap;
  }

  .header .nav__icons {
    gap: 0.5rem;
    top: 40%;
    right: 27%;
  }
}
</style>
