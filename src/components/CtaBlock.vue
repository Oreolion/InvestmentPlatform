<template>
  <section>
    <div class="left">
      <h2>Trade Anywhere, Anytime</h2>
      <p>
        Perfect for both new and experienced traders who want to access the
        markets while on the goal
      </p>
    </div>
    <div class="right">
      <button>Get Started</button>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  min-height: 49rem;
  background: url("../assets/StockChart(1).svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
}

.left h2 {
  font-size: 3.5rem;
  color: #ccc;
  margin-bottom: 3rem;
}
.left p {
  font-size: 2.5rem;
  max-width: 70rem;
  color: #ccc;
}

.right {
  flex: 1 1 50%;
  text-align: center;
}

button {
  width: 18rem;
  font-size: 1.5rem;
  height: 7rem;
}

@media (max-width: 768px) {
  section {
    flex-direction: column;
    padding: 3rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .left h2 {
    font-size: 3rem;
    color: #ccc;
    margin-bottom: 3rem;
  }
  .left p {
    font-size: 2rem;
    max-width: 70rem;
    color: #ccc;
  }
}
</style>
