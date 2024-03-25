<template>
  <div class="container">
    <TickerTape
      :options="{
        theme: 'dark',
      }"
    />
  </div>
</template>

<script setup>
import { TickerTape } from "vue-tradingview-widgets";
</script>

<style scoped>
.container {
  margin-top: 9rem;
}
</style>
