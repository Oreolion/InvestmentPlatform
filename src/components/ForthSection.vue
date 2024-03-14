<template>
  <section>
    <div class="inner__container">
      <div class="left">
        <img src="../assets/Crypto-updt-Portfolio2desktop.webp" alt="image" />
      </div>
      <div class="right">
        <svg fill="#e67e22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
        <h1>
          Investing for the future is as important to us as it to you. And that
          means it deserves active management – the best people using the
          smartest tools, latest data and canniest insights.
        </h1>
        <div class="imgbox">
          <img src="../assets/head-signature.png" alt="" />
        </div>
        <p>Gregor Clinton</p>
        <small>Trades Expert</small>
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
  flex: 1 1 40%;
}

.left img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.right {
  flex: 1 1 50%;
}

.right svg {
    height: 5rem;
    width: 5rem;
    margin-bottom: 4rem;
}

.right h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}
.right p {
  font-size: 2.4rem;
  margin-bottom: 1rem;
  font-weight: bold;
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

.imgbox {
  width: 10rem;
  height: 5rem;
  margin-bottom: 1rem;
}

small {
    font-size: 1.6rem;
    font-weight: bold;
}

@media (max-width: 768px) {
  .inner__container {
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
