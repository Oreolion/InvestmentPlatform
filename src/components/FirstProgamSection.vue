<template>
  <section>
    <div class="topbox">
      <h1>
        Ready to enroll? <br />
        We hope to meet you soon
      </h1>
      <p>
        Become a better investor on the go, right in the app Virtuetrustee was
        built to give everyone the tools of wealth-building. Whether you’re new
        to investing or planning for your family’s future, we bundle our
        products, tools, and education into subscription tiers — each curated to
        meet you on whichever stage of life you’re in.
      </p>
    </div>
    <div class="btmbox">
      <h4>THE PROCESS</h4>
      <div class="innerbox">
        <div class="box">
          <h3>Automatic Recurring Investments</h3>
          <p>
            Set your recurring investments and make a habit out of investing.
            Try $100 a day.
          </p>
        </div>
        <div class="box">
          <h3>Automatic Portfolio Rebalancing</h3>
          <p>
            We'll adjust your Base portfolio as needed to help keep your
            allocations on track with your long-term money goals.
          </p>
        </div>
        <div class="box">
          <h3>Automatic Dividend Reinvesting</h3>
          <p>
            If you receive dividends (payouts) from your investments, they are
            automatically reinvested.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  padding: 4rem 5%;
  min-height: 60rem;
  margin-top: 11rem;
  background-color: #000;
  color: #ccc;
}
h1 {
  font-size: 6rem;
  margin-bottom: 4rem;
}

h4 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

h3 {
  font-size: 3rem;
  margin-bottom: 2rem;
  white-space: nowrap;
}

p {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.topbox {
  border-bottom: 1px solid #e67e22;
  padding-bottom: 8rem;
}

.topbox p {
  max-width: 70%;
}

.btmbox {
  padding: 7rem 0;
}

.innerbox {
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
}

.box {
  background-color: rgba(5, 118, 369, 0.15);
  padding: 2rem;
  border: 1px solid #e67e22;
  border-radius: 3rem;
  width: 48rem;
  height: 23rem;
}

@media (max-width: 768px) {
  .innerbox {
    flex-direction: column;
  }

  h1 {
    font-size: 4.5rem;
  }

  h4 {
    text-align: center;
  }
}
@media (max-width: 480px) {
  h1 {
    font-size: 3rem;
    text-align: center;
  }

  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    white-space: wrap;
    text-align: center;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    text-align: center;
    margin: 0 auto;
  }
  .topbox {
    border-bottom: 1px solid #e67e22;
    padding-bottom: 4rem;
  }

  .box {

  width: 32rem;
  height: 23rem;
}
}
</style>
