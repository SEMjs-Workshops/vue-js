<template>
  <div id="app">
    <h1>{{ appName }}</h1>

    <div class="app-statistics">
      {{ todos.filter((todo) => todo.isComplete).length }} todos completed
    </div>

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
  data() {
    return {
      appName: "Todo-aloo",
      todos: [
        { id: 1, isComplete: false, text: "Call mom" },
        { id: 2, isComplete: true, text: "Buy groceries" },
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

<style src="../../static/App.css"></style>
