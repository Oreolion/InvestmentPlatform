<template>
  <DashboardNav></DashboardNav>
  <HeaderAndNav></HeaderAndNav>
  <section>
    <div class="topbox">
        <div class="btnbox">
        <router-link to="/dashboard/deposittransactions" class="button"
          >My Deposits</router-link
        >
        <router-link to="/dashboard/withdrawtransactions" class="button"
          >My Withdraws</router-link
        >
      </div>
      <h2>Withdraw Transactions</h2>
    </div>
    <div class="btmbox">
      <main class="dashboard__data">
        <h1>Deposit History</h1>
        <div class="data__container">
          <div>
            <p>DEPOSIT PLAN</p>
            <p>AMOUNT</p>
            <p>STATUS</p>
            <p>CREATED</p>
          </div>
          <div>
            <p>{}</p>
            <p>{}</p>
            <p>{}</p>
            <p>{}</p>
          </div>
        </div>
      </main>
    </div>
    <p class="footer">C2024 fidelity broker corps.</p>
  </section>
</template>

<script setup>
import HeaderAndNav from "../components/HeaderAndNav.vue";
import DashboardNav from "../components/DashboardNav.vue";
</script>

<style scoped>
section {
  margin-left: 17rem;
}

.topbox {
  height: 40rem;
  width: 140rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #e67e22;
  position: relative;
}

.topbox::before {
  content: "";
  position: absolute;
  background-image: url("../assets/istockphoto-1425905549-170667a.webp");
  opacity: 0.4;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 7rem;
  background-size: cover;
}
.topbox > * {
  /* Target all child elements */
  position: relative; /*  Allow child elements to overlap the pseudo-element */
}
h2 {
  font-size: 5rem;
  font-weight: bold;
}

.topbox .btnbox {
  padding-top: 33rem;
  margin-bottom: 5rem;
  display: flex;
}

.button {
  width: 18rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  height: 6rem;
  background-color: transparent;
  border: 3px solid #ccc;
  color: #ccc;
}


a.router-link-exact-active {
  background: rgba(255, 255, 255, 0.2);
  border-bottom: 6px solid #e67e22;
  padding: 0.3rem;
}

.btmbox {
  background-color: rgb(28, 28, 36);
  color: #ccc;
  margin-top: 7rem;
  margin-left: 0rem;
  width: 110%;
  padding: 6rem 5%;
}

.dashboard__data {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
}

.dashboard__data .data__container {
  padding-top: 2rem;
}

.dashboard__data .data__container div {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  background-color: rgba(9, 36, 119, 0.6);
  color: var(--primary);
  width: 80rem;
  height: 17rem;
  justify-content: space-evenly;
  border-right: 3px solid #f9a23f;
  font-size: 1.2rem;
  font-weight: bold;
}

.footer {
  color: green;
  font-size: 1.8rem;
  text-align: center;
}

@media (max-width: 768px) {
  section {
    margin-left: -5rem;
  }

  .topbox {
    width: 75rem;
  }

  .dashboard__data {
    margin-left: 0;
  }

  .dashboard__data .data__container div {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 7rem;
    width: 40rem;
  }

  .dashboard__data .data__container div p {
    margin-bottom: 4px;
  }
}

@media (max-width: 480px) {
  .topbox {
    width: 45rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: bold;
  }

  .topbox .btnbox {
    padding-top: 28rem;
  }

  .button {
    width: 18rem;
    cursor: pointer;
    display: flex;
    height: 5rem;
  }
}

@media (max-width: 320px) {
    .topbox {
    width: 40rem;
    height: 60%;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .topbox .btnbox {
    padding-top: 28rem;
  }

  .button {
    width: 16rem;
    cursor: pointer;
    font-size: 1.3rem;
    display: flex;
    height: 5rem;
  }

}
</style>
