<template>
  <div class="todo-creator-wrapper">
    <input type="text" data-testid="todo-creator-input" v-model="todoText" />
    <button v-on:click="createTodo">Create Todo</button>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    createTodo: function() {
      const todo = {
        id: this.todos.length + 1,
        isComplete: false,
        text: this.todoText,
      };

      this.todos.push(todo);
    },
  },
};
</script>

<style scoped>
@import "../../static/TodoCreator.css";
</style>
