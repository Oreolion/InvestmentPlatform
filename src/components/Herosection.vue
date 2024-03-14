<template>
  <section>
    <div class="inner__herosection">
      <div class="leftbox">
        <h1>YOUR NEW FINANCIAL PICTURE STARTS HERE</h1>
        <h1>WE TRADE, YOU EARN...</h1>
        <P
          >Immerse yourself in a world of precision trading, where every move is
          a step towards your financial goals. We don’t just facilitate trades,
          we craft opportunities.</P
        >
        <button>Start Investing</button>
        <div class="lowerbox">
          <div class="box">
            <h1>21M+</h1>
            <p>Exchange Traded Products</p>
          </div>
          <div class="box">
            <h1>150M+</h1>
            <p>Capital Markets</p>
          </div>
          <div class="box">
            <h1>4.9</h1>
            <p>User Rating</p>
          </div>
        </div>
      </div>
      <div class="rightbox">
        <img src="../assets/istockphoto-1358049777-170667a.webp" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  padding: 2rem 3%;
  min-height: 55rem;
  color: aliceblue;
  background-color: rgba(34, 111, 159, 0.2);
  background: url("../assets/shubham-dhage-T9rKvI3N0NM-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 2rem;
}

.inner__herosection {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15rem;
}

.leftbox {
  flex: 1 1 60%;
}

.leftbox h1 {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.leftbox p {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  max-width: 65rem;
}

.leftbox button {
  width: 18rem;
  height: 7rem;
  margin-bottom: 5rem;
}

.leftbox .lowerbox {
  display: flex;
  align-items: center;
  margin-bottom: 6rem;
}

.leftbox .lowerbox .box {
  width: 23rem;
  height: 15rem;
  background-color: rgba(34, 111, 159, 0.4);
  padding: 2rem;
  border-right: 1px solid #000;
}

.leftbox .lowerbox .box h1 {
  margin-bottom: 0.5rem;
  font-size: 3rem;
}
.leftbox .lowerbox .box p {
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
}

.rightbox {
  height: 56rem;
  flex: 1 1 50%;
  background-color: rgba(18, 5, 5, 0.6);
  box-shadow: 2px 4px 10px rgba(215, 215, 215, 0.2);
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 3rem;
}

.rightbox img {
  height: 100%;
  width: 100%;
  opacity: 0.5;
  margin-left: -3rem;
  margin-top: -3rem;
  object-fit: cover;
  border-bottom-right-radius: 3rem;
}

@media (max-width: 768px) {
  .inner__herosection {
    flex-direction: column;
    gap: 6rem;
  }
}
</style>
