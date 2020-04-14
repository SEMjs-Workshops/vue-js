<template>
  <div>
    <Todo v-for="todo in todos" :key="todo.key" :data="todo" />
    <TodoCreator v-on:create-todo="createTodo" />
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
      axios.get("http://localhost:3000/todos").then(({ data }) => {
        this.todos = data;
      });
    }
  }
};
</script>
