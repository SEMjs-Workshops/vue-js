<template>
  <div id="app">
    <h1>{{ appName }}</h1>

    <h2>
      {{ todos.filter((todo) => todo.isComplete).length }} todos completed
    </h2>

    <hr />

    <ul>
      <li>{{ todos[0].text }}</li>
      <li>{{ todos[1].text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    completedTodosCount: function() {
      return this.todos.filter((todo) => todo.isComplete).length;
    },
  },
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
};
</script>
