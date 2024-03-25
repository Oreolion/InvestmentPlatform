<template>
  <nav class="dashboard__nav">
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
        <router-link class="link" to="/dashboard/dashboardpage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            />
          </svg>
          <p>Dashboard</p>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/deposit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
          <p>Deposit</p>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/withdraw">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
            />
          </svg>
          <p>Withdraw</p>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/deposittransaction">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"
            />
          </svg>
          <p>Deposit Transactions</p>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/withdrawtransaction">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"
            />
          </svg>
          <p>Withdraw Transactions</p>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/accountsettings">
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
  </nav>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const router = useRouter();

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
</script>

<style scoped>
.logo {
  color: #e67e22;
  font-weight: bold;
  margin-right: auto;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

h3 {
  line-height: 1;
  letter-spacing: 0.7;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
}

h3 span {
  color: #ccc;
  background-color: #e67e22;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 0.2rem;
  font-weight: bold;
}

.logo p {
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0.5rem;
  padding-left: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

.logo p span {
  background: rgba(355, 355, 355, 0.3);
  background-color: green;
  font-weight: bold;
  border-radius: 0.4rem;
  padding: 0.2rem;
  font-size: 1.2rem;
}
.dashboard__nav {
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 3rem;
  width: 27rem;
  height: 100vh;
  background-color: rgb(5, 118, 319);
  background: #1E4274;

  color: #ccc;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1111;
}

nav ul li a.router-link-exact-active {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.3rem;
}

.logo {
  margin: 1rem 0;
  margin-bottom: 2rem;
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
  gap: 2rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
  white-space: nowrap;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.7rem;
  color: #ddd;
  &:hover {
    letter-spacing: 1px;
  }
}

.dashboard__navlists .link svg {
  background-color: #fff;
  fill: #e67e22;
  height: 2.3rem;
  border-radius: 50%;
  padding: 0.2rem;
  width: 2.3rem;
}

.dashboard__navlists .logout {
  color: red;
  font-weight: bold;
}

.dashboard__navlists h5 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: bold;
  border-bottom: 4px solid #e67e22;
}

.dashboard__navlists .link li {
  display: flex;
  align-items: center;
  &:hover {
    color: var(--primary);
  }
}

@media (max-width: 767px) {
  .mobile {
    display: flex;
  }

  .dashboard__nav {
    display: none;
  }

  .mobile {
    display: flex;
  }
}

@media (max-width: 480px) {
  .dashboard__nav {
    width: 17rem;
  }
}
</style>
