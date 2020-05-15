<template>
  <v-app>
    <div class="app-wrapper">
      <h1>Todo-aloo</h1>

      <div v-if="error !== null" class="app-error">
        {{ error }}
      </div>

      <div v-if="error === null">
        <TodoCreator v-on:create-todo="createTodo" />

        <div class="app-statistics">
          {{ completedTodoCount }} / {{ todos.length }} todos compeleted
        </div>

        <TodoList v-bind:todos="todos" v-bind:updateTodo="updateTodo" />
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
      todos: [],
    };
  },
  computed: {
    completedTodoCount: function() {
      return this.todos.filter((todo) => todo.isComplete).length;
    },
  },
  methods: {
    createTodo: function(todo) {
      /*
      This method will be called when the `TodoCreator` component creates a new
      todo.
      */

      axios.post("http://localhost:3000/todos", todo).then(({ data }) => {
        this.todos.push(data);
      });
    },
    fetchData: async function() {
      axios
        .get("http://localhost:3000/todos")
        .then(({ data }) => {
          this.error = null;
          this.todos = data;
        })
        .catch((err) => {
          this.error = err.toString();
        });
    },
    updateTodo: function(todo) {
      axios.patch(`http://localhost:3000/todos/${todo.id}`, todo);
    },
  },
};
</script>

<style>
@import "../../static/App.css";
</style>
