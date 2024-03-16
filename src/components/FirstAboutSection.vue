<template>
  <section>
    <h1>Plus more ways to trade, invest and learn</h1>
    <div class="inner">
      <div class="leftbox">
        <img src="../assets/pexels-photo-8353804.webp" alt="" />
      </div>
      <div class="rightbox">
        <h3>Because when you succeed, we all do.</h3>
        <p>
          We believe technology needs to work for people, not the other way
          around. Our trading tools are simply intuitive and designed to take
          the complexity out of trading, so you can be free to focus on what
          matters most.We believe technology needs to work for people, not the
          other way around.
        </p>
        <p>
            Our trading tools are simply intuitive and designed to take the complexity out of trading, so you can be free to focus on what matters most.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
    padding: 5rem 5%;
  min-height: 50rem;
  background-color: #ccc;
  margin-top: 11rem;
}

h3 {
    font-size: 4.5rem;
    margin-bottom: 2rem;
    margin-top: 10rem;
}

h1 {
    font-size: 6rem;
    font-weight: bold;
    margin-bottom: 4rem;
    text-align: center;
}

p {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: bold;
}

.inner {
    display: flex;
    gap: 4rem;
}

.leftbox {
    flex: 1 1 50%;
    height: 80vh;
}

.leftbox img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 3rem;
}

.rightbox {
    flex:  1 1 50%;
}


@media (max-width: 768px) {
    .inner {
        flex-direction: column;
    }
}


</style>
