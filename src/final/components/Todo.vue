<template>
  <div class="item">
    <div><input type="checkbox" v-model="data.isComplete" /></div>
    <div>{{ data.text }}</div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["data"],
  data() {
    return {
      style: {
        color: "red"
      }
    };
  }
};
</script>

<style scoped>
.item {
  display: flex;
}
</style>
