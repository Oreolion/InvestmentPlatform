<template>
  <DashboardNav></DashboardNav>
  <HeaderAndNav></HeaderAndNav>
  <section>
    <div class="topbox">
      <div class="btnbox">
        <div class="button">Account Funding</div>
        <div class="button">Withdrawal</div>
      </div>

      <h2>Account Info</h2>
    </div>
    <div class="btmbox">
      <form action="">
        <label for="username">
          <input type="text" placeholder="username here" />
        </label>
        <label for="email">
          <input type="email" placeholder="email here" />
        </label>
        <label for="phone">
          <input type="tel" placeholder="phone number here" />
        </label>
        <h2>Account Verification</h2>
        <p>
          Mail your Passport to our customer care to process your verification.
          Account verification usually takes 1-2 working days
        </p>
        <label for="file">
          <input class="idtype" type="text" placeholder="Input your ID type" />
          <br />
          Upload file <br />
          <input type="file" style="background: #222" />
        </label>

        <span
          ><input class="checkbox" type="checkbox" /> Click to read and accepts
          the terms of service</span
        >
        <button>Upload</button>
      </form>
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
.btmbox form {
  display: flex;
  flex-direction: column;
  padding: 6rem;
  gap: 4rem;
}

.btmbox h2 {
  color: #e67e22;
  text-align: center;
}

input {
  width: 80%;
  height: 5rem;
  background: transparent;
  border: 1px solid #ccc;
  text-indent: 1rem;
  color: #ccc;
}

.idtype {
  margin-bottom: 3rem;
}

.btmbox p {
  font-size: 1.8rem;
  max-width: 80rem;
}

.btmbox label {
    font-size: 1.8rem;
}

.btmbox span {
  font-size: 1.8rem;
  color: #e67e22;
}

.checkbox {
  width: 5%;
  height: 2rem;
}

.footer {
  color: green;
  font-size: 1.8rem;
  text-align: center;
}

.btmbox button {
  width: 25rem;
  font-size: 2rem;
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
