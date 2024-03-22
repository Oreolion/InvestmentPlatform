<template>
  <div>this is the dashboard</div>
  <button @click="handleSignOut">Sign Out</button>
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const router = useRouter();

const handleSignOut = async () => {
  try {
    await signOut(getAuth());
    localStorage.clear();
    router.push("/login");
    toast.success("You are Logged Out", {
      autoClose: 8000,
    });
  } catch (error) {
    console.log(error);
  }
};</script>

<style scoped></style>
