<template>
  <section>
    <div class="inner__container">
      <div class="left">
        <img src="../assets/hero_platform2.webp" alt="image" />
      </div>
      <div class="right">
        <h1>
          "Seize Every Opportunity: Access a World of Trading Possibilities"
        </h1>
        <p>
          Fidelity Broker Corps is a global, multi-asset broker offering clients
          access to a nimble and powerful service for trading,Cryptocurrency
          CFDs on Forex, Commodities, Indices, and Shares.
        </p>
        <p>
          With more than 10 years of market experience and headquartered in
          Switzerland, Aspire now has over 1,000 staff across more than 30
          global offices.
        </p>
        <p>
          Fidelity Broker Corps is more than a broker. It provides a trusted
          trading ecosystem that enables clients to achieve their own success,
          in a faster and simpler manner.
        </p>
        <button>Know more about us</button>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  min-height: 45rem;
  padding: 4rem 7%;
  background: rgba(295, 295, 295, 0.9);
}

.inner__container {
  display: flex;
  align-items: center;
  gap: 6rem;
}

.left {
  height: 100%;
  flex: 1 1 50%;
}

.left img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.right {
  flex: 1 1 50%;
}

.right h1 {
  font-size: 3.4rem;
  margin-bottom: 2rem;
}
.right p {
  font-size: 2.4rem;
  margin-bottom: 2rem;
}

.right button {
  width: 25rem;
  height: 7rem;
  margin-top: 2rem;
  font-size: 1.8rem;
  background-color: rgba(1, 68, 119, 0.6);
  white-space: nowrap;
  &:hover {
    background: transparent;
    color: rgba(1, 68, 119, 0.6);
  }
}

@media (max-width: 768px) {
  .inner__container {
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
