<template>
  <section>
    <div class="inner__container">
      <form action="">
        <label class="ammount">
          Amount in base currency:
          <input type="text" v-model="deposit.amount" /> <span>$</span>
        </label>
      </form>

      <label for="address">Send your Deposit to the following address:</label>
      <br />
      <input type="text" v-model="bitcoinAddress" />
      <button>Click to proceed after Deposit is complete and processed</button>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";

const currentDate = new Date()
const deposit = reactive({
  amount: "",
  depositDate: currentDate.toISOString(),
  depositCurrency: "Bitcoin",
  depositAddress: "bc1qhahtqk4egme0qkqh72td5n609tx8up6m6lga6g",
  depositStatus: "pending",
});



const bitcoinAddress = ref("bc1qhahtqk4egme0qkqh72td5n609tx8up6m6lga6g");
</script>

<style scoped>
section {
  position: absolute;
  top: 30%;
  right: 10%;
  left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
}

.inner__container {
  width: 80rem;
  height: 40rem;
  background: rgba(225, 225, 225, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form {
  margin-bottom: 3rem;
}

label {
  font-size: 2rem;
}

label span {
  font-weight: bold;
  font-size: 1.8rem;
  color: green;
}

.inner__container > input {
  background-color: #999;
  text-align: center;
  font-size: 1.7rem;
  width: 80%;
  margin-bottom: 2rem;
}

input {
  height: 4rem;
}

button {
    background-color: rgb(156, 224, 156);
    font-weight: bold;
    font-size: 1.6rem;
    width: 80%;
    color: green;
    &:hover {
        opacity: .7;
    }
}
</style>
