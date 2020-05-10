<template>
  <div id="app">
    <h1>{{ appName }}</h1>

    <div>
      {{ todos.filter((todo) => todo.isComplete).length }} todos completed
    </div>

    <hr />

    <button v-on:click="createTodo">Create Todo</button>

    <ul>
      <li v-for="todo of todos" v-bind:key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
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
  methods: {
    createTodo: function() {
      const todo = {
        id: this.todos.length + 1,
        isComplete: false,
        text: "Do foo",
      };

      this.todos.push(todo);
    },
  },
};
</script>
