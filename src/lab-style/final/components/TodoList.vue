<template>
  <ul>
    <li v-for="todo of todos" v-bind:key="todo.id">
      <span v-bind:class="{ 'line-through': todo.isComplete }">
        {{ todo.text }}
      </span>

      <input
        type="checkbox"
        data-testid="todo-checkbox"
        v-model="todo.isComplete"
      />
    </li>
  </ul>
</template>

<script>
export default {
  props: ["todos"],
};
</script>

<style src="../../../static/TodoList.css"></style>
