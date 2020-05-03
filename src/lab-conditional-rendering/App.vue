<template>
  <div>
    <div>{{ appName }}</div>

    <div>
      {{ todos.filter((todo) => todo.isComplete).length }} todos completed
    </div>

    <div v-if="completedTodosCount === todos.length">All done!</div>
    <div v-else>Not done...</div>
  </div>
</template>

<script>
export default {
  computed: {
    completedTodosCount: function() {
      return this.todos.filter((todo) => todo.isComplete).length;
    },
  },
  data() {
    return {
      appName: "Todo-aloo",
      todos: [
        { isComplete: false, text: "Call mom" },
        { isComplete: true, text: "Buy groceries" },
      ],
    };
  },
};
</script>
