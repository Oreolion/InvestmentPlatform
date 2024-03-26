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
        <div class="box">
          <div class="img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="70"
              height="70"
              viewBox="0 0 48 48"
            >
              <polygon
                fill="#4db6ac"
                points="24,44 2,22.5 10,5 38,5 46,22.5"
              ></polygon>
              <path
                fill="#fff"
                d="M38,22c0-1.436-4.711-2.635-11-2.929V16h8v-6H13v6h8v3.071C14.711,19.365,10,20.564,10,22	s4.711,2.635,11,2.929V36h6V24.929C33.289,24.635,38,23.436,38,22z M24,24c-6.627,0-12-1.007-12-2.25c0-1.048,3.827-1.926,9-2.176	v3.346c0.96,0.06,1.96,0.08,3,0.08s2.04-0.02,3-0.08v-3.346c5.173,0.25,9,1.128,9,2.176C36,22.993,30.627,24,24,24z"
              ></path>
            </svg>
          </div>

          <p>USDT</p>
        </div>
        <div class="box">
          <div class="img">
            <img
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-cashapp-instantly-send-money-between-friends-or-accept-card-payments-for-your-business-logo-color-tal-revivo.png"
              alt="external-cashapp-instantly-send-money-between-friends-or-accept-card-payments-for-your-business-logo-color-tal-revivo"
            />
          </div>

          <p>Cashapp</p>
        </div>

        <div class="box">
          <div class="img">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/external-black-fill-lafs/64/external-BNB-cryptocurrency-black-fill-lafs.png"
              alt="external-BNB-cryptocurrency-black-fill-lafs"
            />
          </div>

          <p>BNB</p>
        </div>
        <div class="box">
          <div class="img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="80"
              height="80"
              viewBox="0 0 48 48"
            >
              <path fill="#7880e7" d="M11,24L25,2l14,22l-14,8L11,24z"></path>
              <path fill="#5c64c7" d="M25,2l14,22l-14,8V2z"></path>
              <path fill="#7880e7" d="M11,27l14,8l14-8L25,46L11,27z"></path>
              <path
                fill="#5c64c7"
                d="M25,35l14-8L25,46V35z M11,24l14-6l14,6l-14,8L11,24z"
              ></path>
              <path fill="#2a3192" d="M25,18l14,6l-14,8V18z"></path>
            </svg>
          </div>

          <p>Ethereum</p>
        </div>
        <div class="box">
          <div class="img">
            <img
              width="58"
              height="58"
              src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/external-bank-transfer-payment-1-sbts2018-outline-color-sbts2018-2.png"
              alt="external-bank-transfer-payment-1-sbts2018-outline-color-sbts2018-2"
            />
          </div>

          <p>Bank Transfer</p>
        </div>
        <div class="box">
          <div class="img">
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/stencil/32/initiate-money-transfer.png"
              alt="initiate-money-transfer"
            />
          </div>

          <p>Perfect Money</p>
        </div>
        <div class="box">
          <div class="img">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/emoji/48/credit-card-emoji.png"
              alt="credit-card-emoji"
            />
          </div>

          <p>Credit/Debit</p>
        </div>
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
  background: rgba(15, 15, 33, 0.8);
  font-size: 1.6rem;
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
  background: rgba(15, 15, 33, 0.8);
  margin-bottom: 2rem;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.items .box {
  height: 14rem;
  flex: 1 1 14rem;
  width: 14rem;
  border: 5px solid  rgb(28, 28, 36);
  border-bottom: 5px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ccc;

}

.items .box .p {
    padding: .1rem 1.2rem;
    color: green;
    background: aqua;
    margin-bottom: .5rem;
    font-size: 1.2rem;
    font-weight: bold;

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
}
</style>
