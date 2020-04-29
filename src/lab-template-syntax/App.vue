<template>
  <div>
    <div>{{ appName }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appName: "app name here",
      todos: [
        { isComplete: false, text: "Call mom" },
        { isComplete: true, text: "Buy groceries" },
      ],
    };
  },
};
</script>
