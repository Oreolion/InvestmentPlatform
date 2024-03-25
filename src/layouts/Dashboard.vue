<template>
  <DashboardNav></DashboardNav>
  <HeaderAndNav></HeaderAndNav>
  <TradingViewTicker></TradingViewTicker>
  <div class="dashboard">
    <main class="dashboard__info">
      <div class="user__info">
        <h1>HI Name... Welcome!</h1>
        <div>
          <p>
            <FaUser size="{18}" />
            <span>Username: {user.username}</span>
          </p>
          <p>
            <MdAttachEmail size="{18}" />
            <span>Email: {user.email}</span>
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
        <div class="box box3">
          <svg
            class="settings-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
            />
          </svg>

          <p>Registered Date:</p>
          <h2>$0.<span>00</span></h2>
          <p>Account Registered Date</p>
        </div>
      </div>
    </main>
  </div>
  <TradingViewChart></TradingViewChart>
</template>

<script setup>
import DashboardNav from "../components/DashboardNav.vue";
import HeaderAndNav from "../components/HeaderAndNav.vue";
import TradingViewTicker from "../tradingviews_widget/TradingViewTicker.vue";
import TradingViewChart from "../tradingviews_widget/TradingViewChart.vue";
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
  background-color: green;
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
  background-color: rgba(9, 36, 119, 0.6);
}

.dashboard .dashboard__info .inner-box .box3 {
  background-color: rgba(9, 36, 119, 0.6);
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
}
</style>
