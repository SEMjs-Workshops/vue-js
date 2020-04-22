<template>
  <v-app>
    <div class="app-wrapper">
      <h1>Todo-aloo</h1>

      <div>
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
      todos: [
        {
          id: 0,
          isComplete: false,
          text: "Call mom",
        },
      ],
    };
  },
  computed: {
    completedTodoCount: function() {
      return this.todos.filter((todo) => todo.isComplete).length;
    },
  },
  methods: {
    createTodo(todo) {
      todo.id = this.todos.length;
      this.todos.push(todo);
    },
    updateTodo(todo) {
      /*
      This method will be called when the `Todo` component updates a todo. The
      event will go thru the `TodoList` component. In other words, the event
      flow is `Todo` -> `TodoList` -> `updateTodo`.
      */

      this.todos[todo.id] = todo;
    },
  },
};
</script>

<style>
@import "../../static/App.css";
</style>
