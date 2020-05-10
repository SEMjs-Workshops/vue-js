<template>
  <div id="app">
    <h1>{{ appName }}</h1>

    <div>
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
  computed: {
    completedTodosCount: function() {
      return this.todos.filter((todo) => todo.isComplete).length;
    },
  },
  methods: {
    createTodo: function() {
      const todo = {
        id: this.todos.length + 1,
        isComplete: false,
        text: this.todoText,
      };

      this.todos.push(todo);
      this.todoText = "";
    },
  },
};
</script>
