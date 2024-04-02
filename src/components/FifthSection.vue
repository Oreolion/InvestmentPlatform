<template>
  <section>
    <h1>We look beyond tomorrow for our clients</h1>
    <div class="innerbox">
      <div class="box">
        <div class="imgbox">
          <img src="../assets/joshua-mayo-HASoyURgPMY-unsplash.jpg" alt="" />
        </div>
        <div class="text">
          <h2>Low Spreads</h2>
          <p>Enjoy Competitive Spreads from as low as 0.0 Pips</p>
        </div>
      </div>
      <div class="box">
        <div class="imgbox">
          <img src="../assets/signalytics-1.jpg" alt="" />
        </div>
        <div class="text">
          <h2>Diversifiability</h2>
          <p>
            Trade Forex, Bonds , Cryptos, Commodities , ETFs , Metals with Ultra
            Low spreads
          </p>
        </div>
      </div>
      <div class="box">
        <div class="imgbox">
          <img src="../assets/signalytics-2.jpg" alt="" />
        </div>
        <div class="text">
          <h2>We are Global</h2>
          <p>
            As part of an international team, you'll get to share your expertise
            and expand your knowledge with colleagues from around the world.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  padding: 6rem 5%;
  background-color: #000;
}

.innerbox {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6rem;
  color: #ccc;
}

.box {
  flex: 1 1 39rem;
  height: 46rem;
  max-width: 41rem;
  border: 1px solid #e67e22;
  border-radius: 3rem;
  text-align: center;
}
.imgbox {
  height: 26rem;
  width: 35rem;
  margin-top: -2rem;
  margin-bottom: 2rem;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 3rem;
}
h1 {
  font-size: 4.5rem;
  margin-bottom: 5rem;
  text-align: center;
  color: #ccc;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2 {
  font-size: 3rem;
}

p {
  font-size: 1.9rem;
  max-width: 30rem;
}

@media (max-width: 480px) {
  section {
    padding: 3rem 5%;
  }
  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 3rem;
  }
}

@media (max-width: 320px) {
  section {
    padding: 3rem 8%;
  }
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 3rem;
  }
}
</style>
