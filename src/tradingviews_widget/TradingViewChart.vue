<template>
  <div class="container">
    <Chart
      class="chart1"
      :options="{
        theme: 'dark',
        symbol: 'BINANCE:BTCUSDT',
        withdateranges: true,
        details: true,
      }"
    />
    <MarketOverview
      class="chart2"
      :options="{
        showChart: true,
      }"
    />
  </div>
</template>

<script setup>
import { Chart } from "vue-tradingview-widgets";
import { MarketOverview } from "vue-tradingview-widgets";
</script>

<style scoped>
.container {
  margin-left: -8rem;
  background-color: #173b6d;
  display: flex;
  position: relative;
  height: 95vh;
}

.chart1 {
  flex: 1 1 55%;
}
.chart2 {
  flex: 1 1 20rem;
  position: absolute;
  right: -1%;
  top: 0;
}

@media (max-width: 768px) {
  .container {
    margin-left: 0;
  }
  .chart2 {
    display: none;
  }
}
</style>
