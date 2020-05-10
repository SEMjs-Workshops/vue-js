<template>
  <div>
    <input type="text" data-testid="todo-creator-input" v-model="todoText" />
    <button v-on:click="createTodo">Create Todo</button>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  methods: {
    createTodo: function() {
      const todo = {
        id: this.todos.length + 1,
        isComplete: false,
        text: this.todoText,
      };

      this.todos.push(todo);
      this.todoText = "";
    },
  },
};
</script>
