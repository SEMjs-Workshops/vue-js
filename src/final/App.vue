<template>
  <div class="app-wrapper">
    <h1>Todo-aloo</h1>

    <div v-if="isLoading">Loading...</div>

    <div v-if="!isLoading && error !== null">Could not fetch data</div>

    <div v-if="!isLoading && error === null">
      <TodoCreator v-on:create-todo="createTodo" />

      <div class="statistics">
        {{ completedTodoCount }} / {{ todos.length }} todos compeleted
      </div>

      <TodoList v-bind:todos="todos" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import TodoCreator from "./components/TodoCreator.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    TodoCreator,
    TodoList
  },
  created() {
    /* This function will be called after the component is created. */

    this.fetchData();
  },
  data() {
    return {
      error: null,
      isLoading: false,
      todos: []
    };
  },
  computed: {
    completedTodoCount: function() {
      return this.todos.filter(todo => todo.isComplete).length;
    }
  },
  methods: {
    createTodo(todo) {
      /*
      This method will be called by the `TodoCreator` component when a todo is
      created.
      */

      todo = {
        ...todo,
        id: this.todos.length + 1
      };

      this.todos = [...this.todos, todo];
    },
    fetchData() {
      this.isLoading = true;

      axios
        .get("http://localhost:3000/todos")
        .then(({ data }) => {
          this.error = null;
          this.todos = data;
        })
        .catch(err => {
          this.error = err.toString();
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

<style>
body {
  background-color: #f5f5f5;
}

h1 {
  font-weight: 300;
  margin-bottom: 8px;
  text-align: center;
}

.app-wrapper {
  color: #4d4d4d;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 300;
  max-width: 400px;
  margin: auto;
  margin-top: 8px;
}

.statistics {
  text-align: center;
}
</style>
