<template>
  <div>
    <Todo v-for="todo in todos" :key="todo.key" :data="todo" />
    <TodoCreator v-on:create-todo="createTodo" />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import TodoCreator from "./components/TodoCreator.vue";

export default {
  components: {
    Todo,
    TodoCreator
  },
  data() {
    return {
      todos: [
        { id: 1, text: "Call mom", isComplete: false },
        { id: 2, text: "Buy groceries", isComplete: true }
      ]
    };
  },
  methods: {
    createTodo(todo) {
      this.todos = [...this.todos, todo];
    }
  }
};
</script>
