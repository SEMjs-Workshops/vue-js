<template>
  <v-list-item v-bind:class="{ 'completed-todo': todo.isComplete }">
    <v-list-item-content class="todo-text">
      <v-list-item-title v-text="todo.title"></v-list-item-title>
      <v-list-item-subtitle v-text="todo.text"></v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <v-checkbox
        v-model="todo.isComplete"
        v-on:change="updateTodo"
      ></v-checkbox>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    updateTodo() {
      this.$emit("update-todo", this.todo);
    }
  }
};
</script>

<style scoped>
.completed-todo .todo-text {
  text-decoration: line-through;
}

.completed-todo {
  background: rgba(0, 0, 0, 0.08);
}
</style>
