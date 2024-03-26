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
    </div>
        

    </section>

</template>

<script setup>
import HeaderAndNav from '../components/HeaderAndNav.vue';
import DashboardNav from '../components/DashboardNav.vue';


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