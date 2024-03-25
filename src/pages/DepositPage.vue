<template>
  <DashboardNav></DashboardNav>
  <HeaderAndNav></HeaderAndNav>
  <section>
    <div class="topbox">
      <div class="btnbox">
        <div class="button">Account Funding</div>
        <div class="button">Withdrawal</div>
      </div>

      <h2>Account Funding</h2>
    </div>
    <div class="btmbox">
      <div class="balance">Net Balance: $0</div>
      <h3>Choose funding method:</h3>
      <div class="items">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <h3>Deposit using Bitcoin:</h3>
      <div class="depositbox">
        <label class="ammount">
          Amount in base currency: <input type="text" /> <span>$</span>
        </label>
        <button>Fund Account</button>
        <p>How to buy Bitcoin from our official patner at Bitcoin.com</p>
        <small>Tutorial</small>
      </div>
    </div>
    <p class="footer">C2024 fidelity broker corps.</p>
  </section>
</template>

<script setup>
import DashboardNav from "../components/DashboardNav.vue";
import HeaderAndNav from "../components/HeaderAndNav.vue";
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
  padding-top: 12rem;
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
}

.btmbox {
  background-color: rgb(28, 28, 36);
  color: #ccc;
  margin-top: 7rem;
  margin-left: 0rem;
  width: 110%;
  padding: 6rem 5%;
}

.btmbox .balance {
  width: 25rem;
  height: 4rem;
  background: rgba(15, 15, 33, 0.4);
  padding: 0.5rem;
  margin-bottom: 2rem;
}

h3 {
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;
}

.btmbox .items {
  height: 25rem;
  background: rgba(15, 15, 33, 0.4);
  margin-bottom: 2rem;
}

.btmbox .depositbox {
  height: 23rem;
  background: rgba(15, 15, 33, 0.4);
  margin-bottom: 2rem;
  padding: 4rem;
  font-size: 1.8rem;
}

.btmbox label input {
    height: 4rem;
    width: 16rem;
}

.btmbox label {
    margin-bottom: 2rem;
}
.btmbox label span {
  font-weight: bold;
  font-size: 1.8rem;
  color: green;
  margin-right: 6rem;
}

.btmbox button {
    width: 14rem;
    font-size: 1.6rem;
    margin-bottom: 3rem;
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
}

@media (max-width: 480px) {
}
</style>
