<template>
  <DashboardNav></DashboardNav>
  <HeaderAndNav></HeaderAndNav>
  <section>
    <div class="topbox">
      <div class="btnbox">
        <router-link to="/dashboard/accountprofile" class="button"
          >Account Details</router-link
        >
        <router-link to="/dashboard/policypage" class="button"
          >Confidentiality Policies</router-link
        >
      </div>
      <h2>Account Details</h2>
    </div>
    <div class="btmbox">
      <form action="">
        <label for="Firstname">
          <input
            type="text"
            v-model="userProfile.firstname"
            placeholder="First name here"
          />
        </label>
        <label for="Lastname">
          <input
            type="text"
            v-model="userProfile.lastname"
            placeholder="Last name here"
          />
        </label>
        <label for="username">
          <input
            type="text"
            v-model="userProfile.displayName"
            placeholder="Username here"
          />
        </label>
        <label for="email">
          <input
            type="email"
            placeholder="email here"
            v-model="profile.email"
          />
        </label>
        <label for="country">
          <input
            type="text"
            placeholder="country here"
            v-model="userProfile.country"
          />
        </label>
        <label for="phone">
          <input
            v-model="userProfile.phoneNumber"
            type="tel"
            placeholder="phone number here"
          />
        </label>
        <h2>Account Verification</h2>
        <p>
          Mail your Passport to our customer care to process your verification.
          Account verification usually takes 1-2 working days
        </p>
        <label for="file">
          <input class="idtype" type="text" placeholder="Input your ID type" />
          <br />
          Upload file <br />
          <input type="file" style="background: #222" />
        </label>

        <span
          ><input class="checkbox" type="checkbox" /> Click to read and accepts
          the terms of service</span
        >
        <button>Upload</button>
      </form>
    </div>
    <p class="footer">C2024 fidelity broker corps.</p>
  </section>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import DashboardNav from "../components/DashboardNav.vue";
import HeaderAndNav from "../components/HeaderAndNav.vue";

let userProfile = reactive({});
const profile = reactive({});

const handleUpdateProfile = async () => {
  const postRef = collection(db, "users");
  //   const postQuery = query(postRef, orderBy("createdAt", "asc"), limit(5));

  // Get initial data
  const querySnapshot = await getDocs(postRef);

  if (querySnapshot) {
    querySnapshot.docs.filter((doc) => {
      if (doc.id === profile.userId) {
        console.log(doc.id, " => ", doc.data());
        userProfile.firstname = doc.data().firstname;
        userProfile.lastname = doc.data().lastname;
        userProfile.phoneNumber = doc.data().phoneNumber;
        userProfile.country = doc.data().country;
        userProfile.displayName = doc.data().displayName;
      }
    });
  } else {
    console.log("No such document!");
  }
};

onMounted(async () => {
  return await handleUpdateProfile();
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    console.log(user.displayName);
    console.log(user.email);
    console.log(user.uid);
    profile.email = user.email ?? "";
    profile.displayName = user.displayName ?? "";
    profile.userId = user.uid ?? "";
  }
});
</script>

<style scoped>
section {
  margin-left: 17rem;
}

.topbox {
  height: 40rem;
  width: 140rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #e67e22;
  position: relative;
}

.topbox::before {
  content: "";
  position: absolute;
  background-image: url("../assets/istockphoto-1425905549-170667a.webp");
  opacity: 0.4;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 7rem;
  background-size: cover;
}
.topbox > * {
  /* Target all child elements */
  position: relative; /*  Allow child elements to overlap the pseudo-element */
}

.topbox h2 {
  margin-top: 3rem;
}
h2 {
  font-size: 5rem;
  font-weight: bold;
}

.topbox .btnbox {
  padding-top: 33rem;
  margin-bottom: 5rem;
  display: flex;
}

.button {
  width: 19rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  height: 6rem;
  font-size: 1.5rem;
  background-color: transparent;
  border: 3px solid #ccc;
  color: #ccc;
}

a.router-link-exact-active {
  background: rgba(255, 255, 255, 0.2);
  border-bottom: 6px solid #e67e22;
  padding: 0.3rem;
}

.btmbox {
  background-color: rgb(28, 28, 36);
  color: #ccc;
  margin-top: 7rem;
  margin-left: 0rem;
  width: 110%;
  padding: 6rem 5%;
}
.btmbox form {
  display: flex;
  flex-direction: column;
  padding: 6rem;
  gap: 4rem;
}

.btmbox h2 {
  color: #e67e22;
  text-align: center;
}

input {
  width: 80%;
  height: 5rem;
  background: transparent;
  border: 1px solid #ccc;
  text-indent: 1rem;
  color: #ccc;
}

.idtype {
  margin-bottom: 3rem;
}

.btmbox p {
  font-size: 1.8rem;
  max-width: 80rem;
}

.btmbox label {
  font-size: 1.8rem;
}

.btmbox span {
  font-size: 1.8rem;
  color: #e67e22;
}

.checkbox {
  width: 5%;
  height: 2rem;
}

.footer {
  color: green;
  font-size: 1.8rem;
  text-align: center;
}

.btmbox button {
  width: 25rem;
  font-size: 2rem;
}

@media (max-width: 768px) {
  section {
    margin-left: -5rem;
  }

  .topbox {
    width: 75rem;
  }
}

@media (max-width: 480px) {
  .topbox {
    width: 45rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: bold;
  }

  .button {
    width: 18rem;
    cursor: pointer;
    display: flex;
    height: 5rem;
  }

  .btmbox {
    margin-top: 4rem;
    padding: 6rem 5%;
  }
  .btmbox form {
    padding: 2rem;
  }

  input {
    width: 100%;
  }
}

@media (max-width: 320px) {
  .topbox {
    width: 40rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .topbox h2 {
    padding-top: 20rem;
  }

  .button {
    width: 16rem;
    cursor: pointer;
    font-size: 1.3rem;
    display: flex;
    height: 5rem;
  }
}
</style>
