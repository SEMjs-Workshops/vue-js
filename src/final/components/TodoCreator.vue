<template>
  <div>
    <input v-model="todoText" type="text" />

    <button class="ui basic blue button" v-on:click="createTodo()">
      Create
    </button>
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
      }
    }
  }
};
</script>
