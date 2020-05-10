# Style Lab

## Pre-Lab Setup

1. Start the UI.
   - Run `npm run serve src/lab-style/main.js`
2. In a new terminal, start the test runner.
   - Run `npm test lab-style`
   - You'll see test failures, which is expected. All of the tests will be passing after you complete this lab.

## Post-Lab Teardown

1. Stop the UI and test processes.

## Intro

Our app looks terrible because we haven't styled it at all. In this lab, we'll add some CSS.

So far we've seen the `<template>` and `<script>` sections of a Vue file, but there's one more: the `<style>` section. This is where you add CSS to style your app.

In the following example, we're giving all `<h1>` elements green text color:

```vue
<template>
  <h1>Hello</h1>
</template>

<style>
h1 {
  color: green;
}
</style>
```

Just like with CSS, we can use classes instead:

```vue
<template>
  <h1 class="success">Hello</h1>
</template>

<style>
.success {
  color: green;
}
</style>
```

If we want to make a class conditional, we can use the `v-bind:class` directive:

```vue
<template>
  <h1 v-bind:class="{ success: isSuccessful }">Hello</h1>
</template>

<style>
.success {
  color: green;
}
</style>
```

In the above example, the `<h1>` element will only have the `success` class if `isSuccessful` is truthy.

Eventually, you may want to move your CSS out of the `<style>` section and into a separate CSS file. Vue supports CSS sheet imports:

```vue
<template>
  <h1 v-bind:class="{ success: isSuccessful }">Hello</h1>
</template>

<style "./static/styles.css"></style>
```

## Instructions

### App Component

📝 **Your task:** Import the `App.css` stylesheet (located in `src/static/App.css`) into the `App` component. This CSS file contains an `app-statistics` class, which will center text. Use this class to center the "N todos completed" text. Completion of this task will make all of this section's tests pass.

To import a CSS file, we'll use the `<style>` section:

```vue
<style src="../static/App.css"></style>
```

Note that the path to the CSS file is relative to the `App.vue` file.

If you look at your browser, you'll see the app looks a little different. The "N todos completed" text still isn't centered; you'll need to use the `app-statistics` CSS class for that:

```hbs
<div class="app-statistics">
  {{ todos.filter((todo) => todo.isComplete).length }} todos completed
</div>
```

### TodoCreator Component

📝 **Your task:** Import the `TodoCreator.css` stylesheet (located in `src/static/TodoCreator.css`) into the `TodoCreator` component. This CSS file contains a `todo-creator-wrapper` class. Put this class on the `<div>` element, and you should see the text input element widen in your browser. Completion of this task will make all of this section's tests pass.

To import a CSS file, we'll use the `<style>` section:

```vue
<style src="../../static/TodoList.css"></style>
```

Add the `todo-creator-wrapper` class onto the `<div>` element:

```hbs
<div class="todo-creator-wrapper">
```

### TodoList Component

📝 **Your task:** Import the `TodoList.css` stylesheet (located in `src/static/TodoList.css`) into the `TodoList` component. This CSS file contains a `line-through` class. Use this class to conditionally add a "strikethrough" effect on completed tasks. Completion of this task will make all of this section's tests pass.

To import a CSS file, we'll use the `<style>` section:

```vue
<style src="../../static/TodoList.css"></style>
```

Note that the path to the CSS file is relative to the `TodoList.vue` file.

On the `<span>` element, use the `v-bind:class` directive to conditionally add the `line-through` class:

```hbs
<span v-bind:class="{ 'line-through': todo.isComplete }">
  {{ todo.text }}
</span>
```

Don't forget to perform the [post-lab teardown](#post-lab-teardown).

## Resources

- [Official docs](https://vuejs.org/v2/guide/class-and-style.html)
