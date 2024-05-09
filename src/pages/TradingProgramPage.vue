<template>
  <div>
    <Navbar></Navbar>
    <FirstProgramSection></FirstProgramSection>
    <section class="tradingplansection">
      <h1>SELECT A TRADING PLAN</h1>
      <div class="innerbox">
        <div class="box">
          <h3>BITCOIN MINI PLAN 1</h3>
          <p>Weekly Interest: 10%</p>
          <p>Investment Sum - $100</p>
          <p>Trading/Withdrawal Commmission - 10%</p>
          <p>Refferal Bonus - 7%</p>

          <h2>$500+</h2>

          <button>
            <router-link to="signup" class="link" > APPLY NOW </router-link>
          </button>
        </div>
        <div class="box">
          <h3>BITCOIN MINI PLAN 2</h3>
          <p>Weekly Interest: 12%</p>
          <p>Investment Sum - $10,000</p>
          <p>Trading/Withdrawal Commmission - 15%</p>
          <p>Refferal Bonus - 8%</p>

          <h2>$10,000+</h2>

          <button>
            <router-link to="/signup" class="link" > APPLY NOW </router-link>
          </button>
        </div>
        <div class="box">
          <h3>BITCOIN FX SILVER PLAN</h3>
          <p>Weekly Interest: 15%</p>
          <p>Investment Sum - $20,000</p>
          <p>Trading/Withdrawal Commmission - 15%</p>
          <p>Refferal Bonus - 10%</p>

          <h2>$20,000+</h2>

          <button>
            <router-link to="/signup" class="link"> APPLY NOW </router-link>
          </button>
        </div>
        <div class="box">
          <h3>BITCOIN FX GOLD PLAN</h3>
          <p>Weekly Interest: 18%</p>
          <p>Investment Sum - $30,000</p>
          <p>Trading/Withdrawal Commmission - 20%</p>
          <p>Refferal Bonus - 10%</p>

          <h2>$30,000+</h2>

          <button>
            <router-link to="/signup" class="link"> APPLY NOW </router-link>
          </button>
        </div>
        <div class="box">
          <h3>PLATINUM ELITE PLAN</h3>
          <p>Weekly Interest: 20%</p>
          <p>Investment Sum - $40,000</p>
          <p>Trading/Withdrawal Commmission - 20%</p>
          <p>Refferal Bonus - 10%</p>

          <h2>$40,000+</h2>

          <button>
            <router-link to="/signup" class="link"> APPLY NOW </router-link>
          </button>
        </div>
        <div class="box">
          <h3>PLATINUM CORPORATE PLAN</h3>
          <p>Weekly Interest: 25%</p>
          <p>Investment Sum - $50,000</p>
          <p>Trading/Withdrawal Commmission - 25%</p>
          <p>Refferal Bonus - 10%</p>

          <h2>$50,000+</h2>

          <button>
            <router-link class="link" to="/signup"> APPLY NOW </router-link>
          </button>
        </div>
      </div>
    </section>
    <SecondProgramSection></SecondProgramSection>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import FirstProgramSection from "../components/FirstProgamSection.vue";
import SecondProgramSection from "../components/SecondProgramSection.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
.tradingplansection {
  background-color: rgba(210, 210, 210, .5);
  color: #ccc;
  padding: 3rem 4%;
}

.tradingplansection h1 {
  margin-bottom: 2rem;
  font-size: 3rem;
  color: #e67e22;
  text-align: center;
}

.tradingplansection .innerbox {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 30%;
  align-items: center;
  gap: 3rem;
  justify-content: center;
  opacity: 0.8;
  margin-bottom: 1rem;
}

.tradingplansection .innerbox .box {
  background-color: rgba(10, 10, 10, .5);
  border-radius: 2rem;
  padding: 2rem;
  max-width: 31rem;
  width: 31rem;
  height: 31rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tradingplansection .innerbox .box h2,
.tradingplansection .innerbox .box h3 {
  margin-bottom: 1.2rem;
  color: #ccc;
  font-size: 2rem;
  font-weight: bold;
}

.tradingplansection .innerbox .box h1 {
  margin-bottom: 1.2rem;
  color: #ccc;
  font-size: 3rem;
}

.tradingplansection .innerbox .box p {
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
}

.tradingplansection .innerbox .box button {
  width: 13rem;
  height: 5rem;
}

.tradingplansection .innerbox .box button > * {
  color: #fff;
}
</style>
