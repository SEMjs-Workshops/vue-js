<template>
  <div>
    <div v-if="isLoading">Loading...</div>

    <div v-if="!isLoading && error !== null">Could not fetch data</div>

    <div v-if="!isLoading && error === null">
      <Todo v-for="todo in todos" :key="todo.key" :data="todo" />
      <TodoCreator v-on:create-todo="createTodo" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Todo from "./components/Todo.vue";
import TodoCreator from "./components/TodoCreator.vue";

export default {
  components: {
    Todo,
    TodoCreator
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
  methods: {
    createTodo(todo) {
      /*
      This method will be called by the `TodoCreator` component when a todo is 
      created.
      */

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
