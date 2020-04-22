<template>
  <v-app>
    <div class="app-wrapper">
      <h1>Todo-aloo</h1>

      <div v-if="!isLoading && error !== null" class="app-error">
        Could not fetch data
      </div>

      <div v-if="error === null">
        <TodoCreator v-on:create-todo="createTodo" />

        <div class="app-statistics">
          {{ completedTodoCount }} / {{ todos.length }} todos compeleted
        </div>

        <TodoList v-bind:todos="todos" v-on:update-todo="updateTodo" />
      </div>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";

import TodoCreator from "./components/TodoCreator.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    TodoCreator,
    TodoList,
  },
  created() {
    /* This function will be called after the component is created. */

    this.fetchData();
  },
  data() {
    return {
      error: null,
      isLoading: false,
      todos: [],
    };
  },
  computed: {
    completedTodoCount: function() {
      return this.todos.filter((todo) => todo.isComplete).length;
    },
  },
  methods: {
    createTodo(todo) {
      /*
      This method will be called when the `TodoCreator` component creates a new
      todo.
      */

      axios.post("http://localhost:3000/todos", todo).then(() => {
        this.fetchData();
      });
    },
    fetchData() {
      this.isLoading = true;

      axios
        .get("http://localhost:3000/todos")
        .then(({ data }) => {
          this.error = null;
          this.todos = data;
        })
        .catch((err) => {
          this.error = err.toString();
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    updateTodo(todo) {
      /*
      This method will be called when the `Todo` component updates a todo. The
      event will go thru the `TodoList` component. In other words, the event
      flow is `Todo` -> `TodoList` -> `updateTodo`.
      */

      console.log(todo);
      axios.patch(`http://localhost:3000/todos/${todo.id}`, todo).then(() => {
        this.fetchData();
      });
    },
  },
};
</script>

<style>
@import "../../static/App.css";
</style>
