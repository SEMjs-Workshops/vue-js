<template>
  <div id="app">
    <h1>{{ appName }}</h1>

    <h2>
      {{ todos.filter((todo) => todo.isComplete).length }} todos completed
    </h2>

    <hr />

    <div>
      <input data-testid="todo-creator-input" v-model="todoText" />
      <button v-on:click="createTodo" data-testid="todo-creator-button">Create Todo</button>
    </div>

    <ul>
      <li v-for="todo of todos" v-bind:key="todo.id">
        {{ todo.text }}
        <input type="checkbox" data-testid="todo-checkbox" v-model="todo.isComplete"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    completedTodosCount: function() {
      return this.todos.filter((todo) => todo.isComplete).length;
    },
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
  methods: {
    createTodo: function() {
      const todo = {
        id: this.todos.length + 1,
        isComplete: false,
        text: this.todoText,
      };

      this.todos.push(todo);
    },
  },
};
</script>
