<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title
        v-text="todo.text"
        v-bind:class="{ 'line-through': todo.isComplete }"
      ></v-list-item-title>
    </v-list-item-content>

    <v-list-item-action>
      <v-checkbox
        v-model="todo.isComplete"
        v-on:change="updateTodo(todo)"
        data-testid="is-complete"
      ></v-checkbox>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  props: ["todo", "updateTodo"],
};
</script>

<style scoped>
@import "../../../static/Todo.css";
</style>
