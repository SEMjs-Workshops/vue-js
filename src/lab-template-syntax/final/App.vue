<template>
  <div>
    <h1>{{ appName }}</h1>
    <div>{{ completedTodosCount }} todos completed</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appName: "Todo-aloo",
      todos: [
        { isComplete: false, text: "Call mom" },
        { isComplete: true, text: "Buy groceries" },
      ],
    };
  },
  computed: {
    completedTodosCount: function() {
      return this.todos.filter((todo) => todo.isComplete).length;
    },
  },
};
</script>
