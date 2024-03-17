<template>
  <section>
    <h1>Get your crypto asset with ease</h1>
    <div class="innerbox">
      <div class="left">
        <h2>Buy From Bitcoin.com Our Official Partner</h2>
        <p>
          Buying cryptocurrency can be done in several ways, depending on the
          specific cryptocurrency you want to buy and where you live. But as
          sole partner with Bitcoin.com its easier and safer
        </p>
        <button>
          <svg
            fill="#ccc"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-141.7-35.3c4.9-33-20.2-50.7-54.6-62.6l11.1-44.7-27.2-6.8-10.9 43.5c-7.2-1.8-14.5-3.5-21.8-5.1l10.9-43.8-27.2-6.8-11.2 44.7c-5.9-1.3-11.7-2.7-17.4-4.1l0-.1-37.5-9.4-7.2 29.1s20.2 4.6 19.8 4.9c11 2.8 13 10 12.7 15.8l-12.7 50.9c.8 .2 1.7 .5 2.8 .9-.9-.2-1.9-.5-2.9-.7l-17.8 71.3c-1.3 3.3-4.8 8.4-12.5 6.5 .3 .4-19.8-4.9-19.8-4.9l-13.5 31.1 35.4 8.8c6.6 1.7 13 3.4 19.4 5l-11.3 45.2 27.2 6.8 11.2-44.7a1038.2 1038.2 0 0 0 21.7 5.6l-11.1 44.5 27.2 6.8 11.3-45.1c46.4 8.8 81.3 5.2 96-36.7 11.8-33.8-.6-53.3-25-66 17.8-4.1 31.2-15.8 34.7-39.9zm-62.2 87.2c-8.4 33.8-65.3 15.5-83.8 10.9l14.9-59.9c18.4 4.6 77.6 13.7 68.8 49zm8.4-87.7c-7.7 30.7-55 15.1-70.4 11.3l13.5-54.3c15.4 3.8 64.8 11 56.8 43z"
            />
          </svg>
          Bitcoin.com
        </button>
      </div>
      <div class="right">
        <div class="imgbox">
          <img src="..\assets\pexels-photo-8353777.webp" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  min-height: 65rem;
  margin-top: 11rem;
  background: rgba(35, 135, 195, 0.3);
  color: #ccc;
  padding: 7rem 18%;
}

svg {
  height: 3rem;
  width: 3rem;
}

h1 {
  font-size: 6rem;
  font-weight: bold;
  margin: 0 auto;
  margin-bottom: 10rem;
  text-align: center;
}

h2 {
  font-size: 5rem;
  margin-bottom: 2rem;
}

.innerbox {
  display: flex;
  gap: 10rem;
}

.left {
  flex: 1 1 50%;
}
.right {
  flex: 1 1 50%;
}

p {
  font-size: 2.5rem;
  margin-bottom: 5rem;
}

button {
  background-color: #000;
  width: 21rem;
  height: 8rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  &:hover {
    background: transparent;
  }
}

.imgbox {
  height: 58rem;
  background-color: #000;
  border-radius: 3rem;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 3rem;
  margin-top: -3rem;
  margin-left: -3rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 4.5rem;
  }

  h2 {
    font-size: 3.5rem;
  }
  .innerbox {
    flex-direction: column;
  }

  .left {
    text-align: center;
  }

  button {
    margin: 0 auto;
  }
}
</style>
