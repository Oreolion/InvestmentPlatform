<template>
  <section>
    <div class="left">
      <h5>WHY US</h5>
      <h2>Have questions about us ?</h2>
      <p>
        To get in touch with us, please fill out the form below with your name,
        email address, and a brief message. Our team will respond to your
        inquiry as soon as possible.
      </p>
      <p>Alternatively, you may also reach us via email.</p>
    </div>
    <div class="btmbox">
      <h4>Office Address</h4>
      <p>21 Wirraway Dr, Port Melbourne VIC 3207, Australia.</p>
    </div>
    <p class="p">support@Virtuetrustee.com</p>
  </section>
</template>

<script setup></script>

<style scoped>
section {
    padding: 5rem 5%;
  margin-top: 11rem;
  background: #000;
  color: #ccc;
  border-bottom: 1px solid #e67e22;
}

.left {
  margin-bottom: 5rem;
}

h2 {
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 4rem;
  max-width: 80rem;
}

h5 {
  font-size: 1.8rem;
}

h4 {
  font-size: 3.5rem;
  font-weight: bold;
}
.left p {
  max-width: 89rem;
  font-size: 2.2rem;
  margin-bottom: 2rem;
}

.p {
  max-width: 84rem;
  font-size: 3rem;
  margin-bottom: 2rem;
}

.btmbox p {
  max-width: 76rem;
  font-size: 2.2rem;
  margin: 0 auto;
  margin-bottom: 5rem;
}

.btmbox {
  margin: 0 auto;
  text-align: center;
}


@media (max-width: 480px ) {
    .left {
  margin-bottom: 3rem;
}

h2 {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 4rem;
  max-width: 80rem;
}

h5 {
  font-size: 1.8rem;
}

h4 {
  font-size: 2.5rem;
  font-weight: bold;
}
.left p {
  max-width: 89rem;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.p {
  max-width: 84rem;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}

}
</style>
