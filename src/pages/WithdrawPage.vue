<template>
  <DashboardNav></DashboardNav>
  <HeaderAndNav></HeaderAndNav>
  <section>
    <div class="topbox">
      <div class="btnbox">
        <router-link to="/dashboard/depositfunds" class="button"
          >Account Funding</router-link
        >
        <router-link to="/dashboard/withdrawfunds" class="button"
          >Withdrawal</router-link
        >
      </div>
      <h2>Withdraw Funds</h2>
    </div>
    <div class="btmbox">
      <div class="balance">Net Balance: $0</div>
      <p>
        Important: Chosen withdrawal method should correspond with method used
        for deposit
      </p>
      <h3>Your available balance is: $0</h3>
      <div class="items">
        <div class="box">
          <p class="p">Recommended</p>
          <div class="img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="70"
              height="70"
              viewBox="0 0 40 40"
            >
              <path
                fill="#f5ce85"
                d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"
              ></path>
              <path
                fill="#967a44"
                d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"
              ></path>
              <path
                fill="#967a44"
                d="M17 8H19V12.615H17zM21 8H23V12.615H21zM17 27.385H19V32H17zM21 27.385H23V32H21z"
              ></path>
              <path
                fill="#967a44"
                d="M14,11h6.681c1.322,0,2.308,0.059,2.959,0.178c0.65,0.119,1.231,0.366,1.744,0.743 c0.513,0.377,0.94,0.878,1.283,1.504c0.342,0.626,0.513,1.328,0.513,2.106c0,0.843-0.211,1.617-0.633,2.32 c-0.422,0.704-0.994,1.232-1.716,1.584c1.019,0.319,1.801,0.864,2.348,1.633C27.727,21.838,28,22.742,28,23.782 c0,0.819-0.177,1.615-0.53,2.388c-0.353,0.773-0.836,1.392-1.448,1.854c-0.612,0.463-1.366,0.747-2.263,0.853 c-0.562,0.066-1.919,0.106-4.07,0.123H14V11z M17.375,13.996v4.162h2.211c1.315,0,2.132-0.02,2.451-0.061 c0.578-0.074,1.032-0.288,1.363-0.644c0.331-0.356,0.496-0.825,0.496-1.406c0-0.557-0.142-1.009-0.427-1.357 c-0.285-0.348-0.709-0.559-1.271-0.632c-0.335-0.041-1.296-0.061-2.884-0.061H17.375z M17.375,21.154v4.813h3.124 c1.216,0,1.988-0.037,2.314-0.11c0.502-0.098,0.91-0.337,1.226-0.718c0.315-0.38,0.473-0.89,0.473-1.529 c0-0.54-0.121-0.999-0.365-1.375s-0.595-0.651-1.054-0.823c-0.46-0.172-1.458-0.258-2.993-0.258H17.375z"
              ></path>
            </svg>
          </div>

          <p>Bitcoin</p>
        </div>
      </div>
      <p>
        Bitcoin is the recommended withdrawal method. It provides fastest
        withdrawal with 0 commission. To request for withdrawal to bitcoin,
        please confirm you have a bitcoin account or create one.
      </p>
      <div class="depositbox">
        <div class="left">
          <button>I have a Bitcoin account</button>
          <p>
            Open a
            <a
              href="https://accounts.coinbase.com/pick-your-account?origin=coinbase.com"
              target="_blank"
              style="color: inherit"
              >Coinbase acccount</a
            >
          </p>
          <p>
            Open a
            <a
              href="https://login.blockchain.com/#/signup?product=exchange&"
              target="_blank"
              style="color: inherit"
              >Blockchain acccount</a
            >
          </p>
        </div>
        <div class="right">
          <h3>Bitcoin Withdrawal</h3>
          <p>
            Please confirm you have a Bitcoin account by clicking the
            <span>i have a bitcoin account</span> button
          </p>
        </div>
      </div>
      <p>
        Please note: Before approving withdrawal request, you may be required to
        submit proof of identity and address of the reciever. Withdrawal fees
        will be applied, base on type of trading account and acceptable
        withdrawal method. Withdrawals are normally processed using the same
        method as deposit was done. For security reasons, withdrawals requests
        to ewallets, bank and credit card accounts not belonging to a trading
        account owner are denied. Please refer to terms and conditions for more
        information
      </p>
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
  margin-left: -25rem;
}

.topbox .btnbox {
  padding-top: 33rem;
  margin-bottom: 5rem;
  margin-left: -25rem;
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

.btmbox .balance {
  width: 25rem;
  height: 6rem;
  background: rgba(15, 15, 33, 0.8);
  font-size: 1.6rem;
  padding: 0.5rem;
  margin-bottom: 2rem;
}

.btmbox .balance + p {
  font-size: 1.6rem;
  margin-bottom: 3rem;
}

h3 {
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;
}

.btmbox .items {
  height: 25rem;
  background: rgba(15, 15, 33, 0.8);
  margin-bottom: 3rem;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.items .box {
  height: 14rem;
  width: 14rem;
  border: 5px solid rgb(28, 28, 36);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ccc;
}

.items .box .p {
  padding: 0.1rem 1.2rem;
  color: green;
  background: aqua;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.items + p {
  text-align: left;
  margin-bottom: 3rem;
  font-size: 1.6rem;
}

.items .box:first-child {
  border-bottom: 5px solid aqua;
}

.items .box p {
  font-size: 1.6rem;
  text-align: center;
}
.items .box .img {
  height: 6rem;
  width: 6rem;
  margin-bottom: 3rem;
}

.box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btmbox .depositbox {
  height: 23rem;
  background: rgba(15, 15, 33, 0.8);
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  padding: 4rem;
  font-size: 1.8rem;
  display: flex;
}

.depositbox .left button {
  border-radius: 1rem;
  width: 17rem;
}

.depositbox .left {
  flex: 1 1 30%;
  border-right: 2px solid #ccc;
}
.depositbox .left p {
  font-size: 1.3rem;
  color: aqua;
}

.depositbox .right {
  flex: 1 1 70%;
  text-align: center;
}

.depositbox + p {
  font-size: 1.6rem;
  text-align: center;
}

.items .depositbox .left p {
  color: aqua;
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

  .btmbox .items {
    height: 29rem;
  }
}

@media (max-width: 480px) {
  .topbox {
    width: 45rem;
    height: 60%;
  }

  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-left: 0;
  }

  .topbox .btnbox {
    padding-top: 28rem;
    margin-left: 0;
  }

  .button {
    width: 18rem;
    cursor: pointer;
    display: flex;
    height: 5rem;
  }

  .btmbox .depositbox {
    flex-direction: column;
    height: 35rem;
  }

  .btmbox p {
    text-align: center;
  }

  .depositbox .left {
    flex: 1 1 50%;
    border-right: none;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  .depositbox .right h3 {
    margin-bottom: 1rem;
  }
}

@media (max-width: 320px) {
  .topbox {
    width: 40rem;
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
