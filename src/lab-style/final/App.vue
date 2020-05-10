<template>
  <div id="app" class="app-wrapper">
    <h1>{{ appName }}</h1>

    <div class="app-statistics">
      {{ todos.filter((todo) => todo.isComplete).length }} todos completed
    </div>

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
      todos: [
        { id: 1, isComplete: false, text: "Call mom" },
        { id: 2, isComplete: true, text: "Buy groceries" },
      ],
    };
  },
};
</script>

<style scoped>
@import "../static/App.css";
</style>
