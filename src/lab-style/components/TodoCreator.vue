<template>
  <div>
    <input
      type="text"
      data-testid="todo-creator-input"
      v-model="todoText"
      @keypress.enter="createTodo"
    />
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
      this.todoText = "";
    },
  },
};
</script>
