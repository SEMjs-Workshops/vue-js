<template>
  <v-list two-line>
    <v-list-item v-for="todo of todos" v-bind:key="todo.id">
      <v-list-item-content>
        <v-list-item-title
          v-text="todo.text"
          v-bind:class="{ 'line-through': todo.isComplete }"
        ></v-list-item-title>
      </v-list-item-content>

      <v-list-item-action>
        <v-checkbox
          data-testid="is-complete"
          v-model="todo.isComplete"
        ></v-checkbox>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: ["todos"],
};
</script>

<style src="../../../static/TodoList.css"></style>
