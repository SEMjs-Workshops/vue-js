<template>
  <div id="app">
    <h1>{{ appName }}</h1>

    <h2>
      {{ todos.filter((todo) => todo.isComplete).length }} todos completed
    </h2>

    <hr />

    <TodoCreator v-bind:todos="todos" />
    <TodoList v-bind:todos="todos" />
  </div>
</template>

<script>
import TodoCreator from "./components/TodoCreator";
import TodoList from "./components/TodoList";

export default {
  components: {
    TodoCreator,
    TodoList,
  },
  computed: {
    completedTodosCount: function() {
      return this.todos.filter((todo) => todo.isComplete).length;
    },
  },
  data() {
    return {
      appName: "Todo-aloo",
      todoText: "",
      todos: [
        { id: 1, isComplete: false, text: "Call mom" },
        { id: 2, isComplete: true, text: "Buy groceries" },
      ],
    };
  },
};
</script>
