<template>
  <section>
    <h5>SUPER RELIABLE</h5>
    <H1>Switch to Fidelity Chase Corps today and experience the difference</H1>
    <div class="innerbox">
      <div class="box">
        <h2>Independent thinking</h2>
        <p>
          With distinct specialist teams across active and passive, traditional
          and alternative, each with their own viewpoints and philosophies, we
          generate innovative ideas to help meet your investment goals
        </p>
      </div>
      <div class="box">
        <h2>Performance excellence</h2>
        <p>
          Taking a longer time horizon and systematically adopting a
          sustainability lens to many of our investment decisions is integral to
          our approach and allows us to bring top-tier products with
          sustainability built into their core
        </p>
      </div>
      <div class="box">
        <h2>A Trading firm to depend on</h2>
        <p>
          We have a partnership culture embedded in our DNA, built on enduring
          relationships that adapt with you as your investment and business
          needs change. We deliver an ecosystem of ideas and expertise to find
          the right solution for you.
        </p>
      </div>
      <div class="box">
        <h2>…with disciplined execution</h2>
        <p>
          We bring you exacting standards, robust investment processes and a
          true focus on high-quality client service delivery, all underpinned by
          the safety and security of the broader Aspire trade .
        </p>
      </div>
    </div>
  </section>
  <section class="lowersection">
    <h3>
      Fidelity Broker Corps means driving change for the better for everyone
    </h3>
    <div class="innercontainer">
      <div class="imgbox">
        <img src="../assets/pexels-photo.webp" alt="" />
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
          We believe the financial system should be built to work for everyone.
          That’s why we create products that let you start investing at your own
          pace, on your own terms.
        </p>
        <h6>Alex Skrylenski</h6>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  padding: 7rem 5%;
  color: #ccc;
  background-color: rgba(5, 118, 322, 0.2);
}

h5 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  margin: 0 auto;
}

h1 {
  font-size: 4rem;
  max-width: 50rem;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2rem;
}
h2 {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
}

p {
  font-size: 2rem;
}

svg {
  height: 4rem;
  width: 4rem;
  margin-bottom: 2rem;
}
.innerbox {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  align-items: center;
  justify-content: center;
}

.box {
  border-bottom: 2px solid #ccc;
  border-top: 2px solid #ccc;
  border-radius: 3rem;
  padding: 2rem;
}

h3 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 7rem;
}

.lowersection {
  height: 74rem;
}

.innercontainer {
  display: flex;
  gap: 6rem;
  border: 1px solid #e67e22;
  border-radius: 2rem;
  margin-bottom: 6rem;
}

.rightbox {
  margin-top: 20rem;
  flex: 1 1 65%;
}

.imgbox {
  height: 53rem;
  width: 33rem;
  flex: 1 1 33%;
  margin-top: -4rem;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 2rem;
}

.rightbox p {
  margin-bottom: 2rem;
  max-width: 69rem;
}

h6 {
  font-size: 2.5rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .innerbox {
    display: flex;
    flex-direction: column;
  }

  .innercontainer {
    flex-direction: column;
    gap: 2rem;
    height: 45rem;
  }

  .imgbox {
    height: 30rem;
  }

  svg {
    display: none;
  }

  .rightbox {
    margin-top: 1rem;
  }

  .rightbox p {
    padding: 2rem;
    margin-bottom: 0rem;
  }

  h6 {
    padding: 0 2rem;
    font-size: 2rem;
  }
}
</style>
