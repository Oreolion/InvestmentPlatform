<template>
  <section>
    <div class="box">
      <div class="leftbox">
        <h1>A diversified mix of stocks and crypto Security & Protection</h1>
        <p>
          Diversification means your investments are exposed to a broad range of
          stocks, bonds, or both — possibly over 7,000! This can help reduce
          your risk, compared to trading individual stocks.
        </p>
      </div>
      <div class="rightbox">
        <img src="../assets/Envoy-Invest-Diversified-Mix.webp" alt="" />
      </div>
    </div>
    <div class="box">
      <div class="leftbox">
        <h1>Invest in today’s top companies</h1>
        <p>
          When you invest in Virtuetrustee ETF portfolios, there’s a good chance
          a portion of your investment is in some of the world’s largest and
          most successful companies, including names like Apple, Amazon, Google,
          and Berkshire Hathaway.
        </p>
      </div>
      <div class="rightbox">
        <img src="../assets/Envoy-Invest-Updt-Body-Img.webp" alt="" />
      </div>
    </div>
    <div class="box">
      <div class="leftbox">
        <h1>Harness the power of compounding</h1>
        <p>
          Money doesn’t grow on trees. But with compound returns, money can grow
          on itself. It’s a long-term investing principle foundational to how
          Acorns can work for you
        </p>
      </div>
      <div class="rightbox">
        <img src="../assets/Envoy-Home-Potential.ByTGayVeo.webp" alt="" />
      </div>
    </div>
    <div class="box">
      <div class="leftbox">
        <h1>Security & Protection</h1>
        <p>
          Virtuetrustee Invest, Later & Early accounts are SIPC-insured up to
          $500,000. SIPC does not protect against market risk, which is the risk
          inherent in a fluctuating market
        </p>
      </div>
      <div class="rightbox">
        <img
          src="../assets/Banking-Security-Strong-as-Oak-1-1-.rJtrYCiJh.webp"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  padding: 10rem 5%;
  padding-left: 20rem;
  display: flex;
  color: #ccc;
  background-color: #000;
  flex-direction: column;
  gap: 9rem;
}

.box {
  display: flex;
  gap: 4rem;
  border-bottom: 2px solid #e67e22;
  border-radius: 2rem;
  padding: 3rem 0;
}

.box .leftbox {
  flex: 1 1 65%;
}

h1 {
  font-size: 5rem;
  max-width: 62rem;
  margin-bottom: 3rem;
}

p {
  max-width: 58rem;
  font-size: 2.2rem;
  font-weight: bold;
}
.box .rightbox {
  flex: 1 1 40%;
  width: 40rem;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  section {
    padding-left: 0;
  }
  .box {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
@media (max-width: 480px) {
  section {
    padding-left: 0;
    padding: 3rem 5%;
  }

  h1 {
    font-size: 3rem;
  }
  .box {
    gap: 2rem;

    padding: 1rem 0;
  }

  .box .rightbox {
    width: 30rem;
  }
}
</style>
