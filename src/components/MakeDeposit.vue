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
          <input type="text" v-model="myDeposit.ammount" /> <span>$</span>
        </label>
      </form>

      <label for="address"
        >Send your Deposit to the following address or scan the barcode
        below:</label
      >
      <br />
      <input type="text" v-model="bitcoinAddress" /> <button class="btn" @click="copyToClipBoard">click here copy address</button>
      <small>or scan the following barcode</small> <br />
      <div class="barcode__img">
        <img src="../assets/barcode.jpg" alt="" />
      </div>

      <small style="text-align: center">
        Only Click to proceed after your Deposit is complete and processed...
      </small>
      <button @click="handleCreateDeposit">Proceed to complete deposit</button>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, inject } from "vue";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase";

const myDeposit = inject("deposit");
const bitcoinAddress = ref("bc1qhahtqk4egme0qkqh72td5n609tx8up6m6lga6g");


console.log(myDeposit);




const deposit = reactive({
  ammount: myDeposit.ammount,
  depositDate: myDeposit.depositDate,
  depositCurrency: myDeposit.depositCurrency,
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
  return (closeInput.value = !closeInput.value);
}


const createDeposit = async (data) => {
  try {
    await setDoc(doc(db, "deposits", data.ammount), { ...data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const copyToClipBoard = () => {
   navigator.clipboard.writeText(bitcoinAddress.value);
};

const handleCreateDeposit = async () => {
  await createDeposit({
    depositCurrency: deposit.depositCurrency,
    ammount: deposit.ammount,
    depositDate: deposit.depositDate,
    depositStatus: deposit.depositStatus,
    depositAddress: deposit.depositAddress,
  });
};
</script>

<style scoped>
section {
  position: absolute;
  top: 10%;
  right: 10%;
  left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
}

.inner__container {
  width: 80rem;
  height: 55rem;
  background: rgba(225, 225, 225, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form {
  margin-bottom: 2rem;
}

label {
  font-size: 1.6rem;
}

label span {
  font-weight: bold;
  font-size: 1.6rem;
  color: green;
}

.barcode__img {
  height: 20rem;
  width: 20rem;
  margin-bottom: 2rem;
}

.barcode__img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

small {
  color: red;
  font-size: 1.4rem;
  font-weight: bold;
}

.note {
  margin-bottom: 1.5rem;
}

.close__modal {
  cursor: pointer;
  height: 3rem;
  position: absolute;
  top: 4%;
  left: 12%;
  width: 3rem;
  &:hover {
    fill: red;
  }
}

.inner__container > input {
  background-color: #999;
  text-align: center;
  font-size: 1.4rem;
  width: 80%;
}

input {
  height: 4rem;
  font-size: 1.6rem;
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

.btn {
    width: 40%;
    height: 2rem;
    padding: .3rem;
    margin-top: .5rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    &:hover {
        border: 0;
    }
}

@media (max-width: 480px) {
  section {
    top: 15%;
    left: 15%;
  }

  .inner__container {
    width: 80rem;
    height: 55rem;
    padding: 0 3rem;
  }

  .note {
    margin-bottom: 1rem;
  }

  form {
    margin-bottom: 1rem;
    margin-top: 2rem;
    margin-left: 2rem;
  }

  form + label {
    font-size: 1.4rem;
  }

  label {
    font-size: 1.7rem;
  }

  .inner__container > input {
    background-color: #999;
    text-align: left;
    text-indent: 0.3rem;
    font-size: 1rem;
    width: 100%;
  }

  input {
    height: 3rem;
    font-size: 1.7rem;
    text-indent: 1rem;
  }
  small {
    font-size: 1rem;
  }

  button {
    font-weight: normal;
    font-size: 1.4rem;
    width: 83%;
  }

  .close__modal {
    top: 4%;
    left: 10%;
  }
}

@media (max-width: 320px) {
  section {
    top: 7%;
    left: 15%;
    right: 6%;
    z-index: 111;
  }

  .inner__container {
    margin-top: -4rem;
  }

  input {
    width: 70%;
  }
  form {
    margin-top: 0.5rem;
  }

  .barcode__img {
    height: 17rem;
    width: 17rem;
    margin-bottom: 0.5rem;
  }

  button {
    font-size: 1.2rem;
  }

  form + label {
    font-size: 1.1rem;
  }

  label {
    font-size: 1.3rem;
  }

  .close__modal {
    z-index: 111;
  }

  .note {
    margin-bottom: 0.5rem;
  }
}
</style>
