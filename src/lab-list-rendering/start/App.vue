<template>
  <div id="app">
    <h1>{{ appName }}</h1>

    <div>
      {{ todos.filter((todo) => todo.isComplete).length }} todos completed
    </div>

    <hr />

    <ul>
      <li>{{ todos[0].text }}</li>
      <li>{{ todos[1].text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appName: "Todo-aloo",
      todos: [
        { id: "a1", isComplete: false, text: "Call mom" },
        { id: "a2", isComplete: true, text: "Buy groceries" },
        { id: "a3", isComplete: true, text: "foo" },
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
