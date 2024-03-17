<template>
  <section>
    <div class="innercontainer">
      <div class="box">
        <div class="innerbox">
          <h5>VISION</h5>
          <h3>
            Our vision is to become the leading global trading platform,
            recognized for our innovative technology, world-class service, and
            commitment to excellence. We aspire to provide our clients with the
            most comprehensive and advanced trading solutions available, and to
            be a trusted partner in their financial success. We aim to create a
            culture of growth, diversity, and inclusivity, where our team
            members can thrive and our clients can achieve their full potential.
          </h3>
        </div>
      </div>
      <div class="box">
        <h5>MISSION</h5>
        <h3>
          Our mission is to empower our clients to make informed trading
          decisions and to provide them with the tools and resources necessary
          to achieve their financial goals. We strive to create a seamless and
          secure trading environment that promotes transparency, trust, and
          collaboration.
        </h3>
      </div>
      <div class="box">
        <h5>FIDELITY BROKER CORPS</h5>
        <h2>Give your money the chance to work as hard as you do</h2>
        <p>
          At our trading company, we are committed to transparency, trust, and
          collaboration. We work tirelessly to ensure that our clients have
          access to the latest news, research, and market insights so that they
          can make informed trading decisions. We also pride ourselves on our
          commitment to security, utilizing the latest technology and best
          practices to keep our clients’ information and assets safe.
        </p>
        <p>
          We are dedicated to providing our clients with a seamless, innovative,
          and world-class trading experience. We believe everyone deserves the
          opportunity to achieve their financial goals, and we are here to help
          you do that. Thank you for choosing our trading investment website as
          your partner in financial success.
        </p>
        <h5>Financial solutions for every step in life</h5>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  padding: 4rem 12%;
  background-color: rgba(5, 5, 5, 0.4);
  color: #ccc;
}

.innercontainer {
  display: flex;
  flex-direction: column;
}

.box {
  border-bottom: 1px solid #e67e22;
  padding-bottom: 4rem;
  display: flex;
  padding-top: 4rem;
}

.box:last-child {
  display: flex;
  flex-direction: column;
}

.box:last-child h5 {
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  margin: 0 auto;
  margin-bottom: 3rem;
}

.box h5 {
  flex: 1 1 20%;
  font-size: 3rem;
  max-width: 70rem;
}

.innerbox {
  display: flex;
}

h2 {
  font-weight: bold;
  font-size: 5.5rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 65rem;
}
h3 {
  font-size: 3.5rem;
  flex: 1 1 70%;
}

p {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  padding: 2rem 10rem;
}

@media (max-width: 768px) {
  .innerbox {
    flex-direction: column;
  }
}
</style>
