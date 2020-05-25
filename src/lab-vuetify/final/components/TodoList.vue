<template>
  <v-list two-line>
    <v-list-item v-for="todo of todos" v-bind:key="todo.id">
      <v-list-item-content>
        <span v-bind:class="{ 'line-through': todo.isComplete }">
          {{ todo.text }}
        </span>
      </v-list-item-content>

      <v-checkbox data-testid="todo-checkbox" v-model="todo.isComplete" />
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: ["todos"],
};
</script>

<style src="../../../static/TodoList.css"></style>
