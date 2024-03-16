<template>
  <section>
    <div class="leftbox">
      <h1>Our Believe</h1>
      <p>
        At our core, we believe that every individual should have access to the
        same tools and opportunities as the largest financial institutions.
        That’s why we’ve built a cutting-edge platform that provides seamless
        access to a wide range of financial instruments, including stocks,
        options, futures, forex, and more. Our platform is designed to be
        user-friendly, secure, and customizable, enabling our clients to tailor
        their trading experience to their unique needs and preferences.
      </p>
    </div>
    <div class="midbox">
      <img src="../assets/pexels-photo-8353812.webp" alt="" />
    </div>
    <div class="rightbox">
      <svg
        fill="#e67e22"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
        />
      </svg>

      <p>
        As an investment manager we make decisions every day on behalf of savers
        and investors around the world
      </p>
      <h5>Richard Williams</h5>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  padding: 10rem 5%;
  display: flex;
  gap: 3rem;
  background-color: #ccc;

}

svg {
  height: 4rem;
  width: 4rem;
  margin-top: 15rem;
}

.leftbox {
  flex: 1 1 30%;
}
.midbox {
  height: 65rem;
  flex: 1 1 30%;
}

.midbox img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 3rem;
}
.rightbox {
  flex: 1 1 30%;
}

h1 {
  font-size: 5rem;
  margin-bottom: 4rem;
  margin-top: 10rem;
}

p {
  font-size: 2.2rem;
  max-width: 45rem;
}

.rightbox p {
  margin-top: 5rem;
  font-size: 3rem;
}

h5 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 4rem;
}

@media (max-width: 768px) {
  section {
    
    flex-direction: column;
    text-align: center;
    gap: 6rem;
  }

  h1 {
    margin-top: 4rem;
  }

  .midbox {
    max-height: 50rem;
  }

  svg {
    margin-top: 3rem;
  }

  p {
    text-align: center;
    margin: 0 auto;
  }
}
</style>
