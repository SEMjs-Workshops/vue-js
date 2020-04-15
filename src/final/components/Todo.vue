<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title v-text="todo.title"></v-list-item-title>
      <v-list-item-subtitle v-text="todo.text"></v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <v-checkbox v-model="todo.isComplete"></v-checkbox>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"]
};
</script>
