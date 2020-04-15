<template>
  <div class="todo-list-wrapper">
    <Todo v-for="todo in todos" :key="todo.key" :data="todo" />
  </div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  name: "TodoList",
  props: ["todos"],
  components: {
    Todo
  }
};
</script>

<style scoped>
.todo-list-wrapper {
  border: 1px solid #4d4d4d;
  border-bottom: 0;
}
</style>
