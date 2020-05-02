# Event Handling Lab

## Pre-Lab Setup

1. Start the UI.
   - Run `npm run serve src/lab-event-handling/main.js`
2. In a new terminal, start the test runner.
   - Run `npm test lab-event-handling`
   - You'll see test failures, which is expected. All of the tests will be passing after you complete this lab.

## Post-Lab Teardown

1. Stop the UI and test processes.

## Intro

This lab will explore usage of the `v-model` directive, which creates two-way data bindings on form inputs.

Two-way data binding connects the "model" (i.e. data stored in JavaScript) with the "view" (e.g. text displayed in a text input). If you update the model, the view updates as well -- and vice-versa.

Let's look at an example:

```vue
<template>
  <div>
    <input v-model="text" />

    <div>You entered: {{ text }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>
```

When the user enters text into the input, we want to display that same text below. By adding `v-model="text"` to the input, we're creating a two-way data binding between the input's value and the `text` data. When the user types in the input, the `text` data is updated, and the new text appears below the input. If you change the `text` data directly, then the input's value would also update.

## Instructions

### The `v-model` Directive

The "Create Todo" button still creates todos with dummy "Do foo" text. Instead of using the dummy text, let's allow our users to specify the todo text in the `<input>` element. How would you update the app to accomplish this?

We'll add a two-way data binding to the `<input>`, using the `v-model` directive. Two-way data binding connects a model and a view. We already have the view (the `<input>` element), so let's create the model. Add `todoText: ""` to your data object. Now that we have the model and view, just add `v-model="todoText"` tp the `<input>` element.

Now that the two-way data binding is working, we just need to replace `"Do foo"` with `this.todoText` in the `createTodo` method.

Give it a try in your browser! Enter text into the input, click the button, and see your text appear in the todo list. This section's tests should be passing.

Don't forget to perform the [post-lab teardown](#post-lab-teardown).

## Resources

- [Official docs](https://vuejs.org/v2/guide/forms.html)
