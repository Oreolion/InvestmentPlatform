<template>
  <section v-if="closeInput">
    <div class="inner__container">
      <svg
        class="close__modal"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        @click="closeModal"
      >
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>

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
import { ref, reactive, defineEmits } from "vue";

const currentDate = new Date();
const deposit = reactive({
  amount: "",
  depositDate: currentDate.toISOString(),
  depositCurrency: "Bitcoin",
  depositAddress: "bc1qhahtqk4egme0qkqh72td5n609tx8up6m6lga6g",
  depositStatus: "pending",
});

const emit = defineEmits(["removeDepositModal"]);

const closeInput = ref(true);

let props = defineProps({
  toggleDepositInput: Boolean,
});

function closeModal() {
  emit("removeDepositModal", closeInput);
  !props.toggleDepositInput;
  return closeInput.value = !closeInput.value;
}

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

.close__modal {
  cursor: pointer;
  height: 3rem;
  position: absolute;
  top: 8%;
  left: 16%;
  width: 3rem;
  &:hover {
    fill: red;
  }
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
  font-size: 1.7rem;
  text-indent: 1rem;
}

button {
  background-color: rgb(156, 224, 156);
  font-weight: bold;
  font-size: 1.6rem;
  width: 80%;
  color: green;
  &:hover {
    opacity: 0.7;
  }
}
</style>
