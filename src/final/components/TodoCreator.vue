<template>
  <div class="todo-creator-wrapper">
    <v-text-field
      v-model="todoText"
      @keypress.enter="createTodo()"
      dense
      label="New Task"
      outlined
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    createTodo() {
      if (this.todoText.length > 0) {
        this.$emit("create-todo", {
          text: this.todoText,
          isComplete: false,
        });

        this.todoText = "";
      }
    },
  },
};
</script>

<style scoped>
.todo-creator-text {
  flex-grow: 1;
}

.todo-creator-wrapper {
  display: flex;
}
</style>
