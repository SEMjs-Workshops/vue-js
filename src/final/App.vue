<template>
  <div>
    <Todo v-for="todo in todos" :key="todo.key" :data="todo" />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  components: {
    Todo
  },
  data() {
    return {
      todos: [
        { id: 1, text: "Call mom", isComplete: false },
        { id: 2, text: "Buy groceries", isComplete: true }
      ]
    };
  }
};
</script>
