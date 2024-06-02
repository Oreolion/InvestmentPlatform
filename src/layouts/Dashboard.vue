<template>
  <DashboardNav></DashboardNav>
  <HeaderAndNav></HeaderAndNav>
  <TradingViewTicker></TradingViewTicker>
  <div class="dashboard">
    <main class="dashboard__info">
      <div class="user__info">
        <h1>
          Hi
          {{ userProfile.firstname + " " + userProfile.lastname }}... Welcome!
        </h1>
        <div>
          <p>
            <svg
              fill="#000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              />
            </svg>
            <span>Username: {{ userProfile.displayName }}</span>
          </p>
          <p>
            <svg
              fill="#000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>
            <span>{{ profile.email }}</span>
          </p>
        </div>
      </div>
      <div class="inner-box">
        <div class="box box1">
          <svg
            class="settings-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
            />
          </svg>
          <p>Account Balance:</p>
          <h2>$0.<span>00</span></h2>
          <p>your account balance</p>
        </div>
        <div class="box box2">
          <svg
            class="settings-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
            />
          </svg>

          <p>Earnings:</p>
          <h2>$0.<span>00</span></h2>
          <p>your Earnings</p>
        </div>
      </div>
    </main>
  </div>
  <TradingViewChart></TradingViewChart>
  <div class="bottom__section">
    <div class="leftbtmbox">
      <coingecko-coin-converter-widget
        class="convertwidget"
        coin-id="bitcoin"
        currency="usd"
        background-color="#ffffff"
        font-color="#4c4c4c"
        locale="en"
        width="140px"
      ></coingecko-coin-converter-widget>
    </div>
    <div class="rightbtmbox">
      <button>
        <router-link class="a" to="/dashboard/depositfunds">
          Make a Deposit
        </router-link>
      </button>
      <button>
        <router-link class="a" to="/dashboard/withdrawfunds">
          Make a Withdrawal
        </router-link>
      </button>
    </div>
  </div>
</template>

<script setup>
import DashboardNav from "../components/DashboardNav.vue";
import HeaderAndNav from "../components/HeaderAndNav.vue";
import TradingViewTicker from "../tradingviews_widget/TradingViewTicker.vue";
import TradingViewChart from "../tradingviews_widget/TradingViewChart.vue";
import { auth } from "../utils/firebase";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { reactive, onMounted } from "vue";

const profile = reactive({});

let userProfile = reactive({});

const handleUpdateProfile = async () => {
  const postRef = collection(db, "users");
  //   const postQuery = query(postRef, orderBy("createdAt", "asc"), limit(5));

  // Get initial data
  const querySnapshot = await getDocs(postRef);
  console.log(querySnapshot);

  if (querySnapshot) {
    querySnapshot.docs.filter((doc) => {
      if (doc.id === profile.userId) {
        console.log(doc.id, " => ", doc.data());
        userProfile.firstname = doc.data().firstname;
        userProfile.lastname = doc.data().lastname;
        userProfile.displayName = doc.data().displayName;
        userProfile.registeredDate = doc.data().registeredDate;
      }
    });
  } else {
    console.log("No such document!");
  }
};

onMounted(async () => {
  return await handleUpdateProfile();
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    profile.email = user.email ?? "";
    profile.displayName = user.displayName ?? "";
    profile.userId = user.uid ?? "";
  }
});
</script>

<style scoped>
.dashbooard {
  background-color: #173b6d;
  height: 100%;
}

svg {
  height: 3rem;
  width: 3rem;
  fill: #ccc;
}

.dashboard .dashboard__info {
  background-color: rgb(28, 28, 36);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 27rem;
  font-size: 1.6rem;
  height: 34rem;
  margin-left: 16rem;
}

.settings-icon {
  align-self: flex-end;
  margin-right: 2rem;
}

.dashboard .dashboard__info .user__info div {
  display: flex;
  gap: 2rem;
}

.dashboard .dashboard__info .user__info h1 {
  white-space: nowrap;
  color: #ccc;
}

.dashboard .dashboard__info .user__info p {
  background: #fff;
  padding: 0.5rem 1rem;
  width: 22rem;
  height: 3.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
  font-weight: bold;
}

.dashboard .dashboard__info .user__info {
  margin: 2rem;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  gap: 11rem;
}

.dashboard .dashboard__info .inner-box {
  display: flex;
  flex-wrap: wrap;
  gap: 6rem;
  height: 50rem;
  color: #ccc;
}

.dashboard .dashboard__info .inner-box .box {
  background-color: rgba(9, 36, 119, 0.6);
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 20rem;
  font-size: 1.6rem;
  font-weight: bold;
  width: 32rem;
  flex: 1 1 28rem;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
}

.dashboard .dashboard__info .inner-box .box h2 > span {
  font-size: 1.5rem;
}

.dashboard .dashboard__info .inner-box .box p:first-child {
  font-weight: bold;
  font-size: 2rem;
}

.dashboard .dashboard__info .inner-box .box2 {
  background-color: green;
}

.bottom__section {
  margin-left: 26rem;
  display: flex;
  background-color: rgb(28, 28, 36);
  padding: 2rem 7rem;
  gap: 3rem;
  padding-top: 10rem;
}

.rightbtmbox {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1 1 50%;
}

.convertwidget {
  min-width: 25rem;
  width: 30rem;
}
.leftbtmbox {
  flex: 1 1 50%;
  width: 30rem;
}

button {
  margin-right: 3rem;
  height: 8rem;
  width: 20rem;
  border-radius: 1rem;
  font-size: 1.8rem;
  &:hover {
    opacity: 0.7;
  }
}

.a {
  color: #ccc;
  font-weight: bold;
}

button:first-child {
  background-color: green;
}
button:last-child {
  background-color: red;
}
@media (max-width: 768px) {
  .dashboard .dashboard__info .user__info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .dashboard .dashboard__info {
    height: 64rem;
    margin-left: 0;
  }

  .dashboard .dashboard__info .inner-box {
    gap: 3rem;
  }

  .bottom__section {
    margin-left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .bottom__section {
    margin-left: 0;
  }

  .bottom__section button {
    margin-bottom: 2rem;
  }
  .dashboard .dashboard__info {
    height: 80rem;
  }

  .dashboard .dashboard__info .user__info {
    margin-bottom: 3rem;
  }

  .dashboard .dashboard__info .user__info div {
    flex-direction: column;
  }

  .dashboard .dashboard__info .user__info h1 {
    white-space: nowrap;
    color: #ccc;
    font-size: 2rem;
    font-weight: bold;
  }

  .dashboard .dashboard__info .inner-box .box {
    height: 17rem;
  }
}
@media (max-width: 320px) {
  .dashboard .dashboard__info .user__info h1 {
    font-size: 1.6rem;
  }

  .bottom__section {
    margin-top: 14rem;
  }
}
</style>
