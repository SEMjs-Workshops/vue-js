<template>
  <div id="app">
    <h1>{{ appName }}</h1>

    <div>
      {{ todos.filter((todo) => todo.isComplete).length }} todos completed
    </div>

    <hr />

    <div>
      <input data-testid="todo-creator-input" />
      <button v-on:click="createTodo">
        Create Todo
      </button>
    </div>

    <ul>
      <li v-for="todo of todos" v-bind:key="todo.id">
        <span>{{ todo.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
        text: "Do foo",
      };

      this.todos.push(todo);
      this.todoText = "";
    },
  },
};
</script>
