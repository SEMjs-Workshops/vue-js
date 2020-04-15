<template>
  <div class="wrapper">
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
.wrapper {
  border-bottom: 1px solid #35495e;
  display: flex;
  padding: 14px;
  font-size: 24px;
}
</style>
