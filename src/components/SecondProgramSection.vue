<template>
  <section>
    <div class="topbox">
      <div class="imgbox">
        <img
          src="../assets/Banking-Security-Strong-as-Oak-1-1-.rJtrYCiJh.webp"
          alt=""
        />
      </div>
      <div class="imgbox">
        <img
          src="../assets/product_hero_invest__d3559005213c848c01f05060ac9469e0.png"
          alt=""
        />
      </div>
    </div>
    <div class="btmbox">
      <div class="left">
        <h1>Standards & Safety</h1>
        <p>
          As a leading Forex broker, we uphold the highest standards of
          regulation and compliance. We are also strictly audited and keep all
          client funds in a segregated trust account, to ensure your money is
          protected.
        </p>
        <button>
            <router-link class="link" to="/signup">Get Started</router-link>
           </button>
      </div>
      <div class="right">
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              /></svg
            >Integrating Trained AI
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>
            Investing
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              /></svg
            >Retiring
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              /></svg
            >Child Support
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              /></svg
            >Loan
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  background-color: #000;
  color: #ccc;
}

.topbox {
  display: flex;
  gap: 4rem;
}
.btmbox {
  display: flex;
  gap: 10rem;
  padding-bottom: 10rem;
}

svg {
  height: 3rem;
  width: 3rem;
  fill: #e67e22;
}

.imgbox {
  /* height: 45rem; */
  flex: 1 1 50%;
  height: 100%;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

h1 {
  font-size: 6rem;
  margin-bottom: 3rem;
}

.right {
  flex: 1 1 50%;
}

.left {
  flex: 1 1 50%;
}

ul {
  margin-top: 10rem;
}

li {
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.link {
    color: #ccc;
    font-weight: bold;
    font-size: 1.9rem;
}

p {
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

button {
  width: 18rem;
  height: 8rem;
  font-size: 2rem;
}

@media (max-width: 768px) {
  .topbox {
    flex-direction: column;
  }
  .btmbox {
    flex-direction: column;
    gap: 2rem;
  }

  h1 {
    font-size: 4.5rem;
  }
}

@media (max-width: 320px) {
  h1 {
    font-size: 2.5rem;
  }

  ul {
    margin-top: 3rem;
  }

  p {
    font-size: 1.7rem;
  }

  li {
    font-size: 1.8rem;
  }

  button {
    width: 16rem;
    height: 6rem;
    font-size: 1.6rem;
  }
}
</style>
