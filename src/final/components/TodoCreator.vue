<template>
  <div class="todo-creator-wrapper">
    <!-- <input class="todo-creator-text" v-model="todoText" type="text" /> -->
    <v-text-field
      v-model="todoText"
      @keypress.enter="createTodo()"
      dense
      label="New Task"
      outlined
    ></v-text-field>
    <!-- <v-btn v-on:click="createTodo()" color="primary" depressed small
      >Create</v-btn
    > -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: ""
    };
  },
  methods: {
    createTodo() {
      if (this.todoText.length > 0) {
        this.$emit("create-todo", {
          text: this.todoText,
          isComplete: false
        });

        this.todoText = ""
      }
    }
  }
};
</script>

<style scoped>
.todo-creator-submit {
  /* background-color: #ffffff;
  border: 0;
  font-size: 18px;
  padding: 8px; */
}

.todo-creator-text {
  flex-grow: 1;
}

.todo-creator-wrapper {
  display: flex;
}
</style>
