# Form Input Bindings Lab

## Pre-Lab Setup

1. Start the UI.
   - Run `npm run serve lab-form-input-bindings`
2. In a new terminal, start the test runner.
   - Run `npm run test lab-form-input-bindings`
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

The "Create Todo" button still creates todos with dummy "Do foo" text. Instead of using the dummy text, let's allow our users to specify the todo text in the `<input>` element.

**Your task:** Update `App.vue` so that users can specify text for created todos. Completion of this task will make all of this section's tests will pass.

We'll add a two-way data binding to the `<input>`, using the `v-model` directive. Two-way data binding connects a model and a view. We already have the view (the `<input>` element), so let's create the model. Add `todoText: ""` to your data object. Now that we have the model and view, just add `v-model="todoText"` to the `<input>` element.

The two-way data binding is working, so we just need to replace `"Do foo"` with `this.todoText` in the `createTodo` method.

Give it a try in your browser! Enter text into the input, click the button, and see your text appear in the todo list.

### Updating Todo `isComplete`

Next, let's add a feature that allows users to mark todos as complete. Our product manager wants a checkbox next to each todo, and clicking a todo's checkbox toggles its `isComplete` attribute.

**Your task:** Add a checkbox next to each todo. Toggling a todo's checkbox will toggle its `isComplete` attribute, which will in turn update the "N todos completed" message. Completion of this task will make all of this section's tests will pass.

Start by adding the checkbox like this:

```hbs
<input type="checkbox" data-testid="todo-checkbox" />
```

If you click a checkbox, the "N todos completed" message doesn't change. This is because we haven't added two-way data binding yet. Once you add two-way data binding for the `isComplete` attribute, you'll see the "N todos completed" message update.

Don't forget to perform the [post-lab teardown](#post-lab-teardown).

## Resources

- [Official docs](https://vuejs.org/v2/guide/forms.html)
