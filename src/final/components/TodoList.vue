<template>
  <v-list two-line>
    <v-divider v-if="todos.length > 0"></v-divider>

    <template v-for="(todo, index) in todos">
      <Todo v-bind:todo="todo" v-bind:key="todo.id" />

      <v-divider v-bind:key="'div-' + index.toString()"></v-divider>
    </template>
  </v-list>
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
